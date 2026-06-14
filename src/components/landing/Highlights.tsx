import { Briefcase, Building2, PartyPopper, PackageCheck, Droplets } from "lucide-react";
import { useReveal } from "@/hooks/use-reveal";

const items = [
  { icon: Briefcase, label: "Commercial Cleaning" },
  { icon: Building2, label: "Office Cleaning" },
  { icon: PartyPopper, label: "Special Events Cleaning" },
  { icon: Droplets, label: "Pressure Washing" },
  { icon: PackageCheck, label: "Move In / Move Out" },
];

export function Highlights() {
  const ref = useReveal<HTMLDivElement>();
  return (
    <section className="border-y border-border bg-surface/40">
      <div className="mx-auto max-w-7xl px-4 py-10">
        <div
          ref={ref}
          className="fade-in-up flex gap-3 overflow-x-auto pb-2 sm:grid sm:grid-cols-3 sm:gap-4 lg:grid-cols-5 lg:overflow-visible"
        >
          {items.map(({ icon: Icon, label }) => (
            <div
              key={label}
              className="flex min-w-[170px] flex-col items-center gap-2 rounded-xl border border-border bg-surface-2 px-4 py-5 text-center transition-colors hover:border-primary/60"
            >
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                <Icon className="h-5 w-5" />
              </span>
              <span className="text-sm font-medium text-foreground">{label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
