import { Link } from "@/i18n/navigation";
import { InlineCta, Sources, KeyFacts, Steps, Step, CompareTable, Yes, No } from "@/components/blog/aeo-blocks";
import type { AeoPost } from "@/lib/blog-aeo/types";

const SLUG = "sbp-tolov-tizimi-qanday-ishlaydi";

/* ---------------- UZ ---------------- */
function UzAnswer() {
  return (
    <p>
      SBP (СБП — Система быстрых платежей) — Rossiya Markaziy banki va NSPK boshqaruvidagi banklararo tezkor to‘lov
      tizimi. U mijozga QR-kod yoki telefon raqami orqali bir necha soniyada rublda to‘lov qilish imkonini beradi.
      Biznes uchun SBP API tez, arzon va avtomatik rubl to‘lovlarini qabul qilish yo‘lidir.
    </p>
  );
}

function UzBody() {
  return (
    <>
      <h2 id="nima">SBP nima?</h2>
      <p>
        SBP (Faster Payments System) — banklar o‘rtasida bir zumda pul o‘tkazish imkonini beruvchi tizim. U 2019-yilda
        ishga tushgan va Rossiyada keng qo‘llaniladi. Foydalanuvchi karta raqamini emas, balki QR-kod yoki telefon
        raqamini ishlatadi — bu to‘lovni sodda va tez qiladi.
      </p>

      <h2 id="kimlar">Kimlar foydalanishi mumkin?</h2>
      <KeyFacts label="SBP foydalanuvchilari">
        <li>Jismoniy shaxslar — do‘stga yoki do‘konga to‘lov.</li>
        <li>Onlayn do‘konlar va xizmatlar — rublda to‘lov qabul qilish.</li>
        <li>Botlar va reseller’lar — Stars/Premium sotuvi uchun rubl to‘lovi.</li>
        <li>Xizmat provayderlari — obuna va raqamli mahsulotlar.</li>
      </KeyFacts>

      <h2 id="jarayon">To‘lov jarayoni qanday kechadi?</h2>
      <Steps>
        <Step title="1. To‘lov so‘rovi">
          Do‘kon SBP orqali summa bilan QR yoki to‘lov havolasini yaratadi.
        </Step>
        <Step title="2. Skanerlash">
          Mijoz o‘z bank ilovasida QR-ni skanerlaydi yoki raqam bo‘yicha to‘lovni tanlaydi.
        </Step>
        <Step title="3. Tasdiqlash">
          Mijoz to‘lovni tasdiqlaydi — mablag‘ bir zumda o‘tadi.
        </Step>
        <Step title="4. Bildirishnoma">
          Do‘konga to‘lov tasdig‘i (webhook/notification) keladi va buyurtma yopiladi.
        </Step>
      </Steps>

      <InlineCta text="SBP’ni biznesingizga ulamoqchimisiz? Business bilan bog‘laning." />

      <h2 id="banklar">Banklar bilan qanday ishlaydi?</h2>
      <p>
        SBP NSPK (Milliy to‘lov kartalari tizimi) infratuzilmasi orqali banklarni bog‘laydi. To‘lov bitta bankdan
        boshqasiga to‘g‘ridan-to‘g‘ri o‘tadi — oraliq kunlar yoki uzoq kutish yo‘q. Biznes uchun bu tezkor
        hisob-kitob va kam operatsion yuk degani.
      </p>

      <h2 id="taqqoslash">SBP va karta to‘lovi</h2>
      <CompareTable
        headers={["Xususiyat", "SBP", "Oddiy karta"]}
        rows={[
          ["Vosita", "QR / telefon raqami", "Karta raqami + CVV"],
          ["Tezlik", <Yes>soniyalar</Yes>, <>daqiqalar</>],
          ["Karta ma’lumoti", <No>kerak emas</No>, <Yes>kerak</Yes>],
          ["Komissiya", <>odatda past</>, <>o‘zgaruvchan</>],
          ["Mijoz uchun qulaylik", <Yes>yuqori</Yes>, <>o‘rtacha</>],
        ]}
      />

      <h2 id="xavfsizlik">Xavfsizlik va komissiyalar</h2>
      <p>
        SBP bank darajasidagi xavfsizlik bilan ishlaydi; to‘lov mijozning bank ilovasi ichida tasdiqlanadi.
        Komissiyalar odatda karta ekvayringidan past bo‘lishi mumkin, aniq foiz esa integratsiya va hajmga bog‘liq.
        API bilan ulash uchun{" "}
        <Link href="/blog/sbp-api-rossiya-rubl-tolov">SBP API</Link> va{" "}
        <Link href="/blog/sbp-api-faq-savollar">SBP FAQ</Link>ni ko‘ring;{" "}
        <Link href="/business">Business</Link> sahifasida umumiy imkoniyatlar.
      </p>

      <Sources
        label="Manbalar"
        items={[
          { href: "https://sbp.nspk.ru/", label: "sbp.nspk.ru", note: "SBP (НСПК) rasmiy sayti" },
          { href: "https://www.cbr.ru/", label: "cbr.ru", note: "Rossiya Markaziy banki" },
        ]}
      />
    </>
  );
}

