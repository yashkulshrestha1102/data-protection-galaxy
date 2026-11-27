// Per-page preview image for social sharing and AI answers.
import { getInsightBySlug } from "@/data/insights";
import { renderOgImage, OG_SIZE, OG_CONTENT_TYPE } from "@/lib/og";

export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;
export const alt = "Legal Galaxy";

export default async function Image({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const item = getInsightBySlug(slug);
  return renderOgImage({
    eyebrow: item ? item.category : "Legal Galaxy",
    title: item ? item.title : "Privacy & AI Governance",
    footer: item ? `${item.author.trim()} · ${item.date}` : undefined,
  });
}
