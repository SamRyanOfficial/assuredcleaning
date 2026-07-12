"use client";

import Cal, { getCalApi } from "@calcom/embed-react";
import { useEffect } from "react";
import { site } from "@/content/site";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

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
      className="min-h-[600px] w-full overflow-hidden rounded-2xl border border-slate-100 bg-white shadow-sm"
      style={{ width: "100%", minHeight: "600px", overflow: "auto" }}
    />
  );
}

export function BookPageContent() {
  return (
    <>
      <section className="bg-navy-50 py-16">
        <Container>
          <SectionHeading
            kicker="Get started"
            title="Book a Free Site Visit"
            description="Free, no-obligation site visit and tailored cleaning proposal for your commercial premises."
          />
        </Container>
      </section>

      <section className="py-16">
        <Container>
          <CalEmbed />
          <div className="mt-12 rounded-2xl bg-navy-50 p-8 text-center">
            <h2 className="text-lg font-semibold text-navy">Prefer to talk?</h2>
            <p className="mt-2 text-slate-600">
              Call{" "}
              <a
                href={`tel:${site.phoneIntl}`}
                className="font-semibold text-navy hover:text-brand-600 focus-ring rounded"
              >
                {site.phone}
              </a>{" "}
              or email{" "}
              <a
                href={`mailto:${site.email}`}
                className="font-semibold text-navy hover:text-brand-600 focus-ring rounded"
              >
                {site.email}
              </a>
            </p>
          </div>
        </Container>
      </section>
    </>
  );
}
