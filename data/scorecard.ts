// data/scorecard.ts

import { Shield, Users, Database, Globe, Building, AlertCircle, Scale, Lock, FileText, UserCheck, Clipboard } from 'lucide-react';

// ===== TYPE DEFINITIONS =====
type BaseQuestion = {
  id: number;
  text: string;
  description: string;
  type: 'checkbox' | 'radio-group' | 'conditional' | 'yes-no';
};

type CheckboxQuestion = BaseQuestion & {
  type: 'checkbox';
  options: { id: string; label: string; items?: string[] }[];
};

type RadioGroupQuestion = BaseQuestion & {
  type: 'radio-group';
  subOptions: { id: string; label: string }[];
};

type ConditionalQuestion = BaseQuestion & {
  type: 'conditional';
  mainOption: string;
  subOptions: { id: string; label: string }[];
};

type YesNoQuestion = BaseQuestion & {
  type: 'yes-no';
};

type Question = CheckboxQuestion | RadioGroupQuestion | ConditionalQuestion | YesNoQuestion;

type Category = {
  id: string;
  name: string;
  icon: any;
  questions: Question[];
};

// ===== DATA =====
export const scorecardData: { title: string; subtitle: string; categories: Category[] } = {
  title: 'DPDPA Compliance Scorecard',
  subtitle: 'Answer 13 questions to assess your readiness for India\'s data protection law.',
  categories: [
    // ===== 1. DATA COLLECTION =====
    {
      id: 'data-collection',
      name: 'Data Collection',
      icon: Database,
      questions: [
        {
          id: 1,
          text: 'What types of personal data does your organisation collect or process?',
          description: 'Select all that apply. Only mention headers.',
          type: 'checkbox',
          options: [
            { id: 'basic', label: 'Basic / Identity Data', items: ['Name', 'Date of birth / Age', 'Gender', 'Photograph', 'Government-issued ID details'] },
            { id: 'contact', label: 'Contact Data', items: ['Email address', 'Phone / Mobile number', 'Residential / Postal address', 'Emergency contact details'] },
            { id: 'employment', label: 'Employment / Professional Data', items: ['Employment details', 'Education & qualifications', 'Salary / compensation / payroll information'] },
            { id: 'financial', label: 'Financial Data', items: ['Bank account details', 'Payment / transaction information', 'Tax-related information', 'Credit / debit card information'] },
            { id: 'digital', label: 'Digital / Online Data', items: ['IP address', 'Device information', 'Cookies / online identifiers', 'Login / account credentials', 'Website / app usage data', 'Browsing / interaction data'] },
            { id: 'location', label: 'Location Data', items: ['GPS data / location / city / region'] },
            { id: 'health', label: 'Health & Other Sensitive-Context Data', items: ['Health / medical information', 'Biometric information', 'Disability-related information', 'Children\'s data'] },
            { id: 'behavioural', label: 'Behavioural / Preference Data', items: ['Purchase / transaction history', 'Customer preferences', 'Marketing / communication preferences', 'Behavioural / profiling information'] },
          ]
        }
      ] as Question[]
    },
    // ===== 2. CONSENT =====
    {
      id: 'consent',
      name: 'Consent',
      icon: Shield,
      questions: [
        {
          id: 2,
          text: 'Do you obtain consent for the following?',
          description: 'Select Yes or Partial for each.',
          type: 'radio-group',
          subOptions: [
            { id: 'privacy-consent', label: 'Privacy consent (via privacy policy or notice)' },
            { id: 'processing-consent', label: 'Obtain consent before processing personal data' }
          ]
        }
      ] as Question[]
    },
    // ===== 3. SECURITY MEASURES =====
    {
      id: 'security',
      name: 'Security Measures',
      icon: Lock,
      questions: [
        {
          id: 3,
          text: 'What security measures are taken to protect the data?',
          description: 'Select Yes or Partial for each.',
          type: 'radio-group',
          subOptions: [
            { id: 'encryption', label: 'Encryption and firewalls' },
            { id: 'access-control', label: 'Strict access control measures / Role Based Access Controls (RBAC)' },
            { id: 'audits', label: 'Conducting regular security audits' },
            { id: 'mfa', label: 'Multi-factor authentication' }
          ]
        }
      ] as Question[]
    },
    // ===== 4. BREACH RESPONSE =====
    {
      id: 'breach',
      name: 'Breach Response',
      icon: AlertCircle,
      questions: [
        {
          id: 4,
          text: 'What security measures are taken at the time of breach?',
          description: 'Select Yes or Partial for each.',
          type: 'radio-group',
          subOptions: [
            { id: 'breach-plan', label: 'Data breach response plan' },
            { id: 'notify-board', label: 'Notify the Data Protection Board of India' },
            { id: 'notify-individuals', label: 'Notify affected individuals of the breach' }
          ]
        }
      ] as Question[]
    },
    // ===== 5. INDIVIDUAL RIGHTS =====
    {
      id: 'rights',
      name: 'Individual Rights',
      icon: Users,
      questions: [
        {
          id: 5,
          text: 'What are the rights provided to individuals?',
          description: 'Select Yes or Partial for each.',
          type: 'radio-group',
          subOptions: [
            { id: 'right-access', label: 'Right to Access Information about Personal Data' },
            { id: 'right-correction', label: 'Right to Correction of Personal Data' },
            { id: 'right-grievance', label: 'Right of Grievance Redressal' },
            { id: 'right-nominate', label: 'Right to Nominate' },
            { id: 'right-erasure', label: 'Right to Erasure of Personal Data' },
            { id: 'right-withdraw', label: 'Right to Withdraw Consent' }
          ]
        }
      ] as Question[]
    },
    // ===== 6. RETENTION & DELETION =====
    {
      id: 'retention',
      name: 'Retention & Deletion',
      icon: Database,
      questions: [
        {
          id: 6,
          text: 'What measures do you have for retaining and deleting personal data?',
          description: 'Select Yes or Partial for each.',
          type: 'radio-group',
          subOptions: [
            { id: 'retention-periods', label: 'Defined data retention periods' },
            { id: 'delete-required', label: 'Process to delete data when no longer required' },
            { id: 'delete-consent', label: 'Process to delete data after withdrawal of consent, where applicable' }
          ]
        }
      ] as Question[]
    },
    // ===== 7. CHILDREN'S DATA =====
    {
      id: 'children',
      name: 'Children\'s Data',
      icon: UserCheck,
      questions: [
        {
          id: 7,
          text: 'What safeguards do you have for children\'s data?',
          description: 'Select Yes or Partial for each.',
          type: 'radio-group',
          subOptions: [
            { id: 'parental-consent', label: 'Verify parental consent where required' },
            { id: 'additional-safeguards', label: 'Have additional safeguards for children\'s data' }
          ]
        }
      ] as Question[]
    },
    // ===== 8. GRIEVANCE REDRESSAL =====
    {
      id: 'grievance',
      name: 'Grievance Redressal',
      icon: Scale,
      questions: [
        {
          id: 8,
          text: 'What grievance redressal measures do you have?',
          description: 'Select Yes or Partial for each.',
          type: 'radio-group',
          subOptions: [
            { id: 'grievance-mechanism', label: 'Grievance submission mechanism' },
            { id: 'grievance-process', label: 'Documented grievance process' },
            { id: 'grievance-contact', label: 'Published grievance contact details' }
          ]
        }
      ] as Question[]
    },
    // ===== 9. PRIVACY POLICIES =====
    {
      id: 'policies',
      name: 'Privacy Policies',
      icon: FileText,
      questions: [
        {
          id: 9,
          text: 'What privacy policies do you have in place?',
          description: 'Select Yes or Partial for each.',
          type: 'radio-group',
          subOptions: [
            { id: 'privacy-policy', label: 'Privacy policy / privacy notice' },
            { id: 'retention-policy', label: 'Data retention policy' },
            { id: 'deletion-policy', label: 'Data deletion process or policy' },
            { id: 'internal-policy', label: 'Internal data protection policy' }
          ]
        }
      ] as Question[]
    },
    // ===== 10. THIRD-PARTY SHARING =====
    {
      id: 'third-party',
      name: 'Third-Party Sharing',
      icon: Building,
      questions: [
        {
          id: 10,
          text: 'Do you share personal data with third parties or Data Processors? If yes, do you have the following in place?',
          description: 'Select Yes or Partial for each.',
          type: 'radio-group',
          subOptions: [
            { id: 'processor-agreements', label: 'Agreements with Data Processors' },
            { id: 'assess-practices', label: 'Assess third-party data protection practices' },
            { id: 'sharing-controls', label: 'Controls on sharing personal data' }
          ]
        }
      ] as Question[]
    },
    // ===== 11. CROSS-BORDER TRANSFER =====
    {
      id: 'cross-border',
      name: 'Cross-Border Transfer',
      icon: Globe,
      questions: [
        {
          id: 11,
          text: 'Do you transfer or store personal data outside India?',
          description: 'Select Yes or No. If Yes, select the measures you have in place.',
          type: 'conditional',
          mainOption: 'yes-no',
          subOptions: [
            { id: 'transfer-requirements', label: 'Assessed applicable transfer requirements' },
            { id: 'transfer-safeguards', label: 'Safeguards for overseas data transfers' },
            { id: 'transfer-contracts', label: 'Contracts with overseas processors' }
          ]
        }
      ] as Question[]
    },
    // ===== 12. SDF REQUIREMENTS =====
    {
      id: 'sdf',
      name: 'SDF Requirements',
      icon: 'Star',
      questions: [
        {
          id: 12,
          text: 'Applicable only for Significant Data Fiduciaries Only. What requirements have you met?',
          description: 'A significant data fiduciary is a company that is notified by the Central Government based on factors such as the volume and sensitivity of personal data processed.',
          type: 'checkbox',
          options: [
            { id: 'dpo', label: 'Appointed a Data Protection officer' },
            { id: 'dpo-contact', label: 'Published contact details for DPO' },
            { id: 'dpia', label: 'Conducting Data Protection Impact Assessment' },
            { id: 'auditor', label: 'Appointed an independent Data Auditor' },
            { id: 'audit', label: 'Conducted a periodic data protection audit' }
          ]
        }
      ] as Question[]
    },
    // ===== 13. STAFF TRAINING =====
    {
      id: 'training',
      name: 'Staff Training',
      icon: Users,
      questions: [
        {
          id: 13,
          text: 'Do you provide staff training on data protection?',
          description: 'Select Yes or No.',
          type: 'yes-no'
        }
      ] as Question[]
    }
  ]
};

