import { SectionReveal } from "./SectionReveal";
import { GradientButton } from "./GradientButton";
import { ArrowRight } from "lucide-react";

export const FinalCTA = () => {
  return (
    <section className="py-20 md:py-28">
      <div className="container">
        <SectionReveal>
          <div className="relative overflow-hidden rounded-3xl p-10 md:p-16 text-center glass-strong">
            <div className="absolute inset-0 bg-gradient-brand opacity-20 pointer-events-none" />
            <div className="absolute -top-32 left-1/2 -translate-x-1/2 h-72 w-[60%] bg-gradient-brand blur-3xl opacity-40 pointer-events-none" />

            <div className="relative">
              <h2 className="text-3xl md:text-6xl font-extrabold tracking-tight leading-[1.05] max-w-3xl mx-auto">
                Kalau di 2026 lo masih bangun manual,
                <br />
                <span className="text-gradient-brand">lo udah ketinggalan.</span>
              </h2>
              <p className="mt-6 text-muted-foreground text-base md:text-lg max-w-xl mx-auto">
                Era baru udah dimulai. Pertanyaannya: lo mau jadi pemain atau penonton?
              </p>
              <div className="mt-9">
                <GradientButton asChildHref="#harga" size="lg">
                  Gabung Sekarang
                  <ArrowRight className="ml-2 h-4 w-4" />
                </GradientButton>
              </div>
            </div>
          </div>
        </SectionReveal>
      </div>
    </section>
  );
};
