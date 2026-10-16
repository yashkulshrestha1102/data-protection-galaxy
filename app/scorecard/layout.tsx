import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "DPDPA Compliance Scorecard — Free Assessment",
  description:
    "Take our free DPDPA compliance assessment. Answer 13 questions and get a detailed readiness report with personalised recommendations.",
  alternates: { canonical: "/scorecard" },
};

export default function ScorecardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}