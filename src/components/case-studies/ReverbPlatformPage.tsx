import Link from "next/link";
import {
  Activity,
  ArrowLeft,
  Blocks,
  Code2,
  Layers,
  Lock,
  Radio,
  Server,
  Shield,
  TestTube2,
  Zap,
} from "lucide-react";
import { CaseStudyFaq } from "@/components/case-studies/CaseStudyFaq";
import type { CaseStudySeo } from "@/content/case-study-seo";
import type { Project } from "@/content/projects";

const stats = [
  { value: "Multi", label: "Tenant Reverb apps" },
  { value: "HMAC", label: "Signed event API" },
  { value: "Pest", label: "Feature tests" },
  { value: "Pulse", label: "Production monitoring" },
];

const features = [
  {
    icon: Layers,
    title: "Multi-tenant Apps",
    description: "Database-driven ApplicationProvider — each user gets isolated Reverb app credentials.",
    accent: "from-cyan-500/20 to-sky-500/5",
  },
  {
    icon: Lock,
    title: "HMAC Event API",
    description: "Server-side broadcasts via signed POST /api/v1/events with X-App-Key and X-Signature headers.",
    accent: "from-sky-500/20 to-blue-500/5",
  },
  {
    icon: Shield,
    title: "Channel ACLs",
    description: "Registered channel enforcement per plan — block unregistered channels on free tiers.",
    accent: "from-indigo-500/20 to-violet-500/5",
  },
  {
    icon: Radio,
    title: "Custom EventDispatcher",
    description: "Vendor class override adds permission gates, structured logging, and DB event persistence.",
    accent: "from-emerald-500/20 to-teal-500/5",
  },
  {
    icon: Server,
    title: "Plan Limits",
    description: "Apps, connections, daily messages, and channels capped per subscription tier.",
    accent: "from-blue-500/20 to-cyan-500/5",
  },
  {
    icon: Activity,
    title: "Event Log Dashboard",
    description: "Livewire tables showing delivery status, payloads, and failed event tracking.",
    accent: "from-rose-500/20 to-pink-500/5",
  },
  {
    icon: Zap,
    title: "DEMO_MODE",
    description: "Instant paid plan activation without SSLCommerz — clone and explore locally.",
    accent: "from-amber-500/20 to-orange-500/5",
  },
  {
    icon: Blocks,
    title: "Admin + RBAC",
    description: "Spatie permissions for super-admin, user management, and system settings.",
    accent: "from-violet-500/20 to-purple-500/5",
  },
];

const responsibilities = [
  "Built multi-tenant Reverb ApplicationProvider loading apps from MySQL with cache",
  "Implemented HMAC-signed event trigger API with plan-based rate limits",
  "Replaced vendor EventDispatcher via composer classmap for channel ACLs and logging",
  "Designed subscription plans with connection caps, message quotas, and channel limits",
  "Integrated SSLCommerz payments with DEMO_MODE bypass for portfolio demo",
  "Added Laravel Pulse cards for Reverb channel and message monitoring",
];

const stack = [
  { layer: "Backend", tech: "Laravel 12, PHP 8.2+, Livewire" },
  { layer: "Real-time", tech: "Laravel Reverb (WebSockets)" },
  { layer: "Auth", tech: "Session auth + Sanctum API tokens" },
  { layer: "Permissions", tech: "Spatie Laravel Permission" },
  { layer: "Payments", tech: "SSLCommerz (DEMO_MODE bypass)" },
  { layer: "Monitoring", tech: "Laravel Pulse" },
  { layer: "Queue", tech: "Database queue for event log jobs" },
  { layer: "Tests", tech: "Pest feature tests" },
];

const demoFeatures = [
  { label: "Rebrand", detail: "PulseWire — fictional SaaS name" },
  { label: "DEMO_MODE", detail: "Instant plan activation" },
  { label: "Seeded app", detail: "Known API key for examples" },
  { label: "Docker", detail: "app + reverb + queue + mysql" },
];

type ReverbPlatformPageProps = {
  project: Project;
  seo: CaseStudySeo;
};

