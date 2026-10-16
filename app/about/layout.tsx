import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us — Legal Galaxy by Businezexcellence StartX LLP",
  description:
    "Legal Galaxy is a Privacy & AI Governance platform built by Businezexcellence StartX LLP — trusted legal solutions for startups and growth-stage ventures.",
  alternates: {
    canonical: "/about",
  },
};

const aboutSchema = {
  "@context": "https://schema.org",
  "@type": "AboutPage",
  name: "About Legal Galaxy",
  description:
    "Legal Galaxy is a Privacy & AI Governance platform built by Businezexcellence StartX LLP.",
  url: "https://dpdpa.businezexcellence.com/about",
  mainEntity: {
    "@type": "Organization",
    name: "Legal Galaxy",
    legalName: "Businezexcellence StartX LLP",
    url: "https://dpdpa.businezexcellence.com",
  },
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutSchema) }}
      />
      {children}
    </>
  );
}