"use client";

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ArrowLeft, ChevronRight, ChevronLeft, CheckCircle, 
  AlertCircle, FileText, Clock,
  Shield, Users, Database, Globe, Building, Scale,
  Sparkles, Loader2, Mail, Send, Lock, UserCheck, ChevronDown
} from 'lucide-react';
import { scorecardData, getOverallScore, getRiskLevel, getCategoryScores, getAllQuestions } from '@/data/scorecard';

// ============================================================
// ===== VIDEO BACKGROUND COMPONENT (Original Quality) =====
// ============================================================
const VideoBackground = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [videoError, setVideoError] = useState(false);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch((err) => {
        console.log('Video autoplay failed:', err);
        setVideoError(true);
      });
    }
  }, []);

  return (
    <div className="absolute inset-0 -z-10 overflow-hidden">
      {!videoError ? (
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full"
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            // ✅ Video quality settings
            imageRendering: 'auto',
            backfaceVisibility: 'hidden',
            WebkitBackfaceVisibility: 'hidden',
          }}
          onError={() => setVideoError(true)}
        >
          <source src="/videos/vido5.mp4" type="video/mp4" />
        </video>
      ) : (
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ 
            backgroundImage: "url('/images/galaxy5.jpg')",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <div className="absolute inset-0 bg-black/60" />
        </div>
      )}
      
      {/* ✅ Light Overlay - Quality impact kam karo */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/40" />
    </div>
  );
};
// ============================================================
// ===== 3D PIE CHART COMPONENT (SECTOR STYLE) =====
// ============================================================
const PieChart3D = ({ answered, total }: { answered: number; total: number }) => {
  const percentage = Math.round((answered / total) * 100);
  const unanswered = total - answered;
  const answeredAngle = (answered / total) * 360;
  const unansweredAngle = (unanswered / total) * 360;

  return (
    <div className="flex flex-col items-center">
      {/* 3D Pie Chart Container */}
      <div 
        className="relative w-56 h-56"
        style={{
          perspective: '600px',
          transformStyle: 'preserve-3d'
        }}
      >
        {/* Shadow/Base */}
        <div 
          className="absolute inset-0 rounded-full blur-2xl opacity-40"
          style={{
            background: 'radial-gradient(circle, rgba(139,92,246,0.4) 0%, transparent 70%)',
            transform: 'rotateX(70deg) translateZ(-40px) scale(0.8)',
          }}
        />
        
        {/* 3D Pie Chart */}
        <div 
          className="relative w-full h-full"
          style={{
            transform: 'rotateX(20deg) rotateY(-15deg) rotateZ(-5deg)',
            transformStyle: 'preserve-3d',
          }}
        >
          {/* SVG Pie Chart with 3D effect */}
          <svg viewBox="0 0 100 100" className="w-full h-full -rotate-90 drop-shadow-2xl">
            {/* Background */}
            <circle
              cx="50"
              cy="50"
              r="40"
              fill="none"
              stroke="#1e1e32"
              strokeWidth="22"
              className="drop-shadow-lg"
            />
            
            {/* Answered portion */}
            {answered > 0 && (
              <>
                {/* Main slice */}
                <circle
                  cx="50"
                  cy="50"
                  r="40"
                  fill="none"
                  stroke="url(#pieGradient3D)"
                  strokeWidth="22"
                  strokeDasharray={`${answeredAngle} ${360 - answeredAngle}`}
                  strokeLinecap="round"
                  className="transition-all duration-1000 ease-out"
                  style={{
                    filter: 'drop-shadow(0 8px 25px rgba(139, 92, 246, 0.5)) drop-shadow(0 2px 10px rgba(168, 85, 247, 0.3))',
                  }}
                />
                
                {/* 3D Edge/Highlight effect */}
                <circle
                  cx="50"
                  cy="50"
                  r="38"
                  fill="none"
                  stroke="rgba(255,255,255,0.08)"
                  strokeWidth="4"
                  strokeDasharray={`${answeredAngle * 0.3} ${360 - answeredAngle * 0.3}`}
                  strokeLinecap="round"
                  style={{
                    transform: 'rotate(8deg)',
                    opacity: 0.5,
                  }}
                />
              </>
            )}
            
            {/* Gradients */}
            <defs>
              <linearGradient id="pieGradient3D" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#6d28d9" />
                <stop offset="25%" stopColor="#7c3aed" />
                <stop offset="50%" stopColor="#8b5cf6" />
                <stop offset="75%" stopColor="#a855f7" />
                <stop offset="100%" stopColor="#d946ef" />
              </linearGradient>
              
              <radialGradient id="gloss3D" cx="35%" cy="25%" r="60%">
                <stop offset="0%" stopColor="rgba(255,255,255,0.2)" />
                <stop offset="100%" stopColor="rgba(255,255,255,0)" />
              </radialGradient>
            </defs>
          </svg>
          
          {/* Gloss overlay */}
          <div 
            className="absolute inset-0 rounded-full pointer-events-none"
            style={{
              background: 'radial-gradient(ellipse at 30% 20%, rgba(255,255,255,0.12) 0%, transparent 55%)',
              transform: 'rotateX(5deg)',
            }}
          />
        </div>
        
        {/* Center Text */}
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <span className="text-4xl font-bold text-white drop-shadow-lg">{percentage}%</span>
          <span className="text-[10px] text-gray-300 font-medium tracking-wider">COMPLETED</span>
        </div>
      </div>
      
      {/* Legend */}
      <div className="flex flex-wrap justify-center gap-6 mt-6 text-sm">
        <div className="flex items-center gap-2.5 bg-white/5 px-3 py-1.5 rounded-lg border border-white/5">
          <div className="w-3 h-3 rounded-full bg-gradient-to-r from-purple-600 to-pink-500 shadow-lg shadow-purple-500/30" />
          <span className="text-gray-300">Answered <span className="text-white font-medium">{answered}</span></span>
        </div>
        <div className="flex items-center gap-2.5 bg-white/5 px-3 py-1.5 rounded-lg border border-white/5">
          <div className="w-3 h-3 rounded-full bg-[#1e1e32] border border-white/5" />
          <span className="text-gray-400">Unanswered <span className="text-white font-medium">{unanswered}</span></span>
        </div>
      </div>
    </div>
  );
};

