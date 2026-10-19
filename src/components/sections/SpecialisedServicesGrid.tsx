import { SpecialisedServiceCards } from "@/components/sections/SpecialisedServiceCards";
import { AnimateOnScroll } from "@/components/ui/AnimateOnScroll";
import { Container } from "@/components/ui/Container";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { cn } from "@/lib/utils";

interface SpecialisedServicesGridProps {
  className?: string;
}

export function SpecialisedServicesGrid({
  className = "section-pad bg-navy-50",
}: SpecialisedServicesGridProps) {
  return (
    <section id="specialised-cleaning" className={cn(className)}>
      <Container>
        <AnimateOnScroll>
          <SectionTitle subtitle="Handovers, listings, deep cleans, construction and more — when you need more than routine cleaning.">
            Specialised Cleaning <span className="text-brand-600">Services</span>
          </SectionTitle>
        </AnimateOnScroll>

        <SpecialisedServiceCards href="/services#specialised-cleaning" />
      </Container>
    </section>
  );
}
