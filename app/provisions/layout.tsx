import type { Metadata } from "next";

import { SITE_URL } from "@/lib/constants";
import { PROVISIONS_FAQS } from "@/data/page-faqs";
import { ORG_ID, authorId, DPDP_ACT_SCHEMA } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Key Provisions of DPDP Act 2023 | Chapter-Wise Overview",
  description:
    "Chapter-wise overview of the DPDP Act 2023: all 9 chapters and 44 sections, key definitions, rights, obligations, the Board and penalties.",
  keywords: [
    "DPDP Act chapters",
    "DPDP Act sections",
    "DPDP Act 2023 structure",
    "DPDP Act key provisions",
    "DPDP Act overview",
    "Digital Personal Data Protection Act summary",
    "DPDP Act definitions",
    "DPDP Act Chapter 1 2 3 4 5 6",
    "DPDPA provisions",
    "DPDP Act explained",
  ],
  authors: [{ name: "Shilpi Kulshrestha" }],
  alternates: { canonical: "/provisions" },
  openGraph: {
    type: "article",
    title: "Key Provisions of DPDP Act 2023 | Chapter-Wise Overview",
    description:
      "Complete chapter-wise overview of India's DPDP Act 2023 — all 9 chapters, key sections, definitions, rights, obligations, and penalties.",
    url: `${SITE_URL}/provisions`,
    siteName: "Legal Galaxy",
    locale: "en_IN",
    images: [
      {
        url: "/images/og-image.png",
        width: 1200,
        height: 630,
        alt: "Key Provisions of DPDP Act 2023",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Key Provisions of DPDP Act 2023 | Chapter-Wise Overview",
    description:
      "All 9 chapters of India's DPDP Act 2023 explained — definitions, rights, obligations, penalties, and cross-border transfers.",
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
  mainEntity: PROVISIONS_FAQS.map((f) => ({
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
    { "@type": "ListItem", position: 3, name: "Key Provisions", item: `${SITE_URL}/provisions` },
  ],
};

// ===== Article Schema =====
const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  about: DPDP_ACT_SCHEMA,
  headline: "Key Provisions of the DPDP Act 2023 — Chapter-Wise Overview",
  description:
    "Complete chapter-wise overview of India's DPDP Act 2023 — all 9 chapters, key sections, definitions, rights, obligations, and penalties.",
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
    "@id": `${SITE_URL}/provisions`,
  },
};

export default function ProvisionsLayout({
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
