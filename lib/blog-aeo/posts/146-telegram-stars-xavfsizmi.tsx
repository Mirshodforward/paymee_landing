import { Link } from "@/i18n/navigation";
import { InlineCta, Sources, KeyFacts, CompareTable, Yes, No } from "@/components/blog/aeo-blocks";
import type { AeoPost } from "@/lib/blog-aeo/types";

const SLUG = "telegram-stars-xavfsizmi";

/* ---------------- UZ ---------------- */
function UzAnswer() {
  return (
    <p>
      Stars tizimining o‘zi <b>xavfsiz</b> — u Telegram tomonidan rasmiy joriy qilingan va platforma o‘zi boshqaradi.
      Xavf uchinchi tomon xizmatlarida: <b>parol yoki SMS-kod so‘ralsa</b>, shaxsiy kartaga o‘tkazma talab qilinsa
      yoki narx bozordan keskin past bo‘lsa — bu firibgarlik belgisi.
    </p>
  );
}

function UzBody() {
  return (
    <>
      <h2 id="rasmiy">Rasmiy tizim qanchalik xavfsiz?</h2>
      <p>
        Telegram Stars — Telegram tomonidan rasmiy ravishda joriy qilingan to‘lov tizimi bo‘lib, platformaning o‘zi
        tomonidan boshqariladi. Shu sababli asosiy infratuzilma ishonchli hisoblanadi.
      </p>

      <h2 id="uchinchi">Uchinchi tomon xizmatlari xavfsizmi?</h2>
      <p>
        Muammo ko‘pincha uchinchi tomon orqali sotib olishda yuzaga keladi, chunki bozorda ishonchsiz saytlar ham
        bor. Xavfsiz xizmatni tanlash uchun quyidagilarga e’tibor bering:
      </p>
      <KeyFacts label="Tekshirish mezonlari">
        <li><b>Mijozlar sharhlari</b> — boshqa foydalanuvchilar tajribasini o‘qing.</li>
        <li><b>Shaffof narx</b> — yashirin to‘lov yo‘qligiga ishonch hosil qiling.</li>
        <li><b>Rasmiy aloqa kanallari</b> — faol qo‘llab-quvvatlash xizmati borligini tekshiring.</li>
        <li><b>Ish tajribasi</b> — uzoq vaqtdan beri faoliyat yuritayotgan xizmatlarni afzal ko‘ring.</li>
      </KeyFacts>

      <h2 id="belgilar">Xavfli va xavfsiz xizmat belgilari</h2>
      <CompareTable
        headers={["Belgi", "Xavfsiz", "Xavfli"]}
        rows={[
          ["So‘raladigan ma’lumot", <Yes key="a">Faqat username yoki ID</Yes>, <No key="b">Parol, SMS-kod, 2FA</No>],
          ["To‘lov", <Yes key="c">Rasmiy tizimlar</Yes>, <No key="d">Shaxsiy kartaga o‘tkazma</No>],
          ["Narx", <Yes key="e">Bozorga mos, oldindan ko‘rinadi</Yes>, <No key="f">Haddan tashqari past</No>],
          ["Yordam", <Yes key="g">Doimiy support kanali</Yes>, <No key="h">Bitta shaxsiy akkaunt</No>],
        ]}
      />

      <h2 id="starspaymee">StarsPaymee xavfsizligi</h2>
      <KeyFacts label="Xizmat nima qiladi">
        <li>Faqat kerakli minimal ma’lumot (username) so‘raydi.</li>
        <li>To‘lovda rasmiy tizimlardan foydalanadi.</li>
        <li>Narxni buyurtmadan oldin ko‘rsatadi.</li>
        <li>@StarsPaymeeSupport orqali qo‘llab-quvvatlaydi.</li>
      </KeyFacts>

      <InlineCta text="Xavfsiz xarid uchun rasmiy botga o‘ting." />

      <h2 id="hushyor">Qanday hushyor bo‘lish kerak?</h2>
      <p>
        Hech qachon parolingiz, SMS-kod yoki bank karta CVV kodini uchinchi tomonga bermang. Faqat rasmiy bot yoki
        sayt orqali harakat qiling, shubhali havolalarga bosmang.
      </p>

      <p>
        Qarang: <Link href="/blog/stars-sotib-olish">xavfsiz xarid mezonlari</Link>,{" "}
        <Link href="/blog/ishonchli-stars-xizmatini-tanlash">xizmatni qanday tanlash</Link> va{" "}
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
      Сама система Stars <b>безопасна</b> — она официально введена Telegram и управляется платформой. Риск
      сосредоточен в сторонних сервисах: если <b>просят пароль или SMS-код</b>, требуют перевод на личную карту или
      предлагают цену резко ниже рыночной — это признаки мошенничества.
    </p>
  );
}

