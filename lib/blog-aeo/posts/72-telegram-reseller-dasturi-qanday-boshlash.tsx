import { Link } from "@/i18n/navigation";
import { InlineCta, Sources, KeyFacts, Steps, Step, InfoGrid, InfoCard } from "@/components/blog/aeo-blocks";
import type { AeoPost } from "@/lib/blog-aeo/types";

const SLUG = "telegram-reseller-dasturi-qanday-boshlash";

/* ---------------- UZ ---------------- */
function UzAnswer() {
  return (
    <p>
      Telegram reseller — Stars, Premium va Gifts’ni ulgurji narxda olib, o‘z ustamangiz bilan qayta sotuvchi.
      StarsPaymee Business reseller dasturida siz API kaliti olasiz, o‘z narxingizni belgilaysiz va sotasiz —
      yetkazib berish, to‘lov (Click/SBP) va status avtomatik. Boshlash uchun ariza qoldirish yetarli.
    </p>
  );
}

function UzBody() {
  return (
    <>
      <h2 id="nima">Reseller modeli qanday ishlaydi?</h2>
      <p>
        Reseller (qayta sotuvchi) mahsulotni ishlab chiqarmaydi — u tayyor mahsulotni (Stars, Premium, Gifts) ulgurji
        narxda olib, o‘z mijozlariga sotadi. Farq — sizning ustamangiz. StarsPaymee API yetkazib berishni bajaradi,
        siz esa marketing, mijoz va narx ustida ishlaysiz.
      </p>

      <KeyFacts label="Reseller nima oladi?">
        <li>Ulgurji (reseller) narxi — hajmga qarab past.</li>
        <li>API yoki tayyor bot orqali sotuv.</li>
        <li>Click, Payme va SBP to‘lov integratsiyasi.</li>
        <li>Avtomatik yetkazish va webhook status.</li>
        <li>Support va hujjat.</li>
      </KeyFacts>

      <h2 id="qadamlar">Reseller sifatida qanday boshlash?</h2>
      <Steps>
        <Step title="1. Ariza qoldiring">
          <Link href="/business">Business</Link> sahifasidan reseller bo‘lish uchun ariza qoldiring.
        </Step>
        <Step title="2. Tarif va kalit">
          Hajmingizga qarab tarif kelishiladi va API kalit beriladi.
        </Step>
        <Step title="3. Narx va katalog">
          O‘z ustamangizni belgilab, botingiz yoki saytingizda mahsulotni chiqarasiz.
        </Step>
        <Step title="4. Sotuv va yetkazish">
          Mijoz to‘laydi, mahsulot avtomatik yetkaziladi, siz foyda olasiz.
        </Step>
      </Steps>

      <InlineCta text="Reseller bo‘lmoqchimisiz? Business bilan bog‘laning." />

      <h2 id="daromad">Daromad qanday shakllanadi?</h2>
      <InfoGrid>
        <InfoCard emoji="🏷️" title="Ustama (marja)">
          Sotuv narxi minus ulgurji narx — sizning foydangiz.
        </InfoCard>
        <InfoCard emoji="📈" title="Hajm">
          Ko‘proq sotsangiz, ulgurji narx pasayadi va marja oshadi.
        </InfoCard>
        <InfoCard emoji="🔁" title="Takroriy mijoz">
          Tez va ishonchli xizmat mijozni qaytaradi — barqaror oqim.
        </InfoCard>
        <InfoCard emoji="🧩" title="Ko‘p mahsulot">
          Stars, Premium, Gifts birga — bitta mijozdan ko‘proq savdo.
        </InfoCard>
      </InfoGrid>

      <p>
        Batafsil:{" "}
        <Link href="/blog/reseller-vs-white-label-farqi">Reseller vs White Label</Link>,{" "}
        <Link href="/blog/white-label-telegram-stars-platforma">White Label platforma</Link> va{" "}
        <Link href="/blog/telegram-stars-api-nima-ulanish">Stars API</Link>.
      </p>

      <Sources
        label="Manbalar"
        items={[
          { href: "https://core.telegram.org/api/stars", label: "core.telegram.org/api/stars", note: "Stars texnik hujjati" },
          { href: "https://telegram.org/faq_premium", label: "telegram.org/faq_premium", note: "Premium FAQ" },
        ]}
      />
    </>
  );
}

