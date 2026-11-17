// data/modules/module19.ts

import { Module } from '@/app/types/course';

export const module19: Module = {
  id: 19,
  title: 'Industry Compliance',
  description:
    'Apply the DPDPA 2023 across India\'s most regulated and emerging sectors. This module covers sector-specific compliance for healthcare (ABDM, telemedicine), banking (RBI storage and tokenisation), e-commerce, and EdTech; regulated industries including insurance (IRDAI), securities (SEBI), telecom (TRAI), and critical information infrastructure (CERT-In); emerging sectors like AI startups, fintech (UPI, Account Aggregator), gaming, and crypto/Web3 (FIU-IND, PMLA); and a cross-sector strategy for managing the multi-regulator landscape of RBI, SEBI, IRDAI, TRAI, MeitY, and CERT-In.',
  duration: '14 Hours',
  icon: 'Briefcase',
  learningObjectives: [
    'Apply DPDPA obligations to healthcare, banking, e-commerce and EdTech sectors',
    'Understand RBI storage of payment data circular and tokenisation requirements',
    'Map sectoral regulators: RBI, SEBI, IRDAI, TRAI, MeitY, CERT-In',
    'Implement IRDAI Data Localisation and Outsourcing Guidelines for insurance',
    'Apply SEBI Cybersecurity and Resilience Requirements for securities markets',
    'Design compliance for AI startups, fintech, gaming, and crypto/Web3',
    'Resolve conflicts between sectoral laws and the DPDPA',
    'Build a multi-regulator compliance matrix for complex Indian enterprises',
  ],
  chapters: [
    // ============================================================
    // CHAPTER 1: SECTOR REQUIREMENTS
    // ============================================================
    {
      id: 1,
      title: 'Sector Requirements',
      lessons: [
        // -------- LESSON 1: HEALTHCARE --------
        {
          id: 1,
          title: 'Healthcare: ABDM, Telemedicine & Health Data',
          duration: '16 min',
          type: 'video',
          description:
            'Health data under DPDPA, the Ayushman Bharat Digital Mission (ABDM), eHospital, telemedicine guidelines, and the heightened sensitivity of health information.',
          content:
            'Healthcare is among the most heavily regulated sectors under the DPDPA. Health data is inherently sensitive, processing volumes are massive (Ayushman Bharat covers 500+ million beneficiaries), and the regulatory stack includes the DPDPA, the Digital Information Security in Healthcare Act (DISHA, draft), the Clinical Establishments Act, and the Telemedicine Practice Guidelines 2020. For Indian hospitals, telemedicine platforms like eSanjeevani, and health-tech startups integrating with ABDM, compliance is layered and unforgiving.',
          learningObjectives: [
            'Understand health data sensitivity under DPDPA Section 9 and Section 10',
            'Apply the Ayushman Bharat Digital Mission (ABDM) data standards',
            'Implement the Telemedicine Practice Guidelines 2020 for patient data',
            'Map the multi-regulator landscape: MoHFW, NHA, NDHM, State Health Authorities',
          ],
          keyTakeaways: [
            'DPDPA Section 9 requires verifiable parental consent for children under 18 — critical for paediatric health data.',
            'The ABDM (Ayushman Bharat Digital Mission) creates a national health ID (ABHA) with federated consent via the Consent Manager.',
            'Telemedicine Practice Guidelines 2020 require patient identity verification, record retention for 3 years, and informed consent.',
            'Significant Data Fiduciaries in health must appoint a DPO, conduct DPIAs, and undergo annual independent audits under DPDPA Section 10.',
            'eHospital, HMIS (Health Management Information System), and ABHA-linked apps must comply with NHA Data Privacy & Security Policy.',
          ],
          sections: [
            {
              id: 'sec-1',
              title: 'Health Data Under DPDPA',
              content: [
                {
                  type: 'paragraph',
                  content:
                    'The DPDPA does not define "sensitive personal data" the way the GDPR does, but health data is treated with heightened scrutiny through two mechanisms. First, health-tech platforms processing children\'s data trigger DPDPA Section 9 obligations (parental consent for under-18, prohibition on behavioural monitoring and targeted advertising for children). Second, large health data processors are likely to be notified as Significant Data Fiduciaries (SDFs) under Section 10, triggering enhanced obligations: appoint a DPO, conduct DPIAs, annual independent data audits, and periodic DPIA review.',
                },
                {
                  type: 'callout',
                  content:
                    'DPDPA Section 9 prohibits tracking, behavioural monitoring, and targeted advertising directed at children. A paediatric health app showing ADHD medication ads to a child user would violate Section 9, attracting penalties up to ₹250 crore under Section 33.',
                  calloutType: 'warning',
                },
              ],
            },
            {
              id: 'sec-2',
              title: 'Ayushman Bharat Digital Mission (ABDM)',
              content: [
                {
                  type: 'paragraph',
                  content:
                    'The Ayushman Bharat Digital Mission (ABDM), launched in September 2021 and operationalised nationally in 2024, creates the India digital health ecosystem. It includes: (1) the Ayushman Bharat Health Account (ABHA) — a 14-digit health ID linked to Aadhaar/mobile; (2) the Health Information Exchange (HIE); (3) the Health Records (HR) mobile app; (4) the Healthcare Professionals Registry (HPR); and (5) the Health Facility Registry (HFR). The National Health Authority (NHA) operates ABDM.',
                },
                {
                  type: 'heading',
                  content: 'Consent Manager Under ABDM',
                },
                {
                  type: 'paragraph',
                  content:
                    'ABDM has built a federated Consent Manager that aligns structurally with DPDPA Section 13. Patients can grant, modify, and revoke consent for sharing specific health records (e.g., lab reports) with specific providers for specific purposes (e.g., consultation) for specific durations (e.g., 24 hours). Consent revocation propagates to all data recipients within the ABDM ecosystem.',
                },
                {
                  type: 'example',
                  content:
                    'A Mumbai patient using the ABDM-linked Apollo 247 app can grant a telemedicine doctor access to her recent blood test for 2 hours only. After 2 hours, the doctor\'s access expires automatically. This is DPDPA Section 13 Consent Manager in action — purpose-limited, time-bound, revocable.',
                },
              ],
            },
            {
              id: 'sec-3',
              title: 'Telemedicine Practice Guidelines 2020',
              content: [
                {
                  type: 'paragraph',
                  content:
                    'The Telemedicine Practice Guidelines 2020 (issued by the Board of Governors, Medical Council of India, in exercise of powers under the Indian Medical Council Act) regulate the practice of telemedicine in India. They require: (1) verification of patient identity (via Aadhaar, voter ID, or other government ID); (2) informed consent of the patient (explicit or implied); (3) maintenance of telemedicine records for 3 years; (4) prescription in compliance with the Drugs and Cosmetics Act; and (5) adherence to data confidentiality.',
                },
                {
                  type: 'list',
                  content: 'Telemedicine data compliance requirements',
                  items: [
                    'Patient identity verification before consultation (Guideline 4.2).',
                    'Informed consent — explicit for first consultation, implied for follow-up.',
                    'Records retention: 3 years (Guideline 5.1).',
                    'Prescription transmitted via email, SMS, or app (not via WhatsApp alone).',
                    'Doctor registration with State Medical Council displayed.',
                    'Prohibition on telemedicine for Schedule X drugs (narcotics).',
                  ],
                },
                {
                  type: 'callout',
                  content:
                    'eSanjeevani — the government\'s telemedicine platform — has completed over 250 million consultations as of 2024. Each consultation generates patient data subject to DPDPA, the Telemedicine Guidelines, and the ABDM standards.',
                  calloutType: 'note',
                },
              ],
            },
            {
              id: 'sec-4',
              title: 'eHospital, HMIS & NHA Data Privacy Policy',
              content: [
                {
                  type: 'paragraph',
                  content:
                    'eHospital is the open-source HMIS deployed in government hospitals, integrated with ABHA. The NHA Data Privacy & Security Policy (2022) requires all ABDM-integrated applications to: (1) implement role-based access control; (2) encrypt data in transit (TLS 1.2+) and at rest (AES-256); (3) maintain audit logs for 5 years; (4) report breaches to NHA within 72 hours; and (5) undergo periodic security audits by CERT-In empanelled auditors.',
                },
                {
                  type: 'example',
                  content:
                    'A private hospital in Bengaluru using eHospital with ABHA integration must: (1) comply with DPDPA Sections 8 (security) and 10 (SDF if notified); (2) NHA Data Privacy Policy; (3) Telemedicine Guidelines 2020 (for tele-consults); (4) Clinical Establishments Act (for state registration); (5) Drugs and Cosmetics Act (for prescriptions). Five overlapping frameworks, one patient encounter.',
                },
                {
                  type: 'callout',
                  content:
                    'The draft Digital Information Security in Healthcare Act (DISHA) — pending in Parliament — would, if enacted, create a dedicated health data regulator and additional health-specific obligations beyond the DPDPA. Health-tech firms should track DISHA progress.',
                  calloutType: 'important',
                },
              ],
            },
          ],
          glossary: [
            { term: 'ABDM', definition: 'Ayushman Bharat Digital Mission, India\'s national digital health ecosystem launched September 2021.' },
            { term: 'ABHA', definition: 'Ayushman Bharat Health Account, the 14-digit health ID linked to Aadhaar or mobile within ABDM.' },
            { term: 'NHA', definition: 'National Health Authority, the agency operating ABDM under the Ministry of Health and Family Welfare.' },
            { term: 'Telemedicine Practice Guidelines 2020', definition: 'Guidelines issued by the Medical Council of India Board of Governors regulating telemedicine practice in India.' },
            { term: 'eHospital', definition: 'Open-source Health Management Information System deployed in government hospitals, integrated with ABHA.' },
          ],
          references: [
            { title: 'Digital Personal Data Protection Act 2023, Section 9 and Section 10', source: 'Government of India', year: '2023' },
            { title: 'Telemedicine Practice Guidelines 2020', source: 'Medical Council of India Board of Governors', year: '2020' },
            { title: 'ABDM Data Privacy & Security Policy', source: 'National Health Authority', year: '2022' },
            { title: 'Draft Digital Information Security in Healthcare Act (DISHA)', source: 'Ministry of Health and Family Welfare', year: '2018 (pending)' },
          ],
        },
        // -------- LESSON 2: BANKING --------
        {
          id: 2,
          title: 'Banking: RBI Storage of Payment Data & Tokenisation',
          duration: '15 min',
          type: 'video',
          description:
            'RBI\'s 6 April 2018 circular on storage of payment system data, the tokenisation framework, and how banks reconcile RBI obligations with the DPDPA.',
          content:
            'Banking is the most heavily data-regulated sector in India, governed by the RBI Act, Banking Regulation Act, Payment and Settlement Systems Act 2007, and now the DPDPA. The RBI\'s 6 April 2018 circular on Storage of Payment System Data mandated localisation of payment data — a precedent for DPDPA Section 16 cross-border transfer rules. The 2021-2022 tokenisation framework transformed card-on-file storage. For banks, NBFCs, and payment aggregators like Razorpay, PayU, and Cashfree, compliance requires reconciling RBI sectoral rules with DPDPA horizontal obligations.',
          learningObjectives: [
            'Apply the RBI 6 April 2018 Storage of Payment System Data circular',
            'Implement RBI\'s card-on-file tokenisation framework',
            'Reconcile RBI localisation with DPDPA Section 16 transfer rules',
            'Understand the relationship between RBI Master Directions and DPDPA',
          ],
          keyTakeaways: [
            'RBI 6 April 2018 circular mandates that all payment system data be stored only in India; overseas processing requires real-time flow-back.',
            'Card-on-File (CoF) tokenisation replaced actual card details with tokens from 1 October 2022 (extended deadline).',
            'DPDPA Section 16 allows transfer except to blacklisted countries — RBI localisation goes further for payment data.',
            'Banks must comply with both RBI Master Directions and DPDPA — DPDPA does not override sectoral data localisation.',
            'RBI is empowered under the Payment and Settlement Systems Act 2007 to impose penalties separate from DPDPA Section 33.',
          ],
          sections: [
            {
              id: 'sec-1',
              title: 'RBI Storage of Payment System Data Circular',
              content: [
                {
                  type: 'paragraph',
                  content:
                    'The RBI circular DPSS.CO.PD.No.1418/02.14.006/2017-18 dated 6 April 2018 mandated that "all system providers shall ensure that the entire data relating to payment systems operated by them are stored in a system only in India". This includes full end-to-end transaction details and information collected/carried/processed as part of the message/payment instruction. For cross-border transactions, the foreign leg data may be stored abroad but must be deleted from foreign systems and brought back to India within 24 hours (the "borderless 24-hour rule").',
                },
                {
                  type: 'callout',
                  content:
                    'The RBI 24-hour rule requires overseas payment networks (Visa, Mastercard, American Express) to bring transaction data back to India within 24 hours of processing. Failure risks RBI penalties and operational licence restrictions — a sectoral localisation stricter than DPDPA Section 16.',
                  calloutType: 'important',
                },
              ],
            },
            {
              id: 'sec-2',
              title: 'Card-on-File Tokenisation Framework',
              content: [
                {
                  type: 'paragraph',
                  content:
                    'RBI\'s tokenisation framework, fully effective from 1 October 2022 (after multiple extensions), prohibits merchants, payment aggregators, and payment gateways from storing actual card data. Instead, card details are replaced with a token — a unique surrogate value — issued by the card network (Visa, Mastercard, RuPay, American Express) specific to the card, merchant, and device. The framework applies to credit, debit, and prepaid cards.',
                },
                {
                  type: 'heading',
                  content: 'How Tokenisation Works',
                },
                {
                  type: 'list',
                  content: 'Tokenisation mechanics',
                  items: [
                    'Customer enters card details at merchant checkout.',
                    'Payment aggregator forwards to card network for tokenisation.',
                    'Card network returns a token + last 4 digits to merchant.',
                    'Merchant stores only the token (not the actual card number).',
                    'Token is device + merchant + card specific — cannot be reused across merchants.',
                    'Card network vault stores the mapping between token and actual card.',
                  ],
                },
                {
                  type: 'example',
                  content:
                    'A Bengaluru customer storing a card on Swiggy after October 2022 has only a token stored by Swiggy — not the actual 16-digit card number. The actual card number lives only in the card network (Visa) vault. Even if Swiggy is breached, the token is unusable on Zomato or Amazon.',
                },
                {
                  type: 'callout',
                  content:
                    'Tokenisation directly satisfies DPDPA Section 8(5) "reasonable security safeguards" by minimising exposure of actual card numbers. It also satisfies the data minimisation principle under DPDPA Section 8(3) — only the necessary surrogate (token) is stored, not the actual sensitive data.',
                  calloutType: 'tip',
                },
              ],
            },
            {
              id: 'sec-3',
              title: 'RBI Master Directions on Digital Lending',
              content: [
                {
                  type: 'paragraph',
                  content:
                    'RBI\'s Master Direction on Digital Lending (September 2022) regulates digital lending apps, NBFCs, and lending service providers. Key data requirements: (1) all data collected by lending service providers (LSPs) must be stored in servers located in India; (2) explicit consent for data collection, including device permissions; (3) borrowers must have a clear option to revoke consent for specific data uses; (4) LSPs cannot access mobile phone resources like contacts, call logs, or media without explicit borrower consent; (5) data collected must be necessity-based (purpose limitation).',
                },
                {
                  type: 'example',
                  content:
                    'A digital lending app that demanded access to a borrower\'s entire contact list to "verify identity" was prohibited under the September 2022 Master Direction. RBI enforced this in 2023 against multiple lending apps, requiring deletion of unlawfully collected contact data.',
                },
              ],
            },
            {
              id: 'sec-4',
              title: 'Reconciling RBI & DPDPA',
              content: [
                {
                  type: 'paragraph',
                  content:
                    'The DPDPA does not override sectoral data localisation under RBI regulations. Where RBI requires payment data to be stored in India, DPDPA Section 16 cannot be used to export it. Conversely, RBI Master Directions do not displace DPDPA obligations — banks must still obtain consent under Section 6, honour data principal rights under Section 11, and notify breaches to the Data Protection Board under Section 8(6). The two frameworks are cumulative, not alternative.',
                },
                {
                  type: 'table',
                  headers: ['Obligation', 'RBI Source', 'DPDPA Source', 'Cumulative Application'],
                  rows: [
                    ['Payment data localisation', '6 Apr 2018 circular', 'Section 16 (transfers)', 'Store in India regardless of Section 16'],
                    ['Card-on-file tokenisation', 'RBI framework 2022', 'Section 8(3) minimisation', 'Tokenisation mandatory'],
                    ['Consent for lending data', 'Master Direction 2022', 'Section 6 consent', 'Both consent regimes apply'],
                    ['Breach notification', 'Cyber Security Framework', 'Section 8(6)', 'Notify both RBI and DPB'],
                    ['DPO appointment', 'Cyber Security Framework', 'Section 8(9) for SDFs', 'Bank CISO may serve as DPO'],
                  ],
                },
                {
                  type: 'callout',
                  content:
                    'Banks should structure a single data governance program covering both RBI and DPDPA, with the Chief Information Security Officer (CISO) — mandated by RBI\'s Cyber Security Framework — also serving as or coordinating with the DPDPA Data Protection Officer.',
                  calloutType: 'tip',
                },
              ],
            },
          ],
          glossary: [
            { term: 'RBI Storage of Payment Data Circular', definition: 'RBI circular dated 6 April 2018 mandating that all payment system data be stored only in India.' },
            { term: 'Card-on-File (CoF) Tokenisation', definition: 'Replacement of actual card details with a token at the merchant, effective 1 October 2022.' },
            { term: 'Payment Aggregator (PA)', definition: 'An entity that facilitates e-commerce transactions by aggregating payment options for merchants (e.g., Razorpay, PayU, Cashfree).' },
            { term: 'Lending Service Provider (LSP)', definition: 'An agent of a regulated entity (NBFC or bank) that helps borrowers access loans; subject to RBI Digital Lending Master Direction.' },
            { term: '24-Hour Rule', definition: 'RBI requirement that overseas payment networks bring cross-border transaction data back to India within 24 hours of processing.' },
          ],
          references: [
            { title: 'RBI Storage of Payment System Data Circular DPSS.CO.PD.No.1418/02.14.006/2017-18', source: 'Reserve Bank of India', year: '2018' },
            { title: 'RBI Tokenisation Framework, Guidelines on CoF Tokenisation', source: 'Reserve Bank of India', year: '2022' },
            { title: 'RBI Master Direction on Digital Lending', source: 'Reserve Bank of India', year: '2022' },
            { title: 'DPDPA 2023 Sections 8, 10, 16', source: 'Government of India', year: '2023' },
          ],
        },
        // -------- LESSON 3: E-COMMERCE --------
        {
          id: 3,
          title: 'E-Commerce: Consumer Protection Rules 2020',
          duration: '14 min',
          type: 'reading',
          description:
            'E-commerce compliance under the Consumer Protection (E-Commerce) Rules 2020, the CCPA (Central Consumer Protection Authority), and integration with DPDPA.',
          content:
            'E-commerce in India — including Amazon, Flipkart, Myntra, BigBasket, and 700,000+ D2C sellers on ONDC — operates at the intersection of multiple regulatory frameworks. The Consumer Protection (E-Commerce) Rules 2020 impose disclosure, grievance, and accountability obligations on e-commerce entities. The Central Consumer Protection Authority (CCPA) enforces these rules alongside the DPDPA. For platforms processing millions of transactions and customer profiles, data protection is both a compliance obligation and a consumer trust imperative.',
          learningObjectives: [
            'Apply the Consumer Protection (E-Commerce) Rules 2020',
            'Understand the role of the Central Consumer Protection Authority (CCPA)',
            'Reconcile consumer protection law with DPDPA data principal rights',
            'Implement ONDC data standards',
          ],
          keyTakeaways: [
            'The Consumer Protection (E-Commerce) Rules 2020 apply to all e-commerce entities selling goods or services to consumers in India.',
            'E-commerce entities must appoint a Grievance Officer (Rule 4) — separate from but coordinating with the DPDPA Grievance Officer under Section 8(9).',
            'The CCPA (Central Consumer Protection Authority) can impose penalties up to ₹50 lakh for first violation, ₹5 crore for repeat violations.',
            'ONDC (Open Network for Digital Commerce) introduces a federated data architecture where buyer and seller apps share data via network protocols.',
            'Combining Consumer Protection Act 2019 with DPDPA 2023 creates overlapping rights for consumers/data principals.',
          ],
          sections: [
            {
              id: 'sec-1',
              title: 'Consumer Protection (E-Commerce) Rules 2020',
              content: [
                {
                  type: 'paragraph',
                  content:
                    'The Consumer Protection (E-Commerce) Rules 2020, notified on 23 July 2020 under the Consumer Protection Act 2019, apply to all e-commerce entities — inventory-based, marketplace-based, and hybrid. Key obligations include: (1) display of complete information about the entity (Rule 3); (2) prohibition of unfair trade practices (Rule 4(3)); (3) mandatory grievance officer appointment with response within 48 hours and resolution within 1 month (Rule 4(8)); (4) prohibition of manipulating prices (Rule 4(4)); (5) ban on reviews that misrepresent consumer experience (Rule 4(7)).',
                },
                {
                  type: 'heading',
                  content: 'Grievance Officer & DPDPA Coordination',
                },
                {
                  type: 'paragraph',
                  content:
                    'Rule 4(8) of the E-Commerce Rules requires appointment of a Grievance Officer with response within 48 hours and resolution within 1 month. DPDPA Section 8(9) requires Significant Data Fiduciaries to appoint a Grievance Officer with response within prescribed time (likely 14 days) and resolution within prescribed period (likely 30-45 days). The two officers may be the same person or different — but the timelines differ, requiring careful coordination.',
                },
                {
                  type: 'callout',
                  content:
                    'A single Grievance Officer should be appointed to handle both consumer complaints (under Consumer Protection Act) and data principal grievances (under DPDPA Section 8(9)). Different SLAs apply: 48 hours acknowledgment for consumer complaints; DPDPA timeline to be notified by rules.',
                  calloutType: 'important',
                },
              ],
            },
            {
              id: 'sec-2',
              title: 'Central Consumer Protection Authority (CCPA)',
              content: [
                {
                  type: 'paragraph',
                  content:
                    'The Central Consumer Protection Authority (CCPA), established under Section 10 of the Consumer Protection Act 2019, is the regulator for e-commerce and consumer protection. The CCPA can investigate violations suo motu or on complaint, refer matters to mediation, impose penalties, and issue product recalls. Penalty limits: ₹10 lakh for first violation, ₹50 lakh for subsequent (general); up to ₹50 lakh for misleading advertisements (Section 21).',
                },
                {
                  type: 'table',
                  headers: ['Violation', 'CCPA Penalty', 'DPDPA Penalty'],
                  rows: [
                    ['Misleading advertisement', 'Up to ₹50 lakh (Section 21)', 'Not directly applicable'],
                    ['Unfair trade practice', 'Up to ₹50 lakh first, ₹5 crore repeat', 'Not directly applicable'],
                    ['Failure to appoint Grievance Officer', 'Up to ₹50 lakh (Section 89)', 'Up to ₹250 crore (Section 33)'],
                    ['Breach of consumer data', 'Consumer Protection Act 2019', 'DPDPA Section 8(5) up to ₹250 crore'],
                  ],
                },
                {
                  type: 'example',
                  content:
                    'In 2022, the CCPA imposed a ₹1 crore penalty on a leading e-commerce platform for selling pressure cookers without BIS certification above the Maximum Retail Price. The case demonstrated CCPA\'s active enforcement beyond data protection.',
                },
              ],
            },
            {
              id: 'sec-3',
              title: 'ONDC: Federated Data Architecture',
              content: [
                {
                  type: 'paragraph',
                  content:
                    'The Open Network for Digital Commerce (ONDC), launched in 2022, is a network protocol (similar to UPI for payments) enabling interoperability between buyer apps (Paytm, Pinelabs), seller apps (Digiit, Mall 99), and logistics providers. ONDC itself is not a marketplace; it is a set of APIs. Data flows between buyer and seller apps via ONDC protocol — requiring clear data sharing agreements aligned with DPDPA Section 8(6) processor contracts.',
                },
                {
                  type: 'heading',
                  content: 'ONDC Data Principles',
                },
                {
                  type: 'list',
                  content: 'ONDC data governance principles',
                  items: [
                    'Data minimisation — only transaction-relevant data shared.',
                    'Purpose limitation — buyer data shared only for transaction fulfilment.',
                    'Network participant consent — buyer agrees to ONDC data sharing at onboarding.',
                    'DPDPA Consent Manager integration planned for ONDC v2.',
                    'No cross-network profiling — buyer data not aggregated across seller apps.',
                  ],
                },
                {
                  type: 'callout',
                  content:
                    'ONDC represents the future of Indian e-commerce: a federated, protocol-based marketplace where data flows are governed by API contracts rather than platform terms. DPDPA compliance is built into ONDC\'s governance framework from inception — a model for other sectors.',
                  calloutType: 'tip',
                },
              ],
            },
            {
              id: 'sec-4',
              title: 'Cross-Border E-Commerce Data',
              content: [
                {
                  type: 'paragraph',
                  content:
                    'Indian e-commerce platforms often process customer data across borders — Amazon uses AWS global infrastructure, Flipkart uses Microsoft Azure with India regions, and D2C sellers use Shopify (which stores data globally). DPDPA Section 16 cross-border transfer rules apply: transfers are permitted except to blacklisted countries. Where data is processed in the US (Shopify Plus) or Singapore (Shopee legacy), organisations must verify Section 16 compliance and execute SCCs or equivalent contractual safeguards.',
                },
                {
                  type: 'example',
                  content:
                    'A D2C apparel seller on Shopify based in Jaipur with US customers must: (1) comply with DPDPA for Indian customer data; (2) comply with CCPA for California customers; (3) use SCCs + TIA for Shopify\'s global storage; (4) honour GPC browser signals; and (5) appoint both Consumer Protection Grievance Officer and DPDPA Grievance Officer.',
                },
              ],
            },
          ],
          glossary: [
            { term: 'Consumer Protection (E-Commerce) Rules 2020', definition: 'Rules under the Consumer Protection Act 2019 regulating e-commerce entities in India.' },
            { term: 'CCPA', definition: 'Central Consumer Protection Authority, established under Section 10 of the Consumer Protection Act 2019.' },
            { term: 'ONDC', definition: 'Open Network for Digital Commerce, a network protocol for interoperable e-commerce, launched in 2022.' },
            { term: 'Inventory-Based E-Commerce', definition: 'A model where the e-commerce entity owns inventory; subject to FDI restrictions.' },
            { term: 'Marketplace-Based E-Commerce', definition: 'A model where the e-commerce entity provides a platform for buyers and sellers; permitted under FDI regulations.' },
          ],
          references: [
            { title: 'Consumer Protection Act 2019', source: 'Government of India', year: '2019' },
            { title: 'Consumer Protection (E-Commerce) Rules 2020', source: 'Ministry of Consumer Affairs', year: '2020' },
            { title: 'ONDC Network Policy and Governance', source: 'Open Network for Digital Commerce', year: '2022' },
            { title: 'DPDPA 2023 Sections 8, 13, 16', source: 'Government of India', year: '2023' },
          ],
        },
        // -------- LESSON 4: EdTech --------
        {
          id: 4,
          title: 'EdTech: Children\'s Data & Verifiable Parental Consent',
          duration: '15 min',
          type: 'video',
          description:
            'How EdTech companies comply with DPDPA Section 9 — verifiable parental consent for children under 18, prohibition on behavioural monitoring and targeted advertising, and educational data protections.',
          content:
            'EdTech is the sector most directly impacted by DPDPA Section 9, which imposes the world\'s strictest children\'s data protections: verifiable parental consent for processing personal data of children under 18, prohibition on tracking, behavioural monitoring, and targeted advertising directed at children. For Indian EdTech platforms — BYJU\'S, Unacademy, Vedantu, PhysicsWallah, and 4,000+ others — Section 9 fundamentally redesigns user onboarding, content personalisation, and monetisation. This lesson covers the practical compliance architecture.',
          learningObjectives: [
            'Implement verifiable parental consent mechanisms under DPDPA Section 9',
            'Distinguish educational use from behavioural monitoring',
            'Design EdTech products compliant with Section 9 prohibitions',
            'Apply the consent architecture across K-12 vs higher education platforms',
          ],
          keyTakeaways: [
            'DPDPA Section 9 requires verifiable parental consent for processing personal data of any child under 18.',
            'Section 9 prohibits tracking, behavioural monitoring, and targeted advertising directed at children.',
            'Verifiable consent mechanisms: Aadhaar-based, DigiLocker-verified parent ID, video verification, credit card verification.',
            'Educational data (attendance, grades) may be processed without parental consent for school operations under Section 7 legitimate use — but commercial EdTech cannot.',
            'EdTech firms must redesign recommendation engines, ad placements, and analytics to comply with Section 9.',
          ],
          sections: [
            {
              id: 'sec-1',
              title: 'DPDPA Section 9: The Strictest Children\'s Data Law Globally',
              content: [
                {
                  type: 'paragraph',
                  content:
                    'DPDPA Section 9 sets the global high-water mark for children\'s data protection. It applies to "children" defined as individuals under 18 (Section 2(c)). Section 9(1) requires a Data Fiduciary to obtain verifiable consent of a parent or lawful guardian before processing any child\'s personal data. Section 9(2) prohibits the Data Fiduciary from processing children\'s data in a manner likely to cause detriment to the child\'s wellbeing. Section 9(3) prohibits tracking, behavioural monitoring, or targeted advertising directed at children. Section 9(4) restricts targeting of advertisements at children.',
                },
                {
                  type: 'callout',
                  content:
                    'The 18-year threshold is the highest globally: GDPR default is 16 (member states can lower to 13); COPPA (US) is 13; PIPL (China) treats under 14 as sensitive; CCPA/CPRA treats under 16 as requiring opt-in. India\'s DPDPA is the strictest.',
                  calloutType: 'important',
                },
              ],
            },
            {
              id: 'sec-2',
              title: 'Verifiable Parental Consent Mechanisms',
              content: [
                {
                  type: 'paragraph',
                  content:
                    'Section 9(1) requires "verifiable" parental consent — not just a checkbox. The MeitY is expected to notify specific mechanisms (in subordinate rules), but accepted approaches based on global best practice include: (1) Aadhaar-based parent verification (via Aadhaar e-KYC); (2) DigiLocker-verified parent identity; (3) credit card verification; (4) video verification with government ID; (5) signed consent form with notarised parent signature; (6) school-mediated consent (for school-provided EdTech).',
                },
                {
                  type: 'table',
                  headers: ['Method', 'Strength', 'Friction', 'Best Use Case'],
                  rows: [
                    ['Aadhaar e-KYC', 'High', 'Low', 'Mass-market EdTech (BYJU\'s, Unacademy)'],
                    ['DigiLocker', 'High', 'Low', 'Government school apps'],
                    ['Credit card', 'Medium', 'Medium', 'International parents'],
                    ['Video + government ID', 'Medium-high', 'High', 'Premium/fewer users'],
                    ['School-mediated', 'High', 'Low (for school)', 'B2B EdTech (school LMS)'],
                    ['Notarised consent', 'Very high', 'Very high', 'Sensitive operations (rare)'],
                  ],
                },
                {
                  type: 'example',
                  content:
                    'BYJU\'S, with 150 million registered users (many under 18), must migrate from checkbox parental consent to verifiable consent. The most scalable approach is Aadhaar e-KYC: parent enters Aadhaar number, OTP-verified, KYC response confirms parent-child relationship (via family Aadhaar linkage) or self-declaration. The Consent Manager records the verification timestamp and method.',
                },
              ],
            },
            {
              id: 'sec-3',
              title: 'Prohibitions: Behavioural Monitoring & Targeted Ads',
              content: [
                {
                  type: 'paragraph',
                  content:
                    'Section 9(3) prohibits "tracking, behavioural monitoring, or targeted advertising directed at children". This has profound implications for EdTech: (1) recommendation engines based on learning patterns may constitute "behavioural monitoring" — though the DPDPA rules may carve out educational necessity; (2) targeted advertising (showing ads based on a child\'s learning profile) is prohibited; (3) gamification analytics that profile child behaviour for non-educational purposes are restricted.',
                },
                {
                  type: 'callout',
                  content:
                    'The MeitY is expected to issue subordinate rules clarifying the boundary between "educational personalisation" (permissible) and "behavioural monitoring" (prohibited). Until such rules, EdTech should err on the side of caution: explicit parental consent for any personalisation, no third-party ad networks on child surfaces, and strict purpose limitation.',
                  calloutType: 'warning',
                },
                {
                  type: 'heading',
                  content: 'Practical Architecture',
                },
                {
                  type: 'list',
                  content: 'EdTech compliance architecture',
                  items: [
                    'Two-track UX: Child Track (under 18, parental consent, no ads, no behavioural tracking) vs Adult Track (18+, standard consent).',
                    'Age-gating at registration: ask age, route under-18 to parental consent flow.',
                    'Consent Manager integration: log parental consent separately, allow revocation.',
                    'Ad networks: turn off on any surface accessible to under-18 users.',
                    'Analytics: only aggregate, anonymised analytics on child surfaces; no individual child profiling.',
                    'Recommendation engines: rule-based (curriculum-driven) not profile-based.',
                  ],
                },
              ],
            },
            {
              id: 'sec-4',
              title: 'Educational Data: School-Provided vs Commercial EdTech',
              content: [
                {
                  type: 'paragraph',
                  content:
                    'A critical distinction: school-operated educational data processing may fall under DPDPA Section 7 "legitimate use" (employment, educational institution operations), reducing reliance on parental consent. But commercial EdTech platforms (BYJU\'S, Unacademy) processing data for profit must rely on Section 9 verifiable parental consent — they cannot claim Section 7 legitimate use.',
                },
                {
                  type: 'example',
                  content:
                    'A school using Google Classroom to manage class attendance can process attendance data under Section 7 (educational institution operations). But an independent app like Vedantu offering live classes must obtain Section 9 verifiable parental consent for each student — different lawful basis, different obligations.',
                },
                {
                  type: 'callout',
                  content:
                    'EdTech firms partnering with government schemes like PM eVidya, DIKSHA, or SWAYAM must comply with both the DPDPA and the specific scheme guidelines — which often require data localisation, NDA-level security audits, and integration with DigiLocker for student identity.',
                  calloutType: 'tip',
                },
              ],
            },
          ],
          glossary: [
            { term: 'Verifiable Parental Consent', definition: 'Consent from a parent or guardian verified through a reliable mechanism (Aadhaar e-KYC, DigiLocker, etc.) under DPDPA Section 9.' },
            { term: 'Behavioural Monitoring', definition: 'Tracking and analysing a child\'s behaviour over time — prohibited by DPDPA Section 9(3) when directed at children.' },
            { term: 'Targeted Advertising', definition: 'Advertising shown to a user based on their profile or behaviour — prohibited for children under DPDPA Section 9(3) and 9(4).' },
            { term: 'Age-Gating', definition: 'A registration mechanism that asks users their age and routes under-18 users to parental consent flows.' },
            { term: 'PM eVidya', definition: 'Government of India scheme providing multi-mode access to education, including DIKSHA, SWAYAM, and TV channels.' },
          ],
          references: [
            { title: 'DPDPA 2023 Section 9 (Children\'s Data)', source: 'Government of India', year: '2023' },
            { title: 'COPPA (US) Children\'s Online Privacy Protection Rule', source: 'US Federal Trade Commission', year: '1998 (amended 2013)' },
            { title: 'Aadhaar Act 2016 (for e-KYC)', source: 'Government of India', year: '2016' },
            { title: 'DIKSHA Platform Privacy Policy', source: 'Ministry of Education', year: '2022' },
          ],
        },
      ],
    },

    // ============================================================
    // CHAPTER 2: REGULATED INDUSTRIES
    // ============================================================
    {
      id: 2,
      title: 'Regulated Industries',
      lessons: [
        // -------- LESSON 5: INSURANCE --------
        {
          id: 5,
          title: 'Insurance: IRDAI Data Localisation & Outsourcing',
          duration: '14 min',
          type: 'reading',
          description:
            'IRDAI\'s Data Localisation and Outsourcing Guidelines for insurers — data classification, cloud storage rules, and reconciliation with the DPDPA.',
          content:
            'The Insurance Regulatory and Development Authority of India (IRDAI) regulates 24 life insurers, 25 general insurers, and 7 standalone health insurers under the Insurance Act 1938 and IRDA Act 1999. IRDAI\'s Information and Cyber Security Guidelines (2017) and Outsourcing Guidelines (2017) impose data localisation, security classification, and outsourcing controls. For insurers processing tens of millions of policyholder records — including health, financial, and biometric data — both IRDAI and DPDPA obligations apply cumulatively.',
          learningObjectives: [
            'Apply IRDAI Information and Cyber Security Guidelines',
            'Implement IRDAI Outsourcing Guidelines 2017',
            'Understand IRDAI data classification (Public/Private/Confidential/Secret)',
            'Reconcile IRDAI localisation with DPDPA Section 16',
          ],
          keyTakeaways: [
            'IRDAI mandates data localisation: policyholder data must be stored in India.',
            'IRDAI classifies data into four categories: Public, Private, Confidential, Secret — with graded controls.',
            'Outsourcing requires prior IRDAI approval, due diligence on vendor, and ongoing monitoring.',
            'IRDAI Cyber Security Guidelines mandate a CISO, ISMS, and periodic audits — parallel to DPDPA Section 8(9) DPO.',
            'Cloud adoption permitted but only on IRDAI-empanelled cloud providers with India regions.',
          ],
          sections: [
            {
              id: 'sec-1',
              title: 'IRDAI Information and Cyber Security Guidelines 2017',
              content: [
                {
                  type: 'paragraph',
                  content:
                    'The IRDAI Information and Cyber Security Guidelines (April 2017) require all insurers to implement an Information Security Management System (ISMS) based on ISO 27001, appoint a Chief Information Security Officer (CISO), classify information assets, conduct periodic audits, and report cyber incidents to IRDAI within 6 hours of detection. The Guidelines classify data into four categories: Public (lowest), Private, Confidential, Secret (highest).',
                },
                {
                  type: 'table',
                  headers: ['Data Class', 'Examples', 'Required Controls'],
                  rows: [
                    ['Public', 'Marketing material, public policy wordings', 'Standard availability'],
                    ['Private', 'Internal communications, training material', 'Access control, encryption optional'],
                    ['Confidential', 'Policyholder PII, claims data', 'Encryption at rest + transit, RBAC, audit logs'],
                    ['Secret', 'Authentication credentials, audit keys', 'Hardware security modules, split knowledge, vault'],
                  ],
                },
                {
                  type: 'callout',
                  content:
                    'The IRDAI 6-hour cyber incident reporting requirement is significantly stricter than the RBI\'s 6-hour requirement and the DPDPA\'s "as soon as possible". Insurers must report to IRDAI within 6 hours of detection regardless of impact assessment.',
                  calloutType: 'warning',
                },
              ],
            },
            {
              id: 'sec-2',
              title: 'IRDAI Outsourcing Guidelines 2017',
              content: [
                {
                  type: 'paragraph',
                  content:
                    'IRDAI Outsourcing Guidelines 2017 require insurers to: (1) obtain prior IRDAI approval for material outsourcing; (2) conduct due diligence on outsourcing partners; (3) execute written agreements with mandatory data protection clauses; (4) ensure data localisation — outsourced data must remain in India; (5) conduct periodic audits of outsourcing partners; (6) maintain a register of all outsourcing arrangements; (7) report any outsourcing-related incident to IRDAI within 6 hours.',
                },
                {
                  type: 'heading',
                  content: 'Material Outsourcing Definition',
                },
                {
                  type: 'paragraph',
                  content:
                    '"Material outsourcing" is one where a failure would significantly disrupt the insurer\'s business operations or impact customers. Examples: claims processing, policy administration, IT infrastructure, customer service, BPO. Non-material outsourcing (e.g., cleaning services) does not require IRDAI approval but still requires contractual data protection.',
                },
                {
                  type: 'example',
                  content:
                    'LIC outsourcing its call centre operations to a third-party BPO in Noida must: (1) obtain IRDAI approval as material outsourcing; (2) execute a contract with confidentiality, data localisation, and breach notification clauses; (3) audit the BPO annually; (4) ensure no policyholder data leaves India; (5) report any breach within 6 hours to IRDAI and the DPDPA Board.',
                },
              ],
            },
            {
              id: 'sec-3',
              title: 'IRDAI Cloud Guidelines',
              content: [
                {
                  type: 'paragraph',
                  content:
                    'IRDAI permitted cloud adoption via its 2017 Guidelines, but only on IRDAI-empanelled cloud service providers with India regions. Empanelled providers as of 2024 include Amazon Web Services (AWS), Microsoft Azure, Google Cloud Platform, and local providers like CtrlS, ESDS, and Sify. Policyholder data must reside in India regions (e.g., AWS ap-south-1, Mumbai).',
                },
                {
                  type: 'callout',
                  content:
                    'An insurer cannot use an overseas cloud region (e.g., AWS eu-central-1) for policyholder data even with DPDPA Section 16 compliance — IRDAI localisation overrides. Cloud contracts must include India-region commitment, audit rights, and exit data return.',
                  calloutType: 'important',
                },
              ],
            },
            {
              id: 'sec-4',
              title: 'Reconciling IRDAI & DPDPA',
              content: [
                {
                  type: 'paragraph',
                  content:
                    'IRDAI and DPDPA obligations are cumulative. An insurer must: (1) comply with IRDAI data classification and localisation; (2) comply with DPDPA consent (Section 6) and rights (Section 11); (3) report breaches to both IRDAI (6 hours) and the DPDPA Board (as soon as possible); (4) appoint both a CISO (IRDAI) and a DPO if notified as Significant Data Fiduciary (Section 8(9)). The CISO and DPO may be the same person but functionally distinct roles.',
                },
                {
                  type: 'table',
                  headers: ['Obligation', 'IRDAI Source', 'DPDPA Source', 'Action'],
                  rows: [
                    ['Data localisation', '2017 Guidelines', 'Section 16 (transfers)', 'Store all data in India'],
                    ['Breach reporting', '6 hours to IRDAI', 'As soon as possible to DPB', 'Notify both; IRDAI clock controls'],
                    ['DPO/CISO', 'CISO mandatory', 'DPO for SDFs (Section 8(9))', 'Single person, dual role'],
                    ['Outsourcing approval', 'IRDAI prior approval', 'Section 8(6) contract', 'Both regimes apply'],
                    ['Audit', 'Annual IRDAI audit', 'Section 10 SDF audit', 'Single audit, dual report'],
                  ],
                },
              ],
            },
          ],
          glossary: [
            { term: 'IRDAI', definition: 'Insurance Regulatory and Development Authority of India, established under the IRDA Act 1999.' },
            { term: 'CISO', definition: 'Chief Information Security Officer, mandated by IRDAI\'s Information and Cyber Security Guidelines 2017.' },
            { term: 'Material Outsourcing', definition: 'Outsourcing where failure would significantly disrupt insurer operations or impact customers — requires IRDAI prior approval.' },
            { term: 'IRDAI Data Classification', definition: 'Four-tier classification: Public, Private, Confidential, Secret — under the 2017 Guidelines.' },
            { term: 'IRDAI-Empanelled Cloud', definition: 'Cloud service providers approved by IRDAI for insurer data hosting with India regions.' },
          ],
          references: [
            { title: 'IRDAI Information and Cyber Security Guidelines', source: 'IRDAI', year: '2017' },
            { title: 'IRDAI Outsourcing Guidelines', source: 'IRDAI', year: '2017' },
            { title: 'IRDAI Cloud Computing Guidelines', source: 'IRDAI', year: '2017' },
            { title: 'Insurance Act 1938 and IRDA Act 1999', source: 'Government of India', year: '1938/1999' },
          ],
        },
        // -------- LESSON 6: SECURITIES / SEBI --------
        {
          id: 6,
          title: 'Securities: SEBI Cybersecurity & Resilience Requirements',
          duration: '14 min',
          type: 'reading',
          description:
            'SEBI\'s Cybersecurity and Cyber Resilience Framework for stock brokers, depositories, and AMCs — reconciliation with the DPDPA for capital markets participants.',
          content:
            'The Securities and Exchange Board of India (SEBI) regulates stock exchanges, depositories, stock brokers, mutual funds, and portfolio managers. SEBI\'s Cybersecurity and Cyber Resilience Framework (CSCRF), notified in November 2024 and effective from 1 January 2025, consolidates earlier sector-specific circulars into a unified framework. For the 14+ crore demat account holders and millions of mutual fund investors in India, both SEBI cybersecurity and DPDPA data protection apply — sometimes with overlapping, sometimes with divergent requirements.',
          learningObjectives: [
            'Apply SEBI\'s Cybersecurity and Cyber Resilience Framework (CSCRF) 2024',
            'Understand MIIs (Market Infrastructure Institutions) obligations',
            'Implement SEBI data localisation for KYC and trading data',
            'Reconcile SEBI breach reporting with DPDPA Section 8(6)',
          ],
          keyTakeaways: [
            'SEBI CSCRF (November 2024) applies to all SEBI-regulated entities, replacing earlier sector-specific circulars.',
            'Market Infrastructure Institutions (MIIs) — NSE, BSE, NSDL, CDSL, MCX, CCIL — have enhanced obligations.',
            'SEBI mandates data localisation for KYC, trading, and investor data.',
            'Cyber incident reporting to SEBI within 6 hours of detection (now aligned with CERT-In).',
            'SEBI-regulated entities must appoint a CISO, conduct VAPT (Vulnerability Assessment and Penetration Testing) half-yearly.',
          ],
          sections: [
            {
              id: 'sec-1',
              title: 'SEBI CSCRF November 2024 Framework',
              content: [
                {
                  type: 'paragraph',
                  content:
                    'The SEBI Cybersecurity and Cyber Resilience Framework (CSCRF), notified via circular dated 19 November 2024, applies to all SEBI-regulated entities (REs) — including stock exchanges, depositories, stock brokers, mutual funds, AMCs, AIFs, portfolio managers, and registrars. The CSCRF consolidates 14 earlier circulars into a single framework effective 1 January 2025, with phased compliance dates through July 2025. It prescribes 13 control areas, including governance, risk management, asset management, identity and access, data security, network security, application security, and incident response.',
                },
                {
                  type: 'callout',
                  content:
                    'SEBI CSCRF adopts the principle of "secure by design" and requires regulated entities to embed cybersecurity controls in their SDLC (software development lifecycle). This aligns with DPDPA Section 8(5) "reasonable security safeguards" — a SEBI-compliant entity has strong evidence of DPDPA compliance.',
                  calloutType: 'important',
                },
              ],
            },
            {
              id: 'sec-2',
              title: 'MIIs and Critical Compliance',
              content: [
                {
                  type: 'paragraph',
                  content:
                    'Market Infrastructure Institutions (MIIs) — NSE, BSE, NSDL, CDSL, MCX, NCDEX, CCIL — have the highest compliance obligations under CSCRF. MIIs must: (1) appoint a CISO reporting to the board; (2) maintain a Security Operations Centre (SOC) 24x7; (3) conduct VAPT half-yearly; (4) maintain a Cyber Crisis Management Plan; (5) report incidents to SEBI, CERT-In, and the DPDPA Board (if SDF); (6) undergo annual independent cybersecurity audit by CERT-In empanelled auditors.',
                },
                {
                  type: 'heading',
                  content: 'Investor Data Localisation',
                },
                {
                  type: 'paragraph',
                  content:
                    'SEBI requires KYC data, demat account data, trading data, and investor PII to be stored in India. Cross-border sharing (e.g., with FIU for AML reporting) is permitted via secure channels. Foreign portfolio investors (FPIs) data is also subject to SEBI rules. The localisation is stricter than DPDPA Section 16 for securities-related data.',
                },
                {
                  type: 'example',
                  content:
                    'In November 2023, SEBI fined a stock broking firm ₹5 lakh for failing to implement two-factor authentication for client login — a CSCRF violation that would also constitute a DPDPA Section 8(5) security breach if it led to data compromise.',
                },
              ],
            },
            {
              id: 'sec-3',
              title: 'VAPT, Audit & Incident Reporting',
              content: [
                {
                  type: 'paragraph',
                  content:
                    'SEBI CSCRF mandates Vulnerability Assessment and Penetration Testing (VAPT) half-yearly by CERT-In empanelled auditors. Reports must be submitted to SEBI within 30 days of VAPT completion, with remediation plans. Critical vulnerabilities must be patched within 7 days; high within 30 days; medium within 90 days.',
                },
                {
                  type: 'table',
                  headers: ['Vulnerability Severity', 'Remediation SLA', 'Reporting'],
                  rows: [
                    ['Critical', '7 days', 'SEBI + CERT-In within 24 hours'],
                    ['High', '30 days', 'SEBI in monthly report'],
                    ['Medium', '90 days', 'Internal log only'],
                    ['Low', 'Best effort', 'Internal log only'],
                  ],
                },
                {
                  type: 'callout',
                  content:
                    'SEBI\'s 6-hour cyber incident reporting requirement aligns with CERT-In\'s April 2022 Directions and exceeds DPDPA\'s "as soon as possible". Brokers, AMCs, and MIIs must report incidents to SEBI, CERT-In, and the DPDPA Board — three notifications per incident.',
                  calloutType: 'warning',
                },
              ],
            },
            {
              id: 'sec-4',
              title: 'Reconciling SEBI & DPDPA',
              content: [
                {
                  type: 'paragraph',
                  content:
                    'SEBI-regulated entities must comply with both CSCRF (cybersecurity) and DPDPA (data protection). The CISO appointed under CSCRF may serve as or coordinate with the DPO under DPDPA Section 8(9) for Significant Data Fiduciaries. CSCRF\'s security controls (encryption, access control, VAPT) directly support DPDPA Section 8(5) reasonable security safeguards — a CSCRF-compliant entity has strong DPDPA evidence.',
                },
                {
                  type: 'example',
                  content:
                    'Zerodha, India\'s largest stock broker with 10+ million clients, must comply with: (1) SEBI CSCRF; (2) DPDPA consent and rights; (3) PMLA KYC rules; (4) CERT-In Directions; and (5) Income Tax Act for PAN-related data. A unified program covering all is essential.',
                },
              ],
            },
          ],
          glossary: [
            { term: 'SEBI', definition: 'Securities and Exchange Board of India, established under the SEBI Act 1992.' },
            { term: 'CSCRF', definition: 'Cybersecurity and Cyber Resilience Framework notified by SEBI in November 2024.' },
            { term: 'MII', definition: 'Market Infrastructure Institution — stock exchanges, depositories, and clearing corporations under SEBI regulation.' },
            { term: 'VAPT', definition: 'Vulnerability Assessment and Penetration Testing — mandatory half-yearly under SEBI CSCRF.' },
            { term: 'CISO', definition: 'Chief Information Security Officer, mandated for MIIs and large SEBI-regulated entities.' },
          ],
          references: [
            { title: 'SEBI Cybersecurity and Cyber Resilience Framework (CSCRF) Circular', source: 'SEBI', year: '2024' },
            { title: 'SEBI Act 1992', source: 'Government of India', year: '1992' },
            { title: 'CERT-In Directions 28 April 2022', source: 'CERT-In', year: '2022' },
            { title: 'DPDPA 2023 Section 8(5) and 8(9)', source: 'Government of India', year: '2023' },
          ],
        },
        // -------- LESSON 7: TELECOM / TRAI --------
        {
          id: 7,
          title: 'Telecom: TRAI Regulations on Subscriber Data',
          duration: '13 min',
          type: 'reading',
          description:
            'TRAI regulations on subscriber data, the Telecom Commercial Communications Customer Preference Regulations (TCCCPR), and the relationship with the DPDPA.',
          content:
            'The Telecom Regulatory Authority of India (TRAI) regulates telecom service providers (TSPs) — Reliance Jio, Bharti Airtel, Vodafone Idea, BSNL — under the TRAI Act 1997. With over 1.1 billion telecom subscribers in India, TSPs process the largest single dataset in the country. TRAI\'s TCCCPR 2018 regulations govern commercial communications, the Do Not Disturb (DND) registry, and the blockchain-based spam-prevention system. The Department of Telecommunications (DoT) regulates licensing, and the forthcoming Digital Personal Data Protection rules will overlay DPDPA on the telecom sector.',
          learningObjectives: [
            'Apply TRAI TCCCPR 2018 regulations on commercial communications',
            'Understand the DND registry and scrubbing requirements',
            'Map telecom sectoral regulators: TRAI, DoT, WPC',
            'Reconcile telecom data localisation with DPDPA Section 16',
          ],
          keyTakeaways: [
            'TRAI TCCCPR 2018 regulates commercial communications and the DND registry.',
            'India has 1.1 billion telecom subscribers — the largest pool of personal data in the country.',
            'The blockchain-based spam-prevention system (DLT) requires all commercial senders to register content templates.',
            'Telecom data is subject to localisation under the Licence Agreement with DoT.',
            'TRAI, DoT, and the forthcoming DPDPA rules create a triple-layer compliance regime for TSPs.',
          ],
          sections: [
            {
              id: 'sec-1',
              title: 'TRAI TCCCPR 2018 & The DND Registry',
              content: [
                {
                  type: 'paragraph',
                  content:
                    'The Telecom Commercial Communications Customer Preference Regulations (TCCCPR) 2018, in force since 28 November 2018, replaced the 2010 regulations. TCCCPR 2018 introduced the blockchain-based Distributed Ledger Technology (DLT) platform for managing commercial communications. Every commercial sender (telemarketer, business) must register on the DLT platform, register header codes (sender IDs), and register content templates. TSPs must scrub every outbound commercial message against the DND registry before sending.',
                },
                {
                  type: 'callout',
                  content:
                    'Under TCCCPR 2018, sending a commercial communication to a DND-registered number without explicit consent can attract financial disincentives on the TSP — ₹1,000 per violation in court of TDSAT, with escalating penalties for repeat violations.',
                  calloutType: 'warning',
                },
              ],
            },
            {
              id: 'sec-2',
              title: 'Subscriber Data & KYC',
              content: [
                {
                  type: 'paragraph',
                  content:
                    'Telecom subscribers are KYC-verified — typically via Aadhaar e-KYC, SIM activation, or paper-based KYC. The DoT Licence Agreement (Unified Access Service Licence, UASL) requires subscriber data to be stored in India. CAF (Customer Acquisition Form) data must be retained for the duration of the subscription plus 1 year. Subscriber records include name, address, Aadhaar/PAN, photograph, biometrics (if e-KYC), and call detail records (CDRs).',
                },
                {
                  type: 'heading',
                  content: 'Call Detail Records (CDRs)',
                },
                {
                  type: 'paragraph',
                  content:
                    'CDRs — metadata of every call and SMS — are highly sensitive. TSPs must retain CDRs for 2 years (DoT direction). Government access is governed by Section 92 of the Telegraph Act 1885 and the Indian Telegraph Rules. After the Puttaswamy judgment, CDR access requires lawful necessity and proportionality.',
                },
                {
                  type: 'example',
                  content:
                    'A Bengaluru subscriber using Airtel has: (1) KYC data stored in India (DoT Licence); (2) CDRs retained 2 years; (3) DND status checked for every commercial message; (4) DPDPA Section 11 rights to access/correct KYC data; (5) DPDPA Section 6 right to revoke consent for marketing — the unified program covers all.',
                },
              ],
            },
            {
              id: 'sec-3',
              title: 'TRAI Privacy & Data Protection Regulations (Draft)',
              content: [
                {
                  type: 'paragraph',
                  content:
                    'TRAI issued "Privacy, Security and Ownership of Data in the Telecom Sector" recommendations in July 2018, calling for a telecom-specific data protection regime. With the DPDPA now in force, TRAI\'s recommendations have been largely subsumed into the DPDPA framework. The forthcoming DPDPA rules are expected to include telecom-specific provisions on subscriber consent, marketing preferences, and CDR access.',
                },
                {
                  type: 'callout',
                  content:
                    'TSPs are likely to be notified as Significant Data Fiduciaries under DPDPA Section 10 due to scale and sensitivity. This triggers DPO appointment, DPIAs, and independent audits under Section 10 — overlapping with TRAI\'s compliance requirements.',
                  calloutType: 'important',
                },
              ],
            },
            {
              id: 'sec-4',
              title: 'Reconciling TRAI, DoT & DPDPA',
              content: [
                {
                  type: 'table',
                  headers: ['Aspect', 'TRAI / DoT', 'DPDPA 2023'],
                  rows: [
                    ['Subscriber KYC storage', 'India (UASL Licence)', 'Section 16 (transfers)'],
                    ['Commercial communication', 'TCCCPR 2018 DND', 'Section 6 consent'],
                    ['CDR retention', '2 years (DoT)', 'Section 8(7) storage limitation'],
                    ['Breach notification', 'CERT-In 6 hours', 'Section 8(6) to Board'],
                    ['DPO appointment', 'Not mandated', 'Section 8(9) for SDFs'],
                    ['Subscriber rights', 'TRAI complaints', 'Section 11 (access, correct, erase)'],
                  ],
                },
                {
                  type: 'example',
                  content:
                    'Reliance Jio with 470 million subscribers must: (1) comply with TRAI TCCCPR for commercial communications; (2) store KYC in India under UASL; (3) retain CDRs 2 years; (4) report breaches to CERT-In in 6 hours; (5) appoint a DPO under Section 8(9) as SDF; (6) honour subscriber rights under DPDPA Section 11.',
                },
              ],
            },
          ],
          glossary: [
            { term: 'TRAI', definition: 'Telecom Regulatory Authority of India, established under the TRAI Act 1997.' },
            { term: 'TCCCPR 2018', definition: 'Telecom Commercial Communications Customer Preference Regulations 2018.' },
            { term: 'DND Registry', definition: 'Do Not Disturb registry of subscribers who have opted out of commercial communications.' },
            { term: 'DLT Platform', definition: 'Distributed Ledger Technology platform mandated by TRAI for managing commercial communications and content templates.' },
            { term: 'CDR', definition: 'Call Detail Record — metadata of telephone calls and SMS, retained 2 years under DoT directions.' },
          ],
          references: [
            { title: 'TRAI TCCCPR 2018', source: 'TRAI', year: '2018' },
            { title: 'TRAI Privacy, Security and Ownership of Data Recommendations', source: 'TRAI', year: '2018' },
            { title: 'DoT Unified Access Service Licence Agreement', source: 'Department of Telecommunications', year: '2001 (amended)' },
            { title: 'DPDPA 2023 Section 8(5), 8(9), 10, 16', source: 'Government of India', year: '2023' },
          ],
        },
        // -------- LESSON 8: GOVERNMENT / CII / CERT-In --------
        {
          id: 8,
          title: 'Government & Critical Information Infrastructure: CERT-In Directions',
          duration: '14 min',
          type: 'reading',
          description:
            'CERT-In Directions of 28 April 2022, Critical Information Infrastructure protection under Section 70 of the IT Act, and the special status of government data processing under DPDPA Section 17.',
          content:
            'Critical Information Infrastructure (CII) — power grids, telecom networks, banking systems, government databases like Aadhaar, UPI, and the National Population Register — is the backbone of India\'s digital economy. The CERT-In Directions of 28 April 2022, the IT Act Section 70 CII protection regime, and the National Critical Information Infrastructure Protection Centre (NCIIPC) impose sector-specific obligations. Government data processing under DPDPA Section 17 has special exemptions that private entities must understand when contracting with the State.',
          learningObjectives: [
            'Apply CERT-In Directions of 28 April 2022 on cyber incident reporting',
            'Understand Critical Information Infrastructure (CII) protection under IT Act Section 70',
            'Map the role of NCIIPC and CERT-In',
            'Analyse DPDPA Section 17 exemptions for State processing',
          ],
          keyTakeaways: [
            'CERT-In Directions 28 April 2022 require cyber incident reporting within 6 hours — the strictest in India.',
            'Critical Information Infrastructure (CII) is notified by the Government under IT Act Section 70; protected by NCIIPC.',
            'CERT-In mandates 5-year log retention, KYC for VPN/Cloud providers, and time-synced systems.',
            'DPDPA Section 17 exempts the State from certain obligations when processing for sovereignty, security, and public order.',
            'Private entities contracting with the Government must structure data processing to preserve State exemptions.',
          ],
          sections: [
            {
              id: 'sec-1',
              title: 'CERT-In Directions 28 April 2022',
              content: [
                {
                  type: 'paragraph',
                  content:
                    'The Indian Computer Emergency Response Team (CERT-In), the national nodal agency for cyber incident response under the IT Act, issued Directions on 28 April 2022 imposing six key obligations on all "service providers, intermediaries, data centres, body corporates and government organisations": (1) report 20 categories of cyber incidents within 6 hours; (2) maintain ICT logs for 5 years within Indian jurisdiction; (3) synchronize system clocks to NIC/NPL time servers; (4) KYC for VPN, cloud, and data centre customers; (5) maintain subscriber information for 5 years; (6) cooperate with CERT-In investigations.',
                },
                {
                  type: 'heading',
                  content: '20 Reportable Incident Categories',
                },
                {
                  type: 'list',
                  content: 'Selected reportable incident categories',
                  items: [
                    'Unauthorized access to systems or data.',
                    'Data breach or data leak.',
                    'Identity theft, spoofing, phishing attacks.',
                    'Ransomware attacks.',
                    'DoS/DDoS attacks.',
                    'Attacks on Critical Information Infrastructure.',
                    'Attacks on government systems and infrastructure.',
                    'Unauthorised use of computing resources.',
                    'Website compromise and defacement.',
                    'Malware/junk mail propagation.',
                  ],
                },
                {
                  type: 'callout',
                  content:
                    'The 6-hour CERT-In reporting requirement is significantly stricter than GDPR\'s 72 hours, PDPA\'s 3 days, and even South Korea PIPA\'s 24 hours. Non-compliance attracts penalties under Section 70B(7) of the IT Act — up to ₹1 lakh per violation.',
                  calloutType: 'warning',
                },
              ],
            },
            {
              id: 'sec-2',
              title: 'Critical Information Infrastructure Protection',
              content: [
                {
                  type: 'paragraph',
                  content:
                    'Under Section 70 of the IT Act 2000, the Government notifies "protected systems" — Critical Information Infrastructure (CII). Examples: Aadhaar, UPI, NPCI payment systems, stock exchanges (NSE/BSE), power grids (POSOCO), telecom networks. The National Critical Information Infrastructure Protection Centre (NCIIPC), established under the NTRO Act 2005, is the nodal agency for CII protection. CII operators must: (1) conduct annual cybersecurity audits; (2) implement "defence-in-depth" controls; (3) report incidents to NCIIPC and CERT-In; (4) implement network segmentation; (5) restrict foreign equipment in critical paths.',
                },
                {
                  type: 'example',
                  content:
                    'Aadhaar, operated by UIDAI, is a notified CII. NPCI operating UPI is also a CII operator. Both must comply with NCIIPC guidelines, CERT-In Directions, and DPDPA — a triple-layer compliance regime. Any unauthorised access to Aadhaar data is a criminal offence under Section 70 of the IT Act (imprisonment up to 10 years).',
                },
              ],
            },
            {
              id: 'sec-3',
              title: 'DPDPA Section 17: State Processing Exemptions',
              content: [
                {
                  type: 'paragraph',
                  content:
                    'DPDPA Section 17 exempts the State from certain DPDPA obligations when processing personal data for: (a) sovereignty, integrity, and security of India; (b) maintenance of public order; (c) friendly relations with foreign states; (d) enforcement of legal rights. This is a broad exemption similar to GDPR Article 2(2) law enforcement carve-outs, but more expansive. Government departments are not exempted entirely — they must still comply with security safeguards, but the consent and rights obligations are relaxed for the exempted purposes.',
                },
                {
                  type: 'callout',
                  content:
                    'Private entities contracting with the Government (e.g., Aadhaar authentication agencies, e-Hospital vendors) must structure processing agreements to preserve the State\'s Section 17 exemptions. A private vendor processing Aadhaar data cannot claim the State exemption for its own commercial use — purpose limitation applies.',
                  calloutType: 'important',
                },
              ],
            },
            {
              id: 'sec-4',
              title: 'Multi-Regulator Coordination',
              content: [
                {
                  type: 'paragraph',
                  content:
                    'A CII operator like NPCI (operating UPI) must comply with: (1) CERT-In Directions (6-hour reporting, 5-year logs); (2) NCIIPC guidelines; (3) RBI storage circular and tokenisation; (4) DPDPA consent, rights, breach notification; (5) IT Act Section 70 protected system rules; (6) NPCI\'s own procedural rules. This creates a six-layer compliance regime requiring a unified program with regulator-specific notification branches.',
                },
                {
                  type: 'table',
                  headers: ['Regulator', 'Reporting Clock', 'Scope'],
                  rows: [
                    ['CERT-In', '6 hours', 'All cyber incidents (20 categories)'],
                    ['NCIIPC', '6 hours (aligned with CERT-In)', 'CII-specific incidents'],
                    ['RBI', '6 hours', 'Payment system incidents'],
                    ['DPDPA Board', 'As soon as possible', 'Personal data breaches'],
                    ['SEBI (if applicable)', '6 hours', 'Securities market incidents'],
                    ['IRDAI (if applicable)', '6 hours', 'Insurance incidents'],
                  ],
                },
                {
                  type: 'example',
                  content:
                    'A UPI breach affecting 50 million users requires notifications to: CERT-In (6h), NCIIPC (6h), RBI (6h), DPDPA Board (ASAP), and potentially SEBI if linked to broking apps — five regulators within hours of detection. Only a unified incident response playbook can meet this.',
                },
              ],
            },
          ],
          glossary: [
            { term: 'CERT-In', definition: 'Indian Computer Emergency Response Team, the national nodal agency for cyber incident response under the IT Act.' },
            { term: 'NCIIPC', definition: 'National Critical Information Infrastructure Protection Centre, the nodal agency for CII protection under NTRO Act 2005.' },
            { term: 'CII', definition: 'Critical Information Infrastructure — protected systems notified under Section 70 of the IT Act 2000.' },
            { term: 'Protected System', definition: 'A system notified under Section 70 of the IT Act for enhanced protection; unauthorised access is a serious criminal offence.' },
            { term: 'Section 17 Exemption', definition: 'DPDPA Section 17 exemptions for State processing for sovereignty, security, public order, and enforcement of legal rights.' },
          ],
          references: [
            { title: 'CERT-In Directions 28 April 2022', source: 'CERT-In, MeitY', year: '2022' },
            { title: 'IT Act 2000, Section 70 (Protected Systems) and Section 70B (CERT-In)', source: 'Government of India', year: '2000 (amended 2008)' },
            { title: 'NTRO Act 2005 (NCIIPC)', source: 'Government of India', year: '2005' },
            { title: 'DPDPA 2023 Section 17 (State Exemptions)', source: 'Government of India', year: '2023' },
          ],
        },
      ],
    },

    // ============================================================
    // CHAPTER 3: EMERGING SECTORS
    // ============================================================
    {
      id: 3,
      title: 'Emerging Sectors',
      lessons: [
        // -------- LESSON 9: AI STARTUPS --------
        {
          id: 9,
          title: 'AI Startups: Training Data Compliance',
          duration: '15 min',
          type: 'video',
          description:
            'How AI startups can comply with the DPDPA when collecting training data, running model training, and deploying AI products — purpose limitation, consent for AI, and the emerging IT Rules 2021 on AI.',
          content:
            'India has over 1,500 generative AI startups as of 2024, including Sarvam AI, Krutrim, Ola Krutrim, and bhAI. AI training data compliance is one of the most challenging DPDPA frontiers: scraping public data may violate purpose limitation, model training may transform data in ways that breach consent, and AI outputs may inadvertently memorise personal data. This lesson covers practical compliance architectures for Indian AI startups operating under the DPDPA.',
          learningObjectives: [
            'Apply DPDPA purpose limitation to AI training data collection',
            'Implement consent architecture for AI processing',
            'Understand the IT Rules 2021 on Intermediary Guidelines and AI',
            'Design AI products compliant with DPDPA Section 9 (children) and Section 10 (SDF)',
          ],
          keyTakeaways: [
            'Training data collection must comply with DPDPA consent (Section 6) and purpose limitation (Section 8(2)).',
            'AI startups processing large volumes of personal data may be notified as Significant Data Fiduciaries (Section 10).',
            'The IT Rules 2021 require intermediaries including AI platforms to publish terms, grievance officer, and monthly compliance reports.',
            'AI outputs that memorise personal data (e.g., regurgitating training data) constitute processing under DPDPA.',
            'DPIAs are essential for high-risk AI processing — particularly with biometric, health, or children\'s data.',
          ],
          sections: [
            {
              id: 'sec-1',
              title: 'Training Data Collection & Purpose Limitation',
              content: [
                {
                  type: 'paragraph',
                  content:
                    'AI training data collection triggers multiple DPDPA obligations. If personal data is scraped from the public web, the data fiduciary must have a lawful basis — typically consent under Section 6 — for using it for AI training, which is a different purpose from the original collection. Web scraping alone is not consent. Even publicly available personal data (LinkedIn profiles, Twitter posts) is "personal data" under DPDPA Section 2(v) and requires a lawful basis.',
                },
                {
                  type: 'callout',
                  content:
                    'The DPDPA does not have a "legitimate interests" basis like GDPR Article 6(1)(f). AI training cannot rely on legitimate interests — it must rely on Section 6 consent or Section 7 legitimate use (limited to employment, disaster, medical). Web scraping personal data for AI training is therefore high-risk under DPDPA.',
                  calloutType: 'warning',
                },
                {
                  type: 'example',
                  content:
                    'An AI startup scraping LinkedIn profiles to train a recruitment model has no lawful basis under DPDPA — LinkedIn users did not consent to AI training. The startup must either: (1) obtain explicit consent from each profile owner; (2) use only synthetic/anonymised data; or (3) purchase licensed datasets from data brokers with proper consent provenance.',
                },
              ],
            },
            {
              id: 'sec-2',
              title: 'Significant Data Fiduciary Status for AI',
              content: [
                {
                  type: 'paragraph',
                  content:
                    'AI startups processing large volumes of personal data are likely to be notified as Significant Data Fiduciaries (SDFs) under DPDPA Section 10. SDFs must: (1) appoint a DPO (Section 8(9)); (2) conduct DPIAs (Section 10); (3) undergo annual independent data audits (Section 10); (4) maintain Data Protection Impact Assessments for AI models — a unique emerging practice.',
                },
                {
                  type: 'heading',
                  content: 'DPIA for AI Models',
                },
                {
                  type: 'list',
                  content: 'AI DPIA key elements',
                  items: [
                    'Description of the AI system, its purpose, and training data sources.',
                    'Risk identification: bias, discrimination, memorisation, privacy invasion.',
                    'Mitigation: differential privacy, federated learning, synthetic data, red-teaming.',
                    'Documentation of model cards, data sheets, and provenance.',
                    'Bias audits and fairness metrics.',
                    'Human-in-the-loop review for high-risk decisions.',
                  ],
                },
                {
                  type: 'callout',
                  content:
                    'India\'s MeitY is developing AI-specific rules under the DPDPA, expected to include algorithmic transparency, bias mitigation, and high-risk AI classification — influenced by the EU AI Act 2024 and the OECD AI Principles.',
                  calloutType: 'important',
                },
              ],
            },
            {
              id: 'sec-3',
              title: 'IT Rules 2021 & Intermediary Liability',
              content: [
                {
                  type: 'paragraph',
                  content:
                    'The Information Technology (Intermediary Guidelines and Digital Media Ethics Code) Rules 2021, made under Section 79 of the IT Act, regulate intermediaries including AI platforms with user-generated content. Intermediaries must: (1) publish terms of service and privacy policy; (2) appoint a Grievance Officer (response within 24 hours, resolution within 15 days); (3) publish monthly compliance reports; (4) remove unlawful content within 36 hours of government/order; (5) identify the originator of messages on "large messaging platforms" (5 million+ users) — Significant Social Media Intermediaries (SSMIs).',
                },
                {
                  type: 'example',
                  content:
                    'An Indian generative AI chatbot platform with 5 million users is an SSMI under IT Rules 2021. It must: (1) publish privacy policy and ToS; (2) appoint a Grievance Officer; (3) publish monthly compliance reports; (4) comply with takedown orders within 36 hours; (5) trace originators if required by court order. Combined with DPDPA SDF obligations, this is a complex multi-regime compliance.',
                },
              ],
            },
            {
              id: 'sec-4',
              title: 'Compliant AI Architecture',
              content: [
                {
                  type: 'paragraph',
                  content:
                    'A DPDPA-compliant AI startup architecture includes: (1) consent-first training data — every data point has provenance and consent record; (2) differential privacy during training — injecting noise to prevent memorisation; (3) model cards published for transparency; (4) human-in-the-loop for high-risk decisions; (5) red-teaming and bias audits before deployment; (6) data principal rights portal for access, correction, erasure of training data (where feasible); (7) retention limits on training data (e.g., 24 months, then deletion).',
                },
                {
                  type: 'callout',
                  content:
                    'Sarvam AI and other Indian foundation model startups have pioneered "India-specific" training data with explicit consent from data contributors — a model that may become the DPDPA-compliant gold standard for AI training.',
                  calloutType: 'tip',
                },
                {
                  type: 'example',
                  content:
                    'A healthcare AI startup building a diabetic retinopathy detection model should: (1) use hospital-partnered de-identified retina images; (2) obtain patient consent for research use; (3) conduct DPIA covering bias (different skin tones, age groups); (4) publish model card with accuracy, false positive/negative rates; (5) implement human review for flagged cases.',
                },
              ],
            },
          ],
          glossary: [
            { term: 'DPIA', definition: 'Data Protection Impact Assessment, mandated for Significant Data Fiduciaries under DPDPA Section 10.' },
            { term: 'Differential Privacy', definition: 'A technique that injects noise into datasets to prevent identification of individuals while preserving statistical utility.' },
            { term: 'Model Card', definition: 'A documentation standard for ML models disclosing training data, performance metrics, biases, and intended use.' },
            { term: 'Red-Teaming', definition: 'Stress-testing AI models against adversarial inputs to identify biases, security vulnerabilities, and harmful outputs.' },
            { term: 'SSMI', definition: 'Significant Social Media Intermediary, an intermediary with 5 million+ users under IT Rules 2021.' },
          ],
          references: [
            { title: 'DPDPA 2023 Sections 8, 9, 10', source: 'Government of India', year: '2023' },
            { title: 'IT (Intermediary Guidelines and Digital Media Ethics Code) Rules 2021', source: 'MeitY', year: '2021' },
            { title: 'MeitY AI Advisory on Generative AI', source: 'MeitY', year: '2024' },
            { title: 'OECD AI Principles', source: 'OECD', year: '2019 (updated 2024)' },
          ],
        },
        // -------- LESSON 10: FINTECH --------
        {
          id: 10,
          title: 'Fintech: UPI, PPI & Account Aggregator Framework',
          duration: '14 min',
          type: 'video',
          description:
            'Fintech compliance across UPI, Prepaid Payment Instruments (PPI), and the RBI Account Aggregator framework — the layered regulatory stack for digital financial services.',
          content:
            'Indian fintech is the world\'s most active digital payments ecosystem: 14 billion UPI transactions/month (2024), 130+ million PPI users (Paytm, PhonePe, Mobikwik), and the RBI Account Aggregator (AA) framework enabling consumer-permissioned financial data sharing. Fintech firms must navigate the Payments and Settlement Systems Act 2007, RBI Master Directions, the DPDPA, and the PMLA — all simultaneously. This lesson covers the practical compliance architecture for Indian fintech.',
          learningObjectives: [
            'Apply RBI PA/PG Master Directions for payment aggregators',
            'Implement the PPI Master Direction for wallets',
            'Design compliant UPI apps under NPCI procedural rules',
            'Implement the RBI Account Aggregator (AA) framework',
          ],
          keyTakeaways: [
            'UPI transactions crossed 14 billion per month in 2024 — the world\'s largest real-time payment system.',
            'PPI Master Direction requires KYC for full-KYC wallets, with ₹2 lakh monthly transaction limit.',
            'The RBI Account Aggregator framework enables consent-based sharing of financial data via Financial Information Providers (FIPs) and Financial Information Users (FIUs).',
            'Payment aggregators (Razorpay, PayU) must store payment data in India (RBI 6 April 2018 circular).',
            'Fintech apps must comply with RBI Master Directions + NPCI rules + DPDPA + PMLA simultaneously.',
          ],
          sections: [
            {
              id: 'sec-1',
              title: 'UPI & NPCI Procedural Rules',
              content: [
                {
                  type: 'paragraph',
                  content:
                    'The Unified Payments Interface (UPI), operated by the National Payments Corporation of India (NPCI), processed 14.04 billion transactions worth ₹20.64 lakh crore in October 2024 alone. UPI participant banks (PSP banks, issuer banks) and TPAPs (Third-Party Application Providers) like PhonePe, Google Pay, Paytm, and CRED must comply with the NPCI Procedural Guidelines. Key requirements: (1) customer data localisation (RBI circular); (2) customer consent for transactions; (3) transaction data retention for 10 years; (4) NPCI audit rights; (5) incident reporting to NPCI within 2 hours.',
                },
                {
                  type: 'callout',
                  content:
                    'PhonePe, with over 500 million registered users and 50%+ UPI market share, must comply with: (1) NPCI Procedural Guidelines; (2) RBI storage circular; (3) DPDPA (as Significant Data Fiduciary); (4) IT Rules 2021; (5) PMLA KYC norms. A unified program covering all is essential.',
                  calloutType: 'important',
                },
              ],
            },
            {
              id: 'sec-2',
              title: 'PPI Master Direction & Wallets',
              content: [
                {
                  type: 'paragraph',
                  content:
                    'The RBI Master Direction on Issuance and Conduct of Prepaid Payment Instruments (PPIs), issued in August 2021 (updated 2024), regulates wallets (Paytm Wallet, Mobikwik, Amazon Pay). PPIs are classified as: (1) Closed System PPIs (e.g., brand-specific cards, not regulated by RBI); (2) Semi-Closed System PPIs (Paytm Wallet — KYC required); (3) Open System PPIs (credit/debit cards). For Semi-Closed and Open PPIs, full KYC is mandatory for balances above ₹10,000.',
                },
                {
                  type: 'table',
                  headers: ['PPI Type', 'KYC Required', 'Max Balance', 'Max Transaction'],
                  rows: [
                    ['Min-KYC PPI', 'Mobile + OTP', '₹10,000', '₹10,000/month'],
                    ['Full-KYC PPI', 'PAN + Aadhaar', '₹2,00,000', 'No monthly cap'],
                    ['Full-KYC PPI (with C/KYC)', 'Full KYC + CKYCR', '₹2,00,000', 'No monthly cap'],
                    ['Gift PPI', 'No', '₹1,00,000', '—'],
                  ],
                },
                {
                  type: 'example',
                  content:
                    'A Paytm Wallet user with full KYC (PAN + Aadhaar verified) can hold up to ₹2 lakh. Min-KYC users are restricted to ₹10,000 balance. After DPDPA, the consent for KYC data processing must be explicit under Section 6, with revocation rights — even though KYC retention is mandated by PMLA for 5 years post-account-closure.',
                },
              ],
            },
            {
              id: 'sec-3',
              title: 'Account Aggregator (AA) Framework',
              content: [
                {
                  type: 'paragraph',
                  content:
                    'The RBI Account Aggregator (AA) framework, operational since 2016 and mainstream since 2021, enables consent-based sharing of financial data. Four participant types: (1) Account Aggregators (AAs) — data conduits licensed by RBI (e.g., OneMoney, FinSec AA, CAMS Finserv); (2) Financial Information Providers (FIPs) — banks, mutual funds, insurance companies holding the data; (3) Financial Information Users (FIUs) — lenders, wealth managers receiving the data; (4) Customers (Data Principals) granting consent.',
                },
                {
                  type: 'heading',
                  content: 'AA Consent Architecture',
                },
                {
                  type: 'list',
                  content: 'AA framework consent features',
                  items: [
                    'Consent artefact: machine-readable JSON specifying data type, FIU, purpose, duration.',
                    'Granular: customer specifies exactly which accounts, which data fields, which FIU.',
                    'Time-bound: consent has start/end dates and a fetch frequency (e.g., once, daily).',
                    'Revocable: customer can revoke consent anytime via the AA app.',
                    'Auditable: every fetch is logged with timestamp, IP, FIU identity.',
                    'DPDPA alignment: AA Consent Manager structurally implements DPDPA Section 13.',
                  ],
                },
                {
                  type: 'callout',
                  content:
                    'The AA framework is India\'s largest operational Consent Manager — prefiguring the DPDPA Section 13 Consent Manager standard. As of 2024, over 1.3 billion AA accounts have been opened, with 200+ million consent artefacts shared.',
                  calloutType: 'tip',
                },
              ],
            },
            {
              id: 'sec-4',
              title: 'Fintech Compliance Architecture',
              content: [
                {
                  type: 'paragraph',
                  content:
                    'A unified fintech compliance program covers: (1) RBI Master Directions (PA, PG, PPI, NBFC); (2) NPCI Procedural Guidelines; (3) PMLA KYC and STR/CTR filing; (4) DPDPA consent, rights, breach; (5) IT Rules 2021 (for fintech apps); (6) Consumer Protection (E-Commerce) Rules 2020 (if marketplace). The CISO appointed under RBI\'s Cyber Security Framework can serve as DPO under DPDPA Section 8(9).',
                },
                {
                  type: 'example',
                  content:
                    'CRED, with 12 million premium users, must comply with: (1) RBI PPI Master Direction for credit card payments; (2) NPCI UPI rules; (3) DPDPA SDF obligations; (4) PMLA KYC; (5) IT Rules 2021 SSMI obligations; (6) Consumer Protection Rules for CRED Store. A single compliance program with regulator-specific overlays is essential.',
                },
                {
                  type: 'callout',
                  content:
                    'The RBI\'s 6 April 2018 storage circular applies to ALL payment system data — including UPI, PPI, card payments, and Account Aggregator fetches. All must be stored in India regardless of DPDPA Section 16.',
                  calloutType: 'warning',
                },
              ],
            },
          ],
          glossary: [
            { term: 'UPI', definition: 'Unified Payments Interface, the NPCI-operated real-time payment system, the world\'s largest by transaction volume.' },
            { term: 'NPCI', definition: 'National Payments Corporation of India, the umbrella organisation for retail payment systems.' },
            { term: 'PPI', definition: 'Prepaid Payment Instrument — wallets, gift cards, prepaid cards regulated by RBI Master Direction 2021.' },
            { term: 'Account Aggregator (AA)', definition: 'RBI-licensed data conduit enabling consent-based sharing of financial data between FIPs and FIUs.' },
            { term: 'TPAP', definition: 'Third-Party Application Provider — apps like PhonePe, Google Pay that connect to UPI via PSP banks.' },
          ],
          references: [
            { title: 'RBI Master Direction on PPIs', source: 'RBI', year: '2021 (updated 2024)' },
            { title: 'RBI Master Direction on Payment Aggregators and Payment Gateways', source: 'RBI', year: '2020 (updated 2023)' },
            { title: 'NPCI UPI Procedural Guidelines', source: 'NPCI', year: '2024' },
            { title: 'RBI Account Aggregator Framework Master Direction', source: 'RBI', year: '2016 (updated 2024)' },
            { title: 'DPDPA 2023 Section 13 (Consent Manager)', source: 'Government of India', year: '2023' },
          ],
        },
        // -------- LESSON 11: GAMING & REAL MONEY GAMING --------
        {
          id: 11,
          title: 'Gaming & Real Money Gaming: Age Verification & Transaction Data',
          duration: '13 min',
          type: 'reading',
          description:
            'Gaming and Real Money Gaming (RMG) compliance under DPDPA — age verification, transaction data, the Online Gaming (Regulation) Bill, and the ongoing GST changes.',
          content:
            'India\'s gaming market — 568 million gamers as of 2024 — is among the world\'s largest. It spans casual games (Ludo King, Free Fire), fantasy sports (Dream11, My11Circle), and Real Money Games (RMG) like rummy and poker (MPL, RummyCircle). Compliance challenges include: age verification (DPDPA Section 9 for under-18 prohibition on behavioural monitoring), financial transaction data (PMLA for RMG), and the MeitY Online Gaming Rules 2023. This lesson covers the practical compliance architecture.',
          learningObjectives: [
            'Apply DPDPA Section 9 to gaming platforms with child users',
            'Implement age verification mechanisms (Aadhaar, credit card, DigiLocker)',
            'Understand the MeitY Online Gaming Rules 2023',
            'Map the GST regime changes for RMG (28% on full face value)',
          ],
          keyTakeaways: [
            'India has 568 million gamers as of 2024 — many under 18, triggering DPDPA Section 9.',
            'MeitY Online Gaming Rules 2023 require self-regulatory bodies (SRBs) for online gaming intermediaries.',
            'RMG platforms must verify users are 18+ via Aadhaar or PAN — required for cash transactions.',
            'GST on RMG changed to 28% on full face value (not net winnings) from October 2023.',
            'Behavioural monitoring in games — common for engagement optimisation — is restricted under DPDPA Section 9 for children.',
          ],
          sections: [
            {
              id: 'sec-1',
              title: 'DPDPA Section 9 & Gaming',
              content: [
                {
                  type: 'paragraph',
                  content:
                    'Most casual games have a large under-18 user base — Ludo King reports 30%+ under-18 players. DPDPA Section 9 requires verifiable parental consent for processing personal data of children under 18, and prohibits behavioural monitoring and targeted advertising directed at children. For gaming platforms, this means: (1) age-gating at registration; (2) verifiable parental consent for under-18; (3) no behavioural tracking of child gameplay; (4) no targeted ads to children; (5) no monetisation features (loot boxes, in-app purchases) without parental consent.',
                },
                {
                  type: 'callout',
                  content:
                    'Engagement-driven game design — variable rewards, push notifications based on play patterns, personalised difficulty — may constitute "behavioural monitoring" under DPDPA Section 9 when applied to children. Game developers must redesign child surfaces to be rule-based, not profile-based.',
                  calloutType: 'warning',
                },
              ],
            },
            {
              id: 'sec-2',
              title: 'MeitY Online Gaming Rules 2023',
              content: [
                {
                  type: 'paragraph',
                  content:
                    'The Information Technology (Intermediary Guidelines and Digital Media Ethics Code) Amendment Rules 2023, notified on 6 April 2023, added online gaming to the IT Rules framework. Key requirements: (1) online gaming intermediaries must register with a Self-Regulatory Body (SRB) — three SRBs provisionally recognised in 2024; (2) comply with SRB-determined "permissible online real money games"; (3) verify user KYC for RMG; (4) appoint a Grievance Officer; (5) comply with the IT Rules 2021 SSMI obligations if 5M+ users.',
                },
                {
                  type: 'heading',
                  content: 'RMG Permissibility',
                },
                {
                  type: 'paragraph',
                  content:
                    'The SRBs determine "permissible" online real money games based on: (1) whether the game involves skill vs chance; (2) whether betting is on the game\'s outcome or external events; (3) state law compliance (some states ban RMG entirely — Telangana, Andhra Pradesh, Assam, Odisha, Sikkim, Nagaland). Permitted games include rummy, poker, fantasy cricket. Betting on live sports is generally prohibited.',
                },
                {
                  type: 'example',
                  content:
                    'Dream11, India\'s largest fantasy sports platform, must: (1) register with an SRB; (2) verify users 18+ via PAN/Aadhaar; (3) comply with state-specific bans (e.g., blocked in Telangana); (4) report gaming-related disputes to the Grievance Officer; (5) apply DPDPA Section 9 for any users under 18 (prohibited from real-money games).',
                },
              ],
            },
            {
              id: 'sec-3',
              title: 'Transaction Data, GST & PMLA',
              content: [
                {
                  type: 'paragraph',
                  content:
                    'RMG platforms process significant financial transaction data: deposits, withdrawals, winnings, GST. From October 2023, GST on RMG is 28% on the full face value of bets (not on net winnings), drastically changing the economics. RMG platforms are also subject to PMLA reporting — Cash Transaction Reports (CTRs) for transactions above ₹10 lakh, and Suspicious Transaction Reports (STRs) to FIU-IND.',
                },
                {
                  type: 'table',
                  headers: ['Compliance Area', 'Source', 'Application to RMG'],
                  rows: [
                    ['KYC verification', 'PMLA + IT Rules 2023', 'Mandatory for cash transactions'],
                    ['GST 28%', 'CGST Act amended October 2023', 'On full face value of bets'],
                    ['TDS 30%', 'Income Tax Act Section 194BA', 'On net winnings'],
                    ['CTR/STR filing', 'PMLA Rules', 'To FIU-IND'],
                    ['Player data localisation', 'DPDPA + MeitY Online Gaming Rules', 'Store in India'],
                  ],
                },
              ],
            },
            {
              id: 'sec-4',
              title: 'Gaming Compliance Architecture',
              content: [
                {
                  type: 'paragraph',
                  content:
                    'A unified gaming compliance program covers: (1) DPDPA Section 9 (children); (2) MeitY Online Gaming Rules 2023; (3) SRB registration; (4) PMLA KYC and reporting; (5) GST compliance; (6) IT Rules 2021 SSMI obligations; (7) state-specific RMG bans. Age-gating is the gateway: route users to adult track (18+, real money eligible) or child track (under 18, parental consent, no real money, no behavioural tracking).',
                },
                {
                  type: 'example',
                  content:
                    'MPL (Mobile Premier League) must: (1) verify age via Aadhaar/PAN; (2) block users under 18 from RMG; (3) comply with DPDPA Section 9 for any child users (casual games); (4) report gaming and financial incidents to SRB and CERT-In; (5) comply with state bans; (6) file CTRs/STRs to FIU-IND; (7) collect GST at 28% on face value.',
                },
              ],
            },
          ],
          glossary: [
            { term: 'RMG', definition: 'Real Money Game — games where players deposit money to participate, with winnings paid in cash (e.g., rummy, poker, fantasy sports).' },
            { term: 'SRB', definition: 'Self-Regulatory Body — bodies recognised by MeitY under IT Rules 2023 to determine permissible online real money games.' },
            { term: 'Online Gaming Intermediary', definition: 'An intermediary offering online games, regulated under IT Rules 2023 amendments.' },
            { term: 'FIU-IND', definition: 'Financial Intelligence Unit-India, the agency receiving CTRs/STRs under PMLA.' },
            { term: 'GST 28% on Face Value', definition: 'GST rate on RMG from October 2023, applied to the full bet amount (not net winnings).' },
          ],
          references: [
            { title: 'IT Rules 2023 (Online Gaming Amendment)', source: 'MeitY', year: '2023' },
            { title: 'DPDPA 2023 Section 9 (Children)', source: 'Government of India', year: '2023' },
            { title: 'PMLA Rules (CTR/STR)', source: 'FIU-IND', year: '2005 (updated)' },
            { title: 'CGST Act Amendment (RMG GST)', source: 'Government of India', year: '2023' },
            { title: 'AIGF Skill Games Report', source: 'All India Gaming Federation', year: '2024' },
          ],
        },
        // -------- LESSON 12: CRYPTO & WEB3 --------
        {
          id: 12,
          title: 'Crypto & Web3: PMLA, FIU-IND & Wallet Data',
          duration: '13 min',
          type: 'reading',
          description:
            'Cryptocurrency exchanges, Web3 wallets, and NFT platforms under India\'s PMLA, FIU-IND registration, and the 30% crypto tax — compliance with DPDPA in a pseudonymous ecosystem.',
          content:
            'India\'s crypto ecosystem — WazirX, CoinDCX, CoinSwitch, ZebPay — operates in a uniquely challenging regulatory environment. Crypto was brought under PMLA in March 2023, requiring FIU-IND registration for Virtual Asset Service Providers (VASPs). Crypto gains are taxed at 30% (Section 115BBH of Income Tax Act) with 1% TDS on transfers (Section 194S). Web3 wallets, NFT marketplaces, and DeFi protocols face the DPDPA challenge: blockchain data is pseudonymous but often linkable to real identities. This lesson covers the practical compliance architecture.',
          learningObjectives: [
            'Apply PMLA obligations to Virtual Asset Service Providers (VASPs)',
            'Implement FIU-IND registration and CTR/STR filing',
            'Design DPDPA compliance for pseudonymous blockchain data',
            'Understand the 30% crypto tax and 1% TDS',
          ],
          keyTakeaways: [
            'Crypto was brought under PMLA on 7 March 2023 — VASPs must register with FIU-IND.',
            'Crypto gains taxed at 30% under Section 115BBH IT Act; 1% TDS on transfers under Section 194S.',
            'Wallet addresses are pseudonymous but often linkable to KYC\'d identities — DPDPA applies.',
            'FIU-IND registration requires KYC procedures, transaction monitoring, and CTR/STR filing.',
            'Offshore VASPs serving Indian customers must also register with FIU-IND (March 2024 deadline).',
          ],
          sections: [
            {
              id: 'sec-1',
              title: 'PMLA & FIU-IND Registration',
              content: [
                {
                  type: 'paragraph',
                  content:
                    'On 7 March 2023, the Ministry of Finance notified that crypto exchanges, custodians, and transfer service providers would be "reporting entities" under the Prevention of Money Laundering Act (PMLA). They must: (1) register with FIU-IND; (2) implement KYC procedures; (3) maintain transaction records for 5 years; (4) file Cash Transaction Reports (CTRs) for transactions above ₹10 lakh; (5) file Suspicious Transaction Reports (STRs) within 7 days of suspicion; (6) comply with PMLA record-keeping rules.',
                },
                {
                  type: 'callout',
                  content:
                    'In December 2023, FIU-IND issued show-cause notices to 9 offshore VASPs (including Binance, KuCoin, Huobi, Kraken) for operating without registration. As of 2024, Binance and KuCoin registered with FIU-IND; others blocked Indian users. Offshore compliance is now a real enforcement frontier.',
                  calloutType: 'important',
                },
              ],
            },
            {
              id: 'sec-2',
              title: 'Crypto Tax & TDS',
              content: [
                {
                  type: 'paragraph',
                  content:
                    'From 1 April 2022, crypto gains are taxed at 30% under Section 115BBH of the Income Tax Act, with no offset for losses across different crypto assets. From 1 July 2022, 1% TDS is deducted on crypto transfers under Section 194S — applicable if transfer value exceeds ₹10,000 (₹50,000 for specified persons). Crypto exchanges must deduct TDS on behalf of sellers.',
                },
                {
                  type: 'table',
                  headers: ['Transaction', 'Tax/TDS', 'Source'],
                  rows: [
                    ['Crypto capital gains', '30% (no loss offset)', 'Section 115BBH IT Act'],
                    ['Crypto transfer', '1% TDS', 'Section 194S IT Act'],
                    ['Gift of crypto', 'Taxed in recipient\'s hands', 'Section 56(2)(x) IT Act'],
                    ['Mining income', 'Taxed as business income', 'Income Tax Act'],
                    ['Staking rewards', 'Taxed as income from other sources', 'Income Tax Act'],
                  ],
                },
                {
                  type: 'example',
                  content:
                    'A Mumbai investor buying ₹1,00,000 of Bitcoin on WazirX and selling for ₹1,50,000 incurs: (1) 1% TDS on sale = ₹1,500 deducted; (2) 30% tax on ₹50,000 gain = ₹15,000 income tax. Net gain after tax: ₹33,500. Losses on Ethereum cannot offset Bitcoin gains.',
                },
              ],
            },
            {
              id: 'sec-3',
              title: 'DPDPA & Pseudonymous Blockchain Data',
              content: [
                {
                  type: 'paragraph',
                  content:
                    'A central DPDPA question for crypto: is a wallet address "personal data"? DPDPA Section 2(v) defines personal data as "any information about an individual who is identifiable by or in relation to such data". While a wallet address alone is pseudonymous, when linked to KYC\'d exchange accounts, IP addresses, or on-chain patterns, it becomes personal data. Crypto exchanges must therefore treat wallet addresses as personal data, comply with DPDPA consent (Section 6) and rights (Section 11), and report breaches under Section 8(6).',
                },
                {
                  type: 'callout',
                  content:
                    'Public blockchain data — visible to anyone — is not exempt from DPDPA simply because it is public. Public availability does not equal consent for processing. Crypto firms analysing on-chain data for compliance or marketing must have a lawful basis under Section 6.',
                  calloutType: 'warning',
                },
                {
                  type: 'heading',
                  content: 'Web3 Wallets & Self-Custody',
                },
                {
                  type: 'paragraph',
                  content:
                    'Non-custodial Web3 wallets (MetaMask, Trust Wallet, Rainbow) face a different DPDPA challenge: they typically do not collect KYC data. However, if they collect device data, IP addresses, or analytics, they become Data Fiduciaries under DPDPA. Most non-custodial wallets minimise data collection to avoid triggering DPDPA obligations.',
                },
              ],
            },
            {
              id: 'sec-4',
              title: 'NFTs & Web3 Compliance Architecture',
              content: [
                {
                  type: 'paragraph',
                  content:
                    'NFT marketplaces (OpenSea, WazirX NFT, Rarity) must: (1) KYC users for fiat on-ramps; (2) comply with DPDPA for any personal data (creators, buyers); (3) report suspicious transactions to FIU-IND if deemed VASPs; (4) apply GST on platform fees (18%). DeFi protocols (Uniswap, Aave) operating without KYC face enforcement risk if they serve Indian users — the legal status of fully decentralised protocols under DPDPA/PMLA is unresolved.',
                },
                {
                  type: 'example',
                  content:
                    'CoinDCX, a FIU-IND registered Indian crypto exchange, must: (1) KYC all users (PAN + Aadhaar); (2) deduct 1% TDS on transfers; (3) file CTRs/STRs to FIU-IND; (4) comply with DPDPA consent, rights, breach; (5) apply 30% tax computation support for users; (6) maintain records 5 years post-account-closure. A unified program covering all is essential.',
                },
                {
                  type: 'callout',
                  content:
                    'India has not enacted a dedicated crypto law (the Crypto Bill has been pending since 2021). All current crypto regulation is via PMLA, IT Act, and tax law overlay — DPDPA adds the data protection layer. Firms must monitor for the forthcoming Digital India Bill which may include crypto-specific provisions.',
                  calloutType: 'tip',
                },
              ],
            },
          ],
          glossary: [
            { term: 'VASP', definition: 'Virtual Asset Service Provider — crypto exchanges, custodians, and transfer service providers under PMLA.' },
            { term: 'FIU-IND', definition: 'Financial Intelligence Unit-India, the agency receiving PMLA reports from VASPs and other reporting entities.' },
            { term: 'CTR', definition: 'Cash Transaction Report — filed for transactions above ₹10 lakh under PMLA.' },
            { term: 'STR', definition: 'Suspicious Transaction Report — filed within 7 days of forming suspicion under PMLA.' },
            { term: 'TDS', definition: 'Tax Deducted at Source — 1% on crypto transfers under Section 194S of the IT Act.' },
          ],
          references: [
            { title: 'PMLA Notification on VASPs, 7 March 2023', source: 'Ministry of Finance', year: '2023' },
            { title: 'Section 115BBH IT Act (Crypto Tax)', source: 'Government of India', year: '2022' },
            { title: 'Section 194S IT Act (Crypto TDS)', source: 'Government of India', year: '2022' },
            { title: 'FIU-IND Show Cause Notices to Offshore VASPs', source: 'FIU-IND', year: '2023' },
            { title: 'DPDPA 2023 Section 2(v) (Personal Data Definition)', source: 'Government of India', year: '2023' },
          ],
        },
      ],
    },

    // ============================================================
    // CHAPTER 4: CROSS-SECTOR COMPLIANCE STRATEGY
    // ============================================================
    {
      id: 4,
      title: 'Cross-Sector Compliance Strategy',
      lessons: [
        // -------- LESSON 13: SECTORAL REGULATORS MAP --------
        {
          id: 13,
          title: 'Sectoral Regulators Map: RBI, SEBI, IRDAI, TRAI, MeitY',
          duration: '14 min',
          type: 'reading',
          description:
            'A comprehensive map of India\'s data-relevant sectoral regulators — their mandates, jurisdictions, key circulars, and interaction with the DPDPA Data Protection Board.',
          content:
            'India\'s regulatory landscape is multi-headed: the Reserve Bank of India (RBI) regulates banking and payments, SEBI regulates securities, IRDAI regulates insurance, TRAI regulates telecom, MeitY regulates IT and electronics, CERT-In handles cybersecurity, and the Ministry of Consumer Affairs handles e-commerce. The DPDPA Data Protection Board is the horizontal data protection regulator. For Indian enterprises, understanding which regulator applies to which data flow is essential — and the answer is often "multiple regulators simultaneously".',
          learningObjectives: [
            'Map the mandates of RBI, SEBI, IRDAI, TRAI, MeitY, CERT-In, and CCPA',
            'Identify which regulator applies to which data flow',
            'Understand the role of the DPDPA Data Protection Board as a horizontal regulator',
            'Analyse the interaction between sectoral and horizontal data rules',
          ],
          keyTakeaways: [
            'India has 8+ sectoral regulators with data-related mandates.',
            'The DPDPA Data Protection Board is the horizontal data protection regulator — overlapping with sectoral rules.',
            'Sectoral regulators (RBI, SEBI, IRDAI) retain data localisation and cybersecurity powers.',
            'Multi-regulator coordination is required for breaches affecting multiple sectors.',
            'MeitY is the parent ministry for both the DPDPA and CERT-In.',
          ],
          sections: [
            {
              id: 'sec-1',
              title: 'The Regulator Map',
              content: [
                {
                  type: 'paragraph',
                  content:
                    'India\'s data-relevant regulators fall into three categories: (1) Sectoral financial regulators — RBI, SEBI, IRDAI; (2) Sectoral non-financial regulators — TRAI, NHA, MoHFW, Ministry of Consumer Affairs; (3) Horizontal regulators — DPDPA Board, CERT-In, MeitY. Each regulator has its own enforcement powers, reporting timelines, and penalties. Understanding the map is the first step to compliance.',
                },
                {
                  type: 'table',
                  headers: ['Regulator', 'Mandate', 'Key Data Circulars', 'Breach Reporting'],
                  rows: [
                    ['RBI', 'Banking, payments, NBFCs', 'Storage of Payment Data (2018), Tokenisation (2022), Digital Lending (2022)', '6 hours (Cyber Security Framework)'],
                    ['SEBI', 'Securities, mutual funds', 'CSCRF (Nov 2024), KYC norms', '6 hours (CSCRF)'],
                    ['IRDAI', 'Insurance', 'Information & Cyber Security (2017), Outsourcing (2017)', '6 hours (Cyber Security Guidelines)'],
                    ['TRAI', 'Telecom', 'TCCCPR 2018, Privacy Recommendations 2018', 'CERT-In 6 hours'],
                    ['MeitY', 'IT, electronics', 'DPDPA implementation, IT Rules 2021', 'CERT-In 6 hours'],
                    ['CERT-In', 'Cyber incidents', 'Directions 28 April 2022', '6 hours (Directions)'],
                    ['NHA', 'Healthcare (ABDM)', 'ABDM Privacy Policy (2022)', '72 hours to NHA'],
                    ['Ministry of Consumer Affairs', 'E-commerce', 'E-Commerce Rules 2020', 'CCPA investigation'],
                    ['DPDPA Board', 'Data protection (horizontal)', 'DPDPA 2023', 'As soon as possible'],
                  ],
                },
              ],
            },
            {
              id: 'sec-2',
              title: 'The DPDPA Board: Horizontal Authority',
              content: [
                {
                  type: 'paragraph',
                  content:
                    'The Data Protection Board, established under DPDPA Section 18, is a horizontal regulator with jurisdiction over personal data across all sectors. Unlike sectoral regulators, the Board does not regulate specific industries but specific data flows. Its powers include: (1) inquiry into breaches (Section 27); (2) penalties up to ₹250 crore (Section 33); (3) compensation orders (Section 33(2)); (4) directions to Data Fiduciaries (Section 27(2)); (5) reference to mediation (Section 31).',
                },
                {
                  type: 'callout',
                  content:
                    'The DPDPA Board\'s horizontal jurisdiction does not displace sectoral regulators. A bank must comply with both RBI and the DPDPA Board. The two regulators coordinate via the Inter-Regulatory Coordination mechanism (expected in forthcoming DPDPA rules).',
                  calloutType: 'important',
                },
              ],
            },
            {
              id: 'sec-3',
              title: 'MeitY: The Parent Ministry',
              content: [
                {
                  type: 'paragraph',
                  content:
                    'The Ministry of Electronics and Information Technology (MeitY) is the parent ministry for the DPDPA, CERT-In, and the broader Digital India agenda. MeitY drafts the subordinate rules under the DPDPA (expected through 2024-2025), oversees CERT-In Directions, and administers the IT Act 2000. MeitY also coordinates with sectoral ministries (Finance for RBI/SEBI, Telecom for TRAI, Health for NHA) on cross-sectoral data issues.',
                },
                {
                  type: 'heading',
                  content: 'MeitY Subordinate Rules (Expected)',
                },
                {
                  type: 'list',
                  content: 'Expected DPDPA subordinate rules from MeitY',
                  items: [
                    'DPDPA Rules on Consent Manager registration and operation (Section 13).',
                    'DPDPA Rules on Significant Data Fiduciary criteria (Section 10).',
                    'DPDPA Rules on verifiable parental consent mechanisms (Section 9).',
                    'DPDPA Rules on cross-border transfer blacklist (Section 16).',
                    'DPDPA Rules on Data Protection Board procedure (Section 28).',
                    'DPDPA Rules on breach notification format (Section 8(6)).',
                  ],
                },
              ],
            },
            {
              id: 'sec-4',
              title: 'Inter-Regulator Coordination',
              content: [
                {
                  type: 'paragraph',
                  content:
                    'For complex cross-sectoral breaches (e.g., a fintech breach affecting payment data, telecom KYC, and securities trading), inter-regulator coordination is essential. The expected DPDPA Rules are likely to formalise an Inter-Regulatory Coordination Committee (IRCC) chaired by the DPDPA Board with RBI, SEBI, IRDAI, TRAI, CERT-In, and MeitY representatives. This mirrors the EU\'s European Data Protection Board (EDPB) coordination model.',
                },
                {
                  type: 'example',
                  content:
                    'A breach at Zerodha affecting 10 million clients\' KYC, trading, and UPI data would require notifications to: SEBI (CSCRF 6 hours), RBI (storage circular 6 hours), CERT-In (Directions 6 hours), DPDPA Board (Section 8(6) as soon as possible), and potentially TRAI (if telecom data involved). Inter-regulator coordination ensures consistent enforcement decisions.',
                },
                {
                  type: 'callout',
                  content:
                    'Indian enterprises should design a single regulator notification matrix as part of their breach response playbook: each regulator, its clock, its required format, and its escalation path. This is the operational core of multi-regulator compliance.',
                  calloutType: 'tip',
                },
              ],
            },
          ],
          glossary: [
            { term: 'RBI', definition: 'Reserve Bank of India, regulator of banking, payments, and NBFCs under the RBI Act 1934.' },
            { term: 'SEBI', definition: 'Securities and Exchange Board of India, regulator of securities markets under the SEBI Act 1992.' },
            { term: 'IRDAI', definition: 'Insurance Regulatory and Development Authority of India under the IRDA Act 1999.' },
            { term: 'TRAI', definition: 'Telecom Regulatory Authority of India under the TRAI Act 1997.' },
            { term: 'MeitY', definition: 'Ministry of Electronics and Information Technology, parent ministry for the DPDPA and CERT-In.' },
            { term: 'DPDPA Board', definition: 'Data Protection Board, the horizontal data protection regulator under DPDPA Section 18.' },
            { term: 'Inter-Regulatory Coordination Committee', definition: 'Expected coordinating body among Indian regulators for cross-sectoral data issues, modelled on the EU EDPB.' },
          ],
          references: [
            { title: 'DPDPA 2023 Sections 18, 27, 28, 33', source: 'Government of India', year: '2023' },
            { title: 'RBI Cyber Security Framework for Banks', source: 'RBI', year: '2016' },
            { title: 'SEBI CSCRF Circular', source: 'SEBI', year: '2024' },
            { title: 'IRDAI Information and Cyber Security Guidelines', source: 'IRDAI', year: '2017' },
            { title: 'CERT-In Directions 28 April 2022', source: 'CERT-In', year: '2022' },
          ],
        },
        // -------- LESSON 14: CONFLICTS & OVERLAPS --------
        {
          id: 14,
          title: 'Conflicts & Overlaps: When Sectoral Laws and DPDPA Collide',
          duration: '13 min',
          type: 'reading',
          description:
            'How to resolve conflicts between sectoral laws (RBI, SEBI, IRDAI) and the DPDPA — the "stricter rule prevails" principle and reconciliation techniques.',
          content:
            'When sectoral laws and the DPDPA impose conflicting requirements, Indian enterprises face genuine compliance dilemmas. Examples: RBI requires 6-hour breach reporting; DPDPA says "as soon as possible" — which controls? IRDAI requires insurance data localisation; DPDPA Section 16 allows transfers except to blacklisted countries — does IRDAI override? This lesson teaches the "stricter rule prevails" principle and practical reconciliation techniques for these conflicts.',
          learningObjectives: [
            'Apply the "stricter rule prevails" principle to sectoral vs DPDPA conflicts',
            'Resolve breach notification timeline conflicts',
            'Address data localisation conflicts (IRDAI vs DPDPA Section 16)',
            'Build a conflict resolution framework for the compliance matrix',
          ],
          keyTakeaways: [
            'The "stricter rule prevails" principle: when two laws impose different rules, comply with the stricter.',
            'Sectoral data localisation (RBI, IRDAI) overrides DPDPA Section 16 transfer permissions.',
            'Breach notification: comply with the shortest clock (typically 6 hours for CERT-In/RBI/SEBI/IRDAI).',
            'Retention: where sectoral law mandates longer retention (e.g., PMLA 5 years), it overrides DPDPA storage limitation.',
            'The DPDPA does not displace sectoral regulators — both apply cumulatively.',
          ],
          sections: [
            {
              id: 'sec-1',
              title: 'The Stricter Rule Prevails Principle',
              content: [
                {
                  type: 'paragraph',
                  content:
                    'India follows the "stricter rule prevails" principle in regulatory conflicts. Where the DPDPA and a sectoral law impose different obligations, the enterprise must comply with the stricter rule. This principle is not codified in a single statute but has emerged through RBI/SEBI/IRDAI enforcement practice and is expected to be formalised in the forthcoming DPDPA Rules. The principle ensures that the DPDPA\'s horizontal protections do not weaken sector-specific rules.',
                },
                {
                  type: 'callout',
                  content:
                    'The stricter rule prevails principle is reciprocal: if the DPDPA is stricter (e.g., verifiable parental consent under Section 9 vs sectoral KYC for children), the DPDPA prevails. If the sectoral rule is stricter (e.g., IRDAI data localisation vs DPDPA Section 16 transfer permission), the sectoral rule prevails.',
                  calloutType: 'important',
                },
              ],
            },
            {
              id: 'sec-2',
              title: 'Common Conflict Scenarios',
              content: [
                {
                  type: 'table',
                  headers: ['Conflict', 'DPDPA Rule', 'Sectoral Rule', 'Stricter/Prevailing'],
                  rows: [
                    ['Breach notification clock', 'As soon as possible (Sec 8(6))', '6 hours (CERT-In/RBI/SEBI/IRDAI)', '6 hours sectoral'],
                    ['Payment data localisation', 'Transfer permitted except blacklist (Sec 16)', 'India-only storage (RBI 2018)', 'RBI localisation'],
                    ['Insurance data localisation', 'Transfer permitted except blacklist (Sec 16)', 'India-only storage (IRDAI 2017)', 'IRDAI localisation'],
                    ['KYC retention', 'Storage limitation (Sec 8(7))', '5 years post-closure (PMLA)', 'PMLA 5-year retention'],
                    ['Children\'s data', 'Verifiable parental consent <18 (Sec 9)', 'Sectoral KYC', 'DPDPA Section 9'],
                    ['Breach notification format', 'Board-prescribed format', 'Sectoral format (RBI/SEBI)', 'Both — file separately'],
                    ['DPO appointment', 'SDFs only (Sec 8(9))', 'CISO mandatory (RBI/SEBI/IRDAI)', 'Sectoral CISO mandate'],
                  ],
                },
                {
                  type: 'example',
                  content:
                    'A bank suffers a breach at 9:00 AM. The stricter rule requires: (1) notify RBI within 6 hours (by 3:00 PM); (2) notify CERT-In within 6 hours; (3) notify the DPDPA Board as soon as possible (best practice: same day); (4) notify affected customers per RBI\'s customer notification rules. Four notifications, escalating timelines.',
                },
              ],
            },
            {
              id: 'sec-3',
              title: 'Reconciliation Techniques',
              content: [
                {
                  type: 'paragraph',
                  content:
                    'Practical reconciliation techniques include: (1) the unified program with jurisdiction-specific overlays (taught in Module 18); (2) the compliance matrix mapping each obligation to its strictest rule; (3) the unified incident response playbook with regulator-specific notification branches; (4) the single DPO/CISO dual role; (5) quarterly compliance reviews to track regulatory changes.',
                },
                {
                  type: 'heading',
                  content: 'The Compliance Matrix',
                },
                {
                  type: 'paragraph',
                  content:
                    'A compliance matrix is a table with obligations as rows and regulators as columns. Each cell contains the rule and source. The "Strictest" column identifies the prevailing rule. This matrix is the operational document for multi-regulator compliance — kept updated quarterly.',
                },
                {
                  type: 'example',
                  content:
                    'A fintech\'s compliance matrix for "breach notification" row shows: RBI (6h), SEBI (6h if applicable), CERT-In (6h), DPDPA Board (ASAP). Strictest: 6 hours. The breach playbook triggers all four notifications within 6 hours — meeting the strictest clock and the DPDPA "as soon as possible" by default.',
                },
              ],
            },
            {
              id: 'sec-4',
              title: 'When Genuinely Conflicting Rules Arise',
              content: [
                {
                  type: 'paragraph',
                  content:
                    'Rare genuine conflicts — where one law mandates X and another prohibits X — require legal interpretation. Examples: (1) PMLA requires KYC data retention for 5 years post-closure; DPDPA Section 8(7) requires storage limitation — PMLA prevails as it is the stricter (longer) rule for retention in this context, with the DPDPA accepting sectoral retention overrides; (2) Right to be forgotten (GDPR Article 17) vs PMLA retention — sectoral retention prevails.',
                },
                {
                  type: 'callout',
                  content:
                    'Where genuine conflicts arise and the stricter-rule principle is ambiguous, enterprises should: (1) document the conflict; (2) seek legal opinion; (3) consider petitioning the DPDPA Board under Section 27(2) for direction; (4) maintain evidence of good-faith compliance efforts. The Board\'s direction under Section 27(2) can resolve the conflict authoritatively.',
                  calloutType: 'tip',
                },
                {
                  type: 'example',
                  content:
                    'If IRDAI mandates 6-hour breach reporting but the DPDPA Board\'s forthcoming rules specify 72 hours, the insurer faces genuine conflict. The stricter-rule principle dictates 6 hours; the DPDPA Board\'s direction under Section 27(2) may clarify. Until clarification, insurers should comply with 6 hours (stricter).',
                },
              ],
            },
          ],
          glossary: [
            { term: 'Stricter Rule Prevails', definition: 'The principle that where two laws impose different rules, the stricter rule controls compliance.' },
            { term: 'Sectoral Override', definition: 'The principle that sectoral data localisation (RBI, IRDAI) overrides DPDPA Section 16 transfer permissions.' },
            { term: 'Compliance Matrix', definition: 'A table mapping obligations to regulators, identifying the strictest rule per obligation.' },
            { term: 'Inter-Regulatory Coordination', definition: 'The coordination mechanism among Indian regulators for cross-sectoral data issues.' },
            { term: 'Section 27(2) Direction', definition: 'DPDPA Board\'s power to issue directions to Data Fiduciaries, including conflict resolution.' },
          ],
          references: [
            { title: 'DPDPA 2023 Sections 8, 10, 16, 27', source: 'Government of India', year: '2023' },
            { title: 'RBI Cyber Security Framework for Banks', source: 'RBI', year: '2016' },
            { title: 'PMLA Rules (Retention)', source: 'Government of India', year: '2005 (updated)' },
            { title: 'IRDAI Cyber Security Guidelines', source: 'IRDAI', year: '2017' },
            { title: 'IAPP India Cross-Sector Compliance Guide', source: 'International Association of Privacy Professionals', year: '2024' },
          ],
        },
        // -------- LESSON 15: MULTI-REGULATOR COMPLIANCE MATRIX --------
        {
          id: 15,
          title: 'Building a Multi-Regulator Compliance Matrix',
          duration: '15 min',
          type: 'exercise',
          description:
            'A practical exercise in building a multi-regulator compliance matrix for a complex Indian enterprise — covering RBI, SEBI, IRDAI, TRAI, CERT-In, MeitY, and the DPDPA Board.',
          content:
            'This lesson provides a template for building a multi-regulator compliance matrix for a complex Indian enterprise operating across multiple sectors. The matrix is the operational document for unified compliance — it identifies each obligation, the applicable regulators, the strictest rule, and the responsible team. By the end of this lesson, you will be able to build a compliance matrix for any Indian enterprise.',
          learningObjectives: [
            'Design a multi-regulator compliance matrix',
            'Map obligations to regulators and responsible teams',
            'Identify the strictest rule for each obligation',
            'Operationalise the matrix in a quarterly cadence',
          ],
          keyTakeaways: [
            'A compliance matrix maps obligations to regulators, rules, and responsible teams.',
            'The matrix identifies the strictest applicable rule per obligation.',
            'A typical Indian enterprise matrix has 20-30 obligations and 4-6 regulators.',
            'The matrix must be reviewed quarterly to track regulatory changes.',
            'The matrix is the foundation of the unified compliance program.',
          ],
          sections: [
            {
              id: 'sec-1',
              title: 'Matrix Structure',
              content: [
                {
                  type: 'paragraph',
                  content:
                    'A multi-regulator compliance matrix has the following columns: (1) Obligation; (2) DPDPA Rule; (3) Sectoral Regulator Rule; (4) Strictest Rule; (5) Responsible Team; (6) Frequency; (7) Evidence/Artifact. The rows are the obligations across consent, security, breach, retention, transfers, rights, DPO, training, audit, and reporting.',
                },
                {
                  type: 'table',
                  headers: ['Obligation', 'DPDPA Rule', 'Sectoral Rule (e.g., RBI)', 'Strictest'],
                  rows: [
                    ['Lawful basis', 'Consent Sec 6', 'RBI Digital Lending consent', 'DPDPA + RBI'],
                    ['Data localisation', 'Transfer Sec 16', 'India-only (RBI 2018)', 'RBI localisation'],
                    ['Breach notification', 'ASAP Sec 8(6)', '6h (RBI/CERT-In)', '6 hours'],
                    ['Breach format', 'Board format', 'RBI format', 'Both formats'],
                    ['Retention', 'Sec 8(7) limit', '5yr PMLA KYC', 'PMLA 5 years'],
                    ['Children\'s data', 'Sec 9 verifiable parental', '—', 'DPDPA Section 9'],
                    ['Rights', 'Sec 11 (6 rights)', '—', 'DPDPA Section 11'],
                    ['DPO appointment', 'Sec 8(9) SDFs', 'CISO mandatory (RBI/SEBI)', 'Sectoral CISO + DPDPA'],
                    ['Annual audit', 'Sec 10 SDF audit', 'Annual CERT-In audit', 'Single dual-purpose audit'],
                    ['Training', 'Sec 8 awareness', 'RBI/SEBI training', 'Combined annual training'],
                  ],
                },
              ],
            },
            {
              id: 'sec-2',
              title: 'Roles and Responsibilities',
              content: [
                {
                  type: 'paragraph',
                  content:
                    'Each obligation row in the matrix must have a Responsible Team — typically: Legal (consent, rights, contracts); CISO/Cybersecurity (security, breach, audit); Privacy Office (DPO, DPIA, training); Compliance (regulatory reporting, audits); Engineering (technical implementation); Operations (data subject requests). The matrix assigns each obligation to a primary team with secondary support.',
                },
                {
                  type: 'heading',
                  content: 'Sample Responsibility Assignment',
                },
                {
                  type: 'list',
                  content: 'Responsibility matrix sample',
                  items: [
                    'Consent management: Privacy Office (primary), Engineering (implementation), Legal (policy).',
                    'Breach response: CISO (primary), Privacy Office (DPB notification), Legal (regulator liaison), Communications (customer notice).',
                    'Data subject rights: Privacy Office (primary), Engineering (portability), Operations (ticketing).',
                    'Cross-border transfers: Legal (primary), Privacy Office, Engineering.',
                    'Annual audit: Compliance (primary), CISO, Privacy Office.',
                    'Training: Privacy Office (primary), HR, Compliance.',
                  ],
                },
              ],
            },
            {
              id: 'sec-3',
              title: 'Operationalising the Matrix',
              content: [
                {
                  type: 'paragraph',
                  content:
                    'The matrix becomes operational through: (1) quarterly review by the Privacy Steering Committee; (2) regulatory horizon scanning (track RBI/SEBI/IRDAI/TRAI/CERT-In circulars weekly); (3) updates to internal policies within 30 days of regulatory change; (4) annual training refresh reflecting matrix updates; (5) audit evidence collection per obligation row. The matrix should be the source-of-truth document — referenced in every compliance discussion.',
                },
                {
                  type: 'callout',
                  content:
                    'The matrix is not a one-time deliverable — it is a living document. Treat it like a software product with versions, change logs, and quarterly releases. The Privacy Steering Committee chairs the matrix ownership.',
                  calloutType: 'important',
                },
              ],
            },
            {
              id: 'sec-4',
              title: 'Case Study: Multi-Sector Indian Conglomerate',
              content: [
                {
                  type: 'paragraph',
                  content:
                    'Consider a hypothetical Indian conglomerate "Bharat Group" with: (1) a banking subsidiary (Bharat Bank) regulated by RBI; (2) a broking arm (Bharat Securities) regulated by SEBI; (3) an insurance arm (Bharat Insurance) regulated by IRDAI; (4) a telecom subsidiary (Bharat Telecom) regulated by TRAI; (5) an e-commerce arm (Bharat Shop) regulated by CCPA and DPDPA. The conglomerate\'s compliance matrix has 25 obligations across 6 regulators (RBI, SEBI, IRDAI, TRAI, CCPA, DPDPA Board) plus CERT-In for cybersecurity.',
                },
                {
                  type: 'heading',
                  content: 'Sample Matrix Excerpt',
                },
                {
                  type: 'table',
                  headers: ['Obligation', 'RBI (Bank)', 'SEBI (Securities)', 'IRDAI (Insurance)', 'TRAI (Telecom)', 'DPDPA Board', 'Strictest'],
                  rows: [
                    ['Breach notification', '6h', '6h', '6h', '6h', 'ASAP', '6h (all sectors)'],
                    ['Data localisation', 'Mandatory', 'KYC only', 'Mandatory', 'Mandatory', 'Blacklist', 'Mandatory (all)'],
                    ['DPO/CISO', 'CISO', 'CISO (MII)', 'CISO', '—', 'SDF DPO', 'CISO + DPO'],
                    ['Children\'s data', '—', '—', '—', '—', 'Sec 9', 'DPDPA Section 9'],
                    ['Breach customer notice', 'RBI format', 'SEBI format', 'IRDAI format', 'TRAI format', 'Sec 8(6)', 'Per sectoral format'],
                    ['Annual audit', 'RBI', 'CERT-In', 'IRDAI', '—', 'SDF', 'Annual (all sectors)'],
                  ],
                },
                {
                  type: 'example',
                  content:
                    'Bharat Group\'s compliance team maintains a single matrix with 25 obligation rows × 6 regulator columns. The Privacy Steering Committee reviews it monthly, with quarterly updates after regulatory changes. The matrix is shared across all subsidiary compliance officers, ensuring consistent interpretation.',
                },
                {
                  type: 'callout',
                  content:
                    'For multi-sector Indian conglomerates, the matrix is the only practical way to manage multi-regulator compliance. Without it, subsidiaries operate in silos, creating conflicts and gaps. The matrix creates a single source of truth across the group.',
                  calloutType: 'tip',
                },
              ],
            },
          ],
          glossary: [
            { term: 'Compliance Matrix', definition: 'A structured table mapping obligations to regulators, rules, responsible teams, and evidence artifacts.' },
            { term: 'Responsible Team', definition: 'The team or function with primary accountability for a specific obligation in the compliance matrix.' },
            { term: 'Strictest Rule', definition: 'The most stringent applicable rule across all regulators for a given obligation — the prevailing rule.' },
            { term: 'Privacy Steering Committee', definition: 'Cross-functional governance body chairing the compliance matrix ownership.' },
            { term: 'Regulatory Horizon Scanning', definition: 'Systematic monitoring of regulatory circulars and amendments to keep the compliance matrix current.' },
          ],
          references: [
            { title: 'DPDPA 2023 (Sections 8, 9, 10, 16, 18, 27)', source: 'Government of India', year: '2023' },
            { title: 'RBI Cyber Security Framework and Master Directions', source: 'RBI', year: '2016-2024' },
            { title: 'SEBI CSCRF', source: 'SEBI', year: '2024' },
            { title: 'IRDAI Cyber Security Guidelines', source: 'IRDAI', year: '2017' },
            { title: 'CERT-In Directions 28 April 2022', source: 'CERT-In', year: '2022' },
            { title: 'IAPP Privacy Governance Framework', source: 'International Association of Privacy Professionals', year: '2024' },
          ],
        },
      ],
    },
  ],

  // ===== MODULE ASSIGNMENTS =====
  assignments: [
    {
      id: 1,
      title: 'Sector-Specific Compliance Plan',
      description:
        'Choose one of the 8 sectors covered (healthcare, banking, e-commerce, EdTech, insurance, securities, telecom, AI/fintech/gaming/crypto) and develop a detailed DPDPA + sectoral compliance plan for a hypothetical Indian company in that sector.',
      deliverables: [
        'Company profile (size, customers, data flows, sectoral regulators)',
        'Compliance matrix mapping 15 obligations to DPDPA + sectoral rules',
        'Identification of strictest rule per obligation',
        'Incident response playbook with regulator-specific notification branches',
        '12-month compliance implementation roadmap',
      ],
    },
    {
      id: 2,
      title: 'Multi-Regulator Conflict Resolution',
      description:
        'Identify three genuine conflicts between sectoral law (RBI, SEBI, IRDAI, or TRAI) and DPDPA 2023. For each conflict, analyse the stricter-rule principle, propose a resolution, and document the legal opinion basis.',
      deliverables: [
        'Three conflict scenarios with full legal analysis',
        'Stricter-rule analysis for each conflict',
        'Compliance resolution recommendation',
        'Legal opinion supporting the resolution',
        'Risk assessment if resolution is challenged',
      ],
    },
    {
      id: 3,
      title: 'EdTech Children\'s Data Compliance Audit',
      description:
        'Conduct a DPDPA Section 9 compliance audit of an Indian EdTech platform (real or hypothetical). Assess age-gating, verifiable parental consent, behavioural monitoring, and targeted advertising practices.',
      deliverables: [
        'Audit checklist with 20+ items mapped to DPDPA Section 9',
        'Findings document with risk ratings (high/medium/low)',
        'Remediation plan with timeline and responsible teams',
        'Compliant UX redesign proposal for under-18 user flow',
        'Verifiable parental consent implementation plan',
      ],
    },
  ],

  // ===== MODULE QUIZ =====
  quiz: {
    questions: [
      {
        question: 'Which circular mandates that all payment system data in India be stored only in India?',
        options: ['RBI 6 April 2018 circular', 'RBI Tokenisation 2022', 'SEBI CSCRF 2024', 'IRDAI Guidelines 2017'],
        correct: 0,
        explanation: 'The RBI circular DPSS.CO.PD.No.1418/02.14.006/2017-18 dated 6 April 2018 mandates storage of payment system data only in India.',
      },
      {
        question: 'Under DPDPA Section 9, what is the age threshold requiring verifiable parental consent?',
        options: ['Under 13', 'Under 14', 'Under 16', 'Under 18'],
        correct: 3,
        explanation: 'DPDPA Section 9 requires verifiable parental consent for processing personal data of children under 18 — the highest threshold globally.',
      },
      {
        question: 'Which framework operationalised India\'s Account Aggregator (AA) system for consent-based financial data sharing?',
        options: ['RBI PPI Master Direction 2021', 'RBI Account Aggregator Master Direction 2016', 'NPCI UPI Guidelines', 'SEBI CSCRF 2024'],
        correct: 1,
        explanation: 'The RBI Account Aggregator Master Direction (2016, updated) operationalised the AA framework enabling consent-based sharing of financial data via FIPs and FIUs.',
      },
      {
        question: 'Under the IRDAI Information and Cyber Security Guidelines 2017, how quickly must cyber incidents be reported to IRDAI?',
        options: ['24 hours', '6 hours', '72 hours', '30 days'],
        correct: 1,
        explanation: 'IRDAI Guidelines require cyber incident reporting within 6 hours of detection — among the strictest globally.',
      },
      {
        question: 'Which SEBI framework consolidates earlier sector-specific circulars into a unified cybersecurity framework, effective January 2025?',
        options: ['CSCRF (Cybersecurity and Cyber Resilience Framework)', 'LODR Regulations', 'ICDR Regulations', 'SEBI KYC Regulations'],
        correct: 0,
        explanation: 'SEBI\'s Cybersecurity and Cyber Resilience Framework (CSCRF), notified November 2024, consolidates earlier circulars into a unified framework effective 1 January 2025.',
      },
      {
        question: 'What is the GST rate on Real Money Games (RMG) from October 2023?',
        options: ['18% on platform fees', '28% on net winnings', '28% on full face value', '12% on deposits'],
        correct: 2,
        explanation: 'From October 2023, GST on RMG is 28% on the full face value of bets (not net winnings) — drastically changing RMG economics.',
      },
      {
        question: 'When was cryptocurrency brought under the Prevention of Money Laundering Act (PMLA) in India?',
        options: ['1 April 2022', '7 March 2023', '1 July 2022', '19 November 2024'],
        correct: 1,
        explanation: 'On 7 March 2023, the Ministry of Finance notified that Virtual Asset Service Providers (VASPs) would be reporting entities under PMLA, requiring FIU-IND registration.',
      },
      {
        question: 'Under CERT-In Directions of 28 April 2022, within how many hours must cyber incidents be reported?',
        options: ['24 hours', '72 hours', '6 hours', '3 days'],
        correct: 2,
        explanation: 'CERT-In Directions 28 April 2022 require reporting of 20 categories of cyber incidents within 6 hours of detection — the strictest in India.',
      },
      {
        question: 'Which section of the DPDPA exempts the State from certain obligations when processing for sovereignty, security, and public order?',
        options: ['Section 8', 'Section 9', 'Section 17', 'Section 18'],
        correct: 2,
        explanation: 'DPDPA Section 17 provides exemptions for State processing for sovereignty, integrity, security of India, public order, and enforcement of legal rights.',
      },
      {
        question: 'What is the maximum monthly transaction limit for a full-KYC PPI (wallet) under RBI Master Direction 2021?',
        options: ['₹10,000', '₹50,000', '₹1,00,000', '₹2,00,000'],
        correct: 3,
        explanation: 'A full-KYC PPI can hold up to ₹2,00,000 with no monthly transaction cap; min-KYC PPIs are limited to ₹10,000 balance and ₹10,000/month transactions.',
      },
      {
        question: 'Under TRAI TCCCPR 2018, which technology platform manages commercial communications and content templates?',
        options: ['Aadhaar', 'UPI', 'Distributed Ledger Technology (DLT)', 'DigiLocker'],
        correct: 2,
        explanation: 'TCCCPR 2018 introduced the blockchain-based Distributed Ledger Technology (DLT) platform for managing commercial communications, header codes, and content templates.',
      },
      {
        question: 'Which RBI framework, effective 1 October 2022, prohibited merchants from storing actual card data and replaced it with tokens?',
        options: ['Storage of Payment Data Circular', 'Tokenisation Framework', 'Digital Lending Master Direction', 'Account Aggregator Direction'],
        correct: 1,
        explanation: 'RBI\'s Card-on-File (CoF) Tokenisation Framework, effective 1 October 2022, prohibited merchants from storing actual card data, replacing them with merchant-and-device-specific tokens.',
      },
      {
        question: 'Which body was established under DPDPA Section 18 as India\'s horizontal data protection regulator?',
        options: ['CERT-In', 'MeitY', 'Data Protection Board', 'Central Consumer Protection Authority'],
        correct: 2,
        explanation: 'The Data Protection Board, established under DPDPA Section 18, is India\'s horizontal data protection regulator with jurisdiction over personal data across all sectors.',
      },
      {
        question: 'Under the Consumer Protection (E-Commerce) Rules 2020, within how many hours must a grievance officer acknowledge a consumer complaint?',
        options: ['24 hours', '48 hours', '72 hours', '15 days'],
        correct: 1,
        explanation: 'Rule 4(8) of the Consumer Protection (E-Commerce) Rules 2020 requires grievance officers to acknowledge complaints within 48 hours and resolve within 1 month.',
      },
      {
        question: 'When were VASPs (Virtual Asset Service Providers) required to register with FIU-IND under PMLA?',
        options: ['Before 31 March 2023', 'Before 31 December 2023', 'Before 30 September 2024', 'No deadline — voluntary'],
        correct: 1,
        explanation: 'Following the 7 March 2023 PMLA notification, offshore VASPs serving Indian customers were required to register with FIU-IND before 31 December 2023. Binance and KuCoin registered; others blocked Indian users.',
      },
    ],
    passingScore: 80,
  },

  // ===== MODULE PROJECT =====
  project: {
    title: 'Design a Multi-Regulator Compliance Matrix for an Indian Conglomerate',
    description:
      'Design and document a multi-regulator compliance matrix for a hypothetical Indian conglomerate operating in banking (RBI), securities (SEBI), insurance (IRDAI), telecom (TRAI), e-commerce, and emerging tech (AI/fintech). The matrix must reconcile DPDPA obligations with sectoral regulator requirements across 20+ obligations.',
    deliverables: [
      'Conglomerate profile with 5 subsidiaries and their data flows',
      'Compliance matrix with 20+ obligations × 6+ regulator columns',
      'Strictest-rule identification per obligation with legal basis',
      'Responsible team assignment per obligation',
      'Incident response playbook with regulator-specific notification branches (6h, 24h, 72h, ASAP tracks)',
      'Quarterly review and regulatory horizon scanning procedure',
      'Compliance matrix governance charter with Privacy Steering Committee structure',
      'Implementation roadmap (12 months) for conglomerate-wide compliance',
      'Risk assessment of multi-regulator conflicts and proposed resolutions',
      'Executive summary justifying the multi-regulator approach',
    ],
  },
};