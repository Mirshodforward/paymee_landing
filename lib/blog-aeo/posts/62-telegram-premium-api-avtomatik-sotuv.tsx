import { Link } from "@/i18n/navigation";
import { InlineCta, Sources, KeyFacts, Steps, Step, CompareTable, Yes, No } from "@/components/blog/aeo-blocks";
import type { AeoPost } from "@/lib/blog-aeo/types";

const SLUG = "telegram-premium-api-avtomatik-sotuv";

/* ---------------- UZ ---------------- */
function UzAnswer() {
  return (
    <p>
      Telegram Premium API orqali siz Premium obunani (3, 6, 12 oy yoki login orqali) o‘z bot va saytingizda
      avtomatik sotasiz. Mijoz to‘laydi — tizim API’ga buyurtma yuboradi — Premium @username’ga o‘rtacha 10 soniyada,
      qo‘lda aralashuvsiz faollashadi. StarsPaymee Business kaliti bilan reseller sifatida o‘z narxingizni belgilaysiz.
    </p>
  );
}

function UzBody() {
  return (
    <>
      <h2 id="nima">Premium API nima beradi?</h2>
      <p>
        <Link href="/premium">Telegram Premium</Link>ni qo‘lda sotish — har bir buyurtmani kutish, tekshirish va
        yetkazishni anglatadi. API buni to‘liq avtomatlashtiradi: buyurtma qabul qilingandan faollashtirishgacha
        bo‘lgan zanjir soniyalarda, odam aralashuvisiz bajariladi. Bu ayniqsa reseller va do‘konlar uchun
        vaqtni tejaydi va xatoni kamaytiradi.
      </p>

      <KeyFacts label="Premium API imkoniyatlari">
        <li>Username orqali faollashtirish — 3, 6, 12 oylik paketlar.</li>
        <li>Login orqali rasmiy oqim — 1 oy va 1 yil variantlari.</li>
        <li>Avtomatik yetkazish — o‘rtacha 10 soniya, parolsiz oqimda.</li>
        <li>Webhook — faollashtirilgach status serveringizga keladi.</li>
        <li>Reseller narxi — o‘z ustamangizni o‘zingiz belgilaysiz.</li>
      </KeyFacts>

      <h2 id="oqim">Avtomatik sotuvni qanday yo‘lga qo‘yiladi?</h2>
      <Steps>
        <Step title="1. Business kalitini oling">
          <Link href="/business">StarsPaymee Business</Link>dan API kalit va Premium katalogiga kirish oling.
        </Step>
        <Step title="2. Paketlarni ko‘rsating">
          Bot yoki saytingizda 3/6/12 oy va login variantlarini o‘z narxingiz bilan chiqaring.
        </Step>
        <Step title="3. To‘lovni qabul qiling">
          Mijozdan Click, Payme yoki karta orqali so‘mda (yoki SBP orqali rublda) to‘lov oling.
        </Step>
        <Step title="4. API’ga buyurtma yuboring">
          <code>POST /orders</code> bilan Premium turi, muddati va <code>@username</code>ni jo‘nating.
        </Step>
        <Step title="5. Webhook’ni qayta ishlang">
          Faollashtirilgach kelgan <code>delivered</code> xabarini mijozga ko‘rsating.
        </Step>
      </Steps>

      <InlineCta text="Premium’ni avtomatik sotmoqchimisiz? Business bilan bog‘laning." />

      <h2 id="ikki-oqim">Username va login oqimi farqi</h2>
      <CompareTable
        headers={["Xususiyat", "Username orqali", "Login orqali"]}
        rows={[
          ["Muddatlar", "3, 6, 12 oy", "1 oy, 1 yil"],
          ["Kerakli ma’lumot", <>@username</>, <>rasmiy kirish</>],
          ["Parol/SMS", <No>so‘ralmaydi</No>, <Yes>rasmiy oqim</Yes>],
          ["Tezlik", <Yes>~10 soniya</Yes>, <>biroz uzunroq</>],
          ["Ko‘p sotuvga qulaylik", <Yes>eng qulay</Yes>, <>maxsus holatlar</>],
        ]}
      />

      <h2 id="reseller">Reseller uchun nega foydali?</h2>
      <p>
        API bilan siz Premium’ni ulgurji narxda olib, o‘z ustamangiz bilan sotasiz. Yetkazib berish, status va
        qaytarish API tomonida boshqarilgani uchun operatsion yuk minimal. Batafsil:{" "}
        <Link href="/blog/telegram-stars-api-nima-ulanish">Stars API</Link> va{" "}
        <Link href="/blog/eng-arzon-telegram-api-xizmati-ozbekiston">eng arzon API xizmati</Link>.
      </p>

      <Sources
        label="Manbalar"
        items={[
          { href: "https://telegram.org/faq_premium", label: "telegram.org/faq_premium", note: "Premium FAQ" },
          { href: "https://core.telegram.org/api/premium", label: "core.telegram.org/api/premium", note: "Premium texnik hujjati" },
        ]}
      />
    </>
  );
}

