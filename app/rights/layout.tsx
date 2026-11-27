import type { Metadata } from "next";

import { SITE_URL } from "@/lib/constants";
import { RIGHTS_FAQS } from "@/data/page-faqs";
import { ORG_ID, authorId, DPDP_ACT_SCHEMA } from "@/lib/seo";


export const metadata: Metadata = {
  title: "Rights of Data Principals under DPDP Act 2023 | Complete Guide",
  description:
    "Your 4 rights as a Data Principal under DPDP Act 2023: information, correction and erasure, grievance redressal and nomination, and how to use them.",
  keywords: [
    "DPDP Act rights",
    "Data Principal rights",
    "right to access DPDP",
    "right to erasure India",
    "right to be forgotten",
    
    "grievance redressal DPDP",
    "right to nominate",
    "consent withdrawal",
    "DPDPA data rights",
  ],
  authors: [{ name: "Shilpi Kulshrestha" }],
  alternates: { canonical: "/rights" },
  openGraph: {
    type: "article",
    title: "Rights of Data Principals under DPDP Act 2023 | Complete Guide",
    description:
  "Your 4 rights as a Data Principal under DPDP Act 2023: information, correction and erasure, grievance redressal and nomination, and how to use them.",
    url: `${SITE_URL}/rights`,
    siteName: "Legal Galaxy",
    locale: "en_IN",
    images: [
      {
        url: "/images/og-image.png",
        width: 1200,
        height: 630,
        alt: "Rights of Data Principals — DPDP Act 2023",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Rights of Data Principals under DPDP Act 2023",
    description:
      "Understand your data rights under the DPDP Act 2023 and how to exercise them.",
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
  mainEntity: RIGHTS_FAQS.map((f) => ({
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
    { "@type": "ListItem", position: 3, name: "Rights of Data Principals", item: `${SITE_URL}/rights` },
  ],
};

// ===== Article Schema =====
const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  about: DPDP_ACT_SCHEMA,
  headline: "Rights of Data Principals under the DPDP Act 2023 — Complete Guide",
  description:
    "Complete guide to the data rights under India's DPDP Act 2023 — information, correction and erasure, grievance redressal, and nomination.",
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
  dateModified: "2026-11-04",
  inLanguage: "en-IN",
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": `${SITE_URL}/rights`,
  },
};

export default function RightsLayout({
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
