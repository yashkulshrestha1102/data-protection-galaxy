import Link from 'next/link';
import { ArrowLeft, ChevronDown } from 'lucide-react';
import { DPDPA_FAQS } from '@/data/faqs';

export default function FAQsPage() {
  return (
    <main className="min-h-screen text-white px-4 pt-28 md:pt-32 pb-16 relative overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-cover bg-center bg-no-repeat" style={{ backgroundImage: "url('/images/home1.jpeg')" }}>
          <div className="absolute inset-0 bg-black/60 backdrop-blur-[2px]" />
        </div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-cyan-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      <div className="max-w-4xl mx-auto relative z-10">
        <Link href="/resources" className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors mb-6 group">
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          Back to Resources
        </Link>

        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Frequently Asked Questions</h1>
        <p className="text-gray-300 text-lg max-w-3xl mb-12">Frequently asked questions about the DPDP Act 2023.</p>

        <div className="space-y-4">
          {DPDPA_FAQS.map((faq) => (
            <details key={faq.q} className="group bg-white/10 border border-white/20 rounded-2xl backdrop-blur-sm overflow-hidden">
              <summary className="w-full px-6 py-4 flex items-center justify-between text-left hover:bg-white/5 transition-colors cursor-pointer list-none">
                <h2 className="text-lg font-medium text-white">{faq.q}</h2>
                <ChevronDown className="w-5 h-5 text-gray-400 flex-shrink-0 ml-4 group-open:rotate-180 transition-transform" />
              </summary>
              <div className="px-6 pb-4">
                <p className="text-gray-300 leading-relaxed">{faq.a}</p>
              </div>
            </details>
          ))}
        </div>
      </div>
    </main>
  );
}