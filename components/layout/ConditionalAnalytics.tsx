"use client";

import Script from "next/script";

/**
 * This component is rendered by the server layout only when the visitor has
 * already accepted analytics cookies. Keep all Google Analytics loading here.
 */
export function ConditionalAnalytics({ gaId }: { gaId?: string }) {
  // Only accept a Google Analytics 4 measurement ID; also prevents unsafe script interpolation.
  if (!gaId || !/^G-[A-Z0-9]+$/i.test(gaId)) return null;

  return (
    <>
      <Script
        id="google-analytics-src"
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${encodeURIComponent(gaId)}`}
      />
      <Script
        id="google-analytics-config"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){window.dataLayer.push(arguments);}
            window.gtag = gtag;
            gtag('js', new Date());
            gtag('config', '${gaId}', { page_path: window.location.pathname });
          `,
        }}
      />
    </>
  );
}
