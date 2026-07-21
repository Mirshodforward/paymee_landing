import { Link } from "@/i18n/navigation";
import { InlineCta, Sources } from "@/components/blog/aeo-blocks";
import type { AeoPost } from "@/lib/blog-aeo/types";

const SLUG = "telegram-business-api-umumiy-faq";

/* ---------------- UZ ---------------- */
function UzAnswer() {
  return (
    <p>
      StarsPaymee Business API — Telegram Stars, Premium va Gifts’ni hamda Click va SBP to‘lovlarini avtomatik sotish
      uchun yagona API. Quyida API, narx, ulanish, to‘lov, webhook, White Label va reseller bo‘yicha 30 ta eng ko‘p
      beriladigan savolga qisqa javoblar.
    </p>
  );
}

function UzBody() {
  return (
    <>
      <h2 id="kirish">StarsPaymee Business haqida qisqacha</h2>
      <p>
        Bu maqola barcha API va biznes savollarini bir joyda jamlaydi. Chuqurroq mavzular:{" "}
        <Link href="/blog/telegram-stars-api-nima-ulanish">Stars API</Link>,{" "}
        <Link href="/blog/telegram-premium-api-avtomatik-sotuv">Premium API</Link>,{" "}
        <Link href="/blog/click-api-rasmiy-integratsiya">Click API</Link>,{" "}
        <Link href="/blog/sbp-api-rossiya-rubl-tolov">SBP API</Link>,{" "}
        <Link href="/blog/white-label-telegram-stars-platforma">White Label</Link> va{" "}
        <Link href="/blog/telegram-reseller-dasturi-qanday-boshlash">Reseller</Link>. Umumiy —{" "}
        <Link href="/business">Business</Link> sahifasida.
      </p>

      <InlineCta text="Savolingizga javob topdingizmi? Business orqali API oling." />

      <h2 id="savollar">Batafsil savollar</h2>
      <p>Kerakli savolni bosib javobni oching — API, narx, to‘lov, webhook, White Label va reseller.</p>

      <Sources
        label="Manbalar"
        items={[
          { href: "https://core.telegram.org/api/stars", label: "core.telegram.org/api/stars", note: "Stars texnik hujjati" },
          { href: "https://docs.click.uz/", label: "docs.click.uz", note: "Click hujjatlari" },
          { href: "https://sbp.nspk.ru/", label: "sbp.nspk.ru", note: "SBP rasmiy sayti" },
        ]}
      />
    </>
  );
}

/* ---------------- RU ---------------- */
function RuAnswer() {
  return (
    <p>
      StarsPaymee Business API — единый API для автопродажи Telegram Stars, Premium и Gifts, а также оплаты через
      Click и SBP. Ниже — краткие ответы на 30 самых частых вопросов про API, цену, подключение, оплату, webhook,
      White Label и реселлинг.
    </p>
  );
}

function RuBody() {
  return (
    <>
      <h2 id="kirish">Кратко о StarsPaymee Business</h2>
      <p>
        Эта статья собирает все вопросы про API и бизнес в одном месте. Более глубокие темы:{" "}
        <Link href="/blog/telegram-stars-api-nima-ulanish">Stars API</Link>,{" "}
        <Link href="/blog/telegram-premium-api-avtomatik-sotuv">Premium API</Link>,{" "}
        <Link href="/blog/click-api-rasmiy-integratsiya">Click API</Link>,{" "}
        <Link href="/blog/sbp-api-rossiya-rubl-tolov">SBP API</Link>,{" "}
        <Link href="/blog/white-label-telegram-stars-platforma">White Label</Link> и{" "}
        <Link href="/blog/telegram-reseller-dasturi-qanday-boshlash">реселлинг</Link>. Общее — на странице{" "}
        <Link href="/business">Business</Link>.
      </p>

      <InlineCta text="Нашли ответ? Получите API через Business." />

      <h2 id="savollar">Подробные вопросы</h2>
      <p>Нажмите нужный вопрос — API, цена, оплата, webhook, White Label и реселлинг.</p>

      <Sources
        label="Источники"
        items={[
          { href: "https://core.telegram.org/api/stars", label: "core.telegram.org/api/stars", note: "техдокументация Stars" },
          { href: "https://docs.click.uz/", label: "docs.click.uz", note: "документация Click" },
          { href: "https://sbp.nspk.ru/", label: "sbp.nspk.ru", note: "официальный сайт СБП" },
        ]}
      />
    </>
  );
}

