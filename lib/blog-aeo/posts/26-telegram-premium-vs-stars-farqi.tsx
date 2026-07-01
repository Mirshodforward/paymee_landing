import { Link } from "@/i18n/navigation";
import { Toc, CompareTable, InlineCta, KeyFacts, Yes, No, Sources } from "@/components/blog/aeo-blocks";
import type { AeoPost } from "@/lib/blog-aeo/types";

const SLUG = "telegram-premium-vs-stars-farqi";

function UzAnswer() {
  return (
    <p>
      Telegram Premium — bu <strong>obuna</strong>: oylik/yillik to‘lov evaziga ilova funksiyalari (katta fayl, tezroq
      yuklash, maxsus emoji, reklama yo‘qligi va h.k.) ochiladi. Telegram Stars — bu <strong>ichki valyuta</strong>:
      sovg‘a, bot to‘lovlari, pulli kontent va hatto Premium’ni <em>hadya qilish</em> uchun sarflanadi. Qisqacha: Premium
      — abonement, Stars — pul birligi. Ular bir-birini almashtirmaydi, balki to‘ldiradi.
    </p>
  );
}

function UzBody() {
  return (
    <>
      <Toc
        label="Mundarija"
        items={[
          { href: "#asosiy", label: "Asosiy farq" },
          { href: "#taqqos", label: "Yonma-yon taqqoslash" },
          { href: "#qachon", label: "Qaysi biri qachon kerak" },
          { href: "#birga", label: "Ular qanday bog‘lanadi" },
          { href: "#ozbekiston", label: "O‘zbekistonda sotib olish" },
        ]}
      />

      <h2 id="asosiy">Premium va Stars — asosiy farq</h2>
      <p>
        Ko‘pchilik ularni chalkashtiradi, lekin bu ikki mutlaqo boshqa narsa. <strong>Premium</strong> — bu obuna:
        to‘laysiz va muddat davomida qo‘shimcha funksiyalardan foydalanasiz. <strong>Stars</strong> — bu ichki valyuta:
        uni balansga qo‘shasiz va turli xizmatlarga sarflaysiz. Stars’ni Premium sotib olishga ham ishlatsangiz bo‘ladi,
        lekin Premium — Stars emas.
      </p>

      <CompareTable
        headers={["Xususiyat", "Telegram Premium", "Telegram Stars"]}
        rows={[
          ["Turi", "Obuna (abonement)", "Ichki valyuta"],
          ["To‘lov modeli", "Oylik / yillik", "Balansga bir marta qo‘shiladi"],
          ["Nima beradi", "Ilova funksiyalari", "Sovg‘a, to‘lov, kontent"],
          ["Muddati", "Obuna tugaguncha", "Muddatsiz (sarflaguncha)"],
          ["Sovg‘a qilinadimi", <Yes key="1">obuna hadya</Yes>, <Yes key="2">yulduz sovg‘a</Yes>],
          ["Bir-birini o‘rnini bosadimi", <No key="3" />, <No key="4" />],
        ]}
      />

      <InlineCta text="Premium ham, Stars ham — botda so‘mda 10 soniyada." />

      <h2 id="qachon">Qaysi biri sizga kerak?</h2>
      <KeyFacts label="Tez tanlov">
        <li>
          <b>Ko‘proq funksiya kerakmi</b> (katta fayl, tez yuklash, reklama yo‘q) → <b>Premium</b>.
        </li>
        <li>
          <b>Sovg‘a, bot to‘lovi yoki kontent</b> uchun → <b>Stars</b>.
        </li>
        <li>
          <b>Do‘stga Premium hadya</b> qilmoqchimisiz → Stars bilan yoki to‘g‘ridan-to‘g‘ri Premium sovg‘a.
        </li>
      </KeyFacts>
      <p>
        Premium’ning o‘zi arziydimi degan savolga{" "}
        <Link href="/blog/telegram-premium-arziydimi-foydalari">«Premium arziydimi»</Link> maqolasi javob beradi; oddiy
        akkauntdan farqini esa{" "}
        <Link href="/blog/telegram-premium-va-oddiy-farqi">«Premium va oddiy farqi»</Link> yoritadi.
      </p>

      <h2 id="birga">Premium va Stars qanday bog‘lanadi?</h2>
      <p>
        Ular bir ekotizimda birga ishlaydi. Masalan, Stars’ni <strong>Premium obunani hadya qilish</strong> uchun
        ishlatishingiz mumkin. Shuningdek, ikkalasi ham Telegram ichki iqtisodiyotining qismi — Stars kreator
        monetizatsiyasini, Premium esa foydalanuvchi tajribasini yaxshilaydi. Butun tizim{" "}
        <Link href="/blog/telegram-ekotizimi-stars-premium-gifts-ton">«Telegram ekotizimi»</Link> maqolasida bir joyda
        ko‘rsatilgan.
      </p>

      <h2 id="ozbekiston">O‘zbekistonda ikkalasini sotib olish</h2>
      <p>
        Har ikkisini ham so‘mda, mahalliy karta (UzCard/HUMO/Click/Payme) bilan botdan olish mumkin — xorijiy karta
        shart emas. Premium’ni eng oson yo‘l bilan olish —{" "}
        <Link href="/blog/telegram-premium-eng-oson-usul">«Premium eng oson usul»</Link>; Stars qayerdan olinishi —{" "}
        <Link href="/blog/telegram-stars-qayerdan-sotib-olish-2026">«Stars qayerdan sotib olish»</Link> maqolasida.
      </p>

      <Sources
        label="Manbalar"
        items={[
          { href: "https://telegram.org/blog/telegram-stars", label: "telegram.org/blog/telegram-stars", note: "Stars rasmiy e’loni" },
          { href: "https://telegram.org/faq_premium", label: "telegram.org/faq_premium", note: "Premium FAQ" },
          { href: "https://core.telegram.org/api/stars", label: "core.telegram.org/api/stars", note: "texnik hujjat" },
        ]}
      />
    </>
  );
}

