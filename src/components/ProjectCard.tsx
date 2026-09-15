import Link from "next/link";
import type { Project } from "@/content/projects";

type ProjectCardProps = {
  project: Project;
};

const accentBySlug: Record<string, string> = {
  "ai-shopping-assistant": "from-violet-900/80 via-indigo-950 to-slate-950",
  "matrimony-platform": "from-amber-900/50 via-rose-950 to-slate-950",
  "ecommerce-analytics": "from-emerald-900/50 via-sky-950 to-slate-950",
  "payment-gateway": "from-blue-900/50 via-slate-900 to-slate-950",
  "insurance-platform": "from-cyan-900/40 via-slate-900 to-slate-950",
};

const actionClass =
  "inline-flex items-center justify-center gap-1.5 rounded-lg border px-3.5 py-2 text-sm font-medium transition-colors";

export function ProjectCard({ project }: ProjectCardProps) {
  const accent = accentBySlug[project.slug] ?? "from-slate-800 via-slate-900 to-sky-950";

  return (
    <article className="group flex flex-col gap-5 rounded-2xl border border-line bg-surface p-6 transition-colors hover:border-signal/40">
      <div
        className={`flex h-40 items-end rounded-xl border border-line bg-gradient-to-br ${accent} p-4`}
      >
        <div>
          <p className="text-xs font-mono uppercase tracking-wider text-signal-2">{project.company}</p>
          <h3 className="mt-1 text-xl font-semibold">{project.title}</h3>
        </div>
      </div>

      <div className="flex-1 space-y-3">
        <p className="text-sm leading-relaxed text-muted">{project.description}</p>
        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-md border border-line bg-ink px-2 py-1 font-mono text-xs text-signal-2"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      <div className="flex flex-wrap gap-2 border-t border-line/50 pt-4">
        <Link
          href={`/projects/${project.slug}`}
          className={`${actionClass} border-line bg-ink/60 text-text hover:border-signal/40 hover:bg-surface`}
        >
          Case study →
        </Link>

        {project.demoUrl ? (
          <a
            href={project.demoUrl}
            target="_blank"
            rel="noreferrer"
            className={`${actionClass} border-warm/30 bg-warm/10 text-warm hover:border-warm/50 hover:bg-warm/15`}
          >
            Live demo ↗
          </a>
        ) : null}

        <a
          href={project.repoUrl}
          target="_blank"
          rel="noreferrer"
          className={`${actionClass} border-line bg-ink/60 text-muted hover:border-signal/40 hover:text-text`}
        >
          GitHub ↗
        </a>
      </div>
    </article>
  );
}
