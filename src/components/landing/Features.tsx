import { SectionReveal } from "./SectionReveal";
import { Video, Library, Users, MessageCircle, BookOpen } from "lucide-react";

const features = [
  { icon: Video, title: "8x Live Sessions", desc: "Belajar bareng langsung dengan mentor, real-time Q&A." },
  { icon: Library, title: "Lifetime Recording", desc: "Akses semua rekaman selamanya, bisa diulang kapan aja." },
  { icon: Users, title: "Community Access", desc: "Komunitas builder aktif tempat lo nanya & sharing project." },
  { icon: MessageCircle, title: "Mentoring Support", desc: "Stuck di project? Mentor siap bantu via channel khusus." },
  { icon: BookOpen, title: "Structured Modules", desc: "Materi tersusun rapi dari nol sampai siap deploy produk." },
];

export const Features = () => {
  return (
    <section className="py-20 md:py-28">
      <div className="container">
        <SectionReveal className="max-w-2xl mx-auto text-center mb-14">
          <p className="text-sm font-medium text-gradient-brand mb-3">YANG LO DAPETIN</p>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
            Semua yang lo butuhin buat sukses.
          </h2>
        </SectionReveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {features.map((f, i) => (
            <SectionReveal key={f.title} delay={i * 60} className={i === 0 ? "lg:col-span-2" : ""}>
              <div className="glass rounded-2xl p-6 h-full flex gap-4 hover:border-foreground/15 transition-all">
                <div className="h-11 w-11 rounded-xl bg-gradient-brand flex items-center justify-center shrink-0 shadow-glow">
                  <f.icon className="h-5 w-5 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-base mb-1">{f.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{f.desc}</p>
                </div>
              </div>
            </SectionReveal>
          ))}
        </div>
      </div>
    </section>
  );
};
