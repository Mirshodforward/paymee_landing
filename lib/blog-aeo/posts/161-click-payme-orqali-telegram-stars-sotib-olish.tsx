import { Link } from "@/i18n/navigation";
import {
  CompareTable,
  InfoCard,
  InfoGrid,
  InlineCta,
  KeyFacts,
  No,
  Sources,
  Step,
  Steps,
  Yes,
} from "@/components/blog/aeo-blocks";
import { StarsPriceBoard } from "@/components/blog/stars-price-board";
import type { AeoPost } from "@/lib/blog-aeo/types";

const SLUG = "click-payme-orqali-telegram-stars-sotib-olish";

/** Rasmiy yo‘l va bot — bir xil ustunlar, uchala tilda. */
function WayCompare({ locale }: { locale: "uz" | "ru" | "en" }) {
  const copy = {
    uz: {
      headers: ["Mezon", "Rasmiy yo‘l (Telegram ichida)", "@StarsPaymee_bot"],
      rows: [
        ["Karta talabi", "Visa yoki Mastercard", "UzCard, HUMO — mahalliy karta"],
        ["Valyuta", "Dollar/evro, keyin konvertatsiya", "To‘g‘ridan-to‘g‘ri so‘m"],
        ["To‘lov xizmatlari", "Apple Pay, Google Pay", "Click, Payme, Paynet"],
        ["Konvertatsiya komissiyasi", "no", "yes"],
        ["Chet el kartasini rasmiylashtirish", "no", "yes"],
        ["Yetkazish vaqti", "Bir zumda", "Odatda bir necha daqiqa"],
      ],
    },
    ru: {
      headers: ["Критерий", "Официальный путь (внутри Telegram)", "@StarsPaymee_bot"],
      rows: [
        ["Требуемая карта", "Visa или Mastercard", "UzCard, HUMO — местная карта"],
        ["Валюта", "Доллар/евро, затем конвертация", "Напрямую сум"],
        ["Платёжные сервисы", "Apple Pay, Google Pay", "Click, Payme, Paynet"],
        ["Комиссия за конвертацию", "no", "yes"],
        ["Нужно оформлять зарубежную карту", "no", "yes"],
        ["Время зачисления", "Мгновенно", "Обычно несколько минут"],
      ],
    },
    en: {
      headers: ["Criterion", "Official route (inside Telegram)", "@StarsPaymee_bot"],
      rows: [
        ["Card required", "Visa or Mastercard", "UzCard, HUMO — a local card"],
        ["Currency", "USD/EUR, then conversion", "Directly in so‘m"],
        ["Payment services", "Apple Pay, Google Pay", "Click, Payme, Paynet"],
        ["Conversion fee", "no", "yes"],
        ["Foreign card needed", "no", "yes"],
        ["Delivery time", "Instant", "Usually a few minutes"],
      ],
    },
  }[locale];

  const marks = {
    uz: { yes: "Yo‘q, kerak emas", no: "Bor" },
    ru: { yes: "Нет, не нужно", no: "Есть" },
    en: { yes: "No, not needed", no: "Yes, there is" },
  }[locale];

  return (
    <CompareTable
      headers={copy.headers}
      rows={copy.rows.map(([label, official, bot]) => [
        <strong key="l">{label}</strong>,
        official === "no" ? <No key="o">{marks.no}</No> : official,
        bot === "yes" ? <Yes key="b">{marks.yes}</Yes> : bot,
      ])}
    />
  );
}

/* ---------------- UZ ---------------- */
function UzAnswer() {
  return (
    <p>
      Telegram Stars’ni <b>o‘zbek so‘mida</b> sotib olish uchun Visa yoki Mastercard shart emas.{" "}
      <b>@StarsPaymee_bot</b> to‘lovni <b>Click</b>, <b>HUMO</b>, <b>UzCard</b> va <b>Payme</b> orqali so‘mda
      qabul qiladi: miqdorni tanlaysiz, username kiritasiz, to‘laysiz — yulduzlar hisobingizga odatda bir necha
      daqiqada tushadi.
    </p>
  );
}

