import React from "react";
import Link from "next/link";
import { siteConfig } from "@/config/site";
import { ArrowLeft } from "lucide-react";

export const metadata = {
  title: "Çerez Politikası | CAPİTİS",
  description: "CAPİTİS web platformu çerez ve depolama bilgilendirmesi.",
};

export default function CookiesPage() {
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
              BİLGİLENDİRME
            </span>
            <h1 className="text-3xl sm:text-4xl font-black text-white uppercase">
              Çerez (Cookie) Politikası
            </h1>
            <p className="text-xs text-neutral-500 font-mono mt-2">
              Son Güncelleme: 13 Kasım 2026
            </p>
          </div>

          <div className="space-y-6 text-sm text-neutral-300 leading-relaxed">
            <p>
              CAPİTİS web sitesi olarak kullanıcı deneyiminizi en yüksek hız ve güvenlik seviyesinde tutmayı amaçlıyoruz.
            </p>

            <h2 className="text-lg font-bold text-white">1. Çerez Kullanımı</h2>
            <p>
              Sitemiz üçüncü taraf reklam hedefleme çerezleri veya profil çıkarma (profiling) pikselleri barındırmaz. Yalnızca web sitesinin teknik olarak çalışması, modern tarayıcı önbelleklemesi (caching) ve form alanı tercihlerinizin tarayıcı oturumunuzda tutulması amacıyla zorunlu teknik veriler kullanılabilir.
            </p>

            <h2 className="text-lg font-bold text-white">2. Çerezleri Nasıl Kontrol Edebilirsiniz?</h2>
            <p>
              Dilediğiniz zaman tarayıcınızın ayarlarından çerezleri silebilir veya tamamen devre dışı bırakabilirsiniz. Sitemiz statik mimaride geliştirildiği için çerezleri engellemeniz durumunda bile sayfalarımız eksiksiz görüntülenecektir.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
