"use client";

import React from "react";
import { siteConfig } from "@/config/site";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { BriefForm } from "@/components/forms/BriefForm";
import { Mail, MessageCircle, ArrowUpRight } from "lucide-react";

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
          subtitle="Brief formunu doldurarak veya doğrudan WhatsApp üzerinden bize ulaşın. Aynı gün içinde dönüş yapıyoruz."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start">
          {/* Sol Kolon: Hızlı İletişim (4 Kolon) */}
          <div className="lg:col-span-4 space-y-4">
            <div className="glass-panel p-5 sm:p-6 rounded-2xl">
              <h3 className="text-base sm:text-lg font-bold text-white mb-1.5">
                Hızlı İletişim Kanalları
              </h3>
              <p className="text-xs text-neutral-400 mb-5 leading-relaxed">
                Doğrudan keşif görüşmesi planlamak veya soru sormak için dilediğiniz kanalı kullanabilirsiniz.
              </p>

              <div className="space-y-2.5">
                {/* E-posta Kartı */}
                <a
                  href={`mailto:${siteConfig.contact.email}`}
                  className="flex items-center justify-between p-3.5 rounded-xl bg-neutral-900/80 border border-neutral-800 hover:border-amber-400/40 hover:bg-neutral-800/60 transition-all group"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-lg bg-amber-400/10 flex items-center justify-center text-amber-400">
                      <Mail className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="text-[10px] text-neutral-500 font-mono block">E-POSTA</span>
                      <span className="text-xs font-semibold text-white group-hover:text-amber-300">
                        {siteConfig.contact.email}
                      </span>
                    </div>
                  </div>
                  <ArrowUpRight className="w-3.5 h-3.5 text-neutral-500 group-hover:text-amber-400 transition-colors" />
                </a>

                {/* WhatsApp Kartı */}
                <a
                  href={siteConfig.contact.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3.5 rounded-xl bg-neutral-900/80 border border-neutral-800 hover:border-emerald-500/40 hover:bg-neutral-800/60 transition-all group"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-lg bg-emerald-500/10 flex items-center justify-center text-emerald-400">
                      <MessageCircle className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="text-[10px] text-neutral-500 font-mono block">WHATSAPP</span>
                      <span className="text-xs font-semibold text-white group-hover:text-emerald-300">
                        {siteConfig.contact.phoneFormatted}
                      </span>
                    </div>
                  </div>
                  <ArrowUpRight className="w-3.5 h-3.5 text-neutral-500 group-hover:text-emerald-400 transition-colors" />
                </a>
              </div>
            </div>

            {/* Çalışma Saatleri */}
            <div className="glass-panel p-5 rounded-2xl text-xs space-y-2 text-neutral-400 font-mono">
              <div className="flex justify-between">
                <span>Yanıt Süresi:</span>
                <span className="text-white font-semibold">2–4 Saat</span>
              </div>
              <div className="flex justify-between">
                <span>Çalışma Günleri:</span>
                <span className="text-white font-semibold">Pzt – Cmt</span>
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
