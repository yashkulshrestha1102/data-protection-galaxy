// Per-page preview image for social sharing and AI answers.
import { getCountryById } from "@/data/countries";
import { renderOgImage, OG_SIZE, OG_CONTENT_TYPE } from "@/lib/og";

export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;
export const alt = "Legal Galaxy";

export default async function Image({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const item = getCountryById(id);
  return renderOgImage({
    eyebrow: item ? `Data protection law · ${item.region}` : "Legal Galaxy",
    title: item ? `${item.name}: ${item.lawName}` : "Privacy & AI Governance",
    footer: item ? `Regulator: ${item.authority}` : undefined,
  });
}
