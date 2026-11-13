import os
from reportlab.lib.pagesizes import A4
from reportlab.lib import colors
from reportlab.platypus import SimpleDocTemplate, Paragraph, Spacer, Table, TableStyle
from reportlab.lib.styles import getSampleStyleSheet, ParagraphStyle
from reportlab.pdfgen import canvas
from reportlab.pdfbase import pdfmetrics
from reportlab.pdfbase.ttfonts import TTFont

pdfmetrics.registerFont(TTFont('Arial', 'C:/Windows/Fonts/arial.ttf'))
pdfmetrics.registerFont(TTFont('Arial-Bold', 'C:/Windows/Fonts/arialbd.ttf'))

pdf_path = 'public/capitis-media-kit.pdf'

class DarkNumberedCanvas(canvas.Canvas):
    def __init__(self, *args, **kwargs):
        super(DarkNumberedCanvas, self).__init__(*args, **kwargs)
        self._saved_page_states = []

    def showPage(self):
        self._saved_page_states.append(dict(self.__dict__))
        self._startPage()

    def save(self):
        num_pages = len(self._saved_page_states)
        for state in self._saved_page_states:
            self.__dict__.update(state)
            self.draw_page_decorations(num_pages)
            canvas.Canvas.showPage(self)
        canvas.Canvas.save(self)

    def draw_page_decorations(self, page_count):
        self.saveState()
        # Arka plan
        self.setFillColor(colors.HexColor('#08090d'))
        self.rect(0, 0, A4[0], A4[1], fill=1, stroke=0)
        
        # Üst ve alt altın ince çizgi
        self.setStrokeColor(colors.HexColor('#d4af37'))
        self.setLineWidth(1)
        self.line(40, A4[1] - 35, A4[0] - 40, A4[1] - 35)
        self.line(40, 35, A4[0] - 40, 35)
        
        # Header & Footer metinleri
        self.setFont('Arial', 8)
        self.setFillColor(colors.HexColor('#888c99'))
        self.drawString(40, A4[1] - 28, 'CAPİTİS — CREATOR MEDIA KIT & İŞ BİRLİĞİ REHBERİ')
        self.drawRightString(A4[0] - 40, A4[1] - 28, 'RESMİ DOKÜMAN')
        
        self.drawString(40, 22, 'TikTok: @capitis.tr  |  iletisim.capitis@gmail.com  |  ')
        self.drawRightString(A4[0] - 40, 22, f'Sayfa {self._pageNumber} / {page_count}')
        self.restoreState()

doc = SimpleDocTemplate(
    pdf_path,
    pagesize=A4,
    leftMargin=40,
    rightMargin=40,
    topMargin=55,
    bottomMargin=50
)

styles = getSampleStyleSheet()

title_style = ParagraphStyle(
    'DocTitle',
    fontName='Arial-Bold',
    fontSize=24,
    leading=30,
    textColor=colors.HexColor('#ffffff'),
    spaceAfter=6
)

subtitle_style = ParagraphStyle(
    'DocSub',
    fontName='Arial',
    fontSize=12,
    leading=16,
    textColor=colors.HexColor('#e5b869'),
    spaceAfter=12
)

h1_style = ParagraphStyle(
    'H1',
    fontName='Arial-Bold',
    fontSize=13,
    leading=17,
    textColor=colors.HexColor('#e5b869'),
    spaceBefore=12,
    spaceAfter=6
)

body_style = ParagraphStyle(
    'Body',
    fontName='Arial',
    fontSize=9,
    leading=13,
    textColor=colors.HexColor('#d1d4dc'),
    spaceAfter=4
)

card_title = ParagraphStyle(
    'CardTitle',
    fontName='Arial-Bold',
    fontSize=9.5,
    leading=13,
    textColor=colors.HexColor('#ffffff')
)

card_num = ParagraphStyle(
    'CardNum',
    fontName='Arial-Bold',
    fontSize=18,
    leading=22,
    textColor=colors.HexColor('#e5b869')
)