/* ---------------- RU ---------------- */
function RuAnswer() {
  return (
    <p>
      Через Telegram Premium API вы автоматически продаёте подписку Premium (3, 6, 12 месяцев или через логин) в
      своём боте и на сайте. Клиент платит — система шлёт заказ в API — Premium активируется на @username в среднем
      за 10 секунд без ручного вмешательства. С ключом StarsPaymee Business вы как реселлер задаёте свою цену.
    </p>
  );
}

function RuBody() {
  return (
    <>
      <h2 id="nima">Что даёт Premium API?</h2>
      <p>
        Продавать <Link href="/premium">Telegram Premium</Link> вручную — значит ждать, проверять и доставлять каждый
        заказ. API полностью автоматизирует это: цепочка от приёма заказа до активации выполняется за секунды, без
        участия человека. Это экономит время и снижает ошибки, особенно для реселлеров и магазинов.
      </p>

      <KeyFacts label="Возможности Premium API">
        <li>Активация по username — пакеты 3, 6, 12 месяцев.</li>
        <li>Официальный поток через логин — варианты 1 месяц и 1 год.</li>
        <li>Автодоставка — в среднем 10 секунд, без пароля.</li>
        <li>Webhook — после активации статус приходит на ваш сервер.</li>
        <li>Цена реселлера — вы сами задаёте наценку.</li>
      </KeyFacts>

      <h2 id="oqim">Как настроить автопродажу?</h2>
      <Steps>
        <Step title="1. Получите ключ Business">
          Из <Link href="/business">StarsPaymee Business</Link> получите API‑ключ и доступ к каталогу Premium.
        </Step>
        <Step title="2. Покажите пакеты">
          Выведите в боте или на сайте варианты 3/6/12 мес и логин со своей ценой.
        </Step>
        <Step title="3. Примите оплату">
          Получите оплату от клиента через Click, Payme или карту в сумах (или через SBP в рублях).
        </Step>
        <Step title="4. Отправьте заказ в API">
          Через <code>POST /orders</code> передайте тип Premium, срок и <code>@username</code>.
        </Step>
        <Step title="5. Обработайте webhook">
          Покажите клиенту статус <code>delivered</code>, пришедший после активации.
        </Step>
      </Steps>

      <InlineCta text="Хотите продавать Premium автоматически? Свяжитесь с Business." />

      <h2 id="ikki-oqim">Разница потоков username и логин</h2>
      <CompareTable
        headers={["Свойство", "По username", "Через логин"]}
        rows={[
          ["Сроки", "3, 6, 12 мес", "1 мес, 1 год"],
          ["Что нужно", <>@username</>, <>официальный вход</>],
          ["Пароль/SMS", <No>не требуется</No>, <Yes>официальный поток</Yes>],
          ["Скорость", <Yes>~10 секунд</Yes>, <>чуть дольше</>],
          ["Удобство для потока продаж", <Yes>самый удобный</Yes>, <>особые случаи</>],
        ]}
      />

      <h2 id="reseller">Чем полезно реселлеру?</h2>
      <p>
        С API вы берёте Premium по оптовой цене и продаёте со своей наценкой. Доставка, статус и возврат управляются
        на стороне API, поэтому операционная нагрузка минимальна. Подробнее:{" "}
        <Link href="/blog/telegram-stars-api-nima-ulanish">Stars API</Link> и{" "}
        <Link href="/blog/eng-arzon-telegram-api-xizmati-ozbekiston">самый дешёвый API</Link>.
      </p>

      <Sources
        label="Источники"
        items={[
          { href: "https://telegram.org/faq_premium", label: "telegram.org/faq_premium", note: "FAQ Premium" },
          { href: "https://core.telegram.org/api/premium", label: "core.telegram.org/api/premium", note: "техдокументация Premium" },
        ]}
      />
    </>
  );
}

