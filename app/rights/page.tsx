import Link from 'next/link';
import { ArrowLeft, CheckCircle, Shield, Users, Globe, Database, FileText, Scale, Building, BookOpen, ArrowRight } from 'lucide-react';

export const metadata = {
  title: 'Rights of Data Principals under DPDP Act 2023 | Legal Galaxy',
  description: 'Understand your fundamental rights as a Data Principal under India\'s DPDP Act 2023. Learn about the right to access, correction, erasure, grievance redressal, and nomination.',
};

export default function RightsPage() {
  const rights = [
    {
      icon: Users,
      title: 'Right to Access Information',
      subtitle: 'Know exactly what data is being collected about you.',
      description: 'Under Section 11 of the DPDP Act, every individual has the right to request a summary of their personal data being processed by a Data Fiduciary. You can ask for the specific purposes of processing, the categories of data involved, and the identities of any other entities with whom your data has been shared. This ensures complete transparency.',
    },
    {
      icon: CheckCircle,
      title: 'Right to Correction and Erasure',
      subtitle: 'Correct inaccuracies or request deletion.',
      description: 'You have the legal right to request the correction of inaccurate, misleading, or incomplete personal data. Furthermore, you can demand the erasure of your data (Right to be Forgotten) once the purpose of collection is fulfilled, or if you withdraw your consent, unless retention is mandated by law.',
    },
    {
      icon: FileText,
      title: 'Right to Grievance Redressal',
      subtitle: 'A readily available mechanism to file complaints.',
      description: 'Section 13 mandates that every Data Fiduciary must provide an easily accessible grievance redressal mechanism. If an organisation fails to resolve your complaint within a reasonable timeframe, you have the right to escalate the matter directly to the Data Protection Board of India (DPBI).',
    },
    {
      icon: Globe,
      title: 'Right to Data Portability',
      subtitle: 'Transfer your data seamlessly.',
      description: 'As a Data Principal, you have the right to receive your personal data in a structured, commonly used, and machine-readable format. This allows you to seamlessly transfer your data from one Data Fiduciary to another without any technological hindrances.',
    },
    {
      icon: Shield,
      title: 'Right to Nominate',
      subtitle: 'Appoint a representative for your digital rights.',
      description: 'In the unfortunate event of death or incapacity, you have the right to nominate another individual to exercise your rights on your behalf. This ensures that your digital legacy and privacy preferences are legally respected even in your absence.',
    },
    {
      icon: Database,
      title: 'Right to Withdraw Consent',
      subtitle: 'You are in control of your consent.',
      description: 'If your data is being processed based on your consent, you retain the absolute right to withdraw it at any time. Once withdrawn, the Data Fiduciary must cease processing your data immediately. The process to withdraw consent must be as easy as it was to give it.',
    },
  ];

  return (
    <main className="min-h-screen text-white px-4 pt-28 md:pt-32 pb-16 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-cover bg-center bg-no-repeat" style={{ backgroundImage: "url('/images/home1.jpeg')" }}>
          <div className="absolute inset-0 bg-black/70 backdrop-blur-[2px]" />
        </div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-pink-500/10 rounded-full blur-3xl animate-pulse delay-2000" />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <Link href="/galaxy" className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors mb-6 group">
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          Back to Galaxy
        </Link>

        {/* ===== HEADER SECTION ===== */}
        <div className="max-w-4xl mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
            Rights of Data Principals under the <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">DPDP Act 2023</span>
          </h1>
          <p className="text-lg text-gray-300 leading-relaxed">
            The Digital Personal Data Protection Act, 2023 has fundamentally changed how Indian citizens interact with their digital data. As a <strong>Data Principal</strong>, you are no longer just a passive user; you are the legal owner of your data. The Act grants you six powerful, enforceable rights against any organization (Data Fiduciary) processing your information.
          </p>
          <p className="text-gray-400 mt-4">
            Here is a practical breakdown of these rights and how they protect you in the real world.
          </p>
        </div>

        {/* ===== RIGHTS GRID ===== */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          {rights.map((right, index) => {
            const Icon = right.icon;
            return (
              <div key={index} className="bg-white/5 border border-white/10 rounded-2xl p-8 backdrop-blur-md hover:bg-white/10 transition-all duration-300 flex flex-col h-full">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500/20 to-purple-500/20 flex items-center justify-center flex-shrink-0 border border-blue-500/30">
                    <Icon className="w-6 h-6 text-blue-400" />
                  </div>
                  <h3 className="text-xl font-semibold text-white">{right.title}</h3>
                </div>
                
                <p className="text-sm text-blue-300 font-medium mb-3">{right.subtitle}</p>
                <p className="text-sm text-gray-300 leading-7 flex-grow">{right.description}</p>
              </div>
            );
          })}
        </div>

        {/* ===== INTERNAL LINKING / CTA SECTION ===== */}
        <div className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20 rounded-2xl p-8 md:p-12 mb-12">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
            <div className="flex-1">
              <h2 className="text-2xl font-bold text-white mb-3">Are you a business owner?</h2>
              <p className="text-gray-300 leading-relaxed text-sm">
                As a Data Fiduciary, the law requires you to build systems that respect these rights. Failure to provide these rights to your users can lead to heavy penalties. Ensure your organization is fully compliant.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto flex-shrink-0">
              <Link
                href="/scorecard"
                className="px-6 py-3 rounded-xl bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold hover:scale-105 transition-all text-center text-sm"
              >
                Test Your Compliance
              </Link>
              <Link
                href="/resources/guides/dpdpa-2023-complete-guide"
                className="px-6 py-3 rounded-xl bg-white/10 border border-white/20 text-white font-semibold hover:bg-white/20 transition-all text-center text-sm flex items-center justify-center gap-2"
              >
                Read the Guide <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>

        {/* ===== READ MORE SECTION ===== */}
        <div className="border-t border-white/10 pt-8">
          <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
            <BookOpen className="w-5 h-5 text-purple-400" />
            Related Topics on Data Protection
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <Link href="/obligations" className="bg-white/5 hover:bg-white/10 border border-white/10 p-4 rounded-xl transition-all group">
              <h4 className="text-sm font-medium text-white group-hover:text-purple-400 transition-colors">Obligations of Fiduciaries</h4>
              <p className="text-xs text-gray-400 mt-1">Learn what the law expects from businesses.</p>
            </Link>
            <Link href="/board" className="bg-white/5 hover:bg-white/10 border border-white/10 p-4 rounded-xl transition-all group">
              <h4 className="text-sm font-medium text-white group-hover:text-purple-400 transition-colors">Data Protection Board</h4>
              <p className="text-xs text-gray-400 mt-1">Where you can escalate unresolved complaints.</p>
            </Link>
            <Link href="/insight/data-subject-rights-guide" className="bg-white/5 hover:bg-white/10 border border-white/10 p-4 rounded-xl transition-all group">
              <h4 className="text-sm font-medium text-white group-hover:text-purple-400 transition-colors">Data Rights Insights</h4>
              <p className="text-xs text-gray-400 mt-1">Deep dive into how to enforce your rights.</p>
            </Link>
          </div>
        </div>

      </div>
    </main>
  );
}