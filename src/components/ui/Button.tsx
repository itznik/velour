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
    "bg-[var(--accent)] text-black px-6 py-3 rounded-lg " +
    "hover:bg-[var(--accent-hover)] transition-colors duration-300",

  ghost:
    "border border-[var(--border-subtle)] text-[var(--foreground)] px-6 py-3 rounded-lg " +
    "hover:bg-white/5 transition-colors duration-300",

  outline:
    "border border-[var(--accent)] text-[var(--accent)] px-6 py-3 rounded-lg " +
    "hover:bg-[var(--accent)] hover:text-black transition-colors duration-300",
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
