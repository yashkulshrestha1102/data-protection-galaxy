"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowLeft, Shield, Trash2, AlertTriangle, CheckCircle } from "lucide-react";

export default function ConsentDashboardPage() {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

    const handleWithdraw = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");

    try {
      const response = await fetch('/api/lead-capture', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          source: 'withdraw_consent',
          email: email,
        }),
      });

      const data = await response.json();

      if (data.success) {
        setIsSubmitted(true);
      } else {
        setError(data.message || 'Something went wrong.');
      }
    } catch (err) {
      setError('Failed to process request. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <main className="min-h-screen text-white px-4 pt-28 md:pt-32 pb-16 relative overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-cover bg-center bg-no-repeat" style={{ backgroundImage: "url('/images/home1.jpeg')" }}>
        <div className="absolute inset-0 bg-black/70 backdrop-blur-[2px]" />
      </div>

      <div className="max-w-2xl mx-auto relative z-10">
        <Link href="/" className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors mb-6 group">
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          Back to Home
        </Link>

        <div className="bg-white/10 border border-white/20 rounded-2xl backdrop-blur-md p-8">
          <div className="flex items-center gap-3 mb-6">
            <Shield className="w-8 h-8 text-purple-400" />
            <h1 className="text-3xl font-bold text-white">Consent Dashboard</h1>
          </div>

          {isSubmitted ? (
            <div className="text-center py-10">
              <CheckCircle className="w-16 h-16 text-emerald-400 mx-auto mb-4" />
              <h2 className="text-2xl font-bold text-white mb-2">Consent Withdrawn</h2>
              <p className="text-gray-300 mb-6">
                Aapka consent successfully withdraw kar diya gaya hai. Aapka data 30 days ke andar delete kar diya jayega.
              </p>
              <button
                onClick={() => { setIsSubmitted(false); setEmail(""); }}
                className="px-6 py-2 rounded-lg bg-white/10 border border-white/20 text-white hover:bg-white/20 transition-all"
              >
                Back
              </button>
            </div>
          ) : (
            <form onSubmit={handleWithdraw} className="space-y-6">
              <div className="bg-yellow-500/10 border border-yellow-500/30 rounded-xl p-5 mb-6">
                <div className="flex items-start gap-3">
                  <AlertTriangle className="w-5 h-5 text-yellow-400 mt-0.5 flex-shrink-0" />
                  <p className="text-sm text-yellow-200">
                    Warning: Withdrawing consent will stop all processing of your personal data. However, this will not affect the lawfulness of processing based on consent before its withdrawal.
                  </p>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-white mb-2">
                  Enter your Email Address *
                </label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@company.com"
                  required
                  className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/20 text-white placeholder-gray-500 focus:outline-none focus:border-purple-400/50"
                />
              </div>

              <button
                type="submit"
                disabled={isLoading || !email}
                className="w-full py-3 rounded-xl bg-gradient-to-r from-red-500 to-pink-500 text-white font-semibold hover:scale-[1.02] transition-all flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
              >
                {isLoading ? (
                  "Processing..."
                ) : (
                  <>
                    <Trash2 className="w-5 h-5" />
                    Withdraw Consent
                  </>
                )}
              </button>
            </form>
          )}

          <div className="mt-8 pt-6 border-t border-white/20 text-center">
            <p className="text-sm text-gray-400">
              Need help? Contact our Grievance Officer at{" "}
              <a href="mailto:grievance@businezexcellence.com" className="text-purple-400 underline">
                grievance@businezexcellence.com
              </a>
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}