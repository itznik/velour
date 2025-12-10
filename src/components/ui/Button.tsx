"use client";

import { ButtonHTMLAttributes, forwardRef } from "react";
import { cn } from "@/lib/cn";

type Variant = "primary" | "ghost" | "outline";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant;
  fullWidth?: boolean;
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, children, variant = "primary", fullWidth, ...props }, ref) => {
    const base =
      "inline-flex items-center justify-center gap-2 rounded-full text-sm tracking-[0.08em] uppercase transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-black";

    const variants: Record<Variant, string> = {
      primary:
        "bg-[var(--accent)] text-black px-6 py-3 shadow-[0_0_40px_rgba(210,180,140,0.35)] hover:shadow-[0_0_60px_rgba(210,180,140,0.5)] hover:-translate-y-0.5 active:translate-y-0 text-xs md:text-[0.72rem] font-semibold",
      ghost:
        "bg-transparent text-[var(--foreground)] border border-[rgba(242,234,220,0.16)] px-6 py-3 hover:bg-[rgba(242,234,220,0.04)] text-xs md:text-[0.72rem] font-medium",
      outline:
        "bg-transparent text-[var(--accent)] border border-[var(--accent)] px-6 py-3 hover:bg-[rgba(210,180,140,0.06)] text-xs md:text-[0.72rem] font-semibold",
    };

    return (
      <button
        ref={ref}
        className={cn(base, variants[variant], fullWidth && "w-full", className)}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";
