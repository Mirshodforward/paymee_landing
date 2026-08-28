import { Link } from "@/i18n/navigation";
import {
  CompareTable,
  InfoCard,
  InfoGrid,
  InlineCta,
  KeyFacts,
  No,
  Sources,
  Step,
  Steps,
  Yes,
} from "@/components/blog/aeo-blocks";
import { PremiumPlanBoard } from "@/components/blog/premium-plan-board";
import type { AeoPost } from "@/lib/blog-aeo/types";

const SLUG = "telegram-premium-3-6-12-oy-sotib-olish";

/** Rasmiy obuna va botdagi xarid — uchala tilda bir xil ustunlar. */
function PremiumCompare({ locale }: { locale: "uz" | "ru" | "en" }) {
  const copy = {
    uz: {
      headers: ["Mezon", "Telegram ichida rasmiy obuna", "@StarsPaymee_bot"],
      rows: [
        ["To‘lov vositasi", "Visa yoki Mastercard", "Click, Payme, UzCard, HUMO"],
        ["Valyuta", "Dollar yoki evro", "O‘zbek so‘mi"],
        ["Bank konvertatsiyasi", "no", "yes"],
        ["Akkauntga kirish", "Shaxsan o‘zingiz", "Faqat username — parol so‘ralmaydi"],
        ["Muddat tanlash", "3, 6, 12 oy", "3, 6, 12 oy"],
        ["Faollashuv", "To‘lovdan keyin darhol", "Odatda to‘lovdan keyin bir necha soniyada"],
      ],
    },
    ru: {
      headers: ["Критерий", "Официальная подписка в Telegram", "@StarsPaymee_bot"],
      rows: [
        ["Средство оплаты", "Visa или Mastercard", "Click, Payme, Uzcard, Humo"],
        ["Валюта", "Доллар или евро", "Узбекский сум"],
        ["Банковская конвертация", "no", "yes"],
        ["Вход в аккаунт", "Лично вами", "Только username — пароль не запрашивается"],
        ["Выбор срока", "3, 6, 12 месяцев", "3, 6, 12 месяцев"],
        ["Активация", "Сразу после оплаты", "Обычно за считаные секунды после оплаты"],
      ],
    },
    en: {
      headers: ["Criterion", "Official subscription in Telegram", "@StarsPaymee_bot"],
      rows: [
        ["Payment instrument", "Visa or Mastercard", "Click, Payme, UzCard, HUMO"],
        ["Currency", "US dollar or euro", "Uzbek so‘m"],
        ["Bank conversion", "no", "yes"],
        ["Account login", "By you personally", "Username only — no password requested"],
        ["Term options", "3, 6, 12 months", "3, 6, 12 months"],
        ["Activation", "Right after payment", "Usually within seconds after payment"],
      ],
    },
  }[locale];

  const marks = {
    uz: { yes: "Yo‘q", no: "Bor" },
    ru: { yes: "Нет", no: "Есть" },
    en: { yes: "None", no: "Applies" },
  }[locale];

  return (
    <CompareTable
      headers={copy.headers}
      rows={copy.rows.map(([label, official, bot]) => [
        <strong key="l">{label}</strong>,
        official === "no" ? <No key="o">{marks.no}</No> : official,
        bot === "yes" ? <Yes key="b">{marks.yes}</Yes> : bot,
      ])}
    />
  );
}

/* ---------------- UZ ---------------- */
function UzAnswer() {
  return (
    <p>
      Telegram Premium’ni <b>3, 6 yoki 12 oy</b>ga o‘zbek so‘mida, Visa kartasiz sotib olish mumkin:{" "}
      <b>@StarsPaymee_bot</b> da muddatni tanlaysiz, username kiritasiz va Click, HUMO, UzCard yoki Payme bilan
      to‘laysiz. Obuna hisobda odatda bir necha soniyada faollashadi.
    </p>
  );
}

