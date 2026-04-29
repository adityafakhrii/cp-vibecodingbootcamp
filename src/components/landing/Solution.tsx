import { solutionSection } from "@/data/content";
import { SectionReveal } from "./SectionReveal";
import { Check } from "lucide-react";

export const Solution = () => {
  return (
    <section
      id="materi"
      className="relative py-28 md:py-36 overflow-hidden bg-background border-y border-brand-light/40"
    >
      {/* Soft ambient glow */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-0 -translate-x-1/2 h-[420px] w-[760px] rounded-full bg-brand-blue/10 blur-[120px]" />
        <div className="absolute right-0 bottom-0 h-[320px] w-[420px] rounded-full bg-brand-purple/10 blur-[120px]" />
      </div>

      <div className="container">
        <SectionReveal className="max-w-3xl mx-auto text-center flex flex-col items-center">
          <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-surface border border-border shadow-sm text-xs font-semibold uppercase tracking-widest text-brand-blue mb-8">
            <span className="h-1.5 w-1.5 rounded-full bg-brand-blue" />
            {solutionSection.label}
          </span>

          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.1] text-foreground">
            {solutionSection.title}
            <br className="hidden sm:block" />
            <span className="sm:hidden"> </span>
            <span className="text-brand-blue">{solutionSection.titleHighlight}</span>
            {solutionSection.titleSuffix}
          </h2>

          <p className="mt-8 md:mt-10 text-base md:text-xl text-muted-foreground leading-relaxed max-w-2xl">
            {solutionSection.description}
          </p>
        </SectionReveal>

        <SectionReveal delay={120} className="mt-14 md:mt-16">
          <ul className="grid sm:grid-cols-2 gap-4 md:gap-5 max-w-3xl mx-auto">
            {solutionSection.points.map((p) => (
              <li
                key={p}
                className="flex items-start gap-3 p-4 md:p-5 rounded-2xl border border-border bg-surface/60 backdrop-blur-sm hover:border-brand-blue/40 transition-colors"
              >
                <span className="mt-0.5 h-6 w-6 rounded-full bg-brand-blue flex items-center justify-center shrink-0">
                  <Check className="h-3.5 w-3.5 text-primary-foreground" strokeWidth={3} />
                </span>
                <span className="text-sm md:text-base text-foreground/90">{p}</span>
              </li>
            ))}
          </ul>
        </SectionReveal>
      </div>
    </section>
  );
};
