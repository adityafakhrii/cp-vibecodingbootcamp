import { problemSection } from "@/data/content";
import { SectionReveal } from "./SectionReveal";

export const Problem = () => {
  return (
    <section className="relative py-20 md:py-28 overflow-hidden">
      {/* Ambient background */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 grid-bg opacity-40 [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_75%)]" />
        <div className="absolute -top-24 -left-20 h-72 w-72 rounded-full bg-brand-blue/15 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-brand-purple/15 blur-3xl" />
        <div className="absolute top-1/4 left-[12%] h-1.5 w-1.5 rounded-full bg-brand-blue/50 animate-float-slow" />
        <div className="absolute top-2/3 left-[28%] h-1 w-1 rounded-full bg-brand-purple/60 animate-float-slow [animation-delay:1.2s]" />
        <div className="absolute top-1/3 right-[18%] h-2 w-2 rounded-full bg-brand-blue/40 animate-float-slow [animation-delay:0.6s]" />
        <div className="absolute bottom-1/4 right-[8%] h-1 w-1 rounded-full bg-brand-purple/50 animate-float-slow [animation-delay:1.8s]" />
        <div className="absolute top-[18%] right-[40%] h-1 w-1 rounded-full bg-foreground/30 animate-float-slow [animation-delay:0.3s]" />
      </div>

      <div className="container relative">
        <SectionReveal className="max-w-2xl mx-auto text-center mb-14">
          <p className="text-sm font-medium text-gradient-brand mb-3">{problemSection.label}</p>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
            {problemSection.title}
          </h2>
          <p className="mt-4 text-muted-foreground text-lg">
            {problemSection.subtitle}
          </p>
        </SectionReveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {problemSection.items.map((it, i) => (
            <SectionReveal key={it.title} delay={i * 80}>
              <div className="relative glass rounded-2xl p-6 h-full hover:border-foreground/15 transition-all hover:-translate-y-1">
                <div className="h-11 w-11 rounded-xl bg-gradient-brand/10 border border-foreground/10 flex items-center justify-center mb-4">
                  <it.icon className="h-5 w-5 text-foreground" strokeWidth={1.75} />
                </div>
                <h3 className="font-semibold text-lg mb-2">{it.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{it.desc}</p>
              </div>
            </SectionReveal>
          ))}
        </div>
      </div>
    </section>
  );
};
