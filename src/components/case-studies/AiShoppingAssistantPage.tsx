import Link from "next/link";
import {
  ArrowLeft,
  Bot,
  Brain,
  Code2,
  ExternalLink,
  Image,
  MessageSquare,
  Package,
  Search,
  Sparkles,
  Wand2,
  Zap,
} from "lucide-react";
import { CaseStudyFaq } from "@/components/case-studies/CaseStudyFaq";
import { PortfolioDemoBanner } from "@/components/case-studies/PortfolioDemoBanner";
import type { CaseStudySeo } from "@/content/case-study-seo";
import type { Project } from "@/content/projects";

const stats = [
  { value: "13+", label: "Agent tools" },
  { value: "2", label: "Hybrid RAG engines" },
  { value: "SSE", label: "Streaming chat" },
  { value: "18", label: "Demo products" },
];

const features = [
  {
    icon: Brain,
    title: "LangGraph Agent",
    description: "ReAct agent with tool routing for products, orders, returns, shipping, and support tickets.",
    accent: "from-violet-500/20 to-purple-500/5",
  },
  {
    icon: Search,
    title: "Product RAG",
    description: "Hybrid FAISS + BM25 search across synthetic catalog with department-aware retry strategy.",
    accent: "from-indigo-500/20 to-violet-500/5",
  },
  {
    icon: MessageSquare,
    title: "FAQ RAG",
    description: "Policy and shipping answers grounded in retrieved knowledge — no invented policies.",
    accent: "from-sky-500/20 to-cyan-500/5",
  },
  {
    icon: Zap,
    title: "SSE Streaming",
    description: "Token-by-token responses with structured product_data events for inline product cards.",
    accent: "from-amber-500/20 to-orange-500/5",
  },
  {
    icon: Image,
    title: "CLIP Image Search",
    description: "Optional visual similarity search built from demo placeholder images only.",
    accent: "from-rose-500/20 to-pink-500/5",
  },
  {
    icon: Package,
    title: "Order Tools",
    description: "Order status, returns, shipping address, discounts — stubbed via DEMO_MODE.",
    accent: "from-emerald-500/20 to-teal-500/5",
  },
  {
    icon: Bot,
    title: "Human Handoff",
    description: "Queue UI for live agent escalation when the bot cannot resolve an issue.",
    accent: "from-blue-500/20 to-indigo-500/5",
  },
  {
    icon: Wand2,
    title: "Embeddable Widget",
    description: "React chat widget with product carousel, colour/size selectors, and image upload.",
    accent: "from-fuchsia-500/20 to-violet-500/5",
  },
];

const responsibilities = [
  "Developed React/Next.js components for the embeddable production chat widget",
  "Built LangGraph ReAct agent with 13+ commerce tools and structured product responses",
  "Implemented hybrid FAISS + BM25 RAG for FAQ and product catalog search",
  "Integrated OpenAI GPT-4o with SSE streaming and product card rendering",
  "Added CLIP-based image search for visual product discovery",
  "Connected Laravel commerce API tools for orders, returns, and shipping",
  "Designed agent prompt with department handling and search retry strategy",
];

const stack = [
  { layer: "Backend", tech: "Python 3.11, FastAPI, LangGraph" },
  { layer: "AI", tech: "OpenAI GPT-4o, text-embedding-3-small" },
  { layer: "Retrieval", tech: "FAISS + BM25 hybrid search" },
  { layer: "Frontend", tech: "React 19, Vite 8, embeddable widget" },
  { layer: "Optional", tech: "CLIP image search (PyTorch)" },
  { layer: "Commerce", tech: "Laravel API integration (DEMO_MODE stubs)" },
  { layer: "Streaming", tech: "Server-Sent Events (SSE)" },
  { layer: "Persistence", tech: "SQLite chat store + agent checkpoints" },
];

const demoFeatures = [
  { label: "Rebrand", detail: "StyleHub — fictional demo retailer" },
  { label: "DEMO_MODE", detail: "All commerce API calls return stubs" },
  { label: "Catalog", detail: "18 synthetic products + 15 FAQs" },
  { label: "Images", detail: "Local SVG placeholders — no CDN" },
];

type AiShoppingAssistantPageProps = {
  project: Project;
  seo: CaseStudySeo;
};

