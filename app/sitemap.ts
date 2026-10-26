// app/sitemap.ts
import type { MetadataRoute } from 'next'
import { insightsData } from '@/data/insights'
import { guidesData } from '@/data/guides'
import { caseStudiesData } from '@/data/case-studies'
import { countries } from '@/data/countries'
import { fullModulesData } from '@/data/modules'

const SITE_URL = 'https://dpdpa.businezexcellence.com'

export default function sitemap(): MetadataRoute.Sitemap {
  // Static pages
  const staticPages = [
    { url: '', priority: 1.0, changeFrequency: 'weekly' as const },
    { url: '/scorecard', priority: 0.9, changeFrequency: 'weekly' as const },
    { url: '/galaxy', priority: 0.8, changeFrequency: 'monthly' as const },
    { url: '/insight', priority: 0.9, changeFrequency: 'daily' as const },
    { url: '/map', priority: 0.8, changeFrequency: 'monthly' as const },
    { url: '/generator', priority: 0.8, changeFrequency: 'monthly' as const },
    { url: '/certificate-course', priority: 0.7, changeFrequency: 'monthly' as const },
    { url: '/about', priority: 0.6, changeFrequency: 'monthly' as const },
    { url: '/contact', priority: 0.6, changeFrequency: 'monthly' as const },
    { url: '/resources', priority: 0.8, changeFrequency: 'weekly' as const },
    { url: '/resources/guides', priority: 0.9, changeFrequency: 'weekly' as const },
    { url: '/resources/case-studies', priority: 0.9, changeFrequency: 'weekly' as const },
    { url: '/resources/faqs', priority: 0.7, changeFrequency: 'monthly' as const },
    { url: '/resources/forms', priority: 0.7, changeFrequency: 'monthly' as const },
    { url: '/resources/training', priority: 0.7, changeFrequency: 'monthly' as const },
    { url: '/resources/links', priority: 0.6, changeFrequency: 'monthly' as const },
    { url: '/resources/guidelines', priority: 0.7, changeFrequency: 'monthly' as const },
    { url: '/board', priority: 0.6, changeFrequency: 'monthly' as const },
    { url: '/rights', priority: 0.6, changeFrequency: 'monthly' as const },
    { url: '/obligations', priority: 0.6, changeFrequency: 'monthly' as const },
    { url: '/penalties', priority: 0.6, changeFrequency: 'monthly' as const },
    { url: '/provisions', priority: 0.6, changeFrequency: 'monthly' as const },
    { url: '/lawful-processing', priority: 0.6, changeFrequency: 'monthly' as const },
    { url: '/cross-border', priority: 0.6, changeFrequency: 'monthly' as const },
    { url: '/privacy-policy', priority: 0.3, changeFrequency: 'yearly' as const },
    { url: '/terms', priority: 0.3, changeFrequency: 'yearly' as const },
    { url: '/disclaimer', priority: 0.3, changeFrequency: 'yearly' as const },
    { url: '/compare', priority: 0.8, changeFrequency: 'monthly' as const },
    { url: '/compare/dpdpa-vs-gdpr', priority: 0.9, changeFrequency: 'monthly' as const },
    { url: '/compare/dpdpa-vs-ccpa', priority: 0.9, changeFrequency: 'monthly' as const },
    { url: '/compare/dpdpa-vs-pipl', priority: 0.9, changeFrequency: 'monthly' as const },
  ]

  // Dynamic: Insights
  const insightPages = insightsData.map((insight) => ({
    url: `/insight/${insight.slug}`,
    priority: 0.9,
    changeFrequency: 'weekly' as const,
  }))

  // Dynamic: Guides
  const guidePages = guidesData.map((guide) => ({
    url: `/resources/guides/${guide.slug}`,
    priority: 0.9,
    changeFrequency: 'weekly' as const,
  }))

  // Dynamic: Case Studies
  const caseStudyPages = caseStudiesData.map((cs) => ({
    url: `/resources/case-studies/${cs.slug}`,
    priority: 0.8,
    changeFrequency: 'monthly' as const,
  }))

  // Dynamic: Countries
  const countryPages = countries.map((country) => ({
    url: `/country/${country.id}`,
    priority: 0.7,
    changeFrequency: 'monthly' as const,
  }))

  // Dynamic: Certificate Course Modules
  const modulePages = fullModulesData.map((module) => ({
    url: `/certificate-course/${module.id}`,
    priority: 0.6,
    changeFrequency: 'monthly' as const,
  }))

  const allPages = [
    ...staticPages,
    ...insightPages,
    ...guidePages,
    ...caseStudyPages,
    ...countryPages,
    ...modulePages,
  ]

  return allPages.map((page) => ({
    url: `${SITE_URL}${page.url}`,
    lastModified: new Date(),
    changeFrequency: page.changeFrequency,
    priority: page.priority,
  }))
}
