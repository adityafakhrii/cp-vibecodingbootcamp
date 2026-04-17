import { SectionReveal } from "./SectionReveal";
import { GradientButton } from "./GradientButton";
import { Check, Flame } from "lucide-react";

const includes = [
  "8x sesi live intensif",
  "Lifetime akses recording",
  "Akses komunitas builder",
  "Mentoring support langsung",
  "Modul terstruktur dari nol",
  "Sertifikat kelulusan",
];

export const Pricing = () => {
  return (
    <section id="harga" className="py-20 md:py-28 relative">
      <div className="absolute inset-0 radial-glow opacity-50 pointer-events-none" />
      <div className="container relative">
        <SectionReveal className="max-w-2xl mx-auto text-center mb-14">
          <p className="text-sm font-medium text-gradient-brand mb-3">HARGA</p>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
            Investasi sekali, skill seumur hidup.
          </h2>
        </SectionReveal>

        <SectionReveal className="max-w-2xl mx-auto">
          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-brand opacity-25 blur-3xl rounded-full pointer-events-none" />
            <div className="relative glass-strong rounded-3xl p-8 md:p-10 shadow-glow">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-gradient-brand text-white text-xs font-semibold mb-6">
                <Flame className="h-3.5 w-3.5" />
                Promo Early Bird — Slot Terbatas
              </div>

              <h3 className="text-2xl font-bold mb-2">Vibe Coding Bootcamp</h3>
              <p className="text-muted-foreground mb-7">Akses penuh ke semua materi & support.</p>

              <div className="flex items-end gap-3 mb-2">
                <span className="text-5xl md:text-6xl font-extrabold tracking-tight text-gradient-brand">
                  Rp700.000
                </span>
              </div>
              <div className="flex items-center gap-3 mb-7">
                <span className="text-muted-foreground line-through">Rp2.000.000</span>
                <span className="text-xs px-2 py-1 rounded-md bg-gradient-brand text-white font-semibold">
                  HEMAT 65%
                </span>
              </div>

              <div className="hairline rounded-2xl p-4 mb-7 bg-background/40">
                <p className="text-sm">
                  ⚠️ <span className="font-semibold">Slot terbatas</span> — harga akan naik setelah batch ini terisi penuh.
                </p>
              </div>

              <ul className="space-y-3 mb-8">
                {includes.map((it) => (
                  <li key={it} className="flex items-start gap-3 text-sm">
                    <span className="mt-0.5 h-5 w-5 rounded-full bg-gradient-brand flex items-center justify-center shrink-0">
                      <Check className="h-3 w-3 text-white" strokeWidth={3} />
                    </span>
                    {it}
                  </li>
                ))}
              </ul>

              <GradientButton size="lg" className="w-full">
                Amankan Slot Sekarang
              </GradientButton>
              <p className="text-xs text-muted-foreground text-center mt-4">
                Pembayaran sekali. Akses selamanya.
              </p>
            </div>
          </div>
        </SectionReveal>
      </div>
    </section>
  );
};
