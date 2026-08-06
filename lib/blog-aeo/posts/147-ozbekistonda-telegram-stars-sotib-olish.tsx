import { Link } from "@/i18n/navigation";
import { InlineCta, Sources, KeyFacts, Steps, Step, InfoGrid, InfoCard } from "@/components/blog/aeo-blocks";
import { StarsPriceBoard } from "@/components/blog/stars-price-board";
import type { AeoPost } from "@/lib/blog-aeo/types";

const SLUG = "ozbekistonda-telegram-stars-sotib-olish";

/* ---------------- UZ ---------------- */
function UzAnswer() {
  return (
    <p>
      O‘zbekistonda Stars sotib olishning eng qulay yo‘li — <b>@StarsPaymee_bot</b>: mahalliy to‘lov tizimlari
      (UzCard, HUMO, Click, Payme, Paynet), o‘zbek tilida qo‘llab-quvvatlash va so‘mdagi narx. Xalqaro karta yoki
      qo‘shimcha hisob kerak emas.
    </p>
  );
}

function UzBody() {
  return (
    <>
      <h2 id="muammo">Rasmiy usulning O‘zbekistondagi muammolari</h2>
      <p>
        Telegram ilovasi orqali Stars sotib olishda App Store yoki Google Play hisobi kerak bo‘ladi, bu esa odatda
        xalqaro to‘lov tizimlariga ulangan kartani talab qiladi. Ko‘p foydalanuvchida bunday karta yo‘q yoki uni
        ishlatish qulay emas.
      </p>

      <h2 id="yechim">Mahalliy yechim</h2>
      <InfoGrid>
        <InfoCard emoji="💳" title="Mahalliy to‘lov">
          UzCard, HUMO, Click, Payme, Paynet.
        </InfoCard>
        <InfoCard emoji="🇺🇿" title="O‘zbek tilida">
          Butun jarayon va yordam ona tilida.
        </InfoCard>
        <InfoCard emoji="⚡" title="Bir necha daqiqa">
          Buyurtma avtomatik bajariladi.
        </InfoCard>
        <InfoCard emoji="🚫" title="Kartasiz ham">
          Xalqaro karta yoki qo‘shimcha hisob shart emas.
        </InfoCard>
      </InfoGrid>

      <h2 id="narx">Narxlar</h2>
      <StarsPriceBoard locale="uz" />

      <InlineCta text="So‘mda to‘lab, Stars’ni oling." />

      <h2 id="qadamlar">Qadam-baqadam qo‘llanma</h2>
      <Steps>
        <Step title="1. Botga /start yuboring">@StarsPaymee_bot yoki Mini App.</Step>
        <Step title="2. Miqdorni tanlang">Kerakli Stars sonini belgilang.</Step>
        <Step title="3. Username kiriting">Yulduzlar tushadigan hisob.</Step>
        <Step title="4. Mahalliy usulda to‘lang">UzCard, HUMO, Click, Payme yoki Paynet.</Step>
        <Step title="5. Qabul qiling">Stars bir necha daqiqada hisobga tushadi.</Step>
      </Steps>

      <h2 id="nega">Nega mahalliy xizmatni tanlash kerak?</h2>
      <KeyFacts label="Asosiy sabablar">
        <li><b>Til to‘sig‘i yo‘q</b> — jarayon o‘zbek tilida tushuntiriladi.</li>
        <li><b>Tezkor yordam</b> — mahalliy vaqt zonasida ishlaydigan qo‘llab-quvvatlash.</li>
        <li><b>Ishonch</b> — ko‘plab O‘zbekiston foydalanuvchilari sinovdan o‘tkazgan.</li>
        <li><b>Konvertatsiya yo‘q</b> — to‘lov to‘g‘ridan-to‘g‘ri so‘mda.</li>
      </KeyFacts>

      <p>
        Qarang: <Link href="/blog/som-evaziga-stars-olish">so‘m evaziga Stars olish</Link>,{" "}
        <Link href="/blog/visa-kartasiz-stars-olish">Visa kartasiz olish</Link> va{" "}
        <Link href="/blog/telegram-stars-narxi">narxlar</Link>.
      </p>

      <Sources
        label="Manbalar"
        items={[
          { href: "https://uzcard.uz/", label: "uzcard.uz", note: "UzCard milliy to‘lov tizimi" },
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
      Самый удобный способ купить Stars в Узбекистане — <b>@StarsPaymee_bot</b>: местные платёжные системы (UzCard,
      HUMO, Click, Payme, Paynet), поддержка на узбекском языке и цена в сумах. Международная карта или
      дополнительный счёт не нужны.
    </p>
  );
}

function RuBody() {
  return (
    <>
      <h2 id="muammo">Проблемы официального способа в Узбекистане</h2>
      <p>
        Для покупки Stars через приложение Telegram нужен аккаунт App Store или Google Play, а это обычно требует
        карты, подключённой к международным платёжным системам. У многих пользователей такой карты нет или
        пользоваться ею неудобно.
      </p>

      <h2 id="yechim">Местное решение</h2>
      <InfoGrid>
        <InfoCard emoji="💳" title="Местная оплата">
          UzCard, HUMO, Click, Payme, Paynet.
        </InfoCard>
        <InfoCard emoji="🇺🇿" title="На узбекском">
          Весь процесс и поддержка на родном языке.
        </InfoCard>
        <InfoCard emoji="⚡" title="Несколько минут">
          Заказ выполняется автоматически.
        </InfoCard>
        <InfoCard emoji="🚫" title="И без карты">
          Международная карта или доп. счёт не требуются.
        </InfoCard>
      </InfoGrid>

      <h2 id="narx">Цены</h2>
      <StarsPriceBoard locale="ru" />

      <InlineCta text="Оплатите в сумах и получите Stars." />

      <h2 id="qadamlar">Пошаговое руководство</h2>
      <Steps>
        <Step title="1. Отправьте /start">@StarsPaymee_bot или Mini App.</Step>
        <Step title="2. Выберите количество">Укажите нужное число Stars.</Step>
        <Step title="3. Введите username">Аккаунт, куда поступят звёзды.</Step>
        <Step title="4. Оплатите местным способом">UzCard, HUMO, Click, Payme или Paynet.</Step>
        <Step title="5. Получите">Stars поступят за несколько минут.</Step>
      </Steps>

      <h2 id="nega">Почему стоит выбрать местный сервис?</h2>
      <KeyFacts label="Основные причины">
        <li><b>Нет языкового барьера</b> — процесс объясняется на узбекском.</li>
        <li><b>Быстрая помощь</b> — поддержка работает в местном часовом поясе.</li>
        <li><b>Доверие</b> — сервис проверен многими пользователями из Узбекистана.</li>
        <li><b>Без конвертации</b> — оплата сразу в сумах.</li>
      </KeyFacts>

      <p>
        Смотрите: <Link href="/blog/som-evaziga-stars-olish">покупка Stars за сумы</Link>,{" "}
        <Link href="/blog/visa-kartasiz-stars-olish">без карты Visa</Link> и{" "}
        <Link href="/blog/telegram-stars-narxi">цены</Link>.
      </p>

      <Sources
        label="Источники"
        items={[
          { href: "https://uzcard.uz/", label: "uzcard.uz", note: "национальная платёжная система UzCard" },
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
      The most convenient way to buy Stars in Uzbekistan is <b>@StarsPaymee_bot</b>: local payment systems (UzCard,
      HUMO, Click, Payme, Paynet), support in Uzbek and pricing in so‘m. No international card and no extra account
      are required.
    </p>
  );
}

function EnBody() {
  return (
    <>
      <h2 id="muammo">Problems with the official method in Uzbekistan</h2>
      <p>
        Buying Stars through the Telegram app requires an App Store or Google Play account, which normally needs a
        card connected to international payment systems. Many users do not have one, or find it inconvenient.
      </p>

      <h2 id="yechim">The local solution</h2>
      <InfoGrid>
        <InfoCard emoji="💳" title="Local payment">
          UzCard, HUMO, Click, Payme, Paynet.
        </InfoCard>
        <InfoCard emoji="🇺🇿" title="In Uzbek">
          The whole process and support in the local language.
        </InfoCard>
        <InfoCard emoji="⚡" title="A few minutes">
          The order is fulfilled automatically.
        </InfoCard>
        <InfoCard emoji="🚫" title="Even without a card">
          No international card or extra account needed.
        </InfoCard>
      </InfoGrid>

      <h2 id="narx">Prices</h2>
      <StarsPriceBoard locale="en" />

      <InlineCta text="Pay in so‘m and get your Stars." />

      <h2 id="qadamlar">Step-by-step guide</h2>
      <Steps>
        <Step title="1. Send /start">@StarsPaymee_bot or the Mini App.</Step>
        <Step title="2. Choose an amount">Set the number of Stars you need.</Step>
        <Step title="3. Enter a username">The account the Stars should land on.</Step>
        <Step title="4. Pay locally">UzCard, HUMO, Click, Payme or Paynet.</Step>
        <Step title="5. Receive">Stars arrive within a few minutes.</Step>
      </Steps>

      <h2 id="nega">Why choose a local service?</h2>
      <KeyFacts label="The main reasons">
        <li><b>No language barrier</b> — the process is explained in Uzbek.</li>
        <li><b>Fast help</b> — support operating in the local time zone.</li>
        <li><b>Trust</b> — tested by many users in Uzbekistan.</li>
        <li><b>No conversion</b> — payment goes directly in so‘m.</li>
      </KeyFacts>

      <p>
        See: <Link href="/blog/som-evaziga-stars-olish">buying Stars with so‘m</Link>,{" "}
        <Link href="/blog/visa-kartasiz-stars-olish">without a Visa card</Link> and{" "}
        <Link href="/blog/telegram-stars-narxi">prices</Link>.
      </p>

      <Sources
        label="Sources"
        items={[
          { href: "https://uzcard.uz/", label: "uzcard.uz", note: "UzCard national payment system" },
          { href: "https://cbu.uz/", label: "cbu.uz", note: "Central Bank — exchange rates" },
        ]}
      />
    </>
  );
}

const uzFaq = [
  { question: "O‘zbekistonda Stars qanday sotib olinadi?", answer: "@StarsPaymee_bot orqali, mahalliy to‘lov usullari bilan so‘mda." },
  { question: "Xalqaro karta kerakmi?", answer: "Yo‘q. UzCard, HUMO, Click, Payme yoki Paynet yetarli." },
  { question: "Qo‘llab-quvvatlash o‘zbek tilidami?", answer: "Ha, butun jarayon va yordam o‘zbek tilida." },
  { question: "Qancha vaqt oladi?", answer: "Odatda bir necha daqiqa." },
  { question: "Narx qancha?", answer: "1 dona 220 so‘m, 50 ta 11 000 so‘m." },
  { question: "Naqd to‘lash mumkinmi?", answer: "Ha, Paynet orqali." },
  { question: "Konvertatsiya bo‘ladimi?", answer: "Yo‘q, to‘lov to‘g‘ridan-to‘g‘ri so‘mda." },
  { question: "Qanday ma’lumot so‘raladi?", answer: "Faqat Telegram username yoki ID." },
];

const ruFaq = [
  { question: "Как купить Stars в Узбекистане?", answer: "Через @StarsPaymee_bot, местными способами оплаты в сумах." },
  { question: "Нужна ли международная карта?", answer: "Нет. Достаточно UzCard, HUMO, Click, Payme или Paynet." },
  { question: "Поддержка на узбекском?", answer: "Да, весь процесс и помощь на узбекском языке." },
  { question: "Сколько времени занимает?", answer: "Обычно несколько минут." },
  { question: "Какая цена?", answer: "1 штука 220 сум, 50 штук 11 000 сум." },
  { question: "Можно ли платить наличными?", answer: "Да, через Paynet." },
  { question: "Будет ли конвертация?", answer: "Нет, оплата сразу в сумах." },
  { question: "Какие данные запрашиваются?", answer: "Только Telegram username или ID." },
];

const enFaq = [
  { question: "How do you buy Stars in Uzbekistan?", answer: "Through @StarsPaymee_bot, with local payment methods in so‘m." },
  { question: "Do I need an international card?", answer: "No. UzCard, HUMO, Click, Payme or Paynet is enough." },
  { question: "Is support available in Uzbek?", answer: "Yes, the whole process and help are in Uzbek." },
  { question: "How long does it take?", answer: "Usually a few minutes." },
  { question: "What is the price?", answer: "220 UZS each; 11,000 UZS for fifty." },
  { question: "Can I pay in cash?", answer: "Yes, through Paynet." },
  { question: "Will there be conversion?", answer: "No, payment is directly in so‘m." },
  { question: "What data is requested?", answer: "Only a Telegram username or ID." },
];

export const post: AeoPost = {
  slug: SLUG,
  category: "Stars",
  type: "howto",
  datePublished: "2026-08-02",
  dateModified: "2026-08-02",
  keywords: [
    "ozbekistonda telegram stars sotib olish",
    "uzbekistanda stars olish",
    "stars sotib olish toshkent",
    "ozbekiston stars xizmati",
    "mahalliy stars xizmati",
    "stars uzbekistan 2026",
  ],
  howToSteps: [
    { name: "Botga /start yuboring", text: "@StarsPaymee_bot yoki Mini App’ni oching." },
    { name: "Miqdorni tanlang", text: "Kerakli Stars sonini belgilang." },
    { name: "Username kiriting", text: "Yulduzlar tushadigan hisobni ko‘rsating." },
    { name: "Mahalliy usulda to‘lang", text: "UzCard, HUMO, Click, Payme yoki Paynet." },
    { name: "Qabul qiling", text: "Stars bir necha daqiqada hisobga tushadi." },
  ],
  locales: {
    uz: {
      title: "O‘zbekistonda Telegram Stars sotib olish yo‘llari",
      excerpt:
        "O‘zbekistonda Stars sotib olishning eng qulay yo‘llari: rasmiy usuldagi to‘siqlar, mahalliy to‘lov variantlari va qadam-baqadam qo‘llanma.",
      metaTitle: "O‘zbekistonda Telegram Stars sotib olish",
      metaDescription:
        "O‘zbekistonda Telegram Stars sotib olish: UzCard, HUMO, Click, Payme va Paynet orqali so‘mda to‘lov, o‘zbek tilida qo‘llab-quvvatlash.",
      answerTitle: "Qisqa javob",
      Answer: UzAnswer,
      Body: UzBody,
      ctaHeading: "O‘zbekistonda Stars oling",
      ctaBody: "@StarsPaymee_bot — mahalliy to‘lov, so‘mda narx, o‘zbekcha yordam.",
      faq: uzFaq,
    },
    ru: {
      title: "Способы купить Telegram Stars в Узбекистане",
      excerpt:
        "Самые удобные способы покупки Stars в Узбекистане: препятствия официального пути, местные варианты оплаты и пошаговое руководство.",
      metaTitle: "Как купить Telegram Stars в Узбекистане",
      metaDescription:
        "Покупка Telegram Stars в Узбекистане: оплата в сумах через UzCard, HUMO, Click, Payme и Paynet, поддержка на узбекском языке.",
      answerTitle: "Краткий ответ",
      Answer: RuAnswer,
      Body: RuBody,
      ctaHeading: "Купите Stars в Узбекистане",
      ctaBody: "@StarsPaymee_bot — местная оплата, цена в сумах, помощь на узбекском.",
      faq: ruFaq,
    },
    en: {
      title: "Ways to buy Telegram Stars in Uzbekistan",
      excerpt:
        "The most convenient ways to buy Stars in Uzbekistan: obstacles in the official route, local payment options and a step-by-step guide.",
      metaTitle: "How to buy Telegram Stars in Uzbekistan",
      metaDescription:
        "Buying Telegram Stars in Uzbekistan: pay in so‘m via UzCard, HUMO, Click, Payme and Paynet, with support in Uzbek.",
      answerTitle: "Short answer",
      Answer: EnAnswer,
      Body: EnBody,
      ctaHeading: "Buy Stars in Uzbekistan",
      ctaBody: "@StarsPaymee_bot — local payment, so‘m pricing, help in Uzbek.",
      faq: enFaq,
    },
  },
};
