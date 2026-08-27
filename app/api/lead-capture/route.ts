import { NextResponse } from 'next/server';
import { Resend } from 'resend';
import { google } from 'googleapis';
import { generatePDF } from '@/app/lib/pdf-generator';

const resend = new Resend(process.env.RESEND_API_KEY);

// ===== GOOGLE SHEETS AUTH =====
const auth = new google.auth.GoogleAuth({
  scopes: ['https://www.googleapis.com/auth/spreadsheets'],
});
const sheets = google.sheets({ version: 'v4', auth });

// ===== GENERATE TEMPLATE CONTENT =====
function generateTemplateContent(tool: string, formData: any): string {
  const templates: Record<string, string> = {
    'privacy-notice': `
1. INTRODUCTION
${formData.orgName || '[Organisation Name]'} is committed to protecting your privacy.

2. DATA WE COLLECT
${(formData.dataTypes || ['Name', 'Email', 'Phone']).join(', ')}

3. PURPOSE OF PROCESSING
${(formData.purposes || ['Service Delivery', 'Communication']).join(', ')}

4. YOUR RIGHTS
Right to Access, Correction, Erasure, Portability, Withdraw Consent.

5. CONTACT
Data Protection Officer: ${formData.dpoName || '[DPO Name]'} - ${formData.dpoEmail || '[DPO Email]'}
    `,
    'consent-notice': `
1. CONSENT NOTICE
${formData.orgName || '[Organisation Name]'} collects your data with your explicit consent.

2. DATA COLLECTED
${(formData.dataTypes || ['Name', 'Email']).join(', ')}

3. PURPOSE
${(formData.purposes || ['Service Delivery']).join(', ')}

4. WITHDRAWAL
You may withdraw consent at any time.

5. CONTACT
${formData.dpoEmail || 'privacy@company.com'}
    `,
    'cookies-notice': `
1. COOKIES NOTICE
${formData.orgName || '[Organisation Name]'} uses cookies to enhance your experience.

2. TYPES OF COOKIES
- Essential Cookies
- Functional Cookies
- Analytics Cookies
- Marketing Cookies

3. MANAGING COOKIES
You can manage cookies through your browser settings.

4. CONTACT
${formData.dpoEmail || 'privacy@company.com'}
    `,
    'dpa': `
1. DATA PROCESSING AGREEMENT
This DPA is between ${formData.orgName || '[Organisation Name]'} and [Processor Name].

2. SCOPE
Processing of personal data as per DPDPA 2023.

3. DATA SUBJECTS
Customers, employees, and other individuals.

4. SECURITY MEASURES
${(formData.securityMeasures || ['Encryption', 'Access Controls']).join(', ')}

5. BREACH NOTIFICATION
Processor shall notify Controller within 48 hours.

6. DURATION
For the duration of processing activities.
    `,
    'retention-policy': `
1. DATA RETENTION POLICY
${formData.orgName || '[Organisation Name]'} retains data as per legal requirements.

2. RETENTION PERIODS
${formData.retentionPeriod || '5 years or as per legal requirements.'}

3. DATA CATEGORIES
- Customer Data: ${formData.retentionPeriod || '5 years'}
- Employee Data: ${formData.retentionPeriod || '7 years'}
- Financial Data: ${formData.retentionPeriod || '10 years'}

4. DELETION PROCESS
Data is securely deleted after retention period.

5. RESPONSIBILITY
DPO is responsible for compliance.
    `,
    'breach-response': `
1. DATA BREACH RESPONSE PLAN
${formData.orgName || '[Organisation Name]'} follows this procedure for data breaches.

2. IMMEDIATE ACTIONS
- Identify the breach
- Contain the breach
- Assess the risk

3. NOTIFICATION
- Internal: Within 24 hours
- External: Within 72 hours

4. INVESTIGATION
Conduct thorough investigation and document findings.

5. REMEDIATION
Implement corrective measures to prevent future breaches.
    `,
    'dsr-procedure': `
1. DATA SUBJECT RIGHTS PROCEDURE
${formData.orgName || '[Organisation Name]'} handles data subject rights requests as follows.

2. RIGHTS COVERED
- Right to Access
- Right to Correction
- Right to Erasure
- Right to Portability
- Right to Object

3. REQUEST PROCESS
- Submit request via email
- Verify identity
- Acknowledge within 48 hours
- Respond within 30 days

4. CONTACT
${formData.dpoEmail || 'dpo@company.com'}
    `,
    'vendor-checklist': `
1. VENDOR DATA PROCESSING CHECKLIST
${formData.orgName || '[Organisation Name]'} assesses vendors for data protection compliance.

2. ASSESSMENT CRITERIA
- [ ] Data processing purpose
- [ ] Data categories processed
- [ ] Security measures in place
- [ ] Data transfer mechanisms
- [ ] Breach notification process

3. COMPLIANCE REQUIREMENTS
- [ ] GDPR/DPDP compliance
- [ ] DPO appointment
- [ ] Data processing agreement signed

4. REVIEW FREQUENCY
Vendor assessments are conducted annually.
    `,
    'ai-usage-policy': `
1. AI USAGE POLICY
${formData.orgName || '[Organisation Name]'} uses AI responsibly as per this policy.

2. PERMITTED USE
- Approved business purposes
- Compliance with laws
- Human review of AI outputs

3. PROHIBITED USE
- Discriminatory purposes
- Automated decisions without human oversight
- Processing sensitive data without consent

4. AI RISK ASSESSMENT
All AI systems must undergo risk assessment.

5. HUMAN OVERSIGHT
All AI decisions require human review.

6. REPORTING
AI-related incidents must be reported immediately.
    `,
    'responsible-ai-policy': `
1. RESPONSIBLE AI POLICY
${formData.orgName || '[Organisation Name]'} follows these AI principles.

2. PRINCIPLES
- Fairness
- Transparency
- Accountability
- Privacy
- Security

3. GOVERNANCE
AI systems are governed by the AI Governance Committee.

4. COMPLIANCE
All AI systems comply with applicable laws.
    `,
    'ai-governance-framework': `
1. AI GOVERNANCE FRAMEWORK
${formData.orgName || '[Organisation Name]'} establishes this AI governance framework.

2. GOVERNANCE STRUCTURE
- AI Governance Committee
- AI Risk Assessment Team
- AI Compliance Team

3. POLICIES
- AI Usage Policy
- Responsible AI Policy
- AI Risk Management Policy

4. COMPLIANCE
Regular audits and compliance reviews.
    `,
    'ai-risk-assessment': `
1. AI RISK ASSESSMENT
${formData.orgName || '[Organisation Name]'} assesses AI risks as per this template.

2. ASSESSMENT AREAS
- Data privacy
- Bias and fairness
- Security
- Compliance
- Transparency

3. RISK MATRIX
High: Severe impact, likely
Medium: Moderate impact, possible
Low: Minor impact, unlikely

4. MITIGATION
Implement measures to reduce identified risks.
    `,
    'ai-vendor-questionnaire': `
1. AI VENDOR QUESTIONNAIRE
${formData.orgName || '[Organisation Name]'} assesses AI vendors using this questionnaire.

2. VENDOR INFORMATION
- Vendor Name:
- AI Services Provided:

3. COMPLIANCE CHECKLIST
- [ ] Data protection policy
- [ ] AI governance framework
- [ ] Risk assessment process
- [ ] Incident response plan

4. SECURITY ASSESSMENT
- [ ] Encryption in place
- [ ] Access controls
- [ ] Regular audits

5. REVIEW
Vendor assessments are conducted annually.
    `,
    'ai-acceptable-use': `
1. AI ACCEPTABLE USE POLICY
${formData.orgName || '[Organisation Name]'} defines acceptable use of AI tools.

2. PERMITTED USES
- Business operations
- Research and development
- Customer support
- Data analysis

3. PROHIBITED USES
- Unauthorized data processing
- Bias or discrimination
- Automated decision-making without oversight

4. RESPONSIBILITIES
Users must ensure AI use complies with this policy.

5. REPORTING
Violations must be reported immediately.
    `,
    'ai-impact-assessment': `
1. AI IMPACT ASSESSMENT
${formData.orgName || '[Organisation Name]'} evaluates AI impact using this template.

2. IMPACT AREAS
- Data privacy
- Human rights
- Bias and fairness
- Security
- Compliance

3. ASSESSMENT PROCESS
- Identify AI system
- Assess risks
- Identify mitigation measures
- Implement measures
- Monitor and review

4. DOCUMENTATION
Maintain detailed records of assessments.
    `,
  };

  return templates[tool] || templates['privacy-notice'];
}

