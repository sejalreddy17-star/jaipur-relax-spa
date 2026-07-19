import { createFileRoute } from "@tanstack/react-router";
import { useState, useEffect } from "react";
import { WhatsAppIcon } from "../components/WhatsAppIcon";

export const Route = createFileRoute("/contact")({
  component: Contact,
});

function Contact() {
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
        <div className="max-w-xl w-full bg-card border border-border rounded-xl p-10 text-center shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary to-transparent" />
          
          <h1 className="font-display text-4xl md:text-5xl font-light mb-4">Contact Us</h1>
          <p className="text-muted-foreground mb-10 text-lg">
            We are here to assist you. The fastest way to reach our spa concierge is via WhatsApp. 
            Send us a message to inquire about our services, therapists, or to schedule an appointment.
          </p>

          <a 
            href={whatsappLink} 
            target="_blank" 
            rel="noreferrer" 
            className="inline-flex items-center gap-3 rounded-full bg-[#25D366] px-10 py-5 text-lg font-medium text-white hover:bg-[#25D366]/90 transition shadow-[0_0_40px_-10px_#25D366]"
          >
            <WhatsAppIcon className="w-6 h-6" />
            Chat with us on WhatsApp
          </a>

          <div className="mt-12 grid grid-cols-2 gap-6 text-sm text-left border-t border-border/50 pt-8">
            <div>
              <p className="text-primary uppercase tracking-widest text-xs mb-1">Location</p>
              <p className="text-muted-foreground">Jaipur, Rajasthan<br/>India</p>
            </div>
            <div>
              <p className="text-primary uppercase tracking-widest text-xs mb-1">Hours</p>
              <p className="text-muted-foreground">Open 24/7<br/>By Appointment Only</p>
            </div>
          </div>
        </div>
      </main>

      <footer className="border-t border-border py-10 text-center text-xs text-muted-foreground">
        <p className="font-display text-lg text-gold-gradient mb-2">Jaipur Relax Spa</p>
        <p>© {new Date().getFullYear()} Jaipur Relax Spa · All bookings by appointment</p>
      </footer>
    </div>
  );
}
