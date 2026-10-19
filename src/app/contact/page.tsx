import { ContactSection } from "@/components/sections/ContactSection";
import { CtaBanner } from "@/components/sections/CtaBanner";
import { PageHero } from "@/components/ui/PageHero";
import { createPageMetadata } from "@/lib/metadata";
import { getBreadcrumbSchema } from "@/lib/schema";

export const metadata = createPageMetadata({
  title: "Contact",
  description:
    "Contact our commercial cleaners in Tauranga, Mt Maunganui, Papamoa and Te Puke. Open daily 7am–7pm. Call 027 340 7590 or send a message.",
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

      <ContactSection />

      <CtaBanner />
    </>
  );
}
