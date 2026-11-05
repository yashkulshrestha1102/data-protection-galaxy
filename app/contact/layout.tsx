
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Legal Galaxy | DPDP & AI Governance Experts",

  description:
    "Connect with Legal Galaxy experts for DPDP Act 2023 compliance, GDPR, privacy governance, DPIA assessments, AI governance and enterprise privacy solutions. Get expert assistance within 1 business day.",

  keywords: [
    "Contact Legal Galaxy",
    "DPDP Act 2023 Experts",
    "Privacy Governance Consultation",
    "AI Governance Experts",
    "Data Protection Consulting India",
    "DPIA Consultation",
    "GDPR Compliance",
    "Privacy Compliance Experts",
  ],

  alternates: {
    canonical: "/contact",
  },

  openGraph: {
    title: "Let's Talk Privacy & AI Governance | Legal Galaxy",
    description:
      "Have questions about DPDP compliance, privacy governance or AI regulations? Connect with our experts at Legal Galaxy.",
    url: "https://dpdpa.businezexcellence.com/contact",
    siteName: "Legal Galaxy",
    type: "website",
    images: [
      {
        url: "/images/contact-og.jpg",
        width: 1200,
        height: 630,
        alt: "Legal Galaxy - Privacy & AI Governance",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Contact Legal Galaxy | Privacy & AI Governance",
    description:
      "Connect with our experts for DPDP, GDPR and AI Governance solutions.",
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
