import { OverAndAboveReportMock } from "@/components/booking/OverAndAboveReportMock";
import { AnimateOnScroll } from "@/components/ui/AnimateOnScroll";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function OverAndAboveFeature() {
  return (
    <section className="bg-navy-50 py-20">
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <AnimateOnScroll>
            <SectionHeading
              kicker="Our signature differentiator"
              title="Over & Above Reports"
              description="We don't just clean your premises — we proactively identify opportunities to improve them, document our work and provide clear recommendations you can act on."
            />
            <p className="mt-6 text-slate-600 leading-relaxed">
              Every report captures care and maintenance notes, before-and-after
              evidence, and practical outcomes — giving you confidence that your
              cleaning partner is genuinely invested in your business.
            </p>
            <div className="mt-8">
              <Button href="/over-and-above">Learn about Over & Above</Button>
            </div>
          </AnimateOnScroll>

          <AnimateOnScroll delay={120}>
            <div className="rounded-2xl shadow-xl ring-1 ring-slate-200">
              <OverAndAboveReportMock compact />
            </div>
          </AnimateOnScroll>
        </div>
      </Container>
    </section>
  );
}
