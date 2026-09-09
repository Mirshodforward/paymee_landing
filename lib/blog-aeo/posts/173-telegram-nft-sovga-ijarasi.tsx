import { Link } from "@/i18n/navigation";
import {
  CompareTable,
  InfoCard,
  InfoGrid,
  InlineCta,
  KeyFacts,
  Sources,
  Step,
  Steps,
  Toc,
} from "@/components/blog/aeo-blocks";
import type { AeoPost } from "@/lib/blog-aeo/types";

const SLUG = "telegram-nft-sovga-ijarasi";

/** Ijara va to‘liq xarid — qaysi biri qachon ma’qul. */
function RentVsBuy({ locale }: { locale: "uz" | "ru" | "en" }) {
  const copy = {
    uz: {
      headers: ["Mezon", "Ijara", "To‘liq xarid"],
      rows: [
        ["Xarajat", "Faqat foydalanish vaqti uchun", "Aktivning to‘liq narxi"],
        ["Muddat", "Siz tanlagan kunlar soni", "Cheklanmagan — sizda qoladi"],
        ["Muddat tugagach", "Sovg‘a qaytariladi", "Sovg‘a sizda qoladi"],
        ["Qayta sotish", "Yo‘q — sovg‘a sizniki emas", "Ha, egalik sizda"],
        ["Qachon ma’qul", "Bayram, bir martalik voqea, sinov", "Kolleksiya, uzoq muddatli egalik"],
      ],
    },
    ru: {
      headers: ["Критерий", "Аренда", "Полная покупка"],
      rows: [
        ["Затраты", "Только за время использования", "Полная стоимость актива"],
        ["Срок", "Выбранное вами количество дней", "Не ограничен — остаётся у вас"],
        ["По окончании срока", "Подарок возвращается", "Подарок остаётся у вас"],
        ["Перепродажа", "Нет — подарок не ваш", "Да, владение у вас"],
        ["Когда уместно", "Праздник, разовое событие, проба", "Коллекция, долгое владение"],
      ],
    },
    en: {
      headers: ["Criterion", "Renting", "Buying outright"],
      rows: [
        ["Cost", "Only for the time you use it", "The asset's full price"],
        ["Term", "However many days you choose", "Unlimited — it stays yours"],
        ["When the term ends", "The gift goes back", "The gift stays with you"],
        ["Reselling", "No — the gift is not yours", "Yes, you own it"],
        ["When it fits", "A holiday, a one-off event, a trial", "A collection, long-term ownership"],
      ],
    },
  }[locale];

  return (
    <CompareTable
      headers={copy.headers}
      rows={copy.rows.map(([a, b, c]) => [<strong key="a">{a}</strong>, b, c])}
    />
  );
}

/* ---------------- UZ ---------------- */
function UzAnswer() {
  return (
    <p>
      NFT sovg‘a ijarasi — kolleksion sovg‘ani <b>butunlay sotib olmasdan</b>, tanlangan muddatga olib turish.
      Siz aktivning to‘liq narxini emas, faqat <b>foydalanish vaqtini</b> to‘laysiz; muddat tugagach sovg‘a
      qaytariladi. Bu Telegramning o‘z funksiyasi emas — <b>@StarsPaymee_bot</b> xizmati.
    </p>
  );
}

