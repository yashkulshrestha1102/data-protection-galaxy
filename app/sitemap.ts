// app/sitemap.ts
import type { MetadataRoute } from 'next'
import { insightsData } from '@/data/insights'

const SITE_URL = 'https://dpdpa.businezexcellence.com'

export default function sitemap(): MetadataRoute.Sitemap {
  // Static pages
  const staticPages = [
    { url: '', changeFrequency: 'weekly' as const, priority: 1 },
    { url: '/scorecard', changeFrequency: 'weekly' as const, priority: 0.9 },
    { url: '/galaxy', changeFrequency: 'monthly' as const, priority: 0.8 },
    { url: '/insight', changeFrequency: 'daily' as const, priority: 0.9 },
    { url: '/map', changeFrequency: 'monthly' as const, priority: 0.8 },
    { url: '/generator', changeFrequency: 'monthly' as const, priority: 0.8 },
    { url: '/certificate-course', changeFrequency: 'monthly' as const, priority: 0.7 },
    { url: '/about', changeFrequency: 'monthly' as const, priority: 0.6 },
    { url: '/contact', changeFrequency: 'monthly' as const, priority: 0.6 },
    { url: '/privacy-policy', changeFrequency: 'yearly' as const, priority: 0.3 },
    { url: '/terms', changeFrequency: 'yearly' as const, priority: 0.3 },
    { url: '/disclaimer', changeFrequency: 'yearly' as const, priority: 0.3 },
  ]

  // Dynamic insight pages
  const insightPages = insightsData.map((insight) => ({
    url: `/insight/${insight.slug}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.9,
  }))

  return [
    ...staticPages.map((page) => ({
      url: `${SITE_URL}${page.url}`,
      lastModified: new Date(),
      changeFrequency: page.changeFrequency,
      priority: page.priority,
    })),
    ...insightPages.map((page) => ({
      url: `${SITE_URL}${page.url}`,
      lastModified: page.lastModified,
      changeFrequency: page.changeFrequency,
      priority: page.priority,
    })),
  ]
}