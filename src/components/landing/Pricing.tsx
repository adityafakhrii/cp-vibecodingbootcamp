import { pricingSection } from "@/data/content";
import { SectionReveal } from "./SectionReveal";
import { GradientButton } from "./GradientButton";
import { CountdownTimer } from "./CountdownTimer";
import { Check, Flame, Crown } from "lucide-react";

export const Pricing = () => {
  return (
    <section
      id="harga"
      className="py-20 md:py-28 relative overflow-hidden bg-gradient-to-b from-[#f0faf8] via-[#e6f7f4] to-[#f0faf8] dark:from-[#0a1a1f] dark:via-[#0d2229] dark:to-[#0a1a1f] border-y border-brand-light/40"
    >
      {/* Decorative glows */}
      <div className="absolute top-[-10%] left-1/4 w-[500px] h-[500px] bg-[#1FBBA6]/8 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-[-10%] right-1/4 w-[400px] h-[400px] bg-[#1FBBA6]/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute inset-0 bg-grid-slate-100/[0.04] bg-[size:30px_30px]" />

      <div className="container relative z-10">
        <SectionReveal className="max-w-2xl mx-auto text-center mb-10">
          <p className="text-xs font-bold uppercase tracking-widest text-brand-deep dark:text-brand-blue mb-3">{pricingSection.label}</p>
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-foreground mb-4">
            {pricingSection.title}
          </h2>
          <p className="text-muted-foreground text-lg mb-8">
            {pricingSection.subtitle}
          </p>
          <CountdownTimer />
        </SectionReveal>

        {/* Urgency Note */}
        <SectionReveal className="max-w-2xl mx-auto mb-12">
          <div className="border border-red-500/20 rounded-2xl p-5 bg-red-50/60 dark:bg-red-950/20 backdrop-blur-sm">
            <p className="text-sm text-red-900 dark:text-red-200 text-center">
              ⚠️ <span className="font-extrabold">{pricingSection.urgencyNote}</span> {pricingSection.urgencyDetail}
            </p>
          </div>
        </SectionReveal>

        {/* Pricing Cards */}
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-6 md:gap-8">
          {pricingSection.plans.map((plan, idx) => (
            <SectionReveal key={plan.name} delay={idx * 120}>
              <div
                className={`relative rounded-3xl lg:rounded-[2rem] p-6 sm:p-8 md:p-10 transition-all duration-500 overflow-hidden h-full flex flex-col ${plan.recommended
                    ? "bg-white dark:bg-white/[0.08] backdrop-blur-xl border-2 border-[#1FBBA6]/50 shadow-[0_8px_40px_rgba(31,187,166,0.12)] dark:shadow-[0_0_60px_rgba(31,187,166,0.15)]"
                    : "bg-white/80 dark:bg-white/[0.04] backdrop-blur-xl border border-border dark:border-white/10 shadow-sm"
                  }`}
              >
                {/* Recommended badge */}
                {plan.recommended && (
                  <div className="absolute top-0 right-0 bg-gradient-to-r from-[#1FBBA6] to-[#17d4b8] text-white text-[10px] sm:text-xs font-bold px-4 py-2 rounded-bl-2xl uppercase tracking-widest flex items-center gap-1.5">
                    <Crown className="h-3.5 w-3.5" />
                    {plan.badge}
                  </div>
                )}

                {/* Plan Header */}
                <div className="mb-6">
                  <div className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold mb-4 ring-1 uppercase tracking-wide ${plan.recommended
                      ? "bg-[#1FBBA6]/10 text-[#1FBBA6] ring-[#1FBBA6]/30"
                      : "bg-secondary text-muted-foreground ring-border"
                    }`}>
                    <Flame className="h-4 w-4" />
                    Paket {plan.name}
                  </div>
                  <h3 className="text-xl sm:text-2xl md:text-3xl font-extrabold mb-2 text-foreground">{`Paket ${plan.name}`}</h3>
                  <p className="text-muted-foreground font-medium text-sm sm:text-base">{plan.subtitle}</p>
                </div>

                {/* Price */}
                <div className="flex flex-col sm:flex-row sm:items-end gap-3 mb-3">
                  <span className={`text-4xl sm:text-5xl md:text-6xl font-black tracking-tight ${plan.recommended ? "text-[#1FBBA6]" : "text-foreground"
                    }`}>
                    {plan.price}
                  </span>
                </div>
                <div className="flex items-center gap-3 mb-8">
                  <span className="text-muted-foreground line-through font-semibold text-lg">{plan.originalPrice}</span>
                  <span className="text-xs px-3 py-1.5 rounded-md bg-green-500/10 text-green-600 dark:text-green-400 font-bold tracking-wide uppercase">
                    {plan.discount}
                  </span>
                </div>

                {/* Includes */}
                <ul className="space-y-3.5 mb-8 flex-grow">
                  {plan.includes.map((it) => {
                    const isBonus = it.startsWith("Bonus:");
                    return (
                      <li key={it} className={`flex items-start gap-3 text-sm sm:text-base font-medium ${isBonus ? "text-[#F16767] dark:text-[#F16767]" : "text-foreground"
                        }`}>
                        <span className={`mt-0.5 h-5 w-5 rounded-full flex items-center justify-center shrink-0 ${isBonus
                            ? "bg-[#F16767]/15 border border-[#F16767]/25"
                            : plan.recommended
                              ? "bg-[#1FBBA6]/15 border border-[#1FBBA6]/25"
                              : "bg-brand-soft dark:bg-white/10 border border-brand-light/30 dark:border-white/10"
                          }`}>
                          <Check className={`h-3 w-3 ${isBonus ? "text-[#F16767]" : plan.recommended ? "text-[#1FBBA6]" : "text-brand-dark dark:text-brand-light"
                            }`} strokeWidth={3} />
                        </span>
                        {isBonus ? (
                          <span>
                            <span className="font-bold">✨ {it.replace("Bonus: ", "")}</span>
                          </span>
                        ) : it}
                      </li>
                    );
                  })}
                </ul>

                {/* CTA */}
                {plan.recommended ? (
                  <GradientButton asChildHref={plan.ctaHref} size="xl" className="w-full mt-auto">
                    {plan.ctaText}
                  </GradientButton>
                ) : (
                  <a
                    href={plan.ctaHref}
                    className="inline-flex items-center justify-center w-full mt-auto px-8 py-4 sm:px-10 sm:py-5 text-base sm:text-lg rounded-[16px] font-semibold transition-all duration-300 active:scale-[0.98] border border-border dark:border-white/20 text-foreground hover:bg-secondary dark:hover:bg-white/10 hover:border-brand-blue/30 hover:scale-[1.02]"
                  >
                    {plan.ctaText}
                  </a>
                )}
              </div>
            </SectionReveal>
          ))}
        </div>

        {/* <p className="text-xs text-muted-foreground text-center mt-8 font-medium">
          {pricingSection.footnote}
        </p> */}
      </div>
    </section>
  );
};
