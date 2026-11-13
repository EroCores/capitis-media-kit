"use client";

import React from "react";
import { collaborationPrinciples } from "@/config/principles";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { FileCheck, ShieldCheck, Scale, Award } from "lucide-react";

const ICON_MAP = {
  FileCheck: FileCheck,
  ShieldCheck: ShieldCheck,
  Scale: Scale,
  Award: Award,
};

export const TrustSection: React.FC = () => {
  return (
    <section className="py-20 lg:py-28 relative border-t border-neutral-900 bg-neutral-950/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="GÜVEN & PROFESYONELLİK"
          title="Güvenli İş Birliği Prensipleri"
          subtitle="Capitis ile çalışırken her iki tarafın da haklarını koruyan, mevzuata tam uyumlu ve net kurallarla ilerlersiniz."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {collaborationPrinciples.map((item) => {
            const Icon = ICON_MAP[item.iconName as keyof typeof ICON_MAP] || ShieldCheck;

            return (
              <div
                key={item.title}
                className="glass-panel p-6 sm:p-8 rounded-3xl flex items-start gap-5"
              >
                <div className="w-12 h-12 rounded-2xl bg-amber-400/10 border border-amber-400/20 flex items-center justify-center text-amber-400 flex-shrink-0">
                  <Icon className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-base sm:text-lg font-bold text-white mb-2">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
