import { Link } from "@/i18n/navigation";
import { InlineCta, Sources } from "@/components/blog/aeo-blocks";
import type { AeoPost } from "@/lib/blog-aeo/types";

const SLUG = "click-api-faq-savollar";

/* ---------------- UZ ---------------- */
function UzAnswer() {
  return (
    <p>
      Click API — Click to‘lov tizimining rasmiy integratsiyasi bo‘lib, sayt yoki botda so‘mda avtomatik to‘lov
      qabul qilish imkonini beradi. Quyida Click API narxi, ulanish, hujjatlar, callback, xavfsizlik va StarsPaymee
      Business orqali integratsiya bo‘yicha eng ko‘p beriladigan savollarga qisqa javoblar.
    </p>
  );
}

function UzBody() {
  return (
    <>
      <h2 id="kirish">Click API haqida qisqacha</h2>
      <p>
        Bu maqola Click API bo‘yicha eng ko‘p so‘raladigan savollarni jamlaydi. Amaliy oqim uchun{" "}
        <Link href="/blog/click-api-rasmiy-integratsiya">rasmiy integratsiya</Link> va{" "}
        <Link href="/blog/click-api-avtomatik-tolov-qabul">avtomatik to‘lov qabul qilish</Link> maqolalarini ko‘ring.
        Stars/Premium/Gifts yetkazish bilan bog‘lash uchun{" "}
        <Link href="/blog/telegram-stars-api-nima-ulanish">Stars API</Link>. Umumiy imkoniyatlar —{" "}
        <Link href="/business">Business</Link> sahifasida.
      </p>

      <InlineCta text="Savolingizga javob topdingizmi? Click integratsiyasini Business orqali ulang." />

      <h2 id="savollar">Batafsil savollar</h2>
      <p>Kerakli savolni bosib, javobni oching — narx, ulanish, hujjat, callback va xavfsizlik.</p>

      <Sources
        label="Manbalar"
        items={[
          { href: "https://docs.click.uz/", label: "docs.click.uz", note: "Click rasmiy hujjatlari" },
          { href: "https://click.uz/", label: "click.uz", note: "Click to‘lov tizimi" },
        ]}
      />
    </>
  );
}

/* ---------------- RU ---------------- */
function RuAnswer() {
  return (
    <p>
      Click API — официальная интеграция платёжной системы Click для автоприёма оплаты в сумах на сайте или в боте.
      Ниже — краткие ответы на самые частые вопросы про цену Click API, подключение, документацию, callback,
      безопасность и интеграцию через StarsPaymee Business.
    </p>
  );
}

function RuBody() {
  return (
    <>
      <h2 id="kirish">Кратко о Click API</h2>
      <p>
        Эта статья собирает самые частые вопросы про Click API. За практическим потоком смотрите{" "}
        <Link href="/blog/click-api-rasmiy-integratsiya">официальную интеграцию</Link> и{" "}
        <Link href="/blog/click-api-avtomatik-tolov-qabul">автоприём оплаты</Link>. Для связи с доставкой
        Stars/Premium/Gifts —{" "}
        <Link href="/blog/telegram-stars-api-nima-ulanish">Stars API</Link>. Общие возможности — на странице{" "}
        <Link href="/business">Business</Link>.
      </p>

      <InlineCta text="Нашли ответ? Подключите интеграцию Click через Business." />

      <h2 id="savollar">Подробные вопросы</h2>
      <p>Нажмите нужный вопрос, чтобы открыть ответ — цена, подключение, документация, callback и безопасность.</p>

      <Sources
        label="Источники"
        items={[
          { href: "https://docs.click.uz/", label: "docs.click.uz", note: "официальная документация Click" },
          { href: "https://click.uz/", label: "click.uz", note: "платёжная система Click" },
        ]}
      />
    </>
  );
}

/* ---------------- EN ---------------- */
function EnAnswer() {
  return (
    <p>
      Click API is the official integration of the Click payment system for auto‑accepting payments in so‘m on a site
      or bot. Below are short answers to the most common questions about Click API pricing, connection,
      documentation, callbacks, security and integration via StarsPaymee Business.
    </p>
  );
}

