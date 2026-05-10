import { featuresSection } from "@/data/content";
import { SectionReveal } from "./SectionReveal";

export const Features = () => {
  return (
    <section className="py-20 md:py-28 bg-surface dark:bg-background border-y border-border">
      <div className="container">
        <SectionReveal className="max-w-2xl mx-auto text-center mb-14">
          <p className="text-sm font-semibold text-brand-blue uppercase tracking-wider mb-3">{featuresSection.label}</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-foreground">
            {featuresSection.title}
          </h2>
        </SectionReveal>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">
          {featuresSection.features.map((f, i) => (
            <SectionReveal key={f.title} delay={i * 60}>
              <div className="glass-card p-6 h-full flex gap-4 card-hover overflow-hidden relative">
                <div className="h-11 w-11 rounded-xl bg-brand-blue/10 flex items-center justify-center shrink-0">
                  <f.icon className="h-5 w-5 text-brand-blue" />
                </div>
                <div>
                  <h3 className="font-semibold text-base mb-1">{f.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{f.desc}</p>
                </div>
              </div>
            </SectionReveal>
          ))}
        </div>
      </div>
    </section>
  );
};
