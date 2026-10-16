import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Data Protection Insights — DPDP Act, GDPR & Global Privacy Law",
  description:
    "In-depth analysis and practical guidance on India's DPDP Act 2023, GDPR, cross-border data transfers and global privacy law — from Legal Galaxy's privacy team.",
  alternates: {
    canonical: "/insight",
  },
  openGraph: {
    title: "Data Protection Insights — Legal Galaxy",
    description:
      "In-depth analysis on India's DPDP Act, GDPR and global privacy law.",
    url: "/insight",
    type: "website",
  },
};

const collectionSchema = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  name: "Data Protection Insights",
  description:
    "In-depth analysis on India's DPDP Act 2023, GDPR and global privacy law.",
  url: "https://dpdpa.businezexcellence.com/insight",
  isPartOf: {
    "@type": "WebSite",
    name: "Legal Galaxy",
    url: "https://dpdpa.businezexcellence.com",
  },
  publisher: {
    "@type": "Organization",
    name: "Legal Galaxy",
  },
};

export default function InsightLayout({
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