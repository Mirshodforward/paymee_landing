import { Link } from "@/i18n/navigation";
import { InlineCta, Sources, KeyFacts, Steps, Step, CompareTable, Yes, No } from "@/components/blog/aeo-blocks";
import { PremiumPlanBoard } from "@/components/blog/premium-plan-board";
import type { AeoPost } from "@/lib/blog-aeo/types";

const SLUG = "telegram-premium-sotib-olish";

/* ---------------- UZ ---------------- */
function UzAnswer() {
  return (
    <p>
      Telegram Premium sotib olish uchun <b>@StarsPaymee_bot</b> ga o‘tib, muddatni tanlang, username kiriting va
      so‘mda to‘lang. Username oqimida <b>3, 6, 12 oy</b>, login oqimida esa <b>1 va 12 oy</b> mavjud. To‘lov:
      UzCard, HUMO, Click, Payme, Paynet; rublda — faqat SBP.
    </p>
  );
}

function UzBody() {
  return (
    <>
      <h2 id="muammo">Nima uchun ko‘pchilik xalqaro kartadan foydalana olmaydi?</h2>
      <p>
        O‘zbekistonda ko‘p foydalanuvchi faqat <b>UzCard</b> yoki <b>HUMO</b> milliy kartasiga ega. Rasmiy Telegram
        to‘lov oqimi esa App Store/Google Play orqali xalqaro kartani so‘raydi. Bu — Premium sotib olishdagi eng
        katta to‘siq.
      </p>

      <h2 id="tariflar">Tariflar va narxlar</h2>
      <PremiumPlanBoard locale="uz" flow="username" />
      <PremiumPlanBoard locale="uz" flow="login" />

      <h2 id="oqim">Ikki oqim — qaysi biri sizga mos?</h2>
      <CompareTable
        headers={["Jihat", "Username orqali", "Akkauntga kirib berish"]}
        rows={[
          ["Kerakli ma’lumot", <Yes key="a">Faqat username</Yes>, <No key="b">Login talab qilinadi</No>],
          ["Parol", <Yes key="c">So‘ralmaydi</Yes>, <No key="d">Kirish zarur</No>],
          ["Muddatlar", "3 / 6 / 12 oy", "1 / 12 oy"],
          ["Tezlik", <Yes key="e">Avtomatik, tez</Yes>, "Qo‘lda faollashtirish"],
          ["Kimga mos", "Ko‘pchilikka", "1 oylik yoki maxsus holatlarga"],
        ]}
      />

      <InlineCta text="O‘zingizga mos tarifni botda tanlang." />

      <h2 id="tolov">To‘lov usullari</h2>
      <KeyFacts label="Qabul qilinadigan usullar">
        <li><b>UzCard</b>, <b>HUMO</b> — milliy kartalar.</li>
        <li><b>Click</b>, <b>Payme</b> — ilova yoki karta orqali.</li>
        <li><b>Paynet</b> — naqd to‘lov uchun.</li>
        <li>Rossiya fuqarolari uchun — <b>SBP</b> orqali rublda.</li>
      </KeyFacts>

      <h2 id="qadamlar">Xarid qilish tartibi</h2>
      <Steps>
        <Step title="1. Botga o‘ting">@StarsPaymee_bot.</Step>
        <Step title="2. Muddatni tanlang">3 oy, 6 oy, 12 oy yoki 1 oy (login oqimi).</Step>
        <Step title="3. Username kiriting">Obuna faollashadigan hisob.</Step>
        <Step title="4. To‘lang">Qulay usulni tanlang — summa so‘mda.</Step>
        <Step title="5. Faollashuvni kuting">Profilda Premium belgisi paydo bo‘ladi.</Step>
      </Steps>

      <p>
        Shunday qilib, xalqaro kartaga ega bo‘lmasangiz ham Premium’ning barcha imkoniyatlaridan foydalanasiz.
        Batafsil: <Link href="/blog/premium-olish">Premium imkoniyatlari</Link>,{" "}
        <Link href="/blog/visa-kartasiz-premium-olish">Visa kartasiz Premium</Link> va{" "}
        <Link href="/blog/bir-oylik-premium-olish">1 oylik variant</Link>.
      </p>

      <Sources
        label="Manbalar"
        items={[
          { href: "https://telegram.org/faq_premium", label: "telegram.org/faq_premium", note: "Telegram Premium rasmiy FAQ" },
          { href: "https://uzcard.uz/", label: "uzcard.uz", note: "UzCard milliy to‘lov tizimi" },
        ]}
      />
    </>
  );
}

