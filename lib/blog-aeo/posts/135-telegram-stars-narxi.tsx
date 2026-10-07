import { Link } from "@/i18n/navigation";
import { InlineCta, Sources, KeyFacts, Steps, Step } from "@/components/blog/aeo-blocks";
import { StarsPriceBoard } from "@/components/blog/stars-price-board";
import type { AeoPost } from "@/lib/blog-aeo/types";
import { formatStarsPrice } from "@/lib/products";

const SLUG = "telegram-stars-narxi";

/* ---------------- UZ ---------------- */
function UzAnswer() {
  return (
    <p>
      StarsPaymee’da 1 dona Stars Uzcard/Humo kartaga o‘tkazmada <b>{formatStarsPrice(1, "uz")}</b> (50 ta —{" "}
      <b>{formatStarsPrice(50, "uz")}</b>), Click, Payme, Uzum yoki Paynet orqali{" "}
      <b>{formatStarsPrice(1, "uz", "gateway")}</b> (50 ta — <b>{formatStarsPrice(50, "uz", "gateway")}</b>). Rasmiy
      oqimda esa ustiga valyuta konvertatsiyasi va do‘kon komissiyasi qo‘shiladi. Joriy summa buyurtma paytida botda
      ko‘rsatiladi.
    </p>
  );
}

function UzBody() {
  return (
    <>
      <h2 id="omillar">Stars narxiga ta’sir qiluvchi omillar</h2>
      <KeyFacts label="Narx nimaga bog‘liq">
        <li><b>Paket hajmi</b> — qancha ko‘p olsangiz, birlik narxi shuncha barqaror rejalashtiriladi.</li>
        <li>
          <b>To‘lov usuli</b> — StarsPaymee’da karta o‘tkazmasida {formatStarsPrice(1, "uz")}/dona, Click, Payme, Uzum
          yoki Paynet orqali {formatStarsPrice(1, "uz", "gateway")}/dona; boshqa xizmatlarda ham usullar turlicha
          komissiya olishi mumkin.
        </li>
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
        Jadvalda ikki narx: karta o‘tkazmasi va Click, Payme, Uzum, Paynet orqali onlayn to‘lov. Tanlangan usul
        bo‘yicha yakuniy summa to‘lovdan oldin botda ko‘rinadi — keyin ustiga hech narsa qo‘shilmaydi.
      </p>

      <InlineCta text="Miqdorni kiriting — yakuniy summani darhol ko‘rasiz." />

      <h2 id="ozgarish">Narx qachon o‘zgaradi?</h2>
      <p>
        Jadvaldagi raqamlar doimiy emas. Narx uch holatda qayta ko‘rib chiqiladi: paket tuzilishi yangilanganda,
        aksiya davri boshlanib-tugaganda va valyuta kursi sezilarli siljiganda. Shuning uchun bir oy oldin ko‘rgan
        summangiz bugungi summadan biroz farq qilishi mumkin — bu xatolik emas.
      </p>
      <KeyFacts label="Narxni solishtirishda">
        <li>
          <b>Bir yulduzga tushadigan narxni hisoblang</b> — StarsPaymee’da birlik narxi barcha paketlarda bir xil
          (karta o‘tkazmasida {formatStarsPrice(1, "uz")}, Click/Payme/Uzum/Paynet orqali{" "}
          {formatStarsPrice(1, "uz", "gateway")}), boshqa platformalarda esa paket hajmiga qarab farq qilishi mumkin. Solishtirishni paket
          summasi bo‘yicha emas, shu raqam bo‘yicha qiling.
        </li>
        <li>
          <b>Yakuniy summa buyurtma paytida</b> — botda miqdorni kiritganingizda ko‘rinadigan raqam hisoblanadi,
          eski skrinshot yoki boshqa saytdagi raqam emas.
        </li>
        <li>
          <b>Xariddan oldin joriy narxni oching</b> — bu ayniqsa aksiya va kurs o‘zgargan kunlarda muhim.
        </li>
      </KeyFacts>

      <h2 id="paket">Qaysi paketni tanlash kerak?</h2>
      <KeyFacts label="Maqsad bo‘yicha">
        <li>
          <b>50–100 ⭐</b> — bir martalik sovg‘a, reaksiya yoki botdagi kichik xizmat uchun.
        </li>
        <li>
          <b>250–500 ⭐</b> — muntazam foydalanish: bir nechta sovg‘a yoki bot obunasi.
        </li>
        <li>
          <b>1000 ⭐ va undan yuqori</b> — kanal monetizatsiyasi, sovg‘alar seriyasi yoki jamoaviy xaridlar.
        </li>
      </KeyFacts>
      <p>
        Aynan 1000 dona kerakmi? To‘lov usuli bo‘yicha narx va xarid tartibi:{" "}
        <Link href="/blog/1000-stars-olish-click-payme">1000 Stars olish — Click va Payme orqali</Link>.
      </p>
      <p>
        Bir nechta kichik buyurtma o‘rniga bitta yirik paket olish qulayroq: tranzaksiya soni kamayadi, demak bank
        tasdig‘i va xatolik ehtimoli ham kamayadi. Birlik narxi esa barcha paketda bir xil bo‘lgani uchun bunda
        hech narsa yutqazmaysiz.
      </p>

      <h2 id="arzon">Qanday qilib eng qulay narxni topish mumkin?</h2>
      <Steps>
        <Step title="1. Solishtiring">Bir nechta xizmat narxini taqqoslang.</Step>
        <Step title="2. Paketni tanlang">Ehtiyojingizga mos hajmni belgilang.</Step>
        <Step title="3. Aksiyalarni kuzating">Chegirma davrlarini nazorat qiling.</Step>
        <Step title="4. Ishonchni tekshiring">Arzon narx doim ham eng yaxshi tanlov emas.</Step>
      </Steps>

      <p>
        Qarang: <Link href="/blog/ozbekistonda-telegram-stars-sotib-olish">Stars sotib olish qo‘llanmasi</Link>,{" "}
        1 yulduz necha so‘m va{" "}
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
      В StarsPaymee 1 Stars стоит <b>{formatStarsPrice(1, "ru")}</b> при переводе на карту Uzcard/Humo (50 штук —{" "}
      <b>{formatStarsPrice(50, "ru")}</b>) и <b>{formatStarsPrice(1, "ru", "gateway")}</b> через Click, Payme, Uzum или
      Paynet (50 штук — <b>{formatStarsPrice(50, "ru", "gateway")}</b>). В официальном сценарии сверху добавляются
      конвертация валюты и комиссия магазина. Актуальная сумма показывается в боте при заказе.
    </p>
  );
}

