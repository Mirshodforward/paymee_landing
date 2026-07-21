import { Link } from "@/i18n/navigation";
import { InlineCta, Sources, KeyFacts, Steps, Step } from "@/components/blog/aeo-blocks";
import type { AeoPost } from "@/lib/blog-aeo/types";

const SLUG = "click-api-rasmiy-integratsiya";

/* ---------------- UZ ---------------- */
function UzAnswer() {
  return (
    <p>
      Click API — Click to‘lov tizimining rasmiy integratsiyasi bo‘lib, veb-sayt yoki botingizda mijozdan so‘mda
      avtomatik to‘lov qabul qilish imkonini beradi. StarsPaymee Business orqali Click integratsiyasi Stars, Premium
      va Gifts sotuviga ulanadi: mijoz Click bilan to‘laydi, tizim tasdiqni oladi va mahsulot avtomatik yetkaziladi.
    </p>
  );
}

function UzBody() {
  return (
    <>
      <h2 id="nima">Click API nima?</h2>
      <p>
        Click — O‘zbekistonda keng tarqalgan to‘lov tizimi. Click API sizning ilovangizga to‘lovni dasturiy tarzda
        yaratish, mijozni to‘lov sahifasiga yo‘naltirish va natijani (muvaffaqiyat/rad) avtomatik olish imkonini
        beradi. StarsPaymee Business’da bu integratsiya <Link href="/stars">Stars</Link>,{" "}
        <Link href="/premium">Premium</Link> va <Link href="/gifts">Gifts</Link> yetkazib berish oqimiga bog‘langan.
      </p>

      <KeyFacts label="Click integratsiyasi asoslari">
        <li>To‘lov so‘mda, mahalliy kartalar (UzCard/HUMO) bilan.</li>
        <li>Invoice (hisob-faktura) dasturiy yaratiladi.</li>
        <li>Callback/webhook orqali to‘lov tasdig‘i keladi.</li>
        <li>Tasdiqdan so‘ng mahsulot avtomatik yetkaziladi.</li>
        <li>Har bir tranzaksiya ID bilan kuzatiladi.</li>
      </KeyFacts>

      <h2 id="oqim">Rasmiy integratsiya qanday ishlaydi?</h2>
      <Steps>
        <Step title="1. Merchant sozlamalari">
          Click merchant ma’lumotlari (service_id, merchant_id, kalit) StarsPaymee Business tomonida sozlanadi.
        </Step>
        <Step title="2. Invoice yaratish">
          Buyurtma uchun summa va tavsif bilan to‘lov (invoice) yaratiladi va mijozga havola beriladi.
        </Step>
        <Step title="3. Mijoz to‘lovi">
          Mijoz Click ilovasi yoki karta orqali so‘mda to‘laydi — 3-D Secure/OTP odatdagidek ishlaydi.
        </Step>
        <Step title="4. Callback tasdig‘i">
          Click to‘lov holatini callback orqali qaytaradi; imzo (signature) tekshiriladi.
        </Step>
        <Step title="5. Avtomatik yetkazish">
          Muvaffaqiyatli to‘lovdan so‘ng Stars/Premium/Gift API orqali avtomatik yetkaziladi.
        </Step>
      </Steps>

      <InlineCta text="Click integratsiyasini ulamoqchimisiz? Business bilan bog‘laning." />

      <h2 id="xavfsizlik">Xavfsizlik va tekshiruv</h2>
      <p>
        Rasmiy integratsiyada har bir callback imzo (signature) bilan tekshiriladi va faqat tasdiqlangan to‘lov
        yetkazib berishni ishga tushiradi. Bu «to‘lov o‘tdi-yu mahsulot ketmadi» yoki soxta callback holatlarining
        oldini oladi. Batafsil:{" "}
        <Link href="/blog/click-api-avtomatik-tolov-qabul">Click API orqali avtomatik to‘lov</Link> va{" "}
        <Link href="/blog/click-api-faq-savollar">Click API FAQ</Link>.
      </p>

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
      Click API — официальная интеграция платёжной системы Click, позволяющая принимать оплату в сумах автоматически
      на сайте или в боте. Через StarsPaymee Business интеграция Click подключена к продаже Stars, Premium и Gifts:
      клиент платит через Click, система получает подтверждение и товар доставляется автоматически.
    </p>
  );
}

