import { Link } from "@/i18n/navigation";
import { InlineCta, Sources, KeyFacts, Steps, Step } from "@/components/blog/aeo-blocks";
import { PremiumPlanBoard } from "@/components/blog/premium-plan-board";
import type { AeoPost } from "@/lib/blog-aeo/types";

const SLUG = "arzon-telegram-premium";

/* ---------------- UZ ---------------- */
function UzAnswer() {
  return (
    <p>
      Eng tejamli yo‘l — <b>uzoq muddatli obuna</b>: 12 oylik variantda oyiga tushadigan xarajat 1 oylikka nisbatan
      sezilarli past. Ikkinchi omil — <b>platforma komissiyasidan qochish</b>: mahalliy xizmat orqali to‘lasangiz,
      App Store/Google Play ustamasi qo‘shilmaydi.
    </p>
  );
}

function UzBody() {
  return (
    <>
      <h2 id="uzoq">Uzoq muddatli obunani tanlang</h2>
      <p>
        Odatda 12 oylik obuna oylik hisobda 1 oylikka qaraganda ancha arzon. Agar Telegram’dan doimiy foydalansangiz,
        yillik variant uzoq muddatda ko‘proq tejamkorlik keltiradi.
      </p>
      <PremiumPlanBoard locale="uz" flow="username" />
      <PremiumPlanBoard locale="uz" flow="login" />

      <h2 id="komissiya">Rasmiy va muqobil xizmatlarni solishtiring</h2>
      <p>
        Rasmiy ilova orqali sotib olishda App Store yoki Google Play komissiyasi qo‘shilishi mumkin — bu umumiy narxni
        oshiradi. Mahalliy xizmatlar ko‘pincha bunday ustamasiz, to‘g‘ridan-to‘g‘ri so‘mda ishlaydi.
      </p>

      <InlineCta text="Joriy tariflarni botda solishtiring." />

      <h2 id="aksiya">Aksiya va chegirmalarni kuzating</h2>
      <p>
        Ko‘plab xizmatlar davriy aksiyalar o‘tkazadi. Bot yoki rasmiy kanalni kuzatib borish orqali eng qulay
        narxlarni o‘z vaqtida ushlab qolish mumkin.
      </p>

      <h2 id="ishonch">Ishonchli xizmatni tanlashning ahamiyati</h2>
      <KeyFacts label="Faqat narxga qaramang">
        <li>Juda past narx taklif qiluvchi noma’lum manbalar ko‘pincha firibgarlik bilan bog‘liq.</li>
        <li>Parol yoki SMS-kod so‘ralsa — darhol to‘xtating.</li>
        <li>Rasmiy to‘lov tizimlari ishlatilishini tekshiring.</li>
        <li>Qo‘llab-quvvatlash kanali borligiga ishonch hosil qiling.</li>
      </KeyFacts>

      <h2 id="qadamlar">Qadam-baqadam tejamli xarid</h2>
      <Steps>
        <Step title="1. Muddatni aniqlang">Qancha vaqtga kerakligini belgilang.</Step>
        <Step title="2. Narxlarni solishtiring">Bir nechta ishonchli xizmatni taqqoslang.</Step>
        <Step title="3. Aksiyani tekshiring">Chegirma mavjudligini ko‘ring.</Step>
        <Step title="4. Xavfsiz to‘lang">Rasmiy to‘lov usuli orqali xaridni yakunlang.</Step>
      </Steps>

      <p>
        Qarang: <Link href="/blog/telegram-premium-narxi">narxlar jadvali</Link>,{" "}
        <Link href="/blog/bir-oylik-premium-olish">bir oylik variant</Link> va{" "}
        <Link href="/blog/telegram-premium-sotib-olish">xarid tartibi</Link>.
      </p>

      <Sources
        label="Manbalar"
        items={[
          { href: "https://telegram.org/faq_premium", label: "telegram.org/faq_premium", note: "Telegram Premium rasmiy FAQ" },
          { href: "https://telegram.org/blog", label: "telegram.org/blog", note: "Telegram yangiliklari" },
        ]}
      />
    </>
  );
}

