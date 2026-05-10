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

          <div className="glass-panel p-7 md:p-10 relative z-10 border border-white/80 dark:border-white/20">
            {/* Top section: Photo + Info */}
            <div className="grid md:grid-cols-[auto_1fr] gap-7 md:gap-10 items-center">
              <div className="relative mx-auto md:mx-0">
                <div className="relative h-36 w-36 sm:h-44 sm:w-44 md:h-52 md:w-52 rounded-2xl md:rounded-3xl overflow-hidden shadow-sm border border-border">
                  <img
                    src={mentorSection.photo}
                    alt={mentorSection.name}
                    className="h-full w-full object-cover object-top"
                    loading="lazy"
                  />
                </div>
              </div>
              <div>
                <h3 className="text-2xl md:text-3xl font-bold tracking-tight">{mentorSection.name}</h3>
                <p className="text-brand-blue font-semibold mt-1">{mentorSection.role}</p>
                <p className="mt-4 text-slate-700 dark:text-slate-300 font-medium leading-relaxed text-sm sm:text-base">
                  {mentorSection.bio}
                </p>

                {/* Chips */}
                <div className="mt-5 flex flex-wrap gap-2">
                  {mentorSection.chips.map((c) => (
                    <span key={c.label} className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-border bg-surface text-xs font-medium">
                      <c.icon className="h-3.5 w-3.5 text-brand-blue" />
                      {c.label}
                    </span>
                  ))}
                </div>

                {/* Social Links */}
                <div className="mt-4 flex flex-wrap gap-2">
                  {mentorSection.socials.map((s) => (
                    <a
                      key={s.label}
                      href={s.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-border/60 bg-surface/50 hover:bg-brand-blue/10 hover:border-brand-blue/30 text-xs font-medium text-muted-foreground hover:text-foreground transition-all duration-200"
                    >
                      <s.icon className="h-3.5 w-3.5" />
                      {s.label}
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Organization Logos */}
            <div className="mt-8 pt-7 border-t border-border/40">
              <p className="text-xs text-muted-foreground uppercase tracking-wider font-bold text-center mb-5">
                Tergabung & Berpengalaman di
              </p>
              <div className="grid grid-cols-4 gap-4 sm:gap-6 max-w-md mx-auto">
                {mentorSection.organizations.map((org) => (
                  <div key={org.name} className="flex flex-col items-center gap-2 group">
                    <div className="h-10 w-full flex items-center justify-center rounded-lg transition-transform duration-200 group-hover:scale-105">
                      <img
                        src={org.logo}
                        alt={org.name}
                        className={`object-contain opacity-80 group-hover:opacity-100 transition-opacity duration-200 dark:brightness-110 ${org.name === "GDG Bandung" ? "max-h-7 max-w-[60px]" : "max-h-10 max-w-[80px]"}`}
                        loading="lazy"
                      />
                    </div>
                    <span className="text-[10px] text-muted-foreground font-medium">{org.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </SectionReveal>
      </div>
    </section>
  );
};
