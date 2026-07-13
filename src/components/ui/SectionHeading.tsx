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
        "max-w-2xl",
        align === "center" && "mx-auto text-center",
        className,
      )}
    >
      {kicker && (
        <p
          className={cn(
            "mb-4 text-[0.6875rem] font-semibold uppercase tracking-[0.22em]",
            light ? "text-brand" : "text-brand-600",
          )}
        >
          {kicker}
        </p>
      )}
      <h2
        className={cn(
          "text-balance text-3xl font-bold leading-[1.15] tracking-tight md:text-4xl lg:text-[2.75rem]",
          light ? "text-white" : "text-navy",
        )}
      >
        {title}
      </h2>
      {description && (
        <p
          className={cn(
            "mt-5 text-pretty text-base leading-relaxed md:text-lg",
            light ? "text-white/75" : "text-slate-600",
            align === "center" ? "mx-auto max-w-xl" : "max-w-xl",
          )}
        >
          {description}
        </p>
      )}
      {children}
    </div>
  );
}
