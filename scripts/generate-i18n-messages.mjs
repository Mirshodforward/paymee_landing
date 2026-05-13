import fs from "fs";
import path from "path";

const root = path.join(import.meta.dirname, "..");
const outDir = path.join(root, "messages");
fs.mkdirSync(outDir, { recursive: true });

const faqUz = [
  [
    "StarsPaymee nima va qayerda ochiladi?",
    "StarsPaymee — Telegram ichida ishlaydigan Mini App (WebApp): siz akkaunt orqali kirib, Telegram Stars sotib olish, Telegram Premium obunasini uzaytirish yoki Telegram Gift jo‘natishni bitta joydan bajarolasiz. Interfeys @twa-dev/sdk va Telegram WebApp API bilan moslangan.",
  ],
  [
    "Qanday to‘lov vositalari qo‘llab-quvvatlanadi?",
    "Asosiy oqim O‘zbekiston bank kartalari — UzCard va HUMO orqali so‘m (UZS) da to‘lov. Buyurtmadan keyin backend buyurtmani tekshiradi va tasdiqlangach Stars, Premium yoki Gift yuboriladi.",
  ],
  [
    "Eski yoki cheklangan muddatli Telegram giftlar bilan nima qilish mumkin?",
    "Platforma Telegramning ruxsat etilgan mexanizmalaridan foydalanib: cheklangan (limited), avvalgi sessiyadagi yoki endi oddiy koleksiya sifatida saqlanmayotgan giftlarni yulduz (Stars) balansiga yo‘naltirish yoki Telegram qoidalariga mos holda qayta ishlash bo‘yicha yo‘l-yo‘riq beradi. Aniq funksiya Mini App ichidagi Gift bo‘limida ko‘rsatiladi.",
  ],
  [
    "Xavfsizlik va akkaunt tekshiruvi qanday?",
    "Telegram WebApp initData HMAC-SHA256 bilan serverda tekshiriladi; CORS faqat ruxsat etilgan domenlar uchun; rate limiting va Helmet kabi HTTP xavfsizlik sarlavhalari qo‘llaniladi. Bu loyiha arxitekturasida server-to-server ichki kalitlar bilan himoyalangan.",
  ],
  [
    "Referral va chegirmalar bormi?",
    "Ha: referral havola orqali kelgan foydalanuvchilar xarid qilganda referrerga bonus yulduzlar hisoblanadi; chegirma paketlari va promokodlar Stars, Premium va Gift buyurtmalarida ishlatilishi mumkin.",
  ],
];

const faqRu = [
  [
    "Что такое StarsPaymee и где оно открывается?",
    "StarsPaymee — мини-приложение Telegram (WebApp): вы авторизуетесь аккаунтом, покупаете Telegram Stars, продлеваете Telegram Premium и отправляете Telegram Gift из одного места. Интерфейс согласован с Telegram WebApp API и практикой @twa-dev/sdk.",
  ],
  [
    "Какие способы оплаты поддерживаются?",
    "Основной поток — банковские карты Узбекистана: UzCard и HUMO в сумах (UZS). После оплаты бэкенд проверяет заказ и при подтверждении отправляет Stars, Premium или Gift.",
  ],
  [
    "Что можно сделать со старыми или ограниченными Telegram gift?",
    "Платформа использует допустимые механизмы Telegram для работы с limited и устаревшими подарками, при необходимости направляет Stars и даёт понятную логику в разделе Gift мини-приложения.",
  ],
  [
    "Как устроены безопасность и проверка аккаунта?",
    "initData WebApp проверяется через HMAC-SHA256 на сервере; CORS только для доверенных доменов; rate limiting и Helmet для HTTP-безопасности. Сервер-сервер вызовы защищены внутренними ключами.",
  ],
  [
    "Есть ли реферальная программа и скидки?",
    "Да: по реферальной ссылке за покупки начисляются бонусы звёзд; доступны промокоды и пакеты скидок для Stars, Premium и Gift.",
  ],
];

