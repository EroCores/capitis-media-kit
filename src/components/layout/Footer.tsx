import React from "react";
import Link from "next/link";
import { Logo } from "@/components/ui/Logo";
import { siteConfig } from "@/config/site";
import { Mail, ArrowUpRight, Download } from "lucide-react";
import { getAssetPath } from "@/lib/utils";

export const Footer: React.FC = () => {
  return (
    <footer className="border-t border-white/[0.06] bg-black/90 pt-14 pb-10 text-neutral-400 no-print">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 pb-10 border-b border-neutral-900">
          {/* Kolon 1-2: Marka Kimliği */}
          <div className="lg:col-span-2 space-y-3">
            <Logo size="md" />
            <p className="text-xs sm:text-sm text-neutral-400 max-w-sm leading-relaxed">
              {siteConfig.tagline} Vizyon, disiplin ve irade üzerine inşa edilen stratejik video içerikleriyle markaları nitelikli kitlelerle buluşturuyoruz.
            </p>
            <div className="pt-2 flex flex-wrap items-center gap-2">
              <a
                href={siteConfig.tiktok.url}
                target="_blank"
                rel="noopener noreferrer"
                className="px-3 py-1 rounded-lg bg-neutral-900 border border-neutral-800 text-xs font-mono text-neutral-300 hover:text-white hover:border-amber-400/50 transition-all flex items-center gap-1.5"
              >
                <span>TikTok: {siteConfig.tiktok.handle}</span>
                <ArrowUpRight className="w-3 h-3 text-neutral-500" />
              </a>

              <a
                href={siteConfig.instagram.url}
                target="_blank"
                rel="noopener noreferrer"
                className="px-3 py-1 rounded-lg bg-neutral-900 border border-neutral-800 text-xs font-mono text-neutral-300 hover:text-white hover:border-amber-400/50 transition-all flex items-center gap-1.5"
              >
                <span>Instagram: {siteConfig.instagram.handle}</span>
                <ArrowUpRight className="w-3 h-3 text-neutral-500" />
              </a>
            </div>
          </div>

          {/* Kolon 3: Navigasyon */}
          <div>
            <h4 className="text-xs font-mono uppercase tracking-[0.2em] text-white font-semibold mb-3">
              BÖLÜMLER
            </h4>
            <ul className="space-y-1.5 text-xs">
              <li>
                <a href="#istatistikler" className="hover:text-amber-400 transition-colors">
                  TikTok Metrikleri
                </a>
              </li>
              <li>
                <a href="#kitle" className="hover:text-amber-400 transition-colors">
                  Kitle Demografisi
                </a>
              </li>
              <li>
                <a href="#avantajlar" className="hover:text-amber-400 transition-colors">
                  Neden Capitis?
                </a>
              </li>
              <li>
                <a href="#icerikler" className="hover:text-amber-400 transition-colors">
                  İçerik Vitrini
                </a>
              </li>
              <li>
                <a href="#paketler" className="hover:text-amber-400 transition-colors">
                  İş Birliği Paketleri
                </a>
              </li>
              <li>
                <a href="#sss" className="hover:text-amber-400 transition-colors">
                  Sıkça Sorulan Sorular
                </a>
              </li>
            </ul>
          </div>

          {/* Kolon 4: Yasal & Kaynaklar */}
          <div>
            <h4 className="text-xs font-mono uppercase tracking-[0.2em] text-white font-semibold mb-3">
              KAYNAKLAR
            </h4>
            <ul className="space-y-1.5 text-xs">
              <li>
                <a
                  href={getAssetPath("/capitis-media-kit.pdf")}
                  download="CAPITIS-Is-Birligi-Paketleri-Media-Kit.pdf"
                  className="text-amber-400 hover:text-amber-300 flex items-center gap-1 font-medium"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>Medya Kiti (PDF)</span>
                </a>
              </li>
              <li>
                <Link href="/privacy" className="hover:text-amber-400 transition-colors">
                  Gizlilik Politikası
                </Link>
              </li>
              <li>
                <Link href="/kvkk" className="hover:text-amber-400 transition-colors">
                  KVKK Aydınlatma
                </Link>
              </li>
              <li>
                <Link href="/cookies" className="hover:text-amber-400 transition-colors">
                  Çerez Politikası
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
            <h4 className="text-xs font-mono uppercase tracking-[0.2em] text-white font-semibold mb-3">
              RESMİ İLETİŞİM
            </h4>
            <ul className="space-y-2.5 text-xs">
              <li>
                <a
                  href={`mailto:${siteConfig.contact.email}`}
                  className="flex items-center gap-2 hover:text-white transition-colors"
                >
                  <Mail className="w-3.5 h-3.5 text-amber-400" />
                  <span>{siteConfig.contact.email}</span>
                </a>
              </li>
              <li className="text-[11px] text-neutral-500 pt-1">
                İş birliği brieflerinizi e-posta veya web formu üzerinden iletebilirsiniz.
              </li>
            </ul>
          </div>
        </div>

        {/* Alt Satır */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px] text-neutral-500 font-mono">
          <p>{siteConfig.copyright}</p>
          <p>
            VİZYON · DİSİPLİN · İRADE — Resmi Creator Medya Kiti
          </p>
        </div>
      </div>
    </footer>
  );
};
