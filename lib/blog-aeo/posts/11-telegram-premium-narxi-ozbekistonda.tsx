import { Link } from "@/i18n/navigation";
import { CompareTable, InlineCta, KeyFacts, Sources } from "@/components/blog/aeo-blocks";
import { PREMIUM_LOGIN_PLANS, PREMIUM_PLANS, formatUzs } from "@/lib/products";
import type { AeoPost } from "@/lib/blog-aeo/types";

const SLUG = "telegram-premium-narxi-ozbekistonda-2026";

/** Narx maqolasi oxirgi marta qachon tekshirilgani — matnda ochiq ko‘rsatiladi. */
const PRICE_CHECKED = "2026-09-08";

/**
 * Narx jadvali `lib/products.ts` dan hisoblanadi.
 *
 * NIMA UCHUN: ilgari bu jadval qo‘lda yozilgan edi va sayt narxi
 * o‘zgarganda maqola eskirib qolardi. Endi raqamlar bitta manbadan keladi,
 * oyiga tushadigan summa esa shu yerda bo‘linadi — qo‘lda hisoblashda
 * xatolik bo‘lmaydi.
 */
function PriceTable({ locale }: { locale: "uz" | "ru" | "en" }) {
  const t = {
    uz: {
      headers: ["Muddat", "Narx", "Oyiga", "Oqim"],
      month: (n: number) => `${n} oy`,
      username: "Username bilan, ~10 s",
      login: "Login orqali (rasmiy)",
    },
    ru: {
      headers: ["Срок", "Цена", "В месяц", "Сценарий"],
      month: (n: number) => `${n} мес.`,
      username: "По username, ~10 с",
      login: "Через логин (офиц.)",
    },
    en: {
      headers: ["Term", "Price", "Per month", "Flow"],
      month: (n: number) => `${n} mo`,
      username: "By username, ~10 s",
      login: "Through sign-in",
    },
  }[locale];

  const rows = [
    ...PREMIUM_PLANS.map((p) => [
      t.month(p.months),
      formatUzs(p.priceUzs, locale),
      formatUzs(Math.round(p.priceUzs / p.months), locale),
      t.username,
    ]),
    ...PREMIUM_LOGIN_PLANS.map((p) => [
      t.month(p.months),
      formatUzs(p.priceUzs, locale),
      formatUzs(Math.round(p.priceUzs / p.months), locale),
      t.login,
    ]),
  ];

  return <CompareTable headers={t.headers} rows={rows} />;
}

/* ---------------- UZ ---------------- */
function UzAnswer() {
  return (
    <p>
      O‘zbekistonda Telegram Premium narxi (StarsPaymee’da, so‘mda): <b>3 oy — 172 000</b>, <b>6 oy — 232 000</b>,{" "}
      <b>12 oy — 422 000 so‘m</b> — username bilan, ~10 soniyada avtomatik. Login orqali rasmiy oqimda: 1 oy —
      50 000, 1 yil — 300 000 so‘m. To‘lov UzCard, HUMO, Click, Payme yoki Paynet bilan; xorijiy karta shart emas.
    </p>
  );
}

