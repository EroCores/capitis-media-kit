"use client";

import React, { useState } from "react";
import { HeroSection } from "@/components/sections/HeroSection";
import { BentoStatsSection } from "@/components/sections/BentoStatsSection";
import { AudienceSection } from "@/components/sections/AudienceSection";
import { WhyCapitisSection } from "@/components/sections/WhyCapitisSection";
import { ContentShowcaseSection } from "@/components/sections/ContentShowcaseSection";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { PackagesSection } from "@/components/sections/PackagesSection";
import { ProcessSection } from "@/components/sections/ProcessSection";
import { TrustSection } from "@/components/sections/TrustSection";
import { FaqSection } from "@/components/sections/FaqSection";
import { ContactSection } from "@/components/sections/ContactSection";

export default function HomePage() {
  const [selectedPackage, setSelectedPackage] = useState<string>("starter");

  return (
    <div className="relative overflow-hidden">
      {/* 1. Hero Bölümü */}
      <HeroSection />

      {/* 2. TikTok İstatistikleri & Bento Grid */}
      <BentoStatsSection />

      {/* 3. Kitle Analitiği & Demografi */}
      <AudienceSection />

      {/* 4. Neden Capitis? Stratejik Değer */}
      <WhyCapitisSection />

      {/* 5. İçerik Dünyamız & Video Vitrini */}
      <ContentShowcaseSection />

      {/* 6. İş Birliği Türleri & Hizmetler */}
      <ServicesSection />

      {/* 7. İş Birliği Paketleri & Ek Hizmetler */}
      <PackagesSection onSelectPackage={(pkgId) => setSelectedPackage(pkgId)} />

      {/* 8. Nasıl Çalışıyoruz? Adım Adım Süreç */}
      <ProcessSection />

      {/* 9. Güvenli İş Birliği Prensipleri */}
      <TrustSection />

      {/* 10. Sıkça Sorulan Sorular */}
      <FaqSection />

      {/* 11. Brief / Teklif Formu & İletişim */}
      <ContactSection selectedPackage={selectedPackage} />
    </div>
  );
}
