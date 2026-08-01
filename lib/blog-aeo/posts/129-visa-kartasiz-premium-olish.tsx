import { Link } from "@/i18n/navigation";
import { InlineCta, Sources, KeyFacts, Steps, Step, InfoGrid, InfoCard } from "@/components/blog/aeo-blocks";
import { PremiumPlanBoard } from "@/components/blog/premium-plan-board";
import type { AeoPost } from "@/lib/blog-aeo/types";

const SLUG = "visa-kartasiz-premium-olish";

/* ---------------- UZ ---------------- */
function UzAnswer() {
  return (
    <p>
      Ha, Telegram Premium’ni <b>Visa yoki Mastercard’siz</b> faollashtirish mumkin. <b>@StarsPaymee_bot</b> da
      muddatni tanlab, <b>UzCard</b>, <b>HUMO</b>, Click, Payme yoki Paynet orqali so‘mda to‘laysiz. Username oqimida
      parol so‘ralmaydi va obuna bir necha daqiqada faollashadi.
    </p>
  );
}

function UzBody() {
  return (
    <>
      <h2 id="muammo">Muammoning mohiyati</h2>
      <p>
        Rasmiy Telegram Premium to‘lovi App Store yoki Google Play orqali ishlaydi va bu tizimlar odatda
        Visa/Mastercard kartalarini talab qiladi. UzCard va HUMO kartalari u yerda to‘g‘ridan-to‘g‘ri
        qo‘llab-quvvatlanmaydi — natijada Premium’ni yoqtirgan ko‘p foydalanuvchi sotib ololmay qoladi.
      </p>

      <h2 id="yechim">Yechim — mahalliy to‘lov bilan faollashtirish</h2>
      <KeyFacts label="Nima kerak bo‘ladi">
        <li>Telegram <b>username</b> (parol emas).</li>
        <li><b>UzCard</b> yoki <b>HUMO</b> kartasi.</li>
        <li>Yoki <b>Click</b>, <b>Payme</b>, <b>Paynet</b> hisobi.</li>
        <li>Rossiyalik mijozlar uchun — <b>SBP</b> orqali rublda.</li>
      </KeyFacts>

      <h2 id="tarif">Qaysi muddatlar mavjud?</h2>
      <PremiumPlanBoard locale="uz" flow="username" />
      <PremiumPlanBoard locale="uz" flow="login" />

      <InlineCta text="Mahalliy karta bilan Premium’ni faollashtiring." />

      <h2 id="afzallik">Afzalliklari</h2>
      <InfoGrid>
        <InfoCard emoji="💳" title="Xalqaro kartasiz">
          UzCard yoki HUMO yetarli — boshqa hech narsa kerak emas.
        </InfoCard>
        <InfoCard emoji="🇺🇿" title="To‘liq so‘mda">
          Valyuta konvertatsiyasi va bank komissiyasi yo‘q.
        </InfoCard>
        <InfoCard emoji="🔐" title="Parolsiz">
          Username oqimida akkauntga kirish talab qilinmaydi.
        </InfoCard>
        <InfoCard emoji="📅" title="Har qanday muddat">
          1, 3, 6 va 12 oylik variantlar mavjud.
        </InfoCard>
      </InfoGrid>

      <h2 id="qadamlar">Faollashtirish bosqichlari</h2>
      <Steps>
        <Step title="1. Botni oching">@StarsPaymee_bot.</Step>
        <Step title="2. Muddatni tanlang">1, 3, 6 yoki 12 oy.</Step>
        <Step title="3. Username kiriting">Obuna faollashadigan hisob.</Step>
        <Step title="4. Mahalliy usulda to‘lang">UzCard, HUMO, Click, Payme yoki Paynet.</Step>
        <Step title="5. Tekshiring">Profilda Premium belgisi chiqadi.</Step>
      </Steps>

      <p>
        Endi Visa yoki Mastercard yo‘qligi to‘siq emas. Stars uchun ham xuddi shunday variant bor:{" "}
        <Link href="/blog/visa-kartasiz-stars-olish">Visa kartasiz Stars olish</Link>. Yana:{" "}
        <Link href="/blog/telegram-premium-sotib-olish">narxlar va to‘lov</Link>.
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
      Да, Telegram Premium можно активировать <b>без Visa или Mastercard</b>. В <b>@StarsPaymee_bot</b> вы выбираете
      срок и платите в сумах через <b>UzCard</b>, <b>HUMO</b>, Click, Payme или Paynet. В сценарии по username пароль
      не запрашивается, а подписка активируется за несколько минут.
    </p>
  );
}

