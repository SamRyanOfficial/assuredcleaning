import { premisesTypes } from "@/content/services";
import { AnimateOnScroll } from "@/components/ui/AnimateOnScroll";
import { BrandIcon } from "@/components/ui/BrandIcon";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function ServicesGrid() {
  return (
    <section className="bg-navy-50 py-20">
      <Container>
        <AnimateOnScroll>
          <SectionHeading
            kicker="What we clean"
            title="Commercial premises across the Bay of Plenty"
            description="Whatever your premises, our goal is the same: leave your business looking its absolute best."
            className="mb-12"
          />
        </AnimateOnScroll>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {premisesTypes.map((premises, index) => (
            <AnimateOnScroll key={premises.id} delay={index * 80}>
              <Card>
                <div className="mb-4 flex items-center gap-3">
                  <BrandIcon variant="green" />
                  <h3 className="text-lg font-semibold text-navy">
                    {premises.title}
                  </h3>
                </div>
                <p className="text-sm leading-relaxed text-slate-600">
                  {premises.description}
                </p>
              </Card>
            </AnimateOnScroll>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button href="/services" variant="secondary">
            View all services
          </Button>
        </div>
      </Container>
    </section>
  );
}
