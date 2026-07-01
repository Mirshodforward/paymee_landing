import { Link } from "@/i18n/navigation";
import { Toc, InfoGrid, InfoCard, InlineCta, KeyFacts, Sources } from "@/components/blog/aeo-blocks";
import type { AeoPost } from "@/lib/blog-aeo/types";

const SLUG = "telegram-ekotizimi-stars-premium-gifts-ton";

function UzAnswer() {
  return (
    <p>
      Telegram ekotizimi — bu bir-biriga bog‘langan mahsulotlar tizimi: <strong>Premium</strong> (obuna),{" "}
      <strong>Stars</strong> (ichki valyuta), <strong>Gifts</strong> (raqamli sovg‘alar), <strong>TON</strong>{" "}
      (blokcheyn/kripto), <strong>Mini Apps</strong> (ilova ichidagi ilovalar) va <strong>Bots</strong> (avtomatlashtirilgan
      xizmatlar). Markazda Stars turadi: u sovg‘a, to‘lov va monetizatsiyani bog‘laydi; Fragment orqali TON’ga chiqadi;
      Premium tajribani, Mini Apps va Botlar esa funksionallikni kengaytiradi.
    </p>
  );
}

function UzBody() {
  return (
    <>
      <Toc
        label="Mundarija"
        items={[
          { href: "#nima", label: "Ekotizim nima" },
          { href: "#qismlar", label: "6 asosiy qism" },
          { href: "#boglanish", label: "Ular qanday bog‘lanadi" },
          { href: "#markaz", label: "Nega Stars markazda" },
          { href: "#ozbekiston", label: "O‘zbekiston uchun kirish nuqtasi" },
        ]}
      />

      <h2 id="nima">Telegram ekotizimi nima?</h2>
      <p>
        Telegram endi shunchaki messenjer emas — bu <strong>o‘zaro bog‘langan mahsulotlar platformasi</strong>. Har bir
        qism alohida ishlaydi, lekin birgalikda yagona iqtisodiy va texnologik tizim hosil qiladi. Ushbu pillar maqola
        barcha qismlarni bir joyda ko‘rsatadi va tegishli chuqur maqolalarga yo‘naltiradi.
      </p>

      <h2 id="qismlar">Ekotizimning 6 asosiy qismi</h2>
      <InfoGrid>
        <InfoCard emoji="⭐" title="Telegram Stars">
          Ichki valyuta — sovg‘a, to‘lov, kontent va monetizatsiya asosi.{" "}
          <Link href="/blog/telegram-stars-qanday-ishlaydi">Batafsil</Link>
        </InfoCard>
        <InfoCard emoji="👑" title="Telegram Premium">
          Obuna: katta fayl, tez yuklash, emoji, reklamasiz tajriba.{" "}
          <Link href="/blog/telegram-premium-arziydimi-foydalari">Batafsil</Link>
        </InfoCard>
        <InfoCard emoji="🎁" title="Telegram Gifts">
          Raqamli va collectible sovg‘alar; kolleksiya va almashuv.{" "}
          <Link href="/blog/telegram-gifts-kolleksiya-rare-sovgalar">Batafsil</Link>
        </InfoCard>
        <InfoCard emoji="💎" title="TON">
          Blokcheyn/kripto tarmoq — Stars’ni pulga chiqarishda bog‘lovchi.{" "}
          <Link href="/blog/telegram-stars-vs-ton-qaysi-biri">Batafsil</Link>
        </InfoCard>
        <InfoCard emoji="📱" title="Mini Apps">
          Ilova ichidagi ilovalar: do‘kon, o‘yin, xizmat — Stars bilan to‘lov.
        </InfoCard>
        <InfoCard emoji="🤖" title="Bots">
          Avtomatlashtirilgan xizmatlar: xarid, yordam, integratsiya.
        </InfoCard>
      </InfoGrid>

      <InlineCta text="Ekotizimga kirish — Stars’dan boshlanadi. Botda so‘mda 10 soniyada." />

      <h2 id="boglanish">Ular qanday bog‘lanadi?</h2>
      <p>
        Bog‘lanish oddiy: foydalanuvchi <strong>Stars</strong> sotib oladi va uni <strong>Gifts</strong> yuborish,{" "}
        <strong>Premium</strong> hadya qilish yoki <strong>Bot/Mini App</strong> xizmatlariga to‘lash uchun sarflaydi.
        Kreator jamlagan Stars’ni <strong>Fragment</strong> orqali <strong>TON</strong>’ga, undan pulga chiqaradi. Ya’ni
        Stars — barcha qismlarni bir-biriga ulaydigan «tomir».
      </p>

      <KeyFacts label="Bog‘lanish zanjiri">
        <li>
          <b>Stars</b> → Gifts, Premium, Bot/Mini App to‘lovlari
        </li>
        <li>
          <b>Kreator Stars</b> → Fragment → TON → pul
        </li>
        <li>
          <b>Mini Apps / Bots</b> → Stars bilan ichki savdo
        </li>
      </KeyFacts>

      <h2 id="markaz">Nega aynan Stars markazda?</h2>
      <p>
        Chunki Stars — ekotizimning <strong>umumiy pul birligi</strong>. Premium, Gifts, Mini Apps va Botlar turli
        funksiyalarni bajaradi, lekin ularning barchasidagi <em>qiymat almashinuvi</em> Stars orqali kechadi. TON esa bu
        ichki qiymatni tashqi dunyoga (real pulga) ulaydigan ko‘prik. Shu sabab Stars’ni tushunish — butun ekotizimni
        tushunish demak. Stars bilan nima qilish mumkinligini{" "}
        <Link href="/blog/telegram-stars-nima-uchun-ishlatiladi-usullar">«Stars ishlatish usullari»</Link> va{" "}
        <Link href="/blog/telegram-stars-bilan-nima-sotib-olish-mumkin">«Stars bilan nima olish mumkin»</Link>{" "}
        maqolalarida ko‘ring. Iqtisodiy tomoni esa{" "}
        <Link href="/blog/telegram-creator-economy-stars">«Creator Economy»</Link> maqolasida.
      </p>

      <h2 id="ozbekiston">O‘zbekiston uchun kirish nuqtasi</h2>
      <p>
        Ekotizimning istalgan qismidan foydalanish uchun ko‘pincha Stars yoki Premium kerak bo‘ladi. O‘zbekistonda eng
        qulay kirish nuqtasi — so‘mda, mahalliy karta (UzCard/HUMO/Click/Payme) bilan botdan olish. Stars’ni qayerdan
        olishni{" "}
        <Link href="/blog/telegram-stars-qayerdan-sotib-olish-2026">«Stars qayerdan sotib olish»</Link>, Premium’ni esa{" "}
        <Link href="/blog/telegram-premium-eng-oson-usul">«Premium eng oson usul»</Link> maqolasida ko‘rasiz. Umumiy
        savollar —{" "}
        <Link href="/blog/telegram-stars-savol-javob-faq">«Stars FAQ»</Link> da.
      </p>

      <Sources
        label="Manbalar"
        items={[
          { href: "https://telegram.org/blog/telegram-stars", label: "telegram.org/blog/telegram-stars", note: "Stars rasmiy e’loni" },
          { href: "https://core.telegram.org/bots/webapps", label: "core.telegram.org/bots/webapps", note: "Mini Apps hujjati" },
          { href: "https://ton.org", label: "ton.org", note: "TON tarmog‘i" },
        ]}
      />
    </>
  );
}

