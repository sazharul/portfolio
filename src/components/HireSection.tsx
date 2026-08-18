import Link from "next/link";
import { hireServices } from "@/content/hiring";
import { AUTHOR_SHORT_NAME, FIRST_NAME, LAST_NAME, JOB_TITLE } from "@/lib/seo";

export function HireSection() {
  return (
    <section className="border-t border-line/60 py-12" aria-labelledby="hire-heading">
      <div className="mb-8 max-w-3xl">
        <p className="font-mono text-xs uppercase tracking-wider text-signal-2">For hiring managers</p>
        <h2 id="hire-heading" className="mt-2 text-3xl font-bold">
          Hire an experienced software engineer
        </h2>
        <p className="mt-4 text-muted leading-relaxed">
          Looking to hire a senior software engineer, experienced Laravel developer, or reliable PHP engineer for
          production work? {FIRST_NAME} ({LAST_NAME}) is an {JOB_TITLE.toLowerCase()} in Dhaka with 8+ years building
          systems clients actually depend on—fintech, e-commerce, insurance, analytics, and AI.
        </p>
        <p className="mt-3 text-muted leading-relaxed">
          {AUTHOR_SHORT_NAME} is a strong fit when you need someone who understands business rules, ships clean APIs,
          and stays accountable in remote or contract setups—not just code that works in a demo.
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {hireServices.map((service) => (
          <article key={service.title} className="rounded-2xl border border-line bg-surface/35 p-5">
            <h3 className="text-base font-semibold">{service.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted">{service.description}</p>
          </article>
        ))}
      </div>

      <div className="mt-8 flex flex-wrap gap-3">
        <Link
          href="/contact"
          className="rounded-xl bg-signal px-5 py-3 text-sm font-medium text-ink transition-colors hover:bg-sky-300"
        >
          Hire {FIRST_NAME} →
        </Link>
        <Link
          href="/projects"
          className="rounded-xl border border-line px-5 py-3 text-sm transition-colors hover:border-signal/50"
        >
          Review projects first
        </Link>
      </div>
    </section>
  );
}
