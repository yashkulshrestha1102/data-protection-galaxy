// data/modules/module14.ts

import { Module } from '@/app/types/course';

export const module14: Module = {
  id: 14,
  title: 'Privacy Operations',
  description:
    'Learn the operational aspects of data protection compliance. This module covers how to manage vendors, draft internal policies, conduct employee training, and build a sustainable privacy program that operates smoothly on a day-to-day basis.',
  duration: '8 Hours',
  icon: 'BarChart',
  learningObjectives: [
    'Understand the role of a Privacy Operations team',
    'Learn how to conduct vendor assessments and due diligence',
    'Draft effective internal privacy policies',
    'Design impactful employee training and awareness programs',
    'Build a framework for continuous compliance monitoring',
  ],
  chapters: [
    // ============================================================
    // CHAPTER 1: COMPLIANCE MONITORING
    // ============================================================
    {
      id: 1,
      title: 'Compliance Monitoring',
      lessons: [
        {
          id: 1,
          title: 'Vendor Assessment',
          duration: '15 min',
          type: 'video',
          description: 'How to ensure third parties are compliant.',
          content:
            'The Data Fiduciary is responsible for the acts of its Data Processors. Therefore, assessing vendors before onboarding them is a critical operational task.',
          learningObjectives: [
            'Understand the vendor onboarding process',
            'Learn what security and privacy questions to ask',
          ],
          keyTakeaways: [
            'Never onboard a vendor without a privacy assessment.',
            'Request security certifications (ISO 27001, SOC 2).',
            'Review the vendor\'s privacy policy and sub-processor list.',
          ],
          sections: [
            {
              id: 'sec-1',
              title: 'The Vendor Assessment Questionnaire',
              content: [
                {
                  type: 'paragraph',
                  content:
                    'Before you give a vendor access to personal data, you must assess them. A standard vendor assessment questionnaire covers:',
                },
                {
                  type: 'list',
                  content: 'Key Vendor Questions',
                  items: [
                    'What personal data will the vendor access?',
                    'Where will the data be stored?',
                    'What security measures (encryption, access controls) are in place?',
                    'Who has access to the data within the vendor organization?',
                    'Does the vendor use sub-processors?',
                    'How does the vendor handle data breaches?',
                  ],
                },
                {
                  type: 'callout',
                  content:
                    'If a vendor cannot answer these basic questions or refuses to provide evidence, it is a red flag. Do not share data with them.',
                  calloutType: 'warning',
                },
              ],
            },
          ],
          glossary: [
            { term: 'Vendor Assessment', definition: 'The process of evaluating a third-party\'s security and privacy practices before engaging them.' },
            { term: 'ISO 27001', definition: 'An international standard for information security management systems.' },
          ],
          references: [
            { title: 'DPDPA Section 8(2)', source: 'Government of India', year: '2023' },
          ],
        },
        {
          id: 2,
          title: 'Internal Policies',
          duration: '20 min',
          type: 'reading',
          description: 'You need internal rules to govern employee behaviour.',
          content:
            'A privacy policy on your website is for customers. You also need internal policies to tell employees how to handle data.',
          learningObjectives: [
            'Learn the essential internal privacy policies',
            'Understand the implementation of policies',
          ],
          keyTakeaways: [
            'You need an internal Information Security Policy.',
            'You need a Data Retention and Deletion Policy.',
            'You need an Acceptable Use Policy for company devices.',
          ],
          sections: [
            {
              id: 'sec-1',
              title: 'Essential Policies',
              content: [
                {
                  type: 'paragraph',
                  content:
                    'To comply with the DPDPA, you need a set of internal documents that guide employee behavior:',
                },
                {
                  type: 'list',
                  content: 'Internal Policies to Draft',
                  items: [
                    'Data Protection Policy: The overarching policy outlining the company\'s commitment to privacy.',
                    'Access Control Policy: Who can access what data and how access is granted/revoked.',
                    'Data Retention & Deletion Policy: How long data is kept and how it is securely destroyed.',
                    'Incident Response Policy: What to do if a breach happens.',
                    'Remote Work Policy: Rules for handling data on personal devices (BYOD).',
                  ],
                },
              ],
            },
          ],
          glossary: [
            { term: 'Internal Policy', definition: 'A set of rules and guidelines created by an organization to govern its internal operations.' },
            { term: 'BYOD', definition: 'Bring Your Own Device, a policy allowing employees to use personal devices for work.' },
          ],
          references: [
            { title: 'Privacy Program Management', source: 'IAPP', year: '2022' },
          ],
        },
        {
          id: 3,
          title: 'Training & Awareness',
          duration: '15 min',
          type: 'video',
          description: 'Your employees are your first line of defense.',
          content:
            'Technology alone cannot protect data. Employee awareness is essential to prevent phishing, accidental leaks, and misuse of data.',
          learningObjectives: [
            'Understand the importance of ongoing training',
            'Learn how to design an effective training program',
          ],
          keyTakeaways: [
            'Training should be mandatory and periodic.',
            'It must cover the DPDPA obligations and internal policies.',
            'Use real-world examples and phishing simulations.',
          ],
          sections: [
            {
              id: 'sec-1',
              title: 'The Human Firewall',
              content: [
                {
                  type: 'paragraph',
                  content:
                    'Most data breaches involve a human element—someone clicked a phishing link, sent an email to the wrong person, or left a laptop unlocked. Regular training is the only way to reduce human error.',
                },
                {
                  type: 'paragraph',
                  content:
                    'Training should not be a boring compliance box-ticking exercise. It should be engaging, relevant to their role (e.g., HR vs. Marketing), and include simulations.',
                },
              ],
            },
            {
              id: 'sec-2',
              title: 'What to Train',
              content: [
                {
                  type: 'list',
                  content: 'Training Modules',
                  items: [
                    'Basics of DPDPA and Data Privacy',
                    'Recognizing Phishing and Social Engineering',
                    'Handling Data Subject Requests (DSARs)',
                    'Incident Reporting Procedures',
                    'Secure Passwords and MFA',
                  ],
                },
              ],
            },
          ],
          glossary: [
            { term: 'Phishing', definition: 'A cybercrime in which a target is contacted by email, telephone, or text message by someone posing as a legitimate institution to lure them into providing sensitive data.' },
            { term: 'Security Awareness', definition: 'The knowledge and attitudes of employees regarding the protection of the organization\'s information assets.' },
          ],
          references: [
            { title: 'Verizon Data Breach Investigations Report', source: 'Verizon', year: '2023' },
          ],
        },
      ],
    },
  ],

  // ===== MODULE ASSIGNMENTS =====
  assignments: [
    {
      id: 1,
      title: 'Create a Vendor Questionnaire',
      description:
        'Draft a 10-question vendor assessment questionnaire to evaluate a new cloud service provider.',
      deliverables: [
        'Vendor assessment questionnaire (10 questions)',
        'Brief explanation of why each question is important.',
      ],
    },
  ],

  // ===== MODULE QUIZ =====
  quiz: {
    questions: [
      {
        question: 'Vendor assessment is:',
        options: ['Required', 'Recommended', 'Optional', 'Not needed'],
        correct: 0,
        explanation: 'Vendor assessment is a mandatory operational requirement under the DPDPA.',
      },
      {
        question: 'Why is employee training important?',
        options: ['To increase sales', 'To prevent human error and phishing', 'To reduce salaries', 'To increase profits'],
        correct: 1,
        explanation: 'Employees are a major target for cyberattacks, and training helps prevent breaches caused by human error.',
      },
      {
        question: 'Which of these is an internal policy?',
        options: ['Public Privacy Policy', 'Data Retention Policy', 'Marketing Brochure', 'Terms of Service'],
        correct: 1,
        explanation: 'A Data Retention Policy is an internal policy that governs how long data is kept and how it is deleted.',
      },
      {
        question: 'What is a BYOD policy?',
        options: ['Bring Your Own Data', 'Bring Your Own Device', 'Buy Your Own Database', 'Borrow Your Own Device'],
        correct: 1,
        explanation: 'BYOD stands for Bring Your Own Device, a policy allowing employees to use personal devices for work.',
      },
    ],
    passingScore: 80,
  },
};
