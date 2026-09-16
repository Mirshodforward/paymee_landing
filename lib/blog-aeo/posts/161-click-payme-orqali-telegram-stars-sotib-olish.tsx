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
import { StarsPriceBoard } from "@/components/blog/stars-price-board";
import type { AeoPost } from "@/lib/blog-aeo/types";

const SLUG = "click-payme-orqali-telegram-stars-sotib-olish";

/** Rasmiy yo‘l va bot — bir xil ustunlar, uchala tilda. */
function WayCompare({ locale }: { locale: "uz" | "ru" | "en" }) {
  const copy = {
    uz: {
      headers: ["Mezon", "Rasmiy yo‘l (Telegram ichida)", "@StarsPaymee_bot"],
      rows: [
        ["Karta talabi", "Visa yoki Mastercard", "UzCard, HUMO — mahalliy karta"],
        ["Valyuta", "Dollar/evro, keyin konvertatsiya", "To‘g‘ridan-to‘g‘ri so‘m"],
        ["To‘lov xizmatlari", "Apple Pay, Google Pay", "Click, Payme, Paynet"],
        ["Konvertatsiya komissiyasi", "no", "yes"],
        ["Chet el kartasini rasmiylashtirish", "no", "yes"],
        ["Yetkazish vaqti", "Bir zumda", "Odatda bir necha daqiqa"],
      ],
    },
    ru: {
      headers: ["Критерий", "Официальный путь (внутри Telegram)", "@StarsPaymee_bot"],
      rows: [
        ["Требуемая карта", "Visa или Mastercard", "UzCard, HUMO — местная карта"],
        ["Валюта", "Доллар/евро, затем конвертация", "Напрямую сум"],
        ["Платёжные сервисы", "Apple Pay, Google Pay", "Click, Payme, Paynet"],
        ["Комиссия за конвертацию", "no", "yes"],
        ["Нужно оформлять зарубежную карту", "no", "yes"],
        ["Время зачисления", "Мгновенно", "Обычно несколько минут"],
      ],
    },
    en: {
      headers: ["Criterion", "Official route (inside Telegram)", "@StarsPaymee_bot"],
      rows: [
        ["Card required", "Visa or Mastercard", "UzCard, HUMO — a local card"],
        ["Currency", "USD/EUR, then conversion", "Directly in so‘m"],
        ["Payment services", "Apple Pay, Google Pay", "Click, Payme, Paynet"],
        ["Conversion fee", "no", "yes"],
        ["Foreign card needed", "no", "yes"],
        ["Delivery time", "Instant", "Usually a few minutes"],
      ],
    },
  }[locale];

  const marks = {
    uz: { yes: "Yo‘q, kerak emas", no: "Bor" },
    ru: { yes: "Нет, не нужно", no: "Есть" },
    en: { yes: "No, not needed", no: "Yes, there is" },
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
      Telegram Stars’ni <b>o‘zbek so‘mida</b> sotib olish uchun Visa yoki Mastercard shart emas.{" "}
      <b>@StarsPaymee_bot</b> to‘lovni <b>Click</b>, <b>HUMO</b>, <b>UzCard</b> va <b>Payme</b> orqali so‘mda
      qabul qiladi: miqdorni tanlaysiz, username kiritasiz, to‘laysiz — yulduzlar hisobingizga odatda bir necha
      daqiqada tushadi.
    </p>
  );
}

