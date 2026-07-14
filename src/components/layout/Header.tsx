"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { MobileNav } from "@/components/layout/MobileNav";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { ctaLabel, navLinks, site } from "@/content/site";
import { cn } from "@/lib/utils";

export function Header() {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const [scrolled, setScrolled] = useState(!isHome);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(!isHome || window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [isHome]);

  const onDark = !scrolled;
  const logoSrc = onDark
    ? "/logos/Assured Logo - Primary Inverted.png"
    : "/logos/Assured Logo - Primary Black.png";

  return (
    <>
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-50 transition-all duration-300",
          scrolled
            ? "border-b border-navy/6 bg-white/92 shadow-[0_8px_30px_rgb(19_45_82/0.06)] backdrop-blur-xl"
            : "border-b border-transparent bg-gradient-to-b from-navy/70 to-transparent",
        )}
      >
        <Container className="py-3.5 md:py-4">
          <div className="flex items-center justify-between lg:grid lg:grid-cols-[auto_1fr_auto] lg:items-center lg:gap-8">
            <Link
              href="/"
              className="shrink-0 justify-self-start rounded-lg focus-ring"
            >
              <Image
                src={logoSrc}
                alt={site.name}
                width={180}
                height={48}
                className="h-9 w-auto md:h-10"
                priority
              />
            </Link>

            <nav
              className="hidden w-full min-w-0 items-center justify-between gap-6 px-4 lg:flex xl:gap-8 xl:px-8"
              aria-label="Main navigation"
            >
              {navLinks.map((link) => {
                const active = pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={cn(
                      "whitespace-nowrap text-sm font-medium transition-colors focus-ring rounded",
                      onDark
                        ? active
                          ? "text-white"
                          : "text-white/65 hover:text-white"
                        : active
                          ? "text-navy"
                          : "text-slate-500 hover:text-navy",
                    )}
                  >
                    {link.label}
                  </Link>
                );
              })}
            </nav>

            <div className="flex items-center justify-end gap-2 sm:gap-3 justify-self-end">
              <div
                className={cn(
                  "hidden transition-opacity duration-300 lg:block",
                  scrolled ? "opacity-100" : "pointer-events-none opacity-0",
                )}
                aria-hidden={!scrolled}
              >
                <Button href="/book">{ctaLabel}</Button>
              </div>

              <div className="flex items-center gap-2 lg:hidden">
                <Button href="/book" className="!px-4 !py-2.5 text-xs">
                  Book
                </Button>
                <button
                  type="button"
                  className={cn(
                    "inline-flex h-10 w-10 items-center justify-center rounded-full transition-colors focus-ring",
                    onDark ? "bg-white/10 text-white" : "bg-navy-50 text-navy",
                  )}
                  aria-label={mobileOpen ? "Close menu" : "Open menu"}
                  aria-expanded={mobileOpen}
                  onClick={() => setMobileOpen((open) => !open)}
                >
                  <svg
                    width="20"
                    height="20"
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
            </div>
          </div>
        </Container>
      </header>

      <MobileNav open={mobileOpen} onClose={() => setMobileOpen(false)} />
    </>
  );
}
