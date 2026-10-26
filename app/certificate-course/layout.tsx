// app/certificate-course/layout.tsx
import type { Metadata } from "next";

const SITE_URL = "https://dpdpa.businezexcellence.com";

export const metadata: Metadata = {
  title: "DPDPA Master Course — Free 20-Module Certification",
  description:
    "Free 20-module DPDPA 2023 Master Course with 250+ lessons, quizzes, and a professional certificate. Learn India's data protection law end-to-end at your own pace.",
  keywords: [
    "DPDPA course",
    "DPDP Act certification",
    "Privacy certification India",
    "Data protection course",
    "DPO training India",
    "free privacy course",
    "DPDPA master course",
  ],
  authors: [{ name: "Shilpi Kulshrestha" }],
  alternates: { canonical: "/certificate-course" },
  openGraph: {
    type: "website",
    title: "DPDPA Master Course — Free 20-Module Certification",
    description:
      "Free 20-module DPDPA 2023 Master Course with 250+ lessons, quizzes, and a professional certificate. Learn India's data protection law end-to-end.",
    url: `${SITE_URL}/certificate-course`,
    siteName: "Legal Galaxy",
    locale: "en_IN",
    images: [
      {
        url: "/images/og-image.png",
        width: 1200,
        height: 630,
        alt: "DPDPA Master Course — Free Certification",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "DPDPA Master Course — Free 20-Module Certification",
    description:
      "Free 20-module DPDPA 2023 Master Course with 250+ lessons and a professional certificate.",
    images: ["/images/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

// ===== Course Schema =====
const courseSchema = {
  "@context": "https://schema.org",
  "@type": "Course",
  name: "DPDPA 2023 Master Course",
  description:
    "Free 20-module DPDPA 2023 Master Course with 250+ lessons, quizzes, and a professional certificate. Learn India's data protection law end-to-end.",
  provider: {
    "@type": "Organization",
    name: "Legal Galaxy",
    sameAs: SITE_URL,
  },
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
    courseWorkload: "PT120H",
  },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.8",
    reviewCount: "150",
    bestRating: "5",
    worstRating: "1",
  },
  author: {
    "@type": "Person",
    name: "Shilpi Kulshrestha",
    jobTitle: "Founder & Corporate Law Expert, BusinezExcellence",
    url: `${SITE_URL}/authors/shilpi-kulshrestha`,
  },
};

// ===== FAQ Schema =====
const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Is the DPDPA Master Course completely free?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. The DPDPA Master Course is entirely free — all 20 modules, 250+ lessons, quizzes, and the final certification exam are available at no cost. There are no hidden fees or premium tiers.",
      },
    },
    {
      "@type": "Question",
      name: "Do I need any prior legal or technical background?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. The course is designed for beginners as well as experienced professionals. Module 1 starts with foundational privacy concepts, and the course progressively builds up to advanced topics like AI governance and cross-border data transfers.",
      },
    },
    {
      "@type": "Question",
      name: "How long does it take to complete the course?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The full course is approximately 120 hours of content. Most learners complete it over 4-8 weeks, but you can learn at your own pace. There is no deadline.",
      },
    },
    {
      "@type": "Question",
      name: "Is the certificate recognized by employers?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The certificate is issued by Legal Galaxy (Businezexcellence StartX LLP) and demonstrates your commitment to DPDPA compliance. While there is no single official certification for DPDPA, employers increasingly value demonstrated knowledge of the Act.",
      },
    },
  ],
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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      {children}
    </>
  );
}
