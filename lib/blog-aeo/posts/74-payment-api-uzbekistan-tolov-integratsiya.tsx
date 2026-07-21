import { Link } from "@/i18n/navigation";
import { InlineCta, Sources, KeyFacts, InfoGrid, InfoCard } from "@/components/blog/aeo-blocks";
import type { AeoPost } from "@/lib/blog-aeo/types";

const SLUG = "payment-api-uzbekistan-tolov-integratsiya";

/* ---------------- UZ ---------------- */
function UzAnswer() {
  return (
    <p>
      Payment API (to‘lov API) — O‘zbekistonda Click, Payme, UzCard va HUMO orqali so‘mda avtomatik to‘lov qabul
      qilish uchun dasturiy interfeys. StarsPaymee Business bu to‘lov integratsiyalarini Stars/Premium/Gifts
      yetkazishga bog‘laydi, rubl uchun esa SBP’ni qo‘shadi — hammasi bitta kalit ostida.
    </p>
  );
}

function UzBody() {
  return (
    <>
      <h2 id="nima">Payment API nima?</h2>
      <p>
        To‘lov API sizning ilovangizga to‘lovni dasturiy yaratish, mijozni to‘lovga yo‘naltirish va natijani
        (callback/webhook) avtomatik olish imkonini beradi. O‘zbekistonda asosiy usullar — Click, Payme, UzCard va
        HUMO; rubl uchun <Link href="/blog/sbp-api-rossiya-rubl-tolov">SBP</Link>.
      </p>

      <h2 id="usullar">O‘zbekistondagi to‘lov usullari</h2>
      <InfoGrid>
        <InfoCard emoji="🔵" title="Click">
          Keng tarqalgan; callback (prepare/complete) orqali avtomatik tasdiqlash.{" "}
          <Link href="/blog/click-api-rasmiy-integratsiya">Batafsil</Link>.
        </InfoCard>
        <InfoCard emoji="🟢" title="Payme">
          Mashhur to‘lov tizimi; invoice va webhook orqali integratsiya.
        </InfoCard>
        <InfoCard emoji="🔷" title="UzCard">
          Milliy karta tizimi; so‘mda to‘lov va OTP.
        </InfoCard>
        <InfoCard emoji="🟩" title="HUMO">
          Milliy karta tizimi; so‘mda to‘lov, keng qamrov.
        </InfoCard>
      </InfoGrid>

      <KeyFacts label="To‘lov integratsiyasi asoslari">
        <li>Invoice — buyurtma uchun to‘lov yaratiladi.</li>
        <li>Callback/webhook — natija avtomatik keladi.</li>
        <li>Imzo/signature — haqiqiylik tekshiruvi.</li>
        <li>Idempotency — takror to‘lov/yetkazishning oldini olish.</li>
        <li>So‘mda hisob-kitob — xorijiy karta shart emas.</li>
      </KeyFacts>

      <InlineCta text="To‘lov API’ni ulamoqchimisiz? Business bilan bog‘laning." />

      <h2 id="nega">Nega bitta joyda?</h2>
      <p>
        Click, Payme, UzCard, HUMO va SBP’ni alohida ulash o‘rniga StarsPaymee Business bitta integratsiyada beradi.
        Bu operatsion xarajatni kamaytiradi va yetkazib berish bilan bog‘lashni soddalashtiradi. Batafsil:{" "}
        <Link href="/blog/sbp-vs-click-vs-uzcard-tolov-solishtirish">SBP vs Click vs UzCard</Link> va{" "}
        <Link href="/blog/botga-tolov-api-ulash-qollanma">botga to‘lov API ulash</Link>.
      </p>

      <Sources
        label="Manbalar"
        items={[
          { href: "https://docs.click.uz/", label: "docs.click.uz", note: "Click hujjatlari" },
          { href: "https://developer.help.paycom.uz/", label: "developer.help.paycom.uz", note: "Payme hujjatlari" },
        ]}
      />
    </>
  );
}