function UzBody() {
  return (
    <>
      <Toc
        label="Mundarija"
        items={[
          { href: "#nima", label: "Ijara nima degani" },
          { href: "#taqqos", label: "Ijara va xarid — taqqoslash" },
          { href: "#kimga", label: "Kimga mos keladi" },
          { href: "#qadamlar", label: "Qanday ijaraga olinadi" },
          { href: "#tolov", label: "To‘lov usullari" },
          { href: "#bilish", label: "Oldindan bilib qo‘yish kerak" },
        ]}
      />

      <p>
        Kolleksion NFT sovg‘alar profil va yozishmalarda ajralib turishning ommabop yo‘liga aylandi. Muammo
        bitta: noyob sovg‘ani butunlay sotib olish ko‘pincha qimmat. Ijara aynan shu holat uchun — sovg‘a
        kerak, lekin uzoq muddatga emas.
      </p>

      <h2 id="nima">«NFT sovg‘a ijarasi» nima degani</h2>
      <p>
        Oddiy qilib aytganda: siz sovg‘ani abadiy sotib olmaysiz, balki <b>vaqtinchalik foydalanishga</b>{" "}
        olasiz — masalan bir necha kunga yoki bir haftaga. Ijara muddati davomida u sizda oddiy NFT sovg‘a kabi
        ko‘rinadi, muddat tugagach esa qaytariladi.
      </p>
      <KeyFacts label="Odatda qanday holatlarda kerak bo‘ladi">
        <li>Bayram yoki tug‘ilgan kunga noyob sovg‘a bilan bir marta ajralib turish.</li>
        <li>Profil yoki kanalni qisqa muddatga statusli ko‘rinishga keltirish.</li>
        <li>Butunlay sotib olishdan oldin NFT sovg‘ani sinab ko‘rish.</li>
        <li>Qisqa vaqtga kerak bo‘lgan narsaga katta summa sarflamaslik.</li>
      </KeyFacts>

      <h2 id="taqqos">Ijara va to‘liq xarid — nimasi bilan farq qiladi</h2>
      <RentVsBuy locale="uz" />
      <p>
        Asosiy farq egalikda: ijarada sovg‘a <b>sizniki bo‘lmaydi</b>, shuning uchun uni sotish, boshqa odamga
        o‘tkazish yoki blokcheynga chiqarish mumkin emas. Agar sizga aynan egalik kerak bo‘lsa —{" "}
        <Link href="/blog/telegram-nft-gift-sotib-olish">to‘liq xarid</Link> to‘g‘ri yo‘l.
      </p>

      <h2 id="kimga">Kimga mos keladi</h2>
      <InfoGrid>
        <InfoCard emoji="🎂" title="Bayram uchun">
          Do‘st yoki yaqin insonni katta summa sarflamasdan noyob sovg‘a bilan xursand qilish.
        </InfoCard>
        <InfoCard emoji="📢" title="Kanal egalariga">
          Kanal yoki chat ko‘rinishini qisqa muddatga ajratib ko‘rsatish.
        </InfoCard>
        <InfoCard emoji="🔍" title="Sinab ko‘rmoqchilarga">
          NFT sovg‘alarga qiziqasiz, lekin hali sotib olishga tayyor emassiz.
        </InfoCard>
        <InfoCard emoji="💰" title="Byudjetni tejaganlarga">
          Qisqa muddatga kerak narsa uchun to‘liq narx to‘lash shart emas.
        </InfoCard>
      </InfoGrid>

      <h2 id="qadamlar">Qanday ijaraga olinadi</h2>
      <Steps>
        <Step title="1. Botni oching">
          Telegramda{" "}
          <a href="https://t.me/StarsPaymee_bot" target="_blank" rel="noopener noreferrer">
            @StarsPaymee_bot
          </a>{" "}
          ni ishga tushiring.
        </Step>
        <Step title="2. NFT sovg‘alar ijarasi bo‘limini tanlang">Bu alohida bo‘lim, oddiy xariddan boshqa.</Step>
        <Step title="3. Katalogdan sovg‘ani tanlang">
          Mavjud gift’lar ro‘yxatini ko‘rib chiqing — kolleksiya va xususiyatlariga qarang.
        </Step>
        <Step title="4. Ijara muddatini belgilang">Necha kunga kerakligini ko‘rsating.</Step>
        <Step title="5. So‘mda to‘lang">Qulay usulni tanlang.</Step>
        <Step title="6. Sovg‘ani qabul qiling">To‘lovdan keyin u belgilangan muddatga sizda paydo bo‘ladi.</Step>
      </Steps>

      <InlineCta text="Noyob sovg‘ani muddatga oling — to‘liq narxsiz." />

      <h2 id="tolov">To‘lov usullari</h2>
      <KeyFacts label="Qabul qilinadigan usullar">
        <li>
          <b>UzCard</b> va <b>HUMO</b> — mahalliy kartalar.
        </li>
        <li>
          <b>Click</b>, <b>Payme</b> va <b>Uzum</b> — ilova orqali bir bosishda.
        </li>
        <li>
          <b>Paynet</b>, terminal va bankomatlar — naqd to‘lash uchun.
        </li>
        <li>Hammasi so‘mda; xalqaro karta talab qilinmaydi.</li>
      </KeyFacts>

      <h2 id="bilish">Buyurtmadan oldin bilib qo‘yish kerak</h2>
      <p>Ijara xaridga o‘xshamaydi, shuning uchun bir necha nuqtani oldindan aniqlab olgan ma’qul:</p>
      <KeyFacts label="To‘rt nuqta">
        <li>
          <b>Sovg‘a sizniki bo‘lmaydi.</b> Uni sotish, o‘tkazish yoki TON’ga chiqarish mumkin emas — muddat
          oxirida u qaytariladi.
        </li>
        <li>
          <b>Muddatni aniq tanlang.</b> Bayramga olsangiz, sana atrofida bir-ikki kun zaxira qoldirgan yaxshi.
        </li>
        <li>
          <b>Katalog o‘zgarib turadi.</b> Ijaraga mavjud sovg‘alar ro‘yxati doimiy emas — kerakli gift bugun
          bor, ertaga bo‘lmasligi mumkin.
        </li>
        <li>
          <b>Kolleksion sovg‘alarda o‘tkazish qoidalari bor.</b> Telegram hujjatida ayrim sovg‘alar uchun eng
          erta o‘tkazish sanasi ko‘rsatilgan, shuning uchun har bir gift ijaraga tushavermaydi.
        </li>
      </KeyFacts>

      <p>
        Batafsil: <Link href="/blog/telegram-nft-gift-nima">NFT Gift nima</Link>,{" "}
        <Link href="/blog/telegram-sovga-va-nft-sovga-sotib-olish">oddiy va NFT sovg‘alar xaridi</Link>,{" "}
        <Link href="/blog/telegram-gift-price">sovg‘a narxi nimaga bog‘liq</Link>.
      </p>

      <Sources
        label="Manbalar"
        items={[
          { href: "https://core.telegram.org/api/gifts", label: "core.telegram.org/api/gifts", note: "sovg‘a o‘tkazish qoidalari" },
          { href: "https://t.me/StarsPaymee_bot", label: "@StarsPaymee_bot", note: "ijara katalogi va buyurtma" },
        ]}
      />
    </>
  );
}

