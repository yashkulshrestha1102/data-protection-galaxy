"use client";

import { useState } from "react";
import { useRouter } from "next/navigation"; // 👈 Naya import
import { Cookie, Shield, Settings2, X } from "lucide-react";
import Link from "next/link";

type ConsentStatus = "accepted" | "rejected" | null;

export function ConsentBanner({
  initialConsentStatus,
}: {
  initialConsentStatus: ConsentStatus;
}) {
  const router = useRouter(); // 👈 Router initialize kiya
  const [isVisible, setIsVisible] = useState(initialConsentStatus === null);
  const [isSaving, setIsSaving] = useState(false);

  const writeConsent = (status: Exclude<ConsentStatus, null>) => {
    setIsSaving(true);
    const secure = window.location.protocol === "https:" ? "; Secure" : "";
    
    // Cookie set kar
    document.cookie = `cookie-consent=${status}; Path=/; Max-Age=31536000; SameSite=Lax${secure}`;

    if (status === "rejected") {
      // Remove Google Analytics cookies left by an earlier accepted session.
      const names = document.cookie
        .split(";")
        .map((part) => part.trim().split("=")[0])
        .filter((name) => /^_ga(?:_|$)|^_gid$|^_gat(?:_|$)|^_gac_/i.test(name));
      const domains = [
        "",
        `; Domain=${window.location.hostname}`,
        "; Domain=.businezexcellence.com",
      ];
      for (const name of new Set([...names, "_ga", "_gid", "_gat", "_gac_"])) {
        for (const domain of domains) {
          document.cookie = `${name}=; Path=/; Max-Age=0; SameSite=Lax${domain}${secure}`;
        }
      }
    }

    // 👇 Banner ko turant gayab kar
    setIsVisible(false);
    setIsSaving(false);
    
    // 👇 Server components ko refresh kar (page reload kiye bina)
    router.refresh();
  };

  if (!isVisible) {
    return (
      <button
        type="button"
        onClick={() => setIsVisible(true)}
        aria-label="Open cookie settings"
        title="Cookie settings"
        data-cookie-settings-trigger="true"
        // 👇 Ise bottom-6 right-6 se left-6 bottom-6 kar diya hai taaki Voice Agent se na takraye
        className="fixed bottom-26 left-6 z-[9998] inline-flex items-center gap-2 rounded-full border border-white/25 bg-black/95 px-4 py-3 text-sm font-medium text-white shadow-xl backdrop-blur-md transition hover:border-purple-400 hover:bg-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-purple-400"
      >
        <Cookie className="h-5 w-5 text-purple-300" aria-hidden="true" />
        Cookie settings
      </button>
    );
  }

  return (
    <section
      role="dialog"
      aria-modal="false"
      aria-labelledby="cookie-consent-title"
      aria-describedby="cookie-consent-description"
      data-cookie-consent-banner="true"
      data-testid="cookie-consent-banner"
      className="fixed inset-x-0 bottom-0 z-[10000] border-t border-white/20 bg-black/95 p-4 text-white shadow-2xl backdrop-blur-md md:p-6"
    >
      <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-4 md:flex-row md:items-center">
        <div className="flex items-start gap-3">
          <Shield className="mt-1 h-6 w-6 shrink-0 text-purple-400" aria-hidden="true" />
          <div>
            <h2 id="cookie-consent-title" className="mb-1 text-sm font-semibold">
              We value your privacy
            </h2>
            <p id="cookie-consent-description" className="max-w-3xl text-xs leading-relaxed text-gray-300">
              We use essential cookies to make this website work. With your permission, we also use Google Analytics
              to understand website traffic. Analytics cookies are not enabled unless you choose “Accept All”. You can
              reject non-essential cookies or change your choice later in Cookie settings. Read our{" "}
              <Link href="/privacy-policy" className="text-purple-400 underline hover:text-purple-300">
                Privacy Policy
              </Link>.
            </p>
          </div>
        </div>

        <div className="flex w-full shrink-0 flex-col gap-2 sm:flex-row md:w-auto">
          <button
            type="button"
            disabled={isSaving}
            onClick={() => writeConsent("rejected")}
            data-cookie-consent-reject="true"
            className="inline-flex flex-1 items-center justify-center gap-2 rounded-xl border border-white/25 px-5 py-3 text-sm font-medium text-gray-200 transition hover:bg-white/10 disabled:opacity-60 md:flex-none"
          >
            <X className="h-4 w-4" aria-hidden="true" />
            Reject Non-Essential
          </button>
          <button
            type="button"
            disabled={isSaving}
            onClick={() => writeConsent("accepted")}
            data-cookie-consent-accept="true"
            className="inline-flex flex-1 items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-purple-500 to-pink-500 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-purple-500/20 transition hover:brightness-110 disabled:opacity-60 md:flex-none"
          >
            <Settings2 className="h-4 w-4" aria-hidden="true" />
            Accept All
          </button>
        </div>
      </div>
    </section>
  );
}
