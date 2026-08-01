import { Link } from "@/i18n/navigation";
import { InlineCta, Sources, KeyFacts, Steps, Step, InfoGrid, InfoCard } from "@/components/blog/aeo-blocks";
import type { AeoPost } from "@/lib/blog-aeo/types";

const SLUG = "steam-wallet-narxlari";

/* ---------------- UZ ---------------- */
function UzAnswer() {
  return (
    <p>
      Steam Wallet narxiga yagona javob yo‘q: u hisob valyutasi, to‘ldiriladigan summa, joriy valyuta kursi, to‘lov
      usuli va xizmat komissiyasiga bog‘liq. Shuning uchun yakuniy summa har bir buyurtma uchun farq qilishi mumkin —
      to‘lovdan oldin botda ko‘rsatilgan aniq narxni tekshiring.
    </p>
  );
}

function UzBody() {
  return (
    <>
      <h2 id="nimaga">Steam Wallet narxi nimaga bog‘liq?</h2>
      <p>
        Balansni to‘ldirishdan oldin foydalanuvchilarni eng ko‘p qiziqtiradigan savol — «Narxi qancha?». Bu savolga
        yagona javob yo‘q, chunki narx bir nechta omilga bog‘liq.
      </p>

      <KeyFacts label="Narxga ta’sir qiluvchi omillar">
        <li>Steam hisobining valyutasi.</li>
        <li>To‘ldiriladigan summa.</li>
        <li>Joriy valyuta kursi.</li>
        <li>To‘lov usuli (UzCard, HUMO, Click, Payme).</li>
        <li>Xizmat komissiyasi (agar mavjud bo‘lsa).</li>
      </KeyFacts>

      <h2 id="summalar">Qaysi summalarni to‘ldirish mumkin?</h2>
      <InfoGrid>
        <InfoCard emoji="🎯" title="Kichik miqdorlar">
          Arzon o‘yinlar, DLC yoki Market buyumlari uchun.
        </InfoCard>
        <InfoCard emoji="🎮" title="O‘rta miqdorlar">
          Mashhur o‘yinlarni sotib olish uchun qulay.
        </InfoCard>
        <InfoCard emoji="🔥" title="Yuqori miqdorlar">
          Bir nechta o‘yin yoki katta chegirmalar davrida xarid uchun.
        </InfoCard>
        <InfoCard emoji="📋" title="Aniq limitlar">
          Mavjud variantlarni <a href="https://t.me/StarsPaymee_bot" target="_blank" rel="noopener noreferrer">@StarsPaymee_bot</a> orqali ko‘rasiz.
        </InfoCard>
      </InfoGrid>

      <h2 id="ozgaradi">Nima uchun narxlar o‘zgaradi?</h2>
      <p>
        Steam platformasidagi narxlar va valyuta kurslari vaqt o‘tishi bilan o‘zgaradi. Shu sababli xizmatdagi
        narxlar ham yangilanib turadi. Buyurtma berishdan oldin botda ko‘rsatilgan yakuniy summani tekshirish
        tavsiya etiladi.
      </p>

      <InlineCta text="Joriy narxni bilmoqchimisiz? Botda tekshiring." />

      <h2 id="qadamlar">O‘zbekistonda qanday to‘ldiriladi?</h2>
      <Steps>
        <Step title="1. Botni oching">@StarsPaymee_bot botini oching.</Step>
        <Step title="2. Steam Balance ni tanlang">Xizmatlar ro‘yxatidan tanlang.</Step>
        <Step title="3. Summani kiriting">Kerakli miqdorni belgilang — yakuniy narx ko‘rinadi.</Step>
        <Step title="4. To‘lovni amalga oshiring">UzCard, HUMO, Click yoki Payme orqali so‘mda.</Step>
        <Step title="5. Buyurtma holatini kuzating">Balans tushishini tekshiring.</Step>
      </Steps>

      <h2 id="aksiya">Aksiyalarda balansni oldindan to‘ldirish foydalimi?</h2>
      <p>
        Ha. Steam yil davomida bir necha marta yirik chegirmalar o‘tkazadi. Oldindan balans tayyor bo‘lsa, o‘yinlarni
        chegirma davrida tezroq xarid qilish mumkin — to‘lovni kutib o‘tirmaysiz. Batafsil:{" "}
        <Link href="/blog/ozbek-somida-steam-balansini-toldirish">so‘mda to‘ldirish</Link> va{" "}
        <Link href="/blog/steam-hisobini-qanday-toldirish-mumkin">to‘ldirish usullari</Link>.
      </p>

      <Sources
        label="Manbalar"
        items={[
          { href: "https://store.steampowered.com/", label: "store.steampowered.com", note: "Steam rasmiy do‘koni" },
          { href: "https://help.steampowered.com/", label: "help.steampowered.com", note: "Steam yordam markazi" },
        ]}
      />
    </>
  );
}

