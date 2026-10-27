// app/data-principal-rights/page.tsx

import Link from "next/link";
import { ArrowLeft, Shield, CheckCircle, Mail, AlertCircle } from "lucide-react";
import RightsRequestForm from "./RightsRequestForm";

export const metadata = {
  title: "Data Principal Rights Request | Legal Galaxy",
  description:
    "Exercise your data rights under the DPDP Act 2023. Request access, correction, or erasure of your personal data.",
  alternates: { canonical: "/data-principal-rights" },
};

export default function DataPrincipalRightsPage() {
  return (
    <main className="min-h-screen text-white px-4 pt-28 md:pt-32 pb-16 relative overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-cover bg-center bg-no-repeat" style={{ backgroundImage: "url('/images/home1.jpeg')" }}>
        <div className="absolute inset-0 bg-black/70 backdrop-blur-[2px]" />
      </div>

      <div className="max-w-4xl mx-auto relative z-10">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors mb-6 group"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          Back to Home
        </Link>

        <div className="bg-white/10 border border-white/20 rounded-2xl backdrop-blur-md p-8">
          <div className="flex items-center gap-3 mb-6">
            <Shield className="w-8 h-8 text-purple-400" />
            <h1 className="text-3xl font-bold text-white">Data Principal Rights</h1>
          </div>

          <p className="text-gray-300 text-sm leading-relaxed mb-8">
            Under the <strong className="text-white">Digital Personal Data Protection Act, 2023</strong>, you have specific rights regarding your personal data. You can use this page to submit a formal request to Legal Galaxy to exercise those rights.
          </p>

          <div className="space-y-6 mb-10">
            <div className="bg-white/5 border border-white/10 rounded-xl p-5">
              <h2 className="text-xl font-semibold text-white mb-3">Your Rights</h2>
              <ul className="space-y-3">
                <li className="flex items-start gap-2 text-sm text-gray-300">
                  <CheckCircle className="w-4 h-4 text-emerald-400 mt-0.5 flex-shrink-0" />
                  <span><strong className="text-white">Right to Access:</strong> Request a summary of the personal data we hold about you.</span>
                </li>
                <li className="flex items-start gap-2 text-sm text-gray-300">
                  <CheckCircle className="w-4 h-4 text-emerald-400 mt-0.5 flex-shrink-0" />
                  <span><strong className="text-white">Right to Correction:</strong> Request correction of inaccurate or incomplete data.</span>
                </li>
                <li className="flex items-start gap-2 text-sm text-gray-300">
                  <CheckCircle className="w-4 h-4 text-emerald-400 mt-0.5 flex-shrink-0" />
                  <span><strong className="text-white">Right to Erasure:</strong> Request deletion of your data (subject to legal requirements).</span>
                </li>
                <li className="flex items-start gap-2 text-sm text-gray-300">
                  <CheckCircle className="w-4 h-4 text-emerald-400 mt-0.5 flex-shrink-0" />
                  <span><strong className="text-white">Right to Withdraw Consent:</strong> Withdraw your consent at any time (as per our Consent Notice).</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Client Form Component */}
          <RightsRequestForm />
          
          <div className="mt-8 pt-6 border-t border-white/10 text-xs text-gray-500">
            <p className="flex items-center gap-2">
              <Mail className="w-4 h-4" />
              If you face any issues, email us directly at{" "}
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