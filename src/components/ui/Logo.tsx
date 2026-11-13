import React from "react";
import Link from "next/link";
import Image from "next/image";

interface LogoProps {
  className?: string;
  showText?: boolean;
  size?: "sm" | "md" | "lg";
}

export const Logo: React.FC<LogoProps> = ({
  className = "",
  showText = true,
  size = "md",
}) => {
  const iconDimensions = {
    sm: "w-8 h-8",
    md: "w-10 h-10",
    lg: "w-14 h-14",
  }[size];

  const imageSize = {
    sm: 32,
    md: 40,
    lg: 56,
  }[size];

  const textSize = {
    sm: "text-lg",
    md: "text-xl tracking-[0.22em]",
    lg: "text-3xl tracking-[0.25em]",
  }[size];

  return (
    <Link
      href="/"
      aria-label="CAPİTİS Ana Sayfa"
      className={`inline-flex items-center gap-3 group focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-400 rounded-xl p-1 ${className}`}
    >
      {/* Resmi Capitis Büyüme & Trend Logosu */}
      <div
        className={`relative ${iconDimensions} rounded-xl bg-gradient-to-br from-neutral-900 via-black to-neutral-950 p-1.5 shadow-xl shadow-black/60 border border-neutral-700/60 group-hover:border-amber-400/80 transition-all duration-300 flex items-center justify-center overflow-hidden`}
      >
        <div className="absolute inset-0 bg-amber-400/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        <Image
          src="/images/capitis-logo.png"
          alt="CAPİTİS Logo"
          width={imageSize}
          height={imageSize}
          className="w-full h-full object-contain filter drop-shadow-[0_0_8px_rgba(255,255,255,0.2)] group-hover:drop-shadow-[0_0_12px_rgba(229,184,105,0.6)] transition-all duration-300 group-hover:scale-105"
        />
      </div>

      {showText && (
        <div className="flex flex-col">
          <span className={`font-black uppercase text-white font-mono leading-none ${textSize}`}>
            CAPİTİS
          </span>
          <span className="text-[9px] uppercase tracking-[0.28em] text-neutral-400 font-medium mt-0.5">
            CREATOR MEDIA KIT
          </span>
        </div>
      )}
    </Link>
  );
};
