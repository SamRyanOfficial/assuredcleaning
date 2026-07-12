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
        "rounded-2xl border border-slate-100 bg-white p-6 shadow-sm",
        hover && "transition-transform duration-300 hover:-translate-y-1 hover:shadow-md",
        className,
      )}
    >
      {children}
    </div>
  );
}
