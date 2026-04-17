import { projectsSection } from "@/data/content";
import { SectionReveal } from "./SectionReveal";

export const Projects = () => {
  return (
    <section className="py-20 md:py-28 bg-brand-soft border-y border-brand-light/40 relative">
      <div className="absolute inset-0 bg-grid-slate-100/[0.04] bg-[size:20px_20px]" />
      <div className="container relative z-10">
        <SectionReveal className="max-w-2xl mx-auto text-center mb-14">
          <p className="text-xs font-bold uppercase tracking-widest text-brand-deep dark:text-brand-blue mb-3">{projectsSection.label}</p>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
            {projectsSection.title}
          </h2>
          <p className="mt-4 text-muted-foreground text-lg">
            {projectsSection.subtitle}
          </p>
        </SectionReveal>

        <div className="grid md:grid-cols-3 gap-5">
          {projectsSection.levels.map((lv, i) => (
            <SectionReveal key={lv.level} delay={i * 100}>
              <div className="bg-surface border-2 border-brand-light/60 shadow-md rounded-3xl p-7 h-full card-hover relative overflow-hidden group">
                <div className="relative z-10">
                  <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-deep text-white text-xs font-bold tracking-wide mb-5">
                    {lv.level}
                  </div>
                  <div className="h-12 w-12 rounded-2xl bg-brand-blue/10 flex items-center justify-center text-brand-blue mb-5">
                    <lv.icon className="h-5 w-5" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">{lv.title}</h3>
                  <p className="text-sm text-slate-600 font-medium leading-relaxed mb-6">{lv.desc}</p>
                  <div className="flex flex-wrap gap-2 pt-2 border-t border-brand-light/40">
                    {lv.tags.map((t) => (
                      <span key={t} className="text-xs px-3 py-1.5 rounded-md bg-brand-soft text-brand-dark dark:text-brand-blue font-bold">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </SectionReveal>
          ))}
        </div>
      </div>
    </section>
  );
};
