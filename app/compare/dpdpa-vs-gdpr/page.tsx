// app/compare/dpdpa-vs-gdpr/page.tsx
import Link from "next/link";
import { ArrowLeft, Scale, CheckCircle, AlertTriangle } from "lucide-react";

export const metadata = {
  title: "DPDPA vs GDPR: Key Differences Explained | Legal Galaxy",
  description: "Compare India's DPDP Act 2023 vs EU's GDPR. Learn about differences in consent, penalties, data subject rights, cross-border transfers, and DPO requirements.",
};

const faqs = [
  {
    q: "What is the main difference between DPDPA and GDPR?",
    a: "The main difference is their approach to legal bases and data transfers. GDPR has 6 lawful bases (including legitimate interests) and uses an 'adequacy' model for data transfers. DPDPA has only 2 lawful bases (consent and specific legitimate uses) and uses a 'blacklist' model for transfers, allowing them by default unless restricted."
  },
  {
    q: "Which law has higher penalties: DPDPA or GDPR?",
    a: "GDPR penalties scale with company size, reaching up to €20 million or 4% of global annual turnover. DPDPA penalties are fixed amounts, reaching up to ₹250 crore (approx $30 million). For large multinationals, GDPR fines are higher; for smaller businesses, DPDPA penalties can be equally severe."
  },
  {
    q: "Is a DPO required under both DPDPA and GDPR?",
    a: "No. Under GDPR, a DPO is mandatory for public authorities and organizations doing large-scale monitoring or processing sensitive data. Under DPDPA, a DPO is mandatory only for entities notified as Significant Data Fiduciaries (SDFs) by the government."
  }
];

export default function DpdpaVsGdprPage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map(faq => ({
      "@type": "Question",
      name: faq.q,
      acceptedAnswer: { "@type": "Answer", text: faq.a }
    }))
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      
      <main className="min-h-screen text-white px-4 pt-28 md:pt-32 pb-16 relative overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-[#0a0a0a]">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-purple-500/10 rounded-full blur-3xl" />
        </div>

        <div className="max-w-4xl mx-auto relative z-10">
          <Link href="/compare" className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors mb-8 group">
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            Back to Comparisons
          </Link>

          {/* Hero */}
          <div className="mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              DPDPA vs GDPR: Key Differences
            </h1>
            <p className="text-lg text-gray-300">
              A complete comparison of India's Digital Personal Data Protection Act 2023 and the European Union's General Data Protection Regulation.
            </p>
          </div>

          {/* Quick Answers (GEO Optimized) */}
          <div className="bg-white/5 border border-white/10 rounded-2xl p-6 md:p-8 mb-10">
            <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
              <Scale className="w-6 h-6 text-purple-400" /> Quick Answers
            </h2>
            <div className="space-y-4">
              {faqs.map((faq, i) => (
                <div key={i} className="bg-black/30 rounded-xl p-5 border border-white/5">
                  <h3 className="text-white font-semibold mb-2">{faq.q}</h3>
                  <p className="text-sm text-gray-300 leading-relaxed">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Comparison Table */}
          <div className="bg-white/5 border border-white/10 rounded-2xl p-6 md:p-8 mb-10 overflow-hidden">
            <h2 className="text-2xl font-bold text-white mb-6">Detailed Comparison</h2>
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="border-b border-white/10">
                    <th className="py-3 px-4 text-gray-400 font-semibold text-sm">Feature</th>
                    <th className="py-3 px-4 text-purple-400 font-semibold text-sm">DPDPA (India)</th>
                    <th className="py-3 px-4 text-blue-400 font-semibold text-sm">GDPR (EU)</th>
                  </tr>
                </thead>
                <tbody className="text-sm">
                  <tr className="border-b border-white/5 hover:bg-white/5">
                    <td className="py-3 px-4 font-medium text-gray-300">Term for Individual</td>
                    <td className="py-3 px-4 text-white">Data Principal</td>
                    <td className="py-3 px-4 text-gray-300">Data Subject</td>
                  </tr>
                  <tr className="border-b border-white/5 hover:bg-white/5">
                    <td className="py-3 px-4 font-medium text-gray-300">Term for Company</td>
                    <td className="py-3 px-4 text-white">Data Fiduciary</td>
                    <td className="py-3 px-4 text-gray-300">Data Controller</td>
                  </tr>
                  <tr className="border-b border-white/5 hover:bg-white/5">
                    <td className="py-3 px-4 font-medium text-gray-300">Lawful Bases</td>
                    <td className="py-3 px-4 text-white">2 (Consent & Legitimate Uses)</td>
                    <td className="py-3 px-4 text-gray-300">6 (including Legitimate Interests)</td>
                  </tr>
                  <tr className="border-b border-white/5 hover:bg-white/5">
                    <td className="py-3 px-4 font-medium text-gray-300">Cross-Border Transfer</td>
                    <td className="py-3 px-4 text-white">Blacklist (Allowed unless restricted)</td>
                    <td className="py-3 px-4 text-gray-300">Whitelist (Adequacy required)</td>
                  </tr>
                  <tr className="border-b border-white/5 hover:bg-white/5">
                    <td className="py-3 px-4 font-medium text-gray-300">Max Penalty</td>
                    <td className="py-3 px-4 text-white">₹250 Crore (Fixed)</td>
                    <td className="py-3 px-4 text-gray-300">€20M or 4% of turnover</td>
                  </tr>
                  <tr className="hover:bg-white/5">
                    <td className="py-3 px-4 font-medium text-gray-300">DPO Requirement</td>
                    <td className="py-3 px-4 text-white">Only for SDFs</td>
                    <td className="py-3 px-4 text-gray-300">Broad requirement for public/high-risk</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* CTA */}
          <div className="bg-gradient-to-r from-purple-500/20 to-blue-500/20 border border-purple-500/30 rounded-2xl p-8 text-center">
            <h2 className="text-2xl font-bold text-white mb-3">Need help with multi-jurisdictional compliance?</h2>
            <p className="text-gray-300 mb-6">Our experts can help you build a unified privacy program that covers both DPDPA and GDPR.</p>
            <Link href="/contact" className="px-6 py-3 rounded-xl bg-white text-black font-semibold hover:scale-105 transition-all inline-block">
              Talk to an Expert →
            </Link>
          </div>
        </div>
      </main>
    </>
  );
}
