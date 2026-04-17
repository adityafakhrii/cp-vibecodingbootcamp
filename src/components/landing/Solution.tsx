import { solutionSection } from "@/data/content";
import { SectionReveal } from "./SectionReveal";
import { Check, ArrowRight } from "lucide-react";

export const Solution = () => {
  return (
    <section id="materi" className="py-20 md:py-28 relative">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <SectionReveal>
            <p className="text-sm font-medium text-gradient-brand mb-3">{solutionSection.label}</p>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight leading-tight">
              {solutionSection.title}{" "}
              <span className="text-gradient-brand">{solutionSection.titleHighlight}</span>{solutionSection.titleSuffix}
            </h2>
            <p className="mt-5 text-muted-foreground text-lg leading-relaxed">
              {solutionSection.description}
            </p>
            <ul className="mt-7 space-y-3">
              {solutionSection.points.map((p) => (
                <li key={p} className="flex items-start gap-3 text-sm md:text-base">
                  <span className="mt-0.5 h-5 w-5 rounded-full bg-gradient-brand flex items-center justify-center shrink-0">
                    <Check className="h-3 w-3 text-white" strokeWidth={3} />
                  </span>
                  <span>{p}</span>
                </li>
              ))}
            </ul>
          </SectionReveal>

          <SectionReveal delay={120}>
            <div className="relative">
              <div className="absolute -inset-6 bg-gradient-brand/20 blur-3xl rounded-full pointer-events-none" />
              <div className="relative glass-strong rounded-3xl p-6 md:p-8 shadow-glow">
                <div className="flex items-center gap-2 mb-5">
                  <span className="h-3 w-3 rounded-full bg-destructive/70" />
                  <span className="h-3 w-3 rounded-full bg-brand-blue/70" />
                  <span className="h-3 w-3 rounded-full bg-brand-purple/70" />
                  <span className="ml-3 text-xs text-muted-foreground">vibe-coding.app</span>
                </div>

                {solutionSection.steps.map((step) => (
                  <div
                    key={step.tag}
                    className="flex items-center gap-4 p-4 rounded-xl hairline mb-3 last:mb-0 bg-background/40"
                  >
                    <span className="text-xs font-mono text-muted-foreground w-16">{step.tag}</span>
                    <span className="text-sm md:text-base font-medium flex-1">{step.text}</span>
                    <ArrowRight className="h-4 w-4 text-muted-foreground" />
                  </div>
                ))}
              </div>
            </div>
          </SectionReveal>
        </div>
      </div>
    </section>
  );
};
