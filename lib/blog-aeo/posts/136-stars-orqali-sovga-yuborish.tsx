import { Link } from "@/i18n/navigation";
import { InlineCta, Sources, KeyFacts, Steps, Step, InfoGrid, InfoCard } from "@/components/blog/aeo-blocks";
import type { AeoPost } from "@/lib/blog-aeo/types";

const SLUG = "stars-orqali-sovga-yuborish";

/* ---------------- UZ ---------------- */
function UzAnswer() {
  return (
    <p>
      Sovg‘a yuborish uchun avval hisobingizda yetarli Stars bo‘lishi kerak. Stars’ni <b>@StarsPaymee_bot</b> orqali
      so‘mda to‘ldirasiz, so‘ng Telegram ilovasidagi sovg‘a bo‘limidan kerakli sovg‘ani tanlab, oluvchini
      belgilaysiz. Yuborilgan sovg‘a odatda <b>qaytarilmaydi</b>.
    </p>
  );
}

function UzBody() {
  return (
    <>
      <h2 id="nima">Telegram sovg‘alari nima?</h2>
      <p>
        Telegram sovg‘alari — animatsion, ba’zan noyob dizaynga ega raqamli obyektlar. Ularni Stars evaziga sotib olib,
        boshqa foydalanuvchiga yuborish mumkin. Sovg‘alar profilda yoki suhbatda ko‘rinadi, ba’zilari esa cheklangan
        miqdorda chiqariladi — bu ularni yanada qadrli qiladi.
      </p>

      <h2 id="nega">Nega sovg‘a yuborish mashhur bo‘lmoqda?</h2>
      <InfoGrid>
        <InfoCard emoji="🎂" title="Zamonaviy tabrik">
          Tug‘ilgan kun yoki bayram uchun qiziqarli usul.
        </InfoCard>
        <InfoCard emoji="👀" title="Vizual va esda qolarli">
          Oddiy matnli tabrikdan ajralib turadi.
        </InfoCard>
        <InfoCard emoji="💎" title="Noyoblik">
          Ba’zi sovg‘alar cheklangan — yig‘ish qiziqarli.
        </InfoCard>
        <InfoCard emoji="🙏" title="Minnatdorchilik">
          Kanal yoki bot egasiga rahmat aytish usuli.
        </InfoCard>
      </InfoGrid>

      <h2 id="qadamlar">Sovg‘a yuborish uchun Stars qanday olinadi?</h2>
      <Steps>
        <Step title="1. Botga kiring">@StarsPaymee_bot.</Step>
        <Step title="2. Miqdorni tanlang">Sovg‘a narxiga yetadigan miqdorni oling.</Step>
        <Step title="3. To‘lovni bajaring">UzCard, HUMO, Click, Payme yoki Paynet.</Step>
        <Step title="4. Sovg‘a bo‘limiga o‘ting">Telegram ilovasida sovg‘alar ro‘yxatini oching.</Step>
        <Step title="5. Tanlang va yuboring">Sovg‘ani belgilab, oluvchini ko‘rsating.</Step>
      </Steps>

      <InlineCta text="Stars yetmayaptimi? Bir daqiqada to‘ldiring." />

      <h2 id="tanlash">Qanday sovg‘a tanlash kerak?</h2>
      <KeyFacts label="E’tibor beriladigan jihatlar">
        <li>Oluvchining qiziqishlari va afzalliklari.</li>
        <li>Sovg‘aning noyobligi — ba’zilari faqat cheklangan vaqt mavjud.</li>
        <li>Byudjetingiz — arzon variantlar ham bor.</li>
      </KeyFacts>

      <h2 id="savollar">Tez-tez beriladigan savollar</h2>
      <p>
        <b>Sovg‘a qaytarib olinishi mumkinmi?</b> Odatda yuborilgan sovg‘alar qaytarilmaydi, shuning uchun
        yuborishdan oldin oluvchini to‘g‘ri tanlaganingizga ishonch hosil qiling.
      </p>
      <p>
        <b>Sovg‘alarni keyin sotish mumkinmi?</b> Ba’zi hollarda noyob sovg‘alarni boshqa foydalanuvchilarga qayta
        sotish imkoniyati mavjud — batafsil{" "}
        <Link href="/blog/telegram-gift-sotish">Gift sotish</Link> maqolasida.
      </p>
      <p>
        <b>Qancha Stars kerak?</b> Sovg‘a narxi uning turi va noyobligiga qarab farqlanadi — arzon variantlardan
        cheklangan, qimmatroq sovg‘alargacha.
      </p>

      <p>
        Qarang: <Link href="/blog/telegram-gifts-yuborish-qollanma">Gifts yuborish qo‘llanmasi</Link> va{" "}
        <Link href="/blog/stars-olish">Stars olish</Link>.
      </p>

      <Sources
        label="Manbalar"
        items={[
          { href: "https://telegram.org/blog", label: "telegram.org/blog", note: "Telegram rasmiy yangiliklari" },
          { href: "https://core.telegram.org/bots/payments-stars", label: "core.telegram.org", note: "Stars to‘lovlari hujjati" },
        ]}
      />
    </>
  );
}

