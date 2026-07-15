import { OverAndAboveReportExample } from "@/components/booking/OverAndAboveReportExample";
import { CtaBanner } from "@/components/sections/CtaBanner";
import { AnimateOnScroll } from "@/components/ui/AnimateOnScroll";
import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/ui/PageHero";
import { createPageMetadata } from "@/lib/metadata";
import { getBreadcrumbSchema } from "@/lib/schema";

export const metadata = createPageMetadata({
  title: "Over & Above Reports",
  description:
    "Assured Cleaning Services goes beyond routine commercial cleaning with Over & Above Reports — care notes, maintenance observations and before-and-after documentation in Tauranga.",
  path: "/over-and-above",
});

const reportBenefits = [
  {
    lead: "Care notes",
    text: "on extra work or maintenance spotted",
  },
  {
    lead: "Before & after",
    text: "photos",
  },
  {
    lead: "Outcome",
    text: "— what was achieved",
  },
] as const;

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

      <section className="section-pad bg-navy-50">
        <Container>
          <div className="mb-8 text-center md:mb-10">
            <h2 className="text-2xl font-bold tracking-tight text-navy md:text-3xl">
              A real example
            </h2>
            <p className="mx-auto mt-2 max-w-lg text-sm leading-relaxed text-slate-500">
              An example Over &amp; Above Report from a Papamoa premises.
            </p>
          </div>
          <AnimateOnScroll>
            <div className="mx-auto max-w-2xl md:max-w-3xl">
              <OverAndAboveReportExample />
            </div>
          </AnimateOnScroll>

          <AnimateOnScroll>
            <div className="mx-auto mt-12 max-w-3xl md:mt-16">
              <h2 className="text-2xl font-bold tracking-tight text-navy md:text-3xl">
                More than a clean —{" "}
                <span className="text-brand-600">a useful record</span>
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-slate-600 md:text-base">
                When we go{" "}
                <span className="font-semibold text-navy">
                  beyond the routine clean
                </span>
                , we leave you a simple report you can keep and share.
              </p>
              <ul className="mt-6 space-y-2.5">
                {reportBenefits.map((benefit) => (
                  <li
                    key={benefit.lead}
                    className="flex gap-3 text-sm leading-relaxed text-slate-600 md:text-base"
                  >
                    <span
                      className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand"
                      aria-hidden
                    />
                    <span>
                      <span className="font-semibold text-navy">
                        {benefit.lead}
                      </span>{" "}
                      {benefit.text}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </AnimateOnScroll>
        </Container>
      </section>

      <CtaBanner />
    </>
  );
}
