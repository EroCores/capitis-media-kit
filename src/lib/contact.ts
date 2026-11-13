import { siteConfig } from "@/config/site";
import { BriefFormValues } from "./validation";

export function generateMailtoUrl(data: BriefFormValues): string {
  const subject = encodeURIComponent(`[İş Birliği Talebi] ${data.brandName} x CAPİTİS`);
  const bodyText = `
Merhaba CAPİTİS Ekibi,

Aşağıda iş birliği brief detaylarımız yer almaktadır:

• Marka / Şirket: ${data.brandName}
• Yetkili Kişi: ${data.contactName}
• E-posta: ${data.email}
• Telefon: ${data.phone}
• İlgilenilen Paket: ${data.selectedPackage}
• Tercih Edilen Platform(lar): ${data.selectedPlatform.join(", ")}
• Bütçe Aralığı: ${data.budgetRange || "Belirtilmedi"}
• Hedef Tarih / Lansman: ${data.targetDate || "Esnek"}

Kampanya Amacı & Detaylar:
${data.campaignGoal}

Ek Notlar:
${data.notes || "Yok"}

---
Bu talep CAPİTİS Medya Kiti web sitesi üzerinden oluşturulmuştur.
`.trim();

  return `mailto:${siteConfig.contact.email}?subject=${subject}&body=${encodeURIComponent(bodyText)}`;
}

export function generateWhatsAppUrl(data: BriefFormValues): string {
  const messageText = `
*CAPİTİS İş Birliği Talebi*

• *Marka:* ${data.brandName}
• *Yetkili:* ${data.contactName}
• *E-posta:* ${data.email}
• *Telefon:* ${data.phone}
• *Paket:* ${data.selectedPackage}
• *Platform:* ${data.selectedPlatform.join(", ")}
• *Bütçe:* ${data.budgetRange || "Belirtilmedi"}
• *Hedef Tarih:* ${data.targetDate || "Esnek"}

*Kampanya Amacı:*
${data.campaignGoal}

*Ek Notlar:*
${data.notes || "Yok"}
`.trim();

  // Telefon numarası temizlenip uluslararası formata dönüştürülür
  const cleanPhone = siteConfig.contact.phone.replace(/[^0-9]/g, "");
  return `https://wa.me/${cleanPhone}?text=${encodeURIComponent(messageText)}`;
}

export function formatFormSummaryText(data: BriefFormValues): string {
  return `
[CAPİTİS İŞ BİRLİĞİ BRİEFİ]
Marka: ${data.brandName}
Yetkili: ${data.contactName}
E-posta: ${data.email}
Telefon: ${data.phone}
Paket: ${data.selectedPackage}
Platform: ${data.selectedPlatform.join(", ")}
Bütçe: ${data.budgetRange || "Belirtilmedi"}
Hedef Tarih: ${data.targetDate || "Esnek"}

Kampanya Amacı:
${data.campaignGoal}

Ek Notlar:
${data.notes || "Yok"}
`.trim();
}
