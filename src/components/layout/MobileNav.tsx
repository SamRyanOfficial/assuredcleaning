"use client";

import Link from "next/link";
import { useEffect } from "react";
import { ctaLabel, navLinks, site } from "@/content/site";

interface MobileNavProps {
  open: boolean;
  onClose: () => void;
}

export function MobileNav({ open, onClose }: MobileNavProps) {
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[60] lg:hidden" role="dialog" aria-modal="true">
      <button
        type="button"
        className="absolute inset-0 bg-navy/50 backdrop-blur-sm"
        aria-label="Close menu"
        onClick={onClose}
      />
      <nav
        className="absolute right-0 top-0 flex h-full w-[min(100%,20rem)] flex-col bg-white p-6 shadow-2xl"
        aria-label="Mobile navigation"
      >
        <div className="mb-8 flex items-center justify-between">
          <span className="text-sm font-semibold tracking-tight text-navy">
            Menu
          </span>
          <button
            type="button"
            onClick={onClose}
            className="rounded-full bg-navy-50 p-2.5 text-navy focus-ring-light"
            aria-label="Close menu"
          >
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              aria-hidden
            >
              <path d="M6 6l12 12M18 6L6 18" />
            </svg>
          </button>
        </div>
        <ul className="flex flex-col gap-1">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                onClick={onClose}
                className="block rounded-xl px-3 py-3 text-lg font-medium tracking-tight text-navy transition-colors hover:bg-navy-50 focus-ring-light"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
        <div className="mt-auto space-y-3 border-t border-navy/8 pt-6">
          <a
            href={`tel:${site.phoneIntl}`}
            className="block text-center text-sm font-semibold text-navy"
          >
            {site.phone}
          </a>
          <Link
            href="/book"
            onClick={onClose}
            className="inline-flex w-full items-center justify-center rounded-full bg-brand px-6 py-3.5 text-sm font-semibold text-navy transition-colors hover:bg-brand-600 focus-ring-light"
          >
            {ctaLabel}
          </Link>
        </div>
      </nav>
    </div>
  );
}
