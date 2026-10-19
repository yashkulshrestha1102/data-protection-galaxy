"use client";

import { useState } from "react";
import { Shield } from "lucide-react";
import Link from "next/link";

export function ConsentBanner({ initialHasConsent }: { initialHasConsent: boolean }) {
  // Agar server se consent mila hai, toh shuru se hi hide
  const [isVisible, setIsVisible] = useState(!initialHasConsent);

  const handleAccept = () => {
    // Cookie set karo (1 saal ke liye)
    document.cookie = "cookie-consent=accepted; path=/; max-age=31536000; SameSite=Lax";
    setIsVisible(false);
    // Page reload karo taaki server ko nayi cookie mil jaye aur GA load ho jaye
    window.location.reload();
  };

  const handleReject = () => {
    // Cookie set karo
    document.cookie = "cookie-consent=rejected; path=/; max-age=31536000; SameSite=Lax";
    setIsVisible(false);
    window.location.reload();
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-[9999] p-4 md:p-6 bg-black/95 backdrop-blur-md border-t border-white/20 text-white shadow-2xl">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-start gap-3">
          <Shield className="w-6 h-6 text-purple-400 flex-shrink-0 mt-1" />
          <div>
            <h3 className="text-sm font-semibold text-white mb-1">We value your privacy</h3>
            <p className="text-xs text-gray-300 leading-relaxed max-w-3xl">
              We use cookies to enhance your browsing experience, analyze site traffic, and personalize content.
              By clicking "Accept All", you consent to our use of cookies in accordance with our{" "}
              <Link href="/privacy-policy" className="text-purple-400 hover:text-purple-300 underline">
                Privacy Policy
              </Link>.
            </p>
          </div>
        </div>
        <div className="flex items-center gap-3 w-full md:w-auto flex-shrink-0">
          <button
            onClick={handleReject}
            className="flex-1 md:flex-none px-5 py-2.5 rounded-xl border border-white/20 text-gray-300 text-sm font-medium hover:bg-white/10 transition-all"
          >
            Reject Non-Essential
          </button>
          <button
            onClick={handleAccept}
            className="flex-1 md:flex-none px-5 py-2.5 rounded-xl bg-gradient-to-r from-purple-500 to-pink-500 text-white text-sm font-semibold hover:scale-105 transition-all shadow-lg shadow-purple-500/30"
          >
            Accept All
          </button>
        </div>
      </div>
    </div>
  );
}