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
  ShieldCheck,
} from "lucide-react";

export const BentoStatsSection: React.FC = () => {
  const { overview, sourceNote } = audienceMetrics;

  return (
    <section id="istatistikler" className="py-16 sm:py-20 relative scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="PERFORMANS METRİKLERİ"
          title="Doğrulanmış TikTok Studio Verileri"
          subtitle="Yüksek tamamlama oranları ve organik For You yayılımıyla genç karar vericilere ulaşan içerikler."
        />

        {/* Bento Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
          {/* Bento 1: 2.4M (2 Kolon Geniş) */}
          <div className="sm:col-span-2 glass-panel glass-panel-hover p-6 sm:p-7 rounded-2xl relative overflow-hidden flex flex-col justify-between border-gradient">
            <div className="flex items-center justify-between mb-4">
              <span className="text-[10px] font-mono tracking-wider uppercase text-amber-400 bg-amber-400/10 px-2.5 py-0.5 rounded-full border border-amber-400/20">
                {overview.totalViews365d.timeframe}
              </span>
              <div className="w-9 h-9 rounded-xl bg-neutral-900 border border-neutral-800 flex items-center justify-center text-amber-400">
                <TrendingUp className="w-4 h-4" />
              </div>
            </div>

            <div>
              <div className="flex items-baseline gap-1.5">
                <span className="text-3xl sm:text-5xl font-black text-white tabular-nums tracking-tight font-sans">
                  {overview.totalViews365d.value}
                </span>
                <span className="text-xl sm:text-2xl font-bold text-amber-400">
                  {overview.totalViews365d.suffix}
                </span>
              </div>
              <h3 className="text-base sm:text-lg font-bold text-neutral-200 mt-1.5">
                {overview.totalViews365d.label}
              </h3>
              <p className="text-xs sm:text-sm text-neutral-400 mt-1 leading-relaxed">
                {overview.totalViews365d.description}
              </p>
            </div>

            <div className="mt-5 pt-3 border-t border-white/[0.06] flex items-center justify-between text-xs text-neutral-400 font-mono">
              <span>Organik Yayılım</span>
              <span className="text-emerald-400 font-semibold">%95+ For You Akışı</span>
            </div>
          </div>

          {/* Bento 2: 1.8M Toplam İzleyici */}
          <div className="glass-panel glass-panel-hover p-5 sm:p-6 rounded-2xl flex flex-col justify-between">
            <div className="flex items-center justify-between mb-3">
              <span className="text-[10px] font-mono uppercase text-neutral-400 bg-neutral-900 px-2 py-0.5 rounded-full border border-neutral-800">
                {overview.totalAudience.timeframe}
              </span>
              <div className="w-8 h-8 rounded-lg bg-neutral-900 border border-neutral-800 flex items-center justify-center text-neutral-300">
                <Users className="w-4 h-4" />
              </div>
            </div>

            <div>
              <span className="text-2xl sm:text-4xl font-black text-white tabular-nums tracking-tight font-sans">
                {overview.totalAudience.value}
              </span>
              <h3 className="text-sm sm:text-base font-bold text-neutral-200 mt-1">
                {overview.totalAudience.label}
              </h3>
              <p className="text-xs text-neutral-400 mt-1 line-clamp-2">
                {overview.totalAudience.description}
              </p>
            </div>

            <div className="mt-4 pt-2.5 border-t border-white/[0.06] text-[10px] text-neutral-500 font-mono">
              Tekil kitle erişimi
            </div>
          </div>

          {/* Bento 3: 1.4M Yeni İzleyici */}
          <div className="glass-panel glass-panel-hover p-5 sm:p-6 rounded-2xl flex flex-col justify-between">
            <div className="flex items-center justify-between mb-3">
              <span className="text-[10px] font-mono uppercase text-neutral-400 bg-neutral-900 px-2 py-0.5 rounded-full border border-neutral-800">
                {overview.newAudience.timeframe}
              </span>
              <div className="w-8 h-8 rounded-lg bg-neutral-900 border border-neutral-800 flex items-center justify-center text-amber-400">
                <UserPlus className="w-4 h-4" />
              </div>
            </div>

            <div>
              <span className="text-2xl sm:text-4xl font-black text-white tabular-nums tracking-tight font-sans">
                {overview.newAudience.value}
              </span>
              <h3 className="text-sm sm:text-base font-bold text-neutral-200 mt-1">
                {overview.newAudience.label}
              </h3>
              <p className="text-xs text-neutral-400 mt-1 line-clamp-2">
                {overview.newAudience.description}
              </p>
            </div>

            <div className="mt-4 pt-2.5 border-t border-white/[0.06] text-[10px] text-neutral-500 font-mono">
              Sürekli yeni potansiyel müşteriler
            </div>
          </div>

          {/* Bento 4: 11.2K Paylaşım */}
          <div className="glass-panel glass-panel-hover p-5 sm:p-6 rounded-2xl flex flex-col justify-between">
            <div className="flex items-center justify-between mb-3">
              <span className="text-[10px] font-mono uppercase text-neutral-400 bg-neutral-900 px-2 py-0.5 rounded-full border border-neutral-800">
                {overview.shares365d.timeframe}
              </span>
              <div className="w-8 h-8 rounded-lg bg-neutral-900 border border-neutral-800 flex items-center justify-center text-amber-400">
                <Share2 className="w-4 h-4" />
              </div>
            </div>

            <div>
              <div className="flex items-baseline gap-1">
                <span className="text-2xl sm:text-4xl font-black text-white tabular-nums tracking-tight font-sans">
                  {overview.shares365d.value}
                </span>
                <span className="text-lg font-bold text-amber-400">{overview.shares365d.suffix}</span>
              </div>
              <h3 className="text-sm sm:text-base font-bold text-neutral-200 mt-1">
                {overview.shares365d.label}
              </h3>
              <p className="text-xs text-neutral-400 mt-1 line-clamp-2">
                {overview.shares365d.description}
              </p>
            </div>

            <div className="mt-4 pt-2.5 border-t border-white/[0.06] text-[10px] text-neutral-500 font-mono">
              Yüksek viral katsayısı
            </div>
          </div>

          {/* Bento 5: 8.7K Profil Görüntüleme */}
          <div className="glass-panel glass-panel-hover p-5 sm:p-6 rounded-2xl flex flex-col justify-between">
            <div className="flex items-center justify-between mb-3">
              <span className="text-[10px] font-mono uppercase text-neutral-400 bg-neutral-900 px-2 py-0.5 rounded-full border border-neutral-800">
                {overview.profileViews365d.timeframe}
              </span>
              <div className="w-8 h-8 rounded-lg bg-neutral-900 border border-neutral-800 flex items-center justify-center text-neutral-300">
                <UserCheck className="w-4 h-4" />
              </div>
            </div>

            <div>
              <div className="flex items-baseline gap-1">
                <span className="text-2xl sm:text-4xl font-black text-white tabular-nums tracking-tight font-sans">
                  {overview.profileViews365d.value}
                </span>
                <span className="text-lg font-bold text-amber-400">{overview.profileViews365d.suffix}</span>
              </div>
              <h3 className="text-sm sm:text-base font-bold text-neutral-200 mt-1">
                {overview.profileViews365d.label}
              </h3>
              <p className="text-xs text-neutral-400 mt-1 line-clamp-2">
                {overview.profileViews365d.description}
              </p>
            </div>

            <div className="mt-4 pt-2.5 border-t border-white/[0.06] text-[10px] text-neutral-500 font-mono">
              Biyo linkine yönelim potansiyeli
            </div>
          </div>

          {/* Bento 6: 1K Yorum & 5.6K+ Takipçi (2 Kolon) */}
          <div className="sm:col-span-2 glass-panel glass-panel-hover p-5 sm:p-6 rounded-2xl flex flex-col justify-between">
            <div className="flex items-center justify-between mb-3">
              <span className="text-[10px] font-mono uppercase text-neutral-400 bg-neutral-900 px-2 py-0.5 rounded-full border border-neutral-800">
                Etkileşim & Topluluk
              </span>
              <div className="flex gap-1.5">
                <div className="w-8 h-8 rounded-lg bg-neutral-900 border border-neutral-800 flex items-center justify-center text-amber-400">
                  <MessageSquare className="w-4 h-4" />
                </div>
                <div className="w-8 h-8 rounded-lg bg-neutral-900 border border-neutral-800 flex items-center justify-center text-amber-400">
                  <Sparkles className="w-4 h-4" />
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <span className="text-2xl sm:text-4xl font-black text-white tabular-nums tracking-tight font-sans">
                  {overview.comments365d.value}
                </span>
                <h4 className="text-xs sm:text-sm font-bold text-neutral-200 mt-0.5">
                  {overview.comments365d.label}
                </h4>
                <p className="text-[11px] text-neutral-400 mt-0.5">
                  Zihniyet ve fikir diyalogları.
                </p>
              </div>

              <div>
                <div className="flex items-baseline gap-1">
                  <span className="text-2xl sm:text-4xl font-black text-white tabular-nums tracking-tight font-sans">
                    {overview.followers.value}
                  </span>
                  <span className="text-lg font-bold text-amber-400">{overview.followers.suffix}</span>
                </div>
                <h4 className="text-xs sm:text-sm font-bold text-neutral-200 mt-0.5">
                  {overview.followers.label}
                </h4>
                <p className="text-[11px] text-neutral-400 mt-0.5">
                  Disiplin odaklı organik topluluk.
                </p>
              </div>
            </div>

            <div className="mt-4 pt-2.5 border-t border-white/[0.06] text-[10px] text-neutral-500 font-mono">
              Kitle sadakati ve yüksek yorum kalitesi
            </div>
          </div>
        </div>

        {/* Veri Kaynağı Dipnotu */}
        <div className="mt-6 flex items-center justify-center gap-2 text-xs text-neutral-400 font-mono">
          <Info className="w-3.5 h-3.5 text-amber-400/80 flex-shrink-0" />
          <span>{sourceNote}</span>
        </div>
      </div>
    </section>
  );
};