/* ---------------- EN ---------------- */
function EnAnswer() {
  return (
    <p>
      With the Telegram Premium API you sell Premium subscriptions (3, 6, 12 months or via login) automatically in
      your bot and website. The customer pays — your system sends an order to the API — and Premium activates on the
      @username in about 10 seconds with no manual work. With a StarsPaymee Business key you set your own reseller
      price.
    </p>
  );
}

function EnBody() {
  return (
    <>
      <h2 id="nima">What does the Premium API give you?</h2>
      <p>
        Selling <Link href="/premium">Telegram Premium</Link> manually means waiting for, checking and delivering
        every order. The API fully automates it: the chain from receiving the order to activation runs in seconds,
        with no human involvement. This saves time and reduces errors, especially for resellers and shops.
      </p>

      <KeyFacts label="Premium API capabilities">
        <li>Activation by username — 3, 6, 12‑month packages.</li>
        <li>Official login flow — 1‑month and 1‑year options.</li>
        <li>Auto‑delivery — ~10 seconds on average, without a password.</li>
        <li>Webhook — status arrives at your server after activation.</li>
        <li>Reseller price — you set your own markup.</li>
      </KeyFacts>

      <h2 id="oqim">How to set up automated selling</h2>
      <Steps>
        <Step title="1. Get the Business key">
          From <Link href="/business">StarsPaymee Business</Link> get an API key and access to the Premium catalog.
        </Step>
        <Step title="2. Show the packages">
          Display 3/6/12‑month and login options with your own price in your bot or site.
        </Step>
        <Step title="3. Collect payment">
          Take payment from the customer via Click, Payme or card in so‘m (or via SBP in rubles).
        </Step>
        <Step title="4. Send the order to the API">
          Via <code>POST /orders</code> pass the Premium type, duration and <code>@username</code>.
        </Step>
        <Step title="5. Handle the webhook">
          Show the customer the <code>delivered</code> status that arrives after activation.
        </Step>
      </Steps>

      <InlineCta text="Want to sell Premium automatically? Contact Business." />

      <h2 id="ikki-oqim">Username vs login flow</h2>
      <CompareTable
        headers={["Feature", "By username", "Via login"]}
        rows={[
          ["Durations", "3, 6, 12 months", "1 month, 1 year"],
          ["What's needed", <>@username</>, <>official sign‑in</>],
          ["Password/SMS", <No>not required</No>, <Yes>official flow</Yes>],
          ["Speed", <Yes>~10 seconds</Yes>, <>a bit longer</>],
          ["Best for selling at scale", <Yes>most convenient</Yes>, <>special cases</>],
        ]}
      />

      <h2 id="reseller">Why it helps resellers</h2>
      <p>
        With the API you take Premium at a wholesale price and sell with your own markup. Delivery, status and refunds
        are handled on the API side, so operational load is minimal. See also:{" "}
        <Link href="/blog/telegram-stars-api-nima-ulanish">Stars API</Link> and{" "}
        <Link href="/blog/eng-arzon-telegram-api-xizmati-ozbekiston">the cheapest API service</Link>.
      </p>

      <Sources
        label="Sources"
        items={[
          { href: "https://telegram.org/faq_premium", label: "telegram.org/faq_premium", note: "Premium FAQ" },
          { href: "https://core.telegram.org/api/premium", label: "core.telegram.org/api/premium", note: "Premium technical docs" },
        ]}
      />
    </>
  );
}

