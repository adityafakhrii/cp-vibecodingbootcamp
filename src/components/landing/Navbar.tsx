import { useEffect, useState } from "react";
import { GradientButton } from "./GradientButton";
import { ThemeToggle } from "./ThemeToggle";
import { Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";

const links = [
  { href: "#materi", label: "Materi" },
  { href: "#mentor", label: "Mentor" },
  { href: "#harga", label: "Harga" },
  { href: "#faq", label: "FAQ" },
];

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 inset-x-0 z-50 transition-all duration-300",
        scrolled ? "py-3" : "py-5"
      )}
    >
      <div className="container">
        <nav
          className={cn(
            "flex items-center justify-between rounded-2xl px-4 md:px-6 py-3 transition-all",
            scrolled ? "glass-strong" : "glass"
          )}
        >
          <a href="#top" className="flex items-center gap-2 font-bold tracking-tight">
            <span className="h-8 w-8 rounded-lg bg-gradient-brand flex items-center justify-center shadow-glow">
              <Sparkles className="h-4 w-4 text-white" />
            </span>
            <span className="text-base md:text-lg">
              Vibe<span className="text-gradient-brand">Coding</span>
            </span>
          </a>

          <div className="hidden md:flex items-center gap-7 text-sm text-muted-foreground">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="hover:text-foreground transition-colors"
              >
                {l.label}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-2">
            <ThemeToggle />
            <GradientButton asChildHref="#harga" className="hidden sm:inline-flex">
              Gabung Sekarang
            </GradientButton>
          </div>
        </nav>
      </div>
    </header>
  );
};
