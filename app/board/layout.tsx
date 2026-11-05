// app/board/layout.tsx
import type { Metadata } from "next";
import { JsonLd } from "@/components/seo/JsonLd";

const SITE_URL = "https://dpdpa.businezexcellence.com";

// Jab /board page ka content sach me update karo, tab ye date badlo
const BOARD_PAGE_UPDATED = "2026-11-04";

export const metadata: Metadata = {
  title: "Data Protection Board of India: DPDP Act 2023 Guide",
  description:
    "Guide to the Data Protection Board of India under the DPDP Act 2023: composition, powers, inquiry procedure, penalties up to ₹250 crore and appeals to TDSAT.",
  keywords: [
    "Data Protection Board",
    "DPB India",
    "DPDP Act 2023",
    "Data Protection Board composition",
    "Data Protection Board powers",
    "DPDP penalties",
    "TDSAT appeal",
    "Privacy regulator India",
  ],
  authors: [{ name: "Shilpi Kulshrestha" }],
  alternates: { canonical: "/board" },
  openGraph: {
    type: "article",
    title: "Data Protection Board of India: DPDP Act 2023",
    description:
      "Composition, powers, inquiry procedure, penalties and appeals of the Data Protection Board under the DPDP Act 2023.",
    url: `${SITE_URL}/board`,
    siteName: "Legal Galaxy",
    locale: "en_IN",
    images: [
      {
        url: "/images/og-image.png",
        width: 1200,
        height: 630,
        alt: "Data Protection Board: DPDP Act 2023",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Data Protection Board of India: DPDP Act 2023",
    description:
      "Composition, powers, penalties and appeals under the DPDP Act 2023.",
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
        text: "The Data Protection Board of India (DPB) is the body established by the Central Government under Section 18 of the Digital Personal Data Protection Act, 2023. It inquires into personal data breaches and complaints, issues directions, and imposes monetary penalties after giving the concerned person an opportunity to be heard. It functions as a digital office.",
      },
    },
    {
      "@type": "Question",
      name: "Who appoints the Chairperson and members of the Data Protection Board?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The Central Government appoints the Chairperson and other Members. They must be persons of ability, integrity and standing with special knowledge or practical experience in fields such as data governance, dispute resolution, information and communication technology, digital economy, law or regulation, and at least one Member must be an expert in law. They are appointed for a term of two years and are eligible for re-appointment.",
      },
    },
    {
      "@type": "Question",
      name: "What powers does the Data Protection Board have?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "On receiving a complaint or intimation of a personal data breach, the Board can inquire into the matter, issue directions, and impose monetary penalties after an inquiry. In an inquiry it has the powers of a civil court, including summoning and examining persons on oath and requiring production of documents. It may also accept voluntary undertakings from a Data Fiduciary and refer disputes to mediation.",
      },
    },
    {
      "@type": "Question",
      name: "Can a Data Protection Board decision be appealed?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Under Section 29 of the DPDP Act, an order of the Data Protection Board can be appealed to the Telecom Disputes Settlement and Appellate Tribunal (TDSAT) within sixty days of receiving the order.",
      },
    },
    {
      "@type": "Question",
      name: "How many members does the Data Protection Board have?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The Act provides for a Chairperson and such number of other Members as the Central Government may notify, so the exact size of the Board is set by Government notification rather than fixed in the statute.",
      },
    },
    {
      "@type": "Question",
      name: "What is the maximum penalty the Data Protection Board can impose?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Under the Schedule to the Act, the maximum penalty is ₹250 crore for failure to take reasonable security safeguards to prevent a personal data breach. Other penalties are up to ₹200 crore for failure to notify a breach or for breach of children's data obligations, up to ₹150 crore for breach of Significant Data Fiduciary obligations, up to ₹50 crore for other breaches, and up to ₹10,000 for breach of a Data Principal's duties.",
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
  headline: "Data Protection Board of India: Composition, Powers and Appeals under the DPDP Act 2023",
  description:
    "Guide to the Data Protection Board of India under the DPDP Act 2023: composition, powers, inquiry procedure, penalties and the appeal mechanism.",
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
      url: `${SITE_URL}/favicon.png`,
    },
  },
  datePublished: "2026-01-15",
  dateModified: BOARD_PAGE_UPDATED,
  inLanguage: "en-IN",
  image: `${SITE_URL}/images/og-image.png`,
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
      <JsonLd data={faqSchema} />
      <JsonLd data={breadcrumbSchema} />
      <JsonLd data={articleSchema} />
      {children}
    </>
  );
}