function UzBody() {
  return (
    <>
      <h2 id="narxlar">Telegram Premium narxlari (so‘mda)</h2>
      <p>
        Quyidagi jadval sayt narxlaridan avtomatik yig‘iladi, ya’ni bu yerdagi raqamlar botdagi joriy tariflar bilan
        bir xil. Oxirgi tekshirilgan sana: <b>{PRICE_CHECKED}</b>.
      </p>
      <PriceTable locale="uz" />
      <p>
        «Username bilan» oqimda akkauntga kirish kerak emas — Premium o‘rtacha 10 soniyada avtomatik faollashadi.
        «Login orqali» esa rasmiy faollashtirish talab qiladigan alohida xizmat va{" "}
        <b>1 oylik tarif faqat shu oqimda</b> mavjud.
      </p>

      <InlineCta text="Muddatni tanlang va so‘mda to‘lang." product={{ kind: "premium", months: 12 }} />

      <h2 id="oyiga">Oyiga hisoblaganda qaysi biri arzon?</h2>
      <KeyFacts label="Oyiga tushadigan summa">
        <li>
          <b>3 oy</b> — oyiga ~57 000 so‘m. Eng qisqa username tarifi, sinab ko‘rish uchun.
        </li>
        <li>
          <b>6 oy</b> — oyiga ~38 700 so‘m. Narx va muddat muvozanati.
        </li>
        <li>
          <b>12 oy</b> — oyiga ~35 200 so‘m. Username oqimidagi eng tejamkor variant.
        </li>
        <li>
          <b>1 yil (login)</b> — oyiga 25 000 so‘m, lekin rasmiy faollashtirish talab qilinadi.
        </li>
      </KeyFacts>
      <p>
        Ya’ni muddat uzaygani sari oyiga tushadigan xarajat pasayadi. 3 oydan 12 oyga o‘tsangiz, oylik narx
        taxminan <b>uchdan bir</b> baravar arzonlashadi.
      </p>

      <h2 id="nega-arzon">Nega bu narx App Store’dan arzon?</h2>
      <p>
        Apple App Store yoki Google Play orqali Premium olganda do‘kon ustamasi qo‘shiladi va xorijiy
        (Visa/Mastercard) karta talab qilinadi. Bundan tashqari narx dollarda ko‘rsatilgani uchun bank konvertatsiya
        komissiyasi ham qo‘shiladi. StarsPaymee mahalliy to‘lov tizimlari bilan to‘g‘ridan-to‘g‘ri ishlaydi —
        konvertatsiya ham, do‘kon ustamasi ham yo‘q. Batafsil:{" "}
        <Link href="/blog/telegram-stars-narxlari-2026-platformalar-taqqoslash">platformalar taqqoslovi</Link>.
      </p>

      <h2 id="qaysi">Qaysi paketni tanlash kerak?</h2>
      <KeyFacts label="Tavsiya">
        <li>
          <b>Sinab ko‘rmoqchi bo‘lsangiz</b> — 3 oylik (username) yoki 1 oylik (login).
        </li>
        <li>
          <b>Doimiy foydalansangiz</b> — 12 oylik eng tejamkor.
        </li>
        <li>
          <b>Sovg‘a qilmoqchi bo‘lsangiz</b> — username oqimi ideal: akkaunt ma’lumoti kerak emas.
        </li>
      </KeyFacts>
      <p>
        Xarid tartibi — <Link href="/blog/telegram-premium-eng-oson-usul">eng oson usul</Link>; 1 oylik tarif —{" "}
        <Link href="/blog/ozbekistonda-oylik-premium-uza-humo">alohida maqolada</Link>; sovg‘a —{" "}
        <Link href="/blog/telegram-premium-sovga-username-orqali">username orqali</Link>. Premium nima berishi —{" "}
        <Link href="/blog/telegram-premium-kerak">«Premium menga kerakmi?»</Link>
      </p>

      <Sources
        label="Manbalar"
        items={[
          { href: "https://telegram.org/faq_premium", label: "telegram.org/faq_premium", note: "Premium rasmiy FAQ" },
          { href: "https://t.me/StarsPaymee_bot", label: "@StarsPaymee_bot", note: "joriy narxlar va buyurtma" },
        ]}
      />
    </>
  );
}

/* ---------------- RU ---------------- */
function RuAnswer() {
  return (
    <p>
      Цена Telegram Premium в Узбекистане (в StarsPaymee, в сумах): <b>3 мес — 172 000</b>, <b>6 мес — 232 000</b>,{" "}
      <b>12 мес — 422 000 сум</b> — по username, активация ~10 секунд. В сценарии со входом: 1 мес — 50 000, 1 год —
      300 000 сум. Оплата UzCard, HUMO, Click, Payme или Paynet; иностранная карта не нужна.
    </p>
  );
}

