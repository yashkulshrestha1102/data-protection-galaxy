// data/page-faqs.ts
// Single source of truth: the same FAQs are used in the page UI and in the
// FAQPage JSON-LD inside each layout.tsx, so they can never drift apart.

export interface FaqItem {
  q: string;
  a: string;
}

// =========================================================
// RIGHTS
// =========================================================
export const RIGHTS_FAQS: FaqItem[] = [
  {
    q: "What are the rights of a Data Principal under the DPDP Act 2023?",
    a: "Chapter III of the DPDP Act gives Data Principals four rights: (1) the right to information about their personal data and its processing (Section 11), (2) the right to correction, completion, updating and erasure (Section 12), (3) the right to grievance redressal (Section 13) and (4) the right to nominate another person to exercise their rights in case of death or incapacity (Section 14). Consent can also be withdrawn at any time under Section 6(4). The Act does not provide a right to data portability.",
  },
  {
    q: "How do I exercise my right to access under the DPDP Act?",
    a: "Submit a request to the Data Fiduciary (the organisation processing your data), usually through its published contact details or grievance officer. Ask for a summary of your personal data being processed, the processing activities, and the identities of the other Data Fiduciaries and Data Processors with whom it has been shared. The Data Fiduciary must respond within the period prescribed in the DPDP Rules.",
  },
  {
    q: "What is the right to erasure under the DPDP Act?",
    a: "You can ask a Data Fiduciary to erase your personal data. It must do so unless retention is necessary for the specified purpose or for compliance with a law. A Data Fiduciary must also erase data when you withdraw consent and the purpose is no longer being served, unless retention is required by law.",
  },
  {
    q: "Can I withdraw my consent after giving it?",
    a: "Yes. Under Section 6(4) you can withdraw consent at any time, and withdrawing must be as easy as giving consent. After withdrawal the Data Fiduciary must stop processing, and cause its Data Processors to stop, within a reasonable time, unless processing is permitted without consent under the Act or another law. Withdrawal does not affect the lawfulness of processing done before it.",
  },
  {
    q: "What is the right to nominate under the DPDP Act?",
    a: "Section 14 lets you nominate another individual to exercise your rights on your behalf in the event of your death or incapacity. The nomination must be made in the manner prescribed in the Rules.",
  },
  {
    q: "How do I file a complaint under the DPDP Act?",
    a: "First raise a grievance with the Data Fiduciary (or Consent Manager). The Act requires a Data Principal to exhaust this grievance redressal opportunity before approaching the Data Protection Board of India (Section 13(3)). If the grievance is not resolved within the prescribed period, you can file a complaint with the Board, which can inquire into it and impose monetary penalties.",
  },
  {
    q: "Who can exercise these rights?",
    a: "The Act applies to digital personal data processed in India (including non-digital data that is later digitised) and to certain processing outside India connected with offering goods or services to Data Principals in India. Some rights can be limited by the exemptions in Section 17 and by other laws, for example retention requirements under tax or financial regulation.",
  },
  {
    q: "What if a company ignores my data rights request?",
    a: "Escalate through the Data Fiduciary's grievance mechanism and then file a complaint with the Data Protection Board. Breach of an obligation that does not carry a more specific penalty can attract a penalty of up to ₹50 crore under the Schedule to the Act. Note that the Act itself bars civil courts from hearing matters the Board can decide, so the Board is the main route.",
  },
];

