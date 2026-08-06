import { Link } from "@/i18n/navigation";
import { InlineCta, Sources, KeyFacts, Steps, Step, InfoGrid, InfoCard } from "@/components/blog/aeo-blocks";
import type { AeoPost } from "@/lib/blog-aeo/types";

const SLUG = "telegram-stars-kartasiz-sotib-olish";

/* ---------------- UZ ---------------- */
function UzAnswer() {
  return (
    <p>
      Ha. Xalqaro bank kartasi bo‘lmasa ham Stars sotib olish mumkin: <b>@StarsPaymee_bot</b> mahalliy to‘lov
      usullarini qabul qiladi — UzCard, HUMO, Click, Payme va <b>Paynet</b> (naqd). Xalqaro karta yoki qo‘shimcha
      hisob ochish shart emas.
    </p>
  );
}

function UzBody() {
  return (
    <>
      <h2 id="cheklov">Rasmiy usulning cheklovlari</h2>
      <p>
        Telegram ilovasi ichida Stars sotib olish odatda App Store yoki Google Play hisobingiz orqali amalga
        oshiriladi, bu esa bog‘langan xalqaro bank kartasini talab qiladi. Ko‘p mintaqada bunday kartaga ega bo‘lish
        oson emas.
      </p>

      <h2 id="usullar">Qanday to‘lov usullari mavjud?</h2>
      <InfoGrid>
        <InfoCard emoji="💳" title="Milliy kartalar">
          UzCard va HUMO — to‘g‘ridan-to‘g‘ri.
        </InfoCard>
        <InfoCard emoji="📱" title="Elektron hamyon">
          Click va Payme ilovalari orqali.
        </InfoCard>
        <InfoCard emoji="🏧" title="Naqd to‘lov">
          Paynet orqali naqd pul bilan.
        </InfoCard>
        <InfoCard emoji="🇷🇺" title="Rubl">
          Faqat SBP tizimi orqali.
        </InfoCard>
      </InfoGrid>

      <h2 id="jarayon">Jarayon qanday ishlaydi?</h2>
      <Steps>
        <Step title="1. Botga kiring">@StarsPaymee_bot.</Step>
        <Step title="2. Miqdorni tanlang">Kerakli Stars sonini belgilang.</Step>
        <Step title="3. To‘lov usulini tanlang">Mavjud mahalliy variantlardan biri.</Step>
        <Step title="4. To‘lang">Summa so‘mda ko‘rsatiladi.</Step>
        <Step title="5. Qabul qiling">Stars bir necha daqiqada hisobga tushadi.</Step>
      </Steps>

      <InlineCta text="Xalqaro kartasiz sinab ko‘ring." />

      <h2 id="afzallik">Kartasiz to‘lovning afzalliklari</h2>
      <KeyFacts label="Qo‘shimcha yutuqlar">
        <li>Valyuta konvertatsiyasi bilan bog‘liq qo‘shimcha xarajat yo‘q.</li>
        <li>To‘lov jarayoni tezroq va soddaroq.</li>
        <li>Mahalliy tilda qo‘llab-quvvatlash xizmati.</li>
      </KeyFacts>
      <p>
        Bu jihatlar ayniqsa birinchi marta Stars sotib olayotgan foydalanuvchilar uchun katta qulaylik yaratadi.
      </p>

      <h2 id="xavfsizlik">Xavfsizlik haqida</h2>
      <p>
        Kartasiz to‘lovda ham xavfsizlik muhim: faqat tekshirilgan xizmatlardan foydalaning va ma’lumotni faqat
        rasmiy kanal orqali kiriting. Parol yoki SMS-kod hech qachon so‘ralmasligi kerak.
      </p>

      <p>
        Qarang: <Link href="/blog/visa-kartasiz-stars-olish">Visa kartasiz Stars olish</Link>,{" "}
        <Link href="/blog/som-evaziga-stars-olish">so‘m evaziga olish</Link> va{" "}
        <Link href="/blog/telegram-stars-xavfsizmi">xavfsizlik</Link>.
      </p>

      <Sources
        label="Manbalar"
        items={[
          { href: "https://uzcard.uz/", label: "uzcard.uz", note: "UzCard milliy to‘lov tizimi" },
          { href: "https://core.telegram.org/bots/payments-stars", label: "core.telegram.org", note: "Stars to‘lovlari hujjati" },
        ]}
      />
    </>
  );
}

