"use client";

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ArrowLeft, ChevronRight, ChevronLeft, CheckCircle, 
  XCircle, AlertCircle, Download, FileText, Clock,
  Shield, Users, Database, Globe, Building, Scale,
  Sparkles, Loader2, ExternalLink
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

// ===== CATEGORY PROGRESS =====
const CategoryProgress = ({ category, answers }) => {
  const questions = category.questions;
  const answered = questions.filter(q => answers[q.id] !== undefined).length;
  const total = questions.length;
  const percentage = total > 0 ? (answered / total) * 100 : 0;

  return (
    <div className="flex items-center gap-3">
      <div className="flex-1 h-1.5 bg-white/10 rounded-full overflow-hidden">
        <div 
          className="h-full bg-gradient-to-r from-blue-400 to-purple-400 rounded-full transition-all duration-500"
          style={{ width: `${percentage}%` }}
        />
      </div>
      <span className="text-xs text-gray-400 min-w-[40px]">{answered}/{total}</span>
    </div>
  );
};

// ===== RESULT SECTION =====
const ResultSection = ({ answers, onReset }) => {
  const totalQuestions = getAllQuestions().length;
  const answeredCount = Object.keys(answers).length;
  const score = getOverallScore(answers);
  const risk = getRiskLevel(score);
  const categoryScores = getCategoryScores(answers);

  const handleDownloadPDF = () => {
    alert('PDF download functionality will be added with html2canvas + jsPDF');
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      id="scorecard-result"
      className="bg-white/10 border border-white/20 rounded-2xl backdrop-blur-sm p-6 md:p-8"
    >
      {/* Score */}
      <div className="text-center mb-8">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 text-sm text-gray-300 mb-4">
          <Sparkles className="w-4 h-4 text-purple-400" />
          Compliance Scorecard
        </div>
        <div className="text-6xl font-bold text-white mb-2">{score}%</div>
        <div className="flex items-center justify-center gap-3">
          <span className={`px-4 py-1.5 rounded-full border ${risk.bg} ${risk.border} ${risk.color} font-medium`}>
            {risk.emoji} {risk.label}
          </span>
          <span className="text-sm text-gray-400">{answeredCount}/{totalQuestions} questions answered</span>
        </div>
      </div>

      {/* Category Breakdown */}
      <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
        <FileText className="w-5 h-5 text-purple-400" />
        Category-wise Breakdown
      </h3>
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
              <div className="text-xs text-gray-500 mt-1">{cat.answered}/{cat.total} answered</div>
            </div>
          );
        })}
      </div>

      {/* Actions */}
      <div className="flex flex-col sm:flex-row gap-4">
        <button
          onClick={handleDownloadPDF}
          className="flex-1 px-6 py-3 rounded-xl bg-gradient-to-r from-blue-500 to-purple-600 text-white font-medium hover:scale-105 transition-all flex items-center justify-center gap-2 shadow-lg shadow-purple-500/30"
        >
          <Download className="w-5 h-5" />
          Download PDF Report
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