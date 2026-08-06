import { Link } from "@/i18n/navigation";
import { InlineCta, Sources, KeyFacts, Steps, Step, InfoGrid, InfoCard } from "@/components/blog/aeo-blocks";
import type { AeoPost } from "@/lib/blog-aeo/types";

const SLUG = "stars-olish-tez-usul";

/* ---------------- UZ ---------------- */
function UzAnswer() {
  return (
    <p>
      Eng tez yo‘l — <b>@StarsPaymee_bot</b>: butun jarayon odatda <b>5 daqiqadan oshmaydi</b>. Karta bog‘lash,
      valyuta konvertatsiyasini kutish yoki qo‘shimcha tasdiqlash bosqichlari yo‘q — miqdorni tanlaysiz, so‘mda
      to‘laysiz va yulduzlar ~10 soniyada tushadi.
    </p>
  );
}

function UzBody() {
  return (
    <>
      <h2 id="tezlik">Nima uchun tezlik muhim?</h2>
      <p>
        Ko‘p hollarda Stars zudlik bilan kerak bo‘ladi — botdagi taklifni o‘tkazib yubormaslik yoki do‘stga sovg‘a
        yuborish uchun. Sekin va murakkab jarayonlar foydalanuvchini charchatadi, natijada u tezroq yechim izlaydi.
      </p>

      <h2 id="muammo">Rasmiy usuldagi vaqt yo‘qotuvchi bosqichlar</h2>
      <KeyFacts label="Nimalar vaqt oladi">
        <li>Bank kartasini bog‘lash.</li>
        <li>Valyuta konvertatsiyasini kutish.</li>
        <li>Ayrim mintaqalarda to‘lovning rad etilishi.</li>
        <li>Qo‘shimcha tasdiqlash jarayonlari.</li>
      </KeyFacts>

      <h2 id="tezkor">Tezkor muqobil</h2>
      <Steps>
        <Step title="1. /start">Botga /start buyrug‘ini yuboring.</Step>
        <Step title="2. Paketni tanlang">Kichikdan kattagacha tayyor variantlar.</Step>
        <Step title="3. Username kiriting">Yulduzlar tushadigan hisob.</Step>
        <Step title="4. To‘lang">Mavjud mahalliy usul orqali.</Step>
        <Step title="5. Tayyor">Yulduzlar bir necha soniyada hisobda.</Step>
      </Steps>

      <InlineCta text="Bir daqiqada boshlang — /start yuboring." />

      <h2 id="boshqa">Tezlikdan tashqari nima muhim?</h2>
      <InfoGrid>
        <InfoCard emoji="🛡️" title="Ishonchlilik">
          Pul va ma’lumot xavfsizligi kafolatlanishi.
        </InfoCard>
        <InfoCard emoji="🧾" title="Qulay narx">
          Ortiqcha komissiyasiz adolatli tarif.
        </InfoCard>
        <InfoCard emoji="🕐" title="24/7 yordam">
          Istalgan vaqtda savolga javob.
        </InfoCard>
        <InfoCard emoji="🔁" title="Takroriy xarid">
          Keyingi safar yanada tezroq — ma’lumot saqlanadi.
        </InfoCard>
      </InfoGrid>

      <p>
        Batafsil: <Link href="/blog/stars-olish">Stars olish qo‘llanmasi</Link>,{" "}
        <Link href="/blog/telegram-stars-narxi">narxlar</Link> va{" "}
        <Link href="/blog/telegram-stars-xavfsizmi">xavfsizlik</Link>.
      </p>

      <Sources
        label="Manbalar"
        items={[
          { href: "https://core.telegram.org/bots/payments-stars", label: "core.telegram.org", note: "Stars to‘lovlari hujjati" },
          { href: "https://telegram.org/faq", label: "telegram.org/faq", note: "Telegram rasmiy FAQ" },
        ]}
      />
    </>
  );
}

