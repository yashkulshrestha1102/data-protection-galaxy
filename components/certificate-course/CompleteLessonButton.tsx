"use client";

import { useState, useEffect } from 'react';
import { CheckCircle } from 'lucide-react';

interface CompleteLessonButtonProps {
  lessonKey: string;
  moduleId: number;
}

export default function CompleteLessonButton({ lessonKey, moduleId }: CompleteLessonButtonProps) {
  const [isCompleted, setIsCompleted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem('dpdpa_completed_lessons');
    if (stored) {
      try {
        const completed = JSON.parse(stored);
        setIsCompleted(completed.includes(lessonKey));
      } catch {
        setIsCompleted(false);
      }
    }
  }, [lessonKey]);

  const handleComplete = () => {
    if (isCompleted || isLoading) return;
    
    setIsLoading(true);
    const key = 'dpdpa_completed_lessons';
    const stored = localStorage.getItem(key);
    const completed = stored ? JSON.parse(stored) : [];
    
    if (!completed.includes(lessonKey)) {
      completed.push(lessonKey);
      localStorage.setItem(key, JSON.stringify(completed));
      setIsCompleted(true);
      
      // Dispatch storage event for other tabs
      window.dispatchEvent(new Event('storage'));
      
      alert('✅ Lesson marked as complete!');
      window.location.href = `/certificate-course/${moduleId}`;
    }
    setIsLoading(false);
  };

  return (
    <button
      onClick={handleComplete}
      disabled={isCompleted || isLoading}
      className={`px-6 py-2 rounded-lg font-medium transition-all flex items-center gap-2 ${
        isCompleted
          ? 'bg-emerald-500/20 text-emerald-400 cursor-not-allowed'
          : isLoading
          ? 'bg-gray-500/50 text-gray-300 cursor-wait'
          : 'bg-gradient-to-r from-emerald-500 to-green-500 text-white hover:scale-105'
      }`}
    >
      <CheckCircle className="w-4 h-4" />
      {isCompleted ? 'Completed ✅' : isLoading ? 'Saving...' : 'Mark as Complete'}
    </button>
  );
}