import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import { JsonLd } from "@/components/JsonLd";
import { FaqSection } from "@/components/FaqSection";
import { WhatsAppIcon } from "@/components/WhatsAppIcon";
import { heroImg, services, escorts, rates, jaipurAreas, faqs } from "@/lib/data";
import { SITE, WHATSAPP_DISPLAY, whatsappLink, DEFAULT_WHATSAPP_MESSAGE } from "@/lib/site";
import { buildPageMeta, localBusinessJsonLd, faqJsonLd } from "@/lib/seo";

export const Route = createFileRoute("/")({
  head: () =>
    buildPageMeta({
      title: "Call Girls in Jaipur | Jaipur Escort Girls — Book 24/7",
      description: `#1 call girls in Jaipur & Jaipur escort girls service. Book verified escort girls in Jaipur on WhatsApp ${WHATSAPP_DISPLAY}. Real photos, incall & outcall, 100% refund. Available 24/7.`,
      path: "/",
    }),
  component: HomePage,
});

function HomePage() {
  const whatsappChat = whatsappLink(DEFAULT_WHATSAPP_MESSAGE);

  return (
    <SiteLayout>
      <JsonLd data={[localBusinessJsonLd(), faqJsonLd(faqs)]} />

      <section className="relative flex min-h-[90vh] items-center justify-center -mt-20 pt-20">
        <img
          src={heroImg}
          alt="Call girls in Jaipur — premium escort girls booking service"
          width={1920}
          height={1200}
          className="absolute inset-0 h-full w-full object-cover object-top"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/55 to-background" />
        <div className="relative z-10 mx-auto max-w-4xl px-6 text-center">
          <p className="mb-6 text-xs uppercase tracking-[0.4em] text-primary">
            Jaipur Escort Service • 24/7 Available
          </p>
          <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-light leading-[1.08]">
            Call Girls in Jaipur
            <br />
            <span className="italic text-gold-gradient">Jaipur Escort Girls</span>
          </h1>
          <p className="mt-8 mx-auto max-w-xl text-base md:text-lg text-muted-foreground leading-relaxed">
            Book verified call girls in Jaipur with real photos. Premium Jaipur escort girls for incall & outcall.
            WhatsApp {WHATSAPP_DISPLAY} — instant booking.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Link
              to="/book"
              className="rounded-full bg-primary px-8 py-3.5 text-sm font-medium text-primary-foreground hover:opacity-90 transition shadow-[0_0_40px_-10px_oklch(0.68_0.22_350)]"
            >
              Book Call Girls in Jaipur
            </Link>
            <a
              href={whatsappChat}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-[#25D366] px-8 py-3.5 text-sm font-medium text-white hover:opacity-90 transition"
            >
              <WhatsAppIcon />
              WhatsApp
            </a>
          </div>
        </div>
      </section>

      <section id="services" className="py-24">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="font-display text-3xl md:text-5xl font-light mb-4">Jaipur Escort Booking Services</h2>
          <p className="text-muted-foreground max-w-2xl mb-16">
            Book call girls in Jaipur with incall or outcall escort service. Safe, discreet, and verified.
          </p>
          <div className="grid gap-8 md:grid-cols-3">
            {services.map((s) => (
              <article key={s.name} className="group overflow-hidden rounded-lg bg-card border border-border">
                <div className="aspect-[4/5] overflow-hidden">
                  <img src={s.img} alt={`${s.name} — Jaipur call girls escort service`} loading="lazy" className="h-full w-full object-cover transition duration-700 group-hover:scale-105" />
                </div>
                <div className="p-8">
                  <h3 className="font-display text-2xl mb-3">{s.name}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-6">{s.desc}</p>
                  <div className="flex items-center justify-between border-t border-border pt-4">
                    <span className="font-display text-xl text-gold-gradient">{s.price}</span>
                    <Link to="/book" className="text-xs uppercase tracking-widest text-primary hover:opacity-80 transition">Book →</Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="profiles" className="py-24 border-y border-border bg-card/40">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="font-display text-3xl md:text-5xl font-light text-center mb-4">
            Jaipur Escort Girls — Verified Profiles
          </h2>
          <p className="text-center text-muted-foreground mb-12 max-w-lg mx-auto">
            Real photos of call girls in Jaipur. Tap to book on WhatsApp instantly.
          </p>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {escorts.map((e) => (
              <article key={e.name} className="group overflow-hidden rounded-lg bg-card border border-border hover:border-primary/50 transition">
                <div className="relative aspect-[3/4] overflow-hidden">
                  <img src={e.img} alt={`${e.name} — Jaipur escort girl, call girl in ${e.location}`} loading="lazy" className="h-full w-full object-cover object-top transition duration-700 group-hover:scale-105" />
                  <span className="absolute top-3 right-3 rounded-full bg-green-600/90 px-3 py-1 text-xs font-medium text-white">{e.status}</span>
                  <span className="absolute top-3 left-3 rounded-full bg-primary/90 px-3 py-1 text-xs font-medium text-primary-foreground">{e.tag}</span>
                </div>
                <div className="p-5">
                  <h3 className="font-display text-xl">{e.name}, {e.age}</h3>
                  <p className="text-sm text-muted-foreground mb-4">{e.tag} · {e.location}, Rajasthan</p>
                  <a href={whatsappLink(`Hi, I want to book ${e.name} — call girl in Jaipur.`)} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 w-full rounded-full bg-[#25D366] py-2.5 text-sm font-medium text-white hover:opacity-90 transition">
                    <WhatsAppIcon className="w-4 h-4" /> Book {e.name}
                  </a>
                </div>
              </article>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link to="/book" className="text-primary hover:underline text-sm">View full booking page →</Link>
          </div>
        </div>
      </section>

      <section id="rates" className="py-24">
        <div className="mx-auto max-w-4xl px-6">
          <h2 className="font-display text-3xl md:text-5xl font-light text-center mb-4">
            Jaipur Call Girls Rates
          </h2>
          <p className="text-center text-muted-foreground mb-12">Affordable escort girls in Jaipur — booking fee ₹299 / ₹599</p>
          <div className="space-y-1">
            {rates.map((r, i) => (
              <div key={i} className="grid grid-cols-[auto_1fr_auto] items-baseline gap-4 py-5 border-b border-border/60">
                <span className="font-display text-2xl text-gold-gradient w-24 shrink-0">{r.time}<span className="text-xs text-muted-foreground ml-1">{r.unit}</span></span>
                <span className="text-muted-foreground">{r.label}</span>
                <span className="font-display text-xl text-primary shrink-0">{r.price}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 border-t border-border bg-card/40">
        <div className="mx-auto max-w-4xl px-6">
          <h2 className="font-display text-3xl md:text-4xl font-light text-center mb-10">
            Best Call Girls in Jaipur — Why Choose Us?
          </h2>
          <div className="space-y-5 text-sm text-muted-foreground leading-relaxed">
            <p>
              Searching for <strong>call girls in Jaipur</strong> or reliable <strong>Jaipur escort girls</strong>?
              {SITE.name} is the top-rated escort agency in {SITE.city}, {SITE.state} offering verified profiles,
              real photos, and instant WhatsApp booking at {WHATSAPP_DISPLAY}.
            </p>
            <p>
              Whether you want to <strong>book call girls in Jaipur</strong> for incall at our private location or
              need outcall escort service at your hotel — we cover every major area including{" "}
              {jaipurAreas.slice(0, 6).join(", ")}, and more.
            </p>
            <p>
              Our <strong>Jaipur escort service</strong> includes college girls, models, VIP escorts, air hostesses,
              and housewives — all with 100% genuine photos. Pay via Paytm, Gpay, or PhonePe. 100% refund if not satisfied.
            </p>
          </div>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Link to="/book" className="rounded-full bg-primary px-8 py-3 text-sm font-medium text-primary-foreground hover:opacity-90 transition">Book Escort in Jaipur</Link>
            <Link to="/contact" className="rounded-full border border-primary/40 px-8 py-3 text-sm text-primary hover:bg-primary hover:text-primary-foreground transition">Contact Us</Link>
          </div>
        </div>
      </section>

      <section className="py-16 border-t border-border">
        <div className="mx-auto max-w-5xl px-6">
          <h2 className="font-display text-2xl font-light text-center mb-8 text-muted-foreground">
            Popular Searches — Jaipur Escorts
          </h2>
          <div className="flex flex-wrap justify-center gap-2">
            {[
              "call girls in jaipur",
              "jaipur escort girls",
              "book call girls in jaipur",
              "jaipur escorts",
              "escort girls jaipur",
              "jaipur call girl booking",
              "incall escort jaipur",
              "outcall escort jaipur",
              "vip escorts jaipur",
              "jaipur escort agency",
            ].map((kw) => (
              <span key={kw} className="rounded-full border border-border/60 bg-card/50 px-3 py-1.5 text-xs text-muted-foreground capitalize">
                {kw}
              </span>
            ))}
          </div>
        </div>
      </section>

      <FaqSection title="Call Girls in Jaipur — FAQ" />
    </SiteLayout>
  );
}
