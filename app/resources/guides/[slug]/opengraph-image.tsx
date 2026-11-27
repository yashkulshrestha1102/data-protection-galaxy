// Per-page preview image for social sharing and AI answers.
import { getGuideBySlug } from "@/data/guides";
import { renderOgImage, OG_SIZE, OG_CONTENT_TYPE } from "@/lib/og";

export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;
export const alt = "Legal Galaxy";

export default async function Image({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const item = getGuideBySlug(slug);
  return renderOgImage({
    eyebrow: item ? `Guide · ${item.category}` : "Legal Galaxy",
    title: item ? item.title : "Privacy & AI Governance",
    footer: item ? `Updated ${item.lastUpdated} · ${item.readTime}` : undefined,
  });
}