card_desc = ParagraphStyle(
    'CardDesc',
    fontName='Arial',
    fontSize=8,
    leading=11,
    textColor=colors.HexColor('#9ba0b0')
)

story = []

# KAPAK
story.append(Paragraph('CAPİTİS', title_style))
story.append(Paragraph('Zihin Setini Sıradanlıktan Kurtar · Creator Media Kit', subtitle_style))
story.append(Paragraph(
    'Bu doküman; <b>CAPİTİS</b> (@capitis.tr) içerik dünyasının doğrulanmış TikTok Studio performansını, '
    'izleyici demografisini, paket seçeneklerini ve kurumsal iş birliği prensiplerini içerir. '
    'İçeriklerimiz, vizyon, disiplin ve irade ekseninde nitelikli 18–34 yaş kitlesine değer kazandırmaktadır.',
    body_style
))
story.append(Spacer(1, 8))

# 1. PERFORMANS METRİKLERİ
story.append(Paragraph('1. PERFORMANS METRİKLERİ (SON 365 GÜN TİKTOK STUDİO)', h1_style))

metrics_data = [
    [
        Paragraph('<b>2,4M+</b>', card_num),
        Paragraph('<b>1,8M</b>', card_num),
        Paragraph('<b>1,4M</b>', card_num)
    ],
    [
        Paragraph('<b>Video Görüntüleme</b><br/>Doğal For You yayılımı', card_desc),
        Paragraph('<b>Toplam İzleyici</b><br/>Ulaşılan tekil kitle', card_desc),
        Paragraph('<b>Yeni İzleyici</b><br/>Organik büyüme katsayısı', card_desc)
    ],
    [
        Paragraph('<b>11,2K+</b>', card_num),
        Paragraph('<b>8,7K+</b>', card_num),
        Paragraph('<b>%80,1</b>', card_num)
    ],
    [
        Paragraph('<b>Organik Paylaşım</b><br/>Yüksek viral yayılım', card_desc),
        Paragraph('<b>Profil Ziyareti</b><br/>Biyo linke yönelim hacmi', card_desc),
        Paragraph('<b>Sizin İçin (For You)</b><br/>Algoritmik tavsiye oranı', card_desc)
    ]
]

t_metrics = Table(metrics_data, colWidths=[171, 171, 171])
t_metrics.setStyle(TableStyle([
    ('BACKGROUND', (0,0), (-1,-1), colors.HexColor('#11131a')),
    ('BOX', (0,0), (-1,-1), 1, colors.HexColor('#242838')),
    ('INNERGRID', (0,0), (-1,-1), 0.5, colors.HexColor('#1c202e')),
    ('TOPPADDING', (0,0), (-1,-1), 5),
    ('BOTTOMPADDING', (0,0), (-1,-1), 5),
    ('LEFTPADDING', (0,0), (-1,-1), 8),
    ('RIGHTPADDING', (0,0), (-1,-1), 8),
]))
story.append(t_metrics)
story.append(Spacer(1, 8))

# 2. KİTLE DEMOGRAFİSİ
story.append(Paragraph('2. KİTLE DEMOGRAFİSİ & TRAFİK GÜCÜ', h1_style))
demo_text = Paragraph(
    '• <b>Yaş Dağılımı:</b> 18–24: %37,9  |  25–34: %42,7  (Çekirdek Kitle: <b>%80,6</b> genç karar verici)<br/>'
    '• <b>Cinsiyet Oranı:</b> Erkek: %69  |  Kadın: %29  |  Diğer: %2<br/>'
    '• <b>Öne Çıkan Ülkeler:</b> Türkiye, Azerbaycan, İsviçre, Kanada, Gürcistan, Amerika Birleşik Devletleri, Almanya, İngiltere.',
    body_style
)
story.append(demo_text)
story.append(Spacer(1, 8))

