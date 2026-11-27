// data/guide-content/gdpr-vs-dpdpa.ts
import type { GuideContent } from "./types";
import { SRC } from "./sources";
import { cite, callout, table, checklist, readTimeOf } from "./html";

// Source numbers: 1 DPDP Act · 2 DPDP Rules · 3 GDPR · 4 EU adequacy list · 5 PIB explainer

const content = `
<p class="lg-lead">India's Digital Personal Data Protection Act, 2023 (DPDPA) borrows ideas from the EU's General Data Protection Regulation (GDPR) but is shorter, more prescriptive in places and deliberately simpler in others. For companies that must comply with both, the differences decide where one programme is enough and where you need India-specific or EU-specific controls. This guide sets out those differences, explains why they matter, and ends with a practical plan for running a single, dual-compliant programme.</p>

${callout(
  "key",
  "The short version",
  "<p>The two laws agree on the <strong>fundamentals</strong> — transparency, purpose limitation, security, rights and accountability. They differ most on <strong>lawful grounds</strong>, <strong>sensitive data</strong>, <strong>children</strong>, <strong>breach notification</strong>, <strong>international transfers</strong> and <strong>how penalties are calculated</strong>.</p>"
)}

<h2 id="at-a-glance">At-a-glance comparison</h2>
${table(
  ["Topic", "GDPR (EU) 2016/679", "DPDPA 2023 + DPDP Rules 2025"],
  [
    ["Data covered", "All personal data processed wholly or partly by automated means, or in a filing system", "Digital personal data, including data collected offline and later digitised (s.3)"],
    ["Excluded data", "Purely personal or household activity", "Personal or domestic purposes; data made publicly available by the Data Principal or under a legal obligation (s.3(c))"],
    ["Extraterritorial reach", "Offering goods/services to, or monitoring, people in the EU (Art. 3(2))", "Processing outside India in connection with offering goods or services to Data Principals in India (s.3(b))"],
    ["Key actors", "Controller, processor, data subject", "Data Fiduciary, Data Processor, Data Principal, Consent Manager"],
    ["Lawful grounds", "Six bases, including legitimate interests (Art. 6)", "Consent, or a closed list of 'certain legitimate uses' (ss.4, 6, 7)"],
    ["Sensitive data", "Special categories with extra conditions (Art. 9)", "No separate category; children's data has special rules"],
    ["Children", "Consent threshold 16 for online services (Member States may lower to 13)", "Under 18; verifiable parental consent, no tracking, behavioural monitoring or targeted ads (s.9)"],
    ["Rights", "Access, rectification, erasure, restriction, portability, objection, automated decisions", "Access to information, correction and erasure, grievance redressal, nomination (ss.11–14)"],
    ["Duties of individuals", "None", "Duties of Data Principals; penalty up to ₹10,000 (s.15)"],
    ["Breach notification", "Regulator within 72 hours if risk; individuals if high risk", "Every breach to the Board and each affected Data Principal; detailed Board report within 72 hours (s.8(6), Rule 7)"],
    ["DPO", "Mandatory on Art. 37 criteria", "Mandatory for Significant Data Fiduciaries only; others publish a contact person (ss.8(9), 10)"],
    ["Impact assessment", "DPIA for high-risk processing (Art. 35)", "Annual DPIA and audit for Significant Data Fiduciaries (s.10, Rule 13)"],
    ["International transfers", "Restricted unless adequacy, safeguards or derogation (Ch. V)", "Permitted except to countries the Government restricts by notification (s.16, Rule 15)"],
    ["Regulator", "Independent supervisory authority in each Member State, EDPB", "Data Protection Board of India; appeals to TDSAT (ss.18, 29)"],
    ["Maximum penalty", "€20 million or 4% of worldwide turnover", "Up to ₹250 crore per instance under the Schedule (s.33)"],
    ["Compensation to individuals", "Yes (Art. 82)", "No statutory compensation; penalties go to the Consolidated Fund of India (s.34)"],
  ],
  "GDPR vs DPDPA — key differences"
)}
<p class="lg-source-note">Compiled from the official texts of the GDPR, the DPDP Act and the DPDP Rules.${cite(1, 2, 3)}</p>

<h2 id="scope">Scope and applicability</h2>
<p>The GDPR applies to all personal data, digital or paper, while the DPDPA applies only to <strong>digital personal data</strong> — though paper records that are later digitised come within scope.${cite(1, 3)} Both laws reach foreign businesses: the GDPR through Article 3(2) (targeting or monitoring), the DPDPA through section 3(b) (offering goods or services to Data Principals in India). Unlike the GDPR, the DPDPA does <strong>not</strong> cover foreign businesses that merely monitor or profile Indians without offering them goods or services.</p>
<p>The DPDPA also excludes personal data that the Data Principal has made publicly available, or that someone else has published under a legal obligation (section 3(c)(ii)). The GDPR has no such general exclusion — publicly available data is still personal data.${cite(1, 3)}</p>

<h2 id="lawful-grounds">Lawful grounds for processing</h2>
<p>This is the biggest practical difference. The GDPR offers six lawful bases. The DPDPA allows processing only (a) with consent, or (b) for one of the "certain legitimate uses" in section 7, which include:${cite(1)}</p>
<ul>
  <li>data the Data Principal voluntarily provides for a specified purpose without indicating objection;</li>
  <li>State subsidies, benefits, services, licences and permits;</li>
  <li>compliance with a law, judgment or order;</li>
  <li>medical emergencies, epidemics and disasters;</li>
  <li>employment purposes, including preventing corporate espionage and protecting the employer from loss or liability.</li>
</ul>
<p>There is <strong>no "legitimate interests" ground</strong> in the DPDPA. Marketing analytics, fraud models or product research that rely on legitimate interests in Europe will often need consent — or a careful fit within a section 7 use — in India. Consent under the DPDPA must be free, specific, informed, unconditional and unambiguous, given by a clear affirmative action, limited to necessary data, and preceded by a notice (sections 5 and 6). Data Principals can manage consent through a registered <strong>Consent Manager</strong>, a role with no GDPR equivalent.${cite(1, 2)} Read more on <a href="/lawful-processing">lawful processing and Consent Managers</a>.</p>

<h2 id="sensitive-children">Sensitive data and children</h2>
<p>The GDPR singles out special categories — health, biometrics, religion, sexual orientation and others — and allows their processing only under Article 9 conditions.${cite(3)} The DPDPA treats all personal data alike, though the Government can use factors such as the sensitivity and volume of data to designate a company as a Significant Data Fiduciary (section 10).${cite(1)}</p>
<p>On children, the DPDPA is much stricter. A child is anyone under <strong>18</strong>, verifiable consent of a parent or lawful guardian is required, and Data Fiduciaries must not undertake tracking, behavioural monitoring or targeted advertising directed at children (section 9). The DPDP Rules describe how verifiable consent is obtained and exempt specified classes, such as healthcare and educational institutions, for particular purposes.${cite(1, 2)} The GDPR's parental-consent rule applies only to online services offered directly to children below 16 (or a lower national age).${cite(3)}</p>

<h2 id="rights">Rights of individuals</h2>
${table(
  ["Right", "GDPR", "DPDPA"],
  [
    ["Access", "Yes — copy of data and detailed information (Art. 15)", "Summary of data and processing, and identities of Fiduciaries and Processors it was shared with (s.11)"],
    ["Correction / completion", "Yes (Art. 16)", "Yes (s.12)"],
    ["Erasure", "Yes, on specified grounds (Art. 17)", "Yes, unless retention is necessary for the purpose or required by law (s.12)"],
    ["Restriction", "Yes (Art. 18)", "No"],
    ["Portability", "Yes (Art. 20)", "No"],
    ["Objection", "Yes (Art. 21)", "No general right — but consent can be withdrawn at any time (s.6(4))"],
    ["Automated decisions", "Yes (Art. 22)", "No specific right"],
    ["Grievance redressal", "Complaint to supervisory authority", "Must first use the Fiduciary's grievance mechanism; response within a period not exceeding 90 days (s.13, Rule 14)"],
    ["Nomination", "No", "Yes — nominate someone to act on death or incapacity (s.14)"],
    ["Response time", "One month, extendable by two months", "As per Rules; grievances within 90 days"],
  ]
)}
<p class="lg-source-note">See also our explainer on <a href="/rights">Data Principal rights</a>.${cite(1, 2, 3)}</p>

<h2 id="obligations">Organisational obligations</h2>
<h3>Accountability and processors</h3>
<p>Under the GDPR, processors have direct legal duties (security, records, sub-processor rules). Under the DPDPA, the <strong>Data Fiduciary</strong> remains responsible for compliance even when a Data Processor acts for it, and may engage a processor only under a valid contract (section 8(1)–(2)).${cite(1, 3)} Indian vendor contracts therefore carry much of the compliance burden.</p>
<h3>Security and logs</h3>
<p>Both laws require appropriate security. The DPDP Rules go further by listing minimum measures — encryption, obfuscation or masking, access controls, logs and monitoring, backups for continuity — and require logs to be kept for at least one year.${cite(2)}</p>
<h3>Retention</h3>
<p>The GDPR sets storage limitation as a principle. The DPDPA requires erasure once consent is withdrawn or the purpose is no longer being served (section 8(7)), and the Rules set a three-year inactivity limit for large e-commerce, online gaming and social media platforms, with 48 hours' notice before erasure.${cite(1, 2)}</p>
<h3>DPO, DPIA and audit</h3>
<p>The GDPR's DPO, DPIA and records obligations depend on the nature of the processing. Under the DPDPA these heavier governance duties fall mainly on <strong>Significant Data Fiduciaries</strong>: a DPO based in India and responsible to the board, an independent data auditor, and an annual DPIA and audit (section 10, Rule 13). Every Data Fiduciary must still publish contact details of a DPO or a person who can answer questions about processing (section 8(9), Rule 9).${cite(1, 2)} See the <a href="/obligations">full list of Data Fiduciary obligations</a>.</p>

<h2 id="breach">Breach notification</h2>
<p>The difference here catches many companies out. The GDPR uses a <strong>risk threshold</strong>: notify the regulator unless the breach is unlikely to cause risk, and notify individuals only if the risk is high.${cite(3)} The DPDPA has <strong>no threshold</strong>: every personal data breach must be intimated to the Data Protection Board and to each affected Data Principal. The Rules require intimation to affected individuals without delay, an initial intimation to the Board without delay, and a detailed report to the Board within 72 hours (or longer if the Board allows).${cite(1, 2)}</p>
${callout(
  "warn",
  "Do not copy your GDPR runbook",
  "<p>A GDPR-only incident plan that screens out \"low-risk\" breaches would leave you in breach of the DPDPA, where failure to notify can attract a penalty of up to ₹200 crore.</p>"
)}

<h2 id="transfers">International data transfers</h2>
<p>The GDPR follows a <strong>"white-list"</strong> model: transfers outside the EU are restricted unless the destination has an adequacy decision or the exporter uses safeguards such as Standard Contractual Clauses. India has no adequacy decision.${cite(3, 4)} The DPDPA follows a <strong>"negative-list"</strong> model: transfers are allowed except to countries the Central Government restricts by notification (section 16), and Rule 15 allows the Government to set requirements for making data available to foreign States. Stricter sectoral rules — such as RBI's payment-data localisation — continue to apply.${cite(1, 2)} Our <a href="/resources/guides/cross-border-data-transfer">cross-border transfer guide</a> covers both directions, and the <a href="/cross-border">cross-border page</a> explains section 16.</p>

<h2 id="enforcement">Enforcement and penalties</h2>
<p>GDPR fines are linked to worldwide turnover. DPDPA penalties are fixed maximum amounts per instance set out in the Schedule, decided by the Board after an inquiry, taking into account factors such as the nature, gravity and duration of the breach and any mitigation.${cite(1, 3)}</p>
${table(
  ["DPDPA breach (Schedule)", "Maximum penalty"],
  [
    ["Failure to take reasonable security safeguards to prevent a personal data breach", "₹250 crore"],
    ["Failure to notify the Board or affected Data Principals of a breach", "₹200 crore"],
    ["Breach of additional obligations relating to children", "₹200 crore"],
    ["Breach of additional obligations of Significant Data Fiduciaries", "₹150 crore"],
    ["Breach of duties by a Data Principal", "₹10,000"],
    ["Breach of any other provision of the Act or Rules", "₹50 crore"],
  ]
)}
<p>Details are in our <a href="/penalties">penalties explainer</a>. Unlike the GDPR, the DPDPA does not give individuals a statutory right to compensation, and civil courts cannot hear matters the Board is empowered to decide.${cite(1)}</p>

<h2 id="timeline">Commencement timeline</h2>
<p>The GDPR has applied since 25 May 2018. The DPDP Rules, 2025 were notified in November 2025 with a phased start: provisions establishing the Data Protection Board took effect immediately, Consent Manager registration one year later, and most operational obligations — notice, security, breach intimation, retention, children's data, SDF duties and rights — 18 months after notification.${cite(2, 5)} Plan your Indian controls against those dates, and see the <a href="/board">Data Protection Board page</a> for the regulator's status.</p>

<h2 id="dual-compliance">Running one programme for both laws</h2>
${checklist([
  "<strong>Map once, tag twice.</strong> Keep a single data inventory, tagging each activity with its GDPR lawful basis and DPDPA ground (consent or section 7 use).",
  "<strong>Fix the legitimate-interest gap.</strong> List every activity relying on legitimate interests and decide its DPDPA ground.",
  "<strong>Layer your notices.</strong> Use a common core notice with EU and India sections; offer DPDPA notices in English or an Eighth Schedule language where needed.",
  "<strong>Adopt the stricter breach rule.</strong> Notify the DPBI and Data Principals for every breach in scope; apply GDPR risk tests for EU notifications.",
  "<strong>Build a superset rights portal.</strong> Support portability and objection for EU users, nomination and grievance for Indian users.",
  "<strong>Treat under-18s as children for India.</strong> Age-gate and obtain verifiable parental consent; switch off tracking and targeted ads for Indian children.",
  "<strong>Align vendor contracts.</strong> Combine Article 28 terms with DPDPA processor clauses on security, breach notice, erasure and logs.",
  "<strong>One assessment method.</strong> Use a DPIA template that satisfies GDPR Article 35 and DPDPA section 10.",
])}
<p>Check your India readiness in ten minutes with the <a href="/scorecard">DPDPA compliance scorecard</a>, or learn the law in depth through the <a href="/certificate-course">DPDPA certificate course</a>.</p>
`;

