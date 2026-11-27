// lib/og.tsx
// Shared design for per-page social / AI preview images (1200x630),
// used by the opengraph-image.tsx files.
import { ImageResponse } from "next/og";

export const OG_SIZE = { width: 1200, height: 630 };
export const OG_CONTENT_TYPE = "image/png";

export function renderOgImage({ eyebrow, title, footer }: { eyebrow: string; title: string; footer?: string }) {
  const shortTitle = title.length > 110 ? `${title.slice(0, title.lastIndexOf(" ", 107))}…` : title;
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "64px 72px",
          background: "linear-gradient(135deg, #05070d 0%, #0b1d24 55%, #0e3b3a 100%)",
          color: "#ffffff",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <div
            style={{
              display: "flex",
              width: 14,
              height: 14,
              borderRadius: 7,
              background: "#46d09b",
            }}
          />
          <div style={{ display: "flex", fontSize: 26, letterSpacing: 4, textTransform: "uppercase", color: "#9ee6d2" }}>
            {eyebrow}
          </div>
        </div>
        <div style={{ display: "flex", fontSize: shortTitle.length > 70 ? 54 : 64, fontWeight: 700, lineHeight: 1.15 }}>
          {shortTitle}
        </div>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", fontSize: 26, color: "#b7c4c0" }}>
          <div style={{ display: "flex", fontWeight: 700, color: "#ffffff" }}>Legal Galaxy</div>
          <div style={{ display: "flex" }}>{footer ?? "dpdpa.businezexcellence.com"}</div>
        </div>
      </div>
    ),
    OG_SIZE,
  );
}
