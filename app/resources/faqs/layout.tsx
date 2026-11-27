import type { Metadata } from "next";
import { DPDPA_FAQS } from "@/data/faqs";
import { DPDP_ACT_SCHEMA } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Frequently Asked Questions — DPDP Act 2023",
  description:
  "Answers to the most common questions about DPDP Act 2023 — data principals, data fiduciaries, penalties, DPIAs, consent managers and more.",
  alternates: {
    canonical: "/resources/faqs",
  },
  openGraph: {
    title: "Frequently Asked Questions — DPDP Act 2023 | Legal Galaxy",
    description:
  "Answers to the most common questions about DPDP Act 2023 — data principals, data fiduciaries, penalties, DPIAs, consent managers and more.",
    url: "/resources/faqs",
    type: "website",
  },
};

// ===== FAQPage JSON-LD Schema =====
// Built from the same data the page shows (data/faqs.ts), so the schema can
// never say something different from the visible answers.
const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  about: DPDP_ACT_SCHEMA,
  mainEntity: DPDPA_FAQS.map((faq) => ({
    "@type": "Question",
    name: faq.q,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.a,
    },
  })),
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
