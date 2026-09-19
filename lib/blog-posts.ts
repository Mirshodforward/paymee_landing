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
    slug: "telegram-premium-narxlari-arzon-qulay-2026",
    category: "Premium",
    datePublished: "2026-06-02",
    title:
      "Telegram Premium narxlari 2026: eng arzon va qulay paketlar — 3, 6, 12 oy hamda 1 oylik va 1 yillik",
    excerpt:
      "StarsPaymee'da Telegram Premium narxlari: 1 oy 45 000, 3 oy 160 000, 6 oy 215 000, 12 oy 388 000 so‘m. Barcha muddat username orqali — akkauntga kirish shart emas, Premium 10 soniyada faollashadi. Arzon, qulay, ishonchli.",
    paragraphs: [
      "Telegram Premium 2026-yilda O‘zbekistonda har qachongidan arzon va qulay bo‘ldi. StarsPaymee orqali paketlar quyidagicha: 1 oylik Premium — 45 000 so‘m, 3 oylik — 160 000 so‘m, 6 oylik — 215 000 so‘m, 12 oylik (1 yil) — 388 000 so‘m. Oyiga hisoblaganda 12 oylik paket eng tejamkor variant hisoblanadi.",
      "Eng muhimi — bu paketlarda akkauntingizga kirish (login, parol yoki SMS-kod) umuman talab qilinmaydi. Faqat @username yetarli, va Premium o‘rtacha 10 soniyada avtomatik faollashadi. Bu usul tez, xavfsiz va sizdan hech qanday maxfiy maʼlumot so‘ramaydi.",
      "2026-yil sentabridan boshlab 1, 3, 6 va 12 oylik tariflarning hammasi username oqimida beriladi — ya’ni login, parol yoki SMS-kod hech qaysi muddat uchun so‘ralmaydi. «Akkauntga kirib berish» esa faqat nostandart holatlar uchun alohida xizmat sifatida qoldi; uning shartlari va narxi @StarsPaymeeSupport orqali aniqlanadi.",
      "To‘lovni o‘zingizga qulay usulda qilishingiz mumkin: Click, Payme, Paynet, UzCard, HUMO yoki istalgan O‘zbekiston bank kartasi orqali so‘mda. Chet el kartasi yoki kripto kerak emas — barchasi mahalliy va oddiy.",
      "StarsPaymee 1 yildan ortiq xizmat ko‘rsatib kelmoqda: 4000 dan ortiq faol foydalanuvchi va 100 000 dan ortiq muvaffaqiyatli buyurtma. Shuning uchun arzon narx bilan birga ishonchni ham olasiz — buyurtma texnik sabab bilan yetkazilmasa, to‘lov to‘liq qaytariladi.",
      "Buyurtma berish uchun @StarsPaymee_bot Telegram botini yoki Telegram Mini App ni oching, Premium muddatini tanlang va kimga ekanini username bilan kiriting. Savol yoki yordam kerak bo‘lsa, @StarsPaymeeSupport orqali bog‘laning — qo‘llab-quvvatlash xizmati tezda javob beradi.",
    ],
    seoKeywords: [
      "telegram premium narxlari",
      "telegram premium arzon",
      "telegram premium sotib olish",
      "telegram premium 3 oy narxi",
      "telegram premium 6 oy narxi",
      "telegram premium 12 oy narxi",
      "telegram premium 1 oylik",
      "telegram premium 1 yillik",
      "telegram premium username bilan",
      "telegram premium 10 soniyada",
      "telegram premium click payme",
      "telegram premium uzcard humo",
      "telegram premium o‘zbekistonda",
      "StarsPaymee premium",
      "@StarsPaymeeSupport",
    ],
  },
  {
    slug: "durov-figurkasi-skinlar-telegram-konkurs-2026",
    category: "Gifts",
    datePublished: "2026-05-16",
    title: "Durov figurkasi uchun mumkin bo‘lgan skinlar",
    excerpt:
      "Telegramda Durov figurkalari tanlovi: 52 430 $ mukofot jamg‘armasi, g‘oliblar Emoji Packlari va kelajakdagi Gift/skin yangilanishlariga oid qisqa sharh.",
    paragraphs: [
      "Kecha eng yaxshi modellarga yo‘naltirilgan maxsus tanlov bo‘lib o‘tdi — https://t.me/contest/453 . Undada 🎁 Durov figurkalari mavzusi bo‘yicha umumiy mukofot jamg‘armasi 52 430 AQSH dollari eʼlon qilingan.",
      "G‘oliblar uchun ikki Emoji Pack mashhur qilindi; ularni Telegramda qoʻshishingiz mumkin: birinchi to‘plam https://t.me/addstickers/PDContest_winners , ikkinchi to‘plam https://t.me/addstickers/PDContest_winners2 .",
      "Bu ishlar jamiyatda kelajakda Telegram Gifts figurkalari uchun yangi skinlar (tashqi koʻrinish variantlari) sifatida qabul qilinishi mumkinligi haqida taxminlar uyg‘otmoqda. Aniq jadval va qoidalar har doim Telegramning rasmiy eʼlonlari va Gifts qoidalariga tayangan holda tekshirilishi kerak.",
      "Telegram Stars va tezkor yangiliklar oqimini kuzatishda ⭐️ @tezstar_bot ham qoʻshimcha manba boʻlishi mumkin.",
    ],
  },
  {
    slug: "starspaymee-mini-app-may-2026-yangilik",
    category: "Telegram",
    datePublished: "2026-05-13",
    title:
      "StarsPaymee Mini App: 2026-yil maydagi yangiliklar — Telegram Gifts, TGS va Oʻzbekistonga mos toʻlov",
    excerpt:
      "Katalog va slotlar yangilanishi, TGS koʻrinishi va UzCard/HUMO bilan soʻmda yakunlash: may relizida nimalar paydo boʻldi va nimalarni kuzatish kerak.",
    paragraphs: [
      "StarsPaymee Mini App Telegram Gifts katalogi, Stars xaridlari va Premium yoʻnalishlarini bitta interfeysda jamlaydi. Maydagi yangilanish foydalanuvchilarga yangilangan buyurtma statuslari va joriy narx/slot maʼlumotlarini ochiqroq koʻrish imkonini beradi — bu esa xariddan oldin qarorni tezlashtiradi.",
      "Telegram Gifts boʻyicha TGS animatsiyalaridan foydalanib, sovgʻani tanlashdan oldin vizual dasturiy koʻrinishni koʻrish mumkin; izoh va anonim yuborish opsiyalari esa ijtimoiy kontekstga moslashuvchan qolmoqda.",
      "Toʻlovlar mahalliy UzCard va HUMO kartalari orqali soʻmda amalga oshiriladi — OTP va bank bildirishnomalari odatiy tartibda ishlaydi. Yakunlangan har bir buyurtma uchun identifikator saqlansa, keyinchalik billing yoki qoʻllab-quvvatlash bilan aloqa osonlashadi.",
      "Keyingi bosqichlarda katalog qidiruvi va avtomatik eslatmalar kabi qulayliklar kengayishi mumkin; barcha oʻzgarishlar Telegram va mahalliy toʻlov qoidalariga muvofiqlikda eʼlon qilinadi.",
    ],
  },
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
    slug: "telegram-premium-1-3-6-oy-taqqoslash",
    category: "Premium",
    datePublished: "2026-05-05",
    title: "Telegram Premium: 1, 3, 6 va 12 oylik paketlar taqqoslash va tejamkor variant",
    excerpt:
      "Qisqa muddat uchun sinov kerakmi yoki-yil bo‘yi barqaror imtiyoz? Paketlar orasidagi farq oyiga narxlash va boshqa xizmatlarga tegishli maslahatlar.",
    paragraphs: [
      "Qisqa muddatli obuna cheklangan byudjetda «Premium nima beradi»ni tekshirish uchun qulay. Uzoq muddat odatda oyiga ekvivalent narxi pastroq chiqadi, lekin bir martalik katta summa berishni talab qiladi.",
      "StarsPaymee da har bir paket uchun narxlar so‘mda ko‘rinadi va siz foydalanuvchini bot orqali qidirish orqali xariddan oldin tekshirasiz.",
      "Agar Telegram Stars ko‘proq kerak bo‘lsa, Premium va Stars xaridlari bo‘yicha alohida byudjet rejalashtirish foydali.",
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
  {
    slug: "telegram-premium-uzcard-2026",
    category: "Premium",
    datePublished: "2026-03-26",
    title: "Telegram Premiumni UzCard orqali oʻzbekistonlik foydalanuvchi uchun",
    excerpt:
      "Karta qaysi yoʻnalishlangan boʻlsa ham toʻlov uchun ochiq boʻlganini tekshiring.",
    paragraphs: [
      "UzCard’ni xalqaro operatsiyalarga ochtirish shart emas — to‘lov O‘zbekiston ichida, so‘mda o‘tadi. Kartada faqat internet-to‘lov yoqilgan bo‘lsa kifoya; buni bank ilovasidan tekshirasiz.",
      "Narx ham, to‘lov ham so‘mda bo‘lgani uchun valyuta konvertatsiyasi umuman bo‘lmaydi — bank tomonida ham qo‘shimcha kurs farqi yechilmaydi.",
      "StarsPaymee buyurtma tarixini billing uchun saqlashingiz mumkin.",
    ],
  },
  {
    slug: "telegram-gifts-uzcard-bot",
    category: "Gifts",
    datePublished: "2026-03-24",
    title: "Telegram Gifts va bot orqali sotib olish: tuzilma va talablar",
    excerpt:
      "Sovgʻa toʻlovi Stars bilan bog‘langanligi sabab toʻlov yakunlanganidan keyin logika serverda yakunlanadi.",
    paragraphs: [
      "Foydalanuvchi akkaunti aniqligi sovg‘a yetkazib berish uchun muhim.",
      "Izoh anonimligi qabul qilinguncha taʼsir qiladi.",
      "StarsPaymee aniqlangan gift_id va yoʻnalgan user_id uchun buyurtmani qayta ishlashi kerak.",
    ],
  },
  {
    slug: "telegram-stars-cash-out-2026",
    category: "Stars",
    datePublished: "2026-03-24",
    title: "Telegram Stars chiqarish (cash-out) haqida amaliyot va cheklovlar bo‘yicha qisqa taʼrif",
    excerpt:
      "Oddiy akkaunt uchun cheklovlar kuchli boʻladi — qaror uchun Telegram taʼriflariga tayaning.",
    paragraphs: [
      "Telegram oʻz qoidalarida qaysi amallarning ruxsat etilganligi va taʼriflarini yozadi.",
      "Stars odatda akkaunt aktivlariga yaqin vosita boʻladi.",
      "Har qanday “starsni naqd qilish” taʼkidlari uchun rasmiy manbalarni tasdiqlang.",
    ],
  },
  {
    slug: "telegram-stars-dostga-otkazish",
    category: "Stars",
    datePublished: "2026-03-18",
    title: "Telegram Starsni boshqaga oʻtkazish: sovgʻa, bot va xavfsizlik",
    excerpt:
      "Resurslar turlicha — har biri Telegram qoidalariga boʻysunadi.",
    paragraphs: [
      "Yulduzni oʻtkazish oʻrniga sovgʻa yuborish tez-tez oʻrinli.",
      "Qabul qiluvchini username yoki ID bilan tasdiqlang.",
      "Qoʻshimcha Telegram funksiyalari yangilanishiga qarab oʻzgashi mumkin.",
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
