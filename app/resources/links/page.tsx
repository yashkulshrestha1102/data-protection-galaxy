"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { ArrowLeft, ExternalLink, Globe, FileText, Building, Scale, AlertCircle } from 'lucide-react';

export default function LinksPage() {
  const [stars, setStars] = useState<React.ReactNode[]>([]);

  useEffect(() => {
    const starElements = [];
    for (let i = 0; i < 50; i++) {
      starElements.push(
        <div
          key={i}
          className="absolute w-0.5 h-0.5 bg-white rounded-full animate-twinkle"
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 5}s`,
            opacity: Math.random() * 0.5 + 0.1,
          }}
        />
      );
    }
    setStars(starElements);
  }, []);

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
    {
      title: 'UK Information Commissioner\'s Office (ICO)',
      description: 'Official website of the UK\'s data protection authority.',
      url: 'https://ico.org.uk',
      icon: Building,
      category: 'International',
    },
    {
      title: 'UNCTAD Data Protection Laws',
      description: 'Global overview of data protection laws by country.',
      url: 'https://unctad.org/page/data-protection-and-privacy-legislation-worldwide',
      icon: Globe,
      category: 'International',
    },
  ];

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, url: string) => {
    if (url === '#' || url === '') {
      e.preventDefault();
      alert('This link is currently unavailable. Please check back later.');
    }
  };

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
        {stars}
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <Link href="/resources" className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors mb-6 group">
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          Back to Resources
        </Link>

        <div className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">External Links</h1>
          <p className="text-gray-300 text-lg max-w-3xl">Links to relevant laws, regulations, and official websites for data protection compliance.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {links.map((item, index) => {
            const Icon = item.icon;
            const isPlaceholder = item.url === '#' || item.url === '';
            
            return (
              <a
                key={index}
                href={item.url}
                target={!isPlaceholder ? "_blank" : undefined}
                rel={!isPlaceholder ? "noopener noreferrer" : undefined}
                onClick={(e) => handleLinkClick(e, item.url)}
                className={`bg-white/10 border border-white/20 rounded-2xl backdrop-blur-sm p-6 transition-all hover:scale-105 group ${
                  isPlaceholder 
                    ? 'opacity-60 cursor-not-allowed hover:bg-white/10' 
                    : 'hover:bg-white/20 hover:shadow-2xl hover:shadow-purple-500/20 cursor-pointer'
                }`}
              >
                <div className="flex items-start gap-4">
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 ${
                    isPlaceholder 
                      ? 'bg-gray-500/20' 
                      : 'bg-gradient-to-r from-purple-500 to-pink-600'
                  }`}>
                    <Icon className={`w-6 h-6 ${isPlaceholder ? 'text-gray-400' : 'text-white'}`} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between">
                      <h3 className={`text-xl font-semibold transition-all ${
                        isPlaceholder 
                          ? 'text-gray-400' 
                          : 'text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-purple-400 group-hover:bg-clip-text'
                      }`}>
                        {item.title}
                      </h3>
                      {isPlaceholder ? (
                        <AlertCircle className="w-4 h-4 text-gray-400 flex-shrink-0 ml-2" />
                      ) : (
                        <ExternalLink className="w-4 h-4 text-gray-400 group-hover:text-white transition-colors flex-shrink-0 ml-2" />
                      )}
                    </div>
                    <p className={`text-sm leading-relaxed mt-1 ${isPlaceholder ? 'text-gray-500' : 'text-gray-300'}`}>
                      {item.description}
                    </p>
                    <div className="flex items-center gap-2 mt-2">
                      <span className={`inline-block px-2 py-0.5 rounded text-xs border ${
                        isPlaceholder 
                          ? 'bg-gray-500/10 text-gray-500 border-gray-500/20' 
                          : 'bg-white/10 text-gray-400 border-white/10'
                      }`}>
                        {item.category}
                      </span>
                      {isPlaceholder && (
                        <span className="inline-block px-2 py-0.5 rounded text-xs bg-yellow-500/20 text-yellow-400 border border-yellow-500/30">
                          Coming Soon
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              </a>
            );
          })}
        </div>

        {/* Note about links */}
        <div className="mt-8 p-4 rounded-xl bg-yellow-500/10 border border-yellow-500/20 text-sm text-yellow-400 flex items-start gap-3">
          <AlertCircle className="w-5 h-5 flex-shrink-0 mt-0.5" />
          <p>Links marked as "Coming Soon" are currently being updated. Please check back later for the latest resources.</p>
        </div>
      </div>
    </main>
  );
}