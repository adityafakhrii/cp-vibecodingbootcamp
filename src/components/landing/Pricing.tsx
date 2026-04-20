import { pricingSection } from "@/data/content";
import { SectionReveal } from "./SectionReveal";
import { GradientButton } from "./GradientButton";
import { CountdownTimer } from "./CountdownTimer";
import { Check, Flame } from "lucide-react";

export const Pricing = () => {
  return (
    <section id="harga" className="py-20 md:py-28 bg-background border-y border-brand-light/40 relative">
      <div className="absolute inset-0 bg-grid-slate-100/[0.04] bg-[size:30px_30px]" />
      <div className="container relative z-10">
        <SectionReveal className="max-w-2xl mx-auto text-center mb-10">
          <p className="text-xs font-bold uppercase tracking-widest text-brand-deep dark:text-brand-blue mb-3">{pricingSection.label}</p>
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-foreground mb-4">
            {pricingSection.title}
          </h2>
          <p className="text-muted-foreground text-lg mb-8">
            Promo khusus batch pertama — jangan sampai tertinggal.
          </p>
          <CountdownTimer />
        </SectionReveal>

        <SectionReveal className="max-w-2xl mx-auto relative mt-16">
          {/* Subtle Outer Glow Edge */}
          <div className="absolute -inset-1 bg-gradient-to-r from-brand-blue to-brand-primary rounded-[2rem] blur-[20px] opacity-20 pointer-events-none" />

          <div className="relative glass-card !rounded-[2.5rem] p-8 md:p-12 transition-all duration-500 overflow-hidden card-hover">
            <div className="absolute top-0 right-0 bg-brand-blue text-white text-[10px] sm:text-xs font-bold px-4 py-2 rounded-bl-2xl uppercase tracking-widest">
              Paling Laris
            </div>

            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-red-100/10 text-red-600 dark:text-red-400 text-xs font-bold mb-6 ring-1 ring-red-500/20 uppercase tracking-wide">
              <Flame className="h-4 w-4" />
              {pricingSection.badgeText}
            </div>

            <h3 className="text-2xl sm:text-3xl font-extrabold mb-2 text-foreground">{pricingSection.planTitle}</h3>
            <p className="text-muted-foreground mb-10 font-medium text-sm sm:text-base">{pricingSection.planSubtitle}</p>

            <div className="flex flex-col sm:flex-row sm:items-end gap-3 mb-3">
              <span className="text-5xl sm:text-6xl md:text-7xl font-black tracking-tight text-brand-blue">
                {pricingSection.price}
              </span>
            </div>
            <div className="flex items-center gap-3 mb-10">
              <span className="text-muted-foreground line-through font-semibold text-lg">{pricingSection.originalPrice}</span>
              <span className="text-xs px-3 py-1.5 rounded-md bg-green-500/10 text-green-600 dark:text-green-500 font-bold tracking-wide uppercase">
                {pricingSection.discount}
              </span>
            </div>

            <div className="border border-red-500/20 rounded-2xl p-5 mb-10 bg-red-50/50 dark:bg-red-950/20">
              <p className="text-sm text-red-900 dark:text-red-200">
                ⚠️ <span className="font-extrabold">{pricingSection.urgencyNote}</span> {pricingSection.urgencyDetail}
              </p>
            </div>

            <ul className="space-y-4 mb-10">
              {pricingSection.includes.map((it) => (
                <li key={it} className="flex items-start gap-4 text-sm sm:text-base font-medium text-foreground">
                  <span className="mt-0.5 h-6 w-6 rounded-full bg-brand-soft dark:bg-brand-deep/20 flex items-center justify-center shrink-0 border border-brand-light/30">
                    <Check className="h-3.5 w-3.5 text-brand-dark dark:text-brand-light" strokeWidth={3} />
                  </span>
                  {it}
                </li>
              ))}
            </ul>

            <GradientButton asChildHref={pricingSection.ctaHref} size="lg" className="w-full text-base sm:text-lg py-6 sm:py-7">
              {pricingSection.ctaText}
            </GradientButton>
            <p className="text-xs text-muted-foreground text-center mt-5 font-medium">
              {pricingSection.footnote}
            </p>
          </div>
        </SectionReveal>
      </div>
    </section>
  );
};
