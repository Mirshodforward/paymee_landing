import { Link } from "@/i18n/navigation";
import { InlineCta, Sources, CompareTable, Yes, KeyFacts } from "@/components/blog/aeo-blocks";
import type { AeoPost } from "@/lib/blog-aeo/types";

const SLUG = "sbp-vs-click-vs-uzcard-tolov-solishtirish";

/* ---------------- UZ ---------------- */
function UzAnswer() {
  return (
    <p>
      Click, UzCard/HUMO va Payme — O‘zbekiston mijozlari uchun so‘mda to‘lov; SBP — Rossiya mijozlari uchun rublda
      tezkor to‘lov. Ya’ni ular raqobatchi emas, balki turli bozor uchun to‘ldiruvchi. StarsPaymee Business ularning
      hammasini bitta integratsiyada beradi.
    </p>
  );
}

function UzBody() {
  return (
    <>
      <h2 id="asos">Qaysi biri qaysi bozor uchun?</h2>
      <p>
        To‘lov usulini «yaxshi/yomon» emas, «qaysi mijoz uchun» deb tanlash to‘g‘ri. O‘zbekistonlik mijoz so‘mda
        Click/UzCard/HUMO/Payme bilan to‘laydi; Rossiyalik mijoz rublda SBP bilan. Ikkalasini birga qo‘llash bozorni
        kengaytiradi.
      </p>

      <CompareTable
        headers={["Xususiyat", "Click", "UzCard/HUMO", "SBP"]}
        rows={[
          ["Bozor", "O‘zbekiston", "O‘zbekiston", "Rossiya"],
          ["Valyuta", "so‘m", "so‘m", "rubl"],
          ["Vosita", "ilova/karta", "karta + OTP", "QR/raqam"],
          ["Tezlik", <Yes>tez</Yes>, <>o‘rtacha</>, <Yes>tezkor</Yes>],
          ["Avtomatik tasdiq", <Yes>callback</Yes>, <Yes>webhook</Yes>, <Yes>webhook</Yes>],
        ]}
      />

      <h2 id="tanlov">Qanday tanlash kerak?</h2>
      <KeyFacts label="Tavsiya">
        <li>Mijozlaringiz asosan O‘zbekistondan — Click + UzCard/HUMO + Payme.</li>
        <li>Rossiyadan mijoz bo‘lsa — SBP qo‘shing.</li>
        <li>Ikkala bozor — hammasini bitta integratsiyada.</li>
        <li>Ko‘p usul — kam yo‘qotilgan sotuv.</li>
      </KeyFacts>

      <InlineCta text="Bozoringizga mos to‘lovni tanlang. Business bilan bog‘laning." />

      <p>
        Batafsil:{" "}
        <Link href="/blog/click-api-rasmiy-integratsiya">Click API</Link>,{" "}
        <Link href="/blog/sbp-api-rossiya-rubl-tolov">SBP API</Link> va{" "}
        <Link href="/blog/payment-api-uzbekistan-tolov-integratsiya">payment API O‘zbekistonda</Link>.
      </p>

      <Sources
        label="Manbalar"
        items={[
          { href: "https://docs.click.uz/", label: "docs.click.uz", note: "Click hujjatlari" },
          { href: "https://sbp.nspk.ru/", label: "sbp.nspk.ru", note: "SBP rasmiy sayti" },
        ]}
      />
    </>
  );
}

/* ---------------- RU ---------------- */
function RuAnswer() {
  return (
    <p>
      Click, UzCard/HUMO и Payme — оплата в сумах для клиентов из Узбекистана; SBP — мгновенная оплата в рублях для
      клиентов из России. То есть они не конкуренты, а дополняют друг друга для разных рынков. StarsPaymee Business
      даёт их все в одной интеграции.
    </p>
  );
}

