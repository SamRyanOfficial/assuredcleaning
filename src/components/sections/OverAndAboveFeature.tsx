import Image from "next/image";
import Link from "next/link";
import { OverAndAboveReportMock } from "@/components/booking/OverAndAboveReportMock";
import { AnimateOnScroll } from "@/components/ui/AnimateOnScroll";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { overAndAboveShowcase } from "@/content/over-and-above";

const reportBenefits = [
  "Care & maintenance notes beyond the routine clean",
  "Before-and-after evidence of the work completed",
  "Practical recommendations you can act on",
];

export function OverAndAboveFeature() {
  return (
    <section className="section-pad bg-navy text-white">
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <AnimateOnScroll>
            <SectionTitle
              light
              subtitle="Cleaning is the minimum. We look for opportunities to improve your premises — and document it clearly."
            >
              <span className="text-brand">Over &amp; Above</span> Reports
            </SectionTitle>

            <div className="mt-8 grid grid-cols-2 gap-3">
              <div className="relative aspect-[4/3] overflow-hidden rounded-lg ring-1 ring-white/10">
                <span className="absolute left-2 top-2 z-10 rounded bg-navy px-2 py-0.5 text-xs font-semibold text-white">
                  Before
                </span>
                <div
                  className="absolute inset-0 origin-center"
                  style={{ transform: `scale(${overAndAboveShowcase.zoom})` }}
                >
                  <Image
                    src={overAndAboveShowcase.beforeImage}
                    alt="Before — commercial bathroom floor before Assured Cleaning"
                    fill
                    sizes="(max-width: 1024px) 45vw, 320px"
                    className="object-cover"
                    style={{
                      objectPosition: overAndAboveShowcase.beforeObjectPosition,
                    }}
                  />
                </div>
              </div>
              <div className="relative aspect-[4/3] overflow-hidden rounded-lg ring-1 ring-white/10">
                <span className="absolute left-2 top-2 z-10 rounded bg-brand px-2 py-0.5 text-xs font-semibold text-navy">
                  After
                </span>
                <div
                  className="absolute inset-0 origin-center"
                  style={{ transform: `scale(${overAndAboveShowcase.zoom})` }}
                >
                  <Image
                    src={overAndAboveShowcase.afterImage}
                    alt="After — bathroom floor restored by Assured Cleaning"
                    fill
                    sizes="(max-width: 1024px) 45vw, 320px"
                    className="object-cover"
                    style={{
                      objectPosition: overAndAboveShowcase.afterObjectPosition,
                    }}
                  />
                </div>
              </div>
            </div>

            <ul className="mt-8 space-y-3">
              {reportBenefits.map((benefit) => (
                <li
                  key={benefit}
                  className="flex items-start gap-3 text-sm leading-relaxed text-white/75 md:text-[0.9375rem]"
                >
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand" />
                  {benefit}
                </li>
              ))}
            </ul>

            <div className="mt-9">
              <Button href="/over-and-above">See a real report</Button>
            </div>
          </AnimateOnScroll>

          <AnimateOnScroll delay={100}>
            <Link
              href="/over-and-above"
              className="group block overflow-hidden rounded-[var(--radius-media)] shadow-[var(--shadow-lift)] ring-1 ring-white/10 transition-all duration-300 hover:-translate-y-1 hover:ring-brand/40 hover:shadow-[0_12px_40px_rgb(0_0_0/0.28)] focus-ring-light"
              aria-label="View Over and Above report details"
            >
              <OverAndAboveReportMock compact />
            </Link>
          </AnimateOnScroll>
        </div>
      </Container>
    </section>
  );
}