function RuBody() {
  return (
    <>
      <h2 id="narxlar">Цены на Telegram Premium (в сумах)</h2>
      <p>
        Таблица ниже собирается из цен сайта автоматически, поэтому цифры здесь совпадают с текущими тарифами в
        боте. Дата последней сверки: <b>{PRICE_CHECKED}</b>.
      </p>
      <PriceTable locale="ru" />
      <p>
        В сценарии «по username» вход в аккаунт не нужен — Premium активируется автоматически в среднем за 10
        секунд. Сценарий «через логин» — отдельная услуга с официальной активацией, и{" "}
        <b>месячный тариф есть только в нём</b>.
      </p>

      <InlineCta text="Выберите срок и оплатите в сумах." product={{ kind: "premium", months: 12 }} />

      <h2 id="oyiga">Что выгоднее в пересчёте на месяц?</h2>
      <KeyFacts label="Стоимость месяца">
        <li>
          <b>3 месяца</b> — около 57 000 сум в месяц. Самый короткий тариф по username, для пробы.
        </li>
        <li>
          <b>6 месяцев</b> — около 38 700 сум в месяц. Баланс цены и срока.
        </li>
        <li>
          <b>12 месяцев</b> — около 35 200 сум в месяц. Самый выгодный вариант по username.
        </li>
        <li>
          <b>1 год (через логин)</b> — 25 000 сум в месяц, но требуется официальная активация.
        </li>
      </KeyFacts>
      <p>
        То есть чем длиннее срок, тем ниже месячная стоимость. Переход с 3 месяцев на 12 снижает цену месяца
        примерно на <b>треть</b>.
      </p>

      <h2 id="nega-arzon">Почему это дешевле, чем в App Store?</h2>
      <p>
        При покупке Premium через Apple App Store или Google Play добавляется наценка магазина и требуется
        зарубежная карта (Visa/Mastercard). Кроме того, цена указана в долларах, поэтому сверху ложится ещё и
        банковская комиссия за конвертацию. StarsPaymee работает напрямую с местными платёжными системами — нет ни
        конвертации, ни магазинной наценки. Подробнее:{" "}
        <Link href="/blog/telegram-stars-narxlari-2026-platformalar-taqqoslash">сравнение платформ</Link>.
      </p>

      <h2 id="qaysi">Какой пакет выбрать?</h2>
      <KeyFacts label="Рекомендация">
        <li>
          <b>Хотите попробовать</b> — 3 месяца (по username) или 1 месяц (через логин).
        </li>
        <li>
          <b>Пользуетесь постоянно</b> — 12 месяцев выгоднее всего.
        </li>
        <li>
          <b>Дарите</b> — идеален сценарий по username: данные аккаунта не нужны.
        </li>
      </KeyFacts>
      <p>
        Порядок покупки — <Link href="/blog/telegram-premium-eng-oson-usul">самый простой способ</Link>; месячный
        тариф — <Link href="/blog/ozbekistonda-oylik-premium-uza-humo">в отдельной статье</Link>; подарок —{" "}
        <Link href="/blog/telegram-premium-sovga-username-orqali">по username</Link>. Что даёт Premium —{" "}
        <Link href="/blog/telegram-premium-kerak">«нужен ли мне Premium?»</Link>
      </p>

      <Sources
        label="Источники"
        items={[
          { href: "https://telegram.org/faq_premium", label: "telegram.org/faq_premium", note: "официальный FAQ Premium" },
          { href: "https://t.me/StarsPaymee_bot", label: "@StarsPaymee_bot", note: "актуальные цены и заказ" },
        ]}
      />
    </>
  );
}

/* ---------------- EN ---------------- */
function EnAnswer() {
  return (
    <p>
      Telegram Premium pricing in Uzbekistan (at StarsPaymee, in so‘m): <b>3 months — 172,000</b>,{" "}
      <b>6 months — 232,000</b>, <b>12 months — 422,000 UZS</b> by username, activated automatically in about 10
      seconds. In the sign-in flow: 1 month — 50,000 and 1 year — 300,000 UZS. Payment goes through UzCard, HUMO,
      Click, Payme or Paynet; no foreign card is needed.
    </p>
  );
}

