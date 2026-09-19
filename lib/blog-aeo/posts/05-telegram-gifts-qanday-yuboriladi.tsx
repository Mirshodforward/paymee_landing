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

const SLUG = "telegram-gifts-qanday-yuboriladi-qollanma";

/** Ikki yo‘l — Telegram ichidan va bot orqali. */
function RouteCompare({ locale }: { locale: "uz" | "ru" | "en" }) {
  const copy = {
    uz: {
      headers: ["Jihat", "Telegram ichidan", "@StarsPaymee_bot orqali"],
      rows: [
        ["Nima bilan to‘lanadi", "Hisobingizdagi Stars", "So‘m (yoki rubl)"],
        ["Avval Stars kerakmi", "Ha — balansda bo‘lishi shart", "Yo‘q — to‘g‘ridan-to‘g‘ri sovg‘a olinadi"],
        ["Karta talabi", "Stars xaridi uchun xorijiy karta", "UzCard, HUMO, Click, Payme, Uzum"],
        ["Anonim yuborish", "Ha", "Ha"],
        ["Izoh qoldirish", "Ha", "Ha"],
        ["Qachon qulay", "Stars allaqachon bo‘lsa", "Stars yo‘q yoki so‘mda to‘lamoqchi bo‘lsangiz"],
      ],
    },
    ru: {
      headers: ["Аспект", "Внутри Telegram", "Через @StarsPaymee_bot"],
      rows: [
        ["Чем оплачивается", "Звёздами на вашем балансе", "Сумами (или рублями)"],
        ["Нужны ли Stars заранее", "Да — должны быть на балансе", "Нет — подарок берётся напрямую"],
        ["Требование к карте", "Для покупки Stars нужна зарубежная", "UzCard, HUMO, Click, Payme, Uzum"],
        ["Анонимная отправка", "Да", "Да"],
        ["Комментарий", "Да", "Да"],
        ["Когда удобнее", "Если Stars уже есть", "Если Stars нет или платите в сумах"],
      ],
    },
    en: {
      headers: ["Aspect", "Inside Telegram", "Through @StarsPaymee_bot"],
      rows: [
        ["What pays for it", "Stars on your balance", "So‘m (or roubles)"],
        ["Stars needed first", "Yes — they must be on the balance", "No — the gift is bought directly"],
        ["Card requirement", "A foreign card, to buy the Stars", "UzCard, HUMO, Click, Payme, Uzum"],
        ["Anonymous sending", "Yes", "Yes"],
        ["Leaving a note", "Yes", "Yes"],
        ["When it suits", "When you already hold Stars", "When you have none or want to pay in so‘m"],
      ],
    },
  }[locale];

  return (
    <CompareTable
      headers={copy.headers}
      rows={copy.rows.map(([label, native, bot]) => [<strong key="l">{label}</strong>, native, bot])}
    />
  );
}

/* ---------------- UZ ---------------- */
function UzAnswer() {
  return (
    <p>
      Telegram sovg‘asini yuborishning <b>ikki yo‘li</b> bor. <b>Telegram ichidan</b>: odamning profilini oching →
      «Sovg‘a yuborish» → sovg‘ani tanlang → hisobingizdagi Stars bilan to‘lang. <b>@StarsPaymee_bot orqali</b>:
      Gifts bo‘limidan sovg‘ani tanlang, @username kiriting va so‘mda to‘lang — Stars’ni oldindan sotib olish shart
      emas.
    </p>
  );
}