/* ---------------- RU ---------------- */
function RuAnswer() {
  return (
    <p>
      Чтобы отправить подарок, на счету должно быть достаточно Stars. Пополняете звёзды в сумах через{" "}
      <b>@StarsPaymee_bot</b>, затем в приложении Telegram открываете раздел подарков, выбираете нужный и указываете
      получателя. Отправленный подарок обычно <b>не возвращается</b>.
    </p>
  );
}

function RuBody() {
  return (
    <>
      <h2 id="nima">Что такое подарки Telegram?</h2>
      <p>
        Подарки Telegram — анимированные, иногда с уникальным дизайном цифровые объекты. Их покупают за Stars и
        отправляют другому пользователю. Подарки видны в профиле или в чате, а часть из них выпускается ограниченным
        тиражом — это делает их ещё ценнее.
      </p>

      <h2 id="nega">Почему отправка подарков набирает популярность?</h2>
      <InfoGrid>
        <InfoCard emoji="🎂" title="Современное поздравление">
          Интересный способ поздравить с днём рождения или праздником.
        </InfoCard>
        <InfoCard emoji="👀" title="Наглядно и запоминается">
          Выделяется на фоне обычного текстового поздравления.
        </InfoCard>
        <InfoCard emoji="💎" title="Редкость">
          Некоторые подарки ограничены — их интересно собирать.
        </InfoCard>
        <InfoCard emoji="🙏" title="Благодарность">
          Способ сказать спасибо автору канала или бота.
        </InfoCard>
      </InfoGrid>

      <h2 id="qadamlar">Как получить Stars для подарка?</h2>
      <Steps>
        <Step title="1. Откройте бота">@StarsPaymee_bot.</Step>
        <Step title="2. Выберите количество">Возьмите столько, чтобы хватило на подарок.</Step>
        <Step title="3. Оплатите">UzCard, HUMO, Click, Payme или Paynet.</Step>
        <Step title="4. Откройте раздел подарков">В приложении Telegram.</Step>
        <Step title="5. Выберите и отправьте">Укажите подарок и получателя.</Step>
      </Steps>

      <InlineCta text="Не хватает Stars? Пополните за минуту." />

      <h2 id="tanlash">Как выбрать подарок?</h2>
      <KeyFacts label="На что обратить внимание">
        <li>Интересы и предпочтения получателя.</li>
        <li>Редкость подарка — часть доступна ограниченное время.</li>
        <li>Ваш бюджет — есть и недорогие варианты.</li>
      </KeyFacts>

      <h2 id="savollar">Частые вопросы</h2>
      <p>
        <b>Можно ли вернуть подарок?</b> Обычно отправленные подарки не возвращаются, поэтому перед отправкой
        убедитесь, что получатель выбран верно.
      </p>
      <p>
        <b>Можно ли потом продать подарки?</b> В отдельных случаях редкие подарки можно перепродать другим
        пользователям — подробнее в статье{" "}
        <Link href="/blog/telegram-gift-sotish">о продаже подарков</Link>.
      </p>
      <p>
        <b>Сколько нужно Stars?</b> Цена подарка зависит от его типа и редкости — от недорогих вариантов до
        ограниченных и более дорогих.
      </p>

      <p>
        Смотрите: <Link href="/blog/telegram-gifts-yuborish-qollanma">руководство по отправке Gifts</Link> и{" "}
        <Link href="/blog/stars-olish">покупка Stars</Link>.
      </p>

      <Sources
        label="Источники"
        items={[
          { href: "https://telegram.org/blog", label: "telegram.org/blog", note: "официальные новости Telegram" },
          { href: "https://core.telegram.org/bots/payments-stars", label: "core.telegram.org", note: "документация по оплате Stars" },
        ]}
      />
    </>
  );
}

/* ---------------- EN ---------------- */
function EnAnswer() {
  return (
    <p>
      To send a gift you first need enough Stars on your account. Top up in so‘m through <b>@StarsPaymee_bot</b>,
      then open the gifts section in the Telegram app, pick a gift and choose the recipient. A sent gift usually{" "}
      <b>cannot be returned</b>.
    </p>
  );
}

