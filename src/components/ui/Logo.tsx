"use client";

import React from "react";
import Link from "next/link";

interface LogoProps {
  className?: string;
  showText?: boolean;
  size?: "sm" | "md" | "lg";
}

// Orijinal Capitis trend/büyüme logosu (Doğrudan gömülü data-URI sayesinde GitHub Pages'de ASLA kırılmaz/yüklenmeme sorunu yaşamaz)
const LOGO_DATA_URI = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAAAnCAYAAAC/mE48AAAFY0lEQVR4nOWZa4hVVRTH/+t6HDPLSoqMyih6gkEPwhQqCHpgUfSgiMpAKNAKIipUjIIeYERq9CUqIsjQvgRhUURFVGh9iZKCIsohTaGHaZo53nt/seauLXsOc2fm3u5c79SCzTlnv856/NdjnyP9z8nUowRMljRH0iR/DF6/MrMdgJmZ9/33CBg0CnA0sJ+hdEWMuVI6QhX1LrmF/5RUl7Q/rtVOv6RQb1MlGnG1nlcAAeGcRvPX0hq/75p/F53esJ3gVFrT1eBWdGKTFJXDkuskzQq/9Uj+uJmt98BlZrVh1vZJOqzUvUNdomIc9pwr6YTsOd0PcQ2gMDMPavMlvRwBzvnZI2l2KNAmogJ2S3JLD0jqi+tI5HOOzJ4P6WZ9UrSzKKCe52LHf0pRlRhLLQlTAfK0W8l8ngwBbnn1tAKsEbSqY8kA2ZoyEvJnK7VRWehAMVR3OVpSgFvQzOrAiZIWZSWqt9Vmtr1k5UFmY+2pkqZHQeNz9pjZt+3APWLHQUGAxdWj/NLSmEf/7cMIlCy1QtL1mQLek3R5i9VoUuZpko6T9HfZFSXNGEWpRHZ638x2tRsE3U+rIUxCwGhWqcXLHfpT2ixrLQucrvCZao++kfSuo7Xds4AzUpTamHy3RV8vUz1c4GtJ8yT9FP3VUG49FN2sDcTchWb2l2/Vy4ehpgRMMbMfJV0l6bcwAMNkoLwl5Kw1s89SYVbRxKSqV5BmtknShZK2jHKGSMHarb4sstXg3ImmgFRuexWZ0ujs5BojUC1kXWFm7jZu/cE1E0UB9bCYQ98PHvuAc4D1kt6IrNQsrtTDBfolPR1pujZRvgcQzHracuoHvGx+WNLdkU2SdZsF1RQblnjgC9+vTwQFEEHLrfeRpEcknSvpLUknxZxaFuCSUDmq0/jHZrZ2uBNpod6Fux+Ktkl6QtKmKLyuiznVLLqn+ZOGUUra74FmL6uMoxCp8GkV7tPD13+RdHUcpzeE8LXYO6W9BH8X+Is4Wr8U++2L/lfN7PNm3yMKdZ4SU1PjuT7GNcnPHeJ/AAslLZd0cjZnUunkmKq6pySt8TMC4OXxXTG+q5z2xgsB9UhRvt8xAdkbJf0s6YhR1qajtaenW/0LkqR3wpIufH7MrmZV6OYIhOeb2SuuoDghbowxv3/SzLbmaa/TCCCz3pQ4Kd4iaa+kMyUtlnR8E4Ulhv1+laQXJN3mlow5ObyTxYs4cK2U9LyZ7RxkIuAdn+b2AhvDlVaV096/k5bGGRyYU/pp8T0wAzgLeNZhGP2L4w+Pr3kNcAXtjrFPon8qcDuwOfp9TjWu+Tt+Bx4Djs35yb9BZPzdACzI+zqtgHnB1BbgXuA8YCWwJxNiIBRxhjMJrMmE+QGYD1wCbMj692cKSOQKWw3MyvgoRvr4ks3r7Kc1Ghr3l58NLI1qbElYJ5ELQCbExlj7djwvj/UOT7K5tczyhAJfBE5vVfCOC0/DggfiBXAUcB/wayaEW3IRcFEgIaGAmOvWvhi4A9ieKSsJ7tdE61y5JcV3/0cuDcEP+BAwLSye/Hgb8AxwQWndssyKSRELgA9LcC8L/iYwtyT4wTmvMFTwQ4GHgJ3BqMP5JuDw0poiWh+waRh/TnBPLdEHwGW9KPg04EGgPwLXo8Ap5fk5s1mgvDQTOCkiWT3Rp8A12dryp/PuEUPTyfSI7g7Z14ErS3MrI/llpoQU+QdKgn8Z9cKBd3c0XbVLNILbzcBzwP156onxYiwWCgW5UDNLGeI74M74H9gbgtNgoi+KmGsjik8uQbxlJjMU3ANsDURNK4/3BAGTgSE1eydST0qf+d4HLaW1wHBlnPYecxHTTfoHZqc1MbVlFY0AAAAASUVORK5CYII=";

export const Logo: React.FC<LogoProps> = ({
  className = "",
  showText = true,
  size = "md",
}) => {
  const iconDimensions = {
    sm: "w-8 h-8",
    md: "w-10 h-10",
    lg: "w-13 h-13",
  }[size];

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
      <div
        className={`relative ${iconDimensions} rounded-xl bg-black border border-white/[0.1] group-hover:border-amber-400/80 transition-all duration-300 flex items-center justify-center p-1.5 shadow-lg group-hover:shadow-amber-500/20`}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={LOGO_DATA_URI}
          alt="CAPİTİS Logo"
          className="w-full h-full object-contain filter drop-shadow-[0_0_8px_rgba(255,255,255,0.4)] group-hover:drop-shadow-[0_0_12px_rgba(212,168,67,0.8)] transition-all duration-300 group-hover:scale-105"
        />
      </div>

      {showText && (
        <span className={`font-black uppercase text-white leading-none ${textSize}`}>
          CAPİTİS
        </span>
      )}
    </Link>
  );
};
