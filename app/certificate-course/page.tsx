'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { fullModulesData, examData } from '@/data/modules';
import { authors } from '@/data/authors';
import { 
  Shield, Clock, Building, FileText, CheckCircle, Users, 
  Star, Scale, AlertTriangle, Globe, Wrench, Database,
  BarChart, Brain, Award, Sparkles, ArrowRight, Target,
  BookOpen, GraduationCap, X, Play, Loader2, Lock,
  ArrowLeft, UserCheck, Calendar
} from 'lucide-react';

const iconMap: Record<string, any> = {
  Shield, Clock, Building, FileText, CheckCircle, Users,
  Star, Scale, AlertTriangle, Globe, Wrench, Database,
  BarChart, Brain, Award
};

// ===== FAQ DATA =====
const courseFaqs = [
  {
    q: 'Is the DPDPA Master Course completely free?',
    a: 'Yes. The DPDPA Master Course is entirely free — all 20 modules, 250+ lessons, quizzes, and the final certification exam are available at no cost. There are no hidden fees or premium tiers.',
  },
  {
    q: 'Do I need any prior legal or technical background?',
    a: 'No. The course is designed for beginners as well as experienced professionals. Module 1 starts with foundational privacy concepts, and the course progressively builds up to advanced topics like AI governance and cross-border data transfers.',
  },
  {
    q: 'How long does it take to complete the course?',
    a: 'The full course is approximately 120 hours of content. Most learners complete it over 4-8 weeks, but you can learn at your own pace. There is no deadline.',
  },
  {
    q: 'Is the certificate recognized by employers?',
    a: 'The certificate is issued by Legal Galaxy (Businezexcellence StartX LLP) and demonstrates your commitment to DPDPA compliance. While there is no single "official" certification for DPDPA, employers increasingly value demonstrated knowledge of the Act.',
  },
  {
    q: 'What happens after I complete all modules?',
    a: 'Once you complete all 20 modules, the final certification exam unlocks. The exam has 100 multiple-choice questions, and you need 80% to pass. Upon passing, you receive a downloadable certificate with a unique certificate ID.',
  },
  {
    q: 'Can I access the course on mobile?',
    a: 'Yes. The course is fully responsive and works on all devices — desktop, tablet, and mobile. Your progress is saved in your browser, so you can switch devices without losing progress.',
  },
  {
    q: 'Do I need to create an account?',
    a: 'No account is required. Your progress is saved locally in your browser. However, if you clear your browser data, your progress will be lost. We recommend completing the course on a single device for the best experience.',
  },
  {
    q: 'What if I fail the certification exam?',
    a: 'You can retake the exam as many times as needed. There is no limit. We recommend reviewing the modules and retaking the exam when you feel ready.',
  },
];