/* ---------------- RU ---------------- */
function RuAnswer() {
  return (
    <p>
      СБП (Система быстрых платежей) — межбанковская система мгновенных платежей под управлением Банка России и НСПК.
      Она позволяет клиенту платить в рублях по QR‑коду или номеру телефона за несколько секунд. Для бизнеса SBP API
      — быстрый, дешёвый и автоматический способ принимать рублёвые платежи.
    </p>
  );
}

function RuBody() {
  return (
    <>
      <h2 id="nima">Что такое СБП?</h2>
      <p>
        СБП (Система быстрых платежей) — система мгновенных переводов между банками. Запущена в 2019 году и широко
        используется в России. Пользователь применяет не номер карты, а QR‑код или номер телефона — это делает оплату
        простой и быстрой.
      </p>

      <h2 id="kimlar">Кто может пользоваться?</h2>
      <KeyFacts label="Пользователи СБП">
        <li>Физлица — оплата другу или в магазин.</li>
        <li>Онлайн‑магазины и сервисы — приём оплаты в рублях.</li>
        <li>Боты и реселлеры — рублёвая оплата за продажу Stars/Premium.</li>
        <li>Провайдеры услуг — подписки и цифровые товары.</li>
      </KeyFacts>

      <h2 id="jarayon">Как проходит платёж?</h2>
      <Steps>
        <Step title="1. Запрос оплаты">
          Магазин создаёт через СБП QR или ссылку на оплату с суммой.
        </Step>
        <Step title="2. Сканирование">
          Клиент сканирует QR в банковском приложении или выбирает оплату по номеру.
        </Step>
        <Step title="3. Подтверждение">
          Клиент подтверждает оплату — средства проходят мгновенно.
        </Step>
        <Step title="4. Уведомление">
          Магазину приходит подтверждение (webhook/уведомление), заказ закрывается.
        </Step>
      </Steps>

      <InlineCta text="Хотите подключить СБП к бизнесу? Свяжитесь с Business." />

      <h2 id="banklar">Как работает с банками?</h2>
      <p>
        СБП связывает банки через инфраструктуру НСПК (Национальная система платёжных карт). Платёж идёт напрямую из
        одного банка в другой — без промежуточных дней и долгого ожидания. Для бизнеса это быстрые расчёты и меньшая
        операционная нагрузка.
      </p>

      <h2 id="taqqoslash">СБП и оплата картой</h2>
      <CompareTable
        headers={["Свойство", "СБП", "Обычная карта"]}
        rows={[
          ["Инструмент", "QR / номер телефона", "Номер карты + CVV"],
          ["Скорость", <Yes>секунды</Yes>, <>минуты</>],
          ["Данные карты", <No>не нужны</No>, <Yes>нужны</Yes>],
          ["Комиссия", <>обычно ниже</>, <>переменная</>],
          ["Удобство для клиента", <Yes>высокое</Yes>, <>среднее</>],
        ]}
      />

      <h2 id="xavfsizlik">Безопасность и комиссии</h2>
      <p>
        СБП работает с безопасностью банковского уровня; оплата подтверждается внутри банковского приложения клиента.
        Комиссии обычно могут быть ниже, чем при карточном эквайринге, а точный процент зависит от интеграции и
        объёма. Для подключения по API смотрите{" "}
        <Link href="/blog/sbp-api-rossiya-rubl-tolov">SBP API</Link> и{" "}
        <Link href="/blog/sbp-api-faq-savollar">FAQ SBP</Link>; общие возможности — на странице{" "}
        <Link href="/business">Business</Link>.
      </p>

      <Sources
        label="Источники"
        items={[
          { href: "https://sbp.nspk.ru/", label: "sbp.nspk.ru", note: "официальный сайт СБП (НСПК)" },
          { href: "https://www.cbr.ru/", label: "cbr.ru", note: "Банк России" },
        ]}
      />
    </>
  );
}

