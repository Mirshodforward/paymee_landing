import { Link } from "@/i18n/navigation";
import {
  CompareTable,
  InfoCard,
  InfoGrid,
  InlineCta,
  KeyFacts,
  Sources,
  Step,
  Steps,
  Toc,
} from "@/components/blog/aeo-blocks";
import { PREMIUM_PLANS, formatUzs } from "@/lib/products";
import type { AeoPost } from "@/lib/blog-aeo/types";

const SLUG = "telegram-premium-narxi-va-tolov-usullari";

/** Narx jadvali — `lib/products.ts` dan hisoblanadi, oyiga hisob shu yerda. */
function PriceTable({ locale }: { locale: "uz" | "ru" | "en" }) {
  const t = {
    uz: { headers: ["Muddat", "Narx", "Oyiga"], month: (n: number) => (n === 12 ? "1 yil" : `${n} oy`) },
    ru: { headers: ["Срок", "Цена", "В месяц"], month: (n: number) => (n === 12 ? "1 год" : `${n} мес.`) },
    en: { headers: ["Term", "Price", "Per month"], month: (n: number) => (n === 12 ? "1 year" : `${n} mo`) },
  }[locale];

  return (
    <CompareTable
      headers={t.headers}
      rows={PREMIUM_PLANS.map((p) => [
        <strong key="a">{t.month(p.months)}</strong>,
        formatUzs(p.priceUzs, locale),
        formatUzs(Math.round(p.priceUzs / p.months), locale),
      ])}
    />
  );
}

/** To'lov usullari — kartasiz va rublda to'lash alohida ko'rsatiladi. */
function PayTable({ locale }: { locale: "uz" | "ru" | "en" }) {
  const copy = {
    uz: {
      headers: ["Usul", "Nima kerak", "Kimga mos"],
      rows: [
        ["UzCard, HUMO", "Oddiy o‘zbek kartasi", "Ko‘pchilikka"],
        ["Click, Payme", "Ilova yoki sayt", "Kartasi ilovaga bog‘langanlarga"],
        ["Uzum", "Uzum ilovasi", "Uzum bilan ishlaydiganlarga"],
        ["Paynet — naqd", "Bankomat yoki terminal, karta shart emas", "Kartasi umuman yo‘qlarga"],
        ["SBP — rublda", "Rossiya bank ilovasi", "Rossiyadan to‘laydiganlarga"],
      ],
    },
    ru: {
      headers: ["Способ", "Что нужно", "Кому подходит"],
      rows: [
        ["UzCard, Humo", "Обычная узбекская карта", "Большинству"],
        ["Click, Payme", "Приложение или сайт", "У кого карта привязана к приложению"],
        ["Uzum", "Приложение Uzum", "Тем, кто пользуется Uzum"],
        ["Paynet — наличными", "Банкомат или терминал, карта не нужна", "У кого карты нет вообще"],
        ["СБП — в рублях", "Банковское приложение РФ", "Тем, кто платит из России"],
      ],
    },
    en: {
      headers: ["Method", "What you need", "Who it suits"],
      rows: [
        ["UzCard, HUMO", "An ordinary Uzbek card", "Most people"],
        ["Click, Payme", "The app or website", "Anyone with a card linked to the app"],
        ["Uzum", "The Uzum app", "Uzum users"],
        ["Paynet — cash", "An ATM or terminal, no card needed", "Anyone without a card at all"],
        ["SBP — in roubles", "A Russian banking app", "Anyone paying from Russia"],
      ],
    },
  }[locale];

  return (
    <CompareTable
      headers={copy.headers}
      rows={copy.rows.map(([a, b, c]) => [<strong key="a">{a}</strong>, b, c])}
    />
  );
}

