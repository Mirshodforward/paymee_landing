import { Link } from "@/i18n/navigation";
import { Toc, InlineCta, KeyFacts, Sources } from "@/components/blog/aeo-blocks";
import type { AeoPost } from "@/lib/blog-aeo/types";

const SLUG = "telegram-stars-haqida-hamma-narsa";

function UzAnswer() {
  return (
    <p>
      Telegram Stars — Telegram’ning rasmiy ichki valyutasi: sovg‘a, Premium, bot to‘lovlari va reaksiyalar uchun
      ishlatiladi, akkauntga bog‘langan va faqat Telegram ichida ishlaydi. O‘zbekistonda eng oson yo‘l — so‘mda,
      mahalliy karta (UzCard/HUMO/Click/Payme) bilan @StarsPaymee_bot orqali; buyurtma ~10 soniyada avtomatik. Quyida
      Stars haqida bilish kerak bo‘lgan hamma narsa.
    </p>
  );
}

function UzBody() {
  return (
    <>
      <Toc
        label="Mundarija"
        items={[
          { href: "#nima", label: "Stars nima va qanday ishlaydi" },
          { href: "#nima-uchun", label: "Nimaga ishlatiladi" },
          { href: "#qancha", label: "Narxi qancha" },
          { href: "#qayerdan", label: "Qayerdan sotib olinadi" },
          { href: "#xavfsizlik", label: "Xavfsizlik" },
        ]}
      />

      <h2 id="nima">Telegram Stars nima va qanday ishlaydi?</h2>
      <p>
        Stars — Telegram 2024-yilda joriy etgan ichki raqamli valyuta. U akkauntga bog‘langan, faqat Telegram ichida
        ishlaydi va sarflanadi. Stars sotib olinadi, balansga tushadi va xizmatlarga ishlatiladi. To‘liq mexanizm —{" "}
        <Link href="/blog/telegram-stars-qanday-ishlaydi">«Stars qanday ishlaydi»</Link> maqolasida.
      </p>

      <h2 id="nima-uchun">Stars nimaga ishlatiladi?</h2>
      <p>
        Asosiy yo‘nalishlar: Premium sovg‘a qilish, noyob sovg‘alar (Gifts) yuborish, bot va Mini App to‘lovlari, Star
        Reactions, pulli xabar va kontent. Batafsil ro‘yxat —{" "}
        <Link href="/blog/telegram-stars-bilan-nima-sotib-olish-mumkin">«Stars bilan nima qilish mumkin»</Link> va{" "}
        <Link href="/blog/telegram-stars-nima-uchun-ishlatiladi-usullar">ishlatish usullari</Link> maqolalarida.
      </p>

      <InlineCta text="Stars’ni so‘mda, 10 soniyada — botda oling." />

      <h2 id="qancha">Telegram Stars narxi qancha?</h2>
      <p>
        Telegram narxida bir yulduz taxminan 0.013–0.014 dollar. O‘zbekistonda so‘mdagi narx kursga bog‘liq; platforma
        bo‘yicha taqqoslash —{" "}
        <Link href="/blog/telegram-stars-narxlari-2026-platformalar-taqqoslash">narx maqolasida</Link>. Joriy paketlar{" "}
        <Link href="/stars">Stars sahifasida</Link>.
      </p>

      <h2 id="qayerdan">Stars qayerdan sotib olinadi?</h2>
      <KeyFacts label="Asosiy yo‘llar">
        <li>
          <b>Mahalliy bot/Mini App:</b> so‘mda, UzCard/HUMO/Click/Payme — eng qulayi O‘zbekiston uchun.
        </li>
        <li>
          <b>Telegram ichida (Apple/Google):</b> xorijiy karta talab qiladi.
        </li>
        <li>
          <b>Fragment (TON):</b> kripto hamyon kerak.
        </li>
      </KeyFacts>
      <p>
        To‘liq qo‘llanma —{" "}
        <Link href="/blog/telegram-stars-qayerdan-sotib-olish-2026">«Stars qayerdan sotib olinadi»</Link>. Eng yaxshi
        botni tanlash —{" "}
        <Link href="/blog/telegram-stars-eng-yaxshi-botlar-2026">«eng yaxshi botlar»</Link> maqolasida.
      </p>

      <h2 id="xavfsizlik">Xavfsizlik va muammolar</h2>
      <p>
        Stars/Premium uchun parol so‘ralmaydi — faqat @username. Xavfsiz xarid bo‘yicha{" "}
        <Link href="/blog/telegram-stars-xavfsiz-sotib-olish-qollanma">qo‘llanma</Link> bor; Stars kelmasa nima qilish —{" "}
        <Link href="/blog/telegram-stars-kelmadi-nima-qilish">«Stars kelmadi»</Link> maqolasida. Ko‘p so‘raladigan
        savollar esa <Link href="/blog/telegram-stars-savol-javob-faq">Stars FAQ’da</Link> jamlangan.
      </p>

      <Sources
        label="Manbalar"
        items={[
          { href: "https://telegram.org/blog/telegram-stars", label: "telegram.org/blog/telegram-stars", note: "Stars rasmiy e’loni" },
          { href: "https://core.telegram.org/api/stars", label: "core.telegram.org/api/stars", note: "texnik hujjat" },
          { href: "https://telegram.org/tos/stars", label: "telegram.org/tos/stars", note: "foydalanish shartlari" },
        ]}
      />
    </>
  );
}

