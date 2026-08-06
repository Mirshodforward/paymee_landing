import { Link } from "@/i18n/navigation";
import { InlineCta, Sources, CompareTable, Yes, No, KeyFacts } from "@/components/blog/aeo-blocks";
import { PremiumPlanBoard } from "@/components/blog/premium-plan-board";
import type { AeoPost } from "@/lib/blog-aeo/types";

const SLUG = "premium-va-oddiy-hisob-farqi";

/* ---------------- UZ ---------------- */
function UzAnswer() {
  return (
    <p>
      Asosiy farqlar beshta: <b>fayl chegarasi</b> (4 GB vs standart), <b>yuklab olish tezligi</b>,{" "}
      <b>reklama</b> (Premium’da ko‘rinmaydi), <b>shaxsiylashtirish</b> (animatsion avatar, eksklyuziv emoji) va{" "}
      <b>kanal/papka chegaralari</b>. Kamdan-kam foydalansangiz oddiy hisob yetarli.
    </p>
  );
}

function UzBody() {
  return (
    <>
      <h2 id="jadval">Yonma-yon taqqoslash</h2>
      <CompareTable
        headers={["Jihat", "Oddiy hisob", "Premium"]}
        rows={[
          ["Fayl chegarasi", <No key="a">Standart chegara</No>, <Yes key="b">4 GB gacha</Yes>],
          ["Yuklab olish tezligi", <No key="c">Standart</No>, <Yes key="d">Sezilarli tezroq</Yes>],
          ["Reklama", <No key="e">Ochiq kanallarda ko‘rinadi</No>, <Yes key="f">Ko‘rsatilmaydi</Yes>],
          ["Profil rasmi", <No key="g">Statik</No>, <Yes key="h">Animatsion + ramka</Yes>],
          ["Emoji va stiker", <No key="i">Standart to‘plamlar</No>, <Yes key="j">Eksklyuziv to‘plamlar</Yes>],
          ["Kanal va papka", <No key="k">Cheklangan</No>, <Yes key="l">Kengaytirilgan</Yes>],
        ]}
      />

      <h2 id="fayl">Fayl yuklash chegarasi</h2>
      <p>
        Oddiy hisobda katta video yoki arxivlarni yuborishda muammo tug‘ilishi mumkin. Premium’da chegara{" "}
        <b>4 GB</b> gacha oshadi — katta fayllarni ham muammosiz yuborasiz.
      </p>

      <h2 id="tezlik">Yuklab olish tezligi</h2>
      <p>
        Oddiy hisobda fayllar standart tezlikda yuklanadi. Premium’da tezlik sezilarli oshadi — ayniqsa katta fayl
        bilan ishlaganda farq yaqqol seziladi.
      </p>

      <h2 id="reklama">Reklama ko‘rsatilishi</h2>
      <p>
        Oddiy hisob egalari ko‘plab ochiq kanallarda reklama bannerlarini ko‘radi. Premium foydalanuvchilar esa
        bulardan xoli, tozaroq tajribaga ega bo‘ladi.
      </p>

      <h2 id="qaysi">Qaysi birini tanlash kerak?</h2>
      <KeyFacts label="Premium quyidagilarga foydali">
        <li>Katta fayllar bilan tez-tez ishlaydiganlarga.</li>
        <li>Ko‘plab kanal va guruhga a’zo bo‘lganlarga.</li>
        <li>Reklamasiz va tezroq tajribani xohlaganlarga.</li>
      </KeyFacts>

      <PremiumPlanBoard locale="uz" flow="username" />

      <InlineCta text="Farqni o‘zingiz sinab ko‘ring." />

      <p>
        Batafsil: <Link href="/blog/telegram-premium-imkoniyatlari">to‘liq imkoniyatlar</Link>,{" "}
        <Link href="/blog/telegram-premium-narxi">narxlar</Link> va{" "}
        <Link href="/blog/stars-va-premium-farqi">Stars bilan farqi</Link>.
      </p>

      <Sources
        label="Manbalar"
        items={[
          { href: "https://telegram.org/faq_premium", label: "telegram.org/faq_premium", note: "Telegram Premium rasmiy FAQ" },
          { href: "https://telegram.org/faq", label: "telegram.org/faq", note: "Telegram umumiy FAQ" },
        ]}
      />
    </>
  );
}

