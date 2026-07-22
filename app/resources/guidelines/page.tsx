"use client";

import { useState } from 'react';
import Link from 'next/link';
import { ArrowLeft, FileText, Download, Calendar, CheckCircle } from 'lucide-react';

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
# DPDP Act Implementation Guidelines 2026

## 1. Introduction
The Digital Personal Data Protection Act, 2023 (DPDP Act) establishes a comprehensive framework for processing personal data in India. These guidelines provide practical steps for organizations to achieve compliance.

## 2. Key Compliance Areas

### 2.1 Notice and Consent
- Provide clear and concise privacy notices
- Obtain valid consent for processing personal data
- Enable individuals to withdraw consent easily

### 2.2 Data Security
- Implement reasonable security safeguards
- Conduct regular security audits
- Encrypt sensitive personal data

### 2.3 Breach Response
- Establish incident response protocols
- Notify the Board and affected individuals
- Maintain breach logs and documentation

### 2.4 Governance
- Appoint a Data Protection Officer
- Establish data protection policies
- Provide staff training
- Conduct regular compliance audits

## 3. Implementation Timeline
- Phase 1: Assessment and Gap Analysis (Month 1-2)
- Phase 2: Policy Development and Implementation (Month 3-4)
- Phase 3: Training and Awareness (Month 5)
- Phase 4: Monitoring and Continuous Improvement (Month 6+)

## 4. Resources
- DPDP Act 2023 Full Text
- Data Protection Board Guidelines
- Industry Best Practices

## 5. Contact
For queries, contact the Data Protection Board or your legal advisor.
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
# Data Breach Notification Guidelines

## 1. Overview
Under the DPDP Act, data fiduciaries must notify the Data Protection Board within 72 hours of becoming aware of a data breach.

## 2. When to Notify
- Any unauthorized access, acquisition, or disclosure of personal data
- Loss of personal data
- Any incident that may compromise the security of personal data

## 3. What to Include in Notification
### To the Data Protection Board:
- Nature of the breach
- Type of data compromised
- Number of affected individuals
- Immediate remedial actions taken
- Long-term preventive measures

### To Affected Individuals:
- Nature of the breach
- Type of data compromised
- Potential impact
- Remedial actions taken
- Contact details for queries

## 4. Timeline
- Initial notification: Within 72 hours
- Detailed report: As prescribed by the Board
- Follow-up notifications: As needed

## 5. Best Practices
- Establish a breach response team
- Develop incident response protocols
- Conduct regular drills and simulations
- Maintain incident logs and documentation
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
# Consent Management Framework

## 1. Introduction
Under Section 6 of the DPDP Act, consent must be free, specific, informed, unconditional, unambiguous, and a clear affirmative action.

## 2. Consent Requirements

### 2.1 Free Consent
- No coercion or undue influence
- No bundled consent
- Separate consent for different purposes

### 2.2 Specific Consent
- Purpose-specific consent
- Cannot be used for other purposes
- Must be granular

### 2.3 Informed Consent
- Clear and transparent notice
- Purpose, collection, and use disclosure
- Data subject rights information
- Withdrawal mechanism

### 2.4 Unambiguous Consent
- Clear affirmative action
- Pre-ticked boxes are invalid
- Active opt-in required

## 3. Consent Withdrawal
- Must be as easy as giving consent
- Clear mechanism for withdrawal
- No penalty for withdrawal
- Data deletion upon withdrawal

## 4. Consent Records
- Maintain records of consent
- Timestamp of consent
- Purpose of consent
- Withdrawal records
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
# Data Protection Impact Assessment (DPIA) Guidelines

## 1. What is a DPIA?
A Data Protection Impact Assessment (DPIA) is a process to identify and mitigate risks associated with high-risk data processing activities.

## 2. When is a DPIA Required?
- Processing of sensitive personal data
- Large-scale processing
- Automated decision-making
- Profiling
- Processing of children's data

## 3. DPIA Process

### Step 1: Identify Processing Activities
- Describe the processing
- Identify data flows
- Map data lifecycle

### Step 2: Assess Necessity and Proportionality
- Purpose of processing
- Data minimization
- Storage limitation

### Step 3: Identify Risks
- Data security risks
- Privacy risks
- Legal and compliance risks

### Step 4: Mitigate Risks
- Security measures
- Privacy by design
- Transparency measures

