import { Phone, MessageCircle } from "lucide-react";

export function TopBar() {
  return (
    <div className="bg-surface border-b border-border text-xs">
      <div className="mx-auto flex max-w-7xl items-center justify-center gap-4 px-4 py-2">
        
          href="tel:4079635157"
          className="inline-flex items-center gap-2 text-primary transition-colors hover:text-primary-hover"
        >
          <Phone className="h-3.5 w-3.5" />
          407-963-5157
        </a>
        <span className="text-muted-foreground">|</span>
        
          href="https://wa.me/14079635157"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-green-500 transition-colors hover:text-green-400"
        >
          <MessageCircle className="h-3.5 w-3.5" />
          WhatsApp
        </a>
      </div>
    </div>
  );
}
