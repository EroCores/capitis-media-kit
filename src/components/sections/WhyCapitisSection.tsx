"use client";

import React from "react";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Target, Share2, Users, FileText } from "lucide-react";

const PILLARS = [
  {
    icon: Target,
    title: "Doğal & Organik Entegrasyon",
    description:
      "Markanız veya ürününüz içerikte bağıran bir reklam gibi hissettirmez. Videonun ana fikrinin, motivasyonunun veya vizyonunun doğal bir parçası olarak konumlandırılır.",
    detail: "İzleyici reklamı geçmek yerine hikâyenin sunduğu çözüme odaklanır.",
  },
  {
    icon: Share2,
    title: "Yüksek Paylaşılabilirlik",
    description:
      "İçerikler izleyicinin kendi hikâyesinde veya arkadaş gruplarında paylaşmak isteyeceği derinlikte hazırlanır. Bu da markanızın organik yayılımını çarpan etkisiyle büyütür.",
    detail: "11.2K+ yıllık organik paylaşım hacminin arkasındaki strateji budur.",
  },
  {
    icon: Users,
    title: "Nitelikli & Genç Karar Vericiler",
    description:
      "18–34 yaş arası, geleceğine ve üretkenliğine yatırım yapan dinamik kitleye doğrudan temas edersiniz. Rastgele değil, belirli bir hayat vizyonu olan bir topluluk.",
    detail: "Teknoloji, finans, eğitim, giyim ve yaşam tarzı markaları için ideal odak.",
  },
  {
    icon: FileText,
    title: "Şeffaf & Güvenilir Süreç",
    description:
      "Brief aşamasından kurgu onayına, revizyondan yayın takvimine kadar her adım yazılı olarak netleştirilir. Hiçbir aşamada belirsizlik veya sürpriz yaşanmaz.",
    detail: "7 gün içinde teslim garantisi ve planlı revizyon güvencesi.",
  },
];

export const WhyCapitisSection: React.FC = () => {
  return (
    <section id="avantajlar" className="py-20 lg:py-28 relative scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="STRATEJİK AVANTAJLAR"
          title="Markanız Neden Capitis ile Çalışmalı?"
          subtitle="Sıradan bir reklam alanı değil; hedef kitlenizin zihnine değer, disiplin ve güvenle kazınan bir marka ortaklığı."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {PILLARS.map((pillar, index) => {
            const Icon = pillar.icon;
            return (
              <div
                key={pillar.title}
                className="glass-panel glass-panel-hover p-8 rounded-3xl relative overflow-hidden flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-2xl bg-amber-400/10 border border-amber-400/20 flex items-center justify-center text-amber-400">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-xs font-mono text-neutral-500">0{index + 1}</span>
                  </div>

                  <h3 className="text-xl font-bold text-white mb-3 tracking-tight">
                    {pillar.title}
                  </h3>

                  <p className="text-sm text-neutral-300 leading-relaxed mb-4">
                    {pillar.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-neutral-800/80 text-xs text-amber-300/80 font-medium flex items-center gap-1.5">
                  <span>✓</span>
                  <span>{pillar.detail}</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