/* ---------------- RU ---------------- */
function RuAnswer() {
  return (
    <p>
      Чтобы купить Telegram Premium, откройте <b>@StarsPaymee_bot</b>, выберите срок, укажите username и оплатите в
      сумах. В сценарии по username доступны <b>3, 6, 12 месяцев</b>, в сценарии со входом — <b>1 и 12 месяцев</b>.
      Оплата: UzCard, HUMO, Click, Payme, Paynet; в рублях — только СБП.
    </p>
  );
}

function RuBody() {
  return (
    <>
      <h2 id="muammo">Почему многие не могут платить международной картой?</h2>
      <p>
        В Узбекистане у многих пользователей есть только национальная карта <b>UzCard</b> или <b>HUMO</b>. А
        официальный платёжный сценарий Telegram через App Store/Google Play запрашивает международную карту. Это и
        есть главное препятствие при покупке Premium.
      </p>

      <h2 id="tariflar">Тарифы и цены</h2>
      <PremiumPlanBoard locale="ru" flow="username" />
      <PremiumPlanBoard locale="ru" flow="login" />

      <h2 id="oqim">Два сценария — какой подходит вам?</h2>
      <CompareTable
        headers={["Аспект", "По username", "Со входом в аккаунт"]}
        rows={[
          ["Нужные данные", <Yes key="a">Только username</Yes>, <No key="b">Требуется вход</No>],
          ["Пароль", <Yes key="c">Не запрашивается</Yes>, <No key="d">Нужен вход</No>],
          ["Сроки", "3 / 6 / 12 месяцев", "1 / 12 месяцев"],
          ["Скорость", <Yes key="e">Автоматически, быстро</Yes>, "Ручная активация"],
          ["Кому подходит", "Большинству", "Для 1 месяца или особых случаев"],
        ]}
      />

      <InlineCta text="Выберите подходящий тариф в боте." />

      <h2 id="tolov">Способы оплаты</h2>
      <KeyFacts label="Принимаемые способы">
        <li><b>UzCard</b>, <b>HUMO</b> — национальные карты.</li>
        <li><b>Click</b>, <b>Payme</b> — через приложение или карту.</li>
        <li><b>Paynet</b> — для оплаты наличными.</li>
        <li>Для граждан России — в рублях через <b>СБП</b>.</li>
      </KeyFacts>

      <h2 id="qadamlar">Порядок покупки</h2>
      <Steps>
        <Step title="1. Откройте бота">@StarsPaymee_bot.</Step>
        <Step title="2. Выберите срок">3, 6, 12 месяцев или 1 месяц (login-сценарий).</Step>
        <Step title="3. Укажите username">Аккаунт, где активируется подписка.</Step>
        <Step title="4. Оплатите">Выберите удобный способ — сумма в сумах.</Step>
        <Step title="5. Дождитесь активации">В профиле появится значок Premium.</Step>
      </Steps>

      <p>
        Таким образом, даже без международной карты вы получаете все возможности Premium. Подробнее:{" "}
        <Link href="/blog/premium-olish">возможности Premium</Link>,{" "}
        <Link href="/blog/visa-kartasiz-premium-olish">Premium без карты Visa</Link> и{" "}
        <Link href="/blog/bir-oylik-premium-olish">вариант на 1 месяц</Link>.
      </p>

      <Sources
        label="Источники"
        items={[
          { href: "https://telegram.org/faq_premium", label: "telegram.org/faq_premium", note: "официальный FAQ Telegram Premium" },
          { href: "https://uzcard.uz/", label: "uzcard.uz", note: "национальная платёжная система UzCard" },
        ]}
      />
    </>
  );
}

/* ---------------- EN ---------------- */
function EnAnswer() {
  return (
    <p>
      To buy Telegram Premium, open <b>@StarsPaymee_bot</b>, choose a term, enter a username and pay in so‘m. The
      username flow offers <b>3, 6 and 12 months</b>; the login flow offers <b>1 and 12 months</b>. Payment: UzCard,
      HUMO, Click, Payme, Paynet; in roubles — via SBP only.
    </p>
  );
}

