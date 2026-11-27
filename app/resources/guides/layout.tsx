// app/resources/guides/layout.tsx

import { Source_Serif_4 } from "next/font/google";

// Editorial serif used only for guide headings and lead paragraphs.
const guideSerif = Source_Serif_4({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  display: "swap",
  variable: "--font-guide-serif",
});

export default function GuidesLayout({ children }: { children: React.ReactNode }) {
  return <div className={guideSerif.variable}>{children}</div>;
}
