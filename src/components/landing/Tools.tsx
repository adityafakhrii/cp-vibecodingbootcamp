import { toolsSection } from "@/data/content";
import { SectionReveal } from "./SectionReveal";

export const Tools = () => {
  return (
    <section className="py-20 md:py-28 bg-background">
      <div className="container">
        <SectionReveal className="max-w-2xl mx-auto text-center mb-12">
          <p className="text-sm font-semibold uppercase tracking-wider text-brand-blue mb-3">{toolsSection.label}</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-foreground">
            {toolsSection.title}
          </h2>
          <p className="mt-4 text-muted-foreground text-lg">
            {toolsSection.subtitle}
          </p>
        </SectionReveal>

        <SectionReveal>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {toolsSection.tools.map((t) => (
              <div
                key={t}
                className="bg-surface border border-border shadow-sm rounded-2xl py-6 px-4 text-center font-semibold hover:shadow-md hover:-translate-y-0.5 transition-all text-foreground"
              >
                {t}
              </div>
            ))}
          </div>
        </SectionReveal>
      </div>
    </section>
  );
};
