import { ButtonHTMLAttributes, forwardRef } from "react";
import { cn } from "@/lib/utils";

interface GradientButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "ghost";
  size?: "sm" | "md" | "lg" | "xl";
  asChildHref?: string;
}

export const GradientButton = forwardRef<HTMLButtonElement, GradientButtonProps>(
  ({ variant = "primary", size = "md", className, children, asChildHref, onClick, ...props }, ref) => {
    const base =
      "inline-flex items-center justify-center font-semibold transition-all duration-300 active:scale-[0.98] relative z-[100]";

    // Responsive button sizes
    const sizes =
      size === "sm" ? "px-4 py-2 text-xs sm:text-sm rounded-[10px]" :
        size === "xl" ? "px-8 py-4 sm:px-10 sm:py-5 text-base sm:text-lg rounded-[16px]" :
          size === "lg" ? "px-6 py-3 sm:px-8 sm:py-4 text-sm sm:text-base rounded-[14px]" :
            // md (normal)
            "px-5 py-2.5 sm:px-6 sm:py-3 text-sm sm:text-base rounded-[12px]";

    const styles = cn(
      {
        "bg-gradient-to-r from-[#42B549] to-[#6fdc8c] text-white hover:scale-[1.02] hover:shadow-[0_4px_20px_rgba(66,181,73,0.3)] border-none": variant === "primary",
        "bg-transparent border border-border/80 hover:bg-[#42B549]/10 hover:border-[#42B549]/30 hover:scale-[1.02] text-foreground shadow-sm transition-all": variant === "ghost",
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
