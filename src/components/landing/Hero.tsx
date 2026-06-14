import { ArrowRight, Calendar } from "lucide-react";
import heroImage from "@/assets/hero-clean.jpg.asset.json";

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      <div className="hero-glow absolute inset-0 -z-10" />
      <div className="mx-auto flex max-w-5xl flex-col items-center px-4 py-24 text-center sm:py-32">
        <span className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-surface-2 px-3 py-1 text-xs text-muted-foreground">
          <span className="h-1.5 w-1.5 rounded-full bg-primary" />
          Trusted cleaning service in Clermont, FL
        </span>
        <h1 className="text-balance text-4xl font-bold leading-tight text-foreground sm:text-5xl md:text-6xl">
          We Clean, <span className="text-gradient-green">You Relax</span>
        </h1>
        <p className="mt-5 max-w-xl text-base text-muted-foreground sm:text-lg">
          We make your space clean, fresh, and stress-free.
        </p>
        <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row">
          <a
            href="#book"
            className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-bold text-primary-foreground shadow-lg shadow-primary/20 transition-all hover:bg-primary-hover hover:shadow-primary/30 active:scale-[0.98]"
          >
            Get a Free Quote
            <ArrowRight className="h-4 w-4" />
          </a>
          <a
            href="#pricing"
            className="inline-flex items-center gap-2 rounded-full border border-primary px-6 py-3 text-sm font-semibold text-foreground transition-colors hover:bg-primary/10 active:scale-[0.98]"
          >
            <Calendar className="h-4 w-4" />
            Book Now
          </a>
        </div>
        <div className="relative mt-12 w-full max-w-4xl overflow-hidden rounded-2xl border border-border shadow-2xl shadow-primary/10">
          <img
            src={heroImage.url}
            alt="Pressure washing revealing the word CLEAN on pavers"
            width={960}
            height={672}
            className="h-56 w-full object-cover sm:h-80 md:h-[28rem] lg:h-[32rem]"
          />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent" />
        </div>
      </div>
    </section>
  );
}
