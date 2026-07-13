import { aggregateRating, reviews } from "@/content/reviews";
import { site } from "@/content/site";

export function getLocalBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "CleaningService",
    additionalType: "https://schema.org/LocalBusiness",
    name: site.name,
    url: site.url,
    telephone: site.phoneIntl,
    email: site.email,
    image: `${site.url}/images/hero.png`,
    logo: `${site.url}/logos/Assured Logo - Primary Inverted.png`,
    founder: {
      "@type": "Person",
      name: site.owner,
    },
    areaServed: [
      ...site.serviceAreas.map((area) => ({
        "@type": "City",
        name: area,
      })),
      {
        "@type": "AdministrativeArea",
        name: site.region,
      },
    ],
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: aggregateRating.ratingValue,
      reviewCount: aggregateRating.reviewCount,
      bestRating: 5,
      worstRating: 1,
    },
    sameAs: [site.facebook, site.googleReviewsUrl],
  };
}

export function getReviewSchemas() {
  return reviews.map((review) => ({
    "@context": "https://schema.org",
    "@type": "Review",
    author: {
      "@type": "Person",
      name: review.author,
    },
    reviewRating: {
      "@type": "Rating",
      ratingValue: review.rating,
      bestRating: 5,
    },
    reviewBody: review.text,
    itemReviewed: {
      "@type": "CleaningService",
      name: site.name,
    },
  }));
}

export function getWebSiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: site.name,
    url: site.url,
  };
}

export function getBreadcrumbSchema(
  items: { name: string; path: string }[],
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `${site.url}${item.path}`,
    })),
  };
}
