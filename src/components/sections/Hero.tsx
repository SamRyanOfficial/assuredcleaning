import Image from "next/image";
import { ReviewCarousel } from "@/components/sections/ReviewCarousel";
import { Button } from "@/components/ui/Button";
import { IconPattern } from "@/components/ui/BrandIcon";
import { Container } from "@/components/ui/Container";
import { GoogleReviewBadge } from "@/components/ui/GoogleReviewBadge";
import { ctaLabel, site } from "@/content/site";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-navy text-white">
      <IconPattern className="opacity-[0.04]" />

      <Container className="relative pt-24 pb-10 md:pt-28 md:pb-12 lg:pt-32 lg:pb-14">
        <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-10 xl:gap-14">
          <div className="relative z-10 max-w-xl lg:max-w-none">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-brand">
              Commercial Cleaning · Bay of Plenty
            </p>
            <h1 className="text-4xl font-bold leading-[1.08] tracking-tight md:text-5xl lg:text-[3.25rem]">
              More than just cleaning.{" "}
              <span className="text-brand">We care about your business.</span>
            </h1>
            <p className="mt-5 text-base leading-relaxed text-white/80 md:text-lg">
              {site.secondaryLine} Professional commercial cleaning for
              businesses that value consistently high standards across{" "}
              {site.region}.
            </p>

            <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:items-center">
              <Button href="/book">{ctaLabel}</Button>
              <Button
                href="/contact#contact-form"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-navy"
              >
                Contact us
              </Button>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-md lg:mx-0 lg:max-w-none">
            <div className="relative aspect-[5/4] overflow-hidden rounded-[var(--radius-media)] shadow-[var(--shadow-lift)] ring-1 ring-white/12 sm:aspect-[4/3] lg:aspect-[5/4]">
              <Image
                src="/images/hero.png"
                alt="Assured Cleaning Services team — commercial cleaners in Tauranga"
                fill
                priority
                className="object-cover object-[68%_18%]"
                sizes="(max-width: 1024px) 90vw, 540px"
              />
            </div>
          </div>
        </div>
      </Container>

      <div className="relative border-t border-white/10 bg-navy-900/70">
        <Container className="flex flex-col gap-5 py-5 md:flex-row md:items-center md:gap-8 md:py-6">
          <GoogleReviewBadge />
          <div
            className="hidden h-10 w-px shrink-0 bg-white/12 md:block"
            aria-hidden
          />
          <ReviewCarousel className="min-w-0 flex-1" />
        </Container>
      </div>
    </section>
  );
}
