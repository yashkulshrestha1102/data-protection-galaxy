import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { guidesData, getGuideBySlug, getRelatedGuides } from "@/data/guides";
import GuideClient from "./GuideClient";

import { SITE_URL } from "@/lib/constants";
import { ORG_ID, ORG_REF, DPDP_ACT_SCHEMA } from "@/lib/seo";

// =========================================================
// HELPERS
// =========================================================

/** "27 Nov 2026" -> "2026-11-27" (falls back to the raw string). */
function toIsoDate(d: string): string {
  const t = new Date(d);
  if (Number.isNaN(t.getTime())) return d;
  const pad = (n: number) => String(n).padStart(2, "0");
  return `${t.getFullYear()}-${pad(t.getMonth() + 1)}-${pad(t.getDate())}`;
}

const wordCount = (html: string) =>
  html.replace(/<[^>]+>/g, " ").split(/\s+/).filter(Boolean).length;

/** Guides whose subject includes India's DPDP Act get `about` = the Act. */
const DPDP_SLUGS = new Set([
  "dpdpa-2023-complete-guide",
  "gdpr-vs-dpdpa",
  "cross-border-data-transfer",
  "dpia-guide",
  "dpo-handbook",
]);

// =========================================================
// STATIC PARAMS (SSG)
// =========================================================

export function generateStaticParams() {
  return guidesData.map((guide) => ({ slug: guide.slug }));
}

// =========================================================
// DYNAMIC METADATA
// =========================================================

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const guide = getGuideBySlug(slug);

  if (!guide) {
    return {
      title: "Guide Not Found",
      description: "The guide you are looking for does not exist.",
      robots: { index: false },
    };
  }

  const description = guide.metaDescription ?? guide.excerpt;
  const modified = toIsoDate(guide.lastUpdated);

  // The social image comes from ./opengraph-image.tsx automatically.
  return {
    title: guide.title,
    description,
    alternates: { canonical: `/resources/guides/${slug}` },
    openGraph: {
      type: "article",
      title: guide.title,
      description,
      url: `/resources/guides/${slug}`,
      siteName: "Legal Galaxy",
      modifiedTime: modified,
      section: guide.category,
      authors: ["Legal Galaxy — Businezexcellence StartX LLP"],
    },
    twitter: {
      card: "summary_large_image",
      title: guide.title,
      description,
    },
  };
}

// =========================================================
// PAGE COMPONENT
// =========================================================

export default async function GuideDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const guide = getGuideBySlug(slug);

  if (!guide) {
    notFound();
  }

  const relatedGuides = getRelatedGuides(slug);
  const url = `${SITE_URL}/resources/guides/${slug}`;
  const modified = toIsoDate(guide.lastUpdated);

  // ===== Article Schema =====
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "@id": `${url}#article`,
    headline: guide.title,
    description: guide.metaDescription ?? guide.excerpt,
    abstract: guide.excerpt,
    inLanguage: "en-IN",
    author: { ...ORG_REF, "@type": "Organization", name: "Legal Galaxy — Businezexcellence StartX LLP", url: SITE_URL },
    publisher: { "@type": "Organization", "@id": ORG_ID, name: "Legal Galaxy", logo: { "@type": "ImageObject", url: `${SITE_URL}/images/logo.png` } },
    dateModified: modified,
    datePublished: modified,
    mainEntityOfPage: { "@type": "WebPage", "@id": url },
    image: `${url}/opengraph-image`,
    articleSection: guide.category,
    wordCount: wordCount(guide.content),
    timeRequired: `PT${parseInt(guide.readTime, 10) || 10}M`,
    keywords: [guide.category, ...guide.tableOfContents.map((t) => t.title)].join(", "),
    ...(DPDP_SLUGS.has(slug) ? { about: DPDP_ACT_SCHEMA } : {}),
    ...(guide.sources?.length
      ? {
          citation: guide.sources.map((s) => ({
            "@type": "CreativeWork",
            name: s.title,
            url: s.url,
            publisher: { "@type": "Organization", name: s.publisher },
          })),
        }
      : {}),
    hasPart: guide.tableOfContents.map((t) => ({
      "@type": "WebPageElement",
      name: t.title,
      url: `${url}#${t.id}`,
    })),
  };

  // ===== FAQ Schema =====
  const faqSchema = guide.faqs?.length
    ? {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "@id": `${url}#faq`,
        mainEntity: guide.faqs.map((f) => ({
          "@type": "Question",
          name: f.q,
          acceptedAnswer: { "@type": "Answer", text: f.a },
        })),
      }
    : null;

  // ===== Breadcrumb Schema =====
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
      { "@type": "ListItem", position: 2, name: "Resources", item: `${SITE_URL}/resources` },
      { "@type": "ListItem", position: 3, name: "Guides", item: `${SITE_URL}/resources/guides` },
      { "@type": "ListItem", position: 4, name: guide.title, item: url },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      {faqSchema && (
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      )}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <GuideClient guide={guide} relatedGuides={relatedGuides} />
    </>
  );
}
