import { Phone } from "lucide-react";

export function TopBar() {
  return (
    <div className="bg-surface border-b border-border text-xs">
      <div className="mx-auto flex max-w-7xl items-center justify-center px-4 py-2">
        <a
          href="tel:4079635157"
          className="inline-flex items-center gap-2 text-primary transition-colors hover:text-primary-hover"
        >
          <Phone className="h-3.5 w-3.5" />
          407-963-5157
        </a>
      </div>
    </div>
  );
}
