import { Link } from "@/i18n/navigation";
import { Toc, Steps, Step, InlineCta, KeyFacts, Sources } from "@/components/blog/aeo-blocks";
import type { AeoPost } from "@/lib/blog-aeo/types";

const SLUG = "telegram-premium-avtomatik-tarjima";

function UzAnswer() {
  return (
    <p>
      Telegram Premium’ning real-time tarjima funksiyasi butun chat yoki kanalni <strong>tanlangan tilga avtomatik
      tarjima qilib beradi</strong> — har bir xabarni alohida tarjima qilish shart emas. Bu ayniqsa rus yoki ingliz
      tilidagi kanallarni kuzatib borish uchun qulay: «Tarjima qilish» funksiyasini bir marta yoqasiz, chat esa
      shundan keyin doimiy tanlangan tilda ko‘rinadi.
    </p>
  );
}

function UzBody() {
  return (
    <>
      <Toc
        label="Mundarija"
        items={[
          { href: "#nima", label: "Real-time translation nima" },
          { href: "#bosqichlar", label: "Qanday yoqiladi" },
          { href: "#tillar", label: "Qaysi tillar mavjud" },
          { href: "#foyda", label: "Kimga qulay" },
        ]}
      />

      <h2 id="nima">Telegram’da real-time tarjima nima?</h2>
      <p>
        Bu — Telegram Premium’ning yana bir sun’iy intellekt asosidagi funksiyasi: butun chat yoki kanalning
        matnlarini <strong>jonli ravishda</strong> tanlangan tilga tarjima qilib turadi. Bu Google Translate’ga
        o‘xshab har bir xabarni alohida nusxalab tarjima qilishdan farqli — funksiya bir marta yoqilgach, chat
        avtomatik tarjima qilinadigan holatga o‘tadi.
      </p>

      <h2 id="bosqichlar">Avtomatik tarjimani qanday yoqish mumkin?</h2>
      <Steps>
        <Step title="Chatni oching">Tarjima qilmoqchi bo‘lgan kanal yoki chatga o‘ting.</Step>
        <Step title="Uch nuqta menyusini oching">Yuqori o‘ng burchakdagi menyu tugmasini bosing.</Step>
        <Step title="«Tarjima qilish»ni tanlang">Ro‘yxatdan «Translate» (Tarjima qilish) variantini bosing.</Step>
        <Step title="Tilni tanlang">Tarjima qilinadigan tilni belgilang — matn shu tilda ko‘rina boshlaydi.</Step>
      </Steps>

      <InlineCta text="Bu funksiya va boshqa Premium imkoniyatlari — so‘mda, botda 10 soniyada." />

      <h2 id="tillar">Qaysi tillar qo‘llab-quvvatlanadi?</h2>
      <KeyFacts label="Til imkoniyatlari">
        <li>
          <b>Ko‘plab yirik tillar:</b> ingliz, rus, ispan, arab va boshqa keng tarqalgan tillar yaxshi ishlaydi.
        </li>
        <li>
          <b>O‘zbek tili:</b> tarjima yo‘nalishi sifatida mavjud, lekin murakkab matnlarda aniqlik farq qilishi
          mumkin.
        </li>
        <li>
          <b>Ikki tomonlama:</b> istalgan tomonga (masalan, rus→o‘zbek yoki o‘zbek→ingliz) tarjima qilish mumkin.
        </li>
      </KeyFacts>

      <h2 id="foyda">Bu funksiya kimga eng qulay?</h2>
      <ul>
        <li>
          <strong>Xorijiy kanallarni kuzatuvchilar:</strong> rus yoki ingliz tilidagi yangiliklar kanalini o‘zbek
          tilida o‘qish uchun.
        </li>
        <li>
          <strong>Xalqaro muloqot qiluvchilar:</strong> turli tildagi guruh yoki hamkorlar bilan yozishishda.
        </li>
        <li>
          <strong>Til o‘rganuvchilar:</strong> asl matn va tarjimani solishtirib borish orqali.
        </li>
      </ul>
      <p>
        Bu funksiya Premium’ning kam ma’lum, lekin real foydali tomonlaridan biri — boshqa shunga o‘xshash
        imkoniyatlarni{" "}
        <Link href="/blog/telegram-premium-yashirin-funksiyalari">«Premium’ning yashirin funksiyalari»</Link>{" "}
        maqolasida ko‘ring, yoki umumiy afzalliklarni{" "}
        <Link href="/blog/telegram-premium-arziydimi-foydalari">«Premium arziydimi»</Link>da.
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
      Функция автоматического перевода в реальном времени в Telegram Premium{" "}
      <strong>переводит весь чат или канал на выбранный язык автоматически</strong> — переводить каждое сообщение по
      отдельности не нужно. Это особенно удобно для отслеживания русскоязычных или англоязычных каналов: функцию
      «Перевести» включают один раз, и чат затем постоянно отображается на выбранном языке.
    </p>
  );
}

