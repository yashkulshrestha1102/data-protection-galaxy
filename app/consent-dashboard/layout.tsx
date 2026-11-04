import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Consent Dashboard",
  robots: { index: false, follow: true },
};

export default function ConsentDashboardLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}