/* ---------------- RU ---------------- */
function RuAnswer() {
  return (
    <p>
      Аренда NFT-подарка — это возможность взять коллекционный подарок <b>во временное пользование</b>, не
      покупая его насовсем. Вы платите не полную стоимость актива, а только <b>время использования</b>; по
      окончании срока подарок возвращается. Это не встроенная функция Telegram, а услуга{" "}
      <b>@StarsPaymee_bot</b>.
    </p>
  );
}

function RuBody() {
  return (
    <>
      <Toc
        label="Содержание"
        items={[
          { href: "#nima", label: "Что значит аренда" },
          { href: "#taqqos", label: "Аренда и покупка — сравнение" },
          { href: "#kimga", label: "Кому подойдёт" },
          { href: "#qadamlar", label: "Как взять в аренду" },
          { href: "#tolov", label: "Способы оплаты" },
          { href: "#bilish", label: "Что знать заранее" },
        ]}
      />

      <p>
        Коллекционные NFT-подарки стали заметным способом выделиться в профиле и переписке. Проблема одна:
        купить редкий подарок насовсем часто дорого. Аренда — как раз для случая, когда подарок нужен, но не
        навсегда.
      </p>

      <h2 id="nima">Что значит «аренда NFT-подарка»</h2>
      <p>
        Простыми словами: вы не покупаете подарок навсегда, а берёте его <b>во временное пользование</b> —
        например, на несколько дней или на неделю. Всё это время он отображается у вас как обычный NFT-гифт, а
        по окончании срока возвращается.
      </p>
      <KeyFacts label="Когда это обычно нужно">
        <li>Один раз блеснуть редким подарком к празднику или дню рождения.</li>
        <li>Ненадолго придать профилю или каналу статусный вид.</li>
        <li>Попробовать NFT-гифт до того, как покупать его насовсем.</li>
        <li>Не тратить крупную сумму на вещь, которая нужна ненадолго.</li>
      </KeyFacts>

      <h2 id="taqqos">Чем аренда отличается от полной покупки</h2>
      <RentVsBuy locale="ru" />
      <p>
        Главное отличие во владении: при аренде подарок <b>вам не принадлежит</b>, поэтому продать, передать
        или вывести его в блокчейн нельзя. Если нужно именно владение —{" "}
        <Link href="/blog/telegram-nft-gift-sotib-olish">полная покупка</Link> будет правильным путём.
      </p>

      <h2 id="kimga">Кому подойдёт</h2>
      <InfoGrid>
        <InfoCard emoji="🎂" title="К празднику">
          Порадовать друга или близкого редким подарком без крупных трат.
        </InfoCard>
        <InfoCard emoji="📢" title="Владельцам каналов">
          Ненадолго выделить оформление канала или чата.
        </InfoCard>
        <InfoCard emoji="🔍" title="Тем, кто присматривается">
          Интересуетесь NFT-подарками, но покупать пока не готовы.
        </InfoCard>
        <InfoCard emoji="💰" title="Экономящим бюджет">
          За вещь, нужную ненадолго, не обязательно платить полную цену.
        </InfoCard>
      </InfoGrid>

      <h2 id="qadamlar">Как взять подарок в аренду</h2>
      <Steps>
        <Step title="1. Откройте бота">
          Запустите{" "}
          <a href="https://t.me/StarsPaymee_bot" target="_blank" rel="noopener noreferrer">
            @StarsPaymee_bot
          </a>{" "}
          в Telegram.
        </Step>
        <Step title="2. Выберите раздел аренды NFT-подарков">Это отдельный раздел, не обычная покупка.</Step>
        <Step title="3. Выберите подарок из каталога">
          Посмотрите доступные гифты — обратите внимание на коллекцию и свойства.
        </Step>
        <Step title="4. Укажите срок аренды">Отметьте, на сколько дней он вам нужен.</Step>
        <Step title="5. Оплатите в сумах">Выберите удобный способ.</Step>
        <Step title="6. Получите подарок">После оплаты он появляется у вас на указанный срок.</Step>
      </Steps>

      <InlineCta text="Возьмите редкий подарок на срок — без полной стоимости." />

      <h2 id="tolov">Способы оплаты</h2>
      <KeyFacts label="Принимаемые способы">
        <li>
          <b>UzCard</b> и <b>Humo</b> — местные карты.
        </li>
        <li>
          <b>Click</b>, <b>Payme</b> и <b>Uzum</b> — в одно нажатие в приложении.
        </li>
        <li>
          <b>Paynet</b>, терминалы и банкоматы — для оплаты наличными.
        </li>
        <li>Всё в сумах; иностранная карта не требуется.</li>
      </KeyFacts>

      <h2 id="bilish">Что стоит знать до заказа</h2>
      <p>Аренда — не покупка, поэтому несколько моментов лучше прояснить заранее:</p>
      <KeyFacts label="Четыре момента">
        <li>
          <b>Подарок вам не принадлежит.</b> Продать, передать или вывести его в TON нельзя — в конце срока он
          возвращается.
        </li>
        <li>
          <b>Выбирайте срок точно.</b> Если берёте к празднику, лучше оставить день-два запаса вокруг даты.
        </li>
        <li>
          <b>Каталог меняется.</b> Список доступных для аренды подарков не постоянен — нужный гифт есть
          сегодня и может отсутствовать завтра.
        </li>
        <li>
          <b>У коллекционных подарков есть правила передачи.</b> В документации Telegram для части подарков
          указана самая ранняя дата передачи, поэтому в аренду попадает не каждый гифт.
        </li>
      </KeyFacts>

      <p>
        Подробнее: <Link href="/blog/telegram-nft-gift-nima">что такое NFT Gift</Link>,{" "}
        <Link href="/blog/telegram-sovga-va-nft-sovga-sotib-olish">покупка обычных и NFT-подарков</Link>,{" "}
        <Link href="/blog/telegram-gift-price">от чего зависит цена подарка</Link>.
      </p>

      <Sources
        label="Источники"
        items={[
          { href: "https://core.telegram.org/api/gifts", label: "core.telegram.org/api/gifts", note: "правила передачи подарков" },
          { href: "https://t.me/StarsPaymee_bot", label: "@StarsPaymee_bot", note: "каталог аренды и заказ" },
        ]}
      />
    </>
  );
}

