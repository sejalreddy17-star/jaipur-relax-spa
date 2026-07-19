import { Link } from "@tanstack/react-router";
import { SITE, WHATSAPP_DISPLAY, whatsappLink, DEFAULT_WHATSAPP_MESSAGE } from "@/lib/site";
import { WhatsAppIcon } from "@/components/WhatsAppIcon";

export function SiteFooter() {
  const whatsappChat = whatsappLink(DEFAULT_WHATSAPP_MESSAGE);

  return (
    <footer className="border-t border-border py-12 text-center text-xs text-muted-foreground">
      <div className="mx-auto max-w-7xl px-6">
        <a
          href={whatsappChat}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-[#25D366] hover:bg-[#25D366]/80 text-white transition mb-4 shadow-[0_0_20px_-5px_#25D366]"
          aria-label="WhatsApp contact for Jaipur escorts"
        >
          <WhatsAppIcon className="w-7 h-7" />
        </a>
        <p className="text-sm text-foreground mb-2">{WHATSAPP_DISPLAY}</p>
        <p className="font-display text-lg text-gold-gradient mb-4">{SITE.name}</p>

        <nav className="flex flex-wrap justify-center gap-x-6 gap-y-2 mb-6 text-sm" aria-label="Footer navigation">
          <Link to="/" className="hover:text-primary transition">Home</Link>
          <Link to="/book" className="hover:text-primary transition">Book Call Girls</Link>
          <Link to="/contact" className="hover:text-primary transition">Contact</Link>
          <a href="/#profiles" className="hover:text-primary transition">Escort Profiles</a>
          <a href="/#rates" className="hover:text-primary transition">Rates</a>
        </nav>

        <p className="max-w-2xl mx-auto leading-relaxed mb-4">
          {SITE.name} — #1 platform to book call girls in Jaipur and hire verified Jaipur escort girls.
          Incall & outcall escort service available 24/7 across {SITE.city}, {SITE.state}.
        </p>
        <p>
          © {new Date().getFullYear()} {SITE.name} · Call Girls in Jaipur · Escort Girls Jaipur · All bookings by appointment
        </p>
      </div>
    </footer>
  );
}
