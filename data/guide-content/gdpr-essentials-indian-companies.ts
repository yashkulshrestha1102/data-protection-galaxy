// data/guide-content/gdpr-essentials-indian-companies.ts
import type { GuideContent } from "./types";
import { SRC } from "./sources";
import { cite, callout, table, checklist, readTimeOf } from "./html";

// Source numbers used in the text below (order of `sources`):
// 1 GDPR text · 2 EDPB territorial scope · 3 EU adequacy list · 4 SCC decision
// 5 DPDP Act · 6 WP243 DPO guidelines · 7 WP248 DPIA guidelines

const content = `
<p class="lg-lead">The EU General Data Protection Regulation (GDPR) reaches well beyond Europe. An Indian SaaS start-up with customers in Berlin, an e-commerce site that ships to Paris, or an IT services company that processes payroll for a Dutch client can all be affected — directly by the Regulation or indirectly through their contracts. This guide explains when the GDPR applies to an Indian business, what it requires, and how to build a programme that also fits India's Digital Personal Data Protection Act, 2023 (DPDPA).</p>

<h2 id="why-care">Why Indian companies must care about the GDPR</h2>
<p>India is one of the world's largest destinations for outsourced technology and business-process work, and European clients are among its biggest buyers. Those clients are bound by the GDPR, so they pass its requirements down the supply chain through data processing agreements, security schedules and audit rights. At the same time, many Indian product companies now sell directly to European consumers and businesses, which can bring them inside the Regulation's territorial scope without any office in Europe.${cite(1, 2)}</p>
<p>The cost of getting this wrong is significant: administrative fines of up to <strong>€20 million or 4% of worldwide annual turnover</strong>, whichever is higher, plus compensation claims and the commercial cost of losing EU contracts.${cite(1)}</p>
${callout(
  "key",
  "In one line",
  "<p>If you <strong>sell to</strong>, <strong>track</strong> or <strong>process data for</strong> people or companies in the EU, assume GDPR questions will reach you — either from a regulator or from your client's procurement team.</p>"
)}

<h2 id="when-applies">When the GDPR applies to Indian businesses</h2>
<p>Article 3 sets out the territorial scope. Three routes matter for Indian organisations:${cite(1, 2)}</p>
${table(
  ["Route", "What triggers it", "Typical Indian example"],
  [
    ["Establishment — Art. 3(1)", "Processing in the context of the activities of an establishment (office, branch, subsidiary or other stable arrangement) in the EU, wherever the processing takes place.", "An Indian group with a sales subsidiary in Ireland; the subsidiary's customer data is in scope even if it is hosted in Mumbai."],
    ["Targeting — Art. 3(2)(a)", "Offering goods or services to individuals in the EU, whether or not payment is required.", "A website priced in euros, shipping to EU countries, with German or French language pages."],
    ["Monitoring — Art. 3(2)(b)", "Monitoring the behaviour of individuals in the EU, as far as that behaviour takes place in the EU.", "An Indian ad-tech or analytics company profiling EU users through cookies, SDKs or location data."],
  ],
  "The three routes into GDPR scope"
)}
<p>Mere accessibility of a website from Europe is not enough for targeting. The European Data Protection Board (EDPB) looks for signs of intention, such as EU currencies, EU languages, delivery to EU addresses, EU-specific marketing or references to EU customers.${cite(2)}</p>

<h3>What about Indian IT and BPO service providers?</h3>
<p>An Indian company that only processes personal data <em>on behalf of</em> an EU client is usually acting as a <strong>processor</strong>. According to the EDPB, a non-EU processor does not become directly subject to the GDPR merely because it works for an EU controller; instead, the controller must impose GDPR-level obligations on it by contract under Article 28 and must cover the international transfer under Chapter V.${cite(1, 2)} In practice that means the obligations reach the Indian vendor anyway — through the data processing agreement and the Standard Contractual Clauses it signs.</p>
${callout(
  "tip",
  "Indian law angle",
  `<p>Section 17(1)(d) of the DPDPA exempts processing in India of personal data of people <strong>outside India</strong> under a contract with a foreign person from most of the Act's obligations — but the Data Fiduciary's overall accountability under section 8(1) and the security-safeguards duty in section 8(5) still apply.${cite(5)} So GDPR contractual duties and DPDPA security duties run side by side.</p>`
)}

<h2 id="key-definitions">Key definitions</h2>
<p>Article 4 defines the vocabulary used throughout the Regulation:${cite(1)}</p>
<ul>
  <li><strong>Personal data</strong> — any information relating to an identified or identifiable natural person ("data subject"), including online identifiers such as IP addresses and cookie IDs.</li>
  <li><strong>Processing</strong> — any operation on personal data: collection, storage, consultation, use, disclosure, erasure and so on.</li>
  <li><strong>Controller</strong> — the body that decides the purposes and means of processing. Under the DPDPA the equivalent term is <a href="/glossary">Data Fiduciary</a>.</li>
  <li><strong>Processor</strong> — the body that processes personal data on behalf of the controller (DPDPA: Data Processor).</li>
  <li><strong>Pseudonymisation</strong> — processing so that data can no longer be attributed to a person without additional information kept separately. Pseudonymised data is still personal data; truly anonymous data is not.</li>
  <li><strong>Special categories</strong> (Article 9) — racial or ethnic origin, political opinions, religious or philosophical beliefs, trade-union membership, genetic data, biometric data for identification, health data, and data on sex life or sexual orientation.</li>
</ul>

<h2 id="key-principles">The seven GDPR principles</h2>
<p>Article 5 is the backbone of the Regulation. Every processing activity must meet these principles, and the controller must be able to <em>demonstrate</em> that it does.${cite(1)}</p>
${table(
  ["Principle", "What it means in practice"],
  [
    ["Lawfulness, fairness and transparency", "Have a lawful basis, avoid hidden or unexpected uses, and tell people clearly what you do."],
    ["Purpose limitation", "Collect for specified, explicit and legitimate purposes and do not reuse data for incompatible purposes."],
    ["Data minimisation", "Collect only what is adequate, relevant and necessary for the purpose."],
    ["Accuracy", "Keep data accurate and up to date; correct or erase inaccurate data without delay."],
    ["Storage limitation", "Keep identifiable data no longer than necessary — define and enforce retention periods."],
    ["Integrity and confidentiality", "Protect data with appropriate technical and organisational security measures."],
    ["Accountability — Art. 5(2)", "Be able to prove compliance: policies, records, assessments, training and audit trails."],
  ]
)}

<h2 id="lawful-bases">The six lawful bases for processing</h2>
<p>Under Article 6(1), processing is lawful only if at least one of six bases applies. Choose and document the basis <em>before</em> processing starts, because switching later is difficult to justify.${cite(1)}</p>
<ol>
  <li><strong>Consent</strong> — freely given, specific, informed and unambiguous, given by a clear affirmative act; as easy to withdraw as to give (Article 7). Pre-ticked boxes do not count.</li>
  <li><strong>Contract</strong> — necessary to perform a contract with the individual or to take steps at their request before entering one.</li>
  <li><strong>Legal obligation</strong> — necessary to comply with an EU or Member State law that binds the controller.</li>
  <li><strong>Vital interests</strong> — necessary to protect someone's life.</li>
  <li><strong>Public task</strong> — necessary for a task in the public interest or in the exercise of official authority.</li>
  <li><strong>Legitimate interests</strong> — necessary for the legitimate interests of the controller or a third party, unless overridden by the individual's interests or rights. Document a balancing test (often called a Legitimate Interests Assessment).</li>
</ol>
<p>Special-category data needs an additional condition under Article 9(2), such as explicit consent or employment-law obligations. For online services offered directly to children, consent is valid only from age 16, although Member States may lower this to as young as 13 (Article 8).${cite(1)}</p>
${callout(
  "info",
  "Key difference from India",
  `<p>The DPDPA has no "legitimate interests" basis. It relies on consent plus a closed list of "certain legitimate uses" in section 7.${cite(5)} A processing activity that rests on legitimate interests under the GDPR may need consent, or a specific legitimate use, under Indian law. See <a href="/lawful-processing">Lawful Processing under the DPDPA</a>.</p>`
)}

<h2 id="data-rights">Data subject rights</h2>
<p>Chapter III gives individuals a set of enforceable rights. The controller must respond <strong>without undue delay and within one month</strong> of receiving a request, extendable by two further months for complex or numerous requests, and generally free of charge (Article 12(3) and (5)).${cite(1)}</p>
${table(
  ["Right", "Article", "Practical note"],
  [
    ["To be informed", "13–14", "Privacy notices at collection, or within a month when data comes from a third party."],
    ["Access", "15", "Copy of the data plus purposes, recipients, retention, source and safeguards for transfers."],
    ["Rectification", "16", "Correct inaccurate data and complete incomplete data."],
    ["Erasure ('right to be forgotten')", "17", "Applies on specified grounds, with exceptions such as legal obligations."],
    ["Restriction", "18", "Store but stop using data while accuracy or an objection is checked."],
    ["Data portability", "20", "Machine-readable copy where processing is by consent or contract and automated."],
    ["Objection", "21", "Absolute right to object to direct marketing; qualified right against legitimate-interest processing."],
    ["Automated decisions", "22", "Right not to be subject to solely automated decisions with legal or similarly significant effects, subject to exceptions."],
  ]
)}
<p>For Indian processors, Article 28(3)(e) requires the contract to oblige the processor to help the controller answer these requests. Build ticket workflows and search tools so your EU client's one-month clock is not consumed by your internal delays. Compare these rights with <a href="/rights">Data Principal rights under the DPDPA</a>.</p>

<h2 id="obligations">Controller and processor obligations</h2>
<h3>Accountability and privacy by design</h3>
<p>Controllers must implement appropriate measures to ensure and demonstrate compliance (Article 24) and apply data protection by design and by default (Article 25) — for example, minimal default data collection and privacy-friendly default settings in products.${cite(1)}</p>
<h3>EU representative (Article 27)</h3>
<p>A controller or processor caught by Article 3(2) — targeting or monitoring without an EU establishment — must designate a representative in an EU Member State where the relevant individuals are located. There is a narrow exemption for occasional, low-risk processing that does not involve large-scale special-category data.${cite(1)}</p>
<h3>Processor contracts (Article 28)</h3>
<p>Every controller–processor relationship needs a written contract covering, among other things: processing only on documented instructions, confidentiality of staff, security under Article 32, conditions for engaging sub-processors, assistance with rights requests and breaches, deletion or return of data at the end, and audit cooperation.${cite(1)}</p>
<h3>Records of processing (Article 30)</h3>
<p>Controllers and processors must maintain a Record of Processing Activities (RoPA). The limited exemption for organisations with fewer than 250 employees does not apply where processing is regular, risky or involves special categories, so most businesses need one.${cite(1)}</p>
<h3>Security (Article 32)</h3>
<p>Security measures must be appropriate to the risk and may include pseudonymisation and encryption, the ability to ensure ongoing confidentiality, integrity, availability and resilience, timely restoration after incidents, and regular testing.${cite(1)}</p>

<h2 id="breach">Personal data breach notification</h2>
<p>A personal data breach is a security incident leading to accidental or unlawful destruction, loss, alteration, unauthorised disclosure of or access to personal data.${cite(1)}</p>
<ul>
  <li><strong>To the supervisory authority</strong> — without undue delay and, where feasible, <strong>within 72 hours</strong> of becoming aware, unless the breach is unlikely to result in a risk to individuals (Article 33).</li>
  <li><strong>To individuals</strong> — without undue delay where the breach is likely to result in a <em>high</em> risk to their rights and freedoms (Article 34).</li>
  <li><strong>Processors</strong> must notify the controller without undue delay after becoming aware (Article 33(2)). Many EU clients contractually require 24–48 hours.</li>
  <li>Document every breach, including those not notified (Article 33(5)).</li>
</ul>
${callout(
  "warn",
  "Two clocks for Indian companies",
  `<p>A breach involving EU and Indian data can trigger both regimes. The DPDPA requires intimation of <em>every</em> personal data breach to the Data Protection Board and each affected Data Principal, with no risk threshold, and the DPDP Rules require a detailed report to the Board within 72 hours.${cite(5)} Align your incident-response runbook to the stricter requirement in each case.</p>`
)}

<h2 id="dpia">DPIA and the Data Protection Officer</h2>
<p>A <strong>Data Protection Impact Assessment</strong> is mandatory where processing is likely to result in a high risk — for example, systematic profiling with significant effects, large-scale special-category data, or large-scale monitoring of public areas (Article 35). The EDPB-endorsed guidelines list nine criteria; meeting two or more usually means a DPIA is needed.${cite(1, 7)} Our <a href="/resources/guides/dpia-guide">DPIA guide</a> walks through the method.</p>
<p>A <strong>Data Protection Officer</strong> is mandatory where (a) processing is carried out by a public authority, (b) core activities involve regular and systematic monitoring of individuals on a large scale, or (c) core activities involve large-scale processing of special-category or criminal-offence data (Article 37). The DPO must be independent, report to the highest management level and must not be penalised for performing their tasks (Article 38).${cite(1, 6)} See the <a href="/resources/guides/dpo-handbook">DPO Handbook</a>.</p>

<h2 id="cross-border">Cross-border transfers to India</h2>
<p>Chapter V (Articles 44–49) restricts transfers of personal data from the EU to "third countries". The routes, in order of how often Indian companies rely on them, are:${cite(1)}</p>
<ol>
  <li><strong>Adequacy decision (Article 45)</strong> — <strong>India does not currently have one.</strong> Check the European Commission's list before relying on this.${cite(3)}</li>
  <li><strong>Standard Contractual Clauses (Article 46)</strong> — the 2021 SCCs adopted by Commission Implementing Decision (EU) 2021/914, with modules for controller-to-controller, controller-to-processor, processor-to-processor and processor-to-controller transfers.${cite(4)}</li>
  <li><strong>Binding Corporate Rules (Article 47)</strong> — approved group-wide rules, useful for large Indian multinationals with EU entities.</li>
  <li><strong>Derogations (Article 49)</strong> — such as explicit consent or necessity for a contract; for occasional transfers only, not routine outsourcing.</li>
</ol>
<p>Following the Court of Justice's <em>Schrems II</em> judgment (C-311/18, 2020), exporters must also carry out a <strong>transfer impact assessment</strong> that considers whether laws and practices in the destination country could undermine the SCCs, and add supplementary measures (such as strong encryption with keys held in the EU) where needed.${cite(4)} Indian vendors should expect EU clients to ask about government-access laws, encryption and data location. For the Indian side of the picture, read our <a href="/resources/guides/cross-border-data-transfer">Cross-Border Data Transfer guide</a>.</p>

<h2 id="penalties">Penalties and enforcement</h2>
${table(
  ["Tier", "Maximum fine", "Examples of infringements"],
  [
    ["Lower tier — Art. 83(4)", "€10 million or 2% of worldwide annual turnover, whichever is higher", "Children's consent (Art. 8), privacy by design (Art. 25), processor contracts (Art. 28), records (Art. 30), security (Art. 32), breach notification (Arts. 33–34), DPIA and DPO duties."],
    ["Upper tier — Art. 83(5)", "€20 million or 4% of worldwide annual turnover, whichever is higher", "Principles (Art. 5), lawful bases (Art. 6), consent (Art. 7), special categories (Art. 9), data subject rights (Arts. 12–22), international transfers (Arts. 44–49)."],
  ]
)}
<p>Individuals can also claim compensation for material or non-material damage (Article 82), and supervisory authorities can order processing to stop or suspend data flows to a third country — often more damaging to an outsourcing business than a fine.${cite(1)}</p>

<h2 id="dpdpa-alignment">Aligning GDPR with the DPDPA</h2>
<p>Most Indian businesses that deal with Europe also process Indian customers' or employees' data, so they need one programme that satisfies both laws. The good news is that the core building blocks overlap: data mapping, notices, consent records, rights handling, vendor contracts, security and breach response. The key differences to plan for are summarised in our <a href="/resources/guides/gdpr-vs-dpdpa">GDPR vs DPDPA guide</a> and the detailed <a href="/compare/dpdpa-vs-gdpr">DPDPA vs GDPR comparison</a>.</p>

<h2 id="checklist">GDPR readiness checklist for Indian companies</h2>
${checklist([
  "Decide whether you are in scope under Article 3(1), 3(2)(a) or 3(2)(b), or only contractually as a processor — and record the reasoning.",
  "Build a Record of Processing Activities covering EU data, systems, vendors and locations.",
  "Choose and document a lawful basis for each purpose; run Legitimate Interests Assessments where relied on.",
  "Publish GDPR-compliant privacy notices (Articles 13–14) and fix cookie consent for EU visitors.",
  "Appoint an EU representative if Article 27 applies, and a DPO if Article 37 applies.",
  "Put Article 28 data processing agreements and the 2021 SCCs in place with clients and sub-processors; complete transfer impact assessments.",
  "Set up a rights-request workflow that meets the one-month deadline.",
  "Implement Article 32 security controls and test them regularly.",
  "Adopt a breach runbook covering the GDPR 72-hour rule and the DPDPA's Board and Data Principal intimation.",
  "Run DPIAs for high-risk processing and train staff who handle EU data.",
])}
<p>Want a quick view of your Indian-law readiness as well? Take the free <a href="/scorecard">DPDPA compliance scorecard</a>, or generate a first-draft privacy notice with the <a href="/generator">document generator</a>.</p>
`;