function RuAnswer() {
  return (
    <p>
      Экосистема Telegram — это система взаимосвязанных продуктов: <strong>Premium</strong> (подписка),{" "}
      <strong>Stars</strong> (внутренняя валюта), <strong>Gifts</strong> (цифровые подарки), <strong>TON</strong>{" "}
      (блокчейн/крипто), <strong>Mini Apps</strong> (приложения внутри приложения) и <strong>Bots</strong>{" "}
      (автоматизированные сервисы). В центре — Stars: они связывают подарки, оплату и монетизацию; выводятся через
      Fragment в TON; Premium расширяет опыт, а Mini Apps и Bots — функциональность.
    </p>
  );
}

function RuBody() {
  return (
    <>
      <Toc
        label="Содержание"
        items={[
          { href: "#nima", label: "Что такое экосистема" },
          { href: "#qismlar", label: "6 основных частей" },
          { href: "#boglanish", label: "Как они связаны" },
          { href: "#markaz", label: "Почему Stars в центре" },
          { href: "#ozbekiston", label: "Точка входа для Узбекистана" },
        ]}
      />

      <h2 id="nima">Что такое экосистема Telegram?</h2>
      <p>
        Telegram теперь не просто мессенджер — это <strong>платформа взаимосвязанных продуктов</strong>. Каждая часть
        работает отдельно, но вместе они образуют единую экономическую и технологическую систему. Эта pillar-статья
        показывает все части в одном месте и ведёт к соответствующим глубоким статьям.
      </p>

      <h2 id="qismlar">6 основных частей экосистемы</h2>
      <InfoGrid>
        <InfoCard emoji="⭐" title="Telegram Stars">
          Внутренняя валюта — основа подарков, оплаты, контента и монетизации.{" "}
          <Link href="/blog/telegram-stars-qanday-ishlaydi">Подробнее</Link>
        </InfoCard>
        <InfoCard emoji="👑" title="Telegram Premium">
          Подписка: большие файлы, быстрая загрузка, эмодзи, без рекламы.{" "}
          <Link href="/blog/telegram-premium-arziydimi-foydalari">Подробнее</Link>
        </InfoCard>
        <InfoCard emoji="🎁" title="Telegram Gifts">
          Цифровые и collectible подарки; коллекция и обмен.{" "}
          <Link href="/blog/telegram-gifts-kolleksiya-rare-sovgalar">Подробнее</Link>
        </InfoCard>
        <InfoCard emoji="💎" title="TON">
          Блокчейн/крипто-сеть — связующее звено для вывода Stars в деньги.{" "}
          <Link href="/blog/telegram-stars-vs-ton-qaysi-biri">Подробнее</Link>
        </InfoCard>
        <InfoCard emoji="📱" title="Mini Apps">
          Приложения внутри приложения: магазин, игра, сервис — оплата Stars.
        </InfoCard>
        <InfoCard emoji="🤖" title="Bots">
          Автоматизированные сервисы: покупка, помощь, интеграции.
        </InfoCard>
      </InfoGrid>

      <InlineCta text="Вход в экосистему — со Stars. В боте в сумах за 10 секунд." />

      <h2 id="boglanish">Как они связаны?</h2>
      <p>
        Связь проста: пользователь покупает <strong>Stars</strong> и тратит их на отправку <strong>Gifts</strong>,
        дарение <strong>Premium</strong> или оплату сервисов <strong>Bot/Mini App</strong>. Автор выводит накопленные
        Stars через <strong>Fragment</strong> в <strong>TON</strong>, а оттуда в деньги. То есть Stars — «сосуд»,
        соединяющий все части.
      </p>

      <KeyFacts label="Цепочка связей">
        <li>
          <b>Stars</b> → Gifts, Premium, оплата Bot/Mini App
        </li>
        <li>
          <b>Stars автора</b> → Fragment → TON → деньги
        </li>
        <li>
          <b>Mini Apps / Bots</b> → внутренняя торговля за Stars
        </li>
      </KeyFacts>

      <h2 id="markaz">Почему именно Stars в центре?</h2>
      <p>
        Потому что Stars — <strong>общая денежная единица</strong> экосистемы. Premium, Gifts, Mini Apps и Bots
        выполняют разные функции, но <em>обмен ценностью</em> во всех них проходит через Stars. А TON — мост, соединяющий
        эту внутреннюю ценность с внешним миром (реальными деньгами). Поэтому понять Stars — значит понять всю
        экосистему. Что можно делать со Stars — в статьях{" "}
        <Link href="/blog/telegram-stars-nima-uchun-ishlatiladi-usullar">«Способы использования Stars»</Link> и{" "}
        <Link href="/blog/telegram-stars-bilan-nima-sotib-olish-mumkin">«Что можно купить за Stars»</Link>. Экономическая
        сторона — в статье{" "}
        <Link href="/blog/telegram-creator-economy-stars">«Creator Economy»</Link>.
      </p>

      <h2 id="ozbekiston">Точка входа для Узбекистана</h2>
      <p>
        Чтобы пользоваться любой частью экосистемы, обычно нужны Stars или Premium. В Узбекистане самая удобная точка
        входа — покупка в сумах локальной картой (UzCard/HUMO/Click/Payme) через бота. Где взять Stars — в статье{" "}
        <Link href="/blog/telegram-stars-qayerdan-sotib-olish-2026">«Где купить Stars»</Link>, а Premium — в{" "}
        <Link href="/blog/telegram-premium-eng-oson-usul">«Premium самым простым способом»</Link>. Общие вопросы — в{" "}
        <Link href="/blog/telegram-stars-savol-javob-faq">«Stars FAQ»</Link>.
      </p>

      <Sources
        label="Источники"
        items={[
          { href: "https://telegram.org/blog/telegram-stars", label: "telegram.org/blog/telegram-stars", note: "официальный анонс Stars" },
          { href: "https://core.telegram.org/bots/webapps", label: "core.telegram.org/bots/webapps", note: "документация Mini Apps" },
          { href: "https://ton.org", label: "ton.org", note: "сеть TON" },
        ]}
      />
    </>
  );
}

