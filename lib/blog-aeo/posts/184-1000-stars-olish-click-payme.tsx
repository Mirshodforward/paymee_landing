import { Link } from "@/i18n/navigation";
import {
  CompareTable,
  InfoCard,
  InfoGrid,
  InlineCta,
  KeyFacts,
  Notice,
  Sources,
  Step,
  Steps,
  Toc,
} from "@/components/blog/aeo-blocks";
import { STARS_PER_UNIT_GATEWAY_UZS, STARS_PER_UNIT_UZS } from "@/lib/products";
import type { AeoPost } from "@/lib/blog-aeo/types";

const SLUG = "1000-stars-olish-click-payme";

/**
 * 1000 Telegram Stars olish — narx to'lov usuli bo'yicha.
 *
 * NEGA ALOHIDA SAHIFA: «1000 stars» — alohida qidiruv niyati; raqobatchilarda
 * bunga maxsus sahifa bor. Umumiy narx jadvali `telegram-stars-narxi` da
 * (unga 2026-09-18 da `telegram-stars-paketlar-50-100-500-1000` birlashtirilgan).
 * Bu sahifa faqat 1000 dona xaridini yoritadi va Click/Payme qadamlarini
 * TAKRORLAMAYDI — ular uchun mavjud maqolalarga havola beriladi, aks holda
 * `click-payme-orqali-telegram-stars-sotib-olish` va
 * `payme-orqali-stars-va-premium-sotib-olish` bilan raqobatlashardi.
 *
 * ⚠️ NARX TO'LOV USULIGA BOG'LIQ — tekshirilgan (2026-09-26):
 *   - Uzcard/Humo o'tkazmasi: 220 so'm/dona → 1000 ta = 220 000;
 *   - Click, Payme: 240 so'm/dona → 1000 ta = 240 000
 *     (bot `payment_methods.stars_unit_price`, oxirgi 14 kunda 451 ta
 *     bajarilgan shlyuz buyurtmasi, eng ko'pi 240 so'm/dona).
 * Asl loyihada Click/Payme uchun 220 000 yozilgan edi — bu noto'g'ri bo'lardi.
 * Sonlar konstantalardan hisoblanadi, qo'lda yozilgan narx yo'q.
 */

const N = 1000;
const CARD = N * STARS_PER_UNIT_UZS;
const GATEWAY = N * STARS_PER_UNIT_GATEWAY_UZS;

const fmt = (n: number, locale: "uz" | "ru" | "en") =>
  locale === "en" ? n.toLocaleString("en-US") : n.toLocaleString("ru-RU").replace(/ /g, " ");

/** 1000 Stars narxi — to'lov usuli bo'yicha. */
function PriceTable({ locale }: { locale: "uz" | "ru" | "en" }) {
  const copy = {
    uz: {
      headers: ["To‘lov usuli", "1 Stars", "1000 Stars"],
      unit: "so‘m",
      rows: [
        ["Click", STARS_PER_UNIT_GATEWAY_UZS, GATEWAY],
        ["Payme", STARS_PER_UNIT_GATEWAY_UZS, GATEWAY],
        ["Uzcard / Humo o‘tkazma", STARS_PER_UNIT_UZS, CARD],
      ],
    },
    ru: {
      headers: ["Способ оплаты", "1 Stars", "1000 Stars"],
      unit: "сум",
      rows: [
        ["Click", STARS_PER_UNIT_GATEWAY_UZS, GATEWAY],
        ["Payme", STARS_PER_UNIT_GATEWAY_UZS, GATEWAY],
        ["Перевод Uzcard / Humo", STARS_PER_UNIT_UZS, CARD],
      ],
    },
    en: {
      headers: ["Payment method", "1 Star", "1000 Stars"],
      unit: "som",
      rows: [
        ["Click", STARS_PER_UNIT_GATEWAY_UZS, GATEWAY],
        ["Payme", STARS_PER_UNIT_GATEWAY_UZS, GATEWAY],
        ["Uzcard / Humo transfer", STARS_PER_UNIT_UZS, CARD],
      ],
    },
  }[locale];

  return (
    <CompareTable
      headers={copy.headers}
      rows={copy.rows.map(([name, one, total]) => [
        <strong key="n">{name}</strong>,
        `${fmt(one as number, locale)} ${copy.unit}`,
        <strong key="t">{`${fmt(total as number, locale)} ${copy.unit}`}</strong>,
      ])}
    />
  );
}

