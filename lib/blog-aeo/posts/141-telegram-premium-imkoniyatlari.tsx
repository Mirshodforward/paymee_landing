import { Link } from "@/i18n/navigation";
import { InlineCta, Sources, KeyFacts, InfoGrid, InfoCard } from "@/components/blog/aeo-blocks";
import { PremiumPlanBoard } from "@/components/blog/premium-plan-board";
import type { AeoPost } from "@/lib/blog-aeo/types";

const SLUG = "telegram-premium-imkoniyatlari";

/* ---------------- UZ ---------------- */
function UzAnswer() {
  return (
    <p>
      Premium to‘rt yo‘nalishda imkoniyat beradi: <b>fayl va media</b> (4 GB gacha yuklash, tezroq yuklab olish),{" "}
      <b>muloqot</b> (reklamasiz, tarjima, ovozni matnga aylantirish), <b>shaxsiylashtirish</b> (animatsion avatar,
      eksklyuziv emoji) va <b>kanal/guruh</b> (ko‘proq obuna va papka).
    </p>
  );
}

function UzBody() {
  return (
    <>
      <h2 id="fayl">Fayl va media bilan bog‘liq imkoniyatlar</h2>
      <KeyFacts label="Fayl bo‘yicha">
        <li><b>4 GB gacha fayl yuklash</b> — oddiy hisobda bu chegara ancha past.</li>
        <li>Tezroq yuklab olish tezligi — fayl va videolar tezroq yuklanadi.</li>
        <li>Video xabarlar sifatini oshirish — HD formatda yuborish.</li>
      </KeyFacts>

      <h2 id="muloqot">Muloqot bilan bog‘liq imkoniyatlar</h2>
      <KeyFacts label="Muloqot bo‘yicha">
        <li>Reklamasiz tajriba — ochiq kanallarda reklama bannerlari ko‘rinmaydi.</li>
        <li>Xabar tarjimasi — xabarlarni avtomatik boshqa tilga o‘girish.</li>
        <li>Ovozli xabarlarni matnga aylantirish (voice-to-text).</li>
        <li>Xabar tahrirlash tarixini yashirish.</li>
      </KeyFacts>

      <h2 id="shaxsiy">Shaxsiylashtirish imkoniyatlari</h2>
      <InfoGrid>
        <InfoCard emoji="🎞️" title="Animatsion avatar">
          Statik o‘rniga harakatlanuvchi profil rasmi.
        </InfoCard>
        <InfoCard emoji="🖼️" title="Profil ramkasi">
          Profilingizni ajratib turuvchi dizayn.
        </InfoCard>
        <InfoCard emoji="😀" title="Eksklyuziv emoji">
          Faqat Premium foydalanuvchilarga ochiq to‘plamlar.
        </InfoCard>
        <InfoCard emoji="⭐" title="Status belgisi">
          Profilingizda Premium belgisi ko‘rinadi.
        </InfoCard>
      </InfoGrid>

      <h2 id="kanal">Kanal va guruh bilan bog‘liq imkoniyatlar</h2>
      <KeyFacts label="Kanal bo‘yicha">
        <li>Ko‘proq kanal va guruhga a’zo bo‘lish — chegara sezilarli oshadi.</li>
        <li>Ko‘proq papka yaratish — suhbatlarni yaxshiroq tashkil qilish.</li>
        <li>Kanallarda ovoz berish natijalari bo‘yicha qo‘shimcha ma’lumot.</li>
      </KeyFacts>

      <h2 id="tarif">Tariflar</h2>
      <PremiumPlanBoard locale="uz" flow="username" />

      <InlineCta text="Barcha imkoniyatlarni faollashtiring." />

      <p>
        Batafsil: <Link href="/blog/premium-va-oddiy-hisob-farqi">oddiy hisob bilan farqi</Link>,{" "}
        <Link href="/blog/telegram-premium-fayl-yuklash">fayl chegarasi</Link> va{" "}
        <Link href="/blog/telegram-premium-narxi">narxlar</Link>.
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
      Premium даёт возможности в четырёх направлениях: <b>файлы и медиа</b> (загрузка до 4 ГБ, быстрее скачивание),{" "}
      <b>общение</b> (без рекламы, перевод, расшифровка голосовых), <b>персонализация</b> (анимированный аватар,
      эксклюзивные эмодзи) и <b>каналы/группы</b> (больше подписок и папок).
    </p>
  );
}

