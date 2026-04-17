import { SectionReveal } from "./SectionReveal";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "Gue bener-bener pemula, bisa ikut?",
    a: "Bisa banget. Bootcamp ini emang dirancang khusus buat non-tech people. Lo gak butuh background coding sama sekali — kita mulai dari nol.",
  },
  {
    q: "Apa harus bisa coding dulu?",
    a: "Tidak. Justru ini bootcamp pertama yang fokus ngajarin lo build pakai AI tanpa harus ngerti syntax. AI yang nulis codenya, lo yang ngarahin.",
  },
  {
    q: "Apakah gue beneran bisa bikin aplikasi setelah lulus?",
    a: "Iya. Setiap level lo akan deploy aplikasi nyata — dari portfolio, POS, sampai AI app. Gak cuma teori, lo punya 3 produk live setelah lulus.",
  },
  {
    q: "Kalau gue ketinggalan sesi live gimana?",
    a: "Tenang, semua sesi direkam dan bisa diakses selamanya. Lo juga bisa nanya di komunitas atau langsung ke mentor.",
  },
  {
    q: "Tools-nya berbayar gak?",
    a: "Mostly tools yang kita pakai punya free tier yang cukup buat belajar. Kalau lo mau scale up nanti tinggal upgrade sesuai kebutuhan project.",
  },
  {
    q: "Gimana cara bayarnya?",
    a: "Setelah klik 'Amankan Slot Sekarang', lo akan diarahkan ke halaman pembayaran. Pembayaran sekali, akses selamanya.",
  },
];

export const FAQ = () => {
  return (
    <section id="faq" className="py-20 md:py-28">
      <div className="container max-w-3xl">
        <SectionReveal className="text-center mb-12">
          <p className="text-sm font-medium text-gradient-brand mb-3">FAQ</p>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
            Masih ada pertanyaan?
          </h2>
        </SectionReveal>

        <SectionReveal>
          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map((f, i) => (
              <AccordionItem
                key={i}
                value={`item-${i}`}
                className="glass rounded-2xl border-0 px-5 overflow-hidden"
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
