import { Link } from "@/i18n/navigation";
import { InlineCta, Sources, KeyFacts, CompareTable, Yes, No } from "@/components/blog/aeo-blocks";
import type { AeoPost } from "@/lib/blog-aeo/types";

const SLUG = "steam-wallet-nima";

/* ---------------- UZ ---------------- */
function UzAnswer() {
  return (
    <p>
      Steam Wallet — Steam hisobingiz ichidagi elektron balans. U orqali o‘yinlar, DLC, Steam Market buyumlari va
      o‘yin ichidagi ayrim kontentlarni sotib olasiz. Mablag‘ faqat Steam ekotizimida ishlatiladi, muddati odatda
      tugamaydi va naqd pul sifatida yechib olinmaydi.
    </p>
  );
}

function UzBody() {
  return (
    <>
      <h2 id="nima">Steam Wallet nima?</h2>
      <p>
        Steam Wallet — Steam hisobingizga bog‘langan elektron hamyon (balans). Unga mablag‘ tushirilgach, siz Steam
        do‘konidagi xaridlarni shu balansdan to‘laysiz. Bu balansdagi pul faqat Steam ichida amal qiladi.
      </p>

      <h2 id="ishlaydi">Steam Wallet qanday ishlaydi?</h2>
      <KeyFacts label="Ishlash tartibi">
        <li>Hisobingizga mablag‘ tushiriladi va Steam Wallet’da saqlanadi.</li>
        <li>Xarid qilganingizda summa avtomatik yechiladi.</li>
        <li>Qolgan mablag‘ keyingi xaridlar uchun balansda qoladi.</li>
        <li>Balans hisobingizning valyutasida ko‘rinadi.</li>
      </KeyFacts>

      <h2 id="nimalar">Steam Wallet orqali nimalarni sotib olish mumkin?</h2>
      <p>Balans yordamida quyidagilarni xarid qilishingiz mumkin:</p>
      <ul>
        <li>AAA va indie o‘yinlar</li>
        <li>DLC va qo‘shimcha kontent</li>
        <li>Soundtrack (o‘yin musiqasi)</li>
        <li>Steam Market buyumlari (CS2, Dota 2 va boshqalar)</li>
        <li>Profil bezaklari, sticker va emotelar</li>
        <li>Ayrim o‘yinlar ichidagi xaridlar</li>
      </ul>

      <InlineCta text="Steam Wallet balansini so‘mda to‘ldirmoqchimisiz? Botda buyurtma bering." />

      <h2 id="toldirish">Steam Wallet’ni qanday to‘ldirish mumkin?</h2>
      <p>
        Odatda quyidagi usullar mavjud: bank kartalari, Steam Gift Card, rasmiy to‘lov usullari va mahalliy
        xizmatlar. O‘zbekistonda ko‘p foydalanuvchilar qulaylik sababli{" "}
        <Link href="/blog/ozbek-somida-steam-balansini-toldirish">so‘mda to‘ldirish</Link>ni tanlaydi — UzCard va
        HUMO orqali. Batafsil:{" "}
        <Link href="/blog/steam-hisobini-qanday-toldirish-mumkin">Steam hisobini qanday to‘ldirish mumkin</Link>.
      </p>

      <h2 id="gift-card">Steam Wallet va Gift Card farqi</h2>
      <CompareTable
        headers={["Xususiyat", "Steam Wallet", "Steam Gift Card"]}
        rows={[
          ["Nima bu", "hisobdagi mavjud balans", "kod / karta"],
          ["Qachon ishlaydi", <Yes>darhol</Yes>, <>faollashtirilgandan keyin</>],
          ["Natija", "balans ishlatiladi", "balansni to‘ldiradi"],
          ["Sovg‘a qilish", <No>odatda yo‘q</No>, <Yes>ha</Yes>],
        ]}
      />
      <p>
        Ya’ni Gift Card — bu Steam Wallet balansini to‘ldiradigan vosita.{" "}
        <Link href="/blog/steam-gift-card-nima">Steam Gift Card nima?</Link>
      </p>

      <h2 id="xavfsiz">Steam Wallet xavfsizmi?</h2>
      <p>
        Ha, agar rasmiy Steam hisobidan foydalansangiz, parolingizni hech kimga bermasangiz va Steam Guard (ikki
        bosqichli himoya) yoqilgan bo‘lsa. Batafsil:{" "}
        <Link href="/blog/steam-wallet-xavfsizmi">Steam Wallet xavfsizmi?</Link>
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
      Steam Wallet — электронный баланс внутри вашего аккаунта Steam. С его помощью вы покупаете игры, DLC, предметы
      Steam Market и часть внутриигрового контента. Средства используются только внутри экосистемы Steam, срок
      действия обычно не истекает, и вывести их наличными нельзя.
    </p>
  );
}

