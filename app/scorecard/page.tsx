"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ArrowLeft, ChevronRight, ChevronLeft, CheckCircle, 
  AlertCircle, FileText, Clock,
  Shield, Users, Database, Globe, Building, Scale,
  Sparkles, Loader2, Mail, Send, Lock, UserCheck
} from 'lucide-react';
import { scorecardData, getOverallScore, getRiskLevel, getCategoryScores, getAllQuestions } from '@/data/scorecard';

// ===== CHECKBOX QUESTION =====
const CheckboxQuestion = ({ question, value, onChange }: any) => {
  const handleToggle = (optionId: string) => {
    const current = value || [];
    const newValue = current.includes(optionId) 
      ? current.filter((id: string) => id !== optionId)
      : [...current, optionId];
    onChange(newValue);
  };

  return (
    <div className="space-y-3">
      {question.options.map((option: any) => (
        <div key={option.id} className="space-y-1">
          <label className="flex items-start gap-2 cursor-pointer">
            <input
              type="checkbox"
              checked={(value || []).includes(option.id)}
              onChange={() => handleToggle(option.id)}
              className="w-4 h-4 mt-0.5 text-purple-500 focus:ring-purple-500 rounded"
            />
            <span className="text-white text-sm font-medium">{option.label}</span>
          </label>
          {option.items && (
            <div className="ml-6 space-y-0.5">
              {option.items.map((item: string, idx: number) => (
                <p key={idx} className="text-xs text-gray-400">• {item}</p>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

// ===== RADIO GROUP QUESTION =====
const RadioGroupQuestion = ({ question, value, onChange }: any) => {
  const handleChange = (subId: string, val: string) => {
    const current = value || {};
    onChange({ ...current, [subId]: val });
  };

  return (
    <div className="space-y-3">
      {question.subOptions.map((sub: any) => (
        <div key={sub.id} className="flex items-center gap-4 p-2 rounded-lg bg-white/5 border border-white/10">
          <span className="text-sm text-white flex-1">{sub.label}</span>
          <div className="flex gap-2">
            {['Yes', 'Partial'].map((option) => (
              <button
                key={option}
                onClick={() => handleChange(sub.id, option)}
                className={`px-3 py-1 rounded-lg text-xs font-medium transition-all ${
                  (value || {})[sub.id] === option
                    ? option === 'Yes' 
                      ? 'bg-green-500/30 text-green-400 border border-green-500/50'
                      : 'bg-yellow-500/30 text-yellow-400 border border-yellow-500/50'
                    : 'bg-white/5 text-gray-400 hover:bg-white/10'
                }`}
              >
                {option}
              </button>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

// ===== YES/NO QUESTION =====
const YesNoQuestion = ({ question, value, onChange }: any) => (
  <div className="flex gap-4">
    {['Yes', 'No'].map((option) => (
      <button
        key={option}
        onClick={() => onChange(option)}
        className={`px-6 py-2 rounded-lg text-sm font-medium transition-all ${
          value === option
            ? option === 'Yes'
              ? 'bg-green-500/30 text-green-400 border border-green-500/50'
              : 'bg-red-500/30 text-red-400 border border-red-500/50'
            : 'bg-white/5 text-gray-400 hover:bg-white/10'
        }`}
      >
        {option}
      </button>
    ))}
  </div>
);

// ===== CONDITIONAL QUESTION =====
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
                  ? 'bg-green-500/30 text-green-400 border border-green-500/50'
                  : 'bg-red-500/30 text-red-400 border border-red-500/50'
                : 'bg-white/5 text-gray-400 hover:bg-white/10'
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
                          ? 'bg-green-500/30 text-green-400 border border-green-500/50'
                          : 'bg-yellow-500/30 text-yellow-400 border border-yellow-500/50'
                        : 'bg-white/5 text-gray-400 hover:bg-white/10'
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

// ===== QUESTION CARD =====
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
          {question.description && (
            <p className="text-xs text-gray-400 mb-3">{question.description}</p>
          )}
          {content}
        </div>
      </div>
    </div>
  );
};

// ============================================================
// ===== RESULT SECTION WITH HIGH QUALITY BACKGROUND =====
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
        <div className="absolute inset-0 -z-10">
          <Image
            src="/images/galaxy4.jpg"
            alt="Background"
            fill
            className="object-cover"
            priority
            quality={100}
            unoptimized
          />
          <div className="absolute inset-0 bg-black/30" /> {/* ✅ No blur */}
        </div>
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
        <div className="absolute inset-0 -z-10">
          <Image
            src="/images/galaxy4.jpg"
            alt="Background"
            fill
            className="object-cover"
            priority
            quality={100}
            unoptimized
          />
          <div className="absolute inset-0 bg-black/30" /> {/* ✅ No blur */}
        </div>
        <div className="max-w-4xl mx-auto bg-white/10 border border-white/20 rounded-2xl backdrop-blur-sm p-6 md:p-8 relative z-10">
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
      </main>
    );
  }

  // ===== INITIAL RESULT STATE =====
  return (
    <main className="min-h-screen text-white px-4 relative overflow-hidden pt-28 md:pt-32 pb-16">
      <div className="absolute inset-0 -z-10">
        <Image
          src="/images/galaxy4.jpg"
          alt="Background"
          fill
          className="object-cover"
          priority
          quality={100}
          unoptimized
        />
        <div className="absolute inset-0 bg-black/30" /> {/* ✅ No blur */}
      </div>
      <div className="max-w-4xl mx-auto bg-white/10 border border-white/20 rounded-2xl backdrop-blur-sm p-6 md:p-8 relative z-10">
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
    </main>
  );
};

// ============================================================
// ===== MAIN PAGE - HIGH QUALITY BACKGROUND =====
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
      
      {/* ✅ HIGH QUALITY BACKGROUND - No blur, No compression */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="/images/galaxy4.jpg"
          alt="Background"
          fill
          className="object-cover"
          priority
          quality={100}
          unoptimized
        />
        <div className="absolute inset-0 bg-black/30" /> {/* ✅ No blur */}
      </div>

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