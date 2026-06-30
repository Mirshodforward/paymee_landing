import fs from "fs";
import path from "path";

const root = path.join(import.meta.dirname, "..");
const outDir = path.join(root, "messages");
fs.mkdirSync(outDir, { recursive: true });

/* ──────────────────────────────────────────────────────────────────────────
 * StarsPaymee — Telegram Stars, Premium va Gift xizmati (O‘zbekiston).
 * Buyurtmalar @StarsPaymee_bot bot va Telegram Mini App orqali.
 * Asosiy afzalliklar: 10 soniyada avtomatik yetkazish, eng arzon narxlar,
 * Click / Payme / Paynet / UzCard / HUMO va istalgan bank kartasi.
 * Raqamli narxlar lib/products.ts da; bu yerda faqat matn.
 * ────────────────────────────────────────────────────────────────────────── */

const faqUz = [
  [
    "StarsPaymee nima va qanday ishlaydi?",
    "StarsPaymee — O‘zbekistonda Telegram Stars (yulduz), Telegram Premium va Telegram Gift (sovg‘a) sotib olish xizmati. Buyurtma @StarsPaymee_bot Telegram boti yoki Telegram Mini App orqali beriladi: username yoziladi, mahsulot tanlanadi, to‘lov qilinadi — va buyurtma o‘rtacha 10 soniyada avtomatik yetkaziladi.",
  ],
  [
    "Qanday to‘lov qilsam bo‘ladi?",
    "Click, Payme, Paynet, UzCard, HUMO va istalgan O‘zbekiston bank kartasi orqali so‘mda to‘lashingiz mumkin. Hech qanday chet el kartasi yoki kripto kerak emas.",
  ],
  [
    "Telegram Premium uchun akkauntimga kirishim kerakmi?",
    "Yo‘q. Premium «username bilan» oqimida akkauntga kirish (login, parol, SMS-kod) talab qilinmaydi — faqat @username yetarli va Premium 10 soniyada avtomatik faollashadi. Agar xohlasangiz, alohida «akkauntga kirib berish» xizmati ham bor.",
  ],
  [
    "Narxlar qancha?",
    "Telegram Stars donasi atigi 220 so‘mdan — 50 yulduz 11 000 so‘m. Telegram Premium: 3 oy 172 000 so‘m, 6 oy 232 000 so‘m, 12 oy 422 000 so‘m. Bu bozordagi eng arzon narxlardan biri.",
  ],
  [
    "Telegram sovg‘alarini qanday yuboraman?",
    "Telegram noyob (unique) sovg‘alarini o‘zingiz uchun sotib olishingiz yoki do‘stingizga yuborishingiz mumkin. Sovg‘ani anonim tarzda yoki tabrik so‘zi (izoh) bilan jo‘natish ham mumkin.",
  ],
  [
    "Do‘st taklif qilsam nima bo‘ladi?",
    "Referral havolangiz orqali kelgan do‘stlaringiz xarid qilsa, sizga bonus hisoblanadi. Bonuslarni keyingi buyurtmalarda ishlatishingiz mumkin.",
  ],
  [
    "StarsPaymee ishonchlimi?",
    "StarsPaymee 1 yildan ortiq xizmat ko‘rsatadi, 4000 dan ortiq faol O‘zbekiston foydalanuvchisi va 100 000 dan ortiq bajarilgan buyurtmaga ega. Buyurtma texnik sabab bilan yetkazilmasa — to‘lov to‘liq qaytariladi.",
  ],
];

const faqRu = [
  [
    "Что такое StarsPaymee и как это работает?",
    "StarsPaymee — сервис покупки Telegram Stars, Telegram Premium и Telegram Gift в Узбекистане. Заказ оформляется в Telegram-боте @StarsPaymee_bot или в Telegram Mini App: указываете username, выбираете товар, оплачиваете — и заказ доставляется автоматически в среднем за 10 секунд.",
  ],
  [
    "Чем можно оплатить?",
    "Click, Payme, Paynet, UzCard, HUMO и любая банковская карта Узбекистана — оплата в сумах. Иностранная карта или крипта не нужны.",
  ],
  [
    "Нужно ли входить в аккаунт для Telegram Premium?",
    "Нет. В потоке «по username» вход в аккаунт (логин, пароль, SMS-код) не требуется — достаточно @username, и Premium активируется автоматически за 10 секунд. При желании есть отдельная услуга «активация со входом в аккаунт».",
  ],
  [
    "Сколько стоит?",
    "Telegram Stars — от 220 сум за штуку; 50 звёзд — 11 000 сум. Telegram Premium: 3 месяца 172 000 сум, 6 месяцев 232 000 сум, 12 месяцев 422 000 сум. Это одни из самых низких цен на рынке.",
  ],
  [
    "Как отправить Telegram-подарки?",
    "Уникальные подарки Telegram можно купить себе или отправить другу. Подарок можно отправить анонимно или с поздравительным комментарием.",
  ],
  [
    "Что даёт приглашение друзей?",
    "Когда приглашённый по вашей реферальной ссылке друг совершает покупку, вам начисляется бонус. Бонусы можно использовать в следующих заказах.",
  ],
  [
    "Можно ли доверять StarsPaymee?",
    "StarsPaymee работает больше года, у сервиса более 4000 активных пользователей из Узбекистана и более 100 000 выполненных заказов. Если заказ не доставлен по технической причине — полный возврат средств.",
  ],
];

