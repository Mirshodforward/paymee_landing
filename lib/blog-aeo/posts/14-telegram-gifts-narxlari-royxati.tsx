import { Link } from "@/i18n/navigation";
import { CompareTable, InlineCta, Sources } from "@/components/blog/aeo-blocks";
import type { AeoPost } from "@/lib/blog-aeo/types";

const SLUG = "telegram-gifts-narxlari-royxati";

function UzAnswer() {
  return (
    <p>
      Telegram noyob sovg‘alari (Gifts) narxi <strong>Stars (yulduz)</strong>da belgilanadi — odatda taxminan 15
      yulduzdan boshlanib, noyob/kolleksion sovg‘alar uchun yuzlab–minglab yulduzgacha. So‘mdagi narx joriy yulduz
      kursiga bog‘liq. StarsPaymee’da sovg‘ani to‘g‘ridan-to‘g‘ri so‘mda (UzCard/HUMO/Click/Payme) sotib olishingiz
      mumkin.
    </p>
  );
}

function UzBody() {
  return (
    <>
      <h2 id="narx-tuzilishi">Telegram Gifts narxi qanday belgilanadi?</h2>
      <p>
        Har bir sovg‘aning bazaviy qiymati Telegram tomonidan Stars’da belgilanadi. So‘mdagi yakuniy narx esa
        yulduzning joriy kursiga va xizmat siyosatiga bog‘liq. Taxminiy darajalar:
      </p>
      <CompareTable
        headers={["Sovg‘a darajasi", "Taxminiy Stars", "Tavsif"]}
        rows={[
          ["Oddiy sovg‘alar", "~15–100 ⭐", "Kundalik tabrik va reaksiya uchun"],
          ["O‘rtacha sovg‘alar", "~100–500 ⭐", "Tug‘ilgan kun, bayram uchun"],
          ["Noyob / kolleksion", "~500–5000+ ⭐", "Cheklangan seriya, qimmatroq dizayn"],
        ]}
      />
      <p>
        Aniq narxlar va mavjud sovg‘alar ro‘yxati doimo o‘zgaradi — joriy katalogni{" "}
        <Link href="/gifts">Gifts sahifasida</Link> yoki @StarsPaymee_bot’da ko‘ring. Stars narxi haqida{" "}
        <Link href="/blog/telegram-stars-narxlari-2026-platformalar-taqqoslash">narx taqqoslovida</Link> o‘qishingiz
        mumkin.
      </p>

      <InlineCta text="Sovg‘ani so‘mda olib, do‘stingizga yuboring." />

      <h2 id="sotib-olish">Sovg‘ani qanday sotib olish/yuborish mumkin?</h2>
      <p>
        Sovg‘ani o‘zingizga sotib olishingiz yoki boshqa @username’ga yuborishingiz mumkin — anonim yoki tabrik izohi
        bilan. Bosqichma-bosqich jarayon{" "}
        <Link href="/blog/telegram-gifts-qanday-yuboriladi-qollanma">«Gifts qanday yuboriladi» qo‘llanmasida</Link>{" "}
        yozilgan.
      </p>

      <h2 id="muhim">Narx bo‘yicha muhim eslatmalar</h2>
      <ul>
        <li>Bir xil sovg‘a turli kunlarda biroz farq qilishi mumkin — chunki yulduz kursi va komissiya ta’sir qiladi.</li>
        <li>Noyob (cheklangan) sovg‘alar tez tugab qolishi mumkin — katalog mavjudligiga qarang.</li>
        <li>To‘lov so‘mda: xorijiy karta yoki kripto talab qilinmaydi.</li>
      </ul>

      <Sources
        label="Manbalar"
        items={[
          { href: "https://telegram.org/blog/gifts", label: "telegram.org/blog/gifts", note: "Telegram Gifts e’loni" },
          { href: "https://t.me/StarsPaymee_bot", label: "@StarsPaymee_bot", note: "joriy sovg‘alar katalogi" },
        ]}
      />
    </>
  );
}

function RuAnswer() {
  return (
    <p>
      Цена уникальных подарков Telegram (Gifts) задаётся в <strong>Stars (звёздах)</strong> — обычно примерно от 15
      звёзд, а для редких/коллекционных подарков от сотен до тысяч звёзд. Цена в сумах зависит от текущего курса
      звезды. В StarsPaymee подарок можно купить напрямую в сумах (UzCard/HUMO/Click/Payme).
    </p>
  );
}

function RuBody() {
  return (
    <>
      <h2 id="narx-tuzilishi">Как формируется цена Telegram Gifts?</h2>
      <p>
        Базовую стоимость каждого подарка задаёт Telegram в Stars. Итоговая цена в сумах зависит от текущего курса
        звезды и политики сервиса. Примерные уровни:
      </p>
      <CompareTable
        headers={["Уровень подарка", "Примерно Stars", "Описание"]}
        rows={[
          ["Обычные подарки", "~15–100 ⭐", "Для повседневных поздравлений и реакций"],
          ["Средние подарки", "~100–500 ⭐", "На день рождения, праздник"],
          ["Редкие / коллекционные", "~500–5000+ ⭐", "Лимитированная серия, дороже дизайн"],
        ]}
      />
      <p>
        Точные цены и список доступных подарков постоянно меняются — смотрите актуальный каталог на{" "}
        <Link href="/gifts">странице Gifts</Link> или в @StarsPaymee_bot. О цене Stars читайте в{" "}
        <Link href="/blog/telegram-stars-narxlari-2026-platformalar-taqqoslash">сравнении цен</Link>.
      </p>

      <InlineCta text="Купите подарок в сумах и отправьте другу." />

      <h2 id="sotib-olish">Как купить/отправить подарок?</h2>
      <p>
        Подарок можно купить себе или отправить на другой @username — анонимно или с поздравлением. Пошаговый процесс
        описан в{" "}
        <Link href="/blog/telegram-gifts-qanday-yuboriladi-qollanma">руководстве «Как отправить Gifts»</Link>.
      </p>

      <h2 id="muhim">Важные заметки по цене</h2>
      <ul>
        <li>Один и тот же подарок может немного отличаться по дням — влияют курс звезды и комиссия.</li>
        <li>Редкие (лимитированные) подарки могут быстро заканчиваться — смотрите наличие в каталоге.</li>
        <li>Оплата в сумах: иностранная карта или крипта не нужны.</li>
      </ul>

      <Sources
        label="Источники"
        items={[
          { href: "https://telegram.org/blog/gifts", label: "telegram.org/blog/gifts", note: "анонс Telegram Gifts" },
          { href: "https://t.me/StarsPaymee_bot", label: "@StarsPaymee_bot", note: "актуальный каталог подарков" },
        ]}
      />
    </>
  );
}

