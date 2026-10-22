import type { Metadata } from "next";

const SITE_URL = "https://dpdpa.businezexcellence.com";

export const metadata: Metadata = {
  title: "Obligations of Data Fiduciaries under DPDP Act 2023 | Complete Guide",
  description:
    "Learn about the 8 core obligations of Data Fiduciaries under India's DPDP Act 2023 — notice, consent, data minimisation, security safeguards, breach reporting, grievance redressal, and SDF obligations. Includes compliance checklist.",
  keywords: [
    "Data Fiduciary obligations",
    "DPDP Act 2023 obligations",
    "DPDPA compliance",
    "notice and consent DPDP",
    "data minimisation",
    "breach notification India",
    "grievance redressal DPDP",
    "Significant Data Fiduciary",
    "DPO appointment India",
    "DPDP compliance checklist",
  ],
  authors: [{ name: "Shilpi Kulshrestha" }],
  alternates: { canonical: "/obligations" },
  openGraph: {
    type: "article",
    title: "Obligations of Data Fiduciaries under DPDP Act 2023 | Complete Guide",
    description:
      "8 core obligations every Data Fiduciary must comply with under the DPDP Act 2023. Includes SDF obligations, compliance checklist, and real-world examples.",
    url: `${SITE_URL}/obligations`,
    siteName: "Legal Galaxy",
    locale: "en_IN",
    images: [
      {
        url: "/images/og-image.png",
        width: 1200,
        height: 630,
        alt: "Data Fiduciary Obligations — DPDP Act 2023",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Obligations of Data Fiduciaries under DPDP Act 2023",
    description:
      "8 core obligations + SDF obligations + compliance checklist under India's DPDP Act 2023.",
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
      name: "What is a Data Fiduciary under the DPDP Act 2023?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A Data Fiduciary is any person, company, or entity that alone or jointly with others determines the purpose and means of processing personal data. This includes most businesses, websites, apps, and service providers operating in India.",
      },
    },
    {
      "@type": "Question",
      name: "What are the core obligations of a Data Fiduciary?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The 8 core obligations are: (1) Providing clear notice before collecting data, (2) Obtaining valid consent or establishing legitimate use, (3) Data minimisation and accuracy, (4) Storage limitation, (5) Implementing reasonable security safeguards, (6) Breach notification to the Board and Data Principals, (7) Establishing a grievance redressal mechanism, and (8) Appointing a DPO and independent auditor (for Significant Data Fiduciaries).",
      },
    },
    {
      "@type": "Question",
      name: "What is a Significant Data Fiduciary (SDF)?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A Significant Data Fiduciary is a Data Fiduciary notified by the Central Government based on factors such as the volume and sensitivity of personal data processed, the risk to Data Principals, the potential impact on India's sovereignty and security, and the risk to electoral democracy. SDFs have enhanced obligations, including appointing a DPO in India, an independent data auditor, and conducting periodic DPIAs.",
      },
    },
    {
      "@type": "Question",
      name: "How quickly must a data breach be reported under the DPDP Act?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The Act requires breach notification 'without undue delay.' While the exact timeline will be prescribed in the Rules, industry practice suggests notification to the Board within 72 hours and to affected Data Principals without undue delay. Failure to notify can attract a penalty of up to ₹200 crore.",
      },
    },
    {
      "@type": "Question",
      name: "What happens if a Data Fiduciary fails to comply with its obligations?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Failure to comply can attract civil penalties ranging from ₹50 crore to ₹250 crore, depending on the nature of the violation. The Data Protection Board can also issue directions, order remedial measures, and proceed against directors and officers personally.",
      },
    },
    {
      "@type": "Question",
      name: "Does the DPDP Act apply to small businesses?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. The DPDP Act applies to all Data Fiduciaries processing personal data in India, regardless of size. However, the government may exempt certain classes of Data Fiduciaries (such as startups) from certain obligations through notification, subject to safeguards.",
      },
    },
    {
      "@type": "Question",
      name: "What is the role of a Data Protection Officer (DPO)?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A DPO is responsible for ensuring compliance with the DPDP Act, acting as a point of contact for Data Principals and the Data Protection Board, and overseeing data protection impact assessments. For SDFs, the DPO must be based in India and report to the board of directors.",
      },
    },
    {
      "@type": "Question",
      name: "Can a Data Fiduciary outsource its obligations to a Data Processor?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. While a Data Fiduciary can engage a Data Processor, the ultimate responsibility for compliance remains with the Data Fiduciary. The Fiduciary must ensure the Processor implements adequate security safeguards through a valid contract and remains liable for the Processor's acts.",
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
    { "@type": "ListItem", position: 3, name: "Obligations of Data Fiduciaries", item: `${SITE_URL}/obligations` },
  ],
};

// ===== Article Schema =====
const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Obligations of Data Fiduciaries under the DPDP Act 2023 — Complete Guide",
  description:
    "Complete guide to the 8 core obligations of Data Fiduciaries under India's DPDP Act 2023 — notice, consent, security, breach reporting, SDF obligations, and compliance checklist.",
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
    "@id": `${SITE_URL}/obligations`,
  },
};

export default function ObligationsLayout({
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