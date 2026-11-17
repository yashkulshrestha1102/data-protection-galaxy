// data/modules/module11.ts

import { Module } from '@/app/types/course';

export const module11: Module = {
  id: 11,
  title: 'Cross Border Data Transfer',
  description:
    'Navigate the complex world of international data transfers under DPDPA Section 16, sectoral localisation mandates from RBI, IRDAI and SEBI, and build practical cross-border compliance programmes. This module covers the blacklist approach, comparison with GDPR adequacy, payment data localisation, vendor due diligence, and drafting international Data Processing Agreements with real-world case studies of Indian SaaS companies operating globally.',
  duration: '8 Hours',
  icon: 'Globe',
  learningObjectives: [
    'Explain the DPDPA Section 16 blacklisting approach and contrast it with the GDPR adequacy model',
    'Apply RBI, IRDAI, SEBI and health-sector data localisation mandates to real business scenarios',
    'Build a complete cross-border data transfer map for an Indian organisation',
    'Draft enforceable international Data Processing Agreement clauses including SCCs and transfer impact assessments',
    'Conduct vendor due diligence on foreign cloud providers (AWS, Azure, GCP) for DPDPA compliance',
    'Identify the interaction between sectoral localisation rules and the general DPDPA transfer regime',
    'Design a Cross-Border Transfer Register that satisfies both the Data Protection Board of India and sectoral regulators',
  ],
  chapters: [
    // ============================================================
    // CHAPTER 1: TRANSFER RULES
    // ============================================================
    {
      id: 1,
      title: 'Transfer Rules',
      lessons: [
        // -------- LESSON 1 --------
        {
          id: 1,
          title: 'Transfer to Restricted Countries (Section 16)',
          duration: '20 min',
          type: 'video',
          description:
            'Understand the central rule governing international transfers of personal data under DPDPA Section 16, the negative-list approach, and the role of the Central Government in notifying restricted countries.',
          content:
            'Section 16 of the DPDPA 2023 is the keystone provision for cross-border data movement. Unlike the EU GDPR, which permits transfers only to "adequate" jurisdictions, the DPDPA permits transfer to every country except those specifically blacklisted by the Central Government. This lesson unpacks the legislative text, the policy intent, the practical implications for Indian businesses, and the unresolved questions that the Rules will need to clarify.',
          learningObjectives: [
            'Recite and interpret Section 16 of the DPDPA 2023',
            'Distinguish the blacklist model from the whitelist / adequacy model',
            'Identify the conditions under which transfers may be restricted',
            'Apply Section 16 to common transfer scenarios (cloud, BPO, SaaS)',
            'Recognise the procedural role of the Central Government notifications',
          ],
          keyTakeaways: [
            'Section 16 permits transfer of personal data outside India to any country EXCEPT those notified by the Central Government as restricted.',
            'The condition is that the transfer must be for personal data of an Indian Data Principal and processed in a manner not restricted by notification.',
            'As of the Act\'s commencement, no country has yet been notified as restricted, creating temporary operational freedom.',
            'The blacklist approach gives Indian businesses greater flexibility than the GDPR adequacy model but requires ongoing monitoring of Government notifications.',
            'Transfers must still comply with all other DPDPA obligations — consent, purpose limitation, security safeguards under Section 8, and breach notification under Section 8(6).',
          ],
          sections: [
            {
              id: 'sec-1',
              title: 'The Text of Section 16',
              content: [
                {
                  type: 'paragraph',
                  content:
                    'Section 16 of the Digital Personal Data Protection Act 2023 reads, in substance: the Data Fiduciary may transfer personal data outside India to any country or territory outside India, except to such countries or territories as may be notified by the Central Government; provided that such transfer is subject to such terms and conditions as may be specified by notification. This single sentence replaces the elaborate adequacy regime of the EU GDPR with a simple, negative-list approach.',
                },
                {
                  type: 'callout',
                  content:
                    'Section 16 is a permissive provision. The default rule is "transfer is allowed" — restriction is the exception, not the rule. The burden falls on the Government to justify blacklisting a country, not on the Data Fiduciary to prove the destination is adequate.',
                  calloutType: 'important',
                },
                {
                  type: 'heading',
                  content: 'Two Limbs of Section 16',
                },
                {
                  type: 'paragraph',
                  content:
                    'The provision operates on two limbs. The first limb is the country restriction — transfers to notified countries are prohibited. The second limb is the terms-and-conditions limb — even for permitted transfers, the Government may impose conditions such as security standards, contractual clauses, audit requirements, or reporting obligations. Data Fiduciaries must therefore monitor both lists: the blacklist of restricted countries and the conditions attached to permitted transfers.',
                },
                {
                  type: 'paragraph',
                  content:
                    'Crucially, Section 16 does not require a DPDPA-specific transfer mechanism (no DPDPA SCCs in the GDPR sense). However, the contractual and security obligations under Sections 8 and 7 continue to apply extraterritorially to the foreign recipient through the Data Fiduciary\'s accountability.',
                },
              ],
            },
            {
              id: 'sec-2',
              title: 'The Blacklist Policy Choice',
              content: [
                {
                  type: 'paragraph',
                  content:
                    'India\'s decision to adopt a blacklist rather than a whitelist reflects three policy considerations. First, India\'s IT and BPO industry is heavily export-oriented — restricting outbound transfers would damage a USD 250 billion services sector. Second, a country-by-country adequacy assessment (as in the EU) is administratively expensive and slow. Third, the blacklist preserves regulatory flexibility — the Government can react quickly to changing geopolitical conditions without amending primary legislation.',
                },
                {
                  type: 'heading',
                  content: 'What the Blacklist Does NOT Mean',
                },
                {
                  type: 'paragraph',
                  content:
                    'A common misreading is that because the default is "allowed", there are no compliance requirements. This is wrong. Transfers outside India still require (a) valid consent of the Data Principal or another lawful basis under Section 7, (b) compliance with Section 8 general obligations including reasonable security safeguards, (c) a lawful contract with the recipient Data Processor under Section 8(3), and (d) compliance with any sectoral localisation mandates (RBI, IRDAI, SEBI, health) which may override Section 16.',
                },
                {
                  type: 'example',
                  content:
                    'A Bangalore-based fintech stores customer KYC data on AWS infrastructure in Singapore. Section 16 permits the transfer (Singapore is not blacklisted). However, the RBI Storage of Payment System Data Circular (April 2018) requires end-to-end payment data to be stored only in India. The localisation rule overrides Section 16 — the data must be repatriated to an India-based AWS region (e.g., ap-south-1 Mumbai) regardless of Singapore\'s permitted status.',
                },
                {
                  type: 'table',
                  headers: ['Aspect', 'DPDPA Section 16', 'GDPR Article 44–49'],
                  rows: [
                    ['Default rule', 'Transfer permitted', 'Transfer prohibited'],
                    ['Restriction mechanism', 'Government blacklist', 'Adequacy whitelist'],
                    ['Burden on Data Fiduciary', 'Monitor blacklist', 'Prove adequacy or use SCCs / BCRs'],
                    ['Flexibility', 'High — Government notification', 'Low — requires Commission decision'],
                    ['Industry impact', 'Pro-services export', 'Pro-European data control'],
                    ['Specific transfer mechanisms', 'None specified', 'SCCs, BCRs, derogations'],
                  ],
                },
              ],
            },
            {
              id: 'sec-3',
              title: 'The Notification Power and Procedural Safeguards',
              content: [
                {
                  type: 'paragraph',
                  content:
                    'The Central Government exercises the notification power under Section 16 in consultation with MeitY and the Data Protection Board of India. Notifications are expected to be published in the Official Gazette and on the MeitY website. Each notification is likely to specify: (a) the country or territory restricted, (b) the types of personal data covered (e.g., all data, or only children\'s data, or only sensitive financial data), (c) the reasons for restriction (national security, inadequate protection, reciprocal restrictions on Indian data), and (d) transitional periods for compliance.',
                },
                {
                  type: 'heading',
                  content: 'Triggers for Blacklisting',
                },
                {
                  type: 'list',
                  content: 'Likely triggers for a Section 16 notification',
                  items: [
                    'Inadequate data protection laws in the destination country',
                    'Reciprocal restrictions imposed on Indian data or Indian companies',
                    'National security concerns, especially for government or critical infrastructure data',
                    'History of surveillance overreach or government access without due process',
                    'Failure to provide effective remedies to Indian Data Principals',
                  ],
                },
                {
                  type: 'callout',
                  content:
                    'Until a country is formally notified as restricted, transfers to that country are lawful under Section 16. However, conservative organisations should conduct Transfer Impact Assessments (TIAs) for high-risk destinations — anticipating that the blacklist will grow over time.',
                  calloutType: 'tip',
                },
                {
                  type: 'paragraph',
                  content:
                    'Once a country is notified, Data Fiduciaries must cease new transfers immediately and execute transition plans for existing data — typically a defined period such as 6 to 12 months — to repatriate, delete, or pseudonymise the data. Failure to comply attracts penalties under Section 33 — up to ₹250 crore for breach of cross-border transfer obligations.',
                },
              ],
            },
            {
              id: 'sec-4',
              title: 'Practical Compliance Steps for Section 16',
              content: [
                {
                  type: 'paragraph',
                  content:
                    'A practical Section 16 compliance programme has four pillars: (1) inventory, (2) monitoring, (3) contractual safeguards, and (4) contingency planning. Each pillar must be owned by a named function — typically the DPO working with the IT and procurement teams.',
                },
                {
                  type: 'heading',
                  content: 'The Four Pillars',
                },
                {
                  type: 'list',
                  content: 'Four-pillar Section 16 compliance programme',
                  items: [
                    'Inventory: Maintain a Cross-Border Transfer Register listing every country where personal data is stored, processed, or accessed, with volume estimates and lawful basis.',
                    'Monitoring: Subscribe to MeitY notifications and Data Protection Board communications; review the blacklist monthly; assign a named owner to track changes.',
                    'Contractual Safeguards: Embed repatriation, deletion, and audit rights in every international DPA so data can be recalled within 30 days if a country is blacklisted.',
                    'Contingency Planning: Pre-identify alternative jurisdictions or in-country hosting (e.g., AWS Mumbai, Azure Pune, GCP Mumbai) for rapid repatriation.',
                  ],
                },
                {
                  type: 'example',
                  content:
                    'An Indian e-commerce company uses Zendesk (customer support data hosted in the United States) and Stripe (payment data with global replication). The DPO maintains a register showing: Zendesk — US — customer service records (consent basis, 4 lakh records); Stripe — US and Ireland — tokenised payment data (RBI-compliant since raw card data is not stored outside India). If the US were blacklisted, Zendesk data would need to move to a regional instance (e.g., AWS Singapore) within 30 days; Stripe would need verification that PCI tokenisation satisfies Section 16.',
                },
              ],
            },
          ],
          glossary: [
            { term: 'Blacklist Approach', definition: 'A regulatory model where transfers are permitted to all destinations except those specifically prohibited by notification.' },
            { term: 'Cross-Border Transfer Register', definition: 'An internal record maintained by a Data Fiduciary listing all countries where personal data is stored, processed, or accessed, with the legal basis and volume for each.' },
            { term: 'Notification', definition: 'A formal Government gazette publication exercising a power under the DPDPA, such as restricting transfers to a specified country.' },
            { term: 'Transfer Impact Assessment (TIA)', definition: 'A documented analysis of whether a destination country\'s legal regime provides effective protection for the personal data being transferred.' },
          ],
          references: [
            { title: 'Digital Personal Data Protection Act 2023, Section 16', source: 'Government of India', year: '2023' },
            { title: 'MeitY Explanatory Note on DPDPA Cross-Border Transfers', source: 'Ministry of Electronics and IT', year: '2023' },
            { title: 'Comparison of Cross-Border Transfer Regimes (DPDPA vs GDPR)', source: 'IAPP India Dashboard', year: '2024' },
          ],
        },

        // -------- LESSON 2 --------
        {
          id: 2,
          title: 'Cloud Storage and Section 16',
          duration: '18 min',
          type: 'reading',
          description:
            'How Section 16 applies to cloud storage — multi-region replication, latency-driven edge deployments, and the practical challenge of knowing where personal data actually resides.',
          content:
            'Cloud storage is the single most common cross-border transfer scenario. Modern cloud platforms replicate data across multiple regions for resilience and performance, often without the customer knowing which regions are involved. This lesson addresses how Section 16 interacts with multi-region cloud architectures, what "data residency" controls the major clouds offer, and how to design cloud deployments that remain compliant as the blacklist evolves.',
          learningObjectives: [
            'Map personal data flows in major cloud platforms (AWS, Azure, GCP)',
            'Configure data residency controls to enforce India-only storage',
            'Distinguish between storage location, processing location, and access location',
            'Design cloud architectures that remain Section 16 compliant',
          ],
          keyTakeaways: [
            'Cloud storage location is governed by the region selected at deployment, but replication, backups, and CDN edge caches may create additional transfer points.',
            'AWS, Azure and GCP all offer data residency controls — but they must be explicitly configured and verified.',
            'Section 16 applies to "processing" not just storage — meaning a database query run by a remote engineer in another country may itself be a transfer.',
            'RBI and sectoral localisation rules override cloud-region flexibility for payment, insurance and securities data.',
            'Encrypting data in transit and at rest is necessary but does not change the cross-border transfer analysis.',
          ],
          sections: [
            {
              id: 'sec-1',
              title: 'The Three Layers of Cloud Location',
              content: [
                {
                  type: 'paragraph',
                  content:
                    'When an Indian Data Fiduciary uses a public cloud, three different "locations" come into play and all three are relevant under Section 16. First is the storage location — where the data physically rests (e.g., an AWS data centre in Virginia, US). Second is the processing location — where compute happens, which may differ from storage when using serverless functions, global load balancers, or edge compute. Third is the access location — the geographic location of administrators, support engineers, or third-party vendors who can read the data.',
                },
                {
                  type: 'heading',
                  content: 'Why Each Layer Matters',
                },
                {
                  type: 'paragraph',
                  content:
                    'Storage location matters because that is where personal data is "transferred to" under Section 16. Processing location matters because processing also involves the data being present in that jurisdiction. Access location matters because a remote administrator reading data is itself a transfer — the data is being "made available" to a person in another jurisdiction, even if the storage never moves.',
                },
                {
                  type: 'callout',
                  content:
                    'A common mistake: assuming that "data at rest in Mumbai is enough". If a US-based DevOps engineer SSHs into the Mumbai database, that access is itself a cross-border transfer under Section 16.',
                  calloutType: 'warning',
                },
              ],
            },
            {
              id: 'sec-2',
              title: 'Data Residency Controls in Major Clouds',
              content: [
                {
                  type: 'paragraph',
                  content:
                    'Each major cloud platform offers data residency controls. These must be configured explicitly — the default is often global replication. The table below summarises the key controls:',
                },
                {
                  type: 'table',
                  headers: ['Cloud Provider', 'India Region(s)', 'Key Residency Control', 'Limitation'],
                  rows: [
                    ['AWS', 'ap-south-1 (Mumbai), ap-south-2 (Hyderabad)', 'Bucket region selection; SCP with aws:RequestedRegion condition', 'Backups, CloudTrail logs, SNS may default to other regions'],
                    ['Microsoft Azure', 'Central India (Pune), South India (Chennai), West India (Mumbai)', 'Azure Policy "Allowed Locations"; Geo-replication toggle off', 'Azure AD / Microsoft 365 metadata may still be global'],
                    ['Google Cloud Platform', 'asia-south1 (Mumbai), asia-south2 (Delhi)', 'Organisation Policy "Resource Location Restriction"', 'BigQuery multi-region datasets must be avoided'],
                    ['Oracle Cloud', 'Mumbai (ap-mumbai-1)', 'Compartment-level region restriction', 'Limited PaaS service coverage in India region'],
                    ['IBM Cloud', 'Chennai (eu-de mirrored); Hyderabad', 'Compliance profile for India', 'Some services only available in US regions'],
                  ],
                },
                {
                  type: 'paragraph',
                  content:
                    'Configuring these controls is not a one-time activity. Cloud providers regularly add new services, and certain PaaS offerings (e.g., AI/ML training pipelines) may only be available in US or EU regions. Each new service adoption must trigger a Section 16 review.',
                },
                {
                  type: 'example',
                  content:
                    'A Delhi fintech uses AWS S3 buckets in ap-south-1 Mumbai for customer KYC documents. They enable Cross-Region Replication (CRR) to ap-south-2 Hyderabad for disaster recovery. This is compliant — both regions are in India. However, their AWS CloudTrail audit logs are configured to us-east-1 Virginia. CloudTrail logs contain user activity metadata including names and email addresses of IAM users — this is personal data and constitutes a cross-border transfer to the US. The fix: configure a CloudTrail trail pointing to an ap-south-1 S3 bucket.',
                },
              ],
            },
            {
              id: 'sec-3',
              title: 'Edge Compute, CDNs and the Latency Trade-off',
              content: [
                {
                  type: 'paragraph',
                  content:
                    'Content Delivery Networks (CDNs) like Cloudflare, Akamai and AWS CloudFront cache content at edge locations worldwide to reduce latency. When personal data passes through a CDN edge node in, say, Singapore or the United States, that constitutes a transfer under Section 16 — even if it is transient caching. The same logic applies to serverless edge compute platforms (Cloudflare Workers, Lambda@Edge).',
                },
                {
                  type: 'heading',
                  content: 'Designing for Low Latency Without Breaching Section 16',
                },
                {
                  type: 'list',
                  content: 'Strategies for low-latency delivery without cross-border transfer',
                  items: [
                    'Use India-edge-only PoPs (Cloudflare, Akamai and AWS all have Mumbai, Chennai, Delhi, Bengaluru edge locations).',
                    'Configure signed URLs and short TTLs so cached personal data is purged quickly (e.g., 60 seconds).',
                    'For dynamic content, use origin shielding in an India region rather than direct edge access.',
                    'Avoid embedding personal data in URLs that may appear in CDN access logs stored globally.',
                    'For serverless edge compute, restrict deployment to India edge regions only.',
                  ],
                },
                {
                  type: 'callout',
                  content:
                    'If a CDN caches personal data in a blacklisted country even transiently, the Data Fiduciary is responsible. Cache-control headers and CDN configuration must explicitly restrict edge locations to India where personal data is involved.',
                  calloutType: 'warning',
                },
              ],
            },
            {
              id: 'sec-4',
              title: 'Backup, Disaster Recovery and Archive',
              content: [
                {
                  type: 'paragraph',
                  content:
                    'Backup and DR are frequently-overlooked transfer vectors. Cross-region backups are a best practice for resilience — but if the backup region is outside India, Section 16 applies. For critical Indian businesses, the recommended pattern is "in-country dual-region" — primary in Mumbai, DR in Hyderabad or Pune, and offline tape backups in a third Indian facility.',
                },
                {
                  type: 'paragraph',
                  content:
                    'Long-term archive storage (e.g., AWS Glacier Deep Archive) is often the cheapest tier — but Glacier in us-east-1 costs less than Glacier in ap-south-1. The cost saving is illusory if it triggers a transfer impact assessment and contractual safeguards for US storage. Build the full lifecycle cost, including compliance overhead, when choosing archive regions.',
                },
                {
                  type: 'example',
                  content:
                    'A Mumbai hospital stores patient health records in AWS S3 ap-south-1 with encryption using customer-managed KMS keys. Nightly snapshots go to ap-south-2 (Hyderabad) for DR. Quarterly archives are written to AWS Glacier Deep Archive in ap-south-1. Annual long-term archives are written to physical tape stored in an Iron Mountain facility in Mumbai. No personal data leaves India. This satisfies Section 16 proactively — even if the US were blacklisted tomorrow, no remediation is needed.',
                },
              ],
            },
          ],
          glossary: [
            { term: 'Data Residency', definition: 'A cloud configuration that constrains where personal data is physically stored and processed, typically to specific geographic regions.' },
            { term: 'Edge Compute', definition: 'A computing architecture that runs workloads at CDN edge locations close to end-users for low latency, creating potential cross-border transfer issues.' },
            { term: 'Origin Shielding', definition: 'A CDN configuration that funnels all edge requests through a designated origin region, simplifying residency controls.' },
            { term: 'Cross-Region Replication (CRR)', definition: 'A storage feature that automatically copies data between cloud regions for resilience; must be configured within India regions to avoid cross-border transfer.' },
          ],
          references: [
            { title: 'AWS Data Residency Whitepaper', source: 'Amazon Web Services', year: '2024' },
            { title: 'Azure Data Residency and Compliance', source: 'Microsoft', year: '2024' },
            { title: 'GCP Resource Location Restriction Documentation', source: 'Google Cloud', year: '2024' },
          ],
        },

        // -------- LESSON 3 --------
        {
          id: 3,
          title: 'International Vendors and Processor Oversight',
          duration: '20 min',
          type: 'video',
          description:
            'How to manage cross-border transfers to international vendors acting as Data Processors — Salesforce, HubSpot, Zendesk, Workday, ServiceNow — including contracting, audit rights, and the Section 8(3) chain of accountability.',
          content:
            'Most Indian businesses use at least one international SaaS vendor that processes personal data outside India — Salesforce (US), HubSpot (US), Zendesk (US/EU), Workday (US), ServiceNow (US). Each such engagement is a cross-border transfer under Section 16. This lesson covers the contractual, technical and oversight requirements imposed by Sections 7, 8(3) and 16 when engaging international Data Processors.',
          learningObjectives: [
            'Identify the Section 8(3) requirements for engaging a Data Processor',
            'Draft international DPA clauses that satisfy both DPDPA and sectoral rules',
            'Conduct due diligence on international SaaS vendors',
            'Build an ongoing vendor oversight programme',
          ],
          keyTakeaways: [
            'Section 8(3) requires a written contract with every Data Processor, Indian or foreign, that imposes obligations equivalent to the Data Fiduciary\'s own.',
            'International vendors typically offer DPDPA addenda now; review them carefully for gaps against the full Section 8 obligations.',
            'Sub-processors create additional transfer points — require prior consent and a public sub-processor list.',
            'Audit rights under Section 8(3) are non-negotiable; ensure your contract includes them.',
            'Vendor concentration risk: if a single US SaaS vendor goes down or is blacklisted, the entire business may stall — diversify critical vendors.',
          ],
          sections: [
            {
              id: 'sec-1',
              title: 'The Section 8(3) Triad',
              content: [
                {
                  type: 'paragraph',
                  content:
                    'Section 8(3) of the DPDPA requires every Data Fiduciary to be liable for the conduct of its Data Processors when engaging them to process personal data on its behalf. This means: (a) the contract must be in writing, (b) the Processor must process only on the documented instructions of the Data Fiduciary, and (c) the Data Fiduciary remains liable for any breach caused by the Processor. The triad creates a chain of accountability that extends extraterritorially when the Processor is foreign.',
                },
                {
                  type: 'callout',
                  content:
                    'Section 8(3) makes the Data Fiduciary strictly liable for the Processor\'s breach. This is unlike the GDPR, which allows some pass-through of liability. Under DPDPA, the Data Principal sues the Data Fiduciary, who then seeks indemnity from the Processor.',
                  calloutType: 'important',
                },
              ],
            },
            {
              id: 'sec-2',
              title: 'Mandatory DPA Clauses for International Vendors',
              content: [
                {
                  type: 'paragraph',
                  content:
                    'The Data Processing Agreement (DPA) with an international vendor must contain specific clauses to satisfy Section 8(3) and Section 16. The following checklist covers the minimum required clauses; many vendors will resist some of these — negotiation is required.',
                },
                {
                  type: 'table',
                  headers: ['Clause', 'Purpose', 'Typical Vendor Pushback'],
                  rows: [
                    ['Subject matter, duration, nature and purpose of processing', 'Section 8(3) transparency', 'Standard — minimal pushback'],
                    ['Type of personal data and categories of Data Principals', 'Section 8(3) scope', 'Standard'],
                    ['Processor obligations equivalent to Fiduciary\'s', 'Section 8(3) equivalence', 'Some pushback on security specifics'],
                    ['Processor may not engage sub-processor without prior authorisation', 'Sub-processor chain', 'Strong pushback — vendors prefer notice-only'],
                    ['Processing only on documented instructions', 'Fiduciary control', 'Standard'],
                    ['Reasonable security safeguards (ISO 27001, SOC 2)', 'Section 8(5)', 'Standard — cert copies requested'],
                    ['Breach notification within 72 hours', 'Section 8(6) alignment', 'Vendors typically offer 48–72 hours'],
                    ['Assistance with Data Principal rights requests', 'Section 11 alignment', 'Standard'],
                    ['Deletion or return of data on termination', 'Section 8(7)', 'Some pushback on retention for security logs'],
                    ['Audit rights — on-site or remote', 'Section 8(3) accountability', 'Strong pushback — vendors prefer SOC 2 reports'],
                    ['Data residency commitment — India-only storage', 'Section 16 + sectoral rules', 'Strong pushback — extra cost for India region'],
                    ['Repatriation right within 30 days on Government notification', 'Section 16 contingency', 'Strong pushback — vendors prefer "best efforts"'],
                  ],
                },
              ],
            },
            {
              id: 'sec-3',
              title: 'Vendor Due Diligence Framework',
              content: [
                {
                  type: 'paragraph',
                  content:
                    'Vendor due diligence for international processors should follow a structured framework. The framework below, adapted from the IAPP and NIST 800-161 (Supply Chain Risk Management), covers five dimensions: legal, technical, operational, financial and geopolitical.',
                },
                {
                  type: 'heading',
                  content: 'Five Dimensions of Vendor Due Diligence',
                },
                {
                  type: 'list',
                  content: 'Vendor due diligence framework',
                  items: [
                    'Legal: Certifications (ISO 27001, ISO 27701, SOC 2 Type II), breach history, litigation involving personal data, regulator actions (FTC, ICO, CNIL), DPDPA readiness statement.',
                    'Technical: Encryption standards (AES-256 at rest, TLS 1.2+ in transit), KMS / HSM use, key management, access controls (MFA, RBAC), logging (SIEM, SOC), vulnerability management.',
                    'Operational: Incident response plan, breach notification SLA, disaster recovery, business continuity, SLAs and historical uptime, support response time.',
                    'Financial: Stability of the vendor, funding runway (for startups), ownership structure, jurisdiction of incorporation, jurisdiction of data hosting.',
                    'Geopolitical: Government access risk (CLOUD Act, FISA, surveillance law), sanctions exposure, relations with India, regional stability.',
                  ],
                },
                {
                  type: 'callout',
                  content:
                    'The US CLOUD Act allows US law enforcement to compel US-based cloud providers to produce data stored abroad. This creates a tension with the DPDPA\'s restrictions on Government access. Document this tension in your transfer impact assessment.',
                  calloutType: 'warning',
                },
              ],
            },
            {
              id: 'sec-4',
              title: 'Ongoing Oversight and the Vendor Register',
              content: [
                {
                  type: 'paragraph',
                  content:
                    'Due diligence is not a one-time activity. Maintain a Vendor Register with the following fields, reviewed quarterly: vendor name, jurisdiction of hosting, sub-processor list, DPA execution date, certification expiry dates, last audit date, next audit date, breach history, volume of personal data, criticality to business, alternative vendor identified.',
                },
                {
                  type: 'heading',
                  content: 'Annual Vendor Review Cadence',
                },
                {
                  type: 'paragraph',
                  content:
                    'An annual review is the minimum. For critical vendors (Tier 1 — those whose failure would materially affect the business or whose breach would affect more than 1 lakh Data Principals), a semi-annual review is recommended. For Tier 2 vendors, annual; for Tier 3, biennial. The review should re-confirm certifications, re-check sub-processor lists, and assess any change in the vendor\'s data residency commitments.',
                },
                {
                  type: 'example',
                  content:
                    'A Pune-based SaaS company uses Salesforce (US), Stripe (US), Zendesk (EU), Workday (US) and AWS (multi-region). The DPO maintains a Vendor Register classifying Salesforce and Workday as Tier 1 (high volume, business-critical), Stripe and Zendesk as Tier 2, and AWS as Tier 1 (infrastructure-critical). Each Tier 1 vendor undergoes semi-annual review; each Tier 2 annual; AWS quarterly because of the breadth of services consumed.',
                },
              ],
            },
          ],
          glossary: [
            { term: 'Data Processing Agreement (DPA)', definition: 'A written contract between a Data Fiduciary and a Data Processor required by Section 8(3), setting out the terms on which the Processor may process personal data.' },
            { term: 'Sub-processor', definition: 'A third party engaged by a Data Processor to process personal data on its behalf, creating an additional transfer point requiring authorisation.' },
            { term: 'Vendor Concentration Risk', definition: 'The risk that excessive reliance on a single vendor creates systemic exposure if that vendor fails or becomes non-compliant.' },
            { term: 'CLOUD Act', definition: 'The US Clarifying Lawful Overseas Use of Data Act 2018, allowing US law enforcement to compel production of data held by US-based cloud providers regardless of where the data is stored.' },
          ],
          references: [
            { title: 'DPDPA Section 8(3) — Processor Liability', source: 'Government of India', year: '2023' },
            { title: 'NIST SP 800-161 Supply Chain Risk Management', source: 'National Institute of Standards and Technology', year: '2022' },
            { title: 'IAPP Vendor Management Toolkit', source: 'International Association of Privacy Professionals', year: '2024' },
          ],
        },

        // -------- LESSON 4 --------
        {
          id: 4,
          title: 'Section 16 Analysis: Blacklist vs Whitelist Approaches',
          duration: '22 min',
          type: 'reading',
          description:
            'A deep comparative analysis of blacklist (DPDPA), whitelist (GDPR adequacy) and hybrid (China PIPL) approaches to international data transfer regulation, with implications for Indian businesses operating globally.',
          content:
            'Different jurisdictions have chosen different regulatory architectures for cross-border data transfer. The DPDPA chose a blacklist; the GDPR chose a whitelist; China\'s PIPL chose a hybrid; Russia chose strict in-country storage. This lesson analyses each approach, their strengths and weaknesses, and what this means for Indian businesses that operate under multiple regimes simultaneously.',
          learningObjectives: [
            'Articulate the policy logic behind blacklist, whitelist and hybrid approaches',
            'Compare the DPDPA, GDPR, PIPL and Russian approaches on common parameters',
            'Identify the compliance obligations when operating under multiple regimes',
            'Apply the most restrictive rule principle in cross-jurisdictional transfers',
          ],
          keyTakeaways: [
            'Blacklist (DPDPA) is permissive and industry-friendly but creates regulatory uncertainty about future notifications.',
            'Whitelist (GDPR adequacy) is restrictive but provides predictability once an adequacy decision is made.',
            'Hybrid (China PIPL) requires security assessment for large transfers, certification for smaller ones, and standard contract for the rest.',
            'When multiple regimes apply, the most restrictive rule typically prevails — plan for the strictest applicable regime.',
            'India\'s blacklist approach is the most flexible of the major data protection regimes, which is a competitive advantage for India\'s IT and BPO exports.',
          ],
          sections: [
            {
              id: 'sec-1',
              title: 'The Three Regulatory Architectures',
              content: [
                {
                  type: 'paragraph',
                  content:
                    'A blacklist approach permits transfers to all countries except those specifically prohibited. A whitelist approach prohibits transfers except to countries specifically permitted. A hybrid approach uses different mechanisms depending on data type, volume, or sensitivity. Each architecture reflects deeper policy choices about the role of data protection law in the economy.',
                },
                {
                  type: 'table',
                  headers: ['Approach', 'Example Jurisdictions', 'Default Rule', 'Compliance Burden', 'Flexibility'],
                  rows: [
                    ['Blacklist', 'India (DPDPA), Singapore (PDPA), US sectoral', 'Permitted', 'Low — monitor blacklist', 'High'],
                    ['Whitelist / Adequacy', 'EU (GDPR), UK (UK GDPR), Switzerland', 'Prohibited', 'High — prove adequacy or use SCCs / BCRs', 'Low'],
                    ['Hybrid', 'China (PIPL), South Korea (PIPA)', 'Conditional', 'Medium — depends on transfer type', 'Medium'],
                    ['Strict in-country', 'Russia (152-FZ as amended 2022), Indonesia (PDP Law 2022)', 'Generally prohibited', 'Very high — localisation', 'Very low'],
                  ],
                },
                {
                  type: 'callout',
                  content:
                    'India\'s choice of the blacklist approach is widely seen as a strategic decision to support the USD 250 billion Indian IT-BPM industry, which depends on cross-border data movement for delivery of services.',
                  calloutType: 'note',
                },
              ],
            },
            {
              id: 'sec-2',
              title: 'Comparative Analysis: DPDPA vs GDPR',
              content: [
                {
                  type: 'paragraph',
                  content:
                    'The DPDPA and GDPR take diametrically opposite approaches. This has practical implications for Indian businesses operating in both markets. An Indian company processing EU residents\' data must comply with GDPR adequacy rules (use SCCs, conduct TIAs, possibly face Schrems II challenges) — even though the same data, if it belonged to Indian residents, could be transferred freely under DPDPA Section 16.',
                },
                {
                  type: 'heading',
                  content: 'Key Operational Differences',
                },
                {
                  type: 'list',
                  content: 'Operational differences between DPDPA and GDPR for cross-border transfers',
                  items: [
                    'Trigger: DPDPA triggers when data leaves India; GDPR triggers when data leaves the EEA (wider territorial scope).',
                    'Mechanism: DPDPA has no equivalent of GDPR SCCs — only contractual obligations under Section 8(3).',
                    'Transfer Impact Assessment: Required under GDPR post-Schrems II; recommended but not mandatory under DPDPA.',
                    'Government access assessment: A Schrems II requirement under GDPR; not explicitly required under DPDPA but prudent practice.',
                    'Localisation override: DPDPA Section 16 yields to sectoral localisation (RBI, IRDAI); GDPR yields to Member State national security derogations.',
                    'Sub-processor onward transfer: GDPR requires Article 28 onward transfer clauses; DPDPA Section 8(3) requires equivalent contractual protection.',
                    'Penalty for breach: DPDPA up to ₹250 crore (Section 33); GDPR up to 4% of global annual turnover.',
                  ],
                },
                {
                  type: 'example',
                  content:
                    'An Indian BPO serving a German bank holds personal data of German customers. It must: (1) Comply with DPDPA for its own Indian operations (Section 16 — fine); (2) Comply with GDPR Article 44–49 for transfer to India — use EU SCCs and conduct a Transfer Impact Assessment for India; (3) Comply with German banking secrecy laws which may further restrict transfer; (4) Comply with RBI rules only if it also processes Indian payment data. The most restrictive rule (GDPR SCCs) governs.',
                },
              ],
            },
            {
              id: 'sec-3',
              title: 'The China PIPL Hybrid Model',
              content: [
                {
                  type: 'paragraph',
                  content:
                    'China\'s Personal Information Protection Law (PIPL), effective 1 November 2021, takes a hybrid approach. Article 38 of PIPL provides three pathways: (a) security assessment by the Cyberspace Administration of China (CAC) for transfers above volume thresholds or involving critical information infrastructure operators, (b) certification by a CAC-recognised body for smaller transfers, and (c) standard contract filed with the CAC for routine transfers. This is more onerous than the DPDPA blacklist and roughly comparable to GDPR SCCs in practice.',
                },
                {
                  type: 'heading',
                  content: 'Implications for Indian Companies Doing Business with China',
                },
                {
                  type: 'paragraph',
                  content:
                    'Indian companies transferring personal data to China must comply with PIPL — typically by signing the CAC standard contract and filing it with the CAC. The reverse direction (China to India) is also governed by PIPL Article 38 — Chinese entities transferring personal data of Chinese citizens to Indian processors must complete a CAC security assessment if thresholds are met. This adds 2–6 months of lead time to China-India data flows.',
                },
                {
                  type: 'callout',
                  content:
                    'India and China do not have a bilateral data protection arrangement. Transfers in either direction require the parties to navigate PIPL (for Chinese data) or DPDPA Section 16 (for Indian data) independently.',
                  calloutType: 'note',
                },
              ],
            },
            {
              id: 'sec-4',
              title: 'Strategic Implications for Indian Businesses',
              content: [
                {
                  type: 'paragraph',
                  content:
                    'India\'s blacklist approach creates both opportunities and risks. The opportunity: Indian companies can offer "global data residency" services, multi-region cloud architectures, and BPO services without the friction of EU adequacy requirements (for non-EU data). The risk: if the Government begins notifying restrictions aggressively, businesses built on the assumption of free outbound flow could face disruption.',
                },
                {
                  type: 'heading',
                  content: 'Strategic Recommendations',
                },
                {
                  type: 'list',
                  content: 'Strategic recommendations for Indian businesses',
                  items: [
                    'Adopt a "compliance ceiling" approach: design systems to meet the strictest applicable regime (typically GDPR for European customers) so that DPDPA Section 16 is automatically satisfied.',
                    'Maintain multi-region capability: cloud architecture should support rapid relocation between India and other regions, in case of future blacklisting.',
                    'Track Government notifications monthly: assign a named owner (typically the DPO) to monitor MeitY and the Data Protection Board of India.',
                    'Build geopolitical awareness: US (CLOUD Act), China (PIPL), Russia (data localisation) each have specific risks — incorporate into transfer impact assessments.',
                    'Engage in industry consultations: provide inputs to MeitY when notifications are being considered, to ensure business impact is considered.',
                  ],
                },
                {
                  type: 'example',
                  content:
                    'A Chennai-based SaaS company sells to customers in 30 countries. Its architecture: data residency options for EU customers (Frankfurt region with SCCs), US customers (Virginia region with DPDPA-compliant DPA), Indian customers (Mumbai region with RBI localisation). The compliance ceiling is GDPR for EU customers; once GDPR compliance is achieved, DPDPA compliance for the same data flows is automatic. This "design for the strictest" approach minimises the incremental compliance burden.',
                },
              ],
            },
          ],
          glossary: [
            { term: 'Blacklist Approach', definition: 'A regulatory model permitting transfers to all countries except those specifically notified as restricted (e.g., DPDPA Section 16).' },
            { term: 'Whitelist Approach', definition: 'A regulatory model prohibiting transfers except to countries specifically approved as adequate (e.g., GDPR Article 45).' },
            { term: 'Adequacy Decision', definition: 'A formal decision by the European Commission that a third country provides an essentially equivalent level of personal data protection to the EU.' },
            { term: 'Standard Contractual Clauses (SCCs)', definition: 'Pre-approved contractual terms issued by the European Commission for transferring personal data to third countries without an adequacy decision.' },
            { term: 'Compliance Ceiling', definition: 'A strategic approach of designing data systems to meet the strictest applicable regulatory regime, so that compliance with less strict regimes is automatic.' },
          ],
          references: [
            { title: 'DPDPA 2023 Section 16 — Cross-Border Transfers', source: 'Government of India', year: '2023' },
            { title: 'GDPR Articles 44–49 — Transfers', source: 'European Union', year: '2016' },
            { title: 'PIPL Article 38 — Cross-Border Transfer Mechanisms', source: 'Standing Committee of the National People\'s Congress of China', year: '2021' },
            { title: 'Schrems II Judgment (Case C-311/18)', source: 'Court of Justice of the European Union', year: '2020' },
          ],
        },

        // -------- LESSON 5 --------
        {
          id: 5,
          title: 'Comparison with GDPR Adequacy Model',
          duration: '20 min',
          type: 'reading',
          description:
            'A focused comparison of the GDPR adequacy regime — including the Schrems II judgment, EU SCCs, and Binding Corporate Rules — with the DPDPA blacklist approach.',
          content:
            'The EU GDPR adequacy model is the most developed cross-border transfer regime in the world, with over 15 adequacy decisions in force (Andorra, Argentina, Canada, Faroe Islands, Guernsey, Israel, Isle of Man, Japan, Jersey, New Zealand, Republic of Korea, Switzerland, Uruguay, UK, United States (for commercial organisations under the Data Privacy Framework)). Understanding how this regime operates is essential for Indian businesses serving EU customers and for Indian policymakers evaluating whether to pursue an EU adequacy decision in future.',
          learningObjectives: [
            'List the transfer mechanisms available under GDPR Articles 44–49',
            'Explain the impact of the Schrems II judgment on international transfers',
            'Identify the requirements of the EU Standard Contractual Clauses (2021)',
            'Compare Binding Corporate Rules with intra-group DPDPA transfers',
            'Assess the prospects for an EU adequacy decision for India',
          ],
          keyTakeaways: [
            'GDPR provides six transfer mechanisms: adequacy, appropriate safeguards (SCCs / BCRs), derogations, certification, codes of conduct, and binding corporate rules.',
            'Schrems II invalidated the EU-US Privacy Shield and required Transfer Impact Assessments for all transfers relying on SCCs.',
            'The 2021 EU SCCs replaced the 2010 SCCs and the 2001 Controller-to-Processor SCCs, providing a modular instrument for all transfer types.',
            'DPDPA Section 16 is simpler but lacks the legal certainty of an adequacy decision — India is unlikely to obtain an EU adequacy decision in the near term.',
            'For Indian companies processing EU personal data, SCCs are the standard mechanism — combined with a Transfer Impact Assessment and supplementary measures.',
          ],
          sections: [
            {
              id: 'sec-1',
              title: 'The Six GDPR Transfer Mechanisms',
              content: [
                {
                  type: 'paragraph',
                  content:
                    'Article 44 of the GDPR sets the general principle: any transfer to a third country must comply with the GDPR transfer regime. Articles 45–49 provide six specific mechanisms, in a hierarchy from most preferred to least.',
                },
                {
                  type: 'table',
                  headers: ['Mechanism', 'Article', 'Use Case', 'Effort'],
                  rows: [
                    ['Adequacy Decision', 'Art. 45', 'Transfers to a country with an EU adequacy decision', 'Low — no specific contract required'],
                    ['Standard Contractual Clauses', 'Art. 46(2)(c)', 'Routine transfers without adequacy', 'Medium — sign SCCs + TIA'],
                    ['Binding Corporate Rules', 'Art. 47', 'Intra-group transfers within multinational groups', 'High — requires DPA approval'],
                    ['Certification / Code of Conduct', 'Art. 46(2)(f)/(g)', 'Specific sectoral or processor transfers', 'Medium — depends on cert'],
                    ['Derogations', 'Art. 49', 'One-off, occasional, non-repetitive transfers', 'Low — but limited use'],
                    ['Implicit / explicit consent', 'Art. 49(1)(a)', 'When no other mechanism available', 'Low — but consent can be withdrawn'],
                  ],
                },
                {
                  type: 'callout',
                  content:
                    'Derogations under Article 49 are exceptional — they must not be used for repetitive, large-scale transfers. The European Data Protection Board has criticised "creative" use of derogations as a workaround.',
                  calloutType: 'warning',
                },
              ],
            },
            {
              id: 'sec-2',
              title: 'Schrems II and Transfer Impact Assessments',
              content: [
                {
                  type: 'paragraph',
                  content:
                    'The Schrems II judgment of 16 July 2020 (Case C-311/18) invalidated the EU-US Privacy Shield and held that transfers relying on SCCs require a case-by-case Transfer Impact Assessment (TIA). The TIA must assess whether the destination country\'s surveillance laws (e.g., FISA Section 702, EO 12333) undermine the protection guaranteed by the SCCs, and identify supplementary measures (e.g., encryption with EU-held keys, pseudonymisation) to bridge any gap.',
                },
                {
                  type: 'heading',
                  content: 'The Six-Step Schrems II TIA',
                },
                {
                  type: 'list',
                  content: 'Six-step Transfer Impact Assessment after Schrems II',
                  items: [
                    'Step 1: Identify the transfer — data, recipient, destination, purpose.',
                    'Step 2: Identify the transfer tool — SCCs, BCRs, or adequacy.',
                    'Step 3: Assess the destination country\'s surveillance and access laws (government access).',
                    'Step 4: Assess whether those laws undermine SCC guarantees.',
                    'Step 5: Identify supplementary measures — encryption, pseudonymisation, split processing, contract terms.',
                    'Step 6: Re-evaluate periodically — at least annually, or on material change.',
                  ],
                },
                {
                  type: 'example',
                  content:
                    'An Indian SaaS company transferring EU customer data to AWS Mumbai must: (1) sign the 2021 EU SCCs with AWS; (2) conduct a TIA for India — noting that India\'s surveillance regime (IT Act Section 69, Telegraph Act Section 5) allows Government access on certain grounds; (3) assess whether the Indian surveillance framework provides sufficient safeguards; (4) implement supplementary measures — e.g., encryption with EU-held customer-managed keys, so even if Indian Government compels AWS to produce data, it cannot read it without the customer\'s key.',
                },
              ],
            },
            {
              id: 'sec-3',
              title: 'The 2021 EU Standard Contractual Clauses',
              content: [
                {
                  type: 'paragraph',
                  content:
                    'The 2021 EU SCCs (Commission Implementing Decision 2021/914) replaced the 2010 SCCs and the 2001 Controller-to-Processor SCCs. They are modular — four modules covering controller-to-controller, controller-to-processor, processor-to-processor, and processor-to-controller transfers. They include mandatory docking clauses, sub-processor obligations, government access transparency, and a "challenge" clause allowing the importer to suspend or terminate transfers if local law undermines SCC guarantees.',
                },
                {
                  type: 'heading',
                  content: 'Key Innovations in the 2021 SCCs',
                },
                {
                  type: 'list',
                  content: 'Key innovations in the 2021 EU SCCs',
                  items: [
                    'Modular structure — choose the right module for the transfer type.',
                    'Mandatory government access transparency clause (Clause 15).',
                    'Importers\' obligation to challenge government access requests that are "manifestly abusive" (Clause 15(2)).',
                    'Data subject third-party beneficiary rights extend to sub-processors.',
                    'Optional "docking clause" to admit new parties to an existing SCC framework.',
                    'Forced re-papering of old SCCs by 27 December 2022 for ongoing transfers.',
                  ],
                },
              ],
            },
            {
              id: 'sec-4',
              title: 'Prospects for an EU Adequacy Decision for India',
              content: [
                {
                  type: 'paragraph',
                  content:
                    'India has not been the subject of an EU adequacy decision. The European Commission\'s adequacy assessment considers: rule of law, respect for human rights, relevant data protection legislation, supervisory authority, international commitments, and the existence of effective administrative and judicial redress. The DPDPA addresses several of these (independent Data Protection Board, judicial redress through appeal to the TDSAT and High Courts), but concerns remain about Government access under Section 17 of the DPDPA (exemptions for State processing) and India\'s surveillance regime.',
                },
                {
                  type: 'callout',
                  content:
                    'An EU adequacy decision for India is unlikely in the near term (3–5 years). Indian companies should continue to rely on SCCs plus Transfer Impact Assessments for EU personal data, while building internal capacity for when an adequacy decision might be considered.',
                  calloutType: 'note',
                },
                {
                  type: 'paragraph',
                  content:
                    'For Indian businesses, the practical implication is that serving EU customers requires SCCs even though the DPDPA permits free outbound transfer. The compliance burden falls on the Indian Data Fiduciary serving EU customers, not on the DPDPA itself.',
                },
              ],
            },
          ],
          glossary: [
            { term: 'Privacy Shield', definition: 'An EU-US data transfer framework invalidated by the Schrems II judgment in 2020; replaced in 2023 by the EU-US Data Privacy Framework.' },
            { term: 'Data Privacy Framework (DPF)', definition: 'The 2023 EU-US data transfer arrangement, providing adequacy for transfers to US organisations self-certified under the DPF.' },
            { term: 'Binding Corporate Rules (BCRs)', definition: 'Intra-group data transfer rules approved by an EU Data Protection Authority, allowing multinational groups to transfer data within the group.' },
            { term: 'Supplementary Measures', definition: 'Additional technical, contractual or organisational measures identified during a TIA to bridge gaps in destination country protection.' },
          ],
          references: [
            { title: 'GDPR Articles 44–49', source: 'European Union', year: '2016' },
            { title: 'Commission Implementing Decision 2021/914 (2021 SCCs)', source: 'European Commission', year: '2021' },
            { title: 'Schrems II Judgment (Case C-311/18)', source: 'Court of Justice of the European Union', year: '2020' },
            { title: 'EDPB Recommendations 01/2020 on Supplementary Measures', source: 'European Data Protection Board', year: '2021' },
          ],
        },
      ],
    },

    // ============================================================
    // CHAPTER 2: SECTORAL LOCALISATION MANDATES
    // ============================================================
    {
      id: 2,
      title: 'Sectoral Localisation Mandates',
      lessons: [
        // -------- LESSON 6 --------
        {
          id: 6,
          title: 'RBI Payment Data Localisation (April 2018 Circular)',
          duration: '22 min',
          type: 'video',
          description:
            'Deep-dive into the RBI Storage of Payment System Data Circular of 6 April 2018 — the most consequential sectoral localisation rule in India, requiring end-to-end payment data to be stored only in India.',
          content:
            'The Reserve Bank of India\'s Storage of Payment System Data Circular, issued on 6 April 2018, requires all payment system operators (PSOs) authorised by the RBI to store the entire payment transaction data only in India. This is the most heavily enforced sectoral localisation rule in India and applies regardless of DPDPA Section 16. This lesson covers the circular\'s text, scope, RBI FAQ clarifications, compliance approaches, and penalties for non-compliance.',
          learningObjectives: [
            'Recite the requirements of the RBI 6 April 2018 Circular',
            'Identify what constitutes "end-to-end payment transaction data"',
            'Apply the RBI FAQ clarifications to common scenarios (tokenisation, cross-border testing)',
            'Design payment system architectures compliant with both RBI and DPDPA',
            'Recognise the penalties and supervisory actions for non-compliance',
          ],
          keyTakeaways: [
            'The RBI Circular requires that all payment data — including full end-to-end transaction details and customer information — be stored only in India.',
            'Foreign leg data (data generated abroad in cross-border transactions) may be stored abroad, but a copy must be brought to India.',
            'Tokenisation is permitted and encouraged — replaces card-on-file with cryptographically secure tokens.',
            'The Circular applies to all PSOs authorised by RBI — banks, PPIs, card networks, BBPS, NPCI, fintech apps operating in India.',
            'Penalties under the Payment and Settlement Systems Act 2007 can include financial penalties, restrictions on operations, and cancellation of authorisation.',
          ],
          sections: [
            {
              id: 'sec-1',
              title: 'The Text and Scope of the Circular',
              content: [
                {
                  type: 'paragraph',
                  content:
                    'The RBI Circular dated 6 April 2018 (DPSS.CO.OD.No.2785/06.08.005/2017-2018) states, in essence: "In order to ensure better monitoring, it is important to have unfettered supervisory access to data pertaining to all payment systems. The availability of such data with the Reserve Bank will enable it to discharge its regulatory and supervisory responsibilities effectively. Accordingly, it has been decided that all payment system operators authorised by the Reserve Bank shall ensure that the entire data relating to payment systems operated by them is stored only in India." The Circular further requires this be done "in a system only in India" and that data "processed outside India" should be brought back to India "not later than the 24-hour boundary or the next working day in India, whichever is earlier."',
                },
                {
                  type: 'callout',
                  content:
                    'The RBI Circular is sectoral — it applies to payment system data only. It is more restrictive than DPDPA Section 16, which would otherwise permit storage abroad. The Circular overrides Section 16 for payment data.',
                  calloutType: 'important',
                },
                {
                  type: 'heading',
                  content: 'Who is a Payment System Operator?',
                },
                {
                  type: 'paragraph',
                  content:
                    'PSOs include: scheduled commercial banks (in their payment system capacity), payment banks, small finance banks, prepaid payment instrument (PPI) issuers, card networks (Visa, Mastercard, RuPay, Amex), ATM networks, White Label ATM operators, the National Payments Corporation of India (NPCI) operating UPI, IMPS, AePS, NACH, BBPS, FasTag, and BharatQR; fintech apps operating as PPIs or payment aggregators (Paytm, PhonePe, Razorpay, Cashfree, BillDesk, Pine Labs); and the soon-to-be-launched Central Bank Digital Currency (CBDC — e₹) infrastructure.',
                },
              ],
            },
            {
              id: 'sec-2',
              title: 'What is "End-to-End Payment Data"?',
              content: [
                {
                  type: 'paragraph',
                  content:
                    'The RBI Circular requires storage of "the entire data relating to payment systems" — not just final transaction records. This includes customer onboarding KYC, transaction initiation data, authentication data, authorisation data, settlement data, chargeback and dispute data, and fraud monitoring data. The RBI FAQ (October 2018) clarified the scope in response to industry questions.',
                },
                {
                  type: 'heading',
                  content: 'Key RBI FAQ Clarifications',
                },
                {
                  type: 'list',
                  content: 'Key clarifications from RBI FAQ (October 2018 and subsequent updates)',
                  items: [
                    'End-to-end transaction details include: customer details, payment details, beneficiary details, transaction amount, time, status, and settlement details.',
                    'Customer data: name, account details, contact information, KYC documents.',
                    'Payment sensitive data: card numbers, tokens, UPI VPA, IFSC, account numbers — encrypted where required.',
                    'Foreign leg of cross-border transactions: data may be stored abroad, but a copy must be brought to India within 24 hours.',
                    'Tokenisation: permitted and encouraged — replaces card-on-file with issuer-generated tokens.',
                    'Cross-border testing / sandbox: permitted abroad, but production data must be in India.',
                    'Data processing abroad (e.g., fraud analytics in Singapore): permitted for processing, but storage must be in India.',
                  ],
                },
                {
                  type: 'example',
                  content:
                    'Paytm processes a UPI transaction initiated by an Indian customer to an Indian merchant. The data flows: customer phone → Paytm app → NPCI switches → issuing bank → acquiring bank → Paytm server. The entire chain is in India. Paytm stores the transaction record, customer details, and merchant details in AWS Mumbai (ap-south-1). Tokenisation is used so that no raw bank account number is stored. This satisfies both the RBI Circular and DPDPA Section 16.',
                },
              ],
            },
            {
              id: 'sec-3',
              title: 'Tokenisation and RBI Guidelines',
              content: [
                {
                  type: 'paragraph',
                  content:
                    'On 7 January 2019, the RBI issued guidelines on tokenisation — Card-on-File Tokenisation (CoFT). Tokenisation replaces a card\'s primary account number (PAN) with a substitute value (token), specific to a card, merchant, and device. From 1 October 2022, RBI mandated that merchants and payment aggregators cannot store actual card data — only tokens. This was extended to 30 September 2022 for compliance and then enforced from 1 October 2022.',
                },
                {
                  type: 'heading',
                  content: 'Impact on Card-on-File Storage',
                },
                {
                  type: 'paragraph',
                  content:
                    'Before October 2022, merchants like Amazon, Flipkart, Swiggy stored customer card numbers (encrypted) for one-click checkout. Post-October 2022, they must store only tokens issued by the card-issuing bank. The actual card number is held only by the issuing bank and the card network. This both improves security (token is useless if breached) and ensures localisation compliance (issuer tokens stored in India).',
                },
                {
                  type: 'callout',
                  content:
                    'Tokenisation is RBI\'s solution to the tension between frictionless checkout and localisation. With tokenisation, even if a merchant\'s token database is breached, no usable card data is exposed.',
                  calloutType: 'tip',
                },
              ],
            },
            {
              id: 'sec-4',
              title: 'Penalties and Supervisory Action',
              content: [
                {
                  type: 'paragraph',
                  content:
                    'The RBI Circular is enforced under the Payment and Settlement Systems Act 2007. Section 30 of the PSS Act allows RBI to impose penalties for contravention of any direction — up to ₹5 lakh for every day during which the contravention continues, subject to a maximum of ₹5 crore. Beyond financial penalties, RBI has increasingly used supervisory tools: instructions to acquire fresh compliance audits, restrictions on onboarding new customers (as imposed on American Express, Diners Club in April 2021 for non-compliance with the localisation circular), and in extreme cases, cancellation of authorisation.',
                },
                {
                  type: 'heading',
                  content: 'Notable Enforcement Actions',
                },
                {
                  type: 'list',
                  content: 'Notable RBI enforcement actions on localisation',
                  items: [
                    'April 2021: American Express Banking Corp. — barred from issuing new cards from 1 May 2021 for non-compliance with localisation rules.',
                    'April 2021: Diners Club International — barred from issuing new cards from 1 May 2021.',
                    'Mastercard: barred from onboarding new domestic customers from 22 July 2021 for non-compliance with localisation.',
                    'Visa: similar supervisory restrictions on certain debit card programmes.',
                    'Reserve Bank monitored compliance through on-site inspections and external auditors\' reports.',
                  ],
                },
                {
                  type: 'example',
                  content:
                    'Mastercard\'s July 2021 restriction is instructive. The bar on new domestic customers (which was lifted in November 2021 after compliance) cost Mastercard significant market share in India — demonstrating that RBI takes localisation seriously and that non-compliance has direct commercial consequences beyond financial penalties.',
                },
              ],
            },
          ],
          glossary: [
            { term: 'Payment System Operator (PSO)', definition: 'An entity authorised by the Reserve Bank of India under the Payment and Settlement Systems Act 2007 to operate a payment system in India.' },
            { term: 'Tokenisation', definition: 'The substitution of a sensitive data element (such as a card number) with a non-sensitive surrogate value (token) that has no exploitable meaning outside its specific context.' },
            { term: 'Card-on-File (CoF)', definition: 'A storage arrangement where a merchant stores customer card details for recurring or one-click transactions — restricted by RBI from 1 October 2022.' },
            { term: 'Foreign Leg', definition: 'That portion of a cross-border payment transaction that occurs outside India — may be stored abroad, but a copy must be brought to India within 24 hours.' },
          ],
          references: [
            { title: 'RBI Storage of Payment System Data Circular (6 April 2018)', source: 'Reserve Bank of India', year: '2018' },
            { title: 'RBI FAQ on Storage of Payment System Data (October 2018)', source: 'Reserve Bank of India', year: '2018' },
            { title: 'RBI Guidelines on Tokenisation (7 January 2019)', source: 'Reserve Bank of India', year: '2019' },
            { title: 'Payment and Settlement Systems Act 2007', source: 'Government of India', year: '2007' },
          ],
        },

        // -------- LESSON 7 --------
        {
          id: 7,
          title: 'IRDAI Insurance Data Localisation',
          duration: '18 min',
          type: 'reading',
          description:
            'IRDAI\'s Insurance Regulatory and Development Authority of India guidelines on cloud adoption and outsourcing — requiring insurance companies to keep customer data in India and conduct due diligence on cloud providers.',
          content:
            'The Insurance Regulatory and Development Authority of India (IRDAI) has issued multiple circulars governing data storage by insurance companies, most notably the Guidelines on Information and Cyber Security (2017) and the circulars on Outsourcing and Cloud Adoption. This lesson covers the IRDAI localisation requirements, the cloud provider approval process, and the interplay with DPDPA Section 16 for insurance customer data.',
          learningObjectives: [
            'Identify IRDAI\'s data localisation requirements for insurers',
            'Apply the cloud adoption guidelines to choose compliant cloud providers',
            'Understand the IRDAI outsourcing circular\'s data processing requirements',
            'Coordinate IRDAI and DPDPA compliance for insurance customer data',
          ],
          keyTakeaways: [
            'IRDAI Guidelines on Information and Cyber Security (2017) require insurers to keep policyholder and claims data in India.',
            'Cloud adoption is permitted only with IRDAI-approved providers, after a due diligence process.',
            'Outsourcing of core insurance functions requires prior IRDAI approval and contractual safeguards.',
            'IRDAI requirements overlay DPDPA Section 16 — even if Section 16 permits transfer, IRDAI may prohibit it for insurance data.',
            'Insurers must conduct annual cyber security audits covering cloud deployments.',
          ],
          sections: [
            {
              id: 'sec-1',
              title: 'IRDAI Guidelines on Information and Cyber Security',
              content: [
                {
                  type: 'paragraph',
                  content:
                    'The IRDAI Guidelines on Information and Cyber Security for Insurers, issued on 7 April 2017, are the foundational framework for insurance data protection. The Guidelines require every insurer to maintain a Board-approved Information Security Policy, designate a Chief Information Security Officer (CISO), establish a Cyber Security Cell, and report cyber incidents to IRDAI within 6 hours of detection. Critically, the Guidelines require that all customer-related information be stored in servers located in India.',
                },
                {
                  type: 'heading',
                  content: 'The Localisation Clause',
                },
                {
                  type: 'paragraph',
                  content:
                    'Clause B.7 of the Guidelines specifies: "All the customer related information should be stored in servers located in India. If the insurance company is using cloud computing, then such cloud computing should be provided by a service provider whose servers are located in India." This is a strict localisation rule — stricter than DPDPA Section 16, which permits transfers subject to blacklist.',
                },
                {
                  type: 'callout',
                  content:
                    'IRDAI localisation is absolute for "customer related information". Unlike the RBI Circular\'s 24-hour foreign leg exception, IRDAI does not explicitly permit even transient foreign storage of customer data.',
                  calloutType: 'important',
                },
              ],
            },
            {
              id: 'sec-2',
              title: 'Cloud Adoption Guidelines',
              content: [
                {
                  type: 'paragraph',
                  content:
                    'IRDAI issued separate guidelines on cloud adoption by insurers, most recently updated through circulars in 2020 and 2022. The guidelines permit cloud adoption but impose specific conditions: (1) only IRDAI-approved cloud service providers may be used; (2) data residency must be in India; (3) the cloud provider must allow IRDAI inspection of the cloud environment; (4) exit strategy must be documented; (5) data encryption must meet IRDAI standards (AES-256 at rest, TLS 1.2+ in transit); (6) multi-tenant environments are permitted but with strong logical isolation.',
                },
                {
                  type: 'heading',
                  content: 'IRDAI-Approved Cloud Providers',
                },
                {
                  type: 'paragraph',
                  content:
                    'IRDAI has approved a list of cloud service providers meeting its baseline requirements. As of 2024, the approved list includes: Amazon Web Services (AWS India region), Microsoft Azure (India regions), Google Cloud Platform (India region), Netmagic (NTT), CtrlS, ESDS, Sify, Tata Communications, and others. The list is updated periodically. Insurers using non-approved providers face regulatory action.',
                },
                {
                  type: 'table',
                  headers: ['Cloud Provider', 'India Region', 'IRDAI Status', 'Common Use in Insurance'],
                  rows: [
                    ['AWS', 'ap-south-1 Mumbai, ap-south-2 Hyderabad', 'Approved', 'Premium calculation engines, claims processing'],
                    ['Microsoft Azure', 'Central India, South India, West India', 'Approved', 'Customer portals, agent management'],
                    ['Google Cloud Platform', 'asia-south1 Mumbai, asia-south2 Delhi', 'Approved', 'ML-based fraud analytics, telematics'],
                    ['Netmagic / NTT', 'Mumbai, Bangalore, Chennai', 'Approved', 'Disaster recovery, backup'],
                    ['CtrlS', 'Hyderabad, Mumbai', 'Approved', 'Smaller insurers, niche workloads'],
                  ],
                },
              ],
            },
            {
              id: 'sec-3',
              title: 'Outsourcing and Third-Party Processing',
              content: [
                {
                  type: 'paragraph',
                  content:
                    'The IRDAI Guidelines on Outsourcing Activities by Insurance Companies (most recently revised 2023) require that outsourcing of critical functions — including claims processing, underwriting, customer service — be done with IRDAI approval and contractual safeguards. Data shared with outsourcing partners is subject to the same localisation rules. Foreign outsourcing is permitted only with IRDAI prior approval, and only if the foreign jurisdiction provides adequate protection.',
                },
                {
                  type: 'callout',
                  content:
                    'Outsourcing to a foreign BPO that accesses customer data from India is itself a cross-border transfer under IRDAI rules — even if storage remains in India. Insurers must obtain IRDAI prior approval and ensure contractual safeguards equivalent to DPDPA Section 8(3).',
                  calloutType: 'warning',
                },
                {
                  type: 'heading',
                  content: 'Mandatory Outsourcing Clauses',
                },
                {
                  type: 'list',
                  content: 'Mandatory clauses in IRDAI outsourcing contracts',
                  items: [
                    'Data confidentiality and protection obligations equivalent to the insurer\'s own.',
                    'Indian law as governing law and Indian courts as exclusive jurisdiction.',
                    'IRDAI inspection rights — direct access to outsourcer premises and records.',
                    'Sub-contracting only with prior written approval of the insurer.',
                    'Audit rights — at least annually, with reports shared with IRDAI on request.',
                    'Breach notification within 24 hours to the insurer, who must notify IRDAI within 6 hours.',
                    'Return or deletion of data on termination.',
                    'Indemnity for any loss caused by the outsourcer.',
                  ],
                },
              ],
            },
            {
              id: 'sec-4',
              title: 'Interaction with DPDPA Section 16',
              content: [
                {
                  type: 'paragraph',
                  content:
                    'IRDAI localisation is stricter than DPDPA Section 16 — so for insurance customer data, the IRDAI rule governs. Even if a destination country is not on the DPDPA blacklist, IRDAI prohibits transfer. The DPO of an insurance company must track both regimes and apply the strictest. For non-customer data (e.g., employee records, financial accounts), DPDPA Section 16 governs.',
                },
                {
                  type: 'heading',
                  content: 'The Layered Compliance Model',
                },
                {
                  type: 'paragraph',
                  content:
                    'The recommended approach is a layered compliance model: a base layer complying with DPDPA Section 16 (all personal data); a middle layer complying with IRDAI Guidelines (insurance customer data); and a top layer complying with sector-specific requirements (motor insurance telematics — also subject to IRDAI motor insurance circulars; health insurance — also subject to the Ayushman Bharat Digital Mission (ABDM) data policy).',
                },
                {
                  type: 'example',
                  content:
                    'HDFC Life Insurance stores policyholder data in AWS ap-south-1 Mumbai (IRDAI-approved). It uses AWS KMS for encryption with customer-managed keys held in Mumbai. Its BPO partner (India-based) processes claims data under an IRDAI-compliant outsourcing contract. Telematics data for motor insurance partner ICICI Lombard is processed in GCP ap-south-1 Mumbai. No customer data leaves India, satisfying both IRDAI and DPDPA.',
                },
              ],
            },
          ],
          glossary: [
            { term: 'IRDAI', definition: 'Insurance Regulatory and Development Authority of India — the statutory regulator of the insurance sector, established under the IRDA Act 1999.' },
            { term: 'IRDAI-Approved Cloud Provider', definition: 'A cloud service provider that meets IRDAI baseline requirements for data residency, security, and audit access, listed in IRDAI\'s approved register.' },
            { term: 'Chief Information Security Officer (CISO)', definition: 'A senior executive designated by an insurer to oversee information security, required by IRDAI Guidelines.' },
            { term: 'Layered Compliance', definition: 'A compliance approach where multiple regulatory regimes apply, with the strictest applicable rule governing each data category.' },
          ],
          references: [
            { title: 'IRDAI Guidelines on Information and Cyber Security for Insurers (7 April 2017)', source: 'IRDAI', year: '2017' },
            { title: 'IRDAI Guidelines on Outsourcing Activities by Insurance Companies', source: 'IRDAI', year: '2023' },
            { title: 'IRDAI Cloud Adoption Circular', source: 'IRDAI', year: '2022' },
          ],
        },

        // -------- LESSON 8 --------
        {
          id: 8,
          title: 'SEBI Financial Sector Data Rules',
          duration: '18 min',
          type: 'reading',
          description:
            'SEBI Cybersecurity and Resilience Framework (CSCRF) 2024 and earlier circulars requiring stock brokers, depositories, mutual funds and AMCs to keep certain data in India.',
          content:
            'The Securities and Exchange Board of India (SEBI) regulates capital markets participants and has issued cybersecurity and data localisation requirements through multiple circulars — most recently consolidated into the SEBI Cybersecurity and Resilience Framework (CSCRF) notified in November 2024. This lesson covers the SEBI data localisation requirements applicable to different regulated entities (REs) — stock brokers, depository participants, mutual funds, AMCs, AIFs — and how they overlay DPDPA Section 16.',
          learningObjectives: [
            'Identify SEBI\'s data localisation requirements under CSCRF 2024',
            'Distinguish between localisation rules for different RE categories',
            'Apply the cloud adoption and outsourcing requirements',
            'Coordinate SEBI and DPDPA compliance for capital markets data',
          ],
          keyTakeaways: [
            'SEBI CSCRF 2024 consolidates earlier cybersecurity circulars into a single framework applicable to all REs.',
            'Localisation rules vary by RE category — Market Infrastructure Institutions (MIIs) face the strictest rules, followed by brokers, then AMCs.',
            'Cloud adoption is permitted with SEBI-approved providers and data residency in India.',
            'For market data and investor personal data, SEBI rules overlay DPDPA Section 16.',
            'CSCRF mandates quarterly cyber security audits and a 6-hour breach reporting window.',
          ],
          sections: [
            {
              id: 'sec-1',
              title: 'The CSCRF 2024 Framework',
              content: [
                {
                  type: 'paragraph',
                  content:
                    'The SEBI Cybersecurity and Resilience Framework (CSCRF) notified in November 2024 (with phased compliance deadlines through 2025) consolidates earlier circulars on cybersecurity, technology audits, and cloud adoption into a unified framework. It applies to all SEBI Regulated Entities (REs): stock exchanges, depositories, clearing corporations (collectively MIIs); stock brokers and depository participants; mutual funds and Asset Management Companies (AMCs); Alternative Investment Funds (AIFs); portfolio managers; research analysts; and others.',
                },
                {
                  type: 'heading',
                  content: 'CSCRF\'s Six Pillars',
                },
                {
                  type: 'list',
                  content: 'Six pillars of SEBI CSCRF',
                  items: [
                    'Cybersecurity governance: Board-approved policy, designated CISO, cyber cell.',
                    'Data localisation: Specific to each RE category.',
                    'Cloud adoption: Permitted with approved providers, data in India.',
                    'Incident response and reporting: 6-hour reporting to CERT-In and SEBI.',
                    'Third-party and supply chain risk management: Vendor due diligence.',
                    'Continuous monitoring and audits: Quarterly vulnerability assessment, annual comprehensive audit.',
                  ],
                },
                {
                  type: 'callout',
                  content:
                    'CSCRF 2024 replaces the earlier fragmented circulars (CSCR for Stock Brokers 2018, CSCR for Depositories 2019, etc.) — but maintains most of the substantive localisation requirements.',
                  calloutType: 'note',
                },
              ],
            },
            {
              id: 'sec-2',
              title: 'Localisation Rules by RE Category',
              content: [
                {
                  type: 'paragraph',
                  content:
                    'SEBI applies a tiered localisation approach based on the criticality of the RE to market infrastructure. Market Infrastructure Institutions (MIIs — stock exchanges, depositories, clearing corporations) face the strictest rules — all data must be in India, including disaster recovery. Brokers and DPs have a slightly more relaxed regime — operational data must be in India, but certain ancillary data (e.g., marketing analytics) may be processed abroad. AMCs and AIFs have the most relaxed rules — investor personal data must be in India, but investment research and portfolio analytics may be processed abroad.',
                },
                {
                  type: 'table',
                  headers: ['RE Category', 'Localisation Scope', 'Cloud Permitted', 'DR Location'],
                  rows: [
                    ['MIIs (exchanges, depositories, CCs)', 'All data in India', 'Yes — approved CSPs only', 'Must be in India'],
                    ['Stock brokers and DPs', 'Operational and client data in India', 'Yes — approved CSPs', 'India preferred, foreign DR allowed with conditions'],
                    ['AMCs and Mutual Funds', 'Investor personal data in India', 'Yes — approved CSPs', 'India preferred'],
                    ['AIFs and Portfolio Managers', 'Investor KYC in India; analytics may be abroad', 'Yes', 'Flexible'],
                    ['Research Analysts and Investment Advisors', 'Client data in India', 'Yes', 'Flexible'],
                  ],
                },
              ],
            },
            {
              id: 'sec-3',
              title: 'Cloud Adoption Rules and Approved Providers',
              content: [
                {
                  type: 'paragraph',
                  content:
                    'SEBI permits cloud adoption by REs subject to conditions: (1) the CSP must be empanelled with MeitY; (2) data residency must be in India; (3) multi-tenant environments are permitted with logical isolation; (4) the RE retains responsibility for security and compliance; (5) an exit strategy must be documented; (6) audit logs must be retained for 10 years (longer than DPDPA\'s business-purpose requirement).',
                },
                {
                  type: 'heading',
                  content: 'MeitY Empanelled Cloud Providers',
                },
                {
                  type: 'paragraph',
                  content:
                    'SEBI relies on the MeitY empanelment of cloud service providers. The MeitY list (as of 2024) includes: AWS (with India regions), Microsoft Azure (India regions), Google Cloud (India region), Oracle Cloud (Mumbai), IBM Cloud (Chennai), Netmagic/NTT, CtrlS, ESDS, Sify, Tata Communications, Ctrls, and Indian government clouds (MeghRaj). Foreign-only CSPs (e.g., Alibaba Cloud with no India region) are not approved.',
                },
                {
                  type: 'callout',
                  content:
                    'MeitY empanelment is a baseline. SEBI expects additional due diligence by the RE — including penetration testing, vulnerability assessment, and contractual safeguards beyond the standard MeitY SLA.',
                  calloutType: 'tip',
                },
              ],
            },
            {
              id: 'sec-4',
              title: 'Interaction with DPDPA and Investor Data',
              content: [
                {
                  type: 'paragraph',
                  content:
                    'Investor personal data (KYC, PAN, bank account, demat account, transactions) is governed by both SEBI rules and DPDPA. SEBI rules are stricter for MIIs and brokers (in-India storage requirement); DPDPA Section 16 would otherwise permit foreign storage. The DPO of a broker or AMC must apply SEBI rules for investor data, and DPDPA Section 16 for non-investor data (e.g., employee records).',
                },
                {
                  type: 'heading',
                  content: 'The 6-Hour Breach Reporting Overlap',
                },
                {
                  type: 'paragraph',
                  content:
                    'SEBI CSCRF requires breach reporting to SEBI and CERT-In within 6 hours — significantly tighter than DPDPA\'s requirement to notify the Board "as soon as possible" and affected Data Principals "without undue delay." For capital market entities, the 6-hour window is binding. The breach notification process must therefore be designed for SEBI compliance first; DPDPA notification follows.',
                },
                {
                  type: 'example',
                  content:
                    'Zerodha, the largest Indian discount broker, stores client KYC and trade data in AWS ap-south-1 Mumbai. Its broker back-office is hosted on-premise in Bangalore with DR in AWS Mumbai. Investor personal data never leaves India, satisfying SEBI and DPDPA. Its marketing website uses Google Analytics (US), but no KYC data is sent to GA — only anonymised event data. The 6-hour breach reporting SLA is met through automated SIEM alerts and a 24/7 SOC.',
                },
              ],
            },
          ],
          glossary: [
            { term: 'SEBI', definition: 'Securities and Exchange Board of India — the statutory regulator of the securities market, established under the SEBI Act 1992.' },
            { term: 'CSCRF', definition: 'Cybersecurity and Resilience Framework — SEBI\'s unified cybersecurity framework notified in November 2024.' },
            { term: 'Market Infrastructure Institution (MII)', definition: 'A SEBI-recognised entity providing core market infrastructure — stock exchanges, depositories, and clearing corporations — subject to the strictest localisation rules.' },
            { term: 'MeitY Empanelment', definition: 'A certification scheme by which the Ministry of Electronics and Information Technology approves cloud service providers for use by government and regulated entities.' },
          ],
          references: [
            { title: 'SEBI Cybersecurity and Resilience Framework (CSCRF)', source: 'Securities and Exchange Board of India', year: '2024' },
            { title: 'MeitY Empanelment of Cloud Service Providers', source: 'Ministry of Electronics and IT', year: '2024' },
            { title: 'SEBI Circular on Cloud Adoption by REs', source: 'SEBI', year: '2023' },
          ],
        },

        // -------- LESSON 9 --------
        {
          id: 9,
          title: 'Health Sector: eSanjeevani and Health Data',
          duration: '20 min',
          type: 'interactive',
          description:
            'The health sector data rules under the Ayushman Bharat Digital Mission (ABDM), the Digital Information Security in Healthcare Act (DISHA) draft, and the eSanjeevani telemedicine platform — including health data localisation and consent management.',
          content:
            'Health data is treated as especially sensitive under Indian regulatory practice, even though the DPDPA itself does not contain a separate "sensitive personal data" category. The Ayushman Bharat Digital Mission (ABDM) data policy, the draft DISHA bill, and the eSanjeevani telemedicine guidelines collectively create a health-data-specific localisation regime. This lesson covers these requirements and their interaction with DPDPA Section 16.',
          learningObjectives: [
            'Identify the ABDM data policy requirements for health data',
            'Explain the consent manager architecture under ABDM',
            'Apply eSanjeevani\'s telemedicine data storage rules',
            'Coordinate health sector rules with DPDPA Section 16',
          ],
          keyTakeaways: [
            'The ABDM data policy requires health data linked to an ABHA (Ayushman Bharat Health Account) to be stored in India.',
            'The ABDM Consent Manager enables granular consent for health data sharing between providers.',
            'eSanjeevani telemedicine consultations are recorded and stored in India-based servers.',
            'DPDPA treats health data as ordinary personal data — the additional sensitivity comes from sectoral rules.',
            'Health data breaches trigger both DPDPA Section 8(6) breach notification and ABDM-specific reporting.',
          ],
          sections: [
            {
              id: 'sec-1',
              title: 'The ABDM Data Policy',
              content: [
                {
                  type: 'paragraph',
                  content:
                    'The Ayushman Bharat Digital Mission (ABDM), launched in September 2021 and rolled out nationally, is India\'s flagship digital health initiative. The ABDM Health Data Management Policy (issued under the National Health Authority) requires that all health data collected, processed, or shared through ABDM-linked systems be stored in India. The policy creates the ABHA — a 14-digit unique health identifier for every Indian — and a federated health record system in which records are held by the originating provider and shared via a consent-managed API.',
                },
                {
                  type: 'heading',
                  content: 'Key ABDM Requirements',
                },
                {
                  type: 'list',
                  content: 'Key requirements of the ABDM Health Data Management Policy',
                  items: [
                    'All health data linked to ABHA must be stored in India.',
                    'Consent must be obtained through an ABDM-registered Consent Manager before data is shared.',
                    'Consent is purpose-specific, time-bound, and revocable at any time.',
                    'Patient has the right to view, modify, and revoke consent through the ABHA app.',
                    'Health data must be encrypted in transit (TLS 1.2+) and at rest (AES-256).',
                    'Breach notification to NHA within 72 hours.',
                    'Health records must be retained for the patient\'s lifetime plus 5 years after death.',
                  ],
                },
                {
                  type: 'callout',
                  content:
                    'The ABDM is voluntary — patients can choose not to create an ABHA. However, once an ABHA is created, the localisation and consent rules apply to all data linked to it, regardless of the patient\'s choice.',
                  calloutType: 'note',
                },
              ],
            },
            {
              id: 'sec-2',
              title: 'The Consent Manager Architecture',
              content: [
                {
                  type: 'paragraph',
                  content:
                    'The ABDM Consent Manager is a key innovation — a third-party service that mediates consent between patients and providers. When a doctor (or insurer, or researcher) wants to access a patient\'s health records, they request access through the Consent Manager. The patient receives a notification on their ABHA app and can grant or deny access, with granular control over which records, for what purpose, and for how long.',
                },
                {
                  type: 'heading',
                  content: 'How the Consent Flow Works',
                },
                {
                  type: 'list',
                  content: 'ABDM consent flow',
                  items: [
                    'Step 1: Data Consumer (e.g., a specialist) sends a consent request to the Consent Manager.',
                    'Step 2: Consent Manager pushes the request to the patient\'s ABHA app.',
                    'Step 3: Patient reviews the request — purpose, data type, period — and approves or denies.',
                    'Step 4: If approved, the Consent Manager issues a consent artefact (a signed JSON).',
                    'Step 5: The Data Consumer presents the artefact to the Data Provider (e.g., the patient\'s GP).',
                    'Step 6: The Data Provider verifies the artefact and releases the data, encrypted to the Consumer.',
                    'Step 7: The Consent Manager records the transaction for audit.',
                  ],
                },
                {
                  type: 'example',
                  content:
                    'A patient in Delhi creates an ABHA. They visit a GP who creates an electronic health record (EHR) stored in the GP\'s India-based ABDM-compliant system. The patient then visits a cardiologist in Mumbai. The cardiologist requests consent for the cardiology-specific EHR through the Consent Manager. The patient approves on their ABHA app, specifying "cardiology records only, for 7 days." The cardiologist receives the records, the GP system logs the transfer, and the Consent Manager records the transaction.',
                },
              ],
            },
            {
              id: 'sec-3',
              title: 'eSanjeevani Telemedicine Platform',
              content: [
                {
                  type: 'paragraph',
                  content:
                    'eSanjeevani is the Government of India\'s national telemedicine platform, with two variants: eSanjeevani AB-HWC (doctor-to-doctor) and eSanjeevani OPD (patient-to-doctor). Launched in 2019 and scaled massively during COVID-19, eSanjeevani has facilitated over 250 million consultations. The platform\'s data storage rules — issued by the Ministry of Health and Family Welfare — require all consultation records, prescriptions, and patient data to be stored on India-based servers (NIC cloud or MeitY-approved cloud).',
                },
                {
                  type: 'heading',
                  content: 'eSanjeevani Data Storage Rules',
                },
                {
                  type: 'list',
                  content: 'eSanjeevani data storage and security rules',
                  items: [
                    'All consultation records (video, audio, chat) must be stored in India.',
                    'Prescriptions issued via eSanjeevani are digitally signed and stored on India-based servers.',
                    'Patient identity is verified through Aadhaar / mobile OTP — no biometric data is stored.',
                    'Records are retained for 5 years (the medical records retention period under the Medical Council of India).',
                    'Access is restricted to the patient, the consulting doctor, and authorised health officials.',
                    'API access by third-party apps requires ABDM Consent Manager approval.',
                  ],
                },
                {
                  type: 'callout',
                  content:
                    'Private telemedicine platforms (Practo, Apollo 24/7, Tata 1mg, MFine) operating in India are expected to follow the same localisation principles as eSanjeevani — even though the Telemedicine Practice Guidelines 2020 do not explicitly mandate it, the ABDM Policy and DPDPA Section 16 together create a strong expectation.',
                  calloutType: 'tip',
                },
              ],
            },
            {
              id: 'sec-4',
              title: 'DPDPA and Health Data — A Layered Approach',
              content: [
                {
                  type: 'paragraph',
                  content:
                    'The DPDPA does not have a separate "sensitive personal data" category — health data is treated as ordinary personal data. However, the practical sensitivity is high, and the Data Protection Board is likely to consider health data breaches as more serious when assessing penalties. Additionally, sectoral rules (ABDM, eSanjeevani, state-level public health data rules) impose stricter localisation. The DPO of a health-tech company must apply a layered approach.',
                },
                {
                  type: 'heading',
                  content: 'The Layered Compliance Model for Health Data',
                },
                {
                  type: 'list',
                  content: 'Layered compliance for health data',
                  items: [
                    'Layer 1 — DPDPA: All personal data of patients (general compliance, Section 16 for transfers, Section 8 for safeguards).',
                    'Layer 2 — ABDM: If the patient has an ABHA, all health data linked to the ABHA must be in India.',
                    'Layer 3 — eSanjeevani: If the platform is eSanjeevani, all data must be in India (NIC cloud).',
                    'Layer 4 — State rules: State-level public health data rules (e.g., Maharashtra Health Data rules) may impose additional requirements.',
                    'Layer 5 — Insurance: If health data is also insurance-related (e.g., pre-authorisation), IRDAI rules apply on top.',
                  ],
                },
                {
                  type: 'example',
                  content:
                    'Practo, a Bengaluru-based health-tech company, hosts patient consultations and electronic health records in AWS ap-south-1 Mumbai. For patients with ABHA, records are linked to ABDM via the Practo-ABDM integration. Telemedicine consultations on Practo follow eSanjeevani storage principles even when the patient does not have ABHA. Insurance pre-authorisations shared with insurers follow IRDAI rules. Layered compliance ensures all applicable rules are met.',
                },
              ],
            },
          ],
          glossary: [
            { term: 'ABHA', definition: 'Ayushman Bharat Health Account — a 14-digit unique health identifier issued under the Ayushman Bharat Digital Mission.' },
            { term: 'Consent Manager', definition: 'A third-party service under ABDM that mediates consent between patients and data consumers, issuing signed consent artefacts.' },
            { term: 'eSanjeevani', definition: 'The Government of India\'s national telemedicine platform with doctor-to-doctor and patient-to-doctor variants.' },
            { term: 'EHR (Electronic Health Record)', definition: 'A digital record of a patient\'s health information stored and exchanged in a structured, interoperable format.' },
          ],
          references: [
            { title: 'ABDM Health Data Management Policy', source: 'National Health Authority', year: '2020' },
            { title: 'Telemedicine Practice Guidelines 2020', source: 'Ministry of Health and Family Welfare', year: '2020' },
            { title: 'DISHA (Digital Information Security in Healthcare Act) Draft', source: 'Ministry of Health and Family Welfare', year: '2018' },
            { title: 'DPDPA 2023 Sections 16 and 8(5)', source: 'Government of India', year: '2023' },
          ],
        },
      ],
    },

    // ============================================================
    // CHAPTER 3: PRACTICAL CROSS-BORDER COMPLIANCE
    // ============================================================
    {
      id: 3,
      title: 'Practical Cross-Border Compliance',
      lessons: [
        // -------- LESSON 10 --------
        {
          id: 10,
          title: 'Building a Cross-Border Data Transfer Map',
          duration: '20 min',
          type: 'exercise',
          description:
            'Hands-on exercise in building a Cross-Border Data Transfer Map — the foundational artefact for Section 16 compliance — covering discovery, classification, documentation, and ongoing maintenance.',
          content:
            'A Cross-Border Data Transfer Map (CBDTM) is the foundational artefact for Section 16 compliance. It is a comprehensive inventory of every cross-border data flow involving an organisation\'s personal data — including storage, processing, and access. Without a CBDTM, an organisation cannot know which transfers would be affected by a Section 16 notification. This lesson walks through the construction of a CBDTM, with a worked example for an Indian SaaS company.',
          learningObjectives: [
            'Conduct a cross-border data flow discovery exercise',
            'Document each transfer with the required metadata fields',
            'Classify transfers by criticality and risk',
            'Maintain the CBDTM as living documentation',
          ],
          keyTakeaways: [
            'A CBDTM must capture: data category, destination, recipient, lawful basis, contract, volume, criticality, and remediation plan.',
            'Discovery should combine technical (network flow analysis, cloud inventory) and procedural (vendor survey, contract review) methods.',
            'The CBDTM must be reviewed at least quarterly and on any material change in operations.',
            'Remediation plans should identify alternative destinations and repatriation timelines.',
            'The CBDTM is the primary evidence for the Data Protection Board that the organisation is in control of its cross-border flows.',
          ],
          sections: [
            {
              id: 'sec-1',
              title: 'The CBDTM Schema',
              content: [
                {
                  type: 'paragraph',
                  content:
                    'A CBDTM is a structured table or database with one row per cross-border data flow. The minimum schema has 12 fields. Larger organisations may add more fields (e.g., sub-processor chains, transfer mechanism under GDPR for EU data, encryption details).',
                },
                {
                  type: 'table',
                  headers: ['Field', 'Description', 'Example'],
                  rows: [
                    ['Flow ID', 'Unique identifier', 'CB-2024-001'],
                    ['Data Category', 'Type of personal data', 'Customer KYC, employee records, payment data'],
                    ['Volume', 'Approximate number of records', '~1 lakh records'],
                    ['Source', 'Where data is collected', 'Indian customers via web form'],
                    ['Destination Country', 'Country of storage/processing/access', 'United States'],
                    ['Recipient', 'Entity receiving the data', 'Salesforce (CRM vendor)'],
                    ['Recipient Type', 'Controller / Processor / Joint Controller', 'Processor'],
                    ['Lawful Basis', 'DPDPA Section 7 basis', 'Consent (Section 7(2)(a))'],
                    ['Contract Reference', 'DPA reference', 'Salesforce DPA dated 1 Jan 2024'],
                    ['Sectoral Rule Override', 'RBI / IRDAI / SEBI / ABDM', 'None'],
                    ['Criticality', 'Tier 1 / 2 / 3', 'Tier 1 (business critical)'],
                    ['Remediation Plan', 'Action if destination is blacklisted', 'Switch to Salesforce India (Mumbai) within 30 days'],
                  ],
                },
                {
                  type: 'callout',
                  content:
                    'The schema should be reviewed annually. As regulatory expectations evolve (e.g., DPDPA Rules under Section 16 may add specific documentation requirements), the schema should be updated to match.',
                  calloutType: 'tip',
                },
              ],
            },
            {
              id: 'sec-2',
              title: 'Discovery: Technical and Procedural Methods',
              content: [
                {
                  type: 'paragraph',
                  content:
                    'Building the CBDTM requires a combination of technical and procedural discovery methods. Technical methods analyse actual data flows; procedural methods analyse contracts and declared practices. Both are necessary — neither is sufficient alone.',
                },
                {
                  type: 'heading',
                  content: 'Technical Discovery Methods',
                },
                {
                  type: 'list',
                  content: 'Technical discovery methods',
                  items: [
                    'Network flow analysis (NetFlow, sFlow) — identify outbound connections to foreign IPs.',
                    'Cloud provider inventory — list all regions in use across AWS, Azure, GCP.',
                    'DNS logs — identify foreign-hosted domains accessed by employees.',
                    'DLP (Data Loss Prevention) tools — scan for personal data leaving the network.',
                    'IAM logs — identify foreign-based administrators accessing systems.',
                    'CDN configuration — review edge location configurations.',
                  ],
                },
                {
                  type: 'heading',
                  content: 'Procedural Discovery Methods',
                },
                {
                  type: 'list',
                  content: 'Procedural discovery methods',
                  items: [
                    'Vendor survey — questionnaire to all vendors handling personal data.',
                    'Contract review — DPA review for storage location commitments.',
                    'Procurement records — identify all contracts with foreign vendors.',
                    'Employee survey — identify shadow IT (personal cloud accounts, unauthorised SaaS).',
                    'Business process review — map each business process to its data flows.',
                  ],
                },
                {
                  type: 'callout',
                  content:
                    'Shadow IT — unauthorised use of foreign SaaS by employees (e.g., marketing team using Mailchimp, design team using Figma, sales team using Notion) — is a major source of unknown cross-border transfers. Include shadow IT discovery in the CBDTM.',
                  calloutType: 'warning',
                },
              ],
            },
            {
              id: 'sec-3',
              title: 'Classification and Risk Scoring',
              content: [
                {
                  type: 'paragraph',
                  content:
                    'Once the CBDTM is populated, classify each flow by criticality (Tier 1, 2, 3) and risk (low, medium, high). Criticality reflects business impact of disruption; risk reflects data sensitivity, destination country, and existing safeguards. This classification drives the frequency of review and the depth of remediation planning.',
                },
                {
                  type: 'heading',
                  content: 'Criticality Tiers',
                },
                {
                  type: 'list',
                  content: 'Criticality tiers for CBDTM',
                  items: [
                    'Tier 1 (Business Critical): Operations would stall within 24 hours if the flow were interrupted — e.g., primary CRM, payment processor, cloud hosting.',
                    'Tier 2 (Important): Operations can continue for 30 days with workarounds — e.g., marketing automation, HR system.',
                    'Tier 3 (Routine): Operations can continue indefinitely with workarounds — e.g., analytics tool, team collaboration tool.',
                  ],
                },
                {
                  type: 'heading',
                  content: 'Risk Score',
                },
                {
                  type: 'paragraph',
                  content:
                    'Risk score = (Data Sensitivity × Destination Risk) / Existing Safeguards. Data Sensitivity: 1 (low — business contact data) to 5 (high — biometric, health, financial). Destination Risk: 1 (low — country with strong data protection law) to 5 (high — country with weak law or surveillance concerns). Existing Safeguards: 1 (no encryption / no DPA) to 5 (encryption, DPDPA-compliant DPA, audit rights, sub-processor controls).',
                },
              ],
            },
            {
              id: 'sec-4',
              title: 'Maintaining the CBDTM',
              content: [
                {
                  type: 'paragraph',
                  content:
                    'The CBDTM is a living document. It must be reviewed: (a) quarterly for Tier 1 flows, (b) semi-annually for Tier 2, (c) annually for Tier 3, (d) on any material change in operations (new product, new vendor, new market), and (e) on any Section 16 notification by the Government. Each review should re-confirm the data, the destination, the contract, and the remediation plan.',
                },
                {
                  type: 'heading',
                  content: 'Worked Example — Indian SaaS Company',
                },
                {
                  type: 'example',
                  content:
                    'An Indian SaaS company (Zyllo Technologies, 200 employees, 50,000 customers) builds its CBDTM. Discovery reveals: AWS Mumbai (ap-south-1) for primary data; AWS Singapore (ap-southeast-1) for DR; Salesforce US for CRM; HubSpot US for marketing; Zendesk EU for support; Slack US for internal collaboration; Figma US for design; Notion US for documentation; GitHub US for source code; AWS Virginia for AI/ML training. Total: 10 distinct cross-border flows. Criticality: Tier 1 — AWS (primary + AI), Salesforce; Tier 2 — HubSpot, Zendesk, Slack; Tier 3 — Figma, Notion, GitHub. The DPO maintains a remediation plan for each: e.g., if US is blacklisted, Salesforce moves to Salesforce India (Mumbai), AWS Virginia AI moves to AWS Mumbai (retrained model), etc.',
                },
                {
                  type: 'callout',
                  content:
                    'A CBDTM is the single most important artefact for Section 16 compliance. Without it, an organisation cannot demonstrate that it has control over its cross-border data flows. Build it before the first DPDPA audit.',
                  calloutType: 'important',
                },
              ],
            },
          ],
          glossary: [
            { term: 'Cross-Border Data Transfer Map (CBDTM)', definition: 'A structured inventory of every cross-border data flow involving an organisation\'s personal data.' },
            { term: 'Shadow IT', definition: 'Unauthorised IT systems and SaaS tools used by employees without formal approval, often a source of unknown cross-border transfers.' },
            { term: 'Criticality Tier', definition: 'A classification of a data flow by the business impact of its disruption — Tier 1 (business critical), Tier 2 (important), Tier 3 (routine).' },
            { term: 'Data Loss Prevention (DLP)', definition: 'A class of security tools that scan network traffic and endpoints for personal data and enforce policies preventing unauthorised exfiltration.' },
          ],
          references: [
            { title: 'NIST SP 800-92 Guide to Computer Security Log Management', source: 'National Institute of Standards and Technology', year: '2006' },
            { title: 'IAPP Cross-Border Transfer Mapping Toolkit', source: 'International Association of Privacy Professionals', year: '2024' },
            { title: 'DPDPA 2023 Section 16 — Transfer Rules', source: 'Government of India', year: '2023' },
          ],
        },

        // -------- LESSON 11 --------
        {
          id: 11,
          title: 'Drafting International DPA Clauses',
          duration: '22 min',
          type: 'exercise',
          description:
            'Hands-on exercise in drafting the key clauses of an international Data Processing Agreement that satisfies DPDPA Section 8(3), Section 16 contingency, and sectoral rules.',
          content:
            'Drafting an international DPA is the core legal skill for cross-border compliance. A poorly drafted DPA leaves the Data Fiduciary liable for the Processor\'s breach without indemnity. A well-drafted DPA shifts risk appropriately, imposes operational standards, and creates a clear repatriation path. This lesson covers the mandatory and recommended clauses, with drafting tips and red flags to watch for.',
          learningObjectives: [
            'Draft the mandatory Section 8(3) clauses',
            'Draft the Section 16 contingency (repatriation) clause',
            'Draft sub-processor, audit, breach, and deletion clauses',
            'Identify and reject common vendor push-back clauses',
          ],
          keyTakeaways: [
            'Every DPA must include subject-matter, instructions, confidentiality, security, sub-processor, breach, audit, deletion, and termination clauses.',
            'The Section 16 contingency clause is critical — it requires the Processor to repatriate or delete data within 30 days if the destination country is notified as restricted.',
            'Audit rights must include both on-site and remote audit options, plus the right to commission third-party audits at the Processor\'s cost.',
            'Sub-processor lists must be public, with prior notice of changes and the right to object.',
            'Breach notification must align with DPDPA\'s "without undue delay" and SEBI/RBI\'s 6-hour requirements where applicable.',
          ],
          sections: [
            {
              id: 'sec-1',
              title: 'The Mandatory Clause Set',
              content: [
                {
                  type: 'paragraph',
                  content:
                    'A DPDPA-compliant DPA must contain the following mandatory clauses, derived from Section 8(3) and related provisions. Each clause should be drafted with care — generic templates are a starting point, not the final word.',
                },
                {
                  type: 'table',
                  headers: ['Clause', 'Mandatory/Recommended', 'DPDPA Source'],
                  rows: [
                    ['Subject matter, duration, nature, purpose of processing', 'Mandatory', 'Section 8(3)'],
                    ['Type of personal data and Data Principal categories', 'Mandatory', 'Section 8(3)'],
                    ['Processor obligations equivalent to Fiduciary\'s', 'Mandatory', 'Section 8(3)'],
                    ['Processing only on documented instructions', 'Mandatory', 'Section 8(3)'],
                    ['Confidentiality obligations on Processor personnel', 'Mandatory', 'Section 8(5)'],
                    ['Reasonable security safeguards (ISO 27001, SOC 2, AES-256, TLS 1.2+)', 'Mandatory', 'Section 8(5)'],
                    ['Sub-processor authorisation and control', 'Mandatory', 'Section 8(3)'],
                    ['Assistance with Data Principal rights requests', 'Mandatory', 'Section 11'],
                    ['Breach notification within 72 hours', 'Mandatory', 'Section 8(6)'],
                    ['Data Protection Impact Assessment assistance', 'Recommended', 'Section 10 (SDFs)'],
                    ['Audit rights — on-site and remote', 'Mandatory', 'Section 8(3)'],
                    ['Deletion or return on termination', 'Mandatory', 'Section 8(7)'],
                    ['Section 16 contingency — repatriation on notification', 'Mandatory', 'Section 16'],
                    ['Indemnity and liability allocation', 'Recommended', 'Common law'],
                    ['Governing law (India) and jurisdiction', 'Mandatory', 'Practical'],
                  ],
                },
              ],
            },
            {
              id: 'sec-2',
              title: 'Drafting the Section 16 Contingency Clause',
              content: [
                {
                  type: 'paragraph',
                  content:
                    'The Section 16 contingency clause is the most important DPDPA-specific clause. It addresses the scenario where the destination country is notified as restricted by the Central Government. The clause must specify the Processor\'s obligations, the timeline for repatriation or deletion, and the cost allocation.',
                },
                {
                  type: 'heading',
                  content: 'Drafted Clause Example',
                },
                {
                  type: 'paragraph',
                  content:
                    '"Section 16 Contingency: In the event that the Central Government of India issues a notification under Section 16 of the DPDPA restricting transfer of personal data to the country or territory where the Processor stores or processes the Personal Data, the Processor shall, at the Data Fiduciary\'s election and within thirty (30) calendar days of such notification: (a) repatriate all Personal Data to an India-based storage location approved by the Data Fiduciary; or (b) delete all Personal Data and provide a written certification of deletion. The Processor shall bear the reasonable costs of repatriation or deletion up to [agreed cap, e.g., USD 50,000]. The Processor shall provide the Data Fiduciary with a current Transition Plan within five (5) business days of the notification."',
                },
                {
                  type: 'callout',
                  content:
                    'Common vendor push-back: "best efforts" instead of "shall". Reject this — best efforts is unenforceable. The clause must impose a hard obligation with a deadline.',
                  calloutType: 'warning',
                },
              ],
            },
            {
              id: 'sec-3',
              title: 'Sub-processor, Audit, and Breach Clauses',
              content: [
                {
                  type: 'paragraph',
                  content:
                    'The sub-processor clause must require prior written authorisation, a public sub-processor list, advance notice of changes (typically 30 days), and the right to object. The audit clause must include both on-site and remote audit options, the right to commission third-party audits, and cost allocation. The breach clause must specify notification within 72 hours, content of the notification, and cooperation in investigation.',
                },
                {
                  type: 'heading',
                  content: 'Sub-processor Clause Skeleton',
                },
                {
                  type: 'paragraph',
                  content:
                    '"Sub-processors: The Processor shall not engage any sub-processor to process Personal Data without the prior written authorisation of the Data Fiduciary. The Processor shall maintain a current list of sub-processors at [URL], and shall provide at least thirty (30) days\' advance notice of any addition or replacement. The Data Fiduciary may object to a sub-processor on reasonable grounds relating to data protection. The Processor shall remain fully liable for the acts and omissions of each sub-processor as if they were the Processor\'s own."',
                },
                {
                  type: 'heading',
                  content: 'Audit Clause Skeleton',
                },
                {
                  type: 'paragraph',
                  content:
                    '"Audit Rights: The Data Fiduciary may, at its own cost or at the Processor\'s cost in case of non-compliance, audit the Processor\'s compliance with this DPA no more than once per year, upon thirty (30) days\' written notice. Audits may be conducted on-site or remotely, by the Data Fiduciary\'s internal team or by an independent third-party auditor bound by confidentiality. The Processor shall provide reasonable cooperation, access to records, and assistance. The Processor shall remediate any non-conformities within sixty (60) days."',
                },
                {
                  type: 'heading',
                  content: 'Breach Notification Clause Skeleton',
                },
                {
                  type: 'paragraph',
                  content:
                    '"Breach Notification: The Processor shall notify the Data Fiduciary of any Personal Data Breach without undue delay and in any event within seventy-two (72) hours of becoming aware of the breach. The notification shall include: (a) the nature of the breach; (b) the categories and approximate number of Data Principals affected; (c) the likely consequences; (d) the measures taken or proposed; (e) the name and contact details of the Processor\'s breach response contact. The Processor shall cooperate fully with the Data Fiduciary in notifying the Data Protection Board and affected Data Principals."',
                },
              ],
            },
            {
              id: 'sec-4',
              title: 'Red Flags and Push-back Patterns',
              content: [
                {
                  type: 'paragraph',
                  content:
                    'International vendors — especially US-based SaaS providers — often push back on certain clauses. Recognising these push-back patterns and responding firmly is essential to maintaining DPDPA compliance.',
                },
                {
                  type: 'table',
                  headers: ['Vendor Push-back', 'Why It\'s a Problem', 'Recommended Response'],
                  rows: [
                    ['"Best efforts" instead of "shall"', 'Unenforceable', 'Insist on "shall" with deadline'],
                    ['"Notice-only" for sub-processors', 'No right to object', 'Insist on prior authorisation and objection right'],
                    ['"SOC 2 report" in lieu of audit rights', 'SOC 2 is not a substitute for direct audit', 'Accept SOC 2 for routine years, require direct audit every 3 years'],
                    ['"Worldwide" data residency', 'No residency commitment', 'Insist on India-only or specific country'],
                    ['"Indefinite retention" for security logs', 'Section 8(7) requires deletion', 'Cap retention at 12 months for security logs'],
                    ['Limitation of liability excludes data breach', 'Shifts all risk to Fiduciary', 'Carve out data breach from liability cap'],
                    ['"Notice and cure" for breach notification', '72-hour clock is lost', 'Insist on 72-hour notification regardless of cure'],
                    ['"US courts" for jurisdiction', 'Indian Data Principals cannot enforce', 'Insist on Indian courts and Indian law'],
                  ],
                },
                {
                  type: 'callout',
                  content:
                    'The single biggest source of DPDPA non-compliance is not weak drafting — it is the failure to negotiate. A template DPA, no matter how well drafted, is useless if the vendor\'s redlines gut the key clauses.',
                  calloutType: 'important',
                },
                {
                  type: 'example',
                  content:
                    'A Bengaluru fintech signs HubSpot\'s standard DPA without negotiating the Section 16 contingency clause. Two years later, the Government notifies the US as restricted. HubSpot\'s DPA contains only a "best efforts" repatriation clause — the company cannot enforce compliance. It faces a ₹250 crore penalty under Section 33. The fix: never accept "best efforts" — always insist on a hard "shall" obligation with a 30-day deadline.',
                },
              ],
            },
          ],
          glossary: [
            { term: 'Data Processing Agreement (DPA)', definition: 'A written contract between a Data Fiduciary and a Data Processor setting out the terms of processing, required by DPDPA Section 8(3).' },
            { term: 'Section 16 Contingency Clause', definition: 'A DPA clause requiring the Processor to repatriate or delete data within a defined period if the destination country is notified as restricted under DPDPA Section 16.' },
            { term: 'Sub-processor Authorisation', definition: 'A contractual requirement that the Processor obtain prior written approval before engaging any third party to process personal data on its behalf.' },
            { term: 'Audit Right', definition: 'A contractual right of the Data Fiduciary to audit the Processor\'s compliance, on-site or remotely, by its own team or a third party.' },
          ],
          references: [
            { title: 'DPDPA 2023 Sections 8(3), 8(5), 8(6), 8(7), 16, 33', source: 'Government of India', year: '2023' },
            { title: 'IAPP DPA Drafting Guide', source: 'International Association of Privacy Professionals', year: '2024' },
            { title: 'ISO/IEC 27001 — Information Security Management', source: 'International Organization for Standardization', year: '2022' },
          ],
        },

        // -------- LESSON 12 --------
        {
          id: 12,
          title: 'Vendor Due Diligence for Foreign Cloud Providers',
          duration: '20 min',
          type: 'exercise',
          description:
            'Hands-on exercise in conducting due diligence on foreign cloud providers — AWS, Azure, GCP — for DPDPA Section 16 compliance, including a practical questionnaire and scoring rubric.',
          content:
            'Choosing a foreign cloud provider is one of the highest-stakes decisions an Indian Data Fiduciary makes. The wrong choice creates years of compliance debt; the right choice enables scalability while maintaining regulatory compliance. This lesson walks through a structured due diligence process for foreign cloud providers, with a worked example for an Indian SaaS company choosing between AWS US-East and an India region.',
          learningObjectives: [
            'Conduct structured due diligence on AWS, Azure, and GCP',
            'Score cloud providers on a standard rubric',
            'Identify the trade-offs between cost, latency, and compliance',
            'Make a defensible cloud region selection decision',
          ],
          keyTakeaways: [
            'Due diligence should cover: certifications, data residency, sub-processors, breach history, audit access, support model, and exit options.',
            'AWS, Azure, and GCP all have India regions, but their service coverage varies — verify availability of required services.',
            'The cheapest region is rarely the most cost-effective when compliance overhead is included.',
            'Multi-cloud strategies can reduce concentration risk but increase operational complexity.',
            'Document the due diligence — the Data Protection Board will ask for evidence that the choice was informed.',
          ],
          sections: [
            {
              id: 'sec-1',
              title: 'The Cloud Due Diligence Questionnaire',
              content: [
                {
                  type: 'paragraph',
                  content:
                    'A structured questionnaire standardises the due diligence process. The questionnaire below covers 10 dimensions, each scored 1–5, for a maximum score of 50. Scores below 35 should generally be rejected; 35–40 require additional safeguards; 40+ are acceptable. The questionnaire should be supplemented by reading the provider\'s compliance reports (SOC 2 Type II, ISO 27001, ISO 27701).',
                },
                {
                  type: 'table',
                  headers: ['Dimension', 'Question', 'Score (1–5)'],
                  rows: [
                    ['Certifications', 'Does the provider hold ISO 27001, ISO 27701, SOC 2 Type II, PCI DSS?'],
                    ['India Region', 'Does the provider have an India region with the required services?'],
                    ['Data Residency Controls', 'Are residency controls configurable and verifiable?'],
                    ['Sub-processors', 'Is the sub-processor list public and stable?'],
                    ['Breach History', 'Has the provider had any major breach in the last 5 years?'],
                    ['Audit Access', 'Does the provider allow direct audit or third-party audit?'],
                    ['Government Access', 'What is the destination country\'s government access regime?'],
                    ['DPDPA-readiness', 'Does the provider offer a DPDPA addendum?'],
                    ['Exit / Portability', 'Can data be exported in standard format and deleted on exit?'],
                    ['Support Model', 'Is 24/7 support available with India-based engineers?'],
                  ],
                },
                {
                  type: 'callout',
                  content:
                    'Government access is often the most overlooked dimension. US-based providers are subject to FISA Section 702 and EO 12333; Chinese providers to the China Cybersecurity Law and PIPL; Indian providers to IT Act Section 69. Each has different implications.',
                  calloutType: 'warning',
                },
              ],
            },
            {
              id: 'sec-2',
              title: 'Scoring AWS, Azure, GCP — A Worked Example',
              content: [
                {
                  type: 'paragraph',
                  content:
                    'A common Indian SaaS scenario: choose between AWS US-East (cheaper, more services) and AWS Mumbai (India region, more compliant). The scoring below shows how this decision should be made.',
                },
                {
                  type: 'table',
                  headers: ['Dimension', 'AWS US-East', 'AWS Mumbai (ap-south-1)'],
                  rows: [
                    ['Certifications', '5 (all major)', '5 (all major)'],
                    ['India Region', '0 (not India)', '5 (India)'],
                    ['Data Residency Controls', '4 (configurable)', '5 (India by default)'],
                    ['Sub-processors', '4', '4'],
                    ['Breach History', '4 (no major breach)', '4 (no major breach)'],
                    ['Audit Access', '3 (limited)', '3 (limited)'],
                    ['Government Access', '2 (US CLOUD Act)', '4 (India IT Act)'],
                    ['DPDPA-readiness', '3 (DPA available)', '5 (DPA + India commitments)'],
                    ['Exit / Portability', '4', '4'],
                    ['Support Model', '4 (24/7)', '5 (24/7 India-based)'],
                    ['Total', '33 / 50', '44 / 50'],
                  ],
                },
                {
                  type: 'paragraph',
                  content:
                    'AWS US-East scores 33 — below the 35 threshold, requiring additional safeguards (e.g., encryption with India-held keys, pseudonymisation). AWS Mumbai scores 44 — comfortably acceptable. Despite AWS US-East being 20–30% cheaper, the compliance overhead of using it (encryption management, transfer impact assessment, Section 16 contingency planning) often outweighs the cost saving.',
                },
                {
                  type: 'callout',
                  content:
                    'For Indian businesses, AWS Mumbai, Azure India, or GCP India should be the default choice. Other regions are used only when a specific service is not available in India, and only with supplementary safeguards.',
                  calloutType: 'tip',
                },
              ],
            },
            {
              id: 'sec-3',
              title: 'Service Availability and the Multi-Region Problem',
              content: [
                {
                  type: 'paragraph',
                  content:
                    'A practical complication: not all cloud services are available in India regions. AWS Mumbai lacks some newer services (e.g., certain AI/ML services, AWS Ground Station). Azure India lacks some preview services. GCP India has limited BigQuery ML features. This forces a trade-off: use a foreign region for the service (with compliance overhead) or use an alternative service in India (with feature limitations).',
                },
                {
                  type: 'heading',
                  content: 'Decision Framework for Service Availability',
                },
                {
                  type: 'list',
                  content: 'Decision framework when a service is not available in India',
                  items: [
                    'Step 1: Identify alternative India-available services that meet the functional requirement.',
                    'Step 2: If no alternative exists, use the foreign service with pseudonymised data (no direct identifiers).',
                    'Step 3: If pseudonymisation is insufficient, use the foreign service with encryption and India-held keys.',
                    'Step 4: If encryption is insufficient, escalate to DPO and Legal for case-by-case approval.',
                    'Step 5: Document the decision in the Cross-Border Data Transfer Map.',
                  ],
                },
                {
                  type: 'example',
                  content:
                    'An Indian e-commerce company wants to use AWS Personalize (a recommendation engine) on customer browsing data. AWS Personalize is available in ap-south-1 Mumbai. Decision: use AWS Personalize in Mumbai — no cross-border transfer. If the company wanted to use AWS Ground Station (satellite data) — not available in Mumbai — it would need to use a US region, but only for satellite data (not personal data), so DPDPA Section 16 would not apply.',
                },
              ],
            },
            {
              id: 'sec-4',
              title: 'Case Study: Indian SaaS Company Using AWS US-East',
              content: [
                {
                  type: 'paragraph',
                  content:
                    'Let us consolidate the lessons with a comprehensive case study. Zyllo Technologies is a Bengaluru-based SaaS company providing HR analytics software to Indian enterprises. Founded in 2020, the company has 200 employees, 50,000 customers, and processes personal data of approximately 2 million Indian employees of its customers. The company currently uses AWS US-East (Virginia) as its primary cloud region, chosen in 2020 for cost reasons (35% cheaper than Mumbai).',
                },
                {
                  type: 'heading',
                  content: 'Current State Assessment',
                },
                {
                  type: 'paragraph',
                  content:
                    'In 2024, Zyllo\'s DPO conducts a DPDPA readiness assessment. Findings: (a) all customer data — including personal data of 2 million Data Principals — is stored in AWS US-East Virginia; (b) no DPDPA-specific DPA with AWS; (c) no Section 16 contingency plan; (d) no Transfer Impact Assessment for US storage; (e) backup and DR also in US-East; (f) 8 Tier 1 sub-processors (Salesforce, HubSpot, etc.) also storing data in US. The DPO estimates the compliance gap as high-risk, with potential exposure to ₹250 crore penalty under Section 33.',
                },
                {
                  type: 'heading',
                  content: 'Remediation Plan',
                },
                {
                  type: 'list',
                  content: 'Zyllo\'s remediation plan',
                  items: [
                    'Phase 1 (Months 1–3): Migrate primary data from AWS US-East to AWS Mumbai ap-south-1. Use AWS DataSync for migration. Re-encrypt with KMS keys in Mumbai.',
                    'Phase 2 (Months 1–3): Execute DPDPA-compliant DPAs with all 8 Tier 1 sub-processors, including Section 16 contingency clauses.',
                    'Phase 3 (Months 2–4): Migrate DR to AWS Mumbai ap-south-1 or Hyderabad ap-south-2 (in-country DR).',
                    'Phase 4 (Months 3–6): Conduct Transfer Impact Assessments for residual US transfers (e.g., analytics, support).',
                    'Phase 5 (Months 4–6): Build Cross-Border Data Transfer Map with quarterly review cadence.',
                    'Phase 6 (Months 6–12): Negotiate with sub-processors to move to India regions where possible (Salesforce, HubSpot).',
                  ],
                },
                {
                  type: 'callout',
                  content:
                    'The Zyllo remediation costs approximately ₹2.5 crore (data migration, DPA negotiation, TIA consulting). This is far less than the ₹250 crore potential penalty. The case study illustrates that proactive remediation is dramatically cheaper than post-breach enforcement.',
                  calloutType: 'important',
                },
                {
                  type: 'example',
                  content:
                    'At the end of the 12-month remediation, Zyllo has: (a) primary data in AWS Mumbai; (b) DR in AWS Hyderabad; (c) DPDPA-compliant DPAs with all sub-processors; (d) a current Cross-Border Data Transfer Map; (e) TIAs for residual transfers. The DPO certifies the company DPDPA-compliant. The company\'s marketing team uses this certification as a competitive differentiator — "DPDPA-compliant by design" — winning enterprise deals that the previous non-compliant state would have lost.',
                },
              ],
            },
          ],
          glossary: [
            { term: 'Due Diligence Questionnaire', definition: 'A structured set of questions used to assess a vendor\'s compliance posture, certifications, and risk profile before engagement.' },
            { term: 'Transfer Impact Assessment (TIA)', definition: 'A documented analysis of the legal regime in a destination country, assessing whether it provides effective protection for transferred personal data.' },
            { term: 'Service Availability', definition: 'The presence of a specific cloud service in a chosen cloud region — a practical constraint on data residency choices.' },
            { term: 'Remediation Plan', definition: 'A documented sequence of actions to bring a non-compliant data flow or vendor relationship into compliance.' },
          ],
          references: [
            { title: 'AWS Cloud Compliance Reports', source: 'Amazon Web Services', year: '2024' },
            { title: 'Microsoft Azure Compliance Offerings', source: 'Microsoft', year: '2024' },
            { title: 'Google Cloud Compliance Reports', source: 'Google Cloud', year: '2024' },
            { title: 'DPDPA 2023 Section 33 — Penalties', source: 'Government of India', year: '2023' },
          ],
        },
      ],
    },
  ],

  // ===== MODULE ASSIGNMENTS =====
  assignments: [
    {
      id: 1,
      title: 'Cross-Border Data Transfer Map',
      description:
        'Build a complete Cross-Border Data Transfer Map for your organisation (or a hypothetical Indian company with at least 50 employees). Identify all cross-border flows, classify by criticality and risk, and document remediation plans.',
      deliverables: [
        'A populated CBDTM with at least 10 distinct cross-border flows',
        'Each flow documented with all 12 mandatory fields',
        'Criticality and risk score for each flow',
        'Remediation plan for at least 3 Tier 1 flows',
        'Quarterly review cadence and named owner',
      ],
    },
    {
      id: 2,
      title: 'International DPA Drafting Exercise',
      description:
        'Draft a complete DPDPA-compliant Data Processing Agreement for an international SaaS vendor. Include all mandatory clauses, the Section 16 contingency clause, and respond to three vendor push-backs with negotiation responses.',
      deliverables: [
        'Complete DPA with all mandatory clauses',
        'Section 16 contingency clause with 30-day repatriation obligation',
        'Three vendor push-back scenarios with responses',
        'Audit rights and sub-processor clauses',
        'Breach notification clause aligned with 72-hour requirement',
      ],
    },
    {
      id: 3,
      title: 'Cloud Vendor Due Diligence Report',
      description:
        'Conduct due diligence on a foreign cloud provider (AWS, Azure, or GCP) and produce a recommendation report. Compare two regions (one India, one foreign) on the 10-dimension scoring rubric.',
      deliverables: [
        'Completed 10-dimension questionnaire for both regions',
        'Scoring sheet with total scores',
        'Comparison table',
        'Recommendation with rationale',
        'Compliance gap analysis if the foreign region is chosen',
      ],
    },
  ],

  // ===== MODULE QUIZ =====
  quiz: {
    questions: [
      {
        question: 'Under DPDPA Section 16, what is the default rule for cross-border transfers?',
        options: ['Transfer prohibited unless permitted', 'Transfer permitted unless restricted by notification', 'Transfer permitted only with Government approval', 'Transfer permitted only to adequacy-decision countries'],
        correct: 1,
        explanation: 'Section 16 permits transfer to any country except those notified as restricted by the Central Government — a blacklist approach.',
      },
      {
        question: 'Which RBI circular requires payment system data to be stored only in India?',
        options: ['RBI 6 April 2018 Storage of Payment System Data Circular', 'RBI 2019 Tokenisation Guidelines', 'RBI 2020 Payment Aggregator Guidelines', 'RBI 2022 Digital Lending Guidelines'],
        correct: 0,
        explanation: 'The RBI Circular dated 6 April 2018 requires all payment system operators to store end-to-end payment data only in India.',
      },
      {
        question: 'What is the maximum penalty under DPDPA for breach of cross-border transfer obligations (Section 33)?',
        options: ['₹50 crore', '₹100 crore', '₹200 crore', '₹250 crore'],
        correct: 3,
        explanation: 'Section 33 prescribes a maximum penalty of ₹250 crore for breach of cross-border transfer obligations under Section 16.',
      },
      {
        question: 'Which of the following is NOT an approved cloud provider for IRDAI-regulated insurers?',
        options: ['AWS India region', 'Microsoft Azure India region', 'Google Cloud India region', 'Alibaba Cloud (no India region)'],
        correct: 3,
        explanation: 'Alibaba Cloud does not have an India region and is therefore not IRDAI-approved for storing insurance customer data in India.',
      },
      {
        question: 'Under the RBI April 2018 Circular, what is the time limit for bringing foreign-leg data back to India?',
        options: ['24 hours or the next working day in India, whichever is earlier', '72 hours', '7 days', '30 days'],
        correct: 0,
        explanation: 'The RBI Circular requires data processed outside India to be brought back within 24 hours or by the next working day in India, whichever is earlier.',
      },
      {
        question: 'The Schrems II judgment of 2020 invalidated which data transfer framework?',
        options: ['EU SCCs', 'EU-US Privacy Shield', 'Binding Corporate Rules', 'Adequacy for Japan'],
        correct: 1,
        explanation: 'Schrems II (Case C-311/18) invalidated the EU-US Privacy Shield and required Transfer Impact Assessments for SCC-based transfers.',
      },
      {
        question: 'Which Article of the China PIPL governs cross-border transfers?',
        options: ['Article 16', 'Article 28', 'Article 38', 'Article 45'],
        correct: 2,
        explanation: 'PIPL Article 38 provides three mechanisms for cross-border transfers: CAC security assessment, certification, or standard contract.',
      },
      {
        question: 'How many pillars does the SEBI Cybersecurity and Resilience Framework (CSCRF) 2024 have?',
        options: ['4', '5', '6', '7'],
        correct: 2,
        explanation: 'CSCRF 2024 has six pillars: governance, data localisation, cloud adoption, incident response, third-party risk, and continuous monitoring.',
      },
      {
        question: 'What is the breach notification window under SEBI CSCRF?',
        options: ['6 hours', '24 hours', '48 hours', '72 hours'],
        correct: 0,
        explanation: 'SEBI CSCRF requires breach reporting to CERT-In and SEBI within 6 hours of detection — tighter than DPDPA\'s general requirement.',
      },
      {
        question: 'Under the ABDM Health Data Management Policy, what is the breach notification window?',
        options: ['6 hours', '24 hours', '48 hours', '72 hours'],
        correct: 3,
        explanation: 'The ABDM Policy requires breach notification to the National Health Authority within 72 hours.',
      },
      {
        question: 'Which DPDPA section requires Data Fiduciaries to be liable for their Data Processors?',
        options: ['Section 7', 'Section 8(3)', 'Section 11', 'Section 16'],
        correct: 1,
        explanation: 'Section 8(3) of the DPDPA makes the Data Fiduciary liable for the conduct of its Data Processors when engaged to process personal data on its behalf.',
      },
      {
        question: 'What is the recommended repatriation timeline in a Section 16 contingency clause?',
        options: ['7 days', '15 days', '30 days', '90 days'],
        correct: 2,
        explanation: 'A 30-day repatriation timeline is the recommended standard in Section 16 contingency clauses, balancing operational feasibility with regulatory compliance.',
      },
      {
        question: 'Which of the following is a blacklisted approach regulatory model?',
        options: ['GDPR adequacy', 'DPDPA Section 16', 'China PIPL security assessment', 'Russian data localisation'],
        correct: 1,
        explanation: 'DPDPA Section 16 uses a blacklist approach — transfers are permitted unless the destination country is specifically notified as restricted.',
      },
      {
        question: 'What does the RBI tokenisation mandate (effective 1 October 2022) require?',
        options: ['Storage of full card numbers by merchants', 'Storage of card tokens only by merchants', 'No storage of any card data', 'Storage of CVV by merchants'],
        correct: 1,
        explanation: 'From 1 October 2022, merchants and payment aggregators cannot store actual card data — only tokens issued by the card-issuing bank.',
      },
      {
        question: 'Under Schrems II, what is the role of supplementary measures?',
        options: ['They replace SCCs', 'They bridge gaps in destination country protection', 'They exempt transfers from GDPR', 'They are voluntary'],
        correct: 1,
        explanation: 'Supplementary measures (e.g., encryption, pseudonymisation) are identified during a TIA to bridge any gap between SCC guarantees and the destination country\'s actual protection level.',
      },
    ],
    passingScore: 80,
  },
};