import { ctaLabel, site } from "@/content/site";
import { IconPattern } from "@/components/ui/BrandIcon";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";

export function CtaBanner() {
  return (
    <section className="relative overflow-hidden bg-navy py-20 text-white">
      <IconPattern />
      <Container className="relative text-center">
        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-brand">
          Ready to experience the difference?
        </p>
        <h2 className="text-3xl font-bold md:text-4xl">
          More Than a Clean.
          <br />
          Experience the Assured Difference.
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-lg text-white/80">
          Book a free, no-obligation site visit and receive a tailored cleaning
          proposal for your premises.
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Button href="/book">{ctaLabel}</Button>
          <Button
            href={`tel:${site.phoneIntl}`}
            variant="outline"
            className="border-white text-white hover:bg-white hover:text-navy"
            external
          >
            {site.phone}
          </Button>
        </div>
      </Container>
    </section>
  );
}
