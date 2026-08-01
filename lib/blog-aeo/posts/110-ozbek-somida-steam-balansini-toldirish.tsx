import { Link } from "@/i18n/navigation";
import { InlineCta, Sources, KeyFacts, Steps, Step, InfoGrid, InfoCard } from "@/components/blog/aeo-blocks";
import type { AeoPost } from "@/lib/blog-aeo/types";

const SLUG = "ozbek-somida-steam-balansini-toldirish";

/* ---------------- UZ ---------------- */
function UzAnswer() {
  return (
    <p>
      Steam balansini O‘zbek so‘mida (UZS) to‘ldirish uchun xalqaro Visa/Mastercard shart emas. @StarsPaymee_bot
      orqali «Steam Balance» xizmatini tanlab, hisob ma’lumotlaringizni kiritasiz, summani belgilaysiz va UzCard,
      HUMO, Click yoki Payme bilan so‘mda to‘laysiz — mablag‘ Steam Wallet hisobingizga bir necha daqiqada tushadi.
    </p>
  );
}

function UzBody() {
  return (
    <>
      <h2 id="nima">Nima uchun so‘mda to‘ldirish qulay?</h2>
      <p>
        Steam — dunyodagi eng mashhur o‘yin platformalaridan biri. Yangi o‘yinlar, DLC va o‘yin ichidagi buyumlarni
        xarid qilish uchun <Link href="/blog/steam-wallet-nima">Steam Wallet</Link> balansi kerak bo‘ladi. Ammo
        O‘zbekistondagi ko‘p foydalanuvchida xalqaro karta yo‘q yoki valyuta konvertatsiyasi uchun ortiqcha komissiya
        to‘lashni xohlamaydi. So‘mda to‘lash aynan shu muammolarni bartaraf etadi.
      </p>

      <KeyFacts label="So‘mda to‘lovning afzalliklari">
        <li>Xalqaro Visa/Mastercard kerak emas.</li>
        <li>Valyuta ayirboshlash uchun ortiqcha qadam yo‘q.</li>
        <li>UzCard, HUMO, Click, Payme — mahalliy usullar.</li>
        <li>Buyurtma odatda bir necha daqiqada bajariladi.</li>
        <li>Telegram bot orqali 24/7 buyurtma berish.</li>
      </KeyFacts>

      <h2 id="qadamlar">Qanday to‘ldiriladi — 6 qadam</h2>
      <Steps>
        <Step title="1. Botni oching">
          Telegramda <a href="https://t.me/StarsPaymee_bot" target="_blank" rel="noopener noreferrer">@StarsPaymee_bot</a>{" "}
          botini ishga tushiring.
        </Step>
        <Step title="2. «Steam Balance» ni tanlang">
          Xizmatlar ro‘yxatidan Steam balansini to‘ldirish bo‘limini tanlang.
        </Step>
        <Step title="3. Hisob ma’lumotlarini kiriting">
          Steam Login yoki bot so‘ragan kerakli ma’lumotni kiriting.{" "}
          <Link href="/blog/steam-login-nima">Steam Login nima?</Link>
        </Step>
        <Step title="4. Summani tanlang">
          To‘ldirmoqchi bo‘lgan miqdorni belgilang — yakuniy summa botda ko‘rsatiladi.
        </Step>
        <Step title="5. To‘lovni amalga oshiring">
          UzCard, HUMO, Click yoki Payme orqali so‘mda to‘lang.
        </Step>
        <Step title="6. Balansni tekshiring">
          Bir necha daqiqa ichida mablag‘ Steam hisobingizga tushadi.
        </Step>
      </Steps>

      <InlineCta text="Steam balansini so‘mda to‘ldirmoqchimisiz? Botda buyurtma bering." />

      <h2 id="afzallik">Bizning afzalliklarimiz</h2>
      <InfoGrid>
        <InfoCard emoji="⚡" title="Tez ishlov berish">
          Buyurtma odatda bir necha daqiqada qayta ishlanadi.
        </InfoCard>
        <InfoCard emoji="💳" title="O‘zbek so‘mida to‘lov">
          UzCard, HUMO, Click, Payme — mahalliy kartalar bilan.
        </InfoCard>
        <InfoCard emoji="🛡️" title="Xavfsiz xizmat">
          Steam parolingiz so‘ralmaydi — hech qachon uni begonaga bermang.
        </InfoCard>
        <InfoCard emoji="🤖" title="Qulay Telegram bot">
          24/7 ishlaydi, o‘zbek tilida, ortiqcha ro‘yxatdan o‘tishsiz.
        </InfoCard>
      </InfoGrid>

      <h2 id="chegirma">Nega balansni oldindan to‘ldirish kerak?</h2>
      <p>
        Steam yil davomida yirik chegirmalar o‘tkazadi — yozgi, qishki, kuzgi va bahorgi aksiyalar. Bu davrlarda
        minglab o‘yinlar sezilarli arzonlashadi. Hisobingizda oldindan balans bo‘lsa, chegirmani o‘tkazib
        yubormaysiz va to‘lovni kutib o‘tirmaysiz. Narx qanday shakllanishini{" "}
        <Link href="/blog/steam-wallet-narxlari">Steam Wallet narxlari</Link> maqolasida ko‘ring.
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
      Чтобы пополнить баланс Steam в узбекских сумах (UZS), международная Visa/Mastercard не нужна. В
      @StarsPaymee_bot выберите услугу «Steam Balance», введите данные аккаунта, укажите сумму и оплатите в сумах
      картой UzCard, HUMO, через Click или Payme — средства поступят на Steam Wallet за несколько минут.
    </p>
  );
}

