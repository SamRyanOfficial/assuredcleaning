import { ContactForm } from "@/components/forms/ContactForm";
import { CtaBanner } from "@/components/sections/CtaBanner";
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

      <section id="contact-form" className="section-pad scroll-mt-28">
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

            <div className="rounded-[var(--radius-card)] border border-navy/6 bg-white p-6 md:p-8 lg:col-span-3">
              <h2 className="mb-6 text-lg font-bold tracking-tight text-navy">
                Send a message
              </h2>
              <ContactForm />
            </div>
          </div>
        </Container>
      </section>

      <CtaBanner />
    </>
  );
}
