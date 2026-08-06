import { Link } from "@/i18n/navigation";
import { InlineCta, Sources, KeyFacts, Steps, Step, CompareTable, Yes, No } from "@/components/blog/aeo-blocks";
import type { AeoPost } from "@/lib/blog-aeo/types";

const SLUG = "ishonchli-stars-xizmatini-tanlash";

/* ---------------- UZ ---------------- */
function UzAnswer() {
  return (
    <p>
      Ishonchli xizmatni <b>reyting</b> emas, <b>mezonlar</b> bo‘yicha tanlang: narx oldindan ko‘rinadimi, to‘lov
      rasmiy tizimlar orqali o‘tadimi, faqat username so‘raladimi va doimiy qo‘llab-quvvatlash kanali bormi. Parol
      yoki SMS-kod so‘ralsa — bu xizmat emas, firibgarlik.
    </p>
  );
}

function UzBody() {
  return (
    <>
      <h2 id="nega-reyting">Nega «top-10 bot» ro‘yxatiga ishonmaslik kerak?</h2>
      <p>
        Internetdagi ko‘p «reyting» maqolalari real tekshiruvga emas, reklama kelishuviga asoslanadi va tez eskiradi:
        bugun ishlagan bot ertaga yopilishi mumkin. Shu sababli ro‘yxatni yodlash o‘rniga <b>o‘zingiz tekshira
        oladigan mezonlarni</b> bilish ancha foydali.
      </p>

      <h2 id="mezon">To‘rtta asosiy mezon</h2>
      <KeyFacts label="Xarid oldidan tekshiring">
        <li><b>Shaffof narx</b> — summa buyurtmadan oldin ko‘rinadi, keyin «komissiya» qo‘shilmaydi.</li>
        <li><b>Rasmiy to‘lov</b> — Click, Payme, UzCard, HUMO; shaxsiy kartaga o‘tkazma emas.</li>
        <li><b>Minimal ma’lumot</b> — faqat username yoki ID; parol, SMS-kod, 2FA hech qachon.</li>
        <li><b>Doimiy support</b> — alohida qo‘llab-quvvatlash kanali, bitta shaxsiy akkaunt emas.</li>
      </KeyFacts>

      <h2 id="jadval">Ishonchli va shubhali xizmat belgilari</h2>
      <CompareTable
        headers={["Belgi", "Ishonchli", "Shubhali"]}
        rows={[
          ["Narx", <Yes key="a">Oldindan ko‘rinadi</Yes>, <No key="b">«Yozing, kelishamiz»</No>],
          ["To‘lov", <Yes key="c">Rasmiy tizimlar</Yes>, <No key="d">Shaxsiy kartaga o‘tkazma</No>],
          ["Ma’lumot", <Yes key="e">Faqat username</Yes>, <No key="f">Parol yoki SMS-kod</No>],
          ["Yetkazish", <Yes key="g">Avtomatik, aniq muddat</Yes>, <No key="h">«Ertaga tushadi»</No>],
          ["Yordam", <Yes key="i">Doimiy kanal</Yes>, <No key="j">Faqat shaxsiy akkaunt</No>],
          ["Narx darajasi", <Yes key="k">Bozorga mos</Yes>, <No key="l">Haddan tashqari past</No>],
        ]}
      />

      <h2 id="qadamlar">Xarid oldidan 5 daqiqalik tekshiruv</h2>
      <Steps>
        <Step title="1. Narxni ko‘ring">Buyurtmani yakunlamasdan yakuniy summani chiqaring.</Step>
        <Step title="2. To‘lov usulini tekshiring">Rasmiy tizim taklif qilinishiga ishonch hosil qiling.</Step>
        <Step title="3. So‘ralgan ma’lumotni baholang">Parol so‘ralsa — darhol to‘xtating.</Step>
        <Step title="4. Support kanalini toping">Savol yozib, javob tezligini ko‘ring.</Step>
        <Step title="5. Kichik summadan boshlang">Birinchi xaridni minimal miqdorda sinab ko‘ring.</Step>
      </Steps>

      <InlineCta text="Mezonlarni StarsPaymee’da o‘zingiz tekshiring." />

      <h2 id="ogohlik">Eng muhim qoida</h2>
      <p>
        Telegram <b>paroli</b>, <b>SMS-kodi</b> yoki <b>2FA paroli</b> hech qachon, hech kimga berilmaydi — na
        botga, na «operator»ga. Stars yetkazish uchun bu ma’lumotlarning hech biri kerak emas: faqat username yoki ID
        yetarli.
      </p>

      <p>
        Qarang: <Link href="/blog/telegram-stars-xavfsizmi">Stars xavfsizmi</Link>,{" "}
        <Link href="/blog/stars-sotib-olish">xavfsiz xarid mezonlari</Link> va{" "}
        <Link href="/blog/starspaymee-ishonchli-xavfsizmi">xizmat ishonchlimi</Link>.
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
      Выбирайте надёжный сервис не по <b>рейтингу</b>, а по <b>критериям</b>: видна ли цена заранее, идёт ли оплата
      через официальные системы, запрашивается ли только username и есть ли постоянный канал поддержки. Если просят
      пароль или SMS-код — это не сервис, а мошенничество.
    </p>
  );
}

