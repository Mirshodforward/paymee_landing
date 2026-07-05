import { Link } from "@/i18n/navigation";
import { Toc, KeyFacts, InlineCta, Sources } from "@/components/blog/aeo-blocks";
import type { AeoPost } from "@/lib/blog-aeo/types";

const SLUG = "telegram-stars-eng-kam-nechta";

function UzAnswer() {
  return (
    <p>
      Telegram Stars sotib olishning eng kichik rasmiy paketi odatda <strong>15 yoki 50 yulduzcha</strong>dan
      boshlanadi — bu qaysi xizmat (Telegram ilovasi, Fragment yoki mahalliy bot) orqali olinishiga bog‘liq. Mahalliy
      botlarda eng kichik paket ko‘pincha <strong>50 ⭐ (~11 000 so‘m)</strong>. Kichik miqdorda olish — funksiyani
      sinab ko‘rish yoki arzon sovg‘a/reaksiya uchun mantiqan to‘g‘ri.
    </p>
  );
}

function UzBody() {
  return (
    <>
      <Toc
        label="Mundarija"
        items={[
          { href: "#minimal", label: "Rasmiy minimal paketlar" },
          { href: "#nima-uchun", label: "Nima uchun minimal chegara bor" },
          { href: "#test", label: "Nega kichik test-xarid mantiqli" },
          { href: "#qanday", label: "Kichik miqdorni qanday olish mumkin" },
        ]}
      />

      <h2 id="minimal">Rasmiy minimal paketlar qanday?</h2>
      <p>
        Telegram Stars’ni sotib olish minimal miqdori platformaga qarab farq qiladi. Telegram ilovasi ichida
        (Apple/Google orqali) va Fragment’da minimal paketlar biroz farq qilishi mumkin, lekin mahalliy botlar
        odatda eng qulay va kichik chegarani taklif qiladi.
      </p>
      <KeyFacts label="Odatiy minimal chegaralar">
        <li>
          <b>Mahalliy bot (masalan, @StarsPaymee_bot):</b> odatda 50 ⭐ dan (~11 000 so‘m).
        </li>
        <li>
          <b>Telegram ilovasi (Apple/Google):</b> platforma tomonidan belgilangan minimal paket, odatda biroz
          yuqoriroq.
        </li>
        <li>
          <b>Fragment (TON):</b> kripto tranzaksiya minimal miqdoriga bog‘liq.
        </li>
      </KeyFacts>
      <p>
        Barcha paketlar va joriy narxlarni{" "}
        <Link href="/stars">Stars sahifasida</Link> ko‘rish mumkin.
      </p>

      <InlineCta text="Kichik miqdordan boshlab sinab ko‘ring — so‘mda, botda 10 soniyada." />

      <h2 id="nima-uchun">Nima uchun minimal chegara mavjud?</h2>
      <p>
        Har qanday raqamli to‘lov tizimida bo‘lgani kabi, juda kichik summalarni qayta ishlash xarajati (to‘lov
        komissiyasi, tranzaksiya xarajati) nisbatan yuqori bo‘ladi. Shuning uchun xizmatlar ma’lum bir minimal
        paketni belgilaydi — bu iqtisodiy jihatdan oqilona.
      </p>

      <h2 id="test">Nega kichik miqdorda test-xarid qilish mantiqli?</h2>
      <ul>
        <li>
          <strong>Xizmatni sinash:</strong> birinchi marta foydalanuvchi uchun kichik summa bilan jarayonni
          tekshirish xavfsizroq.
        </li>
        <li>
          <strong>Tezkor yetkazishni ko‘rish:</strong> kichik buyurtma orqali yetkazib berish tezligini baholash
          mumkin.
        </li>
        <li>
          <strong>Kichik sovg‘a/reaksiya uchun:</strong> ba’zan faqat bitta Star Reaction yoki kichik sovg‘a
          yetarli bo‘ladi.
        </li>
      </ul>
      <p>
        Xavfsiz xizmatni qanday aniqlash haqida{" "}
        <Link href="/blog/telegram-stars-xavfsiz-sotib-olish-qollanma">«Xavfsiz sotib olish qo‘llanmasi»</Link>da
        o‘qing.
      </p>

      <h2 id="qanday">Kichik miqdorni qanday sotib olish mumkin?</h2>
      <p>
        Jarayon katta xariddan farq qilmaydi: botni oching, eng kichik paketni tanlang, qabul qiluvchi
        @username’ini kiriting va mahalliy karta bilan to‘lang. To‘liq bosqichlarni{" "}
        <Link href="/blog/telegram-stars-qayerdan-sotib-olish-2026">«Stars qayerdan sotib olish»</Link> maqolasida
        ko‘ring.
      </p>

      <Sources
        label="Manbalar"
        items={[
          { href: "https://telegram.org/blog/telegram-stars", label: "telegram.org/blog/telegram-stars", note: "Stars rasmiy e’loni" },
          { href: "https://core.telegram.org/api/stars", label: "core.telegram.org/api/stars", note: "texnik hujjat" },
        ]}
      />
    </>
  );
}