/* ---------------- RU ---------------- */
function RuAnswer() {
  return (
    <p>
      Самый быстрый путь — <b>@StarsPaymee_bot</b>: весь процесс обычно <b>не превышает 5 минут</b>. Не нужно
      привязывать карту, ждать конвертации валюты или проходить дополнительные подтверждения — выбираете количество,
      платите в сумах, звёзды приходят за ~10 секунд.
    </p>
  );
}

function RuBody() {
  return (
    <>
      <h2 id="tezlik">Почему важна скорость?</h2>
      <p>
        Часто Stars нужны срочно — чтобы не упустить предложение в боте или отправить подарок другу. Медленные и
        сложные процессы утомляют, и пользователь начинает искать более быстрое решение.
      </p>

      <h2 id="muammo">Что отнимает время в официальном способе</h2>
      <KeyFacts label="Затратные по времени этапы">
        <li>Привязка банковской карты.</li>
        <li>Ожидание конвертации валюты.</li>
        <li>Отклонение платежа в отдельных регионах.</li>
        <li>Дополнительные процедуры подтверждения.</li>
      </KeyFacts>

      <h2 id="tezkor">Быстрая альтернатива</h2>
      <Steps>
        <Step title="1. /start">Отправьте боту команду /start.</Step>
        <Step title="2. Выберите пакет">Готовые варианты от малых до крупных.</Step>
        <Step title="3. Введите username">Аккаунт, куда поступят звёзды.</Step>
        <Step title="4. Оплатите">Доступным местным способом.</Step>
        <Step title="5. Готово">Звёзды на счету за несколько секунд.</Step>
      </Steps>

      <InlineCta text="Начните за минуту — отправьте /start." />

      <h2 id="boshqa">Что важно помимо скорости?</h2>
      <InfoGrid>
        <InfoCard emoji="🛡️" title="Надёжность">
          Гарантия безопасности денег и данных.
        </InfoCard>
        <InfoCard emoji="🧾" title="Удобная цена">
          Справедливый тариф без лишних комиссий.
        </InfoCard>
        <InfoCard emoji="🕐" title="Поддержка 24/7">
          Ответ на вопрос в любое время.
        </InfoCard>
        <InfoCard emoji="🔁" title="Повторная покупка">
          В следующий раз ещё быстрее — данные сохраняются.
        </InfoCard>
      </InfoGrid>

      <p>
        Подробнее: <Link href="/blog/stars-olish">руководство по покупке Stars</Link>,{" "}
        <Link href="/blog/telegram-stars-narxi">цены</Link> и{" "}
        <Link href="/blog/telegram-stars-xavfsizmi">безопасность</Link>.
      </p>

      <Sources
        label="Источники"
        items={[
          { href: "https://core.telegram.org/bots/payments-stars", label: "core.telegram.org", note: "документация по оплате Stars" },
          { href: "https://telegram.org/faq", label: "telegram.org/faq", note: "официальный FAQ Telegram" },
        ]}
      />
    </>
  );
}

/* ---------------- EN ---------------- */
function EnAnswer() {
  return (
    <p>
      The fastest route is <b>@StarsPaymee_bot</b>: the whole process usually takes <b>no more than 5 minutes</b>.
      There is no card linking, no waiting on currency conversion and no extra verification — you pick an amount,
      pay in so‘m, and Stars arrive in about 10 seconds.
    </p>
  );
}

