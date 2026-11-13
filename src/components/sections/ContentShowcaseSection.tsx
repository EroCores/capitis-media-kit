"use client";

import React from "react";
import { showcaseVideos } from "@/config/videos";
import { siteConfig } from "@/config/site";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Button } from "@/components/ui/Button";
import { ArrowUpRight, Play, Sparkles } from "lucide-react";

const PILLARS = ["Disiplin", "Motivasyon", "Mindset", "Başarı", "Vizyon", "Kişisel Gelişim"];

export const ContentShowcaseSection: React.FC = () => {
  return (
    <section id="icerikler" className="py-20 lg:py-28 relative scroll-mt-20 border-t border-neutral-900 bg-neutral-950/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="İÇERİK DÜNYAMIZ"
          title="Her Videoda Bir Zihniyet"
          subtitle="İçeriklerimiz izleyiciye sadece anlık motivasyon değil; uygulanabilir disiplin, zihinsel berraklık ve güçlü bir karakter duruşu kazandırır."
        />

        {/* Zihniyet Temaları Pill'leri */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {PILLARS.map((p) => (
            <span
              key={p}
              className="px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider bg-neutral-900 border border-neutral-800 text-neutral-300"
            >
              {p}
            </span>
          ))}
        </div>

        {/* Dikey 9:16 Video Kartları Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {showcaseVideos.map((video) => (
            <div
              key={video.id}
              className="glass-panel glass-panel-hover rounded-3xl p-5 flex flex-col justify-between relative overflow-hidden group aspect-[9/15]"
            >
              {/* Arka Plan Gradyan */}
              <div
                className={`absolute inset-0 bg-gradient-to-b ${video.thumbnailPlaceholderColor} opacity-90 transition-opacity duration-300 group-hover:opacity-100`}
              />

              {/* Üst Kategori Etiketi */}
              <div className="relative z-10 flex items-center justify-between">
                <span className="text-[11px] font-mono uppercase tracking-wider px-2.5 py-1 rounded-full bg-black/60 backdrop-blur-md border border-neutral-700/60 text-amber-300">
                  {video.category}
                </span>
                <span className="w-8 h-8 rounded-full bg-black/50 backdrop-blur-sm border border-neutral-700/60 flex items-center justify-center text-white/70 group-hover:text-amber-400 group-hover:scale-110 transition-all">
                  <Play className="w-3.5 h-3.5 fill-current ml-0.5" />
                </span>
              </div>

              {/* Alt Bilgiler: Hook ve Başlık */}
              <div className="relative z-10 pt-12">
                <p className="text-xs italic text-amber-300/90 font-serif leading-snug mb-2">
                  &ldquo;{video.hook}&rdquo;
                </p>
                <h3 className="text-base font-bold text-white leading-tight mb-2">
                  {video.title}
                </h3>
                <p className="text-xs text-neutral-400 line-clamp-2 leading-relaxed">
                  {video.summary}
                </p>

                <div className="mt-4 pt-3 border-t border-white/10 flex items-center justify-between text-[11px] text-neutral-400 group-hover:text-amber-300 transition-colors">
                  <span>TikTok'ta İncele</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </div>
              </div>

              {/* Tıklanabilir Link Katmanı */}
              <a
                href={siteConfig.tiktok.url}
                target="_blank"
                rel="noopener noreferrer"
                className="absolute inset-0 z-20 focus:outline-none focus:ring-2 focus:ring-amber-400 rounded-3xl"
                aria-label={`${video.title} - TikTok'ta izle`}
              />
            </div>
          ))}
        </div>

        {/* TikTok Kanalına Yönlendirme Kutusu */}
        <div className="mt-12 text-center">
          <a
            href={siteConfig.tiktok.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block"
          >
            <Button
              size="lg"
              variant="secondary"
              leftIcon={<Sparkles className="w-4 h-4 text-amber-400" />}
              rightIcon={<ArrowUpRight className="w-4 h-4 text-amber-400" />}
            >
              TikTok'ta Capitis İçeriklerini Gör ({siteConfig.tiktok.handle})
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
};
