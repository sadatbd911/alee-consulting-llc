import { createFileRoute } from "@tanstack/react-router";
import { TopBar } from "@/components/landing/TopBar";
import { Navbar } from "@/components/landing/Navbar";
import { Hero } from "@/components/landing/Hero";
import { Highlights } from "@/components/landing/Highlights";
import { Services } from "@/components/landing/Services";
import { Pricing } from "@/components/landing/Pricing";
import { BookingForm } from "@/components/landing/BookingForm";

import { Testimonials } from "@/components/landing/Testimonials";
import { Contact } from "@/components/landing/Contact";
import { Footer } from "@/components/landing/Footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Alee Consulting LLC | Professional Cleaning Services" },
      {
        name: "description",
        content:
          "Professional home and office cleaning services in Clermont, FL. Residential, commercial, deep cleaning, and weekly or monthly plans.",
      },
      {
        property: "og:title",
        content: "Alee Consulting LLC | Professional Cleaning Services",
      },
      {
        property: "og:description",
        content:
          "Professional home and office cleaning services in Clermont, FL. Book a free quote today.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
    ],
    links: [
      { rel: "canonical", href: "/" },
      {
        rel: "preconnect",
        href: "https://fonts.googleapis.com",
      },
      {
        rel: "preconnect",
        href: "https://fonts.gstatic.com",
        crossOrigin: "anonymous",
      },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <TopBar />
      <Navbar />
      <Hero />
      <Highlights />
      <Services />
      <Pricing />
      <BookingForm />
      
      <Testimonials />
      <Contact />
      <Footer />
    </main>
  );
}
