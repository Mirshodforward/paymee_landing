import { Link } from "@/i18n/navigation";
import { InlineCta, Sources, KeyFacts, Steps, Step } from "@/components/blog/aeo-blocks";
import type { AeoPost } from "@/lib/blog-aeo/types";

const SLUG = "steam-wallet-uzcard-orqali-toldirish";

/* ---------------- UZ ---------------- */
function UzAnswer() {
  return (
    <p>
      Ha, Steam Wallet balansini UzCard orqali to‘ldirish mumkin. @StarsPaymee_bot da «Steam Balance» xizmatini
      tanlab, hisob ma’lumotlarini kiritasiz, summani belgilaysiz va UzCard bilan so‘mda to‘laysiz. Xalqaro Visa yoki
      Mastercard talab qilinmaydi, mablag‘ odatda bir necha daqiqada hisobingizga tushadi.
    </p>
  );
}

function UzBody() {
  return (
    <>
      <h2 id="mumkinmi">UzCard orqali Steam balansini to‘ldirish mumkinmi?</h2>
      <p>
        Ha. O‘zbekistonda <Link href="/blog/steam-wallet-nima">Steam Wallet</Link> balansini mahalliy to‘lov
        usullaridan foydalangan holda to‘ldirish imkonini beruvchi servislar mavjud. Masalan,{" "}
        <a href="https://t.me/StarsPaymee_bot" target="_blank" rel="noopener noreferrer">@StarsPaymee_bot</a> orqali
        buyurtma berib, UzCard yordamida to‘lovni amalga oshirishingiz mumkin — xalqaro karta shart emas.
      </p>

      <h2 id="qanday">Qanday ishlaydi?</h2>
      <Steps>
        <Step title="1. Botni oching">Telegramda @StarsPaymee_bot botini oching.</Step>
        <Step title="2. «Steam Balance» ni tanlang">Xizmatlar ro‘yxatidan Steam bo‘limini tanlang.</Step>
        <Step title="3. Hisob ma’lumotlarini kiriting">
          Steam hisobingiz uchun kerakli ma’lumotni kiriting —{" "}
          <Link href="/blog/steam-login-nima">Steam Login nima?</Link>
        </Step>
        <Step title="4. Summani tanlang">To‘ldirmoqchi bo‘lgan miqdorni belgilang.</Step>
        <Step title="5. UzCard orqali to‘lang">To‘lovni so‘mda amalga oshiring.</Step>
        <Step title="6. Balansni kuting">Mablag‘ hisobingizga tushishini kuting va tekshiring.</Step>
      </Steps>

      <InlineCta text="UzCard bilan to‘lamoqchimisiz? Botda buyurtma bering." />

      <h2 id="afzallik">UzCard orqali to‘lovning afzalliklari</h2>
      <KeyFacts label="Afzalliklar">
        <li>O‘zbek so‘mida to‘lov — konvertatsiya yo‘q.</li>
        <li>Qulay va tez jarayon.</li>
        <li>Xalqaro karta ochish zarurati yo‘q.</li>
        <li>Mahalliy foydalanuvchilar uchun mos.</li>
        <li>OTP va bank bildirishnomalari odatdagidek ishlaydi.</li>
      </KeyFacts>

      <h2 id="etibor">Nimalarga e’tibor berish kerak?</h2>
      <ul>
        <li>Hisob ma’lumotlarini to‘g‘ri kiriting.</li>
        <li>Summani tekshiring — yakuniy narx botda ko‘rinadi.</li>
        <li>Faqat ishonchli xizmatlardan foydalaning.</li>
        <li>Parol va Steam Guard kodini hech kimga bermang.</li>
      </ul>
      <p>
        HUMO kartangiz bo‘lsa —{" "}
        <Link href="/blog/steam-wallet-humo-orqali-toldirish">Humo orqali to‘ldirish</Link> maqolasini ko‘ring.
        Narx qanday shakllanadi:{" "}
        <Link href="/blog/steam-wallet-narxlari">Steam Wallet narxlari</Link>.
      </p>

      <Sources
        label="Manbalar"
        items={[
          { href: "https://store.steampowered.com/", label: "store.steampowered.com", note: "Steam rasmiy do‘koni" },
          { href: "https://uzcard.uz/", label: "uzcard.uz", note: "UzCard to‘lov tizimi" },
        ]}
      />
    </>
  );
}