function RuBody() {
  return (
    <>
      <h2 id="rasmiy">Насколько безопасна официальная система?</h2>
      <p>
        Telegram Stars — официально введённая Telegram платёжная система, которой управляет сама платформа. Поэтому
        базовая инфраструктура считается надёжной.
      </p>

      <h2 id="uchinchi">Безопасны ли сторонние сервисы?</h2>
      <p>
        Проблемы чаще возникают при покупке через третьи стороны, поскольку на рынке есть и ненадёжные сайты. Чтобы
        выбрать безопасный сервис, обратите внимание на следующее:
      </p>
      <KeyFacts label="Критерии проверки">
        <li><b>Отзывы клиентов</b> — изучите опыт других пользователей.</li>
        <li><b>Прозрачная цена</b> — убедитесь в отсутствии скрытых платежей.</li>
        <li><b>Официальные каналы связи</b> — проверьте наличие активной поддержки.</li>
        <li><b>Опыт работы</b> — предпочитайте сервисы, работающие давно.</li>
      </KeyFacts>

      <h2 id="belgilar">Признаки безопасного и опасного сервиса</h2>
      <CompareTable
        headers={["Признак", "Безопасно", "Опасно"]}
        rows={[
          ["Запрашиваемые данные", <Yes key="a">Только username или ID</Yes>, <No key="b">Пароль, SMS-код, 2FA</No>],
          ["Оплата", <Yes key="c">Официальные системы</Yes>, <No key="d">Перевод на личную карту</No>],
          ["Цена", <Yes key="e">Рыночная, видна заранее</Yes>, <No key="f">Чрезмерно низкая</No>],
          ["Поддержка", <Yes key="g">Постоянный канал</Yes>, <No key="h">Один личный аккаунт</No>],
        ]}
      />

      <h2 id="starspaymee">Безопасность StarsPaymee</h2>
      <KeyFacts label="Что делает сервис">
        <li>Запрашивает только необходимый минимум (username).</li>
        <li>Использует официальные платёжные системы.</li>
        <li>Показывает цену до оформления заказа.</li>
        <li>Поддерживает через @StarsPaymeeSupport.</li>
      </KeyFacts>

      <InlineCta text="Для безопасной покупки перейдите в официального бота." />

      <h2 id="hushyor">Как оставаться бдительным?</h2>
      <p>
        Никогда не сообщайте третьим лицам пароль, SMS-код или CVV банковской карты. Действуйте только через
        официального бота или сайт и не переходите по подозрительным ссылкам.
      </p>

      <p>
        Смотрите: <Link href="/blog/stars-sotib-olish">критерии безопасной покупки</Link>,{" "}
        <Link href="/blog/ishonchli-stars-xizmatini-tanlash">как выбрать сервис</Link> и{" "}
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
      The Stars system itself is <b>safe</b> — Telegram introduced it officially and the platform runs it. The risk
      sits with third-party services: if you are <b>asked for a password or SMS code</b>, told to transfer to a
      personal card, or offered a price far below the market, those are fraud signals.
    </p>
  );
}

