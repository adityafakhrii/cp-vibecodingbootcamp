import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { SectionReveal } from "./SectionReveal";
import {
  Lightbulb,
  Sparkles,
  Monitor,
  AppWindow,
  Bot,
  Sliders,
  Rocket,
  Trophy,
  Award,
  type LucideIcon,
} from "lucide-react";

interface Session {
  n: number;
  icon: LucideIcon;
  title: string;
  desc: string;
  output: string;
}

const sessions: Session[] = [
  {
    n: 1,
    icon: Lightbulb,
    title: "Mindset & Idea Validation",
    desc: "Ubah cara lo melihat coding dan breakdown ide jadi struktur aplikasi.",
    output: "Ide project + struktur jelas",
  },
  {
    n: 2,
    icon: Sparkles,
    title: "Prompting Skill",
    desc: "Belajar cara 'ngomong' ke AI biar bisa generate aplikasi sesuai keinginan.",
    output: "Prompt siap pakai",
  },
  {
    n: 3,
    icon: Monitor,
    title: "Build Landing Page",
    desc: "Bikin landing page profesional untuk produk lo.",
    output: "Landing page live",
  },
  {
    n: 4,
    icon: AppWindow,
    title: "Build Web App",
    desc: "Mulai bangun aplikasi utama dari nol pakai AI.",
    output: "Web app basic",
  },
  {
    n: 5,
    icon: Bot,
    title: "AI Integration",
    desc: "Tambahin fitur AI biar aplikasi lo lebih pintar.",
    output: "AI-powered feature",
  },
  {
    n: 6,
    icon: Sliders,
    title: "Improvement & Feature Expansion",
    desc: "Upgrade aplikasi jadi lebih usable dan real.",
    output: "App lebih kompleks",
  },
  {
    n: 7,
    icon: Rocket,
    title: "Deploy & Publish",
    desc: "Launch aplikasi lo ke internet.",
    output: "App live + domain",
  },
  {
    n: 8,
    icon: Trophy,
    title: "Monetization & Showcase",
    desc: "Belajar cara jual / manfaatin aplikasi lo.",
    output: "Project siap dipakai / dijual",
  },
];

export const Roadmap = () => {
  return (
    <SectionReveal as="section" id="roadmap" className="py-24 sm:py-32">
      <div className="container mx-auto max-w-4xl px-6">
        <div className="text-center mb-14">
          <span className="inline-block text-xs font-medium tracking-widest uppercase text-muted-foreground mb-4">
            Roadmap Bootcamp
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight leading-[1.1]">
            Lo Gak Akan Bingung Mulai dari Mana —{" "}
            <span className="text-gradient-brand">Kita Udah Susun Step-by-Step</span>
          </h2>
          <p className="mt-5 text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto">
            Dalam 8 sesi, lo akan dibimbing dari nol sampai punya aplikasi berbasis AI yang bisa dipakai atau dijual.
          </p>
        </div>

        <Accordion
          type="single"
          collapsible
          defaultValue="session-1"
          className="glass rounded-2xl px-2 sm:px-6 divide-y divide-border/60"
        >
          {sessions.map((s) => {
            const Icon = s.icon;
            return (
              <AccordionItem
                key={s.n}
                value={`session-${s.n}`}
                className="border-b-0 first:pt-1 last:pb-1"
              >
                <AccordionTrigger className="hover:no-underline py-5 group">
                  <div className="flex items-center gap-4 text-left">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-brand/10 border border-border/60 text-foreground group-hover:border-brand-blue/40 transition-colors">
                      <Icon className="h-5 w-5" strokeWidth={1.75} />
                    </div>
                    <div className="flex flex-col">
                      <span className="text-xs font-medium text-muted-foreground tracking-wide">
                        Sesi {s.n}
                      </span>
                      <span className="text-base sm:text-lg font-semibold">
                        {s.title}
                      </span>
                    </div>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="pl-[60px] pr-2 pb-6">
                  <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                    {s.desc}
                  </p>
                  <div className="mt-3 inline-flex items-center gap-2 rounded-full border border-border/60 bg-background/40 px-3 py-1.5">
                    <span className="h-1.5 w-1.5 rounded-full bg-gradient-brand" />
                    <span className="text-xs font-medium text-foreground">
                      Output: <span className="text-muted-foreground">{s.output}</span>
                    </span>
                  </div>
                </AccordionContent>
              </AccordionItem>
            );
          })}
        </Accordion>

        {/* Bonus block */}
        <div className="relative mt-10 rounded-2xl p-[1px] bg-gradient-brand">
          <div className="rounded-2xl bg-background/90 backdrop-blur-md p-6 sm:p-8 flex flex-col sm:flex-row items-start sm:items-center gap-5">
            <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-gradient-brand text-white shadow-lg shadow-brand-purple/20">
              <Award className="h-7 w-7" strokeWidth={1.75} />
            </div>
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-1.5">
                <span className="text-[10px] font-semibold tracking-widest uppercase text-gradient-brand">
                  Bonus
                </span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold tracking-tight">
                Best Project Award
              </h3>
              <p className="mt-2 text-sm sm:text-base text-muted-foreground leading-relaxed">
                Peserta dengan project terbaik akan mendapatkan reward dan kesempatan dipromosikan.
              </p>
            </div>
          </div>
        </div>
      </div>
    </SectionReveal>
  );
};
