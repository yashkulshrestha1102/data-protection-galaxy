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

    // 👇 RETRY LOGIC ADD KI HAI (503 Error se bachne ke liye)
    const generateWithRetry = async (params: any, maxRetries = 3) => {
      for (let i = 0; i < maxRetries; i++) {
        try {
          return await ai.models.generateContent(params);
        } catch (error: any) {
          if (error?.status === 503 || error?.status === 429) {
            const waitTime = Math.pow(2, i) * 1000; // 1s, 2s, 4s
            console.log(`Gemini busy, retrying in ${waitTime}ms...`);
            await new Promise(res => setTimeout(res, waitTime));
          } else {
            throw error; 
          }
        }
      }
      throw new Error('Max retries reached');
    };

    // 1. First attempt
    const response = await generateWithRetry({
      model: 'gemini-3.6-flash',
      contents: message,
      config: {
        systemInstruction: systemPrompt,
        tools: [{ functionDeclarations: tools }],
      },
    });

    // Check if Gemini wants to call a function
    const functionCalls = response.functionCalls;
    
    if (functionCalls && functionCalls.length > 0) {
      const call = functionCalls[0];
      
      // Tool 1: Navigate
      if (call.name === 'navigate') {
        return NextResponse.json({ 
          type: 'navigate', 
          route: call.args.route, 
          reply: `Sure, navigating you to ${call.args.route}` 
        });
      }
      
      // Tool 2: Search Knowledge
      if (call.name === 'search_knowledge') {
        const searchRes = await fetch(`${process.env.NEXT_PUBLIC_APP_URL}/api/search`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ query: call.args.query })
        });
        const searchData = await searchRes.json();
        
        // 👇 YAHAN MODEL UPDATE KIYA HAI (2.5 se 3.8)
        const finalResponse = await generateWithRetry({
          model: 'gemini-3.6-flash',
          contents: [
            { role: 'user', parts: [{ text: message }] },
            { role: 'model', parts: [{ functionCall: call }] },
            { role: 'user', parts: [{ functionResponse: { name: call.name, response: searchData } }] }
          ],
          config: { systemInstruction: systemPrompt }
        });

        return NextResponse.json({ 
          type: 'reply', 
          reply: finalResponse.text 
        });
      }
    }

    // Normal text reply
    return NextResponse.json({ type: 'reply', reply: response.text });

  } catch (error) {
    console.error('Chat API error:', error);
    return NextResponse.json({ type: 'reply', reply: "Sorry, I'm having trouble connecting right now." }, { status: 500 });
  }
}