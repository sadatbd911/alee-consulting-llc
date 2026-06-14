import { ArrowRight } from "lucide-react";
import { useReveal } from "@/hooks/use-reveal";
import homeImg from "@/assets/home-cleaning.jpg";
import officeImg from "@/assets/office-cleaning.jpg";
import eventsImg from "@/assets/special-events-cleaning.jpg";
import driveImg from "@/assets/office-driveway.jpg";

const services = [
  {
    image: homeImg,
    name: "Commercial Cleaning",
    desc: "Reliable commercial cleaning to keep your business spotless.",
  },
  {
    image: officeImg,
    name: "Office Cleaning",
    desc: "Daily or weekly office cleaning that fits your workflow.",
  },
  {
    image: eventsImg,
    name: "Special Events Cleaning",
    desc: "Pre- and post-event cleaning for weddings, parties, and gatherings.",
  },
  {
    image: driveImg,
    name: "Pressure Wash",
    desc: "Professional pressure washing for driveways, parking lots, and walkways.",
  },
];

export function Services() {
  const ref = useReveal<HTMLDivElement>();
  return (
    <section id="services" className="py-20">
      <div className="mx-auto max-w-7xl px-4">
        <div ref={ref} className="fade-in-up mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold text-foreground sm:text-4xl">Our Services</h2>
          <p className="mt-3 text-muted-foreground">
            Reliable cleaning solutions for every space and schedule.
          </p>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {services.map(({ image, name, desc }) => (
            <div
              key={name}
              className="group relative overflow-hidden rounded-2xl border border-border bg-surface-2 transition-all hover:-translate-y-1 hover:border-primary/60"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={image}
                  alt={name}
                  loading="lazy"
                  width={1024}
                  height={768}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <h3 className="text-lg font-semibold text-foreground">{name}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{desc}</p>
                <a
                  href="#book"
                  className="mt-5 inline-flex items-center gap-1.5 rounded-full border border-primary px-3.5 py-1.5 text-xs font-semibold text-primary transition-colors hover:bg-primary hover:text-primary-foreground"
                >
                  Book Now
                  <ArrowRight className="h-3 w-3" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