// =========================================================
// OBLIGATIONS
// =========================================================
export const OBLIGATIONS_FAQS: FaqItem[] = [
  {
    q: "What is a Data Fiduciary under the DPDP Act 2023?",
    a: "A Data Fiduciary is any person who, alone or together with others, determines the purpose and means of processing personal data. This includes most businesses, websites, apps and service providers operating in India.",
  },
  {
    q: "What are the core obligations of a Data Fiduciary?",
    a: "This guide groups them into eight: (1) giving a clear notice before collecting data, (2) obtaining valid consent or relying on a legitimate use, (3) keeping data accurate and limited to what is necessary, (4) storage limitation and erasure, (5) reasonable security safeguards, (6) breach intimation to the Board and affected Data Principals, (7) a grievance redressal mechanism, and (8) the additional duties of Significant Data Fiduciaries, such as appointing an India-based Data Protection Officer and an independent data auditor.",
  },
  {
    q: "What is a Significant Data Fiduciary (SDF)?",
    a: "A Significant Data Fiduciary is a Data Fiduciary, or class of Data Fiduciaries, notified by the Central Government under Section 10 based on factors such as the volume and sensitivity of personal data processed, risk to the rights of Data Principals, potential impact on the sovereignty and integrity of India, risk to electoral democracy, security of the State and public order. SDFs must appoint an India-based Data Protection Officer and an independent data auditor, and carry out periodic Data Protection Impact Assessments and audits.",
  },
  {
    q: "How quickly must a data breach be reported under the DPDP Act?",
    a: "Under Rule 7 of the DPDP Rules, 2025, a Data Fiduciary must intimate the Data Protection Board and each affected Data Principal without delay, and submit a detailed report to the Board within 72 hours (or a longer period the Board may allow). Failure to notify a breach can attract a penalty of up to ₹200 crore.",
  },
  {
    q: "What happens if a Data Fiduciary fails to comply with its obligations?",
    a: "Failure to comply can attract monetary penalties under the Schedule to the Act, from ₹10,000 up to ₹250 crore depending on the contravention. The Data Protection Board can also issue directions and order remedial measures after an inquiry.",
  },
  {
    q: "Does the DPDP Act apply to small businesses?",
    a: "Yes. The Act applies to Data Fiduciaries processing digital personal data regardless of size. However, the Central Government may notify certain classes of Data Fiduciaries, including startups, as exempt from some obligations, subject to conditions.",
  },
  {
    q: "What is the role of a Data Protection Officer (DPO)?",
    a: "A DPO is mandatory only for Significant Data Fiduciaries. The DPO must be based in India, be responsible to the Board of Directors or similar governing body, and act as the point of contact for the grievance redressal mechanism.",
  },
  {
    q: "Can a Data Fiduciary outsource its obligations to a Data Processor?",
    a: "No. A Data Fiduciary may engage a Data Processor only under a valid contract, but it remains responsible for compliance with the Act irrespective of any agreement to the contrary. It must ensure the Processor applies appropriate security safeguards.",
  },
];

// =========================================================
// PENALTIES
// =========================================================
export const PENALTIES_FAQS: FaqItem[] = [
  {
    q: "What is the maximum penalty under the DPDP Act 2023?",
    a: "The maximum penalty is ₹250 crore, for failure to take reasonable security safeguards to prevent a personal data breach. The Schedule to the Act sets different maximum amounts for different contraventions, ranging from ₹10,000 up to ₹250 crore.",
  },
  {
    q: "Who imposes penalties under the DPDP Act?",
    a: "Penalties are imposed by the Data Protection Board of India, established under Section 18 of the Act. The Board inquires into the matter, gives the concerned person an opportunity to be heard, and passes a reasoned order.",
  },
  {
    q: "Can penalties under the DPDP Act be appealed?",
    a: "Yes. Under Section 29 of the Act, a person aggrieved by an order of the Board may appeal to the Telecom Disputes Settlement and Appellate Tribunal (TDSAT) within 60 days of receiving the order.",
  },
  {
    q: "Are DPDP Act penalties imposed automatically after a breach?",
    a: "No. The Board conducts an inquiry and, under Section 33, considers factors such as the nature, gravity and duration of the breach, the type of personal data affected, whether the breach was repeated, any gain or avoided loss, the steps taken to mitigate the effects, and whether the penalty is proportionate and effective.",
  },
  {
    q: "Can directors be personally penalized under the DPDP Act?",
    a: "The Act imposes penalties on the Data Fiduciary and does not contain a separate provision making directors or officers personally liable for a company's contraventions. Directors still have duties under company law, and a Significant Data Fiduciary's Data Protection Officer reports to the Board of Directors.",
  },
  {
    q: "What is the penalty for failing to notify a data breach?",
    a: "Failure to give the Board and affected Data Principals the intimation required for a personal data breach can attract a penalty of up to ₹200 crore. This is separate from the penalty of up to ₹250 crore for failing to take reasonable security safeguards.",
  },
  {
    q: "Does the DPDP Act have criminal penalties?",
    a: "No. The DPDP Act 2023 imposes civil monetary penalties and does not create criminal offences.",
  },
  {
    q: "How does the DPDP Act penalty compare with GDPR?",
    a: "GDPR fines go up to €20 million or 4% of worldwide annual turnover, whichever is higher. The DPDP Act's maximum of ₹250 crore is roughly €25 to 30 million depending on exchange rates. For large multinationals the GDPR ceiling can be much higher, while for smaller Indian businesses a DPDP penalty can be just as severe relative to their size.",
  },
];

