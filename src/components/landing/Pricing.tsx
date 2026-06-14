import { Check, Sparkles, SprayCan } from "lucide-react";
import { useReveal } from "@/hooks/use-reveal";
import { PRICING, SERVICE_LEVEL_PRICING } from "./pricing-data";

const plans = [
  {
    name: PRICING.daily.name,
    displayPrice: PRICING.daily.displayPrice,
    period: PRICING.daily.period,
    showPeriod: true,
    benefits: [
      "Ideal for high-traffic spaces",
      "Consistent freshness every day",
      "Flexible scheduling",
    ],
    highlighted: false,
  },
  {
    name: PRICING.weekly.name,
    displayPrice: PRICING.weekly.displayPrice,
    period: PRICING.weekly.period,
    showPeriod: false,
    benefits: [
      "Perfect for homes & offices",
      "Deep clean every week",
      "Priority booking",
      "Best value for most clients",
    ],
    highlighted: true,
  },
  {
    name: PRICING.monthly.name,
    displayPrice: PRICING.monthly.displayPrice,
    period: PRICING.monthly.period,
    showPeriod: false,
    benefits: [
      "Budget-friendly option",
      "Full-service monthly clean",
      "Great for low-traffic spaces",
    ],
    highlighted: false,
  },
];

export function Pricing() {
  const ref = useReveal<HTMLDivElement>();
  return (
    <section id="pricing" className="bg-surface/40 py-20">
      <div className="mx-auto max-w-7xl px-4">
        <div ref={ref} className="fade-in-up mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold text-foreground sm:text-4xl">
            Simple, Transparent Pricing
          </h2>
          <p className="mt-3 text-muted-foreground">
            Choose the cadence that fits your space. Cancel or change anytime.
          </p>
        </div>

        <div className="mt-14 grid items-stretch gap-6 lg:grid-cols-3">
          {plans.map((p) => (
            <div
              key={p.name}
              className={`relative flex flex-col rounded-2xl border bg-surface-2 p-7 transition-all ${
                p.highlighted
                  ? "border-primary shadow-xl shadow-primary/10 lg:scale-[1.04]"
                  : "border-border hover:border-primary/40"
              }`}
            >
              {p.highlighted && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-primary px-3 py-1 text-xs font-bold text-primary-foreground">
                  Most Popular
                </span>
              )}
              <h3 className="text-xl font-bold text-foreground">{p.name}</h3>
              <div className="mt-3 flex items-baseline gap-1">
                {p.showPeriod ? (
                  <>
                    <span className="text-4xl font-extrabold text-foreground">{p.displayPrice}</span>
                    <span className="text-sm text-muted-foreground">/{p.period}</span>
                  </>
                ) : (
                  <span className="text-xl font-bold text-foreground">{p.displayPrice}</span>
                )}
              </div>
              <ul className="mt-5 space-y-3">
                {p.benefits.map((b) => (
                  <li key={b} className="flex items-start gap-2.5 text-sm text-muted-foreground">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
              <a
                href="#book"
                className={`mt-7 inline-flex items-center justify-center rounded-full px-5 py-2.5 text-sm font-semibold transition-colors ${
                  p.highlighted
                    ? "bg-primary text-primary-foreground hover:bg-primary-hover"
                    : "border border-primary text-foreground hover:bg-primary/10"
                }`}
              >
                Choose Plan
              </a>
            </div>
          ))}
        </div>

        {/* Service level per-sqft pricing */}
        <div className="mt-16">
          <div className="mx-auto max-w-2xl text-center">
            <h3 className="text-2xl font-bold text-foreground sm:text-3xl">
              Per Square Foot Pricing
            </h3>
            <p className="mt-2 text-muted-foreground">
              Pay only for the space you need cleaned.
            </p>
          </div>
          <div className="mx-auto mt-8 grid max-w-5xl gap-5 sm:grid-cols-3">
            <div className="group relative overflow-hidden rounded-2xl border border-border bg-surface-2 p-7 transition-all hover:-translate-y-1 hover:border-primary/60">
              <div className="flex items-center gap-3">
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <SprayCan className="h-5 w-5" />
                </span>
                <h4 className="text-lg font-semibold text-foreground">
                  {SERVICE_LEVEL_PRICING.standard.name}
                </h4>
              </div>
              <div className="mt-5 flex items-baseline gap-1">
                <span className="text-4xl font-extrabold text-foreground">
                  ${SERVICE_LEVEL_PRICING.standard.rate.toFixed(2)}
                </span>
                <span className="text-sm text-muted-foreground">/ sq ft</span>
              </div>
              <p className="mt-3 text-sm text-muted-foreground">
                Routine cleaning that keeps your space fresh, tidy, and inviting.
              </p>
            </div>

            <div className="group relative overflow-hidden rounded-2xl border border-primary/60 bg-surface-2 p-7 shadow-lg shadow-primary/10 transition-all hover:-translate-y-1">
              <div className="flex items-center gap-3">
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <Sparkles className="h-5 w-5" />
                </span>
                <h4 className="text-lg font-semibold text-foreground">
                  {SERVICE_LEVEL_PRICING.deep.name}
                </h4>
              </div>
              <div className="mt-5 flex items-baseline gap-1">
                <span className="text-4xl font-extrabold text-foreground">
                  ${SERVICE_LEVEL_PRICING.deep.rate.toFixed(2)}
                </span>
                <span className="text-sm text-muted-foreground">/ sq ft</span>
              </div>
              <p className="mt-3 text-sm text-muted-foreground">
                Top-to-bottom sanitization, detailed scrubbing, and full restoration.
              </p>
            </div>
            <div className="group relative overflow-hidden rounded-2xl border border-border bg-surface-2 p-7 transition-all hover:-translate-y-1 hover:border-primary/60">
              <div className="flex items-center gap-3">
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <Sparkles className="h-5 w-5" />
                </span>
                <h4 className="text-lg font-semibold text-foreground">
                  Bundle Cleaning
                </h4>
              </div>
              <div className="mt-5 flex items-baseline gap-1">
                <span className="text-xl font-bold text-foreground">
                  Ask for a Bundle Price
                </span>
                <span className="text-sm text-muted-foreground">/ sq ft</span>
              </div>
              <p className="mt-3 text-sm text-muted-foreground">
                Have multiple offices or locations? Bundle them together for a custom rate — more spaces, better savings.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
