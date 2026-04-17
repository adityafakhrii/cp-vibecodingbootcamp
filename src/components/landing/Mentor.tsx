import { mentorSection } from "@/data/content";
import { SectionReveal } from "./SectionReveal";

export const Mentor = () => {
  return (
    <section id="mentor" className="py-20 md:py-28">
      <div className="container">
        <SectionReveal className="max-w-2xl mx-auto text-center mb-12">
          <p className="text-sm font-medium text-gradient-brand mb-3">{mentorSection.label}</p>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
            {mentorSection.title}
          </h2>
        </SectionReveal>

        <SectionReveal className="max-w-4xl mx-auto">
          <div className="glass-strong rounded-3xl p-7 md:p-10 grid md:grid-cols-[auto_1fr] gap-7 md:gap-10 items-center">
            <div className="relative mx-auto md:mx-0">
              <div className="absolute -inset-3 bg-gradient-brand blur-2xl opacity-40 rounded-full" />
              <div className="relative h-32 w-32 md:h-40 md:w-40 rounded-3xl overflow-hidden shadow-glow">
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
              <p className="text-gradient-brand font-medium mt-1">{mentorSection.role}</p>
              <p className="mt-4 text-muted-foreground leading-relaxed">
                {mentorSection.bio}
              </p>
              <div className="mt-5 flex flex-wrap gap-2">
                {mentorSection.chips.map((c) => (
                  <span key={c.label} className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full hairline text-xs">
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