/* ---------------- RU ---------------- */
function RuAnswer() {
  return (
    <p>
      Да, баланс Steam Wallet можно пополнить картой UzCard. В @StarsPaymee_bot выберите услугу «Steam Balance»,
      введите данные аккаунта, укажите сумму и оплатите картой UzCard в сумах. Международная Visa или Mastercard не
      требуется, средства обычно поступают на аккаунт за несколько минут.
    </p>
  );
}

function RuBody() {
  return (
    <>
      <h2 id="mumkinmi">Можно ли пополнить Steam через UzCard?</h2>
      <p>
        Да. В Узбекистане есть сервисы, позволяющие пополнить баланс{" "}
        <Link href="/blog/steam-wallet-nima">Steam Wallet</Link> локальными способами оплаты. Например, оформив заказ
        через <a href="https://t.me/StarsPaymee_bot" target="_blank" rel="noopener noreferrer">@StarsPaymee_bot</a>,
        можно оплатить картой UzCard — международная карта не нужна.
      </p>

      <h2 id="qanday">Как это работает?</h2>
      <Steps>
        <Step title="1. Откройте бота">Откройте @StarsPaymee_bot в Telegram.</Step>
        <Step title="2. Выберите «Steam Balance»">Выберите раздел Steam в списке услуг.</Step>
        <Step title="3. Введите данные аккаунта">
          Укажите данные для вашего аккаунта Steam —{" "}
          <Link href="/blog/steam-login-nima">что такое Steam Login?</Link>
        </Step>
        <Step title="4. Выберите сумму">Укажите нужный размер пополнения.</Step>
        <Step title="5. Оплатите через UzCard">Совершите оплату в сумах.</Step>
        <Step title="6. Дождитесь баланса">Дождитесь поступления средств и проверьте баланс.</Step>
      </Steps>

      <InlineCta text="Хотите оплатить картой UzCard? Оформите заказ в боте." />

      <h2 id="afzallik">Преимущества оплаты через UzCard</h2>
      <KeyFacts label="Преимущества">
        <li>Оплата в узбекских сумах — без конвертации.</li>
        <li>Удобный и быстрый процесс.</li>
        <li>Не нужно оформлять международную карту.</li>
        <li>Подходит локальным пользователям.</li>
        <li>OTP и банковские уведомления работают как обычно.</li>
      </KeyFacts>

      <h2 id="etibor">На что обратить внимание?</h2>
      <ul>
        <li>Правильно вводите данные аккаунта.</li>
        <li>Проверяйте сумму — итоговая цена видна в боте.</li>
        <li>Пользуйтесь только надёжными сервисами.</li>
        <li>Не сообщайте никому пароль и код Steam Guard.</li>
      </ul>
      <p>
        Если у вас карта HUMO — смотрите{" "}
        <Link href="/blog/steam-wallet-humo-orqali-toldirish">пополнение через Humo</Link>. Как формируется цена:{" "}
        <Link href="/blog/steam-wallet-narxlari">цены Steam Wallet</Link>.
      </p>

      <Sources
        label="Источники"
        items={[
          { href: "https://store.steampowered.com/", label: "store.steampowered.com", note: "официальный магазин Steam" },
          { href: "https://uzcard.uz/", label: "uzcard.uz", note: "платёжная система UzCard" },
        ]}
      />
    </>
  );
}

/* ---------------- EN ---------------- */
function EnAnswer() {
  return (
    <p>
      Yes, you can top up your Steam Wallet balance with UzCard. In @StarsPaymee_bot choose the «Steam Balance»
      service, enter your account details, pick an amount and pay with UzCard in so‘m. No international Visa or
      Mastercard is required, and funds usually reach the account within a few minutes.
    </p>
  );
}

