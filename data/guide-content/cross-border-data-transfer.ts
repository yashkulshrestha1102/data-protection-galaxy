// data/guide-content/cross-border-data-transfer.ts
import type { GuideContent } from "./types";
import { SRC } from "./sources";
import { cite, callout, table, checklist, steps, readTimeOf } from "./html";

// Source numbers: 1 DPDP Act · 2 DPDP Rules · 3 RBI payment data FAQs · 4 GDPR
// 5 EU adequacy list · 6 EU SCCs · 7 PIB explainer

const content = `
<p class="lg-lead">Almost every Indian business moves personal data across borders — to a cloud region in Singapore, a CRM hosted in the US, a parent company in Europe or a support team in the Philippines. India's Digital Personal Data Protection Act, 2023 (DPDPA) takes a relatively open approach to these transfers, but sector regulators, the DPDP Rules 2025 and foreign laws such as the GDPR add important layers. This guide explains the full picture for transfers <em>out of</em> India and <em>into</em> India, and gives you a step-by-step transfer programme.</p>

<h2 id="dpdpa-framework">The DPDPA framework: section 16</h2>
<p>Section 16(1) of the DPDPA allows the Central Government, by notification, to <strong>restrict the transfer</strong> of personal data by a Data Fiduciary for processing to any country or territory outside India that it notifies.${cite(1)} In other words, India uses a <strong>negative-list</strong> (sometimes called "blacklist") model:</p>
<ul>
  <li>Transfers are <strong>permitted by default</strong>.</li>
  <li>Transfers to a country become restricted only if the Government <strong>notifies</strong> that country.</li>
  <li>Section 16(2) preserves any other Indian law that provides a <strong>higher degree of protection</strong> or restriction on transfers — so sectoral localisation rules continue to apply.${cite(1)}</li>
</ul>
${callout(
  "key",
  "Important",
  "<p>Being allowed to transfer does not reduce your other obligations. The Data Fiduciary stays responsible for compliance, including for processing by overseas processors (section 8(1)–(2)), and must protect the data with reasonable security safeguards wherever it is processed (section 8(5)).</p>"
)}
<p>The DPDPA also applies to processing <em>outside</em> India if it is connected with offering goods or services to Data Principals in India (section 3(b)), so a foreign group company serving Indian customers is itself within scope.${cite(1)}</p>

<h2 id="dpdp-rules">What the DPDP Rules 2025 add</h2>
<h3>Rule 15 — requirements for transfers</h3>
<p>Rule 15 states that personal data processed by a Data Fiduciary in India, or outside India in connection with offering goods or services to Data Principals in India, may be transferred outside India <strong>subject to such requirements as the Central Government may specify, by general or special order,</strong> about making that personal data available to a foreign State or any person or entity under the control of a foreign State.${cite(2)}</p>
<h3>Rule 13(4) — localisation for Significant Data Fiduciaries</h3>
<p>A Significant Data Fiduciary must ensure that personal data specified by the Central Government, on the recommendation of a committee constituted by it, is processed subject to the restriction that the data — and the traffic data relating to its flow — is <strong>not transferred outside India</strong>.${cite(2)} This creates the possibility of targeted localisation for large or sensitive data sets.</p>
<h3>When these Rules apply</h3>
<p>Rules 13 and 15 fall within the group of provisions that come into force <strong>18 months after the Rules were notified in November 2025</strong>.${cite(2, 7)} Use the remaining time to build your transfer inventory and contracts.</p>

<h2 id="sectoral">Sectoral localisation rules</h2>
<p>Because section 16(2) preserves stricter laws, sector regulation is often the deciding factor:</p>
${table(
  ["Sector / regulator", "Requirement (summary)", "What to check"],
  [
    ["Payments — Reserve Bank of India", "The RBI's 6 April 2018 circular requires the <strong>entire payment data</strong> of payment system operators to be stored only in India. If processing is done abroad, the data must be deleted there and brought back to India within one business day or 24 hours of processing, whichever is earlier. Compliance is verified through a System Audit Report by a CERT-In empanelled auditor.", "Payment aggregators, card networks, wallets, banks and their vendors."],
    ["Securities — SEBI", "SEBI's framework for cloud services adopted by regulated entities requires data to be stored and processed within India's legal boundaries.", "Brokers, depositories, exchanges, mutual funds and their cloud providers."],
    ["Insurance — IRDAI", "IRDAI rules on insurance records require records to be held in data centres located in India.", "Insurers, intermediaries and their technology partners."],
    ["Telecom — DoT licences", "Telecom licence conditions restrict transfer of subscriber and network information outside India.", "Telecom operators and their vendors."],
    ["Government data", "Government and public-sector data is usually hosted with MeitY-empanelled cloud service providers in India.", "Vendors to ministries, PSUs and state governments."],
  ],
  "Key sectoral restrictions to check"
)}
<p class="lg-source-note">RBI requirements are taken from the RBI's official FAQ on storage of payment system data.${cite(3)} For other sectors, always verify the regulator's current circulars before deciding — these frameworks are updated often.</p>

<h2 id="inbound">Receiving data from the EU and elsewhere</h2>
<p>Many Indian companies are <em>importers</em> of data. When an EU client sends personal data to India, it must comply with Chapter V of the GDPR. India does <strong>not</strong> have an EU adequacy decision, so the exporter will normally use the 2021 <strong>Standard Contractual Clauses</strong> (Commission Implementing Decision (EU) 2021/914) or Binding Corporate Rules, plus a <strong>transfer impact assessment</strong> and any supplementary measures.${cite(4, 5, 6)}</p>
<p>As the importer, expect to:</p>
${checklist([
  "Sign the right SCC module (usually Module 2, controller to processor, or Module 3, processor to processor).",
  "Answer questionnaires on Indian laws that allow government access to data and on how you handle such requests.",
  "Offer encryption, pseudonymisation, access controls and data-location commitments as supplementary measures.",
  "Flow the same terms down to your own sub-processors, including those outside India.",
  "Notify the exporter promptly of breaches and of any government access request, where legally allowed.",
])}
<p>Other regimes with similar rules include the UK GDPR, Singapore's PDPA, Australia's Privacy Act and China's PIPL. See our <a href="/map">global privacy map</a> and the <a href="/resources/guides/gdpr-essentials-indian-companies">GDPR guide for Indian companies</a>.</p>

<h2 id="mechanisms">Contractual safeguards for outbound transfers</h2>
<p>The DPDPA does not prescribe a transfer contract, but good practice — and section 8 — mean that every overseas processor or recipient should be bound by a written agreement that covers:${cite(1)}</p>
<ul>
  <li>processing only for the purposes and on the instructions of the Data Fiduciary;</li>
  <li>reasonable security safeguards in line with the DPDP Rules (encryption or masking, access control, logging, backups);</li>
  <li>prompt notice of personal data breaches so you can meet the Board's 72-hour reporting rule;</li>
  <li>erasure of data at the end of the purpose or contract, and when consent is withdrawn;</li>
  <li>assistance with Data Principal rights and grievances;</li>
  <li>sub-processor approval and flow-down terms;</li>
  <li>a commitment to stop or relocate processing if a destination is restricted under section 16 or a Rule 15 order;</li>
  <li>audit and information rights.</li>
</ul>

<h2 id="transfer-programme">Building a transfer programme</h2>
${steps([
  { title: "Map every cross-border flow", body: "List systems, vendors, group companies and support teams outside India; record what personal data goes where, why and under which contract." },
  { title: "Classify the data", body: "Flag payment data, securities and insurance data, government data, children's data and any data a Significant Data Fiduciary may be asked to localise." },
  { title: "Check restrictions", body: "Compare destinations against any section 16 notification, Rule 15 orders and sector rules. Record the result and the date checked." },
  { title: "Put contracts in place", body: "Use DPDPA-aligned processing agreements for outbound transfers and SCCs or equivalent for inbound EU data." },
  { title: "Apply technical safeguards", body: "Encrypt in transit and at rest, minimise data, pseudonymise where possible and keep keys under your control." },
  { title: "Prepare an exit plan", body: "Know how you would repatriate or relocate data if a country is restricted, including timelines and alternative vendors." },
  { title: "Monitor and review", body: "Track Government notifications, RBI/SEBI/IRDAI circulars and foreign adequacy changes; review the register at least annually." },
])}

<h2 id="checklist">Cross-border compliance checklist</h2>
${checklist([
  "Data-flow register showing every country, vendor and purpose.",
  "No transfers to any country restricted under section 16.",
  "Sector localisation rules (RBI, SEBI, IRDAI, DoT) assessed and evidenced.",
  "Written contracts with every overseas processor and recipient.",
  "SCCs and transfer impact assessments for data received from the EU.",
  "Security controls and logging applied to overseas processing.",
  "Breach notice clauses fast enough to meet the 72-hour Board report.",
  "Exit and repatriation plan for critical data sets.",
  "Owner assigned to monitor new notifications and orders.",
])}
<p>Need a primer on the law itself? Read the <a href="/cross-border">cross-border transfers explainer</a> and our analysis in <a href="/insight/cross-border-data-transfer">Cross-Border Data Transfer Insights</a>.</p>
`;

