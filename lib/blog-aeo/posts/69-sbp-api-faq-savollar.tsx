import { Link } from "@/i18n/navigation";
import { InlineCta, Sources } from "@/components/blog/aeo-blocks";
import type { AeoPost } from "@/lib/blog-aeo/types";

const SLUG = "sbp-api-faq-savollar";

/* ---------------- UZ ---------------- */
function UzAnswer() {
  return (
    <p>
      SBP (СБП) API — Rossiyadan rublda avtomatik to‘lov qabul qilish uchun integratsiya. Quyida SBP API kaliti,
      webhook, JSON, sandbox, komissiya, banklar, tasdiqlash vaqti va limitlar bo‘yicha eng ko‘p beriladigan
      savollarga qisqa javoblar. StarsPaymee Business SBP’ni Stars/Premium/Gifts sotuviga bog‘laydi.
    </p>
  );
}

function UzBody() {
  return (
    <>
      <h2 id="kirish">SBP API haqida qisqacha</h2>
      <p>
        Bu maqola SBP API bo‘yicha eng ko‘p so‘raladigan savollarni jamlaydi. Amaliy oqim uchun{" "}
        <Link href="/blog/sbp-api-rossiya-rubl-tolov">rublda to‘lov qabul qilish</Link> va{" "}
        <Link href="/blog/sbp-tolov-tizimi-qanday-ishlaydi">SBP qanday ishlaydi</Link> maqolalarini ko‘ring.
        Yetkazib berish bilan bog‘lash uchun{" "}
        <Link href="/blog/telegram-stars-api-nima-ulanish">Stars API</Link>. Umumiy imkoniyatlar —{" "}
        <Link href="/business">Business</Link> sahifasida.
      </p>

      <InlineCta text="Rubl to‘lovini ulamoqchimisiz? SBP integratsiyasini Business orqali oling." />

      <h2 id="savollar">Batafsil savollar</h2>
      <p>Kerakli savolni bosib javobni oching — API kaliti, webhook, komissiya, banklar va xavfsizlik.</p>

      <Sources
        label="Manbalar"
        items={[
          { href: "https://sbp.nspk.ru/", label: "sbp.nspk.ru", note: "SBP (НСПК) rasmiy sayti" },
          { href: "https://www.cbr.ru/", label: "cbr.ru", note: "Rossiya Markaziy banki" },
        ]}
      />
    </>
  );
}

/* ---------------- RU ---------------- */
function RuAnswer() {
  return (
    <p>
      SBP (СБП) API — интеграция для автоматического приёма оплаты из России в рублях. Ниже — краткие ответы на самые
      частые вопросы про API‑ключ SBP, webhook, JSON, sandbox, комиссию, банки, время подтверждения и лимиты.
      StarsPaymee Business связывает СБП с продажей Stars/Premium/Gifts.
    </p>
  );
}

function RuBody() {
  return (
    <>
      <h2 id="kirish">Кратко об SBP API</h2>
      <p>
        Эта статья собирает самые частые вопросы про SBP API. За практическим потоком смотрите{" "}
        <Link href="/blog/sbp-api-rossiya-rubl-tolov">приём оплаты в рублях</Link> и{" "}
        <Link href="/blog/sbp-tolov-tizimi-qanday-ishlaydi">как работает СБП</Link>. Для связи с доставкой —{" "}
        <Link href="/blog/telegram-stars-api-nima-ulanish">Stars API</Link>. Общие возможности — на странице{" "}
        <Link href="/business">Business</Link>.
      </p>

      <InlineCta text="Хотите подключить оплату в рублях? Получите интеграцию СБП через Business." />

      <h2 id="savollar">Подробные вопросы</h2>
      <p>Нажмите нужный вопрос — API‑ключ, webhook, комиссия, банки и безопасность.</p>

      <Sources
        label="Источники"
        items={[
          { href: "https://sbp.nspk.ru/", label: "sbp.nspk.ru", note: "официальный сайт СБП (НСПК)" },
          { href: "https://www.cbr.ru/", label: "cbr.ru", note: "Банк России" },
        ]}
      />
    </>
  );
}

/* ---------------- EN ---------------- */
function EnAnswer() {
  return (
    <p>
      The SBP (СБП) API is an integration for automatically accepting payments from Russia in rubles. Below are short
      answers to the most common questions about the SBP API key, webhook, JSON, sandbox, fees, banks, confirmation
      time and limits. StarsPaymee Business wires SBP to Stars/Premium/Gifts selling.
    </p>
  );
}

