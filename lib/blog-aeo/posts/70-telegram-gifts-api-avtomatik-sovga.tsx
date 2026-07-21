import { Link } from "@/i18n/navigation";
import { InlineCta, Sources, KeyFacts, Steps, Step } from "@/components/blog/aeo-blocks";
import type { AeoPost } from "@/lib/blog-aeo/types";

const SLUG = "telegram-gifts-api-avtomatik-sovga";

/* ---------------- UZ ---------------- */
function UzAnswer() {
  return (
    <p>
      Telegram Gifts API — Telegram sovg‘alarini (gifts) o‘z bot yoki saytingizda avtomatik sotish imkonini beruvchi
      interfeys. Mijoz sovg‘ani tanlaydi va to‘laydi, tizim API orqali buyurtma yuboradi va sovg‘a @username’ga
      avtomatik yetkaziladi. StarsPaymee Business Gifts API’ni Stars va Premium bilan bitta kalit ostida beradi.
    </p>
  );
}

function UzBody() {
  return (
    <>
      <h2 id="nima">Gifts API nima?</h2>
      <p>
        <Link href="/gifts">Telegram Gifts</Link> — foydalanuvchilar bir-biriga yuboradigan raqamli sovg‘alar. Gifts
        API bu sovg‘alarni katalogdan tanlab, buyurtma yaratib, avtomatik yetkazib berishga imkon beradi. Bu reseller
        va do‘konlar uchun sovg‘a savdosini to‘liq avtomatlashtiradi.
      </p>

      <KeyFacts label="Gifts API imkoniyatlari">
        <li>Katalog — mavjud sovg‘alar va ularning narxi (yulduzda).</li>
        <li>Buyurtma — sovg‘a va qabul qiluvchi @username bilan.</li>
        <li>Anonim yuborish va izoh opsiyalari.</li>
        <li>Webhook — yetkazilganda status qaytadi.</li>
        <li>To‘lov — Click, Payme, karta yoki SBP orqali.</li>
      </KeyFacts>

      <h2 id="oqim">Avtomatik sovg‘a qanday yuboriladi?</h2>
      <Steps>
        <Step title="1. Katalogni oling">
          <code>GET /gifts</code> orqali mavjud sovg‘alar va narxlarni olasiz.
        </Step>
        <Step title="2. Buyurtma yarating">
          <code>POST /orders</code> bilan gift_id va qabul qiluvchi <code>@username</code>ni yuborasiz.
        </Step>
        <Step title="3. To‘lovni oling">
          Mijozdan to‘lovni o‘z kanalingizda qabul qilasiz.
        </Step>
        <Step title="4. Yetkazish va status">
          Sovg‘a avtomatik yuboriladi, webhook orqali «delivered» keladi.
        </Step>
      </Steps>

      <InlineCta text="Gifts sotuvini avtomatlashtirmoqchimisiz? Business bilan bog‘laning." />

      <h2 id="bogliq">Bog‘liq mavzular</h2>
      <p>
        Sovg‘a bilan birga Stars va Premium ham soting:{" "}
        <Link href="/blog/telegram-stars-api-nima-ulanish">Stars API</Link>,{" "}
        <Link href="/blog/telegram-premium-api-avtomatik-sotuv">Premium API</Link>. To‘lov uchun{" "}
        <Link href="/blog/click-api-rasmiy-integratsiya">Click API</Link> va{" "}
        <Link href="/blog/sbp-api-rossiya-rubl-tolov">SBP API</Link>. Umumiy —{" "}
        <Link href="/business">Business</Link>.
      </p>

      <Sources
        label="Manbalar"
        items={[
          { href: "https://core.telegram.org/api/gifts", label: "core.telegram.org/api/gifts", note: "Gifts texnik hujjati" },
          { href: "https://telegram.org/blog/gifts", label: "telegram.org/blog/gifts", note: "Gifts e’loni" },
        ]}
      />
    </>
  );
}

