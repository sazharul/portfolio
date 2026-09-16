import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PaymentGatewayPage } from "@/components/case-studies/PaymentGatewayPage";
import { JsonLd } from "@/components/JsonLd";
import { getProject } from "@/content/projects";
import {
  createPageMetadata,
  DEFAULT_KEYWORDS,
  getBreadcrumbJsonLd,
  getProjectJsonLd,
  getTechArticleJsonLd,
  getWebPageJsonLd,
} from "@/lib/seo";

const SLUG = "payment-gateway";

export const metadata: Metadata = (() => {
  const project = getProject(SLUG);
  if (!project) return { title: "Project" };

  return createPageMetadata({
    title: `${project.title} — Case Study`,
    description: project.description,
    path: `/projects/${project.slug}`,
    keywords: [...DEFAULT_KEYWORDS, project.title, ...project.tags, project.company ?? "", project.role ?? ""].filter(Boolean),
    ogType: "article",
  });
})();

export default function PaymentGatewayProjectPage() {
  const project = getProject(SLUG);

  if (!project) notFound();

  const path = `/projects/${project.slug}`;

  return (
    <>
      <JsonLd
        data={[
          getWebPageJsonLd({ name: project.title, description: project.description, path }),
          getTechArticleJsonLd({
            headline: project.title,
            description: project.description,
            path,
            datePublished: "2024-06-01",
            dateModified: "2026-03-15",
            keywords: project.tags,
            about: ["Laravel", "FinTech", "Payment Gateway", "REST API"],
          }),
          getProjectJsonLd(project),
          getBreadcrumbJsonLd([
            { name: "Home", path: "/" },
            { name: "Projects", path: "/projects" },
            { name: project.title, path },
          ]),
        ]}
      />
      <PaymentGatewayPage project={project} />
    </>
  );
}
