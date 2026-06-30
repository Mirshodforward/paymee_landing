import { Link } from "@/i18n/navigation";
import { Steps, Step, InlineCta, KeyFacts, Sources } from "@/components/blog/aeo-blocks";
import type { AeoPost } from "@/lib/blog-aeo/types";

const SLUG = "telegram-premium-sovga-username-orqali";

function UzAnswer() {
  return (
    <p>
      Telegram Premium’ni boshqa odamga sovg‘a qilish uchun uning <strong>@username</strong>’ini bilsangiz kifoya.
      StarsPaymee’da: botni oching → Premium’ni tanlang → qabul qiluvchining @username’ini kiriting → muddatni tanlang
      → so‘mda to‘lang. Premium o‘rtacha <strong>10 soniyada</strong> avtomatik faollashadi — qabul qiluvchining
      paroli, kodi yoki akkauntiga kirish kerak emas.
    </p>
  );
}

function UzBody() {
  return (
    <>
      <h2 id="bosqichlar">Premium’ni username orqali sovg‘a qilish — bosqichma-bosqich</h2>
      <Steps>
        <Step title="Botni oching">
          Telegramda <strong>@StarsPaymee_bot</strong> ni oching yoki Mini App’ni ishga tushiring.
        </Step>
        <Step title="Premium’ni tanlang">Mahsulotlar ichidan «Telegram Premium» bo‘limini tanlang.</Step>
        <Step title="Username’ni kiriting">
          Sovg‘a qiladigan odamning @username’ini yozing. Faqat shu kerak — login, parol yoki SMS-kod emas.
        </Step>
        <Step title="Muddatni tanlang">3, 6 yoki 12 oylik paketni tanlang (sovg‘a uchun ko‘pincha 3 yoki 12 oy olinadi).</Step>
        <Step title="To‘lang va kuting">
          UzCard, HUMO, Click yoki Payme bilan so‘mda to‘lang — Premium ~10 soniyada qabul qiluvchida faollashadi.
        </Step>
      </Steps>

      <InlineCta text="Hoziroq do‘stingizga Premium sovg‘a qiling — username yetarli." />

      <h2 id="nega-username">Nega faqat username yetarli?</h2>
      <p>
        «Username bilan» oqimda Premium to‘g‘ridan-to‘g‘ri Telegram tomonidan akkauntga ulanadi — vositachi faqat
        to‘lovni amalga oshiradi. Shuning uchun qabul qiluvchidan parol, kod yoki akkauntga kirish so‘ralmaydi va bu
        usul xavfsiz. Bu eng oson usul haqida{" "}
        <Link href="/blog/telegram-premium-eng-oson-usul">alohida maqola</Link> ham bor.
      </p>

      <h2 id="muhim">Sovg‘a qilishdan oldin nimaga e’tibor berish kerak?</h2>
      <KeyFacts label="Tekshiring">
        <li>
          <b>Username to‘g‘riligi</b> — to‘lovdan oldin @username’ni aniq tekshiring (xato bo‘lsa support yordam beradi).
        </li>
        <li>
          <b>Hozir Premium yo‘qligi</b> — agar odamda allaqachon Premium bo‘lsa, yangi muddat ustiga qo‘shiladi.
        </li>
        <li>
          <b>Muddat tanlovi</b> — 12 oylik oyiga eng tejamkor. Narxlarni{" "}
          <Link href="/blog/telegram-premium-narxi-ozbekistonda-2026">narx maqolasida</Link> ko‘ring.
        </li>
      </KeyFacts>
      <p>
        Narxlar va paketlar — <Link href="/premium">Premium sahifasida</Link>.
      </p>

      <Sources
        label="Manbalar"
        items={[
          { href: "https://telegram.org/faq_premium", label: "telegram.org/faq_premium", note: "Premium va sovg‘a haqida" },
          { href: "https://t.me/StarsPaymee_bot", label: "@StarsPaymee_bot", note: "sovg‘a buyurtmasi" },
        ]}
      />
    </>
  );
}

