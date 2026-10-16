import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Guidelines & Circulars — DPDP Act 2023",
  description: "Official guidelines and circulars issued by the Data Protection Board under the DPDP Act 2023.",
  alternates: { canonical: "/resources/guidelines" },
};

const schema = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  name: "Guidelines & Circulars",
  description: "Official guidelines and circulars under DPDP Act 2023.",
  url: "https://dpdpa.businezexcellence.com/resources/guidelines",
  isPartOf: {
    "@type": "WebSite",
    name: "Legal Galaxy",
    url: "https://dpdpa.businezexcellence.com",
  },
};

export default function GuidelinesLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      {children}
    </>
  );
}