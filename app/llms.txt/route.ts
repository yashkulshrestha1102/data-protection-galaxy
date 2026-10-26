// app/llms.txt/route.ts
import { fullModulesData } from '@/data/modules'
import { insightsData } from '@/data/insights'
import { guidesData } from '@/data/guides'
import { countries } from '@/data/countries'

const SITE_URL = 'https://dpdpa.businezexcellence.com'

export async function GET() {
  const content = `# Legal Galaxy — Privacy & AI Governance

> India's dedicated DPDP Act 2023 knowledge platform. Free assessments, a 20-module DPDPA Master Course with 250+ lessons, comparisons of data protection laws across ${countries.length}+ countries, expert guides, insights, a compliance scorecard, and an AI governance document generator. Built by corporate lawyers and privacy specialists at Businezexcellence StartX LLP.

## Core DPDPA Topics

- [DPDPA 2023 Complete Guide](${SITE_URL}/resources/guides/dpdpa-2023-complete-guide): End-to-end guide to India's Digital Personal Data Protection Act 2023 and the DPDP Rules 2025. Covers scope, consent, notice, rights, obligations, SDF, breach, retention, cross-border transfers, and compliance roadmap.
- [Rights of Data Principals](${SITE_URL}/rights): The 6 fundamental rights under the DPDP Act — access, correction, erasure, grievance redressal, portability, nomination, and consent withdrawal.
- [Obligations of Data Fiduciaries](${SITE_URL}/obligations): The 8 core obligations every Data Fiduciary must comply with, including notice, consent, security safeguards, breach notification, and grievance redressal.
- [Penalties & Enforcement](${SITE_URL}/penalties): Full penalty schedule — up to ₹250 crore for a personal data breach, ₹200 crore for failure to notify, ₹150 crore for SDF non-compliance, ₹50 crore for general non-compliance.
- [Data Protection Board of India](${SITE_URL}/board): Composition, powers, adjudication process, penalties, and appeals to TDSAT.
- [Cross-Border Data Transfer](${SITE_URL}/cross-border): Section 16 blacklist approach, comparison with GDPR, sectoral localisation (RBI, IRDAI, SEBI), and real-world scenarios.
- [Lawful Processing](${SITE_URL}/lawful-processing): The two lawful bases — consent (Section 6) and legitimate uses (Section 7). Includes Consent Manager framework.
- [Key Provisions of DPDPA](${SITE_URL}/provisions): Chapter-wise overview of all 44 sections across 6 chapters.

## Free Tools

- [DPDPA Compliance Scorecard](${SITE_URL}/scorecard): 13-question free assessment with a detailed PDF readiness report. No signup required.
- [Document Generator](${SITE_URL}/generator): Generate privacy policies, consent notices, DPAs, retention policies, breach response templates, and AI governance documents instantly.
- [DPDPA Master Course](${SITE_URL}/certificate-course): Free 20-module certification course with 250+ lessons, quizzes, and a professional certificate.

## Country Data Protection Laws (${countries.length} jurisdictions)

${countries
  .map(
    (c) =>
      `- [${c.name} — ${c.lawName}](${SITE_URL}/country/${c.id}): Enforcement by ${c.authority}. Region: ${c.region}. Protection level: ${c.level}. ${c.overview.slice(0, 140)}...`
  )
  .join('\n')}

## In-Depth Guides

${guidesData
  .map(
    (g) =>
      `- [${g.title}](${SITE_URL}/resources/guides/${g.slug}): ${g.excerpt.slice(0, 180)}...`
  )
  .join('\n')}

## Latest Insights

${insightsData
  .slice(0, 20)
  .map(
    (i) =>
      `- [${i.title}](${SITE_URL}/insight/${i.slug}): ${i.excerpt.slice(0, 180)}...`
  )
  .join('\n')}

## DPDPA Master Course Modules (20 modules)

${fullModulesData
  .map(
    (m) =>
      `- [Module ${m.id}: ${m.title}](${SITE_URL}/certificate-course/${m.id}): ${m.description.slice(0, 150)}...`
  )
  .join('\n')}

## Author & Organization

- [About Legal Galaxy](${SITE_URL}/about): Privacy & AI Governance platform by Businezexcellence StartX LLP.
- [Author: Shilpi Kulshrestha](${SITE_URL}/authors/shilpi-kulshrestha): Founder & Corporate Law Expert with a decade of experience in data protection, company law, and regulatory compliance.
- [Contact](${SITE_URL}/contact): Talk to DPDP Act compliance experts.

## Optional

- [Case Studies](${SITE_URL}/resources/case-studies): Real-world data protection compliance case studies.
- [Guidelines & Circulars](${SITE_URL}/resources/guidelines): Official DPDP Act 2023 guidelines and circulars.
- [Forms & Templates](${SITE_URL}/resources/forms): Downloadable DPDPA compliance forms and templates.
- [FAQs](${SITE_URL}/resources/faqs): Frequently asked questions on India's DPDP Act 2023.
- [Global Privacy Map](${SITE_URL}/map): Interactive map comparing data protection laws across ${countries.length}+ countries.
`

  return new Response(content, {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
      'Cache-Control': 'public, max-age=86400, s-maxage=86400',
    },
  })
}
