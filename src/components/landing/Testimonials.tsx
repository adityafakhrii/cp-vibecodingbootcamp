import { testimonialsSection } from "@/data/content";
import { SectionReveal } from "./SectionReveal";
import { Star } from "lucide-react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";

export const Testimonials = () => {
  const [emblaRef] = useEmblaCarousel(
    { loop: true, align: "start" },
    [Autoplay({ delay: 3000, stopOnInteraction: false, stopOnMouseEnter: true })]
  );

  return (
    <section className="py-20 md:py-28 bg-background overflow-hidden relative">
      <div className="container">
        <SectionReveal className="max-w-2xl mx-auto text-center mb-14">
          <p className="text-sm font-semibold uppercase tracking-wider text-brand-blue mb-3">{testimonialsSection.label}</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-foreground">
            {testimonialsSection.title}
          </h2>
        </SectionReveal>

        <SectionReveal>
          <div className="overflow-hidden cursor-grab active:cursor-grabbing" ref={emblaRef}>
            <div className="flex -ml-5">
              {testimonialsSection.items.map((t, i) => (
                <div
                  key={i}
                  className="flex-[0_0_100%] min-w-0 sm:flex-[0_0_50%] lg:flex-[0_0_33.333%] pl-5"
                >
                  <div className="bg-surface border border-border shadow-sm rounded-2xl p-6 h-full flex flex-col">
                    <div className="flex gap-0.5 mb-4">
                      {Array.from({ length: 5 }).map((_, k) => (
                        <Star key={k} className="h-4 w-4 fill-brand-blue text-brand-blue" />
                      ))}
                    </div>
                    <p className="text-sm md:text-base leading-relaxed mb-6 flex-grow">"{t.quote}"</p>
                    <div className="flex items-center gap-3 pt-4 border-t border-border">
                      <div className="h-10 w-10 shrink-0 rounded-full bg-brand-blue/10 flex items-center justify-center text-brand-blue text-sm font-bold">
                        {t.name.split(" ").map((n) => n[0]).slice(0, 2).join("")}
                      </div>
                      <div>
                        <p className="text-sm font-semibold">{t.name}</p>
                        <p className="text-xs text-muted-foreground">{t.role}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </SectionReveal>
      </div>
    </section>
  );
};
