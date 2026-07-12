import type { Metadata } from "next";
import { site } from "@/content/site";

interface PageMetadataOptions {
  title: string;
  description: string;
  path?: string;
}

export function createPageMetadata({
  title,
  description,
  path = "",
}: PageMetadataOptions): Metadata {
  const url = `${site.url}${path}`;

  return {
    title,
    description,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title,
      description,
      url,
      siteName: site.name,
      locale: "en_NZ",
      type: "website",
      images: [
        {
          url: `${site.url}/og/default.png`,
          width: 1200,
          height: 630,
          alt: `${site.name} — ${site.tagline}`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [`${site.url}/og/default.png`],
    },
  };
}
