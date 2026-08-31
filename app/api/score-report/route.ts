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

// ===== SCORECARD CATEGORIES (10 Domains) =====
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

    const html = `
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>AI Governance Assessment Report</title>
        <style>
          body { font-family: 'Segoe UI', Arial, sans-serif; max-width: 800px; margin: 0 auto; padding: 20px; background: #f5f7f6; color: #1a2a2a; }
          .container { background: #ffffff; border-radius: 12px; padding: 40px; box-shadow: 0 4px 20px rgba(0,0,0,0.05); }
          .header { text-align: center; border-bottom: 3px solid #004d40; padding-bottom: 20px; margin-bottom: 30px; }
          .header h1 { font-size: 24px; color: #004d40; margin: 0; letter-spacing: 1px; }
          .header h2 { font-size: 18px; color: #6a8a7a; margin: 5px 0 0 0; font-weight: 400; }
          .score-box { background: #f0f7f4; border-left: 4px solid #004d40; padding: 20px; border-radius: 6px; margin: 20px 0; text-align: center; }
          .score-box .score { font-size: 48px; font-weight: 700; color: #004d40; }
          .score-box .label { font-size: 18px; color: #2a4a3a; margin-top: 4px; }
          .score-box .maturity { display: inline-block; padding: 4px 16px; border-radius: 20px; background: ${maturity.color}; color: white; font-weight: 600; margin-top: 8px; }
          .section { margin: 30px 0; }
          .section-title { font-size: 18px; font-weight: 600; color: #004d40; border-bottom: 2px solid #e0e8e4; padding-bottom: 8px; margin-bottom: 16px; }
          .category-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 8px; }
          .category-item { display: flex; justify-content: space-between; padding: 8px 12px; background: #f8faf9; border-radius: 4px; font-size: 13px; }
          .category-item .status { font-weight: 600; }
          .status-strong { color: #2E8B57; }
          .status-moderate { color: #f59e0b; }
          .status-needs-improvement { color: #ef4444; }
          .status-critical { color: #8b0000; }
          .risk-item { padding: 8px 12px; border-left: 3px solid #ef4444; margin: 4px 0; font-size: 13px; }
          .risk-item.high { border-left-color: #ef4444; }
          .risk-item.medium { border-left-color: #f59e0b; }
          .risk-item.low { border-left-color: #2E8B57; }
          .gap-box { padding: 12px; border-radius: 6px; margin: 6px 0; font-size: 13px; }
          .gap-critical { background: #fef2f2; border-left: 4px solid #ef4444; }
          .gap-major { background: #fffbeb; border-left: 4px solid #f59e0b; }
          .gap-minor { background: #f0fdf4; border-left: 4px solid #2E8B57; }
          .roadmap-item { background: #f8faf9; padding: 12px 16px; border-radius: 6px; margin: 6px 0; }
          .roadmap-item .period { font-weight: 600; color: #004d40; }
          .framework-item { display: flex; justify-content: space-between; padding: 6px 12px; border-bottom: 1px solid #e8eeea; font-size: 13px; }
          .action-item { background: #f8faf9; padding: 12px 16px; border-radius: 6px; margin: 6px 0; }
          .action-item .title { font-weight: 600; color: #004d40; }
          .action-plan { width: 100%; border-collapse: collapse; font-size: 13px; }
          .action-plan th { background: #004d40; color: white; padding: 8px 12px; text-align: left; }
          .action-plan td { padding: 8px 12px; border-bottom: 1px solid #e8eeea; }
          .footer { text-align: center; padding-top: 20px; border-top: 1px solid #e0e8e4; margin-top: 30px; font-size: 12px; color: #8aaa9a; }
          .disclaimer { font-size: 10px; color: #aac0b5; font-style: italic; margin-top: 6px; }
          @media (max-width: 600px) { .category-grid { grid-template-columns: 1fr; } .container { padding: 20px; } }
        </style>
      </head>
      <body>
        <div class="container">
          <!-- Header -->
          <div class="header">
            <h1>AI GOVERNANCE ASSESSMENT REPORT</h1>
            <h2>Comprehensive AI Governance Maturity & Risk Assessment</h2>
          </div>

          <!-- Organisation Details -->
          <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 8px; font-size: 14px; margin-bottom: 20px;">
            <div><strong>Company Name</strong><br>${company || 'Not Provided'}</div>
            <div><strong>Assessment Type</strong><br>AI Governance Assessment</div>
            <div><strong>Industry</strong><br>Information Technology</div>
            <div><strong>Assessment Period</strong><br>01 ${new Date().toLocaleString('default', { month: 'long' })} ${new Date().getFullYear()} – 31 ${new Date().toLocaleString('default', { month: 'long' })} ${new Date().getFullYear()}</div>
          </div>

          <!-- Overall Score -->
          <div class="score-box">
            <div class="score">${baseScore} / 100</div>
            <div class="label">Overall AI Governance Score</div>
            <div class="maturity">${maturity.label}</div>
            <p style="color: #3a5a5a; font-size: 14px; margin-top: 12px;">${maturity.desc}</p>
          </div>

          <!-- Executive Summary -->
          <div class="section">
            <div class="section-title">📊 Executive Summary</div>
            <div style="display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 8px; font-size: 13px;">
              <div style="background: #f8faf9; padding: 12px; border-radius: 6px; text-align: center;">
                <strong>${categories.length}</strong><br>Domains Assessed
              </div>
              <div style="background: #f8faf9; padding: 12px; border-radius: 6px; text-align: center;">
                <strong>${categories.length * 5}</strong><br>Assessment Questions
              </div>
              <div style="background: #f8faf9; padding: 12px; border-radius: 6px; text-align: center;">
                <strong>${categories.filter(c => c.score >= 70).length}</strong><br>Requirements Met
              </div>
            </div>
          </div>

          <!-- Scorecard -->
          <div class="section">
            <div class="section-title">1. AI GOVERNANCE SCORECARD</div>
            <div class="category-grid">
              ${categories.map((cat, i) => `
                <div class="category-item">
                  <span>${i+1}. ${cat.name}</span>
                  <span class="status status-${cat.status.label.toLowerCase().replace(' ', '-')}">${cat.score}/100 · ${cat.status.label}</span>
                </div>
              `).join('')}
            </div>
          </div>

          <!-- Risk Areas -->
          <div class="section">
            <div class="section-title">2. TOP RISK AREAS</div>
            ${risks.map(risk => `
              <div class="risk-item ${risk.level.toLowerCase()}">
                <strong>${risk.title}</strong><br>
                <span style="font-size: 12px; color: ${risk.level === 'High' ? '#ef4444' : risk.level === 'Medium' ? '#f59e0b' : '#2E8B57'};">Risk Level: ${risk.level}</span>
              </div>
            `).join('')}
          </div>

          <!-- Gap Analysis -->
          <div class="section">
            <div class="section-title">3. GAP ANALYSIS</div>
            ${gaps.critical.length > 0 ? `
              <div class="gap-box gap-critical"><strong>Critical Gaps</strong><br>${gaps.critical.join('<br>')}</div>
            ` : ''}
            ${gaps.major.length > 0 ? `
              <div class="gap-box gap-major"><strong>Major Gaps</strong><br>${gaps.major.join('<br>')}</div>
            ` : ''}
            ${gaps.minor.length > 0 ? `
              <div class="gap-box gap-minor"><strong>Minor Gaps</strong><br>${gaps.minor.join('<br>')}</div>
            ` : ''}
          </div>

          <!-- Remediation Roadmap -->
          <div class="section">
            <div class="section-title">4. REMEDIATION ROADMAP</div>
            ${roadmap.map(item => `
              <div class="roadmap-item">
                <div class="period">📅 ${item.period}</div>
                <ul style="margin: 4px 0 0 0; padding-left: 20px; font-size: 13px;">
                  ${item.tasks.map(task => `<li>${task}</li>`).join('')}
                </ul>
              </div>
            `).join('')}
          </div>

          <!-- Framework Mapping -->
          <div class="section">
            <div class="section-title">5. FRAMEWORK MAPPING</div>
            ${frameworks.map(fw => `
              <div class="framework-item">
                <span>${fw.name}</span>
                <span style="font-weight: 600; color: ${fw.score >= 70 ? '#2E8B57' : fw.score >= 50 ? '#f59e0b' : '#ef4444'};">${fw.score}%</span>
              </div>
            `).join('')}
          </div>

          <!-- Recommended Actions -->
          <div class="section">
            <div class="section-title">6. RECOMMENDED ACTIONS (Top Priorities)</div>
            ${actions.map((action, i) => `
              <div class="action-item">
                <div class="title">${i+1}. ${action.title}</div>
                <div style="font-size: 13px; color: #3a5a5a;">${action.desc}</div>
              </div>
            `).join('')}
          </div>

          <!-- Action Plan -->
          <div class="section">
            <div class="section-title">7. MANAGEMENT ACTION PLAN</div>
            <table class="action-plan">
              <thead><tr><th>Action</th><th>Owner</th><th>Priority</th><th>Due Date</th></tr></thead>
              <tbody>
                ${actionPlan.map(item => `
                  <tr>
                    <td>${item.action}</td>
                    <td>${item.owner}</td>
                    <td style="color: ${item.priority === 'High' ? '#ef4444' : item.priority === 'Medium' ? '#f59e0b' : '#2E8B57'};">${item.priority}</td>
                    <td>${item.due}</td>
                  </tr>
                `).join('')}
              </tbody>
            </table>
          </div>

          <!-- Conclusion -->
          <div class="section">
            <div class="section-title">8. CONCLUSION</div>
            <div style="background: #f0f7f4; border-left: 4px solid #004d40; padding: 16px 20px; border-radius: 6px;">
              <p style="font-size: 14px; font-weight: 600; color: #00332a; margin: 0;">Overall AI Governance Maturity: ${maturity.label}</p>
              <p style="font-size: 13px; color: #3a5a5a; margin: 6px 0 0 0;">${maturity.desc}</p>
            </div>
            <div style="margin-top: 12px;">
              <p style="font-size: 14px; font-weight: 600; color: #00332a; margin: 0;">Your Next Steps:</p>
              <ul style="font-size: 13px; color: #3a5a5a;">
                <li>Prioritize remediation of critical gaps</li>
                <li>Strengthen monitoring and oversight</li>
                <li>Enhance documentation and evidence</li>
                <li>Build a culture of responsible AI</li>
              </ul>
            </div>
          </div>

          <!-- Footer -->
          <div class="footer">
            <p style="margin: 0;">Generated by BusinezExcellence StartX LLP</p>
            <p style="margin: 4px 0;">© ${new Date().getFullYear()} Legal Galaxy. All rights reserved.</p>
            <div class="disclaimer">This report is for informational purposes and does not constitute legal advice.</div>
          </div>
        </div>
      </body>
      </html>
    `;

    const { data, error } = await resend.emails.send({
      from: 'Legal Galaxy <onboarding@resend.dev>',
      to: [email],
      subject: '📊 Your AI Governance Assessment Report',
      html,
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