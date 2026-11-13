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
    <section id="kitle" className="py-20 lg:py-28 relative scroll-mt-20 border-t border-neutral-900 bg-neutral-950/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="KİTLE PROFİLİ"
          title="Markanız Kimin Zihninde Konumlanıyor?"
          subtitle="Capitis izleyicileri ve takipçileri; kariyerine, kişisel disiplinine ve üretkenliğine yatırım yapan 18–34 yaş ağırlıklı karar vericilerden oluşur."
        />

        {/* Tab Seçici */}
        <div className="flex justify-center mb-10">
          <div className="inline-flex p-1.5 rounded-2xl bg-neutral-900 border border-neutral-800 shadow-inner">
            <button
              type="button"
              onClick={() => setActiveTab("viewers")}
              className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer ${
                activeTab === "viewers"
                  ? "bg-amber-400 text-black shadow-md shadow-amber-500/20"
                  : "text-neutral-400 hover:text-white"
              }`}
            >
              İzleyici Analitiği (1.8M Erişilen Kitle)
            </button>
            <button
              type="button"
              onClick={() => setActiveTab("followers")}
              className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer ${
                activeTab === "followers"
                  ? "bg-amber-400 text-black shadow-md shadow-amber-500/20"
                  : "text-neutral-400 hover:text-white"
              }`}
            >
              Takipçi Analitiği (5.6K+ Sadık Topluluk)
            </button>
          </div>
        </div>

        {/* Grid: Yaş, Cinsiyet, Trafik ve Ülkeler */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Yaş Dağılımı (Büyük Panel: 7 Kolon) */}
          <div className="lg:col-span-7 glass-panel p-6 sm:p-8 rounded-3xl flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h3 className="text-lg font-bold text-white flex items-center gap-2">
                    <Users className="w-5 h-5 text-amber-400" />
                    Yaş Demografisi
                  </h3>
                  <p className="text-xs text-neutral-400 mt-1">
                    En aktif tüketim gücüne sahip 18–34 yaş çekirdek kitlesi (%80+)
                  </p>
                </div>
                <span className="text-xs font-mono text-amber-400 bg-amber-400/10 px-2.5 py-1 rounded-full border border-amber-400/20">
                  Genç Yetişkin Odaklı
                </span>
              </div>

              {/* Progress Barlar */}
              <div className="space-y-4">
                {currentData.age.map((item) => (
                  <div key={item.label} className="group">
                    <div className="flex justify-between text-xs font-medium mb-1.5">
                      <span className={item.highlight ? "text-amber-400 font-bold" : "text-neutral-300"}>
                        {item.label} Yaş {item.highlight && "★ (Çekirdek Kitle)"}
                      </span>
                      <span className="text-white font-mono font-bold">%{item.percentage}</span>
                    </div>
                    <div className="w-full h-3 bg-neutral-900 rounded-full overflow-hidden border border-neutral-800 p-[1px]">
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

            <div className="mt-8 pt-4 border-t border-neutral-800 flex items-center justify-between text-xs text-neutral-400">
              <span>Hedef Kitle: Bireysel gelişim, girişimcilik, finans ve kariyer bilincine sahip gençler</span>
            </div>
          </div>

          {/* Cinsiyet Dağılımı (5 Kolon) */}
          <div className="lg:col-span-5 glass-panel p-6 sm:p-8 rounded-3xl flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-lg font-bold text-white flex items-center gap-2">
                  <Zap className="w-5 h-5 text-amber-400" />
                  Cinsiyet Dağılımı
                </h3>
                <span className="text-xs font-mono text-neutral-400">Oranlar</span>
              </div>

              <div className="space-y-6">
                {currentData.gender.map((g) => (
                  <div key={g.label} className="p-4 rounded-2xl bg-neutral-900/60 border border-neutral-800">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-semibold text-neutral-200">{g.label}</span>
                      <span className="text-xl font-black font-mono text-amber-400">%{g.percentage}</span>
                    </div>
                    <div className="w-full h-2.5 bg-neutral-950 rounded-full overflow-hidden">
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

            <div className="mt-6 pt-4 border-t border-neutral-800 text-xs text-neutral-400">
              Özellikle erkek bakım, teknoloji, verimlilik ve finans markaları için yüksek hedefleme isabeti.
            </div>
          </div>

          {/* Trafik Kaynakları (Yalnızca İzleyicide Mevcut) */}
          {activeTab === "viewers" && viewers.traffic && (
            <div className="lg:col-span-6 glass-panel p-6 sm:p-8 rounded-3xl">
              <h3 className="text-lg font-bold text-white flex items-center gap-2 mb-4">
                <Compass className="w-5 h-5 text-amber-400" />
                Trafik & Keşif Kaynakları
              </h3>
              <p className="text-xs text-neutral-400 mb-6">
                İçeriklerin %80'den fazlası TikTok algoritması tarafından doğrudan 'Sizin İçin' akışına önerilir.
              </p>

              <div className="space-y-3.5">
                {viewers.traffic.map((t) => (
                  <div key={t.source} className="flex items-center justify-between p-3 rounded-xl bg-neutral-900/60 border border-neutral-800">
                    <span className="text-xs font-medium text-neutral-300">{t.source}</span>
                    <span className="text-sm font-mono font-bold text-amber-400">%{t.percentage}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Öne Çıkan Ülkeler (Chip / Tag Listesi) */}
          <div className={activeTab === "viewers" ? "lg:col-span-6 glass-panel p-6 sm:p-8 rounded-3xl flex flex-col justify-between" : "lg:col-span-12 glass-panel p-6 sm:p-8 rounded-3xl flex flex-col justify-between"}>
            <div>
              <h3 className="text-lg font-bold text-white flex items-center gap-2 mb-2">
                <Globe className="w-5 h-5 text-amber-400" />
                Öne Çıkan Coğrafi Dağılım
              </h3>
              <p className="text-xs text-neutral-400 mb-6">
                Türkiye başta olmak üzere Türkçe içerik tüketen global diaspora ve bölge ülkeleri.
              </p>

              <div className="flex flex-wrap gap-2">
                {currentData.countries.map((country) => (
                  <span
                    key={country}
                    className="px-3.5 py-1.5 rounded-full text-xs font-medium bg-neutral-900/90 border border-neutral-800 text-neutral-200 hover:border-amber-400/40 transition-colors"
                  >
                    {country}
                  </span>
                ))}
              </div>
            </div>

            <div className="mt-8 pt-4 border-t border-neutral-800 text-xs text-neutral-500 font-mono">
              Not: Ülke verileri TikTok Studio sıralamasına göre listelenmiştir.
            </div>
          </div>
        </div>

        {/* Veri Doğrulama Dipnotu */}
        <div className="mt-8 flex items-center justify-center gap-2 text-xs text-neutral-400 font-mono">
          <Info className="w-4 h-4 text-amber-400/80 flex-shrink-0" />
          <span>Veriler, {sourceDate} tarihinde paylaşılan TikTok Studio ekranından alınmıştır.</span>
        </div>
      </div>
    </section>
  );
};
