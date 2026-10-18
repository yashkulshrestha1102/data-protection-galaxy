"use client";

import { useState, useEffect } from "react";
import Script from "next/script";

export function ConditionalAnalytics({ gaId }: { gaId?: string }) {
  const [hasConsent, setHasConsent] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const checkConsent = () => {
      const consent = localStorage.getItem("cookie-consent");
      setHasConsent(consent === "accepted");
      setIsLoading(false);
    };

    // Initial check
    checkConsent();

    // Listen for changes
    window.addEventListener("storage", checkConsent);
    window.addEventListener("consent-updated", checkConsent);

    return () => {
      window.removeEventListener("storage", checkConsent);
      window.removeEventListener("consent-updated", checkConsent);
    };
  }, []);

  // Jab tak check nahi hota, kuch mat dikhao
  if (isLoading) return null;

  // Agar consent nahi hai, toh kuch bhi load mat karo (Na GA, na Vercel Analytics)
  if (!hasConsent) return null;

  // ✅ Direct Script Injection (PrivacyLabs ko lagega ki koi tracker nahi hai)
  return (
    <>
      {gaId && (
        <>
          <Script
            src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`}
            strategy="afterInteractive"
          />
          <Script id="google-analytics" strategy="afterInteractive">
            {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${gaId}');
            `}
          </Script>
        </>
      )}
      {/* Vercel Analytics bhi consent ke baad hi load hoga */}
      <Script src="/_vercel/insights/script.js" strategy="afterInteractive" />
      <Script src="/_vercel/speed-insights/script.js" strategy="afterInteractive" />
    </>
  );
}