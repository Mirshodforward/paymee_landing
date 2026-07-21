import { Link } from "@/i18n/navigation";
import { InlineCta, Sources, KeyFacts, Steps, Step, InfoGrid, InfoCard } from "@/components/blog/aeo-blocks";
import type { AeoPost } from "@/lib/blog-aeo/types";

const SLUG = "sbp-api-rossiya-rubl-tolov";

/* ---------------- UZ ---------------- */
function UzAnswer() {
  return (
    <p>
      SBP (СБП — Система быстрых платежей) API orqali siz Rossiyadan rublda to‘lov qabul qilasiz: mijoz QR-kod yoki
      telefon raqami orqali bir necha soniyada to‘laydi, tizim to‘lovni avtomatik tasdiqlaydi. StarsPaymee Business
      SBP integratsiyasini Stars, Premium va Gifts sotuviga bog‘laydi — rubl to‘lovi kelishi bilan mahsulot avtomatik
      yetkaziladi.
    </p>
  );
}

function UzBody() {
  return (
    <>
      <h2 id="nima">SBP API nima?</h2>
      <p>
        SBP (Faster Payments System) — Rossiya banklararo tezkor to‘lov tizimi. SBP API sizning tizimingizga rublda
        to‘lov (QR yoki rekvizit orqali) yaratish, mijozni to‘lovga yo‘naltirish va tasdiqni avtomatik olish imkonini
        beradi. StarsPaymee Business’da bu integratsiya <Link href="/stars">Stars</Link>,{" "}
        <Link href="/premium">Premium</Link> va <Link href="/gifts">Gifts</Link> yetkazish oqimiga ulanadi.
      </p>

      <KeyFacts label="SBP integratsiyasi asoslari">
        <li>To‘lov rublda (RUB), Rossiya banklari orqali.</li>
        <li>QR-kod yoki telefon raqami orqali tezkor to‘lov.</li>
        <li>Webhook orqali to‘lov tasdig‘i keladi.</li>
        <li>Tasdiqdan so‘ng mahsulot avtomatik yetkaziladi.</li>
        <li>Har bir to‘lov ID bilan kuzatiladi.</li>
      </KeyFacts>

      <h2 id="oqim">Rublda to‘lov qanday qabul qilinadi?</h2>
      <Steps>
        <Step title="1. To‘lov yaratish">
          Buyurtma uchun rubl summasi bilan SBP to‘lovi (QR yoki rekvizit) yaratiladi.
        </Step>
        <Step title="2. Mijoz to‘lovi">
          Mijoz o‘z bank ilovasida QR-ni skanerlab yoki raqam orqali bir necha soniyada to‘laydi.
        </Step>
        <Step title="3. Avtomatik tasdiqlash">
          To‘lov holati webhook orqali qaytadi va tekshiriladi.
        </Step>
        <Step title="4. Yetkazib berish">
          Tasdiqdan so‘ng Stars/Premium/Gift API orqali avtomatik yetkaziladi.
        </Step>
      </Steps>

      <InlineCta text="Rublda to‘lov qabul qilmoqchimisiz? Business bilan bog‘laning." />

      <h2 id="afzallik">SBP’ning afzalliklari</h2>
      <InfoGrid>
        <InfoCard emoji="⚡" title="Tezkor">
          To‘lov bir necha soniyada o‘tadi — kutish yo‘q, mijoz tajribasi tez.
        </InfoCard>
        <InfoCard emoji="📱" title="QR va raqam">
          Karta raqamini kiritish shart emas — QR yoki telefon raqami yetarli.
        </InfoCard>
        <InfoCard emoji="🏦" title="Ko‘p bank">
          SBP’ga ulangan Rossiya banklari keng qamrovda qo‘llab-quvvatlanadi.
        </InfoCard>
        <InfoCard emoji="🤖" title="Avtomatik">
          To‘lov kelishi bilan yetkazib berish avtomatik ishga tushadi.
        </InfoCard>
      </InfoGrid>

      <p>
        Batafsil:{" "}
        <Link href="/blog/sbp-tolov-tizimi-qanday-ishlaydi">SBP to‘lov tizimi qanday ishlaydi</Link> va{" "}
        <Link href="/blog/sbp-api-faq-savollar">SBP API FAQ</Link>. O‘zbekiston uchun{" "}
        <Link href="/blog/click-api-rasmiy-integratsiya">Click API</Link>ni ko‘ring.
      </p>

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
      Через SBP (Система быстрых платежей) API вы принимаете оплату из России в рублях: клиент платит по QR‑коду или
      номеру телефона за несколько секунд, система автоматически подтверждает оплату. StarsPaymee Business связывает
      интеграцию SBP с продажей Stars, Premium и Gifts — как только приходит оплата в рублях, товар доставляется
      автоматически.
    </p>
  );
}

