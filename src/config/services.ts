import { CollaborationService } from "@/types";

export const collaborationServices: CollaborationService[] = [
  {
    id: "tiktok_sponsored",
    title: "Sponsorlu TikTok Entegrasyonu",
    badge: "Ana Hizmet",
    description:
      "Ürününüzün veya hizmetinizin Capitis'in vizyoner ve motive edici zihniyet anlatımı içerisine organik olarak yedirildiği dikey video içerikleri.",
    highlights: [
      "Doğal entegrasyon mantığı",
      "Yüksek izleyici tamamlama oranı odağı",
      "Yorumlarda aktif etkileşim yönetimi",
      "Capitis hesabında kalıcı yayın",
    ],
  },
  {
    id: "series_campaign",
    title: "Seri İçerik Kampanyası",
    badge: "Yüksek Etki",
    description:
      "Tek seferlik görünüm yerine izleyicinin zihninde süreklilik ve güven oluşturan 2-3 videoluk tematik anlatım serisi.",
    highlights: [
      "Birbiriyle bağlantılı senaryo kurgusu",
      "Tekrar eden marka hatırlanırlığı",
      "Farklı kullanım senaryolarının işlenmesi",
      "Kümülatif izlenme ve etkileşim gücü",
    ],
  },
  {
    id: "ugc_production",
    title: "Marka İçi UGC Video Üretimi",
    badge: "Kendi Kanalınız İçin",
    description:
      "Capitis tarzında, samimi ve ikna edici dikey videoların markanızın kendi sosyal medya kanallarında veya reklamlarında kullanılmak üzere üretimi.",
    highlights: [
      "Tam ticari kullanım hakkı",
      "Kendi TikTok/Instagram reklamlarınızda yayın imkanı",
      "Kanca (hook) ve CTA varyasyonları",
      "Ham veya kurgulanmış teslim seçeneği",
    ],
  },
  {
    id: "cross_platform",
    title: "Instagram Reels & Story Desteği",
    badge: "Çok Kanallı",
    description:
      "TikTok'un dinamik gücünü Instagram'ın nitelikli etkileşimiyle birleştirerek kampanyanızın etki alanını genişletin.",
    highlights: [
      "Reels formatına optimize edilmiş yayın",
      "Kaydırmalı link/yönlendirme içeren Story desteği",
      "Profil öne çıkanlarında listelenme seçeneği",
    ],
  },
];