/* ---------------- UZ ---------------- */
function UzAnswer() {
  return (
    <p>
      <b>@StarsPaymee_bot</b> da Telegram Premium: <b>1 oy — 45 000</b>, <b>3 oy — 160 000</b>,{" "}
      <b>6 oy — 215 000</b>, <b>12 oy — 388 000 so‘m</b>. To‘rtala muddat ham <b>username orqali</b> beriladi —
      parol so‘ralmaydi. To‘lov: UzCard, HUMO, Click, Payme, Uzum, <b>Paynet orqali naqd</b> (karta umuman kerak
      emas) yoki <b>SBP orqali rublda</b>. Visa/Mastercard talab qilinmaydi.
    </p>
  );
}

function UzBody() {
  return (
    <>
      <Toc
        label="Mundarija"
        items={[
          { href: "#narx", label: "Narxlar va oyiga hisob" },
          { href: "#tolov", label: "To‘lov usullari" },
          { href: "#naqd", label: "Kartasiz — naqd to‘lash" },
          { href: "#rubl", label: "Rublda to‘lash" },
          { href: "#qadamlar", label: "Qadam-baqadam xarid" },
          { href: "#nega-username", label: "Nega username orqali" },
        ]}
      />

      <h2 id="narx">Narxlar va oyiga hisob</h2>
      <PriceTable locale="uz" />
      <p>
        Oyiga hisoblaganda farq yaqqol ko‘rinadi: 1 oylikni har oy olib turgandan ko‘ra, <b>6 yoki 12 oylik</b>{" "}
        paketni olish sezilarli tejamkor. 12 oylikda oylik narx 1 oylikka nisbatan taxminan <b>uch baravar</b>{" "}
        past chiqadi.
      </p>
      <KeyFacts label="Muddat tanlashda">
        <li>
          <b>1 oy</b> — sinab ko‘rish yoki bir martalik ehtiyoj uchun.
        </li>
        <li>
          <b>3 oy</b> — qisqa muddatli, majburiyatsiz variant.
        </li>
        <li>
          <b>6 oy</b> — narx va muddat muvozanati.
        </li>
        <li>
          <b>12 oy</b> — doimiy foydalanadiganlar uchun eng arzoni.
        </li>
      </KeyFacts>

      <InlineCta text="Muddatni tanlang va so‘mda to‘lang." product={{ kind: "premium", months: 12 }} />

      <h2 id="tolov">To‘lov usullari — visa ham, karta ham shart emas</h2>
      <p>
        Rasmiy yo‘ldan asosiy farq shu: xalqaro Visa/Mastercard kerak emas va akkauntingizga kirish talab
        qilinmaydi.
      </p>
      <PayTable locale="uz" />

      <h2 id="naqd">Kartasiz to‘lash — Paynet orqali naqd</h2>
      <p>
        Bu ko‘pchilik e’tibordan chetda qoldiradigan imkoniyat: <b>Paynet</b> orqali to‘lovni bankomat yoki
        terminalda <b>naqd pul bilan</b> amalga oshirish mumkin — bank kartasi umuman kerak emas.
      </p>
      <InfoGrid>
        <InfoCard emoji="🏧" title="Bankomat yoki terminal">
          Paynet qo‘llab-quvvatlaydigan istalgan nuqtada.
        </InfoCard>
        <InfoCard emoji="🔢" title="Buyurtma raqami bo‘yicha">
          Botdan olingan raqamni kiritasiz, xolos.
        </InfoCard>
        <InfoCard emoji="💵" title="Naqd pul">
          Karta, ilova va bank hisobi talab qilinmaydi.
        </InfoCard>
        <InfoCard emoji="👤" title="Kimga mos">
          Kartasi yo‘qlarga, o‘quvchilarga, naqd bilan ishlashni afzal ko‘radiganlarga.
        </InfoCard>
      </InfoGrid>

      <h2 id="rubl">Rublda to‘lash — SBP</h2>
      <p>
        Rossiyadan to‘layotgan bo‘lsangiz, <b>SBP</b> (tezkor to‘lovlar tizimi) orqali telefon raqami yoki
        QR-kod bilan rublda to‘lash mumkin. Karta rekvizitlarini kiritish shart emas va o‘zbek to‘lov
        tizimlariga kirish talab qilinmaydi.
      </p>

      <h2 id="qadamlar">Qadam-baqadam: Premium sotib olish</h2>
      <Steps>
        <Step title="1. Botni oching">
          Telegramda{" "}
          <a href="https://t.me/StarsPaymee_bot" target="_blank" rel="noopener noreferrer">
            @StarsPaymee_bot
          </a>{" "}
          ni ishga tushiring.
        </Step>
        <Step title="2. Muddatni tanlang">1, 3, 6 yoki 12 oy — narx darhol so‘mda ko‘rinadi.</Step>
        <Step title="3. @username kiriting">
          Login va parol so‘ralmaydi. O‘zingizga yoki sovg‘a qilayotgan odamga.
        </Step>
        <Step title="4. To‘lov usulini tanlang">
          UzCard, HUMO, Click, Payme, Uzum, Paynet (naqd) yoki SBP (rubl).
        </Step>
        <Step title="5. Faollashuvni kuting">
          Premium odatda ~10 soniyada avtomatik yoqiladi; profilda rozetka paydo bo‘ladi.
        </Step>
      </Steps>

      <h2 id="nega-username">Nega username orqali, parolsiz</h2>
      <p>
        Barcha muddatlar Telegramning <b>rasmiy sovg‘a mexanizmi</b> orqali faollashtiriladi — bu do‘stlar
        bir-biriga Premium sovg‘a qiladigan aynan o‘sha yo‘l. Shuning uchun:
      </p>
      <KeyFacts label="Nima demak">
        <li>
          <b>Parol so‘ralmaydi</b> — xizmat akkauntingizga kirmaydi.
        </li>
        <li>
          <b>SMS-kod va 2FA ham kerak emas</b> — faqat ochiq @username.
        </li>
        <li>
          <b>Xavf kamayadi</b> — login/parolni uchinchi shaxsga berish bilan bog‘liq muammo yo‘q.
        </li>
        <li>
          Nostandart holatlar uchun login orqali alohida xizmat ham bor — shartlari qo‘llab-quvvatlash orqali.
        </li>
      </KeyFacts>
      <p>
        Batafsil: <Link href="/blog/telegram-premium-eng-oson-usul">xarid qo‘llanmasi</Link>,{" "}
        <Link href="/blog/telegram-premium-sovga-username-orqali">sovg‘a qilish</Link>,{" "}
        <Link href="/blog/telegram-premium-kerak">Premium menga kerakmi</Link>.
      </p>

      <Sources
        label="Manbalar"
        items={[
          { href: "https://telegram.org/faq_premium", label: "telegram.org/faq_premium", note: "Premium rasmiy FAQ" },
          { href: "https://t.me/StarsPaymee_bot", label: "@StarsPaymee_bot", note: "joriy narxlar va buyurtma" },
        ]}
      />
    </>
  );
}

