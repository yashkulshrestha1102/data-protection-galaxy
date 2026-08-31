import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const { name, email, company, score, categoryScores, riskLevel } = await request.json();

    const html = `
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Your Privacy & AI Governance Report</title>
      </head>
      <body style="font-family: 'Segoe UI', Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 0; background: #f5f7f6;">

        <!-- Header -->
        <div style="background: #004d40; padding: 30px 20px; text-align: center;">
          <div style="font-size: 20px; font-weight: 600; color: #ffffff;">BusinezExcellence</div>
          <div style="font-size: 13px; color: #80cbc4; margin-top: 4px;">Legal Galaxy · Privacy & AI Governance</div>
        </div>

        <!-- Content -->
        <div style="background: #ffffff; padding: 30px; margin: 20px; border-radius: 12px; box-shadow: 0 4px 12px rgba(0,0,0,0.05);">

          <!-- Greeting -->
          <p style="color: #1a2a2a; font-size: 16px; font-weight: 500; margin: 0 0 8px 0;">
            Dear ${name || 'User'},
          </p>
          <p style="color: #3a5a5a; font-size: 14px; line-height: 1.7; margin: 0 0 20px 0;">
            Thank you for completing the Privacy & AI Governance Assessment. Based on your responses, we have prepared this comprehensive report to help you understand your organisation's current position.
          </p>

          <!-- Executive Summary -->
          <div style="background: #f0f7f4; border-left: 4px solid #004d40; padding: 16px 20px; border-radius: 6px; margin: 20px 0;">
            <p style="margin: 0 0 4px 0; font-size: 14px; font-weight: 600; color: #00332a;">📊 Executive Summary</p>
            <p style="margin: 4px 0; font-size: 28px; font-weight: 700; color: #004d40;">${score}%</p>
            <p style="margin: 4px 0; font-size: 14px; color: #2a4a3a;">
              Overall Score · <strong>${riskLevel || 'Developing'}</strong>
            </p>
          </div>

          <!-- Category Breakdown -->
          <h3 style="color: #1a2a2a; font-size: 16px; font-weight: 600; margin: 24px 0 12px 0;">
            📈 Category-wise Breakdown
          </h3>
          ${Object.entries(categoryScores).map(([category, data]: [string, any]) => `
            <div style="margin: 8px 0;">
              <div style="display: flex; justify-content: space-between; font-size: 13px; color: #2a4a3a;">
                <span>${category}</span>
                <span>${data.score}%</span>
              </div>
              <div style="width: 100%; height: 6px; background: #e8eeea; border-radius: 4px; overflow: hidden; margin-top: 2px;">
                <div style="width: ${data.score}%; height: 100%; background: ${data.score >= 80 ? '#2E8B57' : data.score >= 50 ? '#f59e0b' : '#ef4444'}; border-radius: 4px;"></div>
              </div>
            </div>
          `).join('')}

          <!-- Priority Areas -->
          ${Object.entries(categoryScores).filter(([_, data]: [string, any]) => data.score < 60).length > 0 ? `
            <div style="background: #fef3c7; border-left: 4px solid #f59e0b; padding: 16px 20px; border-radius: 6px; margin: 20px 0;">
              <p style="margin: 0 0 4px 0; font-size: 14px; font-weight: 600; color: #92400e;">⚠️ Priority Areas</p>
              <p style="margin: 4px 0; font-size: 13px; color: #78350f;">
                We recommend focusing on the following areas to improve your score:
              </p>
              <ul style="margin: 8px 0 0 0; padding-left: 20px; color: #78350f; font-size: 13px;">
                ${Object.entries(categoryScores).filter(([_, data]: [string, any]) => data.score < 60).map(([category]) => `
                  <li>${category}</li>
                `).join('')}
              </ul>
            </div>
          ` : `
            <div style="background: #ecfdf5; border-left: 4px solid #10b981; padding: 16px 20px; border-radius: 6px; margin: 20px 0;">
              <p style="margin: 0; font-size: 14px; font-weight: 600; color: #065f46;">✅ All categories are well-covered!</p>
              <p style="margin: 4px 0 0 0; font-size: 13px; color: #065f46;">Great job! Your organisation appears to have strong practices across all areas.</p>
            </div>
          `}

          <!-- Next Steps -->
          <h3 style="color: #1a2a2a; font-size: 16px; font-weight: 600; margin: 24px 0 12px 0;">
            🚀 Next Steps
          </h3>
          <ul style="color: #3a5a5a; font-size: 14px; line-height: 1.7; margin: 0 0 20px 0; padding-left: 20px;">
            <li>Review the category-wise breakdown and identify gaps</li>
            <li>Visit our <a href="${process.env.NEXT_PUBLIC_APP_URL}/galaxy" style="color: #004d40;">Galaxy</a> for curated resources</li>
            <li>Use the <a href="${process.env.NEXT_PUBLIC_APP_URL}/generator" style="color: #004d40;">Generator</a> to create compliance documents</li>
            <li>Explore <a href="${process.env.NEXT_PUBLIC_APP_URL}/certificate-course" style="color: #004d40;">Certification</a> to build expertise</li>
          </ul>

          <!-- CTA -->
          <div style="text-align: center; margin: 30px 0 10px 0;">
            <a href="${process.env.NEXT_PUBLIC_APP_URL}/scorecard" 
               style="display: inline-block; background: #004d40; color: #ffffff; 
                      padding: 12px 36px; border-radius: 8px; text-decoration: none; 
                      font-weight: 600; font-size: 14px;">
              Retake Assessment →
            </a>
          </div>

        </div>

        <!-- Footer -->
        <div style="background: #f5f7f6; padding: 16px 20px; text-align: center; border-top: 1px solid #e8eeea;">
          <p style="margin: 0 0 4px 0; font-size: 11px; color: #6a8a7a;">
            BusinezExcellence StartX LLP
          </p>
          <p style="margin: 0; font-size: 10px; color: #8aaa9a;">
            © ${new Date().getFullYear()} Legal Galaxy. All rights reserved.
          </p>
          <p style="margin: 6px 0 0 0; font-size: 9px; color: #aac0b5; font-style: italic;">
            This report is for informational purposes and does not constitute legal advice.
          </p>
        </div>

      </body>
      </html>
    `;

    const { data, error } = await resend.emails.send({
      from: 'Legal Galaxy <office@businezexcellence.com>',
      to: [email],
      subject: '📊 Your Privacy & AI Governance Readiness Report',
      html,
    });

    if (error) {
      return NextResponse.json({ success: false, message: 'Email failed' }, { status: 500 });
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error:', error);
    return NextResponse.json({ success: false }, { status: 500 });
  }
}