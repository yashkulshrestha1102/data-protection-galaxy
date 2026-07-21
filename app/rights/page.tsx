import Link from 'next/link';
import { ArrowLeft, CheckCircle, Shield, Users, Globe, Database, AlertTriangle, FileText, Scale, Building } from 'lucide-react';

export const metadata = {
  title: 'Rights of Data Principals | DPDP Act 2023',
  description: 'Learn about the rights of data principals under India\'s Digital Personal Data Protection Act 2023. Right to access, correction, erasure, portability, and grievance redressal.',
};

export default function RightsPage() {
  const rights = [
    {
      icon: Users,
      title: 'Right to Access',
      description: 'Individuals have the right to obtain confirmation about whether their data is being processed, and access to the data along with information about the processing.',
    },
    {
      icon: CheckCircle,
      title: 'Right to Correction',
      description: 'Individuals can request correction of inaccurate or incomplete personal data.',
    },
    {
      icon: CheckCircle,
      title: 'Right to Erasure',
      description: 'Individuals can request deletion of their personal data when it is no longer necessary, or when consent has been withdrawn.',
    },
    {
      icon: Globe,
      title: 'Right to be Informed',
      description: 'Individuals have the right to be informed about how their data is being collected, used, and shared.',
    },
    {
      icon: Database,
      title: 'Right to Data Portability',
      description: 'Individuals can request their data in a structured, commonly used, and machine-readable format, and transmit it to another data fiduciary.',
    },
    {
      icon: Shield,
      title: 'Right to Grievance Redressal',
      description: 'Data fiduciaries must provide a mechanism for individuals to lodge complaints or grievances.',
    },
  ];

  return (
    <main className="min-h-screen text-white px-4 pt-28 md:pt-32 pb-16 relative overflow-hidden">
      {/* Background */}
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

        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Rights of Data Principals</h1>
        <p className="text-gray-300 text-lg max-w-3xl mb-12">Empowering individuals to control their personal data and ensure privacy under the DPDP Act 2023.</p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {rights.map((right, index) => {
            const Icon = right.icon;
            return (
              <div key={index} className="bg-white/10 border border-white/20 rounded-2xl backdrop-blur-sm p-6 hover:bg-white/20 transition-all hover:scale-105">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center mb-4">
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{right.title}</h3>
                <p className="text-gray-300 text-sm leading-relaxed">{right.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </main>
  );
}