export const gdprEssentials: GuideContent = {
  metaDescription:
    "When the GDPR applies to Indian companies: scope, lawful bases, rights, processor duties, 72-hour breach rule, transfers to India and fines.",
  excerpt:
    "When the EU GDPR applies to Indian companies, what it requires — principles, lawful bases, rights, processor contracts, breach rules, transfers to India and fines — and how to align it with the DPDPA.",
  content,
  readTime: readTimeOf(content),
  lastUpdated: "27 Nov 2026",
  tableOfContents: [
    { id: "why-care", title: "Why Indian companies must care" },
    { id: "when-applies", title: "When the GDPR applies" },
    { id: "key-definitions", title: "Key definitions" },
    { id: "key-principles", title: "The seven principles" },
    { id: "lawful-bases", title: "Six lawful bases" },
    { id: "data-rights", title: "Data subject rights" },
    { id: "obligations", title: "Controller & processor duties" },
    { id: "breach", title: "Breach notification" },
    { id: "dpia", title: "DPIA and DPO" },
    { id: "cross-border", title: "Transfers to India" },
    { id: "penalties", title: "Penalties & enforcement" },
    { id: "dpdpa-alignment", title: "Aligning with the DPDPA" },
    { id: "checklist", title: "Readiness checklist" },
  ],
  keyTakeaways: [
    "The GDPR can apply to an Indian company with no EU office if it offers goods or services to, or monitors, people in the EU (Article 3(2)).",
    "Indian IT/BPO vendors acting as processors are bound mainly through Article 28 contracts and the 2021 Standard Contractual Clauses.",
    "Every processing activity needs one of six lawful bases; the DPDPA has no equivalent of 'legitimate interests'.",
    "Rights requests must be answered within one month, extendable by two further months.",
    "Breaches go to the supervisory authority within 72 hours where feasible, and to individuals when the risk is high.",
    "India has no EU adequacy decision, so transfers usually rely on SCCs plus a transfer impact assessment.",
    "Fines reach €20 million or 4% of worldwide annual turnover, whichever is higher.",
  ],
  sources: [SRC.gdpr, SRC.edpbScope, SRC.euAdequacy, SRC.euScc, SRC.dpdpAct, SRC.edpbDpo, SRC.edpbDpia],
  faqs: [
    {
      q: "Does the GDPR apply to an Indian company with no office in Europe?",
      a: "Yes, it can. Under Article 3(2) the GDPR applies to a company outside the EU that offers goods or services to people in the EU or monitors their behaviour there. Signs of targeting include euro pricing, EU languages and delivery to EU addresses. Mere accessibility of a website is not enough.",
    },
    {
      q: "Is an Indian IT services company that processes data for an EU client directly subject to the GDPR?",
      a: "Usually not directly. According to the EDPB, a non-EU processor is not subject to the GDPR merely because it works for an EU controller. However, the controller must bind it to GDPR-level obligations through an Article 28 contract and Standard Contractual Clauses, so the obligations apply in practice.",
    },
    {
      q: "Does India have an EU adequacy decision?",
      a: "No. India is not on the European Commission's adequacy list, so transfers from the EU to India normally rely on the 2021 Standard Contractual Clauses or Binding Corporate Rules, supported by a transfer impact assessment.",
    },
    {
      q: "How fast must a GDPR data breach be reported?",
      a: "To the supervisory authority without undue delay and, where feasible, within 72 hours of becoming aware, unless the breach is unlikely to result in a risk to individuals. Individuals must be told without undue delay when the risk is high. A processor must inform the controller without undue delay.",
    },
    {
      q: "What are the maximum GDPR fines?",
      a: "Up to €20 million or 4% of worldwide annual turnover, whichever is higher, for breaches of the principles, lawful bases, rights and transfer rules. Other infringements carry up to €10 million or 2%.",
    },
  ],
  relatedLinks: [
    { title: "GDPR vs DPDPA", href: "/resources/guides/gdpr-vs-dpdpa", description: "Side-by-side differences that matter when you comply with both." },
    { title: "DPDPA vs GDPR comparison", href: "/compare/dpdpa-vs-gdpr", description: "Detailed clause-by-clause comparison table." },
    { title: "Cross-border data transfer", href: "/resources/guides/cross-border-data-transfer", description: "SCCs, transfer impact assessments and India's section 16." },
    { title: "GDPR compliance insight", href: "/insight/gdpr-compliance-guide", description: "Our analysis of GDPR compliance in practice." },
  ],
};
