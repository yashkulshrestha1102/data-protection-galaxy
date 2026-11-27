import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "DPDPA Compliance Scorecard | Free Readiness Assessment",
  description:
  "Free DPDPA compliance assessment: answer 13 questions and get a readiness score with recommendations for your organisation. No signup needed.",
  alternates: { canonical: "/scorecard" },
};

export default function ScorecardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
