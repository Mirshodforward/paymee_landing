import { Link } from "@/i18n/navigation";
import { CompareTable, InlineCta, Sources } from "@/components/blog/aeo-blocks";
import type { AeoPost } from "@/lib/blog-aeo/types";

const SLUG = "telegram-gifts-narxlari-royxati";

function UzAnswer() {
  return (
    <p>
      Telegram noyob sovg‘alari (Gifts) narxi <strong>Stars (yulduz)</strong>da belgilanadi — odatda taxminan 15
      yulduzdan boshlanib, noyob/kolleksion sovg‘alar uchun yuzlab–minglab yulduzgacha. So‘mdagi narx joriy yulduz
      kursiga bog‘liq. StarsPaymee’da sovg‘ani to‘g‘ridan-to‘g‘ri so‘mda (UzCard/HUMO/Click/Payme) sotib olishingiz
      mumkin.
    </p>
  );
}

function UzBody() {
  return (
    <>
      <h2 id="narx-tuzilishi">Telegram Gifts narxi qanday belgilanadi?</h2>
      <p>
        Har bir sovg‘aning bazaviy qiymati Telegram tomonidan Stars’da belgilanadi. So‘mdagi yakuniy narx esa
        yulduzning joriy kursiga va xizmat siyosatiga bog‘liq. Taxminiy darajalar:
      </p>
      <CompareTable
        headers={["Sovg‘a darajasi", "Taxminiy Stars", "Tavsif"]}
        rows={[
          ["Oddiy sovg‘alar", "~15–100 ⭐", "Kundalik tabrik va reaksiya uchun"],
          ["O‘rtacha sovg‘alar", "~100–500 ⭐", "Tug‘ilgan kun, bayram uchun"],
          ["Noyob / kolleksion", "~500–5000+ ⭐", "Cheklangan seriya, qimmatroq dizayn"],
        ]}
      />
      <p>
        Aniq narxlar va mavjud sovg‘alar ro‘yxati doimo o‘zgaradi — joriy katalogni{" "}
        <Link href="/gifts">Gifts sahifasida</Link> yoki @StarsPaymee_bot’da ko‘ring. Stars narxi haqida{" "}
        narx taqqoslovida o‘qishingiz
        mumkin.
      </p>

      <InlineCta text="Sovg‘ani so‘mda olib, do‘stingizga yuboring." />

      <h2 id="sotib-olish">Sovg‘ani qanday sotib olish/yuborish mumkin?</h2>
      <p>
        Sovg‘ani o‘zingizga sotib olishingiz yoki boshqa @username’ga yuborishingiz mumkin — anonim yoki tabrik izohi
        bilan. Bosqichma-bosqich jarayon{" "}
        <Link href="/blog/telegram-gifts-qanday-yuboriladi-qollanma">«Gifts qanday yuboriladi» qo‘llanmasida</Link>{" "}
        yozilgan.
      </p>

      <h2 id="tarkib">So‘mdagi narx nimalardan tashkil topadi?</h2>
      <p>
        Bitta sovg‘aning yakuniy summasi uch qismdan yig‘iladi va ularning har biri alohida o‘zgarishi mumkin:
      </p>
      <ul>
        <li>
          <b>Bazaviy qiymat</b> — Telegram sovg‘aga belgilagan yulduz miqdori. Bu raqam sovg‘a katalogda turgan
          vaqt davomida o‘zgarmaydi.
        </li>
        <li>
          <b>Yulduzning joriy so‘m qiymati</b> — kurs va narx siyosatiga bog‘liq; xuddi shu sabab bir xil sovg‘a
          turli kunlarda biroz boshqacha chiqadi.
        </li>
        <li>
          <b>To‘lov tomoni</b> — tanlangan usul (karta, Click, Payme) bo‘yicha bank tomonidagi komissiya. Botda
          ko‘rsatilgan yakuniy summa buni allaqachon hisobga olgan bo‘ladi.
        </li>
      </ul>
      <p>
        Sovg‘alarning o‘zi TGS animatsiya ko‘rinishida keladi — katalogni Mini App ichida ko‘rib, narxni yonma-yon
        solishtirish qulay. Anonim yuborish yoki izoh qo‘shish narxga ta’sir qilmaydi, lekin sovg‘aning qanday
        ko‘rinishini o‘zgartiradi: shuning uchun qabul qiluvchini va rejimni to‘lovdan oldin tasdiqlang.
      </p>

      <h2 id="muhim">Narx bo‘yicha muhim eslatmalar</h2>
      <ul>
        <li>Bir xil sovg‘a turli kunlarda biroz farq qilishi mumkin — chunki yulduz kursi va komissiya ta’sir qiladi.</li>
        <li>Noyob (cheklangan) sovg‘alar tez tugab qolishi mumkin — katalog mavjudligiga qarang.</li>
        <li>To‘lov so‘mda: xorijiy karta yoki kripto talab qilinmaydi.</li>
      </ul>

      <Sources
        label="Manbalar"
        items={[
          { href: "https://telegram.org/blog/gifts", label: "telegram.org/blog/gifts", note: "Telegram Gifts e’loni" },
          { href: "https://t.me/StarsPaymee_bot", label: "@StarsPaymee_bot", note: "joriy sovg‘alar katalogi" },
        ]}
      />
    </>
  );
}

