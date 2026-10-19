import Link from "next/link";
import { premisesTypes } from "@/content/services";
import { SpecialisedServiceCards } from "@/components/sections/SpecialisedServiceCards";
import { AnimateOnScroll } from "@/components/ui/AnimateOnScroll";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { ServiceCard } from "@/components/ui/ServiceCard";

const featuredPremises = premisesTypes.filter(
  (premises) => premises.id !== "commercial",
);

export function ServicesGrid() {
  return (
    <section className="section-pad bg-white">
      <Container>
        <AnimateOnScroll>
          <div className="mb-10 flex flex-col gap-6 md:mb-12 md:flex-row md:items-end md:justify-between">
            <SectionTitle
              subtitle="Office cleaners, commercial cleaners and hospitality cleaners — tailored to your premises across the Bay of Plenty."
            >
              Premises we <span className="text-brand-600">clean</span>
            </SectionTitle>
            <Button href="/services" variant="secondary" className="shrink-0">
              All services
            </Button>
          </div>
        </AnimateOnScroll>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-5">
          {featuredPremises.map((premises, index) => (
            <AnimateOnScroll key={premises.id} delay={index * 40}>
              <ServiceCard
                href="/services"
                icon={premises.icon}
                title={premises.title}
                description={premises.description}
              />
            </AnimateOnScroll>
          ))}
        </div>

        <div
          id="specialised-cleaning"
          className="mt-16 border-t border-navy/8 pt-16 md:mt-20 md:pt-20"
        >
          <AnimateOnScroll>
            <SectionTitle subtitle="Handovers, listings, deep cleans, construction and more — when you need more than routine cleaning.">
              Specialised Cleaning{" "}
              <span className="text-brand-600">Services</span>
            </SectionTitle>
          </AnimateOnScroll>

          <SpecialisedServiceCards />
        </div>
      </Container>
    </section>
  );
}
