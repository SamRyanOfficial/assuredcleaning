"use client";

import dynamic from "next/dynamic";

const ReviewCarousel = dynamic(
  () =>
    import("@/components/sections/ReviewCarousel").then(
      (mod) => mod.ReviewCarousel,
    ),
  {
    ssr: false,
    loading: () => (
      <div
        className="relative min-h-[3.5rem] min-w-0 flex-1 [mask-image:linear-gradient(to_right,transparent,black_6%,black_94%,transparent)]"
        aria-hidden
      />
    ),
  },
);

interface HeroReviewCarouselProps {
  className?: string;
}

export function HeroReviewCarousel({ className }: HeroReviewCarouselProps) {
  return <ReviewCarousel className={className} />;
}
