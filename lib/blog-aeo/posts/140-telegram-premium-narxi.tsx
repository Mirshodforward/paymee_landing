import { Link } from "@/i18n/navigation";
import { InlineCta, Sources, KeyFacts, Steps, Step } from "@/components/blog/aeo-blocks";
import { PremiumPlanBoard } from "@/components/blog/premium-plan-board";
import type { AeoPost } from "@/lib/blog-aeo/types";

const SLUG = "telegram-premium-narxi";

/* ---------------- UZ ---------------- */
function UzAnswer() {
  return (
    <p>
      Username orqali: <b>3 oy — 172 000 so‘m</b>, <b>6 oy — 232 000 so‘m</b>, <b>12 oy — 422 000 so‘m</b>. Akkauntga
      kirib berish oqimida: <b>1 oy — 50 000 so‘m</b>, <b>12 oy — 300 000 so‘m</b>. Muddat uzaygani sari oyiga
      tushadigan xarajat kamayadi.
    </p>
  );
}

function UzBody() {
  return (
    <>
      <h2 id="omillar">Premium narxiga ta’sir qiluvchi omillar</h2>
      <KeyFacts label="Narx nimaga bog‘liq">
        <li><b>Obuna muddati</b> — 1, 3, 6 yoki 12 oy.</li>
        <li><b>To‘lov platformasi</b> — App Store, Google Play yoki veb orqali narx farq qilishi mumkin.</li>
        <li><b>Mintaqa</b> — turli davlatlarda narx valyuta kursiga qarab o‘zgaradi.</li>
        <li><b>Xarid oqimi</b> — username orqali yoki akkauntga kirib berish.</li>
      </KeyFacts>

      <h2 id="jadval">Joriy tariflar</h2>
      <PremiumPlanBoard locale="uz" flow="username" />
      <PremiumPlanBoard locale="uz" flow="login" />

      <h2 id="uzoq">Uzoq muddatli obuna nima uchun tejamli?</h2>
      <p>
        Qancha uzoqroq muddatga obuna olinsa, oylik hisobda narx shuncha arzonlashadi. Masalan, 12 oylik obuna 1
        oylikka nisbatan sezilarli darajada tejamli. Shu sababli uzoq muddat davomida faol foydalanishni
        rejalashtirganlarga yillik variant tavsiya etiladi.
      </p>

      <InlineCta text="Muddatni tanlang — yakuniy summani ko‘ring." />

      <h2 id="rasmiy">Rasmiy narx va muqobil xizmatlar narxi</h2>
      <p>
        Rasmiy ilova orqali sotib olishda App Store yoki Google Play komissiyalari narxni oshirishi mumkin. Shu
        sababli ko‘pchilik mahalliy xizmat orqali sotib olishni afzal ko‘radi — to‘lov so‘mda, konvertatsiyasiz.
      </p>

      <h2 id="tekshirish">Narxni qanday tekshirish kerak?</h2>
      <Steps>
        <Step title="1. Botni oching">@StarsPaymee_bot.</Step>
        <Step title="2. Premium bo‘limini tanlang">Tariflar ro‘yxati chiqadi.</Step>
        <Step title="3. Muddatni belgilang">Yakuniy summa ko‘rsatiladi.</Step>
        <Step title="4. Tasdiqlang">Tasdiqlangan summa o‘zgarmaydi.</Step>
      </Steps>

      <p>
        Qarang: <Link href="/blog/telegram-premium-sotib-olish">Premium sotib olish</Link>,{" "}
        <Link href="/blog/arzon-telegram-premium">arzon narxda olish</Link> va{" "}
        <Link href="/blog/bir-oylik-premium-olish">bir oylik variant</Link>.
      </p>

      <Sources
        label="Manbalar"
        items={[
          { href: "https://telegram.org/faq_premium", label: "telegram.org/faq_premium", note: "Telegram Premium rasmiy FAQ" },
          { href: "https://cbu.uz/", label: "cbu.uz", note: "Markaziy bank — valyuta kurslari" },
        ]}
      />
    </>
  );
}

