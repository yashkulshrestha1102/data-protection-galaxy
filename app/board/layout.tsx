// app/board/layout.tsx
import type { Metadata } from "next";

const SITE_URL = "https://dpdpa.businezexcellence.com";

export const metadata: Metadata = {
  title: "Data Protection Board of India | DPDP Act 2023 Guide",
  description:
    "Complete guide to the Data Protection Board of India under the DPDP Act 2023 — composition, investigative powers, adjudication procedure, penalties up to ₹250 crore, and TDSAT appeals.",
  keywords: [
    "Data Protection Board",
    "DPB India",
    "DPDP Act 2023",
    "Data Protection Board composition",
    "Data Protection Board powers",
    "DPDP penalties",
    "TDSAT appeal",
    "Data Fiduciary compliance",
    "Privacy regulator India",
  ],
  authors: [{ name: "Shilpi Kulshrestha" }],
  alternates: { canonical: "/board" },
  openGraph: {
    type: "article",
    title: "Data Protection Board of India | DPDP Act 2023",
    description:
      "Complete guide to the Data Protection Board — composition, powers, adjudication, penalties, and appeals under the DPDP Act 2023.",
    url: `${SITE_URL}/board`,
    siteName: "Legal Galaxy",
    locale: "en_IN",
    images: [
      {
        url: "/images/og-image.png",
        width: 1200,
        height: 630,
        alt: "Data Protection Board — DPDP Act 2023",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Data Protection Board of India | DPDP Act 2023",
    description:
      "Composition, powers, penalties and appeals under the DPDP Act 2023 — explained in detail.",
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
      name: "What is the Data Protection Board of India?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The Data Protection Board of India (DPB) is the regulatory authority established under Section 18 of the Digital Personal Data Protection Act, 2023. It is responsible for enforcing the Act, adjudicating complaints and data breaches, and imposing penalties on Data Fiduciaries for non-compliance.",
      },
    },
    {
      "@type": "Question",
      name: "Who appoints the Chairperson and members of the Data Protection Board?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The Chairperson and other members of the Data Protection Board are appointed by the Central Government. The Chairperson must have at least 10 years of experience in data protection, law, or technology policy. Members are appointed based on their expertise in law, data protection, cyber security, or related fields.",
      },
    },
    {
      "@type": "Question",
      name: "What powers does the Data Protection Board have?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The Data Protection Board has powers to investigate complaints, conduct inquiries, summon witnesses, require production of documents, issue interim and final directions, impose civil penalties up to ₹250 crore, and direct remedial measures. It exercises powers similar to a civil court under the Code of Civil Procedure, 1908.",
      },
    },
    {
      "@type": "Question",
      name: "Can a Data Protection Board decision be appealed?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Under Section 29 of the DPDP Act, any person aggrieved by an order of the Data Protection Board may appeal to the Telecom Disputes Settlement and Appellate Tribunal (TDSAT). The appeal must be filed within 60 days of receiving the Board's order.",
      },
    },
    {
      "@type": "Question",
      name: "How many members does the Data Protection Board have?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The DPDP Act 2023 does not prescribe a fixed number of members. The Board consists of a Chairperson and such number of other members as the Central Government may determine. Members are appointed based on their expertise in data protection, law, technology, or public administration.",
      },
    },
    {
      "@type": "Question",
      name: "What is the maximum penalty the Data Protection Board can impose?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The maximum penalty the Data Protection Board can impose is ₹250 crore for failure to take reasonable security safeguards to prevent a personal data breach. Other penalties range from ₹50 crore to ₹200 crore depending on the nature of the violation.",
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
    { "@type": "ListItem", position: 3, name: "Data Protection Board", item: `${SITE_URL}/board` },
  ],
};

// ===== Article Schema =====
const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Data Protection Board of India — Composition, Powers, and Appeals under DPDP Act 2023",
  description:
    "Complete guide to the Data Protection Board of India under the DPDP Act 2023 — composition, powers, investigative procedure, penalties, and appeal mechanism.",
  author: {
    "@type": "Person",
    name: "Shilpi Kulshrestha",
    jobTitle: "Founder & Corporate Law Expert, BusinezExcellence",
    url: `${SITE_URL}/authors/shilpi-kulshrestha`,
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
    "@id": `${SITE_URL}/board`,
  },
};

export default function BoardLayout({
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