function UzBody() {
  return (
    <>
      <Toc
        label="Mundarija"
        items={[
          { href: "#nima", label: "Telegram Gifts nima" },
          { href: "#ikki-yol", label: "Ikki yo‘l — qaysi biri sizga mos" },
          { href: "#telegram", label: "1-yo‘l: Telegram ichidan" },
          { href: "#bot", label: "2-yo‘l: bot orqali, so‘mda" },
          { href: "#turlari", label: "Sovg‘a turlari" },
          { href: "#xatolar", label: "Ko‘p uchraydigan xatolar" },
        ]}
      />

      <h2 id="nima">Telegram Gifts nima?</h2>
      <p>
        Telegram Gifts — Stars (yulduzlar) qiymatida belgilangan raqamli sovg‘alar. Ular qabul qiluvchining
        profilida ko‘rsatiladi yoki Stars’ga qaytarilishi mumkin. Ba’zilari cheklangan (limited) yoki kolleksion
        (collectible) bo‘ladi. Sovg‘a tug‘ilgan kun, bayram yoki minnatdorchilik uchun mos keladi.
      </p>

      <h2 id="ikki-yol">Ikki yo‘l — qaysi biri sizga mos</h2>
      <p>
        Farq to‘lovda: Telegram ichida sovg‘a <b>hisobingizdagi Stars</b> bilan olinadi, ya’ni avval yulduz sotib
        olish kerak. Botda esa sovg‘aning o‘zi <b>so‘mda</b> sotib olinadi — oraliq qadam yo‘q.
      </p>
      <RouteCompare locale="uz" />

      <h2 id="telegram">1-yo‘l: Telegram ilovasi ichidan yuborish</h2>
      <Steps>
        <Step title="1. Odamning profilini oching">Chatni oching yoki kontaktlar orqali profilga o‘ting.</Step>
        <Step title="2. «Sovg‘a yuborish» ni tanlang">
          Profil menyusida yoki chat oynasidagi sovg‘a belgisi orqali.
        </Step>
        <Step title="3. Katalogdan sovg‘ani tanlang">Har bir sovg‘aning yonida yulduz qiymati ko‘rsatilgan.</Step>
        <Step title="4. Izoh yoki anonimlikni belgilang">Tabrik yozing yoki ismingizni yashiring.</Step>
        <Step title="5. Stars bilan to‘lang">
          Balansda yetarli yulduz bo‘lishi kerak; yetmasa Telegram qo‘shimcha sotib olishni taklif qiladi.
        </Step>
      </Steps>
      <p>
        Muammo shu yerda paydo bo‘ladi: yulduzni Telegram ichida to‘ldirish App Store yoki Google Play hisobini,
        ya’ni xorijiy kartani talab qiladi. Shuning uchun O‘zbekistondagi ko‘p foydalanuvchi ikkinchi yo‘lni
        tanlaydi.
      </p>

      <h2 id="bot">2-yo‘l: @StarsPaymee_bot orqali, so‘mda</h2>
      <Steps>
        <Step title="1. Botni oching">
          <a href="https://t.me/StarsPaymee_bot" target="_blank" rel="noopener noreferrer">
            @StarsPaymee_bot
          </a>{" "}
          yoki Mini App’da «Gifts» bo‘limiga o‘ting.
        </Step>
        <Step title="2. Sovg‘ani tanlang">Katalogda TGS animatsiyasi va yulduz qiymati ko‘rinadi.</Step>
        <Step title="3. Qabul qiluvchini kiriting">
          Do‘stingizning @username’ini profildan nusxa olib qo‘ying — qo‘lda yozganda harf almashib ketadi.
        </Step>
        <Step title="4. Izoh yoki anonimlik">Tabrik izohi qoldiring yoki anonim yuborishni belgilang.</Step>
        <Step title="5. So‘mda to‘lang">UzCard, HUMO, Click, Payme, Uzum yoki Paynet.</Step>
        <Step title="6. Yetkazilganini tekshiring">
          Botda buyurtma «bajarildi» holatiga o‘tadi va qabul qiluvchi Telegram’dan bildirishnoma oladi.
        </Step>
      </Steps>

      <InlineCta text="Do‘stingizga sovg‘a yuboring — so‘mda, Stars’siz." />

      <h2 id="turlari">Sovg‘a turlari</h2>
      <InfoGrid>
        <InfoCard emoji="🎁" title="Oddiy sovg‘alar">
          Doimiy katalogdagi sovg‘alar; qabul qiluvchi profilda ko‘rsatadi yoki Stars’ga aylantiradi.
        </InfoCard>
        <InfoCard emoji="⏳" title="Cheklangan (limited)">
          Ma’lum vaqt yoki soni bilan chiqadigan sovg‘alar — qiymati yuqoriroq bo‘lishi mumkin.
        </InfoCard>
        <InfoCard emoji="💎" title="Kolleksion (NFT)">
          Upgrade qilingan, TON blokcheynidagi sovg‘alar. Narx shaffofligiga e’tibor bering.
        </InfoCard>
        <InfoCard emoji="🕵️" title="Anonim yuborish">
          Ismingizni ko‘rsatmasdan yuborish — sirli tabrik uchun.
        </InfoCard>
      </InfoGrid>
      <p>
        Turlar orasidagi farq va xarid —{" "}
        <Link href="/blog/telegram-sovga-va-nft-sovga-sotib-olish">oddiy va NFT sovg‘alar maqolasida</Link>.
      </p>

      <h2 id="tanlash">Qanday sovg‘a tanlash kerak?</h2>
      <KeyFacts label="Uch mezon">
        <li>
          <b>Qabul qiluvchining qiziqishi</b> — sovg‘a profilda ko‘rinadi, shuning uchun uslubi muhim.
        </li>
        <li>
          <b>Noyoblik</b> — ba’zi sovg‘alar cheklangan tirajda chiqadi va tez tugaydi.
        </li>
        <li>
          <b>Byudjet</b> — 15 yulduzdan boshlanadigan variantlar ham bor, qimmat kolleksion nusxalar ham.
        </li>
      </KeyFacts>
      <p>
        Yuborilgan sovg‘a odatda qaytarilmaydi — shuning uchun qabul qiluvchini to‘lovdan oldin tekshiring.
      </p>

      <h2 id="xatolar">Ko‘p uchraydigan xatolar</h2>
      <KeyFacts label="Yuborishdan oldin tekshiring">
        <li>
          <b>Username xatosi</b> — sovg‘a aynan username bo‘yicha ketadi. Profildan nusxa oling, qo‘lda yozmang.
        </li>
        <li>
          <b>Balans yetmasligi</b> — Telegram ichidan yuborsangiz, avval Stars balansini tekshiring.
        </li>
        <li>
          <b>Anonimlikni keyin o‘zgartirib bo‘lmaydi</b> — anonim yoki izohli yuborishni to‘lovdan oldin
          belgilang.
        </li>
        <li>
          <b>Buyurtma ID’sini saqlamaslik</b> — muammo chiqsa, supportga aynan shu raqam bilan murojaat qilinadi.
        </li>
      </KeyFacts>

      <p>
        Stars qanday olinishini{" "}
        <Link href="/blog/click-payme-orqali-telegram-stars-sotib-olish">Click va Payme orqali Stars xaridi</Link>{" "}
        maqolasida ko‘ring. Katalog va narxlar — <Link href="/gifts">Gifts sahifasida</Link>.
      </p>

      <Sources
        label="Manbalar"
        items={[
          {
            href: "https://telegram.org/blog/star-messages-gateway-2-0-and-more",
            label: "telegram.org/blog",
            note: "sovg‘alar haqida e’lon",
          },
          { href: "https://core.telegram.org/api/gifts", label: "core.telegram.org/api/gifts", note: "Gifts texnik hujjati" },
        ]}
      />
    </>
  );
}

