# -*- coding: utf-8 -*-
"""Generate CAPİTİS Media Kit PDF using fpdf2."""

from fpdf import FPDF
import os

class MediaKitPDF(FPDF):
    """Custom PDF class for CAPİTİS Media Kit."""

    # Color palette
    BG_DARK = (18, 18, 18)
    BG_CARD = (30, 30, 30)
    BG_CARD_HIGHLIGHT = (38, 38, 38)
    GOLD = (212, 175, 55)
    GOLD_LIGHT = (235, 203, 100)
    WHITE = (255, 255, 255)
    LIGHT_GRAY = (200, 200, 200)
    MID_GRAY = (140, 140, 140)
    DARK_GRAY = (80, 80, 80)
    ACCENT_GREEN = (76, 175, 80)

    def __init__(self):
        super().__init__(orientation='P', unit='mm', format='A4')
        self.set_auto_page_break(auto=False)
        # Use system Arial font - supports Turkish characters
        fonts_dir = "C:/Windows/Fonts"
        self.add_font("DejaVu", "", fname=os.path.join(fonts_dir, "arial.ttf"))
        self.add_font("DejaVu", "B", fname=os.path.join(fonts_dir, "arialbd.ttf"))
        self.add_font("DejaVu", "I", fname=os.path.join(fonts_dir, "ariali.ttf"))
        self.add_font("DejaVu", "BI", fname=os.path.join(fonts_dir, "arialbi.ttf"))

    def dark_page(self):
        """Fill entire page with dark background."""
        self.set_fill_color(*self.BG_DARK)
        self.rect(0, 0, 210, 297, 'F')

    def draw_rounded_rect(self, x, y, w, h, r, color):
        """Draw a filled rounded rectangle approximation."""
        self.set_fill_color(*color)
        # Main body
        self.rect(x + r, y, w - 2 * r, h, 'F')
        self.rect(x, y + r, w, h - 2 * r, 'F')
        # Corners (circles)
        for cx, cy in [(x + r, y + r), (x + w - r, y + r),
                        (x + r, y + h - r), (x + w - r, y + h - r)]:
            self.ellipse(cx - r, cy - r, 2 * r, 2 * r, 'F')

    def gold_line(self, y, width=60):
        """Draw a centered gold accent line."""
        self.set_draw_color(*self.GOLD)
        self.set_line_width(0.8)
        x = (210 - width) / 2
        self.line(x, y, x + width, y)

    def centered_text(self, y, text, font_family="DejaVu", style="", size=12, color=None):
        """Draw centered text at a given y position."""
        if color is None:
            color = self.WHITE
        self.set_font(font_family, style, size)
        self.set_text_color(*color)
        tw = self.get_string_width(text)
        self.text((210 - tw) / 2, y, text)

    # ─── PAGE 1: COVER ───────────────────────────────────────────
    def page_cover(self):
        self.add_page()
        self.dark_page()

        # Top decorative gold lines
        self.set_draw_color(*self.GOLD)
        self.set_line_width(0.3)
        self.line(30, 30, 180, 30)
        self.line(30, 32, 180, 32)

        # Small diamond/dot accent
        self.set_fill_color(*self.GOLD)
        self.ellipse(102, 42, 6, 6, 'F')

        # Title
        self.centered_text(75, "CAPİTİS", size=48, style="B", color=self.GOLD)

        # Subtitle
        self.gold_line(85, 80)
        self.centered_text(100, "Creator Media Kit & İş Birliği Rehberi", size=14, color=self.LIGHT_GRAY)

        # Tagline
        self.centered_text(120, "Vizyon · Disiplin · İrade", size=16, style="B", color=self.WHITE)

        # Mission
        self.set_fill_color(*self.BG_CARD)
        self.draw_rounded_rect(40, 132, 130, 22, 4, self.BG_CARD)
        self.centered_text(146, "Zihin setini sıradanlıktan kurtar.", size=13, style="I", color=self.GOLD_LIGHT)

        # Contact info block
        self.gold_line(175, 50)

        contacts = [
            ("TikTok", "@capitis.tr"),
            ("E-posta", "iletisim.capitis@gmail.com"),
            ("WhatsApp", "+90 538 244 51 77"),
        ]
        y_start = 188
        for i, (label, value) in enumerate(contacts):
            y = y_start + i * 12
            full = f"{label}: {value}"
            self.centered_text(y, full, size=10, color=self.LIGHT_GRAY)

        # Date
        self.gold_line(230, 40)
        self.centered_text(242, "Kasım 2026", size=12, style="B", color=self.GOLD)

        # Bottom decorative lines
        self.set_draw_color(*self.GOLD)
        self.set_line_width(0.3)
        self.line(30, 265, 180, 265)
        self.line(30, 267, 180, 267)

    # ─── PAGE 2: PERFORMANCE METRICS ─────────────────────────────
    def page_metrics(self):
        self.add_page()
        self.dark_page()

        # Header
        self.centered_text(28, "İçerik Performansı", size=24, style="B", color=self.GOLD)
        self.centered_text(38, "Son 365 Gün", size=14, color=self.LIGHT_GRAY)
        self.gold_line(44, 70)

        metrics = [
            ("2,4M+", "Video Görüntülenmesi", self.GOLD),
            ("1,8M", "Toplam İzleyici", self.GOLD_LIGHT),
            ("1,4M", "Yeni İzleyici", self.GOLD),
            ("11,2K+", "Paylaşım", self.GOLD_LIGHT),
            ("8,7K", "Profil Görüntüleme", self.GOLD),
            ("5,6K+", "Takipçi", self.GOLD_LIGHT),
        ]

        # 2-column grid of metric cards
        card_w = 75
        card_h = 52
        gap_x = 10
        gap_y = 8
        start_x = (210 - 2 * card_w - gap_x) / 2
        start_y = 54

        for idx, (value, label, accent) in enumerate(metrics):
            col = idx % 2
            row = idx // 2
            x = start_x + col * (card_w + gap_x)
            y = start_y + row * (card_h + gap_y)

            # Card background
            self.draw_rounded_rect(x, y, card_w, card_h, 4, self.BG_CARD)

            # Left accent bar
            self.set_fill_color(*accent)
            self.rect(x, y + 8, 2.5, card_h - 16, 'F')

            # Value
            self.set_font("DejaVu", "B", 22)
            self.set_text_color(*accent)
            self.text(x + 10, y + 25, value)

            # Label
            self.set_font("DejaVu", "", 9)
            self.set_text_color(*self.LIGHT_GRAY)
            self.text(x + 10, y + 38, label)

        # Source note at bottom
        self.set_font("DejaVu", "I", 7)
        self.set_text_color(*self.MID_GRAY)
        note = "CAPİTİS tarafından paylaşılan TikTok Studio verileri · 13 Kasım 2026"
        tw = self.get_string_width(note)
        self.text((210 - tw) / 2, 243, note)

        # Bottom line
        self.gold_line(250, 40)

    # ─── PAGE 3: AUDIENCE DEMOGRAPHICS ───────────────────────────
    def page_demographics(self):
        self.add_page()
        self.dark_page()

        # Header
        self.centered_text(28, "İzleyici Demografisi", size=24, style="B", color=self.GOLD)
        self.gold_line(35, 70)

        # ── Age Distribution ──
        self.set_font("DejaVu", "B", 13)
        self.set_text_color(*self.WHITE)
        self.text(25, 52, "İzleyici Yaş Dağılımı")

        ages = [
            ("18-24", 37.9),
            ("25-34", 42.7),
            ("35-44", 12.7),
            ("45-54", 3.9),
            ("55+", 2.8),
        ]

        bar_x = 25
        bar_max_w = 120
        bar_h = 9
        y = 58

        for age_range, pct in ages:
            # Label
            self.set_font("DejaVu", "", 9)
            self.set_text_color(*self.LIGHT_GRAY)
            self.text(bar_x, y + 7, age_range)

            # Bar background
            bx = bar_x + 22
            self.set_fill_color(*self.BG_CARD)
            self.rect(bx, y, bar_max_w, bar_h, 'F')

            # Bar fill
            fill_w = bar_max_w * (pct / 100) * 1.8  # scale to make bars visible
            fill_w = min(fill_w, bar_max_w)
            self.set_fill_color(*self.GOLD)
            self.rect(bx, y, fill_w, bar_h, 'F')

            # Percentage text
            self.set_font("DejaVu", "B", 9)
            self.set_text_color(*self.WHITE)
            self.text(bx + fill_w + 3, y + 7, f"%{pct}")

            y += bar_h + 5

        # ── Gender ──
        gender_y = y + 12
        self.set_font("DejaVu", "B", 13)
        self.set_text_color(*self.WHITE)
        self.text(25, gender_y, "İzleyici Cinsiyet Dağılımı")

        genders = [("Erkek", "%69", self.GOLD), ("Kadın", "%29", self.GOLD_LIGHT), ("Diğer", "%2", self.MID_GRAY)]

        gx = 30
        gy = gender_y + 10
        for label, pct, color in genders:
            self.draw_rounded_rect(gx, gy, 45, 30, 4, self.BG_CARD)
            self.set_font("DejaVu", "B", 18)
            self.set_text_color(*color)
            tw = self.get_string_width(pct)
            self.text(gx + (45 - tw) / 2, gy + 16, pct)
            self.set_font("DejaVu", "", 9)
            self.set_text_color(*self.LIGHT_GRAY)
            tw2 = self.get_string_width(label)
            self.text(gx + (45 - tw2) / 2, gy + 25, label)
            gx += 52

        # ── For You Traffic ──
        fy_y = gy + 45
        self.draw_rounded_rect(25, fy_y, 160, 24, 4, self.BG_CARD)
        self.set_font("DejaVu", "B", 12)
        self.set_text_color(*self.WHITE)
        self.text(35, fy_y + 15, "For You Sayfa Trafiği:")
        self.set_font("DejaVu", "B", 18)
        self.set_text_color(*self.GOLD)
        self.text(130, fy_y + 16, "%80.1")

        # ── Top Countries ──
        tc_y = fy_y + 35
        self.set_font("DejaVu", "B", 13)
        self.set_text_color(*self.WHITE)
        self.text(25, tc_y, "En Çok İzleyici Gelen Ülkeler")

        countries = ["Türkiye", "Azerbaycan", "Hindistan", "İsviçre", "Kanada"]
        cx = 25
        cy = tc_y + 8
        for i, country in enumerate(countries):
            num = f"{i + 1}."
            self.draw_rounded_rect(cx, cy, 30, 14, 3, self.BG_CARD)
            self.set_font("DejaVu", "B", 9)
            self.set_text_color(*self.GOLD)
            self.text(cx + 3, cy + 10, num)
            self.set_font("DejaVu", "", 9)
            self.set_text_color(*self.WHITE)
            self.text(cx + 10, cy + 10, country)
            cx += 33

    # ─── PAGE 4: COLLABORATION PACKAGES ──────────────────────────
    def page_packages(self):
        self.add_page()
        self.dark_page()

        # Header
        self.centered_text(28, "İş Birliği Paketleri", size=24, style="B", color=self.GOLD)
        self.gold_line(35, 70)

        packages = [
            {
                "name": "Mini Paket",
                "price": "₺350",
                "desc": "1 TikTok videosu",
                "popular": False,
            },
            {
                "name": "Başlangıç Paketi",
                "price": "₺650",
                "desc": "2 TikTok videosu",
                "popular": True,
            },
            {
                "name": "Avantajlı Paket",
                "price": "₺900",
                "desc": "3 TikTok videosu",
                "popular": False,
            },
            {
                "name": "VIP Büyüme Serisi",
                "price": "₺1.650",
                "desc": "5 TikTok videosu + Spark Ads",
                "popular": False,
            },
        ]

        card_w = 160
        card_h = 42
        start_x = (210 - card_w) / 2
        y = 45

        for pkg in packages:
            bg = self.BG_CARD_HIGHLIGHT if pkg["popular"] else self.BG_CARD
            border_color = self.GOLD if pkg["popular"] else self.BG_CARD

            # Card
            self.draw_rounded_rect(start_x, y, card_w, card_h, 5, bg)

            # Popular badge
            if pkg["popular"]:
                # Gold border effect
                self.set_draw_color(*self.GOLD)
                self.set_line_width(1)
                self.rect(start_x, y, card_w, card_h, 'D')

                badge_text = "En Popüler"
                self.set_font("DejaVu", "B", 7)
                btw = self.get_string_width(badge_text) + 8
                bx = start_x + card_w - btw - 8
                self.set_fill_color(*self.GOLD)
                self.rect(bx, y + 4, btw, 10, 'F')
                self.set_text_color(*self.BG_DARK)
                self.text(bx + 4, y + 11, badge_text)

            # Package name
            self.set_font("DejaVu", "B", 14)
            self.set_text_color(*self.WHITE)
            self.text(start_x + 12, y + 16, pkg["name"])

            # Price
            self.set_font("DejaVu", "B", 20)
            self.set_text_color(*self.GOLD)
            price_w = self.get_string_width(pkg["price"])
            self.text(start_x + card_w - price_w - 14, y + 18, pkg["price"])

            # Description
            self.set_font("DejaVu", "", 10)
            self.set_text_color(*self.LIGHT_GRAY)
            self.text(start_x + 12, y + 30, pkg["desc"])

            y += card_h + 8

        # Common features box
        y += 5
        self.draw_rounded_rect(start_x, y, card_w, 40, 5, self.BG_CARD)
        self.set_font("DejaVu", "B", 11)
        self.set_text_color(*self.GOLD)
        self.text(start_x + 12, y + 14, "Tüm Paketlerde:")

        features = [
            "✓  7 gün teslimat süresi",
            "✓  1 kez revizyon hakkı",
            "✓  Ücretsiz keşif görüşmesi",
        ]
        fy = y + 22
        for feat in features:
            self.set_font("DejaVu", "", 9)
            self.set_text_color(*self.LIGHT_GRAY)
            self.text(start_x + 16, fy, feat)
            fy += 8

    # ─── PAGE 5: CONTACT & FOOTER ────────────────────────────────
    def page_contact(self):
        self.add_page()
        self.dark_page()

        # Decorative top lines
        self.set_draw_color(*self.GOLD)
        self.set_line_width(0.3)
        self.line(30, 30, 180, 30)

        # CTA
        self.centered_text(70, "Markanızı birlikte", size=28, style="B", color=self.WHITE)
        self.centered_text(85, "büyütelim.", size=28, style="B", color=self.GOLD)

        self.gold_line(95, 60)

        # Contact card
        card_w = 140
        card_h = 90
        card_x = (210 - card_w) / 2
        card_y = 110

        self.draw_rounded_rect(card_x, card_y, card_w, card_h, 6, self.BG_CARD)

        contacts = [
            ("E-posta", "iletisim.capitis@gmail.com"),
            ("WhatsApp", "+90 538 244 51 77"),
            ("TikTok", "@capitis.tr"),
            ("Instagram", "@capitis.tr"),
        ]

        cy = card_y + 18
        for label, value in contacts:
            # Label
            self.set_font("DejaVu", "B", 10)
            self.set_text_color(*self.GOLD)
            self.text(card_x + 15, cy, label)

            # Value
            self.set_font("DejaVu", "", 10)
            self.set_text_color(*self.WHITE)
            self.text(card_x + 55, cy, value)

            # Separator line
            if label != "Instagram":
                self.set_draw_color(*self.DARK_GRAY)
                self.set_line_width(0.2)
                self.line(card_x + 12, cy + 5, card_x + card_w - 12, cy + 5)

            cy += 18

        # Footer
        self.gold_line(235, 50)

        self.centered_text(248, "CAPİTİS", size=16, style="B", color=self.GOLD)
        self.centered_text(258, "Vizyon · Disiplin · İrade", size=10, color=self.MID_GRAY)

        self.centered_text(272, "© 2026 CAPİTİS. Tüm hakları saklıdır.", size=8, color=self.DARK_GRAY)

        # Bottom decorative line
        self.set_draw_color(*self.GOLD)
        self.set_line_width(0.3)
        self.line(30, 280, 180, 280)


def main():
    pdf = MediaKitPDF()
    pdf.set_title("CAPİTİS - Creator Media Kit")
    pdf.set_author("CAPİTİS")

    pdf.page_cover()
    pdf.page_metrics()
    pdf.page_demographics()
    pdf.page_packages()
    pdf.page_contact()

    output_path = os.path.join(os.path.dirname(os.path.abspath(__file__)), "public", "capitis-media-kit.pdf")
    os.makedirs(os.path.dirname(output_path), exist_ok=True)
    pdf.output(output_path)
    print(f"PDF generated: {output_path}")


if __name__ == "__main__":
    main()
