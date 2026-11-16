// data/country-faqs.ts

import { countries } from './countries';

export interface CountryFAQ {
  q: string;
  a: string;
}

// =========================================================
// CUSTOM COUNTRY FAQs (Country-Specific, E-E-A-T Optimized)
// =========================================================
const specialCountryFaqs: Record<string, CountryFAQ[]> = {
  // =========================================================
  // TOP COUNTRIES (Original Custom FAQs)
  // =========================================================

  // --- Top Countries ---
  india: [
    {
      q: "What is the penalty for a data breach under India's DPDP Act 2023?",
      a: "Under the DPDP Act 2023, failure to take reasonable security safeguards to prevent a personal data breach can attract a penalty of up to ₹250 crore. Failure to notify a breach can attract an additional penalty of up to ₹200 crore."
    },
    {
      q: "Does India's DPDP Act require data localisation?",
      a: "No, the DPDP Act does not mandate general data localisation. However, the government can restrict data transfers to specific countries. Additionally, sectoral laws like RBI's payment data rules and IRDAI regulations require localisation for specific data types."
    },
    {
      q: "Is a Data Protection Officer (DPO) mandatory in India?",
      a: "A DPO is mandatory only for Significant Data Fiduciaries (SDFs) notified by the Central Government under Section 10 of the DPDP Act. Regular Data Fiduciaries are not required to appoint a DPO."
    },
    {
      q: "Who is the regulatory authority in India for data protection?",
      a: "The Data Protection Board of India (DPBI) is the regulatory authority established under the DPDP Act 2023. It is responsible for enforcing the Act, investigating data breaches, and imposing penalties."
    }
  ],
  eu: [
    {
      q: "What is the maximum penalty for a data breach under GDPR?",
      a: "Under the GDPR, organizations can be fined up to €20 million or 4% of their global annual turnover (whichever is higher) for the most serious violations, including failure to protect personal data or unlawful processing."
    },
    {
      q: "Is data localisation required under GDPR?",
      a: "No. GDPR does not require data localisation. In fact, it promotes the free flow of data within the EU. However, transfers outside the EU require an adequacy decision or standard contractual clauses (SCCs)."
    },
    {
      q: "Is a DPO mandatory under GDPR?",
      a: "A Data Protection Officer (DPO) is mandatory for public authorities and organizations whose core activities involve regular and systematic monitoring of data subjects on a large scale, or large-scale processing of sensitive data."
    },
    {
      q: "Who enforces GDPR?",
      a: "The GDPR is enforced by the European Data Protection Board (EDPB) and national supervisory authorities (like the CNIL in France) in each EU member state."
    }
  ],
  usa: [
    {
      q: "What is the penalty for a data breach under US privacy laws like CCPA?",
      a: "Under the CCPA/CPRA in California, businesses can be fined up to $2,500 per violation, or $7,500 per intentional violation or violation involving minors. This can be significantly higher in a data breach affecting many consumers."
    },
    {
      q: "Does the US require data localisation?",
      a: "There is no general data localisation mandate in the US. However, specific sectors like healthcare (HIPAA) and finance (GLBA) have strict data security and residency requirements."
    },
    {
      q: "Who regulates data protection in the US?",
      a: "The US has a patchwork of state laws (like CCPA in California) enforced by State Attorneys General. At the federal level, the FTC and specific agencies (like HHS for HIPAA) enforce sectoral privacy rules."
    }
  ],
  uk: [
    {
      q: "What is the maximum penalty for a data breach under UK GDPR?",
      a: "Under the UK GDPR and Data Protection Act 2018, the maximum fine is £17.5 million or 4% of global annual turnover, whichever is higher."
    },
    {
      q: "Does the UK require data localisation?",
      a: "No, the UK does not require data localisation. The UK follows a similar approach to the EU, allowing international transfers to countries deemed adequate by the UK government."
    },
    {
      q: "Who regulates data protection in the UK?",
      a: "The Information Commissioner's Office (ICO) is the independent regulatory authority responsible for enforcing data protection laws in the UK."
    }
  ],
  algeria: [
    {
      q: "Does Algeria require a Data Protection Officer (DPO)?",
      a: "Algeria's Law 18-07 does not mandate a DPO for every company. However, the ANPDP (regulator) requires organizations processing sensitive data (like health or financial records) to designate a 'Data Protection Correspondent'. Indian companies entering Algeria should appoint one for high-risk processing."
    },
    {
      q: "What are the breach notification requirements in Algeria?",
      a: "Algeria's law has limited breach notification requirements. Unlike GDPR's strict 72-hour deadline, there is no explicit mandate to notify the ANPDP or affected individuals immediately. However, organizations should still maintain robust internal incident response plans."
    },
    {
      q: "How does Algeria handle cross-border data transfers?",
      a: "Cross-border transfers are permitted only if the receiving country provides an 'adequate level of protection' as determined by the ANPDP. Transfers without adequate protection require explicit authorization from the ANPDP."
    }
  ],
  madagascar: [
    {
      q: "What are the breach notification requirements in Madagascar?",
      a: "Madagascar's Law 2014-038 has very limited breach notification requirements. It may only require notifying the CMIL (regulator) without mandating notification to affected individuals. Organizations should still follow best practices."
    },
    {
      q: "Does Madagascar require a Data Protection Officer (DPO)?",
      a: "Partially. The law may require a DPO only for specific high-risk organizations or public bodies. It is not universally mandatory for all private businesses."
    },
    {
      q: "How does Madagascar handle data localisation?",
      a: "Madagascar does not mandate general data localisation. However, specific sectoral laws (like finance or health) might require data to be stored locally. Cross-border transfers typically require adequate protection."
    }
  ],
  serbia: [
    {
      q: "Is Serbia's data protection law aligned with GDPR?",
      a: "Yes, Serbia's 2018 Law on Personal Data Protection is heavily aligned with GDPR. If your organization is already GDPR-compliant, you have completed about 80% of the work needed for Serbia."
    },
    {
      q: "Does Serbia require a Data Protection Officer (DPO)?",
      a: "A DPO is mandatory for public authorities and organizations conducting large-scale systematic monitoring or processing sensitive data. For most Indian SMEs, it is not mandatory unless they meet these thresholds."
    },
    {
      q: "How does Serbia regulate cross-border data transfers?",
      a: "Transfers outside Serbia are allowed only to countries on the 'adequate protection' list or under specific safeguards like Standard Contractual Clauses (SCCs) approved by the Commissioner."
    }
  ],
  armenia: [
    {
      q: "What are the data localisation rules in Armenia?",
      a: "Armenia does not have a general data localisation mandate. However, the law requires that cross-border transfers only happen to countries with 'adequate' protection. The Ministry of Justice maintains a list of such countries."
    },
    {
      q: "Does Armenia require a Data Protection Officer (DPO)?",
      a: "Partially. The Law on Protection of Personal Data (2015) may require a DPO only for specific high-risk organizations or sectors. It is not universally mandatory for all businesses."
    },
    {
      q: "What are the breach notification requirements in Armenia?",
      a: "Armenia's law has limited breach notification requirements. It may only require notifying the regulator (Ministry of Justice) without explicitly mandating notification to affected individuals."
    }
  ],
  rwanda: [
    {
      q: "Does Rwanda require a Data Protection Officer (DPO)?",
      a: "Yes, Rwanda's Law No. 058/2021 mandates the appointment of a Data Protection Officer (DPO) for all organizations processing personal data, making it stricter than many other African jurisdictions."
    },
    {
      q: "What are the breach notification timelines in Rwanda?",
      a: "Under the Law No. 058/2021, organizations must notify the National Cyber Security Authority (NCSA) and affected individuals 'without undue delay' in the event of a personal data breach."
    },
    {
      q: "How does Rwanda handle cross-border data transfers?",
      a: "Transfers are permitted to countries with adequate data protection laws. If transferred to a country without adequate protection, the data controller must ensure appropriate safeguards are in place or obtain explicit consent."
    }
  ],
  uzbekistan: [
    {
      q: "What are the data localisation rules in Uzbekistan?",
      a: "Uzbekistan's Law on Personal Data (2019) has strict localisation requirements. Personal data of Uzbek citizens must be stored on servers physically located within Uzbekistan. This is a critical requirement for Indian tech companies operating there."
    },
    {
      q: "Does Uzbekistan require a Data Protection Officer (DPO)?",
      a: "Partially. The law may require a DPO only for specific high-risk organizations or sectors. It is not universally mandatory for all businesses."
    },
    {
      q: "What are the breach notification requirements in Uzbekistan?",
      a: "Uzbekistan's law has limited breach notification requirements. It may only require notifying the regulator (Personalization Agency) without mandating notification to affected individuals."
    }
  ],
  kyrgyzstan: [
    {
      q: "What are the penalties for non-compliance in Kyrgyzstan?",
      a: "Kyrgyzstan's data protection framework (2008) is outdated and enforcement is weak. There are no significant penalties for non-compliance compared to modern laws like GDPR or DPDPA. However, organizations should still follow best practices."
    },
    {
      q: "Does Kyrgyzstan require a Data Protection Officer (DPO)?",
      a: "Partially. The law may require a DPO only for specific high-risk organizations or sectors. It is not universally mandatory for all businesses."
    },
    {
      q: "How does Kyrgyzstan handle cross-border data transfers?",
      a: "Cross-border transfers are generally permitted, but the law allows the state to restrict transfers to countries that do not provide adequate protection for personal data."
    }
  ],
  'north-macedonia': [
    {
      q: "Is North Macedonia's data protection law aligned with GDPR?",
      a: "Yes, North Macedonia's 2020 Law on Personal Data Protection is broadly aligned with European standards. The Agency for Personal Data Protection (AZLP) supervises compliance."
    },
    {
      q: "What are the breach notification requirements in North Macedonia?",
      a: "Under the 2020 Law, organizations must notify the Agency for Personal Data Protection (AZLP) and affected individuals without undue delay. This is similar to GDPR's 72-hour rule."
    },
    {
      q: "Does North Macedonia require a Data Protection Officer (DPO)?",
      a: "Partially. A DPO is required only for public authorities and organizations conducting large-scale monitoring or processing sensitive data. It is not universally mandatory."
    }
  ],
  'costa-rica': [
    {
      q: "What is the penalty for a data breach in Costa Rica?",
      a: "Under Law No. 8968, penalties for data breaches can include heavy fines and even criminal sanctions (imprisonment) depending on the severity of the breach and whether it was intentional."
    },
    {
      q: "Does Costa Rica require a Data Protection Officer (DPO)?",
      a: "Partially. While there is no universal DPO mandate, organizations processing sensitive data or large volumes of personal data are expected to have a designated privacy officer or department."
    },
    {
      q: "How does Costa Rica handle cross-border data transfers?",
      a: "Cross-border transfers require the receiving country to have an adequate level of data protection, or the transfer must be covered by specific contractual safeguards authorized by PRODHAB."
    }
  ],

  // =========================================================
  // ASIA COUNTRY FAQs
  // =========================================================
  'china': [
  {
    q: "What are the maximum penalties under China's PIPL?",
    a: "Under Article 66 of the Personal Information Protection Law (PIPL, effective 1 November 2021), the Cyberspace Administration of China (CAC) can impose fines of up to RMB 50 million (approx. USD 7 million) or 5% of the preceding year's turnover for serious violations, plus confiscation of illegal gains and possible business licence revocation. Individuals directly responsible can be fined between RMB 100,000 and RMB 1 million and banned from holding senior data-protection roles for up to 10 years."
  },
  {
    q: "Does China's PIPL mandate data localisation?",
    a: "Yes. Article 40 of the PIPL requires Critical Information Infrastructure Operators (CIIOs) and handlers of personal information exceeding the CAC's volume thresholds (currently 1 million individuals, or 100,000 in sensitive data) to store that data within mainland China. Cross-border transfer of such data requires a CAC security assessment, certification by a CAC-approved body, or execution of the standard contract (SCC) filed with the provincial CAC."
  },
  {
    q: "When must a Data Protection Officer be appointed under PIPL?",
    a: "Article 52 of the PIPL requires a designated DPO for handlers that (a) process personal information at large scale, (b) are CIIOs, or (c) process sensitive information at scale. The DPO must have relevant expertise, and their contact details must be publicly disclosed. Article 54 additionally requires regular compliance audits, and large-scale handlers must complete a Personal Information Protection Impact Assessment (PIPIA) for high-risk processing activities."
  },
  {
    q: "How does PIPL regulate sensitive personal information?",
    a: "Article 28 defines sensitive information to include biometrics, religious belief, specific identity, medical health, financial accounts and location data of individuals under 14. Processing requires separate, specific written consent (Article 29) and a necessity-based purpose test. A PIPIA must be conducted and documented before processing, and handling data of minors under 14 triggers the stricter rules of the Minor Protection Law and CAC's 2023 Measures on Children's Personal Network Information."
  },
],
  'japan': [
  {
    q: "What are the breach notification timelines under Japan's APPI?",
    a: "Since the April 2022 APPI amendment, Personal Information Business Operators must notify the Personal Information Protection Commission (PPC) 'promptly' (in practice within 3–5 days) when a breach involves sensitive or 'special care-required' personal information, or when there is a high risk of financial damage from leaked data such as credit card numbers. Affected data subjects must also be notified promptly, and the PPC publishes non-anonymised summaries of notified incidents on its website."
  },
  {
    q: "What penalties apply under Japan's APPI?",
    a: "The 2022 amendment raised administrative fines significantly: an order to suspend business can be backed by fines of up to JPY 100 million (approx. USD 670,000) for corporations that violate PPC orders (Article 84). Criminal penalties for individuals who leak personal information databases for profit include up to one year's imprisonment and fines of JPY 500,000, rising to one year and JPY 1 million if PPC orders are defied."
  },
  {
    q: "Does Japan require appointment of a Data Protection Officer?",
    a: "The APPI does not use the term 'DPO' but Article 12(5) requires a Personal Information Protection Supervisor — functionally equivalent — to be designated to oversee compliance. The role is mandatory for all Personal Information Business Operators; unlike the GDPR there is no exemption based on size or risk, though the PPC's guidance is proportionate to processing volume. The supervisor's contact details must be made available to data subjects for handling inquiries."
  },
  {
    q: "How does Japan treat cross-border transfers of personal data?",
    a: "Article 28 of the APPI permits transfers to foreign third parties only with the data subject's consent, plus either (a) the recipient country being recognised by the PPC as having an equivalent protection level (currently none yet designated), (b) the recipient adhering to an approved PPP (Personal Information Protection Programme) certified by an authorised body in Japan, or (c) alternative safeguards equivalent to those under Japanese law. The data subject must be informed in advance of the recipient's country and the available recourse."
  },
],
  'south-korea': [
  {
    q: "What fines can the PIPC impose under PIPA?",
    a: "Following the September 2023 amendments, the Personal Information Protection Commission (PIPC) can levy administrative fines up to 3% of total revenue (sales) related to the violation — capped at KRW 3% of consolidated global turnover for overseas-transfer breaches. For criminal penalties, intentional leakage of personal information can result in up to 5 years' imprisonment or KRW 50 million (approx. USD 38,000) in fines; the 2020 amendment also introduced collective redress (class-action) rights."
  },
  {
    q: "When is a Personal Information Protection Officer (PIPO) mandatory in Korea?",
    a: "Article 31 of PIPA requires designating a PIPO for: all public institutions; private processors handling personal information of 1,000 or more data subjects per day on average; and any processor handling sensitive or unique-identification information of 1,000 or more individuals. The PIPO must be an executive or employee with relevant expertise, the appointment must be notified to the PIPC, and the contact details must be published on the processor's website."
  },
  {
    q: "What are the breach notification deadlines under PIPA?",
    a: "Under Article 33, processors must notify the PIPC within 72 hours of becoming aware of a personal information breach, regardless of the number of affected individuals — the 1,000-individual threshold for PIPC notification was removed by the 2020 amendment. Where sensitive or unique-identification information is involved, or where theft, loss or leakage affects 1,000 or more individuals, the data subjects themselves must also be notified without delay, with details of the breach and mitigation measures."
  },
  {
    q: "How does PIPA handle pseudonymised data after the 2023 amendment?",
    a: "The September 2023 amendment (effective 15 March 2024) created a parallel regime for pseudonymised information, allowing processors to combine, process or provide pseudonymised data to third parties for research, statistics, or public-interest purposes without separate consent. To qualify, pseudonymisation must meet PIPC-prescribed technical standards (replacement, deletion, scrambling of identifiers), and recipients must obtain PIPC approval or notify the PIPC depending on the use case."
  },
],
  'singapore': [
  {
    q: "What is the maximum financial penalty under Singapore's PDPA?",
    a: "Following the 2020 amendments to the Personal Data Protection Act (PDPA), the Personal Data Protection Commission (PDPC) can impose financial penalties of up to SGD 1 million (approx. USD 740,000) or 10% of the organisation's annual turnover in Singapore — whichever is higher — for violations committed on or after 1 February 2021. For organisations with turnover below SGD 10 million, the cap remains SGD 1 million."
  },
  {
    q: "What are the mandatory breach notification rules under the PDPA?",
    a: "Under Sections 26A–26E (effective 1 February 2021), organisations must notify the PDPC within 3 calendar days of assessing a notifiable breach as significant — defined as affecting 500 or more individuals or causing significant harm (e.g., involving sensitive data like financial or health information). Affected individuals must be notified 'as soon as practicable', and the notification regime excludes certain categories such as employee data handled under HR arrangements."
  },
  {
    q: "Is appointment of a Data Protection Officer mandatory in Singapore?",
    a: "Yes — Section 11(3) of the PDPA requires every organisation to designate one or more Data Protection Officers (DPOs), with no size or risk-based exemptions. The DPO can be an internal employee or an external service provider, must be identifiable by name or designation, and the organisation must publicise the DPO's contact information (business contact number, email and postal address) on its website or other reasonable channels. The DPO is accountable to the PDPC for compliance matters."
  },
  {
    q: "How does Singapore's PDPA regulate cross-border data transfers?",
    a: "Under the Transfer Limitation Obligation (Section 26), organisations may transfer personal data outside Singapore only if the recipient is bound by legally enforceable obligations that are 'comparable' to the PDPA's protection standards. Compliance can be achieved via (a) the recipient being subject to a law binding it to comparable standards, (b) a contract imposing comparable obligations, or (c) binding corporate rules (BCRs). The PDPC's Advisory Guidelines on Key Concepts provide model contractual clauses for cross-border transfers."
  },
],
  'malaysia': [
  {
    q: "What penalties apply under Malaysia's PDPA 2010?",
    a: "Under the Personal Data Protection Act 2010, the majority of offences are criminal — for example, unlawful collection or processing carries fines up to MYR 500,000 (approx. USD 106,000) and/or up to 3 years' imprisonment (Section 130). Failure to comply with an enforcement notice from the Personal Data Protection Department (JPDP) under the Ministry of Communications can result in fines up to MYR 200,000 and/or 3 years' imprisonment, with higher penalties for repeat offences involving sensitive data."
  },
  {
    q: "Does Malaysia require registration of data users and appointment of DPOs?",
    a: "Unlike the GDPR, Malaysia's PDPA requires 'data users' (controllers) in specified sectors — including communications, banking, insurance, health, transportation, education, and retail — to register with the JPDP, with failure to do so punishable by fines up to MYR 500,000 and/or 3 years' imprisonment (Section 16). There is no explicit DPO mandate, but the JPDP's 2024 guidance recommends appointing a Data Protection Officer for high-risk processing, particularly for transfers of personal data outside Malaysia."
  },
  {
    q: "How does Malaysia handle cross-border data transfers?",
    a: "Section 129 of the PDPA prohibits transfer of personal data outside Malaysia unless an exception applies — including the Minister's written approval of the destination country, the data subject's consent, transfer necessary for contract performance, or transfer to specified 'white-listed' countries. As of 2024 the Minister of Communications has not formally gazetted any approved country list, so most cross-border transfers rely on consent or contractual safeguards, though the long-awaited PDPA Amendment Bill proposes an adequacy-based regime."
  },
  {
    q: "What are the breach notification requirements in Malaysia?",
    a: "The PDPA 2010 does not currently impose a mandatory breach notification obligation on data users — notification is voluntary, and the JPDP encourages reporting via the NFP (National Fraud Portal) or directly to the department. However, sector-specific regimes (e.g., Bank Negara Malaysia's RM 22/2019 Risk Management in Technology policy) require licensed financial institutions to notify BNM within 1 hour of a critical incident, and the 2024 PDPA Amendment Bill proposes a 72-hour notification to the JPDP."
  },
],
  'philippines': [
  {
    q: "What penalties can the National Privacy Commission impose under the Data Privacy Act 2012?",
    a: "Under Sections 25–36 of the Data Privacy Act of 2012 (RA 10173), the National Privacy Commission (NPC) can recommend prosecution for criminal penalties including imprisonment of 1 to 6 years and fines from PHP 500,000 to PHP 5 million (approx. USD 9,000–89,000), with higher penalties (up to PHP 5 million and 6 years) for unauthorised processing of sensitive personal information. Convicted offenders may also face temporary or permanent disqualification from public office and forfeiture of assets."
  },
  {
    q: "Is appointment of a Data Protection Officer mandatory in the Philippines?",
    a: "Yes. NPC Circular 16-03 and Section 11(e) of the IRR (Implementing Rules and Regulations) require all Personal Information Controllers (PICs) and Personal Information Processors (PIPs) processing personal data of 1,000 or more individuals, or processing sensitive personal information of any number of individuals, to designate a Data Protection Officer (DPO). The DPO must be registered with the NPC via the Philippine Data Privacy Registration System, and contact details must be published; for heads of agencies, the role is statutory."
  },
  {
    q: "What are the breach notification timelines under the Philippine Data Privacy Act?",
    a: "Under NPC Circular 16-03, personal information breaches involving sensitive personal information or those affecting 100 or more data subjects must be notified to the NPC within 72 hours of knowledge of the breach. Affected data subjects must be notified 'in the most expedient time' after determining the scope and severity of the breach, with notification exempted only where lawful exemption applies or when the data was encrypted with a key not compromised in the breach."
  },
  {
    q: "How does the Philippines regulate cross-border data transfers?",
    a: "Section 21 of the IRR requires the National Privacy Commission to publish a list of countries with adequate data protection laws; until that list is finalised (none yet published), the NPC permits cross-border transfers based on the data subject's consent, contractual safeguards, or BCRs. The data exporter remains accountable for the recipient's compliance, and the NPC has issued Advisory Opinion 2017-01 indicating transfers to GDPR-compliant entities are presumed adequate."
  },
],
  'indonesia': [
  {
    q: "What administrative fines apply under Indonesia's PDP Law 2022?",
    a: "Under Article 57 of Law No. 27 of 2022 (effective 17 October 2022 with a 2-year transition ending October 2024), administrative sanctions include written warnings, temporary suspension of personal data processing activities, administrative fines of up to 2% of annual revenue or annual turnover (whichever applies), and removal or destruction of personal data. Fines are imposed by the Ministry of Communications and Information Technology (Kominfo), which issued Implementing Regulation PP 71 of 2019 and continues to refine enforcement guidance."
  },
  {
    q: "Is a Data Protection Officer mandatory under Indonesia's PDP Law?",
    a: "Article 53 of the PDP Law requires both public bodies and private entities acting as Data Controllers to appoint a Data Protection Officer (DPO). The DPO must be an Indonesian national, possess relevant expertise, and oversee compliance, conduct data protection impact assessments, and serve as the contact point with Kominfo and data subjects. Processors are also encouraged but not strictly mandated to appoint a DPO under the implementing regulations."
  },
  {
    q: "How does Indonesia's PDP Law handle breach notification?",
    a: "Article 46 requires Data Controllers to notify Kominfo in writing within 3×24 hours (72 hours) of becoming aware of a personal data breach that may harm data subjects, accompanied by details of the breach, mitigation steps, and recovery measures. Affected data subjects must be notified in writing without delay, and a follow-up written notification must be provided once the breach has been resolved — failure to comply carries administrative fines of up to 2% of annual revenue."
  },
  {
    q: "What are the cross-border transfer rules under Indonesia's PDP Law?",
    a: "Article 56 permits transfer of personal data outside Indonesia only if (a) the recipient country has 'equivalent' personal data protection (with Kominfo to publish a country list), (b) the recipient provides adequate guarantees in a binding agreement, or (c) the data subject has given explicit consent. Unlike the GDPR, the consent route is permitted even without adequacy, but transfers of sensitive data (Article 17) require additional safeguards such as pseudonymisation or encryption."
  },
],
  'thailand': [
  {
    q: "What penalties apply under Thailand's PDPA?",
    a: "Thailand's Personal Data Protection Act B.E. 2562 (2019), fully effective 1 June 2022, imposes administrative fines up to THB 5 million (approx. USD 140,000) for failures such as lacking a lawful processing basis, while criminal penalties for unlawful collection, use, or disclosure of personal data include up to 1 year's imprisonment and fines up to THB 1 million (Section 90). For unlawful disclosure of sensitive data (Section 91) the maximum criminal penalty rises to 1 year imprisonment and THB 1.5 million, with double penalties for repeat offences."
  },
  {
    q: "Is a Data Protection Officer required under Thailand's PDPA?",
    a: "Section 41 of the PDPA requires a Data Protection Officer (DPO) for: public authorities; entities engaged in regular monitoring of personal data or systems on a large scale; and entities whose core activities involve large-scale processing of sensitive personal data. The DPO's contact details must be published and notified to the Personal Data Protection Committee (PDPC) Office, and the DPO must be involved in all data protection matters including DPIAs and breach handling."
  },
  {
    q: "What are the data breach notification requirements under the Thai PDPA?",
    a: "Section 37 requires the Data Controller to notify the PDPC Office of any personal data breach that may cause significant harm to data subjects without delay and within 72 hours of becoming aware, unless the breach is unlikely to result in risk to data subject rights and freedoms. Affected data subjects must be notified without delay when the breach is likely to result in high risk, with details of the incident, mitigation, and available recourse."
  },
  {
    q: "How does Thailand's PDPA regulate cross-border data transfers?",
    a: "Section 28 of the PDPA permits cross-border transfers to a recipient in a foreign country only if that country has adequate data protection standards (to be designated by the PDPC, with an initial list expected in 2024), or if appropriate safeguards are in place — binding corporate rules, standard contractual clauses approved by the PDPC, or the recipient adhering to an approved certification mechanism. Specific consent, contract performance, or public-interest derogations also apply."
  },
],
  'vietnam': [
  {
    q: "What penalties apply under Vietnam's Decree 13/2023 on Personal Data Protection?",
    a: "Decree 13/2023/NĐ-CP (effective 1 July 2023) is the first comprehensive PDP regulation in Vietnam, layered on the 2018 Cybersecurity Law. It imposes administrative fines ranging from VND 20 million to VND 200 million (approx. USD 850–8,500) for most violations, but the cumulative fine for an organisation can reach VND 5 billion (approx. USD 200,000) or 5% of revenue derived from the violating processing activities under Article 16, with seizure of related data and possible licence revocation."
  },
  {
    q: "Is a Data Protection Officer required under Vietnam's PDPD?",
    a: "Article 22 of Decree 13/2023 requires every 'Personal Data Processor' — both domestic and foreign entities processing Vietnamese data subjects' personal data — to designate a Department of Personal Data Protection (Phòng bảo vệ dữ liệu cá nhân) and a person in charge (DPO). For foreign processors without a presence in Vietnam, a responsible representative must be appointed and registered with the Department of Cybersecurity and Hi-Tech Crime Prevention (A05) under the Ministry of Public Security."
  },
  {
    q: "Does Vietnam mandate data localisation under Decree 13?",
    a: "Yes, but narrowly scoped. Article 26 requires certain categories — including data of Vietnamese users processed by foreign entities (e.g., social media platforms, e-commerce, payment services) — to store a copy of the personal data in Vietnam, with storage periods specified by the Ministry of Public Security. Cross-border transfer also requires filing a dossier with the Ministry of Public Security and obtaining a Transfer Impact Assessment, with transfers of certain data requiring express approval."
  },
  {
    q: "What are the consent and notification requirements under Vietnam's PDPD?",
    a: "Article 11 requires explicit, documentable consent — silence or inaction is not consent — and consent must be specific to each processing purpose. Data subjects must be informed in advance of: the type of data, purpose, recipient(s), retention period, and rights of access, rectification, erasure, and objection. Sensitive data (Article 11(3)) — political views, religion, health, genetics, biometrics, sexual orientation, criminal records — requires stricter, separate consent and DPIA documentation."
  },
],
  'taiwan': [
  {
    q: "What penalties apply under Taiwan's Personal Data Protection Act?",
    a: "Under the Personal Data Protection Act (PDPA, last major amendment 2016), administrative fines range from NT$20,000 to NT$2,000,000 (approx. USD 630–63,000) per violation for non-public sector entities, with up to NT$200,000 per affected individual for failure to take corrective action after notification. Criminal liability (Article 41) applies for unlawful collection or sale of personal data for profit, punishable by up to 5 years' imprisonment and fines up to NT$1,000,000; sensitive-data offences under Article 42 carry up to 2 years' imprisonment."
  },
  {
    q: "Does Taiwan require appointment of a Data Protection Officer?",
    a: "Taiwan's PDPA does not impose a universal DPO mandate like the GDPR, but sectoral regulations do. For instance, the Financial Supervisory Commission's Regulations Governing Implementation of Personal Data Protection by Financial Institutions require a designated data protection responsible person. The National Development Council's 2023 'Personal Data Protection Act Amendment Draft' proposes mandatory DPOs for entities processing over 100,000 data subjects, but as of 2024 the amendment has not yet been enacted."
  },
  {
    q: "How does Taiwan regulate cross-border transfers of personal data?",
    a: "Article 21 of the PDPA restricts international transfers of personal data to: (a) recipients in countries with adequate protection standards (none yet designated by the government); (b) transfers under contractual safeguards; (c) transfers to affiliated entities with appropriate protection; or (d) transfers with the data subject's consent. Transfers may also be permitted for reasons of public interest, contractual necessity, or to protect the data subject's vital interests, subject to verification by the relevant competent authority."
  },
  {
    q: "What are the breach notification rules under Taiwan's PDPA?",
    a: "Article 12 requires data controllers to notify the data subject 'in a timely manner' after a personal data breach has been discovered and remediation has been performed, by media, internet, or other appropriate means. Unlike the GDPR there is no explicit notification to a supervisory authority within a fixed deadline, and Taiwan has no single central data protection regulator — instead, sectoral regulators (e.g., FSC, NCC, MOHW) oversee compliance within their respective industries."
  },
],
  'hong-kong': [
  {
    q: "What penalties apply under Hong Kong's Personal Data (Privacy) Ordinance?",
    a: "Hong Kong's PDPO (Cap. 486, originally enacted 1995) does not yet empower the Privacy Commissioner for Personal Data (PCPD) to impose direct administrative fines for general data protection breaches. However, the direct marketing provisions (Part VI, added in 2013) carry criminal penalties of up to HKD 1 million (approx. USD 128,000) and 5 years' imprisonment for repeat or aggravated direct marketing offences, and the 2021 'doxxing' amendments under Part 3A add up to 5 years' imprisonment and HKD 1 million fines for malicious disclosure of personal data."
  },
  {
    q: "Does Hong Kong require appointment of a Data Protection Officer?",
    a: "Hong Kong's PDPO does not explicitly mandate appointment of a DPO, but the PCPD's 2024 Guidance on Data Protection Officer strongly recommends every data user to designate a DPO, particularly those handling large volumes of sensitive data. For some sectors — e.g., licensed banks under the Hong Kong Monetary Authority's Sound Practices — designation of a Data Protection Officer is enforced through supervisory circulars."
  },
  {
    q: "Are there mandatory data breach notification requirements in Hong Kong?",
    a: "Hong Kong's PDPO currently has no statutory mandatory breach notification regime, though the PCPD's 2024 Data Breach Handling Guidance strongly encourages voluntary notification to the PCPD and affected individuals 'as soon as possible' (typically within 24–48 hours). The 2025 amendment bill (consultation concluded) proposes a mandatory notification regime with administrative fines up to HKD 1 million for failing to notify the PCPD of a 'notifiable data breach' within 3 days of becoming aware."
  },
  {
    q: "How does Hong Kong regulate cross-border data transfers?",
    a: "Section 33 of the PDPO — which would restrict transfers to countries without 'adequate' protection — has never been brought into force since the ordinance was enacted in 1995. As a practical substitute, the PCPD issued Recommended Model Contractual Clauses in May 2014 and updated guidance in 2023, encouraging data users to incorporate these clauses into cross-border transfer contracts; the PCPD's 2024 reform proposals suggest finally commencing Section 33 with an adequacy-determination mechanism."
  },
],
  'pakistan': [
  {
    q: "What is the status of Pakistan's Personal Data Protection Bill?",
    a: "Pakistan's primary data protection statute — the Personal Data Protection Bill 2023 — was approved by the Federal Cabinet in May 2023 for tabling before the National Assembly and a revised draft was circulated in July 2024 by the Ministry of Information Technology and Telecommunication (MoITT). As of 2024 the Bill remains pending in Parliament; until enacted, data protection relies on the Prevention of Electronic Crimes Act 2016 (PECA) and sectoral regulation by the Pakistan Telecommunication Authority (PTA)."
  },
  {
    q: "What penalties are proposed under Pakistan's Personal Data Protection Bill?",
    a: "Under the 2024 draft, the proposed National Commission for Personal Data Protection of Pakistan can impose administrative fines of up to PKR 15 million (approx. USD 54,000) plus 4% of the total worldwide annual turnover of the preceding financial year, modelled on GDPR-style sanctions. Criminal liability for unauthorised disclosure of sensitive data is also proposed, with imprisonment up to 3 years and fines up to PKR 5 million for repeat or wilful violations."
  },
  {
    q: "Will Pakistan's Bill require appointment of a Data Protection Officer?",
    a: "Yes — Section 18 of the 2024 draft Bill requires every Data Controller and Data Processor processing sensitive personal data, or processing personal data of more than 10,000 data subjects, to appoint a Data Protection Officer. Foreign entities processing Pakistani data subjects' data without a local presence must appoint a local representative registered with the National Commission; failure to do so carries administrative fines up to PKR 5 million."
  },
  {
    q: "How does the Pakistan Bill handle data localisation and cross-border transfers?",
    a: "Sections 28–30 of the 2024 Bill require Critical Data Sets (including biometric, financial, and health data of Pakistani nationals) to be processed and stored within Pakistan; any cross-border transfer requires prior written approval from the National Commission and an adequate-level determination of the recipient country. For non-critical data, transfer is permitted to 'approved countries' (to be gazetted) or with explicit data subject consent and contractual safeguards via standard contractual clauses issued by the Commission."
  },
],
  'bangladesh': [
  {
    q: "What is the status of Bangladesh's Data Protection Act 2023?",
    a: "Bangladesh's Data Protection Act 2023 was placed before Parliament on 18 September 2023 and is currently under review by the Parliamentary Standing Committee on the Ministry of Posts, Telecommunications and Information Technology; a revised draft was circulated in 2024. The Bill proposes a Data Protection Authority of Bangladesh (DPAB) to be established within 180 days of the Act's commencement, with full implementation phased over 3 years."
  },
  {
    q: "What penalties are proposed under Bangladesh's Data Protection Act 2023?",
    a: "Section 96 of the 2023 Bill proposes administrative fines of up to BDT 50 lakh (5 million, approx. USD 45,000) for general violations, with fines scaling up to BDT 5 crore (50 million, approx. USD 450,000) or 2% of annual turnover for repeat or serious breaches involving sensitive personal data. Criminal penalties — including imprisonment up to 5 years — are proposed for unauthorised sale or disclosure of sensitive data, modelled on India's DPDP Act 2023 framework."
  },
  {
    q: "Does the Bangladesh Bill require appointment of a Data Protection Officer?",
    a: "Yes — Section 25 of the 2023 Bill requires every Data Fiduciary (controller) and Significant Data Fiduciary to appoint a Data Protection Officer based in Bangladesh, with contact details published and registered with the DPAB. Significant Data Fiduciaries — determined by the DPAB based on volume, sensitivity, and risk of processing — must additionally appoint an independent Data Auditor and conduct annual Data Protection Impact Assessments (DPIAs)."
  },
  {
    q: "Does Bangladesh's Bill mandate data localisation?",
    a: "Section 39 of the 2023 Bill requires personal data of Bangladeshi data subjects to be stored on servers located in Bangladesh, with cross-border transfer permitted only for: (a) processing under contract with the data subject's consent; (b) transfer to countries notified as 'adequate' by the DPAB; or (c) under standard contractual clauses approved by the DPAB. Sensitive data — including biometric, financial, and health data — is subject to stricter localisation, with transfer only on case-by-case DPAB approval."
  },
],
  'sri-lanka': [
  {
    q: "What penalties apply under Sri Lanka's Personal Data Protection Act No. 9 of 2022?",
    a: "Under Section 56 of Sri Lanka's Personal Data Protection Act No. 9 of 2022 (gazetted 19 March 2022, generally effective from 19 March 2023, with full controller obligations effective 19 March 2024), the Data Protection Authority (DPA) of Sri Lanka can impose administrative fines up to LKR 10 million (approx. USD 31,000) or 1% of annual turnover — whichever is higher — for general violations. Higher penalties, including criminal fines of up to LKR 5 million and 2 years' imprisonment, apply to unauthorised disclosure of sensitive data."
  },
  {
    q: "Is a Data Protection Officer mandatory under Sri Lanka's PDPA?",
    a: "Section 14 of the Act requires every 'Controller or Processor of Personal Data' — i.e., all controllers and processors — to appoint a Data Protection Officer (DPO), with no size-based exemption. The DPO must be a person with relevant qualifications and experience, must be reachable as a single contact point for the DPA and data subjects, and the contact details must be communicated to the DPA. For controllers processing sensitive data at scale, the DPA may require additional appointment of a Data Protection Auditor."
  },
  {
    q: "What are the breach notification requirements under Sri Lanka's PDPA?",
    a: "Section 18 of the Act requires controllers to notify the DPA of any personal data breach that is likely to cause harm to data subjects 'as soon as reasonably practicable' and no later than 72 hours after becoming aware of the breach. Where the breach is likely to result in high risk to data subjects, the controller must also notify affected individuals without undue delay, with details of the breach, likely consequences, and mitigation measures — failure to comply carries administrative fines up to LKR 5 million."
  },
  {
    q: "How does Sri Lanka's PDPA regulate cross-border transfers?",
    a: "Section 23 of the Act permits cross-border transfer of personal data only if (a) the recipient country has been designated as providing 'an adequate level of protection' by the DPA (with the DPA expected to publish an initial list of adequate countries in 2024–2025), (b) the transfer is subject to appropriate safeguards such as legally binding contracts or BCRs, or (c) the data subject has given explicit consent to the proposed transfer, after being informed of the risks."
  },
],
  'nepal': [
  {
    q: "What penalties apply under Nepal's Privacy Act 2018?",
    a: "Under Section 30 of the Privacy Act 2075 BS (2018), violations such as unauthorised collection, use, or disclosure of personal information are punishable by fines of up to NPR 30,000 (approx. USD 225) or imprisonment of up to 3 months, or both — among the lowest data protection penalties in Asia. The Privacy Regulation 2077 BS (2020) introduced additional administrative fines of up to NPR 50,000 for breach of data protection obligations by 'data controllers' as defined in the Act."
  },
  {
    q: "Does Nepal require appointment of a Data Protection Officer?",
    a: "Nepal's Privacy Act 2018 does not explicitly mandate a Data Protection Officer, but Section 15 requires every 'body corporate' (organisation) processing personal information to designate a responsible official to oversee privacy compliance and act as the contact point with the Department of Information (under the National Information Technology Center). Following the Privacy Regulation 2020, entities processing sensitive personal information — including banks, hospitals, and telecommunications operators — must appoint a designated privacy focal person."
  },
  {
    q: "What are the consent requirements under Nepal's Privacy Act?",
    a: "Section 4 of the Privacy Act 2018 requires 'informed and explicit consent' before collecting, using, or disclosing personal information, with consent to be obtained separately for each purpose. Sensitive personal information — defined in Section 2(j) to include health, sexual orientation, biometric data, religion, caste, political affiliation, and criminal record — requires explicit written consent and can only be processed where strictly necessary, with the data subject having the right to withdraw consent at any time."
  },
  {
    q: "How does Nepal regulate cross-border transfers of personal data?",
    a: "Nepal's Privacy Act 2018 does not contain a dedicated cross-border transfer regime; Section 14 broadly prohibits disclosure of personal information to 'unauthorised persons', which the Department of Information interprets to include recipients in foreign countries without safeguards. The Nepal Rastra Bank's 2020 IT Guidelines require licensed banks and financial institutions to obtain prior NRB approval before transferring customer data outside Nepal, with mandatory use of standard contractual clauses."
  },
],
  'kazakhstan': [
  {
    q: "What penalties apply under Kazakhstan's Law on Personal Data and Its Protection?",
    a: "Kazakhstan's Law on Personal Data and Its Protection No. 94-V (dated 21 May 2013, last amended 2024) does not impose GDPR-style percentage-of-turnover fines; violations are governed by the Administrative Offences Code. Article 79 of the Code sets fines of KZT 30 to 100 monthly calculation indices (MCI) — approximately KZT 100,000 to 350,000 (USD 230–800) — for unlawful collection, processing, or transfer of personal data by officials, with fines for legal entities up to KZT 1 million (approx. USD 2,300) per violation."
  },
  {
    q: "Does Kazakhstan mandate data localisation?",
    a: "Yes — under Article 16-1 of the Law on Personal Data (introduced in 2017), databases containing personal data of citizens of Kazakhstan must be physically located on servers within the territory of Kazakhstan. Cross-border transfer of personal data to a foreign state is permitted only after the data subject's written consent or contractual safeguards, and the data must remain mirrored on Kazakh servers; failure to comply is treated as an administrative offence under Article 79 of the Code."
  },
  {
    q: "Is a Data Protection Officer required under Kazakhstan's Law on Personal Data?",
    a: "Kazakhstan does not impose a universal DPO mandate, but Article 19-1 of the Law requires public authorities and operators that process large volumes of personal data (defined as processing data of more than 5,000 data subjects) to designate a responsible officer for personal data protection. The 2024 amendments strengthen this by requiring the officer to be registered with the Ministry of Digital Development, Innovation and Aerospace Industry (MDDIAI), with contact details published."
  },
  {
    q: "How does Kazakhstan regulate cross-border transfers of personal data?",
    a: "Article 17 of the Law permits cross-border transfers only where the data subject has given written consent, the transfer is necessary for performance of a contract with the data subject, or where Kazakhstan is a party to a relevant international treaty. Foreign recipients must provide written guarantees of data security, and transfers to countries that do not provide 'adequate' protection (as determined by MDDIAI) require additional safeguards, including standard contractual clauses approved by the Ministry."
  },
],
  'tajikistan': [
  {
    q: "What penalties apply under Tajikistan's Law on Protection of Personal Data 2018?",
    a: "Tajikistan's Law on Protection of Personal Data No. 1467 (dated 30 July 2018) relies on the Administrative Offences Code of Tajikistan for enforcement. Article 446 of the Code provides fines of TJS 5,000 to 10,000 (approx. USD 460–920) for officials and TJS 10,000 to 20,000 for legal entities for unlawful collection, processing, or transfer of personal data. The 2022 amendments added criminal liability under Article 159 of the Criminal Code — up to 2 years' imprisonment — for unauthorised sale or disclosure of sensitive personal data."
  },
  {
    q: "Is a Data Protection Officer required under Tajikistan's Law on Protection of Personal Data?",
    a: "Article 22 of the Law requires operators (state bodies and legal entities) that process personal data of more than 1,000 data subjects, or that process sensitive data of any volume, to designate a responsible officer for personal data protection. The officer must be registered with the authorised state body — currently the State Committee on National Security's Service for Communications — and serves as the contact point for data subjects and the regulator."
  },
  {
    q: "What are the consent requirements under Tajikistan's Law on Protection of Personal Data?",
    a: "Article 9 of the Law requires the data subject's 'free, specific, informed, and unambiguous' consent in writing or in electronic form using an electronic signature, with the operator required to be able to demonstrate consent. Sensitive personal data — including race, nationality, political views, religion, health, and intimate life — requires 'specific written consent', and minors' data requires the consent of parents or legal guardians until the data subject reaches 18 years of age."
  },
  {
    q: "How does Tajikistan regulate cross-border transfers of personal data?",
    a: "Article 17 of the Law restricts cross-border transfers to countries that provide 'adequate' personal data protection (the list is to be determined by the Government of Tajikistan; as of 2024 no list has been published). Transfers without an adequacy determination require explicit consent of the data subject and a written contractual guarantee from the recipient; transfers to offshore jurisdictions or jurisdictions on the Eurasian Economic Union (EAEU) sanctions list are prohibited."
  },
],

  // =========================================================
  // EUROPE COUNTRY FAQs
  // =========================================================
  'germany': [
  {
    q: "How does Germany's Federal Data Protection Act (BDSG) interact with the GDPR?",
    a: "The BDSG (Bundesdatenschutzgesetz), last reformed in 2017 to align with the GDPR, supplements rather than overrides the GDPR. It adds national specifics such as broader employee data protection rights under Section 26 BDSG, stricter rules on automated decision-making, and a data protection officer (Datenschutzbeauftragter) mandate for entities with 20+ employees (compared to the GDPR's broader risk-based threshold). Companies operating in Germany must comply with both layers simultaneously."
  },
  {
    q: "Do German works councils have a say in data protection matters?",
    a: "Yes. Under Section 26 BDSG together with the Works Constitution Act (BetrVG), works councils (Betriebsrat) must be consulted before introducing or significantly changing processing operations involving employee data, including AI-powered HR tools or monitoring software. The Federal Labour Court has repeatedly affirmed this co-determination right (Mitbestimmung), making it one of Germany's most distinctive employer obligations. Failure to consult can render processing unlawful even if technically GDPR-compliant."
  },
  {
    q: "Which authority enforces data protection in Germany and what fines have they issued?",
    a: "Germany has 16 state data protection authorities (LDAs) plus the federal BfDI, but since 2022 a Conference of Data Protection Authorities (DSK) coordinates enforcement. The Hamburg DPA fined H&M €35.3 million (2020) for excessive employee surveillance, while the Baden-Württemberg LDA imposed €400,000 on a real estate company. In 2024, the DSK confirmed Germany's €1.25 billion claim against Dun & Bradstreet for unlawful data trading."
  },
  {
    q: "What are Germany's rules on transferring data outside the EU?",
    a: "Germany follows GDPR Chapter V rules (adequacy decisions, SCCs, BCRs), but Section 79 BDSG adds criminal penalties — up to two years' imprisonment — for unlawful transfers of personal data to recipients in non-adequate third countries, even when done for commercial gain. The German DPAs are among the most stringent in Europe on surveillance risks, warning since Schrems II that US transfers require case-by-case assessment and supplementary measures like encryption."
  },
],
  'france': [
  {
    q: "How active is the CNIL in enforcement compared to other EU regulators?",
    a: "The Commission Nationale de l'Informatique et des Libertés (CNIL) is one of Europe's most proactive regulators. Notable fines include €150 million against Google (2021) for cookie consent manipulation, €60 million against TikTok (2023), and €35 million against Orange for marketing without consent. The CNIL also pioneered online sanctions via its 2023 guidance on dark patterns and cookie walls."
  },
  {
    q: "What does France's Loi Informatique et Libertés add beyond the GDPR?",
    a: "The 1978 law (modernized in 2018) pre-dates the GDPR and adds French-specific rules: a unique authorization regime for health data (reference methodology MR-004), mandatory CNIL declaration for video surveillance in public spaces, and stricter rules on political and union affiliation processing. It also maintains France's distinctive right to oppose processing 'for legitimate reasons' even post-consent."
  },
  {
    q: "What is France's specific cookie consent regime?",
    a: "France tightened cookie rules in 2021 via CNIL Deliberation 2020-091, requiring explicit consent before any non-essential cookie, no pre-ticked boxes, and equal 'accept' and 'reject' button visibility. Fines can reach €20 million or 4% of global turnover under Article 82 of the Loi Informatique et Libertés. The CNIL fined Facebook €60 million and Google €150 million in 2021 for violating these requirements."
  },
  {
    q: "How does France handle health data under the GDPR national carve-out?",
    a: "France uses Article 9(2)(h) GDPR to allow health data processing under the 'reference methodologies' (MR) system administered by the CNIL. The MR-004 (2023 version) allows research without individual authorization for low-risk studies, while the Health Data Hub hosts sensitive health datasets. The CNIL has also authorized AI trials on oncology data, balancing innovation with Article 16 of the 1978 law."
  },
],
  'italy': [
  {
    q: "What is the Garante's role and how aggressive is its enforcement?",
    a: "Italy's Garante per la protezione dei dati personali (Garante) is a collegiate body with broad powers under Legislative Decree 196/2003 (Codice Privacy) as amended in 2018. It fined Google €1 million in 2022 for direct marketing without consent, penalized ChatGPT-maker OpenAI in 2024 with the first EU restriction on generative AI, and fined TIM €27.8 million in 2020 for unlawful profiling. The Garante can suspend data flows and order data erasure."
  },
  {
    q: "How did the Garante approach ChatGPT in 2023-2024?",
    a: "On March 31, 2023, the Garante became the first EU regulator to temporarily ban ChatGPT, citing OpenAI's failure to verify user age, lack of legal basis for training data collection, and insufficient transparency. OpenAI resumed service after fixes, but in December 2024 the Garante imposed a €15 million fine for processing user data without legal basis and violating transparency duties — the largest AI-related fine in Italy."
  },
  {
    q: "What specific rules does Italy's Codice Privacy add for journalists?",
    a: "Italy's Legislative Decree 196/2003 Article 7-quinquies and Article 137 give journalists special dispensation from consent requirements for 'current events' reporting, balanced against dignity rights. The Garante has upheld these limits, ruling in 2022 that publishing photos of crime victims' relatives without consent breached Article 8 of the Italian Constitution even with journalistic privilege."
  },
  {
    q: "Does Italy require a Data Protection Officer more strictly than the GDPR?",
    a: "Italy expands DPO requirements beyond the GDPR's Article 37. Under Article 37 of Legislative Decree 196/2003, the Garante requires a DPO for all public bodies (including small municipalities), providers of electronic communications services, and entities processing genetic or biometric data at scale. Italy also mandates DPO publication in a public register held by the Garante since 2019."
  },
],
  'spain': [
  {
    q: "What is the digital age of consent in Spain and why does it matter?",
    a: "Spain set the digital age of consent at 14 under Article 7 of the LOPDGDD (Ley Orgánica 3/2018), meaning minors aged 14+ can independently consent to information society services. Below 14, parental consent is required. The AEPD (Agencia Española de Protección de Datos) has fined several apps — including a €10 million fine against a social network in 2023 — for failing to verify parental consent mechanisms."
  },
  {
    q: "What are Spain's most notable AEPD enforcement actions?",
    a: "The AEPD has become one of Europe's most active mid-tier regulators, imposing €6.19 million on Vueling (2024) for unlawful CCTV and inadequate information, €5 million on Repsol for privacy violations, and €3 million on BBVA in 2020. Spain also led a 2023 joint action with CNIL against Tinder for children's data. Total AEPD fines exceeded €40 million in 2023 alone."
  },
  {
    q: "Does Spain have a national data breach notification regime distinct from the GDPR?",
    a: "Spain's LOPDGDD Article 72 sets the national 72-hour breach notification rule aligned with GDPR Article 33, but adds sectoral obligations for electronic communications (aligning with the ePrivacy Directive). The AEPD has fined a Spanish bank €300,000 for delayed breach reporting and operates an online breach notification portal (RITBA) that requires both initial and final reports."
  },
  {
    q: "How does Spain handle political campaigning and electoral data?",
    a: "Under LOPDGDD Article 9 bis, political parties must obtain explicit consent for electoral profiling, and cannot use personal data gathered from public sources for political microtargeting without additional safeguards. Following the Cambridge Analytica scandal, the AEPD fined the Partido Popular €200,000 in 2019 for using unlawfully obtained voter data, setting a precedent for Spanish electoral data enforcement."
  },
],
  'netherlands': [
  {
    q: "How does the Dutch Autoriteit Persoonsgegevens (AP) enforce GDPR in the Netherlands?",
    a: "The AP (Autoriteit Persoonsgegevens) has gained prominence for fintech and rideshare enforcement. Its landmark €290 million fine against Uber (2021) for transferring EU drivers' data to US servers without adequate safeguards was upheld in 2024. The AP also fined the Dutch Tax and Customs Administration €525,000 in 2023 for dual nationality discrimination in fraud detection algorithms."
  },
  {
    q: "What does the Dutch UAVG add to the GDPR nationally?",
    a: "The Uitvoeringswet Algemene Verordening Gegevensbescherming (UAVG, 2018) implements the GDPR nationally and adds specific provisions: stricter rules on citizen service number (BSN) processing (Article 44 UAVG), special provisions for municipal registers (GBA), and explicit limits on processing for scientific research. The UAVG also clarifies AP powers including dawn raids and home entry under Article 58."
  },
  {
    q: "What was the Dutch childcare benefits scandal and how did it reshape Dutch data protection?",
    a: "The 2019 toeslagenaffaire revealed that the Tax and Customs Administration used discriminatory algorithms to falsely accuse 26,000 families of childcare benefit fraud — many with dual nationality — leading to the government's resignation in 2021. The AP issued multiple fines, the largest €2.75 million, for unlawful automated decision-making and racial profiling under GDPR Article 22."
  },
  {
    q: "What are the Netherlands' rules on CCTV and public surveillance?",
    a: "Under the UAVG and Dutch Criminal Code Article 441c, public CCTV surveillance by municipalities requires AP notification and a clear legal basis. The AP's 2023 guidance limits facial recognition in public spaces unless authorized by law. The Dutch government dropped plans for a nationwide camera surveillance system in 2022 after the AP warned of disproportionate interference with Article 8 ECHR."
  },
],
  'ireland': [
  {
    q: "Why is the Irish Data Protection Commission (DPC) so central to EU GDPR enforcement?",
    a: "Because many global tech giants (Meta, Google, X, Microsoft, Apple) have EU headquarters in Dublin, the DPC acts as lead supervisory authority under GDPR's one-stop-shop mechanism. The DPC has handled landmark cases including the €1.2 billion fine against Meta (2023) for transatlantic data transfers and €405 million against Instagram (2022) for children's data — Ireland accounts for over 60% of total EU GDPR fines by value."
  },
  {
    q: "What does Ireland's Data Protection Act 2018 add to the GDPR?",
    a: "The 2018 Act designates the DPC structure, expands on processing for law enforcement under Part 4, and sets the age of digital consent at 16 — the maximum allowed under GDPR Article 8. It also introduces Irish-specific requirements like Section 17 (mandatory recording of processing by controllers) and establishes the Circuit Court as the forum for DPC enforcement orders."
  },
  {
    q: "How did the DPC handle the Meta €1.2 billion case?",
    a: "In May 2023, the DPC imposed its largest-ever fine — €1.2 billion ($1.3 billion) — on Meta Ireland for transferring EU user data to the United States without adequate safeguards, citing the absence of a valid SCC + supplementary measures regime post-Schrems II. The decision was shaped by the European Data Protection Board's binding decision under Article 65, reflecting dissent from Austria, Germany, and France on the DPC's initial draft."
  },
  {
    q: "How does Ireland approach children's data specifically?",
    a: "The DPC's 2021 'Children's Front: Guidance for Frontline Public Bodies' and its 2020 Children's Data Protection Code set granular standards — including default privacy settings for under-18s and restrictions on behavioral advertising. The 2022 €405 million Instagram fine (later reduced on appeal to €405 million) targeted exposure of minors' phone numbers and email addresses, codifying the DPC's stricter-than-average stance on children's processing."
  },
],
  'poland': [
  {
    q: "What is the role of the Polish UODO (Urząd Ochrony Danych Osobowych)?",
    a: "The President of the Personal Data Protection Office (UODO) is Poland's GDPR supervisory authority, replacing the former GIODO under the 2018 Polish Data Protection Act. UODO has issued fines including PLN 580,000 (≈€130,000) against T-Mobile Polska (2021) and PLN 2.5 million (≈€580,000) against a debt collector in 2023. UODO is also notable for actively engaging with Polish courts on data subject compensation claims."
  },
  {
    q: "How does Polish law regulate CCTV and biometric data?",
    a: "Poland's 2018 Data Protection Act Article 21(1) requires explicit information notices for CCTV and prohibits processing of biometric data (like fingerprints or face templates) for general employee time-attendance unless strictly necessary. UODO has fined a fitness chain and several schools for unlawful biometric processing, with sanctions reaching PLN 200,000 per violation under Article 89 of the Act."
  },
  {
    q: "Does Poland mandate DPO appointments beyond the GDPR thresholds?",
    a: "The Polish Data Protection Act Article 37 mirrors GDPR thresholds but adds that all public authorities — including smallest municipal offices (urzędy gmin) — must appoint a DPO. UODO maintains a public register of DPOs and requires re-notification when changes occur. UODO has also issued guidance that legal firms and medical providers should designate DPOs due to systematic large-scale processing."
  },
  {
    q: "What are Poland's specific rules on direct marketing?",
    a: "Poland's Telecommunications Law Article 172 and the 2018 Act Article 21(2) restrict telemarketing to existing customers (soft opt-in) for 30 days after sale, with express consent required otherwise. UODO fined Yes Telecom PLN 943,000 (≈€210,000) in 2020 for cold-calling without legal basis, and has issued detailed guidance distinguishing GDPR Article 6(1)(f) legitimate interest from Polish Law on Counteracting Unfair Market Practices."
  },
],
  'sweden': [
  {
    q: "What is the role of Sweden's IMY (Integritetsskyddsmyndigheten)?",
    a: "Sweden's data protection authority was renamed IMY in 2021 (formerly Datainspektionen) to reflect expanded GDPR responsibilities under the Data Protection Act 2018:218. IMY has issued notable fines including SEK 525 million (≈€58 million) against Spotify (2023) for unlawful processing of user data and inadequate transparency, and SEK 200 million against Google in 2022 for failing to delete search results under the right to erasure."
  },
  {
    q: "What is Sweden's camera permit system under the 2018:218 Act?",
    a: "Sweden uniquely requires a camera permit (kameratillstånd) from the County Administrative Board (Länsstyrelsen) for CCTV covering public areas, even for private businesses. The Data Protection Act 2018:218 Chapter 6 maintains this 2003-origin rule with criminal penalties (up to 1 year's imprisonment) for unpermitted surveillance. IMY confirmed in 2023 that workplace cameras monitoring employees require both a permit and GDPR legal basis."
  },
  {
    q: "How does Sweden's law handle public access to official documents vs. privacy?",
    a: "Sweden balances privacy with the 1766 Principle of Public Access to Official Records (offentlighetsprincipen), the world's oldest transparency law. The 2018:218 Act Chapter 7 allows public authorities to disclose personal data in official documents unless exempt, creating unique tension with GDPR Article 15. IMY guidance permits re-use for journalism and research but limits commercial repurposing."
  },
  {
    q: "What is Sweden's stance on the Schrems II decision and US data transfers?",
    a: "IMY has been among Europe's strictest regulators on post-Schrems II compliance, issuing detailed guidance requiring transfer impact assessments (TIAs) and supplementary measures like end-to-end encryption. The Spotify fine in 2023 partially cited inadequate US transfer safeguards, and IMY advised Swedish authorities in 2023 against using Google Workspace without verified SCCs and encryption for certain public sector data."
  },
],
  'belgium': [
  {
    q: "How does Belgium's Data Protection Authority (GBA/APD) operate?",
    a: "Belgium's Gegevensbeschermingsautoriteit (GBA), established under the 2018 Belgian Data Protection Act, has a three-tier structure with a Secretariat, Litigation Chamber, and Knowledge Centre. Notable enforcements include a €600,000 fine against a political party (2020) for illegal voter profiling, and €100,000 against the City of Antwerp for excessive CCTV use. The GBA processed over 11,000 complaints in 2023 alone."
  },
  {
    q: "What is Belgium's national data breach regime under the 2018 Act?",
    a: "Belgium's Data Protection Act Article 30 implements GDPR Article 33 but adds a 72-hour notification to the GBA, with potential fines of up to €20 million or 4% of global turnover. Belgium also requires notification of breaches involving electronic communications networks under the 2022 amendment transposing the EECC, with the Belgian Institute for Postal Services and Telecommunications (BIPT) as a co-regulator."
  },
  {
    q: "How does Belgium regulate political microtargeting and elections?",
    a: "Following the 2018 Cambridge Analytica fallout, Belgium's 2018 Act Article 12 requires explicit consent for political profiling, and the GBA fined the Vlaams Belang party €60,000 in 2022 for using unlawfully obtained phone numbers. The Belgian Electoral Code (2020) further bans political microtargeting based on sensitive data within 30 days of elections."
  },
  {
    q: "What is Belgium's stance on cookies and dark patterns?",
    a: "The GBA's 2022 recommendation on dark patterns prohibits pre-ticked boxes, hidden 'reject' buttons, and consent fatigue tactics. The Belgian Data Protection Act Article 130 allows fines up to €1 million per violation for cookie violations, and the GBA fined several real estate websites a combined €150,000 in 2023 for non-compliant cookie walls."
  },
],
  'turkey': [
  {
    q: "What does Turkey's KVKK Law 6698 require for lawful processing?",
    a: "Turkey's Kişisel Verilerin Korunması Kanunu (KVKK, Law No. 6698, in force since April 2016) requires a legal basis from Article 5 — including explicit consent (açık rıza), contract necessity, or legitimate interest — for any processing. Unlike the GDPR, Turkish law treats consent as a 'declaration of intent' that must be in writing or electronic form and revocable at any time. The KVKK Board (Kişisel Verileri Koruma Kurulu) imposes administrative fines up to TRY 18 million (≈€530,000 / $575,000) for violations as of 2024."
  },
  {
    q: "Does Turkey require data localisation or registration of processing?",
    a: "Yes — Turkey's distinctive feature is mandatory data registration (VERBİS) for entities processing more than 50,000 records annually or with annual turnover above a threshold. Article 18 KVKK also requires localisation for processing sensitive data abroad: the Turkish Board must authorise the destination country, and certain sectoral laws (banking, telecom) impose stricter local storage rules. Non-compliance can trigger fines up to TRY 9 million (≈€265,000)."
  },
  {
    q: "What enforcement actions has the KVKK Board taken against big tech?",
    a: "The Turkish KVKK Board fined Meta TRY 4.8 million (≈€140,000) in 2022 and a further TRY 1.7 million in 2023 for unlawful data sharing between Instagram and Facebook, plus WhatsApp consent issues. The Board also fined TikTok TRY 5 million for data transfer violations. Turkey's breach notification rule (72-hour to KVKK under Article 13) has led to over 800 breach reports annually since 2020."
  },
  {
    q: "How does Turkey's KVKK compare to the GDPR on data subject rights?",
    a: "Turkey provides GDPR-aligned rights (access, rectification, erasure, portability, objection) under Articles 11-15 KVKK. Differences include a shorter erasure response period (30 days vs GDPR's 30-60 day range), no explicit automated decision-making prohibition in the original text, and narrower 'sensitive data' categories. The KVKK Board issued guidelines in 2023 clarifying that genetic and biometric data qualify as sensitive."
  },
],
  'switzerland': [
  {
    q: "What changed in Switzerland's revised FADP that entered into force in September 2023?",
    a: "The revised Federal Act on Data Protection (revFADP, in force 1 September 2023) modernised Switzerland's 1992 law to near-GDPR alignment. New features include mandatory DPO for large-scale processing (Article 10), a 72-hour breach notification rule to the FDPIC (Article 24), and explicit rights to data portability. Fines can reach CHF 250,000 (≈€260,000 / $290,000) for criminal violations, with criminal liability for executives."
  },
  {
    q: "What is the role of Switzerland's FDPIC?",
    a: "The Federal Data Protection and Information Commissioner (FDPIC, currently Adrian Lobsiger) supervises federal and cantonal processing. The FDPIC cannot directly impose administrative fines under the revFADP — unlike the GDPR — but can issue recommendations and refer cases to prosecutors. The FDPIC also oversees adequacy and is recognised as adequate by the EU since 2000, allowing free EU-Swiss data flows."
  },
  {
    q: "How does Switzerland handle cross-border data transfers?",
    a: "The revFADP Article 16 permits transfers to countries with 'adequate' protection — the EU/EEA, Andorra, and certain others recognised by the Federal Council. For non-adequate countries, Swiss controllers must use the Federal Council's model SCCs (adopted 2023) or BCRs, with mandatory transfer risk assessments post-Schrems II. The FDPIC's 2023 guidance treats the EU-US Data Privacy Framework as adequate for Switzerland automatically."
  },
  {
    q: "Does Switzerland require a Data Protection Officer under the revFADP?",
    a: "The revFADP Article 10 requires designation of a DPO only when controllers or processors conduct 'extensive profiling' or large-scale processing of sensitive data — narrower than the GDPR's criteria. The DPO must have expertise and report to top management, but cannot face dismissal for performing DPO duties. Switzerland's cantons can impose stricter DPO requirements, and several (Zurich, Geneva) have done so for public sector entities."
  },
],
  'norway': [
  {
    q: "How does Norway's Personal Data Act 2018 implement GDPR despite non-EU membership?",
    a: "Norway, as an EEA member, transposed the GDPR via the Personal Data Act 2018:15 (Personopplysningsloven), effective July 2018. The Act mirrors GDPR Articles 1-91 with EEA-specific adaptations such as references to EFTA Surveillance Authority oversight instead of the European Commission. Norway retains a separate healthcare-specific statute (Patient Records Act 2018) for medical data."
  },
  {
    q: "What is the role of Norway's Datatilsynet?",
    a: "The Datatilsynet (Norwegian Data Protection Authority) enforces the Act with powers to impose fines up to €10 million or 2% of global turnover — slightly below the GDPR maximums for certain infringements. Notable actions include a NOK 1.4 million (≈€125,000) fine against a municipality for unlawful CCTV in schools and a 2023 ruling against Grindr requiring it to stop sharing user data with advertising networks without explicit consent."
  },
  {
    q: "What is Norway's stance on cookies and behavioural advertising?",
    a: "The Datatilsynet was an early adopter of strict cookie enforcement, issuing in 2022 an enforcement notice against Grindr for unlawful sharing of precise location data with third-party adtech — the first European action against a dating app. Norway's Marketing Control Act also bans dark patterns, and the Datatilsynet has coordinated with Sweden and the Netherlands on joint adtech investigations since 2023."
  },
  {
    q: "How does Norway approach AI and facial recognition?",
    a: "The Datatilsynet's 2023 AI guidance prohibits real-time facial recognition in public spaces without specific statutory authorisation. Norway has suspended police use of live facial recognition pending legislative framework, and the Datatilsynet fined the Norwegian state railways NSB NOK 500,000 in 2022 for testing facial recognition ticketing without legal basis under Article 9 GDPR."
  },
],
  'russia': [
  {
    q: "What does Russia's Federal Law 152-FZ require for personal data processing?",
    a: "Russia's Federal Law No. 152-FZ 'On Personal Data' (in force since 2006, last amended 2022) requires operators to obtain consent (except in narrow legal-basis cases), designate a 'person responsible for personal data processing' (roughly a DPO), and maintain a register of processing with Roskomnadzor. Russian law treats all data subjects equally — there is no enhanced protection for children beyond general consent requirements."
  },
  {
    q: "What is Russia's data localisation requirement?",
    a: "Article 18(5) of 152-FZ, in force since September 2015, requires that the initial collection and storage of Russian citizens' personal data must occur in databases located physically in Russia. Foreign operators (e.g., LinkedIn, Twitter) have been blocked by Roskomnadzor for non-compliance. LinkedIn was blocked in November 2016 and remains inaccessible, while Meta/Facebook was officially blocked in March 2022 alongside Twitter."
  },
  {
    q: "What enforcement powers does Roskomnadzor have?",
    a: "Roskomnadzor (Federal Service for Supervision of Communications, Information Technology and Mass Media) can impose administrative fines under the Administrative Code Article 13.11 — up to RUB 6 million (≈€60,000 / $65,000) per violation for legal entities, doubled for repeat offences. In December 2021, Roskomnadzor fined Google RUB 7.2 billion (≈€85 million) for repeated failures to delete illegal content, Russia's largest data-related fine to date."
  },
  {
    q: "How does Russia's 2022 'foreign agents' law affect data protection?",
    a: "Following the 2022 amendments to Federal Law 255-FZ and 327-FZ, organisations designated 'foreign agents' (иностранный агент) face additional reporting obligations to the Ministry of Justice, including personal data of founders and donors. Roskomnadzor can require service providers to share user data with security services under SORM-2 surveillance framework. Several VPN providers withdrew from Russia after refusing to comply with data-sharing orders in 2022-2023."
  },
],
  'albania': [
  {
    q: "What is Albania's new Law 124/2024 on personal data protection?",
    a: "Albania's Law No. 124/2024 'On the Protection of Individuals in the Processing of Personal Data' entered into force in October 2024, replacing the 1999 law and aligning Albania with GDPR standards as part of EU accession reforms. It establishes the Information and Data Protection Commissioner (IDP) as the supervisory authority and introduces GDPR-equivalent fines up to ALL 30 million (≈€280,000 / $300,000) or 4% of annual turnover."
  },
  {
    q: "Does Albania require a Data Protection Officer under Law 124/2024?",
    a: "Yes — mirroring GDPR Article 37, Law 124/2024 Article 41 requires DPO appointment for public authorities, large-scale systematic monitoring, and large-scale processing of sensitive data. The DPO must have expert knowledge and report directly to top management. Albania's previous law required a 'Data Protection Officer' only for high-risk sectors; the 2024 law significantly expands this obligation."
  },
  {
    q: "What are Albania's rules on cross-border data transfers?",
    a: "Albania's Law 124/2024 permits transfers to countries with adequacy recognition by the Albanian IDP Commissioner — currently the EU, EEA, and Council of Europe Convention 108+ signatories. For non-adequate countries, controllers must use Albanian-model SCCs (issued 2024) or BCRs, plus transfer impact assessments. Albania is a party to Convention 108+ (modernised 2022), binding it to similar protections."
  },
  {
    q: "How does Albanian law handle data breach notification?",
    a: "Law 124/2024 Article 36 requires controllers to notify the IDP Commissioner within 72 hours of becoming aware of a personal data breach, with affected individuals notified without undue delay if high risk is involved. The previous 1999 law had no breach notification requirement, making this a major new compliance obligation. Failure to notify can trigger administrative fines up to ALL 10 million (≈€95,000)."
  },
],
  'andorra': [
  {
    q: "What is Andorra's Qualified Law 29/2021 on personal data protection?",
    a: "Andorra's Llei Qualificada 29/2021 ('Qualified Law') on Personal Data Protection entered into force in February 2022, replacing the 2003 law and aligning the principality with GDPR standards. It is called 'qualified' because under Andorra's Constitution, certain rights-related laws require a two-thirds parliamentary majority. The Andorran Data Protection Agency (APDA) enforces the law with fines up to EUR 1 million ($1.1 million) or 4% of annual turnover."
  },
  {
    q: "What is the role of the APDA in Andorra?",
    a: "The Andorran Data Protection Agency (Agència de Protecció de Dades d'Andorra, APDA) is the independent supervisory authority under Qualified Law 29/2021. The APDA can investigate, issue warnings, impose fines, and authorise international transfers. Andorra has been recognised as adequate by the EU since 2010 (Commission Decision 2010/625/EC), allowing personal data flows from the EU without additional safeguards."
  },
  {
    q: "What are Andorra's rules on data subject rights?",
    a: "Qualified Law 29/2021 Articles 15-21 grant data subjects access, rectification, erasure, restriction, portability, and objection rights, similar to GDPR Articles 15-21. The law also provides explicit rights regarding automated decision-making (Article 22) including profiling. APDA processed over 300 complaints in 2023, mainly involving banking and telecommunications sectors — significant given Andorra's status as a financial centre."
  },
  {
    q: "Does Andorra require data breach notification?",
    a: "Yes. Qualified Law 29/2021 Article 35 requires controllers to notify the APDA within 72 hours of becoming aware of a personal data breach, with affected individuals notified when high risk exists. The law applies extraterritorially to entities processing Andorran residents' data in Andorra — important for Andorran banks and digital service providers. Failure to notify can result in administrative fines up to EUR 300,000."
  },
],
  'ukraine': [
  {
    q: "What is Ukraine's Law 2297-VI on personal data protection?",
    a: "Ukraine's Law No. 2297-VI 'On Personal Data Protection' (in force since January 2011, last amended 2023) governs personal data processing. The Ukrainian Parliament Commissioner for Human Rights (Ombudsman) supervises enforcement through the Department for Personal Data Protection. Following Ukraine's EU candidate status (2022), the law is being aligned with the GDPR, with a major reform draft submitted to parliament in 2024."
  },
  {
    q: "What are Ukraine's data localisation and cross-border transfer rules?",
    a: "Article 8 of Law 2297-VI requires Ukrainian citizens' personal data transferred abroad to be protected at a level 'not lower' than in Ukraine. Transfers to non-adequate countries require explicit consent or contractual safeguards. Following Russia's 2022 invasion, Ukraine tightened data localisation for state registries, requiring storage on servers physically located in Ukraine with backup copies in EU member states for security reasons."
  },
  {
    q: "How does the Ukrainian Ombudsman enforce data protection during martial law?",
    a: "The Ukrainian Parliament Commissioner for Human Rights (Ombudsman, currently Dmytro Lubinets) enforces Law 2297-VI through inspections, mandatory state registration of data processing (Article 6), and administrative fines under Code of Administrative Offences Article 188-39 — up to UAH 8,500 (≈€190 / $210) for individuals, UAH 17,000 for officials. During martial law (since February 2022), the Ombudsman has issued guidance permitting some derogations for security-related processing."
  },
  {
    q: "How has the war affected Ukrainian data protection law?",
    a: "Following Russia's invasion, Ukraine adopted emergency amendments (2022-2023) allowing broader processing of personal data for national security, military needs, and identifying war crimes. The Diia mobile app became a major platform for citizen-state data exchange, processing ID documents and military registration. The Ombudsman issued guidance in 2023 requiring all war-related processing to maintain proportionality and post-war deletion, balancing security with Article 8 ECHR commitments."
  },
],
  'georgia': [
  {
    q: "What is Georgia's Law on Personal Data Protection 2023?",
    a: "Georgia's Law of Georgia on Personal Data Protection was adopted on 26 July 2023, entering into force 1 March 2024. It replaces the 2011 law and aligns Georgia with GDPR standards. The law establishes the Personal Data Protection Service (PDPS) as an independent authority and introduces GDPR-equivalent fines up to GEL 50,000 (≈€17,000 / $19,000) for first-time violations, doubled for repeat offences."
  },
  {
    q: "Does Georgia's new law require a Data Protection Officer?",
    a: "Yes. The 2023 Law Article 38 requires DPO appointment for public authorities, controllers conducting large-scale regular monitoring, and large-scale sensitive data processing. The DPO must be designated in writing and reported to the PDPS, which maintains a public register. The previous 2011 law required only an 'authorised person' for processing notification — the 2023 law substantially raises compliance expectations."
  },
  {
    q: "What is Georgia's data breach notification regime?",
    a: "Article 41 of the 2023 Law requires controllers to notify the PDPS of personal data breaches within 72 hours where the breach is likely to result in risk to data subjects' rights. Affected individuals must be notified without undue delay where high risk exists. The previous 2011 law had no breach notification requirement, making this one of the most significant compliance changes for Georgian businesses."
  },
  {
    q: "How does Georgia handle cross-border data transfers?",
    a: "The 2023 Law Article 35 permits transfers to countries with adequate protection recognised by the PDPS — currently including EU/EEA states, Council of Europe Convention 108+ signatories, and certain others. Georgia joined Convention 108+ in 2018. For non-adequate countries, controllers must use PDPS-approved standard contractual clauses (issued 2024) or BCRs, with mandatory transfer impact assessments for high-risk transfers."
  },
],
  'azerbaijan': [
  {
    q: "What is Azerbaijan's Law on Personal Data of 2010?",
    a: "Azerbaijan's Law No. 1038-IIIQ 'On Personal Data' was adopted on 10 December 2010 and entered into force in July 2011, making Azerbaijan one of the first South Caucasian countries with dedicated data protection legislation. The Ministry of Digital Development and Transport is the supervisory authority, with the law remaining less aligned with GDPR compared to neighbouring Georgia and Armenia."
  },
  {
    q: "Does Azerbaijan require data localisation?",
    a: "Yes — Article 13.1 of the Law on Personal Data requires that databases containing Azerbaijani citizens' personal data be located on the territory of Azerbaijan. Foreign companies collecting Azerbaijani users' data must use local servers or contract with Azerbaijani hosting providers. The Ministry of Digital Development and Transport enforces this requirement, with administrative fines under the Code of Administrative Offences Article 521.1 reaching AZN 2,000-3,000 (≈€1,100-1,700 / $1,200-1,800) for legal entities."
  },
  {
    q: "What are the data subject rights under Azerbaijan's Personal Data Law?",
    a: "Articles 8-11 grant data subjects access, rectification, erasure, and objection rights, but the framework is narrower than the GDPR — there is no explicit right to portability or restriction. The law defines 'sensitive data' to include race, ethnicity, religion, health, and biometric data (Article 6), requiring written consent for processing. Azerbaijan does not have a separate automated decision-making prohibition in the original 2010 text."
  },
  {
    q: "What is the role of Azerbaijan's Personal Data Office and enforcement record?",
    a: "Azerbaijan's Personal Data Office, established under the Ministry of Digital Development and Transport in 2022, maintains the State Register of Personal Data Processors and conducts inspections. The Office has issued fines against several local banks and mobile operators for unlawful data sharing, but enforcement transparency is limited compared to GDPR-style regulators. Azerbaijan acceded to Council of Europe Convention 108 in 2010 but has not yet ratified the 2018 modernising Protocol (Convention 108+)."
  },
],

  // =========================================================
  // AMERICAS COUNTRY FAQs
  // =========================================================
  'brazil': [
  {
    q: "What are the maximum fines under Brazil's LGPD and who enforces them?",
    a: "Brazil's Lei Geral de Proteção de Dados (LGPD, Law No. 13,709/2018) is enforced by the Autoridade Nacional de Proteção de Dados (ANPD). The maximum administrative fine is 2% of the offending organization's revenue in Brazil, excluding taxes, capped at R$50 million (approximately US$10 million) per infraction. ANPD began issuing sanctioning fines only after August 1, 2021, when the sanctions provisions took effect, and has since levied significant penalties including a R$14.6 million fine against Serasa (reduced on appeal) and a R$16.6 million fine against TIM Brasil in 2023 for failing to respond to data subject requests."
  },
  {
    q: "Does Brazil's LGPD require appointing a Data Protection Officer?",
    a: "Yes. Article 41 of the LGPD requires every controller (natural person or legal entity) to appoint an 'encarregado' (Data Protection Officer), whose identity and contact information must be publicly disclosed. The encarregado is responsible for accepting communications from the ANPD and data subjects, providing further information, guiding employees and contractors, and executing other duties set by the controller. Small-sized processing agents are exempt under ANPD's Resolution No. 7/2021, and the role can be internal or external."
  },
  {
    q: "What makes Brazil's LGPD unique in terms of lawful bases for processing?",
    a: "The LGPD lists ten legal bases for processing personal data in Article 7 — including consent, contract, legal duty, public policy, studies by research entities, exercise of rights, life protection, public safety, and the unusual 'proteção do crédito' (credit protection) basis. This credit-protection basis is largely unique to Brazil and allows credit bureaus and financial institutions to process data for credit assessments without separate consent, reflecting the influence of Serasa/SPC-style credit scoring systems in Brazilian commerce."
  },
  {
    q: "What are Brazil's breach notification requirements under the LGPD?",
    a: "Article 48 of the LGPD requires the controller to communicate a security incident that may create risk or relevant harm to data subjects to both the ANPD and the affected data subject within a 'reasonable time' (prazo razoável). ANPD's Resolution No. 15/2024 later specified a 3-business-day deadline to notify the ANPD (with a possibility of extension) and requires a detailed incident report. Data subjects must be informed of the risks, measures taken, and recommended protective actions."
  },
],
  'canada': [
  {
    q: "How does Canada's fragmented federal-provincial data protection system work?",
    a: "Canada's privacy landscape is divided between the federal PIPEDA (Personal Information Protection and Electronic Documents Act), enforced by the Office of the Privacy Commissioner (OPC), and substantially-similar provincial laws — notably Quebec's Law 25 (formerly Bill 64), Alberta's Personal Information Protection Act (PIPA), and British Columbia's PIPA. PIPEDA applies to commercial activities across Canada except in provinces that have passed 'substantially similar' legislation; organizations subject to Quebec Law 25, Alberta PIPA, or BC PIPA are governed by those laws instead. Each province has its own privacy commissioner — Quebec's Commission d'accès à l'information (CAI), the Office of the Information and Privacy Commissioner of Alberta (OIPC Alberta), and the OIPC for British Columbia."
  },
  {
    q: "What are the maximum penalties under PIPEDA for knowingly breaching the law?",
    a: "Under section 16.1 of PIPEDA (added in 2018 by the Digital Privacy Act), knowing violations — including failing to report a breach involving a 'real risk of significant harm' (RROSH) or failing to maintain records of breaches — can result in fines up to CAD $100,000 per offence, prosecuted by summary conviction. Notably, the OPC itself cannot levy these fines; it must refer matters to the Public Prosecution Service of Canada, which is one reason PIPEDA enforcement has been criticized as weaker than the GDPR model."
  },
  {
    q: "What does Quebec's Law 25 add beyond PIPEDA?",
    a: "Quebec's Law 25 (passed September 22, 2021, with phased implementation through 2024) imposes requirements stricter than PIPEDA, including a mandatory Data Protection Officer designation (effective 2022), mandatory privacy impact assessments for projects involving personal information, mandatory incident notification to the CAI within a 'reasonable time' (with an industry benchmark of 72 hours), and new governance obligations around automated decision-making and de-identification. Maximum fines under Quebec's Act can reach CAD $25 million or 4% of worldwide turnover (whichever is greater) — penalties aligned with GDPR-style deterrence."
  },
  {
    q: "When must a Canadian organization report a data breach under PIPEDA?",
    a: "PIPEDA requires organizations to notify affected individuals and the OPC of any breach of security safeguards involving personal information that poses a 'real risk of significant harm' (RROSH) as soon as feasible after determining the breach poses such a risk, and to keep breach records. The RROSH assessment considers the sensitivity of the data and the probability of harm (e.g., identity theft, financial loss, humiliation). Alberta's PIPA has a similar notification regime, and Quebec's Law 25 additionally requires CAI notification even where harm may not be significant."
  },
],
  'mexico': [
  {
    q: "What is the maximum fine INAI can impose under Mexico's LFPDPPP?",
    a: "Under the Ley Federal de Protección de Datos Personales en Posesión de los Particulares (LFPDPPP, 2010), the Instituto Nacional de Transparencia, Acceso a la Información y Protección de Datos Personales (INAI) can impose fines ranging from 100 to 320,000 days of the general minimum wage in effect in Mexico City. With the minimum wage at roughly MXN $248.93 per day in 2024, this translates to fines of approximately MXN $24,893 to MXN $79.6 million (about US$1,400 to US$4.7 million) per infraction, with the cap doubling for repeat offenders."
  },
  {
    q: "What are the ARCO rights under Mexican data protection law?",
    a: "Mexico's LFPDPPP grants data subjects 'ARCO rights' — Access, Rectification, Cancellation, and Opposition — which controllers must respond to within 20 business days (access) or 30 business days (others) of receiving a request. If the controller denies the request or fails to respond, the data subject can file a 'Rights Protection' (Protección de Datos) complaint with INAI, which is free of charge and can lead to an order to comply plus fines. The 2022-2023 reform proposals (the so-called 'Ley Federal de Protección de Datos Personales en Posesión de los Particulares' overhaul) sought to expand these into a fuller GDPR-style rights catalogue."
  },
  {
    q: "What happened to INAI's funding and operations in 2023-2024?",
    a: "INAI faced a major institutional crisis in 2023 when its budget was cut amid austerity measures, leading to staff reductions and a backlog of transparency and data protection cases. The agency was briefly at risk of shutting down in early 2024 because its governing Plenary lacked quorum due to unfilled commissioner vacancies, threatening the enforcement of both the LFPDPPP (private sector) and the LFTAIPG (public sector). Mexico's Senate eventually appointed new commissioners, but the episode highlighted concerns about Mexico's commitment to independent data protection oversight."
  },
  {
    q: "Does Mexico's LFPDPPP restrict cross-border transfers of personal data?",
    a: "Yes. Article 37 of the LFPDPPP generally prohibits transfers to third parties without the data subject's explicit consent, unless an exception applies (such as transfers to processors under the same controller, transfers required by law, or transfers to providers providing services to the controller). For international transfers specifically, the recipient country must provide an adequate level of data protection — determined based on the country's laws, international treaties, or self-certification schemes — otherwise explicit consent or contractual safeguards are required."
  },
],
  'argentina': [
  {
    q: "Why is Argentina considered a 'GDPR-adequate' country and what does that mean?",
    a: "Argentina was the first Latin American country to receive an EU adequacy finding, granted by European Commission Decision C(2003)1731 of June 30, 2003, on the basis of Law No. 25,326 (2000) and its implementing Decree 1558/2001. This means personal data can flow from the EU/EEA to Argentina without additional safeguards such as Standard Contractual Clauses, making Argentina a common data-processing nearshore destination for European companies. The adequacy finding has been periodically reviewed, and Argentina has been updating its law through the pending Bill on the Protection of Personal Data (announced in 2022) to align more closely with the GDPR and ensure continued adequacy after the CJEU Schrems II ruling."
  },
  {
    q: "What is the 'habeas data' action in Argentina and how does it relate to data protection?",
    a: "Argentina's Constitution (Article 43, second paragraph) enshrines the 'habeas data' action, which allows any individual to file a judicial proceeding to access records containing their personal data held by public or private registries, learn of their use and disclosure, and demand rectification, updating, or destruction of inaccurate or unlawful data. Law 25,326 operationalizes habeas data procedurally (Articles 33-43), giving data subjects a direct judicial remedy that complements the administrative enforcement by the Agencia de Acceso a la Información Pública (AAIP). Habeas data actions are summary and free of charge, and have been used in notable cases against credit bureaus and online directories."
  },
  {
    q: "What fines can the AAIP impose under Argentina's Law 25,326?",
    a: "Under Law 25,326 (as amended) and Decree 1558/2001, the Agencia de Acceso a la Información Pública (AAIP) can impose sanctions including warnings, suspension from the Registry of Databases, fines ranging from ARS 1,001 to ARS 100,000 (adjusted annually by the AAIP's disposition, which has multiplied nominal figures substantially), and total or partial closure of files. In practice, the AAIP has applied fines in cases such as the 2019 sanction against Mercado Libre and cases against credit bureaus, although the static fine cap (not linked to revenue) has been criticized as insufficient deterrent for large companies, prompting reform proposals to introduce turnover-based fines."
  },
  {
    q: "Does Argentina require appointing a Data Protection Officer?",
    a: "Argentina introduced a DPO requirement through AAIP Disposition 9/2018 (effective 2019), which obliges certain entities — particularly those processing sensitive data at scale, public bodies, and those engaged in large-scale credit, financial, or health data processing — to designate a 'Responsable de Tratamiento de Datos Personales' or privacy officer. Unlike the GDPR's universal DPO threshold, Argentina's requirement is targeted: entities must self-assess whether they meet the criteria and register their DPO with the AAIP's National Registry of Personal Data Databases (RNPDP)."
  },
],
  'chile': [
  {
    q: "What changed in Chile's 2024 reform of Law 19,628?",
    a: "Chile's Law No. 21.719, published August 26, 2024, substantially overhauled Law No. 19,628 on the Protection of Private Life, transforming it from one of Latin America's weakest frameworks into a GDPR-aligned regime. The reform creates a new Agencia de Protección de Datos (APD) — an autonomous public agency headed by a National Data Protection Director — and introduces obligations including a Data Protection Officer for large-scale processors, mandatory breach notification to the APD and affected individuals within 72 hours, data protection impact assessments, and a comprehensive data subject rights catalogue (access, rectification, deletion, portability, opposition, and automated decision-making rights)."
  },
  {
    q: "What are the maximum fines under Chile's 2024-reformed data protection law?",
    a: "Under the reformed Law 19,628, the new Agencia de Protección de Datos can impose administrative fines up to 10,000 Unidades Tributarias Mensuales (UTM) — roughly CLP $640 million (about US$680,000) as of 2024 — or up to 4% of the offending entity's annual sales, whichever is higher, for the most serious infractions. This represents a dramatic increase from the pre-2024 regime, where Law 19,628 had no administrative fine authority at all and enforcement was largely limited to indemnification through civil actions under Articles 23 and 24."
  },
  {
    q: "Does Chile's law require a Data Protection Officer and who must appoint one?",
    a: "Yes. The 2024 reform introduced a DPO ('Delegado de Protección de Datos') requirement that applies to public bodies and private entities whose core activities involve large-scale processing of personal data, systematic monitoring of publicly accessible areas, or processing of sensitive data. The DPO's identity and contact details must be communicated to the Agencia de Protección de Datos, and the role mirrors GDPR Article 37-39 features including independence, direct reporting to top management, and the function of advising and monitoring compliance."
  },
  {
    q: "What are Chile's breach notification deadlines under the 2024 reform?",
    a: "Under Article 12 of the reformed Law 19,628, controllers must notify the Agencia de Protección de Datos of any personal data breach that may seriously affect the rights of data subjects within 72 hours of becoming aware of the breach, followed by communication to affected data subjects without undue delay when there is a high risk to their rights and freedoms. Failure to notify can trigger fines of up to 1,000 UTM (roughly US$68,000), and the APD may also publish a public statement regarding the breach."
  },
],
  'colombia': [
  {
    q: "What is the maximum fine Colombia's SIC can impose under Statutory Law 1581 of 2012?",
    a: "Under Statutory Law 1581 of 2012 (Article 23), the Superintendencia de Industria y Comercio (SIC) can impose fines of up to 2,000 current legal monthly minimum wages (SMMLV — Salario Mínimo Legal Mensual Vigente). With the 2024 SMMLV at COP $1,300,000, this means a theoretical maximum fine of COP $2.6 billion (approximately US$650,000) per infraction, with fines being imposed per violation and cumulative across affected data subjects in some cases, allowing the SIC to reach higher aggregate totals in major enforcement actions."
  },
  {
    q: "What are some notable enforcement actions by Colombia's SIC?",
    a: "The SIC has actively enforced Statutory Law 1581, with notable sanctions including fines against Telefónica Móviles Colombia (Claro) for failing to safeguard customer data, sanctions against credit bureaus Datacrédito and CIFIN for unauthorized data processing, and a 2021 COP $62 million fine against Interbolsa. The SIC has also used its authority to suspend processing activities and require deletion of data, as in cases against direct marketing firms that processed data without lawful basis."
  },
  {
    q: "Does Colombia require registering databases with the SIC?",
    a: "Yes. Under Decree 1377 of 2013 (Articles 12-13), all public and private entities acting as data controllers must register their databases with the National Registry of Databases (Registro Nacional de Bases de Datos — RNBD) maintained by the SIC. Registration must be updated annually and includes details such as the controller's identity, the purpose of each database, whether sensitive data is processed, and the mechanisms available for data subjects to exercise their habeas data rights. Failure to register can result in sanctions under Article 23 of Law 1581."
  },
  {
    q: "What are the cross-border data transfer rules under Colombian law?",
    a: "Under Article 26 of Statutory Law 1581 of 2012 and Chapter VII of Decree 1377 of 2013, international transfers of personal data require the data subject's explicit, prior, and informed consent, unless an exception applies (such as transfers to financial or medical authorities for their statutory functions, transfers between related companies for internal purposes, or transfers to countries providing an adequate level of protection). The destination country is presumed adequate if it has a data protection authority comparable to Colombia's, but in practice the SIC evaluates adequacy on a case-by-case basis, and contracts with GDPR-style safeguards are commonly used to bridge the gap."
  },
],
  'peru': [
  {
    q: "What are the maximum fines Peru's ANPDP can impose under Law 29733?",
    a: "Under Law No. 29733 (Personal Data Protection Law, 2011, effective 2013) and its implementing regulation (Supreme Decree 003-2013-JUS), the National Authority for Personal Data Protection (ANPDP — Autoridad Nacional de Protección de Datos Personales), operating within the Ministry of Justice, can impose fines of up to 100 UIT (Unidad Impositiva Tributaria). With the 2024 UIT set at S/ 5,350, the maximum aggregate fine is approximately S/ 535,000 (about US$143,000), divided into three sanctioning tiers (minor, serious, and very serious infractions) ranging from 0.5 to 100 UIT."
  },
  {
    q: "Does Peru require a Data Protection Officer under Law 29733?",
    a: "Peru's framework does not impose a universal DPO requirement like the GDPR; instead, Law 29733 requires controllers to designate a 'persona designada' (designated person) responsible for handling data subject requests and serving as a contact point with the ANPDP. Public-sector entities and large-scale processors are de facto expected to have a designated privacy function, but the law does not prescribe specific qualifications or independence guarantees for this role as the GDPR does for DPOs."
  },
  {
    q: "What are Peru's rules for processing sensitive personal data?",
    a: "Under Article 7 of Law 29733, 'sensitive data' — defined to include biometric, genetic, health, sexual life, ideological/political opinions, union membership, and racial/ethnic data — may only be processed when explicitly authorized by the data subject in writing or when required by law for medical or health purposes by health professionals under professional secrecy. Unlike ordinary personal data, sensitive data cannot be processed based on implied consent, and the ANPDP can impose the highest-tier fines (up to 100 UIT) for unauthorized sensitive data processing."
  },
  {
    q: "How does Peru handle cross-border data transfers?",
    a: "Article 14 of Law 29733 requires that international transfers of personal data be made only to countries that provide an adequate level of protection, with adequacy determined by the ANPDP. In the absence of a formal adequacy list (Peru has not published a comprehensive country list like the EU's), transfers are commonly authorized through the data subject's explicit consent, contractual clauses incorporating Law 29733's principles, or binding corporate rules for intra-group transfers. The ANPDP has issued guidance (e.g., Directiva de Transferencias Internacionales) clarifying acceptable safeguards."
  },
],
  'uruguay': [
  {
    q: "Why is Uruguay considered GDPR-adequate and how does this affect data transfers?",
    a: "Uruguay was declared 'adequate' by the European Commission under Implementing Decision 2012/484/EU of August 21, 2012, making it the first South American country to receive this status on the basis of Law No. 18,331 (2008) and Decree No. 414/009. The adequacy finding, confirmed after a 2018 review, means personal data can flow freely from the EU/EEA to Uruguay without Standard Contractual Clauses or other safeguards — a key advantage for Uruguay's growing IT outsourcing and business process outsourcing sector. The Unidad Reguladora y de Control de Datos Personales (URCDP) is the supervisory authority."
  },
  {
    q: "What fines can Uruguay's URCDP impose under Law 18,331?",
    a: "Under Article 31 of Law 18,331, the Unidad Reguladora y de Control de Datos Personales (URCDP) can impose sanctions including warnings, fines of up to 2,000 Unidades Indexadas (UI) per infraction, suspension of database registration, and closure of files. With the UI indexed for inflation (one UI was approximately UYU 5.07 in early 2024, indexed to the consumer price index), the maximum fine reaches roughly UYU 10,000 (about US$250) — a relatively low amount that has been criticized as insufficient, prompting discussions in Uruguay's Congress (e.g., the pending 2022 reform bill) to introduce turnover-based fines aligned with the GDPR."
  },
  {
    q: "Does Uruguay's data protection law require a Data Protection Officer?",
    a: "Uruguay's Law 18,331 does not impose a universal GDPR-style DPO requirement, but Decree 414/009 requires controllers to designate a representative ('representante') before the URCDP for matters of personal data protection, with the representative's details published in the General Registry of Personal Data Protection maintained by the URCDP. The 2022 reform bill under consideration in Uruguay's General Assembly would strengthen this requirement to align more closely with the GDPR's DPO regime, including qualification, independence, and reporting duties."
  },
  {
    q: "What are Uruguay's rules on data breach notification?",
    a: "Unlike the GDPR's explicit 72-hour regime, Uruguay's Law 18,331 does not contain a specific breach notification provision, though Article 16 generally requires controllers to adopt security measures and notify the URCDP of significant security incidents. The URCDP has issued guidance recommending notification within a 'reasonable time' (with a 72-hour benchmark mirroring the GDPR) and the pending 2022 reform bill would formalize a 72-hour notification window to the URCDP and affected data subjects — a key step toward maintaining EU adequacy after the Schrems II judgment."
  },
],
  'ecuador': [
  {
    q: "When did Ecuador's LOPDP take effect and who enforces it?",
    a: "Ecuador's Ley Orgánica de Protección de Datos Personales (LOPDP) was published in the Official Registry on May 18, 2021, with most substantive obligations phased in over two years — becoming fully enforceable on May 18, 2023. The Superintendencia de Protección de Datos Personales (SPDP) was established as the independent supervisory authority, with the first Superintendent appointed in 2023, marking the first time Ecuador had a dedicated data protection regulator (previously, oversight was split between the Defensoría del Pueblo and the constitutional habeas data action)."
  },
  {
    q: "What are the maximum fines under Ecuador's LOPDP?",
    a: "Under Article 81 of the LOPDP, the Superintendencia de Protección de Datos Personales (SPDP) can impose fines of up to 1,000 unified basic salaries (salarios básicos unificados). With Ecuador's 2024 unified basic salary at US$460, this translates to a maximum fine of approximately US$460,000 per infraction — notably denominated in US dollars since Ecuador dollarized its economy. For repeat or very serious infractions, fines can reach up to 1,500 unified basic salaries (about US$690,000), and additional sanctions can include suspension of processing activities and database deletion orders."
  },
  {
    q: "Does Ecuador's LOPDP require a Data Protection Officer?",
    a: "Yes. Article 16 of the LOPDP requires controllers (and processors, where designated by the controller) to appoint a 'Delegado de Protección de Datos' (DPO) whose functions mirror the GDPR Article 39 role, including advising the controller, monitoring compliance, and serving as contact point with the SPDP and data subjects. The DPO requirement is mandatory for public entities and for private entities whose core activities involve large-scale or systematic processing of personal data (including sensitive data), and the DPO must be registered with the SPDP's public registry."
  },
  {
    q: "What is the constitutional habeas data action in Ecuador and how does it complement the LOPDP?",
    a: "Ecuador's Constitution (Article 20) recognizes the constitutional 'habeas data' action, allowing any individual to access databases containing their personal information, know its source, purpose, and recipients, and demand correction or deletion of inaccurate or unauthorized data. Article 87 of the LOPDP preserves this constitutional remedy as a complementary path to administrative enforcement by the SPDP, allowing data subjects to file a judicial habeas data action within 60 days of the controller's response (or 30 days of silence). Habeas data judgments can order immediate rectification and, in some cases, indemnification."
  },
],
  'panama': [
  {
    q: "Why are Panama's data protection fines denominated in US dollars?",
    a: "Panama's Law No. 81 of 2019 (effective March 2021) sets administrative fines in US dollars — from US$1,000 to US$100,000 per infraction — reflecting Panama's unique economic status as a dollarized economy (the Panamanian balboa is pegged 1:1 to the US dollar and US currency circulates as legal tender). This USD-denomination is distinctive in Latin America, where most data protection fines are tied to local indexed units or minimum wages, and it provides clarity for international businesses operating in Panama's large financial services and free-trade zones (Colón Free Zone, Panama Pacifico)."
  },
  {
    q: "Who enforces Panama's Law 81 of 2019?",
    a: "Law 81 of 2019 initially designated the Autoridad Nacional de Transparencia y Acceso a la Información (ANTAI) as the authority responsible for personal data protection oversight, with the law also contemplating the eventual creation of a dedicated Autoridad de Protección de Datos Personales. ANTAI's responsibilities include maintaining the registry of databases and codes of conduct, handling data subject complaints, and imposing sanctions under Article 53 of Law 81, though in practice enforcement has been limited due to ANTAI's broader transparency mandate and resource constraints."
  },
  {
    q: "Does Panama require a Data Protection Officer under Law 81?",
    a: "Yes. Article 12 of Law 81 of 2019 requires every data controller to designate a 'Encargado de Seguridad' (Security Officer) responsible for the security of personal data and ensuring compliance with the law, with the officer's identity and contact details registered with ANTAI. This role functions as a hybrid DPO/security officer and is mandatory regardless of the size of the controller (unlike the GDPR's risk-based thresholds), although small businesses can apply for simplified compliance under the regulatory decrees (Decreto Ejecutivo No. 285 of 2021)."
  },
  {
    q: "What are Panama's cross-border data transfer rules under Law 81?",
    a: "Article 41 of Law 81 permits international transfers of personal data only to countries that provide an 'adequate' level of protection, with adequacy determined by ANTAI based on the destination country's legislation, international commitments, and sectoral rules. Where the destination country is not deemed adequate, transfers may proceed based on the data subject's explicit consent, contractual clauses incorporating Law 81's principles, or binding corporate rules — mirroring the GDPR's transfer toolkit. Panama's status as a regional financial hub means the regime is particularly relevant for cross-border banking, insurance, and maritime sector transfers."
  },
],
  'jamaica': [
  {
    q: "When did Jamaica's Data Protection Act take effect and who enforces it?",
    a: "Jamaica's Data Protection Act, 2020 entered into force on December 1, 2023 (with phased commencement allowing for transition), making Jamaica one of the most recent Caribbean jurisdictions to implement comprehensive data protection legislation. The Act is enforced by the Information Commissioner, who heads the Office of the Information Commissioner (OIC) — an independent statutory body separate from the existing Access to Information Act regime. The first Information Commissioner was appointed in 2023, and the OIC has issued guidance on registration, breach notification, and codes of practice."
  },
  {
    q: "What are the maximum penalties under Jamaica's Data Protection Act?",
    a: "The Data Protection Act, 2020 imposes significant criminal and administrative penalties: controllers who knowingly or recklessly process personal data without lawful basis, fail to register with the OIC (where required), or breach notification duties can face fines up to JMD $5 million (approximately US$32,000) or imprisonment for up to 5 years (Summary conviction), or fines up to JMD $100 million (about US$640,000) on indictment. For breaches of the duty to notify the OIC and data subjects of a personal data breach within 72 hours (where feasible), penalties include fines up to JMD $1 million or 12 months' imprisonment on summary conviction."
  },
  {
    q: "Does Jamaica require a Data Protection Officer?",
    a: "Yes — Jamaica's regime is unusual in the Caribbean for its relatively broad DPO requirement. Under Section 12 of the Data Protection Act, every data controller must designate a 'Data Protection Officer' (or equivalent) responsible for advising the controller on compliance, monitoring internal data protection practices, and serving as the contact point with the OIC and data subjects. There is no size-based exemption (unlike the GDPR's threshold), though the Act allows a Data Protection Officer to be an existing employee or external contractor, and public sector bodies must designate DPOs separately."
  },
  {
    q: "What is Jamaica's breach notification regime under the Data Protection Act?",
    a: "Section 36 of the Data Protection Act, 2020 requires controllers to notify the Information Commissioner of a personal data breach within 72 hours of becoming aware of it (where the breach is likely to result in a risk to the rights and freedoms of data subjects). Where the breach is likely to result in a high risk to those rights, controllers must also notify affected data subjects without undue delay, communicating the nature of the breach, the likely consequences, and the measures taken or proposed. Failure to notify can trigger fines of up to JMD $1 million or imprisonment for up to 12 months on summary conviction, or up to JMD $5 million / 5 years on indictment."
  },
],

  // =========================================================
  // MIDDLE EAST COUNTRY FAQs
  // =========================================================
  'saudi-arabia': [
  {
    q: "Does Saudi Arabia's PDPL require data localisation?",
    a: "Yes — Saudi Arabia retains one of the strongest data-localisation regimes in the Gulf. Under Article 31 of the amended PDPL (Royal Decree M/148 of 2023) and the CST Cloud Computing Personal Data Protection Regulations, controllers must store the 'primary' or 'master' copy of personal data on a server physically located inside the Kingdom. Backups may be held abroad provided the cross-border transfer rules are followed, and sector-specific layers (SAMA for banking, the Council of Health Insurance for health data) impose additional local-hosting duties."
  },
  {
    q: "What fines can SDAIA impose under the amended Saudi PDPL?",
    a: "The Saudi Data and Artificial Intelligence Authority (SDAIA) may impose administrative fines of up to SAR 5 million (approximately USD 1.33 million) per violation, doubled to SAR 10 million for repeat offences. The PDPL also carries criminal sanctions — unlawful disclosure of sensitive data or transfers abroad in breach of an order can attract up to two years' imprisonment and/or a SAR 3 million fine, aggravated where the controller is a public official. Full administrative enforcement commenced on 14 September 2024 following successive grace-period extensions."
  },
  {
    q: "When must a Data Protection Officer be appointed in Saudi Arabia?",
    a: "Under Article 12 of the amended PDPL and Articles 25–27 of SDAIA's Implementing Regulations (Resolution No. 200 of 2023, effective 14 December 2023), a DPO is mandatory for public bodies, controllers whose core activities involve large-scale processing of sensitive data, controllers carrying out large-scale regular and systematic monitoring, and any high-risk processing designated by SDAIA. The DPO must report to the highest level of management, must not receive instructions on the discharge of duties, and their contact details must be published on the controller's website and registered with SDAIA via the National Data Registry."
  },
  {
    q: "What are the breach notification deadlines under the Saudi PDPL?",
    a: "Article 36 of the PDPL requires controllers to notify SDAIA of any personal data breach that may harm data subjects — or any breach involving sensitive data — within 72 hours of becoming aware of it, with a partial notification allowed within that window followed by a full notification within three additional days. Where the breach is likely to result in high risk to data subjects, the controller must also notify the affected individuals without undue delay. Processors face a stricter 24-hour deadline to notify their controller after becoming aware of a breach."
  },
],
  'uae': [
  {
    q: "How do the UAE's three data protection regimes interact?",
    a: "The UAE operates three parallel regimes: the federal Federal Decree-Law No. 45 of 2021 (in force 2 January 2022) supervised by the UAE Data Office; DIFC Law No. 5 of 2020 (amended by DIFC Law No. 5 of 2023) supervised by the DIFC Commissioner of Data Protection; and the ADGM Data Protection Regulations 2021 (amended by Regulations No. 7 of 2023) supervised by the ADGM Office of Data Protection. The federal law applies to mainland UAE, while the DIFC and ADGM regimes apply only to entities licensed in those financial free zones — companies must determine which regime governs them based on their place of establishment and the location of processing."
  },
  {
    q: "What are the maximum fines under UAE data protection law?",
    a: "At the federal level, the UAE Data Office may impose administrative fines of up to AED 5 million (approximately USD 1.36 million) per violation, rising to AED 10 million (approximately USD 2.72 million) for repeat offences within two years. The DIFC Commissioner can fine up to USD 100,000 per contravention (up to USD 500,000 for serious violations under the 2023 amendments), while the ADGM Office of Data Protection may impose fines up to USD 28 million under its UK-GDPR-aligned 2021 Regulations. Criminal sanctions under Federal Law No. 34 of 2021 (Cybercrime Law) can also add imprisonment of at least six months and/or AED 100,000–500,000 for unlawful disclosure."
  },
  {
    q: "Does the UAE require a Data Protection Officer (DPO)?",
    a: "Article 9 of Federal Decree-Law No. 45 of 2021 and Articles 14–17 of Cabinet Resolution No. 109 of 2021 (the Executive Regulations) require controllers and processors to appoint a DPO where they are public bodies, their core activities involve large-scale sensitive data processing, they carry out large-scale regular and systematic monitoring, or where the UAE Data Office otherwise directs. The DPO must have expert data protection knowledge, report to the highest level of management, be free of conflicts of interest, and have their contact details published and communicated to the UAE Data Office."
  },
  {
    q: "How do cross-border transfers work under UAE Federal Decree-Law 45/2021?",
    a: "Transfers outside the UAE require the recipient country to provide an 'adequate level of protection' as determined and listed by the UAE Data Office (expected to recognise the EU/EEA, UK, Switzerland and jurisdictions with EU adequacy decisions). Where the destination is not adequate, transfers may proceed using SCCs approved by the Office, Binding Corporate Rules, explicit consent of the data subject, or other derogations (contract necessity, vital interests, public interest, legal claims). The DIFC and ADGM operate their own separate adequacy lists and SCCs — the DIFC's 2023 amendments added detailed transfer-impact-assessment guidance mirroring the EDPB's post-Schrems II recommendations."
  },
],
  'israel': [
  {
    q: "Does Israel have an EU adequacy decision and why does it matter?",
    a: "Yes — Israel received an EU adequacy decision in 2011 under Directive 95/46/EC, and the European Commission reaffirmed Israel's adequacy under the GDPR in 2023, recognising the Privacy Protection Authority (PPA) framework as providing essentially equivalent protection. This status — shared with only a small group of jurisdictions worldwide — enables personal data to flow from the EEA to Israel without additional safeguards. The continued adequacy depends in part on Israel's implementation of the 2024 Transfer of Data Abroad Regulations and the 2025 Amendment No. 14 in conformity with EU standards."
  },
  {
    q: "What did Israel's 2024 transfer regulations and 2025 Amendment No. 14 change?",
    a: "The Privacy Protection Regulations (Transfer of Data Abroad) 5784-2024, effective 11 August 2024, replaced the prior court-frozen regime with a GDPR-style framework built on adequacy, appropriate safeguards (Registrar-issued SCCs, BCRs, codes of conduct), and derogations — and require a transfer impact assessment for non-adequate jurisdictions. The Privacy Protection (Amendment No. 14) Law 5785-2025, enacted in July 2025, then introduced GDPR-style administrative fines, formal 72-hour breach notification, six lawful bases, expanded data subject rights (portability, erasure, objection), mandatory DPOs, and abolished the long-standing database registration regime."
  },
  {
    q: "What administrative fines can the Israeli PPA impose after the 2025 amendment?",
    a: "Under Amendment No. 14, the Privacy Protection Authority may impose administrative fines of up to ILS 11 million (approximately USD 3 million) or up to 10% of the controller's annual global turnover for serious violations, whichever is higher. Less serious violations are capped at ILS 5 million (~USD 1.36 million) or 2% of annual turnover. Criminal sanctions also remain significant — up to 5 years' imprisonment (7 years for sensitive data) — and civil torts include statutory damages of up to ILS 50,000 per incident without proof of damage, and punitive damages up to ILS 100,000 for wilful or repeat violations."
  },
  {
    q: "Is database registration still required in Israel?",
    a: "No — the 2025 Amendment No. 14 abolishes the mandatory database registration regime that had existed since the 1996 amendment, replacing it with internal records-of-processing-activities obligations modelled on GDPR Article 30. A narrow exception preserves registration for certain high-risk databases during the transitional period running until 2026, while the Registrar determines which specific databases remain subject to it. Until 2025 Israel was one of the few major jurisdictions still requiring formal database registration, so this reform is one of the most significant operational changes in three decades."
  },
],
  'qatar': [
  {
    q: "Is Qatar's Law 13/2016 the first data protection law in the GCC, and how does the QFC regime differ?",
    a: "Yes — Qatar's Law No. 13 of 2016 on the Protection of the Privacy of Personal Data, in force since 23 May 2017, was the first comprehensive GCC data protection statute and is supervised by the Ministry of Transport and Communications (MOTC, now MCIT). In parallel, the Qatar Financial Centre (QFC) operates its own GDPR-aligned Data Protection Regulations 2020, effective 1 May 2020, supervised by the QFC Authority's Data Protection Office — these apply only to QFC-licensed entities. The QFC regime is materially closer to the GDPR than the mainland Law, including on data portability (expressly recognised under QFC but not the mainland)."
  },
  {
    q: "What fines apply under Qatar's Law 13/2016 and the QFC DPR 2020?",
    a: "Under the mainland Law, the MOTC/MCIT may impose administrative fines of up to QAR 5 million (approximately USD 1.37 million) per violation, doubled to QAR 10 million (approximately USD 2.74 million) for repeat offences within two years. Criminal sanctions under Cybercrime Prevention Law No. 14 of 2014 can add up to 3 years' imprisonment and/or a QAR 1 million (approximately USD 275,000) fine for unauthorised disclosure, aggravated for sensitive data or public-official offenders. Under the QFC DPR 2020, the QFC Authority may impose administrative fines up to USD 1 million per contravention, alongside compliance, disgorgement and processing-suspension orders."
  },
  {
    q: "What is the age of digital consent in Qatar?",
    a: "Under Qatar's Law No. 13 of 2016 and the MOTC guidance, parental consent is required for the provision of information-society services to children below the age of 13 — one of the lowest ages of digital consent in the Gulf region (compare 15 in Kuwait/Oman, 16 in Bahrain, 18 in Saudi Arabia and the UAE mainland). Controllers must make reasonable efforts to verify that consent is genuinely given by a holder of parental responsibility, and the QFC DPR 2020 sets the same age-13 threshold with equivalent verification duties. Processing of sensitive data relating to a child requires explicit consent regardless of age."
  },
  {
    q: "How do cross-border transfers work from mainland Qatar, and is there an adequacy list?",
    a: "Transfers from mainland Qatar are permitted where the recipient country provides an adequate level of protection, where the controller implements appropriate safeguards (SCCs approved by MOTC, BCRs approved by the Ministry, or equivalent arrangements), or where a derogation applies (explicit consent, contract necessity, vital interests, public interest, legal claims). Qatar has not yet published an official adequacy list, but the Ministry has indicated it considers the EU/EEA, UK, Switzerland and GCC states with equivalent laws as adequate — controllers should document their transfer-impact rationale pending formal publication. The QFC maintains its own separate adequacy determinations and SCCs for QFC-licensed entities."
  },
],
  'bahrain': [
  {
    q: "When did Bahrain's PDPL become enforceable and who is the regulator?",
    a: "Bahrain's Personal Data Protection Law (Law No. 30 of 2018) was issued as a Decree-Law on 12 July 2018 but full administrative enforcement did not commence until 1 August 2023, following multiple postponements to allow the supervisory authority to be established. The regulator is the Personal Data Protection Authority (PDPA), formally created by Law No. 56 of 2021 issued on 24 October 2021, which took over supervisory, advisory and enforcement powers previously held by the Personal Data Protection Directorate within the Ministry of Interior. The PDPA became operational in 2023 alongside the start of full enforcement."
  },
  {
    q: "Why is Bahrain's PDPL said to have the broadest criminal penalty regime in the GCC?",
    a: "The PDPL combines administrative fines of up to BHD 50,000 (approximately USD 133,000) for natural persons and BHD 100,000 (approximately USD 266,000) for legal persons per violation (doubled for repeats) with criminal sanctions of up to 1 year's imprisonment and/or a BHD 20,000 fine, rising to 2 years and/or BHD 50,000 where the data is sensitive, the offender is a public official, or material harm results. Where the offence is committed against children or where sensitive data is transferred abroad in breach of an order, the penalty increases to up to 3 years' imprisonment and/or a BHD 50,000 fine — the most extensive criminal exposure among GCC data protection laws."
  },
  {
    q: "Are there stricter breach notification deadlines in Bahrain than the standard 72 hours?",
    a: "Yes — while the PDPA's draft Executive Regulations require controllers to notify the Authority of any personal data breach that may harm data subjects within 72 hours (and data subjects without undue delay if the breach is high-risk), the Central Bank of Bahrain's cyber-resilience regulations impose a far stricter two-hour notification deadline on licensees for any cyber incident affecting customer data. Processors must also notify controllers without undue delay and in any event within 24 hours of becoming aware of a breach. Controllers must maintain a breach register and provide it to the PDPA on request."
  },
  {
    q: "Is a Data Protection Officer mandatory under Bahrain's PDPL?",
    a: "The PDPL itself does not generally mandate a DPO, but the PDPA's draft Executive Regulations (expected during 2024–2025) are set to require appointment where the controller is a public body, where core activities involve large-scale processing of sensitive data, where core activities consist of regular and systematic monitoring of data subjects on a large scale, or where processing is otherwise designated as high-risk by the PDPA. Sector-specific rules issued by the Central Bank of Bahrain already require financial institutions to appoint a dedicated data protection officer reporting to the board."
  },
],
  'kuwait': [
  {
    q: "When does Kuwait's PDPL become enforceable and what is the grace period?",
    a: "Kuwait's Personal Data Protection Law (Law No. 20 of 2020) was issued on 10 May 2020 but, after multiple postponements to allow the supervisory authority to be established and Executive Regulations to be issued, full enforcement commenced on 1 January 2025. A transitional grace period runs until 1 July 2025 for controllers to bring existing processing operations into compliance — the latest enforcement start of any GCC data protection law. The long-awaited Executive Regulations were finally issued in late 2024, providing operational detail on registration, breach notification, cross-border transfers, DPO qualifications and data subject request procedures."
  },
  {
    q: "Does Kuwait impose a data localisation requirement, and how strict is it?",
    a: "Yes — under Article 31 of Law No. 20 of 2020, controllers must store the 'primary copy' of personal data on a server physically located inside Kuwait, with backups permitted abroad provided the cross-border transfer rules are observed. This is one of the strictest localisation requirements in the GCC region and applies to all controllers regardless of sector. Sector-specific layers add further obligations: the Central Bank of Kuwait requires critical banking data on local servers, CITRA requires telecoms operators to retain call data records locally, and government entities must host classified data on Kuwait-based infrastructure."
  },
  {
    q: "What penalties apply under Kuwait's Law No. 20 of 2020?",
    a: "The Personal Data Protection Committee within CITRA may impose administrative fines of up to KWD 100,000 (approximately USD 326,000) per violation, doubled to KWD 200,000 (approximately USD 652,000) for repeat offences within two years. Criminal sanctions run up to 3 years' imprisonment and/or a KWD 50,000 (approximately USD 163,000) fine, aggravated to 5 years' imprisonment and/or KWD 100,000 where the data is sensitive, the offender is a public official, material harm results, or where the offence concerns children or transfers of sensitive data abroad in breach of an order."
  },
  {
    q: "Who is the data protection regulator in Kuwait, and is it independent?",
    a: "The supervisory authority is the Personal Data Protection Committee, established under Article 4 of Law No. 20 of 2020 within the Communication and Information Technology Regulatory Authority (CITRA) — it is not a standalone independent authority. The Committee is composed of representatives from CITRA, the Ministry of Justice, the Ministry of Interior, the Central Bank of Kuwait and other relevant authorities, and is mandated to issue executive regulations, supervisory decisions and enforcement orders. The embedded-in-CITRA structure distinguishes Kuwait from peers such as Bahrain's PDPA or Saudi Arabia's SDAIA, which operate as dedicated authorities."
  },
],
  'oman': [
  {
    q: "How do Oman's PDPL, 2024 Executive Regulations and 2026 amendments fit together?",
    a: "Oman's data protection framework is layered: Royal Decree No. 6/2022 issued the Personal Data Protection Law on 9 February 2022 (in force 9 February 2023); the Executive Regulations issued by the Ministry of Transport, Communications and Information Technology (MTCIT) in 2024 filled in operational detail on registration, breach notification forms, cross-border transfer mechanisms, DPO qualifications and data subject request procedures. The 2026 amendments (by Royal Decree) further refined the supervisory framework — expanding MTCIT's enforcement powers, clarifying the application of the PDPL to artificial intelligence and automated decision-making systems, and strengthening the data-localisation regime for primary copies of personal data."
  },
  {
    q: "What is the range of administrative fines under Oman's PDPL?",
    a: "MTCIT may impose administrative fines ranging from OMR 100 to OMR 1,000,000 (approximately USD 260 to USD 2.6 million) per violation, calibrated by reference to the gravity of the breach, the number of data subjects affected, the controller's turnover and the degree of cooperation. Criminal sanctions run in parallel: up to 2 years' imprisonment and/or an OMR 50,000 (approximately USD 130,000) fine, doubled where the data is sensitive, the offender is a public official, or material harm results, and up to 3 years' imprisonment and/or OMR 100,000 where the offence concerns children or transfers of sensitive data abroad in breach of an order. MTCIT may also publish enforcement notices and order suspension of database operations."
  },
  {
    q: "Does Oman require data localisation, and how was it changed in 2026?",
    a: "Yes — under Article 31 of the PDPL as amended in 2026, controllers must store the 'primary copy' of personal data on a server physically located inside Oman, with backups permitted abroad provided the cross-border transfer rules are observed. The 2026 amendments strengthened the localisation regime by tightening the primary-copy requirement and limiting transitional exceptions previously approved by MTCIT. Sector-specific layers add further duties: the Central Bank of Oman requires critical banking data on local servers, the Telecommunications Regulatory Authority requires telecoms operators to retain call data records locally, and cloud providers to government entities must meet OCERT cloud-security standards including local data residency."
  },
  {
    q: "What is notable about Oman's treatment of AI and automated decision-making?",
    a: "The 2026 amendments to the PDPL specifically clarified the application of the Law to artificial intelligence and automated decision-making systems, complementing the existing right (under the 2022 PDPL) not to be subject to automated decisions producing legal or similarly significant effects, subject to limited exceptions. Controllers deploying AI systems must conduct Data Protection Impact Assessments for high-risk processing, implement data protection by design and by default, and respect the right of data subjects to object. MTCIT is mandated to issue further guidance on AI governance as part of its 2024–2025 work programme, making Oman one of the first GCC jurisdictions to address AI explicitly within its data protection framework."
  },
],

  // =========================================================
  // AFRICA COUNTRY FAQs
  // =========================================================
  'south-africa': [
  {
    q: "What are the maximum penalties under South Africa's POPIA, and how has the Information Regulator enforced them?",
    a: "Section 107 of the Protection of Personal Information Act 4 of 2013 (POPIA) permits administrative fines up to ZAR 10 million, while criminal offences under section 100 carry imprisonment of up to 10 years, a fine, or both. The Information Regulator imposed its first major administrative fine of ZAR 5 million on Dis-Chem Pharmacies in July 2023 for failing to implement adequate safeguards during a data breach affecting roughly 3.6 million records, and it has since issued enforcement notices against Liberty Holdings and the Department of Justice and Constitutional Development."
  },
  {
    q: "Does POPIA require the appointment of a Data Protection Officer?",
    a: "POPIA uses the term 'Information Officer' rather than DPO, building on the Promotion of Access to Information Act (PAIA). Under the 2018 POPIA Regulations, every private body must designate and register an Information Officer (and any deputy) with the Information Regulator, submit an annual compliance report, and serve as the contact point with the regulator. Public bodies rely on their PAIA-designated Information Officers, who must also discharge POPIA obligations and may delegate functions to deputy Information Officers."
  },
  {
    q: "How does POPIA regulate cross-border transfers of personal information?",
    a: "Section 72 of POPIA prohibits the transfer of personal information to a foreign third party unless the recipient is subject to a law, binding corporate rule, or contract that provides an 'adequate' level of protection, or unless one of the limited exceptions applies (consent, contract performance, public interest, or legal claim). The Information Regulator has not yet published an 'adequate countries' list, so most South African exporters rely on contractual safeguards, GDPR adequacy, or data subject consent. Section 72 also extends to juristic persons (companies), reflecting POPIA's broader scope compared to the GDPR."
  },
  {
    q: "What is the breach notification deadline under POPIA?",
    a: "Section 22 of POPIA requires responsible parties to notify the Information Regulator and affected data subjects 'as soon as reasonably possible' after discovering a compromise of personal information where there is a reasonable likelihood of harm. The Regulations require notification using the prescribed form, including the nature of the breach, the Identity/contact details of the responsible party, and steps taken or planned to mitigate. Although POPIA does not specify a fixed 72-hour deadline like the GDPR, the Information Regulator has signalled that undue delay could itself constitute an interference with data subject rights."
  }
],
  'kenya': [
  {
    q: "What was the Oppo Kenya enforcement, and what fines can the ODPC impose?",
    a: "In May 2023, the Office of the Data Protection Commissioner (ODPC) fined Oppo Kenya KES 5 million (approximately USD 35,000) for processing customer personal data without consent and failing to implement adequate security measures — one of the ODPC's most prominent enforcement actions to date. Under section 63 of the Data Protection Act 2019, the ODPC may impose administrative fines of up to KES 5 million, or in the case of undertakings with annual turnover above KES 5 million, up to 1% of annual turnover, whichever is lower."
  },
  {
    q: "Is appointment of a Data Protection Officer mandatory in Kenya?",
    a: "Yes, section 24 of the Data Protection Act 2019 requires every data controller and data processor — irrespective of size — to appoint a Data Protection Officer (DPO) who must be registered with the ODPC. The DPO must have expert knowledge of data protection law and practice, may be a staff member or a contracted service provider, and is statutorily protected from dismissal or penalty for performing their functions. They serve as the contact point with the ODPC and with data subjects exercising their rights."
  },
  {
    q: "What are the data controller registration requirements in Kenya?",
    a: "Section 18 of the Data Protection Act 2019, operationalised by the Data Protection (General) Regulations 2021, requires data controllers and processors above prescribed thresholds to register with the ODPC. Registration is mandatory for entities with annual turnover above KES 5 million or those processing data above defined volume thresholds, with annual renewal. Operating without registration is an offence carrying fines up to KES 5 million or imprisonment up to 10 years, or both."
  },
  {
    q: "How does Kenya regulate international transfers of personal data?",
    a: "Section 50 of the Data Protection Act 2019 permits cross-border transfers only where the recipient is subject to a law, binding scheme, or contract providing comparable safeguards, or where the data subject has consented, or under limited exceptions such as contract performance, public interest, or legal claims. The Data Protection (General) Regulations 2021 require controllers to notify the ODPC of recurring transfers and to conduct a Transfer Impact Assessment before transferring data to countries without recognised adequate protection."
  }
],
  'nigeria': [
  {
    q: "How do penalties under the Nigeria Data Protection Act 2023 differ from the former NDPR 2019?",
    a: "The Nigeria Data Protection Act 2023 (NDPA), signed by President Buhari on 12 June 2023, replaced the Nigeria Data Protection Regulation 2019 (NDPR) and established the Nigeria Data Protection Commission (NDPC) — formerly the Nigeria Data Protection Bureau. Under section 33, the NDPC can impose administrative fines up to the greater of NGN 10 million or 2% of the data controller's annual gross revenue from the preceding financial year, a significant escalation from the NDPR's flat maximum of NGN 10 million or 1% of turnover."
  },
  {
    q: "Is a Data Protection Officer mandatory under the NDPA, and who must appoint one?",
    a: "Section 35 of the NDPA requires data controllers and data processors of 'significant importance' — a threshold to be defined by the NDPC's regulations — to appoint a Data Protection Officer (DPO), who must be registered with the Commission. Smaller organisations are not strictly required to appoint a DPO but must designate a contact person. The DPO must have expert knowledge of data protection, reports to the highest management level, and may not be dismissed or penalised for performing their duties."
  },
  {
    q: "What is the breach notification timeline under the NDPA?",
    a: "Section 40 of the NDPA requires data controllers to notify the NDPC of a personal data breach within 72 hours of becoming aware of it, and to communicate the breach to affected data subjects without undue delay where it is likely to result in harm. The notification must describe the nature of the breach, the likely consequences, and the measures taken or proposed to mitigate. Failure to notify is an offence under section 33(2), attracting the maximum administrative fine."
  },
  {
    q: "Does Nigeria impose data localisation requirements?",
    a: "The NDPA does not impose blanket data localisation but discourages excessive cross-border transfers by requiring that personal data be processed in Nigeria except where the data subject consents, the transfer is necessary for contract performance, or the recipient country offers adequate protection. Sector-specific rules — particularly the Central Bank of Nigeria's consumer protection regulations and the National Information Technology Development Agency (NITDA) guidelines — impose stricter localisation for financial and health data, requiring such data to be stored on servers physically located in Nigeria."
  }
],
  'egypt': [
  {
    q: "What penalties apply under Egypt's Personal Data Protection Law 151/2020?",
    a: "Article 14 of Law 151/2020 criminalises processing personal data without consent, punishable by imprisonment of up to one year and/or a fine of EGP 100,000–1,000,000. Disclosing personal data to unauthorised parties carries imprisonment of up to six months and/or fines of EGP 50,000–500,000, while processing sensitive data (such as health, religion, or political opinions) without consent can attract up to two years' imprisonment and fines of EGP 100,000–1,000,000."
  },
  {
    q: "Who is the supervisory authority for data protection in Egypt?",
    a: "Law 151/2020 establishes the Personal Data Protection Centre (PDPC) — sometimes referred to as the Egyptian Data Protection Centre (EDPC) — a regulatory body within the Egyptian House of Representatives' oversight, governed by a board chaired by the General Director of the National Council for Cybersecurity. The PDPC is responsible for authorising cross-border transfers, maintaining the register of processors, issuing binding decisions, and approving the appointment of the data protection officer required for each controller."
  },
  {
    q: "Does Egypt require the appointment of a Data Protection Officer, and where must they be located?",
    a: "Article 13 of Law 151/2020 requires every data controller to appoint a Data Protection Officer (DPO) registered with the PDPC. Notably, the DPO must be resident in Egypt — a strict local-presence requirement unique among African data protection regimes — and must serve as the contact point with both the regulator and data subjects. The DPO is responsible for ensuring compliance, monitoring internal practice, and providing advice on data protection impact assessments."
  },
  {
    q: "How does Egypt regulate cross-border transfers of personal data?",
    a: "Article 14 prohibits transferring personal data to recipients outside Egypt unless prior written authorisation is obtained from the PDPC, or the transfer falls within specific exceptions (contract performance, public interest, or with the data subject's explicit consent). Unlike the GDPR's adequacy approach, Egypt uses a case-by-case authorisation model — exporters must demonstrate that the recipient jurisdiction provides comparable protection. Transfers to countries with no recognised safeguards require specific PDPC approval, with criminal liability for unauthorised transfers."
  }
],
  'ghana': [
  {
    q: "What are the maximum penalties under Ghana's Data Protection Act 2012?",
    a: "Section 145 of the Data Protection Act 2012 (Act 843) imposes a fine of up to 250 penalty units (approximately GHS 3,000) or imprisonment for up to two years, or both, for processing personal data without registration. More serious offences — such as selling personal data, unauthorised disclosure, or breach of security obligations — carry fines up to 5,000 penalty units (approximately GHS 60,000) or imprisonment of up to 10 years. The Data Protection Commission may also impose administrative penalties under its 2023 compliance directives."
  },
  {
    q: "Is appointment of a Data Protection Officer mandatory in Ghana?",
    a: "Yes, section 28 of the Data Protection Act 2012 requires every data controller and processor — regardless of size or sector — to appoint a personal data protection officer (sometimes called the data protection supervisor), who must be registered with the Data Protection Commission (DPC). The DPO is responsible for ensuring compliance, liaising with the Commission, and serving as the point of contact for data subjects. The DPO can be a staff member or an external consultant, and their contact details must be publicly available."
  },
  {
    q: "What is the registration requirement for data controllers in Ghana?",
    a: "Section 18 of the Data Protection Act 2012 requires all data controllers — public, private, and non-profit — to register with the Data Protection Commission before processing personal data. Registration must be renewed annually and the register is public, with categories including data controller type, purpose of processing, and intended recipients. Operating without registration is an offence under section 145 carrying fines up to GHS 3,000 or imprisonment up to two years."
  },
  {
    q: "Does Ghana restrict cross-border transfers of personal data?",
    a: "Section 98 of the Data Protection Act 2012 prohibits the transfer of personal data outside Ghana unless the recipient country is subject to a law or binding contract that provides an adequate level of protection, or unless one of the exceptions applies (consent, contract performance, public interest, legal claim). The DPC has not yet published an adequacy list, so exporters typically rely on contractual safeguards. The Commission has discretion to prohibit specific transfers where it identifies undue risk to data subjects."
  }
],
  'morocco': [
  {
    q: "What is the status of EU adequacy for Morocco under Law 09-08?",
    a: "Although Morocco's Law 09-08 (enacted in 2009) is partially modelled on the EU's former Directive 95/46/EC and has been recognised by the European Commission as providing an 'adequate' framework in certain EU-Morocco bilateral instruments, Morocco has not received a standalone GDPR adequacy decision under Article 45. Transfers from the EU to Morocco therefore typically rely on Standard Contractual Clauses, Binding Corporate Rules, or derogations under Article 49 GDPR. The Commission Nationale de Contrôle de la Protection des Données à Caractère Personnel (CNDP) continues to advocate for a full adequacy assessment."
  },
  {
    q: "Does Morocco require the appointment of a Data Protection Officer?",
    a: "Article 23 of Law 09-08 requires every data controller — public or private — to appoint a 'correspondant à la protection des données' (internal correspondent / DPO), who must be approved and registered with the CNDP. The DPO must be of Moroccan nationality or hold a residence permit, must have relevant expertise, and serves as the contact point with the CNDP and data subjects. The CNDP can refuse the appointment of a DPO if it considers the candidate lacks the necessary qualifications."
  },
  {
    q: "How does Morocco's CNDP authorisation vs declaration system work?",
    a: "Law 09-08 distinguishes between two compliance regimes: a 'declaration' regime for standard processing (made via the CNDP's online portal before processing begins) and a prior 'authorisation' regime for sensitive processing — including biometric data, genetic data, health data, and certain automated processing for public security. The CNDP issues authorisations following a review that may include consultation with the relevant sectoral regulator, and publishes decisions in the Official Gazette. Processing without the required declaration or authorisation is an offence."
  },
  {
    q: "What are the penalties for violations of Morocco's Law 09-08?",
    a: "Article 51 of Law 09-08 imposes imprisonment of one month to one year and/or a fine of MAD 2,000–200,000 for offences such as processing without declaration or authorisation, unauthorised disclosure of personal data, or unlawful collection. More serious offences — particularly processing sensitive data without consent — attract penalties at the upper end of the scale. The CNDP can also issue formal warnings, suspend processing operations, and refer cases to the public prosecutor."
  }
],
  'tanzania': [
  {
    q: "When did Tanzania's Personal Data Protection Act 2022 come into force, and what penalties apply?",
    a: "The Personal Data Protection Act, 2022 was published in the Government Gazette on 28 April 2023 and most provisions commenced on 1 May 2023, establishing the Personal Data Protection Commission (PDPC). Under section 86, the PDPC may impose administrative fines of up to TZS 5 million or 5% of the data controller's annual turnover for the preceding financial year, whichever is greater. Criminal offences — including unauthorised processing of sensitive data — carry imprisonment of up to seven years or fines up to TZS 5 million, or both."
  },
  {
    q: "Is appointment of a Data Protection Officer mandatory in Tanzania?",
    a: "Yes, section 32 of the Personal Data Protection Act 2022 requires every data controller and data processor — public or private — to appoint a Data Protection Officer (DPO) registered with the PDPC. The DPO must possess expert knowledge of data protection law and practice, may be a staff member or external contractor, and is statutorily protected from dismissal or penalty for performing their duties. They serve as the contact point with the Commission and with data subjects exercising their rights."
  },
  {
    q: "How does Tanzania regulate cross-border transfers of personal data?",
    a: "Section 26 of the Personal Data Protection Act 2022 prohibits the transfer of personal data outside Tanzania unless the recipient country provides an 'adequate' level of protection — assessed by the PDPC — or unless one of the exceptions applies (consent, contract performance, public interest, legal claim, or vital interests of the data subject). Where the destination country is not on the PDPC's adequacy list, the controller must rely on contractual safeguards approved by the PDPC or seek prior authorisation. Transfers to non-adequate countries without authorisation attract the Act's maximum penalties."
  },
  {
    q: "What are the data subject rights under Tanzania's Personal Data Protection Act 2022?",
    a: "Part IV of the Act confers a comprehensive set of data subject rights, including the right to be informed, the right of access, the right to rectification, the right to erasure, the right to object to processing (including for direct marketing), and the right not to be subject to a decision based solely on automated processing. Data subjects may lodge complaints with the PDPC, which has authority to investigate, mediate, and impose administrative penalties. Controllers must respond to access requests within 30 days."
  }
],
  'uganda': [
  {
    q: "What are the maximum penalties under Uganda's Data Protection and Privacy Act 2019?",
    a: "Section 89 of the Data Protection and Privacy Act 2019 (Act 3 of 2019) provides for fines up to UGX 4.8 million (approximately USD 1,300) or 2% of the data controller's annual gross revenue, whichever is greater, for unauthorised processing or breach of security obligations. Certain offences — including unauthorised disclosure of personal data — also carry imprisonment of up to three years or a fine of UGX 4.8 million, or both. The Personal Data Protection Office (PDPO) can also issue compliance notices and suspension orders."
  },
  {
    q: "Does Uganda require the appointment of a Data Protection Officer?",
    a: "Yes, section 12 of the Data Protection and Privacy Act 2019 requires every data controller and data processor to appoint a Data Protection Officer (DPO) registered with the PDPO. The DPO may be a staff member or external contractor, must possess expert knowledge of data protection, and is statutorily protected from dismissal or penalty for performing their duties. They serve as the contact point with the PDPO, data subjects, and other controllers, and must oversee compliance, impact assessments, and breach notifications."
  },
  {
    q: "What is the registration requirement for data controllers in Uganda?",
    a: "Section 8 of the Data Protection and Privacy Act 2019 requires data controllers and processors to register with the Personal Data Protection Office (PDPO) before processing personal data, with renewal periods determined by the PDPO. Registration categories depend on the volume of data and the sector, and registration details are published in a public register maintained by the PDPO. Operating without registration is an offence under section 89, attracting fines of up to UGX 4.8 million or 2% of annual gross revenue, or imprisonment up to three years."
  },
  {
    q: "How does Uganda regulate cross-border transfers of personal data?",
    a: "Section 10 of the Data Protection and Privacy Act 2019 prohibits the transfer of personal data outside Uganda unless the recipient country has adequate data protection laws, the data subject has consented, or one of the exceptions applies (contract performance, public interest, legal claim). The PDPO has not yet published an adequacy list, so most exporters rely on contractual safeguards or data subject consent. Unauthorised transfers attract the same penalties as unauthorised processing — up to 2% of annual turnover or imprisonment up to three years."
  }
],
  'zambia': [
  {
    q: "When did Zambia's Data Protection Act No. 3 of 2021 commence, and what penalties apply?",
    a: "The Data Protection Act No. 3 of 2021 was assented to by President Edgar Lungu on 29 March 2021 and commenced on 1 November 2021, establishing the Data Protection Commission (DPC). Under section 99, criminal offences — including unauthorised processing of sensitive data, breach of security, and unlawful disclosure — carry imprisonment of up to 10 years or a fine of up to ZMW 10 million (approximately USD 380,000), or both. The DPC can also impose administrative fines and issue compliance notices."
  },
  {
    q: "Is appointment of a Data Protection Officer mandatory in Zambia?",
    a: "Yes, section 24 of the Data Protection Act No. 3 of 2021 requires every data controller and data processor — public or private — to appoint a Data Protection Officer (DPO) registered with the DPC. The DPO must have expert knowledge of data protection, may be a staff member or external contractor, and is statutorily protected from dismissal or penalty for performing their duties. They are responsible for compliance monitoring, breach notification, and serving as the contact point with the Commission and data subjects."
  },
  {
    q: "How does Zambia regulate cross-border transfers of personal data?",
    a: "Section 56 of the Data Protection Act No. 3 of 2021 prohibits the transfer of personal data outside Zambia unless the recipient country provides an 'adequate' level of protection as determined by the DPC, or unless one of the exceptions applies (consent, contract performance, public interest, legal claim). Where the destination is not on the DPC's adequacy list, exporters must rely on contractual safeguards approved by the Commission. Unauthorised cross-border transfers constitute a criminal offence under section 99, attracting fines up to ZMW 10 million or imprisonment up to 10 years."
  },
  {
    q: "What is the breach notification deadline under Zambia's Data Protection Act?",
    a: "Section 27 of the Act requires data controllers to notify the DPC of any personal data breach within 72 hours of becoming aware of it, and to communicate the breach to affected data subjects without undue delay where it is likely to result in a risk to their rights and freedoms. The notification must include the nature of the breach, the categories and approximate number of data subjects and records concerned, the likely consequences, and the measures taken or proposed. Failure to notify is an offence under section 99."
  }
],
  'ethiopia': [
  {
    q: "When was Ethiopia's Personal Data Protection Proclamation 1321/2024 adopted, and what is its scope?",
    a: "The Personal Data Protection Proclamation No. 1321/2024 was approved by the House of Peoples' Representatives on 14 May 2024 and published in the Official Gazette, marking Ethiopia's first comprehensive data protection law. The Proclamation applies to all processing of personal data carried out in Ethiopia, and to controllers or processors established outside Ethiopia that process personal data of data subjects located in Ethiopia where the processing relates to offering goods or services or monitoring behaviour. It is modelled on the GDPR, with elements reflecting Ethiopia's continental commitments under the African Union Malabo Convention."
  },
  {
    q: "Who is the supervisory authority for data protection in Ethiopia?",
    a: "The Proclamation designates the Ethiopian Communications Authority (ECA) as the supervisory authority responsible for monitoring and enforcing compliance, supported by a dedicated Personal Data Protection Directorate established within the ECA. The ECA's powers include maintaining the public register of data controllers and processors, issuing binding decisions, imposing administrative fines, approving DPO appointments, and authorising cross-border transfers. The ECA also works in cooperation with the National Intelligence and Security Service and the Information Network Security Administration (INSA) on cybersecurity matters."
  },
  {
    q: "Does Ethiopia require the appointment of a Data Protection Officer?",
    a: "Yes, the Proclamation requires data controllers and processors of 'significant importance' — a threshold to be defined by the ECA's implementing regulations — to appoint a Data Protection Officer (DPO). The DPO must have expert knowledge of data protection law, must report to the highest level of management, and may not be dismissed or penalised for performing their duties. Smaller entities are not strictly required to appoint a DPO but must designate a contact person for the ECA and data subjects."
  },
  {
    q: "How does Ethiopia regulate cross-border transfers of personal data?",
    a: "The Proclamation permits cross-border transfers only where the recipient country provides an 'adequate' level of protection as determined by the ECA, or where one of the exceptions applies (consent, contract performance, public interest, legal claim). Where the destination is not on the ECA's adequacy list, exporters must rely on appropriate safeguards — including Standard Contractual Clauses or Binding Corporate Rules — approved by the ECA. Transfers in the public interest require specific authorisation, and unauthorised transfers attract administrative fines and possible criminal prosecution."
  }
],
  'angola': [
  {
    q: "What penalties apply under Angola's Law 22/11 on Personal Data Protection?",
    a: "Law 22/11 of 17 June 2011 provides for administrative fines of up to AOA 100 million (approximately USD 110,000) for serious violations by data controllers or processors. Criminal offences — including unauthorised disclosure of personal data and unlawful cross-border transfer — also carry imprisonment of up to two years or fines. The Agência de Proteção de Dados (APD) has authority to issue compliance notices, suspend processing operations, and impose administrative penalties proportionate to the severity of the offence and the controller's turnover."
  },
  {
    q: "Does Angola impose data localisation requirements under Law 22/11?",
    a: "Yes, Article 9 of Law 22/11 imposes a strict data localisation requirement — personal data of Angolan residents must be stored on servers physically located in Angola, unless the controller obtains prior authorisation from the APD for cross-border storage. The APD grants authorisation only where the recipient country provides an adequate level of protection or where contractual safeguards are in place. This localisation requirement has been a major compliance challenge for international groups operating in Angola, particularly in the banking and telecoms sectors."
  },
  {
    q: "Does Angola require the appointment of a Data Protection Officer?",
    a: "Article 17 of Law 22/11 requires every data controller — public or private — to designate a person responsible for personal data protection (sometimes called the 'encarregado de proteção de dados' or DPO), who must be registered with the APD and serve as the contact point with the regulator and data subjects. The DPO must have appropriate expertise, may be a staff member or external contractor, and is responsible for ensuring compliance, monitoring internal practice, and overseeing breach notification."
  },
  {
    q: "What is the registration requirement for data controllers in Angola?",
    a: "Article 16 of Law 22/11 requires data controllers to register their processing operations with the APD's National Register of Personal Data Processing before processing begins, unless an exemption applies. Registration covers the controller's identity, the purposes of processing, the categories of data subjects and personal data, the recipients, and the intended cross-border transfers. The register is public and the APD can refuse registration where it identifies that processing would violate the law."
  }
],
  'benin': [
  {
    q: "What is the Benin Digital Code 2017 and how does it regulate data protection?",
    a: "The Digital Code (Act No. 2017-20 of 26 April 2017) consolidates Benin's data protection framework into a single law, replacing the former 2004 data protection regime. The Code is modelled on the GDPR and EU's Convention 108, and covers electronic communications, cybersecurity, e-commerce, and personal data protection. It established the Agence de Protection des Données Personnelles (APDP) as the supervisory authority, with broad powers to authorise processing, conduct investigations, and impose administrative penalties."
  },
  {
    q: "What are the penalties under Benin's Digital Code 2017?",
    a: "The Digital Code imposes administrative fines of up to XOF 100 million (approximately USD 165,000) for serious violations by data controllers or processors. Criminal offences — including unauthorised processing, unlawful disclosure, and breach of security — also carry imprisonment of one to five years and fines of XOF 1–10 million. The APDP can issue compliance notices, suspend processing operations, and impose both administrative and disciplinary sanctions on the controller's representatives."
  },
  {
    q: "Does Benin require the appointment of a Data Protection Officer?",
    a: "Yes, the Digital Code requires every data controller — public or private — to appoint a Data Protection Officer (DPO), known in French as the 'correspondant à la protection des données', who must be registered with the APDP. The DPO must have appropriate expertise, may be a staff member or external contractor, and serves as the contact point with the APDP and data subjects. They are responsible for ensuring compliance, monitoring internal practice, conducting impact assessments, and overseeing breach notification."
  },
  {
    q: "How does Benin regulate cross-border transfers of personal data?",
    a: "The Digital Code permits cross-border transfers only where the recipient country provides an 'adequate' level of protection as determined by the APDP, or where one of the exceptions applies (consent, contract performance, public interest, legal claim). Where the destination is not on the APDP's adequacy list, exporters must rely on contractual safeguards approved by the APDP — typically Standard Contractual Clauses based on EU models. Transfers in the public interest require specific authorisation, and unauthorised transfers attract both administrative fines and criminal penalties."
  }
],
  'burkina-faso': [
  {
    q: "What is Burkina Faso's Law 001-2021/AN and how does it update the previous 2004 framework?",
    a: "Law 001-2021/AN on the Protection of Personal Data was adopted on 26 January 2021 and published in the Official Gazette on 1 March 2021, replacing the 2004 Law 010-2004/AN. The 2021 law modernises Burkina Faso's regime by aligning with the GDPR, expanding data subject rights, introducing breach notification obligations, and strengthening the powers of the Commission de l'Informatique et des Libertés (CIL). It also incorporates the African Union's Malabo Convention principles and updates rules on cross-border transfers, automated decision-making, and direct marketing."
  },
  {
    q: "What are the penalties under Burkina Faso's Law 001-2021/AN?",
    a: "Article 156 of Law 001-2021/AN provides for administrative fines of up to XOF 100 million (approximately USD 165,000) for serious violations, with criminal penalties including imprisonment of one to five years and fines of XOF 1–10 million for offences such as unauthorised processing, unlawful disclosure, and breach of security. The CIL can also issue compliance notices, suspend processing operations, and impose both administrative and disciplinary sanctions on the controller's representatives."
  },
  {
    q: "Does Burkina Faso require the appointment of a Data Protection Officer?",
    a: "Article 49 of Law 001-2021/AN requires every data controller — public or private — to appoint a Data Protection Officer (DPO), referred to as the 'correspondant à la protection des données personnelles', who must be registered with the CIL. The DPO must have appropriate expertise, may be a staff member or external contractor, and serves as the contact point with the CIL and data subjects. They are responsible for ensuring compliance, monitoring internal practice, conducting impact assessments, and overseeing breach notification."
  },
  {
    q: "What is the role of Burkina Faso's CIL?",
    a: "The Commission de l'Informatique et des Libertés (CIL), restructured under the 2021 law, is the supervisory authority responsible for monitoring compliance, authorising processing operations (particularly for sensitive data), maintaining the public register of controllers, and imposing administrative fines. The CIL also has investigative powers, can issue compliance notices, and may refer criminal cases to the public prosecutor. It works with sectoral regulators — including the Telecommunications and Postal Regulator (ARCEP) — and represents Burkina Faso in regional data protection cooperation."
  }
],
  'cameroon': [
  {
    q: "What is Cameroon's Law 2024/017 and when was it enacted?",
    a: "Law No. 2024/017 of 26 December 2024 on the Protection of Personal Data was enacted in December 2024, replacing the 2010 framework (Law 2010/012). The 2024 law modernises Cameroon's regime by aligning with the GDPR and the African Union Malabo Convention, expanding data subject rights, introducing mandatory breach notification, and establishing the National Commission for the Protection of Personal Data (CNILP) as the supervisory authority. Implementation regulations are being developed throughout 2025."
  },
  {
    q: "What are the penalties under Cameroon's Law 2024/017?",
    a: "Law 2024/017 provides for administrative fines imposed by the CNILP of up to XAF 100 million (approximately USD 165,000) for serious violations, and criminal penalties including imprisonment of one to five years and fines of XAF 1–10 million for offences such as unauthorised processing, unlawful disclosure of personal data, and breach of security obligations. The CNILP can also issue compliance notices, suspend processing operations, and refer cases to the public prosecutor."
  },
  {
    q: "Does Cameroon require the appointment of a Data Protection Officer?",
    a: "Law 2024/017 requires every data controller — public or private — to appoint a Data Protection Officer (DPO), referred to in French as the 'délégué à la protection des données', who must be registered with the CNILP. The DPO must have appropriate expertise, may be a staff member or external contractor, and serves as the contact point with the Commission and data subjects. They are responsible for ensuring compliance, monitoring internal practice, conducting impact assessments, and overseeing breach notification."
  },
  {
    q: "How does Cameroon regulate cross-border transfers of personal data under Law 2024/017?",
    a: "Law 2024/017 permits cross-border transfers only where the recipient country provides an 'adequate' level of protection as determined by the CNILP, or where one of the exceptions applies (consent, contract performance, public interest, legal claim). Where the destination is not on the CNILP's adequacy list, exporters must rely on contractual safeguards — typically Standard Contractual Clauses based on EU models — approved by the Commission. Transfers in the public interest require specific authorisation, and unauthorised transfers attract both administrative fines and criminal penalties."
  }
],
  'senegal': [
  {
    q: "What are the penalties under Senegal's Law 2008-12 on Data Protection?",
    a: "Law 2008-12 of 25 January 2008 imposes criminal penalties — including imprisonment of one month to five years and fines of XOF 100,000–10 million (approximately USD 165–16,500) — for offences such as unauthorised processing, unlawful disclosure of personal data, and breach of security obligations. The Commission des Données Personnelles (CDP) can also issue compliance notices, suspend processing operations, and impose administrative fines. The law was supplemented in 2016 by Decree 2016-973 which established the CDP as a fully functioning independent authority."
  },
  {
    q: "Does Senegal require the appointment of a Data Protection Officer?",
    a: "Article 28 of Law 2008-12 requires every data controller — public or private — to appoint a 'correspondant à la protection des données' (DPO), who must be registered with the CDP. The DPO must have appropriate expertise, may be a staff member or external contractor, and serves as the contact point with the Commission and data subjects. They are responsible for ensuring compliance, monitoring internal practice, conducting impact assessments, and overseeing breach notification."
  },
  {
    q: "How does Senegal regulate cross-border transfers of personal data?",
    a: "Article 50 of Law 2008-12 permits cross-border transfers of personal data only where the recipient country provides an 'adequate' level of protection as determined by the CDP, or where one of the exceptions applies (consent, contract performance, public interest, legal claim). Where the destination is not on the CDP's adequacy list, exporters must rely on contractual safeguards approved by the Commission. Transfers in the public interest require specific authorisation, and unauthorised transfers attract both administrative fines and criminal penalties."
  },
  {
    q: "What is the role of Senegal's CDP?",
    a: "The Commission des Données Personnelles (CDP), established by Decree 2016-973 of 30 November 2016, is the supervisory authority responsible for monitoring compliance, authorising processing operations (particularly for sensitive data), maintaining the public register of controllers, and imposing administrative fines. The CDP has investigative powers, can issue compliance notices, and may refer criminal cases to the public prosecutor. It also represents Senegal in regional cooperation through the Network of African Data Protection Authorities (RAIPDC)."
  }
],
  'cote-divoire': [
  {
    q: "What is Côte d'Ivoire's Law 2013-450 and which regulator supervises it?",
    a: "Law 2013-450 of 19 December 2013 on the Protection of Personal Data is the principal data protection statute, modelled on the EU's Directive 95/46/EC and the OECD Privacy Guidelines. The supervisory authority is the Personal Data Protection Authority — operating within the broader Telecommunications and ICT Regulatory Authority (ARTCI) — through a dedicated Personal Data Protection Committee (Comité d'Experts pour la Protection des Données, CE-PD). The CE-PD has authority to authorise processing, conduct investigations, and impose administrative penalties."
  },
  {
    q: "What are the penalties under Côte d'Ivoire's Law 2013-450?",
    a: "Law 2013-450 imposes administrative fines of up to XOF 100 million (approximately USD 165,000) for serious violations, alongside criminal penalties including imprisonment of one to five years and fines of XOF 1–10 million for offences such as unauthorised processing, unlawful disclosure, and breach of security obligations. The ARTCI/CE-PD can also issue compliance notices, suspend processing operations, and refer cases to the public prosecutor."
  },
  {
    q: "Does Côte d'Ivoire require the appointment of a Data Protection Officer?",
    a: "Article 31 of Law 2013-450 requires every data controller — public or private — to appoint a 'correspondant à la protection des données' (DPO), who must be registered with the CE-PD. The DPO must have appropriate expertise, may be a staff member or external contractor, and serves as the contact point with the Authority and data subjects. They are responsible for ensuring compliance, monitoring internal practice, conducting impact assessments, and overseeing breach notification."
  },
  {
    q: "How does Côte d'Ivoire regulate cross-border transfers of personal data?",
    a: "Article 78 of Law 2013-450 permits cross-border transfers only where the recipient country provides an 'adequate' level of protection as determined by the CE-PD, or where one of the exceptions applies (consent, contract performance, public interest, legal claim). Where the destination is not on the CE-PD's adequacy list, exporters must rely on contractual safeguards approved by the Authority — typically Standard Contractual Clauses based on EU models. Transfers in the public interest require specific authorisation, and unauthorised transfers attract both administrative fines and criminal penalties."
  }
],
  'tunisia': [
  {
    q: "What changes did Tunisia's 2024 reform introduce to the 2004 data protection framework?",
    a: "Organic Act 2024-54 of 23 September 2024 substantially amended the original Organic Act 2004-63 of 27 July 2004 on the Protection of Personal Data, aligning Tunisian law more closely with the GDPR. The 2024 reform expanded data subject rights (including the right to portability and to object to automated decision-making), introduced mandatory breach notification within 72 hours, strengthened the powers of the Instance Nationale de Protection des Données Personnelles (INPDP), and added specific rules on cross-border transfers, sensitive data, and children's data."
  },
  {
    q: "What are the penalties under Tunisia's data protection law?",
    a: "The reformed Organic Act imposes administrative fines of up to TND 1 million (approximately USD 320,000) for serious violations, alongside criminal penalties including imprisonment of one to five years and fines of TND 1,000–50,000 for offences such as unauthorised processing, unlawful disclosure, and breach of security. The INPDP can also issue compliance notices, suspend processing operations, and impose both administrative and disciplinary sanctions on the controller's representatives."
  },
  {
    q: "Does Tunisia require the appointment of a Data Protection Officer?",
    a: "Yes, the reformed Organic Act requires every data controller — public or private — to appoint a 'délégué à la protection des données' (DPO), who must be registered with the INPDP. The DPO must have appropriate expertise, may be a staff member or external contractor, and serves as the contact point with the Authority and data subjects. They are responsible for ensuring compliance, monitoring internal practice, conducting impact assessments, and overseeing breach notification."
  },
  {
    q: "How does Tunisia regulate cross-border transfers of personal data?",
    a: "The reformed Organic Act permits cross-border transfers only where the recipient country provides an 'adequate' level of protection as determined by the INPDP, or where one of the exceptions applies (consent, contract performance, public interest, legal claim). Where the destination is not on the INPDP's adequacy list, exporters must rely on contractual safeguards approved by the Authority — typically Standard Contractual Clauses based on EU models. Transfers in the public interest require specific authorisation, and unauthorised transfers attract both administrative fines and criminal penalties."
  }
],
  'botswana': [
  {
    q: "What is Botswana's Data Protection Act 2024 and how does it differ from the previous 2018 law?",
    a: "The Data Protection Act 2024 was assented to by President Mokgweetsi Masisi in February 2024, replacing the Data Protection Act 2018 (which had not yet entered into force). The 2024 Act modernises Botswana's framework by aligning with the GDPR, the African Union Malabo Convention, and the SADC Model Law on Data Protection. It establishes the Information and Data Protection Commission (IDPC) as the supervisory authority with broader enforcement powers and introduces mandatory breach notification, expanded data subject rights, and explicit rules on cross-border transfers."
  },
  {
    q: "What are the penalties under Botswana's Data Protection Act 2024?",
    a: "The 2024 Act imposes administrative fines of up to BWP 1 million (approximately USD 75,000) for serious violations, alongside criminal penalties including imprisonment of up to five years or fines of up to BWP 1 million for offences such as unauthorised processing, unlawful disclosure, and breach of security. The IDPC can also issue compliance notices, suspend processing operations, and impose both administrative and disciplinary sanctions on the controller's representatives."
  },
  {
    q: "Does Botswana require the appointment of a Data Protection Officer?",
    a: "Yes, the 2024 Act requires every data controller — public or private — to appoint a Data Protection Officer (DPO), who must be registered with the IDPC. The DPO must have expert knowledge of data protection law and practice, may be a staff member or external contractor, and is statutorily protected from dismissal or penalty for performing their duties. They serve as the contact point with the Commission and with data subjects exercising their rights."
  },
  {
    q: "How does Botswana regulate cross-border transfers of personal data?",
    a: "The 2024 Act permits cross-border transfers only where the recipient country provides an 'adequate' level of protection as determined by the IDPC, or where one of the exceptions applies (consent, contract performance, public interest, legal claim). Where the destination is not on the IDPC's adequacy list, exporters must rely on contractual safeguards approved by the Commission. Transfers in the public interest require specific authorisation, and unauthorised transfers attract both administrative fines and criminal penalties."
  }
],
  'zimbabwe': [
  {
    q: "What is Zimbabwe's Cyber and Data Protection Act 2021, and how does it combine cyber and data protection?",
    a: "The Cyber and Data Protection Act 2021 (Act 12 of 2021) was assented to by President Mnangagwa on 1 December 2021 and commenced in 2022, combining cybersecurity regulation and data protection in a single statute. The Act designates the Postal and Telecommunications Regulatory Authority of Zimbabwe (POTRAZ) as the data protection authority, with responsibility for monitoring compliance, authorising processing, and imposing administrative penalties. It is modelled on the GDPR and the African Union Malabo Convention, and includes provisions on cybercrime, electronic communications, and digital evidence."
  },
  {
    q: "What are the penalties under Zimbabwe's Cyber and Data Protection Act 2021?",
    a: "Section 19 of the Act imposes administrative fines of up to USD 5,000 (Zimbabwe uses multi-currency regime) or imprisonment of up to 10 years, or both, for offences such as unauthorised processing of personal data, unlawful disclosure, and breach of security. The Act also criminalises specific cyber-related offences — including unauthorised access, data interference, and computer-related fraud — with maximum sentences of 10–35 years' imprisonment. POTRAZ can also issue compliance notices, suspend processing, and impose additional administrative penalties."
  },
  {
    q: "Does Zimbabwe require the appointment of a Data Protection Officer?",
    a: "Yes, section 12 of the Act requires every data controller — public or private — to appoint a Data Protection Officer (DPO), who must be registered with POTRAZ. The DPO must have expert knowledge of data protection, may be a staff member or external contractor, and is statutorily protected from dismissal or penalty for performing their duties. They serve as the contact point with POTRAZ, data subjects, and other controllers, and must oversee compliance, impact assessments, and breach notifications."
  },
  {
    q: "How does Zimbabwe regulate cross-border transfers of personal data?",
    a: "Section 16 of the Act permits cross-border transfers only where the recipient country provides an 'adequate' level of protection as determined by POTRAZ, or where one of the exceptions applies (consent, contract performance, public interest, legal claim). Where the destination is not on the POTRAZ adequacy list, exporters must rely on contractual safeguards approved by the Authority. Unauthorised cross-border transfers constitute a criminal offence under section 19, attracting fines or imprisonment up to 10 years."
  }
],
  'seychelles': [
  {
    q: "What is Seychelles' Data Protection Act 2023 and when did it commence?",
    a: "The Data Protection Act 2023 was enacted on 28 July 2023, replacing the earlier Data Protection Act 2003 and aligning Seychelles' regime with the GDPR and the African Union Malabo Convention. The Act modernises the framework by expanding data subject rights (including rights of access, rectification, erasure, portability, and objection to automated decision-making), introducing mandatory breach notification, and strengthening the powers of the Information Commissioner as the supervisory authority. Implementation commenced in phases throughout 2024."
  },
  {
    q: "What are the penalties under Seychelles' Data Protection Act 2023?",
    a: "The 2023 Act imposes administrative fines of up to SCR 1 million (approximately USD 75,000) for serious violations by data controllers or processors. Criminal offences — including unauthorised processing, unlawful disclosure, and breach of security — also carry imprisonment of up to five years and fines of up to SCR 500,000. The Information Commissioner can issue compliance notices, suspend processing operations, and impose both administrative and disciplinary sanctions on the controller's representatives."
  },
  {
    q: "Does Seychelles require the appointment of a Data Protection Officer?",
    a: "Yes, the 2023 Act requires every data controller — public or private — to appoint a Data Protection Officer (DPO), who must be registered with the Information Commissioner. The DPO must have expert knowledge of data protection law and practice, may be a staff member or external contractor, and is statutorily protected from dismissal or penalty for performing their duties. They serve as the contact point with the Commissioner and with data subjects exercising their rights."
  },
  {
    q: "How does Seychelles regulate cross-border transfers of personal data?",
    a: "The 2023 Act permits cross-border transfers only where the recipient country provides an 'adequate' level of protection as determined by the Information Commissioner, or where one of the exceptions applies (consent, contract performance, public interest, legal claim). Where the destination is not on the Commissioner's adequacy list, exporters must rely on contractual safeguards approved by the Authority. Transfers in the public interest require specific authorisation, and unauthorised transfers attract both administrative fines and criminal penalties."
  }
],
  'mauritius': [
  {
    q: "Does Mauritius have EU adequacy, and what is the legal basis for it?",
    a: "Yes — the European Commission adopted an adequacy decision for Mauritius on 12 December 2018 under Article 45 of the GDPR, recognising the Data Protection Act 2017 (Act 25 of 2017) as providing an essentially equivalent level of personal data protection to the EU. The adequacy decision permits personal data transfers from the EU/EEA to Mauritius without additional contractual safeguards. Mauritius is one of only a few African jurisdictions with full GDPR adequacy, alongside the United Kingdom, and is reviewed periodically by the European Commission."
  },
  {
    q: "What are the penalties under Mauritius' Data Protection Act 2017?",
    a: "Section 45 of the Data Protection Act 2017 provides for administrative fines of up to MUR 1 million (approximately USD 22,000) for serious violations by data controllers or processors. Criminal offences — including unauthorised processing, unlawful disclosure, and breach of security — also carry imprisonment of up to five years. The Data Protection Commissioner (DPC) can also issue compliance notices, suspend processing operations, and impose both administrative and disciplinary sanctions on the controller's representatives."
  },
  {
    q: "Does Mauritius require the appointment of a Data Protection Officer?",
    a: "Yes, section 22 of the Data Protection Act 2017 requires every data controller — public or private — to appoint a Data Protection Officer (DPO), who must be registered with the Data Protection Office (DPO). The DPO must have expert knowledge of data protection law and practice, may be a staff member or external contractor, and is statutorily protected from dismissal or penalty for performing their duties. They serve as the contact point with the DPC and with data subjects exercising their rights."
  },
  {
    q: "How does Mauritius regulate cross-border transfers of personal data?",
    a: "Section 41 of the Data Protection Act 2017 permits cross-border transfers only where the recipient country provides an 'adequate' level of protection as determined by the DPC, or where one of the exceptions applies (consent, contract performance, public interest, legal claim). The DPC maintains an adequacy list, and Mauritius itself benefits from EU adequacy — which simplifies transfers in both directions. Where the destination is not adequate, exporters must rely on contractual safeguards approved by the Commissioner."
  }
],

  // =========================================================
  // OCEANIA COUNTRY FAQs
  // =========================================================
  'australia': [
  {
    q: "What are the 13 Australian Privacy Principles (APPs) and which entities must comply with them?",
    a: "The 13 Australian Privacy Principles (APPs), set out in Schedule 1 of the Privacy Act 1988 (Cth), commenced on 12 March 2014 and replaced the earlier National Privacy Principles and Information Privacy Principles. The APPs govern the collection, use, disclosure, storage, and cross-border transfer of personal information by APP entities — including most private sector organisations with annual turnover above AUD 3 million, all Commonwealth government agencies, and certain smaller entities (e.g., health service providers, traders in personal information). The Office of the Australian Information Commissioner (OAIC) enforces the APPs."
  },
  {
    q: "What is the Notifiable Data Breaches (NDB) scheme in Australia?",
    a: "The NDB scheme under Part IIIC of the Privacy Act 1988 commenced on 22 February 2018 and requires APP entities to notify the OAIC and affected individuals of 'eligible data breaches' — those likely to result in serious harm to individuals whose personal information is involved. Entities must notify as soon as practicable after becoming aware of an eligible breach, normally within 30 days of forming a suspicion. Failure to notify is an 'interference with privacy' attracting civil penalties of up to AUD 50 million per breach for serious or repeated interferences."
  },
  {
    q: "What changes did the Privacy and Other Legislation Amendment Act 2024 introduce?",
    a: "The Privacy and Other Legislation Amendment Act 2024 (passed in November 2024) introduces a statutory tort for serious invasions of privacy — commencing no later than 10 June 2026 — allowing individuals to sue for actionable invasions such as misuse or unauthorised disclosure of private information. The 2024 reforms also strengthened the OAIC's powers to investigate and enforce, introduced a Children's Online Privacy Code (binding on social media and other online services targeting children), created new criminal offences for malicious doxxing, and restricted foreign disclosure of personal information deemed contrary to public interest."
  },
  {
    q: "What are the maximum civil penalties for serious or repeated privacy breaches in Australia?",
    a: "Following the Privacy Legislation Amendment (Enforcement and Other Measures) Act 2022 (commenced 17 December 2022), the maximum civil penalty for serious or repeated interferences with privacy is the greater of AUD 50 million, 30% of the entity's adjusted turnover during the breach period, or three times the benefit obtained from the conduct. Prior to these amendments, the maximum was AUD 2.22 million. The OAIC has used these expanded powers in actions against Optus (2022 data breach) and Medibank (2022 data breach), although the latter matter was also the subject of separate regulatory action."
  }
],
  'new-zealand': [
  {
    q: "What are the 13 Information Privacy Principles (IPPs) under New Zealand's Privacy Act 2020?",
    a: "The Privacy Act 2020 (which commenced 1 December 2020, replacing the Privacy Act 1993) sets out 13 Information Privacy Principles (IPPs) governing the collection, use, disclosure, storage, and cross-border transfer of personal information. IPPs 1–4 govern collection, IPPs 5–8 govern storage and access, IPPs 9–10 govern use, IPPs 11–12 govern disclosure (including cross-border disclosure), and IPP 13 governs unique identifiers. The Office of the Privacy Commissioner (OPC) enforces the IPPs and may issue compliance notices binding on agencies."
  },
  {
    q: "How does New Zealand's IPP 12 regulate cross-border disclosures?",
    a: "IPP 12 — unique to the Privacy Act 2020 — requires that, before an agency discloses personal information to a person or entity in another country, it must take 'reasonable steps' to ensure the recipient is subject to comparable privacy protections, or obtain the individual's authorisation, or otherwise satisfy one of the limited exceptions. This replaced the previous regime where the disclosing agency was deemed to hold the information and remained liable. IPP 12 is particularly significant for cloud service arrangements and offshore business process outsourcing."
  },
  {
    q: "What is New Zealand's mandatory breach notification scheme?",
    a: "Part 6 of the Privacy Act 2020 introduced a mandatory breach notification scheme — requiring agencies to notify the OPC and affected individuals of any privacy breach that has caused or is likely to cause 'serious harm' as soon as practicable after becoming aware of the breach. Failure to notify a notifiable privacy breach is an infringement offence carrying a fine of up to NZD 10,000 for individuals. The OPC has published detailed guidance on assessing 'serious harm' and the notification threshold, with particular focus on breaches involving sensitive data such as health, financial, and biometric information."
  },
  {
    q: "Does New Zealand require agencies to appoint a Privacy Officer?",
    a: "Yes — section 203 of the Privacy Act 2020 requires every 'agency' (a broad term covering public and private sector organisations) to have at least one Privacy Officer responsible for ensuring the agency's compliance with the Act. The Privacy Officer handles data subject access requests, manages breach notifications, liaises with the OPC, and develops internal privacy policies. Unlike the GDPR's DPO role, the New Zealand Privacy Officer need not be independent of the agency's operational structure, but they must be identifiable and contactable."
  }
],
  'papua-new-guinea': [
  {
    q: "Does Papua New Guinea currently have a dedicated data protection law?",
    a: "No — Papua New Guinea does not yet have a dedicated data protection statute. The Data Protection Bill, drafted with assistance from international partners, has been in development since 2018 and is expected to be tabled in Parliament in 2025, though no firm date has been announced. In the absence of a specific law, privacy protection relies on Section 49 of the National Constitution (right to privacy of person and property), common law, the Cybercrime Code Act 2016, and sector-specific rules such as those issued by the Bank of Papua New Guinea and the National Information and Communications Technology Authority (NICTA)."
  },
  {
    q: "What is the expected approach of PNG's draft Data Protection Bill?",
    a: "Based on the consultation drafts circulated in 2022 and 2023, the Data Protection Bill is expected to follow a GDPR-influenced model with provisions on lawful processing, consent, data subject rights (access, rectification, erasure, objection), mandatory breach notification, and cross-border transfer safeguards. The Bill is expected to establish a supervisory authority — likely within NICTA or as a standalone body — and to provide for administrative fines. Implementation is likely to involve a phased commencement period to allow public and private sector entities time to build compliance capacity."
  },
  {
    q: "What privacy protections currently apply in Papua New Guinea pending enactment of the Bill?",
    a: "Pending the Data Protection Bill's enactment, privacy protections in PNG are fragmented. Section 49 of the National Constitution guarantees the right to privacy of person, home, and property. The Cybercrime Code Act 2016 criminalises unauthorised access, data interference, and certain forms of misuse of personal information. Sector-specific rules — including NICTA's consumer protection regulations and the Bank of PNG's prudential guidelines on customer information — impose data security obligations on telecommunications providers and financial institutions. Common law actions for breach of confidence also remain available."
  },
  {
    q: "How should organisations operating in PNG prepare for the anticipated Data Protection Act?",
    a: "Organisations operating in PNG should anticipate a GDPR-influenced regime and begin building compliance capacity — including data mapping, privacy policies, consent mechanisms, breach response procedures, and appointment of a designated privacy contact. Particular attention should be paid to sectoral rules already in force (telecoms, banking, health) and to the Cybercrime Code Act 2016's criminal penalties for unauthorised data access. Engaging with NICTA and monitoring the Department of Information and Communications Technology's consultations on the Bill is advisable, as the final framework may include phased timelines for compliance."
  }
],

};