/* ---------------- RU ---------------- */
function RuAnswer() {
  return (
    <p>
      На вопрос о цене Steam Wallet нет единого ответа: она зависит от валюты аккаунта, суммы пополнения, текущего
      курса, способа оплаты и комиссии сервиса. Поэтому итоговая сумма может отличаться для каждого заказа — перед
      оплатой проверяйте точную цену, показанную в боте.
    </p>
  );
}

function RuBody() {
  return (
    <>
      <h2 id="nimaga">От чего зависит цена Steam Wallet?</h2>
      <p>
        Перед пополнением баланса пользователей больше всего интересует вопрос «Сколько стоит?». Единого ответа нет,
        так как цена зависит от нескольких факторов.
      </p>

      <KeyFacts label="Факторы, влияющие на цену">
        <li>Валюта аккаунта Steam.</li>
        <li>Сумма пополнения.</li>
        <li>Текущий валютный курс.</li>
        <li>Способ оплаты (UzCard, HUMO, Click, Payme).</li>
        <li>Комиссия сервиса (если есть).</li>
      </KeyFacts>

      <h2 id="summalar">Какие суммы можно пополнить?</h2>
      <InfoGrid>
        <InfoCard emoji="🎯" title="Небольшие суммы">
          Для недорогих игр, DLC или предметов Market.
        </InfoCard>
        <InfoCard emoji="🎮" title="Средние суммы">
          Удобно для покупки популярных игр.
        </InfoCard>
        <InfoCard emoji="🔥" title="Крупные суммы">
          Для нескольких игр или покупок в период больших скидок.
        </InfoCard>
        <InfoCard emoji="📋" title="Точные лимиты">
          Доступные варианты видно через{" "}
          <a href="https://t.me/StarsPaymee_bot" target="_blank" rel="noopener noreferrer">@StarsPaymee_bot</a>.
        </InfoCard>
      </InfoGrid>

      <h2 id="ozgaradi">Почему цены меняются?</h2>
      <p>
        Цены на платформе Steam и валютные курсы со временем меняются. Поэтому цены в сервисе также обновляются.
        Перед оформлением заказа рекомендуется проверить итоговую сумму, показанную в боте.
      </p>

      <InlineCta text="Хотите узнать актуальную цену? Проверьте в боте." />

      <h2 id="qadamlar">Как пополнить в Узбекистане?</h2>
      <Steps>
        <Step title="1. Откройте бота">Откройте @StarsPaymee_bot.</Step>
        <Step title="2. Выберите Steam Balance">Выберите из списка услуг.</Step>
        <Step title="3. Укажите сумму">Задайте нужный размер — появится итоговая цена.</Step>
        <Step title="4. Оплатите">Через UzCard, HUMO, Click или Payme в сумах.</Step>
        <Step title="5. Следите за статусом">Проверьте поступление баланса.</Step>
      </Steps>

      <h2 id="aksiya">Выгодно ли пополнять заранее к распродажам?</h2>
      <p>
        Да. Steam несколько раз в год проводит крупные распродажи. Если баланс готов заранее, игры можно купить
        быстрее в период скидок — не придётся ждать оплату. Подробнее:{" "}
        <Link href="/blog/ozbek-somida-steam-balansini-toldirish">пополнение в сумах</Link> и{" "}
        <Link href="/blog/steam-hisobini-qanday-toldirish-mumkin">способы пополнения</Link>.
      </p>

      <Sources
        label="Источники"
        items={[
          { href: "https://store.steampowered.com/", label: "store.steampowered.com", note: "официальный магазин Steam" },
          { href: "https://help.steampowered.com/", label: "help.steampowered.com", note: "справка Steam" },
        ]}
      />
    </>
  );
}

