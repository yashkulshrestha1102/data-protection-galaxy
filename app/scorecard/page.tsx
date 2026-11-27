"use client";

// app/scorecard/page.tsx
// DPDPA Compliance Scorecard — step-by-step assessment.
// Layout: a step list on the left (desktop) shows every topic and what is done,
// one large, easy-to-tap question card on the right, and a navigation bar that
// stays on screen. Questions, options and scoring are unchanged (data/scorecard.ts).

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ArrowLeft, ChevronRight, ChevronLeft, CheckCircle,
  Loader2, Mail, Send, ChevronDown,
  ShieldCheck, Check, RotateCcw, Lock, ListChecks
} from 'lucide-react';
import { scorecardData, getOverallScore, getRiskLevel, getCategoryScores, getAllQuestions } from '@/data/scorecard';
import { ConsentCheckbox } from '@/components/ui/ConsentCheckbox';

// ============================================================
// ===== BACKGROUND =====
// ============================================================
const Background = () => (
  <div className="fixed inset-0 -z-20 bg-cover bg-center bg-no-repeat" style={{ backgroundImage: "url('/images/home1.webp')" }}>
    <div className="absolute inset-0 bg-black/70 backdrop-blur-[10px]" />
    <div className="absolute top-0 left-1/4 w-96 h-96 bg-cyan-400/15 rounded-full blur-[120px]" />
    <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500/15 rounded-full blur-[120px]" />
  </div>
);

// ============================================================
// ===== HELPERS =====
// ============================================================
type AnyQuestion = ReturnType<typeof getAllQuestions>[number];

/** Category (topic) of every question, in order. */
const QUESTION_CATEGORY: Record<number, { name: string; icon: any }> = Object.fromEntries(
  scorecardData.categories.flatMap((cat) => cat.questions.map((q) => [q.id, { name: cat.name, icon: cat.icon }]))
);

/** True once the visitor has given at least one answer to the question. */
const isAnswered = (question: AnyQuestion, value: any): boolean => {
  if (value === undefined || value === null) return false;
  switch (question.type) {
    case 'checkbox': return Array.isArray(value) && value.length > 0;
    case 'radio-group': return Object.values(value || {}).some(Boolean);
    case 'yes-no': return value === 'Yes' || value === 'No';
    case 'conditional': return !!value?.main;
    default: return false;
  }
};

// ============================================================
// ===== SCORE RING (results) =====
// ============================================================
const ScoreRing = ({ percentage, label, color }: { percentage: number; label: string; color: string }) => {
  const radius = 72;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (percentage / 100) * circumference;
  return (
    <div className="relative flex items-center justify-center shrink-0">
      <svg width="176" height="176" className="-rotate-90">
        <circle cx="88" cy="88" r={radius} stroke="rgba(255,255,255,0.08)" strokeWidth="12" fill="transparent" />
        <motion.circle
          cx="88" cy="88" r={radius}
          stroke={color} strokeWidth="12" fill="transparent"
          strokeDasharray={circumference}
          initial={{ strokeDashoffset: circumference }}
          animate={{ strokeDashoffset }}
          transition={{ duration: 1.4, ease: 'easeOut' }}
          strokeLinecap="round"
        />
      </svg>
      <div className="absolute flex flex-col items-center">
        <span className="text-4xl font-extrabold text-white">{percentage}%</span>
        <span className="mt-1 text-xs font-semibold uppercase tracking-widest" style={{ color }}>{label}</span>
      </div>
    </div>
  );
};

