import { Link } from "@/i18n/navigation";
import { Steps, Step, InlineCta, KeyFacts, Sources } from "@/components/blog/aeo-blocks";
import type { AeoPost } from "@/lib/blog-aeo/types";

const SLUG = "telegram-stars-qanday-ishlaydi";

function UzAnswer() {
  return (
    <p>
      Telegram Stars — Telegram’ning rasmiy ichki valyutasi. U <strong>akkauntga bog‘langan</strong>, faqat Telegram
      ichida ishlaydi va sovg‘a, Premium, bot to‘lovlari hamda reaksiyalar uchun sarflanadi. Stars sotib olinadi,
      hisobga tushadi va sarflanadi; oddiy foydalanuvchi uni qaytarib pulga aylantira olmaydi (faqat kreatorlar —
      Fragment orqali).
    </p>
  );
}

function UzBody() {
  return (
    <>
      <h2 id="prinsip">Telegram Stars qanday ishlaydi — asosiy prinsip</h2>
      <p>
        Stars — Telegram tomonidan 2024-yilda joriy etilgan ichki hisob-kitob birligi. U haqiqiy pulga emas, balki
        ekotizim ichidagi qiymatga yaqin. Ishlash mantig‘i sodda:
      </p>
      <Steps>
        <Step title="Sotib olasiz">Stars’ni Telegram ichida yoki vositachi (masalan @StarsPaymee_bot) orqali so‘mda olasiz.</Step>
        <Step title="Hisobga tushadi">Yulduzlar akkauntingizga biriktiriladi va balansda turadi.</Step>
        <Step title="Sarflaysiz">Sovg‘a, Premium hadya, bot to‘lovi yoki Star Reaction sifatida ishlatasiz.</Step>
      </Steps>

      <InlineCta text="Stars’ni so‘mda olib, hoziroq ishlatib ko‘ring." />

      <h2 id="qoidalar">Stars qoidalari (Telegram ToS bo‘yicha)</h2>
      <KeyFacts label="Muhim qoidalar">
        <li>
          <b>Akkauntga bog‘liq:</b> balans akkauntingizga biriktirilgan; akkaunt o‘chsa, Stars qaytarilmaydi.
        </li>
        <li>
          <b>Final sale:</b> sotib olingan Stars Telegram tomonidan qaytarilmaydi.
        </li>
        <li>
          <b>Faqat Telegram ichida:</b> tashqi to‘lov tizimlariga o‘tkazib bo‘lmaydi.
        </li>
        <li>
          <b>Muddatsiz:</b> Stars vaqt o‘tishi bilan kuyib ketmaydi.
        </li>
      </KeyFacts>

      <h2 id="qayerdan">Stars qayerdan olinadi va qancha turadi?</h2>
      <p>
        Telegram’ning rasmiy narxiga ko‘ra bir yulduz taxminan 0.013–0.014 dollar atrofida. O‘zbekistonda esa eng oson
        yo‘l — so‘mda, mahalliy karta bilan: bu haqda{" "}
        <Link href="/blog/telegram-stars-qayerdan-sotib-olish-2026">«Stars qayerdan sotib olinadi»</Link> maqolasida
        batafsil. Stars bilan nima qilish mumkinligini{" "}
        <Link href="/blog/telegram-stars-bilan-nima-sotib-olish-mumkin">bu yerda</Link> ko‘ring. Joriy paketlar —{" "}
        <Link href="/stars">Stars sahifasida</Link>.
      </p>

      <Sources
        label="Manbalar"
        items={[
          { href: "https://telegram.org/blog/telegram-stars", label: "telegram.org/blog/telegram-stars", note: "Stars rasmiy e’loni" },
          { href: "https://telegram.org/tos/stars", label: "telegram.org/tos/stars", note: "foydalanish shartlari" },
        ]}
      />
    </>
  );
}

function RuAnswer() {
  return (
    <p>
      Telegram Stars — официальная внутренняя валюта Telegram. Она <strong>привязана к аккаунту</strong>, работает
      только внутри Telegram и тратится на подарки, Premium, оплату в ботах и реакции. Stars покупают, они зачисляются
      на баланс и тратятся; обычный пользователь не может обналичить их (только авторы — через Fragment).
    </p>
  );
}

function RuBody() {
  return (
    <>
      <h2 id="prinsip">Как работают Telegram Stars — основной принцип</h2>
      <p>
        Stars — внутренняя расчётная единица, введённая Telegram в 2024 году. Это не реальные деньги, а ценность внутри
        экосистемы. Логика простая:
      </p>
      <Steps>
        <Step title="Покупаете">Stars покупаются внутри Telegram или через посредника (например @StarsPaymee_bot) в сумах.</Step>
        <Step title="Зачисляются">Звёзды привязываются к вашему аккаунту и хранятся на балансе.</Step>
        <Step title="Тратите">Используете как подарок, дарение Premium, оплату в боте или Star Reaction.</Step>
      </Steps>

      <InlineCta text="Купите Stars в сумах и попробуйте прямо сейчас." />

      <h2 id="qoidalar">Правила Stars (по ToS Telegram)</h2>
      <KeyFacts label="Важные правила">
        <li>
          <b>Привязка к аккаунту:</b> баланс закреплён за аккаунтом; при удалении аккаунта Stars не возвращаются.
        </li>
        <li>
          <b>Final sale:</b> купленные Stars Telegram не возвращает.
        </li>
        <li>
          <b>Только внутри Telegram:</b> вывести во внешние платёжные системы нельзя.
        </li>
        <li>
          <b>Без срока:</b> Stars не сгорают со временем.
        </li>
      </KeyFacts>

      <h2 id="qayerdan">Откуда берутся Stars и сколько стоят?</h2>
      <p>
        По официальной цене Telegram одна звезда стоит примерно 0.013–0.014 доллара. В Узбекистане проще всего — в
        сумах локальной картой: подробнее в статье{" "}
        <Link href="/blog/telegram-stars-qayerdan-sotib-olish-2026">«Где купить Stars»</Link>. Что можно делать со
        Stars — смотрите{" "}
        <Link href="/blog/telegram-stars-bilan-nima-sotib-olish-mumkin">здесь</Link>. Актуальные пакеты — на{" "}
        <Link href="/stars">странице Stars</Link>.
      </p>

      <Sources
        label="Источники"
        items={[
          { href: "https://telegram.org/blog/telegram-stars", label: "telegram.org/blog/telegram-stars", note: "официальный анонс Stars" },
          { href: "https://telegram.org/tos/stars", label: "telegram.org/tos/stars", note: "условия использования" },
        ]}
      />
    </>
  );
}

