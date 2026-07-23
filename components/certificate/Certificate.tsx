"use client";

import { useRef } from 'react';
import { Award, Shield, Sparkles, CheckCircle, Download } from 'lucide-react';

interface CertificateProps {
  userName: string;
  score: number;
  date: string;
  duration: string;
  modulesCompleted: number;
  totalModules: number;
  certificateId: string;
}

export default function Certificate({
  userName,
  score,
  date,
  duration,
  modulesCompleted,
  totalModules,
  certificateId
}: CertificateProps) {
  const certificateRef = useRef<HTMLDivElement>(null);

  const getGrade = (score: number) => {
    if (score >= 90) return '🌟 Distinction';
    if (score >= 80) return '🥇 First Class';
    if (score >= 70) return '🥈 Second Class';
    return '🥉 Pass';
  };

  const getGradeColor = (score: number) => {
    if (score >= 90) return 'text-amber-600';
    if (score >= 80) return 'text-blue-600';
    if (score >= 70) return 'text-purple-600';
    return 'text-gray-600';
  };

  return (
    <div className="flex flex-col items-center w-full">
      {/* ===== CERTIFICATE PREVIEW ===== */}
      <div 
        ref={certificateRef}
        className="relative w-full max-w-4xl aspect-[1.414/1] bg-white rounded-2xl shadow-2xl shadow-black/20 overflow-hidden"
      >
        {/* ===== BORDER ===== */}
        <div className="absolute inset-3 border-2 border-gray-200 rounded-xl" />
        <div className="absolute inset-6 border border-gray-100 rounded-lg" />

        {/* ===== DECORATIVE TOP BAR ===== */}
        <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-amber-400 via-blue-500 to-purple-500" />

        {/* ===== CORNER DECORATIONS ===== */}
        <div className="absolute top-8 left-8 w-10 h-10 border-t-2 border-l-2 border-amber-400/40 rounded-tl-lg" />
        <div className="absolute top-8 right-8 w-10 h-10 border-t-2 border-r-2 border-amber-400/40 rounded-tr-lg" />
        <div className="absolute bottom-8 left-8 w-10 h-10 border-b-2 border-l-2 border-amber-400/40 rounded-bl-lg" />
        <div className="absolute bottom-8 right-8 w-10 h-10 border-b-2 border-r-2 border-amber-400/40 rounded-br-lg" />

        {/* ===== CONTENT ===== */}
        <div className="relative z-10 h-full flex flex-col items-center justify-between p-8 md:p-12">
          {/* ===== HEADER ===== */}
          <div className="text-center">
            <div className="flex items-center justify-center gap-2 mb-1">
              <Sparkles className="w-5 h-5 text-amber-500" />
              <span className="text-xl md:text-2xl font-bold text-gray-800 tracking-wider">
                LEGAL GALAXY
              </span>
              <Sparkles className="w-5 h-5 text-amber-500" />
            </div>
            <p className="text-[10px] text-gray-400 tracking-[0.3em] uppercase font-medium">
              Powered by Business Excellence
            </p>
            <div className="w-24 h-0.5 bg-gradient-to-r from-transparent via-amber-400 to-transparent mx-auto mt-2" />
          </div>

          {/* ===== TITLE ===== */}
          <div className="text-center mt-2">
            <h2 className="text-2xl md:text-3xl font-serif text-gray-700 tracking-wider">
              Certificate of Completion
            </h2>
            <p className="text-xs text-gray-400 mt-1">This certifies that</p>
          </div>

          {/* ===== USER NAME ===== */}
          <div className="text-center -mt-2">
            <h3 className="text-3xl md:text-5xl font-bold text-gray-800 tracking-wide">
              {userName}
            </h3>
            <div className="w-64 h-0.5 bg-gradient-to-r from-transparent via-amber-400/60 to-transparent mx-auto mt-2" />
          </div>

          {/* ===== COURSE DETAILS ===== */}
          <div className="text-center -mt-2">
            <p className="text-sm text-gray-500 tracking-widest uppercase">
              has successfully completed the comprehensive course on
            </p>
            <h4 className="text-lg md:text-xl font-semibold text-gray-700 mt-1">
              Digital Personal Data Protection Act, 2023
            </h4>
            <p className="text-sm text-gray-500 font-medium tracking-wider">
              Master Course
            </p>
          </div>

          {/* ===== SCORE & DETAILS ===== */}
          <div className="w-full max-w-md">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              <div className="bg-gray-50 rounded-xl p-2.5 text-center border border-gray-100">
                <p className="text-[10px] text-gray-400 uppercase tracking-wider">Score</p>
                <p className="text-xl font-bold text-gray-800">{score}%</p>
              </div>
              <div className="bg-gray-50 rounded-xl p-2.5 text-center border border-gray-100">
                <p className="text-[10px] text-gray-400 uppercase tracking-wider">Grade</p>
                <p className={`text-sm font-semibold ${getGradeColor(score)}`}>
                  {getGrade(score)}
                </p>
              </div>
              <div className="bg-gray-50 rounded-xl p-2.5 text-center border border-gray-100">
                <p className="text-[10px] text-gray-400 uppercase tracking-wider">Date</p>
                <p className="text-sm font-semibold text-gray-700">{date}</p>
              </div>
              <div className="bg-gray-50 rounded-xl p-2.5 text-center border border-gray-100">
                <p className="text-[10px] text-gray-400 uppercase tracking-wider">Modules</p>
                <p className="text-sm font-semibold text-gray-700">{modulesCompleted}/{totalModules}</p>
              </div>
            </div>
          </div>

          {/* ===== FOOTER ===== */}
          <div className="w-full mt-2">
            <div className="flex justify-between items-end">
              {/* Left Signature */}
              <div className="text-center">
                <div className="w-28 h-0.5 bg-gray-300 mx-auto mb-1" />
                <p className="text-[10px] text-gray-400">Course Director</p>
                <p className="text-sm font-semibold text-gray-700">Ms. Priya Sharma</p>
              </div>

              {/* Center Verification */}
              <div className="text-center">
                <div className="flex items-center gap-2 justify-center">
                  <Shield className="w-4 h-4 text-amber-500" />
                  <span className="text-[10px] text-gray-400 tracking-wider font-medium">VERIFIED</span>
                  <Shield className="w-4 h-4 text-amber-500" />
                </div>
                <p className="text-[9px] text-gray-300 font-mono mt-1">{certificateId}</p>
              </div>

              {/* Right Signature */}
              <div className="text-center">
                <div className="w-28 h-0.5 bg-gray-300 mx-auto mb-1" />
                <p className="text-[10px] text-gray-400">Head of Academics</p>
                <p className="text-sm font-semibold text-gray-700">Dr. Vikram Singh</p>
              </div>
            </div>

            {/* ===== BOTTOM BAR ===== */}
            <div className="mt-3 pt-2 border-t border-gray-100 text-center">
              <p className="text-[8px] text-gray-300 tracking-widest uppercase">
                ⭐ Verified by Legal Galaxy Academy ⭐
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* ===== DOWNLOAD BUTTON ===== */}
      <button
        onClick={() => alert('📥 PDF Download coming soon!')}
        className="mt-6 px-8 py-3 rounded-xl bg-gradient-to-r from-amber-500 to-orange-500 text-white font-semibold hover:scale-105 transition-all flex items-center gap-2 shadow-lg shadow-amber-500/25"
      >
        <Download className="w-5 h-5" />
        Download Certificate (PDF)
      </button>
    </div>
  );
}