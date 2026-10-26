// app/api/search/route.ts
import { NextResponse } from 'next/server';
import { Index } from '@upstash/vector';

// Yahan apna Upstash URL aur Token daal (jo script mein daala tha)
const index = new Index({
  url: "https://flexible-pug-3904-us1-vector.upstash.io",
  token: "ABUFMGZsZXhpYmxlLXB1Zy0zOTA0LXVzMWFkbWluWTJJeU9UQmhPRE10WlRnek9TMDBOalUyTFdFM1ptSXRPRFl4TW1VNU16VTVOR1k1", 
});

export async function POST(req: Request) {
  try {
    const { query } = await req.json();

    if (!query) {
      return NextResponse.json({ error: 'Query is required' }, { status: 400 });
    }

    // Vector database mein search karo
    const results = await index.query({
      data: query,
      topK: 5,
      includeMetadata: true,
    });

    // Context format karo AI ke liye
    const context = results
      .map((r: any) => {
        const title = r.metadata?.title || 'No Title';
        const content = r.data || ''; 
        return `--- Source: ${title} ---\n${content}`;
      })
      .join('\n\n');

    return NextResponse.json({
      success: true,
      context: context || 'No relevant information found.',
      results: results 
    });

  } catch (error) {
    console.error('Search API error:', error);
    return NextResponse.json({ error: 'Search failed' }, { status: 500 });
  }
}