export const post: AeoPost = {
  slug: SLUG,
  category: "Stars",
  type: "info",
  datePublished: "2026-06-11",
  dateModified: "2026-06-11",
  keywords: [
    "telegram stars qanday ishlaydi",
    "telegram stars qanday valyuta",
    "telegram stars ishlash prinsipi",
    "telegram stars akkauntga bogliq",
    "how telegram stars work",
  ],
  locales: {
    uz: {
      title: "Telegram Stars qanday ishlaydi? — prinsip, qoidalar va narx",
      excerpt:
        "Telegram Stars qanday ishlaydi: akkauntga bog‘langan ichki valyuta, sotib olinadi va sarflanadi. Asosiy qoidalar (final sale, muddatsiz) va narx.",
      metaTitle: "Telegram Stars qanday ishlaydi? — to‘liq tushuntirish",
      metaDescription:
        "Telegram Stars qanday ishlaydi: sotib olish → hisobga tushish → sarflash. Akkauntga bog‘liq, faqat Telegram ichida, final sale, muddatsiz. Narx va qayerdan olish.",
      answerTitle: "Qisqa javob",
      Answer: UzAnswer,
      Body: UzBody,
      ctaHeading: "Stars’ni sinab ko‘rasizmi?",
      ctaBody: "Botda so‘mda oling — yulduzlar 10 soniyada akkauntingizga tushadi.",
      faq: [
        {
          question: "Telegram Stars — bu pulmi?",
          answer:
            "Yo‘q, bu Telegram ichidagi virtual hisob-kitob birligi. Faqat Telegram ekotizimi ichida ishlaydi, tashqariga chiqarib bo‘lmaydi.",
        },
        {
          question: "Stars kuyib ketadimi?",
          answer: "Yo‘q, Stars muddatsiz. Akkaunt faol turguncha balansda saqlanadi.",
        },
        {
          question: "Stars’ni qaytarib pulga aylantirsa bo‘ladimi?",
          answer:
            "Oddiy foydalanuvchi yo‘q. Faqat kreatorlar ishlab topgan Stars’ni Fragment orqali pulga chiqarishi mumkin.",
        },
        {
          question: "Akkauntim o‘chsa Stars nima bo‘ladi?",
          answer: "Stars akkauntga bog‘langan — akkaunt o‘chirilsa yoki kirish yo‘qolsa, balans qaytarilmaydi.",
        },
        {
          question: "Stars qancha turadi?",
          answer:
            "Telegram narxida bir yulduz ~0.013–0.014 dollar. O‘zbekistonda so‘mdagi narxni @StarsPaymee_bot yoki Stars sahifasi ko‘rsatadi.",
        },
      ],
    },
    ru: {
      title: "Как работают Telegram Stars? — принцип, правила и цена",
      excerpt:
        "Как работают Telegram Stars: привязанная к аккаунту внутренняя валюта, покупается и тратится. Основные правила (final sale, без срока) и цена.",
      metaTitle: "Как работают Telegram Stars? — полное объяснение",
      metaDescription:
        "Как работают Telegram Stars: покупка → зачисление → трата. Привязка к аккаунту, только внутри Telegram, final sale, без срока. Цена и где купить.",
      answerTitle: "Краткий ответ",
      Answer: RuAnswer,
      Body: RuBody,
      ctaHeading: "Хотите попробовать Stars?",
      ctaBody: "Купите в боте в сумах — звёзды поступят на аккаунт за 10 секунд.",
      faq: [
        {
          question: "Telegram Stars — это деньги?",
          answer:
            "Нет, это виртуальная расчётная единица внутри Telegram. Работает только в экосистеме Telegram, вывести наружу нельзя.",
        },
        {
          question: "Stars сгорают?",
          answer: "Нет, Stars без срока. Пока аккаунт активен, баланс сохраняется.",
        },
        {
          question: "Можно ли обналичить Stars?",
          answer:
            "Обычный пользователь — нет. Только авторы могут вывести заработанные Stars в деньги через Fragment.",
        },
        {
          question: "Что будет со Stars, если удалить аккаунт?",
          answer: "Stars привязаны к аккаунту — при удалении или потере доступа баланс не возвращается.",
        },
        {
          question: "Сколько стоят Stars?",
          answer:
            "По цене Telegram одна звезда ~0.013–0.014 доллара. Цену в сумах в Узбекистане покажет @StarsPaymee_bot или страница Stars.",
        },
      ],
    },
  },
};
