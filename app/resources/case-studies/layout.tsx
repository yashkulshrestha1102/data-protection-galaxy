import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Data Protection Case Studies — DPDP Act 2023",
  description:
    "Case studies on data protection and compliance under the DPDP Act 2023: data breaches, consent management, cross-border transfers and DPIAs.",
  alternates: {
    canonical: "/resources/case-studies",
  },
};

export default function CaseStudiesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}