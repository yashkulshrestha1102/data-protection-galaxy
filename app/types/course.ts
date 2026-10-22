// app/types/course.ts

// ===== CONTENT BLOCK TYPES =====
export type ContentBlock =
  | { type: 'paragraph'; content: string }
  | { type: 'heading'; content: string }
  | { type: 'list'; content?: string; items: string[] }
  | { type: 'callout'; content: string; calloutType?: 'info' | 'warning' | 'tip' | 'important' | 'danger' | 'note' }
  | { type: 'example'; content: string }
  | { type: 'warning'; content: string }
  | { type: 'quote'; content: string }
  | { type: 'table'; headers: string[]; rows: string[][] };

// ===== SECTION =====
export interface LessonSection {
  id: string;
  title: string;
  content: ContentBlock[];
}

// ===== GLOSSARY =====
export interface GlossaryTerm {
  term: string;
  definition: string;
}

// ===== REFERENCE =====
export interface Reference {
  title: string;
  source: string;
  year: string;
  url?: string;
}

// ===== LESSON =====
export interface Lesson {
  id: number;
  title: string;
  duration: string;
  type: 'video' | 'reading' | 'interactive' | 'exercise';
  description: string;
  content: string;
  learningObjectives: string[];
  keyTakeaways: string[];
  sections: LessonSection[];
  glossary?: GlossaryTerm[];
  references?: Reference[];
}

// ===== QUIZ =====
export interface QuizQuestion {
  question: string;
  options: string[];
  correct: number;
  explanation?: string;
}

export interface Quiz {
  questions: QuizQuestion[];
  passingScore: number;
}

// ===== ASSIGNMENT =====
export interface Assignment {
  id: number;
  title: string;
  description: string;
  deliverables: string[];
}

// ===== PROJECT =====
export interface Project {
  title: string;
  description: string;
  deliverables: string[];
}

// ===== CHAPTER =====
export interface Chapter {
  id: number;
  title: string;
  lessons: Lesson[];
}

// ===== MODULE =====
export interface Module {
  id: number;
  title: string;
  description: string;
  duration: string;
  icon: string;
  isNew?: boolean;
  learningObjectives?: string[];
  chapters: Chapter[];
  assignments: Assignment[];
  quiz: Quiz;
  project?: Project;
}

// ===== EXAM DATA =====
export interface ExamData {
  totalQuestions: number;
  duration: number;
  passingScore: number;
  correctNeeded: number;
}

// ===== EXAM QUESTION =====
export interface ExamQuestion {
  id: number;
  question: string;
  options: string[];
  correct: number;
}