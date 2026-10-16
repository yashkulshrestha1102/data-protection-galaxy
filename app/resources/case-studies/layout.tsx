import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Data Protection Case Studies — DPDP Act 2023",
  description:
    "Real-world case studies on data protection and compliance under the DPDP Act 2023 — data breaches, consent management, cross-border transfers and DPIAs.",
  alternates: {
    canonical: "/resources/case-studies",
  },
};

const collectionSchema = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  name: "Data Protection Case Studies",
  description:
    "Real-world case studies on data protection and compliance under the DPDP Act 2023.",
  url: "https://dpdpa.businezexcellence.com/resources/case-studies",
  isPartOf: {
    "@type": "WebSite",
    name: "Legal Galaxy",
    url: "https://dpdpa.businezexcellence.com",
  },
};

export default function CaseStudiesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionSchema) }}
      />
      {children}
    </>
  );
}