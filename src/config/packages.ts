import { CollaborationPackage, AddonService } from "@/types";

export const collaborationPackages: CollaborationPackage[] = [
  {
    id: "mini",
    name: "Mini Paket",
    subtitle: "İlk adım için ideal · Düşük bütçeyle ilk iş birliğini test et",
    price: 350,
    currency: "TRY",
    pricePerVideo: "₺350 / video",
    savingsBadge: undefined,
    featured: false,
    deliverables: [
      "1 TikTok tanıtım videosu",
      "Markaya özel özgün kurgu",
      "Ürün / hizmet doğal entegrasyonu",
      "Capitis (@capitis.tr) hesabında yayın",
      "İzleyici yönlendirmesi & net CTA",
    ],
    guarantees: [
      "7 gün içinde teslimat",
      "1 kez revizyon hakkı",
      "Ücretsiz keşif görüşmesi",
    ],
    turnaroundDays: 7,
    revisions: 1,
    suitableFor: "Ürünü veya hizmeti hızlıca test etmek isteyen markalar için birebir başlangıç adımı.",
    ctaText: "Mini Paketi Seç",
  },
  {
    id: "starter",
    name: "Başlangıç Paketi",
    subtitle: "Daha fazla içerik, daha fazla temas · 2 farklı içerik yaklaşımı",
    price: 650,
    currency: "TRY",
    pricePerVideo: "₺325 / video",
    savingsBadge: "%7 Tasarruf",
    featured: true,
    featuredTag: "EN POPÜLER",
    deliverables: [
      "2 TikTok tanıtım videosu",
      "2 farklı içerik senaryosu & kurgusu",
      "Ürün / hizmet doğal entegrasyonu",
      "Capitis (@capitis.tr) hesabında yayın",
      "İzleyici yönlendirmesi & net CTA",
    ],
    guarantees: [
      "7 gün içinde teslimat",
      "1 kez revizyon hakkı",
      "Ücretsiz keşif görüşmesi",
    ],
    turnaroundDays: 7,
    revisions: 1,
    suitableFor: "Markasını iki farklı açıdan sunarak kitleye daha güçlü temas etmek isteyenler için.",
    ctaText: "Başlangıç Paketini Seç",
  },
  {
    id: "advantage",
    name: "Avantajlı Paket",
    subtitle: "Markasını öne çıkarmak isteyenler için · 3 videoluk seri ile güçlü tanıtım",
    price: 900,
    currency: "TRY",
    pricePerVideo: "₺300 / video",
    savingsBadge: "%14 Tasarruf",
    featured: false,
    deliverables: [
      "3 TikTok tanıtım videosu",
      "3 farklı içerik kurgusu & senaryo",
      "Ürün / hizmet doğal entegrasyonu",
      "Capitis (@capitis.tr) hesabında yayın",
      "İzleyici yönlendirmesi & net CTA",
      "İçeriklerin birbirini destekleyen seri mantığında hazırlanması",
    ],
    guarantees: [
      "7 gün içinde teslimat",
      "1 kez revizyon hakkı",
      "Ücretsiz keşif görüşmesi",
    ],
    turnaroundDays: 7,
    revisions: 1,
    suitableFor: "Kalıcı marka bilinirliği ve seri anlatım gücünden faydalanmak isteyen vizyoner markalar.",
    ctaText: "Avantajlı Paketi Seç",
  },
];

export const collaborationAddons: AddonService[] = [
  {
    id: "spark_ads",
    title: "Ücretli Reklam (Spark Ads / Whitelist) Lisansı",
    description:
      "Videonun TikTok Ads Manager üzerinde marka tarafından reklam olarak öne çıkarılması için 30 günlük yetkilendirme kodu.",
    pricingNote: "Teklif ile belirlenir",
  },
  {
    id: "fast_delivery",
    title: "Ekspres Teslimat (48–72 Saat)",
    description:
      "Zaman kısıtı olan acil lansman ve duyurularınız için hızlandırılmış prodüksiyon ve teslim takvimi.",
    pricingNote: "Paket tutarının +%30'u",
  },
  {
    id: "extra_revision",
    title: "Ek Revizyon Turu",
    description:
      "Paket kapsamındaki 1 standart revizyona ek olarak talep edilen ekstra kurgu/metin düzenleme hakkı.",
    pricingNote: "₺150 / tur",
  },
  {
    id: "raw_footage",
    title: "Ham Görüntü (Raw Footage) Teslimi",
    description:
      "Çekilen dikey 4K ham videoların markanın kendi iç arşivinde ve kreatif ekiplerinde kullanılmak üzere teslimi.",
    pricingNote: "₺250 / video",
  },
  {
    id: "instagram_crosspost",
    title: "Instagram Reels & Story Desteği",
    description:
      "TikTok içeriğinin Instagram @capitis.tr hesabında Reels formatında çapraz paylaşımı ve 24 saatlik Story duyurusu.",
    pricingNote: "Özel teklif ile",
  },
];
