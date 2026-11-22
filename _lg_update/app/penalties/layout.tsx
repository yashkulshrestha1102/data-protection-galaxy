import type { Metadata } from "next";

import { SITE_URL } from "@/lib/constants";
import { PENALTIES_FAQS } from "@/data/page-faqs";

export const metadata: Metadata = {
  title: "Penalties under the DPDP Act 2023 | Up to ₹250 Crore, Section-wise",
  description:
    "Section-wise penalty schedule under India's DPDP Act 2023: up to ₹250 crore for security failures, ₹200 crore for breach notification and children's data, ₹150 crore for SDFs, ₹50 crore for other contraventions, and ₹10,000 for Data Principal duties. How the Board imposes penalties and how appeals to TDSAT work.",
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
      {children}
    </>
  );
}