/** To'lovdan oldin tekshiriladigan narsalar. */
function CheckTable({ locale }: { locale: "uz" | "ru" | "en" }) {
  const copy = {
    uz: {
      headers: ["Nimani tekshirasiz", "Nega kerak"],
      rows: [
        ["1000 dona tanlangani", "Boshqa paket olib qo‘ymaslik uchun"],
        ["Qabul qiluvchi username’i", "Yulduzlar kerakli akkauntga tushishi uchun"],
        ["Yakuniy summa", "Qancha pul yechilishini bilish uchun"],
        ["Kartada yetarli mablag‘", "To‘lov o‘tishi uchun"],
        ["Buyurtma raqami", "Savol bo‘lsa, xaridni tez topish uchun"],
      ],
    },
    ru: {
      headers: ["Что проверить", "Зачем"],
      rows: [
        ["Выбрано ровно 1000 штук", "Чтобы не купить другой пакет"],
        ["Username получателя", "Чтобы звёзды пришли на нужный аккаунт"],
        ["Итоговая сумма", "Чтобы знать, сколько спишется"],
        ["Достаточно средств на карте", "Чтобы оплата прошла"],
        ["Номер заказа", "Чтобы быстро найти покупку при вопросе"],
      ],
    },
    en: {
      headers: ["What to check", "Why"],
      rows: [
        ["Exactly 1000 selected", "So you do not buy a different pack"],
        ["The recipient’s username", "So the stars land on the right account"],
        ["The final amount", "So you know what will be charged"],
        ["Enough money on the card", "So the payment goes through"],
        ["The order number", "So the purchase is easy to find if needed"],
      ],
    },
  }[locale];

  return <CompareTable headers={copy.headers} rows={copy.rows.map(([a, b]) => [<strong key="a">{a}</strong>, b])} />;
}

/* ---------------- UZ ---------------- */
function UzAnswer() {
  return (
    <p>
      1000 Telegram Stars <b>Click yoki Payme</b> orqali <b>{fmt(GATEWAY, "uz")} so‘m</b>,{" "}
      <b>Uzcard/Humo o‘tkazmasi</b> bilan <b>{fmt(CARD, "uz")} so‘m</b> turadi. @StarsPaymee_bot’da
      1000 donani tanlaysiz, qabul qiluvchining username’ini yozasiz va to‘laysiz. Akkaunt paroli kerak
      emas.
    </p>
  );
}

