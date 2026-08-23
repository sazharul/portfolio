import { AUTHOR_NAME, JOB_TITLE_SHORT, NICKNAME } from "@/lib/seo";

export function Footer() {
  return (
    <footer className="border-t border-line/60 mt-auto">
      <div className="max-w-6xl mx-auto px-4 py-8 flex flex-col md:flex-row gap-4 md:items-center md:justify-between text-sm text-muted">
        <p>
          © {new Date().getFullYear()} {AUTHOR_NAME} — {JOB_TITLE_SHORT} (Laravel/PHP). Dhaka, Bangladesh.
        </p>
        <p className="font-mono text-xs">Known as {NICKNAME} · Open to remote and EU relocation</p>
      </div>
    </footer>
  );
}
