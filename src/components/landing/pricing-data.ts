export type PlanKey = "daily" | "weekly" | "monthly";

export const SERVICE_LEVEL_PRICING: Record
  string,
  { amount: number | string; label: string }
> = {
  "Standard Cleaning": { amount: 0.15,                    label: "$0.15/sq ft" },
  "Deep Cleaning":     { amount: 0.25,                    label: "$0.25/sq ft" },
  "Bundle Cleaning":   { amount: "Ask for a Bundle Price", label: "Ask for a Bundle Price" },
};

export const PRICING: Record
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