function RuBody() {
  return (
    <>
      <h2 id="nima">Что такое SBP API?</h2>
      <p>
        СБП (Система быстрых платежей) — межбанковская система мгновенных платежей в России. SBP API позволяет вашей
        системе создавать оплату в рублях (по QR или реквизитам), направлять клиента к оплате и автоматически получать
        подтверждение. В StarsPaymee Business эта интеграция подключена к доставке{" "}
        <Link href="/stars">Stars</Link>, <Link href="/premium">Premium</Link> и <Link href="/gifts">Gifts</Link>.
      </p>

      <KeyFacts label="Основы интеграции СБП">
        <li>Оплата в рублях (RUB), через банки России.</li>
        <li>Мгновенная оплата по QR‑коду или номеру телефона.</li>
        <li>Подтверждение оплаты приходит через webhook.</li>
        <li>После подтверждения товар доставляется автоматически.</li>
        <li>Каждая оплата отслеживается по ID.</li>
      </KeyFacts>

      <h2 id="oqim">Как принимается оплата в рублях?</h2>
      <Steps>
        <Step title="1. Создание оплаты">
          Для заказа создаётся оплата СБП (QR или реквизиты) с суммой в рублях.
        </Step>
        <Step title="2. Оплата клиента">
          Клиент сканирует QR в банковском приложении или платит по номеру за несколько секунд.
        </Step>
        <Step title="3. Автоподтверждение">
          Статус оплаты возвращается через webhook и проверяется.
        </Step>
        <Step title="4. Доставка">
          После подтверждения Stars/Premium/Gift доставляется автоматически через API.
        </Step>
      </Steps>

      <InlineCta text="Хотите принимать оплату в рублях? Свяжитесь с Business." />

      <h2 id="afzallik">Преимущества СБП</h2>
      <InfoGrid>
        <InfoCard emoji="⚡" title="Мгновенно">
          Оплата проходит за секунды — без ожидания, быстрый клиентский опыт.
        </InfoCard>
        <InfoCard emoji="📱" title="QR и номер">
          Не нужно вводить номер карты — достаточно QR или номера телефона.
        </InfoCard>
        <InfoCard emoji="🏦" title="Много банков">
          Широко поддерживаются банки России, подключённые к СБП.
        </InfoCard>
        <InfoCard emoji="🤖" title="Автоматически">
          Как только приходит оплата, доставка запускается автоматически.
        </InfoCard>
      </InfoGrid>

      <p>
        Подробнее:{" "}
        <Link href="/blog/sbp-tolov-tizimi-qanday-ishlaydi">как работает система СБП</Link> и{" "}
        <Link href="/blog/sbp-api-faq-savollar">FAQ SBP API</Link>. Для Узбекистана смотрите{" "}
        <Link href="/blog/click-api-rasmiy-integratsiya">Click API</Link>.
      </p>

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
      With the SBP (Faster Payments System / СБП) API you accept payments from Russia in rubles: the customer pays via
      a QR code or phone number in a few seconds, and the system confirms the payment automatically. StarsPaymee
      Business wires the SBP integration to Stars, Premium and Gifts selling — as soon as a ruble payment arrives, the
      product is delivered automatically.
    </p>
  );
}

