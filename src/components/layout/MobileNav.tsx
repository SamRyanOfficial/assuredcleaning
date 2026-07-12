"use client";

import Link from "next/link";
import { useEffect } from "react";
import { ctaLabel, navLinks } from "@/content/site";

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
    <div className="fixed inset-0 z-40 lg:hidden" role="dialog" aria-modal="true">
      <button
        type="button"
        className="absolute inset-0 bg-navy/60"
        aria-label="Close menu"
        onClick={onClose}
      />
      <nav
        className="absolute right-0 top-0 flex h-full w-[min(100%,20rem)] flex-col bg-white p-6 shadow-xl"
        aria-label="Mobile navigation"
      >
        <div className="mb-8 flex items-center justify-between">
          <span className="font-semibold text-navy">Menu</span>
          <button
            type="button"
            onClick={onClose}
            className="rounded-lg p-2 text-navy focus-ring-light"
            aria-label="Close menu"
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
              <path d="M6 6l12 12M18 6L6 18" />
            </svg>
          </button>
        </div>
        <ul className="flex flex-col gap-4">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                onClick={onClose}
                className="block rounded-lg px-2 py-2 text-lg font-medium text-navy hover:bg-navy-50 focus-ring-light"
              >
                {link.label}
              </Link>
            </li>
          ))}
          <li className="pt-4">
            <Link
              href="/book"
              onClick={onClose}
              className="inline-flex w-full items-center justify-center rounded-full bg-brand px-6 py-3 text-sm font-semibold text-navy hover:bg-brand-600 focus-ring-light"
            >
              {ctaLabel}
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
