import { type ReactNode } from "react";
import { cn } from "@/lib/utils";

interface SectionTitleProps {
  children: ReactNode;
  subtitle?: string;
  light?: boolean;
  align?: "left" | "center";
  className?: string;
}

export function SectionTitle({
  children,
  subtitle,
  light = false,
  align = "left",
  className,
}: SectionTitleProps) {
  return (
    <div
      className={cn(
        "max-w-2xl",
        align === "center" && "mx-auto text-center",
        className,
      )}
    >
      <div
        className={cn(
          "mb-4 h-1 w-12 rounded-full bg-brand",
          align === "center" && "mx-auto",
        )}
        aria-hidden
      />
      <h2
        className={cn(
          "text-balance text-3xl font-bold leading-[1.06] tracking-tight md:text-4xl lg:text-[2.75rem]",
          light ? "text-white" : "text-navy",
        )}
      >
        {children}
      </h2>
      {subtitle && (
        <p
          className={cn(
            "mt-3 text-base leading-relaxed md:text-lg",
            light ? "text-white/70" : "text-slate-500",
            align === "center" && "mx-auto max-w-xl",
          )}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
