import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { IconPattern } from "@/components/ui/BrandIcon";
import { aggregateRating } from "@/content/reviews";
import { ctaLabel, site } from "@/content/site";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-navy text-white">
      <IconPattern />
      <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-5 py-16 md:px-8 md:py-24 lg:grid-cols-2">
        <div>
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-brand">
            Commercial Cleaning · Bay of Plenty
          </p>
          <h1 className="text-4xl font-bold leading-tight tracking-tight md:text-6xl">
            More than just cleaning.{" "}
            <span className="text-brand">We care about your business.</span>
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/80">
            {site.secondaryLine} Professional commercial cleaning for businesses
            that value consistently high standards across {site.region}.
          </p>

          <div className="mt-4 flex items-center gap-2 text-sm">
            <span className="text-brand" aria-hidden>
              ★★★★★
            </span>
            <span className="font-semibold">{aggregateRating.ratingValue}</span>
            <a
              href={site.googleReviewsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/80 underline-offset-2 hover:text-brand hover:underline focus-ring rounded"
            >
              Google Reviews
            </a>
          </div>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center">
            <Button href="/book">{ctaLabel}</Button>
            <Button
              href={`tel:${site.phoneIntl}`}
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-navy"
              external
            >
              {site.phone}
            </Button>
          </div>
        </div>

        <div className="relative">
          <div className="overflow-hidden rounded-3xl shadow-2xl ring-1 ring-white/10">
            <Image
              src="/images/team.jpg"
              alt="The Assured Cleaning Services team in branded uniforms — commercial cleaners in Tauranga"
              width={800}
              height={600}
              className="aspect-[4/3] w-full object-cover"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