export const post: AeoPost = {
  slug: SLUG,
  category: "Gifts",
  type: "info",
  datePublished: "2026-06-12",
  dateModified: "2026-06-12",
  keywords: [
    "telegram gifts narxlari",
    "telegram sovga narxi",
    "telegram gift price",
    "telegram noyob sovga narxi",
    "telegram gifts royxati",
  ],
  locales: {
    uz: {
      title: "Telegram Gifts narxlari (2026) — sovg‘alar ro‘yxati va narx tuzilishi",
      excerpt:
        "Telegram noyob sovg‘alari narxi qanday: Stars’da belgilanadi, so‘mdagi narx kursga bog‘liq. Oddiy, o‘rtacha va noyob sovg‘alar darajalari va sotib olish.",
      metaTitle: "Telegram Gifts narxlari 2026 — sovg‘alar ro‘yxati",
      metaDescription:
        "Telegram Gifts (noyob sovg‘alar) narxi: Stars’da belgilanadi, so‘mda kursga bog‘liq. Oddiy/o‘rtacha/noyob darajalar, narx eslatmalari va so‘mda sotib olish.",
      answerTitle: "Qisqa javob",
      Answer: UzAnswer,
      Body: UzBody,
      ctaHeading: "Sovg‘a yubormoqchimisiz?",
      ctaBody: "Botda katalogdan tanlang, so‘mda to‘lang — sovg‘a @username’ga yetkaziladi.",
      faq: [
        {
          question: "Telegram sovg‘alari qancha turadi?",
          answer:
            "Narx Stars’da belgilanadi: oddiy sovg‘alar ~15–100 yulduz, noyob/kolleksion sovg‘alar yuzlab–minglab yulduz. So‘mdagi narx kursga bog‘liq.",
        },
        {
          question: "Nega bir sovg‘a narxi o‘zgaradi?",
          answer: "Yulduz kursi va komissiya o‘zgargani uchun bir xil sovg‘a turli kunlarda biroz farq qilishi mumkin.",
        },
        {
          question: "Sovg‘ani so‘mda olsa bo‘ladimi?",
          answer: "Ha, StarsPaymee’da sovg‘ani UzCard, HUMO, Click yoki Payme bilan so‘mda olasiz.",
        },
        {
          question: "Qabul qiluvchi sovg‘ani qaytara oladimi?",
          answer: "Ko‘p sovg‘alarni qabul qiluvchi profilida saqlashi yoki qayta Stars’ga aylantirishi mumkin.",
        },
        {
          question: "Joriy narxlarni qayerdan ko‘raman?",
          answer: "Mavjud sovg‘alar va aniq narxlarni @StarsPaymee_bot yoki Gifts sahifasida ko‘rasiz.",
        },
      ],
    },
    ru: {
      title: "Цены Telegram Gifts (2026) — список подарков и структура цены",
      excerpt:
        "Какова цена уникальных подарков Telegram: задаётся в Stars, цена в сумах зависит от курса. Уровни обычных, средних и редких подарков и как купить.",
      metaTitle: "Цены Telegram Gifts 2026 — список подарков",
      metaDescription:
        "Цена Telegram Gifts (уникальных подарков): задаётся в Stars, в сумах зависит от курса. Уровни обычные/средние/редкие, заметки по цене и покупка в сумах.",
      answerTitle: "Краткий ответ",
      Answer: RuAnswer,
      Body: RuBody,
      ctaHeading: "Хотите отправить подарок?",
      ctaBody: "Выберите в каталоге бота, оплатите в сумах — подарок доставится на @username.",
      faq: [
        {
          question: "Сколько стоят подарки Telegram?",
          answer:
            "Цена задаётся в Stars: обычные подарки ~15–100 звёзд, редкие/коллекционные — сотни–тысячи звёзд. Цена в сумах зависит от курса.",
        },
        {
          question: "Почему цена одного подарка меняется?",
          answer: "Из-за изменения курса звезды и комиссии один и тот же подарок может немного отличаться по дням.",
        },
        {
          question: "Можно ли купить подарок в сумах?",
          answer: "Да, в StarsPaymee подарок покупается за UzCard, HUMO, Click или Payme в сумах.",
        },
        {
          question: "Может ли получатель вернуть подарок?",
          answer: "Многие подарки получатель может оставить в профиле или конвертировать обратно в Stars.",
        },
        {
          question: "Где увидеть актуальные цены?",
          answer: "Доступные подарки и точные цены показываются в @StarsPaymee_bot или на странице Gifts.",
        },
      ],
    },
  },
};
