import { Link } from "@/i18n/navigation";
import { InlineCta, Sources, KeyFacts, CompareTable, Yes, No, InfoGrid, InfoCard } from "@/components/blog/aeo-blocks";
import { StarsPriceBoard } from "@/components/blog/stars-price-board";
import type { AeoPost } from "@/lib/blog-aeo/types";

const SLUG = "stars-sotib-olish";

/* ---------------- UZ ---------------- */
function UzAnswer() {
  return (
    <p>
      Stars sotib olishda eng muhimi — ishonchli manba. Xizmat narxni <b>oldindan</b> ko‘rsatishi, mahalliy to‘lov
      (UzCard, HUMO, Click, Payme) qabul qilishi va <b>parol so‘ramasligi</b> kerak. StarsPaymee’da 1 dona —{" "}
      <b>220 so‘m</b>, buyurtma <b>@StarsPaymee_bot</b> orqali, yetkazish ~10 soniya.
    </p>
  );
}

function UzBody() {
  return (
    <>
      <h2 id="xavf">Stars sotib olishda qanday xavflar bor?</h2>
      <p>
        «Stars sotib olish» so‘rovi ortgan sari soxta kanal va botlar ham ko‘paydi. Eng ko‘p uchraydigan sxemalar:
        oldindan to‘lov olib g‘oyib bo‘lish, «arzon narx» va’dasi bilan akkaunt ma’lumotini so‘rash, hamda to‘lovdan
        keyin qo‘shimcha «komissiya» talab qilish.
      </p>

      <KeyFacts label="Darhol shubhalanish kerak bo‘lgan belgilar">
        <li>Telegram <b>paroli</b> yoki SMS-kodi so‘ralsa — bu firibgarlik.</li>
        <li>Narx bozordan keskin past bo‘lsa.</li>
        <li>To‘lov shaxsiy karta raqamiga o‘tkazish sifatida so‘ralsa.</li>
        <li>Buyurtma tarixi va qo‘llab-quvvatlash kanali bo‘lmasa.</li>
      </KeyFacts>

      <h2 id="tekshiruv">Ishonchli xizmatni qanday tanlash kerak?</h2>
      <CompareTable
        headers={["Mezon", "Ishonchli xizmat", "Shubhali taklif"]}
        rows={[
          ["Narx", <Yes key="a">Oldindan ko‘rsatiladi</Yes>, <No key="b">«Yozing, kelishamiz»</No>],
          ["To‘lov", <Yes key="c">Rasmiy: Click, Payme, UzCard</Yes>, <No key="d">Shaxsiy kartaga o‘tkazma</No>],
          ["Ma’lumot", <Yes key="e">Faqat username</Yes>, <No key="f">Parol yoki SMS-kod</No>],
          ["Yetkazish", <Yes key="g">Avtomatik, ~10 soniya</Yes>, <No key="h">«Ertaga tushadi»</No>],
          ["Yordam", <Yes key="i">Doimiy support kanali</Yes>, <No key="j">Faqat bitta shaxsiy akkaunt</No>],
        ]}
      />

      <h2 id="narx">Narxlar shaffofmi?</h2>
      <p>
        Shaffof narx — ishonchning birinchi belgisi. Quyidagi jadval botdagi joriy paketlarga mos keladi, yashirin
        komissiya qo‘shilmaydi.
      </p>
      <StarsPriceBoard locale="uz" />

      <InlineCta text="Narxni o‘zingiz tekshiring — botda miqdorni tanlang." />

      <h2 id="nega">Nega StarsPaymee orqali sotib olish qulay?</h2>
      <InfoGrid>
        <InfoCard emoji="🧾" title="Aniq narx">
          220 so‘m/dona — buyurtmadan oldin ko‘rinadi.
        </InfoCard>
        <InfoCard emoji="🏦" title="Rasmiy to‘lov">
          Click, Payme, Paynet, UzCard, HUMO.
        </InfoCard>
        <InfoCard emoji="🛡️" title="Parolsiz">
          Username yetarli — akkauntingiz o‘zingizda qoladi.
        </InfoCard>
        <InfoCard emoji="💬" title="Qo‘llab-quvvatlash">
          @StarsPaymeeSupport — savol va buyurtma bo‘yicha.
        </InfoCard>
      </InfoGrid>

      <p>
        Shuningdek o‘qing: <Link href="/blog/stars-olish">Stars olish qo‘llanmasi</Link>,{" "}
        <Link href="/blog/starspaymee-ishonchli-xavfsizmi">xizmat ishonchlimi</Link> va{" "}
        <Link href="/blog/som-evaziga-stars-olish">so‘m evaziga olish</Link>.
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
      Главное при покупке Stars — надёжный источник. Сервис должен показывать цену <b>заранее</b>, принимать местные
      платежи (UzCard, HUMO, Click, Payme) и <b>не спрашивать пароль</b>. В StarsPaymee 1 штука — <b>220 сум</b>,
      заказ через <b>@StarsPaymee_bot</b>, доставка ~10 секунд.
    </p>
  );
}

