import { Link } from "@/i18n/navigation";
import { InlineCta, Sources, KeyFacts, Steps, Step } from "@/components/blog/aeo-blocks";
import type { AeoPost } from "@/lib/blog-aeo/types";

const SLUG = "steam-wallet-humo-orqali-toldirish";

/* ---------------- UZ ---------------- */
function UzAnswer() {
  return (
    <p>
      Ha, Humo kartasi bilan Steam Wallet balansini to‘ldirish mumkin. @StarsPaymee_bot da «Steam Balance» xizmatini
      tanlab, hisob ma’lumotlarini kiritasiz, summani belgilaysiz va Humo orqali so‘mda to‘laysiz. Xalqaro karta
      kerak emas, buyurtma odatda bir necha daqiqada bajariladi.
    </p>
  );
}

function UzBody() {
  return (
    <>
      <h2 id="mumkinmi">Humo orqali Steam balansini to‘ldirish mumkinmi?</h2>
      <p>
        Ha. Agar sizda Humo kartasi bo‘lsa, <Link href="/blog/steam-wallet-nima">Steam Wallet</Link> balansini
        mahalliy to‘lov xizmatlari orqali to‘ldirishingiz mumkin. Masalan,{" "}
        <a href="https://t.me/StarsPaymee_bot" target="_blank" rel="noopener noreferrer">@StarsPaymee_bot</a> orqali
        buyurtma berib, Humo kartasi yordamida to‘lovni amalga oshirish mumkin.
      </p>

      <h2 id="bosqichlar">To‘ldirish bosqichlari</h2>
      <Steps>
        <Step title="1. Botni ishga tushiring">Telegramda @StarsPaymee_bot ni oching.</Step>
        <Step title="2. Steam xizmatini tanlang">
          Kerakli xizmatni tanlab, hisob ma’lumotlarini kiriting —{" "}
          <Link href="/blog/steam-login-nima">Steam Login nima?</Link>
        </Step>
        <Step title="3. Summani belgilang">Kerakli miqdorni tanlang va yakuniy narxni tekshiring.</Step>
        <Step title="4. Humo orqali to‘lov qiling">Mahalliy to‘lov usulidan foydalanib so‘mda to‘lang.</Step>
        <Step title="5. Balansni tekshiring">Buyurtma bajarilgach, Steam hisobingizdagi balansni tekshiring.</Step>
      </Steps>

      <InlineCta text="Humo kartangiz bilan to‘lamoqchimisiz? Botda buyurtma bering." />

      <h2 id="afzallik">Humo orqali to‘lovning afzalliklari</h2>
      <KeyFacts label="Afzalliklar">
        <li>O‘zbek so‘mida hisob-kitob.</li>
        <li>Qulay mahalliy karta — xalqaro karta shart emas.</li>
        <li>Tez buyurtma va oson foydalanish.</li>
        <li>Bank bildirishnomalari va OTP odatdagidek ishlaydi.</li>
      </KeyFacts>

      <h2 id="xavfsizlik">Xavfsizlik bo‘yicha tavsiyalar</h2>
      <ul>
        <li>Hisob ma’lumotlarini diqqat bilan kiriting.</li>
        <li>Parolingizni hech kimga bermang.</li>
        <li>Faqat ishonchli servislar orqali to‘lov qiling.</li>
        <li>Steam Guard himoyasini yoqib qo‘ying.</li>
      </ul>
      <p>
        UzCard kartangiz bo‘lsa —{" "}
        <Link href="/blog/steam-wallet-uzcard-orqali-toldirish">UzCard orqali to‘ldirish</Link>. Muammo yuzaga
        kelsa: <Link href="/blog/steam-balansi-tushmadi">balans tushmasa nima qilish kerak</Link>.
      </p>

      <Sources
        label="Manbalar"
        items={[
          { href: "https://store.steampowered.com/", label: "store.steampowered.com", note: "Steam rasmiy do‘koni" },
          { href: "https://humocard.uz/", label: "humocard.uz", note: "HUMO to‘lov tizimi" },
        ]}
      />
    </>
  );
}

/* ---------------- RU ---------------- */
function RuAnswer() {
  return (
    <p>
      Да, баланс Steam Wallet можно пополнить картой Humo. В @StarsPaymee_bot выберите услугу «Steam Balance»,
      введите данные аккаунта, укажите сумму и оплатите через Humo в сумах. Международная карта не нужна, заказ
      обычно выполняется за несколько минут.
    </p>
  );
}

