"use client";

import React, { useState } from "react";
import { showcaseVideos } from "@/config/videos";
import { siteConfig } from "@/config/site";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Button } from "@/components/ui/Button";
import {
  ArrowUpRight,
  Play,
  Sparkles,
  Heart,
  MessageCircle,
  Share2,
  Bookmark,
  Music2,
  Disc,
} from "lucide-react";

const PILLARS = ["Disiplin", "Motivasyon", "Mindset", "Başarı", "Vizyon", "Kişisel Gelişim"];

// Her video için gerçekçi TikTok metrikleri ve simülasyonu
const VIDEO_OVERLAYS = [
  { likes: "32.4K", comments: "1.8K", shares: "6.2K", views: "340K" },
  { likes: "48.1K", comments: "2.4K", shares: "9.1K", views: "510K" },
  { likes: "29.7K", comments: "1.1K", shares: "4.8K", views: "290K" },
  { likes: "54.2K", comments: "3.2K", shares: "11.2K", views: "620K" },
];

export const ContentShowcaseSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>("Tümü");

  const filteredVideos =
    activeCategory === "Tümü"
      ? showcaseVideos
      : showcaseVideos.filter((v) => v.category === activeCategory);

  return (
    <section id="icerikler" className="py-20 lg:py-28 relative scroll-mt-20 border-t border-neutral-900 bg-gradient-to-b from-neutral-950/70 via-black to-neutral-950/70">
      {/* Arka plan ortam ışıması */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-amber-500/5 blur-[160px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeader
          eyebrow="İÇERİK DÜNYAMIZ & VİTRİN"
          title="Her Videoda Bir Zihniyet"
          subtitle="İçeriklerimiz izleyiciye sadece anlık motivasyon değil; uygulanabilir disiplin, zihinsel berraklık ve güçlü bir karakter duruşu kazandırır."
        />

        {/* Zihniyet Temaları Filtresi */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {["Tümü", ...PILLARS].map((p) => {
            const isSelected = activeCategory === p;
            return (
              <button
                type="button"
                key={p}
                onClick={() => setActiveCategory(p)}
                className={`px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider transition-all duration-200 cursor-pointer ${
                  isSelected
                    ? "bg-amber-400 text-black shadow-md shadow-amber-400/20 font-bold scale-105"
                    : "bg-neutral-900/80 border border-neutral-800 text-neutral-400 hover:text-white hover:border-neutral-700"
                }`}
              >
                {p}
              </button>
            );
          })}
        </div>

        {/* Dikey Akıllı Telefon / Titanyum Çerçeveli Video Mockup Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {filteredVideos.map((video, idx) => {
            const overlay = VIDEO_OVERLAYS[idx % VIDEO_OVERLAYS.length];

            return (
              <div
                key={video.id}
                className="relative rounded-[32px] p-2 bg-gradient-to-b from-neutral-700 via-neutral-900 to-black shadow-2xl shadow-black/80 border border-neutral-700/60 group hover:border-amber-400/60 transition-all duration-300 hover:-translate-y-2"
              >
                {/* Telefon İç Ekranı (9:16 Aspect) */}
                <div className="relative rounded-[26px] overflow-hidden bg-neutral-950 aspect-[9/17] flex flex-col justify-between p-4 sm:p-5 border border-black/40">
                  {/* Dinamik Arka Plan Gradyanı & Atmosfer */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-b ${video.thumbnailPlaceholderColor} opacity-90 group-hover:scale-105 transition-transform duration-500`}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-black/50" />

                  {/* Telefon Üst Dinamik Bar (Notch + Category) */}
                  <div className="relative z-10 flex items-center justify-between">
                    <span className="text-[10px] font-mono uppercase tracking-wider px-2.5 py-1 rounded-full bg-black/60 backdrop-blur-md border border-neutral-700/80 text-amber-300 font-bold">
                      {video.category}
                    </span>

                    {/* Canlı Görüntülenme Rozeti */}
                    <span className="text-[10px] font-mono text-white/90 bg-black/50 px-2 py-0.5 rounded-full border border-white/10">
                      ▶ {overlay.views}
                    </span>
                  </div>

                  {/* Merkez: Büyük Oynat Butonu */}
                  <div className="relative z-10 my-auto flex items-center justify-center">
                    <div className="w-14 h-14 rounded-full bg-black/50 backdrop-blur-md border border-amber-400/40 flex items-center justify-center text-amber-300 group-hover:scale-115 group-hover:bg-amber-400 group-hover:text-black transition-all duration-300 shadow-xl shadow-black/60">
                      <Play className="w-6 h-6 fill-current ml-1" />
                    </div>
                  </div>

                  {/* Sağ Yan TikTok Aksiyon Çubuğu */}
                  <div className="absolute right-3.5 bottom-24 z-10 flex flex-col items-center gap-3.5 text-white/90">
                    <div className="flex flex-col items-center gap-0.5">
                      <div className="w-9 h-9 rounded-full bg-black/40 backdrop-blur-sm flex items-center justify-center text-rose-500">
                        <Heart className="w-4 h-4 fill-current" />
                      </div>
                      <span className="text-[10px] font-mono font-bold">{overlay.likes}</span>
                    </div>

                    <div className="flex flex-col items-center gap-0.5">
                      <div className="w-9 h-9 rounded-full bg-black/40 backdrop-blur-sm flex items-center justify-center text-white">
                        <MessageCircle className="w-4 h-4 fill-current" />
                      </div>
                      <span className="text-[10px] font-mono font-bold">{overlay.comments}</span>
                    </div>

                    <div className="flex flex-col items-center gap-0.5">
                      <div className="w-9 h-9 rounded-full bg-black/40 backdrop-blur-sm flex items-center justify-center text-amber-400">
                        <Bookmark className="w-4 h-4 fill-current" />
                      </div>
                      <span className="text-[10px] font-mono font-bold">Kaydet</span>
                    </div>

                    <div className="flex flex-col items-center gap-0.5">
                      <div className="w-9 h-9 rounded-full bg-black/40 backdrop-blur-sm flex items-center justify-center text-white">
                        <Share2 className="w-4 h-4" />
                      </div>
                      <span className="text-[10px] font-mono font-bold">{overlay.shares}</span>
                    </div>
                  </div>

                  {/* Alt Bilgi: Hesap Adı, Başlık, Kanca ve Müzik Diski */}
                  <div className="relative z-10 pr-12">
                    <span className="text-xs font-bold text-amber-400 block mb-1">
                      {siteConfig.tiktok.handle}
                    </span>

                    <h4 className="text-sm font-black text-white leading-snug line-clamp-2 mb-1.5">
                      {video.title}
                    </h4>

                    <p className="text-[11px] italic text-neutral-300 font-serif leading-tight line-clamp-2 mb-3">
                      &ldquo;{video.hook}&rdquo;
                    </p>

                    {/* Dönen Müzik / Ses İmzası */}
                    <div className="flex items-center gap-2 text-[10px] text-neutral-400 font-mono">
                      <Music2 className="w-3 h-3 text-amber-400" />
                      <span className="truncate">Orijinal Ses · Capitis Mindset</span>
                    </div>
                  </div>

                  {/* Tıklanabilir Link Katmanı */}
                  <a
                    href={video.tiktokUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="absolute inset-0 z-20 focus:outline-none focus:ring-2 focus:ring-amber-400 rounded-[26px]"
                    aria-label={`${video.title} - TikTok'ta izle`}
                  />
                </div>
              </div>
            );
          })}
        </div>

        {/* Alt CTA Butonu */}
        <div className="mt-14 text-center">
          <a
            href={siteConfig.tiktok.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block"
          >
            <Button
              size="lg"
              variant="secondary"
              className="py-4 px-8 text-sm sm:text-base border-neutral-700 hover:border-amber-400"
              leftIcon={<Sparkles className="w-4 h-4 text-amber-400" />}
              rightIcon={<ArrowUpRight className="w-4 h-4 text-amber-400" />}
            >
              TikTok'ta Tüm İçerikleri ve Videoları İncele ({siteConfig.tiktok.handle})
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
};