const faqEn = [
  [
    "What is StarsPaymee and where do I open it?",
    "StarsPaymee is a Telegram Mini App (Web App): once you authenticate, you buy Telegram Stars, extend Telegram Premium, and send Telegram Gifts—everything from one hub. Built with Telegram Web App patterns and tooling similar to @twa-dev/sdk.",
  ],
  [
    "Which payment methods are supported?",
    "Primarily Uzbek cards—UzCard & HUMO—in UZS. After payment succeeds, our backend verifies the order then delivers Stars, Premium, or a Gift.",
  ],
  [
    "What about old / limited Telegram gifts?",
    "We rely on Telegram-allowed workflows for limited/outdated gifts, help convert value into Stars when applicable, and present the UX inside the Gift area of the mini app.",
  ],
  [
    "How secure is onboarding?",
    "We validate Telegram initData with HMAC-SHA256, lock CORS to trusted origins, enforce rate limiting, standard Helmet headers, and server-to-server secrets for internal APIs.",
  ],
  [
    "Are referrals and promos supported?",
    "Yes—friends who join via your link yield bonus Stars; curated campaigns and promo codes apply across Stars, Premium, and Gifts.",
  ],
];

function mkFaq(pairs) {
  return pairs.map(([question, answer]) => ({ question, answer }));
}

