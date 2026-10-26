// data/modules/module11.ts

import { Module } from '@/app/types/course';

export const module11: Module = {
  id: 11,
  title: 'Cross Border Data Transfer',
  description:
    'Understand the rules and requirements for cross-border data transfers under the DPDPA. This module explains Section 16, the government\'s power to create a "blacklist" of restricted countries, the concept of data localisation, and how India\'s approach differs from the GDPR.',
  duration: '5 Hours',
  icon: 'Globe',
  learningObjectives: [
    'Understand the legal framework for cross-border transfers under Section 16',
    'Analyze the "blacklist" approach vs the "adequacy" approach',
    'Understand the government\'s power to restrict data flows',
    'Learn about sectoral data localisation mandates (RBI, IRDAI, etc.)',
    'Compare DPDPA cross-border rules with GDPR',
  ],
  chapters: [
    // ============================================================
    // CHAPTER 1: TRANSFER RULES
    // ============================================================
    {
      id: 1,
      title: 'Transfer Rules',
      lessons: [
        {
          id: 1,
          title: 'Transfer to Restricted Countries',
          duration: '20 min',
          type: 'video',
          description: 'How Section 16 governs international data flows.',
          content:
            'Section 16 of the DPDPA gives the Central Government the power to restrict the transfer of personal data to specific countries. Unlike GDPR, which requires "adequacy," DPDPA allows transfers by default unless restricted.',
          learningObjectives: [
            'Understand the scope of Section 16',
            'Learn how the government restricts transfers',
            'Analyze the default position on data transfers',
          ],
          keyTakeaways: [
            'Transfers are allowed by default unless a country is on the restricted list.',
            'The government can impose conditions on transfers.',
            'The government can restrict transfers based on national security or public interest.',
          ],
          sections: [
            {
              id: 'sec-1',
              title: 'The "Blacklist" Approach',
              content: [
                {
                  type: 'paragraph',
                  content:
                    'The DPDPA takes a significantly different approach to data transfers than the European Union. Under the GDPR, you can only transfer data to a country if the EU Commission has declared that country "adequate" (meaning it has strong privacy laws). This is a "whitelist" approach.',
                },
                {
                  type: 'paragraph',
                  content:
                    'India has adopted a "blacklist" approach. Under Section 16, the Central Government can notify specific countries or territories to which data transfers are restricted. If a country is not on the restricted list, transfers are allowed.',
                },
                {
                  type: 'callout',
                  content:
                    'As of now, the government has not notified any restricted countries under Section 16. So, currently, data can flow freely out of India.',
                  calloutType: 'important',
                },
              ],
            },
            {
              id: 'sec-2',
              title: 'Conditions on Transfer',
              content: [
                {
                  type: 'paragraph',
                  content:
                    'The government is not just limited to banning countries. It can also impose conditions on transfers. For example, it could require companies to ensure that the receiving entity implements specific security safeguards before the data can be transferred.',
                },
              ],
            },
          ],
          glossary: [
            { term: 'Adequacy Decision', definition: 'A finding by a regulatory body that a foreign country provides an adequate level of data protection.' },
            { term: 'Blacklist', definition: 'A list of countries or entities that are subject to specific restrictions.' },
          ],
          references: [
            { title: 'DPDPA Section 16', source: 'Government of India', year: '2023' },
          ],
        },
        {
          id: 2,
          title: 'Cloud Storage',
          duration: '15 min',
          type: 'reading',
          description: 'Storing Indian data on foreign cloud servers.',
          content:
            'Most modern companies use cloud providers like AWS, Google Cloud, or Azure. The DPDPA does not ban cloud storage, but it imposes obligations.',
          learningObjectives: [
            'Understand how cloud storage interacts with the DPDPA',
            'Analyze the risks of foreign cloud servers',
          ],
          keyTakeaways: [
            'You can use foreign cloud servers unless the country is restricted.',
            'You remain liable for the data, even if it is stored abroad.',
            'You must ensure the cloud provider has adequate security.',
          ],
          sections: [
            {
              id: 'sec-1',
              title: 'The Cloud Reality',
              content: [
                {
                  type: 'paragraph',
                  content:
                    'If an Indian startup uses AWS US-East-1 to store customer data, that is a cross-border transfer. Under the DPDPA, this is permissible by default. However, the startup must ensure it has a valid Data Processing Agreement (DPA) with AWS and that the data is encrypted.',
                },
                {
                  type: 'callout',
                  content:
                    'Even if data is stored in the cloud, the Data Fiduciary remains fully responsible for it. If AWS suffers a breach, the Indian company will face the consequences under the DPDPA.',
                  calloutType: 'warning',
                },
              ],
            },
          ],
          glossary: [
            { term: 'Cloud Server', definition: 'A virtual server hosted by a cloud provider that can be located anywhere in the world.' },
            { term: 'AWS US-East-1', definition: 'One of the primary data centers of Amazon Web Services, located in Virginia, USA.' },
          ],
          references: [
            { title: 'DPDPA Section 16', source: 'Government of India', year: '2023' },
          ],
        },
        {
          id: 3,
          title: 'International Vendors',
          duration: '15 min',
          type: 'video',
          description: 'Managing third-party vendors that process data outside India.',
          content:
            'If you hire a customer support team in the Philippines or a development team in Eastern Europe, they are accessing Indian data from outside India.',
          learningObjectives: [
            'Understand the obligations for international vendors',
            'Learn how to structure contracts for foreign vendors',
          ],
          keyTakeaways: [
            'Foreign vendors are Data Processors.',
            'The Data Fiduciary is liable for the vendor\'s actions.',
            'Contracts must specify jurisdiction and compliance with DPDPA.',
          ],
          sections: [
            {
              id: 'sec-1',
              title: 'The Global Workforce',
              content: [
                {
                  type: 'paragraph',
                  content:
                    'Indian companies often use global outsourcing. When a foreign vendor accesses data, it constitutes a cross-border transfer. The DPDPA requires that the Data Fiduciary remain liable for the vendor\'s compliance.',
                },
                {
                  type: 'paragraph',
                  content:
                    'Contracts with foreign vendors must include a clause requiring the vendor to comply with the DPDPA, even if they are located in a foreign jurisdiction.',
                },
              ],
            },
          ],
          glossary: [
            { term: 'Outsourcing', definition: 'The practice of having certain job functions done outside a company instead of having an in-house department or employee handle them.' },
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
      title: 'Cross-Border Data Flow Audit',
      description:
        'Analyze your organization (or a hypothetical one) and identify all cross-border data flows. Create a report detailing which data goes where and what safeguards are in place.',
      deliverables: [
        'Data flow map',
        'List of foreign vendors',
        'Risk assessment for each transfer',
        'Recommendations for compliance',
      ],
    },
  ],

  // ===== MODULE QUIZ =====
  quiz: {
    questions: [
      {
        question: 'Cross-border transfer rules are under Section:',
        options: ['14', '15', '16', '17'],
        correct: 2,
        explanation: 'Section 16 of the DPDPA deals with cross-border transfers.',
      },
      {
        question: 'What approach does the DPDPA use for data transfers?',
        options: ['Whitelist (Adequacy)', 'Blacklist (Restricted Countries)', 'No Restrictions', 'Total Ban'],
        correct: 1,
        explanation: 'The DPDPA uses a blacklist approach, allowing transfers by default unless the destination is restricted.',
      },
      {
        question: 'Is data localisation mandatory under the DPDPA?',
        options: ['Yes, for all data', 'No, but sectoral laws may require it', 'Yes, for financial data only', 'No, never'],
        correct: 1,
        explanation: 'While the DPDPA does not mandate general localisation, sectoral laws (like RBI rules) may still require data to be stored in India.',
      },
    ],
    passingScore: 80,
  },
};