function EnBody() {
  return (
    <>
      <h2 id="kirish">SBP API in brief</h2>
      <p>
        This article gathers the most common questions about the SBP API. For the practical flow see{" "}
        <Link href="/blog/sbp-api-rossiya-rubl-tolov">accepting payments in rubles</Link> and{" "}
        <Link href="/blog/sbp-tolov-tizimi-qanday-ishlaydi">how SBP works</Link>. To wire it to delivery, see{" "}
        <Link href="/blog/telegram-stars-api-nima-ulanish">Stars API</Link>. General capabilities are on the{" "}
        <Link href="/business">Business</Link> page.
      </p>

      <InlineCta text="Want to connect ruble payments? Get the SBP integration via Business." />

      <h2 id="savollar">Detailed questions</h2>
      <p>Tap a question — API key, webhook, fees, banks and security.</p>

      <Sources
        label="Sources"
        items={[
          { href: "https://sbp.nspk.ru/", label: "sbp.nspk.ru", note: "official SBP (NSPK) site" },
          { href: "https://www.cbr.ru/", label: "cbr.ru", note: "Bank of Russia" },
        ]}
      />
    </>
  );
}

const uzFaq = [
  { question: "SBP API nima?", answer: "Rossiyadan rublda avtomatik to‘lov qabul qilish uchun integratsiya. QR yoki telefon raqami orqali to‘lov, webhook orqali tasdiq." },
  { question: "API kalitini qanday olaman?", answer: "StarsPaymee Business sahifasidan ariza qoldirasiz; tasdiqdan so‘ng kalit tez beriladi." },
  { question: "Webhook bormi?", answer: "Ha. To‘lov holati webhook orqali serveringizga qaytadi." },
  { question: "JSON formatida ishlaydimi?", answer: "Ha. So‘rov va webhook JSON ko‘rinishida." },
  { question: "Sandbox mavjudmi?", answer: "Ha. Jonli pulsiz test muhiti bor." },
  { question: "Komissiya qancha?", answer: "Integratsiya va hajmga bog‘liq; aniq foizni Business bilan aniqlashtirasiz." },
  { question: "To‘lov qancha vaqtda tasdiqlanadi?", answer: "Odatda bir necha soniyada — SBP tezkor tizim." },
  { question: "Qaysi banklar qo‘llab-quvvatlaydi?", answer: "SBP’ga ulangan Rossiya banklari; qamrov keng va kengaymoqda." },
  { question: "API limitlari qanday?", answer: "Oqilona rate limit bor; yuqori hajm uchun oshiriladi." },
  { question: "Support mavjudmi?", answer: "Ha, @StarsPaymeeSupport orqali integratsiya va operatsion yordam." },
  { question: "QR orqali to‘lov ishlaydimi?", answer: "Ha. Dinamik QR summa bilan generatsiya qilinadi va mijoz skanerlaydi." },
  { question: "Telefon raqami orqali-chi?", answer: "Ha. SBP raqam orqali o‘tkazmani qo‘llab-quvvatlaydi." },
  { question: "To‘lovdan keyin mahsulot avtomatik ketadimi?", answer: "Ha. Tasdiqdan so‘ng Stars/Premium/Gift avtomatik yetkaziladi." },
  { question: "Refund bormi?", answer: "Yetkazilmagan buyurtma hisob-kitob siyosatiga ko‘ra qaytariladi." },
  { question: "Xavfsizlik qanday ta’minlanadi?", answer: "HTTPS, webhook imzosi/tekshiruvi, idempotency va summani solishtirish." },
  { question: "Idempotency nima?", answer: "Bir webhook ikki marta kelsa, buyurtmani ikki marta yetkazmaslik mexanizmi." },
  { question: "Ikki tomonlama (Click va SBP) ulasa bo‘ladimi?", answer: "Ha. So‘m uchun Click/Payme, rubl uchun SBP — bitta Business ostida." },
  { question: "Statistika bormi?", answer: "Ha. To‘lovlar ID bo‘yicha; tarix so‘rov yoki panelda." },
  { question: "Hujjat beriladimi?", answer: "Ha. Endpoint, webhook formati va misollar bilan." },
  { question: "Minimal summa bormi?", answer: "Shartlar integratsiyaga bog‘liq; Business bilan aniqlashtiriladi." },
  { question: "Qanday boshlayman?", answer: "StarsPaymee Business sahifasidan ariza qoldiring; SBP va yetkazishni ulaymiz." },
  { question: "O‘zbekistonlik biznes ham ulasa bo‘ladimi?", answer: "Ha, agar Rossiya mijozlaridan rublda to‘lov qabul qilmoqchi bo‘lsangiz." },
  { question: "So‘m to‘lovi ham kerakmi?", answer: "Ko‘pincha ha — mahalliy mijoz uchun Click/Payme, rubl uchun SBP birga ishlaydi." },
  { question: "Test uchun misol beriladimi?", answer: "Ha. Webhook va imzo bo‘yicha misollar bilan hujjat beriladi." },
  { question: "Ishonchlimi?", answer: "Ha. Bank darajasidagi xavfsizlik va rasmiy SBP infratuzilmasi." },
];

