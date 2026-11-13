import React from "react";
import { cn } from "@/lib/utils";

interface BadgeProps {
  children: React.ReactNode;
  variant?: "gold" | "neutral" | "success" | "outline";
  className?: string;
}

export const Badge: React.FC<BadgeProps> = ({
  children,
  variant = "neutral",
  className,
}) => {
  const variantStyles = {
    gold: "bg-amber-400/10 text-amber-300 border-amber-400/30",
    neutral: "bg-neutral-800/80 text-neutral-300 border-neutral-700/60",
    success: "bg-emerald-500/10 text-emerald-400 border-emerald-500/20",
    outline: "bg-transparent text-neutral-400 border-neutral-700/80",
  }[variant];

  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium tracking-wide border",
        variantStyles,
        className
      )}
    >
      {children}
    </span>
  );
};
