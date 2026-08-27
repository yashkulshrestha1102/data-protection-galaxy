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
${formData.orgName || '[Organisation Name]'} is committed to protecting your privacy and personal data in compliance with the Digital Personal Data Protection Act, 2023.

2. DATA WE COLLECT
We collect the following categories of personal data:
${(formData.dataTypes || ['Name', 'Email', 'Phone']).map(d => `• ${d}`).join('\n')}

3. PURPOSE OF PROCESSING
We process your personal data for the following purposes:
${(formData.purposes || ['Service Delivery', 'Communication']).map(p => `• ${p}`).join('\n')}

4. YOUR RIGHTS
Under DPDPA, you have the following rights:
• Right to Access your personal data
• Right to Correction of inaccurate data
• Right to Erasure (Right to be forgotten)
• Right to Data Portability
• Right to Withdraw Consent at any time
• Right to Grievance Redressal
• Right to Nominate a representative

5. DATA RETENTION
We retain your personal data for ${formData.retentionPeriod || 'as per legal requirements'} or until the purpose of processing is complete.

6. DATA SECURITY
We implement appropriate technical and organizational measures to protect your personal data.

7. CONTACT
Data Protection Officer: ${formData.dpoName || '[DPO Name]'} - ${formData.dpoEmail || '[DPO Email]'}
Grievance Officer: ${formData.grievanceName || '[Grievance Officer Name]'} - ${formData.grievanceEmail || '[Grievance Officer Email]'}
    `,
    'consent-notice': `
1. CONSENT NOTICE
${formData.orgName || '[Organisation Name]'} collects and processes your personal data with your explicit, informed, and unambiguous consent.

2. DATA COLLECTED
The following personal data is collected:
${(formData.dataTypes || ['Name', 'Email']).map(d => `• ${d}`).join('\n')}

3. PURPOSE OF PROCESSING
Your data is processed for:
${(formData.purposes || ['Service Delivery']).map(p => `• ${p}`).join('\n')}

4. CONSENT WITHDRAWAL
You have the right to withdraw your consent at any time by contacting us. Withdrawal of consent will not affect the lawfulness of processing based on consent before its withdrawal.

5. CONTACT
For any queries regarding consent, contact: ${formData.dpoEmail || 'privacy@company.com'}
    `,
    'cookies-notice': `
1. COOKIES NOTICE
${formData.orgName || '[Organisation Name]'} uses cookies and similar tracking technologies to enhance your browsing experience.

2. TYPES OF COOKIES WE USE
• Essential Cookies: Required for basic website functionality
• Functional Cookies: Remember your preferences
• Analytics Cookies: Help us understand user behavior
• Marketing Cookies: Used for targeted advertising

3. MANAGING COOKIES
You can manage or disable cookies through your browser settings. However, disabling certain cookies may affect website functionality.

4. CONTACT
For more information about our cookie practices, contact: ${formData.dpoEmail || 'privacy@company.com'}
    `,
    'dpa': `
1. DATA PROCESSING AGREEMENT
This Data Processing Agreement ("DPA") is entered into between ${formData.orgName || '[Organisation Name]'} ("Data Controller") and [Processor Name] ("Data Processor").

2. SCOPE OF PROCESSING
This DPA governs the processing of personal data by the Processor on behalf of the Controller as per the Digital Personal Data Protection Act, 2023.

3. DATA SUBJECTS
The personal data processed under this DPA relates to:
• Customers
• Employees
• Business Partners
• Other individuals as specified

4. SECURITY MEASURES
The Processor shall implement and maintain the following security measures:
${(formData.securityMeasures || ['Encryption', 'Access Controls']).map(m => `• ${m}`).join('\n')}

5. BREACH NOTIFICATION
The Processor shall notify the Controller within 48 hours of becoming aware of any personal data breach.

6. SUB-PROCESSING
The Processor may engage sub-processors with prior written consent of the Controller.

7. DURATION
This DPA shall remain in effect for the duration of the processing activities.
    `,
    'retention-policy': `