/* ---------------- RU ---------------- */
function RuAnswer() {
  return (
    <p>
      В <b>@StarsPaymee_bot</b> Telegram Premium стоит: <b>1 месяц — 45 000</b>, <b>3 месяца — 160 000</b>,{" "}
      <b>6 месяцев — 215 000</b>, <b>12 месяцев — 388 000 сум</b>. Все четыре срока оформляются{" "}
      <b>по username</b> — пароль не запрашивается. Оплата: UzCard, Humo, Click, Payme, Uzum,{" "}
      <b>наличными через Paynet</b> (карта вообще не нужна) или <b>рублями по СБП</b>. Visa/Mastercard не
      требуется.
    </p>
  );
}

function RuBody() {
  return (
    <>
      <Toc
        label="Содержание"
        items={[
          { href: "#narx", label: "Цены и стоимость месяца" },
          { href: "#tolov", label: "Способы оплаты" },
          { href: "#naqd", label: "Без карты — наличными" },
          { href: "#rubl", label: "Оплата рублями" },
          { href: "#qadamlar", label: "Пошаговая покупка" },
          { href: "#nega-username", label: "Почему по username" },
        ]}
      />

      <h2 id="narx">Цены и стоимость месяца</h2>
      <PriceTable locale="ru" />
      <p>
        В пересчёте на месяц разница видна сразу: вместо того чтобы каждый месяц брать месячный тариф, выгоднее
        взять <b>6 или 12 месяцев</b>. У годового стоимость месяца примерно <b>в три раза</b> ниже месячного.
      </p>
      <KeyFacts label="Как выбрать срок">
        <li>
          <b>1 месяц</b> — попробовать или закрыть разовую задачу.
        </li>
        <li>
          <b>3 месяца</b> — короткий вариант без обязательств.
        </li>
        <li>
          <b>6 месяцев</b> — баланс цены и срока.
        </li>
        <li>
          <b>12 месяцев</b> — самый дешёвый для тех, кто пользуется постоянно.
        </li>
      </KeyFacts>

      <InlineCta text="Выберите срок и оплатите в сумах." product={{ kind: "premium", months: 12 }} />

      <h2 id="tolov">Способы оплаты — ни визы, ни даже карты</h2>
      <p>
        Главное отличие от официального пути: международная Visa/Mastercard не нужна, и вход в ваш аккаунт не
        требуется.
      </p>
      <PayTable locale="ru" />

      <h2 id="naqd">Оплата без карты — наличными через Paynet</h2>
      <p>
        Эту возможность часто упускают из виду: через <b>Paynet</b> оплатить можно <b>наличными</b> в банкомате
        или терминале — банковская карта не нужна вообще.
      </p>
      <InfoGrid>
        <InfoCard emoji="🏧" title="Банкомат или терминал">
          В любой точке, где поддерживается Paynet.
        </InfoCard>
        <InfoCard emoji="🔢" title="По номеру заказа">
          Вводите номер, полученный в боте — и всё.
        </InfoCard>
        <InfoCard emoji="💵" title="Наличные">
          Карта, приложение и банковский счёт не нужны.
        </InfoCard>
        <InfoCard emoji="👤" title="Кому подходит">
          Тем, у кого нет карты: школьникам, студентам, тем, кто привык к наличным.
        </InfoCard>
      </InfoGrid>

      <h2 id="rubl">Оплата рублями — СБП</h2>
      <p>
        Если вы платите из России, доступна <b>СБП</b> — перевод по номеру телефона или QR-коду в рублях.
        Реквизиты карты вводить не нужно, доступ к узбекским платёжным системам тоже не требуется.
      </p>

      <h2 id="qadamlar">Пошагово: покупка Premium</h2>
      <Steps>
        <Step title="1. Откройте бота">
          Запустите{" "}
          <a href="https://t.me/StarsPaymee_bot" target="_blank" rel="noopener noreferrer">
            @StarsPaymee_bot
          </a>{" "}
          в Telegram.
        </Step>
        <Step title="2. Выберите срок">1, 3, 6 или 12 месяцев — цена сразу в сумах.</Step>
        <Step title="3. Введите @username">
          Логин и пароль не запрашиваются. Себе или тому, кому дарите.
        </Step>
        <Step title="4. Выберите способ оплаты">
          UzCard, Humo, Click, Payme, Uzum, Paynet (наличными) или СБП (рубли).
        </Step>
        <Step title="5. Дождитесь активации">
          Premium включается автоматически примерно за 10 секунд; в профиле появляется значок.
        </Step>
      </Steps>

      <h2 id="nega-username">Почему по username и без пароля</h2>
      <p>
        Все сроки активируются через <b>официальный механизм подарка Premium</b> в Telegram — тот самый, которым
        друзья дарят подписку друг другу. Поэтому:
      </p>
      <KeyFacts label="Что это значит">
        <li>
          <b>Пароль не запрашивается</b> — сервис не заходит в ваш аккаунт.
        </li>
        <li>
          <b>SMS-код и 2FA тоже не нужны</b> — только открытый @username.
        </li>
        <li>
          <b>Риск ниже</b> — нет проблем, связанных с передачей логина и пароля третьим лицам.
        </li>
        <li>
          Для нестандартных случаев есть отдельная услуга со входом — условия уточняются в поддержке.
        </li>
      </KeyFacts>
      <p>
        Подробнее: <Link href="/blog/telegram-premium-eng-oson-usul">руководство по покупке</Link>,{" "}
        <Link href="/blog/telegram-premium-sovga-username-orqali">как подарить</Link>,{" "}
        <Link href="/blog/telegram-premium-kerak">нужен ли мне Premium</Link>.
      </p>

      <Sources
        label="Источники"
        items={[
          { href: "https://telegram.org/faq_premium", label: "telegram.org/faq_premium", note: "официальный FAQ Premium" },
          { href: "https://t.me/StarsPaymee_bot", label: "@StarsPaymee_bot", note: "актуальные цены и заказ" },
        ]}
      />
    </>
  );
}

