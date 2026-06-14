import logoAsset from "@/assets/alee-logo.png";

const links = [
  { href: "#services", label: "Services" },
  { href: "#pricing", label: "Pricing" },
  { href: "#book", label: "Book Now" },
  { href: "#contact", label: "Contact" },
];

export function Footer() {
  return (
    <footer className="border-t-2 border-primary/40 bg-surface">
      <div className="mx-auto grid max-w-7xl gap-8 px-4 py-12 md:grid-cols-3">
        <div>
          <img
            src={logoAsset}
            alt="Alee Consulting LLC"
            className="h-12 w-auto"
            loading="lazy"
          />
          <p className="mt-3 text-sm text-muted-foreground">We Clean, You Relax.</p>
        </div>

        <div>
          <h4 className="text-sm font-semibold text-foreground">Quick Links</h4>
          <ul className="mt-3 space-y-2 text-sm">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  className="text-muted-foreground transition-colors hover:text-primary"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold text-foreground">Contact</h4>
          <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
            <li>
              <a href="tel:4079635157" className="hover:text-primary inline-flex items-center gap-1.5">
  407-963-5157
</a>

  href="https://wa.me/14079635157"
  target="_blank"
  rel="noopener noreferrer"
  className="hover:text-green-400 text-green-500 inline-flex items-center gap-1.5"
>
  WhatsApp
              </a>
            </li>
            <li>
              <a href="mailto:Denttech926@gmail.com" className="hover:text-primary">
                Denttech926@gmail.com
              </a>
            </li>
            
            
          </ul>
        </div>
      </div>
      <div className="border-t border-border">
        <div className="mx-auto max-w-7xl px-4 py-5 text-center text-xs text-muted-foreground">
          © 2026 Alee Consulting LLC. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
