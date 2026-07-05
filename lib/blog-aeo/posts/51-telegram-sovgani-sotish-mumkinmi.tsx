import { Link } from "@/i18n/navigation";
import { Toc, Steps, Step, InlineCta, KeyFacts, Sources } from "@/components/blog/aeo-blocks";
import type { AeoPost } from "@/lib/blog-aeo/types";

const SLUG = "telegram-sovgani-sotish-mumkinmi";

function UzAnswer() {
  return (
    <p>
      Ha, <strong>collectible</strong> darajasiga ko‘tarilgan Telegram sovg‘alarini sotish mumkin — bu odatda{" "}
      <strong>Fragment</strong> platformasi yoki shunga o‘xshash ikkilamchi bozor orqali TON evaziga amalga
      oshiriladi. Oddiy (upgrade qilinmagan) sovg‘alarni esa boshqa foydalanuvchiga sotish odatiy emas — ular
      faqat sovg‘a sifatida yuboriladi yoki Stars’ga konvert qilinadi. Narx belgilashda bozordagi shunga o‘xshash
      sovg‘alar narxiga qarab yo‘naltirilish tavsiya etiladi.
    </p>
  );
}

function UzBody() {
  return (
    <>
      <Toc
        label="Mundarija"
        items={[
          { href: "#qaysi", label: "Qaysi sovg'alar sotiladi" },
          { href: "#bozor", label: "Telegram ichki bozori va Fragment" },
          { href: "#bosqichlar", label: "Sotish bosqichlari" },
          { href: "#narx", label: "Narxni qanday belgilash" },
          { href: "#risklar", label: "E'tiborga olish kerak bo'lgan risklar" },
        ]}
      />

      <h2 id="qaysi">Qaysi sovg‘alarni sotish mumkin?</h2>
      <p>
        Sotish imkoniyati asosan <strong>collectible</strong> darajasiga ko‘tarilgan (upgrade qilingan) sovg‘alarga
        tegishli — ular noyob raqam va atributlarga ega bo‘lgani uchun boshqa foydalanuvchiga uzatilishi mumkin.
        Oddiy sovg‘alarni to‘g‘ridan-to‘g‘ri «sotish» odatiy emas; ularni Stars’ga qaytarish (convert) mumkin —
        farqini{" "}
        <Link href="/blog/telegram-gift-stars-ga-aylantirish">«Gift’ni Stars’ga aylantirish»</Link> maqolasida
        ko‘ring.
      </p>

      <h2 id="bozor">Telegram ichki bozori va Fragment</h2>
      <p>
        Collectible sovg‘alar uchun asosiy savdo maydoni — <strong>Fragment</strong>, Telegram’ning rasmiy TON
        asosidagi platformasi. U yerda foydalanuvchilar collectible sovg‘alarini ro‘yxatga qo‘yishi, narx belgilashi
        va TON evaziga sotishi mumkin. Bu tizim Gifts kolleksiyasi bilan chambarchas bog‘liq —{" "}
        <Link href="/blog/telegram-gifts-kolleksiya-rare-sovgalar">«Gifts kolleksiyasi va rare sovg‘alar»</Link>{" "}
        maqolasida umumiy manzara berilgan.
      </p>

      <h2 id="bosqichlar">Sovg‘ani sotish — umumiy bosqichlar</h2>
      <Steps>
        <Step title="Sovg‘a collectible ekanini tekshiring">Faqat upgrade qilingan sovg‘alar sotuvga qo‘yiladi.</Step>
        <Step title="Bozorni oching">Fragment yoki shunga o‘xshash platformaga o‘ting.</Step>
        <Step title="Sovg‘ani ro‘yxatga qo‘ying">Sotmoqchi bo‘lgan sovg‘ani tanlab, ro‘yxatga chiqaring.</Step>
        <Step title="Narx belgilang">Bozordagi shunga o‘xshash sovg‘alar narxiga qarab summani kiriting.</Step>
        <Step title="Xaridorni kuting">Sovg‘a sotilgach, TON hamyoningizga tushadi.</Step>
      </Steps>

      <InlineCta text="Sotishdan oldin yangi sovg‘a yuborish uchun Stars kerakmi? Botda so‘mda 10 soniyada." />

      <h2 id="narx">Narxni qanday to‘g‘ri belgilash mumkin?</h2>
      <KeyFacts label="Narx belgilash mezonlari">
        <li>
          <b>O‘xshash sovg‘alarni solishtiring:</b> bir xil turdagi collectible’larning joriy bozor narxiga qarang.
        </li>
        <li>
          <b>Raqam va noyoblikni hisobga oling:</b> past raqamli yoki noyob kombinatsiya yuqoriroq narxga loyiq.
        </li>
        <li>
          <b>Bozor holatini kuzating:</b> TON/kripto bozori tebranishlari narxga ta’sir qilishi mumkin.
        </li>
      </KeyFacts>
      <p>
        Eng qimmat sotilgan sovg‘alar haqida{" "}
        <Link href="/blog/eng-qimmat-telegram-sovgalari-reytingi">«Eng qimmat Telegram sovg‘alari»</Link>{" "}
        maqolasida o‘qishingiz mumkin.
      </p>

      <h2 id="risklar">E’tiborga olish kerak bo‘lgan risklar</h2>
      <ul>
        <li>
          <strong>Narx beqarorligi:</strong> raqamli kolleksiya bozori tez o‘zgaruvchan, garov emas.
        </li>
        <li>
          <strong>TON hamyoni kerak:</strong> sotishdan pul olish uchun TON hamyoni zarur.
        </li>
        <li>
          <strong>Faqat rasmiy platformadan foydalaning:</strong> tashqi, notanish «xaridor»larga ishonmang —
          firibgarlik xavfi bor.
        </li>
      </ul>

      <Sources
        label="Manbalar"
        items={[
          { href: "https://fragment.com", label: "fragment.com", note: "Telegram’ning rasmiy TON bozori" },
          { href: "https://core.telegram.org/api/gifts", label: "core.telegram.org/api/gifts", note: "Gifts texnik hujjati" },
        ]}
      />
    </>
  );
}

