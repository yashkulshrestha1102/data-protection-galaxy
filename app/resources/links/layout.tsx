import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "External Links — Data Protection Laws & Resources",
  description:
    "Curated links to official data protection authorities, laws and regulations worldwide — MeitY, Data Protection Board, GDPR, CCPA, ICO, EDPB and more.",
  keywords: [
    "Data protection laws",
    "GDPR official",
    "MeitY DPDP",
    "Data Protection Board India",
    "CCPA privacy law",
    "ICO UK data protection",
    "EDPB resources",
  ],
  alternates: {
    canonical: "/resources/links",
  },
  openGraph: {
    type: "website",
    title: "External Links — Data Protection Laws | Legal Galaxy",
    description:
  "Curated links to official data protection authorities and laws worldwide — MeitY, Data Protection Board, GDPR, CCPA, ICO, EDPB and UNCTAD resources.",
    url: "/resources/links",
    siteName: "Legal Galaxy",
  },
  twitter: {
    card: "summary_large_image",
    title: "External Links — Data Protection Laws | Legal Galaxy",
    description:
  "Curated links to official data protection authorities and laws worldwide — MeitY, Data Protection Board, GDPR, CCPA, ICO, EDPB and UNCTAD resources.",
  },
};

const collectionSchema = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  name: "External Links — Data Protection Laws & Resources",
  description:
  "Curated links to official data protection authorities and laws worldwide — MeitY, Data Protection Board, GDPR, CCPA, ICO, EDPB and UNCTAD resources.",
  url: "https://dpdpa.businezexcellence.com/resources/links",
  isPartOf: {
    "@type": "WebSite",
    name: "Legal Galaxy",
    url: "https://dpdpa.businezexcellence.com",
  },
  publisher: {
    "@type": "Organization",
    name: "Legal Galaxy",
    logo: {
      "@type": "ImageObject",
      url: "https://dpdpa.businezexcellence.com/favicon.ico",
    },
  },
  about: {
    "@type": "Thing",
    name: "Data Protection Laws Directory",
  },
};

export default function LinksLayout({
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
