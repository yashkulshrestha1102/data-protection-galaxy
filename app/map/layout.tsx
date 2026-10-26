import type { Metadata } from "next";
import { countries } from "@/data/countries";

const SITE_URL = "https://dpdpa.businezexcellence.com";

export const metadata: Metadata = {
  title: `Global Data Protection Laws Map (${countries.length}+ Countries) | Legal Galaxy`,
  description: `Explore and compare data protection and privacy laws across ${countries.length}+ jurisdictions. Interactive map featuring GDPR, DPDP Act 2023, CCPA, PIPL, and more global privacy frameworks.`,
  alternates: {
    canonical: `${SITE_URL}/map`,
  },
  openGraph: {
    title: "Global Data Protection Laws Map",
    description: "Interactive map of data protection and privacy laws worldwide. Compare compliance levels across 90+ countries.",
    url: `${SITE_URL}/map`,
    siteName: "Legal Galaxy",
    images: [{ url: `${SITE_URL}/images/og-image.jpg`, width: 1200, height: 630 }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Global Data Protection Laws Map",
    description: "Interactive map of data protection laws worldwide.",
    images: [`${SITE_URL}/images/og-image.jpg`],
  },
};

export default function MapLayout({ children }: { children: React.ReactNode }) {
  // ✅ Collection Page Schema (Helps Google understand the directory)
  const collectionSchema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Global Data Protection Laws Map",
    description: `Directory of privacy regulations across ${countries.length}+ countries.`,
    url: `${SITE_URL}/map`,
    isPartOf: {
      "@type": "WebSite",
      name: "Legal Galaxy",
      url: SITE_URL,
    },
    mainEntity: {
      "@type": "ItemList",
      name: "List of Global Data Protection Laws",
      numberOfItems: countries.length,
      itemListElement: countries.map((country, index) => ({
        "@type": "ListItem",
        position: index + 1,
        url: `${SITE_URL}/country/${country.id}`,
        name: `${country.name} — ${country.lawName}`,
      })),
    },
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