function UzBody() {
  return (
    <>
      <Toc
        label="Sahifada"
        items={[
          { href: "#narx", label: "1000 Stars qancha turadi" },
          { href: "#tayyor", label: "Xariddan oldin nima kerak" },
          { href: "#click", label: "Click orqali" },
          { href: "#payme", label: "Payme orqali" },
          { href: "#tekshir", label: "To‘lovdan oldin tekshiring" },
          { href: "#boshqa", label: "Boshqa odamga olib berish" },
          { href: "#kelmadi", label: "Stars ko‘rinmasa" },
        ]}
      />

      <KeyFacts label="Qisqa ma‘lumot">
        <li>
          Click yoki Payme: <b>{fmt(GATEWAY, "uz")} so‘m</b> (240 so‘m/dona).
        </li>
        <li>
          Uzcard/Humo o‘tkazmasi: <b>{fmt(CARD, "uz")} so‘m</b> (220 so‘m/dona).
        </li>
        <li>Faqat username kerak — parol yoki kirish kodi so‘ralmaydi.</li>
        <li>Boshqa odamga ham olib berish mumkin.</li>
      </KeyFacts>

      <h2 id="narx">1000 Stars qancha turadi?</h2>
      <p>
        Narx <b>to‘lov usuliga</b> bog‘liq. Click va Payme orqali to‘lov onlayn shlyuzda avtomatik
        tasdiqlanadi va bir dona narxi yuqoriroq; kartadan oddiy o‘tkazmada esa arzonroq:
      </p>
      <PriceTable locale="uz" />
      <Notice label="Yakuniy summani botda ko‘ring">
        Jadval 2026-yil 26-sentabrdagi narx bo‘yicha. Chegirma kunlari summa pastroq bo‘lishi mumkin,
        tarif o‘zgarsa esa jadval ham yangilanadi. To‘lovni tasdiqlashdan oldin botda chiqqan aniq
        summaga qarang.
      </Notice>
      <p>
        «1000 Stars» — yulduzlar soni, «1000 so‘m» — pul miqdori; buyurtmada ularni adashtirmang.
        Barcha paketlar narxi:{" "}
        <Link href="/blog/telegram-stars-narxi">Telegram Stars narxi — to‘liq jadval</Link>.
      </p>

      <h2 id="tayyor">Xariddan oldin nima kerak?</h2>
      <p>
        Ikki narsa: qabul qiluvchining aniq <b>username</b>’i va to‘lov qiladigan karta yoki ilova.
        Username — @ bilan yoziladigan foydalanuvchi nomi, profil ismi emas. Masalan, profilda «Ali»
        yozilgan bo‘lishi mumkin, username esa @ali_example.
      </p>
      <p>
        Username’ni qo‘lda yozmasdan, profildan nusxalang: bitta harf yoki pastki chiziq xatosi boshqa
        akkauntni tanlab qo‘yadi. Visa yoki Mastercard ochish shart emas.
      </p>

      <h2 id="click">Click orqali 1000 Stars olish</h2>
      <Steps>
        <Step title="Botni oching">@StarsPaymee_bot’da Stars bo‘limini tanlang.</Step>
        <Step title="1000 donani belgilang">Miqdor va narxni tekshiring.</Step>
        <Step title="Username’ni kiriting">O‘zingizniki yoki kimga olayotgan bo‘lsangiz, o‘shaniki.</Step>
        <Step title="Click’ni tanlang">Ochilgan oynada summani ko‘rib, to‘lovni tasdiqlang.</Step>
        <Step title="Natijani tekshiring">Botdagi holatga va qabul qiluvchi balansiga qarang.</Step>
      </Steps>
      <p>
        Click orqali to‘lov avtomatik tasdiqlanadi, chek yuborish shart emas. Batafsil:{" "}
        <Link href="/blog/click-payme-orqali-telegram-stars-sotib-olish">
          Click orqali Telegram Stars sotib olish
        </Link>
        .
      </p>

      <h2 id="payme">Payme orqali 1000 Stars olish</h2>
      <p>
        Qadamlar xuddi shunday: 1000 donani tanlab, username’ni kiritasiz va to‘lov usuli sifatida
        <b> Payme</b>’ni belgilaysiz. Summa tayyor holda ko‘rsatiladi, to‘lov avtomatik aniqlanadi —
        chekni adminga yuborib tasdiqlatish kerak emas. Batafsil:{" "}
        <Link href="/blog/payme-orqali-stars-va-premium-sotib-olish">
          Payme orqali Stars va Premium sotib olish
        </Link>
        .
      </p>

      <InlineCta
        text="Bot 1000 Stars tanlangan holda ochiladi — username’ni yozib, to‘lovni tasdiqlaysiz."
        product={{ kind: "stars", amount: N }}
      />

      <h2 id="tekshir">To‘lovdan oldin nimani tekshirish kerak?</h2>
      <CheckTable locale="uz" />
      <p>
        Bir ilovada to‘lovni boshlab, keyin ikkinchisiga o‘tmoqchi bo‘lsangiz, avval birinchisining
        natijasini tekshiring. Pul yechilgan bo‘lsa, holatni aniqlamasdan qayta to‘lamang.
      </p>

      <h2 id="boshqa">1000 Stars boshqa odamga olib beriladimi?</h2>
      <p>
        Ha. Qabul qiluvchi sifatida boshqa odamning username’ini ko‘rsatasiz: to‘lovni siz qilasiz,
        yulduzlar unga tushadi. Uning profilidan username’ni nusxalang; tushganini u o‘z hisobidan
        tekshiradi. Sizning balansingiz o‘zgarmaydi — bu tabiiy.
      </p>

      <h2 id="kelmadi">To‘lov o‘tdi, lekin Stars ko‘rinmayapti</h2>
      <InfoGrid>
        <InfoCard title="Avval tekshiring" emoji="🔎">
          Click yoki Payme’da to‘lov muvaffaqiyatli o‘tganini, botdagi buyurtma holatini va unda
          qaysi username yozilganini ko‘ring. Bir nechta akkaunt ishlatsangiz, aynan o‘shasi ochiqligini
          tekshiring.
        </InfoCard>
        <InfoCard title="Hal bo‘lmasa" emoji="💬">
          Qo‘llab-quvvatlashga buyurtma raqami, to‘lov usuli va vaqti hamda qabul qiluvchi username’ini
          yuboring. Holat aniqlanmaguncha qayta to‘lamang.
        </InfoCard>
      </InfoGrid>
      <Notice label="Xavfsizlik">
        Telegram kirish kodi va ikki bosqichli himoya parolini hech kimga yubormang. To‘lov ilovasi
        so‘ragan tasdiq kodini faqat o‘sha ilovada kiriting, yordam xodimiga yozmang.
      </Notice>

      <Sources
        label="Tegishli sahifalar"
        items={[
          { href: "/uz/blog/telegram-stars-narxi", label: "Telegram Stars narxi", note: "barcha paketlar" },
          {
            href: "/uz/blog/click-payme-orqali-telegram-stars-sotib-olish",
            label: "Click orqali Stars sotib olish",
            note: "to‘liq qo‘llanma",
          },
          {
            href: "/uz/blog/payme-orqali-stars-va-premium-sotib-olish",
            label: "Payme orqali Stars va Premium",
            note: "to‘liq qo‘llanma",
          },
          { href: "/uz/stars", label: "Telegram Stars sahifasi", note: "paketlar va to‘lov usullari" },
        ]}
      />
    </>
  );
}

