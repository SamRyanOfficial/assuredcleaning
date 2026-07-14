import { ContactForm } from "@/components/forms/ContactForm";
import { CtaBanner } from "@/components/sections/CtaBanner";
import { Card } from "@/components/ui/Card";
import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/ui/PageHero";
import { site } from "@/content/site";
import { createPageMetadata } from "@/lib/metadata";
import { getBreadcrumbSchema } from "@/lib/schema";

export const metadata = createPageMetadata({
  title: "Contact",
  description:
    "Contact Assured Cleaning Services for commercial cleaning in Tauranga, Mt Maunganui, Papamoa and Te Puke. Call 027 340 7590 or send us a message.",
  path: "/contact",
});

export default function ContactPage() {
  const breadcrumbs = getBreadcrumbSchema([
    { name: "Home", path: "/" },
    { name: "Contact", path: "/contact" },
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbs) }}
      />

      <PageHero
        kicker="Get in touch"
        title={
          <>
            <span className="text-brand-600">Contact</span> us
          </>
        }
        description="Reach out by phone, email or the form below — we'd love to hear from you."
      />

      <section id="contact-form" className="section-pad scroll-mt-28 bg-navy-50">
        <Container>
          <div className="grid gap-10 lg:grid-cols-5 lg:gap-14">
            <div className="lg:col-span-2">
              <h2 className="text-lg font-bold tracking-tight text-navy">
                Contact details
              </h2>
              <ul className="mt-6 space-y-5 text-slate-600">
                <li>
                  <span className="mb-1 block text-xs font-medium uppercase tracking-wider text-slate-400">
                    Phone
                  </span>
                  <a
                    href={`tel:${site.phoneIntl}`}
                    className="text-xl font-semibold tracking-tight text-navy transition-colors hover:text-brand-600 focus-ring rounded"
                  >
                    {site.phone}
                  </a>
                </li>
                <li>
                  <span className="mb-1 block text-xs font-medium uppercase tracking-wider text-slate-400">
                    Email
                  </span>
                  <a
                    href={`mailto:${site.email}`}
                    className="transition-colors hover:text-brand-600 focus-ring rounded"
                  >
                    {site.email}
                  </a>
                </li>
                <li>
                  <span className="mb-1 block text-xs font-medium uppercase tracking-wider text-slate-400">
                    Service areas
                  </span>
                  {site.serviceAreas.join(" · ")}
                </li>
                <li>
                  <span className="mb-1 block text-xs font-medium uppercase tracking-wider text-slate-400">
                    Hours
                  </span>
                  {site.hours}
                </li>
              </ul>
            </div>

            <Card
              hover={false}
              className="relative overflow-hidden lg:col-span-3 !border-navy/10 !bg-gradient-to-br !from-white !to-brand-50/40 !p-6 !shadow-[var(--shadow-lift)] md:!p-8"
            >
              <div
                className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-brand via-brand-600 to-brand/30"
                aria-hidden
              />
              <h2 className="mb-1 text-lg font-bold tracking-tight text-navy">
                Send a message
              </h2>
              <p className="mb-6 text-sm text-slate-500">
                Fill in the form and we&apos;ll get back to you as soon as we can.
              </p>
              <ContactForm />
            </Card>
          </div>
        </Container>
      </section>

      <CtaBanner />
    </>
  );
}
