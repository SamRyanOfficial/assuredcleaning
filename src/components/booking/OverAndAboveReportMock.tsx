import Image from "next/image";
import { overAndAboveReport } from "@/content/over-and-above";
import { site } from "@/content/site";
import { IconPattern } from "@/components/ui/BrandIcon";
import { cn } from "@/lib/utils";

interface OverAndAboveReportMockProps {
  compact?: boolean;
}

export function OverAndAboveReportMock({
  compact = false,
}: OverAndAboveReportMockProps) {
  return (
    <div
      className={cn(
        "overflow-hidden rounded-2xl bg-white shadow-lg",
        compact && "text-sm",
      )}
    >
      <div className="relative bg-navy px-5 py-4 text-white md:px-6">
        <IconPattern opacity={0.08} />
        <div className="relative flex items-center justify-between gap-4">
          <Image
            src="/logos/Assured Logo - Primary Inverted.png"
            alt={site.name}
            width={140}
            height={36}
            className="h-8 w-auto"
          />
          <div className="text-right">
            <p className="text-xs font-semibold uppercase tracking-wider text-brand">
              Over & Above
            </p>
            <p className="text-sm font-bold uppercase">Cleaning Report</p>
          </div>
        </div>
      </div>

      <div className="space-y-4 p-5 md:p-6">
        <div className="grid grid-cols-2 gap-3 text-xs md:grid-cols-3 md:text-sm">
          <div>
            <p className="font-semibold text-navy">Client</p>
            <p className="text-slate-500">—</p>
          </div>
          <div>
            <p className="font-semibold text-navy">Date</p>
            <p className="text-slate-600">{overAndAboveReport.date}</p>
          </div>
          <div className="col-span-2 md:col-span-1">
            <p className="font-semibold text-navy">Location</p>
            <p className="text-slate-600">{overAndAboveReport.location}</p>
          </div>
        </div>

        <div>
          <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-brand">
            Additional Care & Maintenance Notes
          </p>
          <p className="font-script text-base leading-relaxed text-slate-700 md:text-lg">
            {overAndAboveReport.notes}
          </p>
        </div>

        <div className="grid grid-cols-2 gap-3">
          <div className="relative overflow-hidden rounded-xl">
            <span className="absolute left-2 top-2 z-10 rounded bg-navy px-2 py-0.5 text-xs font-semibold text-white">
              Before
            </span>
            <Image
              src={overAndAboveReport.beforeImage}
              alt="Before — scuff marks on commercial wall in Papamoa"
              width={400}
              height={300}
              className="aspect-[4/3] w-full object-cover"
            />
          </div>
          <div className="relative overflow-hidden rounded-xl">
            <span className="absolute left-2 top-2 z-10 rounded bg-brand px-2 py-0.5 text-xs font-semibold text-navy">
              After
            </span>
            <Image
              src={overAndAboveReport.afterImage}
              alt="After — wall restored by Assured Cleaning Services"
              width={400}
              height={300}
              className="aspect-[4/3] w-full object-cover"
            />
          </div>
        </div>

        <div className="rounded-xl border border-slate-100 bg-navy-50 p-4">
          <p className="mb-1 flex items-center gap-2 text-sm font-semibold text-navy">
            <span className="text-brand" aria-hidden>
              ★
            </span>
            Outcome
          </p>
          <p className="text-sm leading-relaxed text-slate-600">
            {overAndAboveReport.outcome}
          </p>
        </div>
      </div>
    </div>
  );
}
