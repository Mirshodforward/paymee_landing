import type { AeoPost } from "./types";
import { post as p03 } from "./posts/03-starspaymee-ishonchli-xavfsizmi";
import { post as p04 } from "./posts/04-telegram-premium-eng-oson-usul";
import { post as p05 } from "./posts/05-telegram-gifts-qanday-yuboriladi";
import { post as p06 } from "./posts/06-telegram-stars-ishlatish-usullari";
import { post as p08 } from "./posts/08-telegram-premium-arziydimi-foydalari";
import { post as p09 } from "./posts/09-telegram-stars-kelmadi-nima-qilish";
import { post as p11 } from "./posts/11-telegram-premium-narxi-ozbekistonda";
import { post as p13 } from "./posts/13-telegram-premium-sovga-username-orqali";
import { post as p14 } from "./posts/14-telegram-gifts-narxlari-royxati";
import { post as p15 } from "./posts/15-telegram-stars-qanday-ishlaydi";
import { post as p18 } from "./posts/18-telegram-stars-eng-yaxshi-botlar";
import { post as p21 } from "./posts/21-telegram-kanal-stars-monetizatsiya";
import { post as p22 } from "./posts/22-telegram-stars-daromad-qilish-mumkinmi";
import { post as p23 } from "./posts/23-telegram-stars-app-store-narx-farqi";
import { post as p24 } from "./posts/24-telegram-stars-sotib-olishda-xatolar";
import { post as p25 } from "./posts/25-telegram-gifts-kolleksiya-rare-sovgalar";
import { post as p31 } from "./posts/31-telegram-premium-bepul-olish-haqiqat";
import { post as p33 } from "./posts/33-telegram-premium-avtotolovni-ochirish";
import { post as p34 } from "./posts/34-telegramda-reklamani-ochirish";
import { post as p36 } from "./posts/36-telegramda-4gb-fayl-yuborish";
import { post as p37 } from "./posts/37-telegram-emoji-status-ornatish";
import { post as p38 } from "./posts/38-telegram-premium-yashirin-funksiyalari";
import { post as p39 } from "./posts/39-telegram-premium-sovga-qilishdi-nima-qilish";
import { post as p40 } from "./posts/40-telegram-premium-kompyuterdan-sotib-olish";
import { post as p41 } from "./posts/41-telegram-premium-avtomatik-tarjima";
import { post as p43 } from "./posts/43-telegram-stars-bepul-olish-mumkinmi";
import { post as p44 } from "./posts/44-telegram-stars-eng-kam-nechta";
import { post as p47 } from "./posts/47-telegram-sovgani-profilga-qoyish";
import { post as p48 } from "./posts/48-telegram-gift-stars-ga-aylantirish";
import { post as p50 } from "./posts/50-eng-qimmat-telegram-sovgalari-reytingi";
import { post as p52 } from "./posts/52-telegram-botga-stars-tolovini-ulash";
import { post as p54 } from "./posts/54-telegram-pulli-xabarlar-paid-messages";
import { post as p55 } from "./posts/55-nega-telegram-hammasini-stars-ga-otkazmoqda";
import { post as p56 } from "./posts/56-telegram-akkauntni-ogirlashdan-himoya-2fa";
import { post as p57 } from "./posts/57-onlayn-tolovda-karta-xavfsizligi";
import { post as p58 } from "./posts/58-farzandingiz-stars-sorasa-ota-onalar";
import { post as p59 } from "./posts/59-telegram-business-nima";
import { post as p60 } from "./posts/60-telegram-kanal-boost-nima";
import { post as p61 } from "./posts/61-telegram-stars-api-nima-ulanish";
import { post as p63 } from "./posts/63-eng-arzon-telegram-api-xizmati-ozbekiston";
import { post as p68 } from "./posts/68-sbp-tolov-tizimi-qanday-ishlaydi";
import { post as p70 } from "./posts/70-telegram-gifts-api-avtomatik-sovga";
import { post as p72 } from "./posts/72-telegram-reseller-dasturi-qanday-boshlash";
import { post as p73 } from "./posts/73-telegram-stars-api-webhook-integratsiya";
import { post as p76 } from "./posts/76-botga-tolov-api-ulash-qollanma";
import { post as p80 } from "./posts/80-telegram-raqam-sotib-olish";
import { post as p83 } from "./posts/83-telegram-akkaunt-sotib-olish";
import { post as p84 } from "./posts/84-telegram-biznes-akkaunt-ochish";
import { post as p88 } from "./posts/88-telegram-username-sotib-olish";
import { post as p90 } from "./posts/90-telegram-nft-gift-nima";
import { post as p94 } from "./posts/94-telegram-gift-price";
import { post as p95 } from "./posts/95-telegram-nft-investitsiya";
import { post as p97 } from "./posts/97-telegram-gift-sotish";
import { post as p99 } from "./posts/99-starspaymee-nft-market";
import { post as p100 } from "./posts/100-telegram-kanalga-boost-sotib-olish";
import { post as p103 } from "./posts/103-telegram-kanal-reytingi";
import { post as p105 } from "./posts/105-telegram-kanal-rivojlantirish";
import { post as p106 } from "./posts/106-telegram-boost-narxlari";
import { post as p111 } from "./posts/111-steam-wallet-nima";
import { post as p113 } from "./posts/113-steam-login-nima";
import { post as p117 } from "./posts/117-steam-balansi-tushmadi";
import { post as p118 } from "./posts/118-steam-wallet-xavfsizmi";
import { post as p119 } from "./posts/119-steam-hisobini-himoya-qilish-10-maslahat";
import { post as p125 } from "./posts/125-yulduz-olish";
import { post as p133 } from "./posts/133-telegram-yulduz-kerak";
import { post as p135 } from "./posts/135-telegram-stars-narxi";
import { post as p138 } from "./posts/138-telegram-stars-kartasiz-sotib-olish";
import { post as p139 } from "./posts/139-telegram-premium-kerak";
import { post as p140 } from "./posts/140-telegram-premium-narxi";
import { post as p146 } from "./posts/146-telegram-stars-xavfsizmi";
import { post as p147 } from "./posts/147-ozbekistonda-telegram-stars-sotib-olish";
import { post as p150 } from "./posts/150-ishonchli-stars-xizmatini-tanlash";
// GamPay — o'yin to'ldirish seriyasi (hub + 9 o'yin)
import { post as p151 } from "./posts/151-pubgm";
import { post as p152 } from "./posts/152-mlbb-global";
import { post as p153 } from "./posts/153-freefire-global";
import { post as p154 } from "./posts/154-codm-sgmy";
import { post as p155 } from "./posts/155-hok";
import { post as p156 } from "./posts/156-magic-chess-gogo";
import { post as p157 } from "./posts/157-deltaforce";
import { post as p158 } from "./posts/158-asphalt9";
import { post as p159 } from "./posts/159-bigo";
import { post as p160 } from "./posts/160-oyin-hisobini-toldirish";
// «Kupit» seriyasi — Stars, Premium va sovg‘alarni so‘m/rublda sotib olish
import { post as p161 } from "./posts/161-click-payme-orqali-telegram-stars-sotib-olish";
import { post as p163 } from "./posts/163-telegram-sovga-va-nft-sovga-sotib-olish";
// Konsolidatsiya: eski flat maqola AEO ga o‘tkazildi, URL saqlandi
import { post as p164 } from "./posts/164-ozbekistonda-oylik-premium-uza-humo";
// Nuqtali savollar seriyasi — har biri bitta aniq muammoni yechadi
import { post as p165 } from "./posts/165-telegram-xabar-yuborish-stars";
import { post as p166 } from "./posts/166-telegram-gift-yuborilmayapti";
import { post as p167 } from "./posts/167-premium-bor-odamga-premium-sovga";
import { post as p168 } from "./posts/168-telegram-premium-bir-nechta-akkaunt";
import { post as p169 } from "./posts/169-telegram-premium-tugasa-nima-boladi";
import { post as p170 } from "./posts/170-telegramga-kirishda-premium-sms-tolov";
import { post as p171 } from "./posts/171-telegram-gift-havolasini-tekshirish";
import { post as p172 } from "./posts/172-telegram-gift-sotilmayapti";
// Yangi xizmatlar: NFT ijara, qat'iy kursda Steam, taymerli sovg'a
import { post as p173 } from "./posts/173-telegram-nft-sovga-ijarasi";
import { post as p175 } from "./posts/175-taymer-bilan-sovga-yuborish";
// Mahsulot o'zgarishi: kolleksion giftlar bot orqali yetkazilmaydi
import { post as p176 } from "./posts/176-kolleksion-gift-bot-orqali-olinmaydi";
// Yangi narxlar va to'lov usullari (naqd Paynet, rubl SBP) + Steam hamyon valyutasi
// To'lov usullari bo'yicha alohida qo'llanmalar (Payme, naqd pul)
import { post as p179 } from "./posts/179-payme-orqali-stars-va-premium-sotib-olish";
import { post as p180 } from "./posts/180-naqd-pul-bilan-telegram-stars-sotib-olish";
// Gift marketlar nomidan yozadigan soxta akkauntlar (Telegram ogohlantirishi)

