import { Link } from "@/i18n/navigation";
import { Toc, Steps, Step, InlineCta, KeyFacts, Sources } from "@/components/blog/aeo-blocks";
import type { AeoPost } from "@/lib/blog-aeo/types";

const SLUG = "telegram-botga-stars-tolovini-ulash";

function UzAnswer() {
  return (
    <p>
      Telegram botiga Stars to‘lovini ulash uchun Bot API’ning <strong>sendInvoice</strong> metodidan{" "}
      <code>currency: &quot;XTR&quot;</code> (Stars valyutasi kodi) bilan foydalaniladi. Foydalanuvchi hisob-fakturani
      to‘laganda bot <code>successful_payment</code> yangilanishini oladi; agar xizmat ko‘rsatilmasa,{" "}
      <strong>refundStarPayment</strong> metodi orqali to‘lovni qaytarish mumkin. Bu — tashqi to‘lov provayderisiz,
      to‘liq Telegram ichida ishlaydigan eng sodda monetizatsiya usuli.
    </p>
  );
}

function UzBody() {
  return (
    <>
      <Toc
        label="Mundarija"
        items={[
          { href: "#nima", label: "XTR va sendInvoice nima" },
          { href: "#bosqichlar", label: "Bosqichma-bosqich ulash" },
          { href: "#refund", label: "Refund logikasi" },
          { href: "#amaliyot", label: "Amaliy maslahatlar" },
        ]}
      />

      <h2 id="nima">XTR valyutasi va sendInvoice nima?</h2>
      <p>
        Telegram Bot API’da Stars maxsus valyuta kodi — <code>XTR</code> orqali ishlaydi. Oddiy to‘lov
        provayderlaridan farqli, Stars uchun <code>provider_token</code> bo‘sh qoldiriladi — bu tashqi bank yoki
        to‘lov tizimiga ulanish shart emasligini anglatadi. Butun jarayon Telegram serverlarida amalga oshadi.
      </p>

      <h2 id="bosqichlar">Bosqichma-bosqich: botga Stars to‘lovini ulash</h2>
      <Steps>
        <Step title="Bot yarating">@BotFather orqali yangi bot yarating yoki mavjudidan foydalaning.</Step>
        <Step title="sendInvoice chaqiring">
          <code>currency: &quot;XTR&quot;</code>, mahsulot narxi (Stars miqdorida) va tavsif bilan hisob-faktura
          yuboring.
        </Step>
        <Step title="pre_checkout_query’ni qayta ishlang">
          Telegram to‘lovdan oldin tasdiqlash so‘rovi yuboradi — botingiz uni tez tasdiqlashi kerak.
        </Step>
        <Step title="successful_payment’ni kuzating">
          To‘lov muvaffaqiyatli bo‘lgach, botingiz xizmatni faollashtiradi yoki mahsulotni yetkazadi.
        </Step>
      </Steps>

      <InlineCta text="Loyihangiz uchun Stars sinovi kerakmi? Botda so‘mda 10 soniyada." />

      <h2 id="refund">Refund (pulni qaytarish) logikasi qanday ishlaydi?</h2>
      <KeyFacts label="Refund asoslari">
        <li>
          <b>refundStarPayment:</b> texnik nosozlik yoki xizmat ko‘rsatilmasa, to‘lovni to‘liq qaytarish uchun
          ishlatiladi.
        </li>
        <li>
          <b>telegram_payment_charge_id:</b> qaytarish uchun asl to‘lov identifikatori talab qilinadi.
        </li>
        <li>
          <b>Foydalanuvchi ishonchi:</b> aniq refund siyosati botingizga nisbatan ishonchni oshiradi.
        </li>
      </KeyFacts>
      <p>
        Stars’ning umumiy ishlash mexanizmini{" "}
        <Link href="/blog/telegram-stars-qanday-ishlaydi">«Stars qanday ishlaydi»</Link> maqolasida ko‘rish mumkin.
      </p>

      <h2 id="amaliyot">Amaliy maslahatlar</h2>
      <ul>
        <li>
          <strong>Narxni aniq ko‘rsating:</strong> foydalanuvchi to‘lovdan oldin nechta Stars sarflanishini aniq
          bilishi kerak.
        </li>
        <li>
          <strong>Tez javob bering:</strong> <code>pre_checkout_query</code>ga 10 soniya ichida javob berish talab
          qilinadi, aks holda to‘lov bekor bo‘ladi.
        </li>
        <li>
          <strong>Xatolarni log qiling:</strong> muvaffaqiyatsiz to‘lovlarni kuzatib borish qo‘llab-quvvatlash
          uchun muhim.
        </li>
      </ul>
      <p>
        Mini App’larda Stars to‘lovi qanday ko‘rinishini{" "}
        <Link href="/blog/telegram-oyin-mini-app-stars-tolov">«O‘yin va Mini App’larda Stars to‘lovi»</Link>{" "}
        maqolasida, affiliate dasturi orqali daromadni esa{" "}
        <Link href="/blog/telegram-affiliate-dasturi">«Telegram affiliate dasturi»</Link>da ko‘ring.
      </p>

      <Sources
        label="Manbalar"
        items={[
          { href: "https://core.telegram.org/bots/payments-stars", label: "core.telegram.org/bots/payments-stars", note: "Stars to‘lov API hujjati" },
          { href: "https://core.telegram.org/bots/api#sendinvoice", label: "core.telegram.org/bots/api#sendinvoice", note: "sendInvoice metodi" },
        ]}
      />
    </>
  );
}

