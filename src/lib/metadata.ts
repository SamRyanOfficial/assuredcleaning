import type { Metadata } from "next";
import { site } from "@/content/site";

const ogImage = {
  url: "/og/default.png",
  width: 1200,
  height: 630,
  alt: `${site.name} — commercial cleaning team in Tauranga`,
} as const;

export const defaultOpenGraph: Metadata["openGraph"] = {
  title: site.shareTitle,
  description: site.shareDescription,
  siteName: site.name,
  locale: "en_NZ",
  type: "website",
  images: [ogImage],
};

export const defaultTwitter: Metadata["twitter"] = {
  card: "summary_large_image",
  title: site.shareTitle,
  description: site.shareDescription,
  images: [ogImage.url],
};

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
      ...defaultOpenGraph,
      title,
      description,
      url,
    },
    twitter: {
      ...defaultTwitter,
      title,
      description,
    },
  };
}