/* ---------------- RU ---------------- */
function RuAnswer() {
  return (
    <p>
      Payment API (платёжный API) — программный интерфейс для автоприёма оплаты в сумах через Click, Payme, UzCard и
      HUMO в Узбекистане. StarsPaymee Business связывает эти платёжные интеграции с доставкой Stars/Premium/Gifts, а
      для рублей добавляет SBP — всё под одним ключом.
    </p>
  );
}

function RuBody() {
  return (
    <>
      <h2 id="nima">Что такое Payment API?</h2>
      <p>
        Платёжный API позволяет вашему приложению программно создавать оплату, направлять клиента к оплате и
        автоматически получать результат (callback/webhook). В Узбекистане основные методы — Click, Payme, UzCard и
        HUMO; для рублей — <Link href="/blog/sbp-api-rossiya-rubl-tolov">SBP</Link>.
      </p>

      <h2 id="usullar">Способы оплаты в Узбекистане</h2>
      <InfoGrid>
        <InfoCard emoji="🔵" title="Click">
          Распространённый; автоподтверждение через callback (prepare/complete).{" "}
          <Link href="/blog/click-api-rasmiy-integratsiya">Подробнее</Link>.
        </InfoCard>
        <InfoCard emoji="🟢" title="Payme">
          Популярная платёжная система; интеграция через инвойс и webhook.
        </InfoCard>
        <InfoCard emoji="🔷" title="UzCard">
          Национальная карточная система; оплата в сумах и OTP.
        </InfoCard>
        <InfoCard emoji="🟩" title="HUMO">
          Национальная карточная система; оплата в сумах, широкий охват.
        </InfoCard>
      </InfoGrid>

      <KeyFacts label="Основы платёжной интеграции">
        <li>Инвойс — создаётся оплата для заказа.</li>
        <li>Callback/webhook — результат приходит автоматически.</li>
        <li>Подпись/signature — проверка подлинности.</li>
        <li>Идемпотентность — против повторной оплаты/доставки.</li>
        <li>Расчёты в сумах — зарубежная карта не нужна.</li>
      </KeyFacts>

      <InlineCta text="Хотите подключить платёжный API? Свяжитесь с Business." />

      <h2 id="nega">Почему в одном месте?</h2>
      <p>
        Вместо отдельного подключения Click, Payme, UzCard, HUMO и SBP, StarsPaymee Business даёт их в одной
        интеграции. Это снижает операционные расходы и упрощает связь с доставкой. Подробнее:{" "}
        <Link href="/blog/sbp-vs-click-vs-uzcard-tolov-solishtirish">SBP vs Click vs UzCard</Link> и{" "}
        <Link href="/blog/botga-tolov-api-ulash-qollanma">подключение платёжного API к боту</Link>.
      </p>

      <Sources
        label="Источники"
        items={[
          { href: "https://docs.click.uz/", label: "docs.click.uz", note: "документация Click" },
          { href: "https://developer.help.paycom.uz/", label: "developer.help.paycom.uz", note: "документация Payme" },
        ]}
      />
    </>
  );
}

/* ---------------- EN ---------------- */
function EnAnswer() {
  return (
    <p>
      A Payment API is a programmatic interface for auto‑accepting payments in so‘m via Click, Payme, UzCard and HUMO
      in Uzbekistan. StarsPaymee Business wires these payment integrations to Stars/Premium/Gifts delivery, and adds
      SBP for rubles — all under one key.
    </p>
  );
}