const faqEn = [
  [
    "What is StarsPaymee and how does it work?",
    "StarsPaymee is a service for buying Telegram Stars, Telegram Premium and Telegram Gifts in Uzbekistan. You order through the @StarsPaymee_bot Telegram bot or the Telegram Mini App: enter a username, pick a product, pay — and the order is delivered automatically in about 10 seconds.",
  ],
  [
    "How can I pay?",
    "Click, Payme, Paynet, UzCard, HUMO and any Uzbek bank card — paid in UZS. No foreign card or crypto required.",
  ],
  [
    "Do I need to log into my account for Telegram Premium?",
    "No. In the “by username” flow no account login (password, SMS code) is needed — just the @username, and Premium activates automatically in 10 seconds. A separate “activation via account login” option is also available.",
  ],
  [
    "How much does it cost?",
    "Telegram Stars from 220 so‘m each; 50 Stars for 11,000 so‘m. Telegram Premium: 3 months 172,000 so‘m, 6 months 232,000 so‘m, 12 months 422,000 so‘m — among the cheapest prices on the market.",
  ],
  [
    "How do I send Telegram gifts?",
    "You can buy Telegram unique gifts for yourself or send them to a friend. A gift can be sent anonymously or with a congratulatory comment.",
  ],
  [
    "What do I get for inviting friends?",
    "When a friend who joined via your referral link makes a purchase, you earn a bonus. Bonuses can be used on your next orders.",
  ],
  [
    "Is StarsPaymee trustworthy?",
    "StarsPaymee has run for over a year, with 4,000+ active users in Uzbekistan and 100,000+ completed orders. If an order is not delivered due to a technical issue, you get a full refund.",
  ],
];

function mkFaq(pairs) {
  return pairs.map(([question, answer]) => ({ question, answer }));
}