const uzFaq = [
  { question: "Telegram Premium API nima?", answer: "Premium obunani (3/6/12 oy yoki login) o‘z bot va saytingizda avtomatik sotish imkonini beruvchi API. StarsPaymee Business orqali ulanadi." },
  { question: "Avtomatik sotuv qanday ishlaydi?", answer: "Mijoz to‘lagach tizimingiz API’ga buyurtma yuboradi, Premium @username’ga o‘rtacha 10 soniyada faollashadi, webhook orqali status qaytadi." },
  { question: "Qaysi muddatlar mavjud?", answer: "Username orqali 3, 6 va 12 oy; login orqali 1 oy va 1 yil variantlari." },
  { question: "Parol yoki SMS kerakmi?", answer: "Username oqimida yo‘q — faqat @username yetarli. Login oqimida rasmiy kirish talab qilinadi." },
  { question: "O‘z narximni belgilay olamanmi?", answer: "Ha. Siz ulgurji narxda olasiz va reseller sifatida o‘z ustamangiz bilan sotasiz." },
  { question: "API narxi qancha?", answer: "Bozordagi eng arzon narxlardan biri; hajm va reseller darajasiga qarab maxsus tariflar bor." },
  { question: "Webhook bormi?", answer: "Ha. Premium faollashgach delivered statusi serveringizga yuboriladi." },
  { question: "Sandbox mavjudmi?", answer: "Ha. Jonli pulsiz test muhitida oqimni to‘liq tekshirasiz." },
  { question: "Premium tugagach nima bo‘ladi?", answer: "Akkaunt bloklanmaydi; faqat imtiyozlar to‘xtaydi. API orqali qayta faollashtirish mumkin." },
  { question: "Bir username’ga qayta uzaytirsa bo‘ladimi?", answer: "Ha. Yangi buyurtma yaratib, muddatni uzaytirasiz." },
  { question: "To‘lovni o‘zim qabul qilamanmi?", answer: "Ha, Click/Payme/karta yoki SBP orqali. So‘ng API orqali yetkazasiz." },
  { question: "Refund bormi?", answer: "Texnik sabab bilan faollashtirilmasa, buyurtma failed bo‘ladi va hisob-kitob siyosati bo‘yicha qaytariladi." },
  { question: "Premium sovg‘a sifatida beriladimi?", answer: "Ha. Qabul qiluvchi maydoniga do‘st username’ini ko‘rsatsangiz, Premium unga faollashadi." },
  { question: "Login oqimi qachon kerak?", answer: "Rasmiy «akkauntga kirib berish» talab qilingan maxsus holatlarda, masalan 1 oylik yoki 1 yillik variant uchun." },
  { question: "Statusni qanday tekshiraman?", answer: "Webhook orqali yoki GET /orders/{id} so‘rovi bilan real vaqtda." },
  { question: "Narx real vaqtda yangilanadimi?", answer: "Ha. GET /products orqali joriy Premium narxlarini olasiz." },
  { question: "Necha buyurtma yubora olaman?", answer: "Oqilona rate limit doirasida ko‘p buyurtma; yuqori hajm uchun limit oshiriladi." },
  { question: "Qaysi til/framework kerak?", answer: "REST bo‘lgani uchun istalgan til — PHP, Python, Node.js va h.k." },
  { question: "Xavfsizlik qanday?", answer: "API kaliti server tomonida saqlanadi; har so‘rov token bilan autentifikatsiya qilinadi." },
  { question: "Mijozga chek/status ko‘rsatsam bo‘ladimi?", answer: "Ha. Buyurtma ID va statusni o‘z interfeysingizda ko‘rsatasiz." },
  { question: "Bir vaqtda Stars ham sotsam bo‘ladimi?", answer: "Ha. Bitta API orqali Stars, Premium, Gifts va to‘lovlarni birga boshqarasiz." },
  { question: "Rublda to‘lov qabul qila olamanmi?", answer: "Ha. SBP integratsiyasi orqali Rossiyadan rublda to‘lov qabul qilish mumkin." },
  { question: "Integratsiya qancha vaqt oladi?", answer: "Tayyor endpoint va misollar bilan odatda tez; kalitni olgach Sandbox’da darhol boshlaysiz." },
  { question: "Qanday boshlayman?", answer: "StarsPaymee Business sahifasidan ariza qoldiring, kalit va hujjatni oling, sinab jonli rejimga o‘ting." },
];