function UzBody() {
  return (
    <>
      <p>
        Telegram Stars — messenjerning ichki valyutasi. U bilan Premium obunasi, stikerlar, sovg‘alar, kanal va
        botlardagi yopiq kontent uchun to‘lanadi hamda mualliflar qo‘llab-quvvatlanadi. Talab o‘sib bormoqda va
        O‘zbekistondagi foydalanuvchilar tobora ko‘proq <b>xalqaro kartani bog‘lamasdan</b> yulduz sotib olish
        yo‘lini qidirmoqda.
      </p>

      <h2 id="nega-qiyin">Nega O‘zbekistonda to‘g‘ridan-to‘g‘ri sotib olish har doim ham oson emas</h2>
      <p>
        Rasmiy tarzda Telegram Stars uchun to‘lovni Apple Pay, Google Pay va xalqaro Visa yoki Mastercard
        kartalari orqali qabul qiladi. O‘zbekistonda esa ko‘pchilik <b>HUMO</b> va <b>UzCard</b> kartalaridan
        foydalanadi — Telegram ularni to‘g‘ridan-to‘g‘ri qabul qilmaydi.
      </p>
      <p>
        Natijada tanish vaziyat yuzaga keladi: yulduzlar hozir kerak, xalqaro karta esa yo‘q. Bitta xarid uchun
        chet el kartasini rasmiylashtirish uzoq davom etadi va har doim ham o‘zini oqlamaydi.
      </p>

      <h2 id="yechim">Visa kartasiz yechim: so‘mda to‘lash</h2>
      <p>
        Agar Visa yoki Mastercard bo‘lmasa, yulduzlarni mahalliy valyutani qabul qiladigan vositachi xizmatlar
        orqali olish mumkin. Shunday variantlardan biri —{" "}
        <a href="https://t.me/StarsPaymee_bot" target="_blank" rel="noopener noreferrer">
          @StarsPaymee_bot
        </a>
        . Unda to‘lovning bir nechta qulay usuli bir joyda:
      </p>
      <InfoGrid>
        <InfoCard emoji="🟢" title="Click">
          Odatiy ilova orqali bir bosishda to‘lov.
        </InfoCard>
        <InfoCard emoji="💳" title="HUMO kartasi">
          Mamlakatdagi eng ommaviy to‘lov tizimlaridan biri.
        </InfoCard>
        <InfoCard emoji="💳" title="UzCard kartasi">
          Yana bir keng qo‘llaniladigan mahalliy karta.
        </InfoCard>
        <InfoCard emoji="🔵" title="Payme">
          Tezkor onlayn to‘lovlar uchun mashhur xizmat.
        </InfoCard>
      </InfoGrid>
      <p>
        Bu to‘plam deyarli barcha holatlarni yopadi: qaysi kartadan yoki xizmatdan foydalanishingizdan qat’i
        nazar, mos variant topiladi. Naqd pul bilan to‘lamoqchi bo‘lganlar uchun <b>Paynet</b> ham mavjud.
      </p>

      <h2 id="narx">Narxlar</h2>
      <StarsPriceBoard locale="uz" />

      <InlineCta
        text="Yulduzlarni so‘mda oling — Click, HUMO, UzCard yoki Payme bilan."
        product={{ kind: "stars", amount: 100 }}
      />

      <h2 id="qadamlar">Qadam-baqadam: bu qanday ishlaydi</h2>
      <Steps>
        <Step title="1. Botni oching">
          Telegramda{" "}
          <a href="https://t.me/StarsPaymee_bot" target="_blank" rel="noopener noreferrer">
            @StarsPaymee_bot
          </a>{" "}
          ni ishga tushiring yoki Mini App’ni oching.
        </Step>
        <Step title="2. Yulduzlar sonini tanlang">Kerakli miqdorni belgilang — narx darhol so‘mda ko‘rinadi.</Step>
        <Step title="3. Username kiriting">Yulduzlar tushadigan hisobni ko‘rsating — o‘zingiz yoki boshqa odam.</Step>
        <Step title="4. To‘lov usulini tanlang">Click, HUMO, UzCard yoki Payme.</Step>
        <Step title="5. So‘mda to‘lang">Joriy kurs bo‘yicha, konvertatsiyasiz va yashirin komissiyalarsiz.</Step>
        <Step title="6. Yulduzlarni qabul qiling">Odatda bu deyarli bir zumda sodir bo‘ladi.</Step>
      </Steps>

      <h2 id="taqqoslash">Rasmiy yo‘l va bot — nimasi bilan farq qiladi</h2>
      <WayCompare locale="uz" />

      <h2 id="nimaga-kerak">Telegram Stars umuman nimaga kerak</h2>
      <KeyFacts label="Yulduzlar nimaga sarflanadi">
        <li>
          <b>Telegram Premium</b> — kengaytirilgan limitlar, eksklyuziv stikerlar, reklamasiz kanallar va boshqa
          imkoniyatlar.
        </li>
        <li>
          <b>Sovg‘alar</b> — do‘stlarga va kanallarda sovg‘a yuborish.
        </li>
        <li>
          <b>Pulli kontent</b> — botlar va mualliflar kanallaridagi yopiq materiallar.
        </li>
        <li>
          <b>Qo‘llab-quvvatlash</b> — sevimli blogerlar va bot ishlab chiquvchilariga minnatdorchilik.
        </li>
      </KeyFacts>

      <h2 id="xavfsizlik">Bu xavfsizmi</h2>
      <p>
        To‘lov siz allaqachon har kuni foydalanadigan mahalliy to‘lov xizmatlari orqali o‘tadi, ya’ni chet el
        kartasi ma’lumotlarini uzatish talab qilinmaydi. Telegram akkauntingizga kirish uchun parol yoki
        SMS-koddan hech qachon so‘ralmaydi — faqat username yetarli. Batafsil:{" "}
        <Link href="/blog/telegram-stars-xavfsizmi">Telegram Stars xavfsizmi</Link> va{" "}
        <Link href="/blog/ishonchli-stars-xizmatini-tanlash">ishonchli xizmatni qanday tanlash</Link>.
      </p>

      <p>
        Shuningdek o‘qing:{" "}
        <Link href="/blog/telegram-premium-3-6-12-oy-sotib-olish">Telegram Premium 3, 6 va 12 oy</Link>,{" "}
        <Link href="/blog/telegram-sovga-va-nft-sovga-sotib-olish">oddiy va NFT sovg‘alar</Link>,{" "}
        <Link href="/blog/telegram-stars-necha-som-kalkulyator">Stars necha so‘m — kalkulyator</Link>.
      </p>

      <Sources
        label="Manbalar"
        items={[
          { href: "https://telegram.org/blog/telegram-stars", label: "telegram.org", note: "Telegram Stars e’loni" },
          { href: "https://core.telegram.org/api/stars", label: "core.telegram.org", note: "Stars texnik hujjati" },
          { href: "https://click.uz/", label: "click.uz", note: "Click to‘lov tizimi" },
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
      Чтобы купить звёзды Telegram <b>за узбекский сум</b>, карта Visa или Mastercard не нужна.{" "}
      <b>@StarsPaymee_bot</b> принимает оплату в сумах через <b>Click</b>, <b>Humo</b>, <b>Uzcard</b> и{" "}
      <b>Payme</b>: выбираете количество, указываете username, оплачиваете — звёзды приходят на аккаунт обычно
      за считаные минуты.
    </p>
  );
}

function RuBody() {
  return (
    <>
      <p>
        Звёзды Telegram (Telegram Stars) — это внутренняя валюта мессенджера, которая используется для оплаты
        премиум-подписки, стикеров, подарков, доступа к контенту в каналах и ботах, а также для поддержки
        авторов. Спрос на них растёт, и всё больше пользователей из Узбекистана ищут способ{" "}
        <b>купить звёзды за узбекский сум</b>, не привязывая международную карту.
      </p>

      <h2 id="nega-qiyin">Почему напрямую купить звёзды в Узбекистане не всегда просто</h2>
      <p>
        Официально Telegram принимает оплату звёзд через Apple Pay, Google Pay и банковские карты международных
        платёжных систем — Visa или Mastercard. А такие карты есть далеко не у каждого пользователя в
        Узбекистане: часто люди пользуются локальными картами <b>Humo</b> и <b>Uzcard</b>, которые Telegram
        напрямую не принимает.
      </p>
      <p>
        Из-за этого многие сталкиваются с ситуацией: звёзды нужны прямо сейчас, а международной карты под рукой
        нет — оформлять её ради разовой покупки долго и не всегда оправдано.
      </p>

      <h2 id="yechim">Как купить звёзды за сум без визы</h2>
      <p>
        Если у вас нет карты Visa или Mastercard, звёзды можно приобрести через сервисы, которые принимают
        оплату в местной валюте. Один из таких вариантов —{" "}
        <a href="https://t.me/StarsPaymee_bot" target="_blank" rel="noopener noreferrer">
          @StarsPaymee_bot
        </a>
        . В нём доступно сразу несколько удобных способов оплаты:
      </p>
      <InfoGrid>
        <InfoCard emoji="🟢" title="Click">
          Оплата в один клик через привычное приложение.
        </InfoCard>
        <InfoCard emoji="💳" title="Карты Humo">
          Одна из самых массовых платёжных систем в стране.
        </InfoCard>
        <InfoCard emoji="💳" title="Карты Uzcard">
          Ещё одна широко используемая локальная карта.
        </InfoCard>
        <InfoCard emoji="🔵" title="Payme">
          Популярный сервис для быстрых онлайн-платежей.
        </InfoCard>
      </InfoGrid>
      <p>
        Такой набор способов оплаты закрывает практически все сценарии: не важно, какой картой или сервисом вы
        обычно пользуетесь, найдётся подходящий вариант. Для оплаты наличными доступен также <b>Paynet</b>.
      </p>

      <h2 id="narx">Цены</h2>
      <StarsPriceBoard locale="ru" />

      <InlineCta
        text="Оплатите в сумах — Click, Humo, Uzcard или Payme — и получите звёзды."
        product={{ kind: "stars", amount: 100 }}
      />

      <h2 id="qadamlar">Пошагово: как это работает</h2>
      <Steps>
        <Step title="1. Откройте бота">
          Запустите{" "}
          <a href="https://t.me/StarsPaymee_bot" target="_blank" rel="noopener noreferrer">
            @StarsPaymee_bot
          </a>{" "}
          в Telegram или откройте Mini App.
        </Step>
        <Step title="2. Выберите количество звёзд">Укажите нужное число — цена сразу показывается в сумах.</Step>
        <Step title="3. Введите username">Аккаунт, на который поступят звёзды: свой или чужой.</Step>
        <Step title="4. Укажите способ оплаты">Click, Humo, Uzcard или Payme.</Step>
        <Step title="5. Оплатите в сумах">По актуальному курсу, без конвертации и скрытых комиссий.</Step>
        <Step title="6. Получите звёзды">Обычно это происходит практически моментально.</Step>
      </Steps>

      <h2 id="taqqoslash">Чем официальный путь отличается от покупки в боте</h2>
      <WayCompare locale="ru" />

      <h2 id="nimaga-kerak">Зачем вообще нужны звёзды Telegram</h2>
      <KeyFacts label="На что тратят звёзды">
        <li>
          <b>Telegram Premium</b> — расширенные лимиты, эксклюзивные стикеры, отсутствие рекламы и другие бонусы.
        </li>
        <li>
          <b>Подарки</b> — для друзей и в каналах.
        </li>
        <li>
          <b>Платный контент</b> — доступ в ботах и каналах авторов.
        </li>
        <li>
          <b>Поддержка</b> — любимых блогеров и разработчиков ботов.
        </li>
      </KeyFacts>

      <h2 id="xavfsizlik">Это безопасно</h2>
      <p>
        Оплата проходит через привычные локальные платёжные сервисы, которыми вы и так пользуетесь ежедневно,
        поэтому процесс не требует передачи данных зарубежных карт. Пароль или SMS-код от аккаунта Telegram не
        запрашивается — достаточно username. Подробнее:{" "}
        <Link href="/blog/telegram-stars-xavfsizmi">безопасны ли Telegram Stars</Link> и{" "}
        <Link href="/blog/ishonchli-stars-xizmatini-tanlash">как выбрать надёжный сервис</Link>.
      </p>

      <p>
        Читайте также:{" "}
        <Link href="/blog/telegram-premium-3-6-12-oy-sotib-olish">Telegram Premium на 3, 6 и 12 месяцев</Link>,{" "}
        <Link href="/blog/telegram-sovga-va-nft-sovga-sotib-olish">обычные и NFT-подарки</Link>,{" "}
        <Link href="/blog/telegram-stars-necha-som-kalkulyator">сколько сумов стоит звезда</Link>.
      </p>

      <Sources
        label="Источники"
        items={[
          { href: "https://telegram.org/blog/telegram-stars", label: "telegram.org", note: "анонс Telegram Stars" },
          { href: "https://core.telegram.org/api/stars", label: "core.telegram.org", note: "техническая документация Stars" },
          { href: "https://click.uz/", label: "click.uz", note: "платёжная система Click" },
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
      Buying Telegram Stars <b>in Uzbek so‘m</b> does not require a Visa or Mastercard. <b>@StarsPaymee_bot</b>{" "}
      accepts payment in so‘m through <b>Click</b>, <b>HUMO</b>, <b>UzCard</b> and <b>Payme</b>: pick the amount,
      enter a username, pay — the Stars usually land on the account within minutes.
    </p>
  );
}

function EnBody() {
  return (
    <>
      <p>
        Telegram Stars are the messenger’s internal currency. They pay for the Premium subscription, stickers,
        gifts and paid content in channels and bots, and they let people support creators. Demand keeps growing,
        and more and more users in Uzbekistan look for a way to <b>buy Stars with Uzbek so‘m</b> without linking
        an international card.
      </p>

      <h2 id="nega-qiyin">Why buying directly in Uzbekistan is not always simple</h2>
      <p>
        Officially Telegram accepts payment for Stars through Apple Pay, Google Pay and cards of international
        payment systems — Visa or Mastercard. In Uzbekistan, however, most people use the local <b>HUMO</b> and{" "}
        <b>UzCard</b> cards, which Telegram does not accept directly.
      </p>
      <p>
        The result is a familiar situation: you need Stars right now, and there is no international card at hand.
        Issuing a foreign card for a single purchase takes time and rarely pays off.
      </p>

      <h2 id="yechim">The working route: pay in so‘m</h2>
      <p>
        Without a Visa or Mastercard, Stars can be bought through services that accept the local currency. One of
        them is{" "}
        <a href="https://t.me/StarsPaymee_bot" target="_blank" rel="noopener noreferrer">
          @StarsPaymee_bot
        </a>
        , which offers several convenient payment methods in one place:
      </p>
      <InfoGrid>
        <InfoCard emoji="🟢" title="Click">
          One-tap payment through the familiar app.
        </InfoCard>
        <InfoCard emoji="💳" title="HUMO cards">
          One of the most widespread payment systems in the country.
        </InfoCard>
        <InfoCard emoji="💳" title="UzCard cards">
          Another widely used local card.
        </InfoCard>
        <InfoCard emoji="🔵" title="Payme">
          A popular service for fast online payments.
        </InfoCard>
      </InfoGrid>
      <p>
        This set covers almost every scenario: whichever card or service you normally use, there is a matching
        option. <b>Paynet</b> is available for cash payments.
      </p>

      <h2 id="narx">Prices</h2>
      <StarsPriceBoard locale="en" />

      <InlineCta
        text="Pay in so‘m with Click, HUMO, UzCard or Payme and get your Stars."
        product={{ kind: "stars", amount: 100 }}
      />

      <h2 id="qadamlar">Step by step: how it works</h2>
      <Steps>
        <Step title="1. Open the bot">
          Start{" "}
          <a href="https://t.me/StarsPaymee_bot" target="_blank" rel="noopener noreferrer">
            @StarsPaymee_bot
          </a>{" "}
          in Telegram or open the Mini App.
        </Step>
        <Step title="2. Choose the number of Stars">Set the amount — the price is shown in so‘m right away.</Step>
        <Step title="3. Enter a username">The account the Stars should land on: yours or someone else’s.</Step>
        <Step title="4. Pick a payment method">Click, HUMO, UzCard or Payme.</Step>
        <Step title="5. Pay in so‘m">At the current rate, with no conversion and no hidden fees.</Step>
        <Step title="6. Receive the Stars">This usually happens almost instantly.</Step>
      </Steps>

      <h2 id="taqqoslash">How the official route differs from the bot</h2>
      <WayCompare locale="en" />

      <h2 id="nimaga-kerak">What Telegram Stars are used for</h2>
      <KeyFacts label="Where the Stars go">
        <li>
          <b>Telegram Premium</b> — higher limits, exclusive stickers, no ads in channels and other perks.
        </li>
        <li>
          <b>Gifts</b> — for friends and inside channels.
        </li>
        <li>
          <b>Paid content</b> — access in bots and creator channels.
        </li>
        <li>
          <b>Support</b> — for favourite bloggers and bot developers.
        </li>
      </KeyFacts>

      <h2 id="xavfsizlik">Is it safe</h2>
      <p>
        Payment goes through the local services you already use every day, so no foreign card details travel
        anywhere. Your Telegram password or SMS code is never requested — a username is enough. More on this:{" "}
        <Link href="/blog/telegram-stars-xavfsizmi">are Telegram Stars safe</Link> and{" "}
        <Link href="/blog/ishonchli-stars-xizmatini-tanlash">how to pick a trustworthy service</Link>.
      </p>

      <p>
        Read next:{" "}
        <Link href="/blog/telegram-premium-3-6-12-oy-sotib-olish">Telegram Premium for 3, 6 and 12 months</Link>,{" "}
        <Link href="/blog/telegram-sovga-va-nft-sovga-sotib-olish">regular and NFT gifts</Link>,{" "}
        <Link href="/blog/telegram-stars-necha-som-kalkulyator">how many so‘m a Star costs</Link>.
      </p>

      <Sources
        label="Sources"
        items={[
          { href: "https://telegram.org/blog/telegram-stars", label: "telegram.org", note: "Telegram Stars announcement" },
          { href: "https://core.telegram.org/api/stars", label: "core.telegram.org", note: "Stars technical documentation" },
          { href: "https://click.uz/", label: "click.uz", note: "Click payment system" },
          { href: "https://uzcard.uz/", label: "uzcard.uz", note: "UzCard national payment system" },
        ]}
      />
    </>
  );
}

const uzFaq = [
  {
    question: "Visa kartasiz Telegram Stars sotib olsa bo‘ladimi?",
    answer:
      "Ha. @StarsPaymee_bot kabi xizmatlar to‘lovni so‘mda Click, HUMO, UzCard va Payme orqali qabul qiladi.",
  },
  {
    question: "Bu xavfsizmi?",
    answer:
      "To‘lov har kuni foydalaniladigan mahalliy to‘lov xizmatlari orqali o‘tadi, chet el kartasi ma’lumotlari uzatilmaydi.",
  },
  {
    question: "Yulduzlar qancha vaqtda tushadi?",
    answer: "Odatda to‘lov tasdiqlangach deyarli bir zumda hisobga tushadi.",
  },
  { question: "1 dona Stars necha so‘m?", answer: "220 so‘m; bazaviy paket — 50 ta 11 000 so‘mga." },
  { question: "Naqd pul bilan to‘lash mumkinmi?", answer: "Ha, Paynet orqali." },
  {
    question: "Akkauntimga kirish uchun parol so‘raladimi?",
    answer: "Yo‘q. Faqat Telegram username yoki ID kifoya.",
  },
  {
    question: "Boshqa odamga yulduz sovg‘a qilsam bo‘ladimi?",
    answer: "Ha, buyurtma paytida qabul qiluvchining username’ini ko‘rsatasiz.",
  },
  { question: "Valyuta konvertatsiyasi bo‘ladimi?", answer: "Yo‘q, to‘lov to‘g‘ridan-to‘g‘ri so‘mda amalga oshadi." },
];

const ruFaq = [
  {
    question: "Можно ли купить звёзды Telegram без карты Visa?",
    answer:
      "Да, для этого можно воспользоваться сервисами вроде @StarsPaymee_bot, которые принимают оплату в сумах через Click, Humo, Uzcard и Payme.",
  },
  {
    question: "Это безопасно?",
    answer:
      "Оплата проходит через привычные локальные платёжные сервисы, поэтому процесс не требует передачи данных зарубежных карт.",
  },
  {
    question: "Сколько времени занимает зачисление звёзд?",
    answer: "Обычно звёзды поступают на аккаунт практически сразу после подтверждения оплаты.",
  },
  { question: "Сколько стоит одна звезда?", answer: "220 сум; базовый пакет — 50 штук за 11 000 сум." },
  { question: "Можно ли заплатить наличными?", answer: "Да, через Paynet." },
  { question: "Запрашивают ли пароль от аккаунта?", answer: "Нет. Достаточно username или ID в Telegram." },
  {
    question: "Можно ли подарить звёзды другому человеку?",
    answer: "Да, при оформлении заказа вы указываете username получателя.",
  },
  { question: "Будет ли конвертация валюты?", answer: "Нет, оплата проходит напрямую в сумах." },
];

const enFaq = [
  {
    question: "Can I buy Telegram Stars without a Visa card?",
    answer:
      "Yes. Services such as @StarsPaymee_bot accept payment in so‘m through Click, HUMO, UzCard and Payme.",
  },
  {
    question: "Is it safe?",
    answer:
      "Payment runs through the local services people already use daily, so no foreign card details are shared.",
  },
  {
    question: "How long does delivery take?",
    answer: "Stars normally reach the account almost immediately after the payment is confirmed.",
  },
  { question: "How much does one Star cost?", answer: "220 UZS; the base pack is 50 Stars for 11,000 UZS." },
  { question: "Can I pay in cash?", answer: "Yes, through Paynet." },
  { question: "Is my account password requested?", answer: "No. A Telegram username or ID is enough." },
  {
    question: "Can I send Stars to someone else?",
    answer: "Yes, you enter the recipient’s username while placing the order.",
  },
  { question: "Will there be a currency conversion?", answer: "No, the payment happens directly in so‘m." },
];

export const post: AeoPost = {
  slug: SLUG,
  category: "Stars",
  type: "howto",
  datePublished: "2026-08-26",
  dateModified: "2026-08-26",
  keywords: [
    "click orqali stars sotib olish",
    "payme orqali telegram stars",
    "humo bilan stars olish",
    "uzcard stars sotib olish",
    "o‘zbek so‘mida telegram stars",
    "visa kartasiz stars",
    "купить звёзды telegram за сум",
  ],
  howToSteps: [
    { name: "Botni oching", text: "Telegramda @StarsPaymee_bot ni ishga tushiring yoki Mini App’ni oching." },
    { name: "Yulduzlar sonini tanlang", text: "Kerakli miqdorni belgilang — narx so‘mda ko‘rinadi." },
    { name: "Username kiriting", text: "Yulduzlar tushadigan Telegram hisobini ko‘rsating." },
    { name: "To‘lov usulini tanlang", text: "Click, HUMO, UzCard yoki Payme." },
    { name: "So‘mda to‘lang", text: "Joriy kurs bo‘yicha, konvertatsiya va yashirin komissiyalarsiz." },
    { name: "Yulduzlarni qabul qiling", text: "Odatda to‘lovdan keyin deyarli bir zumda tushadi." },
  ],
  locales: {
    uz: {
      title: "Click, Payme, HUMO va UzCard orqali Telegram Stars sotib olish",
      excerpt:
        "O‘zbek so‘mida Telegram Stars sotib olish yo‘li: nega rasmiy usul Visa talab qiladi, qaysi mahalliy to‘lov usullari ishlaydi va xarid qanday kechadi.",
      metaTitle: "Click va Payme orqali Telegram Stars sotib olish",
      metaDescription:
        "O‘zbek so‘mida Telegram Stars sotib olish: Click, HUMO, UzCard va Payme orqali to‘lov, Visa kartasiz, narxlar va qadam-baqadam qo‘llanma.",
      answerTitle: "Qisqa javob",
      Answer: UzAnswer,
      Body: UzBody,
      ctaHeading: "Yulduzlarni so‘mda oling",
      ctaBody: "@StarsPaymee_bot — Click, HUMO, UzCard va Payme. Visa kerak emas, yetkazish bir necha daqiqada.",
      faq: uzFaq,
    },
    ru: {
      title: "Как купить звёзды Telegram за узбекский сум: подробная инструкция",
      excerpt:
        "Почему официальная покупка требует Visa, какие местные способы оплаты работают и как купить звёзды за сумы через Click, Humo, Uzcard и Payme.",
      metaTitle: "Купить звёзды Telegram за узбекский сум",
      metaDescription:
        "Как купить звёзды Telegram за узбекский сум без карты Visa: оплата через Click, Humo, Uzcard и Payme, цены и пошаговая инструкция.",
      answerTitle: "Краткий ответ",
      Answer: RuAnswer,
      Body: RuBody,
      ctaHeading: "Купите звёзды за сумы",
      ctaBody: "@StarsPaymee_bot — Click, Humo, Uzcard и Payme. Виза не нужна, зачисление за минуты.",
      faq: ruFaq,
    },
    en: {
      title: "Buying Telegram Stars with Click, Payme, HUMO and UzCard",
      excerpt:
        "How to buy Telegram Stars for Uzbek so‘m: why the official route needs a Visa card, which local payment methods work and how the purchase goes.",
      metaTitle: "Buy Telegram Stars with Click, Payme and HUMO",
      metaDescription:
        "Buy Telegram Stars for Uzbek so‘m without a Visa card: payment via Click, HUMO, UzCard and Payme, prices and a step-by-step guide.",
      answerTitle: "Short answer",
      Answer: EnAnswer,
      Body: EnBody,
      ctaHeading: "Get your Stars in so‘m",
      ctaBody: "@StarsPaymee_bot — Click, HUMO, UzCard and Payme. No Visa needed, delivery in minutes.",
      faq: enFaq,
    },
  },
};
