import type { Metadata } from "next";
import { JsonLd } from "@/components/JsonLd";
import { ProjectCard } from "@/components/ProjectCard";
import { projects } from "@/content/projects";
import { createPageMetadata, getBreadcrumbJsonLd } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "Projects — AI Shopping Assistant, Matrimony Platform & E-commerce Case Studies",
  description:
    "Portfolio projects by Md. Azharul Islam (Sohan) — AI shopping assistant (LangGraph, RAG, OpenAI) on enorsia.com, matrimony platform at mybouma.com, e-commerce analytics, payment gateways, and insurance systems.",
  path: "/projects",
  keywords: [
    "azharul software engineer projects",
    "sohan laravel projects",
    "AI shopping assistant case study",
    "LangGraph portfolio project",
    "azharul payment gateway project",
    "sohan e-commerce analytics",
    "azharul sohan portfolio projects",
  ],
});

export default function ProjectsPage() {
  return (
    <>
      <JsonLd
        data={getBreadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Projects", path: "/projects" },
        ])}
      />
    <div className="max-w-6xl mx-auto px-4 py-12 space-y-8">
      <div>
        <p className="font-mono text-xs text-signal-2 uppercase tracking-wider">Portfolio</p>
        <h1 className="text-4xl font-bold mt-2">Projects</h1>
        <p className="text-muted mt-3 max-w-2xl">
          Case studies from production work and portfolio-safe demos. Each project links to a live demo and GitHub where available.
        </p>
      </div>
      <div className="grid md:grid-cols-2 gap-6">
        {projects.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>
    </div>
    </>
  );
}