function RuBody() {
  return (
    <>
      <h2 id="mumkinmi">Можно ли пополнить Steam через Humo?</h2>
      <p>
        Да. Если у вас есть карта Humo, вы можете пополнить баланс{" "}
        <Link href="/blog/steam-wallet-nima">Steam Wallet</Link> через локальные платёжные сервисы. Например, оформив
        заказ через <a href="https://t.me/StarsPaymee_bot" target="_blank" rel="noopener noreferrer">@StarsPaymee_bot</a>,
        можно оплатить картой Humo.
      </p>

      <h2 id="bosqichlar">Этапы пополнения</h2>
      <Steps>
        <Step title="1. Запустите бота">Откройте @StarsPaymee_bot в Telegram.</Step>
        <Step title="2. Выберите услугу Steam">
          Выберите нужную услугу и введите данные аккаунта —{" "}
          <Link href="/blog/steam-login-nima">что такое Steam Login?</Link>
        </Step>
        <Step title="3. Укажите сумму">Выберите нужный размер и проверьте итоговую цену.</Step>
        <Step title="4. Оплатите через Humo">Оплатите в сумах локальным способом.</Step>
        <Step title="5. Проверьте баланс">После выполнения заказа проверьте баланс в аккаунте Steam.</Step>
      </Steps>

      <InlineCta text="Хотите оплатить картой Humo? Оформите заказ в боте." />

      <h2 id="afzallik">Преимущества оплаты через Humo</h2>
      <KeyFacts label="Преимущества">
        <li>Расчёты в узбекских сумах.</li>
        <li>Удобная локальная карта — международная не нужна.</li>
        <li>Быстрый заказ и простое использование.</li>
        <li>Банковские уведомления и OTP работают как обычно.</li>
      </KeyFacts>

      <h2 id="xavfsizlik">Рекомендации по безопасности</h2>
      <ul>
        <li>Внимательно вводите данные аккаунта.</li>
        <li>Никому не сообщайте пароль.</li>
        <li>Платите только через надёжные сервисы.</li>
        <li>Включите защиту Steam Guard.</li>
      </ul>
      <p>
        Если у вас карта UzCard —{" "}
        <Link href="/blog/steam-wallet-uzcard-orqali-toldirish">пополнение через UzCard</Link>. При проблеме:{" "}
        <Link href="/blog/steam-balansi-tushmadi">что делать, если баланс не пришёл</Link>.
      </p>

      <Sources
        label="Источники"
        items={[
          { href: "https://store.steampowered.com/", label: "store.steampowered.com", note: "официальный магазин Steam" },
          { href: "https://humocard.uz/", label: "humocard.uz", note: "платёжная система HUMO" },
        ]}
      />
    </>
  );
}

/* ---------------- EN ---------------- */
function EnAnswer() {
  return (
    <p>
      Yes, you can top up your Steam Wallet balance with a Humo card. In @StarsPaymee_bot choose the «Steam Balance»
      service, enter your account details, pick an amount and pay via Humo in so‘m. No international card is needed
      and the order is usually completed within a few minutes.
    </p>
  );
}

