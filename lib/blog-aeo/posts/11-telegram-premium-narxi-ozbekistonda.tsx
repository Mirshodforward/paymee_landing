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
      O‘zbekistonda Telegram Premium narxi (StarsPaymee’da, so‘mda): <b>1 oy — 45 000</b>, <b>3 oy — 160 000</b>,{" "}
      <b>6 oy — 215 000</b>, <b>12 oy — 388 000 so‘m</b> — to‘rtalasi ham username bilan, ~10 soniyada
      avtomatik. To‘lov UzCard, HUMO, Click, Payme, Uzum yoki Paynet bilan; xorijiy karta shart emas.
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
        «Login orqali» esa rasmiy faollashtirish talab qiladigan alohida xizmat: u faqat nostandart holatlar uchun
        qolgan va shartlari qo‘llab-quvvatlash orqali aniqlanadi. <b>1 oylik tarif ham username oqimida</b> —
        2026-yil sentabridan beri.
      </p>

      <InlineCta text="Muddatni tanlang va so‘mda to‘lang." product={{ kind: "premium", months: 12 }} />

      <h2 id="oyiga">Oyiga hisoblaganda qaysi biri arzon?</h2>
      <KeyFacts label="Oyiga tushadigan summa">
        <li>
          <b>1 oy</b> — 45 000 so‘m, ya’ni oyiga 45 000.
        </li>
        <li>
          <b>3 oy</b> — 160 000 so‘m, ya’ni oyiga ~53 300. Bu 1 oylikdan qimmatroq: qisqa muddatga majburiyatsiz
          variant sifatida tanlanadi.
        </li>
        <li>
          <b>6 oy</b> — 215 000 so‘m, oyiga ~35 800. Narx va muddat muvozanati.
        </li>
        <li>
          <b>12 oy</b> — 388 000 so‘m, oyiga ~32 300. Eng tejamkor variant.
        </li>
      </KeyFacts>
      <p>
        Demak «muddat uzaysa doim arzon» degani noto‘g‘ri bo‘lardi: eng tejamkori — 12 oylik, u 1 oylikka nisbatan
        oyiga taxminan <b>28% arzon</b> (32 300 vs 45 000). 6 oylik ~20% arzon. 3 oylik esa oyiga hisoblaganda
        1 oylikdan qimmat — uni faqat aniq uch oy kerak bo‘lganda olish mantiqiy.
      </p>

      <h2 id="tolov">To‘lov usullari: Visa ham, karta ham shart emas</h2>
      <p>
        Rasmiy yo‘ldan asosiy farq shu: xalqaro Visa/Mastercard kerak emas va akkauntingizga kirish so‘ralmaydi.
        So‘mda to‘lanadi, konvertatsiya yo‘q.
      </p>
      <ul>
        <li>
          <b>UzCard va HUMO</b> — karta raqami bilan to‘g‘ridan-to‘g‘ri.
        </li>
        <li>
          <b>Click</b> va <b>Payme</b> — ilova orqali bir bosishda:{" "}
          <Link href="/blog/click-payme-orqali-telegram-stars-sotib-olish">Click qo‘llanmasi</Link>,{" "}
          <Link href="/blog/payme-orqali-stars-va-premium-sotib-olish">Payme qo‘llanmasi</Link>.
        </li>
        <li>
          <b>Naqd pul</b> — botda «naqd» yoki «Paynet» degan alohida tugma <b>yo‘q</b>: naqd pul avval terminal,
          bank kassasi yoki cash-in bankomat orqali kartaga yoki Click/Payme hamyoniga tushadi, keyin botda oddiy
          to‘lov tanlanadi.{" "}
          <Link href="/blog/naqd-pul-bilan-telegram-stars-sotib-olish">Batafsil qo‘llanma</Link>.
        </li>
        <li>
          <b>Rubl (SBP)</b> — Rossiyadan to‘laganda telefon raqami yoki QR orqali, karta rekvizitisiz.
        </li>
      </ul>
      <p>
        Narx aksiya davrlarida o‘zgarishi mumkin, shuning uchun yakuniy summani buyurtma paytida botda ko‘rib oling —
        ko‘rsatilgan raqam yakuniy bo‘ladi.
      </p>

      <h2 id="nega-arzon">Nega bu narx App Store’dan arzon?</h2>
      <p>
        Apple App Store yoki Google Play orqali Premium olganda do‘kon ustamasi qo‘shiladi va xorijiy
        (Visa/Mastercard) karta talab qilinadi. Bundan tashqari narx dollarda ko‘rsatilgani uchun bank konvertatsiya
        komissiyasi ham qo‘shiladi. StarsPaymee mahalliy to‘lov tizimlari bilan to‘g‘ridan-to‘g‘ri ishlaydi —
        konvertatsiya ham, do‘kon ustamasi ham yo‘q. Batafsil:{" "}
        platformalar taqqoslovi.
      </p>

      <h2 id="qaysi">Qaysi paketni tanlash kerak?</h2>
      <KeyFacts label="Tavsiya">
        <li>
          <b>Sinab ko‘rmoqchi bo‘lsangiz</b> — 1 oylik: eng kam summa va oyiga eng past majburiyat.
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
      Цена Telegram Premium в Узбекистане (в StarsPaymee, в сумах): <b>1 мес — 45 000</b>, <b>3 мес — 160 000</b>,{" "}
      <b>6 мес — 215 000</b>, <b>12 мес — 388 000 сум</b> — все четыре по username, активация ~10 секунд.
      Оплата UzCard, HUMO, Click, Payme, Uzum или Paynet; иностранная карта не нужна.
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
          <b>1 месяц</b> — 45 000 сум, то есть 45 000 в месяц.
        </li>
        <li>
          <b>3 месяца</b> — 160 000 сум, то есть около 53 300 в месяц. Это дороже месячного тарифа: вариант для
          короткого срока без обязательств.
        </li>
        <li>
          <b>6 месяцев</b> — 215 000 сум, около 35 800 в месяц. Баланс цены и срока.
        </li>
        <li>
          <b>12 месяцев</b> — 388 000 сум, около 32 300 в месяц. Самый выгодный вариант.
        </li>
      </KeyFacts>
      <p>
        Значит, утверждение «чем дольше, тем всегда дешевле» было бы неверным: самый выгодный — годовой тариф, он
        примерно на <b>28% дешевле</b> месячного в пересчёте на месяц (32 300 против 45 000). Полугодовой дешевле
        примерно на 20%. А трёхмесячный в пересчёте на месяц дороже месячного — его берут, когда нужны именно три
        месяца.
      </p>

      <h2 id="tolov">Способы оплаты: ни Visa, ни даже карты</h2>
      <p>
        Главное отличие от официального пути: международная Visa/Mastercard не нужна, вход в аккаунт не
        запрашивается. Оплата в сумах, без конвертации.
      </p>
      <ul>
        <li>
          <b>UzCard и HUMO</b> — напрямую по номеру карты.
        </li>
        <li>
          <b>Click</b> и <b>Payme</b> — в одно касание через приложение:{" "}
          <Link href="/blog/click-payme-orqali-telegram-stars-sotib-olish">руководство по Click</Link>,{" "}
          <Link href="/blog/payme-orqali-stars-va-premium-sotib-olish">руководство по Payme</Link>.
        </li>
        <li>
          <b>Наличные</b> — отдельной кнопки «наличные» или «Paynet» в боте <b>нет</b>: наличные сначала вносятся
          через терминал, кассу банка или cash-in банкомат на карту либо в кошелёк Click/Payme, а в боте затем
          выбирается обычная оплата.{" "}
          <Link href="/blog/naqd-pul-bilan-telegram-stars-sotib-olish">Подробное руководство</Link>.
        </li>
        <li>
          <b>Рубли (СБП)</b> — при оплате из России по номеру телефона или QR, без реквизитов карты.
        </li>
      </ul>
      <p>
        В периоды акций цена может меняться, поэтому итоговую сумму смотрите в боте при заказе — показанное число и
        есть окончательное.
      </p>

      <h2 id="nega-arzon">Почему это дешевле, чем в App Store?</h2>
      <p>
        При покупке Premium через Apple App Store или Google Play добавляется наценка магазина и требуется
        зарубежная карта (Visa/Mastercard). Кроме того, цена указана в долларах, поэтому сверху ложится ещё и
        банковская комиссия за конвертацию. StarsPaymee работает напрямую с местными платёжными системами — нет ни
        конвертации, ни магазинной наценки. Подробнее:{" "}
        сравнение платформ.
      </p>

      <h2 id="qaysi">Какой пакет выбрать?</h2>
      <KeyFacts label="Рекомендация">
        <li>
          <b>Хотите попробовать</b> — 1 месяц по username.
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
      Telegram Premium pricing in Uzbekistan (at StarsPaymee, in so‘m): <b>1 month — 45,000</b>,{" "}
      <b>3 months — 160,000</b>, <b>6 months — 215,000</b>, <b>12 months — 388,000 UZS</b> — all four by
      username, activated automatically in about 10 seconds. Payment goes through UzCard, HUMO, Click, Payme,
      Uzum or Paynet; no foreign card is needed.
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
          <b>1 month</b> — 45,000 UZS, i.e. 45,000 per month.
        </li>
        <li>
          <b>3 months</b> — 160,000 UZS, i.e. about 53,300 per month. That is more than the monthly plan: it suits a
          short term with no commitment.
        </li>
        <li>
          <b>6 months</b> — 215,000 UZS, about 35,800 per month. The balance of price and term.
        </li>
        <li>
          <b>12 months</b> — 388,000 UZS, about 32,300 per month. The best value.
        </li>
      </KeyFacts>
      <p>
        So “longer is always cheaper” would be wrong: the best value is the yearly plan, about <b>28% cheaper</b> per
        month than the monthly one (32,300 vs 45,000). Six months is about 20% cheaper. Three months actually costs
        more per month than the monthly plan — take it when you specifically need three months.
      </p>

      <h2 id="tolov">Payment methods: no Visa, and not even a card</h2>
      <p>
        The key difference from the official route: no international Visa/Mastercard, and no account sign-in.
        Payment is in so&lsquo;m, with no conversion.
      </p>
      <ul>
        <li>
          <b>UzCard and HUMO</b> — straight from the card number.
        </li>
        <li>
          <b>Click</b> and <b>Payme</b> — one tap in the app:{" "}
          <Link href="/blog/click-payme-orqali-telegram-stars-sotib-olish">the Click guide</Link>,{" "}
          <Link href="/blog/payme-orqali-stars-va-premium-sotib-olish">the Payme guide</Link>.
        </li>
        <li>
          <b>Cash</b> — there is <b>no</b> separate “cash” or “Paynet” button in the bot: cash first goes onto a card
          or into a Click/Payme wallet at a terminal, a bank desk or a cash-in ATM, and then you pick the ordinary
          payment in the bot. <Link href="/blog/naqd-pul-bilan-telegram-stars-sotib-olish">Full guide</Link>.
        </li>
        <li>
          <b>Roubles (SBP)</b> — paying from Russia by phone number or QR, with no card details.
        </li>
      </ul>
      <p>
        Prices can move during promotions, so check the final total in the bot when you order — the number shown is
        the one you pay.
      </p>

      <h2 id="nega-arzon">Why is this cheaper than the App Store?</h2>
      <p>
        Buying Premium through the Apple App Store or Google Play adds a store margin and requires a foreign
        Visa/Mastercard. On top of that the price is quoted in dollars, so a bank conversion fee lands as well.
        StarsPaymee works directly with local payment systems — no conversion and no store margin. More detail:{" "}
        the platform comparison.
      </p>

      <h2 id="qaysi">Which pack should you pick?</h2>
      <KeyFacts label="Recommendation">
        <li>
          <b>Just trying it</b> — 1 month by username.
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
      "Username orqali: 3 oy — 160 000, 6 oy — 215 000, 12 oy — 388 000 so‘m. Barcha muddat username orqali, parolsiz.",
  },
  { question: "Qaysi muddat oyiga eng arzon?", answer: "Username oqimida 12 oylik — oyiga ~32 300 so‘m." },
  {
    question: "Nega 1 oylik username oqimida yo‘q?",
    answer: "Endi bor. 2026-yil sentabridan 1 oylik ham username oqimida — 45 000 so‘m.",
  },
  {
    question: "Narxlar qachon oxirgi marta tekshirilgan?",
    answer: `Maqoladagi jadval sayt narxlaridan avtomatik yig‘iladi; oxirgi sverka sanasi — ${PRICE_CHECKED}.`,
  },
  {
    question: "Nega App Store’dan arzon?",
    answer: "Do‘kon ustamasi va valyuta konvertatsiyasi komissiyasi yo‘q — to‘lov mahalliy tizimda, so‘mda o‘tadi.",
  },
  { question: "Xorijiy karta kerakmi?", answer: "Yo‘q. UzCard, HUMO, Click, Payme, Uzum yoki Paynet yetarli." },
  {
    question: "Narx keyinchalik o‘zgaradimi?",
    answer: "Joriy aniq summani har doim @StarsPaymee_bot da yoki Premium sahifasida ko‘rish mumkin.",
  },
];

