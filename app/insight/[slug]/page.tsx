import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getInsightBySlug, getRelatedInsights } from '@/data/insights';
import { defaultAuthor } from '@/data/authors';
import { JsonLd } from '@/components/seo/JsonLd';
import { InsightDetailClient } from './InsightDetailClient';

const SITE_URL = 'https://dpdpa.businezexcellence.com';

interface PageProps {
  params: Promise<{ slug: string }>;
}

// "22 Jul 2026" -> "2026-07-22" (schema ko ISO date chahiye)
const toISO = (value?: string) => {
  if (!value) return undefined;
  const d = new Date(value);
  return isNaN(d.getTime()) ? undefined : d.toISOString().slice(0, 10);
};

const truncate = (s: string, max = 155) =>
  s.length <= max ? s : s.slice(0, s.lastIndexOf(' ', max)).replace(/[,.;:\s]+$/, '') + '…';

// ===== SEO: DYNAMIC METADATA =====
export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const insight = getInsightBySlug(slug);

  if (!insight) {
    return {
      title: 'Insight Not Found',
      description: 'The insight you are looking for does not exist.',
      robots: { index: false },
    };
  }

  const description = truncate(insight.excerpt);
  const iso = toISO(insight.date);

  return {
    title: insight.title,
    description,
    keywords: [insight.category, 'DPDP Act', 'Data Protection India', 'Privacy Law'],
    authors: [{ name: insight.author }],
    alternates: { canonical: `/insight/${insight.slug}` },
    openGraph: {
      type: 'article',
      title: insight.title,
      description,
      url: `/insight/${insight.slug}`,
      publishedTime: iso,
      authors: [insight.author],
      siteName: 'Legal Galaxy',
      locale: 'en_IN',
      images: [
        { url: '/images/og-image.png', width: 1200, height: 630, alt: insight.title },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: insight.title,
      description,
      images: ['/images/og-image.png'],
    },
  };
}

// ===== PAGE (Server Component) =====
export default async function InsightDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const insight = getInsightBySlug(slug);

  if (!insight) notFound();

  const relatedInsights = getRelatedInsights(slug);
  const url = `${SITE_URL}/insight/${insight.slug}`;
  const iso = toISO(insight.date);

  // Author Shilpi ho to Person, warna Organization
  const isShilpi = /shilpi/i.test(insight.author);

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: insight.title,
    description: truncate(insight.excerpt),
    author: isShilpi
      ? { '@type': 'Person', name: defaultAuthor.name, url: `${SITE_URL}/authors/${defaultAuthor.id}` }
      : { '@type': 'Organization', name: insight.author, url: SITE_URL },
    publisher: {
      '@type': 'Organization',
      name: 'Legal Galaxy',
      logo: { '@type': 'ImageObject', url: `${SITE_URL}/favicon.png` },
    },
    ...(iso ? { datePublished: iso, dateModified: iso } : {}),
    articleSection: insight.category,
    inLanguage: 'en-IN',
    image: `${SITE_URL}/images/og-image.png`,
    mainEntityOfPage: { '@type': 'WebPage', '@id': url },
  };

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: SITE_URL },
      { '@type': 'ListItem', position: 2, name: 'Insights', item: `${SITE_URL}/insight` },
      { '@type': 'ListItem', position: 3, name: insight.title, item: url },
    ],
  };

  return (
    <>
      <JsonLd data={articleSchema} />
      <JsonLd data={breadcrumbSchema} />
      <InsightDetailClient insight={insight} relatedInsights={relatedInsights} />
    </>
  );
}