### Step 5: Document and Review
- Document DPIA findings
- Review annually
- Update as needed

## 4. DPIA Template
A structured template should include:
- Project/Processing Name
- Data Controller/Processor
- Purpose of Processing
- Data Categories
- Data Subjects
- Data Flows
- Risk Assessment
- Mitigation Measures
- Sign-off
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
# Cross-Border Data Transfer Guidelines

## 1. Introduction
The DPDP Act regulates cross-border data transfers to ensure adequate protection of personal data.

## 2. Permissible Transfers
### Under Section 16, transfers are permitted to:
- Countries notified by the Central Government
- Transfers subject to prescribed conditions
- Transfers with appropriate safeguards

## 3. Safeguards for Cross-Border Transfers
- Standard contractual clauses
- Binding corporate rules
- Adequacy decisions
- Individual consent
- Case-by-case approvals

## 4. Compliance Steps
1. Identify data being transferred
2. Assess destination country's legal framework
3. Select appropriate transfer mechanism
4. Implement contractual safeguards
5. Maintain records of transfers

## 5. Documentation
- Record of data transfers
- Transfer agreements
- Risk assessments
- Periodic reviews
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
# DPO Appointment Circular

## 1. DPO Requirement
Under the DPDP Act, certain organisations must appoint a Data Protection Officer (DPO).

## 2. When is a DPO Required?
- Significant Data Fiduciaries (SDFs)
- Data fiduciaries with high-volume processing
- Data fiduciaries processing sensitive data
- Designated by the Board

## 3. DPO Qualifications
- Expertise in data protection law
- Knowledge of the DPDP Act
- Understanding of business operations
- Ability to provide guidance

## 4. DPO Responsibilities
- Monitor compliance with DPDP Act
- Liaise with the Data Protection Board
- Provide guidance to the organisation
- Handle data subject requests
- Conduct training and awareness

## 5. DPO Appointment Process
1. Identify qualified candidates
2. Assess expertise and experience
3. Formal appointment letter
4. DPO position in the organisation
5. DPO must be based in India

## 6. DPO Independence
- Direct reporting to the board
- No conflict of interest
- Adequate resources
- Access to all data processing
      `,
    },
  ];

  const handleDownload = (id: string, title: string, content: string) => {
    setDownloading(id);
    
    setTimeout(() => {
      // Create PDF with actual content
      const blob = new Blob([content], { type: 'text/plain' });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = `${title.replace(/\s+/g, '_')}.txt`;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
      setDownloading(null);
    }, 1000);
  };

  return (
    <main className="min-h-screen text-white px-4 pt-28 md:pt-32 pb-16 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-cover bg-center bg-no-repeat" style={{ backgroundImage: "url('/images/home1.jpeg')" }}>
          <div className="absolute inset-0 bg-black/60 backdrop-blur-[2px]" />
        </div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-purple-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-pink-500/10 rounded-full blur-3xl animate-pulse delay-2000" />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Back Button */}
        <Link href="/resources" className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors mb-6 group">
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          Back to Resources
        </Link>

        {/* Header */}
        <div className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Guidelines & Circulars</h1>
          <p className="text-gray-300 text-lg max-w-3xl">Official guidelines and circulars issued by the Data Protection Board under the DPDP Act 2023.</p>
        </div>

        {/* Guidelines Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {guidelines.map((item) => (
            <div
              key={item.id}
              className="bg-white/10 border border-white/20 rounded-2xl backdrop-blur-sm p-6 hover:bg-white/20 transition-all hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/20 group"
            >
              {/* Header */}
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

              {/* Title */}
              <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-purple-400 group-hover:bg-clip-text transition-all">
                {item.title}
              </h3>

              {/* Description */}
              <p className="text-sm text-gray-300 leading-relaxed mb-4">
                {item.description}
              </p>

              {/* Category & Download */}
              <div className="flex items-center justify-between pt-4 border-t border-white/10">
                <span className="text-xs text-gray-400">Category: {item.category}</span>
                <button
                  onClick={() => handleDownload(item.id, item.title, item.content)}
                  disabled={downloading === item.id}
                  className={`inline-flex items-center gap-1.5 text-sm text-blue-400 hover:text-purple-400 transition-colors group-hover:translate-x-1 transition-transform ${
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