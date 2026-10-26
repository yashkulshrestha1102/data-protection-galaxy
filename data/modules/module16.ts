// data/modules/module16.ts

import { Module } from '@/app/types/course';

export const module16: Module = {
  id: 16,
  title: 'Documentation & Compliance',
  description:
    'Learn to create all the required compliance documents under the DPDPA. This module covers drafting a legally sound Privacy Policy, Cookie Policy, Data Processing Agreements (DPAs), and internal governance documents like DPO appointment letters.',
  duration: '10 Hours',
  icon: 'FileText',
  learningObjectives: [
    'Draft a compliant and user-friendly Privacy Policy',
    'Understand the requirements of a Cookie Notice',
    'Draft a strong Data Processing Agreement (DPA) for vendors',
    'Create internal documents like DPO appointment letters and DSAR forms',
    'Maintain records of processing activities for audits',
  ],
  chapters: [
    // ============================================================
    // CHAPTER 1: REQUIRED DOCUMENTS
    // ============================================================
    {
      id: 1,
      title: 'Required Documents',
      lessons: [
        {
          id: 1,
          title: 'Privacy Policy',
          duration: '20 min',
          type: 'video',
          description: 'The most visible document for your users.',
          content:
            'A Privacy Policy (or Privacy Notice) is the document that explains to users how you collect, use, and protect their data. Under Section 5, it is a legal requirement.',
          learningObjectives: [
            'Understand the mandatory contents of a Privacy Policy',
            'Learn how to write it in plain language',
            'Avoid common mistakes in privacy policies',
          ],
          keyTakeaways: [
            'The policy must be easily accessible.',
            'It must clearly state what data is collected and why.',
            'It must explain how users can exercise their rights.',
          ],
          sections: [
            {
              id: 'sec-1',
              title: 'The Structure',
              content: [
                {
                  type: 'paragraph',
                  content:
                    'A DPDPA-compliant privacy policy must cover specific areas. It should not be a copy-paste of a GDPR policy, as the laws are different.',
                },
                {
                  type: 'list',
                  content: 'Mandatory Sections',
                  items: [
                    'What data we collect (Name, Email, etc.).',
                    'Why we collect it (Purpose).',
                    'Who we share it with (Third parties, Processors).',
                    'How long we keep it (Retention).',
                    'How we protect it (Security measures).',
                    'Your rights (Access, Correction, Erasure, etc.).',
                    'How to complain to the Data Protection Board.',
                  ],
                },
                {
                  type: 'callout',
                  content:
                    'Avoid legal jargon. Use clear, plain language. The DPDPA requires the notice to be understandable to an average person.',
                  calloutType: 'important',
                },
              ],
            },
            {
              id: 'sec-2',
              title: 'The "Specific Purpose" Rule',
              content: [
                {
                  type: 'paragraph',
                  content:
                    'You cannot write "We use your data to improve our services" without explaining exactly what that means. The policy must specify the purpose (e.g., "We use your email to send weekly newsletters").',
                },
              ],
            },
          ],
          glossary: [
            { term: 'Privacy Policy', definition: 'A statement or legal document that discloses some or all of the ways a party gathers, uses, discloses, and manages a customer\'s data.' },
            { term: 'Plain Language', definition: 'Writing that is easy to read and understand, avoiding complex technical or legal terms.' },
          ],
          references: [
            { title: 'DPDPA Section 5', source: 'Government of India', year: '2023' },
          ],
        },
        {
          id: 2,
          title: 'Cookie Policy',
          duration: '15 min',
          type: 'reading',
          description: 'Managing tracking technologies.',
          content:
            'Cookies and similar tracking technologies collect personal data. A Cookie Policy is required if you use them.',
          learningObjectives: [
            'Understand the different types of cookies',
            'Learn how to implement a cookie consent banner',
          ],
          keyTakeaways: [
            'You need consent before placing non-essential cookies.',
            'The policy must explain how users can manage cookies.',
            'Cookies can track users across the internet.',
          ],
          sections: [
            {
              id: 'sec-1',
              title: 'Types of Cookies',
              content: [
                {
                  type: 'paragraph',
                  content:
                    'A cookie policy should explain the cookies you use:',
                },
                {
                  type: 'list',
                  content: 'Cookie Categories',
                  items: [
                    'Strictly Necessary: Required for the website to function (no consent needed).',
                    'Performance/Analytics: Help you understand how users interact with the site (consent needed).',
                    'Functionality: Remember user preferences (consent needed).',
                    'Targeting/Advertising: Track users to show targeted ads (consent needed).',
                  ],
                },
              ],
            },
            {
              id: 'sec-2',
              title: 'The Consent Banner',
              content: [
                {
                  type: 'paragraph',
                  content:
                    'Your cookie banner must have a clear "Accept" and "Reject" button. You cannot rely on users scrolling past the banner to infer consent.',
                },
              ],
            },
          ],
          glossary: [
            { term: 'Cookie', definition: 'A small piece of data stored on the user\'s computer by the web browser while browsing a website.' },
          ],
          references: [
            { title: 'DPDPA Section 5', source: 'Government of India', year: '2023' },
          ],
        },
        {
          id: 3,
          title: 'Vendor Agreements',
          duration: '20 min',
          type: 'video',
          description: 'The Data Processing Agreement (DPA).',
          content:
            'Under Section 8(2), you must have a valid contract with every Data Processor. This is called a Data Processing Agreement (DPA).',
          learningObjectives: [
            'Understand the mandatory clauses in a DPA',
            'Learn how to negotiate DPAs with vendors',
          ],
          keyTakeaways: [
            'A DPA is legally required.',
            'It must specify the purpose and security measures.',
            'The DPA must allow you to audit the vendor.',
          ],
          sections: [
            {
              id: 'sec-1',
              title: 'DPA Clauses',
              content: [
                {
                  type: 'paragraph',
                  content:
                    'A DPA is not a standard vendor contract. It must contain specific privacy clauses:',
                },
                {
                  type: 'list',
                  content: 'Mandatory DPA Clauses',
                  items: [
                    'Scope of Processing: Vendor can only process data as instructed.',
                    'Confidentiality: Vendor staff must keep data confidential.',
                    'Security: Vendor must implement specific security measures.',
                    'Sub-processing: Vendor cannot hire another vendor without your permission.',
                    'Assistance: Vendor must help you respond to user rights requests.',
                    'Deletion: Vendor must delete data when the contract ends.',
                  ],
                },
              ],
            },
          ],
          glossary: [
            { term: 'DPA', definition: 'Data Processing Agreement, a contract between a Data Fiduciary and a Data Processor.' },
            { term: 'Sub-processor', definition: 'A third-party vendor hired by your vendor to process data.' },
          ],
          references: [
            { title: 'DPDPA Section 8(2)', source: 'Government of India', year: '2023' },
          ],
        },
      ],
    },
  ],

  // ===== MODULE ASSIGNMENTS =====
  assignments: [
    {
      id: 1,
      title: 'Draft a Privacy Policy',
      description:
        'Draft a Privacy Policy for a hypothetical mobile app that tracks fitness data (steps, heart rate) and shares it with a research partner.',
      deliverables: [
        'Privacy Policy document',
        'Notice of data sharing with research partners',
        'A clear explanation of how users can withdraw consent.',
      ],
    },
  ],

  // ===== MODULE QUIZ =====
  quiz: {
    questions: [
      {
        question: 'Privacy policy must include:',
        options: ['Data collection', 'Data use', 'Data rights', 'All of the above'],
        correct: 3,
        explanation: 'A privacy policy must include details on data collection, use, sharing, retention, security, and rights.',
      },
      {
        question: 'What is a DPA?',
        options: ['Data Protection Act', 'Data Processing Agreement', 'Data Privacy Audit', 'Digital Personal Assistant'],
        correct: 1,
        explanation: 'A DPA is a Data Processing Agreement, a contract required between a Data Fiduciary and a Data Processor.',
      },
      {
        question: 'Do you need consent for strictly necessary cookies?',
        options: ['Yes', 'No', 'Only in India', 'Only for children'],
        correct: 1,
        explanation: 'Strictly necessary cookies are essential for the website to function and do not require consent.',
      },
      {
        question: 'Who must sign a DPA?',
        options: ['Only the vendor', 'Only the company', 'Both company and vendor', 'The Data Protection Board'],
        correct: 2,
        explanation: 'A DPA is a bilateral contract, requiring signature from both the Data Fiduciary and the Data Processor.',
      },
    ],
    passingScore: 80,
  },
};
