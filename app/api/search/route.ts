import { NextResponse } from 'next/server';
import { Index } from '@upstash/vector';
import { rateLimiter } from '@/app/lib/rate-limit';

const index = new Index({
  url: process.env.UPSTASH_VECTOR_REST_URL!,
  token: process.env.UPSTASH_VECTOR_REST_TOKEN!,
});

export async function POST(req: Request) {
  try {
    const ip = req.headers.get('x-forwarded-for')?.split(',')[0] ?? 'anonymous';
    const { success } = await rateLimiter.limit(`search:${ip}`);
    if (!success) {
      return NextResponse.json({ error: 'Too many requests' }, { status: 429 });
    }

    const { query } = await req.json();
    if (!query || typeof query !== 'string' || query.length > 500) {
      return NextResponse.json({ error: 'Valid query is required' }, { status: 400 });
    }

    const results = await index.query({ data: query, topK: 5, includeMetadata: true });

    const context = results
      .map((r: any) => `--- Source: ${r.metadata?.title || 'No Title'} ---\n${r.data || ''}`)
      .join('\n\n');

    return NextResponse.json({
      success: true,
      context: context || 'No relevant information found.',
      results,
    });
  } catch (error) {
    console.error('Search API error:', error);
    return NextResponse.json({ error: 'Search failed' }, { status: 500 });
  }
}