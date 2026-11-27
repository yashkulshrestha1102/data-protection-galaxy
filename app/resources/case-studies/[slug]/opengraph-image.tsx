// Per-page preview image for social sharing and AI answers.
import { getCaseStudyBySlug } from "@/data/case-studies";
import { renderOgImage, OG_SIZE, OG_CONTENT_TYPE } from "@/lib/og";

export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;
export const alt = "Legal Galaxy";

export default async function Image({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const item = getCaseStudyBySlug(slug);
  return renderOgImage({
    eyebrow: item ? `Case study · ${item.industry}` : "Legal Galaxy",
    title: item ? item.title : "Privacy & AI Governance",
    footer: item ? item.date : undefined,
  });
}