/* ---------------- EN ---------------- */
function EnAnswer() {
  return (
    <p>
      Renting an NFT gift means taking a collectible <b>for a set period</b> instead of buying it outright. You
      pay for the <b>time you use it</b> rather than the asset’s full price, and the gift returns when the term
      ends. This is not a built-in Telegram feature — it is a <b>@StarsPaymee_bot</b> service.
    </p>
  );
}

function EnBody() {
  return (
    <>
      <Toc
        label="Contents"
        items={[
          { href: "#nima", label: "What renting means" },
          { href: "#taqqos", label: "Renting versus buying" },
          { href: "#kimga", label: "Who it suits" },
          { href: "#qadamlar", label: "How to rent one" },
          { href: "#tolov", label: "Payment methods" },
          { href: "#bilish", label: "What to know first" },
        ]}
      />

      <p>
        Collectible NFT gifts have become a popular way to stand out in a profile or a chat. There is one
        catch: buying a rare gift outright is often expensive. Renting fits exactly the case where you want the
        gift, but not forever.
      </p>

      <h2 id="nima">What “renting an NFT gift” means</h2>
      <p>
        Put simply: you do not buy the gift permanently — you take it <b>for temporary use</b>, for a few days
        or a week. Throughout that time it shows on your account like any NFT gift, and when the term ends it
        goes back.
      </p>
      <KeyFacts label="When people usually want it">
        <li>To show off a rare gift once, for a holiday or a birthday.</li>
        <li>To give a profile or channel a status look for a short while.</li>
        <li>To try an NFT gift before committing to buying it.</li>
        <li>To avoid spending a large sum on something needed only briefly.</li>
      </KeyFacts>

      <h2 id="taqqos">How renting differs from buying outright</h2>
      <RentVsBuy locale="en" />
      <p>
        The key difference is ownership: with a rental the gift <b>is not yours</b>, so it cannot be sold,
        transferred or withdrawn to the blockchain. If ownership is what you actually want,{" "}
        <Link href="/blog/telegram-nft-gift-sotib-olish">buying outright</Link> is the right route.
      </p>

      <h2 id="kimga">Who it suits</h2>
      <InfoGrid>
        <InfoCard emoji="🎂" title="For an occasion">
          Delight a friend with a rare gift without a large outlay.
        </InfoCard>
        <InfoCard emoji="📢" title="For channel owners">
          Give a channel or chat a distinctive look for a short period.
        </InfoCard>
        <InfoCard emoji="🔍" title="For the curious">
          You are interested in NFT gifts but not ready to buy one yet.
        </InfoCard>
        <InfoCard emoji="💰" title="For tight budgets">
          Something needed briefly does not have to cost the full price.
        </InfoCard>
      </InfoGrid>

      <h2 id="qadamlar">How to rent a gift</h2>
      <Steps>
        <Step title="1. Open the bot">
          Start{" "}
          <a href="https://t.me/StarsPaymee_bot" target="_blank" rel="noopener noreferrer">
            @StarsPaymee_bot
          </a>{" "}
          in Telegram.
        </Step>
        <Step title="2. Pick the NFT gift rental section">It is a separate section, not the usual purchase.</Step>
        <Step title="3. Choose a gift from the catalogue">
          Look through what is available — check the collection and its properties.
        </Step>
        <Step title="4. Set the rental period">Say how many days you need it for.</Step>
        <Step title="5. Pay in so‘m">Choose whichever method suits you.</Step>
        <Step title="6. Receive the gift">After payment it appears on your account for the chosen term.</Step>
      </Steps>

      <InlineCta text="Take a rare gift for a period — without the full price." />

      <h2 id="tolov">Payment methods</h2>
      <KeyFacts label="Accepted methods">
        <li>
          <b>UzCard</b> and <b>HUMO</b> — local cards.
        </li>
        <li>
          <b>Click</b>, <b>Payme</b> and <b>Uzum</b> — one tap in the app.
        </li>
        <li>
          <b>Paynet</b>, terminals and ATMs — for paying in cash.
        </li>
        <li>Everything in so‘m; no international card required.</li>
      </KeyFacts>

      <h2 id="bilish">What to know before ordering</h2>
      <p>Renting is not buying, so a few points are worth settling in advance:</p>
      <KeyFacts label="Four points">
        <li>
          <b>The gift is not yours.</b> It cannot be sold, transferred or withdrawn to TON — at the end of the
          term it returns.
        </li>
        <li>
          <b>Pick the term carefully.</b> For an occasion, leaving a day or two of margin around the date helps.
        </li>
        <li>
          <b>The catalogue changes.</b> What is available to rent is not fixed — a gift that is there today may
          not be tomorrow.
        </li>
        <li>
          <b>Collectibles have transfer rules.</b> Telegram’s documentation sets an earliest transfer date for
          some gifts, so not every gift can be rented.
        </li>
      </KeyFacts>

      <p>
        More: <Link href="/blog/telegram-nft-gift-nima">what an NFT Gift is</Link>,{" "}
        <Link href="/blog/telegram-sovga-va-nft-sovga-sotib-olish">buying regular and NFT gifts</Link>,{" "}
        <Link href="/blog/telegram-gift-price">what a gift’s price depends on</Link>.
      </p>

      <Sources
        label="Sources"
        items={[
          { href: "https://core.telegram.org/api/gifts", label: "core.telegram.org/api/gifts", note: "gift transfer rules" },
          { href: "https://t.me/StarsPaymee_bot", label: "@StarsPaymee_bot", note: "rental catalogue and ordering" },
        ]}
      />
    </>
  );
}

