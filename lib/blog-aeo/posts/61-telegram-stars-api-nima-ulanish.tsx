import { Link } from "@/i18n/navigation";
import { InlineCta, Sources, KeyFacts, Steps, Step, InfoGrid, InfoCard } from "@/components/blog/aeo-blocks";
import type { AeoPost } from "@/lib/blog-aeo/types";

const SLUG = "telegram-stars-api-nima-ulanish";

/* ---------------- UZ ---------------- */
function UzAnswer() {
  return (
    <p>
      Telegram Stars API — Telegram Stars, Premium va Gifts mahsulotlarini avtomatik sotishga imkon beruvchi dasturiy
      interfeys. StarsPaymee Business orqali siz REST/JSON API kalitini olib, o‘z botingiz yoki veb-saytingizga
      ulaysiz: buyurtma yaratiladi, to‘lov qabul qilinadi va Stars @username’ga o‘rtacha 10 soniyada avtomatik
      yetkaziladi.
    </p>
  );
}

function UzBody() {
  return (
    <>
      <h2 id="nima">Telegram Stars API nima?</h2>
      <p>
        Telegram Stars API — bu sizning ilovangiz (bot, Mini App yoki veb-sayt) StarsPaymee tizimiga so‘rov (request)
        yuborib, Telegram Stars, <Link href="/premium">Premium</Link> va <Link href="/gifts">Gifts</Link>ni avtomatik
        sotishga imkon beradigan dasturiy ko‘prik. Oddiy qilib aytganda: mijoz sizga to‘laydi, sizning tizimingiz esa
        API orqali StarsPaymee’ga «filonchiga shuncha yulduz yetkaz» degan buyruq beradi va yetkazib berish avtomatik
        bajariladi.
      </p>

      <KeyFacts label="Asosiy faktlar">
        <li>Format — REST API, so‘rov va javob JSON ko‘rinishida.</li>
        <li>Mahsulotlar — Stars, Premium, Gifts, hamda Click va SBP (rubl) to‘lovlari.</li>
        <li>Yetkazib berish — @username orqali, o‘rtacha 10 soniyada, parolsiz.</li>
        <li>Webhook — buyurtma statusi o‘zgarganda sizning serveringizga xabar keladi.</li>
        <li>Sandbox — jonli pulsiz test qilish uchun sinov muhiti.</li>
      </KeyFacts>

      <h2 id="qanday-ishlaydi">API qanday ishlaydi?</h2>
      <p>
        Jarayon uch tomondan iborat: <b>mijoz</b>, <b>sizning tizimingiz</b> va <b>StarsPaymee API</b>. Mijoz sizning
        bot yoki saytingizda mahsulotni tanlaydi, siz to‘lovni qabul qilasiz, so‘ng API’ga buyurtma yuborasiz.
        StarsPaymee Telegram tomonida yetkazib berishni bajaradi va natijani webhook orqali qaytaradi.
      </p>

      <Steps>
        <Step title="1. API kalitini oling">
          StarsPaymee Business bilan ro‘yxatdan o‘ting va API kalitingizni (token) oling. Kalit har bir so‘rovni
          autentifikatsiya qiladi.
        </Step>
        <Step title="2. Narx va katalogni oling">
          <code>GET /products</code> orqali joriy narxlar, paketlar va mavjud mahsulotlar ro‘yxatini olasiz.
        </Step>
        <Step title="3. Buyurtma yarating">
          <code>POST /orders</code> so‘rovida mahsulot, miqdor va qabul qiluvchi <code>@username</code>ni yuborasiz.
        </Step>
        <Step title="4. Statusni kuzating">
          Webhook orqali yoki <code>GET /orders/&#123;id&#125;</code> bilan buyurtma holatini (pending → delivered)
          tekshirasiz.
        </Step>
      </Steps>

      <InlineCta text="API ulash yoki narxni bilmoqchimisiz? Business bilan bog‘laning." />

      <h2 id="kimlar-uchun">Kimlar uchun mos?</h2>
      <InfoGrid>
        <InfoCard emoji="🤖" title="Bot egalari">
          Telegram botingizga Stars/Premium sotuvini qo‘shib, sotuvni to‘liq avtomatlashtirasiz.
        </InfoCard>
        <InfoCard emoji="🛍️" title="Reseller va do‘konlar">
          O‘z narxingizni belgilab, yulduz va Premium’ni qayta sotasiz — hisob-kitob API tomonida.
        </InfoCard>
        <InfoCard emoji="🌐" title="Veb-saytlar">
          Saytingizdagi to‘lov formasi orqali buyurtmani API’ga uzatib, avtomatik yetkazasiz.
        </InfoCard>
        <InfoCard emoji="🏷️" title="White Label loyihalar">
          O‘z brendingiz ostida to‘liq platforma — orqa tomonda StarsPaymee API ishlaydi.
        </InfoCard>
      </InfoGrid>

      <h2 id="ulanish">Qanday ulanish mumkin?</h2>
      <p>
        Ulanish uchun <Link href="/business">StarsPaymee Business</Link> sahifasiga o‘tib, ariza qoldiring.
        Ro‘yxatdan o‘tgach API kaliti tez taqdim etiladi va siz darhol Sandbox’da sinovni boshlaysiz. Integratsiya
        bo‘yicha savol tug‘ilsa, <a href="https://t.me/StarsPaymeeSupport" target="_blank" rel="noopener noreferrer">
        @StarsPaymeeSupport</a> yordam beradi. Batafsil mavzular:{" "}
        <Link href="/blog/telegram-premium-api-avtomatik-sotuv">Premium API</Link>,{" "}
        <Link href="/blog/click-api-rasmiy-integratsiya">Click API</Link> va{" "}
        <Link href="/blog/sbp-api-rossiya-rubl-tolov">SBP (rubl) API</Link>.
      </p>

      <Sources
        label="Manbalar"
        items={[
          { href: "https://core.telegram.org/api/stars", label: "core.telegram.org/api/stars", note: "Stars texnik hujjati" },
          { href: "https://telegram.org/blog/telegram-stars", label: "telegram.org/blog/telegram-stars", note: "Stars rasmiy e’loni" },
          { href: "https://core.telegram.org/bots/payments", label: "core.telegram.org/bots/payments", note: "Bot to‘lovlari" },
        ]}
      />
    </>
  );
}

