import { SectionReveal } from "./SectionReveal";
import { Globe, Store, Sparkles } from "lucide-react";

const levels = [
  {
    level: "Level 1",
    icon: Globe,
    title: "Portfolio Website",
    desc: "Bangun website portfolio personal yang clean & modern. Foundation buat ngerti gimana web bekerja.",
    tags: ["HTML/CSS dasar", "Deploy ke domain", "Responsive"],
  },
  {
    level: "Level 2",
    icon: Store,
    title: "Aplikasi Produk (POS)",
    desc: "Bikin Point-of-Sale system lengkap dengan database, login, dan dashboard penjualan.",
    tags: ["Database", "Auth", "CRUD"],
  },
  {
    level: "Level 3",
    icon: Sparkles,
    title: "AI-Powered Apps",
    desc: "Build produk AI nyata: Falaah (Ibadah Tracker) & SahurYuk (AI food recommendation).",
    tags: ["LLM Integration", "Recommendation", "Real product"],
  },
];

export const Projects = () => {
  return (
    <section className="py-20 md:py-28">
      <div className="container">
        <SectionReveal className="max-w-2xl mx-auto text-center mb-14">
          <p className="text-sm font-medium text-gradient-brand mb-3">PROJECT OUTPUT</p>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
            Lulus dengan 3 aplikasi nyata.
          </h2>
          <p className="mt-4 text-muted-foreground text-lg">
            Bukan tutorial hell — tiap level lo deploy produk yang bisa lo pamerin.
          </p>
        </SectionReveal>

        <div className="grid md:grid-cols-3 gap-5">
          {levels.map((lv, i) => (
            <SectionReveal key={lv.level} delay={i * 100}>
              <div className="glass rounded-3xl p-7 h-full hover:-translate-y-1 transition-all relative overflow-hidden group">
                <div className="absolute -top-20 -right-20 h-48 w-48 bg-gradient-brand opacity-0 group-hover:opacity-20 blur-3xl transition-opacity" />
                <div className="relative">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gradient-brand text-white text-xs font-semibold mb-5">
                    {lv.level}
                  </div>
                  <div className="h-12 w-12 rounded-2xl glass flex items-center justify-center mb-5">
                    <lv.icon className="h-5 w-5" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">{lv.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-5">{lv.desc}</p>
                  <div className="flex flex-wrap gap-2">
                    {lv.tags.map((t) => (
                      <span key={t} className="text-xs px-2.5 py-1 rounded-md hairline text-muted-foreground">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </SectionReveal>
          ))}
        </div>
      </div>
    </section>
  );
};
