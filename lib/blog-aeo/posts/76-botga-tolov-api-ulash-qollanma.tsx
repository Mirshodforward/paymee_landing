import { Link } from "@/i18n/navigation";
import { InlineCta, Sources, Steps, Step, KeyFacts } from "@/components/blog/aeo-blocks";
import type { AeoPost } from "@/lib/blog-aeo/types";

const SLUG = "botga-tolov-api-ulash-qollanma";

/* ---------------- UZ ---------------- */
function UzAnswer() {
  return (
    <p>
      Telegram botingizga to‘lov API ulash uchun: to‘lov (Click/Payme/SBP) integratsiyasini sozlang, StarsPaymee API
      kaliti bilan buyurtma yarating va webhook orqali statusni oling. Mijoz botda mahsulotni tanlaydi, to‘laydi va
      Stars/Premium/Gift avtomatik yetkaziladi — hammasi bot ichida.
    </p>
  );
}

function UzBody() {
  return (
    <>
      <h2 id="nima">Botga to‘lov API nima uchun kerak?</h2>
      <p>
        Qo‘lda sotuvda admin har bir to‘lovni tekshiradi va mahsulotni qo‘lda yetkazadi — bu sekin va xatoga moyil.
        To‘lov API bilan bot mustaqil ishlaydi: to‘lovni qabul qiladi, tasdiqlaydi va yetkazadi. Bu 24/7 avtomatik
        sotuvni beradi.
      </p>

      <KeyFacts label="Kerakli bo‘limlar">
        <li>To‘lov integratsiyasi — Click, Payme yoki SBP.</li>
        <li>StarsPaymee API kaliti — mahsulot yetkazish uchun.</li>
        <li>Webhook — to‘lov va yetkazish statusi uchun.</li>
        <li>Buyurtma bazasi — ID, status, mijoz.</li>
      </KeyFacts>

      <h2 id="qadamlar">Bosqichma-bosqich ulash</h2>
      <Steps>
        <Step title="1. Bot va API kaliti">
          Botni yarating (BotFather) va <Link href="/business">StarsPaymee Business</Link>dan API kalit oling.
        </Step>
        <Step title="2. Katalog va narx">
          <code>GET /products</code> bilan mahsulot va narxlarni botga chiqaring.
        </Step>
        <Step title="3. To‘lov yaratish">
          Mijoz tanlaganda Click/Payme/SBP invoice yaratasiz va havolani berasiz.
        </Step>
        <Step title="4. Callback/webhook">
          To‘lov tasdig‘i kelganda buyurtmani <code>POST /orders</code> orqali yuborasiz.
        </Step>
        <Step title="5. Yetkazish va xabar">
          «delivered» webhook kelgach mijozga botda tasdiq ko‘rsatasiz.
        </Step>
      </Steps>

      <InlineCta text="Botingizga to‘lov API ulamoqchimisiz? Business bilan bog‘laning." />

      <p>
        Bog‘liq:{" "}
        <Link href="/blog/telegram-stars-api-nima-ulanish">Stars API</Link>,{" "}
        <Link href="/blog/click-api-avtomatik-tolov-qabul">Click callback</Link>,{" "}
        <Link href="/blog/telegram-stars-api-webhook-integratsiya">webhook</Link> va{" "}
        <Link href="/blog/payment-api-uzbekistan-tolov-integratsiya">payment API</Link>.
      </p>

      <Sources
        label="Manbalar"
        items={[
          { href: "https://core.telegram.org/bots/api", label: "core.telegram.org/bots/api", note: "Bot API" },
          { href: "https://core.telegram.org/bots/payments", label: "core.telegram.org/bots/payments", note: "Bot to‘lovlari" },
        ]}
      />
    </>
  );
}

