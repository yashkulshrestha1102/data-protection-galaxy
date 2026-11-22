import type { Metadata } from "next";

import { SITE_URL } from "@/lib/constants";
import { LAWFUL_FAQS } from "@/data/page-faqs";

export const metadata: Metadata = {
  title: "Lawful Processing of Data under DPDP Act 2023 | Consent & Legitimate Uses",
  description:
    "Learn the two lawful bases for processing personal data under India's DPDP Act 2023 — consent (Section 6) and legitimate uses (Section 7). Includes consent manager, notice requirements, and real-world examples.",
  keywords: [
    "lawful processing DPDP",
    "DPDP consent",
    "DPDP Section 7",
    "legitimate uses DPDP",
    "consent manager DPDP",
    "DPDP notice requirements",
    "data processing India",
    "DPDPA lawful basis",
    "consent withdrawal DPDP",
    "DPDP Act processing",
  ],
  authors: [{ name: "Shilpi Kulshrestha" }],
  alternates: { canonical: "/lawful-processing" },
  openGraph: {
    type: "article",
    title: "Lawful Processing of Data under DPDP Act 2023",
    description:
      "The two lawful bases for processing under DPDP — consent and legitimate uses. Includes Section 7 deep dive, consent manager, and real-world examples.",
    url: `${SITE_URL}/lawful-processing`,
    siteName: "Legal Galaxy",
    locale: "en_IN",
    images: [
      {
        url: "/images/og-image.png",
        width: 1200,
        height: 630,
        alt: "Lawful Processing of Data — DPDP Act 2023",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Lawful Processing of Data under DPDP Act 2023",
    description:
      "Consent vs Legitimate Uses — the two lawful bases under India's DPDP Act 2023.",
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
  mainEntity: LAWFUL_FAQS.map((f) => ({
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
    { "@type": "ListItem", position: 3, name: "Lawful Processing", item: `${SITE_URL}/lawful-processing` },
  ],
};

// ===== Article Schema =====
const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Lawful Processing of Data under the DPDP Act 2023 — Consent & Legitimate Uses",
  description:
    "Complete guide to lawful processing under India's DPDP Act 2023 — consent (Section 6) and legitimate uses (Section 7), consent manager, notice requirements, and real-world examples.",
  author: {
    "@type": "Person",
    name: "Shilpi Kulshrestha",
    jobTitle: "Founder & Corporate Law Expert, BusinezExcellence",
  },
  publisher: {
    "@type": "Organization",
    name: "Legal Galaxy",
    logo: {
      "@type": "ImageObject",
      url: `${SITE_URL}/favicon.ico`,
    },
  },
  datePublished: "2026-01-15",
  dateModified: new Date().toISOString().split("T")[0],
  inLanguage: "en-IN",
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": `${SITE_URL}/lawful-processing`,
  },
};

export default function LawfulProcessingLayout({
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
