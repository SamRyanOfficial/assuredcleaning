import Image from "next/image";
import { HeroTrustBar } from "@/components/sections/HeroTrustBar";
import { Button } from "@/components/ui/Button";
import { IconPattern } from "@/components/ui/BrandIcon";
import { Container } from "@/components/ui/Container";
import { ctaLabel, site } from "@/content/site";

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
                Across Tauranga &amp; the Bay of Plenty
              </span>
            </h1>
            <p className="mt-9 max-w-[35rem] text-base leading-[1.75] text-white/80 md:text-lg md:leading-[1.8]">
              Professional commercial cleaning for offices, retail stores,
              hospitality venues, wellness centres and organisations throughout
              Tauranga and the wider Bay of Plenty.
            </p>
            <p className="mt-5 font-script text-xl text-brand md:text-2xl">
              {site.tagline}
            </p>

            <div className="mt-10 flex flex-col gap-3 pb-2 sm:flex-row sm:items-center">
              <Button
                href="/book"
                aria-label="Book a free site visit for commercial cleaning in Tauranga"
              >
                {ctaLabel}
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

      <HeroTrustBar />
    </section>
  );
}
