import Image from "next/image";
import { cn } from "@/lib/utils";

interface BrandIconProps {
  className?: string;
  variant?: "green" | "navy" | "white";
}

const iconPaths = {
  green: "/logos/Assured Logo - Icon Green.png",
  navy: "/logos/Assured Logo - Icon Navy.png",
  white: "/logos/Assured Logo - Icon White.png",
};

export function BrandIcon({ className, variant = "green" }: BrandIconProps) {
  return (
    <Image
      src={iconPaths[variant]}
      alt=""
      width={24}
      height={24}
      className={cn("h-6 w-6 shrink-0", className)}
      aria-hidden
    />
  );
}

interface IconPatternProps {
  className?: string;
  opacity?: number;
}

export function IconPattern({ className, opacity = 0.05 }: IconPatternProps) {
  return (
    <div
      className={cn("pointer-events-none absolute inset-0 icon-pattern", className)}
      style={{ opacity }}
      aria-hidden
    />
  );
}
