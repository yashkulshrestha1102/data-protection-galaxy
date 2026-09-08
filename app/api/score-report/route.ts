// app/api/score-report/route.ts

import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

const getMaturityLevel = (score: number) => {
  if (score >= 80) return { label: 'Advanced', color: '#2E8B57', desc: 'The organization demonstrates a mature AI governance framework with well-established practices across all domains.' };
  if (score >= 60) return { label: 'Managed', color: '#f59e0b', desc: 'The organization demonstrates a developing AI governance framework with established practices in several areas. Key improvements are required in monitoring, third-party risk and incident management.' };
  if (score >= 40) return { label: 'Developing', color: '#ef4444', desc: 'The organization has foundational AI governance practices but requires significant improvements across multiple domains.' };
  return { label: 'Initial', color: '#8b0000', desc: 'The organization is in the early stages of AI governance with limited formal practices in place.' };
};

const getStatus = (score: number) => {
  if (score >= 80) return { label: 'Strong', color: '#2E8B57' };
  if (score >= 60) return { label: 'Moderate', color: '#f59e0b' };
  if (score >= 40) return { label: 'Needs Improvement', color: '#ef4444' };
  return { label: 'Critical', color: '#8b0000' };
};

const getCategoryScores = (baseScore: number) => [
  { name: 'AI Governance & Leadership', score: Math.min(100, baseScore + 10), status: getStatus(baseScore + 10) },
  { name: 'AI Risk Management', score: Math.min(100, baseScore - 4), status: getStatus(baseScore - 4) },
  { name: 'Data Governance', score: Math.min(100, baseScore + 4), status: getStatus(baseScore + 4) },
  { name: 'Privacy & Regulatory Compliance', score: Math.min(100, baseScore - 1), status: getStatus(baseScore - 1) },
  { name: 'AI Security', score: Math.min(100, baseScore - 8), status: getStatus(baseScore - 8) },
  { name: 'Transparency & Explainability', score: Math.min(100, baseScore - 14), status: getStatus(baseScore - 14) },
  { name: 'Human Oversight', score: Math.min(100, baseScore + 7), status: getStatus(baseScore + 7) },
  { name: 'AI Lifecycle Management', score: Math.min(100, baseScore - 11), status: getStatus(baseScore - 11) },
  { name: 'Third-Party / Vendor AI', score: Math.min(100, baseScore - 23), status: getStatus(baseScore - 23) },
  { name: 'Monitoring & Incident Management', score: Math.min(100, baseScore - 29), status: getStatus(baseScore - 29) },
];

const getRiskAreas = (baseScore: number) => {
  const risks = [];
  if (baseScore < 60) risks.push({ title: 'No AI Incident Response Process', level: 'High' });
  if (baseScore < 70) risks.push({ title: 'Incomplete AI Inventory', level: 'High' });
  if (baseScore < 65) risks.push({ title: 'Third-Party AI Risk Management', level: 'High' });
  if (baseScore < 75) risks.push({ title: 'Model Monitoring Not Standardized', level: 'Medium' });
  if (baseScore < 80) risks.push({ title: 'Bias & Fairness Testing Gaps', level: 'Medium' });
  if (risks.length === 0) risks.push({ title: 'All areas are well-covered', level: 'Low' });
  return risks;
};

const getGaps = (baseScore: number) => {
  const critical = [];
  const major = [];
  const minor = [];

  if (baseScore < 60) critical.push('No formal AI incident response process');
  if (baseScore < 70) critical.push('AI inventory is incomplete');
  if (baseScore < 65) critical.push('No documented AI risk classification methodology');
  if (baseScore < 75) major.push('Limited model monitoring & performance evaluation');
  if (baseScore < 70) major.push('Inconsistent vendor AI risk assessments');
  if (baseScore < 80) major.push('Lack of standardized bias testing procedures');
  if (baseScore < 85) minor.push('Employee AI training not periodic');
  if (baseScore < 85) minor.push('Policies review cycle not defined');
  if (baseScore < 90) minor.push('AI documentation not standardized');

  if (critical.length === 0) critical.push('No critical gaps identified');
  if (major.length === 0) major.push('No major gaps identified');
  if (minor.length === 0) minor.push('No minor gaps identified');

  return { critical, major, minor };
};

