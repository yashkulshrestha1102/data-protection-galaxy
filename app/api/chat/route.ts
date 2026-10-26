// app/api/chat/route.ts
import { NextResponse } from 'next/server';
import { GoogleGenAI, Type } from '@google/genai';

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

export async function POST(req: Request) {
  try {
    const { message } = await req.json();

    const tools = [
      {
        name: 'navigate',
        description: 'Navigate the user to a specific page on the Legal Galaxy website.',
        parameters: {
          type: Type.OBJECT,
          properties: {
            route: {
              type: Type.STRING,
              description: 'The route path',
              enum: ['/', '/scorecard', '/galaxy', '/generator', '/certificate-course', '/insight', '/resources/guides', '/resources/case-studies', '/map', '/about', '/contact']
            },
            reason: { type: Type.STRING, description: 'Why navigating here' }
          },
          required: ['route']
        }
      },
      {
        name: 'search_knowledge',
        description: 'Search the Legal Galaxy knowledge base for DPDPA, privacy, and data protection information. ALWAYS use this when the user asks a question about DPDPA or legal concepts.',
        parameters: {
          type: Type.OBJECT,
          properties: {
            query: { type: Type.STRING, description: 'The search query' }
          },
          required: ['query']
        }
      }
    ];

    const systemPrompt = `You are a helpful DPDPA expert assistant for Legal Galaxy.
CRITICAL RULES:
1. For ANY question about DPDPA, privacy, or data protection, you MUST first call the 'search_knowledge' tool.
2. Base your answer ONLY on the context returned from the tool.
3. If no relevant info is found, say "I don't have information about that in my knowledge base."
4. Never make up information about DPDPA.
Navigation:
- You can navigate users to relevant pages using the 'navigate' tool.`;

    // 🔥 STEP 1: Pehli call (Tool decide karne ke liye)
    const response = await ai.models.generateContent({
      model: 'gemini-3.6-flash',
      contents: message,
      config: {
        systemInstruction: systemPrompt,
        tools: [{ functionDeclarations: tools }],
      },
    });

    const functionCalls = response.functionCalls;
    
    if (functionCalls && functionCalls.length > 0) {
      const call = functionCalls[0];
      
      // Navigation Tool
      if (call.name === 'navigate') {
        return NextResponse.json({ 
          type: 'navigate', 
          route: call.args.route, 
          reply: `Sure, navigating you to ${call.args.route}` 
        });
      }
      
      // Search Tool
      if (call.name === 'search_knowledge') {
        const searchRes = await fetch(`${process.env.NEXT_PUBLIC_APP_URL}/api/search`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ query: call.args.query })
        });
        const searchData = await searchRes.json();
        
        // 🔥 STEP 2: Sabse Important - History ko waise hi bhejna hai jaisa Gemini ne diya
        // Hum 'response.candidates[0].content' use karenge jisme signature chhupa hota hai
        const finalResponse = await ai.models.generateContent({
          model: 'gemini-3.6-flash',
          contents: [
            { role: 'user', parts: [{ text: message }] },
            // 👇 Ye line signature ko carry karti hai
            response.candidates[0].content, 
            { role: 'user', parts: [{ functionResponse: { name: call.name, response: searchData } }] }
          ],
          config: { 
            systemInstruction: systemPrompt,
            // Tools yahan mat bhej, warna wo phir se tool call karne ki koshish karega
          }
        });

        return NextResponse.json({ 
          type: 'reply', 
          reply: finalResponse.text || "I found some information but couldn't generate a summary." 
        });
      }
    }

    // Normal reply
    return NextResponse.json({ type: 'reply', reply: response.text || "I'm here to help with DPDPA." });

  } catch (error) {
    console.error('Chat API error:', error);
    return NextResponse.json({ type: 'reply', reply: "Sorry, I'm having trouble connecting right now." }, { status: 500 });
  }
}