/* ---------------- EN ---------------- */
function EnAnswer() {
  return (
    <p>
      The StarsPaymee Business API is a single API for auto‑selling Telegram Stars, Premium and Gifts, plus payments
      via Click and SBP. Below are short answers to 30 of the most common questions about the API, pricing,
      connection, payment, webhook, White Label and reselling.
    </p>
  );
}

function EnBody() {
  return (
    <>
      <h2 id="kirish">StarsPaymee Business in brief</h2>
      <p>
        This article gathers all API and business questions in one place. Deeper topics:{" "}
        <Link href="/blog/telegram-stars-api-nima-ulanish">Stars API</Link>,{" "}
        <Link href="/blog/telegram-premium-api-avtomatik-sotuv">Premium API</Link>,{" "}
        <Link href="/blog/click-api-rasmiy-integratsiya">Click API</Link>,{" "}
        <Link href="/blog/sbp-api-rossiya-rubl-tolov">SBP API</Link>,{" "}
        <Link href="/blog/white-label-telegram-stars-platforma">White Label</Link> and{" "}
        <Link href="/blog/telegram-reseller-dasturi-qanday-boshlash">reselling</Link>. General — on the{" "}
        <Link href="/business">Business</Link> page.
      </p>

      <InlineCta text="Found your answer? Get the API via Business." />

      <h2 id="savollar">Detailed questions</h2>
      <p>Tap a question — API, pricing, payment, webhook, White Label and reselling.</p>

      <Sources
        label="Sources"
        items={[
          { href: "https://core.telegram.org/api/stars", label: "core.telegram.org/api/stars", note: "Stars technical docs" },
          { href: "https://docs.click.uz/", label: "docs.click.uz", note: "Click documentation" },
          { href: "https://sbp.nspk.ru/", label: "sbp.nspk.ru", note: "official SBP site" },
        ]}
      />
    </>
  );
}