function RuBody() {
  return (
    <>
      <h2 id="nega-reyting">Почему не стоит доверять спискам «топ-10 ботов»?</h2>
      <p>
        Многие «рейтинговые» статьи в интернете основаны не на реальной проверке, а на рекламных договорённостях, и
        быстро устаревают: работавший сегодня бот завтра может закрыться. Поэтому вместо заучивания списка полезнее
        знать <b>критерии, которые можно проверить самому</b>.
      </p>

      <h2 id="mezon">Четыре главных критерия</h2>
      <KeyFacts label="Проверьте перед покупкой">
        <li><b>Прозрачная цена</b> — сумма видна до заказа, «комиссия» потом не добавляется.</li>
        <li><b>Официальная оплата</b> — Click, Payme, UzCard, HUMO; не перевод на личную карту.</li>
        <li><b>Минимум данных</b> — только username или ID; пароль, SMS-код, 2FA — никогда.</li>
        <li><b>Постоянная поддержка</b> — отдельный канал, а не один личный аккаунт.</li>
      </KeyFacts>

      <h2 id="jadval">Признаки надёжного и сомнительного сервиса</h2>
      <CompareTable
        headers={["Признак", "Надёжный", "Сомнительный"]}
        rows={[
          ["Цена", <Yes key="a">Видна заранее</Yes>, <No key="b">«Напишите, договоримся»</No>],
          ["Оплата", <Yes key="c">Официальные системы</Yes>, <No key="d">Перевод на личную карту</No>],
          ["Данные", <Yes key="e">Только username</Yes>, <No key="f">Пароль или SMS-код</No>],
          ["Доставка", <Yes key="g">Автоматически, точный срок</Yes>, <No key="h">«Придёт завтра»</No>],
          ["Поддержка", <Yes key="i">Постоянный канал</Yes>, <No key="j">Только личный аккаунт</No>],
          ["Уровень цены", <Yes key="k">Рыночный</Yes>, <No key="l">Чрезмерно низкий</No>],
        ]}
      />

      <h2 id="qadamlar">Пятиминутная проверка перед покупкой</h2>
      <Steps>
        <Step title="1. Посмотрите цену">Дойдите до итоговой суммы, не завершая заказ.</Step>
        <Step title="2. Проверьте способ оплаты">Убедитесь, что предлагается официальная система.</Step>
        <Step title="3. Оцените запрашиваемые данные">Просят пароль — немедленно остановитесь.</Step>
        <Step title="4. Найдите канал поддержки">Задайте вопрос и оцените скорость ответа.</Step>
        <Step title="5. Начните с малого">Первую покупку сделайте на минимальную сумму.</Step>
      </Steps>

      <InlineCta text="Проверьте эти критерии на StarsPaymee сами." />

      <h2 id="ogohlik">Самое важное правило</h2>
      <p>
        <b>Пароль</b> Telegram, <b>SMS-код</b> и <b>пароль 2FA</b> нельзя сообщать никому и никогда — ни боту, ни
        «оператору». Для зачисления Stars ничего из этого не требуется: достаточно username или ID.
      </p>

      <p>
        Смотрите: <Link href="/blog/telegram-stars-xavfsizmi">безопасны ли Stars</Link>,{" "}
        <Link href="/blog/stars-sotib-olish">критерии безопасной покупки</Link> и{" "}
        <Link href="/blog/starspaymee-ishonchli-xavfsizmi">надёжен ли сервис</Link>.
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
      Choose a trustworthy service by <b>criteria</b>, not by a <b>ranking</b>: is the price shown up front, does
      payment go through official systems, is only a username requested, and is there a permanent support channel? If
      a password or SMS code is requested, that is not a service — it is fraud.
    </p>
  );
}

