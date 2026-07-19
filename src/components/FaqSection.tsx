import { faqs } from "@/lib/data";

export function FaqSection({ title = "Frequently Asked Questions" }: { title?: string }) {
  return (
    <section className="py-20 border-t border-border" aria-labelledby="faq-heading">
      <div className="mx-auto max-w-3xl px-6">
        <h2 id="faq-heading" className="font-display text-3xl md:text-4xl font-light text-center mb-12">
          {title}
        </h2>
        <div className="space-y-4">
          {faqs.map((faq) => (
            <details
              key={faq.q}
              className="group rounded-lg border border-border bg-card/50 open:border-primary/40 transition"
            >
              <summary className="cursor-pointer list-none px-6 py-4 font-medium text-foreground flex items-center justify-between gap-4">
                {faq.q}
                <span className="text-primary text-xl shrink-0 group-open:rotate-45 transition-transform">+</span>
              </summary>
              <p className="px-6 pb-4 text-sm text-muted-foreground leading-relaxed">{faq.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
