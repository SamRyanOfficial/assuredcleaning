import Image from "next/image";
import {
  premisesBeforeAfterMap,
  premisesTypes,
  serviceExpectations,
} from "@/content/services";
import { site } from "@/content/site";
import { CtaBanner } from "@/components/sections/CtaBanner";
import { SpecialisedServicesGrid } from "@/components/sections/SpecialisedServicesGrid";
import { AnimateOnScroll } from "@/components/ui/AnimateOnScroll";
import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/ui/PageHero";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { createPageMetadata } from "@/lib/metadata";
import { getBreadcrumbSchema } from "@/lib/schema";

export const metadata = createPageMetadata({
  title: "Services",
  description:
    "Commercial cleaning for offices, retail, hospitality, medical practices, gyms and more in Tauranga, Mt Maunganui, Papamoa and Te Puke. Quote-based — book a free site visit.",
  path: "/services",
});

export default function ServicesPage() {
  const breadcrumbs = getBreadcrumbSchema([
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbs) }}
      />

      <PageHero
        kicker="Our services"
        title={
          <>
            Services tailored to your{" "}
            <span className="text-brand-600">premises</span>
          </>
        }
        description={site.positioning}
      />

      <section className="section-pad bg-white">
        <Container>
          <div className="space-y-16 md:space-y-20">
            {premisesTypes.map((premises, index) => {
              const beforeAfter =
                premises.id in premisesBeforeAfterMap
                  ? premisesBeforeAfterMap[
                      premises.id as keyof typeof premisesBeforeAfterMap
                    ]
                  : null;

              return (
                <AnimateOnScroll key={premises.id} delay={index * 40}>
                  <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-12">
                    <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                      <h2 className="text-2xl font-bold tracking-tight text-navy md:text-3xl">
                        {premises.title}
                      </h2>
                      <p className="mt-4 max-w-lg text-base leading-relaxed text-slate-600 md:text-lg">
                        {premises.detail}
                      </p>
                    </div>
                    {beforeAfter && (
                      <div
                        className={`grid grid-cols-2 gap-3 ${index % 2 === 1 ? "lg:order-1" : ""}`}
                      >
                        <div className="overflow-hidden rounded-[var(--radius-card)] shadow-[var(--shadow-soft)] ring-1 ring-navy/8">
                          <Image
                            src={beforeAfter.before}
                            alt={`${beforeAfter.alt} — before`}
                            width={400}
                            height={300}
                            className="aspect-[4/3] w-full object-cover"
                            style={
                              "beforeObjectPosition" in beforeAfter
                                ? {
                                    objectPosition:
                                      beforeAfter.beforeObjectPosition,
                                  }
                                : undefined
                            }
                          />
                        </div>
                        <div className="overflow-hidden rounded-[var(--radius-card)] shadow-[var(--shadow-soft)] ring-1 ring-navy/8">
                          <Image
                            src={beforeAfter.after}
                            alt={`${beforeAfter.alt} — after`}
                            width={400}
                            height={300}
                            className="aspect-[4/3] w-full object-cover"
                            style={
                              "afterZoom" in beforeAfter
                                ? { transform: `scale(${beforeAfter.afterZoom})` }
                                : undefined
                            }
                          />
                        </div>
                      </div>
                    )}
                  </div>
                </AnimateOnScroll>
              );
            })}
          </div>
        </Container>
      </section>

      <SpecialisedServicesGrid />

      <section className="section-pad bg-white">
        <Container>
          <SectionTitle subtitle="Reliable service you can count on, every visit.">
            What you can <span className="text-brand-600">expect</span>
          </SectionTitle>
          <ul className="mt-10 grid gap-x-10 gap-y-2.5 sm:grid-cols-2 lg:gap-x-14">
            {serviceExpectations.map((item) => (
              <li
                key={item}
                className="flex gap-2.5 text-sm leading-snug text-slate-600 md:text-base"
              >
                <span
                  className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand"
                  aria-hidden
                />
                <span className="font-semibold text-navy">{item}</span>
              </li>
            ))}
          </ul>
          <p className="mt-10 max-w-xl text-sm leading-relaxed text-slate-600 md:text-base">
            All services are quote-based following a free site visit. We assess
            your premises, understand your needs and provide a tailored
            proposal.
          </p>
        </Container>
      </section>

      <CtaBanner />
    </>
  );
}
