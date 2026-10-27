import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { cookies } from "next/headers";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { ConsentBanner } from "@/components/layout/ConsentBanner";
import { ConditionalAnalytics } from "@/components/layout/ConditionalAnalytics";


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
const SITE_DESCRIPTION =
  "Master India's DPDP Act 2023 with free assessments, expert insights, compliance templates and AI governance tools. Built for businesses, DPOs and legal teams.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Legal Galaxy | Privacy & AI Governance",
    template: "%s | Legal Galaxy",
  },
  description: SITE_DESCRIPTION,
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
    description: SITE_DESCRIPTION,
    images: [
      {
        url: "/images/og-image.png",
        width: 1200,
        height: 630,
        alt: "Legal Galaxy — Privacy & AI Governance",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Legal Galaxy | Privacy & AI Governance",
    description: SITE_DESCRIPTION,
    images: ["/images/og-image.png"],
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

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const gaId = process.env.NEXT_PUBLIC_GA_ID;
  const cookieStore = await cookies();
  const rawConsent = cookieStore.get("cookie-consent")?.value;
  const consentStatus =
    rawConsent === "accepted" || rawConsent === "rejected" ? rawConsent : null;
  const hasAnalyticsConsent = consentStatus === "accepted";

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Legal Galaxy",
    legalName: "Businezexcellence StartX LLP",
    url: SITE_URL,
    logo: {
      "@type": "ImageObject",
      url: `${SITE_URL}/favicon.ico`,
    },
    description: SITE_DESCRIPTION,
    foundingDate: "2026",
    sameAs: [
      "https://www.linkedin.com/company/businezexcellence-com/",
      "https://www.instagram.com/businezexcellence/",
      "https://www.youtube.com/@businezexcellence",
    ],
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+91-8800138008",
      email: "privacy@businezexcellence.com",
      contactType: "Customer Service",
      areaServed: "IN",
      availableLanguage: ["English", "Hindi"],
    },
    address: {
      "@type": "PostalAddress",
      addressCountry: "IN",
    },
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Legal Galaxy",
    alternateName: "Legal Galaxy — Privacy & AI Governance",
    url: SITE_URL,
    publisher: {
      "@type": "Organization",
      name: "Legal Galaxy",
    },
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: `${SITE_URL}/insight?q={search_term_string}`,
      },
      "query-input": "required name=search_term_string",
    },
  };

  return (
    <html lang="en" data-scroll-behavior="smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-black text-white min-h-screen flex flex-col`}
      >
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />


        <ConsentBanner initialConsentStatus={consentStatus} />
        {hasAnalyticsConsent && <ConditionalAnalytics gaId={gaId} />}
      </body>
    </html>
  );
}