function RuBody() {
  return (
    <>
      <h2 id="muammo">Суть проблемы</h2>
      <p>
        Официальная оплата Telegram Premium идёт через App Store или Google Play, а эти системы обычно требуют карты
        Visa/Mastercard. Карты UzCard и HUMO там напрямую не поддерживаются — из-за этого многие желающие так и не
        могут оформить Premium.
      </p>

      <h2 id="yechim">Решение — активация с местной оплатой</h2>
      <KeyFacts label="Что понадобится">
        <li>Telegram <b>username</b> (не пароль).</li>
        <li>Карта <b>UzCard</b> или <b>HUMO</b>.</li>
        <li>Либо счёт <b>Click</b>, <b>Payme</b>, <b>Paynet</b>.</li>
        <li>Для клиентов из России — в рублях через <b>СБП</b>.</li>
      </KeyFacts>

      <h2 id="tarif">Какие сроки доступны?</h2>
      <PremiumPlanBoard locale="ru" flow="username" />
      <PremiumPlanBoard locale="ru" flow="login" />

      <InlineCta text="Активируйте Premium с локальной картой." />

      <h2 id="afzallik">Преимущества</h2>
      <InfoGrid>
        <InfoCard emoji="💳" title="Без международной карты">
          Достаточно UzCard или HUMO — больше ничего не нужно.
        </InfoCard>
        <InfoCard emoji="🇺🇿" title="Полностью в сумах">
          Без конвертации валюты и банковской комиссии.
        </InfoCard>
        <InfoCard emoji="🔐" title="Без пароля">
          В сценарии по username вход в аккаунт не нужен.
        </InfoCard>
        <InfoCard emoji="📅" title="Любой срок">
          Доступны варианты на 1, 3, 6 и 12 месяцев.
        </InfoCard>
      </InfoGrid>

      <h2 id="qadamlar">Этапы активации</h2>
      <Steps>
        <Step title="1. Откройте бота">@StarsPaymee_bot.</Step>
        <Step title="2. Выберите срок">1, 3, 6 или 12 месяцев.</Step>
        <Step title="3. Укажите username">Аккаунт, где активируется подписка.</Step>
        <Step title="4. Оплатите локально">UzCard, HUMO, Click, Payme или Paynet.</Step>
        <Step title="5. Проверьте">В профиле появится значок Premium.</Step>
      </Steps>

      <p>
        Теперь отсутствие Visa или Mastercard не помеха. Для Stars есть такой же вариант:{" "}
        <Link href="/blog/visa-kartasiz-stars-olish">Stars без карты Visa</Link>. Ещё:{" "}
        <Link href="/blog/telegram-premium-sotib-olish">цены и оплата</Link>.
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
      Yes — Telegram Premium can be activated <b>without a Visa or Mastercard</b>. In <b>@StarsPaymee_bot</b> you
      choose a term and pay in so‘m with <b>UzCard</b>, <b>HUMO</b>, Click, Payme or Paynet. The username flow asks
      for no password and the subscription activates within a few minutes.
    </p>
  );
}

