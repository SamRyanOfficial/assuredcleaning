import { OverAndAboveReportMock } from "@/components/booking/OverAndAboveReportMock";
import { CtaBanner } from "@/components/sections/CtaBanner";
import { AnimateOnScroll } from "@/components/ui/AnimateOnScroll";
import { Container } from "@/components/ui/Container";
import { FeatureCard } from "@/components/ui/FeatureCard";
import { PageHero } from "@/components/ui/PageHero";
import { createPageMetadata } from "@/lib/metadata";
import { getBreadcrumbSchema } from "@/lib/schema";

export const metadata = createPageMetadata({
  title: "Over & Above Reports",
  description:
    "Assured Cleaning Services goes beyond routine commercial cleaning with Over & Above Reports — care notes, maintenance observations and before-and-after documentation in Tauranga.",
  path: "/over-and-above",
});

const philosophyPoints = [
  {
    title: "Cleaning is the minimum",
    description:
      "Every visit meets our consistently high standards — but we believe a true cleaning partner should add value beyond the routine scope.",
  },
  {
    title: "Proactive observations",
    description:
      "We flag maintenance concerns before they become larger issues, tackle areas needing extra attention and document our work clearly.",
  },
  {
    title: "Actionable recommendations",
    description:
      "Our reports give you practical information you can act on — improving presentation, hygiene and the long-term care of your premises.",
  },
];

export default function OverAndAbovePage() {
  const breadcrumbs = getBreadcrumbSchema([
    { name: "Home", path: "/" },
    { name: "Over & Above", path: "/over-and-above" },
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbs) }}
      />

      <PageHero
        kicker="The Assured difference"
        title={
          <>
            <span className="text-brand-600">Over &amp; Above</span> Reports
          </>
        }
        description="Cleaning is the minimum. We look for every opportunity to add value to your premises."
      />

      <section className="py-12 md:py-16">
        <Container>
          <div className="mb-8 text-center md:mb-10">
            <h2 className="text-2xl font-bold tracking-tight text-navy md:text-3xl">
              A real example
            </h2>
            <p className="mx-auto mt-2 max-w-lg text-sm leading-relaxed text-slate-500">
              A stylised recreation of an actual Over &amp; Above Report from a
              Papamoa premises.
            </p>
          </div>
          <AnimateOnScroll>
            <div className="mx-auto max-w-3xl overflow-hidden rounded-[var(--radius-media)] shadow-[var(--shadow-lift)] ring-1 ring-navy/8">
              <OverAndAboveReportMock />
            </div>
          </AnimateOnScroll>

          <div className="mt-8 grid gap-4 md:mt-10 md:grid-cols-3 md:gap-5">
            {philosophyPoints.map((point, index) => (
              <AnimateOnScroll key={point.title} delay={index * 60}>
                <FeatureCard
                  title={point.title}
                  description={point.description}
                  index={index}
                  badge="number"
                />
              </AnimateOnScroll>
            ))}
          </div>
        </Container>
      </section>

      <CtaBanner />
    </>
  );
}
