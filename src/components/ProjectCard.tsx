import Link from "next/link";
import type { Project } from "@/content/projects";

type ProjectCardProps = {
  project: Project;
};

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className="group bg-surface border border-line rounded-2xl p-6 flex flex-col gap-5 hover:border-signal/40 transition-colors">
      <div className="h-40 rounded-xl bg-gradient-to-br from-slate-800 via-slate-900 to-sky-950 border border-line flex items-end p-4">
        <div>
          <p className="text-xs font-mono text-signal-2 uppercase tracking-wider">{project.company}</p>
          <h3 className="text-xl font-semibold mt-1">{project.title}</h3>
        </div>
      </div>

      <div className="space-y-3 flex-1">
        <p className="text-muted text-sm leading-relaxed">{project.description}</p>
        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span key={tag} className="px-2 py-1 rounded-md bg-ink border border-line text-xs font-mono text-signal-2">
              {tag}
            </span>
          ))}
        </div>
      </div>

      <div className="flex flex-wrap gap-3 pt-2">
        <Link
          href={`/projects/${project.slug}`}
          className="inline-flex items-center gap-1 text-sm text-signal hover:text-text transition-colors"
        >
          Case study →
        </Link>
        <a
          href={project.demoUrl}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-1 text-sm text-warm hover:text-text transition-colors"
        >
          Live demo ↗
        </a>
        <a
          href={project.repoUrl}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-1 text-sm text-muted hover:text-text transition-colors"
        >
          GitHub
        </a>
      </div>
    </article>
  );
}
