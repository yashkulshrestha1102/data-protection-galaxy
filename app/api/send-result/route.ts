import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const { name, email, score, passingScore, passed } = await request.json();

    // Send email with certificate
    const { data, error } = await resend.emails.send({
      from: 'Legal Galaxy <certificates@legalgalaxy.com>',
      to: [email],
      subject: '🎉 Your DPDPA Certificate - Legal Galaxy',
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <style>
            body { font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; }
            .header { text-align: center; padding: 20px 0; border-bottom: 3px solid #f59e0b; }
            .header h1 { color: #1a1a2e; font-size: 28px; margin: 0; }
            .header p { color: #6b7280; margin: 5px 0; }
            .content { padding: 30px 0; }
            .score { text-align: center; font-size: 48px; font-weight: bold; color: #7c3aed; }
            .status { text-align: center; font-size: 20px; padding: 10px 0; }
            .passed { color: #10b981; }
            .failed { color: #ef4444; }
            .details { background: #f3f4f6; padding: 20px; border-radius: 10px; margin: 20px 0; }
            .details table { width: 100%; }
            .details td { padding: 8px 0; }
            .footer { text-align: center; padding: 20px 0; border-top: 1px solid #e5e7eb; color: #6b7280; font-size: 14px; }
            .button { display: inline-block; background: linear-gradient(to right, #7c3aed, #6d28d9); color: white; padding: 12px 30px; border-radius: 8px; text-decoration: none; margin: 20px 0; }
          </style>
        </head>
        <body>
          <div class="header">
            <h1>✨ LEGAL GALAXY</h1>
            <p>Powered by Business Excellence</p>
          </div>
          
          <div class="content">
            <h2 style="text-align:center; color:#1a1a2e;">Certificate of Completion</h2>
            <p style="text-align:center; color:#6b7280;">This certifies that</p>
            <h1 style="text-align:center; color:#1a1a2e; font-size:32px;">${name}</h1>
            <p style="text-align:center; color:#6b7280;">has successfully completed the comprehensive course on</p>
            <h3 style="text-align:center; color:#1a1a2e;">Digital Personal Data Protection Act, 2023</h3>
            <p style="text-align:center; color:#6b7280;">Master Course</p>
            
            <div class="details">
              <table>
                <tr><td><strong>Score</strong></td><td style="text-align:right;">${score}%</td></tr>
                <tr><td><strong>Status</strong></td><td style="text-align:right; color:${passed ? '#10b981' : '#ef4444'}; font-weight:bold;">${passed ? '✅ PASSED' : '❌ NOT PASSED'}</td></tr>
                <tr><td><strong>Passing Score</strong></td><td style="text-align:right;">${passingScore}%</td></tr>
                <tr><td><strong>Date</strong></td><td style="text-align:right;">${new Date().toLocaleDateString('en-IN', { day: 'numeric', month: 'long', year: 'numeric' })}</td></tr>
              </table>
            </div>
            
            ${passed ? `
              <div style="text-align:center; padding: 20px; background: #ecfdf5; border-radius: 10px; border: 1px solid #10b981;">
                <p style="font-size:18px; color:#10b981;">🎉 Congratulations! You have successfully completed the certification.</p>
                <p style="color:#6b7280;">Your certificate is attached to this email.</p>
                <a href="${process.env.NEXT_PUBLIC_APP_URL}/certificate" class="button">View Certificate Online</a>
              </div>
            ` : `
              <div style="text-align:center; padding: 20px; background: #fef2f2; border-radius: 10px; border: 1px solid #ef4444;">
                <p style="font-size:18px; color:#ef4444;">📚 Keep Learning!</p>
                <p style="color:#6b7280;">You scored ${score}%. You need ${passingScore}% to pass.</p>
                <p style="color:#6b7280;">Review the modules and try again.</p>
              </div>
            `}
          </div>
          
          <div class="footer">
            <p>© ${new Date().getFullYear()} Legal Galaxy. All rights reserved.</p>
            <p style="font-size:12px;">Certificate ID: LG-DPDPA-${new Date().getFullYear()}-${Math.random().toString(36).substring(2, 6).toUpperCase()}</p>
          </div>
        </body>
        </html>
      `,
    });

    if (error) {
      console.error('Email error:', error);
      return NextResponse.json({ success: false, message: 'Failed to send email' }, { status: 500 });
    }

    return NextResponse.json({
      success: true,
      message: passed ? 'Certificate sent successfully!' : 'Result recorded.',
    });
  } catch (error) {
    console.error('Error:', error);
    return NextResponse.json(
      { success: false, message: 'Failed to send result' },
      { status: 500 }
    );
  }
}