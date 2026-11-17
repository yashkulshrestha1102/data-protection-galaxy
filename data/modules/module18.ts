// data/modules/module18.ts

import { Module } from '@/app/types/course';

export const module18: Module = {
  id: 18,
  title: 'Global Privacy Laws',
  description:
    'Navigate the complex landscape of global data protection laws alongside India\'s DPDPA. This module provides a deep comparative study of the GDPR, CCPA/CPRA, Singapore PDPA, China PIPL, Brazil LGPD, Canada PIPEDA, and emerging frameworks across the Middle East, Africa, Asia-Pacific, UK, and Latin America. You will learn to build a unified global compliance program, master cross-border transfer mechanisms, and apply the highest-common-denominator approach used by Indian multinationals operating across jurisdictions.',
  duration: '12 Hours',
  icon: 'Globe',
  learningObjectives: [
    'Compare the core principles, lawful bases, and enforcement models of the world\'s major privacy laws',
    'Understand the GDPR\'s seven principles, six lawful bases, and landmark fines such as the Meta €1.2 billion penalty',
    'Distinguish CCPA, CPRA amendments, and the California Privacy Protection Agency\'s enforcement powers',
    'Analyse China\'s PIPL data localisation, CAC security assessments, and the 5% turnover penalty cap',
    'Map regional frameworks across the Middle East, Africa, Asia-Pacific, UK, and Latin America',
    'Build a unified global compliance program using the highest-common-denominator approach',
    'Evaluate cross-border transfer mechanisms: adequacy decisions, Standard Contractual Clauses, and blacklists',
    'Apply multi-jurisdictional compliance through a real Indian multinational case study',
  ],
  chapters: [
    // ============================================================
    // CHAPTER 1: INTERNATIONAL FRAMEWORKS
    // ============================================================
    {
      id: 1,
      title: 'International Frameworks',
      lessons: [
        // -------- LESSON 1: GDPR --------
        {
          id: 1,
          title: 'The EU GDPR: Principles, Lawful Bases & Enforcement',
          duration: '18 min',
          type: 'video',
          description:
            'A comprehensive study of the General Data Protection Regulation — its seven principles, six lawful bases, data subject rights, and the EDPB enforcement architecture.',
          content:
            'The General Data Protection Regulation (Regulation (EU) 2016/679), in force since 25 May 2018, is the most influential data protection law in the world. It has reshaped how Indian businesses handle data of EU residents, influenced the drafting of the DPDPA, and produced landmark fines including the €1.2 billion Meta Ireland penalty in 2023. This lesson covers the architecture, principles, and enforcement reality of the GDPR so that Indian DPOs can benchmark their DPDPA programs against the global gold standard.',
          learningObjectives: [
            'Recite the seven GDPR principles under Article 5',
            'List and apply the six lawful bases under Article 6',
            'Explain special category data protections under Article 9',
            'Understand the role of the European Data Protection Board (EDPB)',
            'Analyse the Meta €1.2B fine and its implications for cross-border transfers',
          ],
          keyTakeaways: [
            'GDPR applies extraterritorially to any controller offering goods or services to EU residents, even without an EU establishment (Article 3(2)).',
            'The seven principles are lawfulness, fairness, transparency; purpose limitation; data minimisation; accuracy; storage limitation; integrity and confidentiality; and accountability.',
            'Maximum fines are €20 million or 4% of global annual turnover, whichever is higher (Article 83).',
            'The May 2023 Meta Ireland €1.2 billion fine was for unlawful SCC-based transfers to the US, showing transfer risk is enforcement risk.',
            'GDPR significantly shaped the DPDPA, but DPDPA is consent-centric while GDPR allows six bases.',
          ],
          sections: [
            {
              id: 'sec-1',
              title: 'Scope, Extraterritoriality & Key Definitions',
              content: [
                {
                  type: 'paragraph',
                  content:
                    'The GDPR applies to the processing of personal data of data subjects who are in the EU, regardless of where the controller or processor is established. Article 3(1) covers controllers established in the EU. Article 3(2) extends reach to non-EU controllers that (a) offer goods or services to EU data subjects or (b) monitor their behaviour in the EU. For an Indian SaaS company serving EU customers, this means GDPR applies even if no server is in the EU.',
                },
                {
                  type: 'heading',
                  content: 'Core Definitions',
                },
                {
                  type: 'list',
                  content: 'Key GDPR definitions and their DPDPA equivalents',
                  items: [
                    'Personal Data (Article 4(1)): any information relating to an identified or identifiable natural person — DPDPA equivalent is "personal data".',
                    'Data Controller (Article 4(7)): the entity that determines purposes and means — DPDPA equivalent is "Data Fiduciary".',
                    'Data Processor (Article 4(8)): entity that processes on behalf of the controller — DPDPA equivalent is "Data Processor".',
                    'Data Subject (Article 4(1)): the identified natural person — DPDPA equivalent is "Data Principal".',
                    'Special Category Data (Article 9): race, religion, health, sex life, biometric and genetic data — DPDPA does not use this category but Section 9 protects children.',
                  ],
                },
                {
                  type: 'callout',
                  content:
                    'Unlike the GDPR, the DPDPA does not define "special category data". Instead, it imposes heightened obligations on Significant Data Fiduciaries under Section 10 and protects children under Section 9. Indian firms that processed "special category" health data under GDPR must now also consider Section 9 obligations if children are involved.',
                  calloutType: 'important',
                },
              ],
            },
            {
              id: 'sec-2',
              title: 'The Seven Principles (Article 5)',
              content: [
                {
                  type: 'paragraph',
                  content:
                    'Article 5 lists the seven principles that form the backbone of every GDPR compliance program. These principles are technology-neutral and have directly influenced the obligations under DPDPA Sections 8 and 11. They are enforceable not just as rules but as a culture of accountability.',
                },
                {
                  type: 'list',
                  content: 'The seven GDPR principles',
                  items: [
                    'Lawfulness, Fairness, Transparency (Art 5(1)(a)): processing must be legal, fair, and disclosed to the data subject.',
                    'Purpose Limitation (Art 5(1)(b)): data collected for specified purposes cannot be reused for incompatible purposes.',
                    'Data Minimisation (Art 5(1)(c)): collect only what is necessary — directly mirrored in DPDPA Section 8(3).',
                    'Accuracy (Art 5(1)(d)): keep data accurate and up to date.',
                    'Storage Limitation (Art 5(1)(e)): retain only as long as necessary — DPDPA Section 8(7) mirrors this.',
                    'Integrity and Confidentiality (Art 5(1)(f)): implement security safeguards — DPDPA Section 8(5) mirrors this.',
                    'Accountability (Art 5(2)): demonstrate compliance through records, DPIAs, and audits — DPDPA Section 10 extends this for SDFs.',
                  ],
                },
                {
                  type: 'example',
                  content:
                    'An Indian fintech company offering UPI services to EU-based Non-Resident Indians must apply purpose limitation: KYC data collected for regulatory compliance cannot be repurposed to send marketing SMS without a fresh lawful basis.',
                },
              ],
            },
            {
              id: 'sec-3',
              title: 'Lawful Bases & Data Subject Rights',
              content: [
                {
                  type: 'paragraph',
                  content:
                    'Under Article 6, every processing activity must rest on one of six lawful bases. This is the single biggest philosophical difference between GDPR and DPDPA: the GDPR offers flexibility, while the DPDPA relies overwhelmingly on consent (Section 6) and certain "legitimate uses" (Section 7) such as employment, disaster response, and medical emergencies.',
                },
                {
                  type: 'table',
                  headers: ['Lawful Basis', 'When to Use', 'DPDPA Equivalent'],
                  rows: [
                    ['Consent (Art 6(1)(a))', 'Individual gave informed, specific consent', 'Consent under Section 6'],
                    ['Contract (Art 6(1)(b))', 'Necessary to perform a contract with the data subject', 'Legitimate use under Section 7'],
                    ['Legal Obligation (Art 6(1)(c))', 'Required by law', 'Legitimate use under Section 7'],
                    ['Vital Interests (Art 6(1)(d))', 'Protect someone\'s life', 'Legitimate use under Section 7(b)'],
                    ['Public Task (Art 6(1)(e))', 'Official authority or public interest task', 'State processing under Section 17'],
                    ['Legitimate Interests (Art 6(1)(f))', 'Business interest not overridden by data subject rights', 'No direct equivalent in DPDPA'],
                  ],
                },
                {
                  type: 'heading',
                  content: 'Data Subject Rights (Articles 12-22)',
                },
                {
                  type: 'paragraph',
                  content:
                    'The GDPR grants eight rights: access, rectification, erasure (right to be forgotten), restriction, portability, objection, rights related to automated decision-making, and the right not to be subject to solely automated decisions. The DPDPA grants narrower rights under Section 11 (access, correction, erasure, grievance redressal) and Section 12 (nominee). Portability and objection rights are absent in the DPDPA.',
                },
                {
                  type: 'callout',
                  content:
                    'The right to be forgotten (Article 17 GDPR) has no exact DPDPA equivalent. Data Principals can request erasure under Section 11(3)(c) DPDPA, but only after the purpose is served or retention is no longer necessary. There is no public-interest test as in GDPR.',
                  calloutType: 'note',
                },
              ],
            },
            {
              id: 'sec-4',
              title: 'Enforcement Architecture & Landmark Fines',
              content: [
                {
                  type: 'paragraph',
                  content:
                    'GDPR enforcement is decentralised across national Data Protection Authorities (DPAs) coordinated by the European Data Protection Board (EDPB). The one-stop-shop mechanism means a multinational can have a single lead supervisory authority, but DPAs like CNIL (France), the ICO (UK, pre-Brexit), the DPC (Ireland), and the BfDI (Germany) remain active enforcers.',
                },
                {
                  type: 'heading',
                  content: 'Notable Fines (2018-2024)',
                },
                {
                  type: 'table',
                  headers: ['Entity', 'Fine', 'Year', 'Reason'],
                  rows: [
                    ['Meta Ireland', '€1.2 billion', '2023', 'Unlawful SCC transfers to US after Schrems II'],
                    ['Amazon Europe', '€746 million', '2021', 'Targeted advertising without valid consent'],
                    ['Meta Ireland', '€405 million', '2022', 'Children\'s data on Instagram'],
                    ['WhatsApp Ireland', '€225 million', '2021', 'Transparency failures under Article 13/14'],
                    ['Google LLC (CNIL)', '€150 million', '2022', 'Cookie consent banners not equally easy to refuse'],
                    ['TikTok (CNIL)', '€5.4 million + €345M', '2022-2023', 'Children\'s data handling'],
                  ],
                },
                {
                  type: 'paragraph',
                  content:
                    'The Meta €1.2 billion fine by the Irish Data Protection Commission in May 2023 is the largest GDPR fine to date. It followed the Schrems II judgment (CJEU Case C-311/18, July 2020), which invalidated the EU-US Privacy Shield and required supplementary measures alongside Standard Contractual Clauses when transferring data to the US. The lesson for Indian firms: SCCs alone are not enough — you must assess the destination country\'s surveillance laws and add technical safeguards such as encryption with EU-held keys.',
                },
                {
                  type: 'callout',
                  content:
                    'Under Article 83, maximum GDPR fines are €20 million or 4% of global annual turnover, whichever is higher. The DPDPA cap is ₹250 crore (approx. €27 million) under Section 33, but the DPDPA Board can impose multiple penalties for continuing breaches, and the government may notify higher limits for repeat offenders.',
                  calloutType: 'warning',
                },
                {
                  type: 'example',
                  content:
                    'A Bengaluru-based analytics vendor transferring EU customer data to an AWS Mumbai region and then replicating it to AWS US-East must document a Transfer Impact Assessment (TIA), implement split-key encryption, and ideally route US access through a controlled EU gateway — all to mirror the Meta Ireland remediation.',
                },
              ],
            },
          ],
          glossary: [
            { term: 'GDPR', definition: 'General Data Protection Regulation (EU) 2016/679, the European Union\'s principal data protection law in force since 25 May 2018.' },
            { term: 'EDPB', definition: 'European Data Protection Board, an independent body ensuring consistent application of the GDPR across the EU.' },
            { term: 'Lawful Basis', definition: 'One of six legal grounds under Article 6 GDPR that justifies processing of personal data.' },
            { term: 'Standard Contractual Clauses (SCCs)', definition: 'Pre-approved contractual terms issued by the European Commission to legitimise cross-border data transfers.' },
            { term: 'Schrems II', definition: 'CJEU judgment of 16 July 2020 invalidating the EU-US Privacy Shield and requiring supplementary measures with SCCs.' },
          ],
          references: [
            { title: 'Regulation (EU) 2016/679 (GDPR)', source: 'European Union', year: '2016' },
            { title: 'Schrems II Judgment, Case C-311/18', source: 'Court of Justice of the EU', year: '2020' },
            { title: 'Meta Ireland €1.2B Decision', source: 'Irish Data Protection Commission', year: '2023' },
            { title: 'EDPB Guidelines on Transfer Tools', source: 'European Data Protection Board', year: '2021' },
          ],
        },
        // -------- LESSON 2: CCPA / CPRA --------
        {
          id: 2,
          title: 'CCPA & CPRA: California\'s Privacy Regime',
          duration: '16 min',
          type: 'reading',
          description:
            'The California Consumer Privacy Act (CCPA) as amended by the California Privacy Rights Act (CPRA) — rights, enforcement by the California Privacy Protection Agency, and the $7,500 per-violation cap.',
          content:
            'California\'s privacy regime, often called "America\'s GDPR", is the most comprehensive state-level privacy law in the United States. The CCPA took effect on 1 January 2020 and was substantially expanded by the CPRA (Proposition 24) from 1 January 2023. For Indian IT and BPO firms serving California-based clients, compliance is now table stakes, and the new California Privacy Protection Agency (CPPA) is the first dedicated privacy regulator in the US with rulemaking and enforcement powers.',
          learningObjectives: [
            'Identify which businesses are covered by CCPA/CPRA thresholds',
            'List the eleven consumer rights under CPRA',
            'Explain the CPPA\'s enforcement powers and the $7,500 per-violation cap',
            'Distinguish CCPA from GDPR and DPDPA in scope and philosophy',
          ],
          keyTakeaways: [
            'CCPA/CPRA applies to for-profit businesses with >$25 million annual revenue, or handling data of >100,000 consumers (75,000 after CPRA), or deriving >50% of revenue from selling data.',
            'CPRA created the California Privacy Protection Agency (CPPA) — the first US regulator with full privacy rulemaking authority.',
            'Maximum civil penalty is $2,500 per violation or $7,500 for intentional or child-related violations.',
            'Unlike GDPR and DPDPA, CCPA is sectoral and threshold-based, not universal.',
            'CPRA introduced "sensitive personal information", correction rights, and opt-out of automated decision-making.',
          ],
          sections: [
            {
              id: 'sec-1',
              title: 'Applicability & Thresholds',
              content: [
                {
                  type: 'paragraph',
                  content:
                    'Unlike the GDPR (which applies to all controllers processing EU data) or the DPDPA (which applies to all data fiduciaries processing Indian personal data), the CCPA applies only to for-profit businesses that meet one of three thresholds: (1) gross annual revenue exceeding $25 million; (2) annually buying, selling, or sharing personal information of 100,000 or more consumers or households (lowered to 100,000 consumers after CPRA, removing households); or (3) deriving 50% or more of annual revenue from selling or sharing personal information.',
                },
                {
                  type: 'callout',
                  content:
                    'For an Indian BPO with a California client, the CCPA applies indirectly: the Indian vendor is a "service provider" under the client\'s contract and must flow down CCPA obligations via the data processing agreement (DPA). This is structurally identical to the DPDPA Section 8(6) processor contract requirement.',
                  calloutType: 'important',
                },
                {
                  type: 'example',
                  content:
                    'A Hyderabad call centre handling customer support for a California retailer becomes a "service provider" under CCPA. It must sign a DPA restricting use of personal data to the retailer\'s business purpose, certify annually, and allow the retailer to audit compliance.',
                },
              ],
            },
            {
              id: 'sec-2',
              title: 'Consumer Rights Under CPRA',
              content: [
                {
                  type: 'paragraph',
                  content:
                    'The CPRA expanded consumer rights from the original CCPA rights. California residents now enjoy eleven rights, including the right to limit use of sensitive personal information and rights related to automated decision-making technology.',
                },
                {
                  type: 'list',
                  content: 'CPRA consumer rights',
                  items: [
                    'Right to know what personal information is collected, sold, or shared (Cal. Civ. Code §1798.100)',
                    'Right to delete personal information (§1798.105)',
                    'Right to correct inaccurate personal information (§1798.106 — new under CPRA)',
                    'Right to opt-out of sale or sharing (§1798.120)',
                    'Right to limit use of sensitive personal information (§1798.121 — new under CPRA)',
                    'Right to non-discrimination for exercising rights (§1798.125)',
                    'Right to access specific pieces of information (§1798.110)',
                    'Right to data portability (§1798.100(d))',
                    'Right to opt-out of automated decision-making technology (regulations effective 2025)',
                    'Right to know about automated decision-making and profiling',
                    'Right to receive notice at collection (§1798.135)',
                  ],
                },
                {
                  type: 'paragraph',
                  content:
                    'The Global Privacy Control (GPC) browser signal must be honoured as a valid opt-out of "sale or share" under CPPA regulations effective 2023. Indian publishers monetising California traffic via ad-tech must detect the GPC header and suppress targeted advertising.',
                },
              ],
            },
            {
              id: 'sec-3',
              title: 'Sensitive Personal Information & CPPA Enforcement',
              content: [
                {
                  type: 'paragraph',
                  content:
                    'The CPRA introduced "sensitive personal information" (SPI) as a new category, similar to GDPR\'s special category data. SPI includes government identifiers (SSN, driver\'s licence), account log-in details, precise geolocation, racial/ethnic origin, religious beliefs, contents of mail/email/text, genetic data, biometric data, health data, and sex life data. Consumers can limit use of SPI to purposes necessary to perform the services or provide the goods reasonably expected.',
                },
                {
                  type: 'heading',
                  content: 'The California Privacy Protection Agency',
                },
                {
                  type: 'paragraph',
                  content:
                    'The CPPA, established by the CPRA, is the first US agency with rulemaking, enforcement, and education powers exclusively for privacy. It has five board members and a full-time staff. The CPPA can investigate, issue fines, and adopt regulations on cybersecurity audits, risk assessments, automated decision-making, and AI. It works alongside the California Attorney General, who retains concurrent enforcement authority.',
                },
                {
                  type: 'table',
                  headers: ['Violation Type', 'Penalty', 'Statute'],
                  rows: [
                    ['Non-intentional violation', '$2,500 per violation', 'Cal. Civ. Code §1798.155'],
                    ['Intentional violation or violations involving minors', '$7,500 per violation', 'Cal. Civ. Code §1798.155'],
                    ['Failure to cure within 30-day cure period (pre-CPPA)', 'Statutory damages $100-$750 per consumer per incident', 'Cal. Civ. Code §1798.150'],
                  ],
                },
                {
                  type: 'callout',
                  content:
                    'Each "violation" can be counted per consumer, per day — meaning a 100,000-record breach could theoretically expose a company to hundreds of millions in penalties. In 2024, the CPPA began enforcement actions including against data brokers failing to honour deletion requests.',
                  calloutType: 'warning',
                },
                {
                  type: 'example',
                  content:
                    'In 2023, the California AG secured a $3.4 million settlement with a cosmetics company for failing to disclose data sales and honour deletion requests — the largest state-enforced CCPA settlement to date. Indian cosmetic exporters selling DTC to California must comply.',
                },
              ],
            },
            {
              id: 'sec-4',
              title: 'CCPA vs DPDPA: Structural Comparison',
              content: [
                {
                  type: 'paragraph',
                  content:
                    'While CCPA and DPDPA share principles of transparency and consumer control, they differ fundamentally in philosophy. CCPA is an opt-out regime for sales and a notice-based regime for collection; DPDPA is an opt-in consent regime for nearly all processing. CCPA has a private right of action for data breaches (§1798.150); DPDPA has no private right of action — only the Data Protection Board can adjudicate.',
                },
                {
                  type: 'table',
                  headers: ['Feature', 'CCPA/CPRA', 'DPDPA 2023'],
                  rows: [
                    ['Primary basis', 'Notice + opt-out', 'Consent under Section 6'],
                    ['Sensitive data', 'SPI — limit use', 'Children\'s data (Section 9), no SPI category'],
                    ['Enforcer', 'CPPA + California AG', 'Data Protection Board'],
                    ['Max penalty', '$7,500 per violation', '₹250 crore (Section 33)'],
                    ['Private right of action', 'Yes, for breaches (§1798.150)', 'No'],
                    ['Breach notification', 'To consumers + AG', 'To Board + affected principals (Section 8(6))'],
                  ],
                },
              ],
            },
          ],
          glossary: [
            { term: 'CCPA', definition: 'California Consumer Privacy Act, effective 1 January 2020, the first comprehensive US state privacy law.' },
            { term: 'CPRA', definition: 'California Privacy Rights Act (Proposition 24), amendments to CCPA effective 1 January 2023.' },
            { term: 'CPPA', definition: 'California Privacy Protection Agency, established by CPRA, first US dedicated privacy regulator.' },
            { term: 'Sensitive Personal Information (SPI)', definition: 'Category introduced by CPRA covering government IDs, biometrics, health, precise geolocation, and similar data.' },
            { term: 'Global Privacy Control (GPC)', definition: 'Browser signal that CCPA/CPRA regulations require businesses to honour as an opt-out of sale/sharing.' },
          ],
          references: [
            { title: 'California Consumer Privacy Act of 2018, Cal. Civ. Code §1798.100 et seq.', source: 'California Legislature', year: '2018' },
            { title: 'Proposition 24, California Privacy Rights Act', source: 'California Secretary of State', year: '2020' },
            { title: 'CPPA Enforcement Regulations', source: 'California Privacy Protection Agency', year: '2023' },
          ],
        },
        // -------- LESSON 3: SINGAPORE PDPA --------
        {
          id: 3,
          title: 'Singapore PDPA: Deemed Consent & PDPC Enforcement',
          duration: '15 min',
          type: 'reading',
          description:
            'Singapore\'s Personal Data Protection Act — the Personal Data Protection Commission, deemed consent, the Do Not Call registry, and the 3-day breach notification rule.',
          content:
            'Singapore\'s Personal Data Protection Act 2012 is the most business-friendly comprehensive privacy law in Asia, often described as "GDPR-lite". For Indian fintech and DigiLocker-style integrators entering ASEAN markets, the PDPA is frequently the first foreign law they must comply with. The Act was substantially amended in 2020 to introduce breach notification, deemed consent by notification, and enhanced penalties. The regulator, the Personal Data Protection Commission (PDPC), is known for pragmatic, business-aware enforcement.',
          learningObjectives: [
            'Understand the PDPA\'s consent-centric model and deemed consent variants',
            'Apply the 3-day breach notification rule to the PDPC',
            'Distinguish the Do Not Call (DNC) registry from general marketing rules',
            'Compare PDPA enforcement penalties with DPDPA Section 33',
          ],
          keyTakeaways: [
            'PDPA has a single consent obligation under Section 13, with deemed consent by notification and contractual necessity as new variants added in 2020.',
            'Breach notification to PDPC is required within 3 calendar days if the breach results in significant harm or affects 500+ individuals (Section 26B/26C).',
            'The Do Not Call registry covers telemarketing via phone, SMS, and fax, and businesses must check the registry before sending marketing messages.',
            'Maximum financial penalty is S$1 million or 10% of annual turnover in Singapore (whichever higher) for organisations with turnover > S$10 million.',
            'PDPC is integrated with the IMDA (Infocomm Media Development Authority) for telecom-related data.',
          ],
          sections: [
            {
              id: 'sec-1',
              title: 'Consent, Deemed Consent & Notification',
              content: [
                {
                  type: 'paragraph',
                  content:
                    'Under Section 13 of the PDPA, organisations may collect, use, or disclose personal data only with consent, for reasonable purposes, or under specific exceptions. The 2020 amendments introduced "deemed consent" in two forms: deemed consent by contractual necessity (Section 15A) and deemed consent by notification (Section 15B), where an organisation gives clear notice and the individual does not opt out.',
                },
                {
                  type: 'heading',
                  content: 'Deemed Consent Variants',
                },
                {
                  type: 'list',
                  content: 'Deemed consent under PDPA',
                  items: [
                    'Deemed consent by contractual necessity (Section 15A): necessary to perform a contract the individual is party to.',
                    'Deemed consent by notification (Section 15B): notification with reasonable opt-out opportunity and no objection.',
                    'Deemed consent for business contact information (Section 15): business cards, professional directories.',
                    'Legitimate interests exception (Section 18): new 2020 addition, similar to GDPR Article 6(1)(f), subject to a legitimate interests assessment (LIA).',
                  ],
                },
                {
                  type: 'callout',
                  content:
                    'The PDPA\'s deemed consent by notification is conceptually similar to the DPDPA\'s "legitimate use" under Section 7, but DPDPA Section 7 is a closed list (employment, disaster, medical emergency) whereas PDPA deemed consent is broader and more flexible.',
                  calloutType: 'note',
                },
              ],
            },
            {
              id: 'sec-2',
              title: 'Breach Notification: The 3-Day Rule',
              content: [
                {
                  type: 'paragraph',
                  content:
                    'Sections 26B and 26C of the PDPA, in force since February 2021, require organisations to notify the PDPC of a notifiable breach as soon as practicable, but no later than 3 calendar days after the organisation determines that the breach is notifiable. A breach is notifiable if it (a) results in significant harm to affected individuals or (b) affects 500 or more individuals. Affected individuals must also be notified unless the PDPC grants an exemption.',
                },
                {
                  type: 'table',
                  headers: ['Aspect', 'Singapore PDPA', 'DPDPA 2023', 'GDPR'],
                  rows: [
                    ['Regulator notification deadline', '3 calendar days', 'As soon as possible (Section 8(6))', '72 hours'],
                    ['Individual notification', 'Required unless exempted', 'Required if likely harm', 'Required if high risk'],
                    ['Threshold', 'Significant harm OR 500+ individuals', 'Board may specify by rule', 'All breaches unless unlikely risk'],
                    ['Penalty for non-notification', 'Up to S$1M or 10% turnover', 'Up to ₹250 crore', 'Up to €10M or 2%'],
                  ],
                },
                {
                  type: 'example',
                  content:
                    'A Singapore-based e-commerce platform discovers a breach on Monday affecting 1,200 customers\' payment data. It must notify PDPC by Thursday (3 calendar days) and notify all 1,200 customers unless the PDPC agrees the data was rendered unusable by encryption.',
                },
              ],
            },
            {
              id: 'sec-3',
              title: 'Do Not Call Registry & Marketing Rules',
              content: [
                {
                  type: 'paragraph',
                  content:
                    'Part IXA of the PDPA establishes the Do Not Call (DNC) Registry. Singapore residents can register their telephone numbers to opt out of marketing calls, SMS, and fax. Organisations must check the DNC registry within 60 days before sending telemarketing messages, and must pay a per-number check fee. The DNC regime covers voice calls, text messages, and fax but not email — which is regulated under the Spam Control Act.',
                },
                {
                  type: 'callout',
                  content:
                    'Sending marketing messages to a DNC-registered number without clear, written consent can attract fines of S$10,000 per message up to S$1 million for organisations. India\'s TRAI has a parallel "National Do Not Call" / TCCCPR framework, but the thresholds and enforcement differ.',
                  calloutType: 'warning',
                },
                {
                  type: 'heading',
                  content: 'Notable PDPC Enforcement',
                },
                {
                  type: 'list',
                  content: 'Recent PDPC financial penalties',
                  items: [
                    'SingHealth (2019): S$1 million for the worst cyber attack in Singapore history affecting 1.5 million patients including Prime Minister.',
                    'Grab (2022): S$16,000 for failing to obtain valid consent for driver data sharing.',
                    'NTUC Income (2022): S$78,000 for failing to appoint a Data Protection Officer and conduct audits.',
                    'Shopee (2023): S$72,000 for failing to obtain consent for data sharing with third parties.',
                  ],
                },
              ],
            },
            {
              id: 'sec-4',
              title: 'DPDP-Style Protections & PDPC Guidance',
              content: [
                {
                  type: 'paragraph',
                  content:
                    'While the PDPA does not contain a "children" definition like DPDPA Section 9, the PDPC\'s Advisory Guidelines on the PDPA for Children\'s Personal Data in the Digital Environment (March 2024) recommend obtaining parental consent for children under 13. The PDPC has also issued guidelines on AI and personal data (March 2024) which mirror emerging DPDPA expectations on Significant Data Fiduciaries using AI.',
                },
                {
                  type: 'example',
                  content:
                    'A Chennai edtech startup launching in Singapore for K-12 students must apply DPDPA Section 9 verifiable parental consent principles even though the PDPA itself does not mandate it — because PDPC guidelines effectively require it for app store compliance.',
                },
              ],
            },
          ],
          glossary: [
            { term: 'PDPA', definition: 'Personal Data Protection Act 2012 of Singapore, amended in 2020.' },
            { term: 'PDPC', definition: 'Personal Data Protection Commission, Singapore\'s data protection regulator.' },
            { term: 'Deemed Consent', definition: 'Consent presumed by conduct or contractual necessity under Sections 15, 15A and 15B of the PDPA.' },
            { term: 'DNC Registry', definition: 'Do Not Call Registry established under Part IXA of the PDPA for telemarketing opt-out.' },
            { term: 'IMDA', definition: 'Infocomm Media Development Authority, Singapore\'s telecom and media regulator, working alongside the PDPC.' },
          ],
          references: [
            { title: 'Personal Data Protection Act 2012 (as amended 2020)', source: 'PDPC Singapore', year: '2020' },
            { title: 'Advisory Guidelines on Children\'s Personal Data in the Digital Environment', source: 'PDPC Singapore', year: '2024' },
            { title: 'SingHealth Decision', source: 'PDPC Singapore', year: '2019' },
          ],
        },
        // -------- LESSON 4: CHINA PIPL --------
        {
          id: 4,
          title: 'China PIPL: Data Localisation & CAC Enforcement',
          duration: '17 min',
          type: 'reading',
          description:
            'China\'s Personal Information Protection Law — the Cyberspace Administration of China, security assessments, data localisation, and the 5% turnover penalty.',
          content:
            'The Personal Information Protection Law of the People\'s Republic of China (PIPL), effective 1 November 2021, is among the world\'s strictest privacy laws. Together with the Cybersecurity Law (2017) and Data Security Law (2021), it forms a triad that imposes data localisation, government security assessments, and severe penalties of up to 5% of the previous year\'s turnover. For Indian pharmaceutical, IT, and manufacturing firms with China operations, PIPL compliance is non-negotiable.',
          learningObjectives: [
            'Explain the PIPL\'s extraterritorial scope and Article 3(2) long-arm jurisdiction',
            'Apply the data localisation rules for Critical Information Infrastructure Operators',
            'Understand security assessment requirements before cross-border transfers',
            'Compare the 5% turnover penalty cap with DPDPA\'s ₹250 crore cap',
          ],
          keyTakeaways: [
            'PIPL Article 3(2) extends jurisdiction to overseas entities targeting or analysing individuals inside China — similar to GDPR Article 3(2) and DPDPA\'s extraterritorial scope.',
            'Critical Information Infrastructure Operators (CIIOs) and handlers of personal information above thresholds set by CAC must store personal information collected in China within China (Article 40).',
            'Cross-border transfers require one of three mechanisms: CAC security assessment, certification by a CAC-recognised body, or CAC-filed Standard Contract (Article 38).',
            'Maximum penalty is RMB 50 million or 5% of preceding year\'s turnover, plus business licence revocation (Article 66).',
            'Separate consent is required for sensitive information, cross-border transfers, and disclosure to third parties (Articles 23, 29, 39).',
          ],
          sections: [
            {
              id: 'sec-1',
              title: 'Scope, Definitions & Sensitive Information',
              content: [
                {
                  type: 'paragraph',
                  content:
                    'The PIPL applies to handling activities of personal information within China\'s borders. Article 3(2) extends its long-arm jurisdiction to overseas handlers targeting individuals inside China — for example, an Indian e-commerce site shipping to Chinese buyers must comply. The PIPL defines "personal information handler" (akin to GDPR controller / DPDPA Data Fiduciary) as the organisation that independently determines the purposes and methods of handling.',
                },
                {
                  type: 'heading',
                  content: 'Sensitive Personal Information (Article 28)',
                },
                {
                  type: 'paragraph',
                  content:
                    'Sensitive information includes data that, once leaked or misused, could harm personal dignity or safety — identity, biometrics, medical, financial accounts, location tracking, and the personal information of minors under 14. Handling sensitive information requires "separate consent" (Article 29) and a necessity assessment.',
                },
                {
                  type: 'callout',
                  content:
                    'PIPL\'s definition of sensitive information is broader than GDPR\'s special category data because it includes minors under 14 and financial accounts. This aligns conceptually with DPDPA Section 9\'s heightened protection for children under 18 (with parental consent for those under 18).',
                  calloutType: 'important',
                },
              ],
            },
            {
              id: 'sec-2',
              title: 'Data Localisation & Cross-Border Transfers',
              content: [
                {
                  type: 'paragraph',
                  content:
                    'Article 40 requires CIIOs and large-volume handlers (defined by CAC thresholds, currently 1 million individuals or 100,000 sensitive records) to store personal information collected and generated in China within mainland China. Cross-border transfer requires one of three mechanisms: (1) a CAC security assessment; (2) certification by a CAC-recognised body; or (3) a CAC-filed Standard Contract (Article 38).',
                },
                {
                  type: 'table',
                  headers: ['Transfer Mechanism', 'Trigger', 'Authority'],
                  rows: [
                    ['CAC Security Assessment', 'CIIO data, >1M individuals, >100K sensitive records, or "important data"', 'Cyberspace Administration of China'],
                    ['CAC Certification', 'Smaller transfers, often intra-group', 'CAC-recognised certification body'],
                    ['Standard Contract (SC)', 'Non-CIIO handlers below security assessment thresholds', 'File with provincial CAC'],
                  ],
                },
                {
                  type: 'callout',
                  content:
                    'A 2023 CAC enforcement against ride-hailing firm Didi resulted in an RMB 8.026 billion (approximately US$1.2 billion) fine for illegal data collection and violation of cybersecurity review requirements — the largest PIPL/Cybersecurity Law fine to date.',
                  calloutType: 'warning',
                },
                {
                  type: 'example',
                  content:
                    'An Indian pharmaceutical company with a Shanghai R&D centre must store clinical trial participant data on Chinese servers, and if it needs to transfer the data to Mumbai HQ for global FDA submissions, it must obtain CAC security assessment approval first — typically a 35-60 working day process.',
                },
              ],
            },
            {
              id: 'sec-3',
              title: 'Individual Rights & Government Access',
              content: [
                {
                  type: 'paragraph',
                  content:
                    'PIPL Articles 44-50 grant individuals rights to know, decide, refuse, query, copy, correct, delete, and demand explanation of automated decisions. The PIPL requires handlers to designate a Personal Information Protection Officer (Article 52) and to publish contact information. Unlike GDPR, the PIPL explicitly recognises that government authorities may access personal information for law enforcement, subject to confidentiality.',
                },
                {
                  type: 'heading',
                  content: 'The DPDPA Comparison',
                },
                {
                  type: 'table',
                  headers: ['Feature', 'PIPL', 'DPDPA 2023'],
                  rows: [
                    ['Bases', 'Consent + 6 alternatives, no legitimate interests', 'Consent (Section 6) + legitimate use (Section 7)'],
                    ['Children', 'Under 14 = sensitive', 'Under 18 = parental consent (Section 9)'],
                    ['Cross-border', 'CAC approval required', 'Blacklist countries only (Section 16)'],
                    ['DPO/Officer', 'Article 52 PIPL Officer', 'Section 8(9) for Significant Data Fiduciaries'],
                    ['Max fine', '5% turnover or RMB 50M', '₹250 crore (Section 33)'],
                    ['Government access', 'Explicit recognition', 'Section 17 exemption for State'],
                  ],
                },
              ],
            },
            {
              id: 'sec-4',
              title: 'CAC Enforcement & Recent Developments',
              content: [
                {
                  type: 'paragraph',
                  content:
                    'The Cyberspace Administration of China (CAC) is the primary PIPL enforcer, often acting alongside the Ministry of Industry and Information Technology (MIIT) and the Ministry of Public Security. CAC enforcement has accelerated: in 2023-2024, the CAC issued guidance on generative AI (effective August 2023), deep synthesis, and algorithmic recommendations, all of which add layered obligations on personal information handlers using AI.',
                },
                {
                  type: 'example',
                  content:
                    'An Indian AI startup training models on Chinese user data must conduct a Personal Information Protection Impact Assessment (PIPIA) under Article 55, obtain separate consent, and consider whether the data leaves China — a regulatory triad that often discourages use of Chinese data for offshore AI training.',
                },
                {
                  type: 'callout',
                  content:
                    'Unlike GDPR and DPDPA, the PIPL explicitly contemplates state access to personal data. Indian firms operating in China must design their compliance program acknowledging that Chinese government access is lawful and not a breach of the PIPL — a posture that may conflict with EU SCC supplementary measure requirements.',
                  calloutType: 'important',
                },
              ],
            },
          ],
          glossary: [
            { term: 'PIPL', definition: 'Personal Information Protection Law of the PRC, effective 1 November 2021.' },
            { term: 'CAC', definition: 'Cyberspace Administration of China, the principal PIPL and cybersecurity regulator.' },
            { term: 'CIIO', definition: 'Critical Information Infrastructure Operator, subject to stricter data localisation under PIPL Article 40 and the Cybersecurity Law.' },
            { term: 'Separate Consent', definition: 'Distinct, unbundled consent required under PIPL Articles 23, 29, 39 for transfers, sensitive data, and third-party disclosure.' },
            { term: 'PIPIA', definition: 'Personal Information Protection Impact Assessment, required under PIPL Article 55 for sensitive data, automation, and transfers.' },
          ],
          references: [
            { title: 'Personal Information Protection Law of the People\'s Republic of China', source: 'National People\'s Congress', year: '2021' },
            { title: 'Measures for the Standard Contract for Outbound Cross-Border Transfer of Personal Information', source: 'Cyberspace Administration of China', year: '2023' },
            { title: 'Didi Global Enforcement Decision', source: 'Cyberspace Administration of China', year: '2022' },
            { title: 'Interim Measures for Generative AI Services', source: 'CAC', year: '2023' },
          ],
        },
        // -------- LESSON 5: MULTI-JURISDICTIONAL COMPLIANCE --------
        {
          id: 5,
          title: 'Multi-Jurisdictional Compliance: The Highest-Common-Denominator Approach',
          duration: '14 min',
          type: 'reading',
          description:
            'How Indian multinationals reconcile overlapping obligations under DPDPA, GDPR, CCPA, PIPL and PDPA using a single, unified compliance baseline.',
          content:
            'An Indian multinational with EU customers, US offices, and Singapore partners must comply with the DPDPA domestically and the GDPR, CCPA, PDPA and PIPL internationally. Building separate compliance silos for each law is expensive and error-prone. The industry-standard solution is the "highest common denominator" approach: design one program that meets the strictest obligations across all applicable laws, then add jurisdiction-specific carve-outs. This lesson teaches the methodology.',
          learningObjectives: [
            'Apply the highest-common-denominator approach to overlapping privacy laws',
            'Identify the strictest obligations across DPDPA, GDPR, CCPA, PIPL and PDPA',
            'Build a unified control framework with jurisdiction-specific overlays',
            'Avoid the trap of siloed compliance programs',
          ],
          keyTakeaways: [
            'The highest-common-denominator approach treats the strictest applicable law as the global baseline.',
            'Consent under DPDPA Section 6 should be the global default because it satisfies GDPR, CCPA (with opt-out overlay), and PIPL.',
            'Breach notification should follow the strictest deadline (72 hours under GDPR, 3 days under PDPA).',
            'Data subject rights should be unified to the broadest set (GDPR\'s eight rights as the baseline).',
            'Cross-border transfers must use SCCs plus Transfer Impact Assessments to satisfy both GDPR and PIPL.',
          ],
          sections: [
            {
              id: 'sec-1',
              title: 'Why Siloed Compliance Fails',
              content: [
                {
                  type: 'paragraph',
                  content:
                    'A common mistake among Indian firms is to maintain a "DPDPA program" for India, a "GDPR program" for Europe, and a "CCPA program" for the US, each with separate consent flows, breach playbooks, and DSAR processes. This siloed approach fails because data flows across borders in milliseconds, customers have multiple nationalities, and a single breach triggers notifications to multiple regulators. The result is contradictory policies, duplicated effort, and gaps where no program covers a particular scenario.',
                },
                {
                  type: 'callout',
                  content:
                    'If your DPDPA program allows deemed consent for marketing but your GDPR program requires opt-in, you will face enforcement risk when an EU-citizen customer transacts on your India site. A unified program with consent as the global baseline eliminates this gap.',
                  calloutType: 'warning',
                },
              ],
            },
            {
              id: 'sec-2',
              title: 'The Highest-Common-Denominator Methodology',
              content: [
                {
                  type: 'paragraph',
                  content:
                    'For each obligation category, identify the strictest applicable rule and adopt it as the global default. Jurisdiction-specific overlays are added only where a law requires something the baseline does not cover (for example, CCPA\'s GPC opt-out, PIPL\'s CAC security assessment, or DPDPA\'s Section 9 children\'s consent).',
                },
                {
                  type: 'table',
                  headers: ['Obligation', 'Strictest Rule', 'Source', 'Global Baseline'],
                  rows: [
                    ['Lawful basis', 'Consent', 'DPDPA §6, GDPR Art 6(1)(a)', 'Opt-in consent globally'],
                    ['Breach notification to regulator', '72 hours', 'GDPR Art 33', '72 hours globally'],
                    ['Individual breach notice', 'High risk = notify', 'GDPR Art 34, PDPA §26C', 'Notify whenever high risk'],
                    ['Data subject rights', '8 rights', 'GDPR Arts 12-22', 'All 8 rights globally'],
                    ['Children\'s data', 'Parental consent under 18', 'DPDPA §9', 'Parental consent under 18 globally'],
                    ['Cross-border transfer', 'SCC + TIA', 'GDPR post-Schrems II', 'SCC + TIA for all transfers'],
                    ['DPO appointment', 'Required', 'GDPR Art 37, PIPL Art 52, DPDPA §8(9)', 'Mandatory DPO'],
                    ['Records of processing', 'Required', 'GDPR Art 30', 'Maintain ROPA'],
                  ],
                },
                {
                  type: 'example',
                  content:
                    'A Mumbai fintech using PhonePe APIs for Indian customers and Stripe for EU customers adopts: consent (DPDPA/GDPR) for all onboarding, 72-hour breach notification (GDPR) globally, all 8 GDPR rights, parental consent under 18 (DPDPA Section 9), and SCCs with TIAs for any data going to US servers — one program, not five.',
                },
              ],
            },
            {
              id: 'sec-3',
              title: 'Jurisdiction-Specific Overlays',
              content: [
                {
                  type: 'paragraph',
                  content:
                    'After the global baseline is set, identify overlays where a law requires more. For example, CCPA requires honouring GPC signals and providing a "Do Not Sell or Share My Personal Information" link; PIPL requires CAC security assessments before transferring data of 1 million individuals; Singapore PDPA requires DNC registry checks before telemarketing; Brazil LGPD requires appointment of a local representative if no Brazilian establishment.',
                },
                {
                  type: 'list',
                  content: 'Common overlays by jurisdiction',
                  items: [
                    'GDPR overlay: Article 30 ROPA, DPIA under Article 35, EU representative under Article 27.',
                    'CCPA overlay: GPC honour, "Do Not Sell" link, 12-month deletion request turnaround, sensitive personal information limiter.',
                    'PIPL overlay: CAC security assessment for CIIO data, separate consent for sensitive data, Personal Information Protection Officer.',
                    'PDPA overlay: 3-day breach notification to PDPC, DNC registry check.',
                    'DPDPA overlay: Significant Data Fiduciary obligations (Section 10), Consent Manager via Section 13, Board notification.',
                  ],
                },
              ],
            },
            {
              id: 'sec-4',
              title: 'Operationalising the Unified Program',
              content: [
                {
                  type: 'paragraph',
                  content:
                    'A unified program requires four operational pillars: (1) a single Privacy Management System (ISO/IEC 27701:2019 provides the international standard); (2) a single Records of Processing Activities (ROPA) tagged by jurisdiction; (3) a single breach response playbook with branching decision trees; and (4) a single Data Subject Request portal that maps each request to applicable rights.',
                },
                {
                  type: 'callout',
                  content:
                    'ISO/IEC 27701:2019 is the Privacy Information Management System (PIMS) standard that extends ISO 27001. Certification to ISO 27701 demonstrates to regulators worldwide that the organisation has a unified privacy program — useful evidence before the DPDPA Board under Section 8(5).',
                  calloutType: 'tip',
                },
                {
                  type: 'example',
                  content:
                    'A Bengaluru SaaS company certified to ISO 27701 with a single ROPA, a single DSAR portal, and a 72-hour breach playbook can credibly claim compliance with DPDPA, GDPR, CCPA, PDPA, and LGPD with marginal additional effort per jurisdiction.',
                },
              ],
            },
          ],
          glossary: [
            { term: 'Highest Common Denominator', definition: 'Compliance methodology adopting the strictest applicable rule as the global baseline.' },
            { term: 'ROPA', definition: 'Records of Processing Activities, required under GDPR Article 30 and recommended under DPDPA Section 10 for SDFs.' },
            { term: 'Overlay', definition: 'Jurisdiction-specific rule added on top of the global baseline where a law requires more.' },
            { term: 'ISO/IEC 27701', definition: 'International Privacy Information Management System standard extending ISO 27001, published 2019.' },
          ],
          references: [
            { title: 'ISO/IEC 27701:2019 Privacy Information Management System', source: 'International Organization for Standardization', year: '2019' },
            { title: 'Future of Privacy Forum Guidance on Multi-Jurisdictional Compliance', source: 'Future of Privacy Forum', year: '2023' },
            { title: 'IAPP Global Privacy Governance Report', source: 'International Association of Privacy Professionals', year: '2024' },
          ],
        },
        // -------- LESSON 6: BRAZIL LGPD --------
        {
          id: 6,
          title: 'Brazil LGPD: ANPD & Latin America\'s Flagship',
          duration: '14 min',
          type: 'reading',
          description:
            'Brazil\'s Lei Geral de Proteção de Dados (LGPD) — the ANPD regulator, GDPR-inspired structure, BRL 50 million fines, and its role as a model for Latin America.',
          content:
            'Brazil\'s General Personal Data Protection Law (Lei Geral de Proteção de Dados, LGPD, Law 13,709/2018), in force since September 2020 with sanctions from August 2021, is the most GDPR-influenced law outside Europe. For Indian IT firms serving Brazilian banks and retailers, the LGPD is the gateway to Latin American privacy compliance. The Autoridade Nacional de Proteção de Dados (ANPD) became fully operational in 2020 and has been issuing guidance and fines since 2023.',
          learningObjectives: [
            'Identify the ten legal bases under LGPD Article 7',
            'Understand the ANPD\'s enforcement powers and the BRL 50M penalty cap',
            'Apply LGPD\'s data subject rights in a multi-jurisdictional context',
            'Compare LGPD\'s "legitimate interests" basis with GDPR and DPDPA',
          ],
          keyTakeaways: [
            'LGPD has ten legal bases under Article 7 — broader than GDPR\'s six and DPDPA\'s consent-plus-legitimate-use model.',
            'Maximum simple fine is 2% of Brazilian revenue, capped at BRL 50 million per violation (Article 52).',
            'ANPD was modelled on EU DPAs and issues guidance heavily inspired by EDPB opinions.',
            'LGPD requires a Data Protection Officer (Encarregado) for all controllers, unlike GDPR\'s thresholds.',
            'International transfers require adequacy, SCCs, BCRs, or specific consent.',
          ],
          sections: [
            {
              id: 'sec-1',
              title: 'Scope, Definitions & Legal Bases',
              content: [
                {
                  type: 'paragraph',
                  content:
                    'The LGPD applies to any natural or legal person, public or private, that processes personal data in Brazil, regardless of where the data is processed, if the data was collected in Brazil or the processing is to offer goods/services to individuals in Brazil (Article 3). This extraterritorial scope mirrors GDPR Article 3(2).',
                },
                {
                  type: 'heading',
                  content: 'The Ten Legal Bases (Article 7)',
                },
                {
                  type: 'list',
                  content: 'LGPD legal bases — broader than GDPR',
                  items: [
                    'Consent (Article 7, I)',
                    'Compliance with legal or regulatory obligation (II)',
                    'Execution of public policies by public administration (III)',
                    'Carrying out studies by research entities (IV)',
                    'Execution of contract or preliminary procedures (V)',
                    'Exercise of rights in judicial, administrative, or arbitration procedures (VI)',
                    'Protection of life or physical safety (VII)',
                    'Protection of health by health professionals, services, or entities (VIII)',
                    'Legitimate interests (IX) — with balancing test',
                    'Credit protection (X) — uniquely Brazilian',
                  ],
                },
                {
                  type: 'callout',
                  content:
                    'The LGPD\'s inclusion of credit protection (Article 7, X) as a separate legal basis reflects Brazil\'s large credit scoring industry. Indian fintech serving Brazilian consumers can rely on this basis for credit bureau reporting — a basis not available under DPDPA or GDPR.',
                  calloutType: 'note',
                },
              ],
            },
            {
              id: 'sec-2',
              title: 'ANPD, Encarregado & Data Subject Rights',
              content: [
                {
                  type: 'paragraph',
                  content:
                    'The Autoridade Nacional de Proteção de Dados (ANPD) is a federal authority within the Brazilian government, with rulemaking, enforcement, and education powers. Every controller, regardless of size, must appoint an Encarregado (Data Protection Officer) whose identity and contact details must be publicly available (Article 41) — a stricter rule than GDPR Article 37, which only mandates DPOs in specific cases.',
                },
                {
                  type: 'heading',
                  content: 'Data Subject Rights (Article 18)',
                },
                {
                  type: 'list',
                  content: 'LGPD rights — nine rights',
                  items: [
                    'Confirmation of processing existence',
                    'Access to data',
                    'Correction of incomplete, inaccurate, or outdated data',
                    'Anonymisation, blocking, or deletion of unnecessary or non-compliant data',
                    'Portability of data to another service or product provider',
                    'Deletion of personal data processed with consent',
                    'Information about sharing with third parties',
                    'Information about refusal to consent and consequences',
                    'Revocation of consent',
                  ],
                },
              ],
            },
            {
              id: 'sec-3',
              title: 'Fines, Sanctions & ANPD Enforcement',
              content: [
                {
                  type: 'paragraph',
                  content:
                    'Under Article 52, the ANPD can impose simple fines of up to 2% of the controller\'s revenue in Brazil, excluding taxes, capped at BRL 50 million per infraction. Additional sanctions include: warning; publicising the infraction; blocking or deleting related personal data; partial or total suspension of database operation; and partial or total prohibition of data processing activities. Sanctions apply per infraction, so multiple violations can quickly escalate.',
                },
                {
                  type: 'table',
                  headers: ['Aspect', 'LGPD', 'DPDPA', 'GDPR'],
                  rows: [
                    ['Max fine', 'BRL 50M per infraction (2% Brazil revenue)', '₹250 crore', '€20M or 4% global turnover'],
                    ['DPO required', 'Always (Article 41)', 'SDFs only (Section 8(9))', 'Specific cases (Art 37)'],
                    ['Legal bases', '10', '2 (consent + legitimate use)', '6'],
                    ['Breach notification', 'To ANPD + affected individuals, reasonable time', 'To Board + affected principals', '72 hours to DPA'],
                    ['Transfer mechanisms', 'Adequacy, SCCs, BCRs, specific consent', 'Blacklist only (Section 16)', 'Adequacy, SCCs, BCRs, derogations'],
                  ],
                },
                {
                  type: 'example',
                  content:
                    'In 2023, ANPD fined a Brazilian telecom operator BRL 14.7 million for failing to obtain valid consent for marketing and inadequate data deletion. The case showed ANPD\'s willingness to use the upper end of the penalty range early in enforcement history.',
                },
              ],
            },
            {
              id: 'sec-4',
              title: 'Cross-Border Transfers Under LGPD',
              content: [
                {
                  type: 'paragraph',
                  content:
                    'Article 33 of the LGPD permits international transfers when: (1) the destination country provides an adequate level of protection (ANPD adequacy decision); (2) the controller offers contractual safeguards such as SCCs or BCRs; (3) the controller demonstrates compliance with principles in Article 5 and a rights-based bill of rights; (4) transfer is necessary for international cooperation; (5) ANPD recognises a global certificate; or (6) specific consent is obtained.',
                },
                {
                  type: 'callout',
                  content:
                    'ANPD published its Standard Contractual Clauses resolution in December 2023, providing a Brazilian equivalent to EU SCCs. Indian firms transferring data from Brazil to Mumbai can now use ANPD SCCs as a transfer tool — but must also meet DPDPA Section 16 blacklist requirements for onward transfers.',
                  calloutType: 'important',
                },
              ],
            },
          ],
          glossary: [
            { term: 'LGPD', definition: 'Lei Geral de Proteção de Dados, Brazil\'s general data protection law (Law 13,709/2018).' },
            { term: 'ANPD', definition: 'Autoridade Nacional de Proteção de Dados, Brazil\'s data protection authority.' },
            { term: 'Encarregado', definition: 'Data Protection Officer under LGPD Article 41, mandatory for all controllers.' },
            { term: 'Legitimate Interests', definition: 'LGPD Article 7(IX) legal basis, subject to a balancing test, similar to GDPR Article 6(1)(f).' },
          ],
          references: [
            { title: 'Lei No 13.709/2018 (LGPD)', source: 'Brazilian Federal Government', year: '2018' },
            { title: 'ANPD Standard Contractual Clauses Resolution', source: 'ANPD', year: '2023' },
            { title: 'ANPD Enforcement Reports', source: 'ANPD', year: '2024' },
          ],
        },
        // -------- LESSON 7: CANADA PIPEDA + QUEBEC LAW 25 --------
        {
          id: 7,
          title: 'Canada PIPEDA & Quebec Law 25: Provincial Fragmentation',
          duration: '15 min',
          type: 'reading',
          description:
            'Canada\'s federal PIPEDA alongside provincial laws including Quebec Law 25, Alberta PIPA, and BC PIPA — the Office of the Privacy Commissioner, mandatory breach reporting, and the challenge of provincial fragmentation.',
          content:
            'Canada\'s privacy landscape is uniquely fragmented: a federal law (PIPEDA) for commercial data in most sectors, provincial laws in Quebec (Law 25), Alberta (PIPA), and British Columbia (PIPA) for private-sector data within those provinces, and sector-specific laws like PHIPA for Ontario health information. For Indian firms with Canadian clients, this fragmentation means compliance is layered, not single-law. Quebec\'s Law 25, fully in force by September 2024, has transformed Canadian privacy with GDPR-like requirements.',
          learningObjectives: [
            'Distinguish PIPEDA from Quebec Law 25, Alberta PIPA, and BC PIPA',
            'Apply PIPEDA mandatory breach reporting under Section 10.1',
            'Understand Quebec Law 25\'s GDPR-like requirements including privacy by design and DPOs',
            'Map the federal-provincial privacy enforcement map',
          ],
          keyTakeaways: [
            'PIPEDA (Personal Information Protection and Electronic Documents Act) applies to commercial activities across Canada except where substantially similar provincial laws exist (Quebec, Alberta, BC).',
            'Quebec Law 25 (formerly Bill 64) added mandatory privacy impact assessments, DPOs, consent for sensitive data, and the right to de-indexing — the most GDPR-aligned Canadian law.',
            'PIPEDA Section 10.1 requires mandatory breach notification to the OPC and affected individuals for "real risk of significant harm" (RROSH) breaches.',
            'Maximum PIPEDA penalties are limited, but Quebec Law 25 fines can reach CAD 25 million or 4% of global turnover.',
            'The Office of the Privacy Commissioner of Canada (OPC) is the federal regulator.',
          ],
          sections: [
            {
              id: 'sec-1',
              title: 'PIPEDA & The Federal Regulator',
              content: [
                {
                  type: 'paragraph',
                  content:
                    'PIPEDA, in force since 1 January 2001, governs the collection, use, and disclosure of personal information in the course of commercial activities. It is built on the ten CSA Privacy Principles found in Schedule 1: accountability; identifying purposes; consent; limiting collection; limiting use, disclosure, and retention; accuracy; safeguards; openness; individual access; and challenging compliance. The Office of the Privacy Commissioner (OPC) investigates complaints and can issue recommendations, but historically lacked order-making power — a gap being addressed by proposed Bill C-27.',
                },
                {
                  type: 'heading',
                  content: 'Mandatory Breach Reporting (Section 10.1)',
                },
                {
                  type: 'paragraph',
                  content:
                    'PIPEDA Regulations require organisations to notify the OPC and affected individuals of any breach of security safeguards involving personal information where there is a "real risk of significant harm" (RROSH). Notification must be as soon as feasible after determining a breach occurred, with records kept for 24 months. Failure to report can attract fines up to CAD 100,000.',
                },
                {
                  type: 'callout',
                  content:
                    'The 24-month record-keeping requirement under PIPEDA is one of the longest globally — Indian firms handling Canadian data must retain breach records even after remediation.',
                  calloutType: 'note',
                },
              ],
            },
            {
              id: 'sec-2',
              title: 'Quebec Law 25: The Most GDPR-Aligned Canadian Law',
              content: [
                {
                  type: 'paragraph',
                  content:
                    'Quebec\'s Law 25 (formerly Bill 64), amending the Quebec Act Respecting the Protection of Personal Information in the Private Sector, was phased in from September 2022 to September 2024. It imposes the strictest obligations in Canada: mandatory privacy impact assessments (PIAs) for projects involving personal information; mandatory DPO (privacy officer) appointment; consent requirements for sensitive data; the right to de-indexing from search engines; and the right to data portability.',
                },
                {
                  type: 'list',
                  content: 'Quebec Law 25 key obligations',
                  items: [
                    'Mandatory Privacy Impact Assessment before disclosing personal information outside Quebec or for new technologies (Section 17.1).',
                    'Designation of a privacy officer by every business (Section 3.1).',
                    'Express, free, informed consent for sensitive personal information (Section 14).',
                    'Right to de-indexing and reputational privacy (Sections 28.1, 35).',
                    'Breach notification to the CAI (Commission d\'accès à l\'information) and affected individuals for breaches involving risk of serious injury (Section 3.3).',
                    'Maximum penalties: CAD 25 million or 4% of worldwide turnover, plus CAD 100,000 personal director liability.',
                  ],
                },
                {
                  type: 'example',
                  content:
                    'An Indian IT services firm with a Montreal delivery centre must conduct a PIA before migrating Quebec customer data to an AWS Mumbai region — a requirement not present in federal PIPEDA but mandated by Quebec Law 25.',
                },
              ],
            },
            {
              id: 'sec-3',
              title: 'Alberta PIPA, BC PIPA & Health Sector Laws',
              content: [
                {
                  type: 'paragraph',
                  content:
                    'Alberta\'s Personal Information Protection Act (PIPA) and British Columbia\'s PIPA apply to private-sector organisations operating within those provinces. They are substantially similar to PIPEDA and recognised as such by the federal government, meaning PIPEDA does not apply in those provinces. Ontario\'s Personal Health Information Protection Act (PHIPA, 2004) governs health information custodians and is one of several sector-specific provincial health privacy laws.',
                },
                {
                  type: 'table',
                  headers: ['Law', 'Scope', 'Regulator'],
                  rows: [
                    ['PIPEDA', 'Federal private-sector commercial', 'OPC (Office of the Privacy Commissioner of Canada)'],
                    ['Quebec Law 25', 'Private sector in Quebec', 'CAI (Commission d\'accès à l\'information)'],
                    ['Alberta PIPA', 'Private sector in Alberta', 'Office of the Information and Privacy Commissioner of Alberta'],
                    ['BC PIPA', 'Private sector in BC', 'Office of the Information and Privacy Commissioner for BC'],
                    ['PHIPA (Ontario)', 'Health information in Ontario', 'Information and Privacy Commissioner of Ontario'],
                  ],
                },
              ],
            },
            {
              id: 'sec-4',
              title: 'Cross-Border Transfers & The Privacy Shield Successor',
              content: [
                {
                  type: 'paragraph',
                  content:
                    'Canadian cross-border transfers to the US historically relied on the OPC\'s PIPEDA Guideline 6, which permits transfers without additional safeguards if the organisation remains accountable. However, the OPC revised this position in 2023, signalling that transfers to third parties (including processors abroad) require comparable protection. The proposed Consumer Privacy Protection Act (CPPA) under Bill C-27 would, if passed, add an explicit transfer assessment requirement.',
                },
                {
                  type: 'callout',
                  content:
                    'Quebec Law 25 explicitly requires that transfers outside Quebec be subject to an "equivalent" protection standard — broadly interpreted to require SCCs or equivalent contractual safeguards, similar to GDPR adequacy or SCC requirements.',
                  calloutType: 'important',
                },
                {
                  type: 'example',
                  content:
                    'A Toronto-headquartered bank outsourcing statement processing to a Pune BPO must: (1) under PIPEDA, enter into a contract ensuring comparable protection; (2) under Quebec Law 25 if Quebec data is involved, conduct a PIA on the transfer; and (3) under DPDPA, ensure the Pune BPO complies with Sections 8(6) and 8(9) processor obligations.',
                },
              ],
            },
          ],
          glossary: [
            { term: 'PIPEDA', definition: 'Personal Information Protection and Electronic Documents Act, Canada\'s federal private-sector privacy law in force since 2001.' },
            { term: 'Law 25', definition: 'Quebec\'s amended private-sector privacy law (formerly Bill 64), fully in force by September 2024.' },
            { term: 'OPC', definition: 'Office of the Privacy Commissioner of Canada, the federal privacy regulator.' },
            { term: 'CAI', definition: 'Commission d\'accès à l\'information du Québec, Quebec\'s access and privacy regulator.' },
            { term: 'RROSH', definition: 'Real Risk of Significant Harm, the threshold for mandatory PIPEDA breach notification.' },
          ],
          references: [
            { title: 'Personal Information Protection and Electronic Documents Act (PIPEDA) S.C. 2000, c. 5', source: 'Government of Canada', year: '2000' },
            { title: 'An Act to modernize legislative provisions respecting the protection of personal information (Law 25)', source: 'Quebec National Assembly', year: '2021' },
            { title: 'PIPEDA Breach Notification Regulations', source: 'Office of the Privacy Commissioner of Canada', year: '2018' },
          ],
        },
      ],
    },

    // ============================================================
    // CHAPTER 2: REGIONAL DEEP DIVES
    // ============================================================
    {
      id: 2,
      title: 'Regional Deep Dives',
      lessons: [
        // -------- LESSON 8: MIDDLE EAST --------
        {
          id: 8,
          title: 'Middle East: Saudi PDPL, UAE Law 45/2021 & Israel PPL',
          duration: '15 min',
          type: 'reading',
          description:
            'The emerging privacy frameworks of the Gulf and Levant — Saudi PDPL, UAE Federal Decree-Law 45/2021, and Israel\'s Privacy Protection Law with its EU adequacy status.',
          content:
            'The Middle East privacy landscape has transformed dramatically since 2021. Saudi Arabia enacted the Personal Data Protection Law (PDPL) in 2021, the UAE issued Federal Decree-Law 45/2021 on Personal Data Protection, Bahrain has had the PDPL since 2018, Qatar issued Law 13/2016, and Israel has had a Privacy Protection Law since 1981 with EU adequacy since 2023. For Indian IT, infrastructure, and energy firms with GCC clients, understanding these frameworks is critical for both market access and DPDPA-compliant inbound transfers.',
          learningObjectives: [
            'Compare Saudi PDPL, UAE Law 45/2021, and Israel PPL',
            'Understand Saudi PDPL\'s data localisation and transfer approval regime',
            'Apply Israel\'s EU adequacy status to outbound Israeli transfers',
            'Identify the regulators: SDAIA, UAE Data Office, PPA',
          ],
          keyTakeaways: [
            'Saudi PDPL (effective September 2023, full enforcement September 2024) replaces the 2013 law with GDPR-aligned obligations.',
            'UAE Federal Decree-Law 45/2021 applies to all UAE and free zone entities except DIFC and ADGM which have their own laws.',
            'Israel received EU adequacy in July 2023, allowing EU-to-Israel transfers without SCCs.',
            'Bahrain PDPL (2018) and Qatar Law 13/2016 are the older Gulf frameworks.',
            'Regulators include SDAIA (Saudi), UAE Data Office, Israeli Privacy Protection Authority.',
          ],
          sections: [
            {
              id: 'sec-1',
              title: 'Saudi Arabia PDPL',
              content: [
                {
                  type: 'paragraph',
                  content:
                    'Saudi Arabia\'s Personal Data Protection Law (Royal Decree M/19, issued 24 September 2021, amended 2023) became effective on 14 September 2023 with full enforcement from 14 September 2024. The Saudi Data & Artificial Intelligence Authority (SDAIA) is the regulator. The PDPL is GDPR-influenced, requiring lawful basis, data minimisation, retention limits, breach notification (within 72 hours to SDAIA where harm is likely), and data subject rights.',
                },
                {
                  type: 'heading',
                  content: 'Transfer Outside Saudi Arabia',
                },
                {
                  type: 'paragraph',
                  content:
                    'Article 29 of the PDPL requires that transfers outside Saudi Arabia be subject to SDAIA approval, transfer to a country with adequate protection, or use of contractual safeguards. SDAIA published the Regulations on Personal Data Transfer Outside the Kingdom in December 2023, providing SCC-style mechanisms and adequacy criteria.',
                },
                {
                  type: 'callout',
                  content:
                    'Saudi Arabia\'s Vision 2030 has driven PDPL alignment with global standards to attract foreign investment. Indian firms entering NEOM, Red Sea, or Riyadh giga-projects must implement PDPL-compliant programs by the September 2024 enforcement date.',
                  calloutType: 'important',
                },
              ],
            },
            {
              id: 'sec-2',
              title: 'UAE Federal Decree-Law 45/2021 & Free Zones',
              content: [
                {
                  type: 'paragraph',
                  content:
                    'UAE Federal Decree-Law 45/2021 on the Protection of Personal Data, effective January 2022, applies to all UAE entities processing personal data, including mainland companies and free zones — except the Dubai International Financial Centre (DIFC) and Abu Dhabi Global Market (ADGM), which have their own GDPR-inspired laws (DIFC Data Protection Law No. 5 of 2020, ADGM Data Protection Regulations 2021). The UAE Data Office under the Ministry of Industry and Advanced Technology is the federal regulator.',
                },
                {
                  type: 'list',
                  content: 'UAE law features',
                  items: [
                    'Controller/processor distinction (Articles 1, 4).',
                    'Lawful bases including consent, contract, legal obligation, vital interests, public interest, and legitimate interests (Article 6).',
                    'Breach notification to the regulator and affected individuals within 72 hours (Article 41).',
                    'Cross-border transfers subject to adequacy, appropriate safeguards, or specific consent (Article 22).',
                    'Maximum penalty: AED 5 million for the most serious violations, with doubling for repeat offences.',
                  ],
                },
                {
                  type: 'example',
                  content:
                    'A Mumbai software firm with a Dubai mainland office must apply UAE Federal Law 45/2021 for UAE resident data; if it also has a DIFC branch, that branch must comply with DIFC Law No. 5 of 2020 — a layered compliance posture common for GCC operations.',
                },
              ],
            },
            {
              id: 'sec-3',
              title: 'Israel PPL & EU Adequacy',
              content: [
                {
                  type: 'paragraph',
                  content:
                    'Israel\'s Privacy Protection Law 5741-1981 is one of the oldest privacy laws, dating to 1981. It is administered by the Privacy Protection Authority (PPA) within the Ministry of Justice. The law was substantially amended in 2023-2024 to add breach notification, mandatory DPOs, and DPIAs for high-risk processing. Critically, the European Commission adopted an adequacy decision for Israel under the GDPR on 10 July 2023, allowing EU-to-Israel personal data transfers without SCCs.',
                },
                {
                  type: 'callout',
                  content:
                    'Israel\'s EU adequacy is contingent on continued enforcement of the PPL\'s security and surveillance safeguards. Indian firms with Israeli processors can rely on Israel as a "safe" jurisdiction for EU data onward transfers — a useful posture in multi-jurisdictional programs.',
                  calloutType: 'tip',
                },
              ],
            },
            {
              id: 'sec-4',
              title: 'Bahrain, Qatar & Comparison Table',
              content: [
                {
                  type: 'paragraph',
                  content:
                    'Bahrain\'s Personal Data Protection Law (Law 22 of 2018) was the first comprehensive Gulf privacy law, effective 2019. Qatar\'s Law 13 of 2016 (Promulgation of the Privacy Protection Law) was the first Gulf privacy framework, applicable in Qatar mainland. Both are GDPR-influenced, with Bahrain\'s PDPL regulated by the Personal Data Protection Directorate under the Ministry of Justice.',
                },
                {
                  type: 'table',
                  headers: ['Country', 'Law', 'Effective', 'Regulator', 'Max Fine'],
                  rows: [
                    ['Saudi Arabia', 'PDPL (M/19)', '2023 (full 2024)', 'SDAIA', 'SAR 5M + licence revocation'],
                    ['UAE (mainland)', 'Federal Decree-Law 45/2021', '2022', 'UAE Data Office', 'AED 5M'],
                    ['UAE (DIFC)', 'DIFC Law 5/2020', '2020', 'DIFC Commissioner', 'USD 100K to USD 5M'],
                    ['Israel', 'PPL 5741-1981 (amended)', '1981, updated 2024', 'PPA', 'ILS 1M'],
                    ['Bahrain', 'PDPL (Law 22/2018)', '2019', 'PD Directorate', 'BHD 50,000'],
                    ['Qatar', 'Law 13/2016', '2016', 'Qatar Ministry of Transport', 'QAR 1M'],
                  ],
                },
              ],
            },
          ],
          glossary: [
            { term: 'PDPL', definition: 'Personal Data Protection Law, the name used by Saudi Arabia and Bahrain for their respective laws.' },
            { term: 'SDAIA', definition: 'Saudi Data & Artificial Intelligence Authority, Saudi Arabia\'s data and AI regulator established 2019.' },
            { term: 'UAE Federal Decree-Law 45/2021', definition: 'UAE\'s federal personal data protection law, effective January 2022, excluding DIFC and ADGM free zones.' },
            { term: 'DIFC', definition: 'Dubai International Financial Centre, a UAE free zone with its own GDPR-inspired Data Protection Law No. 5 of 2020.' },
            { term: 'PPA', definition: 'Privacy Protection Authority of Israel, the Israeli privacy regulator within the Ministry of Justice.' },
          ],
          references: [
            { title: 'Saudi PDPL Royal Decree M/19', source: 'Saudi Government', year: '2021' },
            { title: 'UAE Federal Decree-Law No. 45 of 2021', source: 'UAE Government', year: '2021' },
            { title: 'European Commission Adequacy Decision for Israel', source: 'European Commission', year: '2023' },
            { title: 'Bahrain PDPL Law 22 of 2018', source: 'Kingdom of Bahrain', year: '2018' },
          ],
        },
        // -------- LESSON 9: AFRICA --------
        {
          id: 9,
          title: 'Africa: South Africa POPIA, Kenya DPA & Nigeria NDPA',
          duration: '14 min',
          type: 'reading',
          description:
            'Africa\'s emerging privacy frameworks — South Africa\'s POPIA, Kenya\'s Data Protection Act 2019, and Nigeria\'s NDPA 2023 — and their Information Regulators.',
          content:
            'Africa is one of the fastest-growing privacy law regions, with over 30 countries having enacted or drafting data protection laws. For Indian fintech, telecom, and health-tech firms expanding into Africa, three jurisdictions matter most: South Africa (POPIA, in force since 2021), Kenya (DPA 2019), and Nigeria (NDPA 2023). Each has an independent regulator — the Information Regulator (SA), the Office of the Data Protection Commissioner (Kenya), and the Nigeria Data Protection Commission (NDPC).',
          learningObjectives: [
            'Apply POPIA\'s eight conditions for lawful processing',
            'Understand Kenya\'s DPA 2019 registration requirements',
            'Identify Nigeria\'s NDPA 2023 unique features',
            'Map the African Information Regulators',
          ],
          keyTakeaways: [
            'POPIA (South Africa) has been fully enforced since 1 July 2021, with the Information Regulator issuing fines up to ZAR 10 million.',
            'Kenya\'s Data Protection Act 2019 requires data controller/processor registration with the ODPC if processing is high-risk.',
            'Nigeria\'s NDPA 2023 is the newest African framework, with the NDPC regulator and a 2% of annual gross revenue penalty cap.',
            'POPIA, Kenya DPA, and Nigeria NDPA are all GDPR-inspired but with African-specific features (e.g., POPIA\'s exclusion of juristic persons).',
            'Most African regulators require local data protection officer appointment.',
          ],
          sections: [
            {
              id: 'sec-1',
              title: 'South Africa POPIA',
              content: [
                {
                  type: 'paragraph',
                  content:
                    'The Protection of Personal Information Act 4 of 2013 (POPIA) came into full force on 1 July 2021. The Information Regulator of South Africa, established under POPIA, can issue enforcement notices and fines up to ZAR 10 million or imprisonment up to 12 months for non-compliance. POPIA\'s eight conditions for lawful processing are: accountability; processing limitation; purpose specification; further processing limitation; information quality; openness; security safeguards; and data subject participation.',
                },
                {
                  type: 'callout',
                  content:
                    'POPIA uniquely excludes "juristic persons" (companies, trusts) from the definition of personal data subjects — only natural persons are protected. This differs from GDPR\'s personal data scope and means B2B contact data is largely unregulated under POPIA.',
                  calloutType: 'note',
                },
                {
                  type: 'example',
                  content:
                    'In 2024, the Information Regulator issued an enforcement notice against the South African Department of Justice for a 2023 data breach exposing 1,200 files. The case demonstrated the Regulator\'s willingness to act against government entities.',
                },
              ],
            },
            {
              id: 'sec-2',
              title: 'Kenya DPA 2019 & ODPC',
              content: [
                {
                  type: 'paragraph',
                  content:
                    'Kenya\'s Data Protection Act 2019, in force since 25 November 2019, established the Office of the Data Protection Commissioner (ODPC). The Act is GDPR-inspired: it requires lawful basis, data minimisation, security safeguards, breach notification (within 72 hours), and data subject rights. The ODPC has issued enforcement notices and fines, including a KES 5.5 million fine against an Oppo phone dealership in 2022 for failing to obtain consent for biometric data collection.',
                },
                {
                  type: 'heading',
                  content: 'Registration Requirement',
                },
                {
                  type: 'paragraph',
                  content:
                    'Section 18 of the Kenya DPA requires data controllers and processors that process personal data of more than 10,000 data subjects, or whose processing is likely to pose a risk to data subjects, to register with the ODPC and pay an annual fee. Failure to register attracts fines up to KES 5 million or 1% of annual turnover.',
                },
              ],
            },
            {
              id: 'sec-3',
              title: 'Nigeria NDPA 2023 & NDPC',
              content: [
                {
                  type: 'paragraph',
                  content:
                    'Nigeria\'s Data Protection Act 2023, signed into law on 12 June 2023, replaced the Nigeria Data Protection Regulation (NDPR) 2019. It established the Nigeria Data Protection Commission (NDPC) as an independent regulator. The Act applies to all processing of personal data within Nigeria and to data controllers/processors outside Nigeria that target Nigerian residents. Maximum penalty is the greater of 2% of annual gross revenue or Naira 10 million.',
                },
                {
                  type: 'list',
                  content: 'NDPA 2023 key features',
                  items: [
                    'Lawful bases including consent, contract, legal obligation, public interest, vital interests, legitimate interests.',
                    'Mandatory Data Protection Compliance Officer (DPCO) for data controllers of major importance.',
                    'Data Subject Access Requests to be handled within 30 days.',
                    'Breach notification to NDPC within 72 hours where there is a risk of harm.',
                    'Cross-border transfer requires adequacy, SCCs, BCRs, or specific consent.',
                  ],
                },
              ],
            },
            {
              id: 'sec-4',
              title: 'African Comparison & Indian Engagement',
              content: [
                {
                  type: 'table',
                  headers: ['Country', 'Law', 'Regulator', 'Max Penalty'],
                  rows: [
                    ['South Africa', 'POPIA 4/2013', 'Information Regulator', 'ZAR 10M or 12 months imprisonment'],
                    ['Kenya', 'DPA 2019', 'ODPC', 'KES 5M or 1% turnover'],
                    ['Nigeria', 'NDPA 2023', 'NDPC', '2% annual gross revenue or NGN 10M'],
                    ['Egypt', 'PDPL 2020', 'Egyptian DPA', 'EGP 1M to EGP 20M'],
                    ['Morocco', 'Law 09-08', 'CNDP', 'MAD 100K to MAD 1M'],
                    ['Rwanda', 'Law 058/2021', 'NCSA', 'RWF 1M to RWF 5M'],
                  ],
                },
                {
                  type: 'callout',
                  content:
                    'For Indian fintech using UPI rails in Africa (Nigeria\'s NIP, Kenya\'s PesaLink, South Africa\'s PayShap), each regulator requires registration and local representation. The DPDPA\'s Consent Manager under Section 13 can be adapted for African markets — useful in unified product design.',
                  calloutType: 'tip',
                },
              ],
            },
          ],
          glossary: [
            { term: 'POPIA', definition: 'Protection of Personal Information Act 4 of 2013, South Africa\'s privacy law, fully enforced since July 2021.' },
            { term: 'Information Regulator', definition: 'South Africa\'s independent data protection regulator established under POPIA.' },
            { term: 'ODPC', definition: 'Office of the Data Protection Commissioner, Kenya\'s data protection regulator under the DPA 2019.' },
            { term: 'NDPA', definition: 'Nigeria Data Protection Act 2023, replacing the NDPR 2019.' },
            { term: 'NDPC', definition: 'Nigeria Data Protection Commission, established under the NDPA 2023.' },
          ],
          references: [
            { title: 'Protection of Personal Information Act 4 of 2013', source: 'Republic of South Africa', year: '2013' },
            { title: 'Kenya Data Protection Act No. 24 of 2019', source: 'Republic of Kenya', year: '2019' },
            { title: 'Nigeria Data Protection Act 2023', source: 'Federal Republic of Nigeria', year: '2023' },
          ],
        },
        // -------- LESSON 10: ASIA-PACIFIC --------
        {
          id: 10,
          title: 'Asia-Pacific: Japan APPI, South Korea PIPA & Australia Privacy Act',
          duration: '15 min',
          type: 'reading',
          description:
            'The mature privacy frameworks of the Asia-Pacific — Japan\'s APPI with EU adequacy, South Korea\'s PIPA with the strictest consent regime, and Australia\'s Privacy Act with the OAIC.',
          content:
            'Beyond China and Singapore, three Asia-Pacific frameworks matter most for Indian multinationals: Japan\'s Act on the Protection of Personal Information (APPI), South Korea\'s Personal Information Protection Act (PIPA), and Australia\'s Privacy Act 1988. Each has unique features: Japan has EU adequacy (2019), South Korea has among the strictest consent and breach rules globally, and Australia is in the middle of major reform following the 2022-2023 Optus and Medibank breaches.',
          learningObjectives: [
            'Understand Japan\'s APPI structure and its EU adequacy status',
            'Apply South Korea\'s PIPA consent regime and 24-hour breach notification',
            'Analyse Australia\'s Privacy Act and post-Medibank reforms',
            'Identify the regulators: PPC Japan, PIPC Korea, OAIC Australia',
          ],
          keyTakeaways: [
            'Japan\'s APPI (amended 2022) covers cross-border transfer restrictions and has EU adequacy since 2019.',
            'South Korea\'s PIPA, amended in September 2023, requires 24-hour breach notification to PIPC — the shortest globally.',
            'Australia\'s Privacy Act 1988 (Privacy Act Review 2022-2024) is being reformed with potential for direct right of action and higher penalties.',
            'After the 2022 Optus and Medibank breaches, Australia increased penalties to AUD 50 million or 30% of turnover.',
            'All three regulators (PPC, PIPC, OAIC) cooperate with the DPDPA Board expected under Section 16 transfer arrangements.',
          ],
          sections: [
            {
              id: 'sec-1',
              title: 'Japan APPI & EU Adequacy',
              content: [
                {
                  type: 'paragraph',
                  content:
                    'Japan\'s Act on the Protection of Personal Information (APPI), in force since 2003 and substantially amended in 2017 and 2022, is administered by the Personal Information Protection Commission (PPC). The 2022 amendments added cross-border transfer restrictions (Article 28), requiring consent or adequacy for transfers to countries without equivalent protection. The European Commission granted Japan adequacy in January 2019, creating a reciprocal EU-Japan arrangement.',
                },
                {
                  type: 'callout',
                  content:
                    'Japan\'s adequacy status means EU-to-Japan transfers need no SCCs. For Indian firms with Japanese parent companies, data can flow EU→Japan→India only if Japan→India uses an SCC and India complies with DPDPA Section 16 blacklist rules — a multi-link transfer chain that requires careful mapping.',
                  calloutType: 'important',
                },
                {
                  type: 'example',
                  content:
                    'A Tokyo-headquartered electronics firm with a Chennai back-office must apply: (1) APPI for Japan-origin data; (2) DPDPA for India processing; (3) SCCs for Japan→India transfer; and (4) PPC notification if a breach affects Japanese principals.',
                },
              ],
            },
            {
              id: 'sec-2',
              title: 'South Korea PIPA: Strictest in Asia',
              content: [
                {
                  type: 'paragraph',
                  content:
                    'South Korea\'s Personal Information Protection Act (PIPA), originally enacted in 2011 and substantially amended in September 2023, is one of the strictest privacy laws globally. The 2023 amendments created the Personal Information Protection Commission (PIPC) as an independent central regulator, introduced pseudonymised data rules, and tightened consent requirements. Maximum penalty for major violations is KRW 1 trillion (approximately USD 760 million) — among the highest globally.',
                },
                {
                  type: 'heading',
                  content: 'The 24-Hour Breach Rule',
                },
                {
                  type: 'paragraph',
                  content:
                    'PIPA Article 34 requires notification to the PIPC within 24 hours of becoming aware of a personal data breach — the shortest mandatory notification window in any privacy law. Affected individuals must be notified without delay unless the breach involves only encrypted data that cannot be decrypted.',
                },
                {
                  type: 'callout',
                  content:
                    'The 24-hour rule is significantly stricter than the GDPR\'s 72 hours or PDPA\'s 3 calendar days. Indian firms serving Korean clients must design incident response playbooks to meet the 24-hour clock, including weekend and holiday coverage.',
                  calloutType: 'warning',
                },
              ],
            },
            {
              id: 'sec-3',
              title: 'Australia Privacy Act & Post-Medibank Reforms',
              content: [
                {
                  type: 'paragraph',
                  content:
                    'Australia\'s Privacy Act 1988, regulated by the Office of the Australian Information Commissioner (OAIC), includes 13 Australian Privacy Principles (APPs) covering collection, use, disclosure, and security. Following the September 2022 Optus breach (10 million records) and October 2022 Medibank breach (9.7 million records), the Australian Government\'s Privacy Act Review led to the Privacy and Other Legislation Amendment Act 2024, which increased penalties dramatically.',
                },
                {
                  type: 'table',
                  headers: ['Aspect', 'Pre-Reform', 'Post-2024 Reform'],
                  rows: [
                    ['Max penalty (serious/repeated)', 'AUD 2.2 million', 'AUD 50 million or 30% turnover (whichever greater)'],
                    ['Children\'s online privacy', 'APPs only', 'New Children\'s Online Privacy Code (binding)'],
                    ['Small business exemption', 'Yes (< AUD 3M turnover)', 'Reformed — many small businesses now covered'],
                    ['Direct right of action', 'No (OAIC enforcement only)', 'Yes — individuals can sue'],
                    ['Foreign disclosure', 'APP 8 accountability', 'Strengthened with extraterritorial reach'],
                  ],
                },
                {
                  type: 'example',
                  content:
                    'The Optus September 2022 breach exposed 10 million records including 14,900 Medibank customer Medicare numbers. The OAIC investigation into both Optus and Medibank (ongoing as of 2024) is expected to set precedents on "reasonable steps" under APP 11.',
                },
              ],
            },
            {
              id: 'sec-4',
              title: 'Cross-Pacific Comparison',
              content: [
                {
                  type: 'table',
                  headers: ['Feature', 'Japan APPI', 'South Korea PIPA', 'Australia Privacy Act'],
                  rows: [
                    ['Effective', '2003, amended 2017, 2022', '2011, amended 2023', '1988, amended 2024'],
                    ['Regulator', 'PPC', 'PIPC', 'OAIC'],
                    ['Breach notification', 'PPC + individuals promptly', 'PIPC within 24 hours', 'OAIC + individuals if likely serious harm'],
                    ['EU adequacy', 'Yes (2019)', 'Pending', 'No'],
                    ['Max penalty', 'JPY 100M + imprisonment', 'KRW 1 trillion', 'AUD 50M or 30% turnover'],
                    ['Children', 'Under 15 = parental consent', 'Under 14 = parental consent', 'New Children\'s Code 2024'],
                  ],
                },
              ],
            },
          ],
          glossary: [
            { term: 'APPI', definition: 'Act on the Protection of Personal Information, Japan\'s privacy law administered by the PPC.' },
            { term: 'PPC', definition: 'Personal Information Protection Commission, Japan\'s privacy regulator.' },
            { term: 'PIPA', definition: 'Personal Information Protection Act, South Korea\'s privacy law, amended in September 2023.' },
            { term: 'PIPC', definition: 'Personal Information Protection Commission, South Korea\'s independent privacy regulator.' },
            { term: 'OAIC', definition: 'Office of the Australian Information Commissioner, Australia\'s privacy regulator.' },
            { term: 'APPs', definition: 'Australian Privacy Principles, 13 principles under the Privacy Act 1988.' },
          ],
          references: [
            { title: 'Act on the Protection of Personal Information (Japan)', source: 'Personal Information Protection Commission', year: '2022' },
            { title: 'Personal Information Protection Act (South Korea, amended)', source: 'PIPC South Korea', year: '2023' },
            { title: 'Privacy Act 1988 (Cth) and 2024 Amendment Act', source: 'Office of the Australian Information Commissioner', year: '2024' },
            { title: 'EU-Japan Adequacy Decision', source: 'European Commission', year: '2019' },
          ],
        },
        // -------- LESSON 11: UK POST-BREXIT --------
        {
          id: 11,
          title: 'UK GDPR Post-Brexit & Data (Use and Access) Act 2025',
          duration: '14 min',
          type: 'reading',
          description:
            'The UK\'s post-Brexit privacy regime — UK GDPR, the Data Protection Act 2018, the ICO, the UK adequacy regulations, and the new Data (Use and Access) Act 2025.',
          content:
            'Following Brexit, the UK retained the GDPR as "UK GDPR" alongside the Data Protection Act 2018, regulated by the Information Commissioner\'s Office (ICO). The UK received EU adequacy in June 2021, but this is under review. The Data (Use and Access) Act 2025, the UK\'s first major post-Brexit privacy reform, introduces changes to AI training, scientific research, and automated decision-making while preserving the core GDPR framework. For Indian firms with UK customers, the UK GDPR remains substantively similar to EU GDPR but with emerging divergence.',
          learningObjectives: [
            'Distinguish UK GDPR from EU GDPR after Brexit',
            'Understand the ICO\'s enforcement powers and recent fines',
            'Apply the UK adequacy regulations for EU-UK transfers',
            'Analyse the Data (Use and Access) Act 2025 reforms',
          ],
          keyTakeaways: [
            'UK GDPR is the retained EU GDPR in UK law, alongside the Data Protection Act 2018.',
            'The ICO enforces UK GDPR with maximum fines of £17.5 million or 4% of global turnover.',
            'EU-UK transfers rely on the EU adequacy decision (June 2021, valid until June 2028 subject to review).',
            'The Data (Use and Access) Act 2025 eases rules for scientific research and AI training while tightening automated decision-making transparency.',
            'UK ICO has issued landmark fines including £183M (British Airways, later reduced to £20M) and £87M (TikTok, 2023).',
          ],
          sections: [
            {
              id: 'sec-1',
              title: 'UK GDPR & DPA 2018',
              content: [
                {
                  type: 'paragraph',
                  content:
                    'After Brexit on 31 January 2020 and the transition period ending 31 December 2020, the UK retained the GDPR as "UK GDPR" via the European Union (Withdrawal) Act 2018. The Data Protection Act 2018 supplements UK GDPR, particularly on law enforcement processing, intelligence services, and the ICO\'s powers. UK GDPR applies to controllers established in the UK or offering goods/services to UK data subjects.',
                },
                {
                  type: 'callout',
                  content:
                    'For most practical purposes, UK GDPR and EU GDPR are identical in 2025. The divergence is beginning through the Data (Use and Access) Act 2025, particularly on research data and AI. Indian firms can build a single "GDPR+UK" program with minimal divergence handling.',
                  calloutType: 'note',
                },
              ],
            },
            {
              id: 'sec-2',
              title: 'ICO Enforcement & Landmark Fines',
              content: [
                {
                  type: 'paragraph',
                  content:
                    'The Information Commissioner\'s Office (ICO) is the UK\'s independent data protection regulator. Maximum fines under UK GDPR are £17.5 million or 4% of total annual worldwide turnover, whichever is higher. The ICO has issued several landmark fines that shaped global compliance thinking.',
                },
                {
                  type: 'table',
                  headers: ['Entity', 'Fine', 'Year', 'Issue'],
                  rows: [
                    ['British Airways', '£20 million', '2020', '2018 breach exposing 400,000 customers'],
                    ['Marriott International', '£18.4 million', '2020', '2018 breach exposing 339 million guests'],
                    ['TikTok', '£12.7 million', '2023', 'Children\'s data (under 13) handling'],
                    ['Clearview AI', '£7.5 million', '2022', 'Unlawful facial recognition data collection'],
                    ['Tuckers Solicitors', '£98,000', '2022', 'Ransomware breach exposing clients'],
                  ],
                },
                {
                  type: 'example',
                  content:
                    'The British Airways case originally attracted a £183 million notice of intent in 2019, later reduced to £20 million in 2020 due to COVID-19 impact on BA\'s finances. This demonstrated the ICO\'s pragmatic enforcement posture — fines are calibrated, not maximal.',
                },
              ],
            },
            {
              id: 'sec-3',
              title: 'UK Adequacy & EU-UK Data Bridge',
              content: [
                {
                  type: 'paragraph',
                  content:
                    'The European Commission adopted an adequacy decision for the UK on 28 June 2021 under both GDPR and LED (Law Enforcement Directive). The UK reciprocated, allowing EU-to-UK and UK-to-EU personal data to flow freely. The "EU-UK Data Bridge" is part of the Trade and Cooperation Agreement. The adequacy decision is subject to periodic review (every 4 years) and could be suspended if the UK diverges significantly — a real risk given the Data (Use and Access) Act 2025.',
                },
                {
                  type: 'callout',
                  content:
                    'If the EU-UK adequacy decision is suspended, UK-to-EU transfers would continue (UK treats EU as adequate), but EU-to-UK transfers would require SCCs. Indian firms using UK as European headquarters must monitor this risk and prepare SCC fallbacks.',
                  calloutType: 'warning',
                },
              ],
            },
            {
              id: 'sec-4',
              title: 'Data (Use and Access) Act 2025',
              content: [
                {
                  type: 'paragraph',
                  content:
                    'The Data (Use and Access) Act 2025 (DUAA), the UK\'s first major post-Brexit privacy reform, received Royal Assent in 2025. It introduces several changes: (1) broadens the research purpose exemption allowing wider processing of personal data for scientific research; (2) introduces a new framework for AI training data; (3) reforms automated decision-making with greater transparency requirements; (4) introduces "recognised legitimate interests" reducing administrative burden; and (5) modernises the ICO governance structure.',
                },
                {
                  type: 'list',
                  content: 'DUAA 2025 key reforms',
                  items: [
                    'Scientific research exemption broadened — broader consent waivers for research bodies.',
                    'AI training data — new specific provisions allowing training data use with safeguards.',
                    'Automated decision-making — narrower "solely automated" definition, transparency requirements strengthened.',
                    'Recognised legitimate interests — pre-approved legitimate interest categories without LIA.',
                    'ICO governance — restructured Board with greater oversight.',
                  ],
                },
                {
                  type: 'example',
                  content:
                    'An Indian AI startup training a model on UK NHS patient data can rely on the DUAA 2025 research exemptions if partnered with a recognised research body — a position not available under EU GDPR, creating a potential UK AI investment advantage.',
                },
              ],
            },
          ],
          glossary: [
            { term: 'UK GDPR', definition: 'The retained EU GDPR in UK law post-Brexit, alongside the Data Protection Act 2018.' },
            { term: 'ICO', definition: 'Information Commissioner\'s Office, the UK\'s data protection regulator.' },
            { term: 'Data (Use and Access) Act 2025', definition: 'The UK\'s first major post-Brexit privacy reform Act, with AI, research, and ADM provisions.' },
            { term: 'EU-UK Data Bridge', definition: 'The mutual adequacy arrangement allowing EU-UK personal data flows without SCCs.' },
          ],
          references: [
            { title: 'Data Protection Act 2018', source: 'UK Parliament', year: '2018' },
            { title: 'European Commission Adequacy Decision for the UK', source: 'European Commission', year: '2021' },
            { title: 'Data (Use and Access) Act 2025', source: 'UK Parliament', year: '2025' },
            { title: 'British Airways Enforcement Notice', source: 'Information Commissioner\'s Office', year: '2020' },
          ],
        },
        // -------- LESSON 12: LATIN AMERICA --------
        {
          id: 12,
          title: 'Latin America: Argentina, Mexico & Chile',
          duration: '13 min',
          type: 'reading',
          description:
            'The privacy frameworks of Latin America — Argentina\'s EU-adequate PDPL, Mexico\'s LFPDPPP, and Chile\'s 2024 reforms.',
          content:
            'Latin America\'s privacy landscape is anchored by Argentina (EU adequacy since 2005, recertified 2019), Mexico (LFPDPPP since 2010), and Chile (Law 19.628, substantially reformed in 2024). For Indian pharma, IT, and agri-tech firms serving Latin American markets, these three frameworks are the priority. Brazil\'s LGPD, covered separately, is the largest but Argentina, Mexico, and Chile complete the regional map.',
          learningObjectives: [
            'Understand Argentina\'s PDPL and its EU adequacy status',
            'Apply Mexico\'s LFPDPPP including ARCO rights',
            'Analyse Chile\'s 2024 privacy reforms',
            'Map the Latin American regulator landscape',
          ],
          keyTakeaways: [
            'Argentina\'s Personal Data Protection Law 25.326 (2000) has EU adequacy since 2005 — the first non-EU country to receive it.',
            'Mexico\'s LFPDPPP (2010) grants ARCO rights: Access, Rectification, Cancellation, Opposition.',
            'Chile\'s Law 19.628 was substantially reformed in 2024 to add GDPR-like obligations and an independent agency.',
            'Other Latin American laws: Colombia Law 1581/2012, Peru Law 29733/2011, Uruguay Law 18.331 (EU adequacy 2012).',
            'Argentina\'s AAPDP, Mexico\'s INAI, and Chile\'s new Council for Transparency are the regulators.',
          ],
          sections: [
            {
              id: 'sec-1',
              title: 'Argentina PDPL & EU Adequacy',
              content: [
                {
                  type: 'paragraph',
                  content:
                    'Argentina\'s Personal Data Protection Law 25.326, in force since 2000, was the first Latin American comprehensive privacy law. The European Commission granted Argentina adequacy in 2005 — the first non-EU country to receive it. Argentina\'s adequacy was reaffirmed in the European Commission\'s 2019 review and continues as of 2024. The Agencia de Acceso a la Información Pública (AAIP) is the regulator.',
                },
                {
                  type: 'callout',
                  content:
                    'A draft bill to modernise the PDPL has been pending in Argentina\'s Congress since 2023, which would add GDPR-aligned concepts including data portability, right to be forgotten, and explicit consent for sensitive data. Indian firms should monitor this reform.',
                  calloutType: 'note',
                },
              ],
            },
            {
              id: 'sec-2',
              title: 'Mexico LFPDPPP & ARCO Rights',
              content: [
                {
                  type: 'paragraph',
                  content:
                    'Mexico\'s Federal Law on the Protection of Personal Data Held by Private Parties (Ley Federal de Protección de Datos Personales en Posesión de los Particulares, LFPDPPP) has been in force since July 2010. It applies to private parties processing personal data in Mexico. The Instituto Nacional de Transparencia, Acceso a la Información y Protección de Datos Personales (INAI) is the regulator.',
                },
                {
                  type: 'heading',
                  content: 'ARCO Rights',
                },
                {
                  type: 'list',
                  content: 'ARCO rights under LFPDPPP Articles 22-30',
                  items: [
                    'Access (Acceso): right to know what personal data is held.',
                    'Rectification (Rectificación): right to correct inaccurate data.',
                    'Cancellation (Cancelación): right to delete data — equivalent to erasure.',
                    'Opposition (Oposición): right to object to processing for specific purposes.',
                  ],
                },
                {
                  type: 'paragraph',
                  content:
                    'Mexico also has a separate Federal Law on the Protection of Personal Data Held by Obliged Subjects (LFPDPPP-ST, 2017) for public sector data, plus the Federal Telecommunications Law for telecom data and the General Health Law for health data — a layered structure similar to India\'s sectoral approach.',
                },
                {
                  type: 'example',
                  content:
                    'An Indian garment exporter selling DTC to Mexican consumers via Shopify must provide an ARCO rights portal, INAI registration, and privacy notice in Spanish under LFPDPPP Articles 16-21.',
                },
              ],
            },
            {
              id: 'sec-3',
              title: 'Chile Reforms & Other Latin American Laws',
              content: [
                {
                  type: 'paragraph',
                  content:
                    'Chile\'s Law 19.628 on Privacy Protection, originally 1999, was substantially reformed in 2024 (Law 21.719) to add GDPR-aligned obligations: lawful bases, data subject rights, breach notification within 72 hours, sensitive data protection, and creation of an independent Personal Data Protection Agency. The reform was driven by Chile\'s bid for OECD compliance and EU adequacy discussions.',
                },
                {
                  type: 'table',
                  headers: ['Country', 'Law', 'Regulator', 'Effective'],
                  rows: [
                    ['Argentina', 'PDPL 25.326', 'AAIP', '2000, modernisation pending'],
                    ['Mexico', 'LFPDPPP', 'INAI', '2010'],
                    ['Chile', 'Law 19.628 (reformed 2024)', 'Personal Data Protection Agency (new)', '2024 reforms'],
                    ['Colombia', 'Law 1581/2012', 'SIC', '2013'],
                    ['Peru', 'Law 29733/2011', 'INDECOPI', '2011'],
                    ['Uruguay', 'Law 18.331/2008', 'URCDP', '2009 (EU adequacy 2012)'],
                  ],
                },
                {
                  type: 'callout',
                  content:
                    'Uruguay received EU adequacy in 2012, making it the second non-EU American country (after Argentina) to do so. The EU is in active adequacy discussions with Chile and South Korea.',
                  calloutType: 'tip',
                },
              ],
            },
            {
              id: 'sec-4',
              title: 'Cross-Latin-American Strategy for Indian Firms',
              content: [
                {
                  type: 'paragraph',
                  content:
                    'For Indian firms targeting Latin America, a region-wide compliance program should: (1) start with Brazil LGPD as the strictest baseline; (2) add Argentina PDPL for EU adequacy-aligned transfers; (3) overlay Mexico LFPDPPP ARCO rights portal; (4) prepare for Chile\'s 2024 reforms; and (5) use the language of "adequate countries" to allow Argentina and Uruguay as onward transfer hubs for EU data.',
                },
                {
                  type: 'example',
                  content:
                    'A Pune-based clinical research organisation running trials in Argentina, Brazil, and Mexico can use Argentina as the central data hub (EU adequacy), apply LGPD for Brazil-sourced data, and provide ARCO rights portal for Mexican patients — one program, three jurisdiction overlays.',
                },
              ],
            },
          ],
          glossary: [
            { term: 'LFPDPPP', definition: 'Ley Federal de Protección de Datos Personales en Posesión de los Particulares, Mexico\'s private-sector privacy law (2010).' },
            { term: 'ARCO Rights', definition: 'Access, Rectification, Cancellation, Opposition — the four data subject rights under LFPDPPP.' },
            { term: 'INAI', definition: 'Instituto Nacional de Transparencia, Acceso a la Información y Protección de Datos Personales, Mexico\'s privacy regulator.' },
            { term: 'AAIP', definition: 'Agencia de Acceso a la Información Pública, Argentina\'s data protection regulator.' },
            { term: 'Law 21.719', definition: 'Chile\'s 2024 privacy reform amending Law 19.628 to align with GDPR.' },
          ],
          references: [
            { title: 'Ley 25.326 de Protección de Datos Personales', source: 'Argentine Government', year: '2000' },
            { title: 'LFPDPPP, Diario Oficial de la Federación', source: 'Mexican Government', year: '2010' },
            { title: 'Ley 21.719 que reforma la Ley 19.628', source: 'Chilean Government', year: '2024' },
            { title: 'European Commission Adequacy Decision for Argentina', source: 'European Commission', year: '2005 (reaffirmed 2019)' },
          ],
        },
      ],
    },

    // ============================================================
    // CHAPTER 3: PRACTICAL COMPARISON & STRATEGY
    // ============================================================
    {
      id: 3,
      title: 'Practical Comparison & Strategy',
      lessons: [
        // -------- LESSON 13: SIDE-BY-SIDE COMPARISON + TRANSFERS --------
        {
          id: 13,
          title: 'Side-by-Side Comparison: DPDPA vs GDPR vs CCPA vs PIPL',
          duration: '16 min',
          type: 'interactive',
          description:
            'A detailed comparison table of the four most impactful privacy laws for Indian businesses, including cross-border transfer mechanisms: adequacy, SCCs, and blacklist approaches.',
          content:
            'For Indian multinationals, the four laws that most frequently apply simultaneously are the DPDPA, GDPR, CCPA, and PIPL. This lesson provides a side-by-side comparison across eighteen dimensions — scope, lawful basis, rights, breach notification, penalties, transfers, children, and DPO — plus a dedicated analysis of the three dominant cross-border transfer mechanisms: adequacy decisions, Standard Contractual Clauses, and the DPDPA\'s blacklist approach.',
          learningObjectives: [
            'Compare DPDPA, GDPR, CCPA and PIPL across 18 dimensions',
            'Distinguish the three cross-border transfer mechanisms',
            'Identify the strictest rule for each obligation category',
            'Build a unified transfer strategy for multi-jurisdictional data',
          ],
          keyTakeaways: [
            'DPDPA is the most consent-centric of the four; GDPR offers 6 bases; CCPA is opt-out; PIPL has consent + 6 alternatives.',
            'Penalties: DPDPA ₹250 crore; GDPR €20M/4%; CCPA $7,500/violation; PIPL 5% turnover/RMB 50M.',
            'Breach notification: GDPR 72 hours; PDPA 3 days; PIPA 24 hours; DPDPA "as soon as possible"; CCPA 30-day cure.',
            'Transfer mechanisms: EU SCCs + TIA; PIPL CAC assessment; DPDPA blacklist; CCPA contractual flow-down.',
            'Children: DPDPA under 18 with parental consent; PIPL under 14 sensitive; CCPA under 16 opt-in; GDPR under 16 (member state varies).',
          ],
          sections: [
            {
              id: 'sec-1',
              title: 'The Master Comparison Table',
              content: [
                {
                  type: 'paragraph',
                  content:
                    'The following table compares the four most impactful privacy laws across eighteen dimensions. The "Strictest" column shows the highest-common-denominator rule for unified programs.',
                },
                {
                  type: 'table',
                  headers: ['Dimension', 'DPDPA 2023', 'GDPR', 'CCPA/CPRA', 'PIPL', 'Strictest'],
                  rows: [
                    ['Effective', 'Aug 2023', 'May 2018', 'Jan 2020/2023', 'Nov 2021', '—'],
                    ['Scope', 'India data, extraterritorial', 'EU data, extraterritorial', 'Threshold-based', 'China data, extraterritorial', 'GDPR/DPDPA'],
                    ['Lawful bases', 'Consent + legitimate use', '6 bases', 'Notice/opt-out', 'Consent + 6 alt.', 'Consent'],
                    ['Sensitive data', 'Children only (Sec 9)', 'Art 9 special category', 'SPI (CPRA)', 'Art 28 sensitive', 'PIPL'],
                    ['Children', '<18 parental consent', '<16 (varies)', '<16 opt-in', '<14 sensitive', 'DPDPA'],
                    ['Rights count', '6 (Sec 11-12)', '8', '11', '8', 'CCPA (11)'],
                    ['Breach notice', 'As soon as possible', '72 hours', 'No strict timeline', 'PIPC promptly', 'GDPR 72h'],
                    ['Max penalty', '₹250 crore', '€20M or 4%', '$7,500/violation', '5% turnover/RMB 50M', 'PIPL (5% turnover)'],
                    ['DPO required', 'SDFs only (Sec 8(9))', 'Specific cases (Art 37)', 'No', 'Always (Art 52)', 'PIPL'],
                    ['DPIA required', 'SDFs (Sec 10)', 'High-risk (Art 35)', 'Risk assessment (CPRA)', 'Art 55 PIPIA', 'PIPL/GDPR'],
                    ['Transfer tools', 'Blacklist (Sec 16)', 'SCCs + TIA, BCR', 'Contract flow-down', 'CAC assessment', 'PIPL'],
                    ['EU adequacy', 'No', '—', 'No', 'No', '—'],
                    ['Private right of action', 'No', 'No (mostly)', 'Yes (breach)', 'No', 'CCPA'],
                    ['Consent withdrawal', 'Easy (Sec 6(4))', 'Easy (Art 7(3))', 'Opt-out', 'Yes (Art 16)', 'All yes'],
                    ['Processing records', 'SDFs (Sec 10)', 'All controllers (Art 30)', 'Service providers', 'Always', 'PIPL/GDPR'],
                    ['Government access', 'Section 17 exemption', 'Case-by-case', 'Limited', 'Explicit', 'Varies'],
                    ['Breach cure period', 'No', 'No', '30 days (private)', 'No', 'No cure'],
                    ['Enforcement', 'Data Protection Board', 'EDPB + DPAs', 'CPPA + AG', 'CAC', 'Multiple'],
                  ],
                },
                {
                  type: 'callout',
                  content:
                    'A unified compliance program for all four laws must adopt: consent as default; parental consent under 18 for children; 72-hour breach notification; SCCs + TIA for transfers; mandatory DPO; processing records for all; and a blacklist screen for destinations under DPDPA Section 16.',
                  calloutType: 'important',
                },
              ],
            },
            {
              id: 'sec-2',
              title: 'Cross-Border Transfer Mechanisms Compared',
              content: [
                {
                  type: 'paragraph',
                  content:
                    'The three dominant cross-border transfer mechanisms globally are: (1) Adequacy decisions — the destination country is approved by the source regulator as providing equivalent protection (EU GDPR Arts 45, UK GDPR, Japan APPI); (2) Standard Contractual Clauses (SCCs) — pre-approved contractual terms binding the importer to GDPR-level protection (EU SCCs 2021, UK IDTA, ANPD SCCs 2023); and (3) Blacklists — the source country prohibits transfers to specified destinations (DPDPA Section 16, PIPL Articles 38-41 with security assessment).',
                },
                {
                  type: 'table',
                  headers: ['Mechanism', 'Laws Using It', 'Pros', 'Cons'],
                  rows: [
                    ['Adequacy decision', 'GDPR (Art 45), UK, APPI, LGPD', 'No contractual burden; flexible', 'Slow approval process; political risk'],
                    ['Standard Contractual Clauses', 'GDPR, UK, ANPD, PIPEDA', 'Available for all destinations', 'Requires TIA; subject to challenge (Schrems II)'],
                    ['Blacklist', 'DPDPA (Sec 16), PIPL (Art 41)', 'Bright-line rule; simple', 'Cannot transfer to listed countries'],
                    ['CAC security assessment', 'PIPL (Art 38)', 'Mandatory for high-volume', 'Long approval; opaque'],
                    ['Binding Corporate Rules', 'GDPR, LGPD, UK', 'Efficient for intra-group', 'Long approval; expensive'],
                    ['Specific consent', 'GDPR Art 49, LGPD, DPDPA implied', 'Flexible for one-off', 'High risk; not scalable'],
                  ],
                },
                {
                  type: 'example',
                  content:
                    'An Indian bank with EU and US customers must use: (1) SCCs + TIA for EU-to-India transfers (no adequacy for India); (2) blacklist screen under DPDPA Section 16 for India-to-anywhere transfers; (3) CAC security assessment for India-to-China transfers (if PIPL triggers); (4) contractual flow-down for any California customer data going through US subsidiaries. Four transfer layers, one program.',
                },
              ],
            },
            {
              id: 'sec-3',
              title: 'Adequacy Map: Who Is Approved by Whom',
              content: [
                {
                  type: 'paragraph',
                  content:
                    'Adequacy decisions create "safe harbours" for transfers. The EU has issued adequacy decisions for Andorra, Argentina, Canada (commercial), Faroe Islands, Guernsey, Israel, Isle of Man, Japan, Jersey, New Zealand, Republic of Korea, Switzerland, Uruguay, the UK, and the EU-US Data Privacy Framework (2023). The UK recognises the EEA plus Gibraltar, and has applied the EU adequacy for many third countries on a transitional basis. Japan has reciprocal adequacy with the EU and UK.',
                },
                {
                  type: 'callout',
                  content:
                    'India is NOT on the EU adequacy list as of 2025, meaning EU-to-India transfers require SCCs + TIA. The DPDPA\'s Section 16 blacklist mechanism is structurally different — it prohibits rather than permits — and India is unlikely to seek EU adequacy in the short term.',
                  calloutType: 'warning',
                },
                {
                  type: 'list',
                  content: 'Key adequacy relationships (2025)',
                  items: [
                    'EU adequacy: 15+ countries including Japan, South Korea, UK, Israel, Argentina, Uruguay, New Zealand, Switzerland.',
                    'EU-US Data Privacy Framework (DPF): effective July 2023, replacing the invalidated Safe Harbor (2015) and Privacy Shield (2020).',
                    'UK adequacy: EEA, Gibraltar, plus transitional recognition of EU adequacy decisions.',
                    'Japan-EU: reciprocal adequacy (2019).',
                    'Israel-EU: adequacy (2023).',
                    'South Korea-EU: adequacy (2023).',
                  ],
                },
              ],
            },
            {
              id: 'sec-4',
              title: 'Blacklists and Restricted Destinations',
              content: [
                {
                  type: 'paragraph',
                  content:
                    'DPDPA Section 16 empowers the Indian Government to notify "blacklist" countries or organisations to which cross-border transfers of personal data are restricted. As of 2025, no countries have been blacklisted, but the mechanism is structurally inverse to adequacy: instead of approving destinations, India prohibits them. The DPDPA also allows the Government to impose conditions on transfers, including purpose limitation and security safeguards.',
                },
                {
                  type: 'heading',
                  content: 'PIPL Security Assessment Triggers',
                },
                {
                  type: 'paragraph',
                  content:
                    'China\'s PIPL Article 38 requires CAC security assessment before transferring: (1) CIIO personal data; (2) data of more than 1 million individuals; (3) "important data"; (4) sensitive personal information of more than 100,000 individuals; or (5) data of more than 100,000 individuals in aggregate. Below these thresholds, the Standard Contract (filed with provincial CAC) or certification applies.',
                },
                {
                  type: 'example',
                  content:
                    'A Bengaluru SaaS company with 5 million Indian users and a Shanghai office must: (1) comply with DPDPA Section 16 (no India→China transfer unless permitted); (2) comply with PIPL Article 38 (CAC security assessment if transferring >1 million records); (3) use SCCs + TIA for any EU data; (4) apply contractual flow-down for California users. Layered transfers require careful legal mapping.',
                },
              ],
            },
          ],
          glossary: [
            { term: 'Adequacy Decision', definition: 'A regulatory decision that a third country provides an equivalent level of personal data protection, allowing transfers without additional safeguards.' },
            { term: 'Standard Contractual Clauses (SCCs)', definition: 'Pre-approved contractual terms issued by a regulator (e.g., European Commission, ANPD) to legitimise cross-border transfers.' },
            { term: 'Blacklist', definition: 'A regulatory list of countries or entities to which personal data transfers are prohibited, used by the DPDPA under Section 16.' },
            { term: 'Transfer Impact Assessment (TIA)', definition: 'A documented assessment of the destination country\'s surveillance and access laws, required by GDPR after Schrems II.' },
            { term: 'DPF', definition: 'EU-US Data Privacy Framework, the July 2023 successor to Safe Harbor and Privacy Shield.' },
          ],
          references: [
            { title: 'European Commission Adequacy Decisions', source: 'European Commission', year: '2024' },
            { title: 'EU-US Data Privacy Framework', source: 'European Commission', year: '2023' },
            { title: 'DPDPA Section 16 Cross-Border Transfer Rules', source: 'Government of India', year: '2023' },
            { title: 'PIPL Articles 38-41 Cross-Border Provisions', source: 'National People\'s Congress', year: '2021' },
          ],
        },
        // -------- LESSON 14: UNIFIED GLOBAL COMPLIANCE PROGRAM --------
        {
          id: 14,
          title: 'Building a Unified Global Compliance Program',
          duration: '15 min',
          type: 'exercise',
          description:
            'How to design, implement, and operate a single global privacy program that satisfies DPDPA, GDPR, CCPA, PIPL, PDPA and emerging frameworks using ISO 27701 as the backbone.',
          content:
            'A unified global compliance program is not a luxury — it is the only economically rational response to operating across 130+ privacy laws. This lesson walks through the design, implementation, and continuous operation of a single privacy program built on ISO/IEC 27701:2019, calibrated to the highest-common-denominator approach. You will learn the seven pillars of program design and the operational cadence that keeps the program alive.',
          learningObjectives: [
            'Design a seven-pillar unified privacy program',
            'Implement ISO 27701 as the program backbone',
            'Operate a quarterly compliance cadence across jurisdictions',
            'Map data flows globally using a single ROPA',
          ],
          keyTakeaways: [
            'A unified program rests on seven pillars: governance, data mapping, consent, rights, security, breach response, and training.',
            'ISO/IEC 27701:2019 is the international standard for Privacy Information Management Systems (PIMS) and extends ISO 27001.',
            'A single ROPA with jurisdiction tags eliminates duplicate records of processing across DPDPA, GDPR, PIPL, etc.',
            'Quarterly compliance reviews with jurisdictional overlays are essential for keeping pace with regulatory change.',
            'The DPDPA Consent Manager under Section 13 is the operational centre of consent management.',
          ],
          sections: [
            {
              id: 'sec-1',
              title: 'The Seven Pillars of Program Design',
              content: [
                {
                  type: 'paragraph',
                  content:
                    'A unified global compliance program rests on seven pillars. Each pillar must be designed to satisfy the strictest applicable law — the highest common denominator. The pillars are not separate work streams; they are interlocking capabilities that depend on each other.',
                },
                {
                  type: 'list',
                  content: 'The seven pillars of a unified privacy program',
                  items: [
                    'Governance: Board-level accountability, a Chief Privacy Officer, a Privacy Steering Committee, and a documented privacy policy framework.',
                    'Data Mapping: A single Records of Processing Activities (ROPA) covering all jurisdictions and processing activities.',
                    'Consent Management: A Consent Manager (DPDPA Section 13) that captures, stores, and revokes consent across all channels.',
                    'Data Subject Rights: A unified DSAR portal that maps requests to applicable rights (8 GDPR, 11 CCPA, 6 DPDPA, etc.).',
                    'Security Safeguards: ISO 27001 ISMS plus ISO 27701 PIMS, with encryption, access control, and audit trails.',
                    'Breach Response: A 24/7 playbook with 72-hour (GDPR), 3-day (PDPA), and 24-hour (PIPA) notification tracks.',
                    'Training & Awareness: Annual privacy training for all employees, role-based training for high-risk functions.',
                  ],
                },
                {
                  type: 'callout',
                  content:
                    'The DPDPA Consent Manager (Section 13) is the operational hub. An interoperable Consent Manager — accessible via API, mobile app, and web — can satisfy DPDPA Section 13, GDPR Article 7(1), CCPA opt-out, and PDPA Section 14 in a single interface.',
                  calloutType: 'tip',
                },
              ],
            },
            {
              id: 'sec-2',
              title: 'ISO/IEC 27701 as the Backbone',
              content: [
                {
                  type: 'paragraph',
                  content:
                    'ISO/IEC 27701:2019 is the international standard for Privacy Information Management Systems (PIMS). It extends ISO/IEC 27001 (ISMS) and provides a unified framework for managing personal data across jurisdictions. Certification to ISO 27701 demonstrates to regulators worldwide — including the DPDPA Board, EDPB, PDPC, and CPPA — that the organisation has a credible privacy program. ISO 27701 has 6 control objectives for PII Controllers and 8 for PII Processors, mapped to GDPR principles.',
                },
                {
                  type: 'table',
                  headers: ['ISO Standard', 'Scope', 'Use Case'],
                  rows: [
                    ['ISO/IEC 27001:2022', 'Information Security Management', 'Foundation for privacy; required by DPDPA Section 8(5) for "reasonable security"'],
                    ['ISO/IEC 27701:2019', 'Privacy Information Management', 'Unified privacy program; extends ISO 27001'],
                    ['ISO/IEC 27018:2019', 'Cloud PII Protection', 'Cloud provider controls'],
                    ['ISO/IEC 29100:2011', 'Privacy Framework', 'Conceptual framework'],
                    ['ISO/IEC 27005:2022', 'Information Security Risk', 'Risk assessment methodology'],
                  ],
                },
                {
                  type: 'example',
                  content:
                    'A Mumbai SaaS company seeking to enter EU, US, Singapore, and Brazil markets simultaneously can pursue ISO 27701 certification in 6-9 months. The certificate demonstrates a unified program — accelerating GDPR processor due diligence, CCPA service-provider compliance, and DPDPA Board credibility.',
                },
              ],
            },
            {
              id: 'sec-3',
              title: 'A Single ROPA with Jurisdiction Tags',
              content: [
                {
                  type: 'paragraph',
                  content:
                    'The Records of Processing Activities (ROPA) under GDPR Article 30 is the most comprehensive processing inventory requirement. By extending it to cover DPDPA Significant Data Fiduciary obligations (Section 10), PIPL Article 54 assessments, and CCPA service-provider obligations, an organisation maintains a single source of truth. Each processing activity is tagged with applicable jurisdictions, lawful bases, retention periods, security measures, and transfer mechanisms.',
                },
                {
                  type: 'heading',
                  content: 'ROPA Schema (Unified)',
                },
                {
                  type: 'list',
                  content: 'Recommended ROPA fields for a unified program',
                  items: [
                    'Processing activity name and description',
                    'Purpose(s) of processing',
                    'Lawful basis (per jurisdiction)',
                    'Categories of data subjects',
                    'Categories of personal data (including DPDPA, GDPR, PIPL sensitive)',
                    'Recipients (internal, external, processors)',
                    'Third-country transfers and mechanism (SCC, BCR, blacklist screen)',
                    'Retention period',
                    'Security safeguards (encryption, access control, ISO 27001 controls)',
                    'DPIA/PIPIA conducted? Date?',
                    'Jurisdictions applicable (DPDPA, GDPR, CCPA, PIPL, PDPA, LGPD, etc.)',
                    'Consent Manager record ID',
                  ],
                },
              ],
            },
            {
              id: 'sec-4',
              title: 'Operational Cadence & Continuous Compliance',
              content: [
                {
                  type: 'paragraph',
                  content:
                    'A privacy program is a living organism. The operational cadence includes: (1) weekly incident triage; (2) monthly Privacy Steering Committee review; (3) quarterly ROPA refresh; (4) annual policy review; (5) annual employee training; (6) biennial ISO 27701 surveillance audit; (7) triennial recertification. Jurisdictional overlays (new laws, amendments, fines) are tracked through regulatory horizon scanning services like OneTrust DataGuidance, IAPP News, and Thomson Reuters Practical Law.',
                },
                {
                  type: 'callout',
                  content:
                    'Continuous compliance is not "set and forget" — it is a daily operational discipline. The DPDPA Data Protection Board can request evidence of compliance at any time under Section 28, and ISO 27701 surveillance audits require demonstrated continuous operation, not just point-in-time certification.',
                  calloutType: 'important',
                },
                {
                  type: 'example',
                  content:
                    'A Pune-headquartered product company with EU, US, and Singapore customers runs: weekly breach triage (Friday), monthly Privacy Committee (last Tuesday), quarterly ROPA refresh (March, June, September, December), annual ISO 27701 audit (April), and rolling employee training (managed through LMS with role-based modules).',
                },
              ],
            },
          ],
          glossary: [
            { term: 'PIMS', definition: 'Privacy Information Management System, the privacy extension of an ISMS under ISO/IEC 27701.' },
            { term: 'ROPA', definition: 'Records of Processing Activities, the inventory of processing required by GDPR Article 30 and recommended by DPDPA Section 10.' },
            { term: 'Consent Manager', definition: 'A platform or service for capturing, storing, and revoking consent, mandated as interoperable under DPDPA Section 13.' },
            { term: 'DSAR Portal', definition: 'Data Subject Access Request portal — a unified intake for access, deletion, correction, and portability requests.' },
            { term: 'Privacy Steering Committee', definition: 'A cross-functional governance body overseeing the privacy program, typically including Legal, IT Security, HR, Product, and Engineering.' },
          ],
          references: [
            { title: 'ISO/IEC 27701:2019 Privacy Information Management System', source: 'International Organization for Standardization', year: '2019' },
            { title: 'ISO/IEC 27001:2022 Information Security Management', source: 'International Organization for Standardization', year: '2022' },
            { title: 'IAPP Privacy Governance Report', source: 'International Association of Privacy Professionals', year: '2024' },
            { title: 'OneTrust DataGuidance Global Privacy Map', source: 'OneTrust', year: '2024' },
          ],
        },
        // -------- LESSON 15: CASE STUDY --------
        {
          id: 15,
          title: 'Case Study: An Indian MNC Complying with 5 Laws Simultaneously',
          duration: '18 min',
          type: 'interactive',
          description:
            'A fictional but realistic case study of an Indian multinational fintech company complying with DPDPA, GDPR, CCPA, PIPL, and PDPA simultaneously — including a major cross-border data breach.',
          content:
            'This lesson walks through a realistic case study of "BharatPay Global", a fictional Mumbai-headquartered fintech with operations in India, the EU (Germany), the US (California), China (Shanghai), and Singapore. The case study demonstrates how a unified compliance program built on the highest-common-denominator approach handles day-to-day operations and a major incident — the simultaneous breach notification to five regulators within 24 hours.',
          learningObjectives: [
            'Apply the unified compliance program to a real-world fintech',
            'Map a single breach to five different notification regimes',
            'Coordinate multi-regulator breach response',
            'Identify lessons learned for ongoing compliance',
          ],
          keyTakeaways: [
            'BharatPay\'s 5-jurisdiction operations trigger DPDPA, GDPR, CCPA, PIPL, and PDPA simultaneously.',
            'A unified ROPA and Consent Manager enable a single breach notification with jurisdiction-specific timelines.',
            'The 72-hour GDPR clock and 24-hour PIPA clock (not applicable here) drive incident response priority.',
            'Post-incident, BharatPay implemented ISO 27701 certification and quarterly tabletop exercises.',
            'The case demonstrates the value of the highest-common-denominator approach in real crisis conditions.',
          ],
          sections: [
            {
              id: 'sec-1',
              title: 'BharatPay Global: Company Profile',
              content: [
                {
                  type: 'paragraph',
                  content:
                    'BharatPay Global is a Mumbai-headquartered fintech offering UPI-based payments, cross-border remittances, and digital lending. It has 4 million Indian customers, 250,000 EU customers (mainly Germany), 180,000 California customers, 80,000 China-based expat customers, and 150,000 Singapore customers. It operates data centres in Mumbai (AWS ap-south-1), Frankfurt (AWS eu-central-1), California (AWS us-west-1), and Shanghai (Alibaba Cloud). It employs 2,500 people across all locations.',
                },
                {
                  type: 'table',
                  headers: ['Jurisdiction', 'Customers', 'Primary Law', 'Regulator', 'Notification Clock'],
                  rows: [
                    ['India', '4,000,000', 'DPDPA', 'Data Protection Board', 'As soon as possible'],
                    ['Germany (EU)', '250,000', 'GDPR', 'BfDI / State DPA', '72 hours'],
                    ['California', '180,000', 'CCPA/CPRA', 'CPPA + CA AG', 'No strict timeline; 30-day cure'],
                    ['China', '80,000', 'PIPL', 'CAC', 'Promptly'],
                    ['Singapore', '150,000', 'PDPA', 'PDPC', '3 calendar days'],
                  ],
                },
                {
                  type: 'callout',
                  content:
                    'BharatPay is a Significant Data Fiduciary under DPDPA Section 10 (large volume, sensitive financial data). It must appoint a DPO, conduct DPIAs, and undergo annual audits. It is also a "service provider" under CCPA for some California partners, an "establishment" controller under GDPR, and a "personal information handler" under PIPL.',
                  calloutType: 'important',
                },
              ],
            },
            {
              id: 'sec-2',
              title: 'The Unified Compliance Program',
              content: [
                {
                  type: 'paragraph',
                  content:
                    'BharatPay built a unified program with: (1) ISO 27001 + ISO 27701 certification; (2) a single ROPA with jurisdiction tags; (3) a Consent Manager accessible via API for all 4.6 million customers; (4) a unified DSAR portal handling 8 GDPR rights + 11 CCPA rights + 6 DPDPA rights; (5) a 24/7 breach response playbook with branches for each regulator; (6) mandatory annual privacy training for all 2,500 employees; and (7) a Privacy Steering Committee chaired by the Chief Privacy Officer.',
                },
                {
                  type: 'heading',
                  content: 'Consent Architecture',
                },
                {
                  type: 'paragraph',
                  content:
                    'The Consent Manager captures granular consent: marketing, analytics, cross-border transfer, sensitive data, children\'s parental consent. Each consent record is tagged with jurisdiction, purpose, timestamp, and revocation status. Customers can revoke consent via the BharatPay app, which propagates across all systems within 24 hours via Kafka event streams — exceeding DPDPA Section 6(4) "easy withdrawal" requirements.',
                },
                {
                  type: 'example',
                  content:
                    'A German customer revoking marketing consent on a Sunday triggers: (1) immediate opt-out from marketing systems (GDPR); (2) opt-out from CCPA "sale or share" if dual German-California resident; (3) propagation to all downstream processors within 24 hours. The Consent Manager logs the revocation timestamp for audit.',
                },
              ],
            },
            {
              id: 'sec-3',
              title: 'The Incident: A Coordinated Breach',
              content: [
                {
                  type: 'paragraph',
                  content:
                    'On 15 March 2025 at 02:14 IST, BharatPay\'s SOC detected anomalous database queries on the Mumbai RDS instance. By 02:45, the IR team confirmed an unauthorised access via a leaked RDS credential posted on a developer forum. The breach exposed 1.2 million Indian customer records (names, UPI IDs, masked PAN), 45,000 German customer records, 12,000 California records, and 8,000 Singapore records. No China data was affected (separate Alibaba Cloud instance).',
                },
                {
                  type: 'callout',
                  content:
                    'The breach triggered five simultaneous notification clocks: DPDPA (as soon as possible), GDPR (72 hours from detection = 18 March 02:14 IST), CCPA (no strict regulator timeline; 30-day cure for private action), PDPA Singapore (3 calendar days = 18 March). BharatPay had 72 hours to notify multiple regulators.',
                  calloutType: 'warning',
                },
                {
                  type: 'heading',
                  content: 'Breach Notification Timeline',
                },
                {
                  type: 'list',
                  content: 'BharatPay\'s notification timeline',
                  items: [
                    '15 March 02:14 IST — SOC detects anomaly; IR team engaged.',
                    '15 March 04:30 — Forensic team confirms breach scope.',
                    '15 March 09:00 — Privacy Steering Committee convened; CPO activates breach playbook.',
                    '15 March 11:00 — Notification to DPDPA Data Protection Board (as soon as possible).',
                    '15 March 14:00 — Notification to PDPC Singapore (within 3 calendar days; voluntary early notice).',
                    '16 March 10:00 — Notification to BfDI / Hesse State DPA (within 72 hours of detection).',
                    '16 March 11:00 — Notification to CPPA and California AG.',
                    '17 March — Individual notifications to 1.2M Indian customers + 45K German + 12K California + 8K Singapore (high risk).',
                    '17 March — Public statement and breach website.',
                    '20 March — Post-incident review and remediation plan filed with all regulators.',
                  ],
                },
                {
                  type: 'example',
                  content:
                    'BharatPay\'s unified breach playbook pre-drafted notification templates for each regulator, in each language (English, German, Mandarin, simplified English for Singapore), with the same factual narrative but jurisdiction-specific legal framings. This shaved 18 hours off the notification timeline versus siloed drafting.',
                },
              ],
            },
            {
              id: 'sec-4',
              title: 'Regulator Response & Lessons Learned',
              content: [
                {
                  type: 'paragraph',
                  content:
                    'The DPDPA Data Protection Board opened an inquiry on 16 March and requested: (1) full incident report; (2) ROPA extract for affected processing activities; (3) Consent Manager audit logs; (4) DPIA records; (5) ISO 27701 certification evidence. The BfDI requested a similar bundle plus TIA records for Frankfurt-to-Mumbai data flows. The CPPA asked for the "reasonable security" measures in place. The PDPC asked for the 3-day notification timing rationale.',
                },
                {
                  type: 'heading',
                  content: 'Penalty Exposure',
                },
                {
                  type: 'paragraph',
                  content:
                    'Maximum theoretical exposure: DPDPA up to ₹250 crore (Section 33); GDPR up to €20 million or 4% of global turnover (approximately ₹360 crore for BharatPay); CCPA up to $7,500 per violation × 12,000 records = $90 million (₹750 crore); PDPA up to S$1 million or 10% Singapore turnover. In practice, regulators typically reduce penalties for prompt notification, cooperation, and demonstrated remediation. BharatPay\'s pre-existing ISO 27701 certification and unified program were mitigating factors.',
                },
                {
                  type: 'callout',
                  content:
                    'Post-incident, BharatPay implemented: (1) split-key encryption for all databases (keys held in HSMs in different regions); (2) secrets rotation every 30 days; (3) quarterly tabletop exercises simulating multi-regulator breaches; (4) expansion of the unified ROPA to include breach response runbooks per processing activity. The total remediation cost was ₹40 crore — far less than the potential ₹1,000+ crore aggregate penalty exposure.',
                  calloutType: 'tip',
                },
                {
                  type: 'example',
                  content:
                    'BharatPay\'s case demonstrates the unified program thesis: had it maintained siloed DPDPA, GDPR, CCPA, PIPL, and PDPA programs, the breach response would have taken 5-7 days to notify all regulators, exceeding the GDPR 72-hour clock and triggering automatic fines. The unified program enabled compliance within 48 hours.',
                },
              ],
            },
          ],
          glossary: [
            { term: 'Significant Data Fiduciary (SDF)', definition: 'A Data Fiduciary notified by the Government under DPDPA Section 10, subject to enhanced obligations including DPO appointment and DPIAs.' },
            { term: 'Tabletop Exercise', definition: 'A simulated incident response exercise involving key stakeholders to test breach playbooks and decision-making under pressure.' },
            { term: 'Forensic Investigation', definition: 'A structured investigation to determine breach scope, root cause, and remediation, typically conducted by specialised forensic firms.' },
            { term: 'Split-Key Encryption', definition: 'A cryptographic technique where encryption keys are split across multiple locations, requiring both to decrypt, reducing single-point-of-failure risk.' },
          ],
          references: [
            { title: 'DPDPA Section 8(6) Breach Notification', source: 'Government of India', year: '2023' },
            { title: 'GDPR Article 33 Personal Data Breach Notification', source: 'European Union', year: '2016' },
            { title: 'PDPA Section 26B/26C Breach Notification', source: 'PDPC Singapore', year: '2020' },
            { title: 'ISO/IEC 27035 Incident Management', source: 'International Organization for Standardization', year: '2023' },
            { title: 'IBM Cost of a Data Breach Report', source: 'IBM Security', year: '2024' },
          ],
        },
      ],
    },
  ],

  // ===== MODULE ASSIGNMENTS =====
  assignments: [
    {
      id: 1,
      title: 'Multi-Jurisdictional Compliance Matrix',
      description:
        'Build a compliance matrix for a fictional Indian fintech operating in India, EU, California, China, and Singapore. For each of 15 obligations (lawful basis, breach notification, DSAR, transfers, etc.), identify the strictest applicable rule and the source law.',
      deliverables: [
        'Compliance matrix with 15 obligation rows and 5 jurisdiction columns',
        'Identification of the strictest rule per obligation (highest common denominator)',
        'Source citation for each cell (section number, article)',
        'Overlay recommendations for jurisdiction-specific requirements',
        'A 1-page executive summary justifying the program design',
      ],
    },
    {
      id: 2,
      title: 'Cross-Border Transfer Strategy',
      description:
        'Design a cross-border transfer strategy for an Indian SaaS company with EU, US, China, and Singapore customers. Map each transfer link, identify the applicable mechanism (SCC, CAC assessment, blacklist screen, adequacy), and document the contractual and technical safeguards required.',
      deliverables: [
        'Data flow diagram showing all transfer links',
        'Mechanism selection per link with legal justification',
        'Transfer Impact Assessment (TIA) template for high-risk transfers',
        'Contractual safeguards (SCC clauses, processor terms)',
        'Technical safeguards (encryption, split keys, access controls)',
      ],
    },
    {
      id: 3,
      title: 'Regulator Engagement Simulation',
      description:
        'Draft a breach notification to be sent simultaneously to the DPDPA Data Protection Board, Germany BfDI, California CPPA, Singapore PDPC, and China CAC following a multi-jurisdictional breach affecting 1 million customers. Each notification must meet the legal requirements of the destination regulator while maintaining factual consistency.',
      deliverables: [
        'Five breach notification letters (one per regulator)',
        'Timeline of notifications (within 72 hours of detection)',
        'Affected individual notification template',
        'Internal breach playbook with regulator-specific branches',
        'Post-incident review report template',
      ],
    },
  ],

  // ===== MODULE QUIZ =====
  quiz: {
    questions: [
      {
        question: 'Under GDPR Article 6, how many lawful bases are there for processing personal data?',
        options: ['4', '5', '6', '7'],
        correct: 2,
        explanation: 'GDPR Article 6 lists six lawful bases: consent, contract, legal obligation, vital interests, public task, and legitimate interests.',
      },
      {
        question: 'What was the value of the May 2023 Meta Ireland GDPR fine for unlawful SCC-based transfers to the US?',
        options: ['€746 million', '€1.2 billion', '€405 million', '€225 million'],
        correct: 1,
        explanation: 'The Irish Data Protection Commission fined Meta Ireland €1.2 billion in May 2023 — the largest GDPR fine to date — for unlawful SCC-based transfers to the US following Schrems II.',
      },
      {
        question: 'What is the maximum civil penalty per violation under CCPA/CPRA for intentional or child-related violations?',
        options: ['$2,500', '$5,000', '$7,500', '$10,000'],
        correct: 2,
        explanation: 'Under Cal. Civ. Code §1798.155, the maximum civil penalty is $7,500 per violation for intentional violations or violations involving minors; $2,500 for non-intentional violations.',
      },
      {
        question: 'How many calendar days does an organisation have to notify the Singapore PDPC of a notifiable breach?',
        options: ['24 hours', '72 hours', '3 calendar days', '30 days'],
        correct: 2,
        explanation: 'Under PDPA Sections 26B and 26C, organisations must notify the PDPC within 3 calendar days of determining a breach is notifiable (significant harm or 500+ individuals).',
      },
      {
        question: 'What is the maximum penalty under China\'s PIPL for serious violations?',
        options: ['RMB 5 million', 'RMB 50 million or 5% of turnover', 'RMB 100 million', 'RMB 1 billion'],
        correct: 1,
        explanation: 'PIPL Article 66 sets the maximum penalty at RMB 50 million or 5% of the preceding year\'s annual turnover, whichever is higher, plus potential business licence revocation.',
      },
      {
        question: 'Under DPDPA Section 9, what is the age threshold for requiring verifiable parental consent?',
        options: ['Under 13', 'Under 14', 'Under 16', 'Under 18'],
        correct: 3,
        explanation: 'DPDPA Section 9 requires verifiable parental consent for processing personal data of children under 18 — one of the highest thresholds globally.',
      },
      {
        question: 'How many legal bases does Brazil\'s LGPD Article 7 provide?',
        options: ['6', '8', '10', '12'],
        correct: 2,
        explanation: 'LGPD Article 7 lists ten legal bases — broader than GDPR\'s six — including the uniquely Brazilian "credit protection" basis (Article 7, X).',
      },
      {
        question: 'Which country requires breach notification to its regulator within 24 hours — the shortest globally?',
        options: ['Japan', 'South Korea', 'Singapore', 'China'],
        correct: 1,
        explanation: 'South Korea\'s PIPA Article 34 (as amended September 2023) requires notification to the PIPC within 24 hours of becoming aware of a breach — the shortest mandatory window globally.',
      },
      {
        question: 'Which non-EU country was the FIRST to receive an EU adequacy decision (2005)?',
        options: ['Japan', 'Argentina', 'Israel', 'Uruguay'],
        correct: 1,
        explanation: 'Argentina was the first non-EU country to receive an EU adequacy decision in 2005; Uruguay received adequacy in 2012, Japan in 2019, Israel in 2023, and South Korea in 2023.',
      },
      {
        question: 'What is the maximum penalty under Australia\'s Privacy Act following the 2024 amendments?',
        options: ['AUD 2.2 million', 'AUD 10 million or 3% turnover', 'AUD 50 million or 30% turnover', 'AUD 100 million'],
        correct: 2,
        explanation: 'The Privacy and Other Legislation Amendment Act 2024 increased maximum penalties for serious or repeated interferences with privacy to AUD 50 million or 30% of adjusted turnover (whichever is greater), following the Optus and Medibank breaches.',
      },
      {
        question: 'Under GDPR Article 33, within how many hours must a personal data breach be notified to the supervisory authority?',
        options: ['24 hours', '48 hours', '72 hours', '7 days'],
        correct: 2,
        explanation: 'GDPR Article 33 requires notification to the supervisory authority without undue delay and where feasible within 72 hours of becoming aware of a breach.',
      },
      {
        question: 'Which UK law is the first major post-Brexit privacy reform introducing AI training and research exemptions?',
        options: ['Data Protection Act 2018', 'Digital Markets Act 2024', 'Data (Use and Access) Act 2025', 'UK GDPR Reform Act 2024'],
        correct: 2,
        explanation: 'The Data (Use and Access) Act 2025 (DUAA) is the UK\'s first major post-Brexit privacy reform, introducing changes for AI training data, scientific research, automated decision-making transparency, and "recognised legitimate interests".',
      },
      {
        question: 'What is the maximum penalty under Quebec\'s Law 25?',
        options: ['CAD 100,000', 'CAD 1 million', 'CAD 10 million', 'CAD 25 million or 4% turnover'],
        correct: 3,
        explanation: 'Quebec Law 25 sets the maximum penalty at CAD 25 million or 4% of worldwide turnover, plus personal director liability of up to CAD 100,000.',
      },
      {
        question: 'Under DPDPA Section 16, what mechanism does India use for restricting cross-border transfers?',
        options: ['Adequacy decisions', 'Standard Contractual Clauses', 'Blacklist of countries', 'Binding Corporate Rules'],
        correct: 2,
        explanation: 'DPDPA Section 16 empowers the Indian Government to notify a "blacklist" of countries to which personal data transfers are restricted — structurally the inverse of the EU adequacy approach.',
      },
      {
        question: 'Which privacy framework was the foundation of the GDPR\'s Article 5 seven principles?',
        options: ['OECD Privacy Guidelines 1980', 'CCPA 2018', 'PIPL 2021', 'PIPEDA 2000'],
        correct: 0,
        explanation: 'The OECD Privacy Guidelines (1980) provided the foundation for the GDPR\'s seven principles under Article 5 — lawfulness, fairness, transparency; purpose limitation; data minimisation; accuracy; storage limitation; integrity/confidentiality; and accountability.',
      },
    ],
    passingScore: 80,
  },

  // ===== MODULE PROJECT =====
  project: {
    title: 'Design a Unified Global Compliance Program',
    description:
      'Design and document a unified global compliance program for an Indian multinational operating across India, EU, US, China, Singapore, and Brazil. The program must satisfy DPDPA, GDPR, CCPA/CPRA, PIPL, PDPA, and LGPD simultaneously using the highest-common-denominator approach.',
    deliverables: [
      'Privacy governance charter with board-level accountability structure',
      'Single Records of Processing Activities (ROPA) covering all jurisdictions with tags',
      'Consent Manager architecture meeting DPDPA Section 13 and GDPR Article 7',
      'Unified DSAR portal specification covering all applicable rights',
      'Breach response playbook with regulator-specific branches (72h, 3-day, 24h tracks)',
      'Cross-border transfer strategy with SCC, TIA, blacklist, and CAC assessment mechanisms',
      'ISO 27001 + ISO 27701 certification roadmap with 12-month implementation timeline',
      'Training plan covering all employees and role-based modules',
      '12-month operational cadence (weekly, monthly, quarterly, annual activities)',
      'Executive summary justifying the highest-common-denominator approach',
    ],
  },
};