/* ---------------- RU ---------------- */
function RuAnswer() {
  return (
    <p>
      Самый экономный путь — <b>длительная подписка</b>: при 12-месячном варианте стоимость в пересчёте на месяц
      заметно ниже, чем при месячном. Второй фактор — <b>отказ от комиссии платформы</b>: при оплате через местный
      сервис наценка App Store/Google Play не добавляется.
    </p>
  );
}

function RuBody() {
  return (
    <>
      <h2 id="uzoq">Выбирайте длительную подписку</h2>
      <p>
        Обычно годовая подписка в пересчёте на месяц заметно дешевле месячной. Если пользуетесь Telegram постоянно,
        годовой вариант выгоднее в долгосрочной перспективе.
      </p>
      <PremiumPlanBoard locale="ru" flow="username" />
      <PremiumPlanBoard locale="ru" flow="login" />

      <h2 id="komissiya">Сравните официальный и альтернативные сервисы</h2>
      <p>
        При покупке через официальное приложение может добавляться комиссия App Store или Google Play — это повышает
        общую цену. Местные сервисы чаще работают без такой наценки, напрямую в сумах.
      </p>

      <InlineCta text="Сравните актуальные тарифы в боте." />

      <h2 id="aksiya">Следите за акциями и скидками</h2>
      <p>
        Многие сервисы проводят периодические акции. Отслеживая бота или официальный канал, можно вовремя поймать
        самые выгодные цены.
      </p>

      <h2 id="ishonch">Важность выбора надёжного сервиса</h2>
      <KeyFacts label="Не смотрите только на цену">
        <li>Неизвестные источники с очень низкой ценой часто связаны с мошенничеством.</li>
        <li>Если просят пароль или SMS-код — немедленно остановитесь.</li>
        <li>Проверьте, используются ли официальные платёжные системы.</li>
        <li>Убедитесь, что есть канал поддержки.</li>
      </KeyFacts>

      <h2 id="qadamlar">Экономная покупка по шагам</h2>
      <Steps>
        <Step title="1. Определите срок">Решите, на какой период нужна подписка.</Step>
        <Step title="2. Сравните цены">Сопоставьте несколько надёжных сервисов.</Step>
        <Step title="3. Проверьте акции">Посмотрите, есть ли скидка.</Step>
        <Step title="4. Оплатите безопасно">Завершите покупку официальным способом оплаты.</Step>
      </Steps>

      <p>
        Смотрите: <Link href="/blog/telegram-premium-narxi">таблицу цен</Link>,{" "}
        <Link href="/blog/bir-oylik-premium-olish">вариант на месяц</Link> и{" "}
        <Link href="/blog/telegram-premium-sotib-olish">порядок покупки</Link>.
      </p>

      <Sources
        label="Источники"
        items={[
          { href: "https://telegram.org/faq_premium", label: "telegram.org/faq_premium", note: "официальный FAQ Telegram Premium" },
          { href: "https://telegram.org/blog", label: "telegram.org/blog", note: "новости Telegram" },
        ]}
      />
    </>
  );
}

/* ---------------- EN ---------------- */
function EnAnswer() {
  return (
    <p>
      The cheapest route is a <b>longer subscription</b>: on the twelve-month plan the effective monthly cost is well
      below the one-month one. The second factor is <b>avoiding platform fees</b> — paying through a local service
      means no App Store/Google Play markup.
    </p>
  );
}

