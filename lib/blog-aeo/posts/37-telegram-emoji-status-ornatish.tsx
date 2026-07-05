import { Link } from "@/i18n/navigation";
import { Toc, Steps, Step, InlineCta, KeyFacts, Sources } from "@/components/blog/aeo-blocks";
import type { AeoPost } from "@/lib/blog-aeo/types";

const SLUG = "telegram-emoji-status-ornatish";

function UzAnswer() {
  return (
    <p>
      Telegram emoji status — bu profilingiz ismi yonida ko‘rinadigan kichik animatsion emoji, odatiy «yashil nuqta»
      o‘rniga qo‘yiladi. O‘rnatish uchun: <strong>Sozlamalar → profil ismi ustiga bosing</strong> (yoki emoji
      belgisini toping) va istalgan emoji yoki collectible statusni tanlang. Ba’zi maxsus (jumladan collectible)
      statuslar uchun Telegram Premium kerak; taymer qo‘yib, statusni belgilangan vaqtdan so‘ng avtomatik o‘chirish
      ham mumkin.
    </p>
  );
}

function UzBody() {
  return (
    <>
      <Toc
        label="Mundarija"
        items={[
          { href: "#nima", label: "Emoji status nima" },
          { href: "#bosqichlar", label: "Qanday o‘rnatiladi" },
          { href: "#taymer", label: "Taymer qo‘yish" },
          { href: "#collectible", label: "Collectible statuslar" },
          { href: "#premium", label: "Premium shartmi" },
        ]}
      />

      <h2 id="nima">Telegram emoji status nima?</h2>
      <p>
        Bu — profilingiz ismi yonida ko‘rinadigan kichik, ba’zan animatsion belgi. U profilingizga shaxsiy uslub
        qo‘shadi va onlayn holatidan tashqari kayfiyat, band ekanlik yoki qiziqishni ko‘rsatish uchun ishlatiladi.
        Emoji status — Telegram Premium bilan chiqarilgan ommabop shaxsiylashtirish funksiyalaridan biri.
      </p>

      <h2 id="bosqichlar">Emoji statusni qanday o‘rnatish mumkin?</h2>
      <Steps>
        <Step title="Sozlamalarni oching">Telegram’da o‘z profilingizga o‘ting.</Step>
        <Step title="Ism ustiga bosing">Profil ismingiz ustiga bosing yoki emoji belgisi joyini toping.</Step>
        <Step title="Emoji tanlang">Chiqqan ro‘yxatdan istalgan emoji yoki animatsion belgini tanlang.</Step>
        <Step title="Tasdiqlang">Tanlangan emoji darhol profilingizda ko‘rina boshlaydi.</Step>
      </Steps>

      <InlineCta text="Emoji status va boshqa Premium imkoniyatlari — so‘mda, botda 10 soniyada." />

      <h2 id="taymer">Statusga taymer qo‘yish mumkinmi?</h2>
      <KeyFacts label="Taymer imkoniyati">
        <li>
          <b>Vaqtinchalik status:</b> masalan, «1 soat» yoki «bugun kechgacha» kabi muddat belgilash mumkin.
        </li>
        <li>
          <b>Avtomatik o‘chish:</b> belgilangan vaqt tugagach status avtomatik olib tashlanadi.
        </li>
        <li>
          <b>Qulay holatlar uchun:</b> masalan, yig‘ilishda, sayohatda yoki dam olishda vaqtinchalik belgi.
        </li>
      </KeyFacts>

      <h2 id="collectible">Collectible (kolleksion) statuslar nima?</h2>
      <p>
        Ba’zi noyob, cheklangan sonda chiqarilgan emoji statuslar <strong>collectible</strong> darajasida bo‘ladi —
        bular odatiy emoji’dan farqli, alohida dizaynga ega va Gifts kolleksiyasi bilan bog‘liq bo‘lishi mumkin.
        Collectible sovg‘alar haqida{" "}
        <Link href="/blog/telegram-gifts-kolleksiya-rare-sovgalar">«Gifts kolleksiyasi va rare sovg‘alar»</Link>{" "}
        maqolasida batafsil o‘qing.
      </p>

      <h2 id="premium">Emoji status uchun Premium shartmi?</h2>
      <p>
        Oddiy emoji statuslarning ba’zilari bepul foydalanuvchilar uchun ham ochiq, lekin <strong>to‘liq
        to‘plam</strong>, animatsion va maxsus/collectible statuslar odatda faqat{" "}
        <strong>Telegram Premium</strong> foydalanuvchilari uchun mavjud. Premium’ning to‘liq imkoniyatlari
        ro‘yxatini{" "}
        <Link href="/blog/telegram-premium-yashirin-funksiyalari">«Premium’ning yashirin funksiyalari»</Link>{" "}
        maqolasida ko‘ring, yoki uni qanday eng oson olish mumkinligini{" "}
        <Link href="/blog/telegram-premium-eng-oson-usul">«Premium eng oson usul»</Link>da o‘qing.
      </p>

      <Sources
        label="Manbalar"
        items={[
          { href: "https://telegram.org/faq_premium", label: "telegram.org/faq_premium", note: "Telegram Premium FAQ" },
          { href: "https://telegram.org/blog/emoji-status", label: "telegram.org/blog/emoji-status", note: "emoji status e’loni" },
        ]}
      />
    </>
  );
}

