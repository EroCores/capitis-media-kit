"use client";

import React from "react";
import { collaborationServices } from "@/config/services";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { CheckCircle2 } from "lucide-react";

export const ServicesSection: React.FC = () => {
  return (
    <section id="hizmetler" className="py-20 lg:py-28 relative scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="İŞ BİRLİĞİ MODELLERİ"
          title="Markanıza Özel Çözüm Formatları"
          subtitle="Tek seferlik sponsorluktan uzun vadeli seri kampanyalara ve UGC üretimine kadar ihtiyacınıza uygun esnek modeller."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {collaborationServices.map((service) => (
            <div
              key={service.id}
              className="glass-panel glass-panel-hover p-8 rounded-3xl flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-mono uppercase tracking-wider text-amber-400 bg-amber-400/10 px-3 py-1 rounded-full border border-amber-400/20">
                    {service.badge}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-white mb-3">
                  {service.title}
                </h3>

                <p className="text-sm text-neutral-300 leading-relaxed mb-6">
                  {service.description}
                </p>

                <div className="space-y-2.5">
                  {service.highlights.map((h) => (
                    <div key={h} className="flex items-center gap-2.5 text-xs sm:text-sm text-neutral-300">
                      <CheckCircle2 className="w-4 h-4 text-amber-400 flex-shrink-0" />
                      <span>{h}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