/* ---------------- RU ---------------- */
function RuAnswer() {
  return (
    <p>
      Telegram Stars API — программный интерфейс для автоматической продажи Telegram Stars, Premium и Gifts. Через
      StarsPaymee Business вы получаете REST/JSON‑ключ и подключаете его к своему боту или сайту: заказ создаётся,
      оплата принимается, а Stars доставляются на @username в среднем за 10 секунд автоматически.
    </p>
  );
}

function RuBody() {
  return (
    <>
      <h2 id="nima">Что такое Telegram Stars API?</h2>
      <p>
        Telegram Stars API — это программный мост, через который ваше приложение (бот, Mini App или сайт) отправляет
        запросы в систему StarsPaymee и автоматически продаёт Telegram Stars, <Link href="/premium">Premium</Link> и{" "}
        <Link href="/gifts">Gifts</Link>. Проще говоря: клиент платит вам, а ваша система через API даёт StarsPaymee
        команду «доставить столько‑то звёзд такому‑то пользователю», и доставка выполняется автоматически.
      </p>

      <KeyFacts label="Ключевые факты">
        <li>Формат — REST API, запрос и ответ в JSON.</li>
        <li>Товары — Stars, Premium, Gifts, а также оплата Click и SBP (рубли).</li>
        <li>Доставка — по @username, в среднем за 10 секунд, без пароля.</li>
        <li>Webhook — уведомление на ваш сервер при смене статуса заказа.</li>
        <li>Sandbox — тестовая среда без реальных денег.</li>
      </KeyFacts>

      <h2 id="qanday-ishlaydi">Как работает API?</h2>
      <p>
        В процессе три стороны: <b>клиент</b>, <b>ваша система</b> и <b>StarsPaymee API</b>. Клиент выбирает товар в
        вашем боте или на сайте, вы принимаете оплату и отправляете заказ в API. StarsPaymee выполняет доставку на
        стороне Telegram и возвращает результат через webhook.
      </p>

      <Steps>
        <Step title="1. Получите API‑ключ">
          Зарегистрируйтесь в StarsPaymee Business и получите API‑ключ (токен). Ключ аутентифицирует каждый запрос.
        </Step>
        <Step title="2. Загрузите цены и каталог">
          Через <code>GET /products</code> получаете актуальные цены, пакеты и список доступных товаров.
        </Step>
        <Step title="3. Создайте заказ">
          В запросе <code>POST /orders</code> передаёте товар, количество и получателя <code>@username</code>.
        </Step>
        <Step title="4. Отслеживайте статус">
          Через webhook или <code>GET /orders/&#123;id&#125;</code> проверяете состояние заказа (pending → delivered).
        </Step>
      </Steps>

      <InlineCta text="Хотите подключить API или узнать цену? Свяжитесь с Business." />

      <h2 id="kimlar-uchun">Кому подходит?</h2>
      <InfoGrid>
        <InfoCard emoji="🤖" title="Владельцам ботов">
          Добавьте продажу Stars/Premium в свой бот и полностью автоматизируйте продажи.
        </InfoCard>
        <InfoCard emoji="🛍️" title="Реселлерам и магазинам">
          Устанавливайте свою цену и перепродавайте звёзды и Premium — расчёты на стороне API.
        </InfoCard>
        <InfoCard emoji="🌐" title="Сайтам">
          Передавайте заказ из формы оплаты на сайте в API и доставляйте автоматически.
        </InfoCard>
        <InfoCard emoji="🏷️" title="White Label проектам">
          Полноценная платформа под вашим брендом — на бэкенде работает StarsPaymee API.
        </InfoCard>
      </InfoGrid>

      <h2 id="ulanish">Как подключиться?</h2>
      <p>
        Для подключения перейдите на страницу <Link href="/business">StarsPaymee Business</Link> и оставьте заявку.
        После регистрации API‑ключ выдаётся быстро, и вы сразу начинаете тест в Sandbox. По вопросам интеграции
        поможет <a href="https://t.me/StarsPaymeeSupport" target="_blank" rel="noopener noreferrer">
        @StarsPaymeeSupport</a>. Подробнее:{" "}
        <Link href="/blog/telegram-premium-api-avtomatik-sotuv">Premium API</Link>,{" "}
        <Link href="/blog/click-api-rasmiy-integratsiya">Click API</Link> и{" "}
        <Link href="/blog/sbp-api-rossiya-rubl-tolov">SBP (рубли) API</Link>.
      </p>

      <Sources
        label="Источники"
        items={[
          { href: "https://core.telegram.org/api/stars", label: "core.telegram.org/api/stars", note: "техдокументация Stars" },
          { href: "https://telegram.org/blog/telegram-stars", label: "telegram.org/blog/telegram-stars", note: "анонс Stars" },
          { href: "https://core.telegram.org/bots/payments", label: "core.telegram.org/bots/payments", note: "платежи в ботах" },
        ]}
      />
    </>
  );
}