function UzBody() {
  return (
    <>
      <p>
        Telegram Premium messenjerning kengaytirilgan imkoniyatlarini ochadi: kattaroq fayl yuklash limitlari,
        eksklyuziv stikerlar va reaksiyalar, tezlashtirilgan yuklash, kanallarda reklamaning yo‘qligi va boshqa
        ko‘plab funksiyalar. Lekin obunani rasmiy tarzda rasmiylashtirmoqchi bo‘lgan O‘zbekiston foydalanuvchilari
        yulduz xarididagi bilan bir xil muammoga duch keladi — Telegram to‘lovni faqat Visa yoki Mastercard
        kartalari orqali qabul qiladi.
      </p>

      <h2 id="nega-noqulay">Nega rasmiy obuna O‘zbekistonda noqulay</h2>
      <KeyFacts label="Asosiy to‘siqlar">
        <li>Rasmiy to‘lov xalqaro Visa/Mastercard kartalariga bog‘langan.</li>
        <li>
          Ko‘pchilik foydalanadigan mahalliy <b>HUMO</b> va <b>UzCard</b> kartalari to‘g‘ridan-to‘g‘ri
          qo‘llab-quvvatlanmaydi.
        </li>
        <li>
          Narx dollar yoki evroda ko‘rsatiladi; konvertatsiya va bank komissiyalaridan keyin so‘mdagi yakuniy
          summa kutilganidan yuqori chiqadi.
        </li>
        <li>Bitta obuna uchun chet el kartasini rasmiylashtirish uzoq va har doim ham imkonli emas.</li>
      </KeyFacts>

      <h2 id="tariflar">Tariflar: 3, 6 va 12 oy</h2>
      <PremiumPlanBoard locale="uz" />
      <p>
        Muddatni ehtiyojga qarab tanlang — bir oydan uzoqroq foydalanmoqchi bo‘lsangiz, oyiga hisoblaganda uzunroq
        paket har doim tejamkorroq.
      </p>
      <InfoGrid>
        <InfoCard emoji="🌱" title="3 oy">
          Uzoq muddatli majburiyatsiz Premium’ning barcha funksiyalarini sinab ko‘rish uchun qulay.
        </InfoCard>
        <InfoCard emoji="⚖️" title="6 oy">
          Narx va muddat o‘rtasidagi muvozanat — Premium’dan foydalanib ko‘rgan va uzaytirmoqchi bo‘lganlar uchun.
        </InfoCard>
        <InfoCard emoji="🏆" title="12 oy">
          Oyiga hisoblaganda eng foydali variant — Premium doimiy kerak bo‘lsa.
        </InfoCard>
      </InfoGrid>

      <InlineCta
        text="Muddatni tanlang va so‘mda to‘lang — Premium bir necha soniyada faollashadi."
        product={{ kind: "premium", months: 6 }}
      />

      <h2 id="qadamlar">Qadam-baqadam qo‘llanma</h2>
      <Steps>
        <Step title="1. Botni oching">
          Telegramda{" "}
          <a href="https://t.me/StarsPaymee_bot" target="_blank" rel="noopener noreferrer">
            @StarsPaymee_bot
          </a>{" "}
          ni ishga tushiring.
        </Step>
        <Step title="2. Telegram Premium bo‘limini tanlang">
          Obuna kimga rasmiylashtirilishini username orqali ko‘rsating.
        </Step>
        <Step title="3. Muddatni belgilang">3, 6 yoki 12 oy — ehtiyojingizga qarab.</Step>
        <Step title="4. To‘lov usulini tanlang">
          Click, HUMO kartasi, UzCard kartasi yoki Payme — hammasi so‘mda, joriy kurs bo‘yicha.
        </Step>
        <Step title="5. Buyurtmani to‘lang">Bu bir necha daqiqadan ko‘p vaqt olmaydi.</Step>
        <Step title="6. Premium’ni qabul qiling">
          Obuna hisobda avtomatik yoqiladi — odatda to‘lovdan keyin deyarli darhol.
        </Step>
      </Steps>
      <p>
        Chet el kartasi ham, valyuta konvertatsiyasi ham, yashirin bank komissiyalari ham yo‘q — faqat odatiy
        mahalliy to‘lov usullari. Parol yoki SMS-kod hech qachon so‘ralmaydi: username yetarli.
      </p>

      <h2 id="taqqoslash">Rasmiy obuna va botdagi xarid</h2>
      <PremiumCompare locale="uz" />
      <p>
        Botdagi narx uchala tarif uchun ham rasmiy ilova ichidagi narxdan pastroq bo‘lib chiqadi — chunki
        mahalliy to‘lov tizimlari bilan to‘g‘ridan-to‘g‘ri ishlanadi va O‘zbekiston foydalanuvchilari uchun
        odatda rasmiy narxga qo‘shib hisoblanadigan valyuta konvertatsiyasi komissiyalari yo‘q.
      </p>

      <h2 id="qulaylik">Nega aynan shu bot orqali olish qulay</h2>
      <KeyFacts label="Asosiy sabablar">
        <li>
          <b>Visa/Mastercard kerak emas</b> — to‘lov to‘liq mahalliy, so‘mda.
        </li>
        <li>
          <b>To‘lovning bir nechta usuli</b> — Click, HUMO, UzCard, Payme, shuning uchun har qanday foydalanuvchiga
          mos keladi.
        </li>
        <li>
          <b>Narx rasmiysidan past</b> — xuddi shu Telegram Premium, lekin kamroq to‘laysiz.
        </li>
        <li>
          <b>Tez faollashuv</b> — obuna to‘lovdan keyin deyarli darhol paydo bo‘ladi, qo‘lda so‘rov kutilmaydi.
        </li>
        <li>
          <b>Bir xil qulay interfeys</b> — botda ilgari{" "}
          <Link href="/blog/click-payme-orqali-telegram-stars-sotib-olish">Stars sotib olgan</Link> bo‘lsangiz,
          Premium xaridi ham xuddi shunday intuitiv kechadi.
        </li>
      </KeyFacts>

      <h2 id="ishonch">Nega foydalanuvchilar ishonadi</h2>
      <p>
        Raqamli tovarlarni sotib olish uchun xizmat tanlashdagi asosiy savol — xavfsizlik va ishonchlilik.
        @StarsPaymee_bot O‘zbekiston hududida rasmiy tarzda market sifatida ro‘yxatdan o‘tgan: faoliyat mamlakat
        huquqiy maydonida, ochiq olib boriladi, anonim va tekshirilmagan kanallar orqali emas. Aynan shuning uchun
        minglab foydalanuvchilar Stars va Premium xaridi uchun shu xizmatni tanlaydi. Batafsil:{" "}
        <Link href="/blog/starspaymee-ishonchli-xavfsizmi">StarsPaymee ishonchlimi</Link>.
      </p>

      <p>
        Shuningdek o‘qing:{" "}
        <Link href="/blog/telegram-premium-imkoniyatlari">Premium imkoniyatlari</Link>,{" "}
        <Link href="/blog/premium-va-oddiy-hisob-farqi">Premium va oddiy hisob farqi</Link>,{" "}
        <Link href="/blog/telegram-sovga-va-nft-sovga-sotib-olish">oddiy va NFT sovg‘alar</Link>.
      </p>

      <Sources
        label="Manbalar"
        items={[
          { href: "https://telegram.org/faq_premium", label: "telegram.org", note: "Telegram Premium rasmiy FAQ" },
          { href: "https://telegram.org/blog/premium", label: "telegram.org/blog", note: "Premium e’loni" },
          { href: "https://click.uz/", label: "click.uz", note: "Click to‘lov tizimi" },
          { href: "https://uzcard.uz/", label: "uzcard.uz", note: "UzCard milliy to‘lov tizimi" },
        ]}
      />
    </>
  );
}

