import { projectsSection } from "@/data/content";
import { SectionReveal } from "./SectionReveal";

export const Projects = () => {
  return (
    <section className="py-20 md:py-28">
      <div className="container">
        <SectionReveal className="max-w-2xl mx-auto text-center mb-14">
          <p className="text-sm font-medium text-gradient-brand mb-3">{projectsSection.label}</p>
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
              <div className="glass rounded-3xl p-7 h-full hover:-translate-y-1 transition-all relative overflow-hidden group">
                <div className="absolute -top-20 -right-20 h-48 w-48 bg-gradient-brand opacity-0 group-hover:opacity-20 blur-3xl transition-opacity" />
                <div className="relative">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gradient-brand text-white text-xs font-semibold mb-5">
                    {lv.level}
                  </div>
                  <div className="h-12 w-12 rounded-2xl glass flex items-center justify-center mb-5">
                    <lv.icon className="h-5 w-5" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">{lv.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-5">{lv.desc}</p>
                  <div className="flex flex-wrap gap-2">
                    {lv.tags.map((t) => (
                      <span key={t} className="text-xs px-2.5 py-1 rounded-md hairline text-muted-foreground">
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
