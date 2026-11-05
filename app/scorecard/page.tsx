"use client";

import { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ArrowLeft, ChevronRight, ChevronLeft, CheckCircle, 
  FileText, Loader2, Mail, Send, ChevronDown, 
  ShieldCheck, Sparkles, Check
} from 'lucide-react';
import { scorecardData, getOverallScore, getRiskLevel, getCategoryScores, getAllQuestions } from '@/data/scorecard';
import { ConsentCheckbox } from '@/components/ui/ConsentCheckbox';

// ============================================================
// ===== LIQUID GLASS BACKGROUND =====
// ============================================================
const Background = () => {
  return (
    <div className="fixed inset-0 -z-20 bg-cover bg-center bg-no-repeat" style={{ backgroundImage: "url('/images/home1.jpeg')" }}>
      <div className="absolute inset-0 bg-black/50 backdrop-blur-[12px]" />
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-cyan-400/20 rounded-full blur-[120px] mix-blend-screen" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-[120px] mix-blend-screen" />
    </div>
  );
};

// ============================================================
// ===== LIQUID PROGRESS BAR =====
// ============================================================
const LiquidProgress = ({ progress }: { progress: number }) => (
  <div className="w-full h-2 bg-white/10 rounded-full overflow-hidden backdrop-blur-md border border-white/5 shadow-inner">
    <motion.div 
      className="h-full bg-gradient-to-r from-cyan-300 via-blue-400 to-cyan-400 rounded-full relative"
      initial={{ width: 0 }}
      animate={{ width: `${progress}%` }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    />
  </div>
);

// ============================================================
// ===== 3D GLASS SCORE RING =====
// ============================================================
const GlassScoreRing = ({ percentage, label, color = "#22d3ee" }: { percentage: number, label: string, color?: string }) => {
  const radius = 60;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (percentage / 100) * circumference;

  return (
    <div className="relative flex flex-col items-center justify-center p-4">
      <svg width="140" height="140" className="transform -rotate-90 drop-shadow-[0_0_15px_rgba(34,211,238,0.3)]">
        <circle cx="70" cy="70" r={radius} stroke="rgba(255,255,255,0.1)" strokeWidth="10" fill="transparent" />
        <motion.circle 
          cx="70" cy="70" r={radius} 
          stroke={color} strokeWidth="10" fill="transparent" 
          strokeDasharray={circumference} 
          initial={{ strokeDashoffset: circumference }}
          animate={{ strokeDashoffset }} 
          transition={{ duration: 1.5, ease: "easeOut" }}
          strokeLinecap="round" 
        />
      </svg>
      <div className="absolute flex flex-col items-center justify-center">
        <span className="text-3xl font-extrabold text-white drop-shadow-md">{percentage}%</span>
        <span className="text-[10px] font-bold uppercase tracking-widest text-cyan-300 mt-0.5">{label}</span>
      </div>
    </div>
  );
};

// ============================================================
// ===== CHECKBOX QUESTION (Fixed Checkbox) =====
// ============================================================
const CheckboxQuestion = ({ question, value, onChange }: any) => {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  const toggleDropdown = (optionId: string) => {
    setOpenDropdown(openDropdown === optionId ? null : optionId);
  };

  const toggleCategory = (option: any) => {
    const current = value || [];
    const allItemIds = option.items || [];
    const allSelected = allItemIds.every((item: string) => current.includes(item));
    if (allSelected) onChange(current.filter((id: string) => !allItemIds.includes(id)));
    else {
      const newValue = [...current];
      allItemIds.forEach((item: string) => { if (!newValue.includes(item)) newValue.push(item); });
      onChange(newValue);
    }
  };

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
        const selectedCount = (value || []).filter((item: string) => option.items?.includes(item)).length;
        const totalItems = option.items?.length || 0;

        return (
          <div key={option.id} className={`border rounded-xl overflow-hidden transition-all duration-300 backdrop-blur-md ${isSelected ? 'border-cyan-400/50 bg-white/10' : 'border-white/10 bg-white/5 hover:border-white/20'}`}>
            {/* Header - Checkbox on left, click to expand on right */}
            <div className="flex items-center justify-between px-3 py-2.5">
              <div className="flex items-center gap-3">
                {/* ✅ FIXED: Separate Checkbox button */}
                <button 
                  type="button"
                  onClick={(e) => { e.stopPropagation(); toggleCategory(option); }}
                  className={`w-5 h-5 rounded flex items-center justify-center border transition-all ${isSelected ? 'bg-cyan-400 border-cyan-400' : 'border-white/30 hover:border-white/50'}`}
                >
                  {isSelected && <Check className="w-3.5 h-3.5 text-black" strokeWidth={3} />}
                </button>
                
                {/* Clickable Label (Opens Dropdown) */}
                <button 
                  type="button"
                  onClick={() => toggleDropdown(option.id)}
                  className="flex items-center gap-2 text-left"
                >
                  <span className={`text-sm font-medium ${isSelected ? 'text-white' : 'text-gray-200'}`}>
                    {option.label}
                  </span>
                  {option.items && (
                    <span className="text-[10px] text-cyan-200/70 bg-white/10 px-2 py-0.5 rounded-full">
                      {selectedCount}/{totalItems}
                    </span>
                  )}
                </button>
              </div>
              
              {/* Chevron Button */}
              <button 
                type="button"
                onClick={() => toggleDropdown(option.id)}
                className="p-1"
              >
                <ChevronDown className={`w-4 h-4 text-gray-300 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
              </button>
            </div>

            {/* Dropdown Items */}
            {isOpen && option.items && (
              <div className="px-3 pb-3 border-t border-white/10 pt-2 bg-black/20">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5">
                  {option.items.map((item: string, idx: number) => (
                    <div key={idx} className="flex items-center gap-2 py-1.5 px-2.5 rounded-lg bg-white/5 border border-white/5">
                      <div className="w-1 h-1 rounded-full bg-cyan-400" />
                      <span className="text-xs text-gray-300">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};

// ============================================================
// ===== RADIO GROUP QUESTION =====
// ============================================================
const RadioGroupQuestion = ({ question, value, onChange }: any) => {
  const handleChange = (subId: string, val: string) => {
    onChange({ ...(value || {}), [subId]: val });
  };

  return (
    <div className="space-y-2">
      {question.subOptions.map((sub: any) => (
        <div key={sub.id} className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 p-3 rounded-xl bg-white/5 border border-white/10 backdrop-blur-md transition-all">
          <span className="text-sm text-gray-200 font-medium">{sub.label}</span>
          <div className="flex items-center gap-2">
            <button onClick={() => handleChange(sub.id, 'Yes')} className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg border text-[11px] font-semibold transition-all ${(value || {})[sub.id] === 'Yes' ? 'bg-emerald-500/20 border-emerald-400/50 text-emerald-300' : 'border-white/10 text-gray-400 hover:bg-white/10'}`}>
              <div className={`w-3 h-3 rounded-sm border flex items-center justify-center ${(value || {})[sub.id] === 'Yes' ? 'bg-emerald-400 border-emerald-400' : 'border-gray-500'}`}>
                {(value || {})[sub.id] === 'Yes' && <Check className="w-2 h-2 text-black" strokeWidth={4} />}
              </div>
              Yes
            </button>
            <button onClick={() => handleChange(sub.id, 'Partial')} className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg border text-[11px] font-semibold transition-all ${(value || {})[sub.id] === 'Partial' ? 'bg-yellow-500/20 border-yellow-400/50 text-yellow-300' : 'border-white/10 text-gray-400 hover:bg-white/10'}`}>
              <div className={`w-3 h-3 rounded-full border flex items-center justify-center ${(value || {})[sub.id] === 'Partial' ? 'bg-yellow-400 border-yellow-400' : 'border-gray-500'}`}>
                {(value || {})[sub.id] === 'Partial' && <div className="w-1 h-1 bg-black rounded-full" />}
              </div>
              Partial
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

// ============================================================
// ===== YES/NO QUESTION =====
// ============================================================
const YesNoQuestion = ({ value, onChange }: any) => (
  <div className="grid grid-cols-2 gap-3">
    {['Yes', 'No'].map((option) => (
      <button key={option} onClick={() => onChange(option)} className={`py-3 rounded-xl border text-sm font-bold transition-all backdrop-blur-md ${value === option ? (option === 'Yes' ? 'bg-emerald-500/20 border-emerald-400/50 text-emerald-300' : 'bg-rose-500/20 border-rose-400/50 text-rose-300') : 'bg-white/5 border-white/10 text-gray-300 hover:border-white/30 hover:bg-white/10'}`}>
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

  return (
    <div className="space-y-3">
      <div className="grid grid-cols-2 gap-3">
        {['Yes', 'No'].map((option) => (
          <button key={option} onClick={() => onChange({ main: option, sub: {} })} className={`py-3 rounded-xl border text-sm font-bold transition-all backdrop-blur-md ${mainValue === option ? (option === 'Yes' ? 'bg-emerald-500/20 border-emerald-400/50 text-emerald-300' : 'bg-rose-500/20 border-rose-400/50 text-rose-300') : 'bg-white/5 border-white/10 text-gray-300 hover:border-white/30'}`}>
            {option}
          </button>
        ))}
      </div>
      <AnimatePresence>
        {mainValue === 'Yes' && (
          <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} exit={{ opacity: 0, height: 0 }} className="space-y-2 pt-1">
            {question.subOptions.map((sub: any) => (
              <div key={sub.id} className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 p-3 rounded-xl bg-white/5 border border-white/10">
                <span className="text-sm text-gray-200">{sub.label}</span>
                <div className="flex gap-2">
                  {['Yes', 'Partial'].map((option) => (
                    <button key={option} onClick={() => onChange({ main: mainValue, sub: { ...subValue, [sub.id]: option } })} className={`px-3 py-1.5 rounded-lg text-[11px] font-semibold transition-all ${(subValue || {})[sub.id] === option ? (option === 'Yes' ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-400/50' : 'bg-yellow-500/20 text-yellow-300 border border-yellow-400/50') : 'text-gray-400 border border-transparent hover:bg-white/10'}`}>
                      {option}
                    </button>
                  ))}
                </div>
              </div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

// ============================================================
// ===== QUESTION CARD (Compact & Shrunk) =====
// ============================================================
const QuestionCard = ({ question, value, onChange }: any) => {
  let content;
  switch (question.type) {
    case 'checkbox': content = <CheckboxQuestion question={question} value={value} onChange={onChange} />; break;
    case 'radio-group': content = <RadioGroupQuestion question={question} value={value} onChange={onChange} />; break;
    case 'yes-no': content = <YesNoQuestion question={question} value={value} onChange={onChange} />; break;
    case 'conditional': content = <ConditionalQuestion question={question} value={value} onChange={onChange} />; break;
    default: content = null;
  }

  return (
    <div className="bg-white/[0.03] border border-white/10 rounded-[1.5rem] p-4 sm:p-6 backdrop-blur-2xl shadow-[0_8px_32px_rgba(0,0,0,0.3)]">
      <div className="mb-4">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-400/10 border border-cyan-400/20 text-[10px] font-bold uppercase tracking-wider text-cyan-300 mb-3">
          <Sparkles className="w-3 h-3" /> Question {question.id}
        </div>
        <h3 className="text-xl sm:text-2xl font-bold text-white leading-tight drop-shadow-sm">{question.text}</h3>
        
        {question.description && (
          <div className="mt-3 p-2.5 rounded-lg bg-white/5 border border-white/10 text-xs text-gray-300 backdrop-blur-md">
             {question.description === 'Select Square for Yes, Circle for Partial' ? (
                <div className="flex items-center gap-2 flex-wrap">
                  <span className="text-gray-400">Select:</span>
                  <span className="flex items-center gap-1 text-emerald-400 font-bold"><div className="w-2.5 h-2.5 rounded-sm bg-emerald-400" /> Square = Yes</span>
                  <span className="text-gray-600">|</span>
                  <span className="flex items-center gap-1 text-yellow-400 font-bold"><div className="w-2.5 h-2.5 rounded-full bg-yellow-400" /> Circle = Partial</span>
                </div>
              ) : (
                question.description
              )}
          </div>
        )}
      </div>
      {content}
    </div>
  );
};

// ============================================================
// ===== RESULT SECTION =====
// ============================================================
const ResultSection = ({ answers, onReset }: any) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [consent, setConsent] = useState(false);
  const [formError, setFormError] = useState<string | null>(null);
  const [formData, setFormData] = useState({ name: '', email: '', company: '', designation: '' });

  const score = getOverallScore(answers);
  const risk = getRiskLevel(score);
  const categoryScores = getCategoryScores(answers);

  const handleSubmitReport = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!consent) return setFormError('Please agree to the Consent Notice and Privacy Policy to proceed.');
    setFormError(null); 
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
          consent, 
          consentTimestamp: new Date().toISOString() 
        }),
      });
      
      if (response.ok) { 
        setIsSubmitted(true); 
        setConsent(false); 
      } else {
        setFormError('Server error. Please try again.');
      }
    } catch (error) { 
      setFormError('Something went wrong. Please try again.'); 
    }
    
    setIsSubmitting(false);
  };

  if (isSubmitted) {
    return (
      <main className="min-h-screen text-white px-4 relative overflow-hidden pt-[140px] pb-16 flex items-center justify-center">
        <Background />
        <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="max-w-lg w-full bg-white/[0.03] border border-white/10 rounded-[2rem] p-10 text-center backdrop-blur-2xl relative z-10 shadow-[0_8px_32px_rgba(0,0,0,0.4)]">
          <div className="w-20 h-20 bg-emerald-500/20 rounded-full flex items-center justify-center mx-auto mb-6 border border-emerald-400/30">
            <CheckCircle className="w-10 h-10 text-emerald-400" />
          </div>
          <h2 className="text-2xl font-bold text-white mb-2">Report Sent Successfully!</h2>
          <p className="text-gray-300 mb-8">Your detailed report has been sent to <span className="text-white font-medium">{formData.email}</span></p>
          <div className="flex flex-col gap-3">
            <button onClick={onReset} className="w-full px-6 py-3.5 rounded-xl bg-cyan-400 text-black font-bold hover:bg-cyan-300 transition-all shadow-[0_0_20px_rgba(34,211,238,0.3)]">
              Retake Assessment
            </button>
            <Link href="/" className="w-full px-6 py-3.5 rounded-xl bg-white/5 border border-white/10 text-white font-medium hover:bg-white/10 transition-all text-center">
              Back to Home
            </Link>
          </div>
        </motion.div>
      </main>
    );
  }

  return (
    <main className="min-h-screen text-white px-4 relative overflow-hidden pt-[140px] pb-16">
      <Background />
      
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-[1.4fr_1fr] gap-8 items-start">
          
          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} className="space-y-6">
            <div className="bg-white/[0.03] border border-white/10 rounded-[2rem] p-8 sm:p-10 backdrop-blur-2xl shadow-[0_8px_32px_rgba(0,0,0,0.3)]">
              <h2 className="text-sm font-bold text-cyan-300 uppercase tracking-wider mb-8 flex items-center gap-2">
                <ShieldCheck className="w-4 h-4" /> Overall Readiness
              </h2>
              <div className="flex flex-col sm:flex-row items-center gap-10">
                <GlassScoreRing percentage={score} label={risk.label} color={score > 70 ? '#10b981' : score > 40 ? '#eab308' : '#f43f5e'} />
                <div className="flex-1 text-center sm:text-left">
                  <h3 className="text-3xl font-bold text-white mb-3">{risk.emoji} {risk.label}</h3>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    Based on your answers, your organization's privacy and AI governance readiness is currently at <strong className="text-white">{score}%</strong>.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white/[0.03] border border-white/10 rounded-[2rem] p-8 backdrop-blur-2xl shadow-[0_8px_32px_rgba(0,0,0,0.3)]">
              <h3 className="text-lg font-bold text-white mb-6">Category Breakdown</h3>
              <div className="space-y-6">
                {categoryScores.map((cat: any, idx: number) => {
                  const Icon = cat.icon || ShieldCheck;
                  return (
                    <div key={idx}>
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center gap-2">
                          <Icon className="w-4 h-4 text-gray-400" />
                          <span className="text-sm font-medium text-gray-200">{cat.name}</span>
                        </div>
                        <span className="text-sm font-bold text-white">{cat.score}%</span>
                      </div>
                      <div className="w-full h-2 bg-black/40 rounded-full overflow-hidden border border-white/5">
                        <motion.div 
                          initial={{ width: 0 }} animate={{ width: `${cat.score}%` }} transition={{ duration: 1, delay: 0.2 + idx * 0.1 }}
                          className={`h-full rounded-full ${cat.score >= 80 ? 'bg-emerald-400 shadow-[0_0_10px_rgba(16,185,129,0.5)]' : cat.score >= 50 ? 'bg-yellow-400 shadow-[0_0_10px_rgba(234,179,8,0.5)]' : 'bg-rose-400 shadow-[0_0_10px_rgba(244,63,94,0.5)]'}`} 
                        />
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="bg-white/[0.03] border border-white/10 rounded-[2rem] p-8 backdrop-blur-2xl lg:sticky lg:top-28 shadow-[0_8px_32px_rgba(0,0,0,0.3)]">
            <div className="flex items-center gap-3 mb-8">
              <div className="p-2.5 bg-cyan-400/10 rounded-xl border border-cyan-400/20"><Mail className="w-6 h-6 text-cyan-300" /></div>
              <div>
                <h3 className="text-xl font-bold text-white">Get Detailed Report</h3>
                <p className="text-xs text-gray-400 mt-1">Sent directly to your inbox.</p>
              </div>
            </div>
            
            <form onSubmit={handleSubmitReport} className="space-y-4">
              <div>
                <label className="block text-xs font-medium text-gray-400 mb-1.5">Full Name *</label>
                <input type="text" required value={formData.name} onChange={e => setFormData({...formData, name: e.target.value})} className="w-full px-4 py-3 rounded-xl bg-black/30 border border-white/10 text-white text-sm focus:border-cyan-400/50 outline-none transition-colors backdrop-blur-md" placeholder="John Doe" />
              </div>
              <div>
                <label className="block text-xs font-medium text-gray-400 mb-1.5">Work Email *</label>
                <input type="email" required value={formData.email} onChange={e => setFormData({...formData, email: e.target.value})} className="w-full px-4 py-3 rounded-xl bg-black/30 border border-white/10 text-white text-sm focus:border-cyan-400/50 outline-none transition-colors backdrop-blur-md" placeholder="john@company.com" />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-medium text-gray-400 mb-1.5">Company</label>
                  <input type="text" value={formData.company} onChange={e => setFormData({...formData, company: e.target.value})} className="w-full px-4 py-3 rounded-xl bg-black/30 border border-white/10 text-white text-sm focus:border-cyan-400/50 outline-none transition-colors backdrop-blur-md" placeholder="Acme Corp" />
                </div>
                <div>
                  <label className="block text-xs font-medium text-gray-400 mb-1.5">Designation</label>
                  <input type="text" value={formData.designation} onChange={e => setFormData({...formData, designation: e.target.value})} className="w-full px-4 py-3 rounded-xl bg-black/30 border border-white/10 text-white text-sm focus:border-cyan-400/50 outline-none transition-colors backdrop-blur-md" placeholder="Privacy Officer" />
                </div>
              </div>

              <div className="pt-3">
                <ConsentCheckbox id="scorecard-consent" checked={consent} onChange={(val) => { setConsent(val); if (formError) setFormError(null); }} error={formError || undefined} />
              </div>

              <button type="submit" disabled={isSubmitting} className="w-full mt-4 py-3.5 rounded-xl bg-gradient-to-r from-cyan-400 to-blue-500 text-black font-bold hover:scale-[1.02] transition-all flex items-center justify-center gap-2 disabled:opacity-70 shadow-[0_0_20px_rgba(34,211,238,0.3)]">
                {isSubmitting ? <><Loader2 className="w-5 h-5 animate-spin" /> Sending...</> : <><Send className="w-5 h-5" /> Send Me My Report</>}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </main>
  );
};

// ============================================================
// ===== MAIN PAGE (Step-by-Step Wizard) =====
// ============================================================
export default function ScorecardPage() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<number, any>>({});
  const [isComplete, setIsComplete] = useState(false);

  const allQuestions = getAllQuestions();
  const totalQuestions = allQuestions.length;
  const currentQuestion = allQuestions[currentQuestionIndex];

  const handleAnswer = (value: any) => {
    setAnswers(prev => ({ ...prev, [currentQuestion.id]: value }));
  };

  const handleNext = () => {
    if (currentQuestionIndex < totalQuestions - 1) {
      setCurrentQuestionIndex(prev => prev + 1);
    } else {
      setIsComplete(true);
    }
  };

  const handlePrevious = () => {
    if (currentQuestionIndex > 0) setCurrentQuestionIndex(prev => prev - 1);
  };

  const handleReset = () => {
    setAnswers({});
    setCurrentQuestionIndex(0);
    setIsComplete(false);
  };

  const progress = Math.round(((currentQuestionIndex + 1) / totalQuestions) * 100);

  if (isComplete) {
    return <ResultSection answers={answers} onReset={handleReset} />;
  }

  return (
    <main className="min-h-screen text-white relative overflow-hidden pt-[100px] pb-6 flex flex-col justify-center">
      <Background />

      <div className="max-w-2xl w-full mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Top Bar */}
        <div className="flex items-center justify-between mb-4">
          <Link href="/" className="inline-flex items-center gap-2 text-gray-300 hover:text-white transition-colors group text-xs bg-white/5 px-3 py-1.5 rounded-full backdrop-blur-md border border-white/10">
            <ArrowLeft className="w-3.5 h-3.5 group-hover:-translate-x-1 transition-transform" /> Back to Home
          </Link>
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-cyan-400/10 border border-cyan-400/20 text-[10px] font-semibold text-cyan-300 backdrop-blur-md">
            <FileText className="w-3 h-3" /> DPDPA Assessment
          </div>
        </div>

        {/* Progress Bar */}
        <div className="mb-4 bg-white/[0.03] border border-white/10 rounded-2xl p-3 backdrop-blur-xl shadow-lg">
          <div className="flex items-center justify-between mb-1.5 px-1">
            <span className="text-[11px] font-medium text-gray-400">Progress</span>
            <span className="text-[11px] font-bold text-cyan-300 bg-cyan-400/10 px-2 py-0.5 rounded-full">{progress}%</span>
          </div>
          <LiquidProgress progress={progress} />
        </div>

        {/* Question Area (Shrunk) */}
        <div className="w-full">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentQuestionIndex}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.25 }}
            >
              <QuestionCard
                question={currentQuestion}
                value={answers[currentQuestion.id]}
                onChange={handleAnswer}
              />
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Navigation Buttons */}
        <div className="w-full mx-auto flex items-center justify-between pt-5 mt-2">
          <button
            onClick={handlePrevious}
            disabled={currentQuestionIndex === 0}
            className={`px-5 py-2.5 rounded-xl flex items-center gap-2 text-xs font-medium transition-all backdrop-blur-md ${
              currentQuestionIndex === 0 ? 'text-gray-600 cursor-not-allowed opacity-50' : 'text-gray-200 hover:text-white bg-white/5 border border-white/10 hover:bg-white/10'
            }`}
          >
            <ChevronLeft className="w-3.5 h-3.5" /> Previous
          </button>
          
          <div className="hidden sm:flex gap-1.5">
            {allQuestions.map((_, idx) => (
              <div key={idx} className={`h-1.5 rounded-full transition-all duration-300 ${idx === currentQuestionIndex ? 'w-5 bg-cyan-400' : idx < currentQuestionIndex ? 'w-1.5 bg-cyan-400/50' : 'w-1.5 bg-white/20'}`} />
            ))}
          </div>
          
          <button
            onClick={handleNext}
            className="px-6 py-2.5 rounded-xl bg-gradient-to-r from-cyan-400 to-blue-500 text-black text-xs font-bold hover:scale-[1.02] transition-all flex items-center gap-2 shadow-[0_0_15px_rgba(34,211,238,0.3)]"
          >
            {currentQuestionIndex === totalQuestions - 1 ? 'See Results' : 'Next'}
            <ChevronRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </main>
  );
}