/* ---------------- RU ---------------- */
function RuAnswer() {
  return (
    <p>
      Telegram‑реселлер — тот, кто берёт Stars, Premium и Gifts по оптовой цене и перепродаёт со своей наценкой. В
      программе реселлера StarsPaymee Business вы получаете API‑ключ, задаёте свою цену и продаёте — доставка, оплата
      (Click/SBP) и статусы автоматические. Чтобы начать, достаточно оставить заявку.
    </p>
  );
}

function RuBody() {
  return (
    <>
      <h2 id="nima">Как работает модель реселлера?</h2>
      <p>
        Реселлер не производит товар — он берёт готовый товар (Stars, Premium, Gifts) по оптовой цене и продаёт своим
        клиентам. Разница — ваша наценка. API StarsPaymee выполняет доставку, а вы работаете над маркетингом,
        клиентами и ценой.
      </p>

      <KeyFacts label="Что получает реселлер?">
        <li>Оптовая (реселлерская) цена — ниже при объёме.</li>
        <li>Продажа через API или готовый бот.</li>
        <li>Интеграция оплаты Click, Payme и SBP.</li>
        <li>Автодоставка и статус webhook.</li>
        <li>Поддержка и документация.</li>
      </KeyFacts>

      <h2 id="qadamlar">Как начать реселлером?</h2>
      <Steps>
        <Step title="1. Оставьте заявку">
          На странице <Link href="/business">Business</Link> оставьте заявку, чтобы стать реселлером.
        </Step>
        <Step title="2. Тариф и ключ">
          По вашему объёму согласуется тариф и выдаётся API‑ключ.
        </Step>
        <Step title="3. Цена и каталог">
          Задав свою наценку, выводите товар в боте или на сайте.
        </Step>
        <Step title="4. Продажа и доставка">
          Клиент платит, товар доставляется автоматически, вы получаете прибыль.
        </Step>
      </Steps>

      <InlineCta text="Хотите стать реселлером? Свяжитесь с Business." />

      <h2 id="daromad">Как формируется доход?</h2>
      <InfoGrid>
        <InfoCard emoji="🏷️" title="Наценка (маржа)">
          Цена продажи минус оптовая цена — ваша прибыль.
        </InfoCard>
        <InfoCard emoji="📈" title="Объём">
          Больше продаж — ниже оптовая цена и выше маржа.
        </InfoCard>
        <InfoCard emoji="🔁" title="Повторный клиент">
          Быстрый и надёжный сервис возвращает клиента — стабильный поток.
        </InfoCard>
        <InfoCard emoji="🧩" title="Много товаров">
          Stars, Premium, Gifts вместе — больше продаж с одного клиента.
        </InfoCard>
      </InfoGrid>

      <p>
        Подробнее:{" "}
        <Link href="/blog/reseller-vs-white-label-farqi">Reseller vs White Label</Link>,{" "}
        <Link href="/blog/white-label-telegram-stars-platforma">White Label платформа</Link> и{" "}
        <Link href="/blog/telegram-stars-api-nima-ulanish">Stars API</Link>.
      </p>

      <Sources
        label="Источники"
        items={[
          { href: "https://core.telegram.org/api/stars", label: "core.telegram.org/api/stars", note: "техдокументация Stars" },
          { href: "https://telegram.org/faq_premium", label: "telegram.org/faq_premium", note: "FAQ Premium" },
        ]}
      />
    </>
  );
}

/* ---------------- EN ---------------- */
function EnAnswer() {
  return (
    <p>
      A Telegram reseller takes Stars, Premium and Gifts at a wholesale price and resells with their own markup. In
      the StarsPaymee Business reseller program you get an API key, set your own price and sell — delivery, payment
      (Click/SBP) and statuses are automatic. To start, just submit a request.
    </p>
  );
}

