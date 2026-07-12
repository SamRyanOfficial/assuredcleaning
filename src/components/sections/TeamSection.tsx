import Image from "next/image";
import { founderLetter } from "@/content/about";
import { AnimateOnScroll } from "@/components/ui/AnimateOnScroll";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function TeamSection() {
  return (
    <section className="bg-navy-50 py-20">
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <AnimateOnScroll>
            <div className="overflow-hidden rounded-3xl shadow-lg">
              <Image
                src="/images/team.jpg"
                alt="Assured Cleaning Services team — Holly Fisher and staff in Tauranga"
                width={700}
                height={525}
                className="aspect-[4/3] w-full object-cover"
              />
            </div>
          </AnimateOnScroll>

          <AnimateOnScroll delay={100}>
            <SectionHeading
              kicker="Meet the team"
              title="Genuine care, every visit"
            />
            <p className="mt-6 text-lg leading-relaxed text-slate-600">
              {founderLetter.paragraphs[0]}
            </p>
            <p className="mt-4 font-script text-2xl text-navy">
              {founderLetter.signOff}
            </p>
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
