// data/modules/module20.ts

import { Module } from '@/app/types/course';

export const module20: Module = {
  id: 20,
  title: 'Master Capstone Project',
  description:
    'Build a complete DPDPA compliance program from scratch. This capstone project brings together everything you have learned. You will act as a Data Protection Officer (DPO) for a hypothetical company and create a data inventory, assess risks, draft policies, and design an incident response plan.',
  duration: '20 Hours',
  icon: 'Award',
  learningObjectives: [
    'Apply all DPDPA concepts to a real-world business scenario',
    'Create a comprehensive Data Inventory and Data Flow Map',
    'Assess privacy risks and create a mitigation strategy',
    'Draft a compliant Privacy Policy and Consent Notice',
    'Design an Incident Response and Breach Notification plan',
    'Build a roadmap for achieving full compliance',
  ],
  chapters: [
    // ============================================================
    // CHAPTER 1: CAPSTONE PROJECT
    // ============================================================
    {
      id: 1,
      title: 'Capstone Project',
      lessons: [
        {
          id: 1,
          title: 'Project Overview',
          duration: '15 min',
          type: 'video',
          description: 'The scenario for your final project.',
          content:
            'To complete this course, you must design a compliance program for "HealthTech Innovations Pvt. Ltd.", a fictional telemedicine startup.',
          learningObjectives: [
            'Understand the scope of the capstone project',
            'Analyze the business model of the hypothetical company',
          ],
          keyTakeaways: [
            'The project requires applying all 19 previous modules.',
            'It is a practical, hands-on exercise.',
            'You will create a portfolio-ready compliance program.',
          ],
          sections: [
            {
              id: 'sec-1',
              title: 'The Scenario: HealthTech Innovations',
              content: [
                {
                  type: 'paragraph',
                  content:
                    'HealthTech Innovations is a growing telemedicine app. Users can consult doctors, upload medical reports, and order medicines. The app is used across India.',
                },
                {
                  type: 'list',
                  content: 'Company Profile',
                  items: [
                    'Business Model: B2C (Telemedicine), B2B (Corporate health packages).',
                    'Data Collected: Name, Phone, Medical History, Prescriptions, Location, Payment Data.',
                    'Data Sharing: Third-party labs, pharmacies, cloud provider (AWS), and marketing partners.',
                    'Current State: They have a basic privacy policy copied from a US website. They have no DPO.',
                  ],
                },
                {
                  type: 'callout',
                  content:
                    'Your role is to act as the newly appointed DPO and bring this company into full compliance with the DPDPA.',
                  calloutType: 'important',
                },
              ],
            },
          ],
          glossary: [
            { term: 'Telemedicine', definition: 'The remote diagnosis and treatment of patients by means of telecommunications technology.' },
            { term: 'B2C', definition: 'Business to Consumer, a business model where a company sells directly to individual consumers.' },
          ],
          references: [
            { title: 'DPDPA Master Course', source: 'Legal Galaxy', year: '2024' },
          ],
        },
        {
          id: 2,
          title: 'Data Inventory',
          duration: '20 min',
          type: 'reading',
          description: 'Your first task: mapping the data.',
          content:
            'Before drafting policies, you must create a data inventory for the company.',
          learningObjectives: [
            'Create a data inventory register',
            'Classify data based on sensitivity',
          ],
          keyTakeaways: [
            'You must identify all data touchpoints.',
            'You must classify health data as "Restricted".',
            'You must identify the legal basis (consent vs legitimate use) for each data flow.',
          ],
          sections: [
            {
              id: 'sec-1',
              title: 'Your Task',
              content: [
                {
                  type: 'paragraph',
                  content:
                    'Create a spreadsheet with the following columns and fill it out for at least 5 data flows (e.g., App Registration, Doctor Consultation, Payment, Marketing, Analytics).',
                },
                {
                  type: 'list',
                  content: 'Data Inventory Columns',
                  items: [
                    'Data Element (e.g., Phone Number)',
                    'Data Subject (e.g., Patient)',
                    'Source (e.g., App Form)',
                    'Purpose (e.g., OTP Verification)',
                    'Storage Location (e.g., AWS Mumbai)',
                    'Legal Basis (e.g., Consent)',
                    'Classification (Public, Internal, Confidential, Restricted)',
                  ],
                },
              ],
            },
          ],
          glossary: [
            { term: 'Data Touchpoint', definition: 'Any point where personal data is collected, processed, or accessed by an organization.' },
          ],
          references: [
            { title: 'DPDPA Section 8', source: 'Government of India', year: '2023' },
          ],
        },
        {
          id: 3,
          title: 'Compliance Plan',
          duration: '25 min',
          type: 'video',
          description: 'Your final deliverable: the compliance roadmap.',
          content:
            'This is the final step. You must create a 90-day roadmap to fix the company\'s compliance gaps.',
          learningObjectives: [
            'Develop a phased compliance roadmap',
            'Prioritize high-risk issues',
          ],
          keyTakeaways: [
            'Phase 1 (0-30 days) must focus on fixing immediate risks (Privacy Policy, Consent).',
            'Phase 2 (30-60 days) should include vendor contracts and training.',
            'Phase 3 (60-90 days) should focus on audits and ongoing monitoring.',
          ],
          sections: [
            {
              id: 'sec-1',
              title: 'The 90-Day Roadmap',
              content: [
                {
                  type: 'paragraph',
                  content:
                    'A compliance program cannot be built overnight. Prioritize the highest-risk gaps first.',
                },
                {
                  type: 'list',
                  content: 'Compliance Roadmap',
                  items: [
                    'Phase 1 (Immediate): Rewrite the Privacy Policy, implement a valid consent banner, and appoint a Grievance Officer.',
                    'Phase 2 (Short-term): Draft Data Processing Agreements (DPAs) for labs and pharmacies, implement encryption at rest, and start employee training.',
                    'Phase 3 (Long-term): Conduct a third-party audit, implement a consent dashboard, and build an incident response drill.',
                  ],
                },
                {
                  type: 'callout',
                  content:
                    'Congratulations! You have completed the course. Use this capstone project to demonstrate your skills to employers or clients.',
                  calloutType: 'tip',
                },
              ],
            },
          ],
          glossary: [
            { term: 'Compliance Roadmap', definition: 'A strategic plan outlining the steps and timeline for achieving regulatory compliance.' },
          ],
          references: [
            { title: 'Privacy Program Management', source: 'IAPP', year: '2022' },
          ],
        },
      ],
    },
  ],

  // ===== MODULE ASSIGNMENTS =====
  assignments: [
    {
      id: 1,
      title: 'Final Capstone Submission',
      description:
        'Submit your complete compliance program for HealthTech Innovations. This should include the data inventory, risk assessment, drafted privacy policy, and the 90-day roadmap.',
      deliverables: [
        'Data Inventory (Spreadsheet or Table)',
        'Privacy Policy Draft (1-2 pages)',
        '90-Day Compliance Roadmap (1 page)',
      ],
    },
  ],

  // ===== MODULE QUIZ =====
  quiz: {
    questions: [
      {
        question: 'A compliance program must include:',
        options: ['Data inventory', 'Risk assessment', 'Policies', 'All of the above'],
        correct: 3,
        explanation: 'A complete compliance program requires a data inventory, risk assessment, policies, and a roadmap.',
      },
      {
        question: 'What is the first step in a compliance program?',
        options: ['Hire a DPO', 'Create a data inventory', 'Write a privacy policy', 'Run a training program'],
        correct: 1,
        explanation: 'You cannot protect data you do not know you have. A data inventory is the foundational first step.',
      },
      {
        question: 'In the 90-day roadmap, what should be done in Phase 1?',
        options: ['External audits', 'Fix immediate high-risk gaps like Privacy Policy', 'Employee training', 'Vendor contracts'],
        correct: 1,
        explanation: 'Phase 1 should focus on urgent, high-risk gaps like drafting a compliant privacy policy and consent mechanisms.',
      },
      {
        question: 'Why is a roadmap important?',
        options: ['To spend money', 'To prioritize and track compliance progress', 'To confuse regulators', 'To delay work'],
        correct: 1,
        explanation: 'A roadmap helps organizations prioritize risks and track their progress toward full compliance.',
      },
    ],
    passingScore: 80,
  },

  // ===== MODULE PROJECT =====
  project: {
    title: 'Final Capstone Submission',
    description:
      'Submit your complete compliance program for HealthTech Innovations. This should include the data inventory, risk assessment, drafted privacy policy, and the 90-day roadmap.',
    deliverables: [
      'Data Inventory (Spreadsheet or Table)',
      'Privacy Policy Draft (1-2 pages)',
      '90-Day Compliance Roadmap (1 page)',
    ],
  },
};