const uzFaq = [
  {
    question: "1000 Telegram Stars necha so‘m?",
    answer: `Click yoki Payme orqali ${fmt(GATEWAY, "uz")} so‘m, Uzcard/Humo o‘tkazmasi bilan ${fmt(CARD, "uz")} so‘m. Yakuniy summa botda ko‘rsatiladi.`,
  },
  {
    question: "Nega Click va Payme orqali qimmatroq?",
    answer:
      "Click va Payme — onlayn to‘lov shlyuzi, to‘lov avtomatik tasdiqlanadi va bir dona narxi 240 so‘m. Kartadan oddiy o‘tkazmada dona narxi 220 so‘m.",
  },
  {
    question: "1000 Stars’ni Click orqali olsa bo‘ladimi?",
    answer: "Ha. Botda 1000 donani tanlab, username’ni kiriting va to‘lov usuli sifatida Click’ni belgilang.",
  },
  {
    question: "Payme bilan to‘laganda chek yuborish kerakmi?",
    answer:
      "Yo‘q. Payme to‘lovi avtomatik aniqlanadi. Muammo bo‘lsa, ilovadagi to‘lov yozuvi tekshirish uchun foydali bo‘ladi.",
  },
  {
    question: "1000 Stars olish uchun Telegram Premium kerakmi?",
    answer: "Yo‘q. Premium shart emas — faqat qabul qiluvchining username’i kerak.",
  },
  {
    question: "Stars do‘stimga tushishi mumkinmi?",
    answer: "Ha. Qabul qiluvchi maydoniga do‘stingizning username’ini yozing va to‘lovdan oldin tekshiring.",
  },
  {
    question: "Username xato yozilgan bo‘lsa nima qilaman?",
    answer:
      "Buyurtma raqami bilan darhol qo‘llab-quvvatlashga yozing. Tuzatish imkoniyati buyurtma holatiga bog‘liq — uni oldindan kafolatlangan deb hisoblamang.",
  },
];

/* ---------------- RU ---------------- */
function RuAnswer() {
  return (
    <p>
      1000 Telegram Stars через <b>Click или Payme</b> стоят <b>{fmt(GATEWAY, "ru")} сум</b>, переводом{" "}
      <b>Uzcard/Humo</b> — <b>{fmt(CARD, "ru")} сум</b>. В @StarsPaymee_bot выбираете 1000 штук,
      указываете username получателя и платите. Пароль от аккаунта не нужен.
    </p>
  );
}

