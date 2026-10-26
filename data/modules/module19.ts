// data/modules/module19.ts

import { Module } from '@/app/types/course';

export const module19: Module = {
  id: 19,
  title: 'Industry Compliance',
  description:
    'Learn sector-specific compliance requirements. This module explores how the DPDPA applies to different industries like Healthcare, Financial Services (BFSI), E-Commerce, and EdTech. Understand the intersection of DPDPA with sectoral regulators like RBI, IRDAI, and SEBI.',
  duration: '10 Hours',
  icon: 'Building',
  learningObjectives: [
    'Understand how sectoral laws interact with the DPDPA',
    'Analyze the specific data protection requirements for Healthcare',
    'Learn about BFSI compliance (RBI, SEBI, IRDAI) and data localisation',
    'Understand the strict rules for EdTech companies regarding children\'s data',
    'Analyze e-commerce compliance for consumer data',
  ],
  chapters: [
    // ============================================================
    // CHAPTER 1: SECTOR REQUIREMENTS
    // ============================================================
    {
      id: 1,
      title: 'Sector Requirements',
      lessons: [
        {
          id: 1,
          title: 'Healthcare',
          duration: '15 min',
          type: 'video',
          description: 'Protecting sensitive medical data.',
          content:
            'Healthcare data is among the most sensitive categories of personal data. A breach can lead to discrimination, stigma, and physical harm.',
          learningObjectives: [
            'Understand the sensitivity of health data',
            'Analyze the intersection of DPDPA and health regulations',
          ],
          keyTakeaways: [
            'Health data requires the highest level of security.',
            'Consent must be explicit and informed.',
            'Hospitals must ensure data is not shared with unauthorized third parties.',
          ],
          sections: [
            {
              id: 'sec-1',
              title: 'The High-Risk Sector',
              content: [
                {
                  type: 'paragraph',
                  content:
                    'In the healthcare sector, Data Fiduciaries include hospitals, diagnostic labs, and health-tech apps. They process sensitive data like medical history, test results, and mental health records.',
                },
                {
                  type: 'paragraph',
                  content:
                    'Under the DPDPA, health data is not explicitly defined as "sensitive" like in GDPR, but the risk-based approach means the Board will expect higher security safeguards for medical data.',
                },
                {
                  type: 'callout',
                  content:
                    'A breach of health data will likely attract the maximum penalty under Section 8(5) for failure to take reasonable security safeguards.',
                  calloutType: 'warning',
                },
              ],
            },
          ],
          glossary: [
            { term: 'Health Data', definition: 'Personal data related to the physical or mental health of a person.' },
            { term: 'Telemedicine', definition: 'The remote diagnosis and treatment of patients by means of telecommunications technology.' },
          ],
          references: [
            { title: 'DPDPA Section 8(5)', source: 'Government of India', year: '2023' },
          ],
        },
        {
          id: 2,
          title: 'Banking',
          duration: '15 min',
          type: 'reading',
          description: 'Financial data and RBI regulations.',
          content:
            'Banks and financial institutions process vast amounts of financial data. The RBI has strict rules on data localisation and security.',
          learningObjectives: [
            'Understand RBI data localisation rules',
            'Analyze KYC and AML requirements',
          ],
          keyTakeaways: [
            'RBI mandates payment data to be stored in India.',
            'Banks must comply with both DPDPA and RBI guidelines.',
            'KYC data must be protected with high security.',
          ],
          sections: [
            {
              id: 'sec-1',
              title: 'Data Localisation',
              content: [
                {
                  type: 'paragraph',
                  content:
                    'The RBI mandates that all payment system data (like credit card details, UPI transactions) must be stored only in India. This is a sectoral localisation requirement that operates alongside the DPDPA.',
                },
                {
                  type: 'paragraph',
                  content:
                    'While the DPDPA allows cross-border transfers by default, the RBI rules restrict it. Banks and fintechs must comply with the stricter of the two.',
                },
              ],
            },
          ],
          glossary: [
            { term: 'KYC', definition: 'Know Your Customer, the process of verifying the identity of clients.' },
            { term: 'AML', definition: 'Anti-Money Laundering, laws and regulations designed to stop the generation of income from criminal activity.' },
          ],
          references: [
            { title: 'RBI Guidelines on Storage of Payment Data', source: 'RBI', year: '2018' },
          ],
        },
        {
          id: 3,
          title: 'E-Commerce',
          duration: '20 min',
          type: 'video',
          description: 'Consumer data and targeted advertising.',
          content:
            'E-commerce platforms collect massive amounts of behavioral data. They must balance personalization with privacy.',
          learningObjectives: [
            'Understand consumer data collection in e-commerce',
            'Analyze targeted advertising rules',
          ],
          keyTakeaways: [
            'Consent is required for marketing cookies.',
            'Consumer rights (access, erasure) must be easy to exercise.',
            'Platforms must ensure vendor compliance.',
          ],
          sections: [
            {
              id: 'sec-1',
              title: 'The E-Commerce Challenge',
              content: [
                {
                  type: 'paragraph',
                  content:
                    'E-commerce platforms track browsing history, purchase behavior, and location to recommend products. While this improves user experience, it requires massive data collection.',
                },
                {
                  type: 'paragraph',
                  content:
                    'Under the DPDPA, platforms must obtain clear consent for marketing and profiling. They must also provide a simple way for users to delete their accounts and data.',
                },
              ],
            },
          ],
          glossary: [
            { term: 'Behavioral Targeting', definition: 'A marketing technique that uses web browsing behavior, such as pages visited or searches made, to target advertisements.' },
          ],
          references: [
            { title: 'DPDPA Section 6', source: 'Government of India', year: '2023' },
          ],
        },
      ],
    },
  ],

  // ===== MODULE ASSIGNMENTS =====
  assignments: [
    {
      id: 1,
      title: 'Industry Specific Compliance Plan',
      description:
        'Choose a specific industry (Healthcare, Fintech, or EdTech) and create a 1-page compliance plan detailing the specific data protection risks and mitigation strategies.',
      deliverables: [
        'Industry profile',
        'Specific risks identified',
        'Mitigation plan',
        'Checklist for compliance',
      ],
    },
  ],

  // ===== MODULE QUIZ =====
  quiz: {
    questions: [
      {
        question: 'Healthcare compliance includes:',
        options: ['Patient data', 'Financial data', 'Marketing data', 'Location data'],
        correct: 0,
        explanation: 'Healthcare compliance focuses on protecting sensitive patient data.',
      },
      {
        question: 'Which regulator mandates payment data to be stored in India?',
        options: ['SEBI', 'IRDAI', 'RBI', 'TRAI'],
        correct: 2,
        explanation: 'The Reserve Bank of India (RBI) mandates localisation of payment system data.',
      },
      {
        question: 'Why is EdTech considered high-risk under DPDPA?',
        options: ['Because they process children\'s data', 'Because they use AI', 'Because they are online', 'Because they are startups'],
        correct: 0,
        explanation: 'EdTech platforms process children\'s data, which requires verifiable parental consent and strict safeguards.',
      },
      {
        question: 'What is KYC data?',
        options: ['Marketing data', 'Know Your Customer data', 'Website data', 'Health data'],
        correct: 1,
        explanation: 'KYC (Know Your Customer) data is collected by financial institutions to verify identity.',
      },
    ],
    passingScore: 80,
  },
};
