// data/modules/module18.ts

import { Module } from '@/app/types/course';

export const module18: Module = {
  id: 18,
  title: 'Global Privacy Laws',
  description:
    'Compare the DPDPA with global privacy frameworks. This module provides a deep dive into the GDPR, CCPA/CPRA, Singapore PDPA, and China PIPL. Understand how different jurisdictions approach consent, data transfers, and penalties, and how to build a global compliance strategy.',
  duration: '8 Hours',
  icon: 'Globe',
  learningObjectives: [
    'Compare the DPDPA with the GDPR and identify key differences',
    'Understand the California Consumer Privacy Act (CCPA/CPRA)',
    'Analyze the Singapore PDPA and its business-friendly approach',
    'Understand China\'s strict Personal Information Protection Law (PIPL)',
    'Build a strategy for multi-jurisdictional compliance',
  ],
  chapters: [
    // ============================================================
    // CHAPTER 1: INTERNATIONAL FRAMEWORKS
    // ============================================================
    {
      id: 1,
      title: 'International Frameworks',
      lessons: [
        {
          id: 1,
          title: 'GDPR',
          duration: '20 min',
          type: 'video',
          description: 'The gold standard of privacy laws.',
          content:
            'The General Data Protection Regulation (GDPR) is the most comprehensive privacy law in the world. It set the benchmark for the DPDPA and other global laws.',
          learningObjectives: [
            'Understand the scope and principles of GDPR',
            'Compare GDPR terminology with DPDPA',
          ],
          keyTakeaways: [
            'GDPR applies to any company processing EU residents\' data, regardless of location.',
            'It has 6 lawful bases (including legitimate interests).',
            'Penalties can reach 4% of global turnover.',
          ],
          sections: [
            {
              id: 'sec-1',
              title: 'Key Features',
              content: [
                {
                  type: 'paragraph',
                  content:
                    'The GDPR is built on strict principles: lawfulness, fairness, transparency, purpose limitation, data minimization, accuracy, storage limitation, integrity, and accountability.',
                },
                {
                  type: 'paragraph',
                  content:
                    'Unlike the DPDPA, which uses a fixed penalty structure, GDPR fines are percentage-based. For a large company, a 4% fine can be billions of dollars.',
                },
              ],
            },
            {
              id: 'sec-2',
              title: 'Terminology Differences',
              content: [
                {
                  type: 'table',
                  headers: ['Concept', 'GDPR', 'DPDPA'],
                  rows: [
                    ['Individual', 'Data Subject', 'Data Principal'],
                    ['Company', 'Data Controller', 'Data Fiduciary'],
                    ['Vendor', 'Data Processor', 'Data Processor'],
                    ['Regulator', 'Supervisory Authority', 'Data Protection Board'],
                  ],
                },
              ],
            },
          ],
          glossary: [
            { term: 'GDPR', definition: 'General Data Protection Regulation, the EU\'s comprehensive data privacy law.' },
            { term: 'Data Controller', definition: 'The GDPR term for an entity that determines the purpose and means of processing.' },
          ],
          references: [
            { title: 'GDPR Full Text', source: 'European Union', year: '2016' },
          ],
        },
        {
          id: 2,
          title: 'CCPA',
          duration: '15 min',
          type: 'reading',
          description: 'California\'s consumer privacy law.',
          content:
            'The California Consumer Privacy Act (CCPA) and its amendment, the CPRA, give consumers in California strong rights over their data.',
          learningObjectives: [
            'Understand the scope of CCPA/CPRA',
            'Analyze the rights given to consumers',
          ],
          keyTakeaways: [
            'CCPA applies to for-profit businesses doing business in California.',
            'It gives consumers the right to know, delete, and opt-out of the sale of their data.',
            'It is less strict than GDPR but stricter than many other US laws.',
          ],
          sections: [
            {
              id: 'sec-1',
              title: 'The Opt-Out Right',
              content: [
                {
                  type: 'paragraph',
                  content:
                    'The most unique feature of CCPA is the right to opt-out of the "sale" or "sharing" of personal data. Businesses must provide a clear "Do Not Sell My Personal Information" link on their homepage.',
                },
                {
                  type: 'paragraph',
                  content:
                    'The DPDPA does not have a specific "opt-out of sale" right, but the right to withdraw consent effectively covers this.',
                },
              ],
            },
          ],
          glossary: [
            { term: 'CCPA', definition: 'California Consumer Privacy Act, a state-level privacy law in the US.' },
            { term: 'Sale of Data', definition: 'Disclosing personal data to a third party for monetary or other valuable consideration.' },
          ],
          references: [
            { title: 'CCPA Official Text', source: 'State of California', year: '2018' },
          ],
        },
        {
          id: 3,
          title: 'Singapore PDPA',
          duration: '20 min',
          type: 'video',
          description: 'A business-friendly privacy law in Asia.',
          content:
            'The Singapore Personal Data Protection Act (PDPA) is a balanced law that seeks to protect data while enabling business innovation.',
          learningObjectives: [
            'Understand the Singapore PDPA approach',
            'Analyze the "Deemed Consent" concept',
          ],
          keyTakeaways: [
            'Singapore PDPA has a "Deemed Consent" concept, allowing processing for certain business purposes.',
            'It has a Do Not Call (DNC) registry for telemarketing.',
            'It is less strict than GDPR but stricter than many Asian laws.',
          ],
          sections: [
            {
              id: 'sec-1',
              title: 'Deemed Consent',
              content: [
                {
                  type: 'paragraph',
                  content:
                    'The Singapore PDPA introduces "Deemed Consent." If a user voluntarily provides data for a purpose, they are deemed to consent to that purpose. This is different from the DPDPA, which requires explicit consent.',
                },
                {
                  type: 'callout',
                  content:
                    'The DPDPA does not have a broad "deemed consent" concept. India requires explicit consent for most processing.',
                  calloutType: 'important',
                },
              ],
            },
          ],
          glossary: [
            { term: 'PDPA', definition: 'Personal Data Protection Act, Singapore\'s data privacy law.' },
            { term: 'Deemed Consent', definition: 'Consent that is inferred from a person\'s actions or inaction.' },
          ],
          references: [
            { title: 'Singapore PDPA', source: 'PDPC', year: '2012' },
          ],
        },
        {
          id: 4,
          title: 'China PIPL',
          duration: '20 min',
          type: 'reading',
          description: 'China\'s strict approach to data protection.',
          content:
            'The Personal Information Protection Law (PIPL) is China\'s comprehensive data privacy law, heavily influenced by the GDPR but with a strong focus on national security.',
          learningObjectives: [
            'Understand the scope of PIPL',
            'Analyze the data localisation requirements',
          ],
          keyTakeaways: [
            'PIPL requires explicit consent for processing sensitive data.',
            'It has strict data localisation rules.',
            'Penalties can be up to 5% of previous year\'s turnover.',
          ],
          sections: [
            {
              id: 'sec-1',
              title: 'Strict Requirements',
              content: [
                {
                  type: 'paragraph',
                  content:
                    'PIPL is one of the strictest laws globally. It requires data localisation for "important data" and mandates security assessments for cross-border transfers.',
                },
                {
                  type: 'paragraph',
                  content:
                    'While the DPDPA allows cross-border transfers by default, PIPL requires a security assessment by the Cyberspace Administration of China (CAC) for most transfers.',
                },
              ],
            },
          ],
          glossary: [
            { term: 'PIPL', definition: 'Personal Information Protection Law, China\'s comprehensive data privacy law.' },
            { term: 'Important Data', definition: 'Data that, if tampered with or leaked, may directly affect national security, economic security, or public health.' },
          ],
          references: [
            { title: 'China PIPL', source: 'NPC', year: '2021' },
          ],
        },
        {
          id: 5,
          title: 'Multi-Jurisdictional Compliance',
          duration: '20 min',
          type: 'video',
          description: 'How to comply with multiple laws at once.',
          content:
            'If you operate globally, you must comply with the GDPR, DPDPA, CCPA, and other laws simultaneously.',
          learningObjectives: [
            'Build a global privacy program',
            'Identify the highest common denominator',
          ],
          keyTakeaways: [
            'GDPR and DPDPA are broadly similar; a good GDPR program is a good starting point for DPDPA.',
            'However, you must adapt to local rules (e.g., DPDPA\'s strict rules on children\'s data).',
            'A unified global privacy policy can work if it covers all requirements.',
          ],
          sections: [
            {
              id: 'sec-1',
              title: 'The Global Strategy',
              content: [
                {
                  type: 'paragraph',
                  content:
                    'Instead of building separate programs for each country, build one global program based on the strictest requirements (usually GDPR and PIPL), and then layer on specific local rules.',
                },
                {
                  type: 'list',
                  content: 'Steps for Global Compliance',
                  items: [
                    '1. Map data flows globally.',
                    '2. Identify the strictest applicable law for each data flow.',
                    '3. Build policies and consent mechanisms that meet the highest standard.',
                    '4. Train employees on global privacy principles, not just local laws.',
                    '5. Conduct regular global privacy audits.',
                  ],
                },
              ],
            },
          ],
          glossary: [
            { term: 'Multi-Jurisdictional', definition: 'Involving or operating in multiple legal jurisdictions or countries.' },
          ],
          references: [
            { title: 'Global Privacy Compliance', source: 'IAPP', year: '2023' },
          ],
        },
      ],
    },
  ],

  // ===== MODULE ASSIGNMENTS =====
  assignments: [
    {
      id: 1,
      title: 'Comparative Analysis',
      description:
        'Create a comparison table of GDPR, DPDPA, and CCPA covering scope, consent, data subject rights, and penalties.',
      deliverables: [
        'Comparison table',
        'Brief analysis of which law is strictest and why.',
      ],
    },
  ],

  // ===== MODULE QUIZ =====
  quiz: {
    questions: [
      {
        question: 'GDPR is from:',
        options: ['EU', 'US', 'India', 'Singapore'],
        correct: 0,
        explanation: 'GDPR is the General Data Protection Regulation of the European Union.',
      },
      {
        question: 'Which law uses "Deemed Consent"?',
        options: ['GDPR', 'DPDPA', 'Singapore PDPA', 'CCPA'],
        correct: 2,
        explanation: 'The Singapore PDPA has a concept of "Deemed Consent" for certain business purposes.',
      },
      {
        question: 'Which law is strictest on cross-border transfers?',
        options: ['DPDPA', 'GDPR', 'CCPA', 'China PIPL'],
        correct: 3,
        explanation: 'China\'s PIPL requires strict security assessments and data localisation for most cross-border transfers.',
      },
      {
        question: 'What is the maximum penalty under GDPR?',
        options: ['€10M or 2%', '€20M or 4%', '₹250 crore', '€50M or 5%'],
        correct: 1,
        explanation: 'The GDPR allows for fines up to €20 million or 4% of global annual turnover, whichever is higher.',
      },
    ],
    passingScore: 80,
  },
};