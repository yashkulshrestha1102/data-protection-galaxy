// data/modules/module16.ts

import { Module } from '@/app/types/course';

export const module16: Module = {
  id: 16,
  title: 'Documentation & Compliance Framework',
  description:
    'Build the complete documentation framework that demonstrates DPDPA compliance — from externally facing Privacy Policy and Cookie Policy to internal governance documents like the DPO Appointment Letter, Grievance Officer Designation, DPIA and ROPA templates, and Board-level privacy reporting. This module covers every document an Indian Data Fiduciary must draft, maintain, and produce on demand to the Data Protection Board, with templates aligned to DPDPA 2023 and the DPDP Rules 2025. Avoid the penalties — up to ₹250 crore — that apply when documentation is missing, outdated, or non-compliant.',
  duration: '7 Hours',
  icon: 'FileCheck',
  learningObjectives: [
    'Draft a DPDPA-compliant Privacy Policy in plain language with multi-lingual support',
    'Design a Cookie Policy and consent banner covering the four cookie categories',
    'Negotiate Vendor Data Processing Agreements (DPAs) with the 10 mandatory clauses',
    'Prepare internal governance documents: DPO appointment, Grievance Officer designation, DPIA, ROPA',
    'Maintain consent audit logs, vendor risk records, and training certifications',
    'Produce Board-level privacy reporting that demonstrates DPDPA accountability',
  ],
  chapters: [
    // ============================================================
    // CHAPTER 1: REQUIRED DOCUMENTS
    // ============================================================
    {
      id: 1,
      title: 'Required Documents',
      lessons: [
        // -------- LESSON 1 --------
        {
          id: 1,
          title: 'Privacy Policy',
          duration: '17 min',
          type: 'video',
          description:
            'How to draft a DPDPA-compliant Privacy Policy under Section 8(3): required structure, plain language, multi-lingual support, and the specific disclosures mandated by the DPDP Rules 2025.',
          content:
            'The Privacy Policy is the single most important external document a Data Fiduciary produces. Under Section 8(3) of the DPDPA, every Data Fiduciary must give a clear and easy-to-understand Privacy Policy to every Data Principal, describing the processing of personal data in plain language. The DPDP Rules 2025 (Rule 3) specify the structure, content, and accessibility requirements. A deficient Privacy Policy is itself a violation — and the Board has indicated that the maximum penalty of ₹50 crore for failure to comply with Section 8(3) applies per deficient policy, not per organisation. This lesson covers the nine required sections, the plain-language standard, multi-lingual requirements, versioning, and how to keep the policy current as processing evolves.',
          learningObjectives: [
            'Identify the nine required sections of a DPDPA-compliant Privacy Policy',
            'Apply the plain-language standard (Class 8 readability) consistently',
            'Provide the Privacy Policy in English and at least one scheduled Indian language',
            'Implement versioning and change-notice procedures',
            'Avoid common Privacy Policy deficiencies that trigger Section 8(3) penalties',
          ],
          keyTakeaways: [
            'Section 8(3) requires a Privacy Policy in plain language describing processing of personal data',
            'Rule 3 of DPDP Rules 2025 specifies nine required sections: data controller, purposes, categories, recipients, retention, rights, contact, grievance redressal, and changes',
            'Plain language means Class 8 readability — average 13-14 year old can understand and act',
            'Privacy Policy must be available in English plus at least one scheduled language; multilingual websites should offer it in all major Indian languages',
            'Versioning with change history and Data Principal notification of material changes is mandatory',
          ],
          sections: [
            {
              id: 'sec-1',
              title: 'The Nine Required Sections',
              content: [
                {
                  type: 'paragraph',
                  content:
                    'Rule 3 of the DPDP Rules 2025 specifies that a Privacy Policy must contain nine sections. Omitting any section renders the policy non-compliant with Section 8(3) and exposes the Data Fiduciary to a maximum penalty of ₹50 crore. The following table summarises the nine sections and the level of detail each must contain.',
                },
                {
                  type: 'heading',
                  content: 'The Nine Sections per Rule 3 of DPDP Rules 2025',
                },
                {
                  type: 'table',
                  headers: ['#', 'Section', 'Required Content'],
                  rows: [
                    ['1', 'Data Controller details', 'Name, address, contact, CIN/registration, Grievance Officer contact'],
                    ['2', 'Purposes of processing', 'Specific, lawful purposes for which personal data is collected and processed'],
                    ['3', 'Categories of personal data', 'Specific categories collected (name, email, Aadhaar, financial, etc.) with sensitivity indication'],
                    ['4', 'Recipients of personal data', 'Categories of third parties who receive personal data (processors, sub-processors, regulators)'],
                    ['5', 'Retention period', 'Specific retention periods per category, with reference to legal or business basis'],
                    ['6', 'Data Principal rights', 'Right to access, correct, erase, nominate, grievance redressal,Withdraw consent'],
                    ['7', 'Contact details', 'Grievance Officer name, email, phone, postal address for exercising rights'],
                    ['8', 'Grievance redressal mechanism', 'Process for filing and resolving complaints; 30-day response timeline'],
                    ['9', 'Changes to Privacy Policy', 'Process for material changes; Data Principal notification requirements'],
                  ],
                },
                {
                  type: 'callout',
                  content:
                    'Each section must contain specific, factual information about your actual processing — not generic boilerplate. A Privacy Policy that says "we may use your data for various business purposes" is deficient. The Board treats vague language as failure to give "clear" information under Section 8(3).',
                  calloutType: 'important',
                },
              ],
            },
            {
              id: 'sec-2',
              title: 'The Plain Language Standard',
              content: [
                {
                  type: 'paragraph',
                  content:
                    'Section 8(3) requires the Privacy Policy to be in "plain language." Rule 3 elaborates: the policy must be "available in English and the language used for communication with the Data Principal" and "easily understandable." The Board has interpreted "plain language" to mean Class 8 readability — the average 13-14 year old should be able to understand and act on the policy. This rules out dense legal language, undefined technical terms, and "click-to-accept" walls of text.',
                },
                {
                  type: 'heading',
                  content: 'Plain Language Techniques',
                },
                {
                  type: 'list',
                  content: 'Techniques to achieve Class 8 readability',
                  items: [
                    'Short sentences: average 15-20 words; maximum 25 words',
                    'Active voice: "We collect your name" not "Your name is collected by us"',
                    'Common words: "use" not "utilise"; "share" not "disclose to third parties"',
                    'Define technical terms in plain language the first time they appear',
                    'Use lists and tables instead of dense paragraphs',
                    'Avoid legal Latin (e.g., "ipso facto," "mutatis mutandis")',
                    'Use headings and subheadings to break up text',
                    'Test with a readability tool (Flesch-Kincaid Grade Level < 9)',
                  ],
                },
                {
                  type: 'callout',
                  content:
                    'Test your Privacy Policy with real users. Show it to 10 people who are not lawyers or privacy professionals. If they cannot answer "What data do you collect?" and "How do I delete it?" after reading, your policy is not plain language — regardless of what the readability score says.',
                  calloutType: 'tip',
                },
                {
                  type: 'example',
                  content:
                    'Compare: "The Data Fiduciary shall process Personal Data in accordance with the consensual framework established hereinabove" (Grade 16, incomprehensible) vs "We use your data only with your consent, as described in this policy" (Grade 6, plain). The second is shorter, clearer, and compliant; the first is deficient under Section 8(3).',
                },
              ],
            },
            {
              id: 'sec-3',
              title: 'Multi-Lingual Support and Versioning',
              content: [
                {
                  type: 'paragraph',
                  content:
                    'India has 22 scheduled languages. The DPDPA requires the Privacy Policy in English plus the language used for communication with each Data Principal. For consumer-facing Data Fiduciaries, this typically means Hindi plus the dominant regional language(s) of operation. For B2B Data Fiduciaries, English is often sufficient. The Board has indicated that "conspicuous" availability — meaning the Data Principal can easily find the policy in their language — is the standard, not merely having it buried on a deep page.',
                },
                {
                  type: 'heading',
                  content: 'Multi-Lingual Implementation',
                },
                {
                  type: 'list',
                  content: 'Best practices for multi-lingual Privacy Policy',
                  items: [
                    'Provide the Privacy Policy in English plus at least Hindi and one regional language',
                    'For national consumer services, provide in 8-12 scheduled languages',
                    'Language toggle visible on every page of the policy, not buried in settings',
                    'Translate by professional translators with legal review, not machine translation alone',
                    'Localise examples and references (e.g., Aadhaar, UPI, PAN) appropriately',
                    'All language versions must be substantively equivalent — divergence creates compliance gaps',
                  ],
                },
                {
                  type: 'callout',
                  content:
                    'Machine translation (Google Translate, DeepL) is a starting point, not a final product. Privacy Policy translations must be reviewed by a native-speaking legal professional to ensure accuracy. A mistranslated retention period or right could itself be a Section 8(3) deficiency.',
                  calloutType: 'warning',
                },
                {
                  type: 'heading',
                  content: 'Versioning and Change Management',
                },
                {
                  type: 'paragraph',
                  content:
                    'The Privacy Policy is a living document. As processing evolves (new purposes, new vendors, new data categories), the policy must be updated. Rule 3 requires that material changes be communicated to Data Principals, and that the effective date and version number be visible. Best practice is a versioned policy with a change log accessible to Data Principals.',
                },
                {
                  type: 'list',
                  content: 'Versioning discipline',
                  items: [
                    'Display version number and effective date prominently at the top of the policy',
                    'Maintain a public change log summarising material changes by version',
                    'For material changes (new purposes, new data sharing), notify Data Principals by email or in-app notice 30 days before effective date',
                    'Re-obtain consent for material changes to processing purposes where Section 6 consent applies',
                    'Archive previous versions accessible via direct link (for audit and litigation purposes)',
                    'Review the policy at least annually even if no changes are made',
                  ],
                },
                {
                  type: 'callout',
                  content:
                    'Failure to notify Data Principals of material changes to the Privacy Policy is itself a Section 8(3) violation. The Board has indicated that "silent" updates — changing the policy without notice — are treated as if the policy had never been updated, leaving the Data Fiduciary exposed to the original (now outdated) policy\'s deficiencies.',
                  calloutType: 'danger',
                },
              ],
            },
          ],
          glossary: [
            { term: 'Privacy Policy', definition: 'The document required under DPDPA Section 8(3) describing the processing of personal data in plain language.' },
            { term: 'Plain Language', definition: 'Writing at a Class 8 (13-14 year old) reading level, using short sentences, active voice, and common words.' },
            { term: 'Scheduled Languages', definition: 'The 22 languages listed in the Eighth Schedule of the Indian Constitution; Privacy Policies should be available in English plus relevant scheduled languages.' },
            { term: 'Material Change', definition: 'A change to the Privacy Policy that affects Data Principal rights or processing purposes, requiring notification to Data Principals.' },
          ],
          references: [
            { title: 'DPDPA 2023 — Section 8(3)', source: 'Government of India, MeitY', year: '2023' },
            { title: 'Digital Personal Data Protection Rules 2025 — Rule 3', source: 'Government of India, MeitY', year: '2025' },
            { title: 'Plain Language Action and Information Network (PLAIN) Guidelines', source: 'U.S. federal plain language guidelines (adaptable)', year: '2024' },
            { title: 'ISO/IEC 29184:2020 Privacy guidelines for connected devices', source: 'International Organization for Standardization', year: '2020' },
          ],
        },

        // -------- LESSON 2 --------
        {
          id: 2,
          title: 'Cookie Policy',
          duration: '15 min',
          type: 'video',
          description:
            'How to draft a Cookie Policy and design a consent banner compliant with DPDPA Section 8(3) and DPDP Rules 2025: cookie categories, granular consent, banner design, and refusal mechanics.',
          content:
            'Cookies are small text files stored on a user\'s device, used for session management, personalisation, analytics, and advertising. Under the DPDPA, the placement of non-essential cookies requires informed, specific, and freely given consent under Section 4 and Section 6. The Cookie Policy discloses what cookies are used, why, and how to control them; the consent banner operationalises that disclosure into actionable choice. This lesson covers the four cookie categories (strictly necessary, preference, analytics, marketing), the consent banner design requirements, the "reject all" button requirement, and the prohibition on cookie walls for non-essential cookies. Done right, cookie compliance builds user trust; done wrong, it triggers Section 8(3) deficiencies and potential penalties.',
          learningObjectives: [
            'Classify cookies into the four categories and apply the correct consent rule to each',
            'Design a consent banner that meets DPDPA Section 6 consent requirements',
            'Implement granular consent (per category, not all-or-nothing)',
            'Provide a "reject all" option as prominent as "accept all"',
            'Avoid cookie walls and pre-ticked checkboxes that invalidate consent',
          ],
          keyTakeaways: [
            'Strictly necessary cookies (e.g., session, cart) do not require consent; all other categories do',
            'Consent must be granular — Data Principals can accept analytics but reject marketing, for example',
            'A "reject all" button must be as prominent as "accept all" — burying it is non-compliant',
            'Cookie walls (blocking access unless non-essential cookies are accepted) invalidate consent under Section 6',
            'Cookie Policy must be linked from the consent banner and accessible without accepting cookies',
          ],
          sections: [
            {
              id: 'sec-1',
              title: 'The Four Cookie Categories',
              content: [
                {
                  type: 'paragraph',
                  content:
                    'Cookies serve different purposes and are treated differently under the DPDPA. The classification into four categories — drawn from industry practice and aligned with the DPDPA\'s consent requirements — determines whether consent is required and what the Cookie Policy must disclose about each.',
                },
                {
                  type: 'heading',
                  content: 'Cookie Categories and Consent Requirements',
                },
                {
                  type: 'table',
                  headers: ['Category', 'Purpose', 'Examples', 'Consent Required?'],
                  rows: [
                    ['Strictly Necessary', 'Core functionality; site cannot operate without', 'Session ID, shopping cart, security tokens', 'No — Section 4(2) exemption'],
                    ['Preference', 'Remember user choices (language, theme)', 'Language preference, dark mode, region', 'Yes — Section 6'],
                    ['Analytics', 'Measure site usage and performance', 'Google Analytics, Mixpanel, Hotjar', 'Yes — Section 6'],
                    ['Marketing/Advertising', 'Track across sites for targeted advertising', 'Doubleclick, Meta Pixel, LinkedIn Insight', 'Yes — Section 6'],
                  ],
                },
                {
                  type: 'callout',
                  content:
                    'The "strictly necessary" exemption is narrow. It covers only cookies without which the site cannot function at all (e.g., a session cookie that keeps you logged in). It does NOT cover cookies that improve experience but are not essential (e.g., remembering your preferred language — that is a preference cookie requiring consent).',
                  calloutType: 'important',
                },
              ],
            },
            {
              id: 'sec-2',
              title: 'Consent Banner Design',
              content: [
                {
                  type: 'paragraph',
                  content:
                    'The consent banner is the operational mechanism for obtaining DPDPA-compliant cookie consent. Design matters: a banner that pushes the user toward "accept all" and buries "reject all" does not produce freely given consent under Section 6. The banner must present a clear choice, with "accept all" and "reject all" equally prominent, and a path to granular per-category consent.',
                },
                {
                  type: 'heading',
                  content: 'Consent Banner Requirements',
                },
                {
                  type: 'list',
                  content: 'Requirements for a DPDPA-compliant cookie consent banner',
                  items: [
                    'Visible on first visit, before any non-essential cookies are set',
                    'Brief plain-language explanation of what cookies do and why',
                    '"Accept All" and "Reject All" buttons, equal size, equal prominence',
                    'A "Manage Preferences" or "Customise" link to granular per-category controls',
                    'Link to the Cookie Policy (accessible without accepting cookies)',
                    'No pre-ticked checkboxes — consent must be affirmative',
                    'No cookie wall — access to content cannot be conditional on accepting non-essential cookies',
                    'Persistent consent: do not re-prompt on every page (typically 6-12 month consent validity)',
                    'Easy way to withdraw consent later (e.g., "Cookie Settings" link in footer)',
                  ],
                },
                {
                  type: 'callout',
                  content:
                    'Cookie walls — "accept all cookies or leave the site" — are non-compliant under the DPDPA. Section 6 requires consent to be freely given, and conditioning access on accepting non-essential cookies is not free consent. The Board has indicated that cookie walls invalidate consent, exposing the Data Fiduciary to penalty under Section 8(3) for unlawful processing.',
                  calloutType: 'danger',
                },
                {
                  type: 'example',
                  content:
                    'A leading Indian news site implemented a compliant cookie banner: top-of-page banner with plain-language summary, "Accept All" and "Reject All" buttons of equal size, and a "Customise" link opening per-category toggles (Strictly Necessary always on, Preference/Analytics/Marketing off by default). The Cookie Policy was linked. No cookie wall — content was accessible by clicking "Reject All." After implementation, the site saw 38% of users accepting all, 22% rejecting all, and 40% customising — a healthy, compliant distribution.',
                },
              ],
            },
            {
              id: 'sec-3',
              title: 'Cookie Policy Content and Maintenance',
              content: [
                {
                  type: 'paragraph',
                  content:
                    'The Cookie Policy discloses, for each cookie used: name, purpose, category, duration, third-party provider, and how to manage it. The policy must be accurate — listing cookies that no longer exist or omitting cookies that are present is itself a deficiency. Maintenance requires periodic cookie audits, typically quarterly, using browser developer tools or specialised scanners like Cookiebot, OneTrust, or Securiti.ai.',
                },
                {
                  type: 'heading',
                  content: 'Cookie Policy Structure',
                },
                {
                  type: 'list',
                  content: 'Sections of a DPDPA-compliant Cookie Policy',
                  items: [
                    'Introduction: what cookies are and why we use them',
                    'Cookie categories: explanation of the four categories',
                    'Cookie table: name, purpose, category, duration, third-party, domain',
                    'How to manage cookies: browser settings instructions for major browsers',
                    'How we obtain consent: explanation of the consent banner and withdrawal',
                    'Updates: process for changes to cookie usage; notification requirements',
                    'Contact: Grievance Officer details for cookie-related complaints',
                  ],
                },
                {
                  type: 'heading',
                  content: 'Cookie Audit Process',
                },
                {
                  type: 'list',
                  content: 'Steps to conduct a cookie audit',
                  items: [
                    'Use browser developer tools (Application > Cookies) or a scanner (Cookiebot, OneTrust)',
                    'Visit every major page type (home, product, checkout, account, blog)',
                    'Record every cookie set: name, value, domain, expiry, HttpOnly, Secure, SameSite flags',
                    'Identify third-party cookies (different domain) and trace to provider',
                    'Classify each cookie into the four categories',
                    'Compare with the Cookie Policy — flag any discrepancies',
                    'Update the Cookie Policy to match actual cookie usage',
                    'Re-audit quarterly or after any major site change',
                  ],
                },
                {
                  type: 'callout',
                  content:
                    'Consent withdrawal is a DPDPA Section 6 right. The Cookie Policy must explain how to withdraw consent — typically a "Cookie Settings" link in the site footer that reopens the consent banner. Failure to provide an easy withdrawal mechanism is itself a Section 6 violation.',
                  calloutType: 'tip',
                },
              ],
            },
          ],
          glossary: [
            { term: 'Cookie', definition: 'A small text file stored on a user\'s device, used for session management, personalisation, analytics, or advertising.' },
            { term: 'Strictly Necessary Cookie', definition: 'A cookie essential for the website to function (e.g., session, cart); does not require consent under DPDPA Section 4(2).' },
            { term: 'Cookie Wall', definition: 'A design that blocks access to a website unless non-essential cookies are accepted; non-compliant under DPDPA Section 6.' },
            { term: 'Granular Consent', definition: 'Consent given per cookie category, allowing Data Principals to accept analytics but reject marketing, for example.' },
            { term: 'Cookie Audit', definition: 'A periodic review of all cookies set by a website to ensure the Cookie Policy is accurate.' },
          ],
          references: [
            { title: 'DPDPA 2023 — Section 4, Section 6, Section 8(3)', source: 'Government of India, MeitY', year: '2023' },
            { title: 'Digital Personal Data Protection Rules 2025 — Rule 3, Rule 4', source: 'Government of India, MeitY', year: '2025' },
            { title: 'ISO/IEC 29184:2020 Privacy guidelines for connected devices', source: 'International Organization for Standardization', year: '2020' },
            { title: 'EDPB Guidelines 05/2020 on consent under Regulation 2016/679', source: 'European Data Protection Board', year: '2020' },
          ],
        },

        // -------- LESSON 3 --------
        {
          id: 3,
          title: 'Vendor Agreements / Data Processing Addendum (DPA)',
          duration: '18 min',
          type: 'interactive',
          description:
            'How to negotiate a DPDPA-compliant Data Processing Addendum (DPA) with vendors: the 10 mandatory clauses under Section 8(7), sub-processing rules, audit rights, breach notification timelines, and termination/return provisions.',
          content:
            'Every vendor (processor) that handles personal data on behalf of a Data Fiduciary must be bound by a contract that meets Section 8(7) of the DPDPA. The standard form of this contract is the Data Processing Addendum (DPA) — a standalone agreement or a schedule to a master services agreement. Section 8(7) specifies seven mandatory clauses; industry practice and the DPDP Rules 2025 add three more, bringing the total to ten mandatory clauses. A DPA missing any of these is non-compliant, and the Data Fiduciary remains liable for the vendor\'s processing failures. This lesson covers each of the ten mandatory clauses, sub-processing rules, audit rights, breach notification timelines, and termination/return provisions — with a worked clause-by-clause template.',
          learningObjectives: [
            'Identify the 10 mandatory clauses of a DPDPA-compliant DPA',
            'Draft or review each clause with the appropriate level of protection',
            'Apply the sub-processing rules (consent, flow-down, liability)',
            'Negotiate audit rights and breach notification timelines',
            'Implement termination, data return, and deletion provisions',
          ],
          keyTakeaways: [
            'Section 8(7) mandates seven specific clauses; DPDP Rules 2025 and industry practice add three more — 10 mandatory clauses total',
            'The Data Fiduciary remains liable for vendor (processor) failures — strong DPAs are essential risk allocation',
            'Sub-processing requires prior written consent and flow-down of equivalent terms',
            'Vendor breach notification must be faster than the DPDPA\'s 72 hours — typically 24-48 hours',
            'On termination, vendor must return or delete all personal data and certify destruction',
          ],
          sections: [
            {
              id: 'sec-1',
              title: 'The Ten Mandatory Clauses',
              content: [
                {
                  type: 'paragraph',
                  content:
                    'Section 8(7) of the DPDPA requires that the contract between a Data Fiduciary and its processor (vendor) be "binding" and specify seven mandatory elements. The DPDP Rules 2025 and global best practice (drawn from GDPR Article 28) add three more, bringing the total to ten mandatory clauses. The following table summarises all ten.',
                },
                {
                  type: 'heading',
                  content: 'The Ten Mandatory DPA Clauses',
                },
                {
                  type: 'table',
                  headers: ['#', 'Clause', 'Legal Basis', 'Key Content'],
                  rows: [
                    ['1', 'Scope and purposes of processing', 'DPDPA Section 8(7)(a)', 'Specific purposes for which vendor processes personal data'],
                    ['2', 'Nature and duration of processing', 'DPDPA Section 8(7)(b)', 'What processing occurs and for how long'],
                    ['3', 'Type of personal data and categories of Data Principals', 'DPDPA Section 8(7)(c)', 'Specific data categories and Data Principal types'],
                    ['4', 'Obligations and rights of the Data Fiduciary', 'DPDPA Section 8(7)(d)', 'Flow-down of DPDPA obligations; Data Principal rights facilitation'],
                    ['5', 'Confidentiality of personal data', 'Section 8(7) + global practice', 'Personnel confidentiality; access controls'],
                    ['6', 'Security safeguards', 'DPDPA Section 8(5) flow-down', 'Specific technical and organisational measures'],
                    ['7', 'Breach notification', 'DPDPA Section 8(6) flow-down', 'Vendor must notify Data Fiduciary within 24-48 hours'],
                    ['8', 'Sub-processing', 'Global practice (GDPR Art 28(4))', 'Prior written consent; flow-down of equivalent terms'],
                    ['9', 'Audit and inspection rights', 'Global practice', 'Right to audit; third-party audit reports (SOC 2, ISO 27001)'],
                    ['10', 'Termination, return, and deletion', 'DPDPA Section 8(7) + practice', 'Return or delete on termination; certification of destruction'],
                  ],
                },
                {
                  type: 'callout',
                  content:
                    'A DPA missing any of these ten clauses is non-compliant under Section 8(7), and the Data Fiduciary remains liable for the vendor\'s processing. Many standard vendor contracts omit clauses 8 (sub-processing), 9 (audit), or 10 (return/deletion) — negotiate to add them before signing.',
                  calloutType: 'warning',
                },
              ],
            },
            {
              id: 'sec-2',
              title: 'Sub-Processing and Audit Rights',
              content: [
                {
                  type: 'paragraph',
                  content:
                    'Sub-processing — when the vendor engages another vendor (sub-processor) to handle personal data — is a frequent source of breach and a frequent gap in DPAs. The DPDPA holds the Data Fiduciary accountable for the entire chain, including sub-processors the Data Fiduciary may not even know about. Strong sub-processing clauses require prior written consent, equivalent flow-down terms, and direct liability for sub-processor failures.',
                },
                {
                  type: 'heading',
                  content: 'Sub-Processing Clause Requirements',
                },
                {
                  type: 'list',
                  content: 'Mandatory sub-processing provisions',
                  items: [
                    'Prior written consent: vendor must obtain Data Fiduciary\'s consent before engaging any sub-processor',
                    'Public sub-processor list: vendor maintains a list, updates it with notice period (typically 30 days)',
                    'Right to object: Data Fiduciary may object to a sub-processor and require alternative',
                    'Equivalent flow-down: sub-processor contract must contain the same 10 mandatory clauses',
                    'Liability: vendor remains fully liable for sub-processor failures as if it processed itself',
                    'Right to audit sub-processors: extends to sub-processors handling material personal data',
                  ],
                },
                {
                  type: 'callout',
                  content:
                    'Cloud providers (AWS, Azure, GCP) engage sub-processors routinely. Their DPAs typically include a "general authorisation" for sub-processors with a list and notice mechanism. Review these carefully — some allow objection but only with limited grounds. For highly sensitive processing, negotiate specific sub-processor approval rights.',
                  calloutType: 'tip',
                },
                {
                  type: 'heading',
                  content: 'Audit Rights',
                },
                {
                  type: 'paragraph',
                  content:
                    'Audit rights allow the Data Fiduciary to verify the vendor\'s compliance with the DPA. Two forms exist: direct audit (Data Fiduciary sends its own auditors) and third-party audit (vendor provides an independent audit report, typically SOC 2 Type II or ISO/IEC 27001 certificate). For large vendors, third-party audit is the norm; for smaller or higher-risk vendors, direct audit may be appropriate. The clause should specify frequency, scope, notice period, and cost allocation.',
                },
                {
                  type: 'list',
                  content: 'Audit clause elements',
                  items: [
                    'Frequency: annual third-party audit minimum; direct audit on reasonable notice for cause',
                    'Scope: technical, organisational, and procedural controls relevant to the DPA',
                    'Notice period: typically 30 days for third-party audit; 7-14 days for cause (suspected breach)',
                    'Cost allocation: third-party audit at vendor\'s cost; direct audit costs typically borne by Data Fiduciary unless material breach found',
                    'Right to remediate: vendor must remediate findings within agreed timeline',
                    'Reports: SOC 2 Type II, ISO 27001 certificate, or equivalent made available to Data Fiduciary',
                  ],
                },
              ],
            },
            {
              id: 'sec-3',
              title: 'Breach Notification, Termination, and Return',
              content: [
                {
                  type: 'paragraph',
                  content:
                    'The vendor breach notification clause is critical. The DPDPA\'s 72-hour Board notification clock starts when the Data Fiduciary becomes aware — which means the vendor must notify the Data Fiduciary fast enough that the 72-hour clock can still be met. Vendor notification within 24-48 hours of vendor awareness is the standard; longer is non-compliant.',
                },
                {
                  type: 'heading',
                  content: 'Vendor Breach Notification Clause',
                },
                {
                  type: 'list',
                  content: 'Mandatory vendor breach notification terms',
                  items: [
                    'Notification timeline: vendor must notify Data Fiduciary within 24-48 hours of becoming aware of any personal data breach',
                    'Notification content: description of breach, data categories affected, number of Data Principals, remedial action taken, contact for follow-up',
                    'Cooperation: vendor must cooperate with Data Fiduciary\'s investigation, Board notification, and individual notification',
                    'Liability: vendor liable for breach caused by its failures; indemnification for resulting penalties',
                    'No "gag" clauses: vendor cannot be contractually prevented from notifying (would void the DPA)',
                  ],
                },
                {
                  type: 'callout',
                  content:
                    'The 24-48 hour vendor notification timeline is essential because the DPDPA\'s 72-hour clock starts on Data Fiduciary awareness — and that awareness is typically the moment the vendor notifies. A vendor notifying in 48 hours leaves only 24 hours for Data Fiduciary investigation and Board filing. Negotiate faster vendor notification for high-risk processing (12 hours or "immediately").',
                  calloutType: 'important',
                },
                {
                  type: 'heading',
                  content: 'Termination, Return, and Deletion',
                },
                {
                  type: 'paragraph',
                  content:
                    'On termination of the DPA, the vendor must return or delete all personal data and certify destruction. This is critical — without it, personal data may remain in vendor systems indefinitely, creating ongoing breach risk. The clause must specify the timeline (typically 30-90 days post-termination), the form of return (encrypted transfer, certified deletion), and the certification requirement.',
                },
                {
                  type: 'list',
                  content: 'Termination clause elements',
                  items: [
                    'Return or delete: vendor must return or delete all personal data within 30-90 days of termination',
                    'Choice: Data Fiduciary chooses return or deletion (or combination per data type)',
                    'Format: return in agreed structured format (e.g., JSON, CSV); deletion per industry standard (NIST SP 800-88)',
                    'Certification: vendor provides written certification of return or deletion, signed by an officer',
                    'Backups: vendor must delete from backups within 90 days or apply equivalent access controls',
                    'Ongoing confidentiality: obligations survive termination for personal data retained for legal compliance',
                    'Sub-processors: vendor must flow-down return/deletion to its sub-processors',
                  ],
                },
                {
                  type: 'example',
                  content:
                    'An Indian fintech engaged a CRM vendor with a DPA that included all 10 mandatory clauses. After 18 months, the fintech terminated the DPA. The vendor returned all customer data in encrypted JSON format within 30 days, deleted production data, and provided a signed certification of destruction. The vendor\'s sub-processor (cloud hosting) was instructed to delete within 60 days; certification was provided. The fintech avoided the common pitfall of personal data lingering in terminated vendor systems, which is itself a Section 8(5) "reasonable safeguards" deficiency.',
                },
              ],
            },
          ],
          glossary: [
            { term: 'Data Processing Addendum (DPA)', definition: 'The contract between a Data Fiduciary and its processor (vendor), required under DPDPA Section 8(7), containing the 10 mandatory clauses.' },
            { term: 'Sub-Processor', definition: 'A vendor engaged by the primary vendor to handle personal data; the Data Fiduciary remains accountable for the entire chain.' },
            { term: 'Flow-Down', definition: 'The contractual requirement that sub-processor agreements contain equivalent terms to the primary DPA.' },
            { term: 'Audit Right', definition: 'The Data Fiduciary\'s contractual right to verify the vendor\'s DPA compliance through direct or third-party audit.' },
            { term: 'Certification of Destruction', definition: 'A written, signed confirmation by the vendor that personal data has been returned or deleted per the DPA.' },
          ],
          references: [
            { title: 'DPDPA 2023 — Section 8(7), Section 9', source: 'Government of India, MeitY', year: '2023' },
            { title: 'Digital Personal Data Protection Rules 2025 — Rule 9 (Processor obligations)', source: 'Government of India, MeitY', year: '2025' },
            { title: 'GDPR Article 28 — Processor', source: 'European Parliament and Council', year: '2016' },
            { title: 'NIST SP 800-88 Rev. 1: Guidelines for Media Sanitization', source: 'National Institute of Standards and Technology', year: '2014' },
          ],
        },

        // -------- LESSON 4 --------
        {
          id: 4,
          title: 'Internal Privacy Notice (for Employees)',
          duration: '14 min',
          type: 'reading',
          description:
            'How to draft an Internal Privacy Notice that informs employees about the personal data the employer collects, the purposes, monitoring practices, and employee rights under the DPDPA.',
          content:
            'Employees are Data Principals too. The DPDPA applies to the employer-employee relationship — every employer is a Data Fiduciary processing its employees\' personal data. The Internal Privacy Notice is the document that informs employees about this processing: what is collected, why, who sees it, how long it is retained, and what monitoring occurs. Unlike the external Privacy Policy (for customers), the Internal Privacy Notice addresses the specific context of employment: HR records, performance data, monitoring (email, internet, location), and disciplinary records. This lesson covers the structure of an effective Internal Privacy Notice, the monitoring disclosure requirements, and the integration with employment contracts and HR policies.',
          learningObjectives: [
            'Draft an Internal Privacy Notice covering employee personal data processing',
            'Disclose monitoring practices (email, internet, location, CCTV) transparently',
            'Address the specific DPDPA rights of employees (access, correction, nomination)',
            'Integrate the Notice with employment contracts and the HR handbook',
            'Balance employer operational needs with employee privacy rights',
          ],
          keyTakeaways: [
            'Employees are Data Principals under the DPDPA; the employer-employee relationship is fully covered',
            'The Internal Privacy Notice must disclose all monitoring: email, internet, location, CCTV, keystroke, performance',
            'Employee consent is often not "freely given" due to the power imbalance — reliance on legitimate uses (Section 7) is often more appropriate',
            'Employee personal data includes HR records, performance data, monitoring data, health/safety data, and disciplinary records',
            'Notice must be acknowledged at hiring and re-acknowledged on material changes',
          ],
          sections: [
            {
              id: 'sec-1',
              title: 'Structure of the Internal Privacy Notice',
              content: [
                {
                  type: 'paragraph',
                  content:
                    'The Internal Privacy Notice covers the same nine-section structure as the external Privacy Policy (Lesson 1) but tailored to the employment context. Each section addresses the specific data, purposes, and rights relevant to employees. The Notice is typically 4-8 pages, written in plain language, and integrated with the HR handbook and employment contract.',
                },
                {
                  type: 'heading',
                  content: 'The Nine Sections Applied to Employees',
                },
                {
                  type: 'table',
                  headers: ['Section', 'Content for Employee Context'],
                  rows: [
                    ['1. Data Controller', 'Employer legal name, HR contact, Grievance Officer contact'],
                    ['2. Purposes', 'Recruitment, employment, payroll, performance, compliance, IT security, monitoring'],
                    ['3. Categories', 'Identity, contact, education, employment history, performance, health (where applicable), monitoring data'],
                    ['4. Recipients', 'HR, manager, IT, payroll vendor, benefits provider, regulator (PF, ESI, tax)'],
                    ['5. Retention', 'Active employment + 7 years (typical); longer for disciplinary or legal hold'],
                    ['6. Employee rights', 'Access, correction, erasure (limited), nomination, grievance redressal'],
                    ['7. Contact', 'HR head, Grievance Officer name, email, phone, postal'],
                    ['8. Grievance mechanism', 'Internal HR escalation; 30-day response per DPDPA Section 10(2)'],
                    ['9. Changes', 'Material changes communicated by email; re-acknowledgement required'],
                  ],
                },
                {
                  type: 'callout',
                  content:
                    'The Notice must be acknowledged in writing at hiring — typically as a sign-off in the employment contract or a standalone acknowledgement. Re-acknowledgement should be required on material changes (e.g., new monitoring system, new payroll vendor). Maintain acknowledgement records for at least the duration of employment plus the retention period.',
                  calloutType: 'important',
                },
              ],
            },
            {
              id: 'sec-2',
              title: 'Monitoring Disclosure',
              content: [
                {
                  type: 'paragraph',
                  content:
                    'Employee monitoring — email, internet, location, CCTV, keystroke, performance — is a particularly sensitive area. The DPDPA does not prohibit monitoring, but it requires transparency: employees must be told what is monitored, why, who sees the data, and how long it is retained. Hidden monitoring is non-compliant and may also violate the Information Technology Act 2000 (Section 43A and the SPDI Rules 2011) and the Indian Telegraph Act 1885 (for communications interception).',
                },
                {
                  type: 'heading',
                  content: 'Monitoring Categories to Disclose',
                },
                {
                  type: 'list',
                  content: 'Common monitoring practices that must be disclosed',
                  items: [
                    'Email monitoring: logging of sender, recipient, subject, attachments; content scanning for DLP',
                    'Internet monitoring: URL logging, bandwidth usage, category filtering',
                    'Endpoint monitoring: application usage, file transfers, USB devices, screenshots',
                    'Location monitoring: GPS for field staff; badge access for office staff',
                    'CCTV: camera locations, recording schedule, retention period, access controls',
                    'Keystroke logging (rare): only for high-security roles; explicit consent recommended',
                    'Performance monitoring: call recording for customer service, productivity metrics',
                    'Communications interception: phone calls, chat (typically only with cause and notice)',
                  ],
                },
                {
                  type: 'callout',
                  content:
                    'Surprise monitoring destroys trust and creates legal risk. The principle is: if you monitor, disclose it. If you cannot justify disclosing it, you probably should not be doing it. Covert monitoring is permissible only in narrow circumstances (e.g., investigating specific suspected misconduct) and should be authorised in writing by senior management with legal review.',
                  calloutType: 'warning',
                },
                {
                  type: 'example',
                  content:
                    'A Bengaluru IT services company implemented a transparent monitoring program: every employee received an Internal Privacy Notice listing all monitoring (email metadata, internet URLs, badge access, CCTV in common areas), purposes (security, productivity, compliance), retention periods (90 days for internet logs, 1 year for badge access, 30 days for CCTV), and access controls (only HR and Security leads). The Notice was acknowledged at hiring. When the company later added keystroke logging for a high-security project, it obtained specific written consent from the affected team and updated the Notice.',
                },
              ],
            },
            {
              id: 'sec-3',
              title: 'Employee Rights and Limitations',
              content: [
                {
                  type: 'paragraph',
                  content:
                    'Employees have the same DPDPA rights as any other Data Principal: access, correction, erasure, nomination, grievance redressal, and consent withdrawal. However, the employment context creates practical limits. Erasure, for example, cannot apply to records the employer is legally required to retain (e.g., PF records, tax records, disciplinary records). Consent withdrawal may be limited where processing is based on legitimate uses (Section 7) rather than consent.',
                },
                {
                  type: 'heading',
                  content: 'Employee Rights — Practical Application',
                },
                {
                  type: 'table',
                  headers: ['Right', 'Employee Application', 'Limitations'],
                  rows: [
                    ['Access', 'Employee may request all personal data held about them', 'Reasonable fee; 30-day response'],
                    ['Correction', 'Employee may correct inaccurate data', 'Verification of new data'],
                    ['Erasure', 'Limited — only data not legally required to be retained', 'PF, tax, disciplinary records exempt'],
                    ['Nomination', 'Employee may nominate another to exercise rights post-death/incapacity', 'Nomination form; HR maintains register'],
                    ['Grievance', 'Employee may file complaint to Grievance Officer', '30-day response; escalation to Board'],
                    ['Consent withdrawal', 'Withdraw consent for non-essential processing', 'May limit services but not employment'],
                  ],
                },
                {
                  type: 'callout',
                  content:
                    'Reliance on consent for employment processing is often problematic because employee consent is rarely "freely given" due to the power imbalance. The DPDPA\'s Section 7 "legitimate uses" basis is often more appropriate for employment processing (payroll, performance, security). Use consent only for genuinely optional processing (e.g., wellness programs, social activities).',
                  calloutType: 'tip',
                },
                {
                  type: 'paragraph',
                  content:
                    'The Internal Privacy Notice should integrate with the broader HR framework: employment contract (cross-reference to Notice), HR handbook (operational policies aligned with Notice), grievance policy (escalation path), and disciplinary policy (use of monitoring data in disciplinary proceedings). Consistency across these documents is essential — contradictions create compliance gaps and disputes.',
                },
              ],
            },
          ],
          glossary: [
            { term: 'Internal Privacy Notice', definition: 'The document informing employees about personal data processing by the employer, tailored to the employment context.' },
            { term: 'Employee Monitoring', definition: 'The collection of data on employee activity (email, internet, location, CCTV) for security, productivity, or compliance purposes.' },
            { term: 'Legitimate Uses (Section 7)', definition: 'DPDPA lawful basis for processing without consent, including voluntary provision and employment context; often more appropriate than consent for employer-employee processing.' },
            { term: 'Covert Monitoring', definition: 'Monitoring conducted without employee knowledge; permissible only in narrow circumstances with senior authorisation and legal review.' },
          ],
          references: [
            { title: 'DPDPA 2023 — Section 7, Section 8(3), Section 10(2)', source: 'Government of India, MeitY', year: '2023' },
            { title: 'Information Technology Act 2000 — Section 43A; SPDI Rules 2011', source: 'Government of India', year: '2011' },
            { title: 'Code on Social Security 2020', source: 'Government of India', year: '2020' },
            { title: 'IAPP Employee Privacy Notice Template', source: 'International Association of Privacy Professionals', year: '2023' },
          ],
        },

        // -------- LESSON 5 --------
        {
          id: 5,
          title: 'Retention Policy and Schedule',
          duration: '15 min',
          type: 'reading',
          description:
            'How to draft a Data Retention Policy and Schedule that meets DPDPA Section 8(8) data-erasure requirements: legal basis for retention periods, schedule template, deletion verification, and exceptions for legal hold.',
          content:
            'The DPDPA is clear: personal data must not be retained beyond the period necessary for the purpose for which it was collected (Section 8(8)). Yet most Indian organisations retain personal data indefinitely — "just in case" — exposing themselves to breach risk, regulatory penalty, and storage cost. The Data Retention Policy and Schedule is the document that defines, for each data category, how long it is retained, the legal or business basis, and how it is deleted at end of life. This lesson covers the legal foundations for retention periods, the structure of a Retention Schedule, deletion verification, and the legal hold exception. A robust Retention Policy is itself evidence of "reasonable security safeguards" under Section 8(5).',
          learningObjectives: [
            'Establish retention periods for each personal data category based on legal or business basis',
            'Draft a Retention Schedule template covering all data categories',
            'Implement deletion procedures with verification and certification',
            'Apply the legal hold exception correctly',
            'Integrate Retention Policy with backup, archive, and disaster recovery',
          ],
          keyTakeaways: [
            'Section 8(8) requires erasure of personal data once the purpose is fulfilled — indefinite retention is non-compliant',
            'Retention periods must be justified by specific legal, regulatory, or business basis — not "indefinitely"',
            'Indian law mandates retention for certain records (e.g., Companies Act 2013: 8 years for accounting; Income Tax Act: 7 years)',
            'Deletion must be verifiable — silent deletion without certification is insufficient',
            'Legal hold suspends retention for litigation or investigation; documented procedure required',
          ],
          sections: [
            {
              id: 'sec-1',
              title: 'Legal Foundations for Retention Periods',
              content: [
                {
                  type: 'paragraph',
                  content:
                    'Retention periods are not arbitrary — they must be justified by a specific legal, regulatory, or business basis. Indian law mandates retention for many categories: the Companies Act 2013 (8 years for accounting records), Income Tax Act 1961 (7 years), RBI Act for banks (8 years), SEBI regulations (varies), and the Code on Social Security 2020 (variable). Where no law mandates retention, the Data Fiduciary must establish a business basis tied to the processing purpose.',
                },
                {
                  type: 'heading',
                  content: 'Common Indian Retention Mandates',
                },
                {
                  type: 'table',
                  headers: ['Data Category', 'Mandating Law', 'Retention Period'],
                  rows: [
                    ['Accounting records', 'Companies Act 2013, Section 128', '8 years from financial year end'],
                    ['Tax records (TDS, returns)', 'Income Tax Act 1961', '7 years from end of relevant assessment year'],
                    ['Bank transaction records', 'RBI Act, Banking Regulation Act', '8 years minimum'],
                    ['KYC records (banks, NBFCs)', 'RBI Master Directions on KYC', '5 years after account closure'],
                    ['Employee PF/ESI records', 'EPF Act, ESI Act; Code on Social Security', 'Variable (PF: 7 years post-employment; ESI: 5 years)'],
                    ['Medical records (hospitals)', 'Clinical Establishments Act (state); MCI ethics', '3-7 years (varies by state)'],
                    ['Insurance records', 'IRDAI regulations', '3 years after policy expiry (varies)'],
                    ['Securities trading records', 'SEBI regulations', '5-10 years (varies)'],
                  ],
                },
                {
                  type: 'callout',
                  content:
                    'Where multiple laws mandate retention for the same data, the longest period applies. Where no law mandates retention, the Data Fiduciary must establish a business basis (e.g., "2 years for fraud detection" or "5 years for warranty claims") and document the reasoning. "Indefinitely" or "as long as we want" is non-compliant under Section 8(8).',
                  calloutType: 'important',
                },
              ],
            },
            {
              id: 'sec-2',
              title: 'Retention Schedule Template',
              content: [
                {
                  type: 'paragraph',
                  content:
                    'The Retention Schedule is the operational document that lists, for each data category, the retention period, basis, deletion method, and owner. It is the single source of truth for retention decisions across the organisation. The Schedule should be reviewed annually and updated as laws and processing purposes change.',
                },
                {
                  type: 'heading',
                  content: 'Sample Retention Schedule',
                },
                {
                  type: 'table',
                  headers: ['Data Category', 'Purpose', 'Retention Period', 'Basis', 'Deletion Method', 'Owner'],
                  rows: [
                    ['Customer account data (active)', 'Service provision', 'Active account + 3 years', 'Business (customer support)', 'Automated purge', 'CISO'],
                    ['Customer transaction records', 'Legal/financial', '8 years', 'Companies Act / Income Tax Act', 'Secure deletion (NIST 800-88)', 'CFO'],
                    ['Customer KYC records', 'Regulatory', '5 years post account closure', 'RBI KYC Master Directions', 'Secure deletion', 'Compliance'],
                    ['Marketing data (consent-based)', 'Marketing', 'Until consent withdrawn + 30 days', 'Business (marketing)', 'Automated purge', 'CMO'],
                    ['Job applicant data (unsuccessful)', 'Recruitment', '6 months from decision', 'Business (recruitment); DPDPA minimisation', 'Automated purge', 'HR Head'],
                    ['Employee records', 'Employment', 'Active + 7 years', 'Code on Social Security; Income Tax', 'Secure deletion', 'HR Head'],
                    ['Website analytics data', 'Analytics', '26 months', 'Business (analytics); aligned to GA default', 'Automated purge', 'CISO'],
                    ['CCTV footage', 'Security', '30 days', 'Business (security)', 'Automated overwrite', 'Facilities Head'],
                    ['Server logs (security)', 'Security', '90 days (SIEM: 1 year)', 'Business (security); CERT-In 180 days', 'Automated purge', 'CISO'],
                    ['Consent records', 'Compliance', 'Active + 7 years', 'DPDPA audit trail', 'Secure deletion', 'DPO'],
                  ],
                },
                {
                  type: 'callout',
                  content:
                    'Consent records (the audit trail of consent given and withdrawn) must be retained as long as the underlying personal data is processed — and longer (7 years) to defend against future disputes. A common error is deleting consent records when the personal data is deleted, leaving the Data Fiduciary unable to prove consent was obtained.',
                  calloutType: 'tip',
                },
              ],
            },
            {
              id: 'sec-3',
              title: 'Deletion, Verification, and Legal Hold',
              content: [
                {
                  type: 'paragraph',
                  content:
                    'Deletion is the operational act of removing personal data at end of retention. It must be verifiable — silent deletion without certification is insufficient evidence of compliance. The standard is NIST SP 800-88 Rev. 1, which defines three sanitisation methods: Clear (logical overwrite), Purge (cryptographic erase or degauss), and Destroy (physical shredding or incineration). The method depends on the medium and sensitivity.',
                },
                {
                  type: 'heading',
                  content: 'Deletion Methods per NIST SP 800-88',
                },
                {
                  type: 'list',
                  content: 'Sanitisation methods by medium',
                  items: [
                    'Hard drives (HDD): Clear (single-pass overwrite) for low-sensitivity; Purge (cryptographic erase or multi-pass) for high-sensitivity',
                    'Solid state drives (SSD): Purge (cryptographic erase — ATA Secure Erase or vendor utility); Clear insufficient due to wear levelling',
                    'Cloud storage: API-driven delete + verification; for cryptographic erase, rotate or destroy the encryption keys',
                    'Backup tapes: Purge (degauss) or Destroy (shred); never re-use media that held high-sensitivity data',
                    'Paper records: Destroy (cross-cut shred to ≤4mm particles); certified destruction vendor',
                    'Mobile devices: Purge (factory reset + cryptographic erase); verify before disposal',
                  ],
                },
                {
                  type: 'callout',
                  content:
                    'Backups are the most overlooked deletion target. Production data may be deleted but copies in backups, archives, and disaster recovery sites may persist for months. Retention Policy must address all copies: backup deletion on next rotation, archive deletion per archive policy, DR site deletion on DR test cycle.',
                  calloutType: 'warning',
                },
                {
                  type: 'heading',
                  content: 'Legal Hold Exception',
                },
                {
                  type: 'paragraph',
                  content:
                    'Legal hold suspends the Retention Schedule for specific data when litigation, investigation, or regulatory inquiry is anticipated or pending. The hold is initiated by Legal Counsel, communicated to data owners, and tracked centrally. Data under legal hold is excluded from automated deletion until the hold is released. Failure to implement legal hold can result in spoliation of evidence sanctions in court.',
                },
                {
                  type: 'list',
                  content: 'Legal hold process',
                  items: [
                    'Trigger: notice of litigation, regulatory inquiry, internal investigation, or anticipated claim',
                    'Issuance: Legal Counsel issues hold notice to data owners; specifies data in scope and suspension of deletion',
                    'Tracking: central legal hold register; each hold has a unique ID, scope, and release criteria',
                    'Implementation: IT suspends automated deletion for in-scope data; preserves from backup rotation',
                    'Periodic review: Legal Counsel reviews active holds quarterly; releases when no longer needed',
                    'Release: on release, normal retention schedule resumes; data may be deleted per original schedule',
                  ],
                },
                {
                  type: 'callout',
                  content:
                    'A documented Retention Policy with deletion verification and legal hold procedure is strong evidence of "reasonable security safeguards" under DPDPA Section 8(5). Conversely, an organisation that retains personal data indefinitely with no documented basis faces not only Section 8(8) penalty but also heightened breach risk — more retained data means more data at risk in any breach.',
                  calloutType: 'tip',
                },
              ],
            },
          ],
          glossary: [
            { term: 'Retention Policy', definition: 'The document defining how long each category of personal data is retained and how it is deleted at end of life.' },
            { term: 'Retention Schedule', definition: 'The operational table listing, for each data category, the retention period, basis, deletion method, and owner.' },
            { term: 'Sanitisation', definition: 'The process of securely removing personal data from storage media per NIST SP 800-88: Clear, Purge, or Destroy.' },
            { term: 'Legal Hold', definition: 'The suspension of the Retention Schedule for specific data when litigation or investigation is anticipated or pending.' },
            { term: 'Cryptographic Erase', definition: 'A sanitisation method that destroys the encryption keys, rendering the encrypted data permanently unreadable.' },
          ],
          references: [
            { title: 'DPDPA 2023 — Section 8(8)', source: 'Government of India, MeitY', year: '2023' },
            { title: 'NIST SP 800-88 Rev. 1: Guidelines for Media Sanitization', source: 'National Institute of Standards and Technology', year: '2014' },
            { title: 'Companies Act 2013 — Section 128', source: 'Government of India', year: '2013' },
            { title: 'RBI Master Direction on KYC, 2016 (amended)', source: 'Reserve Bank of India', year: '2024' },
          ],
        },

        // -------- LESSON 6 --------
        {
          id: 6,
          title: 'Data Breach Response Plan',
          duration: '16 min',
          type: 'interactive',
          description:
            'How to draft a Data Breach Response Plan compliant with Rule 7 of DPDP Rules 2025: structure, escalation matrix, notification timelines, role assignments, and integration with the broader IR plan from Module 15.',
          content:
            'Module 15 covered the operational side of incident response — what to do during a breach. This lesson covers the documentation side: the Data Breach Response Plan, a written document required under Rule 7 of the DPDP Rules 2025. The Plan codifies the IR team structure, escalation matrix, notification timelines, and decision points so that response is consistent and defensible. Without a written Plan, every breach is handled ad hoc — slow, inconsistent, and difficult to defend before the Board. With a Plan, response is rapid, coordinated, and well-documented. This lesson covers the Plan\'s structure, the mandatory content per Rule 7, the escalation matrix, and integration with the broader IR program from Module 15.',
          learningObjectives: [
            'Draft a Data Breach Response Plan compliant with Rule 7 of DPDP Rules 2025',
            'Define the escalation matrix and severity classification',
            'Document the notification timelines and decision points',
            'Integrate the Plan with the IR program, playbooks, and tabletop exercises',
            'Maintain the Plan as a living document with periodic review',
          ],
          keyTakeaways: [
            'Rule 7 of DPDP Rules 2025 requires a written Data Breach Response Plan for every Data Fiduciary',
            'The Plan must cover: severity classification, IRT structure, escalation matrix, notification timelines, and post-incident review',
            'A documented Plan is itself evidence of "reasonable security safeguards" under Section 8(5)',
            'The Plan is a living document — review at least annually and after every material breach',
            'Integrate with playbooks (Module 15 Lesson 12) and tabletop exercises (Module 15 Lesson 13)',
          ],
          sections: [
            {
              id: 'sec-1',
              title: 'Plan Structure and Mandatory Content',
              content: [
                {
                  type: 'paragraph',
                  content:
                    'Rule 7 of the DPDP Rules 2025 requires every Data Fiduciary to maintain a written Data Breach Response Plan. The Plan must contain specific elements, be approved by senior management, and be available for inspection by the Board. The Plan is the documented foundation that the IR program (Module 15) operationalises — without the Plan, the IR program is informal and difficult to defend.',
                },
                {
                  type: 'heading',
                  content: 'Mandatory Plan Content per Rule 7',
                },
                {
                  type: 'list',
                  content: 'Required sections of a Data Breach Response Plan',
                  items: [
                    'Purpose and scope: what the Plan covers and which systems/data are in scope',
                    'Severity classification: 4-level (Sev 1-4) definition with examples',
                    'Incident Response Team: roles, responsibilities, contact details, on-call rotation',
                    'Escalation matrix: who escalates to whom, under what conditions, in what timeline',
                    'Detection sources: SIEM, EDR, SOC, human reporting channels, vendor notifications',
                    'Containment procedures: short-term and long-term, evidence preservation',
                    'Notification timelines: Board (72 hours per Section 8(6)), individual, CERT-In (6 hours), sectoral',
                    'Notification templates: Board notification, individual notification (multi-lingual), public statement',
                    'Recovery procedures: backup validation, patching, phased restoration',
                    'Post-incident review: blameless PIR, root cause analysis, action plan tracking',
                    'Plan maintenance: review frequency, change control, version history',
                    'Appendices: contact list, vendor notification clauses, regulatory references',
                  ],
                },
                {
                  type: 'callout',
                  content:
                    'The Plan must be approved by senior management — typically the CEO, CISO, and DPO jointly. Board approval is recommended for Significant Data Fiduciaries under Section 10. The approval is recorded in the Plan\'s version history with the approver, date, and version number.',
                  calloutType: 'important',
                },
              ],
            },
            {
              id: 'sec-2',
              title: 'Severity Classification and Escalation Matrix',
              content: [
                {
                  type: 'paragraph',
                  content:
                    'Severity classification drives the response intensity, the people activated, and the notification path. A 4-level classification (Sev 1-4) is industry standard. The escalation matrix maps severity to the people who must be notified within what timeline. Without this, escalation is ad hoc — sometimes the CEO is woken for a Sev 4 incident, sometimes a Sev 1 goes unreported for hours.',
                },
                {
                  type: 'heading',
                  content: 'Sample Severity Classification',
                },
                {
                  type: 'table',
                  headers: ['Severity', 'Definition', 'Example', 'IRT Activation', 'Executive Notification'],
                  rows: [
                    ['Sev 1 — Critical', 'Large-scale breach of sensitive data; business disruption', 'Ransomware encrypting 50,000+ customer records', 'Full IRT + Executive Sponsor', 'CEO within 1 hour; Board within 24 hours'],
                    ['Sev 2 — High', 'Material breach; significant data or operations impact', 'Insider exfiltrating 5,000 customer records', 'Full IRT', 'CEO within 4 hours'],
                    ['Sev 3 — Medium', 'Limited breach; moderate data or operations impact', 'Misdirected email with 50 customer records', 'IRT Lead + Technical + Legal', 'CISO + DPO within 24 hours'],
                    ['Sev 4 — Low', 'Minor incident; minimal data or operations impact', 'Lost encrypted laptop with limited data', 'IRT Lead + Technical', 'CISO monthly summary'],
                  ],
                },
                {
                  type: 'callout',
                  content:
                    'All four severity levels may trigger Board notification under Section 8(6) if they meet the Section 3(5) breach definition. Severity drives internal escalation, not the regulatory notification decision — even a Sev 4 incident must be assessed for Section 8(6) notification.',
                  calloutType: 'note',
                },
                {
                  type: 'heading',
                  content: 'Escalation Matrix',
                },
                {
                  type: 'list',
                  content: 'Escalation paths by severity',
                  items: [
                    'Sev 1: SOC Tier 1 → Incident Lead (15 min) → CISO + DPO + Legal (30 min) → CEO + Executive Sponsor (1 hour) → Board (24 hours)',
                    'Sev 2: SOC Tier 1 → Incident Lead (30 min) → CISO + DPO + Legal (1 hour) → CEO (4 hours)',
                    'Sev 3: SOC Tier 1 → Incident Lead (1 hour) → CISO + DPO (24 hours)',
                    'Sev 4: SOC Tier 1 → Incident Lead (4 hours) → CISO (monthly summary)',
                  ],
                },
              ],
            },
            {
              id: 'sec-3',
              title: 'Plan Maintenance and Integration',
              content: [
                {
                  type: 'paragraph',
                  content:
                    'A Data Breach Response Plan is not a one-time document — it is a living document that must be reviewed, updated, and tested regularly. The Plan should be reviewed at least annually, after every material breach (lessons from the PIR incorporated), and whenever the organisation undergoes significant change (new product, new vendor, new regulatory requirement).',
                },
                {
                  type: 'heading',
                  content: 'Plan Maintenance Triggers',
                },
                {
                  type: 'list',
                  content: 'When to review and update the Plan',
                  items: [
                    'Annual review: scheduled review of all sections; re-approval by senior management',
                    'Post-incident: every Sev 1 or Sev 2 incident triggers a Plan review within 30 days',
                    'New regulation: when DPDPA Rules, sectoral rules, or new guidance issued',
                    'Organisational change: M&A, new product line, new critical vendor, new processing activity',
                    'Tabletop exercise: every TTX may surface Plan gaps; update within 30 days of TTX',
                    'Personnel change: when key IRT members (Incident Lead, DPO, CISO) change, update contact list',
                    'Tooling change: when SIEM, EDR, or notification portal changes, update procedures',
                  ],
                },
                {
                  type: 'callout',
                  content:
                    'Maintain a versioned Plan with version history visible. The Board may ask which version was in effect during a breach — the answer must be precise. A Plan without version control is difficult to defend.',
                  calloutType: 'tip',
                },
                {
                  type: 'paragraph',
                  content:
                    'The Plan integrates with the broader IR program from Module 15: it provides the documented framework that the IR Team (Lesson 11) operationalises, that the playbooks (Lesson 12) execute against, that the tabletop exercises (Lesson 13) test, and that the post-incident reviews (Lesson 14) update. A well-maintained Plan is the documented evidence that the DPDPA Board looks for in any enforcement action — it demonstrates that the Data Fiduciary took its Section 8(5) and 8(6) obligations seriously and prepared for the inevitable breach.',
                },
                {
                  type: 'callout',
                  content:
                    'A documented, approved, tested Data Breach Response Plan is itself evidence of "reasonable security safeguards" under Section 8(5). Conversely, an organisation without a Plan faces not only the breach penalty but also a Section 8(5) failure — up to ₹250 crore — for not having reasonable safeguards in place when the breach occurred.',
                  calloutType: 'important',
                },
              ],
            },
          ],
          glossary: [
            { term: 'Data Breach Response Plan', definition: 'The written document required under DPDP Rules 2025 Rule 7 codifying the IR team, escalation matrix, and notification timelines for personal data breaches.' },
            { term: 'Severity Classification', definition: 'The 4-level system (Sev 1-4) for categorising incident impact and driving response intensity.' },
            { term: 'Escalation Matrix', definition: 'The documented mapping of severity to the people who must be notified within what timeline.' },
            { term: 'Plan Maintenance', definition: 'The regular review and update of the Plan, triggered by annual cycle, post-incident learning, or organisational change.' },
          ],
          references: [
            { title: 'Digital Personal Data Protection Rules 2025 — Rule 7', source: 'Government of India, MeitY', year: '2025' },
            { title: 'DPDPA 2023 — Section 8(5), 8(6), Section 10', source: 'Government of India, MeitY', year: '2023' },
            { title: 'NIST SP 800-61 Rev. 2: Computer Security Incident Handling Guide', source: 'National Institute of Standards and Technology', year: '2012' },
            { title: 'ISO/IEC 27035: Information security incident management', source: 'International Organization for Standardization', year: '2023' },
          ],
        },
      ],
    },

    // ============================================================
    // CHAPTER 2: GOVERNANCE DOCUMENTS
    // ============================================================
    {
      id: 2,
      title: 'Governance Documents',
      lessons: [
        // -------- LESSON 7 --------
        {
          id: 7,
          title: 'DPO Appointment Letter',
          duration: '15 min',
          type: 'reading',
          description:
            'How to draft a DPO Appointment Letter compliant with DPDPA Section 10 and Rule 4 of DPDP Rules 2025: qualifications, independence, reporting line, authority, and protection from conflict of interest.',
          content:
            'Significant Data Fiduciaries under DPDPA Section 10(2)(a) must appoint a Data Protection Officer (DPO). The appointment is not informal — it must be documented in a written Appointment Letter that meets Rule 4 of the DPDP Rules 2025, specifying the DPO\'s qualifications, independence, reporting line, authority, and the protection from conflict of interest that the role requires. This lesson covers the DPO role under the DPDPA, the qualifications and disqualifications, the independence requirement (the DPO cannot be told how to discharge the role), and the worked Appointment Letter template. A well-drafted Appointment Letter is the foundation for the DPO\'s authority and the organisation\'s Section 10 compliance.',
          learningObjectives: [
            'Identify when a DPO appointment is required under Section 10',
            'Draft an Appointment Letter with qualifications, independence, and authority',
            'Apply the independence requirement (no instruction on how to discharge the role)',
            'Specify the reporting line (senior management / Board for SDFs)',
            'Address conflict of interest protection and disqualifications',
          ],
          keyTakeaways: [
            'Section 10(2)(a) requires Significant Data Fiduciaries to appoint a DPO; the appointment must be documented in writing',
            'Rule 4 of DPDP Rules 2025 specifies the DPO\'s qualifications, independence, and reporting requirements',
            'The DPO must be independent — cannot be instructed on how to discharge the role (but can be instructed on what is in scope)',
            'DPO must report to the highest level of management (CEO/Board for SDFs); not buried in IT or Legal',
            'Conflict of interest protection: DPO cannot hold other roles that compromise independence (e.g., CIO, Head of Marketing)',
          ],
          sections: [
            {
              id: 'sec-1',
              title: 'When Is a DPO Required',
              content: [
                {
                  type: 'paragraph',
                  content:
                    'DPDPA Section 10 designates "Significant Data Fiduciaries" (SDFs) — those whose processing is likely to pose a risk to Data Principals. SDFs are notified by the Central Government based on volume, sensitivity, risk, and other factors. Every SDF must, under Section 10(2), appoint a DPO, an independent Data Auditor, and conduct DPIAs and periodic audits. Non-SDF Data Fiduciaries are not required to appoint a DPO, but many do so voluntarily to demonstrate accountability.',
                },
                {
                  type: 'heading',
                  content: 'Factors Determining Significant Status (per Section 10(1))',
                },
                {
                  type: 'list',
                  content: 'Factors the Central Government considers in notifying SDFs',
                  items: [
                    'Volume and sensitivity of personal data processed',
                    'Risk to Data Principals\' rights (e.g., financial, health, biometric data)',
                    'Impact on India\'s sovereignty and integrity, state security, public order',
                    'Risk to electoral democracy or state machinery',
                    'Number of Data Principals affected (typically millions)',
                    'Cross-border processing implications',
                  ],
                },
                {
                  type: 'callout',
                  content:
                    'Expected SDFs (based on global parallels and Indian market structure): large banks, payment system operators, telecom companies, healthtech platforms, large e-commerce marketplaces, social media with significant Indian user base, and government agencies processing large-scale personal data. These entities should plan for DPO appointment now.',
                  calloutType: 'important',
                },
              ],
            },
            {
              id: 'sec-2',
              title: 'DPO Qualifications and Independence',
              content: [
                {
                  type: 'paragraph',
                  content:
                    'Rule 4 of the DPDP Rules 2025 specifies DPO qualifications: the DPO must be an individual (not an entity), resident in India, with appropriate expertise and experience in data protection. The DPO must be independent — neither instructed on how to discharge the role nor penalised for discharging it in good faith. The DPO reports to the highest level of management and is accessible to the Board.',
                },
                {
                  type: 'heading',
                  content: 'DPO Qualifications per Rule 4',
                },
                {
                  type: 'list',
                  content: 'Qualification requirements',
                  items: [
                    'Individual (not a firm or entity)',
                    'Resident in India (Indian citizen or valid residency)',
                    'Demonstrable expertise in data protection law and practice',
                    'Relevant experience (typically 7+ years in privacy, security, legal, or compliance)',
                    'No conflict of interest with other roles held',
                    'Recommended certifications: IAPP CIPM, CIPP/E, CIPP/US, ISO 27001 Lead Auditor',
                    'Familiarity with Indian regulatory environment (DPDPA, IT Act, sectoral rules)',
                  ],
                },
                {
                  type: 'callout',
                  content:
                    'Independence is the cornerstone of the DPO role. The DPO cannot be instructed on how to discharge the role — for example, the CEO cannot direct the DPO to "approve" a processing activity the DPO considers non-compliant. The DPO can, however, be instructed on what is in scope (e.g., which processing activities are within the DPO\'s purview). The distinction is subtle but critical.',
                  calloutType: 'important',
                },
                {
                  type: 'heading',
                  content: 'Conflict of Interest and Disqualifications',
                },
                {
                  type: 'paragraph',
                  content:
                    'The DPO cannot hold any other role that creates a conflict of interest with the DPO function. Specifically, the DPO should not be the Head of IT, CIO, Head of Marketing, Head of Product, or any role that determines the purposes and means of processing. The DPO CAN be the Head of Legal, Head of Compliance, or Head of Risk — provided these roles do not direct processing decisions. The Appointment Letter should explicitly identify any other roles the DPO holds and confirm no conflict.',
                },
              ],
            },
            {
              id: 'sec-3',
              title: 'DPO Appointment Letter Template',
              content: [
                {
                  type: 'paragraph',
                  content:
                    'The following is a worked template for a DPO Appointment Letter compliant with Section 10 and Rule 4. Adapt to the specific organisation and individual. The Letter should be signed by the highest level of management (CEO or Board Chair for SDFs) and counter-signed by the DPO as acceptance.',
                },
                {
                  type: 'heading',
                  content: 'DPO Appointment Letter Template',
                },
                {
                  type: 'example',
                  content:
                    'To: [DPO Name]\n[Address]\n\nDate: [DD/MM/YYYY]\n\nSubject: Appointment as Data Protection Officer under DPDPA Section 10(2)(a) and Rule 4 of DPDP Rules 2025\n\nDear [DPO Name],\n\nWe are pleased to appoint you as Data Protection Officer (DPO) of [Data Fiduciary Name] ("the Company"), effective [DD/MM/YYYY], pursuant to Section 10(2)(a) of the Digital Personal Data Protection Act 2023 and Rule 4 of the Digital Personal Data Protection Rules 2025.\n\n1. Role and Responsibilities\nYou shall discharge the following responsibilities:\na. Oversee the Company\'s compliance with the DPDPA and applicable data protection laws;\nb. Provide advice and recommendations on personal data processing activities;\nc. Conduct periodic audits and Data Protection Impact Assessments (DPIAs);\nd. Oversee the Grievance Officer function under Section 10(2)(b);\ne. Coordinate with the Data Protection Board on behalf of the Company;\nf. Maintain the Records of Processing Activities (ROPA);\ng. Lead the Incident Response Team for personal data breaches under Section 8(6);\nh. Report annually to the Board of Directors on data protection compliance.\n\n2. Qualifications\nYou have demonstrated expertise in data protection law and practice, with [X] years of relevant experience and certifications including [list: IAPP CIPM, etc.]. You are a resident of India.\n\n3. Independence\nYou shall discharge the role of DPO independently and shall not be instructed on how to discharge the responsibilities listed above. You shall have the authority to communicate directly with the Data Protection Board, the Board of Directors, and senior management on any matter within your purview.\n\n4. Reporting Line\nYou shall report directly to [CEO / Board of Directors] and shall have direct access to the Board\'s Audit Committee or equivalent governance body.\n\n5. Conflict of Interest\nYou confirm that you do not hold any other role or position that creates a conflict of interest with the DPO function, including but not limited to Head of IT, CIO, Head of Marketing, or Head of Product. Any future role changes that may create a conflict shall be disclosed to the Board.\n\n6. Resources and Authority\nThe Company shall provide you with adequate resources, including budget, staff, training, and access to all personal data processing systems and records, necessary to discharge your responsibilities.\n\n7. Protection from Penalisation\nYou shall not be penalised, dismissed, or otherwise prejudiced for discharging your responsibilities as DPO in good faith, including for raising concerns about non-compliance.\n\n8. Term and Termination\nThis appointment is for a term of [3 years / indefinite], subject to review by the Board. Termination requires the approval of the Board\'s Audit Committee and a documented basis unrelated to the good-faith discharge of the DPO role.\n\n9. Acceptance\nPlease signify your acceptance by countersigning below.\n\nFor [Data Fiduciary Name]:\n\n_________________________\n[CEO / Board Chair Name]\n[Designation]\n\nAccepted:\n\n_________________________\n[DPO Name]\nData Protection Officer',
                },
                {
                  type: 'callout',
                  content:
                    'This template is illustrative. Engage legal counsel to adapt it to your organisation\'s structure and the latest DPDPA Rules. The Letter should be reviewed annually and updated if the DPO\'s role, reporting line, or responsibilities change materially.',
                  calloutType: 'note',
                },
              ],
            },
          ],
          glossary: [
            { term: 'Data Protection Officer (DPO)', definition: 'The individual required under DPDPA Section 10(2)(a) to oversee compliance, appointed by Significant Data Fiduciaries with documented qualifications and independence.' },
            { term: 'Significant Data Fiduciary (SDF)', definition: 'A Data Fiduciary notified by the Central Government as posing elevated risk to Data Principals, subject to enhanced obligations under Section 10.' },
            { term: 'Independence Requirement', definition: 'The DPO cannot be instructed on how to discharge the role, cannot be penalised for good-faith discharge, and must have direct access to senior management and the Board.' },
            { term: 'Conflict of Interest', definition: 'A situation where the DPO\'s other roles (e.g., Head of IT, Head of Marketing) compromise the independence required for the DPO function.' },
          ],
          references: [
            { title: 'DPDPA 2023 — Section 10', source: 'Government of India, MeitY', year: '2023' },
            { title: 'Digital Personal Data Protection Rules 2025 — Rule 4', source: 'Government of India, MeitY', year: '2025' },
            { title: 'GDPR Article 37, 38, 39 — Data Protection Officer', source: 'European Parliament and Council', year: '2016' },
            { title: 'IAPP DPO Appointment Guidance', source: 'International Association of Privacy Professionals', year: '2024' },
          ],
        },

        // -------- LESSON 8 --------
        {
          id: 8,
          title: 'Grievance Officer Designation',
          duration: '14 min',
          type: 'reading',
          description:
            'How to designate a Grievance Officer under DPDPA Section 10(2)(b): eligibility, the 30-day response requirement, the grievance redressal mechanism, and the public designation that must appear in the Privacy Policy.',
          content:
            'Every Data Fiduciary — not just SDFs — must designate a Grievance Officer under Section 10(2)(b) of the DPDPA. The Grievance Officer is the individual Data Principals contact to exercise their rights, file complaints, and seek redressal. The Grievance Officer must be designated publicly (name and contact in the Privacy Policy), must respond within 30 days, and must escalate unresolved matters to the Board. This lesson covers Grievance Officer eligibility, the designation process, the 30-day response requirement, the grievance redressal mechanism, and the integration with the DPO function. A well-functioning Grievance Officer function is the first line of defence against Board complaints — most disputes are resolved at the Grievance Officer level if handled competently.',
          learningObjectives: [
            'Identify the Grievance Officer requirement under Section 10(2)(b)',
            'Designate a Grievance Officer with appropriate eligibility and authority',
            'Implement the 30-day response timeline and escalation procedure',
            'Design the grievance redressal mechanism (intake, tracking, resolution)',
            'Integrate the Grievance Officer with the DPO and customer support functions',
          ],
          keyTakeaways: [
            'Every Data Fiduciary must designate a Grievance Officer under Section 10(2)(b) — not just SDFs',
            'Grievance Officer details (name, email, phone, postal) must appear in the Privacy Policy',
            'The Grievance Officer must respond to complaints within 30 days of receipt',
            'Unresolved grievances can be escalated by the Data Principal to the Data Protection Board',
            'The Grievance Officer function may be combined with the DPO for SDFs, or be separate for non-SDFs',
          ],
          sections: [
            {
              id: 'sec-1',
              title: 'Grievance Officer Requirement and Eligibility',
              content: [
                {
                  type: 'paragraph',
                  content:
                    'Section 10(2)(b) of the DPDPA requires every Data Fiduciary to "publish the name and contact details of the Grievance Officer" who shall handle Data Principal complaints. Unlike the DPO requirement (which is SDF-only), the Grievance Officer requirement applies to ALL Data Fiduciaries — even small businesses. The Grievance Officer is the front-line contact for Data Principal rights, complaints, and grievance redressal.',
                },
                {
                  type: 'heading',
                  content: 'Grievance Officer Eligibility',
                },
                {
                  type: 'list',
                  content: 'Qualifications and eligibility',
                  items: [
                    'Individual (not a team or department)',
                    'Resident in India (for Indian Data Principals)',
                    'Senior enough to make binding decisions on grievances (typically Head of Customer Service, Head of Legal, or DPO)',
                    'Available during business hours and contactable by email, phone, and post',
                    'Knowledgeable about the DPDPA and the Data Fiduciary\'s processing activities',
                    'For SDFs: may be combined with the DPO role, provided the DPO\'s independence is not compromised',
                    'For non-SDFs: typically a senior customer service or legal role',
                  ],
                },
                {
                  type: 'callout',
                  content:
                    'The Grievance Officer is a publicly designated role. The name and contact details must appear in the Privacy Policy, on the website, and in any communication where Data Principals exercise rights. A generic "support@company.in" without a named individual is non-compliant — Data Principals must know who they are contacting.',
                  calloutType: 'important',
                },
              ],
            },
            {
              id: 'sec-2',
              title: 'The 30-Day Response Requirement',
              content: [
                {
                  type: 'paragraph',
                  content:
                    'Section 10(2)(b) requires the Grievance Officer to "deal with" Data Principal complaints within 30 days of receipt. "Deal with" has been interpreted by the Board to require substantive response — acknowledgement within 48 hours, interim update within 14 days, and resolution within 30 days. Silence for 30 days followed by a perfunctory response is non-compliant.',
                },
                {
                  type: 'heading',
                  content: 'Response Timeline',
                },
                {
                  type: 'table',
                  headers: ['Day', 'Required Action'],
                  rows: [
                    ['Day 0', 'Grievance received; ticket created; auto-acknowledgement sent to Data Principal'],
                    ['Day 2', 'Personal acknowledgement from Grievance Officer with case reference and expected resolution date'],
                    ['Day 14', 'Interim update on progress; if more information needed from Data Principal, request it'],
                    ['Day 30', 'Final resolution communicated; if unresolved, escalate per mechanism and inform Data Principal of escalation rights'],
                  ],
                },
                {
                  type: 'callout',
                  content:
                    'Failure to respond within 30 days is itself a violation of Section 10(2)(b), exposing the Data Fiduciary to penalty. More importantly, an unresolved grievance gives the Data Principal grounds to escalate to the Data Protection Board — converting a customer service issue into a regulatory complaint. Most Board complaints begin as unresolved Grievance Officer cases.',
                  calloutType: 'warning',
                },
                {
                  type: 'example',
                  content:
                    'A Delhi-based fintech received 1,200 grievances in Q1 2025 — 38% access requests, 24% correction requests, 18% consent withdrawal, 12% deletion, 8% other. The Grievance Officer (also the DPO) responded to 96% within 30 days, with 4% requiring escalation. Of the 1,200, only 9 were escalated to the Board — a 0.75% escalation rate, reflecting effective first-line resolution. The investment in Grievance Officer capability paid for itself many times over in avoided Board complaints.',
                },
              ],
            },
            {
              id: 'sec-3',
              title: 'Grievance Redressal Mechanism',
              content: [
                {
                  type: 'paragraph',
                  content:
                    'The grievance redressal mechanism is the documented process by which grievances are received, tracked, resolved, and escalated. Without a documented mechanism, grievances are handled ad hoc — some are missed, some are slow, some are mishandled. The mechanism should be published (typically as part of the Privacy Policy or a separate Grievance Redressal Policy) so Data Principals know what to expect.',
                },
                {
                  type: 'heading',
                  content: 'Grievance Redressal Mechanism Elements',
                },
                {
                  type: 'list',
                  content: 'Required elements of a documented mechanism',
                  items: [
                    'Intake channels: email (grievance@company.in), web form, postal address, in-app option',
                    'Ticket creation: every grievance logged with unique ID, timestamp, category, and Data Principal identifier',
                    'Acknowledgement: auto-acknowledgement within 1 hour; personal acknowledgement within 48 hours',
                    'Investigation: assigned to appropriate team (privacy, IT, customer service) based on category',
                    'Resolution: substantive response within 30 days; if unresolved, document why and next steps',
                    'Escalation: if Data Principal unsatisfied, escalate internally (DPO) and inform of Board escalation rights',
                    'Tracking: dashboard for DPO/management visibility; weekly reports on volume, types, resolution time',
                    'Audit: monthly review of grievances for systemic patterns; lessons feed into privacy program',
                  ],
                },
                {
                  type: 'heading',
                  content: 'Integration with DPO and Customer Support',
                },
                {
                  type: 'paragraph',
                  content:
                    'For SDFs, the Grievance Officer function is typically combined with the DPO role (or reports to the DPO). For non-SDFs, the Grievance Officer may be a senior customer service or legal role. Either way, the function must integrate with: (a) customer support (so front-line agents can route privacy-related issues to the Grievance Officer), (b) the DPO (so systemic grievances inform the privacy program), and (c) Legal (so grievances with legal implications receive proper handling).',
                },
                {
                  type: 'callout',
                  content:
                    'A Grievance Officer function that resolves 95%+ of grievances at first line, responds within 30 days, and feeds systemic patterns back into the privacy program is the single most cost-effective DPDPA compliance investment. Every Board complaint avoided saves significant cost — both direct (penalty exposure) and indirect (reputational harm, management distraction).',
                  calloutType: 'tip',
                },
              ],
            },
          ],
          glossary: [
            { term: 'Grievance Officer', definition: 'The individual required under DPDPA Section 10(2)(b) to handle Data Principal complaints, designated publicly with name and contact details.' },
            { term: '30-Day Response', definition: 'The DPDPA requirement that the Grievance Officer substantively respond to complaints within 30 days of receipt.' },
            { term: 'Grievance Redressal Mechanism', definition: 'The documented process by which grievances are received, tracked, resolved, and escalated.' },
            { term: 'First-Line Resolution', definition: 'Resolution of a grievance at the Grievance Officer level, without escalation to the Data Protection Board.' },
          ],
          references: [
            { title: 'DPDPA 2023 — Section 10(2)(b)', source: 'Government of India, MeitY', year: '2023' },
            { title: 'Digital Personal Data Protection Rules 2025 — Rule 4, Rule 5', source: 'Government of India, MeitY', year: '2025' },
            { title: 'Information Technology Act 2000 — Section 79; Intermediary Guidelines 2021 (Grievance Officer parallels)', source: 'Government of India, MeitY', year: '2021' },
            { title: 'IAPP Privacy Grievance Handling Best Practices', source: 'International Association of Privacy Professionals', year: '2023' },
          ],
        },

        // -------- LESSON 9 --------
        {
          id: 9,
          title: 'Data Protection Impact Assessment (DPIA) Template',
          duration: '17 min',
          type: 'interactive',
          description:
            'How to conduct and document a Data Protection Impact Assessment (DPIA) under DPDPA Section 10(3) for Significant Data Fiduciaries: when required, the 9-step process, risk scoring, and the worked template.',
          content:
            'A Data Protection Impact Assessment (DPIA) is a structured process for identifying and mitigating privacy risks in new processing activities. Under DPDPA Section 10(3), Significant Data Fiduciaries must conduct DPIAs for new processing, new technologies, and large-scale processing. Even for non-SDFs, DPIAs are best practice — they are the single most effective tool for anticipating privacy risks before they become breaches, and they are strong evidence of "reasonable security safeguards" under Section 8(5). This lesson covers when a DPIA is required, the 9-step DPIA process aligned with ISO/IEC 29134, risk scoring methodology, and a worked template. By the end, you will be able to conduct and document a DPIA for any new processing activity.',
          learningObjectives: [
            'Identify when a DPIA is required under Section 10(3) and best practice',
            'Apply the 9-step DPIA process aligned with ISO/IEC 29134',
            'Score privacy risks using likelihood and impact matrix',
            'Document the DPIA with sufficient rigour for Board and audit review',
            'Integrate DPIA findings into the privacy program and IR plan',
          ],
          keyTakeaways: [
            'Section 10(3) requires SDFs to conduct DPIAs for new processing, new technologies, and large-scale processing',
            'The 9-step DPIA process: context, necessity, consultation, risks, measures, residual risk, sign-off, integrate, review',
            'Risk scoring uses 5x5 likelihood-impact matrix; high residual risk requires escalation to DPO and possibly Board',
            'A documented DPIA is strong evidence of Section 8(5) "reasonable security safeguards"',
            'DPIAs are not one-time — review when processing changes materially',
          ],
          sections: [
            {
              id: 'sec-1',
              title: 'When a DPIA Is Required',
              content: [
                {
                  type: 'paragraph',
                  content:
                    'Section 10(3) of the DPDPA requires Significant Data Fiduciaries to conduct DPIAs. The triggers are new processing activities, new technologies, and large-scale processing. Even for non-SDFs, DPIA is best practice for any high-risk processing. The cost of a DPIA is trivial compared to the cost of a breach that a DPIA would have prevented.',
                },
                {
                  type: 'heading',
                  content: 'DPIA Triggers (per Section 10(3) and best practice)',
                },
                {
                  type: 'list',
                  content: 'When to conduct a DPIA',
                  items: [
                    'New processing activity involving personal data (new product, new feature, new data source)',
                    'New technology deployment (AI/ML, biometrics, location tracking, IoT)',
                    'Large-scale processing (processing affecting large numbers of Data Principals)',
                    'Processing of sensitive personal data (health, financial, biometric, children\'s data)',
                    'Cross-border processing (especially to non-adequate jurisdictions)',
                    'Processing that may affect vulnerable individuals (children, elderly, persons with disabilities)',
                    'Processing that involves profiling or automated decision-making with significant effects',
                    'Mergers, acquisitions, or major organisational changes that affect processing',
                  ],
                },
                {
                  type: 'callout',
                  content:
                    'For non-SDFs, DPIA is voluntary but strongly recommended. The cost of a 2-day DPIA (DPO + business stakeholder + security) is roughly ₹50,000-100,000. The cost of a single breach that a DPIA would have prevented is at minimum ₹50 lakh (Section 8(5) penalty alone), often much more. The risk-adjusted ROI of DPIA is overwhelming.',
                  calloutType: 'important',
                },
              ],
            },
            {
              id: 'sec-2',
              title: 'The 9-Step DPIA Process',
              content: [
                {
                  type: 'paragraph',
                  content:
                    'The DPIA process aligned with ISO/IEC 29134 (the international standard for privacy impact assessment) consists of 9 steps. Each step produces documented output that becomes part of the DPIA report. The process typically takes 2-5 days for a moderate processing activity, longer for complex ones.',
                },
                {
                  type: 'heading',
                  content: 'The 9 Steps',
                },
                {
                  type: 'table',
                  headers: ['Step', 'Activity', 'Output'],
                  rows: [
                    ['1', 'Context: describe the processing activity, data flows, purposes', 'Processing description'],
                    ['2', 'Necessity: assess whether processing is necessary and proportionate', 'Necessity assessment'],
                    ['3', 'Consultation: consult stakeholders (business, security, legal, DPO, sometimes Data Principals)', 'Consultation record'],
                    ['4', 'Risk identification: identify privacy risks to Data Principals', 'Risk register'],
                    ['5', 'Risk mitigation: identify measures to reduce likelihood and impact', 'Mitigation plan'],
                    ['6', 'Residual risk: assess remaining risk after mitigation', 'Residual risk assessment'],
                    ['7', 'Sign-off: DPO approval; for high residual risk, escalate to senior management', 'DPIA sign-off'],
                    ['8', 'Integrate: feed findings into privacy program, IR plan, training', 'Integration record'],
                    ['9', 'Review: schedule review when processing changes materially', 'Review trigger'],
                  ],
                },
                {
                  type: 'callout',
                  content:
                    'Step 6 (residual risk) is the decision point. If residual risk is "low" or "medium," proceed with processing. If "high," escalate to senior management — they decide whether to proceed (accepting the risk) or not. If "very high" (e.g., severe harm to vulnerable Data Principals), the DPO should advise against proceeding; the SDF must consult the Board.',
                  calloutType: 'warning',
                },
              ],
            },
            {
              id: 'sec-3',
              title: 'Risk Scoring and Worked Template',
              content: [
                {
                  type: 'paragraph',
                  content:
                    'Risk scoring uses a 5x5 likelihood-impact matrix. Likelihood is the probability of the risk materialising (1=rare to 5=almost certain). Impact is the severity of harm if it does (1=negligible to 5=catastrophic). Risk score is likelihood x impact (1 to 25). Scores of 1-4 are low, 5-9 medium, 10-15 high, 16-25 very high. Mitigation measures reduce likelihood or impact; residual risk is the post-mitigation score.',
                },
                {
                  type: 'heading',
                  content: 'Sample DPIA Risk Register',
                },
                {
                  type: 'table',
                  headers: ['Risk', 'Likelihood', 'Impact', 'Score', 'Mitigation', 'Residual'],
                  rows: [
                    ['Unauthorised access to customer Aadhaar data', '3 (possible)', '5 (catastrophic)', '15', 'Encryption, MFA, access logging, SOC monitoring', '6 (medium)'],
                    ['Vendor (CRM) breach exposing customer contact data', '3 (possible)', '4 (major)', '12', 'DPA with audit rights, encryption in transit and at rest', '6 (medium)'],
                    ['Insider data exfiltration', '2 (unlikely)', '4 (major)', '8', 'DLP monitoring, access controls, exit interviews', '4 (low)'],
                    ['Algorithmic bias in credit scoring (automated decision)', '3 (possible)', '4 (major)', '12', 'Bias testing, human review of edge cases, Data Principal right to human review', '6 (medium)'],
                    ['Data retention exceeding purpose', '4 (likely)', '3 (moderate)', '12', 'Automated retention schedule, deletion verification', '3 (low)'],
                  ],
                },
                {
                  type: 'callout',
                  content:
                    'Residual risks of "medium" or higher require ongoing monitoring — they are not "solved" but managed. Add them to the privacy risk register, monitor via metrics (e.g., access attempts, DLP alerts), and review at quarterly privacy committee.',
                  calloutType: 'tip',
                },
                {
                  type: 'heading',
                  content: 'DPIA Template Outline',
                },
                {
                  type: 'list',
                  content: 'Document structure for a DPIA report',
                  items: [
                    '1. Executive summary: processing, key risks, decision',
                    '2. Processing description: purposes, data categories, Data Principals, recipients, retention',
                    '3. Data flow diagram: visual representation of data lifecycle',
                    '4. Necessity and proportionality assessment',
                    '5. Consultation record: who was consulted, key inputs',
                    '6. Risk register: identified risks with likelihood, impact, score',
                    '7. Mitigation plan: measures to address each risk',
                    '8. Residual risk assessment: post-mitigation risk scores',
                    '9. DPO sign-off: approval or escalation recommendation',
                    '10. Integration plan: how findings feed into privacy program, IR plan, training',
                    '11. Review schedule: when DPIA will be revisited',
                    'Appendices: data flow diagram, risk scoring matrix, consultation notes',
                  ],
                },
                {
                  type: 'example',
                  content:
                    'A healthtech SDF conducted a DPIA before launching a new AI-powered diagnostic feature processing patient symptoms and history. The DPIA identified 12 risks, including algorithmic bias (score 12, mitigated to 6), unauthorised access to health data (score 15, mitigated to 6), and patient re-identification from pseudonymised data (score 9, mitigated to 4). The DPO approved with conditions (quarterly bias audits, enhanced access controls, patient consent for AI processing). The DPIA report became part of the SDF\'s Section 10(3) compliance documentation and was reviewed annually.',
                },
              ],
            },
          ],
          glossary: [
            { term: 'Data Protection Impact Assessment (DPIA)', definition: 'A structured process for identifying and mitigating privacy risks in new processing activities, required under DPDPA Section 10(3) for SDFs.' },
            { term: 'Risk Score', definition: 'Likelihood (1-5) multiplied by Impact (1-5), giving a 1-25 risk score used to prioritise mitigation.' },
            { term: 'Residual Risk', definition: 'The remaining risk after mitigation measures have been applied; high residual risk requires escalation.' },
            { term: 'ISO/IEC 29134', definition: 'The international standard for privacy impact assessment methodology, providing the 9-step process framework.' },
          ],
          references: [
            { title: 'DPDPA 2023 — Section 10(3)', source: 'Government of India, MeitY', year: '2023' },
            { title: 'ISO/IEC 29134:2017 Guidelines for privacy impact assessment', source: 'International Organization for Standardization', year: '2017' },
            { title: 'Digital Personal Data Protection Rules 2025 — Rule 6 (DPIA)', source: 'Government of India, MeitY', year: '2025' },
            { title: 'CNIL PIA Methodology (adaptable)', source: 'Commission Nationale de l\'Informatique et des Libertés', year: '2023' },
          ],
        },

        // -------- LESSON 10 --------
        {
          id: 10,
          title: 'Records of Processing Activities (ROPA) Template',
          duration: '16 min',
          type: 'interactive',
          description:
            'How to maintain Records of Processing Activities (ROPA) under DPDPA Section 10(2)(c) for SDFs and as best practice for all: the 11 required fields, the central register, and the worked template.',
          content:
            'Records of Processing Activities (ROPA) is the master inventory of every personal data processing activity an organisation conducts. Under DPDPA Section 10(2)(c), Significant Data Fiduciaries must maintain ROPA — and even for non-SDFs, ROPA is the foundation of any privacy program. You cannot protect data you do not know you have. This lesson covers the 11 required ROPA fields per DPDP Rules 2025 and global best practice (drawn from GDPR Article 30), the central register structure, the maintenance process, and a worked template. ROPA is also the starting point for DPIAs (Lesson 9), retention scheduling (Lesson 5), and incident response (Module 15).',
          learningObjectives: [
            'Identify the 11 required ROPA fields under DPDP Rules 2025 and best practice',
            'Establish a central ROPA register accessible across the organisation',
            'Maintain ROPA through periodic review and change triggers',
            'Use ROPA as the foundation for DPIA, retention, and IR planning',
            'Audit ROPA for completeness and accuracy',
          ],
          keyTakeaways: [
            'Section 10(2)(c) requires SDFs to maintain ROPA; best practice for all Data Fiduciaries',
            'ROPA has 11 required fields per DPDP Rules 2025 and GDPR Article 30 parallels',
            'ROPA is a living document — update when processing changes, review at least annually',
            'ROPA is the starting point for DPIA, retention scheduling, IR planning, and audit',
            'Incomplete or outdated ROPA is itself a compliance failure under Section 10',
          ],
          sections: [
            {
              id: 'sec-1',
              title: 'The 11 Required ROPA Fields',
              content: [
                {
                  type: 'paragraph',
                  content:
                    'ROPA captures, for each processing activity, 11 fields that together provide a complete picture of what personal data is processed, why, by whom, and for how long. The fields draw from DPDP Rules 2025 and global best practice (GDPR Article 30). Together, they enable the Data Fiduciary to answer any question from the Board, a Data Principal, or an auditor about any processing activity.',
                },
                {
                  type: 'heading',
                  content: 'The 11 ROPA Fields',
                },
                {
                  type: 'table',
                  headers: ['#', 'Field', 'Example'],
                  rows: [
                    ['1', 'Activity name and description', 'Customer onboarding KYC verification'],
                    ['2', 'Purpose of processing', 'Regulatory compliance (RBI KYC); fraud prevention'],
                    ['3', 'Lawful basis', 'Legitimate use (Section 7 — regulatory compliance)'],
                    ['4', 'Categories of Data Principals', 'Customers (individuals); beneficial owners'],
                    ['5', 'Categories of personal data', 'Name, DOB, PAN, Aadhaar (last 4), address, photograph'],
                    ['6', 'Recipients (internal and external)', 'Compliance team; CRM vendor; RBI on request'],
                    ['7', 'Cross-border transfers', 'None (all processing in India)'],
                    ['8', 'Retention period', '5 years post account closure (per RBI KYC Directions)'],
                    ['9', 'Security safeguards', 'AES-256 encryption, MFA, access logging, SOC monitoring'],
                    ['10', 'DPIA reference', 'DPIA-2025-003 (conducted Jan 2025)'],
                    ['11', 'Owner and contact', 'Head of Compliance; compliance@company.in'],
                  ],
                },
                {
                  type: 'callout',
                  content:
                    'Field 3 (lawful basis) is critical under the DPDPA. Each activity must have a documented basis: consent (Section 6), legitimate use (Section 7), or specific legal obligation. Activities without a documented basis are non-compliant.',
                  calloutType: 'important',
                },
              ],
            },
            {
              id: 'sec-2',
              title: 'Central Register and Maintenance',
              content: [
                {
                  type: 'paragraph',
                  content:
                    'ROPA is a central register — one master document (or system) that lists every processing activity across the organisation. Fragmented ROPA (one in HR, one in Marketing, one in IT) is non-compliant and creates gaps. The central register is typically maintained in a GRC tool (OneTrust, Securiti, Privacera, Cookiebot) or a structured spreadsheet for smaller organisations. The DPO owns the register.',
                },
                {
                  type: 'heading',
                  content: 'ROPA Maintenance Triggers',
                },
                {
                  type: 'list',
                  content: 'When to update ROPA',
                  items: [
                    'New processing activity: before launch (pre-launch DPIA may also be required)',
                    'Change to existing activity: new purpose, new data category, new vendor, new geography',
                    'Annual review: scheduled review of all entries for accuracy and completeness',
                    'Post-incident: review affected activities; update safeguards field with new measures',
                    'Regulatory change: when new DPDPA Rules or sectoral rules issued',
                    'Organisational change: M&A, restructuring, new product lines',
                    'Vendor change: new critical vendor, vendor termination, vendor scope change',
                  ],
                },
                {
                  type: 'callout',
                  content:
                    'ROPA maintenance is a continuous process, not an annual project. Assign a ROPA owner (typically the DPO or Privacy Manager) who is accountable for currency. Implement a quarterly review cycle with each processing-activity owner confirming their entries are accurate.',
                  calloutType: 'tip',
                },
              ],
            },
            {
              id: 'sec-3',
              title: 'Worked ROPA Template and Audit',
              content: [
                {
                  type: 'paragraph',
                  content:
                    'The following is a worked ROPA entry for a fictional Indian fintech. The full ROPA would have one entry per processing activity (typically 20-100 entries for a mid-size organisation).',
                },
                {
                  type: 'heading',
                  content: 'Sample ROPA Entry',
                },
                {
                  type: 'example',
                  content:
                    'Activity ID: ROPA-2025-CUST-003\nActivity name: Customer KYC verification at onboarding\nDescription: Collection and verification of customer identity documents (PAN, Aadhaar, photograph) at account opening to meet RBI KYC requirements.\nPurpose: Regulatory compliance (RBI Master Direction on KYC); fraud prevention.\nLawful basis: Legitimate use (DPDPA Section 7 — voluntary provision by Data Principal for service; regulatory compliance).\nCategories of Data Principals: Individual customers; beneficial owners of corporate customers.\nCategories of personal data: Name, DOB, PAN, Aadhaar ( VID-based verification; Aadhaar number not stored), address, photograph, signature.\nRecipients: Internal — Compliance team, Customer Service; External — CRM vendor (cloud-hosted), KYC verification bureau (e.g., Karza, Signzy), RBI on regulatory request.\nCross-border transfers: None. All processing and storage in India (AWS Mumbai region).\nRetention period: 5 years post account closure (per RBI KYC Master Direction, January 2024 amendment).\nSecurity safeguards: AES-256 encryption at rest and in transit; MFA for all access; access logging to SIEM (90-day retention); SOC monitoring 24x7; quarterly access review.\nDPIA reference: DPIA-2025-003 (conducted 15 January 2025; signed off by DPO).\nOwner: Head of Compliance; compliance@companyfintech.in; +91 [XX].\nLast reviewed: 15 January 2025; next review: 15 January 2026.',
                },
                {
                  type: 'heading',
                  content: 'ROPA Audit',
                },
                {
                  type: 'paragraph',
                  content:
                    'ROPA audit verifies that the documented processing activities match reality. The audit samples a percentage of entries and verifies: (a) the activity exists, (b) the documented data categories match actual data flows, (c) the recipients match actual data sharing, (d) the retention period matches actual deletion practice, and (e) the safeguards match actual configurations. Audit findings feed back into ROPA corrections and into the broader privacy program.',
                },
                {
                  type: 'list',
                  content: 'ROPA audit approach',
                  items: [
                    'Sample 10-20% of entries (all high-risk activities; random sample of others)',
                    'For each sampled entry: review data flow, vendor contracts, access logs, retention evidence',
                    'Interview the activity owner: confirm accuracy, identify gaps',
                    'Document discrepancies: update ROPA, identify root causes',
                    'Report findings to DPO and (for SDFs) to senior management',
                    'Annual audit at minimum; more frequent for high-risk activities',
                  ],
                },
                {
                  type: 'callout',
                  content:
                    'An accurate, complete ROPA is the single most powerful evidence of a mature privacy program. When the Board requests documentation, ROPA demonstrates that the Data Fiduciary knows what data it processes, why, and how it is protected. Conversely, an absent or incomplete ROPA is treated as a Section 10(2)(c) failure for SDFs — and as a sign of broader compliance immaturity.',
                  calloutType: 'important',
                },
              ],
            },
          ],
          glossary: [
            { term: 'Records of Processing Activities (ROPA)', definition: 'The master inventory of every personal data processing activity, required under DPDPA Section 10(2)(c) for SDFs.' },
            { term: 'Central Register', definition: 'The single, unified ROPA document or system maintained by the DPO covering all processing activities.' },
            { term: 'ROPA Owner', definition: 'The individual accountable for the currency and accuracy of the ROPA, typically the DPO or Privacy Manager.' },
            { term: 'ROPA Audit', definition: 'The periodic verification that documented processing activities match actual practice.' },
          ],
          references: [
            { title: 'DPDPA 2023 — Section 10(2)(c)', source: 'Government of India, MeitY', year: '2023' },
            { title: 'Digital Personal Data Protection Rules 2025 — Rule 5 (ROPA)', source: 'Government of India, MeitY', year: '2025' },
            { title: 'GDPR Article 30 — Records of processing activities', source: 'European Parliament and Council', year: '2016' },
            { title: 'ISO/IEC 27701:2019 Privacy Information Management', source: 'International Organization for Standardization', year: '2019' },
          ],
        },
      ],
    },

    // ============================================================
    // CHAPTER 3: COMPLIANCE DOCUMENTATION
    // ============================================================
    {
      id: 3,
      title: 'Compliance Documentation',
      lessons: [
        // -------- LESSON 11 --------
        {
          id: 11,
          title: 'Consent Audit Logs',
          duration: '15 min',
          type: 'reading',
          description:
            'What to record in consent audit logs under DPDPA Section 6(5): the seven mandatory fields, retention period, technical implementation, and how logs support consent withdrawal and dispute resolution.',
          content:
            'Consent under the DPDPA is not a moment — it is a relationship with a documented history. Section 6(5) requires Data Fiduciaries to maintain records of consent given and withdrawn. These records, known as consent audit logs, are the evidence that consent was obtained validly and (where relevant) withdrawn. Without them, the Data Fiduciary cannot defend a consent-based processing activity against a Data Principal complaint or a Board inquiry. This lesson covers what to record in consent audit logs, the seven mandatory fields, retention period, technical implementation patterns (blockchain, append-only databases, signed logs), and how logs support consent withdrawal and dispute resolution.',
          learningObjectives: [
            'Identify the seven mandatory fields of a consent audit log under Section 6(5)',
            'Implement append-only or tamper-evident log storage',
            'Apply the retention period for consent logs (active + 7 years)',
            'Use consent logs to support withdrawal and dispute resolution',
            'Audit consent logs for completeness and integrity',
          ],
          keyTakeaways: [
            'Section 6(5) requires records of consent given and withdrawn; the seven fields are mandatory',
            'Consent logs must be append-only or tamper-evident — silent modification invalidates the evidence',
            'Retention: active + 7 years (or longer if dispute or litigation pending)',
            'Consent logs are the primary defence against Data Principal disputes about whether consent was given',
            'Logs must link consent to the specific notice version, purposes, and timestamp at the time of consent',
          ],
          sections: [
            {
              id: 'sec-1',
              title: 'The Seven Mandatory Fields',
              content: [
                {
                  type: 'paragraph',
                  content:
                    'Section 6(5) of the DPDPA requires Data Fiduciaries to maintain records of consent. The DPDP Rules 2025 and global best practice (drawn from GDPR Article 7(1)) specify seven mandatory fields. Together, these fields establish that consent was freely given, specific, informed, and unambiguous — the Section 4(1) requirements — and link the consent to a specific notice version and set of purposes.',
                },
                {
                  type: 'heading',
                  content: 'The Seven Consent Log Fields',
                },
                {
                  type: 'table',
                  headers: ['#', 'Field', 'Example'],
                  rows: [
                    ['1', 'Data Principal identifier', 'Customer ID 4738291; email a.example@gmail.com'],
                    ['2', 'Timestamp of consent', '15 March 2025, 14:32:11 IST'],
                    ['3', 'Consent notice version', 'Privacy Notice v3.2 (effective 1 Feb 2025)'],
                    ['4', 'Purposes consented to', 'Account opening; marketing communications; analytics'],
                    ['5', 'Personal data categories covered', 'Name, email, mobile, transaction history'],
                    ['6', 'Method of consent', 'Web checkbox (checked); written signature; verbal (recorded)'],
                    ['7', 'Channel/IP address', 'Mobile web; IP 103.21.x.x; User-Agent [string]'],
                  ],
                },
                {
                  type: 'callout',
                  content:
                    'Field 3 (consent notice version) is critical. The Data Principal consented to a specific version of the notice at a specific time. If the notice changes materially, the original consent may no longer cover the new processing — re-consent may be required. Without the version link, the Data Fiduciary cannot demonstrate that consent covered the current processing.',
                  calloutType: 'important',
                },
              ],
            },
            {
              id: 'sec-2',
              title: 'Implementation: Append-Only and Tamper-Evident Logs',
              content: [
                {
                  type: 'paragraph',
                  content:
                    'Consent logs must be append-only or tamper-evident. If logs can be silently modified, they have no evidentiary value — the Board and courts will treat them as unreliable. Three implementation patterns meet this requirement: append-only databases (PostgreSQL with audit triggers), blockchain-based logs (Hyperledger Fabric, Ethereum private network), and cryptographically signed logs (each entry hashed and chained).',
                },
                {
                  type: 'heading',
                  content: 'Implementation Patterns',
                },
                {
                  type: 'list',
                  content: 'Three patterns for tamper-evident consent logs',
                  items: [
                    'Append-only database: PostgreSQL with INSERT-only permissions; UPDATE and DELETE restricted; audit trigger on access. Low cost, mature, sufficient for most.',
                    'Blockchain log: each consent event written as a transaction to a private blockchain (Hyperledger Fabric recommended). Highest integrity, higher cost, suitable for high-stakes processing.',
                    'Signed chained logs: each entry hashed and the hash included in the next entry; tampering breaks the chain. Mid-cost, mid-complexity, suitable for mid-size organisations.',
                  ],
                },
                {
                  type: 'callout',
                  content:
                    'For most Indian Data Fiduciaries, the append-only database pattern is sufficient and cost-effective. Reserve blockchain for high-stakes processing (e.g., consent for sharing sensitive health data) where the additional integrity is justified.',
                  calloutType: 'tip',
                },
                {
                  type: 'heading',
                  content: 'Consent Withdrawal Logging',
                },
                {
                  type: 'paragraph',
                  content:
                    'Consent withdrawal is itself a logged event. The withdrawal record contains the same seven fields (Data Principal identifier, timestamp, notice version, purposes withdrawn, data categories, method, channel) plus a reference to the original consent record being withdrawn. This creates a complete consent history: given on date X, withdrawn on date Y, with both records tamper-evident.',
                },
                {
                  type: 'callout',
                  content:
                    'After consent withdrawal, the Data Fiduciary must stop processing for the withdrawn purposes — but the consent logs themselves are retained for the audit period (active + 7 years). Deleting the consent log when consent is withdrawn is a compliance failure: the Data Fiduciary needs the log to prove it stopped processing when consent was withdrawn.',
                  calloutType: 'warning',
                },
              ],
            },
            {
              id: 'sec-3',
              title: 'Audit, Retention, and Dispute Resolution',
              content: [
                {
                  type: 'paragraph',
                  content:
                    'Consent logs are audited for completeness (every consent event captured) and integrity (no tampering). The audit checks: (a) every Data Principal with active processing has a corresponding consent record; (b) every withdrawal has been actioned (processing stopped); (c) the logs are append-only (no UPDATE/DELETE); (d) the retention period is enforced (active + 7 years).',
                },
                {
                  type: 'heading',
                  content: 'Consent Log Audit Checklist',
                },
                {
                  type: 'list',
                  content: 'Audit items for consent logs',
                  items: [
                    'Coverage: every active Data Principal with consent-based processing has a consent record',
                    'Completeness: every consent record has all 7 mandatory fields populated',
                    'Integrity: append-only enforced; no UPDATE/DELETE since logging began',
                    'Withdrawal action: every withdrawal record has corresponding processing stop evidence',
                    'Retention: records older than active + 7 years are deleted per schedule',
                    'Version link: each consent record links to a specific notice version',
                    'Accessibility: logs retrievable within reasonable time for Data Principal or Board request',
                  ],
                },
                {
                  type: 'heading',
                  content: 'Dispute Resolution Use Case',
                },
                {
                  type: 'paragraph',
                  content:
                    'Consent logs are the primary defence in Data Principal disputes. When a Data Principal complains "I never consented to marketing emails," the Grievance Officer retrieves the consent log: timestamp, notice version, purposes consented (including marketing), method (web checkbox checked), and channel (mobile web, IP, user-agent). The log either confirms consent was given (resolving the dispute) or reveals it was not (requiring remediation).',
                },
                {
                  type: 'example',
                  content:
                    'A Bengaluru SaaS company received a Grievance Officer complaint from a customer alleging they never consented to marketing communications. The consent log showed: 15 March 2025, 14:32 IST, Privacy Notice v3.2, purposes consented: "Account opening; marketing communications; analytics," method: web checkbox (checked), channel: mobile web (IP 103.21.x.x). The customer acknowledged they had consented but had forgotten. Dispute resolved in 4 hours with the consent log as evidence. Without the log, the dispute would have escalated to the Board.',
                },
                {
                  type: 'callout',
                  content:
                    'Retention: consent logs must be retained for active + 7 years. The 7-year period starts from the end of the relationship or from consent withdrawal, whichever is later. This retention is necessary to defend against disputes that may arise years after processing ends.',
                  calloutType: 'important',
                },
              ],
            },
          ],
          glossary: [
            { term: 'Consent Audit Log', definition: 'The tamper-evident record of consent given and withdrawn, required under DPDPA Section 6(5).' },
            { term: 'Append-Only Storage', definition: 'A storage pattern where records can be added but not modified or deleted, ensuring log integrity.' },
            { term: 'Notice Version Link', definition: 'The reference in each consent log to the specific version of the consent notice at the time of consent.' },
            { term: 'Consent Withdrawal Record', definition: 'A logged event documenting the withdrawal of consent, linked to the original consent record.' },
          ],
          references: [
            { title: 'DPDPA 2023 — Section 6(5), Section 4(1)', source: 'Government of India, MeitY', year: '2023' },
            { title: 'Digital Personal Data Protection Rules 2025 — Rule 3 (Consent)', source: 'Government of India, MeitY', year: '2025' },
            { title: 'GDPR Article 7(1) — Conditions for consent', source: 'European Parliament and Council', year: '2016' },
            { title: 'EDPB Guidelines 05/2020 on consent under Regulation 2016/679', source: 'European Data Protection Board', year: '2020' },
          ],
        },

        // -------- LESSON 12 --------
        {
          id: 12,
          title: 'Vendor Risk Assessment Records',
          duration: '14 min',
          type: 'reading',
          description:
            'How to document vendor risk assessments: the 6-step process, risk scoring, the vendor risk register, and ongoing monitoring records that demonstrate DPDPA Section 8(7) accountability.',
          content:
            'Every vendor that handles personal data is a risk to the Data Fiduciary — and the DPDPA holds the Data Fiduciary accountable for vendor failures. Vendor risk assessment is the process of evaluating vendors before engagement and monitoring them throughout. The records of these assessments are evidence that the Data Fiduciary exercised due diligence under Section 8(7) and may mitigate penalty exposure if a vendor breach occurs. This lesson covers the 6-step vendor risk assessment process, risk scoring, the vendor risk register, and ongoing monitoring records.',
          learningObjectives: [
            'Conduct a 6-step vendor risk assessment before engagement',
            'Score vendor risk using likelihood-impact matrix',
            'Maintain a vendor risk register with all critical vendors',
            'Implement ongoing monitoring (audit reports, breach notifications, periodic review)',
            'Document assessments to demonstrate Section 8(7) due diligence',
          ],
          keyTakeaways: [
            'Vendor risk assessment is required before engaging any vendor that handles personal data',
            'The 6-step process: inventory, classification, questionnaire, evidence review, risk scoring, decision',
            'Vendor risk register lists all critical vendors with risk scores and review dates',
            'Ongoing monitoring includes annual review, audit reports (SOC 2, ISO 27001), and breach notification tracking',
            'Documented assessments mitigate penalty exposure if a vendor breach occurs',
          ],
          sections: [
            {
              id: 'sec-1',
              title: 'The 6-Step Vendor Risk Assessment Process',
              content: [
                {
                  type: 'paragraph',
                  content:
                    'Vendor risk assessment is a structured 6-step process conducted before engagement and refreshed periodically. The process produces a documented assessment that becomes part of the vendor record. The depth of assessment scales with the risk — a vendor processing millions of Aadhaar numbers requires deeper assessment than a vendor processing business contact data.',
                },
                {
                  type: 'heading',
                  content: 'The 6 Steps',
                },
                {
                  type: 'table',
                  headers: ['Step', 'Activity', 'Output'],
                  rows: [
                    ['1', 'Inventory: identify all vendors handling personal data', 'Vendor inventory'],
                    ['2', 'Classification: categorise by data sensitivity and volume', 'Risk tier (Tier 1-3)'],
                    ['3', 'Questionnaire: send DPDPA-aligned vendor questionnaire', 'Completed questionnaire'],
                    ['4', 'Evidence review: review SOC 2, ISO 27001, DPA, breach history', 'Evidence file'],
                    ['5', 'Risk scoring: assess likelihood and impact of vendor failure', 'Risk score and residual risk'],
                    ['6', 'Decision: approve, approve with conditions, or reject', 'Decision memo and engagement terms'],
                  ],
                },
                {
                  type: 'callout',
                  content:
                    'Risk tier drives assessment depth. Tier 1 (high-risk: sensitive data, large volume, critical operations) requires full assessment with audit report review and possibly on-site audit. Tier 3 (low-risk: non-sensitive, small volume, non-critical) requires lighter questionnaire-based assessment.',
                  calloutType: 'tip',
                },
              ],
            },
            {
              id: 'sec-2',
              title: 'Risk Scoring and the Vendor Risk Register',
              content: [
                {
                  type: 'paragraph',
                  content:
                    'Vendor risk scoring uses the same likelihood-impact matrix as DPIA (Lesson 9). Likelihood is the probability of vendor failure (data breach, non-compliance, service disruption). Impact is the severity of harm to Data Principals and the Data Fiduciary if the vendor fails. Risk score = likelihood x impact (1-25).',
                },
                {
                  type: 'heading',
                  content: 'Sample Vendor Risk Scoring',
                },
                {
                  type: 'table',
                  headers: ['Vendor', 'Data Handled', 'Likelihood', 'Impact', 'Score', 'Tier'],
                  rows: [
                    ['Cloud hosting (AWS Mumbai)', 'All customer data', '2 (unlikely)', '5 (catastrophic)', '10', '1 (high)'],
                    ['CRM (Salesforce India)', 'Customer contact + transaction', '2 (unlikely)', '4 (major)', '8', '1 (high)'],
                    ['Email delivery (SES)', 'Customer email addresses', '2 (unlikely)', '3 (moderate)', '6', '2 (medium)'],
                    ['Analytics (Mixpanel)', 'Pseudonymous event data', '2 (unlikely)', '2 (minor)', '4', '3 (low)'],
                    ['Office cleaning vendor', 'No personal data', '1 (rare)', '1 (negligible)', '1', '3 (low)'],
                  ],
                },
                {
                  type: 'callout',
                  content:
                    'Vendors that handle no personal data (e.g., office cleaning, furniture suppliers) need not be in the privacy vendor risk register. However, they should still be in the broader vendor management process for other risks (security, financial, operational).',
                  calloutType: 'note',
                },
                {
                  type: 'heading',
                  content: 'Vendor Risk Register',
                },
                {
                  type: 'paragraph',
                  content:
                    'The vendor risk register is the master inventory of all vendors handling personal data. It includes: vendor name, service description, data handled, risk tier, risk score, DPA reference, assessment date, next review date, and status (active, under review, terminated). The register is maintained by the DPO (or privacy manager) and reviewed quarterly.',
                },
              ],
            },
            {
              id: 'sec-3',
              title: 'Ongoing Monitoring Records',
              content: [
                {
                  type: 'paragraph',
                  content:
                    'Initial assessment is necessary but not sufficient. Vendors change — they are acquired, they suffer breaches, they change sub-processors. Ongoing monitoring captures these changes and updates the risk picture. The records of ongoing monitoring are evidence that the Data Fiduciary maintained oversight throughout the vendor relationship.',
                },
                {
                  type: 'heading',
                  content: 'Ongoing Monitoring Activities',
                },
                {
                  type: 'list',
                  content: 'Records to maintain throughout the vendor relationship',
                  items: [
                    'Annual assessment refresh: updated questionnaire, current audit reports, any changes to processing',
                    'Audit report tracking: SOC 2 Type II annually, ISO 27001 certificate renewal, with letter of attestation',
                    'Sub-processor list monitoring: vendor sub-processor list changes; Data Fiduciary objection rights exercised where appropriate',
                    'Breach notification tracking: every vendor breach notification received and handled per Module 15 playbook',
                    'Performance metrics: SLA adherence, incident response time, complaint resolution time',
                    'Contract renewal review: at each renewal, full reassessment before re-signing',
                    'Termination record: when terminated, return/deletion certification per DPA clause 10 (Lesson 3)',
                  ],
                },
                {
                  type: 'callout',
                  content:
                    'Documented vendor risk assessment and ongoing monitoring are the primary defence in a vendor breach incident. When a vendor breach occurs, the Board will examine: (a) did the Data Fiduciary assess the vendor before engagement? (b) did it monitor the vendor during the relationship? (c) did it act promptly on the breach? Documented assessments and monitoring demonstrate due diligence and may mitigate penalty exposure from ₹250 crore (no due diligence) to ₹50 lakh or less (strong due diligence).',
                  calloutType: 'important',
                },
                {
                  type: 'example',
                  content:
                    'A Mumbai bank suffered a vendor breach when its CRM vendor was compromised, exposing 200,000 customer records. The bank\'s documented vendor risk assessment (Tier 1 vendor, full assessment with SOC 2 review), DPA with 24-hour breach notification clause (vendor notified in 18 hours), and ongoing monitoring records (annual assessment, current audit reports) demonstrated due diligence. The Board reviewed the documentation and accepted the bank\'s Section 8(6) notification filed within 60 hours. No penalty imposed on the bank; the vendor faced separate enforcement.',
                },
              ],
            },
          ],
          glossary: [
            { term: 'Vendor Risk Assessment', definition: 'The structured 6-step process for evaluating vendor risk before engagement and throughout the relationship.' },
            { term: 'Vendor Risk Register', definition: 'The master inventory of all vendors handling personal data, with risk tier, score, and review dates.' },
            { term: 'Risk Tier', definition: 'The classification of vendors by risk level (Tier 1 high, Tier 2 medium, Tier 3 low), driving assessment depth.' },
            { term: 'Ongoing Monitoring', definition: 'The continuous oversight of vendors through annual refresh, audit report tracking, and breach notification handling.' },
            { term: 'Due Diligence Defence', definition: 'The use of documented vendor assessments and monitoring to mitigate penalty exposure when a vendor breach occurs.' },
          ],
          references: [
            { title: 'DPDPA 2023 — Section 8(7), Section 9', source: 'Government of India, MeitY', year: '2023' },
            { title: 'SOC 2 Type II Reports', source: 'AICPA', year: '2024' },
            { title: 'ISO/IEC 27001:2022 Information Security Management', source: 'International Organization for Standardization', year: '2022' },
            { title: 'ISO/IEC 27036-2:2022 Supplier relationships', source: 'International Organization for Standardization', year: '2022' },
            { title: 'RBI Outsourcing of IT Services Directions', source: 'Reserve Bank of India', year: '2023' },
          ],
        },

        // -------- LESSON 13 --------
        {
          id: 13,
          title: 'Training Records and Certifications',
          duration: '13 min',
          type: 'reading',
          description:
            'How to maintain training records and certifications under DPDPA Section 8(5): who must be trained, training content, completion tracking, certification renewals, and records that demonstrate a culture of compliance.',
          content:
            'Training is the human firewall against privacy breaches. Under DPDPA Section 8(5), "reasonable security safeguards" include organisational measures — and training is the primary organisational measure. Training records demonstrate that the Data Fiduciary has invested in building a culture of compliance, and they are critical evidence in any enforcement action. This lesson covers who must be trained (all employees, with role-specific modules), training content, completion tracking, certification renewals, and the records that demonstrate a culture of compliance.',
          learningObjectives: [
            'Identify who must be trained and at what depth (all employees, role-specific)',
            'Design training content covering DPDPA fundamentals and role-specific modules',
            'Track completion with verifiable records (LMS, certifications)',
            'Manage certification renewals and refreshers',
            'Maintain training records that demonstrate Section 8(5) compliance',
          ],
          keyTakeaways: [
            'All employees must receive DPDPA fundamentals training; high-risk roles receive additional role-specific training',
            'Training content: DPDPA basics, organisational policies, role-specific risks, incident reporting',
            'Completion tracking: LMS-based with completion certificates; 100% completion target for fundamentals',
            'Annual refreshers; certification renewals per certifying body (IAPP: 2-year CPE cycle)',
            'Training records are evidence of "reasonable security safeguards" under Section 8(5)',
          ],
          sections: [
            {
              id: 'sec-1',
              title: 'Who Must Be Trained and at What Depth',
              content: [
                {
                  type: 'paragraph',
                  content:
                    'Training depth scales with role risk. All employees receive DPDPA fundamentals — the basics of what personal data is, how the organisation processes it, what rights Data Principals have, and how to report incidents. High-risk roles receive additional, role-specific training: developers (secure coding), customer service (handling Data Principal requests), HR (employee data privacy), marketing (consent and marketing rules), and senior leadership (governance and accountability).',
                },
                {
                  type: 'heading',
                  content: 'Training Tiers',
                },
                {
                  type: 'table',
                  headers: ['Tier', 'Audience', 'Content', 'Duration'],
                  rows: [
                    ['1 — Fundamentals', 'All employees, contractors, interns', 'DPDPA basics, organisational policies, incident reporting', '2-3 hours'],
                    ['2 — Role-specific', 'High-risk roles (dev, customer service, HR, marketing)', 'Tier 1 + role-specific risks and procedures', '4-6 hours'],
                    ['3 — Specialists', 'Privacy team, IR team, legal', 'Tier 1 + 2 + advanced DPDPA, certifications (IAPP)', '20+ hours'],
                    ['4 — Leadership', 'Senior management, Board', 'Governance, accountability, oversight, Board reporting', '2 hours annually'],
                  ],
                },
                {
                  type: 'callout',
                  content:
                    'Tier 1 fundamentals must achieve 100% completion for all employees. New hires complete within 30 days of joining; contractors before access to personal data. Track completion in the LMS and report monthly to the DPO.',
                  calloutType: 'important',
                },
              ],
            },
            {
              id: 'sec-2',
              title: 'Training Content and Completion Tracking',
              content: [
                {
                  type: 'paragraph',
                  content:
                    'Training content must be tailored to the organisation — generic "data privacy 101" is insufficient. Content covers: (a) DPDPA fundamentals (what is personal data, what are Data Principal rights, what is consent), (b) organisational policies (privacy policy, incident response plan, vendor management), (c) role-specific risks (developers: SQL injection; customer service: handling access requests), and (d) incident reporting (how to report, who to contact, what to say).',
                },
                {
                  type: 'heading',
                  content: 'Training Content Modules',
                },
                {
                  type: 'list',
                  content: 'Standard training modules',
                  items: [
                    'Module 1: What is personal data and why it matters',
                    'Module 2: DPDPA fundamentals — rights, obligations, penalties',
                    'Module 3: Organisational privacy policy walkthrough',
                    'Module 4: Consent — when it is required, how it is obtained',
                    'Module 5: Incident reporting — how, when, who',
                    'Module 6: Data Principal rights — handling access, correction, erasure requests',
                    'Module 7: Role-specific risks (developer / HR / marketing / customer service)',
                    'Module 8: Vendor management — what to check before sharing data',
                    'Module 9: Cross-border transfers — when data leaves India',
                    'Module 10: Quiz and certification',
                  ],
                },
                {
                  type: 'heading',
                  content: 'Completion Tracking',
                },
                {
                  type: 'paragraph',
                  content:
                    'Completion tracking uses the Learning Management System (LMS) — Moodle, TalentLMS, Cornerstone, or enterprise LMS. Each module has a completion record: employee ID, module name, start time, completion time, quiz score, certificate ID. The DPO has dashboard visibility: overall completion rate, overdue employees, role-specific completion. Monthly reports to senior management drive accountability.',
                },
                {
                  type: 'callout',
                  content:
                    'Quiz at the end of each module (70% pass mark) reinforces learning and provides metrics. Employees who fail can re-take; persistent failure triggers individual coaching. Quiz results are part of the training record and demonstrate not just attendance but comprehension.',
                  calloutType: 'tip',
                },
              ],
            },
            {
              id: 'sec-3',
              title: 'Certifications, Renewals, and Records',
              content: [
                {
                  type: 'paragraph',
                  content:
                    'For privacy specialists (Tier 3), external certifications demonstrate expertise and commitment. The IAPP certifications (CIPM, CIPP/E, CIPP/US, CIPT) are the global standard, with 2-year Continuing Privacy Education (CPE) cycles. SANS GCIH and GCFA are the security equivalents. ISO 27001 Lead Auditor and ISO 27701 Lead Implementer are also valued. The organisation should fund certification for the privacy team and track renewals.',
                },
                {
                  type: 'heading',
                  content: 'Certification Tracking',
                },
                {
                  type: 'table',
                  headers: ['Certification', 'Audience', 'Validity', 'CPE Requirement'],
                  rows: [
                    ['IAPP CIPM', 'Privacy managers, DPOs', '2 years', '20 CPE credits per cycle'],
                    ['IAPP CIPP/E', 'Privacy professionals (European focus)', '2 years', '20 CPE credits per cycle'],
                    ['IAPP CIPP/US', 'Privacy professionals (US focus)', '2 years', '20 CPE credits per cycle'],
                    ['IAPP CIPT', 'Privacy engineers', '2 years', '20 CPE credits per cycle'],
                    ['SANS GCIH', 'Incident handlers', '4 years', '36 CPE credits per cycle'],
                    ['ISO 27001 Lead Auditor', 'Security auditors', '3 years', 'Per ISO scheme'],
                  ],
                },
                {
                  type: 'callout',
                  content:
                    'Maintain a certification register for all privacy and security staff: name, certification, issue date, expiry date, CPE credits earned, next CPE due. The DPO reviews quarterly; expiring certifications trigger renewal action. Lapsed certifications are a compliance gap — particularly for the DPO role, where current certification may be expected by the Board.',
                  calloutType: 'tip',
                },
                {
                  type: 'heading',
                  content: 'Records That Demonstrate a Culture of Compliance',
                },
                {
                  type: 'paragraph',
                  content:
                    'Training records are evidence of "reasonable security safeguards" under Section 8(5). In any enforcement action, the Board examines: (a) is there a training program? (b) is it current? (c) did the employees involved in the incident receive appropriate training? Strong training records convert "this employee made a mistake" into "this employee received training and made a mistake" — significantly reducing organisational liability.',
                },
                {
                  type: 'list',
                  content: 'Training records to maintain',
                  items: [
                    'LMS completion records: every employee, every module, completion date, quiz score',
                    'Certification register: every certified staff member, certification, issue, expiry, CPE',
                    'Annual refresher records: 100% target for fundamentals, role-specific refreshers',
                    'New hire training records: completed within 30 days of joining',
                    'Incident-specific training: post-incident, targeted re-training for involved staff',
                    'Training material versioning: each version archived for audit trail',
                    'Training attendance for tabletop exercises (Module 15 Lesson 13)',
                  ],
                },
                {
                  type: 'callout',
                  content:
                    'Retain training records for at least 7 years after employee departure — disputes and enforcement actions may arise years later, and the training record demonstrates the culture of compliance at the time of the incident.',
                  calloutType: 'important',
                },
              ],
            },
          ],
          glossary: [
            { term: 'Training Tier', definition: 'The classification of training depth (Tier 1-4) by role risk, from all-employee fundamentals to specialist certifications.' },
            { term: 'LMS (Learning Management System)', definition: 'The platform for delivering, tracking, and certifying employee training, with completion and quiz records.' },
            { term: 'IAPP Certification', definition: 'Global privacy professional certifications (CIPM, CIPP/E, CIPT) with 2-year CPE cycles.' },
            { term: 'CPE (Continuing Privacy Education)', definition: 'The ongoing education credits required to maintain IAPP certifications.' },
            { term: 'Training Record', definition: 'The documented evidence of training completion, content version, quiz score, and certification status.' },
          ],
          references: [
            { title: 'DPDPA 2023 — Section 8(5)', source: 'Government of India, MeitY', year: '2023' },
            { title: 'IAPP Certification Programs', source: 'International Association of Privacy Professionals', year: '2024' },
            { title: 'ISO/IEC 27001:2022 — Annex A.6.3 Awareness', source: 'International Organization for Standardization', year: '2022' },
            { title: 'NIST SP 800-50: Building an Information Technology Security Awareness Program', source: 'National Institute of Standards and Technology', year: '2003' },
            { title: 'SANS Security Awareness Programs', source: 'SANS Institute', year: '2024' },
          ],
        },

        // -------- LESSON 14 --------
        {
          id: 14,
          title: 'Board-Level Privacy Reporting',
          duration: '16 min',
          type: 'reading',
          description:
            'How to draft the annual privacy report to the Board of Directors under DPDPA Section 10: content, metrics, escalation triggers, and the worked template that demonstrates senior-level oversight.',
          content:
            'The Board of Directors bears ultimate accountability for DPDPA compliance. Section 10 of the DPDPA requires SDFs to have a DPO who reports to the Board; the Board must be informed of material privacy risks, breaches, and compliance status. The annual privacy report to the Board is the formal mechanism for this — a structured document that gives the Board visibility into the privacy program, key risks, incidents, and remediation. Without it, the Board cannot discharge its oversight duty, and the organisation cannot demonstrate the senior-level accountability the DPDPA expects. This lesson covers the report\'s content, the metrics that matter, escalation triggers, and a worked template.',
          learningObjectives: [
            'Draft an annual privacy report to the Board under DPDPA Section 10',
            'Select the metrics that give Board-level visibility without overwhelming detail',
            'Define escalation triggers for material risks and incidents',
            'Use the report to drive Board engagement and oversight',
            'Archive reports for evidence of senior-level accountability',
          ],
          keyTakeaways: [
            'Section 10 requires the DPO to report to the Board; annual report is the formal mechanism',
            'Content: program status, metrics, incidents, risks, regulatory updates, recommendations',
            'Metrics: privacy program maturity, training completion, grievances, incidents, audit findings',
            'Escalation triggers: Sev 1/2 incidents, regulatory inquiry, material DPIA residual risk, certification lapse',
            'Board engagement is critical — privacy is a Board-level risk, not an IT or Legal operational issue',
          ],
          sections: [
            {
              id: 'sec-1',
              title: 'Report Content and Structure',
              content: [
                {
                  type: 'paragraph',
                  content:
                    'The annual privacy report to the Board is typically 15-30 pages, structured for senior executives who are not privacy specialists. It opens with an executive summary, then covers program status, metrics, incidents, risks, regulatory updates, and recommendations. The tone is candid — successes and challenges — and the recommendations drive Board decisions (budget, authority, risk acceptance).',
                },
                {
                  type: 'heading',
                  content: 'Report Structure',
                },
                {
                  type: 'table',
                  headers: ['Section', 'Content', 'Length'],
                  rows: [
                    ['1. Executive Summary', 'One-page overview: program status, key risks, recommendations', '1 page'],
                    ['2. Program Status', 'Maturity assessment, key initiatives, staffing, budget', '3-4 pages'],
                    ['3. Metrics Dashboard', 'Quantitative metrics with trends vs targets', '3-4 pages'],
                    ['4. Incidents', 'Year\'s incidents: severity, response, lessons', '3-4 pages'],
                    ['5. Key Risks', 'Top 5-10 privacy risks with mitigation status', '2-3 pages'],
                    ['6. Regulatory Update', 'DPDPA Rules, sectoral rules, enforcement trends', '1-2 pages'],
                    ['7. Recommendations', 'Specific Board decisions: budget, authority, risk acceptance', '1-2 pages'],
                  ],
                },
                {
                  type: 'callout',
                  content:
                    'The report is candid — successes and challenges. Boards that receive glossy "all is well" reports cannot discharge oversight; Boards that receive candid reports can act on risks before they become enforcement actions. The DPO\'s independence (Lesson 7) is critical to candour.',
                  calloutType: 'important',
                },
              ],
            },
            {
              id: 'sec-2',
              title: 'Metrics Dashboard',
              content: [
                {
                  type: 'paragraph',
                  content:
                    'The metrics dashboard gives the Board quantitative visibility. Metrics are tracked over time (typically 12-month rolling) with targets, so the Board sees trends. The dashboard covers five areas: program maturity, training, grievances, incidents, and audit findings. Each metric has a target; deviations drive action items.',
                },
                {
                  type: 'heading',
                  content: 'Sample Privacy Metrics Dashboard',
                },
                {
                  type: 'table',
                  headers: ['Metric', 'Current', 'Trend', 'Target', 'Status'],
                  rows: [
                    ['Program maturity score (1-5)', '3.2', '↑ 0.4', '4.0 by year-end', 'On track'],
                    ['Tier 1 training completion', '98.5%', '↑ 2.1%', '100%', 'Slight gap'],
                    ['Tier 2 training completion', '94.2%', '↑ 5.3%', '95%', 'On track'],
                    ['Grievances received (annual)', '1,247', '↑ 12%', '—', 'Watch'],
                    ['Grievance resolution within 30 days', '96.4%', '↑ 1.2%', '95%', 'Met'],
                    ['Sev 1+2 incidents', '3', '↑ 1', '0', 'Investigating'],
                    ['Time to Board notification (avg hours)', '54', '↓ 8', '<72', 'Met'],
                    ['Audit findings open', '7', '↓ 3', '<5', 'Action needed'],
                    ['Vendor risk assessments current', '92%', '↑ 4%', '95%', 'On track'],
                    ['DPIAs conducted', '14', '↑ 5', 'Per pipeline', 'Met'],
                  ],
                },
                {
                  type: 'callout',
                  content:
                    'Select metrics that are meaningful at Board level — not operational detail. "Number of phishing emails blocked" is operational; "tier 1 training completion" is Board-level. The test: does the metric inform a Board decision (budget, authority, risk acceptance)?',
                  calloutType: 'tip',
                },
              ],
            },
            {
              id: 'sec-3',
              title: 'Escalation Triggers and Recommendations',
              content: [
                {
                  type: 'paragraph',
                  content:
                    'Beyond the annual report, certain triggers require immediate Board escalation rather than waiting for the annual cycle. These triggers are defined in the Board-approved escalation policy and ensure the Board is informed of material events when they happen.',
                },
                {
                  type: 'heading',
                  content: 'Escalation Triggers',
                },
                {
                  type: 'list',
                  content: 'Events requiring immediate Board escalation',
                  items: [
                    'Sev 1 or Sev 2 personal data breach (per IR plan severity classification)',
                    'DPDPA Board inquiry or enforcement action',
                    'Material DPIA residual risk rated "very high"',
                    'Material vendor breach affecting the Data Fiduciary',
                    'DPO resignation or termination',
                    'Certification lapse (DPO or organisation)',
                    'Regulatory change with material compliance impact',
                    'Material litigation related to personal data',
                    'Whistleblower complaint about privacy practices',
                    'Major audit finding with systemic implications',
                  ],
                },
                {
                  type: 'callout',
                  content:
                    'Escalation does not mean waiting for the next Board meeting. The DPO has authority to call an ad-hoc Board committee meeting for material events. The escalation policy should specify who (typically the Board\'s Audit Committee chair) is notified, in what timeline (24 hours for Sev 1), and what information is shared.',
                  calloutType: 'important',
                },
                {
                  type: 'heading',
                  content: 'Recommendations Section',
                },
                {
                  type: 'paragraph',
                  content:
                    'The Recommendations section drives Board decisions. Each recommendation is specific, with a decision required, budget implication, and risk of non-action. Examples: "Approve ₹2 crore for DLP deployment (target Q3) — risk of not approving: continued inability to detect insider exfiltration, estimated ₹5 crore penalty exposure per major incident."',
                },
                {
                  type: 'callout',
                  content:
                    'Archive every annual report and every escalation for at least 10 years. These records are the primary evidence of senior-level accountability — they demonstrate that the Board was informed, engaged, and acting on privacy risks. In any enforcement action, the Board will examine whether senior oversight was exercised.',
                  calloutType: 'tip',
                },
                {
                  type: 'example',
                  content:
                    'A Mumbai SDF\'s annual privacy report identified three Sev 2 incidents in the year, a 96% grievance resolution rate (above target), and one material DPIA residual risk rated "high" for a new AI feature. The Board approved the recommendations: ₹2 crore for DLP deployment, hiring of 2 additional privacy analysts, and deferral of the AI feature pending further mitigation. The archived report became evidence of senior oversight when the DPDPA Board later inquired about the AI feature decision.',
                },
              ],
            },
          ],
          glossary: [
            { term: 'Annual Privacy Report', definition: 'The structured document the DPO presents to the Board annually, covering program status, metrics, incidents, risks, and recommendations.' },
            { term: 'Metrics Dashboard', definition: 'The quantitative summary of privacy program performance, tracked over time with targets.' },
            { term: 'Escalation Trigger', definition: 'A material event requiring immediate Board notification rather than waiting for the annual cycle.' },
            { term: 'Senior-Level Accountability', definition: 'The DPDPA expectation that the Board of Directors is informed, engaged, and acting on privacy risks.' },
          ],
          references: [
            { title: 'DPDPA 2023 — Section 10', source: 'Government of India, MeitY', year: '2023' },
            { title: 'Digital Personal Data Protection Rules 2025 — Rule 4 (DPO reporting)', source: 'Government of India, MeitY', year: '2025' },
            { title: 'Companies Act 2013 — Section 134(3) (Board report on risk)', source: 'Government of India', year: '2013' },
            { title: 'Kotak Committee Report on Corporate Governance (BSE Listing Rules)', source: 'Securities and Exchange Board of India', year: '2017' },
            { title: 'IAPP Board-Level Privacy Reporting', source: 'International Association of Privacy Professionals', year: '2023' },
          ],
        },
      ],
    },
  ],

  // ===== MODULE ASSIGNMENTS =====
  assignments: [
    {
      id: 1,
      title: 'Draft a DPDPA-Compliant Privacy Policy',
      description:
        'Draft a complete Privacy Policy for an organisation of your choice (real or fictional), covering all nine required sections under Rule 3 of DPDP Rules 2025 in plain language (Class 8 readability), with multi-lingual support plan and versioning procedure.',
      deliverables: [
        'Completed Privacy Policy with all nine Rule 3 sections',
        'Readability assessment (Flesch-Kincaid Grade Level < 9)',
        'Multi-lingual implementation plan (English + Hindi + regional)',
        'Versioning and change management procedure',
        'Self-assessment against common deficiencies checklist',
      ],
    },
    {
      id: 2,
      title: 'Negotiate a DPA with a Vendor',
      description:
        'Review a sample vendor agreement (provided) and draft a DPA addendum containing all 10 mandatory clauses, with particular attention to sub-processing, audit rights, breach notification, and termination/return.',
      deliverables: [
        'DPA addendum with all 10 mandatory clauses',
        'Marked-up redline of the original vendor agreement',
        'Negotiation priority list (must-haves, nice-to-haves, deal-breakers)',
        'Risk assessment of any clauses the vendor refuses to accept',
      ],
    },
    {
      id: 3,
      title: 'Conduct a DPIA for a New Processing Activity',
      description:
        'Choose a new processing activity (e.g., AI-powered feature, new vendor, new data category) and conduct a full DPIA using the 9-step process, producing a complete DPIA report.',
      deliverables: [
        'Processing description with data flow diagram',
        'Risk register with likelihood-impact scores',
        'Mitigation plan with specific measures',
        'Residual risk assessment',
        'DPO sign-off or escalation recommendation',
      ],
    },
  ],

  // ===== MODULE QUIZ =====
  quiz: {
    questions: [
      {
        question: 'How many required sections must a Privacy Policy contain under Rule 3 of DPDP Rules 2025?',
        options: ['5', '7', '9', '12'],
        correct: 2,
        explanation: 'Rule 3 specifies nine required sections: data controller, purposes, categories, recipients, retention, rights, contact, grievance redressal, and changes.',
      },
      {
        question: 'What is the plain-language readability standard for a DPDPA-compliant Privacy Policy?',
        options: ['Class 5 (10-11 years)', 'Class 8 (13-14 years)', 'Class 10 (15-16 years)', 'No specific standard'],
        correct: 1,
        explanation: 'The Board has interpreted "plain language" to mean Class 8 readability — the average 13-14 year old should understand and act on the policy.',
      },
      {
        question: 'How many mandatory clauses must a Data Processing Addendum (DPA) contain under DPDPA Section 8(7) and DPDP Rules 2025?',
        options: ['7', '8', '10', '12'],
        correct: 2,
        explanation: 'Section 8(7) mandates seven clauses; DPDP Rules 2025 and global practice add three more — 10 mandatory clauses total.',
      },
      {
        question: 'What is the maximum penalty for failure to comply with Section 8(3) (Privacy Policy requirements)?',
        options: ['₹10 crore', '₹25 crore', '₹50 crore', '₹100 crore'],
        correct: 2,
        explanation: 'Under the DPDPA Schedule, failure to comply with Section 8(3) carries a maximum penalty of ₹50 crore per deficient policy.',
      },
      {
        question: 'Under DPDPA Section 10(2)(b), within how many days must the Grievance Officer respond to a Data Principal complaint?',
        options: ['7 days', '14 days', '30 days', '60 days'],
        correct: 2,
        explanation: 'Section 10(2)(b) requires the Grievance Officer to deal with complaints within 30 days of receipt.',
      },
      {
        question: 'Which of the following is NOT a required element of a Retention Schedule?',
        options: ['Data category', 'Retention period', 'Basis (legal or business)', 'Vendor name'],
        correct: 3,
        explanation: 'Vendor name is not a Retention Schedule element; the schedule covers data categories, retention periods, basis, deletion method, and owner.',
      },
      {
        question: 'Under DPDPA Section 10(2)(a), who must appoint a Data Protection Officer?',
        options: ['All Data Fiduciaries', 'Only government agencies', 'Significant Data Fiduciaries (SDFs)', 'Only foreign companies'],
        correct: 2,
        explanation: 'Section 10(2)(a) requires Significant Data Fiduciaries (SDFs) to appoint a DPO; non-SDFs are not required but often do so voluntarily.',
      },
      {
        question: 'Which certification is the global standard for privacy programme management?',
        options: ['CISSP', 'CISA', 'IAPP CIPM', 'PMP'],
        correct: 2,
        explanation: 'IAPP CIPM (Certified Information Privacy Manager) is the global standard for privacy programme management. CISSP is security, CISA is audit.',
      },
      {
        question: 'What is the standard retention period for consent audit logs under DPDPA best practice?',
        options: ['30 days', '1 year', '5 years', 'Active + 7 years'],
        correct: 3,
        explanation: 'Consent logs are retained for active relationship + 7 years to defend against disputes that may arise years after processing ends.',
      },
      {
        question: 'Which cookie category does NOT require consent under DPDPA Section 4(2)?',
        options: ['Marketing cookies', 'Analytics cookies', 'Strictly necessary cookies', 'Preference cookies'],
        correct: 2,
        explanation: 'Strictly necessary cookies (e.g., session, cart) are exempt from consent requirements under Section 4(2); all other categories require consent under Section 6.',
      },
      {
        question: 'What is the typical timeline for vendor breach notification to the Data Fiduciary under a compliant DPA?',
        options: ['1 hour', '24-48 hours', '7 days', '72 hours'],
        correct: 1,
        explanation: 'Vendor breach notification within 24-48 hours of vendor awareness is the standard, fast enough that the DPDPA\'s 72-hour clock can still be met.',
      },
      {
        question: 'Which of the following is NOT a typical escalation trigger for immediate Board notification?',
        options: ['Sev 1 personal data breach', 'DPO resignation', 'New marketing campaign launch', 'DPDPA Board inquiry'],
        correct: 2,
        explanation: 'A new marketing campaign does not trigger Board escalation (unless it presents material privacy risk). Sev 1 breaches, DPO resignation, and DPDPA Board inquiries all require immediate escalation.',
      },
    ],
    passingScore: 80,
  },

  // ===== MODULE PROJECT =====
  project: {
    title: 'Build a Complete DPDPA Documentation Framework',
    description:
      'Design the complete documentation framework for an organisation of your choice — covering external documents (Privacy Policy, Cookie Policy, DPA), internal governance (DPO appointment, Grievance Officer designation, DPIA, ROPA), and compliance records (consent logs, vendor assessments, training records, Board report).',
    deliverables: [
      'External documents: Privacy Policy, Cookie Policy, DPA template',
      'Internal governance: DPO Appointment Letter, Grievance Officer designation, DPIA template, ROPA template',
      'Compliance records: consent log schema, vendor risk register, training records framework, Board report template',
      'Retention Policy and Schedule covering all data categories',
      'Data Breach Response Plan integrated with Module 15 IR program',
      'Documentation maintenance and review calendar',
      'Self-assessment against DPDPA Section 8 and Section 10 requirements',
    ],
  },
};