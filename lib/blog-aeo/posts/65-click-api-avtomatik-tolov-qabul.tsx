import { Link } from "@/i18n/navigation";
import { InlineCta, Sources, KeyFacts, Steps, Step, InfoGrid, InfoCard } from "@/components/blog/aeo-blocks";
import type { AeoPost } from "@/lib/blog-aeo/types";

const SLUG = "click-api-avtomatik-tolov-qabul";

/* ---------------- UZ ---------------- */
function UzAnswer() {
  return (
    <p>
      Click API orqali avtomatik to‘lov qabul qilish uchun ikki narsa kerak: to‘lov (invoice) yaratish va Click
      callback (webhook)ni qayta ishlash. Mijoz to‘lagach Click serveringizga imzolangan callback yuboradi, siz uni
      tasdiqlaysiz va buyurtma avtomatik yakunlanadi. StarsPaymee Business bu oqimni Stars/Premium/Gifts bilan
      birga beradi.
    </p>
  );
}

function UzBody() {
  return (
    <>
      <h2 id="nima">Avtomatik to‘lov qabul qilish nima?</h2>
      <p>
        «Avtomatik» degani — hech kim qo‘lda tekshirmaydi. Mijoz to‘lovni amalga oshiradi, Click natijani callback
        orqali qaytaradi, tizim uni tasdiqlaydi va buyurtmani yopadi. Qo‘lda skrinshot yoki chek tekshirish yo‘q.
        Bu tez, xatosiz va 24/7 ishlaydi.
      </p>

      <KeyFacts label="Kerakli elementlar">
        <li><b>Prepare</b> — to‘lovni oldindan tekshirish (buyurtma mavjudmi, summa to‘g‘rimi).</li>
        <li><b>Complete</b> — to‘lov yakunini tasdiqlash va buyurtmani yopish.</li>
        <li><b>Signature</b> — har bir callback imzosini tekshirish.</li>
        <li><b>Idempotency</b> — bir callback ikki marta kelsa, ikki marta yetkazmaslik.</li>
        <li><b>Webhook</b> — natijani o‘z tizimingizga uzatish.</li>
      </KeyFacts>

      <h2 id="callback">Click callback qanday ishlaydi?</h2>
      <Steps>
        <Step title="1. Prepare so‘rovi">
          Click avval «prepare» so‘rovini yuboradi — siz buyurtma va summani tekshirib, javob qaytarasiz.
        </Step>
        <Step title="2. Complete so‘rovi">
          To‘lov yakunlangach «complete» keladi — siz imzoni tekshirib, buyurtmani «to‘langan» deb belgilaysiz.
        </Step>
        <Step title="3. Yetkazib berish">
          To‘lov tasdiqlangach Stars/Premium/Gift avtomatik yetkaziladi va status yangilanadi.
        </Step>
        <Step title="4. Mijozga xabar">
          Buyurtma yopilgani va yetkazilgani mijozga botda yoki saytda ko‘rsatiladi.
        </Step>
      </Steps>

      <InlineCta text="Avtomatik Click to‘lovini ulamoqchimisiz? Business bilan bog‘laning." />

      <h2 id="xatolar">Ko‘p uchraydigan xatolar</h2>
      <InfoGrid>
        <InfoCard emoji="🔁" title="Ikki marta yetkazish">
          Idempotency kaliti bo‘lmasa, takroriy callback ikki marta yetkazishi mumkin — ID bo‘yicha tekshiring.
        </InfoCard>
        <InfoCard emoji="🔓" title="Imzoni tekshirmaslik">
          Signature tekshirilmasa, soxta callback xavfi bor — har doim imzoni tasdiqlang.
        </InfoCard>
        <InfoCard emoji="⏳" title="Sekin javob">
          Callback’ga tez javob bermasangiz, to‘lov «shubhali» bo‘lib qolishi mumkin.
        </InfoCard>
        <InfoCard emoji="💸" title="Summani solishtirmaslik">
          Kelgan summa buyurtma summasiga tengligini har doim tekshiring.
        </InfoCard>
      </InfoGrid>

      <p>
        Batafsil:{" "}
        <Link href="/blog/click-api-rasmiy-integratsiya">Click API rasmiy integratsiyasi</Link> va{" "}
        <Link href="/blog/click-api-faq-savollar">Click API FAQ</Link>. To‘lovni yetkazib berish bilan bog‘lash uchun{" "}
        <Link href="/blog/telegram-stars-api-nima-ulanish">Stars API</Link>ni ko‘ring.
      </p>

      <Sources
        label="Manbalar"
        items={[
          { href: "https://docs.click.uz/", label: "docs.click.uz", note: "Click callback hujjati" },
          { href: "https://click.uz/", label: "click.uz", note: "Click to‘lov tizimi" },
        ]}
      />
    </>
  );
}

