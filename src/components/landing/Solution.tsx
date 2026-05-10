import { solutionSection } from "@/data/content";
import { SectionReveal } from "./SectionReveal";
import { Check, ArrowRight } from "lucide-react";

export const Solution = () => {
  return (
    <section id="materi" className="py-20 md:py-28 relative bg-background border-y border-brand-light/40">
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