const uzFaq = [
  {
    question: "NFT sovg‘a ijarasi nima?",
    answer:
      "Kolleksion sovg‘ani butunlay sotib olmasdan, tanlangan muddatga olib turish. Muddat tugagach sovg‘a qaytariladi.",
  },
  {
    question: "Ijara xariddan qanchalik arzon?",
    answer:
      "Siz aktivning to‘liq narxini emas, faqat foydalanish vaqtini to‘laysiz — shuning uchun summa sezilarli kam bo‘ladi. Aniq narx sovg‘aga va muddatga bog‘liq.",
  },
  {
    question: "Ijaradagi sovg‘ani sota olamanmi?",
    answer: "Yo‘q. Sovg‘a sizniki emas, shuning uchun sotish, o‘tkazish yoki TON’ga chiqarish mumkin emas.",
  },
  {
    question: "Muddat tugagach nima bo‘ladi?",
    answer: "Sovg‘a avtomatik qaytariladi va profilingizda ko‘rinmay qoladi.",
  },
  {
    question: "Har qanday NFT sovg‘ani ijaraga olsa bo‘ladimi?",
    answer:
      "Yo‘q. Katalog o‘zgarib turadi, bundan tashqari Telegram qoidalariga ko‘ra ayrim sovg‘alarda o‘tkazish uchun eng erta sana bo‘lishi mumkin.",
  },
  {
    question: "To‘lov qanday usullarda qabul qilinadi?",
    answer: "UzCard, HUMO, Click, Payme, Uzum, Paynet hamda terminal va bankomatlar orqali — hammasi so‘mda.",
  },
  {
    question: "Ijaraga olgan sovg‘amni uzaytirsam bo‘ladimi?",
    answer: "Muddatni uzaytirish imkoniyati sovg‘a katalogda hali mavjudligiga bog‘liq — botda tekshiring.",
  },
  {
    question: "Bu Telegramning o‘z funksiyasimi?",
    answer: "Yo‘q. Bu — @StarsPaymee_bot xizmati; Telegramda ijara degan alohida rasmiy funksiya yo‘q.",
  },
];

