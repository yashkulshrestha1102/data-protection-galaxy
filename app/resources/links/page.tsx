import Link from 'next/link';
import { ArrowLeft, ExternalLink, Globe, FileText, Building, Scale } from 'lucide-react';

export const metadata = {
  title: 'External Links | DPDP Act Resources',
  description: 'Links to relevant laws, regulations, and official websites for data protection compliance under India\'s Digital Personal Data Protection Act 2023.',
};

export default function LinksPage() {
  const links = [
    {
      title: 'Ministry of Electronics and Information Technology',
      description: 'Official website of MeitY - nodal ministry for the DPDP Act.',
      url: 'https://www.meity.gov.in',
      icon: Building,
      category: 'Government',
    },
    {
      title: 'Data Protection Board of India',
      description: 'Official website of the Data Protection Board established under the DPDP Act.',
      url: '#',
      icon: Scale,
      category: 'Regulatory',
    },
    {
      title: 'Digital Personal Data Protection Act, 2023',
      description: 'Full text of the Digital Personal Data Protection Act, 2023.',
      url: '#',
      icon: FileText,
      category: 'Legislation',
    },
    {
      title: 'DPDP Rules, 2025',
      description: 'Rules framed under the Digital Personal Data Protection Act, 2023.',
      url: '#',
      icon: FileText,
      category: 'Legislation',
    },
    {
      title: 'European Union - GDPR',
      description: 'General Data Protection Regulation of the European Union.',
      url: 'https://gdpr-info.eu',
      icon: Globe,
      category: 'International',
    },
    {
      title: 'California Consumer Privacy Act (CCPA)',
      description: 'California\'s consumer privacy law.',
      url: 'https://oag.ca.gov/privacy/ccpa',
      icon: Globe,
      category: 'International',
    },
    {
      title: 'Information Regulator (South Africa)',
      description: 'Official website of the Information Regulator of South Africa.',
      url: 'https://www.justice.gov.za/inforeg/',
      icon: Building,
      category: 'International',
    },
    {
      title: 'EDPB (European Data Protection Board)',
      description: 'Official website of the European Data Protection Board.',
      url: 'https://edpb.europa.eu',
      icon: Scale,
      category: 'International',
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

        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">External Links</h1>
        <p className="text-gray-300 text-lg max-w-3xl mb-12">Links to relevant laws, regulations, and official websites for data protection compliance.</p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {links.map((item, index) => {
            const Icon = item.icon;
            return (
              <a
                key={index}
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/10 border border-white/20 rounded-2xl backdrop-blur-sm p-6 hover:bg-white/20 transition-all hover:scale-105 group"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-purple-500 to-pink-600 flex items-center justify-center flex-shrink-0">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between">
                      <h3 className="text-xl font-semibold text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-purple-400 group-hover:bg-clip-text transition-all">
                        {item.title}
                      </h3>
                      <ExternalLink className="w-4 h-4 text-gray-400 group-hover:text-white transition-colors flex-shrink-0 ml-2" />
                    </div>
                    <p className="text-gray-300 text-sm leading-relaxed mt-1">{item.description}</p>
                    <span className="inline-block mt-2 px-2 py-0.5 rounded text-xs bg-white/10 text-gray-400 border border-white/10">
                      {item.category}
                    </span>
                  </div>
                </div>
              </a>
            );
          })}
        </div>
      </div>
    </main>
  );
}