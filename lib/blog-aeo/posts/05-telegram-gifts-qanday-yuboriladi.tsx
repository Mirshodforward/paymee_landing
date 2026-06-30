import { Link } from "@/i18n/navigation";
import { Steps, Step, InlineCta, InfoGrid, InfoCard, Sources, KeyFacts } from "@/components/blog/aeo-blocks";
import type { AeoPost } from "@/lib/blog-aeo/types";

const SLUG = "telegram-gifts-qanday-yuboriladi-qollanma";

function UzAnswer() {
  return (
    <p>
      Telegram sovg‘asi (Gift) yuborish uchun <strong>@StarsPaymee_bot</strong>’da «Gifts» bo‘limini oching, sovg‘ani
      tanlang, qabul qiluvchining <strong>@username</strong>’ini kiriting, izoh qoldiring yoki anonim yuborishni
      tanlang va so‘mda to‘lang. Sovg‘a Telegram tomonidan akkauntga avtomatik yetkaziladi — parol yoki login kerak emas.
    </p>
  );
}

function UzBody() {
  return (
    <>
      <h2 id="nima">Telegram Gifts nima?</h2>
      <p>
        Telegram Gifts — Stars (yulduzlar) yordamida sotib olinadigan raqamli sovg‘alar. Ular qabul qiluvchining
        profilida ko‘rsatiladi yoki Stars’ga qaytarilishi mumkin. Ba’zi sovg‘alar cheklangan (limited) yoki noyob
        (collectible) bo‘ladi. Sovg‘alar tug‘ilgan kun, bayram yoki minnatdorchilik uchun mos.
      </p>

      <InlineCta text="Do‘stingizga sovg‘a yuboring — botda bir necha qadamda." />

      <h2 id="bosqichlar">Bosqichma-bosqich: sovg‘a yuborish</h2>
      <Steps>
        <Step title="Botni oching">
          <a href="https://t.me/StarsPaymee_bot" target="_blank" rel="noopener noreferrer">@StarsPaymee_bot</a> yoki Mini
          App’da «Gifts» bo‘limiga o‘ting.
        </Step>
        <Step title="Sovg‘ani tanlang">Katalogdan TGS animatsiyali sovg‘ani va uning yulduz qiymatini ko‘rib tanlang.</Step>
        <Step title="Qabul qiluvchini kiriting">Do‘stingizning @username’ini aniq kiriting.</Step>
        <Step title="Izoh yoki anonimlik">Tabrik izohi qoldiring yoki anonim yuborishni belgilang.</Step>
        <Step title="So‘mda to‘lang">UzCard, HUMO, Click, Payme yoki Paynet orqali to‘lov qiling.</Step>
        <Step title="Sovg‘a yetkaziladi">To‘lovdan so‘ng sovg‘a Telegram orqali qabul qiluvchiga tushadi.</Step>
      </Steps>

      <h2 id="sovga-turlari">Sovg‘a turlari</h2>
      <InfoGrid>
        <InfoCard emoji="🎁" title="Oddiy sovg‘alar">
          Doimiy katalogdagi sovg‘alar; qabul qiluvchi ularni profilda ko‘rsatadi yoki Stars’ga aylantiradi.
        </InfoCard>
        <InfoCard emoji="⏳" title="Cheklangan (limited)">
          Faqat ma’lum vaqt yoki soni bilan chiqadigan sovg‘alar — qiymati yuqoriroq bo‘lishi mumkin.
        </InfoCard>
        <InfoCard emoji="💎" title="Noyob (collectible / NFT)">
          Upgrade qilingan, kolleksion sovg‘alar. Likvidlik va narx shaffofligiga e’tibor bering.
        </InfoCard>
        <InfoCard emoji="🕵️" title="Anonim yuborish">
          Ismingizni ko‘rsatmasdan sovg‘a yuborish imkoni — sirli tabrik uchun.
        </InfoCard>
      </InfoGrid>

      <KeyFacts label="Yodda tuting">
        <li>
          Sovg‘a <b>Stars qiymatida</b> belgilanadi; so‘m narxi joriy kursga bog‘liq
        </li>
        <li>
          Qabul qiluvchining <b>@username</b> to‘g‘riligini tasdiqlang — sovg‘a o‘shanga ketadi
        </li>
        <li>Anonimlik va izoh — qabul qilinguncha amal qiladi</li>
      </KeyFacts>

      <p>
        Sovg‘alar uchun ham yulduz kerak bo‘ladi — Stars qanday olinishini{" "}
        <Link href="/blog/telegram-stars-qayerdan-sotib-olish-2026">«Stars qayerdan sotib olish»</Link> maqolasida
        ko‘ring. Katalog va narxlar — <Link href="/gifts">Gifts sahifasida</Link>.
      </p>

      <Sources
        label="Manbalar"
        items={[
          { href: "https://telegram.org/blog/star-messages-gateway-2-0-and-more", label: "telegram.org/blog/star-messages-gateway-2-0-and-more", note: "sovg‘alar haqida e’lon" },
          { href: "https://core.telegram.org/api/gifts", label: "core.telegram.org/api/gifts", note: "Gifts texnik hujjati" },
        ]}
      />
    </>
  );
}

