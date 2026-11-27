// app/certificate-course/[...slug]/layout.tsx
// Server layout for module and lesson pages: gives every page its own title,
// description, canonical and schema (the page itself is a client component).
import type { Metadata } from "next";
import { fullModulesData } from "@/data/modules";
import { JsonLd } from "@/components/seo/JsonLd";
import { SITE_URL } from "@/lib/constants";
import { ORG_ID } from "@/lib/seo";

type Params = Promise<{ slug?: string[] }>;

const COURSE_URL = `${SITE_URL}/certificate-course`;

const truncate = (s: string, max = 155) => {
  const clean = s.replace(/\s+/g, " ").trim();
  return clean.length <= max ? clean : clean.slice(0, clean.lastIndexOf(" ", max)).replace(/[,.;:\s]+$/, "") + "…";
};

function resolve(slug: string[] = []) {
  const [moduleId, , lessonId] = slug;
  const mod = fullModulesData.find((m) => m.id === parseInt(moduleId ?? "", 10));
  if (!mod) return null;
  if (!lessonId) return { mod, lesson: null, chapterTitle: "" };
  for (const chapter of mod.chapters) {
    const lesson = chapter.lessons.find((l) => l.id === parseInt(lessonId, 10));
    if (lesson) return { mod, lesson, chapterTitle: chapter.title };
  }
  return null;
}

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const { slug } = await params;
  const found = resolve(slug);
  if (!found) {
    return { title: "Course Page Not Found", robots: { index: false, follow: true } };
  }
  const { mod, lesson } = found;
  const path = lesson
    ? `/certificate-course/${mod.id}/lesson/${lesson.id}`
    : `/certificate-course/${mod.id}`;
  const title = lesson
    ? `${lesson.title} (DPDPA Course, Module ${mod.id})`
    : `Module ${mod.id}: ${mod.title} — DPDPA Master Course`;
  const description = truncate(lesson ? lesson.description : mod.description);

  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      type: "article",
      title,
      description,
      url: path,
      siteName: "Legal Galaxy",
      locale: "en_IN",
      images: [{ url: "/images/og-image.png", width: 1200, height: 630, alt: title }],
    },
    twitter: { card: "summary_large_image", title, description, images: ["/images/og-image.png"] },
  };
}

export default async function CourseSlugLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Params;
}) {
  const { slug } = await params;
  const found = resolve(slug);
  if (!found) return <>{children}</>;
  const { mod, lesson, chapterTitle } = found;

  const moduleUrl = `${COURSE_URL}/${mod.id}`;
  const moduleSchema = {
    "@context": "https://schema.org",
    "@type": "Course",
    "@id": `${moduleUrl}#course`,
    name: `Module ${mod.id}: ${mod.title}`,
    description: truncate(mod.description, 300),
    url: moduleUrl,
    provider: { "@id": ORG_ID },
    isPartOf: { "@type": "Course", name: "DPDPA 2023 Master Course", url: COURSE_URL },
    inLanguage: "en-IN",
    timeRequired: mod.duration,
    isAccessibleForFree: true,
    ...(mod.learningObjectives?.length ? { teaches: mod.learningObjectives } : {}),
    offers: { "@type": "Offer", category: "Free", price: "0", priceCurrency: "INR" },
    hasCourseInstance: { "@type": "CourseInstance", courseMode: "Online", courseWorkload: mod.duration },
  };

  const lessonSchema = lesson
    ? {
        "@context": "https://schema.org",
        "@type": "LearningResource",
        name: lesson.title,
        description: truncate(lesson.description, 300),
        url: `${moduleUrl}/lesson/${lesson.id}`,
        learningResourceType: lesson.type,
        timeRequired: lesson.duration,
        isAccessibleForFree: true,
        inLanguage: "en-IN",
        educationalLevel: "Professional",
        ...(lesson.learningObjectives?.length ? { teaches: lesson.learningObjectives } : {}),
        isPartOf: { "@id": `${moduleUrl}#course` },
        ...(chapterTitle ? { about: chapterTitle } : {}),
        publisher: { "@id": ORG_ID },
      }
    : null;

  const crumbs = [
    { name: "Home", item: SITE_URL },
    { name: "DPDPA Master Course", item: COURSE_URL },
    { name: `Module ${mod.id}`, item: moduleUrl },
    ...(lesson ? [{ name: lesson.title, item: `${moduleUrl}/lesson/${lesson.id}` }] : []),
  ];
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: crumbs.map((c, i) => ({ "@type": "ListItem", position: i + 1, name: c.name, item: c.item })),
  };

  return (
    <>
      <JsonLd data={moduleSchema} />
      {lessonSchema && <JsonLd data={lessonSchema} />}
      <JsonLd data={breadcrumbSchema} />
      {children}
    </>
  );
}
