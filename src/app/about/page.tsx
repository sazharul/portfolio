import type { Metadata } from "next";
import { JsonLd } from "@/components/JsonLd";
import {
  CERTIFICATE_NAME,
  COMPANY_HSBLCO,
  COMPANY_WIZARD,
  CURRENT_COMPANY,
  CURRENT_ROLE,
  EDUCATION,
  NICKNAME,
  YEARS_EXPERIENCE,
  createPageMetadata,
  getBreadcrumbJsonLd,
} from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "About",
  description:
    "About Md. Azharul Islam (Sohan) — senior Laravel/PHP engineer in Dhaka. 7+ years shipping payment, insurance and e-commerce systems at Enorsia, Wizard Software and Hsblco Solution.",
  path: "/about",
  keywords: [
    "about azharul software engineer",
    "about sohan software engineer",
    "azharul laravel career",
    "sohan developer Dhaka",
    "azharul sohan about",
  ],
});

export default function AboutPage() {
  return (
    <>
      <JsonLd
        data={getBreadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "About", path: "/about" },
        ])}
      />
      <div className="max-w-3xl mx-auto px-4 py-12 space-y-8">
        <div>
          <p className="font-mono text-xs text-signal-2 uppercase tracking-wider">About</p>
          <h1 className="text-4xl font-bold mt-2">Who I am</h1>
        </div>

        <div className="space-y-5 text-muted leading-relaxed">
          <p>
            I&apos;m <span className="text-text font-medium">{CERTIFICATE_NAME}</span>, known as{" "}
            <span className="text-text font-medium">{NICKNAME}</span> — a backend-focused full-stack engineer
            with {YEARS_EXPERIENCE} years of production experience turning complex business rules into reliable
            Laravel/PHP software.
          </p>
          <p>
            I&apos;ve owned systems where correctness matters: a centralized payment gateway for a US client, an
            insurance platform with multi-formula premium and commission logic, and live UK fashion e-commerce work
            spanning shipping, marketplaces, analytics, and a production AI shopping assistant.
          </p>
        </div>

        <div className="space-y-6">
          <h2 className="text-2xl font-semibold">Career journey</h2>
          <div className="space-y-5">
            <div className="border-l-2 border-signal pl-4">
              <p className="font-mono text-xs text-signal-2">Jul 2025 – Present · {CURRENT_COMPANY}</p>
              <p className="font-semibold mt-1">{CURRENT_ROLE} — UK fashion e-commerce</p>
              <p className="text-muted text-sm mt-2">
                Shipping APIs (DHL, Evri, Royal Mail), marketplace channels, ClickHouse/Redis analytics, Laravel Vite
                + Tailwind adoption, and a production AI shopping assistant (OpenAI, LangGraph).
              </p>
            </div>
            <div className="border-l-2 border-line pl-4">
              <p className="font-mono text-xs text-signal-2">Sep 2022 – Jun 2025 · {COMPANY_WIZARD}</p>
              <p className="font-semibold mt-1">Software Engineer — informal technical lead</p>
              <p className="text-muted text-sm mt-2">
                Led ~10 months of insurance platform work (premium, coverage, commission rules, Flutter APIs) and
                backend on PerfectoBD retail (inventory, POS, promotions). Rebuilt slow public APIs in Node.js.
              </p>
            </div>
            <div className="border-l-2 border-line pl-4">
              <p className="font-mono text-xs text-signal-2">Jul 2019 – Aug 2022 · {COMPANY_HSBLCO}</p>
              <p className="font-semibold mt-1">Full-Stack Web Developer → Team Leader</p>
              <p className="text-muted text-sm mt-2">
                Promoted in ~6 months. Built EpayMaker, a centralized Laravel payment gateway for a US client.
                Recovered at-risk client projects; mentored 5 interns.
              </p>
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <h2 className="text-2xl font-semibold">Education</h2>
          <div className="space-y-5">
            <div className="border-l-2 border-line pl-4">
              <p className="font-mono text-xs text-signal-2">Aug 2023 – Dec 2027 · {EDUCATION}</p>
              <p className="font-semibold mt-1">B.Sc. in Computer Science & Engineering</p>
            </div>
            <div className="border-l-2 border-line pl-4">
              <p className="font-mono text-xs text-signal-2">Mar 2017 – Sep 2017 · Creative IT</p>
              <p className="font-semibold mt-1">Laravel training</p>
            </div>
          </div>
        </div>

        <p className="text-sm font-mono text-muted border border-line rounded-xl p-4 bg-surface">
          Based in Dhaka · Open to remote and international Laravel/backend roles · Completing BSc in CSE
        </p>
      </div>
    </>
  );
}
