import type { Metadata } from "next";

import { SITE_URL } from "@/lib/constants";
import { CROSS_BORDER_FAQS } from "@/data/page-faqs";
import { ORG_ID, authorId, DPDP_ACT_SCHEMA } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Cross-Border Data Transfer under DPDP Act 2023 | Section 16 Guide",
  description:
    "Cross-border data transfers under DPDP Act 2023: Section 16's blacklist power, sector rules, GDPR comparison and what businesses must do.",
  keywords: [
    "DPDP cross-border transfer",
    "Section 16 DPDP",
    "cross-border data transfer India",
    "DPDP international transfer",
    "data transfer restrictions DPDP",
    "DPDP vs GDPR transfer",
    "adequacy DPDP",
    "SCCs India",
    "data localisation DPDP",
    "DPDPA international data flow",
  ],
  authors: [{ name: "Shilpi Kulshrestha" }],
  alternates: { canonical: "/cross-border" },
  openGraph: {
    type: "article",
    title: "Cross-Border Data Transfer under DPDP Act 2023 | Section 16 Guide",
    description:
      "Complete guide to Section 16 of the DPDP Act 2023 — government blacklist power, GDPR comparison, real-world scenarios, and compliance requirements.",
    url: `${SITE_URL}/cross-border`,
    siteName: "Legal Galaxy",
    locale: "en_IN",
    images: [
      {
        url: "/images/og-image.png",
        width: 1200,
        height: 630,
        alt: "Cross-Border Data Transfer — DPDP Act 2023",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Cross-Border Data Transfer under DPDP Act 2023",
    description:
      "Section 16 explained — government blacklist power, GDPR comparison, and compliance requirements.",
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
  mainEntity: CROSS_BORDER_FAQS.map((f) => ({
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
    { "@type": "ListItem", position: 3, name: "Cross-Border Transfer", item: `${SITE_URL}/cross-border` },
  ],
};

// ===== Article Schema =====
const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  about: DPDP_ACT_SCHEMA,
  headline: "Cross-Border Data Transfer under the DPDP Act 2023 — Section 16 Guide",
  description:
    "Cross-border data transfers under DPDP Act 2023: Section 16's blacklist power, sector rules, GDPR comparison and what businesses must do.",
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
    "@id": `${SITE_URL}/cross-border`,
  },
};

export default function CrossBorderLayout({
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