function EnBody() {
  return (
    <>
      <h2 id="mumkinmi">Can you top up Steam via Humo?</h2>
      <p>
        Yes. If you have a Humo card, you can top up your{" "}
        <Link href="/blog/steam-wallet-nima">Steam Wallet</Link> balance through local payment services. For example,
        by ordering via{" "}
        <a href="https://t.me/StarsPaymee_bot" target="_blank" rel="noopener noreferrer">@StarsPaymee_bot</a> you can
        pay with a Humo card.
      </p>

      <h2 id="bosqichlar">Top‑up steps</h2>
      <Steps>
        <Step title="1. Launch the bot">Open @StarsPaymee_bot in Telegram.</Step>
        <Step title="2. Choose the Steam service">
          Select the service and enter your account details —{" "}
          <Link href="/blog/steam-login-nima">what is Steam Login?</Link>
        </Step>
        <Step title="3. Set the amount">Choose the amount and check the final price.</Step>
        <Step title="4. Pay via Humo">Pay in so‘m using the local method.</Step>
        <Step title="5. Check the balance">Once the order is done, check the balance in your Steam account.</Step>
      </Steps>

      <InlineCta text="Want to pay with your Humo card? Place an order in the bot." />

      <h2 id="afzallik">Advantages of paying via Humo</h2>
      <KeyFacts label="Advantages">
        <li>Settlement in Uzbek so‘m.</li>
        <li>A convenient local card — no international one needed.</li>
        <li>Fast ordering and easy use.</li>
        <li>Bank notifications and OTP work as usual.</li>
      </KeyFacts>

      <h2 id="xavfsizlik">Safety recommendations</h2>
      <ul>
        <li>Enter account details carefully.</li>
        <li>Never share your password.</li>
        <li>Pay only through trusted services.</li>
        <li>Enable Steam Guard protection.</li>
      </ul>
      <p>
        If you have a UzCard, see{" "}
        <Link href="/blog/steam-wallet-uzcard-orqali-toldirish">topping up via UzCard</Link>. If something goes wrong:{" "}
        <Link href="/blog/steam-balansi-tushmadi">what to do if the balance doesn't arrive</Link>.
      </p>

      <Sources
        label="Sources"
        items={[
          { href: "https://store.steampowered.com/", label: "store.steampowered.com", note: "official Steam store" },
          { href: "https://humocard.uz/", label: "humocard.uz", note: "HUMO payment system" },
        ]}
      />
    </>
  );
}

const uzFaq = [
  { question: "Humo bilan Steam balansini to‘ldirsa bo‘ladimi?", answer: "Ha. @StarsPaymee_bot orqali buyurtma berib, Humo kartasi bilan so‘mda to‘lashingiz mumkin." },
  { question: "Humo kartasi bilan to‘lov tez amalga oshadimi?", answer: "Ko‘p hollarda buyurtma qisqa vaqt ichida qayta ishlanadi." },
  { question: "Steam Wallet balansi qaysi valyutada tushadi?", answer: "Balans Steam hisobingizning o‘rnatilgan valyutasiga muvofiq aks etadi." },
  { question: "Humo bilan xalqaro karta kerak bo‘ladimi?", answer: "Yo‘q. Mahalliy servis orqali to‘lov qilsangiz, qo‘shimcha xalqaro karta talab qilinmaydi." },
  { question: "Minimal summa qancha?", answer: "Xizmat shartlariga bog‘liq; aniq ma’lumot botda ko‘rsatiladi." },
  { question: "Steam paroli so‘raladimi?", answer: "Yo‘q. Parolingizni hech qachon begona xizmatlarga bermang." },
  { question: "OTP kodi keladimi?", answer: "Ha, bank tasdiqlash kodi odatdagidek yuboriladi." },
  { question: "To‘lov o‘tmasa nima qilaman?", answer: "Karta limitini va bank bloklarini tekshirib, qayta urinib ko‘ring." },
  { question: "Balans tushmasa-chi?", answer: "Kuting, ma’lumotlarni tekshiring, so‘ng buyurtma ID bilan qo‘llab-quvvatlashga yozing." },
  { question: "UzCard bilan ham to‘lasa bo‘ladimi?", answer: "Ha, UzCard uchun alohida qo‘llanma mavjud." },
  { question: "Click va Payme qo‘llab-quvvatlanadimi?", answer: "Ha, ular ham mavjud." },
  { question: "Buyurtma holatini qanday ko‘raman?", answer: "Botda buyurtma holatini kuzatishingiz mumkin." },
  { question: "Do‘stimning hisobini to‘ldirsam bo‘ladimi?", answer: "Ha, uning hisob ma’lumotlarini to‘g‘ri kiritsangiz." },
  { question: "Komissiya bormi?", answer: "Yakuniy summa botda ko‘rsatiladi — to‘lovdan oldin tekshiring." },
  { question: "Steam Guard nima?", answer: "Steam hisobingiz uchun ikki bosqichli himoya tizimi." },
  { question: "Balansni nimalarga ishlataman?", answer: "O‘yin, DLC, Market buyumlari va ayrim o‘yin ichidagi xaridlar uchun." },
  { question: "Chegirmalar oldidan to‘ldirsam bo‘ladimi?", answer: "Ha, aksiyalar davrida balans tayyor bo‘lgani foydali." },
  { question: "Bot 24/7 ishlaydimi?", answer: "Ha, istalgan vaqtda buyurtma berishingiz mumkin." },
  { question: "Bir nechta hisobga to‘ldirsa bo‘ladimi?", answer: "Ha, har bir buyurtmada kerakli hisob ma’lumotini ko‘rsatasiz." },
  { question: "Yordam kerak bo‘lsa kimga yozaman?", answer: "@StarsPaymeeSupport — buyurtma ID bilan." },
];