/* ---------------- EN ---------------- */
function EnAnswer() {
  return (
    <p>
      In <b>@StarsPaymee_bot</b> Telegram Premium costs: <b>1 month — 45,000</b>, <b>3 months — 160,000</b>,{" "}
      <b>6 months — 215,000</b>, <b>12 months — 388,000 UZS</b>. All four terms are arranged{" "}
      <b>by username</b> — no password is requested. Payment: UzCard, HUMO, Click, Payme, Uzum,{" "}
      <b>cash via Paynet</b> (no card at all) or <b>roubles via SBP</b>. No Visa/Mastercard needed.
    </p>
  );
}

function EnBody() {
  return (
    <>
      <Toc
        label="Contents"
        items={[
          { href: "#narx", label: "Prices and cost per month" },
          { href: "#tolov", label: "Payment methods" },
          { href: "#naqd", label: "No card — paying cash" },
          { href: "#rubl", label: "Paying in roubles" },
          { href: "#qadamlar", label: "Buying step by step" },
          { href: "#nega-username", label: "Why by username" },
        ]}
      />

      <h2 id="narx">Prices and cost per month</h2>
      <PriceTable locale="en" />
      <p>
        Per month the gap is obvious: rather than buying the monthly plan again and again, <b>6 or 12 months</b>{" "}
        works out far cheaper. On the yearly plan the monthly cost is roughly <b>three times</b> lower than the
        monthly one.
      </p>
      <KeyFacts label="Choosing a term">
        <li>
          <b>1 month</b> — to try it, or for a one-off need.
        </li>
        <li>
          <b>3 months</b> — a short option with no commitment.
        </li>
        <li>
          <b>6 months</b> — the balance of price and term.
        </li>
        <li>
          <b>12 months</b> — the cheapest for permanent use.
        </li>
      </KeyFacts>

      <InlineCta text="Choose a term and pay in so‘m." product={{ kind: "premium", months: 12 }} />

      <h2 id="tolov">Payment methods — no Visa, not even a card</h2>
      <p>
        The key difference from the official route: no international Visa/Mastercard, and no access to your
        account is required.
      </p>
      <PayTable locale="en" />

      <h2 id="naqd">Paying without a card — cash through Paynet</h2>
      <p>
        This option is often overlooked: through <b>Paynet</b> the payment can be made <b>in cash</b> at an ATM
        or terminal — no bank card at all.
      </p>
      <InfoGrid>
        <InfoCard emoji="🏧" title="An ATM or terminal">
          Anywhere Paynet is supported.
        </InfoCard>
        <InfoCard emoji="🔢" title="By order number">
          You enter the number the bot gives you — that is it.
        </InfoCard>
        <InfoCard emoji="💵" title="Cash">
          No card, no app and no bank account needed.
        </InfoCard>
        <InfoCard emoji="👤" title="Who it suits">
          Anyone without a card — students, and people who prefer cash.
        </InfoCard>
      </InfoGrid>

      <h2 id="rubl">Paying in roubles — SBP</h2>
      <p>
        If you are paying from Russia, <b>SBP</b> is available — a transfer by phone number or QR code in
        roubles. No card details to enter, and no access to Uzbek payment systems required.
      </p>

      <h2 id="qadamlar">Step by step: buying Premium</h2>
      <Steps>
        <Step title="1. Open the bot">
          Start{" "}
          <a href="https://t.me/StarsPaymee_bot" target="_blank" rel="noopener noreferrer">
            @StarsPaymee_bot
          </a>{" "}
          in Telegram.
        </Step>
        <Step title="2. Choose a term">1, 3, 6 or 12 months — the price shows in so‘m right away.</Step>
        <Step title="3. Enter an @username">
          No login or password is asked for. For yourself or whoever you are gifting.
        </Step>
        <Step title="4. Pick a payment method">
          UzCard, HUMO, Click, Payme, Uzum, Paynet (cash) or SBP (roubles).
        </Step>
        <Step title="5. Wait for activation">
          Premium switches on automatically in about 10 seconds; the badge appears on the profile.
        </Step>
      </Steps>

      <h2 id="nega-username">Why by username, with no password</h2>
      <p>
        Every term is activated through Telegram’s <b>official gift mechanism</b> — the very same way friends
        gift each other a subscription. That means:
      </p>
      <KeyFacts label="What it means">
        <li>
          <b>No password is requested</b> — the service never signs into your account.
        </li>
        <li>
          <b>No SMS code or 2FA either</b> — only a public @username.
        </li>
        <li>
          <b>Lower risk</b> — none of the problems that come with handing credentials to a third party.
        </li>
        <li>
          A separate sign-in service exists for non-standard cases — terms via support.
        </li>
      </KeyFacts>
      <p>
        More: <Link href="/blog/telegram-premium-eng-oson-usul">the buying guide</Link>,{" "}
        <Link href="/blog/telegram-premium-sovga-username-orqali">gifting Premium</Link>,{" "}
        <Link href="/blog/telegram-premium-kerak">do I need Premium</Link>.
      </p>

      <Sources
        label="Sources"
        items={[
          { href: "https://telegram.org/faq_premium", label: "telegram.org/faq_premium", note: "official Premium FAQ" },
          { href: "https://t.me/StarsPaymee_bot", label: "@StarsPaymee_bot", note: "current prices and ordering" },
        ]}
      />
    </>
  );
}

