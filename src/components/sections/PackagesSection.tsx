"use client";

import React from "react";
import { collaborationPackages, collaborationAddons } from "@/config/packages";
import { formatCurrency } from "@/lib/format";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Button } from "@/components/ui/Button";
import {
  Check,
  Sparkles,
  Clock,
  RefreshCw,
  MessageSquare,
  ArrowRight,
  ShieldCheck,
  Crown,
} from "lucide-react";

interface PackagesSectionProps {
  onSelectPackage?: (packageId: string) => void;
}

export const PackagesSection: React.FC<PackagesSectionProps> = ({ onSelectPackage }) => {
  const handleSelect = (pkgId: string) => {
    if (onSelectPackage) {
      onSelectPackage(pkgId);
    }
    const formEl = document.querySelector("#iletisim");
    if (formEl) {
      formEl.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="paketler" className="py-20 lg:py-28 relative scroll-mt-20 border-t border-neutral-900 bg-neutral-950/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="İŞ BİRLİĞİ PAKETLERİ"
          title="Markanıza Özel Ortaklık Modelleri"
          subtitle="Tek içerikle ilk adımı atmaktan, 5 videoluk VIP büyüme serisine ve aylık kurumsal UGC üretimine kadar ölçeklenebilir seçenekler."
        />

        {/* 3 Standart Paket Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8 items-stretch mb-8">
          {collaborationPackages.slice(0, 3).map((pkg) => {
            const isFeatured = pkg.featured;

            return (
              <div
                key={pkg.id}
                className={`relative rounded-3xl p-6 sm:p-8 flex flex-col justify-between transition-all duration-300 ${
                  isFeatured
                    ? "bg-gradient-to-b from-neutral-900 via-neutral-900/90 to-neutral-950 border-2 border-amber-400 shadow-2xl shadow-amber-500/10 scale-100 lg:-translate-y-2"
                    : "glass-panel glass-panel-hover"
                }`}
              >
                {/* Popüler Rozeti */}
                {pkg.featuredTag && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-gradient-to-r from-amber-400 to-amber-500 text-black text-xs font-black uppercase tracking-wider shadow-md flex items-center gap-1.5 whitespace-nowrap">
                    <Sparkles className="w-3.5 h-3.5 fill-current" />
                    <span>{pkg.featuredTag}</span>
                  </div>
                )}

                <div>
                  {/* Paket Başlığı ve Alt Bilgisi */}
                  <div className="mb-6">
                    <div className="flex items-center justify-between">
                      <h3 className="text-xl sm:text-2xl font-black text-white uppercase tracking-tight">
                        {pkg.name}
                      </h3>
                      {pkg.savingsBadge && (
                        <span className="text-xs font-bold text-amber-400 bg-amber-400/10 px-2.5 py-0.5 rounded-full border border-amber-400/20">
                          {pkg.savingsBadge}
                        </span>
                      )}
                    </div>
                    <p className="text-xs sm:text-sm text-neutral-400 mt-2 min-h-[40px]">
                      {pkg.subtitle}
                    </p>
                  </div>

                  {/* Fiyat Alanı */}
                  <div className="mb-6 p-4 rounded-2xl bg-neutral-950/60 border border-neutral-800">
                    <div className="flex items-baseline gap-2">
                      <span className="text-3xl sm:text-4xl font-black text-white font-sans tracking-tight">
                        {formatCurrency(pkg.price)}
                      </span>
                    </div>
                    {pkg.pricePerVideo && (
                      <span className="text-xs font-mono text-neutral-400 block mt-1">
                        {pkg.pricePerVideo}
                      </span>
                    )}
                  </div>

                  {/* Teslim Edilecekler Listesi */}
                  <div className="space-y-3 mb-8">
                    <span className="text-xs font-mono uppercase tracking-wider text-neutral-400 block">
                      Paket İçeriği:
                    </span>
                    {pkg.deliverables.map((item) => (
                      <div key={item} className="flex items-start gap-2.5 text-xs sm:text-sm text-neutral-200">
                        <Check className="w-4 h-4 text-amber-400 mt-0.5 flex-shrink-0" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>

                  {/* Standart Güvenceler */}
                  <div className="pt-4 border-t border-neutral-800/80 space-y-2 mb-8 text-xs text-neutral-400 font-mono">
                    <div className="flex items-center gap-2">
                      <Clock className="w-3.5 h-3.5 text-neutral-400" />
                      <span>{pkg.turnaroundDays} gün içinde teslimat</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <RefreshCw className="w-3.5 h-3.5 text-neutral-400" />
                      <span>{pkg.revisions} kez revizyon hakkı</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MessageSquare className="w-3.5 h-3.5 text-amber-400" />
                      <span>Ücretsiz keşif görüşmesi</span>
                    </div>
                  </div>
                </div>

                {/* Aksiyon Butonu */}
                <Button
                  size="lg"
                  variant={isFeatured ? "primary" : "secondary"}
                  className="w-full justify-center"
                  onClick={() => handleSelect(pkg.id)}
                  rightIcon={<ArrowRight className="w-4 h-4 text-current" />}
                >
                  {pkg.ctaText}
                </Button>
              </div>
            );
          })}
        </div>

        {/* 2 İLERİ SEVİYE & KURUMSAL PAKET (VIP Büyüme & 360° UGC) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 mb-16">
          {collaborationPackages.slice(3, 5).map((pkg) => {
            const isVip = pkg.id === "vip_growth";

            return (
              <div
                key={pkg.id}
                className={`relative rounded-3xl p-6 sm:p-10 flex flex-col justify-between transition-all duration-300 border ${
                  isVip
                    ? "bg-gradient-to-br from-amber-950/20 via-neutral-900 to-black border-amber-400/60 shadow-2xl"
                    : "bg-gradient-to-br from-neutral-900 via-neutral-950 to-black border-neutral-700/80 shadow-xl"
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-mono uppercase tracking-widest text-amber-400 bg-amber-400/10 px-3 py-1 rounded-full border border-amber-400/20 flex items-center gap-1.5">
                      <Crown className="w-3.5 h-3.5 text-amber-400" />
                      {pkg.featuredTag}
                    </span>
                    <span className="text-xs font-bold text-emerald-400 bg-emerald-500/10 px-3 py-1 rounded-full border border-emerald-500/20">
                      {pkg.savingsBadge}
                    </span>
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-black text-white uppercase tracking-tight mb-2">
                    {pkg.name}
                  </h3>
                  <p className="text-sm text-neutral-300 leading-relaxed mb-6">
                    {pkg.subtitle}
                  </p>

                  {/* Fiyat */}
                  <div className="mb-6 p-4 rounded-2xl bg-black/60 border border-neutral-800 flex items-baseline justify-between">
                    <div>
                      <span className="text-3xl sm:text-4xl font-black text-white font-mono">
                        {formatCurrency(pkg.price)}
                      </span>
                      {pkg.pricePerVideo && (
                        <span className="text-xs font-mono text-neutral-400 block mt-1">
                          {pkg.pricePerVideo}
                        </span>
                      )}
                    </div>
                    <span className="text-xs font-mono text-amber-400 font-bold bg-amber-400/10 px-3 py-1 rounded-full">
                      {pkg.videoCount} Video Paketi
                    </span>
                  </div>

                  {/* Kapsam */}
                  <div className="space-y-2.5 mb-8">
                    <span className="text-xs font-mono uppercase tracking-wider text-neutral-400 block mb-2">
                      Kapsam & Ayrıcalıklar:
                    </span>
                    {pkg.deliverables.map((item) => (
                      <div key={item} className="flex items-start gap-2.5 text-xs sm:text-sm text-neutral-200">
                        <Check className="w-4 h-4 text-amber-400 mt-0.5 flex-shrink-0" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <Button
                  size="lg"
                  variant={isVip ? "primary" : "secondary"}
                  className="w-full justify-center py-4"
                  onClick={() => handleSelect(pkg.id)}
                  rightIcon={<ArrowRight className="w-4 h-4 text-current" />}
                >
                  {pkg.ctaText}
                </Button>
              </div>
            );
          })}
        </div>

        {/* Ek Hizmetler (Add-ons) Listesi */}
        <div className="glass-panel p-6 sm:p-10 rounded-3xl">
          <div className="mb-8">
            <span className="text-xs font-mono uppercase tracking-[0.2em] text-amber-400 font-semibold block mb-1">
              ESNEK OPSİYONLAR & MODÜLLER
            </span>
            <h3 className="text-xl sm:text-2xl font-bold text-white">
              Ek Hizmetler & Kullanım Hakları
            </h3>
            <p className="text-sm text-neutral-400 mt-1">
              Seçtiğiniz pakete dilediğiniz ek hizmeti dahil edebilir, aşağıdaki interaktif stüdyo konfigüratöründe anında canlı fiyatını görebilirsiniz.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {collaborationAddons.map((addon) => (
              <div
                key={addon.id}
                className="p-5 rounded-2xl bg-neutral-900/60 border border-neutral-800 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="text-sm font-bold text-white">
                      {addon.title}
                    </h4>
                    {addon.badge && (
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-amber-400/10 text-amber-300 border border-amber-400/20">
                        {addon.badge}
                      </span>
                    )}
                  </div>
                  <p className="text-xs text-neutral-400 leading-relaxed mb-4">
                    {addon.description}
                  </p>
                </div>
                <div className="pt-3 border-t border-neutral-800 flex items-center justify-between text-xs font-mono">
                  <span className="text-neutral-500">Ek Fiyat:</span>
                  <span className="text-amber-400 font-semibold">{addon.pricingNote}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