1. DATA RETENTION POLICY
${formData.orgName || '[Organisation Name]'} is committed to retaining personal data only for as long as necessary.

2. RETENTION PERIODS
${formData.retentionPeriod || 'Data is retained for 5 years or as per legal requirements.'}

3. DATA CATEGORIES AND RETENTION
• Customer Data: ${formData.retentionPeriod || '5 years'}
• Employee Data: ${formData.retentionPeriod || '7 years'}
• Financial Data: ${formData.retentionPeriod || '10 years'}
• Marketing Data: ${formData.retentionPeriod || '3 years'}

4. DELETION PROCESS
Personal data is securely deleted upon expiry of the retention period or upon request.

5. RESPONSIBILITY
The Data Protection Officer is responsible for ensuring compliance with this policy.
    `,
    'breach-response': `
1. DATA BREACH RESPONSE PLAN
${formData.orgName || '[Organisation Name]'} has established this response plan to handle personal data breaches effectively.

2. IMMEDIATE ACTIONS
• Identify and assess the breach
• Contain the breach to prevent further damage
• Assess the risk to affected individuals

3. NOTIFICATION PROCEDURE
• Internal Notification: Within 24 hours to the Data Protection Officer
• External Notification: Within 72 hours to the Data Protection Board
• Individual Notification: Without undue delay, if high risk

4. INVESTIGATION
A thorough investigation shall be conducted to determine the cause and impact of the breach.

5. REMEDIATION
Corrective measures shall be implemented to prevent future breaches.

6. DOCUMENTATION
All breaches and responses shall be documented for compliance purposes.
    `,
    'dsr-procedure': `
1. DATA SUBJECT RIGHTS PROCEDURE
${formData.orgName || '[Organisation Name]'} respects and facilitates the exercise of data subject rights under DPDPA.

2. RIGHTS COVERED
• Right to Access
• Right to Correction
• Right to Erasure
• Right to Data Portability
• Right to Object
• Right to Withdraw Consent
• Right to Nomination
• Right to Grievance Redressal

3. REQUEST PROCESS
• Submit request via email or web form
• Verify identity of the requester
• Acknowledge receipt within 48 hours
• Respond to the request within 30 days

4. CONTACT
Submit requests to: ${formData.dpoEmail || 'dpo@company.com'}
    `,
    'vendor-checklist': `
1. VENDOR DATA PROCESSING CHECKLIST
${formData.orgName || '[Organisation Name]'} conducts due diligence on vendors processing personal data.

2. ASSESSMENT CRITERIA
• [ ] Purpose and nature of data processing
• [ ] Categories of personal data processed
• [ ] Security measures implemented
• [ ] Data transfer mechanisms
• [ ] Breach notification procedures
• [ ] Sub-processing arrangements
• [ ] Data retention and deletion practices

3. COMPLIANCE REQUIREMENTS
• [ ] DPDPA compliance
• [ ] Data Protection Officer appointment
• [ ] Data Processing Agreement in place
• [ ] Privacy Policy available
• [ ] Incident response plan documented

4. REVIEW FREQUENCY
Vendor assessments shall be conducted annually and upon material changes.
    `,
    'ai-usage-policy': `
1. AI USAGE POLICY
${formData.orgName || '[Organisation Name]'} is committed to the responsible and ethical use of Artificial Intelligence.

2. PERMITTED USE
AI may be used for approved business purposes including:
• Data analysis and insights
• Customer support and engagement
• Process automation
• Content generation (with human review)
• Decision support (not autonomous)

3. PROHIBITED USE
AI shall not be used for:
• Discriminatory or biased applications
• Automated decisions without human oversight
• Processing sensitive personal data without explicit consent
• Unauthorized surveillance or monitoring

4. AI RISK ASSESSMENT
All AI systems must undergo a risk assessment prior to deployment.

5. HUMAN OVERSIGHT
All AI decisions require human review and override capability.

6. REPORTING
AI-related incidents must be reported to the AI Governance Committee immediately.
    `,
    'responsible-ai-policy': `
