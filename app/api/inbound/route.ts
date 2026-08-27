import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

type EmailReceivedEvent = {
  type: 'email.received';
  created_at: string;
  data: {
    email_id: string;
    from: string;
    to: string[];
    subject: string;
    attachments: { id: string; filename: string; content_type: string }[];
  };
};

export async function POST(request: Request) {
  try {
    const event = (await request.json()) as EmailReceivedEvent;

    if (event.type !== 'email.received') {
      return NextResponse.json({ ok: true });
    }

    const { email_id, from, subject } = event.data;

    // ===== FULL EMAIL CONTENT FETCH KARO =====
    const { data: email } = await resend.emails.receiving.get(email_id);

    console.log('📧 New Reply Received!');
    console.log('From:', from);
    console.log('Subject:', subject);
    console.log('Body:', email?.text || email?.html);

    // ===== YAHAN TUJHE NOTIFICATION BHEJNA HAI =====
    // 1. Admin ko email bhejo
    // 2. Database mein save karo
    // 3. Telegram/Slack notification
    // 4. Dashboard mein show karo

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error('Inbound webhook error:', error);
    return NextResponse.json({ ok: true }); // Always return 2xx
  }
}