/* ---------------- RU ---------------- */
function RuAnswer() {
  return (
    <p>
      Подарок в Telegram можно отправить <b>двумя способами</b>. <b>Внутри Telegram</b>: откройте профиль человека
      → «Отправить подарок» → выберите подарок → оплатите звёздами с баланса. <b>Через @StarsPaymee_bot</b>:
      выберите подарок в разделе Gifts, введите @username и оплатите в сумах — покупать Stars заранее не нужно.
    </p>
  );
}

function RuBody() {
  return (
    <>
      <Toc
        label="Содержание"
        items={[
          { href: "#nima", label: "Что такое Telegram Gifts" },
          { href: "#ikki-yol", label: "Два способа — какой ваш" },
          { href: "#telegram", label: "Способ 1: внутри Telegram" },
          { href: "#bot", label: "Способ 2: через бота, в сумах" },
          { href: "#turlari", label: "Виды подарков" },
          { href: "#xatolar", label: "Частые ошибки" },
        ]}
      />

      <h2 id="nima">Что такое Telegram Gifts?</h2>
      <p>
        Telegram Gifts — цифровые подарки, стоимость которых указана в звёздах (Stars). Они отображаются в профиле
        получателя или могут быть обменяны обратно на Stars. Часть подарков лимитированные или коллекционные.
        Подарок подходит для дня рождения, праздника или благодарности.
      </p>

      <h2 id="ikki-yol">Два способа — какой подходит вам</h2>
      <p>
        Разница в оплате: внутри Telegram подарок берётся за <b>звёзды с вашего баланса</b>, то есть Stars нужно
        купить заранее. В боте сам подарок покупается <b>в сумах</b> — промежуточного шага нет.
      </p>
      <RouteCompare locale="ru" />

      <h2 id="telegram">Способ 1: отправка внутри приложения Telegram</h2>
      <Steps>
        <Step title="1. Откройте профиль человека">Через чат или список контактов.</Step>
        <Step title="2. Выберите «Отправить подарок»">В меню профиля или по значку подарка в чате.</Step>
        <Step title="3. Выберите подарок из каталога">Рядом с каждым указана стоимость в звёздах.</Step>
        <Step title="4. Укажите комментарий или анонимность">Напишите поздравление или скройте своё имя.</Step>
        <Step title="5. Оплатите звёздами">
          На балансе должно хватать Stars; если не хватает, Telegram предложит докупить.
        </Step>
      </Steps>
      <p>
        Здесь и возникает сложность: пополнение звёзд внутри Telegram требует аккаунта App Store или Google Play, а
        значит зарубежной карты. Поэтому многие пользователи в Узбекистане выбирают второй способ.
      </p>

      <h2 id="bot">Способ 2: через @StarsPaymee_bot, в сумах</h2>
      <Steps>
        <Step title="1. Откройте бота">
          Перейдите в раздел «Gifts» в{" "}
          <a href="https://t.me/StarsPaymee_bot" target="_blank" rel="noopener noreferrer">
            @StarsPaymee_bot
          </a>{" "}
          или Mini App.
        </Step>
        <Step title="2. Выберите подарок">В каталоге видно TGS-анимацию и стоимость в звёздах.</Step>
        <Step title="3. Введите получателя">
          Скопируйте @username из профиля — при ручном наборе легко перепутать буквы.
        </Step>
        <Step title="4. Комментарий или анонимность">Оставьте поздравление или отправьте анонимно.</Step>
        <Step title="5. Оплатите в сумах">UzCard, HUMO, Click, Payme, Uzum или Paynet.</Step>
        <Step title="6. Проверьте доставку">
          Заказ в боте переходит в «выполнен», а получателю приходит уведомление от Telegram.
        </Step>
      </Steps>

      <InlineCta text="Отправьте другу подарок — в сумах, без покупки Stars." />

      <h2 id="turlari">Виды подарков</h2>
      <InfoGrid>
        <InfoCard emoji="🎁" title="Обычные подарки">
          Из постоянного каталога; получатель показывает их в профиле или меняет на Stars.
        </InfoCard>
        <InfoCard emoji="⏳" title="Лимитированные">
          Выходят ограниченным тиражом или на время — ценность может быть выше.
        </InfoCard>
        <InfoCard emoji="💎" title="Коллекционные (NFT)">
          Улучшенные подарки в блокчейне TON. Обращайте внимание на прозрачность цены.
        </InfoCard>
        <InfoCard emoji="🕵️" title="Анонимная отправка">
          Без указания вашего имени — для загадочного поздравления.
        </InfoCard>
      </InfoGrid>
      <p>
        Разница между видами и покупка —{" "}
        <Link href="/blog/telegram-sovga-va-nft-sovga-sotib-olish">в статье про обычные и NFT-подарки</Link>.
      </p>

      <h2 id="xatolar">Частые ошибки</h2>
      <KeyFacts label="Проверьте перед отправкой">
        <li>
          <b>Ошибка в username</b> — подарок уходит именно по нему. Копируйте из профиля, не набирайте вручную.
        </li>
        <li>
          <b>Не хватает баланса</b> — при отправке внутри Telegram сначала проверьте баланс Stars.
        </li>
        <li>
          <b>Анонимность потом не изменить</b> — выберите анонимность или комментарий до оплаты.
        </li>
        <li>
          <b>Не сохранили ID заказа</b> — именно с ним обращаются в поддержку, если что-то пойдёт не так.
        </li>
      </KeyFacts>

      <p>
        Как покупать Stars — в статье{" "}
        <Link href="/blog/click-payme-orqali-telegram-stars-sotib-olish">покупка Stars через Click и Payme</Link>.
        Каталог и цены — на <Link href="/gifts">странице Gifts</Link>.
      </p>

      <Sources
        label="Источники"
        items={[
          {
            href: "https://telegram.org/blog/star-messages-gateway-2-0-and-more",
            label: "telegram.org/blog",
            note: "анонс подарков",
          },
          { href: "https://core.telegram.org/api/gifts", label: "core.telegram.org/api/gifts", note: "документация Gifts" },
        ]}
      />
    </>
  );
}