function RuBody() {
  return (
    <>
      <Toc
        label="Содержание"
        items={[
          { href: "#nima", label: "Что такое real-time translation" },
          { href: "#bosqichlar", label: "Как включить" },
          { href: "#tillar", label: "Какие языки доступны" },
          { href: "#foyda", label: "Кому удобно" },
        ]}
      />

      <h2 id="nima">Что такое перевод в реальном времени в Telegram?</h2>
      <p>
        Это ещё одна функция Telegram Premium на основе искусственного интеллекта: переводит тексты всего чата или
        канала <strong>вживую</strong> на выбранный язык. В отличие от Google Translate, где нужно копировать и
        переводить каждое сообщение отдельно, здесь после однократного включения весь чат переходит в режим
        автоматического перевода.
      </p>

      <h2 id="bosqichlar">Как включить автоматический перевод?</h2>
      <Steps>
        <Step title="Откройте чат">Перейдите в канал или чат, который хотите переводить.</Step>
        <Step title="Откройте меню с тремя точками">Нажмите кнопку меню в правом верхнем углу.</Step>
        <Step title="Выберите «Перевести»">Нажмите вариант «Translate» (Перевести) в списке.</Step>
        <Step title="Выберите язык">Укажите язык перевода — текст начнёт отображаться на этом языке.</Step>
      </Steps>

      <InlineCta text="Эта и другие функции Premium — в сумах, в боте за 10 секунд." />

      <h2 id="tillar">Какие языки поддерживаются?</h2>
      <KeyFacts label="Языковые возможности">
        <li>
          <b>Многие крупные языки:</b> английский, русский, испанский, арабский и другие распространённые языки
          работают хорошо.
        </li>
        <li>
          <b>Узбекский язык:</b> доступен как направление перевода, но точность может отличаться в сложных текстах.
        </li>
        <li>
          <b>Двусторонний перевод:</b> можно переводить в любую сторону (например, русский→узбекский или
          узбекский→английский).
        </li>
      </KeyFacts>

      <h2 id="foyda">Кому эта функция наиболее удобна?</h2>
      <ul>
        <li>
          <strong>Тем, кто следит за зарубежными каналами:</strong> для чтения новостного канала на русском или
          английском на узбекском языке.
        </li>
        <li>
          <strong>Для международного общения:</strong> в группах или с партнёрами на разных языках.
        </li>
        <li>
          <strong>Изучающим язык:</strong> сравнивая оригинал и перевод.
        </li>
      </ul>
      <p>
        Эта функция — одна из малоизвестных, но реально полезных сторон Premium; другие похожие возможности — в
        статье{" "}
        <Link href="/blog/telegram-premium-yashirin-funksiyalari">«Скрытые функции Premium»</Link>, а общие
        преимущества — в{" "}
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
    "telegramda avtomatik tarjima",
    "telegram premium translation",
    "telegram chat tarjima qilish",
    "telegram real time translate",
    "telegram tilni ogirish",
  ],
  howToSteps: [
    { name: "Chatni oching", text: "Tarjima qilmoqchi bo‘lgan kanal yoki chatga o‘ting." },
    { name: "Uch nuqta menyusini oching", text: "Yuqori o‘ng burchakdagi menyu tugmasini bosing." },
    { name: "Tarjima qilishni tanlang", text: "Ro‘yxatdan Translate variantini bosing." },
    { name: "Tilni tanlang", text: "Tarjima qilinadigan tilni belgilang." },
  ],
  locales: {
    uz: {
      title: "Telegramda avtomatik tarjima: Premium real-time translation funksiyasi (2026)",
      excerpt:
        "Telegram Premium’da butun chatni jonli tarjima qilish qanday ishlaydi, qaysi tillar mavjud va rus/ingliz kanallarini o‘qish uchun qulayligi.",
      metaTitle: "Telegram avtomatik tarjima funksiyasi — 2026",
      metaDescription:
        "Telegramda avtomatik tarjima: Premium real-time translation qanday yoqiladi, qo‘llab-quvvatlanadigan tillar va kimga qulay ekani.",
      answerTitle: "Qisqa javob",
      Answer: UzAnswer,
      Body: UzBody,
      ctaHeading: "Bu funksiyani sinaysizmi?",
      ctaBody: "Premium’ni so‘mda, mahalliy karta bilan @StarsPaymee_bot orqali 10 soniyada oling.",
      faq: [
        {
          question: "Real-time tarjima qaysi obuna uchun mavjud?",
          answer: "Bu funksiya Telegram Premium foydalanuvchilari uchun ochiq.",
        },
        {
          question: "Har bir xabarni alohida tarjima qilish kerakmi?",
          answer: "Yo‘q, funksiyani bir marta yoqsangiz, butun chat avtomatik tanlangan tilda ko‘rinadi.",
        },
        {
          question: "O‘zbek tiliga tarjima qanchalik aniq?",
          answer: "Asosiy ma’noni yaxshi beradi, lekin murakkab yoki ko‘p ma’noli matnlarda aniqlik ingliz/rus tiliga nisbatan farq qilishi mumkin.",
        },
        {
          question: "Tarjimani istalgan vaqtda o‘chirish mumkinmi?",
          answer: "Ha, xuddi shu menyudan «Original ko‘rsatish» yoki tarjimani o‘chirishni tanlash mumkin.",
        },
        {
          question: "Bu funksiya kanal va guruhlarda ham ishlaydimi?",
          answer: "Ha, real-time tarjima ham shaxsiy chat, ham kanal va guruhlarda ishlaydi.",
        },
      ],
    },
    ru: {
      title: "Автоматический перевод в Telegram: функция real-time translation Premium (2026)",
      excerpt:
        "Как работает перевод всего чата в реальном времени в Telegram Premium, какие языки доступны и насколько это удобно для чтения русских/английских каналов.",
      metaTitle: "Функция автоматического перевода Telegram — 2026",
      metaDescription:
        "Автоматический перевод в Telegram: как включить real-time translation в Premium, поддерживаемые языки и кому это удобно.",
      answerTitle: "Краткий ответ",
      Answer: RuAnswer,
      Body: RuBody,
      ctaHeading: "Хотите попробовать эту функцию?",
      ctaBody: "Купите Premium в сумах локальной картой через @StarsPaymee_bot за 10 секунд.",
      faq: [
        {
          question: "Для какой подписки доступен перевод в реальном времени?",
          answer: "Эта функция доступна пользователям Telegram Premium.",
        },
        {
          question: "Нужно ли переводить каждое сообщение отдельно?",
          answer: "Нет, включив функцию один раз, вы получите весь чат автоматически на выбранном языке.",
        },
        {
          question: "Насколько точен перевод на узбекский язык?",
          answer: "Основной смысл передаётся хорошо, но в сложных или многозначных текстах точность может отличаться от русского/английского.",
        },
        {
          question: "Можно ли отключить перевод в любой момент?",
          answer: "Да, в том же меню можно выбрать «Показать оригинал» или отключить перевод.",
        },
        {
          question: "Работает ли эта функция в каналах и группах?",
          answer: "Да, перевод в реальном времени работает и в личных чатах, и в каналах, и в группах.",
        },
      ],
    },
  },
};
