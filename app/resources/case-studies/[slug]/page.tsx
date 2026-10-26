import type { Metadata } from "next";
import { notFound } from "next/navigation";
import {
  caseStudiesData,
  getCaseStudyBySlug,
  getRelatedCaseStudies,
} from "@/data/case-studies";
import CaseStudyClient from "./CaseStudyClient";

const SITE_URL = "https://dpdpa.businezexcellence.com";

export function generateStaticParams() {
  return caseStudiesData.map((cs) => ({ slug: cs.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const caseStudy = getCaseStudyBySlug(slug);

  if (!caseStudy) {
    return { title: "Case Study Not Found" };
  }

  return {
    title: caseStudy.title,
    description: caseStudy.description,
    alternates: { canonical: `/resources/case-studies/${slug}` },
        openGraph: {
      type: "article",
      title: caseStudy.title,
      description: caseStudy.description,
      url: `/resources/case-studies/${slug}`,
      publishedTime: caseStudy.date,
      authors: ["Businezexcellence StartX LLP"],
      images: [
        {
          url: "/images/og-image.jpg", // 👈 YAHAN CHANGE KIYA
          width: 1200,
          height: 630,
          alt: caseStudy.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: caseStudy.title,
      description: caseStudy.description,
      images: ["/images/og-image.jpg"], // 👈 YAHAN CHANGE KIYA
    },
  };
}

export default async function CaseStudyDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const caseStudy = getCaseStudyBySlug(slug);

  if (!caseStudy) notFound();

  const relatedCaseStudies = getRelatedCaseStudies(slug);

  // Article Schema
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: caseStudy.title,
    description: caseStudy.description,
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
    datePublished: caseStudy.date,
    dateModified: caseStudy.date,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${SITE_URL}/resources/case-studies/${slug}`,
    },
    image: {
      "@type": "ImageObject",
      url: `${SITE_URL}/images/home1.jpeg`,
      width: 1200,
      height: 630,
    },
    articleSection: caseStudy.category,
    keywords: caseStudy.tags.join(", "),
  };

  // Breadcrumb Schema
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
        name: "Case Studies",
        item: `${SITE_URL}/resources/case-studies`,
      },
      {
        "@type": "ListItem",
        position: 4,
        name: caseStudy.title,
        item: `${SITE_URL}/resources/case-studies/${slug}`,
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
      <CaseStudyClient
        caseStudy={caseStudy}
        relatedCaseStudies={relatedCaseStudies}
      />
    </>
  );
}