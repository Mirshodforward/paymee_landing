import { Link } from "@/i18n/navigation";
import { Toc, Steps, Step, InlineCta, KeyFacts, Sources } from "@/components/blog/aeo-blocks";
import type { AeoPost } from "@/lib/blog-aeo/types";

const SLUG = "ovozli-xabarni-matnga-aylantirish";

function UzAnswer() {
  return (
    <p>
      Telegram’da ovozli (va video) xabarni matnga aylantirish — <strong>Telegram Premium</strong>ning eng ommabop
      funksiyalaridan biri. Har qanday ovozli yoki video xabarni oching, ustiga bosib turing (yoki uch nuqta menyusini
      oching) va <strong>«Transkribatsiya» (Transcribe)</strong>ni tanlang — matn bir necha soniyada paydo bo‘ladi.
      Funksiya bir nechta tilni, jumladan rus va ingliz tillarini yaxshi tushunadi; o‘zbek tili sifati kamroq
      barqaror bo‘lishi mumkin.
    </p>
  );
}

function UzBody() {
  return (
    <>
      <Toc
        label="Mundarija"
        items={[
          { href: "#nima", label: "Voice-to-text nima" },
          { href: "#bosqichlar", label: "Qanday yoqiladi" },
          { href: "#tillar", label: "Qaysi tillarni tushunadi" },
          { href: "#video", label: "Video xabarlarda ishlaydimi" },
          { href: "#kimga", label: "Kimga foydali" },
        ]}
      />

      <h2 id="nima">Ovozli xabarni matnga aylantirish (transkripsiya) nima?</h2>
      <p>
        Bu — Telegram Premium’ning sun’iy intellekt asosidagi funksiyasi: kelgan ovozli yoki video xabarni tinglamasdan,
        uning matnli transkripsiyasini o‘qish imkonini beradi. Bu ayniqsa shovqinli joyda, yig‘ilishda yoki uzun ovozli
        xabarlarni tez ko‘rib chiqishda juda qulay.
      </p>

      <h2 id="bosqichlar">Voice-to-text qanday yoqiladi?</h2>
      <Steps>
        <Step title="Premium obunangiz bo‘lsin">
          Bu funksiya faqat Telegram Premium foydalanuvchilari uchun mavjud.
        </Step>
        <Step title="Ovozli xabarni oching">Kelgan ovozli yoki video xabarni istalgan chatda toping.</Step>
        <Step title="«Transkribatsiya»ni bosing">
          Xabar ostidagi «Transcribe» (yoki «Matnga o‘girish») tugmasini bosing.
        </Step>
        <Step title="Matnni o‘qing">Bir necha soniyada xabar ostida matnli variant paydo bo‘ladi.</Step>
      </Steps>

      <InlineCta text="Bu funksiyani sinab ko‘rmoqchimisiz? Premium’ni so‘mda, botda 10 soniyada oling." />

      <h2 id="tillar">Voice-to-text qaysi tillarni tushunadi?</h2>
      <KeyFacts label="Til sifati bo‘yicha">
        <li>
          <b>Ingliz va rus tillari:</b> yuqori aniqlik bilan tanib oladi, tez-tez yangilanadi.
        </li>
        <li>
          <b>Boshqa yirik tillar:</b> yaxshi darajada qo‘llab-quvvatlanadi.
        </li>
        <li>
          <b>O‘zbek tili:</b> ishlaydi, lekin aniqlik nutq tezligi, shevaga qarab farq qilishi mumkin.
        </li>
      </KeyFacts>
      <p>
        Funksiya vaqt o‘tishi bilan yaxshilanib bormoqda — Telegram’ning boshqa yangi imkoniyatlari qatorida bu ham
        muntazam yangilanadi;{" "}
        <Link href="/blog/telegram-premium-yashirin-funksiyalari">«Premium’ning yashirin funksiyalari»</Link>{" "}
        maqolasida shunga o‘xshash foydali imkoniyatlar ro‘yxati bor.
      </p>

      <h2 id="video">Video xabarlarda (video message) ham ishlaydimi?</h2>
      <p>
        Ha — transkripsiya nafaqat ovozli xabarlarda, balki <strong>dumaloq video xabarlarda</strong> ham ishlaydi.
        Bu ikkala format uchun bir xil tugma va jarayon orqali amalga oshiriladi, alohida sozlash talab qilinmaydi.
      </p>

      <h2 id="kimga">Bu funksiya kimga eng foydali?</h2>
      <ul>
        <li>
          <strong>Ish joyida yoki yig‘ilishda:</strong> ovoz chiqarmasdan xabar mazmunini bilish uchun.
        </li>
        <li>
          <strong>Uzun ovozli xabarlarni tez ko‘rib chiqishda:</strong> tinglash o‘rniga o‘qib chiqish tezroq.
        </li>
        <li>
          <strong>Eshitish qiyin bo‘lgan muhitda:</strong> shovqinli joy yoki tinch bo‘lishi kerak vaziyatlarda.
        </li>
      </ul>
      <p>
        Bu funksiya Premium’ning umumiy qiymatini oshiradigan jihatlardan biri — to‘liq afzalliklar ro‘yxatini{" "}
        <Link href="/blog/telegram-premium-arziydimi-foydalari">«Premium arziydimi»</Link> maqolasida ko‘rish mumkin.
      </p>

      <Sources
        label="Manbalar"
        items={[
          { href: "https://telegram.org/faq_premium", label: "telegram.org/faq_premium", note: "Telegram Premium FAQ" },
          { href: "https://telegram.org/blog/premium", label: "telegram.org/blog/premium", note: "Premium funksiyalari e’loni" },
        ]}
      />
    </>
  );
}