const baseUz = {
  seo: {
    titleDefault: "Stars X Premium",
    description: "Telegram Stars platformasi",
    ogLocale: "uz_UZ",
    keywordsList: [
      "StarsPaymee",
      "telegram stars",
      "telegram premium",
      "telegram gifts",
      "telegram gift",
      "Telegram Stars sotib olish",
      "telegram premium sotib olish",
      "telegram yulduzlar",
      "telegram yulduzlar sotib olish",
      "telegram hadyalar",
      "telegram hadya yuborish",
      "telegram sovg'a yuborish",
      "telegram sovg'alar",
      "telegram stars narxi",
      "telegram premium narxi",
      "telegram stars va premium narxlari",
      "telegram stars to'ldirish",
      "telegram stars to'ldirish usullari",
      "telegram premium qanday olish",
      "telegram stars qanday olish",
      "telegram stars nima",
      "telegram premium nima",
      "telegram stars qanday ishlaydi",
      "telegram premium qanday ishlaydi",
      "telegram stars foydasi nima",
      "telegram premium foydalari",
      "telegram hadyalar qanday yuboriladi",
      "telegram gift yuborish",
      "telegram stars sovg'a qilish",
      "telegram premium sovg'a qilish",
      "telegram stars arzon sotib olish",
      "telegram premium arzon olish",
      "telegram stars tez va ishonchli sotib olish",
      "telegram stars tez yetkazib berish",
      "telegram premium darhol olish",
      "telegram premium darhol aktivatsiya qilish",
      "telegram premium eng arzon narxda olish",
      "telegram stars arzon narxda sotib olish",
      "telegram stars online sotib olish",
      "telegram premium online sotib olish",
      "telegram stars karta orqali to'lash",
      "telegram premium uzcard orqali olish",
      "telegram stars uzcard",
      "telegram premium humo orqali",
      "telegram stars visa orqali sotib olish",
      "telegram stars visa orqali",
      "telegram premium mastercard orqali",
      "telegram stars crypto orqali olish",
      "telegram premium chegirma bilan olish",
      "telegram stars to'lov qilish",
      "telegram premium to'lash",
      "telegram hadyalar online yuborish",
      "telegram sovg'alar olish",
      "telegram premium gift qilish",
      "telegram hadyalar do'koni",
      "telegram stars bot",
      "telegram premium bot",
      "telegram to'lov boti",
      "telegram stars xizmat",
      "telegram premium xizmat",
      "telegram stars xizmatlari",
      "telegram premium xizmatlari",
      "telegram stars va premium sotib olish",
      "telegram yulduzlar va sovg'alar",
      "telegram stars O'zbekiston",
      "telegram premium O'zbekiston",
      "telegram stars O'zbekistonda",
      "telegram premium O'zbekistonda",
      "telegram stars O'zbekistonda sotib olish",
      "telegram premium O'zbekistonda qanday olish",
      "telegram stars Toshkent",
      "telegram premium Toshkent",
      "telegram hadyalar O'zbekistonda",
      "telegram stars purchase",
      "telegram premium subscription",
      "telegram gifts send",
      "UzCard",
      "HUMO",
      "Telegram Mini App",
    ],
  },
  nav: {
    services: "Xizmatlar",
    process: "Jarayon",
    trustLabel: "Ishonch",
    faq: "FAQ",
    blog: "Blog",
    openTelegram: "Telegramda ochish",
  },
  locales: {
    uz: "O‘zbekcha",
    ru: "Ruscha",
    en: "Inglizcha",
    switchAria: "Tilni tanlang",
  },
  footer: {
    tagline:
      "Telegram Stars, Premium, Gift va eski giftlar bilan ishlash — O‘zbekiston kartalari bilan so‘m to‘lov.",
    miniAppHeading: "Mini App havolasi",
    blog: "Blog",
  },
  blogIndex: {
    breadcrumbHome: "Bosh sahifa",
    title: "Blog",
    subtitle:
      "Telegram Stars, Premium va Gifts haqida yangiliklar va qo‘llanmalar — O‘zbekistonda kartadan toʻlovlar, reseller va xavfsizlik mavzulari.",
    filterAria: "Turkum",
    filterAll: "Hammasi",
    read: "O‘qish",
    totalPostsSuffix: "{count} ta maqola",
    footerNote: "Yangilanishi doimiy",
  },
  blogArticle: {
    openMiniApp: "Mini App ochish",
    tryTitle: "Amaliyotda sinab ko‘ring",
    tryBody:
      "StarsPaymee Mini App orqali Stars, Premium va Gifts bo‘yicha buyurtmani bir joyda yarating va statusni kuzating.",
    backList: "Barcha maqolalar",
  },
  categories: {
    Stars: "Stars",
    Premium: "Premium",
    Gifts: "Gifts",
    Biznes: "Biznes",
    Telegram: "Telegram",
    Xavfsizlik: "Xavfsizlik",
  },
  home: {
    skipToMain: "Asosiy kontentga o‘tish",
    heroBadgeTelegram: "Telegram Mini App",
    heroBadgeCards: "UzCard · HUMO",
    heroHeadline:
      "Telegram <stars>Stars</stars>, <premium>Premium</premium> va <gift>Gift</gift> — bitta platformada",
    heroCtaMiniApp: "Mini App ni ochish",
    heroCtaServices: "Xizmatlar",
    bulletTransparent: "So‘mda shaffof narxlash",
    bulletOldGifts: "Eskirgan giftlar bilan ishlash",
    bulletReferral: "Referral bonuslari",
    cardAria: "StarsPaymee xizmatlari qisqacha",
    cardLiveFlow: "Live flow",
    cardDashboardFlow: "Dashboard",
    starsOrder: "Stars buyurtmasi",
    ddPriceSlot: 'narxi <arrow/> slot / polling',
    premiumDd: "qidiruv + 3|6|12 oy",
    giftDd: "TGS tanlash va jo‘natish",
    giftLimitedLabel: "Gift + limited",
    premiumLabelShort: "Premium",
    heroQuickActions: "Mini App ichida tezkor yo‘nalishlar",
    buyStarsShort: "Stars olish",
    buyPremiumShort: "Premium olish",
    giftsBannerBadge: "Telegram Gifts",
    giftsBannerHeading: "Sovg‘a yuborish — bir joydan boshlang",
    giftsBannerLead:
      "StarsPaymee Mini App Telegram Gifts katalogidan sovg‘a tanlash, izoh va anonim yuborish oqimini UzCard/HUMO bilan so‘mda yakunlashni soddalashtiradi.",
    giftsBannerBullets: [
      "Tanlangan gift va oluvchini aniq tasdiqlash",
      "Katalogdagi yozuvlar va cheklovlar Mini App bilan sinxron",
      "Eski va cheklangan giftlar bilan ishlash alohida modulda ko‘riladi",
      "\"Giftlar haqida\" batafsil ma’lumot alohida sahifada",
    ],
    giftsBannerDetails: "Giftlar sahifasi",
    giftsBannerOpenMini: "Mini Appda ochish",
    svcHeading: "Nimalarni qilish mumkin?",
    svcIntro:
      "Loyiha modullari Telegram bot + Express REST + Postgres va React (Vite) Mini App tuzilmasida ishlaydi; asosiy sahifalar: boshqaruv paneli, Stars, Premium, Gift, tarix va referral — bularning barchasi marketing uchun quyidagi ustunvorlik bilan ifodalangan.",
    svcItems: [
      {
        title: "Telegram Stars",
        body: "Kerakli miqdorda yulduz tanlang — slot asosidagi narx, buyurtma holati polling orqali: toʻlov → yuborish → tasdiqlangan.",
        tag: "/stars",
      },
      {
        title: "Telegram Premium",
        body: "3, 6 yoki 12 oy obuna. Foydalanuvchini qidirish, Premium mavjudligi tekshiruvi va promokoddan keyingi buyurtma oqimi.",
        tag: "/premium",
      },
      {
        title: "Telegram Gift",
        body: "Katalogdan sovg‘a tanlash, anonim yuborish, izoh va TGS koʻrinishi — yoʻnatish Telegram sendGift akasi orqali.",
        tag: "/gift",
      },
      {
        title: "Eski va limited giftlar",
        body: "Muddati oʻtgan yoki koleksiyasiz qolgan Telegram giftlar bilan ishlash: ularni Stars formatiga oʻtkazish va akkaunt boʻylab boshqarish uchun qulay interfeys.",
        tag: "Gift va Stars",
      },
    ],
    processHeading: "Uch bosqichda",
    steps: [
      {
        title: "Botda oching",
        desc: "Telegramda havolani bosing va StarsPaymee Mini App ni ishga tushiring — profilingiz Telegram orqali avtomatik aniqlanadi.",
      },
      {
        title: "Xizmatni tanlang",
        desc: "Stars, Premium yoki Gift: qabul qiluvchini tasdiqlang, miqdorni tanlang va narxni so‘mda ko‘ring.",
      },
      {
        title: "To‘lang va qabul qiling",
        desc: "UzCard/HUMO bilan to‘lang; buyurtma tarixi va statuslar History bo‘limida — muvaffaqiyatda yulduz yoki Premium yoki Gift hisoblanadi.",
      },
    ],
    trustHeading: "Texnik ishonch",
    trustItems: [
      {
        label: "initData HMAC",
        detail: "Serverda Telegram imzosini tekshirish",
      },
      { label: "Rate limit", detail: "IP bo‘yicha so‘rovlar cheklangan" },
      { label: "CORS va Helmet", detail: "Faqat ruxsat etilgan domenlar" },
      { label: "Buyurtma kuzatuv", detail: "ID bo‘yicha status API" },
    ],
    ctaHeading:
      "Telegramda sahifani yuklang va birinchi Stars yoki Premium buyurtmangizni qiling",
    ctaBody:
      "Chegirmalar va promokodlar, referral balansidan yechib olish — barchasi Mini App navigatsiyasida mavjud.",
    ctaButton: "{brand} · Telegram",
    faqHeading: "Ko‘p so‘raladigan savollar",
    faqItems: mkFaq(faqUz),
  },
};

