import { Sparkles } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="py-10 border-t border-foreground/8">
      <div className="container flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2 font-bold">
          <span className="h-7 w-7 rounded-lg bg-gradient-brand flex items-center justify-center">
            <Sparkles className="h-3.5 w-3.5 text-white" />
          </span>
          Vibe<span className="text-gradient-brand">Coding</span>
        </div>
        <p className="text-xs text-muted-foreground">
          © {new Date().getFullYear()} Vibe Coding Bootcamp. Built with AI, of course.
        </p>
        <div className="flex items-center gap-4 text-xs text-muted-foreground">
          <a href="#" className="hover:text-foreground transition-colors">Instagram</a>
          <a href="#" className="hover:text-foreground transition-colors">Twitter</a>
          <a href="#" className="hover:text-foreground transition-colors">YouTube</a>
        </div>
      </div>
    </footer>
  );
};
