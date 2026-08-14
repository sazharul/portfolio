import type { Metadata } from "next";
import { ProjectCard } from "@/components/ProjectCard";
import { projects } from "@/content/projects";

export const metadata: Metadata = {
  title: "Projects",
  description: "Selected production and portfolio projects by MD. Azharul Islam.",
};

export default function ProjectsPage() {
  return (
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
  );
}
