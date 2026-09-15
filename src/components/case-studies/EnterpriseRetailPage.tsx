import Link from "next/link";
import {
  ArrowLeft,
  Code2,
  Database,
  Layers,
  Package,
  ShoppingCart,
  Smartphone,
  Store,
  Zap,
} from "lucide-react";
import { CaseStudyFaq } from "@/components/case-studies/CaseStudyFaq";
import { PortfolioDemoBanner } from "@/components/case-studies/PortfolioDemoBanner";
import type { CaseStudySeo } from "@/content/case-study-seo";
import type { Project } from "@/content/projects";

const stats = [
  { value: "3-tier", label: "Laravel + Node + React" },
  { value: "80+", label: "DB migrations" },
  { value: "24", label: "Demo products seeded" },
  { value: "Flutter", label: "Mobile API compatible" },
];

const features = [
  {
    icon: Store,
    title: "React Storefront",
    description: "Vite SPA with Redux, RTK Query, Ant Design — shop, cart, checkout, and account flows.",
    accent: "from-rose-500/20 to-pink-500/5",
  },
  {
    icon: Zap,
    title: "Node Catalog API",
    description: "Express read layer with GZIP compression and raw SQL — homepage, filters, and product search offloaded from Laravel.",
    accent: "from-fuchsia-500/20 to-violet-500/5",
  },
  {
    icon: Package,
    title: "Multi-warehouse Inventory",
    description: "Stock per warehouse, product variants (size/shade), brands, categories, and admin product CMS.",
    accent: "from-violet-500/20 to-indigo-500/5",
  },
  {
    icon: ShoppingCart,
    title: "Order Workflows",
    description: "Cart, checkout, order tracking, wishlist, reviews, and admin order management.",
    accent: "from-pink-500/20 to-rose-500/5",
  },
  {
    icon: Smartphone,
    title: "Flutter REST APIs",
    description: "Sanctum-authenticated Laravel APIs built for a production Flutter mobile app.",
    accent: "from-sky-500/20 to-blue-500/5",
  },
  {
    icon: Layers,
    title: "19 Homepage Sections",
    description: "CMS-driven homepage blocks — sliders, offers, brands, best sellers — aggregated by the Node read API.",
    accent: "from-amber-500/20 to-orange-500/5",
  },
  {
    icon: Database,
    title: "Performance Story",
    description: "Public catalog endpoints slowed under load → dedicated Node read layer while Laravel stays write source of truth.",
    accent: "from-emerald-500/20 to-teal-500/5",
  },
  {
    icon: Code2,
    title: "DEMO_MODE",
    description: "Fixed OTP 123456, stubbed Pathao/shipping/rewards, synthetic GlowCart seed data — clone and explore locally.",
    accent: "from-rose-500/20 to-red-500/5",
  },
];

const responsibilities = [
  "Led implementation of enterprise skincare e-commerce platform end-to-end",
  "Designed MySQL schema for products, warehouse stock, orders, and homepage CMS",
  "Built Laravel REST APIs for web storefront and Flutter mobile app",
  "Created Node.js catalog read API to offload high-traffic public endpoints",
  "Integrated Pathao courier, rewards, offers, and admin product/order panels",
  "Guided team members and owned production deployment at perfectobd.com",
];

const stack = [
  { layer: "Backend", tech: "Laravel 10, PHP 8.2+, Sanctum" },
  { layer: "Read API", tech: "Node.js, Express, MySQL2, compression" },
  { layer: "Frontend", tech: "React 18, Vite, Redux Toolkit, Ant Design" },
  { layer: "Database", tech: "MySQL 8 — 80+ migrations" },
  { layer: "Mobile", tech: "REST API for Flutter (source not in demo)" },
  { layer: "Infra", tech: "Docker Compose for local demo" },
];

const demoFeatures = [
  { label: "Rebrand", detail: "GlowCart — fictional skincare retailer" },
  { label: "DEMO_MODE", detail: "OTP + Pathao + offer stubs" },
  { label: "Seeders", detail: "24 products, 4 brands, blogs" },
  { label: "Docker", detail: "4 services on :8002/:4001/:5174" },
];