const ruFaq = [
  {
    question: "Что такое аренда NFT-подарка?",
    answer:
      "Это возможность взять коллекционный подарок на выбранный срок, не покупая насовсем. По окончании срока подарок возвращается.",
  },
  {
    question: "Насколько аренда дешевле покупки?",
    answer:
      "Вы платите не полную стоимость актива, а только время использования — поэтому сумма заметно меньше. Точная цена зависит от подарка и срока.",
  },
  {
    question: "Можно ли продать арендованный подарок?",
    answer: "Нет. Подарок вам не принадлежит, поэтому продать, передать или вывести в TON его нельзя.",
  },
  {
    question: "Что происходит по окончании срока?",
    answer: "Подарок автоматически возвращается и перестаёт отображаться в вашем профиле.",
  },
  {
    question: "Любой ли NFT-подарок можно арендовать?",
    answer:
      "Нет. Каталог меняется, и, кроме того, по правилам Telegram у части подарков может быть задана самая ранняя дата передачи.",
  },
  {
    question: "Какие способы оплаты принимаются?",
    answer: "UzCard, Humo, Click, Payme, Uzum, Paynet, а также терминалы и банкоматы — всё в сумах.",
  },
  {
    question: "Можно ли продлить аренду?",
    answer: "Возможность продления зависит от того, доступен ли подарок в каталоге — уточните в боте.",
  },
  {
    question: "Это встроенная функция Telegram?",
    answer: "Нет. Это услуга @StarsPaymee_bot; отдельной официальной функции аренды в Telegram нет.",
  },
];

