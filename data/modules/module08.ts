// data/modules/module08.ts

import { Module } from '@/app/types/course';

export const module08: Module = {
  id: 8,
  title: 'Significant Data Fiduciary (SDF)',
  description:
    'Understand the enhanced obligations for Significant Data Fiduciaries. This module explains how the government notifies SDFs, the mandatory appointment of a Data Protection Officer (DPO), the role of independent data auditors, and the requirements for Data Protection Impact Assessments (DPIAs).',
  duration: '6 Hours',
  icon: 'Star',
  learningObjectives: [
    'Understand the criteria for being notified as an SDF',
    'Learn the mandatory governance requirements for SDFs',
    'Analyze the role and responsibilities of a Data Protection Officer (DPO)',
    'Understand the process of conducting a Data Protection Impact Assessment (DPIA)',
    'Learn about independent data audits and compliance reporting',
  ],
  chapters: [
    // ============================================================
    // CHAPTER 1: SDF FRAMEWORK
    // ============================================================
    {
      id: 1,
      title: 'SDF Framework',
      lessons: [
        {
          id: 1,
          title: 'Government Notification',
          duration: '15 min',
          type: 'video',
          description: 'How does a company become a Significant Data Fiduciary?',
          content:
            'Not all Data Fiduciaries are treated equally. The government can designate certain companies as Significant Data Fiduciaries (SDFs) based on their size, data volume, and risk profile.',
          learningObjectives: [
            'Understand the concept of an SDF',
            'Learn how the government notifies an SDF',
            'Identify the timeline for compliance after notification',
          ],
          keyTakeaways: [
            'SDF status is granted by the Central Government through a notification.',
            'It is based on the volume and sensitivity of the data processed.',
            'Once notified, the company must implement enhanced compliance measures immediately.',
          ],
          sections: [
            {
              id: 'sec-1',
              title: 'What is an SDF?',
              content: [
                {
                  type: 'paragraph',
                  content:
                    'Under Section 10 of the DPDPA, the government can designate a Data Fiduciary as a "Significant Data Fiduciary" (SDF). This designation is reserved for entities that process large volumes of personal data or handle highly sensitive data, where a breach could have a massive impact on society.',
                },
                {
                  type: 'paragraph',
                  content:
                    'Think of it as the "Big Tech" classification. Companies like Google, Meta, large banks, and major telecom operators are likely candidates for SDF status.',
                },
                {
                  type: 'callout',
                  content:
                    'The DPDPA does not explicitly name any company as an SDF. The government will issue a notification listing the entities that fall into this category.',
                  calloutType: 'important',
                },
              ],
            },
            {
              id: 'sec-2',
              title: 'The Notification Process',
              content: [
                {
                  type: 'paragraph',
                  content:
                    'The government will review the data processing activities of various companies. If a company meets the criteria, a notification will be published in the Official Gazette. Once notified, the company must upgrade its compliance framework within the timeframe specified by the government.',
                },
              ],
            },
          ],
          glossary: [
            { term: 'Significant Data Fiduciary', definition: 'A Data Fiduciary notified by the Central Government based on the volume and sensitivity of personal data processed, risk to data principals, and impact on national security.' },
          ],
          references: [
            { title: 'DPDPA Section 10', source: 'Government of India', year: '2023' },
          ],
        },
        {
          id: 2,
          title: 'Eligibility Criteria',
          duration: '20 min',
          type: 'reading',
          description: 'Why does a company get classified as an SDF?',
          content:
            'The government uses specific factors to determine if a company should be treated as an SDF.',
          learningObjectives: [
            'Analyze the factors for SDF classification',
            'Understand the risk-based approach',
          ],
          keyTakeaways: [
            'Volume of data is a major factor.',
            'Sensitivity of data (like health or financial data) is critical.',
            'Risk to electoral democracy and national security are also considered.',
          ],
          sections: [
            {
              id: 'sec-1',
              title: 'The Criteria',
              content: [
                {
                  type: 'paragraph',
                  content:
                    'Section 10(1) lists the factors the government will consider before notifying an SDF:',
                },
                {
                  type: 'list',
                  content: 'SDF Classification Factors',
                  items: [
                    'The volume and sensitivity of personal data processed by the Data Fiduciary.',
                    'The risk to the rights of the Data Principal.',
                    'The potential impact on the sovereignty and integrity of India.',
                    'The risk to the security of the State.',
                    'The risk to public order.',
                    'The risk to electoral democracy.',
                  ],
                },
                {
                  type: 'example',
                  content:
                    'A social media platform with 500 million Indian users collects massive amounts of behavioral data. Because it can influence elections (risk to electoral democracy) and public order, it is highly likely to be classified as an SDF.',
                },
              ],
            },
          ],
          glossary: [
            { term: 'Electoral Democracy', definition: 'A democratic system where political power is exercised through free and fair elections, which can be vulnerable to data manipulation.' },
          ],
          references: [
            { title: 'DPDPA Section 10(1)', source: 'Government of India', year: '2023' },
          ],
        },
        {
          id: 3,
          title: 'Risk Assessment',
          duration: '15 min',
          type: 'video',
          description: 'SDFs must constantly assess their risk levels.',
          content:
            'Once an SDF, a company must undertake periodic risk assessments to ensure that its safeguards are working.',
          learningObjectives: [
            'Understand the obligation of ongoing risk assessment',
            'Learn how to integrate risk assessment into business processes',
          ],
          keyTakeaways: [
            'Risk assessments are not a one-time task.',
            'They must be conducted regularly (e.g., annually or when new products are launched).',
            'The assessment must be documented.',
          ],
          sections: [
            {
              id: 'sec-1',
              title: 'The Risk-First Approach',
              content: [
                {
                  type: 'paragraph',
                  content:
                    'As an SDF, you are expected to have a world-class privacy program. The Data Protection Board will hold you to a higher standard. You must proactively identify risks in your data processing activities before they cause harm.',
                },
              ],
            },
          ],
          glossary: [
            { term: 'Risk Assessment', definition: 'The process of identifying, evaluating, and prioritizing risks to personal data.' },
          ],
          references: [
            { title: 'DPDPA Section 10', source: 'Government of India', year: '2023' },
          ],
        },
        {
          id: 4,
          title: 'DPO Requirements',
          duration: '20 min',
          type: 'reading',
          description: 'The mandatory Data Protection Officer based in India.',
          content:
            'SDFs must appoint a Data Protection Officer (DPO) who resides in India. The DPO acts as the interface between the company and the Data Protection Board.',
          learningObjectives: [
            'Understand the role of a DPO',
            'Learn the qualifications and independence required',
          ],
          keyTakeaways: [
            'The DPO must be based in India.',
            'The DPO must report to the Board of Directors, not the CEO.',
            'The DPO is the point of contact for the Data Protection Board.',
          ],
          sections: [
            {
              id: 'sec-1',
              title: 'The Role of the DPO',
              content: [
                {
                  type: 'paragraph',
                  content:
                    'Under Section 10(2)(a), an SDF must appoint a Data Protection Officer. This is not just an IT role; it is a senior governance role.',
                },
                {
                  type: 'list',
                  content: 'DPO Responsibilities',
                  items: [
                    'Represent the SDF under the DPDPA.',
                    'Act as the point of contact for the Data Protection Board.',
                    'Monitor compliance and advise the board of directors.',
                    'Ensure that Data Protection Impact Assessments (DPIAs) are conducted.',
                  ],
                },
                {
                  type: 'callout',
                  content:
                    'The DPO must be independent. If the DPO is the CEO or the Head of IT who has a conflict of interest, the appointment will not be compliant.',
                  calloutType: 'warning',
                },
              ],
            },
          ],
          glossary: [
            { term: 'DPO', definition: 'Data Protection Officer, a senior executive responsible for data protection compliance within an SDF.' },
          ],
          references: [
            { title: 'DPDPA Section 10(2)(a)', source: 'Government of India', year: '2023' },
          ],
        },
        {
          id: 5,
          title: 'Independent Audit',
          duration: '15 min',
          type: 'video',
          description: 'The requirement to hire an external auditor.',
          content:
            'SDFs cannot self-certify their compliance. They must hire an independent data auditor to evaluate their privacy program.',
          learningObjectives: [
            'Understand the independent audit requirement',
            'Learn what the audit covers',
          ],
          keyTakeaways: [
            'SDFs must appoint an independent data auditor.',
            'The audit verifies compliance with the DPDPA.',
            'The audit report must be submitted to the Data Protection Board.',
          ],
          sections: [
            {
              id: 'sec-1',
              title: 'The Independent Auditor',
              content: [
                {
                  type: 'paragraph',
                  content:
                    'The DPDPA requires SDFs to undergo a data audit once every year (or as prescribed). This audit must be conducted by an independent auditor—not an internal employee or a firm with a conflict of interest.',
                },
                {
                  type: 'paragraph',
                  content:
                    'The auditor will review policies, security measures, consent mechanisms, and grievance redressal processes.',
                },
              ],
            },
          ],
          glossary: [
            { term: 'Data Auditor', definition: 'An independent expert appointed by an SDF to evaluate its compliance with the DPDPA.' },
          ],
          references: [
            { title: 'DPDPA Section 10(2)(b)', source: 'Government of India', year: '2023' },
          ],
        },
      ],
    },

    // ============================================================
    // CHAPTER 2: SDF COMPLIANCE
    // ============================================================
    {
      id: 2,
      title: 'SDF Compliance',
      lessons: [
        {
          id: 6,
          title: 'DPIA for SDFs',
          duration: '20 min',
          type: 'video',
          description: 'Data Protection Impact Assessments are mandatory.',
          content:
            'Section 10(2)(c) mandates that SDFs conduct periodic DPIAs to identify and mitigate risks.',
          learningObjectives: [
            'Understand the concept of a DPIA',
            'Learn the DPIA process',
            'Analyze the difference between a DPIA and a security audit',
          ],
          keyTakeaways: [
            'A DPIA is mandatory for all SDFs.',
            'It focuses on high-risk processing activities.',
            'It must be conducted before launching new products or processes.',
          ],
          sections: [
            {
              id: 'sec-1',
              title: 'The DPIA Process',
              content: [
                {
                  type: 'paragraph',
                  content:
                    'A DPIA is a structured process to identify the privacy risks of a project, system, or data processing activity. For SDFs, DPIAs are not optional.',
                },
                {
                  type: 'list',
                  content: 'DPIA Steps',
                  items: [
                    '1. Describe the processing activity.',
                    '2. Assess the necessity and proportionality.',
                    '3. Identify privacy risks to Data Principals.',
                    '4. Identify mitigation measures.',
                    '5. Sign off and record the outcomes.',
                    '6. Integrate the outcomes into the project.',
                  ],
                },
                {
                  type: 'callout',
                  content:
                    'A DPIA is not just a security audit. Security audits focus on protecting data from hackers. DPIAs focus on protecting individuals from the misuse of their data (e.g., bias, unfair profiling).',
                  calloutType: 'important',
                },
              ],
            },
          ],
          glossary: [
            { term: 'DPIA', definition: 'Data Protection Impact Assessment, a process to identify and mitigate privacy risks in high-risk processing activities.' },
          ],
          references: [
            { title: 'DPDPA Section 10(2)(c)', source: 'Government of India', year: '2023' },
          ],
        },
        {
          id: 7,
          title: 'Compliance Reporting',
          duration: '15 min',
          type: 'reading',
          description: 'Reporting to the Data Protection Board.',
          content:
            'SDFs must submit periodic compliance reports to the Data Protection Board.',
          learningObjectives: [
            'Understand the reporting obligations',
            'Learn the format and frequency of reports',
          ],
          keyTakeaways: [
            'Reporting is mandatory.',
            'Reports must include DPIA outcomes and audit results.',
            'Failure to report can lead to penalties.',
          ],
          sections: [
            {
              id: 'sec-1',
              title: 'Transparency to the Regulator',
              content: [
                {
                  type: 'paragraph',
                  content:
                    'Because SDFs have a massive impact on society, the Data Protection Board requires them to submit regular compliance reports. These reports demonstrate that the company is actively managing its privacy risks.',
                },
              ],
            },
          ],
          glossary: [
            { term: 'Compliance Report', definition: 'A formal document submitted to the Data Protection Board detailing an organisation\'s compliance with the DPDPA.' },
          ],
          references: [
            { title: 'DPDPA Section 10', source: 'Government of India', year: '2023' },
          ],
        },
        {
          id: 8,
          title: 'Governance Framework',
          duration: '20 min',
          type: 'video',
          description: 'Building a board-level privacy structure.',
          content:
            'SDFs need robust internal governance. Privacy must be a boardroom topic, not just an IT issue.',
          learningObjectives: [
            'Design a corporate privacy governance structure',
            'Understand the role of the Board of Directors',
          ],
          keyTakeaways: [
            'The Board of Directors is ultimately responsible.',
            'A dedicated privacy team is required.',
            'Regular training for employees is essential.',
          ],
          sections: [
            {
              id: 'sec-1',
              title: 'The Governance Structure',
              content: [
                {
                  type: 'paragraph',
                  content:
                    'An SDF must establish a comprehensive governance framework:',
                },
                {
                  type: 'list',
                  content: 'SDF Governance',
                  items: [
                    'Board Oversight: The Board of Directors must actively oversee privacy risks.',
                    'DPO Reporting: The DPO must report directly to the Board.',
                    'Privacy Committee: A cross-functional committee (Legal, IT, HR, Product) to manage privacy.',
                    'Employee Training: Mandatory annual training for all staff.',
                  ],
                },
              ],
            },
          ],
          glossary: [
            { term: 'Corporate Governance', definition: 'The system by which companies are directed and controlled, including oversight of risk management.' },
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
      title: 'SDF Readiness Assessment',
      description:
        'Assess if your organization (or a hypothetical large organization) qualifies as an SDF. Create a gap analysis and a compliance roadmap.',
      deliverables: [
        'Eligibility assessment',
        'Gap analysis',
        'Compliance roadmap',
      ],
    },
  ],

  // ===== MODULE QUIZ =====
  quiz: {
    questions: [
      {
        question: 'SDF notification is done by:',
        options: ['Board', 'Government', 'SDF itself', 'Individual'],
        correct: 1,
        explanation: 'The Central Government issues a notification to classify a Data Fiduciary as an SDF.',
      },
      {
        question: 'SDFs require:',
        options: ['DPO', 'Audit', 'DPIA', 'All of the above'],
        correct: 3,
        explanation: 'SDFs must appoint a DPO, conduct independent audits, and perform DPIAs.',
      },
      {
        question: 'Independent audit for SDFs is:',
        options: ['Optional', 'Mandatory', 'Recommended', 'Not required'],
        correct: 1,
        explanation: 'Section 10(2)(b) mandates an independent data audit for SDFs.',
      },
      {
        question: 'DPIA for SDFs must be:',
        options: ['Simple', 'Detailed', 'Both', 'None'],
        correct: 1,
        explanation: 'DPIAs must be thorough and detailed, identifying high-risk processing activities.',
      },
      {
        question: 'SDF stands for:',
        options: ['Significant Data Fiduciary', 'Simple Data Fiduciary', 'Standard Data Fiduciary', 'Special Data Fiduciary'],
        correct: 0,
        explanation: 'SDF stands for Significant Data Fiduciary, a category of entities with enhanced obligations.',
      },
    ],
    passingScore: 80,
  },
};