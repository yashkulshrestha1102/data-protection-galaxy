import Link from 'next/link';
import { ArrowLeft, FileText, Download, ExternalLink, Calendar } from 'lucide-react';

export const metadata = {
  title: 'Guidelines & Circulars | DPDP Act Resources',
  description: 'Official guidelines and circulars issued by the Data Protection Board under India\'s Digital Personal Data Protection Act 2023.',
};

export default function GuidelinesPage() {
  const guidelines = [
    {
      title: 'DPDP Act Implementation Guidelines 2026',
      date: '15 Jul 2026',
      type: 'Guideline',
      description: 'Comprehensive guidelines for implementing the Digital Personal Data Protection Act, 2023.',
    },
    {
      title: 'Data Breach Notification Guidelines',
      date: '10 Jul 2026',
      type: 'Circular',
      description: 'Guidelines for notifying data breaches to the Data Protection Board and affected individuals.',
    },
    {
      title: 'Consent Management Framework',
      date: '5 Jul 2026',
      type: 'Guideline',
      description: 'Framework for obtaining and managing consent under the DPDP Act.',
    },
    {
      title: 'Cross-Border Data Transfer Guidelines',
      date: '28 Jun 2026',
      type: 'Circular',
      description: 'Guidelines for transferring personal data outside India under lawful conditions.',
    },
    {
      title: 'Data Protection Impact Assessment (DPIA) Guidelines',
      date: '20 Jun 2026',
      type: 'Guideline',
      description: 'Guidelines for conducting Data Protection Impact Assessments for high-risk processing activities.',
    },
    {
      title: 'DPO Appointment Circular',
      date: '15 Jun 2026',
      type: 'Circular',
      description: 'Circular on appointment and responsibilities of Data Protection Officers.',
    },
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
        <Link href="/resources" className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors mb-6 group">
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          Back to Resources
        </Link>

        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Guidelines & Circulars</h1>
        <p className="text-gray-300 text-lg max-w-3xl mb-12">Official guidelines and circulars issued by the Data Protection Board under the DPDP Act 2023.</p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {guidelines.map((item, index) => (
            <div key={index} className="bg-white/10 border border-white/20 rounded-2xl backdrop-blur-sm p-6 hover:bg-white/20 transition-all hover:scale-105">
              <div className="flex items-start justify-between mb-3">
                <span className={`px-3 py-1 rounded-full text-xs font-medium ${item.type === 'Guideline' ? 'bg-blue-500/20 text-blue-400 border border-blue-500/30' : 'bg-purple-500/20 text-purple-400 border border-purple-500/30'}`}>
                  {item.type}
                </span>
                <span className="text-xs text-gray-400 flex items-center gap-1">
                  <Calendar className="w-3 h-3" />
                  {item.date}
                </span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">{item.title}</h3>
              <p className="text-gray-300 text-sm leading-relaxed mb-4">{item.description}</p>
              <button className="text-blue-400 hover:text-blue-300 transition-colors text-sm flex items-center gap-1">
                <Download className="w-4 h-4" />
                Download PDF
              </button>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}