function RuAnswer() {
  return (
    <p>
      Да, подарки Telegram, повышенные до уровня <strong>collectible</strong>, можно продать — обычно это делается
      через платформу <strong>Fragment</strong> или похожий вторичный рынок за TON. Обычные (не апгрейженные)
      подарки напрямую «продавать» нельзя; их можно конвертировать в Stars — разницу смотрите в статье{" "}
      <Link href="/blog/telegram-gift-stars-ga-aylantirish">«Конвертация Gift в Stars»</Link>. При установке цены
      рекомендуется ориентироваться на стоимость похожих подарков на рынке.
    </p>
  );
}

function RuBody() {
  return (
    <>
      <Toc
        label="Содержание"
        items={[
          { href: "#qaysi", label: "Какие подарки продаются" },
          { href: "#bozor", label: "Внутренний рынок Telegram и Fragment" },
          { href: "#bosqichlar", label: "Шаги продажи" },
          { href: "#narx", label: "Как установить цену" },
          { href: "#risklar", label: "Риски, которые стоит учитывать" },
        ]}
      />

      <h2 id="qaysi">Какие подарки можно продать?</h2>
      <p>
        Возможность продажи в основном касается подарков, повышенных до уровня <strong>collectible</strong> — они
        имеют уникальный номер и атрибуты, поэтому могут быть переданы другому пользователю. Обычные подарки напрямую
        «продать» нельзя; их можно конвертировать в Stars — разницу смотрите в статье{" "}
        <Link href="/blog/telegram-gift-stars-ga-aylantirish">«Конвертация Gift в Stars»</Link>.
      </p>

      <h2 id="bozor">Внутренний рынок Telegram и Fragment</h2>
      <p>
        Основная торговая площадка для collectible-подарков — <strong>Fragment</strong>, официальная платформа
        Telegram на базе TON. Там пользователи могут выставлять collectible-подарки, устанавливать цену и продавать
        за TON. Эта система тесно связана с коллекцией Gifts — общая картина в статье{" "}
        <Link href="/blog/telegram-gifts-kolleksiya-rare-sovgalar">«Коллекция Gifts и редкие подарки»</Link>.
      </p>

      <h2 id="bosqichlar">Продажа подарка — общие шаги</h2>
      <Steps>
        <Step title="Проверьте, что подарок collectible">На продажу выставляются только апгрейженные подарки.</Step>
        <Step title="Откройте рынок">Перейдите на Fragment или похожую платформу.</Step>
        <Step title="Выставите подарок">Выберите подарок для продажи и разместите его в листинге.</Step>
        <Step title="Установите цену">Укажите сумму, ориентируясь на цены похожих подарков на рынке.</Step>
        <Step title="Дождитесь покупателя">После продажи TON поступит в ваш кошелёк.</Step>
      </Steps>

      <InlineCta text="Нужны Stars, чтобы отправить новый подарок перед продажей? В боте — в сумах за 10 секунд." />

      <h2 id="narx">Как правильно установить цену?</h2>
      <KeyFacts label="Критерии установки цены">
        <li>
          <b>Сравните похожие подарки:</b> посмотрите на текущую рыночную цену того же типа collectible.
        </li>
        <li>
          <b>Учитывайте номер и редкость:</b> низкий номер или редкая комбинация заслуживают более высокой цены.
        </li>
        <li>
          <b>Следите за состоянием рынка:</b> колебания рынка TON/крипты могут влиять на цену.
        </li>
      </KeyFacts>
      <p>
        О самых дорого проданных подарках можно прочитать в статье{" "}
        <Link href="/blog/eng-qimmat-telegram-sovgalari-reytingi">«Самые дорогие подарки Telegram»</Link>.
      </p>

      <h2 id="risklar">Риски, которые стоит учитывать</h2>
      <ul>
        <li>
          <strong>Нестабильность цены:</strong> рынок цифровых коллекций быстро меняется, это не гарантия дохода.
        </li>
        <li>
          <strong>Нужен TON-кошелёк:</strong> для получения денег от продажи требуется TON-кошелёк.
        </li>
        <li>
          <strong>Используйте только официальную платформу:</strong> не доверяйте внешним, незнакомым «покупателям»
          — риск мошенничества.
        </li>
      </ul>

      <Sources
        label="Источники"
        items={[
          { href: "https://fragment.com", label: "fragment.com", note: "официальный рынок TON от Telegram" },
          { href: "https://core.telegram.org/api/gifts", label: "core.telegram.org/api/gifts", note: "техдокументация Gifts" },
        ]}
      />
    </>
  );
}

