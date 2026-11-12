import type { Metadata } from "next";
import { SITE_URL } from "@/lib/constants";


export const metadata: Metadata = {
  title: "Galaxy Explorer | DPDP Act Topics & Privacy Knowledge",
  description:
    "Explore the galaxy of data protection — rights, obligations, penalties, cross-border transfers and more under India's DPDP Act 2023.",
  alternates: {
    canonical: "/galaxy",
  },
};

const collectionSchema = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  name: "Galaxy Explorer — Data Protection Topics",
  description:
    "Explore data protection topics under India's DPDP Act 2023.",
  url: `${SITE_URL}/galaxy`,
  isPartOf: {
    "@type": "WebSite",
    name: "Legal Galaxy",
    url: SITE_URL,

  },
};

export default function GalaxyLayout({
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
