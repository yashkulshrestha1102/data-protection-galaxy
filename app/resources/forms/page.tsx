"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { ArrowLeft, FileText, Download, CheckCircle, Sparkles } from 'lucide-react';

export default function FormsPage() {
  const [downloading, setDownloading] = useState<string | null>(null);
  const [stars, setStars] = useState<React.ReactNode[]>([]);

  useEffect(() => {
    const starElements = [];
    for (let i = 0; i < 50; i++) {
      starElements.push(
        <div
          key={i}
          className="absolute w-0.5 h-0.5 bg-white rounded-full animate-twinkle"
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 5}s`,
            opacity: Math.random() * 0.5 + 0.1,
          }}
        />
      );
    }
    setStars(starElements);
  }, []);

  const forms = [
    {
      id: 1,
      title: 'Privacy Notice Template',
      description: 'Standard privacy notice template for data collection under the DPDP Act. Covers all mandatory disclosures including consent, rights, and breach notification.',
      format: 'DOCX',
      fields: '15 fields',
      category: 'Notice',
      slug: 'privacy-notice-template',
      content: `
        # Privacy Notice Template

        ## 1. Introduction
        [Organisation Name] is committed to protecting your personal data in compliance with the Digital Personal Data Protection Act, 2023.

        ## 2. Personal Data We Collect
        - Name, email address, phone number
        - Payment information
        - Usage data
        - Any other data you provide

        ## 3. Purpose of Processing
        - Service delivery
        - Account management
        - Legal compliance

        ## 4. Your Rights
        - Right to access
        - Right to correction
        - Right to erasure
        - Right to grievance redressal

        ## 5. Contact Us
        Data Protection Officer: [DPO Name]
        Email: privacy@[organisation].com
      `,
    },
    {
      id: 2,
      title: 'Consent Form Template',
      description: 'Consent form template for obtaining data principal consent under the DPDP Act. Includes granular consent options for different processing purposes.',
      format: 'DOCX',
      fields: '8 fields',
      category: 'Consent',
      slug: 'consent-form-template',
      content: `
        # Consent Form Template

        ## 1. Data Collection Purpose
        I understand that my personal data will be collected for the following purposes:
        - [Purpose 1]
        - [Purpose 2]

        ## 2. Data Usage
        I consent to the use of my personal data for the purposes stated above.

        ## 3. Withdrawal of Consent
        I understand that I can withdraw my consent at any time.

        ## 4. Signature
        Name: _______________
        Date: _______________
        Signature: _______________
      `,
    },
    {
      id: 3,
      title: 'Data Access Request Form',
      description: 'Form for individuals to request access to their personal data. Users can request confirmation about whether their data is being processed.',
      format: 'PDF',
      fields: '6 fields',
      category: 'Data Rights',
      slug: 'data-access-request-form',
      content: `
        # Data Access Request Form

        ## 1. Applicant Details
        Full Name: _______________
        Email Address: _______________
        Phone Number: _______________

        ## 2. Request Details
        I request access to the following personal data:
        - All data
        - Specific data (please specify): _______________

        ## 3. Identity Verification
        I confirm that I am the data principal.

        ## 4. Signature
        Date: _______________
        Signature: _______________
      `,
    },
    {
      id: 4,
      title: 'Data Correction Request Form',
      description: 'Form for individuals to request correction of inaccurate or incomplete personal data.',
      format: 'PDF',
      fields: '5 fields',
      category: 'Data Rights',
      slug: 'data-correction-request-form',
      content: `
        # Data Correction Request Form

        ## 1. Applicant Details
        Full Name: _______________
        Email Address: _______________

        ## 2. Data to be Corrected
        Current Data: _______________
        Corrected Data: _______________

        ## 3. Reason for Correction
        _______________

        ## 4. Signature
        Date: _______________
        Signature: _______________
      `,
    },
    {
      id: 5,
      title: 'Data Erasure Request Form',
      description: 'Form for individuals to request deletion of their personal data when it is no longer necessary or consent has been withdrawn.',
      format: 'PDF',
      fields: '5 fields',
      category: 'Data Rights',
      slug: 'data-erasure-request-form',
      content: `
        # Data Erasure Request Form

        ## 1. Applicant Details
        Full Name: _______________
        Email Address: _______________

        ## 2. Data to be Erased
        Please delete all my personal data held by [Organisation Name].

        ## 3. Reason for Erasure
        - Consent withdrawn
        - Data no longer necessary
        - Other (specify): _______________

        ## 4. Signature
        Date: _______________
        Signature: _______________
      `,
    },
    {
      id: 6,
      title: 'Data Breach Notification Form',
      description: 'Form for notifying data breaches to the Data Protection Board. Includes sections for breach details, affected individuals, and remedial actions.',
      format: 'DOCX',
      fields: '12 fields',
      category: 'Breach Response',
      slug: 'data-breach-notification-form',
      content: `
        # Data Breach Notification Form

        ## 1. Organisation Details
        Organisation Name: _______________
        Contact Person: _______________
        Email: _______________

        ## 2. Breach Details
        Date of Breach: _______________
        Nature of Breach: _______________
        Type of Data Compromised: _______________

        ## 3. Affected Individuals
        Number of Affected Individuals: _______________

        ## 4. Remedial Actions
        Immediate Actions Taken: _______________
        Long-term Preventive Measures: _______________

        ## 5. Signature
        Date: _______________
        Signature: _______________
      `,
    },
    {
      id: 7,
      title: 'Data Protection Impact Assessment (DPIA) Template',
      description: 'Template for conducting Data Protection Impact Assessments for high-risk data processing activities.',
      format: 'DOCX',
      fields: '20 fields',
      category: 'Risk Assessment',
      slug: 'dpia-template',
      content: `
        # Data Protection Impact Assessment (DPIA) Template

        ## 1. Project/Processing Name
        _______________

        ## 2. Data Controller/Processor
        _______________

        ## 3. Purpose of Processing
        _______________

        ## 4. Data Categories
        - Personal Data: _______________
        - Sensitive Data: _______________

        ## 5. Data Subjects
        _______________

        ## 6. Data Flows
        _______________

        ## 7. Risk Assessment
        | Risk | Likelihood | Impact | Mitigation |
        |------|------------|--------|------------|
        |      |            |        |            |

        ## 8. Mitigation Measures
        _______________

        ## 9. Sign-off
        Date: _______________
        Signature: _______________
      `,
    },
    {
      id: 8,
      title: 'DPO Appointment Letter Template',
      description: 'Template for appointing a Data Protection Officer. Includes responsibilities, reporting structure, and terms of appointment.',
      format: 'DOCX',
      fields: '7 fields',
      category: 'Governance',
      slug: 'dpo-appointment-letter-template',
      content: `
        # DPO Appointment Letter Template

        ## 1. Appointment Details
        Date: _______________
        DPO Name: _______________

        ## 2. Responsibilities
        - Monitor compliance with DPDP Act
        - Liaise with the Data Protection Board
        - Provide guidance to the organisation
        - Handle data subject requests
        - Conduct training and awareness

        ## 3. Reporting Structure
        The DPO will report directly to the Board of Directors.

        ## 4. Terms of Appointment
        - Tenure: _______________
        - Notice Period: _______________

        ## 5. Signature
        Date: _______________
        Signature: _______________
      `,
    },
  ];

  const handleDownload = async (id: number, title: string, content: string) => {
    setDownloading(title);

    try {
      // Create a temporary div with the content
      const element = document.createElement('div');
      element.innerHTML = `
        <div style="padding: 40px; font-family: Arial, sans-serif; color: #333; max-width: 800px; margin: 0 auto;">
          <div style="border-bottom: 3px solid #8B5CF6; padding-bottom: 20px; margin-bottom: 20px;">
            <h1 style="font-size: 28px; color: #1a1a2e; margin: 0;">${title}</h1>
            <p style="color: #666; margin: 5px 0 0 0;">Form Type: ${forms.find(f => f.id === id)?.category}</p>
          </div>
          <div style="font-family: monospace; white-space: pre-wrap; line-height: 1.8;">${content}</div>
          <div style="margin-top: 40px; padding-top: 20px; border-top: 1px solid #eee; text-align: center; color: #999; font-size: 12px;">
            Legal Galaxy — Data Protection Resources
          </div>
        </div>
      `;
      document.body.appendChild(element);

      // Dynamically import html2pdf
      const html2pdf = (await import('html2pdf.js')).default;

      const opt = {
        margin: 10,
        filename: `${title.replace(/\s+/g, '_')}.pdf`,
        image: { type: 'jpeg', quality: 0.98 },
        html2canvas: { scale: 2, useCORS: true },
        jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' },
        pagebreak: { mode: ['avoid-all', 'css', 'legacy'] },
      };

      await html2pdf().set(opt).from(element).save();
      document.body.removeChild(element);
    } catch (error) {
      console.error('PDF download failed:', error);
      alert('PDF download failed. Please try again.');
    }

    setDownloading(null);
  };

  const getCategoryColor = (category: string) => {
    const colors: Record<string, string> = {
      'Notice': 'from-blue-500 to-blue-600',
      'Consent': 'from-purple-500 to-purple-600',
      'Data Rights': 'from-green-500 to-green-600',
      'Breach Response': 'from-red-500 to-red-600',
      'Risk Assessment': 'from-orange-500 to-orange-600',
      'Governance': 'from-indigo-500 to-indigo-600',
    };
    return colors[category] || 'from-gray-500 to-gray-600';
  };

  const getCategoryBg = (category: string) => {
    const colors: Record<string, string> = {
      'Notice': 'bg-blue-500/20 text-blue-400 border-blue-500/30',
      'Consent': 'bg-purple-500/20 text-purple-400 border-purple-500/30',
      'Data Rights': 'bg-green-500/20 text-green-400 border-green-500/30',
      'Breach Response': 'bg-red-500/20 text-red-400 border-red-500/30',
      'Risk Assessment': 'bg-orange-500/20 text-orange-400 border-orange-500/30',
      'Governance': 'bg-indigo-500/20 text-indigo-400 border-indigo-500/30',
    };
    return colors[category] || 'bg-gray-500/20 text-gray-400 border-gray-500/30';
  };

  return (
    <main className="min-h-screen text-white px-4 pt-28 md:pt-32 pb-16 relative overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-cover bg-center bg-no-repeat" style={{ backgroundImage: "url('/images/home1.jpeg')" }}>
          <div className="absolute inset-0 bg-black/60 backdrop-blur-[2px]" />
        </div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-purple-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-pink-500/10 rounded-full blur-3xl animate-pulse delay-2000" />
        {stars}
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <Link href="/resources" className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors mb-6 group">
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          Back to Resources
        </Link>

        <div className="mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 backdrop-blur-sm text-sm font-semibold text-blue-400 mb-4">
            <Sparkles className="w-4 h-4" />
            Forms & Templates
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Forms & Templates</h1>
          <p className="text-gray-300 text-lg max-w-3xl">Standard forms and templates for data protection compliance under the DPDP Act 2023.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {forms.map((item) => (
            <div
              key={item.id}
              className="bg-white/10 border border-white/20 rounded-2xl backdrop-blur-sm p-6 hover:bg-white/20 transition-all hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/20 group"
            >
              <div className="flex items-start justify-between mb-3">
                <span className={`px-3 py-1 rounded-full text-xs font-medium border ${getCategoryBg(item.category)}`}>
                  {item.category}
                </span>
                <div className="flex items-center gap-2">
                  <span className="px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-500/20 text-green-400 border border-green-500/30">
                    {item.format}
                  </span>
                  <span className="text-xs text-gray-400">{item.fields}</span>
                </div>
              </div>

              <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-purple-400 group-hover:bg-clip-text transition-all">
                {item.title}
              </h3>

              <p className="text-sm text-gray-300 leading-relaxed mb-4">
                {item.description}
              </p>

              <button
                onClick={() => handleDownload(item.id, item.title, item.content)}
                disabled={downloading === item.title}
                className={`inline-flex items-center gap-1.5 text-sm transition-colors ${
                  downloading === item.title 
                    ? 'text-gray-400 cursor-not-allowed' 
                    : 'text-blue-400 hover:text-purple-400 group-hover:translate-x-1 transition-transform'
                }`}
              >
                {downloading === item.title ? (
                  <>
                    <div className="w-4 h-4 border-2 border-blue-400 border-t-transparent rounded-full animate-spin" />
                    Downloading...
                  </>
                ) : (
                  <>
                    <Download className="w-4 h-4" />
                    Download
                  </>
                )}
              </button>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}