export const gdprVsDpdpa: GuideContent = {
  metaDescription:
    "GDPR vs DPDPA 2023: scope, lawful grounds, children, rights, breach notification, transfers and penalties compared, with a dual-compliance plan.",
  excerpt:
    "A clear, side-by-side comparison of the EU GDPR and India's DPDPA 2023 with the DPDP Rules 2025 — scope, lawful grounds, children, rights, breach notification, transfers and penalties — plus a plan for dual compliance.",
  content,
  readTime: readTimeOf(content),
  lastUpdated: "27 Nov 2026",
  tableOfContents: [
    { id: "at-a-glance", title: "At-a-glance comparison" },
    { id: "scope", title: "Scope and applicability" },
    { id: "lawful-grounds", title: "Lawful grounds" },
    { id: "sensitive-children", title: "Sensitive data and children" },
    { id: "rights", title: "Rights of individuals" },
    { id: "obligations", title: "Organisational obligations" },
    { id: "breach", title: "Breach notification" },
    { id: "transfers", title: "International transfers" },
    { id: "enforcement", title: "Enforcement & penalties" },
    { id: "timeline", title: "Commencement timeline" },
    { id: "dual-compliance", title: "One programme for both" },
  ],
  keyTakeaways: [
    "The DPDPA covers only digital personal data; the GDPR covers all personal data.",
    "The DPDPA has no 'legitimate interests' ground — processing needs consent or a section 7 legitimate use.",
    "The DPDPA has no special categories of data, but treats everyone under 18 as a child.",
    "Every personal data breach must be reported to the Data Protection Board and affected individuals under the DPDPA — there is no risk threshold.",
    "The GDPR restricts transfers unless safeguards exist; the DPDPA allows transfers except to countries the Government restricts.",
    "GDPR fines are turnover-based (up to 4%); DPDPA penalties are fixed maximums per instance (up to ₹250 crore).",
    "DPO, DPIA and audit duties apply under the DPDPA mainly to Significant Data Fiduciaries.",
  ],
  sources: [SRC.dpdpAct, SRC.dpdpRules, SRC.gdpr, SRC.euAdequacy, SRC.dpdpRulesPib],
  faqs: [
    {
      q: "Is the DPDPA the same as the GDPR?",
      a: "No. They share core principles such as transparency, purpose limitation, security and accountability, but the DPDPA applies only to digital personal data, has no legitimate-interests ground or special categories, treats everyone under 18 as a child, requires notification of every breach, and allows international transfers unless the Government restricts a country.",
    },
    {
      q: "If my company is GDPR compliant, is it DPDPA compliant?",
      a: "Not automatically. GDPR compliance gives a strong base, but you will need to review lawful grounds (no legitimate interests), breach notification (no risk threshold), children's data (under 18, verifiable parental consent), notice language, grievance redressal, nomination and DPDP Rules requirements such as one-year log retention.",
    },
    {
      q: "Does the DPDPA have a right to data portability?",
      a: "No. The DPDPA gives rights to access information, correction and erasure, grievance redressal and nomination. It does not include the GDPR's rights to portability, restriction, objection or protection from solely automated decisions.",
    },
    {
      q: "Which law has higher penalties, GDPR or DPDPA?",
      a: "They are calculated differently. GDPR fines can reach €20 million or 4% of worldwide annual turnover. DPDPA penalties are fixed maximums per instance in the Schedule, up to ₹250 crore for failing to take reasonable security safeguards.",
    },
    {
      q: "Does India have an EU adequacy decision?",
      a: "No. Transfers of personal data from the EU to India therefore normally rely on Standard Contractual Clauses or Binding Corporate Rules.",
    },
  ],
  relatedLinks: [
    { title: "DPDPA vs GDPR comparison table", href: "/compare/dpdpa-vs-gdpr", description: "Clause-by-clause comparison of both laws." },
    { title: "DPDPA 2023 — Complete Guide", href: "/resources/guides/dpdpa-2023-complete-guide", description: "Everything about India's DPDP Act and Rules." },
    { title: "GDPR Essentials for Indian Companies", href: "/resources/guides/gdpr-essentials-indian-companies", description: "When the GDPR applies to Indian businesses." },
    { title: "Penalties under the DPDPA", href: "/penalties", description: "The Schedule of penalties explained." },
  ],
};
