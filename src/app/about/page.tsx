import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description: "Career story of MD. Azharul Islam — Laravel engineer across agency and product engineering.",
};

export default function AboutPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-12 space-y-8">
      <div>
        <p className="font-mono text-xs text-signal-2 uppercase tracking-wider">About</p>
        <h1 className="text-4xl font-bold mt-2">Who I am</h1>
      </div>

      <div className="space-y-5 text-muted leading-relaxed">
        <p>
          I&apos;m a Software Engineer with 8+ years of experience building business-critical web applications.
          My work spans fintech, insurance, e-commerce, education, healthcare, analytics, and AI-powered features.
        </p>
        <p>
          I specialize in understanding business requirements, implementing reliable software, integrating third-party
          services, and delivering production-ready systems. I&apos;m honest about what I built versus what I implemented
          under technical guidance.
        </p>
      </div>

      <div className="space-y-6">
        <h2 className="text-2xl font-semibold">Career journey</h2>
        <div className="space-y-5">
          <div className="border-l-2 border-signal pl-4">
            <p className="font-mono text-xs text-signal-2">2025 – Present · Enorsia</p>
            <p className="font-semibold mt-1">Software Developer — UK fashion e-commerce</p>
            <p className="text-muted text-sm mt-2">Analytics, shipping APIs, marketplaces, AI assistant features.</p>
          </div>
          <div className="border-l-2 border-line pl-4">
            <p className="font-mono text-xs text-signal-2">2022 – 2025 · WizTecBD</p>
            <p className="font-semibold mt-1">Lead implementation engineer</p>
            <p className="text-muted text-sm mt-2">Insurance, enterprise retail, education platforms.</p>
          </div>
          <div className="border-l-2 border-line pl-4">
            <p className="font-mono text-xs text-signal-2">2019 – 2022 · HSBLCO Ltd.</p>
            <p className="font-semibold mt-1">Full-Stack → Team Leader</p>
            <p className="text-muted text-sm mt-2">Payment gateway (US client), client recovery, led 5 interns.</p>
          </div>
        </div>
      </div>

      <p className="text-sm font-mono text-muted border border-line rounded-xl p-4 bg-surface">
        Based in Dhaka · Open to remote roles and EU relocation (Romania / Germany) · Available for select large-scope freelance work.
      </p>
    </div>
  );
}
