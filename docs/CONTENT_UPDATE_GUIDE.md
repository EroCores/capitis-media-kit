# CAPİTİS — İçerik ve Konfigürasyon Güncelleme Rehberi

Bu proje, kod bilmeyen veya teknik detaylarla uğraşmak istemeyen geliştiricilerin dahi web sitesindeki verileri kolayca güncelleyebilmesi için **merkezi konfigürasyon mimarisi** ile tasarlanmıştır.

Tüm içerik yönetimi `src/config/` klasörü altındaki dosyalardan yapılır.

---

## 1. Fiyatları ve Paketleri Değiştirmek
**Dosya:** `src/config/packages.ts`

- **Fiyat güncellemek için:**
  İlgili paketin `price` alanındaki rakamı değiştirin (Örn: `price: 750`). Para birimi otomatik olarak `₺` olarak biçimlendirilir. Fiyatı gizlemek ve teklif formuna yönlendirmek isterseniz `price: null` yapmanız yeterlidir.
- **Paket içeriği ve maddeleri:**
  `deliverables` dizisine yeni maddeler ekleyebilir veya silebilirsiniz.
- **Ek hizmetler:**
  Sayfanın altındaki ek hizmetleri değiştirmek için aynı dosyadaki `collaborationAddons` dizisini düzenleyin.

---

## 2. TikTok İstatistiklerini Güncellemek
**Dosya:** `src/config/metrics.ts`

- **Genel Metrikler (Görüntüleme, Kitle, Paylaşım vb.):**
  `audienceMetrics.overview` altındaki `value` ve `numericValue` değerlerini güncelleyin.
- **Yaş ve Cinsiyet Dağılımı:**
  `viewers.age`, `viewers.gender`, `followers.age` vb. altındaki yüzdeleri güncelleyin.
- **Tarih Etiketi:**
  `sourceDate` alanını en son güncellediğiniz tarihle değiştirin (Örn: `"15 Aralık 2026"`).

---

## 3. Video Vitrinine Yeni Link / İçerik Eklemek
**Dosya:** `src/config/videos.ts`

- `showcaseVideos` dizisindeki elemanların `title`, `hook`, `summary` ve doğrudan TikTok video linki olan `tiktokUrl` adreslerini değiştirebilirsiniz.

---

## 4. İletişim Bilgilerini (E-posta, WhatsApp, Telefon) Değiştirmek
**Dosya:** `src/config/site.ts`

- `siteConfig.contact.email`: Yeni e-posta adresi.
- `siteConfig.contact.phone`: Yeni telefon numarası.
- `siteConfig.contact.whatsappUrl`: WhatsApp yönlendirme bağlantısı (`https://wa.me/90...`).
- Sosyal medya hesap kullanıcı adları ve URL'leri de bu dosyadan yönetilir.
