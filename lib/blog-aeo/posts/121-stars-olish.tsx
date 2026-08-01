import { Link } from "@/i18n/navigation";
import { InlineCta, Sources, KeyFacts, Steps, Step, InfoGrid, InfoCard } from "@/components/blog/aeo-blocks";
import { StarsPriceBoard } from "@/components/blog/stars-price-board";
import type { AeoPost } from "@/lib/blog-aeo/types";

const SLUG = "stars-olish";

/* ---------------- UZ ---------------- */
function UzAnswer() {
  return (
    <p>
      Stars olish uchun xorijiy karta shart emas: <b>@StarsPaymee_bot</b> da miqdorni tanlaysiz, Telegram
      username’ingizni kiritasiz va UzCard, HUMO, Click yoki Payme orqali <b>so‘mda</b> to‘laysiz. 1 dona Stars —{" "}
      <b>220 so‘m</b>, 50 ta esa <b>11 000 so‘m</b>. Yulduzlar hisobingizga odatda ~10 soniyada tushadi.
    </p>
  );
}

function UzBody() {
  return (
    <>
      <h2 id="nima">Telegram Stars nima va u nimaga kerak?</h2>
      <p>
        Telegram Stars — Telegram ichidagi rasmiy raqamli valyuta. U bilan botlarda pullik funksiyalarni ochasiz,
        kanal mualliflariga homiylik qilasiz, sovg‘a va stikerlar sotib olasiz. Ko‘pchilik uchun asosiy savol bitta:
        <b> Stars olish</b> qanday amalga oshiriladi va eng qulay yo‘l qaysi?
      </p>

      <KeyFacts label="Stars nimalarga sarflanadi">
        <li>Bot va mini-ilovalarda pullik funksiyalar.</li>
        <li>Kanal yoki muallifga homiylik (donat).</li>
        <li>Telegram ichida raqamli sovg‘alar.</li>
        <li>Ayrim o‘yinlarda ichki xaridlar.</li>
      </KeyFacts>

      <h2 id="muammo">Nega rasmiy yo‘l O‘zbekistonda noqulay?</h2>
      <p>
        Rasmiy oqimda to‘lov App Store yoki Google Play orqali o‘tadi va odatda Visa/Mastercard talab qilinadi. Faqat
        UzCard yoki HUMO kartasi bo‘lgan foydalanuvchi bu bosqichda to‘xtab qoladi. Valyuta konvertatsiyasi ham
        qo‘shimcha xarajat qo‘shadi.
      </p>

      <h2 id="narx">Stars narxi qancha?</h2>
      <StarsPriceBoard locale="uz" />

      <InlineCta text="Kerakli miqdorni tanlab, narxni hoziroq ko‘ring." />

      <h2 id="qadamlar">Stars olish — bosqichma-bosqich</h2>
      <Steps>
        <Step title="1. Botni oching">@StarsPaymee_bot ni oching yoki Mini App’ga kiring.</Step>
        <Step title="2. Miqdorni tanlang">50, 100, 500 — tayyor paket yoki o‘z miqdoringiz.</Step>
        <Step title="3. Username kiriting">Yulduzlar tushadigan Telegram hisobini ko‘rsating.</Step>
        <Step title="4. So‘mda to‘lang">UzCard, HUMO, Click, Payme yoki Paynet.</Step>
        <Step title="5. Qabul qiling">Odatda ~10 soniyada hisobga tushadi.</Step>
      </Steps>

      <h2 id="afzallik">Nima uchun shu usul qulay?</h2>
      <InfoGrid>
        <InfoCard emoji="💳" title="Mahalliy kartalar">
          UzCard va HUMO yetarli — xalqaro karta kerak emas.
        </InfoCard>
        <InfoCard emoji="🇺🇿" title="So‘mda to‘lov">
          Konvertatsiya yo‘q, yashirin komissiya yo‘q.
        </InfoCard>
        <InfoCard emoji="⚡" title="Tez yetkazish">
          Avtomatik — o‘rtacha 10 soniya.
        </InfoCard>
        <InfoCard emoji="🔐" title="Parol so‘ralmaydi">
          Faqat username yoki ID kifoya.
        </InfoCard>
      </InfoGrid>

      <p>
        Batafsil: <Link href="/blog/stars-sotib-olish">Stars sotib olish qayerdan xavfsiz</Link>,{" "}
        <Link href="/blog/som-evaziga-stars-olish">so‘m evaziga olish</Link> va{" "}
        <Link href="/blog/visa-kartasiz-stars-olish">Visa kartasiz olish</Link>.
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
      Для покупки Stars не нужна зарубежная карта: в <b>@StarsPaymee_bot</b> вы выбираете количество, указываете
      Telegram username и платите <b>в сумах</b> через UzCard, HUMO, Click или Payme. 1 Stars — <b>220 сум</b>,
      50 штук — <b>11 000 сум</b>. Звёзды поступают на счёт обычно за ~10 секунд.
    </p>
  );
}