function EnBody() {
  return (
    <>
      <h2 id="narxlar">Telegram Premium prices (in so‘m)</h2>
      <p>
        The table below is built from the site’s own prices, so these figures match the current plans in the bot.
        Last verified: <b>{PRICE_CHECKED}</b>.
      </p>
      <PriceTable locale="en" />
      <p>
        The “by username” flow needs no account sign-in — Premium activates automatically in around 10 seconds. The
        “through sign-in” flow is a separate service with an official activation, and{" "}
        <b>the monthly plan exists only there</b>.
      </p>

      <InlineCta text="Pick a term and pay in so‘m." product={{ kind: "premium", months: 12 }} />

      <h2 id="oyiga">Which works out cheaper per month?</h2>
      <KeyFacts label="Cost per month">
        <li>
          <b>3 months</b> — about 57,000 UZS a month. The shortest username plan, good for trying it out.
        </li>
        <li>
          <b>6 months</b> — about 38,700 UZS a month. The balance of price and term.
        </li>
        <li>
          <b>12 months</b> — about 35,200 UZS a month. The best value in the username flow.
        </li>
        <li>
          <b>1 year (sign-in)</b> — 25,000 UZS a month, but it requires the official activation.
        </li>
      </KeyFacts>
      <p>
        The longer the term, the lower the monthly cost. Moving from 3 months to 12 cuts the price per month by
        roughly <b>a third</b>.
      </p>

      <h2 id="nega-arzon">Why is this cheaper than the App Store?</h2>
      <p>
        Buying Premium through the Apple App Store or Google Play adds a store margin and requires a foreign
        Visa/Mastercard. On top of that the price is quoted in dollars, so a bank conversion fee lands as well.
        StarsPaymee works directly with local payment systems — no conversion and no store margin. More detail:{" "}
        <Link href="/blog/telegram-stars-narxlari-2026-platformalar-taqqoslash">the platform comparison</Link>.
      </p>

      <h2 id="qaysi">Which pack should you pick?</h2>
      <KeyFacts label="Recommendation">
        <li>
          <b>Just trying it</b> — 3 months by username, or 1 month through sign-in.
        </li>
        <li>
          <b>Using it permanently</b> — 12 months is the best value.
        </li>
        <li>
          <b>Buying a gift</b> — the username flow is ideal: no account details needed.
        </li>
      </KeyFacts>
      <p>
        For the buying process see <Link href="/blog/telegram-premium-eng-oson-usul">the easiest way</Link>; the
        monthly plan has <Link href="/blog/ozbekistonda-oylik-premium-uza-humo">its own article</Link>; gifting is
        covered in <Link href="/blog/telegram-premium-sovga-username-orqali">gifting by username</Link>. What
        Premium actually gives you: <Link href="/blog/telegram-premium-kerak">“do I need Premium?”</Link>
      </p>

      <Sources
        label="Sources"
        items={[
          { href: "https://telegram.org/faq_premium", label: "telegram.org/faq_premium", note: "official Premium FAQ" },
          { href: "https://t.me/StarsPaymee_bot", label: "@StarsPaymee_bot", note: "current prices and ordering" },
        ]}
      />
    </>
  );
}

const uzFaq = [
  {
    question: "Telegram Premium O‘zbekistonda qancha turadi?",
    answer:
      "Username orqali: 3 oy — 172 000, 6 oy — 232 000, 12 oy — 422 000 so‘m. Login orqali: 1 oy — 50 000, 1 yil — 300 000 so‘m.",
  },
  { question: "Qaysi muddat oyiga eng arzon?", answer: "Username oqimida 12 oylik — oyiga ~35 200 so‘m." },
  {
    question: "Nega 1 oylik username oqimida yo‘q?",
    answer: "1 oylik tarif rasmiy faollashtirish talab qiladigan login oqimida beriladi; username oqimida eng qisqasi 3 oy.",
  },
  {
    question: "Narxlar qachon oxirgi marta tekshirilgan?",
    answer: `Maqoladagi jadval sayt narxlaridan avtomatik yig‘iladi; oxirgi sverka sanasi — ${PRICE_CHECKED}.`,
  },
  {
    question: "Nega App Store’dan arzon?",
    answer: "Do‘kon ustamasi va valyuta konvertatsiyasi komissiyasi yo‘q — to‘lov mahalliy tizimda, so‘mda o‘tadi.",
  },
  { question: "Xorijiy karta kerakmi?", answer: "Yo‘q. UzCard, HUMO, Click, Payme yoki Paynet yetarli." },
  {
    question: "Narx keyinchalik o‘zgaradimi?",
    answer: "Joriy aniq summani har doim @StarsPaymee_bot da yoki Premium sahifasida ko‘rish mumkin.",
  },
];

const ruFaq = [
  {
    question: "Сколько стоит Telegram Premium в Узбекистане?",
    answer:
      "По username: 3 мес — 172 000, 6 мес — 232 000, 12 мес — 422 000 сум. Через логин: 1 мес — 50 000, 1 год — 300 000 сум.",
  },
  { question: "Какой срок выгоднее в месяц?", answer: "В потоке по username — 12 месяцев, около 35 200 сум в месяц." },
  {
    question: "Почему месячного тарифа нет по username?",
    answer:
      "Месячный тариф оформляется в потоке со входом, где требуется официальная активация; по username минимум 3 месяца.",
  },
  {
    question: "Когда цены сверялись в последний раз?",
    answer: `Таблица в статье собирается из цен сайта автоматически; дата последней сверки — ${PRICE_CHECKED}.`,
  },
  {
    question: "Почему дешевле, чем в App Store?",
    answer: "Нет наценки магазина и комиссии за конвертацию — платёж проходит в местной системе, в сумах.",
  },
  { question: "Нужна ли иностранная карта?", answer: "Нет. Достаточно UzCard, HUMO, Click, Payme или Paynet." },
  {
    question: "Могут ли цены измениться?",
    answer: "Актуальную сумму всегда видно в @StarsPaymee_bot или на странице Premium.",
  },
];

