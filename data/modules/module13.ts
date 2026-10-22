// data/modules/module13.ts

import { Module } from '@/app/types/course';

export const module13: Module = {
  id: 13,
  title: 'Data Governance',
  description:
    'Learn how to establish robust data governance frameworks. This module covers the essential first step of compliance—creating a Data Inventory, mapping data flows, managing metadata, and classifying data based on sensitivity to apply the right controls.',
  duration: '8 Hours',
  icon: 'Database',
  learningObjectives: [
    'Understand the importance of Data Governance in DPDPA compliance',
    'Learn how to conduct a Data Mapping exercise',
    'Understand the role of Metadata in data management',
    'Implement a Data Classification framework (Public, Internal, Confidential, Restricted)',
    'Design a Data Inventory register',
  ],
  chapters: [
    // ============================================================
    // CHAPTER 1: DATA INVENTORY
    // ============================================================
    {
      id: 1,
      title: 'Data Inventory',
      lessons: [
        {
          id: 1,
          title: 'Data Mapping',
          duration: '20 min',
          type: 'video',
          description: 'You cannot protect what you do not know you have.',
          content:
            'Data mapping is the process of tracing how personal data flows through an organization. It is the foundation of DPDPA compliance.',
          learningObjectives: [
            'Understand what data mapping is and why it is critical',
            'Learn the key elements of a data map',
            'Identify where personal data is stored in your organization',
          ],
          keyTakeaways: [
            'Data mapping reveals what data you have, where it comes from, and where it goes.',
            'It helps identify redundant data and insecure data flows.',
            'It is impossible to comply with rights requests (like erasure) without a data map.',
          ],
          sections: [
            {
              id: 'sec-1',
              title: 'The Blind Spot',
              content: [
                {
                  type: 'paragraph',
                  content:
                    'Most companies have no idea where all their data is. It is spread across CRMs, spreadsheets, email inboxes, marketing tools, and employee laptops. If a user asks you to delete their data, how do you find it all?',
                },
                {
                  type: 'paragraph',
                  content:
                    'Data mapping answers this question. It is the process of creating a visual and written record of the data lifecycle.',
                },
              ],
            },
            {
              id: 'sec-2',
              title: 'What a Data Map Contains',
              content: [
                {
                  type: 'list',
                  content: 'Key Elements of a Data Map',
                  items: [
                    'Data Source: Where did this data come from? (e.g., website form, mobile app, third-party vendor)',
                    'Data Storage: Where is it stored? (e.g., AWS database, Salesforce, local server)',
                    'Data Flow: How does it move? (e.g., API calls, manual CSV uploads)',
                    'Data Access: Who has access to it? (e.g., Marketing team, HR, external vendor)',
                    'Processing Purpose: Why do we have it? (e.g., Billing, Marketing, Analytics)',
                  ],
                },
                {
                  type: 'callout',
                  content:
                    'A good data map is a living document. It must be updated whenever a new software tool is adopted or a new process is launched.',
                  calloutType: 'important',
                },
              ],
            },
          ],
          glossary: [
            { term: 'Data Mapping', definition: 'The process of matching data fields from one source to another, or tracing the lifecycle of data through an organization.' },
            { term: 'CRM', definition: 'Customer Relationship Management, software used to manage customer interactions and data.' },
          ],
          references: [
            { title: 'DPDPA Compliance Guide', source: 'Legal Galaxy', year: '2024' },
          ],
        },
        {
          id: 2,
          title: 'Metadata Management',
          duration: '15 min',
          type: 'reading',
          description: 'Data about data.',
          content:
            'Metadata helps you understand the context, quality, and lineage of your data.',
          learningObjectives: [
            'Understand the concept of metadata',
            'Learn how metadata aids compliance',
          ],
          keyTakeaways: [
            'Metadata is "data about data."',
            'It includes creation dates, author, format, and retention periods.',
            'Strong metadata management improves data searchability and compliance.',
          ],
          sections: [
            {
              id: 'sec-1',
              title: 'What is Metadata?',
              content: [
                {
                  type: 'paragraph',
                  content:
                    'If a document is data, the metadata is the file properties: who created it, when it was created, when it was last modified, and what tags are associated with it.',
                },
                {
                  type: 'paragraph',
                  content:
                    'In the context of DPDPA, metadata is crucial. For example, if you have a database of customer complaints, the metadata might include the "date of consent" or "retention expiry date." This helps you automate deletion when the retention period ends.',
                },
              ],
            },
          ],
          glossary: [
            { term: 'Metadata', definition: 'Data that provides information about other data.' },
            { term: 'Data Lineage', definition: 'The lifecycle of data, tracking its origin, movement, and transformation over time.' },
          ],
          references: [
            { title: 'Data Governance Framework', source: 'DAMA International', year: '2017' },
          ],
        },
        {
          id: 3,
          title: 'Data Classification',
          duration: '20 min',
          type: 'video',
          description: 'Not all data is equal. Classifying data based on sensitivity.',
          content:
            'Data classification is the process of categorizing data based on its sensitivity so that you can apply appropriate security controls.',
          learningObjectives: [
            'Understand the four levels of data classification',
            'Learn how to apply controls based on classification',
          ],
          keyTakeaways: [
            'Not all data needs the same level of protection.',
            'Classifying data helps optimize security spending.',
            'Highly sensitive data (like health or financial data) requires the strongest controls.',
          ],
          sections: [
            {
              id: 'sec-1',
              title: 'The Classification Levels',
              content: [
                {
                  type: 'paragraph',
                  content:
                    'Most organizations use a four-tier classification model:',
                },
                {
                  type: 'list',
                  content: 'Data Classification Tiers',
                  items: [
                    'Public: Data intended for public consumption (e.g., marketing brochures, public policies).',
                    'Internal: Data meant for internal use only (e.g., internal memos, org charts).',
                    'Confidential: Sensitive business data (e.g., financial reports, contracts).',
                    'Restricted (Personal Data): Highly sensitive personal data (e.g., health records, biometric data, financial data).',
                  ],
                },
                {
                  type: 'paragraph',
                  content:
                    'Under the DPDPA, "Restricted" data requires the highest level of security, including encryption, strict access controls, and detailed logging.',
                },
              ],
            },
            {
              id: 'sec-2',
              title: 'Applying Controls',
              content: [
                {
                  type: 'paragraph',
                  content:
                    'Once data is classified, you can apply controls. For example, "Public" data might not need encryption at rest, while "Restricted" data must be encrypted both at rest and in transit, and access should be limited to a need-to-know basis.',
                },
              ],
            },
          ],
          glossary: [
            { term: 'Data Classification', definition: 'The process of organizing data into categories based on its sensitivity and the level of protection it requires.' },
          ],
          references: [
            { title: 'ISO/IEC 27001', source: 'ISO', year: '2022' },
          ],
        },
      ],
    },
  ],

  // ===== MODULE ASSIGNMENTS =====
  assignments: [
    {
      id: 1,
      title: 'Create a Data Inventory',
      description:
        'Create a basic data inventory for a hypothetical e-commerce company. Identify at least 5 data flows and classify them.',
      deliverables: [
        'Data inventory spreadsheet (columns: Data Type, Source, Storage, Purpose, Classification)',
        'A brief explanation of why you classified specific data as Restricted.',
      ],
    },
  ],

  // ===== MODULE QUIZ =====
  quiz: {
    questions: [
      {
        question: 'Data mapping helps:',
        options: ['Understand data flows', 'Store data', 'Delete data', 'Share data'],
        correct: 0,
        explanation: 'Data mapping is the process of tracing data flows to understand where data comes from and where it goes.',
      },
      {
        question: 'What is Metadata?',
        options: ['A type of database', 'Data about data', 'A privacy policy', 'A security control'],
        correct: 1,
        explanation: 'Metadata is "data about data," providing context and information about other data.',
      },
      {
        question: 'Which classification level requires the highest security controls?',
        options: ['Public', 'Internal', 'Confidential', 'Restricted'],
        correct: 3,
        explanation: 'Restricted data (Personal Data) requires the highest level of security controls.',
      },
      {
        question: 'Why is data classification important?',
        options: ['To delete data', 'To apply appropriate security controls', 'To share data', 'To sell data'],
        correct: 1,
        explanation: 'Data classification helps organizations apply the appropriate level of security controls based on the sensitivity of the data.',
      },
    ],
    passingScore: 80,
  },
};