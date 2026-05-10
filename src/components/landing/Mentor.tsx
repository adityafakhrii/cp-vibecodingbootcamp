import { mentorSection } from "@/data/content";
import { SectionReveal } from "./SectionReveal";
import { CheckCircle2 } from "lucide-react";

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

        <SectionReveal className="max-w-5xl mx-auto relative">
          {/* Glass highlight background blob */}
          <div className="absolute -inset-4 md:-inset-10 bg-gradient-to-r from-brand-blue/30 to-brand-purple/20 blur-[60px] opacity-60 z-0 pointer-events-none rounded-[3rem] dark:opacity-40" />

          <div className="relative z-10 grid md:grid-cols-[1fr_1.2fr] gap-6 md:gap-8">
            {/* Left Column: Photo + Name + Yang Paling Penting */}
            <div className="glass-panel p-6 md:p-8 border border-white/80 dark:border-white/20 flex flex-col">
              {/* Photo */}
              <div className="relative mx-auto md:mx-0 mb-6">
                <div className="relative h-44 w-44 sm:h-52 sm:w-52 rounded-2xl overflow-hidden shadow-sm border border-border mx-auto">
                  <img
                    src={mentorSection.photo}
                    alt={mentorSection.name}
                    className="h-full w-full object-cover object-top"
                    loading="lazy"
                  />
                </div>
              </div>

              {/* Name & Role */}
              <div className="text-center md:text-left mb-6">
                <h3 className="text-2xl font-bold tracking-tight">{mentorSection.name}</h3>
                <p className="text-brand-blue font-semibold mt-1">{mentorSection.role}</p>
              </div>

              {/* Yang Paling Penting Box */}
              <div className="rounded-xl bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-700/30 p-5 mt-auto">
                <p className="text-sm font-bold text-amber-900 dark:text-amber-300 mb-2">Yang paling penting:</p>
                <p className="text-sm text-amber-800 dark:text-amber-200/80 leading-relaxed">
                  {mentorSection.yangPalingPenting}
                </p>
              </div>

              {/* Social Links */}
              <div className="mt-5 flex flex-wrap justify-center md:justify-start gap-2">
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

            {/* Right Column: Highlights + Orgs */}
            <div className="flex flex-col gap-6">
              {/* Credentials Box */}
              <div className="glass-panel p-6 md:p-8 border border-white/80 dark:border-white/20 flex-1">
                <p className="text-sm sm:text-base text-foreground font-semibold leading-relaxed mb-5">
                  <span className="font-bold">{mentorSection.highlightsIntro.split("—")[0]}—</span>
                  {mentorSection.highlightsIntro.split("—")[1]}
                </p>

                <div className="space-y-3.5">
                  {mentorSection.highlights.map((item, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-[#1FBBA6] flex-shrink-0 mt-0.5" />
                      <p className="text-sm text-slate-700 dark:text-slate-300 font-medium leading-relaxed">
                        {item.includes(":") ? (
                          <>
                            <span className="font-bold text-foreground">{item.split(":")[0]}:</span>
                            {item.split(":").slice(1).join(":")}
                          </>
                        ) : (
                          <span className="font-bold text-foreground">{item}</span>
                        )}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Organization Logos */}
              <div className="glass-panel p-5 md:p-6 border border-white/80 dark:border-white/20">
                <p className="text-xs text-muted-foreground uppercase tracking-wider font-bold text-center mb-4">
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
          </div>
        </SectionReveal>
      </div>
    </section>
  );
};
