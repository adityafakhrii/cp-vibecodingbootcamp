import { hero } from "@/data/content";
import { GradientButton } from "./GradientButton";
import { SectionReveal } from "./SectionReveal";
import { ArrowRight } from "lucide-react";

export const Hero = () => {
  return (
    <section
      id="top"
      className="relative pt-40 md:pt-52 pb-28 md:pb-40 overflow-hidden"
    >
      {/* Backdrop */}
      <div className="absolute inset-0 grid-bg opacity-60 pointer-events-none [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_75%)]" />
      <div className="absolute inset-0 radial-glow pointer-events-none" />
      {/* Soft brand glow */}
      <div className="pointer-events-none absolute left-1/2 top-1/3 -translate-x-1/2 -translate-y-1/2 h-[480px] w-[480px] rounded-full bg-brand-purple/20 blur-[120px]" />
      <div className="pointer-events-none absolute left-[20%] top-[55%] h-[320px] w-[320px] rounded-full bg-brand-blue/15 blur-[110px]" />

      <div className="container relative">
        <SectionReveal className="max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass text-xs text-muted-foreground mb-10">
            <span className="h-1.5 w-1.5 rounded-full bg-gradient-brand animate-pulse" />
            {hero.badge}
          </div>

          <h1 className="font-extrabold tracking-tight">
            <span className="block text-base sm:text-lg md:text-xl font-medium text-muted-foreground mb-5 sm:mb-6">
              {hero.subtitle}
            </span>
            <span className="block text-5xl sm:text-6xl md:text-7xl lg:text-8xl leading-[1.02] text-gradient-brand">
              {hero.titleLine1}
              <br className="hidden sm:block" />
              <span className="sm:hidden"> </span>
              {hero.titleLine2}
            </span>
          </h1>

          <p className="mt-10 md:mt-12 text-base md:text-lg text-muted-foreground/90 max-w-xl mx-auto leading-relaxed">
            {hero.description}
          </p>

          <div className="mt-12 md:mt-14 flex flex-col items-center gap-4">
            <GradientButton asChildHref={hero.ctaHref} size="lg">
              {hero.ctaText}
              <ArrowRight className="ml-2 h-4 w-4" />
            </GradientButton>
            <a
              href={hero.secondaryHref}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors story-link"
            >
              {hero.secondaryText}
            </a>
          </div>
        </SectionReveal>
      </div>
    </section>
  );
};