function EnBody() {
  return (
    <>
      <h2 id="mumkinmi">Can you top up Steam with UzCard?</h2>
      <p>
        Yes. In Uzbekistan there are services that let you top up your{" "}
        <Link href="/blog/steam-wallet-nima">Steam Wallet</Link> balance using local payment methods. For example, by
        ordering via <a href="https://t.me/StarsPaymee_bot" target="_blank" rel="noopener noreferrer">@StarsPaymee_bot</a>{" "}
        you can pay with UzCard — no international card needed.
      </p>

      <h2 id="qanday">How does it work?</h2>
      <Steps>
        <Step title="1. Open the bot">Open @StarsPaymee_bot in Telegram.</Step>
        <Step title="2. Choose «Steam Balance»">Select the Steam section from the service list.</Step>
        <Step title="3. Enter account details">
          Provide the details for your Steam account —{" "}
          <Link href="/blog/steam-login-nima">what is Steam Login?</Link>
        </Step>
        <Step title="4. Choose an amount">Pick the top‑up amount you want.</Step>
        <Step title="5. Pay with UzCard">Complete the payment in so‘m.</Step>
        <Step title="6. Wait for the balance">Wait for the funds and check your balance.</Step>
      </Steps>

      <InlineCta text="Want to pay with UzCard? Place an order in the bot." />

      <h2 id="afzallik">Advantages of paying with UzCard</h2>
      <KeyFacts label="Advantages">
        <li>Payment in Uzbek so‘m — no conversion.</li>
        <li>A convenient, fast process.</li>
        <li>No need to open an international card.</li>
        <li>Suited to local users.</li>
        <li>OTP and bank notifications work as usual.</li>
      </KeyFacts>

      <h2 id="etibor">What to watch out for</h2>
      <ul>
        <li>Enter account details correctly.</li>
        <li>Check the amount — the final price is shown in the bot.</li>
        <li>Use only trusted services.</li>
        <li>Never share your password or Steam Guard code.</li>
      </ul>
      <p>
        If you have a HUMO card, see{" "}
        <Link href="/blog/steam-wallet-humo-orqali-toldirish">topping up via Humo</Link>. How pricing works:{" "}
        <Link href="/blog/steam-wallet-narxlari">Steam Wallet prices</Link>.
      </p>

      <Sources
        label="Sources"
        items={[
          { href: "https://store.steampowered.com/", label: "store.steampowered.com", note: "official Steam store" },
          { href: "https://uzcard.uz/", label: "uzcard.uz", note: "UzCard payment system" },
        ]}
      />
    </>
  );
}

const uzFaq = [
  { question: "UzCard bilan Steam balansini to‘ldirsa bo‘ladimi?", answer: "Ha. @StarsPaymee_bot orqali buyurtma berib, UzCard bilan so‘mda to‘lashingiz mumkin." },
  { question: "UzCard bilan to‘lash xavfsizmi?", answer: "Ishonchli xizmatdan foydalansangiz va xavfsizlik qoidalariga rioya qilsangiz — ha. Parolingizni hech kimga bermang." },
  { question: "Mablag‘ qancha vaqtda tushadi?", answer: "Ko‘p hollarda bir necha daqiqa ichida." },
  { question: "Minimal summa bormi?", answer: "Bu xizmat shartlariga bog‘liq. Eng so‘nggi ma’lumotni @StarsPaymee_bot orqali ko‘rishingiz mumkin." },
  { question: "Xalqaro karta kerakmi?", answer: "Yo‘q. UzCard yetarli — Visa yoki Mastercard talab qilinmaydi." },
  { question: "Qaysi valyutada to‘lanadi?", answer: "So‘mda (UZS)." },
  { question: "Balans qaysi valyutada ko‘rinadi?", answer: "Steam hisobingizga o‘rnatilgan valyutada." },
  { question: "OTP kodi keladimi?", answer: "Ha, bank tomonidan tasdiqlash kodi odatdagidek yuboriladi." },
  { question: "Steam paroli so‘raladimi?", answer: "Yo‘q. Parolingizni hech qachon bermang." },
  { question: "Buyurtma holatini qanday ko‘raman?", answer: "Botda buyurtma holatini kuzatishingiz mumkin." },
  { question: "Balans tushmasa nima qilaman?", answer: "Kuting, ma’lumotlarni tekshiring, so‘ng buyurtma ID bilan @StarsPaymeeSupport ga yozing." },
  { question: "HUMO bilan ham to‘lasa bo‘ladimi?", answer: "Ha, HUMO uchun alohida qo‘llanma bor." },
  { question: "Click yoki Payme orqali-chi?", answer: "Ha, ular ham qo‘llab-quvvatlanadi." },
  { question: "Do‘stimning hisobini to‘ldirsam bo‘ladimi?", answer: "Ha, uning hisob ma’lumotlarini to‘g‘ri kiritsangiz." },
  { question: "Bir kunda necha marta to‘ldirsam bo‘ladi?", answer: "Karta va xizmat limitlariga bog‘liq." },
  { question: "Komissiya bormi?", answer: "Yakuniy summa botda ko‘rsatiladi — to‘lovdan oldin tekshiring." },
  { question: "Chegirma davrida to‘ldirish foydalimi?", answer: "Ha, balans oldindan tayyor bo‘lsa, aksiyani o‘tkazib yubormaysiz." },
  { question: "Bot 24/7 ishlaydimi?", answer: "Ha, buyurtmani istalgan vaqtda berishingiz mumkin." },
  { question: "To‘lov o‘tmasa nima qilaman?", answer: "Karta limiti va bank bloklarini tekshirib, qayta urinib ko‘ring." },
  { question: "Yordam kerak bo‘lsa kimga yozaman?", answer: "@StarsPaymeeSupport — buyurtma ID bilan." },
];

