import { solutionSection } from "@/data/content";
import { SectionReveal } from "./SectionReveal";
import { Check } from "lucide-react";

export const Solution = () => {
  return (
    <section
      id="materi"
      className="relative py-28 md:py-36 overflow-hidden bg-background border-y border-brand-light/40"
    >
      {/* Soft ambient glow */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-0 -translate-x-1/2 h-[420px] w-[760px] rounded-full bg-brand-blue/10 blur-[120px]" />
        <div className="absolute right-0 bottom-0 h-[320px] w-[420px] rounded-full bg-brand-purple/10 blur-[120px]" />
      </div>

      <div className="container">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <SectionReveal>
            <p className="text-sm font-semibold uppercase tracking-wider text-brand-blue mb-3">{solutionSection.label}</p>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight leading-tight text-foreground">
              {solutionSection.title}{" "}
              <span className="text-brand-blue">{solutionSection.titleHighlight}</span>{solutionSection.titleSuffix}
            </h2>
            <p className="mt-5 text-muted-foreground text-lg leading-relaxed">
              {solutionSection.description}
            </p>
            <ul className="mt-7 space-y-3">
              {solutionSection.points.map((p) => (
                <li key={p} className="flex items-start gap-3 text-sm md:text-base">
                  <span className="mt-0.5 h-5 w-5 rounded-full bg-brand-blue flex items-center justify-center shrink-0">
                    <Check className="h-3 w-3 text-primary-foreground" strokeWidth={3} />
                  </span>
                  <span>{p}</span>
                </li>
              ))}
            </ul>
          </SectionReveal>

          <SectionReveal delay={120}>
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-brand-light ">
              <img
                src="https://ltdwpaciulpophywcuam.supabase.co/storage/v1/object/public/shared-images/1778380944921-4wsmaf.webp"
                alt="Stack of projects"
                className="w-full h-full object-cover"
              />
            </div>
          </SectionReveal>
        </div>
      </div>
    </section>
  );
};