function EnBody() {
  return (
    <>
      <h2 id="muammo">What the problem really is</h2>
      <p>
        Official Telegram Premium payment runs through the App Store or Google Play, and those systems normally
        require a Visa/Mastercard. UzCard and HUMO are not supported there directly — which is why many people who
        want Premium never manage to buy it.
      </p>

      <h2 id="yechim">The fix — activation with local payment</h2>
      <KeyFacts label="What you need">
        <li>A Telegram <b>username</b> (not a password).</li>
        <li>A <b>UzCard</b> or <b>HUMO</b> card.</li>
        <li>Or a <b>Click</b>, <b>Payme</b> or <b>Paynet</b> account.</li>
        <li>For customers in Russia — roubles via <b>SBP</b>.</li>
      </KeyFacts>

      <h2 id="tarif">Which terms are available?</h2>
      <PremiumPlanBoard locale="en" flow="username" />
      <PremiumPlanBoard locale="en" flow="login" />

      <InlineCta text="Activate Premium with a local card." />

      <h2 id="afzallik">The advantages</h2>
      <InfoGrid>
        <InfoCard emoji="💳" title="No international card">
          UzCard or HUMO is enough — nothing else is needed.
        </InfoCard>
        <InfoCard emoji="🇺🇿" title="Entirely in so‘m">
          No currency conversion and no bank fee.
        </InfoCard>
        <InfoCard emoji="🔐" title="No password">
          The username flow needs no account login.
        </InfoCard>
        <InfoCard emoji="📅" title="Any term">
          Options for 1, 3, 6 and 12 months.
        </InfoCard>
      </InfoGrid>

      <h2 id="qadamlar">Activation steps</h2>
      <Steps>
        <Step title="1. Open the bot">@StarsPaymee_bot.</Step>
        <Step title="2. Choose a term">1, 3, 6 or 12 months.</Step>
        <Step title="3. Enter a username">The account the subscription activates on.</Step>
        <Step title="4. Pay locally">UzCard, HUMO, Click, Payme or Paynet.</Step>
        <Step title="5. Check">The Premium badge appears on the profile.</Step>
      </Steps>

      <p>
        Not having a Visa or Mastercard is no longer a blocker. There is an equivalent for Stars:{" "}
        <Link href="/blog/visa-kartasiz-stars-olish">Stars without a Visa card</Link>. Also:{" "}
        <Link href="/blog/telegram-premium-sotib-olish">prices and payment</Link>.
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
  { question: "Visa kartasiz Premium olish mumkinmi?", answer: "Ha. UzCard, HUMO, Click, Payme yoki Paynet orqali so‘mda to‘lash yetarli." },
  { question: "Mastercard talab qilinadimi?", answer: "Yo‘q, xalqaro kartaning hech qanday turi kerak emas." },
  { question: "Parolimni berishim kerakmi?", answer: "Username oqimida yo‘q — faqat username yetarli." },
  { question: "Qanday muddatlar bor?", answer: "1, 3, 6 va 12 oy." },
  { question: "Qancha vaqtda faollashadi?", answer: "Odatda to‘lovdan keyin bir necha daqiqada." },
  { question: "Rublda to‘lash mumkinmi?", answer: "Ha, faqat SBP orqali." },
  { question: "Naqd to‘lasam bo‘ladimi?", answer: "Ha, Paynet orqali." },
  { question: "Do‘stimga Premium sovg‘a qilsam bo‘ladimi?", answer: "Ha, buyurtmada uning username’ini ko‘rsating." },
  { question: "Premium rasmiy bo‘ladimi?", answer: "Ha, obuna Telegram hisobingizda rasmiy tarzda faollashadi." },
  { question: "Yordam kerak bo‘lsa?", answer: "@StarsPaymeeSupport kanaliga yozing." },
];

const ruFaq = [
  { question: "Можно ли купить Premium без карты Visa?", answer: "Да. Достаточно оплаты в сумах через UzCard, HUMO, Click, Payme или Paynet." },
  { question: "Требуется ли Mastercard?", answer: "Нет, международная карта любого типа не нужна." },
  { question: "Нужно ли сообщать пароль?", answer: "В сценарии по username — нет, достаточно username." },
  { question: "Какие сроки доступны?", answer: "1, 3, 6 и 12 месяцев." },
  { question: "Как быстро активируется?", answer: "Обычно в течение нескольких минут после оплаты." },
  { question: "Можно ли платить в рублях?", answer: "Да, только через СБП." },
  { question: "Можно ли заплатить наличными?", answer: "Да, через Paynet." },
  { question: "Можно ли подарить Premium другу?", answer: "Да, укажите в заказе его username." },
  { question: "Будет ли Premium официальным?", answer: "Да, подписка активируется на вашем аккаунте Telegram официально." },
  { question: "Нужна помощь?", answer: "Напишите в канал @StarsPaymeeSupport." },
];

const enFaq = [
  { question: "Can I get Premium without a Visa card?", answer: "Yes. Paying in so‘m via UzCard, HUMO, Click, Payme or Paynet is enough." },
  { question: "Is a Mastercard required?", answer: "No — no international card of any kind is needed." },
  { question: "Do I have to share my password?", answer: "Not in the username flow — the username alone is enough." },
  { question: "Which terms are available?", answer: "1, 3, 6 and 12 months." },
  { question: "How quickly does it activate?", answer: "Usually within a few minutes of payment." },
  { question: "Can I pay in roubles?", answer: "Yes, through SBP only." },
  { question: "Can I pay in cash?", answer: "Yes, through Paynet." },
  { question: "Can I gift Premium to a friend?", answer: "Yes — give their username when ordering." },
  { question: "Will the Premium be official?", answer: "Yes, the subscription is activated officially on your Telegram account." },
  { question: "Need help?", answer: "Message the @StarsPaymeeSupport channel." },
];

export const post: AeoPost = {
  slug: SLUG,
  category: "Premium",
  type: "problem",
  datePublished: "2026-08-01",
  dateModified: "2026-08-01",
  keywords: [
    "visa kartasiz premium olish",
    "premium visa kartasiz",
    "uzcard bilan premium",
    "humo bilan premium olish",
    "xalqaro kartasiz telegram premium",
    "premium olish mahalliy karta",
  ],
  howToSteps: [
    { name: "Botni oching", text: "@StarsPaymee_bot botini oching." },
    { name: "Muddatni tanlang", text: "1, 3, 6 yoki 12 oylik tarifni tanlang." },
    { name: "Username kiriting", text: "Obuna faollashadigan hisobni ko‘rsating." },
    { name: "Mahalliy usulda to‘lang", text: "UzCard, HUMO, Click, Payme yoki Paynet orqali." },
    { name: "Tekshiring", text: "Profilda Premium belgisi paydo bo‘lishini kuting." },
  ],
  locales: {
    uz: {
      title: "Visa kartasiz Premium olish — UzCard va HUMO bilan faollashtirish",
      excerpt:
        "Xalqaro kartasiz Telegram Premium’ni qanday faollashtirish mumkin? UzCard, HUMO, Click va Payme orqali so‘mda to‘lov, 1–12 oylik tariflar.",
      metaTitle: "Visa kartasiz Premium olish — UzCard va HUMO",
      metaDescription:
        "Visa kartasiz Premium olish: UzCard, HUMO, Click, Payme va Paynet orqali so‘mda to‘lov. 1, 3, 6 va 12 oylik tariflar, parolsiz faollashtirish.",
      answerTitle: "Qisqa javob",
      Answer: UzAnswer,
      Body: UzBody,
      ctaHeading: "Premium’ni mahalliy karta bilan oling",
      ctaBody: "@StarsPaymee_bot — Visa/Mastercard kerak emas, parol so‘ralmaydi.",
      faq: uzFaq,
    },
    ru: {
      title: "Premium без карты Visa — активация с UzCard и HUMO",
      excerpt:
        "Как активировать Telegram Premium без международной карты? Оплата в сумах через UzCard, HUMO, Click и Payme, тарифы на 1–12 месяцев.",
      metaTitle: "Premium без карты Visa — с UzCard и HUMO",
      metaDescription:
        "Premium без карты Visa: оплата в сумах через UzCard, HUMO, Click, Payme и Paynet. Тарифы на 1, 3, 6 и 12 месяцев, активация без пароля.",
      answerTitle: "Краткий ответ",
      Answer: RuAnswer,
      Body: RuBody,
      ctaHeading: "Оформите Premium с локальной картой",
      ctaBody: "@StarsPaymee_bot — Visa/Mastercard не нужны, пароль не запрашивается.",
      faq: ruFaq,
    },
    en: {
      title: "Premium without a Visa card — activating with UzCard and HUMO",
      excerpt:
        "How to activate Telegram Premium without an international card: pay in so‘m via UzCard, HUMO, Click and Payme, with 1–12 month plans.",
      metaTitle: "Premium without a Visa card — UzCard and HUMO",
      metaDescription:
        "Premium without a Visa card: pay in so‘m via UzCard, HUMO, Click, Payme and Paynet. Plans for 1, 3, 6 and 12 months, activated without a password.",
      answerTitle: "Short answer",
      Answer: EnAnswer,
      Body: EnBody,
      ctaHeading: "Get Premium with a local card",
      ctaBody: "@StarsPaymee_bot — no Visa/Mastercard needed and no password requested.",
      faq: enFaq,
    },
  },
};
