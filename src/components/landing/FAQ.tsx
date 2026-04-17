import { faqSection } from "@/data/content";
import { SectionReveal } from "./SectionReveal";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export const FAQ = () => {
  return (
    <section id="faq" className="py-20 md:py-28 bg-background">
      <div className="container max-w-3xl">
        <SectionReveal className="text-center mb-12">
          <p className="text-sm font-semibold uppercase tracking-wider text-brand-blue mb-3">{faqSection.label}</p>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-foreground">
            {faqSection.title}
          </h2>
        </SectionReveal>

        <SectionReveal>
          <Accordion type="single" collapsible className="space-y-3">
            {faqSection.faqs.map((f, i) => (
              <AccordionItem
                key={i}
                value={`item-${i}`}
                className="bg-surface border border-border rounded-2xl px-5 overflow-hidden shadow-sm"
              >
                <AccordionTrigger className="text-left font-semibold hover:no-underline py-5">
                  {f.q}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed pb-5">
                  {f.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </SectionReveal>
      </div>
    </section>
  );
};
