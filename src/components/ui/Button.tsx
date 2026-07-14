import { type ReactNode } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface ButtonProps {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "md" | "lg";
  className?: string;
  external?: boolean;
  "aria-label"?: string;
}

export function Button({
  href,
  children,
  variant = "primary",
  size = "md",
  className,
  external,
  "aria-label": ariaLabel,
}: ButtonProps) {
  const base =
    "group inline-flex items-center justify-center gap-2 rounded-full font-semibold tracking-tight transition-all duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 active:scale-[0.98]";

  const sizes = {
    md: "px-6 py-3 text-sm",
    lg: "px-8 py-3.5 text-base",
  };

  const variants = {
    primary:
      "bg-brand text-navy hover:bg-brand-600 focus-visible:outline-brand",
    secondary:
      "bg-navy text-white hover:bg-navy-900 focus-visible:outline-navy",
    outline:
      "border border-navy/20 bg-transparent text-navy hover:border-navy hover:bg-navy hover:text-white focus-visible:outline-navy",
    ghost:
      "bg-transparent text-navy hover:bg-navy-50 focus-visible:outline-navy",
  };

  const classes = cn(base, sizes[size], variants[variant], className);

  if (external) {
    return (
      <a
        href={href}
        className={classes}
        aria-label={ariaLabel}
        target={
          href.startsWith("tel:") || href.startsWith("mailto:")
            ? undefined
            : "_blank"
        }
        rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
      >
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={classes} aria-label={ariaLabel}>
      {children}
    </Link>
  );
}
