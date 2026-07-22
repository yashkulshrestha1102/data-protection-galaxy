"use client";

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ArrowLeft, Shield, Users, Building, AlertTriangle, 
  Wrench, Brain, Sparkles, Clock, CheckCircle, 
  Award, FileText, Play, ChevronDown, ChevronUp,
  X, Loader2, ExternalLink, Star, GraduationCap,
  BookOpen, BarChart, Target, Zap, Infinity
} from 'lucide-react';
import { modulesData, examData } from '@/data/certificate-course';

export default function CertificateCoursePage() {
  const [expandedModule, setExpandedModule] = useState<number | null>(null);
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

  // ===== SAMPLE EXAM QUESTIONS =====
  const examQuestions = [
    {
      id: 1,
      question: 'When did DPDPA 2023 receive Presidential assent?',
      options: ['August 3, 2023', 'August 11, 2023', 'July 27, 2018', 'December 11, 2019'],
      correct: 1,
      module: 'Foundations of DPDPA',
    },
    {
      id: 2,
      question: 'What is the key difference between Data Fiduciary and Data Processor?',
      options: [
        'Data Fiduciary determines purpose and means, Processor processes on behalf',
        'Data Processor determines purpose, Fiduciary processes data',
        'Both are the same under DPDPA',
        'Fiduciary is only for government, Processor is for private',
      ],
      correct: 0,
      module: 'Foundations of DPDPA',
    },
    {
      id: 3,
      question: 'Does DPDPA apply to a US company with no offices in India but selling products to Indian customers online?',
      options: [
        'No, it only applies to Indian companies',
        'Yes, if it offers goods or services to data principals in India',
        'Only if they have a physical office in India',
        'No, US companies are exempt',
      ],
      correct: 1,
      module: 'Foundations of DPDPA',
    },
    {
      id: 4,
      question: 'Under the DPDPA, what is the consent requirement for processing children\'s data?',
      options: [
        'No special consent required',
        'Verifiable parental consent',
        'Only consent from the child',
        'Consent from school or institution',
      ],
      correct: 1,
      module: 'Rights & Obligations',
    },
    {
      id: 5,
      question: 'Which of the following is NOT a data principal right under the DPDPA?',
      options: [
        'Right to access',
        'Right to correction',
        'Right to data monetization',
        'Right to grievance redressal',
      ],
      correct: 2,
      module: 'Rights & Obligations',
    },
    {
      id: 6,
      question: 'What is the maximum penalty for a Significant Data Fiduciary under the DPDPA?',
      options: [
        '₹50 crore',
        '₹100 crore',
        '₹250 crore',
        '₹500 crore',
      ],
      correct: 2,
      module: 'Enforcement & Penalties',
    },
    {
      id: 7,
      question: 'What is the timeline for notifying the Data Protection Board of a data breach?',
      options: [
        '24 hours',
        '48 hours',
        '72 hours',
        '7 days',
      ],
      correct: 2,
      module: 'Enforcement & Penalties',
    },
    {
      id: 8,
      question: 'What is a Data Protection Impact Assessment (DPIA)?',
      options: [
        'A process to identify and mitigate risks of high-risk processing',
        'A financial audit of data processing',
        'A marketing assessment for data products',
        'A legal review of contracts',
      ],
      correct: 0,
      module: 'Compliance & Governance',
    },
    {
      id: 9,
      question: 'Who must appoint a Data Protection Officer under the DPDPA?',
      options: [
        'All data fiduciaries',
        'Only Significant Data Fiduciaries',
        'Only government agencies',
        'Only companies with more than 100 employees',
      ],
      correct: 1,
      module: 'Compliance & Governance',
    },
    {
      id: 10,
      question: 'What is the passing score for the DPDPA certification exam?',
      options: ['70%', '75%', '80%', '85%'],
      correct: 3,
      module: 'DPDPA Skills',
    },
  ];

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
  };

  const getIconForModule = (iconName: string) => {
    return moduleIcons[iconName] || Shield;
  };

  // ===== TOGGLE MODULE =====
  const toggleModule = (id: number) => {
    setExpandedModule(expandedModule === id ? null : id);
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
    
    // Calculate score
    let correct = 0;
    examQuestions.forEach((q, idx) => {
      if (examAnswers[idx] === q.options[q.correct]) {
        correct++;
      }
    });
    const total = examQuestions.length;
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

  // ===== FORMAT TIME =====
  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  // ===== STATS =====
  const stats = [
    { icon: BookOpen, label: 'Learning Modules', value: modulesData.length, suffix: '' },
    { icon: Clock, label: 'Minutes Content', value: '200+', suffix: '' },
    { icon: FileText, label: 'Exam Questions', value: examData.totalQuestions, suffix: '' },
    { icon: Clock, label: 'Minutes Timer', value: examData.duration, suffix: '' },
    { icon: Target, label: 'Pass Threshold', value: examData.passingScore, suffix: '%' },
  ];

  const progress = Object.keys(examAnswers).length;

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

      <div className="max-w-6xl mx-auto relative z-10">
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
            Version 1.1 — NOW WITH AI & PRACTICAL SKILLS
          </div>
          <div className="flex items-center justify-center gap-3 mb-4">
            <GraduationCap className="w-12 h-12 text-purple-400" />
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white drop-shadow-2xl">
              Certificate Course on DPDPA
            </h1>
          </div>
          <p className="text-gray-200 text-lg max-w-3xl mx-auto drop-shadow-lg">
            Free Course on India's Digital Personal Data Protection Act 2023
          </p>
          <p className="text-gray-300 text-sm max-w-2xl mx-auto mt-2">
            Comprehensive 6-Module Training Program with free Certification
          </p>
        </motion.div>

        {/* ===== STATS BAR ===== */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-12"
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

        {/* ===== WHAT'S NEW ===== */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="bg-gradient-to-r from-purple-500/10 to-pink-500/10 border border-purple-500/30 rounded-2xl p-6 mb-12"
        >
          <h3 className="text-lg font-semibold text-white mb-3 flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-purple-400" />
            What's New in Version 1.1
          </h3>
          <ul className="space-y-2 text-gray-300 text-sm">
            <li className="flex items-start gap-2">
              <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0 mt-0.5" />
              <span><strong>Module 5:</strong> DPDPA Skills - Practical implementation: data mapping, consent management, risk assessment, incident response, security safeguards, third-party management</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0 mt-0.5" />
              <span><strong>Module 6:</strong> AI & DPDPA Compliance - AI lifecycle, data minimization for ML, consent architecture for AI, fairness & bias, GenAI, foundation models, AI risk management</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0 mt-0.5" />
              <span><strong>Enhanced Examination:</strong> 90 questions, 120 minutes, with 20 new scenario-based questions on practical skills and AI compliance</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0 mt-0.5" />
              <span><strong>Anti-AI Protection:</strong> Advanced exam security to ensure certification integrity</span>
            </li>
          </ul>
        </motion.div>

        {/* ===== LEARNING MODULES ===== */}
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
          <p className="text-gray-300 text-sm mb-6">Complete all 6 modules before taking the certification exam</p>

          <div className="space-y-4">
            {modulesData.map((module, idx) => {
              const Icon = getIconForModule(module.icon);
              const isExpanded = expandedModule === module.id;
              const isCompleted = false; // Track completion later

              return (
                <div
                  key={module.id}
                  className="bg-white/10 border border-white/20 rounded-2xl backdrop-blur-sm overflow-hidden hover:bg-white/15 transition-all"
                >
                  <button
                    onClick={() => toggleModule(module.id)}
                    className="w-full px-6 py-4 flex items-center justify-between text-left hover:bg-white/5 transition-colors"
                  >
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-xl bg-gradient-to-r from-purple-500 to-pink-600 flex items-center justify-center flex-shrink-0">
                        <Icon className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="text-sm font-medium text-gray-400">Module {module.id}</span>
                          {module.isNew && (
                            <span className="px-2 py-0.5 rounded-full text-xs font-medium bg-green-500/20 text-green-400 border border-green-500/30">
                              New
                            </span>
                          )}
                        </div>
                        <h3 className="text-lg font-semibold text-white">{module.title}</h3>
                        <p className="text-sm text-gray-400">{module.description}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <span className="text-xs text-gray-400">{module.duration}</span>
                      {isExpanded ? (
                        <ChevronUp className="w-5 h-5 text-gray-400" />
                      ) : (
                        <ChevronDown className="w-5 h-5 text-gray-400" />
                      )}
                    </div>
                  </button>

                  <AnimatePresence>
                    {isExpanded && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="px-6 pb-4"
                      >
                        <ul className="space-y-2 border-t border-white/10 pt-4">
                          {module.topics.map((topic, idx2) => (
                            <li key={idx2} className="flex items-center gap-2 text-sm text-gray-300">
                              <span className="w-1.5 h-1.5 rounded-full bg-purple-400" />
                              {topic}
                            </li>
                          ))}
                        </ul>
                        <button className="mt-4 px-4 py-2 rounded-xl bg-gradient-to-r from-blue-500 to-purple-600 text-white text-sm font-medium hover:scale-105 transition-all flex items-center gap-2">
                          <Play className="w-4 h-4" />
                          Start Module {module.id} →
                        </button>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </motion.div>

        {/* ===== EXAM PREP CHECKLIST ===== */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="bg-white/10 border border-white/20 rounded-2xl backdrop-blur-sm p-6 mb-12"
        >
          <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
            <CheckCircle className="w-5 h-5 text-green-400" />
            Before Taking the Exam
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {[
              'Complete all 6 learning modules above',
              'Review key sections of DPDPA 2023 and DPDP Rules 2025',
              'Ensure you have 120 uninterrupted minutes',
              'Have a stable internet connection',
              'Prepare your full name for the certificate',
            ].map((item, idx) => (
              <div key={idx} className="flex items-center gap-2 text-sm text-gray-300">
                <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                {item}
              </div>
            ))}
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
          <p className="text-gray-300 text-sm mb-6">Take the comprehensive DPDPA v1.1 certification examination</p>

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

          <p className="text-sm text-gray-300 mb-6">
            Upon passing, receive an instantly downloadable professional certificate!
          </p>

          <button
            onClick={handleStartExam}
            className="px-8 py-4 rounded-2xl bg-gradient-to-r from-purple-500 to-pink-600 text-white font-semibold text-lg hover:scale-105 transition-all shadow-lg shadow-purple-500/30 flex items-center gap-2 mx-auto"
          >
            <Zap className="w-5 h-5" />
            START CERTIFICATION EXAM
          </button>
        </motion.div>

        {/* ===== ABOUT CERTIFICATION ===== */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="bg-white/10 border border-white/20 rounded-2xl backdrop-blur-sm p-6"
        >
          <h3 className="text-lg font-semibold text-white mb-3 flex items-center gap-2">
            <Award className="w-5 h-5 text-purple-400" />
            About This Certification (Version 1.1)
          </h3>
          <p className="text-sm text-gray-300 leading-relaxed mb-4">
            This comprehensive certificate course has been designed by <strong>Adv (Dr.) Prashant Mali</strong>, a leading expert and practising lawyer in data protection law and Cyber Law, to provide knowledge of India's Digital Personal Data Protection Act 2023 and DPDP Rules 2025 and GDPR. This is Adv. (Dr.) Prashant Mali part of spreading DPDPA Awareness and Capacity Building.
          </p>
          <p className="text-sm text-gray-300 leading-relaxed mb-4">
            <strong>Version 1.1</strong> significantly expands the course with two new modules covering <strong>practical DPDPA implementation skills</strong> and the cutting-edge intersection of <strong>AI and data protection law</strong>. The course now covers all essential aspects from foundational concepts to advanced AI compliance, enforcement mechanisms, and international comparisons with GDPR and other global privacy laws.
          </p>
          <p className="text-sm text-gray-300 leading-relaxed">
            <strong>Certificate Validity:</strong> Your certificate demonstrates professional-level understanding of DPDPA 2023 (if examination given Ethically), practical compliance skills, and AI governance expertise. It can be shared on LinkedIn, included in your CV, or displayed in your office.
          </p>
        </motion.div>
      </div>

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
                  {/* Exam Header */}
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

                  {/* Progress Bar */}
                  <div className="w-full h-2 bg-white/10 rounded-full mb-6 overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-purple-400 to-pink-400 rounded-full transition-all duration-300"
                      style={{ width: `${(progress / examQuestions.length) * 100}%` }}
                    />
                  </div>

                  {/* Question */}
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

                  {/* Navigation */}
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
                /* ===== RESULTS ===== */
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
                        {candidateName || 'Candidate'}, you have successfully completed the DPDPA v1.1 Certification.
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
                <div className="flex items-start gap-3 p-3 rounded-xl bg-white/5 border border-white/10">
                  <CheckCircle className="w-5 h-5 text-yellow-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-sm font-medium text-white">Coverage</p>
                    <p className="text-sm text-gray-400">All 6 modules including DPDPA Skills and AI & DPDPA Compliance</p>
                  </div>
                </div>
              </div>

              <div className="bg-yellow-500/10 border border-yellow-500/30 rounded-xl p-4 mb-6">
                <p className="text-sm text-yellow-400 flex items-start gap-2">
                  <AlertTriangle className="w-4 h-4 flex-shrink-0 mt-0.5" />
                  <span>Once you click "Start Exam", the {examData.duration} minute timer will begin immediately. Do not refresh or close the browser window during the exam.</span>
                </p>
              </div>

              {/* Candidate Form */}
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
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-1">
                    Email Address (optional)
                  </label>
                  <input
                    type="email"
                    value={candidateEmail}
                    onChange={(e) => setCandidateEmail(e.target.value)}
                    placeholder="your.email@example.com"
                    className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:border-purple-400/50 transition-all"
                  />
                </div>
                <div className="bg-red-500/10 border border-red-500/30 rounded-xl p-3">
                  <p className="text-xs text-red-400 flex items-start gap-2">
                    <AlertTriangle className="w-3 h-3 flex-shrink-0 mt-0.5" />
                    Certificate image file should be downloaded immediately after exam completion.
                  </p>
                </div>
              </div>

              <button
                onClick={handleBeginExam}
                disabled={!candidateName.trim()}
                className={`w-full py-4 rounded-2xl font-semibold text-lg transition-all flex items-center justify-center gap-2 ${
                  candidateName.trim()
                    ? 'bg-gradient-to-r from-purple-500 to-pink-600 text-white hover:scale-105 shadow-lg shadow-purple-500/30'
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
    </main>
  );
}