/* ---------------- RU ---------------- */
function RuAnswer() {
  return (
    <p>
      Основных отличий пять: <b>лимит файлов</b> (4 ГБ против стандартного), <b>скорость скачивания</b>,{" "}
      <b>реклама</b> (в Premium не показывается), <b>персонализация</b> (анимированный аватар, эксклюзивные эмодзи) и{" "}
      <b>лимиты каналов и папок</b>. При редком использовании обычного аккаунта достаточно.
    </p>
  );
}

function RuBody() {
  return (
    <>
      <h2 id="jadval">Сравнение бок о бок</h2>
      <CompareTable
        headers={["Аспект", "Обычный аккаунт", "Premium"]}
        rows={[
          ["Лимит файлов", <No key="a">Стандартный лимит</No>, <Yes key="b">До 4 ГБ</Yes>],
          ["Скорость скачивания", <No key="c">Стандартная</No>, <Yes key="d">Заметно выше</Yes>],
          ["Реклама", <No key="e">Видна в открытых каналах</No>, <Yes key="f">Не показывается</Yes>],
          ["Фото профиля", <No key="g">Статичное</No>, <Yes key="h">Анимированное + рамка</Yes>],
          ["Эмодзи и стикеры", <No key="i">Стандартные наборы</No>, <Yes key="j">Эксклюзивные наборы</Yes>],
          ["Каналы и папки", <No key="k">Ограничено</No>, <Yes key="l">Расширено</Yes>],
        ]}
      />

      <h2 id="fayl">Лимит загрузки файлов</h2>
      <p>
        В обычном аккаунте при отправке крупных видео или архивов могут возникать сложности. В Premium лимит
        поднимается до <b>4 ГБ</b> — большие файлы отправляются без проблем.
      </p>

      <h2 id="tezlik">Скорость скачивания</h2>
      <p>
        В обычном аккаунте файлы загружаются со стандартной скоростью. В Premium она заметно выше — особенно
        ощутимо при работе с крупными файлами.
      </p>

      <h2 id="reklama">Показ рекламы</h2>
      <p>
        Владельцы обычных аккаунтов видят рекламные баннеры во многих открытых каналах. Premium-пользователи от них
        избавлены и получают более чистый опыт.
      </p>

      <h2 id="qaysi">Что выбрать?</h2>
      <KeyFacts label="Premium полезен тем, кто">
        <li>Часто работает с крупными файлами.</li>
        <li>Подписан на множество каналов и групп.</li>
        <li>Хочет более быстрый опыт без рекламы.</li>
      </KeyFacts>

      <PremiumPlanBoard locale="ru" flow="username" />

      <InlineCta text="Оцените разницу сами." />

      <p>
        Подробнее: <Link href="/blog/telegram-premium-imkoniyatlari">полный список возможностей</Link>,{" "}
        <Link href="/blog/telegram-premium-narxi">цены</Link> и{" "}
        <Link href="/blog/stars-va-premium-farqi">отличие от Stars</Link>.
      </p>

      <Sources
        label="Источники"
        items={[
          { href: "https://telegram.org/faq_premium", label: "telegram.org/faq_premium", note: "официальный FAQ Telegram Premium" },
          { href: "https://telegram.org/faq", label: "telegram.org/faq", note: "общий FAQ Telegram" },
        ]}
      />
    </>
  );
}

/* ---------------- EN ---------------- */
function EnAnswer() {
  return (
    <p>
      There are five main differences: the <b>file limit</b> (4 GB versus standard), <b>download speed</b>,{" "}
      <b>ads</b> (hidden on Premium), <b>personalisation</b> (animated avatar, exclusive emoji) and{" "}
      <b>channel/folder limits</b>. For light use, a standard account is enough.
    </p>
  );
}

