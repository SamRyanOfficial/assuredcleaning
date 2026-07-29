"use client";

import { useEffect, useState } from "react";
import { ReviewCarousel } from "@/components/sections/ReviewCarousel";
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
      className="h-2.5 w-2.5 shrink-0 text-brand"
      aria-hidden
    >
      <path
        fill="currentColor"
        d="M6.2 11.2 3.4 8.4l-.9.9 3.7 3.7 7.8-7.8-.9-.9-6.9 6.9z"
      />
    </svg>
  );
}

function HeroTrustBarSkeleton() {
  return (
    <div className="relative border-t border-white/10 bg-navy-900/70">
      <Container className="flex flex-col gap-4 py-4 md:flex-row md:items-center md:gap-6 md:py-5">
        <div className="inline-flex w-fit max-w-full flex-col items-stretch gap-1.5 rounded-lg border border-white/8 bg-white/[0.03] px-3 py-2">
          <div className="h-5 w-44 rounded bg-white/10" aria-hidden />
          <div className="flex w-full items-center justify-between gap-x-1.5 px-0.5">
            <div className="h-3 w-14 rounded bg-white/10" aria-hidden />
            <div className="h-3 w-14 rounded bg-white/10" aria-hidden />
            <div className="h-3 w-14 rounded bg-white/10" aria-hidden />
          </div>
        </div>
        <div
          className="hidden w-px shrink-0 self-stretch bg-white/10 md:block"
          aria-hidden
        />
        <div
          className="min-h-[3.5rem] min-w-0 flex-1 [mask-image:linear-gradient(to_right,transparent,black_6%,black_94%,transparent)]"
          aria-hidden
        />
      </Container>
    </div>
  );
}

export function HeroTrustBar() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <HeroTrustBarSkeleton />;
  }

  return (
    <div className="relative border-t border-white/10 bg-navy-900/70">
      <Container className="flex flex-col gap-4 py-4 md:flex-row md:items-center md:gap-6 md:py-5">
        <div className="inline-flex w-fit max-w-full flex-col items-stretch gap-1.5 rounded-lg border border-white/8 bg-white/[0.03] px-3 py-2">
          <GoogleReviewBadge
            variant="panel"
            className="w-full justify-center"
          />
          <ul className="flex w-full items-center justify-between gap-x-1.5 px-0.5">
            {trustIndicators.map((label) => (
              <li
                key={label}
                className="inline-flex shrink-0 items-center gap-1 text-[10px] font-medium whitespace-nowrap text-white/65"
              >
                <TrustCheckIcon />
                {label}
              </li>
            ))}
          </ul>
        </div>
        <div
          className="hidden w-px shrink-0 self-stretch bg-white/10 md:block"
          aria-hidden
        />
        <ReviewCarousel className="min-w-0 flex-1" />
      </Container>
    </div>
  );
}