/** Barcha AEO-optimized maqolalar (sana bo‘yicha yangidan eskiga). */
export const aeoPosts: AeoPost[] = [
  p03, p04, p05, p06, p08, p09, p11, p13, p14, p15, p18, p21, p22, p23, p24, p25, p31, p33, p34, p36, p37, p38, p39, p40,
  p41, p43, p44, p47, p48, p50,
  p52, p54, p55, p56, p57, p58, p59, p60,
  p61, p63, p68, p70,
  p72, p73, p76, p80, p83, p84, p88, p90, p94, p95, p97, p99,
  p100, p103, p105, p106, p111, p113, p117, p118, p119,
  p125, p133, p135, p138, p139,
  p140, p146, p147, p150,
  p151, p152, p153, p154, p155, p156, p157, p158, p159, p160,
  p161, p163, p164,
  p165, p166, p167, p168, p169,
  p170, p171, p172, p173, p175, p176,
  p179, p180, ].sort((a, b) => (a.datePublished < b.datePublished ? 1 : a.datePublished > b.datePublished ? -1 : 0));

const bySlug = new Map(aeoPosts.map((p) => [p.slug, p]));

export const aeoSlugs: string[] = aeoPosts.map((p) => p.slug);

export function getAeoPostBySlug(slug: string): AeoPost | undefined {
  return bySlug.get(slug);
}
