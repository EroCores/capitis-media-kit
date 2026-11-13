"use client";

import React from "react";
import { cn } from "@/lib/utils";

interface SectionHeaderProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  className?: string;
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({
  eyebrow,
  title,
  subtitle,
  align = "center",
  className,
}) => {
  return (
    <div
      className={cn(
        "max-w-2xl mb-10 md:mb-14",
        align === "center" ? "mx-auto text-center" : "text-left",
        className
      )}
    >
      {eyebrow && (
        <span className="inline-block text-[10px] sm:text-xs uppercase tracking-[0.25em] text-amber-400 font-mono font-semibold mb-3 px-3 py-1 rounded-full bg-amber-400/[0.08] border border-amber-400/20">
          {eyebrow}
        </span>
      )}
      <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-black text-white tracking-tight uppercase leading-[1.15]">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-3 text-sm sm:text-base text-neutral-400 leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  );
};
