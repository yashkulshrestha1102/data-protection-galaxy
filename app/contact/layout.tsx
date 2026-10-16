import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us — Talk to DPDP Act Experts",
  description:
    "Get in touch with Legal Galaxy's privacy and AI governance experts. Free consultation for DPDP Act compliance.",
  alternates: { canonical: "/contact" },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}