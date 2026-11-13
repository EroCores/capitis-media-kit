"use client";

import React, { useState, useEffect } from "react";
import { collaborationPackages } from "@/config/packages";
import { siteConfig } from "@/config/site";
import { briefFormSchema, BriefFormValues } from "@/lib/validation";
import { generateMailtoUrl, generateWhatsAppUrl, formatFormSummaryText } from "@/lib/contact";
import { Button } from "@/components/ui/Button";
import { Mail, MessageCircle, Copy, Check, AlertCircle } from "lucide-react";

interface BriefFormProps {
  initialPackage?: string;
}

export const BriefForm: React.FC<BriefFormProps> = ({ initialPackage }) => {
  const [formData, setFormData] = useState<BriefFormValues>({
    brandName: "",
    contactName: "",
    email: "",
    phone: "",
    selectedPackage: initialPackage || "starter",
    selectedPlatform: ["TikTok"],
    campaignGoal: "",
    budgetRange: "Standart Paket Fiyatı",
    targetDate: "",
    notes: "",
    termsAccepted: false,
  });

  const [errors, setErrors] = useState<Partial<Record<keyof BriefFormValues, string>>>({});
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (initialPackage) {
      setFormData((prev) => ({ ...prev, selectedPackage: initialPackage }));
    }
  }, [initialPackage]);

  const validate = (): boolean => {
    const result = briefFormSchema.safeParse(formData);
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
    const mailto = generateMailtoUrl(formData);
    window.location.href = mailto;
  };

  const handleSendWhatsApp = () => {
    if (!validate()) return;
    const waUrl = generateWhatsAppUrl(formData);
    window.open(waUrl, "_blank", "noopener,noreferrer");
  };

  const handleCopyClipboard = async () => {
    if (!validate()) return;
    const summary = formatFormSummaryText(formData);
    try {
      await navigator.clipboard.writeText(summary);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch {
      alert("Pano kopyalama desteklenmiyor, lütfen e-posta veya WhatsApp seçeneğini kullanın.");
    }
  };

  const handlePlatformToggle = (platform: string) => {
    setFormData((prev) => {
      const current = prev.selectedPlatform;
      if (current.includes(platform)) {
        return {
          ...prev,
          selectedPlatform: current.filter((p) => p !== platform),
        };
      } else {
        return {
          ...prev,
          selectedPlatform: [...current, platform],
        };
      }
    });
  };

  return (
    <form onSubmit={handleSendEmail} className="glass-panel p-6 sm:p-10 rounded-3xl space-y-6">
      <div className="border-b border-neutral-800 pb-4 mb-2">
        <h3 className="text-xl sm:text-2xl font-bold text-white">
          İş Birliği Brief Formu
        </h3>
        <p className="text-xs sm:text-sm text-neutral-400 mt-1">
          Formu doldurarak tercih ettiğiniz iletişim kanalı (E-posta veya WhatsApp) üzerinden teklifinizi iletebilirsiniz.
        </p>
      </div>

      {/* İsim & Marka Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="brandName" className="block text-xs font-semibold text-neutral-300 mb-1.5">
            Marka / Şirket Adı *
          </label>
          <input
            id="brandName"
            type="text"
            placeholder="Örn: Acme Tech"
            value={formData.brandName}
            onChange={(e) => setFormData({ ...formData, brandName: e.target.value })}
            className={`w-full px-4 py-3 rounded-xl bg-neutral-900 border text-sm text-white focus:outline-none focus:ring-2 focus:ring-amber-400 ${
              errors.brandName ? "border-red-500" : "border-neutral-800"
            }`}
          />
          {errors.brandName && (
            <p className="mt-1 text-xs text-red-400 flex items-center gap-1">
              <AlertCircle className="w-3.5 h-3.5" /> {errors.brandName}
            </p>
          )}
        </div>

        <div>
          <label htmlFor="contactName" className="block text-xs font-semibold text-neutral-300 mb-1.5">
            Yetkili Kişi İsim & Soyisim *
          </label>
          <input
            id="contactName"
            type="text"
            placeholder="Örn: Ahmet Yılmaz"
            value={formData.contactName}
            onChange={(e) => setFormData({ ...formData, contactName: e.target.value })}
            className={`w-full px-4 py-3 rounded-xl bg-neutral-900 border text-sm text-white focus:outline-none focus:ring-2 focus:ring-amber-400 ${
              errors.contactName ? "border-red-500" : "border-neutral-800"
            }`}
          />
          {errors.contactName && (
            <p className="mt-1 text-xs text-red-400 flex items-center gap-1">
              <AlertCircle className="w-3.5 h-3.5" /> {errors.contactName}
            </p>
          )}
        </div>
      </div>

      {/* E-posta & Telefon Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="email" className="block text-xs font-semibold text-neutral-300 mb-1.5">
            Kurumsal E-posta Adresi *
          </label>
          <input
            id="email"
            type="email"
            placeholder="ahmet@marka.com"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            className={`w-full px-4 py-3 rounded-xl bg-neutral-900 border text-sm text-white focus:outline-none focus:ring-2 focus:ring-amber-400 ${
              errors.email ? "border-red-500" : "border-neutral-800"
            }`}
          />
          {errors.email && (
            <p className="mt-1 text-xs text-red-400 flex items-center gap-1">
              <AlertCircle className="w-3.5 h-3.5" /> {errors.email}
            </p>
          )}
        </div>

        <div>
          <label htmlFor="phone" className="block text-xs font-semibold text-neutral-300 mb-1.5">
            Telefon Numarası *
          </label>
          <input
            id="phone"
            type="tel"
            placeholder="0532 000 00 00"
            value={formData.phone}
            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            className={`w-full px-4 py-3 rounded-xl bg-neutral-900 border text-sm text-white focus:outline-none focus:ring-2 focus:ring-amber-400 ${
              errors.phone ? "border-red-500" : "border-neutral-800"
            }`}
          />
          {errors.phone && (
            <p className="mt-1 text-xs text-red-400 flex items-center gap-1">
              <AlertCircle className="w-3.5 h-3.5" /> {errors.phone}
            </p>
          )}
        </div>
      </div>

      {/* Paket Seçimi */}
      <div>
        <label className="block text-xs font-semibold text-neutral-300 mb-2">
          İlgilenilen İş Birliği Paketi *
        </label>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          {collaborationPackages.map((pkg) => {
            const isSelected = formData.selectedPackage === pkg.id;
            return (
              <button
                type="button"
                key={pkg.id}
                onClick={() => setFormData({ ...formData, selectedPackage: pkg.id })}
                className={`p-3.5 rounded-xl border text-left transition-all cursor-pointer ${
                  isSelected
                    ? "bg-amber-400/10 border-amber-400 text-white shadow-md shadow-amber-400/10"
                    : "bg-neutral-900/60 border-neutral-800 text-neutral-300 hover:border-neutral-700"
                }`}
              >
                <div className="flex items-center justify-between">
                  <span className="text-sm font-bold">{pkg.name}</span>
                  {isSelected && <Check className="w-4 h-4 text-amber-400" />}
                </div>
                <span className="text-xs text-amber-400/90 font-mono block mt-1">
                  ₺{pkg.price}
                </span>
              </button>
            );
          })}
        </div>
        {errors.selectedPackage && (
          <p className="mt-1 text-xs text-red-400">{errors.selectedPackage}</p>
        )}
      </div>

      {/* Tercih Edilen Platformlar */}
      <div>
        <label className="block text-xs font-semibold text-neutral-300 mb-2">
          Hedeflenen Platform(lar) *
        </label>
        <div className="flex flex-wrap gap-2">
          {["TikTok", "Instagram Reels", "UGC (Marka Reklamı)", "Özel Proje"].map((platform) => {
            const isSelected = formData.selectedPlatform.includes(platform);
            return (
              <button
                type="button"
                key={platform}
                onClick={() => handlePlatformToggle(platform)}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-medium border transition-colors cursor-pointer ${
                  isSelected
                    ? "bg-amber-400 text-black border-amber-400 font-semibold"
                    : "bg-neutral-900 border-neutral-800 text-neutral-300 hover:border-neutral-700"
                }`}
              >
                {isSelected ? "✓ " : "+ "}
                {platform}
              </button>
            );
          })}
        </div>
        {errors.selectedPlatform && (
          <p className="mt-1 text-xs text-red-400">{errors.selectedPlatform}</p>
        )}
      </div>

      {/* Kampanya Hedefi */}
      <div>
        <label htmlFor="campaignGoal" className="block text-xs font-semibold text-neutral-300 mb-1.5">
          Kampanya Hedefi & Öne Çıkarmak İstediğiniz Değer *
        </label>
        <textarea
          id="campaignGoal"
          rows={3}
          placeholder="Örn: Yeni çıkardığımız verimlilik uygulamasının karar alma ve odaklanma özelliklerini Capitis kitlesine anlatmak istiyoruz."
          value={formData.campaignGoal}
          onChange={(e) => setFormData({ ...formData, campaignGoal: e.target.value })}
          className={`w-full px-4 py-3 rounded-xl bg-neutral-900 border text-sm text-white focus:outline-none focus:ring-2 focus:ring-amber-400 ${
            errors.campaignGoal ? "border-red-500" : "border-neutral-800"
          }`}
        />
        {errors.campaignGoal && (
          <p className="mt-1 text-xs text-red-400 flex items-center gap-1">
            <AlertCircle className="w-3.5 h-3.5" /> {errors.campaignGoal}
          </p>
        )}
      </div>

      {/* Ek Notlar & Tarih */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="targetDate" className="block text-xs font-semibold text-neutral-300 mb-1.5">
            Hedeflenen Yayın Tarihi / Lansman
          </label>
          <input
            id="targetDate"
            type="text"
            placeholder="Örn: Kasım sonu / Esnek"
            value={formData.targetDate}
            onChange={(e) => setFormData({ ...formData, targetDate: e.target.value })}
            className="w-full px-4 py-3 rounded-xl bg-neutral-900 border border-neutral-800 text-sm text-white focus:outline-none focus:ring-2 focus:ring-amber-400"
          />
        </div>

        <div>
          <label htmlFor="budgetRange" className="block text-xs font-semibold text-neutral-300 mb-1.5">
            Tahmini Bütçe
          </label>
          <input
            id="budgetRange"
            type="text"
            placeholder="Örn: Paket tutarı veya Özel Bütçe"
            value={formData.budgetRange}
            onChange={(e) => setFormData({ ...formData, budgetRange: e.target.value })}
            className="w-full px-4 py-3 rounded-xl bg-neutral-900 border border-neutral-800 text-sm text-white focus:outline-none focus:ring-2 focus:ring-amber-400"
          />
        </div>
      </div>

      {/* Şartlar & Gizlilik Onayı */}
      <div className="pt-2">
        <label className="flex items-start gap-3 cursor-pointer">
          <input
            type="checkbox"
            checked={formData.termsAccepted}
            onChange={(e) => setFormData({ ...formData, termsAccepted: e.target.checked })}
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
        {errors.termsAccepted && (
          <p className="mt-1 text-xs text-red-400 flex items-center gap-1">
            <AlertCircle className="w-3.5 h-3.5" /> {errors.termsAccepted}
          </p>
        )}
      </div>

      {/* Bilgilendirme Kutusu */}
      <div className="p-3.5 rounded-2xl bg-neutral-900/80 border border-neutral-800 text-xs text-neutral-400 leading-normal">
        💡 <strong>Nasıl Çalışır?</strong> Butona tıkladığınızda cihazınızdaki e-posta veya WhatsApp uygulaması açılarak formdaki verileriniz hazır mesaj olarak yüklenecektir. Doğrudan tek tıkla gönderebilirsiniz.
      </div>

      {/* Gönderim Butonları */}
      <div className="flex flex-col sm:flex-row gap-3 pt-2">
        <Button
          type="submit"
          size="lg"
          variant="primary"
          className="flex-1"
          leftIcon={<Mail className="w-4 h-4 text-black" />}
        >
          E-posta Uygulamasıyla Gönder
        </Button>

        <Button
          type="button"
          size="lg"
          variant="secondary"
          className="flex-1 border-emerald-500/30 hover:border-emerald-500/60"
          onClick={handleSendWhatsApp}
          leftIcon={<MessageCircle className="w-4 h-4 text-emerald-400" />}
        >
          WhatsApp ile Gönder
        </Button>

        <Button
          type="button"
          size="lg"
          variant="outline"
          onClick={handleCopyClipboard}
          leftIcon={copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4 text-neutral-400" />}
        >
          {copied ? "Kopyalandı!" : "Metni Kopyala"}
        </Button>
      </div>
    </form>
  );
};
