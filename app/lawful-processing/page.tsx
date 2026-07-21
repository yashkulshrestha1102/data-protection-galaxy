import Link from 'next/link';
import { ArrowLeft, CheckCircle, FileText, Shield, Users, Globe, Scale } from 'lucide-react';

export const metadata = {
  title: 'Lawful Processing of Data | DPDP Act 2023',
  description: 'Learn about the lawful bases for processing personal data under India\'s Digital Personal Data Protection Act 2023.',
};

export default function LawfulProcessingPage() {
  const bases = [
    { icon: CheckCircle, title: 'Consent', description: 'The data principal has given consent for the processing of their personal data.' },
    { icon: FileText, title: 'Performance of a Contract', description: 'Processing is necessary for the performance of a contract with the data principal.' },
    { icon: Shield, title: 'Legal Obligation', description: 'Processing is necessary for compliance with a legal obligation.' },
    { icon: Users, title: 'Vital Interests', description: 'Processing is necessary to protect the vital interests of the data principal.' },
    { icon: Globe, title: 'Public Function', description: 'Processing is necessary for the performance of a task carried out in the public interest.' },
    { icon: Scale, title: 'Legitimate Interests', description: 'Processing is necessary for the legitimate interests of the data fiduciary.' },
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

        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Lawful Processing of Data</h1>
        <p className="text-gray-300 text-lg max-w-3xl mb-12">Conditions under which data can be processed under the DPDP Act 2023.</p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {bases.map((item, index) => {
            const Icon = item.icon;
            return (
              <div key={index} className="bg-white/10 border border-white/20 rounded-2xl backdrop-blur-sm p-6 hover:bg-white/20 transition-all hover:scale-105">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-green-500 to-emerald-600 flex items-center justify-center mb-4">
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