function EnBody() {
  return (
    <>
      <h2 id="tezlik">Why speed matters</h2>
      <p>
        Stars are often needed urgently — to catch an offer inside a bot or send a friend a gift. Slow, complicated
        processes wear people out, and they start looking for a faster option.
      </p>

      <h2 id="muammo">What eats time in the official method</h2>
      <KeyFacts label="Time-consuming steps">
        <li>Linking a bank card.</li>
        <li>Waiting for currency conversion.</li>
        <li>Payment declines in certain regions.</li>
        <li>Extra verification procedures.</li>
      </KeyFacts>

      <h2 id="tezkor">The fast alternative</h2>
      <Steps>
        <Step title="1. /start">Send the bot the /start command.</Step>
        <Step title="2. Choose a pack">Ready-made options from small to large.</Step>
        <Step title="3. Enter a username">The account the Stars should land on.</Step>
        <Step title="4. Pay">With an available local method.</Step>
        <Step title="5. Done">Stars on the account within seconds.</Step>
      </Steps>

      <InlineCta text="Start in a minute — send /start." />

      <h2 id="boshqa">What matters besides speed?</h2>
      <InfoGrid>
        <InfoCard emoji="🛡️" title="Reliability">
          Your money and data stay protected.
        </InfoCard>
        <InfoCard emoji="🧾" title="Fair price">
          A reasonable rate with no surplus fees.
        </InfoCard>
        <InfoCard emoji="🕐" title="24/7 support">
          An answer whenever you need one.
        </InfoCard>
        <InfoCard emoji="🔁" title="Repeat orders">
          Faster next time — your details are kept.
        </InfoCard>
      </InfoGrid>

      <p>
        More: <Link href="/blog/stars-olish">the guide to getting Stars</Link>,{" "}
        <Link href="/blog/telegram-stars-narxi">prices</Link> and{" "}
        <Link href="/blog/telegram-stars-xavfsizmi">safety</Link>.
      </p>

      <Sources
        label="Sources"
        items={[
          { href: "https://core.telegram.org/bots/payments-stars", label: "core.telegram.org", note: "Stars payments documentation" },
          { href: "https://telegram.org/faq", label: "telegram.org/faq", note: "official Telegram FAQ" },
        ]}
      />
    </>
  );
}

const uzFaq = [
  { question: "Stars olishning eng tez yo‘li qaysi?", answer: "Bot orqali — butun jarayon odatda 5 daqiqadan oshmaydi." },
  { question: "Nega rasmiy usul sekinroq?", answer: "Karta bog‘lash, konvertatsiya va qo‘shimcha tasdiqlash bosqichlari vaqt oladi." },
  { question: "Yulduzlar qancha vaqtda tushadi?", answer: "Odatda ~10 soniya." },
  { question: "Birinchi marta ham tezmi?", answer: "Ha, ro‘yxatdan o‘tish talab qilinmaydi." },
  { question: "Tungi vaqtda ham ishlaydimi?", answer: "Ha, bot 24/7 ishlaydi." },
  { question: "Tezlik sifat hisobiga bo‘ladimi?", answer: "Yo‘q — narx oldindan ko‘rinadi, parol so‘ralmaydi." },
  { question: "To‘lov o‘tmasa nima bo‘ladi?", answer: "@StarsPaymeeSupport ga yozing, buyurtma tekshiriladi." },
  { question: "Keyingi xarid tezroqmi?", answer: "Ha, avvalgi ma’lumotlar saqlangani uchun tezroq bo‘ladi." },
];

const ruFaq = [
  { question: "Какой способ покупки Stars самый быстрый?", answer: "Через бота — весь процесс обычно не превышает 5 минут." },
  { question: "Почему официальный способ медленнее?", answer: "Привязка карты, конвертация и дополнительные подтверждения занимают время." },
  { question: "Как быстро приходят звёзды?", answer: "Обычно ~10 секунд." },
  { question: "Быстро ли в первый раз?", answer: "Да, регистрация не требуется." },
  { question: "Работает ли ночью?", answer: "Да, бот работает круглосуточно." },
  { question: "Не страдает ли качество из-за скорости?", answer: "Нет — цена видна заранее, пароль не запрашивается." },
  { question: "Что если платёж не прошёл?", answer: "Напишите в @StarsPaymeeSupport, заказ проверят." },
  { question: "Быстрее ли следующая покупка?", answer: "Да, прошлые данные сохраняются, поэтому быстрее." },
];

