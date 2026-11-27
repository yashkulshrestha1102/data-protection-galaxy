// data/guide-content/ccpa-cpra-overview.ts
import type { GuideContent } from "./types";
import { SRC } from "./sources";
import { cite, callout, table, checklist, readTimeOf } from "./html";

// Source numbers: 1 CCPA statute · 2 CPPA CPI thresholds · 3 CPPA 2025 regulations
// announcement · 4 CPPA regulations page · 5 California AG CCPA page · 6 DPDP Act

const content = `
<p class="lg-lead">The California Consumer Privacy Act (CCPA), as amended by the California Privacy Rights Act (CPRA), is the most important privacy law in the United States. It applies to businesses anywhere in the world — including in India — that do business in California and cross its size or data thresholds. This guide covers who is caught, what consumers can demand, the operational duties, the new 2026 regulations on risk assessments, cybersecurity audits and automated decision-making, and what Indian companies should do.</p>

<h2 id="overview">CCPA and CPRA at a glance</h2>
<p>The CCPA was enacted in 2018 and took effect on 1 January 2020. California voters approved the CPRA (Proposition 24) in November 2020; it rewrote large parts of the CCPA from 1 January 2023 and created a dedicated regulator, the <strong>California Privacy Protection Agency (CPPA)</strong>. The law is codified at California Civil Code section 1798.100 and following, and is supplemented by detailed regulations.${cite(1, 4)}</p>
${table(
  ["Feature", "Position under the CCPA (as amended)"],
  [
    ["Who is protected", "\"Consumers\" — natural persons who are California residents, including employees, job applicants and business contacts (the temporary employee and B2B exemptions expired on 1 January 2023)."],
    ["Who must comply", "For-profit \"businesses\" that do business in California and meet at least one threshold (below)."],
    ["Regulators", "The California Privacy Protection Agency (administrative enforcement) and the California Attorney General (civil enforcement)."],
    ["Model", "Mostly notice and opt-out (especially for sale and sharing), with opt-in for selling or sharing data of consumers under 16."],
  ]
)}

<h2 id="applicability">Who must comply — the thresholds</h2>
<p>A business is covered if it is a for-profit entity that collects consumers' personal information, determines the purposes and means of processing, does business in California, and meets <strong>any one</strong> of these tests:${cite(1, 2)}</p>
<ol>
  <li><strong>Annual gross revenue</strong> above <strong>US$26,625,000</strong> in the preceding calendar year (the statutory US$25 million figure as adjusted for inflation from 1 January 2025).</li>
  <li>Annually <strong>buys, sells or shares</strong> the personal information of <strong>100,000 or more</strong> California consumers or households.</li>
  <li>Derives <strong>50% or more</strong> of annual revenue from selling or sharing consumers' personal information.</li>
</ol>
<p>Entities that control or are controlled by a covered business and share common branding can also be treated as part of the business. The CPPA adjusts monetary thresholds every two years, so check its current figures.${cite(2)}</p>
${callout(
  "info",
  "Note on the revenue test",
  "<p>The revenue test looks at the company's <em>total</em> annual gross revenue, not only its California revenue. A large Indian company with a modest Californian customer base can therefore still be in scope.</p>"
)}

<h2 id="key-definitions">Key definitions</h2>
<ul>
  <li><strong>Personal information</strong> — information that identifies, relates to, describes or could reasonably be linked with a consumer or household: identifiers, commercial information, internet activity, geolocation, inferences and more. Publicly available information and de-identified data are excluded.</li>
  <li><strong>Sensitive personal information</strong> — includes government identifiers (such as Social Security, driver's licence and passport numbers), account log-in or card numbers with credentials, precise geolocation, racial or ethnic origin, citizenship or immigration status, religious beliefs, union membership, contents of mail, email and texts, genetic data, biometric data used for identification, health data, data about sex life or sexual orientation, and neural data.</li>
  <li><strong>Sell</strong> — disclosing personal information to a third party for money <em>or other valuable consideration</em>.</li>
  <li><strong>Share</strong> — disclosing personal information to a third party for <strong>cross-context behavioural advertising</strong>, whether or not money changes hands. Many advertising pixels and SDKs fall here.</li>
  <li><strong>Service provider / contractor</strong> — a vendor that processes personal information on the business's behalf under a written contract with mandatory restrictions. This is the usual role of an Indian IT or BPO vendor.</li>
</ul>
<p class="lg-source-note">Definitions summarised from Civil Code section 1798.140.${cite(1)}</p>

<h2 id="consumer-rights">Consumer rights</h2>
${table(
  ["Right", "Civil Code section", "What it requires"],
  [
    ["Right to know / access", "1798.100, .110, .115", "Disclose categories and specific pieces of personal information collected, sources, purposes and recipients — including a portable copy."],
    ["Right to delete", "1798.105", "Delete personal information collected from the consumer, and instruct service providers to do the same, subject to exceptions."],
    ["Right to correct", "1798.106", "Correct inaccurate personal information using commercially reasonable efforts."],
    ["Right to opt out of sale or sharing", "1798.120", "Stop selling or sharing on request; opt-in is required for consumers under 16 (parental consent under 13)."],
    ["Right to limit use of sensitive PI", "1798.121", "Restrict use of sensitive personal information to what is necessary to provide the goods or services."],
    ["Right to non-discrimination", "1798.125", "No denial of service, different prices or lower quality for exercising rights, except permitted financial incentives with notice."],
  ],
  "CCPA consumer rights"
)}
<h3>Response timelines</h3>
<ul>
  <li>Requests to know, delete and correct: <strong>respond within 45 calendar days</strong>, extendable once by another 45 days with notice to the consumer.${cite(1)}</li>
  <li>Confirm receipt of those requests within <strong>10 business days</strong>.${cite(4)}</li>
  <li>Requests to opt out of sale or sharing, or to limit sensitive PI: act <strong>as soon as feasible and no later than 15 business days</strong>.${cite(4)}</li>
  <li>Offer at least two methods for submitting requests (for example a web form and an email address or toll-free number); online-only businesses may use an email address.</li>
</ul>

<h2 id="obligations">Business obligations</h2>
<h3>Notices and the privacy policy</h3>
<p>Give a <strong>notice at collection</strong> at or before the point personal information is collected, stating the categories collected, purposes, whether the information is sold or shared, and retention periods. Publish a full <strong>privacy policy</strong> that explains consumer rights and how to exercise them, and update it <strong>at least once every 12 months</strong>.${cite(1, 4)}</p>
<h3>Opt-out links and Global Privacy Control</h3>
<p>If you sell or share personal information, display a clear <strong>"Do Not Sell or Share My Personal Information"</strong> link; if you use sensitive personal information beyond permitted purposes, display <strong>"Limit the Use of My Sensitive Personal Information"</strong>. A single "Your Privacy Choices" link can replace both. Businesses must also honour browser-based <strong>opt-out preference signals</strong> such as Global Privacy Control (GPC) as a valid opt-out request.${cite(4)}</p>
<h3>Purpose limitation, minimisation and retention</h3>
<p>Collection, use, retention and sharing must be reasonably necessary and proportionate to the disclosed purposes. Disclose how long each category is kept, and do not keep it longer than reasonably necessary.${cite(1)}</p>
<h3>Contracts with vendors and third parties</h3>
<p>Contracts with service providers, contractors and third parties must limit use to specified purposes, require CCPA-level protection, allow the business to take reasonable steps to stop unauthorised use, and require notice if the recipient can no longer meet its obligations.${cite(1)}</p>
<h3>Reasonable security</h3>
<p>Implement reasonable security procedures appropriate to the nature of the information. Failing to do so exposes the business to the CCPA's private right of action for data breaches (below).${cite(1)}</p>

<h2 id="regulations-2026">2026 regulations: risk assessments, audits and ADMT</h2>
<p>On 23 September 2025 California finalised a major package of regulations, effective <strong>1 January 2026</strong>.${cite(3)} The headline changes:</p>
${table(
  ["Requirement", "Who it affects", "Key date"],
  [
    ["Risk assessments", "Businesses whose processing presents significant risk — for example selling or sharing personal information, processing sensitive personal information, or using automated decision-making technology for significant decisions.", "Required for in-scope processing from 1 Jan 2026; first attestations and summaries due to the CPPA by 1 April 2028."],
    ["Cybersecurity audits", "Businesses meeting significant-risk thresholds set in the regulations.", "Audit certifications due by 1 April 2028 (revenue over US$100 million), 1 April 2029 (US$50–100 million) and 1 April 2030 (under US$50 million)."],
    ["Automated decision-making technology (ADMT)", "Businesses using ADMT to make significant decisions about consumers (for example on finance, housing, education, employment or healthcare).", "Compliance from 1 January 2027 — pre-use notice, opt-out and access rights."],
  ],
  "Phased obligations under the 2025 regulations"
)}
${callout(
  "tip",
  "Overlap with India",
  `<p>If your company is or may become a Significant Data Fiduciary under the DPDPA, it will already need annual DPIAs, audits and algorithmic due diligence.${cite(6)} One assessment methodology can serve both regimes — see the <a href="/resources/guides/dpia-guide">DPIA guide</a>.</p>`
)}

<h2 id="enforcement">Enforcement and penalties</h2>
<ul>
  <li><strong>Administrative fines</strong> (CPPA) and <strong>civil penalties</strong> (Attorney General): up to <strong>US$2,663 per violation</strong>, or <strong>US$7,988 per intentional violation</strong> or violation involving consumers known to be under 16 (figures as adjusted from 1 January 2025).${cite(2)}</li>
  <li>Fines are counted <em>per violation</em>, so a non-compliant practice affecting many consumers can add up quickly.</li>
  <li><strong>Private right of action</strong> for data breaches caused by a failure to maintain reasonable security: statutory damages of <strong>US$107–799 per consumer per incident</strong> (as adjusted from 1 January 2025), or actual damages if greater.${cite(1, 2)}</li>
  <li>The mandatory 30-day "cure period" that existed under the original CCPA was removed by the CPRA; regulators may still consider cure efforts.${cite(1)}</li>
</ul>
<p>The Attorney General's first public settlement, with retailer Sephora in 2022 (US$1.2 million), concerned the failure to treat third-party advertising trackers as a "sale" and to honour GPC signals. The CPPA has since brought its own enforcement actions, focusing on opt-out mechanisms, dark patterns and vendor contracts.${cite(5, 4)}</p>

<h2 id="indian-companies">What it means for Indian companies</h2>
<h3>Indian businesses selling to Californians</h3>
<p>Indian SaaS, e-commerce, gaming and media companies with US users should test the three thresholds. If any is met, the business needs CCPA notices, request handling, opt-out links, GPC support and vendor contracts — even if it has no US office.</p>
<h3>Indian service providers to US clients</h3>
<p>Indian IT, analytics and BPO companies typically act as <strong>service providers or contractors</strong>. Expect contracts that prohibit selling or sharing client data, restrict use to the contracted purpose, prohibit combining it with other data, require assistance with consumer requests and allow audits. Keep evidence — access logs, deletion certificates, sub-processor lists — ready for client due diligence.</p>
<h3>Other US state laws</h3>
<p>More than a dozen other US states now have comprehensive privacy laws (such as Virginia, Colorado, Connecticut and Texas). They share many CCPA concepts but differ on thresholds, sensitive-data consent and rights, so build a US programme that can flex by state.</p>
<p>For how California compares with India's law, see the <a href="/compare/dpdpa-vs-ccpa">DPDPA vs CCPA comparison</a>.</p>

<h2 id="dpdpa-comparison">CCPA vs DPDPA — quick contrast</h2>
${table(
  ["Topic", "CCPA / CPRA", "DPDPA 2023"],
  [
    ["Core model", "Notice and opt-out (opt-in for minors' sale/sharing)", "Consent or specified legitimate uses before processing"],
    ["Threshold for coverage", "Revenue, volume or data-sale tests", "No size threshold — applies to all Data Fiduciaries in scope"],
    ["Sensitive data", "Separate category with a right to limit", "No separate category; children's data has special rules"],
    ["Children", "Opt-in for sale/sharing under 16", "Verifiable parental consent for all under 18; no tracking or targeted ads at children"],
    ["Penalties", "Per violation (US$2,663 / US$7,988)", "Per instance, up to ₹250 crore"],
  ]
)}
<p class="lg-source-note">Summarised from the CCPA and the DPDP Act, 2023.${cite(1, 6)}</p>

<h2 id="checklist">CCPA compliance checklist</h2>
${checklist([
  "Test the three applicability thresholds and record the result each year.",
  "Map Californian personal information, including sensitive personal information, and every disclosure to third parties.",
  "Identify any \"sale\" or \"sharing\" — especially advertising pixels, SDKs and data partnerships.",
  "Publish a notice at collection and a privacy policy; review the policy at least every 12 months.",
  "Add the Do Not Sell or Share / Limit links (or a single Your Privacy Choices link) and honour GPC signals.",
  "Run a request workflow: acknowledge within 10 business days, respond within 45 days, opt-outs within 15 business days.",
  "Update service-provider, contractor and third-party contracts with the mandatory CCPA terms.",
  "Assess whether the 2026 risk-assessment, cybersecurity-audit and ADMT rules apply and plan to the deadlines.",
  "Maintain reasonable security and an incident-response plan.",
  "Train customer-support and marketing teams on the opt-out and non-discrimination rules.",
])}
`;

