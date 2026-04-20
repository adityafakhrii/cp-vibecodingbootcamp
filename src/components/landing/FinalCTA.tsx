import { finalCTA } from "@/data/content";
import { SectionReveal } from "./SectionReveal";
import { GradientButton } from "./GradientButton";
import { ArrowRight } from "lucide-react";

export const FinalCTA = () => {
  return (
    <section className="py-20 md:py-28">
      <div className="container">
        <SectionReveal>
          <div className="relative overflow-hidden p-10 md:p-12 lg:p-16 glass-panel">
            <div className="grid lg:grid-cols-2 gap-10 items-center justify-between text-center lg:text-left">
              <div className="order-2 lg:order-1 relative">
                <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight leading-[1.1] max-w-xl mx-auto lg:mx-0">
                  {finalCTA.title}
                  <br />
                  <span className="text-brand-blue">{finalCTA.titleHighlight}</span>
                </h2>
                <p className="mt-6 text-muted-foreground text-base md:text-lg max-w-xl mx-auto lg:mx-0">
                  {finalCTA.subtitle}
                </p>
                <div className="mt-9 flex justify-center lg:justify-start">
                  <GradientButton asChildHref={finalCTA.ctaHref} size="lg">
                    {finalCTA.ctaText}
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </GradientButton>
                </div>
              </div>

              <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
                <div className="relative rounded-full overflow-hidden shadow-lg border-4 border-white lg:-mr-4 aspect-square max-w-[280px] lg:max-w-md w-full">
                  <img
                    src="/images/illustrations/cta_invite.png"
                    alt="Professional giving a welcoming invitation"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </SectionReveal>
      </div>
    </section>
  );
};
