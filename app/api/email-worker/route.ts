import { NextResponse } from 'next/server';
import { Redis } from '@upstash/redis';
import { Resend } from 'resend';

const redis = new Redis({
  url: process.env.UPSTASH_REDIS_REST_URL!,
  token: process.env.UPSTASH_REDIS_REST_TOKEN!,
});

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const { to, subject, html, from } = await request.json();

    // Send email via Resend
    const { data, error } = await resend.emails.send({
      from: from || 'Legal Galaxy <onboarding@resend.dev>',
      to: [to],
      subject,
      html,
    });

    if (error) {
      // Store error in Redis
      await redis.set(`email:${to}:error`, JSON.stringify({
        error,
        timestamp: new Date().toISOString(),
      }));
      return NextResponse.json({ success: false, error }, { status: 500 });
    }

    // Store success
    await redis.set(`email:${to}:success`, JSON.stringify({
      data,
      timestamp: new Date().toISOString(),
    }));

    return NextResponse.json({ success: true, data });
  } catch (error) {
    console.error('Email worker error:', error);
    return NextResponse.json({ success: false, error }, { status: 500 });
  }
}