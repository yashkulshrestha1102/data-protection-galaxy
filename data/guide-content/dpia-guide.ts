// data/guide-content/dpia-guide.ts
import type { GuideContent } from "./types";
import { SRC } from "./sources";
import { cite, callout, table, checklist, steps, readTimeOf } from "./html";

// Source numbers: 1 DPDP Act · 2 DPDP Rules · 3 GDPR · 4 WP248 DPIA guidelines · 5 ICO DPIA guidance

const content = `
<p class="lg-lead">A Data Protection Impact Assessment (DPIA) is a structured way to find and reduce privacy risks <em>before</em> they cause harm. Under India's Digital Personal Data Protection Act, 2023 (DPDPA) it is a legal duty for Significant Data Fiduciaries; under the EU GDPR it is mandatory for high-risk processing. For everyone else, it is simply the best tool for showing that a new product, system or vendor was designed responsibly. This guide explains when a DPIA is required, what it must contain, and how to run one step by step.</p>

<h2 id="what-is-dpia">What is a DPIA?</h2>
<p>The DPDPA describes a DPIA as a process comprising a description of the rights of Data Principals and the purpose of processing of their personal data, an <strong>assessment and management of the risk</strong> to the rights of the Data Principals, and other matters that may be prescribed (section 10(2)(c)(i)).${cite(1)} The GDPR's Article 35(7) sets a similar minimum: a description of the processing, an assessment of necessity and proportionality, an assessment of the risks to individuals, and the measures to address those risks.${cite(3)}</p>
<p>A DPIA is not a one-time form. It should start at the design stage, be updated when the processing changes, and leave a clear record of the decisions taken.</p>
${callout(
  "info",
  "DPIA vs audit vs privacy review",
  "<p>A <strong>DPIA</strong> looks forward at the risks of a specific processing activity. A <strong>data audit</strong> checks whether existing processing complies with the law and policies. A <strong>privacy review</strong> is a lighter check for low-risk changes. Significant Data Fiduciaries need both a DPIA and a periodic data audit.</p>"
)}

<h2 id="when-required">When is a DPIA required?</h2>
<h3>Under the DPDPA</h3>
<p>A Significant Data Fiduciary (SDF) must undertake a <strong>periodic DPIA</strong> and a <strong>periodic audit</strong> (section 10(2)(c)).${cite(1)} The DPDP Rules make this concrete: an SDF must carry out a DPIA and an audit <strong>once in every 12 months</strong> from the date it is notified as an SDF (Rule 13(1)), and the person carrying them out must furnish a <strong>report containing significant observations</strong> to the Data Protection Board (Rule 13(2)).${cite(2)} The Government designates SDFs based on factors such as the volume and sensitivity of data, risk to the rights of Data Principals, potential impact on India's sovereignty and integrity, electoral democracy, security of the State and public order (section 10(1)).${cite(1)}</p>
<p>The DPDP (Removal of Difficulties) Order, 2026 clarified that section 10(2)(c)(ii) refers to a periodic <strong>data audit</strong>. Read our <a href="/insight/dpdp-removal-of-difficulties-order-2026">update on the Order</a>.</p>
<h3>Under the GDPR</h3>
<p>Article 35(1) requires a DPIA where processing — particularly using new technologies — is <strong>likely to result in a high risk</strong> to individuals. Article 35(3) makes it mandatory for:${cite(3)}</p>
<ul>
  <li>systematic and extensive evaluation of personal aspects based on automated processing, including profiling, that produces legal or similarly significant effects;</li>
  <li>large-scale processing of special-category data or criminal-offence data;</li>
  <li>systematic monitoring of a publicly accessible area on a large scale.</li>
</ul>
<h3>The nine high-risk criteria</h3>
<p>The EDPB-endorsed guidelines (WP248) list nine criteria. If processing meets <strong>two or more</strong>, a DPIA will usually be required:${cite(4)}</p>
${table(
  ["#", "Criterion", "Example"],
  [
    ["1", "Evaluation or scoring, including profiling and predicting", "Credit scoring, health-risk prediction"],
    ["2", "Automated decision-making with legal or similarly significant effect", "Automatic loan rejection"],
    ["3", "Systematic monitoring", "Employee monitoring, CCTV analytics"],
    ["4", "Sensitive or highly personal data", "Health, biometrics, financial data, location"],
    ["5", "Data processed on a large scale", "Nationwide customer base"],
    ["6", "Matching or combining data sets", "Merging app data with purchased data"],
    ["7", "Data concerning vulnerable individuals", "Children, patients, employees"],
    ["8", "Innovative use or new technology", "Facial recognition, AI models, IoT"],
    ["9", "Processing that prevents people exercising a right or using a service", "Eligibility screening for a service"],
  ],
  "WP248 high-risk criteria"
)}
${callout(
  "tip",
  "Good practice for every Data Fiduciary",
  "<p>Even if you are not an SDF, running a DPIA for children's data, AI models, biometrics, large-scale profiling or new vendors helps you meet the DPDPA's accountability and security duties (section 8) and makes later audits much easier.</p>"
)}

<h2 id="process">The DPIA process, step by step</h2>
${steps([
  { title: "Screen the project", body: "Use a short questionnaire (based on the nine criteria and your SDF status) to decide whether a full DPIA is needed. Record the decision either way." },
  { title: "Describe the processing", body: "Set out the purposes, the categories of Data Principals and personal data, sources, recipients, systems, locations, retention periods and the lawful ground (consent or a section 7 legitimate use)." },
  { title: "Consult stakeholders", body: "Involve the DPO, information security, product, legal and the business owner; where appropriate, seek the views of Data Principals or their representatives." },
  { title: "Assess necessity and proportionality", body: "Check that each data item is needed, the purpose cannot be achieved with less data, notices are clear, and rights can be exercised." },
  { title: "Identify and score risks", body: "Consider risks to Data Principals — not just to the company — such as unauthorised access, discrimination, loss of control, financial loss or reputational harm. Score each for likelihood and severity." },
  { title: "Plan mitigations", body: "Choose measures that reduce each risk: minimisation, pseudonymisation, encryption, access controls, shorter retention, human review of automated decisions, contractual controls." },
  { title: "Record residual risk and sign-off", body: "Document the remaining risk, who accepted it and why. Under the GDPR, unresolved high residual risk requires prior consultation with the supervisory authority (Article 36)." },
  { title: "Integrate and review", body: "Feed actions into the project plan, track completion and review the DPIA when processing changes — and at least every 12 months for an SDF." },
])}
<p class="lg-source-note">Method aligned with GDPR Articles 35–36, the WP248 guidelines and ICO guidance.${cite(3, 4, 5)}</p>

<h2 id="risk-matrix">Scoring risk: a simple matrix</h2>
<p>A transparent scoring method helps make DPIAs consistent across teams. Multiply likelihood (1–3) by severity (1–3):</p>
${table(
  ["Likelihood ↓ / Severity →", "Minimal (1)", "Significant (2)", "Severe (3)"],
  [
    ["Remote (1)", "1 — Low", "2 — Low", "3 — Medium"],
    ["Possible (2)", "2 — Low", "4 — Medium", "6 — High"],
    ["Probable (3)", "3 — Medium", "6 — High", "9 — High"],
  ],
  "Risk = likelihood × severity"
)}
<p>Treat any <strong>High</strong> score as requiring mitigation before launch, and any <strong>Medium</strong> score as requiring a documented decision by the risk owner.</p>

<h2 id="algorithmic">Algorithmic and AI due diligence</h2>
<p>Rule 13(3) of the DPDP Rules requires an SDF to observe due diligence to verify that the <strong>technical measures, including algorithmic software</strong>, it adopts for hosting, display, uploading, modification, publishing, transmission, storage, updating or sharing of personal data are <strong>not likely to pose a risk to the rights of Data Principals</strong>.${cite(2)} In practice, a DPIA for an AI or algorithmic system should also cover:</p>
${checklist([
  "Training data sources, lawful ground and whether children's data is included.",
  "Testing for bias and discriminatory outcomes across user groups.",
  "Explainability — can you tell a Data Principal how a decision was reached?",
  "Human oversight and the ability to override automated outcomes.",
  "Model security: prompt injection, data leakage and model inversion risks.",
  "Monitoring of model drift and periodic re-validation.",
])}
<p>See also our insight on <a href="/insight/ai-and-data-protection">AI and data protection</a>.</p>

<h2 id="board-report">Reporting to the Data Protection Board</h2>
<p>For SDFs, the DPIA is not only an internal document. Rule 13(2) requires the person who carries out the DPIA and audit to furnish a report with <strong>significant observations</strong> to the Board.${cite(2)} Write findings so that they stand on their own: what was assessed, the risks found, the measures taken, open actions with owners and dates, and the residual risk accepted. Keep evidence — screenshots, configurations, logs, contracts — linked to each finding.</p>
<p>Learn more about the regulator on our <a href="/board">Data Protection Board of India</a> page, and about SDF duties in <a href="/insight/significant-data-fiduciary-readiness">SDF readiness</a>.</p>

<h2 id="template">DPIA template: sections to include</h2>
${table(
  ["Section", "What to record"],
  [
    ["1. Overview", "Project name, owner, DPO reviewer, date, version, screening result."],
    ["2. Description of processing", "Purposes, Data Principals, data categories, sources, recipients, systems, locations, retention."],
    ["3. Lawful ground", "Consent (with notice reference) or the section 7 legitimate use; GDPR Article 6/9 basis if relevant."],
    ["4. Rights of Data Principals", "How access, correction, erasure, grievance and nomination will work for this processing."],
    ["5. Necessity and proportionality", "Why each data item is needed; alternatives considered."],
    ["6. Risk register", "Each risk, its likelihood, severity, score and owner."],
    ["7. Measures", "Controls for each risk, with status and target date."],
    ["8. Residual risk and sign-off", "Remaining risk, acceptance decision and approver."],
    ["9. Review plan", "Triggers for review and next review date."],
  ]
)}

<h2 id="pitfalls">Common pitfalls</h2>
<ul>
  <li><strong>Starting too late.</strong> A DPIA done after launch cannot shape design; start at the requirements stage.</li>
  <li><strong>Assessing risk to the company only.</strong> The DPDPA focuses on risk to the <em>rights of Data Principals</em>.</li>
  <li><strong>Copy-paste assessments.</strong> Generic text will not survive an audit or a Board inquiry.</li>
  <li><strong>No follow-through.</strong> Mitigations that are never implemented make the DPIA evidence against you.</li>
  <li><strong>Ignoring vendors.</strong> Processors and AI providers often carry the biggest risks.</li>
</ul>
<p>Test your overall readiness with the free <a href="/scorecard">compliance scorecard</a>, and see a worked example in our <a href="/resources/case-studies/dpia-implementation-finance">DPIA implementation case study</a>.</p>
`;

