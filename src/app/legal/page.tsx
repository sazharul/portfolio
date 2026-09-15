import type { Metadata } from "next";
import Link from "next/link";
import { JsonLd } from "@/components/JsonLd";
import { createPageMetadata, getBreadcrumbJsonLd } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "Legal & Demo Notice",
  description:
    "Portfolio demonstration notice — public GitHub repos are independent skill showcases for hiring, not client or employer production source code.",
  path: "/legal",
  keywords: ["portfolio demo", "legal notice", "hiring showcase"],
});

const demoRepos = [
  { name: "matrimony-platform-demo", brand: "MatriConnect", live: "mybouma.com" },
  { name: "ai-shopping-assistant-demo", brand: "StyleHub", live: "enorsia.com" },
  { name: "insurance-platform-demo", brand: "CoverSure", live: "eastlandinsurance.com" },
  { name: "enterprise-retail-demo", brand: "GlowCart", live: "perfectobd.com" },
  { name: "reverb-platform-demo", brand: "PulseWire", live: null },
  { name: "ecommerce-analytics-platform", brand: "ShopTracker", live: null },
];

export default function LegalPage() {
  return (
    <>
      <JsonLd
        data={[
          getBreadcrumbJsonLd([
            { name: "Home", path: "/" },
            { name: "Legal & demo notice", path: "/legal" },
          ]),
        ]}
      />
      <div className="mx-auto max-w-3xl px-4 py-12 md:py-16">
        <h1 className="text-3xl font-bold md:text-4xl">Legal &amp; demo notice</h1>
        <p className="mt-4 text-muted leading-relaxed">
          This page explains how public code on my GitHub profile and portfolio site should be interpreted.
          It is practical guidance for recruiters and engineers — <strong className="text-text">not legal advice</strong>.
        </p>

        <section className="mt-10 space-y-4">
          <h2 className="text-xl font-semibold">Purpose of public demos</h2>
          <p className="text-muted leading-relaxed">
            Repositories labeled <strong className="text-text">demo</strong> are portfolio showcases published{" "}
            <strong className="text-text">only for hiring and technical evaluation</strong>. They demonstrate my skills,
            architecture decisions, and code quality using the <strong className="text-text">same technology stack</strong>{" "}
            as my production work (Laravel, React, Node.js, FastAPI, etc.).
          </p>
        </section>

        <section className="mt-10 space-y-4">
          <h2 className="text-xl font-semibold">What demos are not</h2>
          <ul className="list-disc space-y-2 pl-5 text-muted">
            <li>Not the production source code of any client, employer, or live website</li>
            <li>Not affiliated with, endorsed by, or authorized by those organizations</li>
            <li>Not a leak, copy, or redistribution of proprietary third-party software</li>
            <li>Not intended for production use without independent security and compliance review</li>
          </ul>
        </section>

        <section className="mt-10 space-y-4">
          <h2 className="text-xl font-semibold">Live site links</h2>
          <p className="text-muted leading-relaxed">
            When a case study links to a live production URL, that reference describes{" "}
            <strong className="text-text">professional experience only</strong>. Production systems remain in private
            repositories under client or employer ownership.
          </p>
        </section>

        <section className="mt-10 space-y-4">
          <h2 className="text-xl font-semibold">Public demo repositories</h2>
          <div className="overflow-x-auto rounded-xl border border-line">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-line bg-surface/50 text-left">
                  <th className="px-4 py-3 font-medium">Repository</th>
                  <th className="px-4 py-3 font-medium">Fictional brand</th>
                  <th className="px-4 py-3 font-medium">Production reference</th>
                </tr>
              </thead>
              <tbody className="text-muted">
                {demoRepos.map((repo) => (
                  <tr key={repo.name} className="border-b border-line/60 last:border-0">
                    <td className="px-4 py-3 font-mono text-xs text-signal-2">
                      <a
                        href={`https://github.com/sazharul/${repo.name}`}
                        target="_blank"
                        rel="noreferrer"
                        className="hover:underline"
                      >
                        {repo.name}
                      </a>
                    </td>
                    <td className="px-4 py-3">{repo.brand}</td>
                    <td className="px-4 py-3">{repo.live ?? "—"}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className="mt-10 space-y-4">
          <h2 className="text-xl font-semibold">Licensing</h2>
          <p className="text-muted leading-relaxed">
            Demo code I authored is generally released under the MIT License where stated in each repository.
            Third-party trademarks belong to their respective owners. Each repo includes a{" "}
            <code className="rounded bg-surface px-1.5 py-0.5 font-mono text-xs">DISCLAIMER.md</code> with full details.
          </p>
        </section>

        <section className="mt-10 space-y-4">
          <h2 className="text-xl font-semibold">Contact</h2>
          <p className="text-muted leading-relaxed">
            Questions or concerns:{" "}
            <a href="mailto:ahamedsohan592@gmail.com" className="text-signal hover:underline">
              ahamedsohan592@gmail.com
            </a>
          </p>
        </section>

        <p className="mt-12 text-sm text-muted">
          <Link href="/" className="text-signal hover:underline">← Back to home</Link>
        </p>
      </div>
    </>
  );
}