function RuAnswer() {
  return (
    <p>
      Чтобы отправить подарок Telegram (Gift), откройте раздел «Gifts» в <strong>@StarsPaymee_bot</strong>, выберите
      подарок, введите <strong>@username</strong> получателя, добавьте комментарий или выберите анонимную отправку и
      оплатите в сумах. Подарок зачисляется самим Telegram автоматически — пароль или логин не нужны.
    </p>
  );
}

function RuBody() {
  return (
    <>
      <h2 id="nima">Что такое Telegram Gifts?</h2>
      <p>
        Telegram Gifts — цифровые подарки, покупаемые за Stars (звёзды). Они отображаются в профиле получателя или
        могут быть конвертированы обратно в Stars. Некоторые подарки лимитированные (limited) или коллекционные
        (collectible). Подарки подходят на день рождения, праздник или в знак благодарности.
      </p>

      <InlineCta text="Отправьте подарок другу — в боте за пару шагов." />

      <h2 id="bosqichlar">Пошагово: отправка подарка</h2>
      <Steps>
        <Step title="Откройте бот">
          В <a href="https://t.me/StarsPaymee_bot" target="_blank" rel="noopener noreferrer">@StarsPaymee_bot</a> или Mini
          App перейдите в раздел «Gifts».
        </Step>
        <Step title="Выберите подарок">Из каталога выберите подарок с TGS-анимацией и его стоимостью в звёздах.</Step>
        <Step title="Введите получателя">Точно укажите @username друга.</Step>
        <Step title="Комментарий или анонимность">Добавьте поздравление или отметьте анонимную отправку.</Step>
        <Step title="Оплатите в сумах">Оплата через UzCard, HUMO, Click, Payme или Paynet.</Step>
        <Step title="Подарок доставлен">После оплаты подарок поступает получателю через Telegram.</Step>
      </Steps>

      <h2 id="sovga-turlari">Виды подарков</h2>
      <InfoGrid>
        <InfoCard emoji="🎁" title="Обычные подарки">
          Из постоянного каталога; получатель показывает их в профиле или конвертирует в Stars.
        </InfoCard>
        <InfoCard emoji="⏳" title="Лимитированные (limited)">
          Доступны ограниченное время или количество — стоимость может быть выше.
        </InfoCard>
        <InfoCard emoji="💎" title="Коллекционные (collectible / NFT)">
          Улучшенные, коллекционные подарки. Обращайте внимание на ликвидность и прозрачность цены.
        </InfoCard>
        <InfoCard emoji="🕵️" title="Анонимная отправка">
          Возможность отправить подарок, не показывая имя — для тайного поздравления.
        </InfoCard>
      </InfoGrid>

      <KeyFacts label="Запомните">
        <li>
          Подарок задаётся в <b>стоимости Stars</b>; цена в сумах зависит от курса
        </li>
        <li>
          Подтвердите верность <b>@username</b> получателя — подарок уйдёт именно ему
        </li>
        <li>Анонимность и комментарий действуют до момента принятия</li>
      </KeyFacts>

      <p>
        Для подарков тоже нужны звёзды — как их купить, смотрите в{" "}
        <Link href="/blog/telegram-stars-qayerdan-sotib-olish-2026">«Где купить Stars»</Link>. Каталог и цены — на{" "}
        <Link href="/gifts">странице Gifts</Link>.
      </p>

      <Sources
        label="Источники"
        items={[
          { href: "https://telegram.org/blog/star-messages-gateway-2-0-and-more", label: "telegram.org/blog/star-messages-gateway-2-0-and-more", note: "анонс о подарках" },
          { href: "https://core.telegram.org/api/gifts", label: "core.telegram.org/api/gifts", note: "техдокументация Gifts" },
        ]}
      />
    </>
  );
}

