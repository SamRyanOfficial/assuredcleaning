import Link from "next/link";
import { ContentCard } from "@/components/ui/ContentCard";
import { type PremisesIconType } from "@/components/ui/PremisesIcon";

interface ServiceCardProps {
  href: string;
  icon: PremisesIconType;
  title: string;
  description: string;
  layout?: "inline" | "stacked";
}

export function ServiceCard({
  href,
  icon,
  title,
  description,
  layout,
}: ServiceCardProps) {
  return (
    <Link
      href={href}
      className="group block h-full rounded-[var(--radius-card)] focus-ring-light"
    >
      <ContentCard
        icon={icon}
        title={title}
        description={description}
        layout={layout}
      />
    </Link>
  );
}