function EnBody() {
  return (
    <>
      <h2 id="uzoq">Choose a longer subscription</h2>
      <p>
        A twelve-month subscription is usually much cheaper per month than a one-month one. If you use Telegram
        constantly, the annual option saves more over time.
      </p>
      <PremiumPlanBoard locale="en" flow="username" />
      <PremiumPlanBoard locale="en" flow="login" />

      <h2 id="komissiya">Compare official and alternative services</h2>
      <p>
        Buying through the official app can add an App Store or Google Play fee, raising the total. Local services
        often work without that markup, directly in so‘m.
      </p>

      <InlineCta text="Compare current plans in the bot." />

      <h2 id="aksiya">Watch for promotions and discounts</h2>
      <p>
        Many services run periodic promotions. Following the bot or the official channel lets you catch the best
        prices in time.
      </p>

      <h2 id="ishonch">Why picking a trustworthy service matters</h2>
      <KeyFacts label="Do not look at price alone">
        <li>Unknown sources with very low prices are often linked to fraud.</li>
        <li>If a password or SMS code is requested — stop immediately.</li>
        <li>Check that official payment systems are used.</li>
        <li>Make sure a support channel exists.</li>
      </KeyFacts>

      <h2 id="qadamlar">A cheap purchase, step by step</h2>
      <Steps>
        <Step title="1. Decide the term">Work out how long you need it for.</Step>
        <Step title="2. Compare prices">Check a few trustworthy services.</Step>
        <Step title="3. Look for promotions">See whether a discount is running.</Step>
        <Step title="4. Pay safely">Complete the purchase with an official payment method.</Step>
      </Steps>

      <p>
        See: <Link href="/blog/telegram-premium-narxi">the price table</Link>,{" "}
        <Link href="/blog/bir-oylik-premium-olish">the one-month option</Link> and{" "}
        <Link href="/blog/telegram-premium-sotib-olish">the purchase flow</Link>.
      </p>

      <Sources
        label="Sources"
        items={[
          { href: "https://telegram.org/faq_premium", label: "telegram.org/faq_premium", note: "official Telegram Premium FAQ" },
          { href: "https://telegram.org/blog", label: "telegram.org/blog", note: "Telegram news" },
        ]}
      />
    </>
  );
}

const uzFaq = [
  { question: "Premium’ni eng arzon qanday olaman?", answer: "Uzoq muddatli obuna tanlang va platforma komissiyasi qo‘shilmaydigan mahalliy xizmatdan foydalaning." },
  { question: "12 oylik qanchaga tejaydi?", answer: "Oyiga tushadigan xarajat 1 oylikka nisbatan sezilarli past." },
  { question: "Aksiyalar bo‘ladimi?", answer: "Ha, davriy ravishda — botni kuzatib boring." },
  { question: "Eng arzon narx eng yaxshi tanlovmi?", answer: "Har doim ham emas — ishonchlilikni ham tekshiring." },
  { question: "Firibgarni qanday aniqlayman?", answer: "Parol yoki SMS-kod so‘rashi va haddan tashqari past narx asosiy belgilar." },
  { question: "Bir nechta odam birga olsa arzonroqmi?", answer: "Xarajatni bo‘lishish mumkin, lekin obuna baribir bitta hisobga faollashadi." },
  { question: "To‘lov usuli narxga ta’sir qiladimi?", answer: "Rasmiy do‘kon orqali to‘lasangiz komissiya qo‘shilishi mumkin." },
  { question: "Narxni qayerdan tekshiraman?", answer: "@StarsPaymee_bot da joriy tariflar ko‘rsatiladi." },
];

const ruFaq = [
  { question: "Как купить Premium дешевле всего?", answer: "Выбирайте длительную подписку и местный сервис без комиссии платформы." },
  { question: "Насколько выгоднее 12 месяцев?", answer: "Стоимость в пересчёте на месяц заметно ниже, чем при месячной подписке." },
  { question: "Бывают ли акции?", answer: "Да, периодически — следите за ботом." },
  { question: "Самая низкая цена — лучший выбор?", answer: "Не всегда — проверяйте и надёжность." },
  { question: "Как распознать мошенника?", answer: "Просьба о пароле или SMS-коде и слишком низкая цена — главные признаки." },
  { question: "Выгоднее ли брать вскладчину?", answer: "Расходы можно разделить, но подписка всё равно активируется на один аккаунт." },
  { question: "Влияет ли способ оплаты на цену?", answer: "При оплате через официальный магазин может добавиться комиссия." },
  { question: "Где проверить цену?", answer: "Актуальные тарифы показываются в @StarsPaymee_bot." },
];