/* ---------------- RU ---------------- */
function RuAnswer() {
  return (
    <p>
      Telegram Premium на <b>3, 6 или 12 месяцев</b> можно оформить за узбекский сум без карты Visa: в{" "}
      <b>@StarsPaymee_bot</b> вы выбираете срок, указываете username и оплачиваете через Click, Humo, Uzcard или
      Payme. Подписка активируется на аккаунте обычно за считаные секунды.
    </p>
  );
}

function RuBody() {
  return (
    <>
      <p>
        Telegram Premium открывает доступ к расширенным возможностям мессенджера: увеличенным лимитам на загрузку
        файлов, эксклюзивным стикерам и реакциям, ускоренной загрузке медиа, отсутствию рекламы в каналах и многим
        другим функциям. Но при попытке оформить подписку официально пользователи из Узбекистана сталкиваются с той
        же проблемой, что и при покупке звёзд, — Telegram принимает оплату только картами Visa или Mastercard.
      </p>

      <h2 id="nega-noqulay">Почему покупка Premium напрямую неудобна для жителей Узбекистана</h2>
      <KeyFacts label="Основные препятствия">
        <li>Официальная оплата привязана к международным картам Visa/Mastercard.</li>
        <li>
          Локальные карты <b>Humo</b> и <b>Uzcard</b>, которыми пользуется большинство, не поддерживаются напрямую.
        </li>
        <li>
          Цена указывается в долларах или евро, а при конвертации и комиссиях банка итоговая сумма в сумах часто
          оказывается выше, чем ожидалось.
        </li>
        <li>Оформлять зарубежную карту ради одной подписки — долго, неудобно и не всегда возможно.</li>
      </KeyFacts>

      <h2 id="tariflar">Тарифы: 3, 6 и 12 месяцев</h2>
      <PremiumPlanBoard locale="ru" />
      <p>
        Выбирайте срок под свою задачу — если Premium нужен дольше пары месяцев, более длинный пакет в пересчёте
        на месяц всегда выгоднее.
      </p>
      <InfoGrid>
        <InfoCard emoji="🌱" title="3 месяца">
          Оптимально, если хотите попробовать все функции Premium без долгосрочных обязательств.
        </InfoCard>
        <InfoCard emoji="⚖️" title="6 месяцев">
          Баланс цены и срока для тех, кто уже пользовался Premium и хочет продлить.
        </InfoCard>
        <InfoCard emoji="🏆" title="12 месяцев">
          Самый выгодный вариант по цене за месяц, если Premium нужен постоянно.
        </InfoCard>
      </InfoGrid>

      <InlineCta
        text="Выберите срок и оплатите в сумах — Premium активируется за секунды."
        product={{ kind: "premium", months: 6 }}
      />

      <h2 id="qadamlar">Пошаговая инструкция</h2>
      <Steps>
        <Step title="1. Откройте бота">
          Запустите{" "}
          <a href="https://t.me/StarsPaymee_bot" target="_blank" rel="noopener noreferrer">
            @StarsPaymee_bot
          </a>{" "}
          в Telegram.
        </Step>
        <Step title="2. Выберите раздел Telegram Premium">Укажите аккаунт по username — свой или чужой.</Step>
        <Step title="3. Выберите срок подписки">3, 6 или 12 месяцев — в зависимости от того, что вам нужно.</Step>
        <Step title="4. Выберите способ оплаты">
          Click, карта Humo, карта Uzcard или Payme — всё в узбекских сумах, по актуальному курсу.
        </Step>
        <Step title="5. Оплатите заказ">Это занимает не больше пары минут.</Step>
        <Step title="6. Получите Premium">
          Подписка активируется на вашем аккаунте автоматически, обычно почти сразу после оплаты.
        </Step>
      </Steps>
      <p>
        Никаких зарубежных карт, конвертации валют и скрытых банковских комиссий — только привычные локальные
        способы оплаты. Пароль или SMS-код никогда не запрашивается: достаточно username.
      </p>

      <h2 id="taqqoslash">Официальная подписка и покупка в боте</h2>
      <PremiumCompare locale="ru" />
      <p>
        Цена в @StarsPaymee_bot на все три тарифа ниже, чем при оформлении подписки напрямую через сам Telegram, —
        за счёт прямой работы с локальными платёжными системами и без банковских комиссий за конвертацию валют,
        которые обычно закладываются в официальную цену для пользователей из Узбекистана.
      </p>

      <h2 id="qulaylik">Почему покупать Premium удобно именно через этого бота</h2>
      <KeyFacts label="Основные причины">
        <li>
          <b>Не нужна карта Visa/Mastercard</b> — оплата полностью локальная, в сумах.
        </li>
        <li>
          <b>Несколько способов оплаты на выбор</b> — Click, Humo, Uzcard, Payme, поэтому сервис подойдёт любому
          пользователю.
        </li>
        <li>
          <b>Цена ниже официальной</b> — вы получаете тот же самый Telegram Premium, но платите меньше.
        </li>
        <li>
          <b>Быстрая активация</b> — подписка появляется на аккаунте практически сразу после оплаты, без ожидания
          и ручных запросов.
        </li>
        <li>
          <b>Один и тот же интерфейс</b> — если вы уже{" "}
          <Link href="/blog/click-payme-orqali-telegram-stars-sotib-olish">покупали в боте звёзды</Link>, покупка
          Premium происходит так же интуитивно.
        </li>
      </KeyFacts>

      <h2 id="ishonch">Почему пользователи доверяют сервису</h2>
      <p>
        Один из главных вопросов при выборе сервиса для покупки цифровых товаров — безопасность и надёжность. У
        @StarsPaymee_bot есть весомый аргумент в пользу доверия: сервис официально зарегистрирован как маркет на
        территории Узбекистана. Это значит, что деятельность ведётся легально, в правовом поле страны, а не через
        анонимные и непроверенные каналы. Именно поэтому тысячи пользователей выбирают его для покупки звёзд и
        Premium-подписки. Подробнее:{" "}
        <Link href="/blog/starspaymee-ishonchli-xavfsizmi">надёжен ли StarsPaymee</Link>.
      </p>

      <p>
        Читайте также:{" "}
        <Link href="/blog/telegram-premium-imkoniyatlari">возможности Premium</Link>,{" "}
        <Link href="/blog/premium-va-oddiy-hisob-farqi">чем Premium отличается от обычного аккаунта</Link>,{" "}
        <Link href="/blog/telegram-sovga-va-nft-sovga-sotib-olish">обычные и NFT-подарки</Link>.
      </p>

      <Sources
        label="Источники"
        items={[
          { href: "https://telegram.org/faq_premium", label: "telegram.org", note: "официальный FAQ Telegram Premium" },
          { href: "https://telegram.org/blog/premium", label: "telegram.org/blog", note: "анонс Premium" },
          { href: "https://click.uz/", label: "click.uz", note: "платёжная система Click" },
          { href: "https://uzcard.uz/", label: "uzcard.uz", note: "национальная платёжная система UzCard" },
        ]}
      />
    </>
  );
}

