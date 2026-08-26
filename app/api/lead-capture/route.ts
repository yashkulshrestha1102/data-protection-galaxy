import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const { email, tool, type, name } = await request.json();

    if (!email) {
      return NextResponse.json(
        { success: false, message: 'Email is required' },
        { status: 400 }
      );
    }

    // ===== SEND EMAIL ONLY (Skip Google Sheets for now) =====
    try {
      await resend.emails.send({
        from: 'Legal Galaxy <onboarding@resend.dev>',
        to: [email],
        subject: `📄 Your ${tool || 'Privacy'} Document`,
        html: `
          <h1>Your Document is Ready!</h1>
          <p>Thank you for using Legal Galaxy.</p>
          <p><strong>Document:</strong> ${tool}</p>
          <p><strong>Category:</strong> ${type === 'privacy' ? 'Privacy' : 'AI Governance'}</p>
          <a href="${process.env.NEXT_PUBLIC_APP_URL}/generator">Generate More</a>
        `,
      });
    } catch (emailError) {
      console.error('Email error:', emailError);
    }

    return NextResponse.json({ 
      success: true, 
      message: 'Email sent!' 
    });
  } catch (error) {
    console.error('Error:', error);
    return NextResponse.json(
      { success: false, message: 'Server error' },
      { status: 500 }
    );
  }
}