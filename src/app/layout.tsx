import type { Metadata } from "next";
import "./globals.css";
import { siteConfig } from "@/config/site";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { SmoothScroll } from "@/components/motion/SmoothScroll";

export const metadata: Metadata = {
  title: "CAPİTİS | Creator Media Kit & Marka İş Birlikleri",
  description:
    "Zihin setini sıradanlıktan kurtar. Vizyon, disiplin ve irade üzerine içeriklerle markaların doğru kitleyle doğal bir bağ kurmasını sağlayan resmi creator medya kiti ve iş birliği paketleri.",
  keywords: [
    "Capitis",
    "TikTok İş Birliği",
    "Creator Media Kit",
    "Motivasyon",
    "Kişisel Gelişim",
    "Disiplin",
    "İrade",
    "Influencer Pazarlaması",
    "UGC Video",
  ],
  authors: [{ name: "CAPİTİS" }],
  creator: "CAPİTİS",
  metadataBase: new URL("https://capitis.tr"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "CAPİTİS | Creator Media Kit & Marka İş Birlikleri",
    description:
      "Zihin setini sıradanlıktan kurtar. Doğrulanmış TikTok verileri, kitle analitiği ve iş birliği paketleri.",
    url: "https://capitis.tr",
    siteName: "CAPİTİS",
    locale: "tr_TR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "CAPİTİS | Creator Media Kit",
    description: "Zihin setini sıradanlıktan kurtar. Creator iş birliği paketleri.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr" className="dark scroll-smooth">
      <head>
        <meta name="theme-color" content="#07080b" />
      </head>
      <body className="min-h-screen bg-[#07080b] text-[#f5f4ef] antialiased selection:bg-amber-400 selection:text-black">
        <SmoothScroll>
          <Header />
          <main className="relative">{children}</main>
          <Footer />
        </SmoothScroll>
      </body>
    </html>
  );
}
