"use client";

import { useState } from 'react';
import Link from 'next/link';
import { ArrowLeft, FileText, Download, Calendar } from 'lucide-react';
import html2pdf from 'html2pdf.js';

export default function GuidelinesPage() {
  const [downloading, setDownloading] = useState<string | null>(null);

  const guidelines = [
    {
      id: 'dpdp-implementation',
      title: 'DPDP Act Implementation Guidelines 2026',
      date: '15 Jul 2026',
      type: 'Guideline',
      description: 'Comprehensive guidelines for implementing the Digital Personal Data Protection Act, 2023.',
      category: 'Implementation',
      content: `
        <h1 style="color: #1a1a2e; font-size: 24px; border-bottom: 3px solid #8B5CF6; padding-bottom: 10px;">DPDP Act Implementation Guidelines 2026</h1>
        <h2 style="color: #2d2d44; font-size: 18px; margin-top: 20px;">1. Introduction</h2>
        <p style="color: #444; line-height: 1.6;">The Digital Personal Data Protection Act, 2023 (DPDP Act) establishes a comprehensive framework for processing personal data in India. These guidelines provide practical steps for organizations to achieve compliance.</p>
        
        <h2 style="color: #2d2d44; font-size: 18px; margin-top: 20px;">2. Key Compliance Areas</h2>
        <h3 style="color: #3d3d5c; font-size: 16px;">2.1 Notice and Consent</h3>
        <ul style="color: #444; line-height: 1.6;">
          <li>Provide clear and concise privacy notices</li>
          <li>Obtain valid consent for processing personal data</li>
          <li>Enable individuals to withdraw consent easily</li>
        </ul>
        
        <h3 style="color: #3d3d5c; font-size: 16px;">2.2 Data Security</h3>
        <ul style="color: #444; line-height: 1.6;">
          <li>Implement reasonable security safeguards</li>
          <li>Conduct regular security audits</li>
          <li>Encrypt sensitive personal data</li>
        </ul>
        
        <h3 style="color: #3d3d5c; font-size: 16px;">2.3 Breach Response</h3>
        <ul style="color: #444; line-height: 1.6;">
          <li>Establish incident response protocols</li>
          <li>Notify the Board and affected individuals</li>
          <li>Maintain breach logs and documentation</li>
        </ul>
        
        <h3 style="color: #3d3d5c; font-size: 16px;">2.4 Governance</h3>
        <ul style="color: #444; line-height: 1.6;">
          <li>Appoint a Data Protection Officer</li>
          <li>Establish data protection policies</li>
          <li>Provide staff training</li>
          <li>Conduct regular compliance audits</li>
        </ul>
        
        <h2 style="color: #2d2d44; font-size: 18px; margin-top: 20px;">3. Implementation Timeline</h2>
        <ul style="color: #444; line-height: 1.6;">
          <li><strong>Phase 1:</strong> Assessment and Gap Analysis (Month 1-2)</li>
          <li><strong>Phase 2:</strong> Policy Development and Implementation (Month 3-4)</li>
          <li><strong>Phase 3:</strong> Training and Awareness (Month 5)</li>
          <li><strong>Phase 4:</strong> Monitoring and Continuous Improvement (Month 6+)</li>
        </ul>
        
        <h2 style="color: #2d2d44; font-size: 18px; margin-top: 20px;">4. Resources</h2>
        <ul style="color: #444; line-height: 1.6;">
          <li>DPDP Act 2023 Full Text</li>
          <li>Data Protection Board Guidelines</li>
          <li>Industry Best Practices</li>
        </ul>
        
        <h2 style="color: #2d2d44; font-size: 18px; margin-top: 20px;">5. Contact</h2>
        <p style="color: #444; line-height: 1.6;">For queries, contact the Data Protection Board or your legal advisor.</p>
      `,
    },
    {
      id: 'breach-notification',
      title: 'Data Breach Notification Guidelines',
      date: '10 Jul 2026',
      type: 'Circular',
      description: 'Guidelines for notifying data breaches to the Data Protection Board and affected individuals.',
      category: 'Breach Response',
      content: `
        <h1 style="color: #1a1a2e; font-size: 24px; border-bottom: 3px solid #8B5CF6; padding-bottom: 10px;">Data Breach Notification Guidelines</h1>
        <h2 style="color: #2d2d44; font-size: 18px; margin-top: 20px;">1. Overview</h2>
        <p style="color: #444; line-height: 1.6;">Under the DPDP Act, data fiduciaries must notify the Data Protection Board within 72 hours of becoming aware of a data breach.</p>
        
        <h2 style="color: #2d2d44; font-size: 18px; margin-top: 20px;">2. When to Notify</h2>
        <ul style="color: #444; line-height: 1.6;">
          <li>Any unauthorized access, acquisition, or disclosure of personal data</li>
          <li>Loss of personal data</li>
          <li>Any incident that may compromise the security of personal data</li>
        </ul>
        
        <h2 style="color: #2d2d44; font-size: 18px; margin-top: 20px;">3. What to Include</h2>
        <h3 style="color: #3d3d5c; font-size: 16px;">To the Board:</h3>
        <ul style="color: #444; line-height: 1.6;">
          <li>Nature of the breach</li>
          <li>Type of data compromised</li>
          <li>Number of affected individuals</li>
          <li>Immediate remedial actions</li>
        </ul>
        <h3 style="color: #3d3d5c; font-size: 16px;">To Affected Individuals:</h3>
        <ul style="color: #444; line-height: 1.6;">
          <li>Nature of the breach</li>
          <li>Type of data compromised</li>
          <li>Potential impact</li>
          <li>Remedial actions taken</li>
        </ul>
      `,
    },
    {
      id: 'consent-management',
      title: 'Consent Management Framework',
      date: '5 Jul 2026',
      type: 'Guideline',
      description: 'Framework for obtaining and managing consent under the DPDP Act.',
      category: 'Consent',
      content: `
        <h1 style="color: #1a1a2e; font-size: 24px; border-bottom: 3px solid #8B5CF6; padding-bottom: 10px;">Consent Management Framework</h1>
        <h2 style="color: #2d2d44; font-size: 18px; margin-top: 20px;">1. Introduction</h2>
        <p style="color: #444; line-height: 1.6;">Under Section 6 of the DPDP Act, consent must be free, specific, informed, unconditional, unambiguous, and a clear affirmative action.</p>
        
        <h2 style="color: #2d2d44; font-size: 18px; margin-top: 20px;">2. Consent Requirements</h2>
        <ul style="color: #444; line-height: 1.6;">
          <li><strong>Free:</strong> No coercion or undue influence</li>
          <li><strong>Specific:</strong> Purpose-specific consent</li>
          <li><strong>Informed:</strong> Clear and transparent notice</li>
          <li><strong>Unambiguous:</strong> Clear affirmative action</li>
        </ul>
        
        <h2 style="color: #2d2d44; font-size: 18px; margin-top: 20px;">3. Consent Withdrawal</h2>
        <ul style="color: #444; line-height: 1.6;">
          <li>Must be as easy as giving consent</li>
          <li>Clear mechanism for withdrawal</li>
          <li>No penalty for withdrawal</li>
          <li>Data deletion upon withdrawal</li>
        </ul>
      `,
    },
    {
      id: 'dpia-guidelines',
      title: 'Data Protection Impact Assessment (DPIA) Guidelines',
      date: '28 Jun 2026',
      type: 'Guideline',
      description: 'Guidelines for conducting Data Protection Impact Assessments for high-risk processing activities.',
      category: 'Risk Assessment',
      content: `
        <h1 style="color: #1a1a2e; font-size: 24px; border-bottom: 3px solid #8B5CF6; padding-bottom: 10px;">Data Protection Impact Assessment (DPIA) Guidelines</h1>
        <h2 style="color: #2d2d44; font-size: 18px; margin-top: 20px;">1. What is a DPIA?</h2>
        <p style="color: #444; line-height: 1.6;">A Data Protection Impact Assessment (DPIA) is a process to identify and mitigate risks associated with high-risk data processing activities.</p>
        
        <h2 style="color: #2d2d44; font-size: 18px; margin-top: 20px;">2. When is a DPIA Required?</h2>
        <ul style="color: #444; line-height: 1.6;">
          <li>Processing of sensitive personal data</li>
          <li>Large-scale processing</li>
          <li>Automated decision-making</li>
          <li>Profiling</li>
        </ul>
        
        <h2 style="color: #2d2d44; font-size: 18px; margin-top: 20px;">3. DPIA Process</h2>
        <ul style="color: #444; line-height: 1.6;">
          <li><strong>Step 1:</strong> Identify Processing Activities</li>
          <li><strong>Step 2:</strong> Assess Necessity and Proportionality</li>
          <li><strong>Step 3:</strong> Identify Risks</li>
          <li><strong>Step 4:</strong> Mitigate Risks</li>
          <li><strong>Step 5:</strong> Document and Review</li>
        </ul>
      `,
    },
    {
      id: 'cross-border',
      title: 'Cross-Border Data Transfer Guidelines',
      date: '20 Jun 2026',
      type: 'Circular',
      description: 'Guidelines for transferring personal data outside India under lawful conditions.',
      category: 'Cross-Border',
      content: `
        <h1 style="color: #1a1a2e; font-size: 24px; border-bottom: 3px solid #8B5CF6; padding-bottom: 10px;">Cross-Border Data Transfer Guidelines</h1>
        <h2 style="color: #2d2d44; font-size: 18px; margin-top: 20px;">1. Introduction</h2>
        <p style="color: #444; line-height: 1.6;">The DPDP Act regulates cross-border data transfers to ensure adequate protection of personal data.</p>
        
        <h2 style="color: #2d2d44; font-size: 18px; margin-top: 20px;">2. Permissible Transfers</h2>
        <ul style="color: #444; line-height: 1.6;">
          <li>Countries notified by the Central Government</li>
          <li>Transfers subject to prescribed conditions</li>
          <li>Transfers with appropriate safeguards</li>
        </ul>
        
        <h2 style="color: #2d2d44; font-size: 18px; margin-top: 20px;">3. Safeguards</h2>
        <ul style="color: #444; line-height: 1.6;">
          <li>Standard contractual clauses</li>
          <li>Binding corporate rules</li>
          <li>Adequacy decisions</li>
          <li>Individual consent</li>
        </ul>
      `,
    },
    {
      id: 'dpo-appointment',
      title: 'DPO Appointment Circular',
      date: '15 Jun 2026',
      type: 'Circular',
      description: 'Circular on appointment and responsibilities of Data Protection Officers.',
      category: 'Governance',
      content: `
        <h1 style="color: #1a1a2e; font-size: 24px; border-bottom: 3px solid #8B5CF6; padding-bottom: 10px;">DPO Appointment Circular</h1>
        <h2 style="color: #2d2d44; font-size: 18px; margin-top: 20px;">1. DPO Requirement</h2>
        <p style="color: #444; line-height: 1.6;">Under the DPDP Act, certain organisations must appoint a Data Protection Officer (DPO).</p>
        
        <h2 style="color: #2d2d44; font-size: 18px; margin-top: 20px;">2. When is a DPO Required?</h2>
        <ul style="color: #444; line-height: 1.6;">
          <li>Significant Data Fiduciaries (SDFs)</li>
          <li>Data fiduciaries with high-volume processing</li>
          <li>Data fiduciaries processing sensitive data</li>
        </ul>
        
        <h2 style="color: #2d2d44; font-size: 18px; margin-top: 20px;">3. DPO Responsibilities</h2>
        <ul style="color: #444; line-height: 1.6;">
          <li>Monitor compliance with DPDP Act</li>
          <li>Liaise with the Data Protection Board</li>
          <li>Provide guidance to the organisation</li>
          <li>Handle data subject requests</li>
          <li>Conduct training and awareness</li>
        </ul>
      `,
    },
  ];

  const handleDownload = async (id: string, title: string, content: string) => {
    setDownloading(id);

    try {
      const element = document.createElement('div');
      element.innerHTML = `
        <div style="padding: 40px; font-family: Arial, sans-serif; color: #333; max-width: 800px; margin: 0 auto;">
          <div style="border-bottom: 3px solid #8B5CF6; padding-bottom: 20px; margin-bottom: 20px;">
            <h1 style="font-size: 28px; color: #1a1a2e; margin: 0;">${title}</h1>
            <p style="color: #666; margin: 5px 0 0 0;">Date: ${guidelines.find(g => g.id === id)?.date} | Category: ${guidelines.find(g => g.id === id)?.category}</p>
          </div>
          <div>${content}</div>
          <div style="margin-top: 40px; padding-top: 20px; border-top: 1px solid #eee; text-align: center; color: #999; font-size: 12px;">
            Legal Galaxy — Data Protection Resources
          </div>
        </div>
      `;
      document.body.appendChild(element);

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

  return (
    <main className="min-h-screen text-white px-4 pt-28 md:pt-32 pb-16 relative overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-cover bg-center bg-no-repeat" style={{ backgroundImage: "url('/images/home1.jpeg')" }}>
          <div className="absolute inset-0 bg-black/60 backdrop-blur-[2px]" />
        </div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-purple-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-pink-500/10 rounded-full blur-3xl animate-pulse delay-2000" />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <Link href="/resources" className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors mb-6 group">
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          Back to Resources
        </Link>

        <div className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Guidelines & Circulars</h1>
          <p className="text-gray-300 text-lg max-w-3xl">Official guidelines and circulars issued by the Data Protection Board under the DPDP Act 2023.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {guidelines.map((item) => (
            <div
              key={item.id}
              className="bg-white/10 border border-white/20 rounded-2xl backdrop-blur-sm p-6 hover:bg-white/20 transition-all hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/20 group"
            >
              <div className="flex items-start justify-between mb-3">
                <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium ${
                  item.type === 'Guideline' 
                    ? 'bg-blue-500/20 text-blue-400 border border-blue-500/30' 
                    : 'bg-purple-500/20 text-purple-400 border border-purple-500/30'
                }`}>
                  <FileText className="w-3 h-3" />
                  {item.type}
                </span>
                <span className="text-xs text-gray-400 flex items-center gap-1">
                  <Calendar className="w-3 h-3" />
                  {item.date}
                </span>
              </div>

              <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-purple-400 group-hover:bg-clip-text transition-all">
                {item.title}
              </h3>

              <p className="text-sm text-gray-300 leading-relaxed mb-4">
                {item.description}
              </p>

              <div className="flex items-center justify-between pt-4 border-t border-white/10">
                <span className="text-xs text-gray-400">Category: {item.category}</span>
                <button
                  onClick={() => handleDownload(item.id, item.title, item.content)}
                  disabled={downloading === item.id}
                  className={`inline-flex items-center gap-1.5 text-sm text-blue-400 hover:text-purple-400 transition-colors ${
                    downloading === item.id ? 'opacity-50 cursor-not-allowed' : ''
                  }`}
                >
                  {downloading === item.id ? (
                    <>
                      <div className="w-4 h-4 border-2 border-blue-400 border-t-transparent rounded-full animate-spin" />
                      Downloading...
                    </>
                  ) : (
                    <>
                      <Download className="w-4 h-4" />
                      Download PDF
                    </>
                  )}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}