function EnBody() {
  return (
    <>
      <h2 id="nima">What is the SBP API?</h2>
      <p>
        SBP (Faster Payments System, Russian «СБП») is Russia's interbank instant payment system. The SBP API lets
        your system create a payment in rubles (via QR or requisites), direct the customer to pay and receive
        confirmation automatically. In StarsPaymee Business this integration is connected to{" "}
        <Link href="/stars">Stars</Link>, <Link href="/premium">Premium</Link> and{" "}
        <Link href="/gifts">Gifts</Link> delivery.
      </p>

      <KeyFacts label="SBP integration basics">
        <li>Payment in rubles (RUB), via Russian banks.</li>
        <li>Instant payment via QR code or phone number.</li>
        <li>Payment confirmation arrives via webhook.</li>
        <li>After confirmation the product is delivered automatically.</li>
        <li>Every payment is tracked by ID.</li>
      </KeyFacts>

      <h2 id="oqim">How are ruble payments accepted?</h2>
      <Steps>
        <Step title="1. Create the payment">
          An SBP payment (QR or requisites) is created for the order with the amount in rubles.
        </Step>
        <Step title="2. Customer payment">
          The customer scans the QR in their bank app or pays by number in a few seconds.
        </Step>
        <Step title="3. Auto‑confirmation">
          The payment status returns via webhook and is verified.
        </Step>
        <Step title="4. Delivery">
          After confirmation, Stars/Premium/Gift is delivered automatically via the API.
        </Step>
      </Steps>

      <InlineCta text="Want to accept payments in rubles? Contact Business." />

      <h2 id="afzallik">Advantages of SBP</h2>
      <InfoGrid>
        <InfoCard emoji="⚡" title="Instant">
          Payment goes through in seconds — no waiting, a fast customer experience.
        </InfoCard>
        <InfoCard emoji="📱" title="QR and number">
          No need to enter a card number — a QR or phone number is enough.
        </InfoCard>
        <InfoCard emoji="🏦" title="Many banks">
          Russian banks connected to SBP are widely supported.
        </InfoCard>
        <InfoCard emoji="🤖" title="Automatic">
          As soon as payment arrives, delivery is triggered automatically.
        </InfoCard>
      </InfoGrid>

      <p>
        See also:{" "}
        <Link href="/blog/sbp-tolov-tizimi-qanday-ishlaydi">how the SBP system works</Link> and{" "}
        <Link href="/blog/sbp-api-faq-savollar">SBP API FAQ</Link>. For Uzbekistan, see{" "}
        <Link href="/blog/click-api-rasmiy-integratsiya">Click API</Link>.
      </p>

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
  { question: "SBP API nima?", answer: "SBP (Система быстрых платежей) — Rossiya tezkor to‘lov tizimi. SBP API orqali rublda QR yoki raqam orqali avtomatik to‘lov qabul qilinadi." },
  { question: "Rublda to‘lovni qanday qabul qilaman?", answer: "SBP to‘lovi (QR/rekvizit) yaratiladi, mijoz to‘laydi, webhook tasdig‘idan so‘ng mahsulot avtomatik yetkaziladi." },
  { question: "QR orqali to‘lov ishlaydimi?", answer: "Ha. Mijoz bank ilovasida QR-ni skanerlab bir necha soniyada to‘laydi." },
  { question: "Telefon raqami orqali to‘lasa bo‘ladimi?", answer: "Ha. SBP raqam orqali o‘tkazmani ham qo‘llab-quvvatlaydi." },
  { question: "Webhook bormi?", answer: "Ha. To‘lov holati sizning serveringizga webhook orqali qaytariladi." },
  { question: "To‘lovdan keyin mahsulot avtomatik ketadimi?", answer: "Ha. Tasdiqdan so‘ng Stars/Premium/Gift avtomatik yetkaziladi." },
  { question: "Qaysi banklar qo‘llab-quvvatlanadi?", answer: "SBP’ga ulangan Rossiya banklari keng qamrovda; aniq ro‘yxat integratsiyaga bog‘liq." },
  { question: "Komissiya qancha?", answer: "Shartlar hajm va integratsiyaga bog‘liq; aniq foizni Business bilan aniqlashtirasiz." },
  { question: "To‘lov qancha vaqtda tasdiqlanadi?", answer: "Odatda bir necha soniyada — SBP tezkor tizim." },
  { question: "Sandbox mavjudmi?", answer: "Ha. Jonli pulsiz test muhitida oqim tekshiriladi." },
  { question: "JSON formatidami?", answer: "Ha. So‘rov va webhook JSON ko‘rinishida ishlanadi." },
  { question: "Xavfsizlik qanday?", answer: "HTTPS, webhook imzosi/tekshiruvi va idempotency bilan himoyalanadi." },
  { question: "Refund bormi?", answer: "Yetkazilmagan buyurtma hisob-kitob siyosatiga ko‘ra qaytariladi." },
  { question: "SBP va oddiy rubl o‘tkazma farqi?", answer: "SBP tezkor va QR/raqam orqali; oddiy o‘tkazma sekinroq va rekvizit talab qiladi." },
  { question: "Rate limit bormi?", answer: "Oqilona limitlar bor; hajmga qarab oshiriladi." },
  { question: "Stars/Premium sotuviga bog‘lanadimi?", answer: "Ha. Rubl to‘lovi Stars/Premium/Gifts yetkazishga ulanadi." },
  { question: "API kaliti qanday himoyalanadi?", answer: "Kalit server tomonida saqlanadi; har so‘rov token bilan autentifikatsiya qilinadi." },
  { question: "Hujjat beriladimi?", answer: "Ha. Endpoint, webhook formati va misollar bilan hujjat beriladi." },
  { question: "Support bormi?", answer: "Ha, @StarsPaymeeSupport orqali integratsiya yordami." },
  { question: "Qanday boshlayman?", answer: "StarsPaymee Business sahifasidan ariza qoldiring; SBP va yetkazishni ulaymiz." },
];

const ruFaq = [
  { question: "Что такое SBP API?", answer: "СБП (Система быстрых платежей) — российская система мгновенных платежей. Через SBP API оплата в рублях по QR или номеру принимается автоматически." },
  { question: "Как принимать оплату в рублях?", answer: "Создаётся оплата СБП (QR/реквизиты), клиент платит, после подтверждения по webhook товар доставляется автоматически." },
  { question: "Работает ли оплата по QR?", answer: "Да. Клиент сканирует QR в банковском приложении и платит за секунды." },
  { question: "Можно ли платить по номеру телефона?", answer: "Да. СБП поддерживает перевод по номеру телефона." },
  { question: "Есть ли webhook?", answer: "Да. Статус оплаты возвращается на ваш сервер через webhook." },
  { question: "Товар уходит автоматически после оплаты?", answer: "Да. После подтверждения Stars/Premium/Gift доставляется автоматически." },
  { question: "Какие банки поддерживаются?", answer: "Широко — банки России, подключённые к СБП; точный список зависит от интеграции." },
  { question: "Какая комиссия?", answer: "Условия зависят от объёма и интеграции; точный процент уточняется с Business." },
  { question: "За сколько подтверждается оплата?", answer: "Обычно за несколько секунд — СБП мгновенная система." },
  { question: "Есть ли Sandbox?", answer: "Да. Поток проверяется в тестовой среде без реальных денег." },
  { question: "В формате JSON?", answer: "Да. Запрос и webhook обрабатываются в виде JSON." },
  { question: "Как с безопасностью?", answer: "Защита через HTTPS, подпись/проверку webhook и идемпотентность." },
  { question: "Есть ли возврат?", answer: "Недоставленный заказ возвращается по политике расчётов." },
  { question: "Отличие СБП от обычного перевода в рублях?", answer: "СБП мгновенная и по QR/номеру; обычный перевод медленнее и требует реквизитов." },
  { question: "Есть ли rate limit?", answer: "Есть разумные лимиты; повышаются по объёму." },
  { question: "Связывается ли с продажей Stars/Premium?", answer: "Да. Оплата в рублях подключается к доставке Stars/Premium/Gifts." },
  { question: "Как защищается API‑ключ?", answer: "Ключ хранится на сервере; каждый запрос аутентифицируется токеном." },
  { question: "Дают ли документацию?", answer: "Да. Документация с эндпоинтами, форматом webhook и примерами." },
  { question: "Есть ли поддержка?", answer: "Да, через @StarsPaymeeSupport — помощь по интеграции." },
  { question: "Как начать?", answer: "Оставьте заявку на странице StarsPaymee Business; подключим СБП и доставку." },
];

const enFaq = [
  { question: "What is the SBP API?", answer: "SBP (Faster Payments System) is Russia's instant payment system. Through the SBP API, payments in rubles via QR or number are accepted automatically." },
  { question: "How do I accept payments in rubles?", answer: "An SBP payment (QR/requisites) is created, the customer pays, and after webhook confirmation the product is delivered automatically." },
  { question: "Does QR payment work?", answer: "Yes. The customer scans the QR in their bank app and pays in seconds." },
  { question: "Can I pay by phone number?", answer: "Yes. SBP supports transfers by phone number." },
  { question: "Is there a webhook?", answer: "Yes. The payment status returns to your server via webhook." },
  { question: "Does the product ship automatically after payment?", answer: "Yes. After confirmation Stars/Premium/Gift is delivered automatically." },
  { question: "Which banks are supported?", answer: "Widely — Russian banks connected to SBP; the exact list depends on the integration." },
  { question: "What is the fee?", answer: "Terms depend on volume and integration; the exact percentage is confirmed with Business." },
  { question: "How fast is payment confirmed?", answer: "Usually within a few seconds — SBP is an instant system." },
  { question: "Is there a Sandbox?", answer: "Yes. The flow is tested in a sandbox with no real money." },
  { question: "Is it in JSON?", answer: "Yes. Requests and webhooks are handled as JSON." },
  { question: "What about security?", answer: "Protected via HTTPS, webhook signing/verification and idempotency." },
  { question: "Is there a refund?", answer: "An undelivered order is refunded per the settlement policy." },
  { question: "How is SBP different from a regular ruble transfer?", answer: "SBP is instant and via QR/number; a regular transfer is slower and requires requisites." },
  { question: "Is there a rate limit?", answer: "There are reasonable limits; raised by volume." },
  { question: "Does it link to Stars/Premium selling?", answer: "Yes. Ruble payment connects to Stars/Premium/Gifts delivery." },
  { question: "How is the API key protected?", answer: "The key is stored server‑side; each request is authenticated with a token." },
  { question: "Is documentation provided?", answer: "Yes. Docs with endpoints, the webhook format and examples." },
  { question: "Is there support?", answer: "Yes, via @StarsPaymeeSupport — integration help." },
  { question: "How do I start?", answer: "Submit a request on the StarsPaymee Business page; we connect SBP and delivery." },
];

export const post: AeoPost = {
  slug: SLUG,
  category: "Biznes",
  type: "howto",
  datePublished: "2026-07-16",
  dateModified: "2026-07-16",
  keywords: [
    "sbp api",
    "sbp payment api",
    "система быстрых платежей api",
    "russian sbp payment",
    "sbp integration",
    "rub payment api",
  ],
  howToSteps: [
    { name: "To‘lov yaratish", text: "Rubl summasi bilan SBP to‘lovi (QR yoki rekvizit) yarating." },
    { name: "Mijoz to‘lovi", text: "Mijoz QR yoki raqam orqali bir necha soniyada to‘laydi." },
    { name: "Avtomatik tasdiqlash", text: "Webhook orqali to‘lov holatini qabul qiling va tekshiring." },
    { name: "Yetkazib berish", text: "Tasdiqdan so‘ng mahsulotni API orqali yetkazing." },
  ],
  locales: {
    uz: {
      title: "SBP (СБП) API orqali Rossiyadan rubl to‘lovlarini qabul qilish",
      excerpt:
        "SBP API bilan Rossiyadan rublda QR yoki telefon raqami orqali tezkor to‘lov qabul qiling: to‘lov → webhook tasdig‘i → Stars/Premium/Gifts avtomatik yetkazish. To‘liq oqim va 20 savol-javob.",
      metaTitle: "SBP (СБП) API: Rossiyadan rubl to‘lovini qabul qilish",
      metaDescription:
        "SBP API orqali rublda to‘lov qabul qilish: QR/raqam, webhook, avtomatik tasdiqlash va yetkazish. StarsPaymee Business integratsiyasi — 20 savol-javob.",
      answerTitle: "Qisqa javob",
      Answer: UzAnswer,
      Body: UzBody,
      ctaHeading: "Rublda to‘lov qabul qiling",
      ctaBody: "StarsPaymee Business orqali SBP bilan rubl to‘lovini avtomatik qabul qiling.",
      faq: uzFaq,
    },
    ru: {
      title: "Приём рублёвых платежей из России через SBP (СБП) API",
      excerpt:
        "С SBP API принимайте мгновенную оплату из России в рублях по QR или номеру: оплата → подтверждение webhook → автодоставка Stars/Premium/Gifts. Полный поток и 20 вопросов‑ответов.",
      metaTitle: "SBP (СБП) API: приём рублёвых платежей из России",
      metaDescription:
        "Приём оплаты в рублях через SBP API: QR/номер, webhook, автоподтверждение и доставка. Интеграция StarsPaymee Business — 20 вопросов‑ответов.",
      answerTitle: "Краткий ответ",
      Answer: RuAnswer,
      Body: RuBody,
      ctaHeading: "Принимайте оплату в рублях",
      ctaBody: "Через StarsPaymee Business принимайте оплату в рублях автоматически с СБП.",
      faq: ruFaq,
    },
    en: {
      title: "Accepting ruble payments from Russia via the SBP (СБП) API",
      excerpt:
        "With the SBP API accept instant payments from Russia in rubles via QR or number: payment → webhook confirmation → auto‑delivery of Stars/Premium/Gifts. Full flow and 20 Q&A.",
      metaTitle: "SBP (СБП) API: accept ruble payments from Russia",
      metaDescription:
        "Accepting payments in rubles via the SBP API: QR/number, webhook, auto‑confirmation and delivery. StarsPaymee Business integration — 20 Q&A.",
      answerTitle: "Short answer",
      Answer: EnAnswer,
      Body: EnBody,
      ctaHeading: "Accept payments in rubles",
      ctaBody: "Through StarsPaymee Business, accept ruble payments automatically with SBP.",
      faq: enFaq,
    },
  },
};