/* ---------------- EN ---------------- */
function EnAnswer() {
  return (
    <p>
      Telegram Premium for <b>3, 6 or 12 months</b> can be bought in Uzbek so‘m without a Visa card: in{" "}
      <b>@StarsPaymee_bot</b> you choose the term, enter a username and pay with Click, HUMO, UzCard or Payme. The
      subscription usually activates on the account within seconds.
    </p>
  );
}

function EnBody() {
  return (
    <>
      <p>
        Telegram Premium unlocks the extended side of the messenger: larger upload limits, exclusive stickers and
        reactions, faster media loading, no ads in channels and many other features. Yet users in Uzbekistan who
        try to subscribe officially run into the same wall as with Stars — Telegram only accepts Visa or
        Mastercard.
      </p>

      <h2 id="nega-noqulay">Why the official subscription is inconvenient in Uzbekistan</h2>
      <KeyFacts label="The main obstacles">
        <li>Official payment is tied to international Visa/Mastercard cards.</li>
        <li>
          The local <b>HUMO</b> and <b>UzCard</b> cards that most people carry are not supported directly.
        </li>
        <li>
          The price is quoted in dollars or euros, and after conversion and bank fees the final so‘m amount is
          often higher than expected.
        </li>
        <li>Issuing a foreign card for a single subscription is slow, awkward and not always possible.</li>
      </KeyFacts>

      <h2 id="tariflar">Plans: 3, 6 and 12 months</h2>
      <PremiumPlanBoard locale="en" />
      <p>
        Pick the term that fits: if you need Premium for longer than a couple of months, the longer pack is always
        cheaper per month.
      </p>
      <InfoGrid>
        <InfoCard emoji="🌱" title="3 months">
          Ideal for trying every Premium feature without a long commitment.
        </InfoCard>
        <InfoCard emoji="⚖️" title="6 months">
          The balance of price and term for people who already used Premium and want to extend.
        </InfoCard>
        <InfoCard emoji="🏆" title="12 months">
          The best price per month if Premium is something you keep permanently.
        </InfoCard>
      </InfoGrid>

      <InlineCta
        text="Choose a term, pay in so‘m — Premium activates in seconds."
        product={{ kind: "premium", months: 6 }}
      />

      <h2 id="qadamlar">Step-by-step guide</h2>
      <Steps>
        <Step title="1. Open the bot">
          Start{" "}
          <a href="https://t.me/StarsPaymee_bot" target="_blank" rel="noopener noreferrer">
            @StarsPaymee_bot
          </a>{" "}
          in Telegram.
        </Step>
        <Step title="2. Pick the Telegram Premium section">Point to the account by username — yours or someone else’s.</Step>
        <Step title="3. Choose the term">3, 6 or 12 months, depending on what you need.</Step>
        <Step title="4. Choose a payment method">
          Click, a HUMO card, a UzCard card or Payme — all in Uzbek so‘m at the current rate.
        </Step>
        <Step title="5. Pay for the order">It takes no more than a couple of minutes.</Step>
        <Step title="6. Receive Premium">
          The subscription switches on automatically, usually almost immediately after payment.
        </Step>
      </Steps>
      <p>
        No foreign cards, no currency conversion and no hidden bank fees — only the local payment methods you
        already use. A password or SMS code is never requested: a username is enough.
      </p>

      <h2 id="taqqoslash">The official subscription versus buying in the bot</h2>
      <PremiumCompare locale="en" />
      <p>
        The bot’s price on all three plans comes out below subscribing inside Telegram itself — thanks to working
        directly with local payment systems and skipping the currency-conversion fees usually baked into the
        official price for users in Uzbekistan.
      </p>

      <h2 id="qulaylik">Why buying Premium here is convenient</h2>
      <KeyFacts label="The main reasons">
        <li>
          <b>No Visa/Mastercard needed</b> — payment is entirely local, in so‘m.
        </li>
        <li>
          <b>Several payment methods</b> — Click, HUMO, UzCard, Payme, so the service fits any user.
        </li>
        <li>
          <b>A price below the official one</b> — the same Telegram Premium for less.
        </li>
        <li>
          <b>Fast activation</b> — the subscription appears on the account almost right after payment, with no
          manual requests.
        </li>
        <li>
          <b>The same familiar interface</b> — if you already{" "}
          <Link href="/blog/click-payme-orqali-telegram-stars-sotib-olish">bought Stars in the bot</Link>, buying
          Premium works exactly the same way.
        </li>
      </KeyFacts>

      <h2 id="ishonch">Why users trust the service</h2>
      <p>
        Safety and reliability are the first questions when picking a service for digital goods. @StarsPaymee_bot
        has a solid argument here: it is officially registered as a market in Uzbekistan. The business runs
        legally, inside the country’s legal framework, rather than through anonymous, unverified channels. That is
        why thousands of people choose it for Stars and Premium. More on this:{" "}
        <Link href="/blog/starspaymee-ishonchli-xavfsizmi">is StarsPaymee trustworthy</Link>.
      </p>

      <p>
        Read next:{" "}
        <Link href="/blog/telegram-premium-imkoniyatlari">what Premium unlocks</Link>,{" "}
        <Link href="/blog/premium-va-oddiy-hisob-farqi">Premium versus a regular account</Link>,{" "}
        <Link href="/blog/telegram-sovga-va-nft-sovga-sotib-olish">regular and NFT gifts</Link>.
      </p>

      <Sources
        label="Sources"
        items={[
          { href: "https://telegram.org/faq_premium", label: "telegram.org", note: "official Telegram Premium FAQ" },
          { href: "https://telegram.org/blog/premium", label: "telegram.org/blog", note: "Premium announcement" },
          { href: "https://click.uz/", label: "click.uz", note: "Click payment system" },
          { href: "https://uzcard.uz/", label: "uzcard.uz", note: "UzCard national payment system" },
        ]}
      />
    </>
  );
}