/* ---------------- RU ---------------- */
function RuAnswer() {
  return (
    <p>
      Чтобы подключить платёжный API к Telegram‑боту: настройте интеграцию оплаты (Click/Payme/SBP), создавайте заказ
      с ключом StarsPaymee API и получайте статус через webhook. Клиент выбирает товар в боте, платит, и
      Stars/Premium/Gift доставляется автоматически — всё внутри бота.
    </p>
  );
}

function RuBody() {
  return (
    <>
      <h2 id="nima">Зачем боту платёжный API?</h2>
      <p>
        При ручной продаже админ проверяет каждую оплату и доставляет вручную — медленно и с ошибками. С платёжным
        API бот работает сам: принимает оплату, подтверждает и доставляет. Это автопродажи 24/7.
      </p>

      <KeyFacts label="Необходимые части">
        <li>Платёжная интеграция — Click, Payme или SBP.</li>
        <li>Ключ StarsPaymee API — для доставки товара.</li>
        <li>Webhook — для статуса оплаты и доставки.</li>
        <li>База заказов — ID, статус, клиент.</li>
      </KeyFacts>

      <h2 id="qadamlar">Подключение по шагам</h2>
      <Steps>
        <Step title="1. Бот и API‑ключ">
          Создайте бота (BotFather) и получите API‑ключ из <Link href="/business">StarsPaymee Business</Link>.
        </Step>
        <Step title="2. Каталог и цена">
          Через <code>GET /products</code> выведите товары и цены в боте.
        </Step>
        <Step title="3. Создание оплаты">
          Когда клиент выбрал, создаёте инвойс Click/Payme/SBP и даёте ссылку.
        </Step>
        <Step title="4. Callback/webhook">
          При подтверждении оплаты отправляете заказ через <code>POST /orders</code>.
        </Step>
        <Step title="5. Доставка и уведомление">
          После webhook «delivered» показываете клиенту подтверждение в боте.
        </Step>
      </Steps>

      <InlineCta text="Хотите подключить платёжный API к боту? Свяжитесь с Business." />

      <p>
        Связанное:{" "}
        <Link href="/blog/telegram-stars-api-nima-ulanish">Stars API</Link>,{" "}
        <Link href="/blog/click-api-avtomatik-tolov-qabul">callback Click</Link>,{" "}
        <Link href="/blog/telegram-stars-api-webhook-integratsiya">webhook</Link> и{" "}
        <Link href="/blog/payment-api-uzbekistan-tolov-integratsiya">payment API</Link>.
      </p>

      <Sources
        label="Источники"
        items={[
          { href: "https://core.telegram.org/bots/api", label: "core.telegram.org/bots/api", note: "Bot API" },
          { href: "https://core.telegram.org/bots/payments", label: "core.telegram.org/bots/payments", note: "платежи в ботах" },
        ]}
      />
    </>
  );
}

/* ---------------- EN ---------------- */
function EnAnswer() {
  return (
    <p>
      To connect a payment API to your Telegram bot: set up a payment integration (Click/Payme/SBP), create orders
      with the StarsPaymee API key and get the status via webhook. The customer picks a product in the bot, pays, and
      Stars/Premium/Gift is delivered automatically — all inside the bot.
    </p>
  );
}

