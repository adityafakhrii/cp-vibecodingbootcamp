import { hero } from "@/data/content";
import { GradientButton } from "./GradientButton";
import { SectionReveal } from "./SectionReveal";
import { ArrowRight } from "lucide-react";

export const Hero = () => {
  return (
    <section
      id="top"
      className="relative pt-40 md:pt-30 pb-28 md:pb-30 bg-background overflow-hidden"
    >
      <div className="absolute inset-0 z-0 h-full w-full bg-background bg-[linear-gradient(to_right,#f1f5f9_1px,transparent_1px),linear-gradient(to_bottom,#f1f5f9_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#ffffff0a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0a_1px,transparent_1px)] bg-[size:4rem_4rem]">
        <div className="absolute left-0 right-0 top-0 -z-10 m-auto h-[310px] w-[310px] rounded-full bg-brand-blue opacity-20 blur-[100px]"></div>
      </div>
      <div className="container relative z-10">
        <SectionReveal className="max-w-4xl mx-auto text-center flex flex-col items-center">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-surface border border-border shadow-sm text-xs text-secondary-foreground font-medium mb-8">
            <span className="h-1.5 w-1.5 rounded-full bg-brand-blue animate-pulse" />
            {hero.badge}
          </div>

          <h1 className="font-extrabold tracking-tight relative z-10">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[100%] h-[140%] max-w-2xl bg-brand-light/60 blur-3xl rounded-[100%] pointer-events-none -z-10 dark:bg-brand-deep/30" />

            <span className="block text-base sm:text-lg md:text-xl font-semibold text-brand-deep dark:text-brand-blue mb-5 sm:mb-6 uppercase tracking-widest drop-shadow-sm">
              {hero.subtitle}
            </span>
            <span className="block text-5xl sm:text-6xl md:text-7xl lg:text-8xl leading-[1.05] text-foreground pb-2">
              {hero.titleLine1}
              <br className="hidden sm:block" />
              <span className="sm:hidden"> </span>
              {hero.titleLine2}{" "}
              <span className="relative inline-block whitespace-nowrap">
                <span className="relative z-10 text-brand-blue">{hero.titleHighlight}</span>
                <svg
                  className="absolute -bottom-2 sm:-bottom-3 left-0 w-full h-4 sm:h-5 text-[#DBEAFE] -z-10"
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

          <div className="mt-10 md:mt-12 flex flex-col sm:flex-row items-center justify-center gap-6 w-full">
            <GradientButton asChildHref={hero.ctaHref} size="lg" className="w-full sm:w-auto text-base py-6 px-10 shadow-xl shadow-brand-blue/30 hover:-translate-y-1">
              {hero.ctaText}
              <ArrowRight className="ml-2 h-5 w-5" />
            </GradientButton>
            <a
              href={hero.secondaryHref}
              className="text-base font-semibold text-slate-500 hover:text-brand-dark transition-colors story-link underline underline-offset-8 decoration-slate-300 hover:decoration-brand-dark h-full flex items-center"
            >
              {hero.secondaryText}
            </a>
          </div>
        </SectionReveal>
      </div>
    </section>
  );
};
