import { Link } from "@/i18n/navigation";
import { InlineCta, Sources, KeyFacts, Steps, Step } from "@/components/blog/aeo-blocks";
import { StarsPriceBoard } from "@/components/blog/stars-price-board";
import type { AeoPost } from "@/lib/blog-aeo/types";

const SLUG = "telegram-stars-narxi";

/* ---------------- UZ ---------------- */
function UzAnswer() {
  return (
    <p>
      StarsPaymee’da 1 dona Stars — <b>220 so‘m</b>, 50 ta — <b>11 000 so‘m</b>. Narx paket hajmi, to‘lov usuli va
      xizmat turiga qarab farq qilishi mumkin; rasmiy oqimda esa ustiga valyuta konvertatsiyasi va do‘kon komissiyasi
      qo‘shiladi. Joriy summa buyurtma paytida botda ko‘rsatiladi.
    </p>
  );
}

function UzBody() {
  return (
    <>
      <h2 id="omillar">Stars narxiga ta’sir qiluvchi omillar</h2>
      <KeyFacts label="Narx nimaga bog‘liq">
        <li><b>Paket hajmi</b> — qancha ko‘p olsangiz, birlik narxi shuncha barqaror rejalashtiriladi.</li>
        <li><b>To‘lov usuli</b> — turli tizimlar turlicha komissiya olishi mumkin.</li>
        <li><b>Xizmat turi</b> — rasmiy narx va mahalliy xizmat narxi farq qiladi.</li>
        <li><b>Valyuta kursi</b> — xalqaro to‘lovlarda kurs yakuniy summaga ta’sir qiladi.</li>
      </KeyFacts>

      <h2 id="rasmiy">Rasmiy narx va muqobil narxlar</h2>
      <p>
        Rasmiy ilova orqali sotib olishda App Store yoki Google Play komissiyasi qo‘shilishi mumkin — bu umumiy narxni
        oshiradi. Shu sababli ko‘pchilik mahalliy xizmatni afzal ko‘radi: to‘lov so‘mda, konvertatsiyasiz.
      </p>

      <h2 id="jadval">Joriy narxlar jadvali</h2>
      <StarsPriceBoard locale="uz" />
      <p>
        Narxlar shaffof — ko‘rsatilgan summa yakuniy, ustiga yashirin to‘lov qo‘shilmaydi.
      </p>

      <InlineCta text="Miqdorni kiriting — yakuniy summani darhol ko‘rasiz." />

      <h2 id="arzon">Qanday qilib eng qulay narxni topish mumkin?</h2>
      <Steps>
        <Step title="1. Solishtiring">Bir nechta xizmat narxini taqqoslang.</Step>
        <Step title="2. Paketni tanlang">Ehtiyojingizga mos hajmni belgilang.</Step>
        <Step title="3. Aksiyalarni kuzating">Chegirma davrlarini nazorat qiling.</Step>
        <Step title="4. Ishonchni tekshiring">Arzon narx doim ham eng yaxshi tanlov emas.</Step>
      </Steps>

      <p>
        Qarang: <Link href="/blog/stars-olish">Stars olish</Link>,{" "}
        <Link href="/blog/som-evaziga-stars-olish">so‘m evaziga olish</Link> va{" "}
        <Link href="/blog/telegram-stars-xavfsizmi">xavfsizlik mezonlari</Link>.
      </p>

      <Sources
        label="Manbalar"
        items={[
          { href: "https://core.telegram.org/bots/payments-stars", label: "core.telegram.org", note: "Stars to‘lovlari hujjati" },
          { href: "https://cbu.uz/", label: "cbu.uz", note: "Markaziy bank — valyuta kurslari" },
        ]}
      />
    </>
  );
}

/* ---------------- RU ---------------- */
function RuAnswer() {
  return (
    <p>
      В StarsPaymee 1 Stars стоит <b>220 сум</b>, 50 штук — <b>11 000 сум</b>. Цена может отличаться в зависимости от
      размера пакета, способа оплаты и типа сервиса; в официальном сценарии сверху добавляются конвертация валюты и
      комиссия магазина. Актуальная сумма показывается в боте при заказе.
    </p>
  );
}

