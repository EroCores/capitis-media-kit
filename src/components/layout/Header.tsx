"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Logo } from "@/components/ui/Logo";
import { Button } from "@/components/ui/Button";
import { Menu, X, ArrowUpRight, Sparkles, Download } from "lucide-react";

const NAV_LINKS = [
  { label: "İstatistikler", href: "#istatistikler" },
  { label: "Kitle", href: "#kitle" },
  { label: "Neden Capitis", href: "#avantajlar" },
  { label: "İçerikler", href: "#icerikler" },
  { label: "Paketler", href: "#paketler" },
  { label: "Süreç", href: "#surec" },
  { label: "SSS", href: "#sss" },
];

export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };

    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [mobileMenuOpen]);

  const handleLinkClick = (href: string) => {
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 no-print ${
        isScrolled
          ? "bg-[#050507]/90 backdrop-blur-md border-b border-white/[0.06] py-2.5 shadow-xl shadow-black/50"
          : "bg-transparent py-4"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <Logo size="md" />

          {/* Desktop Nav */}
          <nav
            className="hidden lg:flex items-center gap-1 px-3 py-1.5 rounded-full bg-neutral-900/60 border border-white/[0.06] backdrop-blur-md"
            aria-label="Ana Menü"
          >
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleLinkClick(link.href);
                }}
                className="px-3 py-1 text-xs font-medium text-neutral-300 hover:text-white hover:bg-white/[0.06] rounded-full transition-all"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden sm:flex items-center gap-2.5">
            <a
              href="/capitis-media-kit.pdf"
              download="CAPITIS-Creator-Media-Kit.pdf"
              className="px-3 py-1.5 rounded-xl border border-white/[0.08] hover:border-amber-400/50 text-xs font-mono text-neutral-300 hover:text-white transition-all flex items-center gap-1.5 bg-neutral-900/50"
              title="Medya Kitini PDF İndir"
            >
              <Download className="w-3.5 h-3.5 text-amber-400" />
              <span>PDF Kit</span>
            </a>

            <a
              href="#iletisim"
              onClick={(e) => {
                e.preventDefault();
                handleLinkClick("#iletisim");
              }}
            >
              <Button
                size="sm"
                variant="primary"
                className="btn-aurora"
                leftIcon={<Sparkles className="w-3.5 h-3.5 text-black" />}
                rightIcon={<ArrowUpRight className="w-3.5 h-3.5 text-black" />}
              >
                İş Birliği Başlat
              </Button>
            </a>
          </div>

          {/* Mobile Menu Trigger */}
          <div className="flex sm:hidden items-center gap-2">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl bg-neutral-900/80 border border-neutral-800 text-neutral-200 hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-400"
              aria-expanded={mobileMenuOpen}
              aria-label={mobileMenuOpen ? "Menüyü kapat" : "Menüyü aç"}
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 top-[56px] bg-black/95 backdrop-blur-xl z-40 sm:hidden flex flex-col p-6 animate-in fade-in duration-200 overflow-y-auto"
        >
          <nav className="flex flex-col gap-1.5 mt-2" aria-label="Mobil Menü">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleLinkClick(link.href);
                }}
                className="px-4 py-2.5 text-base font-medium text-neutral-200 hover:text-amber-400 hover:bg-neutral-900/60 rounded-xl transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="mt-6 pt-5 border-t border-neutral-800 flex flex-col gap-2.5">
            <a
              href="/capitis-media-kit.pdf"
              download="CAPITIS-Creator-Media-Kit.pdf"
              className="w-full py-3 px-4 rounded-xl border border-neutral-700 bg-neutral-900 text-sm font-medium text-center text-white flex items-center justify-center gap-2"
            >
              <Download className="w-4 h-4 text-amber-400" />
              <span>Medya Kitini İndir (PDF)</span>
            </a>

            <a
              href="#iletisim"
              onClick={(e) => {
                e.preventDefault();
                handleLinkClick("#iletisim");
              }}
              className="w-full"
            >
              <Button
                size="lg"
                variant="primary"
                className="w-full justify-center btn-aurora"
                rightIcon={<ArrowUpRight className="w-4 h-4 text-black" />}
              >
                İş Birliği Başlat
              </Button>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