// =========================================================
// DYNAMIC FALLBACK GENERATOR (For any uncovered countries)
// =========================================================
const generateDefaultFaqsForCountry = (countryId: string): CountryFAQ[] => {
  const country = countries.find(c => c.id === countryId);
  if (!country) return [];

  const dpoTopic = country.topics.find(t => t.title === 'DPO Requirements');
  const localisationTopic = country.topics.find(t => t.title === 'Data Localisation');
  const breachTopic = country.topics.find(t => t.title === 'Breach Notification');

  return [
    {
      q: `What is the primary data protection law in ${country.name}?`,
      a: `${country.name} is governed by the ${country.lawName}. The law is enforced by the ${country.authority}. According to our analysis, the country has a ${country.level} level of data protection framework.`
    },
    {
      q: `Does ${country.name} require a Data Protection Officer (DPO)?`,
      a: dpoTopic?.status === 'Addressed'
        ? `Yes, under the ${country.lawName}, organizations are generally required to appoint a Data Protection Officer (DPO) or a similar privacy officer to ensure compliance.`
        : dpoTopic?.status === 'Partial'
        ? `Partially. The ${country.lawName} may require a DPO only for specific high-risk organizations or sectors. It is not universally mandatory for all businesses.`
        : `No, the ${country.lawName} does not explicitly mandate the appointment of a Data Protection Officer (DPO) for most organizations.`
    },
    {
      q: `What are the data localisation rules in ${country.name}?`,
      a: localisationTopic?.status === 'Addressed'
        ? `Yes, ${country.name} has strict data localisation requirements. The ${country.lawName} may require certain types of personal data to be stored within the country's borders.`
        : localisationTopic?.status === 'Partial'
        ? `Partially. While ${country.lawName} may not mandate general localisation, specific sectoral laws (like finance or health) might require data to be stored locally.`
        : `No, ${country.name} does not generally require data localisation under the ${country.lawName}. Cross-border transfers are typically allowed with certain safeguards.`
    },
    {
      q: `What are the breach notification requirements in ${country.name}?`,
      a: breachTopic?.status === 'Addressed'
        ? `Under the ${country.lawName}, organizations must notify the ${country.authority} and affected individuals without undue delay in the event of a personal data breach.`
        : breachTopic?.status === 'Partial'
        ? `The ${country.lawName} has limited breach notification requirements. It may only require notifying the regulator, without mandating notification to affected individuals.`
        : `Currently, the ${country.lawName} does not impose strict mandatory breach notification requirements for all data breaches.`
    }
  ];
};

