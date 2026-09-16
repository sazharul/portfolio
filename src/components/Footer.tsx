import Link from "next/link";
import { Code2, Link2, Mail, MapPin } from "lucide-react";
import {
  AUTHOR_NAME,
  EMAIL,
  GITHUB_URL,
  JOB_TITLE_SHORT,
  LINKEDIN_URL,
  LOCATION,
  NICKNAME,
  SITE_DOMAIN,
} from "@/lib/seo";

const exploreLinks = [
  { href: "/", label: "Home" },
  { href: "/projects", label: "Projects" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Hire Me" },
  { href: "/legal", label: "Legal" },
];

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-auto border-t border-line/60 bg-gradient-to-b from-ink to-[#080b12]">
      <div className="mx-auto max-w-6xl px-4 py-8">
        <div className="grid gap-8 md:grid-cols-[1.4fr_1fr_1fr] md:gap-6">
          <div className="space-y-2.5">
            <Link href="/" className="inline-block font-mono text-sm tracking-wide text-signal transition-colors hover:text-sky-300">
              {SITE_DOMAIN}
            </Link>
            <div>
              <p className="font-semibold text-text">{AUTHOR_NAME}</p>
              <p className="mt-0.5 text-sm text-muted">{JOB_TITLE_SHORT} · Laravel & PHP</p>
            </div>
            <div className="flex flex-wrap items-center gap-2.5 pt-0.5">
              <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-500/25 bg-emerald-500/10 px-2.5 py-0.5 text-[11px] font-medium text-emerald-300">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" aria-hidden="true" />
                Available for hire
              </span>
              <span className="inline-flex items-center gap-1 text-xs text-muted">
                <MapPin className="h-3 w-3 shrink-0 text-signal/70" aria-hidden="true" />
                {LOCATION}
              </span>
            </div>
          </div>

          <div>
            <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-signal-2/80">Explore</p>
            <ul className="mt-2.5 space-y-1.5">
              {exploreLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-muted transition-colors hover:text-text">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-signal-2/80">Connect</p>
            <ul className="mt-2.5 space-y-1.5">
              <li>
                <a
                  href={GITHUB_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 text-sm text-muted transition-colors hover:text-text"
                >
                  <Code2 className="h-3.5 w-3.5 shrink-0 text-signal/80" aria-hidden="true" />
                  GitHub
                </a>
              </li>
              <li>
                <a
                  href={LINKEDIN_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 text-sm text-muted transition-colors hover:text-text"
                >
                  <Link2 className="h-3.5 w-3.5 shrink-0 text-signal/80" aria-hidden="true" />
                  LinkedIn
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${EMAIL}`}
                  className="inline-flex items-center gap-2 text-sm text-muted transition-colors hover:text-text"
                >
                  <Mail className="h-3.5 w-3.5 shrink-0 text-signal/80" aria-hidden="true" />
                  Email
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-6 flex flex-col gap-2 border-t border-line/50 pt-6 md:flex-row md:items-center md:justify-between">
          <p className="text-xs text-muted/80">
            © {year} {AUTHOR_NAME}. All rights reserved.
          </p>
          <p className="text-xs text-muted/70">
            Known as {NICKNAME} ·{" "}
            <Link href="/legal" className="text-muted transition-colors hover:text-signal">
              Legal notice
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
}