function RuAnswer() {
  return (
    <p>
      Цена уникальных подарков Telegram (Gifts) задаётся в <strong>Stars (звёздах)</strong> — обычно примерно от 15
      звёзд, а для редких/коллекционных подарков от сотен до тысяч звёзд. Цена в сумах зависит от текущего курса
      звезды. В StarsPaymee подарок можно купить напрямую в сумах (UzCard/HUMO/Click/Payme).
    </p>
  );
}

function RuBody() {
  return (
    <>
      <h2 id="narx-tuzilishi">Как формируется цена Telegram Gifts?</h2>
      <p>
        Базовую стоимость каждого подарка задаёт Telegram в Stars. Итоговая цена в сумах зависит от текущего курса
        звезды и политики сервиса. Примерные уровни:
      </p>
      <CompareTable
        headers={["Уровень подарка", "Примерно Stars", "Описание"]}
        rows={[
          ["Обычные подарки", "~15–100 ⭐", "Для повседневных поздравлений и реакций"],
          ["Средние подарки", "~100–500 ⭐", "На день рождения, праздник"],
          ["Редкие / коллекционные", "~500–5000+ ⭐", "Лимитированная серия, дороже дизайн"],
        ]}
      />
      <p>
        Точные цены и список доступных подарков постоянно меняются — смотрите актуальный каталог на{" "}
        <Link href="/gifts">странице Gifts</Link> или в @StarsPaymee_bot. О цене Stars читайте в{" "}
        сравнении цен.
      </p>

      <InlineCta text="Купите подарок в сумах и отправьте другу." />

      <h2 id="sotib-olish">Как купить/отправить подарок?</h2>
      <p>
        Подарок можно купить себе или отправить на другой @username — анонимно или с поздравлением. Пошаговый процесс
        описан в{" "}
        <Link href="/blog/telegram-gifts-qanday-yuboriladi-qollanma">руководстве «Как отправить Gifts»</Link>.
      </p>

      <h2 id="tarkib">Из чего складывается цена в сумах?</h2>
      <p>
        Итоговая сумма за подарок складывается из трёх частей, и каждая может меняться отдельно:
      </p>
      <ul>
        <li>
          <b>Базовая стоимость</b> — количество звёзд, назначенное подарку самим Telegram. Пока подарок в каталоге,
          это число не меняется.
        </li>
        <li>
          <b>Текущая стоимость звезды в сумах</b> — зависит от курса и ценовой политики; именно поэтому один и тот
          же подарок в разные дни выходит немного иначе.
        </li>
        <li>
          <b>Сторона оплаты</b> — комиссия банка по выбранному способу (карта, Click, Payme). Итоговая сумма в боте
          её уже учитывает.
        </li>
      </ul>
      <p>
        Сами подарки приходят в виде TGS-анимации — каталог удобно смотреть в Mini App и сравнивать цены рядом.
        Анонимная отправка и комментарий на цену не влияют, но меняют то, как подарок выглядит у получателя:
        поэтому получателя и режим отправки подтверждайте до оплаты.
      </p>

      <h2 id="muhim">Важные заметки по цене</h2>
      <ul>
        <li>Один и тот же подарок может немного отличаться по дням — влияют курс звезды и комиссия.</li>
        <li>Редкие (лимитированные) подарки могут быстро заканчиваться — смотрите наличие в каталоге.</li>
        <li>Оплата в сумах: иностранная карта или крипта не нужны.</li>
      </ul>

      <Sources
        label="Источники"
        items={[
          { href: "https://telegram.org/blog/gifts", label: "telegram.org/blog/gifts", note: "анонс Telegram Gifts" },
          { href: "https://t.me/StarsPaymee_bot", label: "@StarsPaymee_bot", note: "актуальный каталог подарков" },
        ]}
      />
    </>
  );
}