/* ── O‘ZBEK (asosiy) ──────────────────────────────────────────────────────── */
const baseUz = {
  seo: {
    titleDefault: "StarsPaymee",
    titleTemplate: "%s · StarsPaymee",
    description:
      "O‘zbekistonda Telegram Stars, Premium va Gift — 10 soniyada avtomatik yetkaziladi. Click, Payme, Paynet, UzCard, HUMO orqali to‘lov. Eng arzon narxlar.",
    ogLocale: "uz_UZ",
    keywordsList: [
      "StarsPaymee",
      "telegram stars sotib olish",
      "telegram premium sotib olish",
      "telegram stars narxi",
      "telegram premium narxi",
      "telegram stars arzon",
      "telegram premium arzon",
      "telegram stars o‘zbekistonda",
      "telegram premium o‘zbekistonda",
      "telegram stars uzcard",
      "telegram premium humo",
      "telegram stars click orqali",
      "telegram premium payme",
      "telegram stars paynet",
      "telegram premium karta orqali",
      "telegram premium username bilan",
      "telegram premium 10 soniyada",
      "telegram premium avtomatik faollashtirish",
      "telegram sovg‘a yuborish",
      "telegram gift yuborish",
      "telegram noyob sovg‘alar",
      "telegram gift anonim",
      "telegram stars bot",
      "telegram premium bot",
      "starspaymee bot",
      "telegram stars toshkent",
      "telegram premium toshkent",
      "UzCard",
      "HUMO",
      "Click",
      "Payme",
      "Paynet",
    ],
  },
  nav: {
    home: "Asosiy",
    services: "Xizmatlar",
    process: "Jarayon",
    trustLabel: "Ishonch",
    faq: "FAQ",
    blog: "Blog",
    openTelegram: "Botni ochish",
    support: "Qo‘llab-quvvatlash",
    menuOpen: "Menyu ochish",
    menuClose: "Menyu yopish",
    menuTitle: "Menyu",
    menuSubtitle: "Telegram Stars, Premium va sovg‘alar",
    menuNavAria: "Mobil navigatsiya",
  },
  locales: {
    uz: "O‘zbekcha",
    ru: "Ruscha",
    en: "Inglizcha",
    switchAria: "Tilni tanlang",
  },
  footer: {
    tagline:
      "O‘zbekistonda Telegram Stars, Premium va Gift — 10 soniyada avtomatik. Click, Payme, Paynet, UzCard, HUMO va istalgan bank kartasi bilan so‘mda to‘lov.",
    miniAppHeading: "Telegram bot",
    blog: "Blog",
    supportHeading: "Qo‘llab-quvvatlash",
    rights: "Barcha huquqlar himoyalangan.",
  },
  blogIndex: {
    breadcrumbHome: "Bosh sahifa",
    title: "Blog",
    subtitle:
      "Telegram Stars, Premium va sovg‘alar haqida qo‘llanmalar — O‘zbekistonda kartadan to‘lov, narxlar va xavfsizlik.",
    filterAria: "Turkum",
    filterAll: "Hammasi",
    read: "O‘qish",
    totalPostsSuffix: "{count} ta maqola",
    footerNote: "Doimiy yangilanadi",
  },
  blogArticle: {
    openMiniApp: "Botni ochish",
    tryTitle: "Hoziroq sinab ko‘ring",
    tryBody:
      "@StarsPaymee_bot orqali Stars, Premium yoki sovg‘a buyurtmasini bering — 10 soniyada avtomatik yetkaziladi.",
    backList: "Barcha maqolalar",
  },
  categories: {
    Stars: "Stars",
    Premium: "Premium",
    Gifts: "Sovg‘alar",
    Biznes: "Biznes",
    Telegram: "Telegram",
    Xavfsizlik: "Xavfsizlik",
  },
  home: {
    heroBadge: "1 yildan ortiq · O‘zbekiston bo‘ylab",
    heroHeadline:
      "Telegram <stars>Stars</stars>, <premium>Premium</premium> va <gift>Sovg‘alar</gift> — 10 soniyada",
    heroSubtitle:
      "O‘zbekistonda eng tez, arzon va ishonchli xizmat. Username yozasiz, to‘laysiz — buyurtma avtomatik yetadi. Akkauntga kirish shart emas.",
    heroCtaBot: "Botni ochish",
    heroCtaMiniApp: "Mini App",
    heroCtaPrices: "Narxlarni ko‘rish",
    heroBullets: [
      "10 soniyada avtomatik yetkazish",
      "Akkauntga kirish shart emas — username yetarli",
      "Click, Payme, Paynet, UzCard, HUMO",
    ],
    statsDelivery: "Avtomatik yetkazish",
    statsUsers: "Faol foydalanuvchi",
    statsOrders: "Bajarilgan buyurtma",
    statsYears: "Xizmatda",
    statsYearsValue: "1 yil+",
    paymentsTitle: "Istalgan karta bilan to‘lov",
    paymentsNote: "va istalgan O‘zbekiston bank kartasi",
    starsTitle: "Telegram Stars",
    starsLead:
      "Yulduz donasi atigi 220 so‘mdan. Kerakli miqdorni tanlang — bot 10 soniyada hisobingizga yetkazadi.",
    starsUnitBadge: "Donasi {price} — narx standart!",
    starsPerUnitLabel: "donasi",
    starsCta: "Stars sotib olish",
    starsPopular: "Ommabop",
    starsAmountUnit: "yulduz",
    premiumTitle: "Telegram Premium",
    premiumLead:
      "Bozordagi eng arzon narxlardan biri. Ikki xil oqim: tez «username bilan» yoki rasmiy «akkauntga kirib berish».",
    premiumAutoTitle: "Username bilan",
    premiumAutoDesc: "Akkauntga kirmasdan, 10 soniyada avtomatik faollashadi.",
    premiumAutoBadge: "10 soniyada · login shart emas",
    premiumLoginTitle: "Akkauntga kirib berish",
    premiumLoginDesc: "Login orqali rasmiy faollashtirish — alohida xizmat.",
    premiumLoginBadge: "Login bilan",
    premiumPopular: "Ommabop",
    premiumCta: "Premium olish",
    unitMonth: "oy",
    unitYear: "yil",
    perMonth: "oyiga",
    giftsTitle: "Telegram noyob sovg‘alar",
    giftsLead:
      "Telegramning noyob sovg‘alarini o‘zingizga sotib oling yoki do‘stlaringizga yuboring — oson, qulay va ishonchli.",
    giftsBullets: [
      "Sovg‘ani o‘zingizga yoki do‘stingizga yuboring",
      "Anonim tarzda yuborish imkoniyati",
      "Tabrik so‘zini (izoh) qo‘shib yuboring",
      "To‘lov so‘mda — Click, Payme, UzCard, HUMO",
    ],
    giftsCta: "Sovg‘alar",
    whyTitle: "Nega StarsPaymee?",
    whyLead:
      "1 yildan ortiq tajriba, 100 000 dan ortiq buyurtma va 4000 dan ortiq doimiy foydalanuvchi.",
    whyItems: [
      { title: "Eng tezkor", body: "Buyurtma o‘rtacha 10 soniyada avtomatik yetkaziladi." },
      { title: "Eng arzon", body: "Yulduz 220 so‘mdan, Premium 3 oy 172 000 so‘mdan." },
      { title: "Ishonchli", body: "1 yildan ortiq xizmat, 100 000+ bajarilgan buyurtma." },
      { title: "Login shart emas", body: "Premium uchun faqat username — parol yoki kod kerak emas." },
      { title: "Qulay to‘lov", body: "Click, Payme, Paynet, UzCard, HUMO va istalgan karta." },
      { title: "Referral bonus", body: "Do‘st taklif qiling va bonuslar yig‘ing." },
    ],
    processTitle: "Uch bosqichda",
    steps: [
      {
        title: "Botni oching",
        desc: "@StarsPaymee_bot ni Telegramda oching yoki Mini App ni ishga tushiring.",
      },
      {
        title: "Tanlang va username yozing",
        desc: "Stars, Premium yoki sovg‘ani tanlang, kimga ekanini username bilan kiriting.",
      },
      {
        title: "To‘lang va qabul qiling",
        desc: "Click/Payme/UzCard/HUMO bilan to‘lang — 10 soniyada avtomatik yetadi.",
      },
    ],
    ctaTitle: "Birinchi buyurtmangizni hoziroq bering",
    ctaBody:
      "Telegramda @StarsPaymee_bot ni oching — Stars, Premium yoki sovg‘a 10 soniyada hisobingizda.",
    ctaButton: "{brand} botini ochish",
    faqTitle: "Ko‘p so‘raladigan savollar",
    faqItems: mkFaq(faqUz),
  },
  landing: {
    ctaMiniApp: "Botni ochish",
    backHome: "Bosh sahifa",
    sectionsHeading: "Bo‘limlar",
    nav: { stars: "Stars", premium: "Premium", gifts: "Sovg‘alar", about: "Biz haqimizda" },
    stars: {
      metaTitle: "Telegram Stars sotib olish — arzon narx, 10 soniyada | StarsPaymee",
      metaDescription:
        "O‘zbekistonda Telegram Stars sotib oling: donasi 220 so‘mdan, 50 ta 11 000 so‘m. Click, Payme, UzCard, HUMO orqali to‘lov, 10 soniyada avtomatik yetkazish.",
      h1: "Telegram Stars sotib olish",
      intro:
        "StarsPaymee orqali Telegram Stars (yulduz) ni O‘zbekistonda eng arzon narxda sotib oling. Yulduz donasi atigi 220 so‘mdan, bazaviy 50 yulduz 11 000 so‘m. Buyurtma @StarsPaymee_bot orqali beriladi va o‘rtacha 10 soniyada avtomatik yetkaziladi.",
      bullets: [
        "Donasi 220 so‘mdan — 50 yulduz 11 000 so‘m",
        "Click, Payme, Paynet, UzCard, HUMO va istalgan karta",
        "10 soniyada avtomatik yetkazish, akkauntga kirish shart emas",
        "O‘zingizga yoki boshqa username’ga yuborish",
      ],
      footnote:
        "Narx tanlangan yulduz miqdoriga qarab hisoblanadi. Aniq summani @StarsPaymee_bot yoki Mini App da ko‘rasiz.",
    },
    premium: {
      metaTitle: "Telegram Premium sotib olish — 3/6/12 oy, arzon | StarsPaymee",
      metaDescription:
        "Telegram Premium: 3 oy 172 000, 6 oy 232 000, 12 oy 422 000 so‘m. Username bilan 10 soniyada avtomatik faollashadi, akkauntga kirish shart emas.",
      h1: "Telegram Premium sotib olish",
      intro:
        "Telegram Premium obunasini O‘zbekistonda arzon narxda oling: 3 oy 172 000, 6 oy 232 000, 12 oy 422 000 so‘m. «Username bilan» oqimida akkauntga kirish shart emas — Premium 10 soniyada avtomatik faollashadi. Alohida «akkauntga kirib berish» xizmati ham mavjud (1 oy 50 000, 1 yil 300 000 so‘m).",
      bullets: [
        "3 oy 172 000 · 6 oy 232 000 · 12 oy 422 000 so‘m",
        "Username bilan 10 soniyada avtomatik faollashish",
        "Akkauntga kirish, parol yoki SMS-kod talab qilinmaydi",
        "Alohida login bilan faollashtirish: 1 oy 50 000, 1 yil 300 000 so‘m",
      ],
      footnote:
        "Username bilan oqimda faqat @username kifoya. Login bilan oqim alohida xizmat sifatida amalga oshiriladi.",
    },
    gifts: {
      metaTitle: "Telegram noyob sovg‘alar yuborish — anonim, tabrik bilan | StarsPaymee",
      metaDescription:
        "Telegram noyob sovg‘alarini sotib oling yoki do‘stlaringizga yuboring. Anonim yoki tabrik izohi bilan. So‘mda to‘lov, oson va ishonchli.",
      h1: "Telegram sovg‘alari yuborish",
      intro:
        "Telegramning noyob (unique) sovg‘alarini StarsPaymee orqali o‘zingizga sotib oling yoki do‘stlaringizga yuboring. Sovg‘ani anonim tarzda yoki tabrik so‘zi bilan jo‘natishingiz mumkin. To‘lov so‘mda — Click, Payme, UzCard, HUMO orqali.",
      bullets: [
        "Noyob Telegram sovg‘alarini sotib olish yoki yuborish",
        "Anonim yuborish imkoniyati",
        "Tabrik so‘zini (izoh) qo‘shish",
        "So‘mda qulay to‘lov, ishonchli yetkazish",
      ],
      footnote:
        "Mavjud sovg‘alar ro‘yxati va narxlari @StarsPaymee_bot yoki Mini App ichida ko‘rsatiladi.",
    },
    about: {
      metaTitle: "Biz haqimizda — StarsPaymee Telegram Stars va Premium xizmati",
      metaDescription:
        "StarsPaymee — 1 yildan ortiq, 4000+ foydalanuvchi va 100 000+ buyurtma. O‘zbekistonda Telegram Stars, Premium va sovg‘alar bo‘yicha ishonchli xizmat.",
      h1: "Biz haqimizda",
      intro:
        "StarsPaymee — O‘zbekistonda Telegram Stars, Premium va sovg‘alar sotib olish uchun tez, arzon va ishonchli xizmat. 1 yildan ortiq vaqt davomida 4000 dan ortiq foydalanuvchiga 100 000 dan ortiq buyurtmani yetkazib berdik.",
      bullets: [
        "1 yildan ortiq uzluksiz xizmat",
        "4000+ faol O‘zbekiston foydalanuvchisi",
        "100 000+ muvaffaqiyatli buyurtma",
        "Click, Payme, Paynet, UzCard, HUMO bilan so‘mda to‘lov",
      ],
      footnote:
        "Savollar bo‘lsa @StarsPaymee_bot orqali murojaat qiling — qo‘llab-quvvatlash xizmati yordam beradi.",
    },
  },
};

