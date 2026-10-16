import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "DPDPA Master Course — Professional Certification",
  description:
    "Complete 20-module professional certification on India's Digital Personal Data Protection Act, 2023. 250+ lessons, 120+ hours, certificate on completion.",
  alternates: { canonical: "/certificate-course" },
};

export default function CertificateCourseLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}