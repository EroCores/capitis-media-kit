import { siteConfig } from "@/config/site";
import { collaborationPackages, collaborationAddons } from "@/config/packages";
import { BriefFormValues } from "./validation";
import { formatCurrency } from "./format";

export function generateMailtoUrl(data: BriefFormValues): string {
  const pkg = collaborationPackages.find((p) => p.id === data.selectedPackage);
  const pkgName = pkg ? `${pkg.name} (${formatCurrency(pkg.price)})` : data.selectedPackage;

  const addonTitles = data.selectedAddons.map((id) => {
    const addon = collaborationAddons.find((a) => a.id === id);
    return addon ? `${addon.title} (${addon.pricingNote})` : id;
  });

  const subject = encodeURIComponent(`[İş Birliği Teklifi] ${data.brandName} x CAPİTİS`);
  const bodyText = `
Merhaba CAPİTİS Ekibi,

Aşağıda yapılandırdığımız iş birliği teklif ve brief detaylarımız yer almaktadır:

• Marka / Şirket: ${data.brandName}
• Yetkili Kişi: ${data.contactName}
• E-posta: ${data.email}
${data.phone ? `• İletişim Telefonu: ${data.phone}` : ""}

İŞ BİRLİĞİ YAPILANDIRMASI:
• Seçilen Paket: ${pkgName}
• Seçilen Ek Hizmetler: ${addonTitles.length > 0 ? addonTitles.join(" + ") : "Ek hizmet seçilmedi"}
• Toplam Tahmini Yatırım: ${data.calculatedTotal ? formatCurrency(data.calculatedTotal) : (pkg?.price ? formatCurrency(pkg.price) : "Özel Teklif")}
• Tercih Edilen Platform(lar): ${data.selectedPlatform.join(", ")}
• Hedeflenen Tarih / Lansman: ${data.targetDate || "Esnek"}

KAMPANYA AMACI & VİZYON:
${data.campaignGoal}

EK NOTLAR / ÖZEL İSTEKLER:
${data.notes || "Yok"}

---
Bu teklif CAPİTİS Medya Kiti İnteraktif Stüdyo Konfigüratörü üzerinden oluşturulmuştur.
`.trim();

  return `mailto:${siteConfig.contact.email}?subject=${subject}&body=${encodeURIComponent(bodyText)}`;
}

export function formatFormSummaryText(data: BriefFormValues): string {
  const pkg = collaborationPackages.find((p) => p.id === data.selectedPackage);
  const pkgName = pkg ? `${pkg.name} (${formatCurrency(pkg.price)})` : data.selectedPackage;

  const totalText = data.calculatedTotal
    ? formatCurrency(data.calculatedTotal)
    : pkg?.price
    ? formatCurrency(pkg.price)
    : "Özel Teklif";

  return `
[CAPİTİS İŞ BİRLİĞİ VE BRİEF ÖZETİ]
Marka: ${data.brandName}
Yetkili: ${data.contactName}
E-posta: ${data.email}
${data.phone ? `Telefon: ${data.phone}` : ""}

Seçilen Paket: ${pkgName}
Ek Hizmetler: ${data.selectedAddons.length > 0 ? data.selectedAddons.join(", ") : "Yok"}
Tahmini Toplam: ${totalText}
Platform: ${data.selectedPlatform.join(", ")}
Hedef Tarih: ${data.targetDate || "Esnek"}

Kampanya Amacı:
${data.campaignGoal}

Ek Notlar:
${data.notes || "Yok"}
`.trim();
}