/* ── RUS ───────────────────────────────────────────────────────────────────── */
const baseRu = structuredClone(baseUz);
baseRu.seo = {
  titleDefault: "StarsPaymee",
  titleTemplate: "%s · StarsPaymee",
  description:
    "Telegram Stars, Premium и подарки в Узбекистане — доставка автоматически за 10 секунд. Оплата Click, Payme, Paynet, UzCard, HUMO. Самые низкие цены.",
  ogLocale: "ru_RU",
  keywordsList: [
    "StarsPaymee",
    "купить telegram stars",
    "купить telegram premium",
    "telegram stars цена",
    "telegram premium цена",
    "telegram stars дёшево",
    "telegram premium узбекистан",
    "telegram stars узбекистан",
    "telegram stars uzcard",
    "telegram premium humo",
    "telegram stars click",
    "telegram premium payme",
    "telegram premium по username",
    "telegram premium за 10 секунд",
    "отправить подарок telegram",
    "telegram подарки анонимно",
    "telegram stars бот",
    "starspaymee бот",
    "UzCard",
    "HUMO",
    "Click",
    "Payme",
    "Paynet",
  ],
};
baseRu.nav = {
  home: "Главная",
  services: "Сервисы",
  process: "Процесс",
  trustLabel: "Надёжность",
  faq: "FAQ",
  blog: "Блог",
  openTelegram: "Открыть бота",
  support: "Поддержка",
  menuOpen: "Открыть меню",
  menuClose: "Закрыть меню",
  menuTitle: "Меню",
  menuSubtitle: "Telegram Stars, Premium и подарки",
  menuNavAria: "Мобильная навигация",
};
baseRu.footer = {
  tagline:
    "Telegram Stars, Premium и подарки в Узбекистане — автоматически за 10 секунд. Оплата Click, Payme, Paynet, UzCard, HUMO и любой банковской картой в сумах.",
  miniAppHeading: "Telegram-бот",
  blog: "Блог",
  supportHeading: "Поддержка",
  rights: "Все права защищены.",
};
baseRu.blogIndex = {
  breadcrumbHome: "Главная",
  title: "Блог",
  subtitle:
    "Гайды про Telegram Stars, Premium и подарки — оплата картой в Узбекистане, цены и безопасность.",
  filterAria: "Категория",
  filterAll: "Все",
  read: "Читать",
  totalPostsSuffix: "{count} материалов",
  footerNote: "Регулярно обновляем",
};
baseRu.blogArticle = {
  openMiniApp: "Открыть бота",
  tryTitle: "Попробуйте сейчас",
  tryBody:
    "Оформите заказ Stars, Premium или подарка в @StarsPaymee_bot — доставка автоматически за 10 секунд.",
  backList: "Все материалы",
};
baseRu.categories = {
  Stars: "Stars",
  Premium: "Premium",
  Gifts: "Подарки",
  Biznes: "Бизнес",
  Telegram: "Telegram",
  Xavfsizlik: "Безопасность",
};
baseRu.home = {
  heroBadge: "Больше года · по всему Узбекистану",
  heroHeadline:
    "Telegram <stars>Stars</stars>, <premium>Premium</premium> и <gift>подарки</gift> — за 10 секунд",
  heroSubtitle:
    "Самый быстрый, дешёвый и надёжный сервис в Узбекистане. Указываете username, оплачиваете — заказ приходит автоматически. Вход в аккаунт не нужен.",
  heroCtaBot: "Открыть бота",
  heroCtaMiniApp: "Mini App",
  heroCtaPrices: "Смотреть цены",
  heroBullets: [
    "Автодоставка за 10 секунд",
    "Без входа в аккаунт — достаточно username",
    "Click, Payme, Paynet, UzCard, HUMO",
  ],
  statsDelivery: "Автодоставка",
  statsUsers: "Активных пользователей",
  statsOrders: "Выполненных заказов",
  statsYears: "В работе",
  statsYearsValue: "1 год+",
  paymentsTitle: "Оплата любой картой",
  paymentsNote: "и любой банковской картой Узбекистана",
  starsTitle: "Telegram Stars",
  starsLead:
    "Звезда от 220 сум за штуку. Выберите нужное количество — бот доставит за 10 секунд.",
  starsUnitBadge: "{price} за штуку — стандартная цена, без изменений",
  starsPerUnitLabel: "за шт.",
  starsCta: "Купить Stars",
  starsPopular: "Популярно",
  starsAmountUnit: "звёзд",
  premiumTitle: "Telegram Premium",
  premiumLead:
    "Одни из самых низких цен. Два потока: быстрый «по username» или официальный «вход в аккаунт».",
  premiumAutoTitle: "По username",
  premiumAutoDesc: "Без входа в аккаунт, активируется автоматически за 10 секунд.",
  premiumAutoBadge: "10 секунд · без входа",
  premiumLoginTitle: "Со входом в аккаунт",
  premiumLoginDesc: "Официальная активация через вход — отдельная услуга.",
  premiumLoginBadge: "Со входом",
  premiumPopular: "Популярно",
  premiumCta: "Купить Premium",
  unitMonth: "мес",
  unitYear: "год",
  perMonth: "в месяц",
  giftsTitle: "Уникальные подарки Telegram",
  giftsLead:
    "Покупайте уникальные подарки Telegram себе или отправляйте друзьям — просто, удобно и надёжно.",
  giftsBullets: [
    "Подарок себе или другу",
    "Возможность анонимной отправки",
    "Добавьте поздравительный комментарий",
    "Оплата в сумах — Click, Payme, UzCard, HUMO",
  ],
  giftsCta: "Подарки",
  whyTitle: "Почему StarsPaymee?",
  whyLead: "Больше года опыта, свыше 100 000 заказов и более 4000 постоянных пользователей.",
  whyItems: [
    { title: "Самый быстрый", body: "Заказ доставляется автоматически в среднем за 10 секунд." },
    { title: "Самый дешёвый", body: "Звезда от 220 сум, Premium 3 месяца от 172 000 сум." },
    { title: "Надёжный", body: "Больше года работы, 100 000+ выполненных заказов." },
    { title: "Без входа", body: "Для Premium нужен только username — без пароля и кода." },
    { title: "Удобная оплата", body: "Click, Payme, Paynet, UzCard, HUMO и любая карта." },
    { title: "Реферальный бонус", body: "Приглашайте друзей и копите бонусы." },
  ],
  processTitle: "Три простых шага",
  steps: [
    { title: "Откройте бота", desc: "Откройте @StarsPaymee_bot в Telegram или запустите Mini App." },
    {
      title: "Выберите и укажите username",
      desc: "Выберите Stars, Premium или подарок и укажите получателя по username.",
    },
    {
      title: "Оплатите и получите",
      desc: "Оплатите Click/Payme/UzCard/HUMO — придёт автоматически за 10 секунд.",
    },
  ],
  ctaTitle: "Оформите первый заказ прямо сейчас",
  ctaBody:
    "Откройте @StarsPaymee_bot в Telegram — Stars, Premium или подарок будут на счету за 10 секунд.",
  ctaButton: "Открыть бота {brand}",
  faqTitle: "Частые вопросы",
  faqItems: mkFaq(faqRu),
};
baseRu.locales = baseUz.locales;
baseRu.landing = {
  ctaMiniApp: "Открыть бота",
  backHome: "Главная",
  sectionsHeading: "Разделы",
  nav: { stars: "Stars", premium: "Premium", gifts: "Подарки", about: "О нас" },
  stars: {
    metaTitle: "Купить Telegram Stars — дёшево, за 10 секунд | StarsPaymee",
    metaDescription:
      "Купить Telegram Stars в Узбекистане: от 220 сум за штуку, 50 шт. — 11 000 сум. Оплата Click, Payme, UzCard, HUMO. Автодоставка за 10 секунд.",
    h1: "Купить Telegram Stars",
    intro:
      "Покупайте Telegram Stars в Узбекистане по самой низкой цене через StarsPaymee. Звезда от 220 сум, базовый пакет 50 звёзд — 11 000 сум. Заказ оформляется в @StarsPaymee_bot и доставляется автоматически в среднем за 10 секунд.",
    bullets: [
      "От 220 сум за штуку — 50 звёзд 11 000 сум",
      "Click, Payme, Paynet, UzCard, HUMO и любая карта",
      "Автодоставка за 10 секунд, без входа в аккаунт",
      "Себе или на другой username",
    ],
    footnote:
      "Цена зависит от выбранного количества звёзд. Точную сумму вы увидите в @StarsPaymee_bot или Mini App.",
  },
  premium: {
    metaTitle: "Купить Telegram Premium — 3/6/12 мес, дёшево | StarsPaymee",
    metaDescription:
      "Telegram Premium: 3 мес 172 000, 6 мес 232 000, 12 мес 422 000 сум. По username активируется автоматически за 10 секунд, без входа в аккаунт.",
    h1: "Купить Telegram Premium",
    intro:
      "Оформите подписку Telegram Premium в Узбекистане по низкой цене: 3 месяца 172 000, 6 месяцев 232 000, 12 месяцев 422 000 сум. В потоке «по username» вход в аккаунт не нужен — Premium активируется автоматически за 10 секунд. Есть и отдельная услуга «со входом в аккаунт» (1 мес 50 000, 1 год 300 000 сум).",
    bullets: [
      "3 мес 172 000 · 6 мес 232 000 · 12 мес 422 000 сум",
      "По username — автоактивация за 10 секунд",
      "Без входа в аккаунт, пароля и SMS-кода",
      "Отдельно со входом: 1 мес 50 000, 1 год 300 000 сум",
    ],
    footnote:
      "В потоке по username достаточно @username. Поток со входом — отдельная услуга.",
  },
  gifts: {
    metaTitle: "Отправить уникальные подарки Telegram — анонимно | StarsPaymee",
    metaDescription:
      "Покупайте уникальные подарки Telegram или отправляйте друзьям. Анонимно или с поздравлением. Оплата в сумах, просто и надёжно.",
    h1: "Отправка подарков Telegram",
    intro:
      "Покупайте уникальные подарки Telegram себе или отправляйте друзьям через StarsPaymee. Подарок можно отправить анонимно или с поздравительным комментарием. Оплата в сумах — Click, Payme, UzCard, HUMO.",
    bullets: [
      "Покупка или отправка уникальных подарков Telegram",
      "Возможность анонимной отправки",
      "Поздравительный комментарий",
      "Удобная оплата в сумах, надёжная доставка",
    ],
    footnote:
      "Список доступных подарков и цены показываются в @StarsPaymee_bot или Mini App.",
  },
  about: {
    metaTitle: "О нас — сервис Telegram Stars и Premium StarsPaymee",
    metaDescription:
      "StarsPaymee — больше года, 4000+ пользователей и 100 000+ заказов. Надёжный сервис Telegram Stars, Premium и подарков в Узбекистане.",
    h1: "О нас",
    intro:
      "StarsPaymee — быстрый, дешёвый и надёжный сервис покупки Telegram Stars, Premium и подарков в Узбекистане. За более чем год мы доставили свыше 100 000 заказов более чем 4000 пользователям.",
    bullets: [
      "Больше года непрерывной работы",
      "4000+ активных пользователей из Узбекистана",
      "100 000+ успешных заказов",
      "Оплата в сумах: Click, Payme, Paynet, UzCard, HUMO",
    ],
    footnote: "По вопросам пишите в @StarsPaymee_bot — поддержка поможет.",
  },
};

