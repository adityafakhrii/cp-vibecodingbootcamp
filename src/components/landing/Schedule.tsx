import { scheduleSection } from "@/data/content";
import { SectionReveal } from "./SectionReveal";

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
