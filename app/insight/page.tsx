import { Suspense } from "react";
import { insightsData } from "@/data/insights";
import { JsonLd } from "@/components/seo/JsonLd";
import InsightClient from "./InsightClient";

const SITE_URL = "https://dpdpa.businezexcellence.com";

export default function InsightPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Data Protection Insights",
    description:
      "In-depth analysis on India's DPDP Act 2023, GDPR and global privacy law.",
    url: `${SITE_URL}/insight`,
    isPartOf: { "@type": "WebSite", name: "Legal Galaxy", url: SITE_URL },
    publisher: { "@type": "Organization", name: "Legal Galaxy", url: SITE_URL },
    mainEntity: {
      "@type": "ItemList",
      numberOfItems: insightsData.length,
      itemListElement: insightsData.map((insight, i) => ({
        "@type": "ListItem",
        position: i + 1,
        url: `${SITE_URL}/insight/${insight.slug}`,
        name: insight.title,
      })),
    },
  };

  return (
    <>
      <JsonLd data={schema} />
      <Suspense fallback={null}>
        <InsightClient />
      </Suspense>
    </>
  );
}