function RuBody() {
  return (
    <>
      <h2 id="omillar">Факторы, влияющие на цену Stars</h2>
      <KeyFacts label="От чего зависит цена">
        <li><b>Размер пакета</b> — чем больше объём, тем предсказуемее планируется стоимость единицы.</li>
        <li>
          <b>Способ оплаты</b> — в StarsPaymee переводом на карту {formatStarsPrice(1, "ru")} за штуку, через Click,
          Payme, Uzum или Paynet — {formatStarsPrice(1, "ru", "gateway")}; в других сервисах способы тоже могут
          различаться по комиссии.
        </li>
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
      <p>
        В таблице две цены: перевод на карту и онлайн-оплата через Click, Payme, Uzum, Paynet. Итоговую сумму по
        выбранному способу бот показывает до оплаты — потом ничего не добавляется.
      </p>

      <InlineCta text="Введите количество — итоговую сумму увидите сразу." />

      <h2 id="ozgarish">Когда меняется цена?</h2>
      <p>
        Цифры в таблице не зафиксированы навсегда. Цену пересматривают в трёх случаях: когда обновляется состав
        пакетов, когда начинается или заканчивается акция и когда заметно сдвигается курс валюты. Поэтому сумма,
        которую вы видели месяц назад, может немного отличаться от сегодняшней — это не ошибка.
      </p>
      <KeyFacts label="При сравнении цен">
        <li>
          <b>Считайте цену одной звезды</b> — в StarsPaymee цена единицы одинакова во всех пакетах (
          {formatStarsPrice(1, "ru")} переводом на карту, {formatStarsPrice(1, "ru", "gateway")} через
          Click/Payme/Uzum/Paynet), а на других площадках может зависеть от объёма. Сравнивайте именно по этому числу, а не по сумме пакета.
        </li>
        <li>
          <b>Итоговая сумма — в момент заказа</b> — считается число, которое бот показывает после ввода
          количества, а не старый скриншот или цифра с другого сайта.
        </li>
        <li>
          <b>Откройте актуальную цену перед покупкой</b> — особенно в дни акций и движения курса.
        </li>
      </KeyFacts>
      <p>
        Нужно ровно 1000 штук? Цена по способу оплаты и порядок покупки:{" "}
        <Link href="/blog/1000-stars-olish-click-payme">купить 1000 Stars через Click и Payme</Link>.
      </p>

      <h2 id="arzon">Как найти самую выгодную цену?</h2>
      <Steps>
        <Step title="1. Сравните">Сопоставьте цены нескольких сервисов.</Step>
        <Step title="2. Выберите пакет">Определите объём под свою задачу.</Step>
        <Step title="3. Следите за акциями">Отслеживайте периоды скидок.</Step>
        <Step title="4. Проверьте надёжность">Самая низкая цена не всегда лучший выбор.</Step>
      </Steps>

      <p>
        Смотрите: <Link href="/blog/ozbekistonda-telegram-stars-sotib-olish">руководство по покупке Stars</Link>,{" "}
        сколько сумов стоит звезда и{" "}
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
      At StarsPaymee one Star costs <b>{formatStarsPrice(1, "en")}</b> by Uzcard/Humo card transfer (fifty cost{" "}
      <b>{formatStarsPrice(50, "en")}</b>) and <b>{formatStarsPrice(1, "en", "gateway")}</b> via Click, Payme, Uzum or
      Paynet (fifty cost <b>{formatStarsPrice(50, "en", "gateway")}</b>). The official flow adds currency conversion
      and a store fee on top. The current total is shown in the bot when you order.
    </p>
  );
}