function EnBody() {
  return (
    <>
      <h2 id="kirish">Click API in brief</h2>
      <p>
        This article gathers the most common questions about Click API. For the practical flow see the{" "}
        <Link href="/blog/click-api-rasmiy-integratsiya">official integration</Link> and{" "}
        <Link href="/blog/click-api-avtomatik-tolov-qabul">accepting payments automatically</Link>. To wire it to
        Stars/Premium/Gifts delivery, see{" "}
        <Link href="/blog/telegram-stars-api-nima-ulanish">Stars API</Link>. General capabilities are on the{" "}
        <Link href="/business">Business</Link> page.
      </p>

      <InlineCta text="Found your answer? Connect the Click integration via Business." />

      <h2 id="savollar">Detailed questions</h2>
      <p>Tap a question to open the answer — pricing, connection, documentation, callbacks and security.</p>

      <Sources
        label="Sources"
        items={[
          { href: "https://docs.click.uz/", label: "docs.click.uz", note: "official Click documentation" },
          { href: "https://click.uz/", label: "click.uz", note: "Click payment system" },
        ]}
      />
    </>
  );
}

const uzFaq = [
  { question: "Click API nima?", answer: "Click to‘lov tizimining rasmiy integratsiyasi — sayt yoki botda so‘mda avtomatik to‘lov qabul qilish uchun." },
  { question: "Click API narxi qancha?", answer: "Integratsiya StarsPaymee Business tarifiga kiradi; aniq shart hajm va mahsulotga bog‘liq. Business bilan aniqlashtiring." },
  { question: "Click API’ga qanday ulanaman?", answer: "StarsPaymee Business sahifasidan ariza qoldirasiz, merchant sozlamalari va callback ulanadi." },
  { question: "Click API hujjatlari qayerda?", answer: "Rasmiy hujjatlar docs.click.uz’da; StarsPaymee integratsiya hujjatini ulanishdan so‘ng beradi." },
  { question: "Click API JSON formatidami?", answer: "Ha, so‘rov va callback JSON/parametrlar ko‘rinishida ishlanadi." },
  { question: "Callback (webhook) bormi?", answer: "Ha. Click prepare va complete callback’lari orqali to‘lov holatini qaytaradi." },
  { question: "Imzo tekshiruvi bormi?", answer: "Ha. Har bir callback signature bilan tekshiriladi." },
  { question: "Sandbox mavjudmi?", answer: "Ha. Jonli pulsiz test muhitida oqim tekshiriladi." },
  { question: "Qaysi valyuta?", answer: "So‘m (UZS), UzCard/HUMO va Click ilovasi orqali." },
  { question: "Xorijiy karta kerakmi?", answer: "Yo‘q. Faqat mahalliy kartalar va Click." },
  { question: "To‘lovdan keyin mahsulot avtomatik ketadimi?", answer: "Ha. Stars/Premium/Gift tasdiqdan so‘ng avtomatik yetkaziladi." },
  { question: "Refund bormi?", answer: "Ha. Yetkazilmagan buyurtma hisob-kitob siyosatiga ko‘ra qaytariladi." },
  { question: "Ikki marta to‘lov/yetkazishning oldini olasizmi?", answer: "Ha, idempotency (ID bo‘yicha) bilan takror yetkazish oldi olinadi." },
  { question: "Payme ham bormi?", answer: "Ha. Click bilan birga Payme va boshqa mahalliy usullar." },
  { question: "Botda ishlaydimi?", answer: "Ha. Bot yoki Mini App ichida to‘lov havolasi orqali." },
  { question: "Ulanish qancha vaqt oladi?", answer: "Merchant kalitlari tayyor bo‘lsa, tez yakunlanadi." },
  { question: "Statistika/tarix bormi?", answer: "Ha. To‘lovlar ID bo‘yicha; tarix so‘rov yoki panelda." },
  { question: "Xavfsizlik uchun nima kerak?", answer: "HTTPS, imzo tekshiruvi, idempotency va summani solishtirish." },
  { question: "Rate limit bormi?", answer: "Oqilona limitlar bor; hajmga qarab oshiriladi." },
  { question: "Rublda to‘lov qabul qilsam bo‘ladimi?", answer: "Ha, rubl uchun SBP integratsiyasi alohida mavjud." },
  { question: "Bir nechta mahsulotni bir joyda sotsam bo‘ladimi?", answer: "Ha. Click to‘lovi Stars/Premium/Gifts yetkazishga bog‘lanadi." },
  { question: "Test uchun misol beriladimi?", answer: "Ha. Callback formati va imzo bo‘yicha misollar bilan hujjat beriladi." },
  { question: "Click API ishonchlimi?", answer: "Ha. Rasmiy Click mexanizmi va imzo tekshiruvi bilan xavfsiz ishlaydi." },
  { question: "Qanday boshlayman?", answer: "StarsPaymee Business sahifasidan ariza qoldiring — merchant va callback ulanadi." },
  { question: "Yordam kimga yozaman?", answer: "@StarsPaymeeSupport — integratsiya va operatsion savollar uchun." },
];

