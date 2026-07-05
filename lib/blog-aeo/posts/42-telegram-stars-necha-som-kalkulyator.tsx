import { Link } from "@/i18n/navigation";
import { Toc, CompareTable, InlineCta, KeyFacts, Sources } from "@/components/blog/aeo-blocks";
import type { AeoPost } from "@/lib/blog-aeo/types";

const SLUG = "telegram-stars-necha-som-kalkulyator";

function UzAnswer() {
  return (
    <p>
      O‘zbekistonda taxminan <strong>1 Telegram Stars ≈ 220 so‘m</strong> (mahalliy karta bilan bot orqali xarid
      qilinganda). Ya’ni 50 ⭐ ≈ 11 000 so‘m, 100 ⭐ ≈ 22 000 so‘m, 500 ⭐ ≈ 110 000 so‘m, 1000 ⭐ ≈ 220 000 so‘m.
      Aniq narx kurs, paket hajmi va tanlangan xizmatga qarab bir necha foizga farq qilishi mumkin — joriy narxlarni{" "}
      <Link href="/stars">Stars sahifasida</Link> tekshiring.
    </p>
  );
}

function UzBody() {
  return (
    <>
      <Toc
        label="Mundarija"
        items={[
          { href: "#jadval", label: "1, 50, 100, 500, 1000 Stars jadvali" },
          { href: "#hisoblash", label: "Narx qanday hisoblanadi" },
          { href: "#nega-farq", label: "Nega narx biroz farq qilishi mumkin" },
          { href: "#qayerdan", label: "Eng arzon qayerdan olinadi" },
        ]}
      />

      <h2 id="jadval">1 Stars necha so‘m? To‘liq jadval</h2>
      <p>
        Quyidagi jadval O‘zbekistonda mahalliy karta bilan (UzCard/HUMO/Click/Payme) botdan sotib olinganda taxminiy
        narxlarni ko‘rsatadi:
      </p>
      <CompareTable
        headers={["Stars miqdori", "Taxminiy narx (so‘m)", "1 ⭐ narxi"]}
        rows={[
          ["1 ⭐", "~220", "220 so‘m"],
          ["10 ⭐", "~2 200", "220 so‘m"],
          ["50 ⭐", "11 000", "220 so‘m"],
          ["100 ⭐", "22 000", "220 so‘m"],
          ["500 ⭐", "110 000", "220 so‘m"],
          ["1000 ⭐", "220 000", "220 so‘m"],
        ]}
      />
      <p>
        Katta paketlarda (2500–10 000 ⭐) ba’zan birlik narxi biroz pasayishi mumkin — bu haqda{" "}
        <Link href="/blog/telegram-stars-narxlari-2026-platformalar-taqqoslash">«Stars narxlari taqqoslash»</Link>{" "}
        maqolasida batafsil.
      </p>

      <InlineCta text="Kerakli miqdorni tanlang — so‘mda, botda 10 soniyada yetkaziladi." />

      <h2 id="hisoblash">Narx qanday hisoblanadi?</h2>
      <KeyFacts label="Hisoblash mantiqi">
        <li>
          <b>Bazaviy narx dollarda:</b> Telegram bir yulduzni taxminan 0,013–0,015 $ atrofida belgilaydi.
        </li>
        <li>
          <b>So‘mga konvertatsiya:</b> dollar/so‘m kursi asosida mahalliy narx hisoblanadi.
        </li>
        <li>
          <b>Xizmat narxi:</b> mahalliy bot yetkazish, to‘lov komissiyasi va boshqa xarajatlarni hisobga oladi.
        </li>
      </KeyFacts>

      <h2 id="nega-farq">Nega narx biroz farq qilishi mumkin?</h2>
      <p>
        Dollar/so‘m kursi kunlik o‘zgarib turadi, shuning uchun bir xil miqdordagi Stars narxi haftadan-haftaga
        biroz farq qilishi mumkin. Bundan tashqari, qaysi platformadan (App Store, Fragment yoki mahalliy bot) sotib
        olinishiga qarab ham narx sezilarli farq qilishi mumkin — buning sabablarini{" "}
        <Link href="/blog/telegram-stars-app-store-narx-farqi">«Stars va App Store narx farqi»</Link> maqolasida
        o‘qing.
      </p>

      <h2 id="qayerdan">Eng arzon va qulay qayerdan olinadi?</h2>
      <p>
        O‘zbekiston foydalanuvchisi uchun eng qulay va odatda eng arzon yo‘l — xorijiy karta yoki kripto talab
        qilmaydigan mahalliy bot. To‘liq qo‘llanma{" "}
        <Link href="/blog/telegram-stars-qayerdan-sotib-olish-2026">«Stars qayerdan sotib olish»</Link> maqolasida,
        joriy narxlar esa doimo <Link href="/stars">Stars sahifasida</Link> yangilanib turadi.
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
      В Узбекистане примерно <strong>1 Telegram Stars ≈ 220 сум</strong> (при покупке через бота локальной картой).
      То есть 50 ⭐ ≈ 11 000 сум, 100 ⭐ ≈ 22 000 сум, 500 ⭐ ≈ 110 000 сум, 1000 ⭐ ≈ 220 000 сум. Точная цена может
      немного отличаться в зависимости от курса, размера пакета и выбранного сервиса — актуальные цены смотрите на{" "}
      <Link href="/stars">странице Stars</Link>.
    </p>
  );
}