// =========================================================
// MAIN EXPORT FUNCTION
// =========================================================
export const getCountryFaqs = (countryId: string): CountryFAQ[] => {
  // 1. Check if custom FAQs exist
  if (specialCountryFaqs[countryId]) {
    return specialCountryFaqs[countryId];
  }

  // 2. Fall back to dynamic generation
  return generateDefaultFaqsForCountry(countryId);
};

// =========================================================
// INDIA DPDPA-SPECIFIC FAQs (Bonus Section)
// =========================================================
export const DPDPA_FAQS = [
  {
    q: "What is the Digital Personal Data Protection Act, 2023?",
    a: "The Digital Personal Data Protection Act, 2023 (DPDP Act) is India's law on the processing of digital personal data. It balances the rights of individuals (Data Principals) with the need to process personal data for lawful purposes, and is enforced by the Data Protection Board of India.",
  },
  {
    q: "Who is a Data Principal?",
    a: "A Data Principal is the individual to whom the personal data relates. For a child or a person with a disability, this includes the parent or lawful guardian. Data Principals have rights to access information, correction and erasure, grievance redressal and nomination.",
  },
  {
    q: "Who is a Data Fiduciary?",
    a: "A Data Fiduciary is any person who, alone or together with others, determines the purpose and means of processing personal data. Data Fiduciaries must give notice, obtain valid consent or rely on a legitimate use, keep data accurate, apply reasonable security safeguards and report breaches.",
  },
  {
    q: "What are the penalties for non-compliance?",
    a: "Penalties are set in the Schedule to the Act: up to ₹250 crore for failing to take reasonable security safeguards against a personal data breach; up to ₹200 crore for failing to notify a breach or for breaching children's data obligations; up to ₹150 crore for breaching the additional obligations of Significant Data Fiduciaries; up to ₹50 crore for other breaches; and up to ₹10,000 for breach of a Data Principal's duties.",
  },
  {
    q: "What is a Significant Data Fiduciary?",
    a: "A Significant Data Fiduciary (SDF) is a Data Fiduciary or class of Data Fiduciaries notified by the Central Government under Section 10, based on factors such as the volume and sensitivity of personal data processed, risk to Data Principals, and risks to the sovereignty and integrity of India, electoral democracy, security of the State or public order. SDFs must appoint a Data Protection Officer based in India, an independent data auditor, and carry out periodic Data Protection Impact Assessments.",
  },
  {
    q: "What is a Data Protection Impact Assessment (DPIA)?",
    a: "A DPIA is a structured process to identify and reduce risks to Data Principals from a processing activity. Under the DPDP Act, periodic DPIAs are a mandatory obligation for Significant Data Fiduciaries. Other organisations may carry them out as good practice.",
  },
  {
    q: "What are the rights of Data Principals?",
    a: "The Act gives four rights: access to information about personal data being processed (Section 11), correction, completion, updating and erasure (Section 12), grievance redressal (Section 13), and nomination of another person to exercise rights in case of death or incapacity (Section 14). Consent can also be withdrawn at any time under Section 6(4). The Act does not provide a right to data portability.",
  },
  {
    q: "How long can personal data be retained?",
    a: "A Data Fiduciary must erase personal data once the Data Principal withdraws consent or the specified purpose is no longer being served, unless retention is required by law. The Rules also set minimum retention periods for certain logs and records.",
  },
];
