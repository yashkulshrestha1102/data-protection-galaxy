import Link from 'next/link';
import { ArrowLeft, BookOpen, Users, Shield, Building, AlertTriangle, Globe } from 'lucide-react';

export const metadata = {
  title: 'Key Provisions Overview | DPDP Act 2023',
  description: 'Overview of key provisions under India\'s Digital Personal Data Protection Act 2023. Preliminary, rights, obligations, board, penalties, and cross-border transfers.',
};

export default function ProvisionsPage() {
  const chapters = [
    { icon: BookOpen, title: 'Chapter I: Preliminary', description: 'Short title, extent, commencement, and definitions.' },
    { icon: Users, title: 'Chapter II: Rights of Data Principals', description: 'Rights of individuals to access, correct, erase, and port their data.' },
    { icon: Shield, title: 'Chapter III: Obligations of Data Fiduciaries', description: 'Obligations of data fiduciaries, including notice, consent, and security.' },
    { icon: Building, title: 'Chapter IV: Data Protection Board', description: 'Establishment, composition, functions, and powers of the Board.' },
    { icon: AlertTriangle, title: 'Chapter V: Penalties & Offences', description: 'Penalties for non-compliance and offences under the Act.' },
    { icon: Globe, title: 'Chapter VI: Cross Border Transfer', description: 'Provisions for transfer of personal data outside India.' },
  ];

  return (
    <main className="min-h-screen text-white px-4 pt-28 md:pt-32 pb-16 relative overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-cover bg-center bg-no-repeat" style={{ backgroundImage: "url('/images/home1.jpeg')" }}>
          <div className="absolute inset-0 bg-black/60 backdrop-blur-[2px]" />
        </div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-purple-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-pink-500/10 rounded-full blur-3xl animate-pulse delay-2000" />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <Link href="/galaxy" className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors mb-6 group">
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          Back to Galaxy
        </Link>

        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Key Provisions Overview</h1>
        <p className="text-gray-300 text-lg max-w-3xl mb-12">Important sections of the Data Protection Act, 2023 at a glance.</p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {chapters.map((item, index) => {
            const Icon = item.icon;
            return (
              <div key={index} className="bg-white/10 border border-white/20 rounded-2xl backdrop-blur-sm p-6 hover:bg-white/20 transition-all hover:scale-105">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-pink-500 to-rose-600 flex items-center justify-center mb-4">
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{item.title}</h3>
                <p className="text-gray-300 text-sm leading-relaxed">{item.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </main>
  );
}