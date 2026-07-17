// data/insights.ts
import { Shield, Globe, Users, Building, Database, Scale, BookOpen } from 'lucide-react';

export interface Insight {
  id: number;
  category: string;
  categoryIcon: any;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  date: string;
  readTime: string;
  slug: string;
  image?: string;
}

export const insightsData: Insight[] = [
  {
    id: 1,
    category: 'DPDP Act',
    categoryIcon: Shield,
    title: 'DPDP Act 2023: Director Liability, Board Responsibilities and Data Privacy Compliance for Indian Companies',
    excerpt: 'Can directors be personally liable under India\'s DPDP Act 2023? Explore board responsibilities, CEO accountability, compliance requirements and data breach management for Indian companies.',
    content: `
      <h2>Introduction</h2>
      <p>The Digital Personal Data Protection Act, 2023 (DPDP Act) introduces significant compliance obligations for companies operating in India. One of the most critical questions for corporate boards and directors is: <strong>Can directors be held personally liable for data protection failures?</strong></p>
      
      <h2>Director Liability under the DPDP Act</h2>
      <p>The DPDP Act imposes obligations on "data fiduciaries" — entities that determine the purpose and means of processing personal data. Under the Act, directors can be held personally liable if they are found to be "directly in charge of and responsible for the conduct of the business."</p>
      
      <h3>Key Liabilities</h3>
      <ul>
        <li><strong>Personal Penalties:</strong> Directors can be personally fined for non-compliance</li>
        <li><strong>Disqualification:</strong> Directors may be disqualified from holding office</li>
        <li><strong>Criminal Liability:</strong> In cases of wilful non-compliance, criminal proceedings may be initiated</li>
      </ul>
      
      <h2>Board Responsibilities</h2>
      <p>Boards must ensure that their organisations have robust data protection frameworks in place. This includes:</p>
      <ul>
        <li>Appointing a Data Protection Officer (DPO)</li>
        <li>Implementing consent management mechanisms</li>
        <li>Conducting Data Protection Impact Assessments (DPIAs)</li>
        <li>Establishing data breach response protocols</li>
      </ul>
      
      <h2>CEO Accountability</h2>
      <p>The CEO, as the chief executive officer of the company, bears ultimate responsibility for data protection compliance. CEOs must ensure that data protection is treated as a strategic priority, not just a legal obligation.</p>
      
      <h2>Compliance Requirements</h2>
      <p>Companies must comply with the following key requirements:</p>
      <ul>
        <li><strong>Notice and Consent:</strong> Provide clear notices and obtain valid consent</li>
        <li><strong>Data Security:</strong> Implement reasonable security safeguards</li>
        <li><strong>Data Breach Notification:</strong> Notify the Board and affected individuals within 72 hours</li>
        <li><strong>Data Subject Rights:</strong> Enable individuals to exercise their rights</li>
      </ul>
      
      <h2>Conclusion</h2>
      <p>Directors and boards must take proactive steps to ensure compliance with the DPDP Act. Personal liability is a real risk that can be mitigated through proper governance, training, and implementation of robust data protection frameworks.</p>
    `,
    author: 'Dr. Ananya Sharma',
    date: '22 Jul 2026',
    readTime: '8 min read',
    slug: 'dpdp-act-director-liability'
  },
  {
    id: 2,
    category: 'DPDP Act',
    categoryIcon: Shield,
    title: 'Data Breach Response & Notification Counsel under India\'s DPDP Act',
    excerpt: 'The DPDP Rule 7 breach-notification timeline, what to tell affected individuals and the Data Protection Board, the 72-hour detailed report and how organisations should prepare.',
    content: `
      <h2>Introduction</h2>
      <p>Data breaches are inevitable in today's digital landscape. The DPDP Act establishes clear timelines and requirements for breach notification. This article provides a comprehensive guide to data breach response under the DPDP Act.</p>
      
      <h2>DPDP Rule 7: Breach Notification Timeline</h2>
      <p>Under Rule 7 of the DPDP Rules, data fiduciaries must notify the Data Protection Board within <strong>72 hours</strong> of becoming aware of a data breach.</p>
      
      <h2>What to Tell Affected Individuals</h2>
      <p>Affected individuals must be informed of the breach, including:</p>
      <ul>
        <li>The nature of the breach</li>
        <li>Type of data compromised</li>
        <li>Potential impact</li>
        <li>Remedial actions taken</li>
        <li>Contact details for queries</li>
      </ul>
      
      <h2>72-Hour Detailed Report</h2>
      <p>The detailed report to the Board must include:</p>
      <ul>
        <li>Cause of the breach</li>
        <li>Number of affected individuals</li>
        <li>Type of data compromised</li>
        <li>Immediate remedial actions</li>
        <li>Long-term preventive measures</li>
      </ul>
      
      <h2>Conclusion</h2>
      <p>Preparation is key to effective breach response. Organisations must invest in robust security infrastructure and have a well-documented incident response plan.</p>
    `,
    author: 'Adv. Rajesh Kumar',
    date: '20 Jul 2026',
    readTime: '6 min read',
    slug: 'data-breach-response-dpdp'
  },
  {
    id: 3,
    category: 'GDPR',
    categoryIcon: Globe,
    title: 'GDPR Compliance: A Practical Guide for Indian Businesses Operating in the EU',
    excerpt: 'Understanding GDPR requirements for Indian companies with EU operations. Key obligations, data transfer mechanisms, and compliance strategies for cross-border data flows.',
    content: `
      <h2>Introduction</h2>
      <p>The General Data Protection Regulation (GDPR) applies to Indian companies that offer goods or services to individuals in the EU, or monitor their behaviour. This guide provides practical steps for Indian businesses to achieve GDPR compliance.</p>
      
      <h2>Key Obligations</h2>
      <ul>
        <li>Lawful processing of personal data</li>
        <li>Privacy by design and default</li>
        <li>Data protection impact assessments</li>
        <li>Appointment of Data Protection Officer (DPO)</li>
        <li>Maintaining records of processing</li>
        <li>Data subject rights</li>
      </ul>
      
      <h2>Data Transfer Mechanisms</h2>
      <p>Indian companies must use one of the following mechanisms to transfer data from the EU:</p>
      <ul>
        <li><strong>Adequacy Decision:</strong> EU has not yet issued an adequacy decision for India</li>
        <li><strong>Standard Contractual Clauses (SCCs):</strong> Most common mechanism</li>
        <li><strong>Binding Corporate Rules (BCRs):</strong> Suitable for multinational groups</li>
        <li><strong>Derogations:</strong> Limited exceptions</li>
      </ul>
      
      <h2>Conclusion</h2>
      <p>GDPR compliance is a journey, not a destination. Indian companies must adopt a proactive approach to data protection to build trust with EU customers and avoid significant penalties.</p>
    `,
    author: 'Prof. Meera Patel',
    date: '18 Jul 2026',
    readTime: '10 min read',
    slug: 'gdpr-compliance-guide'
  },
  {
    id: 4,
    category: 'Cross-Border',
    categoryIcon: Globe,
    title: 'Cross-Border Data Transfer: Mechanisms and Compliance under DPDP Act',
    excerpt: 'Exploring cross-border data transfer mechanisms under India\'s DPDP Act. Understanding adequacy decisions, standard contractual clauses, and binding corporate rules.',
    content: `
      <h2>Introduction</h2>
      <p>The DPDP Act regulates cross-border data transfers to ensure that personal data of Indian individuals is adequately protected when processed outside India.</p>
      
      <h2>Adequacy Decisions</h2>
      <p>The Indian government may issue adequacy decisions for countries that provide an adequate level of data protection. Transfers to such countries do not require additional safeguards.</p>
      
      <h2>Standard Contractual Clauses (SCCs)</h2>
      <p>SCCs are model contractual clauses approved by the government that provide appropriate safeguards for cross-border data transfers.</p>
      
      <h2>Conclusion</h2>
      <p>Cross-border data transfers are a complex area of the DPDP Act. Organisations must carefully assess their transfer mechanisms and ensure compliance with the applicable requirements.</p>
    `,
    author: 'Dr. Arun Nair',
    date: '16 Jul 2026',
    readTime: '7 min read',
    slug: 'cross-border-data-transfer'
  },
  {
    id: 5,
    category: 'Data Rights',
    categoryIcon: Users,
    title: 'Data Subject Rights: A Comprehensive Guide for Data Fiduciaries',
    excerpt: 'Understanding the rights of data principals under the DPDP Act. Right to access, correction, erasure, data portability, and grievance redressal mechanisms.',
    content: `
      <h2>Introduction</h2>
      <p>The DPDP Act grants individuals (data principals) several rights to control their personal data. Data fiduciaries must understand and implement these rights.</p>
      
      <h2>Right to Access</h2>
      <p>Individuals have the right to obtain confirmation about whether their data is being processed, and access to the data along with information about the processing.</p>
      
      <h2>Conclusion</h2>
      <p>Data fiduciaries must implement robust processes to facilitate the exercise of these rights. This includes establishing dedicated teams, providing clear communication channels, and maintaining records of requests.</p>
    `,
    author: 'Dr. Ananya Sharma',
    date: '14 Jul 2026',
    readTime: '9 min read',
    slug: 'data-subject-rights-guide'
  },
  {
    id: 6,
    category: 'Compliance',
    categoryIcon: Building,
    title: 'DPDP Act Compliance: A Practical Guide for Businesses in India',
    excerpt: 'How businesses can build DPDP Act 2023 compliance — notice, consent, security, breach response and governance — ahead of the DPDP Rules implementation.',
    content: `
      <h2>Introduction</h2>
      <p>As the DPDP Act 2023 is implemented, businesses must take proactive steps to ensure compliance. This guide provides a practical roadmap for businesses to achieve compliance.</p>
      
      <h2>1. Notice and Consent</h2>
      <ul>
        <li>Provide clear and concise privacy notices</li>
        <li>Obtain valid consent for processing personal data</li>
        <li>Enable individuals to withdraw consent</li>
      </ul>
      
      <h2>Conclusion</h2>
      <p>Compliance is an ongoing process. Businesses must stay informed about regulatory developments and continuously improve their data protection practices.</p>
    `,
    author: 'Adv. Priya Mehta',
    date: '12 Jul 2026',
    readTime: '12 min read',
    slug: 'dpdp-compliance-guide'
  },
  {
    id: 7,
    category: 'Sector-Specific',
    categoryIcon: Database,
    title: 'Sector-Specific Data Protection Rules: Fintech, Healthtech, and E-Commerce',
    excerpt: 'Understanding sector-specific data protection requirements for fintech, healthtech, and e-commerce companies under India\'s data protection regime.',
    content: `
      <h2>Introduction</h2>
      <p>Different sectors face different data protection challenges. This article explores sector-specific requirements for fintech, healthtech, and e-commerce companies.</p>
      
      <h2>Fintech</h2>
      <ul>
        <li>RBI guidelines on data localisation</li>
        <li>KYC and AML compliance</li>
        <li>Fraud detection and prevention</li>
        <li>Consumer data protection</li>
      </ul>
      
      <h2>Conclusion</h2>
      <p>Sector-specific requirements add layers of complexity to data protection compliance. Companies must adopt a sector-agnostic approach while addressing sector-specific nuances.</p>
    `,
    author: 'Team Legal Galaxy',
    date: '10 Jul 2026',
    readTime: '6 min read',
    slug: 'sector-specific-data-protection'
  },
  {
    id: 8,
    category: 'AI & Automation',
    categoryIcon: Scale,
    title: 'AI and Data Protection: Navigating the Legal Landscape',
    excerpt: 'Exploring the intersection of artificial intelligence and data protection. Understanding algorithmic accountability, automated decision-making, and AI governance.',
    content: `
      <h2>Introduction</h2>
      <p>AI is transforming industries, but it also raises significant data protection challenges. This article explores the legal landscape for AI and data protection.</p>
      
      <h2>Algorithmic Accountability</h2>
      <ul>
        <li>Transparency in AI decision-making</li>
        <li>Explainability of AI outputs</li>
        <li>Bias and fairness in AI</li>
        <li>Human oversight</li>
      </ul>
      
      <h2>Conclusion</h2>
      <p>AI and data protection are increasingly intertwined. Organisations must adopt a governance-first approach to AI development and deployment.</p>
    `,
    author: 'Dr. Vikram Singh',
    date: '8 Jul 2026',
    readTime: '8 min read',
    slug: 'ai-and-data-protection'
  },
  {
    id: 9,
    category: 'DPDP Act',
    categoryIcon: Shield,
    title: 'Significant Data Fiduciary (SDF) Readiness: DPIA and Audit under DPDP Act',
    excerpt: 'What makes an organisation a Significant Data Fiduciary? Enhanced obligations under Section 10 and Rule 13, India-based DPO, independent auditor, and annual compliance requirements.',
    content: `
      <h2>Introduction</h2>
      <p>Not all data fiduciaries are created equal. The DPDP Act imposes enhanced obligations on certain entities designated as "Significant Data Fiduciaries" (SDFs).</p>
      
      <h2>What Makes an Organisation an SDF?</h2>
      <ul>
        <li>Volume of personal data processed</li>
        <li>Type of personal data processed</li>
        <li>Risk of harm to data principals</li>
        <li>Geographic reach</li>
        <li>Sectoral sensitivity</li>
      </ul>
      
      <h2>Conclusion</h2>
      <p>SDFs must invest in robust compliance frameworks to meet enhanced obligations. This includes dedicated resources, expert guidance, and ongoing monitoring.</p>
    `,
    author: 'Adv. Rajesh Kumar',
    date: '6 Jul 2026',
    readTime: '11 min read',
    slug: 'significant-data-fiduciary-readiness'
  },
  {
    id: 10,
    category: 'DPDP Act',
    categoryIcon: Shield,
    title: 'Data Protection Officer (DPO) Services in India under the DPDP Act',
    excerpt: 'When the DPDP Act requires a Data Protection Officer, what the role involves, and how organisations can prepare for DPO appointment and responsibilities.',
    content: `
      <h2>Introduction</h2>
      <p>The DPDP Act introduces the role of Data Protection Officer (DPO) for certain data fiduciaries. This article explores the requirements and responsibilities of the DPO.</p>
      
      <h2>When is a DPO Required?</h2>
      <ul>
        <li>Significant Data Fiduciaries (SDFs)</li>
        <li>Data fiduciaries with high-volume processing</li>
        <li>Data fiduciaries processing sensitive data</li>
        <li>Designated by the Board</li>
      </ul>
      
      <h2>Conclusion</h2>
      <p>The DPO plays a critical role in ensuring DPDP Act compliance. Organisations must invest in DPO appointment and support to build a robust data protection framework.</p>
    `,
    author: 'Prof. Meera Patel',
    date: '4 Jul 2026',
    readTime: '5 min read',
    slug: 'dpo-services-india'
  },
  {
    id: 11,
    category: 'Data Rights',
    categoryIcon: Users,
    title: 'Click-Wrap Agreements and India\'s Data Privacy Law: Aligning Digital Consent',
    excerpt: 'The architecture of modern digital commerce rests on an unassuming yet powerful legal device: the click-wrap agreement. Understanding digital consent under the DPDP framework.',
    content: `
      <h2>Introduction</h2>
      <p>The architecture of modern digital commerce rests on an unassuming yet powerful legal device: the click-wrap agreement. Whether subscribing to a service, downloading an app, or making a purchase, users routinely click "I agree" to terms that are often lengthy and technical.</p>
      
      <h2>Judicial Trends and Comparative Insights</h2>
      <p>While Indian jurisprudence on data protection is still evolving, global developments offer instructive parallels. Courts and regulators in jurisdictions such as the <strong>European Union</strong> have increasingly invalidated consent mechanisms that rely on pre-ticked boxes, vague language or bundled permissions.</p>
      
      <h2>Conclusion</h2>
      <p>As India's digital economy expands, the convergence of contract law and data protection will continue to shape how agreements are formed, interpreted, and enforced. Click-wrap agreements, once a symbol of convenience, must now evolve into <strong>instruments of informed choice</strong>.</p>
    `,
    author: 'Aniket Ghosh',
    date: '2 Jul 2026',
    readTime: '7 min read',
    slug: 'click-wrap-agreements-consent'
  },
  {
    id: 12,
    category: 'International',
    categoryIcon: Globe,
    title: 'Global Data Protection Laws: A Comparative Analysis',
    excerpt: 'Comparing data protection frameworks across jurisdictions — GDPR, DPDP Act, CCPA/CPRA, LGPD, PIPL, and POPIA. Understanding the global regulatory landscape.',
    content: `
      <h2>Introduction</h2>
      <p>Data protection laws are evolving rapidly across the globe. This article provides a comparative analysis of major data protection frameworks.</p>
      
      <h2>European Union: GDPR</h2>
      <ul>
        <li>Comprehensive rights for data subjects</li>
        <li>Strict obligations for controllers and processors</li>
        <li>Extraterritorial applicability</li>
        <li>Significant penalties (up to €20 million or 4% of global turnover)</li>
      </ul>
      
      <h2>Conclusion</h2>
      <p>While each framework has its unique features, there is convergence around key principles: individual rights, accountability, and transparency. Multinational organisations must navigate this complex landscape with care.</p>
    `,
    author: 'Dr. Arun Nair',
    date: '30 Jun 2026',
    readTime: '15 min read',
    slug: 'global-data-protection-laws'
  },
];

export const categories = [
  { id: 'all', label: 'All Insights', icon: BookOpen },
  { id: 'DPDP Act', label: 'DPDP Act', icon: Shield },
  { id: 'GDPR', label: 'GDPR', icon: Globe },
  { id: 'Cross-Border', label: 'Cross-Border', icon: Globe },
  { id: 'Data Rights', label: 'Data Rights', icon: Users },
  { id: 'Compliance', label: 'Compliance', icon: Building },
  { id: 'Sector-Specific', label: 'Sector-Specific', icon: Database },
  { id: 'AI & Automation', label: 'AI & Automation', icon: Scale },
  { id: 'International', label: 'International', icon: Globe },
];

export const getInsightBySlug = (slug: string) => {
  return insightsData.find(insight => insight.slug === slug);
};

export const getRelatedInsights = (slug: string, limit: number = 3) => {
  const current = getInsightBySlug(slug);
  if (!current) return [];
  return insightsData
    .filter(i => i.id !== current.id && i.category === current.category)
    .slice(0, limit);
};