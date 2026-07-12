import { site } from "@/content/site";

export function TrustBar() {
  return (
    <section className="border-b border-slate-100 bg-white py-4">
      <div className="mx-auto max-w-6xl px-5 text-center md:px-8">
        <p className="text-sm font-medium text-slate-600 md:text-base">
          Proudly serving{" "}
          <span className="font-semibold text-navy">
            {site.serviceAreas.join(" | ")}
          </span>
        </p>
      </div>
    </section>
  );
}
