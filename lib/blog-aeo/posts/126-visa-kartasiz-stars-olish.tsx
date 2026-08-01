import { Link } from "@/i18n/navigation";
import { InlineCta, Sources, KeyFacts, CompareTable, Yes, No, Steps, Step } from "@/components/blog/aeo-blocks";
import { StarsPriceBoard } from "@/components/blog/stars-price-board";
import type { AeoPost } from "@/lib/blog-aeo/types";

const SLUG = "visa-kartasiz-stars-olish";

/* ---------------- UZ ---------------- */
function UzAnswer() {
  return (
    <p>
      Ha, Visa yoki Mastercard <b>umuman kerak emas</b>. <b>@StarsPaymee_bot</b> da faqat mahalliy vositalar bilan
      to‘laysiz: UzCard, HUMO, Click, Payme yoki Paynet. Narx — <b>220 so‘m</b> dan bir dona, 50 ta — <b>11 000
      so‘m</b>, yetkazish ~10 soniya.
    </p>
  );
}

function UzBody() {
  return (
    <>
      <h2 id="nega">Nega rasmiy yo‘lda xalqaro karta talab qilinadi?</h2>
      <p>
        Telegram Stars’ni rasmiy sotib olish App Store yoki Google Play to‘lov tizimlari orqali o‘tadi. Bu tizimlar
        odatda xalqaro bank kartasini so‘raydi va hisobni chet el valyutasida yuritadi. Natijada faqat UzCard yoki
        HUMO egasi bo‘lgan foydalanuvchi to‘lov bosqichida to‘xtaydi.
      </p>

      <h2 id="taqqos">Ikki yo‘lni solishtiramiz</h2>
      <CompareTable
        headers={["Jihat", "Rasmiy oqim", "Mahalliy xizmat"]}
        rows={[
          ["Karta", <No key="a">Visa / Mastercard</No>, <Yes key="b">UzCard, HUMO</Yes>],
          ["Valyuta", <No key="c">Chet el valyutasi</No>, <Yes key="d">So‘m (UZS)</Yes>],
          ["Konvertatsiya", <No key="e">Bank kursi + komissiya</No>, <Yes key="f">Yo‘q</Yes>],
          ["Qo‘shimcha ilova", <No key="g">App Store / Google Play</No>, <Yes key="h">Telegram bot</Yes>],
          ["Yetkazish", <Yes key="i">Darhol</Yes>, <Yes key="j">~10 soniya</Yes>],
        ]}
      />

      <h2 id="usullar">Qaysi vositalar bilan to‘lanadi?</h2>
      <KeyFacts label="Qabul qilinadigan to‘lov usullari">
        <li><b>UzCard</b> va <b>HUMO</b> — milliy kartalar.</li>
        <li><b>Click</b> va <b>Payme</b> — ilova yoki karta orqali.</li>
        <li><b>Paynet</b> — naqd to‘lovga qulay.</li>
        <li>Rublda to‘lov — faqat <b>SBP</b> orqali.</li>
      </KeyFacts>

      <h2 id="narx">Narxlar</h2>
      <StarsPriceBoard locale="uz" />

      <InlineCta text="Mahalliy karta bilan hoziroq sinab ko‘ring." />

      <h2 id="qanday">Jarayon qanday ishlaydi?</h2>
      <Steps>
        <Step title="1. Buyurtma">Botda miqdorni tanlaysiz.</Step>
        <Step title="2. To‘lov">Mahalliy kartangiz yoki Click/Payme hisobingizdan so‘mda to‘laysiz.</Step>
        <Step title="3. Yetkazish">Xizmat Stars’ni Telegram hisobingizga avtomatik o‘tkazadi.</Step>
      </Steps>

      <p>
        Bu — xalqaro to‘lov tizimlaridan mustaqil, to‘liq mahalliylashtirilgan yechim. Premium uchun ham xuddi shunday
        variant bor: <Link href="/blog/visa-kartasiz-premium-olish">Visa kartasiz Premium olish</Link>. Yana:{" "}
        <Link href="/blog/som-evaziga-stars-olish">so‘m evaziga Stars</Link>.
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
      Да, Visa или Mastercard <b>вообще не нужны</b>. В <b>@StarsPaymee_bot</b> вы платите только местными
      средствами: UzCard, HUMO, Click, Payme или Paynet. Цена — от <b>220 сум</b> за штуку, 50 штук —{" "}
      <b>11 000 сум</b>, доставка ~10 секунд.
    </p>
  );
}

