import type { AeoPost } from "./types";
import { post as p01 } from "./posts/01-telegram-stars-qayerdan-sotib-olish";
import { post as p02 } from "./posts/02-telegram-stars-narxlari-taqqoslash";
import { post as p03 } from "./posts/03-starspaymee-ishonchli-xavfsizmi";
import { post as p04 } from "./posts/04-telegram-premium-eng-oson-usul";
import { post as p05 } from "./posts/05-telegram-gifts-qanday-yuboriladi";
import { post as p06 } from "./posts/06-telegram-stars-ishlatish-usullari";
import { post as p07 } from "./posts/07-telegram-stars-vs-ton";
import { post as p08 } from "./posts/08-telegram-premium-arziydimi-foydalari";
import { post as p09 } from "./posts/09-telegram-stars-kelmadi-nima-qilish";
import { post as p10 } from "./posts/10-telegram-stars-savol-javob-faq";
import { post as p11 } from "./posts/11-telegram-premium-narxi-ozbekistonda";
import { post as p12 } from "./posts/12-telegram-stars-bilan-nima-sotib-olish";
import { post as p13 } from "./posts/13-telegram-premium-sovga-username-orqali";
import { post as p14 } from "./posts/14-telegram-gifts-narxlari-royxati";
import { post as p15 } from "./posts/15-telegram-stars-qanday-ishlaydi";
import { post as p16 } from "./posts/16-telegram-premium-va-oddiy-farqi";
import { post as p17 } from "./posts/17-telegram-stars-xavfsiz-sotib-olish-qollanma";
import { post as p18 } from "./posts/18-telegram-stars-eng-yaxshi-botlar";
import { post as p19 } from "./posts/19-telegram-premium-avtomatik-aktivatsiya";
import { post as p20 } from "./posts/20-telegram-stars-haqida-hamma-narsa";

/** Barcha AEO-optimized maqolalar (sana bo‘yicha yangidan eskiga). */
export const aeoPosts: AeoPost[] = [
  p01, p02, p03, p04, p05, p06, p07, p08, p09, p10,
  p11, p12, p13, p14, p15, p16, p17, p18, p19, p20,
].sort((a, b) => (a.datePublished < b.datePublished ? 1 : a.datePublished > b.datePublished ? -1 : 0));

const bySlug = new Map(aeoPosts.map((p) => [p.slug, p]));

export const aeoSlugs: string[] = aeoPosts.map((p) => p.slug);

export function getAeoPostBySlug(slug: string): AeoPost | undefined {
  return bySlug.get(slug);
}