function RuBody() {
  return (
    <>
      <Toc
        label="На странице"
        items={[
          { href: "#narx", label: "Сколько стоят 1000 Stars" },
          { href: "#tayyor", label: "Что нужно до покупки" },
          { href: "#click", label: "Через Click" },
          { href: "#payme", label: "Через Payme" },
          { href: "#tekshir", label: "Что проверить до оплаты" },
          { href: "#boshqa", label: "Купить другому человеку" },
          { href: "#kelmadi", label: "Если звёзд не видно" },
        ]}
      />

      <KeyFacts label="Коротко">
        <li>
          Click или Payme: <b>{fmt(GATEWAY, "ru")} сум</b> (240 сум за штуку).
        </li>
        <li>
          Перевод Uzcard/Humo: <b>{fmt(CARD, "ru")} сум</b> (220 сум за штуку).
        </li>
        <li>Нужен только username — пароль и код входа не спрашивают.</li>
        <li>Можно купить и для другого человека.</li>
      </KeyFacts>

      <h2 id="narx">Сколько стоят 1000 Stars?</h2>
      <p>
        Цена зависит от <b>способа оплаты</b>. Через Click и Payme оплата подтверждается автоматически в
        онлайн-шлюзе, и цена за штуку выше; обычный перевод с карты дешевле:
      </p>
      <PriceTable locale="ru" />
      <Notice label="Итоговую сумму смотрите в боте">
        Таблица — по цене на 26 сентября 2026 года. В дни скидок сумма может быть ниже, а при смене
        тарифа таблица обновится. Перед подтверждением оплаты сверьте точную сумму в боте.
      </Notice>
      <p>
        «1000 Stars» — количество звёзд, «1000 сум» — сумма денег; не путайте их в заказе. Цены всех
        пакетов: <Link href="/blog/telegram-stars-narxi">цена Telegram Stars — полная таблица</Link>.
      </p>

      <h2 id="tayyor">Что нужно до покупки?</h2>
      <p>
        Две вещи: точный <b>username</b> получателя и карта или приложение для оплаты. Username — имя
        пользователя через @, а не имя профиля. Например, в профиле может стоять «Али», а username —
        @ali_example.
      </p>
      <p>
        Не вводите username вручную — скопируйте его из профиля: одна ошибка в букве или подчёркивании
        выберет другой аккаунт. Открывать Visa или Mastercard не нужно.
      </p>

      <h2 id="click">Как купить 1000 Stars через Click</h2>
      <Steps>
        <Step title="Откройте бота">В @StarsPaymee_bot выберите раздел Stars.</Step>
        <Step title="Выберите 1000 штук">Проверьте количество и цену.</Step>
        <Step title="Введите username">Свой или того, кому покупаете.</Step>
        <Step title="Выберите Click">В открывшемся окне сверьте сумму и подтвердите оплату.</Step>
        <Step title="Проверьте результат">Посмотрите статус в боте и баланс получателя.</Step>
      </Steps>
      <p>
        Оплата через Click подтверждается автоматически, чек отправлять не нужно. Подробнее:{" "}
        <Link href="/blog/click-payme-orqali-telegram-stars-sotib-olish">покупка Telegram Stars через Click</Link>.
      </p>

      <h2 id="payme">Как купить 1000 Stars через Payme</h2>
      <p>
        Шаги те же: выбираете 1000 штук, вводите username и в качестве способа оплаты отмечаете{" "}
        <b>Payme</b>. Сумма показывается готовой, оплата определяется автоматически — отправлять чек
        админу не нужно. Подробнее:{" "}
        <Link href="/blog/payme-orqali-stars-va-premium-sotib-olish">покупка Stars и Premium через Payme</Link>.
      </p>

      <InlineCta
        text="Бот откроется уже с выбранными 1000 Stars — впишите username и подтвердите оплату."
        product={{ kind: "stars", amount: N }}
      />

      <h2 id="tekshir">Что проверить до оплаты</h2>
      <CheckTable locale="ru" />
      <p>
        Если начали оплату в одном приложении и хотите перейти в другое, сначала проверьте результат
        первой. Если деньги списались, не платите повторно, пока не выяснили статус.
      </p>

      <h2 id="boshqa">Можно ли купить 1000 Stars другому человеку?</h2>
      <p>
        Да. В качестве получателя указываете username другого человека: платите вы, звёзды приходят ему.
        Скопируйте username из его профиля; зачисление он проверит у себя. Ваш баланс при этом не
        меняется — это нормально.
      </p>

      <h2 id="kelmadi">Оплата прошла, а звёзд не видно</h2>
      <InfoGrid>
        <InfoCard title="Сначала проверьте" emoji="🔎">
          Что оплата в Click или Payme прошла успешно, статус заказа в боте и какой username в нём указан.
          Если у вас несколько аккаунтов, убедитесь, что открыт именно этот.
        </InfoCard>
        <InfoCard title="Если не решилось" emoji="💬">
          Напишите в поддержку номер заказа, способ и время оплаты и username получателя. Не платите
          повторно, пока статус не выяснен.
        </InfoCard>
      </InfoGrid>
      <Notice label="Безопасность">
        Никому не отправляйте код входа в Telegram и пароль двухэтапной защиты. Код подтверждения платежа
        вводите только в самом приложении оплаты, не пишите его сотруднику поддержки.
      </Notice>

      <Sources
        label="Связанные страницы"
        items={[
          { href: "/ru/blog/telegram-stars-narxi", label: "Цена Telegram Stars", note: "все пакеты" },
          {
            href: "/ru/blog/click-payme-orqali-telegram-stars-sotib-olish",
            label: "Покупка Stars через Click",
            note: "полное руководство",
          },
          {
            href: "/ru/blog/payme-orqali-stars-va-premium-sotib-olish",
            label: "Stars и Premium через Payme",
            note: "полное руководство",
          },
          { href: "/ru/stars", label: "Страница Telegram Stars", note: "пакеты и способы оплаты" },
        ]}
      />
    </>
  );
}