// =========================================================
// PROVISIONS
// =========================================================
export const PROVISIONS_FAQS: FaqItem[] = [
  {
    q: "How many chapters and sections are there in the DPDP Act 2023?",
    a: "The DPDP Act 2023 has 9 chapters and 44 sections, plus a Schedule that sets out the penalties.",
  },
  {
    q: "What is Chapter I of the DPDP Act?",
    a: "Chapter I (Sections 1-3) is the Preliminary chapter. It covers the short title, extent, commencement, definitions and the application of the Act.",
  },
  {
    q: "What does Chapter II of the DPDP Act cover?",
    a: "Chapter II (Sections 4-10) sets out the obligations of Data Fiduciaries: grounds for processing, notice, consent, legitimate uses, general obligations, children's data and Significant Data Fiduciaries.",
  },
  {
    q: "What does Chapter III of the DPDP Act cover?",
    a: "Chapter III (Sections 11-15) covers the rights and duties of Data Principals: information, correction and erasure, grievance redressal, nomination, and the duties of Data Principals.",
  },
  {
    q: "What does Chapter IV of the DPDP Act cover?",
    a: "Chapter IV (Sections 16-17) covers transfer of personal data outside India and exemptions. Section 16 allows transfers unless the Central Government restricts specific countries or territories.",
  },
  {
    q: "Where is the Data Protection Board established?",
    a: "Chapter V (Sections 18-26) establishes the Data Protection Board of India, and Chapter VI (Sections 27-28) sets out its powers, functions and procedure.",
  },
  {
    q: "Where are appeals and penalties covered?",
    a: "Chapter VII (Sections 29-32) covers appeals to the Appellate Tribunal (TDSAT), mediation and voluntary undertakings. Chapter VIII (Sections 33-34) covers penalties, and the Schedule sets the amounts, from ₹10,000 up to ₹250 crore.",
  },
  {
    q: "When did the DPDP Act 2023 come into force?",
    a: "The Act received presidential assent on 11 August 2023. The DPDP Rules, 2025 were notified in November 2025 and the Act is being commenced in phases: the Board provisions first, the Consent Manager provisions after one year, and the main operational provisions after eighteen months.",
  },
];