function RuBody() {
  return (
    <>
      <h2 id="fayl">Возможности для файлов и медиа</h2>
      <KeyFacts label="По файлам">
        <li><b>Загрузка файлов до 4 ГБ</b> — в обычном аккаунте лимит заметно ниже.</li>
        <li>Более высокая скорость скачивания файлов и видео.</li>
        <li>Повышение качества видеосообщений — отправка в HD.</li>
      </KeyFacts>

      <h2 id="muloqot">Возможности для общения</h2>
      <KeyFacts label="По общению">
        <li>Без рекламы — баннеры в открытых каналах не показываются.</li>
        <li>Перевод сообщений — автоматический перевод на другой язык.</li>
        <li>Расшифровка голосовых сообщений в текст (voice-to-text).</li>
        <li>Скрытие истории редактирования сообщений.</li>
      </KeyFacts>

      <h2 id="shaxsiy">Возможности персонализации</h2>
      <InfoGrid>
        <InfoCard emoji="🎞️" title="Анимированный аватар">
          Движущееся фото профиля вместо статичного.
        </InfoCard>
        <InfoCard emoji="🖼️" title="Рамка профиля">
          Дизайн, выделяющий ваш профиль.
        </InfoCard>
        <InfoCard emoji="😀" title="Эксклюзивные эмодзи">
          Наборы, доступные только Premium-пользователям.
        </InfoCard>
        <InfoCard emoji="⭐" title="Значок статуса">
          В профиле отображается отметка Premium.
        </InfoCard>
      </InfoGrid>

      <h2 id="kanal">Возможности для каналов и групп</h2>
      <KeyFacts label="По каналам">
        <li>Больше подписок на каналы и групп — лимит заметно выше.</li>
        <li>Больше папок — удобнее организовать чаты.</li>
        <li>Дополнительные данные по результатам голосований в каналах.</li>
      </KeyFacts>

      <h2 id="tarif">Тарифы</h2>
      <PremiumPlanBoard locale="ru" flow="username" />

      <InlineCta text="Активируйте все возможности." />

      <p>
        Подробнее: <Link href="/blog/premium-va-oddiy-hisob-farqi">отличие от обычного аккаунта</Link>,{" "}
        <Link href="/blog/telegram-premium-fayl-yuklash">лимит файлов</Link> и{" "}
        <Link href="/blog/telegram-premium-narxi">цены</Link>.
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
      Premium delivers in four areas: <b>files and media</b> (uploads up to 4 GB, faster downloads),{" "}
      <b>communication</b> (no ads, translation, voice-to-text), <b>personalisation</b> (animated avatar, exclusive
      emoji) and <b>channels/groups</b> (more subscriptions and folders).
    </p>
  );
}

