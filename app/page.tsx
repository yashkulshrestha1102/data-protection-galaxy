import type { Metadata } from "next";
import HomeClient from "./HomeClient";

export const metadata: Metadata = {
  title: {
    absolute: "DPDP Act Compliance India: Free Scorecard & Course | Legal Galaxy",
  },
  description:
    "Master India's DPDP Act 2023 with a free compliance scorecard, 20-module course, privacy policy templates and AI governance tools for businesses, DPOs and legal teams.",
  alternates: { canonical: "/" },
};

export default function Page() {
  return <HomeClient />;
}