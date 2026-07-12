"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { MobileNav } from "@/components/layout/MobileNav";
import { Button } from "@/components/ui/Button";
import { ctaLabel, navLinks, site } from "@/content/site";
import { cn } from "@/lib/utils";

export function Header() {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const [scrolled, setScrolled] = useState(!isHome);

  useEffect(() => {
    const onScroll = () => setScrolled(!isHome || window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [isHome]);

  const [mobileOpen, setMobileOpen] = useState(false);

  const logoSrc = scrolled
    ? "/logos/Assured Logo - Primary Black.png"
    : "/logos/Assured Logo - Primary Inverted.png";

  return (
    <>
      <header
        className={cn(
          "sticky top-0 z-50 transition-colors duration-300",
          scrolled
            ? "border-b border-slate-100 bg-white/95 shadow-sm backdrop-blur"
            : "bg-navy",
        )}
      >
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-4 md:px-8">
          <Link href="/" className="shrink-0 focus-ring rounded-lg">
            <Image
              src={logoSrc}
              alt={site.name}
              width={180}
              height={48}
              className="h-10 w-auto md:h-12"
              priority
            />
          </Link>

          <nav
            className="hidden items-center gap-8 lg:flex"
            aria-label="Main navigation"
          >
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "text-sm font-medium transition-colors focus-ring rounded",
                  scrolled
                    ? "text-slate-600 hover:text-navy"
                    : "text-white/90 hover:text-white",
                )}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="hidden items-center gap-4 lg:flex">
            <a
              href={`tel:${site.phoneIntl}`}
              className={cn(
                "text-sm font-semibold transition-colors focus-ring rounded",
                scrolled ? "text-navy hover:text-brand-600" : "text-white hover:text-brand",
              )}
            >
              {site.phone}
            </a>
            <Button href="/book">{ctaLabel}</Button>
          </div>

          <button
            type="button"
            className={cn(
              "inline-flex h-10 w-10 items-center justify-center rounded-lg lg:hidden focus-ring",
              scrolled ? "text-navy" : "text-white",
            )}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
            onClick={() => setMobileOpen((open) => !open)}
          >
            <span className="sr-only">Menu</span>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              aria-hidden
            >
              {mobileOpen ? (
                <path d="M6 6l12 12M18 6L6 18" />
              ) : (
                <path d="M4 7h16M4 12h16M4 17h16" />
              )}
            </svg>
          </button>
        </div>

        <div
          className={cn(
            "px-5 py-3 lg:hidden",
            scrolled ? "border-t border-slate-100" : "border-t border-white/10",
          )}
        >
          <Button href="/book" className="w-full">
            {ctaLabel}
          </Button>
        </div>
      </header>

      <MobileNav open={mobileOpen} onClose={() => setMobileOpen(false)} />
    </>
  );
}
