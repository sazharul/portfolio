import type { Metadata } from "next";
import Link from "next/link";
import { Hero } from "@/components/Hero";
import { JsonLd } from "@/components/JsonLd";
import { ProjectCard } from "@/components/ProjectCard";
import { getFeaturedProjects } from "@/content/projects";
import { createPageMetadata, DEFAULT_DESCRIPTION, DEFAULT_TITLE, getProfilePageJsonLd } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: DEFAULT_TITLE,
  description: DEFAULT_DESCRIPTION,
  path: "/",
  absoluteTitle: true,
  keywords: [
    "Azharul Islam Sohan portfolio",
    "Azharul Islam Sohan Laravel developer",
    "MD Azharul Islam software engineer",
    "Laravel developer Dhaka Bangladesh",
    "senior PHP engineer portfolio",
    "fintech developer portfolio",
    "e-commerce analytics developer",
  ],
});

const skills = [
  "Laravel",
  "PHP",
  "JavaScript",
  "MySQL",
  "REST APIs",
  "React",
  "Tailwind CSS",
  "E-commerce",
  "FinTech",
  "Analytics",
  "OpenAI API",
];

const focusAreas = [
  {
    title: "Backend & APIs",
    description: "Laravel services, REST design, queues, and integrations that stay predictable in production.",
  },
  {
    title: "Product engineering",
    description: "E-commerce, insurance, and analytics platforms where correctness and speed both matter.",
  },
  {
    title: "AI in real workflows",
    description: "Practical OpenAI integrations for support, search, and automation—not demo-only features.",
  },
];

export default function HomePage() {
  const featuredProjects = getFeaturedProjects();

  return (
    <div className="mx-auto max-w-6xl px-4">
      <JsonLd data={getProfilePageJsonLd()} />
      <Hero />

      <section className="border-t border-line/60 py-12">
        <div className="mb-8 max-w-2xl">
          <p className="font-mono text-xs uppercase tracking-wider text-signal-2">What I focus on</p>
          <h2 className="mt-2 text-3xl font-bold">Engineering for business outcomes</h2>
        </div>
        <div className="grid gap-5 md:grid-cols-3">
          {focusAreas.map((area) => (
            <article key={area.title} className="rounded-2xl border border-line bg-surface/35 p-5">
              <h3 className="text-lg font-semibold">{area.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{area.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="border-t border-line/60 py-12">
        <div className="mb-8 flex items-end justify-between gap-4">
          <div>
            <p className="font-mono text-xs uppercase tracking-wider text-signal-2">Featured work</p>
            <h2 className="mt-2 text-3xl font-bold">Selected Projects</h2>
          </div>
          <Link href="/projects" className="hidden text-sm text-muted transition-colors hover:text-signal sm:inline">
            View all →
          </Link>
        </div>
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {featuredProjects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </section>

      <section className="border-t border-line/60 py-12">
        <p className="mb-4 font-mono text-xs uppercase tracking-wider text-signal-2">Skills</p>
        <div className="flex flex-wrap gap-3">
          {skills.map((skill) => (
            <span
              key={skill}
              className="rounded-lg border border-line bg-surface px-3 py-2 font-mono text-sm text-muted"
            >
              {skill}
            </span>
          ))}
        </div>
      </section>

      <section className="border-t border-line/60 py-12">
        <div className="rounded-2xl border border-line bg-surface/30 px-6 py-8 md:flex md:items-center md:justify-between md:gap-8">
          <div>
            <p className="font-mono text-xs uppercase tracking-wider text-signal">Career path</p>
            <p className="mt-2 text-sm leading-relaxed text-muted">
              HSBLCO Ltd. → WizTecBD → Enorsia (Pakiza Group) · Promoted to Team Leader in ~6 months
            </p>
          </div>
          <Link
            href="/about"
            className="mt-4 inline-flex rounded-xl border border-line px-4 py-2 text-sm transition-colors hover:border-signal/50 md:mt-0"
          >
            Read full story
          </Link>
        </div>
      </section>
    </div>
  );
}
