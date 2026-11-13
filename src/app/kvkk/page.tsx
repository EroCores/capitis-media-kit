import React from "react";
import Link from "next/link";
import { siteConfig } from "@/config/site";
import { ArrowLeft } from "lucide-react";

export const metadata = {
  title: "KVKK Aydınlatma Metni | CAPİTİS",
  description: "6698 sayılı Kişisel Verilerin Korunması Kanunu uyarınca aydınlatma metni taslağı.",
};

export default function KvkkPage() {
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
              KVKK AYDINLATMA METNİ TASLAĞI
            </span>
            <h1 className="text-3xl sm:text-4xl font-black text-white uppercase">
              Kişisel Verilerin Korunması ve İşlenmesi
            </h1>
            <p className="text-xs text-neutral-500 font-mono mt-2">
              6698 Sayılı Kanun Kapsamında Bilgilendirme
            </p>
          </div>

          <div className="space-y-6 text-sm text-neutral-300 leading-relaxed">
            <p>
              6698 sayılı Kişisel Verilerin Korunması Kanunu (&ldquo;KVKK&rdquo;) uyarınca, veri sorumlusu sıfatıyla CAPİTİS tarafından işlenen kişisel verileriniz hakkında sizleri bilgilendirmek isteriz.
            </p>

            <h2 className="text-lg font-bold text-white">1. Veri Sorumlusunun Kimliği</h2>
            <p>
              Veri Sorumlusu: CAPİTİS Creator Temsilciliği<br />
              İletişim E-posta: {siteConfig.contact.email}
            </p>

            <h2 className="text-lg font-bold text-white">2. Kişisel Verilerin İşlenme Amaçları</h2>
            <p>
              Tarafınızca form veya doğrudan iletişim kanalları vasıtasıyla paylaşılan ad-soyad, telefon numarası, e-posta adresi ve şirket/marka bilgileri; sponsorluk ve influencer iş birliği tekliflerinin değerlendirilmesi, ticari iletişimin yürütülmesi ve sözleşme süreçlerinin hazırlanması amaçlarıyla sınırlı olarak işlenmektedir.
            </p>

            <h2 className="text-lg font-bold text-white">3. Kişisel Veri Toplamanın Hukuki Sebebi</h2>
            <p>
              Kişisel verileriniz, KVKK madde 5/2-c (&ldquo;Bir sözleşmenin kurulması veya ifasıyla doğrudan doğruya ilgili olması&rdquo;) ve madde 5/2-f (&ldquo;İlgili kişinin temel hak ve özgürlüklerine zarar vermemek kaydıyla meşru menfaat&rdquo;) hukuki sebeplerine dayalı olarak toplanmaktadır.
            </p>

            <h2 className="text-lg font-bold text-white">4. İlgili Kişinin Hakları (Madde 11)</h2>
            <p>
              KVKK&apos;nın 11. maddesi uyarınca veri sahipleri; kişisel verilerinin işlenip işlenmediğini öğrenme, işlenmişse buna ilişkin bilgi talep etme, verilerin silinmesini veya düzeltilmesini isteme haklarına sahiptir. Bu taleplerinizi yukarıda belirtilen e-posta adresine yazılı olarak iletebilirsiniz.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
