import { Link } from "@/i18n/navigation";
import { InlineCta, Sources, CompareTable, Yes, No, KeyFacts } from "@/components/blog/aeo-blocks";
import type { AeoPost } from "@/lib/blog-aeo/types";

const SLUG = "reseller-vs-white-label-farqi";

/* ---------------- UZ ---------------- */
function UzAnswer() {
  return (
    <p>
      Reseller — mahsulotni ulgurji olib, StarsPaymee (yoki tayyor bot) nomi ostida sotadi. White Label — o‘z brendi,
      nomi va dizayni ostida to‘liq platforma bo‘lib, orqa tomonda StarsPaymee API ishlaydi. Reseller tez va oddiy;
      White Label brend va mustaqillik uchun. Ikkalasida ham yetkazish va to‘lov avtomatik.
    </p>
  );
}

function UzBody() {
  return (
    <>
      <h2 id="farq">Asosiy farq nima?</h2>
      <p>
        Ikkala model ham StarsPaymee infratuzilmasiga tayanadi va Stars/Premium/Gifts’ni avtomatik yetkazadi. Farq —
        brend va nazorat darajasida.
      </p>

      <CompareTable
        headers={["Xususiyat", "Reseller", "White Label"]}
        rows={[
          ["Brend", <>StarsPaymee / umumiy</>, <Yes>o‘z brendingiz</Yes>],
          ["Boshlash tezligi", <Yes>juda tez</Yes>, <>o‘rtacha (sozlash)</>],
          ["O‘z narxi", <Yes>ha</Yes>, <Yes>ha</Yes>],
          ["Domen/dizayn", <No>cheklangan</No>, <Yes>to‘liq</Yes>],
          ["Texnik yuk", <No>minimal</No>, <No>minimal</No>],
          ["Kim uchun", <>tez start, sotuvchi</>, <>brend, agentlik</>],
        ]}
      />

      <h2 id="qaysi">Qaysi birini tanlash kerak?</h2>
      <KeyFacts label="Tanlash mezonlari">
        <li>Tez va oddiy boshlamoqchimisiz — Reseller.</li>
        <li>O‘z brendingizni qurmoqchimisiz — White Label.</li>
        <li>Ko‘p mijozli agentlik — White Label.</li>
        <li>Sinov yoki kichik hajm — Reseller.</li>
      </KeyFacts>

      <InlineCta text="Qaysi model sizga mos? Business bilan maslahatlashing." />

      <p>
        Batafsil:{" "}
        <Link href="/blog/telegram-reseller-dasturi-qanday-boshlash">Reseller dasturi</Link> va{" "}
        <Link href="/blog/white-label-telegram-stars-platforma">White Label platforma</Link>. Umumiy —{" "}
        <Link href="/business">Business</Link>.
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
      Реселлер берёт товар оптом и продаёт под именем StarsPaymee (или готового бота). White Label — полноценная
      платформа под вашим брендом, названием и дизайном, а на бэкенде работает API StarsPaymee. Реселлер быстрый и
      простой; White Label — для бренда и независимости. В обоих доставка и оплата автоматические.
    </p>
  );
}