function RuBody() {
  return (
    <>
      <h2 id="nima">Что такое Steam Wallet?</h2>
      <p>
        Steam Wallet — электронный кошелёк (баланс), привязанный к вашему аккаунту Steam. После пополнения вы
        оплачиваете покупки в магазине Steam именно с этого баланса. Деньги на нём действуют только внутри Steam.
      </p>

      <h2 id="ishlaydi">Как работает Steam Wallet?</h2>
      <KeyFacts label="Порядок работы">
        <li>Средства зачисляются и хранятся в Steam Wallet.</li>
        <li>При покупке сумма списывается автоматически.</li>
        <li>Остаток сохраняется на балансе для следующих покупок.</li>
        <li>Баланс отображается в валюте вашего аккаунта.</li>
      </KeyFacts>

      <h2 id="nimalar">Что можно купить через Steam Wallet?</h2>
      <p>С помощью баланса можно приобрести:</p>
      <ul>
        <li>AAA и инди‑игры</li>
        <li>DLC и дополнительный контент</li>
        <li>Саундтреки</li>
        <li>Предметы Steam Market (CS2, Dota 2 и другие)</li>
        <li>Оформление профиля, стикеры и эмоции</li>
        <li>Некоторые внутриигровые покупки</li>
      </ul>

      <InlineCta text="Хотите пополнить Steam Wallet в сумах? Оформите заказ в боте." />

      <h2 id="toldirish">Как пополнить Steam Wallet?</h2>
      <p>
        Обычно доступны: банковские карты, Steam Gift Card, официальные способы оплаты и локальные сервисы. В
        Узбекистане многие выбирают{" "}
        <Link href="/blog/ozbek-somida-steam-balansini-toldirish">пополнение в сумах</Link> — через UzCard и HUMO.
        Подробнее:{" "}
        <Link href="/blog/steam-hisobini-qanday-toldirish-mumkin">как пополнить аккаунт Steam</Link>.
      </p>

      <h2 id="gift-card">Разница Steam Wallet и Gift Card</h2>
      <CompareTable
        headers={["Свойство", "Steam Wallet", "Steam Gift Card"]}
        rows={[
          ["Что это", "имеющийся баланс аккаунта", "код / карта"],
          ["Когда работает", <Yes>сразу</Yes>, <>после активации</>],
          ["Результат", "баланс тратится", "пополняет баланс"],
          ["Можно подарить", <No>обычно нет</No>, <Yes>да</Yes>],
        ]}
      />
      <p>
        То есть Gift Card — это средство пополнения баланса Steam Wallet.{" "}
        <Link href="/blog/steam-gift-card-nima">Что такое Steam Gift Card?</Link>
      </p>

      <h2 id="xavfsiz">Безопасен ли Steam Wallet?</h2>
      <p>
        Да, если вы используете официальный аккаунт Steam, никому не сообщаете пароль и включили Steam Guard
        (двухфакторную защиту). Подробнее:{" "}
        <Link href="/blog/steam-wallet-xavfsizmi">безопасен ли Steam Wallet?</Link>
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
      Steam Wallet is the electronic balance inside your Steam account. With it you buy games, DLC, Steam Market
      items and some in‑game content. The funds are used only within the Steam ecosystem, they usually don't expire,
      and they can't be withdrawn as cash.
    </p>
  );
}