/* ---------------- RU ---------------- */
function RuAnswer() {
  return (
    <p>
      Telegram Gifts API — интерфейс для автоматической продажи подарков Telegram в вашем боте или на сайте. Клиент
      выбирает подарок и платит, система через API отправляет заказ, и подарок автоматически доставляется на
      @username. StarsPaymee Business даёт Gifts API вместе со Stars и Premium под одним ключом.
    </p>
  );
}

function RuBody() {
  return (
    <>
      <h2 id="nima">Что такое Gifts API?</h2>
      <p>
        <Link href="/gifts">Telegram Gifts</Link> — цифровые подарки, которые пользователи отправляют друг другу.
        Gifts API позволяет выбирать подарки из каталога, создавать заказ и автоматически доставлять. Это полностью
        автоматизирует продажу подарков для реселлеров и магазинов.
      </p>

      <KeyFacts label="Возможности Gifts API">
        <li>Каталог — доступные подарки и их цена (в звёздах).</li>
        <li>Заказ — подарок и получатель @username.</li>
        <li>Опции анонимной отправки и комментария.</li>
        <li>Webhook — статус возвращается при доставке.</li>
        <li>Оплата — через Click, Payme, карту или SBP.</li>
      </KeyFacts>

      <h2 id="oqim">Как отправляется подарок автоматически?</h2>
      <Steps>
        <Step title="1. Получите каталог">
          Через <code>GET /gifts</code> вы получаете доступные подарки и цены.
        </Step>
        <Step title="2. Создайте заказ">
          Через <code>POST /orders</code> передаёте gift_id и получателя <code>@username</code>.
        </Step>
        <Step title="3. Примите оплату">
          Принимаете оплату от клиента в своём канале.
        </Step>
        <Step title="4. Доставка и статус">
          Подарок отправляется автоматически, через webhook приходит «delivered».
        </Step>
      </Steps>

      <InlineCta text="Хотите автоматизировать продажу Gifts? Свяжитесь с Business." />

      <h2 id="bogliq">Связанные темы</h2>
      <p>
        Продавайте вместе с подарками Stars и Premium:{" "}
        <Link href="/blog/telegram-stars-api-nima-ulanish">Stars API</Link>,{" "}
        <Link href="/blog/telegram-premium-api-avtomatik-sotuv">Premium API</Link>. Для оплаты —{" "}
        <Link href="/blog/click-api-rasmiy-integratsiya">Click API</Link> и{" "}
        <Link href="/blog/sbp-api-rossiya-rubl-tolov">SBP API</Link>. Общее —{" "}
        <Link href="/business">Business</Link>.
      </p>

      <Sources
        label="Источники"
        items={[
          { href: "https://core.telegram.org/api/gifts", label: "core.telegram.org/api/gifts", note: "техдокументация Gifts" },
          { href: "https://telegram.org/blog/gifts", label: "telegram.org/blog/gifts", note: "анонс Gifts" },
        ]}
      />
    </>
  );
}

/* ---------------- EN ---------------- */
function EnAnswer() {
  return (
    <p>
      The Telegram Gifts API is an interface for automatically selling Telegram gifts in your bot or website. The
      customer picks a gift and pays, your system sends the order via the API, and the gift is delivered
      automatically to the @username. StarsPaymee Business provides the Gifts API together with Stars and Premium
      under one key.
    </p>
  );
}