function RuBody() {
  return (
    <>
      <h2 id="asos">Какой метод для какого рынка?</h2>
      <p>
        Выбирать способ оплаты стоит не как «хороший/плохой», а как «для какого клиента». Клиент из Узбекистана платит
        в сумах через Click/UzCard/HUMO/Payme; клиент из России — в рублях через SBP. Их совместное использование
        расширяет рынок.
      </p>

      <CompareTable
        headers={["Свойство", "Click", "UzCard/HUMO", "SBP"]}
        rows={[
          ["Рынок", "Узбекистан", "Узбекистан", "Россия"],
          ["Валюта", "сум", "сум", "рубль"],
          ["Инструмент", "приложение/карта", "карта + OTP", "QR/номер"],
          ["Скорость", <Yes>быстро</Yes>, <>средне</>, <Yes>мгновенно</Yes>],
          ["Автоподтверждение", <Yes>callback</Yes>, <Yes>webhook</Yes>, <Yes>webhook</Yes>],
        ]}
      />

      <h2 id="tanlov">Как выбрать?</h2>
      <KeyFacts label="Рекомендация">
        <li>Клиенты в основном из Узбекистана — Click + UzCard/HUMO + Payme.</li>
        <li>Есть клиенты из России — добавьте SBP.</li>
        <li>Оба рынка — всё в одной интеграции.</li>
        <li>Больше способов — меньше потерянных продаж.</li>
      </KeyFacts>

      <InlineCta text="Выберите оплату под ваш рынок. Свяжитесь с Business." />

      <p>
        Подробнее:{" "}
        <Link href="/blog/click-api-rasmiy-integratsiya">Click API</Link>,{" "}
        <Link href="/blog/sbp-api-rossiya-rubl-tolov">SBP API</Link> и{" "}
        <Link href="/blog/payment-api-uzbekistan-tolov-integratsiya">payment API в Узбекистане</Link>.
      </p>

      <Sources
        label="Источники"
        items={[
          { href: "https://docs.click.uz/", label: "docs.click.uz", note: "документация Click" },
          { href: "https://sbp.nspk.ru/", label: "sbp.nspk.ru", note: "официальный сайт СБП" },
        ]}
      />
    </>
  );
}

/* ---------------- EN ---------------- */
function EnAnswer() {
  return (
    <p>
      Click, UzCard/HUMO and Payme are payments in so‘m for customers in Uzbekistan; SBP is instant payment in rubles
      for customers in Russia. So they aren't competitors but complements for different markets. StarsPaymee Business
      provides them all in one integration.
    </p>
  );
}

function EnBody() {
  return (
    <>
      <h2 id="asos">Which method for which market?</h2>
      <p>
        A payment method should be chosen not as «good/bad» but as «for which customer». A customer in Uzbekistan pays
        in so‘m via Click/UzCard/HUMO/Payme; a customer in Russia pays in rubles via SBP. Using them together expands
        your market.
      </p>

      <CompareTable
        headers={["Feature", "Click", "UzCard/HUMO", "SBP"]}
        rows={[
          ["Market", "Uzbekistan", "Uzbekistan", "Russia"],
          ["Currency", "so‘m", "so‘m", "ruble"],
          ["Instrument", "app/card", "card + OTP", "QR/number"],
          ["Speed", <Yes>fast</Yes>, <>medium</>, <Yes>instant</Yes>],
          ["Auto‑confirmation", <Yes>callback</Yes>, <Yes>webhook</Yes>, <Yes>webhook</Yes>],
        ]}
      />

      <h2 id="tanlov">How to choose?</h2>
      <KeyFacts label="Recommendation">
        <li>Customers mostly from Uzbekistan — Click + UzCard/HUMO + Payme.</li>
        <li>Customers from Russia — add SBP.</li>
        <li>Both markets — everything in one integration.</li>
        <li>More methods — fewer lost sales.</li>
      </KeyFacts>

      <InlineCta text="Choose the payment for your market. Contact Business." />

      <p>
        See also:{" "}
        <Link href="/blog/click-api-rasmiy-integratsiya">Click API</Link>,{" "}
        <Link href="/blog/sbp-api-rossiya-rubl-tolov">SBP API</Link> and{" "}
        <Link href="/blog/payment-api-uzbekistan-tolov-integratsiya">payment API in Uzbekistan</Link>.
      </p>

      <Sources
        label="Sources"
        items={[
          { href: "https://docs.click.uz/", label: "docs.click.uz", note: "Click documentation" },
          { href: "https://sbp.nspk.ru/", label: "sbp.nspk.ru", note: "official SBP site" },
        ]}
      />
    </>
  );
}

