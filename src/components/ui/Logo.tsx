import React from "react";
import Link from "next/link";

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
    sm: "w-7 h-7",
    md: "w-9 h-9",
    lg: "w-12 h-12",
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
      className={`inline-flex items-center gap-3 group focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-400 rounded-lg p-1 ${className}`}
    >
      {/* Özgün Geometrik Satranç / Strateji Taşı İkonu */}
      <div
        className={`relative ${iconDimensions} rounded-xl bg-gradient-to-br from-neutral-800 via-neutral-900 to-black p-[1px] shadow-lg shadow-black/40 border border-neutral-700/50 group-hover:border-amber-400/60 transition-colors duration-300 flex items-center justify-center`}
      >
        <svg
          viewBox="0 0 36 36"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full p-1.5"
          aria-hidden="true"
        >
          {/* Stratejik Geometrik At / Şah Sentezi */}
          <path
            d="M18 5L24 10L22 14L27 18L21 21L23 27L18 29L13 27L15 21L9 18L14 14L12 10L18 5Z"
            stroke="url(#goldGradient)"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="transition-all duration-300 group-hover:scale-105"
          />
          <path
            d="M18 12V24"
            stroke="url(#goldGradient)"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
          <circle cx="18" cy="18" r="2.5" fill="#E5B869" />
          <defs>
            <linearGradient id="goldGradient" x1="9" y1="5" x2="27" y2="29" gradientUnits="userSpaceOnUse">
              <stop stopColor="#F5F4EF" />
              <stop offset="0.5" stopColor="#E5B869" />
              <stop offset="1" stopColor="#9C7733" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {showText && (
        <div className="flex flex-col">
          <span className={`font-black uppercase text-white font-mono leading-none ${textSize}`}>
            CAPİTİS
          </span>
          <span className="text-[9px] uppercase tracking-[0.25em] text-neutral-400 font-medium">
            CREATOR MEDIA KIT
          </span>
        </div>
      )}
    </Link>
  );
};
