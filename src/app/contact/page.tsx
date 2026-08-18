import type { Metadata } from "next";
import { JsonLd } from "@/components/JsonLd";
import { createPageMetadata, EMAIL, GITHUB_URL, LINKEDIN_URL, getBreadcrumbJsonLd } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "Contact Azharul Islam Sohan",
  description:
    "Contact Azharul Islam Sohan for senior Laravel & PHP roles, remote engineering work, and fintech, e-commerce, and analytics projects. Email, LinkedIn, and GitHub.",
  path: "/contact",
  keywords: [
    "contact Azharul Islam Sohan",
    "hire Laravel developer Dhaka",
    "hire PHP developer Bangladesh",
    "remote Laravel engineer contact",
    "Azharul Islam Sohan email",
    "senior software engineer contact",
  ],
});

const links = [
  {
    label: "Email",
    href: `mailto:${EMAIL}`,
    value: EMAIL,
  },
  {
    label: "LinkedIn",
    href: LINKEDIN_URL,
    value: "linkedin.com/in/azharul-islam-sohan",
  },
  {
    label: "GitHub",
    href: GITHUB_URL,
    value: "github.com/sazharul",
  },
];

export default function ContactPage() {
  return (
    <>
      <JsonLd
        data={getBreadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Contact", path: "/contact" },
        ])}
      />
    <div className="max-w-3xl mx-auto px-4 py-12 space-y-8">
      <div>
        <p className="font-mono text-xs text-signal-2 uppercase tracking-wider">Contact</p>
        <h1 className="text-4xl font-bold mt-2">Let&apos;s talk</h1>
        <p className="text-muted mt-3">
          Looking for systems-level work — analytics platforms, payment workflows, complex business logic — not one-off scripts.
        </p>
      </div>

      <div className="space-y-4">
        {links.map((link) => (
          <a
            key={link.label}
            href={link.href}
            target={link.href.startsWith("http") ? "_blank" : undefined}
            rel={link.href.startsWith("http") ? "noreferrer" : undefined}
            className="block p-4 rounded-xl border border-line bg-surface hover:border-signal/40 transition-colors"
          >
            <p className="text-sm text-muted">{link.label}</p>
            <p className="font-mono text-sm mt-1">{link.value}</p>
          </a>
        ))}
      </div>
    </div>
    </>
  );
}
