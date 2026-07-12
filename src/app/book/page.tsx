import { BookPageContent } from "@/components/booking/CalEmbed";
import { createPageMetadata } from "@/lib/metadata";
import { getBreadcrumbSchema } from "@/lib/schema";

export const metadata = createPageMetadata({
  title: "Book a Free Site Visit",
  description:
    "Book a free, no-obligation commercial cleaning site visit in Tauranga, Mt Maunganui, Papamoa or Te Puke. Receive a tailored cleaning proposal from Assured Cleaning Services.",
  path: "/book",
});

export default function BookPage() {
  const breadcrumbs = getBreadcrumbSchema([
    { name: "Home", path: "/" },
    { name: "Book", path: "/book" },
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbs) }}
      />
      <BookPageContent />
    </>
  );
}
