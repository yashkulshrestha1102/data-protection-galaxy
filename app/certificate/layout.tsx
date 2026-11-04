import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Your Certificate",
  robots: { index: false, follow: false },
};

export default function CertificateLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}