const uzFaq = [
  { question: "Telegram Premium 1 oyga qancha turadi?", answer: "45 000 so‘m." },
  { question: "12 oylik qancha?", answer: "388 000 so‘m — oyiga taxminan 32 300 so‘m, eng tejamkor tarif." },
  {
    question: "Kartasiz to‘lash mumkinmi?",
    answer: "Ha, Paynet orqali — bankomat yoki terminalda naqd pul bilan, karta umuman kerak emas.",
  },
  { question: "Rublda to‘lasa bo‘ladimi?", answer: "Ha, SBP orqali — telefon raqami yoki QR-kod bilan." },
  { question: "Visa yoki Mastercard kerakmi?", answer: "Yo‘q. UzCard, HUMO, Click, Payme, Uzum, Paynet va SBP yetarli." },
  {
    question: "Parol so‘raladimi?",
    answer: "Yo‘q. Faollashtirish Telegramning rasmiy sovg‘a mexanizmi orqali, faqat @username bilan bo‘ladi.",
  },
  { question: "Qancha vaqtda faollashadi?", answer: "Odatda to‘lov tasdiqlangach ~10 soniyada." },
  {
    question: "Do‘stimga sovg‘a qila olamanmi?",
    answer: "Ha, buyurtmada o‘zingizniki o‘rniga uning @username’ini kiriting.",
  },
  {
    question: "Qabul qiluvchida allaqachon Premium bo‘lsa-chi?",
    answer: "Muddat qo‘shiladi — obuna to‘langan davrga uzayadi.",
  },
  {
    question: "Avtoto‘lov ulanadimi?",
    answer:
      "Yo‘q. Botdagi xarid bir martalik; App Store yoki Google Play obunasidan farqli, o‘z-o‘zidan yangilanmaydi.",
  },
  {
    question: "Premium faollashmasa nima qilaman?",
    answer: "@username to‘g‘riligini tekshiring, bir necha daqiqa kuting, keyin buyurtma ID bilan @StarsPaymeeSupport ga yozing.",
  },
  { question: "Bot kechasi ishlaydimi?", answer: "Ha, kunu tun, dam olish kunlarisiz." },
];