function RuBody() {
  return (
    <>
      <h2 id="xavf">Какие риски есть при покупке Stars?</h2>
      <p>
        Чем чаще ищут «купить Stars», тем больше появляется поддельных каналов и ботов. Самые частые схемы: взять
        предоплату и исчезнуть, обещать «дешёвую цену» и попросить данные аккаунта, а также требовать дополнительную
        «комиссию» уже после оплаты.
      </p>

      <KeyFacts label="Признаки, при которых стоит сразу насторожиться">
        <li>Просят <b>пароль</b> Telegram или SMS-код — это мошенничество.</li>
        <li>Цена резко ниже рыночной.</li>
        <li>Оплату просят переводом на личную карту.</li>
        <li>Нет истории заказов и канала поддержки.</li>
      </KeyFacts>

      <h2 id="tekshiruv">Как выбрать надёжный сервис?</h2>
      <CompareTable
        headers={["Критерий", "Надёжный сервис", "Сомнительное предложение"]}
        rows={[
          ["Цена", <Yes key="a">Показана заранее</Yes>, <No key="b">«Напишите, договоримся»</No>],
          ["Оплата", <Yes key="c">Официально: Click, Payme, UzCard</Yes>, <No key="d">Перевод на личную карту</No>],
          ["Данные", <Yes key="e">Только username</Yes>, <No key="f">Пароль или SMS-код</No>],
          ["Доставка", <Yes key="g">Автоматически, ~10 секунд</Yes>, <No key="h">«Придёт завтра»</No>],
          ["Поддержка", <Yes key="i">Постоянный канал поддержки</Yes>, <No key="j">Только личный аккаунт</No>],
        ]}
      />

      <h2 id="narx">Прозрачны ли цены?</h2>
      <p>
        Прозрачная цена — первый признак доверия. Таблица ниже соответствует актуальным пакетам в боте, скрытых
        комиссий нет.
      </p>
      <StarsPriceBoard locale="ru" />

      <InlineCta text="Проверьте цену сами — выберите количество в боте." />

      <h2 id="nega">Почему удобно покупать через StarsPaymee?</h2>
      <InfoGrid>
        <InfoCard emoji="🧾" title="Точная цена">
          220 сум за штуку — видно до оформления.
        </InfoCard>
        <InfoCard emoji="🏦" title="Официальная оплата">
          Click, Payme, Paynet, UzCard, HUMO.
        </InfoCard>
        <InfoCard emoji="🛡️" title="Без пароля">
          Достаточно username — аккаунт остаётся у вас.
        </InfoCard>
        <InfoCard emoji="💬" title="Поддержка">
          @StarsPaymeeSupport — по вопросам и заказам.
        </InfoCard>
      </InfoGrid>

      <p>
        Читайте также: <Link href="/blog/stars-olish">руководство по покупке Stars</Link>,{" "}
        <Link href="/blog/starspaymee-ishonchli-xavfsizmi">надёжен ли сервис</Link> и{" "}
        <Link href="/blog/som-evaziga-stars-olish">покупка за сумы</Link>.
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
      When buying Stars, the source matters most. A service should show the price <b>up front</b>, accept local
      payments (UzCard, HUMO, Click, Payme) and <b>never ask for your password</b>. At StarsPaymee one Star is{" "}
      <b>220 UZS</b>, orders go through <b>@StarsPaymee_bot</b>, and delivery takes about 10 seconds.
    </p>
  );
}