function RuBody() {
  return (
    <>
      <h2 id="nega">Почему официальный путь требует международную карту?</h2>
      <p>
        Официальная покупка Telegram Stars проходит через платёжные системы App Store или Google Play. Эти системы
        обычно запрашивают международную банковскую карту и ведут расчёт в иностранной валюте. В результате
        пользователь только с UzCard или HUMO останавливается на этапе оплаты.
      </p>

      <h2 id="taqqos">Сравним два пути</h2>
      <CompareTable
        headers={["Аспект", "Официальный сценарий", "Местный сервис"]}
        rows={[
          ["Карта", <No key="a">Visa / Mastercard</No>, <Yes key="b">UzCard, HUMO</Yes>],
          ["Валюта", <No key="c">Иностранная валюта</No>, <Yes key="d">Сум (UZS)</Yes>],
          ["Конвертация", <No key="e">Курс банка + комиссия</No>, <Yes key="f">Нет</Yes>],
          ["Доп. приложение", <No key="g">App Store / Google Play</No>, <Yes key="h">Telegram-бот</Yes>],
          ["Доставка", <Yes key="i">Сразу</Yes>, <Yes key="j">~10 секунд</Yes>],
        ]}
      />

      <h2 id="usullar">Чем можно оплатить?</h2>
      <KeyFacts label="Принимаемые способы оплаты">
        <li><b>UzCard</b> и <b>HUMO</b> — национальные карты.</li>
        <li><b>Click</b> и <b>Payme</b> — через приложение или карту.</li>
        <li><b>Paynet</b> — удобно для оплаты наличными.</li>
        <li>Оплата в рублях — только через <b>СБП</b>.</li>
      </KeyFacts>

      <h2 id="narx">Цены</h2>
      <StarsPriceBoard locale="ru" />

      <InlineCta text="Попробуйте прямо сейчас с локальной картой." />

      <h2 id="qanday">Как работает процесс?</h2>
      <Steps>
        <Step title="1. Заказ">Выбираете количество в боте.</Step>
        <Step title="2. Оплата">Платите в сумах со своей местной карты или счёта Click/Payme.</Step>
        <Step title="3. Доставка">Сервис автоматически зачисляет Stars на ваш аккаунт Telegram.</Step>
      </Steps>

      <p>
        Это полностью локализованное решение, независимое от международных платёжных систем. Для Premium есть такой
        же вариант: <Link href="/blog/visa-kartasiz-premium-olish">Premium без карты Visa</Link>. Ещё:{" "}
        <Link href="/blog/som-evaziga-stars-olish">Stars за сумы</Link>.
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
      Yes — a Visa or Mastercard is <b>not needed at all</b>. In <b>@StarsPaymee_bot</b> you pay with local methods
      only: UzCard, HUMO, Click, Payme or Paynet. The price starts at <b>220 UZS</b> each, fifty cost{" "}
      <b>11,000 UZS</b>, and delivery takes about 10 seconds.
    </p>
  );
}

