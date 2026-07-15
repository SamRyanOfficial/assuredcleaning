import Image from "next/image";
import { cn } from "@/lib/utils";

const reportImage = {
  src: "/images/reports/example-report-desktop.png",
  width: 713,
  height: 1024,
  alt: "Example Over and Above Cleaning Report from Assured Cleaning Services",
} as const;

interface OverAndAboveReportExampleProps {
  className?: string;
}

export function OverAndAboveReportExample({
  className,
}: OverAndAboveReportExampleProps) {
  return (
    <div
      className={cn(
        "overflow-hidden rounded-[var(--radius-media)] shadow-[var(--shadow-lift)] ring-1 ring-navy/8",
        className,
      )}
    >
      <Image
        src={reportImage.src}
        alt={reportImage.alt}
        width={reportImage.width}
        height={reportImage.height}
        className="h-auto w-full"
        sizes="(max-width: 768px) 100vw, 768px"
        priority
      />
    </div>
  );
}
