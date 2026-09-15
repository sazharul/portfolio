import Link from "next/link";
import {
  Activity,
  ArrowLeft,
  BadgeCheck,
  BarChart3,
  Blocks,
  Bot,
  Code2,
  Database,
  Fingerprint,
  LineChart,
  MousePointerClick,
  RefreshCw,
  Route,
  Shield,
  TestTube2,
  Zap,
} from "lucide-react";
import { CaseStudyFaq } from "@/components/case-studies/CaseStudyFaq";
import { PortfolioDemoBanner } from "@/components/case-studies/PortfolioDemoBanner";
import type { CaseStudySeo } from "@/content/case-study-seo";
import type { Project } from "@/content/projects";

const stats = [
  { value: "43+", label: "PHPUnit feature tests" },
  { value: "Redis", label: "Session resolution" },
  { value: "SDK", label: "Resilient client tracker" },
  { value: "100%", label: "Idempotent event ingest" },
];

const features = [
  {
    icon: MousePointerClick,
    title: "Event Tracking SDK",
    description: "JavaScript SDK with localStorage queue, exponential backoff, and offline flush for reliable capture.",
    accent: "from-sky-500/20 to-cyan-500/5",
  },
  {
    icon: Route,
    title: "Visitor Journeys",
    description: "Session grouping and timeline views so teams can follow paths from landing to conversion.",
    accent: "from-violet-500/20 to-purple-500/5",
  },
  {
    icon: BarChart3,
    title: "Funnel Dashboards",
    description: "Conversion funnels, engagement metrics, and product analytics for management decisions.",
    accent: "from-emerald-500/20 to-teal-500/5",
  },
  {
    icon: Fingerprint,
    title: "Session Resolution",
    description: "Redis-backed sessions with 30-minute gap logic and database fallback for accuracy.",
    accent: "from-blue-500/20 to-indigo-500/5",
  },
  {
    icon: Bot,
    title: "Bot Detection",
    description: "User-agent pattern matching combined with Cloudflare bot score filtering.",
    accent: "from-rose-500/20 to-pink-500/5",
  },
  {
    icon: Shield,
    title: "Secure Ingest",
    description: "Bearer API key authentication, rate limiting, and strict request validation on ingest.",
    accent: "from-amber-500/20 to-orange-500/5",
  },
  {
    icon: RefreshCw,
    title: "Idempotent Ingest",
    description: "Client UUID plus updateOrInsert on event_id prevents duplicate analytics events.",
    accent: "from-cyan-500/20 to-sky-500/5",
  },
  {
    icon: LineChart,
    title: "Admin Drill-down",
    description: "Session list views and per-visitor event timelines for support and debugging.",
    accent: "from-indigo-500/20 to-violet-500/5",
  },
];

const responsibilities = [
  "Developed backend APIs for analytics data processing and retrieval",
  "Designed and managed MySQL database structures for analytics data",
  "Implemented event tracking to capture user interactions across the store",
  "Built visitor journey tracking with session grouping and timeline views",
  "Developed dashboard interfaces for monitoring analytics and reports",
  "Worked under engineering lead guidance on architecture and analytics design",
];

const stack = [
  { layer: "Backend", tech: "Laravel, PHP, REST APIs" },
  { layer: "Database", tech: "MySQL, Redis" },
  { layer: "Frontend", tech: "JavaScript SDK + Blade dashboards" },
  { layer: "Caching", tech: "Redis session store" },
  { layer: "Ingest", tech: "Bearer auth, rate limiting, validation" },
  { layer: "Testing", tech: "PHPUnit — 43+ feature tests" },
  { layer: "Logging", tech: "Structured AnalyticsLogger" },
  { layer: "Bot filter", tech: "UA patterns + Cloudflare bot score" },
];

const demoFeatures = [
  { label: "Resilient SDK", detail: "localStorage queue + offline flush" },
  { label: "Session logic", detail: "Redis 30-min gap + DB fallback" },
  { label: "Idempotency", detail: "Client UUID + event_id upsert" },
  { label: "Tests", detail: "43+ PHPUnit feature tests" },
];

