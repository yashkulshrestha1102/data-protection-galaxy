import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Global Data Protection Map — Privacy Laws by Country",
  description:
    "Interactive 3D globe showing data protection laws across 20+ countries — DPDP Act, GDPR, CCPA and more. Compare privacy frameworks worldwide.",
  alternates: { canonical: "/map" },
};

export default function MapLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}