/* ---------------- EN ---------------- */
function EnAnswer() {
  return (
    <p>
      There are <b>two ways</b> to send a Telegram gift. <b>Inside Telegram</b>: open the person’s profile → “Send
      a Gift” → pick one → pay with Stars from your balance. <b>Through @StarsPaymee_bot</b>: choose a gift in the
      Gifts section, enter the @username and pay in so‘m — no need to buy Stars first.
    </p>
  );
}

function EnBody() {
  return (
    <>
      <Toc
        label="Contents"
        items={[
          { href: "#nima", label: "What Telegram Gifts are" },
          { href: "#ikki-yol", label: "Two routes — which is yours" },
          { href: "#telegram", label: "Route 1: inside Telegram" },
          { href: "#bot", label: "Route 2: via the bot, in so‘m" },
          { href: "#turlari", label: "Types of gift" },
          { href: "#xatolar", label: "Common mistakes" },
        ]}
      />

      <h2 id="nima">What are Telegram Gifts?</h2>
      <p>
        Telegram Gifts are digital presents priced in Stars. They show on the recipient’s profile or can be
        converted back into Stars. Some are limited or collectible. A gift fits a birthday, a holiday or a simple
        thank-you.
      </p>

      <h2 id="ikki-yol">Two routes — which one suits you</h2>
      <p>
        The difference is in the payment: inside Telegram a gift is bought with <b>Stars from your balance</b>, so
        the Stars have to be purchased first. In the bot the gift itself is bought <b>in so‘m</b> — there is no
        intermediate step.
      </p>
      <RouteCompare locale="en" />

      <h2 id="telegram">Route 1: sending from inside the Telegram app</h2>
      <Steps>
        <Step title="1. Open the person’s profile">Through the chat or your contacts.</Step>
        <Step title="2. Choose “Send a Gift”">From the profile menu or the gift icon in the chat.</Step>
        <Step title="3. Pick a gift from the catalogue">Each one shows its price in Stars.</Step>
        <Step title="4. Add a note or go anonymous">Write a greeting or hide your name.</Step>
        <Step title="5. Pay with Stars">
          Your balance must cover it; if it does not, Telegram offers to top up.
        </Step>
      </Steps>
      <p>
        This is exactly where it gets awkward: topping up Stars inside Telegram needs an App Store or Google Play
        account, and therefore a foreign card. That is why many users in Uzbekistan take the second route.
      </p>

      <h2 id="bot">Route 2: through @StarsPaymee_bot, in so‘m</h2>
      <Steps>
        <Step title="1. Open the bot">
          Go to the “Gifts” section in{" "}
          <a href="https://t.me/StarsPaymee_bot" target="_blank" rel="noopener noreferrer">
            @StarsPaymee_bot
          </a>{" "}
          or the Mini App.
        </Step>
        <Step title="2. Choose a gift">The catalogue shows the TGS animation and the price in Stars.</Step>
        <Step title="3. Enter the recipient">
          Copy the @username from their profile — typing it by hand is how letters get swapped.
        </Step>
        <Step title="4. Note or anonymity">Leave a greeting or send it anonymously.</Step>
        <Step title="5. Pay in so‘m">UzCard, HUMO, Click, Payme, Uzum or Paynet.</Step>
        <Step title="6. Check delivery">
          The order turns to “completed” in the bot and the recipient gets a notification from Telegram.
        </Step>
      </Steps>

      <InlineCta text="Send a friend a gift — in so‘m, with no Stars to buy first." />

      <h2 id="turlari">Types of gift</h2>
      <InfoGrid>
        <InfoCard emoji="🎁" title="Regular gifts">
          From the permanent catalogue; the recipient displays them or converts them into Stars.
        </InfoCard>
        <InfoCard emoji="⏳" title="Limited">
          Released in a limited run or for a limited time — often worth more.
        </InfoCard>
        <InfoCard emoji="💎" title="Collectible (NFT)">
          Upgraded gifts on the TON blockchain. Watch the price transparency here.
        </InfoCard>
        <InfoCard emoji="🕵️" title="Anonymous sending">
          Without showing your name — for a mystery greeting.
        </InfoCard>
      </InfoGrid>
      <p>
        The difference between the types, and how to buy them, is covered in{" "}
        <Link href="/blog/telegram-sovga-va-nft-sovga-sotib-olish">the regular vs NFT gifts article</Link>.
      </p>

      <h2 id="xatolar">Common mistakes</h2>
      <KeyFacts label="Check before sending">
        <li>
          <b>A wrong username</b> — the gift travels by username alone. Copy it from the profile; never type it.
        </li>
        <li>
          <b>Not enough balance</b> — when sending inside Telegram, check the Stars balance first.
        </li>
        <li>
          <b>Anonymity cannot be changed later</b> — decide on anonymity or a note before paying.
        </li>
        <li>
          <b>Losing the order ID</b> — that is what support needs if anything goes wrong.
        </li>
      </KeyFacts>

      <p>
        How to buy Stars is covered in{" "}
        <Link href="/blog/click-payme-orqali-telegram-stars-sotib-olish">buying Stars with Click and Payme</Link>.
        The catalogue and prices live on the <Link href="/gifts">Gifts page</Link>.
      </p>

      <Sources
        label="Sources"
        items={[
          {
            href: "https://telegram.org/blog/star-messages-gateway-2-0-and-more",
            label: "telegram.org/blog",
            note: "the gifts announcement",
          },
          { href: "https://core.telegram.org/api/gifts", label: "core.telegram.org/api/gifts", note: "Gifts documentation" },
        ]}
      />
    </>
  );
}

