import { Link } from "@/i18n/navigation";
import { InlineCta, Sources, KeyFacts, InfoGrid, InfoCard, Steps, Step } from "@/components/blog/aeo-blocks";
import type { AeoPost } from "@/lib/blog-aeo/types";

const SLUG = "white-label-telegram-stars-platforma";

/* ---------------- UZ ---------------- */
function UzAnswer() {
  return (
    <p>
      White Label — bu o‘z brendingiz, nomingiz va dizayningiz ostida ishlaydigan tayyor platforma, orqa tomonda esa
      StarsPaymee API va infratuzilmasi turadi. Siz Stars, Premium va Gifts’ni o‘z bot/saytingizda sotasiz, texnik
      yetkazib berish, to‘lov (Click/SBP) va status esa StarsPaymee tomonida avtomatik boshqariladi.
    </p>
  );
}

function UzBody() {
  return (
    <>
      <h2 id="nima">White Label nima?</h2>
      <p>
        White Label (oq yorliq) — bir kompaniyaning mahsuloti/texnologiyasini boshqa brend o‘z nomi ostida taqdim
        etishi. StarsPaymee kontekstida bu — sizning brendingiz bilan to‘liq platforma: mijoz sizni ko‘radi, lekin
        yetkazib berish, narx yangilanishi va to‘lov integratsiyasi StarsPaymee API orqali ishlaydi.
      </p>

      <KeyFacts label="White Label’da nima bo‘ladi?">
        <li>O‘z brend nomingiz, logotipingiz va dizayningiz.</li>
        <li>Stars, Premium, Gifts sotuvi — bitta API ostida.</li>
        <li>Click, Payme va SBP to‘lov integratsiyasi.</li>
        <li>Avtomatik yetkazish va webhook.</li>
        <li>Reseller narxi — o‘z ustamangiz.</li>
      </KeyFacts>

      <h2 id="kim">Kimlar uchun foydali?</h2>
      <InfoGrid>
        <InfoCard emoji="🏢" title="Brend qurmoqchilar">
          O‘z nomingiz bilan bozorda tanilish — texnik yukni StarsPaymee ko‘taradi.
        </InfoCard>
        <InfoCard emoji="🛍️" title="Yirik reseller">
          Ko‘p mijozli oqim uchun barqaror API va statuslar.
        </InfoCard>
        <InfoCard emoji="🌐" title="Agentliklar">
          Mijozlarga «o‘z platformangiz» sifatida taqdim etasiz.
        </InfoCard>
        <InfoCard emoji="⚙️" title="Tez ishga tushmoqchilar">
          Noldan qurish o‘rniga tayyor infratuzilma bilan tez start.
        </InfoCard>
      </InfoGrid>

      <h2 id="qadamlar">Qanday boshlanadi?</h2>
      <Steps>
        <Step title="1. Ariza va kelishuv">
          <Link href="/business">Business</Link> orqali White Label shartlarini kelishasiz.
        </Step>
        <Step title="2. Brending">
          Nom, logotip, ranglar va domen sozlanadi.
        </Step>
        <Step title="3. Integratsiya">
          API va to‘lov (Click/SBP) ulanadi, katalog va narx sozlanadi.
        </Step>
        <Step title="4. Ishga tushirish">
          Sandbox’da sinab, jonli rejimga o‘tasiz va sotuvni boshlaysiz.
        </Step>
      </Steps>

      <InlineCta text="O‘z brendingiz ostida platforma qurmoqchimisiz? Business bilan bog‘laning." />

      <p>
        Batafsil:{" "}
        <Link href="/blog/telegram-reseller-dasturi-qanday-boshlash">Reseller dasturi</Link>,{" "}
        <Link href="/blog/reseller-vs-white-label-farqi">Reseller vs White Label</Link> va{" "}
        <Link href="/blog/telegram-stars-api-nima-ulanish">Stars API</Link>.
      </p>

      <Sources
        label="Manbalar"
        items={[
          { href: "https://core.telegram.org/api/stars", label: "core.telegram.org/api/stars", note: "Stars texnik hujjati" },
          { href: "https://core.telegram.org/bots", label: "core.telegram.org/bots", note: "Telegram botlari" },
        ]}
      />
    </>
  );
}

