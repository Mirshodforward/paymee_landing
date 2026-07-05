import { Link } from "@/i18n/navigation";
import { Toc, Steps, Step, InlineCta, KeyFacts, Sources } from "@/components/blog/aeo-blocks";
import type { AeoPost } from "@/lib/blog-aeo/types";

const SLUG = "telegram-sovgani-profilga-qoyish";

function UzAnswer() {
  return (
    <p>
      Olingan Telegram sovg‘asini profilingizda ko‘rsatish yoki yashirish uchun: profilingizga o‘ting, sovg‘alar
      bo‘limini toping va har bir sovg‘a ustida «Profilda ko‘rsatish» (Display on profile) yoki «Yashirish»
      sozlamasini tanlang. Ko‘rsatiladigan sovg‘alarning <strong>tartibini</strong> ham qo‘lda o‘zgartirish mumkin;
      anonim yuborilgan sovg‘alarda yuboruvchi ismi ko‘rinmaydi, lekin sovg‘aning o‘zi profilda chiqadi.
    </p>
  );
}

function UzBody() {
  return (
    <>
      <Toc
        label="Mundarija"
        items={[
          { href: "#qanday", label: "Sovg‘ani profilda ko‘rsatish" },
          { href: "#yashirish", label: "Sovg‘ani yashirish" },
          { href: "#tartib", label: "Tartibni o‘zgartirish" },
          { href: "#anonim", label: "Anonim sovg‘alar qanday ko‘rinadi" },
        ]}
      />

      <h2 id="qanday">Sovg‘ani profilda qanday ko‘rsatish mumkin?</h2>
      <Steps>
        <Step title="Profilingizga o‘ting">O‘z profilingizni oching.</Step>
        <Step title="Sovg‘alar bo‘limini toping">Olingan sovg‘alar to‘plami (kolleksiya) ko‘rinadigan joyni toping.</Step>
        <Step title="Sovg‘ani tanlang">Ko‘rsatmoqchi bo‘lgan sovg‘a ustiga bosing.</Step>
        <Step title="«Profilda ko‘rsatish»ni yoqing">Tegishli sozlamani faollashtiring — sovg‘a profilingizda chiqadi.</Step>
      </Steps>

      <InlineCta text="Sovg‘a yuborish uchun Stars kerakmi? Botda so‘mda 10 soniyada." />

      <h2 id="yashirish">Sovg‘ani qanday yashirish mumkin?</h2>
      <p>
        Xuddi shu sozlama orqali, aksincha yo‘nalishda — «Profilda ko‘rsatish»ni o‘chirib qo‘ysangiz, sovg‘a
        kolleksiyangizda saqlanadi, lekin boshqalar profilingizni ko‘rganda uni ko‘rmaydi. Bu shaxsiy sovg‘alarni
        ommaviy ko‘rsatmasdan saqlab qo‘yish uchun qulay.
      </p>

      <h2 id="tartib">Sovg‘alar tartibini o‘zgartirish mumkinmi?</h2>
      <KeyFacts label="Tartiblash imkoniyati">
        <li>
          <b>Qo‘lda tartiblash:</b> ko‘rsatiladigan sovg‘alarni sudrab, xohlagan tartibda joylashtirish mumkin.
        </li>
        <li>
          <b>Eng qadrlisini birinchi qo‘yish:</b> noyob yoki collectible sovg‘alarni yuqoriga chiqarish odatiy.
        </li>
        <li>
          <b>Cheklangan son:</b> profilda bir vaqtda ko‘rsatiladigan sovg‘alar soni cheklangan bo‘lishi mumkin.
        </li>
      </KeyFacts>
      <p>
        Noyob va collectible sovg‘alar haqida{" "}
        <Link href="/blog/telegram-gifts-kolleksiya-rare-sovgalar">«Gifts kolleksiyasi va rare sovg‘alar»</Link>{" "}
        maqolasida batafsil.
      </p>

      <h2 id="anonim">Anonim yuborilgan sovg‘alar profilda qanday ko‘rinadi?</h2>
      <p>
        Agar kimdir sizga sovg‘ani <strong>anonim</strong> tarzda yuborgan bo‘lsa, sovg‘aning o‘zi profilingizda
        (agar ko‘rsatishni yoqqan bo‘lsangiz) chiqaveradi, lekin yuboruvchi ismi ko‘rinmaydi — faqat «noma’lum
        foydalanuvchi» kabi belgi bo‘ladi. Sovg‘alarni qanday yuborish haqida{" "}
        <Link href="/blog/telegram-gifts-qanday-yuboriladi-qollanma">«Gifts qanday yuboriladi»</Link> maqolasida
        o‘qing.
      </p>

      <Sources
        label="Manbalar"
        items={[
          { href: "https://telegram.org/blog/star-messages-gateway-2-0-and-more", label: "telegram.org/blog/star-messages-gateway-2-0-and-more", note: "sovg‘alar e’loni" },
          { href: "https://core.telegram.org/api/gifts", label: "core.telegram.org/api/gifts", note: "Gifts texnik hujjati" },
        ]}
      />
    </>
  );
}

