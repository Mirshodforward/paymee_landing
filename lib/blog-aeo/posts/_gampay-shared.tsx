import { Link } from "@/i18n/navigation";
import { InlineCta, KeyFacts, Steps, Step, InfoGrid, InfoCard } from "@/components/blog/aeo-blocks";
import { GamPaySeriesNav } from "@/components/blog/gampay-series-nav";
import type { GameInfo } from "@/lib/games";
import type { AeoPost, FaqItem } from "@/lib/blog-aeo/types";

/**
 * O'yin to'ldirish maqolalari uchun umumiy qatlam.
 *
 * To'qqizta o'yinning oqimi bir xil: o'yinni tanlash → Player ID → paket →
 * so'mda to'lov. Faqat ID nomi, valyuta birligi va yetkazish vaqti farq
 * qiladi. Har bir maqolani noldan yozish o'rniga shu farqlar ma'lumot
 * sifatida beriladi — shunda to'lov usullari yoki xavfsizlik matni
 * o'zgarganda bitta joyda tuzatiladi va to'qqizta maqola bir vaqtda
 * yangilanadi.
 *
 * Har bir maqolaning O'ZIGA XOS qismi — kirish, «nima uchun kerak» va
 * FAQ — chaqiruvchi fayldan keladi, ya'ni matn shablon bo'lib qolmaydi.
 */

/** So'mda to'lov — barcha o'yinlarda bir xil. */
const PAYMENT_METHODS = "UzCard, HUMO, Click, Payme";

type Copy = {
  /** Qisqa javob — AnswerBox uchun (40–60 so'z). */
  answer: React.ReactNode;
  /** «Nega bu kerak» — o'yinga xos kirish. */
  intro: React.ReactNode;
  /** Valyuta nimaga sarflanadi. */
  spendOn: string[];
};

/* ═══════════════════ UZ ═══════════════════ */