function RuBody() {
  return (
    <>
      <h2 id="omillar">Факторы, влияющие на цену Stars</h2>
      <KeyFacts label="От чего зависит цена">
        <li><b>Размер пакета</b> — чем больше объём, тем предсказуемее планируется стоимость единицы.</li>
        <li><b>Способ оплаты</b> — разные системы могут брать разную комиссию.</li>
        <li><b>Тип сервиса</b> — официальная цена и цена местного сервиса различаются.</li>
        <li><b>Курс валюты</b> — при международных платежах курс влияет на итог.</li>
      </KeyFacts>

      <h2 id="rasmiy">Официальная цена и альтернативы</h2>
      <p>
        При покупке через официальное приложение может добавляться комиссия App Store или Google Play — это повышает
        общую цену. Поэтому многие предпочитают местный сервис: оплата в сумах, без конвертации.
      </p>

      <h2 id="jadval">Таблица актуальных цен</h2>
      <StarsPriceBoard locale="ru" />
      <p>Цены прозрачны — показанная сумма итоговая, скрытых платежей сверху нет.</p>

      <InlineCta text="Введите количество — итоговую сумму увидите сразу." />

      <h2 id="arzon">Как найти самую выгодную цену?</h2>
      <Steps>
        <Step title="1. Сравните">Сопоставьте цены нескольких сервисов.</Step>
        <Step title="2. Выберите пакет">Определите объём под свою задачу.</Step>
        <Step title="3. Следите за акциями">Отслеживайте периоды скидок.</Step>
        <Step title="4. Проверьте надёжность">Самая низкая цена не всегда лучший выбор.</Step>
      </Steps>

      <p>
        Смотрите: <Link href="/blog/stars-olish">покупка Stars</Link>,{" "}
        <Link href="/blog/som-evaziga-stars-olish">покупка за сумы</Link> и{" "}
        <Link href="/blog/telegram-stars-xavfsizmi">критерии безопасности</Link>.
      </p>

      <Sources
        label="Источники"
        items={[
          { href: "https://core.telegram.org/bots/payments-stars", label: "core.telegram.org", note: "документация по оплате Stars" },
          { href: "https://cbu.uz/", label: "cbu.uz", note: "Центральный банк — курсы валют" },
        ]}
      />
    </>
  );
}

/* ---------------- EN ---------------- */
function EnAnswer() {
  return (
    <p>
      At StarsPaymee one Star costs <b>220 UZS</b> and fifty cost <b>11,000 UZS</b>. The price can vary with pack
      size, payment method and service type; the official flow adds currency conversion and a store fee on top. The
      current total is shown in the bot when you order.
    </p>
  );
}

function EnBody() {
  return (
    <>
      <h2 id="omillar">What affects the price of Stars</h2>
      <KeyFacts label="What the price depends on">
        <li><b>Pack size</b> — the larger the volume, the more predictable the per-unit planning.</li>
        <li><b>Payment method</b> — different systems can charge different fees.</li>
        <li><b>Service type</b> — the official price and a local service’s price differ.</li>
        <li><b>Exchange rate</b> — for international payments the rate shifts the total.</li>
      </KeyFacts>

      <h2 id="rasmiy">The official price versus alternatives</h2>
      <p>
        Buying through the official app can add an App Store or Google Play fee, which raises the overall price. That
        is why many people prefer a local service: payment in so‘m, with no conversion.
      </p>

      <h2 id="jadval">Current price table</h2>
      <StarsPriceBoard locale="en" />
      <p>Prices are transparent — the amount shown is final, with no hidden charges added afterwards.</p>

      <InlineCta text="Enter an amount — you see the final total at once." />

      <h2 id="arzon">How to find the best price</h2>
      <Steps>
        <Step title="1. Compare">Check the prices of several services.</Step>
        <Step title="2. Choose a pack">Pick the size that fits your need.</Step>
        <Step title="3. Watch for promotions">Keep an eye on discount periods.</Step>
        <Step title="4. Check trust">The cheapest price is not always the best choice.</Step>
      </Steps>

      <p>
        See: <Link href="/blog/stars-olish">getting Stars</Link>,{" "}
        <Link href="/blog/som-evaziga-stars-olish">buying with so‘m</Link> and{" "}
        <Link href="/blog/telegram-stars-xavfsizmi">safety criteria</Link>.
      </p>

      <Sources
        label="Sources"
        items={[
          { href: "https://core.telegram.org/bots/payments-stars", label: "core.telegram.org", note: "Stars payments documentation" },
          { href: "https://cbu.uz/", label: "cbu.uz", note: "Central Bank — exchange rates" },
        ]}
      />
    </>
  );
}

const uzFaq = [
  { question: "Telegram Stars narxi qancha?", answer: "1 dona — 220 so‘m, 50 ta — 11 000 so‘m." },
  { question: "Narx nimaga bog‘liq?", answer: "Paket hajmi, to‘lov usuli, xizmat turi va valyuta kursiga." },
  { question: "Rasmiy narx nega qimmatroq chiqadi?", answer: "App Store/Google Play komissiyasi va valyuta konvertatsiyasi qo‘shilgani uchun." },
  { question: "Yashirin komissiya bormi?", answer: "Yo‘q. Botda ko‘rsatilgan summa yakuniy." },
  { question: "Narx o‘zgaradimi?", answer: "Bozor sharoitiga qarab yangilanishi mumkin — botda joriy narxni tekshiring." },
  { question: "Katta paket arzonroqmi?", answer: "Birlik narxi bir xil, lekin bitta buyurtmada ko‘p olish qulayroq." },
  { question: "Qaysi valyutada to‘layman?", answer: "So‘mda (UZS)." },
  { question: "Buyurtma summasi keyin o‘zgaradimi?", answer: "Yo‘q, tasdiqlangan summa o‘zgarmaydi." },
];