function EnBody() {
  return (
    <>
      <h2 id="muammo">Why can’t many people pay with an international card?</h2>
      <p>
        In Uzbekistan many users hold only a national <b>UzCard</b> or <b>HUMO</b> card, while Telegram’s official
        payment flow through the App Store/Google Play asks for an international card. That is the single biggest
        obstacle to buying Premium.
      </p>

      <h2 id="tariflar">Plans and prices</h2>
      <PremiumPlanBoard locale="en" flow="username" />
      <PremiumPlanBoard locale="en" flow="login" />

      <h2 id="oqim">Two flows — which one suits you?</h2>
      <CompareTable
        headers={["Aspect", "By username", "With account login"]}
        rows={[
          ["Data needed", <Yes key="a">Username only</Yes>, <No key="b">Login required</No>],
          ["Password", <Yes key="c">Not requested</Yes>, <No key="d">Sign-in needed</No>],
          ["Terms", "3 / 6 / 12 months", "1 / 12 months"],
          ["Speed", <Yes key="e">Automatic, fast</Yes>, "Manual activation"],
          ["Best for", "Most people", "One month or special cases"],
        ]}
      />

      <InlineCta text="Pick the plan that fits you in the bot." />

      <h2 id="tolov">Payment methods</h2>
      <KeyFacts label="Accepted methods">
        <li><b>UzCard</b>, <b>HUMO</b> — national cards.</li>
        <li><b>Click</b>, <b>Payme</b> — via the app or a card.</li>
        <li><b>Paynet</b> — for cash payments.</li>
        <li>For customers in Russia — roubles via <b>SBP</b>.</li>
      </KeyFacts>

      <h2 id="qadamlar">The purchase flow</h2>
      <Steps>
        <Step title="1. Open the bot">@StarsPaymee_bot.</Step>
        <Step title="2. Choose a term">3, 6, 12 months, or 1 month in the login flow.</Step>
        <Step title="3. Enter a username">The account the subscription activates on.</Step>
        <Step title="4. Pay">Choose a convenient method — the total is in so‘m.</Step>
        <Step title="5. Wait for activation">The Premium badge appears on the profile.</Step>
      </Steps>

      <p>
        So even without an international card you get every Premium feature. More:{" "}
        <Link href="/blog/premium-olish">what Premium offers</Link>,{" "}
        <Link href="/blog/visa-kartasiz-premium-olish">Premium without a Visa card</Link> and{" "}
        <Link href="/blog/bir-oylik-premium-olish">the one-month option</Link>.
      </p>

      <Sources
        label="Sources"
        items={[
          { href: "https://telegram.org/faq_premium", label: "telegram.org/faq_premium", note: "official Telegram Premium FAQ" },
          { href: "https://uzcard.uz/", label: "uzcard.uz", note: "UzCard national payment system" },
        ]}
      />
    </>
  );
}

const uzFaq = [
  { question: "Telegram Premium sotib olish uchun nima kerak?", answer: "Telegram username va mahalliy to‘lov usuli — UzCard, HUMO, Click, Payme yoki Paynet." },
  { question: "Qanday muddatlar mavjud?", answer: "Username oqimida 3, 6 va 12 oy; login oqimida 1 va 12 oy." },
  { question: "Xalqaro karta kerakmi?", answer: "Yo‘q, talab qilinmaydi." },
  { question: "Parolimni berishim kerakmi?", answer: "Username oqimida yo‘q — faqat username yetarli." },
  { question: "Rublda to‘lash mumkinmi?", answer: "Ha, faqat SBP tizimi orqali." },
  { question: "Qancha vaqtda faollashadi?", answer: "Odatda to‘lovdan keyin bir necha daqiqada." },
  { question: "Boshqa hisobga sotib olsam bo‘ladimi?", answer: "Ha, buyurtmada o‘sha hisobning username’ini ko‘rsating." },
  { question: "Narxlar o‘zgaradimi?", answer: "Joriy narx botda ko‘rsatiladi; buyurtmada tasdiqlangan summa amal qiladi." },
  { question: "Obuna avtomatik uzayadimi?", answer: "Yo‘q, muddat tugagach qayta buyurtma berasiz." },
  { question: "Muammo bo‘lsa nima qilaman?", answer: "@StarsPaymeeSupport ga yozing — buyurtma tekshiriladi." },
];

const ruFaq = [
  { question: "Что нужно для покупки Telegram Premium?", answer: "Telegram username и местный способ оплаты — UzCard, HUMO, Click, Payme или Paynet." },
  { question: "Какие сроки доступны?", answer: "По username — 3, 6 и 12 месяцев; со входом — 1 и 12 месяцев." },
  { question: "Нужна ли международная карта?", answer: "Нет, не требуется." },
  { question: "Нужно ли сообщать пароль?", answer: "В сценарии по username — нет, достаточно username." },
  { question: "Можно ли платить в рублях?", answer: "Да, только через систему СБП." },
  { question: "Как быстро активируется?", answer: "Обычно в течение нескольких минут после оплаты." },
  { question: "Можно ли купить на другой аккаунт?", answer: "Да, укажите в заказе его username." },
  { question: "Меняются ли цены?", answer: "Актуальная цена показывается в боте; действует сумма, подтверждённая при заказе." },
  { question: "Продлевается ли подписка автоматически?", answer: "Нет, после окончания срока нужно оформить заказ заново." },
  { question: "Что делать при проблеме?", answer: "Напишите в @StarsPaymeeSupport — заказ проверят." },
];

