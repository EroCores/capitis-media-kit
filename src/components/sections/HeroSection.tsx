"use client";

import React, { useState } from "react";
import dynamic from "next/dynamic";
import { siteConfig } from "@/config/site";
import { audienceMetrics } from "@/config/metrics";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { ArrowDown, FileDown, Sparkles, TrendingUp, Users, Eye } from "lucide-react";

// 3D Sahneyi Dinamik Yükle (LCP'yi geciktirmemek için)
const ChessKnightScene = dynamic(
  () => import("@/components/three/ChessKnightScene").then((mod) => mod.ChessKnightScene),
  {
    ssr: false,
    loading: () => (
      <div className="w-full h-full min-h-[350px] flex items-center justify-center">
        <div className="w-36 h-36 rounded-full border border-amber-400/20 bg-neutral-900/40 animate-pulse flex items-center justify-center">
          <span className="text-4xl">♟</span>
        </div>
      </div>
    ),
  }
);

export const HeroSection: React.FC = () => {
  const [isExporting, setIsExporting] = useState(false);

  const handlePrint = () => {
    setIsExporting(true);
    setTimeout(() => {
      window.print();
      setIsExporting(false);
    }, 200);
  };

  const scrollToSection = (id: string) => {
    const el = document.querySelector(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative min-h-[92vh] flex items-center justify-center pt-28 pb-16 lg:pt-32 lg:pb-24 overflow-hidden border-b border-neutral-900">
      {/* Background Radial Glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-amber-500/10 blur-[140px] pointer-events-none rounded-full" />
      <div className="absolute top-1/3 right-10 w-[400px] h-[400px] bg-purple-600/5 blur-[120px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Sol Kolon: Tipografi ve Mesaj */}
          <div className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left">
            {/* Üst Rozetler */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2.5 mb-6">
              <Badge variant="gold">
                <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                <span>TikTok: {siteConfig.tiktok.handle}</span>
              </Badge>
              <Badge variant="neutral">
                <span>{audienceMetrics.sourceDate} Güncel Stüdyo Verileri</span>
              </Badge>
              <Badge variant="outline">
                <span>Vizyon · Disiplin · İrade</span>
              </Badge>
            </div>

            {/* Devasa Ana Başlık */}
            <h1 className="text-4xl sm:text-6xl md:text-7xl font-black tracking-tight text-white uppercase font-sans leading-[1.05]">
              {siteConfig.name} <br />
              <span className="gold-gradient-text">
                {siteConfig.tagline}
              </span>
            </h1>

            {/* Alt Açıklama */}
            <p className="mt-6 text-base sm:text-lg text-neutral-300 max-w-2xl leading-relaxed">
              Vizyon, disiplin ve irade üzerine içeriklerle markaların doğru kitleyle doğal ve kalıcı bir bağ kurmasına yardımcı olan creator iş birlikleri.
            </p>

            {/* Hızlı Öne Çıkan Metrik Pill'leri */}
            <div className="mt-6 flex flex-wrap gap-4 items-center justify-center lg:justify-start text-xs sm:text-sm text-neutral-400 font-mono">
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-neutral-900/80 border border-neutral-800">
                <TrendingUp className="w-4 h-4 text-amber-400" />
                <strong className="text-white font-sans">2,4M+</strong> Video Görüntüleme
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-neutral-900/80 border border-neutral-800">
                <Users className="w-4 h-4 text-amber-400" />
                <strong className="text-white font-sans">1,8M</strong> Toplam İzleyici
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-neutral-900/80 border border-neutral-800">
                <Eye className="w-4 h-4 text-amber-400" />
                <strong className="text-white font-sans">%80,1</strong> For You Akışı
              </span>
            </div>

            {/* Aksiyon Butonları */}
            <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row gap-3.5 w-full sm:w-auto">
              <Button
                size="lg"
                variant="primary"
                onClick={() => scrollToSection("#paketler")}
                rightIcon={<ArrowDown className="w-4 h-4 text-black" />}
              >
                İş Birliği Paketlerini İncele
              </Button>

              <Button
                size="lg"
                variant="outline"
                onClick={handlePrint}
                isLoading={isExporting}
                leftIcon={<FileDown className="w-4 h-4 text-amber-400" />}
              >
                Medya Kitini PDF Olarak Kaydet
              </Button>
            </div>
          </div>

          {/* Sağ Kolon: 3D Geometrik Satranç Sahnesi */}
          <div className="lg:col-span-5 relative flex items-center justify-center">
            <div className="relative w-full max-w-[420px] aspect-square rounded-3xl bg-gradient-to-b from-neutral-900/40 via-neutral-900/10 to-transparent p-1 border border-neutral-800/60 shadow-2xl overflow-hidden group">
              {/* Çerçeve Işığı */}
              <div className="absolute inset-0 bg-gradient-to-tr from-amber-500/10 via-transparent to-purple-500/10 opacity-70" />
              
              <ChessKnightScene />

              {/* Alt Bilgi Rozeti */}
              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between px-4 py-2.5 rounded-2xl bg-black/70 backdrop-blur-md border border-neutral-800/80 text-xs">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span className="text-neutral-300 font-medium">Stratejik Anlatım & Disiplin</span>
                </div>
                <span className="text-neutral-500 font-mono text-[10px]">3D INTERACTIVE</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