const ruFaq = [
  { question: "Сколько стоит Telegram Premium на 1 месяц?", answer: "45 000 сум." },
  { question: "Сколько стоит на 12 месяцев?", answer: "388 000 сум — около 32 300 сум в месяц, самый выгодный тариф." },
  {
    question: "Можно ли оплатить без карты вообще?",
    answer: "Да, через Paynet — наличными в банкомате или терминале, карта не нужна.",
  },
  { question: "Можно ли оплатить рублями?", answer: "Да, через СБП — по номеру телефона или QR-коду." },
  { question: "Нужна ли Visa или Mastercard?", answer: "Нет. Достаточно UzCard, Humo, Click, Payme, Uzum, Paynet или СБП." },
  {
    question: "Запрашивают ли пароль?",
    answer: "Нет. Активация идёт через официальный механизм подарка Premium, только по @username.",
  },
  { question: "Сколько занимает активация?", answer: "Обычно около 10 секунд после подтверждения оплаты." },
  {
    question: "Можно ли подарить другу?",
    answer: "Да, укажите при заказе его @username вместо своего.",
  },
  {
    question: "Что если у получателя уже есть Premium?",
    answer: "Срок суммируется — подписка продлевается на оплаченный период.",
  },
  {
    question: "Подключается ли автосписание?",
    answer:
      "Нет. Покупка через бота разовая; в отличие от подписки в App Store или Google Play, она не продлевается сама.",
  },
  {
    question: "Что делать, если Premium не активировался?",
    answer: "Проверьте @username, подождите пару минут, затем напишите в @StarsPaymeeSupport с ID заказа.",
  },
  { question: "Работает ли бот ночью?", answer: "Да, круглосуточно и без выходных." },
];

