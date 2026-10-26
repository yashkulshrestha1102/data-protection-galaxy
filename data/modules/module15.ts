// data/modules/module15.ts

import { Module } from '@/app/types/course';

export const module15: Module = {
  id: 15,
  title: 'Incident Response',
  description:
    'Learn how to respond to data breaches and security incidents. This module covers the complete incident response lifecycle—detection, containment, notification, and recovery. Understand the strict "72-hour" reporting rule and how to communicate with the Data Protection Board.',
  duration: '8 Hours',
  icon: 'AlertTriangle',
  learningObjectives: [
    'Understand the definition of a personal data breach',
    'Learn the 6 phases of an incident response plan',
    'Analyze the 72-hour notification timeline',
    'Draft a breach notification report for the Data Protection Board',
    'Learn how to communicate with affected Data Principals',
  ],
  chapters: [
    // ============================================================
    // CHAPTER 1: INCIDENT MANAGEMENT
    // ============================================================
    {
      id: 1,
      title: 'Incident Management',
      lessons: [
        {
          id: 1,
          title: 'Incident Detection',
          duration: '15 min',
          type: 'video',
          description: 'How do you know you have been breached?',
          content:
            'The first step in incident response is detecting the breach. The faster you detect it, the less damage is done.',
          learningObjectives: [
            'Understand the sources of breach detection',
            'Learn the importance of early detection',
          ],
          keyTakeaways: [
            'Most breaches are detected by third parties (law enforcement, customers, researchers).',
            'You need internal monitoring tools to detect breaches yourself.',
            'A delay in detection increases the penalty.',
          ],
          sections: [
            {
              id: 'sec-1',
              title: 'How Breaches are Found',
              content: [
                {
                  type: 'paragraph',
                  content:
                    'A personal data breach includes unauthorized access, loss, destruction, or alteration of data. You might detect it through:',
                },
                {
                  type: 'list',
                  content: 'Detection Sources',
                  items: [
                    'Internal Security Tools: SIEM alerts, unusual database access.',
                    'Employee Reporting: An employee notices something suspicious.',
                    'Customer Complaints: Users report strange activity or phishing emails.',
                    'Third-Party Notification: A vendor or researcher informs you.',
                    'Law Enforcement: Police notify you of a compromised server.',
                  ],
                },
                {
                  type: 'callout',
                  content:
                    'The DPDPA requires you to report a breach "without undue delay." If you take 3 months to realize you were breached, the Board will penalize you for lack of monitoring.',
                  calloutType: 'warning',
                },
              ],
            },
          ],
          glossary: [
            { term: 'SIEM', definition: 'Security Information and Event Management, software that monitors systems for suspicious activity.' },
          ],
          references: [
            { title: 'DPDPA Section 8(6)', source: 'Government of India', year: '2023' },
          ],
        },
        {
          id: 2,
          title: 'Containment',
          duration: '15 min',
          type: 'reading',
          description: 'Stopping the bleeding.',
          content:
            'Once a breach is detected, the immediate priority is to contain it so no further data is lost.',
          learningObjectives: [
            'Understand the containment phase',
            'Learn about short-term and long-term containment',
          ],
          keyTakeaways: [
            'Disconnect affected systems immediately.',
            'Change compromised passwords.',
            'Preserve evidence for the investigation.',
          ],
          sections: [
            {
              id: 'sec-1',
              title: 'The Containment Strategy',
              content: [
                {
                  type: 'paragraph',
                  content:
                    'If you discover a hacker is in your database, you must kick them out. Containment involves:',
                },
                {
                  type: 'list',
                  content: 'Containment Steps',
                  items: [
                    'Short-term: Isolate the affected server (take it offline).',
                    'Short-term: Block malicious IP addresses.',
                    'Long-term: Patch the vulnerability that allowed the breach.',
                    'Evidence: Do not wipe the server. Take a forensic image before rebuilding.',
                  ],
                },
              ],
            },
          ],
          glossary: [
            { term: 'Containment', definition: 'The process of limiting the scope and impact of a security incident.' },
            { term: 'Forensic Image', definition: 'An exact copy of a storage device used for investigation purposes.' },
          ],
          references: [
            { title: 'NIST Incident Response Guide', source: 'NIST', year: '2012' },
          ],
        },
        {
          id: 3,
          title: 'Recovery',
          duration: '15 min',
          type: 'video',
          description: 'Restoring normal operations safely.',
          content:
            'After containment, you must restore systems. But you cannot just turn the server back on without fixing the vulnerability.',
          learningObjectives: [
            'Understand the recovery phase',
            'Learn how to verify system integrity',
          ],
          keyTakeaways: [
            'Restore from a clean backup.',
            'Verify the vulnerability is patched.',
            'Monitor heavily after restoration.',
          ],
          sections: [
            {
              id: 'sec-1',
              title: 'Getting Back Online',
              content: [
                {
                  type: 'paragraph',
                  content:
                    'Recovery means bringing the affected systems back into production. This requires careful testing to ensure the threat is eliminated.',
                },
                {
                  type: 'list',
                  content: 'Recovery Steps',
                  items: [
                    'Rebuild the system from scratch or a known good backup.',
                    'Apply the necessary security patches.',
                    'Change all passwords and credentials.',
                    'Conduct a vulnerability scan before going live.',
                    'Keep enhanced monitoring for at least 30 days.',
                  ],
                },
              ],
            },
          ],
          glossary: [
            { term: 'Recovery', definition: 'The process of restoring systems and data after an incident.' },
          ],
          references: [
            { title: 'Incident Response Best Practices', source: 'SANS Institute', year: '2021' },
          ],
        },
        {
          id: 4,
          title: 'Notification',
          duration: '20 min',
          type: 'reading',
          description: 'The legal requirement to report the breach.',
          content:
            'This is the most critical step under the DPDPA. You must notify the Data Protection Board and affected individuals.',
          learningObjectives: [
            'Understand the notification requirements',
            'Learn what information to include in the report',
            'Analyze the consequences of non-notification',
          ],
          keyTakeaways: [
            'Notify the Board "without undue delay" (usually interpreted as 72 hours).',
            'Notify affected users if there is a high risk of harm.',
            'Failure to notify can result in a ₹200 crore penalty.',
          ],
          sections: [
            {
              id: 'sec-1',
              title: 'Reporting to the Board',
              content: [
                {
                  type: 'paragraph',
                  content:
                    'Under Section 8(6), the Data Fiduciary must notify the Data Protection Board and the affected Data Principals. The notification must include:',
                },
                {
                  type: 'list',
                  content: 'Notification Contents',
                  items: [
                    'The nature of the breach.',
                    'The categories and number of data subjects affected.',
                    'The likely consequences of the breach.',
                    'The measures taken or proposed to address the breach.',
                    'The contact details of the DPO or Privacy Officer.',
                  ],
                },
                {
                  type: 'callout',
                  content:
                    'While the DPDPA says "without undue delay," industry practice and GDPR alignment suggest the Board will expect an initial notification within 72 hours of becoming aware of the breach.',
                  calloutType: 'important',
                },
              ],
            },
            {
              id: 'sec-2',
              title: 'Notifying Individuals',
              content: [
                {
                  type: 'paragraph',
                  content:
                    'You must notify affected Data Principals without delay if the breach is likely to result in a high risk to their rights (e.g., financial loss, identity theft). The notification should be clear and in plain language.',
                },
                {
                  type: 'example',
                  content:
                    'If a bank leaks credit card data, it must notify the Board and immediately send an email/SMS to affected customers warning them and advising them to block their cards.',
                },
              ],
            },
          ],
          glossary: [
            { term: 'Undue Delay', definition: 'A delay that is unreasonable or without good cause.' },
            { term: 'Data Breach Notification', definition: 'The formal process of informing authorities and individuals about a data security incident.' },
          ],
          references: [
            { title: 'DPDPA Section 8(6)', source: 'Government of India', year: '2023' },
          ],
        },
      ],
    },
  ],

  // ===== MODULE ASSIGNMENTS =====
  assignments: [
    {
      id: 1,
      title: 'Draft a Breach Notification Report',
      description:
        'Create a mock breach notification report for a hypothetical incident (e.g., a lost laptop containing patient data).',
      deliverables: [
        'Initial notification to the Data Protection Board',
        'Draft email to affected individuals',
        'Internal incident summary',
      ],
    },
  ],

  // ===== MODULE QUIZ =====
  quiz: {
    questions: [
      {
        question: 'Breach notification timeline under DPDPA is:',
        options: ['24 hours', '48 hours', '72 hours (without undue delay)', '30 days'],
        correct: 2,
        explanation: 'The DPDPA requires notification "without undue delay," which aligns with the industry standard of 72 hours.',
      },
      {
        question: 'What is the first step in incident response?',
        options: ['Notification', 'Recovery', 'Detection', 'Containment'],
        correct: 2,
        explanation: 'Detection is the first step. You cannot respond to a breach you do not know about.',
      },
      {
        question: 'Who must be notified of a breach?',
        options: ['Only the Board', 'Only affected individuals', 'The Board and affected individuals', 'The media'],
        correct: 2,
        explanation: 'The Data Fiduciary must notify the Data Protection Board and the affected Data Principals.',
      },
      {
        question: 'What is the penalty for failing to notify a breach?',
        options: ['₹50 crore', '₹100 crore', '₹200 crore', '₹250 crore'],
        correct: 2,
        explanation: 'Failure to notify a breach can result in a penalty of up to ₹200 crore.',
      },
    ],
    passingScore: 80,
  },
};