function RuAnswer() {
  return (
    <p>
      Преобразование голосового (и видео) сообщения в текст в Telegram — одна из самых популярных функций{" "}
      <strong>Telegram Premium</strong>. Откройте любое голосовое или видео сообщение, зажмите его (или откройте меню
      с тремя точками) и выберите <strong>«Транскрибировать» (Transcribe)</strong> — текст появится за пару секунд.
      Функция хорошо понимает несколько языков, включая русский и английский; качество для узбекского языка может
      быть менее стабильным.
    </p>
  );
}

function RuBody() {
  return (
    <>
      <Toc
        label="Содержание"
        items={[
          { href: "#nima", label: "Что такое voice-to-text" },
          { href: "#bosqichlar", label: "Как включить" },
          { href: "#tillar", label: "Какие языки понимает" },
          { href: "#video", label: "Работает ли в видеосообщениях" },
          { href: "#kimga", label: "Кому полезно" },
        ]}
      />

      <h2 id="nima">Что такое преобразование голоса в текст (транскрипция)?</h2>
      <p>
        Это функция Telegram Premium на основе искусственного интеллекта: позволяет читать текстовую расшифровку
        входящего голосового или видео сообщения, не прослушивая его. Особенно удобно в шумном месте, на встрече или
        когда нужно быстро просмотреть длинное голосовое сообщение.
      </p>

      <h2 id="bosqichlar">Как включить voice-to-text?</h2>
      <Steps>
        <Step title="Убедитесь в наличии Premium">Функция доступна только пользователям Telegram Premium.</Step>
        <Step title="Откройте голосовое сообщение">Найдите входящее голосовое или видео сообщение в любом чате.</Step>
        <Step title="Нажмите «Транскрибировать»">Нажмите кнопку «Transcribe» («Расшифровать») под сообщением.</Step>
        <Step title="Прочитайте текст">Через пару секунд под сообщением появится текстовый вариант.</Step>
      </Steps>

      <InlineCta text="Хотите попробовать эту функцию? Купите Premium в сумах, в боте за 10 секунд." />

      <h2 id="tillar">Какие языки понимает voice-to-text?</h2>
      <KeyFacts label="По качеству языка">
        <li>
          <b>Английский и русский:</b> распознаются с высокой точностью, регулярно улучшаются.
        </li>
        <li>
          <b>Другие крупные языки:</b> поддерживаются на хорошем уровне.
        </li>
        <li>
          <b>Узбекский язык:</b> работает, но точность может отличаться в зависимости от скорости речи и диалекта.
        </li>
      </KeyFacts>
      <p>
        Функция со временем становится точнее — как и другие новые возможности Telegram, она регулярно обновляется;
        похожие полезные функции собраны в статье{" "}
        <Link href="/blog/telegram-premium-yashirin-funksiyalari">«Скрытые функции Premium»</Link>.
      </p>

      <h2 id="video">Работает ли в видеосообщениях (кружках)?</h2>
      <p>
        Да — транскрипция работает не только для голосовых сообщений, но и для{" "}
        <strong>круглых видеосообщений</strong>. Для обоих форматов используется одна и та же кнопка и процесс,
        отдельная настройка не требуется.
      </p>

      <h2 id="kimga">Кому эта функция наиболее полезна?</h2>
      <ul>
        <li>
          <strong>На работе или встрече:</strong> чтобы узнать содержание сообщения без звука.
        </li>
        <li>
          <strong>Для быстрого просмотра длинных голосовых:</strong> читать быстрее, чем слушать.
        </li>
        <li>
          <strong>В условиях, где сложно слушать:</strong> шумное место или ситуации, требующие тишины.
        </li>
      </ul>
      <p>
        Эта функция — одна из тех, что повышают общую ценность Premium; полный список преимуществ — в статье{" "}
        <Link href="/blog/telegram-premium-arziydimi-foydalari">«Стоит ли Premium»</Link>.
      </p>

      <Sources
        label="Источники"
        items={[
          { href: "https://telegram.org/faq_premium", label: "telegram.org/faq_premium", note: "FAQ по Telegram Premium" },
          { href: "https://telegram.org/blog/premium", label: "telegram.org/blog/premium", note: "анонс функций Premium" },
        ]}
      />
    </>
  );
}

