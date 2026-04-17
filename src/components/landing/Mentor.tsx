import { SectionReveal } from "./SectionReveal";
import { Award, Code, GraduationCap } from "lucide-react";

const chips = [
  { icon: Code, label: "Web Developer" },
  { icon: GraduationCap, label: "Mentor di CODEPOLITAN" },
  { icon: Award, label: "Builder real-world apps" },
];

export const Mentor = () => {
  return (
    <section id="mentor" className="py-20 md:py-28">
      <div className="container">
        <SectionReveal className="max-w-2xl mx-auto text-center mb-12">
          <p className="text-sm font-medium text-gradient-brand mb-3">MENTOR</p>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
            Belajar langsung dari builder.
          </h2>
        </SectionReveal>

        <SectionReveal className="max-w-4xl mx-auto">
          <div className="glass-strong rounded-3xl p-7 md:p-10 grid md:grid-cols-[auto_1fr] gap-7 md:gap-10 items-center">
            <div className="relative mx-auto md:mx-0">
              <div className="absolute -inset-3 bg-gradient-brand blur-2xl opacity-40 rounded-full" />
              <div className="relative h-32 w-32 md:h-40 md:w-40 rounded-3xl bg-gradient-brand flex items-center justify-center text-white text-5xl font-bold shadow-glow">
                AF
              </div>
            </div>
            <div>
              <h3 className="text-2xl md:text-3xl font-bold tracking-tight">Aditya Fakhri Riansyah</h3>
              <p className="text-gradient-brand font-medium mt-1">Web Developer & Mentor — CODEPOLITAN</p>
              <p className="mt-4 text-muted-foreground leading-relaxed">
                Berpengalaman ngajarin ribuan student dan ngebangun aplikasi real-world.
                Fokus banget di gimana caranya non-tech people bisa shipping produk pakai AI tools modern.
              </p>
              <div className="mt-5 flex flex-wrap gap-2">
                {chips.map((c) => (
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
