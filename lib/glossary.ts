// lib/glossary.ts
// Builds the site-wide glossary from the definitions already written in the
// DPDPA Master Course lessons (data/modules). Each term links back to its lesson.
import { fullModulesData } from "@/data/modules";

export interface GlossaryEntry {
  term: string;
  definition: string;
  slug: string;
  letter: string;
  moduleId: number;
  moduleTitle: string;
  lessonId: number;
  lessonTitle: string;
  href: string;
}

const toSlug = (s: string) =>
  s
    .toLowerCase()
    .normalize("NFKD")
    .replace(/[^\w\s-]/g, "")
    .trim()
    .replace(/[\s_]+/g, "-")
    .replace(/-+/g, "-");

let cache: GlossaryEntry[] | null = null;

export function getGlossary(): GlossaryEntry[] {
  if (cache) return cache;
  const seen = new Map<string, GlossaryEntry>();
  for (const mod of fullModulesData) {
    for (const chapter of mod.chapters) {
      for (const lesson of chapter.lessons) {
        for (const g of lesson.glossary ?? []) {
          const term = g.term?.trim();
          const definition = g.definition?.trim();
          if (!term || !definition) continue;
          const key = term.toLowerCase();
          if (seen.has(key)) continue; // keep the first (earliest) definition
          const first = term.charAt(0).toUpperCase();
          let slug = toSlug(term) || `term-${seen.size + 1}`;
          while ([...seen.values()].some((e) => e.slug === slug)) slug += "-2";
          seen.set(key, {
            term,
            definition,
            slug,
            letter: /[A-Z]/.test(first) ? first : "#",
            moduleId: mod.id,
            moduleTitle: mod.title,
            lessonId: lesson.id,
            lessonTitle: lesson.title,
            href: `/certificate-course/${mod.id}/lesson/${lesson.id}`,
          });
        }
      }
    }
  }
  cache = [...seen.values()].sort((a, b) => a.term.localeCompare(b.term, "en", { sensitivity: "base" }));
  return cache;
}
