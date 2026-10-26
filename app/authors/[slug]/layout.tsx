// app/authors/[slug]/layout.tsx
import type { Metadata } from "next";

const SITE_URL = "https://dpdpa.businezexcellence.com";

export const metadata: Metadata = {
  title: "Shilpi Kulshrestha — Founder & Data Protection Expert",
  description:
    "Shilpi Kulshrestha is a corporate lawyer with over a decade of experience in data protection, company law, and regulatory compliance. Learn more about her work at Legal Galaxy.",
  keywords: [
    "Shilpi Kulshrestha",
    "data protection expert India",
    "DPDPA expert",
    "corporate lawyer India",
    "privacy lawyer",
    "BusinezExcellence founder",
  ],
  authors: [{ name: "Shilpi Kulshrestha" }],
  alternates: { canonical: "/authors/shilpi-kulshrestha" },
  openGraph: {
    type: "profile",
    title: "Shilpi Kulshrestha — Founder & Data Protection Expert",
    description:
      "Shilpi Kulshrestha is a corporate lawyer with over a decade of experience in data protection and regulatory compliance.",
    url: `${SITE_URL}/authors/shilpi-kulshrestha`,
    siteName: "Legal Galaxy",
    locale: "en_IN",
    images: [
      {
        url: "/images/profileoffounder.jpeg",
        width: 1200,
        height: 630,
        alt: "Shilpi Kulshrestha",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Shilpi Kulshrestha — Founder & Data Protection Expert",
    description:
      "Corporate lawyer with over a decade of experience in data protection and regulatory compliance.",
    images: ["/images/profileoffounder.jpeg"],
  },
};

// ===== Person Schema =====
const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Shilpi Kulshrestha",
  jobTitle: "Founder & Corporate Law Expert",
  worksFor: {
    "@type": "Organization",
    name: "Businezexcellence StartX LLP",
    url: SITE_URL,
  },
  url: `${SITE_URL}/authors/shilpi-kulshrestha`,
  image: `${SITE_URL}/images/profileoffounder.jpeg`,
  description:
    "Shilpi Kulshrestha is a corporate lawyer with over a decade of experience in data protection, company law, and regulatory compliance. She has advised 50+ startups and enterprises on DPDPA readiness, privacy governance, and AI compliance.",
  knowsAbout: [
    "DPDP Act 2023",
    "Data Protection",
    "Privacy Law",
    "Corporate Law",
    "AI Governance",
    "Company Secretary",
  ],
  sameAs: [
    "https://www.linkedin.com/company/businezexcellence-com/",
  ],
};

export default function AuthorLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />
      {children}
    </>
  );
}