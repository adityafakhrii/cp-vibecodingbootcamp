import { footerSocials } from "@/data/content";
import { Sparkles } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="py-10 border-t border-border bg-background">
      <div className="container flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2 font-bold">
          <span className="h-7 w-7 rounded-lg bg-brand-blue flex items-center justify-center">
            <Sparkles className="h-3.5 w-3.5 text-primary-foreground" />
          </span>
          RuangAI Vibe<span className="text-brand-blue">Coding</span>
        </div>
        <p className="text-xs text-muted-foreground">
          © {new Date().getFullYear()} RuangAI Vibe Coding Bootcamp. Built with AI, of course.
        </p>
        <div className="flex items-center gap-4 text-xs text-muted-foreground">
          {footerSocials.map((s) => (
            <a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-foreground transition-colors"
            >
              {s.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};