const ruFaq = [
  { question: "Сколько стоят Telegram Stars?", answer: "1 штука — 220 сум, 50 штук — 11 000 сум." },
  { question: "От чего зависит цена?", answer: "От размера пакета, способа оплаты, типа сервиса и курса валюты." },
  { question: "Почему официальная цена выше?", answer: "Из-за комиссии App Store/Google Play и конвертации валюты." },
  { question: "Есть ли скрытые комиссии?", answer: "Нет. Показанная в боте сумма итоговая." },
  { question: "Меняется ли цена?", answer: "Может обновляться по рыночным условиям — проверяйте актуальную цену в боте." },
  { question: "Дешевле ли крупный пакет?", answer: "Цена за единицу одинакова, но одним заказом брать больше удобнее." },
  { question: "В какой валюте оплата?", answer: "В сумах (UZS)." },
  { question: "Изменится ли сумма заказа потом?", answer: "Нет, подтверждённая сумма не меняется." },
];

const enFaq = [
  { question: "How much do Telegram Stars cost?", answer: "220 UZS each; 11,000 UZS for fifty." },
  { question: "What does the price depend on?", answer: "Pack size, payment method, service type and the exchange rate." },
  { question: "Why is the official price higher?", answer: "Because of the App Store/Google Play fee and currency conversion." },
  { question: "Are there hidden fees?", answer: "No. The amount shown in the bot is final." },
  { question: "Do prices change?", answer: "They can update with market conditions — check the current price in the bot." },
  { question: "Is a bigger pack cheaper?", answer: "The per-unit price is the same, but buying more in one order is more convenient." },
  { question: "Which currency do I pay in?", answer: "In so‘m (UZS)." },
  { question: "Can the order total change later?", answer: "No, a confirmed total does not change." },
];

export const post: AeoPost = {
  slug: SLUG,
  category: "Stars",
  type: "info",
  datePublished: "2026-08-02",
  dateModified: "2026-08-02",
  keywords: [
    "telegram stars narxi",
    "stars narxi qancha",
    "telegram stars narx 2026",
    "stars narx jadvali",
    "1 stars qancha",
    "stars narxi uzbekistan",
  ],
  locales: {
    uz: {
      title: "Telegram Stars narxi qancha turadi (2026)",
      excerpt:
        "Telegram Stars narxi qanday shakllanadi: paket hajmi, to‘lov usuli va kurs ta’siri. Joriy narx jadvali va eng qulay narxni topish yo‘llari.",
      metaTitle: "Telegram Stars narxi (2026) — to‘liq jadval",
      metaDescription:
        "Telegram Stars narxi qancha? 1 dona 220 so‘m, 50 ta 11 000 so‘m. Narxga ta’sir qiluvchi omillar va joriy narx jadvali.",
      answerTitle: "Qisqa javob",
      Answer: UzAnswer,
      Body: UzBody,
      ctaHeading: "Joriy narxni tekshiring",
      ctaBody: "@StarsPaymee_bot da miqdorni kiriting — yakuniy summa darhol ko‘rinadi.",
      faq: uzFaq,
    },
    ru: {
      title: "Сколько стоят Telegram Stars (2026)",
      excerpt:
        "Как формируется цена Telegram Stars: размер пакета, способ оплаты и влияние курса. Актуальная таблица цен и как найти выгодный вариант.",
      metaTitle: "Цена Telegram Stars (2026) — полная таблица",
      metaDescription:
        "Сколько стоят Telegram Stars? 1 штука 220 сум, 50 штук 11 000 сум. Факторы, влияющие на цену, и актуальная таблица.",
      answerTitle: "Краткий ответ",
      Answer: RuAnswer,
      Body: RuBody,
      ctaHeading: "Проверьте актуальную цену",
      ctaBody: "Введите количество в @StarsPaymee_bot — итоговая сумма появится сразу.",
      faq: ruFaq,
    },
    en: {
      title: "How much Telegram Stars cost (2026)",
      excerpt:
        "How the price of Telegram Stars is formed: pack size, payment method and the exchange rate. A current price table and how to find the best deal.",
      metaTitle: "Telegram Stars price (2026) — full table",
      metaDescription:
        "How much do Telegram Stars cost? 220 UZS each, 11,000 UZS for fifty. The factors that affect the price and a current table.",
      answerTitle: "Short answer",
      Answer: EnAnswer,
      Body: EnBody,
      ctaHeading: "Check the current price",
      ctaBody: "Enter an amount in @StarsPaymee_bot — the final total appears instantly.",
      faq: enFaq,
    },
  },
};
