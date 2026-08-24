import type { MetadataRoute } from "next";
import { projects } from "@/content/projects";
import { SITE_URL } from "@/lib/seo";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = SITE_URL;

  return [
    { url: `${baseUrl}/`, lastModified: new Date() },
    { url: `${baseUrl}/about/`, lastModified: new Date() },
    { url: `${baseUrl}/projects/`, lastModified: new Date() },
    { url: `${baseUrl}/contact/`, lastModified: new Date() },
    ...projects.map((project) => ({
      url: `${baseUrl}/projects/${project.slug}/`,
      lastModified: new Date(),
    })),
  ];
}