const enFaq = [
  {
    question: "What is NFT gift rental?",
    answer:
      "Taking a collectible gift for a chosen period instead of buying it outright. When the term ends, the gift returns.",
  },
  {
    question: "How much cheaper is renting than buying?",
    answer:
      "You pay for the time you use it rather than the asset's full price, so the amount is noticeably lower. The exact price depends on the gift and the term.",
  },
  {
    question: "Can I sell a rented gift?",
    answer: "No. The gift is not yours, so it cannot be sold, transferred or withdrawn to TON.",
  },
  { question: "What happens when the term ends?", answer: "The gift returns automatically and stops showing on your profile." },
  {
    question: "Can any NFT gift be rented?",
    answer:
      "No. The catalogue changes, and Telegram's rules set an earliest transfer date for some gifts.",
  },
  {
    question: "Which payment methods are accepted?",
    answer: "UzCard, HUMO, Click, Payme, Uzum, Paynet, plus terminals and ATMs — all in so‘m.",
  },
  {
    question: "Can a rental be extended?",
    answer: "Whether it can be extended depends on the gift still being in the catalogue — check in the bot.",
  },
  {
    question: "Is this a built-in Telegram feature?",
    answer: "No. It is a @StarsPaymee_bot service; Telegram has no separate official rental feature.",
  },
];

