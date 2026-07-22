"use client";

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ArrowLeft, Shield, Users, Building, AlertTriangle, 
  Wrench, Brain, Sparkles, Clock, CheckCircle, 
  Award, FileText, Play, ChevronDown, ChevronUp,
  X, Loader2, ExternalLink, Star, GraduationCap,
  BookOpen, BarChart, Target, Zap, Infinity, ChevronRight
} from 'lucide-react';
import { modulesData, examData } from '@/data/certificate-course';

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

  // ===== MODULE CONTENT =====
  const moduleContent: Record<number, { 
    overview: string; 
    keyTakeaways: string[]; 
    sections: { title: string; content: string }[];
    quiz: { question: string; options: string[]; correct: number }[];
  }> = {
    1: {
      overview: 'The Digital Personal Data Protection Act, 2023 (DPDPA) represents a watershed moment in India\'s journey toward comprehensive data protection. In an era where over 800 million Indians are online and digital transactions have become the norm, the need for robust data protection legislation has never been more critical.',
      keyTakeaways: [
        'DPDPA 2023 is India\'s first comprehensive data protection law',
        'It received Presidential assent on August 11, 2023',
        'The Act evolved from the 2018 Justice Srikrishna Committee Report',
        'Privacy is a fundamental right under Article 21',
      ],
      sections: [
        {
          title: '1. Introduction to DPDPA 2023',
          content: 'The Digital Personal Data Protection Act, 2023 (DPDPA) is India\'s first comprehensive data protection law, designed specifically for the digital age. Unlike previous IT Act provisions, DPDPA is principle-based, consent-driven, and applies extraterritorially to protect Indian data principals globally.',
        },
        {
          title: '2. Legislative Background & Philosophy',
          content: 'India\'s data protection journey began with the Supreme Court\'s landmark ruling in Justice K.S. Puttaswamy v. Union of India (2017), which declared privacy as a fundamental right under Article 21. This was followed by the Justice Srikrishna Committee Report in 2018, which proposed the draft Personal Data Protection Bill.',
        },
        {
          title: '3. Key Definitions & Terminology',
          content: 'Data Fiduciary: Any person who determines the purpose and means of processing personal data. Data Principal: The individual to whom the personal data relates. These are the two key actors under the DPDPA framework.',
        },
        {
          title: '4. Scope and Applicability',
          content: 'The DPDPA applies to the processing of digital personal data within India, and to processing outside India if it involves offering goods or services to data principals in India.',
        },
        {
          title: '5. Comparison with Global Laws',
          content: 'The DPDPA draws inspiration from the GDPR but is tailored to India\'s unique context. Key differences include: no distinction between controller and processor, broader government exemptions, and a more flexible approach to cross-border data transfers.',
        },
      ],
      quiz: [
        {
          question: 'When did DPDPA 2023 receive Presidential assent?',
          options: ['August 3, 2023', 'August 11, 2023', 'July 27, 2018', 'December 11, 2019'],
          correct: 1,
        },
        {
          question: 'What is the key difference between Data Fiduciary and Data Processor?',
          options: [
            'Data Fiduciary determines purpose and means, Processor processes on behalf',
            'Data Processor determines purpose, Fiduciary processes data',
            'Both are the same under DPDPA',
            'Fiduciary is only for government, Processor is for private',
          ],
          correct: 0,
        },
      ],
    },
    2: {
      overview: 'The DPDPA grants comprehensive rights to data principals (individuals) and imposes significant obligations on data fiduciaries (organizations). Understanding these rights and obligations is crucial for compliance.',
      keyTakeaways: [
        'Data principals have 5 key rights under the DPDPA',
        'Consent must be free, specific, informed, and unambiguous',
        'Data fiduciaries have significant compliance obligations',
        'Children\'s data requires verifiable parental consent',
      ],
      sections: [
        {
          title: '1. Data Principal Rights',
          content: 'Data principals have the right to access, correction, erasure, grievance redressal, and nomination. These rights empower individuals to control their personal data.',
        },
        {
          title: '2. Data Fiduciary Obligations',
          content: 'Data fiduciaries must provide notice, obtain consent, implement security safeguards, and comply with breach notification requirements.',
        },
        {
          title: '3. Consent Framework',
          content: 'Under Section 6 of the DPDPA, consent must be free, specific, informed, unconditional, unambiguous, and a clear affirmative action.',
        },
        {
          title: '4. Legitimate Uses of Data',
          content: 'Section 7 of the DPDPA allows certain legitimate uses of data without consent, such as for legal proceedings, responding to emergencies, or employment purposes.',
        },
        {
          title: '5. Children\'s Data Protection',
          content: 'Under Section 9 of the DPDPA, verifiable parental consent is required for processing children\'s data. Anyone under 18 is considered a child.',
        },
      ],
      quiz: [
        {
          question: 'Under the DPDPA, what is the consent requirement for processing children\'s data?',
          options: [
            'No special consent required',
            'Verifiable parental consent',
            'Only consent from the child',
            'Consent from school or institution',
          ],
          correct: 1,
        },
        {
          question: 'Which of the following is NOT a data principal right under the DPDPA?',
          options: [
            'Right to access',
            'Right to correction',
            'Right to data monetization',
            'Right to grievance redressal',
          ],
          correct: 2,
        },
      ],
    },
    3: {
      overview: 'Compliance and governance are at the heart of DPDPA implementation. This module covers the role of Significant Data Fiduciaries, Data Protection Impact Assessments, and Data Protection Officers.',
      keyTakeaways: [
        'Significant Data Fiduciaries have enhanced obligations',
        'DPIAs are required for high-risk processing activities',
        'DPOs must be appointed for certain organizations',
        'Cross-border transfers require appropriate safeguards',
      ],
      sections: [
        {
          title: '1. Significant Data Fiduciary',
          content: 'A Significant Data Fiduciary (SDF) is an entity that processes a high volume of personal data or sensitive data. SDFs have enhanced obligations under the DPDPA.',
        },
        {
          title: '2. Data Protection Impact Assessment (DPIA)',
          content: 'DPIA is a process to identify and mitigate risks associated with high-risk data processing activities. It is required for Significant Data Fiduciaries and for processing that involves sensitive data or automated decision-making.',
        },
        {
          title: '3. Data Protection Officer (DPO)',
          content: 'A DPO is required for Significant Data Fiduciaries and other organizations designated by the Board. The DPO must be based in India and have expertise in data protection.',
        },
        {
          title: '4. Cross-Border Transfers',
          content: 'Under Section 16 of the DPDPA, cross-border data transfers are permitted to countries notified by the Central Government, subject to prescribed conditions.',
        },
        {
          title: '5. Record-Keeping & Audits',
          content: 'Data fiduciaries must maintain records of data processing activities and conduct regular compliance audits.',
        },
      ],
      quiz: [
        {
          question: 'What is a Data Protection Impact Assessment (DPIA)?',
          options: [
            'A process to identify and mitigate risks of high-risk processing',
            'A financial audit of data processing',
            'A marketing assessment for data products',
            'A legal review of contracts',
          ],
          correct: 0,
        },
        {
          question: 'Who must appoint a Data Protection Officer under the DPDPA?',
          options: [
            'All data fiduciaries',
            'Only Significant Data Fiduciaries',
            'Only government agencies',
            'Only companies with more than 100 employees',
          ],
          correct: 1,
        },
      ],
    },
    4: {
      overview: 'The DPDPA establishes the Data Protection Board as the regulatory authority responsible for enforcement. This module covers the Board\'s composition, functions, investigation process, and penalty framework.',
      keyTakeaways: [
        'The Data Protection Board is the regulatory authority',
        'The Board can impose penalties up to ₹250 crore',
        'Breach notification must be within 72 hours',
        'Appeals can be made to the Appellate Tribunal',
      ],
      sections: [
        {
          title: '1. Data Protection Board',
          content: 'The Data Protection Board is the regulatory authority established under the DPDPA. It consists of a Chairperson and other members appointed by the Central Government.',
        },
        {
          title: '2. Investigation Process',
          content: 'The Board has the power to investigate complaints and conduct inquiries into data protection violations.',
        },
        {
          title: '3. Penalty Framework',
          content: 'Non-compliance with the DPDPA can lead to penalties up to ₹250 crore for the data fiduciary and up to ₹50 crore for the data processor.',
        },
        {
          title: '4. Appeals and Remedies',
          content: 'Appeals against the Board\'s decisions can be made to the Appellate Tribunal.',
        },
      ],
      quiz: [
        {
          question: 'What is the maximum penalty for a Significant Data Fiduciary under the DPDPA?',
          options: ['₹50 crore', '₹100 crore', '₹250 crore', '₹500 crore'],
          correct: 2,
        },
        {
          question: 'What is the timeline for notifying the Data Protection Board of a data breach?',
          options: ['24 hours', '48 hours', '72 hours', '7 days'],
          correct: 2,
        },
      ],
    },
    5: {
      overview: 'This practical module covers the essential skills needed to implement DPDPA compliance in your organization. From data mapping to incident response, you\'ll learn how to build a robust data protection program.',
      keyTakeaways: [
        'Data mapping is the foundation of compliance',
        'Consent management requires a systematic approach',
        'Risk assessment and DPIA are essential processes',
        'Incident response plans must be tested regularly',
      ],
      sections: [
        {
          title: '1. Data Mapping Mastery',
          content: 'Data mapping involves identifying all personal data flows within your organization. This includes understanding what data is collected, where it is stored, how it is processed, and with whom it is shared.',
        },
        {
          title: '2. Consent Management Architecture',
          content: 'Building a consent management system requires documenting consent, tracking changes, enabling withdrawal, and maintaining audit trails.',
        },
        {
          title: '3. Risk Assessment & DPIA',
          content: 'Conducting risk assessments and DPIAs helps identify and mitigate data protection risks before they become problems.',
        },
        {
          title: '4. Incident Response Management',
          content: 'An effective incident response plan includes detection, containment, investigation, notification, and remediation.',
        },
        {
          title: '5. Security Safeguards',
          content: 'Implementing security safeguards includes encryption, access controls, monitoring, and regular security audits.',
        },
        {
          title: '6. Third-Party Management',
          content: 'Managing third-party risks includes due diligence, contractual safeguards, and ongoing monitoring of vendors.',
        },
      ],
      quiz: [
        {
          question: 'What is the first step in building a data protection compliance program?',
          options: [
            'Data mapping',
            'Appointing a DPO',
            'Conducting a DPIA',
            'Implementing security measures',
          ],
          correct: 0,
        },
        {
          question: 'What should an incident response plan include?',
          options: [
            'Detection, containment, investigation, notification, remediation',
            'Only notification to the Board',
            'Only containment of the breach',
            'Only investigation of the incident',
          ],
          correct: 0,
        },
      ],
    },
    6: {
      overview: 'This cutting-edge module explores the intersection of AI and data protection law. Learn about AI lifecycle compliance, data minimization for machine learning, and AI governance frameworks.',
      keyTakeaways: [
        'AI systems must comply with DPDPA requirements',
        'Data minimization is critical for AI systems',
        'Consent architecture must accommodate AI',
        'AI risk management is essential',
      ],
      sections: [
        {
          title: '1. AI Lifecycle Under DPDPA',
          content: 'The AI lifecycle includes data collection, training, deployment, and monitoring. Each stage has data protection implications.',
        },
        {
          title: '2. Data Minimization for AI Systems',
          content: 'Data minimization principles require limiting AI training data to what is necessary for the purpose.',
        },
        {
          title: '3. Notice & Consent for AI',
          content: 'Consent for AI processing must be specific and informed. Data subjects should understand how their data will be used in AI systems.',
        },
        {
          title: '4. Fairness & Bias in AI',
          content: 'AI systems must be designed to avoid discrimination and ensure fairness in decision-making.',
        },
        {
          title: '5. GenAI & Foundation Models',
          content: 'Generative AI and foundation models present unique data protection challenges, including data governance and copyright issues.',
        },
        {
          title: '6. AI Risk Management',
          content: 'AI risk management includes assessing risks, implementing controls, and monitoring AI systems for compliance.',
        },
      ],
      quiz: [
        {
          question: 'What is a key principle for AI systems under the DPDPA?',
          options: [
            'Data minimization',
            'Maximum data collection',
            'No consent required',
            'No transparency needed',
          ],
          correct: 0,
        },
        {
          question: 'What should consent architecture for AI include?',
          options: [
            'Specific and informed consent',
            'Bundled consent',
            'Pre-ticked boxes',
            'No consent required',
          ],
          correct: 0,
        },
      ],
    },
  };

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

  // ===== MODULE HANDLERS =====
  const toggleModule = (id: number) => {
    setExpandedModule(expandedModule === id ? null : id);
  };

  const openModule = (id: number) => {
    setSelectedModule(id);
    setShowModuleContent(true);
    setExpandedModule(id);
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
    Object.values(moduleContent).forEach((module, idx) => {
      module.quiz.forEach((q) => {
        allQuestions.push({
          id: id++,
          question: q.question,
          options: q.options,
          correct: q.correct,
          module: `Module ${idx + 1}`,
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
    { icon: BookOpen, label: 'Learning Modules', value: modulesData.length, suffix: '' },
    { icon: Clock, label: 'Minutes Content', value: '200+', suffix: '' },
    { icon: FileText, label: 'Exam Questions', value: examData.totalQuestions, suffix: '' },
    { icon: Clock, label: 'Minutes Timer', value: examData.duration, suffix: '' },
    { icon: Target, label: 'Pass Threshold', value: examData.passingScore, suffix: '%' },
  ];

  const progress = Object.keys(examAnswers).length;

  // ===== SELECTED MODULE DATA =====
  const selectedModuleData = modulesData.find(m => m.id === selectedModule);
  const selectedModuleContent = selectedModule ? moduleContent[selectedModule] : null;

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

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {modulesData.map((module, idx) => {
              const Icon = getIconForModule(module.icon);
              const isExpanded = expandedModule === module.id;

              return (
                <motion.div
                  key={module.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: idx * 0.05 }}
                  className="bg-white/10 border border-white/20 rounded-2xl backdrop-blur-sm overflow-hidden hover:bg-white/15 transition-all cursor-pointer group"
                  onClick={() => openModule(module.id)}
                >
                  <div className="p-5">
                    <div className="flex items-start justify-between">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-xl bg-gradient-to-r from-purple-500 to-pink-600 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                          <Icon className="w-5 h-5 text-white" />
                        </div>
                        <div>
                          <div className="flex items-center gap-2">
                            <span className="text-xs font-medium text-gray-400">Module {module.id}</span>
                            {module.isNew && (
                              <span className="px-2 py-0.5 rounded-full text-[10px] font-medium bg-green-500/20 text-green-400 border border-green-500/30">
                                New
                              </span>
                            )}
                          </div>
                          <h3 className="text-base font-semibold text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-purple-400 group-hover:bg-clip-text transition-all">
                            {module.title}
                          </h3>
                          <p className="text-xs text-gray-400">{module.description}</p>
                        </div>
                      </div>
                      <div className="text-right flex-shrink-0">
                        <span className="text-xs text-gray-400">{module.duration}</span>
                        <div className="mt-1 flex items-center gap-1 text-xs text-purple-400 group-hover:translate-x-1 transition-transform">
                          Start <ChevronRight className="w-3 h-3" />
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Preview Topics */}
                  <div className="px-5 pb-4 border-t border-white/10 pt-3">
                    <div className="flex flex-wrap gap-1.5">
                      {module.topics.slice(0, 3).map((topic, idx2) => (
                        <span key={idx2} className="text-[10px] px-2 py-1 rounded-full bg-white/5 border border-white/10 text-gray-400">
                          {topic}
                        </span>
                      ))}
                      {module.topics.length > 3 && (
                        <span className="text-[10px] px-2 py-1 rounded-full bg-white/5 border border-white/10 text-gray-400">
                          +{module.topics.length - 3} more
                        </span>
                      )}
                    </div>
                  </div>
                </motion.div>
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
            This comprehensive certificate course has been designed by <strong>Adv (Dr.) Prashant Mali</strong>, a leading expert and practising lawyer in data protection law and Cyber Law, to provide knowledge of India's Digital Personal Data Protection Act 2023 and DPDP Rules 2025 and GDPR.
          </p>
          <p className="text-sm text-gray-300 leading-relaxed mb-4">
            <strong>Version 1.1</strong> significantly expands the course with two new modules covering <strong>practical DPDPA implementation skills</strong> and the cutting-edge intersection of <strong>AI and data protection law</strong>.
          </p>
          <p className="text-sm text-gray-300 leading-relaxed">
            <strong>Certificate Validity:</strong> Your certificate demonstrates professional-level understanding of DPDPA 2023, practical compliance skills, and AI governance expertise. It can be shared on LinkedIn, included in your CV, or displayed in your office.
          </p>
        </motion.div>
      </div>

      {/* ===== MODULE CONTENT MODAL ===== */}
      <AnimatePresence>
        {showModuleContent && selectedModuleData && selectedModuleContent && (
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
                  </div>
                  <h2 className="text-2xl font-bold text-white">{selectedModuleData.title}</h2>
                  <p className="text-sm text-gray-400">{selectedModuleData.description}</p>
                </div>
              </div>

              <div className="space-y-6">
                {/* Overview */}
                <div className="bg-white/5 border border-white/10 rounded-xl p-4">
                  <h4 className="text-sm font-semibold text-gray-300 mb-2">Overview</h4>
                  <p className="text-sm text-gray-400 leading-relaxed">{selectedModuleContent.overview}</p>
                </div>

                {/* Key Takeaways */}
                <div className="bg-green-500/5 border border-green-500/20 rounded-xl p-4">
                  <h4 className="text-sm font-semibold text-green-400 mb-2">Key Takeaways</h4>
                  <ul className="space-y-1.5">
                    {selectedModuleContent.keyTakeaways.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-sm text-gray-300">
                        <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0 mt-0.5" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Sections */}
                <div>
                  <h4 className="text-sm font-semibold text-gray-300 mb-3">Module Content</h4>
                  <div className="space-y-3">
                    {selectedModuleContent.sections.map((section, idx) => (
                      <div key={idx} className="bg-white/5 border border-white/10 rounded-xl p-4">
                        <h5 className="text-sm font-medium text-white mb-1">{section.title}</h5>
                        <p className="text-xs text-gray-400 leading-relaxed">{section.content}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Quiz Preview */}
                <div className="bg-yellow-500/5 border border-yellow-500/20 rounded-xl p-4">
                  <h4 className="text-sm font-semibold text-yellow-400 mb-2">Quick Quiz</h4>
                  <div className="space-y-3">
                    {selectedModuleContent.quiz.map((q, idx) => (
                      <div key={idx} className="text-sm">
                        <p className="text-gray-300">{idx + 1}. {q.question}</p>
                        <div className="flex flex-wrap gap-2 mt-1">
                          {q.options.map((opt, optIdx) => (
                            <span key={optIdx} className="text-xs px-2 py-1 rounded-full bg-white/5 border border-white/10 text-gray-400">
                              {String.fromCharCode(65 + optIdx)}. {opt}
                            </span>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Complete Module Button */}
                <button
                  onClick={closeModule}
                  className="w-full py-3 rounded-xl bg-gradient-to-r from-purple-500 to-pink-600 text-white font-medium hover:scale-105 transition-all flex items-center justify-center gap-2"
                >
                  <CheckCircle className="w-4 h-4" />
                  Mark as Complete & Close
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