function RuAnswer() {
  return (
    <p>
      Чтобы подарить Telegram Premium другому человеку, достаточно знать его <strong>@username</strong>. В StarsPaymee:
      откройте бот → выберите Premium → введите @username получателя → выберите срок → оплатите в сумах. Premium
      активируется автоматически в среднем за <strong>10 секунд</strong> — пароль, код или вход в аккаунт получателя не
      нужны.
    </p>
  );
}

function RuBody() {
  return (
    <>
      <h2 id="bosqichlar">Как подарить Premium по username — пошагово</h2>
      <Steps>
        <Step title="Откройте бот">
          Откройте <strong>@StarsPaymee_bot</strong> в Telegram или запустите Mini App.
        </Step>
        <Step title="Выберите Premium">Среди продуктов выберите раздел «Telegram Premium».</Step>
        <Step title="Введите username">
          Укажите @username человека, которому дарите. Нужно только это — не логин, пароль или SMS-код.
        </Step>
        <Step title="Выберите срок">3, 6 или 12 месяцев (для подарка чаще берут 3 или 12 месяцев).</Step>
        <Step title="Оплатите и подождите">
          Оплатите в сумах через UzCard, HUMO, Click или Payme — Premium активируется у получателя за ~10 секунд.
        </Step>
      </Steps>

      <InlineCta text="Подарите другу Premium прямо сейчас — достаточно username." />

      <h2 id="nega-username">Почему достаточно только username?</h2>
      <p>
        В потоке «по username» Premium зачисляется напрямую от Telegram на аккаунт — посредник лишь проводит оплату.
        Поэтому у получателя не запрашивают пароль, код или вход в аккаунт, и способ безопасен. О самом простом способе
        есть <Link href="/blog/telegram-premium-eng-oson-usul">отдельная статья</Link>.
      </p>

      <h2 id="muhim">Что проверить перед дарением?</h2>
      <KeyFacts label="Проверьте">
        <li>
          <b>Правильность username</b> — точно проверьте @username перед оплатой (при ошибке поможет поддержка).
        </li>
        <li>
          <b>Нет ли уже Premium</b> — если у человека уже есть Premium, новый срок добавится к текущему.
        </li>
        <li>
          <b>Выбор срока</b> — 12 месяцев выгоднее всего за месяц. Цены — в{" "}
          <Link href="/blog/telegram-premium-narxi-ozbekistonda-2026">статье о ценах</Link>.
        </li>
      </KeyFacts>
      <p>
        Цены и пакеты — на <Link href="/premium">странице Premium</Link>.
      </p>

      <Sources
        label="Источники"
        items={[
          { href: "https://telegram.org/faq_premium", label: "telegram.org/faq_premium", note: "о Premium и подарках" },
          { href: "https://t.me/StarsPaymee_bot", label: "@StarsPaymee_bot", note: "заказ подарка" },
        ]}
      />
    </>
  );
}

