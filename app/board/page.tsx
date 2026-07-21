import Link from 'next/link';
import { ArrowLeft, Building, Users, Scale, AlertTriangle, CheckCircle } from 'lucide-react';

export const metadata = {
  title: 'Data Protection Board | DPDP Act 2023',
  description: 'Learn about the Data Protection Board established under India\'s Digital Personal Data Protection Act 2023. Composition, functions, powers, and penalties.',
};

export default function BoardPage() {
  const items = [
    { icon: Building, title: 'Composition of Board', description: 'The Board consists of a Chairperson and other members appointed by the Central Government.' },
    { icon: Scale, title: 'Functions & Powers', description: 'The Board monitors compliance, investigates violations, and issues directions.' },
    { icon: Users, title: 'Investigations', description: 'The Board has the power to investigate complaints and conduct inquiries.' },
    { icon: AlertTriangle, title: 'Directions & Penalties', description: 'The Board can issue directions and impose penalties for non-compliance.' },
    { icon: CheckCircle, title: 'Appeals', description: 'Appeals against the Board\'s decisions can be made to the Appellate Tribunal.' },
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

        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Data Protection Board</h1>
        <p className="text-gray-300 text-lg max-w-3xl mb-12">The regulatory authority to enforce the DPDP Act and protect data rights.</p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {items.map((item, index) => {
            const Icon = item.icon;
            return (
              <div key={index} className="bg-white/10 border border-white/20 rounded-2xl backdrop-blur-sm p-6 hover:bg-white/20 transition-all hover:scale-105">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-yellow-500 to-orange-600 flex items-center justify-center mb-4">
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