import Link from 'next/link';
import { ArrowLeft, Shield, CheckCircle, Database, Globe, AlertTriangle, FileText, Scale } from 'lucide-react';

export const metadata = {
  title: 'Obligations of Data Fiduciaries | DPDP Act 2023',
  description: 'Learn about the obligations of data fiduciaries under India\'s Digital Personal Data Protection Act 2023. Lawfulness, fairness, transparency, and accountability.',
};

export default function ObligationsPage() {
  const obligations = [
    { icon: Shield, title: 'Lawfulness & Fairness', description: 'Processing of personal data must be lawful, fair, and transparent to the data principal.' },
    { icon: CheckCircle, title: 'Purpose Limitation', description: 'Personal data must be collected for specific, clear, and lawful purposes.' },
    { icon: Database, title: 'Data Minimisation', description: 'Only the minimum amount of personal data necessary for the purpose should be collected.' },
    { icon: CheckCircle, title: 'Accuracy', description: 'Personal data should be accurate and kept up to date.' },
    { icon: Globe, title: 'Storage Limitation', description: 'Personal data should not be kept for longer than necessary.' },
    { icon: Shield, title: 'Security Safeguards', description: 'Reasonable security safeguards must be implemented to protect personal data.' },
    { icon: FileText, title: 'Accountability', description: 'Data fiduciaries are accountable for compliance with the DPDP Act.' },
    { icon: Scale, title: 'Notice & Consent', description: 'Clear notice must be provided, and consent obtained for processing personal data.' },
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

        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Obligations of Data Fiduciaries</h1>
        <p className="text-gray-300 text-lg max-w-3xl mb-12">Responsible for ensuring compliance with the DPDP Act 2023.</p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {obligations.map((item, index) => {
            const Icon = item.icon;
            return (
              <div key={index} className="bg-white/10 border border-white/20 rounded-2xl backdrop-blur-sm p-6 hover:bg-white/20 transition-all hover:scale-105">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-purple-500 to-pink-600 flex items-center justify-center mb-4">
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