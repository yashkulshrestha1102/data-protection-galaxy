import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AI Document Generator — Privacy Policies & AI Governance Docs",
  description:
    "Generate privacy policies, consent notices, DPAs and AI governance documents instantly. 15+ templates for DPDP Act and AI compliance.",
  alternates: { canonical: "/generator" },
};

export default function GeneratorLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}