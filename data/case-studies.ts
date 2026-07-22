// data/case-studies.ts
export interface CaseStudy {
  id: number;
  title: string;
  category: string;
  industry: string;
  date: string;
  description: string;
  impact: string;
  slug: string;
  content: string;
  lessons: string[];
  tags: string[];
}

export const caseStudiesData: CaseStudy[] = [
  {
    id: 1,
    title: 'Data Breach Incident in a Healthcare Company',
    category: 'Data Breach',
    industry: 'Healthcare',
    date: '15 Jul 2026',
    description: 'Analysis of a data breach incident in a healthcare company and lessons learned for compliance.',
    impact: '10,000+ records affected',
    slug: 'data-breach-healthcare',
    content: `
      <h2>Overview</h2>
      <p>A major healthcare company experienced a data breach that exposed sensitive patient data. This case study examines the incident, its impact, and the lessons learned for compliance.</p>
      
      <h2>The Incident</h2>
      <p>An unauthorized third party gained access to the company's patient database through a compromised vendor account. The breach went undetected for 45 days.</p>
      
      <h2>Impact</h2>
      <ul>
        <li>10,000+ patient records compromised</li>
        <li>Regulatory fines and penalties</li>
        <li>Reputational damage</li>
        <li>Loss of patient trust</li>
      </ul>
      
      <h2>Root Causes</h2>
      <ul>
        <li>Weak vendor access controls</li>
        <li>Inadequate monitoring systems</li>
        <li>Lack of employee training</li>
        <li>No incident response plan</li>
      </ul>
      
      <h2>Lessons Learned</h2>
      <ul>
        <li>Implement strong vendor risk management</li>
        <li>Deploy real-time monitoring</li>
        <li>Conduct regular security training</li>
        <li>Develop and test incident response plans</li>
      </ul>
    `,
    lessons: [
      'Implement strong vendor risk management',
      'Deploy real-time monitoring systems',
      'Conduct regular security training',
      'Develop and test incident response plans',
    ],
    tags: ['Data Breach', 'Healthcare', 'Compliance', 'Security'],
  },
  {
    id: 2,
    title: 'Consent Management in E-Commerce Platform',
    category: 'Consent Management',
    industry: 'E-Commerce',
    date: '10 Jul 2026',
    description: 'Case study on implementing consent management in a large e-commerce platform.',
    impact: '5M+ users',
    slug: 'consent-management-ecommerce',
    content: `
      <h2>Overview</h2>
      <p>A leading e-commerce platform needed to implement a comprehensive consent management system to comply with the DPDP Act and GDPR.</p>
      
      <h2>Challenge</h2>
      <p>The platform had 5 million+ users and needed to obtain, manage, and track consent across multiple touchpoints.</p>
      
      <h2>Solution</h2>
      <ul>
        <li>Implemented a centralized consent management platform</li>
        <li>Deployed granular consent options for different purposes</li>
        <li>Integrated with all user touchpoints</li>
        <li>Built a user-friendly consent dashboard</li>
      </ul>
      
      <h2>Impact</h2>
      <ul>
        <li>5M+ users can now manage consent easily</li>
        <li>Compliance with DPDP Act and GDPR</li>
        <li>Increased user trust and transparency</li>
        <li>Reduced compliance risk</li>
      </ul>
      
      <h2>Key Takeaways</h2>
      <ul>
        <li>Consent management must be user-centric</li>
        <li>Granular consent options are essential</li>
        <li>Integration with all systems is critical</li>
        <li>Regular audits ensure compliance</li>
      </ul>
    `,
    lessons: [
      'Consent management must be user-centric',
      'Granular consent options are essential',
      'Integration with all systems is critical',
      'Regular audits ensure compliance',
    ],
    tags: ['Consent', 'E-Commerce', 'Compliance', 'User Rights'],
  },
  {
    id: 3,
    title: 'Cross-Border Data Transfer Compliance',
    category: 'Cross-Border',
    industry: 'Technology',
    date: '5 Jul 2026',
    description: 'Case study on ensuring compliance for cross-border data transfers.',
    impact: 'Global operations',
    slug: 'cross-border-compliance',
    content: `
      <h2>Overview</h2>
      <p>A global technology company needed to ensure compliance with cross-border data transfer requirements under the DPDP Act and GDPR.</p>
      
      <h2>Challenge</h2>
      <p>The company transfers data between India, EU, and US operations. Each jurisdiction has different requirements.</p>
      
      <h2>Solution</h2>
      <ul>
        <li>Implemented Standard Contractual Clauses (SCCs)</li>
        <li>Conducted Transfer Impact Assessments (TIAs)</li>
        <li>Established data transfer mechanisms</li>
        <li>Documented all transfer processes</li>
      </ul>
      
      <h2>Impact</h2>
      <ul>
        <li>Global operations now fully compliant</li>
        <li>Reduced legal and regulatory risk</li>
        <li>Enhanced data protection</li>
        <li>Improved cross-border collaboration</li>
      </ul>
    `,
    lessons: [
      'Implement SCCs for all cross-border transfers',
      'Conduct regular Transfer Impact Assessments',
      'Document all transfer mechanisms',
      'Monitor regulatory changes',
    ],
    tags: ['Cross-Border', 'Technology', 'Compliance', 'Global'],
  },
  {
    id: 4,
    title: 'Data Protection Impact Assessment (DPIA) Implementation',
    category: 'DPIA',
    industry: 'Finance',
    date: '28 Jun 2026',
    description: 'Implementation of DPIA for high-risk data processing in a financial institution.',
    impact: 'High-risk processing',
    slug: 'dpia-implementation-finance',
    content: `
      <h2>Overview</h2>
      <p>A financial institution needed to conduct a Data Protection Impact Assessment (DPIA) for its high-risk data processing activities.</p>
      
      <h2>Challenge</h2>
      <p>The institution processes sensitive financial data, requiring a comprehensive DPIA.</p>
      
      <h2>Solution</h2>
      <ul>
        <li>Conducted a thorough DPIA process</li>
        <li>Identified and mitigated risks</li>
        <li>Implemented privacy by design</li>
        <li>Documented all findings</li>
      </ul>
      
      <h2>Impact</h2>
      <ul>
        <li>High-risk processing now compliant</li>
        <li>Reduced data protection risks</li>
        <li>Enhanced customer trust</li>
        <li>Improved regulatory compliance</li>
      </ul>
    `,
    lessons: [
      'Conduct DPIAs for all high-risk processing',
      'Document all findings and mitigations',
      'Review DPIAs annually',
      'Implement privacy by design',
    ],
    tags: ['DPIA', 'Finance', 'Risk Assessment', 'Compliance'],
  },
  {
    id: 5,
    title: 'Data Subject Rights Handling',
    category: 'Data Rights',
    industry: 'Consulting',
    date: '20 Jun 2026',
    description: 'Case study on effectively handling data subject rights requests.',
    impact: '100+ requests/month',
    slug: 'data-subject-rights-handling',
    content: `
      <h2>Overview</h2>
      <p>A consulting firm needed to handle a growing volume of data subject rights requests (DSRs).</p>
      
      <h2>Challenge</h2>
      <p>The firm received 100+ requests per month for access, correction, and erasure of personal data.</p>
      
      <h2>Solution</h2>
      <ul>
        <li>Implemented a DSR management system</li>
        <li>Established clear processes and SLAs</li>
        <li>Trained staff on handling requests</li>
        <li>Maintained detailed records</li>
      </ul>
      
      <h2>Impact</h2>
      <ul>
        <li>100+ requests processed monthly</li>
        <li>All requests within statutory timeframes</li>
        <li>Improved customer satisfaction</li>
        <li>Full compliance with DPDP Act</li>
      </ul>
    `,
    lessons: [
      'Implement a DSR management system',
      'Establish clear processes and SLAs',
      'Train staff on handling requests',
      'Maintain detailed records',
    ],
    tags: ['Data Rights', 'Consulting', 'Compliance', 'DSR'],
  },
];

export const getCaseStudyBySlug = (slug: string) => {
  return caseStudiesData.find(c => c.slug === slug);
};

export const getRelatedCaseStudies = (slug: string, limit: number = 3) => {
  const current = getCaseStudyBySlug(slug);
  if (!current) return [];
  return caseStudiesData
    .filter(c => c.id !== current.id && c.category === current.category)
    .slice(0, limit);
};