/* ---------------- RU ---------------- */
function RuAnswer() {
  return (
    <p>
      Да. Stars можно купить и без международной банковской карты: <b>@StarsPaymee_bot</b> принимает местные способы
      оплаты — UzCard, HUMO, Click, Payme и <b>Paynet</b> (наличные). Международная карта или дополнительный счёт не
      нужны.
    </p>
  );
}

function RuBody() {
  return (
    <>
      <h2 id="cheklov">Ограничения официального способа</h2>
      <p>
        Покупка Stars внутри приложения Telegram обычно идёт через аккаунт App Store или Google Play, что требует
        привязанной международной карты. Во многих регионах получить такую карту непросто.
      </p>

      <h2 id="usullar">Какие способы оплаты доступны?</h2>
      <InfoGrid>
        <InfoCard emoji="💳" title="Национальные карты">
          UzCard и HUMO — напрямую.
        </InfoCard>
        <InfoCard emoji="📱" title="Электронный кошелёк">
          Через приложения Click и Payme.
        </InfoCard>
        <InfoCard emoji="🏧" title="Наличные">
          Через Paynet наличными деньгами.
        </InfoCard>
        <InfoCard emoji="🇷🇺" title="Рубли">
          Только через систему СБП.
        </InfoCard>
      </InfoGrid>

      <h2 id="jarayon">Как работает процесс?</h2>
      <Steps>
        <Step title="1. Откройте бота">@StarsPaymee_bot.</Step>
        <Step title="2. Выберите количество">Укажите нужное число Stars.</Step>
        <Step title="3. Выберите способ оплаты">Один из доступных местных вариантов.</Step>
        <Step title="4. Оплатите">Сумма показывается в сумах.</Step>
        <Step title="5. Получите">Stars поступят за несколько минут.</Step>
      </Steps>

      <InlineCta text="Попробуйте без международной карты." />

      <h2 id="afzallik">Преимущества оплаты без карты</h2>
      <KeyFacts label="Дополнительные плюсы">
        <li>Нет дополнительных расходов на конвертацию валюты.</li>
        <li>Процесс оплаты быстрее и проще.</li>
        <li>Поддержка на местном языке.</li>
      </KeyFacts>
      <p>Эти моменты особенно удобны тем, кто покупает Stars впервые.</p>

      <h2 id="xavfsizlik">О безопасности</h2>
      <p>
        При оплате без карты безопасность тоже важна: пользуйтесь только проверенными сервисами и вводите данные
        только через официальный канал. Пароль или SMS-код запрашивать не должны никогда.
      </p>

      <p>
        Смотрите: <Link href="/blog/visa-kartasiz-stars-olish">Stars без карты Visa</Link>,{" "}
        <Link href="/blog/som-evaziga-stars-olish">покупка за сумы</Link> и{" "}
        <Link href="/blog/telegram-stars-xavfsizmi">безопасность</Link>.
      </p>

      <Sources
        label="Источники"
        items={[
          { href: "https://uzcard.uz/", label: "uzcard.uz", note: "национальная платёжная система UzCard" },
          { href: "https://core.telegram.org/bots/payments-stars", label: "core.telegram.org", note: "документация по оплате Stars" },
        ]}
      />
    </>
  );
}

/* ---------------- EN ---------------- */
function EnAnswer() {
  return (
    <p>
      Yes. You can buy Stars without an international bank card: <b>@StarsPaymee_bot</b> accepts local payment
      methods — UzCard, HUMO, Click, Payme and <b>Paynet</b> (cash). No international card and no extra account are
      needed.
    </p>
  );
}