function EnBody() {
  return (
    <>
      <h2 id="nega">Why does the official route require an international card?</h2>
      <p>
        Buying Telegram Stars officially goes through the App Store or Google Play payment systems. Those systems
        normally ask for an international bank card and settle in a foreign currency. As a result, a user holding
        only UzCard or HUMO gets stuck at the payment step.
      </p>

      <h2 id="taqqos">The two routes compared</h2>
      <CompareTable
        headers={["Aspect", "Official flow", "Local service"]}
        rows={[
          ["Card", <No key="a">Visa / Mastercard</No>, <Yes key="b">UzCard, HUMO</Yes>],
          ["Currency", <No key="c">Foreign currency</No>, <Yes key="d">So‘m (UZS)</Yes>],
          ["Conversion", <No key="e">Bank rate + fee</No>, <Yes key="f">None</Yes>],
          ["Extra app", <No key="g">App Store / Google Play</No>, <Yes key="h">Telegram bot</Yes>],
          ["Delivery", <Yes key="i">Immediate</Yes>, <Yes key="j">~10 seconds</Yes>],
        ]}
      />

      <h2 id="usullar">What can you pay with?</h2>
      <KeyFacts label="Accepted payment methods">
        <li><b>UzCard</b> and <b>HUMO</b> — national cards.</li>
        <li><b>Click</b> and <b>Payme</b> — via the app or a card.</li>
        <li><b>Paynet</b> — convenient for cash.</li>
        <li>Rouble payments — through <b>SBP</b> only.</li>
      </KeyFacts>

      <h2 id="narx">Prices</h2>
      <StarsPriceBoard locale="en" />

      <InlineCta text="Try it right now with a local card." />

      <h2 id="qanday">How the process works</h2>
      <Steps>
        <Step title="1. Order">You choose the amount in the bot.</Step>
        <Step title="2. Payment">You pay in so‘m from your local card or Click/Payme account.</Step>
        <Step title="3. Delivery">The service credits the Stars to your Telegram account automatically.</Step>
      </Steps>

      <p>
        This is a fully localised solution, independent of international payment systems. There is an equivalent for
        Premium: <Link href="/blog/visa-kartasiz-premium-olish">Premium without a Visa card</Link>. Also:{" "}
        <Link href="/blog/som-evaziga-stars-olish">Stars for so‘m</Link>.
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
  { question: "Visa kartasiz Stars olish mumkinmi?", answer: "Ha. UzCard, HUMO, Click, Payme yoki Paynet yetarli." },
  { question: "Mastercard kerakmi?", answer: "Yo‘q, xalqaro kartaning hech qanday turi talab qilinmaydi." },
  { question: "Qo‘shimcha ilova o‘rnatish kerakmi?", answer: "Yo‘q. Hammasi Telegram bot yoki Mini App ichida bo‘ladi." },
  { question: "Narxi xalqaro kartadagidan farq qiladimi?", answer: "So‘mdagi narx aniq: 220 so‘m/dona. Xalqaro kartada bank konvertatsiyasi qo‘shiladi." },
  { question: "Naqd pul bilan to‘lash mumkinmi?", answer: "Ha, Paynet orqali." },
  { question: "Rublda to‘lasam bo‘ladimi?", answer: "Ha, faqat SBP tizimi orqali." },
  { question: "Yetkazish qancha vaqt oladi?", answer: "Odatda ~10 soniya." },
  { question: "Akkauntimga kirish kerakmi?", answer: "Yo‘q. Faqat username yoki ID kifoya, parol so‘ralmaydi." },
  { question: "Kartam chet elda chiqarilgan bo‘lsa-chi?", answer: "Mahalliy usullardan birini tanlang — Click yoki Payme eng qulayi." },
  { question: "Premium ham shunday olinadimi?", answer: "Ha, Premium uchun ham Visa kartasiz variant mavjud." },
];

const ruFaq = [
  { question: "Можно ли купить Stars без карты Visa?", answer: "Да. Достаточно UzCard, HUMO, Click, Payme или Paynet." },
  { question: "Нужна ли Mastercard?", answer: "Нет, международная карта любого типа не требуется." },
  { question: "Нужно ли ставить дополнительное приложение?", answer: "Нет. Всё происходит внутри Telegram-бота или Mini App." },
  { question: "Отличается ли цена от оплаты международной картой?", answer: "Цена в сумах фиксирована: 220 сум за штуку. При международной карте добавляется банковская конвертация." },
  { question: "Можно ли заплатить наличными?", answer: "Да, через Paynet." },
  { question: "Можно ли платить в рублях?", answer: "Да, только через систему СБП." },
  { question: "Сколько занимает доставка?", answer: "Обычно ~10 секунд." },
  { question: "Нужен ли вход в мой аккаунт?", answer: "Нет. Достаточно username или ID, пароль не запрашивается." },
  { question: "А если моя карта выпущена за рубежом?", answer: "Выберите один из местных способов — удобнее всего Click или Payme." },
  { question: "Premium покупается так же?", answer: "Да, для Premium тоже есть вариант без карты Visa." },
];

const enFaq = [
  { question: "Can I get Stars without a Visa card?", answer: "Yes. UzCard, HUMO, Click, Payme or Paynet is enough." },
  { question: "Do I need a Mastercard?", answer: "No — no international card of any kind is required." },
  { question: "Do I need to install another app?", answer: "No. Everything happens inside the Telegram bot or Mini App." },
  { question: "Does the price differ from paying by international card?", answer: "The so‘m price is fixed at 220 UZS each. An international card adds bank conversion on top." },
  { question: "Can I pay in cash?", answer: "Yes, through Paynet." },
  { question: "Can I pay in roubles?", answer: "Yes, through the SBP system only." },
  { question: "How long does delivery take?", answer: "Usually about 10 seconds." },
  { question: "Do you need to log into my account?", answer: "No. A username or ID is enough and no password is requested." },
  { question: "What if my card was issued abroad?", answer: "Pick one of the local methods — Click or Payme are the easiest." },
  { question: "Is Premium bought the same way?", answer: "Yes, there is a no-Visa option for Premium too." },
];

export const post: AeoPost = {
  slug: SLUG,
  category: "Stars",
  type: "problem",
  datePublished: "2026-08-01",
  dateModified: "2026-08-01",
  keywords: [
    "visa kartasiz stars olish",
    "stars visa kartasiz",
    "xalqaro kartasiz stars",
    "uzcard bilan stars olish",
    "humo bilan stars olish",
    "stars olish mahalliy karta",
  ],
  locales: {
    uz: {
      title: "Visa kartasiz Stars olish — mahalliy kartalar bilan xarid",
      excerpt:
        "Xalqaro kartasiz Telegram Stars olish mumkinmi? Rasmiy oqim va mahalliy xizmat taqqoslamasi, UzCard/HUMO/Click orqali to‘lov tartibi.",
      metaTitle: "Visa kartasiz Stars olish — UzCard va HUMO bilan",
      metaDescription:
        "Visa kartasiz Stars olish: UzCard, HUMO, Click, Payme va Paynet orqali so‘mda to‘lov. Narx 220 so‘m/dona, yetkazish ~10 soniya.",
      answerTitle: "Qisqa javob",
      Answer: UzAnswer,
      Body: UzBody,
      ctaHeading: "Mahalliy karta bilan oling",
      ctaBody: "@StarsPaymee_bot — Visa/Mastercard talab qilinmaydi, to‘lov so‘mda.",
      faq: uzFaq,
    },
    ru: {
      title: "Stars без карты Visa — покупка с локальными картами",
      excerpt:
        "Можно ли купить Telegram Stars без международной карты? Сравнение официального сценария и местного сервиса, оплата через UzCard/HUMO/Click.",
      metaTitle: "Stars без карты Visa — с UzCard и HUMO",
      metaDescription:
        "Покупка Stars без карты Visa: оплата в сумах через UzCard, HUMO, Click, Payme и Paynet. Цена 220 сум за штуку, доставка ~10 секунд.",
      answerTitle: "Краткий ответ",
      Answer: RuAnswer,
      Body: RuBody,
      ctaHeading: "Покупайте с локальной картой",
      ctaBody: "@StarsPaymee_bot — Visa/Mastercard не требуется, оплата в сумах.",
      faq: ruFaq,
    },
    en: {
      title: "Stars without a Visa card — buying with local cards",
      excerpt:
        "Can you buy Telegram Stars without an international card? The official flow versus a local service, and how to pay via UzCard/HUMO/Click.",
      metaTitle: "Stars without a Visa card — using UzCard and HUMO",
      metaDescription:
        "Buying Stars without a Visa card: pay in so‘m via UzCard, HUMO, Click, Payme and Paynet. 220 UZS each, delivered in about 10 seconds.",
      answerTitle: "Short answer",
      Answer: EnAnswer,
      Body: EnBody,
      ctaHeading: "Buy with a local card",
      ctaBody: "@StarsPaymee_bot — no Visa/Mastercard required, payment in so‘m.",
      faq: enFaq,
    },
  },
};
