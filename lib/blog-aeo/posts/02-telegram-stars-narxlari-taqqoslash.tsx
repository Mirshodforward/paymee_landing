import { Link } from "@/i18n/navigation";
import { CompareTable, InlineCta, KeyFacts, Sources, Yes, No } from "@/components/blog/aeo-blocks";
import type { AeoPost } from "@/lib/blog-aeo/types";

const SLUG = "telegram-stars-narxlari-2026-platformalar-taqqoslash";

function UzAnswer() {
  return (
    <p>
      Telegram Stars narxi platformaga qarab farq qiladi: Telegram ilovasi ichida (App Store/Google Play) eng qimmat,
      Fragment’da arzonroq (TON kripto kerak), vositachi botlarda esa O‘zbekiston kartasi bilan so‘mda to‘lanadi.
      StarsPaymee mahalliy karta qabul qiladigan bozorda eng arzon variantlardan biri — 50 ⭐ atigi 11 000 so‘mdan.
    </p>
  );
}

function UzBody() {
  return (
    <>
      <h2 id="qiymat">Bir Telegram Star qancha turadi?</h2>
      <p>
        Yulduz birligining bazaviy qiymatini Telegram AQSH dollarida belgilaydi — taxminan <strong>0,013–0,015 $</strong>{" "}
        (paket hajmiga qarab biroz farq qiladi). Lekin yakuniy narx siz tanlagan platforma, uning ustamasi va to‘lov
        usuliga bog‘liq. Quyida platformalararo taqqoslash:
      </p>
      <CompareTable
        headers={["Platforma", "To‘lov usuli", "O‘zbekiston kartasi", "Nisbiy narx"]}
        rows={[
          ["Telegram (App Store / Google Play)", "Xorijiy karta", <No key="1" />, "Eng qimmat (do‘kon ustamasi)"],
          ["Fragment.com", "TON kripto", <No key="2" />, "Arzon, lekin kripto kerak"],
          ["@PremiumBot", "Visa / Mastercard", <No key="3" />, "O‘rtacha"],
          [<>StarsPaymee (@StarsPaymee_bot)</>, "UzCard/HUMO/Click/Payme", <Yes key="4" />, "Mahalliy bozorda eng arzonlardan"],
        ]}
      />

      <InlineCta text="Joriy so‘m narxini ko‘rib, darhol buyurtma bering." />

      <h2 id="paketlar">StarsPaymee paketlari va so‘m narxi</h2>
      <p>
        StarsPaymee’da yulduz donasi taxminan 220 so‘mdan boshlanadi. Mana ommabop paketlar (aniq joriy narxlar{" "}
        <Link href="/stars">Stars sahifasida</Link>):
      </p>
      <CompareTable
        headers={["Paket", "Taxminiy narx (so‘m)", "Kimga mos"]}
        rows={[
          ["50 ⭐", "11 000", "Sinov, kichik sovg‘a"],
          ["100 ⭐", "22 000", "Reaksiya, oddiy sovg‘a"],
          ["500 ⭐", "110 000", "Faol foydalanuvchi"],
          ["1000 ⭐", "220 000", "Kontent egasi / kanal"],
          ["2500–10 000 ⭐", "550 000+", "Yirik xarid, tejamkor birlik narxi"],
        ]}
      />
      <KeyFacts label="Tejamkorlik maslahatlari">
        <li>
          Yirik paketlarda <b>birlik narxi</b> ko‘pincha pastroq — bir martada ko‘proq olish foydali
        </li>
        <li>
          Bir nechta kichik buyurtma o‘rniga <b>bitta yirik paket</b> — kamroq tranzaksiya, kamroq komissiya
        </li>
        <li>
          Narxlar dinamik: xariddan oldin <b>joriy so‘m summasini</b> Mini App’da tekshiring
        </li>
      </KeyFacts>

      <h2 id="nega-farq">Nega narxlar farq qiladi?</h2>
      <p>
        Asosiy sabablar: Apple/Google do‘kon ustamasi (in-app xaridlarda), valyuta konvertatsiyasi kursi, to‘lov
        operatori komissiyasi va platforma xizmat haqi. Mahalliy karta qabul qiladigan botlarda xorijiy do‘kon
        ustamasi yo‘qoladi, shuning uchun O‘zbekiston foydalanuvchisi uchun ular ko‘pincha hamyonbop bo‘ladi. Qayerdan
        sotib olishning to‘liq yo‘riqnomasi —{" "}
        <Link href="/blog/telegram-stars-qayerdan-sotib-olish-2026">«Stars qayerdan sotib olish» qo‘llanmamizda</Link>.
      </p>

      <h2 id="firibgarlik">«Juda arzon» — ogohlantiruvchi belgi</h2>
      <p>
        Bozordagi o‘rtacha narxdan keskin past taklif ko‘pincha firibgarlik belgisi. Ishonchli xizmat narxni bozorga
        yaqin ushlaydi va aniq oferta, support hamda buyurtma kuzatuvini taqdim etadi. Batafsil —{" "}
        <Link href="/blog/starspaymee-ishonchli-xavfsizmi">«StarsPaymee ishonchlimi?»</Link> maqolasida.
      </p>

      <Sources
        label="Manbalar"
        items={[
          { href: "https://telegram.org/blog/telegram-stars", label: "telegram.org/blog/telegram-stars", note: "Stars rasmiy e’loni" },
          { href: "https://fragment.com", label: "fragment.com", note: "TON orqali rasmiy xarid" },
        ]}
      />
    </>
  );
}

