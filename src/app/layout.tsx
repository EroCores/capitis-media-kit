import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { SmoothScroll } from "@/components/motion/SmoothScroll";

export const metadata: Metadata = {
  title: "CAPİTİS | Medya Kiti & İş Birlikleri",
  description:
    "CAPİTİS ile markanızı doğru kitleye ulaştırın. 2,4M+ organik görüntüleme, %80 For You trafiği ve 18–34 yaş kitlesiyle güçlü iş birliği paketleri.",
  keywords: [
    "Capitis",
    "TikTok İş Birliği",
    "TikTok Sponsorlu Video",
    "Creator Media Kit",
    "Kişisel Gelişim İçerik Üreticisi",
    "Influencer Pazarlaması Türkiye",
    "TikTok UGC Üretimi",
    "Marka İş Birliği Paketleri",
    "Motivasyon İçerik Üreticisi",
    "TikTok Reklam Entegrasyonu",
    "Spark Ads Türkiye",
    "Disiplin Mindset İçerik",
  ],
  authors: [{ name: "CAPİTİS" }],
  creator: "CAPİTİS",
  metadataBase: new URL("https://capitis.tr"),
  alternates: { canonical: "/" },
  openGraph: {
    title: "CAPİTİS | Medya Kiti & İş Birlikleri",
    description:
      "Doğrulanmış TikTok verileri, 2,4M+ görüntüleme, kitle analitiği ve profesyonel iş birliği paketleri.",
    url: "https://capitis.tr",
    siteName: "CAPİTİS",
    locale: "tr_TR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "CAPİTİS | Medya Kiti",
    description: "2,4M+ organik erişim. Creator iş birliği paketleri ve medya kiti.",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr" className="dark scroll-smooth">
      <head>
        <meta name="theme-color" content="#050507" />
        <link rel="icon" href="/favicon.ico" sizes="32x32" />
        <link rel="apple-touch-icon" href="/icons/apple-touch-icon.png" />
      </head>
      <body className="noise-overlay min-h-dvh bg-[#050507] text-[#f0efe8] antialiased selection:bg-amber-400/30 selection:text-amber-100">
        <SmoothScroll>
          <Header />
          <main className="relative">{children}</main>
          <Footer />
        </SmoothScroll>
      </body>
    </html>
  );
}