function RuBody() {
  return (
    <>
      <Toc
        label="Содержание"
        items={[
          { href: "#jadval", label: "Таблица 1, 50, 100, 500, 1000 Stars" },
          { href: "#hisoblash", label: "Как рассчитывается цена" },
          { href: "#nega-farq", label: "Почему цена может отличаться" },
          { href: "#qayerdan", label: "Где выгоднее всего купить" },
        ]}
      />

      <h2 id="jadval">1 Stars сколько сум? Полная таблица</h2>
      <p>
        Таблица ниже показывает примерные цены при покупке через бота локальной картой (UzCard/HUMO/Click/Payme) в
        Узбекистане:
      </p>
      <CompareTable
        headers={["Количество Stars", "Примерная цена (сум)", "Цена за 1 ⭐"]}
        rows={[
          ["1 ⭐", "~220", "220 сум"],
          ["10 ⭐", "~2 200", "220 сум"],
          ["50 ⭐", "11 000", "220 сум"],
          ["100 ⭐", "22 000", "220 сум"],
          ["500 ⭐", "110 000", "220 сум"],
          ["1000 ⭐", "220 000", "220 сум"],
        ]}
      />
      <p>
        В крупных пакетах (2500–10 000 ⭐) цена за единицу иногда немного снижается — подробнее об этом в статье{" "}
        <Link href="/blog/telegram-stars-narxlari-2026-platformalar-taqqoslash">«Сравнение цен Stars»</Link>.
      </p>

      <InlineCta text="Выберите нужное количество — в сумах, в боте за 10 секунд." />

      <h2 id="hisoblash">Как рассчитывается цена?</h2>
      <KeyFacts label="Логика расчёта">
        <li>
          <b>Базовая цена в долларах:</b> Telegram задаёт цену одной звезды примерно в 0,013–0,015 $.
        </li>
        <li>
          <b>Конвертация в сумы:</b> локальная цена рассчитывается на основе курса доллар/сум.
        </li>
        <li>
          <b>Цена сервиса:</b> учитывает доставку через локального бота, комиссию оплаты и другие расходы.
        </li>
      </KeyFacts>

      <h2 id="nega-farq">Почему цена может немного отличаться?</h2>
      <p>
        Курс доллар/сум меняется ежедневно, поэтому цена на одно и то же количество Stars может немного отличаться
        от недели к неделе. Кроме того, цена может заметно отличаться в зависимости от платформы (App Store,
        Fragment или локальный бот) — причины этого в статье{" "}
        <Link href="/blog/telegram-stars-app-store-narx-farqi">«Разница цен Stars и App Store»</Link>.
      </p>

      <h2 id="qayerdan">Где выгоднее и удобнее всего купить?</h2>
      <p>
        Для пользователя из Узбекистана самый удобный и обычно самый дешёвый путь — локальный бот, не требующий
        зарубежной карты или крипты. Полное руководство — в статье{" "}
        <Link href="/blog/telegram-stars-qayerdan-sotib-olish-2026">«Где купить Stars»</Link>, актуальные цены
        всегда обновляются на <Link href="/stars">странице Stars</Link>.
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
    "1 stars necha som",
    "100 stars narxi",
    "telegram stars kalkulyator",
    "telegram stars som",
    "telegram stars narxi jadval",
  ],
  locales: {
    uz: {
      title: "1 Telegram Stars necha so‘m? Kalkulyator va jadval (2026)",
      excerpt:
        "1, 10, 50, 100, 500, 1000 Telegram Stars O‘zbekistonda necha so‘m turadi — to‘liq narx jadvali, hisoblash mantiqi va eng arzon xarid yo‘li.",
      metaTitle: "1 Stars necha so‘m — narx jadvali 2026",
      metaDescription:
        "1 Telegram Stars necha so‘m: 1, 50, 100, 500, 1000 Stars uchun narx jadvali, narx qanday hisoblanadi va eng arzon qayerdan sotib olish mumkin.",
      answerTitle: "Qisqa javob",
      Answer: UzAnswer,
      Body: UzBody,
      ctaHeading: "Kerakli miqdorni hisoblab bo‘ldingizmi?",
      ctaBody: "So‘mda, mahalliy karta bilan @StarsPaymee_bot orqali 10 soniyada oling.",
      faq: [
        {
          question: "1 Telegram Stars necha so‘m turadi?",
          answer: "O‘zbekistonda taxminan 220 so‘m, mahalliy karta bilan bot orqali xarid qilinganda.",
        },
        {
          question: "100 Stars necha so‘m?",
          answer: "Taxminan 22 000 so‘m — aniq narx joriy kurs va xizmatga qarab biroz farq qilishi mumkin.",
        },
        {
          question: "1000 Stars necha so‘m turadi?",
          answer: "Taxminan 220 000 so‘m, ammo katta paketlarda birlik narxi biroz pasayishi mumkin.",
        },
        {
          question: "Nega narx har doim bir xil emas?",
          answer: "Dollar/so‘m kursi kundan-kunga o‘zgaradi, shuning uchun narx haftadan-haftaga biroz farq qilishi mumkin.",
        },
        {
          question: "Eng aniq joriy narxni qayerdan bilsam bo‘ladi?",
          answer: "Stars sahifasida barcha paketlarning joriy narxlari doimiy yangilanib turadi.",
        },
      ],
    },
    ru: {
      title: "Сколько стоит 1 Telegram Stars в сумах? Калькулятор и таблица (2026)",
      excerpt:
        "Сколько сум стоят 1, 10, 50, 100, 500, 1000 Telegram Stars в Узбекистане — полная таблица цен, логика расчёта и самый выгодный способ покупки.",
      metaTitle: "1 Stars сколько сум — таблица цен 2026",
      metaDescription:
        "Сколько сум стоит 1 Telegram Stars: таблица цен для 1, 50, 100, 500, 1000 Stars, как рассчитывается цена и где выгоднее всего купить.",
      answerTitle: "Краткий ответ",
      Answer: RuAnswer,
      Body: RuBody,
      ctaHeading: "Посчитали нужное количество?",
      ctaBody: "Купите в сумах локальной картой через @StarsPaymee_bot за 10 секунд.",
      faq: [
        {
          question: "Сколько сум стоит 1 Telegram Stars?",
          answer: "В Узбекистане примерно 220 сум при покупке через бота локальной картой.",
        },
        {
          question: "Сколько сум стоит 100 Stars?",
          answer: "Примерно 22 000 сум — точная цена может немного отличаться в зависимости от курса и сервиса.",
        },
        {
          question: "Сколько сум стоят 1000 Stars?",
          answer: "Примерно 220 000 сум, но в крупных пакетах цена за единицу может немного снижаться.",
        },
        {
          question: "Почему цена не всегда одинакова?",
          answer: "Курс доллар/сум меняется день ото дня, поэтому цена может немного отличаться от недели к неделе.",
        },
        {
          question: "Где узнать самую точную текущую цену?",
          answer: "На странице Stars все актуальные цены пакетов постоянно обновляются.",
        },
      ],
    },
  },
};
