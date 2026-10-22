// data/modules/module12.ts

import { Module } from '@/app/types/course';

export const module12: Module = {
  id: 12,
  title: 'Privacy Engineering',
  description:
    'Learn the technical implementation of data protection. This module covers the engineering controls required to protect data, including encryption, hashing, data masking, and tokenization. Build systems that are "private by design".',
  duration: '10 Hours',
  icon: 'Wrench',
  learningObjectives: [
    'Understand the principles of Privacy by Design',
    'Differentiate between encryption and hashing',
    'Learn how to implement data masking in non-production environments',
    'Understand tokenization and its role in payment security',
    'Analyze technical controls for enforcing consent in code',
  ],
  chapters: [
    // ============================================================
    // CHAPTER 1: TECHNICAL CONTROLS
    // ============================================================
    {
      id: 1,
      title: 'Technical Controls',
      lessons: [
        {
          id: 1,
          title: 'Encryption',
          duration: '20 min',
          type: 'video',
          description: 'Implementing symmetric and asymmetric encryption.',
          content:
            'Encryption is the process of converting plaintext into ciphertext. It is the most basic and essential technical control for data protection.',
          learningObjectives: [
            'Understand symmetric vs asymmetric encryption',
            'Learn how to manage encryption keys',
            'Implement encryption at rest and in transit',
          ],
          keyTakeaways: [
            'Symmetric encryption (AES) is fast and used for bulk data.',
            'Asymmetric encryption (RSA, ECC) is used for key exchange and digital signatures.',
            'Key management is the hardest part of encryption.',
          ],
          sections: [
            {
              id: 'sec-1',
              title: 'Symmetric vs Asymmetric',
              content: [
                {
                  type: 'paragraph',
                  content:
                    'There are two main types of encryption:',
                },
                {
                  type: 'list',
                  content: 'Types of Encryption',
                  items: [
                    'Symmetric Encryption: Uses the same key to encrypt and decrypt. It is very fast. Example: AES-256.',
                    'Asymmetric Encryption: Uses a public key to encrypt and a private key to decrypt. It is slower but solves the key distribution problem. Example: RSA, ECC.',
                  ],
                },
                {
                  type: 'paragraph',
                  content:
                    'In practice, most systems use a hybrid approach: they use asymmetric encryption to share a symmetric key, and then use the symmetric key to encrypt the actual data.',
                },
              ],
            },
            {
              id: 'sec-2',
              title: 'Key Management',
              content: [
                {
                  type: 'paragraph',
                  content:
                    'If you hardcode your encryption key in your source code, you are doing it wrong. Keys must be stored in a secure vault (like AWS KMS, HashiCorp Vault, or Azure Key Vault) and rotated regularly.',
                },
                {
                  type: 'callout',
                  content:
                    'The DPDPA mandates "reasonable security safeguards." Using outdated algorithms like MD5 or SHA-1 for encryption is not reasonable. Use modern standards (AES-256, SHA-256).',
                  calloutType: 'important',
                },
              ],
            },
          ],
          glossary: [
            { term: 'AES-256', definition: 'Advanced Encryption Standard with a 256-bit key, considered highly secure and used by governments worldwide.' },
            { term: 'Key Rotation', definition: 'The process of changing an encryption key periodically to reduce the risk of compromise.' },
          ],
          references: [
            { title: 'NIST Special Publication 800-57', source: 'NIST', year: '2020' },
          ],
        },
        {
          id: 2,
          title: 'Hashing',
          duration: '15 min',
          type: 'reading',
          description: 'One-way encryption for passwords and data integrity.',
          content:
            'Hashing is a one-way function. You cannot reverse it. It is used for storing passwords and verifying data integrity.',
          learningObjectives: [
            'Understand the difference between hashing and encryption',
            'Learn why hashing is used for passwords',
          ],
          keyTakeaways: [
            'Hashing is one-way; encryption is two-way.',
            'Never store passwords in plain text or encrypted form. Use strong hashing.',
            'Use salt and pepper to prevent rainbow table attacks.',
          ],
          sections: [
            {
              id: 'sec-1',
              title: 'Hashing for Passwords',
              content: [
                {
                  type: 'paragraph',
                  content:
                    'When a user creates a password, you should not store the password itself. You should store the hash of the password. When they log in, you hash their input and compare it to the stored hash.',
                },
                {
                  type: 'paragraph',
                  content:
                    'Modern hashing algorithms like bcrypt, scrypt, or Argon2 are designed to be slow, making brute-force attacks computationally expensive.',
                },
              ],
            },
            {
              id: 'sec-2',
              title: 'Salt and Pepper',
              content: [
                {
                  type: 'paragraph',
                  content:
                    'A salt is a random string added to the password before hashing. It ensures that two users with the same password get different hashes. A pepper is a secret key added to the hash, stored separately from the database.',
                },
              ],
            },
          ],
          glossary: [
            { term: 'Hash Function', definition: 'A mathematical algorithm that maps data of arbitrary size to a bit array of a fixed size.' },
            { term: 'Salt', definition: 'Random data added to a password before hashing to defend against dictionary attacks.' },
          ],
          references: [
            { title: 'OWASP Password Storage Cheat Sheet', source: 'OWASP', year: '2023' },
          ],
        },
        {
          id: 3,
          title: 'Masking',
          duration: '15 min',
          type: 'video',
          description: 'Protecting data in non-production environments.',
          content:
            'Data masking replaces sensitive data with realistic but fake data. It is essential for development and testing.',
          learningObjectives: [
            'Understand why data masking is necessary',
            'Learn static vs dynamic data masking',
          ],
          keyTakeaways: [
            'Never use production data in test environments.',
            'Masking allows developers to work without seeing real PII.',
            'Static masking creates a copy; dynamic masking masks on the fly.',
          ],
          sections: [
            {
              id: 'sec-1',
              title: 'The Dev Environment Risk',
              content: [
                {
                  type: 'paragraph',
                  content:
                    'Many data breaches happen in development environments. Developers often copy production databases to test new features. If that database contains real customer data, it is a massive security risk.',
                },
                {
                  type: 'paragraph',
                  content:
                    'Data masking solves this. It replaces real names, credit card numbers, and emails with fake ones, while preserving the format and relationships in the data.',
                },
              ],
            },
          ],
          glossary: [
            { term: 'Data Masking', definition: 'The process of replacing sensitive data with realistic but non-sensitive data.' },
            { term: 'PII', definition: 'Personally Identifiable Information, any data that could potentially identify a specific individual.' },
          ],
          references: [
            { title: 'Data Masking Best Practices', source: 'Gartner', year: '2021' },
          ],
        },
        {
          id: 4,
          title: 'Tokenization',
          duration: '15 min',
          type: 'reading',
          description: 'Replacing sensitive data with non-sensitive tokens.',
          content:
            'Tokenization replaces sensitive data with a unique token. The original data is stored in a secure vault.',
          learningObjectives: [
            'Understand the difference between tokenization and encryption',
            'Learn about payment tokenization',
          ],
          keyTakeaways: [
            'Tokenization reduces the scope of compliance.',
            'Tokens have no intrinsic value.',
            'PCI DSS heavily encourages tokenization for credit cards.',
          ],
          sections: [
            {
              id: 'sec-1',
              title: 'How Tokenization Works',
              content: [
                {
                  type: 'paragraph',
                  content:
                    'If a system uses tokenization, it never stores the real credit card number. Instead, it stores a token (like "tok_12345"). When the real number is needed, the system calls the tokenization vault.',
                },
                {
                  type: 'paragraph',
                  content:
                    'This means if a hacker breaches the main database, they only get useless tokens, not real credit card numbers.',
                },
              ],
            },
          ],
          glossary: [
            { term: 'Tokenization', definition: 'The process of substituting a sensitive data element with a non-sensitive equivalent, referred to as a token.' },
            { term: 'PCI DSS', definition: 'Payment Card Industry Data Security Standard, a set of security standards designed to ensure that all companies that accept, process, store or transmit credit card information maintain a secure environment.' },
          ],
          references: [
            { title: 'PCI DSS Tokenization Guidelines', source: 'PCI Security Standards Council', year: '2011' },
          ],
        },
      ],
    },
  ],

  // ===== MODULE ASSIGNMENTS =====
  assignments: [
    {
      id: 1,
      title: 'Technical Control Audit',
      description:
        'Review the technical controls in your organization (or a hypothetical system). Identify where encryption, hashing, and masking are used and where they are missing.',
      deliverables: [
        'Control matrix',
        'Gap analysis',
        'Implementation roadmap',
      ],
    },
  ],

  // ===== MODULE QUIZ =====
  quiz: {
    questions: [
      {
        question: 'Encryption is a:',
        options: ['Technical control', 'Legal requirement', 'Organizational control', 'Contractual control'],
        correct: 0,
        explanation: 'Encryption is a technical control used to protect data confidentiality.',
      },
      {
        question: 'What is the difference between hashing and encryption?',
        options: ['Hashing is two-way, encryption is one-way', 'Hashing is one-way, encryption is two-way', 'They are the same', 'Hashing is faster'],
        correct: 1,
        explanation: 'Hashing is a one-way function (cannot be reversed), while encryption is a two-way function (can be decrypted).',
      },
      {
        question: 'Why is data masking used?',
        options: ['To encrypt data', 'To delete data', 'To protect data in non-production environments', 'To share data'],
        correct: 2,
        explanation: 'Data masking is used to replace sensitive data with fake data for development and testing purposes.',
      },
      {
        question: 'What is tokenization?',
        options: ['Encrypting data', 'Replacing sensitive data with a token', 'Hashing data', 'Deleting data'],
        correct: 1,
        explanation: 'Tokenization replaces sensitive data with a unique, non-sensitive token.',
      },
    ],
    passingScore: 80,
  },
};