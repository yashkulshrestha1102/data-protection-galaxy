// app/certificate-course/[moduleId]/quiz/layout.tsx
// Quiz pages are interactive tests with no unique text, so keep them out of search
// results (links on them are still followed).
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Module Quiz — DPDPA Master Course",
  robots: { index: false, follow: true },
};

export default function QuizLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
