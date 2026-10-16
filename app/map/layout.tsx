import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Global Data Protection Map | Privacy Laws by Country",
  description:
    "Interactive 3D globe showing data protection laws across 20+ countries — DPDP Act, GDPR, CCPA and more. Compare privacy frameworks worldwide.",
  alternates: {
    canonical: "/map",
  },
};

const collectionSchema = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  name: "Global Data Protection Map",
  description:
    "Interactive map of data protection laws across countries worldwide.",
  url: "https://dpdpa.businezexcellence.com/map",
  isPartOf: {
    "@type": "WebSite",
    name: "Legal Galaxy",
    url: "https://dpdpa.businezexcellence.com",
  },
};

export default function MapLayout({
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