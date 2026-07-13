import Link from "next/link";
import { premisesTypes } from "@/content/services";
import { AnimateOnScroll } from "@/components/ui/AnimateOnScroll";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { PremisesIcon } from "@/components/ui/PremisesIcon";
import { SectionTitle } from "@/components/ui/SectionTitle";

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
              subtitle="Offices, retail, hospitality and more — tailored to your premises."
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
              <Link
                href="/services"
                className="group block h-full rounded-[var(--radius-card)] border border-navy/8 bg-white p-5 transition-all duration-300 hover:-translate-y-1 hover:border-brand/35 hover:shadow-[var(--shadow-soft)] focus-ring-light md:p-6"
              >
                <div className="mb-4 flex items-center gap-3.5">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-brand-50 text-brand-600 transition-all duration-300 group-hover:scale-105 group-hover:bg-brand group-hover:text-navy">
                    <PremisesIcon type={premises.icon} />
                  </span>
                  <h3 className="text-base font-semibold tracking-tight text-navy transition-colors group-hover:text-brand-600 md:text-lg">
                    {premises.title}
                  </h3>
                </div>
                <p className="text-sm leading-relaxed text-slate-500">
                  {premises.description}
                </p>
              </Link>
            </AnimateOnScroll>
          ))}
        </div>
      </Container>
    </section>
  );
}