/* ---------------- EN ---------------- */
function EnAnswer() {
  return (
    <p>
      There's no single answer to what Steam Wallet costs: it depends on the account currency, the top‑up amount, the
      current exchange rate, the payment method and any service fee. So the final total can differ per order — check
      the exact price shown in the bot before paying.
    </p>
  );
}

function EnBody() {
  return (
    <>
      <h2 id="nimaga">What does the Steam Wallet price depend on?</h2>
      <p>
        Before topping up, the question users care about most is «How much does it cost?». There's no single answer,
        because the price depends on several factors.
      </p>

      <KeyFacts label="Factors that affect the price">
        <li>The Steam account's currency.</li>
        <li>The top‑up amount.</li>
        <li>The current exchange rate.</li>
        <li>The payment method (UzCard, HUMO, Click, Payme).</li>
        <li>The service fee (if any).</li>
      </KeyFacts>

      <h2 id="summalar">Which amounts can you top up?</h2>
      <InfoGrid>
        <InfoCard emoji="🎯" title="Small amounts">
          For cheap games, DLC or Market items.
        </InfoCard>
        <InfoCard emoji="🎮" title="Medium amounts">
          Convenient for buying popular games.
        </InfoCard>
        <InfoCard emoji="🔥" title="Large amounts">
          For several games or purchases during big sales.
        </InfoCard>
        <InfoCard emoji="📋" title="Exact limits">
          See available options via{" "}
          <a href="https://t.me/StarsPaymee_bot" target="_blank" rel="noopener noreferrer">@StarsPaymee_bot</a>.
        </InfoCard>
      </InfoGrid>

      <h2 id="ozgaradi">Why do prices change?</h2>
      <p>
        Prices on the Steam platform and currency rates change over time. That's why service prices are updated too.
        Before ordering, it's recommended to check the final total shown in the bot.
      </p>

      <InlineCta text="Want the current price? Check in the bot." />

      <h2 id="qadamlar">How to top up in Uzbekistan</h2>
      <Steps>
        <Step title="1. Open the bot">Open @StarsPaymee_bot.</Step>
        <Step title="2. Choose Steam Balance">Select it from the service list.</Step>
        <Step title="3. Enter the amount">Set the amount — the final price appears.</Step>
        <Step title="4. Pay">Via UzCard, HUMO, Click or Payme in so‘m.</Step>
        <Step title="5. Track the status">Check that the balance arrives.</Step>
      </Steps>

      <h2 id="aksiya">Is topping up ahead of sales worth it?</h2>
      <p>
        Yes. Steam runs major sales several times a year. With a balance ready in advance you can buy games faster
        during the discount period — no waiting on payment. More:{" "}
        <Link href="/blog/ozbek-somida-steam-balansini-toldirish">topping up in so‘m</Link> and{" "}
        <Link href="/blog/steam-hisobini-qanday-toldirish-mumkin">top‑up methods</Link>.
      </p>

      <Sources
        label="Sources"
        items={[
          { href: "https://store.steampowered.com/", label: "store.steampowered.com", note: "official Steam store" },
          { href: "https://help.steampowered.com/", label: "help.steampowered.com", note: "Steam help centre" },
        ]}
      />
    </>
  );
}

