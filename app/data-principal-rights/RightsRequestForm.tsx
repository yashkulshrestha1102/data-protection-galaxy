// app/data-principal-rights/RightsRequestForm.tsx
"use client";

import { useState } from "react";
import { Loader2, Send, CheckCircle } from "lucide-react";
import { ConsentCheckbox } from "@/components/ui/ConsentCheckbox";

export default function RightsRequestForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    rightType: "",
    details: "",
  });
  const [consent, setConsent] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    if (error) setError(null);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!consent) {
      setError("Please agree to the Consent Notice to proceed.");
      return;
    }

    setIsSubmitting(true);
    setError(null);

    try {
      const response = await fetch('/api/lead-capture', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...formData,
          source: 'rights_request',
          consent: consent,
          consentTimestamp: new Date().toISOString(),
        }),
      });

      if (response.ok) {
        setIsSubmitted(true);
        setFormData({ name: "", email: "", rightType: "", details: "" });
        setConsent(false);
      } else {
        throw new Error("Failed");
      }
    } catch (err) {
      setError("Something went wrong. Please try again.");
    }
    setIsSubmitting(false);
  };

  if (isSubmitted) {
    return (
      <div className="bg-emerald-500/10 border border-emerald-500/30 rounded-xl p-8 text-center">
        <CheckCircle className="w-12 h-12 text-emerald-400 mx-auto mb-4" />
        <h3 className="text-xl font-semibold text-white mb-2">Request Submitted!</h3>
        <p className="text-gray-300 text-sm mb-4">
          We have received your data rights request. Our team will acknowledge it within 48 hours and respond within 30 days.
        </p>
        <button
          onClick={() => setIsSubmitted(false)}
          className="px-6 py-2 rounded-xl bg-white/10 border border-white/20 text-white text-sm hover:bg-white/20 transition-all"
        >
          Submit Another Request
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <h2 className="text-xl font-semibold text-white mb-2">Submit Your Request</h2>
      
      {error && (
        <div className="p-3 rounded-xl bg-red-500/20 border border-red-500/40 text-red-400 text-sm">
          {error}
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div>
          <label className="block text-sm text-gray-300 mb-1">Full Name *</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            placeholder="Your full name"
            className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/20 text-white placeholder-gray-500 focus:outline-none focus:border-purple-400/50"
          />
        </div>
        <div>
          <label className="block text-sm text-gray-300 mb-1">Email Address *</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            placeholder="you@example.com"
            className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/20 text-white placeholder-gray-500 focus:outline-none focus:border-purple-400/50"
          />
        </div>
      </div>

      <div>
        <label className="block text-sm text-gray-300 mb-1">Type of Request *</label>
        <select
          name="rightType"
          value={formData.rightType}
          onChange={handleChange}
          required
          className="w-full px-4 py-3 rounded-xl bg-black/50 border border-white/20 text-white focus:outline-none focus:border-purple-400/50"
        >
          <option value="">Select a right...</option>
          <option value="Access">Right to Access (Get a copy of my data)</option>
          <option value="Correction">Right to Correction (Update my data)</option>
          <option value="Erasure">Right to Erasure (Delete my data)</option>
          <option value="Withdraw Consent">Right to Withdraw Consent</option>
        </select>
      </div>

      <div>
        <label className="block text-sm text-gray-300 mb-1">Details / Explanation *</label>
        <textarea
          name="details"
          value={formData.details}
          onChange={handleChange}
          required
          rows={4}
          placeholder="Please provide details about your request (e.g., which data you want deleted, what needs correction, etc.)"
          className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/20 text-white placeholder-gray-500 focus:outline-none focus:border-purple-400/50 resize-none"
        />
      </div>

      <ConsentCheckbox
        id="rights-consent"
        checked={consent}
        onChange={(val) => {
          setConsent(val);
          if (error) setError(null);
        }}
        error={error || undefined}
      />

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full py-3 rounded-xl bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold hover:scale-[1.02] transition-all flex items-center justify-center gap-2 disabled:opacity-70 disabled:hover:scale-100"
      >
        {isSubmitting ? (
          <><Loader2 className="w-5 h-5 animate-spin" /> Submitting...</>
        ) : (
          <><Send className="w-5 h-5" /> Submit Request</>
        )}
      </button>
    </form>
  );
}