function EnBody() {
  return (
    <>
      <h2 id="nima">Why does a bot need a payment API?</h2>
      <p>
        In manual selling an admin checks every payment and delivers by hand — slow and error‑prone. With a payment
        API the bot works on its own: it accepts payment, confirms and delivers. This gives 24/7 automated sales.
      </p>

      <KeyFacts label="Required parts">
        <li>Payment integration — Click, Payme or SBP.</li>
        <li>StarsPaymee API key — for product delivery.</li>
        <li>Webhook — for payment and delivery status.</li>
        <li>Order database — ID, status, customer.</li>
      </KeyFacts>

      <h2 id="qadamlar">Step‑by‑step connection</h2>
      <Steps>
        <Step title="1. Bot and API key">
          Create a bot (BotFather) and get an API key from <Link href="/business">StarsPaymee Business</Link>.
        </Step>
        <Step title="2. Catalog and price">
          Use <code>GET /products</code> to display products and prices in the bot.
        </Step>
        <Step title="3. Create a payment">
          When the customer chooses, create a Click/Payme/SBP invoice and give the link.
        </Step>
        <Step title="4. Callback/webhook">
          On payment confirmation, send the order via <code>POST /orders</code>.
        </Step>
        <Step title="5. Deliver and notify">
          After the «delivered» webhook, show the customer a confirmation in the bot.
        </Step>
      </Steps>

      <InlineCta text="Want to connect a payment API to your bot? Contact Business." />

      <p>
        Related:{" "}
        <Link href="/blog/telegram-stars-api-nima-ulanish">Stars API</Link>,{" "}
        <Link href="/blog/click-api-avtomatik-tolov-qabul">Click callback</Link>,{" "}
        <Link href="/blog/telegram-stars-api-webhook-integratsiya">webhook</Link> and{" "}
        <Link href="/blog/payment-api-uzbekistan-tolov-integratsiya">payment API</Link>.
      </p>

      <Sources
        label="Sources"
        items={[
          { href: "https://core.telegram.org/bots/api", label: "core.telegram.org/bots/api", note: "Bot API" },
          { href: "https://core.telegram.org/bots/payments", label: "core.telegram.org/bots/payments", note: "bot payments" },
        ]}
      />
    </>
  );
}

const uzFaq = [
  { question: "Botga to‘lov API qanday ulanadi?", answer: "To‘lov (Click/Payme/SBP) integratsiyasini sozlang, StarsPaymee API bilan buyurtma yarating va webhook orqali statusni oling." },
  { question: "Qanday to‘lov usullari?", answer: "Click, Payme, UzCard/HUMO (so‘m) va SBP (rubl)." },
  { question: "API kalitini qayerdan olaman?", answer: "StarsPaymee Business sahifasidan ariza qoldirib olasiz." },
  { question: "Katalogni qanday chiqaraman?", answer: "GET /products orqali mahsulot va narxni olib botga chiqarasiz." },
  { question: "To‘lovdan keyin mahsulot avtomatik ketadimi?", answer: "Ha. Tasdiqdan so‘ng POST /orders orqali yuboriladi va avtomatik yetkaziladi." },
  { question: "Webhook shartmi?", answer: "Tavsiya etiladi — real vaqtli status uchun; zaxira sifatida status so‘rovi bor." },
  { question: "Bot kutubxonasi kerakmi?", answer: "Istalgan (aiogram, telegraf, grammY va h.k.) — API REST bo‘lgani uchun." },
  { question: "Sandbox bormi?", answer: "Ha. Jonli pulsiz test muhiti." },
  { question: "Xavfsizlik uchun nima muhim?", answer: "API kalitini serverda saqlash, imzo tekshiruvi va idempotency." },
  { question: "Mini App bilan ishlaydimi?", answer: "Ha. Bot va Mini App ikkalasida." },
  { question: "Buyurtma bazasi kerakmi?", answer: "Ha. ID, status va mijozni saqlash uchun kichik baza foydali." },
  { question: "Refund qanday?", answer: "Yetkazilmagan buyurtma hisob-kitob siyosati bo‘yicha qaytariladi." },
  { question: "Rublda sotsam bo‘ladimi?", answer: "Ha. SBP integratsiyasi orqali." },
  { question: "Bir nechta mahsulot sotsam bo‘ladimi?", answer: "Ha. Stars, Premium, Gifts bitta API orqali." },
  { question: "Statistika bormi?", answer: "Ha. Buyurtma va to‘lovlar ID bo‘yicha." },
  { question: "Hujjat beriladimi?", answer: "Ha. Endpoint, callback va webhook misollari bilan." },
  { question: "Support bormi?", answer: "Ha, @StarsPaymeeSupport." },
  { question: "Qanday boshlayman?", answer: "StarsPaymee Business sahifasidan ariza qoldiring." },
];

