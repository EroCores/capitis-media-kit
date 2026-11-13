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
        "max-w-3xl mb-12 md:mb-16",
        align === "center" ? "mx-auto text-center" : "text-left",
        className
      )}
    >
      {eyebrow && (
        <span className="inline-block text-xs uppercase tracking-[0.25em] text-amber-400 font-mono font-semibold mb-3 px-3 py-1 rounded-full bg-amber-400/10 border border-amber-400/20">
          {eyebrow}
        </span>
      )}
      <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-white tracking-tight uppercase">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-4 text-base sm:text-lg text-neutral-400 font-normal leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  );
};
