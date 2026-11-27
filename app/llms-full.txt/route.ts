// app/llms-full.txt/route.ts
// Plain-text version of the site's main written content for AI assistants
// (the companion to /llms.txt). Generated from the same data files as the pages.
import { guidesData } from '@/data/guides'
import { insightsData } from '@/data/insights'
import { caseStudiesData } from '@/data/case-studies'
import { DPDPA_FAQS } from '@/data/faqs'
import {
  RIGHTS_FAQS,
  OBLIGATIONS_FAQS,
  PENALTIES_FAQS,
  PROVISIONS_FAQS,
  LAWFUL_FAQS,
  CROSS_BORDER_FAQS,
} from '@/data/page-faqs'
import { SITE_URL } from '@/lib/constants'
import { OFFICIAL_SOURCES } from '@/lib/seo'

export const dynamic = 'force-static'

// HTML -> readable plain text (keeps headings and list items on their own lines)
function toText(html: string): string {
  return html
    .replace(/<script[\s\S]*?<\/script>/gi, '')
    .replace(/<style[\s\S]*?<\/style>/gi, '')
    .replace(/<h[1-6][^>]*>/gi, '\n\n## ')
    .replace(/<\/h[1-6]>/gi, '\n')
    .replace(/<li[^>]*>/gi, '\n- ')
    .replace(/<br\s*\/?>/gi, '\n')
    .replace(/<\/(p|div|tr|ul|ol|table|section)>/gi, '\n')
    .replace(/<(td|th)[^>]*>/gi, ' | ')
    .replace(/<[^>]+>/g, '')
    .replace(/&nbsp;/g, ' ')
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .replace(/&#39;|&apos;/g, "'")
    .replace(/[ \t]+/g, ' ')
    .replace(/\n[ \t]+/g, '\n')
    .replace(/\n{3,}/g, '\n\n')
    .trim()
}

const faqBlock = (title: string, url: string, items: { q: string; a: string }[]) =>
  `## ${title}\nSource: ${url}\n\n` + items.map((f) => `Q: ${f.q}\nA: ${f.a}`).join('\n\n')

export async function GET() {
  const parts: string[] = []

  parts.push(`# Legal Galaxy — full text

> Complete text of Legal Galaxy's DPDP Act 2023 guides, case studies, insights and FAQs, for AI assistants and search tools. Published by Businezexcellence StartX LLP. Summary index: ${SITE_URL}/llms.txt

Primary law: ${OFFICIAL_SOURCES.act.label} — ${OFFICIAL_SOURCES.act.url}
Rules: ${OFFICIAL_SOURCES.rules.label} — ${OFFICIAL_SOURCES.rules.url}
This content is for educational/informational purposes only and does not constitute legal advice.`)

  parts.push('# Frequently asked questions')
  parts.push(faqBlock('General DPDP Act FAQs', `${SITE_URL}/resources/faqs`, DPDPA_FAQS))
  parts.push(faqBlock('Rights of Data Principals', `${SITE_URL}/rights`, RIGHTS_FAQS))
  parts.push(faqBlock('Obligations of Data Fiduciaries', `${SITE_URL}/obligations`, OBLIGATIONS_FAQS))
  parts.push(faqBlock('Penalties', `${SITE_URL}/penalties`, PENALTIES_FAQS))
  parts.push(faqBlock('Key provisions', `${SITE_URL}/provisions`, PROVISIONS_FAQS))
  parts.push(faqBlock('Lawful processing', `${SITE_URL}/lawful-processing`, LAWFUL_FAQS))
  parts.push(faqBlock('Cross-border transfers', `${SITE_URL}/cross-border`, CROSS_BORDER_FAQS))

  parts.push('# Guides')
  for (const g of guidesData) {
    parts.push(
      `## ${g.title}\nURL: ${SITE_URL}/resources/guides/${g.slug}\nCategory: ${g.category} · Last updated: ${g.lastUpdated}\n\n` +
        (g.keyTakeaways?.length ? `Key takeaways:\n${g.keyTakeaways.map((k) => `- ${k}`).join('\n')}\n\n` : '') +
        toText(g.content),
    )
  }

  parts.push('# Case studies')
  for (const cs of caseStudiesData) {
    parts.push(
      `## ${cs.title}\nURL: ${SITE_URL}/resources/case-studies/${cs.slug}\nIndustry: ${cs.industry} · Date: ${cs.date}\n\n${cs.description}\n\n${toText(cs.content)}`,
    )
  }

  parts.push('# Insights')
  for (const i of insightsData) {
    parts.push(
      `## ${i.title}\nURL: ${SITE_URL}/insight/${i.slug}\nAuthor: ${i.author.trim()} · Date: ${i.date}${i.updated ? ` · Updated: ${i.updated}` : ''}\n\n${toText(i.content)}`,
    )
  }

  return new Response(parts.join('\n\n---\n\n') + '\n', {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
      'Cache-Control': 'public, max-age=86400, s-maxage=86400',
    },
  })
}
