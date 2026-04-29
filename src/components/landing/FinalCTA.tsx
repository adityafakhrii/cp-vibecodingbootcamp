import { finalCTA } from "@/data/content";
import { SectionReveal } from "./SectionReveal";
import { GradientButton } from "./GradientButton";
import { ArrowRight } from "lucide-react";

export const FinalCTA = () => {
  return (
    <section className="relative py-28 md:py-36 overflow-hidden">
      {/* Soft ambient glow */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-[480px] w-[820px] rounded-full bg-brand-blue/10 blur-[130px]" />
        <div className="absolute left-1/3 bottom-0 h-[320px] w-[420px] rounded-full bg-brand-purple/10 blur-[120px]" />
      </div>

      <div className="container">
        <SectionReveal className="max-w-3xl mx-auto text-center flex flex-col items-center">
          <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-surface border border-border shadow-sm text-xs font-semibold uppercase tracking-widest text-brand-blue mb-8">
            <span className="h-1.5 w-1.5 rounded-full bg-brand-blue animate-pulse" />
            Batch 1 — Slot Terbatas
          </span>

          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.1] text-foreground">
            {finalCTA.title}
            <br className="hidden sm:block" />
            <span className="sm:hidden"> </span>
            <span className="text-brand-blue">{finalCTA.titleHighlight}</span>
          </h2>

          <p className="mt-8 md:mt-10 text-base md:text-xl text-muted-foreground leading-relaxed max-w-2xl">
            {finalCTA.subtitle}
          </p>

          <div className="mt-10 md:mt-12 flex justify-center">
            <GradientButton asChildHref={finalCTA.ctaHref} size="lg">
              {finalCTA.ctaText}
              <ArrowRight className="ml-2 h-5 w-5" />
            </GradientButton>
          </div>
        </SectionReveal>
      </div>
    </section>
  );
};
