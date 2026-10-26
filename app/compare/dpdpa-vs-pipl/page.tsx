import Link from "next/link";
import { ArrowLeft, Scale } from "lucide-react";

export const metadata = {
  title: "DPDPA vs PIPL (China): Key Differences Explained | Legal Galaxy",
  description: "Compare India's DPDP Act 2023 vs China's Personal Information Protection Law (PIPL). Learn about differences in data localisation, cross-border transfers, penalties, and regulatory authorities.",
};

const faqs = [
  {
    q: "What is the main difference between DPDPA and PIPL?",
    a: "The main difference is their approach to cross-border data transfers and localisation. China's PIPL imposes strict data localisation and security assessments for transferring data outside China. India's DPDPA allows cross-border transfers by default unless the government restricts specific countries (a blacklist approach)."
  },
  {
    q: "Which law has higher penalties: DPDPA or PIPL?",
    a: "Both have severe penalties. India's DPDPA has fixed maximum penalties up to ₹250 crore. China's PIPL can impose fines up to RMB 50 million or 5% of the previous year's turnover, and in severe cases, the responsible individuals can also face personal fines and business suspension."
  },
  {
    q: "How do the regulatory bodies differ?",
    a: "India's DPDPA is enforced by the Data Protection Board of India (DPBI), a newly established quasi-judicial body. China's PIPL is enforced by multiple authorities, including the Cyberspace Administration of China (CAC), the State Council departments, and local cyberspace authorities."
  }
];

export default function DpdpaVsPiplPage() {
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
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-red-500/10 rounded-full blur-3xl" />
        </div>

        <div className="max-w-4xl mx-auto relative z-10">
          <Link href="/compare" className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors mb-8 group">
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            Back to Comparisons
          </Link>

          {/* Hero */}
          <div className="mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              DPDPA vs PIPL: Key Differences
            </h1>
            <p className="text-lg text-gray-300">
              A complete comparison of India's Digital Personal Data Protection Act 2023 and China's Personal Information Protection Law (PIPL).
            </p>
          </div>

          {/* Quick Answers (GEO Optimized) */}
          <div className="bg-white/5 border border-white/10 rounded-2xl p-6 md:p-8 mb-10">
            <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
              <Scale className="w-6 h-6 text-red-400" /> Quick Answers
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
                    <th className="py-3 px-4 text-red-400 font-semibold text-sm">PIPL (China)</th>
                  </tr>
                </thead>
                <tbody className="text-sm">
                  <tr className="border-b border-white/5 hover:bg-white/5">
                    <td className="py-3 px-4 font-medium text-gray-300">Cross-Border Transfer</td>
                    <td className="py-3 px-4 text-white">Allowed unless restricted (Blacklist)</td>
                    <td className="py-3 px-4 text-gray-300">Strict security assessments/localisation</td>
                  </tr>
                  <tr className="border-b border-white/5 hover:bg-white/5">
                    <td className="py-3 px-4 font-medium text-gray-300">Term for Individual</td>
                    <td className="py-3 px-4 text-white">Data Principal</td>
                    <td className="py-3 px-4 text-gray-300">Individual / Data Subject</td>
                  </tr>
                  <tr className="border-b border-white/5 hover:bg-white/5">
                    <td className="py-3 px-4 font-medium text-gray-300">Data Localisation</td>
                    <td className="py-3 px-4 text-white">Sector-specific only</td>
                    <td className="py-3 px-4 text-gray-300">Broad localisation for important data</td>
                  </tr>
                  <tr className="border-b border-white/5 hover:bg-white/5">
                    <td className="py-3 px-4 font-medium text-gray-300">Max Penalty</td>
                    <td className="py-3 px-4 text-white">₹250 Crore</td>
                    <td className="py-3 px-4 text-gray-300">RMB 50M or 5% of turnover</td>
                  </tr>
                  <tr className="hover:bg-white/5">
                    <td className="py-3 px-4 font-medium text-gray-300">Regulator</td>
                    <td className="py-3 px-4 text-white">Data Protection Board of India</td>
                    <td className="py-3 px-4 text-gray-300">CAC & multiple other authorities</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* CTA */}
          <div className="bg-gradient-to-r from-orange-500/20 to-red-500/20 border border-red-500/30 rounded-2xl p-8 text-center">
            <h2 className="text-2xl font-bold text-white mb-3">Operating in both India and China?</h2>
            <p className="text-gray-300 mb-6">Our experts can help you navigate the strict data localisation and transfer requirements of both DPDPA and PIPL.</p>
            <Link href="/contact" className="px-6 py-3 rounded-xl bg-white text-black font-semibold hover:scale-105 transition-all inline-block">
              Talk to an Expert →
            </Link>
          </div>
        </div>
      </main>
    </>
  );
}
