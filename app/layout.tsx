import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { GoogleAnalytics } from "@next/third-parties/google";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
  preload: false,
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
  preload: false,
});

const SITE_URL = "https://dpdpa.businezexcellence.com";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),

  title: {
    default: "Legal Galaxy | Privacy & AI Governance",
    template: "%s | Legal Galaxy",
  },

  description:
    "Your interactive guide to understanding India's Digital Personal Data Protection Act, 2023 — assessments, insights, compliance tools and certifications.",

  keywords: [
    "DPDP Act 2023",
    "Digital Personal Data Protection",
    "Privacy Compliance India",
    "AI Governance",
    "Data Protection Officer",
    "GDPR India",
    "Data Privacy",
  ],

  authors: [{ name: "Businezexcellence StartX LLP" }],
  creator: "Legal Galaxy",
  publisher: "Businezexcellence StartX LLP",

  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },

  openGraph: {
    type: "website",
    locale: "en_IN",
    url: SITE_URL,
    siteName: "Legal Galaxy",
    title: "Legal Galaxy | Privacy & AI Governance",
    description:
      "Your interactive guide to understanding India's Digital Personal Data Protection Act, 2023.",
    images: [
      {
        url: "/images/home1.jpeg",
        width: 1200,
        height: 630,
        alt: "Legal Galaxy — Privacy & AI Governance",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Legal Galaxy | Privacy & AI Governance",
    description:
      "Your interactive guide to understanding India's Digital Personal Data Protection Act, 2023.",
    images: ["/images/home1.jpeg"],
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  alternates: {
    canonical: SITE_URL,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const gaId = process.env.NEXT_PUBLIC_GA_ID;

  return (
    <html lang="en" data-scroll-behavior="smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-black text-white min-h-screen flex flex-col`}
      >
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />

        <Analytics />
        <SpeedInsights />

        {gaId && <GoogleAnalytics gaId={gaId} />}
      </body>
    </html>
  );
}