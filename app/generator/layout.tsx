import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Free AI Document Generator | Privacy Policy & AI Governance",
description:
  "Generate privacy policies, consent notices, DPAs and AI governance documents instantly. 15+ free templates for DPDP Act 2023 and AI compliance.",
    alternates: { canonical: "/generator" },
};

export default function GeneratorLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}