function EnBody() {
  return (
    <>
      <h2 id="rasmiy">How safe is the official system?</h2>
      <p>
        Telegram Stars is a payment system Telegram introduced officially and operates itself. The underlying
        infrastructure is therefore considered reliable.
      </p>

      <h2 id="uchinchi">Are third-party services safe?</h2>
      <p>
        Problems usually arise when buying through third parties, because unreliable sites exist on the market. To
        choose a safe service, look at the following:
      </p>
      <KeyFacts label="What to check">
        <li><b>Customer reviews</b> — read about other users’ experience.</li>
        <li><b>Transparent pricing</b> — confirm there are no hidden charges.</li>
        <li><b>Official contact channels</b> — check that active support exists.</li>
        <li><b>Track record</b> — prefer services that have operated for a while.</li>
      </KeyFacts>

      <h2 id="belgilar">Signs of a safe versus a dangerous service</h2>
      <CompareTable
        headers={["Sign", "Safe", "Dangerous"]}
        rows={[
          ["Data requested", <Yes key="a">Username or ID only</Yes>, <No key="b">Password, SMS code, 2FA</No>],
          ["Payment", <Yes key="c">Official systems</Yes>, <No key="d">Transfer to a personal card</No>],
          ["Price", <Yes key="e">Market rate, shown up front</Yes>, <No key="f">Unrealistically low</No>],
          ["Support", <Yes key="g">A permanent channel</Yes>, <No key="h">A single personal account</No>],
        ]}
      />

      <h2 id="starspaymee">StarsPaymee and safety</h2>
      <KeyFacts label="What the service does">
        <li>Requests only the necessary minimum (a username).</li>
        <li>Uses official payment systems.</li>
        <li>Shows the price before you order.</li>
        <li>Provides support via @StarsPaymeeSupport.</li>
      </KeyFacts>

      <InlineCta text="For a safe purchase, use the official bot." />

      <h2 id="hushyor">How to stay alert</h2>
      <p>
        Never give a third party your password, an SMS code or a card CVV. Act only through the official bot or site
        and do not click suspicious links.
      </p>

      <p>
        See: <Link href="/blog/stars-sotib-olish">safe-purchase criteria</Link>,{" "}
        <Link href="/blog/ishonchli-stars-xizmatini-tanlash">how to choose a service</Link> and{" "}
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
  { question: "Telegram Stars xavfsizmi?", answer: "Ha, tizimning o‘zi Telegram tomonidan boshqariladi va xavfsiz." },
  { question: "Xavf qayerda?", answer: "Ishonchsiz uchinchi tomon xizmatlarida — parol so‘rash va shubhali to‘lov talablarida." },
  { question: "Parol so‘ralsa nima qilay?", answer: "Darhol to‘xtating — bu firibgarlik. Rasmiy xizmat parol so‘ramaydi." },
  { question: "Juda arzon taklif nima anglatadi?", answer: "Ko‘pincha firibgarlik belgisi — ehtiyot bo‘ling." },
  { question: "Qaysi ma’lumot berish xavfsiz?", answer: "Faqat Telegram username yoki ID." },
  { question: "CVV kodini so‘rashadimi?", answer: "Yo‘q. Hech qachon hech kimga bermang." },
  { question: "To‘lov qanday amalga oshirilishi kerak?", answer: "Rasmiy tizimlar (Click, Payme, UzCard) orqali, shaxsiy kartaga emas." },
  { question: "Muammo bo‘lsa kimga murojaat qilaman?", answer: "@StarsPaymeeSupport kanaliga." },
];

const ruFaq = [
  { question: "Безопасны ли Telegram Stars?", answer: "Да, сама система управляется Telegram и является безопасной." },
  { question: "Где находится риск?", answer: "В ненадёжных сторонних сервисах — запрос пароля и подозрительные требования оплаты." },
  { question: "Что делать, если просят пароль?", answer: "Немедленно прекратите — это мошенничество. Официальный сервис пароль не спрашивает." },
  { question: "О чём говорит слишком низкая цена?", answer: "Чаще всего это признак мошенничества — будьте осторожны." },
  { question: "Какие данные безопасно передавать?", answer: "Только Telegram username или ID." },
  { question: "Спрашивают ли CVV?", answer: "Нет. Никогда никому его не сообщайте." },
  { question: "Как должна проходить оплата?", answer: "Через официальные системы (Click, Payme, UzCard), а не переводом на личную карту." },
  { question: "Куда обращаться при проблеме?", answer: "В канал @StarsPaymeeSupport." },
];

const enFaq = [
  { question: "Are Telegram Stars safe?", answer: "Yes — the system itself is run by Telegram and is safe." },
  { question: "Where does the risk sit?", answer: "With unreliable third-party services — password requests and suspicious payment demands." },
  { question: "What if someone asks for my password?", answer: "Stop immediately — that is fraud. An official service never asks." },
  { question: "What does a very low price mean?", answer: "Usually a fraud signal — be careful." },
  { question: "Which data is safe to share?", answer: "Only a Telegram username or ID." },
  { question: "Will anyone ask for a CVV?", answer: "No. Never give it to anyone." },
  { question: "How should payment work?", answer: "Through official systems (Click, Payme, UzCard), not a transfer to a personal card." },
  { question: "Who do I contact if something goes wrong?", answer: "The @StarsPaymeeSupport channel." },
];

export const post: AeoPost = {
  slug: SLUG,
  category: "Xavfsizlik",
  type: "trust",
  datePublished: "2026-08-02",
  dateModified: "2026-08-02",
  keywords: [
    "telegram stars xavfsizmi",
    "stars xavfsizlik",
    "stars firibgarlik",
    "xavfsiz stars xarid",
    "telegram stars aldov",
    "stars xavfsizmi 2026",
  ],
  locales: {
    uz: {
      title: "Telegram Stars xavfsizmi? Bilishingiz kerak bo‘lgan narsalar",
      excerpt:
        "Stars tizimi xavfsizmi, xavf qayerda va ishonchli xizmatni qanday aniqlash mumkin — firibgarlik belgilari va tekshirish mezonlari.",
      metaTitle: "Telegram Stars xavfsizmi — to‘liq tahlil",
      metaDescription:
        "Telegram Stars xavfsizmi? Rasmiy tizim va uchinchi tomon xizmatlari, firibgarlik belgilari hamda xavfsiz xarid mezonlari.",
      answerTitle: "Qisqa javob",
      Answer: UzAnswer,
      Body: UzBody,
      ctaHeading: "Xavfsiz xarid qiling",
      ctaBody: "@StarsPaymee_bot — parol so‘ralmaydi, narx oldindan ko‘rinadi.",
      faq: uzFaq,
    },
    ru: {
      title: "Безопасны ли Telegram Stars? Что нужно знать",
      excerpt:
        "Безопасна ли система Stars, где находится риск и как определить надёжный сервис — признаки мошенничества и критерии проверки.",
      metaTitle: "Безопасны ли Telegram Stars — полный разбор",
      metaDescription:
        "Безопасны ли Telegram Stars? Официальная система и сторонние сервисы, признаки мошенничества и критерии безопасной покупки.",
      answerTitle: "Краткий ответ",
      Answer: RuAnswer,
      Body: RuBody,
      ctaHeading: "Покупайте безопасно",
      ctaBody: "@StarsPaymee_bot — пароль не запрашивается, цена видна заранее.",
      faq: ruFaq,
    },
    en: {
      title: "Are Telegram Stars safe? What you need to know",
      excerpt:
        "Whether the Stars system is safe, where the risk actually sits and how to identify a trustworthy service — fraud signals and checks.",
      metaTitle: "Are Telegram Stars safe — a full breakdown",
      metaDescription:
        "Are Telegram Stars safe? The official system versus third-party services, fraud signals and safe-purchase criteria.",
      answerTitle: "Short answer",
      Answer: EnAnswer,
      Body: EnBody,
      ctaHeading: "Buy safely",
      ctaBody: "@StarsPaymee_bot — no password requested, price shown up front.",
      faq: enFaq,
    },
  },
};
