// app/consent-notice/layout.tsx
// Metadata for the Consent Notice (the page itself is a client component).
import type { Metadata } from "next";

const DESCRIPTION =
  "The personal data Legal Galaxy collects through its forms, why, how long it is kept, and how to give or withdraw consent under the DPDP Act 2023.";

export const metadata: Metadata = {
  title: "Consent Notice",
  description: DESCRIPTION,
  alternates: { canonical: "/consent-notice" },
  openGraph: {
    type: "website",
    title: "Consent Notice | Legal Galaxy",
    description: DESCRIPTION,
    url: "/consent-notice",
    siteName: "Legal Galaxy",
    locale: "en_IN",
  },
};

export default function ConsentNoticeLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
