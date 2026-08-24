import type { Metadata } from "next";
import { HiringFaq } from "@/components/HiringFaq";
import { JsonLd } from "@/components/JsonLd";
import { hireServices, hiringFaqs } from "@/content/hiring";
import {
  createPageMetadata,
  AUTHOR_NAME,
  EMAIL,
  GITHUB_URL,
  HIRING_KEYWORDS,
  LINKEDIN_URL,
  getBreadcrumbJsonLd,
  getFaqJsonLd,
  getProfessionalServiceJsonLd,
} from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "Hire Experienced Software Engineer",
  description:
    "Hire Md. Azharul Islam (Sohan) — senior Laravel/PHP engineer, 7+ years in payments, insurance and e-commerce. Remote and international. Based in Dhaka, Bangladesh.",
  path: "/contact",
  keywords: [
    ...HIRING_KEYWORDS,
    "hire azharul software engineer",
    "hire sohan software engineer",
    "best laravel developer dhaka",
    "experienced php developer bangladesh",
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
    value: "linkedin.com/in/azharul-islam-sohan-a75b64260",
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
        data={[
          getBreadcrumbJsonLd([
            { name: "Home", path: "/" },
            { name: "Hire Me", path: "/contact" },
          ]),
          getProfessionalServiceJsonLd(),
          getFaqJsonLd(hiringFaqs),
        ]}
      />
      <div className="max-w-3xl mx-auto px-4 py-12 space-y-10">
        <div>
          <p className="font-mono text-xs text-signal-2 uppercase tracking-wider">Hire me</p>
          <h1 className="text-4xl font-bold mt-2">Hire an experienced software engineer</h1>
          <p className="text-muted mt-3 leading-relaxed">
            Need to hire a senior software engineer, experienced Laravel developer, or reliable PHP engineer for
            production systems? {AUTHOR_NAME} takes on full-time roles, remote contracts, and select large-scope
            projects—analytics platforms, payment workflows, complex business logic—not one-off scripts.
          </p>
        </div>

        <section className="space-y-4" aria-labelledby="services-heading">
          <h2 id="services-heading" className="text-2xl font-semibold">What you can hire me for</h2>
          <div className="grid gap-3 sm:grid-cols-2">
            {hireServices.map((service) => (
              <article key={service.title} className="rounded-xl border border-line bg-surface/30 p-4">
                <h3 className="font-medium">{service.title}</h3>
                <p className="mt-2 text-sm text-muted leading-relaxed">{service.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="space-y-4" aria-labelledby="contact-heading">
          <h2 id="contact-heading" className="text-2xl font-semibold">Get in touch</h2>
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
        </section>

        <HiringFaq faqs={hiringFaqs} />
      </div>
    </>
  );
}
