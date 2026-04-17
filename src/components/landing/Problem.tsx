import { SectionReveal } from "./SectionReveal";
import { Code2, Wallet, Bot, Lightbulb } from "lucide-react";

const items = [
  {
    icon: Code2,
    title: "Gak Bisa Coding",
    desc: "Mau belajar dari nol kelamaan, syntax bikin pusing, gak tau mulai dari mana.",
  },
  {
    icon: Wallet,
    title: "Hire Developer Mahal",
    desc: "Ngerjain MVP aja bisa tembus puluhan juta. Belum tentu hasilnya sesuai ekspektasi.",
  },
  {
    icon: Bot,
    title: "Bingung Pakai AI",
    desc: "Tools AI banyak banget, tapi gak tau workflow yang bener buat bikin produk jadi.",
  },
  {
    icon: Lightbulb,
    title: "Ide Cuma di Kepala",
    desc: "Udah validasi ke temen, semua bilang keren. Tapi sampai sekarang masih nol baris kode.",
  },
];

export const Problem = () => {
  return (
    <section className="py-20 md:py-28">
      <div className="container">
        <SectionReveal className="max-w-2xl mx-auto text-center mb-14">
          <p className="text-sm font-medium text-gradient-brand mb-3">MASALAHNYA</p>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
            Lo bukan satu-satunya yang stuck.
          </h2>
          <p className="mt-4 text-muted-foreground text-lg">
            Ribuan founder pemula ngalamin hal yang sama persis kayak lo sekarang.
          </p>
        </SectionReveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {items.map((it, i) => (
            <SectionReveal key={it.title} delay={i * 80}>
              <div className="glass rounded-2xl p-6 h-full hover:border-foreground/15 transition-all hover:-translate-y-1">
                <div className="h-11 w-11 rounded-xl bg-gradient-brand/10 border border-foreground/10 flex items-center justify-center mb-4">
                  <it.icon className="h-5 w-5 text-gradient-brand" style={{ stroke: "url(#g)" }} />
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