// ===== HELPER FUNCTIONS =====
export const getAllQuestions = (): Question[] => {
  return scorecardData.categories.flatMap(cat => cat.questions);
};

export const getCategoryForQuestion = (questionId: number) => {
  for (const cat of scorecardData.categories) {
    if (cat.questions.some(q => q.id === questionId)) {
      return cat;
    }
  }
  return null;
};

export const getTotalQuestions = () => {
  return getAllQuestions().length;
};

export const getCategoryScores = (answers: Record<number, any>) => {
  if (!answers || typeof answers !== 'object' || Object.keys(answers).length === 0) {
    return scorecardData.categories.map(cat => ({
      name: cat.name,
      icon: cat.icon,
      score: 0,
      answered: 0,
      total: 0
    }));
  }

  return scorecardData.categories.map(cat => {
    let score = 0;
    let totalWeight = 0;

    cat.questions.forEach((q: any) => {
      const answer = answers[q.id];
      if (answer) {
        if (q.type === 'checkbox') {
          const selected = answer as string[];
          const totalItems = q.options.reduce((acc: number, opt: any) => {
            return acc + (opt.items ? opt.items.length : 0);
          }, 0);
          score += selected ? selected.length : 0;
          totalWeight += totalItems;
        } else if (q.type === 'yes-no') {
          totalWeight += 1;
          if (answer === 'Yes') score += 1;
        } else if (q.type === 'radio-group') {
          const subAnswers = answer as Record<string, string>;
          if (q.subOptions) {
            q.subOptions.forEach((sub: any) => {
              totalWeight += 1;
              if (subAnswers[sub.id] === 'Yes') score += 1;
              else if (subAnswers[sub.id] === 'Partial') score += 0.5;
            });
          }
        } else if (q.type === 'conditional') {
          if (answer.main === 'No') {
            // Skip sub-options
          } else {
            const subAnswers = answer.sub as Record<string, string>;
            if (q.subOptions) {
              q.subOptions.forEach((sub: any) => {
                totalWeight += 1;
                if (subAnswers[sub.id] === 'Yes') score += 1;
                else if (subAnswers[sub.id] === 'Partial') score += 0.5;
              });
            }
          }
        }
      }
    });

    const percentage = totalWeight > 0 ? Math.round((score / totalWeight) * 100) : 0;
    return {
      name: cat.name,
      icon: cat.icon,
      score: percentage,
      answered: 0,
      total: 0
    };
  });
};

