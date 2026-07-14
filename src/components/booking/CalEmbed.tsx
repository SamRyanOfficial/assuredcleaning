"use client";

import Cal, { getCalApi } from "@calcom/embed-react";
import { useEffect } from "react";
import { CtaBanner } from "@/components/sections/CtaBanner";
import { site } from "@/content/site";
import { AnimateOnScroll } from "@/components/ui/AnimateOnScroll";
import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/ui/PageHero";

interface CalEmbedProps {
  calLink?: string;
}

export function CalEmbed({ calLink }: CalEmbedProps) {
  const link =
    calLink ?? process.env.NEXT_PUBLIC_CAL_LINK ?? "assuredcleaning/45min";

  useEffect(() => {
    (async function () {
      const cal = await getCalApi({ namespace: "site-visit" });
      cal("ui", {
        theme: "light",
        styles: {
          branding: {
            brandColor: "#132D52",
          },
        },
        cssVarsPerTheme: {
          light: {
            "cal-brand": "#132D52",
            "cal-brand-emphasis": "#0C1F3B",
            "cal-brand-text": "#ffffff",
            "cal-brand-accent": "#9DCC40",
          },
          dark: {
            "cal-brand": "#132D52",
            "cal-brand-emphasis": "#0C1F3B",
            "cal-brand-text": "#ffffff",
            "cal-brand-accent": "#9DCC40",
          },
        },
      });
    })();
  }, []);

  return (
    <Cal
      namespace="site-visit"
      calLink={link}
      config={{ layout: "month_view" }}
      className="min-h-[600px] w-full overflow-hidden rounded-[var(--radius-card)] border border-navy/8 bg-white shadow-[var(--shadow-soft)]"
      style={{ width: "100%", minHeight: "600px", overflow: "auto" }}
    />
  );
}

export function BookPageContent() {
  return (
    <>
      <PageHero
        kicker="Next step"
        title={
          <>
            Book a <span className="text-brand-600">Free Site Visit</span>
          </>
        }
        description="Free, no-obligation site visit and tailored cleaning proposal for your commercial premises."
      />

      <section className="section-pad bg-navy-50">
        <Container>
          <AnimateOnScroll>
            <CalEmbed />
          </AnimateOnScroll>
          <p className="mt-10 text-center text-sm text-slate-500">
            Prefer to talk? Call{" "}
            <a
              href={`tel:${site.phoneIntl}`}
              className="font-semibold text-navy transition-colors hover:text-brand-600 focus-ring rounded"
            >
              {site.phone}
            </a>{" "}
            or email{" "}
            <a
              href={`mailto:${site.email}`}
              className="font-semibold text-navy transition-colors hover:text-brand-600 focus-ring rounded"
            >
              {site.email}
            </a>
          </p>
        </Container>
      </section>

      <CtaBanner />
    </>
  );
}
