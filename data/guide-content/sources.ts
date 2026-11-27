// data/guide-content/sources.ts
// Primary sources cited across the guides (official texts first).
import type { GuideSource } from "./types";

export const SRC = {
  dpdpAct: {
    title: "Digital Personal Data Protection Act, 2023 (Act No. 22 of 2023)",
    publisher: "Ministry of Electronics and Information Technology (MeitY), Government of India",
    url: "https://www.meity.gov.in/writereaddata/files/Digital%20Personal%20Data%20Protection%20Act%202023.pdf",
  },
  dpdpRules: {
    title: "Digital Personal Data Protection Rules, 2025",
    publisher: "Ministry of Electronics and Information Technology (MeitY), Government of India",
    url: "https://www.meity.gov.in/documents/act-and-policies/digital-personal-data-protection-rules-2025-gDOxUjMtQWa?pageTitle=Digital-Personal-Data-Protection-Rules-2025",
  },
  dpdpRulesPib: {
    title: "DPDP Rules, 2025 notified — explainer on the phased compliance framework",
    publisher: "Press Information Bureau (PIB), Government of India",
    url: "https://static.pib.gov.in/WriteReadData/specificdocs/documents/2025/nov/doc20251117695301.pdf",
  },
  gdpr: {
    title: "Regulation (EU) 2016/679 — General Data Protection Regulation (official text)",
    publisher: "EUR-Lex, Publications Office of the European Union",
    url: "https://eur-lex.europa.eu/eli/reg/2016/679/oj",
  },
  euAdequacy: {
    title: "Adequacy decisions — countries recognised as providing adequate protection",
    publisher: "European Commission",
    url: "https://commission.europa.eu/law/law-topic/data-protection/international-dimension-data-protection/adequacy-decisions_en",
  },
  euScc: {
    title: "Commission Implementing Decision (EU) 2021/914 on Standard Contractual Clauses",
    publisher: "EUR-Lex, Publications Office of the European Union",
    url: "https://eur-lex.europa.eu/eli/dec_impl/2021/914/oj",
  },
  edpbScope: {
    title: "Guidelines 3/2018 on the territorial scope of the GDPR (Article 3)",
    publisher: "European Data Protection Board (EDPB)",
    url: "https://www.edpb.europa.eu/documents/guideline/guidelines-32018-on-the-territorial-scope-of-the-gdpr-article-3-version-adopted_en",
  },
  edpbDpia: {
    title: "Guidelines on Data Protection Impact Assessment (WP248 rev.01) — listed among the EDPB-endorsed WP29 guidelines",
    publisher: "European Data Protection Board (EDPB)",
    url: "https://www.edpb.europa.eu/endorsed-wp29-guidelines_en",
  },
  edpbDpo: {
    title: "Guidelines on Data Protection Officers (WP243 rev.01) — listed among the EDPB-endorsed WP29 guidelines",
    publisher: "European Data Protection Board (EDPB)",
    url: "https://www.edpb.europa.eu/endorsed-wp29-guidelines_en",
  },
  ccpaStatute: {
    title: "California Consumer Privacy Act of 2018, as amended by the CPRA (Civil Code §1798.100 et seq.)",
    publisher: "California Legislative Information",
    url: "https://leginfo.legislature.ca.gov/faces/codes_displayText.xhtml?division=3.&part=4.&lawCode=CIV&title=1.81.5",
  },
  cppaCpi: {
    title: "Updated monetary thresholds in the CCPA (CPI adjustment, effective 1 January 2025)",
    publisher: "California Privacy Protection Agency (CPPA)",
    url: "https://www.cppa.ca.gov/regulations/cpi_adjustment.html",
  },
  cppaRegs2025: {
    title: "California finalizes regulations on cybersecurity audits, risk assessments and ADMT (23 Sept 2025)",
    publisher: "California Privacy Protection Agency (CPPA)",
    url: "https://www.cppa.ca.gov/announcements/2025/20250923.html",
  },
  cppaRegs: {
    title: "CCPA regulations and updates",
    publisher: "California Privacy Protection Agency (CPPA)",
    url: "https://cppa.ca.gov/regulations/ccpa_updates.html",
  },
  caAgCcpa: {
    title: "California Consumer Privacy Act (CCPA) — overview for businesses and consumers",
    publisher: "Office of the Attorney General, State of California",
    url: "https://oag.ca.gov/privacy/ccpa",
  },
  rbiLocalisation: {
    title: "Storage of Payment System Data — FAQs (Circular DPSS.CO.OD No.2785/06.08.005/2017-18 dated 6 April 2018)",
    publisher: "Reserve Bank of India",
    url: "https://rbi.org.in/Scripts/FAQView.aspx?Id=130",
  },
  icoDpia: {
    title: "Data protection impact assessments — guidance",
    publisher: "Information Commissioner's Office (UK)",
    url: "https://ico.org.uk/for-organisations/uk-gdpr-guidance-and-resources/accountability-and-governance/data-protection-impact-assessments-dpias/",
  },
} satisfies Record<string, GuideSource>;