1. RESPONSIBLE AI POLICY
${formData.orgName || '[Organisation Name]'} adopts the following principles for responsible AI.

2. PRINCIPLES
• Fairness: AI systems shall not discriminate
• Transparency: AI decisions shall be explainable
• Accountability: Humans remain responsible for AI outcomes
• Privacy: AI systems shall protect personal data
• Security: AI systems shall be secure by design

3. GOVERNANCE
The AI Governance Committee oversees all AI systems.

4. COMPLIANCE
All AI systems comply with applicable laws including DPDPA and EU AI Act.
    `,
    'ai-governance-framework': `
1. AI GOVERNANCE FRAMEWORK
${formData.orgName || '[Organisation Name]'} establishes this framework to govern AI systems.

2. GOVERNANCE STRUCTURE
• AI Governance Committee
• AI Risk Assessment Team
• AI Compliance Team
• AI Ethics Advisory Board

3. POLICIES
• AI Usage Policy
• Responsible AI Policy
• AI Risk Management Policy
• AI Incident Response Policy

4. PROCEDURES
• AI lifecycle management
• AI risk assessment
• AI incident response
• AI compliance review

5. COMPLIANCE
Regular audits and compliance reviews are conducted.
    `,
    'ai-risk-assessment': `
1. AI RISK ASSESSMENT
${formData.orgName || '[Organisation Name]'} conducts risk assessments for all AI systems.

2. ASSESSMENT AREAS
• Data privacy and protection
• Bias and fairness
• Security and reliability
• Compliance and regulatory
• Transparency and explainability

3. RISK MATRIX
• High Risk: Severe impact, likely to occur
• Medium Risk: Moderate impact, possible
• Low Risk: Minor impact, unlikely

4. MITIGATION MEASURES
Appropriate controls shall be implemented based on risk level.

5. REVIEW
Risk assessments shall be reviewed annually and upon significant changes.
    `,
    'ai-vendor-questionnaire': `
1. AI VENDOR QUESTIONNAIRE
${formData.orgName || '[Organisation Name]'} assesses AI vendors using this questionnaire.

2. VENDOR INFORMATION
• Vendor Name:
• AI Services Provided:
• Data Processing Locations:

3. COMPLIANCE CHECKLIST
• [ ] Data protection policy in place
• [ ] AI governance framework documented
• [ ] Risk assessment process established
• [ ] Incident response plan documented
• [ ] Transparency reporting

4. SECURITY ASSESSMENT
• [ ] Encryption in place
• [ ] Access controls implemented
• [ ] Regular security audits conducted

5. REVIEW
Vendor assessments shall be conducted annually.
    `,
    'ai-acceptable-use': `
1. AI ACCEPTABLE USE POLICY
${formData.orgName || '[Organisation Name]'} defines acceptable use of AI tools and systems.

2. PERMITTED USES
• Business operations and decision support
• Research and development
• Customer support and service
• Data analysis and insights

3. PROHIBITED USES
• Unauthorized data processing
• Bias or discrimination
• Automated decision-making without human oversight
• Processing sensitive data without consent

4. RESPONSIBILITIES
Users must ensure AI use complies with all applicable policies and laws.

5. REPORTING
Violations must be reported to the AI Governance Committee immediately.
    `,
    'ai-impact-assessment': `
1. AI IMPACT ASSESSMENT
${formData.orgName || '[Organisation Name]'} evaluates the impact of AI systems using this template.

2. IMPACT AREAS
• Data privacy and protection
• Human rights and dignity
• Bias and fairness
• Security and reliability
• Compliance and regulatory

3. ASSESSMENT PROCESS
• Identify AI system and scope
• Assess potential impacts
• Identify mitigation measures
• Implement measures
• Monitor and review effectiveness

4. DOCUMENTATION
All assessments shall be documented and maintained.

5. REVIEW
Assessments shall be reviewed annually and upon significant changes.
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
    const fullContent = content;

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