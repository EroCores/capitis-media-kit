# CAPİTİS — Yayınlama (Deployment) Rehberi

Bu proje Next.js 16 App Router mimarisinde geliştirilmiş olup `output: "export"` ile tamamen **statik HTML/CSS/JS** olarak derlenir. Veritabanı veya Node.js sunucu gereksinimi olmadan her yerde ücretsiz barındırılabilir.

---

## 1. Statik Çıktı Üretme (Build)

Projeyi derlemek için terminalde şu komutu çalıştırın:

```bash
npm run build
```

Bu işlem tamamlandığında projenin kök dizininde `out/` klasörü oluşur. Bu klasör sitenin yayınlanmaya hazır nihai halidir.

---

## 2. GitHub Pages ile Yayınlama

1. GitHub'da `capitis-website` adında yeni bir repository açın.
2. Kodları bu depoya yükleyin (`git push origin main`).
3. Repository sayfasında **Settings -> Pages** sekmesine gidin.
4. **Build and deployment -> Source** kısmından **GitHub Actions** seçeneğini seçin veya `out/` klasörünü `gh-pages` branch'ine gönderin.

---

## 3. Cloudflare Pages ile Yayınlama (Önerilen - Ücretsiz & Hızlı)

1. Cloudflare kontrol paneline giriş yapın.
2. **Workers & Pages -> Create application -> Pages -> Connect to Git** adımlarını izleyin.
3. Projenizi seçin:
   - **Framework preset:** Next.js (Static HTML Export)
   - **Build command:** `npm run build`
   - **Build output directory:** `out`
4. "Save and Deploy" butonuna tıklayın. Siteniz global CDN üzerinde saniyeler içinde yayına girer.

---

## 4. Vercel ile Yayınlama

1. [Vercel](https://vercel.com) hesabınıza giriş yapıp projenizi içe aktarın.
2. Next.js otomatik olarak algılanır, hiçbir ayarı değiştirmeden "Deploy" butonuna basın.
