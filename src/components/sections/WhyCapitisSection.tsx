"use client";

import React from "react";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Target, Share2, Users, FileText } from "lucide-react";

const PILLARS = [
  {
    icon: Target,
    title: "Doğal & Organik Entegrasyon",
    description:
      "Markanız içerikte göze batan bir reklam gibi durmaz. Videonun ana fikrinin, motivasyonunun ve hikâyesinin doğal bir parçası olarak konumlandırılır.",
    detail: "İzleyici reklamı geçmek yerine hikâyenin sunduğu çözüme odaklanır.",
  },
  {
    icon: Share2,
    title: "Yüksek Paylaşılabilirlik",
    description:
      "İçerikler izleyicinin kendi hikâyesinde veya arkadaş gruplarında paylaşmak isteyeceği derinlikte kurgulanır. Bu da organik yayılımınızı katlar.",
    detail: "11.2K+ yıllık organik paylaşım hacminin arkasındaki strateji.",
  },
  {
    icon: Users,
    title: "Nitelikli Genç Karar Vericiler",
    description:
      "18–34 yaş arası, kariyerine ve üretkenliğine yatırım yapan dinamik kitleye doğrudan temas edersiniz. Rastgele değil, hedefli bir topluluk.",
    detail: "Teknoloji, finans, eğitim, giyim ve yaşam tarzı markaları için ideal.",
  },
  {
    icon: FileText,
    title: "Şeffaf & Güvenilir Süreç",
    description:
      "Brief aşamasından kurgu onayına, revizyondan yayın takvimine kadar her adım yazılı olarak netleştirilir. Sürpriz maliyetler yaşanmaz.",
    detail: "7 gün içinde teslim garantisi ve planlı revizyon güvencesi.",
  },
];

export const WhyCapitisSection: React.FC = () => {
  return (
    <section id="avantajlar" className="py-16 sm:py-20 relative scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="STRATEJİK DEĞER"
          title="Markanız Neden Capitis ile Çalışmalı?"
          subtitle="Sıradan bir reklam alanı değil; hedef kitlenizin zihnine güvenle kazınan bir marka ortaklığı."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
          {PILLARS.map((pillar, index) => {
            const Icon = pillar.icon;
            return (
              <div
                key={pillar.title}
                className="glass-panel glass-panel-hover p-6 sm:p-7 rounded-2xl flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-10 h-10 rounded-xl bg-amber-400/10 border border-amber-400/20 flex items-center justify-center text-amber-400">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-xs font-mono text-neutral-500">0{index + 1}</span>
                  </div>

                  <h3 className="text-base sm:text-lg font-bold text-white mb-2">
                    {pillar.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed mb-4">
                    {pillar.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-white/[0.06] text-xs text-amber-300/80 font-medium flex items-center gap-1.5">
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
