import { Link } from "@tanstack/react-router";
import { SITE, whatsappLink, DEFAULT_WHATSAPP_MESSAGE } from "@/lib/site";
import { WhatsAppIcon } from "@/components/WhatsAppIcon";

const navLinks = [
  { label: "Home", to: "/" as const },
  { label: "Profiles", to: "/" as const, hash: "#profiles" },
  { label: "Book", to: "/book" as const },
  { label: "Contact", to: "/contact" as const },
];

export function SiteHeader() {
  const whatsappChat = whatsappLink(DEFAULT_WHATSAPP_MESSAGE);

  return (
    <header className="fixed top-0 z-50 w-full backdrop-blur-md bg-background/70 border-b border-primary/20">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Link to="/" className="font-display text-lg md:text-2xl tracking-wide text-gold-gradient leading-tight">
          {SITE.name}
        </Link>
        <nav className="hidden md:flex gap-8 text-sm text-muted-foreground" aria-label="Main navigation">
          {navLinks.map((link) =>
            link.hash ? (
              <a key={link.label} href={`/${link.hash}`} className="hover:text-primary transition">
                {link.label}
              </a>
            ) : (
              <Link key={link.label} to={link.to} className="hover:text-primary transition" activeProps={{ className: "text-primary" }}>
                {link.label}
              </Link>
            ),
          )}
        </nav>
        <div className="flex items-center gap-3">
          <a
            href={whatsappChat}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center w-9 h-9 rounded-full bg-[#25D366] hover:bg-[#25D366]/80 text-white transition shadow-[0_0_15px_-5px_#25D366]"
            aria-label="WhatsApp chat for Jaipur call girls booking"
          >
            <WhatsAppIcon className="w-5 h-5" />
          </a>
          <Link
            to="/book"
            className="rounded-full border border-primary/40 px-4 py-2 text-sm text-primary hover:bg-primary hover:text-primary-foreground transition"
          >
            Book
          </Link>
        </div>
      </div>
    </header>
  );
}
