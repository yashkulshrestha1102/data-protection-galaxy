import Link from 'next/link';
import { ArrowLeft, Users, Calendar, FileText } from 'lucide-react';

export const metadata = {
  title: 'Case Studies | DPDP Act Resources',
  description: 'Real-world case studies on data protection and compliance under India\'s Digital Personal Data Protection Act 2023.',
};

export default function CaseStudiesPage() {
  const caseStudies = [
    {
      title: 'Data Breach Incident in a Healthcare Company',
      industry: 'Healthcare',
      date: '15 Jul 2026',
      description: 'Analysis of a data breach incident in a healthcare company and lessons learned for compliance.',
      impact: '10,000+ records affected',
    },
    {
      title: 'Consent Management in E-Commerce Platform',
      industry: 'E-Commerce',
      date: '10 Jul 2026',
      description: 'Case study on implementing consent management in a large e-commerce platform.',
      impact: '5M+ users',
    },
    {
      title: 'Cross-Border Data Transfer Compliance',
      industry: 'Technology',
      date: '5 Jul 2026',
      description: 'Case study on ensuring compliance for cross-border data transfers.',
      impact: 'Global operations',
    },
    {
      title: 'Data Protection Impact Assessment (DPIA) Implementation',
      industry: 'Finance',
      date: '28 Jun 2026',
      description: 'Implementation of DPIA for high-risk data processing in a financial institution.',
      impact: 'High-risk processing',
    },
    {
      title: 'Data Subject Rights Handling',
      industry: 'Consulting',
      date: '20 Jun 2026',
      description: 'Case study on effectively handling data subject rights requests.',
      impact: '100+ requests/month',
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

        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Case Studies</h1>
        <p className="text-gray-300 text-lg max-w-3xl mb-12">Real-world case studies on data protection and compliance under the DPDP Act 2023.</p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {caseStudies.map((item, index) => (
            <div key={index} className="bg-white/10 border border-white/20 rounded-2xl backdrop-blur-sm p-6 hover:bg-white/20 transition-all hover:scale-105">
              <div className="flex items-start justify-between mb-3">
                <span className="px-3 py-1 rounded-full text-xs font-medium bg-purple-500/20 text-purple-400 border border-purple-500/30">
                  {item.industry}
                </span>
                <span className="text-xs text-gray-400 flex items-center gap-1">
                  <Calendar className="w-3 h-3" />
                  {item.date}
                </span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">{item.title}</h3>
              <p className="text-gray-300 text-sm leading-relaxed mb-3">{item.description}</p>
              <div className="flex items-center gap-2 text-xs text-gray-400">
                <Users className="w-3 h-3" />
                <span>Impact: {item.impact}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}