function EnBody() {
  return (
    <>
      <h2 id="nima">What are Telegram gifts?</h2>
      <p>
        Telegram gifts are animated digital objects, sometimes with a unique design. You buy them with Stars and send
        them to another user. Gifts appear on a profile or in a chat, and some are released in limited quantities —
        which makes them more valuable.
      </p>

      <h2 id="nega">Why is gift-sending catching on?</h2>
      <InfoGrid>
        <InfoCard emoji="🎂" title="A modern greeting">
          A fun way to mark a birthday or a holiday.
        </InfoCard>
        <InfoCard emoji="👀" title="Visual and memorable">
          It stands out next to a plain text message.
        </InfoCard>
        <InfoCard emoji="💎" title="Rarity">
          Some gifts are limited — collecting them is engaging.
        </InfoCard>
        <InfoCard emoji="🙏" title="Saying thanks">
          A way to thank a channel or bot author.
        </InfoCard>
      </InfoGrid>

      <h2 id="qadamlar">How to get Stars for a gift</h2>
      <Steps>
        <Step title="1. Open the bot">@StarsPaymee_bot.</Step>
        <Step title="2. Choose an amount">Enough to cover the gift’s price.</Step>
        <Step title="3. Pay">UzCard, HUMO, Click, Payme or Paynet.</Step>
        <Step title="4. Open the gifts section">Inside the Telegram app.</Step>
        <Step title="5. Pick and send">Select the gift and set the recipient.</Step>
      </Steps>

      <InlineCta text="Short on Stars? Top up in a minute." />

      <h2 id="tanlash">How to choose a gift</h2>
      <KeyFacts label="What to consider">
        <li>The recipient’s interests and taste.</li>
        <li>The gift’s rarity — some are available only briefly.</li>
        <li>Your budget — affordable options exist too.</li>
      </KeyFacts>

      <h2 id="savollar">Frequently asked</h2>
      <p>
        <b>Can a gift be taken back?</b> Sent gifts normally cannot be returned, so make sure you have the right
        recipient before sending.
      </p>
      <p>
        <b>Can gifts be sold later?</b> In some cases rare gifts can be resold to other users — more in the{" "}
        <Link href="/blog/telegram-gift-sotish">selling gifts</Link> article.
      </p>
      <p>
        <b>How many Stars are needed?</b> A gift’s price depends on its type and rarity — from cheap options up to
        limited, pricier ones.
      </p>

      <p>
        See: <Link href="/blog/telegram-gifts-yuborish-qollanma">the Gifts sending guide</Link> and{" "}
        <Link href="/blog/stars-olish">getting Stars</Link>.
      </p>

      <Sources
        label="Sources"
        items={[
          { href: "https://telegram.org/blog", label: "telegram.org/blog", note: "official Telegram news" },
          { href: "https://core.telegram.org/bots/payments-stars", label: "core.telegram.org", note: "Stars payments documentation" },
        ]}
      />
    </>
  );
}

const uzFaq = [
  { question: "Sovg‘a yuborish uchun nima kerak?", answer: "Hisobda yetarli Stars va oluvchining Telegram profili." },
  { question: "Stars yetmasa nima qilaman?", answer: "@StarsPaymee_bot orqali so‘mda to‘ldiring." },
  { question: "Sovg‘a qaytarib olinadimi?", answer: "Odatda yo‘q — yuborishdan oldin oluvchini tekshiring." },
  { question: "Sovg‘ani keyin sotish mumkinmi?", answer: "Ba’zi noyob sovg‘alarni qayta sotish imkoniyati mavjud." },
  { question: "Qancha Stars kerak bo‘ladi?", answer: "Sovg‘a turi va noyobligiga qarab farqlanadi." },
  { question: "Sovg‘a qayerda ko‘rinadi?", answer: "Oluvchining profilida yoki suhbatda." },
  { question: "Anonim yuborsam bo‘ladimi?", answer: "Telegram interfeysidagi joriy sozlamalarga bog‘liq." },
  { question: "Cheklangan sovg‘alar nima?", answer: "Ma’lum miqdorda chiqarilgan, keyin qayta sotilmaydigan sovg‘alar." },
];

