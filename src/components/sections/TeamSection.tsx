import Image from "next/image";
import { founderLetter } from "@/content/about";
import { AnimateOnScroll } from "@/components/ui/AnimateOnScroll";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { SectionTitle } from "@/components/ui/SectionTitle";

export function TeamSection() {
  return (
    <section className="section-pad bg-navy-50">
      <Container>
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <AnimateOnScroll>
            <div className="relative aspect-[5/4] overflow-hidden rounded-[var(--radius-media)] shadow-[var(--shadow-soft)] ring-1 ring-navy/6">
              <Image
                src="/images/IMG_9244.jpg"
                alt="Assured Cleaning Services team — Holly Fisher and staff in Tauranga"
                fill
                className="object-cover object-[50%_32%]"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </AnimateOnScroll>

          <AnimateOnScroll delay={80}>
            <SectionTitle>
              Genuine care,{" "}
              <span className="text-brand-600">every visit</span>
            </SectionTitle>
            <p className="prose-measure mt-5 text-base leading-relaxed text-slate-600">
              {founderLetter.paragraphs[0]}
            </p>
            <div className="mt-6">
              <p className="font-script text-2xl text-navy">
                {founderLetter.signOff}
              </p>
              <p className="mt-1 text-sm text-slate-500">
                {founderLetter.title}
              </p>
            </div>
            <div className="mt-8">
              <Button href="/about" variant="secondary">
                Read Holly&apos;s letter
              </Button>
            </div>
          </AnimateOnScroll>
        </div>
      </Container>
    </section>
  );
}
