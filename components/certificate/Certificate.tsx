"use client";

import { useRef } from 'react';
import { Award, Star, Shield, Sparkles, CheckCircle } from 'lucide-react';

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
    if (score >= 80) return '🏅 First Class';
    if (score >= 70) return '🥈 Second Class';
    return '🥉 Pass';
  };

  return (
    <div className="flex flex-col items-center">
      {/* Preview */}
      <div 
        ref={certificateRef}
        className="relative w-full max-w-4xl aspect-[1.414/1] bg-gradient-to-br from-slate-900 via-purple-950 to-slate-900 rounded-2xl border-4 border-double border-amber-400/60 shadow-2xl shadow-amber-500/20 p-8 md:p-12 overflow-hidden"
      >
        {/* Background Decorative Elements */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 left-0 w-64 h-64 bg-amber-400/20 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-0 w-64 h-64 bg-purple-400/20 rounded-full blur-3xl" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl" />
        </div>

        {/* Border Decor */}
        <div className="absolute inset-2 border border-amber-400/20 rounded-xl" />
        <div className="absolute inset-4 border border-amber-400/10 rounded-lg" />

        {/* Corner Decorations */}
        <div className="absolute top-6 left-6 w-8 h-8 border-t-2 border-l-2 border-amber-400/40" />
        <div className="absolute top-6 right-6 w-8 h-8 border-t-2 border-r-2 border-amber-400/40" />
        <div className="absolute bottom-6 left-6 w-8 h-8 border-b-2 border-l-2 border-amber-400/40" />
        <div className="absolute bottom-6 right-6 w-8 h-8 border-b-2 border-r-2 border-amber-400/40" />

        <div className="relative z-10 h-full flex flex-col items-center justify-between text-center">
          {/* Header */}
          <div>
            <div className="flex items-center justify-center gap-2 mb-1">
              <Sparkles className="w-6 h-6 text-amber-400" />
              <span className="text-2xl font-bold text-white tracking-wider">LEGAL GALAXY</span>
              <Sparkles className="w-6 h-6 text-amber-400" />
            </div>
            <p className="text-xs text-amber-400/60 tracking-[0.3em] uppercase">
              Powered by Business Excellence
            </p>
          </div>

          {/* Seal */}
          <div className="absolute right-10 top-1/2 -translate-y-1/2 opacity-20">
            <div className="w-24 h-24 rounded-full border-4 border-amber-400/30 flex items-center justify-center">
              <div className="w-16 h-16 rounded-full border-2 border-amber-400/20 flex items-center justify-center">
                <Award className="w-10 h-10 text-amber-400/40" />
              </div>
            </div>
          </div>

          {/* Title */}
          <div className="mt-2">
            <h2 className="text-3xl md:text-4xl font-serif text-amber-400 tracking-wider">
              Certificate of Completion
            </h2>
            <div className="w-32 h-0.5 bg-gradient-to-r from-transparent via-amber-400 to-transparent mx-auto mt-2" />
          </div>

          {/* Body */}
          <div className="flex-1 flex flex-col items-center justify-center -mt-4">
            <p className="text-sm text-amber-400/60 tracking-widest uppercase mb-2">
              This certifies that
            </p>
            <h3 className="text-3xl md:text-5xl font-bold text-white mb-1">
              {userName}
            </h3>
            <div className="w-48 h-0.5 bg-gradient-to-r from-transparent via-amber-400/50 to-transparent mx-auto" />
            <p className="text-sm text-amber-400/60 tracking-widest uppercase mt-3">
              has successfully completed the comprehensive course on
            </p>
            <h4 className="text-xl md:text-2xl font-semibold text-amber-300/90 mt-1">
              Digital Personal Data Protection Act, 2023
            </h4>
            <p className="text-sm text-amber-400/50 tracking-wider">
              Master Course
            </p>
          </div>

          {/* Details */}
          <div className="w-full max-w-md">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-2 text-xs">
              <div className="bg-white/5 rounded-lg p-2 border border-white/10">
                <p className="text-amber-400/50">Score</p>
                <p className="text-white font-bold text-lg">{score}%</p>
              </div>
              <div className="bg-white/5 rounded-lg p-2 border border-white/10">
                <p className="text-amber-400/50">Grade</p>
                <p className="text-amber-300 font-semibold text-sm">{getGrade(score)}</p>
              </div>
              <div className="bg-white/5 rounded-lg p-2 border border-white/10">
                <p className="text-amber-400/50">Date</p>
                <p className="text-white font-semibold text-sm">{date}</p>
              </div>
              <div className="bg-white/5 rounded-lg p-2 border border-white/10">
                <p className="text-amber-400/50">Modules</p>
                <p className="text-white font-semibold text-sm">{modulesCompleted}/{totalModules}</p>
              </div>
            </div>
          </div>

          {/* Footer */}
          <div className="w-full mt-2">
            <div className="flex justify-between items-end">
              <div className="text-left">
                <div className="w-32 h-0.5 bg-amber-400/30 mb-1" />
                <p className="text-xs text-amber-400/50">Course Director</p>
                <p className="text-sm text-white font-medium">Ms. Priya Sharma</p>
              </div>
              <div className="text-center">
                <div className="flex items-center gap-1 justify-center">
                  <Shield className="w-4 h-4 text-amber-400" />
                  <span className="text-[10px] text-amber-400/50 tracking-wider">VERIFIED</span>
                  <Shield className="w-4 h-4 text-amber-400" />
                </div>
                <p className="text-[10px] text-amber-400/30 mt-1 font-mono">{certificateId}</p>
              </div>
              <div className="text-right">
                <div className="w-32 h-0.5 bg-amber-400/30 mb-1 ml-auto" />
                <p className="text-xs text-amber-400/50">Head of Academics</p>
                <p className="text-sm text-white font-medium">Dr. Vikram Singh</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Download Button */}
      <button
        onClick={() => {
          // Will implement download function
          alert('📥 Certificate download coming soon!');
        }}
        className="mt-6 px-8 py-3 rounded-xl bg-gradient-to-r from-amber-500 to-orange-500 text-white font-semibold hover:scale-105 transition-all flex items-center gap-2 shadow-lg shadow-amber-500/25"
      >
        <Award className="w-5 h-5" />
        Download Certificate (PDF)
      </button>
    </div>
  );
}