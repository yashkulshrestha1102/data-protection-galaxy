"use client";

import { useState } from 'react';
import Link from 'next/link';
import { ArrowLeft, FileText, Download, Calendar, CheckCircle } from 'lucide-react';

export default function GuidelinesPage() {
  const [downloading, setDownloading] = useState<string | null>(null);

  const guidelines = [
    {
      id: 'dpdp-implementation',
      title: 'DPDP Act Implementation Guidelines 2026',
      date: '15 Jul 2026',
      type: 'Guideline',
      description: 'Comprehensive guidelines for implementing the Digital Personal Data Protection Act, 2023.',
      category: 'Implementation',
    },
    {
      id: 'breach-notification',
      title: 'Data Breach Notification Guidelines',
      date: '10 Jul 2026',
      type: 'Circular',
      description: 'Guidelines for notifying data breaches to the Data Protection Board and affected individuals.',
      category: 'Breach Response',
    },
    {
      id: 'consent-management',
      title: 'Consent Management Framework',
      date: '5 Jul 2026',
      type: 'Guideline',
      description: 'Framework for obtaining and managing consent under the DPDP Act.',
      category: 'Consent',
    },
    {
      id: 'dpia-guidelines',
      title: 'Data Protection Impact Assessment (DPIA) Guidelines',
      date: '28 Jun 2026',
      type: 'Guideline',
      description: 'Guidelines for conducting Data Protection Impact Assessments for high-risk processing activities.',
      category: 'Risk Assessment',
    },
    {
      id: 'cross-border',
      title: 'Cross-Border Data Transfer Guidelines',
      date: '20 Jun 2026',
      type: 'Circular',
      description: 'Guidelines for transferring personal data outside India under lawful conditions.',
      category: 'Cross-Border',
    },
    {
      id: 'dpo-appointment',
      title: 'DPO Appointment Circular',
      date: '15 Jun 2026',
      type: 'Circular',
      description: 'Circular on appointment and responsibilities of Data Protection Officers.',
      category: 'Governance',
    },
  ];

  const handleDownload = (id: string, title: string) => {
    setDownloading(id);
    
    // Simulate PDF generation/download
    setTimeout(() => {
      // Create a simple text file as placeholder
      const content = `${title}\n\n${guidelines.find(g => g.id === id)?.description}\n\nDate: ${guidelines.find(g => g.id === id)?.date}\nCategory: ${guidelines.find(g => g.id === id)?.category}\n\nThis is a placeholder PDF. Actual PDF content will be added soon.`;
      const blob = new Blob([content], { type: 'text/plain' });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = `${title.replace(/\s+/g, '_')}.txt`;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
      setDownloading(null);
    }, 1000);
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
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Back Button */}
        <Link href="/resources" className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors mb-6 group">
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          Back to Resources
        </Link>

        {/* Header */}
        <div className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Guidelines & Circulars</h1>
          <p className="text-gray-300 text-lg max-w-3xl">Official guidelines and circulars issued by the Data Protection Board under the DPDP Act 2023.</p>
        </div>

        {/* Guidelines Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {guidelines.map((item) => (
            <div
              key={item.id}
              className="bg-white/10 border border-white/20 rounded-2xl backdrop-blur-sm p-6 hover:bg-white/20 transition-all hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/20 group"
            >
              {/* Header */}
              <div className="flex items-start justify-between mb-3">
                <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium ${
                  item.type === 'Guideline' 
                    ? 'bg-blue-500/20 text-blue-400 border border-blue-500/30' 
                    : 'bg-purple-500/20 text-purple-400 border border-purple-500/30'
                }`}>
                  <FileText className="w-3 h-3" />
                  {item.type}
                </span>
                <span className="text-xs text-gray-400 flex items-center gap-1">
                  <Calendar className="w-3 h-3" />
                  {item.date}
                </span>
              </div>

              {/* Title */}
              <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-purple-400 group-hover:bg-clip-text transition-all">
                {item.title}
              </h3>

              {/* Description */}
              <p className="text-sm text-gray-300 leading-relaxed mb-4">
                {item.description}
              </p>

              {/* Category & Download */}
              <div className="flex items-center justify-between pt-4 border-t border-white/10">
                <span className="text-xs text-gray-400">Category: {item.category}</span>
                <button
                  onClick={() => handleDownload(item.id, item.title)}
                  disabled={downloading === item.id}
                  className={`inline-flex items-center gap-1.5 text-sm text-blue-400 hover:text-purple-400 transition-colors group-hover:translate-x-1 transition-transform ${
                    downloading === item.id ? 'opacity-50 cursor-not-allowed' : ''
                  }`}
                >
                  {downloading === item.id ? (
                    <>
                      <div className="w-4 h-4 border-2 border-blue-400 border-t-transparent rounded-full animate-spin" />
                      Downloading...
                    </>
                  ) : (
                    <>
                      <Download className="w-4 h-4" />
                      Download PDF
                    </>
                  )}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}