const uzFaq = [
  { question: "Steam Wallet narxlari qanday hisoblanadi?", answer: "Hisob valyutasi, summa, valyuta kursi, to‘lov usuli va xizmat komissiyasiga qarab. Yagona qat’iy narx yo‘q." },
  { question: "Steam Wallet narxlari har kuni o‘zgaradimi?", answer: "Narxlar xizmat shartlari va valyuta kursiga qarab yangilanishi mumkin." },
  { question: "Minimal to‘ldirish summasi qancha?", answer: "Bu xizmatning amaldagi shartlariga bog‘liq. Eng dolzarb ma’lumotni bot orqali tekshirishingiz mumkin." },
  { question: "To‘lovdan oldin yakuniy narxni ko‘rish mumkinmi?", answer: "Ha, odatda buyurtmani tasdiqlashdan oldin yakuniy summa ko‘rsatiladi." },
  { question: "Nega narx har xil bo‘ladi?", answer: "Valyuta kursi va to‘lov usuli o‘zgargani sababli yakuniy summa har bir buyurtmada farq qilishi mumkin." },
  { question: "Komissiya bormi?", answer: "Agar mavjud bo‘lsa, u yakuniy summaga kiritiladi va botda ko‘rsatiladi." },
  { question: "Qaysi valyutada to‘layman?", answer: "So‘mda (UZS) — UzCard, HUMO, Click yoki Payme orqali." },
  { question: "Balans qaysi valyutada tushadi?", answer: "Steam hisobingizga o‘rnatilgan valyutada." },
  { question: "Katta summani bir marta to‘ldirish arzonroqmi?", answer: "Bu xizmat shartlariga bog‘liq; botda variantlarni solishtiring." },
  { question: "Chegirma davrida narx o‘zgaradimi?", answer: "Steam chegirmasi o‘yin narxiga ta’sir qiladi, balans to‘ldirish narxi esa kurs va shartlarga bog‘liq." },
  { question: "Narxni oldindan bilib olsam bo‘ladimi?", answer: "Ha, botda summani kiritsangiz yakuniy narx ko‘rsatiladi." },
  { question: "Nima uchun so‘mda to‘lash foydali?", answer: "Valyuta konvertatsiyasi bo‘lmagani uchun ortiqcha xarajat kamayadi." },
  { question: "Xalqaro karta bilan arzonroqmi?", answer: "Har doim ham emas — bank konvertatsiyasi va komissiyasi qo‘shilishi mumkin." },
  { question: "Narx kafolatlanadimi?", answer: "Buyurtmani tasdiqlaganingizda ko‘rsatilgan summa amal qiladi." },
  { question: "To‘lovdan keyin narx o‘zgaradimi?", answer: "Yo‘q, tasdiqlangan buyurtma summasi o‘zgarmaydi." },
  { question: "Bir necha marta kichik to‘ldirsam bo‘ladimi?", answer: "Ha, lekin har bir buyurtma alohida hisoblanadi." },
  { question: "Balansni nimalarga sarflayman?", answer: "O‘yinlar, DLC, Market buyumlari va ayrim o‘yin ichidagi xaridlar." },
  { question: "Narx ro‘yxati saytda bormi?", answer: "Joriy narxlar dinamik — eng aniq ma’lumot botda ko‘rsatiladi." },
  { question: "Bot 24/7 ishlaydimi?", answer: "Ha, narxni istalgan vaqtda tekshirishingiz mumkin." },
  { question: "Yordam kerak bo‘lsa kimga yozaman?", answer: "@StarsPaymeeSupport — narx va buyurtma bo‘yicha savollar uchun." },
];