const ruFaq = [
  {
    question: "Сколько стоит Telegram Premium в Узбекистане?",
    answer:
      "По username: 3 мес — 160 000, 6 мес — 215 000, 12 мес — 388 000 сум. Все сроки — по username, без пароля.",
  },
  { question: "Какой срок выгоднее в месяц?", answer: "В потоке по username — 12 месяцев, около 32 300 сум в месяц." },
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
  { question: "Нужна ли иностранная карта?", answer: "Нет. Достаточно UzCard, HUMO, Click, Payme, Uzum или Paynet." },
  {
    question: "Могут ли цены измениться?",
    answer: "Актуальную сумму всегда видно в @StarsPaymee_bot или на странице Premium.",
  },
];

const enFaq = [
  {
    question: "How much does Telegram Premium cost in Uzbekistan?",
    answer:
      "By username: 3 months — 160,000, 6 months — 215,000, 12 months — 388,000 UZS. Every term goes by username, with no password.",
  },
  { question: "Which term is cheapest per month?", answer: "In the username flow, 12 months — about 32,300 UZS a month." },
  {
    question: "Why is there no monthly plan by username?",
    answer:
      "It is available now. Since September 2026 the monthly plan runs by username too — 45,000 UZS.",
  },
  {
    question: "When were the prices last verified?",
    answer: `The table is generated from the site’s own prices; the last verification date is ${PRICE_CHECKED}.`,
  },
  {
    question: "Why is it cheaper than the App Store?",
    answer: "There is no store margin and no conversion fee — the payment runs in the local system, in so‘m.",
  },
  { question: "Do I need a foreign card?", answer: "No. UzCard, HUMO, Click, Payme, Uzum or Paynet is enough." },
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
    "arzon telegram premium",
    "telegram premium 12 oy narxi",
    "telegram premium 3 6 oy paket",
    "telegram premium tolov usullari",
    "telegram premium qancha turadi",
    "telegram premium tariflari",
    "premium 12 oy narxi",
    "цена telegram premium узбекистан",
  ],
  locales: {
    uz: {
      title: "Telegram Premium narxi O‘zbekistonda (2026)",
      excerpt:
        "Barcha amaldagi tariflar bir joyda: 1, 3, 6 va 12 oy — hammasi username orqali, oyiga tushadigan hisob va oxirgi tekshirilgan sana.",
      metaTitle: "Telegram Premium narxi O‘zbekistonda — 2026",
      metaDescription:
        "Telegram Premium narxi O‘zbekistonda: 1 oy 45 000, 3 oy 160 000, 6 oy 215 000, 12 oy 388 000 so‘m. Oyiga hisob va to‘lov usullari.",
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
        "Все действующие тарифы в одном месте: 1, 3, 6 и 12 месяцев по username, стоимость месяца и дата последней сверки.",
      metaTitle: "Цена Telegram Premium в Узбекистане — 2026",
      metaDescription:
        "Цена Telegram Premium в Узбекистане: 1 мес 45 000, 3 мес 160 000, 6 мес 215 000, 12 мес 388 000 сум — все по username. Стоимость месяца и способы оплаты.",
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
        "Every current plan in one place: 1, 3, 6 and 12 months by username, the cost per month and the last verification date.",
      metaTitle: "Telegram Premium pricing in Uzbekistan — 2026",
      metaDescription:
        "Telegram Premium prices in Uzbekistan: 1 month 45,000, 3 months 160,000, 6 months 215,000, 12 months 388,000 UZS — all by username. Monthly cost and payment methods.",
      answerTitle: "Short answer",
      Answer: EnAnswer,
      Body: EnBody,
      ctaHeading: "Get Premium in so‘m",
      ctaBody: "@StarsPaymee_bot — choose a term and pay with UzCard, HUMO, Click or Payme.",
      faq: enFaq,
    },
  },
};
