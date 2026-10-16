import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "DPDPA Master Course | Professional Certification Program",
  
description:
  "Free 20-module DPDPA 2023 Master Course with 250+ lessons, 120+ hours of content and a professional certificate. Learn India's data protection law end-to-end.",
    alternates: { canonical: "/certificate-course" },
};

const courseSchema = {
  "@context": "https://schema.org",
  "@type": "Course",
  name: "DPDPA 2023 Master Course",
description:
  "Free 20-module DPDPA 2023 Master Course with 250+ lessons, 120+ hours of content and a professional certificate. Learn India's data protection law end-to-end.",  provider: {
    "@type": "Organization",
    name: "Legal Galaxy",
    sameAs: "https://dpdpa.businezexcellence.com",
  },
  educationalLevel: "Professional",
  inLanguage: "en",
  offers: {
    "@type": "Offer",
    category: "Free",
    price: "0",
    priceCurrency: "INR",
  },
  hasCourseInstance: {
    "@type": "CourseInstance",
    courseMode: "Online",
    courseWorkload: "PT120H",
  },
};

export default function CertificateCourseLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(courseSchema) }}
      />
      {children}
    </>
  );
}