/* ---------------- RU ---------------- */
function RuAnswer() {
  return (
    <p>
      По username: <b>3 месяца — 172 000 сум</b>, <b>6 месяцев — 232 000 сум</b>, <b>12 месяцев — 422 000 сум</b>. В
      сценарии со входом в аккаунт: <b>1 месяц — 50 000 сум</b>, <b>12 месяцев — 300 000 сум</b>. Чем длиннее срок,
      тем ниже стоимость в пересчёте на месяц.
    </p>
  );
}

function RuBody() {
  return (
    <>
      <h2 id="omillar">Факторы, влияющие на цену Premium</h2>
      <KeyFacts label="От чего зависит цена">
        <li><b>Срок подписки</b> — 1, 3, 6 или 12 месяцев.</li>
        <li><b>Платформа оплаты</b> — цена может отличаться в App Store, Google Play или в вебе.</li>
        <li><b>Регион</b> — в разных странах цена меняется по курсу валюты.</li>
        <li><b>Сценарий покупки</b> — по username или со входом в аккаунт.</li>
      </KeyFacts>

      <h2 id="jadval">Актуальные тарифы</h2>
      <PremiumPlanBoard locale="ru" flow="username" />
      <PremiumPlanBoard locale="ru" flow="login" />

      <h2 id="uzoq">Почему длительная подписка выгоднее?</h2>
      <p>
        Чем больше срок подписки, тем ниже цена в пересчёте на месяц. Например, годовая подписка заметно выгоднее
        месячной. Поэтому тем, кто планирует активно пользоваться долго, рекомендуется годовой вариант.
      </p>

      <InlineCta text="Выберите срок — увидите итоговую сумму." />

      <h2 id="rasmiy">Официальная цена и цены альтернатив</h2>
      <p>
        При покупке через официальное приложение комиссии App Store или Google Play могут повысить цену. Поэтому
        многие предпочитают местный сервис — оплата в сумах, без конвертации.
      </p>

      <h2 id="tekshirish">Как проверить цену?</h2>
      <Steps>
        <Step title="1. Откройте бота">@StarsPaymee_bot.</Step>
        <Step title="2. Выберите раздел Premium">Появится список тарифов.</Step>
        <Step title="3. Укажите срок">Показывается итоговая сумма.</Step>
        <Step title="4. Подтвердите">Подтверждённая сумма не меняется.</Step>
      </Steps>

      <p>
        Смотрите: <Link href="/blog/telegram-premium-sotib-olish">покупка Premium</Link>,{" "}
        <Link href="/blog/arzon-telegram-premium">как купить дешевле</Link> и{" "}
        <Link href="/blog/bir-oylik-premium-olish">вариант на месяц</Link>.
      </p>

      <Sources
        label="Источники"
        items={[
          { href: "https://telegram.org/faq_premium", label: "telegram.org/faq_premium", note: "официальный FAQ Telegram Premium" },
          { href: "https://cbu.uz/", label: "cbu.uz", note: "Центральный банк — курсы валют" },
        ]}
      />
    </>
  );
}

/* ---------------- EN ---------------- */
function EnAnswer() {
  return (
    <p>
      By username: <b>3 months — 172,000 UZS</b>, <b>6 months — 232,000 UZS</b>, <b>12 months — 422,000 UZS</b>. In
      the account-login flow: <b>1 month — 50,000 UZS</b>, <b>12 months — 300,000 UZS</b>. The longer the term, the
      lower the effective monthly cost.
    </p>
  );
}

