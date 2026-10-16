import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us — Legal Galaxy by Businezexcellence StartX LLP",
  description:
    "Legal Galaxy is a Privacy & AI Governance platform built by Businezexcellence StartX LLP — trusted legal solutions for startups and growth-stage ventures.",
  alternates: { canonical: "/about" },
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}