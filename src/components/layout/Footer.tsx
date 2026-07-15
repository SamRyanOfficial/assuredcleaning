import Image from "next/image";
import Link from "next/link";
import { ctaLabel, navLinks, site } from "@/content/site";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-white/10 bg-navy-900 text-white">
      <div className="mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-20">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-5">
            <Image
              src="/logos/Assured Logo - Primary Inverted.png"
              alt={site.name}
              width={200}
              height={56}
              className="mb-5 h-10 w-auto"
            />
            <p className="max-w-sm text-sm leading-relaxed text-white/55">
              {site.positioning}
            </p>
          </div>

          <div className="grid gap-10 sm:grid-cols-2 lg:col-span-7">
            <div>
              <h3 className="mb-4 text-xs font-semibold uppercase tracking-wider text-white/40">
                Navigate
              </h3>
              <ul className="space-y-2.5">
                {navLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-white/60 transition-colors hover:text-white focus-ring rounded"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
                <li>
                  <Link
                    href="/book"
                    className="text-sm text-white/60 transition-colors hover:text-white focus-ring rounded"
                  >
                    {ctaLabel}
                  </Link>
                </li>
                <li>
                  <Link
                    href="/privacy"
                    className="text-sm text-white/60 transition-colors hover:text-white focus-ring rounded"
                  >
                    Privacy Policy
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="mb-4 text-xs font-semibold uppercase tracking-wider text-white/40">
                Contact
              </h3>
              <ul className="space-y-3 text-sm text-white/60">
                <li>
                  <a
                    href={`tel:${site.phoneIntl}`}
                    className="font-medium text-white transition-colors hover:text-brand focus-ring rounded"
                  >
                    {site.phone}
                  </a>
                </li>
                <li>
                  <a
                    href={`mailto:${site.email}`}
                    className="transition-colors hover:text-white focus-ring rounded"
                  >
                    {site.email}
                  </a>
                </li>
                <li>
                  <a
                    href={site.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="transition-colors hover:text-white focus-ring rounded"
                  >
                    Facebook
                  </a>
                </li>
                <li className="pt-1 leading-relaxed">
                  {site.serviceAreas.join(" · ")}
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-14 border-t border-white/8 pt-8 text-xs text-white/35 md:text-sm">
          © <span suppressHydrationWarning>{year}</span> {site.name}. All rights
          reserved.
        </div>
      </div>
    </footer>
  );
}