/* ---------------- EN ---------------- */
function EnAnswer() {
  return (
    <p>
      The Telegram Stars API is a programmatic interface for selling Telegram Stars, Premium and Gifts automatically.
      With StarsPaymee Business you get a REST/JSON key and connect it to your bot or website: an order is created,
      payment is collected, and Stars are delivered to the @username automatically in about 10 seconds.
    </p>
  );
}

function EnBody() {
  return (
    <>
      <h2 id="nima">What is the Telegram Stars API?</h2>
      <p>
        The Telegram Stars API is a software bridge that lets your app (a bot, Mini App or website) send requests to
        the StarsPaymee system and automatically sell Telegram Stars, <Link href="/premium">Premium</Link> and{" "}
        <Link href="/gifts">Gifts</Link>. In short: a customer pays you, and your system tells StarsPaymee via the API
        to «deliver N stars to this user» — delivery then happens automatically.
      </p>

      <KeyFacts label="Key facts">
        <li>Format — REST API, requests and responses in JSON.</li>
        <li>Products — Stars, Premium, Gifts, plus Click and SBP (RUB) payments.</li>
        <li>Delivery — by @username, in ~10 seconds, without a password.</li>
        <li>Webhook — your server is notified when an order status changes.</li>
        <li>Sandbox — a test environment with no real money.</li>
      </KeyFacts>

      <h2 id="qanday-ishlaydi">How does the API work?</h2>
      <p>
        Three parties are involved: the <b>customer</b>, <b>your system</b> and the <b>StarsPaymee API</b>. The
        customer picks a product in your bot or site, you collect payment, then you send the order to the API.
        StarsPaymee performs delivery on the Telegram side and returns the result via webhook.
      </p>

      <Steps>
        <Step title="1. Get your API key">
          Register with StarsPaymee Business and receive your API key (token). The key authenticates each request.
        </Step>
        <Step title="2. Fetch prices and catalog">
          Use <code>GET /products</code> to fetch current prices, packages and available products.
        </Step>
        <Step title="3. Create an order">
          In the <code>POST /orders</code> request you pass the product, amount and recipient <code>@username</code>.
        </Step>
        <Step title="4. Track the status">
          Via webhook or <code>GET /orders/&#123;id&#125;</code> you check the order state (pending → delivered).
        </Step>
      </Steps>

      <InlineCta text="Want to connect the API or learn the price? Contact Business." />

      <h2 id="kimlar-uchun">Who is it for?</h2>
      <InfoGrid>
        <InfoCard emoji="🤖" title="Bot owners">
          Add Stars/Premium selling to your Telegram bot and fully automate sales.
        </InfoCard>
        <InfoCard emoji="🛍️" title="Resellers & shops">
          Set your own price and resell Stars and Premium — settlement happens on the API side.
        </InfoCard>
        <InfoCard emoji="🌐" title="Websites">
          Pass the order from your site checkout to the API and deliver automatically.
        </InfoCard>
        <InfoCard emoji="🏷️" title="White Label projects">
          A full platform under your own brand — StarsPaymee API runs on the backend.
        </InfoCard>
      </InfoGrid>

      <h2 id="ulanish">How can you connect?</h2>
      <p>
        To connect, open the <Link href="/business">StarsPaymee Business</Link> page and submit a request. After
        sign‑up the API key is issued quickly and you can start testing in the Sandbox right away. For integration
        questions, <a href="https://t.me/StarsPaymeeSupport" target="_blank" rel="noopener noreferrer">
        @StarsPaymeeSupport</a> will help. See also:{" "}
        <Link href="/blog/telegram-premium-api-avtomatik-sotuv">Premium API</Link>,{" "}
        <Link href="/blog/click-api-rasmiy-integratsiya">Click API</Link> and{" "}
        <Link href="/blog/sbp-api-rossiya-rubl-tolov">SBP (RUB) API</Link>.
      </p>

      <Sources
        label="Sources"
        items={[
          { href: "https://core.telegram.org/api/stars", label: "core.telegram.org/api/stars", note: "Stars technical docs" },
          { href: "https://telegram.org/blog/telegram-stars", label: "telegram.org/blog/telegram-stars", note: "Stars announcement" },
          { href: "https://core.telegram.org/bots/payments", label: "core.telegram.org/bots/payments", note: "bot payments" },
        ]}
      />
    </>
  );
}