function EnAnswer() {
  return (
    <p>
      Telegram gift prices are set in <strong>Stars</strong> — usually from roughly 15 Stars for ordinary gifts up to
      hundreds or thousands for rare and collectible ones. The price in so&lsquo;m follows the current Star rate. In
      the bot you can buy a gift directly in so&lsquo;m with UzCard, HUMO, Click, Payme or Uzum.
    </p>
  );
}

function EnBody() {
  return (
    <>
      <h2 id="narx-tuzilishi">How Telegram gift prices are set</h2>
      <p>
        Telegram sets each gift&rsquo;s base value in Stars. The final so&lsquo;m figure then depends on the current
        Star rate. Rough tiers look like this:
      </p>
      <CompareTable
        headers={["Tier", "Approx. Stars", "Typical use"]}
        rows={[
          ["Ordinary gifts", "~15–100 ⭐", "Everyday greetings and reactions"],
          ["Mid-range gifts", "~100–500 ⭐", "Birthdays and holidays"],
          ["Rare / collectible", "~500–5000+ ⭐", "Limited series, more elaborate art"],
        ]}
      />
      <p>
        Exact prices and the available catalogue change constantly — check the current list on the{" "}
        <Link href="/gifts">Gifts page</Link> or in the bot. On Star pricing itself, see{" "}
        the platform price comparison.
      </p>

      <InlineCta text="Buy a gift in so\u2018m and send it to a friend." />

      <h2 id="sotib-olish">Buying and sending</h2>
      <p>
        A gift can be bought for yourself or sent to another @username, anonymously or with a note. The step-by-step
        process is in{" "}
        <Link href="/blog/telegram-gifts-qanday-yuboriladi-qollanma">the gift-sending guide</Link>.
      </p>

      <h2 id="tarkib">What the so&lsquo;m price is made of</h2>
      <p>The final amount for a gift comes from three parts, and each can move on its own:</p>
      <ul>
        <li>
          <b>The base value</b> — the number of Stars Telegram assigns to the gift. While the gift is in the
          catalogue, that number does not change.
        </li>
        <li>
          <b>The current so&lsquo;m value of a Star</b> — it follows the rate and pricing policy, which is exactly why
          the same gift comes out slightly differently on different days.
        </li>
        <li>
          <b>The payment side</b> — the bank fee for the chosen method (card, Click, Payme). The final total shown in
          the bot already accounts for it.
        </li>
      </ul>
      <p>
        The gifts themselves arrive as TGS animations — the catalogue is easiest to browse in the Mini App, where
        prices sit side by side. Sending anonymously or adding a note does not change the price, but it does change
        how the gift appears to the recipient, so confirm both the recipient and the mode before paying.
      </p>

      <h2 id="muhim">Notes on pricing</h2>
      <ul>
        <li>The same gift can differ slightly day to day, because the Star rate moves.</li>
        <li>Limited gifts sell out — availability in the catalogue is what decides, not the price.</li>
        <li>Payment is in so&lsquo;m: no foreign card and no crypto required.</li>
      </ul>
      <p>
        Why two similar-looking gifts carry different prices is explained in{" "}
        <Link href="/blog/telegram-gift-price">what a gift&rsquo;s price depends on</Link>.
      </p>

      <Sources
        label="Sources"
        items={[
          { href: "https://core.telegram.org/api/gifts", label: "core.telegram.org/api/gifts", note: "gifts documentation" },
          { href: "https://t.me/StarsPaymee_bot", label: "@StarsPaymee_bot", note: "current catalogue and prices" },
        ]}
      />
    </>
  );
}