const ruFaq = [
  {
    question: "Сколько стоят 1000 Telegram Stars?",
    answer: `Через Click или Payme — ${fmt(GATEWAY, "ru")} сум, переводом Uzcard/Humo — ${fmt(CARD, "ru")} сум. Итоговая сумма показывается в боте.`,
  },
  {
    question: "Почему через Click и Payme дороже?",
    answer:
      "Click и Payme — онлайн-шлюзы, оплата подтверждается автоматически, и цена за штуку — 240 сум. При обычном переводе с карты — 220 сум за штуку.",
  },
  {
    question: "Можно купить 1000 Stars через Click?",
    answer: "Да. Выберите в боте 1000 штук, введите username и отметьте Click как способ оплаты.",
  },
  {
    question: "Нужно ли отправлять чек при оплате через Payme?",
    answer:
      "Нет. Оплата через Payme определяется автоматически. Если возникнет проблема, запись о платеже в приложении пригодится для проверки.",
  },
  {
    question: "Нужен ли Telegram Premium, чтобы купить 1000 Stars?",
    answer: "Нет. Premium не обязателен — нужен только username получателя.",
  },
  {
    question: "Можно, чтобы звёзды пришли другу?",
    answer: "Да. Впишите username друга в поле получателя и проверьте его до оплаты.",
  },
  {
    question: "Что делать, если username написан с ошибкой?",
    answer:
      "Сразу напишите в поддержку с номером заказа. Возможность исправить зависит от статуса заказа — не считайте её заранее гарантированной.",
  },
];

/* ---------------- EN ---------------- */
function EnAnswer() {
  return (
    <p>
      1000 Telegram Stars cost <b>{fmt(GATEWAY, "en")} som</b> through <b>Click or Payme</b> and{" "}
      <b>{fmt(CARD, "en")} som</b> by <b>Uzcard/Humo transfer</b>. In @StarsPaymee_bot you pick 1000,
      enter the recipient’s username and pay. No account password is needed.
    </p>
  );
}

