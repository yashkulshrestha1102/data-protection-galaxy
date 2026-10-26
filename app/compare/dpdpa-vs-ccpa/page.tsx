import Link from "next/link";
import { ArrowLeft, Scale, CheckCircle } from "lucide-react";

export const metadata = {
  title: "DPDPA vs CCPA (CPRA): Key Differences Explained | Legal Galaxy",
  description: "Compare India's DPDP Act 2023 vs California's CCPA/CPRA. Learn about differences in consumer rights, opt-out mechanisms, penalties, and business obligations.",
};

const faqs = [
  {
    q: "What is the main difference between DPDPA and CCPA?",
    a: "The main difference is the opt-out vs opt-in approach. CCPA gives consumers the right to opt-out of the 'sale' or 'sharing' of their personal data. DPDPA is based primarily on explicit, opt-in consent before processing begins."
  },
  {
    q: "Which law has higher penalties: DPDPA or CCPA?",
    a: "CCPA fines are up to $2,500 per violation or $7,500 for intentional violations, which can add up to millions in data breaches. DPDPA imposes fixed maximum penalties per incident, reaching up to ₹250 crore (approx $30 million)."
  },
  {
    q: "Does CCPA require data localisation?",
    a: "No, CCPA does not require data localisation. However, specific federal sectoral laws in the US (like HIPAA for healthcare) have strict residency requirements. DPDPA also does not mandate general localisation but allows the government to restrict transfers."
  }
];

export default function DpdpaVsCcpaPage() {
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
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-emerald-500/10 rounded-full blur-3xl" />
        </div>

        <div className="max-w-4xl mx-auto relative z-10">
          <Link href="/compare" className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors mb-8 group">
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            Back to Comparisons
          </Link>

          {/* Hero */}
          <div className="mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              DPDPA vs CCPA: Key Differences
            </h1>
            <p className="text-lg text-gray-300">
              A complete comparison of India's Digital Personal Data Protection Act 2023 and California's Consumer Privacy Act (CCPA/CPRA).
            </p>
          </div>

          {/* Quick Answers (GEO Optimized) */}
          <div className="bg-white/5 border border-white/10 rounded-2xl p-6 md:p-8 mb-10">
            <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
              <Scale className="w-6 h-6 text-emerald-400" /> Quick Answers
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
                    <th className="py-3 px-4 text-orange-400 font-semibold text-sm">DPDPA (India)</th>
                    <th className="py-3 px-4 text-emerald-400 font-semibold text-sm">CCPA (California)</th>
                  </tr>
                </thead>
                <tbody className="text-sm">
                  <tr className="border-b border-white/5 hover:bg-white/5">
                    <td className="py-3 px-4 font-medium text-gray-300">Legal Basis</td>
                    <td className="py-3 px-4 text-white">Opt-in (Consent)</td>
                    <td className="py-3 px-4 text-gray-300">Opt-out (Right to stop sale)</td>
                  </tr>
                  <tr className="border-b border-white/5 hover:bg-white/5">
                    <td className="py-3 px-4 font-medium text-gray-300">Term for Individual</td>
                    <td className="py-3 px-4 text-white">Data Principal</td>
                    <td className="py-3 px-4 text-gray-300">Consumer</td>
                  </tr>
                  <tr className="border-b border-white/5 hover:bg-white/5">
                    <td className="py-3 px-4 font-medium text-gray-300">Data Localisation</td>
                    <td className="py-3 px-4 text-white">Allowed by default, restricted list</td>
                    <td className="py-3 px-4 text-gray-300">No general mandate</td>
                  </tr>
                  <tr className="border-b border-white/5 hover:bg-white/5">
                    <td className="py-3 px-4 font-medium text-gray-300">Max Penalty</td>
                    <td className="py-3 px-4 text-white">₹250 Crore</td>
                    <td className="py-3 px-4 text-gray-300">$7,500 per violation</td>
                  </tr>
                  <tr className="hover:bg-white/5">
                    <td className="py-3 px-4 font-medium text-gray-300">Sensitive Data</td>
                    <td className="py-3 px-4 text-white">Additional safeguards for children</td>
                    <td className="py-3 px-4 text-gray-300">Right to limit use of sensitive data</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* CTA */}
          <div className="bg-gradient-to-r from-orange-500/20 to-emerald-500/20 border border-orange-500/30 rounded-2xl p-8 text-center">
            <h2 className="text-2xl font-bold text-white mb-3">Operating in both India and the US?</h2>
            <p className="text-gray-300 mb-6">Our experts can help you build a unified compliance framework that satisfies both DPDPA and CCPA.</p>
            <Link href="/contact" className="px-6 py-3 rounded-xl bg-white text-black font-semibold hover:scale-105 transition-all inline-block">
              Talk to an Expert →
            </Link>
          </div>
        </div>
      </main>
    </>
  );
}