function RuAnswer() {
  return (
    <p>
      Emoji-статус Telegram — небольшой анимированный эмодзи, отображаемый рядом с именем в профиле вместо обычной
      «зелёной точки». Чтобы установить: <strong>Настройки → нажмите на имя профиля</strong> (или найдите значок
      эмодзи) и выберите нужный эмодзи или collectible-статус. Для некоторых особых (включая collectible) статусов
      нужен Telegram Premium; можно также установить таймер, чтобы статус автоматически исчезал через заданное время.
    </p>
  );
}

function RuBody() {
  return (
    <>
      <Toc
        label="Содержание"
        items={[
          { href: "#nima", label: "Что такое emoji-статус" },
          { href: "#bosqichlar", label: "Как установить" },
          { href: "#taymer", label: "Установка таймера" },
          { href: "#collectible", label: "Collectible-статусы" },
          { href: "#premium", label: "Обязателен ли Premium" },
        ]}
      />

      <h2 id="nima">Что такое emoji-статус Telegram?</h2>
      <p>
        Это небольшой, иногда анимированный значок рядом с именем в профиле. Он добавляет профилю индивидуальный
        стиль и используется, чтобы, помимо статуса «онлайн», показать настроение, занятость или интерес.
        Emoji-статус — одна из популярных функций персонализации, выпущенных вместе с Telegram Premium.
      </p>

      <h2 id="bosqichlar">Как установить emoji-статус?</h2>
      <Steps>
        <Step title="Откройте настройки">Перейдите в свой профиль в Telegram.</Step>
        <Step title="Нажмите на имя">Нажмите на своё имя в профиле или найдите значок эмодзи.</Step>
        <Step title="Выберите эмодзи">Выберите нужный эмодзи или анимированный значок из списка.</Step>
        <Step title="Подтвердите">Выбранный эмодзи сразу появится в вашем профиле.</Step>
      </Steps>

      <InlineCta text="Emoji-статус и другие возможности Premium — в сумах, в боте за 10 секунд." />

      <h2 id="taymer">Можно ли установить таймер на статус?</h2>
      <KeyFacts label="Возможность таймера">
        <li>
          <b>Временный статус:</b> можно задать срок, например «1 час» или «до конца дня».
        </li>
        <li>
          <b>Автоматическое исчезновение:</b> по истечении заданного времени статус убирается автоматически.
        </li>
        <li>
          <b>Для удобных ситуаций:</b> например, на встрече, в поездке или на отдыхе — временный значок.
        </li>
      </KeyFacts>

      <h2 id="collectible">Что такое collectible (коллекционные) статусы?</h2>
      <p>
        Некоторые редкие, выпущенные ограниченным тиражом emoji-статусы имеют уровень <strong>collectible</strong> —
        они отличаются от обычных эмодзи, имеют особый дизайн и могут быть связаны с коллекцией Gifts. Подробнее о
        коллекционных подарках — в статье{" "}
        <Link href="/blog/telegram-gifts-kolleksiya-rare-sovgalar">«Коллекция Gifts и редкие подарки»</Link>.
      </p>

      <h2 id="premium">Обязателен ли Premium для emoji-статуса?</h2>
      <p>
        Часть обычных emoji-статусов доступна и бесплатным пользователям, но <strong>полный набор</strong>,
        анимированные и особые/collectible статусы обычно доступны только пользователям{" "}
        <strong>Telegram Premium</strong>. Полный список возможностей Premium — в статье{" "}
        <Link href="/blog/telegram-premium-yashirin-funksiyalari">«Скрытые функции Premium»</Link>, а самый простой
        способ его получить — в{" "}
        <Link href="/blog/telegram-premium-eng-oson-usul">«Premium самым простым способом»</Link>.
      </p>

      <Sources
        label="Источники"
        items={[
          { href: "https://telegram.org/faq_premium", label: "telegram.org/faq_premium", note: "FAQ по Telegram Premium" },
          { href: "https://telegram.org/blog/emoji-status", label: "telegram.org/blog/emoji-status", note: "анонс emoji-статуса" },
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
    "telegram emoji status",
    "ism yoniga emoji qoyish telegram",
    "telegram emoji status ornatish",
    "telegram profile emoji",
    "telegram collectible status",
  ],
  howToSteps: [
    { name: "Sozlamalarni oching", text: "Telegram’da o‘z profilingizga o‘ting." },
    { name: "Ism ustiga bosing", text: "Profil ismingiz ustiga bosing yoki emoji belgisi joyini toping." },
    { name: "Emoji tanlang", text: "Chiqqan ro‘yxatdan istalgan emoji yoki animatsion belgini tanlang." },
    { name: "Tasdiqlang", text: "Tanlangan emoji darhol profilingizda ko‘rina boshlaydi." },
  ],
  locales: {
    uz: {
      title: "Telegram emoji status nima va qanday o‘rnatiladi? (2026)",
      excerpt:
        "Telegram emoji status — ism yonidagi kichik belgi: qanday o‘rnatiladi, taymer qo‘yish, collectible statuslar va Premium bilan bog‘liqligi.",
      metaTitle: "Telegram emoji status o‘rnatish — qo‘llanma 2026",
      metaDescription:
        "Telegram emoji status nima va qanday o‘rnatiladi: bosqichma-bosqich, taymer qo‘yish, collectible statuslar va Premium shartlari.",
      answerTitle: "Qisqa javob",
      Answer: UzAnswer,
      Body: UzBody,
      ctaHeading: "Profilingizni yangilamoqchimisiz?",
      ctaBody: "Premium’ni so‘mda, mahalliy karta bilan @StarsPaymee_bot orqali 10 soniyada oling.",
      faq: [
        {
          question: "Emoji statusni qayerdan o‘rnatish mumkin?",
          answer: "Sozlamalar → profil ismi ustiga bosib, chiqqan ro‘yxatdan emoji tanlash orqali.",
        },
        {
          question: "Emoji statusga taymer qo‘yish mumkinmi?",
          answer: "Ha, muddat belgilash mumkin — masalan 1 soat yoki bugun kechgacha, muddat tugagach avtomatik o‘chadi.",
        },
        {
          question: "Emoji status uchun Premium shartmi?",
          answer: "To‘liq to‘plam, animatsion va collectible statuslar uchun odatda Premium kerak; ba’zi oddiy emoji bepul foydalanuvchilarga ham ochiq.",
        },
        {
          question: "Collectible status nima?",
          answer: "Bu — cheklangan sonda chiqarilgan, alohida dizaynga ega noyob emoji status, ko‘pincha Gifts kolleksiyasi bilan bog‘liq.",
        },
        {
          question: "Statusni istalgan vaqtda o‘chirish mumkinmi?",
          answer: "Ha, xohlagan vaqtda o‘sha sozlama orqali statusni olib tashlash yoki almashtirish mumkin.",
        },
      ],
    },
    ru: {
      title: "Что такое emoji-статус Telegram и как его установить? (2026)",
      excerpt:
        "Emoji-статус Telegram — небольшой значок рядом с именем: как установить, задать таймер, что такое collectible-статусы и связь с Premium.",
      metaTitle: "Установка emoji-статуса Telegram — руководство 2026",
      metaDescription:
        "Что такое emoji-статус Telegram и как его установить: пошагово, установка таймера, collectible-статусы и условия Premium.",
      answerTitle: "Краткий ответ",
      Answer: RuAnswer,
      Body: RuBody,
      ctaHeading: "Хотите обновить профиль?",
      ctaBody: "Купите Premium в сумах локальной картой через @StarsPaymee_bot за 10 секунд.",
      faq: [
        {
          question: "Где установить emoji-статус?",
          answer: "В Настройках → нажмите на имя профиля и выберите эмодзи из появившегося списка.",
        },
        {
          question: "Можно ли установить таймер на emoji-статус?",
          answer: "Да, можно задать срок — например, 1 час или до конца дня, по истечении срока статус исчезает автоматически.",
        },
        {
          question: "Обязателен ли Premium для emoji-статуса?",
          answer: "Для полного набора, анимированных и collectible-статусов обычно нужен Premium; часть обычных эмодзи доступна и бесплатным пользователям.",
        },
        {
          question: "Что такое collectible-статус?",
          answer: "Это редкий emoji-статус ограниченного тиража с особым дизайном, часто связанный с коллекцией Gifts.",
        },
        {
          question: "Можно ли убрать статус в любой момент?",
          answer: "Да, статус можно убрать или заменить в любое время через те же настройки.",
        },
      ],
    },
  },
};
