"use client";

import React from "react";
import { siteConfig } from "@/config/site";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { BriefForm } from "@/components/forms/BriefForm";
import { Mail, ArrowUpRight, Sparkles } from "lucide-react";

interface ContactSectionProps {
  selectedPackage?: string;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ selectedPackage }) => {
  return (
    <section id="iletisim" className="py-16 sm:py-20 relative scroll-mt-20 border-t border-white/[0.06]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="HADİ BAŞLAYALIM"
          title="Markanızı Birlikte Büyütelim"
          subtitle="Brief formunu doldurarak veya doğrudan kurumsal e-posta adresimiz üzerinden bize ulaşabilirsiniz."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start">
          {/* Sol Kolon: Doğrudan İletişim & Sosyal Kanallar (4 Kolon) */}
          <div className="lg:col-span-4 space-y-4">
            <div className="glass-panel p-5 sm:p-6 rounded-2xl">
              <h3 className="text-base sm:text-lg font-bold text-white mb-1.5">
                Resmi İletişim Kanalı
              </h3>
              <p className="text-xs text-neutral-400 mb-5 leading-relaxed">
                Teklif, sponsorluk ve özel proje talepleriniz için resmi e-posta adresimiz üzerinden iletişime geçebilirsiniz.
              </p>

              <div className="space-y-3">
                {/* E-posta Kartı */}
                <a
                  href={`mailto:${siteConfig.contact.email}`}
                  className="flex items-center justify-between p-4 rounded-xl bg-neutral-900/90 border border-neutral-800 hover:border-amber-400/50 hover:bg-neutral-800/60 transition-all group"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-amber-400/10 flex items-center justify-center text-amber-400">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-[10px] text-neutral-500 font-mono block">RESMİ E-POSTA</span>
                      <span className="text-xs sm:text-sm font-semibold text-white group-hover:text-amber-300">
                        {siteConfig.contact.email}
                      </span>
                    </div>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-neutral-500 group-hover:text-amber-400 transition-colors" />
                </a>

                {/* TikTok Kanalı */}
                <a
                  href={siteConfig.tiktok.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3.5 rounded-xl bg-neutral-900/60 border border-neutral-800 hover:border-white/30 hover:bg-neutral-800/40 transition-all group"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-neutral-800 flex items-center justify-center text-white">
                      <Sparkles className="w-4 h-4 text-amber-400" />
                    </div>
                    <div>
                      <span className="text-[10px] text-neutral-500 font-mono block">TIKTOK PROFİLİ</span>
                      <span className="text-xs font-semibold text-white group-hover:text-amber-300">
                        {siteConfig.tiktok.handle}
                      </span>
                    </div>
                  </div>
                  <ArrowUpRight className="w-3.5 h-3.5 text-neutral-500 group-hover:text-white transition-colors" />
                </a>

                {/* Instagram Kanalı */}
                <a
                  href={siteConfig.instagram.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3.5 rounded-xl bg-neutral-900/60 border border-neutral-800 hover:border-white/30 hover:bg-neutral-800/40 transition-all group"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-neutral-800 flex items-center justify-center text-white">
                      <Sparkles className="w-4 h-4 text-purple-400" />
                    </div>
                    <div>
                      <span className="text-[10px] text-neutral-500 font-mono block">INSTAGRAM PROFİLİ</span>
                      <span className="text-xs font-semibold text-white group-hover:text-purple-300">
                        {siteConfig.instagram.handle}
                      </span>
                    </div>
                  </div>
                  <ArrowUpRight className="w-3.5 h-3.5 text-neutral-500 group-hover:text-white transition-colors" />
                </a>
              </div>
            </div>

            {/* Çalışma Saatleri */}
            <div className="glass-panel p-5 rounded-2xl text-xs space-y-2 text-neutral-400 font-mono">
              <div className="flex justify-between">
                <span>Yanıt Süresi:</span>
                <span className="text-white font-semibold">2–4 Saat İçinde</span>
              </div>
              <div className="flex justify-between">
                <span>Çalışma Günleri:</span>
                <span className="text-white font-semibold">Pazartesi – Cumartesi</span>
              </div>
              <div className="flex justify-between">
                <span>Saat Dilimi:</span>
                <span className="text-white font-semibold">İstanbul (GMT+3)</span>
              </div>
            </div>
          </div>

          {/* Sağ Kolon: Brief Stüdyosu (8 Kolon) */}
          <div className="lg:col-span-8">
            <BriefForm initialPackage={selectedPackage} />
          </div>
        </div>
      </div>
    </section>
  );
};