function EnBody() {
  return (
    <>
      <h2 id="nima">How does the reseller model work?</h2>
      <p>
        A reseller doesn't produce the product — they take the ready product (Stars, Premium, Gifts) at a wholesale
        price and sell it to their customers. The difference is your markup. The StarsPaymee API handles delivery,
        while you work on marketing, customers and pricing.
      </p>

      <KeyFacts label="What does a reseller get?">
        <li>Wholesale (reseller) price — lower with volume.</li>
        <li>Selling via the API or a ready bot.</li>
        <li>Click, Payme and SBP payment integration.</li>
        <li>Auto‑delivery and webhook status.</li>
        <li>Support and documentation.</li>
      </KeyFacts>

      <h2 id="qadamlar">How to start as a reseller?</h2>
      <Steps>
        <Step title="1. Submit a request">
          On the <Link href="/business">Business</Link> page submit a request to become a reseller.
        </Step>
        <Step title="2. Tariff and key">
          A tariff is agreed based on your volume and an API key is issued.
        </Step>
        <Step title="3. Price and catalog">
          Setting your own markup, you display the product in your bot or site.
        </Step>
        <Step title="4. Sell and deliver">
          The customer pays, the product is delivered automatically, and you earn a profit.
        </Step>
      </Steps>

      <InlineCta text="Want to become a reseller? Contact Business." />

      <h2 id="daromad">How is income formed?</h2>
      <InfoGrid>
        <InfoCard emoji="🏷️" title="Markup (margin)">
          Sale price minus wholesale price — your profit.
        </InfoCard>
        <InfoCard emoji="📈" title="Volume">
          More sales — a lower wholesale price and a higher margin.
        </InfoCard>
        <InfoCard emoji="🔁" title="Repeat customers">
          Fast, reliable service brings the customer back — a stable flow.
        </InfoCard>
        <InfoCard emoji="🧩" title="Multiple products">
          Stars, Premium, Gifts together — more sales per customer.
        </InfoCard>
      </InfoGrid>

      <p>
        See also:{" "}
        <Link href="/blog/reseller-vs-white-label-farqi">Reseller vs White Label</Link>,{" "}
        <Link href="/blog/white-label-telegram-stars-platforma">White Label platform</Link> and{" "}
        <Link href="/blog/telegram-stars-api-nima-ulanish">Stars API</Link>.
      </p>

      <Sources
        label="Sources"
        items={[
          { href: "https://core.telegram.org/api/stars", label: "core.telegram.org/api/stars", note: "Stars technical docs" },
          { href: "https://telegram.org/faq_premium", label: "telegram.org/faq_premium", note: "Premium FAQ" },
        ]}
      />
    </>
  );
}

const uzFaq = [
  { question: "Telegram reseller kim?", answer: "Stars, Premium va Gifts’ni ulgurji narxda olib, o‘z ustamangiz bilan qayta sotuvchi." },
  { question: "Reseller bo‘lish uchun nima kerak?", answer: "StarsPaymee Business sahifasidan ariza qoldirish; tarif kelishiladi va API kalit beriladi." },
  { question: "Boshlang‘ich sarmoya kerakmi?", answer: "Ko‘pincha deposit (balans) modeli; miqdor hajm va tarifga bog‘liq." },
  { question: "Narxni o‘zim belgilaymanmi?", answer: "Ha. O‘z ustamangiz bilan sotasiz." },
  { question: "Yetkazib berishni kim qiladi?", answer: "StarsPaymee API avtomatik yetkazadi; siz sotuv bilan shug‘ullanasiz." },
  { question: "Qanday sotaman?", answer: "Tayyor bot orqali yoki o‘z API integratsiyangiz bilan." },
  { question: "To‘lovni qanday olaman?", answer: "Click, Payme, karta yoki SBP orqali o‘z kanalingizda." },
  { question: "Daromad qanday?", answer: "Sotuv narxi minus ulgurji narx; hajm oshgani sari marja oshadi." },
  { question: "Nimalarni sotsam bo‘ladi?", answer: "Stars, Premium, Gifts hamda Click/SBP to‘lovlari." },
  { question: "Support bormi?", answer: "Ha, @StarsPaymeeSupport va Business jamoasi." },
  { question: "Sandbox bormi?", answer: "Ha. Sotuvdan oldin test qilinadi." },
  { question: "Statistika bormi?", answer: "Ha. Buyurtma va to‘lovlar ID bo‘yicha." },
  { question: "Rublda sotsam bo‘ladimi?", answer: "Ha. SBP orqali rubl to‘lovi." },
  { question: "White Label’dan farqi nima?", answer: "Reseller sotadi; White Label — to‘liq brendlangan platforma." },
  { question: "Refund qanday?", answer: "Yetkazilmagan buyurtma hisob-kitob siyosati bo‘yicha qaytariladi." },
  { question: "Reseller narxi qanchaga tushadi?", answer: "Hajmga bog‘liq; ko‘proq hajm — past narx. Business bilan aniqlashtiring." },
  { question: "Hujjat beriladimi?", answer: "Ha. Integratsiya va sotuv bo‘yicha ko‘rsatma." },
  { question: "Qanday boshlayman?", answer: "StarsPaymee Business sahifasidan ariza qoldiring." },
];