// =========================================================
// LAWFUL PROCESSING
// =========================================================
export const LAWFUL_FAQS: FaqItem[] = [
  {
    q: "What are the lawful bases for processing under the DPDP Act 2023?",
    a: "Section 4 allows processing of personal data only for a lawful purpose, for which the Data Principal has given consent (Section 6) or for certain legitimate uses (Section 7). Unlike the GDPR, there is no general \"legitimate interests\" basis: the legitimate uses are a closed list.",
  },
  {
    q: "What is valid consent under the DPDP Act?",
    a: "Consent must be free, specific, informed, unconditional and unambiguous, given by a clear affirmative action, and limited to the specified purpose. The Data Principal must be able to withdraw it as easily as it was given.",
  },
  {
    q: "What are the legitimate uses under Section 7 of the DPDP Act?",
    a: "Section 7 lists: (a) voluntary provision of data for a specified purpose where the Data Principal has not objected, (b) State subsidies, benefits, services, certificates, licences or permits, (c) State functions and the security of the State, (d) legal obligations to disclose information to the State, (e) compliance with judgments, decrees or orders, (f) medical emergencies, (g) medical treatment or health services during an epidemic or threat to public health, (h) safety during disasters or breakdown of public order, and (i) employment purposes and safeguarding the employer from loss or liability.",
  },
  {
    q: "Is research or statistical processing a legitimate use under Section 7?",
    a: "No. Processing for research, archiving or statistical purposes is dealt with by an exemption in Section 17(2)(b), subject to conditions in the Rules, not by Section 7.",
  },
  {
    q: "What is a Consent Manager under the DPDP Act?",
    a: "A Consent Manager is a person registered with the Data Protection Board who acts as a single point of contact to enable a Data Principal to give, manage, review and withdraw consent through an accessible, transparent and interoperable platform (Section 6(7)). The Consent Manager provisions commence later than the Board provisions, as notified.",
  },
  {
    q: "Can consent be withdrawn after giving it?",
    a: "Yes. Under Section 6(4) a Data Principal can withdraw consent at any time, and withdrawal must be as easy as giving consent. After withdrawal the Data Fiduciary must stop processing, and cause its Data Processors to stop, within a reasonable time, unless processing is permitted without consent. Withdrawal does not affect the lawfulness of processing done before it.",
  },
  {
    q: "What is the difference between consent and legitimate use?",
    a: "Consent is an affirmative choice by the Data Principal, can be withdrawn, and is preceded by a notice under Section 5. A legitimate use is a specific situation listed in Section 7 where processing can take place without consent. Because the list is closed, legitimate uses are narrower than the GDPR's open legitimate-interests test.",
  },
  {
    q: "What notice must a Data Fiduciary give before asking for consent?",
    a: "Section 5 requires a notice, in clear and plain language, telling the Data Principal what personal data is being collected and why, how to exercise their rights and withdraw consent, and how to complain to the Data Protection Board. The notice must also be available in English or any language listed in the Eighth Schedule to the Constitution.",
  },
  {
    q: "Does the DPDP Act allow processing for employment purposes?",
    a: "Yes. Section 7(i) permits processing for employment purposes or to safeguard the employer from loss or liability, such as preventing corporate espionage or maintaining confidentiality of trade secrets. The employer must still comply with the other obligations in the Act, such as reasonable security safeguards.",
  },
];

// =========================================================
// CROSS-BORDER TRANSFER
// =========================================================
export const CROSS_BORDER_FAQS: FaqItem[] = [
  {
    q: "What is Section 16 of the DPDP Act 2023?",
    a: "Section 16 deals with transfer of personal data outside India. It allows a Data Fiduciary to transfer personal data for processing to any country or territory outside India except those the Central Government restricts by notification. Section 16(2) preserves any other Indian law that gives a higher degree of protection or restricts transfer.",
  },
  {
    q: "Is data localisation mandatory under the DPDP Act?",
    a: "The Act does not impose a general localisation requirement. The Government can restrict transfers to notified countries or territories, other sector laws (for example RBI rules on payment data) continue to apply, and the DPDP Rules, 2025 allow the Government to require Significant Data Fiduciaries to keep specified categories of personal data in India.",
  },
  {
    q: "How is the DPDP approach different from the GDPR on cross-border transfers?",
    a: "The GDPR restricts transfers by default and permits them to countries with an adequacy decision or with safeguards such as standard contractual clauses. The DPDP Act allows transfers by default and restricts them only where the Government notifies a country or territory. This is often called a \"negative list\" or \"blacklist\" model.",
  },
  {
    q: "Can the Government ban transfers to specific countries?",
    a: "Yes. Section 16(1) empowers the Central Government to restrict transfers of personal data to specific countries or territories by notification. Such a notification is subject to judicial review like any executive action.",
  },
  {
    q: "What happens if I transfer data to a restricted country?",
    a: "A transfer that breaches a notified restriction is a contravention of the Act. Unless a more specific entry applies, it falls under the general penalty in the Schedule of up to ₹50 crore, and the Board can also issue directions.",
  },
  {
    q: "Do I need consent for cross-border transfers?",
    a: "The Act does not add a separate consent requirement for transfers. Where processing is based on consent, the consent and notice should cover the processing, including disclosure to processors abroad. Where processing is a legitimate use under Section 7, consent is not required, but the transfer must still comply with Section 16 and the Data Fiduciary stays responsible for the data.",
  },
  {
    q: "What about sectoral localisation requirements?",
    a: "Section 16(2) preserves laws that give higher protection or restrict transfer. For example, RBI's payment-data storage directions and similar sectoral rules continue to apply alongside the DPDP Act.",
  },
  {
    q: "Has the Government notified any restricted countries?",
    a: "As far as we are aware, no list of restricted countries has been notified under Section 16. Check the Ministry of Electronics and Information Technology's website for the latest position before relying on this.",
  },
];
