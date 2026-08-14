import Link from "next/link";

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
          mdazharulislam.com
        </Link>
        <nav className="hidden md:flex items-center gap-6 text-sm text-muted">
          {links.map((link) => (
            <Link key={link.href} href={link.href} className="hover:text-text transition-colors">
              {link.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-3 text-sm text-muted">
          <a href="https://github.com/sazharul" target="_blank" rel="noreferrer" className="hover:text-signal transition-colors">
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/azharul-islam-sohan-a75b64260"
            target="_blank"
            rel="noreferrer"
            className="hover:text-signal transition-colors"
          >
            LinkedIn
          </a>
          <a href="mailto:ahamedsohan592@gmail.com" className="hover:text-signal transition-colors">
            Email
          </a>
        </div>
      </div>
    </header>
  );
}
