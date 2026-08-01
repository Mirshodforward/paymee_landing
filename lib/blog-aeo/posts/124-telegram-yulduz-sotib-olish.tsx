import { Link } from "@/i18n/navigation";
import { InlineCta, Sources, KeyFacts, Steps, Step, InfoGrid, InfoCard } from "@/components/blog/aeo-blocks";
import { StarsPriceBoard } from "@/components/blog/stars-price-board";
import type { AeoPost } from "@/lib/blog-aeo/types";

const SLUG = "telegram-yulduz-sotib-olish";

/* ---------------- UZ ---------------- */
function UzAnswer() {
  return (
    <p>
      «Yulduz» — Telegram Stars valyutasining o‘zbekcha nomi, ya’ni ikkalasi <b>bir xil narsa</b>. Telegram Yulduz
      sotib olish uchun <b>@StarsPaymee_bot</b> ga o‘tasiz, miqdorni tanlaysiz va so‘mda to‘laysiz: 1 dona —{" "}
      <b>220 so‘m</b>, 50 ta — <b>11 000 so‘m</b>. Yetkazish avtomatik, ~10 soniya.
    </p>
  );
}

function UzBody() {
  return (
    <>
      <h2 id="nom">«Yulduz» va «Stars» — farqi bormi?</h2>
      <p>
        Farqi yo‘q. Telegram rasmiy hujjatlarida <b>Stars</b> deb yuritiladi, o‘zbek tilida esa ko‘pchilik{" "}
        <b>Yulduz</b> deb qidiradi. Ikkala so‘z ham bitta valyutani anglatadi, shuning uchun narx va buyurtma tartibi
        ham bir xil.
      </p>

      <h2 id="nima-uchun">Telegram Yulduzlari nima uchun kerak?</h2>
      <KeyFacts label="Asosiy foydalanish holatlari">
        <li>Bot xizmatlariga to‘lov qilish.</li>
        <li>Kanal va guruh mualliflariga homiylik.</li>
        <li>Raqamli sovg‘alar va stikerlar sotib olish.</li>
        <li>Mini-ilovalarda premium funksiyalarni ochish.</li>
      </KeyFacts>

      <h2 id="qanday">Yulduzlarni qanday sotib olish mumkin?</h2>
      <p>
        Rasmiy yo‘l — Telegram ilovasi ichidagi to‘lov, lekin u odatda xalqaro bank kartasini talab qiladi. Muqobil
        va O‘zbekiston uchun qulayroq yo‘l — mahalliy xizmat orqali so‘mda xarid qilish.
      </p>

      <StarsPriceBoard locale="uz" />

      <InlineCta text="Yulduz miqdorini tanlang va narxni ko‘ring." />

      <h2 id="qadamlar">Bosqichma-bosqich</h2>
      <Steps>
        <Step title="1. Botni oching">@StarsPaymee_bot.</Step>
        <Step title="2. Yulduz sonini tanlang">50, 100, 250, 500 yoki o‘z miqdoringiz.</Step>
        <Step title="3. Username kiriting">Yulduzlar tushadigan hisob.</Step>
        <Step title="4. To‘lang">UzCard, HUMO, Click, Payme yoki Paynet — so‘mda.</Step>
        <Step title="5. Qabul qiling">~10 soniyada hisobingizga tushadi.</Step>
      </Steps>

      <h2 id="afzallik">Nima yutasiz?</h2>
      <InfoGrid>
        <InfoCard emoji="🌟" title="Bir xil valyuta">
          Yulduz = Stars, qo‘shimcha sozlama kerak emas.
        </InfoCard>
        <InfoCard emoji="💳" title="Mahalliy karta">
          UzCard va HUMO yetarli.
        </InfoCard>
        <InfoCard emoji="⚡" title="Avtomatik">
          Operator kutilmaydi — bot o‘zi bajaradi.
        </InfoCard>
        <InfoCard emoji="🔐" title="Xavfsiz">
          Parol yoki SMS-kod so‘ralmaydi.
        </InfoCard>
      </InfoGrid>

      <p>
        Qarang: <Link href="/blog/yulduz-olish">Yulduz olish — qisqa qo‘llanma</Link>,{" "}
        <Link href="/blog/stars-olish">Stars olish</Link> va{" "}
        <Link href="/blog/som-evaziga-stars-olish">so‘m evaziga olish</Link>.
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
      «Yulduz» — узбекское название валюты Telegram Stars, то есть это <b>одно и то же</b>. Чтобы купить Telegram
      Yulduz, откройте <b>@StarsPaymee_bot</b>, выберите количество и оплатите в сумах: 1 штука — <b>220 сум</b>,
      50 штук — <b>11 000 сум</b>. Доставка автоматическая, ~10 секунд.
    </p>
  );
}