function EnBody() {
  return (
    <>
      <h2 id="nima">What is the Gifts API?</h2>
      <p>
        <Link href="/gifts">Telegram Gifts</Link> are digital gifts users send to each other. The Gifts API lets you
        pick gifts from a catalog, create an order and deliver automatically. This fully automates gift selling for
        resellers and shops.
      </p>

      <KeyFacts label="Gifts API capabilities">
        <li>Catalog — available gifts and their price (in stars).</li>
        <li>Order — the gift and recipient @username.</li>
        <li>Anonymous sending and comment options.</li>
        <li>Webhook — status returns on delivery.</li>
        <li>Payment — via Click, Payme, card or SBP.</li>
      </KeyFacts>

      <h2 id="oqim">How is a gift sent automatically?</h2>
      <Steps>
        <Step title="1. Fetch the catalog">
          Via <code>GET /gifts</code> you fetch available gifts and prices.
        </Step>
        <Step title="2. Create an order">
          Via <code>POST /orders</code> you pass gift_id and the recipient <code>@username</code>.
        </Step>
        <Step title="3. Collect payment">
          You collect payment from the customer in your own channel.
        </Step>
        <Step title="4. Delivery and status">
          The gift is sent automatically, and «delivered» arrives via webhook.
        </Step>
      </Steps>

      <InlineCta text="Want to automate gift selling? Contact Business." />

      <h2 id="bogliq">Related topics</h2>
      <p>
        Sell Stars and Premium alongside gifts:{" "}
        <Link href="/blog/telegram-stars-api-nima-ulanish">Stars API</Link>,{" "}
        <Link href="/blog/telegram-premium-api-avtomatik-sotuv">Premium API</Link>. For payment —{" "}
        <Link href="/blog/click-api-rasmiy-integratsiya">Click API</Link> and{" "}
        <Link href="/blog/sbp-api-rossiya-rubl-tolov">SBP API</Link>. General —{" "}
        <Link href="/business">Business</Link>.
      </p>

      <Sources
        label="Sources"
        items={[
          { href: "https://core.telegram.org/api/gifts", label: "core.telegram.org/api/gifts", note: "Gifts technical docs" },
          { href: "https://telegram.org/blog/gifts", label: "telegram.org/blog/gifts", note: "Gifts announcement" },
        ]}
      />
    </>
  );
}

const uzFaq = [
  { question: "Telegram Gifts API nima?", answer: "Telegram sovg‘alarini bot yoki saytda avtomatik sotish uchun API. StarsPaymee Business orqali Stars/Premium bilan birga ulanadi." },
  { question: "Sovg‘a qanday yetkaziladi?", answer: "Buyurtmada gift_id va @username ko‘rsatiladi; to‘lovdan so‘ng sovg‘a avtomatik yuboriladi." },
  { question: "Katalog qanday olinadi?", answer: "GET /gifts orqali mavjud sovg‘alar va yulduz narxi olinadi." },
  { question: "Anonim yuborsa bo‘ladimi?", answer: "Ha. Buyurtmada anonimlikni tanlash mumkin." },
  { question: "Izoh qo‘shsa bo‘ladimi?", answer: "Ha. Sovg‘aga izoh (message) qo‘shish opsiyasi bor." },
  { question: "Webhook bormi?", answer: "Ha. Sovg‘a yetkazilganda status serveringizga keladi." },
  { question: "To‘lov qanday?", answer: "Click, Payme, karta yoki SBP orqali; siz o‘z kanalingizda qabul qilasiz." },
  { question: "Narx real vaqtdami?", answer: "Ha. Katalog joriy yulduz narxini ko‘rsatadi." },
  { question: "Reseller narxi bormi?", answer: "Ha. O‘z ustamangiz bilan sotasiz." },
  { question: "Sandbox bormi?", answer: "Ha. Test muhitida oqim tekshiriladi." },
  { question: "JSON formatidami?", answer: "Ha. REST API JSON ko‘rinishida." },
  { question: "Bir nechta sovg‘a birdan yuborsa bo‘ladimi?", answer: "Ha. Ko‘p buyurtmani ketma-ket yuborasiz." },
  { question: "Refund bormi?", answer: "Yetkazilmagan buyurtma hisob-kitob siyosatiga ko‘ra qaytariladi." },
  { question: "Kolleksion sovg‘alar bormi?", answer: "Katalogga bog‘liq; mavjud sovg‘alar ro‘yxati API orqali ko‘rinadi." },
  { question: "Stars va Premium bilan birga sotsam bo‘ladimi?", answer: "Ha. Bitta API orqali barcha mahsulot." },
  { question: "Xavfsizlik qanday?", answer: "API kaliti server tomonida; token bilan autentifikatsiya." },
  { question: "Hujjat beriladimi?", answer: "Ha. Endpoint va misollar bilan." },
  { question: "Support bormi?", answer: "Ha, @StarsPaymeeSupport." },
  { question: "Qanday boshlayman?", answer: "StarsPaymee Business sahifasidan ariza qoldiring." },
];

