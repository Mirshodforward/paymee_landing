import { Link } from "@/i18n/navigation";
import { InlineCta, Sources, KeyFacts, Steps, Step } from "@/components/blog/aeo-blocks";
import type { AeoPost } from "@/lib/blog-aeo/types";

const SLUG = "telegram-stars-api-webhook-integratsiya";

/* ---------------- UZ ---------------- */
function UzAnswer() {
  return (
    <p>
      Webhook — StarsPaymee API buyurtma yoki to‘lov holati o‘zgarganda sizning serveringizga avtomatik yuboradigan
      HTTP so‘rov. Uning yordamida siz statusni doim so‘rab turmaysiz (polling), aksincha, «delivered» yoki «failed»
      hodisasi kelishi bilan mijozga darhol javob berasiz. Webhook — avtomatik integratsiyaning yuragi.
    </p>
  );
}

function UzBody() {
  return (
    <>
      <h2 id="nima">Webhook nima va nega kerak?</h2>
      <p>
        Polling’da siz har necha soniyada «buyurtma tayyormi?» deb so‘raysiz — bu resurs sarflaydi va sekin. Webhook’da
        esa API o‘zi hodisa yuz berishi bilan sizga xabar yuboradi. Bu tezroq, arzonroq va real vaqtga yaqin.
      </p>

      <KeyFacts label="Webhook’da nima keladi?">
        <li>Hodisa turi — order.delivered, order.failed, payment.success.</li>
        <li>Buyurtma ID va status.</li>
        <li>Vaqt belgisi (timestamp).</li>
        <li>Imzo (signature) — haqiqiylikni tekshirish uchun.</li>
      </KeyFacts>

      <h2 id="qadamlar">Webhook’ni qanday ulash mumkin?</h2>
      <Steps>
        <Step title="1. URL bering">
          StarsPaymee panelida webhook manzilingizni (HTTPS) ko‘rsatasiz.
        </Step>
        <Step title="2. Imzoni tekshiring">
          Har bir kelgan so‘rovda signature’ni maxfiy kalit bilan tekshirasiz.
        </Step>
        <Step title="3. Idempotency">
          Bir hodisa ID’sini saqlab, takror kelsa qayta ishlamaysiz.
        </Step>
        <Step title="4. Tez javob">
          200 OK qaytarasiz; og‘ir ishni navbatga (queue) qo‘yasiz.
        </Step>
      </Steps>

      <InlineCta text="Webhook integratsiyasi kerakmi? Business bilan bog‘laning." />

      <h2 id="best">Yaxshi amaliyotlar</h2>
      <KeyFacts label="Ishonchli webhook uchun">
        <li>Faqat HTTPS ishlating.</li>
        <li>Imzoni har doim tekshiring.</li>
        <li>Idempotency kaliti bilan takrorni oldini oling.</li>
        <li>Qayta urinish (retry) siyosatini hisobga oling.</li>
        <li>Hodisalarni loglang va monitoring qiling.</li>
      </KeyFacts>

      <p>
        Bog‘liq:{" "}
        <Link href="/blog/telegram-stars-api-nima-ulanish">Stars API</Link>,{" "}
        <Link href="/blog/click-api-avtomatik-tolov-qabul">Click callback</Link> va{" "}
        <Link href="/blog/botga-tolov-api-ulash-qollanma">botga to‘lov API ulash</Link>.
      </p>

      <Sources
        label="Manbalar"
        items={[
          { href: "https://core.telegram.org/bots/webhooks", label: "core.telegram.org/bots/webhooks", note: "Webhook qo‘llanmasi" },
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
      Webhook — HTTP‑запрос, который API StarsPaymee автоматически отправляет на ваш сервер при смене статуса заказа
      или оплаты. Благодаря ему вы не опрашиваете статус постоянно (polling), а сразу реагируете, как только приходит
      событие «delivered» или «failed». Webhook — сердце автоматической интеграции.
    </p>
  );
}

function RuBody() {
  return (
    <>
      <h2 id="nima">Что такое webhook и зачем он нужен?</h2>
      <p>
        При polling вы каждые несколько секунд спрашиваете «заказ готов?» — это тратит ресурсы и медленно. При webhook
        API сам уведомляет вас, как только произошло событие. Это быстрее, дешевле и ближе к реальному времени.
      </p>

      <KeyFacts label="Что приходит в webhook?">
        <li>Тип события — order.delivered, order.failed, payment.success.</li>
        <li>ID заказа и статус.</li>
        <li>Отметка времени (timestamp).</li>
        <li>Подпись (signature) — для проверки подлинности.</li>
      </KeyFacts>

      <h2 id="qadamlar">Как подключить webhook?</h2>
      <Steps>
        <Step title="1. Укажите URL">
          В панели StarsPaymee укажите адрес webhook (HTTPS).
        </Step>
        <Step title="2. Проверяйте подпись">
          В каждом запросе проверяйте signature секретным ключом.
        </Step>
        <Step title="3. Идемпотентность">
          Сохраняйте ID события и не обрабатывайте повтор.
        </Step>
        <Step title="4. Быстрый ответ">
          Возвращайте 200 OK; тяжёлую работу ставьте в очередь.
        </Step>
      </Steps>

      <InlineCta text="Нужна интеграция webhook? Свяжитесь с Business." />

      <h2 id="best">Лучшие практики</h2>
      <KeyFacts label="Для надёжного webhook">
        <li>Используйте только HTTPS.</li>
        <li>Всегда проверяйте подпись.</li>
        <li>Предотвращайте повтор ключом идемпотентности.</li>
        <li>Учитывайте политику повторов (retry).</li>
        <li>Логируйте и мониторьте события.</li>
      </KeyFacts>

      <p>
        Связанное:{" "}
        <Link href="/blog/telegram-stars-api-nima-ulanish">Stars API</Link>,{" "}
        <Link href="/blog/click-api-avtomatik-tolov-qabul">callback Click</Link> и{" "}
        <Link href="/blog/botga-tolov-api-ulash-qollanma">подключение платёжного API к боту</Link>.
      </p>

      <Sources
        label="Источники"
        items={[
          { href: "https://core.telegram.org/bots/webhooks", label: "core.telegram.org/bots/webhooks", note: "руководство по webhook" },
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
      A webhook is an HTTP request that the StarsPaymee API sends to your server automatically when an order or
      payment status changes. Thanks to it you don't poll the status constantly — instead you react as soon as a
      «delivered» or «failed» event arrives. The webhook is the heart of automatic integration.
    </p>
  );
}

function EnBody() {
  return (
    <>
      <h2 id="nima">What is a webhook and why is it needed?</h2>
      <p>
        With polling you ask «is the order ready?» every few seconds — which wastes resources and is slow. With a
        webhook the API notifies you as soon as an event happens. It's faster, cheaper and closer to real time.
      </p>

      <KeyFacts label="What arrives in a webhook?">
        <li>Event type — order.delivered, order.failed, payment.success.</li>
        <li>Order ID and status.</li>
        <li>A timestamp.</li>
        <li>A signature — to verify authenticity.</li>
      </KeyFacts>

      <h2 id="qadamlar">How do I connect a webhook?</h2>
      <Steps>
        <Step title="1. Provide a URL">
          In the StarsPaymee panel provide your webhook URL (HTTPS).
        </Step>
        <Step title="2. Verify the signature">
          Verify the signature with a secret key on every incoming request.
        </Step>
        <Step title="3. Idempotency">
          Store the event ID and don't reprocess a repeat.
        </Step>
        <Step title="4. Respond quickly">
          Return 200 OK; put heavy work in a queue.
        </Step>
      </Steps>

      <InlineCta text="Need webhook integration? Contact Business." />

      <h2 id="best">Best practices</h2>
      <KeyFacts label="For a reliable webhook">
        <li>Use HTTPS only.</li>
        <li>Always verify the signature.</li>
        <li>Prevent repeats with an idempotency key.</li>
        <li>Account for a retry policy.</li>
        <li>Log and monitor events.</li>
      </KeyFacts>

      <p>
        Related:{" "}
        <Link href="/blog/telegram-stars-api-nima-ulanish">Stars API</Link>,{" "}
        <Link href="/blog/click-api-avtomatik-tolov-qabul">Click callback</Link> and{" "}
        <Link href="/blog/botga-tolov-api-ulash-qollanma">connecting a payment API to a bot</Link>.
      </p>

      <Sources
        label="Sources"
        items={[
          { href: "https://core.telegram.org/bots/webhooks", label: "core.telegram.org/bots/webhooks", note: "webhook guide" },
          { href: "https://core.telegram.org/bots/payments", label: "core.telegram.org/bots/payments", note: "bot payments" },
        ]}
      />
    </>
  );
}

const uzFaq = [
  { question: "Webhook nima?", answer: "API buyurtma/to‘lov holati o‘zgarganda serveringizga yuboradigan avtomatik HTTP so‘rov." },
  { question: "Webhook va polling farqi?", answer: "Polling’da siz so‘rab turasiz; webhook’da API o‘zi xabar yuboradi — tezroq va arzonroq." },
  { question: "Webhook’ni qanday ulayman?", answer: "Panelda HTTPS URL bering; imzoni tekshiring va 200 OK qaytaring." },
  { question: "Qanday hodisalar keladi?", answer: "order.delivered, order.failed, payment.success va boshqalar." },
  { question: "Imzo (signature) nima uchun?", answer: "So‘rov haqiqiyligini tekshirish uchun — soxta webhook rad etiladi." },
  { question: "Idempotency nima?", answer: "Bir hodisa ikki marta kelsa, qayta ishlamaslik mexanizmi (ID bo‘yicha)." },
  { question: "Qanchada javob berish kerak?", answer: "Tez — 200 OK; og‘ir ishni navbatga qo‘ying." },
  { question: "Retry bo‘ladimi?", answer: "Ha. Yetkazilmasa API qayta urinishi mumkin; idempotency bilan xavfsiz." },
  { question: "HTTPS shartmi?", answer: "Ha. Xavfsizlik uchun faqat HTTPS." },
  { question: "Test qilsam bo‘ladimi?", answer: "Ha. Sandbox’da webhook oqimini sinash mumkin." },
  { question: "Loglar kerakmi?", answer: "Ha. Hodisalarni loglang va monitoring qiling." },
  { question: "Webhook kelmasa nima qilaman?", answer: "Zaxira sifatida GET /orders/{id} bilan status tekshiriladi." },
  { question: "Bir nechta hodisaga obuna bo‘lsam bo‘ladimi?", answer: "Ha. Kerakli hodisa turlariga obuna bo‘lasiz." },
  { question: "Click callback bilan bog‘liqmi?", answer: "O‘xshash tamoyil; Click callback to‘lovni, webhook yetkazishni bildiradi." },
  { question: "Xavfsizlik uchun yana nima?", answer: "IP cheklovi, maxfiy kalit va vaqt belgisini tekshirish." },
  { question: "JSON formatidami?", answer: "Ha. Webhook tanasi JSON ko‘rinishida." },
  { question: "Hujjat beriladimi?", answer: "Ha. Hodisa formati va imzo tekshiruvi bilan." },
  { question: "Qanday boshlayman?", answer: "StarsPaymee Business sahifasidan ariza qoldiring." },
];

const ruFaq = [
  { question: "Что такое webhook?", answer: "Автоматический HTTP‑запрос, который API шлёт на ваш сервер при смене статуса заказа/оплаты." },
  { question: "Разница webhook и polling?", answer: "При polling вы опрашиваете; при webhook API сам уведомляет — быстрее и дешевле." },
  { question: "Как подключить webhook?", answer: "Укажите HTTPS URL в панели; проверяйте подпись и возвращайте 200 OK." },
  { question: "Какие события приходят?", answer: "order.delivered, order.failed, payment.success и другие." },
  { question: "Зачем подпись (signature)?", answer: "Для проверки подлинности запроса — поддельный webhook отклоняется." },
  { question: "Что такое идемпотентность?", answer: "Механизм не обрабатывать повтор события (по ID)." },
  { question: "Как быстро отвечать?", answer: "Быстро — 200 OK; тяжёлую работу в очередь." },
  { question: "Будет ли retry?", answer: "Да. При недоставке API может повторить; с идемпотентностью безопасно." },
  { question: "HTTPS обязателен?", answer: "Да. Для безопасности только HTTPS." },
  { question: "Можно ли тестировать?", answer: "Да. Поток webhook можно проверить в Sandbox." },
  { question: "Нужны ли логи?", answer: "Да. Логируйте и мониторьте события." },
  { question: "Что если webhook не пришёл?", answer: "Как резерв статус проверяется через GET /orders/{id}." },
  { question: "Можно ли подписаться на несколько событий?", answer: "Да. Подписываетесь на нужные типы событий." },
  { question: "Связан ли с callback Click?", answer: "Похожий принцип; callback Click — про оплату, webhook — про доставку." },
  { question: "Что ещё для безопасности?", answer: "Ограничение IP, секретный ключ и проверка отметки времени." },
  { question: "В формате JSON?", answer: "Да. Тело webhook в виде JSON." },
  { question: "Дают ли документацию?", answer: "Да. С форматом события и проверкой подписи." },
  { question: "Как начать?", answer: "Оставьте заявку на странице StarsPaymee Business." },
];

const enFaq = [
  { question: "What is a webhook?", answer: "An automatic HTTP request the API sends to your server when an order/payment status changes." },
  { question: "Difference between webhook and polling?", answer: "With polling you ask; with a webhook the API notifies you — faster and cheaper." },
  { question: "How do I connect a webhook?", answer: "Provide an HTTPS URL in the panel; verify the signature and return 200 OK." },
  { question: "Which events arrive?", answer: "order.delivered, order.failed, payment.success and others." },
  { question: "Why a signature?", answer: "To verify the request's authenticity — a fake webhook is rejected." },
  { question: "What is idempotency?", answer: "A mechanism to not reprocess a repeated event (by ID)." },
  { question: "How fast should I respond?", answer: "Fast — 200 OK; put heavy work in a queue." },
  { question: "Will there be retries?", answer: "Yes. On non‑delivery the API may retry; safe with idempotency." },
  { question: "Is HTTPS required?", answer: "Yes. For security, HTTPS only." },
  { question: "Can I test it?", answer: "Yes. The webhook flow can be tested in the Sandbox." },
  { question: "Are logs needed?", answer: "Yes. Log and monitor events." },
  { question: "What if the webhook didn't arrive?", answer: "As a fallback the status is checked via GET /orders/{id}." },
  { question: "Can I subscribe to several events?", answer: "Yes. You subscribe to the event types you need." },
  { question: "Is it related to the Click callback?", answer: "A similar principle; the Click callback is about payment, the webhook about delivery." },
  { question: "What else for security?", answer: "IP restriction, a secret key and timestamp verification." },
  { question: "Is it in JSON?", answer: "Yes. The webhook body is in JSON." },
  { question: "Is documentation provided?", answer: "Yes. With the event format and signature verification." },
  { question: "How do I start?", answer: "Submit a request on the StarsPaymee Business page." },
];

export const post: AeoPost = {
  slug: SLUG,
  category: "Biznes",
  type: "howto",
  datePublished: "2026-07-10",
  dateModified: "2026-07-10",
  keywords: [
    "telegram stars api webhook",
    "webhook integration",
    "stars api webhook",
    "webhook signature idempotency",
    "payment webhook",
    "telegram api webhook",
  ],
  howToSteps: [
    { name: "URL bering", text: "Panelda HTTPS webhook manzilini ko‘rsating." },
    { name: "Imzoni tekshiring", text: "Har so‘rovda signature’ni maxfiy kalit bilan tekshiring." },
    { name: "Idempotency", text: "Hodisa ID’sini saqlab, takrorni qayta ishlamang." },
    { name: "Tez javob", text: "200 OK qaytaring, og‘ir ishni navbatga qo‘ying." },
  ],
  locales: {
    uz: {
      title: "Telegram Stars API webhook integratsiyasi",
      excerpt:
        "Webhook orqali buyurtma va to‘lov holatini real vaqtda oling: imzo tekshiruvi, idempotency, retry va best practice. StarsPaymee API bilan avtomatik integratsiya — 18 savol-javob.",
      metaTitle: "Telegram Stars API webhook integratsiyasi 2026",
      metaDescription:
        "Stars API webhook: imzo, idempotency, retry va best practice. Buyurtma/to‘lov statusini real vaqtda olib avtomatik integratsiya — 18 savol-javob.",
      answerTitle: "Qisqa javob",
      Answer: UzAnswer,
      Body: UzBody,
      ctaHeading: "Webhook’ni ulang",
      ctaBody: "StarsPaymee Business orqali webhook bilan real vaqtli integratsiya quring.",
      faq: uzFaq,
    },
    ru: {
      title: "Интеграция webhook для Telegram Stars API",
      excerpt:
        "Получайте статус заказа и оплаты в реальном времени через webhook: проверка подписи, идемпотентность, retry и лучшие практики. Автоинтеграция с API StarsPaymee — 18 вопросов‑ответов.",
      metaTitle: "Интеграция webhook для Telegram Stars API 2026",
      metaDescription:
        "Webhook Stars API: подпись, идемпотентность, retry и лучшие практики. Статус заказа/оплаты в реальном времени и автоинтеграция — 18 вопросов‑ответов.",
      answerTitle: "Краткий ответ",
      Answer: RuAnswer,
      Body: RuBody,
      ctaHeading: "Подключите webhook",
      ctaBody: "Через StarsPaymee Business постройте интеграцию в реальном времени с webhook.",
      faq: ruFaq,
    },
    en: {
      title: "Webhook integration for the Telegram Stars API",
      excerpt:
        "Get order and payment status in real time via webhook: signature verification, idempotency, retry and best practices. Automatic integration with the StarsPaymee API — 18 Q&A.",
      metaTitle: "Webhook integration for the Telegram Stars API 2026",
      metaDescription:
        "Stars API webhook: signature, idempotency, retry and best practices. Order/payment status in real time and automatic integration — 18 Q&A.",
      answerTitle: "Short answer",
      Answer: EnAnswer,
      Body: EnBody,
      ctaHeading: "Connect the webhook",
      ctaBody: "Through StarsPaymee Business, build a real‑time integration with webhooks.",
      faq: enFaq,
    },
  },
};