const enFaq = [
  { question: "What do I need to buy Telegram Premium?", answer: "A Telegram username and a local payment method — UzCard, HUMO, Click, Payme or Paynet." },
  { question: "Which terms are available?", answer: "By username — 3, 6 and 12 months; with login — 1 and 12 months." },
  { question: "Do I need an international card?", answer: "No, it is not required." },
  { question: "Do I have to share my password?", answer: "Not in the username flow — the username alone is enough." },
  { question: "Can I pay in roubles?", answer: "Yes, through the SBP system only." },
  { question: "How quickly does it activate?", answer: "Usually within a few minutes of payment." },
  { question: "Can I buy it for another account?", answer: "Yes — give that account's username when ordering." },
  { question: "Do prices change?", answer: "The current price is shown in the bot; the amount confirmed at order time applies." },
  { question: "Does the subscription auto-renew?", answer: "No — once the term ends you place a new order." },
  { question: "What if something goes wrong?", answer: "Message @StarsPaymeeSupport and the order will be checked." },
];

export const post: AeoPost = {
  slug: SLUG,
  category: "Premium",
  type: "howto",
  datePublished: "2026-08-01",
  dateModified: "2026-08-01",
  keywords: [
    "telegram premium sotib olish",
    "premium sotib olish narxi",
    "telegram premium tariflari",
    "premium sotib olish uzcard",
    "telegram premium uzbekistan",
    "premium sotib olish 2026",
  ],
  howToSteps: [
    { name: "Botga o‘ting", text: "@StarsPaymee_bot botini oching." },
    { name: "Muddatni tanlang", text: "3, 6, 12 oy yoki 1 oy (login oqimi)." },
    { name: "Username kiriting", text: "Obuna faollashadigan hisobni ko‘rsating." },
    { name: "To‘lang", text: "UzCard, HUMO, Click, Payme yoki Paynet orqali so‘mda." },
    { name: "Faollashuvni kuting", text: "Profilda Premium belgisi paydo bo‘ladi." },
  ],
  locales: {
    uz: {
      title: "Telegram Premium sotib olish — narxlar va to‘lov usullari",
      excerpt:
        "Telegram Premium tariflari, ikki xil xarid oqimi (username va login), to‘lov usullari va bosqichma-bosqich xarid tartibi.",
      metaTitle: "Telegram Premium sotib olish — narx va to‘lov",
      metaDescription:
        "Telegram Premium sotib olish: 3/6/12 oy username orqali, 1/12 oy login orqali. UzCard, HUMO, Click, Payme va SBP to‘lov usullari.",
      answerTitle: "Qisqa javob",
      Answer: UzAnswer,
      Body: UzBody,
      ctaHeading: "Premium sotib oling",
      ctaBody: "@StarsPaymee_bot da muddatni tanlang — narx darhol ko‘rinadi, to‘lov so‘mda.",
      faq: uzFaq,
    },
    ru: {
      title: "Купить Telegram Premium — цены и способы оплаты",
      excerpt:
        "Тарифы Telegram Premium, два сценария покупки (по username и со входом), способы оплаты и пошаговый порядок оформления.",
      metaTitle: "Купить Telegram Premium — цена и оплата",
      metaDescription:
        "Покупка Telegram Premium: 3/6/12 месяцев по username, 1/12 месяцев со входом. Оплата UzCard, HUMO, Click, Payme и СБП.",
      answerTitle: "Краткий ответ",
      Answer: RuAnswer,
      Body: RuBody,
      ctaHeading: "Купите Premium",
      ctaBody: "Выберите срок в @StarsPaymee_bot — цена видна сразу, оплата в сумах.",
      faq: ruFaq,
    },
    en: {
      title: "Buying Telegram Premium — prices and payment methods",
      excerpt:
        "Telegram Premium plans, the two purchase flows (username and login), the payment methods and a step-by-step ordering guide.",
      metaTitle: "Buying Telegram Premium — price and payment",
      metaDescription:
        "Buying Telegram Premium: 3/6/12 months by username, 1/12 months with login. Pay via UzCard, HUMO, Click, Payme and SBP.",
      answerTitle: "Short answer",
      Answer: EnAnswer,
      Body: EnBody,
      ctaHeading: "Buy Premium",
      ctaBody: "Choose a term in @StarsPaymee_bot — the price shows instantly and you pay in so‘m.",
      faq: enFaq,
    },
  },
};
