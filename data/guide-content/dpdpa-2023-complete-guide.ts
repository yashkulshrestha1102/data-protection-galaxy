// data/guide-content/dpdpa-2023-complete-guide.ts
// Extras for the flagship guide. Its main text lives in data/guides.ts and is
// unchanged; the FAQs below mirror the guide's own FAQ section word for word so
// they can be used for FAQPage structured data.
import type { GuideContent } from "./types";
import { SRC } from "./sources";

export const dpdpaCompleteGuideExtras: Pick<GuideContent, "metaDescription" | "sources" | "faqs" | "relatedLinks"> = {
  metaDescription:
    "Complete guide to India's DPDP Act 2023 and DPDP Rules 2025: consent, rights, duties, children, SDFs, breaches, transfers, penalties and timelines.",
  sources: [
    SRC.dpdpAct,
    SRC.dpdpRules,
    {
      title: "Explanatory Note to the Digital Personal Data Protection Rules, 2025",
      publisher: "Ministry of Electronics and Information Technology (MeitY), Government of India",
      url: "https://www.meity.gov.in/explanatory-note-digital-personal-data-protection-rules-2025",
    },
    SRC.dpdpRulesPib,
  ],
  faqs: [
    {
      q: "Is the DPDPA only applicable to Indian companies?",
      a: "No. Applicability depends on the statutory scope and the nature of processing, including certain processing outside India connected with offering goods or services to Data Principals in India.",
    },
    {
      q: "Is consent required for every processing activity?",
      a: "No. The Act provides for consent as well as specified legitimate uses. The applicable ground should be identified for each processing activity based on the facts and statutory requirements.",
    },
    {
      q: "Does having a privacy policy mean an organisation is DPDP compliant?",
      a: "No. A privacy policy is only one component of a broader compliance programme. Organisations also need appropriate governance, security, rights handling, vendor controls, data lifecycle management and operational evidence.",
    },
    {
      q: "Does DPDP prohibit cross-border data transfers?",
      a: "The Act does not establish a blanket prohibition on international transfers. Organisations must monitor the applicable framework and any restrictions notified by the Central Government.",
    },
    {
      q: "Is every organisation a Significant Data Fiduciary?",
      a: "No. Significant Data Fiduciary status is a specific statutory classification and depends on the criteria and notification framework under the Act.",
    },
    {
      q: "Can DPDP compliance be automated?",
      a: "Technology can significantly improve compliance operations by automating data discovery, consent records, rights requests, retention workflows, vendor tracking, risk assessments and evidence collection. However, automation does not replace legal interpretation, governance or accountability.",
    },
  ],
  relatedLinks: [
    { title: "Key provisions of the DPDP Act", href: "/provisions", description: "Chapter-wise overview of the Act." },
    { title: "Obligations of Data Fiduciaries", href: "/obligations", description: "Every duty in one place." },
    { title: "Penalties under the DPDPA", href: "/penalties", description: "The Schedule of penalties, up to ₹250 crore." },
    { title: "GDPR vs DPDPA", href: "/resources/guides/gdpr-vs-dpdpa", description: "How India's law differs from the EU's." },
  ],
};