const ruFaq = [
  { question: "Что такое Click API?", answer: "Официальная интеграция платёжной системы Click — для автоприёма оплаты в сумах на сайте или в боте." },
  { question: "Сколько стоит Click API?", answer: "Интеграция входит в тариф StarsPaymee Business; точные условия зависят от объёма и товара. Уточните у Business." },
  { question: "Как подключиться к Click API?", answer: "Оставьте заявку на странице StarsPaymee Business, подключаются настройки мерчанта и callback." },
  { question: "Где документация Click API?", answer: "Официальная документация на docs.click.uz; документацию интеграции StarsPaymee выдаёт после подключения." },
  { question: "Click API в формате JSON?", answer: "Да, запрос и callback обрабатываются в виде JSON/параметров." },
  { question: "Есть ли callback (webhook)?", answer: "Да. Click возвращает статус оплаты через callback prepare и complete." },
  { question: "Есть ли проверка подписи?", answer: "Да. Каждый callback проверяется по signature." },
  { question: "Есть ли Sandbox?", answer: "Да. Поток проверяется в тестовой среде без реальных денег." },
  { question: "Какая валюта?", answer: "Сум (UZS), через UzCard/HUMO и приложение Click." },
  { question: "Нужна ли зарубежная карта?", answer: "Нет. Только локальные карты и Click." },
  { question: "Товар уходит автоматически после оплаты?", answer: "Да. Stars/Premium/Gift доставляется автоматически после подтверждения." },
  { question: "Есть ли возврат?", answer: "Да. Недоставленный заказ возвращается по политике расчётов." },
  { question: "Предотвращаете ли двойную оплату/доставку?", answer: "Да, идемпотентность (по ID) исключает повторную доставку." },
  { question: "Есть ли Payme?", answer: "Да. Вместе с Click — Payme и другие локальные методы." },
  { question: "Работает ли в боте?", answer: "Да. Внутри бота или Mini App через ссылку на оплату." },
  { question: "Сколько занимает подключение?", answer: "Если ключи мерчанта готовы, завершается быстро." },
  { question: "Есть ли статистика/история?", answer: "Да. Оплаты по ID; история через запрос или в панели." },
  { question: "Что нужно для безопасности?", answer: "HTTPS, проверка подписи, идемпотентность и сверка суммы." },
  { question: "Есть ли rate limit?", answer: "Есть разумные лимиты; повышаются по объёму." },
  { question: "Могу ли принимать оплату в рублях?", answer: "Да, для рублей есть отдельная интеграция SBP." },
  { question: "Можно ли продавать несколько товаров в одном месте?", answer: "Да. Оплата Click связывается с доставкой Stars/Premium/Gifts." },
  { question: "Дают ли примеры для теста?", answer: "Да. Документация с примерами формата callback и подписи." },
  { question: "Надёжен ли Click API?", answer: "Да. Работает безопасно с официальным механизмом Click и проверкой подписи." },
  { question: "Как начать?", answer: "Оставьте заявку на странице StarsPaymee Business — подключим мерчанта и callback." },
  { question: "Куда писать за помощью?", answer: "@StarsPaymeeSupport — по интеграции и эксплуатации." },
];