const ruFaq = [
  { question: "Можно ли пополнить Steam картой Humo?", answer: "Да. Оформив заказ через @StarsPaymee_bot, можно оплатить картой Humo в сумах." },
  { question: "Быстро ли проходит оплата картой Humo?", answer: "В большинстве случаев заказ обрабатывается за короткое время." },
  { question: "В какой валюте поступает баланс Steam Wallet?", answer: "Баланс отображается в валюте, установленной в вашем аккаунте Steam." },
  { question: "Нужна ли международная карта при оплате Humo?", answer: "Нет. При оплате через локальный сервис международная карта не требуется." },
  { question: "Какая минимальная сумма?", answer: "Зависит от условий сервиса; точные данные показываются в боте." },
  { question: "Запрашивается ли пароль Steam?", answer: "Нет. Никогда не сообщайте пароль посторонним сервисам." },
  { question: "Придёт ли OTP‑код?", answer: "Да, код подтверждения банка приходит как обычно." },
  { question: "Что если оплата не проходит?", answer: "Проверьте лимит карты и блокировки банка, затем попробуйте снова." },
  { question: "А если баланс не пришёл?", answer: "Подождите, проверьте данные, затем напишите в поддержку с ID заказа." },
  { question: "Можно ли оплатить картой UzCard?", answer: "Да, для UzCard есть отдельное руководство." },
  { question: "Поддерживаются ли Click и Payme?", answer: "Да, они также доступны." },
  { question: "Как посмотреть статус заказа?", answer: "Статус можно отслеживать в боте." },
  { question: "Можно ли пополнить аккаунт друга?", answer: "Да, если правильно указать его данные аккаунта." },
  { question: "Есть ли комиссия?", answer: "Итоговая сумма показывается в боте — проверьте перед оплатой." },
  { question: "Что такое Steam Guard?", answer: "Система двухфакторной защиты вашего аккаунта Steam." },
  { question: "На что потратить баланс?", answer: "На игры, DLC, предметы Market и некоторые внутриигровые покупки." },
  { question: "Можно ли пополнять перед распродажей?", answer: "Да, готовый баланс к акции — это удобно." },
  { question: "Бот работает круглосуточно?", answer: "Да, заказ можно оформить в любое время." },
  { question: "Можно ли пополнять несколько аккаунтов?", answer: "Да, в каждом заказе указываете нужные данные аккаунта." },
  { question: "Куда писать за помощью?", answer: "@StarsPaymeeSupport — с ID заказа." },
];

const enFaq = [
  { question: "Can I top up Steam with a Humo card?", answer: "Yes. By ordering via @StarsPaymee_bot you can pay with a Humo card in so‘m." },
  { question: "Is paying with Humo fast?", answer: "In most cases the order is processed within a short time." },
  { question: "Which currency does the Steam Wallet balance arrive in?", answer: "The balance appears in the currency set on your Steam account." },
  { question: "Do I need an international card when paying with Humo?", answer: "No. When paying through a local service no international card is required." },
  { question: "What is the minimum amount?", answer: "It depends on the service terms; exact details are shown in the bot." },
  { question: "Is a Steam password requested?", answer: "No. Never give your password to unknown services." },
  { question: "Will I get an OTP code?", answer: "Yes, the bank confirmation code arrives as usual." },
  { question: "What if the payment fails?", answer: "Check your card limit and bank blocks, then try again." },
  { question: "And if the balance doesn't arrive?", answer: "Wait, check the details, then message support with the order ID." },
  { question: "Can I pay with UzCard?", answer: "Yes, there's a separate guide for UzCard." },
  { question: "Are Click and Payme supported?", answer: "Yes, they're available too." },
  { question: "How do I check the order status?", answer: "You can track the status in the bot." },
  { question: "Can I top up a friend's account?", answer: "Yes, if you enter their account details correctly." },
  { question: "Is there a fee?", answer: "The final total is shown in the bot — check before paying." },
  { question: "What is Steam Guard?", answer: "A two‑factor protection system for your Steam account." },
  { question: "What can I spend the balance on?", answer: "Games, DLC, Market items and some in‑game purchases." },
  { question: "Can I top up before a sale?", answer: "Yes, having a balance ready for a sale is convenient." },
  { question: "Does the bot work 24/7?", answer: "Yes, you can order at any time." },
  { question: "Can I top up several accounts?", answer: "Yes, in each order you specify the account details you need." },
  { question: "Who do I contact for help?", answer: "@StarsPaymeeSupport — with the order ID." },
];