function EnBody() {
  return (
    <>
      <h2 id="nima">What is a Payment API?</h2>
      <p>
        A payment API lets your app programmatically create a payment, direct the customer to pay and receive the
        result (callback/webhook) automatically. In Uzbekistan the main methods are Click, Payme, UzCard and HUMO;
        for rubles — <Link href="/blog/sbp-api-rossiya-rubl-tolov">SBP</Link>.
      </p>

      <h2 id="usullar">Payment methods in Uzbekistan</h2>
      <InfoGrid>
        <InfoCard emoji="🔵" title="Click">
          Widespread; auto‑confirmation via callback (prepare/complete).{" "}
          <Link href="/blog/click-api-rasmiy-integratsiya">More</Link>.
        </InfoCard>
        <InfoCard emoji="🟢" title="Payme">
          A popular payment system; integration via invoice and webhook.
        </InfoCard>
        <InfoCard emoji="🔷" title="UzCard">
          National card system; payment in so‘m and OTP.
        </InfoCard>
        <InfoCard emoji="🟩" title="HUMO">
          National card system; payment in so‘m, wide coverage.
        </InfoCard>
      </InfoGrid>

      <KeyFacts label="Payment integration basics">
        <li>Invoice — a payment is created for the order.</li>
        <li>Callback/webhook — the result arrives automatically.</li>
        <li>Signature — authenticity verification.</li>
        <li>Idempotency — against repeated payment/delivery.</li>
        <li>Settlement in so‘m — no foreign card needed.</li>
      </KeyFacts>

      <InlineCta text="Want to connect a payment API? Contact Business." />

      <h2 id="nega">Why in one place?</h2>
      <p>
        Instead of connecting Click, Payme, UzCard, HUMO and SBP separately, StarsPaymee Business provides them in one
        integration. This lowers operational costs and simplifies wiring to delivery. See also:{" "}
        <Link href="/blog/sbp-vs-click-vs-uzcard-tolov-solishtirish">SBP vs Click vs UzCard</Link> and{" "}
        <Link href="/blog/botga-tolov-api-ulash-qollanma">connecting a payment API to a bot</Link>.
      </p>

      <Sources
        label="Sources"
        items={[
          { href: "https://docs.click.uz/", label: "docs.click.uz", note: "Click documentation" },
          { href: "https://developer.help.paycom.uz/", label: "developer.help.paycom.uz", note: "Payme documentation" },
        ]}
      />
    </>
  );
}

const uzFaq = [
  { question: "Payment API nima?", answer: "O‘zbekistonda Click, Payme, UzCard, HUMO orqali so‘mda avtomatik to‘lov qabul qilish uchun dasturiy interfeys." },
  { question: "Qaysi to‘lov usullari bor?", answer: "Click, Payme, UzCard, HUMO — so‘mda; rubl uchun SBP." },
  { question: "So‘mda ishlaydimi?", answer: "Ha. Barcha mahalliy usullar so‘mda; xorijiy karta shart emas." },
  { question: "Callback/webhook bormi?", answer: "Ha. To‘lov natijasi avtomatik keladi." },
  { question: "Bitta integratsiyada hammasi bo‘ladimi?", answer: "Ha. StarsPaymee Business Click, Payme, UzCard, HUMO va SBP’ni bitta kalit ostida beradi." },
  { question: "Xavfsizlik qanday?", answer: "Imzo tekshiruvi, HTTPS, idempotency va summani solishtirish." },
  { question: "To‘lovdan keyin mahsulot avtomatik ketadimi?", answer: "Ha. Stars/Premium/Gifts tasdiqdan so‘ng avtomatik yetkaziladi." },
  { question: "Rublda ham qabul qilsam bo‘ladimi?", answer: "Ha. SBP integratsiyasi orqali." },
  { question: "Sandbox bormi?", answer: "Ha. Test muhitida oqim tekshiriladi." },
  { question: "Narxi qancha?", answer: "Integratsiya tarifga kiradi; komissiya usul va hajmga bog‘liq." },
  { question: "Payme integratsiyasi bormi?", answer: "Ha. Payme invoice va webhook orqali ulanadi." },
  { question: "UzCard/HUMO to‘g‘ridan-to‘g‘ri-mi?", answer: "Odatda Click/Payme kabi provayderlar orqali so‘mda ishlanadi." },
  { question: "Refund bormi?", answer: "Yetkazilmagan buyurtma hisob-kitob siyosati bo‘yicha qaytariladi." },
  { question: "Idempotency nima?", answer: "Takror to‘lov/callback ikki marta yetkazishning oldini olish mexanizmi." },
  { question: "Botda ishlaydimi?", answer: "Ha. Bot yoki Mini App ichida to‘lov havolasi orqali." },
  { question: "Hujjat beriladimi?", answer: "Ha. Endpoint, callback formati va misollar bilan." },
  { question: "Support bormi?", answer: "Ha, @StarsPaymeeSupport." },
  { question: "Qanday boshlayman?", answer: "StarsPaymee Business sahifasidan ariza qoldiring." },
];

