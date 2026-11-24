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

const rawCaseStudies: CaseStudy[] = [
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
      <p class="text-sm text-gray-400"><em>Illustrative scenario: this case study is a composite example prepared for learning. It is not a report of a specific real company or incident.</em></p>
      <h2>Overview</h2>
      <p>A major healthcare company experienced a data breach that exposed sensitive patient data. This case study examines the incident, its impact, and the lessons learned for compliance.</p>
      <p>If your organisation needs to build an incident response plan, refer to our <a href="/resources/guides/dpdpa-2023-complete-guide" class="text-blue-400 hover:text-blue-300 underline">DPDPA 2023 Complete Guide</a>.</p>
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
      <p class="text-sm text-gray-400"><em>Illustrative scenario: this case study is a composite example prepared for learning. It is not a report of a specific real company or incident.</em></p>
      <h2>Overview</h2>
      <p>A leading e-commerce platform needed to implement a comprehensive consent management system to comply with the DPDP Act and GDPR.</p>
      <p>To understand how the law governs digital consent (click-wrap agreements), read our <a href="/insight/click-wrap-agreements-consent" class="text-blue-400 hover:text-blue-300 underline">Click-Wrap Agreements Insight</a>.</p>
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
      <p class="text-sm text-gray-400"><em>Illustrative scenario: this case study is a composite example prepared for learning. It is not a report of a specific real company or incident.</em></p>
      <h2>Overview</h2>
      <p>A global technology company needed to ensure compliance with cross-border data transfer requirements under the DPDP Act and GDPR.</p>
      <p>Learn how to implement Standard Contractual Clauses (SCCs) and Transfer Impact Assessments in our <a href="/resources/guides/cross-border-data-transfer" class="text-blue-400 hover:text-blue-300 underline">Cross-Border Transfer Guide</a>.</p>
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
      <p class="text-sm text-gray-400"><em>Illustrative scenario: this case study is a composite example prepared for learning. It is not a report of a specific real company or incident.</em></p>
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
      <p class="text-sm text-gray-400"><em>Illustrative scenario: this case study is a composite example prepared for learning. It is not a report of a specific real company or incident.</em></p>
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
  {
    id: 6,
    title: 'Helping PetBoard Bring an AI Voice Receptionist to Market Responsibly',
    category: 'AI Governance',
    industry: 'Pet-care Technology',
    date: '24 Nov 2026',
    description: 'How we structured vendor terms, the business model and DPDP Act roles for an AI voice receptionist built on a third-party AI provider, so the client could scale with compliance built into the product.',
    impact: 'Clear legal and commercial structure ready for enterprise due diligence',
    slug: 'petboard-ai-voice-receptionist-governance',
    content: `
      <p><strong>Client:</strong> PetBoard Technologies Private Limited, Bangalore<br/>
      <strong>Sector:</strong> Pet-care technology<br/>
      <strong>Services:</strong> AI governance &middot; DPDP Act compliance &middot; Technology contracts</p>

      <h2>The Client</h2>
      <p>PetBoard built an AI voice receptionist that answers incoming calls for pet-care businesses. The product uses a third party's AI speech and language-model APIs. After testing it with its first customer, PetBoard was ready to scale.</p>

      <h2>The Challenge</h2>
      <p>Before growing, PetBoard needed answers to four questions:</p>
      <ul>
        <li><strong>Vendor terms:</strong> Could it offer a product built on the third party's AI APIs to its own customers without breaching the provider's limits on resale and "Authorised Users"?</li>
        <li><strong>Business model:</strong> Should PetBoard hold the API account and re-bill customers at cost, or should each customer hold its own account with PetBoard operating it as their agent?</li>
        <li><strong>Data protection:</strong> Callers' voices and conversations are personal data. Who is the data fiduciary and who is the processor under the DPDP Act, 2023?</li>
        <li><strong>Consent:</strong> How should callers be told about the AI and give consent before their calls are processed?</li>
      </ul>

      <h2>Our Approach</h2>
      <ul>
        <li>Traced how each call's data moves through the system, end to end</li>
        <li>Reviewed the AI provider's terms of service against each business model</li>
        <li>Compared the two models on liability, compliance, billing control and ease of onboarding customers</li>
        <li>Assigned DPDP roles: the pet-care business as data fiduciary, PetBoard and the third-party AI provider as processors</li>
        <li>Lined the advice up with PetBoard's existing Data Processing Agreement</li>
        <li>Built caller notice and consent into the call flow</li>
      </ul>

      <h2>The Outcome</h2>
      <ul>
        <li>A clear legal and commercial structure for scaling</li>
        <li>Risks under the AI vendor's terms were handled before more customers came on board</li>
        <li>DPDP responsibilities passed down consistently from the customer to PetBoard to the AI provider</li>
        <li>Compliance built into the product itself, not only into contracts</li>
        <li>A structure ready for enterprise due diligence</li>
      </ul>

      <h2>Why It Matters</h2>
      <p>Building on a third-party AI model means meeting three sets of obligations: the AI vendor's licence terms, customers' expectations, and end users' rights under data protection law. Good AI governance makes all three work together.</p>
      <p>For the legal background, read our guides on <a href="/lawful-processing" class="text-blue-400 hover:text-blue-300 underline">lawful processing and consent</a> and <a href="/obligations" class="text-blue-400 hover:text-blue-300 underline">Data Fiduciary obligations</a>.</p>
      <p><strong>Building an AI product?</strong> <a href="/contact" class="text-blue-400 hover:text-blue-300 underline">Talk to us</a> about getting it compliant before you scale.</p>
    `,
    lessons: [
      'Check an AI vendor\'s resale and "authorised user" limits before offering a product built on its APIs',
      'Choose the account and billing model deliberately: liability, compliance and onboarding all depend on it',
      'Map the DPDP roles clearly: the customer as data fiduciary, the product company and AI provider as processors',
      'Build caller notice and consent into the product flow, not only into contracts',
    ],
    tags: ['AI Governance', 'DPDP Act', 'Technology Contracts', 'Data Fiduciary', 'Data Processor'],
  },
];

// Newest first.
const toTime = (d: string) => new Date(d).getTime();
export const caseStudiesData: CaseStudy[] = [...rawCaseStudies].sort(
  (a, b) => toTime(b.date) - toTime(a.date) || b.id - a.id
);

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