/* ---------------- RU ---------------- */
function RuAnswer() {
  return (
    <p>
      White Label — это готовая платформа под вашим брендом, названием и дизайном, а на бэкенде работают API и
      инфраструктура StarsPaymee. Вы продаёте Stars, Premium и Gifts в своём боте/на сайте, а техническая доставка,
      оплата (Click/SBP) и статусы управляются автоматически на стороне StarsPaymee.
    </p>
  );
}

function RuBody() {
  return (
    <>
      <h2 id="nima">Что такое White Label?</h2>
      <p>
        White Label («белая метка») — когда продукт/технологию одной компании другой бренд предоставляет под своим
        именем. В контексте StarsPaymee это полноценная платформа под вашим брендом: клиент видит вас, но доставка,
        обновление цен и платёжная интеграция работают через API StarsPaymee.
      </p>

      <KeyFacts label="Что входит в White Label?">
        <li>Ваше название бренда, логотип и дизайн.</li>
        <li>Продажа Stars, Premium, Gifts — под одним API.</li>
        <li>Интеграция оплаты Click, Payme и SBP.</li>
        <li>Автодоставка и webhook.</li>
        <li>Цена реселлера — ваша наценка.</li>
      </KeyFacts>

      <h2 id="kim">Кому полезно?</h2>
      <InfoGrid>
        <InfoCard emoji="🏢" title="Строящим бренд">
          Известность под своим именем — техническую нагрузку берёт StarsPaymee.
        </InfoCard>
        <InfoCard emoji="🛍️" title="Крупным реселлерам">
          Стабильный API и статусы для потока с многими клиентами.
        </InfoCard>
        <InfoCard emoji="🌐" title="Агентствам">
          Предоставляете клиентам как «вашу платформу».
        </InfoCard>
        <InfoCard emoji="⚙️" title="Быстрому старту">
          Быстрый запуск с готовой инфраструктурой вместо разработки с нуля.
        </InfoCard>
      </InfoGrid>

      <h2 id="qadamlar">Как начинается?</h2>
      <Steps>
        <Step title="1. Заявка и договор">
          Через <Link href="/business">Business</Link> согласуете условия White Label.
        </Step>
        <Step title="2. Брендинг">
          Настраиваются название, логотип, цвета и домен.
        </Step>
        <Step title="3. Интеграция">
          Подключаются API и оплата (Click/SBP), настраиваются каталог и цена.
        </Step>
        <Step title="4. Запуск">
          Тестируете в Sandbox, переходите в прод и начинаете продажи.
        </Step>
      </Steps>

      <InlineCta text="Хотите платформу под своим брендом? Свяжитесь с Business." />

      <p>
        Подробнее:{" "}
        <Link href="/blog/telegram-reseller-dasturi-qanday-boshlash">программа реселлера</Link>,{" "}
        <Link href="/blog/reseller-vs-white-label-farqi">Reseller vs White Label</Link> и{" "}
        <Link href="/blog/telegram-stars-api-nima-ulanish">Stars API</Link>.
      </p>

      <Sources
        label="Источники"
        items={[
          { href: "https://core.telegram.org/api/stars", label: "core.telegram.org/api/stars", note: "техдокументация Stars" },
          { href: "https://core.telegram.org/bots", label: "core.telegram.org/bots", note: "боты Telegram" },
        ]}
      />
    </>
  );
}

/* ---------------- EN ---------------- */
function EnAnswer() {
  return (
    <p>
      White Label is a ready platform under your own brand, name and design, with StarsPaymee's API and
      infrastructure on the backend. You sell Stars, Premium and Gifts in your bot/site, while technical delivery,
      payments (Click/SBP) and statuses are managed automatically on the StarsPaymee side.
    </p>
  );
}