function RuAnswer() {
  return (
    <p>
      Самый маленький официальный пакет для покупки Telegram Stars обычно начинается с{" "}
      <strong>15 или 50 звёзд</strong> — это зависит от того, через какой сервис покупка совершается (приложение
      Telegram, Fragment или локальный бот). В локальных ботах минимальный пакет чаще всего{" "}
      <strong>50 ⭐ (~11 000 сум)</strong>. Покупка небольшого количества логична для теста функции или недорогого
      подарка/реакции.
    </p>
  );
}

function RuBody() {
  return (
    <>
      <Toc
        label="Содержание"
        items={[
          { href: "#minimal", label: "Официальные минимальные пакеты" },
          { href: "#nima-uchun", label: "Почему есть минимальный порог" },
          { href: "#test", label: "Почему логична небольшая тестовая покупка" },
          { href: "#qanday", label: "Как купить небольшое количество" },
        ]}
      />

      <h2 id="minimal">Каковы официальные минимальные пакеты?</h2>
      <p>
        Минимальное количество для покупки Telegram Stars отличается в зависимости от платформы. Внутри приложения
        Telegram (через Apple/Google) и в Fragment минимальные пакеты могут немного отличаться, но локальные боты
        обычно предлагают самый удобный и маленький порог.
      </p>
      <KeyFacts label="Обычные минимальные пороги">
        <li>
          <b>Локальный бот (например, @StarsPaymee_bot):</b> обычно от 50 ⭐ (~11 000 сум).
        </li>
        <li>
          <b>Приложение Telegram (Apple/Google):</b> минимальный пакет, заданный платформой, обычно чуть выше.
        </li>
        <li>
          <b>Fragment (TON):</b> зависит от минимальной суммы криптотранзакции.
        </li>
      </KeyFacts>
      <p>
        Все пакеты и актуальные цены смотрите на <Link href="/stars">странице Stars</Link>.
      </p>

      <InlineCta text="Начните с небольшого количества — в сумах, в боте за 10 секунд." />

      <h2 id="nima-uchun">Почему существует минимальный порог?</h2>
      <p>
        Как и в любой цифровой платёжной системе, обработка очень маленьких сумм (комиссия оплаты, стоимость
        транзакции) относительно дороже. Поэтому сервисы устанавливают определённый минимальный пакет — это
        экономически обоснованно.
      </p>

      <h2 id="test">Почему логична небольшая тестовая покупка?</h2>
      <ul>
        <li>
          <strong>Проверка сервиса:</strong> для первого раза безопаснее проверить процесс на небольшой сумме.
        </li>
        <li>
          <strong>Оценка скорости доставки:</strong> через небольшой заказ можно оценить скорость доставки.
        </li>
        <li>
          <strong>Для небольшого подарка/реакции:</strong> иногда достаточно всего одной Star Reaction или
          маленького подарка.
        </li>
      </ul>
      <p>
        Как определить надёжный сервис — в статье{" "}
        <Link href="/blog/telegram-stars-xavfsiz-sotib-olish-qollanma">«Руководство по безопасной покупке»</Link>.
      </p>

      <h2 id="qanday">Как купить небольшое количество?</h2>
      <p>
        Процесс не отличается от крупной покупки: откройте бота, выберите самый маленький пакет, введите @username
        получателя и оплатите локальной картой. Полные шаги — в статье{" "}
        <Link href="/blog/telegram-stars-qayerdan-sotib-olish-2026">«Где купить Stars»</Link>.
      </p>

      <Sources
        label="Источники"
        items={[
          { href: "https://telegram.org/blog/telegram-stars", label: "telegram.org/blog/telegram-stars", note: "официальный анонс Stars" },
          { href: "https://core.telegram.org/api/stars", label: "core.telegram.org/api/stars", note: "техническая документация" },
        ]}
      />
    </>
  );
}

