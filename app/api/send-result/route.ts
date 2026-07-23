// app/api/send-result/route.ts

import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const { name, email, score, passingScore, passed } = await request.json();

    // Here you can integrate with any email service
    // For now, we'll just log it
    console.log('=== Exam Result ===');
    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Score:', score);
    console.log('Passed:', passed);
    console.log('===================');

    // TODO: Integrate with email service like:
    // - SendGrid
    // - AWS SES
    // - Nodemailer
    // - Resend

    return NextResponse.json({
      success: true,
      message: passed ? 'Certificate sent successfully!' : 'Result recorded.',
    });
  } catch (error) {
    console.error('Error sending result:', error);
    return NextResponse.json(
      { success: false, message: 'Failed to send result' },
      { status: 500 }
    );
  }
}