const uzFaq = [
  {
    question: "Telegram Premium’ni Visa kartasiz sotib olsa bo‘ladimi?",
    answer:
      "Ha. @StarsPaymee_bot orqali obuna to‘liq so‘mda — Click, HUMO, UzCard yoki Payme bilan rasmiylashtiriladi.",
  },
  {
    question: "Narx haqiqatan rasmiy ilovadagidan pastmi?",
    answer:
      "Ha. Valyuta konvertatsiyasi komissiyalari yo‘qligi va mahalliy to‘lov tizimlari bilan to‘g‘ridan-to‘g‘ri ishlash hisobiga 3, 6 va 12 oylik narx rasmiysidan past.",
  },
  {
    question: "Obuna to‘lovdan keyin qancha vaqtda faollashadi?",
    answer: "Odatda Premium to‘lov tasdiqlangach deyarli darhol hisobda paydo bo‘ladi.",
  },
  {
    question: "Akkauntga kirish talab qilinadimi?",
    answer: "Yo‘q. Username yetarli — parol yoki SMS-kod so‘ralmaydi.",
  },
  { question: "Qaysi muddatlar mavjud?", answer: "3, 6 va 12 oy." },
  {
    question: "Boshqa odamga Premium sovg‘a qilsam bo‘ladimi?",
    answer: "Ha, buyurtma paytida qabul qiluvchining username’ini ko‘rsatasiz.",
  },
  {
    question: "Bu xizmat orqali to‘lash xavfsizmi?",
    answer:
      "Ha. Xizmat O‘zbekistonda rasmiy ravishda market sifatida ro‘yxatdan o‘tgan va to‘lovni tanish mahalliy tizimlar orqali qabul qiladi.",
  },
  { question: "Avtoto‘lov ulanadimi?", answer: "Yo‘q, obuna tanlangan muddatga bir marta rasmiylashtiriladi." },
];