export const crossBorderDataTransfer: GuideContent = {
  metaDescription:
    "Cross-border data transfers under DPDPA section 16, DPDP Rules 13(4) and 15, RBI localisation and EU SCCs, with a transfer checklist.",
  excerpt:
    "How cross-border data transfers work under India's DPDPA section 16 and DPDP Rules 13(4) and 15, RBI payment-data localisation and other sector rules, plus SCCs for data received from the EU — with a step-by-step transfer programme.",
  content,
  readTime: readTimeOf(content),
  lastUpdated: "27 Nov 2026",
  tableOfContents: [
    { id: "dpdpa-framework", title: "DPDPA section 16" },
    { id: "dpdp-rules", title: "What the DPDP Rules add" },
    { id: "sectoral", title: "Sectoral localisation rules" },
    { id: "inbound", title: "Receiving data from the EU" },
    { id: "mechanisms", title: "Contractual safeguards" },
    { id: "transfer-programme", title: "Building a transfer programme" },
    { id: "checklist", title: "Compliance checklist" },
  ],
  keyTakeaways: [
    "The DPDPA permits cross-border transfers by default; the Government can restrict specific countries by notification (section 16).",
    "Stricter laws continue to apply — section 16(2) preserves sector rules such as RBI payment-data localisation.",
    "Rule 15 lets the Government set requirements on making transferred data available to foreign States.",
    "Rule 13(4) allows localisation of specified data held by Significant Data Fiduciaries.",
    "Rules 13 and 15 apply 18 months after the November 2025 notification of the DPDP Rules.",
    "Data received from the EU needs SCCs or BCRs and a transfer impact assessment, because India has no adequacy decision.",
    "The Data Fiduciary stays responsible for overseas processors, so contracts and security controls matter.",
  ],
  sources: [SRC.dpdpAct, SRC.dpdpRules, SRC.rbiLocalisation, SRC.gdpr, SRC.euAdequacy, SRC.euScc, SRC.dpdpRulesPib],
  faqs: [
    {
      q: "Does the DPDPA allow transferring personal data outside India?",
      a: "Yes. Section 16 allows transfers by default and lets the Central Government restrict transfers to specific countries by notification. Rule 15 of the DPDP Rules adds that transfers are subject to any requirements the Government specifies about making data available to foreign States.",
    },
    {
      q: "Is data localisation mandatory under the DPDPA?",
      a: "Not generally. However, Rule 13(4) allows the Government, on a committee's recommendation, to require Significant Data Fiduciaries to keep specified personal data and related traffic data in India, and sector rules such as the RBI's payment-data circular require localisation.",
    },
    {
      q: "What does the RBI require for payment data?",
      a: "The RBI's circular of 6 April 2018 requires the entire payment data of payment system operators to be stored only in India. If processed abroad, the data must be deleted there and brought back within one business day or 24 hours, whichever is earlier, and compliance is checked through a System Audit Report by a CERT-In empanelled auditor.",
    },
    {
      q: "How can an Indian company receive personal data from the EU?",
      a: "Because India has no EU adequacy decision, the EU exporter normally uses the 2021 Standard Contractual Clauses or Binding Corporate Rules, carries out a transfer impact assessment and adds supplementary measures such as encryption where needed.",
    },
  ],
  relatedLinks: [
    { title: "Cross-border transfers explainer", href: "/cross-border", description: "Section 16 of the DPDPA in plain English." },
    { title: "Cross-border compliance case study", href: "/resources/case-studies/cross-border-compliance", description: "How an organisation handled multi-country data flows." },
    { title: "Cross-Border Data Transfer Insights", href: "/insight/cross-border-data-transfer", description: "Analysis of recent developments." },
    { title: "Sector-specific data protection", href: "/insight/sector-specific-data-protection", description: "How RBI, SEBI and other regulators add to the DPDPA." },
  ],
};