const baseRu = structuredClone(baseUz);
baseRu.seo = {
  titleDefault: "Stars X Premium",
  description: "Платформа Telegram Stars",
  ogLocale: "ru_RU",
  keywordsList: [
    "StarsPaymee",
    "telegram stars",
    "telegram premium",
    "telegram gifts",
    "telegram gift",
    "купить telegram stars",
    "купить telegram premium",
    "telegram stars цена",
    "telegram premium цена",
    "telegram подарки",
    "отправить подарок telegram",
    "telegram stars пополнить",
    "telegram premium подписка",
    "telegram stars покупка",
    "telegram premium купить дешево",
    "мини приложение Telegram",
    "telegram stars Uzbekistan",
    "telegram premium Uzbekistan",
    "telegram подарки Uzbekistan",
    "купить stars telegram Uzbekistan",
    "telegram stars UzCard",
    "telegram premium HUMO",
    "telegram stars оплата картой",
    "telegram premium оплата",
    "telegram stars мгновенная доставка",
    "telegram premium скидка",
    "telegram bot stars",
    "telegram bot premium",
    "telegram stars сервис",
    "telegram premium сервис",
    "telegram gift отправить",
    "telegram подарочные звезды",
    "UzCard",
    "HUMO",
    "Узбекистан",
    "Ташкент",
    "Telegram Stars",
    "Telegram Premium",
    "Telegram Gift",
  ],
};
baseRu.nav = {
  services: "Сервисы",
  process: "Процесс",
  trustLabel: "Надежность",
  faq: "FAQ",
  blog: "Блог",
  openTelegram: "Открыть в Telegram",
};
baseRu.footer = {
  tagline:
    "Stars, Premium, подарки и работа со старыми подарками — оплата в сумах узбекскими картами.",
  miniAppHeading: "Мини-приложение",
  blog: "Блог",
};
baseRu.blogIndex = {
  breadcrumbHome: "Главная",
  title: "Блог",
  subtitle:
    "Материалы про Telegram Stars, Premium и Gifts: оплаты в Узбекистане, реселлер и безопасность.",
  filterAria: "Категория",
  filterAll: "Все",
  read: "Читать",
  totalPostsSuffix: "{count} материалов",
  footerNote: "Обновляем регулярно",
};
baseRu.blogArticle = {
  openMiniApp: "Открыть Mini App",
  tryTitle: "Попробуйте в приложении",
  tryBody:
    "Создавайте заказы Stars/Premium/Gift в StarsPaymee Mini App и отслеживайте статус в одном окне.",
  backList: "Все материалы",
};
baseRu.categories = {
  Stars: "Stars",
  Premium: "Premium",
  Gifts: "Gifts",
  Biznes: "Бизнес",
  Telegram: "Telegram",
  Xavfsizlik: "Безопасность",
};
baseRu.home = {
  skipToMain: "Перейти к содержимому",
  heroBadgeTelegram: "Telegram Mini App",
  heroBadgeCards: "UzCard · HUMO",
  heroHeadline:
    "<stars>Stars</stars>, <premium>Premium</premium> и <gift>Gift</gift> в Telegram — в одном месте",
  heroCtaMiniApp: "Открыть Mini App",
  heroCtaServices: "Сервисы",
  bulletTransparent: "Прозрачные цены в сумах",
  bulletOldGifts: "Работа со старыми подарками",
  bulletReferral: "Реферальные бонусы",
  cardAria: "Краткий обзор StarsPaymee",
  cardLiveFlow: "Live flow",
  cardDashboardFlow: "Dashboard",
  starsOrder: "Заказ Stars",
  ddPriceSlot: 'цена <arrow/> слот / polling',
  premiumDd: "поиск + 3|6|12 мес",
  giftDd: "выбор TGS и отправка",
  giftLimitedLabel: "Gift + limited",
  premiumLabelShort: "Premium",
  heroQuickActions: "Быстрые разделы Mini App",
  buyStarsShort: "Купить Stars",
  buyPremiumShort: "Купить Premium",
  giftsBannerBadge: "Telegram Gifts",
  giftsBannerHeading: "Отправка подарков — с одной площадки",
  giftsBannerLead:
    "StarsPaymee в Mini App соединяет каталог Telegram Gifts, комментарий, аноним (если разрешено) и оплату UzCard/HUMO в сумах.",
  giftsBannerBullets: [
    "Фиксируем получателя и gift_id перед списанием",
    "Актуальные статусы и ограничения Telegram видны перед оплатой",
    "Legacy/limited-сценарии ведём через отдельные модули",
    "Подробности — отдельная страница /gifts для SEO и пользователей",
  ],
  giftsBannerDetails: "Страница Gifts",
  giftsBannerOpenMini: "Открыть в Mini App",
  svcHeading: "Что можно сделать?",
  svcIntro:
    "Модули на базе Telegram-бота, Express REST и PostgreSQL и React/Vite Mini App: дашборд, Stars, Premium, Gift, история и рефералка — здесь они сведены в маркетинговый блок.",
  svcItems: [
    {
      title: "Telegram Stars",
      body: "Выберите количество — цена зависит от слота; статус заказа обновляется через polling после оплаты.",
      tag: "/stars",
    },
    {
      title: "Telegram Premium",
      body: "Пакеты 3, 6 и 12 месяцев с поиском пользователя и проверкой активного Premium перед оплатой.",
      tag: "/premium",
    },
    {
      title: "Telegram Gift",
      body: "Каталог, анонимная отправка, комментарий и TGS; доставка через Telegram sendGift.",
      tag: "/gift",
    },
    {
      title: "Legacy / limited подарки",
      body: "Работа с истёкшими или limited-подарками: конвертация в Stars и удобное управление в интерфейсе.",
      tag: "Gift и Stars",
    },
  ],
  processHeading: "Три простых шага",
  steps: [
    {
      title: "Откройте в боте",
      desc: "Перейдите по ссылке и запустите StarsPaymee Mini App — профиль Telegram подтягивается автоматически.",
    },
    {
      title: "Выберите сервис",
      desc: "Stars, Premium или Gift: проверьте получателя и суммы в сумах перед оплатой.",
    },
    {
      title: "Оплатите и получите",
      desc: "UzCard/HUMO оплата, статусы заказов в разделе History — после успеха приходят Stars, Premium или Gift.",
    },
  ],
  trustHeading: "Инженерное доверие",
  trustItems: [
    { label: "initData HMAC", detail: "Проверка подписи Telegram на сервере" },
    {
      label: "Rate limit",
      detail: "Ограничение запросов по IP по правилам API",
    },
    { label: "CORS + Helmet", detail: "Только доверенные домены" },
    { label: "Статус заказа", detail: "API по ID без лишней болтовни" },
  ],
  ctaHeading:
    "Загрузите Mini App и оформите первый заказ Stars или Premium уже сегодня",
  ctaBody:
    "Акции, промокоды и вывод реф-баланса — всё находится рядом в навигации Mini App.",
  ctaButton: "{brand} · Telegram",
  faqHeading: "Частые вопросы",
  faqItems: mkFaq(faqRu),
};
baseRu.locales = baseUz.locales;