function EnBody() {
  return (
    <>
      <h2 id="cheklov">Limits of the official method</h2>
      <p>
        Buying Stars inside the Telegram app usually goes through your App Store or Google Play account, which needs
        a linked international card. In many regions getting one is not easy.
      </p>

      <h2 id="usullar">Which payment methods are available?</h2>
      <InfoGrid>
        <InfoCard emoji="💳" title="National cards">
          UzCard and HUMO — directly.
        </InfoCard>
        <InfoCard emoji="📱" title="E-wallets">
          Through the Click and Payme apps.
        </InfoCard>
        <InfoCard emoji="🏧" title="Cash">
          Through Paynet with physical money.
        </InfoCard>
        <InfoCard emoji="🇷🇺" title="Roubles">
          Through the SBP system only.
        </InfoCard>
      </InfoGrid>

      <h2 id="jarayon">How the process works</h2>
      <Steps>
        <Step title="1. Open the bot">@StarsPaymee_bot.</Step>
        <Step title="2. Choose an amount">Set the number of Stars you need.</Step>
        <Step title="3. Pick a payment method">One of the available local options.</Step>
        <Step title="4. Pay">The total is shown in so‘m.</Step>
        <Step title="5. Receive">Stars arrive within a few minutes.</Step>
      </Steps>

      <InlineCta text="Try it without an international card." />

      <h2 id="afzallik">Advantages of paying without a card</h2>
      <KeyFacts label="Extra benefits">
        <li>No additional currency-conversion cost.</li>
        <li>A faster and simpler payment process.</li>
        <li>Support in the local language.</li>
      </KeyFacts>
      <p>These points are especially helpful for people buying Stars for the first time.</p>

      <h2 id="xavfsizlik">On safety</h2>
      <p>
        Safety still matters when paying without a card: use only verified services and enter details only through
        the official channel. A password or SMS code should never be requested.
      </p>

      <p>
        See: <Link href="/blog/visa-kartasiz-stars-olish">Stars without a Visa card</Link>,{" "}
        <Link href="/blog/som-evaziga-stars-olish">buying with so‘m</Link> and{" "}
        <Link href="/blog/telegram-stars-xavfsizmi">safety</Link>.
      </p>

      <Sources
        label="Sources"
        items={[
          { href: "https://uzcard.uz/", label: "uzcard.uz", note: "UzCard national payment system" },
          { href: "https://core.telegram.org/bots/payments-stars", label: "core.telegram.org", note: "Stars payments documentation" },
        ]}
      />
    </>
  );
}

const uzFaq = [
  { question: "Kartasiz Stars sotib olsam bo‘ladimi?", answer: "Ha. Click, Payme yoki Paynet orqali naqd to‘lov varianti mavjud." },
  { question: "Xalqaro karta shartmi?", answer: "Yo‘q, umuman kerak emas." },
  { question: "Naqd pul bilan qanday to‘layman?", answer: "Paynet terminali yoki ilovasi orqali." },
  { question: "Qo‘shimcha hisob ochish kerakmi?", answer: "Yo‘q, hech qanday qo‘shimcha ro‘yxatdan o‘tish talab qilinmaydi." },
  { question: "Konvertatsiya bo‘ladimi?", answer: "Yo‘q — to‘lov to‘g‘ridan-to‘g‘ri so‘mda." },
  { question: "Yordam o‘zbek tilidami?", answer: "Ha, qo‘llab-quvvatlash mahalliy tilda." },
  { question: "Rublda to‘lash mumkinmi?", answer: "Ha, faqat SBP tizimi orqali." },
  { question: "Xavfsizlik qanday ta’minlanadi?", answer: "Rasmiy to‘lov tizimlari ishlatiladi, parol hech qachon so‘ralmaydi." },
];

const ruFaq = [
  { question: "Можно ли купить Stars без карты?", answer: "Да. Доступны Click, Payme или наличная оплата через Paynet." },
  { question: "Обязательна ли международная карта?", answer: "Нет, она вообще не нужна." },
  { question: "Как заплатить наличными?", answer: "Через терминал или приложение Paynet." },
  { question: "Нужно ли открывать дополнительный счёт?", answer: "Нет, никакой дополнительной регистрации не требуется." },
  { question: "Будет ли конвертация?", answer: "Нет — оплата сразу в сумах." },
  { question: "Поддержка на местном языке?", answer: "Да, поддержка ведётся на местном языке." },
  { question: "Можно ли платить в рублях?", answer: "Да, только через систему СБП." },
  { question: "Как обеспечивается безопасность?", answer: "Используются официальные платёжные системы, пароль никогда не запрашивается." },
];