function EnBody() {
  return (
    <>
      <Toc
        label="On this page"
        items={[
          { href: "#narx", label: "What 1000 Stars cost" },
          { href: "#tayyor", label: "What you need first" },
          { href: "#click", label: "Through Click" },
          { href: "#payme", label: "Through Payme" },
          { href: "#tekshir", label: "What to check before paying" },
          { href: "#boshqa", label: "Buying for someone else" },
          { href: "#kelmadi", label: "If the stars do not show" },
        ]}
      />

      <KeyFacts label="In short">
        <li>
          Click or Payme: <b>{fmt(GATEWAY, "en")} som</b> (240 som per star).
        </li>
        <li>
          Uzcard/Humo transfer: <b>{fmt(CARD, "en")} som</b> (220 som per star).
        </li>
        <li>Only a username is needed — no password or login code.</li>
        <li>You can buy them for someone else too.</li>
      </KeyFacts>

      <h2 id="narx">What do 1000 Stars cost?</h2>
      <p>
        The price depends on the <b>payment method</b>. Click and Payme confirm the payment automatically
        through an online gateway and cost more per star; a plain card transfer is cheaper:
      </p>
      <PriceTable locale="en" />
      <Notice label="Check the final amount in the bot">
        The table uses the price on 26 September 2026. On discount days the amount can be lower, and the
        table updates when the tariff changes. Before confirming, check the exact figure the bot shows.
      </Notice>
      <p>
        “1000 Stars” is a number of stars, “1000 som” is an amount of money — do not mix them up in the
        order. Every pack’s price:{" "}
        <Link href="/blog/telegram-stars-narxi">Telegram Stars prices — the full table</Link>.
      </p>

      <h2 id="tayyor">What do you need before buying?</h2>
      <p>
        Two things: the recipient’s exact <b>username</b> and a card or app to pay with. A username is the
        handle written with @, not the profile name. A profile might say “Ali” while the username is
        @ali_example.
      </p>
      <p>
        Copy the username from the profile instead of typing it: one wrong letter or underscore picks
        another account. You do not need to open a Visa or Mastercard.
      </p>

      <h2 id="click">Buying 1000 Stars through Click</h2>
      <Steps>
        <Step title="Open the bot">In @StarsPaymee_bot pick the Stars section.</Step>
        <Step title="Choose 1000">Check the quantity and the price.</Step>
        <Step title="Enter the username">Yours, or the person you are buying for.</Step>
        <Step title="Pick Click">In the window that opens, check the amount and confirm.</Step>
        <Step title="Check the result">Look at the status in the bot and the recipient’s balance.</Step>
      </Steps>
      <p>
        A Click payment is confirmed automatically, so there is no receipt to send. More detail:{" "}
        <Link href="/blog/click-payme-orqali-telegram-stars-sotib-olish">buying Telegram Stars through Click</Link>.
      </p>

      <h2 id="payme">Buying 1000 Stars through Payme</h2>
      <p>
        The steps are the same: choose 1000, enter the username and mark <b>Payme</b> as the payment
        method. The amount is shown ready and the payment is detected automatically — there is no receipt
        to send to an admin. More detail:{" "}
        <Link href="/blog/payme-orqali-stars-va-premium-sotib-olish">buying Stars and Premium through Payme</Link>.
      </p>

      <InlineCta
        text="The bot opens with 1000 Stars already selected — type the username and confirm."
        product={{ kind: "stars", amount: N }}
      />

      <h2 id="tekshir">What to check before paying</h2>
      <CheckTable locale="en" />
      <p>
        If you start paying in one app and want to switch to another, check the first result first. If
        money was taken, do not pay again until the status is clear.
      </p>

      <h2 id="boshqa">Can you buy 1000 Stars for someone else?</h2>
      <p>
        Yes. You name the other person’s username as the recipient: you pay, the stars go to them. Copy
        the username from their profile; they check the arrival on their own account. Your own balance
        does not change, which is expected.
      </p>

      <h2 id="kelmadi">The payment went through but the stars do not show</h2>
      <InfoGrid>
        <InfoCard title="Check first" emoji="🔎">
          That the Click or Payme payment succeeded, the order status in the bot and which username it
          carries. If you use several accounts, make sure that exact one is open.
        </InfoCard>
        <InfoCard title="If it is not solved" emoji="💬">
          Send support the order number, the payment method and time, and the recipient’s username. Do
          not pay again until the status is clear.
        </InfoCard>
      </InfoGrid>
      <Notice label="Security">
        Never send anyone your Telegram login code or two-step verification password. Enter a payment
        confirmation code only inside the payment app, never in a message to support.
      </Notice>

      <Sources
        label="Related pages"
        items={[
          { href: "/en/blog/telegram-stars-narxi", label: "Telegram Stars prices", note: "every pack" },
          {
            href: "/en/blog/click-payme-orqali-telegram-stars-sotib-olish",
            label: "Buying Stars through Click",
            note: "the full guide",
          },
          {
            href: "/en/blog/payme-orqali-stars-va-premium-sotib-olish",
            label: "Stars and Premium through Payme",
            note: "the full guide",
          },
          { href: "/en/stars", label: "The Telegram Stars page", note: "packs and payment methods" },
        ]}
      />
    </>
  );
}

const enFaq = [
  {
    question: "How much are 1000 Telegram Stars?",
    answer: `${fmt(GATEWAY, "en")} som through Click or Payme and ${fmt(CARD, "en")} som by Uzcard/Humo transfer. The final amount is shown in the bot.`,
  },
  {
    question: "Why is Click or Payme more expensive?",
    answer:
      "Click and Payme are online gateways that confirm the payment automatically, and a star costs 240 som there. A plain card transfer costs 220 som per star.",
  },
  {
    question: "Can I buy 1000 Stars through Click?",
    answer: "Yes. Choose 1000 in the bot, enter the username and mark Click as the payment method.",
  },
  {
    question: "Do I need to send a receipt when paying with Payme?",
    answer:
      "No. A Payme payment is detected automatically. If something goes wrong, the payment record in the app helps with the check.",
  },
  {
    question: "Do I need Telegram Premium to buy 1000 Stars?",
    answer: "No. Premium is not required — only the recipient’s username.",
  },
  {
    question: "Can the stars go to a friend?",
    answer: "Yes. Put your friend’s username in the recipient field and check it before paying.",
  },
  {
    question: "What if the username was typed wrong?",
    answer:
      "Write to support straight away with the order number. Whether it can be fixed depends on the order status — do not treat that as guaranteed.",
  },
];

