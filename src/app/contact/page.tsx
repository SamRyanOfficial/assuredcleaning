import { ContactForm } from "@/components/forms/ContactForm";
import { CtaBanner } from "@/components/sections/CtaBanner";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
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

      <section className="bg-navy-50 py-16">
        <Container>
          <SectionHeading
            kicker="Get in touch"
            title="Contact us"
            description="We'd love to hear from you. Reach out by phone, email or the form below."
          />
        </Container>
      </section>

      <section className="py-20">
        <Container>
          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <h2 className="text-xl font-bold text-navy">Contact details</h2>
              <ul className="mt-6 space-y-4 text-slate-600">
                <li>
                  <span className="block text-sm font-medium text-navy">Phone</span>
                  <a
                    href={`tel:${site.phoneIntl}`}
                    className="text-lg font-semibold hover:text-brand-600 focus-ring rounded"
                  >
                    {site.phone}
                  </a>
                </li>
                <li>
                  <span className="block text-sm font-medium text-navy">Email</span>
                  <a
                    href={`mailto:${site.email}`}
                    className="hover:text-brand-600 focus-ring rounded"
                  >
                    {site.email}
                  </a>
                </li>
                <li>
                  <span className="block text-sm font-medium text-navy">Service areas</span>
                  {site.serviceAreas.join(" · ")}
                </li>
                <li>
                  <span className="block text-sm font-medium text-navy">Hours</span>
                  {site.hours}
                </li>
              </ul>
            </div>

            <div className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm md:p-8">
              <h2 className="mb-6 text-xl font-bold text-navy">Send a message</h2>
              <ContactForm />
            </div>
          </div>
        </Container>
      </section>

      <CtaBanner />
    </>
  );
}