export default function CertificateCoursePage() {
  // ===== EXAM STATE =====
  const [showExamModal, setShowExamModal] = useState(false);
  const [showInstructions, setShowInstructions] = useState(false);
  const [examStarted, setExamStarted] = useState(false);
  const [examSubmitted, setExamSubmitted] = useState(false);
  const [candidateName, setCandidateName] = useState('');
  const [candidateEmail, setCandidateEmail] = useState('');
  const [examAnswers, setExamAnswers] = useState<Record<number, string>>({});
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [examScore, setExamScore] = useState(0);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [examTimer, setExamTimer] = useState(120 * 60);

  // ===== PROGRESS STATE =====
  const [completedLessons, setCompletedLessons] = useState<string[]>([]);
  const [allModulesComplete, setAllModulesComplete] = useState(false);
  const [moduleProgress, setModuleProgress] = useState<Record<number, number>>({});
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const author = authors['shilpi-kulshrestha'];

  // ===== LOAD COMPLETED LESSONS FROM LOCALSTORAGE =====
  useEffect(() => {
    const stored = localStorage.getItem('dpdpa_completed_lessons');
    if (stored) {
      try {
        const parsed = JSON.parse(stored);
        setCompletedLessons(parsed);
      } catch {
        setCompletedLessons([]);
      }
    }
  }, []);

  // ===== CALCULATE MODULE PROGRESS =====
  useEffect(() => {
    const progress: Record<number, number> = {};
    let allComplete = true;

    fullModulesData.forEach((module) => {
      const allLessonIds = module.chapters.flatMap(ch => 
        ch.lessons.map(l => `${module.id}-${l.id}`)
      );
      const completedCount = allLessonIds.filter(id => completedLessons.includes(id)).length;
      const percentage = Math.round((completedCount / allLessonIds.length) * 100);
      progress[module.id] = percentage;

      if (percentage < 100) allComplete = false;
    });

    setModuleProgress(progress);
    setAllModulesComplete(allComplete);
  }, [completedLessons]);

  // ===== EXAM QUESTIONS =====
  const examQuestions = [
    { id: 1, question: 'When was the Puttaswamy judgment delivered?', options: ['2015', '2017', '2018', '2019'], correct: 1 },
    { id: 2, question: 'Article 21 of the Indian Constitution deals with?', options: ['Right to Education', 'Right to Life', 'Right to Equality', 'Right to Freedom'], correct: 1 },
    { id: 3, question: 'What is data monetization?', options: ['Selling data', 'Using data for profit', 'Data analysis', 'Data storage'], correct: 1 },
    { id: 4, question: 'How many sections are there in DPDPA 2023?', options: ['30', '32', '34', '36'], correct: 2 },
    { id: 5, question: 'Who is a Data Fiduciary?', options: ['Person processing data', 'Person determining purpose', 'Person storing data', 'Person transferring data'], correct: 1 },
    { id: 6, question: 'What is the role of a Consent Manager?', options: ['Store consent', 'Manage consent', 'Delete consent', 'Process consent'], correct: 1 },
    { id: 7, question: 'Children are defined as individuals under:', options: ['18 years', '16 years', '14 years', '12 years'], correct: 0 },
    { id: 8, question: 'Encryption is a:', options: ['Technical control', 'Legal requirement', 'Organizational control', 'Contractual control'], correct: 0 },
    { id: 9, question: 'Cross-border transfer rules are under Section:', options: ['14', '15', '16', '17'], correct: 2 },
    { id: 10, question: 'A compliance program must include:', options: ['Data inventory', 'Risk assessment', 'Policies', 'All of the above'], correct: 3 },
  ];

  const getIcon = (iconName: string) => iconMap[iconName] || Shield;

  // ===== EXAM HANDLERS =====
  const handleStartExam = () => {
    if (!allModulesComplete) {
      alert('⚠️ Please complete all modules before starting the final exam!');
      return;
    }
    setShowInstructions(true);
  };
  
  const handleBeginExam = () => {
    setShowInstructions(false);
    setShowExamModal(true);
    setExamStarted(true);
    const timer = setInterval(() => {
      setExamTimer(prev => {
        if (prev <= 1) { clearInterval(timer); return 0; }
        return prev - 1;
      });
    }, 1000);
  };

  const handleAnswerSelect = (questionIndex: number, answer: string) => {
    setExamAnswers(prev => ({ ...prev, [questionIndex]: answer }));
  };

  const handleExamSubmit = async () => {
    setIsSubmitting(true);
    let correct = 0;
    examQuestions.forEach((q, idx) => {
      if (examAnswers[idx] === q.options[q.correct]) correct++;
    });
    const score = Math.round((correct / examQuestions.length) * 100);
    setExamScore(score);
    
    try {
      await fetch('/api/send-result', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ 
          name: candidateName, 
          email: candidateEmail, 
          score, 
          passingScore: 80,
          passed: score >= 80
        }),
      });
    } catch (error) {}
    
    setIsSubmitting(false);
    setExamSubmitted(true);
    setExamStarted(false);
  };

  const handleCloseModal = () => {
    setShowExamModal(false);
    setExamStarted(false);
    setExamSubmitted(false);
    setExamAnswers({});
    setExamTimer(120 * 60);
    setCurrentQuestionIndex(0);
  };

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  const progress = Object.keys(examAnswers).length;

  // ===== GET TOTAL COMPLETED MODULES =====
  const completedModulesCount = Object.values(moduleProgress).filter(p => p === 100).length;
  const totalModules = fullModulesData.length;

  return (
    <div suppressHydrationWarning className="min-h-screen text-white flex flex-col items-center px-4 pt-28 md:pt-32 pb-16 relative overflow-hidden">
      {/* ===== BACKGROUND ===== */}
      <div className="absolute inset-0 -z-10 bg-cover bg-center bg-no-repeat" style={{ backgroundImage: "url('/images/home1.jpeg')" }}>
        <div className="absolute inset-0 bg-black/60 backdrop-blur-[2px]" />
      </div>
      <div suppressHydrationWarning className="absolute inset-0 -z-10">
        {[...Array(80)].map((_, i) => (
          <div key={i} className="absolute bg-white rounded-full animate-twinkle" style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            animationDuration: `${Math.random() * 4 + 2}s`,
            animationDelay: `${Math.random() * 5}s`,
            opacity: Math.random() * 0.6 + 0.1,
            width: `${Math.random() * 2.5 + 1}px`,
            height: `${Math.random() * 2.5 + 1}px`,
          }} />
        ))}
      </div>

      <div className="max-w-6xl mx-auto w-full relative z-10">
        {/* ===== HEADER ===== */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-8">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/20 border border-purple-500/30 text-xs font-medium text-purple-400 mb-2">
              <Sparkles className="w-3 h-3" /> Complete Master Course
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-white">DPDPA 2023 <span className="text-purple-400">Master Course</span></h1>
            <p className="text-gray-300 text-sm mt-1">Complete Professional Certification Program — 20 Modules • 250+ Lessons</p>
          </div>
          <Link href="/" className="text-gray-400 hover:text-white transition-colors text-sm flex items-center gap-1 bg-white/5 px-4 py-2 rounded-lg border border-white/10 hover:bg-white/10">
            ← Back to Home
          </Link>
        </div>

        {/* ===== AUTHOR BIO ===== */}
        <div className="bg-white/5 border border-white/10 rounded-2xl p-6 mb-8 flex flex-col md:flex-row items-start gap-5">
          <div className="flex-shrink-0">
            <div className="relative w-20 h-20 rounded-full overflow-hidden border-2 border-purple-500/40">
              <img
                src={author.image}
                alt={author.name}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          <div className="flex-1">
            <div className="inline-flex items-center gap-2 px-2 py-1 rounded-full bg-purple-500/20 border border-purple-500/30 text-xs font-medium text-purple-300 mb-2">
              <UserCheck className="w-3 h-3" />
              Course Author
            </div>
            <h3 className="text-lg font-semibold text-white">{author.name}</h3>
            <p className="text-sm text-gray-400 mb-2">{author.role}</p>
            <p className="text-sm text-gray-300 leading-relaxed">{author.bio}</p>
            <div className="flex flex-wrap gap-2 mt-3">
              {author.credentials.map((cred, i) => (
                <span key={i} className="text-[10px] px-2 py-0.5 rounded-full bg-white/5 border border-white/10 text-gray-300">
                  {cred}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* ===== STATS ===== */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
          <div className="bg-white/10 border border-white/20 rounded-xl p-4 text-center hover:bg-white/15 transition-colors">
            <BookOpen className="w-5 h-5 text-purple-400 mx-auto mb-1" />
            <div className="text-xl font-bold text-white">{fullModulesData.length}</div>
            <div className="text-xs text-gray-400">Modules</div>
          </div>
          <div className="bg-white/10 border border-white/20 rounded-xl p-4 text-center hover:bg-white/15 transition-colors">
            <Clock className="w-5 h-5 text-blue-400 mx-auto mb-1" />
            <div className="text-xl font-bold text-white">120+</div>
            <div className="text-xs text-gray-400">Hours</div>
          </div>
          <div className="bg-white/10 border border-white/20 rounded-xl p-4 text-center hover:bg-white/15 transition-colors">
            <FileText className="w-5 h-5 text-green-400 mx-auto mb-1" />
            <div className="text-xl font-bold text-white">250+</div>
            <div className="text-xs text-gray-400">Lessons</div>
          </div>
          <div className="bg-white/10 border border-white/20 rounded-xl p-4 text-center hover:bg-white/15 transition-colors">
            <Target className="w-5 h-5 text-yellow-400 mx-auto mb-1" />
            <div className="text-xl font-bold text-white">{examData.passingScore}%</div>
            <div className="text-xs text-gray-400">To Pass</div>
          </div>
        </div>

        {/* ===== MODULES ===== */}
        <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-2 flex-wrap">
          <span>All Modules</span>
          <span className="text-sm text-gray-400 font-normal">({fullModulesData.length} modules)</span>
          <span className="text-sm text-emerald-400 font-normal ml-4">
            {completedModulesCount}/{totalModules} completed
          </span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {fullModulesData.map((module) => {
            const Icon = getIcon(module.icon);
            const totalLessons = module.chapters.reduce((acc, ch) => acc + ch.lessons.length, 0);
            const progress = moduleProgress[module.id] || 0;
            const isComplete = progress === 100;

            return (
              <Link 
                key={module.id} 
                href={`/certificate-course/${module.id}`} 
                className="bg-white/10 border border-white/20 rounded-xl p-5 hover:bg-white/15 transition-all group relative overflow-hidden"
              >
                {isComplete && (
                  <div className="absolute top-2 right-2">
                    <span className="text-xs px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 flex items-center gap-1">
                      <CheckCircle className="w-3 h-3" /> Complete
                    </span>
                  </div>
                )}
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                    <Icon className="w-5 h-5 text-white" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 flex-wrap">
                      <span className="text-xs text-gray-400">Module {module.id}</span>
                      {module.isNew && <span className="text-[10px] px-2 py-0.5 rounded-full bg-green-500/20 text-green-400 border border-green-500/30">New</span>}
                      <span className="text-[10px] px-2 py-0.5 rounded-full bg-blue-500/20 text-blue-400 border border-blue-500/30">{module.duration}</span>
                    </div>
                    <h3 className="text-sm font-semibold text-white group-hover:text-purple-400 transition-colors line-clamp-1">{module.title}</h3>
                    <p className="text-xs text-gray-400 line-clamp-1">{module.description}</p>
                    <div className="flex items-center gap-3 mt-2 text-xs text-gray-500">
                      <span>{totalLessons} lessons</span>
                      <span>•</span>
                      <span>{module.chapters.length} chapters</span>
                    </div>
                    <div className="mt-2 w-full h-1 bg-white/10 rounded-full overflow-hidden">
                      <div 
                        className={`h-full rounded-full transition-all duration-500 ${
                          isComplete ? 'bg-emerald-500' : 'bg-gradient-to-r from-purple-500 to-pink-500'
                        }`}
                        style={{ width: `${progress}%` }}
                      />
                    </div>
                  </div>
                  <ArrowRight className="w-4 h-4 text-gray-500 group-hover:text-purple-400 group-hover:translate-x-1 transition-all flex-shrink-0 mt-2" />
                </div>
              </Link>
            );
          })}
        </div>

        {/* ===== CERTIFICATION SECTION WITH LOCK ===== */}
        <div className="mt-10 bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-500/30 rounded-2xl p-6 md:p-8 text-center relative overflow-hidden">
          <GraduationCap className="w-12 h-12 text-purple-400 mx-auto mb-3" />
          <h2 className="text-2xl font-bold text-white mb-2">Ready for Certification?</h2>
          
          <div className="max-w-md mx-auto mb-4">
            <div className="flex justify-between text-sm text-gray-400 mb-1">
              <span>Progress</span>
              <span>{completedModulesCount}/{totalModules} modules complete</span>
            </div>
            <div className="w-full h-2 bg-white/10 rounded-full overflow-hidden">
              <div 
                className="h-full bg-gradient-to-r from-purple-500 to-pink-500 rounded-full transition-all duration-500"
                style={{ width: `${(completedModulesCount / totalModules) * 100}%` }}
              />
            </div>
          </div>

          <p className="text-gray-300 text-sm mb-6 max-w-2xl mx-auto">
            {allModulesComplete 
              ? '🎉 All modules complete! You are ready to take the final certification exam.' 
              : `Complete all ${totalModules} modules to unlock the final certification exam. (${totalModules - completedModulesCount} remaining)`}
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 text-sm">
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/5 border border-white/10">
              <FileText className="w-4 h-4 text-blue-400" />
              <span className="text-white/80">{examData.totalQuestions} Questions</span>
            </div>
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/5 border border-white/10">
              <Clock className="w-4 h-4 text-yellow-400" />
              <span className="text-white/80">{examData.duration} Minutes</span>
            </div>
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/5 border border-white/10">
              <Target className="w-4 h-4 text-green-400" />
              <span className="text-white/80">{examData.passingScore}% to Pass</span>
            </div>
          </div>

          <button 
            onClick={handleStartExam} 
            disabled={!allModulesComplete}
            className={`mt-6 px-8 py-3 rounded-xl font-semibold transition-all flex items-center gap-2 mx-auto shadow-lg ${
              allModulesComplete 
                ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white hover:scale-105 shadow-purple-500/25' 
                : 'bg-gray-600 text-gray-400 cursor-not-allowed'
            }`}
          >
            {allModulesComplete ? (
              <>
                <Sparkles className="w-4 h-4" /> Start Certification Exam
              </>
            ) : (
              <>
                <Lock className="w-4 h-4" /> Complete All Modules First
              </>
            )}
          </button>
          
          {!allModulesComplete && (
            <p className="text-xs text-yellow-400 mt-3">
              ⚠️ Complete all {totalModules} modules to unlock the exam
            </p>
          )}
        </div>

        {/* ===== FAQ SECTION ===== */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
            <FileText className="w-6 h-6 text-purple-400" />
            Frequently Asked Questions
          </h2>
          <div className="space-y-3">
            {courseFaqs.map((faq, i) => (
              <details
                key={i}
                open={openFaq === i}
                onToggle={(e) => setOpenFaq((e.target as HTMLDetailsElement).open ? i : null)}
                className="group bg-white/5 border border-white/10 rounded-xl p-5 hover:bg-white/10 transition-all"
              >
                <summary className="flex items-center justify-between cursor-pointer list-none">
                  <span className="text-white font-medium pr-4">{faq.q}</span>
                  <span className="text-purple-400 group-open:rotate-45 transition-transform text-xl flex-shrink-0">+</span>
                </summary>
                <p className="text-gray-300 text-sm leading-relaxed mt-3 pt-3 border-t border-white/10">
                  {faq.a}
                </p>
              </details>
            ))}
          </div>
        </div>

        {/* ===== RELATED LINKS ===== */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
            <BookOpen className="w-6 h-6 text-purple-400" />
            Continue Your DPDPA Journey
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              { title: 'DPDPA Complete Guide', href: '/resources/guides/dpdpa-2023-complete-guide', desc: 'End-to-end guide to the Act.' },
              { title: 'Core DPDPA Topics', href: '/galaxy', desc: 'Rights, obligations, penalties and more.' },
              { title: 'Free Assessment', href: '/scorecard', desc: 'Test your organisation\'s DPDPA readiness.' },
              { title: 'Latest Insights', href: '/insight', desc: 'Expert analysis on DPDPA and privacy.' },
              { title: 'Case Studies', href: '/resources/case-studies', desc: 'Real-world compliance scenarios.' },
              { title: 'Document Generator', href: '/generator', desc: 'Generate DPDPA documents instantly.' },
            ].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="group bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl p-4 transition-all"
              >
                <h3 className="text-sm font-medium text-white group-hover:text-purple-400 transition-colors flex items-center justify-between gap-2">
                  {link.title}
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform flex-shrink-0" />
                </h3>
                <p className="text-xs text-gray-400 mt-1">{link.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* ===== INSTRUCTIONS MODAL ===== */}
      {showInstructions && (
        <div className="fixed inset-0 z-50 bg-black/90 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-[#0a0a2e] border border-white/20 rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto p-6 relative">
            <button onClick={() => setShowInstructions(false)} className="absolute top-4 right-4 text-gray-400 hover:text-white"><X className="w-6 h-6" /></button>
            <div className="flex items-center gap-3 mb-6"><GraduationCap className="w-8 h-8 text-purple-400" /><h2 className="text-2xl font-bold text-white">Exam Instructions</h2></div>
            <div className="space-y-4 mb-6">
              <div className="flex items-start gap-3 p-3 rounded-xl bg-white/5 border border-white/10">
                <Clock className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
                <div><p className="text-sm font-medium text-white">Duration</p><p className="text-sm text-gray-400">{examData.duration} minutes</p></div>
              </div>
              <div className="flex items-start gap-3 p-3 rounded-xl bg-white/5 border border-white/10">
                <FileText className="w-5 h-5 text-purple-400 flex-shrink-0 mt-0.5" />
                <div><p className="text-sm font-medium text-white">Questions</p><p className="text-sm text-gray-400">{examData.totalQuestions} MCQs</p></div>
              </div>
              <div className="flex items-start gap-3 p-3 rounded-xl bg-white/5 border border-white/10">
                <Target className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                <div><p className="text-sm font-medium text-white">Passing Score</p><p className="text-sm text-gray-400">{examData.passingScore}%</p></div>
              </div>
            </div>
            <div className="bg-yellow-500/10 border border-yellow-500/30 rounded-xl p-4 mb-6">
              <p className="text-sm text-yellow-400">⚠️ Once you start, the timer begins immediately.</p>
            </div>
            <div className="space-y-4 mb-6">
              <input type="text" value={candidateName} onChange={(e) => setCandidateName(e.target.value)} placeholder="Full Name (for certificate)" className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:border-purple-400/50" />
              <input type="email" value={candidateEmail} onChange={(e) => setCandidateEmail(e.target.value)} placeholder="Email Address" className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:border-purple-400/50" />
            </div>
            <button onClick={handleBeginExam} disabled={!candidateName.trim() || !candidateEmail.trim()} className={`w-full py-4 rounded-2xl font-semibold text-lg transition-all flex items-center justify-center gap-2 ${candidateName.trim() && candidateEmail.trim() ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white hover:scale-105' : 'bg-gray-600 text-gray-400 cursor-not-allowed'}`}>
              <Play className="w-5 h-5" /> Start Exam
            </button>
          </div>
        </div>
      )}

      {/* ===== EXAM MODAL ===== */}
      {showExamModal && (
        <div className="fixed inset-0 z-50 bg-black/90 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-[#0a0a2e] border border-white/20 rounded-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto p-6 relative">
            <button onClick={handleCloseModal} className="absolute top-4 right-4 text-gray-400 hover:text-white"><X className="w-6 h-6" /></button>
            {!examSubmitted ? (
              <>
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
                  <div><h2 className="text-xl font-bold text-white">Certification Exam</h2><p className="text-sm text-gray-400">Question {currentQuestionIndex + 1} of {examQuestions.length}</p></div>
                  <div className="flex items-center gap-4">
                    <div className="text-right"><div className="text-xs text-gray-400">Time</div><div className={`text-xl font-bold ${examTimer < 300 ? 'text-red-400' : 'text-green-400'}`}>{formatTime(examTimer)}</div></div>
                    <div className="text-right"><div className="text-xs text-gray-400">Progress</div><div className="text-sm text-white">{Math.round((progress / examQuestions.length) * 100)}%</div></div>
                  </div>
                </div>
                <div className="w-full h-2 bg-white/10 rounded-full mb-6 overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-purple-400 to-pink-400 rounded-full transition-all" style={{ width: `${(progress / examQuestions.length) * 100}%` }} />
                </div>
                <div className="mb-6">
                  <h3 className="text-lg font-semibold text-white mb-4">{examQuestions[currentQuestionIndex].question}</h3>
                  <div className="space-y-3">
                    {examQuestions[currentQuestionIndex].options.map((option, idx) => (
                      <button key={idx} onClick={() => handleAnswerSelect(currentQuestionIndex, option)} className={`w-full text-left px-4 py-3 rounded-xl border transition-all ${examAnswers[currentQuestionIndex] === option ? 'border-purple-500 bg-purple-500/20 text-white' : 'border-white/10 bg-white/5 text-gray-300 hover:bg-white/10'}`}>
                        <span className="text-sm">{String.fromCharCode(65 + idx)}. {option}</span>
                      </button>
                    ))}
                  </div>
                </div>
                <div className="flex flex-col sm:flex-row justify-between items-center gap-4 pt-4 border-t border-white/10">
                  <button onClick={() => setCurrentQuestionIndex(prev => Math.max(0, prev - 1))} disabled={currentQuestionIndex === 0} className={`px-4 py-2 text-sm ${currentQuestionIndex === 0 ? 'text-gray-600 cursor-not-allowed' : 'text-gray-400 hover:text-white'}`}>← Previous</button>
                  <div className="flex items-center gap-3">
                    <span className="text-xs text-gray-500">{progress} of {examQuestions.length}</span>
                    {currentQuestionIndex === examQuestions.length - 1 ? (
                      <button onClick={handleExamSubmit} disabled={isSubmitting} className="px-6 py-2 rounded-xl bg-gradient-to-r from-purple-500 to-pink-500 text-white font-medium hover:scale-105 transition-all flex items-center gap-2">
                        {isSubmitting ? <><Loader2 className="w-4 h-4 animate-spin" /> Submitting...</> : 'Submit'}
                      </button>
                    ) : (
                      <button onClick={() => setCurrentQuestionIndex(prev => Math.min(examQuestions.length - 1, prev + 1))} className="px-6 py-2 rounded-xl bg-white/10 border border-white/20 text-white hover:bg-white/20 transition-all">Next →</button>
                    )}
                  </div>
                </div>
              </>
            ) : (
              <div className="text-center py-8">
                <div className="text-6xl mb-4">{examScore >= 80 ? '🎉' : '📚'}</div>
                <h2 className="text-2xl font-bold text-white mb-2">{examScore >= 80 ? 'Congratulations!' : 'Keep Learning!'}</h2>
                <div className="text-4xl font-bold text-purple-400 mb-4">{examScore}%</div>
                <p className="text-gray-300 mb-6">{examScore >= 80 ? `✅ You passed! Certificate sent to ${candidateEmail}` : `You need ${80}% to pass. Score: ${examScore}%`}</p>
                <button onClick={handleCloseModal} className="px-6 py-3 rounded-xl bg-white/10 border border-white/20 text-white hover:bg-white/20 transition-all">Close</button>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}