function EnBody() {
  return (
    <>
      <h2 id="omillar">What affects the Premium price</h2>
      <KeyFacts label="What the price depends on">
        <li><b>Subscription term</b> — 1, 3, 6 or 12 months.</li>
        <li><b>Payment platform</b> — the price can differ on App Store, Google Play or the web.</li>
        <li><b>Region</b> — prices shift with the exchange rate across countries.</li>
        <li><b>Purchase flow</b> — by username or with account login.</li>
      </KeyFacts>

      <h2 id="jadval">Current plans</h2>
      <PremiumPlanBoard locale="en" flow="username" />
      <PremiumPlanBoard locale="en" flow="login" />

      <h2 id="uzoq">Why a longer subscription is better value</h2>
      <p>
        The longer the term, the lower the price per month. A twelve-month subscription is markedly better value than
        a one-month one, so the annual option suits anyone planning to use Telegram heavily over time.
      </p>

      <InlineCta text="Choose a term — see the final total." />

      <h2 id="rasmiy">The official price versus alternatives</h2>
      <p>
        Buying through the official app can add App Store or Google Play fees that raise the price. That is why many
        people prefer a local service — payment in so‘m, with no conversion.
      </p>

      <h2 id="tekshirish">How to check the price</h2>
      <Steps>
        <Step title="1. Open the bot">@StarsPaymee_bot.</Step>
        <Step title="2. Choose the Premium section">The list of plans appears.</Step>
        <Step title="3. Set a term">The final total is shown.</Step>
        <Step title="4. Confirm">A confirmed total does not change.</Step>
      </Steps>

      <p>
        See: <Link href="/blog/telegram-premium-sotib-olish">buying Premium</Link>,{" "}
        <Link href="/blog/arzon-telegram-premium">getting it cheaper</Link> and{" "}
        <Link href="/blog/bir-oylik-premium-olish">the one-month option</Link>.
      </p>

      <Sources
        label="Sources"
        items={[
          { href: "https://telegram.org/faq_premium", label: "telegram.org/faq_premium", note: "official Telegram Premium FAQ" },
          { href: "https://cbu.uz/", label: "cbu.uz", note: "Central Bank — exchange rates" },
        ]}
      />
    </>
  );
}

const uzFaq = [
  { question: "Telegram Premium narxi qancha?", answer: "Username orqali 3 oy 172 000, 6 oy 232 000, 12 oy 422 000 so‘m; login oqimida 1 oy 50 000, 12 oy 300 000 so‘m." },
  { question: "Qaysi muddat tejamli?", answer: "12 oylik — oyiga tushadigan xarajat eng past." },
  { question: "1 oylik variant qayerda?", answer: "Akkauntga kirib berish (login) oqimida." },
  { question: "Narx nega platformaga qarab farq qiladi?", answer: "App Store va Google Play o‘z komissiyasini qo‘shadi." },
  { question: "Narx o‘zgaradimi?", answer: "Bozor sharoitiga qarab yangilanishi mumkin — botda joriy narxni tekshiring." },
  { question: "Tasdiqlangan summa o‘zgaradimi?", answer: "Yo‘q, buyurtma tasdiqlangach summa qat’iy." },
  { question: "Qaysi valyutada to‘layman?", answer: "So‘mda (UZS); rublda faqat SBP orqali." },
  { question: "Chegirma bo‘ladimi?", answer: "Aksiyalar davriy bo‘lib turadi — botni kuzatib boring." },
];

const ruFaq = [
  { question: "Сколько стоит Telegram Premium?", answer: "По username: 3 мес. 172 000, 6 мес. 232 000, 12 мес. 422 000 сум; со входом: 1 мес. 50 000, 12 мес. 300 000 сум." },
  { question: "Какой срок выгоднее?", answer: "12 месяцев — самая низкая стоимость в пересчёте на месяц." },
  { question: "Где вариант на 1 месяц?", answer: "В сценарии со входом в аккаунт (login)." },
  { question: "Почему цена зависит от платформы?", answer: "App Store и Google Play добавляют свою комиссию." },
  { question: "Меняется ли цена?", answer: "Может обновляться по рыночным условиям — проверяйте в боте." },
  { question: "Меняется ли подтверждённая сумма?", answer: "Нет, после подтверждения заказа сумма фиксирована." },
  { question: "В какой валюте оплата?", answer: "В сумах (UZS); в рублях — только через СБП." },
  { question: "Бывают ли скидки?", answer: "Акции проходят периодически — следите за ботом." },
];