type EcommerceAnalyticsPageProps = {
  project: Project;
  seo: CaseStudySeo;
};

export function EcommerceAnalyticsPage({ project, seo }: EcommerceAnalyticsPageProps) {
  return (
    <article className="analytics-case-study overflow-hidden" itemScope itemType="https://schema.org/TechArticle">
      <meta itemProp="headline" content={seo.articleHeadline} />
      <meta itemProp="description" content={seo.articleSummary} />
      <meta itemProp="datePublished" content={seo.datePublished} />
      <meta itemProp="dateModified" content={seo.dateModified} />
      {/* Hero */}
      <section className="relative border-b border-line/60">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_-10%,rgba(56,189,248,0.16),transparent_55%)]" />
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_50%_40%_at_85%_25%,rgba(94,234,212,0.1),transparent_50%)]" />
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_40%_30%_at_15%_70%,rgba(139,92,246,0.08),transparent_50%)]" />

        <div className="relative mx-auto max-w-6xl px-4 pb-16 pt-10 md:pb-24 md:pt-14">
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 text-sm text-muted transition-colors hover:text-signal"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to projects
          </Link>

          <div className="mt-6">
            <PortfolioDemoBanner />
          </div>

          <div className="mt-8 grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
            <div className="space-y-6">
              <div className="flex flex-wrap items-center gap-3">
                <span className="inline-flex items-center gap-1.5 rounded-full border border-sky-500/30 bg-sky-500/10 px-3 py-1 text-xs font-medium text-sky-300">
                  <Activity className="h-3 w-3" />
                  Open source on GitHub
                </span>
                <span className="rounded-full border border-line bg-surface/60 px-3 py-1 font-mono text-xs text-signal-2">
                  {project.company}
                </span>
              </div>

              <div className="flex items-start gap-4">
                <div className="hidden rounded-2xl border border-sky-500/20 bg-gradient-to-br from-sky-500/20 to-cyan-500/10 p-4 sm:block">
                  <BarChart3 className="h-8 w-8 text-sky-400" />
                </div>
                <div>
                  <h1 className="text-4xl font-bold leading-tight md:text-5xl lg:text-[3.25rem]">
                    {project.title}
                  </h1>
                  <p className="mt-4 max-w-xl text-lg leading-relaxed text-muted md:text-xl">
                    {project.tagline}
                  </p>
                </div>
              </div>

              <p className="max-w-2xl leading-relaxed text-muted/90">
                Production-style analytics for a UK fashion e-commerce platform — event ingestion, visitor journeys,
                conversion funnels, bot detection, and business dashboards. Clone the open-source repo locally to explore.
              </p>

              <div className="flex flex-wrap gap-3 pt-1">
                <a
                  href={project.repoUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-sky-500 to-cyan-500 px-5 py-3 text-sm font-semibold text-ink shadow-lg shadow-sky-500/20 transition-transform hover:scale-[1.02]"
                >
                  <Code2 className="h-4 w-4" />
                  View on GitHub
                </a>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 rounded-xl border border-line bg-surface/50 px-5 py-3 text-sm font-medium transition-colors hover:border-signal/40"
                >
                  Discuss this project
                </Link>
              </div>

              <p className="text-sm text-muted/80">
                No public live demo — production EnoxTracker code is private. This repo is an original recreation for portfolio review.
              </p>

              <div className="flex flex-wrap gap-2 pt-1">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-lg border border-line/80 bg-ink/50 px-2.5 py-1 font-mono text-xs text-signal-2"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Dashboard mockup */}
            <div className="relative mx-auto w-full max-w-md lg:max-w-none">
              <div className="analytics-hero-card relative rounded-3xl border border-line/80 bg-surface/80 p-1 shadow-2xl shadow-black/40 backdrop-blur-sm">
                <div className="rounded-[1.35rem] bg-gradient-to-br from-[#0f172a] via-[#131a2a] to-[#0b0f19] p-6">
                  <div className="mb-5 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="flex h-8 w-8 items-center justify-center rounded-full bg-sky-500/20">
                        <LineChart className="h-4 w-4 text-sky-400" />
                      </div>
                      <span className="text-sm font-semibold">Analytics Dashboard</span>
                    </div>
                    <span className="rounded-full bg-emerald-500/15 px-2 py-0.5 text-[10px] font-medium text-emerald-300">
                      Live ingest
                    </span>
                  </div>

                  {/* Mini chart bars */}
                  <div className="mb-4 flex h-24 items-end justify-between gap-1.5 rounded-xl border border-white/5 bg-white/[0.02] px-4 py-3">
                    {[40, 65, 45, 80, 55, 90, 70, 85, 60, 95, 75, 88].map((h, i) => (
                      <div
                        key={i}
                        className="w-full rounded-sm bg-gradient-to-t from-sky-600 to-cyan-400 opacity-80"
                        style={{ height: `${h}%` }}
                      />
                    ))}
                  </div>

                  <div className="space-y-2">
                    {[
                      { label: "Page views", value: "12.4k", trend: "+8.2%" },
                      { label: "Sessions", value: "3,891", trend: "+5.1%" },
                      { label: "Conversion", value: "2.4%", trend: "+0.3%" },
                    ].map((metric) => (
                      <div
                        key={metric.label}
                        className="flex items-center justify-between rounded-xl border border-white/5 bg-white/[0.03] px-4 py-2.5"
                      >
                        <span className="text-sm text-muted">{metric.label}</span>
                        <div className="text-right">
                          <span className="text-sm font-semibold">{metric.value}</span>
                          <span className="ml-2 text-xs text-emerald-400">{metric.trend}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="absolute -right-4 -top-4 rounded-2xl border border-line/60 bg-surface px-3 py-2 shadow-xl">
                <p className="font-mono text-[10px] uppercase tracking-wider text-muted">Tests</p>
                <p className="text-sm font-semibold text-signal-2">43+ PHPUnit</p>
              </div>
              <div className="absolute -bottom-3 -left-3 rounded-2xl border border-line/60 bg-surface px-3 py-2 shadow-xl">
                <p className="font-mono text-[10px] uppercase tracking-wider text-muted">Role</p>
                <p className="text-sm font-semibold">{project.role}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="border-b border-line/60 bg-surface/30">
        <div className="mx-auto grid max-w-6xl grid-cols-2 gap-px bg-line/40 md:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label} className="bg-ink px-6 py-8 text-center md:py-10">
              <p className="font-mono text-3xl font-bold text-sky-400 md:text-4xl">{stat.value}</p>
              <p className="mt-2 text-sm text-muted">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Overview */}
      <section className="mx-auto max-w-6xl px-4 py-16 md:py-20">
        <div className="mb-10 max-w-2xl">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-sky-400/80">Overview</p>
          <h2 className="mt-2 text-3xl font-bold md:text-4xl">Data-driven decisions for e-commerce</h2>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-2xl border border-line/70 bg-surface/40 p-6 md:p-8">
            <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-rose-500/15">
              <Blocks className="h-5 w-5 text-rose-400" />
            </div>
            <h3 className="text-xl font-semibold">The challenge</h3>
            <ul className="mt-4 space-y-3 text-muted">
              <li className="flex gap-2">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-rose-400" />
                No structured visibility into how customers used the website
              </li>
              <li className="flex gap-2">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-rose-400" />
                Marketing and management needed data, not guesses
              </li>
              <li className="flex gap-2">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-rose-400" />
                Required event tracking, session grouping, and funnel dashboards
              </li>
              <li className="flex gap-2">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-rose-400" />
                Production e-commerce — data accuracy and performance mattered
              </li>
            </ul>
          </div>

          <div className="rounded-2xl border border-line/70 bg-surface/40 p-6 md:p-8">
            <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-500/15">
              <Zap className="h-5 w-5 text-emerald-400" />
            </div>
            <h3 className="text-xl font-semibold">The solution</h3>
            <p className="mt-4 leading-relaxed text-muted">
              I contributed to building an internal analytics platform under the engineering lead&apos;s technical direction —
              backend APIs, event tracking SDK, visitor journey features, and dashboard interfaces.
              The open-source GitHub recreation demonstrates the same architectural patterns at showcase-friendly scale.
            </p>
            <p className="mt-4 rounded-xl border border-amber-500/20 bg-amber-500/5 px-4 py-3 text-sm text-muted">
              <strong className="text-amber-300">Honest scope:</strong> I implemented major components — the engineering lead owned architecture, technology selection, and overall system design.
            </p>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="border-y border-line/60 bg-surface/20 py-16 md:py-20">
        <div className="mx-auto max-w-6xl px-4">
          <div className="mb-12 max-w-2xl">
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-signal-2">Platform capabilities</p>
            <h2 className="mt-2 text-3xl font-bold md:text-4xl">Built for reliable analytics at scale</h2>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {features.map((feature) => (
              <article
                key={feature.title}
                className="group rounded-2xl border border-line/60 bg-ink/40 p-5 transition-all hover:border-sky-500/30 hover:bg-surface/60"
              >
                <div
                  className={`mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br ${feature.accent} border border-white/5`}
                >
                  <feature.icon className="h-5 w-5 text-text" />
                </div>
                <h3 className="font-semibold">{feature.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{feature.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Responsibilities + Stack */}
      <section className="mx-auto max-w-6xl px-4 py-16 md:py-20">
        <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-signal">My contribution</p>
            <h2 className="mt-2 text-3xl font-bold">What I built</h2>
            <ul className="mt-8 space-y-3">
              {responsibilities.map((item) => (
                <li
                  key={item}
                  className="flex gap-3 rounded-xl border border-transparent px-3 py-2 transition-colors hover:border-line/50 hover:bg-surface/30"
                >
                  <BadgeCheck className="mt-0.5 h-4 w-4 shrink-0 text-sky-400" />
                  <span className="text-sm leading-relaxed text-muted">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-signal-2">Technical stack</p>
            <h2 className="mt-2 text-3xl font-bold">Architecture</h2>
            <div className="mt-8 space-y-2">
              {stack.map((row) => (
                <div
                  key={row.layer}
                  className="flex items-start justify-between gap-4 rounded-xl border border-line/50 bg-surface/30 px-4 py-3"
                >
                  <span className="shrink-0 font-mono text-xs uppercase tracking-wider text-sky-400/90">
                    {row.layer}
                  </span>
                  <span className="text-right text-sm text-muted">{row.tech}</span>
                </div>
              ))}
            </div>

            <div className="mt-8 rounded-2xl border border-line/60 bg-gradient-to-br from-violet-500/10 to-transparent p-5">
              <div className="flex items-center gap-2 text-sm font-medium">
                <Database className="h-4 w-4 text-violet-400" />
                Data flow
              </div>
              <p className="mt-3 font-mono text-xs leading-relaxed text-muted">
                Storefront SDK → Ingest API → MySQL
                <br />
                Session ID → Redis → 30-min gap logic
                <br />
                Dashboard → Blade UI → Aggregated queries
              </p>
            </div>

            <div className="mt-4 flex items-center gap-3 rounded-2xl border border-emerald-500/20 bg-emerald-500/5 px-4 py-3">
              <TestTube2 className="h-5 w-5 text-emerald-400" />
              <p className="text-sm text-muted">
                <strong className="text-emerald-300">43+ PHPUnit tests</strong> covering ingest, sessions, and bot detection
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Demo repo */}
      <section className="border-t border-line/60 bg-surface/20 py-16 md:py-20">
        <div className="mx-auto max-w-6xl px-4">
          <div className="grid gap-8 lg:grid-cols-2">
            <div className="rounded-3xl border border-line/70 bg-ink/50 p-8">
              <p className="font-mono text-xs uppercase tracking-[0.2em] text-signal-2">Portfolio recreation</p>
              <h2 className="mt-2 text-2xl font-bold md:text-3xl">Open-source on GitHub</h2>
              <p className="mt-4 leading-relaxed text-muted">
                An original recreation for portfolio code review — not a copy of the production EnoxTracker codebase.
                Demonstrates the same patterns: resilient SDK, secure ingest, session resolution, and admin drill-down.
              </p>

              <div className="mt-6 grid gap-2 sm:grid-cols-2">
                {demoFeatures.map((item) => (
                  <div key={item.label} className="rounded-xl border border-line/50 bg-surface/40 px-3 py-2.5">
                    <p className="text-xs font-semibold text-sky-400">{item.label}</p>
                    <p className="mt-0.5 text-xs text-muted">{item.detail}</p>
                  </div>
                ))}
              </div>

              <a
                href={project.repoUrl}
                target="_blank"
                rel="noreferrer"
                className="mt-6 inline-flex items-center gap-2 rounded-xl border border-line px-4 py-2.5 text-sm font-medium transition-colors hover:border-signal/40"
              >
                <Code2 className="h-4 w-4" />
                github.com/sazharul/ecommerce-analytics-platform
              </a>
            </div>

            <div className="rounded-3xl border border-sky-500/20 bg-gradient-to-br from-sky-500/10 via-surface/40 to-cyan-500/5 p-8">
              <p className="font-mono text-xs uppercase tracking-[0.2em] text-sky-400">Explore locally</p>
              <h2 className="mt-2 text-2xl font-bold">Clone and run</h2>

              <pre className="mt-6 overflow-x-auto rounded-xl border border-line/60 bg-ink p-4 font-mono text-xs leading-relaxed text-signal-2">
{`git clone https://github.com/sazharul/ecommerce-analytics-platform.git
cd ecommerce-analytics-platform
composer install && cp .env.example .env
php artisan key:generate && php artisan migrate --seed
npm install && npm run build && php artisan serve`}
              </pre>

              <div className="mt-6 space-y-2 text-sm text-muted">
                <p>Demo store → <span className="text-text">/demo-store</span></p>
                <p>Dashboard → <span className="text-text">/admin/tracker/dashboard</span></p>
                <p>Login → <span className="font-mono text-text">admin@analytics.demo</span> / <span className="font-mono text-text">password</span></p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SEO summary */}
      <section className="border-t border-line/60 py-12 md:py-16" aria-label="Project summary">
        <div className="mx-auto max-w-3xl px-4 text-center">
          <h2 className="text-xl font-semibold md:text-2xl">About this e-commerce analytics project</h2>
          <p className="mt-4 leading-relaxed text-muted" itemProp="articleBody">
            {seo.articleSummary} Developed by{" "}
            <Link href="/about" className="text-signal hover:underline">
              Md. Azharul Islam (Sohan)
            </Link>
            , a Laravel engineer with experience in event pipelines, Redis caching, and analytics dashboards.
            The open-source recreation on{" "}
            <a href={project.repoUrl} target="_blank" rel="noreferrer" className="text-signal hover:underline">
              GitHub
            </a>{" "}
            includes 43+ PHPUnit tests and can be cloned locally for code review — no public live demo is available.
          </p>
        </div>
      </section>

      <CaseStudyFaq faqs={seo.faqs} heading="E-commerce analytics FAQ" id="analytics-faq" />

      {/* CTA */}
      <section className="mx-auto max-w-6xl px-4 py-16 text-center md:py-20">
        <h2 className="text-2xl font-bold md:text-3xl">Need analytics or data platform work?</h2>
        <p className="mx-auto mt-3 max-w-xl text-muted">
          I build Laravel backends with event pipelines, Redis caching, and dashboards that teams actually use.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Link
            href="/contact"
            className="rounded-xl bg-signal px-5 py-3 text-sm font-medium text-ink transition-colors hover:bg-sky-300"
          >
            Get in touch
          </Link>
          <Link
            href="/projects"
            className="rounded-xl border border-line px-5 py-3 text-sm font-medium transition-colors hover:border-signal/40"
          >
            More projects
          </Link>
        </div>
      </section>
    </article>
  );
}