const ruFaq = [
  { question: "Как подключить платёжный API к боту?", answer: "Настройте оплату (Click/Payme/SBP), создавайте заказ через StarsPaymee API и получайте статус через webhook." },
  { question: "Какие способы оплаты?", answer: "Click, Payme, UzCard/HUMO (сум) и SBP (рубли)." },
  { question: "Где взять API‑ключ?", answer: "Оставьте заявку на странице StarsPaymee Business." },
  { question: "Как вывести каталог?", answer: "Через GET /products получаете товары и цену и выводите в боте." },
  { question: "Товар уходит автоматически после оплаты?", answer: "Да. После подтверждения отправляется через POST /orders и доставляется автоматически." },
  { question: "Обязателен ли webhook?", answer: "Рекомендуется — для статуса в реальном времени; как резерв есть запрос статуса." },
  { question: "Нужна ли библиотека для бота?", answer: "Любая (aiogram, telegraf, grammY и т.д.) — так как API REST." },
  { question: "Есть ли Sandbox?", answer: "Да. Тестовая среда без реальных денег." },
  { question: "Что важно для безопасности?", answer: "Хранить ключ на сервере, проверять подпись и идемпотентность." },
  { question: "Работает ли с Mini App?", answer: "Да. И в боте, и в Mini App." },
  { question: "Нужна ли база заказов?", answer: "Да. Небольшая база для ID, статуса и клиента полезна." },
  { question: "Как с возвратом?", answer: "Недоставленный заказ возвращается по политике расчётов." },
  { question: "Можно ли продавать в рублях?", answer: "Да. Через интеграцию SBP." },
  { question: "Можно ли продавать несколько товаров?", answer: "Да. Stars, Premium, Gifts через один API." },
  { question: "Есть ли статистика?", answer: "Да. Заказы и оплаты по ID." },
  { question: "Дают ли документацию?", answer: "Да. С примерами эндпоинтов, callback и webhook." },
  { question: "Есть ли поддержка?", answer: "Да, @StarsPaymeeSupport." },
  { question: "Как начать?", answer: "Оставьте заявку на странице StarsPaymee Business." },
];

const enFaq = [
  { question: "How do I connect a payment API to a bot?", answer: "Set up payment (Click/Payme/SBP), create orders via the StarsPaymee API and get the status via webhook." },
  { question: "Which payment methods?", answer: "Click, Payme, UzCard/HUMO (so‘m) and SBP (rubles)." },
  { question: "Where do I get the API key?", answer: "Submit a request on the StarsPaymee Business page." },
  { question: "How do I display the catalog?", answer: "Use GET /products to fetch products and price and show them in the bot." },
  { question: "Does the product ship automatically after payment?", answer: "Yes. After confirmation it's sent via POST /orders and delivered automatically." },
  { question: "Is a webhook mandatory?", answer: "Recommended — for real‑time status; there's a status request as a fallback." },
  { question: "Do I need a bot library?", answer: "Any (aiogram, telegraf, grammY, etc.) — since the API is REST." },
  { question: "Is there a Sandbox?", answer: "Yes. A test environment with no real money." },
  { question: "What matters for security?", answer: "Keep the key server‑side, verify the signature and use idempotency." },
  { question: "Does it work with Mini App?", answer: "Yes. Both in the bot and in the Mini App." },
  { question: "Do I need an order database?", answer: "Yes. A small database for ID, status and customer is useful." },
  { question: "How about refunds?", answer: "An undelivered order is refunded per the settlement policy." },
  { question: "Can I sell in rubles?", answer: "Yes. Via the SBP integration." },
  { question: "Can I sell multiple products?", answer: "Yes. Stars, Premium, Gifts through one API." },
  { question: "Is there statistics?", answer: "Yes. Orders and payments by ID." },
  { question: "Is documentation provided?", answer: "Yes. With endpoint, callback and webhook examples." },
  { question: "Is there support?", answer: "Yes, @StarsPaymeeSupport." },
  { question: "How do I start?", answer: "Submit a request on the StarsPaymee Business page." },
];

