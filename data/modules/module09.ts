// data/modules/module09.ts

import { Module } from '@/app/types/course';

export const module09: Module = {
  id: 9,
  title: 'Data Protection Board',
  description:
    'Understand the structure, functions, and proceedings of the Data Protection Board. This module covers how the Board is constituted, its investigative powers, the adjudication process, and the appeal mechanism to the TDSAT.',
  duration: '5 Hours',
  icon: 'Scale',
  learningObjectives: [
    'Understand the composition and appointment of the Data Protection Board',
    'Analyze the powers of the Board to investigate and adjudicate',
    'Learn the step-by-step complaint process',
    'Understand the appeal mechanism to the TDSAT',
    'Differentiate between the Board and a regular civil court',
  ],
  chapters: [
    // ============================================================
    // CHAPTER 1: BOARD STRUCTURE
    // ============================================================
    {
      id: 1,
      title: 'Board Structure',
      lessons: [
        {
          id: 1,
          title: 'Composition',
          duration: '15 min',
          type: 'video',
          description: 'Who makes up the Data Protection Board?',
          content:
            'The Data Protection Board of India (DPB) is the regulatory authority established under Section 18 of the DPDPA. It consists of a Chairperson and other members appointed by the Central Government.',
          learningObjectives: [
            'Understand the composition of the Board',
            'Learn the qualifications required for the Chairperson',
          ],
          keyTakeaways: [
            'The Board is a quasi-judicial body.',
            'The Chairperson must have at least 10 years of experience in data protection, law, or technology.',
            'The Board is not bound by the strict procedures of a civil court but follows natural justice.',
          ],
          sections: [
            {
              id: 'sec-1',
              title: 'The Authority',
              content: [
                {
                  type: 'paragraph',
                  content:
                    'The DPDPA established the Data Protection Board of India (DPB) to enforce the Act. Unlike other regulators (like SEBI or RBI), the DPB is a digital-first regulator. It operates primarily online.',
                },
                {
                  type: 'paragraph',
                  content:
                    'The Board consists of a Chairperson and such number of other members as the Central Government may determine. The appointment is made by the Central Government.',
                },
              ],
            },
            {
              id: 'sec-2',
              title: 'Qualifications',
              content: [
                {
                  type: 'paragraph',
                  content:
                    'The Chairperson must have at least 10 years of experience in data protection, law, technology, or public administration. The members must have expertise in law, data protection, cyber security, or related fields.',
                },
              ],
            },
          ],
          glossary: [
            { term: 'Quasi-Judicial', definition: 'A body that has some of the powers of a court (like hearing evidence and passing orders) but is not part of the traditional judiciary.' },
          ],
          references: [
            { title: 'DPDPA Section 18', source: 'Government of India', year: '2023' },
          ],
        },
        {
          id: 2,
          title: 'Appointment',
          duration: '15 min',
          type: 'reading',
          description: 'How are Board members selected?',
          content:
            'The appointment process is designed to ensure the independence and expertise of the Board members.',
          learningObjectives: [
            'Understand the selection committee',
            'Analyze the independence of the Board',
          ],
          keyTakeaways: [
            'The Central Government appoints the members.',
            'There is a Selection Committee involved in the process.',
            'Members hold office for a fixed term (usually 3-5 years).',
          ],
          sections: [
            {
              id: 'sec-1',
              title: 'The Process',
              content: [
                {
                  type: 'paragraph',
                  content:
                    'The Central Government constitutes a Selection Committee to recommend names for the Chairperson and members. This process is designed to ensure that the Board remains independent of political interference.',
                },
              ],
            },
          ],
          glossary: [
            { term: 'Selection Committee', definition: 'A group of people appointed to evaluate and recommend candidates for a position.' },
          ],
          references: [
            { title: 'DPDPA Section 19', source: 'Government of India', year: '2023' },
          ],
        },
        {
          id: 3,
          title: 'Tenure',
          duration: '10 min',
          type: 'video',
          description: 'How long do members serve on the Board?',
          content:
            'Board members serve for a fixed tenure and are eligible for reappointment. They can be removed only for specific reasons like insolvency, misbehaviour, or conflict of interest.',
          learningObjectives: [
            'Understand the tenure and removal process',
          ],
          keyTakeaways: [
            'Members hold office for a term specified by the government.',
            'They cannot be removed arbitrarily.',
            'They must not have any financial conflicts of interest.',
          ],
          sections: [
            {
              id: 'sec-1',
              title: 'Term of Office',
              content: [
                {
                  type: 'paragraph',
                  content:
                    'The Chairperson and members hold office for a term of 3 to 5 years. The Central Government can remove a member if they become insolvent, are convicted of an offence, or fail to perform their duties.',
                },
              ],
            },
          ],
          glossary: [
            { term: 'Tenure', definition: 'The period of time for which a person holds a position or office.' },
          ],
          references: [
            { title: 'DPDPA Section 20', source: 'Government of India', year: '2023' },
          ],
        },
      ],
    },

    // ============================================================
    // CHAPTER 2: BOARD PROCEEDINGS
    // ============================================================
    {
      id: 2,
      title: 'Board Proceedings',
      lessons: [
        {
          id: 4,
          title: 'Complaint Process',
          duration: '20 min',
          type: 'video',
          description: 'How to file a complaint with the Data Protection Board.',
          content:
            'Any person can file a complaint with the Board. However, the Board has the power to reject frivolous complaints.',
          learningObjectives: [
            'Understand the steps to file a complaint',
            'Learn about the preliminary inquiry',
          ],
          keyTakeaways: [
            'You must first exhaust the Data Fiduciary\'s grievance mechanism.',
            'The Board can act on its own (suo motu).',
            'Frivolous complaints can lead to penalties under Section 15(b).',
          ],
          sections: [
            {
              id: 'sec-1',
              title: 'The Filing Process',
              content: [
                {
                  type: 'paragraph',
                  content:
                    'A complaint is typically filed online using the Board\'s portal. The complaint must contain details of the violation, the data fiduciary involved, and proof that the grievance was first raised with the Data Fiduciary.',
                },
                {
                  type: 'callout',
                  content:
                    'The Board is not a customer service center. It will not entertain complaints unless there is a prima facie violation of the DPDPA.',
                  calloutType: 'important',
                },
              ],
            },
            {
              id: 'sec-2',
              title: 'Suo Motu Action',
              content: [
                {
                  type: 'paragraph',
                  content:
                    'The Board can also initiate action on its own (suo motu) if it comes across a major data breach reported in the news or flagged by the government. This means companies cannot assume they are safe just because no user has complained.',
                },
              ],
            },
          ],
          glossary: [
            { term: 'Suo Motu', definition: 'An action taken by a court or authority on its own initiative, without a formal complaint from a party.' },
          ],
          references: [
            { title: 'DPDPA Section 27', source: 'Government of India', year: '2023' },
          ],
        },
        {
          id: 5,
          title: 'Orders',
          duration: '15 min',
          type: 'reading',
          description: 'What can the Board order a company to do?',
          content:
            'The Board has broad powers to issue directions and impose penalties.',
          learningObjectives: [
            'Understand the types of orders the Board can issue',
            'Analyze the distinction between remedial and penal orders',
          ],
          keyTakeaways: [
            'The Board can order a company to fix its processes.',
            'The Board can impose civil penalties up to ₹250 crore.',
            'The Board can order compensation to the affected user.',
          ],
          sections: [
            {
              id: 'sec-1',
              title: 'Types of Orders',
              content: [
                {
                  type: 'paragraph',
                  content:
                    'When the Board finds a violation, it can issue various orders:',
                },
                {
                  type: 'list',
                  content: 'Board Orders',
                  items: [
                    'Remedial Orders: Direct the Data Fiduciary to take specific actions (e.g., "delete the user\'s data immediately").',
                    'Penalty Orders: Impose a financial penalty as per the Schedule of the Act.',
                    'Compensation Orders: Direct the Data Fiduciary to pay compensation to the affected Data Principal.',
                  ],
                },
              ],
            },
          ],
          glossary: [
            { term: 'Remedial Order', definition: 'An order that requires a party to fix a problem or undo a harm.' },
          ],
          references: [
            { title: 'DPDPA Section 27', source: 'Government of India', year: '2023' },
          ],
        },
        {
          id: 6,
          title: 'Appeals',
          duration: '15 min',
          type: 'video',
          description: 'If you disagree with the Board, where do you go?',
          content:
            'Any person aggrieved by an order of the Data Protection Board can file an appeal with the Telecom Disputes Settlement and Appellate Tribunal (TDSAT).',
          learningObjectives: [
            'Understand the appeal mechanism',
            'Learn about the powers of the TDSAT',
          ],
          keyTakeaways: [
            'The appeal goes to the TDSAT, not directly to the Supreme Court.',
            'The appeal must be filed within 60 days.',
            'The TDSAT can set aside, modify, or confirm the Board\'s order.',
          ],
          sections: [
            {
              id: 'sec-1',
              title: 'The TDSAT',
              content: [
                {
                  type: 'paragraph',
                  content:
                    'Under Section 29, an appeal against an order of the Board lies to the TDSAT. This provides an independent layer of judicial review.',
                },
                {
                  type: 'paragraph',
                  content:
                    'The TDSAT has the power to hear the appeal, examine the records of the Board, and pass appropriate orders. It must try to dispose of the appeal within 6 months.',
                },
                {
                  type: 'callout',
                  content:
                    'Filing an appeal does not automatically stay the Board\'s order. The company must apply to the TDSAT for a stay, which may or may not be granted.',
                  calloutType: 'important',
                },
              ],
            },
          ],
          glossary: [
            { term: 'TDSAT', definition: 'Telecom Disputes Settlement and Appellate Tribunal, the appellate body for DPDPA orders.' },
            { term: 'Stay', definition: 'A temporary suspension of a legal order or proceeding.' },
          ],
          references: [
            { title: 'DPDPA Section 29', source: 'Government of India', year: '2023' },
          ],
        },
        {
          id: 7,
          title: 'Investigation',
          duration: '20 min',
          type: 'reading',
          description: 'How does the Board gather evidence?',
          content:
            'The Board has the powers of a civil court to summon witnesses, require documents, and receive evidence.',
          learningObjectives: [
            'Understand the investigative powers of the Board',
            'Learn the rights of the parties during an investigation',
          ],
          keyTakeaways: [
            'The Board can summon company executives.',
            'The Board can demand access to servers and databases.',
            'Non-compliance with an investigation is a separate offence.',
          ],
          sections: [
            {
              id: 'sec-1',
              title: 'Civil Court Powers',
              content: [
                {
                  type: 'paragraph',
                  content:
                    'Under Section 27(1), the Board has the same powers as a civil court under the Code of Civil Procedure, 1908, while trying a suit. This includes:',
                },
                {
                  type: 'list',
                  content: 'Investigation Powers',
                  items: [
                    'Summoning and enforcing the attendance of any person.',
                    'Requiring the discovery and production of documents.',
                    'Receiving evidence on affidavits.',
                    'Issuing commissions for the examination of witnesses or documents.',
                  ],
                },
              ],
            },
          ],
          glossary: [
            { term: 'Affidavit', definition: 'A written statement confirmed by oath or affirmation, used as evidence in court.' },
          ],
          references: [
            { title: 'DPDPA Section 27', source: 'Government of India', year: '2023' },
          ],
        },
        {
          id: 8,
          title: 'Enforcement',
          duration: '15 min',
          type: 'video',
          description: 'How does the Board ensure its orders are followed?',
          content:
            'The Board has strong enforcement powers. If a company refuses to pay a penalty, it can be recovered as arrears of land revenue.',
          learningObjectives: [
            'Understand the enforcement mechanisms',
            'Analyze the consequences of non-compliance',
          ],
          keyTakeaways: [
            'Penalties can be recovered like government taxes.',
            'Non-compliance with Board orders can lead to further penalties.',
            'The Board can direct the government to block access to a non-compliant platform.',
          ],
          sections: [
            {
              id: 'sec-1',
              title: 'Recovery of Penalties',
              content: [
                {
                  type: 'paragraph',
                  content:
                    'Under Section 30, any penalty imposed by the Board is recoverable as an arrear of land revenue. This means the government can seize assets or freeze bank accounts to recover the fine.',
                },
              ],
            },
            {
              id: 'sec-2',
              title: 'Blocking Orders',
              content: [
                {
                  type: 'paragraph',
                  content:
                    'In extreme cases, if a Data Fiduciary repeatedly violates the Act, the Board can recommend that the government block access to their services in India. This is a "death penalty" for digital businesses.',
                },
                {
                  type: 'callout',
                  content:
                    'The Board is not a paper tiger. It has real teeth to enforce compliance.',
                  calloutType: 'warning',
                },
              ],
            },
          ],
          glossary: [
            { term: 'Arrears of Land Revenue', definition: 'A legal mechanism used by the government to recover unpaid dues, allowing seizure of property.' },
          ],
          references: [
            { title: 'DPDPA Section 30', source: 'Government of India', year: '2023' },
          ],
        },
        {
          id: 9,
          title: 'Penalties',
          duration: '20 min',
          type: 'reading',
          description: 'The ultimate power of the Board—imposing massive fines.',
          content:
            'The Board can impose penalties up to ₹250 crore. This lesson explains the penalty schedule.',
          learningObjectives: [
            'Understand the penalty schedule',
            'Analyze the highest penalties',
          ],
          keyTakeaways: [
            'Failure to protect data: Up to ₹250 crore.',
            'Failure to notify a breach: Up to ₹200 crore.',
            'Children\'s data violations: Up to ₹200 crore.',
          ],
          sections: [
            {
              id: 'sec-1',
              title: 'The Schedule',
              content: [
                {
                  type: 'paragraph',
                  content:
                    'The Schedule to the Act lists the penalties. The highest penalty is reserved for a failure to take reasonable security safeguards, resulting in a data breach.',
                },
                {
                  type: 'list',
                  content: 'Highest Penalties',
                  items: [
                    'Failure to protect data: ₹250 Crore',
                    'Failure to notify a breach: ₹200 Crore',
                    'Children\'s data violations: ₹200 Crore',
                    'SDF non-compliance: ₹150 Crore',
                    'Failure to comply with Board directions: ₹150 Crore',
                  ],
                },
                {
                  type: 'paragraph',
                  content:
                    'The Board has the discretion to impose a lower penalty based on factors like intent, cooperation, and remedial action.',
                },
              ],
            },
          ],
          glossary: [
            { term: 'Schedule', definition: 'A section at the end of the Act that lists the specific penalties for different violations.' },
          ],
          references: [
            { title: 'DPDPA Schedule', source: 'Government of India', year: '2023' },
          ],
        },
      ],
    },
  ],

  // ===== MODULE ASSIGNMENTS =====
  assignments: [
    {
      id: 1,
      title: 'Case Study Analysis',
      description:
        'Analyze a hypothetical Board proceeding. Create a mock complaint, a mock defense, and a mock final order.',
      deliverables: [
        'Case summary',
        'Legal analysis',
        'Possible outcomes',
      ],
    },
  ],

  // ===== MODULE QUIZ =====
  quiz: {
    questions: [
      {
        question: 'The Data Protection Board is established under:',
        options: ['Section 8', 'Section 10', 'Section 18', 'Section 27'],
        correct: 2,
        explanation: 'Section 18 establishes the Data Protection Board of India.',
      },
      {
        question: 'Who appoints Board members?',
        options: ['President', 'Prime Minister', 'Central Government', 'State Government'],
        correct: 2,
        explanation: 'The Central Government appoints the Chairperson and members of the Board.',
      },
      {
        question: 'Appeals against Board orders go to:',
        options: ['Supreme Court', 'High Court', 'TDSAT', 'Central Government'],
        correct: 2,
        explanation: 'Under Section 29, appeals against Board orders go to the Telecom Disputes Settlement and Appellate Tribunal (TDSAT).',
      },
      {
        question: 'The Board can impose penalties up to:',
        options: ['₹100 crore', '₹200 crore', '₹250 crore', '₹500 crore'],
        correct: 2,
        explanation: 'The maximum penalty under the DPDPA is ₹250 crore.',
      },
      {
        question: 'Board members are appointed for:',
        options: ['2 years', '3-5 years', '10 years', 'Lifetime'],
        correct: 1,
        explanation: 'Board members usually serve a term of 3 to 5 years.',
      },
    ],
    passingScore: 80,
  },
};