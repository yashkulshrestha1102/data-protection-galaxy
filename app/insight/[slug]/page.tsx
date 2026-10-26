import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getInsightBySlug, getRelatedInsights } from '@/data/insights';
import { InsightDetailClient } from './InsightDetailClient';

interface PageProps {
  params: Promise<{ slug: string }>;
}

// ===== SEO: DYNAMIC METADATA =====
export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const insight = getInsightBySlug(slug);

  if (!insight) {
    return {
      title: 'Insight Not Found | Legal Galaxy',
      description: 'The insight you are looking for does not exist.',
    };
  }

  return {
    title: `${insight.title} | Legal Galaxy`,
    description: insight.excerpt,
    keywords: [
      insight.category,
      'DPDP Act',
      'Data Protection India',
      'Privacy Law',
      'AI Governance',
    ],
    authors: [{ name: insight.author }],
       openGraph: {
      type: 'article',
      title: insight.title,
      description: insight.excerpt,
      publishedTime: insight.date,
      authors: [insight.author],
      siteName: 'Legal Galaxy',
      locale: 'en_IN',
      images: [{                        // 👈 YAHAN ADD/CHANGE KIYA
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: insight.title,
      }],
    },
    twitter: {
      card: 'summary_large_image',
      title: insight.title,
      description: insight.excerpt,
      images: ["/images/og-image.jpg"], // 👈 YAHAN CHANGE KIYA
    },
    alternates: {
      canonical: `/insight/${insight.slug}`,
    },
  };
}

// ===== PAGE (Server Component) =====
export default async function InsightDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const insight = getInsightBySlug(slug);

  if (!insight) {
    notFound();
  }

  const relatedInsights = getRelatedInsights(slug);

  // ===== SEO: JSON-LD STRUCTURED DATA =====
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: insight.title,
    description: insight.excerpt,
    author: {
      '@type': 'Organization',
      name: insight.author,
    },
    publisher: {
      '@type': 'Organization',
      name: 'Legal Galaxy',
      logo: {
        '@type': 'ImageObject',
        url: 'https://your-domain.com/favicon.ico',
      },
    },
    datePublished: insight.date,
    dateModified: insight.date,
    articleSection: insight.category,
    inLanguage: 'en-IN',
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `https://your-domain.com/insight/${insight.slug}`,
    },
  };

  return (
    <>
      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd).replace(/</g, '\\u003c'),
        }}
      />
      <InsightDetailClient insight={insight} relatedInsights={relatedInsights} />
    </>
  );
}