const enFaq = [
  { question: "How much does Telegram Premium cost?", answer: "By username: 3 mo 172,000, 6 mo 232,000, 12 mo 422,000 UZS; with login: 1 mo 50,000, 12 mo 300,000 UZS." },
  { question: "Which term is best value?", answer: "Twelve months — the lowest effective monthly cost." },
  { question: "Where is the one-month option?", answer: "In the account-login flow." },
  { question: "Why does the price depend on the platform?", answer: "App Store and Google Play add their own fee." },
  { question: "Do prices change?", answer: "They can update with market conditions — check in the bot." },
  { question: "Can a confirmed total change?", answer: "No, once the order is confirmed the amount is fixed." },
  { question: "Which currency do I pay in?", answer: "So‘m (UZS); roubles only through SBP." },
  { question: "Are there discounts?", answer: "Promotions run periodically — keep an eye on the bot." },
];

export const post: AeoPost = {
  slug: SLUG,
  category: "Premium",
  type: "info",
  datePublished: "2026-08-02",
  dateModified: "2026-08-02",
  keywords: [
    "telegram premium narxi",
    "premium narxi qancha",
    "telegram premium oylik narx",
    "premium yillik narx",
    "telegram premium tarif 2026",
    "premium narx uzbekistan",
  ],
  locales: {
    uz: {
      title: "Telegram Premium narxi qancha (oylik/yillik)",
      excerpt:
        "Telegram Premium tariflari: 1, 3, 6 va 12 oylik narxlar, narxga ta’sir qiluvchi omillar va uzoq muddatli obuna nega tejamli.",
      metaTitle: "Telegram Premium narxi — oylik va yillik tariflar",
      metaDescription:
        "Telegram Premium narxi: 3 oy 172 000, 6 oy 232 000, 12 oy 422 000 so‘m; 1 oy 50 000 so‘m. Narxga ta’sir qiluvchi omillar.",
      answerTitle: "Qisqa javob",
      Answer: UzAnswer,
      Body: UzBody,
      ctaHeading: "Tarifni tanlang",
      ctaBody: "@StarsPaymee_bot da muddatni belgilang — yakuniy summa darhol ko‘rinadi.",
      faq: uzFaq,
    },
    ru: {
      title: "Сколько стоит Telegram Premium (месяц/год)",
      excerpt:
        "Тарифы Telegram Premium: цены на 1, 3, 6 и 12 месяцев, факторы, влияющие на цену, и почему длительная подписка выгоднее.",
      metaTitle: "Цена Telegram Premium — месячные и годовые тарифы",
      metaDescription:
        "Цена Telegram Premium: 3 мес. 172 000, 6 мес. 232 000, 12 мес. 422 000 сум; 1 мес. 50 000 сум. Что влияет на цену.",
      answerTitle: "Краткий ответ",
      Answer: RuAnswer,
      Body: RuBody,
      ctaHeading: "Выберите тариф",
      ctaBody: "Укажите срок в @StarsPaymee_bot — итоговая сумма появится сразу.",
      faq: ruFaq,
    },
    en: {
      title: "How much Telegram Premium costs (monthly/yearly)",
      excerpt:
        "Telegram Premium plans: prices for 1, 3, 6 and 12 months, the factors that affect them, and why a longer subscription is better value.",
      metaTitle: "Telegram Premium price — monthly and yearly plans",
      metaDescription:
        "Telegram Premium price: 3 mo 172,000, 6 mo 232,000, 12 mo 422,000 UZS; 1 mo 50,000 UZS. What affects the price.",
      answerTitle: "Short answer",
      Answer: EnAnswer,
      Body: EnBody,
      ctaHeading: "Pick a plan",
      ctaBody: "Set a term in @StarsPaymee_bot — the final total appears instantly.",
      faq: enFaq,
    },
  },
};
