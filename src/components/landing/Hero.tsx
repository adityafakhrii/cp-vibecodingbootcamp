import { hero } from "@/data/content";
import { GradientButton } from "./GradientButton";
import { SectionReveal } from "./SectionReveal";
import { ArrowRight } from "lucide-react";

export const Hero = () => {
  return (
    <section
      id="top"
      className="relative min-h-screen flex items-center pt-28 md:pt-32 pb-16 md:pb-20 overflow-hidden"
      style={{
        background: "linear-gradient(160deg, #0d1f2d 0%, #0b1a28 35%, #0f2b3a 65%, #0a1e2a 100%)",
      }}
    >
      {/* Subtle noise overlay */}
      <div className="bg-noise"></div>

      {/* Grid pattern like CODEPOLITAN */}
      <div
        className="absolute inset-0 z-[1] pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(rgba(44, 212, 192, 0.07) 1px, transparent 1px),
            linear-gradient(90deg, rgba(44, 212, 192, 0.07) 1px, transparent 1px)
          `,
          backgroundSize: "64px 64px",
        }}
      />

      {/* Ambient glow effects */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute left-[-15%] top-[-20%] h-[500px] w-[500px] rounded-full bg-[#1FBBA6]/12 blur-[150px]" />
        <div className="absolute right-[5%] bottom-[-15%] h-[400px] w-[400px] rounded-full bg-[#1FBBA6]/8 blur-[130px]" />
      </div>

      {/* Sparkle dots like CODEPOLITAN */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[15%] left-[12%] h-1 w-1 rounded-full bg-white/20" />
        <div className="absolute top-[25%] right-[18%] h-1.5 w-1.5 rounded-full bg-[#1FBBA6]/30" />
        <div className="absolute top-[60%] left-[8%] h-1 w-1 rounded-full bg-white/15" />
        <div className="absolute bottom-[20%] right-[25%] h-1 w-1 rounded-full bg-[#1FBBA6]/25" />
        <div className="absolute top-[40%] right-[8%] h-1.5 w-1.5 rounded-full bg-white/10" />
        {/* Cross sparkles */}
        <svg className="absolute top-[20%] left-[25%] h-3 w-3 text-white/15" viewBox="0 0 12 12">
          <path d="M6 0v12M0 6h12" stroke="currentColor" strokeWidth="1" />
        </svg>
        <svg className="absolute top-[50%] right-[15%] h-4 w-4 text-[#1FBBA6]/20" viewBox="0 0 12 12">
          <path d="M6 0v12M0 6h12" stroke="currentColor" strokeWidth="1" />
        </svg>
        <svg className="absolute bottom-[30%] left-[20%] h-3 w-3 text-white/10" viewBox="0 0 12 12">
          <path d="M6 0v12M0 6h12" stroke="currentColor" strokeWidth="1" />
        </svg>
      </div>

      <div className="container relative z-10">
        <div className="grid lg:grid-cols-[1fr_1.15fr] gap-8 lg:gap-10 items-center">
          {/* Left Column: Text */}
          <SectionReveal className="text-left">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/[0.07] border border-white/[0.12] shadow-sm text-xs text-white/80 font-medium mb-6 backdrop-blur-sm">
              <span className="h-1.5 w-1.5 rounded-full bg-[#1FBBA6] animate-pulse" />
              {hero.badge}
            </div>

            <h1 className="font-extrabold tracking-tight">
              <span className="block text-sm sm:text-base font-semibold text-[#1FBBA6] mb-3 sm:mb-4 uppercase tracking-widest">
                {hero.subtitle}
              </span>
              <span className="block text-2xl sm:text-3xl md:text-4xl lg:text-[2.75rem] xl:text-5xl leading-[1.12] text-white pb-1">
                {hero.titleLine1}
                <br className="hidden sm:block" />
                <span className="sm:hidden"> </span>
                <span className="relative inline-block whitespace-normal md:whitespace-nowrap">
                  <span className="relative z-10 text-[#1FBBA6]">{hero.titleHighlight}</span>
                  <svg
                    className="absolute -bottom-1 sm:-bottom-1.5 left-0 w-full h-2.5 sm:h-3 text-[#1FBBA6]/25 -z-10"
                    viewBox="0 0 200 20"
                    preserveAspectRatio="none"
                  >
                    <path
                      d="M 5,15 Q 100,5 195,15"
                      stroke="currentColor"
                      strokeWidth="10"
                      fill="none"
                      strokeLinecap="round"
                    />
                  </svg>
                </span>
              </span>
            </h1>

            <p className="mt-5 md:mt-6 text-sm md:text-base text-slate-300/80 leading-relaxed max-w-lg font-medium">
              {hero.description}
            </p>

            <div className="mt-7 md:mt-8 flex flex-col sm:flex-row items-center justify-start gap-5 w-full relative z-[110]">
              <GradientButton asChildHref={hero.ctaHref} size="lg" className="w-full sm:w-auto flex-shrink-0">
                {hero.ctaText}
                <ArrowRight className="ml-2 h-5 w-5" />
              </GradientButton>
              <a
                href={hero.secondaryHref}
                className="text-sm font-semibold text-slate-400 hover:text-white transition-colors underline underline-offset-4 decoration-slate-600 hover:decoration-slate-400 flex items-center"
              >
                {hero.secondaryText}
              </a>
            </div>
          </SectionReveal>

          {/* Right Column: Illustration Image */}
          <SectionReveal delay={150} className="flex items-center justify-center lg:justify-end">
            <div className="relative w-full max-w-2xl">
              {/* Glow behind image */}
              <div className="absolute inset-0 bg-[#1FBBA6]/10 blur-[60px] rounded-full scale-90 pointer-events-none" />
              <div
                className="relative z-10 rounded-2xl overflow-hidden border border-white/10 bg-white/[0.04] backdrop-blur-sm shadow-2xl shadow-black/30 transition-transform duration-500 hover:rotate-0"
                style={{ transform: "rotate(-6deg)" }}
              >
                <img
                  src="https://ltdwpaciulpophywcuam.supabase.co/storage/v1/object/public/shared-images/1778383238748-4zdzhu.webp"
                  alt="Ilustrasi builder membangun aplikasi dengan AI"
                  className="w-full h-auto object-contain"
                  loading="eager"
                />
              </div>
            </div>
          </SectionReveal>
        </div>
      </div>
    </section>
  );
};