export const post: AeoPost = {
  slug: SLUG,
  category: "Gifts",
  type: "info",
  datePublished: "2026-09-08",
  dateModified: "2026-09-08",
  keywords: [
    "telegram nft sovga ijarasi",
    "nft gift ijaraga olish",
    "telegram sovga ijara narxi",
    "arzon nft sovga telegram",
    "аренда nft подарков telegram",
    "арендовать подарок телеграм",
  ],
  howToSteps: [
    { name: "Botni oching", text: "Telegramda @StarsPaymee_bot ni ishga tushiring." },
    { name: "Ijara bo‘limini tanlang", text: "NFT sovg‘alar ijarasi bo‘limiga o‘ting." },
    { name: "Sovg‘ani tanlang", text: "Katalogdan kerakli gift’ni belgilang." },
    { name: "Muddatni belgilang", text: "Necha kunga kerakligini ko‘rsating." },
    { name: "So‘mda to‘lang", text: "UzCard, HUMO, Click, Payme, Uzum yoki Paynet orqali." },
    { name: "Sovg‘ani qabul qiling", text: "To‘lovdan keyin u belgilangan muddatga hisobingizda paydo bo‘ladi." },
  ],
  locales: {
    uz: {
      title: "Telegramda NFT sovg‘a ijarasi: noyob gift’ni arzon va muddatga olish",
      excerpt:
        "Kolleksion sovg‘ani butunlay sotib olmasdan muddatga olish: ijara va xarid farqi, kimga mos, qadamlar, to‘lov usullari va oldindan bilish kerak bo‘lgan cheklovlar.",
      metaTitle: "Telegramda NFT sovg‘a ijarasi — muddatga olish",
      metaDescription:
        "NFT sovg‘a ijarasi: to‘liq narxsiz noyob gift, ijara va xarid farqi, qadam-baqadam buyurtma, so‘mda to‘lov va egalikka oid cheklovlar.",
      answerTitle: "Qisqa javob",
      Answer: UzAnswer,
      Body: UzBody,
      ctaHeading: "Noyob sovg‘ani sinab ko‘ring",
      ctaBody: "@StarsPaymee_bot — ijara katalogi, so‘mda to‘lov va tezkor yetkazish.",
      faq: uzFaq,
    },
    ru: {
      title: "Аренда NFT-подарков в Telegram: редкий подарок дешевле и на срок",
      excerpt:
        "Как взять коллекционный подарок на время, не покупая насовсем: чем аренда отличается от покупки, кому подойдёт, шаги, оплата и важные ограничения.",
      metaTitle: "Аренда NFT-подарков в Telegram — взять на срок",
      metaDescription:
        "Аренда NFT-подарков: редкий гифт без полной стоимости, отличие от покупки, пошаговый заказ, оплата в сумах и ограничения по владению.",
      answerTitle: "Краткий ответ",
      Answer: RuAnswer,
      Body: RuBody,
      ctaHeading: "Попробуйте редкий подарок",
      ctaBody: "@StarsPaymee_bot — каталог аренды, оплата в сумах и быстрая выдача.",
      faq: ruFaq,
    },
    en: {
      title: "Renting NFT gifts on Telegram: a rare gift for less, for a while",
      excerpt:
        "Taking a collectible for a set period instead of buying it: how renting differs from buying, who it suits, the steps, payment and the limits to know first.",
      metaTitle: "Renting NFT gifts on Telegram — take one for a term",
      metaDescription:
        "NFT gift rental: a rare gift without the full price, how it differs from buying, step-by-step ordering, payment in so‘m and ownership limits.",
      answerTitle: "Short answer",
      Answer: EnAnswer,
      Body: EnBody,
      ctaHeading: "Try a rare gift",
      ctaBody: "@StarsPaymee_bot — rental catalogue, payment in so‘m and fast delivery.",
      faq: enFaq,
    },
  },
};
