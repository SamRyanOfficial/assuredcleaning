import Link from "next/link";
import { assuredDifference } from "@/content/difference";
import { AnimateOnScroll } from "@/components/ui/AnimateOnScroll";
import { BrandIcon } from "@/components/ui/BrandIcon";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function AssuredDifference() {
  return (
    <section className="bg-white py-20">
      <Container>
        <AnimateOnScroll>
          <SectionHeading
            kicker="Why businesses choose us"
            title="The Assured Difference"
            description="Six commitments that set our commercial cleaning apart."
            className="mb-12"
          />
        </AnimateOnScroll>

        <div className="grid gap-8 md:grid-cols-2">
          {assuredDifference.map((item, index) => (
            <AnimateOnScroll key={item.title} delay={index * 60}>
              <div className="flex gap-4">
                <BrandIcon variant="green" className="mt-1 h-8 w-8" />
                <div>
                  <h3 className="text-lg font-semibold text-navy">
                    {"href" in item && item.href ? (
                      <Link
                        href={item.href}
                        className="transition-colors hover:text-brand-600 focus-ring rounded"
                      >
                        {item.title}
                      </Link>
                    ) : (
                      item.title
                    )}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600">
                    {item.description}
                  </p>
                </div>
              </div>
            </AnimateOnScroll>
          ))}
        </div>
      </Container>
    </section>
  );
}
