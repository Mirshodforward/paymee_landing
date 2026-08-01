import { Link } from "@/i18n/navigation";
import { InlineCta, Sources, KeyFacts, Steps, Step } from "@/components/blog/aeo-blocks";
import { StarsPriceBoard } from "@/components/blog/stars-price-board";
import type { AeoPost } from "@/lib/blog-aeo/types";

const SLUG = "yulduz-olish";

/* ---------------- UZ ---------------- */
function UzAnswer() {
  return (
    <p>
      Yulduz olish — to‘rt qadam: <b>@StarsPaymee_bot</b> ga o‘tish, miqdorni tanlash, username kiritish va so‘mda
      to‘lash. Narx — <b>220 so‘m</b> dan bir dona, 50 ta — <b>11 000 so‘m</b>. Yulduzlar ~10 soniyada hisobingizga
      tushadi, parol so‘ralmaydi.
    </p>
  );
}

function UzBody() {
  return (
    <>
      <h2 id="nima-uchun">Yulduzlar nima uchun kerak?</h2>
      <KeyFacts label="Eng ko‘p uchraydigan maqsadlar">
        <li>Botlarda pullik xizmatlardan foydalanish.</li>
        <li>Kanal mualliflariga homiylik (donat) qilish.</li>
        <li>Sovg‘a va stikerlar sotib olish.</li>
        <li>Mini-o‘yin va ilovalarda ichki xaridlar.</li>
      </KeyFacts>

      <h2 id="tezkor">Yulduz olishning eng tezkor yo‘li</h2>
      <Steps>
        <Step title="1. Botga o‘ting">@StarsPaymee_bot ni oching.</Step>
        <Step title="2. Miqdorni tanlang">Masalan 50, 100, 250 yoki 500.</Step>
        <Step title="3. To‘lovni bajaring">UzCard, HUMO, Click, Payme yoki Paynet.</Step>
        <Step title="4. Qabul qiling">Yulduzlar bir necha soniyada hisobingizga tushadi.</Step>
      </Steps>

      <h2 id="narx">Narxlar jadvali</h2>
      <StarsPriceBoard locale="uz" />

      <InlineCta text="Birinchi buyurtmani hoziroq sinab ko‘ring." />

      <h2 id="birinchi">Birinchi marta olayotganlar uchun eslatma</h2>
      <p>
        Username’ni <b>to‘g‘ri</b> kiriting — yulduzlar aynan o‘sha hisobga tushadi va tushgandan keyin qaytarilmaydi.
        Agar boshqa odamga sovg‘a qilmoqchi bo‘lsangiz, uning username’ini ko‘rsating. Hech qanday holatda parol,
        SMS-kod yoki 2FA parolini hech kimga bermang — rasmiy xizmat buni <b>hech qachon</b> so‘ramaydi.
      </p>

      <p>
        Batafsil: <Link href="/blog/telegram-yulduz-sotib-olish">Telegram Yulduz sotib olish</Link>,{" "}
        <Link href="/blog/stars-olish">Stars olish</Link> va{" "}
        <Link href="/blog/stars-sotib-olish">xavfsiz xarid mezonlari</Link>.
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
      Покупка звёзд — четыре шага: открыть <b>@StarsPaymee_bot</b>, выбрать количество, указать username и оплатить в
      сумах. Цена — от <b>220 сум</b> за штуку, 50 штук — <b>11 000 сум</b>. Звёзды поступают за ~10 секунд, пароль не
      запрашивается.
    </p>
  );
}

function RuBody() {
  return (
    <>
      <h2 id="nima-uchun">Зачем нужны звёзды?</h2>
      <KeyFacts label="Самые частые цели">
        <li>Платные услуги в ботах.</li>
        <li>Донаты авторам каналов.</li>
        <li>Покупка подарков и стикеров.</li>
        <li>Внутренние покупки в мини-играх и приложениях.</li>
      </KeyFacts>

      <h2 id="tezkor">Самый быстрый способ получить звёзды</h2>
      <Steps>
        <Step title="1. Откройте бота">Откройте @StarsPaymee_bot.</Step>
        <Step title="2. Выберите количество">Например 50, 100, 250 или 500.</Step>
        <Step title="3. Оплатите">UzCard, HUMO, Click, Payme или Paynet.</Step>
        <Step title="4. Получите">Звёзды поступят на счёт за несколько секунд.</Step>
      </Steps>

      <h2 id="narx">Таблица цен</h2>
      <StarsPriceBoard locale="ru" />

      <InlineCta text="Попробуйте первый заказ прямо сейчас." />

      <h2 id="birinchi">Памятка для тех, кто покупает впервые</h2>
      <p>
        Указывайте username <b>внимательно</b> — звёзды поступят именно на этот аккаунт и после зачисления не
        возвращаются. Если хотите сделать подарок, укажите username получателя. Ни при каких обстоятельствах не
        сообщайте никому пароль, SMS-код или пароль 2FA — официальный сервис <b>никогда</b> их не спрашивает.
      </p>

      <p>
        Подробнее: <Link href="/blog/telegram-yulduz-sotib-olish">покупка Telegram Yulduz</Link>,{" "}
        <Link href="/blog/stars-olish">покупка Stars</Link> и{" "}
        <Link href="/blog/stars-sotib-olish">критерии безопасной покупки</Link>.
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
      Getting Stars takes four steps: open <b>@StarsPaymee_bot</b>, choose an amount, enter a username and pay in
      so‘m. The price starts at <b>220 UZS</b> each; fifty cost <b>11,000 UZS</b>. Stars arrive in about 10 seconds
      and no password is requested.
    </p>
  );
}

