import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Frequently Asked Questions — DPDP Act 2023",
  description:
    "Frequently asked questions about India's Digital Personal Data Protection Act, 2023. Data principals, data fiduciaries, penalties, DPIAs and more — answered.",
  alternates: {
    canonical: "/resources/faqs",
  },
  openGraph: {
    title: "Frequently Asked Questions — DPDP Act 2023 | Legal Galaxy",
    description:
      "Frequently asked questions about India's Digital Personal Data Protection Act, 2023.",
    url: "/resources/faqs",
    type: "website",
  },
};

// ===== FAQPage JSON-LD Schema =====
const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is the Digital Personal Data Protection Act, 2023?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The Digital Personal Data Protection Act, 2023 is India's comprehensive data protection law that establishes a framework for processing personal data, balancing individual rights with the need for lawful processing.",
      },
    },
    {
      "@type": "Question",
      name: "Who is a Data Principal?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A Data Principal is an individual whose personal data is being processed. They have rights to access, correct, erase, and port their data under the DPDP Act.",
      },
    },
    {
      "@type": "Question",
      name: "Who is a Data Fiduciary?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A Data Fiduciary is an entity that determines the purpose and means of processing personal data. They have obligations under the DPDP Act, including notice, consent, and security.",
      },
    },
    {
      "@type": "Question",
      name: "What are the penalties for non-compliance?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Non-compliance with the DPDP Act can lead to penalties up to ₹250 crore for the data fiduciary and up to ₹50 crore for the data processor.",
      },
    },
    {
      "@type": "Question",
      name: "What is a Significant Data Fiduciary?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A Significant Data Fiduciary is an entity that processes a high volume of personal data or sensitive data. They have enhanced obligations under the DPDP Act.",
      },
    },
    {
      "@type": "Question",
      name: "What is Data Protection Impact Assessment (DPIA)?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "DPIA is a process to identify and mitigate risks associated with high-risk data processing activities. It is required for Significant Data Fiduciaries.",
      },
    },
    {
      "@type": "Question",
      name: "What are the rights of data principals?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Data principals have the right to access, correct, erase, port their data, and the right to grievance redressal.",
      },
    },
    {
      "@type": "Question",
      name: "How long should personal data be retained?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Personal data should be retained only for as long as necessary for the purpose for which it was collected, as per the storage limitation principle.",
      },
    },
  ],
};

export default function FAQsLayout({
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
      {children}
    </>
  );
}