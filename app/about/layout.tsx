import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Legal Galaxy | DPDP Act Experts in India",
description:
  "Learn how Legal Galaxy helps Indian businesses achieve DPDP Act 2023 compliance. Built by Businezexcellence StartX LLP — trusted by startups and enterprises.",
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