const uzFaq = [
  { question: "Telegram Stars API nima?", answer: "Telegram Stars, Premium va Gifts mahsulotlarini avtomatik sotish imkonini beruvchi API. StarsPaymee Business orqali API olib, botingiz yoki saytingizga ulaysiz." },
  { question: "API olish qancha vaqt oladi?", answer: "Ro‘yxatdan o‘tib, ariza tasdiqlangach API kalitlari juda tez taqdim etiladi va integratsiyani darhol boshlashingiz mumkin." },
  { question: "API narxi qancha?", answer: "StarsPaymee Business API bozordagi eng arzon narxlardan biri bilan taqdim etiladi. Reseller va yuqori hajmli mijozlar uchun maxsus tariflar mavjud." },
  { question: "API orqali nimalarni sotish mumkin?", answer: "Telegram Stars, Telegram Premium, Telegram Gifts, hamda Click va SBP (rubl) to‘lovlari." },
  { question: "API JSON formatidami?", answer: "Ha. REST API JSON formatida ishlaydi — so‘rov ham, javob ham JSON." },
  { question: "Webhook bormi?", answer: "Ha. Buyurtma statusi o‘zgarganda (masalan, delivered) sizning serveringizga avtomatik xabar yuboriladi." },
  { question: "Sandbox mavjudmi?", answer: "Ha. Jonli pul sarflamasdan, sinov muhitida integratsiyani to‘liq tekshirib olishingiz mumkin." },
  { question: "Rate limit bormi?", answer: "Ha. So‘rovlar soni uchun oqilona limitlar bor; yuqori hajmli mijozlar uchun limit oshiriladi." },
  { question: "White Label bormi?", answer: "Ha. O‘z brendingiz ostida to‘liq platforma qurishingiz mumkin, orqa tomonda StarsPaymee API ishlaydi." },
  { question: "Reseller bo‘lish mumkinmi?", answer: "Ha. O‘z narxingizni belgilab qayta sotasiz; hisob-kitob va yetkazib berish API tomonida avtomatlashtiriladi." },
  { question: "Support 24/7 ishlaydimi?", answer: "Ha. Integratsiya va operatsion savollar bo‘yicha qo‘llab-quvvatlash mavjud — @StarsPaymeeSupport." },
  { question: "API kaliti qanday himoyalanadi?", answer: "Kalit faqat server tomonida saqlanishi kerak; har bir so‘rov token bilan autentifikatsiya qilinadi. Kalitni mijoz brauzeriga qo‘ymang." },
  { question: "Stars qanday yetkaziladi?", answer: "Buyurtmada ko‘rsatilgan @username’ga to‘g‘ridan-to‘g‘ri, o‘rtacha 10 soniyada, parol yoki SMS so‘ralmasdan." },
  { question: "Premium ham API orqali beriladimi?", answer: "Ha. Premium’ni username orqali (3/6/12 oy) yoki login orqali API orqali sotishingiz mumkin." },
  { question: "Gifts (sovg‘a) API orqali yuboriladimi?", answer: "Ha. Katalogdan gift tanlab, qabul qiluvchi username bilan buyurtma yaratasiz." },
  { question: "Buyurtma bekor bo‘lsa nima bo‘ladi?", answer: "Texnik sabab bilan yetkazilmasa, buyurtma failed holatiga o‘tadi va hisob-kitob siyosatiga ko‘ra qaytariladi." },
  { question: "To‘lovni o‘zim qabul qilamanmi?", answer: "Ha, mijozdan to‘lovni o‘z kanalingizda (Click, Payme, karta) qabul qilib, so‘ng API orqali yetkazib berasiz. SBP/Click integratsiyasi ham mavjud." },
  { question: "Narxlar API orqali yangilanadimi?", answer: "Ha. GET /products orqali joriy narx va paketlarni real vaqtda olasiz, shuning uchun narx doim dolzarb bo‘ladi." },
  { question: "Bir nechta @username’ga birdan yuborsa bo‘ladimi?", answer: "Ha. Har bir buyurtmada kerakli username ko‘rsatiladi; ko‘p buyurtmalarni ketma-ket yuborishingiz mumkin." },
  { question: "Test uchun hujjat beriladimi?", answer: "Ha. Ulanishdan so‘ng endpointlar, misollar va webhook formatini o‘z ichiga olgan hujjat beriladi." },
  { question: "Qaysi dasturlash tili kerak?", answer: "REST API bo‘lgani uchun istalgan til — PHP, Python, Node.js, Go va boshqalar. HTTP so‘rov yubora oladigan har qanday muhit mos." },
  { question: "Minimal buyurtma qancha?", answer: "Minimal miqdor mahsulotga bog‘liq; masalan Stars uchun eng kichik paket 50 yulduzdan boshlanadi." },
  { question: "Balansni oldindan to‘ldirish kerakmi?", answer: "Ko‘p hollarda reseller balans (deposit) modeli ishlatiladi; shartlar tarifga bog‘liq va Business bilan kelishiladi." },
  { question: "API statistikasi bormi?", answer: "Ha. Buyurtmalar tarixi va statuslarini so‘rov orqali yoki panelda kuzatishingiz mumkin." },
  { question: "Xorijiy karta kerakmi?", answer: "Yo‘q. O‘zbekistonda mahalliy kartalar va Click/Payme bilan so‘mda ishlaydi; rubl uchun SBP integratsiyasi bor." },
  { question: "Integratsiya murakkabmi?", answer: "Yo‘q. Odatda bir nechta endpoint (products, orders, status) va bitta webhook yetarli; tayyor misollar bilan tez ulanadi." },
  { question: "Qanday boshlayman?", answer: "StarsPaymee Business sahifasidan ariza qoldiring, API kaliti va hujjatni oling, Sandbox’da sinab, jonli rejimga o‘ting." },
];

