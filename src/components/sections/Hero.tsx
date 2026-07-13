import Image from "next/image";
import { ReviewCarousel } from "@/components/sections/ReviewCarousel";
import { Button } from "@/components/ui/Button";
import { IconPattern } from "@/components/ui/BrandIcon";
import { GoogleReviewBadge } from "@/components/ui/GoogleReviewBadge";
import { ctaLabel, site } from "@/content/site";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-navy text-white">
      <div className="relative lg:grid lg:min-h-[min(88svh,48rem)] lg:grid-cols-2">
        <div className="relative flex flex-col justify-center px-5 pb-12 pt-28 md:px-10 md:pb-16 md:pt-32 lg:px-12 xl:pl-[max(2rem,calc((100vw-72rem)/2+2rem))]">
          <IconPattern />
          <div className="relative z-10 max-w-xl">
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-brand">
              Commercial Cleaning · Bay of Plenty
            </p>
            <h1 className="text-4xl font-bold leading-tight tracking-tight md:text-6xl">
              More than just cleaning.{" "}
              <span className="text-brand">We care about your business.</span>
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/80">
              {site.secondaryLine} Professional commercial cleaning for
              businesses that value consistently high standards across{" "}
              {site.region}.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center">
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
        </div>

        <div className="relative min-h-[min(56vw,22rem)] lg:min-h-0">
          <Image
            src="/images/hero.png"
            alt="Assured Cleaning Services team — commercial cleaners in Tauranga"
            fill
            priority
            className="object-cover object-[68%_18%]"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
          <div
            className="absolute inset-y-0 left-0 z-10 w-20 bg-gradient-to-r from-navy to-transparent sm:w-28 lg:w-36 xl:w-44"
            aria-hidden
          />
          <div
            className="absolute inset-x-0 top-0 z-10 h-24 bg-gradient-to-b from-navy/80 to-transparent lg:h-28"
            aria-hidden
          />
        </div>
      </div>

      <div className="relative border-t border-white/10 bg-navy-900/70">
        <div className="mx-auto flex max-w-6xl flex-col gap-5 px-5 py-5 md:flex-row md:items-center md:gap-8 md:px-8 md:py-6">
          <GoogleReviewBadge />
          <div
            className="hidden h-10 w-px shrink-0 bg-white/12 md:block"
            aria-hidden
          />
          <ReviewCarousel className="min-w-0 flex-1" />
        </div>
      </div>
    </section>
  );
}