export const post: AeoPost = {
  slug: SLUG,
  category: "Stars",
  type: "info",
  datePublished: "2026-07-05",
  dateModified: "2026-07-05",
  keywords: [
    "telegram stars eng kam nechta",
    "telegram stars minimal miqdor",
    "telegram stars minimum purchase",
    "eng kichik stars paketi",
    "telegram stars kam sotib olish",
  ],
  locales: {
    uz: {
      title: "Telegram Stars eng kam nechta olsa bo‘ladi? Minimal miqdor va qoidalar (2026)",
      excerpt:
        "Telegram Stars sotib olishning rasmiy minimal paketlari, kichik miqdorni bot orqali olish va nima uchun kichik test-xarid mantiqli ekani.",
      metaTitle: "Telegram Stars minimal miqdor — 2026",
      metaDescription:
        "Telegram Stars eng kam nechta olsa bo‘ladi: rasmiy minimal paketlar, mahalliy botdagi eng kichik variant va test-xarid qilish mantiqi.",
      answerTitle: "Qisqa javob",
      Answer: UzAnswer,
      Body: UzBody,
      ctaHeading: "Kichik miqdordan sinab ko‘rasizmi?",
      ctaBody: "So‘mda, mahalliy karta bilan @StarsPaymee_bot orqali 10 soniyada.",
      faq: [
        {
          question: "Telegram Stars’ni eng kamida nechta sotib olsa bo‘ladi?",
          answer: "Bu platformaga bog‘liq — mahalliy botlarda odatda 50 ⭐ dan, Telegram ilovasida esa biroz boshqacha bo‘lishi mumkin.",
        },
        {
          question: "Nima uchun minimal chegara mavjud?",
          answer: "Juda kichik summalarni qayta ishlash xarajati (komissiya) nisbatan yuqori bo‘lgani uchun.",
        },
        {
          question: "Faqat bitta yulduzcha sotib olib bo‘ladimi?",
          answer: "Odatda yo‘q — aksariyat xizmatlar belgilangan minimal paketdan (masalan, 50 ⭐) boshlab sotadi.",
        },
        {
          question: "Kichik test-xarid qilish nima uchun tavsiya etiladi?",
          answer: "Yangi xizmatni sinash, yetkazish tezligini baholash va xavfsizlikni tekshirish uchun mantiqli.",
        },
        {
          question: "Eng kichik paket narxi qancha?",
          answer: "Mahalliy botda odatda 50 ⭐ ≈ 11 000 so‘m atrofida — aniq narx Stars sahifasida ko‘rsatiladi.",
        },
      ],
    },
    ru: {
      title: "Какое минимальное количество Telegram Stars можно купить? (2026)",
      excerpt:
        "Официальные минимальные пакеты для покупки Telegram Stars, покупка небольшого количества через бота и почему логична небольшая тестовая покупка.",
      metaTitle: "Минимальное количество Telegram Stars — 2026",
      metaDescription:
        "Какое минимальное количество Telegram Stars можно купить: официальные минимальные пакеты, самый маленький вариант в локальном боте и логика тестовой покупки.",
      answerTitle: "Краткий ответ",
      Answer: RuAnswer,
      Body: RuBody,
      ctaHeading: "Хотите попробовать с малого?",
      ctaBody: "Купите в сумах локальной картой через @StarsPaymee_bot за 10 секунд.",
      faq: [
        {
          question: "Какое минимальное количество Telegram Stars можно купить?",
          answer: "Это зависит от платформы — в локальных ботах обычно от 50 ⭐, в приложении Telegram может немного отличаться.",
        },
        {
          question: "Почему существует минимальный порог?",
          answer: "Потому что обработка очень маленьких сумм (комиссия) относительно дороже.",
        },
        {
          question: "Можно ли купить всего одну звезду?",
          answer: "Обычно нет — большинство сервисов продают начиная с установленного минимального пакета (например, 50 ⭐).",
        },
        {
          question: "Почему рекомендуется небольшая тестовая покупка?",
          answer: "Логично для проверки нового сервиса, оценки скорости доставки и проверки безопасности.",
        },
        {
          question: "Сколько стоит самый маленький пакет?",
          answer: "В локальном боте обычно около 50 ⭐ ≈ 11 000 сум — точная цена указана на странице Stars.",
        },
      ],
    },
  },
};