export const dpiaGuide: GuideContent = {
  metaDescription:
    "How to run a DPIA under DPDPA section 10, Rule 13 and GDPR Article 35: triggers, 8-step method, risk matrix, AI due diligence, template.",
  excerpt:
    "How to run a Data Protection Impact Assessment under India's DPDPA (section 10 and Rule 13) and the GDPR (Article 35): when it is required, the nine high-risk criteria, an eight-step method, risk scoring, AI due diligence and a ready template.",
  content,
  readTime: readTimeOf(content),
  lastUpdated: "27 Nov 2026",
  tableOfContents: [
    { id: "what-is-dpia", title: "What is a DPIA?" },
    { id: "when-required", title: "When is a DPIA required?" },
    { id: "process", title: "The DPIA process" },
    { id: "risk-matrix", title: "Scoring risk" },
    { id: "algorithmic", title: "Algorithmic & AI due diligence" },
    { id: "board-report", title: "Reporting to the Board" },
    { id: "template", title: "DPIA template" },
    { id: "pitfalls", title: "Common pitfalls" },
  ],
  keyTakeaways: [
    "Under the DPDPA, Significant Data Fiduciaries must carry out a DPIA and an audit once every 12 months (section 10, Rule 13(1)).",
    "The person carrying out the DPIA and audit must give a report of significant observations to the Data Protection Board (Rule 13(2)).",
    "Under the GDPR, a DPIA is mandatory for processing likely to result in a high risk (Article 35).",
    "Processing that meets two or more of the nine WP248 criteria usually needs a DPIA.",
    "Assess risk to the rights of individuals, not just to the business.",
    "SDFs must also verify that algorithmic software is not likely to pose a risk to Data Principals' rights (Rule 13(3)).",
  ],
  sources: [SRC.dpdpAct, SRC.dpdpRules, SRC.gdpr, SRC.edpbDpia, SRC.icoDpia],
  faqs: [
    {
      q: "Is a DPIA mandatory under the DPDPA?",
      a: "It is mandatory for Significant Data Fiduciaries. Section 10(2)(c) requires a periodic DPIA and audit, and Rule 13(1) of the DPDP Rules requires them once in every 12 months from the date of notification as an SDF. Other Data Fiduciaries are not legally required to run DPIAs but often do so as good practice.",
    },
    {
      q: "What must a DPIA contain under the DPDPA?",
      a: "Section 10(2)(c)(i) describes a DPIA as a process comprising a description of the rights of Data Principals and the purpose of processing, an assessment and management of the risk to the rights of Data Principals, and other prescribed matters.",
    },
    {
      q: "When is a DPIA required under the GDPR?",
      a: "Whenever processing is likely to result in a high risk to individuals, and in particular for systematic profiling with significant effects, large-scale processing of special-category or criminal data, and large-scale systematic monitoring of public areas (Article 35). Meeting two or more of the nine WP248 criteria usually indicates a DPIA is needed.",
    },
    {
      q: "Who should carry out a DPIA?",
      a: "The business owner of the processing leads it, with input from the DPO, information security, legal and product teams. Under the GDPR the controller must seek the DPO's advice. For SDFs under the DPDPA, the person carrying out the DPIA must report significant observations to the Board.",
    },
  ],
  relatedLinks: [
    { title: "DPO Handbook", href: "/resources/guides/dpo-handbook", description: "The DPO's role in DPIAs and audits." },
    { title: "DPIA implementation case study", href: "/resources/case-studies/dpia-implementation-finance", description: "A worked example from financial services." },
    { title: "SDF readiness", href: "/insight/significant-data-fiduciary-readiness", description: "Preparing for Significant Data Fiduciary duties." },
    { title: "Obligations of Data Fiduciaries", href: "/obligations", description: "Every DPDPA duty in one place." },
  ],
};
