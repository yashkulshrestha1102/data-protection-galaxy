// data/certificate-course-full.ts

export interface Lesson {
  id: number;
  title: string;
  duration: string;
  type: 'video' | 'reading' | 'practical' | 'assignment' | 'quiz';
  content: string;
  resources?: string[];
}

export interface Assignment {
  id: number;
  title: string;
  description: string;
  deliverables: string[];
}

export interface Module {
  id: number;
  title: string;
  description: string;
  duration: string;
  icon: string;
  isNew?: boolean;
  chapters: {
    id: number;
    title: string;
    lessons: Lesson[];
  }[];
  assignments: Assignment[];
  quiz: {
    questions: { question: string; options: string[]; correct: number }[];
    passingScore: number;
  };
  project?: {
    title: string;
    description: string;
    deliverables: string[];
  };
}

// data/certificate-course-full.ts — Add at the bottom

export const examData = {
  totalQuestions: 100,
  duration: 120, // minutes
  passingScore: 80,
  correctNeeded: 80,
};

// ===== COMPLETE 20 MODULES DATA =====
export const fullModulesData: Module[] = [
  // ===== MODULE 1: Foundation of Privacy & DPDPA =====
  {
    id: 1,
    title: 'Foundation of Privacy & DPDPA',
    description: 'Build a strong foundation in privacy concepts and understand the DPDPA framework',
    duration: '6 Hours',
    icon: 'Shield',
    chapters: [
      {
        id: 1,
        title: 'Introduction to Privacy',
        lessons: [
          { id: 1, title: 'What is Privacy?', duration: '15 min', type: 'video', content: 'Privacy is the right of individuals to control their personal information...' },
          { id: 2, title: 'Types of Privacy', duration: '20 min', type: 'reading', content: 'Physical, Information, Communication, Territorial, and Digital Privacy...' },
          { id: 3, title: 'Importance of Privacy', duration: '10 min', type: 'video', content: 'Why privacy matters in the digital age...' },
          { id: 4, title: 'Privacy vs Security', duration: '15 min', type: 'reading', content: 'Understanding the difference between privacy and security...' },
          { id: 5, title: 'Privacy Principles', duration: '20 min', type: 'video', content: 'Core principles of data protection...' },
        ],
      },
      {
        id: 2,
        title: 'Evolution of Privacy',
        lessons: [
          { id: 6, title: 'Ancient Concept of Privacy', duration: '15 min', type: 'reading', content: 'Privacy in ancient civilizations...' },
          { id: 7, title: 'International Development', duration: '20 min', type: 'video', content: 'How privacy evolved globally...' },
          { id: 8, title: 'Digital Revolution', duration: '15 min', type: 'reading', content: 'Privacy challenges in the digital age...' },
          { id: 9, title: 'Modern Privacy Challenges', duration: '20 min', type: 'video', content: 'Current privacy issues and debates...' },
        ],
      },
      {
        id: 3,
        title: 'Privacy in India',
        lessons: [
          { id: 10, title: 'Constitutional Rights', duration: '15 min', type: 'video', content: 'Privacy and the Indian Constitution...' },
          { id: 11, title: 'Article 21', duration: '20 min', type: 'reading', content: 'Right to Life and Personal Liberty...' },
          { id: 12, title: 'Right to Privacy', duration: '15 min', type: 'video', content: 'The fundamental right to privacy...' },
          { id: 13, title: 'Puttaswamy Judgment', duration: '25 min', type: 'video', content: 'The landmark Supreme Court judgment...' },
          { id: 14, title: 'Landmark Cases', duration: '20 min', type: 'reading', content: 'Key privacy cases in India...' },
        ],
      },
      {
        id: 4,
        title: 'Why Data Protection?',
        lessons: [
          { id: 15, title: 'Digital Economy', duration: '15 min', type: 'video', content: 'Data as the currency of the digital economy...' },
          { id: 16, title: 'Data Monetization', duration: '20 min', type: 'reading', content: 'How data is monetized...' },
          { id: 17, title: 'Personal Data as Asset', duration: '15 min', type: 'video', content: 'Why personal data is valuable...' },
          { id: 18, title: 'Data Breaches', duration: '20 min', type: 'reading', content: 'Impact of data breaches...' },
          { id: 19, title: 'Identity Theft', duration: '15 min', type: 'video', content: 'Understanding identity theft...' },
          { id: 20, title: 'Cyber Crimes', duration: '20 min', type: 'reading', content: 'Data-related cyber crimes...' },
          { id: 21, title: 'Privacy Risks', duration: '15 min', type: 'video', content: 'Assessing privacy risks...' },
        ],
      },
    ],
    assignments: [
      {
        id: 1,
        title: 'Personal Data Identification Exercise',
        description: 'Identify 50 types of personal data in your daily life',
        deliverables: ['List of 50 personal data types', 'Classification of data types', 'Privacy risk assessment'],
      },
    ],
    quiz: {
      questions: [
        { question: 'When was the Puttaswamy judgment delivered?', options: ['2015', '2017', '2018', '2019'], correct: 1 },
        { question: 'How many types of privacy are there?', options: ['3', '4', '5', '6'], correct: 2 },
        { question: 'Article 21 of the Indian Constitution deals with?', options: ['Right to Education', 'Right to Life', 'Right to Equality', 'Right to Freedom'], correct: 1 },
        { question: 'Privacy vs Security: Which is broader?', options: ['Privacy', 'Security', 'Both are same', 'Neither'], correct: 0 },
        { question: 'What is data monetization?', options: ['Selling data', 'Using data for profit', 'Data analysis', 'Data storage'], correct: 1 },
      ],
      passingScore: 80,
    },
    project: {
      title: 'Privacy Risk Analysis',
      description: 'Conduct a privacy risk analysis of a real-world organization',
      deliverables: ['Risk assessment report', 'Data flow diagram', 'Risk mitigation plan'],
    },
  },
  // ===== MODULE 2: History of Data Protection =====
  {
    id: 2,
    title: 'History of Data Protection',
    description: 'Understand the global and Indian journey of data protection laws',
    duration: '5 Hours',
    icon: 'Clock',
    chapters: [
      {
        id: 1,
        title: 'Global Privacy Evolution',
        lessons: [
          { id: 1, title: 'OECD Guidelines', duration: '15 min', type: 'video', content: 'The OECD Privacy Guidelines of 1980...' },
          { id: 2, title: 'Convention 108', duration: '20 min', type: 'reading', content: 'The Council of Europe Convention 108...' },
          { id: 3, title: 'APEC Privacy Framework', duration: '15 min', type: 'video', content: 'APEC Privacy Framework and its significance...' },
          { id: 4, title: 'UN Guidelines', duration: '20 min', type: 'reading', content: 'United Nations guidelines on privacy...' },
        ],
      },
      {
        id: 2,
        title: 'GDPR Journey',
        lessons: [
          { id: 5, title: 'History of GDPR', duration: '15 min', type: 'video', content: 'How GDPR came into existence...' },
          { id: 6, title: 'GDPR Objectives', duration: '20 min', type: 'reading', content: 'Objectives of the GDPR...' },
          { id: 7, title: 'GDPR Structure', duration: '15 min', type: 'video', content: 'Understanding the GDPR structure...' },
          { id: 8, title: 'Important Articles', duration: '25 min', type: 'reading', content: 'Key articles of GDPR...' },
          { id: 9, title: 'GDPR Penalties', duration: '15 min', type: 'video', content: 'Penalty structure under GDPR...' },
          { id: 10, title: 'Lessons for India', duration: '20 min', type: 'reading', content: 'What India can learn from GDPR...' },
        ],
      },
      {
        id: 3,
        title: "India's Journey",
        lessons: [
          { id: 11, title: 'Justice Shah Committee', duration: '15 min', type: 'video', content: 'The first committee on data protection...' },
          { id: 12, title: 'Srikrishna Committee', duration: '20 min', type: 'reading', content: 'The Srikrishna Committee Report 2018...' },
          { id: 13, title: 'PDP Bill 2018', duration: '15 min', type: 'video', content: 'The Personal Data Protection Bill 2018...' },
          { id: 14, title: 'PDP Bill 2019', duration: '20 min', type: 'reading', content: 'The Personal Data Protection Bill 2019...' },
          { id: 15, title: 'JPC Review', duration: '15 min', type: 'video', content: 'Joint Parliamentary Committee review...' },
          { id: 16, title: 'DPDP Bill', duration: '20 min', type: 'reading', content: 'The Digital Personal Data Protection Bill...' },
          { id: 17, title: 'DPDPA 2023', duration: '15 min', type: 'video', content: 'The final DPDPA 2023...' },
          { id: 18, title: 'Timeline', duration: '10 min', type: 'reading', content: 'Complete timeline of India\'s data protection journey...' },
        ],
      },
    ],
    assignments: [
      {
        id: 1,
        title: 'Create Privacy Timeline Poster',
        description: 'Create a visual timeline of data protection evolution globally and in India',
        deliverables: ['Timeline poster', 'Key milestones', 'Comparative analysis'],
      },
    ],
    quiz: {
      questions: [
        { question: 'In which year were the OECD Guidelines published?', options: ['1970', '1980', '1990', '2000'], correct: 1 },
        { question: 'The Srikrishna Committee Report was published in:', options: ['2016', '2017', '2018', '2019'], correct: 2 },
        { question: 'Convention 108 was adopted in which year?', options: ['1981', '1991', '2001', '2011'], correct: 0 },
        { question: 'What is the maximum fine under GDPR?', options: ['€10M or 2%', '€15M or 3%', '€20M or 4%', '€25M or 5%'], correct: 2 },
        { question: 'The Justice Shah Committee was formed in:', options: ['2010', '2011', '2012', '2013'], correct: 1 },
      ],
      passingScore: 80,
    },
    project: {
      title: 'Timeline Project',
      description: 'Create a comprehensive timeline of data protection evolution',
      deliverables: ['Visual timeline', 'Key events summary', 'Comparative analysis'],
    },
  },
  // ===== MODULE 3: Constitution & Legal Background =====
  {
    id: 3,
    title: 'Constitution & Legal Background',
    description: 'Understand the constitutional and legal foundations of data protection in India',
    duration: '6 Hours',
    icon: 'Building',
    chapters: [
      {
        id: 1,
        title: 'Constitutional Provisions',
        lessons: [
          { id: 1, title: 'Article 14 - Right to Equality', duration: '15 min', type: 'video', content: 'Understanding Article 14...' },
          { id: 2, title: 'Article 19 - Freedom of Speech', duration: '20 min', type: 'reading', content: 'Article 19 and its implications...' },
          { id: 3, title: 'Article 21 - Right to Life', duration: '25 min', type: 'video', content: 'Article 21 and the right to privacy...' },
          { id: 4, title: 'Natural Justice', duration: '15 min', type: 'reading', content: 'Principles of natural justice...' },
          { id: 5, title: 'Reasonable Restriction', duration: '20 min', type: 'video', content: 'Reasonable restrictions on rights...' },
          { id: 6, title: 'Fundamental Rights', duration: '15 min', type: 'reading', content: 'Overview of fundamental rights...' },
          { id: 7, title: 'Constitutional Morality', duration: '20 min', type: 'video', content: 'Understanding constitutional morality...' },
        ],
      },
      {
        id: 2,
        title: 'Landmark Case Laws',
        lessons: [
          { id: 8, title: 'Puttaswamy Case', duration: '25 min', type: 'video', content: 'Detailed analysis of the Puttaswamy judgment...' },
          { id: 9, title: 'Aadhaar Case', duration: '20 min', type: 'reading', content: 'Aadhaar and privacy implications...' },
          { id: 10, title: 'PUCL Case', duration: '15 min', type: 'video', content: 'PUCL v. Union of India...' },
          { id: 11, title: 'Shreya Singhal Case', duration: '20 min', type: 'reading', content: 'Shreya Singhal v. Union of India...' },
          { id: 12, title: 'Anuradha Bhasin Case', duration: '15 min', type: 'video', content: 'Anuradha Bhasin v. Union of India...' },
        ],
      },
    ],
    assignments: [
      {
        id: 1,
        title: 'Case Brief Writing',
        description: 'Write a detailed case brief of the Puttaswamy judgment',
        deliverables: ['Case summary', 'Key holdings', 'Constitutional analysis', 'Implications'],
      },
    ],
    quiz: {
      questions: [
        { question: 'Article 21 of the Indian Constitution deals with:', options: ['Right to Equality', 'Right to Life', 'Freedom of Speech', 'Right to Education'], correct: 1 },
        { question: 'The Puttaswamy judgment was delivered by:', options: ['5-Judge Bench', '7-Judge Bench', '9-Judge Bench', '11-Judge Bench'], correct: 2 },
        { question: 'Article 19 guarantees:', options: ['Right to Privacy', 'Freedom of Speech', 'Right to Education', 'Right to Work'], correct: 1 },
        { question: 'The Aadhaar case was decided in:', options: ['2016', '2017', '2018', '2019'], correct: 1 },
        { question: 'PUCL stands for:', options: ['People\'s Union for Civil Liberties', 'Public Union for Civil Law', 'People\'s Union for Constitutional Law', 'Public Union for Civil Liberties'], correct: 0 },
      ],
      passingScore: 80,
    },
  },
  // ===== MODULE 4: Complete DPDPA Act =====
  {
    id: 4,
    title: 'Complete DPDPA Act',
    description: 'Read and understand every section of the DPDPA 2023 in detail',
    duration: '10 Hours',
    icon: 'FileText',
    chapters: [
      {
        id: 1,
        title: 'Reading the Act',
        lessons: [
          { id: 1, title: 'Section-wise Explanation', duration: '30 min', type: 'video', content: 'Complete section-by-section analysis...' },
          { id: 2, title: 'Every Clause Explained', duration: '25 min', type: 'reading', content: 'Understanding each clause...' },
          { id: 3, title: 'Illustrations & Examples', duration: '20 min', type: 'video', content: 'Practical illustrations of provisions...' },
          { id: 4, title: 'Understanding Exceptions', duration: '15 min', type: 'reading', content: 'Exceptions and their interpretation...' },
        ],
      },
      {
        id: 2,
        title: 'Key Definitions',
        lessons: [
          { id: 5, title: 'Digital Personal Data', duration: '15 min', type: 'video', content: 'Definition of digital personal data...' },
          { id: 6, title: 'Processing', duration: '10 min', type: 'reading', content: 'Understanding processing...' },
          { id: 7, title: 'Consent', duration: '15 min', type: 'video', content: 'Definition and requirements of consent...' },
          { id: 8, title: 'Notice', duration: '10 min', type: 'reading', content: 'What constitutes valid notice...' },
          { id: 9, title: 'Data Fiduciary', duration: '15 min', type: 'video', content: 'Who is a Data Fiduciary...' },
          { id: 10, title: 'Processor', duration: '10 min', type: 'reading', content: 'Understanding the Processor role...' },
          { id: 11, title: 'Child & Guardian', duration: '15 min', type: 'video', content: 'Definitions related to children...' },
          { id: 12, title: 'Consent Manager', duration: '10 min', type: 'reading', content: 'Role of Consent Manager...' },
          { id: 13, title: 'Significant Data Fiduciary', duration: '15 min', type: 'video', content: 'What makes a Data Fiduciary significant...' },
        ],
      },
    ],
    assignments: [
      {
        id: 1,
        title: 'Summarize Entire Act',
        description: 'Create a comprehensive summary of the DPDPA 2023',
        deliverables: ['Section-wise summary', 'Key provisions', 'Practical implications'],
      },
    ],
    quiz: {
      questions: [
        { question: 'How many sections are there in DPDPA 2023?', options: ['30', '32', '34', '36'], correct: 2 },
        { question: 'Who is a Data Fiduciary?', options: ['Person processing data', 'Person determining purpose', 'Person storing data', 'Person transferring data'], correct: 1 },
        { question: 'Consent must be:', options: ['Free, specific, informed', 'Free, general, informed', 'Specific, general, informed', 'Free, specific, general'], correct: 0 },
        { question: 'Children are defined as individuals under:', options: ['18 years', '16 years', '14 years', '12 years'], correct: 0 },
        { question: 'What is the role of a Consent Manager?', options: ['Store consent', 'Manage consent', 'Delete consent', 'Process consent'], correct: 1 },
      ],
      passingScore: 80,
    },
  },
  // ===== MODULE 5: Consent Management Framework =====
  {
    id: 5,
    title: 'Consent Management Framework',
    description: 'Learn how to design and implement consent management systems',
    duration: '8 Hours',
    icon: 'CheckCircle',
    isNew: true,
    chapters: [
      {
        id: 1,
        title: 'Consent Architecture',
        lessons: [
          { id: 1, title: 'Consent Collection', duration: '15 min', type: 'video', content: 'Best practices for collecting consent...' },
          { id: 2, title: 'Consent Withdrawal', duration: '20 min', type: 'reading', content: 'How to enable easy consent withdrawal...' },
          { id: 3, title: 'Consent Dashboard', duration: '25 min', type: 'video', content: 'Building a user-friendly consent dashboard...' },
          { id: 4, title: 'Consent Lifecycle', duration: '15 min', type: 'reading', content: 'Understanding the consent lifecycle...' },
          { id: 5, title: 'Consent Receipts', duration: '20 min', type: 'video', content: 'Issuing and managing consent receipts...' },
          { id: 6, title: 'Logging & Audit Trail', duration: '15 min', type: 'reading', content: 'Maintaining consent logs...' },
          { id: 7, title: 'Revocation', duration: '10 min', type: 'video', content: 'Consent revocation process...' },
        ],
      },
      {
        id: 2,
        title: 'Notice & Accessibility',
        lessons: [
          { id: 8, title: 'Notice Writing', duration: '20 min', type: 'video', content: 'How to write effective privacy notices...' },
          { id: 9, title: 'Layered Notices', duration: '15 min', type: 'reading', content: 'Designing layered notices...' },
          { id: 10, title: 'Multilingual Notice', duration: '20 min', type: 'video', content: 'Creating notices in multiple languages...' },
          { id: 11, title: 'Accessibility', duration: '15 min', type: 'reading', content: 'Making notices accessible to all...' },
        ],
      },
    ],
    assignments: [
      {
        id: 1,
        title: 'Build Consent Flow',
        description: 'Design a complete consent management flow for a web application',
        deliverables: ['Consent collection UI', 'Consent dashboard design', 'Consent withdrawal process', 'Audit trail design'],
      },
    ],
    quiz: {
      questions: [
        { question: 'What is the first step in consent management?', options: ['Collection', 'Withdrawal', 'Logging', 'Dashboard'], correct: 0 },
        { question: 'Layered notices help with:', options: ['Legal compliance', 'User understanding', 'Data storage', 'Security'], correct: 1 },
        { question: 'Consent receipts are important for:', options: ['Legal evidence', 'User trust', 'Data storage', 'Security'], correct: 0 },
        { question: 'Accessibility in notices means:', options: ['Easy to find', 'Easy to understand', 'Easy to read', 'All of the above'], correct: 3 },
        { question: 'Consent dashboard should allow:', options: ['View consent', 'Withdraw consent', 'Modify consent', 'All of the above'], correct: 3 },
      ],
      passingScore: 80,
    },
    project: {
      title: 'Design Consent Dashboard',
      description: 'Create a comprehensive consent management dashboard for users',
      deliverables: ['Dashboard design', 'User flow', 'Consent display', 'Withdrawal mechanism'],
    },
  },
  // ===== MODULE 6: Rights & Duties of Data Principal =====
  {
    id: 6,
    title: 'Rights & Duties of Data Principal',
    description: 'Understand the rights of individuals and their duties under DPDPA',
    duration: '6 Hours',
    icon: 'Users',
    chapters: [
      {
        id: 1,
        title: 'Data Principal Rights',
        lessons: [
          { id: 1, title: 'Right to Access', duration: '15 min', type: 'video', content: 'The right to access personal data...' },
          { id: 2, title: 'Right to Correction', duration: '15 min', type: 'reading', content: 'The right to correct inaccurate data...' },
          { id: 3, title: 'Right to Erasure', duration: '15 min', type: 'video', content: 'The right to be forgotten...' },
          { id: 4, title: 'Right to Nomination', duration: '10 min', type: 'reading', content: 'The right to nominate a representative...' },
          { id: 5, title: 'Right to Grievance', duration: '15 min', type: 'video', content: 'The right to file grievances...' },
          { id: 6, title: 'Right to Complaint', duration: '15 min', type: 'reading', content: 'The right to complain to the Board...' },
        ],
      },
      {
        id: 2,
        title: 'Duties of Data Principal',
        lessons: [
          { id: 7, title: 'False Information', duration: '15 min', type: 'video', content: 'Duty to provide accurate information...' },
          { id: 8, title: 'False Complaints', duration: '15 min', type: 'reading', content: 'Liability for false complaints...' },
          { id: 9, title: 'Legal Liability', duration: '15 min', type: 'video', content: 'Understanding legal liability...' },
        ],
      },
    ],
    assignments: [
      {
        id: 1,
        title: 'Handle 10 User Requests',
        description: 'Simulate handling 10 different data principal rights requests',
        deliverables: ['Request log', 'Response templates', 'Time tracking', 'Resolution summary'],
      },
    ],
    quiz: {
      questions: [
        { question: 'How many rights do data principals have under DPDPA?', options: ['3', '4', '5', '6'], correct: 2 },
        { question: 'The right to erasure is also known as:', options: ['Right to delete', 'Right to be forgotten', 'Right to remove', 'Right to correct'], correct: 1 },
        { question: 'Nomination allows:', options: ['Appoint a representative', 'Transfer data', 'Withdraw consent', 'File complaint'], correct: 0 },
        { question: 'What is the duty of a data principal?', options: ['Provide false information', 'Make false complaints', 'Provide accurate information', 'Ignore data rights'], correct: 2 },
        { question: 'Grievance redressal is:', options: ['A right', 'A duty', 'Both', 'Neither'], correct: 0 },
      ],
      passingScore: 80,
    },
    project: {
      title: 'Create Rights Portal',
      description: 'Design a portal where data principals can exercise all their rights',
      deliverables: ['Portal design', 'Request forms', 'Tracking dashboard', 'Notification system'],
    },
  },
  // ===== MODULE 7: Obligations of Data Fiduciary =====
  {
    id: 7,
    title: 'Obligations of Data Fiduciary',
    description: 'Learn all obligations of data fiduciaries under DPDPA',
    duration: '10 Hours',
    icon: 'Building',
    chapters: [
      {
        id: 1,
        title: 'Security Safeguards',
        lessons: [
          { id: 1, title: 'Encryption', duration: '15 min', type: 'video', content: 'Implementing encryption...' },
          { id: 2, title: 'Authentication', duration: '15 min', type: 'reading', content: 'Authentication mechanisms...' },
          { id: 3, title: 'Logging', duration: '10 min', type: 'video', content: 'Maintaining logs...' },
          { id: 4, title: 'Monitoring', duration: '15 min', type: 'reading', content: 'Continuous monitoring...' },
          { id: 5, title: 'Access Control', duration: '20 min', type: 'video', content: 'Implementing access controls...' },
        ],
      },
      {
        id: 2,
        title: 'Data Management',
        lessons: [
          { id: 6, title: 'Purpose Limitation', duration: '15 min', type: 'video', content: 'Purpose limitation principle...' },
          { id: 7, title: 'Storage Limitation', duration: '15 min', type: 'reading', content: 'Storage limitation principle...' },
          { id: 8, title: 'Deletion', duration: '10 min', type: 'video', content: 'Deletion requirements...' },
          { id: 9, title: 'Retention', duration: '15 min', type: 'reading', content: 'Data retention policies...' },
        ],
      },
      {
        id: 3,
        title: 'Contractual Obligations',
        lessons: [
          { id: 10, title: 'Processor Contracts', duration: '20 min', type: 'video', content: 'Contracts with processors...' },
          { id: 11, title: 'Vendor Due Diligence', duration: '15 min', type: 'reading', content: 'Vendor assessment...' },
          { id: 12, title: 'Children Data', duration: '20 min', type: 'video', content: 'Processing children data...' },
          { id: 13, title: 'Parental Consent', duration: '15 min', type: 'reading', content: 'Parental consent requirements...' },
          { id: 14, title: 'Advertising Restrictions', duration: '10 min', type: 'video', content: 'Restrictions on advertising to children...' },
        ],
      },
    ],
    assignments: [
      {
        id: 1,
        title: 'Company Compliance Checklist',
        description: 'Create a comprehensive compliance checklist for your organization',
        deliverables: ['Security checklist', 'Data management checklist', 'Contractual checklist', 'Children data checklist'],
      },
    ],
    quiz: {
      questions: [
        { question: 'Encryption is a:', options: ['Security safeguard', 'Data management', 'Contractual obligation', 'Processing method'], correct: 0 },
        { question: 'Purpose limitation means:', options: ['Limit data collection', 'Limit data use', 'Limit data storage', 'Limit data sharing'], correct: 1 },
        { question: 'Vendor due diligence is:', options: ['Optional', 'Mandatory', 'Recommended', 'Not required'], correct: 1 },
        { question: 'Children data requires:', options: ['Simple consent', 'Parental consent', 'No consent', 'Government consent'], correct: 1 },
        { question: 'Storage limitation means:', options: ['Store all data', 'Store limited data', 'Store data for limited time', 'Store no data'], correct: 2 },
      ],
      passingScore: 80,
    },
    project: {
      title: 'Company Compliance Checklist',
      description: 'Create a comprehensive compliance checklist for your organization',
      deliverables: ['Security checklist', 'Data management checklist', 'Contractual checklist', 'Children data checklist'],
    },
  },
  // ===== MODULE 8: Significant Data Fiduciary (SDF) =====
  {
    id: 8,
    title: 'Significant Data Fiduciary (SDF)',
    description: 'Understand enhanced obligations for Significant Data Fiduciaries',
    duration: '6 Hours',
    icon: 'Star',
    chapters: [
      {
        id: 1,
        title: 'SDF Framework',
        lessons: [
          { id: 1, title: 'Government Notification', duration: '15 min', type: 'video', content: 'How SDFs are notified...' },
          { id: 2, title: 'Eligibility Criteria', duration: '20 min', type: 'reading', content: 'Who qualifies as SDF...' },
          { id: 3, title: 'Risk Assessment', duration: '15 min', type: 'video', content: 'SDF risk assessment...' },
          { id: 4, title: 'DPO Requirements', duration: '20 min', type: 'reading', content: 'DPO for SDFs...' },
          { id: 5, title: 'Independent Audit', duration: '15 min', type: 'video', content: 'Audit requirements for SDFs...' },
        ],
      },
      {
        id: 2,
        title: 'SDF Compliance',
        lessons: [
          { id: 6, title: 'DPIA for SDFs', duration: '20 min', type: 'video', content: 'Data Protection Impact Assessments...' },
          { id: 7, title: 'Compliance Reporting', duration: '15 min', type: 'reading', content: 'Reporting requirements...' },
          { id: 8, title: 'Governance Framework', duration: '20 min', type: 'video', content: 'SDF governance framework...' },
        ],
      },
    ],
    assignments: [
      {
        id: 1,
        title: 'SDF Readiness Assessment',
        description: 'Assess if your organization qualifies as an SDF and prepare for compliance',
        deliverables: ['Eligibility assessment', 'Gap analysis', 'Compliance roadmap'],
      },
    ],
    quiz: {
      questions: [
        { question: 'SDF notification is done by:', options: ['Board', 'Government', 'SDF itself', 'Individual'], correct: 1 },
        { question: 'SDFs require:', options: ['DPO', 'Audit', 'DPIA', 'All of the above'], correct: 3 },
        { question: 'Independent audit for SDFs is:', options: ['Optional', 'Mandatory', 'Recommended', 'Not required'], correct: 1 },
        { question: 'DPIA for SDFs must be:', options: ['Simple', 'Detailed', 'Both', 'None'], correct: 1 },
        { question: 'SDF stands for:', options: ['Significant Data Fiduciary', 'Simple Data Fiduciary', 'Standard Data Fiduciary', 'Special Data Fiduciary'], correct: 0 },
      ],
      passingScore: 80,
    },
    project: {
      title: 'Create DPIA Report',
      description: 'Create a comprehensive DPIA report for a significant data fiduciary',
      deliverables: ['DPIA report', 'Risk assessment', 'Mitigation plan', 'Implementation roadmap'],
    },
  },
  // ===== MODULE 9: Data Protection Board =====
  {
    id: 9,
    title: 'Data Protection Board',
    description: 'Understand the structure, functions, and proceedings of the Data Protection Board',
    duration: '5 Hours',
    icon: 'Scale',
    chapters: [
      {
        id: 1,
        title: 'Board Structure',
        lessons: [
          { id: 1, title: 'Composition', duration: '15 min', type: 'video', content: 'Board composition...' },
          { id: 2, title: 'Appointment', duration: '15 min', type: 'reading', content: 'Appointment process...' },
          { id: 3, title: 'Tenure', duration: '10 min', type: 'video', content: 'Tenure of Board members...' },
        ],
      },
      {
        id: 2,
        title: 'Board Proceedings',
        lessons: [
          { id: 4, title: 'Complaint Process', duration: '20 min', type: 'video', content: 'How complaints are filed and handled...' },
          { id: 5, title: 'Orders', duration: '15 min', type: 'reading', content: 'Types of orders issued...' },
          { id: 6, title: 'Appeals', duration: '15 min', type: 'video', content: 'Appeals against Board orders...' },
          { id: 7, title: 'Investigation', duration: '20 min', type: 'reading', content: 'Investigation process...' },
          { id: 8, title: 'Enforcement', duration: '15 min', type: 'video', content: 'Enforcement powers...' },
          { id: 9, title: 'Penalties', duration: '20 min', type: 'reading', content: 'Penalty framework...' },
        ],
      },
    ],
    assignments: [
      {
        id: 1,
        title: 'Case Study Analysis',
        description: 'Analyze a hypothetical Board proceeding',
        deliverables: ['Case summary', 'Legal analysis', 'Possible outcomes'],
      },
    ],
    quiz: {
      questions: [
        { question: 'The Data Protection Board is established under:', options: ['Section 8', 'Section 10', 'Section 12', 'Section 15'], correct: 1 },
        { question: 'Who appoints Board members?', options: ['President', 'Prime Minister', 'Central Government', 'State Government'], correct: 2 },
        { question: 'Appeals against Board orders go to:', options: ['Supreme Court', 'High Court', 'Appellate Tribunal', 'Central Government'], correct: 2 },
        { question: 'The Board can impose penalties up to:', options: ['₹100 crore', '₹200 crore', '₹250 crore', '₹500 crore'], correct: 2 },
        { question: 'Board members are appointed for:', options: ['2 years', '3 years', '4 years', '5 years'], correct: 3 },
      ],
      passingScore: 80,
    },
  },
  // ===== MODULE 10: Penalties & Enforcement =====
  {
    id: 10,
    title: 'Penalties & Enforcement',
    description: 'Understand the penalty framework and enforcement mechanisms',
    duration: '5 Hours',
    icon: 'AlertTriangle',
    chapters: [
      {
        id: 1,
        title: 'Penalty Framework',
        lessons: [
          { id: 1, title: 'Penalty Matrix', duration: '20 min', type: 'video', content: 'Understanding the penalty matrix...' },
          { id: 2, title: 'Fine Calculation', duration: '15 min', type: 'reading', content: 'How fines are calculated...' },
          { id: 3, title: 'Grounds for Penalty', duration: '20 min', type: 'video', content: 'Grounds for imposing penalties...' },
          { id: 4, title: 'Mitigation', duration: '15 min', type: 'reading', content: 'Factors that can mitigate penalties...' },
        ],
      },
      {
        id: 2,
        title: 'Enforcement',
        lessons: [
          { id: 5, title: 'Enforcement Process', duration: '20 min', type: 'video', content: 'How enforcement works...' },
          { id: 6, title: 'Case Studies', duration: '25 min', type: 'reading', content: 'Real-world enforcement cases...' },
        ],
      },
    ],
    assignments: [
      {
        id: 1,
        title: 'Penalty Analysis',
        description: 'Analyze a scenario and determine applicable penalties',
        deliverables: ['Scenario analysis', 'Penalty calculation', 'Mitigation recommendations'],
      },
    ],
    quiz: {
      questions: [
        { question: 'Maximum penalty for a data fiduciary is:', options: ['₹50 crore', '₹100 crore', '₹250 crore', '₹500 crore'], correct: 2 },
        { question: 'Penalty is determined by:', options: ['Board', 'Court', 'Government', 'Commissioner'], correct: 0 },
        { question: 'Mitigation factors include:', options: ['Intent', 'Cooperation', 'First violation', 'All of the above'], correct: 3 },
        { question: 'Enforcement is done by:', options: ['Police', 'Board', 'Court', 'Government'], correct: 1 },
        { question: 'Appeals against penalties can be made:', options: ['Within 30 days', 'Within 45 days', 'Within 60 days', 'Within 90 days'], correct: 2 },
      ],
      passingScore: 80,
    },
  },
  // ===== MODULE 11-20 (Simplified for brevity, but structure is complete) =====
  // MODULE 11: Cross Border Data Transfer
  {
    id: 11,
    title: 'Cross Border Data Transfer',
    description: 'Understand the rules and requirements for cross-border data transfers',
    duration: '5 Hours',
    icon: 'Globe',
    chapters: [
      {
        id: 1,
        title: 'Transfer Rules',
        lessons: [
          { id: 1, title: 'Transfer to Restricted Countries', duration: '20 min', type: 'video', content: 'Rules for restricted countries...' },
          { id: 2, title: 'Cloud Storage', duration: '15 min', type: 'reading', content: 'Cloud storage requirements...' },
          { id: 3, title: 'International Vendors', duration: '15 min', type: 'video', content: 'Vendor requirements...' },
        ],
      },
    ],
    assignments: [],
    quiz: { questions: [{ question: 'Cross-border transfer rules are under Section:', options: ['14', '15', '16', '17'], correct: 2 }], passingScore: 80 },
  },
  // MODULE 12: Privacy Engineering
  {
    id: 12,
    title: 'Privacy Engineering',
    description: 'Learn technical implementation of data protection',
    duration: '10 Hours',
    icon: 'Wrench',
    chapters: [
      {
        id: 1,
        title: 'Technical Controls',
        lessons: [
          { id: 1, title: 'Encryption', duration: '20 min', type: 'video', content: 'Encryption implementation...' },
          { id: 2, title: 'Hashing', duration: '15 min', type: 'reading', content: 'Hashing techniques...' },
          { id: 3, title: 'Masking', duration: '15 min', type: 'video', content: 'Data masking...' },
          { id: 4, title: 'Tokenization', duration: '15 min', type: 'reading', content: 'Tokenization techniques...' },
        ],
      },
    ],
    assignments: [],
    quiz: { questions: [{ question: 'Encryption is a:', options: ['Technical control', 'Legal requirement', 'Organizational control', 'Contractual control'], correct: 0 }], passingScore: 80 },
  },
  // MODULE 13: Data Governance
  {
    id: 13,
    title: 'Data Governance',
    description: 'Learn how to establish data governance frameworks',
    duration: '8 Hours',
    icon: 'Database',
    chapters: [
      {
        id: 1,
        title: 'Data Inventory',
        lessons: [
          { id: 1, title: 'Data Mapping', duration: '20 min', type: 'video', content: 'Data mapping techniques...' },
          { id: 2, title: 'Metadata Management', duration: '15 min', type: 'reading', content: 'Managing metadata...' },
          { id: 3, title: 'Data Classification', duration: '20 min', type: 'video', content: 'Classifying data...' },
        ],
      },
    ],
    assignments: [],
    quiz: { questions: [{ question: 'Data mapping helps:', options: ['Understand data flows', 'Store data', 'Delete data', 'Share data'], correct: 0 }], passingScore: 80 },
  },
  // MODULE 14: Privacy Operations
  {
    id: 14,
    title: 'Privacy Operations',
    description: 'Learn operational aspects of data protection compliance',
    duration: '8 Hours',
    icon: 'BarChart',
    chapters: [
      {
        id: 1,
        title: 'Compliance Monitoring',
        lessons: [
          { id: 1, title: 'Vendor Assessment', duration: '15 min', type: 'video', content: 'Assessing vendors...' },
          { id: 2, title: 'Internal Policies', duration: '20 min', type: 'reading', content: 'Developing policies...' },
          { id: 3, title: 'Training & Awareness', duration: '15 min', type: 'video', content: 'Training programs...' },
        ],
      },
    ],
    assignments: [],
    quiz: { questions: [{ question: 'Vendor assessment is:', options: ['Required', 'Recommended', 'Optional', 'Not needed'], correct: 0 }], passingScore: 80 },
  },
  // MODULE 15: Incident Response
  {
    id: 15,
    title: 'Incident Response',
    description: 'Learn how to respond to data breaches and security incidents',
    duration: '8 Hours',
    icon: 'AlertTriangle',
    chapters: [
      {
        id: 1,
        title: 'Incident Management',
        lessons: [
          { id: 1, title: 'Incident Detection', duration: '15 min', type: 'video', content: 'Detecting incidents...' },
          { id: 2, title: 'Containment', duration: '15 min', type: 'reading', content: 'Containing incidents...' },
          { id: 3, title: 'Recovery', duration: '15 min', type: 'video', content: 'Recovering from incidents...' },
          { id: 4, title: 'Notification', duration: '20 min', type: 'reading', content: 'Notification requirements...' },
        ],
      },
    ],
    assignments: [],
    quiz: { questions: [{ question: 'Breach notification timeline is:', options: ['24 hours', '48 hours', '72 hours', '96 hours'], correct: 2 }], passingScore: 80 },
  },
  // MODULE 16: Documentation & Compliance
  {
    id: 16,
    title: 'Documentation & Compliance',
    description: 'Learn to create all required compliance documents',
    duration: '10 Hours',
    icon: 'FileText',
    chapters: [
      {
        id: 1,
        title: 'Required Documents',
        lessons: [
          { id: 1, title: 'Privacy Policy', duration: '20 min', type: 'video', content: 'Drafting privacy policies...' },
          { id: 2, title: 'Cookie Policy', duration: '15 min', type: 'reading', content: 'Cookie policies...' },
          { id: 3, title: 'Vendor Agreements', duration: '20 min', type: 'video', content: 'Vendor agreement drafting...' },
        ],
      },
    ],
    assignments: [],
    quiz: { questions: [{ question: 'Privacy policy must include:', options: ['Data collection', 'Data use', 'Data rights', 'All of the above'], correct: 3 }], passingScore: 80 },
  },
  // MODULE 17: AI & DPDPA
  {
    id: 17,
    title: 'AI & DPDPA',
    description: 'Understand the intersection of AI and data protection',
    duration: '8 Hours',
    icon: 'Brain',
    isNew: true,
    chapters: [
      {
        id: 1,
        title: 'AI Governance',
        lessons: [
          { id: 1, title: 'Generative AI', duration: '20 min', type: 'video', content: 'Generative AI and privacy...' },
          { id: 2, title: 'LLMs & ChatGPT', duration: '15 min', type: 'reading', content: 'LLM privacy concerns...' },
          { id: 3, title: 'AI Risk Assessment', duration: '20 min', type: 'video', content: 'Assessing AI risks...' },
        ],
      },
    ],
    assignments: [],
    quiz: { questions: [{ question: 'AI systems must:', options: ['Comply with DPDPA', 'Ignore DPDPA', 'Partially comply', 'No compliance needed'], correct: 0 }], passingScore: 80 },
  },
  // MODULE 18: Global Privacy Laws
  {
    id: 18,
    title: 'Global Privacy Laws',
    description: 'Compare DPDPA with global privacy frameworks',
    duration: '8 Hours',
    icon: 'Globe',
    chapters: [
      {
        id: 1,
        title: 'International Frameworks',
        lessons: [
          { id: 1, title: 'GDPR', duration: '20 min', type: 'video', content: 'GDPR overview...' },
          { id: 2, title: 'CCPA', duration: '15 min', type: 'reading', content: 'CCPA overview...' },
          { id: 3, title: 'Singapore PDPA', duration: '20 min', type: 'video', content: 'Singapore PDPA...' },
        ],
      },
    ],
    assignments: [],
    quiz: { questions: [{ question: 'GDPR is from:', options: ['EU', 'US', 'India', 'Singapore'], correct: 0 }], passingScore: 80 },
  },
  // MODULE 19: Industry Compliance
  {
    id: 19,
    title: 'Industry Compliance',
    description: 'Learn sector-specific compliance requirements',
    duration: '10 Hours',
    icon: 'Building',
    chapters: [
      {
        id: 1,
        title: 'Sector Requirements',
        lessons: [
          { id: 1, title: 'Healthcare', duration: '15 min', type: 'video', content: 'Healthcare compliance...' },
          { id: 2, title: 'Banking', duration: '15 min', type: 'reading', content: 'Banking compliance...' },
          { id: 3, title: 'E-Commerce', duration: '20 min', type: 'video', content: 'E-Commerce compliance...' },
        ],
      },
    ],
    assignments: [],
    quiz: { questions: [{ question: 'Healthcare compliance includes:', options: ['Patient data', 'Financial data', 'Marketing data', 'Location data'], correct: 0 }], passingScore: 80 },
  },
  // MODULE 20: Master Capstone Project
  {
    id: 20,
    title: 'Master Capstone Project',
    description: 'Build a complete DPDPA compliance program from scratch',
    duration: '20 Hours',
    icon: 'Award',
    chapters: [
      {
        id: 1,
        title: 'Capstone Project',
        lessons: [
          { id: 1, title: 'Project Overview', duration: '15 min', type: 'video', content: 'Understanding the capstone project...' },
          { id: 2, title: 'Data Inventory', duration: '20 min', type: 'reading', content: 'Creating data inventory...' },
          { id: 3, title: 'Compliance Plan', duration: '25 min', type: 'video', content: 'Building the compliance plan...' },
        ],
      },
    ],
    assignments: [],
    quiz: { questions: [{ question: 'A compliance program must include:', options: ['Data inventory', 'Risk assessment', 'Policies', 'All of the above'], correct: 3 }], passingScore: 80 },
  },
];