const ruFaq = [
  { question: "Кто такой Telegram‑реселлер?", answer: "Тот, кто берёт Stars, Premium и Gifts по оптовой цене и перепродаёт со своей наценкой." },
  { question: "Что нужно, чтобы стать реселлером?", answer: "Оставить заявку на странице StarsPaymee Business; согласуется тариф и выдаётся API‑ключ." },
  { question: "Нужен ли стартовый капитал?", answer: "Часто модель депозита (баланса); сумма зависит от объёма и тарифа." },
  { question: "Задаю ли я цену сам?", answer: "Да. Продаёте со своей наценкой." },
  { question: "Кто выполняет доставку?", answer: "API StarsPaymee доставляет автоматически; вы занимаетесь продажами." },
  { question: "Как я продаю?", answer: "Через готовый бот или свою интеграцию API." },
  { question: "Как принимаю оплату?", answer: "Через Click, Payme, карту или SBP в своём канале." },
  { question: "Каков доход?", answer: "Цена продажи минус оптовая цена; с ростом объёма маржа выше." },
  { question: "Что можно продавать?", answer: "Stars, Premium, Gifts, а также оплату Click/SBP." },
  { question: "Есть ли поддержка?", answer: "Да, @StarsPaymeeSupport и команда Business." },
  { question: "Есть ли Sandbox?", answer: "Да. Тест перед продажами." },
  { question: "Есть ли статистика?", answer: "Да. Заказы и оплаты по ID." },
  { question: "Можно ли продавать в рублях?", answer: "Да. Через SBP оплата в рублях." },
  { question: "Чем отличается от White Label?", answer: "Реселлер продаёт; White Label — полностью брендированная платформа." },
  { question: "Как с возвратом?", answer: "Недоставленный заказ возвращается по политике расчётов." },
  { question: "Сколько стоит реселлерская цена?", answer: "Зависит от объёма; больше объём — ниже цена. Уточните с Business." },
  { question: "Дают ли документацию?", answer: "Да. Инструкции по интеграции и продажам." },
  { question: "Как начать?", answer: "Оставьте заявку на странице StarsPaymee Business." },
];

const enFaq = [
  { question: "Who is a Telegram reseller?", answer: "Someone who takes Stars, Premium and Gifts at a wholesale price and resells with their own markup." },
  { question: "What's needed to become a reseller?", answer: "Submit a request on the StarsPaymee Business page; a tariff is agreed and an API key is issued." },
  { question: "Is startup capital needed?", answer: "Often a deposit (balance) model; the amount depends on volume and tariff." },
  { question: "Do I set the price myself?", answer: "Yes. You sell with your own markup." },
  { question: "Who performs delivery?", answer: "The StarsPaymee API delivers automatically; you handle sales." },
  { question: "How do I sell?", answer: "Via a ready bot or your own API integration." },
  { question: "How do I accept payment?", answer: "Via Click, Payme, card or SBP in your own channel." },
  { question: "What is the income?", answer: "Sale price minus wholesale price; margin rises as volume grows." },
  { question: "What can I sell?", answer: "Stars, Premium, Gifts, plus Click/SBP payments." },
  { question: "Is there support?", answer: "Yes, @StarsPaymeeSupport and the Business team." },
  { question: "Is there a Sandbox?", answer: "Yes. Testing before sales." },
  { question: "Is there statistics?", answer: "Yes. Orders and payments by ID." },
  { question: "Can I sell in rubles?", answer: "Yes. Ruble payment via SBP." },
  { question: "How is it different from White Label?", answer: "A reseller sells; White Label is a fully branded platform." },
  { question: "How about refunds?", answer: "An undelivered order is refunded per the settlement policy." },
  { question: "How much is the reseller price?", answer: "It depends on volume; more volume — lower price. Confirm with Business." },
  { question: "Is documentation provided?", answer: "Yes. Integration and sales instructions." },
  { question: "How do I start?", answer: "Submit a request on the StarsPaymee Business page." },
];

