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
      "inline-flex items-center justify-center font-semibold transition-all duration-300 active:scale-[0.98] relative z-[100]";
    const sizes = size === "lg" ? "px-8 py-4 text-base sm:text-lg rounded-[14px]" : "px-6 py-3 text-sm sm:text-base rounded-[12px]";
    const styles = cn(
      {
        "bg-[#1D4ED8] text-[#FFFFFF] hover:bg-[#1E40AF] opacity-100 backdrop-filter-none backdrop-blur-none shadow-sm hover:shadow-md border-none mix-blend-normal": variant === "primary",
        "bg-white/30 dark:bg-slate-800/30 backdrop-blur-[12px] border border-white/40 dark:border-white/10 hover:bg-white/50 dark:hover:bg-slate-800/50 hover:scale-[1.02] text-slate-800 dark:text-slate-100 shadow-sm transition-all": variant === "ghost",
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