function RuBody() {
  return (
    <>
      <h2 id="farq">В чём основная разница?</h2>
      <p>
        Обе модели опираются на инфраструктуру StarsPaymee и доставляют Stars/Premium/Gifts автоматически. Разница —
        в уровне бренда и контроля.
      </p>

      <CompareTable
        headers={["Свойство", "Реселлер", "White Label"]}
        rows={[
          ["Бренд", <>StarsPaymee / общий</>, <Yes>ваш бренд</Yes>],
          ["Скорость старта", <Yes>очень быстро</Yes>, <>средне (настройка)</>],
          ["Своя цена", <Yes>да</Yes>, <Yes>да</Yes>],
          ["Домен/дизайн", <No>ограничены</No>, <Yes>полностью</Yes>],
          ["Техническая нагрузка", <No>минимальна</No>, <No>минимальна</No>],
          ["Для кого", <>быстрый старт, продавец</>, <>бренд, агентство</>],
        ]}
      />

      <h2 id="qaysi">Что выбрать?</h2>
      <KeyFacts label="Критерии выбора">
        <li>Хотите начать быстро и просто — Реселлер.</li>
        <li>Хотите строить свой бренд — White Label.</li>
        <li>Агентство с многими клиентами — White Label.</li>
        <li>Проба или малый объём — Реселлер.</li>
      </KeyFacts>

      <InlineCta text="Какая модель вам подходит? Проконсультируйтесь с Business." />

      <p>
        Подробнее:{" "}
        <Link href="/blog/telegram-reseller-dasturi-qanday-boshlash">программа реселлера</Link> и{" "}
        <Link href="/blog/white-label-telegram-stars-platforma">White Label платформа</Link>. Общее —{" "}
        <Link href="/business">Business</Link>.
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
      A reseller takes the product wholesale and sells under the StarsPaymee (or a ready bot) name. White Label is a
      full platform under your own brand, name and design, with the StarsPaymee API on the backend. A reseller is
      fast and simple; White Label is for branding and independence. In both, delivery and payment are automatic.
    </p>
  );
}