const uzFaq = [
  { question: "StarsPaymee Business API nima?", answer: "Telegram Stars, Premium, Gifts va Click/SBP to‘lovlarini avtomatik sotish uchun yagona API." },
  { question: "Nimalarni sotish mumkin?", answer: "Telegram Stars, Premium, Gifts hamda Click va SBP (rubl) to‘lovlari." },
  { question: "API narxi qancha?", answer: "Bozordagi eng arzon narxlardan biri; hajm va reseller darajasiga qarab tarif." },
  { question: "API qancha vaqtda beriladi?", answer: "Ariza tasdiqlangach juda tez; darhol Sandbox’da boshlaysiz." },
  { question: "API JSON formatidami?", answer: "Ha. REST API JSON ko‘rinishida." },
  { question: "Webhook bormi?", answer: "Ha. Buyurtma va to‘lov statusi webhook orqali keladi." },
  { question: "Sandbox mavjudmi?", answer: "Ha. Jonli pulsiz test muhiti." },
  { question: "Rate limit bormi?", answer: "Ha. Oqilona limitlar; hajmga qarab oshiriladi." },
  { question: "Qaysi til/framework kerak?", answer: "Istalgan — PHP, Python, Node.js, Go va h.k." },
  { question: "To‘lovni o‘zim qabul qilamanmi?", answer: "Ha. Click, Payme, karta yoki SBP orqali o‘z kanalingizda." },
  { question: "So‘mda ishlaydimi?", answer: "Ha. Mahalliy usullar so‘mda; rubl uchun SBP." },
  { question: "Rublda ishlaydimi?", answer: "Ha. SBP integratsiyasi orqali Rossiyadan rubl to‘lovi." },
  { question: "Click integratsiyasi rasmiymi?", answer: "Ha. Click merchant va callback/imzo mexanizmi bilan." },
  { question: "Stars qanday yetkaziladi?", answer: "@username’ga o‘rtacha 10 soniyada, parolsiz." },
  { question: "Premium muddatlari qanday?", answer: "Username orqali 3/6/12 oy; login orqali 1 oy va 1 yil." },
  { question: "Gifts API bormi?", answer: "Ha. Katalog, anonim yuborish va izoh bilan." },
  { question: "White Label bormi?", answer: "Ha. O‘z brendingiz ostida to‘liq platforma." },
  { question: "Reseller bo‘lish mumkinmi?", answer: "Ha. Ulgurji narx va o‘z ustamangiz bilan sotasiz." },
  { question: "White Label va reseller farqi?", answer: "Reseller sotadi; White Label — brendlangan platforma. Alohida maqolada batafsil." },
  { question: "Refund siyosati qanday?", answer: "Yetkazilmagan buyurtma hisob-kitob siyosati bo‘yicha qaytariladi." },
  { question: "Xavfsizlik qanday?", answer: "API kaliti serverda; imzo tekshiruvi, HTTPS va idempotency." },
  { question: "Balans (deposit) kerakmi?", answer: "Ko‘pincha reseller deposit modeli; shart tarifga bog‘liq." },
  { question: "Statistika bormi?", answer: "Ha. Buyurtma va to‘lovlar ID bo‘yicha kuzatiladi." },
  { question: "Bir nechta mahsulotni birga sotsam bo‘ladimi?", answer: "Ha. Bitta API orqali Stars, Premium, Gifts." },
  { question: "Mini App bilan ishlaydimi?", answer: "Ha. Bot va Mini App ikkalasida." },
  { question: "Hujjat beriladimi?", answer: "Ha. Endpoint, webhook va misollar bilan." },
  { question: "Support 24/7 ishlaydimi?", answer: "Ha. @StarsPaymeeSupport orqali integratsiya va operatsion yordam." },
  { question: "Integratsiya murakkabmi?", answer: "Yo‘q. Bir nechta endpoint va bitta webhook yetarli." },
  { question: "Narx real vaqtda yangilanadimi?", answer: "Ha. GET /products orqali joriy narxlar." },
  { question: "Qanday boshlayman?", answer: "StarsPaymee Business sahifasidan ariza qoldiring, kalit va hujjatni oling." },
];

