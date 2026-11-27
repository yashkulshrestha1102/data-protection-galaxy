// data/guide-content/dpo-handbook.ts
import type { GuideContent } from "./types";
import { SRC } from "./sources";
import { cite, callout, table, checklist, readTimeOf } from "./html";

// Source numbers: 1 DPDP Act · 2 DPDP Rules · 3 GDPR · 4 WP243 DPO guidelines

const content = `
<p class="lg-lead">The Data Protection Officer (DPO) is the person who turns privacy law into day-to-day practice — advising leadership, guiding product teams, handling grievances and dealing with the regulator. India's Digital Personal Data Protection Act, 2023 (DPDPA) makes the role mandatory for Significant Data Fiduciaries, and the EU GDPR requires it in specified cases. This handbook covers who must appoint a DPO, the legal requirements, what the job involves, the toolkit and metrics a good DPO uses, and an annual calendar you can adopt.</p>

<h2 id="who-needs-dpo">Who needs a DPO?</h2>
${table(
  ["Law", "When a DPO is mandatory", "If not mandatory"],
  [
    ["DPDPA 2023", "Every <strong>Significant Data Fiduciary</strong> must appoint a DPO (section 10(2)(a)).", "Every Data Fiduciary must still publish the business contact information of a DPO, if applicable, or of a person who can answer Data Principals' questions about processing (section 8(9))."],
    ["GDPR", "Public authorities; organisations whose core activities involve regular and systematic monitoring of individuals on a large scale; or large-scale processing of special-category or criminal-offence data (Article 37(1)).", "Voluntary appointment is allowed, but a voluntary DPO is subject to the same rules on position and tasks."],
  ],
  "When the DPO role is required"
)}
<p class="lg-source-note">Based on the DPDP Act section 8(9) and 10, and GDPR Article 37.${cite(1, 3)}</p>
<p>The Rules also require every Data Fiduciary to <strong>prominently publish</strong> the contact details of its DPO or contact person on its website or app and to mention them in every response to a communication from a Data Principal exercising their rights (Rule 9).${cite(2)}</p>

<h2 id="dpdpa-requirements">DPDPA requirements for the DPO</h2>
<p>Section 10(2)(a) says the DPO of a Significant Data Fiduciary must:${cite(1)}</p>
<ol>
  <li><strong>represent</strong> the Significant Data Fiduciary under the provisions of the Act;</li>
  <li>be <strong>based in India</strong>;</li>
  <li>be an <strong>individual responsible to the Board of Directors</strong> or a similar governing body of the Significant Data Fiduciary; and</li>
  <li>be the <strong>point of contact for the grievance redressal mechanism</strong> under the Act.</li>
</ol>
<p>The same section requires the SDF to appoint an <strong>independent data auditor</strong> and to carry out a periodic DPIA and periodic data audit — work in which the DPO is usually closely involved.${cite(1, 2)}</p>
${callout(
  "key",
  "Board-level accountability",
  "<p>Because the DPO is responsible to the board, privacy becomes a governance issue, not just a legal one. Directors should expect regular reports and should read our insight on <a href=\"/insight/dpdp-act-director-liability\">director liability under the DPDP Act</a>.</p>"
)}

<h2 id="gdpr-requirements">GDPR requirements for the DPO</h2>
<ul>
  <li><strong>Expertise</strong> — designated on the basis of professional qualities, particularly expert knowledge of data protection law and practice (Article 37(5)).</li>
  <li><strong>Employee or contractor</strong> — the DPO can be a staff member or fulfil the role under a service contract (Article 37(6)).</li>
  <li><strong>Published contact details</strong> — shared publicly and with the supervisory authority (Article 37(7)).</li>
  <li><strong>Involvement</strong> — involved properly and in a timely manner in all data protection issues, and given the necessary resources (Article 38(1)–(2)).</li>
  <li><strong>Independence</strong> — receives no instructions on the exercise of tasks, cannot be dismissed or penalised for performing them, and reports to the highest management level (Article 38(3)).</li>
  <li><strong>No conflict of interest</strong> — may have other duties only if they do not create a conflict (Article 38(6)). Roles that decide purposes and means, such as CEO, CTO or head of marketing, usually conflict.${cite(4)}</li>
</ul>
<p class="lg-source-note">From GDPR Articles 37–39 and the WP243 guidelines.${cite(3, 4)}</p>

<h2 id="responsibilities">Core responsibilities</h2>
${table(
  ["Area", "What the DPO does"],
  [
    ["Advice", "Advises leadership and staff on obligations under the DPDPA, DPDP Rules, GDPR and sector rules; reviews new products, vendors and data uses."],
    ["Monitoring", "Monitors compliance with laws and internal policies, including assignment of responsibilities, awareness training and audits (GDPR Art. 39(1)(b))."],
    ["DPIAs and audits", "Advises on DPIAs and monitors their performance; supports the independent data auditor for an SDF."],
    ["Grievances and rights", "Acts as the point of contact for grievances (DPDPA s.10(2)(a)(iv)); oversees access, correction, erasure and nomination requests."],
    ["Breach response", "Coordinates breach assessment, intimation to the Data Protection Board and affected Data Principals, and the 72-hour detailed report."],
    ["Regulator liaison", "Represents the organisation before the Board (DPDPA) and cooperates with supervisory authorities (GDPR Art. 39(1)(d)–(e))."],
    ["Records and evidence", "Keeps the data inventory, consent records, processing logs and policy library audit-ready."],
    ["Culture", "Builds awareness through training, privacy champions and clear guidance."],
  ]
)}
<p class="lg-source-note">Drawn from DPDP Act sections 8, 10 and 13 and GDPR Article 39.${cite(1, 3)}</p>

<h2 id="grievances">Handling grievances and rights requests</h2>
<p>Under the DPDPA a Data Principal must first use the Data Fiduciary's grievance mechanism before approaching the Board (section 13(3)). The Rules require Data Fiduciaries to publish how rights can be exercised and to respond to grievances within a period <strong>not exceeding 90 days</strong> (Rule 14).${cite(1, 2)} A good DPO process includes:</p>
${checklist([
  "A single intake channel (web form plus email) linked from every notice and app screen.",
  "Identity verification proportionate to the request.",
  "A ticketing system that tracks deadlines and evidence for every request.",
  "Templates for access summaries, correction confirmations and erasure confirmations.",
  "Escalation rules for complex cases and complaints that may reach the Board.",
  "Monthly reporting on volumes, timeliness and root causes.",
])}
<p>Our <a href="/grievance-redressal">grievance redressal page</a> and <a href="/rights">Data Principal rights explainer</a> explain the rights in detail.</p>

<h2 id="breach-role">The DPO's role in a data breach</h2>
<p>Under the DPDPA every personal data breach must be intimated to the Data Protection Board and each affected Data Principal. The Rules require intimation without delay and a detailed report to the Board within <strong>72 hours</strong> of becoming aware, unless the Board allows longer.${cite(1, 2)} The DPO should own the runbook: who declares an incident, who drafts the notices, who approves them, and how evidence is preserved. Under the GDPR, the 72-hour notification goes to the supervisory authority where feasible (Article 33).${cite(3)}</p>
${callout(
  "warn",
  "Penalty exposure",
  "<p>Failure to notify the Board or affected Data Principals can attract a penalty of up to ₹200 crore, and failure to take reasonable security safeguards up to ₹250 crore. See <a href=\"/penalties\">penalties under the DPDPA</a>.</p>"
)}

<h2 id="toolkit">The DPO toolkit</h2>
<ul>
  <li><strong>Data inventory / record of processing</strong> — systems, data, purposes, grounds, retention, vendors and locations.</li>
  <li><strong>Notice and consent library</strong> — current notices, consent texts, version history and Consent Manager integration.</li>
  <li><strong>Policy set</strong> — privacy, retention, security, breach response, vendor management, children's data, rights handling.</li>
  <li><strong>DPIA template and register</strong> — see our <a href="/resources/guides/dpia-guide">DPIA guide</a>.</li>
  <li><strong>Vendor register</strong> — contracts, assessments and sub-processors.</li>
  <li><strong>Training programme</strong> — induction, annual refresher and role-based modules; our <a href="/certificate-course">DPDPA certificate course</a> can help.</li>
  <li><strong>Templates</strong> — notices, consent forms and policies from the <a href="/generator">document generator</a>.</li>
</ul>

<h2 id="kpis">Measuring success: DPO KPIs</h2>
${table(
  ["KPI", "Target (example)"],
  [
    ["Rights requests closed within deadline", "≥ 95%"],
    ["Breaches reported to the Board within required time", "100%"],
    ["New projects screened for DPIA", "100%"],
    ["Staff completing annual privacy training", "≥ 90%"],
    ["Vendors with signed data processing terms", "100% of those handling personal data"],
    ["Open high-risk DPIA actions past due", "0"],
    ["Data inventory reviewed in last 12 months", "Yes"],
  ]
)}

<h2 id="annual-calendar">An annual DPO calendar</h2>
${table(
  ["Quarter", "Focus"],
  [
    ["Q1", "Refresh the data inventory; review retention schedules and erasure jobs; plan the year's DPIAs and audits."],
    ["Q2", "Run annual privacy training; review vendor contracts and sub-processors; test the breach runbook with a tabletop exercise."],
    ["Q3", "Review notices, consent flows and children's data controls; check log retention (at least one year under the DPDP Rules)."],
    ["Q4", "Complete the annual DPIA and data audit (SDFs); report to the board of directors; set next year's privacy objectives."],
  ]
)}
<p class="lg-source-note">Log retention requirement from Rule 6 of the DPDP Rules.${cite(2)}</p>

<h2 id="checklist">DPO appointment checklist</h2>
${checklist([
  "Decide whether a DPO is legally required (SDF status, GDPR Article 37) or a contact person is enough.",
  "For an SDF, appoint an individual based in India who reports to the board of directors.",
  "Write a charter covering independence, resources, reporting lines and conflicts of interest.",
  "Publish contact details on the website and app, and include them in rights-request responses.",
  "Give the DPO access to all teams, systems and decision forums that involve personal data.",
  "Set KPIs and a reporting cadence to the board.",
  "Appoint an independent data auditor (SDFs) and agree the annual DPIA and audit plan.",
])}
<p>Considering an outsourced DPO? Read <a href="/insight/dpo-services-india">DPO services in India</a>.</p>
`;

