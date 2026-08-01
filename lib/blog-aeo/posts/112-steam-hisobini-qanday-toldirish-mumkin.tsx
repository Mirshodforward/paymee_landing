import { Link } from "@/i18n/navigation";
import { InlineCta, Sources, KeyFacts, CompareTable, Yes, No } from "@/components/blog/aeo-blocks";
import type { AeoPost } from "@/lib/blog-aeo/types";

const SLUG = "steam-hisobini-qanday-toldirish-mumkin";

/* ---------------- UZ ---------------- */
function UzAnswer() {
  return (
    <p>
      Steam hisobini to‘ldirishning uchta asosiy yo‘li bor: xalqaro bank kartasi (Visa/Mastercard), Steam Gift Card
      kodi va mahalliy xizmatlar. O‘zbekistonda eng qulayi — @StarsPaymee_bot orqali UzCard, HUMO, Click yoki Payme
      bilan so‘mda to‘lash: xalqaro karta ham, valyuta ayirboshlash ham kerak bo‘lmaydi.
    </p>
  );
}

function UzBody() {
  return (
    <>
      <h2 id="nima">Steam hisobini to‘ldirish nima?</h2>
      <p>
        Steam hisobini to‘ldirish — bu <Link href="/blog/steam-wallet-nima">Steam Wallet</Link> balansiga mablag‘
        qo‘shish jarayoni. Balans to‘ldirilgach, Steam do‘konidagi aksariyat mahsulotlarni xarid qilishingiz mumkin:
        Counter-Strike 2 uchun Prime Status, EA SPORTS FC, GTA V, Red Dead Redemption 2, Dota 2 va CS2 buyumlari va
        boshqalar.
      </p>

      <h2 id="usullar">To‘ldirish usullari</h2>
      <CompareTable
        headers={["Usul", "Xalqaro karta kerakmi", "Valyuta", "Qulaylik"]}
        rows={[
          ["Bank kartasi (Visa/MC)", <Yes>ha</Yes>, "xorijiy", "o‘rtacha"],
          ["Steam Gift Card", <No>yo‘q</No>, "nominal bo‘yicha", "kod topish kerak"],
          ["Mahalliy xizmat (so‘mda)", <No>yo‘q</No>, "so‘m (UZS)", <Yes>eng qulay</Yes>],
        ]}
      />

      <h3 id="karta">1. Bank kartasi</h3>
      <p>
        Visa yoki Mastercard orqali to‘g‘ridan-to‘g‘ri Steam’da to‘lov. Afzalligi — rasmiy usul. Kamchiligi — hamma
        foydalanuvchida xalqaro karta yo‘q va valyuta konvertatsiyasi bo‘lishi mumkin.
      </p>

      <h3 id="gift">2. Steam Gift Card</h3>
      <p>
        Gift Card kodi sotib olinadi va hisobga faollashtiriladi. Oson ishlatiladi, lekin kerakli nominalni topish
        har doim ham oson emas va hudud (region) bo‘yicha cheklovlar bo‘lishi mumkin.{" "}
        <Link href="/blog/steam-gift-card-nima">Steam Gift Card nima?</Link>
      </p>

      <h3 id="mahalliy">3. Mahalliy servislar</h3>
      <p>
        O‘zbekistonda Steam balansini so‘mda to‘ldirish imkonini beruvchi xizmatlar mavjud. Masalan,{" "}
        <a href="https://t.me/StarsPaymee_bot" target="_blank" rel="noopener noreferrer">@StarsPaymee_bot</a> orqali
        UzCard yoki HUMO bilan qulay tarzda to‘lashingiz mumkin. Batafsil:{" "}
        <Link href="/blog/steam-wallet-uzcard-orqali-toldirish">UzCard orqali</Link> va{" "}
        <Link href="/blog/steam-wallet-humo-orqali-toldirish">Humo orqali</Link>.
      </p>

      <InlineCta text="So‘mda tez to‘ldirmoqchimisiz? Botda buyurtma bering." />

      <h2 id="nega">Nima uchun UZS orqali to‘ldirish qulay?</h2>
      <KeyFacts label="Afzalliklari">
        <li>Valyuta almashtirish shart emas.</li>
        <li>Mahalliy to‘lov usullaridan foydalanish mumkin.</li>
        <li>Jarayon tez amalga oshiriladi.</li>
        <li>Hisobga mablag‘ qisqa vaqt ichida tushadi.</li>
      </KeyFacts>

      <h2 id="maslahat">Maslahatlar</h2>
      <ul>
        <li>Steam login ma’lumotlarini diqqat bilan kiriting.</li>
        <li>Hisobingiz valyutasini tekshiring.</li>
        <li>Faqat ishonchli xizmatlardan foydalaning.</li>
        <li>Hech qachon Steam parolingizni begona saytlarga bermang.</li>
      </ul>
      <p>
        Agar balans kelmasa —{" "}
        <Link href="/blog/steam-balansi-tushmadi">nima qilish kerakligi haqidagi qo‘llanma</Link>ni ko‘ring.
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
      Пополнить аккаунт Steam можно тремя основными способами: международной банковской картой (Visa/Mastercard),
      кодом Steam Gift Card и через локальные сервисы. В Узбекистане удобнее всего оплатить в сумах через
      @StarsPaymee_bot картой UzCard, HUMO, через Click или Payme — ни международная карта, ни обмен валюты не нужны.
    </p>
  );
}

