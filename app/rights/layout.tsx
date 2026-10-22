import type { Metadata } from "next";

const SITE_URL = "https://dpdpa.businezexcellence.com";

export const metadata: Metadata = {
  title: "Rights of Data Principals under DPDP Act 2023 | Complete Guide",
  description:
    "Understand your 6 fundamental rights as a Data Principal under India's DPDP Act 2023. Learn about the right to access, correction, erasure, grievance redressal, portability, and nomination — with real-world examples and how to exercise them.",
  keywords: [
    "DPDP Act rights",
    "Data Principal rights",
    "right to access DPDP",
    "right to erasure India",
    "right to be forgotten",
    "data portability DPDP",
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
      "6 fundamental rights under India's DPDP Act 2023 — access, correction, erasure, grievance redressal, portability, and nomination. Explained with real-world examples.",
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
      "Understand your 6 data rights under the DPDP Act 2023 and how to exercise them.",
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
      name: "What are the rights of a Data Principal under the DPDP Act 2023?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The DPDP Act 2023 grants six core rights: (1) Right to Access information about personal data, (2) Right to Correction and Erasure, (3) Right to Grievance Redressal, (4) Right to Data Portability, (5) Right to Nominate, and (6) Right to Withdraw Consent. Together, these give Data Principals full control over their personal data.",
      },
    },
    {
      "@type": "Question",
      name: "How do I exercise my right to access under the DPDP Act?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "You can submit a written request to the Data Fiduciary (the organisation processing your data) asking for a summary of your personal data, the purposes of processing, and the categories of data shared with third parties. The Data Fiduciary must respond within a reasonable time, and you can escalate to the Data Protection Board if unsatisfied.",
      },
    },
    {
      "@type": "Question",
      name: "What is the right to erasure under the DPDP Act?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The right to erasure (also known as the right to be forgotten) allows you to request deletion of your personal data once the purpose of processing is complete, or if you withdraw consent. However, erasure can be refused if retention is required by law or for legal proceedings.",
      },
    },
    {
      "@type": "Question",
      name: "Can I withdraw my consent after giving it?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Under Section 6(4) of the DPDP Act, you can withdraw your consent at any time. Once withdrawn, the Data Fiduciary must cease processing your data (unless another legal basis applies). Importantly, the process to withdraw consent must be as easy as the process to give it.",
      },
    },
    {
      "@type": "Question",
      name: "What is the right to nominate under the DPDP Act?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The right to nominate allows you to appoint another individual to exercise your data rights on your behalf in the event of your death or incapacity. This ensures your digital legacy is protected. The nomination must be made in the manner prescribed by the Data Fiduciary.",
      },
    },
    {
      "@type": "Question",
      name: "How do I file a complaint under the DPDP Act?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "First, file a grievance with the Data Fiduciary's Grievance Officer. If it is not resolved within the prescribed time, you can escalate to the Data Protection Board of India (DPB). The Board has the power to investigate and impose penalties of up to ₹250 crore.",
      },
    },
    {
      "@type": "Question",
      name: "Are these rights available to everyone in India?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. The DPDP Act 2023 applies to all Data Principals — any individual whose personal data is processed digitally or in non-digital form subsequently digitised. However, some rights (such as the right to erasure) may be limited by other laws like the Income Tax Act or RBI regulations.",
      },
    },
    {
      "@type": "Question",
      name: "What if a company ignores my data rights request?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "If a Data Fiduciary ignores or delays your request, you can file a complaint with the Data Protection Board. The Board can investigate and impose penalties of up to ₹50 crore for general non-compliance. You can also approach consumer forums or courts for remedies.",
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
    { "@type": "ListItem", position: 3, name: "Rights of Data Principals", item: `${SITE_URL}/rights` },
  ],
};

// ===== Article Schema =====
const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Rights of Data Principals under the DPDP Act 2023 — Complete Guide",
  description:
    "Complete guide to the 6 data rights under India's DPDP Act 2023 — access, correction, erasure, grievance redressal, portability, and nomination.",
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