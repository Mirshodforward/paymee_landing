import { Link } from "@/i18n/navigation";
import { InlineCta, Sources, KeyFacts, Steps, Step, InfoGrid, InfoCard } from "@/components/blog/aeo-blocks";
import { PremiumPlanBoard } from "@/components/blog/premium-plan-board";
import type { AeoPost } from "@/lib/blog-aeo/types";

const SLUG = "telegram-premium-sovga-qilish";

/* ---------------- UZ ---------------- */
function UzAnswer() {
  return (
    <p>
      Premium’ni boshqa odamga sovg‘a qilish uchun <b>@StarsPaymee_bot</b> da muddatni tanlaysiz va{" "}
      <b>oluvchining username’ini</b> kiritasiz — o‘z hisobingiz emas. To‘lovdan keyin obuna aynan o‘sha hisobda
      faollashadi. Parol yoki kirish ma’lumoti so‘ralmaydi.
    </p>
  );
}

function UzBody() {
  return (
    <>
      <h2 id="nega">Nima uchun Premium yaxshi sovg‘a hisoblanadi?</h2>
      <InfoGrid>
        <InfoCard emoji="🛠️" title="Amaliy foyda">
          Oluvchi kundalik hayotda haqiqiy qulaylikdan foydalanadi.
        </InfoCard>
        <InfoCard emoji="📅" title="Uzoq ta’sir">
          Bir martalik sovg‘adan farqli — oylar davomida foyda beradi.
        </InfoCard>
        <InfoCard emoji="✨" title="Zamonaviy">
          An’anaviy sovg‘alardan ajralib turadigan raqamli tuhfa.
        </InfoCard>
        <InfoCard emoji="🎯" title="Aniq maqsad">
          Faol foydalanuvchiga aynan kerakli narsa.
        </InfoCard>
      </InfoGrid>

      <h2 id="kimga">Kimlarga sovg‘a qilish mumkin?</h2>
      <KeyFacts label="Mos holatlar">
        <li>Tug‘ilgan kun yoki bayram tabrigi sifatida do‘stlarga.</li>
        <li>Faol Telegram foydalanuvchisi bo‘lgan hamkasblarga.</li>
        <li>Kanal yoki bot yaratuvchisiga — ishini rag‘batlantirish uchun.</li>
      </KeyFacts>

      <h2 id="qanday">Sovg‘a qilish jarayoni</h2>
      <Steps>
        <Step title="1. Botga kiring">@StarsPaymee_bot → Premium bo‘limi.</Step>
        <Step title="2. Muddatni tanlang">1, 3, 6 yoki 12 oy.</Step>
        <Step title="3. Oluvchi username’ini kiriting">O‘z username’ingiz emas — oluvchiniki.</Step>
        <Step title="4. To‘lovni bajaring">UzCard, HUMO, Click, Payme yoki Paynet.</Step>
        <Step title="5. Tasdiqlang">Obuna oluvchining hisobida faollashadi.</Step>
      </Steps>

      <PremiumPlanBoard locale="uz" flow="username" />

      <InlineCta text="Sovg‘a uchun muddatni tanlang." />

      <h2 id="muddat">Qanday muddatni tanlash kerak?</h2>
      <p>
        Birinchi marta sovg‘a qilinayotgan bo‘lsa, <b>1 yoki 3 oylik</b> muddat yaxshi boshlang‘ich. Yaqin do‘st yoki
        oila a’zosi uchun esa <b>6 yoki 12 oylik</b> obuna yanada qadrli tuhfa bo‘ladi.
      </p>

      <p>
        Qarang: <Link href="/blog/premium-olish">Premium olish</Link>,{" "}
        <Link href="/blog/telegram-premium-narxi">narxlar</Link> va{" "}
        <Link href="/blog/stars-orqali-sovga-yuborish">Stars orqali sovg‘a</Link>.
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
      Чтобы подарить Premium другому человеку, в <b>@StarsPaymee_bot</b> выберите срок и укажите{" "}
      <b>username получателя</b>, а не свой. После оплаты подписка активируется именно на его аккаунте. Пароль или
      данные для входа не запрашиваются.
    </p>
  );
}

