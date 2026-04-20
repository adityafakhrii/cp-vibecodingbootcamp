import { problemSection } from "@/data/content";
import { SectionReveal } from "./SectionReveal";

export const Problem = () => {
  return (
    <section className="relative py-20 md:py-28 overflow-hidden bg-brand-soft border-y border-brand-light/40">
      <div className="absolute inset-0 bg-grid-slate-100/[0.04] bg-[size:20px_20px]" />
      <div className="container relative z-10">
        <SectionReveal className="max-w-2xl mx-auto text-center mb-14">
          <p className="text-xs font-bold uppercase tracking-widest text-brand-deep dark:text-brand-blue mb-3">{problemSection.label}</p>
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-foreground">
            {problemSection.title}
          </h2>
          <p className="mt-4 text-muted-foreground text-lg font-medium">
            {problemSection.subtitle}
          </p>
        </SectionReveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {problemSection.items.map((it, i) => (
            <SectionReveal key={it.title} delay={i * 80}>
              <div className="glass-card p-7 h-full card-hover">
                <div className="h-12 w-12 rounded-xl bg-brand-light/50 flex items-center justify-center mb-5 ring-4 ring-white">
                  <it.icon className="h-6 w-6 text-brand-dark" strokeWidth={2} />
                </div>
                <h3 className="font-bold text-lg mb-2 text-foreground">{it.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed font-medium">{it.desc}</p>
              </div>
            </SectionReveal>
          ))}
        </div>
      </div>
    </section>
  );
};
