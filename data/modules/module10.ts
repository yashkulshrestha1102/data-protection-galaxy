// data/modules/module10.ts

import { Module } from '@/app/types/course';

export const module10: Module = {
  id: 10,
  title: 'Penalties & Enforcement',
  description:
    'Understand the penalty framework and enforcement mechanisms under the DPDPA. This module breaks down the Schedule of penalties (fines up to ₹250 crore), how the Board calculates fines, the concept of director liability, and real-world enforcement scenarios.',
  duration: '5 Hours',
  icon: 'AlertTriangle',
  learningObjectives: [
    'Understand the complete Schedule of penalties under the DPDPA',
    'Analyze the factors the Board considers when calculating fines',
    'Learn how to mitigate penalties in case of a breach',
    'Understand the personal liability of directors and officers',
    'Compare DPDPA penalties with GDPR fines',
  ],
  chapters: [
    // ============================================================
    // CHAPTER 1: PENALTY FRAMEWORK
    // ============================================================
    {
      id: 1,
      title: 'Penalty Framework',
      lessons: [
        {
          id: 1,
          title: 'Penalty Matrix',
          duration: '20 min',
          type: 'video',
          description: 'The complete breakdown of fines under the DPDPA.',
          content:
            'The DPDPA Schedule lists specific penalties for specific violations. The highest penalty of ₹250 crore is reserved for the most serious data breaches.',
          learningObjectives: [
            'Memorize the key penalty amounts',
            'Identify which violations carry the highest fines',
            'Understand the tiered structure of penalties',
          ],
          keyTakeaways: [
            'Failure to protect data: Up to ₹250 crore.',
            'Failure to notify a breach: Up to ₹200 crore.',
            'Children\'s data violations: Up to ₹200 crore.',
            'General non-compliance: Up to ₹50 crore.',
          ],
          sections: [
            {
              id: 'sec-1',
              title: 'The Schedule',
              content: [
                {
                  type: 'paragraph',
                  content:
                    'The penalties under the DPDPA are not arbitrary; they are listed in the Schedule of the Act. The Board can impose these penalties after conducting an inquiry.',
                },
                {
                  type: 'table',
                  headers: ['Violation', 'Maximum Penalty'],
                  rows: [
                    ['Failure to take reasonable security safeguards', '₹250 Crore'],
                    ['Failure to notify a breach', '₹200 Crore'],
                    ['Processing children\'s data without verifiable consent', '₹200 Crore'],
                    ['SDF non-compliance (DPO, audits, etc.)', '₹150 Crore'],
                    ['Failure to comply with Board directions', '₹150 Crore'],
                    ['General non-compliance (notice, rights, etc.)', '₹50 Crore'],
                  ],
                },
                {
                  type: 'callout',
                  content:
                    'These are MAXIMUM penalties. The Board has the discretion to impose a lower amount based on the facts of the case.',
                  calloutType: 'important',
                },
              ],
            },
          ],
          glossary: [
            { term: 'Penalty Matrix', definition: 'A structured table that maps specific violations to their corresponding maximum penalties.' },
          ],
          references: [
            { title: 'DPDPA Schedule', source: 'Government of India', year: '2023' },
          ],
        },
        {
          id: 2,
          title: 'Fine Calculation',
          duration: '15 min',
          type: 'reading',
          description: 'How does the Board decide the exact fine amount?',
          content:
            'The Board does not automatically impose the maximum fine. It considers several factors to determine a proportionate penalty.',
          learningObjectives: [
            'Understand the factors considered for fine calculation',
            'Analyze the principle of proportionality',
          ],
          keyTakeaways: [
            'The Board looks at the nature and gravity of the breach.',
            'The number of affected Data Principals is a key factor.',
            'Corrective action taken by the company can reduce the fine.',
          ],
          sections: [
            {
              id: 'sec-1',
              title: 'Factors Considered',
              content: [
                {
                  type: 'paragraph',
                  content:
                    'Under Section 33, the Board must consider the following factors before imposing a penalty:',
                },
                {
                  type: 'list',
                  content: 'Penalty Factors',
                  items: [
                    'Nature, gravity, and duration of the breach.',
                    'The number of Data Principals affected.',
                    'Whether the breach was repetitive.',
                    'Whether the company took corrective action.',
                    'Whether the breach was foreseeable.',
                    'Whether the company gained financially from the breach.',
                  ],
                },
              ],
            },
            {
              id: 'sec-2',
              title: 'Proportionality',
              content: [
                {
                  type: 'paragraph',
                  content:
                    'The penalty must be proportionate. If a small startup accidentally exposes 100 records due to a minor bug and fixes it immediately, the fine will be minimal. But if a large bank ignores known vulnerabilities and exposes 10 million records, the fine will be massive.',
                },
              ],
            },
          ],
          glossary: [
            { term: 'Proportionality', definition: 'The principle that a penalty should be proportionate to the seriousness of the violation.' },
          ],
          references: [
            { title: 'DPDPA Section 33', source: 'Government of India', year: '2023' },
          ],
        },
        {
          id: 3,
          title: 'Grounds for Penalty',
          duration: '20 min',
          type: 'video',
          description: 'The specific violations that trigger a penalty.',
          content:
            'From failing to give notice to ignoring the Data Protection Board, many actions can trigger a penalty.',
          learningObjectives: [
            'Identify the specific grounds for penalties',
            'Analyze the broad scope of "general non-compliance"',
          ],
          keyTakeaways: [
            'Any breach of the Act is a ground for penalty.',
            'Failure to comply with Board orders is a separate offence.',
            'Unlawful processing (without consent or legitimate use) is a violation.',
          ],
          sections: [
            {
              id: 'sec-1',
              title: 'The Grounds',
              content: [
                {
                  type: 'paragraph',
                  content:
                    'The Board can initiate proceedings for:',
                },
                {
                  type: 'list',
                  content: 'Grounds for Penalty',
                  items: [
                    'Breach of the terms and conditions of the Act.',
                    'Failure to comply with a direction issued by the Board.',
                    'Processing personal data in a manner that violates the Act.',
                    'Failure to fulfill the obligations of a Data Fiduciary.',
                  ],
                },
              ],
            },
          ],
          glossary: [
            { term: 'Unlawful Processing', definition: 'Processing personal data without a valid legal basis, such as consent or a legitimate use.' },
          ],
          references: [
            { title: 'DPDPA Section 33', source: 'Government of India', year: '2023' },
          ],
        },
        {
          id: 4,
          title: 'Mitigation',
          duration: '15 min',
          type: 'reading',
          description: 'How to reduce a penalty if a breach occurs.',
          content:
            'If you have a breach, you are not doomed. The DPDPA allows for mitigation if you took the right steps.',
          learningObjectives: [
            'Understand what actions mitigate a penalty',
            'Build a mitigation strategy',
          ],
          keyTakeaways: [
            'Self-reporting a breach helps.',
            'Taking immediate remedial action helps.',
            'Cooperating with the Board helps.',
          ],
          sections: [
            {
              id: 'sec-1',
              title: 'The Mitigation Strategy',
              content: [
                {
                  type: 'paragraph',
                  content:
                    'If a breach occurs, the worst thing you can do is hide it. The Board will penalize you severely for covering it up. Here is what you should do:',
                },
                {
                  type: 'list',
                  content: 'Mitigation Steps',
                  items: [
                    'Immediately contain the breach.',
                    'Notify the Board and affected users without undue delay.',
                    'Conduct a thorough investigation.',
                    'Cooperate fully with the Board.',
                    'Implement corrective measures to prevent recurrence.',
                  ],
                },
                {
                  type: 'callout',
                  content:
                    'Prompt self-reporting and cooperation can significantly reduce the penalty amount.',
                  calloutType: 'tip',
                },
              ],
            },
          ],
          glossary: [
            { term: 'Mitigation', definition: 'Actions taken to reduce the severity or impact of a penalty or breach.' },
          ],
          references: [
            { title: 'DPDPA Section 33', source: 'Government of India', year: '2023' },
          ],
        },
      ],
    },

    // ============================================================
    // CHAPTER 2: ENFORCEMENT
    // ============================================================
    {
      id: 2,
      title: 'Enforcement',
      lessons: [
        {
          id: 5,
          title: 'Enforcement Process',
          duration: '20 min',
          type: 'video',
          description: 'How the Board investigates and enforces the law.',
          content:
            'The enforcement process follows a clear path: complaint or reference, inquiry, and order.',
          learningObjectives: [
            'Understand the step-by-step enforcement process',
            'Learn your rights during an investigation',
          ],
          keyTakeaways: [
            'The process starts with a complaint or a breach notification.',
            'The Board issues a notice to the company.',
            'The company has a right to be heard.',
          ],
          sections: [
            {
              id: 'sec-1',
              title: 'The Investigation',
              content: [
                {
                  type: 'paragraph',
                  content:
                    'When a breach is reported or a complaint is filed, the Board may initiate an inquiry. It will issue a notice to the Data Fiduciary, requesting information and evidence.',
                },
                {
                  type: 'paragraph',
                  content:
                    'The company must respond to the notice. The Board may summon witnesses and examine documents. After hearing both sides, the Board issues a reasoned order.',
                },
              ],
            },
          ],
          glossary: [
            { term: 'Reasoned Order', definition: 'A judicial or administrative decision that includes the reasons and rationale behind the decision.' },
          ],
          references: [
            { title: 'DPDPA Section 27', source: 'Government of India', year: '2023' },
          ],
        },
        {
          id: 6,
          title: 'Case Studies',
          duration: '25 min',
          type: 'reading',
          description: 'Real-world examples of how penalties are applied.',
          content:
            'Looking at real-world enforcement cases helps understand how the Board applies the law.',
          learningObjectives: [
            'Analyze hypothetical enforcement scenarios',
            'Understand how penalties are applied in practice',
          ],
          keyTakeaways: [
            'Intent matters. Deliberate violations attract higher fines.',
            'Negligence (lack of safeguards) attracts high fines.',
            'Cooperation can lower the fine.',
          ],
          sections: [
            {
              id: 'sec-1',
              title: 'Scenario 1: The Negligent Fintech',
              content: [
                {
                  type: 'paragraph',
                  content:
                    'A fintech company stores customer PAN numbers in plain text. A hacker breaches the database and exposes 100,000 records. The company had ignored warnings about its security.',
                },
                {
                  type: 'paragraph',
                  content:
                    'Likely Outcome: Penalty of up to ₹250 crore for failure to take reasonable security safeguards. The fact that the company ignored warnings will likely increase the penalty.',
                },
              ],
            },
            {
              id: 'sec-2',
              title: 'Scenario 2: The Responsive E-commerce App',
              content: [
                {
                  type: 'paragraph',
                  content:
                    'An e-commerce app suffers a breach due to a zero-day vulnerability in a third-party library. The app\'s security team detects it within 2 hours, patches it, and notifies the Board and users within 24 hours.',
                },
                {
                  type: 'paragraph',
                  content:
                    'Likely Outcome: While a breach occurred, the company demonstrated strong safeguards and prompt notification. The Board may impose a minimal penalty or no penalty, recognizing the company\'s diligence.',
                },
              ],
            },
            {
              id: 'sec-3',
              title: 'Scenario 3: The Ignored Grievance',
              content: [
                {
                  type: 'paragraph',
                  content:
                    'A user requests erasure of their data. The company ignores the request for 6 months. The user complains to the Board.',
                },
                {
                  type: 'paragraph',
                  content:
                    'Likely Outcome: Penalty under the "general non-compliance" category (up to ₹50 crore). The Board will likely order the company to erase the data immediately and pay compensation to the user.',
                },
              ],
            },
          ],
          glossary: [
            { term: 'Zero-day Vulnerability', definition: 'A software vulnerability that is unknown to the vendor and has no patch available.' },
          ],
          references: [
            { title: 'DPDPA Enforcement Trends', source: 'Legal Galaxy', year: '2024' },
          ],
        },
      ],
    },
  ],

  // ===== MODULE ASSIGNMENTS =====
  assignments: [
    {
      id: 1,
      title: 'Penalty Analysis',
      description:
        'Analyze a hypothetical scenario and determine the applicable penalties under the DPDPA. Justify the amount based on the factors in Section 33.',
      deliverables: [
        'Scenario analysis',
        'Penalty calculation',
        'Mitigation recommendations',
      ],
    },
  ],

  // ===== MODULE QUIZ =====
  quiz: {
    questions: [
      {
        question: 'Maximum penalty for a data fiduciary for a data breach is:',
        options: ['₹50 crore', '₹100 crore', '₹250 crore', '₹500 crore'],
        correct: 2,
        explanation: 'The maximum penalty for failure to take reasonable security safeguards is ₹250 crore.',
      },
      {
        question: 'Penalty is determined by:',
        options: ['Board', 'Court', 'Government', 'Commissioner'],
        correct: 0,
        explanation: 'The Data Protection Board has the authority to determine and impose penalties.',
      },
      {
        question: 'Mitigation factors include:',
        options: ['Intent', 'Cooperation', 'First violation', 'All of the above'],
        correct: 3,
        explanation: 'The Board considers intent, cooperation, history of violations, and corrective actions.',
      },
      {
        question: 'Enforcement is done by:',
        options: ['Police', 'Board', 'Court', 'Government'],
        correct: 1,
        explanation: 'The Data Protection Board is the enforcement authority under the DPDPA.',
      },
      {
        question: 'Appeals against penalties can be made within:',
        options: ['30 days', '45 days', '60 days', '90 days'],
        correct: 2,
        explanation: 'Appeals to the TDSAT must be filed within 60 days of receiving the Board\'s order.',
      },
    ],
    passingScore: 80,
  },
};