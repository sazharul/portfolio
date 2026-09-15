type PortfolioDemoBannerProps = {
  hasRepo?: boolean;
};

export function PortfolioDemoBanner({ hasRepo = true }: PortfolioDemoBannerProps) {
  return (
    <div
      className="mb-8 rounded-xl border border-amber-500/25 bg-amber-500/10 px-4 py-3 text-sm leading-relaxed text-muted"
      role="note"
      aria-label="Portfolio demonstration notice"
    >
      <p className="font-semibold text-amber-200/90">Portfolio demonstration</p>
      <p className="mt-1">
        This case study describes production experience I contributed to.{" "}
        {hasRepo
          ? "The linked GitHub repository is an independent demo for hiring review — same technology stack and architecture patterns, not the client's source code."
          : "Production source code remains in private client repositories and is not published."}{" "}
        <a href="/legal" className="text-signal hover:underline">Legal &amp; demo notice</a>
      </p>
    </div>
  );
}