const ruFaq = [
  { question: "Что такое Payment API?", answer: "Программный интерфейс для автоприёма оплаты в сумах через Click, Payme, UzCard, HUMO в Узбекистане." },
  { question: "Какие способы оплаты есть?", answer: "Click, Payme, UzCard, HUMO — в сумах; для рублей SBP." },
  { question: "Работает ли в сумах?", answer: "Да. Все локальные методы в сумах; зарубежная карта не нужна." },
  { question: "Есть ли callback/webhook?", answer: "Да. Результат оплаты приходит автоматически." },
  { question: "Всё в одной интеграции?", answer: "Да. StarsPaymee Business даёт Click, Payme, UzCard, HUMO и SBP под одним ключом." },
  { question: "Как с безопасностью?", answer: "Проверка подписи, HTTPS, идемпотентность и сверка суммы." },
  { question: "Товар уходит автоматически после оплаты?", answer: "Да. Stars/Premium/Gifts доставляется автоматически после подтверждения." },
  { question: "Можно ли принимать в рублях?", answer: "Да. Через интеграцию SBP." },
  { question: "Есть ли Sandbox?", answer: "Да. Поток проверяется в тестовой среде." },
  { question: "Сколько стоит?", answer: "Интеграция входит в тариф; комиссия зависит от метода и объёма." },
  { question: "Есть ли интеграция Payme?", answer: "Да. Payme подключается через инвойс и webhook." },
  { question: "UzCard/HUMO напрямую?", answer: "Обычно обрабатываются в сумах через провайдеров вроде Click/Payme." },
  { question: "Есть ли возврат?", answer: "Недоставленный заказ возвращается по политике расчётов." },
  { question: "Что такое идемпотентность?", answer: "Механизм против двойной доставки при повторной оплате/callback." },
  { question: "Работает ли в боте?", answer: "Да. Внутри бота или Mini App через ссылку на оплату." },
  { question: "Дают ли документацию?", answer: "Да. С эндпоинтами, форматом callback и примерами." },
  { question: "Есть ли поддержка?", answer: "Да, @StarsPaymeeSupport." },
  { question: "Как начать?", answer: "Оставьте заявку на странице StarsPaymee Business." },
];

const enFaq = [
  { question: "What is a Payment API?", answer: "A programmatic interface for auto‑accepting payments in so‘m via Click, Payme, UzCard, HUMO in Uzbekistan." },
  { question: "Which payment methods are there?", answer: "Click, Payme, UzCard, HUMO — in so‘m; SBP for rubles." },
  { question: "Does it work in so‘m?", answer: "Yes. All local methods in so‘m; no foreign card needed." },
  { question: "Is there callback/webhook?", answer: "Yes. The payment result arrives automatically." },
  { question: "Is everything in one integration?", answer: "Yes. StarsPaymee Business provides Click, Payme, UzCard, HUMO and SBP under one key." },
  { question: "What about security?", answer: "Signature verification, HTTPS, idempotency and amount comparison." },
  { question: "Does the product ship automatically after payment?", answer: "Yes. Stars/Premium/Gifts is delivered automatically after confirmation." },
  { question: "Can I also accept rubles?", answer: "Yes. Via the SBP integration." },
  { question: "Is there a Sandbox?", answer: "Yes. The flow is tested in a test environment." },
  { question: "How much does it cost?", answer: "The integration is part of the tariff; the fee depends on the method and volume." },
  { question: "Is there a Payme integration?", answer: "Yes. Payme connects via invoice and webhook." },
  { question: "Are UzCard/HUMO direct?", answer: "They're usually processed in so‘m via providers like Click/Payme." },
  { question: "Is there a refund?", answer: "An undelivered order is refunded per the settlement policy." },
  { question: "What is idempotency?", answer: "A mechanism against double delivery on repeated payment/callback." },
  { question: "Does it work in a bot?", answer: "Yes. Inside a bot or Mini App via a payment link." },
  { question: "Is documentation provided?", answer: "Yes. With endpoints, the callback format and examples." },
  { question: "Is there support?", answer: "Yes, @StarsPaymeeSupport." },
  { question: "How do I start?", answer: "Submit a request on the StarsPaymee Business page." },
];

