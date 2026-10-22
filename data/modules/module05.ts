// data/modules/module05.ts

import { Module } from '@/app/types/course';

export const module05: Module = {
  id: 5,
  title: 'Consent Management Framework',
  description:
    'Learn how to design and implement consent management systems. This module covers the complete consent lifecycle—from notice and collection to withdrawal and audit trails—along with best practices for accessible and compliant design.',
  duration: '8 Hours',
  icon: 'CheckCircle',
  isNew: true,
  learningObjectives: [
    'Design a user-friendly consent collection flow',
    'Write clear and compliant privacy notices',
    'Implement robust consent withdrawal mechanisms',
    'Maintain audit trails and consent receipts',
    'Design accessible and multilingual notices',
    'Understand the role of Consent Managers in the ecosystem',
  ],
  chapters: [
    // ============================================================
    // CHAPTER 1: CONSENT ARCHITECTURE
    // ============================================================
    {
      id: 1,
      title: 'Consent Architecture',
      lessons: [
        {
          id: 1,
          title: 'Consent Collection',
          duration: '15 min',
          type: 'video',
          description: 'Best practices for collecting valid consent without dark patterns.',
          content:
            'Collecting consent is not just about adding a checkbox. It is about designing an experience that empowers the user to make an informed choice. This lesson covers the do\'s and don\'ts of consent collection.',
          learningObjectives: [
            'Understand the principles of valid consent collection',
            'Identify and avoid dark patterns',
            'Design clear affirmative actions',
          ],
          keyTakeaways: [
            'Consent must be explicit; pre-ticked boxes are illegal.',
            'Use plain language, not complex legal jargon.',
            'Do not bundle multiple consents into one blanket checkbox.',
          ],
          sections: [
            {
              id: 'sec-1',
              title: 'The Anatomy of Good Consent',
              content: [
                {
                  type: 'paragraph',
                  content:
                    'When a user lands on your website or app, they should understand what data you are collecting and why. Consent collection must be frictionless but explicit.',
                },
                {
                  type: 'list',
                  content: 'Best Practices',
                  items: [
                    'Clear Affirmative Action: The user must click "I Agree" or toggle a switch. Silence, inactivity, or pre-ticked boxes do not count.',
                    'Granularity: Allow users to consent to specific purposes. For example, separate checkboxes for "Marketing" and "Analytics".',
                    'No Bundling: Do not force users to accept marketing tracking just to read your privacy policy.',
                    'Easy to Refuse: The "Reject" button must be as prominent as the "Accept" button.',
                  ],
                },
                {
                  type: 'callout',
                  content:
                    'The DPDPA (and global laws like GDPR) strictly prohibit "dark patterns"—design tricks that trick users into giving consent.',
                  calloutType: 'warning',
                },
              ],
            },
            {
              id: 'sec-2',
              title: 'Dark Patterns to Avoid',
              content: [
                {
                  type: 'paragraph',
                  content:
                    'Dark patterns are UI designs that subvert or impair user autonomy. Here are common ones to avoid:',
                },
                {
                  type: 'list',
                  content: 'Common Dark Patterns',
                  items: [
                    'Roach Motel: It is easy to sign up, but impossible to find the "delete account" or "withdraw consent" button.',
                    'Confirmshaming: Using guilt-tripping language like "No thanks, I prefer to stay ignorant about my privacy".',
                    'Hidden Costs: Not revealing that consenting to marketing will result in spam calls.',
                    'Trick Questions: Asking confusing double-negative questions.',
                  ],
                },
              ],
            },
          ],
          glossary: [
            { term: 'Dark Patterns', definition: 'User interface designs that are crafted to trick or manipulate users into doing things they might not otherwise do, like making a purchase or giving consent.' },
            { term: 'Granular Consent', definition: 'Consent given separately for different purposes, rather than a single "all or nothing" choice.' },
          ],
          references: [
            { title: 'DPDPA Section 6', source: 'Government of India', year: '2023' },
          ],
        },
        {
          id: 2,
          title: 'Consent Withdrawal',
          duration: '20 min',
          type: 'reading',
          description: 'The right to say "stop" must be as easy as saying "go".',
          content:
            'Under Section 6(4) of the DPDPA, the process to withdraw consent must be as easy as it was to give it. This is a critical compliance requirement that many companies fail.',
          learningObjectives: [
            'Understand the legal requirement for withdrawal',
            'Design an effective withdrawal flow',
            'Understand the technical impact of withdrawal',
          ],
          keyTakeaways: [
            'Withdrawal must be as easy as giving consent.',
            'Withdrawal must be processed "without undue delay".',
            'Withdrawal does not affect past lawful processing.',
          ],
          sections: [
            {
              id: 'sec-1',
              title: 'The Legal Requirement',
              content: [
                {
                  type: 'paragraph',
                  content:
                    'Section 6(4) is a game-changer. It stops companies from putting consent withdrawal behind 5 different customer service phone calls. If you can sign up with one click, you must be able to withdraw with one click.',
                },
                {
                  type: 'callout',
                  content:
                    'Once a user withdraws consent, the Data Fiduciary must cease processing the data for that purpose. Continuing to process it is a direct violation of the Act.',
                  calloutType: 'important',
                },
              ],
            },
            {
              id: 'sec-2',
              title: 'Implementation',
              content: [
                {
                  type: 'paragraph',
                  content:
                    'How do you actually implement this?',
                },
                {
                  type: 'list',
                  content: 'Technical Steps for Withdrawal',
                  items: [
                    'In-App Settings: Provide a "Privacy Settings" or "Consent Dashboard" link on the main menu.',
                    'One-Click Toggle: Allow users to simply toggle off the consent.',
                    'Automated Pipelines: The withdrawal must trigger a webhook or API call that stops downstream processing immediately.',
                    'Data Deletion: If the data was collected based solely on consent, withdrawal should trigger a request for erasure (unless retention is legally required).',
                  ],
                },
                {
                  type: 'example',
                  content:
                    'If a user opts out of marketing emails, your system should instantly update their status in the CRM to "unsubscribed" and remove them from the active mailing list.',
                },
              ],
            },
          ],
          glossary: [
            { term: 'Withdrawal of Consent', definition: 'The act of a Data Principal revoking their earlier permission for a Data Fiduciary to process their personal data.' },
            { term: 'Downstream Processing', definition: 'The secondary use or sharing of data after it has been initially collected.' },
          ],
          references: [
            { title: 'DPDPA Section 6(4)', source: 'Government of India', year: '2023' },
          ],
        },
        {
          id: 3,
          title: 'Consent Dashboard',
          duration: '25 min',
          type: 'video',
          description: 'Building a single pane of glass for user privacy.',
          content:
            'A consent dashboard is a UI where users can see all the data you have collected, what you are doing with it, and control their preferences.',
          learningObjectives: [
            'Design a consent dashboard',
            'Provide transparency on data sharing',
            'Enable easy management of preferences',
          ],
          keyTakeaways: [
            'A dashboard builds trust and transparency.',
            'It should list all third parties data is shared with.',
            'It must be accessible from a prominent place in the app/website.',
          ],
          sections: [
            {
              id: 'sec-1',
              title: 'What goes in a Dashboard?',
              content: [
                {
                  type: 'paragraph',
                  content:
                    'A good consent dashboard should answer these questions for the user:',
                },
                {
                  type: 'list',
                  content: 'Dashboard Features',
                  items: [
                    'What data do you have? (Profile, Location, Browsing history)',
                    'Why do you have it? (Service delivery, Marketing, Analytics)',
                    'Who is it shared with? (List of third-party vendors)',
                    'How can I delete it? (Link to erasure requests)',
                  ],
                },
              ],
            },
            {
              id: 'sec-2',
              title: 'Real-world Examples',
              content: [
                {
                  type: 'paragraph',
                  content:
                    'Google\'s "My Activity" page is a classic example of a consent dashboard. It shows what Google has collected and allows the user to delete it or turn off tracking.',
                },
                {
                  type: 'callout',
                  content:
                    'While building a full dashboard isn\'t mandatory for every small business, it is highly recommended for Data Fiduciaries handling significant amounts of user data.',
                  calloutType: 'note',
                },
              ],
            },
          ],
          glossary: [
            { term: 'Consent Dashboard', definition: 'A user interface that allows individuals to view and manage their privacy preferences and personal data.' },
          ],
          references: [
            { title: 'Privacy by Design', source: 'Ann Cavoukian', year: '2009' },
          ],
        },
        {
          id: 4,
          title: 'Consent Lifecycle',
          duration: '15 min',
          type: 'reading',
          description: 'Tracking consent from the moment it is given to the moment it is deleted.',
          content:
            'Consent is not a one-time event; it has a lifecycle. Understanding this lifecycle is essential for compliance and auditing.',
          learningObjectives: [
            'Map the consent lifecycle',
            'Understand what data to capture at each stage',
          ],
          keyTakeaways: [
            'Consent must be tracked from collection to deletion.',
            'You must be able to prove that consent was obtained.',
            'Withdrawal must be logged just like collection.',
          ],
          sections: [
            {
              id: 'sec-1',
              title: 'The 5 Stages',
              content: [
                {
                  type: 'list',
                  content: 'Consent Lifecycle',
                  items: [
                    '1. Notice: User is shown the privacy notice.',
                    '2. Collection: User gives explicit consent.',
                    '3. Storage: The consent artifact (record) is securely stored.',
                    '4. Usage: Data is processed according to the consent.',
                    '5. Withdrawal/Expiry: User withdraws consent, or the purpose is fulfilled, and processing stops.',
                  ],
                },
              ],
            },
          ],
          glossary: [
            { term: 'Consent Artifact', definition: 'A digital record that proves a user gave consent, including timestamp, IP address, and the exact text they agreed to.' },
          ],
          references: [
            { title: 'Consent Management Best Practices', source: 'IAPP', year: '2022' },
          ],
        },
        {
          id: 5,
          title: 'Consent Receipts',
          duration: '20 min',
          type: 'video',
          description: 'Giving users a receipt for their consent.',
          content:
            'A consent receipt is a document (usually digital) that is issued to the user as proof of their consent. It increases transparency and user trust.',
          learningObjectives: [
            'Understand what a consent receipt is',
            'Design the contents of a receipt',
          ],
          keyTakeaways: [
            'Consent receipts are not explicitly mandated by DPDPA, but are a great best practice.',
            'They should include the date, purpose, and data collected.',
            'They empower the user to hold the company accountable.',
          ],
          sections: [
            {
              id: 'sec-1',
              title: 'The Receipt',
              content: [
                {
                  type: 'paragraph',
                  content:
                    'When you give consent, the company emails you a "Consent Receipt" (or provides it in the app). It acts like a bill for data.',
                },
                {
                  type: 'list',
                  content: 'What a Receipt Shows',
                  items: [
                    'Receipt ID',
                    'Date and Time',
                    'Data Principal (User Name)',
                    'Data Fiduciary (Company Name)',
                    'Purpose of processing',
                    'Data elements collected',
                    'Expiry date (if any)',
                  ],
                },
              ],
            },
          ],
          glossary: [
            { term: 'Consent Receipt', definition: 'A record provided to the user documenting the consent they have given.' },
          ],
          references: [
            { title: 'Kantara Initiative', source: 'Consent Receipt Specification', year: '2020' },
          ],
        },
        {
          id: 6,
          title: 'Logging & Audit Trail',
          duration: '15 min',
          type: 'reading',
          description: 'Keeping records to prove compliance.',
          content:
            'If the Data Protection Board investigates you, you must be able to prove you had valid consent. Logging is the only way to do this.',
          learningObjectives: [
            'Understand what to log',
            'Design an audit trail',
          ],
          keyTakeaways: [
            'Log every consent event (give and withdraw).',
            'Include timestamps, IP addresses, and the exact notice version shown.',
            'Store logs securely and prevent tampering.',
          ],
          sections: [
            {
              id: 'sec-1',
              title: 'Audit Requirements',
              content: [
                {
                  type: 'paragraph',
                  content:
                    'The burden of proof is on the Data Fiduciary. If a user complains that they never gave consent, you must have the logs to prove otherwise.',
                },
                {
                  type: 'list',
                  content: 'What to Log',
                  items: [
                    'Timestamp of consent',
                    'IP address',
                    'User ID',
                    'The specific version of the Privacy Notice they agreed to',
                    'The exact action they took (e.g., clicked "Accept All")',
                  ],
                },
              ],
            },
          ],
          glossary: [
            { term: 'Audit Trail', definition: 'A chronological record of system activities that enables the reconstruction and examination of events.' },
          ],
          references: [
            { title: 'DPDPA Section 8', source: 'Government of India', year: '2023' },
          ],
        },
        {
          id: 7,
          title: 'Revocation',
          duration: '10 min',
          type: 'video',
          description: 'The technical aspects of deleting data after consent is withdrawn.',
          content:
            'What happens when a user hits "Revoke"? It must trigger a cascade of actions across your databases.',
          learningObjectives: [
            'Understand the technical flow of revocation',
            'Ensure data is deleted from backups and third parties',
          ],
          keyTakeaways: [
            'Revocation must propagate to all systems.',
            'Notify third parties to stop processing.',
            'Document the revocation event.',
          ],
          sections: [
            {
              id: 'sec-1',
              title: 'The Revocation Flow',
              content: [
                {
                  type: 'paragraph',
                  content:
                    'When consent is revoked:',
                },
                {
                  type: 'list',
                  content: 'Steps to take',
                  items: [
                    '1. Update the central consent database.',
                    '2. Send an API call to all downstream systems to stop processing.',
                    '3. If required, trigger a data deletion job.',
                    '4. Notify any third-party processors to delete the data.',
                    '5. Log the revocation event.',
                  ],
                },
              ],
            },
          ],
          glossary: [
            { term: 'Cascading Delete', definition: 'A process where deleting a primary record automatically triggers the deletion of related records across multiple systems.' },
          ],
          references: [
            { title: 'DPDPA Section 6(4)', source: 'Government of India', year: '2023' },
          ],
        },
      ],
    },

    // ============================================================
    // CHAPTER 2: NOTICE & ACCESSIBILITY
    // ============================================================
    {
      id: 2,
      title: 'Notice & Accessibility',
      lessons: [
        {
          id: 8,
          title: 'Notice Writing',
          duration: '20 min',
          type: 'video',
          description: 'How to write a privacy notice that users actually understand.',
          content:
            'Section 5 requires a clear and plain language notice. Legal jargon is not allowed. Learn how to write a notice that meets the legal requirement and is user-friendly.',
          learningObjectives: [
            'Write clear and concise privacy notices',
            'Understand the mandatory contents',
            'Avoid legal jargon',
          ],
          keyTakeaways: [
            'Use plain language.',
            'Be transparent about data collection.',
            'Include all required information.',
            'Make it accessible.',
          ],
          sections: [
            {
              id: 'sec-1',
              title: 'Structure of a Good Notice',
              content: [
                {
                  type: 'paragraph',
                  content:
                    'A good privacy notice follows a logical structure:',
                },
                {
                  type: 'list',
                  content: 'Notice Structure',
                  items: [
                    'Introduction: Who are you and what is this notice?',
                    'Data Collection: What data are you collecting?',
                    'Purpose: Why are you collecting it?',
                    'Rights: What can the user do?',
                    'Contact: How to reach the DPO/Grievance Officer?',
                  ],
                },
                {
                  type: 'callout',
                  content:
                    'Do not hide the important stuff in Paragraph 14.3(b). Put the most important information at the top.',
                  calloutType: 'tip',
                },
              ],
            },
          ],
          glossary: [
            { term: 'Plain Language', definition: 'Writing that is easy to read and understand, avoiding complex legal terms.' },
          ],
          references: [
            { title: 'DPDPA Section 5', source: 'Government of India', year: '2023' },
          ],
        },
        {
          id: 9,
          title: 'Layered Notices',
          duration: '15 min',
          type: 'reading',
          description: 'Providing information in multiple layers to avoid overwhelming users.',
          content:
            'Layered notices provide information in multiple layers, allowing users to access the information they need without reading a 50-page document.',
          learningObjectives: [
            'Understand the layered notice approach',
            'Design a layered notice',
          ],
          keyTakeaways: [
            'Layer 1: Short summary (the "just-in-time" notice).',
            'Layer 2: The full privacy policy.',
            'Layer 3: FAQs and detailed explanations.',
          ],
          sections: [
            {
              id: 'sec-1',
              title: 'The Layers',
              content: [
                {
                  type: 'paragraph',
                  content:
                    'Layered notices are a best practice globally.',
                },
                {
                  type: 'list',
                  content: 'The Three Layers',
                  items: [
                    'Layer 1: A short banner or tooltip that says "We use cookies to improve your experience. Accept / Reject / Manage".',
                    'Layer 2: The main privacy policy page with key headings.',
                    'Layer 3: Detailed FAQs, legal definitions, and data flow diagrams.',
                  ],
                },
              ],
            },
          ],
          glossary: [
            { term: 'Layered Notice', definition: 'A privacy notice that provides information in multiple layers of detail, from a short summary to a full policy.' },
          ],
          references: [
            { title: 'ICO Guidance on Layered Notices', source: 'ICO', year: '2021' },
          ],
        },
        {
          id: 10,
          title: 'Multilingual Notice',
          duration: '20 min',
          type: 'video',
          description: 'Ensuring your notices are accessible to non-English speakers.',
          content:
            'The DPDPA requires the notice to be available in English and any language listed in the Eighth Schedule of the Constitution, if the business serves those populations.',
          learningObjectives: [
            'Understand the language requirements',
            'Implement multilingual notices',
          ],
          keyTakeaways: [
            'Notices must be available in multiple languages.',
            'This is essential for accessibility and inclusion.',
            'Use professional translation services.',
          ],
          sections: [
            {
              id: 'sec-1',
              title: 'The Requirement',
              content: [
                {
                  type: 'paragraph',
                  content:
                    'Section 5(3) states that the notice must be available in English or any language specified in the Eighth Schedule to the Constitution.',
                },
                {
                  type: 'paragraph',
                  content:
                    'This means if you run a service in Tamil Nadu, you should ideally have the notice in Tamil. If you serve all of India, you should consider providing the notice in Hindi and English at a minimum.',
                },
              ],
            },
            {
              id: 'sec-2',
              title: 'Implementation',
              content: [
                {
                  type: 'paragraph',
                  content:
                    'Use a language selector on your privacy policy page. Ensure the translation is accurate and culturally appropriate. Do not just use Google Translate; get it reviewed by a legal professional.',
                },
              ],
            },
          ],
          glossary: [
            { term: 'Eighth Schedule', definition: 'The list of 22 official languages in the Indian Constitution.' },
          ],
          references: [
            { title: 'DPDPA Section 5(3)', source: 'Government of India', year: '2023' },
          ],
        },
        {
          id: 11,
          title: 'Accessibility',
          duration: '15 min',
          type: 'reading',
          description: 'Designing notices for people with disabilities.',
          content:
            'A notice is useless if the user cannot read it. Accessibility is a legal and moral requirement.',
          learningObjectives: [
            'Understand accessibility requirements',
            'Design accessible notices',
          ],
          keyTakeaways: [
            'Notices must be accessible to persons with disabilities.',
            'This is essential for legal compliance and ethical design.',
            'Use standard accessibility guidelines (WCAG).',
          ],
          sections: [
            {
              id: 'sec-1',
              title: 'The Requirements',
              content: [
                {
                  type: 'paragraph',
                  content:
                    'The DPDPA requires notices to be accessible to persons with disabilities.',
                },
                {
                  type: 'list',
                  content: 'Accessibility Best Practices',
                  items: [
                    'Screen Reader Compatible: Use semantic HTML.',
                    'High Contrast: Ensure text is readable against the background.',
                    'Keyboard Navigation: Allow users to navigate the notice without a mouse.',
                    'Plain Language: Use simple, clear text.',
                    'Audio/Video Options: Provide audio versions for people with visual impairments (if possible).',
                  ],
                },
              ],
            },
          ],
          glossary: [
            { term: 'WCAG', definition: 'Web Content Accessibility Guidelines, the international standard for web accessibility.' },
          ],
          references: [
            { title: 'WCAG 2.1', source: 'W3C', year: '2018' },
          ],
        },
      ],
    },
  ],

  // ===== MODULE ASSIGNMENTS =====
  assignments: [
    {
      id: 1,
      title: 'Build Consent Flow',
      description:
        'Design a complete consent management flow for a web application. You can draw this using a tool like Figma, Miro, or even on paper. Take a photo of your design.',
      deliverables: [
        'Consent collection UI mockup',
        'Consent dashboard design',
        'Consent withdrawal flow (flowchart)',
        'Audit trail design (what data points you will store)',
      ],
    },
  ],

  // ===== MODULE QUIZ =====
  quiz: {
    questions: [
      {
        question: 'What is the first step in consent management?',
        options: ['Collection', 'Withdrawal', 'Logging', 'Dashboard'],
        correct: 0,
        explanation: 'The first step is showing a notice and collecting consent.',
      },
      {
        question: 'Layered notices help with:',
        options: ['Legal compliance', 'User understanding', 'Data storage', 'Security'],
        correct: 1,
        explanation: 'Layered notices provide information in layers, improving user understanding.',
      },
      {
        question: 'Consent receipts are important for:',
        options: ['Legal evidence', 'User trust', 'Data storage', 'Security'],
        correct: 0,
        explanation: 'Consent receipts act as proof of consent, which is important for legal evidence and auditing.',
      },
      {
        question: 'Accessibility in notices means:',
        options: ['Easy to find', 'Easy to understand', 'Easy to read', 'All of the above'],
        correct: 3,
        explanation: 'Accessibility includes ensuring notices are easy to find, understand, read, and navigate for people with disabilities.',
      },
      {
        question: 'Consent dashboard should allow:',
        options: ['View consent', 'Withdraw consent', 'Modify consent', 'All of the above'],
        correct: 3,
        explanation: 'A consent dashboard should allow users to view, modify, and withdraw their consent.',
      },
    ],
    passingScore: 80,
  },
};