const ruFaq = [
  {
    question: "Можно ли купить Telegram Premium без визы?",
    answer:
      "Да, через @StarsPaymee_bot подписка оформляется полностью в сумах, через Click, Humo, Uzcard или Payme — карта Visa или Mastercard не требуется.",
  },
  {
    question: "Действительно ли цена ниже, чем в официальном приложении Telegram?",
    answer:
      "Да, за счёт отсутствия комиссий за конвертацию валюты и прямой работы с локальными платёжными системами итоговая цена на 3, 6 и 12 месяцев ниже.",
  },
  {
    question: "Как быстро активируется подписка после оплаты?",
    answer: "Обычно Premium появляется на аккаунте практически сразу после подтверждения платежа.",
  },
  { question: "Нужен ли вход в аккаунт?", answer: "Нет. Достаточно username — пароль и SMS-код не запрашиваются." },
  { question: "Какие сроки доступны?", answer: "3, 6 и 12 месяцев." },
  {
    question: "Можно ли подарить Premium другому человеку?",
    answer: "Да, при оформлении заказа вы указываете username получателя.",
  },
  {
    question: "Безопасно ли платить через этот сервис?",
    answer:
      "Да, @StarsPaymee_bot официально зарегистрирован как маркет в Узбекистане и принимает оплату через привычные локальные платёжные сервисы.",
  },
  { question: "Подключается ли автоплатёж?", answer: "Нет, подписка оформляется разово на выбранный срок." },
];

