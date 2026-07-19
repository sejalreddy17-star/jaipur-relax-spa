import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import { JsonLd } from "@/components/JsonLd";
import { FaqSection } from "@/components/FaqSection";
import { WhatsAppIcon } from "@/components/WhatsAppIcon";
import { escorts, rates, faqs } from "@/lib/data";
import { SITE, WHATSAPP_DISPLAY, whatsappLink } from "@/lib/site";
import { buildPageMeta, faqJsonLd, breadcrumbJsonLd } from "@/lib/seo";

export const Route = createFileRoute("/book")({
  head: () =>
    buildPageMeta({
      title: "Book Call Girls in Jaipur | Jaipur Escort Booking 24/7",
      description: `Book call girls in Jaipur instantly on WhatsApp ${WHATSAPP_DISPLAY}. Verified Jaipur escort girls, incall ₹299 & outcall ₹599 booking fee. Paytm, Gpay, PhonePe accepted. 24/7 escort booking.`,
      path: "/book",
      keywords: "book call girls in jaipur, jaipur escort booking, book escort jaipur, jaipur call girl booking, escort girls jaipur booking, incall outcall jaipur",
    }),
  component: BookPage,
});

const bookingSteps = [
  { step: "1", title: "Message on WhatsApp", desc: `Chat us at ${WHATSAPP_DISPLAY} and tell us you want to book call girls in Jaipur.` },
  { step: "2", title: "Choose Your Escort", desc: "Browse verified Jaipur escort girls profiles and pick your preferred call girl." },
  { step: "3", title: "Pay Booking Fee", desc: "Pay ₹299 (incall) or ₹599 (outcall) via Paytm, Gpay, or PhonePe to confirm." },
  { step: "4", title: "Meet & Pay Balance", desc: "Meet your escort at the agreed location. Pay the remaining amount at the meeting place." },
];

function BookPage() {
  const whatsappChat = whatsappLink("Hi, I want to book call girls in Jaipur.");

  return (
    <SiteLayout>
      <JsonLd data={[breadcrumbJsonLd([{ name: "Home", path: "/" }, { name: "Book Call Girls", path: "/book" }]), faqJsonLd(faqs)]} />

      <section className="py-16 md:py-24 bg-radial-glow">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <p className="text-xs uppercase tracking-[0.4em] text-primary mb-4">Escort Booking</p>
          <h1 className="font-display text-4xl md:text-6xl font-light leading-tight mb-6">
            Book Call Girls in Jaipur
          </h1>
          <p className="text-muted-foreground text-lg leading-relaxed mb-8">
            Looking to <strong>book call girls in Jaipur</strong>? Our verified <strong>Jaipur escort girls</strong> are
            available 24/7 for incall and outcall service. Confirm your booking on WhatsApp in minutes.
          </p>
          <a
            href={whatsappChat}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-[#25D366] px-10 py-4 text-sm font-medium text-white hover:opacity-90 transition shadow-[0_0_40px_-10px_#25D366]"
          >
            <WhatsAppIcon />
            Book Now on WhatsApp
          </a>
        </div>
      </section>

      <section className="py-20 border-t border-border">
        <div className="mx-auto max-w-5xl px-6">
          <h2 className="font-display text-3xl md:text-4xl font-light text-center mb-12">
            How to Book Jaipur Escort Girls
          </h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {bookingSteps.map((s) => (
              <article key={s.step} className="rounded-lg border border-border bg-card p-6">
                <span className="font-display text-4xl text-gold-gradient">{s.step}</span>
                <h3 className="font-display text-xl mt-3 mb-2">{s.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 border-t border-border bg-card/40">
        <div className="mx-auto max-w-4xl px-6">
          <h2 className="font-display text-3xl md:text-4xl font-light text-center mb-4">
            Jaipur Call Girls Rate Card
          </h2>
          <p className="text-center text-muted-foreground mb-12">
            Booking fee: ₹299 incall · ₹599 outcall · Remaining at meeting place
          </p>
          <div className="space-y-1">
            {rates.map((r, i) => (
              <div
                key={i}
                className="grid grid-cols-[auto_1fr_auto] items-baseline gap-4 py-5 border-b border-border/60"
              >
                <span className="font-display text-2xl text-gold-gradient w-24 shrink-0">
                  {r.time}
                  <span className="text-xs text-muted-foreground ml-1">{r.unit}</span>
                </span>
                <span className="text-muted-foreground">{r.label}</span>
                <span className="font-display text-xl text-primary shrink-0">{r.price}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 border-t border-border">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="font-display text-3xl md:text-4xl font-light text-center mb-4">
            Select Escort Girl to Book
          </h2>
          <p className="text-center text-muted-foreground mb-12">
            All Jaipur escort girls with real photos — tap to book on WhatsApp
          </p>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {escorts.map((e) => (
              <article key={e.name} className="rounded-lg border border-border bg-card overflow-hidden hover:border-primary/50 transition">
                <div className="aspect-[3/4] overflow-hidden">
                  <img
                    src={e.img}
                    alt={`Book ${e.name} — call girl in Jaipur escort service`}
                    loading="lazy"
                    className="h-full w-full object-cover object-top"
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-display text-lg">{e.name}, {e.age}</h3>
                  <p className="text-xs text-muted-foreground mb-3">{e.tag} · {e.location}</p>
                  <a
                    href={whatsappLink(`Hi, I want to book ${e.name} — call girl in Jaipur.`)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 w-full rounded-full bg-[#25D366] py-2 text-sm font-medium text-white hover:opacity-90 transition"
                  >
                    <WhatsAppIcon className="w-4 h-4" />
                    Book {e.name}
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 border-t border-border bg-card/40">
        <div className="mx-auto max-w-3xl px-6 prose prose-invert max-w-none">
          <h2 className="font-display text-3xl font-light text-center mb-8">
            Why Book Call Girls in Jaipur With Us?
          </h2>
          <div className="space-y-4 text-muted-foreground text-sm leading-relaxed">
            <p>
              {SITE.name} is the most trusted way to <strong>book call girls in Jaipur</strong> and hire premium{" "}
              <strong>Jaipur escort girls</strong>. Whether you need a college girl, model, VIP escort, or housewife
              profile — we have verified options with 100% real photos.
            </p>
            <p>
              Our <strong>Jaipur escort booking</strong> process is simple: message on WhatsApp, choose your girl,
              pay a small confirmation fee, and meet discreetly. We cover all major areas in Jaipur including
              Malviya Nagar, C-Scheme, Vaishali Nagar, Mansarovar, and hotel outcall across the city.
            </p>
            <p>
              Unlike fake listings, every <strong>escort girl in Jaipur</strong> on our platform is genuine.
              Incall service at our private location or outcall to your hotel — both available 24/7.
            </p>
          </div>
          <div className="mt-10 text-center">
            <Link to="/contact" className="text-primary hover:underline text-sm">
              Contact us for escort booking in Jaipur →
            </Link>
          </div>
        </div>
      </section>

      <FaqSection title="Book Call Girls in Jaipur — FAQ" />
    </SiteLayout>
  );
}
