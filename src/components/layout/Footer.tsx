import React from "react";
import Link from "next/link";
import { Logo } from "@/components/ui/Logo";
import { siteConfig } from "@/config/site";
import { Mail, MessageCircle, ArrowUpRight } from "lucide-react";

export const Footer: React.FC = () => {
  return (
    <footer className="border-t border-neutral-900 bg-black/80 pt-16 pb-12 text-neutral-400 no-print">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-neutral-850">
          {/* Kolon 1-2: Marka Kimliği */}
          <div className="lg:col-span-2 space-y-4">
            <Logo size="md" />
            <p className="text-xs sm:text-sm text-neutral-400 max-w-sm leading-relaxed mt-2">
              {siteConfig.tagline} Vizyon, disiplin ve irade üzerine inşa edilen stratejik video içerikleriyle markaları nitelikli kitlelerle buluşturuyoruz.
            </p>
            <div className="pt-2 flex items-center gap-3">
              <a
                href={siteConfig.tiktok.url}
                target="_blank"
                rel="noopener noreferrer"
                className="px-3 py-1.5 rounded-xl bg-neutral-900 border border-neutral-800 text-xs font-mono text-neutral-300 hover:text-white hover:border-amber-400/50 transition-all flex items-center gap-1.5"
              >
                <span>TikTok: {siteConfig.tiktok.handle}</span>
                <ArrowUpRight className="w-3 h-3 text-neutral-500" />
              </a>

              <a
                href={siteConfig.instagram.url}
                target="_blank"
                rel="noopener noreferrer"
                className="px-3 py-1.5 rounded-xl bg-neutral-900 border border-neutral-800 text-xs font-mono text-neutral-300 hover:text-white hover:border-amber-400/50 transition-all flex items-center gap-1.5"
              >
                <span>Instagram: {siteConfig.instagram.handle}</span>
                <ArrowUpRight className="w-3 h-3 text-neutral-500" />
              </a>
            </div>
          </div>

          {/* Kolon 3: Navigasyon */}
          <div>
            <h4 className="text-xs font-mono uppercase tracking-[0.2em] text-white font-semibold mb-4">
              BÖLÜMLER
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#istatistikler" className="hover:text-amber-400 transition-colors">
                  TikTok Metrikleri
                </a>
              </li>
              <li>
                <a href="#kitle" className="hover:text-amber-400 transition-colors">
                  Kitle & Yaş Demografisi
                </a>
              </li>
              <li>
                <a href="#avantajlar" className="hover:text-amber-400 transition-colors">
                  Neden Capitis?
                </a>
              </li>
              <li>
                <a href="#icerikler" className="hover:text-amber-400 transition-colors">
                  İçerik Dünyamız
                </a>
              </li>
              <li>
                <a href="#paketler" className="hover:text-amber-400 transition-colors">
                  İş Birliği Paketleri
                </a>
              </li>
              <li>
                <a href="#surec" className="hover:text-amber-400 transition-colors">
                  Çalışma Süreci
                </a>
              </li>
              <li>
                <a href="#sss" className="hover:text-amber-400 transition-colors">
                  Sıkça Sorulan Sorular
                </a>
              </li>
            </ul>
          </div>

          {/* Kolon 4: Yasal Bilgilendirme */}
          <div>
            <h4 className="text-xs font-mono uppercase tracking-[0.2em] text-white font-semibold mb-4">
              YASAL & GÜVENCE
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <Link href="/privacy" className="hover:text-amber-400 transition-colors">
                  Gizlilik Politikası
                </Link>
              </li>
              <li>
                <Link href="/kvkk" className="hover:text-amber-400 transition-colors">
                  KVKK Aydınlatma Metni
                </Link>
              </li>
              <li>
                <Link href="/cookies" className="hover:text-amber-400 transition-colors">
                  Çerez Bilgilendirmesi
                </Link>
              </li>
              <li>
                <Link href="/terms" className="hover:text-amber-400 transition-colors">
                  Kullanım Koşulları
                </Link>
              </li>
            </ul>
          </div>

          {/* Kolon 5: Doğrudan İletişim */}
          <div>
            <h4 className="text-xs font-mono uppercase tracking-[0.2em] text-white font-semibold mb-4">
              DOĞRUDAN İLETİŞİM
            </h4>
            <ul className="space-y-3 text-xs">
              <li>
                <a
                  href={`mailto:${siteConfig.contact.email}`}
                  className="flex items-center gap-2 hover:text-white transition-colors"
                >
                  <Mail className="w-3.5 h-3.5 text-amber-400" />
                  <span>{siteConfig.contact.email}</span>
                </a>
              </li>
              <li>
                <a
                  href={siteConfig.contact.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 hover:text-emerald-400 transition-colors"
                >
                  <MessageCircle className="w-3.5 h-3.5 text-emerald-400" />
                  <span>{siteConfig.contact.phoneFormatted}</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Alt Satır: Telif & Beyan */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-neutral-500 font-mono">
          <p>{siteConfig.copyright}</p>
          <p>
            VİZYON · DİSİPLİN · İRADE — Bu site statik olarak derlenmiş resmi creator medya kitidir.
          </p>
        </div>
      </div>
    </footer>
  );
};
