import { Link } from "@/i18n/navigation";
import { InlineCta, Sources, KeyFacts, Steps, Step, InfoGrid, InfoCard } from "@/components/blog/aeo-blocks";
import { PremiumPlanBoard } from "@/components/blog/premium-plan-board";
import type { AeoPost } from "@/lib/blog-aeo/types";

const SLUG = "premium-olish";

/* ---------------- UZ ---------------- */
function UzAnswer() {
  return (
    <p>
      Telegram Premium olish uchun xalqaro karta shart emas. <b>@StarsPaymee_bot</b> da muddatni tanlaysiz,{" "}
      <b>username</b> ni kiritasiz va UzCard, HUMO, Click yoki Payme orqali so‘mda to‘laysiz. Akkauntga kirish va
      parol <b>talab qilinmaydi</b> — obuna avtomatik faollashadi.
    </p>
  );
}

function UzBody() {
  return (
    <>
      <h2 id="imkoniyat">Telegram Premium qanday imkoniyatlar beradi?</h2>
      <KeyFacts label="Asosiy imkoniyatlar">
        <li>Fayl yuklashda hajm chegarasi <b>4 GB</b> gacha.</li>
        <li>Yuklash va yuborish tezligi cheklovsiz.</li>
        <li>Maxsus premium stikerlar va animatsiyalar.</li>
        <li>Xabarni tahrirlash muddati uzayadi.</li>
        <li>Kanallarga obuna chegarasi oshadi.</li>
        <li>Kanallarda reklama ko‘rsatilmaydi.</li>
        <li>Profil belgisi va noyob avatar animatsiyasi.</li>
      </KeyFacts>

      <h2 id="tarif">Tariflar va narxlar</h2>
      <p>
        Ikkita oqim bor. Ko‘pchilik uchun qulayi — <b>username orqali</b>: akkauntingizga kirish shart emas, faqat
        username yetarli.
      </p>
      <PremiumPlanBoard locale="uz" flow="username" />
      <p>
        Rasmiy faollashtirish talab qilinadigan holatlar uchun alohida oqim mavjud — 1 oylik variant aynan shu yerda:
      </p>
      <PremiumPlanBoard locale="uz" flow="login" />

      <InlineCta text="Muddatni tanlang — yakuniy narx botda ko‘rinadi." />

      <h2 id="qadamlar">Premium olish bosqichlari</h2>
      <Steps>
        <Step title="1. Botni oching">@StarsPaymee_bot.</Step>
        <Step title="2. Muddatni tanlang">3, 6 yoki 12 oy (1 oy — login oqimida).</Step>
        <Step title="3. Username kiriting">Obuna faollashadigan hisob.</Step>
        <Step title="4. So‘mda to‘lang">UzCard, HUMO, Click, Payme yoki Paynet.</Step>
        <Step title="5. Tekshiring">Profilda Premium belgisi paydo bo‘ladi.</Step>
      </Steps>

      <h2 id="kim">Kimlar uchun foydali?</h2>
      <InfoGrid>
        <InfoCard emoji="📁" title="Ko‘p fayl almashadiganlar">
          4 GB limit va cheklovsiz tezlik vaqtni tejaydi.
        </InfoCard>
        <InfoCard emoji="🎬" title="Kontent yaratuvchilar">
          Katta video va arxivlarni bemalol yuborasiz.
        </InfoCard>
        <InfoCard emoji="📢" title="Kanal egalari">
          Ko‘proq obuna va reklamasiz o‘qish tajribasi.
        </InfoCard>
        <InfoCard emoji="⚡" title="Kunlik faol foydalanuvchi">
          Tezlik va qulaylik har kuni seziladi.
        </InfoCard>
      </InfoGrid>

      <p>
        Davomi: <Link href="/blog/telegram-premium-sotib-olish">narxlar va to‘lov usullari</Link>,{" "}
        <Link href="/blog/visa-kartasiz-premium-olish">Visa kartasiz Premium</Link> va{" "}
        <Link href="/blog/bir-oylik-premium-olish">bir oylik variant</Link>.
      </p>

      <Sources
        label="Manbalar"
        items={[
          { href: "https://telegram.org/faq_premium", label: "telegram.org/faq_premium", note: "Telegram Premium rasmiy FAQ" },
          { href: "https://telegram.org/blog", label: "telegram.org/blog", note: "Telegram yangiliklari" },
        ]}
      />
    </>
  );
}

