import Image from "next/image";
import Link from "next/link";
import { navLinks, site } from "@/content/site";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden bg-navy-900 text-white">
      <div className="icon-pattern absolute inset-0 opacity-[0.04]" aria-hidden />
      <div className="relative mx-auto max-w-6xl px-5 py-16 md:px-8">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-2">
            <Image
              src="/logos/Assured Logo - Primary Inverted.png"
              alt={site.name}
              width={200}
              height={56}
              className="mb-6 h-12 w-auto"
            />
            <p className="max-w-md text-sm leading-relaxed text-white/75">
              {site.positioning}
            </p>
            <p className="mt-6 font-logo text-lg font-bold tracking-wide">
              <span className="text-white">CLEAN SPACES. </span>
              <span className="text-brand">ASSURED STANDARDS.</span>
            </p>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-brand">
              Navigate
            </h3>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/75 transition-colors hover:text-white focus-ring rounded"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/book"
                  className="text-sm text-white/75 transition-colors hover:text-white focus-ring rounded"
                >
                  Book a Free Site Visit
                </Link>
              </li>
              <li>
                <Link
                  href="/privacy"
                  className="text-sm text-white/75 transition-colors hover:text-white focus-ring rounded"
                >
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-brand">
              Contact
            </h3>
            <ul className="space-y-3 text-sm text-white/75">
              <li>
                <a
                  href={`tel:${site.phoneIntl}`}
                  className="transition-colors hover:text-white focus-ring rounded"
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
              <li className="pt-2">
                Proudly serving {site.serviceAreas.join(" · ")}
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-white/10 pt-8 text-center text-sm text-white/50">
          © {year} {site.name}. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
