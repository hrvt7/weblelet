#!/usr/bin/env python3
"""Generate Instagram post image matching WebLelet landing page style."""

from PIL import Image, ImageDraw, ImageFont
import math
import os

W, H = 1080, 1080

# Colors from landing page
PRIMARY = "#2563EB"
PRIMARY_DEEP = "#1E3A5F"
ACCENT = "#F59E0B"
SURFACE = "#FAFBFC"
SURFACE_CARD = "#FFFFFF"
FOREGROUND = "#0F172A"
FOREGROUND_MUTED = "#64748B"
DANGER = "#EF4444"
SUCCESS = "#22C55E"
BORDER = "#E2E8F0"
BORDER_LIGHT = "#F1F5F9"
SURFACE_BLUE = "#F0F6FF"
HIGHLIGHT_BG = "#FDE68A"

def hex_to_rgb(h):
    h = h.lstrip('#')
    return tuple(int(h[i:i+2], 16) for i in (0, 2, 4))

def hex_to_rgba(h, a=255):
    return hex_to_rgb(h) + (a,)

# Create base image
img = Image.new('RGBA', (W, H), hex_to_rgba(SURFACE))
draw = ImageDraw.Draw(img)

# Draw subtle dot grid (like landing page)
dot_color = hex_to_rgba("#CBD5E1", 40)
for x in range(0, W, 28):
    for y in range(0, H, 28):
        draw.ellipse([x-1, y-1, x+1, y+1], fill=dot_color)

