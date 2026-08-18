import Link from "next/link";
import { EMAIL, GITHUB_URL, LINKEDIN_URL, SITE_DOMAIN } from "@/lib/seo";

const links = [
  { href: "/", label: "Home" },
  { href: "/projects", label: "Projects" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export function Navbar() {
  return (
    <header className="border-b border-line/60 bg-ink/80 backdrop-blur sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between gap-6">
        <Link href="/" className="font-mono text-signal text-sm tracking-wide">
          {SITE_DOMAIN}
        </Link>
        <nav className="hidden md:flex items-center gap-6 text-sm text-muted">
          {links.map((link) => (
            <Link key={link.href} href={link.href} className="hover:text-text transition-colors">
              {link.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-3 text-sm text-muted">
          <a href={GITHUB_URL} target="_blank" rel="noreferrer" className="hover:text-signal transition-colors">
            GitHub
          </a>
          <a href={LINKEDIN_URL} target="_blank" rel="noreferrer" className="hover:text-signal transition-colors">
            LinkedIn
          </a>
          <a href={`mailto:${EMAIL}`} className="hover:text-signal transition-colors">
            Email
          </a>
        </div>
      </div>
    </header>
  );
}