function EnBody() {
  return (
    <>
      <h2 id="nima">What is White Label?</h2>
      <p>
        White Label is when one company's product/technology is offered by another brand under its own name. In the
        StarsPaymee context this is a full platform under your brand: the customer sees you, but delivery, price
        updates and payment integration run through the StarsPaymee API.
      </p>

      <KeyFacts label="What's in White Label?">
        <li>Your brand name, logo and design.</li>
        <li>Selling Stars, Premium, Gifts — under one API.</li>
        <li>Click, Payme and SBP payment integration.</li>
        <li>Auto‑delivery and webhook.</li>
        <li>Reseller price — your markup.</li>
      </KeyFacts>

      <h2 id="kim">Who benefits?</h2>
      <InfoGrid>
        <InfoCard emoji="🏢" title="Brand builders">
          Recognition under your own name — StarsPaymee carries the technical load.
        </InfoCard>
        <InfoCard emoji="🛍️" title="Large resellers">
          A stable API and statuses for a multi‑customer flow.
        </InfoCard>
        <InfoCard emoji="🌐" title="Agencies">
          Present it to clients as «your platform».
        </InfoCard>
        <InfoCard emoji="⚙️" title="Fast launchers">
          A fast start with ready infrastructure instead of building from scratch.
        </InfoCard>
      </InfoGrid>

      <h2 id="qadamlar">How does it start?</h2>
      <Steps>
        <Step title="1. Request and agreement">
          Through <Link href="/business">Business</Link> you agree the White Label terms.
        </Step>
        <Step title="2. Branding">
          Name, logo, colors and domain are configured.
        </Step>
        <Step title="3. Integration">
          The API and payment (Click/SBP) are connected, catalog and price are set.
        </Step>
        <Step title="4. Launch">
          You test in Sandbox, switch to production and start selling.
        </Step>
      </Steps>

      <InlineCta text="Want a platform under your own brand? Contact Business." />

      <p>
        See also:{" "}
        <Link href="/blog/telegram-reseller-dasturi-qanday-boshlash">the reseller program</Link>,{" "}
        <Link href="/blog/reseller-vs-white-label-farqi">Reseller vs White Label</Link> and{" "}
        <Link href="/blog/telegram-stars-api-nima-ulanish">Stars API</Link>.
      </p>

      <Sources
        label="Sources"
        items={[
          { href: "https://core.telegram.org/api/stars", label: "core.telegram.org/api/stars", note: "Stars technical docs" },
          { href: "https://core.telegram.org/bots", label: "core.telegram.org/bots", note: "Telegram bots" },
        ]}
      />
    </>
  );
}

const uzFaq = [
  { question: "White Label nima?", answer: "O‘z brendingiz ostida ishlaydigan tayyor platforma; orqa tomonda StarsPaymee API va infratuzilmasi turadi." },
  { question: "Mijoz kimni ko‘radi?", answer: "Faqat sizning brendingizni — nom, logotip va dizayn sizniki." },
  { question: "Nimalarni sotaman?", answer: "Stars, Premium va Gifts — bitta API ostida; to‘lov Click/Payme/SBP." },
  { question: "To‘lov integratsiyasi bormi?", answer: "Ha. Click, Payme va SBP (rubl) integratsiyalari kiradi." },
  { question: "O‘z narximni belgilaymanmi?", answer: "Ha. Reseller sifatida o‘z ustamangiz bilan sotasiz." },
  { question: "Texnik yukni kim ko‘taradi?", answer: "Yetkazib berish, status va API StarsPaymee tomonida avtomatik." },
  { question: "Domen o‘zimniki bo‘ladimi?", answer: "Ha. O‘z domeningiz va brendingiz sozlanadi." },
  { question: "Qancha vaqtda ishga tushadi?", answer: "Tayyor infratuzilma sabab noldan qurishdan tezroq; shart hajmga bog‘liq." },
  { question: "Sandbox bormi?", answer: "Ha. Jonli rejimga o‘tishdan oldin test qilinadi." },
  { question: "Reseller’dan farqi nima?", answer: "Reseller sotadi; White Label — to‘liq brendlangan platforma. Batafsil alohida maqolada." },
  { question: "Narx qancha?", answer: "Shartlar hajm va imkoniyatlarga bog‘liq; Business bilan aniqlashtiriladi." },
  { question: "Support bormi?", answer: "Ha, @StarsPaymeeSupport va Business jamoasi." },
  { question: "Statistika bormi?", answer: "Ha. Buyurtma va to‘lovlar ID bo‘yicha kuzatiladi." },
  { question: "Rublda ham sotsam bo‘ladimi?", answer: "Ha. SBP orqali rubl to‘lovi kiradi." },
  { question: "Xavfsizlik qanday?", answer: "API kaliti server tomonida; imzo va token bilan himoya." },
  { question: "Hujjat beriladimi?", answer: "Ha. Integratsiya va brending bo‘yicha ko‘rsatma beriladi." },
  { question: "Bir nechta mijozga xizmat qilsam bo‘ladimi?", answer: "Ha. Ko‘p mijozli oqim uchun mo‘ljallangan." },
  { question: "Qanday boshlayman?", answer: "StarsPaymee Business sahifasidan ariza qoldiring." },
];