/* ---------------- EN ---------------- */
function EnAnswer() {
  return (
    <p>
      SBP (Faster Payments System, Russian «СБП») is an interbank instant payment system governed by the Bank of
      Russia and NSPK. It lets a customer pay in rubles via a QR code or phone number in a few seconds. For business,
      the SBP API is a fast, cheap and automatic way to accept ruble payments.
    </p>
  );
}

function EnBody() {
  return (
    <>
      <h2 id="nima">What is SBP?</h2>
      <p>
        SBP (Faster Payments System) is a system for instant transfers between banks. It launched in 2019 and is
        widely used in Russia. The user uses not a card number but a QR code or phone number — which makes payment
        simple and fast.
      </p>

      <h2 id="kimlar">Who can use it?</h2>
      <KeyFacts label="SBP users">
        <li>Individuals — paying a friend or a shop.</li>
        <li>Online shops and services — accepting payment in rubles.</li>
        <li>Bots and resellers — ruble payment for selling Stars/Premium.</li>
        <li>Service providers — subscriptions and digital goods.</li>
      </KeyFacts>

      <h2 id="jarayon">How does the payment flow?</h2>
      <Steps>
        <Step title="1. Payment request">
          The shop creates a QR or payment link with the amount via SBP.
        </Step>
        <Step title="2. Scan">
          The customer scans the QR in their bank app or chooses payment by number.
        </Step>
        <Step title="3. Confirm">
          The customer confirms the payment — funds transfer instantly.
        </Step>
        <Step title="4. Notification">
          The shop receives confirmation (webhook/notification) and the order is closed.
        </Step>
      </Steps>

      <InlineCta text="Want to connect SBP to your business? Contact Business." />

      <h2 id="banklar">How does it work with banks?</h2>
      <p>
        SBP links banks through the NSPK (National Payment Card System) infrastructure. Payment goes directly from one
        bank to another — with no intermediate days or long waiting. For business this means fast settlement and less
        operational load.
      </p>

      <h2 id="taqqoslash">SBP vs card payment</h2>
      <CompareTable
        headers={["Feature", "SBP", "Regular card"]}
        rows={[
          ["Instrument", "QR / phone number", "Card number + CVV"],
          ["Speed", <Yes>seconds</Yes>, <>minutes</>],
          ["Card data", <No>not needed</No>, <Yes>needed</Yes>],
          ["Fee", <>usually lower</>, <>variable</>],
          ["Customer convenience", <Yes>high</Yes>, <>medium</>],
        ]}
      />

      <h2 id="xavfsizlik">Security and fees</h2>
      <p>
        SBP works with bank‑level security; payment is confirmed inside the customer's bank app. Fees can usually be
        lower than card acquiring, and the exact percentage depends on the integration and volume. To connect via API
        see{" "}
        <Link href="/blog/sbp-api-rossiya-rubl-tolov">SBP API</Link> and{" "}
        <Link href="/blog/sbp-api-faq-savollar">SBP FAQ</Link>; general capabilities are on the{" "}
        <Link href="/business">Business</Link> page.
      </p>

      <Sources
        label="Sources"
        items={[
          { href: "https://sbp.nspk.ru/", label: "sbp.nspk.ru", note: "official SBP (NSPK) site" },
          { href: "https://www.cbr.ru/", label: "cbr.ru", note: "Bank of Russia" },
        ]}
      />
    </>
  );
}

