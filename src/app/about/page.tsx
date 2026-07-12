import Image from "next/image";
import { coreValues, founderLetter, mission, vision } from "@/content/about";
import { CtaBanner } from "@/components/sections/CtaBanner";
import { AssuredDifference } from "@/components/sections/AssuredDifference";
import { AnimateOnScroll } from "@/components/ui/AnimateOnScroll";
import { BrandIcon } from "@/components/ui/BrandIcon";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { createPageMetadata } from "@/lib/metadata";
import { getBreadcrumbSchema } from "@/lib/schema";

export const metadata = createPageMetadata({
  title: "About",
  description:
    "Meet Holly Fisher and the Assured Cleaning Services team. Genuine care, consistently high standards and an over-and-above approach to commercial cleaning in Tauranga.",
  path: "/about",
});

export default function AboutPage() {
  const breadcrumbs = getBreadcrumbSchema([
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
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
            kicker="About us"
            title="Commercial cleaning with genuine care"
            description="Professional, dependable and proactive — built on partnerships that last."
          />
        </Container>
      </section>

      <section className="py-20">
        <Container>
          <div className="grid gap-12 lg:grid-cols-2">
            <AnimateOnScroll>
              <div className="overflow-hidden rounded-3xl shadow-lg">
                <Image
                  src="/images/team.jpg"
                  alt="Assured Cleaning Services team in Tauranga, Bay of Plenty"
                  width={700}
                  height={525}
                  className="aspect-[4/3] w-full object-cover"
                />
              </div>
            </AnimateOnScroll>

            <AnimateOnScroll delay={100}>
              <SectionHeading kicker="A note from our founder" title="Holly Fisher" />
              <div className="mt-6 space-y-5 text-lg leading-relaxed text-slate-600">
                {founderLetter.paragraphs.map((paragraph) => (
                  <p key={paragraph.slice(0, 30)}>{paragraph}</p>
                ))}
              </div>
              <p className="mt-8 font-semibold text-navy">
                {founderLetter.signOff}
              </p>
              <p className="text-sm text-slate-500">{founderLetter.title}</p>
              <p className="mt-6 font-script text-2xl text-brand">
                Clean Spaces. Assured Standards.
              </p>
            </AnimateOnScroll>
          </div>
        </Container>
      </section>

      <section className="bg-navy-50 py-20">
        <Container>
          <div className="grid gap-12 md:grid-cols-2">
            <AnimateOnScroll>
              <h2 className="text-2xl font-bold text-navy">Our mission</h2>
              <p className="mt-4 text-lg leading-relaxed text-slate-600">
                {mission}
              </p>
            </AnimateOnScroll>
            <AnimateOnScroll delay={80}>
              <h2 className="text-2xl font-bold text-navy">Our vision</h2>
              <p className="mt-4 text-lg leading-relaxed text-slate-600">
                {vision}
              </p>
            </AnimateOnScroll>
          </div>
        </Container>
      </section>

      <section className="py-20">
        <Container>
          <SectionHeading
            kicker="What guides us"
            title="Our core values"
            className="mb-12"
          />
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {coreValues.map((value, index) => (
              <AnimateOnScroll key={value.title} delay={index * 60}>
                <div className="flex gap-4">
                  <BrandIcon variant="green" className="mt-1" />
                  <div>
                    <h3 className="font-semibold text-navy">{value.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-slate-600">
                      {value.description}
                    </p>
                  </div>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </Container>
      </section>

      <AssuredDifference />
      <CtaBanner />
    </>
  );
}
