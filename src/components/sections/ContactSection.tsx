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
    <section id="iletisim" className="py-20 lg:py-28 relative scroll-mt-20 border-t border-neutral-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="HADİ BAŞLAYALIM"
          title="Markanızı Birlikte Büyütelim"
          subtitle="Ürününüzü doğru hikâyenin içine yerleştirelim ve Capitis kitlesiyle buluşturalım. Brief formunu doldurarak veya doğrudan kanallarımızdan bize ulaşabilirsiniz."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Sol Kolon: Doğrudan İletişim Kartları (4 Kolon) */}
          <div className="lg:col-span-5 space-y-4">
            <div className="glass-panel p-6 sm:p-8 rounded-3xl">
              <h3 className="text-lg font-bold text-white mb-2">
                Hızlı İletişim Kanalları
              </h3>
              <p className="text-xs sm:text-sm text-neutral-400 mb-6 leading-relaxed">
                Özel bir soru sormak veya doğrudan WhatsApp üzerinden keşif görüşmesi planlamak için dilediğiniz kanalı kullanabilirsiniz.
              </p>

              <div className="space-y-3">
                {/* E-posta Kartı */}
                <a
                  href={`mailto:${siteConfig.contact.email}`}
                  className="flex items-center justify-between p-4 rounded-2xl bg-neutral-900/80 border border-neutral-800 hover:border-amber-400/40 hover:bg-neutral-800/60 transition-all group"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-amber-400/10 flex items-center justify-center text-amber-400">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-[11px] text-neutral-500 font-mono block">E-POSTA</span>
                      <span className="text-xs sm:text-sm font-semibold text-white group-hover:text-amber-300">
                        {siteConfig.contact.email}
                      </span>
                    </div>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-neutral-500 group-hover:text-amber-400 transition-colors" />
                </a>

                {/* WhatsApp Kartı */}
                <a
                  href={siteConfig.contact.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-4 rounded-2xl bg-neutral-900/80 border border-neutral-800 hover:border-emerald-500/40 hover:bg-neutral-800/60 transition-all group"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-emerald-500/10 flex items-center justify-center text-emerald-400">
                      <MessageCircle className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-[11px] text-neutral-500 font-mono block">WHATSAPP</span>
                      <span className="text-xs sm:text-sm font-semibold text-white group-hover:text-emerald-300">
                        {siteConfig.contact.phoneFormatted}
                      </span>
                    </div>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-neutral-500 group-hover:text-emerald-400 transition-colors" />
                </a>
              </div>
            </div>

            {/* Çalışma Saatleri ve Yanıt Süresi */}
            <div className="glass-panel p-6 rounded-3xl text-xs space-y-2 text-neutral-400 font-mono">
              <div className="flex justify-between">
                <span>Ortalama Yanıt Süresi:</span>
                <span className="text-white font-semibold">2–4 Saat İçinde</span>
              </div>
              <div className="flex justify-between">
                <span>Çalışma Günleri:</span>
                <span className="text-white font-semibold">Pazartesi – Cumartesi</span>
              </div>
              <div className="flex justify-between">
                <span>Konum / Saat Dilimi:</span>
                <span className="text-white font-semibold">İstanbul (GMT+3)</span>
              </div>
            </div>
          </div>

          {/* Sağ Kolon: Brief Formu (7 Kolon) */}
          <div className="lg:col-span-7">
            <BriefForm initialPackage={selectedPackage} />
          </div>
        </div>
      </div>
    </section>
  );
};
