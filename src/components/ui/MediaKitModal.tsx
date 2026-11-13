"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { X, Download, ExternalLink, ChevronLeft, ChevronRight, FileText } from "lucide-react";
import { Button } from "./Button";
import { getAssetPath } from "@/lib/utils";

interface MediaKitModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const PAGES = [
  { num: 1, title: "Kapak & Genel Performans", src: "/images/page_1.png" },
  { num: 2, title: "Markanız Neden Capitis?", src: "/images/page_2.png" },
  { num: 3, title: "İş Birliği Paketleri & Fiyatlar", src: "/images/page_3.png" },
  { num: 4, title: "Nasıl Çalışıyoruz? Süreç", src: "/images/page_4.png" },
  { num: 5, title: "İletişim & Başlangıç", src: "/images/page_5.png" },
];

export const MediaKitModal: React.FC<MediaKitModalProps> = ({ isOpen, onClose }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const pdfDownloadUrl = getAssetPath("/capitis-media-kit.pdf");

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return;
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") setCurrentPage((p) => Math.max(1, p - 1));
      if (e.key === "ArrowRight") setCurrentPage((p) => Math.min(PAGES.length, p + 1));
    };

    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/90 backdrop-blur-xl animate-in fade-in duration-200"
    >
      <div className="relative w-full max-w-4xl max-h-[92vh] flex flex-col rounded-3xl bg-[#090b10] border border-neutral-800 shadow-2xl overflow-hidden">
        {/* Üst Bar */}
        <div className="flex items-center justify-between px-5 py-4 border-b border-neutral-800 bg-neutral-950/80">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-amber-400/10 border border-amber-400/20 flex items-center justify-center text-amber-400">
              <FileText className="w-4 h-4" />
            </div>
            <div>
              <h3 className="text-sm sm:text-base font-bold text-white leading-tight">
                CAPİTİS — Resmi Medya Kiti
              </h3>
              <span className="text-[11px] font-mono text-neutral-400">
                Sayfa {currentPage} / {PAGES.length} · {PAGES[currentPage - 1].title}
              </span>
            </div>
          </div>

          <div className="flex items-center gap-2">
            {/* Doğrudan İndir Butonu */}
            <a
              href={pdfDownloadUrl}
              download="CAPITIS-Is-Birligi-Paketleri-Media-Kit.pdf"
              className="inline-flex"
            >
              <Button
                size="sm"
                variant="primary"
                leftIcon={<Download className="w-3.5 h-3.5 text-black" />}
              >
                PDF İndir
              </Button>
            </a>

            {/* Yeni Sekmede Aç */}
            <a
              href={pdfDownloadUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-xl bg-neutral-900 border border-neutral-800 text-neutral-300 hover:text-white hover:bg-neutral-800 transition-colors hidden sm:flex items-center justify-center"
              title="Yeni sekmede aç"
            >
              <ExternalLink className="w-4 h-4" />
            </a>

            {/* Kapat Butonu */}
            <button
              type="button"
              onClick={onClose}
              className="p-2 rounded-xl bg-neutral-900 border border-neutral-800 text-neutral-400 hover:text-white hover:bg-neutral-800 transition-colors cursor-pointer"
              aria-label="Kapat"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Orta Alan: Yüksek Çözünürlüklü Sayfa Önizlemesi */}
        <div className="relative flex-1 overflow-y-auto p-4 sm:p-6 flex items-center justify-center bg-black/60">
          <div className="relative max-w-2xl w-full aspect-[1/1.414] rounded-2xl overflow-hidden shadow-2xl border border-neutral-800/80 bg-neutral-950">
            <Image
              src={PAGES[currentPage - 1].src}
              alt={`CAPİTİS Medya Kiti - Sayfa ${currentPage}`}
              fill
              className="object-contain"
              priority
            />
          </div>

          {/* Önceki Sayfa Oku */}
          <button
            type="button"
            onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
            disabled={currentPage === 1}
            className="absolute left-4 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-black/80 border border-neutral-700 text-white hover:bg-neutral-800 hover:border-amber-400 disabled:opacity-30 disabled:cursor-not-allowed transition-all shadow-lg"
            aria-label="Önceki Sayfa"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          {/* Sonraki Sayfa Oku */}
          <button
            type="button"
            onClick={() => setCurrentPage((p) => Math.min(PAGES.length, p + 1))}
            disabled={currentPage === PAGES.length}
            className="absolute right-4 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-black/80 border border-neutral-700 text-white hover:bg-neutral-800 hover:border-amber-400 disabled:opacity-30 disabled:cursor-not-allowed transition-all shadow-lg"
            aria-label="Sonraki Sayfa"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

        {/* Alt Sayfa Seçim Çubuğu */}
        <div className="flex items-center justify-between px-5 py-3 border-t border-neutral-800 bg-neutral-950/80">
          <div className="flex items-center gap-1.5 sm:gap-2">
            {PAGES.map((page) => (
              <button
                type="button"
                key={page.num}
                onClick={() => setCurrentPage(page.num)}
                className={`px-3 py-1 rounded-lg text-xs font-mono transition-all cursor-pointer ${
                  currentPage === page.num
                    ? "bg-amber-400 text-black font-bold shadow-md shadow-amber-400/20"
                    : "bg-neutral-900 border border-neutral-800 text-neutral-400 hover:text-white"
                }`}
              >
                S.{page.num}
              </button>
            ))}
          </div>

          <div className="text-[11px] font-mono text-neutral-400 hidden sm:block">
            Ok tuşları (← →) ile gezinebilirsiniz
          </div>
        </div>
      </div>
    </div>
  );
};