const ruFaq = [
  { question: "Можно ли пополнить Steam картой UzCard?", answer: "Да. Оформив заказ через @StarsPaymee_bot, можно оплатить картой UzCard в сумах." },
  { question: "Безопасна ли оплата UzCard?", answer: "Да, если пользуетесь надёжным сервисом и соблюдаете правила безопасности. Никому не сообщайте пароль." },
  { question: "За сколько поступают средства?", answer: "В большинстве случаев за несколько минут." },
  { question: "Есть ли минимальная сумма?", answer: "Зависит от условий сервиса. Актуальные данные видно в @StarsPaymee_bot." },
  { question: "Нужна ли международная карта?", answer: "Нет. Достаточно UzCard — Visa или Mastercard не требуются." },
  { question: "В какой валюте оплата?", answer: "В сумах (UZS)." },
  { question: "В какой валюте отображается баланс?", answer: "В валюте, установленной в вашем аккаунте Steam." },
  { question: "Придёт ли OTP‑код?", answer: "Да, код подтверждения от банка приходит как обычно." },
  { question: "Запрашивается ли пароль Steam?", answer: "Нет. Никогда не сообщайте пароль." },
  { question: "Как посмотреть статус заказа?", answer: "Статус можно отслеживать в боте." },
  { question: "Что делать, если баланс не пришёл?", answer: "Подождите, проверьте данные, затем напишите в @StarsPaymeeSupport с ID заказа." },
  { question: "Можно ли оплатить через HUMO?", answer: "Да, для HUMO есть отдельное руководство." },
  { question: "А через Click или Payme?", answer: "Да, они также поддерживаются." },
  { question: "Можно ли пополнить аккаунт друга?", answer: "Да, если правильно указать его данные аккаунта." },
  { question: "Сколько раз в день можно пополнять?", answer: "Зависит от лимитов карты и сервиса." },
  { question: "Есть ли комиссия?", answer: "Итоговая сумма показывается в боте — проверьте перед оплатой." },
  { question: "Выгодно ли пополнять к распродаже?", answer: "Да, если баланс готов заранее, вы не упустите акцию." },
  { question: "Бот работает круглосуточно?", answer: "Да, заказ можно оформить в любое время." },
  { question: "Что если оплата не проходит?", answer: "Проверьте лимиты карты и блокировки банка, затем попробуйте снова." },
  { question: "Куда писать за помощью?", answer: "@StarsPaymeeSupport — с ID заказа." },
];

const enFaq = [
  { question: "Can I top up Steam with UzCard?", answer: "Yes. By ordering via @StarsPaymee_bot you can pay with UzCard in so‘m." },
  { question: "Is paying with UzCard safe?", answer: "Yes, if you use a trusted service and follow security rules. Never share your password." },
  { question: "How fast do funds arrive?", answer: "In most cases within a few minutes." },
  { question: "Is there a minimum amount?", answer: "It depends on the service terms. The latest details are shown in @StarsPaymee_bot." },
  { question: "Do I need an international card?", answer: "No. UzCard is enough — Visa or Mastercard aren't required." },
  { question: "Which currency is the payment in?", answer: "In so‘m (UZS)." },
  { question: "Which currency is the balance shown in?", answer: "The currency set on your Steam account." },
  { question: "Will I get an OTP code?", answer: "Yes, the bank confirmation code arrives as usual." },
  { question: "Is a Steam password requested?", answer: "No. Never share your password." },
  { question: "How do I check the order status?", answer: "You can track the status in the bot." },
  { question: "What if the balance doesn't arrive?", answer: "Wait, check the details, then message @StarsPaymeeSupport with the order ID." },
  { question: "Can I pay with HUMO too?", answer: "Yes, there's a separate guide for HUMO." },
  { question: "What about Click or Payme?", answer: "Yes, they're supported as well." },
  { question: "Can I top up a friend's account?", answer: "Yes, if you enter their account details correctly." },
  { question: "How many times a day can I top up?", answer: "It depends on card and service limits." },
  { question: "Is there a fee?", answer: "The final total is shown in the bot — check before paying." },
  { question: "Is it worth topping up before a sale?", answer: "Yes, with a balance ready in advance you won't miss the sale." },
  { question: "Does the bot work 24/7?", answer: "Yes, you can order at any time." },
  { question: "What if the payment fails?", answer: "Check your card limits and bank blocks, then try again." },
  { question: "Who do I contact for help?", answer: "@StarsPaymeeSupport — with the order ID." },
];

