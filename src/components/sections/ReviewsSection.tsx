import { aggregateRating, reviews } from "@/content/reviews";
import { site } from "@/content/site";
import { AnimateOnScroll } from "@/components/ui/AnimateOnScroll";
import { Badge } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function ReviewsSection() {
  return (
    <section className="bg-white py-20">
      <Container>
        <AnimateOnScroll>
          <div className="mb-12 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <SectionHeading
              kicker="What clients say"
              title="Trusted by local businesses"
              description="Real feedback from commercial clients across the Bay of Plenty."
            />
            <a
              href={site.googleReviewsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="shrink-0 focus-ring rounded-full"
            >
              <Badge className="px-4 py-2 text-sm">
                <span className="text-brand" aria-hidden>
                  ★★★★★
                </span>
                {aggregateRating.ratingValue} · Google Reviews
              </Badge>
            </a>
          </div>
        </AnimateOnScroll>

        <div className="grid gap-6 md:grid-cols-2">
          {reviews.map((review, index) => (
            <AnimateOnScroll key={review.author} delay={index * 100}>
              <Card hover={false} className="h-full">
                <div className="mb-4 flex items-center gap-2">
                  <span className="text-brand" aria-hidden>
                    ★★★★★
                  </span>
                  <span className="text-xs font-medium text-slate-500">
                    {review.source}
                  </span>
                </div>
                <blockquote className="text-slate-600 leading-relaxed">
                  &ldquo;{review.text}&rdquo;
                </blockquote>
                <p className="mt-4 font-semibold text-navy">{review.author}</p>
              </Card>
            </AnimateOnScroll>
          ))}
        </div>
      </Container>
    </section>
  );
}