function RuBody() {
  return (
    <>
      <h2 id="nima">Что такое пополнение аккаунта Steam?</h2>
      <p>
        Пополнение аккаунта Steam — это добавление средств на баланс{" "}
        <Link href="/blog/steam-wallet-nima">Steam Wallet</Link>. После пополнения вы можете покупать большинство
        товаров магазина Steam: Prime Status для Counter‑Strike 2, EA SPORTS FC, GTA V, Red Dead Redemption 2,
        предметы Dota 2 и CS2 и другое.
      </p>

      <h2 id="usullar">Способы пополнения</h2>
      <CompareTable
        headers={["Способ", "Нужна ли международная карта", "Валюта", "Удобство"]}
        rows={[
          ["Банковская карта (Visa/MC)", <Yes>да</Yes>, "иностранная", "среднее"],
          ["Steam Gift Card", <No>нет</No>, "по номиналу", "нужно найти код"],
          ["Локальный сервис (в сумах)", <No>нет</No>, "сум (UZS)", <Yes>самое удобное</Yes>],
        ]}
      />

      <h3 id="karta">1. Банковская карта</h3>
      <p>
        Оплата напрямую в Steam через Visa или Mastercard. Плюс — официальный способ. Минус — не у всех есть
        международная карта, возможна конвертация валюты.
      </p>

      <h3 id="gift">2. Steam Gift Card</h3>
      <p>
        Покупается код Gift Card и активируется на аккаунте. Прост в использовании, но нужный номинал найти не
        всегда легко, и возможны региональные ограничения.{" "}
        <Link href="/blog/steam-gift-card-nima">Что такое Steam Gift Card?</Link>
      </p>

      <h3 id="mahalliy">3. Локальные сервисы</h3>
      <p>
        В Узбекистане есть сервисы, позволяющие пополнить баланс Steam в сумах. Например, через{" "}
        <a href="https://t.me/StarsPaymee_bot" target="_blank" rel="noopener noreferrer">@StarsPaymee_bot</a> можно
        удобно оплатить картой UzCard или HUMO. Подробнее:{" "}
        <Link href="/blog/steam-wallet-uzcard-orqali-toldirish">через UzCard</Link> и{" "}
        <Link href="/blog/steam-wallet-humo-orqali-toldirish">через Humo</Link>.
      </p>

      <InlineCta text="Хотите быстро пополнить в сумах? Оформите заказ в боте." />

      <h2 id="nega">Почему удобно пополнять в UZS?</h2>
      <KeyFacts label="Преимущества">
        <li>Не нужно менять валюту.</li>
        <li>Можно использовать локальные способы оплаты.</li>
        <li>Процесс проходит быстро.</li>
        <li>Средства поступают на аккаунт за короткое время.</li>
      </KeyFacts>

      <h2 id="maslahat">Советы</h2>
      <ul>
        <li>Внимательно вводите данные Steam login.</li>
        <li>Проверьте валюту вашего аккаунта.</li>
        <li>Пользуйтесь только надёжными сервисами.</li>
        <li>Никогда не сообщайте пароль Steam посторонним сайтам.</li>
      </ul>
      <p>
        Если баланс не пришёл — смотрите{" "}
        <Link href="/blog/steam-balansi-tushmadi">руководство, что делать</Link>.
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
      There are three main ways to top up a Steam account: an international bank card (Visa/Mastercard), a Steam Gift
      Card code, and local services. In Uzbekistan the most convenient is paying in so‘m via @StarsPaymee_bot with
      UzCard, HUMO, Click or Payme — no international card and no currency exchange needed.
    </p>
  );
}

