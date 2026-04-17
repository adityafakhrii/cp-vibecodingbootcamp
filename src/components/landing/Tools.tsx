import { toolsSection } from "@/data/content";
import { SectionReveal } from "./SectionReveal";

export const Tools = () => {
  return (
    <section className="py-20 md:py-28">
      <div className="container">
        <SectionReveal className="max-w-2xl mx-auto text-center mb-12">
          <p className="text-sm font-medium text-gradient-brand mb-3">{toolsSection.label}</p>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
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
                className="glass rounded-2xl py-6 px-4 text-center font-semibold hover:border-foreground/15 hover:-translate-y-0.5 transition-all"
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