# 3. İŞ BİRLİĞİ PAKETLERİ
story.append(Paragraph('3. İŞ BİRLİĞİ PAKETLERİ VE YATIRIM SEÇENEKLERİ', h1_style))

packages_data = [
    [
        Paragraph('<b>Paket Adı</b>', card_title),
        Paragraph('<b>Kapsam & Teslimat</b>', card_title),
        Paragraph('<b>Tutar</b>', card_title)
    ],
    [
        Paragraph('<b>Mini Paket</b>', body_style),
        Paragraph('1 TikTok Tanıtım Videosu + Özel Kurgu + CTA Yönlendirmesi + 7 Gün Teslim', body_style),
        Paragraph('<b>₺350</b>', card_num)
    ],
    [
        Paragraph('<b>Başlangıç Paketi</b><br/><font color=\"#e5b869\">★ EN POPÜLER</font>', body_style),
        Paragraph('2 TikTok Videosu + 2 Farklı Senaryo & Açı + CTA Yönlendirmesi + 7 Gün Teslim', body_style),
        Paragraph('<b>₺650</b>', card_num)
    ],
    [
        Paragraph('<b>Avantajlı Paket</b>', body_style),
        Paragraph('3 TikTok Videosu + Tematik Seri Kurgusu + Kalıcı Marka Hikâyesi + 7 Gün Teslim', body_style),
        Paragraph('<b>₺900</b>', card_num)
    ],
    [
        Paragraph('<b>VIP Büyüme Serisi</b><br/><font color=\"#e5b869\">★ LÜKS & KAPSAMLI</font>', body_style),
        Paragraph('5 TikTok Videosu + 30 Gün Spark Ads Lisansı DAHİL + Instagram Reels/Story + Öncelikli Çekim', body_style),
        Paragraph('<b>₺1.650</b>', card_num)
    ],
    [
        Paragraph('<b>360° Kurumsal / UGC</b>', body_style),
        Paragraph('Aylık 8+ Video + Reklam Hesaplarınızda Tam Ticari Hak + 4K Ham Görüntü + 1-e-1 Danışmanlık', body_style),
        Paragraph('<b>Özel Teklif</b>', card_title)
    ],
]

t_packages = Table(packages_data, colWidths=[130, 295, 88])
t_packages.setStyle(TableStyle([
    ('BACKGROUND', (0,0), (-1,0), colors.HexColor('#181b24')),
    ('BACKGROUND', (0,1), (-1,-1), colors.HexColor('#0d0f14')),
    ('BOX', (0,0), (-1,-1), 1, colors.HexColor('#2c3245')),
    ('INNERGRID', (0,0), (-1,-1), 0.5, colors.HexColor('#1c202e')),
    ('TOPPADDING', (0,0), (-1,-1), 5),
    ('BOTTOMPADDING', (0,0), (-1,-1), 5),
    ('LEFTPADDING', (0,0), (-1,-1), 8),
    ('RIGHTPADDING', (0,0), (-1,-1), 8),
    ('VALIGN', (0,0), (-1,-1), 'MIDDLE'),
]))
story.append(t_packages)
story.append(Spacer(1, 8))

# 4. İLETİŞİM
story.append(Paragraph('4. İLETİŞİM VE ANINDA BRİEF İLETİMİ', h1_style))
contact_info = Paragraph(
    'Tüm iş birliklerinde <b>%50 Başlangıç + %50 Teslimat</b> güvencesi ve 7 gün teslim standardı uygulanır.<br/>'
    '<b>E-posta:</b> iletisim.capitis@gmail.com  |  <b>İletişim:</b> <br/>'
    '<b>TikTok:</b> tiktok.com/@capitis.tr  |  <b>Web:</b> capitis.tr',
    body_style
)
story.append(contact_info)

doc.build(story, canvasmaker=DarkNumberedCanvas)
print('PDF generated successfully at:', pdf_path)