function EnBody() {
  return (
    <>
      <h2 id="nima-uchun">What are Stars for?</h2>
      <KeyFacts label="The most common purposes">
        <li>Paid services in bots.</li>
        <li>Donations to channel authors.</li>
        <li>Buying gifts and stickers.</li>
        <li>In-app purchases in mini games and apps.</li>
      </KeyFacts>

      <h2 id="tezkor">The fastest way to get Stars</h2>
      <Steps>
        <Step title="1. Open the bot">Open @StarsPaymee_bot.</Step>
        <Step title="2. Choose an amount">For example 50, 100, 250 or 500.</Step>
        <Step title="3. Pay">UzCard, HUMO, Click, Payme or Paynet.</Step>
        <Step title="4. Receive">Stars land on the account within seconds.</Step>
      </Steps>

      <h2 id="narx">Price table</h2>
      <StarsPriceBoard locale="en" />

      <InlineCta text="Try a first order right now." />

      <h2 id="birinchi">A note for first-time buyers</h2>
      <p>
        Enter the username <b>carefully</b> — Stars go to exactly that account and cannot be returned once credited.
        If you are sending a gift, give the recipient’s username. Never share your password, SMS code or 2FA password
        with anyone — an official service will <b>never</b> ask for them.
      </p>

      <p>
        More: <Link href="/blog/telegram-yulduz-sotib-olish">buying Telegram Yulduz</Link>,{" "}
        <Link href="/blog/stars-olish">getting Stars</Link> and{" "}
        <Link href="/blog/stars-sotib-olish">what makes a purchase safe</Link>.
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
  { question: "Yulduz olish uchun nima kerak?", answer: "Telegram hisobi, username va mahalliy to‘lov usuli (UzCard, HUMO, Click, Payme yoki Paynet)." },
  { question: "Narxi qancha?", answer: "1 dona — 220 so‘m, 50 ta — 11 000 so‘m." },
  { question: "Qancha vaqt oladi?", answer: "Odatda ~10 soniya — jarayon avtomatik." },
  { question: "Parol so‘raladimi?", answer: "Yo‘q, hech qachon. Faqat username yoki ID." },
  { question: "Username’ni xato yozsam nima bo‘ladi?", answer: "Yulduzlar o‘sha hisobga tushadi, shuning uchun to‘lovdan oldin tekshiring." },
  { question: "Sovg‘a qilish mumkinmi?", answer: "Ha, buyurtmada oluvchining username’ini ko‘rsating." },
  { question: "Eng kam nechta?", answer: "Bazaviy paket — 50 ta." },
  { question: "Yulduz muddati bormi?", answer: "Yo‘q, hisobda saqlanib turadi." },
  { question: "Naqd to‘lov bormi?", answer: "Paynet orqali naqd to‘lash mumkin." },
  { question: "Yordam qayerdan olaman?", answer: "@StarsPaymeeSupport kanalidan." },
];

const ruFaq = [
  { question: "Что нужно для покупки звёзд?", answer: "Аккаунт Telegram, username и местный способ оплаты (UzCard, HUMO, Click, Payme или Paynet)." },
  { question: "Сколько это стоит?", answer: "1 штука — 220 сум, 50 штук — 11 000 сум." },
  { question: "Сколько времени занимает?", answer: "Обычно ~10 секунд — процесс автоматический." },
  { question: "Спрашивают ли пароль?", answer: "Нет, никогда. Только username или ID." },
  { question: "Что если ошибиться в username?", answer: "Звёзды поступят на указанный аккаунт, поэтому проверяйте до оплаты." },
  { question: "Можно ли подарить?", answer: "Да, укажите в заказе username получателя." },
  { question: "Какое минимальное количество?", answer: "Базовый пакет — 50 штук." },
  { question: "Есть ли срок действия у звёзд?", answer: "Нет, они хранятся на аккаунте." },
  { question: "Есть ли оплата наличными?", answer: "Да, наличными можно заплатить через Paynet." },
  { question: "Где получить помощь?", answer: "В канале @StarsPaymeeSupport." },
];

const enFaq = [
  { question: "What do I need to get Stars?", answer: "A Telegram account, a username and a local payment method (UzCard, HUMO, Click, Payme or Paynet)." },
  { question: "How much does it cost?", answer: "220 UZS each; 11,000 UZS for fifty." },
  { question: "How long does it take?", answer: "Usually about 10 seconds — the process is automatic." },
  { question: "Will I be asked for a password?", answer: "No, never. Only a username or ID." },
  { question: "What if I mistype the username?", answer: "Stars go to the account you entered, so check it before paying." },
  { question: "Can I send them as a gift?", answer: "Yes — give the recipient’s username when ordering." },
  { question: "What is the minimum amount?", answer: "The base pack is 50." },
  { question: "Do Stars have an expiry date?", answer: "No, they stay on the account." },
  { question: "Is cash payment available?", answer: "Yes, you can pay cash through Paynet." },
  { question: "Where can I get help?", answer: "In the @StarsPaymeeSupport channel." },
];

export const post: AeoPost = {
  slug: SLUG,
  category: "Stars",
  type: "howto",
  datePublished: "2026-08-01",
  dateModified: "2026-08-01",
  keywords: [
    "yulduz olish",
    "telegram yulduz olish",
    "yulduz olish narxi",
    "yulduz olish qollanma",
    "telegram stars yulduz",
    "yulduz olish 2026",
  ],
  howToSteps: [
    { name: "Botga o‘ting", text: "@StarsPaymee_bot ni oching." },
    { name: "Miqdorni tanlang", text: "Masalan 50, 100, 250 yoki 500 ta." },
    { name: "To‘lovni bajaring", text: "UzCard, HUMO, Click, Payme yoki Paynet orqali." },
    { name: "Qabul qiling", text: "Yulduzlar bir necha soniyada hisobga tushadi." },
  ],
  locales: {
    uz: {
      title: "Yulduz olish — Telegramda Stars xaridi bo‘yicha qisqa qo‘llanma",
      excerpt:
        "Yulduz olishning 4 qadami, narxlar jadvali (220 so‘m/dona) va birinchi marta olayotganlar uchun xavfsizlik eslatmasi.",
      metaTitle: "Yulduz olish — qisqa va aniq qo‘llanma",
      metaDescription:
        "Yulduz olish bo‘yicha qisqa qo‘llanma: 4 qadam, narxlar (1 dona 220 so‘m, 50 ta 11 000 so‘m) va so‘mda to‘lov usullari.",
      answerTitle: "Qisqa javob",
      Answer: UzAnswer,
      Body: UzBody,
      ctaHeading: "Yulduz olishni boshlang",
      ctaBody: "@StarsPaymee_bot — 4 qadam, so‘mda to‘lov, ~10 soniyada yetkazish.",
      faq: uzFaq,
    },
    ru: {
      title: "Yulduz olish — краткое руководство по покупке Stars в Telegram",
      excerpt:
        "Четыре шага покупки звёзд, таблица цен (220 сум за штуку) и памятка по безопасности для тех, кто покупает впервые.",
      metaTitle: "Yulduz olish — краткое и понятное руководство",
      metaDescription:
        "Краткое руководство по покупке звёзд: 4 шага, цены (1 штука 220 сум, 50 штук 11 000 сум) и способы оплаты в сумах.",
      answerTitle: "Краткий ответ",
      Answer: RuAnswer,
      Body: RuBody,
      ctaHeading: "Начните покупку звёзд",
      ctaBody: "@StarsPaymee_bot — 4 шага, оплата в сумах, доставка за ~10 секунд.",
      faq: ruFaq,
    },
    en: {
      title: "Yulduz olish — a short guide to buying Stars in Telegram",
      excerpt:
        "The four steps to getting Stars, a price table (220 UZS each) and a safety note for first-time buyers.",
      metaTitle: "Yulduz olish — a short, clear guide",
      metaDescription:
        "A short guide to getting Stars: 4 steps, prices (220 UZS each, 11,000 UZS for fifty) and the so‘m payment methods.",
      answerTitle: "Short answer",
      Answer: EnAnswer,
      Body: EnBody,
      ctaHeading: "Start getting Stars",
      ctaBody: "@StarsPaymee_bot — four steps, payment in so‘m, delivery in about 10 seconds.",
      faq: enFaq,
    },
  },
};
