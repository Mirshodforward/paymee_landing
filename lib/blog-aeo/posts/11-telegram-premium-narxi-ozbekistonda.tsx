import { Link } from "@/i18n/navigation";
import { CompareTable, InlineCta, KeyFacts, Sources } from "@/components/blog/aeo-blocks";
import type { AeoPost } from "@/lib/blog-aeo/types";

const SLUG = "telegram-premium-narxi-ozbekistonda-2026";

function UzAnswer() {
  return (
    <p>
      O‘zbekistonda Telegram Premium narxi (StarsPaymee’da, so‘mda): <strong>3 oy — 172 000</strong>,{" "}
      <strong>6 oy — 232 000</strong>, <strong>12 oy — 422 000 so‘m</strong> (username bilan, ~10 soniyada
      avtomatik). Login orqali rasmiy oqim: 1 oy — 50 000, 1 yil — 300 000 so‘m. To‘lov UzCard, HUMO, Click, Payme
      yoki Paynet bilan — xorijiy karta shart emas.
    </p>
  );
}

function UzBody() {
  return (
    <>
      <h2 id="narxlar">Telegram Premium narxlari (2026, so‘mda)</h2>
      <p>
        Quyida StarsPaymee’dagi joriy narxlar. «Username bilan» oqimda akkauntga kirish kerak emas — Premium o‘rtacha
        10 soniyada avtomatik faollashadi:
      </p>
      <CompareTable
        headers={["Muddat", "Narx", "Oyiga", "Oqim"]}
        rows={[
          ["3 oy", "172 000 so‘m", "~57 000 so‘m", "Username bilan, ~10 s"],
          ["6 oy", "232 000 so‘m", "~38 700 so‘m", "Username bilan, ~10 s"],
          ["12 oy", "422 000 so‘m", "~35 200 so‘m", "Username bilan, ~10 s"],
          ["1 oy", "50 000 so‘m", "50 000 so‘m", "Login orqali (rasmiy)"],
          ["1 yil", "300 000 so‘m", "25 000 so‘m", "Login orqali (rasmiy)"],
        ]}
      />
      <p>
        Eng tejamkor variant — uzoq muddat: 12 oylik paketda oyiga to‘g‘ri keladigan narx eng past bo‘ladi. Joriy aniq
        summalarni har doim <Link href="/premium">Premium sahifasida</Link> yoki @StarsPaymee_bot’da ko‘rishingiz mumkin.
      </p>

      <InlineCta text="Premium narxini ko‘rib, hoziroq botda buyurtma bering." />

      <h2 id="nega-arzon">Nega bu narx App Store’dan arzon?</h2>
      <p>
        Apple App Store yoki Google Play orqali Premium olganda do‘kon ustamasi qo‘shiladi va xorijiy (Visa/Mastercard)
        karta talab qilinadi. StarsPaymee mahalliy to‘lov tizimlari orqali to‘g‘ridan-to‘g‘ri ishlaydi, shuning uchun
        O‘zbekiston foydalanuvchisi uchun narx qulayroq. Bu haqda{" "}
        <Link href="/blog/telegram-stars-narxlari-2026-platformalar-taqqoslash">platformalar taqqoslovida</Link> batafsil.
      </p>

      <h2 id="qaysi">Qaysi paketni tanlash kerak?</h2>
      <KeyFacts label="Tavsiya">
        <li>
          <b>Sinab ko‘rmoqchi bo‘lsangiz</b> — 1 oylik (login) yoki 3 oylik (username) yetarli.
        </li>
        <li>
          <b>Doimiy foydalansangiz</b> — 12 oylik eng tejamkor (oyiga ~35 000 so‘m).
        </li>
        <li>
          <b>Sovg‘a qilmoqchi bo‘lsangiz</b> — username bilan oqim ideal, akkaunt ma’lumoti kerak emas.
        </li>
      </KeyFacts>
      <p>
        Premium nima berishini bilmoqchi bo‘lsangiz —{" "}
        <Link href="/blog/telegram-premium-arziydimi-foydalari">«Premium arziydimi»</Link> maqolasini o‘qing. Sovg‘a
        qilish bo‘yicha esa <Link href="/blog/telegram-premium-sovga-username-orqali">alohida qo‘llanma</Link> bor.
      </p>

      <Sources
        label="Manbalar"
        items={[
          { href: "https://telegram.org/faq_premium", label: "telegram.org/faq_premium", note: "Premium rasmiy FAQ" },
          { href: "https://t.me/StarsPaymee_bot", label: "@StarsPaymee_bot", note: "joriy narxlar va buyurtma" },
        ]}
      />
    </>
  );
}

