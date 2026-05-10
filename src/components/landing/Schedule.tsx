import { scheduleSection } from "@/data/content";
import { SectionReveal } from "./SectionReveal";
import { GradientButton } from "./GradientButton";
import { ArrowRight, Zap, Clock, Lock } from "lucide-react";

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

                {/* Batch List */}
                <SectionReveal className="max-w-3xl mx-auto mb-14">
                    <div className="space-y-4">
                        {scheduleSection.batches.map((batch, index) => {
                            const isOpen = batch.status === "open";
                            const isClosed = batch.status === "closed";
                            const isComingSoon = batch.status === "coming_soon";

                            return (
                                <div
                                    key={batch.number}
                                    className={`
                                        relative overflow-hidden rounded-2xl p-5 sm:p-6
                                        transition-all duration-300
                                        ${isOpen
                                            ? "border-2 border-[#1FBBA6]/60 bg-gradient-to-r from-[#0f2027] to-[#162a3a] shadow-[0_0_40px_rgba(31,187,166,0.15)]"
                                            : isComingSoon
                                                ? "border border-white/[0.06] bg-gradient-to-r from-[#111a22] to-[#151f28] opacity-70"
                                                : "border border-white/[0.08] bg-gradient-to-r from-[#111a22] to-[#151f28] opacity-50"
                                        }
                                    `}
                                    style={{
                                        animationDelay: `${index * 100}ms`,
                                    }}
                                >
                                    {/* Active batch glow */}
                                    {isOpen && (
                                        <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-[#1FBBA6]/8 rounded-full blur-[100px] pointer-events-none" />
                                    )}

                                    <div className="relative z-10 flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6">
                                        {/* Batch Number */}
                                        <div className="flex-shrink-0">
                                            <div className={`text-3xl sm:text-4xl font-black leading-none ${isOpen ? "text-white" : "text-white/30"}`}>
                                                Batch {batch.number}
                                            </div>
                                        </div>

                                        {/* Batch Details */}
                                        <div className="flex-1 min-w-0">
                                            <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
                                                <div>
                                                    <p className={`text-xs font-medium ${isOpen ? "text-slate-400" : "text-slate-500"}`}>Kelas Dimulai:</p>
                                                    <p className={`font-bold text-base ${isOpen ? "text-[#1FBBA6]" : "text-white/30"}`}>
                                                        {batch.startDate}
                                                    </p>
                                                </div>
                                                {isOpen && (
                                                    <>
                                                        <div className="hidden sm:block w-px h-8 bg-white/10" />
                                                        <div>
                                                            <p className="text-xs text-slate-400 font-medium">Jadwal:</p>
                                                            <p className="text-white font-semibold text-sm">{batch.schedule}</p>
                                                        </div>
                                                    </>
                                                )}
                                            </div>
                                            {isOpen && batch.note && (
                                                <p className="text-xs text-slate-400 mt-2">{batch.note}</p>
                                            )}
                                        </div>

                                        {/* Status Badge / CTA */}
                                        <div className="flex-shrink-0">
                                            {isOpen ? (
                                                <GradientButton asChildHref="#harga" size="md" className="whitespace-nowrap shadow-lg shadow-[#1FBBA6]/20">
                                                    <Zap className="h-4 w-4 mr-1.5" />
                                                    {batch.statusLabel}
                                                    <ArrowRight className="ml-1.5 h-4 w-4" />
                                                </GradientButton>
                                            ) : isClosed ? (
                                                <span className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-semibold bg-white/5 text-white/30 border border-white/[0.06]">
                                                    <Lock className="h-3 w-3" />
                                                    Pendaftaran ditutup
                                                </span>
                                            ) : (
                                                <span className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-semibold bg-brand-blue/10 text-brand-blue/60 border border-brand-blue/20">
                                                    <Clock className="h-3 w-3" />
                                                    {batch.statusLabel}
                                                </span>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </SectionReveal>

                {/* Batch 1 Detail Label */}
                <SectionReveal className="max-w-5xl mx-auto text-center mb-8">
                    <div className="inline-flex items-center gap-2.5 px-5 py-2 rounded-full bg-[#1FBBA6]/10 border border-[#1FBBA6]/20">
                        <div className="h-2 w-2 rounded-full bg-[#1FBBA6] animate-pulse" />
                        <span className="text-sm font-bold text-[#1FBBA6] tracking-wide">Detail Batch 1 — Sedang Berlangsung</span>
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
