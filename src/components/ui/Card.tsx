import { type ReactNode } from "react";
import { cn } from "@/lib/utils";

interface CardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
}

export function Card({ children, className, hover = true }: CardProps) {
  return (
    <div
      className={cn(
        "rounded-[var(--radius-card)] border border-navy/6 bg-white p-6 shadow-[var(--shadow-soft)] md:p-7",
        hover &&
          "transition-all duration-300 hover:-translate-y-1 hover:border-navy/10 hover:shadow-[var(--shadow-lift)]",
        className,
      )}
    >
      {children}
    </div>
  );
}