export const post: AeoPost = {
  slug: SLUG,
  category: "Gifts",
  type: "howto",
  datePublished: "2026-07-05",
  dateModified: "2026-07-05",
  keywords: [
    "telegram gift sotish",
    "telegram sovgani sotish",
    "telegram gift bozori",
    "sell telegram gift",
    "telegram collectible sotish",
  ],
  howToSteps: [
    { name: "Sovg‘a collectible ekanini tekshiring", text: "Faqat upgrade qilingan sovg‘alar sotuvga qo‘yiladi." },
    { name: "Bozorni oching", text: "Fragment yoki shunga o‘xshash platformaga o‘ting." },
    { name: "Sovg‘ani ro‘yxatga qo‘ying", text: "Sotmoqchi bo‘lgan sovg‘ani tanlab, ro‘yxatga chiqaring." },
    { name: "Narx belgilang", text: "Bozordagi shunga o‘xshash sovg‘alar narxiga qarang." },
    { name: "Xaridorni kuting", text: "Sovg‘a sotilgach, TON hamyoningizga tushadi." },
  ],
  locales: {
    uz: {
      title: "Telegram sovg‘asini sotish mumkinmi? Gift bozori va narx belgilash (2026)",
      excerpt:
        "Telegram sovg‘asini sotish mumkinmi: Telegram ichki bozori, Fragment orqali savdo, narx belgilash strategiyasi va risklar.",
      metaTitle: "Telegram sovg‘asini sotish — Gift bozori 2026",
      metaDescription:
        "Telegram sovg‘asini sotish mumkinmi: qaysi sovg‘alar sotiladi, Fragment orqali savdo bosqichlari, narx belgilash va e'tiborga olish kerak bo'lgan risklar.",
      answerTitle: "Qisqa javob",
      Answer: UzAnswer,
      Body: UzBody,
      ctaHeading: "Yangi sovg‘a yubormoqchimisiz?",
      ctaBody: "Stars’ni so‘mda, mahalliy karta bilan @StarsPaymee_bot orqali 10 soniyada oling.",
      faq: [
        {
          question: "Har qanday Telegram sovg‘asini sotsa bo‘ladimi?",
          answer: "Yo‘q, odatda faqat collectible darajasiga ko‘tarilgan sovg‘alarni sotish mumkin.",
        },
        {
          question: "Sovg‘ani qayerda sotish mumkin?",
          answer: "Asosan Fragment platformasida yoki shunga o‘xshash TON asosidagi ikkilamchi bozorlarda.",
        },
        {
          question: "Sotishdan tushgan pul qanday ko‘rinishda keladi?",
          answer: "TON kriptovalyutasi ko‘rinishida, sotuvchining TON hamyoniga tushadi.",
        },
        {
          question: "Narxni qanday belgilash kerak?",
          answer: "Bozordagi shunga o‘xshash sovg‘alarning joriy narxiga qarab, raqam va noyoblikni hisobga olib belgilash tavsiya etiladi.",
        },
        {
          question: "Sovg‘a savdosida qanday risklar bor?",
          answer: "Narx beqarorligi va faqat rasmiy platformadan foydalanish zarurati — notanish xaridorlarga ishonmaslik kerak.",
        },
      ],
    },
    ru: {
      title: "Можно ли продать подарок Telegram? Рынок Gift и установка цены (2026)",
      excerpt:
        "Можно ли продать подарок Telegram: внутренний рынок Telegram, торговля через Fragment, стратегия установки цены и риски.",
      metaTitle: "Продажа подарка Telegram — рынок Gift 2026",
      metaDescription:
        "Можно ли продать подарок Telegram: какие подарки продаются, шаги торговли через Fragment, установка цены и риски, которые стоит учитывать.",
      answerTitle: "Краткий ответ",
      Answer: RuAnswer,
      Body: RuBody,
      ctaHeading: "Хотите отправить новый подарок?",
      ctaBody: "Купите Stars в сумах локальной картой через @StarsPaymee_bot за 10 секунд.",
      faq: [
        {
          question: "Можно ли продать любой подарок Telegram?",
          answer: "Нет, обычно продать можно только подарки, повышенные до уровня collectible.",
        },
        {
          question: "Где можно продать подарок?",
          answer: "В основном на платформе Fragment или похожих вторичных рынках на базе TON.",
        },
        {
          question: "В каком виде приходят деньги от продажи?",
          answer: "В виде криптовалюты TON, они поступают в TON-кошелёк продавца.",
        },
        {
          question: "Как правильно установить цену?",
          answer: "Рекомендуется ориентироваться на текущую цену похожих подарков на рынке, учитывая номер и редкость.",
        },
        {
          question: "Какие риски есть при продаже подарков?",
          answer: "Нестабильность цены и необходимость использовать только официальную платформу — не стоит доверять незнакомым покупателям.",
        },
      ],
    },
  },
};
