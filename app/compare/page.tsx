// app/compare/page.tsx
import Link from "next/link";
import { ArrowLeft, Scale, ArrowRight } from "lucide-react";

export const metadata = {
  title: "Compare Global Data Protection Laws | Legal Galaxy",
  description: "Compare India's DPDP Act 2023 with GDPR, CCPA, and other global privacy laws. Understand key differences in consent, penalties, and data subject rights.",
};

const comparisons = [
  {
    title: "DPDPA vs GDPR",
    desc: "Compare India's DPDP Act 2023 with the EU's GDPR. Understand differences in scope, consent, rights, and penalties.",
    href: "/compare/dpdpa-vs-gdpr",
    tag: "Most Popular"
  },
  {
    title: "DPDPA vs CCPA / CPRA",
    desc: "Compare India's DPDP Act with California's consumer privacy law.",
    href: "/compare/dpdpa-vs-ccpa",
    tag: "US Laws"
  },
  {
    title: "DPDPA vs PIPL (China)",
    desc: "Compare India's data protection law with China's strict data localisation framework.",
    href: "/compare/dpdpa-vs-pipl",
    tag: "Asia"
  }
];

export default function CompareHubPage() {
  return (
    <main className="min-h-screen text-white px-4 pt-28 md:pt-32 pb-16 relative overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-[#0a0a0a]">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-blue-500/10 rounded-full blur-3xl" />
      </div>

      <div className="max-w-4xl mx-auto relative z-10">
        <Link href="/" className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors mb-8 group">
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          Back to Home
        </Link>

        <div className="mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/20 border border-blue-500/30 text-xs font-medium text-blue-300 mb-4">
            <Scale className="w-3 h-3" /> Global Comparisons
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Compare Privacy Laws</h1>
          <p className="text-lg text-gray-300">
            Understand the key differences between India's DPDP Act and other global data protection frameworks.
          </p>
        </div>

        <div className="grid gap-4">
          {comparisons.map((comp, i) => (
            <Link 
              key={i} 
              href={comp.href}
              className="group bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all flex items-center justify-between"
            >
              <div>
                <div className="flex items-center gap-3 mb-2">
                  <h2 className="text-xl font-semibold text-white group-hover:text-blue-400 transition-colors">
                    {comp.title}
                  </h2>
                  <span className="text-[10px] px-2 py-0.5 rounded-full bg-blue-500/20 text-blue-300 border border-blue-500/30">
                    {comp.tag}
                  </span>
                </div>
                <p className="text-sm text-gray-400">{comp.desc}</p>
              </div>
              <ArrowRight className="w-5 h-5 text-gray-500 group-hover:text-blue-400 group-hover:translate-x-1 transition-all" />
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
