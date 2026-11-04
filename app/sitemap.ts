// app/sitemap.ts
import type { MetadataRoute } from 'next'
import { insightsData } from '@/data/insights'
import { guidesData } from '@/data/guides'
import { caseStudiesData } from '@/data/case-studies'
import { countries } from '@/data/countries'
import { fullModulesData } from '@/data/modules'

const SITE_URL = 'https://dpdpa.businezexcellence.com'

// Jab site ka bada content change karo, tab ye date update karna
const SITE_UPDATED = new Date('2026-11-04')

// "23 Feb 2026" ya "2026-02-23" dono parse ho jaate hain
function toDate(value?: string): Date {
  if (!value) return SITE_UPDATED
  const d = new Date(value)
  return isNaN(d.getTime()) ? SITE_UPDATED : d
}

const staticPaths = [
  '',
  '/scorecard',
  '/galaxy',
  '/insight',
  '/map',
  '/generator',
  '/certificate-course',
  '/about',
  '/contact',
  '/resources',
  '/resources/guides',
  '/resources/case-studies',
  '/resources/faqs',
  '/resources/forms',
  '/resources/training',
  '/resources/links',
  '/resources/guidelines',
  '/board',
  '/rights',
  '/obligations',
  '/penalties',
  '/provisions',
  '/lawful-processing',
  '/cross-border',
  '/compare',
  '/compare/dpdpa-vs-ccpa',
  '/compare/dpdpa-vs-gdpr', // page exist na kare to ye line hata do
  '/compare/dpdpa-vs-pipl', // page exist na kare to ye line hata do
  '/authors',
  '/authors/shilpi-kulshrestha',
  '/data-principal-rights',
  '/consent-notice',
  '/grievance-redressal',
  '/privacy-policy',
  '/terms',
  '/disclaimer',
]

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages = staticPaths.map((path) => ({
    url: `${SITE_URL}${path}`,
    lastModified: SITE_UPDATED,
  }))

  const insightPages = insightsData.map((i) => ({
    url: `${SITE_URL}/insight/${i.slug}`,
    lastModified: toDate(i.date),
  }))

  const guidePages = guidesData.map((g) => ({
    url: `${SITE_URL}/resources/guides/${g.slug}`,
    lastModified: toDate(g.lastUpdated),
  }))

  const caseStudyPages = caseStudiesData.map((cs) => ({
    url: `${SITE_URL}/resources/case-studies/${cs.slug}`,
    lastModified: toDate(cs.date),
  }))

  const countryPages = countries.map((c) => ({
    url: `${SITE_URL}/country/${c.id}`,
    lastModified: SITE_UPDATED,
  }))

  const modulePages = fullModulesData.map((m) => ({
    url: `${SITE_URL}/certificate-course/${m.id}`,
    lastModified: SITE_UPDATED,
  }))

  return [
    ...staticPages,
    ...insightPages,
    ...guidePages,
    ...caseStudyPages,
    ...countryPages,
    ...modulePages,
  ]
}