// data/guides.ts
import { Shield, Globe, Scale, FileText, Users, Building, Database } from 'lucide-react';

export interface Guide {
  id: number;
  title: string;
  category: string;
  categoryIcon: any;
  categoryColor: string;
  excerpt: string;
  content: string;
  readTime: string;
  lastUpdated: string;
  slug: string;
  pdfUrl?: string;
  tableOfContents: { id: string; title: string }[];
  keyTakeaways: string[];
}

export const guidesData: Guide[] = [
  {
    id: 1,
    title: 'DPDPA 2023 — Complete Guide',
    category: 'Indian Law',
    categoryIcon: Shield,
    categoryColor: 'from-blue-500 to-blue-600',
    excerpt: 'Comprehensive guide to India\'s Digital Personal Data Protection Act, 2023 (DPDPA) covering scope, consent framework, data principal rights, fiduciary obligations, cross-border transfers, penalties up to INR 250 crore, and practical compliance steps for Indian and multinational companies.',
    content: `
      <h2>Introduction</h2>
      <p>The Digital Personal Data Protection Act, 2023 (DPDPA) is India's first comprehensive data protection law. It establishes a framework for processing personal data, balancing individual rights with the need for lawful processing.</p>
      
      <h2>Scope of the DPDPA</h2>
      <p>The DPDPA applies to the processing of digital personal data within India, and to processing outside India if it involves offering goods or services to data principals in India.</p>
      
      <h2>Consent Framework</h2>
      <p>Under Section 6 of the DPDPA, consent must be free, specific, informed, unconditional, unambiguous, and a clear affirmative action.</p>
      
      <h2>Data Principal Rights</h2>
      <ul>
        <li>Right to access</li>
        <li>Right to correction</li>
        <li>Right to erasure</li>
        <li>Right to grievance redressal</li>
        <li>Right to nomination</li>
      </ul>
      
      <h2>Fiduciary Obligations</h2>
      <p>Data fiduciaries must provide notice, obtain consent, implement security safeguards, and comply with breach notification requirements.</p>
      
      <h2>Cross-Border Transfers</h2>
      <p>The DPDPA allows cross-border data transfers to countries notified by the Central Government, subject to prescribed conditions.</p>
      
      <h2>Penalties & Enforcement</h2>
      <p>Non-compliance can lead to penalties up to ₹250 crore for data fiduciaries and up to ₹50 crore for data processors.</p>
    `,
    readTime: '20 min read',
    lastUpdated: '23 Feb 2026',
    slug: 'dpdpa-2023-complete-guide',
    tableOfContents: [
      { id: 'introduction', title: 'Introduction' },
      { id: 'scope', title: 'Scope of the DPDPA' },
      { id: 'consent', title: 'Consent Framework' },
      { id: 'rights', title: 'Data Principal Rights' },
      { id: 'obligations', title: 'Fiduciary Obligations' },
      { id: 'cross-border', title: 'Cross-Border Transfers' },
      { id: 'penalties', title: 'Penalties & Enforcement' },
    ],
    keyTakeaways: [
      'The DPDPA applies to all digital personal data processing within India',
      'Consent must be free, specific, informed, and unambiguous',
      'Data principals have 5 key rights under the Act',
      'Data fiduciaries have significant compliance obligations',
      'Penalties can go up to ₹250 crore for non-compliance',
    ],
  },
  {
    id: 2,
    title: 'GDPR Essentials for Indian Companies',
    category: 'EU Law',
    categoryIcon: Globe,
    categoryColor: 'from-purple-500 to-purple-600',
    excerpt: 'How EU data protection rules affect Indian businesses. Comprehensive guide to GDPR applicability, key principles, lawful bases, data subject rights, and compliance strategies for Indian IT and BPO companies.',
    content: `
      <h2>Why Indian Companies Must Care About GDPR</h2>
      <p>The General Data Protection Regulation (GDPR) applies to Indian companies that offer goods or services to EU residents or monitor their behaviour — physical presence in Europe is not required.</p>
      
      <h2>When GDPR Applies to Indian Businesses</h2>
      <p>Article 3 of the GDPR establishes territorial scope. Two limbs are particularly relevant to Indian companies: establishment in the EU, and targeting or monitoring EU data subjects.</p>
      
      <h2>Key GDPR Principles</h2>
      <ul>
        <li>Lawfulness, fairness, and transparency</li>
        <li>Purpose limitation</li>
        <li>Data minimisation</li>
        <li>Accuracy</li>
        <li>Storage limitation</li>
        <li>Integrity and confidentiality</li>
        <li>Accountability</li>
      </ul>
      
      <h2>Six Lawful Bases for Processing</h2>
      <p>Every act of processing must rest on one of six lawful bases: consent, contract, legal obligation, vital interests, public task, or legitimate interests.</p>
      
      <h2>Data Subject Rights</h2>
      <p>The GDPR grants individuals comprehensive rights: access, rectification, erasure, restriction, data portability, and objection.</p>
      
      <h2>DPO Requirements</h2>
      <p>A DPO must be appointed where core activities involve regular and systematic monitoring of data subjects on a large scale, or processing of special categories of data.</p>
    `,
    readTime: '18 min read',
    lastUpdated: '23 Feb 2026',
    slug: 'gdpr-essentials-indian-companies',
    tableOfContents: [
      { id: 'why-care', title: 'Why Indian Companies Must Care About GDPR' },
      { id: 'when-applies', title: 'When GDPR Applies to Indian Businesses' },
      { id: 'key-principles', title: 'Key GDPR Principles' },
      { id: 'lawful-bases', title: 'Six Lawful Bases for Processing' },
      { id: 'data-rights', title: 'Data Subject Rights' },
      { id: 'dpo', title: 'DPO Requirements' },
      { id: 'cross-border', title: 'Cross-Border Transfers' },
      { id: 'breach', title: 'Data Breach Notification' },
      { id: 'penalties', title: 'Penalties & Enforcement' },
    ],
    keyTakeaways: [
      'GDPR applies to Indian companies targeting EU residents',
      'No physical presence in EU is required for applicability',
      'Every processing activity needs a documented lawful basis',
      'India does not have an EU adequacy decision',
      'GDPR fines can reach €20 million or 4% of global turnover',
    ],
  },
  {
    id: 3,
    title: 'CCPA / CPRA Overview',
    category: 'US Law',
    categoryIcon: Scale,
    categoryColor: 'from-green-500 to-green-600',
    excerpt: 'Comprehensive guide to the California Consumer Privacy Act (CCPA) and California Privacy Rights Act (CPRA). Covers scope, consumer rights, business obligations, enforcement, and compliance strategies for Indian companies serving US consumers.',
    content: `
      <h2>Introduction to CCPA & CPRA</h2>
      <p>The California Consumer Privacy Act (CCPA) and California Privacy Rights Act (CPRA) are the most comprehensive data privacy laws in the United States.</p>
      
      <h2>Consumer Rights Under CCPA/CPRA</h2>
      <ul>
        <li>Right to know what personal data is collected</li>
        <li>Right to delete personal data</li>
        <li>Right to opt-out of sale or sharing</li>
        <li>Right to correct inaccurate data</li>
        <li>Right to limit use of sensitive data</li>
      </ul>
      
      <h2>Business Obligations</h2>
      <p>Businesses must provide notice at collection, respond to consumer requests, maintain records, and implement security measures.</p>
      
      <h2>Enforcement & Penalties</h2>
      <p>The California Privacy Protection Agency (CPPA) enforces the law with penalties up to $7,500 per violation.</p>
    `,
    readTime: '18 min read',
    lastUpdated: '20 Feb 2026',
    slug: 'ccpa-cpra-overview',
    tableOfContents: [
      { id: 'introduction', title: 'Introduction to CCPA & CPRA' },
      { id: 'consumer-rights', title: 'Consumer Rights' },
      { id: 'business-obligations', title: 'Business Obligations' },
      { id: 'enforcement', title: 'Enforcement & Penalties' },
    ],
    keyTakeaways: [
      'CCPA/CPRA applies to businesses serving California residents',
      'Consumers have 5 key rights under the law',
      'Businesses must provide notice and respond to requests',
      'Penalties can reach $7,500 per violation',
    ],
  },
  {
    id: 4,
    title: 'GDPR vs DPDPA: A Comparative Analysis',
    category: 'Comparative',
    categoryIcon: Scale,
    categoryColor: 'from-orange-500 to-orange-600',
    excerpt: 'Compare the EU General Data Protection Regulation (GDPR) and India\'s Digital Personal Data Protection Act (DPDPA). Understand key differences in scope, consent, rights, obligations, and enforcement.',
    content: `
      <h2>Overview</h2>
      <p>Both the GDPR and DPDPA treat consent as a primary basis for processing personal data, but the two regimes differ in significant ways.</p>
      
      <h2>Key Differences</h2>
      <table>
        <tr><th>Aspect</th><th>GDPR</th><th>DPDPA</th></tr>
        <tr><td>Standard</td><td>Freely given, specific, informed, unambiguous</td><td>Free, specific, informed, unconditional, unambiguous</td></tr>
        <tr><td>Children</td><td>Parental consent under 16</td><td>Verifiable parental consent under 18</td></tr>
      </table>
    `,
    readTime: '15 min read',
    lastUpdated: '18 Feb 2026',
    slug: 'gdpr-vs-dpdpa',
    tableOfContents: [
      { id: 'overview', title: 'Overview' },
      { id: 'differences', title: 'Key Differences' },
      { id: 'consent', title: 'Consent Requirements' },
      { id: 'rights', title: 'Data Subject Rights' },
    ],
    keyTakeaways: [
      'GDPR and DPDPA have different consent standards',
      'DPDPA has stricter age requirements for children',
      'GDPR has special category data provisions',
    ],
  },
  {
    id: 5,
    title: 'Cross-Border Data Transfer Compliance',
    category: 'Compliance',
    categoryIcon: Globe,
    categoryColor: 'from-cyan-500 to-cyan-600',
    excerpt: 'Complete guide to cross-border data transfer compliance under GDPR, DPDPA, and other global privacy frameworks. Covers adequacy decisions, Standard Contractual Clauses, and Transfer Impact Assessments.',
    content: `
      <h2>Introduction</h2>
      <p>Cross-border data transfers are regulated under multiple frameworks including GDPR, DPDPA, CCPA, and LGPD.</p>
      
      <h2>GDPR Requirements</h2>
      <p>Transfers to third countries require adequacy decisions, Standard Contractual Clauses, or Binding Corporate Rules.</p>
      
      <h2>DPDPA Requirements</h2>
      <p>Transfers to countries notified by the Central Government are permitted under prescribed conditions.</p>
    `,
    readTime: '12 min read',
    lastUpdated: '15 Feb 2026',
    slug: 'cross-border-data-transfer',
    tableOfContents: [
      { id: 'introduction', title: 'Introduction' },
      { id: 'gdpr', title: 'GDPR Requirements' },
      { id: 'dpdpa', title: 'DPDPA Requirements' },
    ],
    keyTakeaways: [
      'Cross-border transfers require adequacy decisions or SCCs',
      'India does not have an EU adequacy decision',
      'SCCs with TIAs are required for EU-India transfers',
    ],
  },
  {
    id: 6,
    title: 'Data Protection Impact Assessment (DPIA) Guide',
    category: 'Best Practice',
    categoryIcon: FileText,
    categoryColor: 'from-pink-500 to-pink-600',
    excerpt: 'Complete guide to Data Protection Impact Assessments (DPIAs). Learn when DPIAs are required, how to conduct them, and best practices for documenting and managing risks.',
    content: `
      <h2>What is a DPIA?</h2>
      <p>A Data Protection Impact Assessment (DPIA) is a process to identify and mitigate risks associated with high-risk data processing activities.</p>
      
      <h2>When is a DPIA Required?</h2>
      <p>DPIAs are required for processing that involves sensitive data, large-scale processing, or automated decision-making.</p>
    `,
    readTime: '10 min read',
    lastUpdated: '12 Feb 2026',
    slug: 'dpia-guide',
    tableOfContents: [
      { id: 'what-is', title: 'What is a DPIA?' },
      { id: 'when', title: 'When is a DPIA Required?' },
      { id: 'how', title: 'How to Conduct a DPIA' },
    ],
    keyTakeaways: [
      'DPIAs identify and mitigate data protection risks',
      'Required for high-risk processing activities',
      'Must be documented and reviewed regularly',
    ],
  },
  {
    id: 7,
    title: 'Data Protection Officer (DPO) Handbook',
    category: 'Best Practice',
    categoryIcon: Users,
    categoryColor: 'from-indigo-500 to-indigo-600',
    excerpt: 'Comprehensive handbook for Data Protection Officers. Covers DPO appointment, responsibilities, compliance obligations, and best practices for privacy governance.',
    content: `
      <h2>DPO Appointment</h2>
      <p>DPOs must be appointed based on professional qualities and expert knowledge of data protection law and practices.</p>
      
      <h2>DPO Responsibilities</h2>
      <ul>
        <li>Monitor compliance</li>
        <li>Liaise with supervisory authorities</li>
        <li>Provide guidance</li>
        <li>Handle data subject requests</li>
      </ul>
    `,
    readTime: '8 min read',
    lastUpdated: '10 Feb 2026',
    slug: 'dpo-handbook',
    tableOfContents: [
      { id: 'appointment', title: 'DPO Appointment' },
      { id: 'responsibilities', title: 'DPO Responsibilities' },
      { id: 'compliance', title: 'Compliance Obligations' },
    ],
    keyTakeaways: [
      'DPO must have expert knowledge of data protection',
      'DPO monitors compliance and liaises with authorities',
      'DPO handles data subject requests and provides guidance',
    ],
  },
];