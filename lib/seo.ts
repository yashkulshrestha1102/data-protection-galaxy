// lib/seo.ts
// Shared SEO / schema helpers so every page points at the same entities.
import { SITE_URL } from "@/lib/constants";

/** Stable ids that link Organization, WebSite and Person across all pages. */
export const ORG_ID = `${SITE_URL}/#organization`;
export const WEBSITE_ID = `${SITE_URL}/#website`;
export const authorId = (slug: string) => `${SITE_URL}/authors/${slug}#person`;

/** Square PNG logo (Google needs at least 112x112). */
export const LOGO_URL = `${SITE_URL}/images/logo.png`;

/** Reference to the site's Organization entity (use as publisher / provider). */
export const ORG_REF = { "@id": ORG_ID } as const;

/** Official sources for the DPDP Act and Rules. */
export const OFFICIAL_SOURCES = {
  act: {
    label: "Digital Personal Data Protection Act, 2023 (official text, MeitY)",
    url: "https://www.meity.gov.in/writereaddata/files/Digital%20Personal%20Data%20Protection%20Act%202023.pdf",
  },
  rules: {
    label: "Digital Personal Data Protection Rules, 2025 (MeitY)",
    url: "https://www.meity.gov.in/documents/act-and-policies/digital-personal-data-protection-rules-2025-gDOxUjMtQWa?pageTitle=Digital-Personal-Data-Protection-Rules-2025",
  },
} as const;

/** schema.org Legislation node for the Act — used as `about` on DPDP topic pages. */
export const DPDP_ACT_SCHEMA = {
  "@type": "Legislation",
  "@id": `${SITE_URL}/#dpdp-act-2023`,
  name: "Digital Personal Data Protection Act, 2023",
  alternateName: ["DPDP Act 2023", "DPDPA"],
  legislationIdentifier: "Act No. 22 of 2023",
  legislationJurisdiction: { "@type": "Country", name: "India" },
  legislationType: "Act",
  datePassed: "2023-08-11",
  url: OFFICIAL_SOURCES.act.url,
} as const;

/** Date the DPDP topic pages were last reviewed (update when content is re-checked). */
export const TOPIC_LAST_REVIEWED = "November 2026";
export const TOPIC_LAST_REVIEWED_ISO = "2026-11-27";
