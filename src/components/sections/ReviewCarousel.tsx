"use client";

import { useEffect, useRef, useState } from "react";
import { reviews } from "@/content/reviews";
import { cn } from "@/lib/utils";

interface ReviewCarouselProps {
  className?: string;
}

export function ReviewCarousel({ className }: ReviewCarouselProps) {
  const trackRef = useRef<HTMLDivElement>(null);
  const [paused, setPaused] = useState(false);
  const items = [...reviews, ...reviews];

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    if (prefersReduced) return;

    let frame = 0;
    let offset = 0;
    const speed = 0.4;

    const step = () => {
      if (!paused && track) {
        offset += speed;
        const half = track.scrollWidth / 2;
        if (offset >= half) offset = 0;
        track.style.transform = `translateX(-${offset}px)`;
      }
      frame = requestAnimationFrame(step);
    };

    frame = requestAnimationFrame(step);
    return () => cancelAnimationFrame(frame);
  }, [paused]);

  return (
    <div
      className={cn(
        "relative min-w-0 [mask-image:linear-gradient(to_right,transparent,black_6%,black_94%,transparent)]",
        className,
      )}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      aria-label="Client reviews"
      role="region"
    >
      <div
        ref={trackRef}
        className="flex w-max items-center gap-12 motion-reduce:flex-wrap motion-reduce:gap-6"
      >
        {items.map((review, index) => (
          <figure
            key={`${review.author}-${index}`}
            className="flex w-[min(72vw,28rem)] shrink-0 flex-col gap-1.5 sm:w-[26rem]"
          >
            <blockquote className="line-clamp-2 text-sm leading-relaxed text-white/75">
              &ldquo;{review.text}&rdquo;
            </blockquote>
            <figcaption className="text-xs font-semibold tracking-tight text-brand">
              {review.author}
            </figcaption>
          </figure>
        ))}
      </div>
    </div>
  );
}
