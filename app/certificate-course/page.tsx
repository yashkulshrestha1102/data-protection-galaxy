import type { Metadata } from "next";
import { JsonLd } from "@/components/seo/JsonLd";
import CourseHomeClient from "./CourseHomeClient";

const SITE_URL = "https://dpdpa.businezexcellence.com";
const DESCRIPTION =
  "Free 20-module DPDP Act 2023 course with lessons, quizzes and a certificate of completion. Learn India's data protection law at your own pace.";

export const metadata: Metadata = {
  title: "DPDPA Master Course: Free 20-Module Certification",
  description: DESCRIPTION,
  keywords: [
    "DPDPA course",
    "DPDP Act certification",
    "Privacy certification India",
    "Data protection course",
    "free privacy course",
  ],
  authors: [{ name: "Shilpi Kulshrestha" }],
  alternates: { canonical: "/certificate-course" },
  openGraph: {
    type: "website",
    title: "DPDPA Master Course: Free 20-Module Certification",
    description: DESCRIPTION,
    url: `${SITE_URL}/certificate-course`,
    siteName: "Legal Galaxy",
    locale: "en_IN",
    images: [
      { url: "/images/og-image.png", width: 1200, height: 630, alt: "DPDPA Master Course" },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "DPDPA Master Course: Free 20-Module Certification",
    description: DESCRIPTION,
    images: ["/images/og-image.png"],
  },
};

const courseSchema = {
  "@context": "https://schema.org",
  "@type": "Course",
  name: "DPDPA 2023 Master Course",
  description: DESCRIPTION,
  provider: { "@type": "Organization", name: "Legal Galaxy", sameAs: SITE_URL },
  educationalLevel: "Professional",
  inLanguage: "en",
  offers: {
    "@type": "Offer",
    category: "Free",
    price: "0",
    priceCurrency: "INR",
    availability: "https://schema.org/InStock",
  },
  hasCourseInstance: {
    "@type": "CourseInstance",
    courseMode: "Online",
  },
  author: {
    "@type": "Person",
    name: "Shilpi Kulshrestha",
    url: `${SITE_URL}/authors/shilpi-kulshrestha`,
  },
};

export default function CertificateCoursePage() {
  return (
    <>
      <JsonLd data={courseSchema} />
      <CourseHomeClient />
    </>
  );
}