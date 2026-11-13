"use client";

import React from "react";
import { processSteps } from "@/config/process";
import { SectionHeader } from "@/components/ui/SectionHeader";

export const ProcessSection: React.FC = () => {
  return (
    <section id="surec" className="py-20 lg:py-28 relative scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="ADIM ADIM YOL HARİTASI"
          title="Nasıl Çalışıyoruz?"
          subtitle="Markanızı Capitis kitlesiyle buluşturan dört aşamalı profesyonel ve şeffaf çalışma döngüsü."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {processSteps.map((step) => (
            <div
              key={step.step}
              className="glass-panel glass-panel-hover p-6 sm:p-8 rounded-3xl relative flex flex-col justify-between"
            >
              <div>
                {/* Numara Rozeti */}
                <div className="flex items-center justify-between mb-6">
                  <span className="text-3xl font-black font-mono text-amber-400">
                    {step.step}
                  </span>
                  <div className="w-2.5 h-2.5 rounded-full bg-amber-400/40" />
                </div>

                <h3 className="text-lg font-bold text-white mb-2">
                  {step.title}
                </h3>

                <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed mb-4">
                  {step.description}
                </p>
              </div>

              <div className="pt-4 border-t border-neutral-800 text-[11px] text-neutral-400 leading-normal">
                {step.detail}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