/* ---------------- RU ---------------- */
function RuAnswer() {
  return (
    <p>
      Для покупки Telegram Premium международная карта не нужна. В <b>@StarsPaymee_bot</b> вы выбираете срок,
      указываете <b>username</b> и платите в сумах через UzCard, HUMO, Click или Payme. Вход в аккаунт и пароль{" "}
      <b>не требуются</b> — подписка активируется автоматически.
    </p>
  );
}

function RuBody() {
  return (
    <>
      <h2 id="imkoniyat">Какие возможности даёт Telegram Premium?</h2>
      <KeyFacts label="Основные возможности">
        <li>Лимит загрузки файлов до <b>4 ГБ</b>.</li>
        <li>Скорость загрузки и отправки без ограничений.</li>
        <li>Особые премиум-стикеры и анимации.</li>
        <li>Увеличенный срок редактирования сообщений.</li>
        <li>Больше подписок на каналы.</li>
        <li>Реклама в каналах не показывается.</li>
        <li>Значок профиля и уникальная анимация аватара.</li>
      </KeyFacts>

      <h2 id="tarif">Тарифы и цены</h2>
      <p>
        Есть два сценария. Для большинства удобнее <b>по username</b>: вход в аккаунт не нужен, достаточно имени
        пользователя.
      </p>
      <PremiumPlanBoard locale="ru" flow="username" />
      <p>
        Для случаев, когда требуется официальная активация, есть отдельный сценарий — вариант на 1 месяц именно здесь:
      </p>
      <PremiumPlanBoard locale="ru" flow="login" />

      <InlineCta text="Выберите срок — итоговая цена появится в боте." />

      <h2 id="qadamlar">Этапы покупки Premium</h2>
      <Steps>
        <Step title="1. Откройте бота">@StarsPaymee_bot.</Step>
        <Step title="2. Выберите срок">3, 6 или 12 месяцев (1 месяц — в login-сценарии).</Step>
        <Step title="3. Укажите username">Аккаунт, где активируется подписка.</Step>
        <Step title="4. Оплатите в сумах">UzCard, HUMO, Click, Payme или Paynet.</Step>
        <Step title="5. Проверьте">В профиле появится значок Premium.</Step>
      </Steps>

      <h2 id="kim">Кому это полезно?</h2>
      <InfoGrid>
        <InfoCard emoji="📁" title="Тем, кто часто шлёт файлы">
          Лимит 4 ГБ и скорость без ограничений экономят время.
        </InfoCard>
        <InfoCard emoji="🎬" title="Авторам контента">
          Большие видео и архивы отправляются свободно.
        </InfoCard>
        <InfoCard emoji="📢" title="Владельцам каналов">
          Больше подписок и чтение без рекламы.
        </InfoCard>
        <InfoCard emoji="⚡" title="Активным пользователям">
          Скорость и удобство ощущаются каждый день.
        </InfoCard>
      </InfoGrid>

      <p>
        Далее: <Link href="/blog/telegram-premium-sotib-olish">цены и способы оплаты</Link>,{" "}
        <Link href="/blog/visa-kartasiz-premium-olish">Premium без карты Visa</Link> и{" "}
        <Link href="/blog/bir-oylik-premium-olish">вариант на один месяц</Link>.
      </p>

      <Sources
        label="Источники"
        items={[
          { href: "https://telegram.org/faq_premium", label: "telegram.org/faq_premium", note: "официальный FAQ Telegram Premium" },
          { href: "https://telegram.org/blog", label: "telegram.org/blog", note: "новости Telegram" },
        ]}
      />
    </>
  );
}

/* ---------------- EN ---------------- */
function EnAnswer() {
  return (
    <p>
      You do not need an international card for Telegram Premium. In <b>@StarsPaymee_bot</b> you choose a term, enter
      a <b>username</b> and pay in so‘m with UzCard, HUMO, Click or Payme. Account login and passwords are{" "}
      <b>not required</b> — the subscription activates automatically.
    </p>
  );
}

