import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "DPDPA Master Course — Professional Certification",
  description:
    "Complete 20-module professional certification on India's Digital Personal Data Protection Act, 2023. 250+ lessons, 120+ hours, certificate on completion.",
  alternates: { canonical: "/certificate-course" },
};

const courseSchema = {
  "@context": "https://schema.org",
  "@type": "Course",
  name: "DPDPA 2023 Master Course",
  description:
    "Complete professional certification on India's Digital Personal Data Protection Act, 2023. 20 modules, 250+ lessons, 120+ hours of content.",
  provider: {
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