function RuBody() {
  return (
    <>
      <h2 id="nom">«Yulduz» и «Stars» — есть ли разница?</h2>
      <p>
        Разницы нет. В официальной документации Telegram валюта называется <b>Stars</b>, а на узбекском её чаще ищут
        как <b>Yulduz</b>. Оба слова обозначают одну валюту, поэтому цена и порядок заказа одинаковые.
      </p>

      <h2 id="nima-uchun">Зачем нужны звёзды Telegram?</h2>
      <KeyFacts label="Основные сценарии использования">
        <li>Оплата услуг ботов.</li>
        <li>Донаты авторам каналов и групп.</li>
        <li>Покупка цифровых подарков и стикеров.</li>
        <li>Открытие премиум-функций в мини-приложениях.</li>
      </KeyFacts>

      <h2 id="qanday">Как купить звёзды?</h2>
      <p>
        Официальный путь — оплата внутри приложения Telegram, но она обычно требует международной банковской карты.
        Альтернатива, более удобная для Узбекистана, — покупка за сумы через местный сервис.
      </p>

      <StarsPriceBoard locale="ru" />

      <InlineCta text="Выберите количество звёзд и посмотрите цену." />

      <h2 id="qadamlar">По шагам</h2>
      <Steps>
        <Step title="1. Откройте бота">@StarsPaymee_bot.</Step>
        <Step title="2. Выберите количество">50, 100, 250, 500 или своё число.</Step>
        <Step title="3. Укажите username">Аккаунт, куда поступят звёзды.</Step>
        <Step title="4. Оплатите">UzCard, HUMO, Click, Payme или Paynet — в сумах.</Step>
        <Step title="5. Получите">Зачисление за ~10 секунд.</Step>
      </Steps>

      <h2 id="afzallik">Что вы получаете</h2>
      <InfoGrid>
        <InfoCard emoji="🌟" title="Та же валюта">
          Yulduz = Stars, дополнительных настроек не нужно.
        </InfoCard>
        <InfoCard emoji="💳" title="Локальная карта">
          Достаточно UzCard и HUMO.
        </InfoCard>
        <InfoCard emoji="⚡" title="Автоматически">
          Оператора ждать не нужно — бот делает всё сам.
        </InfoCard>
        <InfoCard emoji="🔐" title="Безопасно">
          Пароль и SMS-код не запрашиваются.
        </InfoCard>
      </InfoGrid>

      <p>
        Смотрите: <Link href="/blog/yulduz-olish">«Yulduz olish» — краткое руководство</Link>,{" "}
        <Link href="/blog/stars-olish">покупка Stars</Link> и{" "}
        <Link href="/blog/som-evaziga-stars-olish">покупка за сумы</Link>.
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
      «Yulduz» is simply the Uzbek word for Telegram Stars — the <b>same currency</b>. To buy Telegram Yulduz, open{" "}
      <b>@StarsPaymee_bot</b>, choose an amount and pay in so‘m: one is <b>220 UZS</b>, fifty are{" "}
      <b>11,000 UZS</b>. Delivery is automatic, about 10 seconds.
    </p>
  );
}

