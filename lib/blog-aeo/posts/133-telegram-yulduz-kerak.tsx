import { Link } from "@/i18n/navigation";
import { InlineCta, Sources, KeyFacts, Steps, Step } from "@/components/blog/aeo-blocks";
import { StarsPriceBoard } from "@/components/blog/stars-price-board";
import type { AeoPost } from "@/lib/blog-aeo/types";

const SLUG = "telegram-yulduz-kerak";

/* ---------------- UZ ---------------- */
function UzAnswer() {
  return (
    <p>
      «Telegram yulduz» — Stars valyutasining o‘zbekcha nomi. Uni ikki joydan olish mumkin: rasmiy Telegram
      sozlamalari orqali (xalqaro karta kerak) yoki <b>@StarsPaymee_bot</b> orqali so‘mda. Ikkinchisi mahalliy
      to‘lovni qo‘llab-quvvatlaydi va bir necha daqiqada yakunlanadi.
    </p>
  );
}

function UzBody() {
  return (
    <>
      <h2 id="nima">Telegram yulduzi nima?</h2>
      <p>
        Telegram yulduzi (Stars) — platforma ichidagi raqamli valyuta. Bu oddiy pul emas, faqat Telegram ekotizimi
        ichida ishlaydigan maxsus birlik.
      </p>
      <KeyFacts label="Yulduz nimalarga ishlatiladi">
        <li>Botlardan pullik xizmat sotib olish.</li>
        <li>Do‘stlarga sovg‘a yuborish.</li>
        <li>Kanal muallifiga homiylik qilish.</li>
        <li>Ba’zi hollarda Premium bilan bog‘liq imkoniyatlar.</li>
      </KeyFacts>

      <h2 id="qayerdan">Yulduzlarni qayerdan olish mumkin?</h2>
      <h3>1. Rasmiy Telegram orqali</h3>
      <p>
        Ilova ichidagi sozlamalar bo‘limidan Stars sotib olish mumkin. Ammo bu usul bank kartasi cheklovlari yoki
        qo‘shimcha to‘lov tizimlari talab qilishi sababli har doim ham qulay bo‘lavermaydi.
      </p>
      <h3>2. Ishonchli mahalliy xizmat orqali</h3>
      <p>
        <b>@StarsPaymee_bot</b> va starstg.uz aynan shu muammoni yechish uchun ishlaydi: mahalliy to‘lov usullari,
        xalqaro kartasiz, jarayon bir necha daqiqada.
      </p>

      <StarsPriceBoard locale="uz" />

      <InlineCta text="Kerakli yulduz miqdorini tanlang." />

      <h2 id="qadamlar">Qadam-baqadam qo‘llanma</h2>
      <Steps>
        <Step title="1. Botni oching">@StarsPaymee_bot.</Step>
        <Step title="2. Miqdorni tanlang">Kerakli yulduz sonini belgilang.</Step>
        <Step title="3. Ma’lumot kiriting">Telegram username yoki ID.</Step>
        <Step title="4. To‘lang">UzCard, HUMO, Click, Payme yoki Paynet.</Step>
        <Step title="5. Qabul qiling">Yulduzlar avtomatik tushadi.</Step>
      </Steps>

      <h2 id="xavfsizlik">Xavfsizlik masalasi</h2>
      <p>
        Yulduz sotib olishda faqat tekshirilgan xizmatlardan foydalaning. Shubhali saytlar yoki noma’lum botlarga
        shaxsiy ma’lumot, parol yoki SMS-kod kiritishdan saqlaning — rasmiy xizmat bularni <b>hech qachon</b>{" "}
        so‘ramaydi.
      </p>

      <p>
        Qarang: <Link href="/blog/yulduz-olish">Yulduz olish qo‘llanmasi</Link>,{" "}
        <Link href="/blog/telegram-yulduz-sotib-olish">Telegram Yulduz sotib olish</Link> va{" "}
        <Link href="/blog/telegram-stars-xavfsizmi">xavfsizlik</Link>.
      </p>

      <Sources
        label="Manbalar"
        items={[
          { href: "https://telegram.org/faq", label: "telegram.org/faq", note: "Telegram rasmiy FAQ" },
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
      «Telegram yulduz» — узбекское название валюты Stars. Получить её можно двумя путями: через официальные
      настройки Telegram (нужна международная карта) или через <b>@StarsPaymee_bot</b> в сумах. Второй поддерживает
      местную оплату и занимает несколько минут.
    </p>
  );
}

function RuBody() {
  return (
    <>
      <h2 id="nima">Что такое звезда Telegram?</h2>
      <p>
        Звезда Telegram (Stars) — цифровая валюта внутри платформы. Это не обычные деньги, а особая единица, которая
        работает только внутри экосистемы Telegram.
      </p>
      <KeyFacts label="Для чего используются звёзды">
        <li>Покупка платных услуг у ботов.</li>
        <li>Отправка подарков друзьям.</li>
        <li>Поддержка автора канала.</li>
        <li>В отдельных случаях — возможности, связанные с Premium.</li>
      </KeyFacts>

      <h2 id="qayerdan">Где можно получить звёзды?</h2>
      <h3>1. Через официальный Telegram</h3>
      <p>
        Stars можно купить в разделе настроек приложения. Но этот способ не всегда удобен из-за ограничений
        банковских карт или требования дополнительных платёжных систем.
      </p>
      <h3>2. Через надёжный местный сервис</h3>
      <p>
        <b>@StarsPaymee_bot</b> и starstg.uz работают именно для решения этой проблемы: местные способы оплаты, без
        международной карты, процесс за несколько минут.
      </p>

      <StarsPriceBoard locale="ru" />

      <InlineCta text="Выберите нужное количество звёзд." />

      <h2 id="qadamlar">Пошаговое руководство</h2>
      <Steps>
        <Step title="1. Откройте бота">@StarsPaymee_bot.</Step>
        <Step title="2. Выберите количество">Укажите нужное число звёзд.</Step>
        <Step title="3. Введите данные">Telegram username или ID.</Step>
        <Step title="4. Оплатите">UzCard, HUMO, Click, Payme или Paynet.</Step>
        <Step title="5. Получите">Звёзды зачисляются автоматически.</Step>
      </Steps>

      <h2 id="xavfsizlik">Вопрос безопасности</h2>
      <p>
        Покупайте звёзды только у проверенных сервисов. Не вводите личные данные, пароль или SMS-код на подозрительных
        сайтах и у неизвестных ботов — официальный сервис <b>никогда</b> их не запрашивает.
      </p>

      <p>
        Смотрите: <Link href="/blog/yulduz-olish">руководство «Yulduz olish»</Link>,{" "}
        <Link href="/blog/telegram-yulduz-sotib-olish">покупка Telegram Yulduz</Link> и{" "}
        <Link href="/blog/telegram-stars-xavfsizmi">безопасность</Link>.
      </p>

      <Sources
        label="Источники"
        items={[
          { href: "https://telegram.org/faq", label: "telegram.org/faq", note: "официальный FAQ Telegram" },
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
      «Telegram yulduz» is the Uzbek name for the Stars currency. You can get it two ways: through official Telegram
      settings (an international card is needed) or through <b>@StarsPaymee_bot</b> in so‘m. The second supports
      local payment and takes a few minutes.
    </p>
  );
}

function EnBody() {
  return (
    <>
      <h2 id="nima">What is a Telegram star?</h2>
      <p>
        A Telegram star (Stars) is a digital currency inside the platform. It is not ordinary money but a special
        unit that only works within the Telegram ecosystem.
      </p>
      <KeyFacts label="What stars are used for">
        <li>Buying paid services from bots.</li>
        <li>Sending gifts to friends.</li>
        <li>Supporting a channel author.</li>
        <li>In some cases, Premium-related options.</li>
      </KeyFacts>

      <h2 id="qayerdan">Where can you get stars?</h2>
      <h3>1. Through official Telegram</h3>
      <p>
        Stars can be bought in the app’s settings section. But this route is not always convenient because of bank
        card restrictions or the need for additional payment systems.
      </p>
      <h3>2. Through a trusted local service</h3>
      <p>
        <b>@StarsPaymee_bot</b> and starstg.uz exist precisely to solve that: local payment methods, no international
        card, and the process finishes in a few minutes.
      </p>

      <StarsPriceBoard locale="en" />

      <InlineCta text="Choose the number of stars you need." />

      <h2 id="qadamlar">Step-by-step guide</h2>
      <Steps>
        <Step title="1. Open the bot">@StarsPaymee_bot.</Step>
        <Step title="2. Choose an amount">Set the number of stars you need.</Step>
        <Step title="3. Enter the details">Telegram username or ID.</Step>
        <Step title="4. Pay">UzCard, HUMO, Click, Payme or Paynet.</Step>
        <Step title="5. Receive">Stars are credited automatically.</Step>
      </Steps>

      <h2 id="xavfsizlik">The safety question</h2>
      <p>
        Only buy stars from verified services. Never enter personal data, a password or an SMS code on suspicious
        sites or with unknown bots — an official service <b>never</b> asks for them.
      </p>

      <p>
        See: <Link href="/blog/yulduz-olish">the «Yulduz olish» guide</Link>,{" "}
        <Link href="/blog/telegram-yulduz-sotib-olish">buying Telegram Yulduz</Link> and{" "}
        <Link href="/blog/telegram-stars-xavfsizmi">safety</Link>.
      </p>

      <Sources
        label="Sources"
        items={[
          { href: "https://telegram.org/faq", label: "telegram.org/faq", note: "official Telegram FAQ" },
          { href: "https://core.telegram.org/bots/payments-stars", label: "core.telegram.org", note: "Stars payments documentation" },
        ]}
      />
    </>
  );
}

const uzFaq = [
  { question: "Telegram yulduzi nima?", answer: "Telegram ichidagi raqamli valyuta — Stars. Faqat platforma ekotizimida ishlaydi." },
  { question: "Yulduz kerak bo‘lsa qayerdan olaman?", answer: "Rasmiy ilova sozlamalaridan yoki @StarsPaymee_bot orqali." },
  { question: "Rasmiy usul nega qulay emas?", answer: "Bank kartasi cheklovlari va qo‘shimcha to‘lov tizimlari talab qilinishi sababli." },
  { question: "Yulduz narxi qancha?", answer: "1 dona — 220 so‘m, 50 ta — 11 000 so‘m." },
  { question: "Qancha vaqt oladi?", answer: "Odatda ~10 soniya." },
  { question: "Parol so‘raladimi?", answer: "Yo‘q. Faqat username yoki ID kerak." },
  { question: "Qanday xizmatni tanlash kerak?", answer: "Tekshirilgan, sharhlari bor va rasmiy to‘lov tizimlaridan foydalanadigan xizmatni." },
  { question: "Yulduzlar muddati tugaydimi?", answer: "Yo‘q, hisobingizda saqlanib turadi." },
];

const ruFaq = [
  { question: "Что такое звезда Telegram?", answer: "Цифровая валюта внутри Telegram — Stars. Работает только в экосистеме платформы." },
  { question: "Где получить звёзды, если они нужны?", answer: "В настройках официального приложения или через @StarsPaymee_bot." },
  { question: "Почему официальный способ неудобен?", answer: "Из-за ограничений банковских карт и требования дополнительных платёжных систем." },
  { question: "Сколько стоит звезда?", answer: "1 штука — 220 сум, 50 штук — 11 000 сум." },
  { question: "Сколько это занимает?", answer: "Обычно ~10 секунд." },
  { question: "Спрашивают ли пароль?", answer: "Нет. Нужен только username или ID." },
  { question: "Какой сервис выбрать?", answer: "Проверенный, с отзывами и официальными платёжными системами." },
  { question: "Сгорают ли звёзды?", answer: "Нет, они хранятся на вашем аккаунте." },
];

const enFaq = [
  { question: "What is a Telegram star?", answer: "A digital currency inside Telegram — Stars. It only works within the platform’s ecosystem." },
  { question: "Where do I get stars when I need them?", answer: "In the official app’s settings or through @StarsPaymee_bot." },
  { question: "Why is the official route inconvenient?", answer: "Because of bank card restrictions and the need for additional payment systems." },
  { question: "How much does a star cost?", answer: "220 UZS each; 11,000 UZS for fifty." },
  { question: "How long does it take?", answer: "Usually about 10 seconds." },
  { question: "Is a password requested?", answer: "No. Only a username or ID is needed." },
  { question: "Which service should I choose?", answer: "A verified one with reviews that uses official payment systems." },
  { question: "Do stars expire?", answer: "No, they stay on your account." },
];

export const post: AeoPost = {
  slug: SLUG,
  category: "Stars",
  type: "info",
  datePublished: "2026-08-02",
  dateModified: "2026-08-02",
  keywords: [
    "telegram yulduz kerak",
    "yulduz kerak",
    "telegram yulduzi nima",
    "yulduz qayerdan olinadi",
    "telegram yulduz narxi",
    "yulduz kerak 2026",
  ],
  howToSteps: [
    { name: "Botni oching", text: "@StarsPaymee_bot botini oching." },
    { name: "Miqdorni tanlang", text: "Kerakli yulduz sonini belgilang." },
    { name: "Ma’lumot kiriting", text: "Telegram username yoki ID kiriting." },
    { name: "To‘lang", text: "UzCard, HUMO, Click, Payme yoki Paynet orqali." },
    { name: "Qabul qiling", text: "Yulduzlar avtomatik hisobga tushadi." },
  ],
  locales: {
    uz: {
      title: "Telegram yulduz kerak — qayerdan sotib olish mumkin",
      excerpt:
        "Telegram yulduzi nima, u nimaga ishlatiladi va qayerdan olish mumkin? Rasmiy va mahalliy yo‘l, narxlar hamda xavfsizlik maslahatlari.",
      metaTitle: "Telegram yulduz kerak — qayerdan olish mumkin",
      metaDescription:
        "Telegram yulduz kerakmi? Yulduz nima, qayerdan sotib olinadi, narxi qancha (220 so‘m/dona) va qanday qilib xavfsiz xarid qilish kerak.",
      answerTitle: "Qisqa javob",
      Answer: UzAnswer,
      Body: UzBody,
      ctaHeading: "Yulduzlarni oling",
      ctaBody: "@StarsPaymee_bot — mahalliy to‘lov, xalqaro kartasiz, bir necha daqiqada.",
      faq: uzFaq,
    },
    ru: {
      title: "Нужны звёзды Telegram — где их купить",
      excerpt:
        "Что такое звезда Telegram, для чего она нужна и где её получить? Официальный и местный путь, цены и советы по безопасности.",
      metaTitle: "Нужны звёзды Telegram — где их купить",
      metaDescription:
        "Нужны звёзды Telegram? Что это такое, где купить, сколько стоит (220 сум за штуку) и как совершить покупку безопасно.",
      answerTitle: "Краткий ответ",
      Answer: RuAnswer,
      Body: RuBody,
      ctaHeading: "Получите звёзды",
      ctaBody: "@StarsPaymee_bot — местная оплата, без международной карты, за несколько минут.",
      faq: ruFaq,
    },
    en: {
      title: "Need Telegram stars — where to buy them",
      excerpt:
        "What a Telegram star is, what it is used for and where to get it: the official and local routes, prices and safety advice.",
      metaTitle: "Need Telegram stars — where to buy them",
      metaDescription:
        "Need Telegram stars? What they are, where to buy them, how much they cost (220 UZS each) and how to buy safely.",
      answerTitle: "Short answer",
      Answer: EnAnswer,
      Body: EnBody,
      ctaHeading: "Get your stars",
      ctaBody: "@StarsPaymee_bot — local payment, no international card, done in minutes.",
      faq: enFaq,
    },
  },
};