function RuAnswer() {
  return (
    <p>
      Telegram Stars — официальная внутренняя валюта Telegram: используется для подарков, Premium, оплаты в ботах и
      реакций, привязана к аккаунту и работает только внутри Telegram. В Узбекистане проще всего — в сумах, локальной
      картой (UzCard/HUMO/Click/Payme) через @StarsPaymee_bot; заказ ~10 секунд автоматически. Ниже — всё, что нужно
      знать о Stars.
    </p>
  );
}

function RuBody() {
  return (
    <>
      <Toc
        label="Содержание"
        items={[
          { href: "#nima", label: "Что такое Stars и как работают" },
          { href: "#nima-uchun", label: "Для чего используются" },
          { href: "#qancha", label: "Сколько стоят" },
          { href: "#qayerdan", label: "Где купить" },
          { href: "#xavfsizlik", label: "Безопасность" },
        ]}
      />

      <h2 id="nima">Что такое Telegram Stars и как работают?</h2>
      <p>
        Stars — внутренняя цифровая валюта, введённая Telegram в 2024 году. Привязана к аккаунту, работает и тратится
        только внутри Telegram. Stars покупают, они зачисляются на баланс и идут на услуги. Полный механизм — в статье{" "}
        <Link href="/blog/telegram-stars-qanday-ishlaydi">«Как работают Stars»</Link>.
      </p>

      <h2 id="nima-uchun">Для чего используются Stars?</h2>
      <p>
        Основные направления: дарение Premium, отправка уникальных подарков (Gifts), оплата в ботах и Mini App, Star
        Reactions, платные сообщения и контент. Подробный список — в статьях{" "}
        <Link href="/blog/telegram-stars-bilan-nima-sotib-olish-mumkin">«Что можно купить за Stars»</Link> и{" "}
        <Link href="/blog/telegram-stars-nima-uchun-ishlatiladi-usullar">способы использования</Link>.
      </p>

      <InlineCta text="Купите Stars в сумах за 10 секунд — в боте." />

      <h2 id="qancha">Сколько стоят Telegram Stars?</h2>
      <p>
        По цене Telegram одна звезда ~0.013–0.014 доллара. В Узбекистане цена в сумах зависит от курса; сравнение по
        платформам — в{" "}
        <Link href="/blog/telegram-stars-narxlari-2026-platformalar-taqqoslash">статье о ценах</Link>. Актуальные пакеты
        — на <Link href="/stars">странице Stars</Link>.
      </p>

      <h2 id="qayerdan">Где купить Stars?</h2>
      <KeyFacts label="Основные способы">
        <li>
          <b>Локальный бот/Mini App:</b> в сумах, UzCard/HUMO/Click/Payme — удобнее всего для Узбекистана.
        </li>
        <li>
          <b>В Telegram (Apple/Google):</b> требуется иностранная карта.
        </li>
        <li>
          <b>Fragment (TON):</b> нужен крипто-кошелёк.
        </li>
      </KeyFacts>
      <p>
        Полное руководство —{" "}
        <Link href="/blog/telegram-stars-qayerdan-sotib-olish-2026">«Где купить Stars»</Link>. Выбор лучшего бота — в{" "}
        <Link href="/blog/telegram-stars-eng-yaxshi-botlar-2026">статье «лучшие боты»</Link>.
      </p>

      <h2 id="xavfsizlik">Безопасность и проблемы</h2>
      <p>
        Для Stars/Premium пароль не нужен — только @username. Есть{" "}
        <Link href="/blog/telegram-stars-xavfsiz-sotib-olish-qollanma">руководство по безопасной покупке</Link>; что
        делать, если Stars не пришли — в статье{" "}
        <Link href="/blog/telegram-stars-kelmadi-nima-qilish">«Stars не пришли»</Link>. Частые вопросы собраны в{" "}
        <Link href="/blog/telegram-stars-savol-javob-faq">Stars FAQ</Link>.
      </p>

      <Sources
        label="Источники"
        items={[
          { href: "https://telegram.org/blog/telegram-stars", label: "telegram.org/blog/telegram-stars", note: "официальный анонс Stars" },
          { href: "https://core.telegram.org/api/stars", label: "core.telegram.org/api/stars", note: "техническая документация" },
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
  datePublished: "2026-06-06",
  dateModified: "2026-06-06",
  keywords: [
    "telegram stars haqida hamma narsa",
    "telegram stars toliq qollanma",
    "telegram stars nima narxi qayerdan",
    "telegram stars hammasi",
    "telegram stars complete guide",
  ],
  locales: {
    uz: {
      title: "Telegram Stars haqida bilishingiz kerak bo‘lgan hamma narsa (2026)",
      excerpt:
        "Telegram Stars bo‘yicha to‘liq qo‘llanma: nima, qanday ishlaydi, nimaga ishlatiladi, narxi, qayerdan olinadi va xavfsizlik. Barcha mavzular bir joyda.",
      metaTitle: "Telegram Stars haqida hamma narsa — to‘liq qo‘llanma 2026",
      metaDescription:
        "Telegram Stars haqida hamma narsa: nima va qanday ishlaydi, nimaga ishlatiladi, narxi, qayerdan sotib olinadi, xavfsizlik. To‘liq qo‘llanma O‘zbekiston uchun.",
      answerTitle: "Qisqa javob",
      Answer: UzAnswer,
      Body: UzBody,
      ctaHeading: "Stars’ni hoziroq olasizmi?",
      ctaBody: "So‘mda, parolsiz, 10 soniyada — @StarsPaymee_bot orqali.",
      faq: [
        {
          question: "Telegram Stars nima?",
          answer:
            "Telegram’ning rasmiy ichki valyutasi: sovg‘a, Premium, bot to‘lovlari va reaksiyalar uchun. Akkauntga bog‘langan, faqat Telegram ichida ishlaydi.",
        },
        {
          question: "Stars qancha turadi?",
          answer:
            "Telegram narxida ~0.013–0.014 dollar/yulduz. So‘mdagi narxni @StarsPaymee_bot yoki Stars sahifasi ko‘rsatadi.",
        },
        {
          question: "Stars qayerdan olinadi?",
          answer:
            "O‘zbekistonda eng oson — so‘mda, mahalliy karta bilan @StarsPaymee_bot orqali. Apple/Google va Fragment xorijiy karta/kripto talab qiladi.",
        },
        {
          question: "Stars olish xavfsizmi?",
          answer:
            "Ha, parol so‘ralmaydi — faqat @username. Ishonchli xizmatda oferta, support va buyurtma ID bo‘ladi; texnik nosozlikda to‘lov qaytariladi.",
        },
        {
          question: "Stars kuyib ketadimi?",
          answer: "Yo‘q, muddatsiz. Lekin akkaunt o‘chirilsa balans qaytarilmaydi.",
        },
      ],
    },
    ru: {
      title: "Всё, что нужно знать о Telegram Stars (2026)",
      excerpt:
        "Полное руководство по Telegram Stars: что это, как работают, для чего, сколько стоят, где купить и безопасность. Все темы в одном месте.",
      metaTitle: "Всё о Telegram Stars — полное руководство 2026",
      metaDescription:
        "Всё о Telegram Stars: что это и как работают, для чего, цена, где купить, безопасность. Полное руководство для Узбекистана.",
      answerTitle: "Краткий ответ",
      Answer: RuAnswer,
      Body: RuBody,
      ctaHeading: "Купить Stars прямо сейчас?",
      ctaBody: "В сумах, без пароля, за 10 секунд — через @StarsPaymee_bot.",
      faq: [
        {
          question: "Что такое Telegram Stars?",
          answer:
            "Официальная внутренняя валюта Telegram: для подарков, Premium, оплаты в ботах и реакций. Привязана к аккаунту, работает только внутри Telegram.",
        },
        {
          question: "Сколько стоят Stars?",
          answer:
            "По цене Telegram ~0.013–0.014 доллара за звезду. Цену в сумах покажет @StarsPaymee_bot или страница Stars.",
        },
        {
          question: "Где купить Stars?",
          answer:
            "В Узбекистане проще всего — в сумах локальной картой через @StarsPaymee_bot. Apple/Google и Fragment требуют иностранную карту/крипту.",
        },
        {
          question: "Безопасно ли покупать Stars?",
          answer:
            "Да, пароль не нужен — только @username. У надёжного сервиса есть оферта, поддержка и ID заказа; при техническом сбое оплата возвращается.",
        },
        {
          question: "Stars сгорают?",
          answer: "Нет, без срока. Но при удалении аккаунта баланс не возвращается.",
        },
      ],
    },
  },
};