const faqEn = [
  {
    question: "What is the so‘m price made of?",
    answer:
      "Three parts: the Star value Telegram assigns, the current so‘m value of a Star, and the bank fee for the chosen payment method. The final total in the bot already includes them.",
  },
  {
    question: "In what format does a gift arrive?",
    answer:
      "Gifts arrive as TGS animations, and the catalogue is easiest to browse in the Mini App. Sending anonymously or adding a note does not change the price.",
  },
  { question: "How much does a Telegram gift cost?", answer: "From roughly 15 Stars for ordinary gifts up to thousands for collectibles." },
  { question: "Why does the so\u2018m price change?", answer: "Because gift values are set in Stars, and the Star rate moves." },
  { question: "Can I pay in so\u2018m?", answer: "Yes — UzCard, HUMO, Click, Payme, Uzum or Paynet. No foreign card needed." },
  { question: "Where is the current price list?", answer: "In the bot's catalogue and on the Gifts page; it changes constantly." },
  { question: "Why do two similar gifts cost differently?", answer: "Model, backdrop, symbol and copy number differ — those set the price." },
  { question: "Do limited gifts run out?", answer: "Yes. Once a run ends, that gift can no longer be bought new." },
];
export const post: AeoPost = {
  slug: SLUG,
  category: "Gifts",
  type: "info",
  datePublished: "2026-06-12",
  dateModified: "2026-09-18",
  keywords: [
    "telegram gifts narxlari",
    "telegram sovga narxi",
    "telegram gift price",
    "telegram noyob sovga narxi",
    "telegram gifts royxati",
  ],
  locales: {
    uz: {
      title: "Telegram Gifts narxlari (2026) — sovg‘alar ro‘yxati va narx tuzilishi",
      excerpt:
        "Telegram noyob sovg‘alari narxi qanday: Stars’da belgilanadi, so‘mdagi narx kursga bog‘liq. Oddiy, o‘rtacha va noyob sovg‘alar darajalari va sotib olish.",
      metaTitle: "Telegram Gifts narxlari 2026 — sovg‘alar ro‘yxati",
      metaDescription:
        "Telegram Gifts (noyob sovg‘alar) narxi: Stars’da belgilanadi, so‘mda kursga bog‘liq. Oddiy/o‘rtacha/noyob darajalar, narx eslatmalari va so‘mda sotib olish.",
      answerTitle: "Qisqa javob",
      Answer: UzAnswer,
      Body: UzBody,
      ctaHeading: "Sovg‘a yubormoqchimisiz?",
      ctaBody: "Botda katalogdan tanlang, so‘mda to‘lang — sovg‘a @username’ga yetkaziladi.",
      faq: [
        {
          question: "So‘mdagi narx nimalardan tashkil topadi?",
          answer:
            "Uch qismdan: Telegram belgilagan yulduz qiymati, yulduzning joriy so‘m kursi va to‘lov usuli bo‘yicha bank komissiyasi. Botda ko‘rsatilgan yakuniy summa buni hisobga olgan bo‘ladi.",
        },
        {
          question: "Sovg‘a qanday formatda keladi?",
          answer:
            "Sovg‘alar TGS animatsiya ko‘rinishida keladi va katalogni Mini App ichida ko‘rish qulay. Anonim yuborish yoki izoh qo‘shish narxni o‘zgartirmaydi.",
        },
        {
          question: "Telegram sovg‘alari qancha turadi?",
          answer:
            "Narx Stars’da belgilanadi: oddiy sovg‘alar ~15–100 yulduz, noyob/kolleksion sovg‘alar yuzlab–minglab yulduz. So‘mdagi narx kursga bog‘liq.",
        },
        {
          question: "Nega bir sovg‘a narxi o‘zgaradi?",
          answer: "Yulduz kursi va komissiya o‘zgargani uchun bir xil sovg‘a turli kunlarda biroz farq qilishi mumkin.",
        },
        {
          question: "Sovg‘ani so‘mda olsa bo‘ladimi?",
          answer: "Ha, StarsPaymee’da sovg‘ani UzCard, HUMO, Click yoki Payme bilan so‘mda olasiz.",
        },
        {
          question: "Qabul qiluvchi sovg‘ani qaytara oladimi?",
          answer: "Ko‘p sovg‘alarni qabul qiluvchi profilida saqlashi yoki qayta Stars’ga aylantirishi mumkin.",
        },
        {
          question: "Joriy narxlarni qayerdan ko‘raman?",
          answer: "Mavjud sovg‘alar va aniq narxlarni @StarsPaymee_bot yoki Gifts sahifasida ko‘rasiz.",
        },
      ],
    },
    ru: {
      title: "Цены Telegram Gifts (2026) — список подарков и структура цены",
      excerpt:
        "Какова цена уникальных подарков Telegram: задаётся в Stars, цена в сумах зависит от курса. Уровни обычных, средних и редких подарков и как купить.",
      metaTitle: "Цены Telegram Gifts 2026 — список подарков",
      metaDescription:
        "Цена Telegram Gifts (уникальных подарков): задаётся в Stars, в сумах зависит от курса. Уровни обычные/средние/редкие, заметки по цене и покупка в сумах.",
      answerTitle: "Краткий ответ",
      Answer: RuAnswer,
      Body: RuBody,
      ctaHeading: "Хотите отправить подарок?",
      ctaBody: "Выберите в каталоге бота, оплатите в сумах — подарок доставится на @username.",
      faq: [
        {
          question: "Из чего складывается цена в сумах?",
          answer:
            "Из трёх частей: заданная Telegram стоимость в звёздах, текущий курс звезды в сумах и комиссия банка по выбранному способу оплаты. Итоговая сумма в боте это уже учитывает.",
        },
        {
          question: "В каком формате приходит подарок?",
          answer:
            "Подарки приходят в виде TGS-анимации, а каталог удобно смотреть в Mini App. Анонимная отправка и комментарий на цену не влияют.",
        },
        {
          question: "Сколько стоят подарки Telegram?",
          answer:
            "Цена задаётся в Stars: обычные подарки ~15–100 звёзд, редкие/коллекционные — сотни–тысячи звёзд. Цена в сумах зависит от курса.",
        },
        {
          question: "Почему цена одного подарка меняется?",
          answer: "Из-за изменения курса звезды и комиссии один и тот же подарок может немного отличаться по дням.",
        },
        {
          question: "Можно ли купить подарок в сумах?",
          answer: "Да, в StarsPaymee подарок покупается за UzCard, HUMO, Click или Payme в сумах.",
        },
        {
          question: "Может ли получатель вернуть подарок?",
          answer: "Многие подарки получатель может оставить в профиле или конвертировать обратно в Stars.",
        },
        {
          question: "Где увидеть актуальные цены?",
          answer: "Доступные подарки и точные цены показываются в @StarsPaymee_bot или на странице Gifts.",
        },
      ],
    },
    en: {
      title: "Telegram gift prices: what they cost and why",
      excerpt: "Price tiers in Stars, how the so\u2018m figure is formed, and what makes two similar gifts differ.",
      metaTitle: "Telegram gift prices | List 2026",
      metaDescription: "Telegram gift prices: tiers in Stars, how the so\u2018m price is worked out, payment methods and why similar gifts differ.",
      answerTitle: "Short answer",
      Answer: EnAnswer,
      Body: EnBody,
      ctaHeading: "Browse the catalogue",
      ctaBody: "@StarsPaymee_bot — gifts priced in so\u2018m.",
      faq: faqEn,
    },
  },
};