function EnBody() {
  return (
    <>
      <h2 id="nima">What is Steam Wallet?</h2>
      <p>
        Steam Wallet is an electronic wallet (balance) tied to your Steam account. Once topped up, you pay for Steam
        store purchases from this balance. The money on it is valid only inside Steam.
      </p>

      <h2 id="ishlaydi">How does Steam Wallet work?</h2>
      <KeyFacts label="How it works">
        <li>Funds are credited and stored in the Steam Wallet.</li>
        <li>When you buy something the amount is deducted automatically.</li>
        <li>The remainder stays on the balance for future purchases.</li>
        <li>The balance is shown in your account's currency.</li>
      </KeyFacts>

      <h2 id="nimalar">What can you buy with Steam Wallet?</h2>
      <p>With the balance you can purchase:</p>
      <ul>
        <li>AAA and indie games</li>
        <li>DLC and additional content</li>
        <li>Soundtracks</li>
        <li>Steam Market items (CS2, Dota 2 and others)</li>
        <li>Profile decorations, stickers and emoticons</li>
        <li>Some in‑game purchases</li>
      </ul>

      <InlineCta text="Want to top up Steam Wallet in so‘m? Place an order in the bot." />

      <h2 id="toldirish">How can you top up Steam Wallet?</h2>
      <p>
        The usual options are: bank cards, a Steam Gift Card, official payment methods and local services. In
        Uzbekistan many users choose{" "}
        <Link href="/blog/ozbek-somida-steam-balansini-toldirish">topping up in so‘m</Link> — via UzCard and HUMO.
        More:{" "}
        <Link href="/blog/steam-hisobini-qanday-toldirish-mumkin">how to top up a Steam account</Link>.
      </p>

      <h2 id="gift-card">Steam Wallet vs Gift Card</h2>
      <CompareTable
        headers={["Feature", "Steam Wallet", "Steam Gift Card"]}
        rows={[
          ["What it is", "existing account balance", "code / card"],
          ["When it works", <Yes>immediately</Yes>, <>after activation</>],
          ["Result", "balance is spent", "tops up the balance"],
          ["Can be gifted", <No>usually no</No>, <Yes>yes</Yes>],
        ]}
      />
      <p>
        So a Gift Card is a means of topping up the Steam Wallet balance.{" "}
        <Link href="/blog/steam-gift-card-nima">What is a Steam Gift Card?</Link>
      </p>

      <h2 id="xavfsiz">Is Steam Wallet safe?</h2>
      <p>
        Yes, if you use an official Steam account, never share your password and have Steam Guard (two‑factor
        protection) enabled. More:{" "}
        <Link href="/blog/steam-wallet-xavfsizmi">is Steam Wallet safe?</Link>
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
  { question: "Steam Wallet nima?", answer: "Steam hisobingiz ichidagi elektron balans. U orqali o‘yin, DLC, Market buyumlari va ayrim o‘yin ichidagi kontent sotib olinadi." },
  { question: "Steam Wallet qanday ishlaydi?", answer: "Mablag‘ balansda saqlanadi, xarid qilganda avtomatik yechiladi, qolgani keyingi xaridlar uchun qoladi." },
  { question: "Steam Wallet’dagi pulni yechib olish mumkinmi?", answer: "Yo‘q, odatda Steam Wallet mablag‘lari naqd pul sifatida qaytarilmaydi va Steam ekotizimi ichida ishlatiladi." },
  { question: "Steam Wallet muddati tugaydimi?", answer: "Odatda yo‘q. Balans hisobingizda saqlanadi." },
  { question: "Steam Wallet orqali barcha o‘yinlarni sotib olsa bo‘ladimi?", answer: "Aksariyat Steam do‘konidagi mahsulotlarni sotib olish mumkin, ammo ayrim hududiy cheklovlar yoki mahsulot shartlari istisno bo‘lishi mumkin." },
  { question: "Balans qaysi valyutada ko‘rinadi?", answer: "Steam hisobingizga o‘rnatilgan valyutada." },
  { question: "Steam Wallet’ni qanday to‘ldiraman?", answer: "Bank kartasi, Gift Card, rasmiy usullar yoki mahalliy xizmatlar orqali. O‘zbekistonda so‘mda to‘ldirish qulay." },
  { question: "O‘zbek so‘mida to‘ldirsa bo‘ladimi?", answer: "Ha. @StarsPaymee_bot orqali UzCard, HUMO, Click yoki Payme bilan so‘mda." },
  { question: "Steam Wallet va Gift Card farqi nima?", answer: "Wallet — hisobingizdagi mavjud balans; Gift Card — faollashtirilgandan so‘ng shu balansni to‘ldiradigan kod yoki karta." },
  { question: "Steam Market’da buyum sotib olsa bo‘ladimi?", answer: "Ha, Steam Market xaridlari odatda Wallet balansi orqali amalga oshiriladi." },
  { question: "Steam Wallet xavfsizmi?", answer: "Ha, agar rasmiy hisobdan foydalansangiz, parolni bermasangiz va Steam Guard yoqilgan bo‘lsa." },
  { question: "Steam Guard nima?", answer: "Steam hisobingiz uchun ikki bosqichli himoya — kirishda qo‘shimcha tasdiq talab qiladi." },
  { question: "Balansdan boshqa odamga pul o‘tkazsa bo‘ladimi?", answer: "Yo‘q, Wallet balansini boshqa foydalanuvchiga to‘g‘ridan-to‘g‘ri o‘tkazib bo‘lmaydi." },
  { question: "Balans bilan o‘yin sovg‘a qilsa bo‘ladimi?", answer: "Steam do‘konida o‘yinni sovg‘a sifatida sotib olish imkoniyati mavjud; shartlar Steam qoidalariga bog‘liq." },
  { question: "Bir nechta valyutada balans bo‘ladimi?", answer: "Odatda hisob bitta valyutaga bog‘langan bo‘ladi." },
  { question: "Balansni ko‘rish qayerdan?", answer: "Steam ilovasida hisob (Account) bo‘limidan balansni ko‘rishingiz mumkin." },
  { question: "Chegirmada balans ishlatsa bo‘ladimi?", answer: "Ha. Aksiyalar davrida balans tayyor bo‘lsa, xaridni tez amalga oshirasiz." },
  { question: "Balans to‘lgach nima bo‘ladi?", answer: "Steam hisobda saqlanadigan maksimal balans chegarasi bo‘lishi mumkin; xaridlardan so‘ng joy bo‘shaydi." },
  { question: "Steam Wallet uchun parol berish kerakmi?", answer: "Yo‘q. Hech qachon parolingizni begona xizmatlarga bermang." },
  { question: "Balans tushmasa nima qilaman?", answer: "Bir oz kuting, hisob ma’lumotlarini tekshiring, so‘ng qo‘llab-quvvatlash xizmatiga murojaat qiling." },
];

const ruFaq = [
  { question: "Что такое Steam Wallet?", answer: "Электронный баланс внутри вашего аккаунта Steam. Через него покупают игры, DLC, предметы Market и часть внутриигрового контента." },
  { question: "Как работает Steam Wallet?", answer: "Средства хранятся на балансе, при покупке списываются автоматически, остаток остаётся для следующих покупок." },
  { question: "Можно ли вывести деньги со Steam Wallet?", answer: "Нет, обычно средства Steam Wallet не возвращаются наличными и используются внутри экосистемы Steam." },
  { question: "Истекает ли срок Steam Wallet?", answer: "Обычно нет. Баланс хранится на вашем аккаунте." },
  { question: "Можно ли купить все игры через Steam Wallet?", answer: "Большинство товаров магазина Steam — да, но возможны региональные ограничения или особые условия товара." },
  { question: "В какой валюте отображается баланс?", answer: "В валюте, установленной в вашем аккаунте Steam." },
  { question: "Как пополнить Steam Wallet?", answer: "Банковской картой, Gift Card, официальными способами или через локальные сервисы. В Узбекистане удобно пополнять в сумах." },
  { question: "Можно ли пополнить в узбекских сумах?", answer: "Да. Через @StarsPaymee_bot картой UzCard, HUMO, через Click или Payme в сумах." },
  { question: "Чем отличаются Steam Wallet и Gift Card?", answer: "Wallet — имеющийся баланс аккаунта; Gift Card — код или карта, которая после активации пополняет этот баланс." },
  { question: "Можно ли покупать предметы на Steam Market?", answer: "Да, покупки на Steam Market обычно оплачиваются с баланса Wallet." },
  { question: "Безопасен ли Steam Wallet?", answer: "Да, если использовать официальный аккаунт, не сообщать пароль и включить Steam Guard." },
  { question: "Что такое Steam Guard?", answer: "Двухфакторная защита аккаунта Steam — требует дополнительного подтверждения при входе." },
  { question: "Можно ли перевести баланс другому человеку?", answer: "Нет, напрямую передать баланс Wallet другому пользователю нельзя." },
  { question: "Можно ли подарить игру с баланса?", answer: "В магазине Steam есть возможность купить игру в подарок; условия зависят от правил Steam." },
  { question: "Может ли быть баланс в нескольких валютах?", answer: "Обычно аккаунт привязан к одной валюте." },
  { question: "Где посмотреть баланс?", answer: "В приложении Steam в разделе аккаунта (Account)." },
  { question: "Можно ли тратить баланс на распродаже?", answer: "Да. Если баланс готов к акции, покупку можно совершить быстро." },
  { question: "Что если баланс переполнен?", answer: "У аккаунта может быть предельная сумма баланса; после покупок место освобождается." },
  { question: "Нужно ли сообщать пароль для Steam Wallet?", answer: "Нет. Никогда не сообщайте пароль посторонним сервисам." },
  { question: "Что делать, если баланс не поступил?", answer: "Немного подождите, проверьте данные аккаунта, затем обратитесь в поддержку." },
];

const enFaq = [
  { question: "What is Steam Wallet?", answer: "The electronic balance inside your Steam account. It's used to buy games, DLC, Market items and some in‑game content." },
  { question: "How does Steam Wallet work?", answer: "Funds are stored on the balance, deducted automatically at purchase, and the remainder stays for future purchases." },
  { question: "Can I withdraw money from Steam Wallet?", answer: "No, Steam Wallet funds are generally not refunded as cash and are used inside the Steam ecosystem." },
  { question: "Does Steam Wallet expire?", answer: "Usually not. The balance stays on your account." },
  { question: "Can I buy all games with Steam Wallet?", answer: "Most Steam store products, yes — but there may be regional restrictions or specific product terms." },
  { question: "Which currency is the balance in?", answer: "The currency set on your Steam account." },
  { question: "How do I top up Steam Wallet?", answer: "By bank card, Gift Card, official methods or local services. In Uzbekistan topping up in so‘m is convenient." },
  { question: "Can I top up in Uzbek so‘m?", answer: "Yes. Through @StarsPaymee_bot with UzCard, HUMO, Click or Payme in so‘m." },
  { question: "What's the difference between Steam Wallet and Gift Card?", answer: "The Wallet is your existing account balance; a Gift Card is a code or card that tops up that balance after activation." },
  { question: "Can I buy items on Steam Market?", answer: "Yes, Steam Market purchases are usually paid from the Wallet balance." },
  { question: "Is Steam Wallet safe?", answer: "Yes, if you use an official account, never share your password and enable Steam Guard." },
  { question: "What is Steam Guard?", answer: "Two‑factor protection for your Steam account — it requires extra confirmation at sign‑in." },
  { question: "Can I transfer the balance to another person?", answer: "No, the Wallet balance can't be transferred directly to another user." },
  { question: "Can I gift a game using the balance?", answer: "The Steam store allows buying a game as a gift; the terms depend on Steam's rules." },
  { question: "Can the balance be in several currencies?", answer: "An account is usually tied to a single currency." },
  { question: "Where do I see the balance?", answer: "In the Steam app under the Account section." },
  { question: "Can I spend the balance during a sale?", answer: "Yes. With a balance ready for a sale you can buy quickly." },
  { question: "What if the balance is full?", answer: "An account may have a maximum balance limit; space frees up after purchases." },
  { question: "Do I need to share a password for Steam Wallet?", answer: "No. Never give your password to unknown services." },
  { question: "What if the balance doesn't arrive?", answer: "Wait a little, check the account details, then contact support." },
];

export const post: AeoPost = {
  slug: SLUG,
  category: "Steam",
  type: "info",
  datePublished: "2026-07-30",
  dateModified: "2026-07-30",
  keywords: [
    "steam wallet nima",
    "steam wallet",
    "steam balans",
    "steam wallet qanday ishlaydi",
    "steam hamyon",
    "steam wallet uzbekistan",
  ],
  locales: {
    uz: {
      title: "Steam Wallet nima? To‘liq qo‘llanma (2026)",
      excerpt:
        "Steam Wallet nima, qanday ishlaydi va undan qanday foydalaniladi? Nimalarni sotib olish mumkin, Gift Card’dan farqi va hisobni to‘ldirish bo‘yicha batafsil qo‘llanma.",
      metaTitle: "Steam Wallet nima? To‘liq qo‘llanma (2026)",
      metaDescription:
        "Steam Wallet nima, qanday ishlaydi va undan qanday foydalaniladi? Steam hisobini to‘ldirish bo‘yicha batafsil qo‘llanma.",
      answerTitle: "Qisqa javob",
      Answer: UzAnswer,
      Body: UzBody,
      ctaHeading: "Steam Wallet’ni so‘mda to‘ldiring",
      ctaBody: "@StarsPaymee_bot orqali UzCard yoki HUMO bilan to‘lang — balans bir necha daqiqada tushadi.",
      faq: uzFaq,
    },
    ru: {
      title: "Что такое Steam Wallet? Полное руководство (2026)",
      excerpt:
        "Что такое Steam Wallet, как он работает и как им пользоваться? Что можно купить, чем отличается от Gift Card и как пополнить аккаунт — подробное руководство.",
      metaTitle: "Что такое Steam Wallet? Полное руководство (2026)",
      metaDescription:
        "Что такое Steam Wallet, как он работает и как им пользоваться? Подробное руководство по пополнению аккаунта Steam.",
      answerTitle: "Краткий ответ",
      Answer: RuAnswer,
      Body: RuBody,
      ctaHeading: "Пополните Steam Wallet в сумах",
      ctaBody: "Оплатите картой UzCard или HUMO через @StarsPaymee_bot — баланс поступит за несколько минут.",
      faq: ruFaq,
    },
    en: {
      title: "What is Steam Wallet? A complete guide (2026)",
      excerpt:
        "What Steam Wallet is, how it works and how to use it. What you can buy, how it differs from a Gift Card and how to top up your account — a detailed guide.",
      metaTitle: "What is Steam Wallet? A complete guide (2026)",
      metaDescription:
        "What Steam Wallet is, how it works and how to use it. A detailed guide to topping up your Steam account.",
      answerTitle: "Short answer",
      Answer: EnAnswer,
      Body: EnBody,
      ctaHeading: "Top up Steam Wallet in so‘m",
      ctaBody: "Pay with UzCard or HUMO via @StarsPaymee_bot — the balance arrives within minutes.",
      faq: enFaq,
    },
  },
};
