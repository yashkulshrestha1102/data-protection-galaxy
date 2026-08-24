"use client";

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ArrowLeft, ChevronRight, ChevronLeft, CheckCircle, 
  XCircle, AlertCircle, Download, FileText, Clock,
  Shield, Users, Database, Globe, Building, Scale,
  Sparkles, Loader2, ExternalLink, Mail, Send
} from 'lucide-react';
// ===== IMPORT FROM DATA FILE =====
import { scorecardData, getOverallScore, getRiskLevel, getCategoryScores, getAllQuestions, getCategoryForQuestion } from '@/data/scorecard';

// ===== QUESTION COMPONENT =====
const QuestionCard = ({ question, index, selected, onSelect }) => {
  const optionColors = {
    'Yes': 'text-green-400 border-green-400/30 hover:bg-green-500/10',
    'No': 'text-red-400 border-red-400/30 hover:bg-red-500/10',
    'Partial': 'text-yellow-400 border-yellow-400/30 hover:bg-yellow-500/10'
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      transition={{ duration: 0.3 }}
      className="bg-white/10 border border-white/20 rounded-2xl backdrop-blur-sm p-6 mb-4"
    >
      <div className="flex items-start gap-4">
        <div className="flex-shrink-0 w-10 h-10 rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 flex items-center justify-center text-sm font-semibold text-blue-400 mt-1">
          {index + 1}
        </div>
        <div className="flex-1">
          <h4 className="text-lg font-semibold text-white mb-2">{question.text}</h4>
          <p className="text-sm text-gray-400 mb-4">{question.description}</p>
          
          <div className="flex flex-wrap gap-3">
            {question.options.map((option) => (
              <button
                key={option}
                onClick={() => onSelect(option)}
                className={`px-5 py-2.5 rounded-xl border-2 transition-all ${
                  selected === option
                    ? `bg-${option === 'Yes' ? 'green' : option === 'No' ? 'red' : 'yellow'}-500/20 border-${option === 'Yes' ? 'green' : option === 'No' ? 'red' : 'yellow'}-400 text-white`
                    : `${optionColors[option]} bg-white/5`
                }`}
              >
                {option}
              </button>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

// ===== RESULT SECTION WITH EMAIL CAPTURE =====
const ResultSection = ({ answers, onReset }) => {
  const [showEmailForm, setShowEmailForm] = useState(true);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    designation: '',
  });

  const totalQuestions = getAllQuestions().length;
  const answeredCount = Object.keys(answers).length;
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
          totalQuestions,
          answeredCount,
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
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="bg-white/10 border border-white/20 rounded-2xl backdrop-blur-sm p-8 text-center"
      >
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
      </motion.div>
    );
  }

  // ===== SHOW EMAIL FORM =====
  if (showEmailForm) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="bg-white/10 border border-white/20 rounded-2xl backdrop-blur-sm p-6 md:p-8"
      >
        {/* Score Display */}
        <div className="text-center mb-6">
          <div className="text-6xl font-bold text-white mb-2">{score}%</div>
          <div className="flex items-center justify-center gap-3">
            <span className={`px-4 py-1.5 rounded-full border ${risk.bg} ${risk.border} ${risk.color} font-medium`}>
              {risk.emoji} {risk.label}
            </span>
          </div>
        </div>

        {/* Category Scores Summary */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-6">
          {categoryScores.slice(0, 4).map((cat, idx) => (
            <div key={idx} className="bg-white/5 border border-white/10 rounded-xl p-3 text-center">
              <p className="text-xs text-gray-400">{cat.name}</p>
              <p className="text-lg font-bold text-white">{cat.score}%</p>
            </div>
          ))}
        </div>

        {/* Priority Areas */}
        <div className="bg-yellow-500/10 border border-yellow-500/30 rounded-xl p-4 mb-6">
          <h4 className="text-sm font-semibold text-yellow-400 mb-2 flex items-center gap-2">
            <AlertCircle className="w-4 h-4" />
            Priority Areas
          </h4>
          <div className="flex flex-wrap gap-2">
            {categoryScores.filter(cat => cat.score < 60).map((cat, idx) => (
              <span key={idx} className="text-xs px-3 py-1 rounded-full bg-yellow-500/20 text-yellow-300 border border-yellow-500/30">
                {cat.name}
              </span>
            ))}
            {categoryScores.filter(cat => cat.score < 60).length === 0 && (
              <span className="text-xs text-green-400">✨ All areas are well-covered!</span>
            )}
          </div>
        </div>

        {/* Email Form */}
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
      </motion.div>
    );
  }

  // ===== DEFAULT: Show score + options =====
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="bg-white/10 border border-white/20 rounded-2xl backdrop-blur-sm p-6 md:p-8"
    >
      <div className="text-center mb-8">
        <div className="text-6xl font-bold text-white mb-2">{score}%</div>
        <div className="flex items-center justify-center gap-3">
          <span className={`px-4 py-1.5 rounded-full border ${risk.bg} ${risk.border} ${risk.color} font-medium`}>
            {risk.emoji} {risk.label}
          </span>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
        {categoryScores.map((cat, idx) => {
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
    </motion.div>
  );
};

// ===== MAIN PAGE =====
export default function ScorecardPage() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<number, string>>({});
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

  // Flatten questions
  const allQuestions = getAllQuestions();
  const totalQuestions = allQuestions.length;

  const currentQuestion = allQuestions[currentQuestionIndex];
  const isLastQuestion = currentQuestionIndex === totalQuestions - 1;

  const handleAnswer = (value: string) => {
    setAnswers(prev => ({
      ...prev,
      [currentQuestion.id]: value
    }));

    if (isLastQuestion) {
      setIsComplete(true);
    } else {
      setCurrentQuestionIndex(prev => prev + 1);
    }
  };

  const handlePrevious = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(prev => prev - 1);
    }
  };

  const handleReset = () => {
    setAnswers({});
    setCurrentQuestionIndex(0);
    setIsComplete(false);
  };

  const progress = Math.round((Object.keys(answers).length / totalQuestions) * 100);

  // Get category for current question
  const currentCategory = getCategoryForQuestion(currentQuestion?.id);

  return (
    <main className="min-h-screen text-white px-4 relative overflow-hidden pt-28 md:pt-32 pb-16">
      {/* ===== BACKGROUND ===== */}
      <div className="absolute inset-0 -z-10">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('/images/home1.jpeg')" }}
        >
          <div className="absolute inset-0 bg-black/60 backdrop-blur-[2px]" />
        </div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-purple-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-pink-500/10 rounded-full blur-3xl animate-pulse delay-2000" />
        {stars}
      </div>

      <div className="max-w-4xl mx-auto relative z-10">
        {/* Back Button */}
        <Link href="/" className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors mb-6 group">
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          Back to Home
        </Link>

        {/* Header */}
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

        {/* Progress */}
        <div className="bg-white/10 border border-white/20 rounded-2xl backdrop-blur-sm p-4 mb-6">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm text-gray-300">
              Overall Progress
            </span>
            <span className="text-sm font-semibold text-white">{Object.keys(answers).length}/{totalQuestions} questions answered</span>
          </div>
          <div className="w-full h-2 bg-white/10 rounded-full overflow-hidden">
            <div 
              className="h-full bg-gradient-to-r from-blue-400 to-purple-400 rounded-full transition-all duration-500"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>

        {/* Question or Result */}
        {isComplete ? (
          <ResultSection answers={answers} onReset={handleReset} />
        ) : (
          <div>
            {/* Category indicator */}
            {currentCategory && (
              <div className="flex items-center gap-2 text-sm text-gray-400 mb-4">
                <span className="px-3 py-1 rounded-full bg-white/10 border border-white/10">
                  {currentCategory.name}
                </span>
                <span className="text-xs">Question {currentQuestionIndex + 1} of {totalQuestions}</span>
              </div>
            )}

            {/* Question */}
            <QuestionCard
              question={currentQuestion}
              index={currentQuestionIndex}
              selected={answers[currentQuestion.id]}
              onSelect={handleAnswer}
            />

            {/* Navigation */}
            <div className="flex justify-between mt-4">
              <button
                onClick={handlePrevious}
                disabled={currentQuestionIndex === 0}
                className={`px-4 py-2 rounded-xl flex items-center gap-2 transition-all ${
                  currentQuestionIndex === 0
                    ? 'text-gray-600 cursor-not-allowed'
                    : 'text-gray-400 hover:text-white hover:bg-white/10'
                }`}
              >
                <ChevronLeft className="w-4 h-4" />
                Previous
              </button>
              {answers[currentQuestion.id] && (
                <button
                  onClick={() => isLastQuestion ? setIsComplete(true) : setCurrentQuestionIndex(prev => prev + 1)}
                  className="px-4 py-2 rounded-xl bg-gradient-to-r from-blue-500 to-purple-600 text-white font-medium hover:scale-105 transition-all flex items-center gap-2"
                >
                  {isLastQuestion ? 'See Results' : 'Next'}
                  <ChevronRight className="w-4 h-4" />
                </button>
              )}
            </div>
          </div>
        )}
      </div>
    </main>
  );
}