function EnBody() {
  return (
    <>
      <h2 id="jadval">Side-by-side comparison</h2>
      <CompareTable
        headers={["Aspect", "Standard account", "Premium"]}
        rows={[
          ["File limit", <No key="a">Standard limit</No>, <Yes key="b">Up to 4 GB</Yes>],
          ["Download speed", <No key="c">Standard</No>, <Yes key="d">Noticeably faster</Yes>],
          ["Ads", <No key="e">Shown in public channels</No>, <Yes key="f">Not shown</Yes>],
          ["Profile photo", <No key="g">Static</No>, <Yes key="h">Animated + frame</Yes>],
          ["Emoji and stickers", <No key="i">Standard packs</No>, <Yes key="j">Exclusive packs</Yes>],
          ["Channels and folders", <No key="k">Limited</No>, <Yes key="l">Expanded</Yes>],
        ]}
      />

      <h2 id="fayl">The upload limit</h2>
      <p>
        On a standard account, sending large videos or archives can be a problem. Premium raises the limit to{" "}
        <b>4 GB</b>, so big files go through without trouble.
      </p>

      <h2 id="tezlik">Download speed</h2>
      <p>
        Standard accounts download at the normal speed. On Premium it is noticeably faster — the difference is
        obvious with large files.
      </p>

      <h2 id="reklama">Ad display</h2>
      <p>
        Standard account holders see ad banners in many public channels. Premium users are free of them and get a
        cleaner experience.
      </p>

      <h2 id="qaysi">Which should you choose?</h2>
      <KeyFacts label="Premium suits people who">
        <li>Work with large files often.</li>
        <li>Follow many channels and groups.</li>
        <li>Want a faster, ad-free experience.</li>
      </KeyFacts>

      <PremiumPlanBoard locale="en" flow="username" />

      <InlineCta text="See the difference for yourself." />

      <p>
        More: <Link href="/blog/telegram-premium-imkoniyatlari">the full feature list</Link>,{" "}
        <Link href="/blog/telegram-premium-narxi">prices</Link> and{" "}
        <Link href="/blog/stars-va-premium-farqi">how it differs from Stars</Link>.
      </p>

      <Sources
        label="Sources"
        items={[
          { href: "https://telegram.org/faq_premium", label: "telegram.org/faq_premium", note: "official Telegram Premium FAQ" },
          { href: "https://telegram.org/faq", label: "telegram.org/faq", note: "general Telegram FAQ" },
        ]}
      />
    </>
  );
}

const uzFaq = [
  { question: "Premium va oddiy hisob asosiy farqi nima?", answer: "Fayl chegarasi, tezlik, reklama, shaxsiylashtirish va kanal/papka limitlari." },
  { question: "Oddiy hisobda fayl chegarasi qancha?", answer: "Standart chegara — Premium’dagi 4 GB dan ancha past." },
  { question: "Reklama Premium’da butunlay yo‘qmi?", answer: "Ommaviy kanallardagi rasmiy reklama ko‘rsatilmaydi." },
  { question: "Oddiy hisob yetarlimi?", answer: "Agar Telegram’dan kamdan-kam foydalansangiz — ha." },
  { question: "Premium tezlikni qancha oshiradi?", answer: "Yuklab olish sezilarli tezlashadi, ayniqsa katta fayllarda." },
  { question: "Emoji farqi bormi?", answer: "Ha, Premium’da eksklyuziv to‘plamlar ochiladi." },
  { question: "Kanal limiti qancha?", answer: "Premium’da obuna va papka chegaralari kengaytirilgan." },
  { question: "Premium’ni qayerdan olaman?", answer: "@StarsPaymee_bot orqali, xalqaro kartasiz." },
];

const ruFaq = [
  { question: "В чём главное отличие Premium от обычного аккаунта?", answer: "Лимит файлов, скорость, реклама, персонализация и лимиты каналов/папок." },
  { question: "Какой лимит файлов в обычном аккаунте?", answer: "Стандартный — заметно ниже, чем 4 ГБ в Premium." },
  { question: "Совсем ли нет рекламы в Premium?", answer: "Официальная реклама в публичных каналах не показывается." },
  { question: "Достаточно ли обычного аккаунта?", answer: "Если пользуетесь Telegram редко — да." },
  { question: "Насколько Premium увеличивает скорость?", answer: "Скачивание заметно быстрее, особенно с крупными файлами." },
  { question: "Есть ли разница в эмодзи?", answer: "Да, в Premium открываются эксклюзивные наборы." },
  { question: "Какой лимит каналов?", answer: "В Premium лимиты подписок и папок расширены." },
  { question: "Где оформить Premium?", answer: "Через @StarsPaymee_bot, без международной карты." },
];