export const ccpaCpraOverview: GuideContent = {
  metaDescription:
    "CCPA/CPRA guide: who must comply, US$26.6M threshold, consumer rights, GPC, 2026 risk-assessment, audit and ADMT rules, and fines.",
  excerpt:
    "California's CCPA as amended by the CPRA: who must comply, current thresholds, consumer rights and deadlines, opt-out and GPC duties, the 2026 risk-assessment, audit and ADMT rules, fines, and what it means for Indian companies.",
  content,
  readTime: readTimeOf(content),
  lastUpdated: "27 Nov 2026",
  tableOfContents: [
    { id: "overview", title: "CCPA and CPRA at a glance" },
    { id: "applicability", title: "Who must comply" },
    { id: "key-definitions", title: "Key definitions" },
    { id: "consumer-rights", title: "Consumer rights" },
    { id: "obligations", title: "Business obligations" },
    { id: "regulations-2026", title: "2026 regulations" },
    { id: "enforcement", title: "Enforcement & penalties" },
    { id: "indian-companies", title: "What it means for Indian companies" },
    { id: "dpdpa-comparison", title: "CCPA vs DPDPA" },
    { id: "checklist", title: "Compliance checklist" },
  ],
  keyTakeaways: [
    "The CCPA (as amended by the CPRA) applies to for-profit businesses worldwide that do business in California and meet a revenue, volume or data-sale threshold.",
    "The revenue threshold is US$26,625,000 from 1 January 2025 and is measured on total, not California-only, revenue.",
    "Consumers can know, delete, correct, opt out of sale or sharing, and limit use of sensitive personal information.",
    "Respond to most requests within 45 days; process opt-outs within 15 business days and honour Global Privacy Control signals.",
    "New regulations effective 1 January 2026 phase in risk assessments, cybersecurity audits (from 2028) and ADMT rules (from 2027).",
    "Fines are up to US$2,663 per violation or US$7,988 per intentional violation or violation involving minors.",
    "Indian vendors usually act as service providers or contractors and must accept mandatory contract terms.",
  ],
  sources: [SRC.ccpaStatute, SRC.cppaCpi, SRC.cppaRegs2025, SRC.cppaRegs, SRC.caAgCcpa, SRC.dpdpAct],
  faqs: [
    {
      q: "Does the CCPA apply to Indian companies?",
      a: "Yes, if the Indian company is a for-profit business that does business in California, collects Californians' personal information, and meets one threshold: annual gross revenue above US$26,625,000, buying, selling or sharing data of 100,000 or more California consumers or households, or earning 50% or more of revenue from selling or sharing personal information.",
    },
    {
      q: "What is the difference between 'selling' and 'sharing' under the CPRA?",
      a: "Selling is disclosing personal information to a third party for money or other valuable consideration. Sharing is disclosing it to a third party for cross-context behavioural advertising, even without payment. Consumers can opt out of both.",
    },
    {
      q: "How long does a business have to respond to a CCPA request?",
      a: "45 calendar days for requests to know, delete or correct, extendable once by another 45 days with notice. Receipt must be confirmed within 10 business days, and opt-out requests must be processed within 15 business days.",
    },
    {
      q: "What changed in the 2026 CCPA regulations?",
      a: "Regulations effective 1 January 2026 require risk assessments for significant-risk processing (attestations due by 1 April 2028), phased cybersecurity audits due from 1 April 2028 to 1 April 2030 depending on revenue, and rules on automated decision-making technology from 1 January 2027.",
    },
    {
      q: "What are the CCPA penalties?",
      a: "Up to US$2,663 per violation, or US$7,988 per intentional violation or violation involving consumers under 16, as adjusted from 1 January 2025. Consumers can also sue for certain data breaches caused by inadequate security.",
    },
  ],
  relatedLinks: [
    { title: "DPDPA vs CCPA", href: "/compare/dpdpa-vs-ccpa", description: "How California's law compares with India's DPDPA." },
    { title: "GDPR Essentials for Indian Companies", href: "/resources/guides/gdpr-essentials-indian-companies", description: "The other major foreign law Indian businesses face." },
    { title: "Global data protection laws", href: "/insight/global-data-protection-laws", description: "Comparative view of GDPR, CCPA, LGPD, PIPL and more." },
    { title: "Interactive privacy map", href: "/map", description: "Explore data protection laws country by country." },
  ],
};