function EnBody() {
  return (
    <>
      <h2 id="nom">«Yulduz» vs «Stars» — is there a difference?</h2>
      <p>
        There is none. Telegram’s official documentation calls the currency <b>Stars</b>, while in Uzbek most people
        search for <b>Yulduz</b>. Both words mean the same currency, so the price and the ordering flow are identical.
      </p>

      <h2 id="nima-uchun">What are Telegram Stars for?</h2>
      <KeyFacts label="Main use cases">
        <li>Paying for bot services.</li>
        <li>Supporting channel and group authors.</li>
        <li>Buying digital gifts and stickers.</li>
        <li>Unlocking premium features in mini apps.</li>
      </KeyFacts>

      <h2 id="qanday">How can you buy Stars?</h2>
      <p>
        The official route is payment inside the Telegram app, but it normally requires an international bank card.
        The alternative — and the easier one in Uzbekistan — is buying in so‘m through a local service.
      </p>

      <StarsPriceBoard locale="en" />

      <InlineCta text="Choose an amount of Stars and see the price." />

      <h2 id="qadamlar">Step by step</h2>
      <Steps>
        <Step title="1. Open the bot">@StarsPaymee_bot.</Step>
        <Step title="2. Choose the amount">50, 100, 250, 500 or your own number.</Step>
        <Step title="3. Enter a username">The account the Stars should land on.</Step>
        <Step title="4. Pay">UzCard, HUMO, Click, Payme or Paynet — in so‘m.</Step>
        <Step title="5. Receive">Credited in about 10 seconds.</Step>
      </Steps>

      <h2 id="afzallik">What you get</h2>
      <InfoGrid>
        <InfoCard emoji="🌟" title="Same currency">
          Yulduz = Stars, with no extra setup.
        </InfoCard>
        <InfoCard emoji="💳" title="Local card">
          UzCard and HUMO are enough.
        </InfoCard>
        <InfoCard emoji="⚡" title="Automatic">
          No waiting for an operator — the bot handles it.
        </InfoCard>
        <InfoCard emoji="🔐" title="Safe">
          No password or SMS code is requested.
        </InfoCard>
      </InfoGrid>

      <p>
        See also: <Link href="/blog/yulduz-olish">«Yulduz olish» — the short guide</Link>,{" "}
        <Link href="/blog/stars-olish">getting Stars</Link> and{" "}
        <Link href="/blog/som-evaziga-stars-olish">buying with so‘m</Link>.
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
  { question: "Yulduz va Stars bir xilmi?", answer: "Ha, bir xil valyuta. «Yulduz» — Stars’ning o‘zbekcha nomi." },
  { question: "1 ta Yulduz qancha turadi?", answer: "220 so‘m. 50 ta — 11 000 so‘m." },
  { question: "Xalqaro karta kerakmi?", answer: "Yo‘q. UzCard, HUMO, Click, Payme yoki Paynet yetarli." },
  { question: "Qancha vaqtda tushadi?", answer: "Odatda ~10 soniyada, avtomatik." },
  { question: "Qanday ma’lumot so‘raladi?", answer: "Faqat Telegram username yoki ID." },
  { question: "Do‘stimga Yulduz sovg‘a qilsam bo‘ladimi?", answer: "Ha, buyurtmada uning username’ini ko‘rsating." },
  { question: "Eng kam nechta olish mumkin?", answer: "Bazaviy paket — 50 ta Yulduz." },
  { question: "Yulduzlar muddati tugaydimi?", answer: "Yo‘q, Telegram hisobingizda saqlanib turadi." },
  { question: "Botdan tashqari usul bormi?", answer: "Mini App orqali ham buyurtma berish mumkin." },
  { question: "Muammo chiqsa kimga murojaat qilaman?", answer: "@StarsPaymeeSupport — buyurtma va to‘lov bo‘yicha." },
];

const ruFaq = [
  { question: "Yulduz и Stars — это одно и то же?", answer: "Да, это одна валюта. «Yulduz» — узбекское название Stars." },
  { question: "Сколько стоит 1 Yulduz?", answer: "220 сум. 50 штук — 11 000 сум." },
  { question: "Нужна ли международная карта?", answer: "Нет. Достаточно UzCard, HUMO, Click, Payme или Paynet." },
  { question: "Как быстро приходит?", answer: "Обычно за ~10 секунд, автоматически." },
  { question: "Какие данные запрашиваются?", answer: "Только Telegram username или ID." },
  { question: "Можно ли подарить звёзды другу?", answer: "Да, укажите в заказе его username." },
  { question: "Какое минимальное количество?", answer: "Базовый пакет — 50 звёзд." },
  { question: "Сгорают ли звёзды?", answer: "Нет, они хранятся на вашем аккаунте Telegram." },
  { question: "Есть ли способ помимо бота?", answer: "Заказать можно и через Mini App." },
  { question: "Куда обращаться при проблеме?", answer: "@StarsPaymeeSupport — по заказу и оплате." },
];

const enFaq = [
  { question: "Are Yulduz and Stars the same?", answer: "Yes, the same currency. «Yulduz» is the Uzbek name for Stars." },
  { question: "How much does one Yulduz cost?", answer: "220 UZS. Fifty cost 11,000 UZS." },
  { question: "Do I need an international card?", answer: "No. UzCard, HUMO, Click, Payme or Paynet is enough." },
  { question: "How quickly does it arrive?", answer: "Usually in about 10 seconds, automatically." },
  { question: "What data is requested?", answer: "Only a Telegram username or ID." },
  { question: "Can I gift Stars to a friend?", answer: "Yes — give their username when ordering." },
  { question: "What is the minimum amount?", answer: "The base pack is 50 Stars." },
  { question: "Do Stars expire?", answer: "No, they stay on your Telegram account." },
  { question: "Is there a way other than the bot?", answer: "You can also order through the Mini App." },
  { question: "Who do I contact if something goes wrong?", answer: "@StarsPaymeeSupport — for orders and payments." },
];

export const post: AeoPost = {
  slug: SLUG,
  category: "Stars",
  type: "howto",
  datePublished: "2026-08-01",
  dateModified: "2026-08-01",
  keywords: [
    "telegram yulduz sotib olish",
    "yulduz sotib olish",
    "telegram yulduz",
    "yulduz stars farqi",
    "telegram yulduz narxi",
    "yulduz sotib olish 2026",
  ],
  howToSteps: [
    { name: "Botni oching", text: "@StarsPaymee_bot botini oching." },
    { name: "Yulduz sonini tanlang", text: "50, 100, 250 yoki 500 ta." },
    { name: "Username kiriting", text: "Yulduzlar tushadigan hisobni ko‘rsating." },
    { name: "To‘lang", text: "UzCard, HUMO, Click, Payme yoki Paynet orqali so‘mda." },
    { name: "Qabul qiling", text: "Yulduzlar ~10 soniyada hisobga tushadi." },
  ],
  locales: {
    uz: {
      title: "Telegram Yulduz sotib olish — to‘liq qo‘llanma",
      excerpt:
        "Yulduz va Stars — bir xil valyuta. Telegram Yulduz sotib olish tartibi, narxlar (220 so‘m/dona) va so‘mdagi to‘lov usullari.",
      metaTitle: "Telegram Yulduz sotib olish — to‘liq qo‘llanma",
      metaDescription:
        "Telegram Yulduz sotib olish: Yulduz = Stars, narxi 220 so‘m/dona, 50 ta 11 000 so‘m. UzCard, HUMO va Click orqali so‘mda to‘lov.",
      answerTitle: "Qisqa javob",
      Answer: UzAnswer,
      Body: UzBody,
      ctaHeading: "Yulduzlarni hoziroq oling",
      ctaBody: "@StarsPaymee_bot da miqdorni tanlang — to‘lov so‘mda, yetkazish ~10 soniya.",
      faq: uzFaq,
    },
    ru: {
      title: "Купить Telegram Yulduz — полное руководство",
      excerpt:
        "Yulduz и Stars — одна валюта. Порядок покупки Telegram Yulduz, цены (220 сум за штуку) и способы оплаты в сумах.",
      metaTitle: "Купить Telegram Yulduz — полное руководство",
      metaDescription:
        "Как купить Telegram Yulduz: Yulduz = Stars, цена 220 сум за штуку, 50 штук 11 000 сум. Оплата в сумах через UzCard, HUMO и Click.",
      answerTitle: "Краткий ответ",
      Answer: RuAnswer,
      Body: RuBody,
      ctaHeading: "Получите звёзды прямо сейчас",
      ctaBody: "Выберите количество в @StarsPaymee_bot — оплата в сумах, доставка ~10 секунд.",
      faq: ruFaq,
    },
    en: {
      title: "Buying Telegram Yulduz — the complete guide",
      excerpt:
        "Yulduz and Stars are the same currency. How to buy Telegram Yulduz, the prices (220 UZS each) and the so‘m payment methods.",
      metaTitle: "Buying Telegram Yulduz — the complete guide",
      metaDescription:
        "How to buy Telegram Yulduz: Yulduz = Stars, 220 UZS each, 11,000 UZS for fifty. Pay in so‘m via UzCard, HUMO and Click.",
      answerTitle: "Short answer",
      Answer: EnAnswer,
      Body: EnBody,
      ctaHeading: "Get your Stars now",
      ctaBody: "Choose an amount in @StarsPaymee_bot — pay in so‘m, delivered in about 10 seconds.",
      faq: enFaq,
    },
  },
};