export function AiShoppingAssistantPage({ project, seo }: AiShoppingAssistantPageProps) {
  return (
    <article className="ai-case-study overflow-hidden" itemScope itemType="https://schema.org/TechArticle">
      <meta itemProp="headline" content={seo.articleHeadline} />
      <meta itemProp="description" content={seo.articleSummary} />
      <meta itemProp="datePublished" content={seo.datePublished} />
      <meta itemProp="dateModified" content={seo.dateModified} />

      {/* Hero */}
      <section className="relative border-b border-line/60">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_-10%,rgba(139,92,246,0.2),transparent_55%)]" />
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_50%_40%_at_90%_20%,rgba(99,102,241,0.12),transparent_50%)]" />
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_40%_30%_at_10%_60%,rgba(168,85,247,0.08),transparent_50%)]" />

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
                <span className="inline-flex items-center gap-1.5 rounded-full border border-violet-500/30 bg-violet-500/10 px-3 py-1 text-xs font-medium text-violet-300">
                  <span className="h-1.5 w-1.5 rounded-full bg-violet-400 animate-pulse" />
                  Production live
                </span>
                <span className="rounded-full border border-line bg-surface/60 px-3 py-1 font-mono text-xs text-signal-2">
                  {project.company}
                </span>
              </div>

              <div className="flex items-start gap-4">
                <div className="hidden rounded-2xl border border-violet-500/20 bg-gradient-to-br from-violet-500/20 to-indigo-500/10 p-4 sm:block">
                  <Sparkles className="h-8 w-8 text-violet-400" />
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
                A conversational AI shopping assistant for UK fashion e-commerce — product discovery via RAG,
                FAQ answers, CLIP image search, order management tools, and an embeddable React chat widget
                on the production storefront.
              </p>

              <div className="flex flex-wrap gap-3 pt-1">
                {project.demoUrl ? (
                  <a
                    href={project.demoUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-violet-500 to-indigo-500 px-5 py-3 text-sm font-semibold text-ink shadow-lg shadow-violet-500/20 transition-transform hover:scale-[1.02]"
                  >
                    Live production widget
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

            {/* Agent flow mockup */}
            <div className="relative mx-auto w-full max-w-md lg:max-w-none">
              <div className="relative rounded-3xl border border-line/80 bg-surface/80 p-1 shadow-2xl shadow-black/40 backdrop-blur-sm">
                <div className="rounded-[1.35rem] bg-gradient-to-br from-[#16102a] via-[#1a1444] to-[#0d1117] p-6">
                  <div className="mb-5 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="flex h-8 w-8 items-center justify-center rounded-full bg-violet-500/20">
                        <Sparkles className="h-4 w-4 text-violet-400" />
                      </div>
                      <span className="text-sm font-semibold">StyleHub AI</span>
                    </div>
                    <span className="rounded-full bg-violet-500/15 px-2 py-0.5 text-[10px] font-medium text-violet-300">
                      Streaming
                    </span>
                  </div>

                  <div className="space-y-3">
                    <div className="rounded-xl border border-white/5 bg-white/[0.03] px-4 py-3">
                      <p className="text-[11px] text-muted">User</p>
                      <p className="mt-1 text-sm">Find me a blue dress under £50</p>
                    </div>
                    <div className="rounded-xl border border-violet-500/20 bg-violet-500/5 px-4 py-3">
                      <p className="text-[11px] text-violet-300">Agent → search_products</p>
                      <p className="mt-1 text-sm text-muted">FAISS + BM25 retrieval</p>
                    </div>
                    <div className="flex gap-2">
                      {["Floral Midi", "Satin Slip", "Wrap Dress"].map((name) => (
                        <div
                          key={name}
                          className="flex-1 rounded-lg border border-white/5 bg-white/[0.02] py-3 text-center text-[10px] text-muted"
                        >
                          {name}
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="mt-5 grid grid-cols-3 gap-2">
                    {["RAG", "Tools", "SSE"].map((label) => (
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
                <p className="text-sm font-semibold text-signal">LangGraph + RAG</p>
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
              <p className="font-mono text-3xl font-bold text-violet-400 md:text-4xl">{stat.value}</p>
              <p className="mt-2 text-sm text-muted">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Overview */}
      <section className="mx-auto max-w-6xl px-4 py-16 md:py-20">
        <div className="mb-10 max-w-2xl">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-violet-400/80">Overview</p>
          <h2 className="mt-2 text-3xl font-bold md:text-4xl">AI that actually helps customers shop</h2>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-2xl border border-line/70 bg-surface/40 p-6 md:p-8">
            <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-violet-500/15">
              <Brain className="h-5 w-5 text-violet-400" />
            </div>
            <h3 className="text-xl font-semibold">The challenge</h3>
            <ul className="mt-4 space-y-3 text-muted">
              <li className="flex gap-2">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-violet-400" />
                Customers need conversational product discovery, not keyword search
              </li>
              <li className="flex gap-2">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-violet-400" />
                FAQ and policy answers must be grounded in real store data
              </li>
              <li className="flex gap-2">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-violet-400" />
                Order lookups, returns, and shipping need live commerce API integration
              </li>
            </ul>
          </div>

          <div className="rounded-2xl border border-line/70 bg-surface/40 p-6 md:p-8">
            <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-500/15">
              <Zap className="h-5 w-5 text-indigo-400" />
            </div>
            <h3 className="text-xl font-semibold">The solution</h3>
            <ul className="mt-4 space-y-3 text-muted">
              <li className="flex gap-2">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-indigo-400" />
                LangGraph ReAct agent routes to 13+ specialised commerce tools
              </li>
              <li className="flex gap-2">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-indigo-400" />
                Hybrid FAISS + BM25 RAG for both products and FAQ knowledge
              </li>
              <li className="flex gap-2">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-indigo-400" />
                SSE streaming with inline product cards in an embeddable React widget
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Features grid */}
      <section className="border-t border-line/60 bg-surface/20 py-16 md:py-20">
        <div className="mx-auto max-w-6xl px-4">
          <div className="mb-10 max-w-2xl">
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-violet-400/80">Capabilities</p>
            <h2 className="mt-2 text-3xl font-bold md:text-4xl">Agent, RAG, and commerce tools</h2>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {features.map((feature) => (
              <div
                key={feature.title}
                className={`rounded-2xl border border-line/60 bg-gradient-to-br ${feature.accent} p-5`}
              >
                <feature.icon className="h-5 w-5 text-violet-300" />
                <h3 className="mt-3 font-semibold">{feature.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Responsibilities + stack */}
      <section className="mx-auto max-w-6xl px-4 py-16 md:py-20">
        <div className="grid gap-8 lg:grid-cols-2">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-violet-400/80">My contributions</p>
            <h2 className="mt-2 text-2xl font-bold md:text-3xl">What I built</h2>
            <ul className="mt-6 space-y-3">
              {responsibilities.map((item) => (
                <li key={item} className="flex gap-3 text-muted">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-violet-400" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-2xl border border-line/70 bg-surface/40 p-6">
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-violet-400/80">Tech stack</p>
            <h2 className="mt-2 text-2xl font-bold">Production architecture</h2>
            <dl className="mt-6 space-y-3">
              {stack.map((row) => (
                <div key={row.layer} className="flex gap-4 border-b border-line/40 pb-3 last:border-0">
                  <dt className="w-24 shrink-0 font-mono text-xs text-violet-400">{row.layer}</dt>
                  <dd className="text-sm text-muted">{row.tech}</dd>
                </div>
              ))}
            </dl>
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
                Rebranded as <strong className="text-text">StyleHub</strong> with synthetic catalog data and DEMO_MODE API stubs.
              </p>

              <div className="mt-6 grid gap-2 sm:grid-cols-2">
                {demoFeatures.map((item) => (
                  <div key={item.label} className="rounded-xl border border-line/50 bg-surface/40 px-3 py-2.5">
                    <p className="text-xs font-semibold text-violet-400">{item.label}</p>
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
                github.com/sazharul/ai-shopping-assistant-demo
              </a>
            </div>

            <div className="rounded-3xl border border-violet-500/20 bg-gradient-to-br from-violet-500/10 via-surface/40 to-indigo-500/5 p-8">
              <p className="font-mono text-xs uppercase tracking-[0.2em] text-violet-400">Run locally</p>
              <h2 className="mt-2 text-2xl font-bold">Docker one-command setup</h2>

              <pre className="mt-6 overflow-x-auto rounded-xl border border-line/60 bg-ink p-4 font-mono text-xs leading-relaxed text-signal-2">
{`git clone https://github.com/sazharul/ai-shopping-assistant-demo.git
cd ai-shopping-assistant-demo
export OPENAI_API_KEY=your-key
docker compose up --build`}
              </pre>

              <div className="mt-6 space-y-2 text-sm text-muted">
                <p>Widget → <span className="text-text">localhost:5173</span></p>
                <p>API → <span className="text-text">localhost:8001/docs</span></p>
                <p>Admin → <span className="font-mono text-text">admin@stylehub.demo</span></p>
              </div>

              {project.demoUrl ? (
                <a
                  href={project.demoUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-violet-400 transition-colors hover:text-violet-300"
                >
                  Compare with production widget at enorsia.com
                  <ExternalLink className="h-4 w-4" />
                </a>
              ) : null}
            </div>
          </div>
        </div>
      </section>

      {/* SEO summary */}
      <section className="border-t border-line/60 py-12 md:py-16" aria-label="Project summary">
        <div className="mx-auto max-w-3xl px-4 text-center">
          <h2 className="text-xl font-semibold md:text-2xl">About this AI shopping assistant project</h2>
          <p className="mt-4 leading-relaxed text-muted" itemProp="articleBody">
            {seo.articleSummary} Built by{" "}
            <Link href="/about" className="text-signal hover:underline">
              Md. Azharul Islam (Sohan)
            </Link>
            , a software developer specialising in Laravel backends and AI integrations. The production widget
            is embedded on the Enorsia UK fashion storefront. Review the{" "}
            <a href={project.repoUrl} target="_blank" rel="noreferrer" className="text-signal hover:underline">
              open-source demo on GitHub
            </a>{" "}
            or try the{" "}
            <a href={project.demoUrl} target="_blank" rel="noreferrer" className="text-signal hover:underline">
              live production site
            </a>
            .
          </p>
        </div>
      </section>

      <CaseStudyFaq faqs={seo.faqs} heading="AI shopping assistant FAQ" id="ai-shopping-faq" />

      {/* CTA */}
      <section className="mx-auto max-w-6xl px-4 py-16 text-center md:py-20">
        <h2 className="text-2xl font-bold md:text-3xl">Interested in AI-powered e-commerce?</h2>
        <p className="mx-auto mt-3 max-w-xl text-muted">
          I build LangGraph agents, RAG pipelines, and production chat widgets for real storefronts.
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
