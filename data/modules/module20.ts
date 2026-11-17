// data/modules/module20.ts

import { Module } from '@/app/types/course';

export const module20: Module = {
  id: 20,
  title: 'Master Capstone Project',
  description:
    'The capstone project consolidates every concept from Modules 1-19 into a single, end-to-end DPDPA 2023 compliance build for a hypothetical Indian health-tech company, HealthTech Innovations Pvt Ltd. You will produce a complete records-of-processing inventory, a 90-day compliance roadmap, a 7-risk assessment matrix, a full privacy policy template, layered multi-lingual consent notices, a 10-clause vendor DPA, a breach response plan per Rule 7 of the DPDP Rules 2025, a 12-deliverable final submission, a 30-point self-assessment checklist, and a continuing-education roadmap aligned to IAPP, FDPPI, NIST and MeitY guidance. This is the master integrator module — the proof that the 19 prior modules were internalised.',
  duration: '20 Hours',
  icon: 'Award',
  learningObjectives: [
    'Synthesise Modules 1-19 into a single integrated DPDPA compliance program for a real-world Indian health-tech scenario',
    'Build a Records of Processing Activity (RoPA) covering 12+ data flows across telemedicine, e-pharmacy, diagnostics, ABDM and operations',
    'Draft a 90-day compliance roadmap with phase milestones, owners, and budget',
    'Conduct a likelihood x impact risk assessment for 7 top DPDPA risks with treatments mapped to specific sections',
    'Produce a DPDPA Section 5 compliant privacy policy with multi-lingual and accessibility considerations',
    'Draft layered, granular, multi-lingual consent notices per Section 6 and Section 9 (children) requirements',
    'Negotiate and draft a 10-clause Data Processing Agreement aligned with Section 8(2) processor liability',
    'Build a Rule 7 compliant breach response plan with 72-hour Board notification and severity tiers',
    'Compile 12 capstone deliverables and self-assess against a 30-point compliance checklist',
    'Map learnings to IAPP CIPP/E, CIPM, FDPPI, NIST CSF and ongoing continuing education',
  ],
  chapters: [
    // ============================================================
    // CHAPTER 1: CAPSTONE PROJECT
    // ============================================================
    {
      id: 1,
      title: 'Capstone Project',
      lessons: [
        // -------- LESSON 1: PROJECT OVERVIEW --------
        {
          id: 1,
          title: 'Project Overview: HealthTech Innovations Pvt Ltd',
          duration: '16 min',
          type: 'video',
          description:
            'A complete walk-through of the HealthTech Innovations Pvt Ltd capstone scenario: business model, current state, data flows, regulatory exposure, and the DPDPA obligations triggered across telemedicine, e-pharmacy, ABDM integration and diagnostics.',
          content:
            'HealthTech Innovations Pvt Ltd is a Bengaluru-based digital health company founded in 2019, operating a telemedicine platform, an integrated e-pharmacy, a diagnostic lab marketplace, and a consumer health records app integrated with the Ayushman Bharat Digital Mission (ABDM). With 2 million registered users, 500 empanelled doctors, 50 partner hospitals across 30 Indian cities, and ₹120 crore in annual revenue, the company processes health data at a scale that almost certainly qualifies it as a Significant Data Fiduciary (SDF) under DPDPA Section 10. This capstone project walks you through a real-world DPDPA compliance build for HealthTech Innovations, integrating every concept from Modules 1-19 into a single end-to-end deliverable. By the end of this lesson, you will understand the company, its data flows, the regulatory stack that applies, and the capstone project scope.',
          learningObjectives: [
            'Understand HealthTech Innovations\' business model, data flows, and regulatory exposure',
            'Identify DPDPA obligations triggered by telemedicine, e-pharmacy, diagnostics and ABDM integration',
            'Recognise Significant Data Fiduciary (SDF) thresholds likely to apply to Indian health-tech at scale',
            'Frame the capstone project scope across 90 days, 12 deliverables and 5 functional teams',
          ],
          keyTakeaways: [
            'HealthTech Innovations is a likely Significant Data Fiduciary (SDF) under DPDPA Section 10 due to scale (2M+ users), sensitive health data processing, and risk to data principals.',
            'The company is subject to DPDPA, Telemedicine Practice Guidelines 2020, ABDM Data Privacy & Security Policy, Clinical Establishments Act, Drugs & Cosmetics Act, IT Act 2000 SPDI Rules, and state drug regulations — a multi-regulator stack.',
            'The capstone deliverable is a complete DPDPA compliance program: privacy policy, consent notices, vendor DPAs, breach plan, DPIA, training and audit evidence.',
            'DPDPA penalties for health data breaches can reach ₹250 crore under Section 33 — the project justifies its ₹85 lakh budget through risk reduction alone.',
            'The project team spans Legal, Engineering, Product, Security and Customer Operations — privacy is cross-functional, not siloed in Legal.',
          ],
          sections: [
            {
              id: 'sec-1',
              title: 'HealthTech Innovations Business Profile',
              content: [
                {
                  type: 'paragraph',
                  content:
                    'HealthTech Innovations Pvt Ltd (CIN U85100KA2019PTC123456) is a Bengaluru-headquartered digital health company founded in 2019 by two former NHA (National Health Authority) consultants. The company operates four integrated business lines: (1) HealthTech Tele-Consult — a telemedicine platform with 500 empanelled doctors across 14 specialties; (2) HealthTech Pharmacy — an e-pharmacy delivering medicines across 30 cities with same-day delivery in Bengaluru, Mumbai, Delhi NCR and Hyderabad; (3) HealthTech Labs — a diagnostic marketplace partnering with 12 NABL-accredited lab chains including Dr Lal PathLabs, Metropolis and Thyrocare; (4) HealthTech Records — a consumer health records app integrated with ABDM, allowing users to consolidate lab reports, prescriptions and discharge summaries via ABHA-linked consent.',
                },
                {
                  type: 'table',
                  headers: ['Business Line', 'Users', 'Annual Revenue', 'Data Processed', 'Primary Regulator'],
                  rows: [
                    ['Tele-Consult', '1.2M active', '₹48 crore', 'Symptoms, video, prescriptions, ABHA', 'NHA + MoHFW + State Medical Councils'],
                    ['Pharmacy', '800K active', '₹42 crore', 'Prescriptions, delivery address, UPI', 'State Drug Controllers + CDSCO'],
                    ['Labs', '450K active', '₹22 crore', 'Test orders, lab reports, ABHA', 'NABL + MoHFW'],
                    ['Records', '2M registered', '₹8 crore (ads + premium)', 'Health records via ABDM consent', 'NHA + MeitY'],
                  ],
                },
                {
                  type: 'callout',
                  content:
                    'HealthTech Innovations processes health data of 2 million Indians. A single data breach exposing 100,000 patient records could attract the maximum DPDPA penalty of ₹250 crore under Section 33 — nearly twice the company\'s annual revenue. This is the business case for the capstone project.',
                  calloutType: 'warning',
                },
              ],
            },
            {
              id: 'sec-2',
              title: 'Current State and Regulatory Exposure',
              content: [
                {
                  type: 'paragraph',
                  content:
                    'As of project start (Day 0), HealthTech Innovations has no dedicated Data Protection Officer (DPO), no consolidated Records of Processing Activity (RoPA), a privacy policy last updated in 2021 referencing only the IT Act SPDI Rules, no executed Data Processing Agreements (DPAs) with 14 of its 17 vendors, and no breach response plan. The company suffered a minor breach in March 2023 (exposed API endpoint leaked 4,200 customer email addresses) which was reported only to CERT-In, not to a Data Protection Board (which did not exist then). With the DPDPA operationalised and DPDP Rules 2025 notified, this current state is no longer tenable.',
                },
                {
                  type: 'heading',
                  content: 'Applicable Regulatory Stack',
                },
                {
                  type: 'list',
                  content: 'Laws and frameworks applicable to HealthTech Innovations',
                  items: [
                    'Digital Personal Data Protection Act 2023 (DPDPA) — Sections 4-22 horizontal obligations.',
                    'DPDP Rules 2025 (notified 3 January 2025) — Rule 7 breach notification, Rule 8 SDF obligations, Rule 11 consent manager.',
                    'Telemedicine Practice Guidelines 2020 (Medical Council of India Board of Governors) — patient identity verification, 3-year record retention.',
                    'ABDM Data Privacy & Security Policy 2022 (National Health Authority) — TLS 1.2+, AES-256, 5-year audit logs.',
                    'Clinical Establishments Act 2010 (state-level adoption) — registration and standards.',
                    'Drugs and Cosmetics Act 1940 + Pharmacy Act 1948 — e-pharmacy rules.',
                    'IT Act 2000 Section 43A + SPDI Rules 2011 — residual until DPDPA fully replaces.',
                    'Consumer Protection (E-Commerce) Rules 2020 — grievance officer, 48-hour acknowledgement.',
                    'RBI Payment Data Storage Circular (6 April 2018) + Tokenisation Framework — for UPI/card payment flows.',
                    'CERT-In Directions 28 April 2022 — 6-hour cyber incident reporting.',
                  ],
                },
                {
                  type: 'callout',
                  content:
                    'HealthTech Innovations operates in a 10-framework regulatory environment. Module 19 covered this multi-regulator landscape — the capstone is where you operationalise it for one specific company.',
                  calloutType: 'important',
                },
              ],
            },
            {
              id: 'sec-3',
              title: 'DPDPA Trigger Events and SDF Status',
              content: [
                {
                  type: 'paragraph',
                  content:
                    'Several characteristics of HealthTech Innovations make SDF (Significant Data Fiduciary) notification under Section 10 highly likely once MeitY notifies thresholds. First, the company processes 2 million data principals — far above the likely 5 lakh or 10 lakh threshold for SDF. Second, it processes sensitive health data including mental health consultations, sexual health prescriptions, and chronic disease records (HIV, cancer, mental illness). Third, its business model creates high risk to data principals — a breach could expose patients to discrimination, insurance denial, or social stigma. Fourth, the company processes children\'s data (paediatric consultations). Fifth, the company has a prior breach history (March 2023 incident). Each factor alone is sufficient; together they make SDF status virtually certain.',
                },
                {
                  type: 'list',
                  content: 'SDF triggers applicable to HealthTech Innovations',
                  items: [
                    'Volume: 2M data principals — exceeds likely SDF threshold.',
                    'Sector: Health data with heightened sensitivity.',
                    'Children\'s data: Paediatric consultations trigger Section 9 verifiable parental consent.',
                    'Risk: A breach could cause discrimination, insurance denial, social stigma.',
                    'Prior breach: March 2023 incident involving 4,200 records.',
                    'Cross-border: AWS instances in US-East (Virginia) and Singapore for DR.',
                    'Critical information infrastructure designation possible if MoHFW notifies.',
                  ],
                },
                {
                  type: 'example',
                  content:
                    'In May 2024, MeitY released a pre-draft consultation paper proposing SDF thresholds of: (a) 5 lakh data principals for horizontal SDF, or (b) 50,000 data principals for sensitive sector SDF (health, children, biometric). HealthTech Innovations exceeds both by 4x and 40x respectively, making SDF status a near-certainty once the notification is finalised.',
                },
              ],
            },
            {
              id: 'sec-4',
              title: 'Capstone Project Scope and Team',
              content: [
                {
                  type: 'paragraph',
                  content:
                    'The capstone project runs 90 days (Days 1-90), is led by an external DPO consultant (you, the learner) reporting to the CEO, and is executed by a 5-member core team plus 8 supporting contributors. The project budget is ₹85 lakh (₹35 lakh consulting, ₹20 lakh technology implementation, ₹15 lakh training, ₹10 lakh legal review, ₹5 lakh audit). The project charter has been approved by the Board, and the Privacy Steering Committee (CEO, CTO, Head of Legal, DPO consultant, Head of Customer Operations) meets fortnightly.',
                },
                {
                  type: 'list',
                  content: 'Capstone project team and responsibilities',
                  items: [
                    'DPO Consultant (you, learner) — privacy policy, DPIA, breach plan, vendor DPA.',
                    'Head of Legal — privacy policy legal review, regulator liaison, contractual clauses.',
                    'CTO + Engineering Lead — technical implementation (consent management, encryption, RoPA tooling).',
                    'Head of Customer Operations — grievance officer workflow, data subject rights (DSAR) workflow.',
                    'CISO — security controls, breach detection, audit evidence collection.',
                    'Head of Product — UX redesign for just-in-time consent, children\'s flow.',
                    'Head of HR — employee training rollout, vendor due diligence.',
                    'External Counsel (privacy specialist) — opinion on Section 9 children\'s consent, Section 16 transfers.',
                    'Audit Firm (CERT-In empanelled) — annual independent data audit per Section 10.',
                  ],
                },
                {
                  type: 'callout',
                  content:
                    'Privacy is not a Legal function alone. The capstone team reflects the cross-functional reality of DPDPA compliance — Legal drafts the policy, Engineering implements the consent layer, Operations manages rights requests, Security owns breach response, and Product redesigns UX. The DPO is the conductor, not the orchestra.',
                  calloutType: 'tip',
                },
              ],
            },
          ],
          glossary: [
            { term: 'Significant Data Fiduciary (SDF)', definition: 'A Data Fiduciary notified by MeitY under DPDPA Section 10 based on volume, sensitivity, risk, and other factors — subject to enhanced obligations including DPO appointment, DPIA, independent audit.' },
            { term: 'ABDM', definition: 'Ayushman Bharat Digital Mission — India\'s national digital health ecosystem operated by the National Health Authority (NHA), including ABHA health IDs, Health Information Exchange, and Consent Manager.' },
            { term: 'Telemedicine Practice Guidelines 2020', definition: 'Guidelines by the Medical Council of India Board of Governors regulating telemedicine practice — patient identity verification, 3-year record retention, informed consent.' },
            { term: 'RoPA', definition: 'Records of Processing Activity — the internal register Data Fiduciaries maintain documenting all processing operations, purposes, lawful bases, recipients, retention periods and transfers.' },
            { term: 'Privacy Steering Committee', definition: 'Cross-functional governance body providing executive oversight of the privacy program; meets quarterly (or fortnightly during project execution).' },
          ],
          references: [
            { title: 'Digital Personal Data Protection Act 2023, Sections 4-22', source: 'Government of India', year: '2023' },
            { title: 'DPDP Rules 2025 (notified 3 January 2025)', source: 'Ministry of Electronics and IT (MeitY)', year: '2025' },
            { title: 'Telemedicine Practice Guidelines 2020', source: 'Medical Council of India Board of Governors', year: '2020' },
            { title: 'ABDM Data Privacy & Security Policy', source: 'National Health Authority', year: '2022' },
            { title: 'MeitY Pre-Draft Consultation Paper on SDF Thresholds', source: 'Ministry of Electronics and IT', year: '2024' },
          ],
        },
        // -------- LESSON 2: DATA INVENTORY --------
        {
          id: 2,
          title: 'Data Inventory: Building the RoPA',
          duration: '18 min',
          type: 'video',
          description:
            'A complete Records of Processing Activity (RoPA) for HealthTech Innovations — 12 data flows across telemedicine, e-pharmacy, diagnostics, ABDM integration, payments, marketing, customer support, analytics, vendor processing, HR, and cross-border transfers. Each flow is mapped to purpose, lawful basis, retention period, recipients, and transfer status.',
          content:
            'The Records of Processing Activity (RoPA) is the foundational document of any DPDPA compliance program. It is the master inventory of every data flow, every processing purpose, every lawful basis, every recipient, every retention period, and every cross-border transfer. Without a RoPA, the privacy policy cannot be accurate, the DPIA cannot be complete, the breach response plan cannot be calibrated, and the vendor DPA cannot be properly scoped. DPDPA Section 8(7) requires erasure when data is no longer needed for the stated purpose — operationalising this requires a RoPA that knows where every byte lives. This lesson builds the HealthTech Innovations RoPA covering 12 distinct data flows, mapped to DPDPA Sections 4-8, with retention aligned to Telemedicine Guidelines (3 years), ABDM Policy (5 years audit logs), and PMLA (5 years KYC).',
          learningObjectives: [
            'Build a Records of Processing Activity (RoPA) for HealthTech Innovations covering 12 data flows',
            'Map each flow to purpose, lawful basis (Section 6 consent or Section 7 deemed), retention, and recipients',
            'Quantify processing volumes, data subject categories and special categories of data',
            'Identify cross-border transfers and apply Section 16 transfer analysis',
          ],
          keyTakeaways: [
            'A DPDPA-compliant RoPA has 10 mandatory fields: processing activity, purpose, lawful basis, data categories, data subjects, recipients, retention, transfers, security measures, controller contact.',
            'HealthTech Innovations has 12 distinct data flows spanning telemedicine, e-pharmacy, diagnostics, ABDM, payments, marketing, support, analytics, vendors, HR, breach logs and cross-border.',
            'Lawful basis is overwhelmingly Section 6 consent — only regulatory reporting flows use Section 7 deemed consent.',
            'Cross-border transfers to AWS US-East (Virginia) for disaster recovery trigger Section 16 analysis — must verify country not blacklisted.',
            'Retention varies by data type: telemedicine 3 years, prescriptions 2 years, ABDM audit logs 5 years, payment records 8 years (RBI/IT Act).',
          ],
          sections: [
            {
              id: 'sec-1',
              title: 'RoPA Structure and Mandatory Fields',
              content: [
                {
                  type: 'paragraph',
                  content:
                    'A DPDPA-compliant RoPA must contain, at minimum, 10 fields per processing activity. The RoPA is maintained in a structured register (typically a spreadsheet or GRC tool) and updated whenever a new processing activity begins or an existing one materially changes. The Privacy Steering Committee reviews the RoPA quarterly. The Data Protection Board may request the RoPA during any inquiry under Section 18 — failure to maintain one is a compliance failure that can attract penalty.',
                },
                {
                  type: 'table',
                  headers: ['RoPA Field', 'Description', 'DPDPA Section'],
                  rows: [
                    ['Processing Activity', 'Name of the activity (e.g., "Telemedicine consultation")', 'Section 4 (compliance)'],
                    ['Purpose', 'Specific processing purpose', 'Section 5(1)(b)'],
                    ['Lawful Basis', 'Section 6 consent OR Section 7 deemed consent', 'Sections 6-7'],
                    ['Data Categories', 'Personal data collected (with special categories flagged)', 'Section 5(1)(c)'],
                    ['Data Subjects', 'Categories of individuals (patients, doctors, employees)', 'Section 5(1)(d)'],
                    ['Recipients', 'All third-party recipients including vendors', 'Section 5(1)(f)'],
                    ['Retention Period', 'Specific retention aligned to purpose + legal requirements', 'Section 8(7)'],
                    ['Cross-Border Transfers', 'Countries and Section 16 basis', 'Section 16'],
                    ['Security Measures', 'Technical and organisational measures', 'Section 8(5)'],
                    ['DPO / Contact', 'Data Protection Officer contact details', 'Section 8(9)'],
                  ],
                },
                {
                  type: 'callout',
                  content:
                    'A RoPA is a living document. Every new product feature, every new vendor, every new data flow must be added within 30 days. Treat the RoPA like a software product with versions, change logs and quarterly releases — exactly as Module 19 recommended for the multi-regulator compliance matrix.',
                  calloutType: 'important',
                },
              ],
            },
            {
              id: 'sec-2',
              title: 'HealthTech Innovations Data Flow Inventory (12 Flows)',
              content: [
                {
                  type: 'paragraph',
                  content:
                    'The HealthTech Innovations RoPA captures 12 distinct data flows. Each flow is documented in the RoPA register with all 10 fields. The flows below are summarised — the full RoPA register (deliverable D-02) runs to 40+ pages.',
                },
                {
                  type: 'list',
                  content: '12 data flows in the HealthTech Innovations RoPA',
                  items: [
                    'Flow 1: User Registration — name, mobile, email, ABHA ID, date of birth, gender, city. Purpose: account creation. Basis: Sec 6 consent. Retention: account lifetime + 3 years.',
                    'Flow 2: Telemedicine Consultation — symptoms, video/audio recording, doctor notes, e-prescription. Purpose: medical consultation. Basis: Sec 6 consent. Retention: 3 years (Telemedicine Guidelines 2020).',
                    'Flow 3: E-Pharmacy Order — prescription upload, medicine list, delivery address, UPI ID. Purpose: medicine fulfilment. Basis: Sec 6 consent. Retention: 2 years (Drugs & Cosmetics Act).',
                    'Flow 4: Diagnostic Lab Order — test name, lab partner, sample collection address, test report. Purpose: lab diagnostic. Basis: Sec 6 consent. Retention: 5 years (ABDM Policy).',
                    'Flow 5: ABDM Consent Manager — patient grants doctor access to specific records for specific duration. Purpose: ABDM consent. Basis: Sec 6 + Sec 13 Consent Manager. Retention: consent record 5 years.',
                    'Flow 6: Payment Processing — UPI VPA, card token, transaction amount, billing address. Purpose: payment. Basis: Sec 6 consent + Sec 7 deemed (statutory). Retention: 8 years (IT Act/RBI).',
                    'Flow 7: Marketing Communications — email/SMS/WhatsApp for promotions, disease education. Purpose: marketing. Basis: Sec 6 consent (granular, opt-in). Retention: until consent withdrawn.',
                    'Flow 8: Customer Support Tickets — issue description, screenshots, call recordings. Purpose: support. Basis: Sec 6 consent + Sec 7 contract performance. Retention: 2 years.',
                    'Flow 9: Product Analytics — pseudonymised usage events, session recordings, feature usage. Purpose: product improvement. Basis: Sec 6 consent (separate granular). Retention: 18 months.',
                    'Flow 10: Vendor Processing — shared with AWS (cloud), Razorpay (payments), Twilio (SMS), MakeMyLab (labs), Delhivery (logistics). Purpose: service delivery. Basis: Sec 8(2) processor on instructions. Retention: vendor contract term + 1 year.',
                    'Flow 11: Employee HR Data — Aadhaar, PAN, bank account, address, performance reviews. Purpose: employment. Basis: Sec 6 consent + Sec 7 employment. Retention: employment + 7 years (PMLA KYC).',
                    'Flow 12: Cross-Border DR Replication — encrypted backup to AWS US-East (Virginia) and Singapore for disaster recovery. Purpose: business continuity. Basis: Sec 16 transfer analysis. Retention: 30-day rolling backup.',
                  ],
                },
                {
                  type: 'callout',
                  content:
                    'The 12-flow inventory is the foundation. The privacy policy (Lesson 5), DPIA (Lesson 4), vendor DPA (Chapter 2 Lesson 3), and breach plan (Chapter 2 Lesson 4) all derive their content from this RoPA. An incomplete RoPA cascades into every other deliverable being incomplete.',
                  calloutType: 'tip',
                },
              ],
            },
            {
              id: 'sec-3',
              title: 'Cross-Border Transfers and Section 16 Analysis',
              content: [
                {
                  type: 'paragraph',
                  content:
                    'Flow 12 (cross-border DR replication) requires Section 16 analysis. DPDPA Section 16 permits transfer of personal data outside India, except to countries or territories blacklisted by the Central Government. As of January 2025, no blacklist has been notified, but the DPDP Rules 2025 draft indicates the government may notify a whitelist or blacklist based on sectoral sensitivity. For health data, transfer may be restricted to blacklisted countries only — implying most transfers are permitted but a future blacklist could change this overnight.',
                },
                {
                  type: 'heading',
                  content: 'Transfer Risk Assessment',
                },
                {
                  type: 'list',
                  content: 'Section 16 transfer analysis for HealthTech Innovations',
                  items: [
                    'Destination country: United States (AWS US-East Virginia) and Singapore (AWS ap-southeast-1).',
                    'Recipient: Amazon Web Services Inc. — operating as a processor under DPA.',
                    'Section 16 status: Neither US nor Singapore blacklisted (as of January 2025).',
                    'Sectoral restriction: ABDM Data Privacy & Security Policy 2022 requires health data primary storage in India — DR replication is permitted if encrypted.',
                    'Encryption: AES-256 in transit and at rest; DR backup encrypted with customer-managed KMS key.',
                    'Mitigation: Implement AWS Mumbai (ap-south-1) as primary; US/Singapore only as encrypted DR.',
                    'Audit trail: CloudTrail logs of all access to DR instances, retained 5 years.',
                  ],
                },
                {
                  type: 'example',
                  content:
                    'If MeitY were to blacklist the United States in 2026 (hypothetical, post-Schrems-style ruling), HealthTech Innovations would have 90 days to migrate DR from AWS US-East to an approved alternative — likely AWS Mumbai (ap-south-1) with secondary in AWS Singapore (if not blacklisted). The RoPA flags this risk and the Privacy Steering Committee tracks it quarterly.',
                },
              ],
            },
            {
              id: 'sec-4',
              title: 'Retention Schedule and Erasure Mechanics',
              content: [
                {
                  type: 'paragraph',
                  content:
                    'DPDPA Section 8(7) requires Data Fiduciaries to erase personal data once the purpose is no longer served and retention is not required by law. HealthTech Innovations\' retention schedule reconciles DPDPA Section 8(7) (erasure) with sectoral retention laws (Telemedicine 3 years, Drugs & Cosmetics 2 years, PMLA 5 years, IT Act 8 years). Where sectoral law mandates longer retention, sectoral law prevails — but the data must be used only for the legal compliance purpose, not commercial purposes.',
                },
                {
                  type: 'table',
                  headers: ['Data Category', 'Purpose', 'Sectoral Retention', 'DPDPA Retention', 'Final Retention'],
                  rows: [
                    ['Telemedicine records', 'Consultation', '3 years (TG 2020)', 'Purpose served', '3 years'],
                    ['Prescriptions', 'Pharmacy', '2 years (D&C Act)', 'Purpose served', '2 years'],
                    ['Lab reports', 'Diagnostic', '5 years (ABDM)', 'Purpose served', '5 years'],
                    ['ABDM audit logs', 'Audit trail', '5 years (ABDM)', 'Purpose served', '5 years'],
                    ['Payment records', 'Transaction', '8 years (IT Act)', 'Purpose served', '8 years'],
                    ['KYC records (employees)', 'Employment', '5 years after exit (PMLA)', 'Purpose served', '5 years'],
                    ['Marketing consent', 'Marketing', 'Until withdrawal', 'Until withdrawal', 'Until withdrawal'],
                    ['Breach incident logs', 'Breach', '6 years (CERT-In)', 'Purpose served', '6 years'],
                  ],
                },
                {
                  type: 'callout',
                  content:
                    'Erasure under Section 8(7) is not just deletion — it requires a documented erasure procedure (cryptographic shredding for backups, hard deletion for primary stores) with a signed erasure certificate. Module 5 covered erasure mechanics in detail; the capstone deliverable D-07 is the erasure runbook.',
                  calloutType: 'important',
                },
              ],
            },
          ],
          glossary: [
            { term: 'RoPA', definition: 'Records of Processing Activity — the master inventory of personal data processing operations maintained by Data Fiduciaries.' },
            { term: 'Lawful Basis', definition: 'The legal ground for processing — DPDPA Section 6 (consent) or Section 7 (certain legitimate uses / deemed consent).' },
            { term: 'Deemed Consent', definition: 'Processing permitted under DPDPA Section 7 without explicit consent — limited to specific scenarios like voluntary provision, state functions, employment, etc.' },
            { term: 'Section 16 Transfer', definition: 'Cross-border transfer of personal data outside India, permitted except to countries blacklisted by the Central Government.' },
            { term: 'Retention Schedule', definition: 'Document specifying how long each data category is retained, reconciling DPDPA Section 8(7) erasure with sectoral retention laws.' },
          ],
          references: [
            { title: 'DPDPA 2023, Section 5 (Notice), Section 6 (Consent), Section 7 (Deemed Consent), Section 8(7) (Erasure), Section 16 (Transfers)', source: 'Government of India', year: '2023' },
            { title: 'Telemedicine Practice Guidelines 2020 (3-year retention)', source: 'Medical Council of India', year: '2020' },
            { title: 'ABDM Data Privacy & Security Policy 2022 (5-year audit log retention)', source: 'National Health Authority', year: '2022' },
            { title: 'NIST SP 800-88 Rev 1 — Media Sanitization (for erasure)', source: 'National Institute of Standards and Technology', year: '2014' },
          ],
        },
        // -------- LESSON 3: COMPLIANCE PLAN --------
        {
          id: 3,
          title: 'Compliance Plan: 90-Day Roadmap',
          duration: '17 min',
          type: 'video',
          description:
            'A day-by-day 90-day compliance roadmap for HealthTech Innovations — three phases of 30 days each (Discovery, Implementation, Audit & Go-Live) with milestones, owners, deliverables and budget burn.',
          content:
            'DPDPA compliance is not a single project — it is a phased program that must be executed against a deadline. For HealthTech Innovations, the deadline is the Board\'s commitment to be DPDPA-compliant within 90 days of project commencement (Day 0 = 1 February 2025; Day 90 = 1 May 2025). This lesson translates the gap assessment into a 90-day plan with three phases, clear milestones, named owners, and a budget burn-down schedule. By the end of this lesson, you will be able to draft a defensible compliance roadmap for any Indian Data Fiduciary of similar complexity.',
          learningObjectives: [
            'Structure a 90-day compliance program across three 30-day phases',
            'Assign milestones, owners, deliverables and budgets per phase',
            'Identify critical-path dependencies (e.g., DPO appointment before DPIA)',
            'Operationalise the plan through Privacy Steering Committee cadence',
          ],
          keyTakeaways: [
            'Phase 1 (Days 1-30): Discovery & Gap Assessment — RoPA, DPIA scoping, vendor inventory, DPO appointment.',
            'Phase 2 (Days 31-60): Policy Drafting & Technical Implementation — privacy policy, consent notices, DPAs, breach plan, consent management platform (CMP) deployment.',
            'Phase 3 (Days 61-90): Audit, Training & Go-Live — independent data audit, employee training, Board notification readiness, go-live cutover.',
            'Critical path: DPO appointment (Day 5) → RoPA completion (Day 25) → Privacy policy approval (Day 50) → CMP go-live (Day 70) → Audit complete (Day 85) → Board sign-off (Day 90).',
            'Budget: ₹85 lakh total — ₹35L consulting, ₹20L technology, ₹15L training, ₹10L legal, ₹5L audit.',
          ],
          sections: [
            {
              id: 'sec-1',
              title: 'Three-Phase Roadmap Overview',
              content: [
                {
                  type: 'paragraph',
                  content:
                    'The 90-day plan is divided into three phases of 30 days each. Each phase has 4-6 milestones, named owners, and a budget allocation. The Privacy Steering Committee meets fortnightly (Days 7, 14, 21, 28 of each phase) to review progress, unblock dependencies, and approve phase gates. A phase cannot be closed until all milestones are signed off by the DPO Consultant and the Head of Legal.',
                },
                {
                  type: 'table',
                  headers: ['Phase', 'Days', 'Theme', 'Key Deliverable', 'Budget', 'Owner'],
                  rows: [
                    ['Phase 1', '1-30', 'Discovery & Gap Assessment', 'RoPA + DPIA scoping + DPO appointed', '₹18L', 'DPO Consultant'],
                    ['Phase 2', '31-60', 'Policy Drafting & Implementation', 'Privacy policy + DPAs + CMP deployed', '₹42L', 'Head of Legal + CTO'],
                    ['Phase 3', '61-90', 'Audit, Training & Go-Live', 'Audit complete + 95% staff trained', '₹25L', 'DPO + CISO + HR'],
                  ],
                },
                {
                  type: 'callout',
                  content:
                    'The 90-day timeline is ambitious but realistic for a 200-employee company. Larger companies (1,000+ employees, 50+ business lines) typically need 6-9 months. Module 14 covered program management depth — the capstone timeline assumes the executive sponsor is the CEO (not a middle manager), which is the single biggest accelerator.',
                  calloutType: 'important',
                },
              ],
            },
            {
              id: 'sec-2',
              title: 'Phase 1 — Discovery & Gap Assessment (Days 1-30)',
              content: [
                {
                  type: 'paragraph',
                  content:
                    'Phase 1 establishes the factual foundation: who we are, what data we process, where it lives, what gaps exist, and who will own the program going forward. The phase begins with the appointment of the DPO Consultant (you) on Day 1, followed by the formal RoPA build (Days 5-25), DPIA scoping (Days 15-25), vendor inventory (Days 10-20), and the appointment of a permanent internal DPO (Days 20-30). Phase 1 closes with a Privacy Steering Committee review on Day 30 — the phase gate to enter Phase 2.',
                },
                {
                  type: 'heading',
                  content: 'Phase 1 Milestones',
                },
                {
                  type: 'list',
                  content: 'Phase 1 milestones, owners and dates',
                  items: [
                    'Day 1: Project charter signed by CEO; DPO Consultant onboarded; Privacy Steering Committee constituted.',
                    'Day 5: Kickoff all-hands — 200 employees briefed; RoPA discovery workshops scheduled with 8 functional teams.',
                    'Day 10: Vendor inventory complete — 17 vendors identified, 14 without executed DPAs flagged.',
                    'Day 15: RoPA v1 drafted — 12 data flows documented; cross-border transfers flagged for Section 16 analysis.',
                    'Day 20: Cross-border analysis complete; AWS Mumbai recommended as primary; US-East as encrypted DR only.',
                    'Day 25: DPIA scoping complete — 3 high-risk processing activities flagged for full DPIA (telemedicine video, paediatric data, ABDM consent flow).',
                    'Day 28: Permanent internal DPO shortlisted (3 candidates interviewed).',
                    'Day 30: Phase 1 gate review — RoPA + DPIA scoping + vendor inventory + DPO appointment signed off.',
                  ],
                },
                {
                  type: 'example',
                  content:
                    'Day 15 RoPA v1 review surfaced a previously unknown 13th data flow: the marketing team had been exporting patient email lists to Mailchimp (US-based) for a monthly newsletter — without a DPA and without Section 16 analysis. This was an immediate Section 8(5) security gap and a Section 16 transfer compliance gap. Remediation was prioritised for Phase 2 (Day 35: Mailchimp DPA executed or Mailchimp replaced with an Indian alternative).',
                },
              ],
            },
            {
              id: 'sec-3',
              title: 'Phase 2 — Policy Drafting & Technical Implementation (Days 31-60)',
              content: [
                {
                  type: 'paragraph',
                  content:
                    'Phase 2 converts the discovery findings into policy and technical reality. This is the heaviest phase — multiple workstreams run in parallel under the Head of Legal (policy) and CTO (technical). The phase delivers the privacy policy, layered consent notices, vendor DPAs, the breach response plan, the consent management platform (CMP) deployment, and the children\'s flow UX redesign. Phase 2 closes with a Privacy Steering Committee review on Day 60.',
                },
                {
                  type: 'list',
                  content: 'Phase 2 milestones and deliverables',
                  items: [
                    'Day 35: Privacy policy v1 drafted (English) per Section 5; translation into Hindi, Tamil, Telugu, Kannada, Bengali, Marathi initiated.',
                    'Day 38: Layered consent notices designed — 6 just-in-time notices (registration, telemedicine, pharmacy, labs, marketing, analytics).',
                    'Day 42: Vendor DPAs sent to 17 vendors — 10-clause template; AWS, Razorpay, Twilio, Delhivery, MakeMyLab prioritised.',
                    'Day 45: Breach response plan v1 drafted per Rule 7 of DPDP Rules 2025; severity tiers (T1/T2/T3) defined; 72-hour Board notification workflow mapped.',
                    'Day 48: Children\'s flow UX redesign signed off by Product — verifiable parental consent flow (Aadhaar OTP + parent email).',
                    'Day 50: Privacy policy approved by Legal + external counsel; published on website footer + in-app.',
                    'Day 55: Consent Management Platform (CMP) deployed — OneTrust or in-house; integrated with registration, telemedicine, pharmacy, labs, marketing flows.',
                    'Day 58: All 6 consent notices live in English + 6 Indian languages.',
                    'Day 60: Phase 2 gate review — privacy policy, consent notices, DPAs, breach plan, CMP all signed off.',
                  ],
                },
                {
                  type: 'callout',
                  content:
                    'Phase 2 is where most projects fail. The privacy policy is the easy part — getting all 17 vendors to sign DPAs within 28 days (Day 42-70) requires escalation, contractual leverage, and readiness to terminate non-compliant vendors. Three vendors will likely refuse to sign initially — replacement plans must be ready by Day 45.',
                  calloutType: 'warning',
                },
              ],
            },
            {
              id: 'sec-4',
              title: 'Phase 3 — Audit, Training & Go-Live (Days 61-90)',
              content: [
                {
                  type: 'paragraph',
                  content:
                    'Phase 3 is the validation phase. The independent data audit (Section 10 SDF obligation) verifies everything built in Phase 2. Employee training (Section 8(9) awareness obligation) builds the human layer of compliance. The Board notification readiness (Section 8(6)) tests the breach plan. By Day 90, the company should be able to demonstrate — to the Data Protection Board, to customers, to investors — that it is DPDPA-compliant. Phase 3 closes with formal Board sign-off on Day 90.',
                },
                {
                  type: 'list',
                  content: 'Phase 3 milestones and deliverables',
                  items: [
                    'Day 62: Independent data auditor (CERT-In empanelled firm) onboarded; audit kickoff meeting.',
                    'Day 65: Employee training v1 launched — 90-minute DPDPA awareness module; mandatory for all 200 employees.',
                    'Day 70: CMP go-live — consent records flowing for new registrations; legacy users re-consented via in-app prompt.',
                    'Day 75: Independent audit fieldwork complete; preliminary findings shared.',
                    'Day 78: Audit findings remediation plan — 12 findings, 4 high (children\'s flow, vendor DPA for 2 vendors, breach plan test, retention schedule).',
                    'Day 80: Tabletop breach exercise — simulated telemedicine video leak; 72-hour notification clock tested.',
                    'Day 85: Audit report finalised; signed by auditor + DPO; submitted to Privacy Steering Committee.',
                    'Day 87: 95% employee training completion verified; laggards escalated to HR.',
                    'Day 90: Board sign-off — DPDPA compliance program formally transitioned from project mode to BAU (business-as-usual) operations.',
                  ],
                },
                {
                  type: 'callout',
                  content:
                    'Day 90 is not the end of compliance — it is the start of the operational phase. The DPO owns ongoing: quarterly Privacy Steering Committee meetings, annual independent audit, annual employee training refresh, monthly breach plan test, weekly regulator horizon scanning, and continuous RoPA updates. Privacy program is now BAU.',
                  calloutType: 'tip',
                },
              ],
            },
          ],
          glossary: [
            { term: 'Compliance Roadmap', definition: 'A phased, dated, owner-assigned plan for achieving DPDPA compliance, typically 90 days for a mid-sized Indian company.' },
            { term: 'Phase Gate', definition: 'A formal Privacy Steering Committee review at the end of each phase — the phase cannot close until all milestones are signed off.' },
            { term: 'Critical Path', definition: 'The sequence of dependent milestones that determines the overall project duration — e.g., DPO appointment before DPIA.' },
            { term: 'BAU (Business As Usual)', definition: 'The operational steady-state of compliance after the project phase ends — quarterly reviews, annual audit, continuous updates.' },
            { term: 'Independent Data Audit', definition: 'Mandatory annual audit by an external auditor for SDFs under DPDPA Section 10 — for HealthTech, conducted by a CERT-In empanelled firm.' },
          ],
          references: [
            { title: 'DPDPA 2023, Section 8(9) (DPO and Awareness), Section 10 (SDF Audit)', source: 'Government of India', year: '2023' },
            { title: 'DPDP Rules 2025, Rule 7 (Breach), Rule 8 (SDF)', source: 'MeitY', year: '2025' },
            { title: 'IAPP Privacy Governance Framework (Phase-based program design)', source: 'International Association of Privacy Professionals', year: '2024' },
            { title: 'NIST Privacy Framework v1.0', source: 'National Institute of Standards and Technology', year: '2020' },
          ],
        },
        // -------- LESSON 4: RISK ASSESSMENT EXERCISE --------
        {
          id: 4,
          title: 'Risk Assessment Exercise: 7-Risk Matrix',
          duration: '19 min',
          type: 'exercise',
          description:
            'A practical likelihood x impact risk assessment for HealthTech Innovations — 7 top DPDPA risks mapped to a 5x5 matrix, with risk scores, treatments, residual risk, and Section 33 penalty exposure for each.',
          content:
            'Risk assessment is the heart of the DPDPA compliance program. Without it, controls are guesswork; with it, the program is defensible to the Data Protection Board, to customers, and to the Board. This lesson builds a 7-risk register for HealthTech Innovations using a 5x5 likelihood x impact matrix aligned to NIST SP 800-30 (risk assessment) and ISO 31000. Each risk is mapped to a DPDPA section, a Section 33 penalty exposure, a treatment plan, and a residual risk score. The exercise produces deliverable D-04 — the risk register that becomes the basis for the DPIA (Data Protection Impact Assessment).',
          learningObjectives: [
            'Apply a 5x5 likelihood x impact risk matrix aligned to NIST SP 800-30 and ISO 31000',
            'Identify and document 7 top DPDPA risks for HealthTech Innovations',
            'Map each risk to a DPDPA section and Section 33 penalty exposure',
            'Choose risk treatments (mitigate, transfer, accept, avoid) and document residual risk',
          ],
          keyTakeaways: [
            'A 5x5 matrix uses 5 likelihood levels (rare to almost certain) and 5 impact levels (insignificant to catastrophic).',
            'Top risk: Unauthorised access to health records (likelihood high, impact catastrophic, score 25/25, Section 33 exposure ₹250 crore).',
            'Each risk must have a treatment — mitigate (controls), transfer (insurance), accept (document), avoid (cease processing).',
            'Residual risk = inherent risk minus treatment effectiveness — should reduce risk score by 50-80%.',
            'Risk register is reviewed quarterly by Privacy Steering Committee and annually by independent auditor.',
          ],
          sections: [
            {
              id: 'sec-1',
              title: 'Risk Assessment Methodology',
              content: [
                {
                  type: 'paragraph',
                  content:
                    'The risk assessment uses the NIST SP 800-30 Rev 1 methodology: identify threats and vulnerabilities, assess likelihood and impact, compute risk score (likelihood x impact), select treatment, and document residual risk. The 5x5 matrix is the simplest defensible scoring system — larger organisations may use 7x7 or quantitative Monte Carlo simulations. The methodology is documented in the DPDPA Compliance Program Charter and approved by the Privacy Steering Committee.',
                },
                {
                  type: 'callout',
                  content:
                    'NIST SP 800-30 defines risk as a function of: (1) the likelihood that a threat event will occur, (2) the likelihood the threat event will result in adverse impact, and (3) the magnitude of the adverse impact. The DPDPA risk assessment adds a fourth dimension: the regulatory penalty under Section 33 — up to ₹250 crore.',
                  calloutType: 'note',
                },
              ],
            },
            {
              id: 'sec-2',
              title: '5x5 Risk Matrix Template',
              content: [
                {
                  type: 'paragraph',
                  content:
                    'The 5x5 risk matrix uses 5 likelihood levels and 5 impact levels. The intersection is the risk score (1-25). Risks scoring 15+ are High (red, immediate treatment), 8-12 are Medium (yellow, scheduled treatment), 1-6 are Low (green, monitor).',
                },
                {
                  type: 'table',
                  headers: ['Likelihood \\ Impact', '1 Insignificant', '2 Minor', '3 Moderate', '4 Major', '5 Catastrophic'],
                  rows: [
                    ['5 Almost Certain', '5 (M)', '10 (M)', '15 (H)', '20 (H)', '25 (H)'],
                    ['4 Likely', '4 (L)', '8 (M)', '12 (M)', '16 (H)', '20 (H)'],
                    ['3 Possible', '3 (L)', '6 (L)', '9 (M)', '12 (M)', '15 (H)'],
                    ['2 Unlikely', '2 (L)', '4 (L)', '6 (L)', '8 (M)', '10 (M)'],
                    ['1 Rare', '1 (L)', '2 (L)', '3 (L)', '4 (L)', '5 (M)'],
                  ],
                },
                {
                  type: 'callout',
                  content:
                    'Likelihood definitions: Almost Certain (>90% in 12 months), Likely (60-90%), Possible (30-60%), Unlikely (5-30%), Rare (<5%). Impact definitions for health-tech: Catastrophic (>1 lakh records + health data, Section 33 max penalty), Major (10k-1 lakh records), Moderate (1k-10k records), Minor (<1k records), Insignificant (no personal data).',
                  calloutType: 'important',
                },
              ],
            },
            {
              id: 'sec-3',
              title: 'HealthTech Innovations Risk Register (7 Risks)',
              content: [
                {
                  type: 'paragraph',
                  content:
                    'The 7-risk register below captures the highest-priority DPDPA risks for HealthTech Innovations. Each risk is mapped to a DPDPA section, an inherent score, a treatment, and a residual score. The full register (deliverable D-04) contains 24 risks; these 7 are the High-rated subset requiring immediate treatment in Phase 2.',
                },
                {
                  type: 'table',
                  headers: ['Risk', 'DPDPA Sec', 'Likelihood', 'Impact', 'Inherent', 'Treatment', 'Residual', 'Sec 33 Exp.'],
                  rows: [
                    ['R1: Unauthorised access to health records (breach)', 'Sec 8(5)', '4 (Likely)', '5 (Cat.)', '20 (H)', 'Mitigate: AES-256, MFA, RBAC, DLP', '6 (L)', '₹250 cr'],
                    ['R2: Children\'s data exposed in paediatric consults', 'Sec 9', '4 (Likely)', '5 (Cat.)', '20 (H)', 'Mitigate: Verifiable parental consent flow', '8 (M)', '₹250 cr'],
                    ['R3: Vendor breach via AWS / cloud provider', 'Sec 8(2)', '3 (Possible)', '5 (Cat.)', '15 (H)', 'Transfer: DPA + cyber insurance + DPBP', '6 (L)', '₹200 cr'],
                    ['R4: Cross-border transfer to blacklisted country (post-notification)', 'Sec 16', '3 (Possible)', '4 (Major)', '12 (M)', 'Mitigate: India-primary storage, encrypted DR only', '4 (L)', '₹150 cr'],
                    ['R5: Inadequate consent records — non-withdrawable consent', 'Sec 6(4)', '3 (Possible)', '3 (Mod.)', '9 (M)', 'Mitigate: CMP with withdrawal mechanism', '3 (L)', '₹50 cr'],
                    ['R6: Breach notification delay beyond 72 hours (Rule 7)', 'Sec 8(6)', '3 (Possible)', '4 (Major)', '12 (M)', 'Mitigate: Breach playbook + tabletop quarterly', '4 (L)', '₹50 cr'],
                    ['R7: DPO resignation / absence — gap in SDF compliance', 'Sec 8(9)', '2 (Unlikely)', '3 (Mod.)', '6 (L)', 'Mitigate: Backup DPO + external counsel on retainer', '2 (L)', '₹50 cr'],
                  ],
                },
                {
                  type: 'callout',
                  content:
                    'R1 and R2 are the existential risks — a single breach of paediatric health records could attract the maximum ₹250 crore penalty, more than twice HealthTech Innovations\' annual revenue. These risks justify the entire ₹85 lakh program budget and then some.',
                  calloutType: 'warning',
                },
              ],
            },
            {
              id: 'sec-4',
              title: 'Top Risk Deep-Dive: Unauthorised Access to Health Records (R1)',
              content: [
                {
                  type: 'paragraph',
                  content:
                    'R1 — unauthorised access to health records — is the highest inherent risk in the register (score 20/25). The threat actor could be an external attacker (ransomware, SQL injection), an insider (malicious or negligent employee), or a vendor (compromised AWS credentials). The impact is catastrophic — health records of 2M users could expose patients to discrimination, insurance denial, blackmail, and social stigma. The Section 33 penalty exposure is the maximum ₹250 crore. Treatment is multi-layered defence-in-depth:',
                },
                {
                  type: 'list',
                  content: 'R1 treatment: defence-in-depth controls',
                  items: [
                    'Encryption: AES-256 at rest (database, backups, DR), TLS 1.3 in transit.',
                    'Access control: Role-based access (RBAC) with least privilege; mandatory MFA for all admin access.',
                    'Network: Web Application Firewall (WAF); segmentation between telemedicine, pharmacy, labs, ABDM; no direct internet exposure to DB.',
                    'Endpoint: MDM on all company laptops; full-disk encryption; DLP preventing health data exfiltration.',
                    'Monitoring: SIEM with anomaly detection; SOC 2 monitoring 24x7; alerts on bulk data access.',
                    'Vendor: AWS GuardDuty enabled; Secrets Manager for credentials; CloudTrail for audit.',
                    'Insurance: Cyber liability policy ₹100 crore sum insured with HDFC Ergo / ICICI Lombard.',
                    'Human: Security awareness training; quarterly phishing simulations; insider threat programme.',
                  ],
                },
                {
                  type: 'example',
                  content:
                    'Residual risk: After implementation of all 8 controls, R1 inherent score 20 reduces to residual score 6 (Low) — a 70% reduction. The residual risk is accepted by the Privacy Steering Committee on Day 78, with annual review at the independent audit. The justification: residual risk is proportionate to business necessity; further reduction would require ceasing telemedicine operations entirely (avoid treatment), which is not commercially viable.',
                },
              ],
            },
          ],
          glossary: [
            { term: 'Risk Assessment', definition: 'Systematic process of identifying threats, assessing likelihood and impact, computing risk scores, and selecting treatments — aligned to NIST SP 800-30 and ISO 31000.' },
            { term: 'Inherent Risk', definition: 'The risk score before any controls are applied — the raw exposure.' },
            { term: 'Residual Risk', definition: 'The risk score after controls are applied — what remains after treatment.' },
            { term: 'Risk Treatment', definition: 'The decision to mitigate (controls), transfer (insurance), accept (document), or avoid (cease processing).' },
            { term: 'DPIA (Data Protection Impact Assessment)', definition: 'Mandatory assessment for SDFs and high-risk processing under DPDPA Section 10 — built on top of the risk register.' },
          ],
          references: [
            { title: 'NIST SP 800-30 Rev 1 — Guide for Conducting Risk Assessments', source: 'National Institute of Standards and Technology', year: '2012' },
            { title: 'ISO 31000:2018 — Risk Management Guidelines', source: 'International Organization for Standardization', year: '2018' },
            { title: 'DPDPA 2023, Section 8 (Obligations), Section 9 (Children), Section 33 (Penalties)', source: 'Government of India', year: '2023' },
            { title: 'IAPP Privacy Risk Assessment Toolkit', source: 'International Association of Privacy Professionals', year: '2024' },
          ],
        },
        // -------- LESSON 5: PRIVACY POLICY DRAFTING EXERCISE --------
        {
          id: 5,
          title: 'Privacy Policy Drafting Exercise: Template',
          duration: '18 min',
          type: 'exercise',
          description:
            'A full DPDPA Section 5 compliant privacy policy template for HealthTech Innovations — covering all 8 mandatory notice elements, plain language principles, multi-lingual translation requirements, and accessibility per WCAG 2.1 AA.',
          content:
            'The privacy policy is the single most visible DPDPA compliance artifact — it is the document every user sees, every regulator examines first, and every plaintiff\'s lawyer quotes in a complaint. A privacy policy that is incomplete, vague, or in legalese is a Section 5 violation in itself. This lesson builds a complete DPDPA Section 5 compliant privacy policy template for HealthTech Innovations, covering all 8 mandatory notice elements from Section 5(1), the plain language requirement from Section 5(2), the multi-lingual requirement from Section 5(3), and the accessibility requirement. The template is the foundation for the full policy drafted in Chapter 2 Lesson 1.',
          learningObjectives: [
            'Identify all 8 DPDPA Section 5(1) notice elements and structure a privacy policy around them',
            'Apply plain language principles per Section 5(2) — target Grade 8 reading level',
            'Plan multi-lingual translations per Section 5(3) — English + 6 scheduled languages',
            'Ensure accessibility per WCAG 2.1 AA — screen reader, contrast, keyboard navigation',
          ],
          keyTakeaways: [
            'DPDPA Section 5(1) requires 8 specific notice elements: identity, purpose, data categories, data subjects, recipients, rights, retention, and grievance contact.',
            'Section 5(2) requires plain language — Flesch reading score target 60+ (Grade 8 level).',
            'Section 5(3) requires availability in English + the language of the communication — at minimum English, Hindi, and the regional language of major user bases.',
            'Accessibility per WCAG 2.1 AA is mandatory for digital policies — screen reader compatible, 4.5:1 contrast ratio, keyboard navigable.',
            'Privacy policy is a living document — versioned, dated, change-logged, with prominent notice of material changes.',
          ],
          sections: [
            {
              id: 'sec-1',
              title: 'DPDPA Section 5(1): The 8 Mandatory Notice Elements',
              content: [
                {
                  type: 'paragraph',
                  content:
                    'DPDPA Section 5(1) requires the notice to contain specific elements. A privacy policy missing any of these is non-compliant, regardless of how readable or accessible it is. The 8 elements map directly to the policy sections — a defensible privacy policy is structured around them.',
                },
                {
                  type: 'list',
                  content: 'DPDPA Section 5(1) — 8 mandatory notice elements',
                  items: [
                    'Element 1: Identity and contact details of the Data Fiduciary (HealthTech Innovations Pvt Ltd, CIN, registered address, DPO email).',
                    'Element 2: Purpose of processing personal data (telemedicine, e-pharmacy, diagnostics, ABDM, payments, marketing, analytics).',
                    'Element 3: Categories of personal data collected (name, mobile, ABHA ID, symptoms, prescriptions, lab reports, payment details).',
                    'Element 4: Categories of data subjects (patients, doctors, employees, vendor personnel).',
                    'Element 5: Recipients or categories of recipients (AWS, Razorpay, Twilio, Delhivery, lab partners).',
                    'Element 6: Rights of data subjects under Section 11 (access, correction, erasure, grievance, nomination).',
                    'Element 7: Retention period for personal data (varies by data category — see retention schedule).',
                    'Element 8: Manner of grievance redressal (grievance officer name, email, response timeline).',
                  ],
                },
                {
                  type: 'callout',
                  content:
                    'A common compliance failure is burying Element 5 (recipients) deep in the policy or omitting specific vendor names. DPDPA Section 5(1)(f) requires "recipients or categories of recipients" — categories are acceptable, but specific named vendors (AWS, Razorpay, etc.) provide better transparency and reduce regulator scrutiny.',
                  calloutType: 'important',
                },
              ],
            },
            {
              id: 'sec-2',
              title: 'Privacy Policy Template Structure (12 Sections)',
              content: [
                {
                  type: 'paragraph',
                  content:
                    'The HealthTech Innovations privacy policy is structured into 12 sections, mapping directly to the 8 mandatory Section 5(1) elements plus 4 additional sections addressing Section 6 (consent), Section 9 (children), Section 16 (transfers), and Section 8(6) (breach). The full template runs 6-8 pages in English and is reproduced in deliverable D-08.',
                },
                {
                  type: 'list',
                  content: '12-section privacy policy template',
                  items: [
                    'Section 1: Introduction — who we are (Element 1: identity).',
                    'Section 2: What personal data we collect (Element 3: data categories).',
                    'Section 3: How we use your data — purposes (Element 2: purpose).',
                    'Section 4: Legal basis — consent (Sec 6) and deemed consent (Sec 7).',
                    'Section 5: Who we share your data with (Element 5: recipients — full vendor list).',
                    'Section 6: How long we keep your data (Element 7: retention — retention schedule table).',
                    'Section 7: Cross-border data transfers (Section 16 — AWS US-East DR only).',
                    'Section 8: Your data protection rights (Element 6: rights — access, correction, erasure, grievance, nomination).',
                    'Section 9: Children\'s data (Section 9 — verifiable parental consent, no behavioural targeting).',
                    'Section 10: Security measures (Section 8(5) — AES-256, TLS 1.3, MFA, RBAC, WAF, SOC).',
                    'Section 11: Data breach notification (Section 8(6) — Board + affected users within 72 hours).',
                    'Section 12: Grievance officer and contact (Element 8 — name, email, address, response timeline).',
                  ],
                },
                {
                  type: 'example',
                  content:
                    'Sample Section 5 — "Who we share your data with": "We share your personal data with the following categories of recipients, all of whom are contractually bound by Data Processing Agreements aligned with DPDPA Section 8(2): (a) Cloud infrastructure — Amazon Web Services India Pvt Ltd (servers in Mumbai ap-south-1); (b) Payment processing — Razorpay Software Pvt Ltd; (c) SMS/OTP delivery — Twilio Inc. via Mumbai region; (d) Logistics — Delhivery Pvt Ltd; (e) Diagnostic labs — Dr Lal PathLabs, Metropolis Healthcare, Thyrocare; (f) ABDM Consent Manager — operated by the National Health Authority. We do not sell your personal data to any third party."',
                },
              ],
            },
            {
              id: 'sec-3',
              title: 'Plain Language Principles (Section 5(2))',
              content: [
                {
                  type: 'paragraph',
                  content:
                    'DPDPA Section 5(2) requires the notice to be "available in English and the language of the communication... in a clear and plain language." Plain language is not a soft suggestion — it is a statutory requirement. The HealthTech Innovations privacy policy is tested for plain language using the Flesch Reading Ease score, targeting 60+ (Grade 8 reading level, ages 13-14). The 7 plain language principles below are applied to every paragraph.',
                },
                {
                  type: 'list',
                  content: '7 plain language principles for DPDPA Section 5(2)',
                  items: [
                    'Use short sentences (max 20 words average; max 25 words hard cap).',
                    'Use active voice ("We collect your data" not "Your data is collected").',
                    'Use common words ("use" not "utilise"; "share" not "disclose to third parties").',
                    'Avoid jargon — define any technical term on first use.',
                    'Use bullet points and tables for lists, not paragraphs.',
                    'Use "you" and "we" — direct second-person voice.',
                    'Test readability with Flesch score target 60+ (Grade 8 level).',
                  ],
                },
                {
                  type: 'callout',
                  content:
                    'Plain language is enforced by the Flesch Reading Ease score computed automatically on every draft. A privacy policy scoring below 50 (Grade 10+ level) is rejected by the DPO Consultant and returned for rewrite. The final policy scores 62.4 — readable by an average 14-year-old, which is the Indian Grade 8 standard.',
                  calloutType: 'tip',
                },
              ],
            },
            {
              id: 'sec-4',
              title: 'Multi-Lingual and Accessibility Compliance',
              content: [
                {
                  type: 'paragraph',
                  content:
                    'Section 5(3) requires the policy to be available in English plus "the language of the communication" used with the data principal. For HealthTech Innovations, whose 2M users span 30 cities, the policy is translated into 7 languages: English, Hindi (35% of users), Tamil (12%), Telugu (10%), Kannada (8%), Bengali (7%), Marathi (5%). Translation is performed by certified translators and reviewed by native-speaker lawyers. The policy is also accessible per WCAG 2.1 AA — the gold standard for digital accessibility.',
                },
                {
                  type: 'list',
                  content: 'Multi-lingual and accessibility requirements',
                  items: [
                    'Translations: English, Hindi, Tamil, Telugu, Kannada, Bengali, Marathi — 7 versions, all versioned in lockstep.',
                    'Translation quality: Certified translators + native-speaker lawyer review.',
                    'Accessibility: WCAG 2.1 AA — screen reader compatible (ARIA labels), 4.5:1 contrast ratio, keyboard navigable.',
                    'Format: HTML (web), PDF (download), in-app modal (mobile) — all versions in all 7 languages.',
                    'Versioning: Each version dated, change-logged; material changes notified in-app + email.',
                    'Effective date: Prominent on every version; archive of past versions retained 5 years.',
                  ],
                },
                {
                  type: 'callout',
                  content:
                    'Multi-lingual translation is not just a compliance obligation — it is a user trust differentiator. HealthTech Innovations is one of the first Indian health-tech companies to publish a 7-language privacy policy. This becomes a marketing asset: "DPDPA-compliant in 7 Indian languages — privacy in your language."',
                  calloutType: 'tip',
                },
              ],
            },
          ],
          glossary: [
            { term: 'Privacy Policy', definition: 'The public-facing document Data Fiduciaries must publish under DPDPA Section 5, containing the 8 mandatory notice elements.' },
            { term: 'Plain Language', definition: 'Statutory requirement under Section 5(2) that the notice be clear and plain — operationalised through Flesch Reading Ease score 60+.' },
            { term: 'Flesch Reading Ease', definition: 'A readability metric scoring 0-100 — higher scores indicate easier readability; target 60+ for DPDPA compliance (Grade 8 level).' },
            { term: 'WCAG 2.1 AA', definition: 'Web Content Accessibility Guidelines 2.1, Conformance Level AA — the gold standard for digital accessibility, applicable to privacy policies.' },
            { term: 'Material Change', definition: 'A change to the privacy policy that materially affects data principals (new processing purpose, new recipient, longer retention) — requires re-consent.' },
          ],
          references: [
            { title: 'DPDPA 2023, Section 5 (Notice), Section 6 (Consent)', source: 'Government of India', year: '2023' },
            { title: 'Web Content Accessibility Guidelines (WCAG) 2.1', source: 'W3C', year: '2018' },
            { title: 'Flesch Reading Ease — Readability Formula', source: 'Rudolf Flesch', year: '1948, updated' },
            { title: 'MeitY Model Privacy Policy Template (Draft)', source: 'Ministry of Electronics and IT', year: '2024' },
          ],
        },
      ],
    },

    // ============================================================
    // CHAPTER 2: POLICY DRAFTING WORKSHOP
    // ============================================================
    {
      id: 2,
      title: 'Policy Drafting Workshop',
      lessons: [
        // -------- LESSON 1: DRAFTING THE PRIVACY POLICY --------
        {
          id: 1,
          title: 'Drafting the Privacy Policy (Step-by-Step)',
          duration: '20 min',
          type: 'workshop',
          description:
            'A step-by-step workshop drafting the complete HealthTech Innovations privacy policy — all 12 sections, all 8 Section 5(1) elements, with annotated clauses and review checkpoints.',
          content:
            'This workshop lesson walks you through drafting the complete HealthTech Innovations privacy policy, section by section, clause by clause. Where Lesson 5 of Chapter 1 gave you the template structure, this lesson gives you the actual drafted text with annotations explaining why each clause exists, which DPDPA section it satisfies, and what the common drafting pitfalls are. By the end of this workshop, you will have a complete, defensible, plain-language privacy policy ready for Legal review and publication. This is deliverable D-08.',
          learningObjectives: [
            'Draft each of the 12 sections of the HealthTech Innovations privacy policy',
            'Annotate each clause with its DPDPA section reference',
            'Avoid the 10 common privacy policy drafting pitfalls',
            'Prepare the policy for Legal review and publication',
          ],
          keyTakeaways: [
            'Each policy section maps to a specific DPDPA section — annotation makes this mapping auditable.',
            'Avoid vague terms ("may share with partners") — use specific names and specific purposes.',
            'Retention is per-data-category, not a single "we keep it as long as necessary" line.',
            'Rights section must list all 5 Section 11 rights with mechanism to exercise each.',
            'Breach section must commit to the 72-hour Board notification timeline per Rule 7 of DPDP Rules 2025.',
          ],
          sections: [
            {
              id: 'sec-1',
              title: 'Section 1: Introduction (Identity)',
              content: [
                {
                  type: 'paragraph',
                  content:
                    'The introduction establishes the Data Fiduciary identity — satisfying DPDPA Section 5(1)(a). It must include: legal name, CIN, registered address, website, and DPO contact. The introduction also establishes the effective date and version — a privacy policy without an effective date is non-compliant.',
                },
                {
                  type: 'example',
                  content:
                    'Sample Section 1: "HealthTech Innovations Pvt Ltd (CIN: U85100KA2019PTC123456), having its registered office at 5th Floor, Prestige Tech Park, Kadubeesanahalli, Bengaluru 560103, is a Data Fiduciary under the Digital Personal Data Protection Act 2023 (DPDPA). This Privacy Policy describes how we collect, use, share, retain and protect your personal data. Effective date: 1 May 2025. Version: 3.0. Our Data Protection Officer can be contacted at dpo@healthtechinnovations.in or +91-80-XXXX-XXXX."',
                },
                {
                  type: 'callout',
                  content:
                    'Common pitfall: Using a generic privacy@ email instead of a DPO-named email. Section 8(9) requires SDFs to designate a DPO — the privacy policy must publish the DPO contact, not just a generic mailbox.',
                  calloutType: 'warning',
                },
              ],
            },
            {
              id: 'sec-2',
              title: 'Sections 2-3: Data Categories and Purposes',
              content: [
                {
                  type: 'paragraph',
                  content:
                    'Section 2 lists the categories of personal data collected (Section 5(1)(c)) and Section 3 lists the purposes (Section 5(1)(b)). The two sections must align — every data category must have at least one purpose, and every purpose must reference the data categories it needs. Data minimisation (Section 8(3)) is enforced here: any data category without a clear purpose must be removed.',
                },
                {
                  type: 'list',
                  content: 'Categories of personal data collected',
                  items: [
                    'Identity data: Name, date of birth, gender, photograph (for profile).',
                    'Contact data: Mobile number, email, address (delivery for pharmacy, sample collection for labs).',
                    'Health data: Symptoms, medical history, prescriptions, lab reports, ABHA-linked health records.',
                    'Payment data: UPI VPA, card token (not actual card — tokenised per RBI), billing address.',
                    'Usage data: IP address, device ID, app usage events (pseudonymised).',
                    'Marketing data: Marketing consent preferences, communication history.',
                    'Support data: Customer support ticket content, call recordings (with consent).',
                  ],
                },
                {
                  type: 'example',
                  content:
                    'Sample purpose clause: "We use your mobile number to: (a) send you SMS and OTP for account verification; (b) deliver appointment reminders and prescription alerts; (c) send you marketing communications if you have provided granular consent under Section 6. We do not use your mobile number for any other purpose."',
                },
              ],
            },
            {
              id: 'sec-3',
              title: 'Sections 4-7: Legal Basis, Recipients, Retention, Transfers',
              content: [
                {
                  type: 'paragraph',
                  content:
                    'Section 4 establishes the legal basis (Section 6 consent or Section 7 deemed consent). Section 5 lists the recipients with specific vendor names. Section 6 specifies retention per data category — drawing from the retention schedule. Section 7 addresses cross-border transfers under Section 16.',
                },
                {
                  type: 'table',
                  headers: ['Policy Section', 'DPDPA Section', 'Mandatory Content', 'Common Pitfall'],
                  rows: [
                    ['Section 4: Legal Basis', 'Sec 6, 7', 'List each purpose with basis (consent/deemed)', 'Vague "we may also process under legitimate interests" — DPDPA has no legitimate interest basis'],
                    ['Section 5: Recipients', 'Sec 5(1)(f)', 'Specific vendor names + purpose of sharing', 'Generic "trusted partners" without names'],
                    ['Section 6: Retention', 'Sec 8(7)', 'Per-data-category retention table', 'Single "as long as necessary" line'],
                    ['Section 7: Transfers', 'Sec 16', 'Countries + safeguards (DPA, encryption)', 'Omitting cross-border DR backups'],
                  ],
                },
                {
                  type: 'callout',
                  content:
                    'DPDPA Section 7 "deemed consent" is much narrower than GDPR\'s "legitimate interest" — it applies only to specific scenarios (voluntary provision, state functions, employment, etc.). Do not import GDPR-style "legitimate interest" clauses into a DPDPA privacy policy — it is non-compliant.',
                  calloutType: 'warning',
                },
              ],
            },
            {
              id: 'sec-4',
              title: 'Sections 8-12: Rights, Children, Security, Breach, Grievance',
              content: [
                {
                  type: 'paragraph',
                  content:
                    'Sections 8 through 12 close the policy with rights, children\'s data, security, breach, and grievance. Each section maps to specific DPDPA sections and must commit to specific timelines. The grievance section (Section 12) is the most operationally critical — it must name the grievance officer, the response timeline, and the escalation path to the Data Protection Board.',
                },
                {
                  type: 'list',
                  content: 'Sections 8-12 mandatory commitments',
                  items: [
                    'Section 8 — Rights: List all 5 Section 11 rights (access, correction, erasure, grievance, nomination) + mechanism + timeline (Section 11(2) requires response "within the period specified").',
                    'Section 9 — Children: Verifiable parental consent for under-18 (Section 9); no behavioural monitoring; no targeted advertising.',
                    'Section 10 — Security: AES-256 at rest; TLS 1.3 in transit; MFA; RBAC; WAF; annual CERT-In audit.',
                    'Section 11 — Breach: Notify Data Protection Board within 72 hours (Rule 7); notify affected users; publish summary on website.',
                    'Section 12 — Grievance: Grievance officer name; email; phone; postal address; response within 14 days; escalation to Data Protection Board under Section 13(4).',
                  ],
                },
                {
                  type: 'example',
                  content:
                    'Sample Section 12: "Our Grievance Officer is [Name], reachable at grievance.officer@healthtechinnovations.in or +91-80-XXXX-XXXX, or by post at our registered address. We acknowledge grievances within 48 hours and resolve them within 14 days. If you are not satisfied, you may escalate to the Data Protection Board under Section 13(4) of the DPDPA."',
                },
                {
                  type: 'callout',
                  content:
                    'The 14-day grievance resolution timeline is a HealthTech Innovations voluntary commitment — DPDPA Section 11(2) requires response "within the period specified" but MeitY is expected to specify this in DPDP Rules. Voluntary 14-day commitment positions HealthTech ahead of likely regulatory minimum (30-45 days).',
                  calloutType: 'tip',
                },
              ],
            },
          ],
          glossary: [
            { term: 'Data Fiduciary', definition: 'An entity that determines the purpose and means of processing personal data — under DPDPA, the primary compliance obligor (analogous to GDPR controller).' },
            { term: 'Grievance Officer', definition: 'Designated individual under DPDPA Section 8(9) responsible for receiving and resolving data principal grievances — must be named in the privacy policy.' },
            { term: 'Deemed Consent', definition: 'DPDPA Section 7 — processing permitted without explicit consent in specific scenarios; much narrower than GDPR legitimate interests.' },
            { term: 'Data Minimisation', definition: 'DPDPA Section 8(3) — collect only personal data necessary for the stated purpose; enforce through privacy policy Section 2.' },
          ],
          references: [
            { title: 'DPDPA 2023, Sections 5, 6, 7, 8, 9, 11, 16', source: 'Government of India', year: '2023' },
            { title: 'DPDP Rules 2025, Rule 7 (Breach Notification)', source: 'MeitY', year: '2025' },
            { title: 'MeitY Privacy Policy Drafting Guidelines (Pre-Draft)', source: 'MeitY', year: '2024' },
            { title: 'IAPP Privacy Policy Drafting Checklist', source: 'International Association of Privacy Professionals', year: '2024' },
          ],
        },
        // -------- LESSON 2: DRAFTING THE CONSENT NOTICE --------
        {
          id: 2,
          title: 'Drafting the Consent Notice',
          duration: '18 min',
          type: 'workshop',
          description:
            'Drafting layered, granular, multi-lingual consent notices per DPDPA Section 6 conditions and Section 5(3) plain-language requirements — including the special consent flow for children under Section 9.',
          content:
            'The privacy policy is the background document — the consent notice is the foreground interaction. Where the privacy policy says "we may collect X for Y," the consent notice asks "do you consent to us collecting X for Y?" at the moment of collection. DPDPA Section 6 sets strict conditions: consent must be free, specific, informed, unambiguous, and unconditional. Each purpose needs separate (granular) consent. Consent must be withdrawable as easily as given. Children\'s data requires verifiable parental consent under Section 9. This workshop drafts the 6 consent notices HealthTech Innovations deploys across registration, telemedicine, pharmacy, labs, marketing, and analytics.',
          learningObjectives: [
            'Draft layered, granular consent notices satisfying DPDPA Section 6(1) conditions',
            'Implement just-in-time consent UX — ask at the moment of collection, not at registration',
            'Translate consent notices into 7 Indian languages per Section 5(3)',
            'Design the children\'s consent flow with verifiable parental consent per Section 9',
          ],
          keyTakeaways: [
            'DPDPA Section 6(1) consent must be: free, specific, informed, unambiguous, unconditional — 5 qualities.',
            'Granular consent: each processing purpose (telemedicine, marketing, analytics) requires separate consent toggle.',
            'Consent must be withdrawable as easily as given — typically a single-click "Manage Consent" page.',
            'Section 9 requires verifiable parental consent for under-18 — implemented via Aadhaar OTP + parent email.',
            'Multi-lingual consent notices: English + Hindi + Tamil + Telugu + Kannada + Bengali + Marathi.',
          ],
          sections: [
            {
              id: 'sec-1',
              title: 'DPDPA Section 6: The 5 Consent Qualities',
              content: [
                {
                  type: 'paragraph',
                  content:
                    'DPDPA Section 6(1) requires consent to be free, specific, informed, unambiguous, and unconditional. Each quality is operationalised through the consent notice UX. A consent notice that fails any of the 5 qualities is non-compliant — the consent is invalid, and the underlying processing is unlawful.',
                },
                {
                  type: 'table',
                  headers: ['Quality', 'Section 6(1) Sub-Clause', 'Operationalisation'],
                  rows: [
                    ['Free', '6(1)(a)', 'No pre-ticked boxes; no "consent or no service" bundling (unless necessary).'],
                    ['Specific', '6(1)(b)', 'Separate toggle for each purpose — no single "I agree to all".'],
                    ['Informed', '6(1)(c)', 'Concise purpose statement at point of collection; link to full privacy policy.'],
                    ['Unambiguous', '6(1)(d)', 'Affirmative action required (tap "I consent") — no implied consent from inactivity.'],
                    ['Unconditional', '6(1)(e)', 'Cannot bundle consent for unrelated purposes (e.g., telemedicine + marketing).'],
                  ],
                },
                {
                  type: 'callout',
                  content:
                    'A pre-ticked checkbox is not consent under DPDPA Section 6(1) — it fails "unambiguous" and "free" qualities. The Delhi HC ruling infitnessfor1. Sameer Misra v. Jio (2018) presaged this: pre-ticked boxes are not consent. HealthTech Innovations consent flows have no pre-ticked boxes anywhere.',
                  calloutType: 'warning',
                },
              ],
            },
            {
              id: 'sec-2',
              title: 'Layered Consent Architecture (6 Notices)',
              content: [
                {
                  type: 'paragraph',
                  content:
                    'HealthTech Innovations deploys 6 layered consent notices, each at the moment of relevant collection. The layered architecture shows a brief purpose statement (50 words) with a "Learn More" link to the full privacy policy section. This balances the user\'s attention span with the legal completeness requirement.',
                },
                {
                  type: 'list',
                  content: '6 consent notices deployed by HealthTech Innovations',
                  items: [
                    'Notice 1 — Registration: name, mobile, email, ABHA ID; purpose: account creation; basis: Sec 6 consent.',
                    'Notice 2 — Telemedicine: symptoms, video, prescription; purpose: consultation; basis: Sec 6 consent.',
                    'Notice 3 — Pharmacy: prescription upload, delivery address; purpose: medicine delivery; basis: Sec 6 consent.',
                    'Notice 4 — Labs: test name, sample collection address, lab partner; purpose: diagnostic; basis: Sec 6 consent.',
                    'Notice 5 — Marketing: email/SMS/WhatsApp; purpose: promotional; basis: Sec 6 consent (granular opt-in, separate toggle for email vs SMS vs WhatsApp).',
                    'Notice 6 — Analytics: pseudonymised usage events; purpose: product improvement; basis: Sec 6 consent (separate from marketing, separate from product functionality).',
                  ],
                },
                {
                  type: 'example',
                  content:
                    'Sample Notice 2 — Telemedicine consent (English): "To consult with our doctor, we will collect: your symptoms, a video recording of the consultation, and the doctor\'s prescription. This data is shared with the doctor and stored for 3 years as per the Telemedicine Practice Guidelines 2020. You can withdraw consent at any time, but withdrawal does not affect consultations already completed. [I Consent] [Learn More]"',
                },
              ],
            },
            {
              id: 'sec-3',
              title: 'Multi-Lingual Consent Notice Template',
              content: [
                {
                  type: 'paragraph',
                  content:
                    'Section 5(3) requires the notice to be available in English plus the language of communication with the data principal. For HealthTech Innovations, the consent notices are available in 7 languages. The user\'s language preference is set at registration (based on device locale or manual selection) and applies to all subsequent consent notices and communications.',
                },
                {
                  type: 'heading',
                  content: 'Sample Consent Notice — English and Hindi',
                },
                {
                  type: 'list',
                  content: 'Consent Notice 5 — Marketing (English)',
                  items: [
                    'English: "We would like to send you promotional emails, SMS, and WhatsApp messages about health tips, new services, and offers. You can choose your preferred channels below. You can withdraw consent anytime in Settings → Privacy."',
                  ],
                },
                {
                  type: 'list',
                  content: 'Consent Notice 5 — Marketing (Hindi)',
                  items: [
                    'Hindi: "हम आपको स्वास्थ्य सुझाव, नई सेवाओं और ऑफर के बारे में प्रचार ईमेल, एसएमएस और व्हाट्सएप संदेश भेजना चाहेंगे। आप नीचे अपने पसंदीदा चैनल चुन सकते हैं। आप कभी भी सेटिंग्स → गोपनीयता में सहमति वापस ले सकते हैं।"',
                  ],
                },
                {
                  type: 'callout',
                  content:
                    'Translation quality is critical — a literal translation can change meaning. The Hindi version above is reviewed by a native-Hindi lawyer (not Google Translate) to ensure legal accuracy. The phrase "सहमति वापस ले सकते हैं" (can withdraw consent) was specifically chosen over "हटा सकते हैं" (can remove) for legal precision.',
                  calloutType: 'important',
                },
              ],
            },
            {
              id: 'sec-4',
              title: 'Children\'s Consent Flow (Section 9)',
              content: [
                {
                  type: 'paragraph',
                  content:
                    'DPDPA Section 9 requires verifiable parental consent for processing personal data of children under 18. HealthTech Innovations implements this through a 4-step flow: (1) age check at registration (date of birth); (2) if under 18, redirect to parent flow; (3) parent authenticates via Aadhaar OTP + email; (4) parent grants consent for the child\'s processing. The flow also includes behavioural monitoring prohibition and targeted advertising prohibition for children\'s accounts.',
                },
                {
                  type: 'list',
                  content: 'Children\'s consent flow — 4 steps',
                  items: [
                    'Step 1: Age check — user enters date of birth at registration. If DOB indicates under 18, trigger parent flow.',
                    'Step 2: Parent identification — user enters parent Aadhaar number; Aadhaar OTP sent to parent mobile.',
                    'Step 3: Parent authentication — parent enters OTP + confirms via email link (dual authentication).',
                    'Step 4: Parent grants consent — parent reviews the consent notice specific to children (paediatric telemedicine) and grants or denies consent.',
                    'Step 5 (continuous): No behavioural monitoring; no targeted advertising; quarterly audit of children\'s accounts.',
                  ],
                },
                {
                  type: 'callout',
                  content:
                    'Section 9(2) prohibits tracking, behavioural monitoring, and targeted advertising directed at children. HealthTech Innovations disables all behavioural tracking (Mixpanel, Amplitude) for accounts flagged as under-18, and ensures no advertising SDKs are loaded in the children\'s app version.',
                  calloutType: 'warning',
                },
                {
                  type: 'example',
                  content:
                    'A 14-year-old patient in Pune wants to consult a paediatrician via HealthTech Tele-Consult. She enters her date of birth (2011-04-15) → system flags under-18 → parent flow triggered → her mother enters her Aadhaar number → Aadhaar OTP received → mother authenticates → mother reviews and consents to "paediatric telemedicine" purpose specifically. The consultation proceeds. The mother can withdraw consent anytime; the child\'s data is excluded from all marketing and analytics flows.',
                },
              ],
            },
          ],
          glossary: [
            { term: 'Consent Notice', definition: 'The foreground interaction asking data principals for consent at the moment of collection — distinct from the background privacy policy.' },
            { term: 'Granular Consent', definition: 'Separate consent toggle for each processing purpose — required by DPDPA Section 6(1)(b) "specific" quality.' },
            { term: 'Just-in-Time Consent', definition: 'Asking for consent at the moment of relevant data collection, not bundled at registration.' },
            { term: 'Verifiable Parental Consent', definition: 'DPDPA Section 9 requirement for under-18 processing — implemented via Aadhaar OTP + parent email dual authentication.' },
            { term: 'Layered Notice', definition: 'A brief (50-word) purpose statement with "Learn More" link to the full privacy policy — balances user attention with legal completeness.' },
          ],
          references: [
            { title: 'DPDPA 2023, Section 5(3) (Language), Section 6 (Consent), Section 9 (Children)', source: 'Government of India', year: '2023' },
            { title: 'DPDP Rules 2025, Rule 11 (Consent Manager)', source: 'MeitY', year: '2025' },
            { title: 'UIDAI Aadhaar OTP Authentication Framework', source: 'Unique Identification Authority of India', year: '2016, updated' },
            { title: 'IAPP Consent Notice Design Best Practices', source: 'International Association of Privacy Professionals', year: '2024' },
          ],
        },
        // -------- LESSON 3: DRAFTING THE DPA WITH VENDORS --------
        {
          id: 3,
          title: 'Drafting the DPA with Vendors (10 Clauses)',
          duration: '19 min',
          type: 'workshop',
          description:
            'A complete Data Processing Agreement (DPA) template for HealthTech Innovations\' 17 vendors — 10 mandatory clauses aligned with DPDPA Section 8(2) processor liability, NIST CSF, and ISO 27001 Annex A.',
          content:
            'A Data Processing Agreement (DPA) is the contract between the Data Fiduciary (HealthTech Innovations) and each Data Processor (AWS, Razorpay, Twilio, etc.). DPDPA Section 8(2) makes the Data Fiduciary liable for the acts of its processors — so a strong DPA is not optional, it is the legal backstop. This workshop drafts the 10-clause DPA template that HealthTech Innovations executes with all 17 vendors. By the end of this workshop, you will have a complete DPA template you can adapt for any Indian Data Fiduciary-vendor relationship. This is deliverable D-10.',
          learningObjectives: [
            'Identify when a DPA is mandatory under DPDPA Section 8(2)',
            'Draft 10 mandatory DPA clauses covering scope, security, breach, audit, deletion',
            'Align DPA with NIST CSF and ISO 27001 Annex A control families',
            'Manage sub-processors through flow-down clauses and prior authorisation',
          ],
          keyTakeaways: [
            'DPA is mandatory whenever a vendor processes personal data on behalf of HealthTech Innovations — 17 vendors in scope.',
            '10 mandatory clauses: scope, sub-processors, confidentiality, security, breach, DSAR assistance, audit, transfers, deletion, liability.',
            'Sub-processors require prior written authorisation — HealthTech can veto new sub-processors.',
            'Cross-border transfers require DPA + Section 16 transfer analysis + country whitelist check.',
            'Liability cap should be 2x annual contract value minimum — unlimited for wilful misconduct.',
          ],
          sections: [
            {
              id: 'sec-1',
              title: 'When is a DPA Mandatory?',
              content: [
                {
                  type: 'paragraph',
                  content:
                    'DPDPA Section 8(2) makes the Data Fiduciary liable for the acts and omissions of its Data Processors. A Data Processor is any entity that processes personal data on behalf of the Data Fiduciary — typically cloud providers, payment processors, SMS providers, logistics partners, analytics platforms, and SaaS vendors. A DPA is mandatory whenever personal data flows to a vendor for processing on HealthTech Innovations\' behalf.',
                },
                {
                  type: 'list',
                  content: '17 vendors requiring DPAs at HealthTech Innovations',
                  items: [
                    'Cloud infrastructure: Amazon Web Services India Pvt Ltd (Mumbai region).',
                    'Payment processing: Razorpay Software Pvt Ltd.',
                    'SMS/OTP delivery: Twilio Inc. (via Mumbai region) + MSG91.',
                    'Email delivery: Amazon SES + Mailchimp (transitioning to Indian alternative).',
                    'Logistics: Delhivery Pvt Ltd + Ecom Express.',
                    'Diagnostic lab partners: Dr Lal PathLabs, Metropolis Healthcare, Thyrocare.',
                    'Customer support: Zendesk (transitioning to Freshdesk India).',
                    'Analytics: Mixpanel (transitioning to in-house PostHog).',
                    'Marketing CRM: HubSpot (transitioning to LeadSquared India).',
                    'Call recording: Exotel.',
                    'Identity verification: Setu + Signzy (Aadhaar OTP).',
                    'ABDM integration: NHA Consent Manager (government API — special terms).',
                  ],
                },
                {
                  type: 'callout',
                  content:
                    'Three vendors — Mailchimp, Mixpanel, HubSpot — currently process data outside India and were flagged in Phase 1 RoPA. HealthTech Innovations is transitioning all three to Indian alternatives (LeadSquared, in-house PostHog, Amazon SES Mumbai) within Phase 2 to eliminate the cross-border dependency entirely. This is a Section 16 risk treatment — avoid rather than mitigate.',
                  calloutType: 'warning',
                },
              ],
            },
            {
              id: 'sec-2',
              title: '10 Mandatory DPA Clauses',
              content: [
                {
                  type: 'paragraph',
                  content:
                    'The 10-clause DPA template covers all DPDPA Section 8 obligations, plus NIST CSF and ISO 27001 Annex A alignment for security, plus operational provisions for audit, breach, and termination. Each clause is essential — omitting any one creates a compliance gap.',
                },
                {
                  type: 'list',
                  content: '10 mandatory DPA clauses',
                  items: [
                    'Clause 1 — Processing Scope: Vendor processes personal data only on HealthTech\'s documented instructions; purposes explicitly listed; vendor cannot use data for own purposes.',
                    'Clause 2 — Sub-Processors: Prior written authorisation for any sub-processor; flow-down of all DPA obligations; right to veto; 30-day notice of changes; list of current sub-processors attached as Annex.',
                    'Clause 3 — Confidentiality: Vendor personnel under written confidentiality obligations; access limited to need-to-know; background checks for personnel with personal data access.',
                    'Clause 4 — Security Measures: NIST CSF Identify-Protect-Detect-Respond-Recover; ISO 27001 Annex A controls; AES-256 at rest; TLS 1.3 in transit; MFA; RBAC; WAF; SOC 2 Type II annual report; CERT-In empanelled audit annual.',
                    'Clause 5 — Breach Notification: Vendor notifies HealthTech within 24 hours of breach detection; full incident report within 72 hours; cooperation with HealthTech\'s Rule 7 Board notification; affected user data list.',
                    'Clause 6 — Data Subject Rights Assistance: Vendor assists HealthTech with DSAR (access, correction, erasure) within 7 days of request; technical capability to extract and delete specific user data on demand.',
                    'Clause 7 — Audit Rights: HealthTech (or its auditor) has right to audit vendor annually; 30-day notice; vendor provides SOC 2 Type II report + ISO 27001 certificate + CERT-In audit report on request.',
                    'Clause 8 — Cross-Border Transfers: No transfer outside India without HealthTech\'s prior written consent; Section 16 country blacklist check; if transfer permitted, DPA + Standard Contractual Clauses (SCCs) + encryption.',
                    'Clause 9 — Return/Deletion on Termination: Within 30 days of termination, vendor returns or deletes all personal data; signed deletion certificate; cryptographic shredding for backups.',
                    'Clause 10 — Liability and Indemnity: Liability cap 2x annual contract value minimum; unlimited for wilful misconduct, breach of confidentiality, breach of security; vendor indemnifies HealthTech for any DPB penalty arising from vendor breach.',
                  ],
                },
                {
                  type: 'callout',
                  content:
                    'Clause 10 (Liability) is the most negotiated. Vendors typically propose liability cap = 1x annual contract value (often ₹5-10 lakh for cloud), which is grossly inadequate against a ₹250 crore DPDPA penalty. HealthTech\'s negotiation position: 2x minimum, unlimited for wilful misconduct, and vendor indemnifies for any DPB penalty attributable to vendor breach. AWS, Razorpay, and Twilio all accepted this in 2024 negotiations after escalation.',
                  calloutType: 'important',
                },
              ],
            },
            {
              id: 'sec-3',
              title: 'Sub-Processor Management',
              content: [
                {
                  type: 'paragraph',
                  content:
                    'Sub-processors are vendors of vendors — for example, AWS uses sub-processors for networking (Equinix), content delivery (CloudFront), DNS (Route 53). Each sub-processor in the chain must be subject to flow-down DPA terms. HealthTech Innovations maintains a sub-processor register (Annex to each DPA) and has the right to veto new sub-processors with 30 days\' notice.',
                },
                {
                  type: 'list',
                  content: 'Sub-processor management process',
                  items: [
                    'Vendor notifies HealthTech of any new sub-processor at least 30 days before activation.',
                    'HealthTech reviews sub-processor: location, security certifications, data access scope.',
                    'If HealthTech objects, vendor must use alternative sub-processor or terminate DPA.',
                    'Flow-down obligations: vendor\'s contract with sub-processor mirrors all 10 DPA clauses.',
                    'Sub-processor register updated quarterly and presented to Privacy Steering Committee.',
                  ],
                },
                {
                  type: 'example',
                  content:
                    'AWS notified HealthTech Innovations in March 2024 of a new sub-processor (Snowflake) for analytics. HealthTech reviewed Snowflake\'s security posture (SOC 2 Type II, ISO 27001, HIPAA) and approved, with the condition that Snowflake access be limited to non-personal data only. The sub-processor register was updated and the change noted in the quarterly Privacy Steering Committee review.',
                },
              ],
            },
            {
              id: 'sec-4',
              title: 'Sector-Specific DPA Additions',
              content: [
                {
                  type: 'paragraph',
                  content:
                    'For specific sectors, the standard 10-clause DPA must be augmented with sector-specific clauses. For HealthTech Innovations: (a) health data clause (NHA ABDM Policy compliance); (b) payment data clause (RBI localisation and tokenisation); (c) telemedicine clause (Telemedicine Practice Guidelines 3-year retention). These sector-specific addenda are attached as Annexes to the base DPA.',
                },
                {
                  type: 'table',
                  headers: ['Vendor Type', 'Base DPA', 'Sector-Specific Addendum', 'Sectoral Regulator'],
                  rows: [
                    ['Cloud (AWS)', '10 clauses', 'NHA ABDM Annex + CERT-In 6-hour breach', 'NHA + CERT-In'],
                    ['Payment (Razorpay)', '10 clauses', 'RBI Storage of Payment Data + Tokenisation', 'RBI'],
                    ['SMS (Twilio, MSG91)', '10 clauses', 'TRAI TCCCPR 2018 DLT registration', 'TRAI'],
                    ['Labs (Dr Lal, Metropolis)', '10 clauses', 'NABL accreditation + ABDM standards', 'NABL + NHA'],
                    ['Logistics (Delhivery)', '10 clauses', 'Address-only sharing (no health data)', '—'],
                  ],
                },
                {
                  type: 'callout',
                  content:
                    'The sector-specific addenda reflect Module 19\'s multi-regulator reality — a single vendor may trigger multiple sectoral regimes. The DPA template\'s modularity (base 10 + sector-specific annexes) keeps the contract manageable while ensuring full sectoral coverage.',
                  calloutType: 'tip',
                },
              ],
            },
          ],
          glossary: [
            { term: 'DPA (Data Processing Agreement)', definition: 'Contract between Data Fiduciary and Data Processor establishing the terms on which processor handles personal data — mandatory under DPDPA Section 8(2).' },
            { term: 'Data Processor', definition: 'An entity that processes personal data on behalf of the Data Fiduciary — analogous to GDPR processor.' },
            { term: 'Sub-Processor', definition: 'A vendor engaged by a Data Processor to process personal data on its behalf — requires flow-down DPA terms and prior authorisation.' },
            { term: 'Flow-Down Clause', definition: 'Contractual provision requiring the Data Processor to impose equivalent obligations on its sub-processors.' },
            { term: 'Liability Cap', definition: 'Maximum liability under the DPA — should be 2x annual contract value minimum, unlimited for wilful misconduct.' },
          ],
          references: [
            { title: 'DPDPA 2023, Section 8(2) (Processor Liability), Section 8(5) (Security)', source: 'Government of India', year: '2023' },
            { title: 'NIST Cybersecurity Framework v2.0', source: 'National Institute of Standards and Technology', year: '2024' },
            { title: 'ISO/IEC 27001:2022 — Annex A Controls', source: 'International Organization for Standardization', year: '2022' },
            { title: 'RBI Storage of Payment System Data Circular (6 April 2018)', source: 'Reserve Bank of India', year: '2018' },
            { title: 'IAPP DPA Drafting Checklist', source: 'International Association of Privacy Professionals', year: '2024' },
          ],
        },
        // -------- LESSON 4: DRAFTING THE BREACH RESPONSE PLAN --------
        {
          id: 4,
          title: 'Drafting the Breach Response Plan (Rule 7)',
          duration: '20 min',
          type: 'workshop',
          description:
            'A complete breach response plan for HealthTech Innovations per Rule 7 of DPDP Rules 2025 — 6-phase structure (detect, contain, eradicate, notify, recover, review), 3-tier severity classification, 72-hour Board notification workflow, and tabletop exercise design.',
          content:
            'A breach is not a question of "if" but "when." HealthTech Innovations suffered a minor breach in March 2023 (4,200 records exposed via an API endpoint). When the next breach happens — and it will — the question will not be "did you prevent it?" but "did you respond correctly?" DPDPA Section 8(6) requires Data Fiduciaries to notify the Data Protection Board of any breach. Rule 7 of DPDP Rules 2025 specifies the content and timeline — 72 hours to the Board, plus notification to affected data principals. This workshop drafts the complete breach response plan (deliverable D-11) with 6 phases, 3 severity tiers, the 72-hour Board notification workflow, and a tabletop exercise design.',
          learningObjectives: [
            'Draft a breach response plan per Rule 7 of DPDP Rules 2025',
            'Implement the 72-hour Board notification timeline with Form DP-1',
            'Define 3-tier severity classification with response procedures',
            'Design an annual tabletop exercise to test the plan',
          ],
          keyTakeaways: [
            'Rule 7 of DPDP Rules 2025 mandates Board notification within 72 hours of breach awareness.',
            'Affected data principals must also be notified with specific content (nature, data exposed, mitigation, grievance officer contact).',
            '6-phase structure: Detect → Contain → Eradicate → Notify → Recover → Review.',
            '3 severity tiers: T1 Critical (>10K records or health data), T2 Major (1K-10K records), T3 Minor (<1K records).',
            'Annual tabletop exercise is mandatory for SDFs under Section 10; quarterly for T1 risks.',
          ],
          sections: [
            {
              id: 'sec-1',
              title: 'Rule 7 of DPDP Rules 2025: Breach Notification Requirements',
              content: [
                {
                  type: 'paragraph',
                  content:
                    'Rule 7 of the DPDP Rules 2025 (notified 3 January 2025) operationalises DPDPA Section 8(6) breach notification. The Rule requires: (1) notification to the Data Protection Board within 72 hours of becoming aware of a breach; (2) notification to affected data principals; (3) specific content in both notifications — nature of breach, categories of data affected, approximate number of data principals, mitigating steps, grievance officer contact.',
                },
                {
                  type: 'list',
                  content: 'Rule 7 mandatory breach notification content',
                  items: [
                    'Nature of the breach (unauthorised access, disclosure, alteration, loss, deletion).',
                    'Categories of personal data affected (identity, contact, health, payment).',
                    'Approximate number of data principals affected.',
                    'Approximate number of personal data records affected.',
                    'Mitigating steps taken or proposed.',
                    'Grievance officer contact for affected data principals.',
                    'Possible remedial actions for affected data principals.',
                    'Whether breach reported to other authorities (CERT-In, NHA, RBI).',
                  ],
                },
                {
                  type: 'callout',
                  content:
                    'The 72-hour clock starts at "awareness" — when HealthTech has reasonable belief a breach occurred, not when full investigation completes. Early notification with partial information is preferred over late notification with complete information. Late notification attracts Section 33 penalty up to ₹50 crore.',
                  calloutType: 'warning',
                },
              ],
            },
            {
              id: 'sec-2',
              title: 'Breach Response Plan: 6-Phase Structure',
              content: [
                {
                  type: 'paragraph',
                  content:
                    'The breach response plan is structured into 6 phases — Detect, Contain, Eradicate, Notify, Recover, Review. Each phase has named owners, defined activities, and timeline targets. The 6-phase structure aligns with NIST SP 800-61 Rev 2 (Computer Security Incident Handling Guide) and is industry-standard.',
                },
                {
                  type: 'table',
                  headers: ['Phase', 'Activities', 'Owner', 'Timeline'],
                  rows: [
                    ['1. Detect', 'Alert triage, initial assessment, severity classification', 'SOC + CISO', '0-2 hours'],
                    ['2. Contain', 'Isolate affected systems, revoke credentials, block exfiltration', 'CISO + Engineering', '2-24 hours'],
                    ['3. Eradicate', 'Remove malware, patch vulnerabilities, reset all credentials', 'Engineering + CISO', '24-48 hours'],
                    ['4. Notify', 'Board notification (Form DP-1), affected users, CERT-In, NHA, RBI if payment', 'DPO + Legal + Communications', '48-72 hours'],
                    ['5. Recover', 'Restore from backups, validate integrity, resume operations', 'Engineering + CISO', '72 hours - 7 days'],
                    ['6. Review', 'Post-incident review, root cause analysis, plan update', 'DPO + CISO + Privacy Committee', '7-30 days'],
                  ],
                },
                {
                  type: 'callout',
                  content:
                    'The 72-hour Board notification occurs in Phase 4 — it requires Phases 1-3 to be largely complete (containment done, scope understood). The 48-hour window for Phases 1-3 is aggressive but achievable with a tested playbook. Tabletop exercises (Lesson Phase 3 Day 80) validate the timeline.',
                  calloutType: 'important',
                },
              ],
            },
            {
              id: 'sec-3',
              title: 'Severity Tiers and Escalation Matrix',
              content: [
                {
                  type: 'paragraph',
                  content:
                    'Breaches are classified into 3 severity tiers, each triggering a different escalation, notification, and resource allocation. T1 (Critical) requires immediate CEO escalation, full incident response team activation, and 72-hour Board notification. T2 (Major) requires DPO escalation and 72-hour Board notification if personal data is involved. T3 (Minor) requires Privacy Office logging and review at quarterly Privacy Steering Committee.',
                },
                {
                  type: 'table',
                  headers: ['Tier', 'Definition', 'Examples', 'Escalation', 'Board Notification'],
                  rows: [
                    ['T1 Critical', '>10K records OR health data OR payment data', 'AWS S3 bucket public exposure; DB exfiltration; paediatric data leak', 'CEO + DPO + CISO + Legal + Communications immediately', 'Yes — 72 hours'],
                    ['T2 Major', '1K-10K records, non-health, non-payment', 'Email list leak; support ticket exposure; analytics event dump', 'DPO + CISO + Legal', 'Yes — 72 hours'],
                    ['T3 Minor', '<1K records or no personal data', 'Single user\'s data exposed to another user; internal access log anomaly', 'Privacy Office + CISO review', 'No — log quarterly'],
                  ],
                },
                {
                  type: 'example',
                  content:
                    'T1 tabletop scenario: At 02:30 AM Saturday, AWS GuardDuty alerts on anomalous S3 download of 47,000 telemedicine video files from an unfamiliar IP. SOC escalates to CISO within 30 minutes. CISO classifies T1 Critical. CEO, DPO, Legal Head, Communications Head all paged by 03:15 AM. By 04:00 AM, AWS credentials revoked, IP blocked, IR team activated. By 08:00 AM, scope confirmed (47,000 video files). By Saturday 18:00, Board notification drafted (Form DP-1). By Sunday 02:30 AM (24 hours from awareness), Board notified via online portal. By Monday, affected users emailed. By Day 7, post-incident review complete.',
                },
              ],
            },
            {
              id: 'sec-4',
              title: 'Tabletop Exercise Design',
              content: [
                {
                  type: 'paragraph',
                  content:
                    'A breach plan untested is a breach plan broken. The annual tabletop exercise (mandatory for SDFs under Section 10) is a 4-hour simulated breach with all incident response team members physically or virtually present. The exercise validates the 6-phase timeline, surfaces gaps in the plan, and trains team members on their roles. A certified facilitator (typically from the audit firm or external counsel) runs the exercise.',
                },
                {
                  type: 'list',
                  content: 'Tabletop exercise structure (4 hours)',
                  items: [
                    'Hour 1 — Scenario briefing: Facilitator presents T1 breach scenario (e.g., ransomware on telemedicine DB).',
                    'Hour 2 — Detection and containment role-play: Each team member describes their Phase 1-2 actions; facilitator injects complications (CEO unavailable, AWS support slow).',
                    'Hour 3 — Notification drafting: Team drafts Form DP-1 (Board notification) and affected user email; legal review; communications sign-off.',
                    'Hour 4 — After-action review: Facilitator highlights gaps; team documents remediation actions; follow-up tasks assigned.',
                  ],
                },
                {
                  type: 'callout',
                  content:
                    'The Day 80 tabletop (Phase 3 of the 90-day plan) tested the breach plan with a simulated AWS Mumbai region outage + DB exfiltration. Three gaps surfaced: (1) DPO backup not defined when primary DPO on leave; (2) Communications template for user email missing Hindi/Tamil translations; (3) AWS support escalation contact not in crisis contact list. All three remediated by Day 85.',
                  calloutType: 'tip',
                },
              ],
            },
          ],
          glossary: [
            { term: 'Personal Data Breach', definition: 'Unauthorised access, disclosure, alteration, loss, or deletion of personal data — triggering DPDPA Section 8(6) and Rule 7 notification.' },
            { term: 'Form DP-1', definition: 'The breach notification form prescribed under Rule 7 of DPDP Rules 2025 for notifying the Data Protection Board.' },
            { term: 'Tabletop Exercise', definition: 'A simulated breach scenario used to test the breach response plan — mandatory annually for SDFs under DPDPA Section 10.' },
            { term: 'Severity Tier', definition: 'Classification of breach impact (T1 Critical, T2 Major, T3 Minor) determining escalation, notification, and resource allocation.' },
            { term: 'Post-Incident Review', definition: 'Documented analysis after breach resolution identifying root cause, response gaps, and remediation actions — feeds back into plan updates.' },
          ],
          references: [
            { title: 'DPDPA 2023, Section 8(6) (Breach Notification), Section 10 (SDF)', source: 'Government of India', year: '2023' },
            { title: 'DPDP Rules 2025, Rule 7 (Breach Notification, Form DP-1)', source: 'MeitY', year: '2025' },
            { title: 'NIST SP 800-61 Rev 2 — Computer Security Incident Handling Guide', source: 'National Institute of Standards and Technology', year: '2012' },
            { title: 'CERT-In Directions 28 April 2022 (6-hour reporting)', source: 'Indian Computer Emergency Response Team', year: '2022' },
            { title: 'IAPP Privacy Breach Response Playbook', source: 'International Association of Privacy Professionals', year: '2024' },
          ],
        },
      ],
    },

    // ============================================================
    // CHAPTER 3: FINAL PROJECT SUBMISSION
    // ============================================================
    {
      id: 3,
      title: 'Final Project Submission',
      lessons: [
        // -------- LESSON 1: FINAL SUBMISSION REQUIREMENTS --------
        {
          id: 1,
          title: 'Final Submission Requirements',
          duration: '15 min',
          type: 'video',
          description:
            'The complete deliverables list for the HealthTech Innovations capstone — 12 deliverables across policy, technical, governance, training, and audit, with format specifications, evaluation rubric, and common pitfalls.',
          content:
            'The capstone project culminates in a final submission of 12 deliverables that collectively demonstrate end-to-end DPDPA compliance competency. The deliverables span policy documents (privacy policy, consent notices, DPAs), technical artifacts (RoPA, risk register, breach plan), governance documents (project charter, Privacy Steering Committee charter), training materials (employee awareness module), and audit evidence (independent audit report, self-assessment checklist). This lesson walks through the complete deliverables list, submission format, evaluation rubric, and common pitfalls. By the end of this lesson, you will know exactly what to submit, in what format, and how it will be evaluated.',
          learningObjectives: [
            'Compile 12 capstone deliverables into a final submission package',
            'Format deliverables per the submission template (PDF + markdown source)',
            'Apply the 100-point evaluation rubric (completeness 40%, accuracy 30%, practicality 20%, presentation 10%)',
            'Avoid the 10 common submission pitfalls',
          ],
          keyTakeaways: [
            '12 deliverables: RoPA, risk register, 90-day plan, privacy policy, consent notices, vendor DPAs, breach plan, DPIA, training module, audit report, self-assessment checklist, executive summary.',
            'Format: PDF for final submission + markdown/source for editability; named with consistent D-XX prefix.',
            'Evaluation rubric: Completeness 40%, Accuracy 30%, Practicality 20%, Presentation 10% — 100 points total.',
            'Passing threshold: 80/100; re-submission allowed once with feedback.',
            'Common pitfall: Inadequate cross-referencing between deliverables (RoPA flows not reflected in privacy policy Section 5).',
          ],
          sections: [
            {
              id: 'sec-1',
              title: '12 Deliverables List',
              content: [
                {
                  type: 'paragraph',
                  content:
                    'The 12 capstone deliverables cover the full DPDPA compliance program for HealthTech Innovations. Each deliverable has a unique ID (D-01 through D-12), a defined format, a point allocation in the evaluation rubric, and a corresponding module from which it draws. The deliverables are designed to be internally consistent — the RoPA informs the privacy policy, the privacy policy informs the consent notices, the risk register informs the breach plan, and so on.',
                },
                {
                  type: 'table',
                  headers: ['ID', 'Deliverable', 'Format', 'Points', 'Source Module'],
                  rows: [
                    ['D-01', 'Project Charter & Privacy Steering Committee constitution', 'PDF + Doc', '5', 'Module 14'],
                    ['D-02', 'Records of Processing Activity (RoPA) — 12 data flows', 'Excel + PDF', '10', 'Module 5'],
                    ['D-03', '90-Day Compliance Roadmap with milestones', 'Gantt + PDF', '8', 'Module 14'],
                    ['D-04', 'Risk Register (7 risks + treatments + residual)', 'Excel + PDF', '10', 'Module 12'],
                    ['D-05', 'DPIA — 3 high-risk processing activities', 'PDF', '10', 'Module 12'],
                    ['D-06', 'Privacy Policy (12 sections, 7 languages)', 'PDF + HTML', '15', 'Module 6'],
                    ['D-07', 'Erasure Runbook + Retention Schedule', 'PDF', '5', 'Module 5'],
                    ['D-08', 'Consent Notices (6 layered, 7 languages each)', 'PDF + UX mockups', '10', 'Module 6'],
                    ['D-09', 'Children\'s Consent Flow with verifiable parental consent', 'UX + technical spec', '5', 'Module 9'],
                    ['D-10', 'Vendor DPA Template (10 clauses) + 3 executed DPAs', 'PDF + Word', '10', 'Module 11'],
                    ['D-11', 'Breach Response Plan + Form DP-1 template + tabletop design', 'PDF', '7', 'Module 13'],
                    ['D-12', '30-Point Self-Assessment Checklist + Executive Summary', 'PDF', '5', 'Module 14'],
                  ],
                },
                {
                  type: 'callout',
                  content:
                    '12 deliverables total 100 points. The heaviest-weighted are Privacy Policy (15), RoPA (10), Risk Register (10), DPIA (10), Consent Notices (10), Vendor DPA (10) — these are the operational artifacts that prove DPDPA compliance. Project charter, erasure runbook, and executive summary are lower-weighted because they are procedural rather than operational.',
                  calloutType: 'note',
                },
              ],
            },
            {
              id: 'sec-2',
              title: 'Submission Format',
              content: [
                {
                  type: 'paragraph',
                  content:
                    'Each deliverable is submitted in two formats: a final PDF for evaluation and the editable source (markdown, Word, Excel, Figma) for reviewer annotation. Deliverables are named consistently with the D-XX prefix. All deliverables are bundled into a single ZIP file with a manifest index for the evaluator.',
                },
                {
                  type: 'list',
                  content: 'Submission format requirements',
                  items: [
                    'Naming: D-XX-ShortName-v1.0-YYYYMMDD (e.g., D-06-PrivacyPolicy-v1.0-20250501.pdf).',
                    'Final format: PDF for text/UX; Excel for matrices; Figma for UX mockups; HTML for live privacy policy.',
                    'Source format: Markdown for text; .docx for legal; .xlsx for matrices; .fig for UX.',
                    'Manifest: index.md listing all 12 deliverables with one-line description each.',
                    'Bundle: Single ZIP file named Capstone-HealthTechInnovations-LastName-YYYYMMDD.zip.',
                    'Submission portal: Uploaded to the course LMS by Day 90 deadline.',
                  ],
                },
                {
                  type: 'callout',
                  content:
                    'Late submission attracts a 10-point penalty per day, capped at 30 points. Re-submission is allowed once within 14 days of feedback — only the failing deliverables need re-submission, not all 12.',
                  calloutType: 'warning',
                },
              ],
            },
            {
              id: 'sec-3',
              title: 'Evaluation Rubric (100 Points)',
              content: [
                {
                  type: 'paragraph',
                  content:
                    'The 100-point evaluation rubric is applied to the aggregate submission, not to individual deliverables. A submission scoring 80+ passes; 70-79 requires re-submission; below 70 requires re-enrolment. The rubric is split across 4 dimensions, each weighted to reflect real-world compliance priorities.',
                },
                {
                  type: 'table',
                  headers: ['Dimension', 'Weight', 'What is Evaluated', 'Common Failure'],
                  rows: [
                    ['Completeness', '40%', 'All 8 Section 5 elements in privacy policy; all 10 DPA clauses; all 6 phases in breach plan', 'Missing retention schedule; missing grievance officer name'],
                    ['Accuracy', '30%', 'DPDPA sections cited correctly; penalties correctly stated; sectoral rules correctly applied', 'Citing GDPR Article 6 lawful basis instead of DPDPA Section 7 deemed consent'],
                    ['Practicality', '20%', 'Deliverables operationally usable by a real DPO; UX flows implementable; timelines realistic', 'Privacy policy with 30-page legal monograph unreadable to patients'],
                    ['Presentation', '10%', 'Professional formatting; consistent versioning; clear cross-references', 'Inconsistent fonts; no version numbers; no table of contents'],
                  ],
                },
                {
                  type: 'example',
                  content:
                    'A submission scoring 36/40 completeness, 27/30 accuracy, 18/20 practicality, 8/10 presentation = 89/100 → Pass with distinction. A submission scoring 32/40, 21/30, 14/20, 7/10 = 74/100 → Re-submission required.',
                },
              ],
            },
            {
              id: 'sec-4',
              title: 'Common Pitfalls and How to Avoid Them',
              content: [
                {
                  type: 'paragraph',
                  content:
                    'Year-over-year evaluation of capstone submissions reveals 10 common pitfalls. Each pitfall is avoidable with careful review against the source modules. The capstone is the integration module — most failures are integration failures (deliverables don\'t reference each other) rather than drafting failures within a single deliverable.',
                },
                {
                  type: 'list',
                  content: '10 common capstone submission pitfalls',
                  items: [
                    'Pitfall 1: RoPA data flows not reflected in privacy policy Section 5 (recipients).',
                    'Pitfall 2: Privacy policy in English only — missing Section 5(3) multi-lingual requirement.',
                    'Pitfall 3: Consent notices bundled into a single toggle — fails Section 6(1)(b) "specific" quality.',
                    'Pitfall 4: DPA without sub-processor clause — fails DPDPA Section 8(2) flow-down.',
                    'Pitfall 5: Breach plan without Form DP-1 template — incomplete Rule 7 compliance.',
                    'Pitfall 6: Risk register without residual risk scores — incomplete treatment analysis.',
                    'Pitfall 7: Children\'s flow without verifiable parental consent mechanism — fails Section 9.',
                    'Pitfall 8: Retention schedule without sectoral reconciliation — Telemedicine 3yr, ABDM 5yr, PMLA 5yr missing.',
                    'Pitfall 9: Self-assessment checklist without remediation timeline — incomplete.',
                    'Pitfall 10: Executive summary without budget justification — fails Board presentation standard.',
                  ],
                },
                {
                  type: 'callout',
                  content:
                    'Before submission, perform a peer review against this 10-pitfall list. Each pitfall caught pre-submission saves 3-5 points. A clean submission avoiding all 10 pitfalls typically scores 85+.',
                  calloutType: 'tip',
                },
              ],
            },
          ],
          glossary: [
            { term: 'Deliverable', definition: 'A specific artifact produced as part of the capstone submission — 12 in total, each with a unique D-XX ID.' },
            { term: 'Evaluation Rubric', definition: 'The 100-point scoring framework across 4 dimensions (completeness, accuracy, practicality, presentation) used to grade the capstone submission.' },
            { term: 'Manifest', definition: 'An index.md file listing all 12 deliverables with one-line descriptions, included in the submission ZIP bundle.' },
            { term: 'Re-Submission', definition: 'A second submission allowed within 14 days of feedback for submissions scoring 70-79 — only failing deliverables re-submitted.' },
          ],
          references: [
            { title: 'DPDPA 2023, Sections 4-22 (Operational Obligations)', source: 'Government of India', year: '2023' },
            { title: 'DPDP Rules 2025, Rules 7-11 (Breach, SDF, Consent Manager)', source: 'MeitY', year: '2025' },
            { title: 'MeitY Capstone Submission Template (Draft)', source: 'Ministry of Electronics and IT', year: '2024' },
            { title: 'IAPP Privacy Program Management Framework', source: 'International Association of Privacy Professionals', year: '2024' },
          ],
        },
        // -------- LESSON 2: SELF-ASSESSMENT CHECKLIST --------
        {
          id: 2,
          title: 'Self-Assessment Checklist (30 Points)',
          duration: '14 min',
          type: 'exercise',
          description:
            'A 30-point self-assessment compliance audit for HealthTech Innovations covering all DPDPA Sections 4-22, with scoring guidance, remediation tracking, and reuse as annual compliance audit template.',
          content:
            'Before final submission, you self-assess the capstone against a 30-point compliance checklist. The checklist covers all DPDPA Sections 4-22 in 5 thematic groups (notice, consent, security, rights, governance). Each point is scored: Compliant (1), Partial (0.5), Non-Compliant (0). A score of 24/30 (80%) is required for course completion. The checklist is then reused as the annual compliance audit template once you are a practising DPO. This lesson walks through the 30 points, scoring guidance, and remediation tracking. This is deliverable D-12.',
          learningObjectives: [
            'Conduct a 30-point self-assessment audit of the capstone submission',
            'Verify each DPDPA section (4-22) is addressed in at least one deliverable',
            'Score each point as Compliant / Partial / Non-Compliant with justification',
            'Document gaps and remediation timeline for partial / non-compliant items',
          ],
          keyTakeaways: [
            '30 points across 5 groups: Notice (6), Consent (6), Security (6), Rights (5), Governance (7).',
            'Scoring: Compliant (1.0), Partial (0.5), Non-Compliant (0.0); 80% (24/30) required to pass.',
            'Each point mapped to a DPDPA section and a deliverable — traceability audit-ready.',
            'Partial / Non-Compliant items require remediation plan with timeline.',
            'Checklist reused as annual compliance audit template for ongoing DPO practice.',
          ],
          sections: [
            {
              id: 'sec-1',
              title: 'Audit Framework and Scoring Guidance',
              content: [
                {
                  type: 'paragraph',
                  content:
                    'The 30-point checklist is organised into 5 thematic groups, each covering specific DPDPA sections. Each point is scored against the corresponding capstone deliverable. Scoring guidance: Compliant (1.0) means the deliverable fully addresses the DPDPA section; Partial (0.5) means addressed but with gaps (e.g., partial multi-lingual coverage); Non-Compliant (0.0) means not addressed or materially deficient. The auditor must justify each score with a one-line rationale.',
                },
                {
                  type: 'callout',
                  content:
                    'The self-assessment is anonymous — you audit your own work. Honesty is critical: an inflated self-score that does not match the evaluator\'s score is a professional red flag. DPOs who inflate self-scores in practice are the ones who miss real breaches. Use this exercise to build the discipline of objective self-assessment.',
                  calloutType: 'important',
                },
              ],
            },
            {
              id: 'sec-2',
              title: '30-Point Compliance Checklist',
              content: [
                {
                  type: 'paragraph',
                  content:
                    'The 30-point checklist below covers all DPDPA Sections 4-22. Each point maps to a specific deliverable. The full audit form (deliverable D-12) includes scoring column, rationale column, and remediation column.',
                },
                {
                  type: 'table',
                  headers: ['#', 'Checklist Point', 'DPDPA Sec', 'Deliverable'],
                  rows: [
                    ['1', 'Notice published with identity of Data Fiduciary', '5(1)(a)', 'D-06'],
                    ['2', 'Notice states purposes of processing', '5(1)(b)', 'D-06'],
                    ['3', 'Notice lists categories of personal data', '5(1)(c)', 'D-06'],
                    ['4', 'Notice lists recipients', '5(1)(f)', 'D-06'],
                    ['5', 'Notice in plain language + multi-lingual (7 languages)', '5(2)(3)', 'D-06'],
                    ['6', 'Notice accessible per WCAG 2.1 AA', '5(2)', 'D-06'],
                    ['7', 'Consent free, specific, informed, unambiguous, unconditional', '6(1)', 'D-08'],
                    ['8', 'Granular consent per purpose (6 toggles)', '6(1)(b)', 'D-08'],
                    ['9', 'Consent withdrawable as easily as given', '6(4)', 'D-08'],
                    ['10', 'Children\'s verifiable parental consent (under 18)', '9', 'D-09'],
                    ['11', 'No behavioural monitoring or targeted advertising for children', '9(2)', 'D-09'],
                    ['12', 'Deemed consent only where Section 7 applies (no GDPR legitimate interest)', '7', 'D-06'],
                    ['13', 'Security safeguards implemented (AES-256, TLS 1.3, MFA, RBAC, WAF)', '8(5)', 'D-04, D-05'],
                    ['14', 'Data minimisation — only necessary data collected', '8(3)', 'D-02'],
                    ['15', 'Retention schedule per data category with sectoral reconciliation', '8(7)', 'D-07'],
                    ['16', 'Erasure runbook documented', '8(7)', 'D-07'],
                    ['17', 'Breach notification to Board within 72 hours (Form DP-1)', '8(6), Rule 7', 'D-11'],
                    ['18', 'Affected data principals notified', '8(6), Rule 7', 'D-11'],
                    ['19', 'Data subject rights — access, correction, erasure, grievance, nomination', '11', 'D-06'],
                    ['20', 'Grievance officer named + 14-day resolution commitment', '8(9), 11(2)', 'D-06'],
                    ['21', 'Consent Manager integration (ABDM Consent Manager + future DPDPA CM)', '13', 'D-08'],
                    ['22', 'DPO appointed + contact published', '8(9), 10', 'D-01'],
                    ['23', 'DPIA conducted for 3 high-risk processing activities', '10', 'D-05'],
                    ['24', 'Annual independent data audit scheduled (CERT-In empanelled firm)', '10', 'D-01'],
                    ['25', 'Vendor DPAs executed with all 17 processors (10 clauses)', '8(2)', 'D-10'],
                    ['26', 'Cross-border transfers — Section 16 country check + encryption', '16', 'D-02, D-10'],
                    ['27', 'Privacy Steering Committee constituted with quarterly cadence', '—', 'D-01'],
                    ['28', 'Employee DPDPA training completed (95%+)', '8(9)', 'D-12'],
                    ['29', 'Tabletop breach exercise conducted', '10', 'D-11'],
                    ['30', 'Self-assessment audit + remediation plan documented', '—', 'D-12'],
                  ],
                },
                {
                  type: 'callout',
                  content:
                    'Notice the 30 points span the entire DPDPA horizontal obligation stack (Sections 4-22) plus the DPDP Rules 2025 (Rule 7 breach, Rule 8 SDF, Rule 11 Consent Manager). A submission that passes all 30 points is defensible to the Data Protection Board, to customers, to investors, and to the Board.',
                  calloutType: 'tip',
                },
              ],
            },
            {
              id: 'sec-3',
              title: 'Scoring and Pass Threshold',
              content: [
                {
                  type: 'paragraph',
                  content:
                    'Each point is scored: Compliant (1.0), Partial (0.5), Non-Compliant (0.0). The maximum score is 30. The pass threshold is 24 (80%) — same as the course quiz passing score. Scores below 24 require remediation before submission. Scores below 18 require substantial rework of the failing deliverables.',
                },
                {
                  type: 'table',
                  headers: ['Score Range', 'Outcome', 'Action'],
                  rows: [
                    ['27-30', 'Pass with Distinction', 'Submission ready; recommend publication as case study'],
                    ['24-26.5', 'Pass', 'Submission ready'],
                    ['18-23.5', 'Conditional Pass', 'Remediate Partial/Non-Compliant items within 7 days'],
                    ['Below 18', 'Fail', 'Substantial rework required; mentor review recommended'],
                  ],
                },
                {
                  type: 'example',
                  content:
                    'A learner\'s self-assessment: Points 1-6 (Notice) = 6.0 (all compliant); Points 7-12 (Consent) = 5.5 (one partial — verifiable parental consent UX needs Aadhaar OTP refinement); Points 13-18 (Security) = 5.5 (partial — retention schedule missing ABDM 5-year reconciliation); Points 19-23 (Rights + Governance) = 4.5 (partial — DPO appointment pending Day 28); Points 24-30 (Audit + Vendors) = 6.0 (all compliant). Total: 27.5/30 → Pass with Distinction.',
                },
              ],
            },
            {
              id: 'sec-4',
              title: 'Remediation Tracking',
              content: [
                {
                  type: 'paragraph',
                  content:
                    'For each Partial or Non-Compliant point, the self-assessment form includes a remediation row: gap description, root cause, remediation action, owner, timeline. The remediation tracker becomes a living document — re-audited quarterly by the Privacy Steering Committee and annually by the independent auditor.',
                },
                {
                  type: 'example',
                  content:
                    'Sample remediation: Point 14 (Data minimisation) scored Partial (0.5). Gap: Marketing team collected "city" field at registration but did not use it for any purpose other than analytics. Root cause: Legacy field from 2020 registration form, never pruned. Remediation: Remove "city" from registration form; retain in profile for users who voluntarily add it. Owner: Head of Product. Timeline: Phase 2 Day 45. Verified: Phase 3 Day 65.',
                },
                {
                  type: 'callout',
                  content:
                    'Once you become a practising DPO, this 30-point checklist becomes your annual compliance audit template. Adapt it to your company\'s data flows, sector, and SDF status. The discipline of quarterly self-assessment is the difference between DPOs who catch issues early and DPOs who testify to the Data Protection Board.',
                  calloutType: 'tip',
                },
              ],
            },
          ],
          glossary: [
            { term: 'Self-Assessment', definition: 'Internal compliance audit performed by the DPO (or learner) against a structured checklist — distinguishes from external independent audit.' },
            { term: 'Compliance Checklist', definition: 'Structured list of compliance points mapped to DPDPA sections — used for periodic audit and remediation tracking.' },
            { term: 'Pass Threshold', definition: 'Minimum score required for course completion — 24/30 (80%) for the capstone self-assessment.' },
            { term: 'Remediation Tracker', definition: 'Living document tracking each Partial/Non-Compliant audit point with gap, action, owner, and timeline.' },
            { term: 'Independent Audit', definition: 'Annual external audit by CERT-In empanelled firm for SDFs under DPDPA Section 10 — distinct from self-assessment.' },
          ],
          references: [
            { title: 'DPDPA 2023, Sections 4-22 (All Operational Obligations)', source: 'Government of India', year: '2023' },
            { title: 'DPDP Rules 2025, Rules 7, 8, 11 (Breach, SDF, Consent Manager)', source: 'MeitY', year: '2025' },
            { title: 'IAPP Privacy Self-Assessment Toolkit', source: 'International Association of Privacy Professionals', year: '2024' },
            { title: 'ISO 27701:2019 — Privacy Information Management Audit Checklist', source: 'International Organization for Standardization', year: '2019' },
          ],
        },
        // -------- LESSON 3: COURSE COMPLETION AND CERTIFICATION --------
        {
          id: 3,
          title: 'Course Completion and Certification',
          duration: '13 min',
          type: 'video',
          description:
            'Course completion requirements, certification pathways (IAPP, FDPPI, NIST), ongoing education resources, and a 2025-2026 learning roadmap for staying current with DPDPA and DPDP Rules evolution.',
          content:
            'Completing this capstone module marks the end of the DPDPA 2023 Master Course — but it is the beginning of your professional practice as a privacy professional in India. This lesson covers the course completion requirements (quiz, capstone submission, self-assessment), the certification pathways available to you (IAPP CIPP/E, CIPM, FDPPI, NIST), ongoing education resources to stay current with DPDPA and DPDP Rules evolution, and a recommended 2025-2026 learning roadmap. By the end of this lesson, you will have a clear next-steps plan for transitioning from learner to practising privacy professional.',
          learningObjectives: [
            'Complete the course certification requirements (quiz + capstone + self-assessment)',
            'Map course learnings to IAPP CIPP/E, CIPM, FDPPI, and NIST certifications',
            'Identify ongoing education resources (MeitY, DPB, IAPP, NIST newsletters)',
            'Plan a 2025-2026 learning roadmap for regulatory evolution',
          ],
          keyTakeaways: [
            'Course completion requires 80%+ quiz score, 80+ capstone submission, 24+ self-assessment.',
            'IAPP CIPP/E and CIPM are the gold-standard international certifications — recognised globally.',
            'FDPPI (Future of Data Privacy & Protection Initiative, India) offers India-focused certification aligned to DPDPA.',
            'Subscribe to MeitY, Data Protection Board, IAPP, NIST, and FDPPI newsletters for ongoing updates.',
            '2025-2026 roadmap: DPDP Rules final notifications, SDF thresholds, Consent Manager ecosystem, sectoral circulars.',
          ],
          sections: [
            {
              id: 'sec-1',
              title: 'Course Completion Requirements',
              content: [
                {
                  type: 'paragraph',
                  content:
                    'Course completion requires three components: (1) module quizzes at 80%+ passing score across all 20 modules; (2) capstone submission scoring 80+ out of 100 on the evaluation rubric; (3) self-assessment scoring 24+ out of 30. All three must be met within 12 months of course enrolment. Upon completion, you receive the DPDPA 2023 Master Course Certificate, recognised by leading Indian employers and the FDPPI.',
                },
                {
                  type: 'list',
                  content: 'Course completion requirements',
                  items: [
                    'Module quizzes: 80%+ passing score across all 20 modules (each module has its own quiz).',
                    'Capstone submission: 80+/100 on the 4-dimension evaluation rubric (completeness, accuracy, practicality, presentation).',
                    'Self-assessment: 24+/30 on the 30-point compliance checklist.',
                    'Timeframe: All requirements met within 12 months of enrolment.',
                    'Certificate: DPDPA 2023 Master Course Certificate — digital badge + verifiable PDF.',
                    'Recognition: Listed in FDPPI DPO registry; recognised by Indian employers in tech, BFSI, healthcare.',
                  ],
                },
                {
                  type: 'callout',
                  content:
                    'The 12-month completion window is generous — most learners complete in 4-6 months with consistent weekly effort. The capstone (Module 20) typically takes 30-50 hours of focused work over 2-3 weeks. Module quizzes average 20-30 minutes each.',
                  calloutType: 'note',
                },
              ],
            },
            {
              id: 'sec-2',
              title: 'Certification Pathways (IAPP, FDPPI, NIST)',
              content: [
                {
                  type: 'paragraph',
                  content:
                    'Beyond the DPDPA 2023 Master Course Certificate, several international and Indian certifications validate privacy expertise for career advancement. The table below maps the major certifications, their focus, the awarding body, and approximate cost (in INR equivalent).',
                },
                {
                  type: 'table',
                  headers: ['Certification', 'Awarding Body', 'Focus', 'Approx Cost (INR)'],
                  rows: [
                    ['CIPP/E (Certified Information Privacy Professional / Europe)', 'IAPP', 'GDPR + EU privacy', '₹45,000 (exam) + ₹18,000 (membership)'],
                    ['CIPM (Certified Information Privacy Manager)', 'IAPP', 'Privacy program management', '₹45,000 (exam) + ₹18,000 (membership)'],
                    ['CIPT (Certified Information Privacy Technologist)', 'IAPP', 'Privacy engineering', '₹45,000 (exam) + ₹18,000 (membership)'],
                    ['FDPPI CDPO (Certified Data Protection Officer)', 'FDPPI', 'DPDPA + India privacy', '₹35,000 (training + exam)'],
                    ['FDPPI CIPP-IN (when launched)', 'FDPPI', 'DPDPA-specific deep dive', 'TBD 2025'],
                    ['NIST Privacy Framework Specialist', 'NIST', 'Privacy risk management', 'Free (self-study) + exam fee'],
                    ['ISO 27701 Lead Implementer / Auditor', 'PECB / BSI', 'Privacy Information Management', '₹65,000 (training + exam)'],
                  ],
                },
                {
                  type: 'callout',
                  content:
                    'Recommended path for Indian DPOs: (1) DPDPA 2023 Master Course (this course); (2) FDPPI CDPO for India-specific credential; (3) IAPP CIPM for program management credential; (4) IAPP CIPP/E for international recognition. The combination positions you as a credentialed DPO for any Indian or multinational employer.',
                  calloutType: 'tip',
                },
              ],
            },
            {
              id: 'sec-3',
              title: 'Ongoing Education and Resources',
              content: [
                {
                  type: 'paragraph',
                  content:
                    'Privacy law evolves rapidly — DPDPA 2023 was notified in August 2023, DPDP Rules 2025 in January 2025, with further notifications expected throughout 2025-2026. A practising DPO must stay current. The resources below are the primary sources for ongoing education; subscribe to all of them.',
                },
                {
                  type: 'list',
                  content: 'Ongoing education resources',
                  items: [
                    'MeitY (ministry of electronics and IT) — publishes draft and final DPDPA notifications, SDF thresholds, blacklist of countries.',
                    'Data Protection Board (yet to be fully constituted) — will publish orders, precedents, and guidance.',
                    'IAPP (International Association of Privacy Professionals) — daily news, monthly magazine, annual summit.',
                    'NIST (National Institute of Standards and Technology) — NIST Privacy Framework updates, cybersecurity guidance.',
                    'FDPPI (Future of Data Privacy & Protection Initiative, India) — India-focused webinars, certifications, forums.',
                    'TDSAT (Telecom Disputes Settlement and Appellate Tribunal) — DPDPA appeals (under Section 47).',
                    'PRIVACY LAWS & BUSINESS (India edition) — weekly newsletter on Indian privacy developments.',
                    'Supreme Court of India + High Courts — privacy case law (Puttaswamy legacy, ongoing DPDPA cases).',
                  ],
                },
                {
                  type: 'callout',
                  content:
                    'Allocate 2 hours per week to ongoing education. Read 1-2 substantive articles, 1 court order, 1 regulator notification per week. Quarterly, attend 1 webinar or workshop. Annually, attend 1 conference (IAPP India Summit, FDPPI Annual Conference, or NASSCOM DPO Conclave).',
                  calloutType: 'important',
                },
              ],
            },
            {
              id: 'sec-4',
              title: '2025-2026 Learning Roadmap',
              content: [
                {
                  type: 'paragraph',
                  content:
                    'The 2025-2026 regulatory calendar will see significant DPDPA evolution. Below is a recommended learning roadmap to anticipate and prepare for these changes. The roadmap is structured as quarterly milestones; adjust based on actual notification timelines.',
                },
                {
                  type: 'list',
                  content: '2025-2026 DPDPA learning roadmap (quarterly)',
                  items: [
                    'Q1 2025: DPDP Rules 2025 final notification (3 January 2025); Form DP-1 breach notification template; Rule 7 obligations.',
                    'Q2 2025: MeitY SDF thresholds expected; first SDF notifications likely; Section 10 obligations operationalise.',
                    'Q3 2025: Data Protection Board fully constituted; first DPB orders; Section 18 enforcement begins.',
                    'Q4 2025: Section 16 country blacklist (if any) notified; cross-border transfer rules crystallise.',
                    'Q1 2026: Consent Manager ecosystem (Section 13) notified; interoperability standards published.',
                    'Q2 2026: First major DPDPA penalty orders; appeal precedent from TDSAT.',
                    'Q3 2026: DPDPA + sectoral regulator (RBI, SEBI, IRDAI) interaction precedents.',
                    'Q4 2026: First annual independent SDF audits published; sectoral compliance benchmarks emerge.',
                  ],
                },
                {
                  type: 'callout',
                  content:
                    'You have completed the DPDPA 2023 Master Course. You are now equipped to lead DPDPA compliance for any Indian Data Fiduciary — from a Bengaluru health-tech startup to a Mumbai BFSI conglomerate. The capstone you completed is the proof; the certifications you pursue are the credentials; the ongoing education you maintain is the practice. Welcome to the profession.',
                  calloutType: 'tip',
                },
              ],
            },
          ],
          glossary: [
            { term: 'IAPP', definition: 'International Association of Privacy Professionals — the global professional body for privacy, awarding CIPP/E, CIPM, CIPT certifications.' },
            { term: 'FDPPI', definition: 'Future of Data Privacy & Protection Initiative — India-focused privacy professional body offering DPDPA-aligned certifications.' },
            { term: 'TDSAT', definition: 'Telecom Disputes Settlement and Appellate Tribunal — hears appeals from Data Protection Board orders under DPDPA Section 47.' },
            { term: 'NIST Privacy Framework', definition: 'US National Institute of Standards and Technology framework for managing privacy risk — complementary to DPDPA compliance.' },
            { term: 'ISO 27701', definition: 'International standard for Privacy Information Management Systems (PIMS) — extends ISO 27001 to privacy.' },
          ],
          references: [
            { title: 'DPDPA 2023 (full Act)', source: 'Government of India', year: '2023' },
            { title: 'DPDP Rules 2025 (notified 3 January 2025)', source: 'MeitY', year: '2025' },
            { title: 'IAPP Certification Catalogue', source: 'International Association of Privacy Professionals', year: '2024' },
            { title: 'FDPPI DPO Certification Programme', source: 'Future of Data Privacy & Protection Initiative India', year: '2024' },
            { title: 'NIST Privacy Framework v1.0', source: 'National Institute of Standards and Technology', year: '2020' },
            { title: 'ISO/IEC 27701:2019 — Privacy Information Management', source: 'International Organization for Standardization', year: '2019' },
          ],
        },
      ],
    },
  ],

  // ===== MODULE ASSIGNMENTS =====
  assignments: [
    {
      id: 1,
      title: 'HealthTech Innovations DPDPA Compliance Program',
      description:
        'Submit the complete capstone — 12 deliverables covering policy, technical, governance, training, and audit — for the HealthTech Innovations Pvt Ltd scenario developed across Module 20.',
      deliverables: [
        'D-01: Project Charter + Privacy Steering Committee constitution',
        'D-02: Records of Processing Activity (RoPA) with 12 data flows',
        'D-03: 90-Day Compliance Roadmap with milestones and budget',
        'D-04: Risk Register with 7 risks, treatments, residual scores',
        'D-05: DPIA for 3 high-risk processing activities',
        'D-06: Privacy Policy (12 sections, 7 languages)',
        'D-07: Erasure Runbook + Retention Schedule',
        'D-08: 6 Consent Notices (layered, 7 languages each)',
        'D-09: Children\'s Consent Flow with verifiable parental consent',
        'D-10: Vendor DPA Template + 3 executed DPAs',
        'D-11: Breach Response Plan + Form DP-1 + tabletop design',
        'D-12: 30-Point Self-Assessment Checklist + Executive Summary',
      ],
    },
    {
      id: 2,
      title: 'Multi-Regulator Compliance Matrix for HealthTech',
      description:
        'Build a compliance matrix for HealthTech Innovations mapping 15 DPDPA obligations to applicable sectoral rules (Telemedicine Guidelines, ABDM Policy, RBI, CERT-In) and identifying the strictest rule per obligation.',
      deliverables: [
        'Matrix with 15 obligations × 5 regulator columns (DPDPA, NHA, RBI, CERT-In, TRAI)',
        'Strictest rule identification per obligation with legal basis',
        'Responsible team assignment per obligation',
        'Notification timeline reconciliation (72 hours DPDPA vs 6 hours CERT-In)',
        'Retention schedule reconciliation (3 years Telemedicine vs 5 years ABDM vs 8 years IT Act)',
      ],
    },
    {
      id: 3,
      title: 'Breach Response Tabletop Exercise',
      description:
        'Design and document a 4-hour tabletop exercise for a T1 Critical breach scenario at HealthTech Innovations (e.g., AWS Mumbai region ransomware on telemedicine database with 47,000 patient records exfiltrated).',
      deliverables: [
        'T1 Critical scenario briefing document with timeline',
        '6-phase response simulation script (Detect, Contain, Eradicate, Notify, Recover, Review)',
        'Form DP-1 draft notification to Data Protection Board (within 72 hours)',
        'Affected user notification email in English + Hindi + Tamil',
        'Post-incident review template with root cause analysis sections',
        'Facilitator guide with inject scenarios (CEO unavailable, AWS support slow, media leak)',
      ],
    },
  ],

  // ===== MODULE QUIZ =====
  quiz: {
    questions: [
      {
        question: 'What is the maximum penalty under DPDPA Section 33 for a breach involving health data of 100,000 patients?',
        options: ['₹50 crore', '₹150 crore', '₹200 crore', '₹250 crore'],
        correct: 3,
        explanation:
          'DPDPA Section 33 maximum penalty is ₹250 crore. A breach of 100,000 health records — including sensitive paediatric or mental health data — would likely attract the maximum penalty.',
      },
      {
        question: 'Under Rule 7 of DPDP Rules 2025, within how many hours must a Data Fiduciary notify the Data Protection Board of a breach?',
        options: ['24 hours', '48 hours', '72 hours', '7 days'],
        correct: 2,
        explanation:
          'Rule 7 of DPDP Rules 2025 requires notification to the Data Protection Board within 72 hours of becoming aware of a breach, using Form DP-1.',
      },
      {
        question: 'How many mandatory clauses are in the HealthTech Innovations Vendor DPA template?',
        options: ['5 clauses', '8 clauses', '10 clauses', '12 clauses'],
        correct: 2,
        explanation:
          'The HealthTech Innovations Vendor DPA template has 10 mandatory clauses: scope, sub-processors, confidentiality, security, breach, DSAR assistance, audit, transfers, deletion, and liability.',
      },
      {
        question: 'Which DPDPA section requires verifiable parental consent for processing personal data of children under 18?',
        options: ['Section 5', 'Section 6', 'Section 8', 'Section 9'],
        correct: 3,
        explanation:
          'DPDPA Section 9 requires verifiable parental consent for processing personal data of children under 18 — the highest threshold globally.',
      },
      {
        question: 'How many data flows are documented in the HealthTech Innovations Records of Processing Activity (RoPA)?',
        options: ['8 flows', '10 flows', '12 flows', '15 flows'],
        correct: 2,
        explanation:
          'The HealthTech Innovations RoPA documents 12 data flows spanning telemedicine, e-pharmacy, diagnostics, ABDM, payments, marketing, support, analytics, vendors, HR, breach logs, and cross-border DR.',
      },
      {
        question: 'Which DPDPA section governs cross-border transfer of personal data outside India?',
        options: ['Section 8', 'Section 11', 'Section 16', 'Section 18'],
        correct: 2,
        explanation:
          'DPDPA Section 16 permits cross-border transfer of personal data outside India, except to countries or territories blacklisted by the Central Government.',
      },
      {
        question: 'Under the capstone evaluation rubric, what is the passing score out of 100?',
        options: ['60/100', '70/100', '80/100', '90/100'],
        correct: 2,
        explanation:
          'The capstone evaluation rubric requires 80/100 to pass. The rubric is split across 4 dimensions: Completeness 40%, Accuracy 30%, Practicality 20%, Presentation 10%.',
      },
      {
        question: 'How many points are in the capstone self-assessment compliance checklist?',
        options: ['20 points', '25 points', '30 points', '50 points'],
        correct: 2,
        explanation:
          'The capstone self-assessment checklist has 30 points across 5 thematic groups: Notice (6), Consent (6), Security (6), Rights (5), Governance (7). The pass threshold is 24/30 (80%).',
      },
      {
        question: 'Which organisation awards the CIPP/E and CIPM privacy certifications?',
        options: ['MeitY', 'NIST', 'IAPP', 'FDPPI'],
        correct: 2,
        explanation:
          'The International Association of Privacy Professionals (IAPP) awards CIPP/E (Certified Information Privacy Professional/Europe), CIPM (Certified Information Privacy Manager), and CIPT (Certified Information Privacy Technologist).',
      },
      {
        question: 'In the 90-day compliance roadmap, what milestone is targeted on Day 25?',
        options: [
          'DPO appointment',
          'RoPA v1 drafted',
          'Privacy policy published',
          'Independent audit complete',
        ],
        correct: 1,
        explanation:
          'Day 25 milestone is RoPA v1 drafted with 12 data flows documented. DPO appointment is Day 28, privacy policy publication is Day 50, audit completion is Day 85.',
      },
      {
        question: 'Which tribunal hears appeals from Data Protection Board orders under DPDPA Section 47?',
        options: ['Supreme Court of India', 'TDSAT', 'NCLAT', 'High Court of Delhi'],
        correct: 1,
        explanation:
          'TDSAT (Telecom Disputes Settlement and Appellate Tribunal) hears appeals from Data Protection Board orders under DPDPA Section 47. Further appeal lies to the Supreme Court.',
      },
      {
        question: 'What is the recommended liability cap in the HealthTech Innovations Vendor DPA?',
        options: [
          '1x annual contract value',
          '2x annual contract value minimum, unlimited for wilful misconduct',
          '₹5 crore flat cap',
          'No cap (unlimited liability)',
        ],
        correct: 1,
        explanation:
          'The recommended liability cap is 2x annual contract value minimum, with unlimited liability for wilful misconduct, breach of confidentiality, and breach of security. This protects against ₹250 crore DPDPA penalties.',
      },
      {
        question: 'Which language requirement does DPDPA Section 5(3) impose on the privacy policy?',
        options: [
          'English only',
          'English + Hindi only',
          'English + the language of communication with the data principal',
          'All 22 scheduled languages of India',
        ],
        correct: 2,
        explanation:
          'DPDPA Section 5(3) requires the notice to be available in English plus "the language of the communication" used with the data principal. HealthTech Innovations provides 7 language versions: English, Hindi, Tamil, Telugu, Kannada, Bengali, Marathi.',
      },
      {
        question: 'What is the SDF threshold that HealthTech Innovations likely exceeds based on MeitY\'s pre-draft consultation paper?',
        options: [
          '5,000 data principals',
          '50,000 data principals',
          '5,00,000 (5 lakh) data principals',
          '50,00,000 (50 lakh) data principals',
        ],
        correct: 2,
        explanation:
          'MeitY\'s pre-draft consultation paper proposed SDF thresholds of 5 lakh data principals for horizontal SDF, or 50,000 for sensitive sector SDF (health, children, biometric). HealthTech Innovations has 2 million (20 lakh) users — exceeding both by 4x and 40x respectively.',
      },
      {
        question: 'In the 5x5 risk matrix, what score does the highest inherent risk in HealthTech Innovations\' register receive?',
        options: ['9 (Medium)', '12 (Medium)', '15 (High)', '20 (High)'],
        correct: 3,
        explanation:
          'R1 (Unauthorised access to health records) has likelihood 4 (Likely) x impact 5 (Catastrophic) = 20 (High). This is the highest inherent risk in the register, with Section 33 exposure of ₹250 crore.',
      },
      {
        question: 'What is the recommended ongoing education time commitment for a practising DPO?',
        options: ['1 hour per week', '2 hours per week', '5 hours per week', '10 hours per week'],
        correct: 1,
        explanation:
          'Recommended ongoing education: 2 hours per week — 1-2 substantive articles, 1 court order, 1 regulator notification. Quarterly: 1 webinar or workshop. Annually: 1 conference.',
      },
    ],
    passingScore: 80,
  },

  // ===== MODULE PROJECT =====
  project: {
    title: 'Final Capstone Submission: HealthTech Innovations DPDPA Compliance Program',
    description:
      'The Final Capstone Submission is the integration of all 19 prior modules into a complete, defensible DPDPA 2023 compliance program for HealthTech Innovations Pvt Ltd. The submission comprises 12 deliverables spanning policy (privacy policy, consent notices), technical (RoPA, risk register, breach plan), governance (project charter, Privacy Steering Committee), training (employee awareness), and audit (independent audit report, self-assessment). The submission demonstrates end-to-end DPDPA compliance competency across all DPDPA Sections 4-22 and DPDP Rules 2025 (Rules 7, 8, 11). The submission is evaluated against a 100-point rubric across 4 dimensions (completeness, accuracy, practicality, presentation), with an 80-point pass threshold.',
    deliverables: [
      'D-01: Project Charter + Privacy Steering Committee constitution (5 points)',
      'D-02: Records of Processing Activity (RoPA) with 12 data flows (10 points)',
      'D-03: 90-Day Compliance Roadmap with milestones and budget (8 points)',
      'D-04: Risk Register with 7 risks, treatments, residual scores (10 points)',
      'D-05: DPIA for 3 high-risk processing activities (10 points)',
      'D-06: Privacy Policy — 12 sections, 7 languages, WCAG 2.1 AA accessible (15 points)',
      'D-07: Erasure Runbook + Retention Schedule reconciling DPDPA Section 8(7) with sectoral rules (5 points)',
      'D-08: 6 Consent Notices — layered, granular, 7 languages each (10 points)',
      'D-09: Children\'s Consent Flow with verifiable parental consent per Section 9 (5 points)',
      'D-10: Vendor DPA Template (10 clauses) + 3 executed DPAs (10 points)',
      'D-11: Breach Response Plan per Rule 7 + Form DP-1 + tabletop exercise design (7 points)',
      'D-12: 30-Point Self-Assessment Checklist + Executive Summary (5 points)',
      'Submission format: PDF + editable source, single ZIP bundle with manifest index',
      'Evaluation: 100-point rubric (Completeness 40 + Accuracy 30 + Practicality 20 + Presentation 10)',
      'Pass threshold: 80/100; re-submission allowed once within 14 days of feedback',
    ],
  },
};