export function gameBodyUz(game: GameInfo, copy: Copy) {
  return function GameBodyUz() {
    return (
      <>
        <h2 id="nega">{game.title} hisobini nega so‘mda to‘ldirish qulay?</h2>
        {copy.intro}

        <KeyFacts label="Asosiy faktlar">
          <li>
            Nima olinadi: <strong>{game.unit}</strong>
          </li>
          <li>
            Nima so‘raladi: <strong>{game.idLabel}</strong> — parol emas
          </li>
          <li>
            To‘lov: {PAYMENT_METHODS} — O‘zbek so‘mida
          </li>
          <li>
            O‘rtacha yetkazish: <strong>{game.eta.uz}</strong>
          </li>
          <li>Xalqaro Visa/Mastercard, VPN yoki chet el hisobi kerak emas</li>
        </KeyFacts>

        <h2 id="qadamlar">Qanday to‘ldiriladi — 4 qadam</h2>
        <Steps>
          <Step title="1. GamPay bo‘limini oching">
            Telegramda{" "}
            <a href="https://t.me/StarsPaymee_bot" target="_blank" rel="noopener noreferrer">
              @StarsPaymee_bot
            </a>{" "}
            ni ishga tushiring va GamPay javonidan <strong>{game.title}</strong> ni tanlang.
          </Step>
          <Step title={`2. ${game.idLabel} ni kiriting`}>{game.idHint.uz}.</Step>
          <Step title="3. Paketni tanlang">
            Kerakli {game.unit} miqdorini belgilang — narx so‘mda, to‘lovdan oldin ko‘rinadi.
          </Step>
          <Step title="4. To‘lang">
            {PAYMENT_METHODS} orqali so‘mda to‘laysiz; {game.unit} hisobingizga{" "}
            {game.eta.uz} ichida tushadi.
          </Step>
        </Steps>

        <InlineCta text={`${game.title} hisobingizni so‘mda to‘ldiring — GamPay bo‘limida.`} />

        <h2 id="nimaga">{game.unit} nimaga sarflanadi?</h2>
        <ul>
          {copy.spendOn.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>

        <h2 id="xavfsizlik">Xavfsizlik — nima so‘ralmaydi</h2>
        <p>
          To‘ldirish uchun faqat <strong>{game.idLabel}</strong> yetarli. Bu ochiq ma’lumot: uni
          o‘yin ichida boshqa o‘yinchilar ham ko‘radi va u bilan hisobingizni boshqarib bo‘lmaydi.
        </p>
        <InfoGrid>
          <InfoCard emoji="🚫" title="Parol so‘ralmaydi">
            Hech bir to‘ldirish xizmatiga o‘yin parolingizni bermang.
          </InfoCard>
          <InfoCard emoji="🚫" title="SMS kod so‘ralmaydi">
            Kimdir SMS yoki Telegram kirish kodini so‘rasa — bu firibgarlik.
          </InfoCard>
          <InfoCard emoji="✅" title="Faqat ochiq ID">
            {game.idLabel} — hisobni topish uchungina kerak.
          </InfoCard>
          <InfoCard emoji="🧾" title="Buyurtma tarixi">
            Har bir to‘lov botda saqlanadi, kerak bo‘lsa ID bilan murojaat qilasiz.
          </InfoCard>
        </InfoGrid>

        <h2 id="xato">Nima noto‘g‘ri ketishi mumkin?</h2>
        <p>
          Eng ko‘p uchraydigan xato — <strong>noto‘g‘ri {game.idLabel}</strong>. Buyurtma
          tasdiqlanishidan oldin bot ID ni ko‘rsatadi; uni o‘yindagi profil bilan solishtiring.
          Agar {game.unit} kelmasa, avval o‘yinni qayta ishga tushiring — ba’zan interfeys eski
          balansni ko‘rsatib turadi. Shundan keyin ham ko‘rinmasa,{" "}
          <a href="https://t.me/StarsPaymeeSupport" target="_blank" rel="noopener noreferrer">
            @StarsPaymeeSupport
          </a>{" "}
          ga buyurtma ID bilan yozing.
        </p>

        <p>
          Boshqa o‘yinlar va Steam hamyoni ham shu bo‘limda —{" "}
          <Link href="/gampay">GamPay sahifasi</Link> da to‘liq ro‘yxat bor.
        </p>

        <GamPaySeriesNav locale="uz" />
      </>
    );
  };
}

/* ═══════════════════ RU ═══════════════════ */

export function gameBodyRu(game: GameInfo, copy: Copy) {
  return function GameBodyRu() {
    return (
      <>
        <h2 id="nega">Почему удобно пополнять {game.title} в сумах?</h2>
        {copy.intro}

        <KeyFacts label="Ключевые факты">
          <li>
            Что покупаете: <strong>{game.unit}</strong>
          </li>
          <li>
            Что нужно ввести: <strong>{game.idLabel}</strong> — не пароль
          </li>
          <li>Оплата: {PAYMENT_METHODS} — в узбекских сумах</li>
          <li>
            Средняя доставка: <strong>{game.eta.ru}</strong>
          </li>
          <li>Международная Visa/Mastercard, VPN и зарубежный аккаунт не нужны</li>
        </KeyFacts>

        <h2 id="qadamlar">Как пополнить — 4 шага</h2>
        <Steps>
          <Step title="1. Откройте раздел GamPay">
            Запустите{" "}
            <a href="https://t.me/StarsPaymee_bot" target="_blank" rel="noopener noreferrer">
              @StarsPaymee_bot
            </a>{" "}
            в Telegram и выберите <strong>{game.title}</strong> в списке GamPay.
          </Step>
          <Step title={`2. Введите ${game.idLabel}`}>{game.idHint.ru}.</Step>
          <Step title="3. Выберите пакет">
            Укажите нужное количество {game.unit} — цена в сумах видна до оплаты.
          </Step>
          <Step title="4. Оплатите">
            Платите в сумах через {PAYMENT_METHODS}; {game.unit} поступят на аккаунт за{" "}
            {game.eta.ru}.
          </Step>
        </Steps>

        <InlineCta text={`Пополните ${game.title} в сумах — в разделе GamPay.`} />

        <h2 id="nimaga">На что тратятся {game.unit}?</h2>
        <ul>
          {copy.spendOn.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>

        <h2 id="xavfsizlik">Безопасность — что не спрашивают</h2>
        <p>
          Для пополнения достаточно <strong>{game.idLabel}</strong>. Это открытые данные: их видят
          другие игроки в игре, и управлять аккаунтом с их помощью нельзя.
        </p>
        <InfoGrid>
          <InfoCard emoji="🚫" title="Пароль не нужен">
            Никогда не сообщайте игровой пароль сервисам пополнения.
          </InfoCard>
          <InfoCard emoji="🚫" title="Код из SMS не нужен">
            Если просят SMS или код входа в Telegram — это мошенничество.
          </InfoCard>
          <InfoCard emoji="✅" title="Только открытый ID">
            {game.idLabel} нужен лишь для поиска аккаунта.
          </InfoCard>
          <InfoCard emoji="🧾" title="История заказов">
            Каждая оплата сохраняется в боте — с ID заказа помогут быстрее.
          </InfoCard>
        </InfoGrid>

        <h2 id="xato">Что может пойти не так?</h2>
        <p>
          Самая частая ошибка — <strong>неверный {game.idLabel}</strong>. Перед подтверждением бот
          показывает введённый ID; сверьте его с профилем в игре. Если {game.unit} не пришли,
          сначала перезапустите игру — интерфейс иногда показывает старый баланс. Если и после
          этого их нет, напишите в{" "}
          <a href="https://t.me/StarsPaymeeSupport" target="_blank" rel="noopener noreferrer">
            @StarsPaymeeSupport
          </a>{" "}
          с ID заказа.
        </p>

        <p>
          Другие игры и кошелёк Steam — в том же разделе, полный список на{" "}
          <Link href="/gampay">странице GamPay</Link>.
        </p>

        <GamPaySeriesNav locale="ru" />
      </>
    );
  };
}

/* ═══════════════ Umumiy FAQ ═══════════════ */

export function commonFaqUz(game: GameInfo): FaqItem[] {
  return [
    {
      question: `${game.title} uchun ${game.unit} ni so‘mda sotib olsa bo‘ladimi?`,
      answer: `Ha. @StarsPaymee_bot dagi GamPay bo‘limida ${PAYMENT_METHODS} orqali O‘zbek so‘mida to‘laysiz — valyuta ayirboshlash shart emas.`,
    },
    {
      question: "Xalqaro Visa yoki Mastercard kerakmi?",
      answer: "Yo‘q. Mahalliy UzCard va HUMO kartalari, shuningdek Click va Payme yetarli.",
    },
    {
      question: "Nima so‘raladi?",
      answer: `Faqat ${game.idLabel}. ${game.idHint.uz}. Parol hech qachon so‘ralmaydi.`,
    },
    {
      question: `${game.unit} qancha vaqtda tushadi?`,
      answer: `Odatda ${game.eta.uz}. Provayder tomonida yuklama bo‘lsa biroz cho‘zilishi mumkin.`,
    },
    {
      question: "Narxni oldindan ko‘rsam bo‘ladimi?",
      answer: "Ha. Bot buyurtmani tasdiqlashdan oldin yakuniy summani so‘mda ko‘rsatadi.",
    },
    {
      question: "Do‘stimning hisobini to‘ldirsam bo‘ladimi?",
      answer: `Ha. Buyurtmada uning ${game.idLabel} ini kiritsangiz kifoya.`,
    },
    {
      question: "VPN kerakmi?",
      answer: "Yo‘q. To‘lov ham, yetkazish ham O‘zbekistondan turib ishlaydi.",
    },
    {
      question: `${game.unit} kelmasa nima qilaman?`,
      answer:
        "Avval o‘yinni qayta ishga tushiring — balans ba’zan kechikib yangilanadi. Keyin @StarsPaymeeSupport ga buyurtma ID bilan yozing.",
    },
    {
      question: "Bot qachon ishlaydi?",
      answer: "24/7. Buyurtmani istalgan vaqtda berish mumkin.",
    },
    {
      question: "Boshqa o‘yinlar ham bormi?",
      answer:
        "Ha — PUBG Mobile, Mobile Legends, Free Fire, CODM, Honor of Kings, Magic Chess, Delta Force, Asphalt 9, Bigo Live va Steam hamyoni.",
    },
  ];
}

export function commonFaqRu(game: GameInfo): FaqItem[] {
  return [
    {
      question: `Можно ли купить ${game.unit} для ${game.title} в сумах?`,
      answer: `Да. В разделе GamPay в @StarsPaymee_bot вы платите в узбекских сумах через ${PAYMENT_METHODS} — конвертация не нужна.`,
    },
    {
      question: "Нужна ли международная Visa или Mastercard?",
      answer: "Нет. Достаточно локальных карт UzCard и HUMO, а также Click и Payme.",
    },
    {
      question: "Что нужно ввести?",
      answer: `Только ${game.idLabel}. ${game.idHint.ru}. Пароль не запрашивается никогда.`,
    },
    {
      question: `За сколько поступают ${game.unit}?`,
      answer: `Обычно ${game.eta.ru}. При нагрузке на стороне поставщика возможна задержка.`,
    },
    {
      question: "Можно ли увидеть цену заранее?",
      answer: "Да. Бот показывает итоговую сумму в сумах до подтверждения заказа.",
    },
    {
      question: "Можно ли пополнить аккаунт друга?",
      answer: `Да. Достаточно указать его ${game.idLabel} в заказе.`,
    },
    { question: "Нужен ли VPN?", answer: "Нет. И оплата, и доставка работают из Узбекистана." },
    {
      question: `Что делать, если ${game.unit} не пришли?`,
      answer:
        "Сначала перезапустите игру — баланс иногда обновляется с задержкой. Затем напишите в @StarsPaymeeSupport с ID заказа.",
    },
    { question: "Когда работает бот?", answer: "24/7. Заказ можно оформить в любое время." },
    {
      question: "Есть ли другие игры?",
      answer:
        "Да — PUBG Mobile, Mobile Legends, Free Fire, CODM, Honor of Kings, Magic Chess, Delta Force, Asphalt 9, Bigo Live и кошелёк Steam.",
    },
  ];
}

/* ═══════════════ Fabrika ═══════════════ */

export type GamePostInput = {
  game: GameInfo;
  datePublished: string;
  keywords: string[];
  uz: Copy & {
    title: string;
    excerpt: string;
    metaTitle: string;
    metaDescription: string;
    extraFaq?: FaqItem[];
  };
  ru: Copy & {
    title: string;
    excerpt: string;
    metaTitle: string;
    metaDescription: string;
    extraFaq?: FaqItem[];
  };
};

export function makeGamePost(input: GamePostInput): AeoPost {
  const { game, uz, ru } = input;
  const slug = game.blogSlug;
  if (!slug) throw new Error(`blogSlug yo‘q: ${game.code}`);

  return {
    slug,
    category: "O‘yinlar",
    type: "howto",
    datePublished: input.datePublished,
    dateModified: input.datePublished,
    keywords: input.keywords,
    howToSteps: [
      { name: "GamPay bo‘limini oching", text: `@StarsPaymee_bot da GamPay javonidan ${game.title} ni tanlang.` },
      { name: `${game.idLabel} ni kiriting`, text: game.idHint.uz },
      { name: "Paketni tanlang", text: `Kerakli ${game.unit} miqdorini belgilang — narx so‘mda ko‘rinadi.` },
      { name: "To‘lovni amalga oshiring", text: `${PAYMENT_METHODS} orqali so‘mda to‘lang.` },
    ],
    locales: {
      uz: {
        title: uz.title,
        excerpt: uz.excerpt,
        metaTitle: uz.metaTitle,
        metaDescription: uz.metaDescription,
        answerTitle: "Qisqa javob",
        Answer: () => <>{uz.answer}</>,
        Body: gameBodyUz(game, uz),
        ctaHeading: `${game.title} hisobingizni to‘ldiring`,
        ctaBody: `@StarsPaymee_bot dagi GamPay bo‘limida so‘mda to‘lang — ${game.unit} ${game.eta.uz} ichida tushadi.`,
        faq: [...(uz.extraFaq ?? []), ...commonFaqUz(game)],
      },
      ru: {
        title: ru.title,
        excerpt: ru.excerpt,
        metaTitle: ru.metaTitle,
        metaDescription: ru.metaDescription,
        answerTitle: "Краткий ответ",
        Answer: () => <>{ru.answer}</>,
        Body: gameBodyRu(game, ru),
        ctaHeading: `Пополните аккаунт ${game.title}`,
        ctaBody: `Платите в сумах в разделе GamPay в @StarsPaymee_bot — ${game.unit} поступят за ${game.eta.ru}.`,
        faq: [...(ru.extraFaq ?? []), ...commonFaqRu(game)],
      },
    },
  };
}