const uzFaq = [
  {
    question: "Telegram sovg‘asini qanday yuboriladi?",
    answer:
      "Ikki yo‘l bor: Telegram ichidan profil orqali Stars bilan, yoki @StarsPaymee_bot dagi Gifts bo‘limidan so‘mda.",
  },
  {
    question: "Sovg‘a yuborish uchun avval Stars sotib olish kerakmi?",
    answer: "Telegram ichidan yuborsangiz — ha. Bot orqali sovg‘a to‘g‘ridan-to‘g‘ri so‘mda olinadi, Stars kerak emas.",
  },
  { question: "Anonim yuborish mumkinmi?", answer: "Ha, ikkala yo‘lda ham anonimlikni to‘lovdan oldin belgilaysiz." },
  {
    question: "Sovg‘aga tabrik izohi qo‘shsam bo‘ladimi?",
    answer: "Ha, izoh maydoni ikkala yo‘lda ham mavjud va u qabul qiluvchiga ko‘rinadi.",
  },
  {
    question: "Username’ni xato yozsam nima bo‘ladi?",
    answer:
      "Sovg‘a boshqa odamga ketishi mumkin. Profildan nusxa oling; xato sezsangiz buyurtma ID bilan darhol supportga yozing.",
  },
  {
    question: "Qabul qiluvchi sovg‘ani Stars’ga aylantira oladimi?",
    answer: "Ha, oddiy sovg‘alarni Stars’ga qaytarish mumkin; kolleksion sovg‘alarda qoidalar boshqacha.",
  },
  {
    question: "Sovg‘a yetkazilganini qanday bilaman?",
    answer: "Botda buyurtma «bajarildi» holatiga o‘tadi va qabul qiluvchi Telegram’dan bildirishnoma oladi.",
  },
];

