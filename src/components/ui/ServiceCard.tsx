import Link from "next/link";
import { ContentCard } from "@/components/ui/ContentCard";
import { type PremisesIconType } from "@/components/ui/PremisesIcon";

interface ServiceCardProps {
  href: string;
  icon: PremisesIconType;
  title: string;
  description: string;
}

export function ServiceCard({
  href,
  icon,
  title,
  description,
}: ServiceCardProps) {
  return (
    <Link
      href={href}
      className="group block h-full rounded-[var(--radius-card)] focus-ring-light"
    >
      <ContentCard icon={icon} title={title} description={description} />
    </Link>
  );
}
