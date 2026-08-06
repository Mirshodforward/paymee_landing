import { Link } from "@/i18n/navigation";
import { InlineCta, Sources, KeyFacts, Steps, Step } from "@/components/blog/aeo-blocks";
import { StarsPriceBoard } from "@/components/blog/stars-price-board";
import type { AeoPost } from "@/lib/blog-aeo/types";

const SLUG = "telegram-stars-qanday-olinadi";

/* ---------------- UZ ---------------- */
function UzAnswer() {
  return (
    <p>
      Telegram Stars ikki yo‘l bilan olinadi: rasmiy ilova ichida (App Store/Google Play, xalqaro karta kerak) yoki{" "}
      <b>@StarsPaymee_bot</b> orqali so‘mda. Ikkinchi yo‘lda miqdorni tanlaysiz, username kiritasiz va UzCard, HUMO,
      Click, Payme yoki Paynet bilan to‘laysiz — yulduzlar ~10 soniyada tushadi.
    </p>
  );
}

function UzBody() {
  return (
    <>
      <h2 id="nima-uchun">Telegram Stars nima uchun kerak?</h2>
      <p>
        Telegram oddiy messenjerdan kattaroq platformaga aylandi va endi unda o‘z ichki valyutasi bor. Stars quyidagi
        maqsadlarda ishlatiladi:
      </p>
      <KeyFacts label="Stars nimalarga sarflanadi">
        <li>Botlarning pullik funksiyalaridan foydalanish.</li>
        <li>Kanal va guruhlarda maxsus kontentga kirish.</li>
        <li>Do‘stlarga raqamli sovg‘alar yuborish.</li>
        <li>Ba’zi hollarda Premium bilan bog‘liq imkoniyatlar.</li>
      </KeyFacts>

      <h2 id="rasmiy">Rasmiy yo‘l va uning cheklovi</h2>
      <p>
        Rasmiy ilova orqali Stars sotib olish uchun bank kartasi yoki App Store/Google Play hisobi kerak bo‘ladi. Ko‘p
        foydalanuvchi uchun bu murakkab: xalqaro kartalar yo‘q, valyuta cheklovlari esa to‘siq bo‘ladi.
      </p>

      <h2 id="oson">Eng oson yo‘l — bot orqali</h2>
      <Steps>
        <Step title="1. Botga kiring">@StarsPaymee_bot ni oching.</Step>
        <Step title="2. Miqdorni tanlang">Kerakli Stars sonini belgilang.</Step>
        <Step title="3. Username kiriting">Telegram username yoki ID.</Step>
        <Step title="4. To‘lovni bajaring">Mahalliy usul orqali so‘mda.</Step>
        <Step title="5. Qabul qiling">Bir necha daqiqada hisobga tushadi.</Step>
      </Steps>
      <p>
        Bu jarayon xalqaro bank kartasi yoki qo‘shimcha ilova talab qilmaydi — barchasi bir joyda.
      </p>

      <h2 id="narx">Stars qancha turadi?</h2>
      <StarsPriceBoard locale="uz" />

      <InlineCta text="Miqdorni tanlab, yakuniy narxni ko‘ring." />

      <p>
        Batafsil: <Link href="/blog/stars-olish">Stars olish qo‘llanmasi</Link>,{" "}
        <Link href="/blog/telegram-stars-narxi">narx masalasi</Link> va{" "}
        <Link href="/blog/telegram-stars-xavfsizmi">xavfsizlik</Link>.
      </p>

      <Sources
        label="Manbalar"
        items={[
          { href: "https://telegram.org/blog", label: "telegram.org/blog", note: "Telegram rasmiy yangiliklari" },
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
      Telegram Stars получают двумя путями: официально внутри приложения (App Store/Google Play, нужна международная
      карта) или через <b>@StarsPaymee_bot</b> в сумах. Во втором случае вы выбираете количество, вводите username и
      платите UzCard, HUMO, Click, Payme или Paynet — звёзды приходят за ~10 секунд.
    </p>
  );
}

function RuBody() {
  return (
    <>
      <h2 id="nima-uchun">Зачем нужны Telegram Stars?</h2>
      <p>
        Telegram давно перерос формат обычного мессенджера, и теперь у него есть собственная внутренняя валюта. Stars
        используют для следующего:
      </p>
      <KeyFacts label="На что тратят Stars">
        <li>Платные функции ботов.</li>
        <li>Доступ к особому контенту в каналах и группах.</li>
        <li>Отправка цифровых подарков друзьям.</li>
        <li>В отдельных случаях — возможности, связанные с Premium.</li>
      </KeyFacts>

      <h2 id="rasmiy">Официальный путь и его ограничение</h2>
      <p>
        Для покупки Stars через официальное приложение нужна банковская карта или аккаунт App Store/Google Play. Для
        многих это сложно: международных карт нет, а валютные ограничения становятся преградой.
      </p>

      <h2 id="oson">Самый простой путь — через бота</h2>
      <Steps>
        <Step title="1. Откройте бота">Откройте @StarsPaymee_bot.</Step>
        <Step title="2. Выберите количество">Укажите нужное число Stars.</Step>
        <Step title="3. Введите username">Telegram username или ID.</Step>
        <Step title="4. Оплатите">Местным способом, в сумах.</Step>
        <Step title="5. Получите">Зачисление за несколько минут.</Step>
      </Steps>
      <p>Этот процесс не требует международной карты или дополнительных приложений — всё в одном месте.</p>

      <h2 id="narx">Сколько стоят Stars?</h2>
      <StarsPriceBoard locale="ru" />

      <InlineCta text="Выберите количество и посмотрите итоговую цену." />

      <p>
        Подробнее: <Link href="/blog/stars-olish">руководство по покупке Stars</Link>,{" "}
        <Link href="/blog/telegram-stars-narxi">вопрос цены</Link> и{" "}
        <Link href="/blog/telegram-stars-xavfsizmi">безопасность</Link>.
      </p>

      <Sources
        label="Источники"
        items={[
          { href: "https://telegram.org/blog", label: "telegram.org/blog", note: "официальные новости Telegram" },
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
      There are two ways to get Telegram Stars: officially inside the app (App Store/Google Play, an international
      card is needed) or through <b>@StarsPaymee_bot</b> in so‘m. In the second case you pick an amount, enter a
      username and pay with UzCard, HUMO, Click, Payme or Paynet — Stars arrive in about 10 seconds.
    </p>
  );
}

function EnBody() {
  return (
    <>
      <h2 id="nima-uchun">What are Telegram Stars for?</h2>
      <p>
        Telegram has grown well past a plain messenger and now has its own internal currency. Stars are used for:
      </p>
      <KeyFacts label="What Stars are spent on">
        <li>Paid features in bots.</li>
        <li>Access to special content in channels and groups.</li>
        <li>Sending digital gifts to friends.</li>
        <li>In some cases, Premium-related options.</li>
      </KeyFacts>

      <h2 id="rasmiy">The official route and its limitation</h2>
      <p>
        Buying Stars through the official app requires a bank card or an App Store/Google Play account. For many
        people that is difficult: international cards are unavailable and currency restrictions get in the way.
      </p>

      <h2 id="oson">The simplest route — through a bot</h2>
      <Steps>
        <Step title="1. Open the bot">Open @StarsPaymee_bot.</Step>
        <Step title="2. Choose an amount">Set the number of Stars you need.</Step>
        <Step title="3. Enter a username">Your Telegram username or ID.</Step>
        <Step title="4. Pay">With a local method, in so‘m.</Step>
        <Step title="5. Receive">Credited within a few minutes.</Step>
      </Steps>
      <p>This process needs no international card and no extra apps — everything happens in one place.</p>

      <h2 id="narx">How much do Stars cost?</h2>
      <StarsPriceBoard locale="en" />

      <InlineCta text="Pick an amount and see the final price." />

      <p>
        More: <Link href="/blog/stars-olish">the guide to getting Stars</Link>,{" "}
        <Link href="/blog/telegram-stars-narxi">the price question</Link> and{" "}
        <Link href="/blog/telegram-stars-xavfsizmi">safety</Link>.
      </p>

      <Sources
        label="Sources"
        items={[
          { href: "https://telegram.org/blog", label: "telegram.org/blog", note: "official Telegram news" },
          { href: "https://core.telegram.org/bots/payments-stars", label: "core.telegram.org", note: "Stars payments documentation" },
        ]}
      />
    </>
  );
}

const uzFaq = [
  { question: "Telegram Stars qanday olinadi?", answer: "Rasmiy ilova ichida yoki @StarsPaymee_bot orqali. Ikkinchisida to‘lov so‘mda, xalqaro karta kerak emas." },
  { question: "Rasmiy usulda nima kerak?", answer: "Bank kartasi yoki App Store/Google Play hisobi, ko‘pincha xalqaro karta." },
  { question: "Bot orqali qancha vaqt ketadi?", answer: "Odatda ~10 soniya, jarayon avtomatik." },
  { question: "1 dona Stars qancha?", answer: "220 so‘m; 50 ta — 11 000 so‘m." },
  { question: "Qanday ma’lumot so‘raladi?", answer: "Faqat Telegram username yoki ID." },
  { question: "Parol kerakmi?", answer: "Yo‘q, hech qachon so‘ralmaydi." },
  { question: "Boshqa hisobga olsam bo‘ladimi?", answer: "Ha, buyurtmada o‘sha hisob username’ini ko‘rsating." },
  { question: "To‘lov usullari qaysilar?", answer: "UzCard, HUMO, Click, Payme va Paynet." },
];

const ruFaq = [
  { question: "Как получить Telegram Stars?", answer: "Внутри официального приложения или через @StarsPaymee_bot. Во втором случае оплата в сумах, международная карта не нужна." },
  { question: "Что нужно для официального способа?", answer: "Банковская карта или аккаунт App Store/Google Play, чаще всего международная карта." },
  { question: "Сколько времени занимает через бота?", answer: "Обычно ~10 секунд, процесс автоматический." },
  { question: "Сколько стоит 1 Stars?", answer: "220 сум; 50 штук — 11 000 сум." },
  { question: "Какие данные запрашиваются?", answer: "Только Telegram username или ID." },
  { question: "Нужен ли пароль?", answer: "Нет, он никогда не запрашивается." },
  { question: "Можно ли на другой аккаунт?", answer: "Да, укажите в заказе его username." },
  { question: "Какие способы оплаты?", answer: "UzCard, HUMO, Click, Payme и Paynet." },
];

const enFaq = [
  { question: "How do you get Telegram Stars?", answer: "Inside the official app or through @StarsPaymee_bot. The latter is paid in so‘m and needs no international card." },
  { question: "What does the official method need?", answer: "A bank card or an App Store/Google Play account, usually an international card." },
  { question: "How long does the bot take?", answer: "Usually about 10 seconds; the process is automatic." },
  { question: "How much is one Star?", answer: "220 UZS; fifty cost 11,000 UZS." },
  { question: "What data is requested?", answer: "Only a Telegram username or ID." },
  { question: "Is a password needed?", answer: "No, it is never requested." },
  { question: "Can I send them to another account?", answer: "Yes — give that account’s username when ordering." },
  { question: "Which payment methods work?", answer: "UzCard, HUMO, Click, Payme and Paynet." },
];

export const post: AeoPost = {
  slug: SLUG,
  category: "Stars",
  type: "howto",
  datePublished: "2026-08-02",
  dateModified: "2026-08-02",
  keywords: [
    "telegram stars qanday olinadi",
    "stars qanday olinadi",
    "telegram stars olish yollari",
    "telegram stars qollanma",
    "stars olish jarayoni",
    "telegram stars 2026",
  ],
  howToSteps: [
    { name: "Botga kiring", text: "@StarsPaymee_bot botini oching." },
    { name: "Miqdorni tanlang", text: "Kerakli Stars sonini belgilang." },
    { name: "Username kiriting", text: "Telegram username yoki ID kiriting." },
    { name: "To‘lovni bajaring", text: "Mahalliy to‘lov usuli orqali so‘mda to‘lang." },
    { name: "Qabul qiling", text: "Yulduzlar bir necha daqiqada hisobga tushadi." },
  ],
  locales: {
    uz: {
      title: "Telegram Stars qanday olinadi — to‘liq qo‘llanma",
      excerpt:
        "Telegram Stars olishning ikki yo‘li: rasmiy ilova va bot orqali so‘mda. Jarayon qadam-baqadam, narxlar va nima uchun rasmiy usul noqulay.",
      metaTitle: "Telegram Stars qanday olinadi — to‘liq qo‘llanma",
      metaDescription:
        "Telegram Stars qanday olinadi? Rasmiy usul va bot orqali so‘mda xarid: qadamlar, narxlar (220 so‘m/dona) va to‘lov usullari.",
      answerTitle: "Qisqa javob",
      Answer: UzAnswer,
      Body: UzBody,
      ctaHeading: "Stars olishni boshlang",
      ctaBody: "@StarsPaymee_bot — miqdorni tanlang, so‘mda to‘lang, ~10 soniyada oling.",
      faq: uzFaq,
    },
    ru: {
      title: "Как получить Telegram Stars — полное руководство",
      excerpt:
        "Два пути получения Telegram Stars: официальное приложение и бот с оплатой в сумах. Процесс по шагам, цены и почему официальный способ неудобен.",
      metaTitle: "Как получить Telegram Stars — полное руководство",
      metaDescription:
        "Как получить Telegram Stars? Официальный способ и покупка через бота в сумах: шаги, цены (220 сум за штуку) и способы оплаты.",
      answerTitle: "Краткий ответ",
      Answer: RuAnswer,
      Body: RuBody,
      ctaHeading: "Начните покупку Stars",
      ctaBody: "@StarsPaymee_bot — выберите количество, оплатите в сумах, получите за ~10 секунд.",
      faq: ruFaq,
    },
    en: {
      title: "How Telegram Stars are obtained — the complete guide",
      excerpt:
        "Two ways to get Telegram Stars: the official app and a bot paid in so‘m. The process step by step, the prices, and why the official route is awkward.",
      metaTitle: "How Telegram Stars are obtained — complete guide",
      metaDescription:
        "How are Telegram Stars obtained? The official method and buying via a bot in so‘m: steps, prices (220 UZS each) and payment methods.",
      answerTitle: "Short answer",
      Answer: EnAnswer,
      Body: EnBody,
      ctaHeading: "Start getting Stars",
      ctaBody: "@StarsPaymee_bot — choose an amount, pay in so‘m, receive in about 10 seconds.",
      faq: enFaq,
    },
  },
};
