import Image from "next/image";
import Link from "next/link";
import { OverAndAboveReportMock } from "@/components/booking/OverAndAboveReportMock";
import { AnimateOnScroll } from "@/components/ui/AnimateOnScroll";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { overAndAboveReport } from "@/content/over-and-above";

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
              <div className="overflow-hidden rounded-lg ring-1 ring-white/10">
                <Image
                  src={overAndAboveReport.beforeImage}
                  alt="Before cleaning — scuffed wall in commercial premises"
                  width={320}
                  height={240}
                  className="aspect-[4/3] w-full object-cover"
                />
              </div>
              <div className="overflow-hidden rounded-lg ring-1 ring-white/10">
                <Image
                  src={overAndAboveReport.afterImage}
                  alt="After cleaning — wall restored"
                  width={320}
                  height={240}
                  className="aspect-[4/3] w-full object-cover"
                />
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