function EnBody() {
  return (
    <>
      <h2 id="fayl">File and media features</h2>
      <KeyFacts label="Files">
        <li><b>Uploads up to 4 GB</b> — the standard account limit is much lower.</li>
        <li>Faster download speed for files and videos.</li>
        <li>Higher-quality video messages — sending in HD.</li>
      </KeyFacts>

      <h2 id="muloqot">Communication features</h2>
      <KeyFacts label="Communication">
        <li>An ad-free experience — no banners in public channels.</li>
        <li>Message translation into another language.</li>
        <li>Voice-to-text transcription of voice messages.</li>
        <li>Hiding the message edit history.</li>
      </KeyFacts>

      <h2 id="shaxsiy">Personalisation features</h2>
      <InfoGrid>
        <InfoCard emoji="🎞️" title="Animated avatar">
          A moving profile photo instead of a static one.
        </InfoCard>
        <InfoCard emoji="🖼️" title="Profile frame">
          A design that makes your profile stand out.
        </InfoCard>
        <InfoCard emoji="😀" title="Exclusive emoji">
          Packs open only to Premium users.
        </InfoCard>
        <InfoCard emoji="⭐" title="Status badge">
          The Premium mark shows on your profile.
        </InfoCard>
      </InfoGrid>

      <h2 id="kanal">Channel and group features</h2>
      <KeyFacts label="Channels">
        <li>More channel and group subscriptions — a notably higher limit.</li>
        <li>More folders — better chat organisation.</li>
        <li>Extra detail on poll results in channels.</li>
      </KeyFacts>

      <h2 id="tarif">Plans</h2>
      <PremiumPlanBoard locale="en" flow="username" />

      <InlineCta text="Turn on every feature." />

      <p>
        More: <Link href="/blog/premium-va-oddiy-hisob-farqi">how it differs from a standard account</Link>,{" "}
        <Link href="/blog/telegram-premium-fayl-yuklash">the file limit</Link> and{" "}
        <Link href="/blog/telegram-premium-narxi">prices</Link>.
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
  { question: "Premium qanday imkoniyatlar beradi?", answer: "Fayl (4 GB), tezlik, reklamasizlik, tarjima, voice-to-text, shaxsiylashtirish va kengaytirilgan kanal limitlari." },
  { question: "Fayl chegarasi qancha?", answer: "4 GB gacha." },
  { question: "Reklama butunlay yo‘qoladimi?", answer: "Ommaviy kanallardagi rasmiy reklama ko‘rsatilmaydi." },
  { question: "Ovozli xabarni matnga aylantirish bormi?", answer: "Ha, voice-to-text funksiyasi Premium’da mavjud." },
  { question: "Animatsion avatar qanday qo‘yiladi?", answer: "Profil sozlamalarida video/animatsion rasm tanlanadi." },
  { question: "Kanal limiti qancha oshadi?", answer: "Obuna va papka chegaralari sezilarli kengayadi." },
  { question: "Barcha imkoniyat darhol ishlaydimi?", answer: "Ha, obuna faollashgach hammasi ochiladi." },
  { question: "Premium’ni qayerdan olaman?", answer: "@StarsPaymee_bot orqali, mahalliy to‘lov bilan." },
];

const ruFaq = [
  { question: "Какие возможности даёт Premium?", answer: "Файлы (4 ГБ), скорость, отсутствие рекламы, перевод, voice-to-text, персонализация и расширенные лимиты каналов." },
  { question: "Какой лимит файлов?", answer: "До 4 ГБ." },
  { question: "Реклама исчезает полностью?", answer: "Официальная реклама в публичных каналах не показывается." },
  { question: "Есть ли расшифровка голосовых?", answer: "Да, функция voice-to-text доступна в Premium." },
  { question: "Как поставить анимированный аватар?", answer: "В настройках профиля выбирается видео/анимированное изображение." },
  { question: "Насколько растёт лимит каналов?", answer: "Лимиты подписок и папок заметно увеличиваются." },
  { question: "Все ли функции работают сразу?", answer: "Да, после активации подписки открывается всё." },
  { question: "Где оформить Premium?", answer: "Через @StarsPaymee_bot с местной оплатой." },
];

const enFaq = [
  { question: "What features does Premium give?", answer: "Files (4 GB), speed, no ads, translation, voice-to-text, personalisation and higher channel limits." },
  { question: "What is the file limit?", answer: "Up to 4 GB." },
  { question: "Do ads disappear entirely?", answer: "Official ads in public channels are not shown." },
  { question: "Is there voice transcription?", answer: "Yes, voice-to-text is available in Premium." },
  { question: "How do I set an animated avatar?", answer: "Choose a video/animated image in profile settings." },
  { question: "How much do channel limits grow?", answer: "Subscription and folder limits increase noticeably." },
  { question: "Do all features work immediately?", answer: "Yes, everything unlocks once the subscription activates." },
  { question: "Where do I get Premium?", answer: "Through @StarsPaymee_bot with local payment." },
];

export const post: AeoPost = {
  slug: SLUG,
  category: "Premium",
  type: "info",
  datePublished: "2026-08-02",
  dateModified: "2026-08-02",
  keywords: [
    "telegram premium imkoniyatlari",
    "premium funksiyalari",
    "telegram premium royxati",
    "premium nima beradi",
    "telegram premium 4gb",
    "premium imkoniyat 2026",
  ],
  locales: {
    uz: {
      title: "Telegram Premium imkoniyatlari — to‘liq ro‘yxat",
      excerpt:
        "Premium bergan barcha imkoniyatlar: fayl va media, muloqot, shaxsiylashtirish hamda kanal/guruh bo‘yicha to‘liq ro‘yxat.",
      metaTitle: "Telegram Premium imkoniyatlari — to‘liq ro‘yxat",
      metaDescription:
        "Telegram Premium imkoniyatlari: 4 GB fayl, tezroq yuklash, reklamasizlik, tarjima, voice-to-text, animatsion avatar va kengaytirilgan limitlar.",
      answerTitle: "Qisqa javob",
      Answer: UzAnswer,
      Body: UzBody,
      ctaHeading: "Premium imkoniyatlarini oching",
      ctaBody: "@StarsPaymee_bot — muddatni tanlang, so‘mda to‘lang.",
      faq: uzFaq,
    },
    ru: {
      title: "Возможности Telegram Premium — полный список",
      excerpt:
        "Все возможности Premium: файлы и медиа, общение, персонализация и функции для каналов и групп — полный перечень.",
      metaTitle: "Возможности Telegram Premium — полный список",
      metaDescription:
        "Возможности Telegram Premium: файлы 4 ГБ, быстрая загрузка, без рекламы, перевод, voice-to-text, анимированный аватар и увеличенные лимиты.",
      answerTitle: "Краткий ответ",
      Answer: RuAnswer,
      Body: RuBody,
      ctaHeading: "Откройте возможности Premium",
      ctaBody: "@StarsPaymee_bot — выберите срок и оплатите в сумах.",
      faq: ruFaq,
    },
    en: {
      title: "Telegram Premium features — the full list",
      excerpt:
        "Everything Premium gives you: files and media, communication, personalisation and channel/group features — the complete list.",
      metaTitle: "Telegram Premium features — the full list",
      metaDescription:
        "Telegram Premium features: 4 GB files, faster downloads, no ads, translation, voice-to-text, animated avatar and higher limits.",
      answerTitle: "Short answer",
      Answer: EnAnswer,
      Body: EnBody,
      ctaHeading: "Unlock Premium features",
      ctaBody: "@StarsPaymee_bot — pick a term and pay in so‘m.",
      faq: enFaq,
    },
  },
};
