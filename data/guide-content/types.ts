// data/guide-content/types.ts
// Shape of the long-form content that powers each guide page.

export interface GuideSource {
  /** Short title of the document or page */
  title: string;
  /** Who published it (e.g. "MeitY, Government of India") */
  publisher: string;
  url: string;
}

export interface GuideFaq {
  q: string;
  a: string;
}

export interface GuideRelatedLink {
  title: string;
  href: string;
  description: string;
}

export interface GuideContent {
  /** Short (≤155 chars) description for search results; falls back to excerpt. */
  metaDescription?: string;
  excerpt: string;
  content: string;
  readTime: string;
  lastUpdated: string;
  tableOfContents: { id: string; title: string }[];
  keyTakeaways: string[];
  sources: GuideSource[];
  faqs: GuideFaq[];
  relatedLinks: GuideRelatedLink[];
}