function RuAnswer() {
  return (
    <p>
      Чтобы подключить оплату Stars к боту Telegram, используется метод Bot API <strong>sendInvoice</strong> с{" "}
      <code>currency: &quot;XTR&quot;</code> (код валюты Stars). Когда пользователь оплачивает счёт, бот получает
      обновление <code>successful_payment</code>; если услуга не оказана, оплату можно вернуть через метод{" "}
      <strong>refundStarPayment</strong>. Это самый простой способ монетизации, работающий полностью внутри
      Telegram без внешнего платёжного провайдера.
    </p>
  );
}

function RuBody() {
  return (
    <>
      <Toc
        label="Содержание"
        items={[
          { href: "#nima", label: "Что такое XTR и sendInvoice" },
          { href: "#bosqichlar", label: "Пошаговое подключение" },
          { href: "#refund", label: "Логика возврата (refund)" },
          { href: "#amaliyot", label: "Практические советы" },
        ]}
      />

      <h2 id="nima">Что такое валюта XTR и sendInvoice?</h2>
      <p>
        В Telegram Bot API Stars работают через специальный код валюты — <code>XTR</code>. В отличие от обычных
        платёжных провайдеров, для Stars поле <code>provider_token</code> оставляется пустым — это означает, что
        подключение к внешнему банку или платёжной системе не требуется. Весь процесс проходит на серверах Telegram.
      </p>

      <h2 id="bosqichlar">Пошагово: подключение оплаты Stars к боту</h2>
      <Steps>
        <Step title="Создайте бота">Создайте нового бота через @BotFather или используйте существующего.</Step>
        <Step title="Вызовите sendInvoice">
          Отправьте счёт с <code>currency: &quot;XTR&quot;</code>, ценой товара (в Stars) и описанием.
        </Step>
        <Step title="Обработайте pre_checkout_query">
          Telegram отправляет запрос подтверждения перед оплатой — ваш бот должен быстро его подтвердить.
        </Step>
        <Step title="Отслеживайте successful_payment">
          После успешной оплаты бот активирует услугу или доставляет товар.
        </Step>
      </Steps>

      <InlineCta text="Нужен тест Stars для вашего проекта? В боте — в сумах за 10 секунд." />

      <h2 id="refund">Как работает логика возврата (refund)?</h2>
      <KeyFacts label="Основы refund">
        <li>
          <b>refundStarPayment:</b> используется для полного возврата оплаты при технической ошибке или
          неоказанной услуге.
        </li>
        <li>
          <b>telegram_payment_charge_id:</b> для возврата требуется идентификатор исходного платежа.
        </li>
        <li>
          <b>Доверие пользователей:</b> чёткая политика возврата повышает доверие к вашему боту.
        </li>
      </KeyFacts>
      <p>
        Общий механизм работы Stars — в статье{" "}
        <Link href="/blog/telegram-stars-qanday-ishlaydi">«Как работают Stars»</Link>.
      </p>

      <h2 id="amaliyot">Практические советы</h2>
      <ul>
        <li>
          <strong>Указывайте цену чётко:</strong> пользователь должен точно знать, сколько Stars будет списано
          перед оплатой.
        </li>
        <li>
          <strong>Отвечайте быстро:</strong> на <code>pre_checkout_query</code> нужно ответить в течение 10 секунд,
          иначе оплата отменяется.
        </li>
        <li>
          <strong>Логируйте ошибки:</strong> отслеживание неудачных платежей важно для поддержки.
        </li>
      </ul>
      <p>
        Как выглядит оплата Stars в Mini App — в статье{" "}
        <Link href="/blog/telegram-oyin-mini-app-stars-tolov">«Оплата Stars в играх и Mini App»</Link>, а доход
        через партнёрскую программу — в{" "}
        <Link href="/blog/telegram-affiliate-dasturi">«Партнёрская программа Telegram»</Link>.
      </p>

      <Sources
        label="Источники"
        items={[
          { href: "https://core.telegram.org/bots/payments-stars", label: "core.telegram.org/bots/payments-stars", note: "документация Stars API оплаты" },
          { href: "https://core.telegram.org/bots/api#sendinvoice", label: "core.telegram.org/bots/api#sendinvoice", note: "метод sendInvoice" },
        ]}
      />
    </>
  );
}

