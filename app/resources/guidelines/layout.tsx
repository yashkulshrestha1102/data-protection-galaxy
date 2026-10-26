import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Guidelines & Circulars — DPDP Act 2023",
  description:
    "Official guidelines and circulars issued by the Data Protection Board under the DPDP Act 2023. Implementation guidance, breach notification rules, DPIA guidelines and more.",
  keywords: [
    "DPDP Act guidelines",
    "Data Protection Board circulars",
    "DPDPA implementation",
    "Breach notification rules",
    "DPIA guidelines India",
  ],
  alternates: { canonical: "/resources/guidelines" },
  openGraph: {
    type: "website",
    title: "Guidelines & Circulars — DPDP Act 2023",
    description:
  "Official DPDP Act 2023 guidelines and circulars — implementation guidance, breach notification rules, DPIA guidelines and Consent Manager framework.",
    url: "/resources/guidelines",
  },
};

const collectionSchema = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  name: "Guidelines & Circulars — DPDP Act 2023",
  description:
  "Official DPDP Act 2023 guidelines and circulars — implementation guidance, breach notification rules, DPIA guidelines and Consent Manager framework.",
  url: "https://dpdpa.businezexcellence.com/resources/guidelines",
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
};

export default function GuidelinesLayout({
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
