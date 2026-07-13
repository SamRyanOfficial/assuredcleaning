import { ctaLabel } from "@/content/site";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";

export function CtaBanner() {
  return (
    <section className="bg-navy py-10 text-white md:py-12">
      <Container>
        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between md:gap-10">
          <div className="max-w-lg">
            <h2 className="text-balance text-2xl font-bold tracking-tight md:text-3xl">
              Book a <span className="text-brand">free site visit</span>
            </h2>
            <p className="mt-2 text-sm leading-relaxed text-white/65 md:text-base">
              No obligation. We&apos;ll assess your premises and provide a
              tailored cleaning proposal.
            </p>
          </div>
          <div className="flex shrink-0 flex-col gap-3 sm:flex-row sm:items-center">
            <Button href="/book">{ctaLabel}</Button>
            <Button
              href="/contact#contact-form"
              variant="outline"
              className="border-white/25 text-white hover:border-white hover:bg-white hover:text-navy"
            >
              Contact us
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