export const post: AeoPost = {
  slug: SLUG,
  category: "Biznes",
  type: "howto",
  datePublished: "2026-07-05",
  dateModified: "2026-07-05",
  keywords: [
    "telegram bot stars tolov",
    "sendinvoice telegram",
    "telegram bot xtr valyuta",
    "telegram bot payments api",
    "telegram stars dasturchi",
  ],
  howToSteps: [
    { name: "Bot yarating", text: "@BotFather orqali yangi bot yarating yoki mavjudidan foydalaning." },
    { name: "sendInvoice chaqiring", text: "XTR valyutasi bilan hisob-faktura yuboring." },
    { name: "pre_checkout_query’ni qayta ishlang", text: "Tasdiqlash so‘rovini tez tasdiqlang." },
    { name: "successful_payment’ni kuzating", text: "To‘lov muvaffaqiyatli bo‘lgach xizmatni faollashtiring." },
  ],
  locales: {
    uz: {
      title: "Telegram botga Stars to‘lovini ulash: dasturchilar uchun qadam-baqadam (2026)",
      excerpt:
        "sendInvoice, XTR valyutasi va refund logikasi sodda tilda — Telegram botiga Stars to‘lovini qanday ulash mumkin.",
      metaTitle: "Telegram bot Stars to‘lovi — dasturchi qo‘llanmasi 2026",
      metaDescription:
        "Telegram botga Stars to‘lovini ulash: sendInvoice metodi, XTR valyutasi, pre_checkout_query va refundStarPayment logikasi dasturchilar uchun.",
      answerTitle: "Qisqa javob",
      Answer: UzAnswer,
      Body: UzBody,
      ctaHeading: "Loyihangizni sinab ko‘rasizmi?",
      ctaBody: "Test uchun Stars’ni so‘mda, botda 10 soniyada oling.",
      faq: [
        {
          question: "Bot Stars to‘lovi uchun qanday valyuta kodi ishlatiladi?",
          answer: "XTR — bu Telegram Bot API’dagi Stars uchun maxsus valyuta kodi.",
        },
        {
          question: "Stars to‘lovi uchun provider_token kerakmi?",
          answer: "Yo‘q, Stars uchun provider_token bo‘sh qoldiriladi — tashqi to‘lov provayderi shart emas.",
        },
        {
          question: "pre_checkout_query’ga qancha vaqt ichida javob berish kerak?",
          answer: "10 soniya ichida, aks holda to‘lov avtomatik bekor bo‘ladi.",
        },
        {
          question: "Xizmat ko‘rsatilmasa, to‘lovni qaytarish mumkinmi?",
          answer: "Ha, refundStarPayment metodi orqali telegram_payment_charge_id yordamida to‘liq qaytarish mumkin.",
        },
        {
          question: "Stars to‘lovini qo‘shish uchun maxsus litsenziya kerakmi?",
          answer: "Yo‘q, bu Telegram Bot API’ning ochiq, standart funksiyasi — istalgan dasturchi foydalanishi mumkin.",
        },
      ],
    },
    ru: {
      title: "Подключение оплаты Stars к боту Telegram: пошагово для разработчиков (2026)",
      excerpt:
        "sendInvoice, валюта XTR и логика refund простым языком — как подключить оплату Stars к боту Telegram.",
      metaTitle: "Оплата Stars в боте Telegram — гайд для разработчиков 2026",
      metaDescription:
        "Подключение оплаты Stars к боту Telegram: метод sendInvoice, валюта XTR, pre_checkout_query и логика refundStarPayment для разработчиков.",
      answerTitle: "Краткий ответ",
      Answer: RuAnswer,
      Body: RuBody,
      ctaHeading: "Хотите протестировать свой проект?",
      ctaBody: "Купите Stars для теста в сумах, в боте за 10 секунд.",
      faq: [
        {
          question: "Какой код валюты используется для оплаты Stars в боте?",
          answer: "XTR — специальный код валюты для Stars в Telegram Bot API.",
        },
        {
          question: "Нужен ли provider_token для оплаты Stars?",
          answer: "Нет, для Stars поле provider_token оставляется пустым — внешний платёжный провайдер не требуется.",
        },
        {
          question: "За какое время нужно ответить на pre_checkout_query?",
          answer: "В течение 10 секунд, иначе оплата автоматически отменяется.",
        },
        {
          question: "Можно ли вернуть оплату, если услуга не оказана?",
          answer: "Да, через метод refundStarPayment с использованием telegram_payment_charge_id можно вернуть оплату полностью.",
        },
        {
          question: "Нужна ли специальная лицензия для добавления оплаты Stars?",
          answer: "Нет, это открытая стандартная функция Telegram Bot API — доступна любому разработчику.",
        },
      ],
    },
  },
};
