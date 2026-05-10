import { footerSocials } from "@/data/content";

const LOGO_URL = "https://ltdwpaciulpophywcuam.supabase.co/storage/v1/object/public/shared-images/1778142629573-eetalh.webp";

export const Footer = () => {
  return (
    <footer className="py-10 border-t border-border bg-background">
      <div className="container flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2 font-bold">
          <img
            src={LOGO_URL}
            alt="CODEPOLITAN"
            className="h-12 w-15 rounded-lg object-contain"
          />
        </div>
        <p className="text-xs text-muted-foreground">
          © {new Date().getFullYear()} CODEPOLITAN Vibe Coding Bootcamp. Built with AI, of course.
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
