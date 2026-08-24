import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const { name, email, company, designation, score, riskLevel, categoryScores, answers } = await request.json();

    // Send email with report
    const { data, error } = await resend.emails.send({
      from: 'Legal Galaxy <reports@data-protection-galaxy.vercel.app>',
      to: [email],
      subject: '📊 Your Privacy & AI Governance Readiness Report',
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <style>
            body { font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; }
            .header { text-align: center; padding: 20px 0; border-bottom: 3px solid #7c3aed; }
            .header h1 { color: #1a1a2e; font-size: 28px; margin: 0; }
            .header p { color: #6b7280; margin: 5px 0; }
            .score { text-align: center; font-size: 48px; font-weight: bold; color: #7c3aed; padding: 20px 0; }
            .details { background: #f3f4f6; padding: 20px; border-radius: 10px; margin: 20px 0; }
            .details table { width: 100%; }
            .details td { padding: 8px 0; border-bottom: 1px solid #e5e7eb; }
            .category { background: #f9fafb; padding: 15px; border-radius: 8px; margin: 10px 0; }
            .category-bar { height: 8px; background: #e5e7eb; border-radius: 4px; overflow: hidden; margin-top: 5px; }
            .category-bar-fill { height: 100%; border-radius: 4px; }
            .footer { text-align: center; padding: 20px 0; border-top: 1px solid #e5e7eb; color: #6b7280; font-size: 14px; }
          </style>
        </head>
        <body>
          <div class="header">
            <h1>✨ LEGAL GALAXY</h1>
            <p>Privacy & AI Governance Universe</p>
          </div>
          
          <h2 style="color:#1a1a2e; text-align:center;">Your Readiness Report</h2>
          <p style="text-align:center; color:#6b7280;">Dear <strong>${name}</strong>,</p>
          <p style="text-align:center; color:#6b7280;">Thank you for completing the Privacy & AI Governance Assessment.</p>
          
          <div class="score">
            ${score}%
            <p style="font-size:16px; color:#6b7280; font-weight:normal;">Overall Score</p>
            <p style="font-size:18px; color:${score >= 70 ? '#10b981' : score >= 40 ? '#f59e0b' : '#ef4444'};">
              ${riskLevel}
            </p>
          </div>
          
          <div class="details">
            <h3 style="color:#1a1a2e;">Category-wise Breakdown</h3>
            ${Object.entries(categoryScores).map(([category, data]: [string, any]) => `
              <div class="category">
                <div style="display:flex; justify-content:space-between;">
                  <span>${category}</span>
                  <span>${data.score}%</span>
                </div>
                <div class="category-bar">
                  <div class="category-bar-fill" style="width:${data.score}%; background:${data.score >= 80 ? '#10b981' : data.score >= 50 ? '#f59e0b' : '#ef4444'};"></div>
                </div>
              </div>
            `).join('')}
          </div>
          
          <div style="background: #ecfdf5; padding: 15px; border-radius: 8px; border: 1px solid #10b981; margin: 20px 0;">
            <h3 style="color:#10b981; margin:0;">📌 Next Steps</h3>
            <p style="color:#6b7280; margin:10px 0 0 0;">
              Based on your score, we recommend reviewing the areas where you scored below 60%.
              Visit our <a href="${process.env.NEXT_PUBLIC_APP_URL}/galaxy">Galaxy</a> for curated resources.
            </p>
          </div>
          
          <div style="text-align:center; margin: 30px 0;">
            <a href="${process.env.NEXT_PUBLIC_APP_URL}/certificate-course" style="display:inline-block; background: linear-gradient(to right, #7c3aed, #6d28d9); color: white; padding: 12px 30px; border-radius: 8px; text-decoration: none;">
              Explore Certification →
            </a>
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
      console.error('Email error:', error);
      return NextResponse.json({ success: false, message: 'Failed to send email' }, { status: 500 });
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error:', error);
    return NextResponse.json({ success: false }, { status: 500 });
  }
}