export function ReverbPlatformPage({ project, seo }: ReverbPlatformPageProps) {
  return (
    <article className="reverb-case-study overflow-hidden" itemScope itemType="https://schema.org/TechArticle">
      <meta itemProp="headline" content={seo.articleHeadline} />
      <meta itemProp="description" content={seo.articleSummary} />
      <meta itemProp="datePublished" content={seo.datePublished} />
      <meta itemProp="dateModified" content={seo.dateModified} />

      <section className="relative border-b border-line/60">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_-10%,rgba(56,189,248,0.16),transparent_55%)]" />
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_50%_40%_at_85%_25%,rgba(94,234,212,0.1),transparent_50%)]" />

        <div className="relative mx-auto max-w-6xl px-4 pb-16 pt-10 md:pb-24 md:pt-14">
          <Link href="/projects" className="inline-flex items-center gap-2 text-sm text-muted transition-colors hover:text-signal">
            <ArrowLeft className="h-4 w-4" />
            Back to projects
          </Link>

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

              <h1 className="text-4xl font-bold leading-tight md:text-5xl">{project.title}</h1>
              <p className="max-w-xl text-lg leading-relaxed text-muted md:text-xl">{project.tagline}</p>
              <p className="max-w-2xl leading-relaxed text-muted/90">
                A self-hosted Pusher-style platform on Laravel Reverb — manage multi-tenant apps, signed event APIs,
                channel permissions, and subscription billing from one dashboard.
              </p>

              <a
                href={project.repoUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-sky-500 to-cyan-500 px-5 py-3 text-sm font-semibold text-ink shadow-lg shadow-sky-500/20 transition-transform hover:scale-[1.02]"
              >
                <Code2 className="h-4 w-4" />
                Open-source demo
              </a>

              <div className="flex flex-wrap gap-2 pt-2">
                {project.tags.map((tag) => (
                  <span key={tag} className="rounded-lg border border-line/80 bg-ink/50 px-2.5 py-1 font-mono text-xs text-signal-2">
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <div className="relative mx-auto w-full max-w-md lg:max-w-none">
              <div className="rounded-3xl border border-line/80 bg-surface/80 p-1 shadow-2xl shadow-black/40">
                <div className="rounded-[1.35rem] bg-gradient-to-br from-[#0c1929] via-[#0f2744] to-[#0d1117] p-6">
                  <div className="mb-5 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Radio className="h-4 w-4 text-cyan-400" />
                      <span className="text-sm font-semibold">PulseWire</span>
                    </div>
                    <span className="rounded-full bg-cyan-500/15 px-2 py-0.5 text-[10px] font-medium text-cyan-300">Live</span>
                  </div>
                  <div className="space-y-3">
                    <div className="rounded-xl border border-white/5 bg-white/[0.03] px-4 py-3 text-sm">
                      POST /api/v1/events → orders
                    </div>
                    <div className="rounded-xl border border-cyan-500/20 bg-cyan-500/5 px-4 py-3 text-sm text-muted">
                      Reverb → WebSocket subscribers
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-line/60 bg-surface/30">
        <div className="mx-auto grid max-w-6xl grid-cols-2 gap-px bg-line/40 md:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label} className="bg-ink px-6 py-8 text-center md:py-10">
              <p className="font-mono text-3xl font-bold text-cyan-400 md:text-4xl">{stat.value}</p>
              <p className="mt-2 text-sm text-muted">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="border-t border-line/60 bg-surface/20 py-16 md:py-20">
        <div className="mx-auto max-w-6xl px-4">
          <div className="mb-10 max-w-2xl">
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-cyan-400/80">Capabilities</p>
            <h2 className="mt-2 text-3xl font-bold md:text-4xl">Real-time infrastructure as a product</h2>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {features.map((feature) => (
              <div key={feature.title} className={`rounded-2xl border border-line/60 bg-gradient-to-br ${feature.accent} p-5`}>
                <feature.icon className="h-5 w-5 text-cyan-300" />
                <h3 className="mt-3 font-semibold">{feature.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16 md:py-20">
        <div className="grid gap-8 lg:grid-cols-2">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-cyan-400/80">My contributions</p>
            <h2 className="mt-2 text-2xl font-bold md:text-3xl">What I built</h2>
            <ul className="mt-6 space-y-3">
              {responsibilities.map((item) => (
                <li key={item} className="flex gap-3 text-muted">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-400" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-2xl border border-line/70 bg-surface/40 p-6">
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-cyan-400/80">Tech stack</p>
            <dl className="mt-6 space-y-3">
              {stack.map((row) => (
                <div key={row.layer} className="flex gap-4 border-b border-line/40 pb-3 last:border-0">
                  <dt className="w-24 shrink-0 font-mono text-xs text-cyan-400">{row.layer}</dt>
                  <dd className="text-sm text-muted">{row.tech}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>

      <section className="border-t border-line/60 bg-surface/20 py-16 md:py-20">
        <div className="mx-auto max-w-6xl px-4">
          <div className="grid gap-8 lg:grid-cols-2">
            <div className="rounded-3xl border border-line/70 bg-ink/50 p-8">
              <h2 className="text-2xl font-bold">Open-source on GitHub</h2>
              <p className="mt-4 text-muted">
                Rebranded as <strong className="text-text">PulseWire</strong> with demo seeders, DEMO_MODE payments, and Docker Compose.
              </p>
              <div className="mt-6 grid gap-2 sm:grid-cols-2">
                {demoFeatures.map((item) => (
                  <div key={item.label} className="rounded-xl border border-line/50 bg-surface/40 px-3 py-2.5">
                    <p className="text-xs font-semibold text-cyan-400">{item.label}</p>
                    <p className="mt-0.5 text-xs text-muted">{item.detail}</p>
                  </div>
                ))}
              </div>
              <a href={project.repoUrl} target="_blank" rel="noreferrer" className="mt-6 inline-flex items-center gap-2 text-sm text-signal hover:underline">
                <Code2 className="h-4 w-4" />
                github.com/sazharul/reverb-platform-demo
              </a>
            </div>
            <div className="rounded-3xl border border-cyan-500/20 bg-gradient-to-br from-cyan-500/10 via-surface/40 to-sky-500/5 p-8">
              <h2 className="text-2xl font-bold">Docker quick start</h2>
              <pre className="mt-6 overflow-x-auto rounded-xl border border-line/60 bg-ink p-4 font-mono text-xs text-signal-2">
{`git clone https://github.com/sazharul/reverb-platform-demo.git
cd reverb-platform-demo
docker compose up --build`}
              </pre>
              <div className="mt-6 space-y-2 text-sm text-muted">
                <p>Dashboard → <span className="text-text">localhost:8000</span></p>
                <p>Reverb → <span className="text-text">localhost:8080</span></p>
                <p>Login → <span className="font-mono text-text">demo@pulsewire.demo</span></p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-line/60 py-12 md:py-16" aria-label="Project summary">
        <div className="mx-auto max-w-3xl px-4 text-center">
          <h2 className="text-xl font-semibold md:text-2xl">About this real-time event platform</h2>
          <p className="mt-4 leading-relaxed text-muted" itemProp="articleBody">
            {seo.articleSummary} Built by{" "}
            <Link href="/about" className="text-signal hover:underline">Md. Azharul Islam (Sohan)</Link>.
            Powers similar workloads to the real-time chat on the{" "}
            <Link href="/projects/matrimony-platform" className="text-signal hover:underline">Matrimony Platform</Link> case study.
            Clone the{" "}
            <a href={project.repoUrl} target="_blank" rel="noreferrer" className="text-signal hover:underline">GitHub demo</a> locally.
          </p>
        </div>
      </section>

      <CaseStudyFaq faqs={seo.faqs} heading="Real-time platform FAQ" id="reverb-faq" />

      <section className="mx-auto max-w-6xl px-4 py-16 text-center md:py-20">
        <h2 className="text-2xl font-bold md:text-3xl">Need real-time Laravel infrastructure?</h2>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Link href="/contact" className="rounded-xl bg-signal px-5 py-3 text-sm font-medium text-ink hover:bg-sky-300">Get in touch</Link>
          <Link href="/projects" className="rounded-xl border border-line px-5 py-3 text-sm font-medium hover:border-signal/40">More projects</Link>
        </div>
      </section>
    </article>
  );
}