const ruFaq = [
  { question: "Что такое StarsPaymee Business API?", answer: "Единый API для автопродажи Telegram Stars, Premium, Gifts и оплаты Click/SBP." },
  { question: "Что можно продавать?", answer: "Telegram Stars, Premium, Gifts, а также оплату Click и SBP (рубли)." },
  { question: "Сколько стоит API?", answer: "Одна из самых низких цен на рынке; тариф по объёму и уровню реселлера." },
  { question: "За сколько выдаётся API?", answer: "После подтверждения заявки очень быстро; сразу начинаете в Sandbox." },
  { question: "API в формате JSON?", answer: "Да. REST API в виде JSON." },
  { question: "Есть ли webhook?", answer: "Да. Статус заказа и оплаты приходит через webhook." },
  { question: "Есть ли Sandbox?", answer: "Да. Тестовая среда без реальных денег." },
  { question: "Есть ли rate limit?", answer: "Да. Разумные лимиты; повышаются по объёму." },
  { question: "Какой язык/фреймворк нужен?", answer: "Любой — PHP, Python, Node.js, Go и т.д." },
  { question: "Я сам принимаю оплату?", answer: "Да. Через Click, Payme, карту или SBP в своём канале." },
  { question: "Работает ли в сумах?", answer: "Да. Локальные методы в сумах; для рублей SBP." },
  { question: "Работает ли в рублях?", answer: "Да. Через интеграцию SBP оплата из России в рублях." },
  { question: "Официальна ли интеграция Click?", answer: "Да. С мерчантом Click и механизмом callback/подписи." },
  { question: "Как доставляются Stars?", answer: "На @username в среднем за 10 секунд, без пароля." },
  { question: "Какие сроки Premium?", answer: "По username 3/6/12 мес; через логин 1 мес и 1 год." },
  { question: "Есть ли Gifts API?", answer: "Да. С каталогом, анонимной отправкой и комментарием." },
  { question: "Есть ли White Label?", answer: "Да. Полная платформа под вашим брендом." },
  { question: "Можно ли стать реселлером?", answer: "Да. Оптовая цена и продажа со своей наценкой." },
  { question: "Разница White Label и реселлера?", answer: "Реселлер продаёт; White Label — брендированная платформа. Подробнее в отдельной статье." },
  { question: "Какая политика возврата?", answer: "Недоставленный заказ возвращается по политике расчётов." },
  { question: "Как с безопасностью?", answer: "Ключ на сервере; проверка подписи, HTTPS и идемпотентность." },
  { question: "Нужен ли баланс (депозит)?", answer: "Часто модель депозита реселлера; условия зависят от тарифа." },
  { question: "Есть ли статистика?", answer: "Да. Заказы и оплаты отслеживаются по ID." },
  { question: "Можно ли продавать несколько товаров вместе?", answer: "Да. Через один API Stars, Premium, Gifts." },
  { question: "Работает ли с Mini App?", answer: "Да. И в боте, и в Mini App." },
  { question: "Дают ли документацию?", answer: "Да. С эндпоинтами, webhook и примерами." },
  { question: "Поддержка работает 24/7?", answer: "Да. Через @StarsPaymeeSupport — помощь по интеграции и эксплуатации." },
  { question: "Сложная ли интеграция?", answer: "Нет. Достаточно нескольких эндпоинтов и одного webhook." },
  { question: "Обновляется ли цена в реальном времени?", answer: "Да. Через GET /products актуальные цены." },
  { question: "Как начать?", answer: "Оставьте заявку на странице StarsPaymee Business, получите ключ и документацию." },
];

const enFaq = [
  { question: "What is the StarsPaymee Business API?", answer: "A single API for auto‑selling Telegram Stars, Premium, Gifts and Click/SBP payments." },
  { question: "What can I sell?", answer: "Telegram Stars, Premium, Gifts, plus Click and SBP (ruble) payments." },
  { question: "How much does the API cost?", answer: "One of the lowest prices on the market; a tariff by volume and reseller level." },
  { question: "How fast is the API issued?", answer: "Very fast after approval; you start in the Sandbox right away." },
  { question: "Is the API in JSON?", answer: "Yes. The REST API is in JSON." },
  { question: "Is there a webhook?", answer: "Yes. Order and payment status arrive via webhook." },
  { question: "Is there a Sandbox?", answer: "Yes. A test environment with no real money." },
  { question: "Is there a rate limit?", answer: "Yes. Reasonable limits; raised by volume." },
  { question: "Which language/framework is needed?", answer: "Any — PHP, Python, Node.js, Go, etc." },
  { question: "Do I collect payment myself?", answer: "Yes. Via Click, Payme, card or SBP in your own channel." },
  { question: "Does it work in so‘m?", answer: "Yes. Local methods in so‘m; SBP for rubles." },
  { question: "Does it work in rubles?", answer: "Yes. Via the SBP integration, payments from Russia in rubles." },
  { question: "Is the Click integration official?", answer: "Yes. With the Click merchant and callback/signature mechanism." },
  { question: "How are Stars delivered?", answer: "To the @username in ~10 seconds on average, without a password." },
  { question: "What are the Premium durations?", answer: "By username 3/6/12 months; via login 1 month and 1 year." },
  { question: "Is there a Gifts API?", answer: "Yes. With a catalog, anonymous sending and a comment." },
  { question: "Is there White Label?", answer: "Yes. A full platform under your own brand." },
  { question: "Can I become a reseller?", answer: "Yes. A wholesale price and selling with your own markup." },
  { question: "Difference between White Label and reseller?", answer: "A reseller sells; White Label is a branded platform. More in a separate article." },
  { question: "What is the refund policy?", answer: "An undelivered order is refunded per the settlement policy." },
  { question: "What about security?", answer: "The key is server‑side; signature verification, HTTPS and idempotency." },
  { question: "Is a balance (deposit) needed?", answer: "Often a reseller deposit model; terms depend on the tariff." },
  { question: "Is there statistics?", answer: "Yes. Orders and payments are tracked by ID." },
  { question: "Can I sell several products together?", answer: "Yes. Through one API — Stars, Premium, Gifts." },
  { question: "Does it work with Mini App?", answer: "Yes. Both in the bot and in the Mini App." },
  { question: "Is documentation provided?", answer: "Yes. With endpoints, webhooks and examples." },
  { question: "Is support 24/7?", answer: "Yes. Via @StarsPaymeeSupport — help with integration and operations." },
  { question: "Is integration complex?", answer: "No. A few endpoints and one webhook are enough." },
  { question: "Are prices updated in real time?", answer: "Yes. Current prices via GET /products." },
  { question: "How do I start?", answer: "Submit a request on the StarsPaymee Business page, get the key and docs." },
];

