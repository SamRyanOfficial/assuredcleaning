import { OverAndAboveReportMock } from "@/components/booking/OverAndAboveReportMock";
import { CtaBanner } from "@/components/sections/CtaBanner";
import { AnimateOnScroll } from "@/components/ui/AnimateOnScroll";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
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

      <section className="bg-navy-50 py-16">
        <Container>
          <SectionHeading
            kicker="Our signature offering"
            title="Over & Above Reports"
            description="Cleaning is the minimum expectation. We look for every opportunity to add value to your premises."
          />
        </Container>
      </section>

      <section className="py-20">
        <Container>
          <div className="grid gap-12 lg:grid-cols-3">
            {philosophyPoints.map((point, index) => (
              <AnimateOnScroll key={point.title} delay={index * 80}>
                <h2 className="text-xl font-bold text-navy">{point.title}</h2>
                <p className="mt-3 leading-relaxed text-slate-600">
                  {point.description}
                </p>
              </AnimateOnScroll>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-navy-50 py-20">
        <Container>
          <SectionHeading
            kicker="A real example"
            title="From a Papamoa premises"
            description="This is a stylised recreation of an actual Over & Above Report — not marketing fluff."
            className="mb-12"
            align="center"
          />
          <AnimateOnScroll>
            <div className="mx-auto max-w-3xl">
              <OverAndAboveReportMock />
            </div>
          </AnimateOnScroll>
        </Container>
      </section>

      <CtaBanner />
    </>
  );
}
