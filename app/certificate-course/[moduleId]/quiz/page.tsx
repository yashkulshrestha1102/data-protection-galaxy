"use client";

import { useState, useEffect } from 'react';
import { useParams, useRouter } from 'next/navigation';
import Link from 'next/link';
import { fullModulesData } from '@/data/modules';
import { ArrowLeft, Clock, CheckCircle, XCircle } from 'lucide-react';

export default function QuizPage() {
  const params = useParams();
  const router = useRouter();
  const moduleId = parseInt(params.moduleId as string);
  
  const [module, setModule] = useState<any>(null);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<Record<number, number>>({});
  const [showResults, setShowResults] = useState(false);
  const [score, setScore] = useState(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);

  useEffect(() => {
    const mod = fullModulesData.find((m) => m.id === moduleId);
    if (mod) setModule(mod);
  }, [moduleId]);

  if (!module) {
    return (
      <div className="min-h-screen text-white flex items-center justify-center">
        <div className="text-xl">Loading...</div>
      </div>
    );
  }

  const questions = module.quiz.questions;
  const totalQuestions = questions.length;
  const currentQ = questions[currentQuestion];

  const handleAnswer = (optionIndex: number) => {
    setSelectedOption(optionIndex);
    setAnswers({ ...answers, [currentQuestion]: optionIndex });
  };

  const handleNext = () => {
    setSelectedOption(null);
    if (currentQuestion < totalQuestions - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      // Calculate score
      let correct = 0;
      questions.forEach((q: any, idx: number) => {
        if (answers[idx] === q.correct) correct++;
      });
      setScore(Math.round((correct / totalQuestions) * 100));
      setShowResults(true);
    }
  };

  const handlePrev = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
      setSelectedOption(answers[currentQuestion - 1] ?? null);
    }
  };

  if (showResults) {
    const passed = score >= module.quiz.passingScore;
    return (
      <div className="min-h-screen text-white flex flex-col items-center justify-center px-4 pt-28 md:pt-32 pb-16 relative overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-cover bg-center bg-no-repeat" style={{ backgroundImage: "url('/images/home1.jpeg')" }}>
          <div className="absolute inset-0 bg-black/60 backdrop-blur-[2px]" />
        </div>

        <div className="max-w-2xl mx-auto w-full bg-white/10 border border-white/20 rounded-2xl p-8 text-center">
          <div className="text-6xl mb-4">{passed ? '🎉' : '📚'}</div>
          <h2 className="text-3xl font-bold text-white mb-2">
            {passed ? 'Congratulations!' : 'Keep Learning!'}
          </h2>
          <div className="text-5xl font-bold text-purple-400 mb-4">{score}%</div>
          <p className="text-gray-300 mb-6">
            {passed 
              ? `You passed! You got ${score}% correct.` 
              : `You need ${module.quiz.passingScore}% to pass. You got ${score}%.`}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href={`/certificate-course/${moduleId}`}
              className="px-6 py-3 rounded-xl bg-white/10 border border-white/20 text-white hover:bg-white/20 transition-all"
            >
              Back to Module
            </Link>
            {passed && (
              <Link 
                href={`/certificate-course`}
                className="px-6 py-3 rounded-xl bg-gradient-to-r from-purple-500 to-pink-500 text-white font-medium hover:scale-105 transition-all"
              >
                View Certificate 🏆
              </Link>
            )}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen text-white flex flex-col items-center px-4 pt-28 md:pt-32 pb-16 relative overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-cover bg-center bg-no-repeat" style={{ backgroundImage: "url('/images/home1.jpeg')" }}>
        <div className="absolute inset-0 bg-black/60 backdrop-blur-[2px]" />
      </div>

      <div className="max-w-3xl mx-auto w-full">
        <div className="flex items-center justify-between mb-6">
          <Link href={`/certificate-course/${moduleId}`} className="text-gray-400 hover:text-white transition-colors text-sm flex items-center gap-1">
            <ArrowLeft className="w-4 h-4" /> Back to Module
          </Link>
          <div className="text-sm text-gray-400">
            {currentQuestion + 1} of {totalQuestions}
          </div>
        </div>

        <div className="w-full h-1.5 bg-white/10 rounded-full mb-6 overflow-hidden">
          <div 
            className="h-full bg-gradient-to-r from-purple-500 to-pink-500 rounded-full transition-all duration-300"
            style={{ width: `${((currentQuestion + 1) / totalQuestions) * 100}%` }}
          />
        </div>

        <div className="bg-white/10 border border-white/20 rounded-2xl p-6 md:p-8">
          <div className="mb-6">
            <span className="text-xs px-3 py-1 rounded-full bg-purple-500/20 text-purple-400 border border-purple-500/30">
              Question {currentQuestion + 1}
            </span>
            <h3 className="text-xl font-bold text-white mt-3">{currentQ.question}</h3>
          </div>

          <div className="space-y-3">
            {currentQ.options.map((option: string, idx: number) => {
              const isSelected = selectedOption === idx;
              return (
                <button
                  key={idx}
                  onClick={() => handleAnswer(idx)}
                  className={`w-full text-left px-4 py-3 rounded-xl border transition-all ${
                    isSelected
                      ? 'border-purple-500 bg-purple-500/20 text-white'
                      : 'border-white/10 bg-white/5 text-gray-300 hover:bg-white/10 hover:border-white/20'
                  }`}
                >
                  <span className="text-sm">{String.fromCharCode(65 + idx)}. {option}</span>
                </button>
              );
            })}
          </div>

          <div className="flex justify-between mt-6 pt-6 border-t border-white/10">
            <button
              onClick={handlePrev}
              disabled={currentQuestion === 0}
              className={`px-4 py-2 text-sm rounded-lg transition-all ${
                currentQuestion === 0
                  ? 'text-gray-600 cursor-not-allowed'
                  : 'text-gray-400 hover:text-white hover:bg-white/10'
              }`}
            >
              Previous
            </button>
            <button
              onClick={handleNext}
              disabled={selectedOption === null}
              className={`px-6 py-2 rounded-lg font-medium transition-all ${
                selectedOption !== null
                  ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white hover:scale-105'
                  : 'bg-gray-600 text-gray-400 cursor-not-allowed'
              }`}
            >
              {currentQuestion === totalQuestions - 1 ? 'Submit Quiz' : 'Next →'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}