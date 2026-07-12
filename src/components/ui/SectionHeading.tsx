import { type ReactNode } from "react";
import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  kicker?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  light?: boolean;
  className?: string;
  children?: ReactNode;
}

export function SectionHeading({
  kicker,
  title,
  description,
  align = "left",
  light = false,
  className,
  children,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        align === "center" && "text-center",
        "max-w-3xl",
        align === "center" && "mx-auto",
        className,
      )}
    >
      {kicker && (
        <p
          className={cn(
            "mb-3 text-xs font-semibold uppercase tracking-[0.2em]",
            light ? "text-brand" : "text-brand-600",
          )}
        >
          {kicker}
        </p>
      )}
      <h2
        className={cn(
          "text-3xl font-bold tracking-tight md:text-4xl",
          light ? "text-white" : "text-navy",
        )}
      >
        {title}
      </h2>
      {description && (
        <p
          className={cn(
            "mt-4 text-lg leading-relaxed",
            light ? "text-white/80" : "text-slate-600",
          )}
        >
          {description}
        </p>
      )}
      {children}
    </div>
  );
}
