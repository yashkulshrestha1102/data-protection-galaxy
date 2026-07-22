// data/certificate-course.ts

export interface Module {
  id: number;
  title: string;
  description: string;
  icon: string;
  topics: string[];
  duration: string;
  isNew?: boolean;
}

export const modulesData: Module[] = [
  {
    id: 1,
    title: 'Foundations of DPDPA',
    description: 'Understanding India\'s Data Protection Framework',
    icon: 'Shield',
    duration: '15-20 min',
    topics: [
      'Introduction to DPDPA 2023',
      'Legislative Background & Philosophy',
      'Key Definitions & Terminology',
      'Scope and Applicability',
      'Comparison with Global Laws',
    ],
  },
  {
    id: 2,
    title: 'Rights & Obligations',
    description: 'Data Principal Rights and Fiduciary Obligations',
    icon: 'Users',
    duration: '20-25 min',
    topics: [
      'Data Principal Rights',
      'Data Fiduciary Obligations',
      'Consent Framework',
      'Legitimate Uses of Data',
      "Children's Data Protection",
    ],
  },
  {
    id: 3,
    title: 'Compliance & Governance',
    description: 'Significant Data Fiduciary, DPIA, and DPO',
    icon: 'Building',
    duration: '20-25 min',
    topics: [
      'Significant Data Fiduciary',
      'Data Protection Impact Assessment',
      'Data Protection Officer',
      'Cross-Border Transfers',
      'Record-Keeping & Audits',
    ],
  },
  {
    id: 4,
    title: 'Enforcement & Penalties',
    description: 'Data Protection Board, Investigation, and Penalties',
    icon: 'AlertTriangle',
    duration: '15-20 min',
    topics: [
      'Data Protection Board',
      'Investigation Process',
      'Penalty Framework',
      'Appeals and Remedies',
      'Enforcement Trends',
    ],
  },
  {
    id: 5,
    title: 'DPDPA Skills',
    description: 'Practical implementation and compliance skills',
    icon: 'Tool',
    duration: '25-30 min',
    isNew: true,
    topics: [
      'Data Mapping Mastery',
      'Consent Management Architecture',
      'Risk Assessment & DPIA',
      'Incident Response Management',
      'Security Safeguards',
      'Third-Party Management',
    ],
  },
  {
    id: 6,
    title: 'AI & DPDPA Compliance',
    description: 'AI lifecycle, data minimization, and AI governance',
    icon: 'Brain',
    duration: '25-30 min',
    isNew: true,
    topics: [
      'AI Lifecycle Under DPDPA',
      'Data Minimization for AI Systems',
      'Notice & Consent for AI',
      'Fairness & Bias in AI',
      'GenAI & Foundation Models',
      'AI Risk Management',
    ],
  },
];

export const examData = {
  totalQuestions: 90,
  duration: 120, // minutes
  passingScore: 85,
  correctNeeded: 77,
};