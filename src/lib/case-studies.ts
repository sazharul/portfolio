import fs from "fs";
import path from "path";
import matter from "gray-matter";

const caseStudyDirectory = path.join(process.cwd(), "content/case-studies");

export function getCaseStudySlugs(): string[] {
  if (!fs.existsSync(caseStudyDirectory)) {
    return [];
  }

  return fs
    .readdirSync(caseStudyDirectory)
    .filter((file) => file.endsWith(".md"))
    .map((file) => file.replace(/\.md$/, ""));
}

export function getCaseStudy(slug: string) {
  const filePath = path.join(caseStudyDirectory, `${slug}.md`);

  if (!fs.existsSync(filePath)) {
    return null;
  }

  const file = fs.readFileSync(filePath, "utf8");
  const { data, content } = matter(file);

  return {
    slug,
    frontmatter: data as Record<string, string>,
    content,
  };
}