const enFaq = [
  { question: "What is Click API?", answer: "The official integration of the Click payment system — for auto‑accepting payments in so‘m on a site or bot." },
  { question: "How much does Click API cost?", answer: "The integration is part of the StarsPaymee Business tariff; exact terms depend on volume and product. Confirm with Business." },
  { question: "How do I connect to Click API?", answer: "Submit a request on the StarsPaymee Business page; merchant settings and callback are connected." },
  { question: "Where is the Click API documentation?", answer: "Official docs are on docs.click.uz; StarsPaymee provides integration docs after connection." },
  { question: "Is Click API in JSON?", answer: "Yes, requests and callbacks are handled as JSON/parameters." },
  { question: "Is there a callback (webhook)?", answer: "Yes. Click returns the payment status via prepare and complete callbacks." },
  { question: "Is there signature verification?", answer: "Yes. Every callback is verified by signature." },
  { question: "Is there a Sandbox?", answer: "Yes. The flow is tested in a sandbox with no real money." },
  { question: "Which currency?", answer: "So‘m (UZS), via UzCard/HUMO and the Click app." },
  { question: "Do I need a foreign card?", answer: "No. Only local cards and Click." },
  { question: "Does the product ship automatically after payment?", answer: "Yes. Stars/Premium/Gift is delivered automatically after confirmation." },
  { question: "Is there a refund?", answer: "Yes. An undelivered order is refunded per the settlement policy." },
  { question: "Do you prevent double payment/delivery?", answer: "Yes, idempotency (by ID) prevents repeated delivery." },
  { question: "Is Payme available too?", answer: "Yes. Alongside Click — Payme and other local methods." },
  { question: "Does it work in a bot?", answer: "Yes. Inside a bot or Mini App via a payment link." },
  { question: "How long does connection take?", answer: "If merchant keys are ready, it finishes quickly." },
  { question: "Is there statistics/history?", answer: "Yes. Payments by ID; history via a request or in the panel." },
  { question: "What's needed for security?", answer: "HTTPS, signature verification, idempotency and amount comparison." },
  { question: "Is there a rate limit?", answer: "There are reasonable limits; raised by volume." },
  { question: "Can I accept payment in rubles?", answer: "Yes, there is a separate SBP integration for rubles." },
  { question: "Can I sell several products in one place?", answer: "Yes. Click payment is wired to Stars/Premium/Gifts delivery." },
  { question: "Are examples provided for testing?", answer: "Yes. Docs with examples of the callback format and signature." },
  { question: "Is Click API reliable?", answer: "Yes. It works securely with the official Click mechanism and signature verification." },
  { question: "How do I start?", answer: "Submit a request on the StarsPaymee Business page — we connect the merchant and callback." },
  { question: "Who do I contact for help?", answer: "@StarsPaymeeSupport — for integration and operational questions." },
];

export const post: AeoPost = {
  slug: SLUG,
  category: "Biznes",
  type: "info",
  datePublished: "2026-07-17",
  dateModified: "2026-07-17",
  keywords: [
    "click api documentation",
    "click api narxi",
    "click api ulanish",
    "click api faq",
    "click api savollar",
    "click api hujjat",
  ],
  locales: {
    uz: {
      title: "Click API haqida eng ko‘p beriladigan savollar (FAQ)",
      excerpt:
        "Click API narxi, ulanish, hujjatlar, callback, imzo, sandbox va xavfsizlik bo‘yicha 25 ta savol-javob. StarsPaymee Business orqali so‘mda avtomatik to‘lov integratsiyasi.",
      metaTitle: "Click API FAQ — narx, ulanish, hujjat, callback 2026",
      metaDescription:
        "Click API bo‘yicha 25 savol-javob: narx, ulanish, hujjatlar, callback, imzo va xavfsizlik. StarsPaymee Business orqali avtomatik to‘lov integratsiyasi.",
      answerTitle: "Qisqa javob",
      Answer: UzAnswer,
      Body: UzBody,
      ctaHeading: "Click integratsiyasini boshlang",
      ctaBody: "StarsPaymee Business orqali Click bilan so‘mda avtomatik to‘lovni ulang.",
      faq: uzFaq,
    },
    ru: {
      title: "Самые частые вопросы про Click API (FAQ)",
      excerpt:
        "25 вопросов‑ответов про Click API: цена, подключение, документация, callback, подпись, sandbox и безопасность. Интеграция автоприёма оплаты в сумах через StarsPaymee Business.",
      metaTitle: "Click API FAQ — цена, подключение, документация 2026",
      metaDescription:
        "25 вопросов‑ответов про Click API: цена, подключение, документация, callback, подпись и безопасность. Интеграция автоприёма оплаты через StarsPaymee Business.",
      answerTitle: "Краткий ответ",
      Answer: RuAnswer,
      Body: RuBody,
      ctaHeading: "Начните интеграцию Click",
      ctaBody: "Через StarsPaymee Business подключите автоприём оплаты в сумах с Click.",
      faq: ruFaq,
    },
    en: {
      title: "Most common questions about Click API (FAQ)",
      excerpt:
        "25 Q&A about Click API: price, connection, documentation, callback, signature, sandbox and security. Auto‑payment integration in so‘m via StarsPaymee Business.",
      metaTitle: "Click API FAQ — price, connection, documentation 2026",
      metaDescription:
        "25 Q&A about Click API: price, connection, documentation, callback, signature and security. Auto‑payment integration via StarsPaymee Business.",
      answerTitle: "Short answer",
      Answer: EnAnswer,
      Body: EnBody,
      ctaHeading: "Start the Click integration",
      ctaBody: "Through StarsPaymee Business, connect automatic payments in so‘m with Click.",
      faq: enFaq,
    },
  },
};