const ruFaq = [
  { question: "Что такое Telegram Premium API?", answer: "API для автоматической продажи подписки Premium (3/6/12 мес или логин) в вашем боте и на сайте. Подключается через StarsPaymee Business." },
  { question: "Как работает автопродажа?", answer: "После оплаты ваша система шлёт заказ в API, Premium активируется на @username в среднем за 10 секунд, статус возвращается через webhook." },
  { question: "Какие сроки доступны?", answer: "По username — 3, 6 и 12 месяцев; через логин — 1 месяц и 1 год." },
  { question: "Нужен ли пароль или SMS?", answer: "В потоке по username — нет, достаточно @username. В потоке логина нужен официальный вход." },
  { question: "Могу ли я задавать свою цену?", answer: "Да. Вы берёте по оптовой цене и продаёте со своей наценкой как реселлер." },
  { question: "Сколько стоит API?", answer: "Одна из самых низких цен на рынке; для объёма и уровня реселлера есть особые тарифы." },
  { question: "Есть ли webhook?", answer: "Да. После активации Premium статус delivered отправляется на ваш сервер." },
  { question: "Есть ли Sandbox?", answer: "Да. Поток можно полностью проверить в тестовой среде без реальных денег." },
  { question: "Что после окончания Premium?", answer: "Аккаунт не блокируется; отключаются только привилегии. Можно снова активировать через API." },
  { question: "Можно ли продлить на тот же username?", answer: "Да. Создаёте новый заказ и продлеваете срок." },
  { question: "Я сам принимаю оплату?", answer: "Да, через Click/Payme/карту или SBP. Затем доставляете через API." },
  { question: "Есть ли возврат?", answer: "Если активация невозможна по техпричине, заказ становится failed и возвращается по политике расчётов." },
  { question: "Можно ли дарить Premium?", answer: "Да. Укажите username друга в поле получателя, и Premium активируется ему." },
  { question: "Когда нужен поток логина?", answer: "В особых случаях с официальным «входом в аккаунт», например для варианта 1 месяц или 1 год." },
  { question: "Как проверять статус?", answer: "Через webhook или запрос GET /orders/{id} в реальном времени." },
  { question: "Обновляется ли цена в реальном времени?", answer: "Да. Через GET /products вы получаете актуальные цены Premium." },
  { question: "Сколько заказов можно слать?", answer: "Много в рамках разумного rate limit; для объёма лимит повышается." },
  { question: "Какой язык/фреймворк нужен?", answer: "Любой, так как это REST — PHP, Python, Node.js и т.д." },
  { question: "Как с безопасностью?", answer: "API‑ключ хранится на сервере; каждый запрос аутентифицируется токеном." },
  { question: "Можно показать клиенту статус/чек?", answer: "Да. ID заказа и статус вы показываете в своём интерфейсе." },
  { question: "Можно ли одновременно продавать Stars?", answer: "Да. Через один API управляете Stars, Premium, Gifts и платежами." },
  { question: "Могу ли принимать оплату в рублях?", answer: "Да. Через интеграцию SBP можно принимать оплату из России в рублях." },
  { question: "Сколько занимает интеграция?", answer: "С готовыми эндпоинтами и примерами обычно быстро; после ключа сразу начинаете в Sandbox." },
  { question: "Как начать?", answer: "Оставьте заявку на странице StarsPaymee Business, получите ключ и документацию, протестируйте и перейдите в прод." },
];

const enFaq = [
  { question: "What is the Telegram Premium API?", answer: "An API to automatically sell Premium subscriptions (3/6/12 months or login) in your bot and website. It connects via StarsPaymee Business." },
  { question: "How does automated selling work?", answer: "After payment your system sends an order to the API, Premium activates on the @username in ~10 seconds, and the status returns via webhook." },
  { question: "Which durations are available?", answer: "By username — 3, 6 and 12 months; via login — 1 month and 1 year." },
  { question: "Is a password or SMS needed?", answer: "In the username flow — no, just the @username. The login flow needs an official sign‑in." },
  { question: "Can I set my own price?", answer: "Yes. You take it at a wholesale price and sell with your own markup as a reseller." },
  { question: "How much does the API cost?", answer: "One of the lowest prices on the market; special tariffs exist for volume and reseller levels." },
  { question: "Is there a webhook?", answer: "Yes. After Premium activates, the delivered status is sent to your server." },
  { question: "Is there a Sandbox?", answer: "Yes. You can fully test the flow in a sandbox with no real money." },
  { question: "What happens when Premium ends?", answer: "The account is not blocked; only the perks stop. It can be reactivated via the API." },
  { question: "Can I renew the same username?", answer: "Yes. Create a new order and extend the term." },
  { question: "Do I collect payment myself?", answer: "Yes, via Click/Payme/card or SBP. Then you deliver via the API." },
  { question: "Is there a refund?", answer: "If activation is impossible for a technical reason, the order becomes failed and is refunded per the settlement policy." },
  { question: "Can Premium be gifted?", answer: "Yes. Put a friend's username in the recipient field and Premium activates for them." },
  { question: "When is the login flow needed?", answer: "In special cases with an official «account sign‑in», e.g. for the 1‑month or 1‑year option." },
  { question: "How do I check status?", answer: "Via webhook or a GET /orders/{id} request in real time." },
  { question: "Are prices updated in real time?", answer: "Yes. Through GET /products you fetch current Premium prices." },
  { question: "How many orders can I send?", answer: "Many, within a reasonable rate limit; the limit is raised for volume." },
  { question: "Which language/framework is needed?", answer: "Any, since it is REST — PHP, Python, Node.js, etc." },
  { question: "What about security?", answer: "The API key is stored server‑side; each request is authenticated with a token." },
  { question: "Can I show the customer a status/receipt?", answer: "Yes. You show the order ID and status in your own interface." },
  { question: "Can I also sell Stars at the same time?", answer: "Yes. Through one API you manage Stars, Premium, Gifts and payments." },
  { question: "Can I accept payment in rubles?", answer: "Yes. Through the SBP integration you can accept payments from Russia in rubles." },
  { question: "How long does integration take?", answer: "With ready endpoints and examples it is usually fast; after the key you start in the Sandbox right away." },
  { question: "How do I start?", answer: "Submit a request on the StarsPaymee Business page, get the key and docs, test and switch to production." },
];

