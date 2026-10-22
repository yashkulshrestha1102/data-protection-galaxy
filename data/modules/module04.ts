// data/modules/module04.ts

import { Module } from '@/app/types/course';

export const module04: Module = {
  id: 4,
  title: 'Complete DPDPA Act',
  description:
    'Read and understand every section of the DPDPA 2023 in detail. This module breaks down the 44 sections, key definitions, and the structural framework of India\'s new data protection law.',
  duration: '10 Hours',
  icon: 'FileText',
  learningObjectives: [
    'Understand the structure and chapters of the DPDPA 2023',
    'Grasp the critical definitions that determine the scope of the Act',
    'Learn the obligations of Data Fiduciaries and the rights of Data Principals',
    'Understand the penalties and the role of the Data Protection Board',
  ],
  chapters: [
    // ============================================================
    // CHAPTER 1: READING THE ACT
    // ============================================================
    {
      id: 1,
      title: 'Reading the Act',
      lessons: [
        {
          id: 1,
          title: 'Section-wise Explanation',
          duration: '30 min',
          type: 'video',
          description: 'A complete walkthrough of the structure of the DPDPA.',
          content:
            'The DPDPA 2023 has 44 sections divided into 8 chapters. This lesson provides a high-level map of the entire Act so you understand how it is organized.',
          learningObjectives: [
            'Memorize the 8 chapters of the DPDPA',
            'Understand what each chapter covers',
            'Navigate the Act efficiently during compliance work',
          ],
          keyTakeaways: [
            'Chapter I deals with definitions.',
            'Chapter II is the core of the Act—obligations and rights.',
            'Chapter V establishes penalties.',
          ],
          sections: [
            {
              id: 'sec-1',
              title: 'The 8 Chapters',
              content: [
                {
                  type: 'paragraph',
                  content:
                    'The DPDPA is a concise law. It has 44 sections and a Schedule for penalties. Here is how the chapters are organized:',
                },
                {
                  type: 'table',
                  headers: ['Chapter', 'Sections', 'Focus Area'],
                  rows: [
                    ['I', '1-3', 'Preliminary (Definitions)'],
                    ['II', '4-15', 'Obligations of Data Fiduciary & Rights of Data Principal'],
                    ['III', '16', 'Cross-Border Transfer of Data'],
                    ['IV', '17', 'Exemptions (State functions, research, etc.)'],
                    ['V', '18-26', 'Data Protection Board of India'],
                    ['VI', '27-34', 'Powers, Functions, and Procedure of the Board'],
                    ['VII', '35-38', 'Alternate dispute resolution and appeals'],
                    ['VIII', '39-44', 'Miscellaneous (Penalties, rule-making power)'],
                  ],
                },
                {
                  type: 'callout',
                  content:
                    'Chapter II (Sections 4-15) is the most important part for businesses. It contains all the compliance requirements.',
                  calloutType: 'important',
                },
              ],
            },
          ],
          glossary: [
            { term: 'Schedule', definition: 'A section at the end of the Act that lists the specific penalties for different violations.' },
          ],
          references: [
            { title: 'Digital Personal Data Protection Act 2023', source: 'Government of India', year: '2023' },
          ],
        },
        {
          id: 2,
          title: 'Every Clause Explained',
          duration: '25 min',
          type: 'reading',
          description: 'Understanding how to read the legal clauses in the Act.',
          content:
            'Legal language can be dense. This lesson teaches you how to read a clause in the DPDPA, breaking it down into subject, action, and condition.',
          learningObjectives: [
            'Learn to parse legal clauses',
            'Understand the use of "shall" vs "may" in the Act',
            'Identify exceptions and provisos',
          ],
          keyTakeaways: [
            '"Shall" means mandatory. "May" means discretionary.',
            'Provisos usually contain exceptions to the main rule.',
            'Clauses must be read in the context of the entire section.',
          ],
          sections: [
            {
              id: 'sec-1',
              title: 'The Anatomy of a Clause',
              content: [
                {
                  type: 'paragraph',
                  content:
                    'Take Section 8(1): "A Data Fiduciary shall, in respect of any processing of personal data, be responsible for compliance with the provisions of this Act."',
                },
                {
                  type: 'list',
                  content: 'Breaking it down',
                  items: [
                    'Subject: Data Fiduciary',
                    'Action: be responsible for compliance',
                    'Scope: in respect of any processing of personal data',
                    'Mandatory nature: "shall"',
                  ],
                },
              ],
            },
            {
              id: 'sec-2',
              title: 'The Provisos',
              content: [
                {
                  type: 'paragraph',
                  content:
                    'Many sections end with a "Provided that..." sentence. This is a proviso. It acts as a safety valve or an exception. For example, Section 6(4) says consent can be withdrawn, "provided that" the withdrawal doesn\'t affect the legality of prior processing.',
                },
              ],
            },
          ],
          glossary: [
            { term: 'Proviso', definition: 'A condition or exception attached to a legal section.' },
          ],
          references: [
            { title: 'Legal Drafting in India', source: 'ILI Law Review', year: '2021' },
          ],
        },
        {
          id: 3,
          title: 'Illustrations & Examples',
          duration: '20 min',
          type: 'video',
          description: 'Using examples to understand the Act.',
          content:
            'The Act includes illustrations to clarify the intent of the legislature. We also provide our own practical examples.',
          learningObjectives: [
            'Understand the purpose of illustrations in the Act',
            'Apply the Act to real-world scenarios',
          ],
          keyTakeaways: [
            'Illustrations are part of the Act and help interpret it.',
            'The DPDPA applies to both online and offline data that is digitized.',
          ],
          sections: [
            {
              id: 'sec-1',
              title: 'The Digitization Clause',
              content: [
                {
                  type: 'paragraph',
                  content:
                    'The DPDPA applies to "digital personal data". However, there is a famous example in the Act: if you collect paper forms and then scan them into a computer, that is now digital personal data and the DPDPA applies.',
                },
                {
                  type: 'example',
                  content:
                    'A hospital collects patient forms on paper. If they store them in a physical file cabinet, the DPDPA does not apply. But if they scan those forms and save them on their server, the DPDPA applies to that data.',
                },
              ],
            },
          ],
          glossary: [
            { term: 'Digital Personal Data', definition: 'Personal data in digital form, or non-digital data that is subsequently digitized.' },
          ],
          references: [
            { title: 'Digital Personal Data Protection Act 2023', source: 'Government of India', year: '2023' },
          ],
        },
        {
          id: 4,
          title: 'Understanding Exceptions',
          duration: '15 min',
          type: 'reading',
          description: 'What is excluded from the Act?',
          content:
            'Not all data is covered by the DPDPA. Section 3 excludes certain types of data, and Section 17 provides exemptions for the State.',
          learningObjectives: [
            'Understand the exclusions in Section 3',
            'Analyze the State exemptions in Section 17',
          ],
          keyTakeaways: [
            'Data made publicly available by the individual is not covered.',
            'Data processed for national security or crime investigation is exempt.',
            'Research and statistical data may be exempt.',
          ],
          sections: [
            {
              id: 'sec-1',
              title: 'Section 3 Exclusions',
              content: [
                {
                  type: 'paragraph',
                  content:
                    'The Act does not apply to personal data that is made publicly available by the Data Principal themselves, or by someone under a legal obligation to make it public.',
                },
                {
                  type: 'paragraph',
                  content:
                    'It also does not apply to non-personal data (data that cannot identify an individual).',
                },
              ],
            },
            {
              id: 'sec-2',
              title: 'Section 17 Exemptions',
              content: [
                {
                  type: 'paragraph',
                  content:
                    'The State (government) is exempt from certain provisions when processing data for:',
                },
                {
                  type: 'list',
                  content: 'State Exemptions',
                  items: [
                    'Prevention, investigation, or prosecution of offences.',
                    'National security and public order.',
                    'Research, archiving, or statistical purposes (with safeguards).',
                    'Large-scale processing for a government subsidy or benefit.',
                  ],
                },
              ],
            },
          ],
          glossary: [
            { term: 'State Exemption', definition: 'Provisions that exempt government agencies from complying with the Act under specific circumstances.' },
          ],
          references: [
            { title: 'DPDPA Section 17', source: 'Government of India', year: '2023' },
          ],
        },
      ],
    },

    // ============================================================
    // CHAPTER 2: KEY DEFINITIONS
    // ============================================================
    {
      id: 2,
      title: 'Key Definitions',
      lessons: [
        {
          id: 5,
          title: 'Digital Personal Data',
          duration: '15 min',
          type: 'video',
          description: 'What exactly is data under the Act?',
          content:
            'Section 2(t) defines "personal data" as any data about an individual who is identifiable by or in relation to such data.',
          learningObjectives: [
            'Define personal data',
            'Understand what makes data "identifiable"',
            'Differentiate between personal and non-personal data',
          ],
          keyTakeaways: [
            'If you can identify a person from the data, it is personal data.',
            'Pseudonymized data may still be personal data.',
            'Data that cannot identify anyone is excluded.',
          ],
          sections: [
            {
              id: 'sec-1',
              title: 'The Definition',
              content: [
                {
                  type: 'paragraph',
                  content:
                    'The DPDPA applies to "digital personal data". This means any data about an individual who is identifiable. This includes obvious things like names and addresses, but also indirect identifiers like IP addresses, cookies, and location data.',
                },
              ],
            },
            {
              id: 'sec-2',
              title: 'Identifiability',
              content: [
                {
                  type: 'paragraph',
                  content:
                    'What if the data is scrambled? If it\'s encrypted or pseudonymized but there is a key to unlock it, it is still personal data. Only completely anonymized data (where re-identification is impossible) is excluded.',
                },
                {
                  type: 'example',
                  content:
                    'A dataset with just "User 1234" and their purchase history is still personal data if the company holds a mapping table that links User 1234 to John Doe.',
                },
              ],
            },
          ],
          glossary: [
            { term: 'Identifiable', definition: 'Able to be identified or recognized from the data, either directly or indirectly.' },
            { term: 'Pseudonymization', definition: 'Replacing identifying information with a pseudonym, but maintaining a link (key) to the original data.' },
          ],
          references: [
            { title: 'DPDPA Section 2(t)', source: 'Government of India', year: '2023' },
          ],
        },
        {
          id: 6,
          title: 'Processing',
          duration: '10 min',
          type: 'reading',
          description: 'What actions count as processing?',
          content:
            'Section 2(x) defines processing. It is incredibly broad and covers the entire lifecycle of data.',
          learningObjectives: [
            'Understand the broad scope of processing',
            'Identify processing activities in your organization',
          ],
          keyTakeaways: [
            'Processing includes collection, storage, use, and deletion.',
            'Even simply viewing data counts as processing.',
          ],
          sections: [
            {
              id: 'sec-1',
              title: 'The Definition',
              content: [
                {
                  type: 'paragraph',
                  content:
                    'Processing means any operation on personal data, including collection, recording, organization, structuring, storage, adaptation, retrieval, use, disclosure, and erasure.',
                },
                {
                  type: 'paragraph',
                  content:
                    'Basically, if you touch the data, you are processing it.',
                },
              ],
            },
          ],
          glossary: [
            { term: 'Processing', definition: 'Any operation or set of operations performed on personal data.' },
          ],
          references: [
            { title: 'DPDPA Section 2(x)', source: 'Government of India', year: '2023' },
          ],
        },
        {
          id: 7,
          title: 'Consent',
          duration: '15 min',
          type: 'video',
          description: 'The golden rule for processing data.',
          content:
            'Section 6 requires that consent must be free, specific, informed, unconditional, and unambiguous.',
          learningObjectives: [
            'Memorize the 5 requirements of valid consent',
            'Understand what "free" and "unconditional" mean in practice',
          ],
          keyTakeaways: [
            'Silence or pre-ticked boxes is not consent.',
            'You cannot force consent by bundling it with a service.',
            'Consent must have a clear affirmative action.',
          ],
          sections: [
            {
              id: 'sec-1',
              title: 'The 5 Requirements',
              content: [
                {
                  type: 'list',
                  content: 'Valid Consent',
                  items: [
                    'Free: No coercion.',
                    'Specific: For a particular purpose only.',
                    'Informed: Based on a clear notice.',
                    'Unconditional: You cannot say "give me consent or I won\'t sell you this product" unless the data is absolutely necessary for the product.',
                    'Unambiguous: Clear "yes" action.',
                  ],
                },
                {
                  type: 'callout',
                  content:
                    'The "Unconditional" requirement is tricky. For example, a magazine cannot ask for your consent to track your location just to sell you a subscription. That is conditional consent and is invalid.',
                  calloutType: 'important',
                },
              ],
            },
          ],
          glossary: [
            { term: 'Unconditional Consent', definition: 'Consent that is not tied to the provision of a service, unless the data is necessary for that service.' },
          ],
          references: [
            { title: 'DPDPA Section 6', source: 'Government of India', year: '2023' },
          ],
        },
        {
          id: 8,
          title: 'Notice',
          duration: '10 min',
          type: 'reading',
          description: 'The duty to inform before taking data.',
          content:
            'Section 5 requires providing a notice before seeking consent. The notice must be clear and in multiple languages if necessary.',
          learningObjectives: [
            'Understand the contents of a valid notice',
            'Understand the language requirements',
          ],
          keyTakeaways: [
            'The notice must be given before data is collected.',
            'It must list the data collected and the purpose.',
            'It must explain how to withdraw consent.',
          ],
          sections: [
            {
              id: 'sec-1',
              title: 'The Content of a Notice',
              content: [
                {
                  type: 'paragraph',
                  content:
                    'A notice must contain:',
                },
                {
                  type: 'list',
                  content: 'Notice Contents',
                  items: [
                    'The personal data being sought.',
                    'The specific purpose of processing.',
                    'The manner in which the Data Principal can exercise their rights.',
                    'The manner in which the Data Principal can complain to the Data Protection Board.',
                  ],
                },
                {
                  type: 'paragraph',
                  content:
                    'The notice must be available in English and the languages listed in the Eighth Schedule of the Constitution (like Hindi, Marathi, Tamil, etc.) if the business serves those populations.',
                },
              ],
            },
          ],
          glossary: [
            { term: 'Eighth Schedule', definition: 'The list of 22 official languages in the Indian Constitution.' },
          ],
          references: [
            { title: 'DPDPA Section 5', source: 'Government of India', year: '2023' },
          ],
        },
        {
          id: 9,
          title: 'Data Fiduciary',
          duration: '15 min',
          type: 'video',
          description: 'Who is responsible for the data?',
          content:
            'A Data Fiduciary is the entity that decides the purpose and means of processing data. They bear the primary legal burden under the Act.',
          learningObjectives: [
            'Define Data Fiduciary',
            'Understand the difference between a Fiduciary and a Processor',
          ],
          keyTakeaways: [
            'The Data Fiduciary is the decision-maker.',
            'If you control the "why" and "how" of data, you are a Fiduciary.',
            'The Act does not use the term "Data Controller" like the GDPR.',
          ],
          sections: [
            {
              id: 'sec-1',
              title: 'The Definition',
              content: [
                {
                  type: 'paragraph',
                  content:
                    'Section 2(i) defines a Data Fiduciary as any person who alone or jointly with others determines the purpose and means of processing personal data.',
                },
                {
                  type: 'example',
                  content:
                    'If a hospital uses a third-party software to store patient records, the hospital is the Data Fiduciary (they decide who gets treated and what data is collected). The software company is a Data Processor.',
                },
              ],
            },
          ],
          glossary: [
            { term: 'Data Fiduciary', definition: 'An entity that determines the purpose and means of processing personal data.' },
            { term: 'Data Controller', definition: 'The GDPR term for a Data Fiduciary.' },
          ],
          references: [
            { title: 'DPDPA Section 2(i)', source: 'Government of India', year: '2023' },
          ],
        },
        {
          id: 10,
          title: 'Processor',
          duration: '10 min',
          type: 'reading',
          description: 'The role of third-party service providers.',
          content:
            'A Data Processor processes data on behalf of a Data Fiduciary. They do not make the rules, they just follow them.',
          learningObjectives: [
            'Define Data Processor',
            'Understand the contractual relationship required',
          ],
          keyTakeaways: [
            'Processors act on the instructions of the Fiduciary.',
            'The Fiduciary is liable for the acts of the Processor.',
            'A valid contract is mandatory between them.',
          ],
          sections: [
            {
              id: 'sec-1',
              title: 'The Definition',
              content: [
                {
                  type: 'paragraph',
                  content:
                    'Section 2(k) defines a Data Processor as any person who processes personal data on behalf of a Data Fiduciary.',
                },
                {
                  type: 'paragraph',
                  content:
                    'Under Section 8(2), a Data Fiduciary can only engage a Processor under a valid contract. The Fiduciary remains responsible for the Processor\'s compliance.',
                },
              ],
            },
          ],
          glossary: [
            { term: 'Data Processor', definition: 'An entity that processes personal data on behalf of a Data Fiduciary.' },
          ],
          references: [
            { title: 'DPDPA Section 2(k)', source: 'Government of India', year: '2023' },
          ],
        },
        {
          id: 11,
          title: 'Child & Guardian',
          duration: '15 min',
          type: 'video',
          description: 'Special protections for minors.',
          content:
            'The Act defines a child as anyone under 18. Processing children\'s data requires verifiable parental consent and strict safeguards.',
          learningObjectives: [
            'Define a child under the DPDPA',
            'Understand verifiable parental consent',
            'Understand behavioral tracking bans for children',
          ],
          keyTakeaways: [
            'A child is under 18 years old.',
            'Verifiable consent from a parent/guardian is mandatory.',
            'Targeted advertising to children is banned.',
          ],
          sections: [
            {
              id: 'sec-1',
              title: 'Age of Consent',
              content: [
                {
                  type: 'paragraph',
                  content:
                    'Section 9 defines a child as an individual who has not completed eighteen years of age. The Data Fiduciary must obtain verifiable consent from the parent or lawful guardian.',
                },
                {
                  type: 'paragraph',
                  content:
                    'Furthermore, Section 9(3) prohibits tracking, behavioral monitoring, or targeted advertising directed at children. This is one of the strictest provisions in the Act.',
                },
              ],
            },
          ],
          glossary: [
            { term: 'Verifiable Consent', definition: 'Consent obtained through reliable mechanisms (like DigiLocker or a credit card check) to prove the person is an adult or a parent.' },
          ],
          references: [
            { title: 'DPDPA Section 9', source: 'Government of India', year: '2023' },
          ],
        },
        {
          id: 12,
          title: 'Consent Manager',
          duration: '10 min',
          type: 'reading',
          description: 'The new "consent dashboard" concept in the Act.',
          content:
            'A Consent Manager is a registered entity that acts as a single point of contact for individuals to manage their consent across multiple apps.',
          learningObjectives: [
            'Define a Consent Manager',
            'Understand their role in the ecosystem',
          ],
          keyTakeaways: [
            'Consent Managers are registered with the Board.',
            'They must be independent and accountable to the Data Principal.',
            'They act like a "consent dashboard" for the user.',
          ],
          sections: [
            {
              id: 'sec-1',
              title: 'The Concept',
              content: [
                {
                  type: 'paragraph',
                  content:
                    'Section 6(7) introduces Consent Managers. Imagine an app where you can see and withdraw your consent for all the services you use—Facebook, Google, your bank—in one place. That is a Consent Manager.',
                },
                {
                  type: 'paragraph',
                  content:
                    'They must ensure their systems are interoperable, secure, and do not misrepresent information.',
                },
              ],
            },
          ],
          glossary: [
            { term: 'Consent Manager', definition: 'An entity registered with the Data Protection Board that allows Data Principals to manage their consent across multiple Data Fiduciaries.' },
          ],
          references: [
            { title: 'DPDPA Section 6(7)', source: 'Government of India', year: '2023' },
          ],
        },
        {
          id: 13,
          title: 'Significant Data Fiduciary',
          duration: '15 min',
          type: 'video',
          description: 'The "big tech" classification with higher obligations.',
          content:
            'The government can classify a Data Fiduciary as a Significant Data Fiduciary (SDF) based on the volume and sensitivity of data processed. SDFs have extra duties like appointing a DPO in India.',
          learningObjectives: [
            'Understand what makes an SDF',
            'Learn the enhanced obligations of SDFs',
          ],
          keyTakeaways: [
            'SDFs are notified by the government.',
            'They must appoint a DPO based in India.',
            'They must undergo periodic data audits.',
          ],
          sections: [
            {
              id: 'sec-1',
              title: 'The Criteria',
              content: [
                {
                  type: 'paragraph',
                  content:
                    'Section 10 allows the government to notify an SDF based on:',
                },
                {
                  type: 'list',
                  content: 'SDF Factors',
                  items: [
                    'Volume and sensitivity of data processed.',
                    'Risk to Data Principals.',
                    'Potential impact on sovereignty and integrity of India.',
                    'Risk to electoral democracy.',
                    'Security of the State.',
                    'Public order.',
                  ],
                },
                {
                  type: 'paragraph',
                  content:
                    'Once notified, an SDF must appoint a Data Protection Officer (DPO) who resides in India, appoint an independent data auditor, and conduct Data Protection Impact Assessments (DPIAs).',
                },
              ],
            },
          ],
          glossary: [
            { term: 'SDF', definition: 'Significant Data Fiduciary, an entity designated by the government with enhanced compliance obligations.' },
            { term: 'DPO', definition: 'Data Protection Officer, an officer responsible for compliance with the DPDPA.' },
          ],
          references: [
            { title: 'DPDPA Section 10', source: 'Government of India', year: '2023' },
          ],
        },
      ],
    },
  ],

  // ===== MODULE ASSIGNMENTS =====
  assignments: [
    {
      id: 1,
      title: 'Summarize the Entire Act',
      description:
        'Create a 2-page summary of the DPDPA 2023. Do not copy-paste. Write it in your own words, focusing on what a business owner needs to know.',
      deliverables: [
        'Section-wise summary',
        'Key obligations table',
        'List of penalties',
      ],
    },
  ],

  // ===== MODULE QUIZ =====
  quiz: {
    questions: [
      {
        question: 'How many sections are there in the DPDPA 2023?',
        options: ['30', '32', '44', '99'],
        correct: 2,
        explanation: 'The DPDPA 2023 has 44 sections, divided into 8 chapters.',
      },
      {
        question: 'Who is a Data Fiduciary?',
        options: ['Person processing data', 'Person determining purpose', 'Person storing data', 'Person transferring data'],
        correct: 1,
        explanation: 'A Data Fiduciary is the entity that determines the purpose and means of processing personal data.',
      },
      {
        question: 'Consent must be:',
        options: ['Free, specific, informed', 'Free, general, informed', 'Specific, general, informed', 'Free, specific, general'],
        correct: 0,
        explanation: 'Under Section 6, consent must be free, specific, informed, unconditional, and unambiguous.',
      },
      {
        question: 'Children are defined as individuals under:',
        options: ['18 years', '16 years', '14 years', '12 years'],
        correct: 0,
        explanation: 'Section 2(f) defines a child as an individual who has not completed 18 years of age.',
      },
      {
        question: 'What is the role of a Consent Manager?',
        options: ['Store consent', 'Manage consent', 'Delete consent', 'Process consent'],
        correct: 1,
        explanation: 'A Consent Manager acts as a single point of contact for Data Principals to give, manage, review, and withdraw consent.',
      },
    ],
    passingScore: 80,
  },
};