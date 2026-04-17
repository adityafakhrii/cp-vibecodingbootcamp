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
      "inline-flex items-center justify-center font-semibold rounded-2xl transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue/60";
    const sizes = size === "lg" ? "px-7 py-4 text-base" : "px-5 py-3 text-sm";
    const styles =
      variant === "primary"
        ? "text-white bg-gradient-brand shadow-glow hover:scale-[1.02] hover:shadow-[0_14px_50px_-10px_hsl(var(--brand-purple)/0.7)] active:scale-[0.99]"
        : "text-foreground glass hover:bg-card/80 hover:border-foreground/15";

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
