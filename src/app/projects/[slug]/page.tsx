import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { JsonLd } from "@/components/JsonLd";
import { MarkdownContent } from "@/components/MarkdownContent";
import { getProject, projects } from "@/content/projects";
import { getCaseStudy } from "@/lib/case-studies";
import { createPageMetadata, DEFAULT_KEYWORDS, getBreadcrumbJsonLd, getProjectJsonLd } from "@/lib/seo";

type ProjectPageProps = {
  params: Promise<{ slug: string }>;
};

const CUSTOM_CASE_STUDY_SLUGS = new Set([
  "matrimony-platform",
  "ecommerce-analytics",
  "ai-shopping-assistant",
  "reverb-platform",
  "insurance-platform",
]);

export async function generateStaticParams() {
  return projects
    .filter((project) => !CUSTOM_CASE_STUDY_SLUGS.has(project.slug))
    .map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);

  if (!project) {
    return { title: "Project" };
  }

  return createPageMetadata({
    title: project.title,
    description: `${project.tagline}. ${project.description}`,
    path: `/projects/${project.slug}`,
    keywords: [...DEFAULT_KEYWORDS, project.title, ...project.tags, project.company ?? "", project.role ?? ""].filter(
      Boolean,
    ),
    ogType: "article",
  });
}

export default async function ProjectDetailPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = getProject(slug);
  const caseStudy = getCaseStudy(slug);

  if (!project) {
    notFound();
  }

  return (
    <>
      <JsonLd
        data={[
          getProjectJsonLd(project),
          getBreadcrumbJsonLd([
            { name: "Home", path: "/" },
            { name: "Projects", path: "/projects" },
            { name: project.title, path: `/projects/${project.slug}` },
          ]),
        ]}
      />
      <div className="max-w-3xl mx-auto px-4 py-12 space-y-8">
        <div className="space-y-4">
          <Link href="/projects" className="text-sm text-signal hover:text-text transition-colors">
            ← Back to projects
          </Link>
          <p className="font-mono text-xs text-signal-2 uppercase tracking-wider">{project.company}</p>
          <h1 className="text-4xl font-bold">{project.title}</h1>
          <p className="text-muted text-lg">{project.tagline}</p>
          <div className="flex flex-wrap gap-2 pt-2">
            {project.demoUrl ? (
              <a
                href={project.demoUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 rounded-lg border border-warm/30 bg-warm/10 px-3.5 py-2 text-sm font-medium text-warm transition-colors hover:border-warm/50 hover:bg-warm/15"
              >
                Live demo ↗
              </a>
            ) : null}
            <a
              href={project.repoUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 rounded-lg border border-line bg-ink/60 px-3.5 py-2 text-sm font-medium text-muted transition-colors hover:border-signal/40 hover:text-text"
            >
              GitHub ↗
            </a>
          </div>
        </div>

        {caseStudy ? (
          <MarkdownContent content={caseStudy.content} />
        ) : (
          <p className="text-muted">{project.description}</p>
        )}
      </div>
    </>
  );
}
