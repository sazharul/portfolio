import type { HiringFaq as HiringFaqItem } from "@/content/hiring";

type HiringFaqProps = {
  faqs: HiringFaqItem[];
};

export function HiringFaq({ faqs }: HiringFaqProps) {
  return (
    <section className="space-y-4" aria-labelledby="hiring-faq-heading">
      <h2 id="hiring-faq-heading" className="text-2xl font-semibold">Hiring FAQ</h2>
      <div className="space-y-3">
        {faqs.map((faq) => (
          <details
            key={faq.question}
            className="group rounded-xl border border-line bg-surface/30 p-4 open:border-signal/30"
          >
            <summary className="cursor-pointer font-medium leading-snug">{faq.question}</summary>
            <p className="mt-3 text-sm leading-relaxed text-muted">{faq.answer}</p>
          </details>
        ))}
      </div>
    </section>
  );
}
