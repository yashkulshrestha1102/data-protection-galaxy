import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Forms & Templates — DPDP Act Compliance Documents",
description:
  "Download free DPDP Act 2023 forms and templates — privacy notices, consent forms, DSAR forms, DPIA templates, breach notification and DPO appointment letters.",  keywords: [
    "DPDP Act forms",
    "Privacy notice template India",
    "Consent form DPDPA",
    "DPIA template",
    "Data breach notification form",
    "Data subject rights form",
  ],
  alternates: {
    canonical: "/resources/forms",
  },
  openGraph: {
    type: "website",
    title: "Forms & Templates — DPDP Act Compliance | Legal Galaxy",
    description:
  "Download free DPDP Act 2023 forms and templates — privacy notices, consent forms, DSAR forms, DPIA templates, breach notification and DPO appointment letters.",
    url: "/resources/forms",
    siteName: "Legal Galaxy",
  },
  twitter: {
    card: "summary_large_image",
    title: "Forms & Templates — DPDP Act Compliance | Legal Galaxy",
    description:
  "Download free DPDP Act 2023 forms and templates — privacy notices, consent forms, DSAR forms, DPIA templates, breach notification and DPO appointment letters.",
  },
};

const collectionSchema = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  name: "Forms & Templates — DPDP Act Compliance",
  description:
  "Download free DPDP Act 2023 forms and templates — privacy notices, consent forms, DSAR forms, DPIA templates, breach notification and DPO appointment letters.",
  url: "https://dpdpa.businezexcellence.com/resources/forms",
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
    name: "DPDP Act 2023 Compliance Forms",
  },
};

export default function FormsLayout({
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