function RuBody() {
  return (
    <>
      <h2 id="nega">Почему Premium — хороший подарок?</h2>
      <InfoGrid>
        <InfoCard emoji="🛠️" title="Практическая польза">
          Получатель ощущает реальное удобство каждый день.
        </InfoCard>
        <InfoCard emoji="📅" title="Долгий эффект">
          В отличие от разового подарка, польза длится месяцами.
        </InfoCard>
        <InfoCard emoji="✨" title="Современно">
          Цифровой подарок, выделяющийся среди традиционных.
        </InfoCard>
        <InfoCard emoji="🎯" title="Точное попадание">
          Именно то, что нужно активному пользователю.
        </InfoCard>
      </InfoGrid>

      <h2 id="kimga">Кому можно подарить?</h2>
      <KeyFacts label="Подходящие случаи">
        <li>Друзьям — на день рождения или праздник.</li>
        <li>Коллегам, которые активно пользуются Telegram.</li>
        <li>Автору канала или бота — чтобы поддержать его работу.</li>
      </KeyFacts>

      <h2 id="qanday">Процесс дарения</h2>
      <Steps>
        <Step title="1. Откройте бота">@StarsPaymee_bot → раздел Premium.</Step>
        <Step title="2. Выберите срок">1, 3, 6 или 12 месяцев.</Step>
        <Step title="3. Укажите username получателя">Не свой, а получателя.</Step>
        <Step title="4. Оплатите">UzCard, HUMO, Click, Payme или Paynet.</Step>
        <Step title="5. Подтвердите">Подписка активируется на аккаунте получателя.</Step>
      </Steps>

      <PremiumPlanBoard locale="ru" flow="username" />

      <InlineCta text="Выберите срок для подарка." />

      <h2 id="muddat">Какой срок выбрать?</h2>
      <p>
        Если дарите впервые, хорошим стартом будет <b>1 или 3 месяца</b>. Для близкого друга или члена семьи{" "}
        <b>6 или 12 месяцев</b> станут ещё более ценным подарком.
      </p>

      <p>
        Смотрите: <Link href="/blog/premium-olish">покупка Premium</Link>,{" "}
        <Link href="/blog/telegram-premium-narxi">цены</Link> и{" "}
        <Link href="/blog/stars-orqali-sovga-yuborish">подарки через Stars</Link>.
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
      To gift Premium to someone else, choose a term in <b>@StarsPaymee_bot</b> and enter the{" "}
      <b>recipient’s username</b> rather than your own. After payment the subscription activates on their account.
      No password or login details are requested.
    </p>
  );
}