const enFaq = [
  {
    question: "Can I buy Telegram Premium without a Visa card?",
    answer:
      "Yes. Through @StarsPaymee_bot the subscription is paid entirely in so‘m via Click, HUMO, UzCard or Payme.",
  },
  {
    question: "Is the price really lower than in the official Telegram app?",
    answer:
      "Yes. With no currency-conversion fees and direct work with local payment systems, the 3, 6 and 12-month prices come in below the official ones.",
  },
  {
    question: "How fast does the subscription activate?",
    answer: "Premium normally appears on the account almost immediately after the payment is confirmed.",
  },
  { question: "Is an account login required?", answer: "No. A username is enough — no password or SMS code." },
  { question: "Which terms are available?", answer: "3, 6 and 12 months." },
  {
    question: "Can I gift Premium to someone else?",
    answer: "Yes, you enter the recipient’s username when placing the order.",
  },
  {
    question: "Is paying through this service safe?",
    answer:
      "Yes. The service is officially registered as a market in Uzbekistan and accepts payment through familiar local payment providers.",
  },
  { question: "Is auto-renewal enabled?", answer: "No, the subscription is a one-off purchase for the chosen term." },
];

export const post: AeoPost = {
  slug: SLUG,
  category: "Premium",
  type: "howto",
  datePublished: "2026-08-27",
  dateModified: "2026-08-27",
  keywords: [
    "telegram premium 3 oy sotib olish",
    "telegram premium 6 oy",
    "telegram premium 12 oy narxi",
    "telegram premium so‘mda",
    "visa kartasiz telegram premium",
    "купить telegram premium в узбекистане",
    "telegram premium click payme",
  ],
  howToSteps: [
    { name: "Botni oching", text: "Telegramda @StarsPaymee_bot ni ishga tushiring." },
    { name: "Premium bo‘limini tanlang", text: "Obuna kimga rasmiylashtirilishini username orqali ko‘rsating." },
    { name: "Muddatni belgilang", text: "3, 6 yoki 12 oy — ehtiyojingizga qarab." },
    { name: "To‘lov usulini tanlang", text: "Click, HUMO, UzCard yoki Payme — hammasi so‘mda." },
    { name: "Buyurtmani to‘lang", text: "To‘lov bir necha daqiqadan ko‘p vaqt olmaydi." },
    { name: "Premium’ni qabul qiling", text: "Obuna hisobda avtomatik va deyarli darhol faollashadi." },
  ],
  locales: {
    uz: {
      title: "Telegram Premium 3, 6 va 12 oy: O‘zbekistonda so‘mda sotib olish",
      excerpt:
        "Visa kartasiz Telegram Premium: 3, 6 va 12 oylik tariflar, Click, HUMO, UzCard va Payme orqali so‘mda to‘lov hamda qadam-baqadam qo‘llanma.",
      metaTitle: "Telegram Premium 3, 6, 12 oy — so‘mda sotib olish",
      metaDescription:
        "O‘zbekistonda Telegram Premium 3, 6 va 12 oyga so‘mda sotib olish: Click, HUMO, UzCard, Payme, Visa kerak emas, bir necha soniyada faollashadi.",
      answerTitle: "Qisqa javob",
      Answer: UzAnswer,
      Body: UzBody,
      ctaHeading: "Premium’ni so‘mda rasmiylashtiring",
      ctaBody: "@StarsPaymee_bot — 3, 6 yoki 12 oy, mahalliy to‘lov va tezkor faollashuv.",
      faq: uzFaq,
    },
    ru: {
      title: "Купить Telegram Premium в Узбекистане: 3, 6 и 12 месяцев",
      excerpt:
        "Premium без визы: тарифы на 3, 6 и 12 месяцев, оплата в сумах через Click, Humo, Uzcard и Payme, пошаговая инструкция и сравнение с официальной подпиской.",
      metaTitle: "Купить Telegram Premium в Узбекистане за сумы",
      metaDescription:
        "Telegram Premium на 3, 6 и 12 месяцев за узбекский сум без карты Visa: оплата Click, Humo, Uzcard, Payme, активация почти сразу после оплаты.",
      answerTitle: "Краткий ответ",
      Answer: RuAnswer,
      Body: RuBody,
      ctaHeading: "Оформите Premium за сумы",
      ctaBody: "@StarsPaymee_bot — 3, 6 или 12 месяцев, местная оплата и быстрая активация.",
      faq: ruFaq,
    },
    en: {
      title: "Buying Telegram Premium in Uzbekistan: 3, 6 and 12 months",
      excerpt:
        "Premium without a Visa card: 3, 6 and 12-month plans, payment in so‘m via Click, HUMO, UzCard and Payme, plus a step-by-step guide.",
      metaTitle: "Buy Telegram Premium in Uzbekistan for so‘m",
      metaDescription:
        "Telegram Premium for 3, 6 and 12 months in Uzbek so‘m without a Visa card: Click, HUMO, UzCard and Payme, activated within seconds of payment.",
      answerTitle: "Short answer",
      Answer: EnAnswer,
      Body: EnBody,
      ctaHeading: "Get Premium in so‘m",
      ctaBody: "@StarsPaymee_bot — 3, 6 or 12 months, local payment and fast activation.",
      faq: enFaq,
    },
  },
};