const ruFaq = [
  { question: "Что такое Telegram Stars API?", answer: "API для автоматической продажи Telegram Stars, Premium и Gifts. Через StarsPaymee Business вы получаете ключ и подключаете его к боту или сайту." },
  { question: "Сколько занимает получение API?", answer: "После регистрации и подтверждения заявки API‑ключи выдаются очень быстро, и интеграцию можно начать сразу." },
  { question: "Сколько стоит API?", answer: "StarsPaymee Business API предлагается по одной из самых низких цен на рынке. Для реселлеров и крупных клиентов есть особые тарифы." },
  { question: "Что можно продавать через API?", answer: "Telegram Stars, Telegram Premium, Telegram Gifts, а также оплату через Click и SBP (рубли)." },
  { question: "API в формате JSON?", answer: "Да. REST API работает в JSON — и запрос, и ответ в JSON." },
  { question: "Есть ли webhook?", answer: "Да. При смене статуса заказа (например delivered) на ваш сервер приходит уведомление." },
  { question: "Есть ли Sandbox?", answer: "Да. В тестовой среде можно полностью проверить интеграцию без реальных денег." },
  { question: "Есть ли rate limit?", answer: "Да. Есть разумные лимиты на число запросов; для крупных клиентов лимит повышается." },
  { question: "Есть ли White Label?", answer: "Да. Можно построить платформу под своим брендом, на бэкенде работает StarsPaymee API." },
  { question: "Можно ли стать реселлером?", answer: "Да. Вы задаёте свою цену и перепродаёте; расчёты и доставка автоматизированы на стороне API." },
  { question: "Поддержка работает 24/7?", answer: "Да. По вопросам интеграции и эксплуатации есть поддержка — @StarsPaymeeSupport." },
  { question: "Как защищается API‑ключ?", answer: "Ключ должен храниться только на сервере; каждый запрос аутентифицируется токеном. Не размещайте ключ в браузере клиента." },
  { question: "Как доставляются Stars?", answer: "Напрямую на @username из заказа, в среднем за 10 секунд, без пароля и SMS." },
  { question: "Premium тоже через API?", answer: "Да. Premium можно продавать по username (3/6/12 мес) или через логин по API." },
  { question: "Gifts отправляются через API?", answer: "Да. Выбираете подарок из каталога и создаёте заказ с username получателя." },
  { question: "Что если заказ не выполнен?", answer: "При невозможности доставки по техпричине заказ переходит в failed и возвращается согласно политике расчётов." },
  { question: "Я сам принимаю оплату?", answer: "Да, вы принимаете оплату в своём канале (Click, Payme, карта), затем доставляете через API. Интеграции SBP/Click тоже доступны." },
  { question: "Цены обновляются через API?", answer: "Да. Через GET /products вы получаете актуальные цены и пакеты в реальном времени." },
  { question: "Можно ли слать на несколько @username?", answer: "Да. В каждом заказе указывается нужный username; можно отправлять много заказов подряд." },
  { question: "Дают ли документацию?", answer: "Да. После подключения выдаётся документация с эндпоинтами, примерами и форматом webhook." },
  { question: "Какой язык программирования нужен?", answer: "Любой — PHP, Python, Node.js, Go и другие. Подходит любая среда, умеющая слать HTTP‑запросы." },
  { question: "Какой минимальный заказ?", answer: "Минимум зависит от товара; например для Stars наименьший пакет начинается от 50 звёзд." },
  { question: "Нужно ли пополнять баланс заранее?", answer: "Часто используется модель депозита реселлера; условия зависят от тарифа и согласуются с Business." },
  { question: "Есть ли статистика API?", answer: "Да. История заказов и статусы доступны через запрос или в панели." },
  { question: "Нужна ли зарубежная карта?", answer: "Нет. В Узбекистане работает с локальными картами и Click/Payme в сумах; для рублей есть интеграция SBP." },
  { question: "Сложная ли интеграция?", answer: "Нет. Обычно достаточно нескольких эндпоинтов (products, orders, status) и одного webhook; с примерами подключение быстрое." },
  { question: "Как начать?", answer: "Оставьте заявку на странице StarsPaymee Business, получите ключ и документацию, протестируйте в Sandbox и переходите в прод." },
];

