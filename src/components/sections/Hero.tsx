import Image from "next/image";
import { ReviewCarousel } from "@/components/sections/ReviewCarousel";
import { Button } from "@/components/ui/Button";
import { IconPattern } from "@/components/ui/BrandIcon";
import { Container } from "@/components/ui/Container";
import { GoogleReviewBadge } from "@/components/ui/GoogleReviewBadge";

const trustIndicators = [
  "Family Owned",
  "Fully Insured",
  "5-Star Rated",
] as const;

function TrustCheckIcon() {
  return (
    <svg
      viewBox="0 0 16 16"
      className="h-3.5 w-3.5 shrink-0 text-brand"
      aria-hidden
    >
      <path
        fill="currentColor"
        d="M6.2 11.2 3.4 8.4l-.9.9 3.7 3.7 7.8-7.8-.9-.9-6.9 6.9z"
      />
    </svg>
  );
}

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-navy text-white">
      <IconPattern className="opacity-[0.04]" />

      <Container className="relative pt-24 pb-10 md:pt-28 md:pb-12 lg:pt-32 lg:pb-14">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-12 xl:gap-16">
          <div className="relative z-10 max-w-[35rem]">
            <p className="mb-7 text-xs font-semibold uppercase tracking-[0.2em] text-brand">
              Commercial Cleaning • Tauranga
            </p>
            <h1 className="text-4xl font-bold leading-[1.08] tracking-tight md:text-5xl lg:text-[3.25rem]">
              Commercial Cleaning
              <br />
              <span className="text-[0.9em] font-bold text-brand/85">
                Across Tauranga
              </span>
            </h1>
            <div className="mt-9 max-w-[35rem] space-y-5 text-base leading-[1.75] text-white/80 md:text-lg md:leading-[1.8]">
              <p>
                Professional commercial cleaning for offices, retail stores,
                hospitality venues and industrial premises throughout Tauranga
                and the wider Bay of Plenty.
              </p>
              <p>
                Experienced commercial cleaners delivering reliable, fully
                insured cleaning tailored around your business.
              </p>
            </div>

            <ul className="mt-12 flex flex-wrap items-center gap-x-6 gap-y-2 sm:flex-nowrap">
              {trustIndicators.map((label) => (
                <li
                  key={label}
                  className="inline-flex shrink-0 items-center gap-1.5 text-xs font-medium text-white/75 md:text-sm"
                >
                  <TrustCheckIcon />
                  {label}
                </li>
              ))}
            </ul>

            <div className="mt-14 flex flex-col gap-3 pb-2 sm:flex-row sm:items-center">
              <Button
                href="/book"
                aria-label="Book a free site assessment for commercial cleaning in Tauranga"
              >
                Book a Free Site Assessment
              </Button>
              <Button
                href="/contact#contact-form"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-navy"
                aria-label="Contact Assured Cleaning about commercial cleaning in Tauranga"
              >
                Contact Us
              </Button>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-md lg:mx-0 lg:max-w-none">
            <div className="relative aspect-[5/4] overflow-hidden rounded-[var(--radius-media)] shadow-[var(--shadow-lift)] ring-1 ring-white/12 sm:aspect-[4/3] lg:aspect-[5/4]">
              <Image
                src="/images/hero.png"
                alt="The Assured Cleaning commercial cleaning team serving Tauranga and the Bay of Plenty."
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
            className="hidden h-6 w-px shrink-0 bg-white/10 md:block"
            aria-hidden
          />
          <ReviewCarousel className="min-w-0 flex-1" />
        </Container>
      </div>
    </section>
  );
}
