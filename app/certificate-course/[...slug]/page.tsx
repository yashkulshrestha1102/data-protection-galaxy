// app/certificate-course/[...slug]/page.tsx

import { notFound } from 'next/navigation';
import Link from 'next/link';
import { fullModulesData } from '@/data/modules';
import { Clock, BookOpen, CheckCircle, ArrowLeft } from 'lucide-react';

export default async function CoursePage({ params }: { params: Promise<{ slug: string[] }> }) {
  const { slug } = await params;
  const slugArray = slug || [];
  const [moduleId, , lessonId] = slug;

  // ===== MODULE PAGE =====
  if (moduleId && !lessonId) {
    const id = parseInt(moduleId);
    const module = fullModulesData.find((m) => m.id === id);
    if (!module) notFound();

    const totalLessons = module.chapters.reduce((acc, ch) => acc + ch.lessons.length, 0);

    return (
      <div suppressHydrationWarning className="min-h-screen text-white flex flex-col items-center px-4 pt-28 md:pt-32 pb-16 relative overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-cover bg-center bg-no-repeat" style={{ backgroundImage: "url('/images/home1.jpeg')" }}>
          <div className="absolute inset-0 bg-black/60 backdrop-blur-[2px]" />
        </div>
        <div suppressHydrationWarning className="absolute inset-0 -z-10">
          {[...Array(50)].map((_, i) => (
            <div key={i} className="absolute bg-white rounded-full animate-twinkle" style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDuration: `${Math.random() * 4 + 2}s`,
              animationDelay: `${Math.random() * 5}s`,
              opacity: Math.random() * 0.5 + 0.1,
              width: `${Math.random() * 2 + 1}px`,
              height: `${Math.random() * 2 + 1}px`,
            }} />
          ))}
        </div>

        <div className="max-w-4xl mx-auto w-full relative z-10">
          <Link href="/certificate-course" className="text-gray-400 hover:text-white transition-colors text-sm flex items-center gap-1 mb-6 bg-white/5 px-4 py-2 rounded-lg border border-white/10 hover:bg-white/10 w-fit">
            <ArrowLeft className="w-4 h-4" /> Back to Course
          </Link>

          <div className="mb-8">
            <div className="flex items-center gap-3 text-sm text-gray-400 mb-2 flex-wrap">
              <span className="px-2 py-0.5 rounded-full bg-purple-500/20 text-purple-400 border border-purple-500/30 text-xs">Module {module.id}</span>
              <span className="text-gray-600">•</span>
              <span className="flex items-center gap-1"><Clock className="w-3 h-3" /> {module.duration}</span>
              {module.isNew && <span className="text-xs px-2 py-0.5 rounded-full bg-green-500/20 text-green-400 border border-green-500/30">New</span>}
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-3">{module.title}</h1>
            <p className="text-gray-300 text-lg">{module.description}</p>
            <div className="flex items-center gap-4 mt-3 text-sm text-gray-400">
              <span className="flex items-center gap-1"><BookOpen className="w-4 h-4" /> {totalLessons} lessons</span>
              <span>•</span>
              <span className="flex items-center gap-1"><CheckCircle className="w-4 h-4" /> {module.chapters.length} chapters</span>
            </div>
          </div>

          {module.learningObjectives && module.learningObjectives.length > 0 && (
            <div className="bg-blue-500/10 rounded-xl p-6 border border-blue-500/20 mb-8">
              <h3 className="text-lg font-semibold text-blue-300 mb-4">🎯 What You'll Learn</h3>
              <ul className="space-y-2">
                {module.learningObjectives.map((obj, i) => (
                  <li key={i} className="flex items-start gap-2 text-gray-300 text-sm">
                    <span className="text-blue-400 mt-1">▸</span> {obj}
                  </li>
                ))}
              </ul>
            </div>
          )}

          <div className="space-y-4">
            {module.chapters.map((chapter, idx) => (
              <div key={chapter.id} className="bg-white/10 border border-white/20 rounded-xl overflow-hidden">
                <div className="p-4 bg-white/5">
                  <h3 className="text-lg font-semibold text-white">{idx + 1}. {chapter.title}</h3>
                  <span className="text-xs text-gray-400">{chapter.lessons.length} lessons</span>
                </div>
                <div className="p-4 space-y-1">
                  {chapter.lessons.map((lesson, lessonIdx) => (
                    <Link key={lesson.id} href={`/certificate-course/${module.id}/lesson/${lesson.id}`} className="flex items-center justify-between px-3 py-2 hover:bg-white/5 rounded-lg transition-colors group">
                      <span className="text-white/80 group-hover:text-white transition-colors text-sm">{idx + 1}.{lessonIdx + 1} {lesson.title}</span>
                      <div className="flex items-center gap-2">
                        <span className="text-xs px-2 py-0.5 rounded-full bg-white/5 border border-white/10 text-gray-400 capitalize">{lesson.type}</span>
                        <span className="text-xs text-gray-500">{lesson.duration}</span>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 bg-green-500/10 border border-green-500/30 rounded-xl p-4">
            <h3 className="text-lg font-semibold text-green-400 mb-2">📝 Module Quiz</h3>
            <p className="text-sm text-gray-300">{module.quiz.questions.length} questions • {module.quiz.passingScore}% to pass</p>
          </div>

          {module.id < fullModulesData.length && (
            <Link href={`/certificate-course/${module.id + 1}`} className="mt-8 block p-4 bg-gradient-to-r from-purple-500/10 to-pink-500/10 border border-purple-500/20 rounded-xl text-center hover:bg-purple-500/20 transition-colors">
              <span className="text-white font-medium">Next Module → {fullModulesData.find(m => m.id === module.id + 1)?.title}</span>
            </Link>
          )}
        </div>
      </div>
    );
  }

  // ===== LESSON PAGE =====
  if (moduleId && lessonId) {
    const id = parseInt(moduleId);
    const lid = parseInt(lessonId);
    const module = fullModulesData.find((m) => m.id === id);
    if (!module) notFound();

    let lesson = null;
    let chapterTitle = '';
    for (const chapter of module.chapters) {
      const found = chapter.lessons.find((l) => l.id === lid);
      if (found) { lesson = found; chapterTitle = chapter.title; break; }
    }
    if (!lesson) notFound();

    const allLessons = module.chapters.flatMap((ch) => ch.lessons);
    const currentIndex = allLessons.findIndex((l) => l.id === lid);
    const prevLesson = currentIndex > 0 ? allLessons[currentIndex - 1] : null;
    const nextLesson = currentIndex < allLessons.length - 1 ? allLessons[currentIndex + 1] : null;

    return (
      <div suppressHydrationWarning className="min-h-screen text-white flex flex-col items-center px-4 pt-28 md:pt-32 pb-16 relative overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-cover bg-center bg-no-repeat" style={{ backgroundImage: "url('/images/home1.jpeg')" }}>
          <div className="absolute inset-0 bg-black/60 backdrop-blur-[2px]" />
        </div>
        <div suppressHydrationWarning className="absolute inset-0 -z-10">
          {[...Array(50)].map((_, i) => (
            <div key={i} className="absolute bg-white rounded-full animate-twinkle" style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDuration: `${Math.random() * 4 + 2}s`,
              animationDelay: `${Math.random() * 5}s`,
              opacity: Math.random() * 0.5 + 0.1,
              width: `${Math.random() * 2 + 1}px`,
              height: `${Math.random() * 2 + 1}px`,
            }} />
          ))}
        </div>

        <div className="max-w-3xl mx-auto w-full relative z-10">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-6">
            <Link href={`/certificate-course/${moduleId}`} className="text-gray-400 hover:text-white transition-colors text-sm flex items-center gap-1 bg-white/5 px-4 py-2 rounded-lg border border-white/10 hover:bg-white/10 w-fit">
              <ArrowLeft className="w-4 h-4" /> Back to Module
            </Link>
            <div className="flex items-center gap-3 text-xs text-gray-500">
              <span>{currentIndex + 1} of {allLessons.length}</span>
              <span className="text-gray-700">|</span>
              <span className="text-gray-400">{module.title}</span>
            </div>
          </div>

          <div className="w-full h-1.5 bg-white/10 rounded-full mb-6 overflow-hidden">
            <div className="h-full bg-gradient-to-r from-purple-500 to-pink-500 rounded-full transition-all" style={{ width: `${((currentIndex + 1) / allLessons.length) * 100}%` }} />
          </div>

          <div className="mb-8">
            <div className="flex items-center gap-3 mb-2 flex-wrap">
              <span className="text-xs px-2 py-0.5 rounded-full bg-white/10 border border-white/10 text-gray-400 capitalize">{lesson.type}</span>
              <span className="text-xs text-gray-500 flex items-center gap-1"><Clock className="w-3 h-3" /> {lesson.duration}</span>
              <span className="text-xs text-gray-600">•</span>
              <span className="text-xs text-gray-500">{chapterTitle}</span>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-3">{lesson.title}</h1>
            <p className="text-gray-300 text-lg">{lesson.description}</p>
          </div>

          {lesson.learningObjectives && lesson.learningObjectives.length > 0 && (
            <div className="bg-blue-500/10 rounded-xl p-6 border border-blue-500/20 mb-8">
              <h3 className="text-lg font-semibold text-blue-300 mb-4">🎯 Learning Objectives</h3>
              <ul className="space-y-2">
                {lesson.learningObjectives.map((obj, i) => (
                  <li key={i} className="flex items-start gap-2 text-gray-300 text-sm"><span className="text-blue-400 mt-1">▸</span> {obj}</li>
                ))}
              </ul>
            </div>
          )}

          {lesson.sections && lesson.sections.length > 0 ? (
            lesson.sections.map((section) => (
              <div key={section.id} className="mb-8">
                <h2 className="text-2xl font-bold text-white mb-4">{section.title}</h2>
                {section.content.map((item, idx) => {
                  switch (item.type) {
                    case 'paragraph': return <p key={idx} className="text-gray-300 leading-relaxed mb-4">{item.content}</p>;
                    case 'heading': return <h3 key={idx} className="text-xl font-bold text-white mt-6 mb-3">{item.content}</h3>;
                    case 'list': return <ul key={idx} className="space-y-2 mb-4">{item.items?.map((li, i) => <li key={i} className="flex items-start gap-2 text-gray-300"><span className="text-purple-400 mt-1">•</span> {li}</li>)}</ul>;
                    case 'callout': {
                      const styles: any = { info: 'bg-blue-500/10 border-blue-500/30 text-blue-200', warning: 'bg-yellow-500/10 border-yellow-500/30 text-yellow-200', tip: 'bg-emerald-500/10 border-emerald-500/30 text-emerald-200', important: 'bg-purple-500/10 border-purple-500/30 text-purple-200', danger: 'bg-red-500/10 border-red-500/30 text-red-200' };
                      return <div key={idx} className={`p-4 rounded-lg border ${styles[item.calloutType || 'info']} mb-4`}><p className="text-sm">{item.content}</p></div>;
                    }
                    case 'example': return <div key={idx} className="bg-white/5 rounded-lg p-4 border border-white/10 mb-4"><h4 className="text-sm font-semibold text-gray-400 mb-2">💡 Example</h4><p className="text-gray-300 text-sm">{item.content}</p></div>;
                    case 'warning': return <div key={idx} className="bg-red-500/10 rounded-lg p-4 border border-red-500/30 mb-4"><h4 className="text-sm font-semibold text-red-400 mb-2">⚠️ Warning</h4><p className="text-gray-300 text-sm">{item.content}</p></div>;
                    default: return null;
                  }
                })}
              </div>
            ))
          ) : (
            <div className="bg-white/5 rounded-xl p-6 border border-white/10 mb-8">
              <p className="text-gray-300">{lesson.content}</p>
            </div>
          )}

          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 pt-6 border-t border-white/10">
            {prevLesson ? <Link href={`/certificate-course/${moduleId}/lesson/${prevLesson.id}`} className="text-gray-400 hover:text-white transition-colors text-sm flex items-center gap-1 bg-white/5 px-4 py-2 rounded-lg border border-white/10 hover:bg-white/10 w-full sm:w-auto justify-center">← Previous</Link> : <div />}
            <span className="text-xs text-gray-500">{currentIndex + 1} / {allLessons.length}</span>
            {nextLesson ? <Link href={`/certificate-course/${moduleId}/lesson/${nextLesson.id}`} className="text-gray-400 hover:text-white transition-colors text-sm flex items-center gap-1 bg-white/5 px-4 py-2 rounded-lg border border-white/10 hover:bg-white/10 w-full sm:w-auto justify-center">Next →</Link> : <Link href={`/certificate-course/${moduleId}`} className="text-purple-400 hover:text-purple-300 transition-colors text-sm flex items-center gap-1 bg-purple-500/10 px-4 py-2 rounded-lg border border-purple-500/20 hover:bg-purple-500/20 w-full sm:w-auto justify-center"><CheckCircle className="w-4 h-4" /> Complete</Link>}
          </div>
        </div>
      </div>
    );
  }

  notFound();
}