function EnBody() {
  return (
    <>
      <h2 id="nima">What does topping up a Steam account mean?</h2>
      <p>
        Topping up a Steam account means adding funds to your{" "}
        <Link href="/blog/steam-wallet-nima">Steam Wallet</Link> balance. Once topped up you can buy most Steam store
        products: Prime Status for Counter‑Strike 2, EA SPORTS FC, GTA V, Red Dead Redemption 2, Dota 2 and CS2 items
        and more.
      </p>

      <h2 id="usullar">Top‑up methods</h2>
      <CompareTable
        headers={["Method", "International card needed", "Currency", "Convenience"]}
        rows={[
          ["Bank card (Visa/MC)", <Yes>yes</Yes>, "foreign", "medium"],
          ["Steam Gift Card", <No>no</No>, "by denomination", "must find a code"],
          ["Local service (in so‘m)", <No>no</No>, "so‘m (UZS)", <Yes>most convenient</Yes>],
        ]}
      />

      <h3 id="karta">1. Bank card</h3>
      <p>
        Paying directly on Steam via Visa or Mastercard. Pro — it's the official method. Con — not everyone has an
        international card, and currency conversion may apply.
      </p>

      <h3 id="gift">2. Steam Gift Card</h3>
      <p>
        You buy a Gift Card code and activate it on the account. Easy to use, but finding the right denomination
        isn't always simple and regional restrictions may apply.{" "}
        <Link href="/blog/steam-gift-card-nima">What is a Steam Gift Card?</Link>
      </p>

      <h3 id="mahalliy">3. Local services</h3>
      <p>
        In Uzbekistan there are services that let you top up your Steam balance in so‘m. For example, via{" "}
        <a href="https://t.me/StarsPaymee_bot" target="_blank" rel="noopener noreferrer">@StarsPaymee_bot</a> you can
        conveniently pay with UzCard or HUMO. More:{" "}
        <Link href="/blog/steam-wallet-uzcard-orqali-toldirish">via UzCard</Link> and{" "}
        <Link href="/blog/steam-wallet-humo-orqali-toldirish">via Humo</Link>.
      </p>

      <InlineCta text="Want a fast top‑up in so‘m? Place an order in the bot." />

      <h2 id="nega">Why is topping up in UZS convenient?</h2>
      <KeyFacts label="Advantages">
        <li>No currency exchange required.</li>
        <li>You can use local payment methods.</li>
        <li>The process is fast.</li>
        <li>Funds reach the account within a short time.</li>
      </KeyFacts>

      <h2 id="maslahat">Tips</h2>
      <ul>
        <li>Enter your Steam login details carefully.</li>
        <li>Check your account's currency.</li>
        <li>Use only trusted services.</li>
        <li>Never give your Steam password to unknown sites.</li>
      </ul>
      <p>
        If the balance doesn't arrive, see the{" "}
        <Link href="/blog/steam-balansi-tushmadi">guide on what to do</Link>.
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
  { question: "Steam hisobini qanday to‘ldirish mumkin?", answer: "Uch yo‘l bor: xalqaro bank kartasi, Steam Gift Card kodi va mahalliy xizmatlar. O‘zbekistonda so‘mda to‘lash eng qulayi." },
  { question: "Steam hisobiga pul qancha vaqtda tushadi?", answer: "Ko‘p hollarda bir necha daqiqa ichida." },
  { question: "Xalqaro karta bo‘lmasa nima qilaman?", answer: "Mahalliy xizmatlar orqali UzCard, HUMO, Click yoki Payme bilan so‘mda to‘lashingiz mumkin." },
  { question: "Steam login nima?", answer: "Bu sizning Steam akkauntingizni aniqlash uchun ishlatiladigan kirish nomi." },
  { question: "Steam parolini berish kerakmi?", answer: "Yo‘q. Ishonchli xizmatlar odatda parolingizni so‘ramaydi." },
  { question: "Gift Card qanday ishlaydi?", answer: "Kod sotib olinadi va hisobga faollashtiriladi — natijada Wallet balansi to‘ladi." },
  { question: "Gift Card’da hudud cheklovi bormi?", answer: "Ha, ba’zi kodlar muayyan hudud uchun mo‘ljallangan bo‘lishi mumkin." },
  { question: "Qaysi usul arzonroq?", answer: "Bu kurs, komissiya va xizmat shartlariga bog‘liq. So‘mda to‘lashda valyuta konvertatsiyasi bo‘lmaydi." },
  { question: "Balans qaysi valyutada tushadi?", answer: "Steam hisobingizga o‘rnatilgan valyutada." },
  { question: "Hisob valyutasini o‘zgartirsa bo‘ladimi?", answer: "Steam hisob valyutasi hudud sozlamalari bilan bog‘liq; o‘zgartirish Steam qoidalariga bo‘ysunadi." },
  { question: "Minimal summa bormi?", answer: "Ha, usul va xizmatga qarab. Aniq ma’lumotni botda ko‘rasiz." },
  { question: "To‘lovni bekor qilsa bo‘ladimi?", answer: "Buyurtma bajarilgach bekor qilish odatda mumkin emas; shuning uchun ma’lumotlarni tekshiring." },
  { question: "Do‘stimning hisobini to‘ldirsam bo‘ladimi?", answer: "Ha, uning hisob ma’lumotlarini to‘g‘ri kiritsangiz." },
  { question: "CS2 Prime Status olsa bo‘ladimi?", answer: "Ha, balans yordamida Steam do‘konidagi shu kabi mahsulotlarni xarid qilish mumkin." },
  { question: "Balans tushmasa nima qilaman?", answer: "Kuting, hisob ma’lumotlarini tekshiring, so‘ng buyurtma ID bilan qo‘llab-quvvatlashga yozing." },
  { question: "Buyurtma holatini qanday ko‘raman?", answer: "Botda buyurtma holatini kuzatishingiz mumkin." },
  { question: "Xizmat 24/7 ishlaydimi?", answer: "Ha, buyurtmani istalgan vaqtda berish mumkin." },
  { question: "Qaysi to‘lov usullari qabul qilinadi?", answer: "UzCard, HUMO, Click, Payme va O‘zbekiston bank kartalari." },
  { question: "Firibgarlikdan qanday saqlanaman?", answer: "Parol so‘raydigan, bozordan keskin past narx taklif qiladigan manbalardan ehtiyot bo‘ling." },
  { question: "Qayerda buyurtma beraman?", answer: "Telegramda @StarsPaymee_bot orqali «Steam Balance» xizmatini tanlaysiz." },
];

const ruFaq = [
  { question: "Как пополнить аккаунт Steam?", answer: "Есть три пути: международная банковская карта, код Steam Gift Card и локальные сервисы. В Узбекистане удобнее всего платить в сумах." },
  { question: "За сколько поступают деньги на Steam?", answer: "В большинстве случаев за несколько минут." },
  { question: "Что делать, если нет международной карты?", answer: "Через локальные сервисы можно оплатить в сумах картой UzCard, HUMO, через Click или Payme." },
  { question: "Что такое Steam login?", answer: "Это имя входа, используемое для идентификации вашего аккаунта Steam." },
  { question: "Нужно ли сообщать пароль Steam?", answer: "Нет. Надёжные сервисы обычно не запрашивают пароль." },
  { question: "Как работает Gift Card?", answer: "Покупается код и активируется на аккаунте — в результате пополняется баланс Wallet." },
  { question: "Есть ли региональные ограничения у Gift Card?", answer: "Да, некоторые коды предназначены для конкретного региона." },
  { question: "Какой способ дешевле?", answer: "Зависит от курса, комиссии и условий сервиса. При оплате в сумах нет конвертации валюты." },
  { question: "В какой валюте приходит баланс?", answer: "В валюте, установленной в вашем аккаунте Steam." },
  { question: "Можно ли изменить валюту аккаунта?", answer: "Валюта аккаунта Steam связана с региональными настройками; изменение подчиняется правилам Steam." },
  { question: "Есть ли минимальная сумма?", answer: "Да, в зависимости от способа и сервиса. Точные данные видно в боте." },
  { question: "Можно ли отменить оплату?", answer: "После выполнения заказа отмена обычно невозможна, поэтому проверяйте данные." },
  { question: "Можно ли пополнить аккаунт друга?", answer: "Да, если правильно указать его данные аккаунта." },
  { question: "Можно ли купить Prime Status для CS2?", answer: "Да, с баланса можно приобретать подобные товары магазина Steam." },
  { question: "Что делать, если баланс не пришёл?", answer: "Подождите, проверьте данные аккаунта, затем напишите в поддержку с ID заказа." },
  { question: "Как посмотреть статус заказа?", answer: "Статус заказа можно отслеживать в боте." },
  { question: "Сервис работает круглосуточно?", answer: "Да, заказ можно оформить в любое время." },
  { question: "Какие способы оплаты принимаются?", answer: "UzCard, HUMO, Click, Payme и банковские карты Узбекистана." },
  { question: "Как защититься от мошенников?", answer: "Остерегайтесь тех, кто просит пароль или предлагает цену значительно ниже рынка." },
  { question: "Где оформить заказ?", answer: "В Telegram через @StarsPaymee_bot, выбрав услугу «Steam Balance»." },
];

const enFaq = [
  { question: "How can I top up a Steam account?", answer: "Three ways: an international bank card, a Steam Gift Card code, and local services. In Uzbekistan paying in so‘m is the most convenient." },
  { question: "How fast do funds reach Steam?", answer: "In most cases within a few minutes." },
  { question: "What if I don't have an international card?", answer: "Through local services you can pay in so‘m with UzCard, HUMO, Click or Payme." },
  { question: "What is a Steam login?", answer: "It's the sign‑in name used to identify your Steam account." },
  { question: "Do I need to share my Steam password?", answer: "No. Trusted services generally don't ask for your password." },
  { question: "How does a Gift Card work?", answer: "You buy a code and activate it on the account — this tops up the Wallet balance." },
  { question: "Do Gift Cards have regional restrictions?", answer: "Yes, some codes are intended for a specific region." },
  { question: "Which method is cheaper?", answer: "It depends on the rate, fees and service terms. Paying in so‘m avoids currency conversion." },
  { question: "Which currency does the balance arrive in?", answer: "The currency set on your Steam account." },
  { question: "Can I change the account currency?", answer: "The Steam account currency is tied to regional settings; changing it follows Steam's rules." },
  { question: "Is there a minimum amount?", answer: "Yes, depending on the method and service. Exact details are shown in the bot." },
  { question: "Can I cancel a payment?", answer: "Once an order is fulfilled cancellation is usually not possible, so check the details." },
  { question: "Can I top up a friend's account?", answer: "Yes, if you enter their account details correctly." },
  { question: "Can I buy Prime Status for CS2?", answer: "Yes, the balance can be used for such Steam store products." },
  { question: "What if the balance doesn't arrive?", answer: "Wait, check the account details, then message support with the order ID." },
  { question: "How do I check the order status?", answer: "You can track the order status in the bot." },
  { question: "Does the service work 24/7?", answer: "Yes, you can order at any time." },
  { question: "Which payment methods are accepted?", answer: "UzCard, HUMO, Click, Payme and Uzbek bank cards." },
  { question: "How do I avoid scams?", answer: "Beware of anyone asking for your password or offering a price far below market." },
  { question: "Where do I place an order?", answer: "In Telegram via @StarsPaymee_bot, choosing the «Steam Balance» service." },
];

export const post: AeoPost = {
  slug: SLUG,
  category: "Steam",
  type: "howto",
  datePublished: "2026-07-29",
  dateModified: "2026-07-29",
  keywords: [
    "steam hisobini to‘ldirish",
    "steam top up uzbekistan",
    "steam pul solish",
    "steam balans to‘ldirish usullari",
    "steam gift card",
    "steam uzs",
  ],
  howToSteps: [
    { name: "Usulni tanlang", text: "Bank kartasi, Gift Card yoki mahalliy xizmatdan birini tanlang." },
    { name: "Hisob ma’lumotini tayyorlang", text: "Steam login yoki kerakli ma’lumotni to‘g‘ri kiriting." },
    { name: "Summani belgilang", text: "To‘ldiriladigan miqdorni tanlab, yakuniy narxni tekshiring." },
    { name: "To‘lang", text: "So‘mda UzCard, HUMO, Click yoki Payme orqali to‘lovni amalga oshiring." },
    { name: "Balansni tekshiring", text: "Bir necha daqiqada Steam Wallet balansini tekshiring." },
  ],
  locales: {
    uz: {
      title: "Steam hisobini qanday to‘ldirish mumkin? To‘liq qo‘llanma (2026)",
      excerpt:
        "Steam hisobini O‘zbekistondan qanday to‘ldirish mumkin? Bank kartasi, Gift Card va mahalliy xizmatlar taqqoslandi. UZS orqali tez va xavfsiz to‘ldirish bo‘yicha qo‘llanma.",
      metaTitle: "Steam hisobini qanday to‘ldirish mumkin? | 2026 Qo‘llanma",
      metaDescription:
        "Steam hisobini O‘zbekistondan qanday to‘ldirish mumkin? UZS orqali Steam Wallet balansini tez va xavfsiz to‘ldirish bo‘yicha batafsil qo‘llanma.",
      answerTitle: "Qisqa javob",
      Answer: UzAnswer,
      Body: UzBody,
      ctaHeading: "Hisobingizni so‘mda to‘ldiring",
      ctaBody: "@StarsPaymee_bot orqali UzCard, HUMO, Click yoki Payme bilan bir necha daqiqada.",
      faq: uzFaq,
    },
    ru: {
      title: "Как пополнить аккаунт Steam? Полное руководство (2026)",
      excerpt:
        "Как пополнить аккаунт Steam из Узбекистана? Сравнили банковскую карту, Gift Card и локальные сервисы. Руководство по быстрому и безопасному пополнению в UZS.",
      metaTitle: "Как пополнить аккаунт Steam? | Руководство 2026",
      metaDescription:
        "Как пополнить аккаунт Steam из Узбекистана? Подробное руководство по быстрому и безопасному пополнению баланса Steam Wallet в UZS.",
      answerTitle: "Краткий ответ",
      Answer: RuAnswer,
      Body: RuBody,
      ctaHeading: "Пополните аккаунт в сумах",
      ctaBody: "Через @StarsPaymee_bot картой UzCard, HUMO, Click или Payme за несколько минут.",
      faq: ruFaq,
    },
    en: {
      title: "How to top up a Steam account? A complete guide (2026)",
      excerpt:
        "How to top up a Steam account from Uzbekistan? We compare bank cards, Gift Cards and local services. A guide to fast, safe top‑ups in UZS.",
      metaTitle: "How to top up a Steam account? | 2026 guide",
      metaDescription:
        "How to top up a Steam account from Uzbekistan? A detailed guide to topping up your Steam Wallet balance quickly and safely in UZS.",
      answerTitle: "Short answer",
      Answer: EnAnswer,
      Body: EnBody,
      ctaHeading: "Top up your account in so‘m",
      ctaBody: "Via @StarsPaymee_bot with UzCard, HUMO, Click or Payme in just a few minutes.",
      faq: enFaq,
    },
  },
};
