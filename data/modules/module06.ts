// data/modules/module06.ts

import { Module } from '@/app/types/course';

export const module06: Module = {
  id: 6,
  title: 'Rights & Duties of Data Principal',
  description:
    'Understand the rights of individuals and their duties under DPDPA. This module explains the six fundamental rights granted to Data Principals, how to exercise them, the grievance redressal mechanism, and the often-overlooked duties of citizens.',
  duration: '6 Hours',
  icon: 'Users',
  learningObjectives: [
    'Identify and explain the six core rights of a Data Principal',
    'Understand the step-by-step process to exercise these rights',
    'Analyze the grievance redressal mechanism under the Act',
    'Understand the duties and liabilities of a Data Principal',
    'Differentiate between rights available to adults vs. children',
  ],
  chapters: [
    // ============================================================
    // CHAPTER 1: DATA PRINCIPAL RIGHTS
    // ============================================================
    {
      id: 1,
      title: 'Data Principal Rights',
      lessons: [
        {
          id: 1,
          title: 'Right to Access',
          duration: '15 min',
          type: 'video',
          description: 'Knowing exactly what data a company holds about you.',
          content:
            'Under Section 11 of the DPDPA, you have the right to request a summary of your personal data being processed by a Data Fiduciary. This is the foundational right that enables all other rights.',
          learningObjectives: [
            'Understand the scope of the right to access',
            'Learn what information a Data Fiduciary must provide',
            'Understand the time limit for response',
          ],
          keyTakeaways: [
            'You can ask for a summary of the data held about you.',
            'You can ask for the identities of all third parties with whom your data is shared.',
            'The company must provide this within a reasonable time.',
          ],
          sections: [
            {
              id: 'sec-1',
              title: 'The Right to Know',
              content: [
                {
                  type: 'paragraph',
                  content:
                    'Before the DPDPA, if you wanted to know what data a company had about you, they could easily ignore you. Now, it is a legal right. Under Section 11, every Data Principal has the right to obtain from the Data Fiduciary:',
                },
                {
                  type: 'list',
                  content: 'What you can request',
                  items: [
                    'A summary of the personal data being processed.',
                    'The identities of all other Data Fiduciaries and Data Processors with whom the data has been shared.',
                    'A description of the personal data shared.',
                    'The purposes for which the data was shared.',
                  ],
                },
                {
                  type: 'callout',
                  content:
                    'This right is crucial for transparency. If you do not know who has your data, you cannot hold them accountable.',
                  calloutType: 'important',
                },
              ],
            },
            {
              id: 'sec-2',
              title: 'How to Exercise It',
              content: [
                {
                  type: 'paragraph',
                  content:
                    'You exercise this right by submitting a request to the Data Fiduciary. The Act requires companies to establish a mechanism (usually an email or a web form) to handle these requests. You can also use a Consent Manager.',
                },
                {
                  type: 'example',
                  content:
                    'If you want to know what a social media app knows about you, you can send a request to their Grievance Officer or DPO. They must provide you with a summary of your data, such as your profile details, browsing history, and location data they have stored.',
                },
              ],
            },
          ],
          glossary: [
            { term: 'Data Fiduciary', definition: 'The entity that decides why and how your data is processed.' },
            { term: 'Data Processor', definition: 'The entity that processes data on behalf of the Fiduciary.' },
          ],
          references: [
            { title: 'DPDPA Section 11', source: 'Government of India', year: '2023' },
          ],
        },
        {
          id: 2,
          title: 'Right to Correction',
          duration: '15 min',
          type: 'reading',
          description: 'Fixing inaccurate data.',
          content:
            'Section 12 gives you the right to correct inaccurate, misleading, or incomplete personal data.',
          learningObjectives: [
            'Understand what constitutes inaccurate data',
            'Learn the process to request correction',
          ],
          keyTakeaways: [
            'You can correct inaccurate data.',
            'You can complete incomplete data.',
            'Companies must update the data and notify third parties if they shared it.',
          ],
          sections: [
            {
              id: 'sec-1',
              title: 'The Importance of Accuracy',
              content: [
                {
                  type: 'paragraph',
                  content:
                    'Data can have real-world consequences. If your credit report has an incorrect default, you might be denied a loan. If your health records have the wrong blood type, it could be fatal. The right to correction ensures that your data is accurate.',
                },
                {
                  type: 'paragraph',
                  content:
                    'Under Section 12(1)(a), you can request the correction, completion, or updating of your personal data.',
                },
              ],
            },
            {
              id: 'sec-2',
              title: 'The Process',
              content: [
                {
                  type: 'paragraph',
                  content:
                    'You must submit a request to the Data Fiduciary, providing proof that the data is inaccurate. For example, if your address is wrong, you can provide a copy of your utility bill or Aadhaar card as proof.',
                },
                {
                  type: 'callout',
                  content:
                    'If the Data Fiduciary has shared your inaccurate data with third parties, it must notify them of the correction.',
                  calloutType: 'note',
                },
              ],
            },
          ],
          glossary: [
            { term: 'Inaccurate Data', definition: 'Data that is incorrect, outdated, or misleading.' },
          ],
          references: [
            { title: 'DPDPA Section 12', source: 'Government of India', year: '2023' },
          ],
        },
        {
          id: 3,
          title: 'Right to Erasure',
          duration: '15 min',
          type: 'video',
          description: 'The "Right to be Forgotten" — deleting data when it is no longer needed.',
          content:
            'Section 12(1)(b) allows you to request the erasure of your personal data once the purpose of processing is fulfilled, or upon withdrawal of consent.',
          learningObjectives: [
            'Understand the scope of the right to erasure',
            'Analyze the exceptions where erasure can be denied',
            'Learn how to request deletion',
          ],
          keyTakeaways: [
            'You can request deletion when the purpose is served.',
            'You can request deletion after withdrawing consent.',
            'The company can refuse if retention is required by law.',
          ],
          sections: [
            {
              id: 'sec-1',
              title: 'The Right to be Forgotten',
              content: [
                {
                  type: 'paragraph',
                  content:
                    'The right to erasure, also known as the right to be forgotten, is one of the most powerful rights under the DPDPA. It means you can ask a company to delete your data when they no longer need it.',
                },
                {
                  type: 'paragraph',
                  content:
                    'For example, if you close your e-commerce account, you can request the platform to delete your address, phone number, and purchase history.',
                },
              ],
            },
            {
              id: 'sec-2',
              title: 'When Can Erasure Be Denied?',
              content: [
                {
                  type: 'paragraph',
                  content:
                    'There are exceptions. A company can refuse to delete your data if retention is necessary for:',
                },
                {
                  type: 'list',
                  content: 'Exceptions to Erasure',
                  items: [
                    'Compliance with a legal obligation (e.g., tax records must be kept for 8 years).',
                    'Defending legal claims (e.g., if you are in a dispute with the company).',
                    'Investigation of a crime by a government agency.',
                  ],
                },
                {
                  type: 'callout',
                  content:
                    'You cannot use the right to erasure to ask a bank to delete your loan records while the loan is still active. The purpose is not fulfilled yet.',
                  calloutType: 'warning',
                },
              ],
            },
          ],
          glossary: [
            { term: 'Right to Erasure', definition: 'The right to have personal data deleted by a Data Fiduciary upon request, subject to certain conditions.' },
            { term: 'Right to be Forgotten', definition: 'A broader concept that includes erasure and the delinking of data from search engines.' },
          ],
          references: [
            { title: 'DPDPA Section 12', source: 'Government of India', year: '2023' },
          ],
        },
        {
          id: 4,
          title: 'Right to Nomination',
          duration: '10 min',
          type: 'reading',
          description: 'Appointing someone to manage your data after your death or incapacity.',
          content:
            'Section 14 allows you to nominate an individual to exercise your rights in the event of your death or incapacity.',
          learningObjectives: [
            'Understand the right to nomination',
            'Learn the process of nomination',
          ],
          keyTakeaways: [
            'You can nominate someone to manage your data.',
            'This applies in cases of death or incapacity.',
            'The nominee acts on your behalf.',
          ],
          sections: [
            {
              id: 'sec-1',
              title: 'Digital Legacy',
              content: [
                {
                  type: 'paragraph',
                  content:
                    'What happens to your social media accounts when you die? Under the DPDPA, you can nominate a person to take over your data rights. This person can request access to your data, or ask for its deletion.',
                },
                {
                  type: 'paragraph',
                  content:
                    'This is particularly important in cases of severe illness or incapacity, where you may not be able to exercise your rights yourself.',
                },
              ],
            },
          ],
          glossary: [
            { term: 'Nomination', definition: 'The act of appointing a person to act on your behalf in relation to your personal data.' },
          ],
          references: [
            { title: 'DPDPA Section 14', source: 'Government of India', year: '2023' },
          ],
        },
        {
          id: 5,
          title: 'Right to Grievance',
          duration: '15 min',
          type: 'video',
          description: 'The right to complain and get your issues resolved.',
          content:
            'Section 13 gives you the right to have a readily available grievance redressal mechanism.',
          learningObjectives: [
            'Understand the grievance redressal process',
            'Learn about the role of the Grievance Officer',
          ],
          keyTakeaways: [
            'Every Data Fiduciary must have a Grievance Officer.',
            'You can file a complaint if your rights are violated.',
            'If unsatisfied, you can escalate to the Data Protection Board.',
          ],
          sections: [
            {
              id: 'sec-1',
              title: 'The Grievance Process',
              content: [
                {
                  type: 'paragraph',
                  content:
                    'If you feel your rights are being violated, you must first approach the Data Fiduciary\'s Grievance Officer.',
                },
                {
                  type: 'list',
                  content: 'Step-by-Step Grievance Process',
                  items: [
                    '1. Find the Grievance Officer details on the privacy policy.',
                    '2. File a written complaint (email or online form).',
                    '3. Wait for the prescribed time (usually 30 days).',
                    '4. If the issue is not resolved, you can escalate to the Data Protection Board.',
                  ],
                },
                {
                  type: 'callout',
                  content:
                    'You cannot directly go to the Data Protection Board without first giving the Data Fiduciary a chance to fix the issue.',
                  calloutType: 'important',
                },
              ],
            },
          ],
          glossary: [
            { term: 'Grievance Officer', definition: 'The designated person within a Data Fiduciary responsible for resolving complaints from Data Principals.' },
          ],
          references: [
            { title: 'DPDPA Section 13', source: 'Government of India', year: '2023' },
          ],
        },
        {
          id: 6,
          title: 'Right to Complaint',
          duration: '15 min',
          type: 'reading',
          description: 'Escalating to the Data Protection Board.',
          content:
            'If the Data Fiduciary fails to resolve your grievance, you have the right to complain to the Data Protection Board of India.',
          learningObjectives: [
            'Understand when to approach the Board',
            'Learn the process of filing a complaint with the Board',
          ],
          keyTakeaways: [
            'The Board is the regulator and the adjudicator.',
            'The Board can investigate and impose penalties.',
            'You can also seek compensation from the Board.',
          ],
          sections: [
            {
              id: 'sec-1',
              title: 'The Data Protection Board',
              content: [
                {
                  type: 'paragraph',
                  content:
                    'The Data Protection Board is a quasi-judicial body. If you file a complaint, the Board will investigate. If it finds a violation, it can fine the company up to ₹250 crore.',
                },
                {
                  type: 'paragraph',
                  content:
                    'The Board can also direct the Data Fiduciary to provide you with compensation for any harm caused.',
                },
              ],
            },
          ],
          glossary: [
            { term: 'Adjudication', definition: 'The process of hearing and resolving a dispute by a formal authority.' },
          ],
          references: [
            { title: 'DPDPA Section 27', source: 'Government of India', year: '2023' },
          ],
        },
      ],
    },

    // ============================================================
    // CHAPTER 2: DUTIES OF DATA PRINCIPAL
    // ============================================================
    {
      id: 2,
      title: 'Duties of Data Principal',
      lessons: [
        {
          id: 7,
          title: 'False Information',
          duration: '15 min',
          type: 'video',
          description: 'The duty to provide accurate and truthful data.',
          content:
            'With great rights come great responsibilities. The DPDPA also imposes duties on Data Principals.',
          learningObjectives: [
            'Understand the duty to provide accurate information',
            'Analyze the consequences of providing false data',
          ],
          keyTakeaways: [
            'You must not impersonate someone else.',
            'You must provide authentic information.',
            'Providing false data can lead to penalties or rejection of service.',
          ],
          sections: [
            {
              id: 'sec-1',
              title: 'The Duty of Authenticity',
              content: [
                {
                  type: 'paragraph',
                  content:
                    'Section 15(a) says that a Data Principal must comply with the duty to furnish only authentic and verifiable information.',
                },
                {
                  type: 'paragraph',
                  content:
                    'You cannot use a fake email or a false name to open a bank account. If you provide false data, the Data Fiduciary is not liable for processing that wrong data. Moreover, you could face legal consequences.',
                },
              ],
            },
            {
              id: 'sec-2',
              title: 'Consequences',
              content: [
                {
                  type: 'paragraph',
                  content:
                    'If you provide false information, the Data Fiduciary may terminate your account. You also lose the right to complain about data related to that false information.',
                },
              ],
            },
          ],
          glossary: [
            { term: 'Authentic Information', definition: 'Data that is true, genuine, and accurately represents the facts.' },
          ],
          references: [
            { title: 'DPDPA Section 15', source: 'Government of India', year: '2023' },
          ],
        },
        {
          id: 8,
          title: 'False Complaints',
          duration: '15 min',
          type: 'reading',
          description: 'The liability for making frivolous or vexatious complaints.',
          content:
            'The DPDPA is not a tool for harassment. Section 15(b) imposes a duty on Data Principals not to file false or frivolous complaints.',
          learningObjectives: [
            'Understand the liability for false complaints',
            'Analyze the fine for vexatious complaints',
          ],
          keyTakeaways: [
            'Filing a false complaint is a violation of the Act.',
            'You can be fined up to ₹10,000 for vexatious complaints.',
            'This prevents abuse of the grievance mechanism.',
          ],
          sections: [
            {
              id: 'sec-1',
              title: 'The Penalty',
              content: [
                {
                  type: 'paragraph',
                  content:
                    'While Data Fiduciaries can be fined crores of rupees, the Data Principal can also be fined. Section 15(b) states that filing a false or frivolous complaint is a breach of duty.',
                },
                {
                  type: 'paragraph',
                  content:
                    'Under the Schedule of penalties, a Data Principal can be fined up to ₹10,000 for filing a false complaint.',
                },
                {
                  type: 'callout',
                  content:
                    'This is a unique feature of the DPDPA. Most data protection laws only penalize companies. India also holds citizens accountable for abuse.',
                  calloutType: 'important',
                },
              ],
            },
          ],
          glossary: [
            { term: 'Vexatious Complaint', definition: 'A complaint filed without reasonable grounds, primarily to cause annoyance or burden the other party.' },
          ],
          references: [
            { title: 'DPDPA Schedule', source: 'Government of India', year: '2023' },
          ],
        },
        {
          id: 9,
          title: 'Legal Liability',
          duration: '15 min',
          type: 'video',
          description: 'Understanding the overall legal liability of a Data Principal.',
          content:
            'Data Principals are not above the law. They are subject to civil liabilities under the DPDPA and criminal laws under the IT Act.',
          learningObjectives: [
            'Understand the civil liabilities of Data Principals',
            'Analyze the intersection with other laws',
          ],
          keyTakeaways: [
            'Data Principals can be penalized for breaching duties.',
            'The DPDPA does not override criminal law.',
            'Rights and duties go hand in hand.',
          ],
          sections: [
            {
              id: 'sec-1',
              title: 'Rights and Responsibilities',
              content: [
                {
                  type: 'paragraph',
                  content:
                    'The DPDPA is a balanced law. While it grants you extensive rights, it also expects you to behave responsibly. You cannot use the right to access or erasure to defraud a company, evade taxes, or destroy evidence.',
                },
                {
                  type: 'paragraph',
                  content:
                    'If a Data Principal breaches these duties, they can be held liable by the Data Protection Board.',
                },
              ],
            },
          ],
          glossary: [
            { term: 'Civil Liability', definition: 'The legal responsibility for one\'s acts or omissions that can result in financial penalties or compensation.' },
          ],
          references: [
            { title: 'DPDPA Section 15', source: 'Government of India', year: '2023' },
          ],
        },
      ],
    },
  ],

  // ===== MODULE ASSIGNMENTS =====
  assignments: [
    {
      id: 1,
      title: 'Handle 10 User Requests',
      description:
        'Simulate handling 10 different data principal rights requests. Create a mock log of how you would process them.',
      deliverables: [
        'Request log (10 requests)',
        'Response templates for each type of request',
        'Time tracking (SLA)',
        'Resolution summary',
      ],
    },
  ],

  // ===== MODULE QUIZ =====
  quiz: {
    questions: [
      {
        question: 'How many core rights do data principals have under DPDPA?',
        options: ['3', '4', '5', '6'],
        correct: 3,
        explanation: 'The DPDPA grants six core rights: Access, Correction, Erasure, Grievance Redressal, Nomination, and Withdrawal of Consent.',
      },
      {
        question: 'The right to erasure is also known as:',
        options: ['Right to delete', 'Right to be forgotten', 'Right to remove', 'Right to correct'],
        correct: 1,
        explanation: 'The right to erasure is often referred to as the "Right to be Forgotten" in global privacy laws.',
      },
      {
        question: 'Nomination allows:',
        options: ['Appoint a representative', 'Transfer data', 'Withdraw consent', 'File complaint'],
        correct: 0,
        explanation: 'Nomination allows a Data Principal to appoint a representative to exercise their rights in case of death or incapacity.',
      },
      {
        question: 'What is the duty of a data principal?',
        options: ['Provide false information', 'Make false complaints', 'Provide accurate information', 'Ignore data rights'],
        correct: 2,
        explanation: 'Section 15 mandates that Data Principals must provide authentic and accurate information.',
      },
      {
        question: 'Grievance redressal is:',
        options: ['A right', 'A duty', 'Both', 'Neither'],
        correct: 0,
        explanation: 'Grievance redressal is a right available to the Data Principal under Section 13.',
      },
    ],
    passingScore: 80,
  },
};
