import { introParagraphs } from "@/content/about";
import { AnimateOnScroll } from "@/components/ui/AnimateOnScroll";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function IntroSection() {
  return (
    <section className="bg-white py-20">
      <Container>
        <AnimateOnScroll>
          <SectionHeading
            kicker="A different standard of"
            title="Commercial cleaning"
            className="mb-10"
          />
          <div className="max-w-3xl space-y-5 text-lg leading-relaxed text-slate-600">
            {introParagraphs.map((paragraph) => (
              <p key={paragraph.slice(0, 24)}>{paragraph}</p>
            ))}
          </div>
        </AnimateOnScroll>
      </Container>
    </section>
  );
}