const baseEn = structuredClone(baseUz);
baseEn.seo = {
  titleDefault: "Stars X Premium",
  description: "Telegram Stars platform",
  ogLocale: "en_US",
  keywordsList: [
    "StarsPaymee",
    "telegram stars",
    "telegram premium",
    "telegram gifts",
    "telegram gift",
    "buy telegram stars",
    "telegram stars buy",
    "telegram stars purchase",
    "telegram premium buy",
    "buy telegram stars online",
    "buy telegram premium instantly",
    "buy telegram stars cheap",
    "cheap telegram premium subscription",
    "telegram stars instant delivery",
    "telegram stars fast delivery",
    "telegram premium discount",
    "telegram gifts send",
    "send telegram gifts online",
    "telegram stars price",
    "telegram premium price",
    "telegram premium cheap price",
    "telegram premium cost",
    "telegram stars recharge",
    "telegram stars recharge online",
    "telegram stars payment method",
    "telegram stars payment uzcard",
    "telegram stars payment visa",
    "telegram stars with crypto",
    "telegram premium gift purchase",
    "telegram gift cards",
    "telegram gifts shop",
    "send gift telegram stars",
    "telegram gift premium",
    "telegram gift subscription",
    "how to buy telegram stars",
    "how to get telegram premium",
    "telegram stars for bots",
    "telegram monetization how it works",
    "telegram stars vs premium",
    "telegram gifts how to send",
    "telegram stars bot",
    "telegram premium bot",
    "telegram payment bot",
    "telegram stars API",
    "telegram premium service",
    "telegram stars Uzbekistan payment",
    "telegram premium subscription Uzbekistan",
    "telegram stars Uzbekistan",
    "telegram premium Uzbekistan",
    "where to buy telegram stars cheap online",
    "best site to buy telegram premium 2026",
    "how to send telegram gifts without bot",
    "UzCard",
    "HUMO",
    "Uzbekistan",
    "Telegram Mini App",
    "Telegram Stars",
    "Telegram Premium",
    "Telegram Gift",
  ],
};
baseEn.nav = {
  services: "Services",
  process: "Flow",
  trustLabel: "Trust",
  faq: "FAQ",
  blog: "Blog",
  openTelegram: "Open in Telegram",
};
baseEn.footer = {
  tagline:
    "Telegram Stars, Premium, Gifts, and legacy-present workflows—checkout with Uzbek cards in UZS.",
  miniAppHeading: "Mini App link",
  blog: "Blog",
};
baseEn.blogIndex = {
  breadcrumbHome: "Home",
  title: "Blog",
  subtitle:
    "Guides about Telegram Stars, Premium, and Gifts—cards in Uzbekistan, reseller models, security.",
  filterAria: "Category",
  filterAll: "All",
  read: "Read article",
  totalPostsSuffix: "{count} articles",
  footerNote: "Updated regularly",
};
baseEn.blogArticle = {
  openMiniApp: "Open Mini App",
  tryTitle: "Try it in the app",
  tryBody:
    "Create Stars/Premium/Gift orders inside StarsPaymee Mini App and watch status updates in real time.",
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
  skipToMain: "Skip to main content",
  heroBadgeTelegram: "Telegram Mini App",
  heroBadgeCards: "UzCard · HUMO",
  heroHeadline:
    "Telegram <stars>Stars</stars>, <premium>Premium</premium>, and <gift>Gifts</gift>—one cockpit",
  heroCtaMiniApp: "Open Mini App",
  heroCtaServices: "Explore services",
  bulletTransparent: "Transparent UZS pricing",
  bulletOldGifts: "Support for ageing gifts",
  bulletReferral: "Referral rewards",
  cardAria: "StarsPaymee live flow snapshot",
  cardLiveFlow: "Live flow",
  cardDashboardFlow: "Dashboard",
  starsOrder: "Stars checkout",
  ddPriceSlot: 'price <arrow/> slot / polling',
  premiumDd: "recipient search + 3|6|12 mo",
  giftDd: "pick TGS + deliver",
  giftLimitedLabel: "Gift + limited",
  premiumLabelShort: "Premium",
  heroQuickActions: "Quick actions in Mini App",
  buyStarsShort: "Get Stars",
  buyPremiumShort: "Get Premium",
  giftsBannerBadge: "Telegram Gifts",
  giftsBannerHeading: "Send gifts from one cockpit",
  giftsBannerLead:
    "StarsPaymee wraps Telegram Gifts selection—notes, anonymity where supported—and checkout with Uzbek cards (UzCard/HUMO) in UZS right inside Mini App.",
  giftsBannerBullets: [
    "Crystal-clear recipient plus gift IDs before charging the card",
    "Catalog wording and Telegram guardrails surfaced where you buy",
    "Legacy or limited presets are routed through the Gifts + Stars tooling",
    "Need the long read? Dedicated /gifts page explains the playbook",
  ],
  giftsBannerDetails: "Gifts landing page",
  giftsBannerOpenMini: "Open in Mini App",
  svcHeading: "What can you accomplish?",
  svcIntro:
    "Our Telegram bot pairs with Express/Postgres/React (Vite) Mini App dashboards—Stars, Premium, Gifts, receipts, referrals—marketing copy below mirrors the modular build.",
  svcItems: [
    {
      title: "Telegram Stars",
      body: "Select the Stars amount—slot-priced quotes, deterministic polling updates after checkout.",
      tag: "/stars",
    },
    {
      title: "Telegram Premium",
      body: "3/6/12 month passes with recipient lookups and sanity checks prior to issuing Premium.",
      tag: "/premium",
    },
    {
      title: "Telegram Gifts",
      body: "Curated catalogue, anonymity, notes, sticker previews—issued through Telegram gift APIs.",
      tag: "/gift",
    },
    {
      title: "Legacy gifts",
      body: "Handle limited/expired presets, convert Stars where allowed, consolidate account-wide controls.",
      tag: "Gift + Stars",
    },
  ],
  processHeading: "Three calm steps",
  steps: [
    {
      title: "Launch Mini App",
      desc: "Open the Telegram link—StarsPaymee attaches your Telegram profile instantly.",
    },
    {
      title: "Choose a product",
      desc: "Stars, Premium or Gift—verify the recipient plus UZS totals before settling.",
    },
    {
      title: "Pay & receive",
      desc: "Pay with UzCard/HUMO; History tab tracks progress until Stars/Premium/Gift drop.",
    },
  ],
  trustHeading: "Engineering trust cues",
  trustItems: [
    { label: "initData HMAC", detail: "Server verifies Telegram payloads" },
    { label: "Rate limit", detail: "IP scoped throttles for APIs" },
    { label: "CORS + Helmet", detail: "Headers align with allow-list" },
    { label: "Order tracking", detail: "Status APIs keyed by order id" },
  ],
  ctaHeading:
    "Load the Mini App and place your first Stars or Premium order right now",
  ctaBody:
    "Promos, promo codes, referral withdrawals—everything lives inside Mini App navigation.",
  ctaButton: "{brand} · Telegram",
  faqHeading: "Common questions",
  faqItems: mkFaq(faqEn),
};
baseEn.locales = baseUz.locales;

/** Mavjud messages fayllaridan landing bo‘limini saqlab qoladi (generator boshqa kalitlarni yozadi). */
function mergePreserveLanding(locale, blob) {
  const messagePath = path.join(outDir, `${locale}.json`);
  try {
    if (!fs.existsSync(messagePath)) return;
    const prev = JSON.parse(fs.readFileSync(messagePath, "utf8"));
    if (prev.landing) blob.landing = prev.landing;
  } catch {
    /* ignore merge errors */
  }
}

mergePreserveLanding("uz", baseUz);
mergePreserveLanding("ru", baseRu);
mergePreserveLanding("en", baseEn);

for (const [name, blob] of [
  ["uz", baseUz],
  ["ru", baseRu],
  ["en", baseEn],
]) {
  fs.writeFileSync(path.join(outDir, `${name}.json`), JSON.stringify(blob, null, 2), "utf8");
}

console.log("messages/*.json yozildi.");
