import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { MarkdownContent } from "@/components/MarkdownContent";
import { getProject, projects } from "@/content/projects";
import { getCaseStudy } from "@/lib/case-studies";

type ProjectPageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);

  if (!project) {
    return { title: "Project" };
  }

  return {
    title: project.title,
    description: project.description,
  };
}

export default async function ProjectDetailPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = getProject(slug);
  const caseStudy = getCaseStudy(slug);

  if (!project) {
    notFound();
  }

  return (
    <div className="max-w-3xl mx-auto px-4 py-12 space-y-8">
      <div className="space-y-4">
        <Link href="/projects" className="text-sm text-signal hover:text-text transition-colors">
          ← Back to projects
        </Link>
        <p className="font-mono text-xs text-signal-2 uppercase tracking-wider">{project.company}</p>
        <h1 className="text-4xl font-bold">{project.title}</h1>
        <p className="text-muted text-lg">{project.tagline}</p>
        <div className="flex flex-wrap gap-3 pt-2">
          <a
            href={project.demoUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-warm text-ink text-sm font-medium"
          >
            Live demo ↗
          </a>
          <a
            href={project.repoUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-line text-sm"
          >
            GitHub
          </a>
        </div>
      </div>

      {caseStudy ? (
        <MarkdownContent content={caseStudy.content} />
      ) : (
        <p className="text-muted">{project.description}</p>
      )}
    </div>
  );
}
