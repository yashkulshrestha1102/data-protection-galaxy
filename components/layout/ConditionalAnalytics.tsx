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

    // Initial check
    checkConsent();

    // Event listeners
    window.addEventListener("storage", checkConsent);
    window.addEventListener("consent-updated", checkConsent);

    return () => {
      window.removeEventListener("storage", checkConsent);
      window.removeEventListener("consent-updated", checkConsent);
    };
  }, []);

  // ✅ Ab hum ek hi useEffect use kar rahe hain script inject karne ke liye
  useEffect(() => {
    if (isLoading || !hasConsent || !gaId) return;

    // Check karo agar script pehle se hai toh dobara mat lagao
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
      gtag('config', '${gaId}');
    `;
    document.head.appendChild(gaInit);

    // Cleanup function (zaroori nahi hai par best practice hai)
    return () => {
      // Hum cleanup mein script nahi hataenge kyunki GA ko page reload ke bina track karna hai
    };
  }, [hasConsent, isLoading, gaId]);

  return null; // UI mein kuch nahi dikhana hai
}