const enFaq = [
  { question: "What is the main difference between Premium and a standard account?", answer: "The file limit, speed, ads, personalisation and channel/folder limits." },
  { question: "What is the standard account file limit?", answer: "The standard limit — well below Premium’s 4 GB." },
  { question: "Are ads gone entirely on Premium?", answer: "Official ads in public channels are not shown." },
  { question: "Is a standard account enough?", answer: "If you use Telegram rarely — yes." },
  { question: "How much faster is Premium?", answer: "Downloads are noticeably quicker, especially for large files." },
  { question: "Is there an emoji difference?", answer: "Yes, Premium unlocks exclusive packs." },
  { question: "What is the channel limit?", answer: "Premium expands subscription and folder limits." },
  { question: "Where do I get Premium?", answer: "Through @StarsPaymee_bot, with no international card." },
];

export const post: AeoPost = {
  slug: SLUG,
  category: "Premium",
  type: "comparison",
  datePublished: "2026-08-02",
  dateModified: "2026-08-02",
  keywords: [
    "premium va oddiy hisob farqi",
    "telegram premium farqi",
    "premium oddiy taqqoslash",
    "telegram premium vs bepul",
    "premium nima bilan farq qiladi",
    "premium farqi 2026",
  ],
  locales: {
    uz: {
      title: "Telegram Premium va oddiy hisob orasidagi farq",
      excerpt:
        "Premium oddiy hisobdan nimasi bilan farq qiladi: fayl chegarasi, tezlik, reklama, shaxsiylashtirish va kanal limitlari — yonma-yon jadval.",
      metaTitle: "Telegram Premium va oddiy hisob farqi",
      metaDescription:
        "Telegram Premium va oddiy hisob farqi: 4 GB fayl, tezroq yuklash, reklamasizlik, animatsion avatar va kengaytirilgan kanal limitlari.",
      answerTitle: "Qisqa javob",
      Answer: UzAnswer,
      Body: UzBody,
      ctaHeading: "Farqni sinab ko‘ring",
      ctaBody: "@StarsPaymee_bot — muddatni tanlang va Premium’ni faollashtiring.",
      faq: uzFaq,
    },
    ru: {
      title: "Разница между Telegram Premium и обычным аккаунтом",
      excerpt:
        "Чем Premium отличается от обычного аккаунта: лимит файлов, скорость, реклама, персонализация и лимиты каналов — таблица сравнения.",
      metaTitle: "Разница между Telegram Premium и обычным аккаунтом",
      metaDescription:
        "Разница Telegram Premium и обычного аккаунта: файлы 4 ГБ, быстрая загрузка, без рекламы, анимированный аватар и расширенные лимиты.",
      answerTitle: "Краткий ответ",
      Answer: RuAnswer,
      Body: RuBody,
      ctaHeading: "Оцените разницу",
      ctaBody: "@StarsPaymee_bot — выберите срок и активируйте Premium.",
      faq: ruFaq,
    },
    en: {
      title: "The difference between Telegram Premium and a standard account",
      excerpt:
        "How Premium differs from a standard account: file limit, speed, ads, personalisation and channel limits — a side-by-side table.",
      metaTitle: "Telegram Premium versus a standard account",
      metaDescription:
        "The difference between Telegram Premium and a standard account: 4 GB files, faster downloads, no ads, animated avatar and higher limits.",
      answerTitle: "Short answer",
      Answer: EnAnswer,
      Body: EnBody,
      ctaHeading: "See the difference",
      ctaBody: "@StarsPaymee_bot — pick a term and activate Premium.",
      faq: enFaq,
    },
  },
};
