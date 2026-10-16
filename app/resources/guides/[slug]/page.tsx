import type { Metadata } from "next";
import { notFound } from "next/navigation";
import {
  guidesData,
  getGuideBySlug,
  getRelatedGuides,
} from "@/data/guides";
import GuideClient from "./GuideClient";

const SITE_URL = "https://dpdpa.businezexcellence.com";

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
    };
  }

  return {
    title: guide.title,
    description: guide.excerpt,
    alternates: {
      canonical: `/resources/guides/${slug}`,
    },
    openGraph: {
      type: "article",
      title: guide.title,
      description: guide.excerpt,
      url: `/resources/guides/${slug}`,
      siteName: "Legal Galaxy",
      publishedTime: guide.lastUpdated,
      authors: ["Businezexcellence StartX LLP"],
      images: [
        {
          url: "/images/home1.jpeg",
          width: 1200,
          height: 630,
          alt: guide.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: guide.title,
      description: guide.excerpt,
      images: ["/images/home1.jpeg"],
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

  // ===== Article Schema =====
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: guide.title,
    description: guide.excerpt,
    author: {
      "@type": "Organization",
      name: "Team Businezexcellence StartX LLP",
      url: SITE_URL,
    },
    publisher: {
      "@type": "Organization",
      name: "Legal Galaxy",
      logo: {
        "@type": "ImageObject",
        url: `${SITE_URL}/favicon.ico`,
      },
    },
    datePublished: guide.lastUpdated,
    dateModified: guide.lastUpdated,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${SITE_URL}/resources/guides/${slug}`,
    },
    image: {
      "@type": "ImageObject",
      url: `${SITE_URL}/images/home1.jpeg`,
      width: 1200,
      height: 630,
    },
    articleSection: guide.category,
  };

  // ===== Breadcrumb Schema =====
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
      {
        "@type": "ListItem",
        position: 2,
        name: "Resources",
        item: `${SITE_URL}/resources`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "Guides",
        item: `${SITE_URL}/resources/guides`,
      },
      {
        "@type": "ListItem",
        position: 4,
        name: guide.title,
        item: `${SITE_URL}/resources/guides/${slug}`,
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <GuideClient guide={guide} relatedGuides={relatedGuides} />
    </>
  );
}