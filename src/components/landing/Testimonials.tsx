import { SectionReveal } from "./SectionReveal";
import { Star } from "lucide-react";

const items = [
  {
    quote:
      "Dulu gue bayar developer 15 juta cuma buat MVP. Sekarang gue bisa bikin sendiri dalam 3 hari pakai workflow yang diajarin di sini.",
    name: "Rara Wijaya",
    role: "Founder, Skincare Brand",
  },
  {
    quote:
      "Gue background marketing, gak ngerti coding sama sekali. Selesai bootcamp, gue udah deploy dashboard internal buat tim sendiri.",
    name: "Bagas Pratama",
    role: "Marketing Lead",
  },
  {
    quote:
      "Materinya straight to the point. Gak ada teori bertele-tele — langsung praktek dan hasilnya kelihatan tiap sesi.",
    name: "Nadia Salsabila",
    role: "Product Designer",
  },
];

export const Testimonials = () => {
  return (
    <section className="py-20 md:py-28">
      <div className="container">
        <SectionReveal className="max-w-2xl mx-auto text-center mb-14">
          <p className="text-sm font-medium text-gradient-brand mb-3">TESTIMONI</p>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
            Hasil nyata dari alumni.
          </h2>
        </SectionReveal>

        <div className="grid md:grid-cols-3 gap-5">
          {items.map((t, i) => (
            <SectionReveal key={t.name} delay={i * 100}>
              <div className="glass rounded-2xl p-6 h-full">
                <div className="flex gap-0.5 mb-4">
                  {Array.from({ length: 5 }).map((_, k) => (
                    <Star key={k} className="h-4 w-4 fill-brand-blue text-brand-blue" />
                  ))}
                </div>
                <p className="text-sm md:text-base leading-relaxed mb-6">"{t.quote}"</p>
                <div className="flex items-center gap-3 pt-4 border-t border-foreground/10">
                  <div className="h-10 w-10 rounded-full bg-gradient-brand flex items-center justify-center text-white text-sm font-bold">
                    {t.name.split(" ").map((n) => n[0]).slice(0, 2).join("")}
                  </div>
                  <div>
                    <p className="text-sm font-semibold">{t.name}</p>
                    <p className="text-xs text-muted-foreground">{t.role}</p>
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