/* ── ENGLISH ─────────────────────────────────────────────────────────────── */
const baseEn = structuredClone(baseUz);
baseEn.seo = {
  titleDefault: "StarsPaymee",
  titleTemplate: "%s · StarsPaymee",
  description:
    "Telegram Stars, Premium and gifts in Uzbekistan — delivered automatically in 10 seconds. Pay via Click, Payme, Paynet, UzCard, HUMO. Lowest prices.",
  ogLocale: "en_US",
  keywordsList: [
    "StarsPaymee",
    "buy telegram stars",
    "buy telegram premium",
    "telegram stars price",
    "telegram premium price",
    "cheap telegram stars",
    "telegram stars uzbekistan",
    "telegram premium uzbekistan",
    "telegram stars uzcard",
    "telegram premium humo",
    "telegram stars click",
    "telegram premium payme",
    "telegram premium by username",
    "telegram premium 10 seconds",
    "send telegram gifts",
    "telegram gifts anonymous",
    "telegram stars bot",
    "starspaymee bot",
    "UzCard",
    "HUMO",
    "Click",
    "Payme",
    "Paynet",
  ],
};
baseEn.nav = {
  home: "Home",
  services: "Services",
  process: "Flow",
  trustLabel: "Trust",
  faq: "FAQ",
  blog: "Blog",
  openTelegram: "Open bot",
  support: "Support",
  menuOpen: "Open menu",
  menuClose: "Close menu",
  menuTitle: "Menu",
  menuSubtitle: "Telegram Stars, Premium & gifts",
  menuNavAria: "Mobile navigation",
};
baseEn.footer = {
  tagline:
    "Telegram Stars, Premium and gifts in Uzbekistan — automatic in 10 seconds. Pay with Click, Payme, Paynet, UzCard, HUMO and any bank card in UZS.",
  miniAppHeading: "Telegram bot",
  blog: "Blog",
  supportHeading: "Support",
  rights: "All rights reserved.",
};
baseEn.blogIndex = {
  breadcrumbHome: "Home",
  title: "Blog",
  subtitle:
    "Guides about Telegram Stars, Premium and gifts — card payments in Uzbekistan, prices and security.",
  filterAria: "Category",
  filterAll: "All",
  read: "Read article",
  totalPostsSuffix: "{count} articles",
  footerNote: "Updated regularly",
};
baseEn.blogArticle = {
  openMiniApp: "Open bot",
  tryTitle: "Try it now",
  tryBody:
    "Place a Stars, Premium or gift order in @StarsPaymee_bot — delivered automatically in 10 seconds.",
  backList: "All articles",
};
baseEn.categories = {
  Stars: "Stars",
  Premium: "Premium",
  Gifts: "Gifts",
  Biznes: "Business",
  Telegram: "Telegram",
  Xavfsizlik: "Security",
};
baseEn.home = {
  heroBadge: "1+ year · across Uzbekistan",
  heroHeadline:
    "Telegram <stars>Stars</stars>, <premium>Premium</premium> and <gift>Gifts</gift> — in 10 seconds",
  heroSubtitle:
    "The fastest, cheapest and most reliable service in Uzbekistan. Enter a username, pay — your order arrives automatically. No account login required.",
  heroCtaBot: "Open bot",
  heroCtaMiniApp: "Mini App",
  heroCtaPrices: "See prices",
  heroBullets: [
    "Automatic delivery in 10 seconds",
    "No account login — username is enough",
    "Click, Payme, Paynet, UzCard, HUMO",
  ],
  statsDelivery: "Auto delivery",
  statsUsers: "Active users",
  statsOrders: "Completed orders",
  statsYears: "In service",
  statsYearsValue: "1 yr+",
  paymentsTitle: "Pay with any card",
  paymentsNote: "and any Uzbek bank card",
  starsTitle: "Telegram Stars",
  starsLead:
    "Stars from 220 so‘m each. Pick the amount you need — the bot delivers in 10 seconds.",
  starsUnitBadge: "{price} each — standard price, unchanged",
  starsPerUnitLabel: "each",
  starsCta: "Buy Stars",
  starsPopular: "Popular",
  starsAmountUnit: "stars",
  premiumTitle: "Telegram Premium",
  premiumLead:
    "Among the lowest prices around. Two flows: the fast “by username” or the official “account login”.",
  premiumAutoTitle: "By username",
  premiumAutoDesc: "No account login — activates automatically in 10 seconds.",
  premiumAutoBadge: "10 seconds · no login",
  premiumLoginTitle: "Via account login",
  premiumLoginDesc: "Official activation through login — a separate service.",
  premiumLoginBadge: "With login",
  premiumPopular: "Popular",
  premiumCta: "Buy Premium",
  unitMonth: "mo",
  unitYear: "yr",
  perMonth: "per month",
  giftsTitle: "Telegram unique gifts",
  giftsLead:
    "Buy Telegram unique gifts for yourself or send them to friends — easy, convenient and reliable.",
  giftsBullets: [
    "Gift for yourself or a friend",
    "Send anonymously if you like",
    "Add a congratulatory comment",
    "Pay in UZS — Click, Payme, UzCard, HUMO",
  ],
  giftsCta: "Gifts",
  whyTitle: "Why StarsPaymee?",
  whyLead: "Over a year of experience, 100,000+ orders and 4,000+ returning users.",
  whyItems: [
    { title: "Fastest", body: "Orders are delivered automatically in about 10 seconds." },
    { title: "Cheapest", body: "Stars from 220 so‘m, Premium 3 months from 172,000 so‘m." },
    { title: "Reliable", body: "Over a year in service, 100,000+ completed orders." },
    { title: "No login", body: "Premium needs only a username — no password or code." },
    { title: "Easy payment", body: "Click, Payme, Paynet, UzCard, HUMO and any card." },
    { title: "Referral bonus", body: "Invite friends and collect bonuses." },
  ],
  processTitle: "Three simple steps",
  steps: [
    { title: "Open the bot", desc: "Open @StarsPaymee_bot in Telegram or launch the Mini App." },
    {
      title: "Choose & enter username",
      desc: "Pick Stars, Premium or a gift and enter the recipient by username.",
    },
    {
      title: "Pay & receive",
      desc: "Pay with Click/Payme/UzCard/HUMO — arrives automatically in 10 seconds.",
    },
  ],
  ctaTitle: "Place your first order right now",
  ctaBody:
    "Open @StarsPaymee_bot in Telegram — Stars, Premium or a gift lands in 10 seconds.",
  ctaButton: "Open {brand} bot",
  faqTitle: "Common questions",
  faqItems: mkFaq(faqEn),
};
baseEn.locales = baseUz.locales;
baseEn.landing = {
  ctaMiniApp: "Open bot",
  backHome: "Home",
  sectionsHeading: "Sections",
  nav: { stars: "Stars", premium: "Premium", gifts: "Gifts", about: "About" },
  stars: {
    metaTitle: "Buy Telegram Stars — cheap, in 10 seconds | StarsPaymee",
    metaDescription:
      "Buy Telegram Stars in Uzbekistan: from 220 so‘m each, 50 for 11,000 so‘m. Pay via Click, Payme, UzCard, HUMO. Auto delivery in 10 seconds.",
    h1: "Buy Telegram Stars",
    intro:
      "Buy Telegram Stars in Uzbekistan at the lowest price through StarsPaymee. Stars from 220 so‘m each, base pack of 50 for 11,000 so‘m. Orders are placed in @StarsPaymee_bot and delivered automatically in about 10 seconds.",
    bullets: [
      "From 220 so‘m each — 50 stars for 11,000 so‘m",
      "Click, Payme, Paynet, UzCard, HUMO and any card",
      "Auto delivery in 10 seconds, no account login",
      "To yourself or another username",
    ],
    footnote:
      "Price depends on the amount of Stars you choose. You’ll see the exact total in @StarsPaymee_bot or the Mini App.",
  },
  premium: {
    metaTitle: "Buy Telegram Premium — 3/6/12 months, cheap | StarsPaymee",
    metaDescription:
      "Telegram Premium: 3 mo 172,000, 6 mo 232,000, 12 mo 422,000 so‘m. By username it activates automatically in 10 seconds, no account login.",
    h1: "Buy Telegram Premium",
    intro:
      "Get a Telegram Premium subscription in Uzbekistan at a low price: 3 months 172,000, 6 months 232,000, 12 months 422,000 so‘m. In the “by username” flow no account login is needed — Premium activates automatically in 10 seconds. A separate “account login” service is also available (1 month 50,000, 1 year 300,000 so‘m).",
    bullets: [
      "3 mo 172,000 · 6 mo 232,000 · 12 mo 422,000 so‘m",
      "By username — auto activation in 10 seconds",
      "No account login, password or SMS code",
      "Separate login flow: 1 month 50,000, 1 year 300,000 so‘m",
    ],
    footnote:
      "The by-username flow needs only a @username. The login flow is a separate service.",
  },
  gifts: {
    metaTitle: "Send Telegram unique gifts — anonymously | StarsPaymee",
    metaDescription:
      "Buy Telegram unique gifts or send them to friends. Anonymously or with a greeting. Pay in UZS, simple and reliable.",
    h1: "Send Telegram gifts",
    intro:
      "Buy Telegram unique gifts for yourself or send them to friends through StarsPaymee. A gift can be sent anonymously or with a congratulatory comment. Pay in UZS — Click, Payme, UzCard, HUMO.",
    bullets: [
      "Buy or send Telegram unique gifts",
      "Send anonymously if you like",
      "Add a congratulatory comment",
      "Convenient UZS payment, reliable delivery",
    ],
    footnote:
      "Available gifts and prices are shown in @StarsPaymee_bot or the Mini App.",
  },
  about: {
    metaTitle: "About — StarsPaymee Telegram Stars & Premium service",
    metaDescription:
      "StarsPaymee — 1+ year, 4,000+ users and 100,000+ orders. A reliable Telegram Stars, Premium and gifts service in Uzbekistan.",
    h1: "About us",
    intro:
      "StarsPaymee is a fast, cheap and reliable service for buying Telegram Stars, Premium and gifts in Uzbekistan. In over a year we’ve delivered more than 100,000 orders to more than 4,000 users.",
    bullets: [
      "Over a year of continuous service",
      "4,000+ active users in Uzbekistan",
      "100,000+ successful orders",
      "Pay in UZS: Click, Payme, Paynet, UzCard, HUMO",
    ],
    footnote: "For questions, reach us via @StarsPaymee_bot — support is happy to help.",
  },
};

for (const [name, blob] of [
  ["uz", baseUz],
  ["ru", baseRu],
  ["en", baseEn],
]) {
  fs.writeFileSync(path.join(outDir, `${name}.json`), JSON.stringify(blob, null, 2), "utf8");
}

console.log("messages/*.json yozildi.");