const enFaq = [
  { question: "Can I buy Stars without a card?", answer: "Yes. Click, Payme or cash through Paynet are available." },
  { question: "Is an international card required?", answer: "No, it is not needed at all." },
  { question: "How do I pay in cash?", answer: "Through a Paynet terminal or app." },
  { question: "Do I need to open an extra account?", answer: "No, no additional registration is required." },
  { question: "Will there be conversion?", answer: "No — payment is directly in so‘m." },
  { question: "Is support in the local language?", answer: "Yes, support is provided locally." },
  { question: "Can I pay in roubles?", answer: "Yes, through the SBP system only." },
  { question: "How is safety ensured?", answer: "Official payment systems are used and a password is never requested." },
];

export const post: AeoPost = {
  slug: SLUG,
  category: "Stars",
  type: "problem",
  datePublished: "2026-08-02",
  dateModified: "2026-08-02",
  keywords: [
    "telegram stars kartasiz sotib olish",
    "kartasiz stars olish",
    "stars naqd tolov",
    "paynet orqali stars",
    "bank kartasisiz stars",
    "stars kartasiz 2026",
  ],
  howToSteps: [
    { name: "Botga kiring", text: "@StarsPaymee_bot botini oching." },
    { name: "Miqdorni tanlang", text: "Kerakli Stars sonini belgilang." },
    { name: "To‘lov usulini tanlang", text: "Click, Payme, Paynet yoki milliy karta." },
    { name: "To‘lang", text: "Summa so‘mda ko‘rsatiladi." },
    { name: "Qabul qiling", text: "Stars bir necha daqiqada hisobga tushadi." },
  ],
  locales: {
    uz: {
      title: "Telegram Stars kartasiz sotib olish mumkinmi",
      excerpt:
        "Xalqaro bank kartasisiz Stars sotib olish yo‘llari: Click, Payme, Paynet orqali naqd to‘lov, jarayon va xavfsizlik maslahatlari.",
      metaTitle: "Telegram Stars kartasiz sotib olish mumkinmi",
      metaDescription:
        "Telegram Stars kartasiz sotib olish: Click, Payme va Paynet orqali naqd to‘lov imkoniyati. Xalqaro karta va qo‘shimcha hisob kerak emas.",
      answerTitle: "Qisqa javob",
      Answer: UzAnswer,
      Body: UzBody,
      ctaHeading: "Kartasiz Stars oling",
      ctaBody: "@StarsPaymee_bot — Click, Payme yoki Paynet orqali naqd to‘lov.",
      faq: uzFaq,
    },
    ru: {
      title: "Можно ли купить Telegram Stars без карты",
      excerpt:
        "Способы покупки Stars без международной банковской карты: Click, Payme, наличные через Paynet, процесс и советы по безопасности.",
      metaTitle: "Можно ли купить Telegram Stars без карты",
      metaDescription:
        "Покупка Telegram Stars без карты: оплата через Click, Payme и наличными через Paynet. Международная карта и доп. счёт не нужны.",
      answerTitle: "Краткий ответ",
      Answer: RuAnswer,
      Body: RuBody,
      ctaHeading: "Купите Stars без карты",
      ctaBody: "@StarsPaymee_bot — Click, Payme или наличные через Paynet.",
      faq: ruFaq,
    },
    en: {
      title: "Can you buy Telegram Stars without a card?",
      excerpt:
        "Ways to buy Stars without an international bank card: Click, Payme, cash via Paynet, the process and safety advice.",
      metaTitle: "Can you buy Telegram Stars without a card?",
      metaDescription:
        "Buying Telegram Stars without a card: pay via Click, Payme or cash through Paynet. No international card and no extra account.",
      answerTitle: "Short answer",
      Answer: EnAnswer,
      Body: EnBody,
      ctaHeading: "Buy Stars without a card",
      ctaBody: "@StarsPaymee_bot — Click, Payme or cash through Paynet.",
      faq: enFaq,
    },
  },
};