function RuBody() {
  return (
    <>
      <h2 id="nima">Почему удобно платить в сумах?</h2>
      <p>
        Steam — одна из самых популярных игровых платформ в мире. Чтобы покупать игры, DLC и внутриигровые предметы,
        нужен баланс <Link href="/blog/steam-wallet-nima">Steam Wallet</Link>. Но у многих пользователей в
        Узбекистане нет международной карты или они не хотят переплачивать за конвертацию валюты. Оплата в сумах
        решает именно эти проблемы.
      </p>

      <KeyFacts label="Преимущества оплаты в сумах">
        <li>Международная Visa/Mastercard не нужна.</li>
        <li>Нет лишнего шага с обменом валюты.</li>
        <li>UzCard, HUMO, Click, Payme — локальные методы.</li>
        <li>Заказ обычно выполняется за несколько минут.</li>
        <li>Оформление через Telegram‑бот 24/7.</li>
      </KeyFacts>

      <h2 id="qadamlar">Как пополнить — 6 шагов</h2>
      <Steps>
        <Step title="1. Откройте бота">
          Запустите в Telegram{" "}
          <a href="https://t.me/StarsPaymee_bot" target="_blank" rel="noopener noreferrer">@StarsPaymee_bot</a>.
        </Step>
        <Step title="2. Выберите «Steam Balance»">
          В списке услуг выберите раздел пополнения баланса Steam.
        </Step>
        <Step title="3. Введите данные аккаунта">
          Укажите Steam Login или другие данные, которые запросит бот.{" "}
          <Link href="/blog/steam-login-nima">Что такое Steam Login?</Link>
        </Step>
        <Step title="4. Выберите сумму">
          Укажите нужный размер пополнения — итоговая сумма показывается в боте.
        </Step>
        <Step title="5. Оплатите">
          Оплатите в сумах через UzCard, HUMO, Click или Payme.
        </Step>
        <Step title="6. Проверьте баланс">
          В течение нескольких минут средства поступят на ваш аккаунт Steam.
        </Step>
      </Steps>

      <InlineCta text="Хотите пополнить Steam в сумах? Оформите заказ в боте." />

      <h2 id="afzallik">Наши преимущества</h2>
      <InfoGrid>
        <InfoCard emoji="⚡" title="Быстрая обработка">
          Заказ обычно обрабатывается за несколько минут.
        </InfoCard>
        <InfoCard emoji="💳" title="Оплата в сумах">
          UzCard, HUMO, Click, Payme — локальными картами.
        </InfoCard>
        <InfoCard emoji="🛡️" title="Безопасный сервис">
          Пароль Steam не запрашивается — никогда не сообщайте его посторонним.
        </InfoCard>
        <InfoCard emoji="🤖" title="Удобный Telegram‑бот">
          Работает 24/7, без лишней регистрации.
        </InfoCard>
      </InfoGrid>

      <h2 id="chegirma">Зачем пополнять баланс заранее?</h2>
      <p>
        Steam в течение года проводит крупные распродажи — летние, зимние, осенние и весенние. В эти периоды тысячи
        игр заметно дешевеют. Если баланс пополнен заранее, вы не упустите скидку и не будете ждать оплату. Как
        формируется цена — смотрите в статье{" "}
        <Link href="/blog/steam-wallet-narxlari">цены Steam Wallet</Link>.
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
      To top up your Steam balance in Uzbek so‘m (UZS) you don't need an international Visa/Mastercard. In
      @StarsPaymee_bot pick the «Steam Balance» service, enter your account details, choose an amount and pay in
      so‘m with UzCard, HUMO, Click or Payme — funds arrive in your Steam Wallet within a few minutes.
    </p>
  );
}