const ruFaq = [
  { question: "Что такое SBP API?", answer: "Интеграция для автоматического приёма оплаты из России в рублях. Оплата по QR или номеру телефона, подтверждение через webhook." },
  { question: "Как получить API‑ключ?", answer: "Оставьте заявку на странице StarsPaymee Business; после подтверждения ключ выдаётся быстро." },
  { question: "Есть ли webhook?", answer: "Да. Статус оплаты возвращается на ваш сервер через webhook." },
  { question: "Работает ли в формате JSON?", answer: "Да. Запрос и webhook в виде JSON." },
  { question: "Есть ли Sandbox?", answer: "Да. Есть тестовая среда без реальных денег." },
  { question: "Какая комиссия?", answer: "Зависит от интеграции и объёма; точный процент уточняется с Business." },
  { question: "За сколько подтверждается оплата?", answer: "Обычно за несколько секунд — СБП мгновенная система." },
  { question: "Какие банки поддерживают?", answer: "Банки России, подключённые к СБП; охват широкий и растёт." },
  { question: "Какие лимиты API?", answer: "Есть разумный rate limit; повышается при объёме." },
  { question: "Есть ли поддержка?", answer: "Да, через @StarsPaymeeSupport — помощь по интеграции и эксплуатации." },
  { question: "Работает ли оплата по QR?", answer: "Да. Динамический QR генерируется с суммой, клиент сканирует." },
  { question: "А по номеру телефона?", answer: "Да. СБП поддерживает перевод по номеру." },
  { question: "Товар уходит автоматически после оплаты?", answer: "Да. После подтверждения Stars/Premium/Gift доставляется автоматически." },
  { question: "Есть ли возврат?", answer: "Недоставленный заказ возвращается по политике расчётов." },
  { question: "Как обеспечивается безопасность?", answer: "HTTPS, подпись/проверка webhook, идемпотентность и сверка суммы." },
  { question: "Что такое идемпотентность?", answer: "Механизм, чтобы при двойном webhook не доставить заказ дважды." },
  { question: "Можно подключить обе (Click и СБП)?", answer: "Да. Для сумов Click/Payme, для рублей СБП — под одним Business." },
  { question: "Есть ли статистика?", answer: "Да. Оплаты по ID; история через запрос или в панели." },
  { question: "Дают ли документацию?", answer: "Да. С эндпоинтами, форматом webhook и примерами." },
  { question: "Есть ли минимальная сумма?", answer: "Условия зависят от интеграции; уточняются с Business." },
  { question: "Как начать?", answer: "Оставьте заявку на странице StarsPaymee Business; подключим СБП и доставку." },
  { question: "Может ли подключиться бизнес из Узбекистана?", answer: "Да, если хотите принимать оплату в рублях от клиентов из России." },
  { question: "Нужна ли также оплата в сумах?", answer: "Часто да — для локального клиента Click/Payme, для рублей СБП работают вместе." },
  { question: "Дают ли примеры для теста?", answer: "Да. Документация с примерами webhook и подписи." },
  { question: "Надёжно ли это?", answer: "Да. Безопасность банковского уровня и официальная инфраструктура СБП." },
];