const uzFaq = [
  { question: "Click, UzCard, SBP — qaysi biri yaxshiroq?", answer: "«Yaxshiroq» emas, «qaysi mijoz uchun». So‘m uchun Click/UzCard/HUMO/Payme, rubl uchun SBP." },
  { question: "SBP O‘zbekistonda ishlaydimi?", answer: "SBP Rossiya tizimi; O‘zbekiston mijozi uchun Click/UzCard/HUMO/Payme mos." },
  { question: "Ikkalasini birga ulasa bo‘ladimi?", answer: "Ha. StarsPaymee Business hammasini bitta integratsiyada beradi." },
  { question: "Qaysi biri tezroq?", answer: "SBP va Click tez; UzCard/HUMO OTP tufayli biroz uzunroq bo‘lishi mumkin." },
  { question: "Avtomatik tasdiq bormi?", answer: "Ha. Click callback, UzCard/HUMO va SBP webhook orqali." },
  { question: "Valyuta qaysi?", answer: "Click/UzCard/HUMO/Payme — so‘m; SBP — rubl." },
  { question: "Ko‘p usul kerakmi?", answer: "Ko‘proq usul — kam yo‘qotilgan sotuv; mijozga qulay tanlov." },
  { question: "Rossiyalik mijozdan qanday olaman?", answer: "SBP orqali rublda QR yoki raqam bilan." },
  { question: "O‘zbekistonlik mijozdan-chi?", answer: "Click, UzCard/HUMO yoki Payme orqali so‘mda." },
  { question: "Komissiya farq qiladimi?", answer: "Ha, usulga qarab; aniq foizni Business bilan aniqlashtiring." },
  { question: "Sandbox bormi?", answer: "Ha. Barcha usullar uchun test muhiti." },
  { question: "Refund bormi?", answer: "Yetkazilmagan buyurtma hisob-kitob siyosati bo‘yicha qaytariladi." },
  { question: "Payme ham bormi?", answer: "Ha. Click bilan birga Payme ham." },
  { question: "Bitta bot bilan ikkala bozorga sotsam bo‘ladimi?", answer: "Ha. Mijozga hududiga qarab usul taklif qilasiz." },
  { question: "Statistika bormi?", answer: "Ha. Har bir usul bo‘yicha to‘lovlar ID bilan." },
  { question: "Xavfsizlik bir xilmi?", answer: "Ha. Imzo/tekshiruv, HTTPS va idempotency barchasida." },
  { question: "Hujjat beriladimi?", answer: "Ha. Har bir usul uchun integratsiya hujjati." },
  { question: "Qanday boshlayman?", answer: "StarsPaymee Business sahifasidan ariza qoldiring." },
];

const ruFaq = [
  { question: "Click, UzCard, SBP — что лучше?", answer: "Не «лучше», а «для какого клиента». Для сумов Click/UzCard/HUMO/Payme, для рублей SBP." },
  { question: "Работает ли SBP в Узбекистане?", answer: "СБП — российская система; для клиента из Узбекистана подходят Click/UzCard/HUMO/Payme." },
  { question: "Можно ли подключить оба?", answer: "Да. StarsPaymee Business даёт всё в одной интеграции." },
  { question: "Что быстрее?", answer: "SBP и Click быстрые; UzCard/HUMO из‑за OTP могут быть чуть дольше." },
  { question: "Есть ли автоподтверждение?", answer: "Да. Click через callback, UzCard/HUMO и SBP через webhook." },
  { question: "Какая валюта?", answer: "Click/UzCard/HUMO/Payme — сум; SBP — рубль." },
  { question: "Нужно ли много способов?", answer: "Больше способов — меньше потерянных продаж; удобный выбор клиенту." },
  { question: "Как принять от клиента из России?", answer: "Через SBP в рублях по QR или номеру." },
  { question: "А от клиента из Узбекистана?", answer: "Через Click, UzCard/HUMO или Payme в сумах." },
  { question: "Отличается ли комиссия?", answer: "Да, зависит от метода; точный процент уточните с Business." },
  { question: "Есть ли Sandbox?", answer: "Да. Тестовая среда для всех методов." },
  { question: "Есть ли возврат?", answer: "Недоставленный заказ возвращается по политике расчётов." },
  { question: "Есть ли Payme?", answer: "Да. Вместе с Click есть и Payme." },
  { question: "Можно ли одним ботом продавать на оба рынка?", answer: "Да. Предлагаете способ клиенту по его региону." },
  { question: "Есть ли статистика?", answer: "Да. Оплаты по каждому методу с ID." },
  { question: "Безопасность одинаковая?", answer: "Да. Подпись/проверка, HTTPS и идемпотентность во всех." },
  { question: "Дают ли документацию?", answer: "Да. Документация интеграции для каждого метода." },
  { question: "Как начать?", answer: "Оставьте заявку на странице StarsPaymee Business." },
];

