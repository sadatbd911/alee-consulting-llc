import { useState, type FormEvent } from "react";
import { CheckCircle2, Loader2, AlertCircle, Plus, X } from "lucide-react";
import { PRICING, type PlanKey } from "./pricing-data";

type Status = "idle" | "loading" | "success" | "error";

const inputClass =
  "w-full rounded-lg border border-border bg-background px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground/50 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/40";

type AddressEntry = { address: string; property_size: string };

export function BookingForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [entries, setEntries] = useState<AddressEntry[]>([{ address: "", property_size: "" }]);

  function updateEntry(i: number, field: keyof AddressEntry, value: string) {
    setEntries((prev) => prev.map((e, idx) => (idx === i ? { ...e, [field]: value } : e)));
  }
  function addEntry() {
    setEntries((prev) => [...prev, { address: "", property_size: "" }]);
  }
  function removeEntry(i: number) {
    setEntries((prev) => (prev.length === 1 ? prev : prev.filter((_, idx) => idx !== i)));
  }

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const fd = new FormData(form);
    const rawTime = String(fd.get("preferred_time") || "");
    const formatTime = (t: string) => {
      const [hStr, mStr] = t.split(":");
      if (!hStr || !mStr) return t;
      const h = parseInt(hStr, 10);
      const period = h >= 12 ? "PM" : "AM";
      const h12 = h % 12 === 0 ? 12 : h % 12;
      return `${h12}:${mStr} ${period}`;
    };
    const frequency = String(fd.get("frequency") || "");
    const planKey = frequency.toLowerCase() as PlanKey;
    const plan = PRICING[planKey];
    const cleanedEntries = entries.filter((e) => e.address.trim());
    const isBundle = cleanedEntries.length > 1;
    const totalSize = cleanedEntries.reduce((sum, e) => sum + (parseInt(e.property_size) || 0), 0);

    const payload = {
      name: String(fd.get("name") || ""),
      email: String(fd.get("email") || ""),
      phone: String(fd.get("phone") || ""),
      address: cleanedEntries[0]?.address ?? "",
      addresses: cleanedEntries,
      bundle: isBundle,
      total_property_size: isBundle ? String(totalSize) : (cleanedEntries[0]?.property_size ?? ""),
      service_type: String(fd.get("service_type") || ""),
      service_level: String(fd.get("service_level") || ""),
      frequency,
      preferred_date: String(fd.get("preferred_date") || ""),
      preferred_time: formatTime(rawTime),
      special_requests: String(fd.get("special_requests") || ""),
      plan_name: plan?.name ?? null,
      price: plan?.webhookPrice ?? null,
      price_period: plan?.period ?? null,
      price_formatted: plan
        ? typeof plan.webhookPrice === "number"
          ? `$${plan.webhookPrice}/${plan.period}`
          : `${plan.webhookPrice}`
        : null,
      pricing: {
        daily: { amount: PRICING.daily.webhookPrice, period: PRICING.daily.period },
        weekly: { amount: PRICING.weekly.webhookPrice, period: PRICING.weekly.period },
        monthly: { amount: PRICING.monthly.webhookPrice, period: PRICING.monthly.period },
      },
      submitted_at: new Date().toISOString(),
    };

    const url =
      (import.meta.env.VITE_WEBHOOK_URL as string | undefined) ||
      "https://n8n.srv1106977.hstgr.cloud/webhook-test/cleaning-booking";
    setStatus("loading");
    try {
      if (!url) throw new Error("Missing VITE_WEBHOOK_URL");
      const res = await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (!res.ok) throw new Error("Webhook failed");
      setStatus("success");
      form.reset();
      setEntries([{ address: "", property_size: "" }]);
    } catch {
      setStatus("error");
    }
  }

  return (
    <section id="book" className="py-20">
      <div className="mx-auto max-w-3xl px-4">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold text-foreground sm:text-4xl">Request a Free Estimate</h2>
          <p className="mt-3 text-muted-foreground">
            Tell us what you need. We'll confirm within the same day.
          </p>
        </div>

        <div className="mt-10 rounded-2xl border border-primary/30 bg-surface-2 p-6 sm:p-8">
          {status === "success" ? (
            <div className="flex flex-col items-center py-10 text-center">
              <CheckCircle2 className="h-14 w-14 text-primary" />
              <h3 className="mt-4 text-xl font-semibold text-foreground">Booking Received! 🎉</h3>
              <p className="mt-2 max-w-md text-sm text-muted-foreground">
                Check your email — we've sent a payment link to complete your booking.
              </p>
              <button
                onClick={() => setStatus("idle")}
                className="mt-6 rounded-full border border-primary px-5 py-2 text-sm font-semibold text-primary hover:bg-primary/10"
              >
                Submit another request
              </button>
            </div>
          ) : (
            <form onSubmit={onSubmit} className="space-y-4">
              {status === "error" && (
                <div className="flex items-start gap-2 rounded-lg border border-destructive/50 bg-destructive/10 px-4 py-3 text-sm text-destructive-foreground">
                  <AlertCircle className="mt-0.5 h-4 w-4 text-destructive" />
                  <span>
                    Something went wrong. Please call us at{" "}
                    <a href="tel:4079635157" className="font-semibold underline">
                      407-963-5157
                    </a>
                    .
                  </span>
                </div>
              )}

              <div className="grid gap-4 sm:grid-cols-2">
                <Field label="Full Name / Business Name">
                  <input name="name" required className={inputClass} placeholder="Jane Doe / Acme Inc." />
                </Field>
                <Field label="Email Address">
                  <input name="email" type="email" required className={inputClass} placeholder="jane@example.com" />
                </Field>
              </div>

              <Field label="Phone Number">
                <input name="phone" type="tel" required className={inputClass} placeholder="(407) 555-0123" />
              </Field>

              {/* Address + Property Size per entry */}
              <div>
                <span className="mb-1.5 block text-xs font-medium text-muted-foreground">
                  Address{entries.length > 1 ? "es" : ""} & Property Size
                </span>
                <div className="space-y-3">
                  {entries.map((entry, i) => (
                    <div key={i} className="flex flex-col gap-2 sm:flex-row sm:items-start">
                      <input
                        value={entry.address}
                        onChange={(e) => updateEntry(i, "address", e.target.value)}
                        required
                        className={inputClass}
                        placeholder={i === 0 ? "123 Main St, Clermont, FL" : `Office address #${i + 1}`}
                      />
                      <input
                        value={entry.property_size}
                        onChange={(e) => updateEntry(i, "property_size", e.target.value)}
                        className={`${inputClass} sm:w-36 shrink-0`}
                        placeholder="Size (sft)"
                      />
                      {entries.length > 1 && (
                        <button
                          type="button"
                          onClick={() => removeEntry(i)}
                          aria-label="Remove"
                          className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-border text-muted-foreground hover:border-destructive hover:text-destructive"
                        >
                          <X className="h-4 w-4" />
                        </button>
                      )}
                    </div>
                  ))}
                </div>
                <button
                  type="button"
                  onClick={addEntry}
                  className="mt-2 inline-flex items-center gap-1.5 rounded-full border border-primary/60 px-3 py-1.5 text-xs font-semibold text-primary hover:bg-primary/10"
                >
                  <Plus className="h-3.5 w-3.5" />
                  Add another address
                </button>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <Field label="Service Type">
                  <select name="service_type" required className={inputClass} defaultValue="">
                    <option value="" disabled>Select a service</option>
                    <option>Residential</option>
                    <option>Commercial</option>
                    <option>Special Events</option>
                    <option>Office Cleaning</option>
                    <option>Move In / Move Out</option>
                  </select>
                </Field>
                <Field label="Service Level">
                  <select name="service_level" required className={inputClass} defaultValue="">
                    <option value="" disabled>Select service level</option>
                    <option>Standard Cleaning</option>
                    <option>Deep Cleaning</option>
                    <option>Bundle Cleaning</option>
                  </select>
                </Field>
              </div>

              <Field label="Cleaning Frequency">
                <select name="frequency" required className={inputClass} defaultValue="">
                  <option value="" disabled>Select frequency</option>
                  <option>One-Time</option>
                  <option>Daily</option>
                  <option>Weekly</option>
                  <option>Monthly</option>
                </select>
              </Field>

              <div className="grid gap-4 sm:grid-cols-2">
                <Field label="Preferred Date">
                  <input name="preferred_date" type="date" required className={inputClass} />
                </Field>
                <Field label="Preferred Time">
                  <input name="preferred_time" type="time" required className={inputClass} />
                </Field>
              </div>

              <Field label="Special Requests">
                <textarea
                  name="special_requests"
                  rows={4}
                  className={inputClass}
                  placeholder="Any specific instructions, areas to focus on, pets, access details, etc."
                />
              </Field>

              <button
                type="submit"
                disabled={status === "loading"}
                className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-bold text-primary-foreground transition-colors hover:bg-primary-hover disabled:opacity-70"
              >
                {status === "loading" ? (
                  <>
                    <Loader2 className="h-4 w-4 animate-spin" />
                    Sending...
                  </>
                ) : (
                  "Submit"
                )}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-xs font-medium text-muted-foreground">{label}</span>
      {children}
    </label>
  );
}
