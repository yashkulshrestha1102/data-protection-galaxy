import type { Metadata } from "next";

const SITE_URL = "https://dpdpa.businezexcellence.com";

export const metadata: Metadata = {
  title: "Cross-Border Data Transfer under DPDP Act 2023 | Section 16 Guide",
  description:
    "Complete guide to cross-border data transfers under India's DPDP Act 2023. Learn about Section 16, the government's blacklist power, comparison with GDPR, real-world scenarios, and compliance requirements for international data flows.",
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

// ===== FAQ Schema =====
const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is Section 16 of the DPDP Act 2023?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Section 16 of the DPDP Act 2023 deals with cross-border data transfers. It empowers the Central Government to restrict the transfer of personal data to specific countries or territories by notification. By default, transfers are allowed unless restricted.",
      },
    },
    {
      "@type": "Question",
      name: "Is data localisation mandatory under the DPDP Act?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No, the DPDP Act does not mandate general data localisation. However, the government can restrict transfers to specific countries (a 'negative list' or 'blacklist' approach). Specific sectoral laws (like RBI regulations for payment data) may still require localisation.",
      },
    },
    {
      "@type": "Question",
      name: "How is DPDP different from GDPR on cross-border transfers?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "GDPR uses an 'adequacy' approach — transfers are allowed only to countries deemed adequate by the EU Commission, or with safeguards like SCCs. DPDP uses a 'blacklist' approach — transfers are allowed by default unless the government restricts them. DPDP is simpler but gives the government broad discretion.",
      },
    },
    {
      "@type": "Question",
      name: "Can the government ban transfers to specific countries?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Section 16 empowers the Central Government to restrict transfers to specific countries or territories by notification. The government can also impose conditions on transfers. The first list of restricted countries has not yet been notified.",
      },
    },
    {
      "@type": "Question",
      name: "What happens if I transfer data to a restricted country?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Transferring data to a restricted country is a violation of the DPDP Act. It can attract penalties under the Schedule — up to ₹50 crore for general non-compliance. The Data Protection Board can also issue directions and order remedial measures.",
      },
    },
    {
      "@type": "Question",
      name: "Do I need consent for cross-border transfers?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, if the processing is based on consent, the notice must mention that the data may be transferred outside India. The consent must cover this. If the processing is based on a legitimate use under Section 7, consent is not required, but the transfer still must comply with Section 16.",
      },
    },
    {
      "@type": "Question",
      name: "What about sectoral localisation requirements?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The DPDP Act does not override sectoral localisation requirements. For example, RBI's mandate to store payment data in India, IRDAI's insurance data rules, and SEBI's regulations for securities data continue to apply. DPDP is in addition to, not in place of, these rules.",
      },
    },
    {
      "@type": "Question",
      name: "When will the restricted countries list be notified?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The government has not yet notified the list of restricted countries. The Rules under the DPDP Act are still being finalised, and the list is expected to be published once the Rules are notified. The government has indicated that it will adopt a calibrated approach.",
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
    { "@type": "ListItem", position: 3, name: "Cross-Border Transfer", item: `${SITE_URL}/cross-border` },
  ],
};

// ===== Article Schema =====
const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Cross-Border Data Transfer under the DPDP Act 2023 — Section 16 Guide",
  description:
    "Complete guide to cross-border data transfers under India's DPDP Act 2023 — Section 16, government blacklist power, GDPR comparison, and compliance requirements.",
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