function RuBody() {
  return (
    <>
      <h2 id="nima">Что такое Click API?</h2>
      <p>
        Click — распространённая в Узбекистане платёжная система. Click API позволяет вашему приложению программно
        создавать оплату, направлять клиента на страницу оплаты и автоматически получать результат
        (успех/отказ). В StarsPaymee Business эта интеграция связана с доставкой{" "}
        <Link href="/stars">Stars</Link>, <Link href="/premium">Premium</Link> и <Link href="/gifts">Gifts</Link>.
      </p>

      <KeyFacts label="Основы интеграции Click">
        <li>Оплата в сумах, локальными картами (UzCard/HUMO).</li>
        <li>Инвойс создаётся программно.</li>
        <li>Подтверждение оплаты приходит через callback/webhook.</li>
        <li>После подтверждения товар доставляется автоматически.</li>
        <li>Каждая транзакция отслеживается по ID.</li>
      </KeyFacts>

      <h2 id="oqim">Как работает официальная интеграция?</h2>
      <Steps>
        <Step title="1. Настройки мерчанта">
          Данные мерчанта Click (service_id, merchant_id, ключ) настраиваются на стороне StarsPaymee Business.
        </Step>
        <Step title="2. Создание инвойса">
          Для заказа создаётся оплата (инвойс) с суммой и описанием, клиенту выдаётся ссылка.
        </Step>
        <Step title="3. Оплата клиента">
          Клиент платит через приложение Click или картой в сумах — 3‑D Secure/OTP как обычно.
        </Step>
        <Step title="4. Подтверждение callback">
          Click возвращает статус оплаты через callback; проверяется подпись (signature).
        </Step>
        <Step title="5. Автодоставка">
          После успешной оплаты Stars/Premium/Gift доставляется автоматически через API.
        </Step>
      </Steps>

      <InlineCta text="Хотите подключить интеграцию Click? Свяжитесь с Business." />

      <h2 id="xavfsizlik">Безопасность и проверка</h2>
      <p>
        В официальной интеграции каждый callback проверяется по подписи (signature), и только подтверждённая оплата
        запускает доставку. Это предотвращает ситуации «оплата прошла, а товар не доставлен» и поддельные callback.
        Подробнее:{" "}
        <Link href="/blog/click-api-avtomatik-tolov-qabul">автоприём оплаты через Click API</Link> и{" "}
        <Link href="/blog/click-api-faq-savollar">FAQ Click API</Link>.
      </p>

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
      Click API is the official integration of the Click payment system, letting you accept payments in so‘m
      automatically on your website or bot. Through StarsPaymee Business the Click integration is wired to Stars,
      Premium and Gifts selling: the customer pays via Click, the system receives confirmation and the product is
      delivered automatically.
    </p>
  );
}