export const post: AeoPost = {
  slug: SLUG,
  category: "Biznes",
  type: "howto",
  datePublished: "2026-07-07",
  dateModified: "2026-07-07",
  keywords: [
    "telegram bot payment api",
    "botga to‘lov ulash",
    "bot payment integration",
    "telegram bot to‘lov api",
    "bot stars sotish api",
    "telegram bot click payme",
  ],
  howToSteps: [
    { name: "Bot va API kaliti", text: "Botni yarating va StarsPaymee Business’dan API kalit oling." },
    { name: "Katalog va narx", text: "GET /products bilan mahsulot va narxni botga chiqaring." },
    { name: "To‘lov yaratish", text: "Click/Payme/SBP invoice yaratib mijozga havola bering." },
    { name: "Callback/webhook", text: "To‘lov tasdig‘ida POST /orders bilan buyurtma yuboring." },
    { name: "Yetkazish va xabar", text: "delivered webhook kelgach mijozga tasdiq ko‘rsating." },
  ],
  locales: {
    uz: {
      title: "Telegram botga to‘lov API ulash qo‘llanmasi",
      excerpt:
        "Telegram botingizga to‘lov API ulang: Click/Payme/SBP integratsiyasi, StarsPaymee API kaliti, buyurtma va webhook. 24/7 avtomatik sotuv — bosqichma-bosqich va 18 savol-javob.",
      metaTitle: "Telegram botga to‘lov API ulash qo‘llanmasi 2026",
      metaDescription:
        "Telegram botga to‘lov API ulash: Click/Payme/SBP, StarsPaymee API kaliti, buyurtma va webhook. 24/7 avtomatik sotuv qo‘llanmasi — 18 savol-javob.",
      answerTitle: "Qisqa javob",
      Answer: UzAnswer,
      Body: UzBody,
      ctaHeading: "Botingizni avtomatlashtiring",
      ctaBody: "StarsPaymee Business orqali botga to‘lov API ulang — 24/7 avtomatik sotuv.",
      faq: uzFaq,
    },
    ru: {
      title: "Руководство: подключение платёжного API к Telegram‑боту",
      excerpt:
        "Подключите платёжный API к боту: интеграция Click/Payme/SBP, ключ StarsPaymee API, заказ и webhook. Автопродажи 24/7 — по шагам и 18 вопросов‑ответов.",
      metaTitle: "Подключение платёжного API к Telegram‑боту 2026",
      metaDescription:
        "Подключение платёжного API к боту: Click/Payme/SBP, ключ StarsPaymee API, заказ и webhook. Руководство по автопродажам 24/7 — 18 вопросов‑ответов.",
      answerTitle: "Краткий ответ",
      Answer: RuAnswer,
      Body: RuBody,
      ctaHeading: "Автоматизируйте бота",
      ctaBody: "Через StarsPaymee Business подключите платёжный API к боту — автопродажи 24/7.",
      faq: ruFaq,
    },
    en: {
      title: "Guide: connecting a payment API to a Telegram bot",
      excerpt:
        "Connect a payment API to your bot: Click/Payme/SBP integration, StarsPaymee API key, order and webhook. 24/7 automated sales — step by step and 18 Q&A.",
      metaTitle: "Connecting a payment API to a Telegram bot 2026",
      metaDescription:
        "Connecting a payment API to a bot: Click/Payme/SBP, StarsPaymee API key, order and webhook. A 24/7 automated sales guide — 18 Q&A.",
      answerTitle: "Short answer",
      Answer: EnAnswer,
      Body: EnBody,
      ctaHeading: "Automate your bot",
      ctaBody: "Through StarsPaymee Business, connect a payment API to your bot — 24/7 automated sales.",
      faq: enFaq,
    },
  },
};