export const post: AeoPost = {
  slug: SLUG,
  category: "Telegram",
  type: "info",
  datePublished: "2026-07-01",
  dateModified: "2026-07-01",
  keywords: [
    "telegram ekotizimi",
    "telegram ecosystem",
    "telegram stars premium gifts ton",
    "telegram mini apps",
    "telegram bots",
    "telegram stars ton bogliqlik",
  ],
  locales: {
    uz: {
      title: "Telegram ekotizimi: Premium, Stars, Gifts, TON, Mini Apps va Bots qanday bog‘langan? (2026)",
      excerpt:
        "Telegram ekotizimining 6 asosiy qismi — Stars, Premium, Gifts, TON, Mini Apps va Bots — qanday ishlaydi va o‘zaro qanday bog‘lanadi. To‘liq pillar qo‘llanma.",
      metaTitle: "Telegram ekotizimi: Stars, Premium, Gifts, TON — 2026",
      metaDescription:
        "Telegram ekotizimi qanday bog‘langan: Stars, Premium, Gifts, TON, Mini Apps va Bots. Har bir qism, ular orasidagi bog‘lanish va Stars nega markazda ekani.",
      answerTitle: "Qisqa javob",
      Answer: UzAnswer,
      Body: UzBody,
      ctaHeading: "Ekotizimga kirasizmi?",
      ctaBody: "Boshlash uchun Stars’ni so‘mda, mahalliy karta bilan @StarsPaymee_bot orqali 10 soniyada oling.",
      faq: [
        {
          question: "Telegram ekotizimi nimalardan iborat?",
          answer:
            "Asosan 6 qism: Stars (valyuta), Premium (obuna), Gifts (sovg‘alar), TON (kripto), Mini Apps (ilovalar) va Bots (avtomatik xizmatlar).",
        },
        {
          question: "Ekotizimda Stars qanday rol o‘ynaydi?",
          answer:
            "Stars — umumiy ichki valyuta. Sovg‘a, Premium hadya, bot/Mini App to‘lovlari va monetizatsiya shular orqali ishlaydi.",
        },
        {
          question: "Stars va TON qanday bog‘lanadi?",
          answer:
            "Kreator ishlab topgan Stars Fragment orqali TON’ga chiqariladi, TON esa real pulga aylantiriladi. TON — ichki qiymatni tashqariga ulaydigan ko‘prik.",
        },
        {
          question: "Mini Apps va Bots ekotizimga qanday qo‘shiladi?",
          answer:
            "Ular funksionallikni beradi — do‘kon, o‘yin, xizmat va avtomatlashtirish. Ichidagi to‘lovlar ko‘pincha Stars bilan amalga oshadi.",
        },
        {
          question: "O‘zbekistonda ekotizimga qanday kiriladi?",
          answer:
            "Eng qulayi — Stars yoki Premium’ni so‘mda, mahalliy karta bilan botdan olish. Shundan so‘ng ekotizimning barcha qismidan foydalanish mumkin.",
        },
      ],
    },
    ru: {
      title: "Экосистема Telegram: как связаны Premium, Stars, Gifts, TON, Mini Apps и Bots? (2026)",
      excerpt:
        "6 основных частей экосистемы Telegram — Stars, Premium, Gifts, TON, Mini Apps и Bots — как работают и как связаны между собой. Полное pillar-руководство.",
      metaTitle: "Экосистема Telegram: Stars, Premium, Gifts, TON — 2026",
      metaDescription:
        "Как связана экосистема Telegram: Stars, Premium, Gifts, TON, Mini Apps и Bots. Каждая часть, связь между ними и почему Stars в центре.",
      answerTitle: "Краткий ответ",
      Answer: RuAnswer,
      Body: RuBody,
      ctaHeading: "Войдёте в экосистему?",
      ctaBody: "Для старта купите Stars в сумах локальной картой через @StarsPaymee_bot за 10 секунд.",
      faq: [
        {
          question: "Из чего состоит экосистема Telegram?",
          answer:
            "В основном из 6 частей: Stars (валюта), Premium (подписка), Gifts (подарки), TON (крипто), Mini Apps (приложения) и Bots (автосервисы).",
        },
        {
          question: "Какую роль играют Stars в экосистеме?",
          answer:
            "Stars — общая внутренняя валюта. Через них работают подарки, дарение Premium, оплата в ботах/Mini App и монетизация.",
        },
        {
          question: "Как связаны Stars и TON?",
          answer:
            "Заработанные автором Stars выводятся через Fragment в TON, а TON превращается в реальные деньги. TON — мост между внутренней ценностью и внешним миром.",
        },
        {
          question: "Как Mini Apps и Bots встраиваются в экосистему?",
          answer:
            "Они дают функциональность — магазин, игру, сервис и автоматизацию. Оплата внутри них часто идёт через Stars.",
        },
        {
          question: "Как войти в экосистему в Узбекистане?",
          answer:
            "Удобнее всего купить Stars или Premium в сумах локальной картой через бота. После этого доступны все части экосистемы.",
        },
      ],
    },
  },
};
