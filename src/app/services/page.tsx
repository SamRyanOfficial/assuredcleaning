import Image from "next/image";
import {
  beforeAfterPairs,
  premisesTypes,
  serviceExpectations,
} from "@/content/services";
import { site } from "@/content/site";
import { CtaBanner } from "@/components/sections/CtaBanner";
import { AnimateOnScroll } from "@/components/ui/AnimateOnScroll";
import { BrandIcon } from "@/components/ui/BrandIcon";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
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

      <section className="bg-navy-50 py-16">
        <Container>
          <SectionHeading
            kicker="Commercial cleaning"
            title="Services tailored to your premises"
            description={site.positioning}
          />
        </Container>
      </section>

      <section className="py-20">
        <Container>
          <div className="space-y-16">
            {premisesTypes.map((premises, index) => (
              <AnimateOnScroll key={premises.id} delay={index * 40}>
                <div className="grid items-center gap-8 lg:grid-cols-2">
                  <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                    <div className="mb-4 flex items-center gap-3">
                      <BrandIcon variant="green" className="h-8 w-8" />
                      <h2 className="text-2xl font-bold text-navy">
                        {premises.title}
                      </h2>
                    </div>
                    <p className="text-lg leading-relaxed text-slate-600">
                      {premises.description}
                    </p>
                  </div>
                  {beforeAfterPairs[index] && (
                    <div
                      className={`grid grid-cols-2 gap-3 ${index % 2 === 1 ? "lg:order-1" : ""}`}
                    >
                      <div className="overflow-hidden rounded-2xl">
                        <Image
                          src={beforeAfterPairs[index].before}
                          alt={`${beforeAfterPairs[index].alt} — before`}
                          width={400}
                          height={300}
                          className="aspect-[4/3] w-full object-cover"
                        />
                      </div>
                      <div className="overflow-hidden rounded-2xl">
                        <Image
                          src={beforeAfterPairs[index].after}
                          alt={`${beforeAfterPairs[index].alt} — after`}
                          width={400}
                          height={300}
                          className="aspect-[4/3] w-full object-cover"
                        />
                      </div>
                    </div>
                  )}
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-navy-50 py-20">
        <Container>
          <SectionHeading
            kicker="Every visit"
            title="What you can expect"
            className="mb-10"
          />
          <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {serviceExpectations.map((item) => (
              <li key={item} className="flex items-center gap-3">
                <BrandIcon variant="green" />
                <span className="font-medium text-navy">{item}</span>
              </li>
            ))}
          </ul>
          <p className="mt-10 max-w-2xl text-slate-600 leading-relaxed">
            All services are quote-based following a free site visit — no pricing
            published online. We assess your premises, understand your needs and
            provide a tailored proposal.
          </p>
        </Container>
      </section>

      <CtaBanner />
    </>
  );
}
