// data/scorecard.ts
import { Shield, Users, Database, Globe, Building, AlertCircle, Scale } from 'lucide-react';

export const scorecardData = {
  title: 'DPDPA Compliance Scorecard',
  subtitle: 'Answer 25 questions to assess your readiness for India\'s data protection law.',
  categories: [
    // ===== 1. CONSENT & NOTICE (4 Questions) =====
    {
      id: 'consent',
      name: 'Consent & Notice',
      icon: Shield,
      questions: [
        {
          id: 1,
          text: 'Do you collect personal data of individuals who are your employees, vendors, customers or other individuals?',
          description: 'This includes employee data, vendor and customer data, website visitor data, or any digital personal data of identifiable individuals.',
          options: ['Yes', 'No'],
          weight: 4
        },
        {
          id: 2,
          text: 'Do you have a clear privacy notice/consent mechanism for data collection?',
          description: 'Individuals should be informed about what data is collected, why, and how it will be used. This is a fundamental requirement under Section 5 of the DPDP Act.',
          options: ['Yes', 'Partial', 'No'],
          weight: 4
        },
        {
          id: 3,
          text: 'Do you obtain explicit consent for processing sensitive personal data?',
          description: 'Sensitive data includes health, biometric, financial, and other special categories. Explicit consent means a clear, affirmative action by the individual.',
          options: ['Yes', 'Partial', 'No'],
          weight: 4
        },
        {
          id: 4,
          text: 'Do you provide individuals with the right to withdraw consent?',
          description: 'Consent withdrawal should be as easy as giving consent. This is a key right under Section 6 of the DPDP Act.',
          options: ['Yes', 'No'],
          weight: 3
        }
      ]
    },

    // ===== 2. SECURITY SAFEGUARDS (3 Questions) =====
    {
      id: 'security',
      name: 'Security Safeguards',
      icon: Shield,
      questions: [
        {
          id: 5,
          text: 'Do you have reasonable security safeguards to protect personal data?',
          description: 'Encryption, access controls, firewalls, and other security measures. This is a core obligation under Section 8 of the DPDP Act.',
          options: ['Yes', 'Partial', 'No'],
          weight: 5
        },
        {
          id: 6,
          text: 'Do you have access controls in place for personal data?',
          description: 'Role-based access, least privilege principle, and regular access reviews. Only authorized personnel should have access to personal data.',
          options: ['Yes', 'Partial', 'No'],
          weight: 4
        },
        {
          id: 7,
          text: 'Do you conduct regular security audits?',
          description: 'Internal or external audits to identify and fix vulnerabilities. Regular audits help maintain robust security posture.',
          options: ['Yes', 'No'],
          weight: 3
        }
      ]
    },

    // ===== 3. BREACH RESPONSE (3 Questions) =====
    {
      id: 'breach',
      name: 'Breach Response',
      icon: AlertCircle,
      questions: [
        {
          id: 8,
          text: 'Do you have a data breach response plan in place?',
          description: 'A documented plan for detecting, containing, and reporting breaches. This includes roles, responsibilities, and communication protocols.',
          options: ['Yes', 'Partial', 'No'],
          weight: 5
        },
        {
          id: 9,
          text: 'Can you notify the Data Protection Board within 72 hours of a breach?',
          description: 'Under Rule 7 of the DPDP Rules, data fiduciaries must notify the Board within 72 hours of becoming aware of a data breach.',
          options: ['Yes', 'No'],
          weight: 4
        },
        {
          id: 10,
          text: 'Do you have a process to notify affected individuals of a breach?',
          description: 'Affected individuals must be informed of the breach and its impact. This includes the nature of the breach, data compromised, and remedial actions.',
          options: ['Yes', 'No'],
          weight: 3
        }
      ]
    },

    // ===== 4. DATA PRINCIPAL RIGHTS (4 Questions) =====
    {
      id: 'rights',
      name: 'Data Principal Rights',
      icon: Users,
      questions: [
        {
          id: 11,
          text: 'Do you have a process for handling data access requests?',
          description: 'Individuals have the right to access their personal data. This includes confirmation of processing, access to data, and information about processing.',
          options: ['Yes', 'Partial', 'No'],
          weight: 4
        },
        {
          id: 12,
          text: 'Do you have a process for data correction requests?',
          description: 'Individuals can request correction of inaccurate or incomplete personal data under Section 4 of the DPDP Act.',
          options: ['Yes', 'Partial', 'No'],
          weight: 3
        },
        {
          id: 13,
          text: 'Do you have a process for data erasure requests?',
          description: 'Individuals can request deletion of their personal data when it is no longer necessary, or when consent has been withdrawn.',
          options: ['Yes', 'Partial', 'No'],
          weight: 4
        },
        {
          id: 14,
          text: 'Do you have a grievance redressal mechanism?',
          description: 'A process for individuals to lodge complaints or grievances. This is a key requirement under Section 4 of the DPDP Act.',
          options: ['Yes', 'No'],
          weight: 3
        }
      ]
    },

    // ===== 5. DATA RETENTION & DELETION (3 Questions) =====
    {
      id: 'retention',
      name: 'Data Retention & Deletion',
      icon: Database,
      questions: [
        {
          id: 15,
          text: 'Do you have a data retention policy?',
          description: 'A policy that defines how long personal data is kept and when it is securely deleted. This aligns with the principle of storage limitation.',
          options: ['Yes', 'Partial', 'No'],
          weight: 4
        },
        {
          id: 16,
          text: 'Do you have a process for secure data deletion?',
          description: 'Data should be securely deleted when no longer needed for the purpose. Secure deletion includes technical measures to ensure data cannot be recovered.',
          options: ['Yes', 'No'],
          weight: 4
        },
        {
          id: 17,
          text: 'Do you maintain records of data processing activities?',
          description: 'Records of what data is processed, why, and how. This is essential for accountability and transparency under the DPDP Act.',
          options: ['Yes', 'No'],
          weight: 3
        }
      ]
    },

    // ===== 6. CROSS-BORDER TRANSFERS (3 Questions) =====
    {
      id: 'cross-border',
      name: 'Cross-Border Transfers',
      icon: Globe,
      questions: [
        {
          id: 18,
          text: 'Does your organisation transfer personal data outside India?',
          description: 'Cross-border data transfers to servers, processors, or group companies outside India. This is regulated under Section 16 of the DPDP Act.',
          options: ['Yes', 'No'],
          weight: 4
        },
        {
          id: 19,
          text: 'Do you have appropriate safeguards for cross-border data transfers?',
          description: 'Standard contractual clauses, adequacy decisions, or other safeguards. The DPDP Act requires appropriate safeguards for cross-border transfers.',
          options: ['Yes', 'Partial', 'No'],
          weight: 5
        },
        {
          id: 20,
          text: 'Do you have contracts with processors outside India?',
          description: 'Contracts that ensure data protection compliance. These contracts should include obligations for data protection and security.',
          options: ['Yes', 'Partial', 'No'],
          weight: 3
        }
      ]
    },

    // ===== 7. GOVERNANCE & ACCOUNTABILITY (5 Questions) =====
    {
      id: 'governance',
      name: 'Governance & Accountability',
      icon: Building,
      questions: [
        {
          id: 21,
          text: 'Do you have a Data Protection Officer (DPO) appointed?',
          description: 'A DPO is required for Significant Data Fiduciaries under Section 10 of the DPDP Act. The DPO should be based in India and have expertise in data protection.',
          options: ['Yes', 'No'],
          weight: 4
        },
        {
          id: 22,
          text: 'Do you have a published contact for data protection queries?',
          description: 'Individuals should have a point of contact for privacy concerns. This contact should be easily accessible and responsive.',
          options: ['Yes', 'No'],
          weight: 3
        },
        {
          id: 23,
          text: 'Do you conduct Data Protection Impact Assessments (DPIAs)?',
          description: 'DPIAs are required for high-risk data processing activities. This includes processing of sensitive data, large-scale processing, and profiling.',
          options: ['Yes', 'Partial', 'No'],
          weight: 5
        },
        {
          id: 24,
          text: 'Do you have data protection policies and procedures in place?',
          description: 'Documented policies that guide data handling practices. These policies should cover all aspects of data protection compliance.',
          options: ['Yes', 'Partial', 'No'],
          weight: 4
        },
        {
          id: 25,
          text: 'Do you provide staff training on data protection?',
          description: 'Regular training to ensure staff understand their obligations. Training should cover data protection principles, security practices, and breach response.',
          options: ['Yes', 'No'],
          weight: 3
        }
      ]
    }
  ]
};

// ===== HELPER FUNCTIONS =====
export const getAllQuestions = () => {
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

export const getCategoryScores = (answers: Record<number, string>) => {
  return scorecardData.categories.map(cat => {
    const questions = cat.questions;
    let score = 0;
    let totalWeight = 0;
    
    questions.forEach(q => {
      totalWeight += q.weight;
      if (answers[q.id]) {
        const answer = answers[q.id];
        if (answer === 'Yes') {
          score += q.weight;
        } else if (answer === 'Partial') {
          score += q.weight / 2;
        }
      }
    });
    
    const percentage = totalWeight > 0 ? Math.round((score / totalWeight) * 100) : 0;
    return {
      name: cat.name,
      icon: cat.icon,
      score: percentage,
      answered: questions.filter(q => answers[q.id] !== undefined).length,
      total: questions.length
    };
  });
};

export const getOverallScore = (answers: Record<number, string>) => {
  const allQuestions = getAllQuestions();
  let totalWeight = 0;
  let score = 0;
  
  allQuestions.forEach(q => {
    totalWeight += q.weight;
    if (answers[q.id]) {
      const answer = answers[q.id];
      if (answer === 'Yes') {
        score += q.weight;
      } else if (answer === 'Partial') {
        score += q.weight / 2;
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