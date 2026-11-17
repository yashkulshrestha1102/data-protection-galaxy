// data/modules/module13.ts

import { Module } from '@/app/types/course';

export const module13: Module = {
  id: 13,
  title: 'Data Governance',
  description:
    'Build a comprehensive data governance programme that satisfies DPDPA Section 8 general obligations and supports the wider enterprise. This module covers data inventory, metadata management, data classification, Records of Processing Activities (ROPA), data flow diagrams, the full data lifecycle (collection, storage, retention, secure deletion per NIST 800-88), and the DAMA-DMBOK framework with data stewardship roles, governance councils, and metrics.',
  duration: '9 Hours',
  icon: 'Database',
  learningObjectives: [
    'Build a complete data inventory and Records of Processing Activities (ROPA) for an Indian organisation',
    'Implement a 4-tier data classification model with automated classification rules',
    'Design data flow diagrams that map personal data through business processes',
    'Architect data storage across hot, cold, and archive tiers with cost and access optimisation',
    'Build automated retention policies and secure data deletion workflows per NIST 800-88',
    'Apply the DAMA-DMBOK framework to structure a data governance function',
    'Establish a Data Governance Council with stewardship roles and KPIs',
  ],
  chapters: [
    // ============================================================
    // CHAPTER 1: DATA INVENTORY
    // ============================================================
    {
      id: 1,
      title: 'Data Inventory',
      lessons: [
        // -------- LESSON 1 --------
        {
          id: 1,
          title: 'Data Mapping: Discovering Personal Data Across the Enterprise',
          duration: '22 min',
          type: 'video',
          description:
            'How to discover and inventory personal data scattered across databases, SaaS tools, file shares, emails, and backups — the foundational step for any data governance programme.',
          content:
            'You cannot protect what you do not know you have. Data mapping — the systematic discovery and inventory of personal data across the enterprise — is the foundational step for DPDPA compliance. Without a complete data map, an organisation cannot respond to DSARs, conduct privacy impact assessments, or implement retention policies. This lesson covers the technical and procedural approaches to data mapping, the tools available, and how to maintain the map over time.',
          learningObjectives: [
            'Conduct structured data discovery across structured, semi-structured, and unstructured stores',
            'Apply automated discovery tools (BigID, OneTrust, Securiti) effectively',
            'Document the data map in a maintainable format',
            'Maintain the data map through continuous discovery',
          ],
          keyTakeaways: [
            'Data mapping must cover databases, SaaS tools, file shares, emails, backups, logs, and physical records.',
            'Automated discovery tools identify ~70–80% of personal data; manual review covers the remainder.',
            'The data map should record: data element, source, location, format, sensitivity, owner, lawful basis, purpose.',
            'Data mapping is an ongoing process — schedule continuous discovery, not just annual point-in-time.',
            'The data map is the foundation for DSAR, ROPA, retention, breach response, and DPIA — without it, none of these can be effective.',
          ],
          sections: [
            {
              id: 'sec-1',
              title: 'The Scope of Data Mapping',
              content: [
                {
                  type: 'paragraph',
                  content:
                    'A complete data map covers all locations where personal data is stored or processed: (1) production databases (PostgreSQL, MySQL, MongoDB, Oracle); (2) data warehouses and lakes (Snowflake, BigQuery, Redshift); (3) SaaS tools (Salesforce, HubSpot, Zendesk, Workday, Slack); (4) file shares (Google Drive, OneDrive, SharePoint, on-prem network drives); (5) email systems (Gmail, Outlook); (6) backups (S3 Glacier, on-prem tapes); (7) logs (CloudWatch, Splunk, ELK); (8) physical records (printed documents, filing cabinets); (9) code repositories (GitHub, GitLab — sometimes contain personal data in test fixtures); (10) third-party processors (sub-processors).',
                },
                {
                  type: 'heading',
                  content: 'The Discovery Spectrum',
                },
                {
                  type: 'list',
                  content: 'The data mapping discovery spectrum',
                  items: [
                    'Structured data (databases): SQL metadata queries, schema analysis, column-level scans for PII patterns.',
                    'Semi-structured data (JSON, XML in document stores): schema inference, field-level scanning.',
                    'Unstructured data (files, emails, documents): NLP-based PII detection (names, addresses, PAN, Aadhaar patterns).',
                    'Logs: regex pattern matching for IP addresses, user IDs, emails; sampling + classification.',
                    'Physical records: walk-through inventory, barcode labelling, digitisation projects.',
                  ],
                },
                {
                  type: 'callout',
                  content:
                    'Backups are frequently forgotten — yet they often contain personal data from years ago. The data map must include backups, with their retention and deletion schedule. A breach that exposes a backup exposes years of data.',
                  calloutType: 'warning',
                },
              ],
            },
            {
              id: 'sec-2',
              title: 'Automated Discovery Tools',
              content: [
                {
                  type: 'paragraph',
                  content:
                    'Enterprise-grade automated discovery tools scan the enterprise to identify personal data and build the data map. The leading tools combine database scanning, file system scanning, SaaS API integration, and ML-based PII detection. They typically identify 70–80% of personal data — the remainder requires manual review.',
                },
                {
                  type: 'table',
                  headers: ['Tool', 'Strength', 'Pricing Model', 'Indian Use Cases'],
                  rows: [
                    ['BigID', 'Deep ML-based classification, broad SaaS connectors', 'Enterprise licence', 'BFSI, large enterprises'],
                    ['OneTrust', 'Integrated with consent/DSAR/DPIA workflows', 'Module-based', 'Mid-to-large enterprises'],
                    ['Securiti.ai', 'AI-driven, broad coverage', 'Enterprise licence', 'Tech, healthcare'],
                    ['Collibra', 'Strong data catalog + governance', 'Enterprise licence', 'Data-led organisations'],
                    ['Alation', 'Strong data catalog, SQL-driven', 'Enterprise licence', 'Data engineering teams'],
                    ['Microsoft Purview', 'Strong for Microsoft-centric estates', 'Per-GB scanned', 'Microsoft shops'],
                  ],
                },
                {
                  type: 'paragraph',
                  content:
                    'For smaller organisations, open-source alternatives exist: Apache Atlas (Hadoop-focused), DataHub (LinkedIn, open-source), Amundsen (Lyft, open-source). These lack the ML-based PII detection of commercial tools but provide a structured data catalog.',
                },
              ],
            },
            {
              id: 'sec-3',
              title: 'Data Map Documentation',
              content: [
                {
                  type: 'paragraph',
                  content:
                    'The data map is recorded in a structured format — typically a spreadsheet for small organisations, a data catalog for medium, and a governance platform for large. Each entry has the following fields:',
                },
                {
                  type: 'heading',
                  content: 'Data Map Schema',
                },
                {
                  type: 'table',
                  headers: ['Field', 'Description', 'Example'],
                  rows: [
                    ['Data Element', 'Type of personal data', 'Customer email, employee PAN'],
                    ['Source', 'Where it is collected from', 'Web form, HR system'],
                    ['Location', 'System / database / SaaS', 'customers.email in PostgreSQL production'],
                    ['Format', 'Storage format', 'Plaintext, encrypted, hashed, tokenised'],
                    ['Volume', 'Approximate count', '~5 million records'],
                    ['Sensitivity', 'Classification tier', 'Public, Internal, Confidential, Restricted'],
                    ['Owner', 'Business owner', 'Customer Service Lead'],
                    ['Lawful Basis', 'DPDPA Section 7 basis', 'Consent (7(2)(a))'],
                    ['Purpose', 'Why it is collected', 'Order notifications'],
                    ['Retention', 'How long kept', '7 years after last transaction'],
                    ['Recipients', 'Who it is shared with', 'Marketing team, Zendesk processor'],
                  ],
                },
                {
                  type: 'callout',
                  content:
                    'The data map should be searchable by both data element (e.g., "show me all locations where Aadhaar is stored") and by individual (e.g., "show me all data about User ID 12345") — the former supports governance, the latter supports DSAR.',
                  calloutType: 'tip',
                },
              ],
            },
            {
              id: 'sec-4',
              title: 'Continuous Discovery and Maintenance',
              content: [
                {
                  type: 'paragraph',
                  content:
                    'A data map built once is obsolete within months. New applications, new SaaS tools, new data sources appear constantly. Continuous discovery — automated scanning on a weekly or monthly basis — keeps the map current. Changes (new fields, new tables, new SaaS integrations) trigger alerts to the data steward.',
                },
                {
                  type: 'heading',
                  content: 'Continuous Discovery Cadence',
                },
                {
                  type: 'list',
                  content: 'Recommended continuous discovery cadence',
                  items: [
                    'Production databases: weekly automated scan; alert on schema changes.',
                    'SaaS tools: monthly API-driven inventory; alert on new connectors.',
                    'File shares: monthly scan; alert on new files matching PII patterns.',
                    'Email systems: monthly scan for personal data in emails.',
                    'Logs: monthly sampling to identify new personal data patterns.',
                    'Code repositories: pre-commit hooks to prevent PII from being committed; CI/CD scan for new fixtures.',
                    'Physical records: annual walk-through inventory.',
                  ],
                },
                {
                  type: 'example',
                  content:
                    'A Mumbai fintech implements continuous discovery using Collibra. Weekly scans of the production PostgreSQL cluster detect new columns added by developers; if a column matches PII patterns (e.g., "pan_number", "aadhaar_last_4"), an alert goes to the data steward who classifies the column and updates the data map. Monthly SaaS inventory via Salesforce, HubSpot, Zendesk APIs detects new fields and new sub-processors. The map is current within 7 days of any change.',
                },
              ],
            },
          ],
          glossary: [
            { term: 'Data Map', definition: 'A structured inventory of personal data across an enterprise, recording each data element with its source, location, format, sensitivity, owner, lawful basis, purpose, retention, and recipients.' },
            { term: 'Continuous Discovery', definition: 'An automated scanning process that updates the data map on a regular cadence (weekly or monthly) to detect new personal data locations.' },
            { term: 'Data Catalog', definition: 'A searchable inventory of data assets with metadata — examples include Collibra, Alation, and Microsoft Purview.' },
          ],
          references: [
            { title: 'DAMA-DMBOK — Data Management Body of Knowledge', source: 'DAMA International', year: '2017' },
            { title: 'NIST SP 800-188 — De-Identification of Personal Information', source: 'National Institute of Standards and Technology', year: '2023' },
            { title: 'BigID Data Discovery Documentation', source: 'BigID', year: '2024' },
            { title: 'OneTrust Data Mapping Guide', source: 'OneTrust', year: '2024' },
          ],
        },

        // -------- LESSON 2 --------
        {
          id: 2,
          title: 'Metadata Management and the Business Glossary',
          duration: '20 min',
          type: 'reading',
          description:
            'How to manage metadata — technical, business, and operational — through a business glossary, data dictionary, and data lineage tracking.',
          content:
            'Metadata is "data about data" — the descriptions, definitions, and relationships that make raw data usable. Without metadata, an organisation has terabytes of uninterpretable bytes. This lesson covers the three types of metadata (technical, business, operational), the business glossary, the data dictionary, and data lineage tracking.',
          learningObjectives: [
            'Distinguish technical, business, and operational metadata',
            'Build a business glossary with standard data definitions',
            'Maintain a data dictionary linking glossary terms to technical assets',
            'Track data lineage from source to destination',
          ],
          keyTakeaways: [
            'Metadata enables search, governance, lineage, and impact analysis.',
            'Business glossary defines terms in business language (e.g., "Customer" = a person who has placed at least one order).',
            'Data dictionary maps glossary terms to technical columns/fields (e.g., "Customer" = users table where user_type=\'customer\').',
            'Data lineage tracks how data flows from source to destination — essential for impact analysis and breach response.',
            'Metadata management tools (Collibra, Alation, Atlas) automate glossary, dictionary, and lineage tracking.',
          ],
          sections: [
            {
              id: 'sec-1',
              title: 'Three Types of Metadata',
              content: [
                {
                  type: 'paragraph',
                  content:
                    'Metadata comes in three flavours. Technical metadata describes the structure of data — schema, tables, columns, data types, constraints, indexes. Business metadata describes the meaning of data — what each term means in business language, who owns it, how it is used. Operational metadata describes the usage of data — when it was last accessed, who accessed it, what queries ran against it, performance metrics.',
                },
                {
                  type: 'table',
                  headers: ['Metadata Type', 'Examples', 'Owner', 'Tool'],
                  rows: [
                    ['Technical', 'Schema, columns, data types, indexes', 'Data Engineering', 'Database system, Data catalog'],
                    ['Business', 'Glossary definitions, data ownership, purpose', 'Business Stakeholders', 'Business glossary'],
                    ['Operational', 'Access logs, query history, freshness', 'DataOps', 'Observability tools'],
                  ],
                },
                {
                  type: 'callout',
                  content:
                    'Without business metadata, technical metadata is meaningless. A column "cust_type" in the database has no business meaning without the glossary entry defining what "customer type" means in business language.',
                  calloutType: 'important',
                },
              ],
            },
            {
              id: 'sec-2',
              title: 'The Business Glossary',
              content: [
                {
                  type: 'paragraph',
                  content:
                    'A business glossary is the authoritative source for business terms. Each entry defines a term in plain business language, with the data steward as owner. Examples: "Customer: a person or organisation who has placed at least one paid order in the last 24 months. Active customers are those with at least one order in the last 12 months; lapsed customers are those with no orders in the last 12 months but at least one in the last 24." Definitions are reviewed annually.',
                },
                {
                  type: 'heading',
                  content: 'Building a Business Glossary',
                },
                {
                  type: 'list',
                  content: 'Steps to build a business glossary',
                  items: [
                    'Step 1: Identify top 100 business terms used across the organisation.',
                    'Step 2: Convene business stakeholders to draft definitions.',
                    'Step 3: Resolve conflicts (e.g., "customer" means different things to Sales vs. Support).',
                    'Step 4: Publish glossary; integrate with data catalog.',
                    'Step 5: Enforce glossary use in BI dashboards, reports, data models.',
                    'Step 6: Review annually; version the glossary.',
                  ],
                },
                {
                  type: 'example',
                  content:
                    'A Bangalore SaaS company builds a business glossary with 250 terms. Key definitions: "Customer" — organisation with an active paid subscription; "User" — individual with a login to a Customer\'s account; "Lead" — organisation in the sales pipeline that has not yet become a Customer; "Active User" — User who has logged in within the last 30 days. These definitions eliminate ambiguity in BI dashboards — the marketing team\'s "active users" and the product team\'s "active users" now mean the same thing.',
                },
              ],
            },
            {
              id: 'sec-3',
              title: 'The Data Dictionary',
              content: [
                {
                  type: 'paragraph',
                  content:
                    'The data dictionary maps glossary terms to technical assets. For each glossary term, the dictionary records: technical asset (database, table, column), data type, allowed values, transformation logic, source system, downstream consumers. The dictionary is the bridge between business and technical metadata.',
                },
                {
                  type: 'heading',
                  content: 'Data Dictionary Entry Example',
                },
                {
                  type: 'paragraph',
                  content:
                    'Glossary term: "Customer Email". Technical asset: customers.email column in PostgreSQL production database. Data type: VARCHAR(255). Allowed values: RFC 5322-compliant email format. Source: customer registration form. Transformation: lowercase trim on insert. Downstream consumers: marketing_emails.cust_email, support_tickets.contact_email. Owner: Customer Service Lead. Sensitivity: Confidential. Retention: 7 years after last order.',
                },
                {
                  type: 'callout',
                  content:
                    'The data dictionary should be machine-readable (YAML, JSON, or a data catalog platform). Manual spreadsheets become stale within months — automation is essential.',
                  calloutType: 'tip',
                },
              ],
            },
            {
              id: 'sec-4',
              title: 'Data Lineage Tracking',
              content: [
                {
                  type: 'paragraph',
                  content:
                    'Data lineage tracks how data flows from source to destination — through ETL pipelines, transformations, and aggregations. Lineage is essential for: (a) impact analysis — what breaks if I change this column?; (b) root cause analysis — where did this anomalous value come from?; (c) breach response — which downstream systems are affected by a source breach?; (d) compliance — prove to the regulator that personal data flows only to authorised systems.',
                },
                {
                  type: 'heading',
                  content: 'Lineage Tracking Tools',
                },
                {
                  type: 'list',
                  content: 'Common data lineage tracking tools',
                  items: [
                    'OpenLineage (open standard, supported by many tools).',
                    'Apache Atlas (Hadoop ecosystem).',
                    'Collibra Lineage (commercial).',
                    'Alation Data Lineage (commercial).',
                    'Manta (automated lineage from SQL, ETL, BI).',
                    'dbt (lineage built into the transformation framework).',
                  ],
                },
                {
                  type: 'example',
                  content:
                    'An Indian bank traces the lineage of "customer_account_balance" — a key metric used in regulatory reports. Lineage reveals: source = transaction_logs table (real-time); ETL = Spark job running nightly at 2 AM, aggregating transactions per account; intermediate = daily_balance table; final = customer_account_balance view in the BI layer. When a regulator questions a balance reported in Q1 2024, the bank traces lineage back to the specific transactions that contributed to it — providing full audit trail.',
                },
              ],
            },
          ],
          glossary: [
            { term: 'Metadata', definition: 'Data about data — including technical (structure), business (meaning), and operational (usage) descriptions.' },
            { term: 'Business Glossary', definition: 'An authoritative source of business term definitions, owned by business stakeholders and reviewed annually.' },
            { term: 'Data Dictionary', definition: 'A machine-readable mapping of business glossary terms to technical assets — schema, columns, data types, transformations.' },
            { term: 'Data Lineage', definition: 'The tracking of data flow from source to destination through ETL pipelines, transformations, and aggregations — essential for impact analysis and breach response.' },
          ],
          references: [
            { title: 'DAMA-DMBOK — Data Management Body of Knowledge, 2nd Edition', source: 'DAMA International', year: '2017' },
            { title: 'OpenLineage Specification', source: 'OpenLineage', year: '2024' },
            { title: 'Collibra Business Glossary Documentation', source: 'Collibra', year: '2024' },
          ],
        },

        // -------- LESSON 3 --------
        {
          id: 3,
          title: 'Data Classification: The 4-Tier Model and Automated Classification',
          duration: '22 min',
          type: 'video',
          description:
            'Design and implement a 4-tier data classification model (Public, Internal, Confidential, Restricted) with automated classification rules and policy enforcement.',
          content:
            'Data classification is the process of categorising data by sensitivity and applying appropriate controls based on the classification. A 4-tier model — Public, Internal, Confidential, Restricted — is the industry standard. This lesson covers the model, examples per tier, control mappings, and how to automate classification using ML and rules-based approaches.',
          learningObjectives: [
            'Apply a 4-tier data classification model',
            'Map controls (encryption, access, retention) to each classification tier',
            'Design automated classification rules',
            'Implement classification enforcement in data systems',
          ],
          keyTakeaways: [
            'The 4-tier model — Public, Internal, Confidential, Restricted — is the industry standard.',
            'Each tier maps to specific controls (encryption, access, retention, sharing, audit) — controls must be enforced not just documented.',
            'Automated classification uses regex rules for known patterns (PAN, Aadhaar, card numbers) and ML for ambiguous cases.',
            'Manual classification by data stewards covers edge cases — typically 5–10% of data.',
            'Classification drives DPDPA compliance — higher tiers require stronger controls under Section 8(5) "reasonable security".',
          ],
          sections: [
            {
              id: 'sec-1',
              title: 'The 4-Tier Model',
              content: [
                {
                  type: 'paragraph',
                  content:
                    'The 4-tier classification model categorises data by sensitivity. Each tier has examples, default controls, and access rules. The model should be documented in a Data Classification Policy approved by the Data Governance Council.',
                },
                {
                  type: 'table',
                  headers: ['Tier', 'Description', 'Examples', 'Default Controls'],
                  rows: [
                    ['Public', 'Approved for public release', 'Marketing materials, public pricing, press releases', 'No access controls; integrity checks only'],
                    ['Internal', 'For internal use; not for external release', 'Internal memos, organisation charts, internal newsletters', 'Authenticated internal access; encryption at rest optional'],
                    ['Confidential', 'Sensitive business information; breach causes moderate harm', 'Customer email, phone, order history, internal financials', 'Encrypted at rest (AES-256); access on need-to-know; audit logged'],
                    ['Restricted', 'Highly sensitive; breach causes severe harm', 'Aadhaar, PAN, card numbers, health records, credentials, source code', 'Encrypted at rest + in transit; MFA; least privilege; full audit; no external sharing'],
                  ],
                },
                {
                  type: 'callout',
                  content:
                    'Aadhaar numbers, PAN, card numbers, biometric data, and health records should always be classified as Restricted. The Aadhaar Act 2018 makes storage or display of full Aadhaar numbers a criminal offence (Section 29).',
                  calloutType: 'warning',
                },
              ],
            },
            {
              id: 'sec-2',
              title: 'Control Mapping per Tier',
              content: [
                {
                  type: 'paragraph',
                  content:
                    'Each classification tier maps to specific controls covering access, encryption, retention, sharing, and audit. Controls must be enforced through technical measures (database permissions, encryption at column level, IAM policies) — not just documented in policy.',
                },
                {
                  type: 'table',
                  headers: ['Control', 'Public', 'Internal', 'Confidential', 'Restricted'],
                  rows: [
                    ['Encryption at rest', 'Optional', 'Optional', 'Required (AES-256)', 'Required (AES-256, KMS-managed keys)'],
                    ['Encryption in transit', 'Optional', 'Recommended', 'Required (TLS 1.2+)', 'Required (TLS 1.3)'],
                    ['Access control', 'None', 'Authenticated', 'Role-based (RBAC)', 'Attribute-based (ABAC) + MFA'],
                    ['Audit logging', 'Optional', 'Recommended', 'Required', 'Required + anomaly detection'],
                    ['Retention', 'Indefinite', '5 years', 'Per purpose', 'Minimum necessary + secure deletion'],
                    ['External sharing', 'Allowed', 'With NDA', 'With DPA', 'Prohibited without board approval'],
                    ['Backup', 'Optional', 'Standard', 'Encrypted backup', 'Encrypted backup + immutable'],
                    ['Physical access', 'None', 'Office', 'Locked cabinet', 'Data centre with biometric'],
                  ],
                },
              ],
            },
            {
              id: 'sec-3',
              title: 'Automated Classification Rules',
              content: [
                {
                  type: 'paragraph',
                  content:
                    'Manual classification does not scale — a 50 TB data warehouse cannot be classified by hand. Automated classification uses two approaches: (1) rules-based — regex patterns for known PII (PAN, Aadhaar, card numbers, email); (2) ML-based — trained models that identify PII in free text and ambiguous cases. The two are complementary — rules are precise but limited; ML is broad but probabilistic.',
                },
                {
                  type: 'heading',
                  content: 'Rules-Based Classification Examples',
                },
                {
                  type: 'list',
                  content: 'Regex patterns for rules-based classification',
                  items: [
                    'PAN: [A-Z]{5}[0-9]{4}[A-Z]{1} — 10 chars, e.g., ABCDE1234F.',
                    'Aadhaar: [0-9]{4}[-\\s]?[0-9]{4}[-\\s]?[0-9]{4} — 12 digits with separators.',
                    'Credit card (Visa/MC): [0-9]{16} with Luhn checksum verification.',
                    'Email: RFC 5322 pattern, e.g., [a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}',
                    'Phone (India): \\+91[-\\s]?[6-9][0-9]{9} — 10 digits starting 6-9 with optional +91.',
                    'IFSC: [A-Z]{4}0[A-Z0-9]{6} — 11 chars, e.g., HDFC0001234.',
                    'GSTIN: [0-9]{2}[A-Z]{5}[0-9]{4}[A-Z]{1}[1-9A-Z]{1}Z[0-9A-Z]{1} — 15 chars.',
                  ],
                },
                {
                  type: 'heading',
                  content: 'ML-Based Classification',
                },
                {
                  type: 'paragraph',
                  content:
                    'ML-based classification trains models on labelled examples of PII (e.g., names, addresses, dates of birth) and applies the models to unstructured data. Leading pre-trained models include Microsoft Presidio, Google DLP API, AWS Macie. For Indian data, custom training may be needed to recognise Indian names, addresses, and patterns not in the pre-trained models.',
                },
                {
                  type: 'example',
                  content:
                    'A Mumbai fintech implements automated classification: (1) Regex rules identify PAN, Aadhaar, card numbers, IFSC, GSTIN in all database columns; (2) ML model (Microsoft Presidio) identifies names, addresses, emails in free-text fields; (3) Records are tagged with the highest sensitivity classification; (4) Classification tags drive column-level encryption and access controls. Result: 95% of PII automatically classified; 5% reviewed manually. Total time: 3 weeks for a 20 TB database.',
                },
              ],
            },
            {
              id: 'sec-4',
              title: 'Enforcing Classification Through Technical Controls',
              content: [
                {
                  type: 'paragraph',
                  content:
                    'Classification is meaningless without enforcement. Each tier must map to enforceable technical controls: column-level encryption for Restricted data, row-level security for Confidential, IAM policies for Internal. The classification tag must be machine-readable so that automation can act on it.',
                },
                {
                  type: 'heading',
                  content: 'Enforcement Patterns',
                },
                {
                  type: 'list',
                  content: 'Technical enforcement patterns for classification',
                  items: [
                    'PostgreSQL row-level security (RLS): restrict access to rows by classification.',
                    'Column-level encryption: encrypt Restricted columns with KMS-managed keys.',
                    'AWS IAM policies: deny access to S3 buckets tagged Confidential without MFA.',
                    'HashiCorp Vault: secrets stored as Restricted; access requires dynamic credentials.',
                    'Data loss prevention (DLP): block download of Restricted data to personal devices.',
                    'API gateways: require classification tag on response; mask if requester lacks tier.',
                  ],
                },
                {
                  type: 'callout',
                  content:
                    'Periodic classification audits should verify that enforcement matches policy. A common failure: policy says "Restricted data must be encrypted" but the database has unencrypted Restricted columns because enforcement was never implemented.',
                  calloutType: 'warning',
                },
              ],
            },
          ],
          glossary: [
            { term: 'Data Classification', definition: 'The process of categorising data by sensitivity into tiers, with each tier mapping to specific controls.' },
            { term: '4-Tier Model', definition: 'A standard classification model with four tiers: Public, Internal, Confidential, Restricted.' },
            { term: 'Rules-Based Classification', definition: 'Automated classification using regex patterns for known PII types (PAN, Aadhaar, card numbers).' },
            { term: 'ML-Based Classification', definition: 'Automated classification using trained models to identify PII in unstructured text and ambiguous cases.' },
          ],
          references: [
            { title: 'NIST SP 800-60 — Guide to Mapping Types of Information and Information Systems to Security Categories', source: 'National Institute of Standards and Technology', year: '2008' },
            { title: 'ISO/IEC 27001 — Information Security Management', source: 'International Organization for Standardization', year: '2022' },
            { title: 'Microsoft Presidio Documentation', source: 'Microsoft', year: '2024' },
            { title: 'Aadhaar Act 2016, Section 29', source: 'Government of India', year: '2016' },
          ],
        },

        // -------- LESSON 4 --------
        {
          id: 4,
          title: 'Records of Processing Activities (ROPA): A GDPR-Style Template for India',
          duration: '22 min',
          type: 'reading',
          description:
            'How to build a Records of Processing Activities (ROPA) — the GDPR Article 30 artefact — adapted for Indian organisations and the DPDPA. Although DPDPA does not explicitly require a ROPA, the Section 8 general obligations are best implemented through one.',
          content:
            'The GDPR Article 30 Record of Processing Activities (ROPA) is the most useful artefact in data protection compliance. While the DPDPA does not explicitly require a ROPA, the Section 8 general obligations — accountability, purpose limitation, security, retention — are best operationalised through one. This lesson covers the ROPA template, the fields required, and how to maintain it as living documentation.',
          learningObjectives: [
            'Build a ROPA template adapted for DPDPA compliance',
            'Document each processing activity with required fields',
            'Maintain the ROPA as living documentation',
            'Use the ROPA for DSAR, DPIA, breach response, and audit',
          ],
          keyTakeaways: [
            'A ROPA documents every processing activity — purpose, lawful basis, data categories, recipients, retention, transfers.',
            'GDPR Article 30 requires ROPA; DPDPA does not, but Section 8 accountability effectively requires one.',
            'A typical mid-size organisation has 50–200 processing activities to document.',
            'The ROPA is the master artefact — feeds DSAR, DPIA, breach response, vendor management, audit.',
            'ROPA should be reviewed quarterly; updated on any new processing activity.',
          ],
          sections: [
            {
              id: 'sec-1',
              title: 'The ROPA Template',
              content: [
                {
                  type: 'paragraph',
                  content:
                    'A ROPA is a structured register with one row per processing activity. Each row has the following fields, adapted from GDPR Article 30 with DPDPA-specific additions:',
                },
                {
                  type: 'table',
                  headers: ['Field', 'Description', 'Example'],
                  rows: [
                    ['Activity ID', 'Unique identifier', 'PA-2024-001'],
                    ['Activity Name', 'Descriptive name', 'Customer order processing'],
                    ['Purpose', 'Why the activity is performed', 'Process customer orders and deliver products'],
                    ['Lawful Basis', 'DPDPA Section 7 basis', 'Contractual necessity (7(2)(c))'],
                    ['Data Principal Categories', 'Whose data is processed', 'Customers'],
                    ['Data Categories', 'What data is processed', 'Name, address, phone, order details, payment token'],
                    ['Special Categories', 'Children\'s data, biometric, etc.', 'None'],
                    ['Collection Method', 'How data is collected', 'Web checkout form'],
                    ['Recipients', 'Internal teams + external processors', 'Operations team, Logistics (Delhivery), Payment (Razorpay)'],
                    ['Cross-Border Transfers', 'Countries involved', 'None (all in India)'],
                    ['Retention Period', 'How long kept', '7 years after order (per Companies Act)'],
                    ['Retention Justification', 'Legal/business reason', 'Tax and accounting records'],
                    ['Security Controls', 'Encryption, access, audit', 'AES-256 at rest, TLS 1.3 in transit, RBAC, full audit'],
                    ['DPIA Required', 'High-risk?', 'No'],
                    ['Owner', 'Business owner', 'Head of E-commerce'],
                    ['Review Date', 'Last reviewed', '2024-03-15'],
                  ],
                },
                {
                  type: 'callout',
                  content:
                    'The ROPA is sometimes called a "Record of Processing Activities", sometimes a "Data Processing Register", sometimes an "Article 30 Register" — they all refer to the same artefact.',
                  calloutType: 'note',
                },
              ],
            },
            {
              id: 'sec-2',
              title: 'Building a ROPA from Scratch',
              content: [
                {
                  type: 'paragraph',
                  content:
                    'Building a ROPA from scratch is a 4–8 week project for a mid-size organisation. The process: (1) identify processing activities through interviews with business owners; (2) document each activity with the 16 fields above; (3) validate with business owners; (4) cross-reference with the data map (every personal data location should map to a processing activity); (5) publish the ROPA to the DPO and governance team; (6) review quarterly.',
                },
                {
                  type: 'heading',
                  content: 'Identifying Processing Activities',
                },
                {
                  type: 'list',
                  content: 'Methods to identify processing activities',
                  items: [
                    'Interview business unit heads: "What do you do with personal data?"',
                    'Review the data map: each data location implies a processing activity.',
                    'Review external vendor contracts: each vendor relationship implies processing.',
                    'Review the website: each user-facing function (registration, checkout, support) is an activity.',
                    'Review internal processes: HR, payroll, IT support, marketing analytics.',
                    'Review legacy systems: an old CRM being decommissioned has its own activity.',
                  ],
                },
                {
                  type: 'example',
                  content:
                    'A Bengaluru fintech builds its ROPA. Processing activities identified: (1) customer onboarding and KYC; (2) transaction processing; (3) customer support; (4) marketing communications; (5) fraud detection; (6) regulatory reporting (to RBI); (7) HR and employee management; (8) vendor management; (9) IT security monitoring; (10) analytics and BI. Total: 47 activities across 7 business units. Took 6 weeks with 2 FTEs from privacy team + business stakeholder interviews.',
                },
              ],
            },
            {
              id: 'sec-3',
              title: 'Using the ROPA for Compliance Tasks',
              content: [
                {
                  type: 'paragraph',
                  content:
                    'The ROPA is the master artefact for data protection compliance. Every compliance task — DSAR, DPIA, breach response, vendor management, audit — can be performed faster and more accurately by starting from the ROPA.',
                },
                {
                  type: 'heading',
                  content: 'ROPA Use Cases',
                },
                {
                  type: 'table',
                  headers: ['Compliance Task', 'How ROPA Helps'],
                  rows: [
                    ['DSAR — Access', 'List all processing activities involving the user; aggregate data from each'],
                    ['DSAR — Erasure', 'Identify all retention policies that may need to be overridden'],
                    ['DPIA', 'Identify high-risk processing activities; flag for DPIA'],
                    ['Breach Response', 'Identify affected activities; trace recipients to notify'],
                    ['Vendor Management', 'List all external recipients per activity; trigger DPA review'],
                    ['Cross-Border Transfer', 'Identify all activities involving foreign transfers'],
                    ['Audit', 'Demonstrate accountability to the Data Protection Board'],
                    ['Policy Updates', 'Identify activities affected by policy changes'],
                  ],
                },
                {
                  type: 'callout',
                  content:
                    'The single most useful question to ask during any data protection task: "Show me the ROPA entry for this activity." If the entry exists and is current, the task is 50% complete. If not, the task starts from scratch.',
                  calloutType: 'tip',
                },
              ],
            },
            {
              id: 'sec-4',
              title: 'Maintaining the ROPA Over Time',
              content: [
                {
                  type: 'paragraph',
                  content:
                    'The ROPA must be a living document. New processing activities arise constantly — new products, new vendors, new marketing campaigns, new analytics tools. Without a maintenance process, the ROPA becomes stale within months.',
                },
                {
                  type: 'heading',
                  content: 'ROPA Maintenance Triggers',
                },
                {
                  type: 'list',
                  content: 'Events that should trigger ROPA update',
                  items: [
                    'New product or feature launch — privacy review includes ROPA update.',
                    'New vendor onboarding — DPA execution includes ROPA entry.',
                    'Change in retention policy — affected activities updated.',
                    'Cross-border transfer change — new destination country added.',
                    'Annual review — full review of all entries by business owners.',
                    'Regulatory change — new sectoral rule may require ROPA updates.',
                    'DSAR or breach — post-incident review may reveal gaps in ROPA.',
                  ],
                },
                {
                  type: 'example',
                  content:
                    'A Mumbai insurance company maintains its ROPA on a Confluence wiki page, with each processing activity on a separate page linked from the master ROPA. The DPO reviews quarterly; each business unit head reviews their activities annually and signs off. New activities are added through a privacy review process — any new product or vendor triggers a privacy assessment that includes ROPA entry creation. The ROPA was last reviewed in March 2024, with 89 activities documented and signed off.',
                },
              ],
            },
          ],
          glossary: [
            { term: 'ROPA', definition: 'Record of Processing Activities — a structured register documenting every processing activity with purpose, lawful basis, data categories, recipients, retention, and security controls.' },
            { term: 'Processing Activity', definition: 'A discrete operation or set of operations performed on personal data — e.g., "customer order processing", "marketing communications".' },
            { term: 'GDPR Article 30', definition: 'The GDPR provision requiring Controllers and Processors to maintain records of processing activities — the legal basis for ROPA in the EU.' },
          ],
          references: [
            { title: 'GDPR Article 30 — Records of Processing Activities', source: 'European Union', year: '2016' },
            { title: 'IAPP ROPA Template', source: 'International Association of Privacy Professionals', year: '2024' },
            { title: 'DPDPA 2023 Section 8 — General Obligations', source: 'Government of India', year: '2023' },
          ],
        },

        // -------- LESSON 5 --------
        {
          id: 5,
          title: 'Data Flow Diagrams and Architecture Review',
          duration: '20 min',
          type: 'exercise',
          description:
            'How to draw data flow diagrams (DFDs) showing how personal data moves through systems, and how to conduct architecture reviews to identify privacy risks.',
          content:
            'A Data Flow Diagram (DFD) is a visual representation of how personal data moves through an organisation\'s systems — from collection through processing to deletion. DFDs are essential for privacy impact assessments, breach response, and architecture review. This lesson covers how to draw DFDs and conduct architecture reviews for privacy.',
          learningObjectives: [
            'Draw a Level 0 and Level 1 data flow diagram',
            'Identify privacy risks from DFD analysis',
            'Conduct structured architecture reviews',
            'Use DFDs in DPIA and breach response',
          ],
          keyTakeaways: [
            'A DFD shows data sources, processors, stores, and sinks — visually.',
            'Level 0 shows high-level flows; Level 1 drills into specific processes.',
            'Privacy risks are often visible in DFDs — unnecessary data flows, foreign transfers, unencrypted links.',
            'Architecture review should include privacy as a first-class concern, not an afterthought.',
            'DFDs are critical for breach response — they show what data was affected and where.',
          ],
          sections: [
            {
              id: 'sec-1',
              title: 'DFD Levels and Notation',
              content: [
                {
                  type: 'paragraph',
                  content:
                    'Data Flow Diagrams come in levels. Level 0 (Context Diagram) shows the system as a single process with external entities. Level 1 decomposes the system into major sub-processes. Level 2 decomposes further into detailed sub-processes. For privacy, Level 0 and Level 1 are typically sufficient. Standard notation: rectangles for external entities, circles or rounded rectangles for processes, open rectangles for data stores, arrows for data flows.',
                },
                {
                  type: 'heading',
                  content: 'DFD Notation',
                },
                {
                  type: 'list',
                  content: 'DFD notation elements',
                  items: [
                    'External Entity (rectangle): source or sink of data outside the system — e.g., customer, third-party vendor.',
                    'Process (circle or rounded rectangle): transformation of data — e.g., "validate KYC", "send email".',
                    'Data Store (open rectangle): persistent storage — e.g., "Customer Database".',
                    'Data Flow (arrow): movement of data with a label describing what flows.',
                    'Trust Boundary (dashed line): boundary between trusted and untrusted zones — e.g., between the application and the public internet.',
                  ],
                },
                {
                  type: 'callout',
                  content:
                    'Privacy-relevant annotations to add to DFDs: (1) data classification tier on each flow; (2) cross-border transfer flag; (3) encryption status; (4) lawful basis; (5) retention. These transform a basic DFD into a privacy-aware architecture diagram.',
                  calloutType: 'tip',
                },
              ],
            },
            {
              id: 'sec-2',
              title: 'Drawing a Level 1 DFD — Worked Example',
              content: [
                {
                  type: 'paragraph',
                  content:
                    'Let us draw a Level 1 DFD for a typical Indian e-commerce checkout flow. The system processes customer personal data through order placement, payment, and delivery.',
                },
                {
                  type: 'heading',
                  content: 'External Entities',
                },
                {
                  type: 'list',
                  content: 'External entities in the e-commerce checkout DFD',
                  items: [
                    'Customer (provides personal data via web/app)',
                    'Payment Gateway (Razorpay — receives payment data)',
                    'Logistics Provider (Delhivery — receives delivery address)',
                    'Card Network (Visa/Mastercard — receives tokenised card data)',
                  ],
                },
                {
                  type: 'heading',
                  content: 'Processes',
                },
                {
                  type: 'list',
                  content: 'Processes in the e-commerce checkout DFD',
                  items: [
                    'Process Order (receives customer data, validates, stores order)',
                    'Process Payment (tokenises card, calls payment gateway)',
                    'Schedule Delivery (transmits address to logistics)',
                    'Send Confirmation (sends email/SMS)',
                  ],
                },
                {
                  type: 'heading',
                  content: 'Data Stores',
                },
                {
                  type: 'list',
                  content: 'Data stores in the e-commerce checkout DFD',
                  items: [
                    'Customer Database (stores customer profile — Confidential)',
                    'Order Database (stores orders — Confidential)',
                    'Payment Vault (stores tokenised cards — Restricted)',
                    'Audit Log (stores access events — Confidential)',
                  ],
                },
                {
                  type: 'example',
                  content:
                    'The Level 1 DFD shows: Customer → [Process Order] → Customer Database (Personal Data flow); [Process Order] → [Process Payment] → Payment Gateway (Token Data flow); [Process Order] → [Schedule Delivery] → Logistics Provider (Address Data flow). Each flow annotated with classification (Confidential), lawful basis (Contractual), and encryption status (TLS 1.3). The diagram reveals that address data flows to Delhivery without contractual safeguards in place — a gap to be remediated.',
                },
              ],
            },
            {
              id: 'sec-3',
              title: 'Privacy Architecture Review',
              content: [
                {
                  type: 'paragraph',
                  content:
                    'A privacy architecture review examines a system\'s DFD and design documents to identify privacy risks. The review should be conducted at design phase (before implementation) and at major changes (before deployment of new features). The output is a Privacy Architecture Review Report with findings and remediation recommendations.',
                },
                {
                  type: 'heading',
                  content: 'Privacy Architecture Review Checklist',
                },
                {
                  type: 'list',
                  content: 'Privacy architecture review checklist',
                  items: [
                    'Data minimisation: is each data element necessary? Is collection minimised?',
                    'Purpose limitation: is each data element used only for stated purpose?',
                    'Lawful basis: is the lawful basis (consent / contractual / legal) clear?',
                    'Storage location: where is data stored? Is localisation required (RBI / IRDAI / SEBI)?',
                    'Encryption: is data encrypted at rest (AES-256)? In transit (TLS 1.3)?',
                    'Access control: who can access? Is access least-privilege? Audited?',
                    'Retention: how long is data kept? Is deletion automated?',
                    'Cross-border transfer: any foreign transfers? Section 16 contingency?',
                    'Sub-processors: are all third parties identified? DPAs in place?',
                    'Breach response: how would a breach be detected and contained?',
                    'DSAR: how would DSAR requests be fulfilled for this system?',
                    'Children\'s data: is verification of age in place? Parental consent?',
                  ],
                },
                {
                  type: 'callout',
                  content:
                    'The privacy architecture review should be a gate before deployment — no new feature goes live without a passed review. This is the single most effective control for embedding Privacy by Design.',
                  calloutType: 'important',
                },
              ],
            },
            {
              id: 'sec-4',
              title: 'Using DFDs in DPIA and Breach Response',
              content: [
                {
                  type: 'paragraph',
                  content:
                    'DFDs are essential inputs to DPIA and breach response. In DPIA, the DFD helps identify risks — unnecessary flows, unencrypted storage, missing safeguards. In breach response, the DFD shows what data was affected and where it might have leaked.',
                },
                {
                  type: 'heading',
                  content: 'DPIA Use of DFD',
                },
                {
                  type: 'paragraph',
                  content:
                    'During a DPIA, the analyst reviews the DFD for each risk: (1) Collection — is the data minimised?; (2) Storage — is it encrypted? Localised?; (3) Processing — is purpose limited?; (4) Sharing — are DPAs in place?; (5) Retention — is deletion automated?; (6) Deletion — is it secure? Findings are recorded with severity and remediation plan.',
                },
                {
                  type: 'heading',
                  content: 'Breach Response Use of DFD',
                },
                {
                  type: 'paragraph',
                  content:
                    'When a breach occurs, the DFD is the first thing to consult. The DFD shows: (1) What personal data the affected system held; (2) Where the data could have leaked (external entities, downstream systems); (3) What recipients need notification (Data Principals, Data Protection Board, sectoral regulators); (4) What countermeasures to apply (revoke credentials, rotate keys).',
                },
                {
                  type: 'example',
                  content:
                    'An Indian SaaS company suffers a breach in its customer support system. The DPD shows the support system stores customer name, email, phone, and last 4 orders. The data flows to Zendesk (third-party support tool, EU region). Within 30 minutes of detection, the company uses the DPD to: (1) confirm no Restricted data was breached; (2) notify Zendesk to check for breach in their EU infrastructure; (3) prepare customer notification; (4) notify the Data Protection Board within 72 hours. Without the DPD, this assessment would have taken hours or days.',
                },
              ],
            },
          ],
          glossary: [
            { term: 'Data Flow Diagram (DFD)', definition: 'A visual representation of how data moves through a system, showing external entities, processes, data stores, and flows.' },
            { term: 'Level 0 DFD', definition: 'A context diagram showing the system as a single process with external entities — the highest-level view.' },
            { term: 'Level 1 DFD', definition: 'A decomposition of the Level 0 system into major sub-processes, showing internal data stores and flows.' },
            { term: 'Privacy Architecture Review', definition: 'A structured review of a system\'s design and DFD to identify privacy risks, conducted before deployment and at major changes.' },
          ],
          references: [
            { title: 'NIST SP 800-160 — Systems Security Engineering', source: 'National Institute of Standards and Technology', year: '2018' },
            { title: 'OWASP Threat Modeling Cheat Sheet', source: 'Open Web Application Security Project', year: '2024' },
            { title: 'LINDDUN Privacy Threat Modeling Methodology', source: 'LINDDUN Community', year: '2024' },
          ],
        },
      ],
    },

    // ============================================================
    // CHAPTER 2: DATA LIFECYCLE MANAGEMENT
    // ============================================================
    {
      id: 2,
      title: 'Data Lifecycle Management',
      lessons: [
        // -------- LESSON 6 --------
        {
          id: 6,
          title: 'Data Collection Principles and Purpose Limitation',
          duration: '20 min',
          type: 'video',
          description:
            'The principles governing data collection under DPDPA Section 7 and Section 8 — data minimisation, purpose specification, purpose limitation, and the collection notice requirements.',
          content:
            'Data collection is the start of the data lifecycle. How data is collected determines whether the entire downstream processing will be compliant. This lesson covers the DPDPA principles governing collection: data minimisation, purpose specification, purpose limitation, and the notice requirements. Violations at the collection stage cannot be remediated later — the data is already collected.',
          learningObjectives: [
            'Apply data minimisation principles at collection',
            'Specify and document collection purposes',
            'Enforce purpose limitation in downstream processing',
            'Provide compliant collection notices',
          ],
          keyTakeaways: [
            'Data minimisation (Section 8(2)) requires collecting only what is necessary for the stated purpose.',
            'Purpose must be specified clearly at collection — vague purposes like "improving services" are not compliant.',
            'Purpose limitation prohibits using collected data for new purposes without fresh consent.',
            'Collection notice must be clear, plain language, available in multiple Indian languages.',
            'Collection forms should default to minimum data — opt-in for additional data, not opt-out.',
          ],
          sections: [
            {
              id: 'sec-1',
              title: 'Data Minimisation under Section 8(2)',
              content: [
                {
                  type: 'paragraph',
                  content:
                    'DPDPA Section 8(2) requires the Data Fiduciary to collect only such personal data as is necessary for the specified purpose and to not retain it beyond that purpose. This is the data minimisation principle — collect the minimum necessary, retain the minimum necessary. The principle applies at both collection (do not collect what is not needed) and retention (delete when no longer needed).',
                },
                {
                  type: 'heading',
                  content: 'The Three Pillars of Data Minimisation',
                },
                {
                  type: 'list',
                  content: 'Three pillars of data minimisation',
                  items: [
                    'Necessity: each data element must be necessary for the stated purpose.',
                    'Adequacy: data collected must be adequate (sufficient) for the purpose, but not more.',
                    'Relevance: each data element must be relevant to the stated purpose.',
                  ],
                },
                {
                  type: 'callout',
                  content:
                    'A common minimisation failure: collecting date of birth when only age verification is needed. Date of birth reveals more (full DOB) than necessary; an age band (e.g., 18–24) or boolean (over 18) is sufficient.',
                  calloutType: 'warning',
                },
              ],
            },
            {
              id: 'sec-2',
              title: 'Purpose Specification and Limitation',
              content: [
                {
                  type: 'paragraph',
                  content:
                    'DPDPA Section 8(2) requires the purpose to be specified at collection. The purpose must be specific, explicit, and lawful — vague purposes like "improving user experience" or "business operations" are not compliant. Once specified, the data cannot be used for any new purpose without fresh consent under Section 7.',
                },
                {
                  type: 'heading',
                  content: 'Purpose Specification Test',
                },
                {
                  type: 'list',
                  content: 'Test for a compliant purpose specification',
                  items: [
                    'Specific: the purpose is detailed enough that a Data Principal can understand what will happen to their data.',
                    'Explicit: the purpose is stated in clear language, not implied.',
                    'Lawful: the purpose is not illegal or against public policy.',
                    'Limited: the purpose is narrow enough that the data minimisation principle can be applied.',
                    'Documented: the purpose is recorded in the ROPA and consent record.',
                  ],
                },
                {
                  type: 'example',
                  content:
                    'A compliant purpose: "To process your order, deliver the product, and provide customer support for this transaction." This is specific, explicit, lawful, limited, and can be documented. A non-compliant purpose: "To improve our services and provide a better user experience." This is vague — what services? What does "improve" mean? The Data Principal cannot meaningfully consent.',
                },
              ],
            },
            {
              id: 'sec-3',
              title: 'Collection Notice Requirements',
              content: [
                {
                  type: 'paragraph',
                  content:
                    'DPDPA Section 8(4) requires the Data Fiduciary to provide a clear, plain-language notice to the Data Principal at the time of collection. The notice must describe: (1) the personal data to be collected; (2) the purpose of processing; (3) the manner of processing; (4) the rights of the Data Principal; (5) the grievance redressal mechanism. The notice should be available in multiple Indian languages.',
                },
                {
                  type: 'heading',
                  content: 'Notice Content Checklist',
                },
                {
                  type: 'list',
                  content: 'Collection notice content checklist',
                  items: [
                    'Identity and contact of the Data Fiduciary',
                    'Identity and contact of the DPO / Grievance Officer',
                    'Categories of personal data to be collected',
                    'Purpose of processing for each category',
                    'Lawful basis (consent / contractual / legal)',
                    'Recipients of the data (third parties, processors)',
                    'Cross-border transfers (if any)',
                    'Retention period',
                    'Rights of the Data Principal (access, correct, erase, withdraw consent)',
                    'How to exercise rights (DSAR process)',
                    'Grievance redressal mechanism (timelines, escalation)',
                    'Consequences of not providing the data',
                  ],
                },
                {
                  type: 'callout',
                  content:
                    'The notice must be available in English and at least one Indian language of the Data Principal\'s choice. For pan-Indian services, this typically means Hindi plus the major regional languages (Tamil, Telugu, Kannada, Malayalam, Marathi, Bengali, Gujarati, Punjabi).',
                  calloutType: 'tip',
                },
              ],
            },
            {
              id: 'sec-4',
              title: 'Collection Form Design',
              content: [
                {
                  type: 'paragraph',
                  content:
                    'Collection form design enforces data minimisation. The form should have only fields necessary for the stated purpose, with optional fields clearly marked. Mandatory fields must be justified. Default values should be privacy-protective (no pre-checked boxes for marketing consent).',
                },
                {
                  type: 'heading',
                  content: 'Form Design Best Practices',
                },
                {
                  type: 'list',
                  content: 'Collection form design best practices',
                  items: [
                    'Mandatory fields limited to those strictly necessary — others optional.',
                    'Pre-checked consent boxes are prohibited — all opt-ins must be unchecked by default.',
                    'Granular consent checkboxes — separate for marketing, analytics, third-party sharing.',
                    'Purpose stated next to each optional field: "We collect this to..."',
                    'Plain language — no legal jargon in field labels.',
                    'Accessibility — forms usable with screen readers, keyboard navigation.',
                    'Mobile-first — most Indian users access via mobile.',
                    'Multilingual — form available in multiple Indian languages.',
                  ],
                },
                {
                  type: 'example',
                  content:
                    'A compliant checkout form: Name (mandatory), Email (mandatory), Phone (mandatory), Shipping Address (mandatory), Payment Method (mandatory). Optional: Marketing emails (unchecked checkbox with purpose stated). Optional: Save card for future (unchecked). No request for date of birth (not needed for checkout). No request for gender (not needed). No request for Aadhaar (not needed; prohibited for private entities).',
                },
              ],
            },
          ],
          glossary: [
            { term: 'Data Minimisation', definition: 'The principle (DPDPA Section 8(2)) requiring collection of only personal data necessary for the specified purpose, and retention only as long as needed.' },
            { term: 'Purpose Specification', definition: 'The requirement to specify a clear, explicit, lawful purpose at the time of data collection.' },
            { term: 'Purpose Limitation', definition: 'The principle prohibiting use of collected data for new purposes without fresh consent under Section 7.' },
            { term: 'Collection Notice', definition: 'A clear, plain-language notice (DPDPA Section 8(4)) provided to the Data Principal at the time of collection, describing data, purpose, rights, and grievance mechanism.' },
          ],
          references: [
            { title: 'DPDPA 2023 Sections 7, 8(2), 8(4)', source: 'Government of India', year: '2023' },
            { title: 'GDPR Article 5 — Principles Relating to Processing', source: 'European Union', year: '2016' },
            { title: 'IAPP Notice and Transparency Toolkit', source: 'International Association of Privacy Professionals', year: '2024' },
          ],
        },

        // -------- LESSON 7 --------
        {
          id: 7,
          title: 'Data Storage Architecture: Hot, Cold, and Archive Tiers',
          duration: '22 min',
          type: 'video',
          description:
            'How to architect data storage across hot, cold, and archive tiers — balancing cost, performance, and DPDPA compliance. Includes encryption, replication, and access controls per tier.',
          content:
            'Data storage is the largest ongoing cost in any data programme and the foundation of DPDPA Section 8(5) "reasonable security safeguards". Tiered storage — hot for active data, cold for less-frequently accessed data, archive for long-term retention — balances cost and access. This lesson covers the storage tiers, encryption requirements per tier, replication strategies, and cost optimisation.',
          learningObjectives: [
            'Design a 3-tier storage architecture',
            'Apply encryption per tier (AES-256, KMS-managed)',
            'Implement replication and disaster recovery',
            'Optimise cost while maintaining compliance',
          ],
          keyTakeaways: [
            'Hot tier: frequently accessed data — high performance, higher cost (SSD-backed).',
            'Cold tier: infrequently accessed data — lower performance, lower cost (HDD-backed).',
            'Archive tier: long-term retention — lowest performance, lowest cost (tape or cloud archive).',
            'Encryption is required at all tiers — never store personal data unencrypted, regardless of tier.',
            'Replication strategy should match the tier — synchronous for hot, asynchronous for cold, scheduled for archive.',
          ],
          sections: [
            {
              id: 'sec-1',
              title: 'The Three Storage Tiers',
              content: [
                {
                  type: 'paragraph',
                  content:
                    'Modern storage architecture uses three tiers based on access frequency. The hot tier holds frequently accessed data (databases, active sessions) — typically SSD-backed, replicated synchronously. The cold tier holds infrequently accessed data (historical records, completed transactions) — typically HDD-backed or cloud object storage with lower redundancy. The archive tier holds long-term retention data (compliance archives, audit logs) — typically tape or cloud archive classes with retrieval measured in hours.',
                },
                {
                  type: 'table',
                  headers: ['Tier', 'Access Frequency', 'Latency', 'Storage Medium', 'Cost (per GB/month)'],
                  rows: [
                    ['Hot', 'Daily or more', 'Milliseconds', 'SSD', '$0.10–0.30'],
                    ['Warm', 'Weekly to monthly', '100ms', 'HDD / Standard Object', '$0.023–0.10'],
                    ['Cold', 'Quarterly or less', 'Seconds', 'Cloud Infrequent Access', '$0.01–0.025'],
                    ['Archive', 'Yearly or never', 'Hours', 'Tape / Cloud Archive', '$0.001–0.005'],
                  ],
                },
                {
                  type: 'callout',
                  content:
                    'Cloud providers offer managed tiering — AWS S3 Intelligent-Tiering automatically moves objects between tiers based on access patterns. Use this to avoid manual tiering decisions for unpredictable workloads.',
                  calloutType: 'tip',
                },
              ],
            },
            {
              id: 'sec-2',
              title: 'Encryption Per Tier',
              content: [
                {
                  type: 'paragraph',
                  content:
                    'Encryption is mandatory at all tiers — DPDPA Section 8(5) "reasonable security safeguards" requires encryption of personal data at rest. The encryption mechanism varies by tier: hot tier uses database-level encryption (transparent data encryption, TDE); cold and archive tiers use object-level encryption (S3 server-side encryption with KMS-managed keys). All tiers use TLS 1.3 for data in transit.',
                },
                {
                  type: 'heading',
                  content: 'Encryption Approach by Tier',
                },
                {
                  type: 'table',
                  headers: ['Tier', 'At Rest Encryption', 'Key Management', 'In Transit'],
                  rows: [
                    ['Hot (Database)', 'TDE with AES-256-GCM', 'KMS-managed DEK, KEK in HSM', 'TLS 1.3'],
                    ['Warm (Object Standard)', 'S3 SSE-KMS (AES-256)', 'KMS-managed per-object keys', 'TLS 1.3'],
                    ['Cold (Infrequent Access)', 'S3 SSE-KMS (AES-256)', 'KMS-managed per-object keys', 'TLS 1.3'],
                    ['Archive (Glacier)', 'Glacier SSE-KMS (AES-256)', 'KMS-managed per-object keys', 'TLS 1.3'],
                  ],
                },
                {
                  type: 'callout',
                  content:
                    'Never store encryption keys alongside the encrypted data — use KMS / HSM for key storage. The "encryption with key in same database" pattern is not encryption at all — a database breach exposes both data and keys.',
                  calloutType: 'warning',
                },
              ],
            },
            {
              id: 'sec-3',
              title: 'Replication and Disaster Recovery',
              content: [
                {
                  type: 'paragraph',
                  content:
                    'Replication strategy must match the tier and the recovery requirements. Hot tier requires synchronous replication to a DR site (RPO = 0, RTO = minutes). Cold tier typically uses asynchronous replication (RPO = minutes to hours, RTO = hours). Archive tier uses scheduled replication or tape rotation (RPO = days, RTO = days).',
                },
                {
                  type: 'heading',
                  content: 'Recovery Objectives by Tier',
                },
                {
                  type: 'table',
                  headers: ['Tier', 'RPO (Recovery Point Objective)', 'RTO (Recovery Time Objective)', 'Replication Method'],
                  rows: [
                    ['Hot', '0 (no data loss)', '15 minutes', 'Synchronous (multi-AZ)'],
                    ['Warm', '15 minutes', '1 hour', 'Asynchronous (cross-region)'],
                    ['Cold', '1 hour', '4 hours', 'Asynchronous (cross-region)'],
                    ['Archive', '24 hours', '72 hours', 'Scheduled (cross-region)'],
                  ],
                },
                {
                  type: 'paragraph',
                  content:
                    'For Indian organisations, replication should be in-country (e.g., AWS Mumbai to AWS Hyderabad) to comply with sectoral localisation rules (RBI, IRDAI, SEBI). Cross-border replication for DR is permitted under DPDPA Section 16 (if not blacklisted) but is overridden by sectoral rules for payment, insurance, and securities data.',
                },
              ],
            },
            {
              id: 'sec-4',
              title: 'Cost Optimisation Through Tiering',
              content: [
                {
                  type: 'paragraph',
                  content:
                    'Proper tiering can reduce storage costs by 60–80% compared to all-hot storage. The pattern: implement automated tiering policies that move data between tiers based on age and access patterns. New data starts in hot tier; after 30 days of no access, moves to warm; after 90 days, moves to cold; after 1 year, moves to archive.',
                },
                {
                  type: 'heading',
                  content: 'Automated Tiering Policy Example',
                },
                {
                  type: 'list',
                  content: 'Automated tiering policy example',
                  items: [
                    '0–30 days: Hot tier (SSD, synchronous replication).',
                    '31–90 days: Warm tier (HDD or Standard Object, asynchronous replication).',
                    '91–365 days: Cold tier (Infrequent Access, asynchronous replication).',
                    '1–7 years: Archive tier (Glacier or tape, scheduled replication).',
                    '7+ years: Permanent deletion (or legal hold if required).',
                  ],
                },
                {
                  type: 'example',
                  content:
                    'A Mumbai fintech with 50 TB of customer transaction data implements automated tiering. Before: 50 TB in SSD-backed hot storage at $0.20/GB/month = $10,000/month. After tiering: 5 TB hot ($1,000), 10 TB warm ($230), 15 TB cold ($375), 20 TB archive ($100) = $1,705/month. Savings: 83%. Access performance for active data unchanged; archive data retrieval takes 1–5 hours — acceptable for compliance and audit access.',
                },
                {
                  type: 'callout',
                  content:
                    'Always validate that the tiering policy complies with retention requirements. Personal data must not be retained longer than the stated retention period — automated tiering that "forgets" to delete after retention is a DPDPA violation.',
                  calloutType: 'important',
                },
              ],
            },
          ],
          glossary: [
            { term: 'Hot Tier', definition: 'Storage tier for frequently accessed data — SSD-backed with synchronous replication, highest performance and cost.' },
            { term: 'Cold Tier', definition: 'Storage tier for infrequently accessed data — HDD or cloud Infrequent Access, lower performance and cost.' },
            { term: 'Archive Tier', definition: 'Storage tier for long-term retention — tape or cloud Glacier, lowest cost, retrieval measured in hours.' },
            { term: 'RPO (Recovery Point Objective)', definition: 'The maximum acceptable data loss in a disaster — 0 means no data loss, hours means losing the last N hours of data.' },
            { term: 'RTO (Recovery Time Objective)', definition: 'The maximum acceptable downtime in a disaster — minutes for critical systems, hours for less critical.' },
          ],
          references: [
            { title: 'AWS Storage Tiering Best Practices', source: 'Amazon Web Services', year: '2024' },
            { title: 'Azure Storage Tiering', source: 'Microsoft', year: '2024' },
            { title: 'NIST SP 800-209 — Storage Security', source: 'National Institute of Standards and Technology', year: '2020' },
          ],
        },

        // -------- LESSON 8 --------
        {
          id: 8,
          title: 'Data Retention Policies and Automation',
          duration: '22 min',
          type: 'reading',
          description:
            'How to design and automate data retention policies — including legal hold, sectoral retention requirements, and the operational challenges of deleting data across distributed systems.',
          content:
            'Data retention is the policy that determines how long personal data is kept. DPDPA Section 8(7) requires data to be deleted "as soon as" the purpose is no longer served. Sectoral rules (Companies Act, IT Act, RBI, IRDAI, SEBI) impose specific retention periods. This lesson covers how to design retention policies, navigate conflicting requirements, and automate deletion.',
          learningObjectives: [
            'Design a retention schedule mapping data types to retention periods',
            'Navigate conflicts between DPDPA minimisation and sectoral retention rules',
            'Implement legal hold for litigation',
            'Automate retention enforcement',
          ],
          keyTakeaways: [
            'DPDPA Section 8(7) requires deletion when purpose is no longer served.',
            'Sectoral rules impose longer retention: Companies Act (8 years for accounting), RBI (10 years for payment records), IRDAI (life of policy + 5 years), SEBI (10 years for trade data).',
            'When rules conflict, the stricter (longer) retention applies — but document the conflict.',
            'Legal hold suspends retention — data under litigation hold must not be deleted even if retention expired.',
            'Automated retention enforcement is essential — manual deletion does not scale to millions of records.',
          ],
          sections: [
            {
              id: 'sec-1',
              title: 'The Retention Schedule',
              content: [
                {
                  type: 'paragraph',
                  content:
                    'A retention schedule is a structured document mapping each data type to its retention period, basis, and deletion method. The schedule is approved by the Data Governance Council and reviewed annually. It reconciles conflicting requirements across DPDPA, sectoral rules, and business needs.',
                },
                {
                  type: 'table',
                  headers: ['Data Type', 'Retention Period', 'Legal Basis', 'Deletion Method'],
                  rows: [
                    ['Customer order data', '7 years', 'Companies Act / Income Tax Act', 'Automated deletion cron job'],
                    ['Payment records', '10 years', 'RBI Payment Systems Act', 'Automated deletion + manual verification'],
                    ['KYC documents', '10 years after relationship ends', 'RBI KYC Master Directions', 'Secure deletion per NIST 800-88'],
                    ['Customer support tickets', '3 years after closure', 'Internal policy', 'Automated deletion'],
                    ['Marketing consent records', 'Life of consent + 3 years', 'DPDPA accountability', 'Automated deletion'],
                    ['Employee records', '7 years after exit', 'Companies Act / Labour Law', 'Secure deletion + verification'],
                    ['Audit logs', '7 years', 'IT Act / DPDPA accountability', 'Automated deletion'],
                    ['Insurance policy records', 'Policy life + 5 years', 'IRDAI Guidelines', 'Secure deletion'],
                    ['Securities trade data', '10 years', 'SEBI SECC Regulations', 'Secure deletion'],
                    ['Health records', 'Patient life + 5 years', 'ABDM Policy / Medical Council', 'Secure deletion'],
                  ],
                },
                {
                  type: 'callout',
                  content:
                    'Retention schedules should be conservative — when in doubt, retain longer (with appropriate safeguards) rather than delete prematurely. Premature deletion can lead to regulatory penalties; over-retention can lead to DPDPA Section 8(7) violation. The balance is documented rationale.',
                  calloutType: 'tip',
                },
              ],
            },
            {
              id: 'sec-2',
              title: 'Navigating Conflicting Requirements',
              content: [
                {
                  type: 'paragraph',
                  content:
                    'DPDPA Section 8(7) says delete when purpose is served. Sectoral rules say retain for X years. These can conflict — a 7-year-old customer order may have served its purpose (DPDPA says delete) but still be needed for tax audit (Companies Act says retain). The resolution: sectoral rules override DPDPA minimisation for legal retention — but only for the specific data covered by the rule.',
                },
                {
                  type: 'heading',
                  content: 'Conflict Resolution Principles',
                },
                {
                  type: 'list',
                  content: 'Conflict resolution principles for retention',
                  items: [
                    'Legal retention overrides DPDPA minimisation for the specific data covered.',
                    'DPDPA minimisation applies to data not subject to legal retention.',
                    'Document the legal basis for each retention period in the schedule.',
                    'Review annually — retention requirements change as laws are amended.',
                    'When in doubt, consult Legal — never delete data subject to potential litigation.',
                  ],
                },
                {
                  type: 'example',
                  content:
                    'An Indian fintech retains customer transaction data. DPDPA Section 8(7) suggests deletion when purpose (transaction processing) is served. But RBI requires 10-year retention for payment records. The resolution: the fintech retains transaction data for 10 years per RBI; after 10 years, data is deleted. For non-payment personal data (e.g., marketing preferences), DPDPA minimisation applies — deleted when consent is withdrawn.',
                },
              ],
            },
            {
              id: 'sec-3',
              title: 'Legal Hold',
              content: [
                {
                  type: 'paragraph',
                  content:
                    'Legal hold (also called "litigation hold") suspends retention for data subject to litigation, investigation, or regulatory inquiry. When a legal hold is issued, retention policies are suspended for the affected data — even if retention has expired, the data must be preserved. Legal hold is typically managed by the Legal team in coordination with the DPO.',
                },
                {
                  type: 'heading',
                  content: 'Legal Hold Workflow',
                },
                {
                  type: 'list',
                  content: 'Legal hold workflow',
                  items: [
                    'Step 1: Legal team issues hold notice with scope (data categories, time period, custodians).',
                    'Step 2: DPO and IT implement hold — flag affected data, suspend deletion jobs.',
                    'Step 3: Custodians notified — must preserve data on their devices.',
                    'Step 4: Data preserved until hold released (typically when litigation concludes).',
                    'Step 5: On release, retention policy resumes — data deleted per schedule.',
                  ],
                },
                {
                  type: 'callout',
                  content:
                    'Failure to preserve data under legal hold is "spoliation of evidence" — courts may impose sanctions, including adverse inference (assuming the destroyed data was harmful). Legal hold is a critical compliance obligation.',
                  calloutType: 'warning',
                },
              ],
            },
            {
              id: 'sec-4',
              title: 'Automating Retention Enforcement',
              content: [
                {
                  type: 'paragraph',
                  content:
                    'Manual retention enforcement does not scale — millions of records across dozens of systems cannot be deleted by hand. Automated retention enforcement uses scheduled jobs to identify data due for deletion and execute deletion per the schedule. The pattern: a nightly cron job queries each data store for records past retention, deletes them, and logs the action.',
                },
                {
                  type: 'heading',
                  content: 'Automated Deletion Architecture',
                },
                {
                  type: 'list',
                  content: 'Components of automated retention enforcement',
                  items: [
                    'Retention Policy Database: stores the retention schedule.',
                    'Deletion Scheduler: nightly job that queries for records due for deletion.',
                    'System Connectors: per-system deletion logic (SQL DELETE, S3 lifecycle rule, SaaS API).',
                    'Audit Log: records every deletion with timestamp, system, count, retention basis.',
                    'Exception Handler: flags deletion failures for manual review.',
                    'Legal Hold Check: queries active legal holds before deleting any record.',
                    'Verification: monthly reconciliation of records deleted vs. records due.',
                  ],
                },
                {
                  type: 'example',
                  content:
                    'A Bengaluru SaaS company implements automated retention enforcement. Nightly cron job: (1) queries customers table for customers inactive for 7+ years (Companies Act retention); (2) checks legal hold database — none active; (3) deletes the records; (4) logs deletion count and basis in audit log. In Q1 2024, the job deleted 12,000 customer records, freeing 200 GB of storage. Monthly reconciliation: 100% of records due were deleted — verified by independent audit.',
                },
                {
                  type: 'callout',
                  content:
                    'Backups must also be considered in retention — a record deleted from the primary database may still exist in backups. The pattern: backups roll off on a 30-day cycle, so deleted records disappear from backups within 30 days. Document this in the retention schedule.',
                  calloutType: 'tip',
                },
              ],
            },
          ],
          glossary: [
            { term: 'Retention Schedule', definition: 'A structured document mapping each data type to its retention period, legal basis, and deletion method.' },
            { term: 'Legal Hold', definition: 'A suspension of retention policies for data subject to litigation, investigation, or regulatory inquiry — data must be preserved until hold is released.' },
            { term: 'Spoliation of Evidence', definition: 'The destruction or alteration of evidence subject to legal hold — courts may impose sanctions including adverse inference.' },
            { term: 'Automated Retention Enforcement', definition: 'Scheduled jobs that identify records past retention and execute deletion per the retention schedule.' },
          ],
          references: [
            { title: 'DPDPA 2023 Section 8(7) — Data Retention', source: 'Government of India', year: '2023' },
            { title: 'Companies Act 2013 — Accounting Records Retention', source: 'Government of India', year: '2013' },
            { title: 'RBI KYC Master Directions', source: 'Reserve Bank of India', year: '2016' },
            { title: 'IRDAI Guidelines on Retention', source: 'IRDAI', year: '2017' },
          ],
        },

        // -------- LESSON 9 --------
        {
          id: 9,
          title: 'Secure Data Deletion: NIST SP 800-88',
          duration: '22 min',
          type: 'video',
          description:
            'How to delete data securely — NIST SP 800-88 Rev. 1 guidelines for media sanitisation, including clear, purge, and destroy operations for different storage media.',
          content:
            'Pressing "Delete" in a database does not actually destroy data — the bytes may remain on disk for years, recoverable by forensic tools. DPDPA Section 8(7) requires personal data to be deleted — and "deleted" means unrecoverable. NIST SP 800-88 Rev. 1 provides the authoritative guidance for secure media sanitisation. This lesson covers the three sanitisation operations — clear, purge, destroy — and how to apply them to different media types.',
          learningObjectives: [
            'Distinguish the three NIST sanitisation operations (clear, purge, destroy)',
            'Apply appropriate sanitisation to different media types (SSD, HDD, tape, cloud)',
            'Implement cryptographic erasure for cloud storage',
            'Document sanitisation for audit',
          ],
          keyTakeaways: [
            'NIST SP 800-88 defines three operations: Clear (logical), Purge (physical/crypto), Destroy (physical destruction).',
            'SSDs cannot be reliably cleared by overwrite — use cryptographic erasure (purge) or physical destruction.',
            'Cloud storage is sanitised through cryptographic erasure — destroying the encryption key.',
            'Each sanitisation must be documented with certificate of destruction for audit.',
            'Sanitisation should be verified — sample disks must be checked to confirm data is unrecoverable.',
          ],
          sections: [
            {
              id: 'sec-1',
              title: 'NIST SP 800-88 Three Operations',
              content: [
                {
                  type: 'paragraph',
                  content:
                    'NIST Special Publication 800-88 Revision 1 (Guidelines for Media Sanitization, 2014) defines three sanitisation operations. Clear: logical techniques that prevent data recovery using standard input/output commands — e.g., overwriting with zeros. Purge: physical or cryptographic techniques that make data recovery infeasible even with advanced lab techniques — e.g., cryptographic erasure, block erase, degaussing. Destroy: physical destruction that makes media unusable and data recovery infeasible — e.g., shredding, incineration, pulverising.',
                },
                {
                  type: 'table',
                  headers: ['Operation', 'Technique', 'Recoverability', 'Effort'],
                  rows: [
                    ['Clear', 'Logical overwrite (zeros, patterns)', 'Recoverable with advanced lab techniques', 'Low'],
                    ['Purge', 'Cryptographic erasure, block erase, degauss', 'Infeasible even in lab', 'Medium'],
                    ['Destroy', 'Shred, incinerate, pulverise', 'Media physically unusable', 'High'],
                  ],
                },
                {
                  type: 'callout',
                  content:
                    'For personal data subject to DPDPA Section 8(7) deletion, "Clear" is not sufficient — Purge or Destroy is required. The only exception: data that was already encrypted at rest with strong (AES-256) encryption — Clear may suffice if the key is also destroyed.',
                  calloutType: 'important',
                },
              ],
            },
            {
              id: 'sec-2',
              title: 'Sanitising Different Media Types',
              content: [
                {
                  type: 'paragraph',
                  content:
                    'Different storage media require different sanitisation techniques. HDDs can be cleared by overwrite (multiple passes for high-sensitivity data). SSDs cannot be reliably cleared by overwrite due to wear-levelling — use cryptographic erasure or block erase. Magnetic tapes use degaussing. Cloud storage uses cryptographic erasure (key destruction). Optical media (CDs, DVDs) require physical destruction.',
                },
                {
                  type: 'heading',
                  content: 'Sanitisation Matrix by Media Type',
                },
                {
                  type: 'table',
                  headers: ['Media', 'Clear', 'Purge', 'Destroy'],
                  rows: [
                    ['HDD', 'Single-pass overwrite', 'Multi-pass overwrite + degauss', 'Shred to <2mm particles'],
                    ['SSD', 'Not reliable', 'Block erase (ATA Secure Erase) + cryptographic erasure', 'Shred / incinerate'],
                    ['Magnetic tape', 'Not applicable', 'Degauss', 'Shred'],
                    ['Cloud object (S3)', 'Delete + 30-day version expiry', 'Cryptographic erasure (destroy KMS key)', 'N/A'],
                    ['Cloud database', 'DELETE + VACUUM', 'Drop table + revoke KMS key', 'N/A'],
                    ['Optical (CD/DVD)', 'Not applicable', 'Not applicable', 'Shred'],
                    ['Mobile device', 'Factory reset (not sufficient alone)', 'Factory reset + cryptographic erasure', 'Physical destruction'],
                  ],
                },
                {
                  type: 'example',
                  content:
                    'A Mumbai bank decommissions 500 enterprise HDDs after 5 years of use. Process: (1) Each HDD is cryptographically erased — the on-board encryption key is destroyed, rendering data unreadable; (2) Each HDD is then overwritten with NIST 800-88 patterns (Clear); (3) Sample of 5% of HDDs sent to a forensic lab for verification — no recoverable data found; (4) Each HDD physically shredded by a certified vendor; (5) Certificate of Destruction issued for each HDD, retained for audit.',
                },
              ],
            },
            {
              id: 'sec-3',
              title: 'Cryptographic Erasure for Cloud Storage',
              content: [
                {
                  type: 'paragraph',
                  content:
                    'Cloud storage cannot be physically destroyed — the data is on shared infrastructure. Cryptographic erasure is the cloud equivalent: the data was encrypted with a per-tenant key; destroying the key renders the data unreadable, even though the encrypted bytes may remain on disk. This is the standard approach for cloud data deletion.',
                },
                {
                  type: 'heading',
                  content: 'Cryptographic Erasure Workflow',
                },
                {
                  type: 'list',
                  content: 'Cryptographic erasure workflow for cloud storage',
                  items: [
                    'Step 1: Encrypt all personal data with a per-tenant or per-data-set key in KMS.',
                    'Step 2: Maintain key-to-data mapping in a key registry.',
                    'Step 3: On deletion request, identify the relevant key(s) in the registry.',
                    'Step 4: Delete the key from KMS — KMS uses HSM to securely destroy key material.',
                    'Step 5: Delete the encrypted ciphertext (optional — without the key, it is unreadable).',
                    'Step 6: Issue Certificate of Cryptographic Erasure, signed by KMS.',
                    'Step 7: Audit log records the key destruction with timestamp and operator.',
                  ],
                },
                {
                  type: 'callout',
                  content:
                    'Cryptographic erasure is fast (seconds vs. hours for overwrite), works on any media (including cloud), and is verifiable (the key is provably destroyed). It is the recommended approach for all encrypted data.',
                  calloutType: 'tip',
                },
              ],
            },
            {
              id: 'sec-4',
              title: 'Documentation and Verification',
              content: [
                {
                  type: 'paragraph',
                  content:
                    'Every sanitisation must be documented. The Certificate of Destruction (or Certificate of Sanitisation) records: media identifier, sanitisation operation performed, technique used, operator name, date, verification result. Certificates are retained for audit — typically for the longer of 3 years or the data retention period.',
                },
                {
                  type: 'heading',
                  content: 'Verification Methods',
                },
                {
                  type: 'list',
                  content: 'Sanitisation verification methods',
                  items: [
                    'Visual inspection: confirm media is physically destroyed (shredded, incinerated).',
                    'Read-back verification: attempt to read the media — should return zeros or errors.',
                    'Forensic sample: send 5% of media to a lab for advanced recovery attempt.',
                    'KMS attestation: KMS confirms key destruction with HSM-signed certificate.',
                    'Audit log review: ensure all sanitisation events are logged.',
                  ],
                },
                {
                  type: 'example',
                  content:
                    'A Bengaluru fintech implements secure deletion policy: (1) All personal data encrypted at rest with KMS-managed keys; (2) On retention expiry, cryptographic erasure performed (key destroyed); (3) Encrypted ciphertext deleted from S3; (4) For decommissioned on-prem HDDs, physical destruction by certified vendor (Sify, Iron Mountain India); (5) Certificates of Destruction retained in compliance archive for 7 years; (6) Annual audit by external auditor verifies deletion process and samples 1% of certificates for verification.',
                },
                {
                  type: 'callout',
                  content:
                    'For high-sensitivity data (Restricted tier), require both cryptographic erasure AND physical destruction — defence in depth. For Confidential tier, cryptographic erasure alone is sufficient. For Internal tier, simple deletion is sufficient.',
                  calloutType: 'note',
                },
              ],
            },
          ],
          glossary: [
            { term: 'NIST SP 800-88', definition: 'The NIST Special Publication 800-88 Revision 1 (2014) providing guidelines for media sanitisation — the authoritative reference for secure data deletion.' },
            { term: 'Clear', definition: 'A NIST sanitisation operation using logical techniques (overwrite) that prevent data recovery using standard I/O commands — recoverable with advanced lab techniques.' },
            { term: 'Purge', definition: 'A NIST sanitisation operation using physical or cryptographic techniques (cryptographic erasure, degauss, block erase) that make data recovery infeasible even with lab techniques.' },
            { term: 'Destroy', definition: 'A NIST sanitisation operation involving physical destruction (shred, incinerate, pulverise) that makes media unusable and data recovery infeasible.' },
            { term: 'Cryptographic Erasure', definition: 'A purge technique where data is encrypted with a per-tenant key; destroying the key renders the data unreadable, even if the encrypted bytes remain.' },
            { term: 'Certificate of Destruction', definition: 'A document certifying that media has been sanitised per a specified operation, signed by the operator and retained for audit.' },
          ],
          references: [
            { title: 'NIST SP 800-88 Rev. 1 — Guidelines for Media Sanitization', source: 'National Institute of Standards and Technology', year: '2014' },
            { title: 'ISO/IEC 27040 — Storage Security', source: 'International Organization for Standardization', year: '2015' },
            { title: 'DPDPA 2023 Section 8(7) — Data Erasure', source: 'Government of India', year: '2023' },
          ],
        },
      ],
    },

    // ============================================================
    // CHAPTER 3: DATA GOVERNANCE FRAMEWORK
    // ============================================================
    {
      id: 3,
      title: 'Data Governance Framework',
      lessons: [
        // -------- LESSON 10 --------
        {
          id: 10,
          title: 'The DAMA-DMBOK Framework',
          duration: '20 min',
          type: 'reading',
          description:
            'An introduction to the DAMA-DMBOK (Data Management Body of Knowledge) framework — the international standard for data governance, with its 11 knowledge areas and the wheel of data management functions.',
          content:
            'The DAMA-DMBOK (Data Management Body of Knowledge) is the international standard for data management and governance, published by DAMA International. The 2nd edition (2017) defines 11 knowledge areas that together cover the full scope of data management. This lesson covers the framework, the 11 knowledge areas, and how to apply DMBOK to structure a data governance function for DPDPA compliance.',
          learningObjectives: [
            'Recite the 11 DMBOK knowledge areas',
            'Map DMBOK areas to DPDPA Section 8 obligations',
            'Apply DMBOK to structure a data governance function',
            'Identify gaps in current data governance using DMBOK',
          ],
          keyTakeaways: [
            'DMBOK is the international standard for data management and governance.',
            'The 11 knowledge areas cover the full lifecycle from data governance to data ethics.',
            'DPDPA Section 8 obligations map cleanly to DMBOK areas — particularly data governance, security, and metadata.',
            'DMBOK is a framework, not a methodology — adapt it to your organisation\'s size and maturity.',
            'The DMBOK "wheel" visualises the relationships between knowledge areas, with Data Governance at the centre.',
          ],
          sections: [
            {
              id: 'sec-1',
              title: 'The 11 Knowledge Areas',
              content: [
                {
                  type: 'paragraph',
                  content:
                    'DAMA-DMBOK defines 11 knowledge areas, each covering a specific aspect of data management. Data Governance is at the centre — the orchestration function that coordinates the other 10 areas.',
                },
                {
                  type: 'list',
                  content: 'The 11 DMBOK knowledge areas',
                  items: [
                    '1. Data Governance: the orchestration function — strategy, policy, stewardship, metrics.',
                    '2. Data Architecture: the overall design — models, standards, blueprints.',
                    '3. Data Modelling and Design: conceptual, logical, physical models.',
                    '4. Data Storage and Operations: database administration, capacity, performance.',
                    '5. Data Security: access controls, encryption, audit, breach response.',
                    '6. Data Integration and Interoperability: ETL, APIs, message queues, data sharing.',
                    '7. Document and Content Management: unstructured data, records management.',
                    '8. Reference and Master Data: customer masters, product masters, hierarchies.',
                    '9. Data Warehousing and Business Intelligence: analytics, reporting, dashboards.',
                    '10. Metadata Management: business glossary, data dictionary, lineage.',
                    '11. Data Quality: profiling, cleansing, monitoring, remediation.',
                  ],
                },
                {
                  type: 'callout',
                  content:
                    'DMBOK also recognises Data Ethics as a cross-cutting concern — increasingly important for DPDPA compliance and AI governance.',
                  calloutType: 'note',
                },
              ],
            },
            {
              id: 'sec-2',
              title: 'Mapping DMBOK to DPDPA Section 8',
              content: [
                {
                  type: 'paragraph',
                  content:
                    'DPDPA Section 8 general obligations map cleanly to DMBOK areas. The mapping shows that DPDPA compliance is not a separate function — it is an integral part of good data management.',
                },
                {
                  type: 'table',
                  headers: ['DPDPA Obligation', 'Section', 'DMBOK Knowledge Area'],
                  rows: [
                    ['Accountability for compliance', '8(1)', 'Data Governance'],
                    ['Data minimisation and purpose', '8(2)', 'Data Governance, Data Architecture'],
                    ['Processor accountability', '8(3)', 'Data Governance, Data Security'],
                    ['Notice and transparency', '8(4)', 'Data Governance, Metadata'],
                    ['Reasonable security safeguards', '8(5)', 'Data Security'],
                    ['Breach notification', '8(6)', 'Data Security'],
                    ['Data retention and deletion', '8(7)', 'Data Storage, Document Management'],
                    ['Data Principal rights', '11', 'Data Governance, Data Quality'],
                    ['Grievance redressal', '13', 'Data Governance'],
                  ],
                },
              ],
            },
            {
              id: 'sec-3',
              title: 'Applying DMBOK to Structure the Data Governance Function',
              content: [
                {
                  type: 'paragraph',
                  content:
                    'A typical data governance function organised along DMBOK has the following structure: a Data Governance Council (chaired by the CDO or DPO) with representatives from each business unit; a Data Governance Office (DGO) with full-time stewards; and a network of Data Stewards in each business unit. The DGO coordinates the 10 operational knowledge areas through working groups.',
                },
                {
                  type: 'heading',
                  content: 'Functional Structure',
                },
                {
                  type: 'list',
                  content: 'Data governance functional structure (DMBOK-aligned)',
                  items: [
                    'Data Governance Council: strategy, policy approval, issue escalation.',
                    'Data Governance Office (DGO): operational coordination, training, metrics.',
                    'Data Architecture Working Group: data models, standards, technology.',
                    'Data Security Working Group: access controls, encryption, breach response.',
                    'Data Quality Working Group: profiling, monitoring, remediation.',
                    'Metadata Working Group: glossary, dictionary, lineage.',
                    'Data Stewards Network: distributed across business units, first-line execution.',
                  ],
                },
                {
                  type: 'callout',
                  content:
                    'For smaller organisations, the working groups can be combined or virtual. The minimum viable structure is: a Data Governance Council (quarterly), a Data Governance Office (1–2 FTEs), and Data Stewards in each major business unit (part-time).',
                  calloutType: 'tip',
                },
              ],
            },
            {
              id: 'sec-4',
              title: 'Maturity Assessment Using DMBOK',
              content: [
                {
                  type: 'paragraph',
                  content:
                    'DMBOK defines a maturity model with 5 levels — Initial, Developing, Defined, Managed, Optimising. Most Indian organisations are at Level 1 or 2 — ad-hoc or developing. The maturity assessment identifies gaps and prioritises improvement.',
                },
                {
                  type: 'table',
                  headers: ['Level', 'Description', 'Characteristics'],
                  rows: [
                    ['1 — Initial', 'Ad-hoc, undocumented', 'No formal processes; depends on individuals'],
                    ['2 — Developing', 'Recognised need; basic processes', 'Some processes defined; inconsistent application'],
                    ['3 — Defined', 'Processes documented and communicated', 'Standard processes; training in place'],
                    ['4 — Managed', 'Metrics-driven; continuously improved', 'KPIs tracked; improvements data-driven'],
                    ['5 — Optimising', 'Best-in-class; benchmarking', 'Industry-leading; continuous innovation'],
                  ],
                },
                {
                  type: 'example',
                  content:
                    'A mid-size Indian SaaS company assesses its data governance maturity. Scores per DMBOK area: Data Governance (Level 2 — defined policy but no council); Data Architecture (Level 2 — models exist but inconsistent); Data Security (Level 3 — ISO 27001 certified); Data Quality (Level 1 — no formal programme); Metadata (Level 1 — no glossary). Overall: Level 2. The company sets a 2-year target to reach Level 3 across all areas — with specific projects for Data Quality and Metadata.',
                },
              ],
            },
          ],
          glossary: [
            { term: 'DAMA-DMBOK', definition: 'The Data Management Body of Knowledge — the international standard published by DAMA International, defining 11 knowledge areas of data management.' },
            { term: 'Knowledge Area', definition: 'A specific functional area within DMBOK — e.g., Data Governance, Data Security, Metadata Management.' },
            { term: 'Data Governance Council', definition: 'A cross-functional governance body chaired by the CDO or DPO, with representatives from each business unit, setting strategy and policy.' },
            { term: 'Data Governance Office (DGO)', definition: 'The operational arm of the Data Governance Council — full-time staff coordinating the working groups and stewards.' },
            { term: 'Data Steward', definition: 'A business or technical role responsible for the quality, definition, and proper use of specific data assets within a domain.' },
          ],
          references: [
            { title: 'DAMA-DMBOK — Data Management Body of Knowledge, 2nd Edition', source: 'DAMA International', year: '2017' },
            { title: 'DAMA Dictionary of Data Management', source: 'DAMA International', year: '2017' },
            { title: 'DPDPA 2023 Section 8 — General Obligations', source: 'Government of India', year: '2023' },
          ],
        },

        // -------- LESSON 11 --------
        {
          id: 11,
          title: 'Building a Data Governance Council',
          duration: '20 min',
          type: 'reading',
          description:
            'How to establish and operate a Data Governance Council — composition, charter, meeting cadence, decision rights, and the relationship with the Data Protection Officer.',
          content:
            'A Data Governance Council (DGC) is the apex body for data governance in an organisation. It sets strategy, approves policies, resolves cross-functional issues, and oversees the data governance programme. This lesson covers how to establish and operate a DGC — composition, charter, meeting cadence, decision rights, and the critical relationship with the DPO function.',
          learningObjectives: [
            'Establish a Data Governance Council with appropriate composition',
            'Draft a DGC charter with clear decision rights',
            'Operate a DGC with effective meeting cadence',
            'Coordinate DGC with the DPO function',
          ],
          keyTakeaways: [
            'A DGC should have executive sponsorship (CEO, COO, or CIO) and cross-functional representation.',
            'The DGC charter defines mandate, composition, decision rights, meeting cadence, and escalation.',
            'DGC meets monthly for operational decisions, quarterly for strategic reviews.',
            'The DPO is a permanent member of the DGC — data protection is a subset of data governance.',
            'DGC decisions should be documented, tracked, and auditable.',
          ],
          sections: [
            {
              id: 'sec-1',
              title: 'Composition and Sponsorship',
              content: [
                {
                  type: 'paragraph',
                  content:
                    'A DGC requires executive sponsorship to be effective — without it, the council becomes a forum without authority. The sponsor is typically the CEO, COO, or CIO. The chair is typically the Chief Data Officer (CDO) or the DPO. Members include senior representatives from each business unit, IT, Security, Legal, and Compliance. The DGO supports the DGC with secretariat and operational follow-up.',
                },
                {
                  type: 'heading',
                  content: 'Recommended Composition',
                },
                {
                  type: 'table',
                  headers: ['Role', 'Title', 'Voting / Non-Voting'],
                  rows: [
                    ['Sponsor', 'CEO / COO / CIO', 'Non-voting (sponsor)'],
                    ['Chair', 'CDO or DPO', 'Voting (deciding vote)'],
                    ['Business Reps', 'Heads of major business units', 'Voting'],
                    ['IT Rep', 'CTO or Head of IT', 'Voting'],
                    ['Security Rep', 'CISO', 'Voting'],
                    ['Legal Rep', 'General Counsel', 'Voting'],
                    ['Compliance Rep', 'Head of Compliance', 'Voting'],
                    ['Secretariat', 'Data Governance Office (DGO)', 'Non-voting (admin)'],
                  ],
                },
                {
                  type: 'callout',
                  content:
                    'The DPO must be a permanent voting member. Data protection issues (DPDPA compliance, breach response, DSAR) are core data governance matters and must be on the DGC agenda every meeting.',
                  calloutType: 'important',
                },
              ],
            },
            {
              id: 'sec-2',
              title: 'The DGC Charter',
              content: [
                {
                  type: 'paragraph',
                  content:
                    'The DGC charter is a formal document defining the council\'s mandate, composition, decision rights, meeting cadence, and escalation. The charter is approved by the sponsor and reviewed annually. Without a charter, the DGC has no authority and devolves into a discussion forum.',
                },
                {
                  type: 'heading',
                  content: 'Charter Components',
                },
                {
                  type: 'list',
                  content: 'DGC charter components',
                  items: [
                    'Mandate: what the DGC is responsible for (strategy, policy, prioritisation).',
                    'Composition: members, alternates, observer rights.',
                    'Decision rights: what the DGC can decide unilaterally vs. what requires executive or board approval.',
                    'Quorum: minimum attendance for decisions (typically 50% + 1 of voting members).',
                    'Meeting cadence: monthly operational, quarterly strategic, annual review.',
                    'Escalation: when and how to escalate to executive committee or board.',
                    'Conflicts of interest: declaration, recusal process.',
                    'Minutes and documentation: who records, where stored, retention.',
                    'Review: annual charter review and update.',
                  ],
                },
                {
                  type: 'example',
                  content:
                    'A Bengaluru fintech DGC charter: Mandate — "Set data governance strategy; approve policies; resolve cross-functional data issues; oversee DPDPA compliance." Composition — 8 voting members (CEO sponsor; DPO chair; Heads of Sales, Operations, Product, Engineering; CTO; CISO; General Counsel). Quorum — 5 of 8. Decisions — policies, data classification, vendor approvals, breach responses over 1000 records. Escalation — to Board for penalties over ₹10 crore or regulatory action. Meetings — monthly 1 hour operational, quarterly 2 hour strategic, annual review.',
                },
              ],
            },
            {
              id: 'sec-3',
              title: 'Meeting Operations and Decision Making',
              content: [
                {
                  type: 'paragraph',
                  content:
                    'A DGC meeting has a standard agenda: (1) Review of minutes from previous meeting; (2) Action item follow-up; (3) Metrics and KPIs review; (4) New issues for decision; (5) Strategic discussion (quarterly); (6) AOB. Decisions are recorded with rationale, owner, and deadline. Minutes are circulated within 48 hours.',
                },
                {
                  type: 'heading',
                  content: 'Decision Documentation Template',
                },
                {
                  type: 'list',
                  content: 'DGC decision documentation template',
                  items: [
                    'Decision ID: unique identifier (DGC-2024-001).',
                    'Date: when decided.',
                    'Description: what was decided.',
                    'Rationale: why (with reference to data, policy, regulation).',
                    'Owner: who is responsible for implementation.',
                    'Deadline: when implementation is due.',
                    'Status: Open / In Progress / Closed.',
                    'Linked Documents: policy, ROPA entry, DPIA.',
                  ],
                },
                {
                  type: 'callout',
                  content:
                    'Decisions should be tracked in a decision log — a searchable repository of all DGC decisions. The log is essential for audit — the Data Protection Board may ask "when and why was this policy changed?"',
                  calloutType: 'tip',
                },
              ],
            },
            {
              id: 'sec-4',
              title: 'Coordination with the DPO Function',
              content: [
                {
                  type: 'paragraph',
                  content:
                    'The DPO is a permanent voting member of the DGC. The DPO brings DPDPA compliance matters to the DGC: policy updates, breach responses, DSAR trends, vendor risks, sectoral regulatory changes. The DGC provides the cross-functional coordination that the DPO alone cannot — e.g., a breach response requires cooperation from IT (containment), Legal (notification), Communications (customer messaging), and Customer Support (handling queries).',
                },
                {
                  type: 'heading',
                  content: 'DPO-DGC Coordination Points',
                },
                {
                  type: 'list',
                  content: 'DPO-DGC coordination points',
                  items: [
                    'Quarterly DPDPA compliance report to DGC.',
                    'Breach response activation — DPO reports within 24 hours of detection.',
                    'Policy changes — DPO drafts, DGC approves.',
                    'Significant vendor risks — DPO flags, DGC decides.',
                    'DSAR trends — DPO reports volumes, themes, escalations.',
                    'Regulatory engagement — DPO reports on Data Protection Board interactions.',
                    'Annual DPDPA training plan — DPO proposes, DGC approves.',
                  ],
                },
                {
                  type: 'example',
                  content:
                    'A Mumbai insurance company\'s DGC agenda for March 2024: (1) Review of January DGC minutes; (2) Action items: retention policy update (closed), ROPA refresh (in progress); (3) Metrics: 23 DSARs in Feb (up from 15), 0 breaches, 4 vendor risk escalations; (4) Decision: approve new retention schedule for ABHA-linked health data (DPO presents, DGC approves); (5) Strategic: review of privacy programme maturity (Level 2 → Level 3 roadmap); (6) AOB: DPO notes upcoming IRDAI cloud audit in April. Decisions logged in DGC decision log; minutes circulated within 48 hours.',
                },
              ],
            },
          ],
          glossary: [
            { term: 'Data Governance Council (DGC)', definition: 'The apex body for data governance — sets strategy, approves policies, resolves cross-functional issues, oversees the data governance programme.' },
            { term: 'DGC Charter', definition: 'A formal document defining the council\'s mandate, composition, decision rights, meeting cadence, and escalation.' },
            { term: 'Decision Log', definition: 'A searchable repository of all DGC decisions with ID, date, description, rationale, owner, deadline, and status — essential for audit.' },
            { term: 'Chief Data Officer (CDO)', definition: 'The senior executive responsible for the organisation\'s data strategy, governance, and quality — often chairs the DGC.' },
          ],
          references: [
            { title: 'DAMA-DMBOK — Data Management Body of Knowledge, 2nd Edition', source: 'DAMA International', year: '2017' },
            { title: 'IAPP Data Governance and DPO Coordination Guide', source: 'International Association of Privacy Professionals', year: '2024' },
            { title: 'DPDPA 2023 — General Obligations and DPO Role', source: 'Government of India', year: '2023' },
          ],
        },

        // -------- LESSON 12 --------
        {
          id: 12,
          title: 'Data Stewardship, Metrics, and KPIs',
          duration: '22 min',
          type: 'reading',
          description:
            'Data stewardship roles and responsibilities, and the metrics and KPIs that demonstrate the effectiveness of a data governance programme to executives and regulators.',
          content:
            'Data stewards are the front-line of data governance — business or technical roles responsible for the quality, definition, and proper use of specific data assets. Without stewards, governance policies remain on paper. This lesson covers the steward role, the network model, and the metrics and KPIs that demonstrate governance effectiveness.',
          learningObjectives: [
            'Define the data steward role and responsibilities',
            'Build a steward network across business units',
            'Design a metrics and KPI dashboard for data governance',
            'Report governance performance to executives and regulators',
          ],
          keyTakeaways: [
            'A data steward is responsible for the quality, definition, and proper use of specific data assets within a domain.',
            'Stewards are typically part-time — a 20% allocation for stewardship duties alongside their main role.',
            'KPIs should cover quality, compliance, and value — not just activity metrics.',
            'A data governance dashboard reports KPIs to executives monthly and to the regulator on request.',
            'Stewardship is the single most important success factor for data governance — without empowered stewards, governance fails.',
          ],
          sections: [
            {
              id: 'sec-1',
              title: 'The Data Steward Role',
              content: [
                {
                  type: 'paragraph',
                  content:
                    'A data steward is a named individual responsible for the quality, definition, and proper use of specific data assets within their domain. Stewards are typically subject matter experts in their business area — e.g., the Head of Customer Service might steward customer contact data; the HR Director might steward employee data. Stewardship is usually a 20% allocation — the steward has a primary role but spends a portion of their time on stewardship duties.',
                },
                {
                  type: 'heading',
                  content: 'Steward Responsibilities',
                },
                {
                  type: 'list',
                  content: 'Core data steward responsibilities',
                  items: [
                    'Define and maintain business glossary entries for their domain.',
                    'Approve data classification for new data elements in their domain.',
                    'Sign off on data quality rules and thresholds.',
                    'Approve new purposes for using domain data (purpose limitation check).',
                    'Review DSAR requests involving domain data.',
                    'Participate in DPIA reviews for domain-relevant processing.',
                    'Identify and escalate data quality issues.',
                    'Approve data sharing with new recipients (third parties).',
                    'Review retention schedules for domain data.',
                    'Champion data governance within their business unit.',
                  ],
                },
                {
                  type: 'callout',
                  content:
                    'Stewards must be empowered — they need authority to approve or reject data uses, not just advise. A steward without authority is just a consultant — governance requires decision rights.',
                  calloutType: 'important',
                },
              ],
            },
            {
              id: 'sec-2',
              title: 'The Steward Network Model',
              content: [
                {
                  type: 'paragraph',
                  content:
                    'Stewards are distributed across the organisation — typically one per business unit, plus technical stewards for major data domains (customer data, product data, financial data). The DGO coordinates the network through monthly steward meetings, training, and a shared collaboration platform. The network is the operational arm of data governance.',
                },
                {
                  type: 'heading',
                  content: 'Steward Network Composition Example',
                },
                {
                  type: 'table',
                  headers: ['Domain', 'Steward', 'Backup', 'Time Allocation'],
                  rows: [
                    ['Customer Data', 'Head of Customer Service', 'Customer Service Manager', '20%'],
                    ['Employee Data', 'HR Director', 'HR Manager', '15%'],
                    ['Financial Data', 'CFO', 'Finance Manager', '10%'],
                    ['Product Data', 'Head of Product', 'Product Manager', '20%'],
                    ['Marketing Data', 'Head of Marketing', 'Marketing Manager', '15%'],
                    ['Vendor Data', 'Head of Procurement', 'Procurement Manager', '10%'],
                    ['IT / Security Data', 'CISO', 'Security Manager', '15%'],
                  ],
                },
                {
                  type: 'paragraph',
                  content:
                    'For a mid-size organisation, this gives 7 stewards plus 7 backups — 14 named individuals. The DGO (2 FTEs) coordinates. Monthly steward meetings (1 hour) review issues, training, and metrics. Quarterly full-day workshop for deeper discussions and training.',
                },
              ],
            },
            {
              id: 'sec-3',
              title: 'Data Governance Metrics and KPIs',
              content: [
                {
                  type: 'paragraph',
                  content:
                    'Metrics demonstrate the effectiveness of data governance. KPIs should cover three dimensions: quality (data accuracy, completeness, timeliness), compliance (DPDPA adherence, breach response, DSAR), and value (business outcomes enabled by governance). Avoid vanity metrics (number of meetings held, policies published) — focus on outcome metrics.',
                },
                {
                  type: 'heading',
                  content: 'Recommended KPIs',
                },
                {
                  type: 'table',
                  headers: ['KPI Category', 'KPI', 'Target', 'Reporting Cadence'],
                  rows: [
                    ['Quality', 'Data completeness rate', '>95%', 'Monthly'],
                    ['Quality', 'Data accuracy rate (sampled)', '>98%', 'Quarterly'],
                    ['Quality', 'Duplicate record rate', '<2%', 'Monthly'],
                    ['Quality', 'Data freshness (lag from event to record)', '<24 hours', 'Weekly'],
                    ['Compliance', 'ROPA coverage (% of processing activities documented)', '100%', 'Quarterly'],
                    ['Compliance', 'DSAR fulfilment within SLA', '>95%', 'Monthly'],
                    ['Compliance', 'DSAR average turnaround time', '<21 days', 'Monthly'],
                    ['Compliance', 'Breach incidents', 'Trend down', 'Monthly'],
                    ['Compliance', 'Breach notification within 72 hours', '100%', 'Per incident'],
                    ['Compliance', 'Vendor DPAs current', '100%', 'Quarterly'],
                    ['Compliance', 'Training completion rate', '>95%', 'Quarterly'],
                    ['Value', 'Data-driven decisions documented', 'Trend up', 'Quarterly'],
                    ['Value', 'Cost savings from data initiatives', 'Track', 'Annual'],
                  ],
                },
              ],
            },
            {
              id: 'sec-4',
              title: 'Reporting and the Data Governance Dashboard',
              content: [
                {
                  type: 'paragraph',
                  content:
                    'A data governance dashboard visualises KPIs for executives and the regulator. The dashboard should be accessible online (e.g., Tableau, PowerBI, Looker) and updated automatically from source systems. Reports: monthly operational report to DGC; quarterly strategic report to executive committee; annual report to board; ad-hoc reports to regulator on request.',
                },
                {
                  type: 'heading',
                  content: 'Dashboard Sections',
                },
                {
                  type: 'list',
                  content: 'Data governance dashboard sections',
                  items: [
                    'Executive Summary: top 5 KPIs with trend arrows.',
                    'Compliance Status: DPDPA adherence, DSAR, breaches, vendor DPAs.',
                    'Data Quality: completeness, accuracy, duplicates, freshness.',
                    'Data Stewardship: steward activities, escalations, training completion.',
                    'Risks and Issues: open issues by severity, owner, age.',
                    'Programme Performance: governance maturity trend, cost savings.',
                    'Audit Trail: decision log summary, policy changes.',
                  ],
                },
                {
                  type: 'example',
                  content:
                    'A Bengaluru fintech implements a data governance dashboard in Tableau. Monthly report shows: data completeness 96.4% (target 95% — achieved); DSAR fulfilment 100% within SLA; average DSAR turnaround 14 days (target 21 — achieved); 0 breaches in March 2024; vendor DPAs 47/47 current; training 94% completion. Quarterly strategic report adds: governance maturity assessment (Level 2 → Level 3 roadmap), ROPA coverage 89% (target 100% by Q3), value metrics (₹2 crore cost savings from data initiatives). The dashboard is reviewed monthly by DGC and quarterly by the executive committee.',
                },
                {
                  type: 'callout',
                  content:
                    'When the Data Protection Board asks "show me your data governance", the dashboard is the answer. A well-maintained dashboard is the strongest evidence of a functioning governance programme — far more persuasive than policy documents alone.',
                  calloutType: 'tip',
                },
              ],
            },
          ],
          glossary: [
            { term: 'Data Steward', definition: 'A named individual responsible for the quality, definition, and proper use of specific data assets within their domain — typically a 15–20% allocation alongside their main role.' },
            { term: 'Steward Network', definition: 'The distributed network of data stewards across business units, coordinated by the Data Governance Office through monthly meetings and shared collaboration.' },
            { term: 'KPI (Key Performance Indicator)', definition: 'A quantifiable measure of performance against objectives — for data governance, covering quality, compliance, and value dimensions.' },
            { term: 'Data Governance Dashboard', definition: 'A visualisation of KPIs in a BI tool (Tableau, PowerBI, Looker), updated automatically from source systems and reported to executives and regulators.' },
          ],
          references: [
            { title: 'DAMA-DMBOK — Data Management Body of Knowledge, 2nd Edition', source: 'DAMA International', year: '2017' },
            { title: 'IAPP Privacy Metrics and KPIs Guide', source: 'International Association of Privacy Professionals', year: '2024' },
            { title: 'DPDPA 2023 Section 8 — General Obligations', source: 'Government of India', year: '2023' },
          ],
        },
      ],
    },
  ],

  // ===== MODULE ASSIGNMENTS =====
  assignments: [
    {
      id: 1,
      title: 'Build a ROPA for Your Organisation',
      description:
        'Build a complete Record of Processing Activities for your organisation (or a hypothetical Indian company). Document at least 15 processing activities with all required fields.',
      deliverables: [
        'ROPA spreadsheet with at least 15 processing activities',
        'Each entry with all 16 required fields',
        'Cross-reference to data map (where data is stored)',
        'Retention schedule mapping',
        'Quarterly review cadence and named owner',
      ],
    },
    {
      id: 2,
      title: 'Data Classification and Storage Architecture',
      description:
        'Design a 4-tier data classification model with automated classification rules, and a 3-tier storage architecture with encryption per tier. Apply to an Indian fintech use case.',
      deliverables: [
        'Classification policy document with examples',
        'Automated classification rules (regex patterns)',
        'Storage tier design (hot/warm/cold/archive)',
        'Encryption approach per tier',
        'Retention schedule per classification tier',
        'Cost analysis before and after tiering',
      ],
    },
    {
      id: 3,
      title: 'Data Governance Council Establishment',
      description:
        'Establish a Data Governance Council for a mid-size Indian organisation. Draft the charter, composition, decision rights, and meeting cadence. Identify the first 5 priorities for the council.',
      deliverables: [
        'DGC charter document',
        'Composition list with names and titles',
        'Decision rights matrix',
        'Meeting cadence and agenda template',
        'First 5 priorities with rationale and owners',
        'Metrics dashboard mock-up',
      ],
    },
  ],

  // ===== MODULE QUIZ =====
  quiz: {
    questions: [
      {
        question: 'How many knowledge areas are defined in the DAMA-DMBOK framework?',
        options: ['8', '10', '11', '12'],
        correct: 2,
        explanation: 'DAMA-DMBOK defines 11 knowledge areas, with Data Governance at the centre orchestrating the other 10 operational areas.',
      },
      {
        question: 'Under DPDPA Section 8(7), when must personal data be deleted?',
        options: ['After 7 years', 'After 10 years', 'When the purpose is no longer served', 'When the Data Principal requests'],
        correct: 2,
        explanation: 'Section 8(7) requires personal data to be deleted "as soon as" the purpose for which it was collected is no longer served. Sectoral rules may impose longer retention for specific data types.',
      },
      {
        question: 'What are the three NIST SP 800-88 sanitisation operations?',
        options: ['Wipe, Format, Reinstall', 'Clear, Purge, Destroy', 'Encrypt, Hash, Salt', 'Lock, Block, Delete'],
        correct: 1,
        explanation: 'NIST SP 800-88 defines three operations: Clear (logical overwrite), Purge (cryptographic erasure, degauss), Destroy (physical destruction).',
      },
      {
        question: 'Which sanitisation technique is recommended for SSDs?',
        options: ['Single-pass overwrite', 'Multi-pass overwrite', 'Cryptographic erasure or block erase', 'Degaussing'],
        correct: 2,
        explanation: 'SSDs cannot be reliably cleared by overwrite due to wear-levelling. Use cryptographic erasure (key destruction) or block erase (ATA Secure Erase).',
      },
      {
        question: 'In a 4-tier data classification model, which tier should Aadhaar numbers be classified as?',
        options: ['Public', 'Internal', 'Confidential', 'Restricted'],
        correct: 3,
        explanation: 'Aadhaar numbers should be classified as Restricted — the highest tier. The Aadhaar Act 2018 makes storage or display of full Aadhaar numbers a criminal offence.',
      },
      {
        question: 'What is the recommended size of a data steward\'s time allocation for stewardship duties?',
        options: ['100% (full-time)', '50%', '15–20%', '5%'],
        correct: 2,
        explanation: 'Data stewards are typically part-time — a 15–20% allocation alongside their main role. Full-time stewards are rare except in large enterprises.',
      },
      {
        question: 'RBI requires payment records to be retained for how many years?',
        options: ['3 years', '5 years', '7 years', '10 years'],
        correct: 3,
        explanation: 'RBI requires payment records to be retained for 10 years under the Payment and Settlement Systems Act 2007.',
      },
      {
        question: 'Under DPDPA Section 8(2), what is the data minimisation principle?',
        options: ['Collect as much data as possible', 'Collect only data necessary for the stated purpose', 'Collect data only with explicit consent', 'Collect data only after DPIA'],
        correct: 1,
        explanation: 'Section 8(2) requires collecting only such personal data as is necessary for the specified purpose — the data minimisation principle.',
      },
      {
        question: 'What is a legal hold?',
        options: ['A court order to delete data', 'A suspension of retention policies for litigation', 'A type of encryption', 'A contractual clause for vendor liability'],
        correct: 1,
        explanation: 'A legal hold (litigation hold) suspends retention policies for data subject to litigation, investigation, or regulatory inquiry — data must be preserved until hold is released.',
      },
      {
        question: 'Which DMBOK knowledge area covers breach response?',
        options: ['Data Governance', 'Data Architecture', 'Data Security', 'Data Quality'],
        correct: 2,
        explanation: 'Data Security (DMBOK Knowledge Area 5) covers access controls, encryption, audit, and breach response.',
      },
      {
        question: 'What is cryptographic erasure?',
        options: ['Overwriting data with random patterns', 'Physically destroying storage media', 'Destroying the encryption key to render data unreadable', 'Hashing the data with a salt'],
        correct: 2,
        explanation: 'Cryptographic erasure destroys the encryption key (in KMS / HSM), rendering the encrypted ciphertext unreadable — even if the bytes remain on disk. It is the recommended approach for cloud storage.',
      },
      {
        question: 'How often should a Data Governance Council meet for operational decisions?',
        options: ['Weekly', 'Monthly', 'Quarterly', 'Annually'],
        correct: 1,
        explanation: 'A DGC typically meets monthly for operational decisions and quarterly for strategic reviews, with annual charter review.',
      },
      {
        question: 'What is a Data Flow Diagram (DFD) Level 0?',
        options: ['A detailed decomposition of all processes', 'A context diagram showing the system as a single process', 'A physical network diagram', 'A database schema diagram'],
        correct: 1,
        explanation: 'A DFD Level 0 is the context diagram — the highest level, showing the system as a single process with external entities.',
      },
      {
        question: 'Which storage tier is most appropriate for archive data retained for 7+ years?',
        options: ['Hot (SSD)', 'Warm (HDD)', 'Cold (Infrequent Access)', 'Archive (Glacier / Tape)'],
        correct: 3,
        explanation: 'Archive tier (cloud Glacier or tape) is appropriate for long-term retention — lowest cost, retrieval measured in hours.',
      },
      {
        question: 'What is the purpose of a business glossary?',
        options: ['Document database schemas', 'Define business terms in plain language', 'Track data lineage', 'Identify personal data'],
        correct: 1,
        explanation: 'A business glossary defines business terms in plain language, owned by business stakeholders, and reviewed annually. It is the authoritative source for business meaning.',
      },
    ],
    passingScore: 80,
  },
};
