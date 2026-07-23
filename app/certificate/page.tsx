"use client";

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import Certificate from '@/components/certificate/Certificate';

export default function CertificatePage() {
  const [userData, setUserData] = useState({
    name: 'John Doe',
    score: 92,
    date: '23 July, 2026',
    duration: '120 Hours',
    modulesCompleted: 20,
    totalModules: 20,
    certificateId: 'LG-DPDPA-2026-7842'
  });

  // Load from localStorage or URL params
  useEffect(() => {
    const stored = localStorage.getItem('certificate_data');
    if (stored) {
      try {
        setUserData(JSON.parse(stored));
      } catch {}
    }
  }, []);

  return (
    <div className="min-h-screen text-white flex flex-col items-center px-4 pt-28 md:pt-32 pb-16 relative overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-cover bg-center bg-no-repeat" style={{ backgroundImage: "url('/images/home1.jpeg')" }}>
        <div className="absolute inset-0 bg-black/60 backdrop-blur-[2px]" />
      </div>

      <div className="max-w-4xl w-full relative z-10">
        <Link href="/" className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors mb-6 group">
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          Back to Home
        </Link>

        <h1 className="text-3xl font-bold text-white mb-2 text-center">🏆 Your Certificate</h1>
        <p className="text-gray-300 text-center mb-8">
          Congratulations on completing the DPDPA 2023 Master Course!
        </p>

        <Certificate {...userData} />
      </div>
    </div>
  );
}