function EnBody() {
  return (
    <>
      <h2 id="imkoniyat">What does Telegram Premium give you?</h2>
      <KeyFacts label="The main features">
        <li>File upload limit raised to <b>4 GB</b>.</li>
        <li>Unlimited download and upload speed.</li>
        <li>Exclusive premium stickers and animations.</li>
        <li>A longer message editing window.</li>
        <li>A higher channel subscription limit.</li>
        <li>No ads shown in channels.</li>
        <li>A profile badge and a unique avatar animation.</li>
      </KeyFacts>

      <h2 id="tarif">Plans and prices</h2>
      <p>
        There are two flows. The convenient one for most people is <b>by username</b>: no account login is needed,
        just the username.
      </p>
      <PremiumPlanBoard locale="en" flow="username" />
      <p>
        For cases that require official activation there is a separate flow — and the one-month option lives there:
      </p>
      <PremiumPlanBoard locale="en" flow="login" />

      <InlineCta text="Choose a term — the final price appears in the bot." />

      <h2 id="qadamlar">Steps to get Premium</h2>
      <Steps>
        <Step title="1. Open the bot">@StarsPaymee_bot.</Step>
        <Step title="2. Choose a term">3, 6 or 12 months (1 month is in the login flow).</Step>
        <Step title="3. Enter a username">The account the subscription activates on.</Step>
        <Step title="4. Pay in so‘m">UzCard, HUMO, Click, Payme or Paynet.</Step>
        <Step title="5. Check">The Premium badge appears on the profile.</Step>
      </Steps>

      <h2 id="kim">Who benefits most?</h2>
      <InfoGrid>
        <InfoCard emoji="📁" title="Heavy file senders">
          The 4 GB limit and uncapped speed save real time.
        </InfoCard>
        <InfoCard emoji="🎬" title="Content creators">
          Large videos and archives send without friction.
        </InfoCard>
        <InfoCard emoji="📢" title="Channel owners">
          More subscriptions and an ad-free reading experience.
        </InfoCard>
        <InfoCard emoji="⚡" title="Daily active users">
          The speed and convenience show up every day.
        </InfoCard>
      </InfoGrid>

      <p>
        Next: <Link href="/blog/telegram-premium-sotib-olish">prices and payment methods</Link>,{" "}
        <Link href="/blog/visa-kartasiz-premium-olish">Premium without a Visa card</Link> and{" "}
        <Link href="/blog/bir-oylik-premium-olish">the one-month option</Link>.
      </p>

      <Sources
        label="Sources"
        items={[
          { href: "https://telegram.org/faq_premium", label: "telegram.org/faq_premium", note: "official Telegram Premium FAQ" },
          { href: "https://telegram.org/blog", label: "telegram.org/blog", note: "Telegram news" },
        ]}
      />
    </>
  );
}

const uzFaq = [
  { question: "Premium olish uchun xalqaro karta kerakmi?", answer: "Yo‘q. UzCard, HUMO, Click, Payme yoki Paynet yetarli." },
  { question: "Akkauntimga kirish kerakmi?", answer: "Username oqimida yo‘q — faqat username yetarli, parol so‘ralmaydi." },
  { question: "Qanday muddatlar bor?", answer: "3, 6 va 12 oy (username oqimi); 1 va 12 oy (login oqimi)." },
  { question: "Premium qancha vaqtda faollashadi?", answer: "To‘lovdan keyin odatda bir necha daqiqada." },
  { question: "Premium 4 GB fayl beradimi?", answer: "Ha, fayl yuklash chegarasi 4 GB gacha oshadi." },
  { question: "Reklama yo‘qoladimi?", answer: "Ha, ommaviy kanallardagi rasmiy reklama ko‘rsatilmaydi." },
  { question: "Boshqa odamga sovg‘a qilsam bo‘ladimi?", answer: "Ha, buyurtmada uning username’ini ko‘rsating." },
  { question: "Obuna avtomatik uzayadimi?", answer: "Yo‘q, muddat tugagach yangi buyurtma berasiz." },
  { question: "Premium’ni bekor qilsam pul qaytadimi?", answer: "Faollashtirilgan obuna qaytarilmaydi — muddatni oldindan tanlang." },
  { question: "Savol bo‘lsa kimga yozaman?", answer: "@StarsPaymeeSupport kanaliga." },
];

const ruFaq = [
  { question: "Нужна ли международная карта для Premium?", answer: "Нет. Достаточно UzCard, HUMO, Click, Payme или Paynet." },
  { question: "Нужен ли вход в мой аккаунт?", answer: "В сценарии по username — нет, достаточно username, пароль не запрашивается." },
  { question: "Какие сроки доступны?", answer: "3, 6 и 12 месяцев (по username); 1 и 12 месяцев (со входом)." },
  { question: "Как быстро активируется Premium?", answer: "Обычно в течение нескольких минут после оплаты." },
  { question: "Даёт ли Premium файлы по 4 ГБ?", answer: "Да, лимит загрузки файлов повышается до 4 ГБ." },
  { question: "Исчезает ли реклама?", answer: "Да, официальная реклама в публичных каналах не показывается." },
  { question: "Можно ли подарить другому человеку?", answer: "Да, укажите в заказе его username." },
  { question: "Продлевается ли подписка автоматически?", answer: "Нет, после окончания срока оформляется новый заказ." },
  { question: "Вернут ли деньги при отмене Premium?", answer: "Активированная подписка не возвращается — выбирайте срок заранее." },
  { question: "Куда написать при вопросах?", answer: "В канал @StarsPaymeeSupport." },
];

