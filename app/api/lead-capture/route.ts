import { NextResponse } from 'next/server';
import { google } from 'googleapis';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

// ===== GOOGLE SHEETS AUTH (Workload Identity) =====
const auth = new google.auth.GoogleAuth({
  scopes: ['https://www.googleapis.com/auth/spreadsheets'],
});

const sheets = google.sheets({ version: 'v4', auth });

export async function POST(request: Request) {
  try {
    const { email, tool, type, name, phone, company } = await request.json();

    if (!email) {
      return NextResponse.json(
        { success: false, message: 'Email is required' },
        { status: 400 }
      );
    }

    // ===== STORE IN GOOGLE SHEETS =====
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

    // ===== SEND EMAIL =====
    await resend.emails.send({
      from: 'Legal Galaxy <onboarding@resend.dev>',
      to: [email],
      subject: `📄 Your ${tool || 'Privacy'} Document`,
      html: `<h1>Your Document is Ready!</h1><p>Thank you for using Legal Galaxy.</p>`,
    });

    return NextResponse.json({ success: true, message: 'Lead captured!' });
  } catch (error) {
    console.error('Error:', error);
    return NextResponse.json(
      { success: false, message: 'Server error' },
      { status: 500 }
    );
  }
}