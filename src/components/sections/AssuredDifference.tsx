import Link from "next/link";
import { assuredDifference } from "@/content/difference";
import { AnimateOnScroll } from "@/components/ui/AnimateOnScroll";
import { Container } from "@/components/ui/Container";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { cn } from "@/lib/utils";

export function AssuredDifference({
  omitLinked = false,
  className,
}: {
  omitLinked?: boolean;
  className?: string;
}) {
  const items = omitLinked
    ? assuredDifference.filter((item) => !("href" in item && item.href))
    : assuredDifference;

  return (
    <section className={cn("section-pad bg-navy-50", className)}>
      <Container>
        <AnimateOnScroll>
          <SectionTitle
            subtitle={
              omitLinked
                ? "Five commitments behind every clean."
                : "Six commitments behind every clean."
            }
          >
            The <span className="text-brand-600">Assured</span> Difference
          </SectionTitle>
        </AnimateOnScroll>

        <AnimateOnScroll delay={60}>
          <ul className="mt-10 grid gap-x-10 gap-y-2.5 sm:grid-cols-2 lg:gap-x-14">
            {items.map((item) => (
              <li key={item.title} className="flex gap-2.5 text-sm leading-snug text-slate-600">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand" aria-hidden />
                {"href" in item && item.href ? (
                  <Link
                    href={item.href}
                    className="transition-colors hover:text-navy focus-ring-light rounded"
                  >
                    <span className="font-semibold text-navy">{item.title}</span>
                    <span className="text-slate-500"> — {item.description}</span>
                  </Link>
                ) : (
                  <span>
                    <span className="font-semibold text-navy">{item.title}</span>
                    <span className="text-slate-500"> — {item.description}</span>
                  </span>
                )}
              </li>
            ))}
          </ul>
        </AnimateOnScroll>
      </Container>
    </section>
  );
}
