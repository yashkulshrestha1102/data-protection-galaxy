import type { Metadata } from "next";

const SITE_URL = "https://dpdpa.businezexcellence.com";

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

// ===== FAQ Schema =====
const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What are the lawful bases for processing under the DPDP Act 2023?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The DPDP Act 2023 has only two lawful bases: (1) Consent of the Data Principal (Section 6), and (2) Certain Legitimate Uses listed in Section 7. Unlike GDPR, there is no general 'legitimate interests' basis — the legitimate uses are a closed list.",
      },
    },
    {
      "@type": "Question",
      name: "What is valid consent under the DPDP Act?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Consent must be free, specific, informed, unconditional, and unambiguous, with a clear affirmative action. It must be limited to the specified purpose, and the Data Principal must be able to withdraw it as easily as they gave it.",
      },
    },
    {
      "@type": "Question",
      name: "What are the legitimate uses under Section 7 of the DPDP Act?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Section 7 lists legitimate uses: (a) voluntary provision of data for a specified purpose, (b) state functions (subsidies, benefits, services), (c) legal obligations, (d) medical emergencies, (e) disasters or public health emergencies, (f) employment purposes, and (g) public interest (research, archiving, statistical purposes).",
      },
    },
    {
      "@type": "Question",
      name: "What is a Consent Manager under the DPDP Act?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A Consent Manager is an entity registered with the Data Protection Board that acts as a single point of contact for Data Principals to give, manage, review, and withdraw consent across multiple Data Fiduciaries. Consent Managers must be accountable to Data Principals and must not misrepresent information.",
      },
    },
    {
      "@type": "Question",
      name: "Can consent be withdrawn after giving it?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Under Section 6(4), a Data Principal can withdraw consent at any time. The process to withdraw must be as easy as the process to give. Withdrawal does not affect the legality of processing done before withdrawal, but the Data Fiduciary must cease processing after withdrawal.",
      },
    },
    {
      "@type": "Question",
      name: "What is the difference between consent and legitimate use?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Consent is an active, affirmative choice by the Data Principal. Legitimate use is a specific situation listed in Section 7 where processing can occur without consent. Legitimate uses are narrower than GDPR's legitimate interests — they are a closed list, not an open balancing test.",
      },
    },
    {
      "@type": "Question",
      name: "What notice must a Data Fiduciary provide before seeking consent?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The notice must be clear, independent, and in plain language. It must describe the personal data being collected, the specific purpose of processing, how the Data Principal can exercise their rights, and how to file a complaint with the Data Protection Board.",
      },
    },
    {
      "@type": "Question",
      name: "Does the DPDP Act apply to processing for employment purposes?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Section 7(f) allows processing for employment purposes, including recruitment, verification, and providing benefits to employees. However, the employer must still comply with the Act's other obligations — such as security safeguards and grievance redressal.",
      },
    },
  ],
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