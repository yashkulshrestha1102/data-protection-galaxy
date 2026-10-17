"use client";

import { useState, useEffect } from "react";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { GoogleAnalytics } from "@next/third-parties/google";

export function ConditionalAnalytics({ gaId }: { gaId?: string }) {
  const [hasConsent, setHasConsent] = useState(false);

  useEffect(() => {
    const checkConsent = () => {
      if (localStorage.getItem("cookie-consent") === "accepted") {
        setHasConsent(true);
      }
    };

    // Initial check
    checkConsent();

    // Listen for changes (jab user banner se accept kare)
    window.addEventListener("storage", checkConsent);
    // Custom event listener (kyunki same tab mein storage event fire nahi hota)
    window.addEventListener("consent-updated", checkConsent);

    return () => {
      window.removeEventListener("storage", checkConsent);
      window.removeEventListener("consent-updated", checkConsent);
    };
  }, []);

  if (!hasConsent) return null;

  return (
    <>
      <Analytics />
      <SpeedInsights />
      {gaId && <GoogleAnalytics gaId={gaId} />}
    </>
  );
}