export const getOverallScore = (answers: Record<number, any>) => {
  if (!answers || typeof answers !== 'object' || Object.keys(answers).length === 0) {
    return 0;
  }

  const allQuestions = getAllQuestions();
  let totalWeight = 0;
  let score = 0;

  allQuestions.forEach((q: any) => {
    const answer = answers[q.id];
    if (answer) {
      if (q.type === 'checkbox') {
        const selected = answer as string[];
        const totalItems = q.options.reduce((acc: number, opt: any) => {
          return acc + (opt.items ? opt.items.length : 0);
        }, 0);
        score += selected ? selected.length : 0;
        totalWeight += totalItems;
      } else if (q.type === 'yes-no') {
        totalWeight += 1;
        if (answer === 'Yes') score += 1;
      } else if (q.type === 'radio-group') {
        const subAnswers = answer as Record<string, string>;
        if (q.subOptions) {
          q.subOptions.forEach((sub: any) => {
            totalWeight += 1;
            if (subAnswers[sub.id] === 'Yes') score += 1;
            else if (subAnswers[sub.id] === 'Partial') score += 0.5;
          });
        }
      } else if (q.type === 'conditional') {
        if (answer.main === 'No') {
          // Skip
        } else {
          const subAnswers = answer.sub as Record<string, string>;
          if (q.subOptions) {
            q.subOptions.forEach((sub: any) => {
              totalWeight += 1;
              if (subAnswers[sub.id] === 'Yes') score += 1;
              else if (subAnswers[sub.id] === 'Partial') score += 0.5;
            });
          }
        }
      }
    }
  });

  return totalWeight > 0 ? Math.round((score / totalWeight) * 100) : 0;
};

export const getRiskLevel = (score: number) => {
  if (score >= 80) return { label: 'Low Risk', color: 'text-green-400', bg: 'bg-green-500/20', border: 'border-green-500/30', emoji: '🟢' };
  if (score >= 50) return { label: 'Medium Risk', color: 'text-yellow-400', bg: 'bg-yellow-500/20', border: 'border-yellow-500/30', emoji: '🟡' };
  return { label: 'High Risk', color: 'text-red-400', bg: 'bg-red-500/20', border: 'border-red-500/30', emoji: '🔴' };
};