const enFaq = [
  { question: "What is the Telegram Stars API?", answer: "An API for automatically selling Telegram Stars, Premium and Gifts. With StarsPaymee Business you get a key and connect it to your bot or website." },
  { question: "How long does it take to get the API?", answer: "After sign‑up and approval, API keys are issued very quickly and you can start integrating right away." },
  { question: "How much does the API cost?", answer: "The StarsPaymee Business API is offered at one of the lowest prices on the market. Special tariffs exist for resellers and high‑volume clients." },
  { question: "What can I sell through the API?", answer: "Telegram Stars, Telegram Premium, Telegram Gifts, plus Click and SBP (RUB) payments." },
  { question: "Is the API in JSON?", answer: "Yes. The REST API works in JSON — both request and response are JSON." },
  { question: "Is there a webhook?", answer: "Yes. When an order status changes (for example delivered) your server receives a notification." },
  { question: "Is there a Sandbox?", answer: "Yes. You can fully test the integration in a sandbox with no real money." },
  { question: "Is there a rate limit?", answer: "Yes. There are reasonable request limits; for large clients the limit is raised." },
  { question: "Is there White Label?", answer: "Yes. You can build a platform under your own brand, with the StarsPaymee API on the backend." },
  { question: "Can I become a reseller?", answer: "Yes. You set your own price and resell; settlement and delivery are automated on the API side." },
  { question: "Is support 24/7?", answer: "Yes. There is support for integration and operational questions — @StarsPaymeeSupport." },
  { question: "How is the API key protected?", answer: "The key must be kept server‑side only; each request is authenticated with a token. Never put the key in the client browser." },
  { question: "How are Stars delivered?", answer: "Directly to the @username from the order, in ~10 seconds, without a password or SMS." },
  { question: "Is Premium also via API?", answer: "Yes. Premium can be sold by username (3/6/12 months) or via login through the API." },
  { question: "Are Gifts sent via API?", answer: "Yes. You pick a gift from the catalog and create an order with the recipient's username." },
  { question: "What if an order fails?", answer: "If delivery is impossible for a technical reason, the order becomes failed and is refunded per the settlement policy." },
  { question: "Do I collect payment myself?", answer: "Yes, you collect payment in your own channel (Click, Payme, card), then deliver via the API. SBP/Click integrations are also available." },
  { question: "Are prices updated via API?", answer: "Yes. Through GET /products you fetch current prices and packages in real time." },
  { question: "Can I send to multiple usernames?", answer: "Yes. Each order specifies the target username; you can send many orders in sequence." },
  { question: "Is documentation provided?", answer: "Yes. After connecting you receive documentation with endpoints, examples and the webhook format." },
  { question: "Which programming language is needed?", answer: "Any — PHP, Python, Node.js, Go and others. Any environment that can send HTTP requests works." },
  { question: "What is the minimum order?", answer: "The minimum depends on the product; for Stars, for example, the smallest package starts at 50 stars." },
  { question: "Do I need to prefund a balance?", answer: "A reseller deposit model is often used; terms depend on the tariff and are agreed with Business." },
  { question: "Is there API statistics?", answer: "Yes. Order history and statuses are available via a request or in the panel." },
  { question: "Do I need a foreign card?", answer: "No. In Uzbekistan it works with local cards and Click/Payme in so‘m; for rubles there is an SBP integration." },
  { question: "Is integration complex?", answer: "No. Usually a few endpoints (products, orders, status) and one webhook are enough; with examples the connection is fast." },
  { question: "How do I start?", answer: "Submit a request on the StarsPaymee Business page, get the key and docs, test in Sandbox and switch to live." },
];