/* ---------------- RU ---------------- */
function RuAnswer() {
  return (
    <p>
      Чтобы принимать оплату автоматически через Click API, нужны две вещи: создание оплаты (инвойса) и обработка
      callback (webhook) от Click. После оплаты Click шлёт на ваш сервер подписанный callback, вы его подтверждаете —
      и заказ закрывается автоматически. StarsPaymee Business даёт этот поток вместе со Stars/Premium/Gifts.
    </p>
  );
}

function RuBody() {
  return (
    <>
      <h2 id="nima">Что такое автоприём оплаты?</h2>
      <p>
        «Автоматически» — значит никто не проверяет вручную. Клиент платит, Click возвращает результат через callback,
        система его подтверждает и закрывает заказ. Никаких скриншотов или ручной проверки чека. Это быстро, без
        ошибок и работает 24/7.
      </p>

      <KeyFacts label="Необходимые элементы">
        <li><b>Prepare</b> — предварительная проверка оплаты (есть ли заказ, верна ли сумма).</li>
        <li><b>Complete</b> — подтверждение завершения оплаты и закрытие заказа.</li>
        <li><b>Signature</b> — проверка подписи каждого callback.</li>
        <li><b>Idempotency</b> — если callback пришёл дважды, не доставлять дважды.</li>
        <li><b>Webhook</b> — передача результата в вашу систему.</li>
      </KeyFacts>

      <h2 id="callback">Как работает callback Click?</h2>
      <Steps>
        <Step title="1. Запрос prepare">
          Сначала Click шлёт запрос «prepare» — вы проверяете заказ и сумму и отвечаете.
        </Step>
        <Step title="2. Запрос complete">
          После завершения оплаты приходит «complete» — вы проверяете подпись и помечаете заказ «оплачен».
        </Step>
        <Step title="3. Доставка">
          После подтверждения оплаты Stars/Premium/Gift доставляется автоматически, статус обновляется.
        </Step>
        <Step title="4. Уведомление клиента">
          Клиенту в боте или на сайте показывается, что заказ закрыт и доставлен.
        </Step>
      </Steps>

      <InlineCta text="Хотите подключить автоприём оплаты Click? Свяжитесь с Business." />

      <h2 id="xatolar">Частые ошибки</h2>
      <InfoGrid>
        <InfoCard emoji="🔁" title="Двойная доставка">
          Без ключа идемпотентности повторный callback может доставить дважды — проверяйте по ID.
        </InfoCard>
        <InfoCard emoji="🔓" title="Без проверки подписи">
          Если не проверять signature, есть риск поддельного callback — всегда подтверждайте подпись.
        </InfoCard>
        <InfoCard emoji="⏳" title="Медленный ответ">
          Если не ответить callback быстро, оплата может остаться «подозрительной».
        </InfoCard>
        <InfoCard emoji="💸" title="Не сверять сумму">
          Всегда проверяйте, что пришедшая сумма равна сумме заказа.
        </InfoCard>
      </InfoGrid>

      <p>
        Подробнее:{" "}
        <Link href="/blog/click-api-rasmiy-integratsiya">официальная интеграция Click API</Link> и{" "}
        <Link href="/blog/click-api-faq-savollar">FAQ Click API</Link>. Для связи оплаты с доставкой смотрите{" "}
        <Link href="/blog/telegram-stars-api-nima-ulanish">Stars API</Link>.
      </p>

      <Sources
        label="Источники"
        items={[
          { href: "https://docs.click.uz/", label: "docs.click.uz", note: "документация callback Click" },
          { href: "https://click.uz/", label: "click.uz", note: "платёжная система Click" },
        ]}
      />
    </>
  );
}

/* ---------------- EN ---------------- */
function EnAnswer() {
  return (
    <p>
      To accept payments automatically via Click API you need two things: creating a payment (invoice) and handling
      the Click callback (webhook). After the customer pays, Click sends a signed callback to your server, you confirm
      it, and the order closes automatically. StarsPaymee Business provides this flow together with Stars/Premium/Gifts.
    </p>
  );
}