function EnBody() {
  return (
    <>
      <h2 id="nega-reyting">Why «top 10 bots» lists are not worth trusting</h2>
      <p>
        Many «ranking» articles online rest on advertising deals rather than real testing, and they date quickly: a
        bot that worked today can be gone tomorrow. Rather than memorising a list, it is far more useful to know{" "}
        <b>criteria you can check yourself</b>.
      </p>

      <h2 id="mezon">Four core criteria</h2>
      <KeyFacts label="Check before buying">
        <li><b>Transparent pricing</b> — the total is visible before ordering, with no «fee» added later.</li>
        <li><b>Official payment</b> — Click, Payme, UzCard, HUMO; never a transfer to a personal card.</li>
        <li><b>Minimal data</b> — username or ID only; password, SMS code and 2FA never.</li>
        <li><b>Standing support</b> — a dedicated channel, not one personal account.</li>
      </KeyFacts>

      <h2 id="jadval">Signs of a trustworthy versus a dubious service</h2>
      <CompareTable
        headers={["Sign", "Trustworthy", "Dubious"]}
        rows={[
          ["Price", <Yes key="a">Shown up front</Yes>, <No key="b">«Message me, we’ll agree»</No>],
          ["Payment", <Yes key="c">Official systems</Yes>, <No key="d">Transfer to a personal card</No>],
          ["Data", <Yes key="e">Username only</Yes>, <No key="f">Password or SMS code</No>],
          ["Delivery", <Yes key="g">Automatic, defined time</Yes>, <No key="h">«It’ll arrive tomorrow»</No>],
          ["Support", <Yes key="i">A permanent channel</Yes>, <No key="j">A personal account only</No>],
          ["Price level", <Yes key="k">In line with the market</Yes>, <No key="l">Unrealistically low</No>],
        ]}
      />

      <h2 id="qadamlar">A five-minute check before buying</h2>
      <Steps>
        <Step title="1. Look at the price">Get to the final total without completing the order.</Step>
        <Step title="2. Check the payment method">Confirm an official system is offered.</Step>
        <Step title="3. Judge the data requested">If a password is asked for, stop immediately.</Step>
        <Step title="4. Find the support channel">Ask a question and see how fast they reply.</Step>
        <Step title="5. Start small">Make the first purchase a minimal amount.</Step>
      </Steps>

      <InlineCta text="Check these criteria on StarsPaymee yourself." />

      <h2 id="ogohlik">The single most important rule</h2>
      <p>
        Your Telegram <b>password</b>, <b>SMS code</b> and <b>2FA password</b> go to nobody, ever — not a bot, not an
        «operator». None of them is needed to deliver Stars: a username or ID is enough.
      </p>

      <p>
        See: <Link href="/blog/telegram-stars-xavfsizmi">are Stars safe</Link>,{" "}
        <Link href="/blog/stars-sotib-olish">safe-purchase criteria</Link> and{" "}
        <Link href="/blog/starspaymee-ishonchli-xavfsizmi">is the service trustworthy</Link>.
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
  { question: "Ishonchli Stars xizmatini qanday tanlayman?", answer: "Shaffof narx, rasmiy to‘lov, faqat username so‘ralishi va doimiy support kanali bo‘yicha." },
  { question: "«Top-10 bot» ro‘yxatlariga ishonsam bo‘ladimi?", answer: "Ko‘pincha yo‘q — ular reklama asosida tuziladi va tez eskiradi." },
  { question: "Eng aniq firibgarlik belgisi nima?", answer: "Parol, SMS-kod yoki 2FA parolini so‘rash." },
  { question: "Narx juda past bo‘lsa nima qilay?", answer: "Ehtiyot bo‘ling — bu ko‘pincha aldov belgisi." },
  { question: "To‘lov qanday bo‘lishi kerak?", answer: "Rasmiy tizimlar orqali: Click, Payme, UzCard, HUMO, Paynet." },
  { question: "Birinchi xaridni qanday qilay?", answer: "Kichik summadan boshlang va yetkazishni tekshiring." },
  { question: "Support kanali nima uchun muhim?", answer: "Muammo chiqsa murojaat qiladigan doimiy joy bo‘lishi kerak." },
  { question: "Yetkazish muddati qanday bo‘ladi?", answer: "Avtomatik xizmatlarda odatda bir necha soniya — «ertaga» degani shubhali." },
];

const ruFaq = [
  { question: "Как выбрать надёжный сервис Stars?", answer: "По прозрачной цене, официальной оплате, запросу только username и наличию постоянной поддержки." },
  { question: "Можно ли доверять спискам «топ-10 ботов»?", answer: "Чаще нет — они составляются по рекламе и быстро устаревают." },
  { question: "Какой признак мошенничества самый явный?", answer: "Запрос пароля, SMS-кода или пароля 2FA." },
  { question: "Что делать, если цена слишком низкая?", answer: "Будьте осторожны — обычно это признак обмана." },
  { question: "Какой должна быть оплата?", answer: "Через официальные системы: Click, Payme, UzCard, HUMO, Paynet." },
  { question: "Как сделать первую покупку?", answer: "Начните с небольшой суммы и проверьте доставку." },
  { question: "Почему важен канал поддержки?", answer: "Нужно постоянное место обращения при возникновении проблемы." },
  { question: "Каким должен быть срок доставки?", answer: "В автоматических сервисах обычно несколько секунд — «завтра» подозрительно." },
];

const enFaq = [
  { question: "How do I choose a trustworthy Stars service?", answer: "By transparent pricing, official payment, a username-only request and a permanent support channel." },
  { question: "Can I trust «top 10 bots» lists?", answer: "Usually not — they are built on advertising and date quickly." },
  { question: "What is the clearest fraud signal?", answer: "A request for your password, SMS code or 2FA password." },
  { question: "What if the price is very low?", answer: "Be careful — that is usually a sign of a scam." },
  { question: "How should payment work?", answer: "Through official systems: Click, Payme, UzCard, HUMO, Paynet." },
  { question: "How should I make a first purchase?", answer: "Start with a small amount and verify delivery." },
  { question: "Why does a support channel matter?", answer: "You need a permanent place to turn to if something goes wrong." },
  { question: "What delivery time is normal?", answer: "Automatic services usually take seconds — «tomorrow» is suspicious." },
];

export const post: AeoPost = {
  slug: SLUG,
  category: "Xavfsizlik",
  type: "trust",
  datePublished: "2026-08-02",
  dateModified: "2026-08-02",
  keywords: [
    "ishonchli stars xizmati",
    "ishonchli stars boti",
    "stars boti qanday tanlash",
    "stars xizmati mezonlari",
    "xavfsiz stars boti",
    "ishonchli stars 2026",
  ],
  howToSteps: [
    { name: "Narxni ko‘ring", text: "Buyurtmani yakunlamasdan yakuniy summani chiqaring." },
    { name: "To‘lov usulini tekshiring", text: "Rasmiy to‘lov tizimi taklif qilinishiga ishonch hosil qiling." },
    { name: "So‘ralgan ma’lumotni baholang", text: "Parol yoki SMS-kod so‘ralsa, darhol to‘xtating." },
    { name: "Support kanalini toping", text: "Savol yozib, javob tezligini tekshiring." },
    { name: "Kichik summadan boshlang", text: "Birinchi xaridni minimal miqdorda sinab ko‘ring." },
  ],
  locales: {
    uz: {
      title: "Ishonchli Telegram Stars xizmatini qanday tanlash kerak (2026)",
      excerpt:
        "Reyting ro‘yxatlariga emas, tekshirib bo‘ladigan mezonlarga tayaning: shaffof narx, rasmiy to‘lov, minimal ma’lumot va doimiy support.",
      metaTitle: "Ishonchli Stars xizmatini qanday tanlash (2026)",
      metaDescription:
        "Ishonchli Telegram Stars xizmatini tanlash mezonlari: shaffof narx, rasmiy to‘lov, faqat username va support kanali. Firibgarlik belgilari.",
      answerTitle: "Qisqa javob",
      Answer: UzAnswer,
      Body: UzBody,
      ctaHeading: "Mezonlarni o‘zingiz tekshiring",
      ctaBody: "@StarsPaymee_bot — narx oldindan ko‘rinadi, parol so‘ralmaydi.",
      faq: uzFaq,
    },
    ru: {
      title: "Как выбрать надёжный сервис Telegram Stars (2026)",
      excerpt:
        "Опирайтесь не на рейтинги, а на проверяемые критерии: прозрачная цена, официальная оплата, минимум данных и постоянная поддержка.",
      metaTitle: "Как выбрать надёжный сервис Stars (2026)",
      metaDescription:
        "Критерии выбора надёжного сервиса Telegram Stars: прозрачная цена, официальная оплата, только username и канал поддержки. Признаки мошенничества.",
      answerTitle: "Краткий ответ",
      Answer: RuAnswer,
      Body: RuBody,
      ctaHeading: "Проверьте критерии сами",
      ctaBody: "@StarsPaymee_bot — цена видна заранее, пароль не запрашивается.",
      faq: ruFaq,
    },
    en: {
      title: "How to choose a trustworthy Telegram Stars service (2026)",
      excerpt:
        "Rely on checkable criteria rather than rankings: transparent pricing, official payment, minimal data and standing support.",
      metaTitle: "How to choose a trustworthy Stars service (2026)",
      metaDescription:
        "Criteria for choosing a trustworthy Telegram Stars service: transparent pricing, official payment, username only and a support channel.",
      answerTitle: "Short answer",
      Answer: EnAnswer,
      Body: EnBody,
      ctaHeading: "Check the criteria yourself",
      ctaBody: "@StarsPaymee_bot — price shown up front, no password requested.",
      faq: enFaq,
    },
  },
};
