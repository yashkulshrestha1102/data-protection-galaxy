import type { Metadata } from "next";
import { countries } from "@/data/countries";

export const metadata: Metadata = {
  title: `Global Data Protection Map (${countries.length}+ Countries) | Legal Galaxy`,
  description: `Explore and compare data protection laws across ${countries.length}+ jurisdictions. Interactive map featuring GDPR, DPDP Act 2023, CCPA, PIPL, and more global privacy frameworks.`,
  alternates: {
    canonical: "/map",
  },
  openGraph: {
    title: "Global Data Protection Laws Map",
    description: "Interactive map of data protection and privacy laws worldwide.",
    url: "/map",
    type: "website",
  }
};

export default function MapLayout({ children }: { children: React.ReactNode }) {
  const collectionSchema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Global Data Protection Laws Map",
    description: `Directory of privacy regulations across ${countries.length}+ countries.`,
    url: "https://dpdpa.businezexcellence.com/map",
    isPartOf: {
      "@type": "WebSite",
      name: "Legal Galaxy",
      url: "https://dpdpa.businezexcellence.com",
    },
    mainEntity: {
      "@type": "ItemList",
      itemListElement: countries.map((country, index) => ({
        "@type": "ListItem",
        position: index + 1,
        url: `https://dpdpa.businezexcellence.com/country/${country.id}`,
        name: `${country.name} — ${country.lawName}`
      }))
    }
  };

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