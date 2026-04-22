import { mentorSection } from "@/data/content";
import { SectionReveal } from "./SectionReveal";

export const Mentor = () => {
  return (
    <section id="mentor" className="py-20 md:py-28 bg-surface dark:bg-background border-y border-border">
      <div className="container">
        <SectionReveal className="max-w-2xl mx-auto text-center mb-12">
          <p className="text-sm font-semibold uppercase tracking-wider text-brand-blue mb-3">{mentorSection.label}</p>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
            {mentorSection.title}
          </h2>
        </SectionReveal>

        <SectionReveal className="max-w-4xl mx-auto relative">
          {/* Glass highlight background blob */}
          <div className="absolute -inset-4 md:-inset-10 bg-gradient-to-r from-brand-blue/30 to-brand-purple/20 blur-[60px] opacity-60 z-0 pointer-events-none rounded-[3rem] dark:opacity-40" />

          <div className="glass-panel p-7 md:p-10 grid md:grid-cols-[auto_1fr] gap-7 md:gap-10 items-center relative z-10 border border-white/80 dark:border-white/20">
            <div className="relative mx-auto md:mx-0">
              <div className="relative h-20 w-20 sm:h-28 sm:w-28 md:h-40 md:w-40 rounded-2xl md:rounded-3xl overflow-hidden shadow-sm border border-border">
                <img
                  src={mentorSection.photo}
                  alt={mentorSection.name}
                  className="h-full w-full object-cover"
                  loading="lazy"
                />
              </div>
            </div>
            <div>
              <h3 className="text-2xl md:text-3xl font-bold tracking-tight">{mentorSection.name}</h3>
              <p className="text-brand-blue font-semibold mt-1">{mentorSection.role}</p>
              <p className="mt-4 text-slate-800 dark:text-slate-200 font-medium leading-relaxed">
                {mentorSection.bio}
              </p>
              <div className="mt-5 flex flex-wrap gap-2">
                {mentorSection.chips.map((c) => (
                  <span key={c.label} className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-border bg-surface text-xs">
                    <c.icon className="h-3.5 w-3.5" />
                    {c.label}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </SectionReveal>
      </div>
    </section>
  );
};
