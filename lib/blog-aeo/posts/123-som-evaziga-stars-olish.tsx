import { Link } from "@/i18n/navigation";
import { InlineCta, Sources, KeyFacts, Steps, Step, InfoGrid, InfoCard } from "@/components/blog/aeo-blocks";
import { StarsPriceBoard } from "@/components/blog/stars-price-board";
import type { AeoPost } from "@/lib/blog-aeo/types";

const SLUG = "som-evaziga-stars-olish";

/* ---------------- UZ ---------------- */
function UzAnswer() {
  return (
    <p>
      Ha, Stars’ni <b>faqat so‘m evaziga</b> olish mumkin — valyuta almashtirish ham, xalqaro karta ham kerak emas.
      <b> @StarsPaymee_bot</b> da miqdorni tanlaysiz va UzCard, HUMO, Click, Payme yoki Paynet orqali so‘mda
      to‘laysiz. 1 dona — <b>220 so‘m</b>, 50 ta — <b>11 000 so‘m</b>.
    </p>
  );
}

function UzBody() {
  return (
    <>
      <h2 id="nega">Nega aynan so‘m evaziga xarid qulay?</h2>
      <p>
        Rasmiy Telegram to‘lov oqimi xorijiy valyuta va xalqaro kartani talab qiladi. Bu ikki qo‘shimcha xarajat
        keltiradi: bank konvertatsiyasi va do‘kon komissiyasi. So‘mda to‘lasangiz, bu bosqichlarning ikkalasi ham
        tushib qoladi.
      </p>

      <KeyFacts label="So‘mda to‘lashning afzalliklari">
        <li>Valyuta ayirboshlash xarajati yo‘q.</li>
        <li>Visa/Mastercard talab qilinmaydi.</li>
        <li>Pul mahalliy bank tizimi orqali o‘tadi.</li>
        <li>Summa oldindan aniq — kurs o‘zgarishiga bog‘liq emas.</li>
      </KeyFacts>

      <h2 id="qancha">So‘mda qancha turadi?</h2>
      <StarsPriceBoard locale="uz" />

      <InlineCta text="Miqdorni tanlang — so‘mdagi yakuniy summa darhol ko‘rinadi." />

      <h2 id="usullar">Qaysi to‘lov usullari ishlaydi?</h2>
      <InfoGrid>
        <InfoCard emoji="💳" title="UzCard / HUMO">
          Milliy kartalar — to‘g‘ridan-to‘g‘ri, konvertatsiyasiz.
        </InfoCard>
        <InfoCard emoji="🔵" title="Click">
          Ilova yoki karta orqali bir necha bosishda.
        </InfoCard>
        <InfoCard emoji="🟢" title="Payme">
          Keng tarqalgan mahalliy to‘lov tizimi.
        </InfoCard>
        <InfoCard emoji="🏧" title="Paynet">
          Naqd to‘lovga odatlanganlar uchun qulay.
        </InfoCard>
      </InfoGrid>

      <h2 id="qadamlar">Xarid qilish bosqichlari</h2>
      <Steps>
        <Step title="1. Botga o‘ting">@StarsPaymee_bot → «Stars» bo‘limi.</Step>
        <Step title="2. Miqdorni kiriting">Masalan 50, 100, 500 yoki o‘z miqdoringiz.</Step>
        <Step title="3. Username ko‘rsating">Yulduzlar tushadigan hisob.</Step>
        <Step title="4. So‘mda to‘lang">UzCard, HUMO, Click, Payme yoki Paynet.</Step>
        <Step title="5. Tekshiring">Yulduzlar ~10 soniyada profilingizga tushadi.</Step>
      </Steps>

      <h2 id="rubl">Rossiyalik mijozlar uchun-chi?</h2>
      <p>
        Rublda to‘lov <b>SBP</b> (СБП — Система быстрых платежей) tizimi orqali qabul qilinadi. Qolgan tartib
        bir xil: miqdor → username → to‘lov → yetkazish.
      </p>

      <p>
        Davomi: <Link href="/blog/stars-olish">Stars olish qo‘llanmasi</Link>,{" "}
        <Link href="/blog/visa-kartasiz-stars-olish">Visa kartasiz olish</Link> va{" "}
        <Link href="/blog/yulduz-olish">Yulduz olish qisqa qo‘llanmasi</Link>.
      </p>

      <Sources
        label="Manbalar"
        items={[
          { href: "https://cbu.uz/", label: "cbu.uz", note: "O‘zbekiston Markaziy banki — valyuta kurslari" },
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
      Да, Stars можно купить <b>только за сумы</b> — ни обмен валюты, ни международная карта не нужны. В{" "}
      <b>@StarsPaymee_bot</b> вы выбираете количество и платите в сумах через UzCard, HUMO, Click, Payme или Paynet.
      1 штука — <b>220 сум</b>, 50 штук — <b>11 000 сум</b>.
    </p>
  );
}

function RuBody() {
  return (
    <>
      <h2 id="nega">Почему покупка за сумы удобнее?</h2>
      <p>
        Официальный платёжный сценарий Telegram требует иностранной валюты и международной карты. Это добавляет две
        статьи расходов: банковскую конвертацию и комиссию магазина. При оплате в сумах оба этапа исчезают.
      </p>

      <KeyFacts label="Преимущества оплаты в сумах">
        <li>Нет расходов на обмен валюты.</li>
        <li>Не нужны Visa/Mastercard.</li>
        <li>Деньги проходят через местную банковскую систему.</li>
        <li>Сумма известна заранее и не зависит от курса.</li>
      </KeyFacts>

      <h2 id="qancha">Сколько это стоит в сумах?</h2>
      <StarsPriceBoard locale="ru" />

      <InlineCta text="Выберите количество — итоговая сумма в сумах появится сразу." />

      <h2 id="usullar">Какие способы оплаты работают?</h2>
      <InfoGrid>
        <InfoCard emoji="💳" title="UzCard / HUMO">
          Национальные карты — напрямую, без конвертации.
        </InfoCard>
        <InfoCard emoji="🔵" title="Click">
          Через приложение или карту в пару нажатий.
        </InfoCard>
        <InfoCard emoji="🟢" title="Payme">
          Распространённая местная платёжная система.
        </InfoCard>
        <InfoCard emoji="🏧" title="Paynet">
          Удобно тем, кто привык к наличной оплате.
        </InfoCard>
      </InfoGrid>

      <h2 id="qadamlar">Этапы покупки</h2>
      <Steps>
        <Step title="1. Откройте бота">@StarsPaymee_bot → раздел «Stars».</Step>
        <Step title="2. Укажите количество">Например 50, 100, 500 или своё число.</Step>
        <Step title="3. Укажите username">Аккаунт, куда поступят звёзды.</Step>
        <Step title="4. Оплатите в сумах">UzCard, HUMO, Click, Payme или Paynet.</Step>
        <Step title="5. Проверьте">Звёзды поступят в профиль за ~10 секунд.</Step>
      </Steps>

      <h2 id="rubl">А для клиентов из России?</h2>
      <p>
        Оплата в рублях принимается через систему <b>СБП</b> (Система быстрых платежей). Остальной порядок тот же:
        количество → username → оплата → доставка.
      </p>

      <p>
        Далее: <Link href="/blog/stars-olish">руководство по покупке Stars</Link>,{" "}
        <Link href="/blog/visa-kartasiz-stars-olish">покупка без карты Visa</Link> и{" "}
        <Link href="/blog/yulduz-olish">краткое руководство «Yulduz olish»</Link>.
      </p>

      <Sources
        label="Источники"
        items={[
          { href: "https://cbu.uz/", label: "cbu.uz", note: "Центральный банк Узбекистана — курсы валют" },
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
      Yes — you can buy Stars <b>entirely in so‘m</b>, with no currency exchange and no international card. In{" "}
      <b>@StarsPaymee_bot</b> you choose the amount and pay in so‘m via UzCard, HUMO, Click, Payme or Paynet. One
      Star is <b>220 UZS</b>; fifty cost <b>11,000 UZS</b>.
    </p>
  );
}

function EnBody() {
  return (
    <>
      <h2 id="nega">Why paying in so‘m is easier</h2>
      <p>
        Telegram’s official payment flow needs foreign currency and an international card. That adds two costs: bank
        conversion and a store fee. Paying in so‘m removes both steps.
      </p>

      <KeyFacts label="Advantages of paying in so‘m">
        <li>No currency-exchange cost.</li>
        <li>No Visa/Mastercard required.</li>
        <li>Money moves through the local banking system.</li>
        <li>The total is known in advance and does not track the exchange rate.</li>
      </KeyFacts>

      <h2 id="qancha">What does it cost in so‘m?</h2>
      <StarsPriceBoard locale="en" />

      <InlineCta text="Choose an amount — the final so‘m total appears at once." />

      <h2 id="usullar">Which payment methods work?</h2>
      <InfoGrid>
        <InfoCard emoji="💳" title="UzCard / HUMO">
          National cards — direct, without conversion.
        </InfoCard>
        <InfoCard emoji="🔵" title="Click">
          Through the app or a card in a couple of taps.
        </InfoCard>
        <InfoCard emoji="🟢" title="Payme">
          A widely used local payment system.
        </InfoCard>
        <InfoCard emoji="🏧" title="Paynet">
          Convenient if you are used to paying in cash.
        </InfoCard>
      </InfoGrid>

      <h2 id="qadamlar">Purchase steps</h2>
      <Steps>
        <Step title="1. Open the bot">@StarsPaymee_bot → the «Stars» section.</Step>
        <Step title="2. Enter an amount">For example 50, 100, 500 or your own number.</Step>
        <Step title="3. Give a username">The account the Stars should land on.</Step>
        <Step title="4. Pay in so‘m">UzCard, HUMO, Click, Payme or Paynet.</Step>
        <Step title="5. Check">Stars reach your profile in about 10 seconds.</Step>
      </Steps>

      <h2 id="rubl">What about customers in Russia?</h2>
      <p>
        Payment in roubles is accepted through <b>SBP</b> (Система быстрых платежей). Everything else is the same:
        amount → username → payment → delivery.
      </p>

      <p>
        Next: <Link href="/blog/stars-olish">the guide to getting Stars</Link>,{" "}
        <Link href="/blog/visa-kartasiz-stars-olish">buying without a Visa card</Link> and{" "}
        <Link href="/blog/yulduz-olish">the short «Yulduz olish» guide</Link>.
      </p>

      <Sources
        label="Sources"
        items={[
          { href: "https://cbu.uz/", label: "cbu.uz", note: "Central Bank of Uzbekistan — exchange rates" },
          { href: "https://core.telegram.org/bots/payments-stars", label: "core.telegram.org", note: "Stars payments documentation" },
        ]}
      />
    </>
  );
}

const uzFaq = [
  { question: "Stars’ni faqat so‘mda olsam bo‘ladimi?", answer: "Ha. To‘lov to‘liq so‘mda, valyuta konvertatsiyasi umuman bo‘lmaydi." },
  { question: "Kurs o‘zgarsa narx o‘zgaradimi?", answer: "Buyurtmani tasdiqlaganingizda ko‘rsatilgan so‘m summasi amal qiladi." },
  { question: "Qaysi kartalar qabul qilinadi?", answer: "UzCard va HUMO, shuningdek Click, Payme va Paynet." },
  { question: "Xalqaro karta kerakmi?", answer: "Yo‘q, kerak emas." },
  { question: "Rublda to‘lasam bo‘ladimi?", answer: "Ha, rublda to‘lov faqat SBP tizimi orqali qabul qilinadi." },
  { question: "Naqd pul bilan to‘lasam bo‘ladimi?", answer: "Paynet orqali naqd to‘lov varianti mavjud." },
  { question: "Komissiya qo‘shiladimi?", answer: "Botda ko‘rsatilgan summa yakuniy — ustiga qo‘shimcha olinmaydi." },
  { question: "50 ta Stars qancha?", answer: "11 000 so‘m (1 dona — 220 so‘m)." },
  { question: "To‘lov qancha vaqt oladi?", answer: "To‘lov bir necha soniya, yetkazish esa odatda ~10 soniya." },
  { question: "Chekni qayerdan olaman?", answer: "To‘lov tizimi (Click/Payme) ilovasida chek saqlanadi, buyurtma holati botda ko‘rinadi." },
];

const ruFaq = [
  { question: "Можно ли купить Stars только за сумы?", answer: "Да. Оплата полностью в сумах, конвертации валюты нет вообще." },
  { question: "Изменится ли цена при изменении курса?", answer: "Действует сумма в сумах, показанная при подтверждении заказа." },
  { question: "Какие карты принимаются?", answer: "UzCard и HUMO, а также Click, Payme и Paynet." },
  { question: "Нужна ли международная карта?", answer: "Нет, не нужна." },
  { question: "Можно ли заплатить в рублях?", answer: "Да, оплата в рублях принимается только через систему СБП." },
  { question: "Можно ли заплатить наличными?", answer: "Есть вариант оплаты наличными через Paynet." },
  { question: "Добавляется ли комиссия?", answer: "Показанная в боте сумма итоговая — сверху ничего не берётся." },
  { question: "Сколько стоят 50 Stars?", answer: "11 000 сум (1 штука — 220 сум)." },
  { question: "Сколько времени занимает оплата?", answer: "Оплата — несколько секунд, доставка обычно ~10 секунд." },
  { question: "Где взять чек?", answer: "Чек сохраняется в приложении платёжной системы (Click/Payme), статус заказа виден в боте." },
];

const enFaq = [
  { question: "Can I buy Stars purely in so‘m?", answer: "Yes. Payment is entirely in so‘m with no currency conversion at all." },
  { question: "Does the price change if the exchange rate moves?", answer: "The so‘m amount shown when you confirm the order is what applies." },
  { question: "Which cards are accepted?", answer: "UzCard and HUMO, plus Click, Payme and Paynet." },
  { question: "Do I need an international card?", answer: "No, you do not." },
  { question: "Can I pay in roubles?", answer: "Yes — rouble payments are accepted only through the SBP system." },
  { question: "Can I pay in cash?", answer: "There is a cash payment option through Paynet." },
  { question: "Is a fee added?", answer: "The amount shown in the bot is final — nothing is added on top." },
  { question: "How much are 50 Stars?", answer: "11,000 UZS (220 UZS each)." },
  { question: "How long does payment take?", answer: "Payment takes a few seconds; delivery is usually about 10 seconds." },
  { question: "Where do I get a receipt?", answer: "The receipt is kept in your payment app (Click/Payme); the order status is visible in the bot." },
];

export const post: AeoPost = {
  slug: SLUG,
  category: "Stars",
  type: "howto",
  datePublished: "2026-08-01",
  dateModified: "2026-08-01",
  keywords: [
    "som evaziga stars olish",
    "so‘m evaziga stars",
    "stars uzcard humo click",
    "stars somda sotib olish",
    "telegram stars uzs",
    "stars olish somda 2026",
  ],
  howToSteps: [
    { name: "Botga o‘ting", text: "@StarsPaymee_bot dagi «Stars» bo‘limini oching." },
    { name: "Miqdorni kiriting", text: "Masalan 50, 100 yoki 500 ta Stars." },
    { name: "Username ko‘rsating", text: "Yulduzlar tushadigan Telegram hisobini kiriting." },
    { name: "So‘mda to‘lang", text: "UzCard, HUMO, Click, Payme yoki Paynet orqali." },
    { name: "Tekshiring", text: "Yulduzlar odatda ~10 soniyada profilga tushadi." },
  ],
  locales: {
    uz: {
      title: "So‘m evaziga Stars olish — UzCard, HUMO va Click orqali",
      excerpt:
        "Telegram Stars’ni valyuta konvertatsiyasisiz, faqat so‘mda sotib olish: narxlar, to‘lov usullari, bosqichlar va rublda SBP varianti.",
      metaTitle: "So‘m evaziga Stars olish — UzCard, HUMO, Click",
      metaDescription:
        "So‘m evaziga Stars olish: 1 dona 220 so‘m, 50 ta 11 000 so‘m. UzCard, HUMO, Click, Payme va Paynet orqali konvertatsiyasiz to‘lov.",
      answerTitle: "Qisqa javob",
      Answer: UzAnswer,
      Body: UzBody,
      ctaHeading: "So‘mda to‘lab, Stars oling",
      ctaBody: "@StarsPaymee_bot — konvertatsiya yo‘q, summa oldindan aniq.",
      faq: uzFaq,
    },
    ru: {
      title: "Покупка Stars за сумы — через UzCard, HUMO и Click",
      excerpt:
        "Как купить Telegram Stars только за сумы, без конвертации валюты: цены, способы оплаты, этапы и вариант оплаты в рублях через СБП.",
      metaTitle: "Покупка Stars за сумы — UzCard, HUMO, Click",
      metaDescription:
        "Купить Stars за сумы: 1 штука 220 сум, 50 штук 11 000 сум. Оплата через UzCard, HUMO, Click, Payme и Paynet без конвертации.",
      answerTitle: "Краткий ответ",
      Answer: RuAnswer,
      Body: RuBody,
      ctaHeading: "Оплатите в сумах и получите Stars",
      ctaBody: "@StarsPaymee_bot — без конвертации, сумма известна заранее.",
      faq: ruFaq,
    },
    en: {
      title: "Buying Stars with so‘m — via UzCard, HUMO and Click",
      excerpt:
        "How to buy Telegram Stars entirely in so‘m with no currency conversion: prices, payment methods, the steps, and the rouble option via SBP.",
      metaTitle: "Buying Stars with so‘m — UzCard, HUMO, Click",
      metaDescription:
        "Buy Stars in so‘m: 220 UZS each, 11,000 UZS for fifty. Pay via UzCard, HUMO, Click, Payme and Paynet with no conversion.",
      answerTitle: "Short answer",
      Answer: EnAnswer,
      Body: EnBody,
      ctaHeading: "Pay in so‘m and get Stars",
      ctaBody: "@StarsPaymee_bot — no conversion, and the total is known up front.",
      faq: enFaq,
    },
  },
};