# Gradient overlay - subtle blue radial at top
overlay = Image.new('RGBA', (W, H), (0, 0, 0, 0))
od = ImageDraw.Draw(overlay)
for r in range(300, 0, -1):
    alpha = int(15 * (r / 300))
    od.ellipse([W//4 - r, -r, W//4 + r, r], fill=hex_to_rgba("#DBEAFE", alpha))
for r in range(250, 0, -1):
    alpha = int(10 * (r / 250))
    od.ellipse([W*3//4 - r, H - r, W*3//4 + r, H + r], fill=hex_to_rgba("#FEF3C7", alpha))
img = Image.alpha_composite(img, overlay)
draw = ImageDraw.Draw(img)

# Try to load fonts
try:
    font_bold_lg = ImageFont.truetype("/System/Library/Fonts/Helvetica.ttc", 52)
    font_bold = ImageFont.truetype("/System/Library/Fonts/Helvetica.ttc", 36)
    font_medium = ImageFont.truetype("/System/Library/Fonts/Helvetica.ttc", 28)
    font_small = ImageFont.truetype("/System/Library/Fonts/Helvetica.ttc", 22)
    font_xs = ImageFont.truetype("/System/Library/Fonts/Helvetica.ttc", 18)
    font_score = ImageFont.truetype("/System/Library/Fonts/Helvetica.ttc", 64)
    font_label = ImageFont.truetype("/System/Library/Fonts/Helvetica.ttc", 16)
except:
    font_bold_lg = ImageFont.load_default()
    font_bold = font_medium = font_small = font_xs = font_score = font_label = font_bold_lg

# === TOP SECTION: Logo + Tagline ===
# Logo circle
cx, cy = 80, 70
draw.ellipse([cx-22, cy-22, cx+22, cy+22], fill=hex_to_rgb(PRIMARY))
# EKG line in logo (simplified)
draw.line([(cx-12, cy), (cx-6, cy), (cx-2, cy-10), (cx+4, cy+10), (cx+8, cy), (cx+12, cy)],
          fill=(255, 255, 255), width=2)

# "WebLelet" text
draw.text((112, 52), "Web", fill=hex_to_rgb(FOREGROUND), font=font_bold)
draw.text((193, 52), "Lelet", fill=hex_to_rgb(PRIMARY), font=font_bold)

# weblelet.hu
draw.text((W - 200, 60), "weblelet.hu", fill=hex_to_rgb(FOREGROUND_MUTED), font=font_small)

# === MAIN HEADLINE ===
y_pos = 150
headline1 = "Megmutatjuk"
headline2 = "mit nem lát a Google"
headline3 = "az oldaladról"

draw.text((60, y_pos), headline1, fill=hex_to_rgb(FOREGROUND), font=font_bold_lg)
y_pos += 62

# Highlight background for key text
bbox = draw.textbbox((60, y_pos), headline2, font=font_bold_lg)
draw.rectangle([bbox[0]-4, bbox[3]-18, bbox[2]+4, bbox[3]+2], fill=hex_to_rgb(HIGHLIGHT_BG))
draw.text((60, y_pos), headline2, fill=hex_to_rgb(FOREGROUND), font=font_bold_lg)
y_pos += 62
draw.text((60, y_pos), headline3, fill=hex_to_rgb(FOREGROUND), font=font_bold_lg)

# Subtitle
y_pos += 80
draw.text((60, y_pos), "53 szempont · 3 dimenzió · 48 óra", fill=hex_to_rgb(FOREGROUND_MUTED), font=font_medium)

# === MOCKUP CARD ===
card_x, card_y = 60, y_pos + 60
card_w, card_h = W - 120, 420
card_r = 20

# Card shadow
shadow = Image.new('RGBA', (W, H), (0, 0, 0, 0))
sd = ImageDraw.Draw(shadow)
sd.rounded_rectangle([card_x+4, card_y+6, card_x+card_w+4, card_y+card_h+6],
                     radius=card_r, fill=hex_to_rgba(PRIMARY, 15))
img = Image.alpha_composite(img, shadow)
draw = ImageDraw.Draw(img)

# Card background
draw.rounded_rectangle([card_x, card_y, card_x+card_w, card_y+card_h],
                       radius=card_r, fill=hex_to_rgb(SURFACE_CARD), outline=hex_to_rgb(BORDER), width=1)

# Card header
draw.text((card_x + 30, card_y + 25), "WebLelet Diagnózis", fill=hex_to_rgb(FOREGROUND), font=font_medium)
draw.text((card_x + 30, card_y + 58), "pelda-etterem.hu", fill=hex_to_rgb(FOREGROUND_MUTED), font=font_xs)

# Gauge circle
gauge_cx = card_x + card_w - 110
gauge_cy = card_y + 60
gauge_r = 40

# Background circle
for i in range(360):
    angle = math.radians(i - 90)
    x1 = gauge_cx + (gauge_r - 3) * math.cos(angle)
    y1 = gauge_cy + (gauge_r - 3) * math.sin(angle)
    x2 = gauge_cx + (gauge_r + 3) * math.cos(angle)
    y2 = gauge_cy + (gauge_r + 3) * math.sin(angle)
    draw.line([(x1, y1), (x2, y2)], fill=hex_to_rgb(BORDER_LIGHT), width=1)

# Filled arc (38% = 137 degrees)
for i in range(137):
    angle = math.radians(i - 90)
    x1 = gauge_cx + (gauge_r - 3) * math.cos(angle)
    y1 = gauge_cy + (gauge_r - 3) * math.sin(angle)
    x2 = gauge_cx + (gauge_r + 3) * math.cos(angle)
    y2 = gauge_cy + (gauge_r + 3) * math.sin(angle)
    draw.line([(x1, y1), (x2, y2)], fill=hex_to_rgb(DANGER), width=1)

# Score text
draw.text((gauge_cx - 18, gauge_cy - 16), "38", fill=hex_to_rgb(DANGER), font=font_bold)
draw.text((gauge_cx - 10, gauge_cy + 18), "/100", fill=hex_to_rgb(FOREGROUND_MUTED), font=font_label)

# Score bars
bars = [
    ("GEO/SEO", 24, DANGER),
    ("Marketing", 41, ACCENT),
    ("Üzleti Potenciál", 52, ACCENT),
]

bar_y = card_y + 120
for label, score, color in bars:
    # Label and score
    draw.text((card_x + 30, bar_y), label, fill=hex_to_rgb(FOREGROUND_MUTED), font=font_small)
    score_text = f"{score}/100"
    bbox = draw.textbbox((0, 0), score_text, font=font_small)
    draw.text((card_x + card_w - 30 - (bbox[2] - bbox[0]), bar_y), score_text,
              fill=hex_to_rgb(color), font=font_small)

    # Bar background
    bar_x = card_x + 30
    bar_w = card_w - 60
    bar_top = bar_y + 32
    draw.rounded_rectangle([bar_x, bar_top, bar_x + bar_w, bar_top + 8],
                          radius=4, fill=hex_to_rgb(BORDER_LIGHT))
    # Bar fill
    fill_w = int(bar_w * score / 100)
    if fill_w > 8:
        draw.rounded_rectangle([bar_x, bar_top, bar_x + fill_w, bar_top + 8],
                              radius=4, fill=hex_to_rgb(color))
    bar_y += 70

# Mock table header
table_y = bar_y + 20
draw.rounded_rectangle([card_x + 20, table_y, card_x + card_w - 20, table_y + 35],
                       radius=8, fill=hex_to_rgb(SURFACE_BLUE))
draw.text((card_x + 35, table_y + 7), "TOP 3 kritikus probléma", fill=hex_to_rgb(FOREGROUND), font=font_xs)

# Table rows (blurred effect - just gray lines)
for i in range(3):
    ry = table_y + 42 + i * 28
    draw.rounded_rectangle([card_x + 35, ry, card_x + card_w//2, ry + 12], radius=4, fill=hex_to_rgb(BORDER_LIGHT))
    # Severity badge
    badge_color = DANGER if i < 2 else ACCENT
    draw.rounded_rectangle([card_x + card_w - 100, ry, card_x + card_w - 40, ry + 16],
                          radius=8, fill=hex_to_rgba(badge_color, 30))

# === BOTTOM CTA ===
cta_y = card_y + card_h + 40

# CTA button
btn_w = 500
btn_h = 60
btn_x = (W - btn_w) // 2
draw.rounded_rectangle([btn_x, cta_y, btn_x + btn_w, cta_y + btn_h],
                       radius=16, fill=hex_to_rgb(ACCENT))
# CTA text
cta_text = "Kérem az ingyenes diagnózist →"
bbox = draw.textbbox((0, 0), cta_text, font=font_medium)
text_w = bbox[2] - bbox[0]
draw.text(((W - text_w) // 2, cta_y + 14), cta_text, fill=(255, 255, 255), font=font_medium)

# Sub text
sub_text = "0 Ft · 0 kötelezettség · 48 órán belül megkapod"
bbox = draw.textbbox((0, 0), sub_text, font=font_xs)
text_w = bbox[2] - bbox[0]
draw.text(((W - text_w) // 2, cta_y + btn_h + 16), sub_text, fill=hex_to_rgb(FOREGROUND_MUTED), font=font_xs)

# === SAVE ===
output_path = os.path.expanduser("~/Desktop/weblelet-instagram-1.png")
img_rgb = Image.new('RGB', (W, H), hex_to_rgb(SURFACE))
img_rgb.paste(img, mask=img.split()[3])
img_rgb.save(output_path, quality=95)
print(f"Saved to: {output_path}")