function EnBody() {
  return (
    <>
      <h2 id="nima">What is automatic payment acceptance?</h2>
      <p>
        «Automatic» means no one checks manually. The customer pays, Click returns the result via callback, the system
        confirms it and closes the order. No screenshots or manual receipt checking. It's fast, error‑free and works
        24/7.
      </p>

      <KeyFacts label="Required elements">
        <li><b>Prepare</b> — pre‑check the payment (does the order exist, is the amount correct).</li>
        <li><b>Complete</b> — confirm payment completion and close the order.</li>
        <li><b>Signature</b> — verify the signature of every callback.</li>
        <li><b>Idempotency</b> — if a callback arrives twice, don't deliver twice.</li>
        <li><b>Webhook</b> — pass the result into your own system.</li>
      </KeyFacts>

      <h2 id="callback">How does the Click callback work?</h2>
      <Steps>
        <Step title="1. Prepare request">
          Click first sends a «prepare» request — you check the order and amount and respond.
        </Step>
        <Step title="2. Complete request">
          After payment completes, «complete» arrives — you verify the signature and mark the order «paid».
        </Step>
        <Step title="3. Delivery">
          After payment is confirmed, Stars/Premium/Gift is delivered automatically and the status updates.
        </Step>
        <Step title="4. Notify the customer">
          The customer is shown in the bot or site that the order is closed and delivered.
        </Step>
      </Steps>

      <InlineCta text="Want to connect automatic Click payments? Contact Business." />

      <h2 id="xatolar">Common mistakes</h2>
      <InfoGrid>
        <InfoCard emoji="🔁" title="Double delivery">
          Without an idempotency key, a repeated callback may deliver twice — check by ID.
        </InfoCard>
        <InfoCard emoji="🔓" title="No signature check">
          If you don't verify the signature, there's a risk of a fake callback — always confirm the signature.
        </InfoCard>
        <InfoCard emoji="⏳" title="Slow response">
          If you don't respond to the callback quickly, the payment may remain «suspicious».
        </InfoCard>
        <InfoCard emoji="💸" title="Not comparing the amount">
          Always check that the received amount equals the order amount.
        </InfoCard>
      </InfoGrid>

      <p>
        See also:{" "}
        <Link href="/blog/click-api-rasmiy-integratsiya">the official Click API integration</Link> and{" "}
        <Link href="/blog/click-api-faq-savollar">Click API FAQ</Link>. To wire payment to delivery, see{" "}
        <Link href="/blog/telegram-stars-api-nima-ulanish">Stars API</Link>.
      </p>

      <Sources
        label="Sources"
        items={[
          { href: "https://docs.click.uz/", label: "docs.click.uz", note: "Click callback docs" },
          { href: "https://click.uz/", label: "click.uz", note: "Click payment system" },
        ]}
      />
    </>
  );
}

const uzFaq = [
  { question: "Click callback nima?", answer: "Click to‘lov holatini serveringizga qaytaradigan avtomatik so‘rov. Odatda prepare va complete bosqichlaridan iborat." },
  { question: "Webhook va callback bir narsami?", answer: "Amalda ha — Click callback sizning webhook manzilingizga to‘lov natijasini yuboradi." },
  { question: "Avtomatik to‘lov qanday yoqiladi?", answer: "Invoice yaratib, callback manzilini ulang; imzoni tekshirib, tasdiqdan so‘ng yetkazishni ishga tushiring." },
  { question: "Prepare va complete farqi nima?", answer: "Prepare — to‘lovdan oldin tekshirish; complete — to‘lov yakunini tasdiqlash." },
  { question: "Imzoni tekshirish shartmi?", answer: "Ha. Signature tekshirilmasa, soxta callback qabul qilinishi mumkin." },
  { question: "Ikki marta yetkazishning oldini qanday olaman?", answer: "Idempotency — buyurtma ID bo‘yicha tekshirib, allaqachon yetkazilgan bo‘lsa qayta yetkazmang." },
  { question: "To‘lov summasini tekshirish kerakmi?", answer: "Ha. Kelgan summa buyurtma summasiga tengligini doim solishtiring." },
  { question: "Callback’ga qancha vaqtda javob berish kerak?", answer: "Iloji boricha tez; kechikish to‘lovni shubhali holatga olib kelishi mumkin." },
  { question: "To‘lov muvaffaqiyatsiz bo‘lsa nima bo‘ladi?", answer: "Buyurtma to‘lanmagan holatida qoladi va yetkazish ishga tushmaydi." },
  { question: "Mahsulot to‘lovdan keyin avtomatik ketadimi?", answer: "Ha. Complete tasdig‘idan so‘ng Stars/Premium/Gift avtomatik yetkaziladi." },
  { question: "Sandbox’da sinash mumkinmi?", answer: "Ha. Jonli pulsiz test muhitida callback oqimini tekshirasiz." },
  { question: "Refund callback bilan ishlaydimi?", answer: "Qaytarish hisob-kitob siyosatiga ko‘ra amalga oshiriladi; status yangilanadi." },
  { question: "Bir nechta to‘lov usulini ulasam bo‘ladimi?", answer: "Ha. Click bilan birga Payme va boshqalar ham." },
  { question: "Botda avtomatik to‘lov bo‘ladimi?", answer: "Ha. Bot yoki Mini App ichida havola orqali to‘lov va avtomatik yopish." },
  { question: "Xavfsizlik uchun nima muhim?", answer: "Imzo tekshiruvi, HTTPS, idempotency va summani solishtirish." },
  { question: "Statistika ko‘rish mumkinmi?", answer: "Ha. To‘lovlar ID bo‘yicha kuzatiladi; tarix so‘rov yoki panelda." },
  { question: "Hujjat beriladimi?", answer: "Ha. Callback formati, imzo va misollar bilan hujjat beriladi." },
  { question: "Qanday boshlayman?", answer: "StarsPaymee Business sahifasidan ariza qoldiring; callback va yetkazishni ulaymiz." },
];

