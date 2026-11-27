"use client";

// components/layout/ConsentGate.tsx
// Reads the cookie-consent choice in the browser instead of on the server.
// This lets every page be pre-rendered (static), which makes pages load faster
// for visitors and search engines. Behaviour is unchanged: the banner shows until
// a choice is made, and Google Analytics loads only after "Accept All".

import { useEffect, useState } from "react";
import { ConsentBanner } from "./ConsentBanner";
import { ConditionalAnalytics } from "./ConditionalAnalytics";

type ConsentStatus = "accepted" | "rejected" | null;

function readConsent(): ConsentStatus {
  const match = document.cookie.match(/(?:^|;\s*)cookie-consent=(accepted|rejected)(?:;|$)/);
  return match ? (match[1] as "accepted" | "rejected") : null;
}

export function ConsentGate({ gaId }: { gaId?: string }) {
  const [ready, setReady] = useState(false);
  const [status, setStatus] = useState<ConsentStatus>(null);

  useEffect(() => {
    setStatus(readConsent());
    setReady(true);
  }, []);

  if (!ready) return null;

  return (
    <>
      <ConsentBanner initialConsentStatus={status} onConsentChange={setStatus} />
      {status === "accepted" && <ConditionalAnalytics gaId={gaId} />}
    </>
  );
}
