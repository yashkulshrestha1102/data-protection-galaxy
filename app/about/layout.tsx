import type { Metadata } from "next";
import { SITE_URL } from "@/lib/constants";
import { ORG_ID } from "@/lib/seo";

export const metadata: Metadata = {
  title: "About Legal Galaxy | DPDP Act Experts in India",
description:
  "How Legal Galaxy helps Indian businesses comply with the DPDP Act 2023. Built by Businezexcellence StartX LLP for startups and enterprises.",
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
  url: `${SITE_URL}/about`,
  mainEntity: {
    "@type": "Organization",
    "@id": ORG_ID,
    name: "Legal Galaxy",
    legalName: "Businezexcellence StartX LLP",
    url: SITE_URL,
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