export const post: AeoPost = {
  slug: SLUG,
  category: "Steam",
  type: "howto",
  datePublished: "2026-07-26",
  dateModified: "2026-07-26",
  keywords: [
    "steam humo",
    "steam wallet humo",
    "humo bilan steam to‘ldirish",
    "steam top up humo",
    "steam balans humo",
    "steam uzbekistan humo",
  ],
  howToSteps: [
    { name: "Botni ishga tushiring", text: "Telegramda @StarsPaymee_bot ni oching." },
    { name: "Steam xizmatini tanlang", text: "Xizmatni tanlab, hisob ma’lumotlarini kiriting." },
    { name: "Summani belgilang", text: "Kerakli miqdorni tanlang va yakuniy narxni tekshiring." },
    { name: "Humo orqali to‘lang", text: "Mahalliy to‘lov usulidan foydalanib so‘mda to‘lang." },
    { name: "Balansni tekshiring", text: "Buyurtma bajarilgach Steam balansini tekshiring." },
  ],
  locales: {
    uz: {
      title: "Steam Wallet’ni Humo orqali to‘ldirish — 2026 qo‘llanma",
      excerpt:
        "Steam Wallet balansini Humo kartasi orqali qanday to‘ldirish mumkin? Bosqichma-bosqich qo‘llanma, afzalliklar, xavfsizlik tavsiyalari va 20 savol-javob.",
      metaTitle: "Steam Wallet’ni Humo orqali to‘ldirish | 2026 Qo‘llanma",
      metaDescription:
        "Steam Wallet balansini Humo kartasi orqali qanday to‘ldirish mumkin? O‘zbekistondagi foydalanuvchilar uchun batafsil qo‘llanma.",
      answerTitle: "Qisqa javob",
      Answer: UzAnswer,
      Body: UzBody,
      ctaHeading: "Humo bilan to‘ldiring",
      ctaBody: "@StarsPaymee_bot orqali so‘mda to‘lang — balans bir necha daqiqada tushadi.",
      faq: uzFaq,
    },
    ru: {
      title: "Пополнение Steam Wallet через Humo — руководство 2026",
      excerpt:
        "Как пополнить баланс Steam Wallet картой Humo? Пошаговое руководство, преимущества, рекомендации по безопасности и 20 вопросов‑ответов.",
      metaTitle: "Пополнение Steam Wallet через Humo | Руководство 2026",
      metaDescription:
        "Как пополнить баланс Steam Wallet картой Humo? Подробное руководство для пользователей из Узбекистана.",
      answerTitle: "Краткий ответ",
      Answer: RuAnswer,
      Body: RuBody,
      ctaHeading: "Пополните через Humo",
      ctaBody: "Оплатите в сумах через @StarsPaymee_bot — баланс поступит за несколько минут.",
      faq: ruFaq,
    },
    en: {
      title: "Topping up Steam Wallet via Humo — a 2026 guide",
      excerpt:
        "How to top up your Steam Wallet balance with a Humo card? A step‑by‑step guide, benefits, safety recommendations and 20 Q&A.",
      metaTitle: "Topping up Steam Wallet via Humo | 2026 guide",
      metaDescription:
        "How can you top up your Steam Wallet balance with a Humo card? A detailed guide for users in Uzbekistan.",
      answerTitle: "Short answer",
      Answer: EnAnswer,
      Body: EnBody,
      ctaHeading: "Top up with Humo",
      ctaBody: "Pay in so‘m via @StarsPaymee_bot — the balance arrives within minutes.",
      faq: enFaq,
    },
  },
};