function RuAnswer() {
  return (
    <p>
      Цена Telegram Stars зависит от платформы: внутри приложения (App Store/Google Play) дороже всего, на Fragment
      дешевле (нужна крипта TON), а в ботах-посредниках оплата идёт картой Узбекистана в сумах. StarsPaymee — один из
      самых дешёвых вариантов на рынке локальных карт: 50 ⭐ от 11 000 сум.
    </p>
  );
}

function RuBody() {
  return (
    <>
      <h2 id="qiymat">Сколько стоит одна Telegram Star?</h2>
      <p>
        Базовую стоимость звезды Telegram задаёт в долларах — примерно <strong>0,013–0,015 $</strong> (немного зависит
        от размера пакета). Но итоговая цена зависит от платформы, её наценки и способа оплаты. Сравнение платформ:
      </p>
      <CompareTable
        headers={["Платформа", "Способ оплаты", "Карта Узбекистана", "Относительная цена"]}
        rows={[
          ["Telegram (App Store / Google Play)", "Зарубежная карта", <No key="1" />, "Дороже всего (наценка магазина)"],
          ["Fragment.com", "TON крипто", <No key="2" />, "Дёшево, но нужна крипта"],
          ["@PremiumBot", "Visa / Mastercard", <No key="3" />, "Средне"],
          [<>StarsPaymee (@StarsPaymee_bot)</>, "UzCard/HUMO/Click/Payme", <Yes key="4" />, "Один из самых дешёвых на локальном рынке"],
        ]}
      />

      <InlineCta text="Посмотрите актуальную цену в сумах и оформите заказ." />

      <h2 id="paketlar">Пакеты StarsPaymee и цена в сумах</h2>
      <p>
        В StarsPaymee цена звезды начинается примерно от 220 сум. Популярные пакеты (точные цены — на{" "}
        <Link href="/stars">странице Stars</Link>):
      </p>
      <CompareTable
        headers={["Пакет", "Примерная цена (сум)", "Кому подходит"]}
        rows={[
          ["50 ⭐", "11 000", "Проба, маленький подарок"],
          ["100 ⭐", "22 000", "Реакция, обычный подарок"],
          ["500 ⭐", "110 000", "Активный пользователь"],
          ["1000 ⭐", "220 000", "Владелец контента / канал"],
          ["2500–10 000 ⭐", "550 000+", "Крупная покупка, выгодная цена за единицу"],
        ]}
      />
      <KeyFacts label="Советы по экономии">
        <li>
          В крупных пакетах <b>цена за единицу</b> часто ниже — брать больше за раз выгоднее
        </li>
        <li>
          Вместо нескольких мелких заказов — <b>один крупный пакет</b>: меньше транзакций и комиссий
        </li>
        <li>
          Цены динамические: перед покупкой проверьте <b>актуальную сумму в сумах</b> в Mini App
        </li>
      </KeyFacts>

      <h2 id="nega-farq">Почему цены отличаются?</h2>
      <p>
        Основные причины: наценка магазинов Apple/Google (для in-app покупок), курс конвертации валюты, комиссия
        платёжного оператора и сервисный сбор платформы. В ботах с локальной картой наценка зарубежного магазина
        исчезает, поэтому для пользователя из Узбекистана они зачастую выгоднее. Полная инструкция, где покупать — в{" "}
        <Link href="/blog/telegram-stars-qayerdan-sotib-olish-2026">руководстве «Где купить Stars»</Link>.
      </p>

      <h2 id="firibgarlik">«Слишком дёшево» — тревожный признак</h2>
      <p>
        Предложение заметно ниже среднерыночного часто означает мошенничество. Надёжный сервис держит цену близкой к
        рынку и предоставляет чёткую оферту, поддержку и отслеживание заказа. Подробнее — в{" "}
        <Link href="/blog/starspaymee-ishonchli-xavfsizmi">статье «Надёжен ли StarsPaymee?»</Link>.
      </p>

      <Sources
        label="Источники"
        items={[
          { href: "https://telegram.org/blog/telegram-stars", label: "telegram.org/blog/telegram-stars", note: "официальный анонс Stars" },
          { href: "https://fragment.com", label: "fragment.com", note: "официальная покупка через TON" },
        ]}
      />
    </>
  );
}

