import type { Metadata } from "next";
import { SITE_URL } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Training Material — DPDP Act Awareness & Compliance",
  description:
    "Training materials and resources for data protection awareness under the DPDP Act 2023 — videos, presentations, guides and workshops for employees and managers.",
  keywords: [
    "DPDP Act training",
    "Data protection training India",
    "Privacy awareness training",
    "DPDP compliance training",
    "Employee data protection training",
  ],
  alternates: {
    canonical: "/resources/training",
  },
  openGraph: {
    type: "website",
    title: "Training Material — DPDP Act Awareness | Legal Galaxy",
    description:
  "Free DPDP Act 2023 training materials — videos, presentations, guides and workshops for employees, managers and compliance teams. Build privacy awareness.",
    url: "/resources/training",
    siteName: "Legal Galaxy",
  },
  twitter: {
    card: "summary_large_image",
    title: "Training Material — DPDP Act Awareness | Legal Galaxy",
    description:
  "Free DPDP Act 2023 training materials — videos, presentations, guides and workshops for employees, managers and compliance teams. Build privacy awareness.",
  },
};

const collectionSchema = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  name: "Training Material — DPDP Act Awareness",
  description:
  "Free DPDP Act 2023 training materials — videos, presentations, guides and workshops for employees, managers and compliance teams. Build privacy awareness.",
  url: `${SITE_URL}/resources/training`,
  isPartOf: {
    "@type": "WebSite",
    name: "Legal Galaxy",
    url: SITE_URL,
  },
  publisher: {
    "@type": "Organization",
    name: "Legal Galaxy",
    logo: {
      "@type": "ImageObject",
      url: `${SITE_URL}/favicon.ico`,
    },
  },
  about: {
    "@type": "Thing",
    name: "DPDP Act Training",
  },
};

export default function TrainingLayout({
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
