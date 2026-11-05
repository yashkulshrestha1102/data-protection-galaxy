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
- [Rights of Data Principals](${SITE_URL}/rights): The rights of Data Principals under Chapter III of the DPDP Act: access to information (s.11), correction and erasure (s.12), grievance redressal (s.13) and nomination (s.14), plus consent withdrawal under s.6(4). The Act does not provide a right to data portability.
- [Obligations of Data Fiduciaries](${SITE_URL}/obligations): The 8 core obligations every Data Fiduciary must comply with, including notice, consent, security safeguards, breach notification, and grievance redressal.
- [Penalties & Enforcement](${SITE_URL}/penalties): Penalty schedule — up to ₹250 crore for failure to take reasonable security safeguards to prevent a personal data breach, ₹200 crore for failure to notify a breach or breach of children's data obligations, ₹150 crore for breach of Significant Data Fiduciary obligations, ₹50 crore for other breaches, and ₹10,000 for breach of a Data Principal's duties.
- [Data Protection Board of India](${SITE_URL}/board): Composition, powers, adjudication process, penalties, and appeals to TDSAT.
- [Cross-Border Data Transfer](${SITE_URL}/cross-border): Section 16 blacklist approach, comparison with GDPR, sectoral localisation (RBI, IRDAI, SEBI), and real-world scenarios.
- [Lawful Processing](${SITE_URL}/lawful-processing): The two lawful bases — consent (Section 6) and legitimate uses (Section 7). Includes Consent Manager framework.
- [Key Provisions of DPDPA](${SITE_URL}/provisions): Chapter-wise overview of the 44 sections of the DPDP Act, 2023.

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
