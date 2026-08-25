import { NextResponse } from 'next/server';
import { rateLimiter, emailRateLimiter } from '@/app/lib/rate-limit';
import { queueEmail } from '@/app/lib/email-queue';

export async function POST(request: Request) {
  try {
    const ip = request.headers.get('x-forwarded-for') || 'anonymous';
    const body = await request.json();
    const { email, tool, type, source, name, phone, company } = body;

    // ===== RATE LIMITING =====
    const { success: globalSuccess } = await rateLimiter.limit(ip);
    if (!globalSuccess) {
      return NextResponse.json(
        { success: false, message: 'Too many requests. Please try again later.' },
        { status: 429 }
      );
    }

    // ===== EMAIL RATE LIMITING =====
    const { success: emailSuccess } = await emailRateLimiter.limit(email);
    if (!emailSuccess) {
      return NextResponse.json(
        { success: false, message: 'Email rate limit exceeded. Please try again later.' },
        { status: 429 }
      );
    }

    // ===== VALIDATION =====
    if (!email) {
      return NextResponse.json(
        { success: false, message: 'Email is required' },
        { status: 400 }
      );
    }

    // ===== GENERATE DOCUMENT CONTENT =====
    const documentContent = generateDocument(tool, type, body);
    const downloadLink = `${process.env.NEXT_PUBLIC_APP_URL}/api/download-document?tool=${tool}&email=${email}`;

    // ===== QUEUE EMAIL =====
    const emailHtml = `
      <!DOCTYPE html>
      <html>
      <head><style>
        body { font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; }
        .header { text-align: center; padding: 20px 0; border-bottom: 3px solid #7c3aed; }
        .header h1 { color: #1a1a2e; }
        .content { padding: 30px 0; }
        .button { display: inline-block; background: linear-gradient(to right, #7c3aed, #6d28d9); color: white; padding: 12px 30px; border-radius: 8px; text-decoration: none; }
        .footer { text-align: center; padding: 20px 0; border-top: 1px solid #e5e7eb; color: #6b7280; }
      </style></head>
      <body>
        <div class="header">
          <h1>✨ LEGAL GALAXY</h1>
          <p>Privacy & AI Governance Universe</p>
        </div>
        <div class="content">
          <h2>📄 Your Document is Ready!</h2>
          <p>Dear ${name || 'User'},</p>
          <p>Thank you for using the Legal Galaxy Document Generator.</p>
          <div style="background: #f3f4f6; padding: 20px; border-radius: 10px; margin: 20px 0;">
            <p><strong>Document Type:</strong> ${tool}</p>
            <p><strong>Category:</strong> ${type === 'privacy' ? 'Privacy' : 'AI Governance'}</p>
          </div>
          <p style="text-align:center;">
            <a href="${downloadLink}" class="button">📥 Download Your Document</a>
          </p>
          <p style="text-align:center; color:#6b7280;">This document will be available for 7 days.</p>
        </div>
        <div class="footer">
          <p>© ${new Date().getFullYear()} Legal Galaxy. All rights reserved.</p>
        </div>
      </body>
      </html>
    `;

    const messageId = await queueEmail({
      to: email,
      subject: `📄 Your ${tool.replace('-', ' ')} Document`,
      html: emailHtml,
    });

    // ===== STORE LEAD IN REDIS =====
    const redis = (await import('@upstash/redis')).Redis.fromEnv();
    await redis.set(`lead:${email}:${Date.now()}`, JSON.stringify({
      email,
      tool,
      type,
      source,
      name,
      phone,
      company,
      createdAt: new Date().toISOString(),
      messageId,
    }));

    return NextResponse.json({
      success: true,
      messageId,
      message: 'Document generation started. Check your email.',
    });
  } catch (error) {
    console.error('❌ Lead capture error:', error);
    return NextResponse.json(
      { success: false, message: 'Internal server error' },
      { status: 500 }
    );
  }
}

// ===== DOCUMENT GENERATOR =====
function generateDocument(tool: string, type: string, data: any): string {
  const templates: Record<string, string> = {
    'privacy-notice': `
      # Privacy Policy
      
      **Effective Date:** ${new Date().toLocaleDateString()}
      
      ## 1. Introduction
      ${data.company || '[Company Name]'} is committed to protecting your privacy.
      
      ## 2. Data We Collect
      We collect personal data as necessary for our business operations.
      
      ## 3. Your Rights
      You have the right to access, correct, and delete your data.
      
      ## 4. Contact
      For privacy concerns, contact us at ${data.email || 'privacy@company.com'}.
    `,
    // Add more templates...
  };

  return templates[tool] || templates['privacy-notice'];
}