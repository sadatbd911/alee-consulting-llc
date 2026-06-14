import { Phone } from "lucide-react";

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
        <span className="text-border">|</span>
        
          href="https://wa.me/14079635157"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-green-500 transition-colors hover:text-green-400"
        >
          <svg className="h-3.5 w-3.5" viewBox="0 0 24 24" fill="currentColor">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
            <path d="M12 0C5.373 0 0 5.373 0 12c0 2.123.554 4.234 1.606 6.09L0 24l6.083-1.584A11.946 11.946 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.818 9.818 0 01-5.006-1.371l-.36-.214-3.722.968.993-3.62-.235-.372A9.818 9.818 0 1112 21.818z"/>
          </svg>
          WhatsApp
        </a>
      </div>
    </div>
  );
}
