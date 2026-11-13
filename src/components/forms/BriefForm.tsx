"use client";

import React, { useState, useEffect, useMemo } from "react";
import { collaborationPackages, collaborationAddons } from "@/config/packages";
import { siteConfig } from "@/config/site";
import { briefFormSchema, BriefFormValues } from "@/lib/validation";
import { generateMailtoUrl, generateWhatsAppUrl, formatFormSummaryText } from "@/lib/contact";
import { formatCurrency } from "@/lib/format";
import { Button } from "@/components/ui/Button";
import {
  Mail,
  MessageCircle,
  Copy,
  Check,
  Sparkles,
  Layers,
  Clock,
  ShieldCheck,
  CheckCircle2,
  Plus,
  Zap,
} from "lucide-react";

interface BriefFormProps {
  initialPackage?: string;
}

export const BriefForm: React.FC<BriefFormProps> = ({ initialPackage }) => {
  const [selectedPackageId, setSelectedPackageId] = useState<string>(initialPackage || "starter");
  const [selectedAddonIds, setSelectedAddonIds] = useState<string[]>([]);
  const [selectedPlatforms, setSelectedPlatforms] = useState<string[]>(["TikTok"]);
  
  const [formData, setFormData] = useState({
    brandName: "",
    contactName: "",
    email: "",
    phone: "",
    campaignGoal: "",
    targetDate: "",
    notes: "",
    termsAccepted: false,
  });

  const [errors, setErrors] = useState<Partial<Record<keyof BriefFormValues, string>>>({});
  const [submittedAttempt, setSubmittedAttempt] = useState(false);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (initialPackage) {
      setSelectedPackageId(initialPackage);
    }
  }, [initialPackage]);

  // Seçilen paket nesnesi
  const currentPackage = useMemo(() => {
    return collaborationPackages.find((p) => p.id === selectedPackageId) || collaborationPackages[1];
  }, [selectedPackageId]);

  // Canlı Fiyat Hesaplaması
  const calculatedTotal = useMemo(() => {
    if (currentPackage.price === null) return null;
    let total = currentPackage.price;
    selectedAddonIds.forEach((addonId) => {
      const addon = collaborationAddons.find((a) => a.id === addonId);
      if (addon && addon.price) {
        total += addon.price;
      }
    });
    return total;
  }, [currentPackage, selectedAddonIds]);

  // Teslimat Süresi Hesaplaması (Ekspres seçilirse 48-72 saate iner)
  const estimatedTurnaround = useMemo(() => {
    if (selectedAddonIds.includes("fast_delivery")) {
      return "48–72 Saat (Ekspres)";
    }
    return `${currentPackage.turnaroundDays} İş Günü`;
  }, [selectedAddonIds, currentPackage]);

  const toggleAddon = (id: string) => {
    setSelectedAddonIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const togglePlatform = (platform: string) => {
    setSelectedPlatforms((prev) =>
      prev.includes(platform) ? prev.filter((p) => p !== platform) : [...prev, platform]
    );
  };

  const getFullFormData = (): BriefFormValues => {
    return {
      ...formData,
      selectedPackage: selectedPackageId,
      selectedAddons: selectedAddonIds,
      selectedPlatform: selectedPlatforms,
      budgetRange: calculatedTotal ? formatCurrency(calculatedTotal) : "Özel Teklif",
      calculatedTotal: calculatedTotal,
    };
  };

  const validate = (): boolean => {
    setSubmittedAttempt(true);
    const fullData = getFullFormData();
    const result = briefFormSchema.safeParse(fullData);
    if (!result.success) {
      const fieldErrors: Partial<Record<keyof BriefFormValues, string>> = {};
      result.error.issues.forEach((issue) => {
        const fieldName = issue.path[0] as keyof BriefFormValues;
        fieldErrors[fieldName] = issue.message;
      });
      setErrors(fieldErrors);
      return false;
    }
    setErrors({});
    return true;
  };

  const handleSendEmail = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    const fullData = getFullFormData();
    const mailto = generateMailtoUrl(fullData);
    window.location.href = mailto;
  };

  const handleSendWhatsApp = () => {
    if (!validate()) return;
    const fullData = getFullFormData();
    const waUrl = generateWhatsAppUrl(fullData);
    window.open(waUrl, "_blank", "noopener,noreferrer");
  };

  const handleCopyClipboard = async () => {
    if (!validate()) return;
    const fullData = getFullFormData();
    const summary = formatFormSummaryText(fullData);
    try {
      await navigator.clipboard.writeText(summary);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch {
      alert("Pano kopyalama desteklenmiyor, lütfen e-posta veya WhatsApp seçeneğini kullanın.");
    }
  };

  return (
    <div className="relative rounded-3xl bg-gradient-to-b from-neutral-900/90 via-black to-[#07080b] border border-neutral-800/80 shadow-2xl p-6 sm:p-10 overflow-hidden">
      {/* Üst App Bar Başlığı */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 mb-8 border-b border-neutral-800/80 gap-4">
        <div>
          <div className="flex items-center gap-2 mb-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-xs font-mono uppercase tracking-[0.2em] text-amber-400 font-bold">
              İNTERAKTİF TEKLİF & BRİEF STÜDYOSU
            </span>
          </div>
          <h3 className="text-2xl sm:text-3xl font-black text-white uppercase tracking-tight">
            İş Birliğinizi Yapılandırın
          </h3>
          <p className="text-xs sm:text-sm text-neutral-400 mt-1">
            Paketinizi seçin, ek hizmetleri dahil edin ve canlı bütçe hesabıyla teklifinizi anında iletin.
          </p>
        </div>

        {/* Canlı Durum Rozeti */}
        <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-neutral-950 border border-neutral-800 text-xs font-mono text-neutral-300 self-start sm:self-center">
          <Layers className="w-3.5 h-3.5 text-amber-400" />
          <span>CANLI KONFİGÜRATÖR</span>
        </div>
      </div>

      <form onSubmit={handleSendEmail} className="space-y-8">
        {/* ADIM 1: PAKET SEÇİMİ (5 Profesyonel Paket) */}
        <div>
          <div className="flex items-center justify-between mb-3">
            <label className="text-xs sm:text-sm font-bold uppercase tracking-wider text-white flex items-center gap-2">
              <span className="w-5 h-5 rounded-full bg-amber-400/20 text-amber-400 text-xs flex items-center justify-center font-mono">1</span>
              İş Birliği Paketi Seçin *
            </label>
            <span className="text-xs text-neutral-500 font-mono">Tıklayarak Değiştirin</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {collaborationPackages.map((pkg) => {
              const isSelected = selectedPackageId === pkg.id;
              return (
                <button
                  type="button"
                  key={pkg.id}
                  onClick={() => setSelectedPackageId(pkg.id)}
                  className={`p-4 rounded-2xl border text-left transition-all duration-200 cursor-pointer relative overflow-hidden group flex flex-col justify-between ${
                    isSelected
                      ? "bg-gradient-to-br from-amber-500/15 via-neutral-900 to-neutral-950 border-amber-400 shadow-lg shadow-amber-500/10 ring-1 ring-amber-400"
                      : "bg-neutral-950/70 border-neutral-800/80 hover:border-neutral-700 hover:bg-neutral-900/50"
                  }`}
                >
                  {pkg.featuredTag && (
                    <span className="text-[9px] font-mono uppercase tracking-wider text-amber-400 bg-amber-400/15 px-2 py-0.5 rounded-full border border-amber-400/30 self-start mb-2">
                      {pkg.featuredTag}
                    </span>
                  )}
                  <div>
                    <div className="flex items-center justify-between">
                      <h4 className="text-sm font-bold text-white group-hover:text-amber-300 transition-colors">
                        {pkg.name}
                      </h4>
                      {isSelected && (
                        <div className="w-5 h-5 rounded-full bg-amber-400 text-black flex items-center justify-center">
                          <Check className="w-3.5 h-3.5 stroke-[3]" />
                        </div>
                      )}
                    </div>
                    <span className="text-xs text-neutral-400 block mt-1 line-clamp-1">
                      {pkg.deliverables[0]}
                    </span>
                  </div>

                  <div className="mt-4 pt-2.5 border-t border-neutral-800/60 flex items-baseline justify-between">
                    <span className="text-base sm:text-lg font-black font-mono text-white">
                      {formatCurrency(pkg.price)}
                    </span>
                    <span className="text-[10px] font-mono text-neutral-500">
                      {pkg.videoCount} Video
                    </span>
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* ADIM 2: EK HİZMETLER VE ÖZELLEŞTİRMELER (Add-ons) */}
        <div>
          <div className="flex items-center justify-between mb-3">
            <label className="text-xs sm:text-sm font-bold uppercase tracking-wider text-white flex items-center gap-2">
              <span className="w-5 h-5 rounded-full bg-amber-400/20 text-amber-400 text-xs flex items-center justify-center font-mono">2</span>
              Ek Hizmetler & Lisans Ekle (İsteğe Bağlı)
            </label>
            <span className="text-xs text-neutral-500 font-mono">Çoklu Seçim</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {collaborationAddons.map((addon) => {
              const isSelected = selectedAddonIds.includes(addon.id);
              return (
                <button
                  type="button"
                  key={addon.id}
                  onClick={() => toggleAddon(addon.id)}
                  className={`p-3.5 rounded-2xl border text-left transition-all duration-200 cursor-pointer flex flex-col justify-between ${
                    isSelected
                      ? "bg-amber-400/10 border-amber-400 text-white shadow-md shadow-amber-400/5 ring-1 ring-amber-400/60"
                      : "bg-neutral-950/60 border-neutral-800 hover:border-neutral-700 text-neutral-300"
                  }`}
                >
                  <div className="flex items-start justify-between gap-2">
                    <div>
                      <div className="flex items-center gap-1.5">
                        <span className="text-xs font-bold text-white leading-tight">
                          {addon.title}
                        </span>
                        {addon.badge && (
                          <span className="text-[9px] font-mono px-1.5 py-0.5 rounded bg-neutral-800 text-amber-400">
                            {addon.badge}
                          </span>
                        )}
                      </div>
                      <p className="text-[11px] text-neutral-400 mt-1 line-clamp-2">
                        {addon.description}
                      </p>
                    </div>

                    <div
                      className={`w-5 h-5 rounded-lg flex items-center justify-center flex-shrink-0 transition-colors ${
                        isSelected
                          ? "bg-amber-400 text-black"
                          : "border border-neutral-700 bg-neutral-900 text-transparent"
                      }`}
                    >
                      {isSelected ? <Check className="w-3.5 h-3.5 stroke-[3]" /> : <Plus className="w-3 h-3 text-neutral-500" />}
                    </div>
                  </div>

                  <div className="mt-3 pt-2 border-t border-neutral-800/60 text-right">
                    <span className="text-xs font-mono font-bold text-amber-400">
                      {addon.pricingNote}
                    </span>
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* CANLI HESAPLAYICI ÖZET KARTI (Tesla / Apple Studio Tarzı) */}
        <div className="p-5 rounded-2xl bg-gradient-to-r from-neutral-950 via-neutral-900 to-neutral-950 border border-amber-400/30 shadow-xl flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="space-y-1">
            <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-amber-400 block">
              YAPILANDIRILAN TEKLİF ÖZETİ
            </span>
            <div className="flex flex-wrap items-center gap-3 text-sm font-semibold text-white">
              <span>{currentPackage.name} ({currentPackage.videoCount} Video)</span>
              {selectedAddonIds.length > 0 && (
                <span className="text-xs text-amber-300 font-normal">
                  + {selectedAddonIds.length} Ek Hizmet Seçildi
                </span>
              )}
            </div>
            <div className="flex items-center gap-4 text-xs text-neutral-400 font-mono pt-1">
              <span className="flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5 text-neutral-400" />
                Tahmini Teslim: <strong className="text-white">{estimatedTurnaround}</strong>
              </span>
              <span className="flex items-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5 text-amber-400" />
                {currentPackage.revisions} Kez Revizyon Dahil
              </span>
            </div>
          </div>

          <div className="text-left md:text-right border-t md:border-t-0 pt-3 md:pt-0 border-neutral-800">
            <span className="text-[11px] text-neutral-400 font-mono block">
              Tahmini Toplam Yatırım
            </span>
            <span className="text-2xl sm:text-3xl font-black text-white font-mono tracking-tight">
              {calculatedTotal !== null ? formatCurrency(calculatedTotal) : "Özel Teklif"}
            </span>
          </div>
        </div>

        {/* ADIM 3: MARKA & YETKİLİ BİLGİLERİ */}
        <div>
          <div className="flex items-center justify-between mb-4">
            <label className="text-xs sm:text-sm font-bold uppercase tracking-wider text-white flex items-center gap-2">
              <span className="w-5 h-5 rounded-full bg-amber-400/20 text-amber-400 text-xs flex items-center justify-center font-mono">3</span>
              Marka ve İletişim Bilgileri *
            </label>
          </div>

          <div className="space-y-4">
            {/* Marka Adı & Yetkili İsim */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label htmlFor="brandName" className="block text-xs font-semibold text-neutral-300 mb-1.5">
                  Marka / Şirket Adı *
                </label>
                <input
                  id="brandName"
                  type="text"
                  placeholder="Örn: Capitis Tech"
                  value={formData.brandName}
                  onChange={(e) => {
                    setFormData({ ...formData, brandName: e.target.value });
                    if (errors.brandName) setErrors({ ...errors, brandName: undefined });
                  }}
                  className={`w-full px-4 py-3 rounded-xl bg-neutral-950/80 border text-sm text-white focus:outline-none focus:ring-2 focus:ring-amber-400/80 transition-all ${
                    submittedAttempt && errors.brandName ? "border-red-500/80" : "border-neutral-800"
                  }`}
                />
                {submittedAttempt && errors.brandName && (
                  <p className="mt-1 text-xs text-red-400">{errors.brandName}</p>
                )}
              </div>

              <div>
                <label htmlFor="contactName" className="block text-xs font-semibold text-neutral-300 mb-1.5">
                  Yetkili İsim & Soyisim *
                </label>
                <input
                  id="contactName"
                  type="text"
                  placeholder="Örn: Burak Kaya"
                  value={formData.contactName}
                  onChange={(e) => {
                    setFormData({ ...formData, contactName: e.target.value });
                    if (errors.contactName) setErrors({ ...errors, contactName: undefined });
                  }}
                  className={`w-full px-4 py-3 rounded-xl bg-neutral-950/80 border text-sm text-white focus:outline-none focus:ring-2 focus:ring-amber-400/80 transition-all ${
                    submittedAttempt && errors.contactName ? "border-red-500/80" : "border-neutral-800"
                  }`}
                />
                {submittedAttempt && errors.contactName && (
                  <p className="mt-1 text-xs text-red-400">{errors.contactName}</p>
                )}
              </div>
            </div>

            {/* E-posta & Telefon */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label htmlFor="email" className="block text-xs font-semibold text-neutral-300 mb-1.5">
                  Kurumsal E-posta Adresi *
                </label>
                <input
                  id="email"
                  type="email"
                  placeholder="iletisim@marka.com"
                  value={formData.email}
                  onChange={(e) => {
                    setFormData({ ...formData, email: e.target.value });
                    if (errors.email) setErrors({ ...errors, email: undefined });
                  }}
                  className={`w-full px-4 py-3 rounded-xl bg-neutral-950/80 border text-sm text-white focus:outline-none focus:ring-2 focus:ring-amber-400/80 transition-all ${
                    submittedAttempt && errors.email ? "border-red-500/80" : "border-neutral-800"
                  }`}
                />
                {submittedAttempt && errors.email && (
                  <p className="mt-1 text-xs text-red-400">{errors.email}</p>
                )}
              </div>

              <div>
                <label htmlFor="phone" className="block text-xs font-semibold text-neutral-300 mb-1.5">
                  Telefon Numarası / WhatsApp *
                </label>
                <input
                  id="phone"
                  type="tel"
                  placeholder="0532 000 00 00"
                  value={formData.phone}
                  onChange={(e) => {
                    setFormData({ ...formData, phone: e.target.value });
                    if (errors.phone) setErrors({ ...errors, phone: undefined });
                  }}
                  className={`w-full px-4 py-3 rounded-xl bg-neutral-950/80 border text-sm text-white focus:outline-none focus:ring-2 focus:ring-amber-400/80 transition-all ${
                    submittedAttempt && errors.phone ? "border-red-500/80" : "border-neutral-800"
                  }`}
                />
                {submittedAttempt && errors.phone && (
                  <p className="mt-1 text-xs text-red-400">{errors.phone}</p>
                )}
              </div>
            </div>

            {/* Platform Seçimi */}
            <div>
              <label className="block text-xs font-semibold text-neutral-300 mb-2">
                Hedef Platform(lar) *
              </label>
              <div className="flex flex-wrap gap-2">
                {["TikTok", "Instagram Reels", "UGC (Kendi Reklamınız)", "YouTube Shorts"].map((platform) => {
                  const isSelected = selectedPlatforms.includes(platform);
                  return (
                    <button
                      type="button"
                      key={platform}
                      onClick={() => togglePlatform(platform)}
                      className={`px-3.5 py-1.5 rounded-xl text-xs font-medium border transition-colors cursor-pointer ${
                        isSelected
                          ? "bg-amber-400 text-black border-amber-400 font-semibold shadow-sm"
                          : "bg-neutral-950 border-neutral-800 text-neutral-300 hover:border-neutral-700"
                      }`}
                    >
                      {isSelected ? "✓ " : "+ "}
                      {platform}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Kampanya Hedefi */}
            <div>
              <label htmlFor="campaignGoal" className="block text-xs font-semibold text-neutral-300 mb-1.5">
                Kampanya Hedefiniz ve Öne Çıkarmak İstediğiniz Değer *
              </label>
              <textarea
                id="campaignGoal"
                rows={3}
                placeholder="Örn: Yeni çıkardığımız üretkenlik ve zihinsel odaklanma ürünümüzü Capitis'in vizyoner kitlesine doğal ve samimi bir kurguyla tanıtmak istiyoruz."
                value={formData.campaignGoal}
                onChange={(e) => {
                  setFormData({ ...formData, campaignGoal: e.target.value });
                  if (errors.campaignGoal) setErrors({ ...errors, campaignGoal: undefined });
                }}
                className={`w-full px-4 py-3 rounded-xl bg-neutral-950/80 border text-sm text-white focus:outline-none focus:ring-2 focus:ring-amber-400/80 transition-all ${
                  submittedAttempt && errors.campaignGoal ? "border-red-500/80" : "border-neutral-800"
                }`}
              />
              {submittedAttempt && errors.campaignGoal && (
                <p className="mt-1 text-xs text-red-400">{errors.campaignGoal}</p>
              )}
            </div>

            {/* Hedef Tarih & Ek Notlar */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label htmlFor="targetDate" className="block text-xs font-semibold text-neutral-300 mb-1.5">
                  Hedeflenen Lansman / Yayın Zamanı
                </label>
                <input
                  id="targetDate"
                  type="text"
                  placeholder="Örn: Önümüzdeki hafta / Esnek"
                  value={formData.targetDate}
                  onChange={(e) => setFormData({ ...formData, targetDate: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-neutral-950/80 border border-neutral-800 text-sm text-white focus:outline-none focus:ring-2 focus:ring-amber-400/80"
                />
              </div>

              <div>
                <label htmlFor="notes" className="block text-xs font-semibold text-neutral-300 mb-1.5">
                  Özel Notlar veya Sorularınız
                </label>
                <input
                  id="notes"
                  type="text"
                  placeholder="Örn: Çekim için ürün kargolanacaktır"
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-neutral-950/80 border border-neutral-800 text-sm text-white focus:outline-none focus:ring-2 focus:ring-amber-400/80"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Şartlar ve Bilgilendirme Onayı */}
        <div className="pt-2">
          <label className="flex items-start gap-3 cursor-pointer">
            <input
              type="checkbox"
              checked={formData.termsAccepted}
              onChange={(e) => {
                setFormData({ ...formData, termsAccepted: e.target.checked });
                if (errors.termsAccepted) setErrors({ ...errors, termsAccepted: undefined });
              }}
              className="mt-1 w-4 h-4 rounded border-neutral-700 bg-neutral-900 text-amber-400 focus:ring-amber-400"
            />
            <span className="text-xs text-neutral-400 leading-relaxed">
              İş birliği sürecinde paylaştığım bilgilerin teklif oluşturulması amacıyla{" "}
              <a href="/privacy" className="text-amber-400 underline hover:text-amber-300">
                Gizlilik Politikası
              </a>{" "}
              ve{" "}
              <a href="/kvkk" className="text-amber-400 underline hover:text-amber-300">
                KVKK Aydınlatma Metni
              </a>{" "}
              kapsamında değerlendirilmesini kabul ediyorum.
            </span>
          </label>
          {submittedAttempt && errors.termsAccepted && (
            <p className="mt-1 text-xs text-red-400">{errors.termsAccepted}</p>
          )}
        </div>

        {/* Gönderim Butonları (App Action Bar) */}
        <div className="pt-4 border-t border-neutral-800/80 flex flex-col sm:flex-row gap-3">
          <Button
            type="button"
            size="lg"
            variant="primary"
            className="flex-1 justify-center py-4 text-base bg-gradient-to-r from-amber-400 via-amber-300 to-amber-500 shadow-xl shadow-amber-500/25"
            onClick={handleSendWhatsApp}
            leftIcon={<MessageCircle className="w-5 h-5 text-black" />}
          >
            WhatsApp ile Teklifi Başlat
          </Button>

          <Button
            type="submit"
            size="lg"
            variant="secondary"
            className="flex-1 justify-center py-4 text-base"
            leftIcon={<Mail className="w-4 h-4 text-amber-400" />}
          >
            E-posta İstemcisiyle Gönder
          </Button>

          <Button
            type="button"
            size="lg"
            variant="outline"
            className="px-5 py-4"
            onClick={handleCopyClipboard}
            leftIcon={copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4 text-neutral-400" />}
          >
            {copied ? "Kopyalandı!" : "Özeti Kopyala"}
          </Button>
        </div>
      </form>
    </div>
  );
};