type EnterpriseRetailPageProps = {
  project: Project;
  seo: CaseStudySeo;
};

export function EnterpriseRetailPage({ project, seo }: EnterpriseRetailPageProps) {
  return (
    <article className="enterprise-retail-case-study overflow-hidden" itemScope itemType="https://schema.org/TechArticle">
      <meta itemProp="headline" content={seo.articleHeadline} />
      <meta itemProp="description" content={seo.articleSummary} />
      <meta itemProp="datePublished" content={seo.datePublished} />
      <meta itemProp="dateModified" content={seo.dateModified} />

      <section className="relative border-b border-line/60">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_-10%,rgba(244,63,94,0.14),transparent_55%)]" />
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_50%_40%_at_85%_25%,rgba(217,70,239,0.1),transparent_50%)]" />

        <div className="relative mx-auto max-w-6xl px-4 pb-16 pt-10 md:pb-24 md:pt-14">
          <Link href="/projects" className="inline-flex items-center gap-2 text-sm text-muted transition-colors hover:text-signal">
            <ArrowLeft className="h-4 w-4" />
            Back to projects
          </Link>

          <div className="mt-6">
            <PortfolioDemoBanner />
          </div>

          <div className="mt-8 grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
            <div className="space-y-6">
              <div className="flex flex-wrap items-center gap-3">
                {project.demoUrl && (
                  <a
                    href={project.demoUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 rounded-full border border-rose-500/30 bg-rose-500/10 px-3 py-1 text-xs font-medium text-rose-300"
                  >
                    Live production site
                  </a>
                )}
                <span className="inline-flex items-center gap-1.5 rounded-full border border-fuchsia-500/30 bg-fuchsia-500/10 px-3 py-1 text-xs font-medium text-fuchsia-300">
                  <Code2 className="h-3 w-3" />
                  Open source on GitHub
                </span>
                <span className="rounded-full border border-line bg-surface/60 px-3 py-1 font-mono text-xs text-signal-2">
                  {project.company}
                </span>
              </div>

              <h1 className="text-4xl font-bold leading-tight md:text-5xl">{project.title}</h1>
              <p className="max-w-xl text-lg leading-relaxed text-muted md:text-xl">{project.tagline}</p>
              <p className="max-w-2xl leading-relaxed text-muted/90">{project.description}</p>

              <div className="flex flex-wrap gap-3">
                {project.demoUrl && (
                  <a
                    href={project.demoUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-xl border border-rose-500/40 bg-rose-500/10 px-5 py-3 text-sm font-semibold text-rose-200 transition-transform hover:scale-[1.02]"
                  >
                    View live site
                  </a>
                )}
                <a
                  href={project.repoUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-rose-500 to-fuchsia-500 px-5 py-3 text-sm font-semibold text-ink shadow-lg shadow-rose-500/20 transition-transform hover:scale-[1.02]"
                >
                  <Code2 className="h-4 w-4" />
                  Open-source demo
                </a>
              </div>

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
                <div className="rounded-[1.35rem] bg-gradient-to-br from-[#1a0a14] via-[#2d0f24] to-[#0d1117] p-6">
                  <div className="mb-5 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Store className="h-4 w-4 text-rose-400" />
                      <span className="text-sm font-semibold">GlowCart Storefront</span>
                    </div>
                    <span className="rounded-full bg-rose-500/15 px-2 py-0.5 text-[10px] font-medium text-rose-300">Demo</span>
                  </div>
                  <div className="space-y-3 text-sm">
                    <div className="rounded-xl border border-white/5 bg-white/[0.03] px-4 py-3">React → Node catalog reads</div>
                    <div className="rounded-xl border border-rose-500/20 bg-rose-500/5 px-4 py-3 text-muted">
                      Laravel → cart, auth, orders
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
              <p className="font-mono text-3xl font-bold text-rose-400 md:text-4xl">{stat.value}</p>
              <p className="mt-2 text-sm text-muted">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="border-t border-line/60 bg-surface/20 py-16 md:py-20">
        <div className="mx-auto max-w-6xl px-4">
          <div className="mb-10 max-w-2xl">
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-rose-400/80">Capabilities</p>
            <h2 className="mt-2 text-3xl font-bold md:text-4xl">Enterprise retail at scale</h2>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {features.map((feature) => (
              <div key={feature.title} className={`rounded-2xl border border-line/60 bg-gradient-to-br ${feature.accent} p-5`}>
                <feature.icon className="h-5 w-5 text-rose-300" />
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
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-rose-400/80">My contributions</p>
            <h2 className="mt-2 text-2xl font-bold md:text-3xl">What I built</h2>
            <ul className="mt-6 space-y-3">
              {responsibilities.map((item) => (
                <li key={item} className="flex gap-3 text-muted">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-rose-400" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-2xl border border-line/70 bg-surface/40 p-6">
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-rose-400/80">Tech stack</p>
            <dl className="mt-6 space-y-3">
              {stack.map((row) => (
                <div key={row.layer} className="flex gap-4 border-b border-line/40 pb-3 last:border-0">
                  <dt className="w-24 shrink-0 font-mono text-xs text-rose-400">{row.layer}</dt>
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
                Rebranded as <strong className="text-text">GlowCart</strong> with synthetic skincare catalog, DEMO_MODE stubs, and Docker Compose.
              </p>
              <div className="mt-6 grid gap-2 sm:grid-cols-2">
                {demoFeatures.map((item) => (
                  <div key={item.label} className="rounded-xl border border-line/50 bg-surface/40 px-3 py-2.5">
                    <p className="text-xs font-semibold text-rose-400">{item.label}</p>
                    <p className="mt-0.5 text-xs text-muted">{item.detail}</p>
                  </div>
                ))}
              </div>
              <a href={project.repoUrl} target="_blank" rel="noreferrer" className="mt-6 inline-flex items-center gap-2 text-sm text-signal hover:underline">
                <Code2 className="h-4 w-4" />
                github.com/sazharul/enterprise-retail-demo
              </a>
            </div>
            <div className="rounded-3xl border border-rose-500/20 bg-gradient-to-br from-rose-500/10 via-surface/40 to-fuchsia-500/5 p-8">
              <h2 className="text-2xl font-bold">Docker quick start</h2>
              <pre className="mt-6 overflow-x-auto rounded-xl border border-line/60 bg-ink p-4 font-mono text-xs text-signal-2">
{`git clone https://github.com/sazharul/enterprise-retail-demo.git
cd enterprise-retail-demo
docker compose up --build`}
              </pre>
              <div className="mt-6 space-y-2 text-sm text-muted">
                <p>Storefront → <span className="text-text">localhost:5174</span></p>
                <p>Laravel API → <span className="text-text">localhost:8002/api</span></p>
                <p>Login → <span className="font-mono text-text">customer@glowcart.demo</span></p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-line/60 py-12 md:py-16" aria-label="Project summary">
        <div className="mx-auto max-w-3xl px-4 text-center">
          <h2 className="text-xl font-semibold md:text-2xl">About this enterprise retail platform</h2>
          <p className="mt-4 leading-relaxed text-muted" itemProp="articleBody">
            {seo.articleSummary} Built by{" "}
            <Link href="/about" className="text-signal hover:underline">Md. Azharul Islam (Sohan)</Link>.
            Production site at{" "}
            <a href={project.demoUrl} target="_blank" rel="noreferrer" className="text-signal hover:underline">perfectobd.com</a>.
            Clone the{" "}
            <a href={project.repoUrl} target="_blank" rel="noreferrer" className="text-signal hover:underline">GitHub demo</a> locally.
          </p>
        </div>
      </section>

      <CaseStudyFaq faqs={seo.faqs} heading="Enterprise retail FAQ" id="enterprise-retail-faq" />

      <section className="mx-auto max-w-6xl px-4 py-16 text-center md:py-20">
        <h2 className="text-2xl font-bold md:text-3xl">Need an e-commerce or Laravel developer?</h2>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Link href="/contact" className="rounded-xl bg-signal px-5 py-3 text-sm font-medium text-ink hover:bg-sky-300">Get in touch</Link>
          <Link href="/projects" className="rounded-xl border border-line px-5 py-3 text-sm font-medium hover:border-signal/40">More projects</Link>
        </div>
      </section>
    </article>
  );
}