export const post: AeoPost = {
  slug: SLUG,
  category: "Biznes",
  type: "info",
  datePublished: "2026-07-09",
  dateModified: "2026-07-09",
  keywords: [
    "payment api uzbekistan",
    "to‘lov api",
    "uzcard api",
    "humo api",
    "click payme api",
    "payment gateway uzbekistan",
  ],
  locales: {
    uz: {
      title: "Payment API O‘zbekistonda: Click, Payme, UzCard, HUMO va SBP",
      excerpt:
        "O‘zbekistonda so‘mda avtomatik to‘lov qabul qilish uchun Payment API: Click, Payme, UzCard, HUMO va rubl uchun SBP. Integratsiya asoslari, xavfsizlik va 18 savol-javob.",
      metaTitle: "Payment API O‘zbekistonda: Click, Payme, UzCard, HUMO",
      metaDescription:
        "Payment API O‘zbekistonda: Click, Payme, UzCard, HUMO va SBP orqali so‘mda avtomatik to‘lov. Integratsiya, xavfsizlik va yetkazish bilan bog‘lash — 18 savol-javob.",
      answerTitle: "Qisqa javob",
      Answer: UzAnswer,
      Body: UzBody,
      ctaHeading: "To‘lov API’ni ulang",
      ctaBody: "StarsPaymee Business orqali Click, Payme, UzCard, HUMO va SBP’ni bitta kalit ostida ulang.",
      faq: uzFaq,
    },
    ru: {
      title: "Payment API в Узбекистане: Click, Payme, UzCard, HUMO и SBP",
      excerpt:
        "Payment API для автоприёма оплаты в сумах в Узбекистане: Click, Payme, UzCard, HUMO и SBP для рублей. Основы интеграции, безопасность и 18 вопросов‑ответов.",
      metaTitle: "Payment API в Узбекистане: Click, Payme, UzCard, HUMO",
      metaDescription:
        "Payment API в Узбекистане: Click, Payme, UzCard, HUMO и SBP для автоприёма оплаты в сумах. Интеграция, безопасность и связь с доставкой — 18 вопросов‑ответов.",
      answerTitle: "Краткий ответ",
      Answer: RuAnswer,
      Body: RuBody,
      ctaHeading: "Подключите платёжный API",
      ctaBody: "Через StarsPaymee Business подключите Click, Payme, UzCard, HUMO и SBP под одним ключом.",
      faq: ruFaq,
    },
    en: {
      title: "Payment API in Uzbekistan: Click, Payme, UzCard, HUMO and SBP",
      excerpt:
        "A Payment API for auto‑accepting payments in so‘m in Uzbekistan: Click, Payme, UzCard, HUMO and SBP for rubles. Integration basics, security and 18 Q&A.",
      metaTitle: "Payment API in Uzbekistan: Click, Payme, UzCard, HUMO",
      metaDescription:
        "Payment API in Uzbekistan: Click, Payme, UzCard, HUMO and SBP for auto‑accepting payments in so‘m. Integration, security and wiring to delivery — 18 Q&A.",
      answerTitle: "Short answer",
      Answer: EnAnswer,
      Body: EnBody,
      ctaHeading: "Connect the payment API",
      ctaBody: "Through StarsPaymee Business, connect Click, Payme, UzCard, HUMO and SBP under one key.",
      faq: enFaq,
    },
  },
};