const getRoadmap = (baseScore: number) => {
  const items = [];
  if (baseScore < 70) items.push({ period: '0 – 30 DAYS', tasks: ['Implement AI risk assessment', 'Vendor AI risk assessment', 'Data governance controls', 'Human oversight framework'] });
  if (baseScore < 80) items.push({ period: '31 – 60 DAYS', tasks: ['AI inventory implementation', 'Bias testing framework', 'Documentation framework'] });
  items.push({ period: '61 – 90 DAYS', tasks: ['Continuous monitoring setup', 'Policy review and update', 'Training program implementation'] });
  items.push({ period: '90 – 180 DAYS', tasks: ['Internal audit & review', 'Governance review', 'Certification readiness'] });
  return items;
};

const getFrameworkMapping = (baseScore: number) => [
  { name: 'ISO/IEC 42001', score: Math.min(100, baseScore + 6) },
  { name: 'NIST AI RMF', score: Math.min(100, baseScore - 1) },
  { name: 'EU AI Act', score: Math.min(100, baseScore - 9) },
  { name: 'DPDP Act (India)', score: Math.min(100, baseScore + 4) },
  { name: 'ISO/IEC 27001', score: Math.min(100, baseScore - 3) },
  { name: 'OECD AI Principles', score: Math.min(100, baseScore + 2) },
];

const getRecommendedActions = (baseScore: number) => {
  const actions = [];
  if (baseScore < 70) actions.push({ title: 'Establish AI Incident Response Framework', desc: 'Define incident categories, escalation matrix, notification process and incident register.' });
  if (baseScore < 75) actions.push({ title: 'Complete AI System Inventory', desc: 'Identify all AI systems, their owners, risks, data and third-party involvement.' });
  if (baseScore < 65) actions.push({ title: 'Implement Third-Party AI Risk Assessment', desc: 'Assess vendors, review contracts, data usage, security controls and risk strategy.' });
  if (baseScore < 80) actions.push({ title: 'Standardize AI Model Monitoring', desc: 'Define KPIs, drift detection, performance monitoring and review cycles.' });
  if (baseScore < 85) actions.push({ title: 'Implement Bias & Fairness Testing', desc: 'Define methodology, test datasets and remediation process.' });
  if (actions.length === 0) actions.push({ title: 'All areas are well-covered', desc: 'Continue monitoring and maintaining current practices.' });
  return actions;
};

const getActionPlan = () => [
  { action: 'AI Inventory', owner: 'CIO', priority: 'High', due: '30 Days' },
  { action: 'AI Governance Policy', owner: 'Legal', priority: 'High', due: '30 Days' },
  { action: 'AI Risk Assessment', owner: 'Risk Team', priority: 'High', due: '45 Days' },
  { action: 'Vendor Assessment', owner: 'Procurement', priority: 'Medium', due: '60 Days' },
  { action: 'AI Monitoring', owner: 'Data Team', priority: 'Medium', due: '60 Days' },
  { action: 'Bias Testing', owner: 'Data Science', priority: 'Medium', due: '75 Days' },
  { action: 'Employee Training', owner: 'HR', priority: 'Low', due: '90 Days' },
];

