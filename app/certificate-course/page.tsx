"use client";

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ArrowLeft, Shield, Users, Building, AlertTriangle, 
  Wrench, Brain, Sparkles, Clock, CheckCircle, 
  Award, FileText, Play, ChevronDown, ChevronUp,
  X, Loader2, ExternalLink, Star, GraduationCap,
  BookOpen, BarChart, Target, Zap, Infinity, ChevronRight,
  Globe, Database, Scale
} from 'lucide-react';
// ===== USE NEW FULL DATA =====
import { fullModulesData, examData } from '@/data/certificate-course-full';

export default function CertificateCoursePage() {
  const [expandedModule, setExpandedModule] = useState<number | null>(null);
  const [selectedModule, setSelectedModule] = useState<number | null>(null);
  const [showModuleContent, setShowModuleContent] = useState(false);
  const [showExamModal, setShowExamModal] = useState(false);
  const [showInstructions, setShowInstructions] = useState(false);
  const [examStarted, setExamStarted] = useState(false);
  const [examSubmitted, setExamSubmitted] = useState(false);
  const [candidateName, setCandidateName] = useState('');
  const [candidateEmail, setCandidateEmail] = useState('');
  const [examAnswers, setExamAnswers] = useState<Record<number, string>>({});
  const [examTimer, setExamTimer] = useState(examData.duration * 60);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [examScore, setExamScore] = useState(0);
  const [showCertificate, setShowCertificate] = useState(false);
  const [stars, setStars] = useState<React.ReactNode[]>([]);

  const timerRef = useRef<NodeJS.Timeout | null>(null);

  // ===== STARS =====
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

  // ===== EXAM TIMER =====
  useEffect(() => {
    if (examStarted && examTimer > 0) {
      timerRef.current = setInterval(() => {
        setExamTimer(prev => {
          if (prev <= 1) {
            clearInterval(timerRef.current!);
            handleExamSubmit();
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    }
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [examStarted]);

  // ===== MODULE ICONS =====
  const moduleIcons: Record<string, any> = {
    Shield, Users, Building, AlertTriangle, Wrench, Brain, 
    Clock, Star, Scale, Globe, Database, BarChart, Award,
    CheckCircle, FileText
  };

  const getIconForModule = (iconName: string) => {
    return moduleIcons[iconName] || Shield;
  };

  // ===== MODULE HANDLERS =====
  const openModule = (id: number) => {
    setSelectedModule(id);
    setShowModuleContent(true);
  };

  const closeModule = () => {
    setShowModuleContent(false);
    setSelectedModule(null);
  };

  // ===== EXAM HANDLERS =====
  const handleStartExam = () => {
    setShowInstructions(true);
  };

  const handleBeginExam = () => {
    setShowInstructions(false);
    setShowExamModal(true);
    setExamStarted(true);
  };

  const handleAnswerSelect = (questionIndex: number, answer: string) => {
    setExamAnswers(prev => ({
      ...prev,
      [questionIndex]: answer,
    }));
  };

  const handleExamSubmit = () => {
    if (timerRef.current) clearInterval(timerRef.current);
    
    let correct = 0;
    const allQuestions = getAllExamQuestions();
    allQuestions.forEach((q, idx) => {
      if (examAnswers[idx] === q.options[q.correct]) {
        correct++;
      }
    });
    const total = allQuestions.length;
    const score = Math.round((correct / total) * 100);
    setExamScore(score);
    setExamSubmitted(true);
    setExamStarted(false);
    
    if (score >= examData.passingScore) {
      setShowCertificate(true);
    }
  };

  const handleCloseModal = () => {
    setShowExamModal(false);
    setExamStarted(false);
    setExamSubmitted(false);
    setExamAnswers({});
    setExamTimer(examData.duration * 60);
    setCurrentQuestionIndex(0);
  };

  // ===== GET ALL EXAM QUESTIONS =====
  const getAllExamQuestions = () => {
    const allQuestions: { id: number; question: string; options: string[]; correct: number; module: string }[] = [];
    let id = 1;
    fullModulesData.forEach((module) => {
      module.quiz.questions.forEach((q) => {
        allQuestions.push({
          id: id++,
          question: q.question,
          options: q.options,
          correct: q.correct,
          module: module.title,
        });
      });
    });
    return allQuestions;
  };

  const examQuestions = getAllExamQuestions();

  // ===== FORMAT TIME =====
  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  // ===== STATS =====
  const stats = [
    { icon: BookOpen, label: 'Learning Modules', value: fullModulesData.length, suffix: '' },
    { icon: Clock, label: 'Hours Content', value: '120+', suffix: 'hrs' },
    { icon: FileText, label: 'Total Lessons', value: '250+', suffix: '' },
    { icon: Target, label: 'Pass Threshold', value: examData.passingScore, suffix: '%' },
  ];

  const progress = Object.keys(examAnswers).length;

  // ===== SELECTED MODULE DATA =====
  const selectedModuleData = fullModulesData.find(m => m.id === selectedModule);

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
        {stars}
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Back Button */}
        <Link href="/" className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors mb-6 group">
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          Back to Home
        </Link>

        {/* ===== HERO SECTION ===== */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-500/30 text-sm font-semibold text-purple-400 mb-4">
            <Sparkles className="w-4 h-4" />
            Complete Master Course — 20 Modules
          </div>
          <div className="flex items-center justify-center gap-3 mb-4">
            <GraduationCap className="w-12 h-12 text-purple-400" />
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white drop-shadow-2xl">
              DPDPA 2023 Master Course
            </h1>
          </div>
          <p className="text-gray-200 text-lg max-w-3xl mx-auto drop-shadow-lg">
            Complete Professional Certification Program
          </p>
          <p className="text-gray-300 text-sm max-w-2xl mx-auto mt-2">
            20 Modules • 100+ Chapters • 250+ Lessons • 10+ Projects • 30+ Case Studies
          </p>
        </motion.div>

        {/* ===== STATS BAR ===== */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12"
        >
          {stats.map((stat, idx) => {
            const Icon = stat.icon;
            return (
              <div
                key={idx}
                className="bg-white/10 border border-white/20 rounded-2xl backdrop-blur-sm p-4 text-center hover:bg-white/20 transition-all hover:scale-105"
              >
                <Icon className="w-6 h-6 text-purple-400 mx-auto mb-2" />
                <div className="text-2xl font-bold text-white">{stat.value}</div>
                <div className="text-xs text-gray-400">{stat.label}</div>
              </div>
            );
          })}
        </motion.div>

        {/* ===== LEARNING MODULES — 20 MODULES ===== */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mb-12"
        >
          <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
            <BookOpen className="w-6 h-6 text-purple-400" />
            Learning Modules
          </h2>
          <p className="text-gray-300 text-sm mb-6">Complete all 20 modules to earn your certification</p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {fullModulesData.map((module, idx) => {
              const Icon = getIconForModule(module.icon);
              const totalLessons = module.chapters.reduce((acc, ch) => acc + ch.lessons.length, 0);

              return (
                <motion.div
                  key={module.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: idx * 0.02 }}
                  className="bg-white/10 border border-white/20 rounded-2xl backdrop-blur-sm overflow-hidden hover:bg-white/15 transition-all cursor-pointer group"
                  onClick={() => openModule(module.id)}
                >
                  <div className="p-5">
                    <div className="flex items-start justify-between">
                      <div className="flex items-center gap-3">
                        <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-purple-500 to-pink-600 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                          <Icon className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <div className="flex items-center gap-2 flex-wrap">
                            <span className="text-xs font-medium text-gray-400">Module {module.id}</span>
                            {module.isNew && (
                              <span className="px-2 py-0.5 rounded-full text-[10px] font-medium bg-green-500/20 text-green-400 border border-green-500/30">
                                New
                              </span>
                            )}
                            <span className="px-2 py-0.5 rounded-full text-[10px] font-medium bg-blue-500/20 text-blue-400 border border-blue-500/30">
                              {module.duration}
                            </span>
                          </div>
                          <h3 className="text-base font-semibold text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-purple-400 group-hover:bg-clip-text transition-all">
                            {module.title}
                          </h3>
                          <p className="text-xs text-gray-400">{module.description}</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Preview Topics */}
                  <div className="px-5 pb-4 border-t border-white/10 pt-3">
                    <div className="flex items-center justify-between">
                      <div className="flex flex-wrap gap-1.5">
                        {module.chapters.slice(0, 2).map((ch, idx2) => (
                          <span key={idx2} className="text-[10px] px-2 py-1 rounded-full bg-white/5 border border-white/10 text-gray-400">
                            {ch.title}
                          </span>
                        ))}
                        {module.chapters.length > 2 && (
                          <span className="text-[10px] px-2 py-1 rounded-full bg-white/5 border border-white/10 text-gray-400">
                            +{module.chapters.length - 2} chapters
                          </span>
                        )}
                      </div>
                      <span className="text-[10px] text-gray-400">{totalLessons} lessons</span>
                    </div>
                    <div className="mt-2 flex items-center gap-1 text-xs text-purple-400 group-hover:translate-x-1 transition-transform">
                      View Module <ChevronRight className="w-3 h-3" />
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* ===== READY FOR CERTIFICATION ===== */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-500/30 rounded-2xl p-8 text-center mb-12"
        >
          <h2 className="text-2xl font-bold text-white mb-4">Ready for Certification?</h2>
          <p className="text-gray-300 text-sm mb-6">Complete all 20 modules and take the comprehensive certification exam</p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl mx-auto mb-6">
            <div className="bg-white/10 border border-white/20 rounded-xl p-4">
              <FileText className="w-5 h-5 text-blue-400 mx-auto mb-1" />
              <div className="text-2xl font-bold text-white">{examData.totalQuestions}</div>
              <div className="text-xs text-gray-400">Questions</div>
            </div>
            <div className="bg-white/10 border border-white/20 rounded-xl p-4">
              <Clock className="w-5 h-5 text-yellow-400 mx-auto mb-1" />
              <div className="text-2xl font-bold text-white">{examData.duration}</div>
              <div className="text-xs text-gray-400">Minutes</div>
            </div>
            <div className="bg-white/10 border border-white/20 rounded-xl p-4">
              <Target className="w-5 h-5 text-green-400 mx-auto mb-1" />
              <div className="text-2xl font-bold text-white">{examData.passingScore}%</div>
              <div className="text-xs text-gray-400">To Pass</div>
            </div>
            <div className="bg-white/10 border border-white/20 rounded-xl p-4">
              <CheckCircle className="w-5 h-5 text-purple-400 mx-auto mb-1" />
              <div className="text-2xl font-bold text-white">{examData.correctNeeded}</div>
              <div className="text-xs text-gray-400">Correct Needed</div>
            </div>
          </div>

          <button
            onClick={handleStartExam}
            className="px-8 py-4 rounded-2xl bg-gradient-to-r from-purple-500 to-pink-600 text-white font-semibold text-lg hover:scale-105 transition-all shadow-lg shadow-purple-500/30 flex items-center gap-2 mx-auto"
          >
            <Zap className="w-5 h-5" />
            START CERTIFICATION EXAM
          </button>
        </motion.div>

        {/* ===== MODULE CONTENT MODAL ===== */}
        <AnimatePresence>
          {showModuleContent && selectedModuleData && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 bg-black/90 backdrop-blur-sm flex items-center justify-center p-4"
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                className="bg-[#0a0a2e] border border-white/20 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto p-6 relative"
              >
                <button
                  onClick={closeModule}
                  className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors z-10"
                >
                  <X className="w-6 h-6" />
                </button>

                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-purple-500 to-pink-600 flex items-center justify-center">
                    {(() => {
                      const Icon = getIconForModule(selectedModuleData.icon);
                      return <Icon className="w-6 h-6 text-white" />;
                    })()}
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="text-sm text-gray-400">Module {selectedModuleData.id}</span>
                      {selectedModuleData.isNew && (
                        <span className="px-2 py-0.5 rounded-full text-xs font-medium bg-green-500/20 text-green-400 border border-green-500/30">
                          New
                        </span>
                      )}
                      <span className="px-2 py-0.5 rounded-full text-xs font-medium bg-blue-500/20 text-blue-400 border border-blue-500/30">
                        {selectedModuleData.duration}
                      </span>
                    </div>
                    <h2 className="text-2xl font-bold text-white">{selectedModuleData.title}</h2>
                    <p className="text-sm text-gray-400">{selectedModuleData.description}</p>
                  </div>
                </div>

                <div className="space-y-6">
                  {/* Chapters */}
                  <div>
                    <h4 className="text-sm font-semibold text-gray-300 mb-3">Chapters & Lessons</h4>
                    <div className="space-y-4">
                      {selectedModuleData.chapters.map((chapter, idx) => (
                        <div key={idx} className="bg-white/5 border border-white/10 rounded-xl p-4">
                          <h5 className="text-sm font-medium text-white mb-2">{chapter.title}</h5>
                          <ul className="space-y-1.5">
                            {chapter.lessons.map((lesson) => (
                              <li key={lesson.id} className="flex items-center justify-between text-xs text-gray-400">
                                <span className="flex items-center gap-2">
                                  <span className="w-1.5 h-1.5 rounded-full bg-purple-400" />
                                  {lesson.title}
                                </span>
                                <span className="text-gray-500">{lesson.duration}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Assignments */}
                  {selectedModuleData.assignments.length > 0 && (
                    <div className="bg-yellow-500/5 border border-yellow-500/20 rounded-xl p-4">
                      <h4 className="text-sm font-semibold text-yellow-400 mb-2">Assignments</h4>
                      <ul className="space-y-2">
                        {selectedModuleData.assignments.map((assignment) => (
                          <li key={assignment.id} className="text-sm text-gray-300">
                            <strong>{assignment.title}</strong>
                            <p className="text-xs text-gray-400">{assignment.description}</p>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* Project */}
                  {selectedModuleData.project && (
                    <div className="bg-purple-500/5 border border-purple-500/20 rounded-xl p-4">
                      <h4 className="text-sm font-semibold text-purple-400 mb-2">📌 Project</h4>
                      <p className="text-sm text-gray-300"><strong>{selectedModuleData.project.title}</strong></p>
                      <p className="text-xs text-gray-400">{selectedModuleData.project.description}</p>
                    </div>
                  )}

                  {/* Quiz */}
                  <div className="bg-green-500/5 border border-green-500/20 rounded-xl p-4">
                    <h4 className="text-sm font-semibold text-green-400 mb-2">📝 Quiz</h4>
                    <p className="text-xs text-gray-400">{selectedModuleData.quiz.questions.length} questions • {selectedModuleData.quiz.passingScore}% to pass</p>
                  </div>

                  {/* Complete Button */}
                  <button
                    onClick={closeModule}
                    className="w-full py-3 rounded-xl bg-gradient-to-r from-purple-500 to-pink-600 text-white font-medium hover:scale-105 transition-all flex items-center justify-center gap-2"
                  >
                    <CheckCircle className="w-4 h-4" />
                    Close Module
                  </button>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* ===== EXAM MODAL ===== */}
        <AnimatePresence>
          {showExamModal && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 bg-black/90 backdrop-blur-sm flex items-center justify-center p-4"
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                className="bg-[#0a0a2e] border border-white/20 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto p-6 relative"
              >
                <button
                  onClick={handleCloseModal}
                  className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors"
                >
                  <X className="w-6 h-6" />
                </button>

                {!examSubmitted ? (
                  <>
                    <div className="flex items-center justify-between mb-6">
                      <div>
                        <h2 className="text-2xl font-bold text-white">Certification Exam</h2>
                        <p className="text-sm text-gray-400">Question {currentQuestionIndex + 1} of {examQuestions.length}</p>
                      </div>
                      <div className="text-right">
                        <div className="text-sm text-gray-400">Time Remaining</div>
                        <div className={`text-2xl font-bold ${examTimer < 300 ? 'text-red-400' : 'text-green-400'}`}>
                          {formatTime(examTimer)}
                        </div>
                      </div>
                    </div>

                    <div className="w-full h-2 bg-white/10 rounded-full mb-6 overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-purple-400 to-pink-400 rounded-full transition-all duration-300"
                        style={{ width: `${(progress / examQuestions.length) * 100}%` }}
                      />
                    </div>

                    <div className="mb-6">
                      <div className="flex items-center gap-2 mb-3">
                        <span className="px-3 py-1 rounded-full text-xs font-medium bg-purple-500/20 text-purple-400 border border-purple-500/30">
                          {examQuestions[currentQuestionIndex].module}
                        </span>
                        <span className="text-xs text-gray-400">Q{currentQuestionIndex + 1}/{examQuestions.length}</span>
                      </div>
                      <h3 className="text-xl font-semibold text-white mb-4">
                        {examQuestions[currentQuestionIndex].question}
                      </h3>
                      <div className="space-y-3">
                        {examQuestions[currentQuestionIndex].options.map((option, idx) => (
                          <button
                            key={idx}
                            onClick={() => handleAnswerSelect(currentQuestionIndex, option)}
                            className={`w-full text-left px-4 py-3 rounded-xl border transition-all ${
                              examAnswers[currentQuestionIndex] === option
                                ? 'border-purple-500 bg-purple-500/20 text-white'
                                : 'border-white/10 bg-white/5 text-gray-300 hover:bg-white/10 hover:border-white/20'
                            }`}
                          >
                            <span className="text-sm">{String.fromCharCode(65 + idx)}. {option}</span>
                          </button>
                        ))}
                      </div>
                    </div>

                    <div className="flex justify-between items-center pt-4 border-t border-white/10">
                      <button
                        onClick={() => setCurrentQuestionIndex(prev => Math.max(0, prev - 1))}
                        disabled={currentQuestionIndex === 0}
                        className={`px-4 py-2 rounded-xl text-sm font-medium transition-all ${
                          currentQuestionIndex === 0
                            ? 'text-gray-600 cursor-not-allowed'
                            : 'text-gray-400 hover:text-white hover:bg-white/10'
                        }`}
                      >
                        Previous
                      </button>
                      <div className="flex gap-2">
                        {currentQuestionIndex === examQuestions.length - 1 ? (
                          <button
                            onClick={handleExamSubmit}
                            className="px-6 py-2 rounded-xl bg-gradient-to-r from-purple-500 to-pink-600 text-white font-medium hover:scale-105 transition-all"
                          >
                            Submit Exam
                          </button>
                        ) : (
                          <button
                            onClick={() => setCurrentQuestionIndex(prev => Math.min(examQuestions.length - 1, prev + 1))}
                            className="px-6 py-2 rounded-xl bg-white/10 border border-white/20 text-white font-medium hover:bg-white/20 transition-all"
                          >
                            Next
                          </button>
                        )}
                      </div>
                    </div>
                  </>
                ) : (
                  <div className="text-center py-8">
                    <div className="text-6xl mb-4">📊</div>
                    <h2 className="text-3xl font-bold text-white mb-2">Exam Complete!</h2>
                    <div className="text-5xl font-bold text-purple-400 mb-4">{examScore}%</div>
                    <p className="text-gray-300 mb-6">
                      {examScore >= examData.passingScore
                        ? '🎉 Congratulations! You passed the certification exam!'
                        : '😔 You did not pass the exam. Please review the modules and try again.'}
                    </p>

                    {examScore >= examData.passingScore && (
                      <div className="bg-green-500/10 border border-green-500/30 rounded-2xl p-6 mb-6">
                        <Award className="w-12 h-12 text-green-400 mx-auto mb-3" />
                        <h3 className="text-xl font-semibold text-white mb-2">Certificate Earned!</h3>
                        <p className="text-sm text-gray-300">
                          {candidateName || 'Candidate'}, you have successfully completed the certification.
                        </p>
                        <button className="mt-4 px-6 py-3 rounded-xl bg-gradient-to-r from-green-500 to-emerald-600 text-white font-medium hover:scale-105 transition-all flex items-center gap-2 mx-auto">
                          <Download className="w-4 h-4" />
                          Download Certificate
                        </button>
                      </div>
                    )}

                    <button
                      onClick={handleCloseModal}
                      className="px-6 py-3 rounded-xl bg-white/10 border border-white/20 text-white font-medium hover:bg-white/20 transition-all"
                    >
                      Close
                    </button>
                  </div>
                )}
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* ===== INSTRUCTIONS MODAL ===== */}
        <AnimatePresence>
          {showInstructions && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 bg-black/90 backdrop-blur-sm flex items-center justify-center p-4"
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                className="bg-[#0a0a2e] border border-white/20 rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto p-6 relative"
              >
                <button
                  onClick={() => setShowInstructions(false)}
                  className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors"
                >
                  <X className="w-6 h-6" />
                </button>

                <h2 className="text-2xl font-bold text-white mb-4">Examination Instructions</h2>

                <div className="space-y-4 mb-6">
                  <div className="flex items-start gap-3 p-3 rounded-xl bg-white/5 border border-white/10">
                    <Clock className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="text-sm font-medium text-white">Duration</p>
                      <p className="text-sm text-gray-400">{examData.duration} minutes (2 hours)</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 p-3 rounded-xl bg-white/5 border border-white/10">
                    <FileText className="w-5 h-5 text-purple-400 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="text-sm font-medium text-white">Total Questions</p>
                      <p className="text-sm text-gray-400">{examData.totalQuestions} Multiple Choice Questions</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 p-3 rounded-xl bg-white/5 border border-white/10">
                    <Target className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="text-sm font-medium text-white">Passing Score</p>
                      <p className="text-sm text-gray-400">{examData.passingScore}% ({examData.correctNeeded} out of {examData.totalQuestions} correct answers)</p>
                    </div>
                  </div>
                </div>

                <div className="bg-yellow-500/10 border border-yellow-500/30 rounded-xl p-4 mb-6">
                  <p className="text-sm text-yellow-400 flex items-start gap-2">
                    <AlertTriangle className="w-4 h-4 flex-shrink-0 mt-0.5" />
                    <span>Once you click "Start Exam", the {examData.duration} minute timer will begin immediately.</span>
                  </p>
                </div>

                <div className="space-y-4 mb-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-1">
                      Full Name (as you want it on certificate) *
                    </label>
                    <input
                      type="text"
                      value={candidateName}
                      onChange={(e) => setCandidateName(e.target.value)}
                      placeholder="Enter your full name"
                      className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:border-purple-400/50 transition-all"
                      required
                    />
                  </div>
                </div>

                <button
                  onClick={handleBeginExam}
                  disabled={!candidateName.trim()}
                  className={`w-full py-4 rounded-2xl font-semibold text-lg transition-all flex items-center justify-center gap-2 ${
                    candidateName.trim()
                      ? 'bg-gradient-to-r from-purple-500 to-pink-600 text-white hover:scale-105'
                      : 'bg-gray-600 text-gray-400 cursor-not-allowed'
                  }`}
                >
                  <Play className="w-5 h-5" />
                  Start Examination
                </button>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </main>
  );
}