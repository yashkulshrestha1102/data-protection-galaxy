import { NextResponse } from 'next/server';
import { google } from 'googleapis';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

// ===== GOOGLE SHEETS AUTH (Workload Identity - NO PRIVATE KEY) =====
const auth = new google.auth.GoogleAuth({
  scopes: ['https://www.googleapis.com/auth/spreadsheets'],
});

const sheets = google.sheets({ version: 'v4', auth });

export async function POST(request: Request) {
  try {
    const { email, tool, type, name, phone, company } = await request.json();

    console.log('📥 1. Received:', { email, tool, type, name });

    if (!email) {
      return NextResponse.json(
        { success: false, message: 'Email is required' },
        { status: 400 }
      );
    }

    // ===== 1. STORE IN GOOGLE SHEETS =====
    let sheetSuccess = false;
    try {
      console.log('📤 2. Writing to Google Sheets...');
      await sheets.spreadsheets.values.append({
        spreadsheetId: process.env.GOOGLE_SHEET_ID,
        range: 'Sheet1!A:G',
        valueInputOption: 'USER_ENTERED',
        requestBody: {
          values: [[
            new Date().toISOString(),
            email,
            name || '',
            phone || '',
            company || '',
            tool || '',
            type || ''
          ]],
        },
      });
      sheetSuccess = true;
      console.log('✅ 3. Google Sheets write successful');
    } catch (sheetError) {
      console.error('❌ 3. Google Sheets error:', sheetError);
    }

    // ===== 2. SEND EMAIL =====
    let emailSuccess = false;
    try {
      console.log('📧 4. Sending email to:', email);
      await resend.emails.send({
        from: 'Legal Galaxy <info@businezexcellence.com>',
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
      emailSuccess = true;
      console.log('✅ 5. Email sent successfully');
    } catch (emailError) {
      console.error('❌ 5. Email error:', emailError);
    }

    return NextResponse.json({
      success: true,
      sheetSuccess,
      emailSuccess,
      message: emailSuccess ? 'Email sent!' : 'Email failed but lead captured.',
    });
  } catch (error) {
    console.error('❌ Fatal error:', error);
    return NextResponse.json(
      { success: false, message: 'Server error' },
      { status: 500 }
    );
  }
}