const ruFaq = [
  {
    question: "Как отправить подарок в Telegram?",
    answer:
      "Есть два способа: внутри Telegram через профиль за звёзды, или через раздел Gifts в @StarsPaymee_bot в сумах.",
  },
  {
    question: "Нужно ли сначала купить Stars?",
    answer: "При отправке внутри Telegram — да. Через бота подарок покупается сразу в сумах, Stars не нужны.",
  },
  { question: "Можно ли отправить анонимно?", answer: "Да, в обоих способах анонимность выбирается до оплаты." },
  {
    question: "Можно ли добавить поздравление?",
    answer: "Да, поле комментария есть в обоих способах, и получатель его видит.",
  },
  {
    question: "Что будет, если ошибиться в username?",
    answer:
      "Подарок может уйти другому человеку. Копируйте username из профиля; заметив ошибку, сразу напишите в поддержку с ID заказа.",
  },
  {
    question: "Может ли получатель обменять подарок на Stars?",
    answer: "Да, обычные подарки можно вернуть в Stars; у коллекционных правила другие.",
  },
  {
    question: "Как понять, что подарок доставлен?",
    answer: "Заказ в боте переходит в «выполнен», а получателю приходит уведомление от Telegram.",
  },
];

const enFaq = [
  {
    question: "How do I send a Telegram gift?",
    answer:
      "Two ways: inside Telegram through the profile using Stars, or from the Gifts section of @StarsPaymee_bot paying in so‘m.",
  },
  {
    question: "Do I have to buy Stars first?",
    answer: "When sending inside Telegram, yes. Through the bot the gift is bought directly in so‘m, with no Stars needed.",
  },
  { question: "Can it be sent anonymously?", answer: "Yes, anonymity is chosen before payment on both routes." },
  {
    question: "Can I add a greeting?",
    answer: "Yes, both routes have a note field and the recipient sees it.",
  },
  {
    question: "What happens if the username is wrong?",
    answer:
      "The gift can reach the wrong person. Copy the username from the profile; if you spot a mistake, contact support with the order ID immediately.",
  },
  {
    question: "Can the recipient convert the gift into Stars?",
    answer: "Yes, regular gifts can be converted back into Stars; collectibles follow different rules.",
  },
  {
    question: "How do I know the gift was delivered?",
    answer: "The order moves to “completed” in the bot and the recipient receives a Telegram notification.",
  },
];