const enFaq = [
  { question: "What is the SBP API?", answer: "An integration for automatically accepting payments from Russia in rubles. Payment via QR or phone number, confirmation via webhook." },
  { question: "How do I get the API key?", answer: "Submit a request on the StarsPaymee Business page; after approval the key is issued quickly." },
  { question: "Is there a webhook?", answer: "Yes. The payment status returns to your server via webhook." },
  { question: "Does it work in JSON?", answer: "Yes. Requests and webhooks are in JSON." },
  { question: "Is there a Sandbox?", answer: "Yes. There is a test environment with no real money." },
  { question: "What is the fee?", answer: "It depends on the integration and volume; the exact percentage is confirmed with Business." },
  { question: "How fast is payment confirmed?", answer: "Usually within a few seconds — SBP is an instant system." },
  { question: "Which banks support it?", answer: "Russian banks connected to SBP; coverage is wide and growing." },
  { question: "What are the API limits?", answer: "There is a reasonable rate limit; raised for volume." },
  { question: "Is there support?", answer: "Yes, via @StarsPaymeeSupport — help with integration and operations." },
  { question: "Does QR payment work?", answer: "Yes. A dynamic QR is generated with the amount and the customer scans it." },
  { question: "And by phone number?", answer: "Yes. SBP supports transfers by number." },
  { question: "Does the product ship automatically after payment?", answer: "Yes. After confirmation Stars/Premium/Gift is delivered automatically." },
  { question: "Is there a refund?", answer: "An undelivered order is refunded per the settlement policy." },
  { question: "How is security ensured?", answer: "HTTPS, webhook signing/verification, idempotency and amount comparison." },
  { question: "What is idempotency?", answer: "A mechanism so a duplicate webhook doesn't deliver the order twice." },
  { question: "Can I connect both (Click and SBP)?", answer: "Yes. Click/Payme for so‘m, SBP for rubles — under one Business." },
  { question: "Is there statistics?", answer: "Yes. Payments by ID; history via a request or in the panel." },
  { question: "Is documentation provided?", answer: "Yes. With endpoints, the webhook format and examples." },
  { question: "Is there a minimum amount?", answer: "Terms depend on the integration; confirmed with Business." },
  { question: "How do I start?", answer: "Submit a request on the StarsPaymee Business page; we connect SBP and delivery." },
  { question: "Can a business from Uzbekistan connect?", answer: "Yes, if you want to accept payments in rubles from customers in Russia." },
  { question: "Do I also need so‘m payment?", answer: "Often yes — Click/Payme for local customers and SBP for rubles work together." },
  { question: "Are examples provided for testing?", answer: "Yes. Docs with webhook and signature examples." },
  { question: "Is it reliable?", answer: "Yes. Bank‑level security and the official SBP infrastructure." },
];

export const post: AeoPost = {
  slug: SLUG,
  category: "Biznes",
  type: "info",
  datePublished: "2026-07-14",
  dateModified: "2026-07-14",
  keywords: [
    "sbp api faq",
    "sbp payment faq",
    "система быстрых платежей faq",
    "russian payment faq",
    "sbp integration faq",
    "rub api faq",
  ],
  locales: {
    uz: {
      title: "SBP API haqida 25 ta eng ko‘p beriladigan savol",
      excerpt:
        "SBP API kaliti, webhook, JSON, sandbox, komissiya, banklar, tasdiqlash vaqti va limitlar bo‘yicha 25 savol-javob. Rossiyadan rublda avtomatik to‘lov qabul qilish — StarsPaymee Business.",
      metaTitle: "SBP API FAQ — 25 savol: kalit, webhook, komissiya 2026",
      metaDescription:
        "SBP API bo‘yicha 25 savol-javob: API kaliti, webhook, komissiya, banklar, tasdiqlash vaqti va limitlar. Rossiyadan rublda avtomatik to‘lov qabul qilish.",
      answerTitle: "Qisqa javob",
      Answer: UzAnswer,
      Body: UzBody,
      ctaHeading: "SBP integratsiyasini boshlang",
      ctaBody: "StarsPaymee Business orqali rubl to‘lovini avtomatik qabul qiling.",
      faq: uzFaq,
    },
    ru: {
      title: "25 самых частых вопросов про SBP API",
      excerpt:
        "25 вопросов‑ответов про SBP API: API‑ключ, webhook, JSON, sandbox, комиссия, банки, время подтверждения и лимиты. Автоприём оплаты из России в рублях — StarsPaymee Business.",
      metaTitle: "SBP API FAQ — 25 вопросов: ключ, webhook, комиссия 2026",
      metaDescription:
        "25 вопросов‑ответов про SBP API: API‑ключ, webhook, комиссия, банки, время подтверждения и лимиты. Автоприём оплаты из России в рублях.",
      answerTitle: "Краткий ответ",
      Answer: RuAnswer,
      Body: RuBody,
      ctaHeading: "Начните интеграцию СБП",
      ctaBody: "Через StarsPaymee Business принимайте оплату в рублях автоматически.",
      faq: ruFaq,
    },
    en: {
      title: "25 most common questions about the SBP API",
      excerpt:
        "25 Q&A about the SBP API: API key, webhook, JSON, sandbox, fees, banks, confirmation time and limits. Auto‑accepting payments from Russia in rubles — StarsPaymee Business.",
      metaTitle: "SBP API FAQ — 25 questions: key, webhook, fees 2026",
      metaDescription:
        "25 Q&A about the SBP API: API key, webhook, fees, banks, confirmation time and limits. Auto‑accepting payments from Russia in rubles.",
      answerTitle: "Short answer",
      Answer: EnAnswer,
      Body: EnBody,
      ctaHeading: "Start the SBP integration",
      ctaBody: "Through StarsPaymee Business, accept ruble payments automatically.",
      faq: enFaq,
    },
  },
};