function EnBody() {
  return (
    <>
      <h2 id="omillar">What affects the price of Stars</h2>
      <KeyFacts label="What the price depends on">
        <li><b>Pack size</b> — the larger the volume, the more predictable the per-unit planning.</li>
        <li>
          <b>Payment method</b> — at StarsPaymee {formatStarsPrice(1, "en")} per star by card transfer and{" "}
          {formatStarsPrice(1, "en", "gateway")} via Click, Payme, Uzum or Paynet; elsewhere, methods can carry
          different fees too.
        </li>
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
      <p>
        The table shows two prices: card transfer and online payment via Click, Payme, Uzum, Paynet. The bot shows the
        final total for the method you pick before you pay — nothing is added afterwards.
      </p>

      <InlineCta text="Enter an amount — you see the final total at once." />

      <h2 id="ozgarish">When does the price change?</h2>
      <p>
        The numbers in the table are not fixed forever. The price is revisited in three cases: when the package
        line-up is updated, when a promotion starts or ends, and when the exchange rate moves noticeably. So the
        amount you saw a month ago may differ slightly from today’s — that is not an error.
      </p>
      <KeyFacts label="When comparing prices">
        <li>
          <b>Work out the price of a single Star</b> — at StarsPaymee the unit price is the same in every pack (
          {formatStarsPrice(1, "en")} by card transfer, {formatStarsPrice(1, "en", "gateway")} via
          Click/Payme/Uzum/Paynet), while on other platforms it can depend on volume. Compare by that figure, not by the package total.
        </li>
        <li>
          <b>The final total is the one at order time</b> — what counts is the number the bot shows after you enter
          the amount, not an old screenshot or a figure from another site.
        </li>
        <li>
          <b>Open the current price before buying</b> — this matters most on promotion days and when the rate moves.
        </li>
      </KeyFacts>
      <p>
        Need exactly 1000? The price by payment method and how to buy:{" "}
        <Link href="/blog/1000-stars-olish-click-payme">buying 1000 Stars with Click or Payme</Link>.
      </p>

      <h2 id="arzon">How to find the best price</h2>
      <Steps>
        <Step title="1. Compare">Check the prices of several services.</Step>
        <Step title="2. Choose a pack">Pick the size that fits your need.</Step>
        <Step title="3. Watch for promotions">Keep an eye on discount periods.</Step>
        <Step title="4. Check trust">The cheapest price is not always the best choice.</Step>
      </Steps>

      <p>
        See: <Link href="/blog/ozbekistonda-telegram-stars-sotib-olish">the guide to buying Stars</Link>,{" "}
        how many so‘m one Star costs and{" "}
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
  {
    question: "Telegram Stars narxi qancha?",
    answer: `Karta o‘tkazmasida 1 dona — ${formatStarsPrice(1, "uz")}, 50 ta — ${formatStarsPrice(50, "uz")}; Click, Payme, Uzum yoki Paynet orqali 1 dona — ${formatStarsPrice(1, "uz", "gateway")}, 50 ta — ${formatStarsPrice(50, "uz", "gateway")}.`,
  },
  { question: "Narx nimaga bog‘liq?", answer: "Paket hajmi, to‘lov usuli, xizmat turi va valyuta kursiga." },
  { question: "Rasmiy narx nega qimmatroq chiqadi?", answer: "App Store/Google Play komissiyasi va valyuta konvertatsiyasi qo‘shilgani uchun." },
  {
    question: "Yashirin komissiya bormi?",
    answer: `Yo‘q. Tanlangan to‘lov usuli bo‘yicha yakuniy summa to‘lovdan oldin botda ko‘rsatiladi: Click, Payme, Uzum yoki Paynet orqali dona narxi ${formatStarsPrice(1, "uz", "gateway")}, karta o‘tkazmasida — ${formatStarsPrice(1, "uz")}.`,
  },
  { question: "Narx o‘zgaradimi?", answer: "Bozor sharoitiga qarab yangilanishi mumkin — botda joriy narxni tekshiring." },
  { question: "Katta paket arzonroqmi?", answer: "Birlik narxi bir xil, lekin bitta buyurtmada ko‘p olish qulayroq." },
  { question: "Qaysi valyutada to‘layman?", answer: "So‘mda (UZS)." },
  { question: "Buyurtma summasi keyin o‘zgaradimi?", answer: "Yo‘q, tasdiqlangan summa o‘zgarmaydi." },
  {
    question: "Narx qaysi hollarda qayta ko‘rib chiqiladi?",
    answer:
      "Paket tuzilishi yangilanganda, aksiya boshlanib yoki tugaganda va valyuta kursi sezilarli siljiganda. Shuning uchun xariddan oldin botdagi joriy summaga qarang.",
  },
];

const ruFaq = [
  {
    question: "Сколько стоят Telegram Stars?",
    answer: `Переводом на карту 1 штука — ${formatStarsPrice(1, "ru")}, 50 штук — ${formatStarsPrice(50, "ru")}; через Click, Payme, Uzum или Paynet 1 штука — ${formatStarsPrice(1, "ru", "gateway")}, 50 штук — ${formatStarsPrice(50, "ru", "gateway")}.`,
  },
  { question: "От чего зависит цена?", answer: "От размера пакета, способа оплаты, типа сервиса и курса валюты." },
  { question: "Почему официальная цена выше?", answer: "Из-за комиссии App Store/Google Play и конвертации валюты." },
  {
    question: "Есть ли скрытые комиссии?",
    answer: `Нет. Итоговую сумму по выбранному способу оплаты бот показывает до оплаты: через Click, Payme, Uzum или Paynet — ${formatStarsPrice(1, "ru", "gateway")} за штуку, переводом на карту — ${formatStarsPrice(1, "ru")}.`,
  },
  { question: "Меняется ли цена?", answer: "Может обновляться по рыночным условиям — проверяйте актуальную цену в боте." },
  { question: "Дешевле ли крупный пакет?", answer: "Цена за единицу одинакова, но одним заказом брать больше удобнее." },
  { question: "В какой валюте оплата?", answer: "В сумах (UZS)." },
  { question: "Изменится ли сумма заказа потом?", answer: "Нет, подтверждённая сумма не меняется." },
  {
    question: "В каких случаях цену пересматривают?",
    answer:
      "При обновлении состава пакетов, в начале и конце акций и при заметном движении курса валюты. Поэтому перед покупкой смотрите актуальную сумму в боте.",
  },
];

const enFaq = [
  {
    question: "How much do Telegram Stars cost?",
    answer: `By card transfer ${formatStarsPrice(1, "en")} each and ${formatStarsPrice(50, "en")} for fifty; via Click, Payme, Uzum or Paynet ${formatStarsPrice(1, "en", "gateway")} each and ${formatStarsPrice(50, "en", "gateway")} for fifty.`,
  },
  { question: "What does the price depend on?", answer: "Pack size, payment method, service type and the exchange rate." },
  { question: "Why is the official price higher?", answer: "Because of the App Store/Google Play fee and currency conversion." },
  {
    question: "Are there hidden fees?",
    answer: `No. The bot shows the final total for the method you pick before you pay: ${formatStarsPrice(1, "en", "gateway")} per star via Click, Payme, Uzum or Paynet, ${formatStarsPrice(1, "en")} by card transfer.`,
  },
  { question: "Do prices change?", answer: "They can update with market conditions — check the current price in the bot." },
  { question: "Is a bigger pack cheaper?", answer: "The per-unit price is the same, but buying more in one order is more convenient." },
  { question: "Which currency do I pay in?", answer: "In so‘m (UZS)." },
  { question: "Can the order total change later?", answer: "No, a confirmed total does not change." },
  {
    question: "When is the price revisited?",
    answer:
      "When the package line-up is updated, when a promotion starts or ends, and when the exchange rate moves noticeably. So check the current total in the bot before buying.",
  },
];

export const post: AeoPost = {
  slug: SLUG,
  category: "Stars",
  type: "info",
  datePublished: "2026-08-02",
  dateModified: "2026-10-06",
  keywords: [
    "telegram stars narxi",
    "stars narxi qancha",
    "telegram stars narxi ozbekiston",
    "stars narxi 2026 taqqoslash",
    "telegram stars narx 2026",
    "stars narx jadvali",
    "1 stars qancha",
    "stars narxi uzbekistan",
    "telegram stars paketlari 50 100 500 1000",
  ],
  locales: {
    uz: {
      title: "Telegram Stars narxi qancha turadi (2026)",
      excerpt:
        "Telegram Stars narxi qanday shakllanadi: paket hajmi, to‘lov usuli va kurs ta’siri. Joriy narx jadvali va eng qulay narxni topish yo‘llari.",
      metaTitle: "Telegram Stars narxi (2026) — to‘liq jadval",
      metaDescription:
        `Telegram Stars narxi qancha? 1 dona ${formatStarsPrice(1, "uz")} (karta o‘tkazmasi) yoki ${formatStarsPrice(1, "uz", "gateway")} (Click, Payme, Uzum, Paynet). Narxga ta’sir qiluvchi omillar va joriy narx jadvali.`,
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
        `Сколько стоят Telegram Stars? 1 штука ${formatStarsPrice(1, "ru")} (перевод на карту) или ${formatStarsPrice(1, "ru", "gateway")} (Click, Payme, Uzum, Paynet). Факторы, влияющие на цену, и актуальная таблица.`,
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
        `How much do Telegram Stars cost? ${formatStarsPrice(1, "en")} each by card transfer or ${formatStarsPrice(1, "en", "gateway")} via Click, Payme, Uzum or Paynet. The factors that affect the price and a current table.`,
      answerTitle: "Short answer",
      Answer: EnAnswer,
      Body: EnBody,
      ctaHeading: "Check the current price",
      ctaBody: "Enter an amount in @StarsPaymee_bot — the final total appears instantly.",
      faq: enFaq,
    },
  },
};
