"use client";

import React, { useState } from "react";
import { audienceMetrics } from "@/config/metrics";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Globe, Users, Zap, Compass, Info } from "lucide-react";

export const AudienceSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<"viewers" | "followers">("viewers");
  const { viewers, followers, sourceDate } = audienceMetrics;

  const currentData = activeTab === "viewers" ? viewers : followers;

  return (
    <section id="kitle" className="py-16 sm:py-20 relative scroll-mt-20 border-t border-white/[0.06] bg-neutral-950/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="KİTLE PROFİLİ & HEDEF KİTLE"
          title="Markanız Kimin Zihninde Konumlanıyor?"
          subtitle="Kariyerine, kişisel disiplinine ve üretkenliğine yatırım yapan 18–34 yaş ağırlıklı karar vericiler."
        />

        {/* Tab Seçici */}
        <div className="flex justify-center mb-8">
          <div className="inline-flex p-1 rounded-xl bg-neutral-900/90 border border-neutral-800 shadow-inner">
            <button
              type="button"
              onClick={() => setActiveTab("viewers")}
              className={`px-4 py-2 rounded-lg text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer ${
                activeTab === "viewers"
                  ? "bg-amber-400 text-black shadow-md shadow-amber-400/20"
                  : "text-neutral-400 hover:text-white"
              }`}
            >
              İzleyici Analitiği (1.8M Erişilen Kitle)
            </button>
            <button
              type="button"
              onClick={() => setActiveTab("followers")}
              className={`px-4 py-2 rounded-lg text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer ${
                activeTab === "followers"
                  ? "bg-amber-400 text-black shadow-md shadow-amber-400/20"
                  : "text-neutral-400 hover:text-white"
              }`}
            >
              Takipçi Analitiği (5.6K+ Topluluk)
            </button>
          </div>
        </div>

        {/* Grid: Yaş, Cinsiyet, Trafik ve Ülkeler */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5">
          {/* Yaş Dağılımı (7 Kolon) */}
          <div className="lg:col-span-7 glass-panel p-5 sm:p-6 rounded-2xl flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h3 className="text-base sm:text-lg font-bold text-white flex items-center gap-2">
                    <Users className="w-4 h-4 text-amber-400" />
                    Yaş Demografisi
                  </h3>
                  <p className="text-xs text-neutral-400 mt-0.5">
                    18–34 yaş çekirdek kitlesi (%80+)
                  </p>
                </div>
                <span className="text-[10px] font-mono text-amber-400 bg-amber-400/10 px-2 py-0.5 rounded-full border border-amber-400/20">
                  Genç Yetişkin
                </span>
              </div>

              {/* Progress Barlar */}
              <div className="space-y-3">
                {currentData.age.map((item) => (
                  <div key={item.label}>
                    <div className="flex justify-between text-xs font-medium mb-1">
                      <span className={item.highlight ? "text-amber-400 font-bold" : "text-neutral-300"}>
                        {item.label} Yaş {item.highlight && "★ (Çekirdek Kitle)"}
                      </span>
                      <span className="text-white font-mono font-bold">%{item.percentage}</span>
                    </div>
                    <div className="w-full h-2.5 bg-neutral-900 rounded-full overflow-hidden border border-neutral-800 p-[1px]">
                      <div
                        className={`h-full rounded-full transition-all duration-700 ${
                          item.highlight
                            ? "bg-gradient-to-r from-amber-400 to-amber-500 shadow-sm shadow-amber-400/50"
                            : "bg-neutral-600"
                        }`}
                        style={{ width: `${item.percentage}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-5 pt-3 border-t border-white/[0.06] text-xs text-neutral-400">
              Bireysel gelişim, girişimcilik, finans ve kariyer bilincine sahip kitle.
            </div>
          </div>

          {/* Cinsiyet Dağılımı (5 Kolon) */}
          <div className="lg:col-span-5 glass-panel p-5 sm:p-6 rounded-2xl flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-base sm:text-lg font-bold text-white flex items-center gap-2">
                  <Zap className="w-4 h-4 text-amber-400" />
                  Cinsiyet Dağılımı
                </h3>
                <span className="text-xs font-mono text-neutral-400">Oranlar</span>
              </div>

              <div className="space-y-3">
                {currentData.gender.map((g) => (
                  <div key={g.label} className="p-3.5 rounded-xl bg-neutral-900/60 border border-neutral-800">
                    <div className="flex items-center justify-between mb-1.5">
                      <span className="text-xs sm:text-sm font-semibold text-neutral-200">{g.label}</span>
                      <span className="text-lg font-black font-mono text-amber-400">%{g.percentage}</span>
                    </div>
                    <div className="w-full h-2 bg-neutral-950 rounded-full overflow-hidden">
                      <div
                        className={`h-full rounded-full ${
                          g.label === "Erkek"
                            ? "bg-amber-400"
                            : g.label === "Kadın"
                            ? "bg-purple-400"
                            : "bg-neutral-500"
                        }`}
                        style={{ width: `${g.percentage}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-4 pt-3 border-t border-white/[0.06] text-xs text-neutral-400">
              Erkek bakım, teknoloji, verimlilik ve finans markaları için yüksek hedefleme isabeti.
            </div>
          </div>

          {/* Trafik Kaynakları */}
          {activeTab === "viewers" && viewers.traffic && (
            <div className="lg:col-span-6 glass-panel p-5 sm:p-6 rounded-2xl">
              <h3 className="text-base sm:text-lg font-bold text-white flex items-center gap-2 mb-2">
                <Compass className="w-4 h-4 text-amber-400" />
                Trafik & Keşif Kaynakları
              </h3>
              <p className="text-xs text-neutral-400 mb-4">
                İçeriklerin %80'den fazlası TikTok algoritması tarafından doğrudan 'Sizin İçin' akışına önerilir.
              </p>

              <div className="space-y-2">
                {viewers.traffic.map((t) => (
                  <div key={t.source} className="flex items-center justify-between p-2.5 rounded-lg bg-neutral-900/60 border border-neutral-800">
                    <span className="text-xs font-medium text-neutral-300">{t.source}</span>
                    <span className="text-xs font-mono font-bold text-amber-400">%{t.percentage}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Öne Çıkan Ülkeler */}
          <div className={activeTab === "viewers" ? "lg:col-span-6 glass-panel p-5 sm:p-6 rounded-2xl flex flex-col justify-between" : "lg:col-span-12 glass-panel p-5 sm:p-6 rounded-2xl flex flex-col justify-between"}>
            <div>
              <h3 className="text-base sm:text-lg font-bold text-white flex items-center gap-2 mb-2">
                <Globe className="w-4 h-4 text-amber-400" />
                Öne Çıkan Coğrafi Dağılım
              </h3>
              <p className="text-xs text-neutral-400 mb-4">
                Türkiye başta olmak üzere Türkçe içerik tüketen global diaspora ve bölge ülkeleri.
              </p>

              <div className="flex flex-wrap gap-1.5">
                {currentData.countries.map((country) => (
                  <span
                    key={country}
                    className="px-3 py-1 rounded-full text-xs font-medium bg-neutral-900/90 border border-neutral-800 text-neutral-200 hover:border-amber-400/40 transition-colors"
                  >
                    {country}
                  </span>
                ))}
              </div>
            </div>

            <div className="mt-5 pt-3 border-t border-white/[0.06] text-[11px] text-neutral-500 font-mono">
              Not: Ülke verileri TikTok Studio sıralamasına göre listelenmiştir.
            </div>
          </div>
        </div>

        {/* Veri Doğrulama Dipnotu */}
        <div className="mt-6 flex items-center justify-center gap-2 text-xs text-neutral-400 font-mono">
          <Info className="w-3.5 h-3.5 text-amber-400/80 flex-shrink-0" />
          <span>Veriler, {sourceDate} tarihinde paylaşılan TikTok Studio ekranından alınmıştır.</span>
        </div>
      </div>
    </section>
  );
};