export async function POST(request: Request) {
  try {
    const { email, tool, type, name, phone, company, formData } = await request.json();

    if (!email) {
      return NextResponse.json(
        { success: false, message: 'Email is required' },
        { status: 400 }
      );
    }

    // ===== GENERATE CONTENT =====
    const content = generateTemplateContent(tool, formData);
    const fullContent = `
${content}

---
Generated by Legal Galaxy
© ${new Date().getFullYear()} Legal Galaxy
Powered by BusinezExcellence StartX LLP

This document is for informational purposes and does not constitute legal advice.
    `;

    // ===== GENERATE PDF =====
    const pdfBuffer = await generatePDF(tool, type, formData, fullContent);
    const pdfBase64 = pdfBuffer.toString('base64');

    // ===== SEND EMAIL =====
    const { data, error } = await resend.emails.send({
      from: 'Legal Galaxy <noreply@businezexcellence.com>',
      to: [email],
      subject: `Your ${tool.replace('-', ' ')} Document from Legal Galaxy`,
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>Your Document is Ready</title>
        </head>
        <body style="font-family: 'Segoe UI', Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 0; background: #f5f7f6;">
          
          <div style="background: #ffffff; border-radius: 16px; margin: 20px; overflow: hidden; box-shadow: 0 4px 20px rgba(0,0,0,0.06);">
            
            <!-- Header - Deep Jungle Green -->
            <div style="background: #004d40; padding: 30px 20px; text-align: center; border-bottom: 4px solid #00332a;">
              <div style="font-size: 20px; font-weight: 600; color: #ffffff; letter-spacing: 1px;">
                BusinezExcellence
              </div>
              <div style="font-size: 13px; color: #80cbc4; margin-top: 4px; letter-spacing: 0.5px;">
                Legal Galaxy · Document Generator
              </div>
            </div>
            
            <!-- Content -->
            <div style="padding: 35px 30px;">
              
              <p style="color: #1a2a2a; font-size: 16px; font-weight: 500; margin: 0 0 8px 0;">
                Hello,
              </p>
              
              <p style="color: #3a5a5a; font-size: 14px; line-height: 1.7; margin: 0 0 20px 0;">
                We're pleased to inform you that your document has been successfully generated through 
                <strong>Legal Galaxy Document Generator</strong>.
              </p>
              
              <p style="color: #3a5a5a; font-size: 14px; line-height: 1.7; margin: 0 0 20px 0;">
                Please find the requested PDF attached to this email.
              </p>
              
              <!-- Document Details -->
              <div style="background: #f0f7f4; border-left: 4px solid #004d40; padding: 16px 20px; border-radius: 6px; margin: 20px 0;">
                <p style="margin: 0 0 6px 0; font-size: 14px; font-weight: 600; color: #00332a;">
                  📄 Document Information
                </p>
                <p style="margin: 4px 0; font-size: 13px; color: #2a4a3a;">
                  <strong>Document:</strong> ${tool.replace('-', ' ').toUpperCase()}
                </p>
                <p style="margin: 4px 0; font-size: 13px; color: #2a4a3a;">
                  <strong>Category:</strong> ${type === 'privacy' ? 'Privacy' : 'AI Governance'}
                </p>
                <p style="margin: 4px 0; font-size: 13px; color: #2a4a3a;">
                  <strong>Generation Status:</strong> <span style="color: #004d40;">✅ Completed</span>
                </p>
              </div>
              
              <p style="color: #3a5a5a; font-size: 14px; line-height: 1.7; margin: 20px 0 0 0;">
                The attached document has been prepared based on the information and options selected during 
                the document generation process.
              </p>
              
              <p style="color: #3a5a5a; font-size: 14px; line-height: 1.7; margin: 16px 0 0 0;">
                Thank you for choosing Legal Galaxy. We're committed to making legal and data protection 
                documentation simpler, faster, and more accessible.
              </p>
              
              <!-- CTA Button -->
              <div style="text-align: center; margin: 30px 0 10px 0;">
                <a href="${process.env.NEXT_PUBLIC_APP_URL}/generator" 
                   style="display: inline-block; background: #004d40; color: #ffffff; 
                          padding: 12px 36px; border-radius: 8px; text-decoration: none; 
                          font-weight: 600; font-size: 14px;">
                  Generate Another Document →
                </a>
              </div>
              
              <p style="color: #3a5a5a; font-size: 14px; line-height: 1.7; margin: 20px 0 0 0;">
                If you need any assistance or would like to generate another document, please feel free 
                to reach out.
              </p>
              
              <p style="color: #1a2a2a; font-size: 14px; margin: 20px 0 0 0; font-weight: 500;">
                Warm regards,
                <br>
                <span style="color: #004d40;">Team Legal Galaxy</span>
              </p>
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
                This document is for informational purposes and does not constitute legal advice.
              </p>
            </div>
            
          </div>
          
        </body>
        </html>
      `,
      text: `
Hello,

We're pleased to inform you that your document has been successfully generated through Legal Galaxy Document Generator.

Please find the requested PDF attached to this email.

Document Information:
- Document: ${tool.replace('-', ' ').toUpperCase()}
- Category: ${type === 'privacy' ? 'Privacy' : 'AI Governance'}
- Generation Status: Completed

The attached document has been prepared based on the information and options selected during the document generation process.

Thank you for choosing Legal Galaxy. We're committed to making legal and data protection documentation simpler, faster, and more accessible.

If you need any assistance or would like to generate another document, please feel free to reach out.

Warm regards,
Team Legal Galaxy

---
BusinezExcellence StartX LLP
© ${new Date().getFullYear()} Legal Galaxy. All rights reserved.
This document is for informational purposes and does not constitute legal advice.
`,
      attachments: [
        {
          filename: `${tool.replace('-', '_')}_${new Date().toISOString().slice(0, 10)}.pdf`,
          content: pdfBase64,
        },
      ],
    });

    if (error) {
      console.error('Email error:', error);
      return NextResponse.json(
        { success: false, message: 'Email failed: ' + error.message },
        { status: 500 }
      );
    }

    // ===== STORE IN GOOGLE SHEETS =====
    try {
      await sheets.spreadsheets.values.append({
        spreadsheetId: process.env.GOOGLE_SHEET_ID,
        range: 'Sheet1!A:H',
        valueInputOption: 'USER_ENTERED',
        requestBody: {
          values: [[
            new Date().toISOString(),
            email,
            name || '',
            phone || '',
            company || '',
            tool || '',
            type || '',
            'PDF Sent'
          ]],
        },
      });
    } catch (sheetError) {
      console.error('Sheet error:', sheetError);
    }

    return NextResponse.json({
      success: true,
      message: 'Email sent with PDF attachment!',
    });
  } catch (error) {
    console.error('Error:', error);
    return NextResponse.json(
      { success: false, message: 'Server error' },
      { status: 500 }
    );
  }
}