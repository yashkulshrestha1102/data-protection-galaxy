// app/resources/guides/layout.tsx

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Guides — GDPR, DPDP Act & Global Data Protection",
description:
  "In-depth privacy guides on GDPR, DPDP Act 2023, cross-border transfers and global data protection laws. Written by Businezexcellence privacy team.",
    alternates: { canonical: "/resources/guides" },
};

export default function GuidesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Privacy Guides",
description:
  "In-depth privacy guides on GDPR, DPDP Act 2023, cross-border transfers and global data protection laws. Written by Businezexcellence privacy team.",
      url: "https://dpdpa.businezexcellence.com/resources/guides",
    isPartOf: {
      "@type": "WebSite",
      name: "Legal Galaxy",
      url: "https://dpdpa.businezexcellence.com",
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      {children}
    </>
  );
}