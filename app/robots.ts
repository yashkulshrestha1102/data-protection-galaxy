// app/robots.ts
import type { MetadataRoute } from 'next'

const DISALLOW = ['/api/', '/admin/']
const AI_BOTS = [
  'GPTBot',
  'ChatGPT-User',
  'OAI-SearchBot',
  'ClaudeBot',
  'Claude-Web',
  'PerplexityBot',
  'Google-Extended',
  'Applebot-Extended',
  'CCBot',
  'Bytespider',
  'Amazonbot',
  'meta-externalagent',
  'YouBot',
  'cohere-ai',
  'anthropic-ai',
]

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      // Default rule — applies to all crawlers not listed below
      {
        userAgent: '*',
        allow: '/',
        disallow: DISALLOW,
      },
      // AI bots — explicit allow with same disallow rules
      ...AI_BOTS.map((bot) => ({
        userAgent: bot,
        allow: '/',
        disallow: DISALLOW,
      })),
    ],
    sitemap: 'https://dpdpa.businezexcellence.com/sitemap.xml',
  }
}
