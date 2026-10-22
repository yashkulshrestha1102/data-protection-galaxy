import type { Metadata } from "next";

const SITE_URL = "https://dpdpa.businezexcellence.com";

export const metadata: Metadata = {
  title: "Key Provisions of DPDP Act 2023 | Chapter-Wise Overview",
  description:
    "Complete chapter-wise overview of India's DPDP Act 2023. Learn about all 6 chapters, key sections, important definitions, rights, obligations, the Data Protection Board, penalties, and cross-border transfer provisions.",
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
      "Complete chapter-wise overview of India's DPDP Act 2023 — all 6 chapters, key sections, definitions, rights, obligations, and penalties.",
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
      "All 6 chapters of India's DPDP Act 2023 explained — definitions, rights, obligations, penalties, and cross-border transfers.",
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
      name: "How many chapters and sections are there in the DPDP Act 2023?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The DPDP Act 2023 has 6 chapters and 44 sections. It also has a Schedule that sets out the penalties for various violations. The Act came into force on 11 August 2023, though some provisions will be implemented in phases through Rules.",
      },
    },
    {
      "@type": "Question",
      name: "What is Chapter I of the DPDP Act?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Chapter I (Sections 1-3) is the Preliminary chapter. It covers the short title, extent, commencement, and definitions. It defines key terms like Data Principal, Data Fiduciary, Data Processor, personal data, processing, consent, and Significant Data Fiduciary.",
      },
    },
    {
      "@type": "Question",
      name: "What does Chapter II of the DPDP Act cover?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Chapter II (Sections 4-14) covers the obligations of Data Fiduciaries and the rights of Data Principals. It includes provisions on lawful processing, notice, consent, legitimate uses, general obligations, children's data, SDF obligations, and the rights to access, correction, erasure, grievance redressal, portability, and nomination.",
      },
    },
    {
      "@type": "Question",
      name: "What is Chapter III of the DPDP Act?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Chapter III (Section 15) covers the obligations of Data Fiduciaries in the context of cross-border transfers. It is one of the shortest chapters but has significant implications for international data flows.",
      },
    },
    {
      "@type": "Question",
      name: "What does Chapter IV of the DPDP Act establish?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Chapter IV (Sections 16-27) establishes the Data Protection Board of India. It covers the composition, appointment, powers, functions, procedure, and appeal mechanism of the Board.",
      },
    },
    {
      "@type": "Question",
      name: "What is covered in Chapter V of the DPDP Act?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Chapter V (Sections 28-34) covers penalties and adjudication. It includes the procedure for imposing penalties, factors to be considered, and the Schedule of penalties (up to ₹250 crore).",
      },
    },
    {
      "@type": "Question",
      name: "What is the Schedule to the DPDP Act?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The Schedule to the DPDP Act lists the penalties for various violations. The highest penalty is ₹250 crore for failure to take reasonable security safeguards to prevent a personal data breach. The lowest is ₹50 crore for general non-compliance.",
      },
    },
    {
      "@type": "Question",
      name: "When did the DPDP Act 2023 come into force?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The DPDP Act 2023 received presidential assent on 11 August 2023. However, different provisions will come into force in phases, as notified by the Central Government. The Rules are still being finalised, and full implementation is expected over 12-24 months.",
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
    { "@type": "ListItem", position: 3, name: "Key Provisions", item: `${SITE_URL}/provisions` },
  ],
};

// ===== Article Schema =====
const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Key Provisions of the DPDP Act 2023 — Chapter-Wise Overview",
  description:
    "Complete chapter-wise overview of India's DPDP Act 2023 — all 6 chapters, key sections, definitions, rights, obligations, and penalties.",
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