export async function POST(request: Request) {
  try {
    const { name, email, company, score, riskLevel } = await request.json();

    const baseScore = score || 72;
    const maturity = getMaturityLevel(baseScore);
    const categories = getCategoryScores(baseScore);
    const risks = getRiskAreas(baseScore);
    const gaps = getGaps(baseScore);
    const roadmap = getRoadmap(baseScore);
    const frameworks = getFrameworkMapping(baseScore);
    const actions = getRecommendedActions(baseScore);
    const actionPlan = getActionPlan();

    // ===== PDF DATA =====
    const pdfData = {
      company: company || 'Not Provided',
      score: baseScore,
      riskLevel: riskLevel || 'High',
      categoryScores: categories,
      risks: risks,
      gaps: gaps,
      roadmap: roadmap,
      frameworks: frameworks,
      actions: actions,
      actionPlan: actionPlan,
      maturity: maturity,
    };

    // ===== 1. PDF GENERATE KARO (Using dynamic import with eval approach) =====
    let pdfBuffer: Buffer;
    
    try {
      // Dynamic import for server-side PDF generation
      const { renderToBuffer } = await import('@react-pdf/renderer');
      const { PDFReport } = await import('@/components/generator/PDFReport');
      
      // Create React element manually to avoid JSX parsing issues
      const pdfElement = PDFReport({ data: pdfData });
      pdfBuffer = await renderToBuffer(pdfElement);
    } catch (pdfError) {
      console.error('PDF Generation Error:', pdfError);
      return NextResponse.json({ 
        success: false, 
        message: 'Failed to generate PDF' 
      }, { status: 500 });
    }

    const pdfBase64 = pdfBuffer.toString('base64');

    // ===== SIMPLE EMAIL BODY =====
    const html = `
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="UTF-8">
        <title>AI Governance Assessment Report</title>
      </head>
      <body style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background: #f5f7f6; color: #1a2a2a;">
        <div style="background: #ffffff; border-radius: 12px; padding: 30px; text-align: center;">
          <h1 style="color: #004d40; font-size: 24px;">📊 Your AI Governance Assessment Report</h1>
          <p style="color: #3a5a5a; font-size: 16px;">Dear ${name || 'User'},</p>
          <p style="color: #3a5a5a; font-size: 14px;">Thank you for completing the AI Governance Assessment. Your comprehensive report is attached as a PDF.</p>
          
          <div style="background: #f0f7f4; border-left: 4px solid #004d40; padding: 15px; margin: 20px 0; border-radius: 4px;">
            <p style="font-size: 28px; font-weight: bold; color: #004d40; margin: 0;">${baseScore} / 100</p>
            <p style="font-size: 14px; color: #2a4a3a; margin: 4px 0;">Overall AI Governance Score</p>
            <p style="display: inline-block; padding: 4px 16px; border-radius: 20px; background: ${maturity.color}; color: white; font-weight: 600; font-size: 12px; margin-top: 4px;">
              ${maturity.label}
            </p>
          </div>

          <p style="color: #3a5a5a; font-size: 13px;">Please find your detailed report attached to this email.</p>
          
          <hr style="border: none; border-top: 1px solid #e0e8e4; margin: 20px 0;" />
          
          <p style="font-size: 12px; color: #8aaa9a;">
            Generated by BusinezExcellence StartX LLP<br>
            © ${new Date().getFullYear()} Legal Galaxy. All rights reserved.
          </p>
          <p style="font-size: 10px; color: #aac0b5; font-style: italic;">This report is for informational purposes and does not constitute legal advice.</p>
        </div>
      </body>
      </html>
    `;

    // ===== EMAIL WITH PDF ATTACHMENT =====
    const { data, error } = await resend.emails.send({
      from: 'Legal Galaxy <office@dpdpa.businezexcellence.com>',
      to: [email],
      subject: '📊 Your AI Governance Assessment Report',
      html: html,
      attachments: [
        {
          filename: 'AI_Governance_Assessment_Report.pdf',
          content: pdfBase64,
        },
      ],
    });

    if (error) {
      console.error('Email error:', error);
      return NextResponse.json({ success: false, message: 'Email failed' }, { status: 500 });
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error:', error);
    return NextResponse.json({ success: false }, { status: 500 });
  }
}