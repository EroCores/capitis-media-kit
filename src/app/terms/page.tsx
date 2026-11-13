import React from "react";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export const metadata = {
  title: "Kullanım Koşulları & İş Birliği Şartları | CAPİTİS",
  description: "CAPİTİS iş birliği paketleri, lisanslama ve çalışma şartları.",
};

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-[#07080b] text-neutral-300 py-24 sm:py-32">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-xs font-mono text-amber-400 hover:text-amber-300 mb-8"
        >
          <ArrowLeft className="w-4 h-4" /> Ana Sayfaya Dön
        </Link>

        <div className="glass-panel p-8 sm:p-12 rounded-3xl space-y-8">
          <div className="border-b border-neutral-800 pb-6">
            <span className="text-xs font-mono text-amber-400 tracking-widest uppercase block mb-2">
              HİZMET ŞARTLARI
            </span>
            <h1 className="text-3xl sm:text-4xl font-black text-white uppercase">
              İş Birliği & Kullanım Koşulları
            </h1>
            <p className="text-xs text-neutral-500 font-mono mt-2">
              Son Güncelleme: 13 Kasım 2026
            </p>
          </div>

          <div className="space-y-6 text-sm text-neutral-300 leading-relaxed">
            <h2 className="text-lg font-bold text-white">1. Kapsam ve Başlangıç</h2>
            <p>
              Tüm iş birlikleri karşılıklı yazılı mutabakat (e-posta veya sözleşme) ile kesinleşir. İş başlangıcında toplam bütçenin %50&apos;si avans olarak tahsil edilir; kalan %50 bakiye ise içerik onaylanıp yayına alınmadan önce ödenir.
            </p>

            <h2 className="text-lg font-bold text-white">2. Revizyon Sınırları</h2>
            <p>
              Paketlerde aksi belirtilmedikçe her video için 1 (bir) ücretsiz revizyon hakkı bulunmaktadır. Revizyon, onaylanmış senaryo çerçevesindeki kurgu, ses veya altyazı düzenlemelerini kapsar. Sıfırdan yeni bir senaryo çekimi ek ücrete tabidir.
            </p>

            <h2 className="text-lg font-bold text-white">3. Fikri Mülkiyet ve Yayın Hakları</h2>
            <p>
              Standart paketler, içeriğin yalnızca CAPİTİS hesaplarında organik yayınını kapsar. Markanın videoyu kendi reklam hesaplarında ücretli öne çıkarması (Spark Ads) veya kendi sosyal medya kanallarında yayınlaması ek lisanslamaya tabidir.
            </p>

            <h2 className="text-lg font-bold text-white">4. Reklam Mevzuatı ve Şeffaflık</h2>
            <p>
              Tüm paylaşımlarda Ticaret Bakanlığı ve ilgili yasal mevzuat uyarınca &ldquo;#işbirliği&rdquo; veya &ldquo;#reklam&rdquo; etiketleri açıkça kullanılır.
            </p>

            <h2 className="text-lg font-bold text-white">5. Garanti Beyanı</h2>
            <p>
              Capitis, en yüksek kalitede çekim ve algoritmik kurgu optimizasyonu taahhüt eder. Ancak sosyal medya algoritmalarının dinamik yapısı gereği kesin izlenme sayısı, tıklama veya doğrudan satış garantisi verilmemektedir.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