const ruFaq = [
  { question: "Что такое Telegram Gifts API?", answer: "API для автопродажи подарков Telegram в боте или на сайте. Через StarsPaymee Business подключается вместе со Stars/Premium." },
  { question: "Как доставляется подарок?", answer: "В заказе указываются gift_id и @username; после оплаты подарок отправляется автоматически." },
  { question: "Как получить каталог?", answer: "Через GET /gifts получаете доступные подарки и цену в звёздах." },
  { question: "Можно ли отправить анонимно?", answer: "Да. В заказе можно выбрать анонимность." },
  { question: "Можно ли добавить комментарий?", answer: "Да. Есть опция комментария к подарку." },
  { question: "Есть ли webhook?", answer: "Да. При доставке подарка статус приходит на ваш сервер." },
  { question: "Как оплата?", answer: "Через Click, Payme, карту или SBP; вы принимаете в своём канале." },
  { question: "Цена в реальном времени?", answer: "Да. Каталог показывает актуальную цену в звёздах." },
  { question: "Есть ли цена реселлера?", answer: "Да. Продаёте со своей наценкой." },
  { question: "Есть ли Sandbox?", answer: "Да. Поток проверяется в тестовой среде." },
  { question: "В формате JSON?", answer: "Да. REST API в виде JSON." },
  { question: "Можно ли отправить несколько подарков сразу?", answer: "Да. Отправляете много заказов подряд." },
  { question: "Есть ли возврат?", answer: "Недоставленный заказ возвращается по политике расчётов." },
  { question: "Есть ли коллекционные подарки?", answer: "Зависит от каталога; список доступных подарков виден через API." },
  { question: "Можно ли продавать вместе со Stars и Premium?", answer: "Да. Все товары через один API." },
  { question: "Как с безопасностью?", answer: "API‑ключ на сервере; аутентификация токеном." },
  { question: "Дают ли документацию?", answer: "Да. С эндпоинтами и примерами." },
  { question: "Есть ли поддержка?", answer: "Да, @StarsPaymeeSupport." },
  { question: "Как начать?", answer: "Оставьте заявку на странице StarsPaymee Business." },
];

const enFaq = [
  { question: "What is the Telegram Gifts API?", answer: "An API for auto‑selling Telegram gifts in a bot or website. Through StarsPaymee Business it connects together with Stars/Premium." },
  { question: "How is a gift delivered?", answer: "The order specifies gift_id and @username; after payment the gift is sent automatically." },
  { question: "How do I get the catalog?", answer: "Via GET /gifts you get available gifts and the price in stars." },
  { question: "Can I send anonymously?", answer: "Yes. You can choose anonymity in the order." },
  { question: "Can I add a comment?", answer: "Yes. There is a comment option for the gift." },
  { question: "Is there a webhook?", answer: "Yes. On gift delivery the status arrives at your server." },
  { question: "How is payment?", answer: "Via Click, Payme, card or SBP; you accept it in your own channel." },
  { question: "Is the price real‑time?", answer: "Yes. The catalog shows the current price in stars." },
  { question: "Is there a reseller price?", answer: "Yes. You sell with your own markup." },
  { question: "Is there a Sandbox?", answer: "Yes. The flow is tested in a test environment." },
  { question: "Is it in JSON?", answer: "Yes. The REST API is in JSON." },
  { question: "Can I send several gifts at once?", answer: "Yes. You send many orders in sequence." },
  { question: "Is there a refund?", answer: "An undelivered order is refunded per the settlement policy." },
  { question: "Are there collectible gifts?", answer: "It depends on the catalog; the list of available gifts is visible via the API." },
  { question: "Can I sell together with Stars and Premium?", answer: "Yes. All products through one API." },
  { question: "What about security?", answer: "The API key is server‑side; authentication by token." },
  { question: "Is documentation provided?", answer: "Yes. With endpoints and examples." },
  { question: "Is there support?", answer: "Yes, @StarsPaymeeSupport." },
  { question: "How do I start?", answer: "Submit a request on the StarsPaymee Business page." },
];