export const dpoHandbook: GuideContent = {
  metaDescription:
    "DPO handbook for India and the EU: who must appoint a DPO, DPDPA section 10 rules, GDPR Articles 37–39, duties, KPIs and an annual plan.",
  excerpt:
    "A practical handbook for Data Protection Officers under India's DPDPA and the EU GDPR — who must appoint one, legal requirements, responsibilities, grievances and breach response, the DPO toolkit, KPIs and an annual calendar.",
  content,
  readTime: readTimeOf(content),
  lastUpdated: "27 Nov 2026",
  tableOfContents: [
    { id: "who-needs-dpo", title: "Who needs a DPO?" },
    { id: "dpdpa-requirements", title: "DPDPA requirements" },
    { id: "gdpr-requirements", title: "GDPR requirements" },
    { id: "responsibilities", title: "Core responsibilities" },
    { id: "grievances", title: "Grievances and rights" },
    { id: "breach-role", title: "Role in a data breach" },
    { id: "toolkit", title: "The DPO toolkit" },
    { id: "kpis", title: "DPO KPIs" },
    { id: "annual-calendar", title: "Annual calendar" },
    { id: "checklist", title: "Appointment checklist" },
  ],
  keyTakeaways: [
    "Under the DPDPA, every Significant Data Fiduciary must appoint a DPO based in India who is responsible to the board of directors.",
    "The DPDPA DPO represents the SDF under the Act and is the point of contact for grievance redressal.",
    "Every Data Fiduciary must publish contact details of a DPO or a person who can answer questions about processing (section 8(9), Rule 9).",
    "Under the GDPR, a DPO is mandatory for public authorities, large-scale systematic monitoring and large-scale special-category processing.",
    "GDPR DPOs must be independent, adequately resourced and free of conflicts of interest.",
    "Grievances under the DPDP Rules must be answered within a period not exceeding 90 days.",
  ],
  sources: [SRC.dpdpAct, SRC.dpdpRules, SRC.gdpr, SRC.edpbDpo],
  faqs: [
    {
      q: "Is a DPO mandatory under the DPDPA?",
      a: "Only for Significant Data Fiduciaries. Section 10(2)(a) requires them to appoint a DPO who represents the SDF, is based in India, is responsible to the board of directors and is the point of contact for grievances. Other Data Fiduciaries must publish contact details of a person who can answer questions about processing.",
    },
    {
      q: "Must the DPO be based in India?",
      a: "Yes, for a Significant Data Fiduciary under the DPDPA. Section 10(2)(a)(ii) requires the DPO to be based in India.",
    },
    {
      q: "Can the DPO role be outsourced?",
      a: "Under the GDPR, yes — Article 37(6) allows a DPO under a service contract. The DPDPA requires the SDF's DPO to be an individual based in India responsible to the board; organisations considering an outsourced model should check that it meets these requirements.",
    },
    {
      q: "What is the difference between a DPO and a grievance officer?",
      a: "Under the DPDPA, the DPO of a Significant Data Fiduciary is also the point of contact for grievance redressal. Other Data Fiduciaries need a published contact person who can answer questions, and a grievance mechanism that responds within 90 days, but do not need a formal DPO.",
    },
  ],
  relatedLinks: [
    { title: "DPO services in India", href: "/insight/dpo-services-india", description: "In-house vs outsourced DPO models." },
    { title: "Director liability under the DPDP Act", href: "/insight/dpdp-act-director-liability", description: "What boards need to know." },
    { title: "DPIA guide", href: "/resources/guides/dpia-guide", description: "Run DPIAs the DPO can sign off." },
    { title: "Grievance redressal", href: "/grievance-redressal", description: "How Data Principals raise and escalate complaints." },
  ],
};
