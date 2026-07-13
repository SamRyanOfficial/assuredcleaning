import { Card } from "@/components/ui/Card";
import { cn } from "@/lib/utils";

interface FeatureCardProps {
  title: string;
  description: string;
  index?: number;
  badge?: "number" | "accent";
  hover?: boolean;
  className?: string;
}

export function FeatureCard({
  title,
  description,
  index,
  badge = "accent",
  hover = false,
  className,
}: FeatureCardProps) {
  return (
    <Card hover={hover} className={cn("h-full !p-4 md:!p-5", className)}>
      {badge === "number" && index !== undefined && (
        <span className="inline-flex h-6 w-6 items-center justify-center rounded-md bg-brand-50 text-[0.625rem] font-bold tracking-wide text-brand-600">
          {String(index + 1).padStart(2, "0")}
        </span>
      )}
      {badge === "accent" && (
        <div className="h-1 w-8 rounded-full bg-brand" aria-hidden />
      )}
      <h3 className="mt-2.5 text-base font-bold tracking-tight text-navy">
        {title}
      </h3>
      <p className="mt-1.5 text-sm leading-snug text-slate-600">{description}</p>
    </Card>
  );
}