function EnBody() {
  return (
    <>
      <h2 id="farq">What's the main difference?</h2>
      <p>
        Both models rely on StarsPaymee's infrastructure and deliver Stars/Premium/Gifts automatically. The
        difference is in the level of branding and control.
      </p>

      <CompareTable
        headers={["Feature", "Reseller", "White Label"]}
        rows={[
          ["Brand", <>StarsPaymee / shared</>, <Yes>your brand</Yes>],
          ["Start speed", <Yes>very fast</Yes>, <>medium (setup)</>],
          ["Own price", <Yes>yes</Yes>, <Yes>yes</Yes>],
          ["Domain/design", <No>limited</No>, <Yes>full</Yes>],
          ["Technical load", <No>minimal</No>, <No>minimal</No>],
          ["For whom", <>fast start, seller</>, <>brand, agency</>],
        ]}
      />

      <h2 id="qaysi">Which one to choose?</h2>
      <KeyFacts label="Selection criteria">
        <li>Want to start fast and simple — Reseller.</li>
        <li>Want to build your own brand — White Label.</li>
        <li>Agency with many clients — White Label.</li>
        <li>Trial or small volume — Reseller.</li>
      </KeyFacts>

      <InlineCta text="Which model suits you? Consult Business." />

      <p>
        See also:{" "}
        <Link href="/blog/telegram-reseller-dasturi-qanday-boshlash">the reseller program</Link> and{" "}
        <Link href="/blog/white-label-telegram-stars-platforma">the White Label platform</Link>. General —{" "}
        <Link href="/business">Business</Link>.
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
  { question: "Reseller va White Label farqi nima?", answer: "Reseller StarsPaymee nomi ostida sotadi; White Label — o‘z brendingiz ostida to‘liq platforma. Ikkalasida yetkazish avtomatik." },
  { question: "Qaysi biri tezroq boshlanadi?", answer: "Reseller — juda tez. White Label brending va sozlash tufayli biroz vaqt oladi." },
  { question: "Ikkalasida ham o‘z narxim bo‘ladimi?", answer: "Ha. Har ikki modelda ustamangizni o‘zingiz belgilaysiz." },
  { question: "Brend qaysida?", answer: "White Label’da to‘liq o‘z brendingiz; reseller’da StarsPaymee/umumiy." },
  { question: "Texnik yuk kimda?", answer: "Ikkalasida ham minimal — API StarsPaymee tomonida." },
  { question: "Agentlik uchun qaysi?", answer: "White Label — ko‘p mijozli agentlik va brend uchun mos." },
  { question: "Kichik hajm uchun qaysi?", answer: "Reseller — sinov va kichik hajm uchun qulay." },
  { question: "Domen o‘zimniki bo‘ladimi?", answer: "White Label’da ha; reseller’da cheklangan." },
  { question: "To‘lov integratsiyasi ikkalasida bormi?", answer: "Ha. Click, Payme va SBP ikkalasida." },
  { question: "Keyin White Label’ga o‘tsam bo‘ladimi?", answer: "Ha. Reseller’dan boshlab keyin White Label’ga o‘tish mumkin." },
  { question: "Narx farqi bormi?", answer: "Shartlar hajm va imkoniyatlarga bog‘liq; Business bilan aniqlashtiriladi." },
  { question: "Ikkalasida support bormi?", answer: "Ha, @StarsPaymeeSupport va Business jamoasi." },
  { question: "Sandbox bormi?", answer: "Ha. Har ikkisida test muhiti." },
  { question: "Statistika bormi?", answer: "Ha. Buyurtma va to‘lovlar ID bo‘yicha." },
  { question: "Rublda sotsam bo‘ladimi?", answer: "Ha. SBP ikkala modelda." },
  { question: "Qaysi biri arzon?", answer: "Reseller odatda kirish uchun soddaroq; aniq narx hajmga bog‘liq." },
  { question: "Hujjat beriladimi?", answer: "Ha. Integratsiya va sozlash bo‘yicha." },
  { question: "Qanday tanlayman?", answer: "Business bilan hajm va maqsadingizga qarab maslahatlashing." },
];

const ruFaq = [
  { question: "В чём разница реселлера и White Label?", answer: "Реселлер продаёт под именем StarsPaymee; White Label — полная платформа под вашим брендом. В обоих доставка автоматическая." },
  { question: "Что запускается быстрее?", answer: "Реселлер — очень быстро. White Label из‑за брендинга и настройки занимает чуть больше." },
  { question: "В обоих ли есть своя цена?", answer: "Да. В обеих моделях вы задаёте наценку сами." },
  { question: "Где бренд?", answer: "В White Label полностью ваш бренд; у реселлера — StarsPaymee/общий." },
  { question: "У кого техническая нагрузка?", answer: "В обоих минимальна — API на стороне StarsPaymee." },
  { question: "Что для агентства?", answer: "White Label — для агентства с многими клиентами и бренда." },
  { question: "Что для малого объёма?", answer: "Реселлер — удобно для пробы и малого объёма." },
  { question: "Будет ли мой домен?", answer: "В White Label да; у реселлера ограничено." },
  { question: "Есть ли платёжная интеграция в обоих?", answer: "Да. Click, Payme и SBP в обоих." },
  { question: "Можно ли потом перейти на White Label?", answer: "Да. Можно начать с реселлера и перейти на White Label." },
  { question: "Есть ли разница в цене?", answer: "Условия зависят от объёма и возможностей; уточняются с Business." },
  { question: "Есть ли поддержка в обоих?", answer: "Да, @StarsPaymeeSupport и команда Business." },
  { question: "Есть ли Sandbox?", answer: "Да. В обоих тестовая среда." },
  { question: "Есть ли статистика?", answer: "Да. Заказы и оплаты по ID." },
  { question: "Можно ли продавать в рублях?", answer: "Да. SBP в обеих моделях." },
  { question: "Что дешевле?", answer: "Реселлер обычно проще для входа; точная цена зависит от объёма." },
  { question: "Дают ли документацию?", answer: "Да. По интеграции и настройке." },
  { question: "Как выбрать?", answer: "Проконсультируйтесь с Business по объёму и цели." },
];

const enFaq = [
  { question: "What's the difference between reseller and White Label?", answer: "A reseller sells under the StarsPaymee name; White Label is a full platform under your brand. In both, delivery is automatic." },
  { question: "Which starts faster?", answer: "Reseller — very fast. White Label takes a bit longer due to branding and setup." },
  { question: "Do both have my own price?", answer: "Yes. In both models you set the markup yourself." },
  { question: "Where's the brand?", answer: "In White Label it's fully your brand; a reseller uses StarsPaymee/shared." },
  { question: "Who has the technical load?", answer: "In both it's minimal — the API is on the StarsPaymee side." },
  { question: "Which for an agency?", answer: "White Label — for an agency with many clients and a brand." },
  { question: "Which for small volume?", answer: "Reseller — convenient for a trial and small volume." },
  { question: "Will it be my domain?", answer: "In White Label yes; for a reseller it's limited." },
  { question: "Is payment integration in both?", answer: "Yes. Click, Payme and SBP in both." },
  { question: "Can I later move to White Label?", answer: "Yes. You can start as a reseller and move to White Label." },
  { question: "Is there a price difference?", answer: "Terms depend on volume and capabilities; confirmed with Business." },
  { question: "Is there support in both?", answer: "Yes, @StarsPaymeeSupport and the Business team." },
  { question: "Is there a Sandbox?", answer: "Yes. A test environment in both." },
  { question: "Is there statistics?", answer: "Yes. Orders and payments by ID." },
  { question: "Can I sell in rubles?", answer: "Yes. SBP in both models." },
  { question: "Which is cheaper?", answer: "A reseller is usually simpler to enter; the exact price depends on volume." },
  { question: "Is documentation provided?", answer: "Yes. On integration and setup." },
  { question: "How do I choose?", answer: "Consult Business based on your volume and goal." },
];

export const post: AeoPost = {
  slug: SLUG,
  category: "Biznes",
  type: "comparison",
  datePublished: "2026-07-08",
  dateModified: "2026-07-08",
  keywords: [
    "reseller vs white label",
    "white label reseller farqi",
    "telegram reseller white label",
    "reseller white label tanlash",
    "white label yoki reseller",
    "reseller white label difference",
  ],
  locales: {
    uz: {
      title: "Reseller vs White Label: farqi va qaysi birini tanlash",
      excerpt:
        "Reseller va White Label modellari farqi: brend, boshlash tezligi, domen, narx va kim uchun mosligi. Solishtirish jadvali va 18 savol-javob — to‘g‘ri tanlov uchun.",
      metaTitle: "Reseller vs White Label — farqi va tanlash 2026",
      metaDescription:
        "Reseller va White Label farqi: brend, tezlik, domen, narx va tanlov mezonlari. Telegram Stars biznesi uchun solishtirish — 18 savol-javob.",
      answerTitle: "Qisqa javob",
      Answer: UzAnswer,
      Body: UzBody,
      ctaHeading: "Modelni tanlashda yordam kerakmi?",
      ctaBody: "StarsPaymee Business bilan hajm va maqsadingizga mos modelni tanlang.",
      faq: uzFaq,
    },
    ru: {
      title: "Reseller vs White Label: разница и что выбрать",
      excerpt:
        "Разница моделей реселлера и White Label: бренд, скорость старта, домен, цена и для кого подходит. Таблица сравнения и 18 вопросов‑ответов — для верного выбора.",
      metaTitle: "Reseller vs White Label — разница и выбор 2026",
      metaDescription:
        "Разница реселлера и White Label: бренд, скорость, домен, цена и критерии выбора. Сравнение для бизнеса Telegram Stars — 18 вопросов‑ответов.",
      answerTitle: "Краткий ответ",
      Answer: RuAnswer,
      Body: RuBody,
      ctaHeading: "Нужна помощь с выбором модели?",
      ctaBody: "С StarsPaymee Business выберите модель под ваш объём и цель.",
      faq: ruFaq,
    },
    en: {
      title: "Reseller vs White Label: the difference and what to choose",
      excerpt:
        "The difference between the reseller and White Label models: brand, start speed, domain, price and who each fits. A comparison table and 18 Q&A — for the right choice.",
      metaTitle: "Reseller vs White Label — difference and choice 2026",
      metaDescription:
        "Difference between reseller and White Label: brand, speed, domain, price and selection criteria. A comparison for a Telegram Stars business — 18 Q&A.",
      answerTitle: "Short answer",
      Answer: EnAnswer,
      Body: EnBody,
      ctaHeading: "Need help choosing a model?",
      ctaBody: "With StarsPaymee Business, choose the model for your volume and goal.",
      faq: enFaq,
    },
  },
};