const ruFaq = [
  { question: "Как рассчитываются цены Steam Wallet?", answer: "По валюте аккаунта, сумме, курсу, способу оплаты и комиссии сервиса. Единой фиксированной цены нет." },
  { question: "Меняются ли цены Steam Wallet каждый день?", answer: "Цены могут обновляться в зависимости от условий сервиса и валютного курса." },
  { question: "Какая минимальная сумма пополнения?", answer: "Зависит от действующих условий сервиса. Актуальную информацию можно проверить в боте." },
  { question: "Можно ли увидеть итоговую цену до оплаты?", answer: "Да, обычно итоговая сумма показывается перед подтверждением заказа." },
  { question: "Почему цена бывает разной?", answer: "Из‑за изменения курса и способа оплаты итоговая сумма может отличаться для каждого заказа." },
  { question: "Есть ли комиссия?", answer: "Если она есть, то включается в итоговую сумму и показывается в боте." },
  { question: "В какой валюте я плачу?", answer: "В сумах (UZS) — через UzCard, HUMO, Click или Payme." },
  { question: "В какой валюте приходит баланс?", answer: "В валюте, установленной в вашем аккаунте Steam." },
  { question: "Выгоднее ли пополнять крупной суммой сразу?", answer: "Зависит от условий сервиса; сравните варианты в боте." },
  { question: "Меняется ли цена во время распродажи?", answer: "Скидка Steam влияет на цену игр, а цена пополнения зависит от курса и условий." },
  { question: "Можно ли узнать цену заранее?", answer: "Да, при вводе суммы в боте показывается итоговая цена." },
  { question: "Почему выгодно платить в сумах?", answer: "Нет конвертации валюты, поэтому меньше лишних расходов." },
  { question: "Дешевле ли международной картой?", answer: "Не всегда — могут добавиться банковская конвертация и комиссия." },
  { question: "Гарантируется ли цена?", answer: "Действует сумма, показанная при подтверждении заказа." },
  { question: "Меняется ли цена после оплаты?", answer: "Нет, сумма подтверждённого заказа не меняется." },
  { question: "Можно ли пополнять понемногу несколько раз?", answer: "Да, но каждый заказ считается отдельно." },
  { question: "На что потратить баланс?", answer: "Игры, DLC, предметы Market и некоторые внутриигровые покупки." },
  { question: "Есть ли прайс‑лист на сайте?", answer: "Актуальные цены динамические — точные данные показываются в боте." },
  { question: "Бот работает круглосуточно?", answer: "Да, цену можно проверить в любое время." },
  { question: "Куда писать за помощью?", answer: "@StarsPaymeeSupport — по вопросам цены и заказа." },
];

const enFaq = [
  { question: "How are Steam Wallet prices calculated?", answer: "By account currency, amount, exchange rate, payment method and service fee. There's no single fixed price." },
  { question: "Do Steam Wallet prices change daily?", answer: "Prices may update depending on service terms and the exchange rate." },
  { question: "What is the minimum top‑up amount?", answer: "It depends on the service's current terms. You can check the latest information in the bot." },
  { question: "Can I see the final price before paying?", answer: "Yes, the final total is usually shown before you confirm the order." },
  { question: "Why does the price vary?", answer: "Because of rate changes and payment method, the final total can differ per order." },
  { question: "Is there a fee?", answer: "If there is one, it's included in the final total and shown in the bot." },
  { question: "Which currency do I pay in?", answer: "In so‘m (UZS) — via UzCard, HUMO, Click or Payme." },
  { question: "Which currency does the balance arrive in?", answer: "The currency set on your Steam account." },
  { question: "Is one large top‑up cheaper?", answer: "It depends on the service terms; compare the options in the bot." },
  { question: "Does the price change during a sale?", answer: "A Steam discount affects game prices, while the top‑up price depends on the rate and terms." },
  { question: "Can I find out the price in advance?", answer: "Yes, entering the amount in the bot shows the final price." },
  { question: "Why is paying in so‘m beneficial?", answer: "There's no currency conversion, so fewer extra costs." },
  { question: "Is an international card cheaper?", answer: "Not always — bank conversion and fees may be added." },
  { question: "Is the price guaranteed?", answer: "The amount shown when you confirm the order applies." },
  { question: "Does the price change after payment?", answer: "No, the confirmed order amount doesn't change." },
  { question: "Can I top up small amounts several times?", answer: "Yes, but each order is counted separately." },
  { question: "What can I spend the balance on?", answer: "Games, DLC, Market items and some in‑game purchases." },
  { question: "Is there a price list on the site?", answer: "Current prices are dynamic — exact details are shown in the bot." },
  { question: "Does the bot work 24/7?", answer: "Yes, you can check the price any time." },
  { question: "Who do I contact for help?", answer: "@StarsPaymeeSupport — for price and order questions." },
];

