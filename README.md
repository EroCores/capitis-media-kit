# CAPİTİS — Creator Media Kit & Marka İş Birlikleri Web Platformu

Bu proje, **CAPİTİS** (@capitis.tr) içerik üreticisinin marka iş birlikleri, TikTok performans metrikleri, kitle analitiği ve sponsorluk paketlerini profesyonelce sunan modern web sitesidir.

---

## ⚡ Kullanılan Teknolojiler

- **Framework:** Next.js 16 (App Router, Static Export `output: 'export'`)
- **Kütüphane:** React 19
- **Stil & Tasarım:** Tailwind CSS v4 (Obsidian & Luxury Gold Teması)
- **3D Deneyim:** Three.js (Etkileşimli Geometrik Satranç Taşı ve Parçacık Sahnesi)
- **Akıcı Kaydırma:** Lenis Smooth Scroll
- **İkonlar:** Lucide React
- **Tip & Şema Doğrulama:** TypeScript (Strict Mode) & Zod
- **Birim Testler:** Vitest

---

## 🚀 Hızlı Başlangıç

### Gereksinimler
- Node.js 18+ (Node 20 veya 24 önerilir)
- npm veya pnpm

### Kurulum ve Çalıştırma

```bash
# Bağımlılıkları yükleyin
npm install

# Geliştirme sunucusunu başlatın (http://localhost:3000)
npm run dev

# TypeScript tip kontrolü
npm run typecheck

# Birim testleri çalıştırın
npm run test

# Üretim için statik derleme (out/ klasörü üretir)
npm run build
```

---

## 📁 Proje Klasör Mimarisi

```text
├── docs/                      # Güncelleme, yayınlama ve performans rehberleri
├── public/                    # Statik medya ve ikonlar
├── src/
│   ├── app/                   # Next.js App Router sayfaları ve yasal rotalar
│   │   ├── privacy/           # Gizlilik Politikası
│   │   ├── kvkk/              # KVKK Aydınlatma Metni
│   │   ├── cookies/           # Çerez Bilgilendirmesi
│   │   ├── terms/             # Hizmet & İş Birliği Koşulları
│   │   ├── globals.css        # Tasarım tokenları & cam efektleri
│   │   └── page.tsx           # Ana landing page
│   ├── components/            # Yeniden kullanılabilir modüler bileşenler
│   │   ├── forms/             # Brief formu ve veri doğrulama
│   │   ├── layout/            # Header, Footer
│   │   ├── motion/            # Lenis akıcı kaydırma
│   │   ├── sections/          # Hero, Bento, Kitle, Paketler, Süreç vb.
│   │   ├── three/             # 3D Three.js Sahnesi
│   │   └── ui/                # Buton, Rozet, Logo, Başlıklar
│   ├── config/                # MERKEZİ VERİ YÖNETİMİ
│   │   ├── site.ts            # Marka & İletişim bilgileri
│   │   ├── metrics.ts         # Doğrulanmış TikTok Studio analitiği
│   │   ├── packages.ts        # Paketler, fiyatlar ve ek hizmetler
│   │   ├── services.ts        # İş birliği modelleri
│   │   └── faq.ts             # Sıkça sorulan sorular
│   ├── lib/                   # Yardımcı araçlar, format ve doğrulama
│   └── types/                 # TypeScript veri modelleri
└── tests/                     # Vitest birim testleri
```

---

## 📄 Dokümantasyon Bağlantıları

- [İçerik ve Fiyat Güncelleme Rehberi](docs/CONTENT_UPDATE_GUIDE.md)
- [Yayınlama ve Dağıtım Rehberi](docs/DEPLOYMENT.md)
- [Performans Raporu](docs/PERFORMANCE.md)

---

## ⚖️ Lisans & Telif

© 2026 CAPİTİS. Tüm hakları saklıdır.