function RuBody() {
  return (
    <>
      <h2 id="nima">Что такое Telegram Stars и зачем они нужны?</h2>
      <p>
        Telegram Stars — официальная цифровая валюта внутри Telegram. С её помощью открывают платные функции в ботах,
        поддерживают авторов каналов, покупают подарки и стикеры. Главный вопрос у большинства один: как именно
        происходит <b>покупка Stars</b> и какой способ удобнее.
      </p>

      <KeyFacts label="На что тратят Stars">
        <li>Платные функции в ботах и мини-приложениях.</li>
        <li>Донаты каналу или автору.</li>
        <li>Цифровые подарки внутри Telegram.</li>
        <li>Внутриигровые покупки в некоторых играх.</li>
      </KeyFacts>

      <h2 id="muammo">Почему официальный путь неудобен в Узбекистане?</h2>
      <p>
        В официальном сценарии оплата идёт через App Store или Google Play и обычно требует Visa/Mastercard.
        Пользователь только с UzCard или HUMO останавливается на этом шаге. Конвертация валюты добавляет расходы.
      </p>

      <h2 id="narx">Сколько стоят Stars?</h2>
      <StarsPriceBoard locale="ru" />

      <InlineCta text="Выберите нужное количество и сразу увидите цену." />

      <h2 id="qadamlar">Покупка Stars — по шагам</h2>
      <Steps>
        <Step title="1. Откройте бота">Откройте @StarsPaymee_bot или Mini App.</Step>
        <Step title="2. Выберите количество">50, 100, 500 — готовый пакет или своё число.</Step>
        <Step title="3. Укажите username">Аккаунт Telegram, куда поступят звёзды.</Step>
        <Step title="4. Оплатите в сумах">UzCard, HUMO, Click, Payme или Paynet.</Step>
        <Step title="5. Получите">Обычно зачисление за ~10 секунд.</Step>
      </Steps>

      <h2 id="afzallik">Почему этот способ удобен?</h2>
      <InfoGrid>
        <InfoCard emoji="💳" title="Локальные карты">
          Достаточно UzCard и HUMO — международная карта не нужна.
        </InfoCard>
        <InfoCard emoji="🇺🇿" title="Оплата в сумах">
          Без конвертации и скрытых комиссий.
        </InfoCard>
        <InfoCard emoji="⚡" title="Быстрая доставка">
          Автоматически — в среднем 10 секунд.
        </InfoCard>
        <InfoCard emoji="🔐" title="Пароль не нужен">
          Достаточно username или ID.
        </InfoCard>
      </InfoGrid>

      <p>
        Подробнее: <Link href="/blog/stars-sotib-olish">где безопасно купить Stars</Link>,{" "}
        <Link href="/blog/som-evaziga-stars-olish">покупка за сумы</Link> и{" "}
        <Link href="/blog/visa-kartasiz-stars-olish">без карты Visa</Link>.
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
      You don’t need a foreign card to get Stars: in <b>@StarsPaymee_bot</b> you pick the amount, enter your Telegram
      username and pay <b>in so‘m</b> with UzCard, HUMO, Click or Payme. One Star costs <b>220 UZS</b>, and 50 Stars
      cost <b>11,000 UZS</b>. Stars usually arrive in about 10 seconds.
    </p>
  );
}

