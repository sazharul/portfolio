import Link from "next/link";
import {
  ArrowLeft,
  ArrowRightLeft,
  Building2,
  CreditCard,
  FileBarChart,
  Landmark,
  Lock,
  Users,
} from "lucide-react";
import type { Project } from "@/content/projects";

const features = [
  {
    icon: ArrowRightLeft,
    title: "Unified payment flows",
    description: "One gateway consolidating transaction workflows that were previously split across separate business sites.",
    accent: "from-blue-500/20 to-indigo-500/5",
  },
  {
    icon: Landmark,
    title: "Banking API integration",
    description: "Connected to US banking and payment APIs with secure server-side orchestration for charge and settlement paths.",
    accent: "from-indigo-500/20 to-violet-500/5",
  },
  {
    icon: Building2,
    title: "Multi-business operations",
    description: "Admin tooling to manage distinct businesses, accounts, and operational boundaries from a single platform.",
    accent: "from-sky-500/20 to-blue-500/5",
  },
  {
    icon: CreditCard,
    title: "Transaction lifecycle",
    description: "End-to-end payment records — initiation, status tracking, reconciliation hooks, and audit-friendly history.",
    accent: "from-cyan-500/20 to-teal-500/5",
  },
  {
    icon: FileBarChart,
    title: "Reporting dashboards",
    description: "Admin views for transaction volumes, business-level summaries, and operational monitoring.",
    accent: "from-emerald-500/20 to-teal-500/5",
  },
  {
    icon: Lock,
    title: "Auth & RBAC",
    description: "Session-based authentication with role-based access across admin and customer-facing surfaces.",
    accent: "from-rose-500/20 to-pink-500/5",
  },
  {
    icon: Users,
    title: "Customer portal",
    description: "Self-service flows for end users tied to the client's multi-business payment model.",
    accent: "from-amber-500/20 to-orange-500/5",
  },
];

type PaymentGatewayPageProps = {
  project: Project;
};

export function PaymentGatewayPage({ project }: PaymentGatewayPageProps) {
  return (
    <article className="payment-gateway-case-study overflow-hidden">
      <section className="relative border-b border-line/60">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_-10%,rgba(59,130,246,0.14),transparent_55%)]" />

        <div className="relative mx-auto max-w-4xl px-4 pb-14 pt-10 md:pb-20 md:pt-14">
          <Link href="/projects" className="inline-flex items-center gap-2 text-sm text-muted transition-colors hover:text-signal">
            <ArrowLeft className="h-4 w-4" />
            Back to projects
          </Link>

          <div className="mt-8 space-y-6">
            <div className="flex flex-wrap items-center gap-3">
              <span className="rounded-full border border-line bg-surface/60 px-3 py-1 font-mono text-xs text-signal-2">
                {project.company}
              </span>
              {project.role ? (
                <span className="rounded-full border border-line/80 bg-ink/50 px-3 py-1 text-xs text-muted">
                  {project.role}
                </span>
              ) : null}
            </div>

            <h1 className="text-4xl font-bold leading-tight md:text-5xl">{project.title}</h1>
            <p className="text-lg leading-relaxed text-muted md:text-xl">{project.tagline}</p>

            <div className="rounded-xl border border-line/70 bg-surface/30 px-5 py-4 text-sm leading-relaxed text-muted">
              <p>{project.description}</p>
              <p className="mt-3 text-muted/80">
                There is no public demo or GitHub repository for this project yet. Production source code remains private client work.
              </p>
            </div>

            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span key={tag} className="rounded-lg border border-line/80 bg-ink/50 px-2.5 py-1 font-mono text-xs text-signal-2">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20">
        <div className="mx-auto max-w-6xl px-4">
          <div className="mb-10 max-w-2xl">
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-blue-400/80">Features</p>
            <h2 className="mt-2 text-3xl font-bold md:text-4xl">What the platform delivered</h2>
            <p className="mt-3 text-muted">
              A centralized Laravel payment gateway for a US client with multiple businesses — each previously using separate payment solutions.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature) => (
              <div key={feature.title} className={`rounded-2xl border border-line/60 bg-gradient-to-br ${feature.accent} p-5`}>
                <feature.icon className="h-5 w-5 text-blue-300" />
                <h3 className="mt-3 font-semibold">{feature.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </article>
  );
}
