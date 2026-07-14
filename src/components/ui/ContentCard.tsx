import {
  PremisesIcon,
  type PremisesIconType,
} from "@/components/ui/PremisesIcon";
import { cn } from "@/lib/utils";

interface ContentCardProps {
  icon: PremisesIconType;
  title: string;
  description: string;
  className?: string;
}

export function ContentCard({
  icon,
  title,
  description,
  className,
}: ContentCardProps) {
  return (
    <div
      className={cn(
        "group block h-full rounded-[var(--radius-card)] border border-navy/8 bg-navy-50/70 p-5 transition-all duration-300 hover:-translate-y-1 hover:border-brand/35 hover:bg-white hover:shadow-[var(--shadow-soft)] md:p-6",
        className,
      )}
    >
      <div className="mb-3 flex items-center gap-3.5">
        <PremisesIcon
          type={icon}
          className="!h-10 !w-10 shrink-0 transition-transform duration-300 group-hover:scale-110 md:!h-11 md:!w-11"
        />
        <h3 className="text-base font-semibold tracking-tight text-navy transition-colors group-hover:text-brand-600 md:text-lg">
          {title}
        </h3>
      </div>
      <p className="text-sm leading-relaxed text-slate-500">{description}</p>
    </div>
  );
}
