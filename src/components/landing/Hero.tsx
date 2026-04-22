import { hero } from "@/data/content";
import { GradientButton } from "./GradientButton";
import { SectionReveal } from "./SectionReveal";
import { ArrowRight } from "lucide-react";

export const Hero = () => {
  return (
    <section
      id="top"
      className="relative pt-40 md:pt-30 pb-28 md:pb-30 bg-gradient-to-b from-[#e8f7ec] to-surface dark:from-[#0b1220] dark:to-background overflow-hidden"
    >
      <div className="bg-noise"></div>
      <div className="absolute inset-0 z-0 h-full w-full pointer-events-none">
        <div className="absolute left-[-10%] top-[-10%] -z-10 h-[600px] w-[600px] rounded-[100%] bg-[#42B549]/20 blur-[120px] dark:bg-brand-blue/10"></div>
        <div className="absolute right-[-10%] top-[20%] -z-10 h-[400px] w-[400px] rounded-[100%] bg-[#6fdc8c]/15 blur-[100px] dark:hidden"></div>
      </div>
      <div className="container relative z-10">
        <SectionReveal className="max-w-4xl mx-auto text-center flex flex-col items-center">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-surface border border-border shadow-sm text-xs text-secondary-foreground font-medium mb-8">
            <span className="h-1.5 w-1.5 rounded-full bg-brand-blue animate-pulse" />
            {hero.badge}
          </div>

          <h1 className="font-extrabold tracking-tight relative z-10">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[100%] h-[140%] max-w-2xl bg-[#42B549]/10 blur-[120px] rounded-[100%] pointer-events-none -z-10 dark:bg-brand-blue/10" />

            <span className="block text-base sm:text-lg md:text-xl font-semibold text-[#0f172a] dark:text-brand-blue mb-5 sm:mb-6 uppercase tracking-widest drop-shadow-sm">
              {hero.subtitle}
            </span>
            <span className="block text-3xl sm:text-4xl md:text-5xl lg:text-7xl leading-[1.05] text-foreground pb-2">
              {hero.titleLine1}
              <br className="hidden sm:block" />
              <span className="sm:hidden"> </span>
              {/* {hero.titleLine2}{" "} */}
              <span className="relative inline-block whitespace-normal md:whitespace-nowrap">
                <span className="relative z-10 text-brand-blue">{hero.titleHighlight}</span>
                <svg
                  className="absolute -bottom-2 sm:-bottom-3 left-0 w-full h-4 sm:h-5 text-[#42B549]/20 -z-10"
                  viewBox="0 0 200 20"
                  preserveAspectRatio="none"
                >
                  <path
                    d="M 5,15 Q 100,5 195,15"
                    stroke="currentColor"
                    strokeWidth="10"
                    fill="none"
                    strokeLinecap="round"
                  />
                </svg>
              </span>
            </span>
          </h1>

          <p className="mt-8 md:mt-10 text-base md:text-xl text-slate-600 leading-relaxed max-w-2xl mx-auto font-medium">
            {hero.description}
          </p>

          <div className="mt-10 md:mt-12 flex flex-col sm:flex-row items-center justify-center gap-6 w-full relative z-[110]">
            <GradientButton asChildHref={hero.ctaHref} size="lg" className="w-full sm:w-auto flex-shrink-0">
              {hero.ctaText}
              <ArrowRight className="ml-2 h-5 w-5" />
            </GradientButton>
            <a
              href={hero.secondaryHref}
              className="text-base font-semibold text-slate-500 hover:text-slate-800 dark:text-slate-400 dark:hover:text-slate-200 transition-colors underline underline-offset-8 decoration-slate-300 hover:decoration-slate-400 dark:decoration-slate-600 dark:hover:decoration-slate-500 h-full flex items-center"
            >
              {hero.secondaryText}
            </a>
          </div>
        </SectionReveal>
      </div>
    </section>
  );
};
