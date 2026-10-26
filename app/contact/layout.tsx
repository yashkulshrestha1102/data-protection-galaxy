import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us | Talk to DPDP Act Experts",
description:
  "Talk to DPDP Act compliance experts at Legal Galaxy. Free consultation for privacy policies, DPIAs, AI governance and certifications. Response within 1 business day.",
  alternates: { canonical: "/contact" },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