const ruFaq = [
  { question: "Что нужно для отправки подарка?", answer: "Достаточно Stars на счету и профиль получателя в Telegram." },
  { question: "Что делать, если Stars не хватает?", answer: "Пополните в сумах через @StarsPaymee_bot." },
  { question: "Можно ли вернуть подарок?", answer: "Обычно нет — проверьте получателя до отправки." },
  { question: "Можно ли продать подарок позже?", answer: "Часть редких подарков можно перепродать." },
  { question: "Сколько нужно Stars?", answer: "Зависит от типа и редкости подарка." },
  { question: "Где виден подарок?", answer: "В профиле получателя или в чате." },
  { question: "Можно ли отправить анонимно?", answer: "Зависит от текущих настроек интерфейса Telegram." },
  { question: "Что такое ограниченные подарки?", answer: "Выпущенные определённым тиражом и больше не выпускаемые." },
];

const enFaq = [
  { question: "What do I need to send a gift?", answer: "Enough Stars on your account and the recipient’s Telegram profile." },
  { question: "What if I do not have enough Stars?", answer: "Top up in so‘m through @StarsPaymee_bot." },
  { question: "Can a gift be returned?", answer: "Usually not — check the recipient before sending." },
  { question: "Can a gift be sold later?", answer: "Some rare gifts can be resold." },
  { question: "How many Stars do I need?", answer: "It depends on the gift’s type and rarity." },
  { question: "Where does the gift appear?", answer: "On the recipient’s profile or in the chat." },
  { question: "Can I send anonymously?", answer: "It depends on Telegram’s current interface settings." },
  { question: "What are limited gifts?", answer: "Ones released in a set quantity and not issued again." },
];

export const post: AeoPost = {
  slug: SLUG,
  category: "Gifts",
  type: "howto",
  datePublished: "2026-08-02",
  dateModified: "2026-08-02",
  keywords: [
    "stars orqali sovga yuborish",
    "telegram sovga yuborish stars",
    "telegram gift stars",
    "sovga yuborish qollanma",
    "telegram sovgalari",
    "stars sovga 2026",
  ],
  howToSteps: [
    { name: "Botga kiring", text: "@StarsPaymee_bot botini oching." },
    { name: "Miqdorni tanlang", text: "Sovg‘a narxiga yetadigan Stars miqdorini oling." },
    { name: "To‘lovni bajaring", text: "UzCard, HUMO, Click, Payme yoki Paynet orqali." },
    { name: "Sovg‘a bo‘limiga o‘ting", text: "Telegram ilovasida sovg‘alar ro‘yxatini oching." },
    { name: "Tanlang va yuboring", text: "Sovg‘ani belgilab, oluvchini ko‘rsating." },
  ],
  locales: {
    uz: {
      title: "Telegram Stars orqali sovg‘a yuborish qo‘llanmasi",
      excerpt:
        "Telegram sovg‘alari nima, ularni Stars evaziga qanday yuborish kerak, qanday sovg‘a tanlash va sovg‘a qaytariladimi — to‘liq javoblar.",
      metaTitle: "Stars orqali sovg‘a yuborish — to‘liq qo‘llanma",
      metaDescription:
        "Telegram Stars orqali sovg‘a yuborish: sovg‘alar nima, Stars qanday to‘ldiriladi, sovg‘a tanlash va qaytarish qoidalari.",
      answerTitle: "Qisqa javob",
      Answer: UzAnswer,
      Body: UzBody,
      ctaHeading: "Sovg‘a uchun Stars oling",
      ctaBody: "@StarsPaymee_bot — so‘mda to‘ldiring va sovg‘ani yuboring.",
      faq: uzFaq,
    },
    ru: {
      title: "Как отправить подарок через Telegram Stars",
      excerpt:
        "Что такое подарки Telegram, как отправить их за Stars, как выбрать подарок и возвращается ли он — полные ответы.",
      metaTitle: "Отправка подарков через Stars — руководство",
      metaDescription:
        "Отправка подарков через Telegram Stars: что это такое, как пополнить звёзды, как выбрать подарок и правила возврата.",
      answerTitle: "Краткий ответ",
      Answer: RuAnswer,
      Body: RuBody,
      ctaHeading: "Получите Stars для подарка",
      ctaBody: "@StarsPaymee_bot — пополните в сумах и отправьте подарок.",
      faq: ruFaq,
    },
    en: {
      title: "Sending gifts with Telegram Stars — a guide",
      excerpt:
        "What Telegram gifts are, how to send them with Stars, how to choose one and whether a gift can be returned — full answers.",
      metaTitle: "Sending gifts with Stars — complete guide",
      metaDescription:
        "Sending gifts with Telegram Stars: what they are, how to top up Stars, how to choose a gift and the return rules.",
      answerTitle: "Short answer",
      Answer: EnAnswer,
      Body: EnBody,
      ctaHeading: "Get Stars for a gift",
      ctaBody: "@StarsPaymee_bot — top up in so‘m and send the gift.",
      faq: enFaq,
    },
  },
};