function RuAnswer() {
  return (
    <p>
      Telegram Premium — это <strong>подписка</strong>: за ежемесячную/годовую плату открываются функции приложения
      (большие файлы, быстрая загрузка, особые эмодзи, отсутствие рекламы и т.д.). Telegram Stars — это{" "}
      <strong>внутренняя валюта</strong>: тратится на подарки, оплату в ботах, платный контент и даже{" "}
      <em>дарение Premium</em>. Коротко: Premium — абонемент, Stars — денежная единица. Они не заменяют, а дополняют друг
      друга.
    </p>
  );
}

function RuBody() {
  return (
    <>
      <Toc
        label="Содержание"
        items={[
          { href: "#asosiy", label: "Ключевое отличие" },
          { href: "#taqqos", label: "Сравнение бок о бок" },
          { href: "#qachon", label: "Что и когда нужно" },
          { href: "#birga", label: "Как они связаны" },
          { href: "#ozbekiston", label: "Покупка в Узбекистане" },
        ]}
      />

      <h2 id="asosiy">Premium и Stars — ключевое отличие</h2>
      <p>
        Многие их путают, но это совершенно разные вещи. <strong>Premium</strong> — подписка: платите и в течение срока
        пользуетесь дополнительными функциями. <strong>Stars</strong> — внутренняя валюта: пополняете баланс и тратите
        на разные услуги. Stars можно потратить и на покупку Premium, но Premium — это не Stars.
      </p>

      <CompareTable
        headers={["Свойство", "Telegram Premium", "Telegram Stars"]}
        rows={[
          ["Тип", "Подписка (абонемент)", "Внутренняя валюта"],
          ["Модель оплаты", "Ежемесячно / ежегодно", "Разово на баланс"],
          ["Что даёт", "Функции приложения", "Подарки, оплата, контент"],
          ["Срок", "До конца подписки", "Бессрочно (пока не потрачены)"],
          ["Можно подарить", <Yes key="1">подписку</Yes>, <Yes key="2">звёзды</Yes>],
          ["Заменяют друг друга", <No key="3" />, <No key="4" />],
        ]}
      />

      <InlineCta text="И Premium, и Stars — в боте в сумах за 10 секунд." />

      <h2 id="qachon">Что из этого нужно вам?</h2>
      <KeyFacts label="Быстрый выбор">
        <li>
          <b>Нужны функции</b> (большие файлы, быстрая загрузка, без рекламы) → <b>Premium</b>.
        </li>
        <li>
          <b>Подарок, оплата в боте или контент</b> → <b>Stars</b>.
        </li>
        <li>
          <b>Подарить другу Premium</b> → через Stars или напрямую подарком Premium.
        </li>
      </KeyFacts>
      <p>
        Стоит ли сам Premium — отвечает статья{" "}
        <Link href="/blog/telegram-premium-arziydimi-foydalari">«Стоит ли Premium»</Link>; отличие от обычного аккаунта —{" "}
        <Link href="/blog/telegram-premium-va-oddiy-farqi">«Premium и обычный аккаунт»</Link>.
      </p>

      <h2 id="birga">Как связаны Premium и Stars?</h2>
      <p>
        Они работают вместе в одной экосистеме. Например, Stars можно потратить на <strong>дарение подписки Premium</strong>.
        Оба — часть внутренней экономики Telegram: Stars двигают монетизацию авторов, Premium улучшает опыт пользователя.
        Вся система показана в статье{" "}
        <Link href="/blog/telegram-ekotizimi-stars-premium-gifts-ton">«Экосистема Telegram»</Link>.
      </p>

      <h2 id="ozbekiston">Покупка обоих в Узбекистане</h2>
      <p>
        И то, и другое можно купить в сумах локальной картой (UzCard/HUMO/Click/Payme) через бота — зарубежная карта не
        нужна. Самый простой способ купить Premium — в статье{" "}
        <Link href="/blog/telegram-premium-eng-oson-usul">«Premium самым простым способом»</Link>; где взять Stars —{" "}
        <Link href="/blog/telegram-stars-qayerdan-sotib-olish-2026">«Где купить Stars»</Link>.
      </p>

      <Sources
        label="Источники"
        items={[
          { href: "https://telegram.org/blog/telegram-stars", label: "telegram.org/blog/telegram-stars", note: "официальный анонс Stars" },
          { href: "https://telegram.org/faq_premium", label: "telegram.org/faq_premium", note: "FAQ по Premium" },
          { href: "https://core.telegram.org/api/stars", label: "core.telegram.org/api/stars", note: "техническая документация" },
        ]}
      />
    </>
  );
}

