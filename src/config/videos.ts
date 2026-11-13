export interface ShowcaseVideo {
  id: string;
  title: string;
  category: "Disiplin" | "Motivasyon" | "Mindset" | "Vizyon" | "İrade";
  summary: string;
  hook: string;
  tiktokUrl: string;
  thumbnailPlaceholderColor: string;
}

export const showcaseVideos: ShowcaseVideo[] = [
  {
    id: "v1",
    title: "Zihin Setini Sıradanlıktan Kurtar",
    category: "Mindset",
    hook: "Çoğu insan sadece bekler; kazananlar ise stratejisini sessizce kurar.",
    summary: "Günlük rutinlerin ve zihinsel sınırların ötesine geçme stratejisi.",
    tiktokUrl: "https://www.tiktok.com/@capitis.tr",
    thumbnailPlaceholderColor: "from-amber-950/40 via-neutral-900 to-black",
  },
  {
    id: "v2",
    title: "Disiplin Motivasyondan Üstündür",
    category: "Disiplin",
    hook: "Motivasyon sana sadece 2 gün verir, disiplin ise bütün bir hayatı inşa eder.",
    summary: "Duygulara kapılmadan her gün yapılması gerekeni yapmanın gücü.",
    tiktokUrl: "https://www.tiktok.com/@capitis.tr",
    thumbnailPlaceholderColor: "from-zinc-900 via-neutral-900 to-black",
  },
  {
    id: "v3",
    title: "Sessiz Hamleler, Büyük Sonuçlar",
    category: "Vizyon",
    hook: "Planlarını herkese anlatma; sadece sonuçlarınla konuş.",
    summary: "Stratejik suskunluk ve hedefe kilitlenmiş odaklanma felsefesi.",
    tiktokUrl: "https://www.tiktok.com/@capitis.tr",
    thumbnailPlaceholderColor: "from-stone-900 via-neutral-950 to-black",
  },
  {
    id: "v4",
    title: "İradeni Her Gün Yeniden İnşa Et",
    category: "İrade",
    hook: "Kolay olan yolu seçtiğin her an, gelecekteki potansiyelinden çalıyorsun.",
    summary: "Zorluklar karşısında geri adım atmayan çelik gibi bir irade.",
    tiktokUrl: "https://www.tiktok.com/@capitis.tr",
    thumbnailPlaceholderColor: "from-neutral-900 via-zinc-950 to-black",
  },
];
