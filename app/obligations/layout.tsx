import type { Metadata } from "next";

import { SITE_URL } from "@/lib/constants";
import { OBLIGATIONS_FAQS } from "@/data/page-faqs";
import { ORG_ID, authorId, DPDP_ACT_SCHEMA } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Obligations of Data Fiduciaries under DPDP Act 2023 | Complete Guide",
  description:
    "The 8 core obligations of Data Fiduciaries under DPDP Act 2023: notice, consent, security, breach reporting, grievances and SDF duties, plus a checklist.",
  keywords: [
    "Data Fiduciary obligations",
    "DPDP Act 2023 obligations",
    "DPDPA compliance",
    "notice and consent DPDP",
    "data minimisation",
    "breach notification India",
    "grievance redressal DPDP",
    "Significant Data Fiduciary",
    "DPO appointment India",
    "DPDP compliance checklist",
  ],
  authors: [{ name: "Shilpi Kulshrestha" }],
  alternates: { canonical: "/obligations" },
  openGraph: {
    type: "article",
    title: "Obligations of Data Fiduciaries under DPDP Act 2023 | Complete Guide",
    description:
      "8 core obligations every Data Fiduciary must comply with under the DPDP Act 2023. Includes SDF obligations, compliance checklist, and real-world examples.",
    url: `${SITE_URL}/obligations`,
    siteName: "Legal Galaxy",
    locale: "en_IN",
    images: [
      {
        url: "/images/og-image.png",
        width: 1200,
        height: 630,
        alt: "Data Fiduciary Obligations — DPDP Act 2023",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Obligations of Data Fiduciaries under DPDP Act 2023",
    description:
      "8 core obligations + SDF obligations + compliance checklist under India's DPDP Act 2023.",
    images: ["/images/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

// ===== FAQ Schema (built from data/page-faqs.ts, identical to the text on the page) =====
const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: OBLIGATIONS_FAQS.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

// ===== Breadcrumb Schema =====
const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
    { "@type": "ListItem", position: 2, name: "Galaxy", item: `${SITE_URL}/galaxy` },
    { "@type": "ListItem", position: 3, name: "Obligations of Data Fiduciaries", item: `${SITE_URL}/obligations` },
  ],
};

// ===== Article Schema =====
const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  about: DPDP_ACT_SCHEMA,
  headline: "Obligations of Data Fiduciaries under the DPDP Act 2023 — Complete Guide",
  description:
    "The 8 core obligations of Data Fiduciaries under DPDP Act 2023: notice, consent, security, breach reporting, grievances and SDF duties, plus a checklist.",
  author: {
    "@type": "Person",
    "@id": authorId("shilpi-kulshrestha"),
    name: "Shilpi Kulshrestha",
    jobTitle: "Founder & Corporate Law Expert, BusinezExcellence",
  },
  publisher: {
    "@type": "Organization",
    "@id": ORG_ID,
    name: "Legal Galaxy",
    logo: {
      "@type": "ImageObject",
      url: `${SITE_URL}/images/logo.png`,
    },
  },
  datePublished: "2026-01-15",
  dateModified: new Date().toISOString().split("T")[0],
  inLanguage: "en-IN",
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": `${SITE_URL}/obligations`,
  },
};

export default function ObligationsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      {children}
    </>
  );
}