// ============================================================
// ===== ANSWER PILL (Yes / Partial / No) =====
// ============================================================
const AnswerPill = ({
  label, selected, tone, shape, onClick,
}: { label: string; selected: boolean; tone: 'yes' | 'partial' | 'no'; shape?: 'square' | 'circle'; onClick: () => void }) => {
  const toneOn = tone === 'yes'
    ? 'bg-emerald-500/20 border-emerald-400/70 text-emerald-200'
    : tone === 'partial'
      ? 'bg-yellow-500/20 border-yellow-400/70 text-yellow-200'
      : 'bg-rose-500/20 border-rose-400/70 text-rose-200';
  const dotOn = tone === 'yes' ? 'bg-emerald-400 border-emerald-400' : tone === 'partial' ? 'bg-yellow-400 border-yellow-400' : 'bg-rose-400 border-rose-400';
  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={selected}
      className={`min-h-[44px] min-w-[104px] inline-flex items-center justify-center gap-2 px-4 rounded-xl border text-sm font-semibold transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400/60 ${
        selected ? toneOn : 'border-white/15 bg-white/[0.03] text-gray-300 hover:bg-white/10 hover:text-white'
      }`}
    >
      {shape && (
        <span className={`w-4 h-4 border flex items-center justify-center ${shape === 'circle' ? 'rounded-full' : 'rounded-[4px]'} ${selected ? dotOn : 'border-gray-500'}`}>
          {selected && (shape === 'circle'
            ? <span className="w-1.5 h-1.5 bg-black rounded-full" />
            : <Check className="w-3 h-3 text-black" strokeWidth={4} />)}
        </span>
      )}
      {label}
    </button>
  );
};