export const post: AeoPost = {
  slug: SLUG,
  category: "Steam",
  type: "info",
  datePublished: "2026-07-25",
  dateModified: "2026-07-25",
  keywords: [
    "steam wallet narxlari",
    "steam balans narxi",
    "steam wallet price uzbekistan",
    "steam to‘ldirish narxi",
    "steam wallet 2026",
    "steam uzs narx",
  ],
  howToSteps: [
    { name: "Botni oching", text: "@StarsPaymee_bot botini oching." },
    { name: "Steam Balance ni tanlang", text: "Xizmatlar ro‘yxatidan Steam bo‘limini tanlang." },
    { name: "Summani kiriting", text: "Kerakli miqdorni belgilang — yakuniy narx ko‘rinadi." },
    { name: "To‘lovni amalga oshiring", text: "UzCard, HUMO, Click yoki Payme orqali so‘mda to‘lang." },
    { name: "Buyurtma holatini kuzating", text: "Balans tushishini tekshiring." },
  ],
  locales: {
    uz: {
      title: "Steam Wallet narxlari (2026) — narx nimaga bog‘liq?",
      excerpt:
        "Steam Wallet narxlari qanday shakllanadi? Hisob valyutasi, summa, kurs, to‘lov usuli va komissiya ta’siri. O‘zbekistonda so‘mda to‘ldirish tartibi va 20 savol-javob.",
      metaTitle: "Steam Wallet narxlari (2026) — O‘zbekistonda to‘ldirish",
      metaDescription:
        "Steam Wallet narxlari qanday hisoblanadi? O‘zbekistonda Steam balansini to‘ldirish narxlari va to‘lov jarayoni haqida batafsil ma’lumot.",
      answerTitle: "Qisqa javob",
      Answer: UzAnswer,
      Body: UzBody,
      ctaHeading: "Joriy narxni tekshiring",
      ctaBody: "@StarsPaymee_bot da summani kiriting — yakuniy narx darhol ko‘rinadi.",
      faq: uzFaq,
    },
    ru: {
      title: "Цены Steam Wallet (2026) — от чего зависит стоимость?",
      excerpt:
        "Как формируются цены Steam Wallet? Влияние валюты аккаунта, суммы, курса, способа оплаты и комиссии. Порядок пополнения в сумах и 20 вопросов‑ответов.",
      metaTitle: "Цены Steam Wallet (2026) — пополнение в Узбекистане",
      metaDescription:
        "Как рассчитываются цены Steam Wallet? Подробная информация о ценах пополнения баланса Steam в Узбекистане и процессе оплаты.",
      answerTitle: "Краткий ответ",
      Answer: RuAnswer,
      Body: RuBody,
      ctaHeading: "Проверьте актуальную цену",
      ctaBody: "Введите сумму в @StarsPaymee_bot — итоговая цена появится сразу.",
      faq: ruFaq,
    },
    en: {
      title: "Steam Wallet prices (2026) — what does the cost depend on?",
      excerpt:
        "How are Steam Wallet prices formed? The effect of account currency, amount, rate, payment method and fees. How to top up in so‘m and 20 Q&A.",
      metaTitle: "Steam Wallet prices (2026) — topping up in Uzbekistan",
      metaDescription:
        "How are Steam Wallet prices calculated? Detailed information about Steam balance top‑up prices in Uzbekistan and the payment process.",
      answerTitle: "Short answer",
      Answer: EnAnswer,
      Body: EnBody,
      ctaHeading: "Check the current price",
      ctaBody: "Enter an amount in @StarsPaymee_bot — the final price appears instantly.",
      faq: enFaq,
    },
  },
};