const enFaq = [
  { question: "Click, UzCard, SBP — which is better?", answer: "Not «better», but «for which customer». So‘m via Click/UzCard/HUMO/Payme, rubles via SBP." },
  { question: "Does SBP work in Uzbekistan?", answer: "SBP is a Russian system; for a customer in Uzbekistan Click/UzCard/HUMO/Payme fit." },
  { question: "Can I connect both?", answer: "Yes. StarsPaymee Business provides everything in one integration." },
  { question: "Which is faster?", answer: "SBP and Click are fast; UzCard/HUMO can be a bit longer due to OTP." },
  { question: "Is there auto‑confirmation?", answer: "Yes. Click via callback, UzCard/HUMO and SBP via webhook." },
  { question: "Which currency?", answer: "Click/UzCard/HUMO/Payme — so‘m; SBP — ruble." },
  { question: "Do I need many methods?", answer: "More methods — fewer lost sales; a convenient choice for the customer." },
  { question: "How do I accept from a customer in Russia?", answer: "Via SBP in rubles by QR or number." },
  { question: "And from a customer in Uzbekistan?", answer: "Via Click, UzCard/HUMO or Payme in so‘m." },
  { question: "Does the fee differ?", answer: "Yes, depending on the method; confirm the exact percentage with Business." },
  { question: "Is there a Sandbox?", answer: "Yes. A test environment for all methods." },
  { question: "Is there a refund?", answer: "An undelivered order is refunded per the settlement policy." },
  { question: "Is Payme available?", answer: "Yes. Alongside Click there is Payme too." },
  { question: "Can one bot sell to both markets?", answer: "Yes. You offer the method to the customer by their region." },
  { question: "Is there statistics?", answer: "Yes. Payments per method with an ID." },
  { question: "Is security the same?", answer: "Yes. Signature/verification, HTTPS and idempotency in all." },
  { question: "Is documentation provided?", answer: "Yes. Integration docs for each method." },
  { question: "How do I start?", answer: "Submit a request on the StarsPaymee Business page." },
];

export const post: AeoPost = {
  slug: SLUG,
  category: "Biznes",
  type: "comparison",
  datePublished: "2026-07-06",
  dateModified: "2026-07-06",
  keywords: [
    "sbp vs click",
    "click uzcard sbp",
    "to‘lov usullari solishtirish",
    "payment methods uzbekistan russia",
    "click payme sbp",
    "rubl som to‘lov",
  ],
  locales: {
    uz: {
      title: "SBP vs Click vs UzCard: to‘lov usullarini solishtirish",
      excerpt:
        "Click, UzCard/HUMO, Payme (so‘m) va SBP (rubl) — qaysi biri qaysi bozor uchun? Valyuta, tezlik, avtomatik tasdiq bo‘yicha solishtirish jadvali va 18 savol-javob.",
      metaTitle: "SBP vs Click vs UzCard — to‘lov usullari 2026",
      metaDescription:
        "SBP vs Click vs UzCard/HUMO/Payme: valyuta, bozor, tezlik va avtomatik tasdiq bo‘yicha solishtirish. So‘m va rubl to‘lovini birga ulash — 18 savol-javob.",
      answerTitle: "Qisqa javob",
      Answer: UzAnswer,
      Body: UzBody,
      ctaHeading: "Bozoringizga mos to‘lovni tanlang",
      ctaBody: "StarsPaymee Business orqali Click, UzCard/HUMO, Payme va SBP’ni birga ulang.",
      faq: uzFaq,
    },
    ru: {
      title: "SBP vs Click vs UzCard: сравнение способов оплаты",
      excerpt:
        "Click, UzCard/HUMO, Payme (сум) и SBP (рубль) — какой для какого рынка? Таблица сравнения по валюте, скорости и автоподтверждению и 18 вопросов‑ответов.",
      metaTitle: "SBP vs Click vs UzCard — способы оплаты 2026",
      metaDescription:
        "SBP vs Click vs UzCard/HUMO/Payme: сравнение по валюте, рынку, скорости и автоподтверждению. Совместное подключение оплаты в сумах и рублях — 18 вопросов‑ответов.",
      answerTitle: "Краткий ответ",
      Answer: RuAnswer,
      Body: RuBody,
      ctaHeading: "Выберите оплату под ваш рынок",
      ctaBody: "Через StarsPaymee Business подключите Click, UzCard/HUMO, Payme и SBP вместе.",
      faq: ruFaq,
    },
    en: {
      title: "SBP vs Click vs UzCard: comparing payment methods",
      excerpt:
        "Click, UzCard/HUMO, Payme (so‘m) and SBP (ruble) — which for which market? A comparison table by currency, speed and auto‑confirmation and 18 Q&A.",
      metaTitle: "SBP vs Click vs UzCard — payment methods 2026",
      metaDescription:
        "SBP vs Click vs UzCard/HUMO/Payme: a comparison by currency, market, speed and auto‑confirmation. Connecting so‘m and ruble payments together — 18 Q&A.",
      answerTitle: "Short answer",
      Answer: EnAnswer,
      Body: EnBody,
      ctaHeading: "Choose the payment for your market",
      ctaBody: "Through StarsPaymee Business, connect Click, UzCard/HUMO, Payme and SBP together.",
      faq: enFaq,
    },
  },
};
