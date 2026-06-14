import { Phone, MessageCircle, Mail } from "lucide-react";

export function Contact() {
  return (
    <section id="contact" className="bg-surface/40 py-20">
      <div className="mx-auto max-w-6xl px-4">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold text-foreground sm:text-4xl">Get In Touch</h2>
          <p className="mt-3 text-muted-foreground">
            Questions or special requests? We're happy to help.
          </p>
        </div>

        <div className="mx-auto mt-12 max-w-2xl">
          <div className="rounded-2xl border border-border bg-surface-2 p-7">
            <h3 className="text-lg font-semibold text-foreground">Contact Info</h3>
            <div className="mt-6 space-y-5">
              <a
                href="tel:4079635157"
                className="flex items-start gap-3 text-foreground transition-colors hover:text-primary"
              >
                <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <Phone className="h-5 w-5" />
                </span>
                <span>
                  <span className="block text-xs text-muted-foreground">Call us</span>
                  <span className="text-base font-semibold">407-963-5157</span>
                </span>
              </a>
              <a
                href="https://wa.me/14079635157"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-3 text-foreground transition-colors hover:text-primary"
              >
                <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <MessageCircle className="h-5 w-5" />
                </span>
                <span>
                  <span className="block text-xs text-muted-foreground">WhatsApp us</span>
                  <span className="text-base font-semibold">407-963-5157</span>
                </span>
              </a>
              <a
                href="mailto:Denttech926@gmail.com"
                className="flex items-start gap-3 text-foreground transition-colors hover:text-primary"
              >
                <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <Mail className="h-5 w-5" />
                </span>
                <span>
                  <span className="block text-xs text-muted-foreground">Email us</span>
                  <span className="text-base font-semibold">Denttech926@gmail.com</span>
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