const ruFaq = [
  { question: "Что такое callback Click?", answer: "Автоматический запрос, которым Click возвращает статус оплаты на ваш сервер. Обычно состоит из этапов prepare и complete." },
  { question: "Webhook и callback — одно и то же?", answer: "На практике да — callback Click отправляет результат оплаты на ваш webhook‑адрес." },
  { question: "Как включить автоприём оплаты?", answer: "Создайте инвойс и подключите адрес callback; проверяйте подпись и после подтверждения запускайте доставку." },
  { question: "В чём разница prepare и complete?", answer: "Prepare — проверка до оплаты; complete — подтверждение завершения оплаты." },
  { question: "Обязательно ли проверять подпись?", answer: "Да. Без проверки signature можно принять поддельный callback." },
  { question: "Как избежать двойной доставки?", answer: "Идемпотентность — проверяйте по ID заказа и не доставляйте повторно, если уже доставлено." },
  { question: "Нужно ли сверять сумму?", answer: "Да. Всегда сверяйте, что пришедшая сумма равна сумме заказа." },
  { question: "Как быстро отвечать на callback?", answer: "Как можно быстрее; задержка может сделать оплату подозрительной." },
  { question: "Что если оплата не удалась?", answer: "Заказ остаётся неоплаченным, доставка не запускается." },
  { question: "Товар уходит автоматически после оплаты?", answer: "Да. После подтверждения complete Stars/Premium/Gift доставляется автоматически." },
  { question: "Можно ли тестировать в Sandbox?", answer: "Да. В тестовой среде без реальных денег можно проверить поток callback." },
  { question: "Работает ли возврат с callback?", answer: "Возврат выполняется по политике расчётов; статус обновляется." },
  { question: "Можно ли подключить несколько способов оплаты?", answer: "Да. Вместе с Click — Payme и другие." },
  { question: "Есть ли автоприём в боте?", answer: "Да. Внутри бота или Mini App через ссылку — оплата и автозакрытие." },
  { question: "Что важно для безопасности?", answer: "Проверка подписи, HTTPS, идемпотентность и сверка суммы." },
  { question: "Можно ли смотреть статистику?", answer: "Да. Оплаты по ID; история через запрос или в панели." },
  { question: "Дают ли документацию?", answer: "Да. Документация с форматом callback, подписью и примерами." },
  { question: "Как начать?", answer: "Оставьте заявку на странице StarsPaymee Business; подключим callback и доставку." },
];

const enFaq = [
  { question: "What is a Click callback?", answer: "An automatic request by which Click returns the payment status to your server. It usually consists of prepare and complete stages." },
  { question: "Are webhook and callback the same?", answer: "In practice yes — the Click callback sends the payment result to your webhook URL." },
  { question: "How do I enable automatic payment acceptance?", answer: "Create an invoice and connect a callback URL; verify the signature and, after confirmation, trigger delivery." },
  { question: "What's the difference between prepare and complete?", answer: "Prepare — a check before payment; complete — confirmation of payment completion." },
  { question: "Is signature verification mandatory?", answer: "Yes. Without verifying the signature you may accept a fake callback." },
  { question: "How do I avoid double delivery?", answer: "Idempotency — check by order ID and don't deliver again if already delivered." },
  { question: "Do I need to compare the amount?", answer: "Yes. Always verify that the received amount equals the order amount." },
  { question: "How fast should I respond to the callback?", answer: "As fast as possible; a delay can mark the payment as suspicious." },
  { question: "What if payment failed?", answer: "The order stays unpaid and delivery is not triggered." },
  { question: "Does the product ship automatically after payment?", answer: "Yes. After the complete confirmation, Stars/Premium/Gift is delivered automatically." },
  { question: "Can I test in Sandbox?", answer: "Yes. You can check the callback flow in a test environment with no real money." },
  { question: "Does refund work with callback?", answer: "A refund is performed per the settlement policy; the status updates." },
  { question: "Can I connect several payment methods?", answer: "Yes. Alongside Click — Payme and others." },
  { question: "Is there auto‑acceptance in a bot?", answer: "Yes. Inside a bot or Mini App via a link — payment and auto‑close." },
  { question: "What matters for security?", answer: "Signature verification, HTTPS, idempotency and amount comparison." },
  { question: "Can I view statistics?", answer: "Yes. Payments by ID; history via a request or in the panel." },
  { question: "Is documentation provided?", answer: "Yes. Docs with the callback format, signature and examples." },
  { question: "How do I start?", answer: "Submit a request on the StarsPaymee Business page; we connect the callback and delivery." },
];