const ruFaq = [
  { question: "Что такое White Label?", answer: "Готовая платформа под вашим брендом; на бэкенде — API и инфраструктура StarsPaymee." },
  { question: "Кого видит клиент?", answer: "Только ваш бренд — название, логотип и дизайн ваши." },
  { question: "Что я продаю?", answer: "Stars, Premium и Gifts — под одним API; оплата Click/Payme/SBP." },
  { question: "Есть ли платёжная интеграция?", answer: "Да. Входят интеграции Click, Payme и SBP (рубли)." },
  { question: "Задаю ли я свою цену?", answer: "Да. Как реселлер продаёте со своей наценкой." },
  { question: "Кто несёт техническую нагрузку?", answer: "Доставка, статусы и API — автоматически на стороне StarsPaymee." },
  { question: "Будет ли мой домен?", answer: "Да. Настраиваются ваш домен и бренд." },
  { question: "За сколько запускается?", answer: "Быстрее, чем с нуля, благодаря готовой инфраструктуре; условия зависят от объёма." },
  { question: "Есть ли Sandbox?", answer: "Да. Тест перед переходом в прод." },
  { question: "Чем отличается от реселлера?", answer: "Реселлер продаёт; White Label — полностью брендированная платформа. Подробнее в отдельной статье." },
  { question: "Сколько стоит?", answer: "Условия зависят от объёма и возможностей; уточняются с Business." },
  { question: "Есть ли поддержка?", answer: "Да, @StarsPaymeeSupport и команда Business." },
  { question: "Есть ли статистика?", answer: "Да. Заказы и оплаты отслеживаются по ID." },
  { question: "Могу ли продавать в рублях?", answer: "Да. Через SBP входит оплата в рублях." },
  { question: "Как с безопасностью?", answer: "API‑ключ на сервере; защита подписью и токеном." },
  { question: "Дают ли документацию?", answer: "Да. Инструкции по интеграции и брендингу." },
  { question: "Можно ли обслуживать многих клиентов?", answer: "Да. Рассчитано на поток с многими клиентами." },
  { question: "Как начать?", answer: "Оставьте заявку на странице StarsPaymee Business." },
];

