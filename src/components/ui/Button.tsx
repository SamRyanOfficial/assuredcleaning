import { type ReactNode } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface ButtonProps {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary" | "outline";
  className?: string;
  external?: boolean;
}

export function Button({
  href,
  children,
  variant = "primary",
  className,
  external,
}: ButtonProps) {
  const base =
    "inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2";

  const variants = {
    primary:
      "bg-brand text-navy hover:bg-brand-600 focus-visible:outline-brand",
    secondary:
      "bg-navy text-white hover:bg-navy-900 focus-visible:outline-navy",
    outline:
      "border-2 border-navy text-navy hover:bg-navy hover:text-white focus-visible:outline-navy",
  };

  if (external) {
    return (
      <a
        href={href}
        className={cn(base, variants[variant], className)}
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
    <Link href={href} className={cn(base, variants[variant], className)}>
      {children}
    </Link>
  );
}
