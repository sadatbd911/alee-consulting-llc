export type PlanKey = "daily" | "weekly" | "monthly";

export const PRICING: Record<
  PlanKey,
  { name: string; price: number | string; period: string; displayPrice: string; webhookPrice: number | string }
> = {
  daily: {
    name: "Daily Cleaning",
    price: 75,
    period: "day",
    displayPrice: "$75",
    webhookPrice: 75,
  },
  weekly: {
    name: "Weekly Cleaning",
    price: "Contact Us",
    period: "week",
    displayPrice: "Contact Us for a Free Estimate",
    webhookPrice: "Contact us weekly",
  },
  monthly: {
    name: "Monthly Cleaning",
    price: "Contact Us",
    period: "month",
    displayPrice: "Contact Us for a Free Estimate",
    webhookPrice: "Contact us monthly",
  },
};

export const SERVICE_LEVEL_PRICING = {
  standard: { name: "Standard Cleaning", rate: 0.15, unit: "sq ft" },
  deep: { name: "Deep Cleaning", rate: 0.25, unit: "sq ft" },
};
