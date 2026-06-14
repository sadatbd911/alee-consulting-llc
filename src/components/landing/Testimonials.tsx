import { useEffect, useState } from "react";
import { Star } from "lucide-react";

const items = [
  {
    name: "Sarah M.",
    text: "Absolutely amazing service! My home has never been this clean. Highly recommend!",
  },
  {
    name: "James T.",
    text: "They cleaned our office every week and it's always spotless. Professional and reliable.",
  },
  {
    name: "Linda R.",
    text: "The deep cleaning before our move was incredible. Worth every penny!",
  },
  {
    name: "Carlos V.",
    text: "Fast, friendly, and thorough. I've been on the weekly plan for 3 months now.",
  },
];

export function Testimonials() {
  const [idx, setIdx] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setIdx((i) => (i + 1) % items.length), 5000);
    return () => clearInterval(t);
  }, []);

  return (
    <section className="py-20">
      <div className="mx-auto max-w-4xl px-4">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold text-foreground sm:text-4xl">What Our Clients Say</h2>
          <p className="mt-3 text-muted-foreground">
            Real reviews from homes and businesses we serve.
          </p>
        </div>

        <div className="relative mt-12 overflow-hidden">
          <div
            className="flex transition-transform duration-700 ease-out"
            style={{ transform: `translateX(-${idx * 100}%)` }}
          >
            {items.map((t) => (
              <div key={t.name} className="w-full shrink-0 px-2">
                <div className="rounded-2xl border-l-4 border-primary bg-surface-2 p-7 shadow-sm">
                  <div className="flex gap-1">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="mt-4 text-base italic text-muted-foreground">"{t.text}"</p>
                  <p className="mt-4 text-sm font-semibold text-foreground">— {t.name}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-6 flex justify-center gap-2">
            {items.map((_, i) => (
              <button
                key={i}
                aria-label={`Go to testimonial ${i + 1}`}
                onClick={() => setIdx(i)}
                className={`h-2 rounded-full transition-all ${
                  i === idx ? "w-6 bg-primary" : "w-2 bg-border hover:bg-muted-foreground"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
