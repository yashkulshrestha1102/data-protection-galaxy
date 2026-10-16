import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Galaxy Explorer — DPDP Act Topics & Privacy Knowledge",
  description:
    "Explore the galaxy of data protection — rights, obligations, penalties, cross-border transfers and more under India's DPDP Act 2023.",
  alternates: { canonical: "/galaxy" },
};

export default function GalaxyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}