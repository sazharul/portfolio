import Link from "next/link";
import {
  ArrowLeft,
  BadgeCheck,
  Blocks,
  Database,
  Code2,
  ExternalLink,
  Heart,
  Lock,
  MessageCircle,
  Search,
  Shield,
  Sparkles,
  Users,
  Video,
  Zap,
} from "lucide-react";
import { CaseStudyFaq } from "@/components/case-studies/CaseStudyFaq";
import type { CaseStudySeo } from "@/content/case-study-seo";
import type { Project } from "@/content/projects";

const stats = [
  { value: "57", label: "Database migrations" },
  { value: "32", label: "Eloquent models" },
  { value: "30+", label: "API endpoints" },
  { value: "2", label: "Admin panels" },
];

const features = [
  {
    icon: BadgeCheck,
    title: "Verified Profiles",
    description: "NID, photo, and email verification with admin moderation before profiles go live.",
    accent: "from-amber-500/20 to-orange-500/5",
  },
  {
    icon: Zap,
    title: "Smart Matching",
    description: "Compatibility scoring across religion, education, location, lifestyle, and preferences.",
    accent: "from-violet-500/20 to-purple-500/5",
  },
  {
    icon: MessageCircle,
    title: "Real-time Chat",
    description: "Laravel Reverb WebSockets with typing indicators, read receipts, and mutual-interest gating.",
    accent: "from-sky-500/20 to-cyan-500/5",
  },
  {
    icon: Video,
    title: "HD Video Calls",
    description: "WebRTC audio and video inside the platform — no personal phone numbers shared.",
    accent: "from-rose-500/20 to-pink-500/5",
  },
  {
    icon: Sparkles,
    title: "Face Verification",
    description: "MediaPipe live face scan matched to profile photos to reduce fake accounts.",
    accent: "from-emerald-500/20 to-teal-500/5",
  },
  {
    icon: Search,
    title: "Advanced Search",
    description: "Public and authenticated search with filters for age, religion, location, and profession.",
    accent: "from-blue-500/20 to-indigo-500/5",
  },
  {
    icon: Lock,
    title: "Privacy Controls",
    description: "Photo visibility rules, consent-based contact sharing, and encrypted platform infrastructure.",
    accent: "from-slate-500/20 to-zinc-500/5",
  },
  {
    icon: Users,
    title: "Subscription Tiers",
    description: "Free and Gold plans with feature gating, SSLCommerz payments, and invoice generation.",
    accent: "from-amber-500/20 to-yellow-500/5",
  },
];

const responsibilities = [
  "Laravel 12 REST API with versioning, Sanctum auth, and Swagger documentation",
  "Next.js 16 frontend with App Router, TanStack Query, and shadcn/ui",
  "Compatibility matching algorithm with daily match digest job",
  "Real-time chat via Laravel Reverb with typing indicators and read receipts",
  "WebRTC audio/video call signaling and ICE server management",
  "Face scan verification using MediaPipe (browser-side)",
  "Subscription tiers with SSLCommerz payment integration",
  "Admin panels — Next.js admin and Laravel Blade super-admin",
  "Photo moderation, report queue, and CMS for public pages",
  "Database design across 57 migrations and 32 Eloquent models",
];

const stack = [
  { layer: "Backend", tech: "Laravel 12, PHP 8.2+, REST APIs" },
  { layer: "Frontend", tech: "Next.js 16, React 19, TypeScript" },
  { layer: "Database", tech: "MySQL 8" },
  { layer: "Auth", tech: "Laravel Sanctum" },
  { layer: "Real-time", tech: "Laravel Reverb, Laravel Echo" },
  { layer: "Styling", tech: "Tailwind CSS 4, shadcn/ui" },
  { layer: "State", tech: "Zustand, TanStack Query" },
  { layer: "Search", tech: "Laravel Scout" },
  { layer: "Payments", tech: "SSLCommerz" },
  { layer: "Calls", tech: "WebRTC + coturn TURN" },
  { layer: "Face scan", tech: "MediaPipe Tasks Vision" },
  { layer: "Storage", tech: "Cloudflare R2 + Images" },
];