// ===== CHECKBOX QUESTION WITH DROPDOWN + AUTO-SELECT =====
const CheckboxQuestion = ({ question, value, onChange }: any) => {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  // Toggle dropdown
  const toggleDropdown = (optionId: string) => {
    setOpenDropdown(openDropdown === optionId ? null : optionId);
  };

  // Toggle category selection (auto-select all items)
  const toggleCategory = (option: any) => {
    const current = value || [];
    const allItemIds = option.items || [];
    const allSelected = allItemIds.every((item: string) => current.includes(item));
    
    if (allSelected) {
      // Deselect all items
      const newValue = current.filter((id: string) => !allItemIds.includes(id));
      onChange(newValue);
    } else {
      // Select all items
      const newValue = [...current];
      allItemIds.forEach((item: string) => {
        if (!newValue.includes(item)) {
          newValue.push(item);
        }
      });
      onChange(newValue);
    }
  };

  // Check if category is selected
  const isCategorySelected = (option: any) => {
    const current = value || [];
    const allItemIds = option.items || [];
    return allItemIds.length > 0 && allItemIds.every((item: string) => current.includes(item));
  };

  return (
    <div className="space-y-2">
      {question.options.map((option: any) => {
        const isOpen = openDropdown === option.id;
        const isSelected = isCategorySelected(option);
        const selectedCount = (value || []).filter((item: string) => 
          option.items?.includes(item)
        ).length;
        const totalItems = option.items?.length || 0;

        return (
          <div key={option.id} className="border border-white/10 rounded-xl overflow-hidden bg-white/5">
            {/* ===== DROPDOWN HEADER ===== */}
            <button
              onClick={() => toggleDropdown(option.id)}
              className="w-full px-4 py-3 flex items-center justify-between hover:bg-white/5 transition-colors"
            >
              <div className="flex items-center gap-3">
                {/* ✅ Category Checkbox */}
                <input
                  type="checkbox"
                  checked={isSelected}
                  onChange={() => toggleCategory(option)}
                  className="w-4 h-4 text-purple-500 focus:ring-purple-500 rounded"
                />
                <span className="text-white text-sm font-medium">{option.label}</span>
                {option.items && (
                  <span className="text-[10px] text-gray-400">
                    ({selectedCount}/{totalItems})
                  </span>
                )}
              </div>
              <div className="flex items-center gap-2">
                {isSelected && (
                  <span className="text-[10px] text-green-400">✓ Selected</span>
                )}
                <ChevronDown className={`w-4 h-4 text-gray-400 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
              </div>
            </button>

            {/* ===== DROPDOWN CONTENT (Items) ===== */}
            {isOpen && option.items && (
              <div className="px-4 pb-3 space-y-0.5 border-t border-white/5 pt-2">
                {option.items.map((item: string, idx: number) => {
                  const isItemSelected = (value || []).includes(item);
                  return (
                    <label key={idx} className="flex items-center gap-2 cursor-pointer py-0.5 hover:bg-white/5 rounded px-2 transition-colors">
                      <input
                        type="checkbox"
                        checked={isItemSelected}
                        onChange={() => {
                          const current = value || [];
                          const newValue = isItemSelected
                            ? current.filter((id: string) => id !== item)
                            : [...current, item];
                          onChange(newValue);
                        }}
                        className="w-3.5 h-3.5 text-purple-500 focus:ring-purple-500 rounded"
                      />
                      <span className="text-xs text-gray-300">• {item}</span>
                    </label>
                  );
                })}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};

// ===== RADIO GROUP QUESTION WITH SQUARE + CIRCLE SHAPES (Buttons Aage) =====
const RadioGroupQuestion = ({ question, value, onChange }: any) => {
  const handleChange = (subId: string, val: string) => {
    const current = value || {};
    onChange({ ...current, [subId]: val });
  };

  return (
    <div className="space-y-3">
      {question.subOptions.map((sub: any) => (
        <div key={sub.id} className="flex items-center gap-4 p-3 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 transition-all">
          {/* ✅ BUTTONS PEHLE - Square + Circle */}
          <div className="flex items-center gap-4 flex-shrink-0">
            {/* YES - SQUARE */}
            <button
              onClick={() => handleChange(sub.id, 'Yes')}
              className="flex flex-col items-center gap-1 group"
              title="Select Yes (Square)"
            >
              <div className={`w-8 h-8 rounded-md border-2 flex items-center justify-center transition-all ${
                (value || {})[sub.id] === 'Yes'
                  ? 'bg-green-600 border-green-400 shadow-lg shadow-green-500/30'
                  : 'border-gray-500 hover:border-green-400 bg-white/5'
              }`}>
                {(value || {})[sub.id] === 'Yes' && (
                  <span className="text-white text-lg">✓</span>
                )}
              </div>
              <span className={`text-[10px] ${(value || {})[sub.id] === 'Yes' ? 'text-green-400' : 'text-gray-500'}`}>
                Yes
              </span>
            </button>

            {/* PARTIAL - CIRCLE */}
            <button
              onClick={() => handleChange(sub.id, 'Partial')}
              className="flex flex-col items-center gap-1 group"
              title="Select Partial (Circle)"
            >
              <div className={`w-8 h-8 rounded-full border-2 flex items-center justify-center transition-all ${
                (value || {})[sub.id] === 'Partial'
                  ? 'bg-yellow-600 border-yellow-400 shadow-lg shadow-yellow-500/30'
                  : 'border-gray-500 hover:border-yellow-400 bg-white/5'
              }`}>
                {(value || {})[sub.id] === 'Partial' && (
                  <span className="w-2 h-2 bg-white rounded-full" />
                )}
              </div>
              <span className={`text-[10px] ${(value || {})[sub.id] === 'Partial' ? 'text-yellow-400' : 'text-gray-500'}`}>
                Partial
              </span>
            </button>
          </div>

          {/* ✅ LABEL BAAD MEIN */}
          <span className="text-sm text-white flex-1">{sub.label}</span>
        </div>
      ))}
    </div>
  );
};

// ============================================================
// ===== YES/NO QUESTION =====
// ============================================================
const YesNoQuestion = ({ question, value, onChange }: any) => (
  <div className="flex gap-4">
    {['Yes', 'No'].map((option) => (
      <button
        key={option}
        onClick={() => onChange(option)}
        className={`px-6 py-2 rounded-lg text-sm font-medium transition-all ${
          value === option
            ? option === 'Yes'
              ? 'bg-green-700 text-white border border-green-500 shadow-lg shadow-green-500/30'
              : 'bg-red-700 text-white border border-red-500 shadow-lg shadow-red-500/30'
            : 'bg-white/10 text-gray-400 hover:bg-white/20 border border-white/10'
        }`}
      >
        {option}
      </button>
    ))}
  </div>
);

// ============================================================
// ===== CONDITIONAL QUESTION =====
// ============================================================
const ConditionalQuestion = ({ question, value, onChange }: any) => {
  const mainValue = value?.main || '';
  const subValue = value?.sub || {};

  const handleMainChange = (val: string) => {
    onChange({ main: val, sub: {} });
  };

  const handleSubChange = (subId: string, val: string) => {
    onChange({ main: mainValue, sub: { ...subValue, [subId]: val } });
  };

  return (
    <div className="space-y-4">
      <div className="flex gap-4">
        {['Yes', 'No'].map((option) => (
          <button
            key={option}
            onClick={() => handleMainChange(option)}
            className={`px-6 py-2 rounded-lg text-sm font-medium transition-all ${
              mainValue === option
                ? option === 'Yes'
                  ? 'bg-green-700 text-white border border-green-500 shadow-lg shadow-green-500/30'
                  : 'bg-red-700 text-white border border-red-500 shadow-lg shadow-red-500/30'
                : 'bg-white/10 text-gray-400 hover:bg-white/20 border border-white/10'
            }`}
          >
            {option}
          </button>
        ))}
      </div>
      {mainValue === 'Yes' && (
        <div className="space-y-3 ml-4 border-l-2 border-white/10 pl-4">
          {question.subOptions.map((sub: any) => (
            <div key={sub.id} className="flex items-center gap-4 p-2 rounded-lg bg-white/5 border border-white/10">
              <span className="text-sm text-white flex-1">{sub.label}</span>
              <div className="flex gap-2">
                {['Yes', 'Partial'].map((option) => (
                  <button
                    key={option}
                    onClick={() => handleSubChange(sub.id, option)}
                    className={`px-3 py-1 rounded-lg text-xs font-medium transition-all ${
                      (subValue || {})[sub.id] === option
                        ? option === 'Yes'
                          ? 'bg-green-700 text-white border border-green-500 shadow-lg shadow-green-500/30'
                          : 'bg-yellow-700 text-white border border-yellow-500 shadow-lg shadow-yellow-500/30'
                        : 'bg-white/10 text-gray-400 hover:bg-white/20 border border-white/10'
                    }`}
                  >
                    {option}
                  </button>
                ))}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

// ============================================================
// ===== QUESTION CARD =====
// ============================================================
const QuestionCard = ({ question, value, onChange }: any) => {
  let content;
  
  switch (question.type) {
    case 'checkbox':
      content = <CheckboxQuestion question={question} value={value} onChange={onChange} />;
      break;
    case 'radio-group':
      content = <RadioGroupQuestion question={question} value={value} onChange={onChange} />;
      break;
    case 'yes-no':
      content = <YesNoQuestion question={question} value={value} onChange={onChange} />;
      break;
    case 'conditional':
      content = <ConditionalQuestion question={question} value={value} onChange={onChange} />;
      break;
    default:
      content = null;
  }

  return (
    <div className="bg-white/10 border border-white/20 rounded-2xl backdrop-blur-sm p-5 h-full">
      <div className="flex items-start gap-3">
        <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 flex items-center justify-center text-xs font-semibold text-blue-400">
          {question.id}
        </div>
        <div className="flex-1">
          <h4 className="text-sm font-semibold text-white mb-1">{question.text}</h4>
          

          {/* ✅ STYLED DESCRIPTION - Colorful & Bold */}
          {question.description && (
            <div className="mb-3 p-2 rounded-lg bg-white/5 border border-white/10">
              {question.description === 'Select Square for Yes, Circle for Partial' ? (
                <div className="flex items-center gap-3 flex-wrap text-xs">
                  <span className="text-gray-400">Select:</span>
                  <span className="flex items-center gap-1.5 bg-green-500/20 px-2 py-0.5 rounded-full border border-green-500/30">
                    <span className="w-3 h-3 rounded-sm bg-green-500 inline-block" />
                    <span className="text-green-400 font-bold">Square</span>
                    <span className="text-white">=</span>
                    <span className="text-white font-bold">Yes</span>
                  </span>
                  <span className="text-gray-600">|</span>
                  <span className="flex items-center gap-1.5 bg-yellow-500/20 px-2 py-0.5 rounded-full border border-yellow-500/30">
                    <span className="w-3 h-3 rounded-full bg-yellow-500 inline-block" />
                    <span className="text-yellow-400 font-bold">Circle</span>
                    <span className="text-white">=</span>
                    <span className="text-white font-bold">Partial</span>
                  </span>
                </div>
              ) : (
                <span className="text-gray-400 text-xs">{question.description}</span>
              )}
            </div>
          )}
          
          {content}
        </div>
      </div>
    </div>
  );
};

// ============================================================
// ===== RESULT SECTION WITH 3D PIE CHART =====
// ============================================================
const ResultSection = ({ answers, onReset }: any) => {
  const [showEmailForm, setShowEmailForm] = useState(true);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    designation: '',
  });

  const score = getOverallScore(answers);
  const risk = getRiskLevel(score);
  const categoryScores = getCategoryScores(answers);
  const allQuestions = getAllQuestions();
  const totalQuestions = allQuestions.length;

  let answeredCount = 0;
  allQuestions.forEach(q => {
    if (answers[q.id] !== undefined) {
      const answer = answers[q.id];
      if (typeof answer === 'object') {
        if (Object.keys(answer).length > 0) answeredCount++;
      } else if (answer !== undefined && answer !== null && answer !== '') {
        answeredCount++;
      }
    }
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmitReport = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch('/api/score-report', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...formData,
          score,
          riskLevel: risk.label,
          categoryScores,
          answers,
        }),
      });

      if (response.ok) {
        setIsSubmitted(true);
        setShowEmailForm(false);
      }
    } catch (error) {
      console.error('Error submitting report:', error);
    }
    setIsSubmitting(false);
  };

  // ===== SUBMITTED STATE =====
  if (isSubmitted) {
    return (
      <main className="min-h-screen text-white px-4 relative overflow-hidden pt-28 md:pt-32 pb-16">
        {/* ✅ VIDEO BACKGROUND */}
        <VideoBackground />
        <div className="max-w-4xl mx-auto bg-white/10 border border-white/20 rounded-2xl backdrop-blur-sm p-8 text-center relative z-10">
          <CheckCircle className="w-16 h-16 text-emerald-400 mx-auto mb-4" />
          <h2 className="text-2xl font-bold text-white mb-2">Report Sent! ✅</h2>
          <p className="text-gray-300 mb-4">
            Your detailed Privacy & AI Governance Readiness Report has been sent to <strong>{formData.email}</strong>
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={onReset}
              className="px-6 py-3 rounded-xl bg-white/10 border border-white/10 text-white font-medium hover:bg-white/20 transition-all flex items-center justify-center gap-2"
            >
              <ArrowLeft className="w-5 h-5" />
              Retake Assessment
            </button>
            <Link
              href="/"
              className="px-6 py-3 rounded-xl bg-gradient-to-r from-purple-500 to-pink-500 text-white font-medium hover:scale-105 transition-all flex items-center justify-center gap-2"
            >
              Back to Home
            </Link>
          </div>
        </div>
      </main>
    );
  }

  // ===== EMAIL FORM STATE =====
  if (showEmailForm) {
    return (
      <main className="min-h-screen text-white px-4 relative overflow-hidden pt-28 md:pt-32 pb-16">
        {/* ✅ VIDEO BACKGROUND */}
        <VideoBackground />
        
        <div className="max-w-4xl mx-auto relative z-10">
          {/* ===== 3D PIE CHART ===== */}
          <div className="bg-white/10 border border-white/20 rounded-2xl backdrop-blur-sm p-6 mb-6">
            <div className="flex flex-col md:flex-row items-center justify-center gap-8">
              <PieChart3D answered={answeredCount} total={totalQuestions} />
              <div>
                <h3 className="text-lg font-semibold text-white">Assessment Progress</h3>
                <p className="text-sm text-gray-400">{answeredCount} of {totalQuestions} questions answered</p>
              </div>
            </div>
          </div>

          <div className="bg-white/10 border border-white/20 rounded-2xl backdrop-blur-sm p-6 md:p-8">
            <div className="text-center mb-6">
              <div className="text-6xl font-bold text-white mb-2">{score}%</div>
              <div className="flex items-center justify-center gap-3">
                <span className={`px-4 py-1.5 rounded-full border ${risk.bg} ${risk.border} ${risk.color} font-medium`}>
                  {risk.emoji} {risk.label}
                </span>
              </div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-6">
              {categoryScores.slice(0, 4).map((cat: any, idx: number) => (
                <div key={idx} className="bg-white/5 border border-white/10 rounded-xl p-3 text-center">
                  <p className="text-xs text-gray-400">{cat.name}</p>
                  <p className="text-lg font-bold text-white">{cat.score}%</p>
                </div>
              ))}
            </div>

            <div className="bg-yellow-500/10 border border-yellow-500/30 rounded-xl p-4 mb-6">
              <h4 className="text-sm font-semibold text-yellow-400 mb-2 flex items-center gap-2">
                <AlertCircle className="w-4 h-4" />
                Priority Areas
              </h4>
              <div className="flex flex-wrap gap-2">
                {categoryScores.filter((cat: any) => cat.score < 60).map((cat: any, idx: number) => (
                  <span key={idx} className="text-xs px-3 py-1 rounded-full bg-yellow-500/20 text-yellow-300 border border-yellow-500/30">
                    {cat.name}
                  </span>
                ))}
                {categoryScores.filter((cat: any) => cat.score < 60).length === 0 && (
                  <span className="text-xs text-green-400">✨ All areas are well-covered!</span>
                )}
              </div>
            </div>

            <div className="bg-white/5 border border-white/20 rounded-xl p-6">
              <h3 className="text-lg font-semibold text-white mb-2 flex items-center gap-2">
                <Mail className="w-5 h-5 text-purple-400" />
                Get Your Detailed Report
              </h3>
              <p className="text-sm text-gray-400 mb-4">
                Enter your details to receive a comprehensive readiness report with personalised recommendations.
              </p>
              <form onSubmit={handleSubmitReport} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm text-gray-300 mb-1">Full Name *</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="John Doe"
                      required
                      className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-gray-500 focus:outline-none focus:border-purple-400/50"
                    />
                  </div>
                  <div>
                    <label className="block text-sm text-gray-300 mb-1">Email Address *</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="john@company.com"
                      required
                      className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-gray-500 focus:outline-none focus:border-purple-400/50"
                    />
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm text-gray-300 mb-1">Company Name</label>
                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      placeholder="Your Company"
                      className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-gray-500 focus:outline-none focus:border-purple-400/50"
                    />
                  </div>
                  <div>
                    <label className="block text-sm text-gray-300 mb-1">Designation</label>
                    <input
                      type="text"
                      name="designation"
                      value={formData.designation}
                      onChange={handleInputChange}
                      placeholder="e.g., Privacy Officer"
                      className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-gray-500 focus:outline-none focus:border-purple-400/50"
                    />
                  </div>
                </div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full py-3 rounded-xl bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold hover:scale-105 transition-all flex items-center justify-center gap-2 ${
                    isSubmitting ? 'opacity-70 cursor-not-allowed' : ''
                  }`}
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-5 h-5 animate-spin" />
                      Generating Report...
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      Get My Detailed Report
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </main>
    );
  }

  // ===== INITIAL RESULT STATE =====
  return (
    <main className="min-h-screen text-white px-4 relative overflow-hidden pt-28 md:pt-32 pb-16">
      {/* ✅ VIDEO BACKGROUND */}
      <VideoBackground />
      
      <div className="max-w-4xl mx-auto relative z-10">
        {/* ===== 3D PIE CHART ===== */}
        <div className="bg-white/10 border border-white/20 rounded-2xl backdrop-blur-sm p-6 mb-6">
          <div className="flex flex-col md:flex-row items-center justify-center gap-8">
            <PieChart3D answered={answeredCount} total={totalQuestions} />
            <div>
              <h3 className="text-lg font-semibold text-white">Assessment Progress</h3>
              <p className="text-sm text-gray-400">{answeredCount} of {totalQuestions} questions answered</p>
            </div>
          </div>
        </div>

        <div className="bg-white/10 border border-white/20 rounded-2xl backdrop-blur-sm p-6 md:p-8">
          <div className="text-center mb-8">
            <div className="text-6xl font-bold text-white mb-2">{score}%</div>
            <div className="flex items-center justify-center gap-3">
              <span className={`px-4 py-1.5 rounded-full border ${risk.bg} ${risk.border} ${risk.color} font-medium`}>
                {risk.emoji} {risk.label}
              </span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
            {categoryScores.map((cat: any, idx: number) => {
              const Icon = cat.icon;
              return (
                <div key={idx} className="bg-white/5 border border-white/10 rounded-xl p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <Icon className="w-4 h-4 text-purple-400" />
                    <span className="text-sm font-medium text-white">{cat.name}</span>
                    <span className="ml-auto text-sm text-gray-400">{cat.score}%</span>
                  </div>
                  <div className="w-full h-1.5 bg-white/10 rounded-full overflow-hidden">
                    <div 
                      className={`h-full rounded-full transition-all duration-500 ${
                        cat.score >= 80 ? 'bg-green-400' : cat.score >= 50 ? 'bg-yellow-400' : 'bg-red-400'
                      }`}
                      style={{ width: `${cat.score}%` }}
                    />
                  </div>
                </div>
              );
            })}
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <button
              onClick={() => setShowEmailForm(true)}
              className="flex-1 px-6 py-3 rounded-xl bg-gradient-to-r from-purple-500 to-pink-500 text-white font-medium hover:scale-105 transition-all flex items-center justify-center gap-2 shadow-lg shadow-purple-500/30"
            >
              <Mail className="w-5 h-5" />
              Get Detailed Report
            </button>
            <button
              onClick={onReset}
              className="flex-1 px-6 py-3 rounded-xl bg-white/10 border border-white/10 text-white font-medium hover:bg-white/20 transition-all flex items-center justify-center gap-2"
            >
              <ArrowLeft className="w-5 h-5" />
              Retake Assessment
            </button>
          </div>
        </div>
      </div>
    </main>
  );
};

// ============================================================
// ===== MAIN PAGE =====
// ============================================================
export default function ScorecardPage() {
  const [currentPage, setCurrentPage] = useState(0);
  const [answers, setAnswers] = useState<Record<number, any>>({});
  const [isComplete, setIsComplete] = useState(false);
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

  const allQuestions = getAllQuestions();
  const totalQuestions = allQuestions.length;

  const questionsPerPage = 4;
  const pages = [];
  for (let i = 0; i < allQuestions.length; i += questionsPerPage) {
    pages.push(allQuestions.slice(i, i + questionsPerPage));
  }
  const totalPages = pages.length;
  const currentQuestions = pages[currentPage] || [];

  const handleAnswer = (questionId: number, value: any) => {
    setAnswers(prev => ({ ...prev, [questionId]: value }));
  };

  const handleNext = () => {
    if (currentPage < totalPages - 1) {
      setCurrentPage(prev => prev + 1);
    } else {
      setIsComplete(true);
    }
  };

  const handlePrevious = () => {
    if (currentPage > 0) {
      setCurrentPage(prev => prev - 1);
    }
  };

  const handleReset = () => {
    setAnswers({});
    setCurrentPage(0);
    setIsComplete(false);
  };

  const getAnsweredCount = () => {
    let count = 0;
    allQuestions.forEach(q => {
      if (answers[q.id] !== undefined) count++;
    });
    return count;
  };

  const progress = Math.round((getAnsweredCount() / totalQuestions) * 100);

  if (isComplete) {
    return <ResultSection answers={answers} onReset={handleReset} />;
  }

  return (
    <main className="min-h-screen text-white px-4 relative overflow-hidden pt-28 md:pt-32 pb-16">
      {/* ✅ VIDEO BACKGROUND - Endless Loop */}
      <VideoBackground />

      {/* Stars Effect */}
      <div className="absolute inset-0 -z-10">{stars}</div>

      <div className="max-w-6xl mx-auto relative z-10">
        <Link href="/" className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors mb-6 group">
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          Back to Home
        </Link>

        <motion.div 
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 backdrop-blur-sm text-sm font-semibold text-blue-400 mb-4">
            <FileText className="w-4 h-4" />
            Compliance Assessment
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-white drop-shadow-2xl mb-2">
            {scorecardData.title}
          </h1>
          <p className="text-gray-200 drop-shadow-lg">{scorecardData.subtitle}</p>
        </motion.div>

        <div className="bg-white/10 border border-white/20 rounded-2xl backdrop-blur-sm p-4 mb-6">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm text-gray-300">
              Page {currentPage + 1} of {totalPages} ({getAnsweredCount()}/{totalQuestions} answered)
            </span>
            <span className="text-sm font-semibold text-white">{progress}%</span>
          </div>
          <div className="w-full h-2 bg-white/10 rounded-full overflow-hidden">
            <div 
              className="h-full bg-gradient-to-r from-blue-400 to-purple-400 rounded-full transition-all duration-500"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          {currentQuestions.map((question) => (
            <QuestionCard
              key={question.id}
              question={question}
              value={answers[question.id]}
              onChange={(val: any) => handleAnswer(question.id, val)}
            />
          ))}
        </div>

        <div className="flex justify-between mt-4">
          <button
            onClick={handlePrevious}
            disabled={currentPage === 0}
            className={`px-4 py-2 rounded-xl flex items-center gap-2 transition-all ${
              currentPage === 0
                ? 'text-gray-600 cursor-not-allowed'
                : 'text-gray-400 hover:text-white hover:bg-white/10'
            }`}
          >
            <ChevronLeft className="w-4 h-4" />
            Previous
          </button>
          <span className="text-sm text-gray-500">
            {currentPage + 1} / {totalPages}
          </span>
          <button
            onClick={handleNext}
            className="px-4 py-2 rounded-xl bg-gradient-to-r from-blue-500 to-purple-600 text-white font-medium hover:scale-105 transition-all flex items-center gap-2"
          >
            {currentPage === totalPages - 1 ? 'See Results' : 'Next'}
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </main>
  );
}