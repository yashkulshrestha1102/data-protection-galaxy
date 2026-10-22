import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { countries, getCountryById } from "@/data/countries";
import CountryClient from "./CountryClient";

const SITE_URL = "https://dpdpa.businezexcellence.com";

export function generateStaticParams() {
  return countries.map((c) => ({ id: c.id }));
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

  return {
    title: `${country.name} — ${country.lawName}`,
    description: country.overview.slice(0, 155),
    alternates: { canonical: `/country/${id}` },
    openGraph: {
      type: "website",
      title: `${country.name} — Data Protection Law`,
      description: country.overview.slice(0, 155),
      url: `/country/${id}`,
      images: ["/images/og-image.jpg"],
    },
    twitter: {
      card: "summary_large_image",
      title: `${country.name} — Data Protection Law`,
      description: country.overview.slice(0, 155),
      images: ["/images/og-image.jpg"],
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

  // Country Schema
  const countrySchema = {
    "@context": "https://schema.org",
    "@type": "Country",
    name: country.name,
    description: country.overview,
    url: `${SITE_URL}/country/${id}`,
    additionalProperty: country.topics.slice(0, 5).map((topic) => ({
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
      {
        "@type": "ListItem",
        position: 2,
        name: "Map",
        item: `${SITE_URL}/map`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: country.name,
        item: `${SITE_URL}/country/${id}`,
      },
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