const enFaq = [
  { question: "What is the fastest way to get Stars?", answer: "Through the bot — the whole process usually takes under 5 minutes." },
  { question: "Why is the official method slower?", answer: "Card linking, conversion and extra verification all take time." },
  { question: "How fast do Stars arrive?", answer: "Usually about 10 seconds." },
  { question: "Is the first time fast too?", answer: "Yes, no registration is required." },
  { question: "Does it work at night?", answer: "Yes, the bot runs 24/7." },
  { question: "Does speed cost quality?", answer: "No — the price is shown up front and no password is requested." },
  { question: "What if the payment fails?", answer: "Message @StarsPaymeeSupport and the order will be checked." },
  { question: "Is the next purchase faster?", answer: "Yes, your previous details are kept, so it goes quicker." },
];

export const post: AeoPost = {
  slug: SLUG,
  category: "Stars",
  type: "howto",
  datePublished: "2026-08-02",
  dateModified: "2026-08-02",
  keywords: [
    "stars olish tez usul",
    "tez stars olish",
    "stars olish 5 daqiqa",
    "eng qulay stars olish",
    "stars tezkor xarid",
    "stars olish tez 2026",
  ],
  howToSteps: [
    { name: "/start yuboring", text: "@StarsPaymee_bot ga /start buyrug‘ini yuboring." },
    { name: "Paketni tanlang", text: "Kichikdan kattagacha tayyor paketlardan birini tanlang." },
    { name: "Username kiriting", text: "Yulduzlar tushadigan hisobni ko‘rsating." },
    { name: "To‘lang", text: "Mavjud mahalliy to‘lov usuli orqali." },
    { name: "Qabul qiling", text: "Yulduzlar bir necha soniyada hisobga tushadi." },
  ],
  locales: {
    uz: {
      title: "Stars olish — eng qulay va tez usul",
      excerpt:
        "Stars olishning eng tezkor yo‘li: rasmiy usuldagi vaqt yo‘qotuvchi bosqichlar, 5 daqiqalik muqobil va tezlikdan tashqari nima muhim.",
      metaTitle: "Stars olish — eng qulay va tez usul",
      metaDescription:
        "Stars olishning eng tez usuli: butun jarayon 5 daqiqadan oshmaydi. Karta bog‘lash va konvertatsiya kutish yo‘q, to‘lov so‘mda.",
      answerTitle: "Qisqa javob",
      Answer: UzAnswer,
      Body: UzBody,
      ctaHeading: "Tezkor xaridni boshlang",
      ctaBody: "@StarsPaymee_bot ga /start yuboring — 5 daqiqada tayyor.",
      faq: uzFaq,
    },
    ru: {
      title: "Покупка Stars — самый удобный и быстрый способ",
      excerpt:
        "Самый быстрый путь получения Stars: что отнимает время в официальном способе, 5-минутная альтернатива и что важно помимо скорости.",
      metaTitle: "Покупка Stars — самый удобный и быстрый способ",
      metaDescription:
        "Самый быстрый способ купить Stars: весь процесс не более 5 минут. Без привязки карты и ожидания конвертации, оплата в сумах.",
      answerTitle: "Краткий ответ",
      Answer: RuAnswer,
      Body: RuBody,
      ctaHeading: "Начните быструю покупку",
      ctaBody: "Отправьте /start в @StarsPaymee_bot — готово за 5 минут.",
      faq: ruFaq,
    },
    en: {
      title: "Getting Stars — the easiest and fastest way",
      excerpt:
        "The quickest route to Stars: what wastes time in the official method, the five-minute alternative, and what matters besides speed.",
      metaTitle: "Getting Stars — the easiest and fastest way",
      metaDescription:
        "The fastest way to get Stars: the whole process takes under 5 minutes. No card linking, no conversion wait, payment in so‘m.",
      answerTitle: "Short answer",
      Answer: EnAnswer,
      Body: EnBody,
      ctaHeading: "Start a fast order",
      ctaBody: "Send /start to @StarsPaymee_bot — done in five minutes.",
      faq: enFaq,
    },
  },
};