const uzFaq = [
  { question: "SBP nima?", answer: "Система быстрых платежей — Rossiya banklararo tezkor to‘lov tizimi. QR yoki telefon raqami orqali rublda bir zumda to‘lash imkonini beradi." },
  { question: "SBP qanday ishlaydi?", answer: "Do‘kon QR/havola yaratadi, mijoz bank ilovasida to‘laydi, mablag‘ bir zumda o‘tadi va do‘konga tasdiq keladi." },
  { question: "SBP’ni kim boshqaradi?", answer: "Rossiya Markaziy banki va NSPK (Milliy to‘lov kartalari tizimi)." },
  { question: "Karta raqami kerakmi?", answer: "Yo‘q. QR-kod yoki telefon raqami yetarli — karta ma’lumotini kiritish shart emas." },
  { question: "To‘lov qancha vaqt oladi?", answer: "Odatda bir necha soniya — SBP tezkor tizim." },
  { question: "Qaysi banklar ishlaydi?", answer: "SBP’ga ulangan ko‘plab Rossiya banklari; ro‘yxat kengaymoqda." },
  { question: "Biznes uchun afzalligi nima?", answer: "Tez hisob-kitob, past komissiya imkoniyati va avtomatlashtirish." },
  { question: "Komissiya qancha?", answer: "Odatda karta ekvayringidan past bo‘lishi mumkin; aniq foiz integratsiya va hajmga bog‘liq." },
  { question: "Xavfsizmi?", answer: "Ha. To‘lov mijozning bank ilovasida tasdiqlanadi, bank darajasidagi himoya." },
  { question: "Onlayn do‘kon ulasa bo‘ladimi?", answer: "Ha. SBP API orqali sayt yoki botga ulanadi." },
  { question: "QR statik yoki dinamikmi?", answer: "Ikkalasi ham bo‘lishi mumkin; dinamik QR summa bilan generatsiya qilinadi." },
  { question: "Webhook bormi?", answer: "Ha. To‘lov tasdig‘i webhook orqali qaytadi." },
  { question: "Refund bormi?", answer: "Yetkazilmagan buyurtma hisob-kitob siyosatiga ko‘ra qaytariladi." },
  { question: "SBP va oddiy o‘tkazma farqi?", answer: "SBP tezkor va QR/raqam orqali; oddiy o‘tkazma sekinroq va rekvizit talab qiladi." },
  { question: "O‘zbekistonda ishlaydimi?", answer: "SBP Rossiya tizimi; O‘zbekiston uchun Click/Payme mos. Ikkalasi StarsPaymee Business’da bor." },
  { question: "Stars/Premium sotuviga ulanadimi?", answer: "Ha. Rubl to‘lovi Stars/Premium/Gifts yetkazishga bog‘lanadi." },
  { question: "Ariza qanday beriladi?", answer: "StarsPaymee Business sahifasidan ariza qoldirasiz." },
  { question: "Hujjat beriladimi?", answer: "Ha. Integratsiya hujjati va misollar beriladi." },
  { question: "Support bormi?", answer: "Ha, @StarsPaymeeSupport orqali." },
  { question: "Sandbox bormi?", answer: "Ha. Test muhitida oqim tekshiriladi." },
];