export const post: AeoPost = {
  slug: SLUG,
  category: "Biznes",
  type: "howto",
  datePublished: "2026-07-21",
  dateModified: "2026-07-21",
  keywords: [
    "telegram premium api",
    "premium api",
    "telegram premium reseller api",
    "telegram premium avtomatik sotuv",
    "premium api uzbekistan",
    "telegram premium api ulash",
  ],
  howToSteps: [
    { name: "Business kalitini oling", text: "StarsPaymee Business’dan API kalit va Premium katalogini oling." },
    { name: "Paketlarni ko‘rsating", text: "3/6/12 oy va login variantlarini o‘z narxingiz bilan chiqaring." },
    { name: "To‘lovni qabul qiling", text: "Mijozdan Click, Payme, karta yoki SBP orqali to‘lov oling." },
    { name: "API’ga buyurtma yuboring", text: "POST /orders bilan Premium turi, muddati va username’ni jo‘nating." },
    { name: "Webhook’ni qayta ishlang", text: "delivered statusini olib mijozga ko‘rsating." },
  ],
  locales: {
    uz: {
      title: "Telegram Premium API orqali avtomatik sotuvni yo‘lga qo‘yish",
      excerpt:
        "Telegram Premium API bilan 3/6/12 oy va login obunalarini bot va saytda avtomatik soting: buyurtma → to‘lov → 10 soniyada faollashtirish. Reseller narxi, webhook va 24 savol-javob.",
      metaTitle: "Telegram Premium API: avtomatik sotuvni yo‘lga qo‘yish",
      metaDescription:
        "Telegram Premium API orqali Premium’ni avtomatik sotish: username va login oqimi, webhook, reseller narxi va StarsPaymee Business orqali ulanish — 24 savol-javob.",
      answerTitle: "Qisqa javob",
      Answer: UzAnswer,
      Body: UzBody,
      ctaHeading: "Premium’ni avtomatik soting",
      ctaBody: "StarsPaymee Business API bilan Premium sotuvini soniyalarda avtomatlashtiring.",
      faq: uzFaq,
    },
    ru: {
      title: "Автопродажа Telegram Premium через Premium API",
      excerpt:
        "С Telegram Premium API продавайте подписки 3/6/12 мес и логин в боте и на сайте автоматически: заказ → оплата → активация за 10 секунд. Цена реселлера, webhook и 24 вопроса‑ответа.",
      metaTitle: "Telegram Premium API: настроить автопродажу",
      metaDescription:
        "Автопродажа Telegram Premium через API: потоки username и логин, webhook, цена реселлера и подключение через StarsPaymee Business — 24 вопроса‑ответа.",
      answerTitle: "Краткий ответ",
      Answer: RuAnswer,
      Body: RuBody,
      ctaHeading: "Продавайте Premium автоматически",
      ctaBody: "С API StarsPaymee Business автоматизируйте продажу Premium за секунды.",
      faq: ruFaq,
    },
    en: {
      title: "Set up automated selling via the Telegram Premium API",
      excerpt:
        "With the Telegram Premium API sell 3/6/12‑month and login subscriptions in your bot and site automatically: order → payment → activation in 10 seconds. Reseller price, webhook and 24 Q&A.",
      metaTitle: "Telegram Premium API: set up automated selling",
      metaDescription:
        "Automated Telegram Premium selling via API: username and login flows, webhook, reseller pricing and connecting through StarsPaymee Business — 24 Q&A.",
      answerTitle: "Short answer",
      Answer: EnAnswer,
      Body: EnBody,
      ctaHeading: "Sell Premium automatically",
      ctaBody: "With the StarsPaymee Business API, automate Premium sales in seconds.",
      faq: enFaq,
    },
  },
};
