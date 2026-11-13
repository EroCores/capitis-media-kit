"use client";

import React from "react";
import { audienceMetrics } from "@/config/metrics";
import { SectionHeader } from "@/components/ui/SectionHeader";
import {
  TrendingUp,
  Users,
  UserPlus,
  Share2,
  UserCheck,
  MessageSquare,
  Sparkles,
  Info,
} from "lucide-react";

export const BentoStatsSection: React.FC = () => {
  const { overview, sourceNote } = audienceMetrics;

  return (
    <section id="istatistikler" className="py-20 lg:py-28 relative scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="PERFORMANS & RAKAMLAR"
          title="Doğrulanmış TikTok Studio Metrikleri"
          subtitle="Capitis içerikleri yüksek tamamlanma oranları ve organik For You yayılımıyla güçlü bir kitleye ulaşır."
        />

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
          {/* Bento Card 1: 2.4M Video Görüntüleme (Büyük Kart) */}
          <div className="md:col-span-2 lg:col-span-2 glass-panel glass-panel-hover p-6 sm:p-8 rounded-3xl relative overflow-hidden flex flex-col justify-between">
            <div className="flex items-center justify-between mb-4">
              <span className="text-xs font-mono tracking-wider uppercase text-amber-400 bg-amber-400/10 px-3 py-1 rounded-full border border-amber-400/20">
                {overview.totalViews365d.timeframe}
              </span>
              <div className="w-10 h-10 rounded-2xl bg-neutral-900 border border-neutral-800 flex items-center justify-center text-amber-400">
                <TrendingUp className="w-5 h-5" />
              </div>
            </div>

            <div>
              <div className="flex items-baseline gap-2">
                <span className="text-4xl sm:text-6xl font-black text-white tabular-nums tracking-tight font-sans">
                  {overview.totalViews365d.value}
                </span>
                <span className="text-2xl sm:text-3xl font-bold text-amber-400">
                  {overview.totalViews365d.suffix}
                </span>
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-neutral-200 mt-2">
                {overview.totalViews365d.label}
              </h3>
              <p className="text-sm text-neutral-400 mt-2 leading-relaxed">
                {overview.totalViews365d.description}
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-neutral-800/80 flex items-center justify-between text-xs text-neutral-500 font-mono">
              <span>Organik For You Ağırlıklı</span>
              <span className="text-emerald-400 font-semibold">%95+ Organik Akış</span>
            </div>
          </div>

          {/* Bento Card 2: 1.8M Toplam İzleyici */}
          <div className="glass-panel glass-panel-hover p-6 sm:p-8 rounded-3xl relative flex flex-col justify-between">
            <div className="flex items-center justify-between mb-4">
              <span className="text-xs font-mono uppercase text-neutral-400 bg-neutral-900 px-2.5 py-1 rounded-full border border-neutral-800">
                {overview.totalAudience.timeframe}
              </span>
              <div className="w-10 h-10 rounded-2xl bg-neutral-900 border border-neutral-800 flex items-center justify-center text-neutral-300">
                <Users className="w-5 h-5" />
              </div>
            </div>

            <div>
              <span className="text-3xl sm:text-5xl font-black text-white tabular-nums tracking-tight font-sans">
                {overview.totalAudience.value}
              </span>
              <h3 className="text-base sm:text-lg font-bold text-neutral-200 mt-2">
                {overview.totalAudience.label}
              </h3>
              <p className="text-xs sm:text-sm text-neutral-400 mt-2">
                {overview.totalAudience.description}
              </p>
            </div>

            <div className="mt-4 pt-3 border-t border-neutral-800/80 text-[11px] text-neutral-500 font-mono">
              Tekil kitle erişimi
            </div>
          </div>

          {/* Bento Card 3: 1.4M Yeni İzleyici */}
          <div className="glass-panel glass-panel-hover p-6 sm:p-8 rounded-3xl relative flex flex-col justify-between">
            <div className="flex items-center justify-between mb-4">
              <span className="text-xs font-mono uppercase text-neutral-400 bg-neutral-900 px-2.5 py-1 rounded-full border border-neutral-800">
                {overview.newAudience.timeframe}
              </span>
              <div className="w-10 h-10 rounded-2xl bg-neutral-900 border border-neutral-800 flex items-center justify-center text-amber-400">
                <UserPlus className="w-5 h-5" />
              </div>
            </div>

            <div>
              <span className="text-3xl sm:text-5xl font-black text-white tabular-nums tracking-tight font-sans">
                {overview.newAudience.value}
              </span>
              <h3 className="text-base sm:text-lg font-bold text-neutral-200 mt-2">
                {overview.newAudience.label}
              </h3>
              <p className="text-xs sm:text-sm text-neutral-400 mt-2">
                {overview.newAudience.description}
              </p>
            </div>

            <div className="mt-4 pt-3 border-t border-neutral-800/80 text-[11px] text-neutral-500 font-mono">
              Sürekli yeni potansiyel alıcılar
            </div>
          </div>

          {/* Bento Card 4: 11.2K Paylaşım */}
          <div className="glass-panel glass-panel-hover p-6 sm:p-8 rounded-3xl relative flex flex-col justify-between">
            <div className="flex items-center justify-between mb-4">
              <span className="text-xs font-mono uppercase text-neutral-400 bg-neutral-900 px-2.5 py-1 rounded-full border border-neutral-800">
                {overview.shares365d.timeframe}
              </span>
              <div className="w-10 h-10 rounded-2xl bg-neutral-900 border border-neutral-800 flex items-center justify-center text-amber-400">
                <Share2 className="w-5 h-5" />
              </div>
            </div>

            <div>
              <div className="flex items-baseline gap-1">
                <span className="text-3xl sm:text-5xl font-black text-white tabular-nums tracking-tight font-sans">
                  {overview.shares365d.value}
                </span>
                <span className="text-xl font-bold text-amber-400">{overview.shares365d.suffix}</span>
              </div>
              <h3 className="text-base sm:text-lg font-bold text-neutral-200 mt-2">
                {overview.shares365d.label}
              </h3>
              <p className="text-xs sm:text-sm text-neutral-400 mt-2">
                {overview.shares365d.description}
              </p>
            </div>

            <div className="mt-4 pt-3 border-t border-neutral-800/80 text-[11px] text-neutral-500 font-mono">
              Yüksek viral katsayısı
            </div>
          </div>

          {/* Bento Card 5: 8.7K Profil Görüntüleme */}
          <div className="glass-panel glass-panel-hover p-6 sm:p-8 rounded-3xl relative flex flex-col justify-between">
            <div className="flex items-center justify-between mb-4">
              <span className="text-xs font-mono uppercase text-neutral-400 bg-neutral-900 px-2.5 py-1 rounded-full border border-neutral-800">
                {overview.profileViews365d.timeframe}
              </span>
              <div className="w-10 h-10 rounded-2xl bg-neutral-900 border border-neutral-800 flex items-center justify-center text-neutral-300">
                <UserCheck className="w-5 h-5" />
              </div>
            </div>

            <div>
              <div className="flex items-baseline gap-1">
                <span className="text-3xl sm:text-5xl font-black text-white tabular-nums tracking-tight font-sans">
                  {overview.profileViews365d.value}
                </span>
                <span className="text-xl font-bold text-amber-400">{overview.profileViews365d.suffix}</span>
              </div>
              <h3 className="text-base sm:text-lg font-bold text-neutral-200 mt-2">
                {overview.profileViews365d.label}
              </h3>
              <p className="text-xs sm:text-sm text-neutral-400 mt-2">
                {overview.profileViews365d.description}
              </p>
            </div>

            <div className="mt-4 pt-3 border-t border-neutral-800/80 text-[11px] text-neutral-500 font-mono">
              Biyo linkine yönelim potansiyeli
            </div>
          </div>

          {/* Bento Card 6: 1K Yorum & 5.6K+ Takipçi (Geniş Kart) */}
          <div className="md:col-span-2 lg:col-span-2 glass-panel glass-panel-hover p-6 sm:p-8 rounded-3xl relative flex flex-col justify-between">
            <div className="flex items-center justify-between mb-4">
              <span className="text-xs font-mono uppercase text-neutral-400 bg-neutral-900 px-2.5 py-1 rounded-full border border-neutral-800">
                Etkileşim & Topluluk
              </span>
              <div className="flex gap-2">
                <div className="w-10 h-10 rounded-2xl bg-neutral-900 border border-neutral-800 flex items-center justify-center text-amber-400">
                  <MessageSquare className="w-5 h-5" />
                </div>
                <div className="w-10 h-10 rounded-2xl bg-neutral-900 border border-neutral-800 flex items-center justify-center text-amber-400">
                  <Sparkles className="w-5 h-5" />
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <span className="text-3xl sm:text-5xl font-black text-white tabular-nums tracking-tight font-sans">
                  {overview.comments365d.value}
                </span>
                <h4 className="text-sm sm:text-base font-bold text-neutral-200 mt-1">
                  {overview.comments365d.label}
                </h4>
                <p className="text-xs text-neutral-400 mt-1">
                  Kişisel gelişim ve vizyon tartışmaları.
                </p>
              </div>

              <div>
                <div className="flex items-baseline gap-1">
                  <span className="text-3xl sm:text-5xl font-black text-white tabular-nums tracking-tight font-sans">
                    {overview.followers.value}
                  </span>
                  <span className="text-xl font-bold text-amber-400">{overview.followers.suffix}</span>
                </div>
                <h4 className="text-sm sm:text-base font-bold text-neutral-200 mt-1">
                  {overview.followers.label}
                </h4>
                <p className="text-xs text-neutral-400 mt-1">
                  Disiplin ve başarı odaklı organik topluluk.
                </p>
              </div>
            </div>

            <div className="mt-4 pt-3 border-t border-neutral-800/80 text-[11px] text-neutral-500 font-mono">
              Kitle sadakati ve yüksek yorum kalitesi
            </div>
          </div>
        </div>

        {/* Veri Kaynağı Dipnotu */}
        <div className="mt-8 flex items-center justify-center gap-2 text-xs text-neutral-400 font-mono">
          <Info className="w-4 h-4 text-amber-400/80 flex-shrink-0" />
          <span>{sourceNote}</span>
        </div>
      </div>
    </section>
  );
};