const ruFaq = [
  { question: "Что такое СБП?", answer: "Система быстрых платежей — российская межбанковская система мгновенных платежей. Позволяет платить в рублях по QR или номеру телефона мгновенно." },
  { question: "Как работает СБП?", answer: "Магазин создаёт QR/ссылку, клиент платит в банковском приложении, средства проходят мгновенно, магазину приходит подтверждение." },
  { question: "Кто управляет СБП?", answer: "Банк России и НСПК (Национальная система платёжных карт)." },
  { question: "Нужен ли номер карты?", answer: "Нет. Достаточно QR‑кода или номера телефона — вводить данные карты не нужно." },
  { question: "Сколько занимает платёж?", answer: "Обычно несколько секунд — СБП мгновенная система." },
  { question: "Какие банки работают?", answer: "Многие банки России, подключённые к СБП; список расширяется." },
  { question: "В чём выгода для бизнеса?", answer: "Быстрые расчёты, возможность более низкой комиссии и автоматизация." },
  { question: "Какая комиссия?", answer: "Обычно может быть ниже карточного эквайринга; точный процент зависит от интеграции и объёма." },
  { question: "Это безопасно?", answer: "Да. Оплата подтверждается в банковском приложении клиента, защита банковского уровня." },
  { question: "Можно ли подключить онлайн‑магазин?", answer: "Да. Через SBP API подключается к сайту или боту." },
  { question: "QR статический или динамический?", answer: "Может быть и тем, и другим; динамический QR генерируется с суммой." },
  { question: "Есть ли webhook?", answer: "Да. Подтверждение оплаты приходит через webhook." },
  { question: "Есть ли возврат?", answer: "Недоставленный заказ возвращается по политике расчётов." },
  { question: "Отличие СБП от обычного перевода?", answer: "СБП мгновенный и по QR/номеру; обычный перевод медленнее и требует реквизитов." },
  { question: "Работает ли в Узбекистане?", answer: "СБП — российская система; для Узбекистана подходят Click/Payme. Оба есть в StarsPaymee Business." },
  { question: "Связывается ли с продажей Stars/Premium?", answer: "Да. Оплата в рублях связывается с доставкой Stars/Premium/Gifts." },
  { question: "Как подать заявку?", answer: "Оставьте заявку на странице StarsPaymee Business." },
  { question: "Дают ли документацию?", answer: "Да. Документация по интеграции и примеры." },
  { question: "Есть ли поддержка?", answer: "Да, через @StarsPaymeeSupport." },
  { question: "Есть ли Sandbox?", answer: "Да. Поток проверяется в тестовой среде." },
];

const enFaq = [
  { question: "What is SBP?", answer: "The Faster Payments System — Russia's interbank instant payment system. It lets you pay in rubles via QR or phone number instantly." },
  { question: "How does SBP work?", answer: "The shop creates a QR/link, the customer pays in their bank app, funds transfer instantly and the shop receives confirmation." },
  { question: "Who governs SBP?", answer: "The Bank of Russia and NSPK (National Payment Card System)." },
  { question: "Is a card number needed?", answer: "No. A QR code or phone number is enough — no need to enter card data." },
  { question: "How long does a payment take?", answer: "Usually a few seconds — SBP is an instant system." },
  { question: "Which banks work?", answer: "Many Russian banks connected to SBP; the list keeps expanding." },
  { question: "What's the benefit for business?", answer: "Fast settlement, potential lower fees and automation." },
  { question: "What is the fee?", answer: "It can usually be lower than card acquiring; the exact percentage depends on the integration and volume." },
  { question: "Is it secure?", answer: "Yes. Payment is confirmed in the customer's bank app, with bank‑level protection." },
  { question: "Can I connect an online shop?", answer: "Yes. It connects to a site or bot via the SBP API." },
  { question: "Is the QR static or dynamic?", answer: "It can be either; a dynamic QR is generated with the amount." },
  { question: "Is there a webhook?", answer: "Yes. Payment confirmation arrives via webhook." },
  { question: "Is there a refund?", answer: "An undelivered order is refunded per the settlement policy." },
  { question: "How is SBP different from a regular transfer?", answer: "SBP is instant and via QR/number; a regular transfer is slower and requires requisites." },
  { question: "Does it work in Uzbekistan?", answer: "SBP is a Russian system; for Uzbekistan Click/Payme fit. Both are in StarsPaymee Business." },
  { question: "Does it link to Stars/Premium selling?", answer: "Yes. Ruble payment is linked to Stars/Premium/Gifts delivery." },
  { question: "How do I apply?", answer: "Submit a request on the StarsPaymee Business page." },
  { question: "Is documentation provided?", answer: "Yes. Integration docs and examples." },
  { question: "Is there support?", answer: "Yes, via @StarsPaymeeSupport." },
  { question: "Is there a Sandbox?", answer: "Yes. The flow is tested in a test environment." },
];