function EnBody() {
  return (
    <>
      <h2 id="nima">What are Telegram Stars and what are they for?</h2>
      <p>
        Telegram Stars are the official digital currency inside Telegram. You use them to unlock paid features in bots,
        support channel authors, and buy gifts and stickers. For most people one question matters: how do you actually
        <b> get Stars</b>, and which route is the most convenient?
      </p>

      <KeyFacts label="What Stars are spent on">
        <li>Paid features in bots and mini apps.</li>
        <li>Donations to a channel or author.</li>
        <li>Digital gifts inside Telegram.</li>
        <li>In-app purchases in some games.</li>
      </KeyFacts>

      <h2 id="muammo">Why is the official route awkward in Uzbekistan?</h2>
      <p>
        In the official flow payment goes through the App Store or Google Play and normally requires Visa/Mastercard.
        A user who only holds UzCard or HUMO stops right there. Currency conversion adds cost on top.
      </p>

      <h2 id="narx">How much do Stars cost?</h2>
      <StarsPriceBoard locale="en" />

      <InlineCta text="Pick an amount and see the price straight away." />

      <h2 id="qadamlar">Getting Stars — step by step</h2>
      <Steps>
        <Step title="1. Open the bot">Open @StarsPaymee_bot or the Mini App.</Step>
        <Step title="2. Choose the amount">50, 100, 500 — a ready pack or your own number.</Step>
        <Step title="3. Enter a username">The Telegram account the Stars should land on.</Step>
        <Step title="4. Pay in so‘m">UzCard, HUMO, Click, Payme or Paynet.</Step>
        <Step title="5. Receive">Delivery normally takes about 10 seconds.</Step>
      </Steps>

      <h2 id="afzallik">Why this route is convenient</h2>
      <InfoGrid>
        <InfoCard emoji="💳" title="Local cards">
          UzCard and HUMO are enough — no international card needed.
        </InfoCard>
        <InfoCard emoji="🇺🇿" title="Payment in so‘m">
          No conversion, no hidden fees.
        </InfoCard>
        <InfoCard emoji="⚡" title="Fast delivery">
          Automatic — around 10 seconds on average.
        </InfoCard>
        <InfoCard emoji="🔐" title="No password asked">
          A username or ID is all that’s needed.
        </InfoCard>
      </InfoGrid>

      <p>
        More: <Link href="/blog/stars-sotib-olish">where to buy Stars safely</Link>,{" "}
        <Link href="/blog/som-evaziga-stars-olish">buying with so‘m</Link> and{" "}
        <Link href="/blog/visa-kartasiz-stars-olish">without a Visa card</Link>.
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
  { question: "Stars olish uchun xorijiy karta kerakmi?", answer: "Yo‘q. UzCard, HUMO, Click, Payme yoki Paynet yetarli — to‘lov so‘mda amalga oshiriladi." },
  { question: "1 dona Stars qancha turadi?", answer: "220 so‘m. 50 ta Stars — 11 000 so‘m." },
  { question: "Yulduzlar qancha vaqtda tushadi?", answer: "Odatda ~10 soniyada, avtomatik tarzda." },
  { question: "Parolimni so‘rashadimi?", answer: "Yo‘q. Faqat Telegram username yoki ID kerak bo‘ladi." },
  { question: "Minimal miqdor qancha?", answer: "Bazaviy paket — 50 ta Stars. Botda joriy variantlarni ko‘rasiz." },
  { question: "Boshqa odamga Stars yuborsam bo‘ladimi?", answer: "Ha, buyurtmada o‘sha odamning username’ini ko‘rsatsangiz kifoya." },
  { question: "To‘lov o‘tmay qolsa nima bo‘ladi?", answer: "Summa yechilib, yulduz tushmasa @StarsPaymeeSupport ga murojaat qiling — buyurtma tekshiriladi." },
  { question: "Narx nega rasmiy narxdan farq qiladi?", answer: "Rasmiy oqimda valyuta konvertatsiyasi va do‘kon komissiyasi qo‘shiladi; bu yerda to‘lov to‘g‘ridan-to‘g‘ri so‘mda." },
  { question: "Bot 24/7 ishlaydimi?", answer: "Ha, buyurtma istalgan vaqtda qabul qilinadi." },
  { question: "Stars’ni qaytarib bo‘ladimi?", answer: "Telegram hisobiga tushgan Stars qaytarilmaydi — buyurtmadan oldin miqdorni tekshiring." },
];

const ruFaq = [
  { question: "Нужна ли зарубежная карта для покупки Stars?", answer: "Нет. Достаточно UzCard, HUMO, Click, Payme или Paynet — оплата проходит в сумах." },
  { question: "Сколько стоит 1 Stars?", answer: "220 сум. 50 Stars — 11 000 сум." },
  { question: "Как быстро приходят звёзды?", answer: "Обычно за ~10 секунд, автоматически." },
  { question: "Спросят ли мой пароль?", answer: "Нет. Нужен только Telegram username или ID." },
  { question: "Какое минимальное количество?", answer: "Базовый пакет — 50 Stars. Актуальные варианты видны в боте." },
  { question: "Можно ли отправить Stars другому человеку?", answer: "Да, достаточно указать в заказе его username." },
  { question: "Что если оплата не прошла?", answer: "Если сумма списана, а звёзды не пришли, напишите в @StarsPaymeeSupport — заказ проверят." },
  { question: "Почему цена отличается от официальной?", answer: "В официальном сценарии добавляются конвертация валюты и комиссия магазина; здесь оплата сразу в сумах." },
  { question: "Бот работает круглосуточно?", answer: "Да, заказ принимается в любое время." },
  { question: "Можно ли вернуть Stars?", answer: "Звёзды, зачисленные на аккаунт Telegram, не возвращаются — проверяйте количество до заказа." },
];

const enFaq = [
  { question: "Do I need a foreign card to get Stars?", answer: "No. UzCard, HUMO, Click, Payme or Paynet is enough — payment is made in so‘m." },
  { question: "How much does one Star cost?", answer: "220 UZS. Fifty Stars cost 11,000 UZS." },
  { question: "How fast do Stars arrive?", answer: "Usually in about 10 seconds, automatically." },
  { question: "Will I be asked for my password?", answer: "No. Only a Telegram username or ID is required." },
  { question: "What is the minimum amount?", answer: "The base pack is 50 Stars. Current options are shown in the bot." },
  { question: "Can I send Stars to someone else?", answer: "Yes — just give their username when you order." },
  { question: "What if the payment fails?", answer: "If money left your card but no Stars arrived, contact @StarsPaymeeSupport and the order will be checked." },
  { question: "Why does the price differ from the official one?", answer: "The official flow adds currency conversion and a store fee; here you pay directly in so‘m." },
  { question: "Does the bot work 24/7?", answer: "Yes, orders are accepted at any time." },
  { question: "Can Stars be refunded?", answer: "Stars credited to a Telegram account cannot be returned — check the amount before ordering." },
];

export const post: AeoPost = {
  slug: SLUG,
  category: "Stars",
  type: "howto",
  datePublished: "2026-08-01",
  dateModified: "2026-08-01",
  keywords: [
    "stars olish",
    "telegram stars",
    "telegram stars olish",
    "stars olish uzbekistan",
    "telegram stars narxi",
    "stars olish 2026",
  ],
  howToSteps: [
    { name: "Botni oching", text: "@StarsPaymee_bot botini yoki Mini App’ni oching." },
    { name: "Miqdorni tanlang", text: "50, 100, 500 — tayyor paket yoki o‘z miqdoringizni kiriting." },
    { name: "Username kiriting", text: "Yulduzlar tushadigan Telegram hisobini ko‘rsating." },
    { name: "To‘lang", text: "UzCard, HUMO, Click, Payme yoki Paynet orqali so‘mda to‘lang." },
    { name: "Qabul qiling", text: "Yulduzlar odatda ~10 soniyada hisobga tushadi." },
  ],
  locales: {
    uz: {
      title: "Stars olish — 2026-yilda eng qulay va tez usul",
      excerpt:
        "Telegram Stars olishning eng oson yo‘li: 220 so‘m/dona, 50 ta — 11 000 so‘m. UzCard, HUMO, Click orqali so‘mda to‘lov va ~10 soniyada yetkazish.",
      metaTitle: "Stars olish — 2026-yil, so‘mda va tez",
      metaDescription:
        "Telegram Stars olish: narxi 220 so‘m/dona, 50 ta — 11 000 so‘m. Xorijiy kartasiz, UzCard/HUMO/Click bilan so‘mda to‘lov va ~10 soniyada yetkazish.",
      answerTitle: "Qisqa javob",
      Answer: UzAnswer,
      Body: UzBody,
      ctaHeading: "Stars’ni hoziroq oling",
      ctaBody: "@StarsPaymee_bot da miqdorni tanlang — narx darhol ko‘rinadi, to‘lov so‘mda.",
      faq: uzFaq,
    },
    ru: {
      title: "Покупка Stars — самый удобный и быстрый способ в 2026",
      excerpt:
        "Самый простой способ купить Telegram Stars: 220 сум за штуку, 50 штук — 11 000 сум. Оплата в сумах через UzCard, HUMO, Click и доставка за ~10 секунд.",
      metaTitle: "Покупка Stars — 2026, в сумах и быстро",
      metaDescription:
        "Как купить Telegram Stars: 220 сум за штуку, 50 штук — 11 000 сум. Без зарубежной карты, оплата UzCard/HUMO/Click в сумах, доставка за ~10 секунд.",
      answerTitle: "Краткий ответ",
      Answer: RuAnswer,
      Body: RuBody,
      ctaHeading: "Получите Stars прямо сейчас",
      ctaBody: "Выберите количество в @StarsPaymee_bot — цена появится сразу, оплата в сумах.",
      faq: ruFaq,
    },
    en: {
      title: "Getting Stars — the easiest, fastest way in 2026",
      excerpt:
        "The simplest way to get Telegram Stars: 220 UZS each, 50 for 11,000 UZS. Pay in so‘m with UzCard, HUMO or Click and receive them in about 10 seconds.",
      metaTitle: "Getting Stars — 2026, in so‘m and fast",
      metaDescription:
        "How to get Telegram Stars: 220 UZS each, 50 for 11,000 UZS. No foreign card — pay with UzCard/HUMO/Click in so‘m, delivered in about 10 seconds.",
      answerTitle: "Short answer",
      Answer: EnAnswer,
      Body: EnBody,
      ctaHeading: "Get your Stars now",
      ctaBody: "Pick an amount in @StarsPaymee_bot — the price appears instantly and you pay in so‘m.",
      faq: enFaq,
    },
  },
};