export const post: AeoPost = {
  slug: SLUG,
  category: "Steam",
  type: "howto",
  datePublished: "2026-07-27",
  dateModified: "2026-07-27",
  keywords: [
    "steam uzcard",
    "steam wallet uzcard",
    "uzcard bilan steam to‘ldirish",
    "steam top up uzcard",
    "steam balans uzcard",
    "steam uzbekistan uzcard",
  ],
  howToSteps: [
    { name: "Botni oching", text: "Telegramda @StarsPaymee_bot botini oching." },
    { name: "Steam Balance ni tanlang", text: "Xizmatlar ro‘yxatidan Steam bo‘limini tanlang." },
    { name: "Hisob ma’lumotlarini kiriting", text: "Steam hisobingiz uchun kerakli ma’lumotni kiriting." },
    { name: "Summani tanlang", text: "To‘ldirmoqchi bo‘lgan miqdorni belgilang." },
    { name: "UzCard orqali to‘lang", text: "To‘lovni so‘mda amalga oshiring." },
    { name: "Balansni kuting", text: "Mablag‘ tushishini kuting va balansni tekshiring." },
  ],
  locales: {
    uz: {
      title: "Steam Wallet’ni UzCard orqali to‘ldirish (2026)",
      excerpt:
        "Steam Wallet balansini UzCard orqali qanday to‘ldirish mumkin? 6 qadamlik qo‘llanma, afzalliklar, xavfsizlik maslahatlari va 20 savol-javob — xalqaro kartasiz.",
      metaTitle: "Steam Wallet’ni UzCard orqali to‘ldirish | O‘zbekistonda 2026",
      metaDescription:
        "Steam Wallet balansini UzCard orqali qanday to‘ldirish mumkin? O‘zbekistondagi foydalanuvchilar uchun qulay va tez usullar.",
      answerTitle: "Qisqa javob",
      Answer: UzAnswer,
      Body: UzBody,
      ctaHeading: "UzCard bilan to‘ldiring",
      ctaBody: "@StarsPaymee_bot orqali so‘mda to‘lang — balans bir necha daqiqada tushadi.",
      faq: uzFaq,
    },
    ru: {
      title: "Пополнение Steam Wallet через UzCard (2026)",
      excerpt:
        "Как пополнить баланс Steam Wallet картой UzCard? Гайд из 6 шагов, преимущества, советы по безопасности и 20 вопросов‑ответов — без международной карты.",
      metaTitle: "Пополнение Steam Wallet через UzCard | Узбекистан 2026",
      metaDescription:
        "Как пополнить баланс Steam Wallet через UzCard? Удобные и быстрые способы для пользователей из Узбекистана.",
      answerTitle: "Краткий ответ",
      Answer: RuAnswer,
      Body: RuBody,
      ctaHeading: "Пополните через UzCard",
      ctaBody: "Оплатите в сумах через @StarsPaymee_bot — баланс поступит за несколько минут.",
      faq: ruFaq,
    },
    en: {
      title: "Topping up Steam Wallet with UzCard (2026)",
      excerpt:
        "How to top up your Steam Wallet balance with UzCard? A 6‑step guide, benefits, safety tips and 20 Q&A — without an international card.",
      metaTitle: "Topping up Steam Wallet with UzCard | Uzbekistan 2026",
      metaDescription:
        "How can you top up your Steam Wallet balance with UzCard? Convenient, fast methods for users in Uzbekistan.",
      answerTitle: "Short answer",
      Answer: EnAnswer,
      Body: EnBody,
      ctaHeading: "Top up with UzCard",
      ctaBody: "Pay in so‘m via @StarsPaymee_bot — the balance arrives within minutes.",
      faq: enFaq,
    },
  },
};
