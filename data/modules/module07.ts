// data/modules/module07.ts

import { Module } from '@/app/types/course';

export const module07: Module = {
  id: 7,
  title: 'Obligations of Data Fiduciary',
  description:
    'Learn all the strict legal obligations of data fiduciaries under DPDPA. This module covers security safeguards, data minimization, retention policies, contract drafting, and the special protections required for children\'s data.',
  duration: '10 Hours',
  icon: 'Building',
  learningObjectives: [
    'Understand the 8 core obligations of a Data Fiduciary',
    'Implement reasonable security safeguards to prevent breaches',
    'Design compliant data retention and deletion policies',
    'Draft enforceable contracts with Data Processors',
    'Understand the strict rules for processing children\'s data',
    'Build a robust incident response and breach notification plan',
  ],
  chapters: [
    // ============================================================
    // CHAPTER 1: SECURITY SAFEGUARDS
    // ============================================================
    {
      id: 1,
      title: 'Security Safeguards',
      lessons: [
        {
          id: 1,
          title: 'Encryption',
          duration: '15 min',
          type: 'video',
          description: 'Protecting data at rest and in transit.',
          content:
            'Section 8(5) mandates reasonable security safeguards. Encryption is the gold standard for protecting personal data from unauthorized access.',
          learningObjectives: [
            'Understand what constitutes "reasonable security"',
            'Learn the difference between encryption at rest and in transit',
            'Identify industry standards for encryption',
          ],
          keyTakeaways: [
            'Encryption scrambles data so it cannot be read without a key.',
            'Use AES-256 for data at rest and TLS 1.2+ for data in transit.',
            'Encryption is required but not sufficient on its own.',
          ],
          sections: [
            {
              id: 'sec-1',
              title: 'Encryption Basics',
              content: [
                {
                  type: 'paragraph',
                  content:
                    'Encryption is the process of converting personal data into an unreadable format (ciphertext) so that even if a hacker steals the database, they cannot read the information without the decryption key.',
                },
                {
                  type: 'heading',
                  content: 'Data at Rest vs Data in Transit',
                },
                {
                  type: 'list',
                  content: 'Two types of encryption',
                  items: [
                    'Encryption at Rest: Protecting data stored on servers, hard drives, or cloud databases (e.g., AWS RDS encryption, BitLocker).',
                    'Encryption in Transit: Protecting data as it moves over the network (e.g., HTTPS, TLS, VPNs).',
                  ],
                },
                {
                  type: 'callout',
                  content:
                    'If a company stores plain text credit card numbers, passwords, or health records, it is a direct violation of the obligation to implement reasonable security safeguards.',
                  calloutType: 'warning',
                },
              ],
            },
          ],
          glossary: [
            { term: 'Encryption', definition: 'The process of encoding information so that only authorized parties can access it.' },
            { term: 'AES-256', definition: 'An advanced encryption standard widely used by governments and businesses to protect classified information.' },
          ],
          references: [
            { title: 'DPDPA Section 8(5)', source: 'Government of India', year: '2023' },
          ],
        },
        {
          id: 2,
          title: 'Authentication',
          duration: '15 min',
          type: 'reading',
          description: 'Ensuring only authorized people can access the data.',
          content:
            'Authentication is about verifying identity. Weak authentication is one of the leading causes of data breaches.',
          learningObjectives: [
            'Understand the importance of strong authentication',
            'Implement multi-factor authentication (MFA)',
          ],
          keyTakeaways: [
            'Passwords are not enough. Use MFA.',
            'Implement role-based access control (RBAC).',
            'Regularly audit user access.',
          ],
          sections: [
            {
              id: 'sec-1',
              title: 'Beyond Passwords',
              content: [
                {
                  type: 'paragraph',
                  content:
                    'Most data breaches happen because an employee\'s password was stolen or guessed. A Data Fiduciary must implement strong authentication mechanisms.',
                },
                {
                  type: 'list',
                  content: 'Authentication Best Practices',
                  items: [
                    'Multi-Factor Authentication (MFA): Require at least two forms of verification (e.g., password + OTP).',
                    'Single Sign-On (SSO): Centralized secure login.',
                    'Role-Based Access Control (RBAC): Employees should only have access to the data necessary for their job.',
                  ],
                },
              ],
            },
          ],
          glossary: [
            { term: 'MFA', definition: 'Multi-Factor Authentication, a security system that requires more than one method of authentication.' },
            { term: 'RBAC', definition: 'Role-Based Access Control, a method of restricting network access based on the roles of individual users.' },
          ],
          references: [
            { title: 'DPDPA Section 8(5)', source: 'Government of India', year: '2023' },
          ],
        },
        {
          id: 3,
          title: 'Logging',
          duration: '10 min',
          type: 'video',
          description: 'Keeping records of who accessed what data.',
          content:
            'Logging means tracking every access to personal data. If a breach happens, logs help you figure out what went wrong.',
          learningObjectives: [
            'Understand the purpose of logging',
            'Learn what to log and how long to keep logs',
          ],
          keyTakeaways: [
            'Log every access, modification, and deletion of personal data.',
            'Secure the logs (a hacker should not be able to delete them).',
            'Logs are essential for investigations and audits.',
          ],
          sections: [
            {
              id: 'sec-1',
              title: 'The Audit Trail',
              content: [
                {
                  type: 'paragraph',
                  content:
                    'Without logs, you have no way of knowing if an employee maliciously accessed a celebrity\'s or patient\'s data. The DPDPA expects reasonable security, and logging is a fundamental part of that.',
                },
                {
                  type: 'paragraph',
                  content:
                    'Logs should be tamper-proof and retained for a reasonable period (usually 6-12 months or longer depending on sectoral regulations).',
                },
              ],
            },
          ],
          glossary: [
            { term: 'Audit Log', definition: 'A record of system activities that provides evidence of the sequence of activities that have affected a specific operation.' },
          ],
          references: [
            { title: 'NIST Cybersecurity Framework', source: 'NIST', year: '2020' },
          ],
        },
        {
          id: 4,
          title: 'Monitoring',
          duration: '15 min',
          type: 'reading',
          description: 'Actively watching for suspicious activity.',
          content:
            'Security is not a set-and-forget process. Continuous monitoring helps detect and respond to threats in real-time.',
          learningObjectives: [
            'Understand the need for continuous monitoring',
            'Implement SIEM and threat detection',
          ],
          keyTakeaways: [
            'Passive security (like firewalls) is not enough.',
            'Use automated tools to detect anomalies.',
            'Set up alerts for unusual data access patterns.',
          ],
          sections: [
            {
              id: 'sec-1',
              title: 'Proactive Defense',
              content: [
                {
                  type: 'paragraph',
                  content:
                    'Continuous monitoring means using software to watch your network and databases 24/7. If an employee suddenly downloads 10,000 customer records at 2 AM, the system should flag it.',
                },
                {
                  type: 'paragraph',
                  content:
                    'The DPDPA does not prescribe specific tools, but "reasonable safeguards" implies active monitoring of critical systems.',
                },
              ],
            },
          ],
          glossary: [
            { term: 'SIEM', definition: 'Security Information and Event Management, software that aggregates and analyzes activity from many different resources across your IT infrastructure.' },
          ],
          references: [
            { title: 'DPDPA Section 8(5)', source: 'Government of India', year: '2023' },
          ],
        },
        {
          id: 5,
          title: 'Access Control',
          duration: '20 min',
          type: 'video',
          description: 'The principle of least privilege.',
          content:
            'Access control ensures that employees only have access to the data they need to do their jobs, and nothing more.',
          learningObjectives: [
            'Understand the principle of least privilege',
            'Implement access control matrices',
          ],
          keyTakeaways: [
            'No one should have "super admin" access by default.',
            'Regularly revoke access when employees leave or change roles.',
            'Segregate sensitive data from general data.',
          ],
          sections: [
            {
              id: 'sec-1',
              title: 'Least Privilege',
              content: [
                {
                  type: 'paragraph',
                  content:
                    'If a marketing intern can access the HR database containing salaries, your access controls are broken. The Principle of Least Privilege (PoLP) states that a user should be given the minimum levels of access necessary to perform their job functions.',
                },
                {
                  type: 'callout',
                  content:
                    'Lack of access control is a major reason for insider threats. A disgruntled employee with broad access can steal or destroy data.',
                  calloutType: 'warning',
                },
              ],
            },
          ],
          glossary: [
            { term: 'Principle of Least Privilege', definition: 'A security concept in which a user is given the minimum levels of access necessary to perform their job functions.' },
          ],
          references: [
            { title: 'DPDPA Section 8(5)', source: 'Government of India', year: '2023' },
          ],
        },
      ],
    },

    // ============================================================
    // CHAPTER 2: DATA MANAGEMENT
    // ============================================================
    {
      id: 2,
      title: 'Data Management',
      lessons: [
        {
          id: 6,
          title: 'Purpose Limitation',
          duration: '15 min',
          type: 'video',
          description: 'You cannot use data for purposes the user did not agree to.',
          content:
            'Section 6(1) requires consent for a "specified purpose". Processing data for a different purpose without new consent is a violation.',
          learningObjectives: [
            'Understand purpose limitation',
            'Analyze function creep and secondary use',
          ],
          keyTakeaways: [
            'Use data only for the reason you collected it.',
            'If you want to use it for a new purpose, get fresh consent.',
            'Do not hide data collection behind vague terms like "business purposes".',
          ],
          sections: [
            {
              id: 'sec-1',
              title: 'The Scope of Purpose',
              content: [
                {
                  type: 'paragraph',
                  content:
                    'If a user gives you their email address to send them a receipt, you cannot start sending them marketing emails. That is a different purpose. To send marketing emails, you need separate consent.',
                },
                {
                  type: 'example',
                  content:
                    'A fitness app collects heart rate data to show daily health stats. If they want to sell that anonymized data to an insurance company, they must take separate consent for "sharing data with third parties for research/insurance".',
                },
              ],
            },
          ],
          glossary: [
            { term: 'Purpose Limitation', definition: 'The principle that personal data should only be processed for the purposes specified at the time of collection.' },
            { term: 'Function Creep', definition: 'The gradual expansion of the use of a technology or data beyond its original purpose.' },
          ],
          references: [
            { title: 'DPDPA Section 6', source: 'Government of India', year: '2023' },
          ],
        },
        {
          id: 7,
          title: 'Storage Limitation',
          duration: '15 min',
          type: 'reading',
          description: 'Data must be deleted when the purpose is fulfilled.',
          content:
            'Section 8(7) requires the Data Fiduciary to erase personal data once the purpose of processing is no longer served, unless retention is required by law.',
          learningObjectives: [
            'Understand storage limitation',
            'Design data retention schedules',
          ],
          keyTakeaways: [
            'Do not keep data "just in case".',
            'Define retention periods for different data types.',
            'Automate deletion to ensure compliance.',
          ],
          sections: [
            {
              id: 'sec-1',
              title: 'The Retention Schedule',
              content: [
                {
                  type: 'paragraph',
                  content:
                    'Many companies keep data forever because storage is cheap. The DPDPA prohibits this. You must have a retention schedule. For example:',
                },
                {
                  type: 'list',
                  content: 'Sample Retention Schedule',
                  items: [
                    'Customer transaction data: 8 years (tax laws).',
                    'Marketing contact lists: Until consent is withdrawn.',
                    'CCTV footage: 30 days (security policy).',
                    'Job applicant resumes: 6 months.',
                  ],
                },
              ],
            },
          ],
          glossary: [
            { term: 'Storage Limitation', definition: 'The principle that personal data should not be kept longer than is necessary for the purpose it was collected.' },
          ],
          references: [
            { title: 'DPDPA Section 8(7)', source: 'Government of India', year: '2023' },
          ],
        },
        {
          id: 8,
          title: 'Deletion',
          duration: '10 min',
          type: 'video',
          description: 'How to actually erase data securely.',
          content:
            'When you delete data, it must be gone for good. Soft deletion (just flagging it as deleted) is not enough.',
          learningObjectives: [
            'Understand the difference between soft delete and hard delete',
            'Implement secure data destruction',
          ],
          keyTakeaways: [
            'Deletion means the data is irrecoverable.',
            'Do not leave data in backup tapes forever.',
            'Use secure erasure tools.',
          ],
          sections: [
            {
              id: 'sec-1',
              title: 'True Deletion',
              content: [
                {
                  type: 'paragraph',
                  content:
                    'If a user requests erasure, and you simply hide their profile from the UI but keep the data in your database, you are in violation. True deletion involves purging the data from primary databases, backups, and caches.',
                },
              ],
            },
          ],
          glossary: [
            { term: 'Soft Delete', definition: 'Marking data as deleted in the database without actually removing it.' },
            { term: 'Hard Delete', definition: 'Permanently removing data from the database storage.' },
          ],
          references: [
            { title: 'DPDPA Section 12', source: 'Government of India', year: '2023' },
          ],
        },
        {
          id: 9,
          title: 'Retention',
          duration: '15 min',
          type: 'reading',
          description: 'When is it okay to keep data?',
          content:
            'Sometimes the law requires you to keep data. For example, tax records or KYC data.',
          learningObjectives: [
            'Understand the legal exceptions to deletion',
            'Design a retention policy',
          ],
          keyTakeaways: [
            'You can keep data if a law requires it.',
            'You can keep data to defend legal claims.',
            'You must document why you are retaining the data.',
          ],
          sections: [
            {
              id: 'sec-1',
              title: 'Exceptions',
              content: [
                {
                  type: 'paragraph',
                  content:
                    'Section 8(7)(a) allows retention if it is necessary for compliance with a legal obligation. For example, the RBI mandates that banks keep financial transaction records for a certain number of years. The DPDPA does not override these laws.',
                },
              ],
            },
          ],
          glossary: [
            { term: 'Legal Obligation', definition: 'A requirement imposed by a law, regulation, or court order.' },
          ],
          references: [
            { title: 'DPDPA Section 8(7)', source: 'Government of India', year: '2023' },
          ],
        },
      ],
    },

    // ============================================================
    // CHAPTER 3: CONTRACTUAL OBLIGATIONS
    // ============================================================
    {
      id: 3,
      title: 'Contractual Obligations',
      lessons: [
        {
          id: 10,
          title: 'Processor Contracts',
          duration: '20 min',
          type: 'video',
          description: 'What must be included in a Data Processing Agreement.',
          content:
            'You cannot just hand data to a vendor. Section 8(2) requires a valid contract.',
          learningObjectives: [
            'Understand the mandatory clauses in a processor contract',
            'Draft a Data Processing Agreement (DPA)',
          ],
          keyTakeaways: [
            'The contract must specify the purpose of processing.',
            'It must require the processor to implement security.',
            'The processor must assist with breach notifications.',
          ],
          sections: [
            {
              id: 'sec-1',
              title: 'Mandatory Clauses',
              content: [
                {
                  type: 'paragraph',
                  content:
                    'The DPDPA requires that the contract with a Data Processor must include:',
                },
                {
                  type: 'list',
                  content: 'Key Contract Clauses',
                  items: [
                    'Scope of processing.',
                    'Security measures the processor must implement.',
                    'Prohibition on sub-processing without consent.',
                    'Assistance with data principal rights requests.',
                    'Assistance with breach notifications.',
                    'Data deletion upon contract termination.',
                  ],
                },
              ],
            },
          ],
          glossary: [
            { term: 'DPA', definition: 'Data Processing Agreement, a contract between a Data Fiduciary and a Data Processor.' },
          ],
          references: [
            { title: 'DPDPA Section 8(2)', source: 'Government of India', year: '2023' },
          ],
        },
        {
          id: 11,
          title: 'Vendor Due Diligence',
          duration: '15 min',
          type: 'reading',
          description: 'Checking if your vendors are actually secure.',
          content:
            'You can outsource processing, but you cannot outsource liability. You must audit your vendors.',
          learningObjectives: [
            'Understand why due diligence is essential',
            'Learn the steps of vendor assessment',
          ],
          keyTakeaways: [
            'Conduct risk assessments of vendors.',
            'Review their security certifications (ISO 27001, SOC 2).',
            'Conduct regular audits.',
          ],
          sections: [
            {
              id: 'sec-1',
              title: 'The Assessment',
              content: [
                {
                  type: 'paragraph',
                  content:
                    'Before signing a contract, assess the vendor\'s security posture. Ask for their security policies, audit reports, and incident history. If a vendor refuses to provide this, do not give them your customer data.',
                },
                {
                  type: 'callout',
                  content:
                    'The Data Fiduciary is liable for the actions of the Data Processor. If your vendor leaks data, the Data Protection Board will hold YOU responsible.',
                  calloutType: 'warning',
                },
              ],
            },
          ],
          glossary: [
            { term: 'Due Diligence', definition: 'Investigation or exercise of care that a reasonable business or person is expected to take before entering into an agreement or contract with another party.' },
          ],
          references: [
            { title: 'DPDPA Section 8(2)', source: 'Government of India', year: '2023' },
          ],
        },
        {
          id: 12,
          title: 'Children Data',
          duration: '20 min',
          type: 'video',
          description: 'Processing data of users under 18 requires extra care.',
          content:
            'Section 9 imposes strict requirements for processing children\'s data, including verifiable parental consent.',
          learningObjectives: [
            'Understand the definition of a child under DPDPA',
            'Learn about verifiable parental consent',
          ],
          keyTakeaways: [
            'A child is anyone under 18.',
            'You must obtain verifiable parental consent.',
            'You cannot track or target ads at children.',
          ],
          sections: [
            {
              id: 'sec-1',
              title: 'The Challenge of Age Verification',
              content: [
                {
                  type: 'paragraph',
                  content:
                    'How do you know a user is under 18? The Act requires you to make reasonable efforts to ensure verifiable parental consent. This is technically difficult, but companies must implement age-gating and consent mechanisms (like using DigiLocker).',
                },
              ],
            },
            {
              id: 'sec-2',
              title: 'Prohibited Practices',
              content: [
                {
                  type: 'paragraph',
                  content:
                    'If you are processing children\'s data, you cannot do the following:',
                },
                {
                  type: 'list',
                  content: 'Prohibited for Children',
                  items: [
                    'Behavioral monitoring (tracking what they do online).',
                    'Targeted advertising.',
                    'Processing data that is likely to cause a detrimental effect on the well-being of the child.',
                  ],
                },
              ],
            },
          ],
          glossary: [
            { term: 'Verifiable Parental Consent', definition: 'Consent obtained from a parent or guardian using reliable methods to verify their identity.' },
          ],
          references: [
            { title: 'DPDPA Section 9', source: 'Government of India', year: '2023' },
          ],
        },
        {
          id: 13,
          title: 'Parental Consent',
          duration: '15 min',
          type: 'reading',
          description: 'How to verify that a parent is really a parent.',
          content:
            'Getting verifiable consent is the hardest part of the children\'s data rules.',
          learningObjectives: [
            'Understand the methods of verifiable consent',
          ],
          keyTakeaways: [
            'Use government-backed verification (DigiLocker).',
            'Use reliable third-party identity verification.',
            'Maintain records of parental consent.',
          ],
          sections: [
            {
              id: 'sec-1',
              title: 'Verification Methods',
              content: [
                {
                  type: 'paragraph',
                  content:
                    'The DPDP Rules are expected to specify exactly how to verify parental consent. Globally, methods include:',
                },
                {
                  type: 'list',
                  content: 'Methods',
                  items: [
                    'Credit card verification (requires an adult).',
                    'Government ID verification.',
                    'Digital Locker (DigiLocker) integration.',
                    'Video KYC.',
                  ],
                },
              ],
            },
          ],
          glossary: [
            { term: 'DigiLocker', definition: 'An Indian government digital wallet for citizens to store and share documents.' },
          ],
          references: [
            { title: 'DPDPA Section 9', source: 'Government of India', year: '2023' },
          ],
        },
        {
          id: 14,
          title: 'Advertising Restrictions',
          duration: '10 min',
          type: 'video',
          description: 'Why you cannot track children online.',
          content:
            'Targeted advertising to children is a major concern globally. The DPDPA bans it completely.',
          learningObjectives: [
            'Understand the ban on behavioral tracking',
            'Analyze the implications for ed-tech and gaming platforms',
          ],
          keyTakeaways: [
            'You cannot use children\'s data for targeted ads.',
            'You cannot track their behavior to build profiles.',
            'This applies to all digital platforms.',
          ],
          sections: [
            {
              id: 'sec-1',
              title: 'The Ban',
              content: [
                {
                  type: 'paragraph',
                  content:
                    'Under Section 9(3), tracking, behavioral monitoring, and targeted advertising directed at children are strictly prohibited. If you run an ed-tech app, you cannot serve ads to students based on their learning behavior.',
                },
              ],
            },
          ],
          glossary: [
            { term: 'Targeted Advertising', definition: 'Advertising that is directed at specific individuals based on their personal data and behavior.' },
          ],
          references: [
            { title: 'DPDPA Section 9(3)', source: 'Government of India', year: '2023' },
          ],
        },
      ],
    },
  ],

  // ===== MODULE ASSIGNMENTS =====
  assignments: [
    {
      id: 1,
      title: 'Company Compliance Checklist',
      description:
        'Create a comprehensive compliance checklist for your organization based on the 8 obligations of a Data Fiduciary.',
      deliverables: [
        'Security checklist',
        'Data management checklist',
        'Contractual checklist',
        'Children data checklist',
      ],
    },
  ],

  // ===== MODULE QUIZ =====
  quiz: {
    questions: [
      {
        question: 'Encryption is a:',
        options: ['Security safeguard', 'Data management', 'Contractual obligation', 'Processing method'],
        correct: 0,
        explanation: 'Encryption is one of the core security safeguards required under Section 8(5).',
      },
      {
        question: 'Purpose limitation means:',
        options: ['Limit data collection', 'Limit data use', 'Limit data storage', 'Limit data sharing'],
        correct: 1,
        explanation: 'Purpose limitation means data can only be used for the specified purposes for which it was collected.',
      },
      {
        question: 'Vendor due diligence is:',
        options: ['Optional', 'Mandatory', 'Recommended', 'Not required'],
        correct: 1,
        explanation: 'The Data Fiduciary is liable for the actions of the Data Processor, so due diligence is mandatory.',
      },
      {
        question: 'Children data requires:',
        options: ['Simple consent', 'Parental consent', 'No consent', 'Government consent'],
        correct: 1,
        explanation: 'Under Section 9, processing children\'s data requires verifiable parental consent.',
      },
      {
        question: 'Storage limitation means:',
        options: ['Store all data', 'Store limited data', 'Store data for limited time', 'Store no data'],
        correct: 2,
        explanation: 'Storage limitation means data should not be kept longer than necessary for the purpose it was collected.',
      },
    ],
    passingScore: 80,
  },
};
