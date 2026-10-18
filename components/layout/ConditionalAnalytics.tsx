"use client";

import { useState, useEffect } from "react";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { GoogleAnalytics } from "@next/third-parties/google";

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

  // ✅ Jab tak check nahi hota, kuch mat dikhao (No flash of trackers)
  if (isLoading) return null;

  // ✅ Agar consent nahi hai, toh kuch load mat karo
  if (!hasConsent) return null;

  return (
    <>
      <Analytics />
      <SpeedInsights />
      {gaId && <GoogleAnalytics gaId={gaId} />}
    </>
  );
}