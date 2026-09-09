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

const SLUG = "taymer-bilan-sovga-yuborish";

/** Taymer qaysi mahsulotlarda ishlaydi. */
function ProductTable({ locale }: { locale: "uz" | "ru" | "en" }) {
  const copy = {
    uz: {
      headers: ["Mahsulot", "Taymer bilan nima bo‘ladi", "Nimaga e’tibor beriladi"],
      rows: [
        ["Telegram Premium", "Obuna belgilangan vaqtda faollashadi", "Muddat aynan yetkazilgan kundan boshlanadi"],
        ["Telegram Stars", "Yulduzlar belgilangan vaqtda tushadi", "Qabul qiluvchi username to‘g‘ri bo‘lsin"],
        ["Oddiy sovg‘a (Gift)", "Sovg‘a o‘sha daqiqada yuboriladi", "Katalogda mavjudligi tekshiriladi"],
        ["NFT sovg‘a", "Kolleksion sovg‘a rejaga muvofiq beriladi", "Kolleksion sovg‘alarda o‘tkazish qoidalari bor"],
      ],
    },
    ru: {
      headers: ["Продукт", "Что происходит по таймеру", "На что обратить внимание"],
      rows: [
        ["Telegram Premium", "Подписка активируется в заданное время", "Срок начинается со дня вручения"],
        ["Telegram Stars", "Звёзды приходят в заданное время", "Username получателя должен быть верным"],
        ["Обычный подарок (Gift)", "Подарок отправляется в ту же минуту", "Проверяется наличие в каталоге"],
        ["NFT-подарок", "Коллекционный подарок вручается по расписанию", "У коллекционных есть правила передачи"],
      ],
    },
    en: {
      headers: ["Product", "What the timer does", "What to watch"],
      rows: [
        ["Telegram Premium", "The subscription activates at the set time", "The term starts on the delivery day"],
        ["Telegram Stars", "The Stars arrive at the set time", "The recipient's username must be right"],
        ["A regular gift", "The gift is sent at that exact minute", "Availability in the catalogue is checked"],
        ["An NFT gift", "The collectible is delivered on schedule", "Collectibles carry transfer rules"],
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
      Taymerli sovg‘a — sovg‘ani <b>oldindan to‘lab qo‘yib</b>, yetkazish sanasi va vaqtini o‘zingiz
      belgilashingiz. Belgilangan daqiqada bot uni qabul qiluvchiga avtomatik yuboradi — siz o‘sha payt band
      bo‘lsangiz ham. Premium, Stars, oddiy va NFT sovg‘alar bilan ishlaydi.
    </p>
  );
}

function UzBody() {
  return (
    <>
      <Toc
        label="Mundarija"
        items={[
          { href: "#nima", label: "Taymerli sovg‘a nima" },
          { href: "#misol", label: "Hayotiy misol" },
          { href: "#mahsulot", label: "Qaysi mahsulotlarda ishlaydi" },
          { href: "#qadamlar", label: "Qanday rasmiylashtiriladi" },
          { href: "#nega", label: "Nega qulay" },
          { href: "#bilish", label: "Rejalashtirishdan oldin" },
        ]}
      />

      <p>
        Sovg‘aga oldindan tayyorlanish — yaxshi odat, lekin tabrikni aynan kerakli daqiqada yuborish ko‘pincha
        esdan chiqadi: goh band bo‘lasiz, goh vaqtni o‘tkazib yuborasiz. Taymer shu muammoni yechadi.
      </p>

      <h2 id="nima">Taymerli sovg‘a nima degani</h2>
      <p>
        Siz sovg‘ani oldindan to‘laysiz — Premium, Stars, oddiy gift yoki NFT sovg‘a — so‘ng yetkazish uchun{" "}
        <b>aniq sana va vaqtni</b> ko‘rsatasiz. Qolganini bot bajaradi: sovg‘a siz uchun band qilinadi va
        belgilangan daqiqada avtomatik yuboriladi.
      </p>
      <KeyFacts label="Asosiy jihatlar">
        <li>To‘lov hozir, yetkazish esa siz aytgan paytda.</li>
        <li>Aniqlik daqiqagacha — sana va soatni o‘zingiz belgilaysiz.</li>
        <li>Yuborilish uchun siz o‘sha payt onlayn bo‘lishingiz shart emas.</li>
        <li>Bir necha sovg‘ani turli sanalarga oldindan rejalashtirish mumkin.</li>
      </KeyFacts>

      <h2 id="misol">Hayotiy misol</h2>
      <p>
        Aytaylik, do‘stingizning tug‘ilgan kuni <b>12-sentabr, soat 00:00</b> da. Siz:
      </p>
      <Steps>
        <Step title="1. Oldindan to‘laysiz">Hatto bir hafta oldin — botda sovg‘ani rasmiylashtirasiz.</Step>
        <Step title="2. Nimani sovg‘a qilishni tanlaysiz">Premium, Stars, oddiy gift yoki NFT sovg‘a.</Step>
        <Step title="3. Taymerni qo‘yasiz">12-sentabr, 00:00.</Step>
        <Step title="4. Unutasiz">Va o‘z ishingiz bilan shug‘ullanaverasiz.</Step>
      </Steps>
      <p>
        Belgilangan vaqtda sovg‘a do‘stingizga o‘zi yuboriladi — siz o‘sha payt uxlab yotgan bo‘lsangiz ham.
        «Voy, vaqtida tabriklashni unutibman» degan holat yo‘qoladi.
      </p>

      <h2 id="mahsulot">Qaysi mahsulotlarga taymer qo‘yish mumkin</h2>
      <ProductTable locale="uz" />
      <p>
        Ya’ni taymer faqat Premium uchun emas — u barcha asosiy mahsulotlar bilan ishlaydi. Sovg‘a turini
        tanlashda{" "}
        <Link href="/blog/telegram-sovga-va-nft-sovga-sotib-olish">oddiy va NFT sovg‘alar farqi</Link> yordam
        beradi.
      </p>

      <InlineCta text="Sovg‘ani hozir to‘lang — kerakli daqiqada yetib boradi." />

      <h2 id="qadamlar">Qadam-baqadam: taymerli sovg‘ani rasmiylashtirish</h2>
      <Steps>
        <Step title="1. Botni oching">
          Telegramda{" "}
          <a href="https://t.me/StarsPaymee_bot" target="_blank" rel="noopener noreferrer">
            @StarsPaymee_bot
          </a>{" "}
          ni ishga tushiring.
        </Step>
        <Step title="2. Mahsulotni tanlang">Premium, Stars, oddiy gift yoki NFT sovg‘a.</Step>
        <Step title="3. Qabul qiluvchini ko‘rsating">
          Username’ni profildan nusxa oling — qo‘lda yozganda harf almashib ketadi.
        </Step>
        <Step title="4. Sana va vaqtni belgilang">Masalan, 12-sentabr, 00:00.</Step>
        <Step title="5. So‘mda to‘lang">UzCard, HUMO, Click, Payme, Uzum yoki Paynet.</Step>
        <Step title="6. Tasdiqni saqlang">
          Buyurtma raqami beriladi — rejalashtirilgan yetkazishni shu raqam bo‘yicha tekshirasiz.
        </Step>
      </Steps>

      <h2 id="nega">Nega bu qulay</h2>
      <InfoGrid>
        <InfoCard emoji="🧠" title="Unutmaysiz">
          Kun qanchalik band bo‘lmasin, sovg‘a o‘zi yuboriladi.
        </InfoCard>
        <InfoCard emoji="🎯" title="Daqiqagacha aniq">
          Sana va vaqtni siz belgilaysiz — yarim tundagi tabrik ham mumkin.
        </InfoCard>
        <InfoCard emoji="📆" title="Oldindan tayyorgarlik">
          Oxirgi kuni shoshib sovg‘a qidirish shart emas.
        </InfoCard>
        <InfoCard emoji="🎉" title="Har qanday sabab">
          Tug‘ilgan kun, yubiley, Yangi yil, 8-mart yoki shunchaki syurpriz.
        </InfoCard>
      </InfoGrid>

      <h2 id="bilish">Rejalashtirishdan oldin bilib qo‘yish kerak</h2>
      <KeyFacts label="To‘rt nuqta">
        <li>
          <b>Username’ni tekshiring.</b> Sovg‘a rejalashtirilgan vaqtda o‘sha username’ga ketadi. Odam
          username’ini o‘zgartirsa, buni oldindan aytib qo‘ygani ma’qul.
        </li>
        <li>
          <b>Vaqt mintaqasiga e’tibor bering.</b> «00:00» qaysi vaqt bo‘yicha ekanini botda tasdiqlang —
          ayniqsa qabul qiluvchi boshqa mamlakatda bo‘lsa.
        </li>
        <li>
          <b>Katalog o‘zgarishi mumkin.</b> Oddiy va NFT sovg‘alarda tiraj tugashi mumkin; uzoq muddatga
          rejalashtirsangiz, shuni hisobga oling.
        </li>
        <li>
          <b>Premium muddati yetkazilgandan boshlanadi.</b> Ya’ni 3 oylik obuna to‘lagan kuningizdan emas,
          sovg‘a yetgan kundan hisoblanadi — bu sizning foydangizga.
        </li>
      </KeyFacts>

      <p>
        Qarang: <Link href="/blog/telegram-premium-sovga-username-orqali">Premium’ni username orqali sovg‘a qilish</Link>,{" "}
        <Link href="/blog/telegram-gifts-qanday-yuboriladi-qollanma">sovg‘a yuborish qo‘llanmasi</Link>,{" "}
        <Link href="/blog/premium-bor-odamga-premium-sovga">qabul qiluvchida Premium bo‘lsa</Link>.
      </p>

      <Sources
        label="Manbalar"
        items={[
          { href: "https://telegram.org/faq_premium", label: "telegram.org/faq_premium", note: "Premium va sovg‘a haqida" },
          { href: "https://core.telegram.org/api/gifts", label: "core.telegram.org/api/gifts", note: "sovg‘alar qoidalari" },
        ]}
      />
    </>
  );
}

/* ---------------- RU ---------------- */
function RuAnswer() {
  return (
    <p>
      Подарок по таймеру — это возможность <b>оплатить подарок заранее</b> и самому задать дату и время
      вручения. В назначенную минуту бот отправит его получателю автоматически — даже если вы в этот момент
      заняты. Работает с Premium, Stars, обычными и NFT-подарками.
    </p>
  );
}

function RuBody() {
  return (
    <>
      <Toc
        label="Содержание"
        items={[
          { href: "#nima", label: "Что такое подарок по таймеру" },
          { href: "#misol", label: "Пример из жизни" },
          { href: "#mahsulot", label: "С какими продуктами работает" },
          { href: "#qadamlar", label: "Как оформить" },
          { href: "#nega", label: "Почему это удобно" },
          { href: "#bilish", label: "Что учесть заранее" },
        ]}
      />

      <p>
        Готовиться к подаркам заранее — правильная привычка, но отправить поздравление именно в нужный момент
        часто забывается: то заняты, то просто упустили время. Таймер решает эту проблему.
      </p>

      <h2 id="nima">Что такое подарок по таймеру</h2>
      <p>
        Вы оплачиваете подарок заранее — Premium, Stars, обычный гифт или NFT-подарок — а затем указываете{" "}
        <b>точную дату и время</b> вручения. Остальное делает бот: подарок бронируется за вами и автоматически
        отправляется в назначенный момент.
      </p>
      <KeyFacts label="Ключевые моменты">
        <li>Оплата сейчас, вручение — в указанное вами время.</li>
        <li>Точность до минуты — дату и час выбираете вы.</li>
        <li>Быть онлайн в этот момент не требуется.</li>
        <li>Несколько подарков можно запланировать на разные даты заранее.</li>
      </KeyFacts>

      <h2 id="misol">Пример из жизни</h2>
      <p>
        Допустим, у вашего друга день рождения <b>12 сентября в 00:00</b>. Вы:
      </p>
      <Steps>
        <Step title="1. Оплачиваете заранее">Хоть за неделю — оформляете подарок в боте.</Step>
        <Step title="2. Выбираете, что подарить">Premium, звёзды, обычный гифт или NFT-подарок.</Step>
        <Step title="3. Ставите таймер">12 сентября, 00:00.</Step>
        <Step title="4. Забываете об этом">И спокойно занимаетесь своими делами.</Step>
      </Steps>
      <p>
        Ровно в назначенное время подарок отправится вашему другу сам — даже если вы в этот момент спите.
        Ситуация «ой, забыл поздравить вовремя» исчезает.
      </p>

      <h2 id="mahsulot">На какие продукты можно поставить таймер</h2>
      <ProductTable locale="ru" />
      <p>
        То есть таймер работает не только с Premium — он доступен для всех основных продуктов. Выбрать вид
        подарка поможет статья{" "}
        <Link href="/blog/telegram-sovga-va-nft-sovga-sotib-olish">об обычных и NFT-подарках</Link>.
      </p>

      <InlineCta text="Оплатите подарок сейчас — придёт точно в нужную минуту." />

      <h2 id="qadamlar">Пошагово: как оформить подарок с таймером</h2>
      <Steps>
        <Step title="1. Откройте бота">
          Запустите{" "}
          <a href="https://t.me/StarsPaymee_bot" target="_blank" rel="noopener noreferrer">
            @StarsPaymee_bot
          </a>{" "}
          в Telegram.
        </Step>
        <Step title="2. Выберите продукт">Premium, звёзды, обычный гифт или NFT-подарок.</Step>
        <Step title="3. Укажите получателя">
          Скопируйте username из профиля — при ручном наборе легко перепутать буквы.
        </Step>
        <Step title="4. Задайте дату и время">Например, 12 сентября, 00:00.</Step>
        <Step title="5. Оплатите в сумах">UzCard, Humo, Click, Payme, Uzum или Paynet.</Step>
        <Step title="6. Сохраните подтверждение">
          Выдаётся номер заказа — по нему проверяется запланированное вручение.
        </Step>
      </Steps>

      <h2 id="nega">Почему это удобно</h2>
      <InfoGrid>
        <InfoCard emoji="🧠" title="Ничего не забудете">
          Каким бы насыщенным ни был день, подарок отправится сам.
        </InfoCard>
        <InfoCard emoji="🎯" title="Точность до минуты">
          Дату и время задаёте вы — можно и ровно в полночь.
        </InfoCard>
        <InfoCard emoji="📆" title="Подготовка заранее">
          Не нужно искать подарок в последний день.
        </InfoCard>
        <InfoCard emoji="🎉" title="Любой повод">
          День рождения, годовщина, Новый год, 8 марта или сюрприз без повода.
        </InfoCard>
      </InfoGrid>

      <h2 id="bilish">Что учесть до планирования</h2>
      <KeyFacts label="Четыре момента">
        <li>
          <b>Проверьте username.</b> Подарок уйдёт на него в запланированное время. Если человек сменит
          username, об этом лучше знать заранее.
        </li>
        <li>
          <b>Обратите внимание на часовой пояс.</b> Уточните в боте, по какому времени указано «00:00», —
          особенно если получатель в другой стране.
        </li>
        <li>
          <b>Каталог может измениться.</b> У обычных и NFT-подарков тираж может закончиться; при планировании
          надолго это стоит учитывать.
        </li>
        <li>
          <b>Срок Premium идёт со дня вручения.</b> То есть три месяца считаются не с даты оплаты, а с момента
          доставки — и это в вашу пользу.
        </li>
      </KeyFacts>

      <p>
        Смотрите: <Link href="/blog/telegram-premium-sovga-username-orqali">подарок Premium по username</Link>,{" "}
        <Link href="/blog/telegram-gifts-qanday-yuboriladi-qollanma">руководство по отправке подарков</Link>,{" "}
        <Link href="/blog/premium-bor-odamga-premium-sovga">если у получателя уже есть Premium</Link>.
      </p>

      <Sources
        label="Источники"
        items={[
          { href: "https://telegram.org/faq_premium", label: "telegram.org/faq_premium", note: "о Premium и подарках" },
          { href: "https://core.telegram.org/api/gifts", label: "core.telegram.org/api/gifts", note: "правила подарков" },
        ]}
      />
    </>
  );
}

/* ---------------- EN ---------------- */
function EnAnswer() {
  return (
    <p>
      A scheduled gift lets you <b>pay for it now</b> and set the exact date and time it should be handed over.
      At that minute the bot sends it to the recipient automatically — even if you are busy or asleep. It works
      with Premium, Stars, regular gifts and NFT gifts.
    </p>
  );
}

function EnBody() {
  return (
    <>
      <Toc
        label="Contents"
        items={[
          { href: "#nima", label: "What a scheduled gift is" },
          { href: "#misol", label: "A real-life example" },
          { href: "#mahsulot", label: "Which products it covers" },
          { href: "#qadamlar", label: "How to set one up" },
          { href: "#nega", label: "Why it helps" },
          { href: "#bilish", label: "What to settle first" },
        ]}
      />

      <p>
        Preparing gifts ahead of time is a good habit, but sending the greeting at exactly the right moment is
        what usually slips — you are busy, or the hour simply passes. A timer solves that.
      </p>

      <h2 id="nima">What a scheduled gift means</h2>
      <p>
        You pay for the gift in advance — Premium, Stars, a regular gift or an NFT gift — and then set the{" "}
        <b>exact date and time</b> for delivery. The bot handles the rest: the gift is reserved for you and sent
        automatically at the appointed moment.
      </p>
      <KeyFacts label="The essentials">
        <li>Payment now, delivery whenever you say.</li>
        <li>Accurate to the minute — you pick the date and hour.</li>
        <li>You do not need to be online when it fires.</li>
        <li>Several gifts can be scheduled for different dates ahead of time.</li>
      </KeyFacts>

      <h2 id="misol">A real-life example</h2>
      <p>
        Say a friend’s birthday is <b>12 September at 00:00</b>. You:
      </p>
      <Steps>
        <Step title="1. Pay in advance">Even a week ahead — place the order in the bot.</Step>
        <Step title="2. Choose what to give">Premium, Stars, a regular gift or an NFT gift.</Step>
        <Step title="3. Set the timer">12 September, 00:00.</Step>
        <Step title="4. Forget about it">And get on with your day.</Step>
      </Steps>
      <p>
        At exactly that time the gift goes out on its own — even if you happen to be asleep. The “oh no, I forgot
        to say happy birthday” moment disappears.
      </p>

      <h2 id="mahsulot">Which products the timer covers</h2>
      <ProductTable locale="en" />
      <p>
        So the timer is not only for Premium — it is available across the main products. To pick a gift type, see{" "}
        <Link href="/blog/telegram-sovga-va-nft-sovga-sotib-olish">regular versus NFT gifts</Link>.
      </p>

      <InlineCta text="Pay for the gift now — it arrives at exactly the right minute." />

      <h2 id="qadamlar">Step by step: setting up a scheduled gift</h2>
      <Steps>
        <Step title="1. Open the bot">
          Start{" "}
          <a href="https://t.me/StarsPaymee_bot" target="_blank" rel="noopener noreferrer">
            @StarsPaymee_bot
          </a>{" "}
          in Telegram.
        </Step>
        <Step title="2. Choose the product">Premium, Stars, a regular gift or an NFT gift.</Step>
        <Step title="3. Name the recipient">
          Copy the username from their profile — typing it by hand is how letters get swapped.
        </Step>
        <Step title="4. Set the date and time">For example, 12 September at 00:00.</Step>
        <Step title="5. Pay in so‘m">UzCard, HUMO, Click, Payme, Uzum or Paynet.</Step>
        <Step title="6. Keep the confirmation">
          An order number is issued — use it to check the scheduled delivery.
        </Step>
      </Steps>

      <h2 id="nega">Why it helps</h2>
      <InfoGrid>
        <InfoCard emoji="🧠" title="Nothing gets forgotten">
          However full the day, the gift sends itself.
        </InfoCard>
        <InfoCard emoji="🎯" title="Accurate to the minute">
          You set the date and hour — midnight included.
        </InfoCard>
        <InfoCard emoji="📆" title="Prepare ahead">
          No scrambling for a gift on the last day.
        </InfoCard>
        <InfoCard emoji="🎉" title="Any occasion">
          A birthday, an anniversary, New Year, 8 March or a surprise for no reason.
        </InfoCard>
      </InfoGrid>

      <h2 id="bilish">What to settle before scheduling</h2>
      <KeyFacts label="Four points">
        <li>
          <b>Check the username.</b> The gift goes to that username at the scheduled time. If the person changes
          it, it is better to know in advance.
        </li>
        <li>
          <b>Mind the time zone.</b> Confirm in the bot which time “00:00” refers to — especially if the
          recipient is in another country.
        </li>
        <li>
          <b>The catalogue can change.</b> Regular and NFT gifts can sell out; worth bearing in mind when
          scheduling far ahead.
        </li>
        <li>
          <b>Premium’s term starts on delivery.</b> Three months are counted from the moment it arrives, not from
          the day you paid — which works in your favour.
        </li>
      </KeyFacts>

      <p>
        See also: <Link href="/blog/telegram-premium-sovga-username-orqali">gifting Premium by username</Link>,{" "}
        <Link href="/blog/telegram-gifts-qanday-yuboriladi-qollanma">the gift-sending guide</Link>,{" "}
        <Link href="/blog/premium-bor-odamga-premium-sovga">when the recipient already has Premium</Link>.
      </p>

      <Sources
        label="Sources"
        items={[
          { href: "https://telegram.org/faq_premium", label: "telegram.org/faq_premium", note: "on Premium and gifting" },
          { href: "https://core.telegram.org/api/gifts", label: "core.telegram.org/api/gifts", note: "gift rules" },
        ]}
      />
    </>
  );
}

const uzFaq = [
  {
    question: "Taymerli sovg‘a nima?",
    answer:
      "Sovg‘ani oldindan to‘lab qo‘yib, yetkazish sanasi va vaqtini belgilash. Belgilangan daqiqada bot uni avtomatik yuboradi.",
  },
  {
    question: "Qaysi mahsulotlarga taymer qo‘yish mumkin?",
    answer: "Telegram Premium, Stars, oddiy sovg‘alar va NFT sovg‘alarga.",
  },
  {
    question: "Yuborilish uchun onlayn bo‘lishim kerakmi?",
    answer: "Yo‘q. Sovg‘a belgilangan vaqtda o‘zi yuboriladi, siz uxlab yotgan bo‘lsangiz ham.",
  },
  {
    question: "Premium muddati qachondan boshlanadi?",
    answer: "Yetkazilgan kundan. Ya’ni to‘lagan kuningizdan emas, sovg‘a qabul qiluvchiga yetgan paytdan hisoblanadi.",
  },
  {
    question: "Vaqt qaysi mintaqa bo‘yicha hisoblanadi?",
    answer: "Buni buyurtma paytida botda tasdiqlang — ayniqsa qabul qiluvchi boshqa mamlakatda bo‘lsa muhim.",
  },
  {
    question: "Rejalashtirilgan sovg‘ani bekor qilsam yoki o‘zgartirsam bo‘ladimi?",
    answer: "Buyurtma raqami bilan @StarsPaymeeSupport ga yozing — imkoniyat mahsulot va qolgan vaqtga bog‘liq.",
  },
  {
    question: "Qabul qiluvchi username’ini o‘zgartirsa nima bo‘ladi?",
    answer:
      "Sovg‘a siz ko‘rsatgan username’ga rejalashtiriladi, shuning uchun o‘zgarish bo‘lsa oldindan supportga xabar bering.",
  },
  {
    question: "Bir vaqtning o‘zida bir necha sovg‘a rejalashtirsam bo‘ladimi?",
    answer: "Ha, har biri alohida buyurtma sifatida turli sana va vaqtga qo‘yiladi.",
  },
];

const ruFaq = [
  {
    question: "Что такое подарок по таймеру?",
    answer:
      "Это оплата подарка заранее с указанием даты и времени вручения. В назначенную минуту бот отправляет его автоматически.",
  },
  {
    question: "На какие продукты можно поставить таймер?",
    answer: "На Telegram Premium, звёзды, обычные подарки и NFT-подарки.",
  },
  {
    question: "Нужно ли быть онлайн в момент отправки?",
    answer: "Нет. Подарок отправится сам в заданное время, даже если вы спите.",
  },
  {
    question: "С какого момента идёт срок Premium?",
    answer: "Со дня вручения. То есть отсчёт начинается не с даты оплаты, а с момента получения подарка.",
  },
  {
    question: "По какому часовому поясу считается время?",
    answer: "Уточните это в боте при оформлении — особенно если получатель в другой стране.",
  },
  {
    question: "Можно ли отменить или изменить запланированный подарок?",
    answer: "Напишите в @StarsPaymeeSupport с номером заказа — возможность зависит от продукта и оставшегося времени.",
  },
  {
    question: "Что если получатель сменит username?",
    answer:
      "Подарок планируется на указанный вами username, поэтому при изменении лучше заранее сообщить в поддержку.",
  },
  {
    question: "Можно ли запланировать несколько подарков сразу?",
    answer: "Да, каждый оформляется отдельным заказом на свою дату и время.",
  },
];

const enFaq = [
  {
    question: "What is a scheduled gift?",
    answer:
      "Paying for a gift in advance and setting the delivery date and time. At that minute the bot sends it automatically.",
  },
  { question: "Which products support the timer?", answer: "Telegram Premium, Stars, regular gifts and NFT gifts." },
  {
    question: "Do I need to be online when it sends?",
    answer: "No. The gift goes out by itself at the set time, even if you are asleep.",
  },
  {
    question: "When does the Premium term start?",
    answer: "On the delivery day. The count begins when the gift arrives, not when you paid.",
  },
  {
    question: "Which time zone is used?",
    answer: "Confirm this in the bot when ordering — it matters especially if the recipient is abroad.",
  },
  {
    question: "Can a scheduled gift be cancelled or changed?",
    answer: "Message @StarsPaymeeSupport with the order number — what is possible depends on the product and time left.",
  },
  {
    question: "What if the recipient changes their username?",
    answer: "The gift is scheduled to the username you gave, so tell support in advance if it changes.",
  },
  {
    question: "Can I schedule several gifts at once?",
    answer: "Yes, each is placed as its own order with its own date and time.",
  },
];

export const post: AeoPost = {
  slug: SLUG,
  category: "Gifts",
  type: "howto",
  datePublished: "2026-09-08",
  dateModified: "2026-09-08",
  keywords: [
    "taymer bilan sovga yuborish",
    "telegram sovgani rejalashtirish",
    "premium sovgani vaqtida yuborish",
    "tugilgan kunga sovga rejalashtirish",
    "подарок по таймеру телеграм",
    "запланировать подарок telegram",
  ],
  howToSteps: [
    { name: "Botni oching", text: "Telegramda @StarsPaymee_bot ni ishga tushiring." },
    { name: "Mahsulotni tanlang", text: "Premium, Stars, oddiy gift yoki NFT sovg‘a." },
    { name: "Qabul qiluvchini ko‘rsating", text: "Username’ni profildan nusxa olib kiriting." },
    { name: "Sana va vaqtni belgilang", text: "Masalan, 12-sentabr, 00:00." },
    { name: "So‘mda to‘lang", text: "UzCard, HUMO, Click, Payme, Uzum yoki Paynet." },
    { name: "Tasdiqni saqlang", text: "Buyurtma raqami bo‘yicha rejalashtirilgan yetkazishni tekshirasiz." },
  ],
  locales: {
    uz: {
      title: "Taymer bilan sovg‘a: hozir to‘lang, aynan vaqtida yetkazamiz",
      excerpt:
        "Sovg‘ani oldindan to‘lab, yetkazish sanasi va vaqtini belgilash. Premium, Stars, oddiy va NFT sovg‘alar bilan ishlaydi — qadamlar va e’tibor beriladigan nuqtalar.",
      metaTitle: "Taymer bilan sovg‘a yuborish — aynan vaqtida",
      metaDescription:
        "Telegramda taymerli sovg‘a: oldindan to‘lab, sana va vaqtni belgilaysiz. Premium, Stars, oddiy va NFT sovg‘alar; qadamlar, vaqt mintaqasi va muddat.",
      answerTitle: "Qisqa javob",
      Answer: UzAnswer,
      Body: UzBody,
      ctaHeading: "Sovg‘ani rejalashtiring",
      ctaBody: "@StarsPaymee_bot — hozir to‘lang, sovg‘a belgilangan daqiqada yetib boradi.",
      faq: uzFaq,
    },
    ru: {
      title: "Подарок по таймеру: оплатите сейчас — вручим точно в срок",
      excerpt:
        "Оплата заранее с указанием даты и времени вручения. Работает с Premium, звёздами, обычными и NFT-подарками — шаги и важные моменты.",
      metaTitle: "Подарок по таймеру в Telegram — точно в срок",
      metaDescription:
        "Подарок по таймеру в Telegram: оплачиваете заранее, указываете дату и время. Premium, звёзды, обычные и NFT-подарки; шаги, часовой пояс и срок.",
      answerTitle: "Краткий ответ",
      Answer: RuAnswer,
      Body: RuBody,
      ctaHeading: "Запланируйте подарок",
      ctaBody: "@StarsPaymee_bot — оплатите сейчас, подарок придёт в назначенную минуту.",
      faq: ruFaq,
    },
    en: {
      title: "Scheduled gifts: pay now, delivered exactly on time",
      excerpt:
        "Pay in advance and set the delivery date and time. Works with Premium, Stars, regular and NFT gifts — the steps and the points worth checking.",
      metaTitle: "Scheduled gifts in Telegram — delivered on time",
      metaDescription:
        "Scheduled gifts in Telegram: pay in advance and set the date and time. Premium, Stars, regular and NFT gifts; steps, time zone and term.",
      answerTitle: "Short answer",
      Answer: EnAnswer,
      Body: EnBody,
      ctaHeading: "Schedule a gift",
      ctaBody: "@StarsPaymee_bot — pay now and the gift lands at the appointed minute.",
      faq: enFaq,
    },
  },
};
