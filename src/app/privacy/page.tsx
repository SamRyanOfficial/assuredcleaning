import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/ui/PageHero";
import { site } from "@/content/site";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: "Privacy Policy",
  description:
    "Privacy policy for Assured Cleaning Services — how we collect, use and protect your personal information under the New Zealand Privacy Act 2020.",
  path: "/privacy",
});

export default function PrivacyPage() {
  return (
    <>
      <PageHero
        kicker="Legal"
        title="Privacy Policy"
        description="Last updated: July 2026"
      />

      <section className="section-pad">
        <Container>
          <div className="prose prose-slate max-w-3xl prose-headings:text-navy prose-a:text-navy">
            <p>
              {site.name} (&ldquo;we&rdquo;, &ldquo;us&rdquo;) is committed to
              protecting your privacy in accordance with the New Zealand Privacy
              Act 2020. This policy explains how we collect, use and safeguard
              personal information when you use our website at {site.url}.
            </p>

            <h2>Information we collect</h2>
            <p>We may collect the following information when you interact with our website:</p>
            <ul>
              <li>
                <strong>Contact form:</strong> name, email address, subject and
                message content.
              </li>
              <li>
                <strong>Booking:</strong> information you provide when booking a
                free site visit through our Cal.com scheduling tool, including
                name, contact details, business information and premises address.
              </li>
              <li>
                <strong>Technical data:</strong> basic server logs (such as IP
                address and browser type) for security and rate limiting.
              </li>
            </ul>

            <h2>How we use your information</h2>
            <p>We use your information to:</p>
            <ul>
              <li>Respond to enquiries submitted via our contact form</li>
              <li>Schedule and manage free site visit bookings</li>
              <li>Provide commercial cleaning quotes and services</li>
              <li>Prevent spam and protect our website</li>
            </ul>
            <p>
              We do not sell your personal information. We only share information
              with service providers necessary to operate our website (such as
              email and booking platforms) or where required by law.
            </p>

            <h2>Storage and security</h2>
            <p>
              Contact form submissions are sent by email to {site.email} via
              Resend. Booking data is stored by Cal.com in accordance with their
              privacy policy. We take reasonable steps to protect your
              information from unauthorised access, loss or misuse.
            </p>

            <h2>Your rights</h2>
            <p>
              Under the Privacy Act 2020, you have the right to access and
              request correction of personal information we hold about you. To
              make a request, contact us at{" "}
              <a href={`mailto:${site.email}`}>{site.email}</a>.
            </p>

            <h2>Cookies and analytics</h2>
            <p>
              Our website uses minimal technical cookies required for basic
              functionality. Third-party embeds (such as Cal.com) may set their
              own cookies. We do not currently use advertising or tracking
              analytics cookies.
            </p>

            <h2>Contact</h2>
            <p>
              For privacy-related questions, contact {site.owner} at{" "}
              <a href={`mailto:${site.email}`}>{site.email}</a> or{" "}
              <a href={`tel:${site.phoneIntl}`}>{site.phone}</a>.
            </p>
          </div>
        </Container>
      </section>
    </>
  );
}
