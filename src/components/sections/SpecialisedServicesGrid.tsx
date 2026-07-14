import { specialisedServices } from "@/content/services";
import { AnimateOnScroll } from "@/components/ui/AnimateOnScroll";
import { Container } from "@/components/ui/Container";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { ServiceCard } from "@/components/ui/ServiceCard";
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
          <SectionTitle subtitle="Targeted cleans for handovers, construction and periodic resets.">
            Specialised Cleaning <span className="text-brand-600">Services</span>
          </SectionTitle>
        </AnimateOnScroll>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:gap-5">
          {specialisedServices.map((service, index) => (
            <AnimateOnScroll key={service.id} delay={index * 40}>
              <ServiceCard
                href="/services#specialised-cleaning"
                icon={service.icon}
                title={service.title}
                description={service.description}
              />
            </AnimateOnScroll>
          ))}
        </div>
      </Container>
    </section>
  );
}