export const post: AeoPost = {
  slug: SLUG,
  category: "Stars",
  type: "howto",
  datePublished: "2026-09-26",
  dateModified: "2026-09-26",
  keywords: [
    "1000 stars olish",
    "1000 telegram stars sotib olish",
    "1000 stars narxi",
    "1000 stars qancha",
    "1000 stars necha pul",
    "click orqali 1000 stars",
    "payme orqali 1000 stars",
    "купить 1000 звёзд telegram",
    "1000 звёзд телеграм цена",
    "buy 1000 telegram stars",
  ],
  howToSteps: [
    { name: "Botni oching", text: "@StarsPaymee_bot da Stars bo‘limini tanlang." },
    { name: "1000 donani tanlang", text: "Miqdor va narxni tekshiring." },
    { name: "Username kiriting", text: "Qabul qiluvchining username’ini profildan nusxalab yozing." },
    { name: "To‘lov usulini tanlang", text: "Click, Payme yoki Uzcard/Humo o‘tkazmasi." },
    { name: "Natijani tekshiring", text: "Botdagi holat va qabul qiluvchi balansiga qarang." },
  ],
  locales: {
    uz: {
      title: "1000 Telegram Stars olish: narxi, Click va Payme orqali to‘lov",
      excerpt:
        "1000 Telegram Stars qancha turadi va qanday olinadi? To‘lov usuli bo‘yicha narx, Click yoki Payme bilan so‘mda to‘lash, qabul qiluvchini tanlash va Stars tushganini tekshirish.",
      metaTitle: "1000 Stars olish: Click va Payme orqali",
      metaDescription:
        "1000 Telegram Stars narxi: Click yoki Payme orqali 240 000, karta o‘tkazmasida 220 000 so‘m. So‘mda to‘lash, username kiritish va buyurtmani tekshirish.",
      answerTitle: "Qisqa javob",
      Answer: UzAnswer,
      Body: UzBody,
      ctaHeading: "1000 Stars uchun buyurtma bering",
      ctaBody:
        "1000 donani tanlang, qabul qiluvchini tekshiring va qulay usulda to‘lang — yakuniy summa to‘lovdan oldin ko‘rinadi.",
      faq: uzFaq,
    },
    ru: {
      title: "Купить 1000 Telegram Stars: цена, оплата через Click и Payme",
      excerpt:
        "Сколько стоят 1000 Telegram Stars и как их купить? Цена по способу оплаты, оплата в сумах через Click или Payme, выбор получателя и проверка зачисления.",
      metaTitle: "Купить 1000 звёзд Telegram через Click и Payme",
      metaDescription:
        "Цена 1000 Telegram Stars: через Click или Payme — 240 000, переводом с карты — 220 000 сум. Оплата в сумах, ввод username и проверка заказа.",
      answerTitle: "Краткий ответ",
      Answer: RuAnswer,
      Body: RuBody,
      ctaHeading: "Оформите заказ на 1000 Stars",
      ctaBody:
        "Выберите 1000 штук, проверьте получателя и оплатите удобным способом — итоговая сумма видна до оплаты.",
      faq: ruFaq,
    },
    en: {
      title: "Buying 1000 Telegram Stars: price and paying with Click or Payme",
      excerpt:
        "What do 1000 Telegram Stars cost and how do you buy them? The price by payment method, paying in som with Click or Payme, choosing the recipient and checking the delivery.",
      metaTitle: "Buy 1000 Telegram Stars with Click or Payme",
      metaDescription:
        "1000 Telegram Stars cost 240,000 som through Click or Payme and 220,000 by card transfer. Paying in som, entering the username and checking the order.",
      answerTitle: "Short answer",
      Answer: EnAnswer,
      Body: EnBody,
      ctaHeading: "Order your 1000 Stars",
      ctaBody:
        "Choose 1000, check the recipient and pay the way that suits you — the final amount shows before you pay.",
      faq: enFaq,
    },
  },
};