const enFaq = [
  { question: "How much is Telegram Premium for 1 month?", answer: "45,000 UZS." },
  { question: "How much for 12 months?", answer: "388,000 UZS — about 32,300 UZS a month, the best value." },
  {
    question: "Can I pay without a card at all?",
    answer: "Yes, through Paynet — in cash at an ATM or terminal, with no card needed.",
  },
  { question: "Can I pay in roubles?", answer: "Yes, via SBP — by phone number or QR code." },
  { question: "Do I need a Visa or Mastercard?", answer: "No. UzCard, HUMO, Click, Payme, Uzum, Paynet or SBP is enough." },
  {
    question: "Is a password requested?",
    answer: "No. Activation runs through Telegram's official gift mechanism, using only an @username.",
  },
  { question: "How long does activation take?", answer: "Usually about 10 seconds after the payment is confirmed." },
  { question: "Can I gift it to a friend?", answer: "Yes — enter their @username instead of yours when ordering." },
  {
    question: "What if the recipient already has Premium?",
    answer: "The terms add up — the subscription is extended by the period you paid for.",
  },
  {
    question: "Is auto-renewal attached?",
    answer:
      "No. Buying through the bot is a one-off; unlike an App Store or Google Play subscription it does not renew itself.",
  },
  {
    question: "What if Premium does not activate?",
    answer: "Check the @username, wait a couple of minutes, then message @StarsPaymeeSupport with the order ID.",
  },
  { question: "Does the bot work at night?", answer: "Yes, around the clock, every day." },
];