function RuAnswer() {
  return (
    <p>
      Цена Telegram Premium в Узбекистане (в StarsPaymee, в сумах): <strong>3 мес — 172 000</strong>,{" "}
      <strong>6 мес — 232 000</strong>, <strong>12 мес — 422 000 сум</strong> (по username, активация ~10 секунд).
      Поток со входом в аккаунт: 1 мес — 50 000, 1 год — 300 000 сум. Оплата UzCard, HUMO, Click, Payme или Paynet —
      иностранная карта не нужна.
    </p>
  );
}

function RuBody() {
  return (
    <>
      <h2 id="narxlar">Цены Telegram Premium (2026, в сумах)</h2>
      <p>
        Ниже актуальные цены в StarsPaymee. В потоке «по username» вход в аккаунт не нужен — Premium активируется
        автоматически в среднем за 10 секунд:
      </p>
      <CompareTable
        headers={["Срок", "Цена", "В месяц", "Поток"]}
        rows={[
          ["3 мес", "172 000 сум", "~57 000 сум", "По username, ~10 с"],
          ["6 мес", "232 000 сум", "~38 700 сум", "По username, ~10 с"],
          ["12 мес", "422 000 сум", "~35 200 сум", "По username, ~10 с"],
          ["1 мес", "50 000 сум", "50 000 сум", "Со входом (официально)"],
          ["1 год", "300 000 сум", "25 000 сум", "Со входом (официально)"],
        ]}
      />
      <p>
        Самый выгодный вариант — длинный срок: в годовом пакете цена за месяц минимальна. Точные актуальные суммы всегда
        на <Link href="/premium">странице Premium</Link> или в @StarsPaymee_bot.
      </p>

      <InlineCta text="Посмотрите цену и оформите заказ в боте прямо сейчас." />

      <h2 id="nega-arzon">Почему это дешевле, чем в App Store?</h2>
      <p>
        При покупке через Apple App Store или Google Play добавляется наценка магазина и нужна иностранная карта
        (Visa/Mastercard). StarsPaymee работает напрямую через локальные платёжные системы, поэтому для пользователя из
        Узбекистана цена удобнее. Подробнее — в{" "}
        <Link href="/blog/telegram-stars-narxlari-2026-platformalar-taqqoslash">сравнении платформ</Link>.
      </p>

      <h2 id="qaysi">Какой пакет выбрать?</h2>
      <KeyFacts label="Рекомендация">
        <li>
          <b>Хотите попробовать</b> — достаточно 1 месяца (вход) или 3 месяцев (по username).
        </li>
        <li>
          <b>Пользуетесь постоянно</b> — выгоднее 12 месяцев (~35 000 сум/мес).
        </li>
        <li>
          <b>Хотите подарить</b> — идеален поток по username, данные аккаунта не нужны.
        </li>
      </KeyFacts>
      <p>
        Что даёт Premium — читайте в статье{" "}
        <Link href="/blog/telegram-premium-arziydimi-foydalari">«Стоит ли Premium»</Link>. По дарению есть{" "}
        <Link href="/blog/telegram-premium-sovga-username-orqali">отдельное руководство</Link>.
      </p>

      <Sources
        label="Источники"
        items={[
          { href: "https://telegram.org/faq_premium", label: "telegram.org/faq_premium", note: "официальный FAQ Premium" },
          { href: "https://t.me/StarsPaymee_bot", label: "@StarsPaymee_bot", note: "актуальные цены и заказ" },
        ]}
      />
    </>
  );
}

