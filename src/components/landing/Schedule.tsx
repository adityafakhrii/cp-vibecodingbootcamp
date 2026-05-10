import { scheduleSection } from "@/data/content";
import { SectionReveal } from "./SectionReveal";
import { GradientButton } from "./GradientButton";
import { ArrowRight, Zap } from "lucide-react";

export const Schedule = () => {
    return (
        <section id="jadwal" className="py-20 md:py-28 bg-surface dark:bg-background border-y border-border">
            <div className="container">
                <SectionReveal className="max-w-2xl mx-auto text-center mb-16">
                    <p className="text-sm font-semibold uppercase tracking-wider text-brand-blue mb-3">{scheduleSection.label}</p>
                    <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-foreground mb-4">
                        {scheduleSection.title}
                    </h2>
                    <p className="text-muted-foreground text-lg">
                        {scheduleSection.subtitle}
                    </p>
                </SectionReveal>

                {/* Batch Info Card */}
                <SectionReveal className="max-w-3xl mx-auto mb-14">
                    <div className="relative overflow-hidden rounded-2xl border-2 border-[#1FBBA6]/50 bg-gradient-to-r from-[#0f2027] to-[#162a3a] shadow-[0_0_40px_rgba(31,187,166,0.12)] p-6 sm:p-8">
                        {/* Decorative glow */}
                        <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-[#1FBBA6]/8 rounded-full blur-[100px] pointer-events-none" />

                        <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center gap-6">
                            {/* Batch Number */}
                            <div className="flex-shrink-0">
                                <div className="text-4xl sm:text-5xl font-black text-white leading-none">
                                    Batch {scheduleSection.batch.number}
                                </div>
                            </div>

                            {/* Batch Details */}
                            <div className="flex-1 space-y-2">
                                <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
                                    <div>
                                        <p className="text-xs text-slate-400 font-medium">Kelas Dimulai:</p>
                                        <p className="text-[#1FBBA6] font-bold text-lg">{scheduleSection.batch.startDate}</p>
                                    </div>
                                    <div className="hidden sm:block w-px h-8 bg-white/10" />
                                    <div>
                                        <p className="text-xs text-slate-400 font-medium">Jadwal:</p>
                                        <p className="text-white font-semibold">{scheduleSection.batch.schedule}</p>
                                    </div>
                                </div>
                                <p className="text-xs text-slate-400 mt-2">
                                    {scheduleSection.batch.note}
                                </p>
                            </div>

                            {/* Status Badge / CTA */}
                            <div className="flex-shrink-0">
                                <GradientButton asChildHref="#harga" size="md" className="whitespace-nowrap shadow-lg shadow-[#1FBBA6]/20">
                                    <Zap className="h-4 w-4 mr-1.5" />
                                    {scheduleSection.batch.status}
                                    <ArrowRight className="ml-1.5 h-4 w-4" />
                                </GradientButton>
                            </div>
                        </div>
                    </div>
                </SectionReveal>

                <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mb-20 lg:mb-24">
                    {scheduleSection.mainInfo.map((info, i) => (
                        <SectionReveal key={info.label} delay={i * 80} className="h-full">
                            <div className="glass-card p-5 text-center h-full card-hover">
                                <div className="h-10 w-10 mx-auto rounded-full bg-brand-blue/10 flex items-center justify-center mb-3">
                                    <info.icon className="h-4 w-4 text-brand-blue" />
                                </div>
                                <p className="text-[10px] sm:text-xs text-muted-foreground uppercase font-bold tracking-wider mb-1">{info.label}</p>
                                <p className="font-semibold text-foreground text-sm">{info.value}</p>
                            </div>
                        </SectionReveal>
                    ))}
                </div>

                <SectionReveal delay={150}>
                    <div className="max-w-4xl mx-auto p-8 md:p-12 relative glass-panel">
                        <h3 className="font-bold text-xl mb-10 text-center tracking-tight">Timeline Sesi</h3>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4 relative">
                            {/* Subtle dashed line connecting steps on md+ */}
                            <div className="hidden md:block absolute top-[28px] left-[15%] right-[15%] h-[2px] bg-border border-dashed z-0" />

                            {scheduleSection.timeline.map((item, index) => (
                                <div key={item.week} className="relative z-10 flex flex-col items-center text-center">
                                    <div className="h-14 w-14 rounded-full bg-surface border-2 border-border flex items-center justify-center mb-4 shadow-sm relative text-brand-blue font-bold text-lg">
                                        {index + 1}
                                    </div>
                                    <h4 className="font-semibold text-sm mb-1">{item.week}</h4>
                                    <p className="text-xs text-muted-foreground font-medium">{item.title}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </SectionReveal>
            </div>
        </section>
    );
};
