import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { countries, getCountryById } from "@/data/countries";
import CountryClient from "./CountryClient";

const SITE_URL = "https://dpdpa.businezexcellence.com";

// ✅ SAFE: Prevents build crash if data has undefined entries in future
export function generateStaticParams() {
  return (countries ?? [])
    .filter((c): c is NonNullable<typeof c> => Boolean(c?.id))
    .map((c) => ({ id: c.id }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  const { id } = await params;
  const country = getCountryById(id);

  if (!country) {
    return { title: "Country Not Found" };
  }

  const title = `${country.name} — ${country.lawName}`;
  const description = country.overview.slice(0, 155) + "...";

  return {
    title,
    description,
    alternates: { canonical: `/country/${id}` },
    openGraph: {
      type: "website",
      title,
      description,
      url: `${SITE_URL}/country/${id}`,
      siteName: "Legal Galaxy",
      images: [{ url: `${SITE_URL}/images/og-image.jpg`, width: 1200, height: 630 }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [`${SITE_URL}/images/og-image.jpg`],
    },
  };
}

export default async function CountryPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const country = getCountryById(id);

  if (!country) notFound();

  // Enhanced Country Schema
  const countrySchema = {
    "@context": "https://schema.org",
    "@type": "Country",
    name: country.name,
    description: country.overview,
    url: `${SITE_URL}/country/${id}`,
    additionalProperty: country.topics.map((topic) => ({
      "@type": "PropertyValue",
      name: topic.title,
      value: topic.status,
    })),
  };

  // Breadcrumb Schema
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
      { "@type": "ListItem", position: 2, name: "Map", item: `${SITE_URL}/map` },
      { "@type": "ListItem", position: 3, name: country.name, item: `${SITE_URL}/country/${id}` },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(countrySchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <CountryClient country={country} />
    </>
  );
}