export const post: AeoPost = {
  slug: SLUG,
  category: "Premium",
  type: "howto",
  datePublished: "2026-06-13",
  dateModified: "2026-06-13",
  keywords: [
    "telegram premium sovga qilish",
    "telegram premium username orqali",
    "telegram premium hadya",
    "telegram premium boshqaga yuborish",
    "telegram premium gift username",
  ],
  howToSteps: [
    { name: "Botni oching", text: "Telegramda @StarsPaymee_bot ni oching yoki Mini App’ni ishga tushiring." },
    { name: "Premium’ni tanlang", text: "Mahsulotlar ichidan Telegram Premium bo‘limini tanlang." },
    { name: "Username’ni kiriting", text: "Sovg‘a qiladigan odamning @username’ini kiriting — login yoki parol kerak emas." },
    { name: "Muddatni tanlang", text: "3, 6 yoki 12 oylik paketni tanlang." },
    { name: "To‘lang", text: "UzCard, HUMO, Click yoki Payme bilan so‘mda to‘lang — Premium ~10 soniyada faollashadi." },
  ],
  locales: {
    uz: {
      title: "Telegram Premium’ni username orqali qanday sovg‘a qilinadi?",
      excerpt:
        "Telegram Premium’ni do‘stingizga username orqali sovg‘a qiling: botni oching, @username kiriting, muddatni tanlang, so‘mda to‘lang — 10 soniyada faollashadi.",
      metaTitle: "Telegram Premium’ni username orqali sovg‘a qilish",
      metaDescription:
        "Telegram Premium’ni boshqa odamga username orqali qanday sovg‘a qilish: bosqichma-bosqich qo‘llanma. Faqat @username, login shart emas, 10 soniyada avtomatik.",
      answerTitle: "Qisqa javob",
      Answer: UzAnswer,
      Body: UzBody,
      ctaHeading: "Premium sovg‘a qilasizmi?",
      ctaBody: "Botda @username’ni kiriting, so‘mda to‘lang — Premium 10 soniyada qabul qiluvchida faollashadi.",
      faq: [
        {
          question: "Premium sovg‘a qilish uchun nima kerak?",
          answer: "Faqat qabul qiluvchining @username’i. Uning paroli, SMS-kodi yoki akkauntiga kirish kerak emas.",
        },
        {
          question: "Sovg‘a necha soniyada yetadi?",
          answer: "Username bilan oqimda Premium o‘rtacha 10 soniyada qabul qiluvchining akkauntida faollashadi.",
        },
        {
          question: "Username’ni xato yozsam-chi?",
          answer:
            "To‘lovdan oldin tekshiring. Xato bo‘lsa darhol @StarsPaymeeSupport’ga buyurtma ID bilan murojaat qiling.",
        },
        {
          question: "Odamda allaqachon Premium bo‘lsa-chi?",
          answer: "Yangi muddat mavjud Premium ustiga qo‘shiladi (uzaytiriladi).",
        },
        {
          question: "Anonim sovg‘a qilsa bo‘ladimi?",
          answer:
            "Premium faollashtirish qabul qiluvchiga ko‘rinadi; anonim variant ko‘proq noyob sovg‘alar (Gifts) uchun mavjud.",
        },
      ],
    },
    ru: {
      title: "Как подарить Telegram Premium по username?",
      excerpt:
        "Подарите Telegram Premium другу по username: откройте бот, введите @username, выберите срок, оплатите в сумах — активируется за 10 секунд.",
      metaTitle: "Как подарить Telegram Premium по username",
      metaDescription:
        "Как подарить Telegram Premium другому человеку по username: пошаговое руководство. Только @username, без логина, активация автоматически за 10 секунд.",
      answerTitle: "Краткий ответ",
      Answer: RuAnswer,
      Body: RuBody,
      ctaHeading: "Подарить Premium?",
      ctaBody: "Введите @username в боте, оплатите в сумах — Premium активируется у получателя за 10 секунд.",
      faq: [
        {
          question: "Что нужно, чтобы подарить Premium?",
          answer: "Только @username получателя. Его пароль, SMS-код или вход в аккаунт не нужны.",
        },
        {
          question: "За сколько доходит подарок?",
          answer: "В потоке по username Premium активируется на аккаунте получателя в среднем за 10 секунд.",
        },
        {
          question: "А если я ошибусь в username?",
          answer: "Проверьте перед оплатой. При ошибке сразу напишите в @StarsPaymeeSupport с ID заказа.",
        },
        {
          question: "Что если у человека уже есть Premium?",
          answer: "Новый срок добавится к текущему Premium (продлится).",
        },
        {
          question: "Можно ли подарить анонимно?",
          answer:
            "Активация Premium видна получателю; анонимный вариант чаще доступен для уникальных подарков (Gifts).",
        },
      ],
    },
  },
};
