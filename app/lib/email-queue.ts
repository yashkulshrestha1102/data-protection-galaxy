import { Client as QStashClient } from "@upstash/qstash";
import { Redis } from "@upstash/redis";

const redis = new Redis({
  url: process.env.UPSTASH_REDIS_REST_URL!,
  token: process.env.UPSTASH_REDIS_REST_TOKEN!,
});

const qstash = new QStashClient({
  token: process.env.QSTASH_TOKEN!,
});

export interface EmailJob {
  to: string;
  subject: string;
  html: string;
  from?: string;
}

// Add email to queue (async)
export async function queueEmail(emailData: EmailJob): Promise<string> {
  const messageId = await qstash.publishJSON({
    url: `${process.env.NEXT_PUBLIC_APP_URL}/api/email-worker`,
    body: emailData,
    retries: 3,
    delay: 0,
  });

  // Store in Redis for status tracking
  await redis.set(`email:${messageId}`, JSON.stringify({
    ...emailData,
    status: 'queued',
    createdAt: new Date().toISOString(),
  }));

  return messageId;
}

// Get email status
export async function getEmailStatus(messageId: string): Promise<any> {
  const data = await redis.get(`email:${messageId}`);
  return data ? JSON.parse(data as string) : null;
}