const enFaq = [
  { question: "What is White Label?", answer: "A ready platform under your brand; on the backend — StarsPaymee's API and infrastructure." },
  { question: "Who does the customer see?", answer: "Only your brand — the name, logo and design are yours." },
  { question: "What do I sell?", answer: "Stars, Premium and Gifts — under one API; payment via Click/Payme/SBP." },
  { question: "Is there payment integration?", answer: "Yes. Click, Payme and SBP (rubles) integrations are included." },
  { question: "Do I set my own price?", answer: "Yes. As a reseller you sell with your own markup." },
  { question: "Who carries the technical load?", answer: "Delivery, statuses and the API — automatically on the StarsPaymee side." },
  { question: "Will it be my domain?", answer: "Yes. Your domain and brand are configured." },
  { question: "How fast does it launch?", answer: "Faster than from scratch, thanks to ready infrastructure; terms depend on volume." },
  { question: "Is there a Sandbox?", answer: "Yes. Testing before switching to production." },
  { question: "How is it different from a reseller?", answer: "A reseller sells; White Label is a fully branded platform. More in a separate article." },
  { question: "How much does it cost?", answer: "Terms depend on volume and capabilities; confirmed with Business." },
  { question: "Is there support?", answer: "Yes, @StarsPaymeeSupport and the Business team." },
  { question: "Is there statistics?", answer: "Yes. Orders and payments are tracked by ID." },
  { question: "Can I sell in rubles?", answer: "Yes. Ruble payment is included via SBP." },
  { question: "What about security?", answer: "The API key is server‑side; protected by signature and token." },
  { question: "Is documentation provided?", answer: "Yes. Integration and branding instructions." },
  { question: "Can I serve many customers?", answer: "Yes. Designed for a multi‑customer flow." },
  { question: "How do I start?", answer: "Submit a request on the StarsPaymee Business page." },
];

export const post: AeoPost = {
  slug: SLUG,
  category: "Biznes",
  type: "info",
  datePublished: "2026-07-12",
  dateModified: "2026-07-12",
  keywords: [
    "white label telegram",
    "white label stars platform",
    "white label bot",
    "telegram stars white label",
    "white label reseller",
    "o‘z brend telegram stars",
  ],
  locales: {
    uz: {
      title: "White Label Telegram Stars platformasi: o‘z brendingiz ostida",
      excerpt:
        "White Label bilan o‘z brend, nom va dizayningiz ostida Stars, Premium va Gifts soting — orqa tomonda StarsPaymee API, Click va SBP to‘lovlari. Kimlar uchun, qadamlar va 18 savol-javob.",
      metaTitle: "White Label Telegram Stars platformasi 2026",
      metaDescription:
        "White Label Telegram Stars: o‘z brendingiz ostida platforma, StarsPaymee API, Click va SBP to‘lovlari, avtomatik yetkazish. Kimlar uchun va qanday boshlash — 18 savol-javob.",
      answerTitle: "Qisqa javob",
      Answer: UzAnswer,
      Body: UzBody,
      ctaHeading: "O‘z brendingiz bilan boshlang",
      ctaBody: "StarsPaymee Business orqali White Label platforma quring — texnik yukni biz ko‘taramiz.",
      faq: uzFaq,
    },
    ru: {
      title: "White Label платформа Telegram Stars: под вашим брендом",
      excerpt:
        "С White Label продавайте Stars, Premium и Gifts под своим брендом, названием и дизайном — на бэкенде API StarsPaymee, оплата Click и SBP. Кому подходит, шаги и 18 вопросов‑ответов.",
      metaTitle: "White Label платформа Telegram Stars 2026",
      metaDescription:
        "White Label Telegram Stars: платформа под вашим брендом, API StarsPaymee, оплата Click и SBP, автодоставка. Кому подходит и как начать — 18 вопросов‑ответов.",
      answerTitle: "Краткий ответ",
      Answer: RuAnswer,
      Body: RuBody,
      ctaHeading: "Начните под своим брендом",
      ctaBody: "Через StarsPaymee Business постройте White Label платформу — техническую нагрузку берём мы.",
      faq: ruFaq,
    },
    en: {
      title: "White Label Telegram Stars platform: under your own brand",
      excerpt:
        "With White Label sell Stars, Premium and Gifts under your own brand, name and design — StarsPaymee API on the backend, Click and SBP payments. Who it's for, steps and 18 Q&A.",
      metaTitle: "White Label Telegram Stars platform 2026",
      metaDescription:
        "White Label Telegram Stars: a platform under your brand, StarsPaymee API, Click and SBP payments, auto‑delivery. Who it's for and how to start — 18 Q&A.",
      answerTitle: "Short answer",
      Answer: EnAnswer,
      Body: EnBody,
      ctaHeading: "Start under your own brand",
      ctaBody: "Through StarsPaymee Business, build a White Label platform — we carry the technical load.",
      faq: enFaq,
    },
  },
};