const enFaq = [
  { question: "Do I need an international card for Premium?", answer: "No. UzCard, HUMO, Click, Payme or Paynet is enough." },
  { question: "Do you need to log into my account?", answer: "Not in the username flow — a username is enough and no password is requested." },
  { question: "Which terms are available?", answer: "3, 6 and 12 months (username flow); 1 and 12 months (login flow)." },
  { question: "How quickly does Premium activate?", answer: "Usually within a few minutes of payment." },
  { question: "Does Premium give 4 GB file uploads?", answer: "Yes, the file upload limit rises to 4 GB." },
  { question: "Do ads disappear?", answer: "Yes, official ads in public channels are not shown." },
  { question: "Can I gift it to someone else?", answer: "Yes — give their username when ordering." },
  { question: "Does the subscription renew automatically?", answer: "No; when the term ends you place a new order." },
  { question: "Do I get a refund if I cancel Premium?", answer: "An activated subscription is not refundable — choose the term carefully." },
  { question: "Where do I ask questions?", answer: "In the @StarsPaymeeSupport channel." },
];

export const post: AeoPost = {
  slug: SLUG,
  category: "Premium",
  type: "info",
  datePublished: "2026-08-01",
  dateModified: "2026-08-01",
  keywords: [
    "premium olish",
    "telegram premium olish",
    "premium olish narxi",
    "telegram premium imkoniyatlari",
    "premium olish uzbekistan",
    "premium olish 2026",
  ],
  howToSteps: [
    { name: "Botni oching", text: "@StarsPaymee_bot botini oching." },
    { name: "Muddatni tanlang", text: "3, 6 yoki 12 oylik tarifni tanlang." },
    { name: "Username kiriting", text: "Obuna faollashadigan Telegram hisobini ko‘rsating." },
    { name: "So‘mda to‘lang", text: "UzCard, HUMO, Click, Payme yoki Paynet orqali." },
    { name: "Tekshiring", text: "Profilda Premium belgisi paydo bo‘lishini kuting." },
  ],
  locales: {
    uz: {
      title: "Premium olish — imkoniyatlar va afzalliklar",
      excerpt:
        "Telegram Premium nima beradi va uni O‘zbekistonda qanday olish mumkin? 4 GB fayl, reklamasiz kanal, tariflar va so‘mdagi to‘lov.",
      metaTitle: "Premium olish — imkoniyatlar, tariflar, to‘lov",
      metaDescription:
        "Telegram Premium olish: 4 GB fayl, cheklovsiz tezlik, reklamasiz kanallar. Tariflar, narxlar va UzCard/HUMO/Click orqali so‘mda to‘lov.",
      answerTitle: "Qisqa javob",
      Answer: UzAnswer,
      Body: UzBody,
      ctaHeading: "Premium’ni faollashtiring",
      ctaBody: "@StarsPaymee_bot da muddatni tanlang — username yetarli, parol so‘ralmaydi.",
      faq: uzFaq,
    },
    ru: {
      title: "Покупка Premium — возможности и преимущества",
      excerpt:
        "Что даёт Telegram Premium и как оформить его в Узбекистане? Файлы до 4 ГБ, каналы без рекламы, тарифы и оплата в сумах.",
      metaTitle: "Покупка Premium — возможности, тарифы, оплата",
      metaDescription:
        "Telegram Premium: файлы до 4 ГБ, скорость без ограничений, каналы без рекламы. Тарифы, цены и оплата в сумах через UzCard/HUMO/Click.",
      answerTitle: "Краткий ответ",
      Answer: RuAnswer,
      Body: RuBody,
      ctaHeading: "Активируйте Premium",
      ctaBody: "Выберите срок в @StarsPaymee_bot — достаточно username, пароль не нужен.",
      faq: ruFaq,
    },
    en: {
      title: "Getting Premium — features and advantages",
      excerpt:
        "What Telegram Premium gives you and how to get it in Uzbekistan: 4 GB uploads, ad-free channels, the plans and paying in so‘m.",
      metaTitle: "Getting Premium — features, plans, payment",
      metaDescription:
        "Telegram Premium: 4 GB uploads, uncapped speed, ad-free channels. Plans, prices and payment in so‘m via UzCard/HUMO/Click.",
      answerTitle: "Short answer",
      Answer: EnAnswer,
      Body: EnBody,
      ctaHeading: "Activate Premium",
      ctaBody: "Pick a term in @StarsPaymee_bot — a username is enough, no password needed.",
      faq: enFaq,
    },
  },
};
