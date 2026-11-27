import type { Metadata } from "next";

import { SITE_URL } from "@/lib/constants";
import { PENALTIES_FAQS } from "@/data/page-faqs";
import { ORG_ID, LOGO_URL, authorId, DPDP_ACT_SCHEMA } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Penalties under the DPDP Act 2023 | Up to ₹250 Crore, Section-wise",
  description:
    "DPDP Act 2023 penalties: up to ₹250 crore for security failures, ₹200 crore for breach notice and children's data, ₹150 crore for SDFs. Appeals to TDSAT.",
  keywords: [
    "DPDP Act penalties",
    "DPDP Act 250 crore penalty",
    "DPDP penalty schedule",
    "Data Protection Board penalties",
    "DPDP Act fines",
    "DPDP vs GDPR penalties",
  ],
  authors: [{ name: "Shilpi Kulshrestha" }],
  alternates: { canonical: "/penalties" },
  openGraph: {
    type: "article",
    title: "Penalties under the DPDP Act 2023 | Section-wise Schedule",
    description:
      "Every penalty under the DPDP Act 2023, mapped to the section it comes from, plus the enforcement process and appeals.",
    url: `${SITE_URL}/penalties`,
    siteName: "Legal Galaxy",
    locale: "en_IN",
    images: [
      { url: "/images/og-image.png", width: 1200, height: 630, alt: "Penalties under the DPDP Act 2023" },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Penalties under the DPDP Act 2023",
    description: "Section-wise penalty schedule, enforcement process and appeals under the DPDP Act 2023.",
    images: ["/images/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 },
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: PENALTIES_FAQS.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
    { "@type": "ListItem", position: 2, name: "Galaxy", item: `${SITE_URL}/galaxy` },
    { "@type": "ListItem", position: 3, name: "Penalties", item: `${SITE_URL}/penalties` },
  ],
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  about: DPDP_ACT_SCHEMA,
  headline: "Penalties under the DPDP Act 2023 — Section-wise Guide",
  description:
    "DPDP Act 2023 penalties: up to ₹250 crore for security failures, ₹200 crore for breach notice and children's data, ₹150 crore for SDFs. Appeals to TDSAT.",
  author: {
    "@type": "Person",
    "@id": authorId("shilpi-kulshrestha"),
    name: "Shilpi Kulshrestha",
    url: `${SITE_URL}/authors/shilpi-kulshrestha`,
  },
  publisher: {
    "@type": "Organization",
    "@id": ORG_ID,
    name: "Legal Galaxy",
    logo: { "@type": "ImageObject", url: LOGO_URL },
  },
  datePublished: "2026-01-15",
  dateModified: "2026-11-04",
  inLanguage: "en-IN",
  mainEntityOfPage: { "@type": "WebPage", "@id": `${SITE_URL}/penalties` },
};

export default function PenaltiesLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema).replace(/</g, "\\u003c") }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema).replace(/</g, "\\u003c") }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema).replace(/</g, "\\u003c") }}
      />
      {children}
    </>
  );
}
