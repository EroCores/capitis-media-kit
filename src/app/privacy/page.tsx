import React from "react";
import Link from "next/link";
import { siteConfig } from "@/config/site";
import { ArrowLeft, Shield } from "lucide-react";

export const metadata = {
  title: "Gizlilik Politikası | CAPİTİS",
  description: "CAPİTİS resmi web sitesi ve medya kiti gizlilik politikası.",
};

export default function PrivacyPage() {
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
              YASAL BİLGİLENDİRME
            </span>
            <h1 className="text-3xl sm:text-4xl font-black text-white uppercase">
              Gizlilik Politikası
            </h1>
            <p className="text-xs text-neutral-500 font-mono mt-2">
              Son Güncelleme: 13 Kasım 2026
            </p>
          </div>

          <div className="prose prose-invert prose-sm max-w-none space-y-6 text-sm text-neutral-300 leading-relaxed">
            <p>
              CAPİTİS (&ldquo;biz&rdquo;, &ldquo;tarafımız&rdquo;) olarak ziyaretçilerimizin ve iş birliği ortaklarımızın kişisel gizliliğine azami hassasiyeti gösteriyoruz. Bu Gizlilik Politikası, web sitemizi ziyaret ettiğinizde ve iş birliği brief formunu kullandığınızda verilerinizin nasıl ele alındığını açıklar.
            </p>

            <h2 className="text-lg font-bold text-white">1. Hangi Bilgileri Topluyoruz?</h2>
            <p>
              Web sitemiz sunucu tarafında veri tabanı barındırmayan statik bir vitrin sitesidir. Doğrudan tarayıcınız üzerinden sunucuya gizli bir veri kaydı yapılmaz. Yalnızca iş birliği talebinde bulunurken sizin gönüllü olarak doldurduğunuz (Marka Adı, Yetkili Kişi, E-posta, Telefon, Kampanya Notları) bilgiler, sizin onayınızla cihazınızdaki e-posta istemcisi veya WhatsApp uygulaması üzerinden bize aktarılır.
            </p>

            <h2 className="text-lg font-bold text-white">2. Bilgilerin Kullanım Amacı</h2>
            <p>
              Bizimle paylaştığınız iletişim ve kampanya bilgileri yalnızca:
            </p>
            <ul className="list-disc pl-5 space-y-1">
              <li>Talep ettiğiniz iş birliği paketine ilişkin fiyat teklifi hazırlamak,</li>
              <li>İçerik kurgusu ve lansman takvimi hakkında sizinle iletişime geçmek,</li>
              <li>İş birliği sürecini yürütmek ve sözleşme/fatura detaylarını netleştirmek amacıyla kullanılır.</li>
            </ul>

            <h2 className="text-lg font-bold text-white">3. Üçüncü Taraflarla Paylaşım</h2>
            <p>
              Kişisel bilgileriniz hiçbir şart altında üçüncü şahıslara, reklam ağlarına satılmaz veya ticari amaçla devredilmez. Yasal zorunluluklar haricinde bilgileriniz gizli tutulur.
            </p>

            <h2 className="text-lg font-bold text-white">4. Çerezler ve Takip Teknolojileri</h2>
            <p>
              Sitemiz üçüncü taraf reklam takip çerezleri kullanmamaktadır. Detaylı bilgi için Çerez Politikamızı inceleyebilirsiniz.
            </p>

            <h2 className="text-lg font-bold text-white">5. İletişim</h2>
            <p>
              Gizlilik politikamızla ilgili tüm soru ve talepleriniz için{" "}
              <a href={`mailto:${siteConfig.contact.email}`} className="text-amber-400 underline">
                {siteConfig.contact.email}
              </a>{" "}
              adresi üzerinden bize ulaşabilirsiniz.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
