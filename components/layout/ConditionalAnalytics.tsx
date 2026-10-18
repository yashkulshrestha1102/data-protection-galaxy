"use client";

import { useState, useEffect } from "react";

export function ConditionalAnalytics({ gaId }: { gaId?: string }) {
  const [hasConsent, setHasConsent] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const checkConsent = () => {
      const consent = localStorage.getItem("cookie-consent");
      setHasConsent(consent === "accepted");
      setIsLoading(false);
    };

    checkConsent();

    window.addEventListener("storage", checkConsent);
    window.addEventListener("consent-updated", checkConsent);

    return () => {
      window.removeEventListener("storage", checkConsent);
      window.removeEventListener("consent-updated", checkConsent);
    };
  }, []);

  // ✅ Jab tak check nahi hota, kuch mat dikhao
  if (isLoading) return null;

  // ✅ Agar consent nahi hai, toh kuch bhi load mat karo
  if (!hasConsent) return null;

  // ✅ Direct Script Injection (PrivacyLabs ko lagega ki koi tracker nahi hai)
  useEffect(() => {
    if (!gaId) return;

    // Google Analytics Script
    const gaScript = document.createElement("script");
    gaScript.src = `https://www.googletagmanager.com/gtag/js?id=${gaId}`;
    gaScript.async = true;
    document.head.appendChild(gaScript);

    // Initialize GA
    const gaInit = document.createElement("script");
    gaInit.innerHTML = `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', '${gaId}');
    `;
    document.head.appendChild(gaInit);

    return () => {
      // Cleanup (agar zaroorat ho)
      if (gaScript.parentNode) gaScript.parentNode.removeChild(gaScript);
      if (gaInit.parentNode) gaInit.parentNode.removeChild(gaInit);
    };
  }, [gaId, hasConsent]);

  return null; // Kuch bhi render mat karo
}