const enFaq = [
  { question: "How do I buy Premium as cheaply as possible?", answer: "Choose a longer subscription and a local service without platform fees." },
  { question: "How much better is 12 months?", answer: "The effective monthly cost is well below the one-month plan." },
  { question: "Are there promotions?", answer: "Yes, periodically — keep an eye on the bot." },
  { question: "Is the lowest price the best choice?", answer: "Not always — check reliability too." },
  { question: "How do I spot a scammer?", answer: "Requests for a password or SMS code, and an unrealistically low price." },
  { question: "Is splitting the cost cheaper?", answer: "You can share the cost, but the subscription still activates on one account." },
  { question: "Does the payment method affect the price?", answer: "Paying through an official store can add a fee." },
  { question: "Where do I check the price?", answer: "Current plans are shown in @StarsPaymee_bot." },
];

export const post: AeoPost = {
  slug: SLUG,
  category: "Premium",
  type: "howto",
  datePublished: "2026-08-02",
  dateModified: "2026-08-02",
  keywords: [
    "arzon telegram premium",
    "premium arzon narxda",
    "telegram premium chegirma",
    "premium tejamli olish",
    "eng arzon premium",
    "arzon premium 2026",
  ],
  howToSteps: [
    { name: "Muddatni aniqlang", text: "Obuna qancha vaqtga kerakligini belgilang." },
    { name: "Narxlarni solishtiring", text: "Bir nechta ishonchli xizmat tarifini taqqoslang." },
    { name: "Aksiyani tekshiring", text: "Chegirma mavjudligini ko‘rib chiqing." },
    { name: "Xavfsiz to‘lang", text: "Rasmiy to‘lov usuli orqali xaridni yakunlang." },
  ],
  locales: {
    uz: {
      title: "Telegram Premiumni eng arzon narxda qanday olish mumkin",
      excerpt:
        "Premium’ni tejamli olish yo‘llari: uzoq muddatli obuna, platforma komissiyasidan qochish, aksiyalar va ishonchli xizmatni tanlash.",
      metaTitle: "Arzon Telegram Premium — tejamli olish yo‘llari",
      metaDescription:
        "Telegram Premium’ni eng arzon narxda olish: uzoq muddatli obuna, komissiyasiz mahalliy to‘lov, aksiyalar va xavfsiz xarid mezonlari.",
      answerTitle: "Qisqa javob",
      Answer: UzAnswer,
      Body: UzBody,
      ctaHeading: "Tejamli tarifni tanlang",
      ctaBody: "@StarsPaymee_bot da tariflarni solishtiring — to‘lov so‘mda.",
      faq: uzFaq,
    },
    ru: {
      title: "Как купить Telegram Premium по самой низкой цене",
      excerpt:
        "Способы сэкономить на Premium: длительная подписка, отказ от комиссии платформы, акции и выбор надёжного сервиса.",
      metaTitle: "Дешёвый Telegram Premium — как сэкономить",
      metaDescription:
        "Как купить Telegram Premium дешевле: длительная подписка, местная оплата без комиссии, акции и критерии безопасной покупки.",
      answerTitle: "Краткий ответ",
      Answer: RuAnswer,
      Body: RuBody,
      ctaHeading: "Выберите выгодный тариф",
      ctaBody: "Сравните тарифы в @StarsPaymee_bot — оплата в сумах.",
      faq: ruFaq,
    },
    en: {
      title: "How to get Telegram Premium at the lowest price",
      excerpt:
        "Ways to save on Premium: a longer subscription, avoiding platform fees, promotions, and choosing a trustworthy service.",
      metaTitle: "Cheap Telegram Premium — how to save",
      metaDescription:
        "How to buy Telegram Premium cheaper: a longer subscription, local payment without fees, promotions and safe-purchase criteria.",
      answerTitle: "Short answer",
      Answer: EnAnswer,
      Body: EnBody,
      ctaHeading: "Pick the best-value plan",
      ctaBody: "Compare plans in @StarsPaymee_bot — payment in so‘m.",
      faq: enFaq,
    },
  },
};