function EnBody() {
  return (
    <>
      <h2 id="xavf">What are the risks when buying Stars?</h2>
      <p>
        As searches for «buy Stars» grow, so do fake channels and bots. The most common schemes: take prepayment and
        disappear, promise a «cheap price» and ask for account details, or demand an extra «fee» after you have
        already paid.
      </p>

      <KeyFacts label="Signs you should walk away immediately">
        <li>Your Telegram <b>password</b> or SMS code is requested — that is fraud.</li>
        <li>The price is far below the market.</li>
        <li>Payment is requested as a transfer to a personal card.</li>
        <li>There is no order history and no support channel.</li>
      </KeyFacts>

      <h2 id="tekshiruv">How to pick a trustworthy service</h2>
      <CompareTable
        headers={["Criterion", "Trustworthy service", "Dubious offer"]}
        rows={[
          ["Price", <Yes key="a">Shown up front</Yes>, <No key="b">«Message me, we’ll agree»</No>],
          ["Payment", <Yes key="c">Official: Click, Payme, UzCard</Yes>, <No key="d">Transfer to a personal card</No>],
          ["Data", <Yes key="e">Username only</Yes>, <No key="f">Password or SMS code</No>],
          ["Delivery", <Yes key="g">Automatic, ~10 seconds</Yes>, <No key="h">«It’ll arrive tomorrow»</No>],
          ["Support", <Yes key="i">A permanent support channel</Yes>, <No key="j">One personal account only</No>],
        ]}
      />

      <h2 id="narx">Are the prices transparent?</h2>
      <p>
        A transparent price is the first sign of trust. The table below matches the current packs in the bot, with no
        hidden fees added later.
      </p>
      <StarsPriceBoard locale="en" />

      <InlineCta text="Check the price yourself — pick an amount in the bot." />

      <h2 id="nega">Why buying through StarsPaymee is convenient</h2>
      <InfoGrid>
        <InfoCard emoji="🧾" title="Exact price">
          220 UZS each — visible before you order.
        </InfoCard>
        <InfoCard emoji="🏦" title="Official payments">
          Click, Payme, Paynet, UzCard, HUMO.
        </InfoCard>
        <InfoCard emoji="🛡️" title="No password">
          A username is enough — your account stays yours.
        </InfoCard>
        <InfoCard emoji="💬" title="Support">
          @StarsPaymeeSupport — for questions and orders.
        </InfoCard>
      </InfoGrid>

      <p>
        Read next: <Link href="/blog/stars-olish">the guide to getting Stars</Link>,{" "}
        <Link href="/blog/starspaymee-ishonchli-xavfsizmi">is the service trustworthy</Link> and{" "}
        <Link href="/blog/som-evaziga-stars-olish">buying with so‘m</Link>.
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
  { question: "Stars sotib olish xavfsizmi?", answer: "Ha, agar rasmiy bot va rasmiy to‘lov tizimlaridan foydalansangiz va hech kimga parol bermasangiz." },
  { question: "Qaysi ma’lumot so‘raladi?", answer: "Faqat Telegram username yoki ID. Parol, SMS-kod yoki 2FA so‘ralmaydi." },
  { question: "Narx qayerda ko‘rinadi?", answer: "Botda miqdorni tanlaganingizda yakuniy summa darhol ko‘rsatiladi." },
  { question: "Qanday to‘lov usullari bor?", answer: "UzCard, HUMO, Click, Payme va Paynet — barchasi so‘mda." },
  { question: "Yashirin komissiya bormi?", answer: "Yo‘q. Ko‘rsatilgan summa yakuniy." },
  { question: "Buyurtma bajarilmasa-chi?", answer: "@StarsPaymeeSupport ga yozing — buyurtma tekshiriladi." },
  { question: "Firibgarni qanday aniqlayman?", answer: "Parol so‘rashi, shaxsiy kartaga o‘tkazma talab qilishi va haddan tashqari arzon narx — asosiy belgilar." },
  { question: "Boshqa foydalanuvchiga sotib olsam bo‘ladimi?", answer: "Ha, buyurtmada uning username’ini ko‘rsating." },
  { question: "Chek yoki tasdiq beriladimi?", answer: "To‘lov tizimi cheki saqlanadi, botda esa buyurtma holati ko‘rinadi." },
  { question: "Eng kichik buyurtma qancha?", answer: "Bazaviy paket 50 ta Stars — 11 000 so‘m." },
];

const ruFaq = [
  { question: "Безопасно ли покупать Stars?", answer: "Да, если пользуетесь официальным ботом и официальными платёжными системами и никому не сообщаете пароль." },
  { question: "Какие данные запрашиваются?", answer: "Только Telegram username или ID. Пароль, SMS-код и 2FA не запрашиваются." },
  { question: "Где видно цену?", answer: "При выборе количества в боте итоговая сумма показывается сразу." },
  { question: "Какие есть способы оплаты?", answer: "UzCard, HUMO, Click, Payme и Paynet — всё в сумах." },
  { question: "Есть ли скрытая комиссия?", answer: "Нет. Показанная сумма является итоговой." },
  { question: "Что если заказ не выполнен?", answer: "Напишите в @StarsPaymeeSupport — заказ проверят." },
  { question: "Как распознать мошенника?", answer: "Просьба о пароле, перевод на личную карту и слишком низкая цена — главные признаки." },
  { question: "Можно ли купить для другого пользователя?", answer: "Да, укажите в заказе его username." },
  { question: "Выдаётся ли чек или подтверждение?", answer: "Чек платёжной системы сохраняется, а статус заказа виден в боте." },
  { question: "Какой минимальный заказ?", answer: "Базовый пакет 50 Stars — 11 000 сум." },
];

const enFaq = [
  { question: "Is buying Stars safe?", answer: "Yes, if you use the official bot and official payment systems and never share your password." },
  { question: "What data is requested?", answer: "Only a Telegram username or ID. No password, SMS code or 2FA is requested." },
  { question: "Where do I see the price?", answer: "When you choose an amount in the bot, the final total is shown immediately." },
  { question: "Which payment methods are available?", answer: "UzCard, HUMO, Click, Payme and Paynet — all in so‘m." },
  { question: "Are there hidden fees?", answer: "No. The amount shown is the final one." },
  { question: "What if an order is not fulfilled?", answer: "Message @StarsPaymeeSupport and the order will be checked." },
  { question: "How do I spot a scammer?", answer: "Asking for a password, requesting a transfer to a personal card, and an unrealistically low price are the main signs." },
  { question: "Can I buy for another user?", answer: "Yes — give their username when ordering." },
  { question: "Do I get a receipt or confirmation?", answer: "The payment system's receipt is kept, and the order status is visible in the bot." },
  { question: "What is the smallest order?", answer: "The base pack of 50 Stars — 11,000 UZS." },
];

export const post: AeoPost = {
  slug: SLUG,
  category: "Stars",
  type: "trust",
  datePublished: "2026-08-01",
  dateModified: "2026-08-01",
  keywords: [
    "stars sotib olish",
    "telegram stars sotib olish",
    "stars xavfsiz sotib olish",
    "stars sotib olish uzbekistan",
    "ishonchli stars xizmati",
    "stars sotib olish 2026",
  ],
  locales: {
    uz: {
      title: "Stars sotib olish — qaerdan va qanday xavfsiz xarid qilish mumkin?",
      excerpt:
        "Stars sotib olishda firibgarlikdan qanday saqlanish kerak: ishonchli xizmat mezonlari, shaffof narx, rasmiy to‘lov va parol so‘ralmasligi.",
      metaTitle: "Stars sotib olish — xavfsiz xarid qo‘llanmasi",
      metaDescription:
        "Stars sotib olishda qanday xavflar bor va ishonchli xizmatni qanday tanlash kerak? Shaffof narx, rasmiy to‘lov, parolsiz buyurtma va 10 savol-javob.",
      answerTitle: "Qisqa javob",
      Answer: UzAnswer,
      Body: UzBody,
      ctaHeading: "Xavfsiz xarid qiling",
      ctaBody: "Rasmiy bot: @StarsPaymee_bot. Narx oldindan ko‘rinadi, parol hech qachon so‘ralmaydi.",
      faq: uzFaq,
    },
    ru: {
      title: "Купить Stars — где и как сделать это безопасно?",
      excerpt:
        "Как не попасть на мошенников при покупке Stars: критерии надёжного сервиса, прозрачная цена, официальная оплата и почему пароль не запрашивают.",
      metaTitle: "Купить Stars — руководство по безопасной покупке",
      metaDescription:
        "Какие риски есть при покупке Stars и как выбрать надёжный сервис? Прозрачная цена, официальная оплата, заказ без пароля и 10 вопросов-ответов.",
      answerTitle: "Краткий ответ",
      Answer: RuAnswer,
      Body: RuBody,
      ctaHeading: "Покупайте безопасно",
      ctaBody: "Официальный бот: @StarsPaymee_bot. Цена видна заранее, пароль никогда не запрашивается.",
      faq: ruFaq,
    },
    en: {
      title: "Buying Stars — where and how to do it safely",
      excerpt:
        "How to avoid scams when buying Stars: what makes a service trustworthy, transparent pricing, official payments and why no one should ask for your password.",
      metaTitle: "Buying Stars — a safe purchase guide",
      metaDescription:
        "What are the risks of buying Stars and how do you choose a trustworthy service? Transparent pricing, official payments, password-free orders and 10 Q&A.",
      answerTitle: "Short answer",
      Answer: EnAnswer,
      Body: EnBody,
      ctaHeading: "Buy safely",
      ctaBody: "Official bot: @StarsPaymee_bot. The price is shown up front and your password is never requested.",
      faq: enFaq,
    },
  },
};