export const post: AeoPost = {
  slug: SLUG,
  category: "Premium",
  type: "info",
  datePublished: "2026-06-15",
  dateModified: "2026-06-15",
  keywords: [
    "telegram premium narxi",
    "telegram premium narxi ozbekistonda",
    "telegram premium 3 oy narxi",
    "telegram premium 12 oy narxi",
    "telegram premium qancha turadi",
    "telegram premium price uzbekistan",
  ],
  locales: {
    uz: {
      title: "Telegram Premium narxi O‘zbekistonda (2026) — 3, 6, 12 oy so‘mda",
      excerpt:
        "Telegram Premium narxi O‘zbekistonda so‘mda: 3 oy 172 000, 6 oy 232 000, 12 oy 422 000. Username bilan 10 soniyada, UzCard/HUMO/Click/Payme orqali.",
      metaTitle: "Telegram Premium narxi O‘zbekistonda 2026 — so‘mda",
      metaDescription:
        "Telegram Premium narxi O‘zbekistonda (so‘mda): 3 oy 172 000, 6 oy 232 000, 12 oy 422 000. Login oqimi 1 oy 50 000, 1 yil 300 000. UzCard, HUMO, Click, Payme.",
      answerTitle: "Qisqa javob",
      Answer: UzAnswer,
      Body: UzBody,
      ctaHeading: "Premium’ni arzon narxda olasizmi?",
      ctaBody: "Botda muddatni tanlang, so‘mda to‘lang — username bilan 10 soniyada avtomatik faollashadi.",
      faq: [
        {
          question: "Telegram Premium O‘zbekistonda qancha turadi?",
          answer:
            "StarsPaymee’da: 3 oy 172 000, 6 oy 232 000, 12 oy 422 000 so‘m (username bilan). Login orqali: 1 oy 50 000, 1 yil 300 000 so‘m.",
        },
        {
          question: "Eng arzon variant qaysi?",
          answer:
            "Oyiga hisoblaganda 12 oylik paket eng arzon (~35 000 so‘m/oy). Bir martalik summa kattaroq, lekin uzoq muddatga tejamkor.",
        },
        {
          question: "Narx nimaga bog‘liq o‘zgaradi?",
          answer:
            "Narx muddatga va oqimga (username yoki login) bog‘liq. Aniq joriy summa botda yoki Premium sahifasida ko‘rsatiladi.",
        },
        {
          question: "To‘lovni qanday qilaman?",
          answer: "UzCard, HUMO, Click, Payme, Paynet va istalgan O‘zbekiston kartasi orqali so‘mda.",
        },
        {
          question: "Username bilan va login bilan oqim farqi nima?",
          answer:
            "Username bilan — akkauntga kirish shart emas, 10 soniyada avtomatik. Login bilan — rasmiy akkauntga kirib faollashtirish (alohida xizmat).",
        },
      ],
    },
    ru: {
      title: "Цена Telegram Premium в Узбекистане (2026) — 3, 6, 12 месяцев в сумах",
      excerpt:
        "Цена Telegram Premium в Узбекистане в сумах: 3 мес 172 000, 6 мес 232 000, 12 мес 422 000. По username за 10 секунд, через UzCard/HUMO/Click/Payme.",
      metaTitle: "Цена Telegram Premium в Узбекистане 2026 — в сумах",
      metaDescription:
        "Цена Telegram Premium в Узбекистане (в сумах): 3 мес 172 000, 6 мес 232 000, 12 мес 422 000. Поток со входом: 1 мес 50 000, 1 год 300 000. UzCard, HUMO, Click, Payme.",
      answerTitle: "Краткий ответ",
      Answer: RuAnswer,
      Body: RuBody,
      ctaHeading: "Купить Premium по низкой цене?",
      ctaBody: "Выберите срок в боте, оплатите в сумах — по username активируется автоматически за 10 секунд.",
      faq: [
        {
          question: "Сколько стоит Telegram Premium в Узбекистане?",
          answer:
            "В StarsPaymee: 3 мес 172 000, 6 мес 232 000, 12 мес 422 000 сум (по username). Со входом: 1 мес 50 000, 1 год 300 000 сум.",
        },
        {
          question: "Какой вариант самый дешёвый?",
          answer:
            "В пересчёте на месяц выгоднее всего 12 месяцев (~35 000 сум/мес). Разовая сумма больше, но на длинной дистанции экономнее.",
        },
        {
          question: "От чего зависит цена?",
          answer:
            "От срока и потока (по username или со входом). Точная актуальная сумма показывается в боте или на странице Premium.",
        },
        {
          question: "Чем оплатить?",
          answer: "UzCard, HUMO, Click, Payme, Paynet и любая карта Узбекистана — в сумах.",
        },
        {
          question: "В чём разница потоков по username и со входом?",
          answer:
            "По username — вход в аккаунт не нужен, активация автоматически за 10 секунд. Со входом — официальная активация через логин (отдельная услуга).",
        },
      ],
    },
  },
};
