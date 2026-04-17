import { GradientButton } from "./GradientButton";
import { SectionReveal } from "./SectionReveal";
import { ArrowRight, Play } from "lucide-react";

const trustTools = ["Lovable", "Bolt.new", "v0", "Base44", "GitHub"];

export const Hero = () => {
  return (
    <section id="top" className="relative pt-32 md:pt-40 pb-20 md:pb-28 overflow-hidden">
      <div className="absolute inset-0 grid-bg pointer-events-none" />
      <div className="absolute inset-0 radial-glow pointer-events-none" />

      <div className="container relative">
        <SectionReveal className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass text-xs md:text-sm text-muted-foreground mb-7">
            <span className="h-2 w-2 rounded-full bg-gradient-brand animate-pulse" />
            Batch baru dibuka — slot terbatas
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-7xl font-extrabold tracking-tight leading-[1.05]">
            Punya Ide Aplikasi
            <br />
            Tapi Gak Bisa Coding?
            <br />
            <span className="text-gradient-brand">Sekarang Lo Bisa Bangun Sendiri Pakai AI</span>
          </h1>

          <p className="mt-7 text-base md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Bootcamp intensif 8 sesi live untuk bantu lo ubah ide jadi aplikasi nyata —
            tanpa harus jadi programmer.
          </p>

          <div className="mt-9 flex flex-col sm:flex-row gap-3 justify-center">
            <GradientButton asChildHref="#harga" size="lg">
              Gabung Bootcamp Sekarang
              <ArrowRight className="ml-2 h-4 w-4" />
            </GradientButton>
            <GradientButton asChildHref="#materi" size="lg" variant="ghost">
              <Play className="mr-2 h-4 w-4" />
              Lihat Materi
            </GradientButton>
          </div>

          <div className="mt-14">
            <p className="text-xs uppercase tracking-widest text-muted-foreground mb-4">
              Tools yang akan lo kuasai
            </p>
            <div className="flex flex-wrap justify-center gap-2 md:gap-3">
              {trustTools.map((t) => (
                <span
                  key={t}
                  className="px-4 py-2 rounded-xl glass text-sm font-medium"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        </SectionReveal>
      </div>
    </section>
  );
};
