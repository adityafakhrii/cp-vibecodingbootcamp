import { ButtonHTMLAttributes, forwardRef } from "react";
import { cn } from "@/lib/utils";

interface GradientButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "ghost";
  size?: "md" | "lg";
  asChildHref?: string;
}

export const GradientButton = forwardRef<HTMLButtonElement, GradientButtonProps>(
  ({ variant = "primary", size = "md", className, children, asChildHref, onClick, ...props }, ref) => {
    const base =
      "inline-flex items-center justify-center rounded-2xl text-sm font-semibold transition-all duration-300 active:scale-[0.98]";
    const sizes = size === "lg" ? "px-7 py-4 text-base" : "px-5 py-3 text-sm";
    const styles = cn(
      {
        "bg-brand-dark text-white hover:bg-brand-deep hover:scale-[1.02] shadow-xl hover:shadow-2xl hover:shadow-brand-dark/20 border border-brand-dark/20 opacity-100 relative z-50 rounded-xl transition-all duration-300": variant === "primary",
        "border-2 border-border bg-transparent text-foreground hover:bg-brand-soft hover:border-brand-dark hover:text-brand-dark hover:shadow-md card-hover": variant === "ghost",
      }
    );

    if (asChildHref) {
      return (
        <a
          href={asChildHref}
          onClick={onClick as unknown as React.MouseEventHandler<HTMLAnchorElement>}
          className={cn(base, sizes, styles, className)}
        >
          {children}
        </a>
      );
    }
    return (
      <button ref={ref} className={cn(base, sizes, styles, className)} {...props}>
        {children}
      </button>
    );
  }
);
GradientButton.displayName = "GradientButton";