function EnBody() {
  return (
    <>
      <h2 id="nima">What is Click API?</h2>
      <p>
        Click is a widely used payment system in Uzbekistan. Click API lets your app programmatically create a
        payment, redirect the customer to the payment page and receive the result (success/failure) automatically.
        In StarsPaymee Business this integration is connected to <Link href="/stars">Stars</Link>,{" "}
        <Link href="/premium">Premium</Link> and <Link href="/gifts">Gifts</Link> delivery.
      </p>

      <KeyFacts label="Click integration basics">
        <li>Payment in so‘m, with local cards (UzCard/HUMO).</li>
        <li>An invoice is created programmatically.</li>
        <li>Payment confirmation arrives via callback/webhook.</li>
        <li>After confirmation the product is delivered automatically.</li>
        <li>Every transaction is tracked by ID.</li>
      </KeyFacts>

      <h2 id="oqim">How does the official integration work?</h2>
      <Steps>
        <Step title="1. Merchant settings">
          Click merchant data (service_id, merchant_id, key) is configured on the StarsPaymee Business side.
        </Step>
        <Step title="2. Create an invoice">
          A payment (invoice) with amount and description is created for the order, and a link is given to the customer.
        </Step>
        <Step title="3. Customer payment">
          The customer pays via the Click app or card in so‘m — 3‑D Secure/OTP works as usual.
        </Step>
        <Step title="4. Callback confirmation">
          Click returns the payment status via callback; the signature is verified.
        </Step>
        <Step title="5. Auto‑delivery">
          After successful payment Stars/Premium/Gift is delivered automatically via the API.
        </Step>
      </Steps>

      <InlineCta text="Want to connect the Click integration? Contact Business." />

      <h2 id="xavfsizlik">Security and verification</h2>
      <p>
        In the official integration every callback is verified by signature, and only a confirmed payment triggers
        delivery. This prevents «payment went through but product wasn't delivered» situations and fake callbacks.
        See also:{" "}
        <Link href="/blog/click-api-avtomatik-tolov-qabul">accepting payments via Click API</Link> and{" "}
        <Link href="/blog/click-api-faq-savollar">Click API FAQ</Link>.
      </p>

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
  { question: "Click API nima?", answer: "Click to‘lov tizimining rasmiy integratsiyasi — sayt yoki botda so‘mda avtomatik to‘lov qabul qilish uchun. StarsPaymee Business orqali Stars/Premium/Gifts sotuviga ulanadi." },
  { question: "Click integratsiyasi rasmiymi?", answer: "Ha. Click merchant ma’lumotlari va rasmiy callback/imzo mexanizmi bilan ishlaydi." },
  { question: "To‘lov qaysi valyutada?", answer: "So‘mda (UZS), mahalliy UzCard/HUMO kartalari va Click ilovasi orqali." },
  { question: "Callback nima?", answer: "Click to‘lov holatini serveringizga qaytaradigan xabar; imzo bilan tekshiriladi va yetkazishni ishga tushiradi." },
  { question: "Imzo (signature) nima uchun kerak?", answer: "Callback haqiqiyligini tasdiqlash uchun — soxta so‘rovlar rad etiladi." },
  { question: "To‘lovdan keyin mahsulot avtomatik ketadimi?", answer: "Ha. Tasdiqdan so‘ng Stars/Premium/Gift API orqali avtomatik yetkaziladi." },
  { question: "To‘lov o‘tdi-yu mahsulot kelmasa-chi?", answer: "Rasmiy oqimda yetkazish faqat tasdiqdan keyin ishga tushadi; nosozlikda buyurtma qayta ishlanadi yoki qaytariladi." },
  { question: "Invoice qanday yaratiladi?", answer: "Buyurtma summasi va tavsifi bilan dasturiy tarzda; mijozga to‘lov havolasi beriladi." },
  { question: "Click API narxi qancha?", answer: "Integratsiya StarsPaymee Business tarifiga kiradi; aniq shart hajmga bog‘liq." },
  { question: "Click ulanish qancha vaqt oladi?", answer: "Merchant sozlamalari va kalitlar tayyor bo‘lsa, integratsiya tez yakunlanadi." },
  { question: "Sandbox bormi?", answer: "Ha. Jonli pulsiz test uchun sinov muhiti mavjud." },
  { question: "3-D Secure/OTP ishlaydimi?", answer: "Ha, bank bildirishnomalari va OTP odatdagidek ishlaydi." },
  { question: "Tranzaksiyani qanday kuzataman?", answer: "Har bir to‘lov ID bilan; status callback yoki so‘rov orqali tekshiriladi." },
  { question: "Payme ham ulanadimi?", answer: "Ha. Payme va boshqa mahalliy to‘lovlar ham qo‘llab-quvvatlanadi." },
  { question: "Refund qanday amalga oshadi?", answer: "Yetkazilmagan buyurtma bo‘yicha hisob-kitob siyosatiga ko‘ra qaytariladi." },
  { question: "Botda ham ishlaydimi?", answer: "Ha. Bot yoki Mini App ichida to‘lov havolasi orqali." },
  { question: "Xorijiy karta kerakmi?", answer: "Yo‘q. Faqat mahalliy kartalar va Click ilovasi." },
  { question: "Hujjat beriladimi?", answer: "Ha. Endpoint, callback formati va imzo tekshiruvi bo‘yicha hujjat beriladi." },
  { question: "Qanday boshlayman?", answer: "StarsPaymee Business sahifasidan ariza qoldiring; merchant sozlamalari va kalitni ulaymiz." },
];

const ruFaq = [
  { question: "Что такое Click API?", answer: "Официальная интеграция платёжной системы Click — для автоприёма оплаты в сумах на сайте или в боте. Через StarsPaymee Business подключается к продаже Stars/Premium/Gifts." },
  { question: "Официальна ли интеграция Click?", answer: "Да. Работает с данными мерчанта Click и официальным механизмом callback/подписи." },
  { question: "В какой валюте оплата?", answer: "В сумах (UZS), локальными картами UzCard/HUMO и через приложение Click." },
  { question: "Что такое callback?", answer: "Сообщение, которым Click возвращает статус оплаты на ваш сервер; проверяется подписью и запускает доставку." },
  { question: "Зачем нужна подпись (signature)?", answer: "Для подтверждения подлинности callback — поддельные запросы отклоняются." },
  { question: "Товар уходит автоматически после оплаты?", answer: "Да. После подтверждения Stars/Premium/Gift доставляется автоматически через API." },
  { question: "Что если оплата прошла, а товар не пришёл?", answer: "В официальном потоке доставка запускается только после подтверждения; при сбое заказ переобрабатывается или возвращается." },
  { question: "Как создаётся инвойс?", answer: "Программно, с суммой и описанием заказа; клиенту выдаётся ссылка на оплату." },
  { question: "Сколько стоит Click API?", answer: "Интеграция входит в тариф StarsPaymee Business; точные условия зависят от объёма." },
  { question: "Сколько занимает подключение Click?", answer: "Если данные мерчанта и ключи готовы, интеграция завершается быстро." },
  { question: "Есть ли Sandbox?", answer: "Да. Есть тестовая среда без реальных денег." },
  { question: "Работают ли 3‑D Secure/OTP?", answer: "Да, банковские уведомления и OTP работают как обычно." },
  { question: "Как отслеживать транзакцию?", answer: "Каждая оплата по ID; статус проверяется через callback или запрос." },
  { question: "Подключается ли Payme?", answer: "Да. Payme и другие локальные оплаты тоже поддерживаются." },
  { question: "Как происходит возврат?", answer: "По недоставленному заказу возврат согласно политике расчётов." },
  { question: "Работает ли в боте?", answer: "Да. Внутри бота или Mini App через ссылку на оплату." },
  { question: "Нужна ли зарубежная карта?", answer: "Нет. Только локальные карты и приложение Click." },
  { question: "Дают ли документацию?", answer: "Да. Документация по эндпоинтам, формату callback и проверке подписи." },
  { question: "Как начать?", answer: "Оставьте заявку на странице StarsPaymee Business; подключим настройки мерчанта и ключ." },
];

const enFaq = [
  { question: "What is Click API?", answer: "The official integration of the Click payment system — for auto‑accepting payments in so‘m on a site or bot. Through StarsPaymee Business it connects to Stars/Premium/Gifts selling." },
  { question: "Is the Click integration official?", answer: "Yes. It works with Click merchant data and the official callback/signature mechanism." },
  { question: "In which currency is payment?", answer: "In so‘m (UZS), with local UzCard/HUMO cards and via the Click app." },
  { question: "What is a callback?", answer: "A message by which Click returns the payment status to your server; it is verified by signature and triggers delivery." },
  { question: "Why is a signature needed?", answer: "To confirm the callback's authenticity — fake requests are rejected." },
  { question: "Does the product ship automatically after payment?", answer: "Yes. After confirmation, Stars/Premium/Gift is delivered automatically via the API." },
  { question: "What if payment went through but no product?", answer: "In the official flow delivery only starts after confirmation; on failure the order is reprocessed or refunded." },
  { question: "How is an invoice created?", answer: "Programmatically, with the order amount and description; a payment link is given to the customer." },
  { question: "How much does Click API cost?", answer: "The integration is part of the StarsPaymee Business tariff; exact terms depend on volume." },
  { question: "How long does Click connection take?", answer: "If merchant data and keys are ready, integration finishes quickly." },
  { question: "Is there a Sandbox?", answer: "Yes. There is a test environment with no real money." },
  { question: "Do 3‑D Secure/OTP work?", answer: "Yes, bank notifications and OTP work as usual." },
  { question: "How do I track a transaction?", answer: "Each payment by ID; the status is checked via callback or a request." },
  { question: "Is Payme connected too?", answer: "Yes. Payme and other local payments are also supported." },
  { question: "How does a refund work?", answer: "For an undelivered order, a refund per the settlement policy." },
  { question: "Does it work in a bot?", answer: "Yes. Inside a bot or Mini App via a payment link." },
  { question: "Do I need a foreign card?", answer: "No. Only local cards and the Click app." },
  { question: "Is documentation provided?", answer: "Yes. Docs on endpoints, the callback format and signature verification." },
  { question: "How do I start?", answer: "Submit a request on the StarsPaymee Business page; we connect merchant settings and the key." },
];

export const post: AeoPost = {
  slug: SLUG,
  category: "Biznes",
  type: "howto",
  datePublished: "2026-07-19",
  dateModified: "2026-07-19",
  keywords: [
    "click api",
    "click integration",
    "click payment api",
    "click uz api",
    "click api integratsiya",
    "click to‘lov api",
  ],
  howToSteps: [
    { name: "Merchant sozlamalari", text: "Click service_id, merchant_id va kalitni sozlang." },
    { name: "Invoice yaratish", text: "Buyurtma summasi bilan to‘lov yarating va havola bering." },
    { name: "Mijoz to‘lovi", text: "Mijoz Click yoki karta orqali so‘mda to‘laydi." },
    { name: "Callback tasdig‘i", text: "Imzoni tekshirib to‘lov holatini qabul qiling." },
    { name: "Avtomatik yetkazish", text: "Tasdiqdan so‘ng mahsulotni API orqali yetkazing." },
  ],
  locales: {
    uz: {
      title: "Click API rasmiy integratsiyasi qanday ishlaydi?",
      excerpt:
        "Click API rasmiy integratsiyasi: invoice yaratish, callback va imzo tekshiruvi, so‘mda avtomatik to‘lov va Stars/Premium/Gifts yetkazish. To‘liq oqim va 19 savol-javob.",
      metaTitle: "Click API rasmiy integratsiyasi qanday ishlaydi 2026",
      metaDescription:
        "Click API rasmiy integratsiyasi: invoice, callback, imzo tekshiruvi va avtomatik yetkazish. StarsPaymee Business orqali so‘mda to‘lov qabul qilish — 19 savol-javob.",
      answerTitle: "Qisqa javob",
      Answer: UzAnswer,
      Body: UzBody,
      ctaHeading: "Click integratsiyasini ulang",
      ctaBody: "StarsPaymee Business orqali Click bilan so‘mda avtomatik to‘lov qabul qiling.",
      faq: uzFaq,
    },
    ru: {
      title: "Как работает официальная интеграция Click API?",
      excerpt:
        "Официальная интеграция Click API: создание инвойса, callback и проверка подписи, автоприём оплаты в сумах и доставка Stars/Premium/Gifts. Полный поток и 19 вопросов‑ответов.",
      metaTitle: "Как работает официальная интеграция Click API 2026",
      metaDescription:
        "Официальная интеграция Click API: инвойс, callback, проверка подписи и автодоставка. Приём оплаты в сумах через StarsPaymee Business — 19 вопросов‑ответов.",
      answerTitle: "Краткий ответ",
      Answer: RuAnswer,
      Body: RuBody,
      ctaHeading: "Подключите интеграцию Click",
      ctaBody: "Через StarsPaymee Business принимайте оплату в сумах автоматически с Click.",
      faq: ruFaq,
    },
    en: {
      title: "How does the official Click API integration work?",
      excerpt:
        "The official Click API integration: creating an invoice, callback and signature verification, auto‑accepting payments in so‘m and delivering Stars/Premium/Gifts. Full flow and 19 Q&A.",
      metaTitle: "How the official Click API integration works 2026",
      metaDescription:
        "Official Click API integration: invoice, callback, signature verification and auto‑delivery. Accept payments in so‘m via StarsPaymee Business — 19 Q&A.",
      answerTitle: "Short answer",
      Answer: EnAnswer,
      Body: EnBody,
      ctaHeading: "Connect the Click integration",
      ctaBody: "Through StarsPaymee Business, accept payments in so‘m automatically with Click.",
      faq: enFaq,
    },
  },
};
