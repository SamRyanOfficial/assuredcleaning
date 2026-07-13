import { aggregateRating, reviews } from "@/content/reviews";
import { site } from "@/content/site";
import { AnimateOnScroll } from "@/components/ui/AnimateOnScroll";
import { Container } from "@/components/ui/Container";
import { StarRating } from "@/components/ui/StarRating";

export function ReviewsSection() {
  return (
    <section className="section-pad bg-white">
      <Container>
        <AnimateOnScroll>
          <div className="mb-10 flex flex-col gap-4 md:mb-12 md:flex-row md:items-end md:justify-between">
            <div>
              <h2 className="text-2xl font-bold tracking-tight text-navy md:text-3xl">
                Trusted by local businesses
              </h2>
              <p className="mt-2 text-sm text-slate-500 md:text-base">
                Real feedback from commercial clients across the Bay of Plenty.
              </p>
            </div>
            <a
              href={site.googleReviewsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex shrink-0 items-center gap-2 text-sm transition-opacity hover:opacity-70 focus-ring rounded"
            >
              <StarRating className="text-brand" size={13} />
              <span className="font-semibold text-navy">
                {aggregateRating.ratingValue.toFixed(1)}
              </span>
              <span className="text-slate-400">Google</span>
            </a>
          </div>
        </AnimateOnScroll>

        <div className="grid gap-8 md:grid-cols-2 md:gap-10">
          {reviews.map((review, index) => (
            <AnimateOnScroll key={review.author} delay={index * 80}>
              <figure>
                <blockquote className="text-lg leading-relaxed text-slate-700 md:text-xl md:leading-relaxed">
                  &ldquo;{review.text}&rdquo;
                </blockquote>
                <figcaption className="mt-5 text-sm font-semibold tracking-tight text-navy">
                  {review.author}
                </figcaption>
              </figure>
            </AnimateOnScroll>
          ))}
        </div>
      </Container>
    </section>
  );
}