const demoFeatures = [
  { label: "Rebrand", detail: "MatriConnect — fictional demo name" },
  { label: "Payments", detail: "DEMO_MODE bypasses SSLCommerz" },
  { label: "Photos", detail: "SVG placeholder avatars" },
  { label: "Users", detail: "30 seeded demo accounts" },
];

type MatrimonyPlatformPageProps = {
  project: Project;
  seo: CaseStudySeo;
};

export function MatrimonyPlatformPage({ project, seo }: MatrimonyPlatformPageProps) {
  return (
    <article className="matrimony-case-study overflow-hidden" itemScope itemType="https://schema.org/TechArticle">
      <meta itemProp="headline" content={seo.articleHeadline} />
      <meta itemProp="description" content={seo.articleSummary} />
      <meta itemProp="datePublished" content={seo.datePublished} />
      <meta itemProp="dateModified" content={seo.dateModified} />
      {/* Hero */}
      <section className="relative border-b border-line/60">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_-10%,rgba(245,165,36,0.18),transparent_55%)]" />
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_50%_40%_at_90%_20%,rgba(244,114,182,0.1),transparent_50%)]" />
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_40%_30%_at_10%_60%,rgba(56,189,248,0.08),transparent_50%)]" />

        <div className="relative mx-auto max-w-6xl px-4 pb-16 pt-10 md:pb-24 md:pt-14">
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 text-sm text-muted transition-colors hover:text-signal"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to projects
          </Link>

          <div className="mt-8 grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
            <div className="space-y-6">
              <div className="flex flex-wrap items-center gap-3">
                <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1 text-xs font-medium text-emerald-300">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  Production live
                </span>
                <span className="rounded-full border border-line bg-surface/60 px-3 py-1 font-mono text-xs text-signal-2">
                  {project.company}
                </span>
              </div>

              <div className="flex items-start gap-4">
                <div className="hidden rounded-2xl border border-amber-500/20 bg-gradient-to-br from-amber-500/20 to-rose-500/10 p-4 sm:block">
                  <Heart className="h-8 w-8 text-amber-400" />
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
                A family-friendly matrimonial platform for Bangladesh and the NRB community — verified profiles,
                smart matching, secure chat, HD video calls, and subscription-based premium features.
              </p>

              <div className="flex flex-wrap gap-3 pt-1">
                {project.demoUrl ? (
                  <a
                    href={project.demoUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-amber-500 to-orange-500 px-5 py-3 text-sm font-semibold text-ink shadow-lg shadow-amber-500/20 transition-transform hover:scale-[1.02]"
                  >
                    Live production site
                    <ExternalLink className="h-4 w-4" />
                  </a>
                ) : null}
                <a
                  href={project.repoUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-xl border border-line bg-surface/50 px-5 py-3 text-sm font-medium transition-colors hover:border-signal/40 hover:bg-surface"
                >
                  <Code2 className="h-4 w-4" />
                  Open-source demo
                </a>
              </div>

              <div className="flex flex-wrap gap-2 pt-2">
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

            {/* Visual mockup */}
            <div className="relative mx-auto w-full max-w-md lg:max-w-none">
              <div className="matrimony-hero-card relative rounded-3xl border border-line/80 bg-surface/80 p-1 shadow-2xl shadow-black/40 backdrop-blur-sm">
                <div className="rounded-[1.35rem] bg-gradient-to-br from-[#161b27] via-[#1a2744] to-[#0d1117] p-6">
                  <div className="mb-5 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="flex h-8 w-8 items-center justify-center rounded-full bg-amber-500/20">
                        <Heart className="h-4 w-4 text-amber-400" />
                      </div>
                      <span className="text-sm font-semibold">My Bouma</span>
                    </div>
                    <span className="rounded-full bg-emerald-500/15 px-2 py-0.5 text-[10px] font-medium text-emerald-300">
                      Verified
                    </span>
                  </div>

                  <div className="space-y-3">
                    {[
                      { name: "Daily Matches", score: "91%", color: "bg-amber-500" },
                      { name: "Secure Chat", score: "Live", color: "bg-sky-500" },
                      { name: "Video Call", score: "HD", color: "bg-rose-500" },
                    ].map((item) => (
                      <div
                        key={item.name}
                        className="flex items-center justify-between rounded-xl border border-white/5 bg-white/[0.03] px-4 py-3"
                      >
                        <span className="text-sm text-muted">{item.name}</span>
                        <span className={`rounded-md px-2 py-0.5 text-xs font-semibold text-ink ${item.color}`}>
                          {item.score}
                        </span>
                      </div>
                    ))}
                  </div>

                  <div className="mt-5 grid grid-cols-3 gap-2">
                    {["Profiles", "Interests", "Admin"].map((label) => (
                      <div
                        key={label}
                        className="rounded-lg border border-white/5 bg-white/[0.02] py-3 text-center text-[11px] text-muted"
                      >
                        {label}
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="absolute -right-4 -top-4 rounded-2xl border border-line/60 bg-surface px-3 py-2 shadow-xl">
                <p className="font-mono text-[10px] uppercase tracking-wider text-muted">Stack</p>
                <p className="text-sm font-semibold text-signal">Laravel + Next.js</p>
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
              <p className="font-mono text-3xl font-bold text-amber-400 md:text-4xl">{stat.value}</p>
              <p className="mt-2 text-sm text-muted">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Overview */}
      <section className="mx-auto max-w-6xl px-4 py-16 md:py-20">
        <div className="mb-10 max-w-2xl">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-amber-400/80">Overview</p>
          <h2 className="mt-2 text-3xl font-bold md:text-4xl">Built for trust, privacy, and real connections</h2>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-2xl border border-line/70 bg-surface/40 p-6 md:p-8">
            <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-rose-500/15">
              <Shield className="h-5 w-5 text-rose-400" />
            </div>
            <h3 className="text-xl font-semibold">The challenge</h3>
            <ul className="mt-4 space-y-3 text-muted">
              <li className="flex gap-2">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-rose-400" />
                Families need a trusted, privacy-first platform for serious matchmaking
              </li>
              <li className="flex gap-2">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-rose-400" />
                Fake profiles undermine confidence for both users and families
              </li>
              <li className="flex gap-2">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-rose-400" />
                Premium features require subscription management and secure payments
              </li>
              <li className="flex gap-2">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-rose-400" />
                Communication must stay private without sharing phone numbers
              </li>
            </ul>
          </div>

          <div className="rounded-2xl border border-line/70 bg-surface/40 p-6 md:p-8">
            <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-500/15">
              <Blocks className="h-5 w-5 text-emerald-400" />
            </div>
            <h3 className="text-xl font-semibold">The solution</h3>
            <p className="mt-4 leading-relaxed text-muted">
              I built the full-stack application end to end — Laravel API backend, Next.js frontend,
              real-time chat, WebRTC calls, subscription payments, face verification, and admin moderation tools.
              The platform serves thousands of families with verified profiles, smart compatibility scoring,
              and family-friendly communication workflows.
            </p>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="border-y border-line/60 bg-surface/20 py-16 md:py-20">
        <div className="mx-auto max-w-6xl px-4">
          <div className="mb-12 max-w-2xl">
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-signal-2">Platform features</p>
            <h2 className="mt-2 text-3xl font-bold md:text-4xl">Everything a modern matrimony platform needs</h2>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {features.map((feature) => (
              <article
                key={feature.title}
                className="group rounded-2xl border border-line/60 bg-ink/40 p-5 transition-all hover:border-amber-500/30 hover:bg-surface/60"
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
                <li key={item} className="flex gap-3 rounded-xl border border-transparent px-3 py-2 transition-colors hover:border-line/50 hover:bg-surface/30">
                  <BadgeCheck className="mt-0.5 h-4 w-4 shrink-0 text-amber-400" />
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
                  <span className="shrink-0 font-mono text-xs uppercase tracking-wider text-amber-400/90">
                    {row.layer}
                  </span>
                  <span className="text-right text-sm text-muted">{row.tech}</span>
                </div>
              ))}
            </div>

            <div className="mt-8 rounded-2xl border border-line/60 bg-gradient-to-br from-sky-500/10 to-transparent p-5">
              <div className="flex items-center gap-2 text-sm font-medium">
                <Database className="h-4 w-4 text-sky-400" />
                Data flow
              </div>
              <p className="mt-3 font-mono text-xs leading-relaxed text-muted">
                Browser → Next.js → Laravel API → MySQL
                <br />
                WebSocket → Reverb → Real-time events
                <br />
                WebRTC → Signaling API → TURN server
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
              <h2 className="mt-2 text-2xl font-bold md:text-3xl">Open-source demo on GitHub</h2>
              <p className="mt-4 leading-relaxed text-muted">
                A sanitized, copyright-safe recreation for recruiters and engineers to clone and run locally.
                Rebranded as <strong className="text-text">MatriConnect</strong> with demo mode payments and placeholder avatars.
              </p>

              <div className="mt-6 grid gap-2 sm:grid-cols-2">
                {demoFeatures.map((item) => (
                  <div key={item.label} className="rounded-xl border border-line/50 bg-surface/40 px-3 py-2.5">
                    <p className="text-xs font-semibold text-amber-400">{item.label}</p>
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
                github.com/sazharul/matrimony-platform-demo
              </a>
            </div>

            <div className="rounded-3xl border border-amber-500/20 bg-gradient-to-br from-amber-500/10 via-surface/40 to-rose-500/5 p-8">
              <p className="font-mono text-xs uppercase tracking-[0.2em] text-amber-400">Run locally</p>
              <h2 className="mt-2 text-2xl font-bold">Docker one-command setup</h2>

              <pre className="mt-6 overflow-x-auto rounded-xl border border-line/60 bg-ink p-4 font-mono text-xs leading-relaxed text-signal-2">
{`git clone https://github.com/sazharul/matrimony-platform-demo.git
cd matrimony-platform-demo
docker compose up --build`}
              </pre>

              <div className="mt-6 space-y-2 text-sm text-muted">
                <p>Frontend → <span className="text-text">localhost:3000</span></p>
                <p>API → <span className="text-text">localhost:8000</span></p>
                <p>Admin → <span className="font-mono text-text">admin@matriconnect.demo</span></p>
              </div>

              {project.demoUrl ? (
                <a
                  href={project.demoUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-amber-400 transition-colors hover:text-amber-300"
                >
                  Compare with production at mybouma.com
                  <ExternalLink className="h-4 w-4" />
                </a>
              ) : null}
            </div>
          </div>
        </div>
      </section>

      {/* SEO summary — crawlable context for search engines */}
      <section className="border-t border-line/60 py-12 md:py-16" aria-label="Project summary">
        <div className="mx-auto max-w-3xl px-4 text-center">
          <h2 className="text-xl font-semibold md:text-2xl">About this matrimony platform project</h2>
          <p className="mt-4 leading-relaxed text-muted" itemProp="articleBody">
            {seo.articleSummary} Built by{" "}
            <Link href="/about" className="text-signal hover:underline">
              Md. Azharul Islam (Sohan)
            </Link>
            , a senior Laravel and Next.js developer based in Dhaka, Bangladesh. The production platform serves
            families across Bangladesh and the NRB community with verified profile matching, secure real-time
            communication, and subscription-based premium features. Review the{" "}
            <a href={project.repoUrl} target="_blank" rel="noreferrer" className="text-signal hover:underline">
              open-source demo on GitHub
            </a>{" "}
            or visit the{" "}
            <a href={project.demoUrl} target="_blank" rel="noreferrer" className="text-signal hover:underline">
              live production site
            </a>
            .
          </p>
        </div>
      </section>

      <CaseStudyFaq faqs={seo.faqs} heading="Matrimony platform FAQ" id="matrimony-faq" />

      {/* CTA */}
      <section className="mx-auto max-w-6xl px-4 py-16 text-center md:py-20">
        <h2 className="text-2xl font-bold md:text-3xl">Interested in similar full-stack work?</h2>
        <p className="mx-auto mt-3 max-w-xl text-muted">
          I build production Laravel and Next.js systems — real-time features, payments, and admin tools included.
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
