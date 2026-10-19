"use client";

import { useEffect, useState } from "react";

export function ConditionalAnalytics({ gaId }: { gaId?: string }) {
  const [hasConsent, setHasConsent] = useState(false);

  useEffect(() => {
    const getCookie = (name: string) => {
      const value = `; ${document.cookie}`;
      const parts = value.split(`; ${name}=`);
      if (parts.length === 2) return parts.pop()?.split(';').shift();
    };

    const checkConsent = () => {
      const consent = getCookie("cookie-consent");
      setHasConsent(consent === "accepted");
    };

    // Initial check
    checkConsent();

    // Listen for consent updates
    window.addEventListener("consent-updated", checkConsent);

    return () => {
      window.removeEventListener("consent-updated", checkConsent);
    };
  }, []);

  // GA script inject karne ka effect
  useEffect(() => {
    if (!hasConsent || !gaId) {
      // Agar consent nahi hai, toh GA script ko remove kar do (agar pehle se hai toh)
      const existingScript = document.getElementById("ga-script");
      if (existingScript) {
        existingScript.remove();
      }
      return;
    }

    // Agar script pehle se hai toh dobara mat lagao
    if (document.getElementById("ga-script")) return;

    const gaScript = document.createElement("script");
    gaScript.id = "ga-script";
    gaScript.src = `https://www.googletagmanager.com/gtag/js?id=${gaId}`;
    gaScript.async = true;
    document.head.appendChild(gaScript);

    const gaInit = document.createElement("script");
    gaInit.id = "ga-init";
    gaInit.innerHTML = `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', '${gaId}', {
        'anonymize_ip': true
      });
    `;
    document.head.appendChild(gaInit);
  }, [hasConsent, gaId]);

  return null;
}