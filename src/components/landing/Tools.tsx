import { toolsSection } from "@/data/content";
import { SectionReveal } from "./SectionReveal";
import { ExternalLink } from "lucide-react";

// Logos that need a size boost (small/icon-heavy logos)
const LARGE_LOGOS = ["Google Antigravity", "GitHub"];

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
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {toolsSection.tools.map((tool) => {
              const isBoosted = LARGE_LOGOS.includes(tool.name);
              return (
                <a
                  key={tool.name}
                  href={tool.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative glass-card !rounded-2xl overflow-hidden flex items-center justify-center aspect-[2/.5] transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5"
                >
                  {/* Logo */}
                  <img
                    src={tool.logo}
                    alt={tool.name}
                    className={`w-auto object-contain transition-all duration-300 group-hover:scale-105 ${isBoosted
                      ? "max-h-12 sm:max-h-14 max-w-[160px] sm:max-w-[180px]"
                      : "max-h-8 sm:max-h-10 max-w-[140px] sm:max-w-[160px]"
                      }`}
                    loading="lazy"
                  />

                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/60 transition-all duration-300 flex items-center justify-center rounded-2xl">
                    <div className="opacity-0 group-hover:opacity-100 transition-all duration-300 flex flex-col items-center gap-2">
                      <div className="h-10 w-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center border border-white/30">
                        <ExternalLink className="h-4 w-4 text-white" />
                      </div>
                      <span className="text-white text-xs font-semibold tracking-wide">{tool.name}</span>
                    </div>
                  </div>
                </a>
              );
            })}
          </div>
        </SectionReveal>
      </div>
    </section>
  );
};
