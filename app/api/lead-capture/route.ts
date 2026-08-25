import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    console.log('📥 New Lead:', body);

    const { name, email, phone, company, designation, requirement, interests, tool, type, source } = body;

    // Validate email
    if (!email) {
      return NextResponse.json(
        { success: false, message: 'Email is required' },
        { status: 400 }
      );
    }

    // ===== SEND EMAIL (Using Resend) =====
    let emailSent = false;
    try {
      const { Resend } = require('resend');
      const resend = new Resend(process.env.RESEND_API_KEY);

      const { data, error } = await resend.emails.send({
        from: 'Legal Galaxy <onboarding@resend.dev>',
        to: [email],
        subject: source === 'generator' 
          ? '📄 Your Privacy/AI Governance Document' 
          : '📋 We received your inquiry',
        html: `
          <!DOCTYPE html>
          <html>
          <head>
            <style>
              body { font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; }
              .header { text-align: center; padding: 20px 0; border-bottom: 3px solid #7c3aed; }
              .header h1 { color: #1a1a2e; font-size: 28px; margin: 0; }
              .header p { color: #6b7280; margin: 5px 0; }
              .content { padding: 30px 0; }
              .details { background: #f3f4f6; padding: 20px; border-radius: 10px; margin: 20px 0; }
              .footer { text-align: center; padding: 20px 0; border-top: 1px solid #e5e7eb; color: #6b7280; font-size: 14px; }
            </style>
          </head>
          <body>
            <div class="header">
              <h1>✨ LEGAL GALAXY</h1>
              <p>Privacy & AI Governance Universe</p>
            </div>
            
            <div class="content">
              ${source === 'generator' ? `
                <h2 style="color:#1a1a2e;">📄 Your Document is Ready!</h2>
                <p>Dear User,</p>
                <p>Thank you for using the Legal Galaxy Document Generator.</p>
                <div class="details">
                  <p><strong>Document Type:</strong> ${tool || 'Privacy/AI Document'}</p>
                  <p><strong>Category:</strong> ${type === 'privacy' ? 'Privacy' : 'AI Governance'}</p>
                  <p style="margin-top:10px;">Please find your generated document attached to this email.</p>
                </div>
                <p style="text-align:center; margin:20px 0;">
                  <a href="${process.env.NEXT_PUBLIC_APP_URL || 'https://data-protection-galaxy.vercel.app'}/generator" style="display:inline-block; background: linear-gradient(to right, #7c3aed, #6d28d9); color: white; padding: 12px 30px; border-radius: 8px; text-decoration: none;">
                    Generate More Documents →
                  </a>
                </p>
              ` : `
                <h2 style="color:#1a1a2e;">📋 We Received Your Inquiry</h2>
                <p>Dear ${name || 'User'},</p>
                <p>Thank you for reaching out to Legal Galaxy. Our team will connect with you within 24 hours.</p>
                <div class="details">
                  <p><strong>Name:</strong> ${name || 'Not provided'}</p>
                  <p><strong>Email:</strong> ${email}</p>
                  <p><strong>Phone:</strong> ${phone || 'Not provided'}</p>
                  <p><strong>Company:</strong> ${company || 'Not provided'}</p>
                  <p><strong>Interests:</strong> ${interests ? interests.join(', ') : 'Not specified'}</p>
                  <p><strong>Requirement:</strong> ${requirement || 'Not specified'}</p>
                </div>
                <p style="text-align:center; margin:20px 0;">
                  <a href="${process.env.NEXT_PUBLIC_APP_URL || 'https://data-protection-galaxy.vercel.app'}/contact" style="display:inline-block; background: linear-gradient(to right, #7c3aed, #6d28d9); color: white; padding: 12px 30px; border-radius: 8px; text-decoration: none;">
                    Visit Legal Galaxy →
                  </a>
                </p>
              `}
            </div>
            
            <div class="footer">
              <p>© ${new Date().getFullYear()} Legal Galaxy. All rights reserved.</p>
              <p style="font-size:12px;">Powered by BusinezExcellence StartX LLP</p>
            </div>
          </body>
          </html>
        `,
      });

      if (error) {
        console.error('Resend error:', error);
      } else {
        emailSent = true;
        console.log('✅ Email sent to:', email);
      }
    } catch (emailError) {
      console.error('Email sending failed:', emailError);
    }

    return NextResponse.json({ 
      success: true, 
      emailSent, 
      message: emailSent ? 'Email sent!' : 'Lead captured but email failed.' 
    });
  } catch (error) {
    console.error('❌ Error:', error);
    return NextResponse.json(
      { success: false, message: 'Internal server error' },
      { status: 500 }
    );
  }
}