import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import { JsonLd } from "@/components/JsonLd";
import { FaqSection } from "@/components/FaqSection";
import { WhatsAppIcon } from "@/components/WhatsAppIcon";
import { jaipurAreas, faqs } from "@/lib/data";
import { SITE, WHATSAPP_DISPLAY, whatsappLink } from "@/lib/site";
import { buildPageMeta, localBusinessJsonLd, faqJsonLd, breadcrumbJsonLd } from "@/lib/seo";

export const Route = createFileRoute("/contact")({
  head: () =>
    buildPageMeta({
      title: "Contact Jaipur Call Girls Escorts | WhatsApp +91 74148 38654",
      description: `Contact ${SITE.name} on WhatsApp ${WHATSAPP_DISPLAY} to book call girls in Jaipur. 24/7 escort girls booking, incall & outcall service across Jaipur, Rajasthan.`,
      path: "/contact",
      keywords: "jaipur call girls number, jaipur escorts contact, jaipur escort girls whatsapp, contact call girls jaipur, jaipur escort agency contact",
    }),
  component: ContactPage,
});

const contactMethods = [
  {
    title: "WhatsApp (Preferred)",
    value: WHATSAPP_DISPLAY,
    desc: "Fastest way to book call girls in Jaipur. Available 24/7 for instant escort booking.",
    action: "Chat on WhatsApp",
    href: whatsappLink("Hi, I want to contact you about Jaipur call girls booking."),
  },
  {
    title: "Service Hours",
    value: "24 Hours / 7 Days",
    desc: "Our Jaipur escort girls are available round the clock — day and night bookings accepted.",
    action: "Book Now",
    href: "/book",
    internal: true,
  },
  {
    title: "Service Type",
    value: "Incall & Outcall",
    desc: "Incall at private location in Jaipur or outcall to your hotel/home anywhere in the city.",
    action: "View Rates",
    href: "/book",
    internal: true,
  },
];

function ContactPage() {
  const whatsappChat = whatsappLink("Hi, I want to book call girls in Jaipur.");

  return (
    <SiteLayout>
      <JsonLd
        data={[
          localBusinessJsonLd(),
          breadcrumbJsonLd([{ name: "Home", path: "/" }, { name: "Contact", path: "/contact" }]),
          faqJsonLd(faqs),
        ]}
      />

      <section className="py-16 md:py-24 bg-radial-glow">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <p className="text-xs uppercase tracking-[0.4em] text-primary mb-4">Get in Touch</p>
          <h1 className="font-display text-4xl md:text-6xl font-light leading-tight mb-6">
            Contact Jaipur Call Girls Escorts
          </h1>
          <p className="text-muted-foreground text-lg leading-relaxed mb-8">
            Reach us anytime to book verified <strong>call girls in Jaipur</strong> and{" "}
            <strong>Jaipur escort girls</strong>. WhatsApp is the fastest way to connect — we reply instantly.
          </p>
          <a
            href={whatsappChat}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-[#25D366] px-10 py-4 text-sm font-medium text-white hover:opacity-90 transition shadow-[0_0_40px_-10px_#25D366]"
          >
            <WhatsAppIcon />
            {WHATSAPP_DISPLAY}
          </a>
        </div>
      </section>

      <section className="py-20 border-t border-border">
        <div className="mx-auto max-w-5xl px-6">
          <h2 className="font-display text-3xl md:text-4xl font-light text-center mb-12">
            Contact Information
          </h2>
          <div className="grid gap-6 md:grid-cols-3">
            {contactMethods.map((m) => (
              <article key={m.title} className="rounded-lg border border-border bg-card p-8 text-center">
                <h3 className="font-display text-xl mb-2">{m.title}</h3>
                <p className="font-display text-2xl text-gold-gradient mb-3">{m.value}</p>
                <p className="text-sm text-muted-foreground leading-relaxed mb-6">{m.desc}</p>
                {m.internal ? (
                  <Link to={m.href} className="text-sm text-primary hover:underline">
                    {m.action} →
                  </Link>
                ) : (
                  <a
                    href={m.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm text-primary hover:underline"
                  >
                    {m.action === "Chat on WhatsApp" && <WhatsAppIcon className="w-4 h-4" />}
                    {m.action} →
                  </a>
                )}
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 border-t border-border bg-card/40">
        <div className="mx-auto max-w-5xl px-6">
          <h2 className="font-display text-3xl md:text-4xl font-light text-center mb-4">
            Escort Service Areas in Jaipur
          </h2>
          <p className="text-center text-muted-foreground mb-10">
            Outcall escort girls available across all major areas in Jaipur, Rajasthan
          </p>
          <ul className="flex flex-wrap justify-center gap-3">
            {jaipurAreas.map((area) => (
              <li
                key={area}
                className="rounded-full border border-border bg-card px-4 py-2 text-sm text-muted-foreground"
              >
                Call Girls in {area}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="py-20 border-t border-border">
        <div className="mx-auto max-w-3xl px-6">
          <h2 className="font-display text-3xl font-light text-center mb-8">
            About {SITE.name}
          </h2>
          <div className="space-y-4 text-sm text-muted-foreground leading-relaxed">
            <p>
              Welcome to <strong>{SITE.name}</strong> — your trusted contact for premium{" "}
              <strong>call girls in Jaipur</strong> and high-profile <strong>Jaipur escort girls</strong>.
              We specialize in discreet, professional escort booking with verified profiles and real photos.
            </p>
            <p>
              When you contact us on WhatsApp at <strong>{WHATSAPP_DISPLAY}</strong>, our team helps you
              choose the right escort girl, confirm incall or outcall service, and complete your booking
              within minutes. Payment accepted via Paytm, Gpay, and PhonePe.
            </p>
            <p>
              Whether you are visiting Jaipur or live here, our escort agency delivers the best{" "}
              <strong>Jaipur escort service</strong> with complete privacy and a 100% refund guarantee.
            </p>
          </div>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Link
              to="/book"
              className="rounded-full border border-primary/40 px-8 py-3 text-sm text-primary hover:bg-primary hover:text-primary-foreground transition"
            >
              Book Call Girls in Jaipur
            </Link>
            <a
              href={whatsappChat}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-[#25D366] px-8 py-3 text-sm font-medium text-white hover:opacity-90 transition"
            >
              <WhatsAppIcon className="w-4 h-4" />
              WhatsApp Us
            </a>
          </div>
        </div>
      </section>

      <FaqSection title="Contact & Booking FAQ" />
    </SiteLayout>
  );
}
