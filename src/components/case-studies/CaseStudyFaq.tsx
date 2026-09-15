import type { CaseStudyFaq as CaseStudyFaqItem } from "@/content/case-study-seo";

type CaseStudyFaqProps = {
  faqs: CaseStudyFaqItem[];
  heading?: string;
  id?: string;
};

export function CaseStudyFaq({ faqs, heading = "Frequently asked questions", id = "case-study-faq" }: CaseStudyFaqProps) {
  return (
    <section className="border-t border-line/60 bg-surface/10 py-16 md:py-20" aria-labelledby={id}>
      <div className="mx-auto max-w-3xl px-4">
        <p className="font-mono text-xs uppercase tracking-[0.2em] text-signal-2">FAQ</p>
        <h2 id={id} className="mt-2 text-2xl font-bold md:text-3xl">{heading}</h2>
        <p className="mt-3 text-muted">
          Common questions about this project, its technology stack, and how to review the code.
        </p>

        <div className="mt-8 space-y-3">
          {faqs.map((faq) => (
            <details
              key={faq.question}
              className="group rounded-2xl border border-line/60 bg-ink/40 p-5 open:border-signal/30 open:bg-surface/30"
            >
              <summary className="cursor-pointer font-medium leading-snug marker:content-none [&::-webkit-details-marker]:hidden">
                <span className="flex items-start justify-between gap-4">
                  {faq.question}
                  <span className="mt-0.5 shrink-0 text-signal-2 transition-transform group-open:rotate-45">+</span>
                </span>
              </summary>
              <p className="mt-4 text-sm leading-relaxed text-muted">{faq.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
