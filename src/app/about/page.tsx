import Image from "next/image";
import { coreValues, founderLetter } from "@/content/about";
import { CtaBanner } from "@/components/sections/CtaBanner";
import { AssuredDifference } from "@/components/sections/AssuredDifference";
import { AnimateOnScroll } from "@/components/ui/AnimateOnScroll";
import { Container } from "@/components/ui/Container";
import { FeatureCard } from "@/components/ui/FeatureCard";
import { PageHero } from "@/components/ui/PageHero";
import { SectionTitle } from "@/components/ui/SectionTitle";
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

      <PageHero
        kicker="About Assured"
        title={
          <>
            Commercial cleaning with{" "}
            <span className="text-brand-600">genuine care</span>
          </>
        }
        description="Professional, dependable and proactive — built on partnerships that last."
      />

      <section className="section-pad">
        <Container>
          <div className="grid items-start gap-12 lg:grid-cols-2 lg:gap-16">
            <AnimateOnScroll>
              <div className="overflow-hidden rounded-[var(--radius-media)] shadow-[var(--shadow-lift)] ring-1 ring-navy/8">
                <Image
                  src="/images/holly-upscaled.png"
                  alt="Holly Fisher, Founder of Assured Cleaning Services"
                  width={700}
                  height={875}
                  className="aspect-[4/5] w-full object-cover object-top"
                />
              </div>
            </AnimateOnScroll>

            <AnimateOnScroll delay={100}>
              <h2 className="text-2xl font-bold tracking-tight text-navy md:text-3xl">
                Holly Fisher
              </h2>
              <p className="mt-2 text-sm text-slate-500">Founder</p>
              <div className="mt-6 space-y-4 text-base leading-relaxed text-slate-600 md:text-lg">
                {founderLetter.paragraphs.map((paragraph) => (
                  <p key={paragraph.slice(0, 30)}>{paragraph}</p>
                ))}
              </div>
              <p className="mt-8 font-semibold tracking-tight text-navy">
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

      <section className="section-pad bg-navy-50 !pb-8 md:!pb-10">
        <Container>
          <AnimateOnScroll>
            <SectionTitle subtitle="The principles behind every clean.">
              Our <span className="text-brand-600">core values</span>
            </SectionTitle>
          </AnimateOnScroll>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-5">
            {coreValues.map((value, index) => (
              <AnimateOnScroll key={value.title} delay={index * 40}>
                <FeatureCard
                  title={value.title}
                  description={value.description}
                  badge="accent"
                />
              </AnimateOnScroll>
            ))}
          </div>
        </Container>
      </section>

      <AssuredDifference className="!pt-8 md:!pt-10" />
      <CtaBanner />
    </>
  );
}