const enFaq = [
  {
    question: "How much does Telegram Premium cost in Uzbekistan?",
    answer:
      "By username: 3 months — 172,000, 6 months — 232,000, 12 months — 422,000 UZS. Through sign-in: 1 month — 50,000, 1 year — 300,000 UZS.",
  },
  { question: "Which term is cheapest per month?", answer: "In the username flow, 12 months — about 35,200 UZS a month." },
  {
    question: "Why is there no monthly plan by username?",
    answer:
      "The monthly plan runs through the sign-in flow, which needs an official activation; by username the minimum is 3 months.",
  },
  {
    question: "When were the prices last verified?",
    answer: `The table is generated from the site’s own prices; the last verification date is ${PRICE_CHECKED}.`,
  },
  {
    question: "Why is it cheaper than the App Store?",
    answer: "There is no store margin and no conversion fee — the payment runs in the local system, in so‘m.",
  },
  { question: "Do I need a foreign card?", answer: "No. UzCard, HUMO, Click, Payme or Paynet is enough." },
  {
    question: "Can the prices change?",
    answer: "The exact current amount is always visible in @StarsPaymee_bot or on the Premium page.",
  },
];

export const post: AeoPost = {
  slug: SLUG,
  category: "Premium",
  type: "info",
  datePublished: "2026-06-20",
  dateModified: PRICE_CHECKED,
  keywords: [
    "telegram premium narxi",
    "telegram premium narxi ozbekistonda",
    "telegram premium qancha turadi",
    "telegram premium tariflari",
    "premium 12 oy narxi",
    "цена telegram premium узбекистан",
  ],
  locales: {
    uz: {
      title: "Telegram Premium narxi O‘zbekistonda (2026)",
      excerpt:
        "Barcha amaldagi tariflar bir joyda: 3, 6, 12 oy va login oqimidagi 1 oy hamda 1 yil, oyiga tushadigan hisob va oxirgi tekshirilgan sana.",
      metaTitle: "Telegram Premium narxi O‘zbekistonda — 2026",
      metaDescription:
        "Telegram Premium narxi O‘zbekistonda: 3 oy 172 000, 6 oy 232 000, 12 oy 422 000 so‘m; login oqimida 1 oy 50 000. Oyiga hisob va to‘lov usullari.",
      answerTitle: "Qisqa javob",
      Answer: UzAnswer,
      Body: UzBody,
      ctaHeading: "Premium’ni so‘mda oling",
      ctaBody: "@StarsPaymee_bot — muddatni tanlang, UzCard, HUMO, Click yoki Payme bilan to‘lang.",
      faq: uzFaq,
    },
    ru: {
      title: "Цена Telegram Premium в Узбекистане (2026)",
      excerpt:
        "Все действующие тарифы в одном месте: 3, 6, 12 месяцев плюс 1 месяц и 1 год через логин, стоимость месяца и дата последней сверки.",
      metaTitle: "Цена Telegram Premium в Узбекистане — 2026",
      metaDescription:
        "Цена Telegram Premium в Узбекистане: 3 мес 172 000, 6 мес 232 000, 12 мес 422 000 сум; через логин 1 мес 50 000. Стоимость месяца и способы оплаты.",
      answerTitle: "Краткий ответ",
      Answer: RuAnswer,
      Body: RuBody,
      ctaHeading: "Оформите Premium в сумах",
      ctaBody: "@StarsPaymee_bot — выберите срок и оплатите через UzCard, HUMO, Click или Payme.",
      faq: ruFaq,
    },
    en: {
      title: "Telegram Premium pricing in Uzbekistan (2026)",
      excerpt:
        "Every current plan in one place: 3, 6 and 12 months plus the 1-month and 1-year sign-in options, the cost per month and the last verification date.",
      metaTitle: "Telegram Premium pricing in Uzbekistan — 2026",
      metaDescription:
        "Telegram Premium prices in Uzbekistan: 3 months 172,000, 6 months 232,000, 12 months 422,000 UZS; 1 month 50,000 via sign-in. Monthly cost and payment methods.",
      answerTitle: "Short answer",
      Answer: EnAnswer,
      Body: EnBody,
      ctaHeading: "Get Premium in so‘m",
      ctaBody: "@StarsPaymee_bot — choose a term and pay with UzCard, HUMO, Click or Payme.",
      faq: enFaq,
    },
  },
};