export const post: AeoPost = {
  slug: SLUG,
  category: "Biznes",
  type: "howto",
  datePublished: "2026-07-18",
  dateModified: "2026-07-18",
  keywords: [
    "click callback",
    "click webhook",
    "click payment integration",
    "click api avtomatik to‘lov",
    "click callback prepare complete",
    "click to‘lov qabul qilish",
  ],
  howToSteps: [
    { name: "Prepare so‘rovi", text: "Click prepare so‘rovida buyurtma va summani tekshiring." },
    { name: "Complete so‘rovi", text: "Imzoni tekshirib, to‘lovni yakunlangan deb belgilang." },
    { name: "Yetkazib berish", text: "Tasdiqdan so‘ng mahsulotni API orqali avtomatik yetkazing." },
    { name: "Mijozga xabar", text: "Buyurtma yopilgani va yetkazilgani haqida mijozga bildiring." },
  ],
  locales: {
    uz: {
      title: "Click API orqali avtomatik to‘lov qabul qilish",
      excerpt:
        "Click callback (prepare/complete), imzo tekshiruvi, idempotency va webhook orqali so‘mda avtomatik to‘lov qabul qilib, Stars/Premium/Gifts’ni avtomatik yetkazing. 18 savol-javob.",
      metaTitle: "Click API orqali avtomatik to‘lov qabul qilish 2026",
      metaDescription:
        "Click callback, prepare/complete, imzo va idempotency bilan avtomatik to‘lov qabul qilish. StarsPaymee Business orqali so‘mda to‘lov va avtomatik yetkazish — 18 savol-javob.",
      answerTitle: "Qisqa javob",
      Answer: UzAnswer,
      Body: UzBody,
      ctaHeading: "Avtomatik to‘lovni yoqing",
      ctaBody: "StarsPaymee Business orqali Click callback bilan to‘lovni 24/7 avtomatik qabul qiling.",
      faq: uzFaq,
    },
    ru: {
      title: "Автоприём оплаты через Click API",
      excerpt:
        "Через callback Click (prepare/complete), проверку подписи, идемпотентность и webhook принимайте оплату в сумах автоматически и доставляйте Stars/Premium/Gifts. 18 вопросов‑ответов.",
      metaTitle: "Автоприём оплаты через Click API 2026",
      metaDescription:
        "Click callback, prepare/complete, подпись и идемпотентность для автоприёма оплаты. Оплата в сумах и автодоставка через StarsPaymee Business — 18 вопросов‑ответов.",
      answerTitle: "Краткий ответ",
      Answer: RuAnswer,
      Body: RuBody,
      ctaHeading: "Включите автоприём оплаты",
      ctaBody: "Через StarsPaymee Business принимайте оплату Click автоматически 24/7 с callback.",
      faq: ruFaq,
    },
    en: {
      title: "Accepting payments automatically via Click API",
      excerpt:
        "Using the Click callback (prepare/complete), signature verification, idempotency and webhooks, accept payments in so‘m automatically and deliver Stars/Premium/Gifts. 18 Q&A.",
      metaTitle: "Accepting payments automatically via Click API 2026",
      metaDescription:
        "Click callback, prepare/complete, signature and idempotency for automatic payment acceptance. Payment in so‘m and auto‑delivery via StarsPaymee Business — 18 Q&A.",
      answerTitle: "Short answer",
      Answer: EnAnswer,
      Body: EnBody,
      ctaHeading: "Enable automatic payments",
      ctaBody: "Through StarsPaymee Business, accept Click payments automatically 24/7 with callbacks.",
      faq: enFaq,
    },
  },
};