function EnBody() {
  return (
    <>
      <h2 id="nega">Why Premium makes a good gift</h2>
      <InfoGrid>
        <InfoCard emoji="🛠️" title="Practical value">
          The recipient feels the convenience every day.
        </InfoCard>
        <InfoCard emoji="📅" title="Lasting effect">
          Unlike a one-off present, the benefit runs for months.
        </InfoCard>
        <InfoCard emoji="✨" title="Modern">
          A digital gift that stands out from traditional ones.
        </InfoCard>
        <InfoCard emoji="🎯" title="Well targeted">
          Exactly what an active user needs.
        </InfoCard>
      </InfoGrid>

      <h2 id="kimga">Who can you gift it to?</h2>
      <KeyFacts label="Good occasions">
        <li>Friends — for a birthday or a holiday.</li>
        <li>Colleagues who use Telegram heavily.</li>
        <li>A channel or bot author — to support their work.</li>
      </KeyFacts>

      <h2 id="qanday">The gifting process</h2>
      <Steps>
        <Step title="1. Open the bot">@StarsPaymee_bot → the Premium section.</Step>
        <Step title="2. Choose a term">1, 3, 6 or 12 months.</Step>
        <Step title="3. Enter the recipient’s username">Theirs, not yours.</Step>
        <Step title="4. Pay">UzCard, HUMO, Click, Payme or Paynet.</Step>
        <Step title="5. Confirm">The subscription activates on their account.</Step>
      </Steps>

      <PremiumPlanBoard locale="en" flow="username" />

      <InlineCta text="Choose a term for the gift." />

      <h2 id="muddat">Which term to pick?</h2>
      <p>
        If it is your first time gifting, <b>1 or 3 months</b> is a good start. For a close friend or family member,{" "}
        <b>6 or 12 months</b> makes a more meaningful present.
      </p>

      <p>
        See: <Link href="/blog/premium-olish">getting Premium</Link>,{" "}
        <Link href="/blog/telegram-premium-narxi">prices</Link> and{" "}
        <Link href="/blog/stars-orqali-sovga-yuborish">gifts via Stars</Link>.
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
  { question: "Premium’ni boshqaga sovg‘a qilsam bo‘ladimi?", answer: "Ha. Buyurtmada oluvchining username’ini ko‘rsating." },
  { question: "Oluvchining paroli kerakmi?", answer: "Yo‘q, faqat username yetarli." },
  { question: "Qaysi muddatni tanlash kerak?", answer: "Birinchi sovg‘a uchun 1–3 oy, yaqin insonga 6–12 oy." },
  { question: "Oluvchi xabar oladimi?", answer: "Obuna faollashgach, uning profilida Premium belgisi paydo bo‘ladi." },
  { question: "Xalqaro karta kerakmi?", answer: "Yo‘q, mahalliy to‘lov usullari yetarli." },
  { question: "Username’ni xato yozsam-chi?", answer: "Obuna o‘sha hisobda faollashadi — to‘lovdan oldin tekshiring." },
  { question: "Sovg‘ani bekor qilsam bo‘ladimi?", answer: "Faollashtirilgan obuna qaytarilmaydi." },
  { question: "Bir vaqtda bir nechta odamga bersam bo‘ladimi?", answer: "Ha, har biri uchun alohida buyurtma bering." },
];

const ruFaq = [
  { question: "Можно ли подарить Premium другому?", answer: "Да. Укажите в заказе username получателя." },
  { question: "Нужен ли пароль получателя?", answer: "Нет, достаточно username." },
  { question: "Какой срок выбрать?", answer: "Для первого подарка 1–3 месяца, близкому человеку 6–12 месяцев." },
  { question: "Получит ли адресат уведомление?", answer: "После активации в его профиле появится значок Premium." },
  { question: "Нужна ли международная карта?", answer: "Нет, достаточно местных способов оплаты." },
  { question: "А если ошибиться в username?", answer: "Подписка активируется на указанном аккаунте — проверяйте до оплаты." },
  { question: "Можно ли отменить подарок?", answer: "Активированная подписка не возвращается." },
  { question: "Можно ли подарить нескольким сразу?", answer: "Да, оформите отдельный заказ на каждого." },
];

const enFaq = [
  { question: "Can I gift Premium to someone else?", answer: "Yes. Give the recipient’s username when ordering." },
  { question: "Do I need their password?", answer: "No, a username is enough." },
  { question: "Which term should I pick?", answer: "1–3 months for a first gift; 6–12 months for someone close." },
  { question: "Does the recipient get a notification?", answer: "Once activated, the Premium badge appears on their profile." },
  { question: "Do I need an international card?", answer: "No, local payment methods are enough." },
  { question: "What if I mistype the username?", answer: "The subscription activates on the account you entered — check before paying." },
  { question: "Can I cancel a gift?", answer: "An activated subscription is not refundable." },
  { question: "Can I gift several people at once?", answer: "Yes — place a separate order for each." },
];

export const post: AeoPost = {
  slug: SLUG,
  category: "Premium",
  type: "howto",
  datePublished: "2026-08-02",
  dateModified: "2026-08-02",
  keywords: [
    "telegram premium sovga qilish",
    "premium sovga",
    "premium hadya qilish",
    "dostga premium olish",
    "telegram premium gift",
    "premium sovga 2026",
  ],
  howToSteps: [
    { name: "Botga kiring", text: "@StarsPaymee_bot dagi Premium bo‘limini oching." },
    { name: "Muddatni tanlang", text: "1, 3, 6 yoki 12 oylik tarifni tanlang." },
    { name: "Oluvchi username’ini kiriting", text: "O‘z username’ingiz emas, oluvchiniki." },
    { name: "To‘lovni bajaring", text: "UzCard, HUMO, Click, Payme yoki Paynet orqali." },
    { name: "Tasdiqlang", text: "Obuna oluvchining hisobida faollashadi." },
  ],
  locales: {
    uz: {
      title: "Telegram Premium sovg‘a qilish — qo‘llanma",
      excerpt:
        "Premium’ni boshqa odamga qanday sovg‘a qilish mumkin: jarayon, qaysi muddatni tanlash va nimalarga e’tibor berish kerak.",
      metaTitle: "Telegram Premium sovg‘a qilish — qo‘llanma",
      metaDescription:
        "Telegram Premium sovg‘a qilish: oluvchi username’i orqali 1, 3, 6 yoki 12 oylik obuna. Parol so‘ralmaydi, to‘lov so‘mda.",
      answerTitle: "Qisqa javob",
      Answer: UzAnswer,
      Body: UzBody,
      ctaHeading: "Premium sovg‘a qiling",
      ctaBody: "@StarsPaymee_bot — oluvchi username’ini kiriting, to‘lov so‘mda.",
      faq: uzFaq,
    },
    ru: {
      title: "Как подарить Telegram Premium — руководство",
      excerpt:
        "Как подарить Premium другому человеку: процесс, какой срок выбрать и на что обратить внимание.",
      metaTitle: "Как подарить Telegram Premium — руководство",
      metaDescription:
        "Как подарить Telegram Premium: подписка на 1, 3, 6 или 12 месяцев по username получателя. Пароль не нужен, оплата в сумах.",
      answerTitle: "Краткий ответ",
      Answer: RuAnswer,
      Body: RuBody,
      ctaHeading: "Подарите Premium",
      ctaBody: "@StarsPaymee_bot — укажите username получателя, оплата в сумах.",
      faq: ruFaq,
    },
    en: {
      title: "Gifting Telegram Premium — a guide",
      excerpt:
        "How to gift Premium to someone else: the process, which term to choose and what to watch out for.",
      metaTitle: "Gifting Telegram Premium — a guide",
      metaDescription:
        "How to gift Telegram Premium: a 1, 3, 6 or 12-month subscription via the recipient’s username. No password needed, paid in so‘m.",
      answerTitle: "Short answer",
      Answer: EnAnswer,
      Body: EnBody,
      ctaHeading: "Gift Premium",
      ctaBody: "@StarsPaymee_bot — enter the recipient’s username and pay in so‘m.",
      faq: enFaq,
    },
  },
};