function UzBody() {
  return (
    <>
      <p>
        Telegram Stars — messenjerning ichki valyutasi. U bilan Premium obunasi, stikerlar, sovg‘alar, kanal va
        botlardagi yopiq kontent uchun to‘lanadi hamda mualliflar qo‘llab-quvvatlanadi. Talab o‘sib bormoqda va
        O‘zbekistondagi foydalanuvchilar tobora ko‘proq <b>xalqaro kartani bog‘lamasdan</b> yulduz sotib olish
        yo‘lini qidirmoqda.
      </p>

      <h2 id="nega-qiyin">Nega O‘zbekistonda to‘g‘ridan-to‘g‘ri sotib olish har doim ham oson emas</h2>
      <p>
        Rasmiy tarzda Telegram Stars uchun to‘lovni Apple Pay, Google Pay va xalqaro Visa yoki Mastercard
        kartalari orqali qabul qiladi. O‘zbekistonda esa ko‘pchilik <b>HUMO</b> va <b>UzCard</b> kartalaridan
        foydalanadi — Telegram ularni to‘g‘ridan-to‘g‘ri qabul qilmaydi.
      </p>
      <p>
        Natijada tanish vaziyat yuzaga keladi: yulduzlar hozir kerak, xalqaro karta esa yo‘q. Bitta xarid uchun
        chet el kartasini rasmiylashtirish uzoq davom etadi va har doim ham o‘zini oqlamaydi.
      </p>

      <h2 id="yechim">Visa kartasiz yechim: so‘mda to‘lash</h2>
      <p>
        Agar Visa yoki Mastercard bo‘lmasa, yulduzlarni mahalliy valyutani qabul qiladigan vositachi xizmatlar
        orqali olish mumkin. Shunday variantlardan biri —{" "}
        <a href="https://t.me/StarsPaymee_bot" target="_blank" rel="noopener noreferrer">
          @StarsPaymee_bot
        </a>
        . Unda to‘lovning bir nechta qulay usuli bir joyda:
      </p>
      <InfoGrid>
        <InfoCard emoji="🟢" title="Click">
          Odatiy ilova orqali bir bosishda to‘lov.
        </InfoCard>
        <InfoCard emoji="💳" title="HUMO kartasi">
          Mamlakatdagi eng ommaviy to‘lov tizimlaridan biri.
        </InfoCard>
        <InfoCard emoji="💳" title="UzCard kartasi">
          Yana bir keng qo‘llaniladigan mahalliy karta.
        </InfoCard>
        <InfoCard emoji="🔵" title="Payme">
          Tezkor onlayn to‘lovlar uchun mashhur xizmat.
        </InfoCard>
        <InfoCard emoji="🟣" title="Uzum">
          Uzum ilovasi orqali to‘lov — hisobga bog‘langan karta bilan bir bosishda.
        </InfoCard>
      </InfoGrid>
      <p>
        Bu to‘plam deyarli barcha holatlarni yopadi: qaysi kartadan yoki xizmatdan foydalanishingizdan qat’i
        nazar, mos variant topiladi. Naqd pul bilan to‘lamoqchi bo‘lganlar uchun <b>Paynet</b> ham mavjud.
      </p>

      <h2 id="narx">Narxlar</h2>
      <StarsPriceBoard locale="uz" />

      <InlineCta
        text="Yulduzlarni so‘mda oling — Click, HUMO, UzCard, Payme yoki Uzum bilan."
        product={{ kind: "stars", amount: 100 }}
      />

      <h2 id="qadamlar">Qadam-baqadam: bu qanday ishlaydi</h2>
      <Steps>
        <Step title="1. Botni oching">
          Telegramda{" "}
          <a href="https://t.me/StarsPaymee_bot" target="_blank" rel="noopener noreferrer">
            @StarsPaymee_bot
          </a>{" "}
          ni ishga tushiring yoki Mini App’ni oching.
        </Step>
        <Step title="2. Yulduzlar sonini tanlang">Kerakli miqdorni belgilang — narx darhol so‘mda ko‘rinadi.</Step>
        <Step title="3. Username kiriting">Yulduzlar tushadigan hisobni ko‘rsating — o‘zingiz yoki boshqa odam.</Step>
        <Step title="4. To‘lov usulini tanlang">Click, HUMO, UzCard, Payme yoki Uzum.</Step>
        <Step title="5. So‘mda to‘lang">Joriy kurs bo‘yicha, konvertatsiyasiz va yashirin komissiyalarsiz.</Step>
        <Step title="6. Yulduzlarni qabul qiling">Odatda bu deyarli bir zumda sodir bo‘ladi.</Step>
      </Steps>

      <h2 id="tolov-status">Click orqali to‘lash: qadamlar, status, chek va yetkazish</h2>
      <p>
        Click va Payme — to‘lov <b>agregatorlari</b>. Ular pulni kartadan yechadi va natijani xizmatga qaytaradi.
        Shuning uchun jarayonda ikkita alohida bosqich bor va ularni chalkashtirmaslik muhim.
      </p>
      <InfoGrid>
        <InfoCard emoji="🟢" title="Click orqali">
          Bot Click sahifasini ochadi. Kartani tanlaysiz yoki raqamini kiritasiz, bank SMS kodini tasdiqlaysiz —
          keyin avtomatik botga qaytasiz.
        </InfoCard>
        <InfoCard emoji="🔵" title="Payme orqali">
          Payme ham shunday ishlaydi, faqat unda summa ilovada tayyor turadi. Batafsil:{" "}
          <Link href="/blog/payme-orqali-stars-va-premium-sotib-olish">Payme orqali Stars va Premium</Link>.
        </InfoCard>
      </InfoGrid>
      <KeyFacts label="To‘lov statusini qanday o‘qish kerak">
        <li>
          <b>«To‘lov muvaffaqiyatli»</b> — bu agregator xabari: pul kartadan yechildi. Bu hali yulduzlar
          yetkazildi degani <b>emas</b>.
        </li>
        <li>
          <b>«Buyurtma bajarilmoqda»</b> — xizmat to‘lovni qabul qilib, yetkazishni boshladi. Odatda bu bosqich
          bir necha soniya davom etadi.
        </li>
        <li>
          <b>«Bajarildi»</b> — yulduzlar hisobga tushdi. Aynan shu status yakuniy tasdiq hisoblanadi.
        </li>
        <li>
          <b>Pul yechildi, lekin status o‘zgarmadi</b> — botni yopib qayta oching. Keyin ham o‘zgarmasa, buyurtma
          raqami bilan supportga yozing; to‘lov agregatorda qayd etilgani uchun uni tekshirish mumkin.
        </li>
      </KeyFacts>
      <p>
        <b>Chekni saqlang.</b> To‘lovdan keyin ikkita raqam paydo bo‘ladi: agregatorning tranzaksiya raqami
        (Click yoki Payme SMS/ilovasida) va botning buyurtma ID’si. Murojaat qilganda ikkalasi ham foydali —
        buyurtma ID xizmat tomonini, tranzaksiya raqami esa to‘lov tomonini aniqlaydi.
      </p>
      <p>
        Yetkazishni tekshirish oson: Telegram sozlamalarida yulduzlar balansini oching yoki botdagi buyurtma
        statusiga qarang. Sovg‘a sifatida boshqa odamga olgan bo‘lsangiz, balans o‘shaning hisobida o‘zgaradi.
      </p>

      <h2 id="taqqoslash">Rasmiy yo‘l va bot — nimasi bilan farq qiladi</h2>
      <WayCompare locale="uz" />

      <h2 id="nimaga-kerak">Telegram Stars umuman nimaga kerak</h2>
      <KeyFacts label="Yulduzlar nimaga sarflanadi">
        <li>
          <b>Telegram Premium</b> — kengaytirilgan limitlar, eksklyuziv stikerlar, reklamasiz kanallar va boshqa
          imkoniyatlar.
        </li>
        <li>
          <b>Sovg‘alar</b> — do‘stlarga va kanallarda sovg‘a yuborish.
        </li>
        <li>
          <b>Pulli kontent</b> — botlar va mualliflar kanallaridagi yopiq materiallar.
        </li>
        <li>
          <b>Qo‘llab-quvvatlash</b> — sevimli blogerlar va bot ishlab chiquvchilariga minnatdorchilik.
        </li>
      </KeyFacts>

      <h2 id="xavfsizlik">Bu xavfsizmi</h2>
      <p>
        To‘lov siz allaqachon har kuni foydalanadigan mahalliy to‘lov xizmatlari orqali o‘tadi, ya’ni chet el
        kartasi ma’lumotlarini uzatish talab qilinmaydi. Telegram akkauntingizga kirish uchun parol yoki
        SMS-koddan hech qachon so‘ralmaydi — faqat username yetarli. Batafsil:{" "}
        <Link href="/blog/telegram-stars-xavfsizmi">Telegram Stars xavfsizmi</Link> va{" "}
        <Link href="/blog/ishonchli-stars-xizmatini-tanlash">ishonchli xizmatni qanday tanlash</Link>.
      </p>

      <p>
        Shuningdek o‘qing:{" "}
        <Link href="/blog/telegram-premium-3-6-12-oy-sotib-olish">Telegram Premium 3, 6 va 12 oy</Link>,{" "}
        <Link href="/blog/telegram-sovga-va-nft-sovga-sotib-olish">oddiy va NFT sovg‘alar</Link>,{" "}
        <Link href="/blog/telegram-stars-necha-som-kalkulyator">Stars necha so‘m — kalkulyator</Link>.
      </p>

      <Sources
        label="Manbalar"
        items={[
          { href: "https://telegram.org/blog/telegram-stars", label: "telegram.org", note: "Telegram Stars e’loni" },
          { href: "https://core.telegram.org/api/stars", label: "core.telegram.org", note: "Stars texnik hujjati" },
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
      Чтобы купить звёзды Telegram <b>за узбекский сум</b>, карта Visa или Mastercard не нужна.{" "}
      <b>@StarsPaymee_bot</b> принимает оплату в сумах через <b>Click</b>, <b>Humo</b>, <b>Uzcard</b> и{" "}
      <b>Payme</b>: выбираете количество, указываете username, оплачиваете — звёзды приходят на аккаунт обычно
      за считаные минуты.
    </p>
  );
}

function RuBody() {
  return (
    <>
      <p>
        Звёзды Telegram (Telegram Stars) — это внутренняя валюта мессенджера, которая используется для оплаты
        премиум-подписки, стикеров, подарков, доступа к контенту в каналах и ботах, а также для поддержки
        авторов. Спрос на них растёт, и всё больше пользователей из Узбекистана ищут способ{" "}
        <b>купить звёзды за узбекский сум</b>, не привязывая международную карту.
      </p>

      <h2 id="nega-qiyin">Почему напрямую купить звёзды в Узбекистане не всегда просто</h2>
      <p>
        Официально Telegram принимает оплату звёзд через Apple Pay, Google Pay и банковские карты международных
        платёжных систем — Visa или Mastercard. А такие карты есть далеко не у каждого пользователя в
        Узбекистане: часто люди пользуются локальными картами <b>Humo</b> и <b>Uzcard</b>, которые Telegram
        напрямую не принимает.
      </p>
      <p>
        Из-за этого многие сталкиваются с ситуацией: звёзды нужны прямо сейчас, а международной карты под рукой
        нет — оформлять её ради разовой покупки долго и не всегда оправдано.
      </p>

      <h2 id="yechim">Как купить звёзды за сум без визы</h2>
      <p>
        Если у вас нет карты Visa или Mastercard, звёзды можно приобрести через сервисы, которые принимают
        оплату в местной валюте. Один из таких вариантов —{" "}
        <a href="https://t.me/StarsPaymee_bot" target="_blank" rel="noopener noreferrer">
          @StarsPaymee_bot
        </a>
        . В нём доступно сразу несколько удобных способов оплаты:
      </p>
      <InfoGrid>
        <InfoCard emoji="🟢" title="Click">
          Оплата в один клик через привычное приложение.
        </InfoCard>
        <InfoCard emoji="💳" title="Карты Humo">
          Одна из самых массовых платёжных систем в стране.
        </InfoCard>
        <InfoCard emoji="💳" title="Карты Uzcard">
          Ещё одна широко используемая локальная карта.
        </InfoCard>
        <InfoCard emoji="🔵" title="Payme">
          Популярный сервис для быстрых онлайн-платежей.
        </InfoCard>
        <InfoCard emoji="🟣" title="Uzum">
          Оплата через приложение Uzum — в одно нажатие привязанной картой.
        </InfoCard>
      </InfoGrid>
      <p>
        Такой набор способов оплаты закрывает практически все сценарии: не важно, какой картой или сервисом вы
        обычно пользуетесь, найдётся подходящий вариант. Для оплаты наличными доступен также <b>Paynet</b>.
      </p>

      <h2 id="narx">Цены</h2>
      <StarsPriceBoard locale="ru" />

      <InlineCta
        text="Оплатите в сумах — Click, Humo, Uzcard, Payme или Uzum — и получите звёзды."
        product={{ kind: "stars", amount: 100 }}
      />

      <h2 id="qadamlar">Пошагово: как это работает</h2>
      <Steps>
        <Step title="1. Откройте бота">
          Запустите{" "}
          <a href="https://t.me/StarsPaymee_bot" target="_blank" rel="noopener noreferrer">
            @StarsPaymee_bot
          </a>{" "}
          в Telegram или откройте Mini App.
        </Step>
        <Step title="2. Выберите количество звёзд">Укажите нужное число — цена сразу показывается в сумах.</Step>
        <Step title="3. Введите username">Аккаунт, на который поступят звёзды: свой или чужой.</Step>
        <Step title="4. Укажите способ оплаты">Click, Humo, Uzcard, Payme или Uzum.</Step>
        <Step title="5. Оплатите в сумах">По актуальному курсу, без конвертации и скрытых комиссий.</Step>
        <Step title="6. Получите звёзды">Обычно это происходит практически моментально.</Step>
      </Steps>

      <h2 id="tolov-status">Оплата через Click: шаги, статус, чек и доставка</h2>
      <p>
        Click и Payme — это платёжные <b>агрегаторы</b>. Они списывают деньги с карты и возвращают результат
        сервису. Поэтому в процессе есть два отдельных этапа, и их важно не путать.
      </p>
      <InfoGrid>
        <InfoCard emoji="🟢" title="Через Click">
          Бот открывает страницу Click. Выбираете карту или вводите номер, подтверждаете SMS-кодом банка — затем
          автоматически возвращаетесь в бота.
        </InfoCard>
        <InfoCard emoji="🔵" title="Через Payme">
          Payme работает так же, только там сумма уже готова в приложении. Подробнее:{" "}
          <Link href="/blog/payme-orqali-stars-va-premium-sotib-olish">покупка через Payme</Link>.
        </InfoCard>
      </InfoGrid>
      <KeyFacts label="Как читать статус платежа">
        <li>
          <b>«Платёж успешен»</b> — это сообщение агрегатора: деньги списаны с карты. Это ещё <b>не</b> значит,
          что звёзды доставлены.
        </li>
        <li>
          <b>«Заказ выполняется»</b> — сервис принял платёж и начал доставку. Обычно этот этап длится несколько
          секунд.
        </li>
        <li>
          <b>«Выполнен»</b> — звёзды зачислены. Именно этот статус и есть финальное подтверждение.
        </li>
        <li>
          <b>Деньги списались, а статус не меняется</b> — закройте и снова откройте бота. Если и тогда ничего,
          напишите в поддержку с номером заказа: платёж зафиксирован у агрегатора, и его можно проверить.
        </li>
      </KeyFacts>
      <p>
        <b>Сохраняйте чек.</b> После оплаты появляются два номера: номер транзакции агрегатора (в SMS или
        приложении Click либо Payme) и ID заказа в боте. При обращении полезны оба — ID заказа находит сторону
        сервиса, номер транзакции — сторону платежа.
      </p>
      <p>
        Доставку проверить просто: откройте баланс звёзд в настройках Telegram или посмотрите статус заказа в
        боте. Если покупали в подарок другому человеку, баланс изменится на его аккаунте.
      </p>

      <h2 id="taqqoslash">Чем официальный путь отличается от покупки в боте</h2>
      <WayCompare locale="ru" />

      <h2 id="nimaga-kerak">Зачем вообще нужны звёзды Telegram</h2>
      <KeyFacts label="На что тратят звёзды">
        <li>
          <b>Telegram Premium</b> — расширенные лимиты, эксклюзивные стикеры, отсутствие рекламы и другие бонусы.
        </li>
        <li>
          <b>Подарки</b> — для друзей и в каналах.
        </li>
        <li>
          <b>Платный контент</b> — доступ в ботах и каналах авторов.
        </li>
        <li>
          <b>Поддержка</b> — любимых блогеров и разработчиков ботов.
        </li>
      </KeyFacts>

      <h2 id="xavfsizlik">Это безопасно</h2>
      <p>
        Оплата проходит через привычные локальные платёжные сервисы, которыми вы и так пользуетесь ежедневно,
        поэтому процесс не требует передачи данных зарубежных карт. Пароль или SMS-код от аккаунта Telegram не
        запрашивается — достаточно username. Подробнее:{" "}
        <Link href="/blog/telegram-stars-xavfsizmi">безопасны ли Telegram Stars</Link> и{" "}
        <Link href="/blog/ishonchli-stars-xizmatini-tanlash">как выбрать надёжный сервис</Link>.
      </p>

      <p>
        Читайте также:{" "}
        <Link href="/blog/telegram-premium-3-6-12-oy-sotib-olish">Telegram Premium на 3, 6 и 12 месяцев</Link>,{" "}
        <Link href="/blog/telegram-sovga-va-nft-sovga-sotib-olish">обычные и NFT-подарки</Link>,{" "}
        <Link href="/blog/telegram-stars-necha-som-kalkulyator">сколько сумов стоит звезда</Link>.
      </p>

      <Sources
        label="Источники"
        items={[
          { href: "https://telegram.org/blog/telegram-stars", label: "telegram.org", note: "анонс Telegram Stars" },
          { href: "https://core.telegram.org/api/stars", label: "core.telegram.org", note: "техническая документация Stars" },
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
      Buying Telegram Stars <b>in Uzbek so‘m</b> does not require a Visa or Mastercard. <b>@StarsPaymee_bot</b>{" "}
      accepts payment in so‘m through <b>Click</b>, <b>HUMO</b>, <b>UzCard</b> and <b>Payme</b>: pick the amount,
      enter a username, pay — the Stars usually land on the account within minutes.
    </p>
  );
}

function EnBody() {
  return (
    <>
      <p>
        Telegram Stars are the messenger’s internal currency. They pay for the Premium subscription, stickers,
        gifts and paid content in channels and bots, and they let people support creators. Demand keeps growing,
        and more and more users in Uzbekistan look for a way to <b>buy Stars with Uzbek so‘m</b> without linking
        an international card.
      </p>

      <h2 id="nega-qiyin">Why buying directly in Uzbekistan is not always simple</h2>
      <p>
        Officially Telegram accepts payment for Stars through Apple Pay, Google Pay and cards of international
        payment systems — Visa or Mastercard. In Uzbekistan, however, most people use the local <b>HUMO</b> and{" "}
        <b>UzCard</b> cards, which Telegram does not accept directly.
      </p>
      <p>
        The result is a familiar situation: you need Stars right now, and there is no international card at hand.
        Issuing a foreign card for a single purchase takes time and rarely pays off.
      </p>

      <h2 id="yechim">The working route: pay in so‘m</h2>
      <p>
        Without a Visa or Mastercard, Stars can be bought through services that accept the local currency. One of
        them is{" "}
        <a href="https://t.me/StarsPaymee_bot" target="_blank" rel="noopener noreferrer">
          @StarsPaymee_bot
        </a>
        , which offers several convenient payment methods in one place:
      </p>
      <InfoGrid>
        <InfoCard emoji="🟢" title="Click">
          One-tap payment through the familiar app.
        </InfoCard>
        <InfoCard emoji="💳" title="HUMO cards">
          One of the most widespread payment systems in the country.
        </InfoCard>
        <InfoCard emoji="💳" title="UzCard cards">
          Another widely used local card.
        </InfoCard>
        <InfoCard emoji="🔵" title="Payme">
          A popular service for fast online payments.
        </InfoCard>
        <InfoCard emoji="🟣" title="Uzum">
          Paying through the Uzum app — one tap with the card linked to the account.
        </InfoCard>
      </InfoGrid>
      <p>
        This set covers almost every scenario: whichever card or service you normally use, there is a matching
        option. <b>Paynet</b> is available for cash payments.
      </p>

      <h2 id="narx">Prices</h2>
      <StarsPriceBoard locale="en" />

      <InlineCta
        text="Pay in so‘m with Click, HUMO, UzCard, Payme or Uzum and get your Stars."
        product={{ kind: "stars", amount: 100 }}
      />

      <h2 id="qadamlar">Step by step: how it works</h2>
      <Steps>
        <Step title="1. Open the bot">
          Start{" "}
          <a href="https://t.me/StarsPaymee_bot" target="_blank" rel="noopener noreferrer">
            @StarsPaymee_bot
          </a>{" "}
          in Telegram or open the Mini App.
        </Step>
        <Step title="2. Choose the number of Stars">Set the amount — the price is shown in so‘m right away.</Step>
        <Step title="3. Enter a username">The account the Stars should land on: yours or someone else’s.</Step>
        <Step title="4. Pick a payment method">Click, HUMO, UzCard, Payme or Uzum.</Step>
        <Step title="5. Pay in so‘m">At the current rate, with no conversion and no hidden fees.</Step>
        <Step title="6. Receive the Stars">This usually happens almost instantly.</Step>
      </Steps>

      <h2 id="tolov-status">Paying with Click: steps, status, receipt and delivery</h2>
      <p>
        Click and Payme are payment <b>aggregators</b>. They take the money from the card and hand the result back
        to the service. That means the process has two separate stages, and it pays not to confuse them.
      </p>
      <InfoGrid>
        <InfoCard emoji="🟢" title="Through Click">
          The bot opens the Click page. You pick a card or type its number, confirm with the bank’s SMS code, and
          are returned to the bot automatically.
        </InfoCard>
        <InfoCard emoji="🔵" title="Through Payme">
          Payme works the same way, except the amount is pre-filled in the app. More on that:{" "}
          <Link href="/blog/payme-orqali-stars-va-premium-sotib-olish">buying with Payme</Link>.
        </InfoCard>
      </InfoGrid>
      <KeyFacts label="How to read the payment status">
        <li>
          <b>“Payment successful”</b> — that is the aggregator speaking: the money left the card. It does{" "}
          <b>not</b> yet mean the Stars were delivered.
        </li>
        <li>
          <b>“Order in progress”</b> — the service accepted the payment and started delivery. This stage normally
          lasts a few seconds.
        </li>
        <li>
          <b>“Completed”</b> — the Stars have landed. This status is the final confirmation.
        </li>
        <li>
          <b>Money taken but the status is stuck</b> — close and reopen the bot. If nothing changes, message
          support with the order number: the payment is recorded at the aggregator and can be traced.
        </li>
      </KeyFacts>
      <p>
        <b>Keep the receipt.</b> Two numbers appear after payment: the aggregator’s transaction number (in the
        Click or Payme SMS or app) and the bot’s order ID. Both help when you get in touch — the order ID
        identifies the service side, the transaction number the payment side.
      </p>
      <p>
        Checking delivery is easy: open the Stars balance in Telegram’s settings or look at the order status in
        the bot. If you bought it as a gift, the balance changes on the recipient’s account instead.
      </p>

      <h2 id="taqqoslash">How the official route differs from the bot</h2>
      <WayCompare locale="en" />

      <h2 id="nimaga-kerak">What Telegram Stars are used for</h2>
      <KeyFacts label="Where the Stars go">
        <li>
          <b>Telegram Premium</b> — higher limits, exclusive stickers, no ads in channels and other perks.
        </li>
        <li>
          <b>Gifts</b> — for friends and inside channels.
        </li>
        <li>
          <b>Paid content</b> — access in bots and creator channels.
        </li>
        <li>
          <b>Support</b> — for favourite bloggers and bot developers.
        </li>
      </KeyFacts>

      <h2 id="xavfsizlik">Is it safe</h2>
      <p>
        Payment goes through the local services you already use every day, so no foreign card details travel
        anywhere. Your Telegram password or SMS code is never requested — a username is enough. More on this:{" "}
        <Link href="/blog/telegram-stars-xavfsizmi">are Telegram Stars safe</Link> and{" "}
        <Link href="/blog/ishonchli-stars-xizmatini-tanlash">how to pick a trustworthy service</Link>.
      </p>

      <p>
        Read next:{" "}
        <Link href="/blog/telegram-premium-3-6-12-oy-sotib-olish">Telegram Premium for 3, 6 and 12 months</Link>,{" "}
        <Link href="/blog/telegram-sovga-va-nft-sovga-sotib-olish">regular and NFT gifts</Link>,{" "}
        <Link href="/blog/telegram-stars-necha-som-kalkulyator">how many so‘m a Star costs</Link>.
      </p>

      <Sources
        label="Sources"
        items={[
          { href: "https://telegram.org/blog/telegram-stars", label: "telegram.org", note: "Telegram Stars announcement" },
          { href: "https://core.telegram.org/api/stars", label: "core.telegram.org", note: "Stars technical documentation" },
          { href: "https://click.uz/", label: "click.uz", note: "Click payment system" },
          { href: "https://uzcard.uz/", label: "uzcard.uz", note: "UzCard national payment system" },
        ]}
      />
    </>
  );
}

const uzFaq = [
  {
    question: "Visa kartasiz Telegram Stars sotib olsa bo‘ladimi?",
    answer:
      "Ha. @StarsPaymee_bot kabi xizmatlar to‘lovni so‘mda Click, HUMO, UzCard, Payme va Uzum orqali qabul qiladi.",
  },
  {
    question: "Bu xavfsizmi?",
    answer:
      "To‘lov har kuni foydalaniladigan mahalliy to‘lov xizmatlari orqali o‘tadi, chet el kartasi ma’lumotlari uzatilmaydi.",
  },
  {
    question: "Yulduzlar qancha vaqtda tushadi?",
    answer: "Odatda to‘lov tasdiqlangach deyarli bir zumda hisobga tushadi.",
  },
  { question: "1 dona Stars necha so‘m?", answer: "220 so‘m; bazaviy paket — 50 ta 11 000 so‘mga." },
  { question: "Naqd pul bilan to‘lash mumkinmi?", answer: "Ha, Paynet orqali." },
  {
    question: "Akkauntimga kirish uchun parol so‘raladimi?",
    answer: "Yo‘q. Faqat Telegram username yoki ID kifoya.",
  },
  {
    question: "Boshqa odamga yulduz sovg‘a qilsam bo‘ladimi?",
    answer: "Ha, buyurtma paytida qabul qiluvchining username’ini ko‘rsatasiz.",
  },
  { question: "Valyuta konvertatsiyasi bo‘ladimi?", answer: "Yo‘q, to‘lov to‘g‘ridan-to‘g‘ri so‘mda amalga oshadi." },
];

const ruFaq = [
  {
    question: "Можно ли купить звёзды Telegram без карты Visa?",
    answer:
      "Да, для этого можно воспользоваться сервисами вроде @StarsPaymee_bot, которые принимают оплату в сумах через Click, Humo, Uzcard и Payme.",
  },
  {
    question: "Это безопасно?",
    answer:
      "Оплата проходит через привычные локальные платёжные сервисы, поэтому процесс не требует передачи данных зарубежных карт.",
  },
  {
    question: "Сколько времени занимает зачисление звёзд?",
    answer: "Обычно звёзды поступают на аккаунт практически сразу после подтверждения оплаты.",
  },
  { question: "Сколько стоит одна звезда?", answer: "220 сум; базовый пакет — 50 штук за 11 000 сум." },
  { question: "Можно ли заплатить наличными?", answer: "Да, через Paynet." },
  { question: "Запрашивают ли пароль от аккаунта?", answer: "Нет. Достаточно username или ID в Telegram." },
  {
    question: "Можно ли подарить звёзды другому человеку?",
    answer: "Да, при оформлении заказа вы указываете username получателя.",
  },
  { question: "Будет ли конвертация валюты?", answer: "Нет, оплата проходит напрямую в сумах." },
];

const enFaq = [
  {
    question: "Can I buy Telegram Stars without a Visa card?",
    answer:
      "Yes. Services such as @StarsPaymee_bot accept payment in so‘m through Click, HUMO, UzCard and Payme.",
  },
  {
    question: "Is it safe?",
    answer:
      "Payment runs through the local services people already use daily, so no foreign card details are shared.",
  },
  {
    question: "How long does delivery take?",
    answer: "Stars normally reach the account almost immediately after the payment is confirmed.",
  },
  { question: "How much does one Star cost?", answer: "220 UZS; the base pack is 50 Stars for 11,000 UZS." },
  { question: "Can I pay in cash?", answer: "Yes, through Paynet." },
  { question: "Is my account password requested?", answer: "No. A Telegram username or ID is enough." },
  {
    question: "Can I send Stars to someone else?",
    answer: "Yes, you enter the recipient’s username while placing the order.",
  },
  { question: "Will there be a currency conversion?", answer: "No, the payment happens directly in so‘m." },
];

export const post: AeoPost = {
  slug: SLUG,
  category: "Stars",
  type: "howto",
  datePublished: "2026-08-26",
  dateModified: "2026-09-16",
  keywords: [
    "click orqali stars sotib olish",
    "click bilan telegram stars",
    "click superapp telegram stars",
    "uzcard stars sotib olish",
    "o‘zbek so‘mida telegram stars",
    "visa kartasiz stars",
    "купить звёзды telegram через click",
  ],
  howToSteps: [
    { name: "Botni oching", text: "Telegramda @StarsPaymee_bot ni ishga tushiring yoki Mini App’ni oching." },
    { name: "Yulduzlar sonini tanlang", text: "Kerakli miqdorni belgilang — narx so‘mda ko‘rinadi." },
    { name: "Username kiriting", text: "Yulduzlar tushadigan Telegram hisobini ko‘rsating." },
    { name: "To‘lov usulini tanlang", text: "Click, HUMO, UzCard, Payme yoki Uzum." },
    { name: "So‘mda to‘lang", text: "Joriy kurs bo‘yicha, konvertatsiya va yashirin komissiyalarsiz." },
    { name: "Yulduzlarni qabul qiling", text: "Odatda to‘lovdan keyin deyarli bir zumda tushadi." },
  ],
  locales: {
    uz: {
      title: "Click orqali Telegram Stars sotib olish: so‘mda, Visa kartasiz",
      excerpt:
        "Click orqali so‘mda Telegram Stars sotib olish: nega rasmiy usul Visa talab qiladi, Click sahifasida to‘lov qanday kechadi, status va chekni qanday o‘qish kerak.",
      metaTitle: "Click orqali Telegram Stars sotib olish",
      metaDescription:
        "Click orqali Telegram Stars sotib olish: so‘mda to‘lov, Visa kerak emas, qadam-baqadam, to‘lov statusi va chek. HUMO, UzCard va Uzum ham ishlaydi.",
      answerTitle: "Qisqa javob",
      Answer: UzAnswer,
      Body: UzBody,
      ctaHeading: "Yulduzlarni so‘mda oling",
      ctaBody: "@StarsPaymee_bot — Click, HUMO, UzCard, Payme va Uzum. Visa kerak emas, yetkazish bir necha daqiqada.",
      faq: uzFaq,
    },
    ru: {
      title: "Как купить звёзды Telegram через Click за сумы",
      excerpt:
        "Почему официальная покупка требует Visa, как проходит оплата на странице Click и как читать статус платежа и чек.",
      metaTitle: "Купить звёзды Telegram через Click за сумы",
      metaDescription:
        "Как купить звёзды Telegram через Click за сумы без карты Visa: пошаговая инструкция, статус платежа, чек, цены в сумах.",
      answerTitle: "Краткий ответ",
      Answer: RuAnswer,
      Body: RuBody,
      ctaHeading: "Купите звёзды за сумы",
      ctaBody: "@StarsPaymee_bot — Click, Humo, Uzcard и Payme. Виза не нужна, зачисление за минуты.",
      faq: ruFaq,
    },
    en: {
      title: "Buying Telegram Stars with Click, in Uzbek so‘m",
      excerpt:
        "How to buy Telegram Stars with Click for Uzbek so‘m: why the official route needs a Visa card, how the payment goes on the Click page, and how to read the status and the receipt.",
      metaTitle: "Buy Telegram Stars with Click in so‘m",
      metaDescription:
        "Buy Telegram Stars with Click for Uzbek so‘m, no Visa card needed: a step-by-step guide, payment status, receipts and prices in so‘m.",
      answerTitle: "Short answer",
      Answer: EnAnswer,
      Body: EnBody,
      ctaHeading: "Get your Stars in so‘m",
      ctaBody: "@StarsPaymee_bot — Click, HUMO, UzCard and Payme. No Visa needed, delivery in minutes.",
      faq: enFaq,
    },
  },
};