export const post: AeoPost = {
  slug: SLUG,
  category: "Premium",
  type: "comparison",
  datePublished: "2026-07-01",
  dateModified: "2026-07-01",
  keywords: [
    "telegram premium vs stars",
    "telegram stars vs premium",
    "premium va stars farqi",
    "telegram premium stars farqi",
    "telegram premium yoki stars",
    "premium stars difference",
  ],
  locales: {
    uz: {
      title: "Telegram Premium va Telegram Stars o‘rtasidagi farq (2026)",
      excerpt:
        "Telegram Premium (obuna) va Telegram Stars (ichki valyuta) qanday farq qiladi, qaysi biri qachon kerak va ular qanday bog‘lanadi — aniq taqqoslash jadvali bilan.",
      metaTitle: "Telegram Premium va Stars farqi — taqqoslash 2026",
      metaDescription:
        "Telegram Premium va Telegram Stars o‘rtasidagi farq: Premium — obuna, Stars — ichki valyuta. Yonma-yon taqqoslash, qaysi biri qachon kerak va ular qanday bog‘lanadi.",
      answerTitle: "Qisqa javob",
      Answer: UzAnswer,
      Body: UzBody,
      ctaHeading: "Premium yoki Stars kerakmi?",
      ctaBody: "Ikkalasini ham so‘mda, mahalliy karta bilan @StarsPaymee_bot orqali 10 soniyada oling.",
      faq: [
        {
          question: "Telegram Premium va Stars bir xilmi?",
          answer:
            "Yo‘q. Premium — obuna (funksiyalarni ochadi), Stars — ichki valyuta (sovg‘a, to‘lov, kontent uchun). Ular boshqa-boshqa narsa.",
        },
        {
          question: "Stars bilan Premium sotib olsa bo‘ladimi?",
          answer:
            "Ha, Stars’ni Premium obunani (masalan, hadya sifatida) olishga ishlatish mumkin. Lekin Premium — Stars emas.",
        },
        {
          question: "Menga qaysi biri kerak?",
          answer:
            "Ilova funksiyalari (katta fayl, tez yuklash, reklamasiz) kerak bo‘lsa — Premium. Sovg‘a, bot to‘lovi yoki kontent uchun — Stars.",
        },
        {
          question: "Premium tugasa, Stars ham yo‘qoladimi?",
          answer:
            "Yo‘q. Bular alohida. Premium obuna muddati tugaydi, Stars esa balansda muddatsiz qoladi.",
        },
        {
          question: "O‘zbekistonda ikkalasini qanday olaman?",
          answer:
            "Har ikkisini so‘mda, UzCard/HUMO/Click/Payme bilan botdan olish mumkin — xorijiy karta shart emas.",
        },
      ],
    },
    ru: {
      title: "Разница между Telegram Premium и Telegram Stars (2026)",
      excerpt:
        "Чем отличаются Telegram Premium (подписка) и Telegram Stars (внутренняя валюта), что и когда нужно и как они связаны — с наглядной таблицей сравнения.",
      metaTitle: "Разница Telegram Premium и Stars — сравнение 2026",
      metaDescription:
        "Разница между Telegram Premium и Telegram Stars: Premium — подписка, Stars — внутренняя валюта. Сравнение бок о бок, что и когда нужно и как они связаны.",
      answerTitle: "Краткий ответ",
      Answer: RuAnswer,
      Body: RuBody,
      ctaHeading: "Нужен Premium или Stars?",
      ctaBody: "Купите оба в сумах локальной картой через @StarsPaymee_bot за 10 секунд.",
      faq: [
        {
          question: "Telegram Premium и Stars — это одно и то же?",
          answer:
            "Нет. Premium — подписка (открывает функции), Stars — внутренняя валюта (для подарков, оплат, контента). Это разные вещи.",
        },
        {
          question: "Можно ли купить Premium за Stars?",
          answer:
            "Да, Stars можно потратить на подписку Premium (например, в подарок). Но Premium — это не Stars.",
        },
        {
          question: "Что мне нужно?",
          answer:
            "Если нужны функции приложения (большие файлы, быстрая загрузка, без рекламы) — Premium. Для подарков, оплаты в боте или контента — Stars.",
        },
        {
          question: "Если Premium закончится, Stars тоже пропадут?",
          answer:
            "Нет. Это отдельные вещи. Срок подписки Premium заканчивается, а Stars остаются на балансе бессрочно.",
        },
        {
          question: "Как купить оба в Узбекистане?",
          answer:
            "И то, и другое можно купить в сумах картой UzCard/HUMO/Click/Payme через бота — зарубежная карта не нужна.",
        },
      ],
    },
  },
};