function EnBody() {
  return (
    <>
      <h2 id="nima">Why is paying in so‘m convenient?</h2>
      <p>
        Steam is one of the world's most popular gaming platforms. To buy games, DLC and in‑game items you need a{" "}
        <Link href="/blog/steam-wallet-nima">Steam Wallet</Link> balance. But many users in Uzbekistan don't have an
        international card, or don't want to overpay on currency conversion. Paying in so‘m solves exactly these
        problems.
      </p>

      <KeyFacts label="Benefits of paying in so‘m">
        <li>No international Visa/Mastercard needed.</li>
        <li>No extra currency‑exchange step.</li>
        <li>UzCard, HUMO, Click, Payme — local methods.</li>
        <li>Orders are usually completed within a few minutes.</li>
        <li>Ordering via a Telegram bot, 24/7.</li>
      </KeyFacts>

      <h2 id="qadamlar">How to top up — 6 steps</h2>
      <Steps>
        <Step title="1. Open the bot">
          Launch{" "}
          <a href="https://t.me/StarsPaymee_bot" target="_blank" rel="noopener noreferrer">@StarsPaymee_bot</a> in Telegram.
        </Step>
        <Step title="2. Choose «Steam Balance»">
          Select the Steam balance top‑up section from the service list.
        </Step>
        <Step title="3. Enter account details">
          Provide your Steam Login or whatever the bot asks for.{" "}
          <Link href="/blog/steam-login-nima">What is Steam Login?</Link>
        </Step>
        <Step title="4. Choose an amount">
          Pick the top‑up amount — the final total is shown in the bot.
        </Step>
        <Step title="5. Pay">
          Pay in so‘m via UzCard, HUMO, Click or Payme.
        </Step>
        <Step title="6. Check the balance">
          Within a few minutes the funds appear in your Steam account.
        </Step>
      </Steps>

      <InlineCta text="Want to top up Steam in so‘m? Place an order in the bot." />

      <h2 id="afzallik">Our advantages</h2>
      <InfoGrid>
        <InfoCard emoji="⚡" title="Fast processing">
          Orders are usually processed within a few minutes.
        </InfoCard>
        <InfoCard emoji="💳" title="Payment in so‘m">
          UzCard, HUMO, Click, Payme — with local cards.
        </InfoCard>
        <InfoCard emoji="🛡️" title="Safe service">
          Your Steam password is never requested — never give it to anyone.
        </InfoCard>
        <InfoCard emoji="🤖" title="Convenient Telegram bot">
          Works 24/7, with no extra sign‑up.
        </InfoCard>
      </InfoGrid>

      <h2 id="chegirma">Why top up in advance?</h2>
      <p>
        Steam runs major sales throughout the year — summer, winter, autumn and spring. During these periods
        thousands of games get noticeably cheaper. With a balance topped up in advance you won't miss a discount or
        wait on payment. See how pricing works in{" "}
        <Link href="/blog/steam-wallet-narxlari">Steam Wallet prices</Link>.
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
  { question: "Steam balansini O‘zbek so‘mida to‘ldirsa bo‘ladimi?", answer: "Ha. @StarsPaymee_bot orqali UzCard, HUMO, Click yoki Payme bilan so‘mda to‘lab, Steam Wallet balansini to‘ldirishingiz mumkin." },
  { question: "Xalqaro Visa yoki Mastercard kerakmi?", answer: "Yo‘q. Mahalliy kartalar va to‘lov tizimlari yetarli — valyuta ayirboshlash shart emas." },
  { question: "Steam balansi qancha vaqtda tushadi?", answer: "Ko‘p hollarda bir necha daqiqa ichida. Yuklama yoki texnik ishlar paytida biroz kechikishi mumkin." },
  { question: "Steam paroli kerakmi?", answer: "Yo‘q. Xizmat uchun odatda hisobni aniqlashga kerak bo‘ladigan ma’lumot kifoya. Hech qachon Steam parolingizni begona xizmatlarga bermang." },
  { question: "Qanday to‘lov usullari mavjud?", answer: "UzCard, HUMO, Click, Payme va O‘zbekiston bank kartalari — so‘mda." },
  { question: "Buyurtmani qayerdan beraman?", answer: "Telegramda @StarsPaymee_bot botini ochib, «Steam Balance» xizmatini tanlaysiz." },
  { question: "Minimal summa qancha?", answer: "Bu xizmat shartlariga bog‘liq. Eng dolzarb ma’lumotni botda ko‘rasiz." },
  { question: "Yakuniy narxni oldindan ko‘rsam bo‘ladimi?", answer: "Ha. Buyurtmani tasdiqlashdan oldin bot yakuniy summani ko‘rsatadi." },
  { question: "Balans qaysi valyutada ko‘rinadi?", answer: "Balans Steam hisobingizga o‘rnatilgan valyutada aks etadi." },
  { question: "Steam Login nima?", answer: "Bu Steam akkauntini yaratganda tanlangan kirish nomi. Profil nomidan farq qiladi — batafsil alohida maqolada." },
  { question: "Balansni nimalarga ishlatsam bo‘ladi?", answer: "O‘yinlar, DLC, Steam Market buyumlari, soundtrack va o‘yin ichidagi ayrim xaridlar uchun." },
  { question: "Balans muddati tugaydimi?", answer: "Odatda yo‘q — mablag‘ hisobingizda saqlanadi." },
  { question: "Balansni naqd pulga yechsa bo‘ladimi?", answer: "Yo‘q. Steam Wallet mablag‘lari odatda naqd pul sifatida qaytarilmaydi va Steam ichida ishlatiladi." },
  { question: "Chegirmalar oldidan to‘ldirish foydalimi?", answer: "Ha. Yozgi va qishki aksiyalarda balans tayyor bo‘lsa, chegirmani o‘tkazib yubormaysiz." },
  { question: "To‘lov xavfsizmi?", answer: "To‘lov mahalliy tizimlar orqali amalga oshiriladi. Faqat ishonchli xizmatdan foydalaning va parolingizni bermang." },
  { question: "Balans tushmasa nima qilaman?", answer: "Bir necha daqiqa kuting, hisob ma’lumotlarini tekshiring, so‘ng buyurtma ID bilan @StarsPaymeeSupport ga yozing." },
  { question: "Bir nechta hisobga to‘ldirsa bo‘ladimi?", answer: "Ha. Har bir buyurtmada kerakli hisob ma’lumotini ko‘rsatasiz." },
  { question: "Do‘stimning hisobiga to‘ldirsam bo‘ladimi?", answer: "Ha, agar uning hisob ma’lumotlarini to‘g‘ri kiritsangiz." },
  { question: "Bot 24/7 ishlaydimi?", answer: "Ha. Buyurtmani istalgan vaqtda berishingiz mumkin." },
  { question: "Yordam kerak bo‘lsa kimga yozaman?", answer: "@StarsPaymeeSupport — buyurtma ID bilan yozsangiz tezroq yordam beriladi." },
];

const ruFaq = [
  { question: "Можно ли пополнить Steam в узбекских сумах?", answer: "Да. Через @StarsPaymee_bot можно оплатить в сумах картой UzCard, HUMO, через Click или Payme и пополнить баланс Steam Wallet." },
  { question: "Нужна ли международная Visa или Mastercard?", answer: "Нет. Достаточно локальных карт и платёжных систем — конвертация валюты не требуется." },
  { question: "За сколько поступает баланс Steam?", answer: "В большинстве случаев за несколько минут. При нагрузке или техработах возможна небольшая задержка." },
  { question: "Нужен ли пароль Steam?", answer: "Нет. Обычно достаточно данных для идентификации аккаунта. Никогда не сообщайте пароль Steam посторонним сервисам." },
  { question: "Какие способы оплаты доступны?", answer: "UzCard, HUMO, Click, Payme и банковские карты Узбекистана — в сумах." },
  { question: "Где оформить заказ?", answer: "Откройте @StarsPaymee_bot в Telegram и выберите услугу «Steam Balance»." },
  { question: "Какая минимальная сумма?", answer: "Зависит от условий сервиса. Актуальную информацию видно в боте." },
  { question: "Можно ли увидеть итоговую цену заранее?", answer: "Да. Перед подтверждением заказа бот показывает итоговую сумму." },
  { question: "В какой валюте отображается баланс?", answer: "Баланс отображается в валюте, установленной в вашем аккаунте Steam." },
  { question: "Что такое Steam Login?", answer: "Это имя входа, выбранное при создании аккаунта Steam. Отличается от имени профиля — подробнее в отдельной статье." },
  { question: "На что можно потратить баланс?", answer: "На игры, DLC, предметы Steam Market, саундтреки и некоторые внутриигровые покупки." },
  { question: "Истекает ли срок баланса?", answer: "Обычно нет — средства хранятся на вашем аккаунте." },
  { question: "Можно ли вывести баланс наличными?", answer: "Нет. Средства Steam Wallet обычно не возвращаются наличными и используются внутри Steam." },
  { question: "Выгодно ли пополнять перед распродажей?", answer: "Да. Если баланс готов к летней или зимней распродаже, вы не упустите скидку." },
  { question: "Безопасна ли оплата?", answer: "Оплата проходит через локальные системы. Используйте только надёжный сервис и не сообщайте пароль." },
  { question: "Что делать, если баланс не пришёл?", answer: "Подождите несколько минут, проверьте данные аккаунта, затем напишите в @StarsPaymeeSupport с ID заказа." },
  { question: "Можно ли пополнять несколько аккаунтов?", answer: "Да. В каждом заказе вы указываете нужные данные аккаунта." },
  { question: "Можно ли пополнить аккаунт друга?", answer: "Да, если правильно указать его данные аккаунта." },
  { question: "Бот работает круглосуточно?", answer: "Да. Заказ можно оформить в любое время." },
  { question: "Куда писать за помощью?", answer: "@StarsPaymeeSupport — с ID заказа помогут быстрее." },
];

const enFaq = [
  { question: "Can I top up Steam in Uzbek so‘m?", answer: "Yes. Through @StarsPaymee_bot you can pay in so‘m with UzCard, HUMO, Click or Payme and top up your Steam Wallet balance." },
  { question: "Do I need an international Visa or Mastercard?", answer: "No. Local cards and payment systems are enough — no currency conversion needed." },
  { question: "How fast does the Steam balance arrive?", answer: "In most cases within a few minutes. During load or maintenance there may be a slight delay." },
  { question: "Is a Steam password required?", answer: "No. Usually the details needed to identify the account are enough. Never give your Steam password to unknown services." },
  { question: "Which payment methods are available?", answer: "UzCard, HUMO, Click, Payme and Uzbek bank cards — in so‘m." },
  { question: "Where do I place the order?", answer: "Open @StarsPaymee_bot in Telegram and choose the «Steam Balance» service." },
  { question: "What is the minimum amount?", answer: "It depends on the service terms. The current information is shown in the bot." },
  { question: "Can I see the final price in advance?", answer: "Yes. The bot shows the final total before you confirm the order." },
  { question: "Which currency is the balance shown in?", answer: "The balance appears in the currency set on your Steam account." },
  { question: "What is Steam Login?", answer: "It's the sign‑in name chosen when creating the Steam account. It differs from the profile name — more in a separate article." },
  { question: "What can I spend the balance on?", answer: "Games, DLC, Steam Market items, soundtracks and some in‑game purchases." },
  { question: "Does the balance expire?", answer: "Usually not — the funds stay on your account." },
  { question: "Can I withdraw the balance as cash?", answer: "No. Steam Wallet funds are generally not refunded as cash and are used inside Steam." },
  { question: "Is it worth topping up before a sale?", answer: "Yes. With a balance ready for the summer or winter sale you won't miss a discount." },
  { question: "Is the payment safe?", answer: "Payment goes through local systems. Use only a trusted service and never share your password." },
  { question: "What if the balance doesn't arrive?", answer: "Wait a few minutes, check the account details, then message @StarsPaymeeSupport with the order ID." },
  { question: "Can I top up several accounts?", answer: "Yes. In each order you specify the account details you need." },
  { question: "Can I top up a friend's account?", answer: "Yes, if you enter their account details correctly." },
  { question: "Does the bot work 24/7?", answer: "Yes. You can place an order at any time." },
  { question: "Who do I contact for help?", answer: "@StarsPaymeeSupport — with an order ID you'll be helped faster." },
];

export const post: AeoPost = {
  slug: SLUG,
  category: "Steam",
  type: "howto",
  datePublished: "2026-07-31",
  dateModified: "2026-07-31",
  keywords: [
    "steam balansini to‘ldirish",
    "o‘zbek so‘mida steam",
    "steam uzs",
    "steam top up uzbekistan",
    "steam wallet to‘ldirish",
    "steam uzcard humo",
  ],
  howToSteps: [
    { name: "Botni oching", text: "Telegramda @StarsPaymee_bot botini ishga tushiring." },
    { name: "Steam Balance ni tanlang", text: "Xizmatlar ro‘yxatidan Steam balansini to‘ldirishni tanlang." },
    { name: "Hisob ma’lumotlarini kiriting", text: "Steam Login yoki bot so‘ragan ma’lumotni kiriting." },
    { name: "Summani tanlang", text: "To‘ldirmoqchi bo‘lgan miqdorni belgilang." },
    { name: "To‘lovni amalga oshiring", text: "UzCard, HUMO, Click yoki Payme orqali so‘mda to‘lang." },
    { name: "Balansni tekshiring", text: "Bir necha daqiqada mablag‘ Steam hisobingizga tushadi." },
  ],
  locales: {
    uz: {
      title: "O‘zbek so‘mida Steam balansini to‘ldirish — eng qulay usul",
      excerpt:
        "Steam balansini O‘zbek so‘mi orqali tez va xavfsiz to‘ldiring. UzCard, HUMO, Click va Payme bilan Steam Wallet’ga mablag‘ qo‘shing — 6 qadamlik qo‘llanma va 20 savol-javob.",
      metaTitle: "O‘zbek so‘mida Steam balansini to‘ldirish | StarsPaymee",
      metaDescription:
        "Steam balansini O‘zbek so‘mi orqali tez va xavfsiz to‘ldiring. UzCard, HUMO va boshqa qulay to‘lov usullari bilan Steam Wallet’ga mablag‘ qo‘shing.",
      answerTitle: "Qisqa javob",
      Answer: UzAnswer,
      Body: UzBody,
      ctaHeading: "Steam balansini hoziroq to‘ldiring",
      ctaBody: "@StarsPaymee_bot orqali so‘mda to‘lang — mablag‘ bir necha daqiqada Steam hisobingizda.",
      faq: uzFaq,
    },
    ru: {
      title: "Пополнение баланса Steam в узбекских сумах — самый удобный способ",
      excerpt:
        "Пополняйте баланс Steam в сумах быстро и безопасно. Добавляйте средства в Steam Wallet через UzCard, HUMO, Click и Payme — гайд из 6 шагов и 20 вопросов‑ответов.",
      metaTitle: "Пополнение баланса Steam в узбекских сумах | StarsPaymee",
      metaDescription:
        "Пополняйте баланс Steam в узбекских сумах быстро и безопасно. Добавляйте средства в Steam Wallet через UzCard, HUMO и другие удобные способы оплаты.",
      answerTitle: "Краткий ответ",
      Answer: RuAnswer,
      Body: RuBody,
      ctaHeading: "Пополните баланс Steam сейчас",
      ctaBody: "Оплатите в сумах через @StarsPaymee_bot — средства поступят на Steam за несколько минут.",
      faq: ruFaq,
    },
    en: {
      title: "Topping up your Steam balance in Uzbek so‘m — the easiest way",
      excerpt:
        "Top up your Steam balance in so‘m quickly and safely. Add funds to your Steam Wallet with UzCard, HUMO, Click and Payme — a 6‑step guide and 20 Q&A.",
      metaTitle: "Top up your Steam balance in Uzbek so‘m | StarsPaymee",
      metaDescription:
        "Top up your Steam balance in Uzbek so‘m quickly and safely. Add funds to your Steam Wallet with UzCard, HUMO and other convenient payment methods.",
      answerTitle: "Short answer",
      Answer: EnAnswer,
      Body: EnBody,
      ctaHeading: "Top up your Steam balance now",
      ctaBody: "Pay in so‘m via @StarsPaymee_bot — funds reach your Steam account within minutes.",
      faq: enFaq,
    },
  },
};
