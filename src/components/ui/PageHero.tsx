import Image from "next/image";
import { type ReactNode } from "react";
import { Container } from "@/components/ui/Container";

interface PageHeroProps {
  kicker?: string;
  title: ReactNode;
  description?: string;
}

export function PageHero({ kicker, title, description }: PageHeroProps) {
  return (
    <section className="relative overflow-hidden border-b border-navy/6 bg-gradient-to-br from-navy-50 via-white to-brand-50/50 pb-10 pt-24 md:pb-12 md:pt-28">
      <div
        className="pointer-events-none absolute inset-0 icon-pattern-navy opacity-[0.035]"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -right-20 -top-24 h-72 w-72 rounded-full bg-brand/10 blur-3xl"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute bottom-0 left-1/3 h-56 w-56 rounded-full bg-navy/5 blur-3xl"
        aria-hidden
      />

      <Container className="relative">
        <div className="grid items-center gap-6 lg:grid-cols-[minmax(0,1fr)_auto] lg:gap-8">
          <div className="max-w-2xl">
            {kicker && (
              <p className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-brand">
                {kicker}
              </p>
            )}
            <div className="mb-3 h-1 w-10 rounded-full bg-brand" aria-hidden />
            <h1 className="text-balance text-3xl font-bold leading-[1.08] tracking-tight text-navy md:text-4xl">
              {title}
            </h1>
            {description && (
              <p className="mt-3 max-w-xl text-sm leading-relaxed text-slate-500 md:text-base">
                {description}
              </p>
            )}
          </div>

          <div
            className="pointer-events-none hidden shrink-0 opacity-[0.12] lg:block"
            aria-hidden
          >
            <Image
              src="/logos/Assured Logo - Icon Green.png"
              alt=""
              width={96}
              height={96}
              className="h-20 w-20 xl:h-24 xl:w-24"
            />
          </div>
        </div>
      </Container>

      <div
        className="absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-brand via-brand-600 to-transparent"
        aria-hidden
      />
    </section>
  );
}
