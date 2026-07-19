import { createFileRoute } from "@tanstack/react-router";
import { useState, useEffect } from "react";
import { WhatsAppIcon } from "../components/WhatsAppIcon";

export const Route = createFileRoute("/book")({
  component: Book,
});

function Book() {
  const [whatsappLink, setWhatsappLink] = useState("https://wa.me/917414838654");

  useEffect(() => {
    const savedWhatsapp = localStorage.getItem("whatsappLink");
    if (savedWhatsapp) setWhatsappLink(savedWhatsapp);
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden flex flex-col">
      <header className="w-full backdrop-blur-md bg-background/60 border-b border-border">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
          <a href="/" className="font-display text-2xl tracking-wide text-gold-gradient">Jaipur Relax Spa</a>
          <nav className="hidden md:flex gap-10 text-sm text-muted-foreground">
            <a href="/#services" className="hover:text-primary transition">Services</a>
            <a href="/#sanctuary" className="hover:text-primary transition">Sanctuary</a>
            <a href="/#rituals" className="hover:text-primary transition">Rituals</a>
          </nav>
        </div>
      </header>

      <main className="flex-grow flex items-center justify-center py-20 px-6">
        <div className="max-w-2xl w-full bg-card border border-border rounded-xl p-10 text-center shadow-2xl relative">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary to-transparent" />
          
          <p className="text-xs uppercase tracking-[0.4em] text-primary mb-4">Secure your ritual</p>
          <h1 className="font-display text-4xl md:text-5xl font-light mb-8">Book an Appointment</h1>
          
          <div className="space-y-6 text-muted-foreground text-lg mb-10 max-w-lg mx-auto">
            <p>
              To confirm your booking, a small advance payment of <span className="text-gold-gradient font-display text-2xl">₹299</span> is required.
            </p>
            <p>
              The remaining balance will be paid in person at the meeting place. 
            </p>
            <div className="p-4 bg-background border border-border rounded-lg mt-6">
              <p className="text-sm font-medium text-foreground mb-2">Accepted Payment Methods for Advance:</p>
              <div className="flex justify-center gap-4 text-primary font-display text-xl">
                <span>Paytm</span>
                <span>•</span>
                <span>Gpay</span>
                <span>•</span>
                <span>Phonepe</span>
              </div>
            </div>
            <p className="text-sm italic mt-4 text-primary/80">
              100% Refund Policy: If you don't like the therapist upon meeting, your advance is refunded.
            </p>
          </div>

          <a 
            href={whatsappLink} 
            target="_blank" 
            rel="noreferrer" 
            className="inline-flex items-center gap-3 rounded-full bg-primary px-10 py-5 text-lg font-medium text-primary-foreground hover:bg-gold transition shadow-[0_0_40px_-10px_var(--gold)]"
          >
            <WhatsAppIcon className="w-6 h-6" />
            Message us on WhatsApp to Book
          </a>
        </div>
      </main>

      <footer className="border-t border-border py-10 text-center text-xs text-muted-foreground">
        <p className="font-display text-lg text-gold-gradient mb-2">Jaipur Relax Spa</p>
        <p>© {new Date().getFullYear()} Jaipur Relax Spa · All bookings by appointment</p>
      </footer>
    </div>
  );
}
