export type BlogCategory = "Stars" | "Premium" | "Gifts" | "Biznes" | "Steam" | "O‘yinlar" | "Telegram" | "Xavfsizlik";

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  category: BlogCategory;
  /** ISO yyyy-mm-dd */
  datePublished: string;
  paragraphs: string[];
  /** Meta keywords (qo'shimcha SEO) */
  seoKeywords?: string[];
}

/** Maqolalar mavzusi [StarsJoy blog](https://www.starsjoy.uz/blog) dagi strukturaga oʻxshash; matnlar StarsPaymee uchun asl yozuv. */
export const blogPosts: BlogPost[] = ([
  {
    slug: "telegram-premium-muddati-yangilash-2026",
    category: "Premium",
    datePublished: "2026-05-05",
    title: "Telegram Premium muddati tugadi: yangilash yo‘llari va nima qilish kerak",
    excerpt:
      "Premium tugagach akkaunt rejimi o‘zgarmaydi, lekin ayrim imtiyozlar chiqadi. Muddatni qanday tekshirish va UzCard/HUMO orqali eng tez yangilash.",
    paragraphs: [
      "Telegram Premium muddati tugaganda ijtimoiy tarmoq sizni darhol bloklamaydi: chatlar va kanallar qoladi, biroq kattaroq fayl yuborish, tezkor yuklash va vizual sozlamalar cheklanishi mumkin.",
      "Muddatingizni iOS, Android yoki desktop sozlamalaridagi «Telegram Premium» bo‘limidan ko‘rishingiz mumkin. Agar avtomatik uzaytirish yoqilmagan bo‘lsa, har biri alohida xarid talab qilinadi.",
      "O‘zbekistonda bank kartasi bilan xarid qilganda bot yoki Mini App ichida foydalanuvchini tekshirish va paketni (3, 6 yoki 12 oy) tanlash muhim. StarsPaymee buyurtma statusini real vaqtda ko‘rsatadi.",
      "Uzaytirishdan oldin aksiya kodini tekshirish va boshqa obuna bo‘lsa, yangi muddat ustma-usta qolishiga qarab qaror qiling.",
    ],
  },
  {
    slug: "telegram-stars-balans-qanday-korish-2026",
    category: "Stars",
    datePublished: "2026-05-02",
    title: "Telegram Stars balansini qanday ko‘rish va tekshirish (2026)",
    excerpt:
      "Mobil ilova, desktop va @PremiumBot kabi vositalar orqali qoldiq va tarixni aniqlash.",
    paragraphs: [
      "Stars balansi odatda sozlamalar yoki akkaunt bo‘limida ko‘rinadi; platforma yangilanganda uning joylashuvi o‘zgarishi mumkin.",
      "Tranzaksiya tarixini koʻrish noqulay toʻlovlar uchun foydali.",
      "Agar boshqa xizmat orqali yulduz olgan boʻlsangiz, buyurtma ID bilan supportga murojaat qilish tezlashadi.",
    ],
  },
  {
    slug: "telegram-sms-kod-kelmayotganda",
    category: "Telegram",
    datePublished: "2026-04-11",
    title: "Telegram SMS kodi koʻrinmayapti: yoʻnalish va tuzatish yoʻllari",
    excerpt:
      "SIM, tarmoq yoki taʼqiq — birinchi qoʻngʻiroqlar roʻyxati va operator bilan aloqa.",
    paragraphs: [
      "SMS kechiktirilishi tarmoq yukidagi vaqtinchalik hodisalar bilan bog‘liq boʻlishi mumkin.",
      "Ilova yoʻnalgan raqami oʻzgagan boʻlsa, akkauntni qayta ulash zarur boʻladi.",
      "Premium yoki boshqa rasmiy yoʻllar aksariyat yoʻnalishlarida qoʻshimcha imkoniyat beradi — Telegram dokumentatsiyasini kuzating.",
    ],
  },
] as BlogPost[]).sort((a, b) =>
  a.datePublished < b.datePublished ? 1 : a.datePublished > b.datePublished ? -1 : 0,
);

export function getPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((p) => p.slug === slug);
}

export function getPostsByCategory(category: BlogCategory | "hammasi"): BlogPost[] {
  if (category === "hammasi") return blogPosts;
  return blogPosts.filter((p) => p.category === category);
}

export const blogCategories: BlogCategory[] = ["Stars", "Premium", "Gifts", "Biznes", "Steam", "O‘yinlar", "Telegram", "Xavfsizlik"];
