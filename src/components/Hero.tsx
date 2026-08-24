import Link from "next/link";
import { HeroVisual } from "./HeroVisual";
import {
  AUTHOR_NAME,
  CERTIFICATE_NAME,
  JOB_FOCUS,
  JOB_TITLE,
  LOCATION,
  NICKNAME,
  YEARS_EXPERIENCE,
} from "@/lib/seo";

const highlights = [
  { value: YEARS_EXPERIENCE, label: "Years shipping payment, insurance & e-commerce systems" },
  { value: "5", label: "Domains: fintech, retail, insurance, analytics, AI" },
  { value: "Remote", label: "Open to remote and international Laravel/backend roles" },
];

export function Hero() {
  return (
    <section className="relative py-12 md:py-20">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-64 bg-[radial-gradient(ellipse_at_top,rgba(56,189,248,0.08),transparent_70%)]" />

      <div className="relative grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-10">
        <div className="space-y-6">
          <p className="font-mono text-sm uppercase tracking-[0.2em] text-signal">{JOB_TITLE}</p>
          <h1 className="text-4xl font-bold leading-[1.08] md:text-5xl lg:text-[3.35rem]">
            {AUTHOR_NAME}
          </h1>
          <p className="text-xl font-medium text-signal md:text-2xl">
            {CERTIFICATE_NAME} — known as {NICKNAME}. {JOB_FOCUS}
          </p>
          <p className="max-w-2xl text-lg leading-relaxed text-muted">
            {AUTHOR_NAME} is a senior software engineer in {LOCATION}. He builds production Laravel and PHP
            systems for fintech, e-commerce, insurance, analytics, and AI — with React, REST APIs, and data-heavy
            backends that stay reliable under real business load.
          </p>
          <div className="flex flex-wrap gap-3 pt-1">
            <Link
              href="/projects"
              className="rounded-xl bg-signal px-5 py-3 font-medium text-ink transition-colors hover:bg-sky-300"
            >
              View Projects
            </Link>
            <Link
              href="/contact"
              className="rounded-xl border border-line px-5 py-3 transition-colors hover:border-signal/50"
            >
              Hire Me
            </Link>
          </div>

          <dl className="grid gap-4 pt-4 sm:grid-cols-3">
            {highlights.map((item) => (
              <div key={item.label} className="rounded-2xl border border-line/70 bg-surface/40 p-4">
                <dt className="font-mono text-2xl font-semibold text-signal">{item.value}</dt>
                <dd className="mt-1 text-sm leading-snug text-muted">{item.label}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="relative mx-auto w-full max-w-xl lg:max-w-none">
          <HeroVisual />
        </div>
      </div>
    </section>
  );
}