export const post: AeoPost = {
  slug: SLUG,
  category: "Biznes",
  type: "info",
  datePublished: "2026-07-15",
  dateModified: "2026-07-15",
  keywords: [
    "sbp payment",
    "система быстрых платежей",
    "sbp payment gateway",
    "sbp integration",
    "russian payment gateway",
    "russia payment integration",
  ],
  locales: {
    uz: {
      title: "SBP (СБП) to‘lov tizimi qanday ishlaydi? To‘liq qo‘llanma",
      excerpt:
        "SBP nima, kim foydalanadi, banklar bilan qanday ishlaydi, to‘lov jarayoni, xavfsizlik va komissiyalar — biznes uchun to‘liq qo‘llanma. QR/raqam orqali rublda tezkor to‘lov. 20 savol-javob.",
      metaTitle: "SBP (СБП) to‘lov tizimi qanday ishlaydi — qo‘llanma 2026",
      metaDescription:
        "SBP to‘lov tizimi: nima, kim foydalanadi, banklar, to‘lov jarayoni, xavfsizlik va komissiyalar. QR/raqam orqali rublda tezkor to‘lov — 20 savol-javob.",
      answerTitle: "Qisqa javob",
      Answer: UzAnswer,
      Body: UzBody,
      ctaHeading: "SBP’ni biznesingizga ulang",
      ctaBody: "StarsPaymee Business orqali SBP bilan rubl to‘lovini avtomatik qabul qiling.",
      faq: uzFaq,
    },
    ru: {
      title: "Как работает платёжная система СБП? Полное руководство",
      excerpt:
        "Что такое СБП, кто пользуется, как работает с банками, процесс оплаты, безопасность и комиссии — полное руководство для бизнеса. Мгновенная оплата в рублях по QR/номеру. 20 вопросов‑ответов.",
      metaTitle: "Как работает платёжная система СБП — руководство 2026",
      metaDescription:
        "Платёжная система СБП: что это, кто пользуется, банки, процесс оплаты, безопасность и комиссии. Мгновенная оплата в рублях по QR/номеру — 20 вопросов‑ответов.",
      answerTitle: "Краткий ответ",
      Answer: RuAnswer,
      Body: RuBody,
      ctaHeading: "Подключите СБП к бизнесу",
      ctaBody: "Через StarsPaymee Business принимайте оплату в рублях автоматически с СБП.",
      faq: ruFaq,
    },
    en: {
      title: "How does the SBP payment system work? A full guide",
      excerpt:
        "What SBP is, who uses it, how it works with banks, the payment process, security and fees — a full guide for business. Instant ruble payment via QR/number. 20 Q&A.",
      metaTitle: "How the SBP payment system works — a guide 2026",
      metaDescription:
        "The SBP payment system: what it is, who uses it, banks, the payment process, security and fees. Instant ruble payment via QR/number — 20 Q&A.",
      answerTitle: "Short answer",
      Answer: EnAnswer,
      Body: EnBody,
      ctaHeading: "Connect SBP to your business",
      ctaBody: "Through StarsPaymee Business, accept ruble payments automatically with SBP.",
      faq: enFaq,
    },
  },
};
