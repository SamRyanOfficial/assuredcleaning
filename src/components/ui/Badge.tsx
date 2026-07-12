import { type ReactNode } from "react";
import { cn } from "@/lib/utils";

interface BadgeProps {
  children: ReactNode;
  className?: string;
  variant?: "brand" | "navy" | "white";
}

export function Badge({ children, className, variant = "brand" }: BadgeProps) {
  const variants = {
    brand: "bg-brand-50 text-navy",
    navy: "bg-navy text-white",
    white: "bg-white/10 text-white",
  };

  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-semibold",
        variants[variant],
        className,
      )}
    >
      {children}
    </span>
  );
}
