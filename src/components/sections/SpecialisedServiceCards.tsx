import { specialisedServices } from "@/content/services";
import { AnimateOnScroll } from "@/components/ui/AnimateOnScroll";
import { ServiceCard } from "@/components/ui/ServiceCard";
import { cn } from "@/lib/utils";

interface SpecialisedServiceCardsProps {
  href?: string;
}

export function SpecialisedServiceCards({
  href = "/services#specialised-cleaning",
}: SpecialisedServiceCardsProps) {
  return (
    <div className="mt-10 grid gap-5 sm:grid-cols-2 md:gap-6 lg:grid-cols-6">
      {specialisedServices.map((service, index) => (
        <AnimateOnScroll
          key={service.id}
          delay={index * 40}
          className={cn("h-full lg:col-span-2", index === 3 && "lg:col-start-2")}
        >
          <ServiceCard
            href={href}
            icon={service.icon}
            title={service.title}
            description={service.description}
            layout="stacked"
          />
        </AnimateOnScroll>
      ))}
    </div>
  );
}
