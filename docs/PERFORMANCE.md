# CAPİTİS — Performans ve Erişilebilirlik Raporu

## 1. Mimari Kararlar ve Optimizasyonlar

- **Dinamik 3D Yükleme:** Three.js sahnesi `dynamic import` ile yalnızca istemci tarafında ve kritik ilk çizim (FCP/LCP) tamamlandıktan sonra yüklenir.
- **Erişilebilirlik & Reduced Motion:** `prefers-reduced-motion: reduce` tercih eden kullanıcılar için Lenis akıcı kaydırma ve Three.js animasyonları otomatik olarak devre dışı bırakılır veya minimal moda alınır.
- **WebGL Desteği:** Donanım ivmelendirmesi olmayan cihazlarda otomatik olarak 2D SVG fallback devreye girer.
- **Sıfır Sunucu Yükü:** Statik export mimarisi sayesinde TTFB (Time to First Byte) CDN hızında en aza indirilmiştir.
- **Tabular Numbers:** Tüm istatistik ve metrik kartlarında font sıçramasını önleyen `tabular-nums` uygulanmıştır.