export const post: AeoPost = {
  slug: SLUG,
  category: "Premium",
  type: "howto",
  datePublished: "2026-07-05",
  dateModified: "2026-07-05",
  keywords: [
    "ovozli xabarni matnga ogirish telegram",
    "telegram voice to text",
    "telegram transkripsiya",
    "telegram ovozli xabar matn",
    "telegram transcribe",
  ],
  howToSteps: [
    { name: "Premium obunangiz bo‘lsin", text: "Bu funksiya faqat Telegram Premium foydalanuvchilari uchun." },
    { name: "Ovozli xabarni oching", text: "Kelgan ovozli yoki video xabarni istalgan chatda toping." },
    { name: "Transkribatsiyani bosing", text: "Xabar ostidagi Transcribe tugmasini bosing." },
    { name: "Matnni o‘qing", text: "Bir necha soniyada xabar ostida matnli variant paydo bo‘ladi." },
  ],
  locales: {
    uz: {
      title: "Ovozli xabarni matnga aylantirish — Telegramda voice-to-text qanday ishlaydi? (2026)",
      excerpt:
        "Telegram Premium’ning eng ommabop funksiyasi — ovozli xabarni matnga o‘girish qanday yoqiladi, qaysi tillarni tushunadi va video xabarlarda ishlaydimi.",
      metaTitle: "Telegram voice-to-text — ovozni matnga o‘girish 2026",
      metaDescription:
        "Telegramda ovozli xabarni matnga aylantirish qanday ishlaydi: yoqish bosqichlari, qo‘llab-quvvatlanadigan tillar va video xabarlarda ishlashi.",
      answerTitle: "Qisqa javob",
      Answer: UzAnswer,
      Body: UzBody,
      ctaHeading: "Bu funksiyani sinab ko‘rasizmi?",
      ctaBody: "Premium’ni so‘mda, mahalliy karta bilan @StarsPaymee_bot orqali 10 soniyada oling.",
      faq: [
        {
          question: "Ovozli xabarni matnga o‘girish qaysi obuna uchun mavjud?",
          answer: "Bu funksiya faqat Telegram Premium foydalanuvchilari uchun ochiq.",
        },
        {
          question: "Transkripsiya qancha vaqt oladi?",
          answer: "Odatda bir necha soniya — «Transcribe» tugmasini bosgach matn tezda paydo bo‘ladi.",
        },
        {
          question: "O‘zbek tilini tushunadimi?",
          answer: "Ha, ishlaydi, lekin aniqlik nutq tezligi va shevaga qarab ingliz/rus tiliga nisbatan kamroq barqaror bo‘lishi mumkin.",
        },
        {
          question: "Video xabarlarda (dumaloq video) ishlaydimi?",
          answer: "Ha, transkripsiya ham ovozli, ham video xabarlar uchun bir xil tugma orqali ishlaydi.",
        },
        {
          question: "Bu funksiya uchun qo‘shimcha to‘lov kerakmi?",
          answer: "Yo‘q, u Premium obunasi ichiga kiradi — alohida to‘lov talab qilinmaydi.",
        },
      ],
    },
    ru: {
      title: "Преобразование голосового сообщения в текст — как работает voice-to-text в Telegram? (2026)",
      excerpt:
        "Самая популярная функция Telegram Premium — преобразование голоса в текст: как включить, какие языки понимает и работает ли в видеосообщениях.",
      metaTitle: "Telegram voice-to-text — расшифровка голоса 2026",
      metaDescription:
        "Как работает преобразование голосового сообщения в текст в Telegram: шаги включения, поддерживаемые языки и работа в видеосообщениях.",
      answerTitle: "Краткий ответ",
      Answer: RuAnswer,
      Body: RuBody,
      ctaHeading: "Хотите попробовать эту функцию?",
      ctaBody: "Купите Premium в сумах локальной картой через @StarsPaymee_bot за 10 секунд.",
      faq: [
        {
          question: "Для какой подписки доступна расшифровка голосовых?",
          answer: "Эта функция доступна только пользователям Telegram Premium.",
        },
        {
          question: "Сколько занимает транскрипция?",
          answer: "Обычно пара секунд — после нажатия «Transcribe» текст появляется быстро.",
        },
        {
          question: "Понимает ли она узбекский язык?",
          answer: "Да, работает, но точность может быть менее стабильной, чем для русского/английского, в зависимости от скорости речи и диалекта.",
        },
        {
          question: "Работает ли в видеосообщениях (кружках)?",
          answer: "Да, транскрипция работает и для голосовых, и для видеосообщений через одну и ту же кнопку.",
        },
        {
          question: "Нужна ли дополнительная оплата за эту функцию?",
          answer: "Нет, она включена в подписку Premium — отдельной оплаты не требуется.",
        },
      ],
    },
  },
};
