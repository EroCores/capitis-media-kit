"use client";

import React, { useState } from "react";
import dynamic from "next/dynamic";
import { siteConfig } from "@/config/site";
import { audienceMetrics } from "@/config/metrics";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { ArrowDown, Download, TrendingUp, Users, Eye } from "lucide-react";

const ChessKnightScene = dynamic(
  () => import("@/components/three/ChessKnightScene").then((mod) => mod.ChessKnightScene),
  {
    ssr: false,
    loading: () => (
      <div className="w-full h-full min-h-[320px] flex items-center justify-center">
        <div className="w-28 h-28 rounded-full border border-amber-400/20 bg-neutral-900/30 animate-pulse" />
      </div>
    ),
  }
);

export const HeroSection: React.FC = () => {
  const scrollTo = (id: string) => {
    document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-dvh flex items-center pt-24 pb-12 lg:pt-28 lg:pb-20 overflow-hidden">
      {/* Animated Mesh Orbs */}
      <div className="absolute top-[20%] left-[15%] w-[420px] h-[420px] bg-amber-500/[0.07] blur-[100px] rounded-full mesh-orb pointer-events-none" />
      <div className="absolute bottom-[10%] right-[10%] w-[350px] h-[350px] bg-violet-600/[0.05] blur-[120px] rounded-full mesh-orb-delay pointer-events-none" />
      <div className="absolute top-[60%] left-[60%] w-[280px] h-[280px] bg-amber-400/[0.04] blur-[90px] rounded-full mesh-orb pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-6 items-center">
          {/* Sol: İçerik */}
          <div className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left">
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2 mb-5">
              <Badge variant="gold">TikTok: {siteConfig.tiktok.handle}</Badge>
              <Badge variant="neutral">{audienceMetrics.sourceDate} Verileri</Badge>
            </div>

            <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-[3.6rem] font-black tracking-tight text-white uppercase leading-[1.08]">
              {siteConfig.name}
              <br />
              <span className="gold-gradient-text">{siteConfig.tagline}</span>
            </h1>

            <p className="mt-5 text-sm sm:text-base text-neutral-400 max-w-xl leading-relaxed">
              Vizyon, disiplin ve irade üzerine içeriklerle markaların doğru kitleyle
              doğal ve kalıcı bir bağ kurmasına yardımcı olan creator iş birlikleri.
            </p>

            {/* Quick metrics */}
            <div className="mt-5 flex flex-wrap gap-3 items-center justify-center lg:justify-start text-xs text-neutral-400 font-mono">
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/[0.04] border border-white/[0.06]">
                <TrendingUp className="w-3.5 h-3.5 text-amber-400" />
                <strong className="text-white font-sans">2,4M+</strong> Görüntülenme
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/[0.04] border border-white/[0.06]">
                <Users className="w-3.5 h-3.5 text-amber-400" />
                <strong className="text-white font-sans">1,8M</strong> İzleyici
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/[0.04] border border-white/[0.06]">
                <Eye className="w-3.5 h-3.5 text-amber-400" />
                <strong className="text-white font-sans">%80</strong> For You
              </span>
            </div>

            <div className="mt-7 flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
              <Button
                size="lg"
                variant="primary"
                className="btn-aurora"
                onClick={() => scrollTo("#paketler")}
                rightIcon={<ArrowDown className="w-4 h-4 text-black" />}
              >
                Paketleri İncele
              </Button>
              <a href="/capitis-media-kit.pdf" download className="inline-flex">
                <Button
                  size="lg"
                  variant="outline"
                  leftIcon={<Download className="w-4 h-4 text-amber-400" />}
                >
                  Medya Kitini İndir (PDF)
                </Button>
              </a>
            </div>
          </div>

          {/* Sağ: 3D */}
          <div className="lg:col-span-5 flex items-center justify-center">
            <div className="relative w-full max-w-[380px] aspect-square rounded-[28px] border border-white/[0.06] bg-gradient-to-b from-white/[0.03] to-transparent shadow-2xl shadow-black/60 overflow-hidden border-gradient">
              <ChessKnightScene />
              <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between px-3 py-2 rounded-2xl bg-black/60 backdrop-blur-md border border-white/[0.06] text-[11px]">
                <div className="flex items-center gap-1.5">
                  <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  <span className="text-neutral-300">3D İnteraktif</span>
                </div>
                <span className="text-neutral-500 font-mono">WebGL</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom glow line */}
      <div className="absolute bottom-0 left-0 right-0 section-glow-line" />
    </section>
  );
};