// ============================================================
// ===== CHECKBOX QUESTION =====
// The whole row selects the data type; "View items" shows what it includes.
// ============================================================
const CheckboxQuestion = ({ question, value, onChange }: any) => {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

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
    <div className="grid grid-cols-1 gap-3">
      {question.options.map((option: any) => {
        const isOpen = openDropdown === option.id;
        const isSelected = isCategorySelected(option);
        const totalItems = option.items?.length || 0;

        return (
          <div
            key={option.id}
            className={`rounded-2xl border transition-all ${isSelected ? 'border-cyan-400/60 bg-cyan-400/[0.08]' : 'border-white/10 bg-white/[0.03] hover:border-white/25'}`}
          >
            <div className="flex items-center gap-3 pr-2">
              <button
                type="button"
                role="checkbox"
                aria-checked={isSelected}
                onClick={() => toggleCategory(option)}
                className="flex-1 flex items-center gap-4 text-left px-4 py-4 min-h-[60px] rounded-2xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400/60"
              >
                <span className={`w-6 h-6 shrink-0 rounded-md border-2 flex items-center justify-center transition-all ${isSelected ? 'bg-cyan-400 border-cyan-400' : 'border-white/30'}`}>
                  {isSelected && <Check className="w-4 h-4 text-black" strokeWidth={3} />}
                </span>
                <span className={`text-base font-medium ${isSelected ? 'text-white' : 'text-gray-200'}`}>{option.label}</span>
              </button>
              {option.items && (
                <button
                  type="button"
                  onClick={() => setOpenDropdown(isOpen ? null : option.id)}
                  aria-expanded={isOpen}
                  className="shrink-0 inline-flex items-center gap-1.5 px-3 py-2 rounded-lg text-xs font-medium text-cyan-200 hover:bg-white/10 transition-colors"
                >
                  <span className="hidden sm:inline">{isOpen ? 'Hide' : 'View'} items</span>
                  <span className="text-gray-400">({totalItems})</span>
                  <ChevronDown className={`w-4 h-4 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
                </button>
              )}
            </div>

            <AnimatePresence initial={false}>
              {isOpen && option.items && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                  className="overflow-hidden"
                >
                  <div className="px-4 pb-4 pt-1 grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {option.items.map((item: string, idx: number) => (
                      <div key={idx} className="flex items-center gap-2.5 py-2 px-3 rounded-lg bg-black/20 border border-white/5">
                        <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 shrink-0" />
                        <span className="text-sm text-gray-300">{item}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
};

// ============================================================
// ===== RADIO GROUP QUESTION (Yes / Partial per item) =====
// ============================================================
const RadioGroupQuestion = ({ question, value, onChange }: any) => {
  const current = value || {};
  const setVal = (subId: string, val: string) => {
    // tapping the selected answer again clears it
    const next = { ...current };
    if (next[subId] === val) delete next[subId];
    else next[subId] = val;
    onChange(next);
  };

  return (
    <div className="grid grid-cols-1 gap-3">
      {question.subOptions.map((sub: any) => (
        <div
          key={sub.id}
          className={`flex flex-col sm:flex-row sm:items-center justify-between gap-3 p-4 rounded-2xl border transition-all ${
            current[sub.id] ? 'border-white/20 bg-white/[0.06]' : 'border-white/10 bg-white/[0.03]'
          }`}
        >
          <span className="text-base text-gray-100 leading-snug">{sub.label}</span>
          <div className="flex items-center gap-2 shrink-0">
            <AnswerPill label="Yes" tone="yes" shape="square" selected={current[sub.id] === 'Yes'} onClick={() => setVal(sub.id, 'Yes')} />
            <AnswerPill label="Partial" tone="partial" shape="circle" selected={current[sub.id] === 'Partial'} onClick={() => setVal(sub.id, 'Partial')} />
          </div>
        </div>
      ))}
    </div>
  );
};

// ============================================================
// ===== YES / NO QUESTION =====
// ============================================================
const YesNoQuestion = ({ value, onChange }: any) => (
  <div className="grid grid-cols-2 gap-4">
    {['Yes', 'No'].map((option) => {
      const selected = value === option;
      return (
        <button
          key={option}
          type="button"
          aria-pressed={selected}
          onClick={() => onChange(option)}
          className={`min-h-[88px] rounded-2xl border-2 text-xl font-bold transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400/60 ${
            selected
              ? option === 'Yes' ? 'bg-emerald-500/15 border-emerald-400/70 text-emerald-200' : 'bg-rose-500/15 border-rose-400/70 text-rose-200'
              : 'bg-white/[0.03] border-white/10 text-gray-200 hover:border-white/30 hover:bg-white/10'
          }`}
        >
          {option}
        </button>
      );
    })}
  </div>
);

// ============================================================
// ===== CONDITIONAL QUESTION (Yes/No, then Yes/Partial per item) =====
// ============================================================
const ConditionalQuestion = ({ question, value, onChange }: any) => {
  const mainValue = value?.main || '';
  const subValue = value?.sub || {};

  const setSub = (subId: string, val: string) => {
    const next = { ...subValue };
    if (next[subId] === val) delete next[subId];
    else next[subId] = val;
    onChange({ main: mainValue, sub: next });
  };

  return (
    <div className="space-y-4">
      <div className="grid grid-cols-2 gap-4">
        {['Yes', 'No'].map((option) => {
          const selected = mainValue === option;
          return (
            <button
              key={option}
              type="button"
              aria-pressed={selected}
              onClick={() => onChange({ main: option, sub: {} })}
              className={`min-h-[72px] rounded-2xl border-2 text-lg font-bold transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400/60 ${
                selected
                  ? option === 'Yes' ? 'bg-emerald-500/15 border-emerald-400/70 text-emerald-200' : 'bg-rose-500/15 border-rose-400/70 text-rose-200'
                  : 'bg-white/[0.03] border-white/10 text-gray-200 hover:border-white/30 hover:bg-white/10'
              }`}
            >
              {option}
            </button>
          );
        })}
      </div>
      <AnimatePresence>
        {mainValue === 'Yes' && (
          <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} exit={{ opacity: 0, height: 0 }} className="overflow-hidden">
            <div className="grid grid-cols-1 gap-3 pt-1">
              {question.subOptions.map((sub: any) => (
                <div key={sub.id} className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 p-4 rounded-2xl border border-white/10 bg-white/[0.03]">
                  <span className="text-base text-gray-100 leading-snug">{sub.label}</span>
                  <div className="flex gap-2 shrink-0">
                    <AnswerPill label="Yes" tone="yes" shape="square" selected={subValue[sub.id] === 'Yes'} onClick={() => setSub(sub.id, 'Yes')} />
                    <AnswerPill label="Partial" tone="partial" shape="circle" selected={subValue[sub.id] === 'Partial'} onClick={() => setSub(sub.id, 'Partial')} />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

// ============================================================
// ===== QUESTION CARD =====
// ============================================================
const QuestionCard = ({ question, value, onChange, index, total }: any) => {
  let content;
  switch (question.type) {
    case 'checkbox': content = <CheckboxQuestion question={question} value={value} onChange={onChange} />; break;
    case 'radio-group': content = <RadioGroupQuestion question={question} value={value} onChange={onChange} />; break;
    case 'yes-no': content = <YesNoQuestion question={question} value={value} onChange={onChange} />; break;
    case 'conditional': content = <ConditionalQuestion question={question} value={value} onChange={onChange} />; break;
    default: content = null;
  }
  const cat = QUESTION_CATEGORY[question.id];
  const CatIcon = cat?.icon || ShieldCheck;

  return (
    <div className="bg-[#0b1116]/80 border border-white/10 rounded-3xl p-5 sm:p-8 backdrop-blur-xl shadow-[0_20px_60px_-20px_rgba(0,0,0,0.6)]">
      <div className="flex flex-wrap items-center gap-x-3 gap-y-2 mb-4 text-sm">
        <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-cyan-400/10 border border-cyan-400/25 text-cyan-200 font-semibold">
          <CatIcon className="w-4 h-4" /> {cat?.name}
        </span>
        <span className="text-gray-400">Question {index + 1} of {total}</span>
      </div>

      <h2 className="text-2xl sm:text-[28px] font-bold text-white leading-snug">{question.text}</h2>

      {question.description && (
        <div className="mt-4 text-sm text-gray-300">
          {question.description === 'Select Square for Yes, Circle for Partial' ? (
            <div className="flex items-center gap-x-4 gap-y-2 flex-wrap">
              <span className="text-gray-400">Select:</span>
              <span className="flex items-center gap-2 text-emerald-300 font-semibold"><span className="w-3.5 h-3.5 rounded-[4px] bg-emerald-400" /> Square = Yes</span>
              <span className="flex items-center gap-2 text-yellow-300 font-semibold"><span className="w-3.5 h-3.5 rounded-full bg-yellow-400" /> Circle = Partial</span>
              <span className="text-gray-500 text-xs">Tap again to clear</span>
            </div>
          ) : (
            question.description
          )}
        </div>
      )}

      <div className="mt-6">{content}</div>
    </div>
  );
};

// ============================================================
// ===== STEP LIST (desktop sidebar) =====
// ============================================================
const StepList = ({ questions, answers, current, onJump }: { questions: AnyQuestion[]; answers: Record<number, any>; current: number; onJump: (i: number) => void }) => (
  <ol className="space-y-1">
    {questions.map((q, i) => {
      const cat = QUESTION_CATEGORY[q.id];
      const done = isAnswered(q, answers[q.id]);
      const active = i === current;
      return (
        <li key={q.id}>
          <button
            type="button"
            onClick={() => onJump(i)}
            aria-current={active ? 'step' : undefined}
            className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-left transition-colors ${
              active ? 'bg-cyan-400/10 border border-cyan-400/30' : 'border border-transparent hover:bg-white/5'
            }`}
          >
            <span className={`w-7 h-7 shrink-0 rounded-full flex items-center justify-center text-xs font-bold ${
              done ? 'bg-cyan-400 text-black' : active ? 'border-2 border-cyan-400 text-cyan-200' : 'border border-white/20 text-gray-400'
            }`}>
              {done ? <Check className="w-4 h-4" strokeWidth={3} /> : i + 1}
            </span>
            <span className={`text-sm ${active ? 'text-white font-semibold' : done ? 'text-gray-200' : 'text-gray-400'}`}>{cat?.name}</span>
          </button>
        </li>
      );
    })}
  </ol>
);

// ============================================================
// ===== RESULT SECTION =====
// ============================================================
const inputClass =
  'w-full px-4 py-3 rounded-xl bg-black/30 border border-white/15 text-white text-base placeholder:text-gray-500 focus:border-cyan-400/70 focus:ring-2 focus:ring-cyan-400/20 outline-none transition-colors';

const ResultSection = ({ answers, onReset }: any) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [consent, setConsent] = useState(false);
  const [formError, setFormError] = useState<string | null>(null);
  const [formData, setFormData] = useState({ name: '', email: '', company: '', designation: '' });

  const score = getOverallScore(answers);
  const risk = getRiskLevel(score);
  const categoryScores = getCategoryScores(answers);
  const ringColor = score >= 80 ? '#34d399' : score >= 50 ? '#facc15' : '#fb7185';

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [isSubmitted]);

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
      <main className="min-h-screen text-white px-4 relative overflow-hidden pt-32 pb-16 flex items-center justify-center">
        <Background />
        <motion.div initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} className="max-w-lg w-full bg-[#0b1116]/85 border border-white/10 rounded-3xl p-10 text-center backdrop-blur-xl relative z-10">
          <div className="w-20 h-20 bg-emerald-500/15 rounded-full flex items-center justify-center mx-auto mb-6 border border-emerald-400/30">
            <CheckCircle className="w-10 h-10 text-emerald-400" />
          </div>
          <h2 className="text-3xl font-bold text-white mb-3">Report Sent Successfully!</h2>
          <p className="text-base text-gray-300 mb-8">Your detailed report has been sent to <span className="text-white font-medium">{formData.email}</span></p>
          <div className="flex flex-col gap-3">
            <button onClick={onReset} className="w-full min-h-[52px] px-6 rounded-xl bg-cyan-400 text-black text-base font-bold hover:bg-cyan-300 transition-all inline-flex items-center justify-center gap-2">
              <RotateCcw className="w-4 h-4" /> Retake Assessment
            </button>
            <Link href="/" className="w-full min-h-[52px] px-6 rounded-xl bg-white/5 border border-white/15 text-white text-base font-medium hover:bg-white/10 transition-all inline-flex items-center justify-center">
              Back to Home
            </Link>
          </div>
        </motion.div>
      </main>
    );
  }

  return (
    <main className="min-h-screen text-white px-4 relative overflow-hidden pt-28 md:pt-32 pb-16">
      <Background />

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="flex flex-wrap items-center justify-between gap-3 mb-6">
          <h1 className="text-3xl sm:text-4xl font-bold text-white">Your DPDPA Readiness Result</h1>
          <button onClick={onReset} className="inline-flex items-center gap-2 px-4 min-h-[44px] rounded-xl border border-white/15 bg-white/5 text-sm font-medium text-gray-200 hover:bg-white/10 hover:text-white transition-colors">
            <RotateCcw className="w-4 h-4" /> Retake Assessment
          </button>
        </div>

        <div className="grid lg:grid-cols-[1.4fr_1fr] gap-6 lg:gap-8 items-start">
          <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} className="space-y-6">
            {/* Overall score */}
            <div className="bg-[#0b1116]/80 border border-white/10 rounded-3xl p-6 sm:p-10 backdrop-blur-xl">
              <h2 className="text-sm font-bold text-cyan-300 uppercase tracking-wider mb-6 flex items-center gap-2">
                <ShieldCheck className="w-4 h-4" /> Overall Readiness
              </h2>
              <div className="flex flex-col sm:flex-row items-center gap-8">
                <ScoreRing percentage={score} label={risk.label} color={ringColor} />
                <div className="flex-1 text-center sm:text-left">
                  <h3 className="text-3xl font-bold text-white mb-3">{risk.emoji} {risk.label}</h3>
                  <p className="text-base text-gray-300 leading-relaxed">
                    Based on your answers, your organization's privacy and AI governance readiness is currently at <strong className="text-white">{score}%</strong>.
                  </p>
                </div>
              </div>
            </div>

            {/* Category breakdown */}
            <div className="bg-[#0b1116]/80 border border-white/10 rounded-3xl p-6 sm:p-8 backdrop-blur-xl">
              <h3 className="text-xl font-bold text-white mb-6">Category Breakdown</h3>
              <div className="space-y-5">
                {categoryScores.map((cat: any, idx: number) => {
                  const Icon = cat.icon || ShieldCheck;
                  const tone = cat.score >= 80 ? 'bg-emerald-400' : cat.score >= 50 ? 'bg-yellow-400' : 'bg-rose-400';
                  const text = cat.score >= 80 ? 'text-emerald-300' : cat.score >= 50 ? 'text-yellow-300' : 'text-rose-300';
                  return (
                    <div key={idx}>
                      <div className="flex items-center justify-between mb-2 gap-3">
                        <div className="flex items-center gap-2.5">
                          <span className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center">
                            <Icon className="w-4 h-4 text-gray-300" />
                          </span>
                          <span className="text-base font-medium text-gray-100">{cat.name}</span>
                        </div>
                        <span className={`text-base font-bold ${text}`}>{cat.score}%</span>
                      </div>
                      <div className="w-full h-2.5 bg-black/40 rounded-full overflow-hidden border border-white/5">
                        <motion.div
                          initial={{ width: 0 }} animate={{ width: `${cat.score}%` }} transition={{ duration: 1, delay: 0.2 + idx * 0.06 }}
                          className={`h-full rounded-full ${tone}`}
                        />
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </motion.div>

          {/* Report form */}
          <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="bg-[#0b1116]/85 border border-white/10 rounded-3xl p-6 sm:p-8 backdrop-blur-xl lg:sticky lg:top-28">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-cyan-400/10 rounded-xl border border-cyan-400/20"><Mail className="w-6 h-6 text-cyan-300" /></div>
              <div>
                <h3 className="text-xl font-bold text-white">Get Detailed Report</h3>
                <p className="text-sm text-gray-400 mt-0.5">Sent directly to your inbox.</p>
              </div>
            </div>

            <form onSubmit={handleSubmitReport} className="space-y-4">
              <div>
                <label htmlFor="sc-name" className="block text-sm font-medium text-gray-300 mb-1.5">Full Name *</label>
                <input id="sc-name" type="text" required value={formData.name} onChange={e => setFormData({ ...formData, name: e.target.value })} className={inputClass} placeholder="John Doe" />
              </div>
              <div>
                <label htmlFor="sc-email" className="block text-sm font-medium text-gray-300 mb-1.5">Work Email *</label>
                <input id="sc-email" type="email" required value={formData.email} onChange={e => setFormData({ ...formData, email: e.target.value })} className={inputClass} placeholder="john@company.com" />
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="sc-company" className="block text-sm font-medium text-gray-300 mb-1.5">Company</label>
                  <input id="sc-company" type="text" value={formData.company} onChange={e => setFormData({ ...formData, company: e.target.value })} className={inputClass} placeholder="Acme Corp" />
                </div>
                <div>
                  <label htmlFor="sc-designation" className="block text-sm font-medium text-gray-300 mb-1.5">Designation</label>
                  <input id="sc-designation" type="text" value={formData.designation} onChange={e => setFormData({ ...formData, designation: e.target.value })} className={inputClass} placeholder="Privacy Officer" />
                </div>
              </div>

              <div className="pt-2">
                <ConsentCheckbox id="scorecard-consent" checked={consent} onChange={(val) => { setConsent(val); if (formError) setFormError(null); }} error={formError || undefined} />
              </div>

              <button type="submit" disabled={isSubmitting} className="w-full mt-2 min-h-[54px] rounded-xl bg-cyan-400 text-black text-base font-bold hover:bg-cyan-300 transition-all flex items-center justify-center gap-2 disabled:opacity-70">
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
  const firstRender = useRef(true);
  const stepsRef = useRef<HTMLDivElement>(null);

  const allQuestions = getAllQuestions();
  const totalQuestions = allQuestions.length;
  const currentQuestion = allQuestions[currentQuestionIndex];
  const answeredCount = allQuestions.filter((q) => isAnswered(q, answers[q.id])).length;
  const currentAnswered = isAnswered(currentQuestion, answers[currentQuestion.id]);
  const isLast = currentQuestionIndex === totalQuestions - 1;

  // bring the new question into view (important on phones)
  useEffect(() => {
    if (firstRender.current) { firstRender.current = false; return; }
    const el = stepsRef.current;
    if (!el) return;
    const top = el.getBoundingClientRect().top + window.scrollY - 120; // clear the fixed header
    if (window.scrollY > top || el.getBoundingClientRect().top < 0) window.scrollTo({ top, behavior: 'smooth' });
  }, [currentQuestionIndex]);

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

  const progress = Math.round((answeredCount / totalQuestions) * 100);

  if (isComplete) {
    return <ResultSection answers={answers} onReset={handleReset} />;
  }

  return (
    <main className="min-h-screen text-white relative overflow-hidden pt-28 md:pt-32 pb-32 lg:pb-16">
      <Background />

      <div className="max-w-6xl w-full mx-auto px-4 sm:px-6 relative z-10">
        {/* Top bar */}
        <div className="mb-6">
          <Link href="/" className="inline-flex items-center gap-2 text-sm text-gray-300 hover:text-white transition-colors group">
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" /> Back to Home
          </Link>
        </div>

        {/* Page heading + intro */}
        <header className={`${currentQuestionIndex === 0 ? 'mb-8' : 'mb-6'} max-w-3xl`}>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight">DPDPA Compliance Scorecard</h1>
          {currentQuestionIndex === 0 && (<>
          <p className="mt-3 text-base sm:text-lg text-gray-300 leading-relaxed">
            Answer {totalQuestions} quick questions to check how ready your organisation is for India&apos;s DPDP Act 2023.
            The test covers {scorecardData.categories.map((c) => c.name).join(", ")}. Free, no signup needed.
          </p>
          <div className="mt-4 flex flex-wrap gap-x-5 gap-y-2 text-sm text-gray-400">
            <span className="inline-flex items-center gap-2"><ListChecks className="w-4 h-4 text-cyan-300" /> {totalQuestions} questions</span>
            <span className="inline-flex items-center gap-2"><ShieldCheck className="w-4 h-4 text-cyan-300" /> Instant score and category breakdown</span>
            <span className="inline-flex items-center gap-2"><Lock className="w-4 h-4 text-cyan-300" /> Free, no signup</span>
          </div>
          </>)}
        </header>

        <div ref={stepsRef} className="grid lg:grid-cols-[280px_1fr] gap-6 lg:gap-8 items-start">
          {/* ===== Sidebar: progress + steps (desktop) ===== */}
          <aside className="hidden lg:block lg:sticky lg:top-28 bg-[#0b1116]/75 border border-white/10 rounded-3xl p-5 backdrop-blur-xl">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-semibold text-white">Your progress</span>
              <span className="text-sm font-bold text-cyan-300">{answeredCount}/{totalQuestions}</span>
            </div>
            <div className="w-full h-2 bg-white/10 rounded-full overflow-hidden mb-5">
              <motion.div className="h-full bg-cyan-400 rounded-full" initial={false} animate={{ width: `${progress}%` }} transition={{ duration: 0.4 }} />
            </div>
            <StepList questions={allQuestions} answers={answers} current={currentQuestionIndex} onJump={setCurrentQuestionIndex} />
          </aside>

          {/* ===== Question ===== */}
          <section aria-live="polite">
            {/* Mobile progress */}
            <div className="lg:hidden mb-4">
              <div className="flex items-center justify-between mb-2 text-sm">
                <span className="text-gray-300">Your progress</span>
                <span className="font-semibold text-cyan-300">{answeredCount}/{totalQuestions} answered</span>
              </div>
              <div className="w-full h-2 bg-white/10 rounded-full overflow-hidden">
                <motion.div className="h-full bg-cyan-400 rounded-full" initial={false} animate={{ width: `${progress}%` }} transition={{ duration: 0.4 }} />
              </div>
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={currentQuestionIndex}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.22 }}
              >
                <QuestionCard
                  question={currentQuestion}
                  value={answers[currentQuestion.id]}
                  onChange={handleAnswer}
                  index={currentQuestionIndex}
                  total={totalQuestions}
                />
              </motion.div>
            </AnimatePresence>

            {/* ===== Navigation (fixed at the bottom on phones) ===== */}
            <div className="fixed lg:static bottom-0 inset-x-0 z-30 lg:z-auto bg-[#05080b]/95 lg:bg-transparent border-t border-white/10 lg:border-0 backdrop-blur-xl lg:backdrop-blur-none px-4 py-3 lg:p-0 lg:mt-6">
              <div className="max-w-6xl mx-auto flex items-center justify-between gap-3">
                <button
                  type="button"
                  onClick={handlePrevious}
                  disabled={currentQuestionIndex === 0}
                  className="min-h-[50px] px-5 rounded-xl inline-flex items-center gap-2 text-base font-medium border border-white/15 bg-white/5 text-gray-200 hover:bg-white/10 hover:text-white transition-all disabled:opacity-40 disabled:cursor-not-allowed"
                >
                  <ChevronLeft className="w-5 h-5" /> Previous
                </button>

                <span className="hidden sm:block text-sm text-gray-400">
                  {currentAnswered ? 'Answer saved' : 'Not answered yet'}
                </span>

                <button
                  type="button"
                  onClick={handleNext}
                  className="min-h-[50px] px-6 sm:px-8 rounded-xl bg-cyan-400 text-black text-base font-bold hover:bg-cyan-300 transition-all inline-flex items-center gap-2 shadow-[0_10px_30px_-10px_rgba(34,211,238,0.6)]"
                >
                  {isLast ? 'See Results' : 'Next'}
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}
