import { NextResponse } from 'next/server';
import { Redis } from '@upstash/redis';
import { Resend } from 'resend';
import { verifySignatureAppRouter } from '@upstash/qstash/nextjs';

// ✅ Lazy getters — build-time pe instantiate nahi honge
function getRedis() {
  return new Redis({
    url: process.env.UPSTASH_REDIS_REST_URL!,
    token: process.env.UPSTASH_REDIS_REST_TOKEN!,
  });
}

function getResend() {
  return new Resend(process.env.RESEND_API_KEY);
}

// Sender fixed hai, caller ko control nahi dena
const FROM = 'Legal Galaxy <office@businezexcellence.com>';
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

async function handler(request: Request) {
  const redis = getRedis();
  const resend = getResend();

  try {
    const { to, subject, html } = await request.json();

    if (typeof to !== 'string' || !EMAIL_RE.test(to) || !subject || !html) {
      return NextResponse.json({ success: false, error: 'Invalid payload' }, { status: 400 });
    }

    const { data, error } = await resend.emails.send({
      from: FROM,
      to: [to],
      subject: String(subject).slice(0, 200),
      html,
    });

    if (error) {
      await redis.set(
        `email:${to}:error`,
        JSON.stringify({ error, timestamp: new Date().toISOString() }),
        { ex: 60 * 60 * 24 * 30 }
      );
      return NextResponse.json({ success: false, error }, { status: 500 });
    }

    await redis.set(
      `email:${to}:success`,
      JSON.stringify({ data, timestamp: new Date().toISOString() }),
      { ex: 60 * 60 * 24 * 30 }
    );

    return NextResponse.json({ success: true, data });
  } catch (error) {
    console.error('Email worker error:', error);
    return NextResponse.json({ success: false }, { status: 500 });
  }
}

// ✅ Build-time safe — POST ko function ke andar wrap karo
export async function POST(request: Request) {
  const currentKey = process.env.QSTASH_CURRENT_SIGNING_KEY;
  const nextKey = process.env.QSTASH_NEXT_SIGNING_KEY;

  if (!currentKey || !nextKey) {
    console.error('[email-worker] QStash signing keys missing');
    return NextResponse.json(
      { success: false, error: 'Server configuration error' },
      { status: 500 }
    );
  }

  const verifiedHandler = verifySignatureAppRouter(handler, {
    currentSigningKey: currentKey,
    nextSigningKey: nextKey,
  });

  return verifiedHandler(request);
}