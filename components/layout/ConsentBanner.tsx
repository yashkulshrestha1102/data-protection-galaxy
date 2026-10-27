"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Cookie, Shield, Settings2, X, CheckCircle2, BarChart3, ChevronDown, ChevronUp } from "lucide-react";
import Link from "next/link";

type ConsentStatus = "accepted" | "rejected" | null;

export function ConsentBanner({
  initialConsentStatus,
}: {
  initialConsentStatus: ConsentStatus;
}) {
  const router = useRouter();
  const [isVisible, setIsVisible] = useState(initialConsentStatus === null);
  const [isSaving, setIsSaving] = useState(false);
  const [showPreferences, setShowPreferences] = useState(false);
  const [analyticsEnabled, setAnalyticsEnabled] = useState(false);

  const writeConsent = (status: Exclude<ConsentStatus, null>) => {
    setIsSaving(true);
    const secure = window.location.protocol === "https:" ? "; Secure" : "";

    // Cookie set kar (consent status)
    document.cookie = `cookie-consent=${status}; Path=/; Max-Age=31536000; SameSite=Lax${secure}`;

    // Consent log cookie (DPDP compliance ke liye timestamp)
    const consentLog = JSON.stringify({
      status,
      timestamp: new Date().toISOString(),
      analytics: status === "accepted",
    });
    document.cookie = `consent-log=${encodeURIComponent(consentLog)}; Path=/; Max-Age=31536000; SameSite=Lax${secure}`;

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

    // Banner hide + preferences reset
    setIsVisible(false);
    setShowPreferences(false);
    setIsSaving(false);

    // Server components refresh (analytics script conditional load ke liye)
    router.refresh();
  };

  // Manage Preferences se save karne ke liye
  const savePreferences = () => {
    if (analyticsEnabled) {
      writeConsent("accepted");
    } else {
      writeConsent("rejected");
    }
  };

  // Banner closed state — Cookie Settings floating button
  if (!isVisible) {
    return (
      <button
        type="button"
        onClick={() => setIsVisible(true)}
        aria-label="Open cookie settings"
        title="Cookie settings"
        data-cookie-settings-trigger="true"
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
      <div className="mx-auto flex max-w-7xl flex-col gap-4">
        {/* ===== MAIN ROW ===== */}
        <div className="flex flex-col items-start justify-between gap-4 md:flex-row md:items-center">
          <div className="flex items-start gap-3">
            <Shield className="mt-1 h-6 w-6 shrink-0 text-purple-400" aria-hidden="true" />
            <div>
              <h2 id="cookie-consent-title" className="mb-1 text-sm font-semibold">
                We value your privacy
              </h2>
              <p id="cookie-consent-description" className="max-w-3xl text-xs leading-relaxed text-gray-300">
                We use <strong className="text-white">essential cookies</strong> to make this website work.
                With your permission, we also use <strong className="text-white">Google Analytics cookies</strong> to
                understand website traffic. Analytics cookies are <strong>not enabled</strong> unless you choose
                &ldquo;Accept All&rdquo;. You can reject non-essential cookies or manage your preferences below. Read our{" "}
                <Link href="/privacy-policy" className="text-purple-400 underline hover:text-purple-300">
                  Privacy Policy
                </Link>{" "}
                and{" "}
                <Link href="/consent-notice" className="text-purple-400 underline hover:text-purple-300">
                  Consent Notice
                </Link>.
              </p>
            </div>
          </div>

          {/* Buttons */}
          <div className="flex w-full shrink-0 flex-col gap-2 sm:flex-row md:w-auto">
            <button
              type="button"
              disabled={isSaving}
              onClick={() => setShowPreferences(!showPreferences)}
              className="inline-flex flex-1 items-center justify-center gap-2 rounded-xl border border-white/25 px-5 py-3 text-sm font-medium text-gray-200 transition hover:bg-white/10 disabled:opacity-60 md:flex-none"
            >
              <Settings2 className="h-4 w-4" aria-hidden="true" />
              Manage Preferences
              {showPreferences ? (
                <ChevronUp className="h-4 w-4" aria-hidden="true" />
              ) : (
                <ChevronDown className="h-4 w-4" aria-hidden="true" />
              )}
            </button>
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
              <CheckCircle2 className="h-4 w-4" aria-hidden="true" />
              Accept All
            </button>
          </div>
        </div>

        {/* ===== PREFERENCES PANEL ===== */}
        {showPreferences && (
          <div className="border-t border-white/10 pt-4">
            <h3 className="mb-3 text-sm font-semibold text-white">Cookie Preferences</h3>
            <div className="space-y-3">
              {/* Essential */}
              <div className="rounded-xl border border-white/10 bg-white/5 p-4">
                <div className="flex items-start justify-between gap-3">
                  <div className="flex items-start gap-3">
                    <Shield className="mt-0.5 h-5 w-5 shrink-0 text-emerald-400" aria-hidden="true" />
                    <div>
                      <p className="text-sm font-medium text-white">Essential Cookies</p>
                      <p className="mt-1 text-xs text-gray-400">
                        Required for the website to function properly (e.g., remembering your cookie preferences,
                        security). These cannot be disabled.
                      </p>
                    </div>
                  </div>
                  <span className="shrink-0 rounded-full bg-emerald-500/20 px-3 py-1 text-xs font-medium text-emerald-300">
                    Always On
                  </span>
                </div>
              </div>

              {/* Analytics */}
              <div className="rounded-xl border border-white/10 bg-white/5 p-4">
                <div className="flex items-start justify-between gap-3">
                  <div className="flex items-start gap-3">
                    <BarChart3 className="mt-0.5 h-5 w-5 shrink-0 text-purple-400" aria-hidden="true" />
                    <div>
                      <p className="text-sm font-medium text-white">Analytics Cookies</p>
                      <p className="mt-1 text-xs text-gray-400">
                        Google Analytics cookies (e.g., <code className="text-xs">_ga</code>,{" "}
                        <code className="text-xs">_gid</code>) help us understand how visitors use the website.
                        These are optional and only enabled with your consent.
                      </p>
                    </div>
                  </div>
                  <label className="relative inline-flex shrink-0 cursor-pointer items-center">
                    <input
                      type="checkbox"
                      className="peer sr-only"
                      checked={analyticsEnabled}
                      onChange={(e) => setAnalyticsEnabled(e.target.checked)}
                      aria-label="Enable analytics cookies"
                    />
                    <div className="h-6 w-11 rounded-full bg-gray-600 after:absolute after:left-[2px] after:top-[2px] after:h-5 after:w-5 after:rounded-full after:bg-white after:transition-all after:content-[''] peer-checked:bg-purple-500 peer-checked:after:translate-x-full"></div>
                  </label>
                </div>
              </div>
            </div>

            {/* Save Preferences */}
            <div className="mt-4 flex justify-end">
              <button
                type="button"
                disabled={isSaving}
                onClick={savePreferences}
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-purple-500 to-pink-500 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-purple-500/20 transition hover:brightness-110 disabled:opacity-60"
              >
                <CheckCircle2 className="h-4 w-4" aria-hidden="true" />
                {isSaving ? "Saving..." : "Save Preferences"}
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}