function RuAnswer() {
  return (
    <p>
      Чтобы показать или скрыть полученный подарок Telegram в профиле: зайдите в свой профиль, найдите раздел
      подарков и выберите настройку «Показать в профиле» (Display on profile) или «Скрыть» для каждого подарка.
      Можно также вручную изменить <strong>порядок</strong> отображаемых подарков; при анонимно отправленном подарке
      имя отправителя не отображается, но сам подарок появляется в профиле.
    </p>
  );
}

function RuBody() {
  return (
    <>
      <Toc
        label="Содержание"
        items={[
          { href: "#qanday", label: "Как показать подарок в профиле" },
          { href: "#yashirish", label: "Как скрыть подарок" },
          { href: "#tartib", label: "Изменение порядка" },
          { href: "#anonim", label: "Как отображаются анонимные подарки" },
        ]}
      />

      <h2 id="qanday">Как показать подарок в профиле?</h2>
      <Steps>
        <Step title="Перейдите в профиль">Откройте свой профиль.</Step>
        <Step title="Найдите раздел подарков">Найдите место, где отображается коллекция полученных подарков.</Step>
        <Step title="Выберите подарок">Нажмите на подарок, который хотите показать.</Step>
        <Step title="Включите «Показать в профиле»">Активируйте настройку — подарок появится в профиле.</Step>
      </Steps>

      <InlineCta text="Нужны Stars для подарка? В боте — в сумах за 10 секунд." />

      <h2 id="yashirish">Как скрыть подарок?</h2>
      <p>
        Через ту же настройку, в обратную сторону — если отключить «Показать в профиле», подарок сохранится в вашей
        коллекции, но другие не увидят его при просмотре вашего профиля. Это удобно, чтобы хранить личные подарки без
        публичного отображения.
      </p>

      <h2 id="tartib">Можно ли изменить порядок подарков?</h2>
      <KeyFacts label="Возможность сортировки">
        <li>
          <b>Ручная сортировка:</b> отображаемые подарки можно перетаскивать в нужном порядке.
        </li>
        <li>
          <b>Ценное — первым:</b> обычно редкие или collectible подарки выносят наверх.
        </li>
        <li>
          <b>Ограниченное число:</b> количество одновременно отображаемых в профиле подарков может быть ограничено.
        </li>
      </KeyFacts>
      <p>
        О редких и collectible подарках подробнее в статье{" "}
        <Link href="/blog/telegram-gifts-kolleksiya-rare-sovgalar">«Коллекция Gifts и редкие подарки»</Link>.
      </p>

      <h2 id="anonim">Как отображаются анонимно отправленные подарки?</h2>
      <p>
        Если кто-то отправил вам подарок <strong>анонимно</strong>, сам подарок появится в профиле (если включено
        отображение), но имя отправителя не будет видно — вместо него будет отметка «неизвестный пользователь». Как
        отправлять подарки — в статье{" "}
        <Link href="/blog/telegram-gifts-qanday-yuboriladi-qollanma">«Как отправить Gifts»</Link>.
      </p>

      <Sources
        label="Источники"
        items={[
          { href: "https://telegram.org/blog/star-messages-gateway-2-0-and-more", label: "telegram.org/blog/star-messages-gateway-2-0-and-more", note: "анонс подарков" },
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
  datePublished: "2026-07-05",
  dateModified: "2026-07-05",
  keywords: [
    "telegram sovgani profilga qoyish",
    "telegram gift profile settings",
    "telegram sovga korsatish",
    "telegram gift yashirish",
    "telegram profile gifts",
  ],
  howToSteps: [
    { name: "Profilingizga o‘ting", text: "O‘z profilingizni oching." },
    { name: "Sovg‘alar bo‘limini toping", text: "Olingan sovg‘alar to‘plami ko‘rinadigan joyni toping." },
    { name: "Sovg‘ani tanlang", text: "Ko‘rsatmoqchi bo‘lgan sovg‘a ustiga bosing." },
    { name: "Profilda ko‘rsatishni yoqing", text: "Tegishli sozlamani faollashtiring." },
  ],
  locales: {
    uz: {
      title: "Telegram sovg‘asini profilga qo‘yish: Gifts’ni ko‘rsatish sozlamalari (2026)",
      excerpt:
        "Telegram sovg‘asini profilda ko‘rsatish yoki yashirish, tartibini o‘zgartirish va anonim sovg‘alar qanday ko‘rinishi haqida to‘liq qo‘llanma.",
      metaTitle: "Telegram sovg‘asini profilga qo‘yish — 2026",
      metaDescription:
        "Telegram sovg‘asini profilga qanday qo‘yish mumkin: ko‘rsatish/yashirish sozlamalari, tartibni o‘zgartirish va anonim sovg‘alarning ko‘rinishi.",
      answerTitle: "Qisqa javob",
      Answer: UzAnswer,
      Body: UzBody,
      ctaHeading: "Sovg‘a yubormoqchimisiz?",
      ctaBody: "Stars’ni so‘mda, mahalliy karta bilan @StarsPaymee_bot orqali 10 soniyada oling.",
      faq: [
        {
          question: "Sovg‘ani profilda qayerdan ko‘rsatish mumkin?",
          answer: "Profilingizdagi sovg‘alar bo‘limidan sovg‘ani tanlab, «Profilda ko‘rsatish» sozlamasini yoqish orqali.",
        },
        {
          question: "Sovg‘ani yashirsam, u yo‘qolib qoladimi?",
          answer: "Yo‘q, u kolleksiyangizda saqlanadi, faqat boshqalar profilingizda ko‘rmaydi.",
        },
        {
          question: "Sovg‘alar tartibini o‘zgartirish mumkinmi?",
          answer: "Ha, ko‘rsatiladigan sovg‘alarni sudrab, xohlagan tartibda joylashtirish mumkin.",
        },
        {
          question: "Anonim sovg‘ada kim yuborganini bilib bo‘ladimi?",
          answer: "Yo‘q, anonim sovg‘alarda yuboruvchi ismi ko‘rsatilmaydi, faqat sovg‘aning o‘zi ko‘rinadi.",
        },
        {
          question: "Profilda nechta sovg‘a ko‘rsatish mumkin?",
          answer: "Bir vaqtda ko‘rsatiladigan sovg‘alar soni cheklangan bo‘lishi mumkin — eng qadrlilarini tanlab qo‘yish tavsiya etiladi.",
        },
      ],
    },
    ru: {
      title: "Размещение подарка Telegram в профиле: настройки отображения Gifts (2026)",
      excerpt:
        "Как показать или скрыть подарок Telegram в профиле, изменить порядок отображения и как выглядят анонимные подарки — полное руководство.",
      metaTitle: "Размещение подарка Telegram в профиле — 2026",
      metaDescription:
        "Как разместить подарок Telegram в профиле: настройки показа/скрытия, изменение порядка и отображение анонимных подарков.",
      answerTitle: "Краткий ответ",
      Answer: RuAnswer,
      Body: RuBody,
      ctaHeading: "Хотите отправить подарок?",
      ctaBody: "Купите Stars в сумах локальной картой через @StarsPaymee_bot за 10 секунд.",
      faq: [
        {
          question: "Где показать подарок в профиле?",
          answer: "В разделе подарков вашего профиля, выбрав подарок и включив настройку «Показать в профиле».",
        },
        {
          question: "Если скрыть подарок, он исчезнет навсегда?",
          answer: "Нет, он останется в вашей коллекции, просто другие не увидят его в профиле.",
        },
        {
          question: "Можно ли изменить порядок подарков?",
          answer: "Да, отображаемые подарки можно перетаскивать в нужном порядке.",
        },
        {
          question: "Можно ли узнать, кто отправил анонимный подарок?",
          answer: "Нет, при анонимном подарке имя отправителя не показывается, виден только сам подарок.",
        },
        {
          question: "Сколько подарков можно показать в профиле?",
          answer: "Количество одновременно отображаемых подарков может быть ограничено — рекомендуется выбирать самые ценные.",
        },
      ],
    },
  },
};
