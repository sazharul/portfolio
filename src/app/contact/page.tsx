import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  description: "Contact MD. Azharul Islam for senior Laravel/PHP engineering roles.",
};

const links = [
  {
    label: "Email",
    href: "mailto:ahamedsohan592@gmail.com",
    value: "ahamedsohan592@gmail.com",
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/azharul-islam-sohan-a75b64260",
    value: "linkedin.com/in/azharul-islam-sohan",
  },
  {
    label: "GitHub",
    href: "https://github.com/sazharul",
    value: "github.com/sazharul",
  },
];

export default function ContactPage() {
  return (
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
  );
}
