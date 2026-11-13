"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Logo } from "@/components/ui/Logo";
import { Button } from "@/components/ui/Button";
import { Menu, X, ArrowUpRight, Sparkles } from "lucide-react";

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

  // Escape tuşu ile mobil menüyü kapatma
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
          ? "bg-[#07080b]/90 backdrop-blur-md border-b border-neutral-800/80 py-3 shadow-xl shadow-black/40"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Logo size="md" />

          {/* Desktop Nav */}
          <nav
            className="hidden lg:flex items-center gap-1 xl:gap-2 px-3 py-1.5 rounded-full bg-neutral-900/60 border border-neutral-800/80 backdrop-blur-sm shadow-inner"
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
                className="px-3 py-1.5 text-xs font-medium text-neutral-300 hover:text-white hover:bg-neutral-800/60 rounded-full transition-all duration-200"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden sm:flex items-center gap-3">
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
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 top-[60px] bg-black/95 backdrop-blur-xl z-40 sm:hidden flex flex-col p-6 animate-in fade-in duration-200 overflow-y-auto"
        >
          <nav className="flex flex-col gap-2 mt-4" aria-label="Mobil Menü">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleLinkClick(link.href);
                }}
                className="px-4 py-3 text-lg font-medium text-neutral-200 hover:text-amber-400 hover:bg-neutral-900/60 rounded-xl transition-colors border border-transparent hover:border-neutral-800"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="mt-8 pt-6 border-t border-neutral-800 flex flex-col gap-3">
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
                className="w-full justify-center"
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