export const post: AeoPost = {
  slug: SLUG,
  category: "Gifts",
  type: "howto",
  datePublished: "2026-06-20",
  dateModified: "2026-06-20",
  keywords: [
    "telegram gift",
    "telegram gift yuborish",
    "telegram sovga",
    "telegram gifts qanday yuboriladi",
    "telegram sovga qilish",
    "telegram gifts uzbekistan",
  ],
  howToSteps: [
    { name: "Botni oching", text: "@StarsPaymee_bot yoki Mini App’da «Gifts» bo‘limiga o‘ting." },
    { name: "Sovg‘ani tanlang", text: "Katalogdan sovg‘ani va uning yulduz qiymatini tanlang." },
    { name: "Qabul qiluvchini kiriting", text: "Do‘stingizning @username’ini aniq kiriting." },
    { name: "Izoh yoki anonimlik", text: "Tabrik izohi qoldiring yoki anonim yuborishni belgilang." },
    { name: "To‘lang", text: "UzCard/HUMO/Click/Payme/Paynet orqali so‘mda to‘lang." },
    { name: "Sovg‘a yetkaziladi", text: "To‘lovdan so‘ng sovg‘a qabul qiluvchiga tushadi." },
  ],
  locales: {
    uz: {
      title: "Telegram Gifts qanday yuboriladi? Bosqichma-bosqich qo‘llanma",
      excerpt:
        "Telegram sovg‘asini do‘stingizga qanday yuborish: bot orqali tanlash, @username, izoh va anonimlik, so‘mda to‘lov. Sovg‘a turlari va maslahatlar.",
      metaTitle: "Telegram Gifts qanday yuboriladi — bosqichma-bosqich",
      metaDescription:
        "Telegram sovg‘asini (Gift) qanday yuborish: @StarsPaymee_bot orqali tanlash, @username, izoh/anonim, so‘mda to‘lov. Sovg‘a turlari va xavfsizlik.",
      answerTitle: "Qisqa javob",
      Answer: UzAnswer,
      Body: UzBody,
      ctaHeading: "Sovg‘a yubormoqchimisiz?",
      ctaBody: "Botda sovg‘ani tanlang, @username kiriting va so‘mda to‘lang — sovg‘a avtomatik yetkaziladi.",
      faq: [
        {
          question: "Sovg‘a yuborish uchun login kerakmi?",
          answer: "Yo‘q. Faqat qabul qiluvchining @username’i yetarli. Parol yoki SMS-kod so‘ralmaydi.",
        },
        {
          question: "Sovg‘ani anonim yuborsa bo‘ladimi?",
          answer: "Ha. Yuborishda anonimlikni tanlasangiz, qabul qiluvchi yuboruvchining ismini ko‘rmaydi.",
        },
        {
          question: "Sovg‘a uchun yulduz kerakmi?",
          answer:
            "Sovg‘alar Stars qiymatida belgilanadi. StarsPaymee’da to‘g‘ridan-to‘g‘ri so‘mda to‘laysiz, yulduzni alohida olishingiz shart emas.",
        },
        {
          question: "Qabul qiluvchi sovg‘ani Stars’ga aylantira oladimi?",
          answer: "Ko‘p sovg‘alarni qabul qiluvchi profilda saqlashi yoki Stars’ga qaytarishi mumkin.",
        },
        {
          question: "Noyob (collectible) sovg‘alar nima?",
          answer:
            "Bular upgrade qilingan kolleksion sovg‘alar. Sotib olishdan oldin narx shaffofligi va likvidlikka e’tibor bering.",
        },
        {
          question: "Sovg‘a yetib bormasa-chi?",
          answer:
            "@username to‘g‘riligini tekshiring va @StarsPaymeeSupport ga buyurtma ID bilan yozing — nosozlikda to‘lov qaytariladi.",
        },
      ],
    },
    ru: {
      title: "Как отправить Telegram Gifts? Пошаговое руководство",
      excerpt:
        "Как отправить подарок Telegram другу: выбор в боте, @username, комментарий и анонимность, оплата в сумах. Виды подарков и советы.",
      metaTitle: "Как отправить Telegram Gifts — пошагово",
      metaDescription:
        "Как отправить подарок Telegram (Gift): выбор в @StarsPaymee_bot, @username, комментарий/аноним, оплата в сумах. Виды подарков и безопасность.",
      answerTitle: "Краткий ответ",
      Answer: RuAnswer,
      Body: RuBody,
      ctaHeading: "Хотите отправить подарок?",
      ctaBody: "Выберите подарок в боте, введите @username и оплатите в сумах — подарок доставится автоматически.",
      faq: [
        {
          question: "Нужен ли логин для отправки подарка?",
          answer: "Нет. Достаточно @username получателя. Пароль или SMS-код не запрашиваются.",
        },
        {
          question: "Можно ли отправить подарок анонимно?",
          answer: "Да. Если выбрать анонимность при отправке, получатель не увидит имя отправителя.",
        },
        {
          question: "Нужны ли звёзды для подарка?",
          answer:
            "Подарки задаются в стоимости Stars. В StarsPaymee вы платите напрямую в сумах, отдельно покупать звёзды не обязательно.",
        },
        {
          question: "Может ли получатель конвертировать подарок в Stars?",
          answer: "Многие подарки получатель может хранить в профиле или вернуть в Stars.",
        },
        {
          question: "Что такое коллекционные (collectible) подарки?",
          answer:
            "Это улучшенные коллекционные подарки. Перед покупкой обращайте внимание на прозрачность цены и ликвидность.",
        },
        {
          question: "А если подарок не дошёл?",
          answer:
            "Проверьте верность @username и напишите @StarsPaymeeSupport с ID заказа — при сбое оплата возвращается.",
        },
      ],
    },
  },
};
