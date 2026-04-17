import { useEffect, useState } from "react";
import { GradientButton } from "./GradientButton";
import { ThemeToggle } from "./ThemeToggle";
import { Sparkles, Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const links = [
  { href: "#materi", label: "Materi" },
  { href: "#roadmap", label: "Roadmap" },
  { href: "#mentor", label: "Mentor" },
  { href: "#harga", label: "Harga" },
  { href: "#faq", label: "FAQ" },
];

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll when mobile menu open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  // Close on escape
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
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
            scrolled || open ? "glass-strong" : "glass"
          )}
        >
          <a
            href="#top"
            onClick={() => setOpen(false)}
            className="flex items-center gap-2 font-bold tracking-tight"
          >
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
            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-label={open ? "Tutup menu" : "Buka menu"}
              aria-expanded={open}
              aria-controls="mobile-menu"
              className="md:hidden inline-flex items-center justify-center h-10 w-10 rounded-xl border border-border/60 bg-background/40 text-foreground hover:bg-background/70 transition-colors"
            >
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </nav>
      </div>

      {/* Mobile menu */}
      <div
        className={cn(
          "md:hidden fixed inset-0 z-[60] transition-opacity duration-300",
          open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        )}
        aria-hidden={!open}
        onClick={(e) => {
          if (e.target === e.currentTarget) setOpen(false);
        }}
      >
        {/* Backdrop */}
        <button
          type="button"
          tabIndex={-1}
          aria-label="Tutup menu"
          onClick={() => setOpen(false)}
          className="absolute inset-0 bg-background/60 backdrop-blur-sm"
        />

        {/* Panel */}
        <div
          id="mobile-menu"
          className={cn(
            "relative mx-4 mt-[88px] rounded-2xl glass-strong p-5 shadow-glow transition-all duration-300 origin-top",
            open ? "opacity-100 translate-y-0 scale-100" : "opacity-0 -translate-y-2 scale-[0.98]"
          )}
        >
          <ul className="flex flex-col">
            {links.map((l, i) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="flex items-center justify-between py-3.5 px-2 text-base font-medium text-foreground/90 hover:text-foreground border-b border-border/40 last:border-b-0 transition-colors"
                  style={{ transitionDelay: `${i * 30}ms` }}
                >
                  <span>{l.label}</span>
                  <span className="text-muted-foreground text-sm">→</span>
                </a>
              </li>
            ))}
          </ul>

          <div className="mt-5">
            <GradientButton
              asChildHref="#harga"
              className="w-full justify-center"
              onClick={() => setOpen(false)}
            >
              Gabung Sekarang
            </GradientButton>
          </div>
        </div>
      </div>
    </header>
  );
};