export const post: AeoPost = {
  slug: SLUG,
  category: "Biznes",
  type: "howto",
  datePublished: "2026-07-11",
  dateModified: "2026-07-11",
  keywords: [
    "telegram reseller",
    "telegram stars reseller",
    "reseller dasturi",
    "telegram reseller api",
    "stars premium reseller",
    "reseller bo‘lish",
  ],
  howToSteps: [
    { name: "Ariza qoldiring", text: "StarsPaymee Business sahifasidan reseller uchun ariza qoldiring." },
    { name: "Tarif va kalit", text: "Hajmingizga qarab tarif kelishiladi va API kalit beriladi." },
    { name: "Narx va katalog", text: "O‘z ustamangizni belgilab mahsulotni chiqaring." },
    { name: "Sotuv va yetkazish", text: "Mijoz to‘laydi, mahsulot avtomatik yetkaziladi, siz foyda olasiz." },
  ],
  locales: {
    uz: {
      title: "Telegram reseller dasturi: qanday boshlash (2026)",
      excerpt:
        "Stars, Premium va Gifts’ni ulgurji narxda olib qayta soting: reseller modeli, tarif, API kaliti, Click/SBP to‘lovi va daromad. Qadamlar va 18 savol-javob.",
      metaTitle: "Telegram reseller dasturi: qanday boshlash 2026",
      metaDescription:
        "Telegram reseller dasturi: model, tarif, API kaliti, Click/SBP to‘lovi, avtomatik yetkazish va daromad. StarsPaymee Business orqali boshlash — 18 savol-javob.",
      answerTitle: "Qisqa javob",
      Answer: UzAnswer,
      Body: UzBody,
      ctaHeading: "Reseller bo‘lib boshlang",
      ctaBody: "StarsPaymee Business orqali reseller bo‘ling — o‘z narxingiz, avtomatik yetkazish.",
      faq: uzFaq,
    },
    ru: {
      title: "Программа реселлера Telegram: как начать (2026)",
      excerpt:
        "Берите Stars, Premium и Gifts по оптовой цене и перепродавайте: модель реселлера, тариф, API‑ключ, оплата Click/SBP и доход. Шаги и 18 вопросов‑ответов.",
      metaTitle: "Программа реселлера Telegram: как начать 2026",
      metaDescription:
        "Программа реселлера Telegram: модель, тариф, API‑ключ, оплата Click/SBP, автодоставка и доход. Начало через StarsPaymee Business — 18 вопросов‑ответов.",
      answerTitle: "Краткий ответ",
      Answer: RuAnswer,
      Body: RuBody,
      ctaHeading: "Начните как реселлер",
      ctaBody: "Через StarsPaymee Business станьте реселлером — своя цена, автодоставка.",
      faq: ruFaq,
    },
    en: {
      title: "Telegram reseller program: how to start (2026)",
      excerpt:
        "Take Stars, Premium and Gifts at wholesale and resell: the reseller model, tariff, API key, Click/SBP payment and income. Steps and 18 Q&A.",
      metaTitle: "Telegram reseller program: how to start 2026",
      metaDescription:
        "Telegram reseller program: model, tariff, API key, Click/SBP payment, auto‑delivery and income. Starting via StarsPaymee Business — 18 Q&A.",
      answerTitle: "Short answer",
      Answer: EnAnswer,
      Body: EnBody,
      ctaHeading: "Start as a reseller",
      ctaBody: "Through StarsPaymee Business, become a reseller — your own price, auto‑delivery.",
      faq: enFaq,
    },
  },
};