export const post: AeoPost = {
  slug: SLUG,
  category: "Stars",
  type: "comparison",
  datePublished: "2026-06-26",
  dateModified: "2026-06-26",
  keywords: [
    "telegram stars narxi",
    "telegram stars price",
    "telegram stars arzon",
    "telegram stars narxlari taqqoslash",
    "telegram stars fragment narx",
    "eng arzon telegram stars",
  ],
  locales: {
    uz: {
      title: "Telegram Stars narxlari 2026 — eng arzon platformalar taqqoslandi",
      excerpt:
        "Telegram Stars narxi platformaga qarab qancha farq qiladi? App Store, Fragment, @PremiumBot va StarsPaymee taqqoslandi — so‘mdagi paket narxlari va tejamkorlik bilan.",
      metaTitle: "Telegram Stars narxlari 2026 — platformalar taqqoslandi",
      metaDescription:
        "Telegram Stars narxi 2026: App Store, Fragment, @PremiumBot va StarsPaymee taqqoslash jadvali, so‘mdagi paketlar va eng arzon variant.",
      answerTitle: "Qisqa javob",
      Answer: UzAnswer,
      Body: UzBody,
      ctaHeading: "Eng arzon narxda Stars olasizmi?",
      ctaBody: "Botda joriy so‘m narxini ko‘ring va mahalliy karta bilan to‘lang — yulduzlar 10 soniyada yetkaziladi.",
      faq: [
        {
          question: "Telegram Stars eng arzon qayerda?",
          answer:
            "O‘zbekiston kartasini qabul qiladigan bozorda vositachi botlar (jumladan StarsPaymee) ko‘pincha eng hamyonbop, chunki Apple/Google do‘kon ustamasi yo‘q. Fragment ham arzon, lekin TON kripto talab qiladi.",
        },
        {
          question: "Bir yulduz necha so‘m turadi?",
          answer:
            "StarsPaymee’da yulduz donasi taxminan 220 so‘mdan boshlanadi; aniq narx paket va joriy kursga bog‘liq. Telegram bazaviy qiymatni dollarda (~0,013 $) belgilaydi.",
        },
        {
          question: "Yirik paket arzonroqmi?",
          answer:
            "Ko‘p hollarda ha — yirik paketlarda birlik narxi pastroq bo‘lishi mumkin va tranzaksiya soni kamayadi. Xariddan oldin Mini App’da solishtiring.",
        },
        {
          question: "Narxlar nega o‘zgarib turadi?",
          answer:
            "Valyuta kursi, to‘lov komissiyasi va platforma siyosati ta’sir qiladi. Shuning uchun bir xil yulduz turli kunlarda biroz farq qilishi mumkin.",
        },
        {
          question: "«Juda arzon» takliflarga ishonsa bo‘ladimi?",
          answer:
            "Bozordan keskin past narx ogohlantiruvchi belgi. Oferta, support va buyurtma kuzatuvi bor ishonchli xizmatni tanlang.",
        },
      ],
    },
    ru: {
      title: "Цены на Telegram Stars 2026 — сравнение самых дешёвых платформ",
      excerpt:
        "Насколько отличается цена Telegram Stars по платформам? Сравнили App Store, Fragment, @PremiumBot и StarsPaymee — цены пакетов в сумах и экономия.",
      metaTitle: "Цены на Telegram Stars 2026 — сравнение платформ",
      metaDescription:
        "Цены Telegram Stars 2026: таблица сравнения App Store, Fragment, @PremiumBot и StarsPaymee, пакеты в сумах и самый дешёвый вариант.",
      answerTitle: "Краткий ответ",
      Answer: RuAnswer,
      Body: RuBody,
      ctaHeading: "Возьмёте Stars по самой низкой цене?",
      ctaBody: "Посмотрите актуальную цену в сумах в боте и оплатите локальной картой — звёзды поступят за 10 секунд.",
      faq: [
        {
          question: "Где Telegram Stars дешевле всего?",
          answer:
            "На рынке локальных карт боты-посредники (включая StarsPaymee) часто выгоднее, так как нет наценки магазинов Apple/Google. Fragment тоже дёшев, но требует крипту TON.",
        },
        {
          question: "Сколько сум стоит одна звезда?",
          answer:
            "В StarsPaymee звезда начинается примерно от 220 сум; точная цена зависит от пакета и курса. Telegram задаёт базовую стоимость в долларах (~0,013 $).",
        },
        {
          question: "Крупный пакет выгоднее?",
          answer:
            "Чаще да — в крупных пакетах цена за единицу ниже, а число транзакций меньше. Сравните в Mini App перед покупкой.",
        },
        {
          question: "Почему цены меняются?",
          answer:
            "Влияют курс валюты, комиссия оплаты и политика платформы. Поэтому одна и та же звезда в разные дни может стоить чуть по-разному.",
        },
        {
          question: "Можно ли доверять предложениям «слишком дёшево»?",
          answer:
            "Цена сильно ниже рынка — тревожный признак. Выбирайте надёжный сервис с офертой, поддержкой и отслеживанием заказа.",
        },
      ],
    },
  },
};