export const post: AeoPost = {
  slug: SLUG,
  category: "Premium",
  type: "info",
  datePublished: "2026-09-16",
  dateModified: "2026-09-16",
  keywords: [
    "telegram premium narxi",
    "telegram premium sotib olish",
    "telegram premium naqd tolov",
    "telegram premium paynet",
    "telegram premium rublda",
    "купить telegram premium узбекистан",
    "telegram premium цена сум",
  ],
  howToSteps: [
    { name: "Botni oching", text: "Telegramda @StarsPaymee_bot ni ishga tushiring." },
    { name: "Muddatni tanlang", text: "1, 3, 6 yoki 12 oy — narx so‘mda ko‘rinadi." },
    { name: "@username kiriting", text: "Login va parol so‘ralmaydi." },
    { name: "To‘lov usulini tanlang", text: "UzCard, HUMO, Click, Payme, Uzum, Paynet (naqd) yoki SBP (rubl)." },
    { name: "Faollashuvni kuting", text: "Premium odatda ~10 soniyada avtomatik yoqiladi." },
  ],
  locales: {
    uz: {
      title: "Telegram Premium narxi va to‘lov usullari: naqd, karta yoki rubl",
      excerpt:
        "1, 3, 6 va 12 oylik narxlar hamda oyiga hisob. Paynet orqali kartasiz naqd to‘lash, SBP orqali rublda to‘lash va nega parol so‘ralmaydi.",
      metaTitle: "Telegram Premium narxi — naqd, karta yoki rublda",
      metaDescription:
        "Telegram Premium: 1 oy 45 000, 12 oy 388 000 so‘m. Paynet orqali kartasiz naqd, SBP orqali rublda to‘lov. Visa kerak emas, parol so‘ralmaydi.",
      answerTitle: "Qisqa javob",
      Answer: UzAnswer,
      Body: UzBody,
      ctaHeading: "Premium’ni hoziroq oling",
      ctaBody: "@StarsPaymee_bot — 1 oydan 12 oygacha, naqd, karta yoki rublda to‘lov.",
      faq: uzFaq,
    },
    ru: {
      title: "Telegram Premium в Узбекистане: цены и оплата — наличными, картой или рублями",
      excerpt:
        "Цены на 1, 3, 6 и 12 месяцев со стоимостью месяца. Оплата наличными через Paynet без карты, рублями по СБП и почему не нужен пароль.",
      metaTitle: "Telegram Premium — цены и оплата в Узбекистане",
      metaDescription:
        "Telegram Premium: 1 месяц 45 000, 12 месяцев 388 000 сум. Наличными через Paynet без карты, рублями по СБП. Виза не нужна, пароль не запрашивается.",
      answerTitle: "Краткий ответ",
      Answer: RuAnswer,
      Body: RuBody,
      ctaHeading: "Оформите Premium сейчас",
      ctaBody: "@StarsPaymee_bot — от 1 до 12 месяцев, оплата наличными, картой или рублями.",
      faq: ruFaq,
    },
    en: {
      title: "Telegram Premium in Uzbekistan: prices and payment — cash, card or roubles",
      excerpt:
        "Prices for 1, 3, 6 and 12 months with the cost per month. Paying cash through Paynet without a card, roubles via SBP, and why no password is asked for.",
      metaTitle: "Telegram Premium — prices and payment in Uzbekistan",
      metaDescription:
        "Telegram Premium: 1 month 45,000, 12 months 388,000 UZS. Cash via Paynet without a card, roubles via SBP. No Visa, no password requested.",
      answerTitle: "Short answer",
      Answer: EnAnswer,
      Body: EnBody,
      ctaHeading: "Get Premium now",
      ctaBody: "@StarsPaymee_bot — from 1 to 12 months, paid by cash, card or roubles.",
      faq: enFaq,
    },
  },
};