export const post: AeoPost = {
  slug: SLUG,
  category: "Biznes",
  type: "info",
  datePublished: "2026-07-05",
  dateModified: "2026-07-05",
  keywords: [
    "telegram business api",
    "telegram api faq",
    "starspaymee business",
    "telegram stars business api",
    "telegram api savollar",
    "api reseller white label faq",
  ],
  locales: {
    uz: {
      title: "Telegram Business API: umumiy savol-javob (30 ta savol)",
      excerpt:
        "StarsPaymee Business API bo‘yicha 30 savol-javob: nimalarni sotish, narx, ulanish, to‘lov (Click/SBP), webhook, White Label va reseller. Barcha asosiy savollar bitta joyda.",
      metaTitle: "Telegram Business API FAQ — 30 savol (2026)",
      metaDescription:
        "StarsPaymee Business API bo‘yicha 30 savol-javob: mahsulotlar, narx, ulanish, Click/SBP to‘lovi, webhook, White Label va reseller — barchasi bir joyda.",
      answerTitle: "Qisqa javob",
      Answer: UzAnswer,
      Body: UzBody,
      ctaHeading: "API olishga tayyormisiz?",
      ctaBody: "StarsPaymee Business orqali Stars, Premium, Gifts, Click va SBP uchun bitta API oling.",
      faq: uzFaq,
    },
    ru: {
      title: "Telegram Business API: общие вопросы‑ответы (30 вопросов)",
      excerpt:
        "30 вопросов‑ответов про StarsPaymee Business API: что продавать, цена, подключение, оплата (Click/SBP), webhook, White Label и реселлинг. Все основные вопросы в одном месте.",
      metaTitle: "Telegram Business API FAQ — 30 вопросов (2026)",
      metaDescription:
        "30 вопросов‑ответов про StarsPaymee Business API: товары, цена, подключение, оплата Click/SBP, webhook, White Label и реселлинг — всё в одном месте.",
      answerTitle: "Краткий ответ",
      Answer: RuAnswer,
      Body: RuBody,
      ctaHeading: "Готовы получить API?",
      ctaBody: "Через StarsPaymee Business получите один API для Stars, Premium, Gifts, Click и SBP.",
      faq: ruFaq,
    },
    en: {
      title: "Telegram Business API: general Q&A (30 questions)",
      excerpt:
        "30 Q&A about the StarsPaymee Business API: what to sell, pricing, connection, payment (Click/SBP), webhook, White Label and reselling. All the key questions in one place.",
      metaTitle: "Telegram Business API FAQ — 30 questions (2026)",
      metaDescription:
        "30 Q&A about the StarsPaymee Business API: products, pricing, connection, Click/SBP payment, webhook, White Label and reselling — all in one place.",
      answerTitle: "Short answer",
      Answer: EnAnswer,
      Body: EnBody,
      ctaHeading: "Ready to get the API?",
      ctaBody: "Through StarsPaymee Business, get one API for Stars, Premium, Gifts, Click and SBP.",
      faq: enFaq,
    },
  },
};
