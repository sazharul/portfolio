import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ReverbPlatformPage } from "@/components/case-studies/ReverbPlatformPage";
import { JsonLd } from "@/components/JsonLd";
import { getCaseStudySeo } from "@/content/case-study-seo";
import { getProject } from "@/content/projects";
import {
  createPageMetadata,
  DEFAULT_KEYWORDS,
  getBreadcrumbJsonLd,
  getFaqJsonLd,
  getHowToJsonLd,
  getProjectJsonLd,
  getTechArticleJsonLd,
  getWebPageJsonLd,
} from "@/lib/seo";

const SLUG = "reverb-platform";

export const metadata: Metadata = (() => {
  const project = getProject(SLUG);
  const seo = getCaseStudySeo(SLUG);
  if (!project || !seo) return { title: "Project" };

  return createPageMetadata({
    title: seo.metaTitle,
    description: seo.metaDescription,
    path: `/projects/${project.slug}`,
    keywords: [...DEFAULT_KEYWORDS, ...seo.keywords, ...project.tags],
    ogType: "article",
    publishedTime: seo.datePublished,
    modifiedTime: seo.dateModified,
  });
})();

export default function ReverbPlatformProjectPage() {
  const project = getProject(SLUG);
  const seo = getCaseStudySeo(SLUG);

  if (!project || !seo) notFound();

  const path = `/projects/${project.slug}`;

  return (
    <>
      <JsonLd
        data={[
          getWebPageJsonLd({ name: seo.metaTitle, description: seo.metaDescription, path }),
          getTechArticleJsonLd({
            headline: seo.articleHeadline,
            description: seo.articleSummary,
            path,
            datePublished: seo.datePublished,
            dateModified: seo.dateModified,
            keywords: seo.keywords,
            about: ["Laravel Reverb", "WebSockets", "Real-time", "SaaS", "Multi-tenant"],
          }),
          getProjectJsonLd(project),
          getFaqJsonLd(seo.faqs),
          getHowToJsonLd({ ...seo.howTo, path }),
          getBreadcrumbJsonLd([
            { name: "Home", path: "/" },
            { name: "Projects", path: "/projects" },
            { name: project.title, path },
          ]),
        ]}
      />
      <ReverbPlatformPage project={project} seo={seo} />
    </>
  );
}