export const post: AeoPost = {
  slug: SLUG,
  category: "Biznes",
  type: "howto",
  datePublished: "2026-07-21",
  dateModified: "2026-07-21",
  keywords: [
    "telegram stars api",
    "stars api uzbekistan",
    "telegram api xizmati",
    "telegram stars api ulash",
    "telegram stars api nima",
    "stars api",
  ],
  howToSteps: [
    { name: "API kalitini oling", text: "StarsPaymee Business bilan ro‘yxatdan o‘tib, API tokenini oling." },
    { name: "Narx va katalogni oling", text: "GET /products orqali joriy narx va mahsulotlarni oling." },
    { name: "Buyurtma yarating", text: "POST /orders bilan mahsulot, miqdor va qabul qiluvchi username’ni yuboring." },
    { name: "Statusni kuzating", text: "Webhook yoki GET /orders/{id} orqali yetkazib berish holatini tekshiring." },
  ],
  locales: {
    uz: {
      title: "Telegram Stars API nima? Qanday ulanish mumkin? (2026)",
      excerpt:
        "Telegram Stars API — Stars, Premium va Gifts’ni avtomatik sotish uchun REST/JSON API. Qanday ishlaydi, kimlar uchun mos va StarsPaymee Business orqali qanday ulanadi — to‘liq qo‘llanma va 27 savol-javob.",
      metaTitle: "Telegram Stars API nima va qanday ulanadi (2026)",
      metaDescription:
        "Telegram Stars API: Stars, Premium, Gifts’ni avtomatik sotish uchun REST/JSON API. Ishlash tartibi, webhook, sandbox va StarsPaymee Business orqali ulanish — 27 savol-javob.",
      answerTitle: "Qisqa javob",
      Answer: UzAnswer,
      Body: UzBody,
      ctaHeading: "API ulashni boshlaysizmi?",
      ctaBody: "StarsPaymee Business orqali API kalitini oling — Stars, Premium, Gifts, Click va SBP bir joyda.",
      faq: uzFaq,
    },
    ru: {
      title: "Что такое Telegram Stars API и как подключиться? (2026)",
      excerpt:
        "Telegram Stars API — REST/JSON API для автопродажи Stars, Premium и Gifts. Как работает, кому подходит и как подключиться через StarsPaymee Business — полное руководство и 27 вопросов‑ответов.",
      metaTitle: "Telegram Stars API: что это и как подключить (2026)",
      metaDescription:
        "Telegram Stars API: REST/JSON API для автопродажи Stars, Premium, Gifts. Принцип работы, webhook, sandbox и подключение через StarsPaymee Business — 27 вопросов‑ответов.",
      answerTitle: "Краткий ответ",
      Answer: RuAnswer,
      Body: RuBody,
      ctaHeading: "Начнёте подключение API?",
      ctaBody: "Получите API‑ключ через StarsPaymee Business — Stars, Premium, Gifts, Click и SBP в одном месте.",
      faq: ruFaq,
    },
    en: {
      title: "What is the Telegram Stars API and how to connect? (2026)",
      excerpt:
        "The Telegram Stars API is a REST/JSON API for auto‑selling Stars, Premium and Gifts. How it works, who it's for and how to connect via StarsPaymee Business — a full guide and 27 Q&A.",
      metaTitle: "Telegram Stars API: what it is and how to connect (2026)",
      metaDescription:
        "Telegram Stars API: a REST/JSON API to auto‑sell Stars, Premium, Gifts. How it works, webhooks, sandbox and connecting via StarsPaymee Business — 27 Q&A.",
      answerTitle: "Short answer",
      Answer: EnAnswer,
      Body: EnBody,
      ctaHeading: "Ready to connect the API?",
      ctaBody: "Get your API key via StarsPaymee Business — Stars, Premium, Gifts, Click and SBP in one place.",
      faq: enFaq,
    },
  },
};
