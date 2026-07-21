import Link from 'next/link';
import { ArrowLeft, AlertTriangle, Shield, AlertCircle, FileText, Scale } from 'lucide-react';

export const metadata = {
  title: 'Penalties & Offences | DPDP Act 2023',
  description: 'Learn about penalties and offences under India\'s Digital Personal Data Protection Act 2023. Non-compliance can lead to significant penalties.',
};

export default function PenaltiesPage() {
  const items = [
    { icon: AlertTriangle, title: 'Non-Compliance', description: 'Non-compliance with DPDP Act provisions can lead to penalties up to ₹250 crore.' },
    { icon: Shield, title: 'Data Breach', description: 'Failure to prevent data breach or notify the Board can result in significant penalties.' },
    { icon: AlertCircle, title: 'Notice Requirements', description: 'Failure to provide proper notice and obtain consent can lead to penalties.' },
    { icon: FileText, title: 'Record Keeping', description: 'Failure to maintain records of data processing activities can result in penalties.' },
    { icon: Scale, title: 'Enforcement', description: 'The Data Protection Board has the power to impose penalties and issue directions.' },
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

        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Penalties & Offences</h1>
        <p className="text-gray-300 text-lg max-w-3xl mb-12">Non-compliance can lead to significant penalties under the DPDP Act 2023.</p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {items.map((item, index) => {
            const Icon = item.icon;
            return (
              <div key={index} className="bg-white/10 border border-white/20 rounded-2xl backdrop-blur-sm p-6 hover:bg-white/20 transition-all hover:scale-105">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-red-500 to-red-600 flex items-center justify-center mb-4">
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