export const post: AeoPost = {
  slug: SLUG,
  category: "Gifts",
  type: "howto",
  datePublished: "2026-06-20",
  dateModified: "2026-09-08",
  keywords: [
    "telegram gift",
    "telegram gift yuborish",
    "telegram sovga",
    "telegram gifts qanday yuboriladi",
    "telegram sovga qilish",
    "telegram gifts uzbekistan",
    "telegram ichidan sovga yuborish",
  ],
  howToSteps: [
    { name: "Botni oching", text: "@StarsPaymee_bot yoki Mini App’da «Gifts» bo‘limiga o‘ting." },
    { name: "Sovg‘ani tanlang", text: "Katalogdan sovg‘ani va uning yulduz qiymatini tanlang." },
    { name: "Qabul qiluvchini kiriting", text: "Do‘stingizning @username’ini profildan nusxa olib kiriting." },
    { name: "Izoh yoki anonimlik", text: "Tabrik izohi qoldiring yoki anonim yuborishni belgilang." },
    { name: "So‘mda to‘lang", text: "UzCard, HUMO, Click, Payme, Uzum yoki Paynet orqali." },
    { name: "Yetkazilganini tekshiring", text: "Buyurtma «bajarildi» holatiga o‘tadi va bildirishnoma keladi." },
  ],
  locales: {
    uz: {
      title: "Telegram Gifts qanday yuboriladi? Bosqichma-bosqich qo‘llanma",
      excerpt:
        "Sovg‘a yuborishning ikki yo‘li alohida: Telegram ichidan Stars bilan va @StarsPaymee_bot orqali so‘mda. Qadamlar, sovg‘a turlari va ko‘p uchraydigan xatolar.",
      metaTitle: "Telegram Gifts qanday yuboriladi — bosqichma-bosqich",
      metaDescription:
        "Telegram sovg‘asini qanday yuborish: Telegram ichidan Stars bilan yoki bot orqali so‘mda. Ikki yo‘l taqqoslovi, qadamlar va xatolardan saqlanish.",
      answerTitle: "Qisqa javob",
      Answer: UzAnswer,
      Body: UzBody,
      ctaHeading: "Sovg‘a yuborasizmi?",
      ctaBody: "@StarsPaymee_bot — katalogdan tanlang, @username kiriting va so‘mda to‘lang.",
      faq: uzFaq,
    },
    ru: {
      title: "Как отправить подарок в Telegram: пошаговое руководство",
      excerpt:
        "Два способа отправки по отдельности: внутри Telegram за звёзды и через @StarsPaymee_bot в сумах. Шаги, виды подарков и частые ошибки.",
      metaTitle: "Как отправить подарок в Telegram — пошагово",
      metaDescription:
        "Как отправить подарок Telegram: внутри приложения за звёзды или через бота в сумах. Сравнение двух способов, шаги и как не ошибиться.",
      answerTitle: "Краткий ответ",
      Answer: RuAnswer,
      Body: RuBody,
      ctaHeading: "Отправляете подарок?",
      ctaBody: "@StarsPaymee_bot — выберите из каталога, введите @username и оплатите в сумах.",
      faq: ruFaq,
    },
    en: {
      title: "How to send a Telegram gift: a step-by-step guide",
      excerpt:
        "The two routes side by side: from inside Telegram with Stars, and through @StarsPaymee_bot in so‘m. Steps, gift types and the mistakes people make.",
      metaTitle: "How to send a Telegram gift — step by step",
      metaDescription:
        "How to send a Telegram gift: inside the app with Stars or through the bot in so‘m. A comparison of both routes, the steps and how to avoid mistakes.",
      answerTitle: "Short answer",
      Answer: EnAnswer,
      Body: EnBody,
      ctaHeading: "Sending a gift?",
      ctaBody: "@StarsPaymee_bot — pick from the catalogue, enter an @username and pay in so‘m.",
      faq: enFaq,
    },
  },
};