export const post: AeoPost = {
  slug: SLUG,
  category: "Biznes",
  type: "howto",
  datePublished: "2026-07-13",
  dateModified: "2026-07-13",
  keywords: [
    "telegram gifts api",
    "gifts api",
    "telegram sovg‘a api",
    "telegram gift api avtomatik",
    "gift api uzbekistan",
    "telegram gifts reseller api",
  ],
  howToSteps: [
    { name: "Katalogni oling", text: "GET /gifts orqali sovg‘alar va narxlarni oling." },
    { name: "Buyurtma yarating", text: "POST /orders bilan gift_id va username yuboring." },
    { name: "To‘lovni oling", text: "Mijozdan to‘lovni o‘z kanalingizda qabul qiling." },
    { name: "Yetkazish va status", text: "Sovg‘a avtomatik yuboriladi, webhook orqali status keladi." },
  ],
  locales: {
    uz: {
      title: "Telegram Gifts API orqali avtomatik sovg‘a sotish",
      excerpt:
        "Telegram Gifts API bilan sovg‘alarni bot yoki saytda avtomatik soting: katalog, buyurtma, anonim yuborish, webhook va so‘m/rubl to‘lovi. To‘liq oqim va 19 savol-javob.",
      metaTitle: "Telegram Gifts API — avtomatik sovg‘a sotish 2026",
      metaDescription:
        "Telegram Gifts API: katalog, buyurtma, anonim yuborish, webhook va to‘lov. StarsPaymee Business orqali sovg‘alarni avtomatik sotish — 19 savol-javob.",
      answerTitle: "Qisqa javob",
      Answer: UzAnswer,
      Body: UzBody,
      ctaHeading: "Gifts sotuvini avtomatlashtiring",
      ctaBody: "StarsPaymee Business orqali sovg‘alarni avtomatik soting — Stars va Premium bilan birga.",
      faq: uzFaq,
    },
    ru: {
      title: "Автопродажа подарков через Telegram Gifts API",
      excerpt:
        "С Telegram Gifts API продавайте подарки в боте или на сайте автоматически: каталог, заказ, анонимная отправка, webhook и оплата в сумах/рублях. Полный поток и 19 вопросов‑ответов.",
      metaTitle: "Telegram Gifts API — автопродажа подарков 2026",
      metaDescription:
        "Telegram Gifts API: каталог, заказ, анонимная отправка, webhook и оплата. Автопродажа подарков через StarsPaymee Business — 19 вопросов‑ответов.",
      answerTitle: "Краткий ответ",
      Answer: RuAnswer,
      Body: RuBody,
      ctaHeading: "Автоматизируйте продажу Gifts",
      ctaBody: "Через StarsPaymee Business продавайте подарки автоматически — вместе со Stars и Premium.",
      faq: ruFaq,
    },
    en: {
      title: "Auto‑selling gifts via the Telegram Gifts API",
      excerpt:
        "With the Telegram Gifts API sell gifts in a bot or site automatically: catalog, order, anonymous sending, webhook and payment in so‘m/rubles. Full flow and 19 Q&A.",
      metaTitle: "Telegram Gifts API — auto‑selling gifts 2026",
      metaDescription:
        "Telegram Gifts API: catalog, order, anonymous sending, webhook and payment. Auto‑selling gifts via StarsPaymee Business — 19 Q&A.",
      answerTitle: "Short answer",
      Answer: EnAnswer,
      Body: EnBody,
      ctaHeading: "Automate gift selling",
      ctaBody: "Through StarsPaymee Business, sell gifts automatically — together with Stars and Premium.",
      faq: enFaq,
    },
  },
};
