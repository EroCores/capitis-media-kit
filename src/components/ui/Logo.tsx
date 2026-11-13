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
  const imgPx = { sm: 28, md: 34, lg: 48 }[size];

  const textSize = {
    sm: "text-base",
    md: "text-lg tracking-[0.18em]",
    lg: "text-2xl tracking-[0.22em]",
  }[size];

  return (
    <Link
      href="/"
      aria-label="CAPİTİS Ana Sayfa"
      className={`inline-flex items-center gap-2.5 group focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-400 rounded-xl p-0.5 ${className}`}
    >
      <Image
        src="/images/capitis-logo.png"
        alt="CAPİTİS"
        width={imgPx}
        height={imgPx}
        className="object-contain drop-shadow-[0_0_6px_rgba(212,168,67,0.3)] group-hover:drop-shadow-[0_0_14px_rgba(212,168,67,0.55)] transition-all duration-300"
        priority
      />
      {showText && (
        <span className={`font-black uppercase text-white leading-none ${textSize}`}>
          CAPİTİS
        </span>
      )}
    </Link>
  );
};
