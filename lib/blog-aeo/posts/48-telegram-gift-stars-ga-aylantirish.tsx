import { Link } from "@/i18n/navigation";
import { Toc, Steps, Step, InlineCta, KeyFacts, Sources } from "@/components/blog/aeo-blocks";
import type { AeoPost } from "@/lib/blog-aeo/types";

const SLUG = "telegram-gift-stars-ga-aylantirish";

function UzAnswer() {
  return (
    <p>
      Olingan ba’zi Telegram sovg‘alarini (Gift) profilingiz orqali <strong>Stars’ga qaytarib</strong> (convert)
      olish mumkin — bu odatda sovg‘aning boshlang‘ich Stars qiymatining bir qismini qaytaradi (to‘liq summa emas).
      Bu funksiya <strong>barcha sovg‘alar</strong>ga emas, faqat konvertatsiya qo‘llab-quvvatlaydigan turlariga
      tegishli, va odatda ma’lum muddat ichida amalga oshirilishi kerak.
    </p>
  );
}

function UzBody() {
  return (
    <>
      <Toc
        label="Mundarija"
        items={[
          { href: "#qaysi", label: "Qaysi sovg‘alar konvert bo‘ladi" },
          { href: "#bosqichlar", label: "Qanday konvert qilinadi" },
          { href: "#qancha", label: "Qancha Stars qaytadi" },
          { href: "#muddat", label: "Muddat cheklovi bormi" },
          { href: "#solishtir", label: "Convert va upgrade farqi" },
        ]}
      />

      <h2 id="qaysi">Qaysi sovg‘alar Stars’ga konvert qilinadi?</h2>
      <p>
        Barcha Telegram sovg‘alari konvert qilinavermaydi. Odatda oddiy (limited bo‘lmagan) va ba’zi limited
        sovg‘alar konvertatsiyani qo‘llab-quvvatlaydi, collectible darajasiga ko‘tarilgan sovg‘alar esa boshqacha
        qoidaga bo‘ysunadi. Aniq qaysi sovg‘a konvert bo‘lishini sovg‘aning o‘zi sahifasida ko‘rish mumkin.
      </p>

      <h2 id="bosqichlar">Sovg‘ani Stars’ga qanday konvert qilish mumkin?</h2>
      <Steps>
        <Step title="Sovg‘alar bo‘limiga o‘ting">Profilingizdagi olingan sovg‘alar ro‘yxatini oching.</Step>
        <Step title="Sovg‘ani tanlang">Konvert qilmoqchi bo‘lgan sovg‘a ustiga bosing.</Step>
        <Step title="«Stars’ga aylantirish» variantini toping">
          Agar sovg‘a konvertatsiyani qo‘llab-quvvatlasa, tegishli tugma ko‘rinadi.
        </Step>
        <Step title="Tasdiqlang">Konvertatsiyani tasdiqlagach, Stars balansingizga qo‘shiladi.</Step>
      </Steps>

      <InlineCta text="Yangi sovg‘a yubormoqchimisiz? Stars’ni so‘mda, botda 10 soniyada oling." />

      <h2 id="qancha">Konvertatsiyada qancha Stars qaytadi?</h2>
      <KeyFacts label="Muhim jihatlar">
        <li>
          <b>To‘liq emas, qisman:</b> odatda sovg‘aning asl narxidan kamroq Stars qaytariladi.
        </li>
        <li>
          <b>Sovg‘a turiga bog‘liq:</b> har xil sovg‘a turlari uchun qaytarish foizi farq qilishi mumkin.
        </li>
        <li>
          <b>Bir martalik amal:</b> konvert qilingan sovg‘ani orqaga qaytarib bo‘lmaydi.
        </li>
      </KeyFacts>

      <h2 id="muddat">Konvertatsiya uchun muddat cheklovi bormi?</h2>
      <p>
        Ha, ko‘pincha sovg‘ani konvert qilish uchun <strong>ma’lum muddat</strong> beriladi (masalan, olingandan
        keyingi bir necha kun/hafta ichida). Bu muddat o‘tgach, sovg‘a faqat kolleksiyada saqlanadi yoki boshqa
        amallar (masalan, upgrade) uchungina mavjud bo‘lishi mumkin.
      </p>

      <h2 id="solishtir">Convert va upgrade — bu ikkisi bir xilmi?</h2>
      <p>
        Yo‘q, bular butunlay boshqa amallar. <strong>Convert</strong> — sovg‘ani Stars’ga aylantirib, uni butunlay
        sarflab yuborish. <strong>Upgrade</strong> esa — sovg‘ani yo‘qotmasdan, uni noyob collectible darajasiga
        ko‘tarish. Upgrade haqida to‘liq{" "}
        <Link href="/blog/telegram-sovgani-collectible-upgrade">«Sovg‘ani collectible’ga upgrade qilish»</Link>{" "}
        maqolasida o‘qing. Sovg‘alar narxlari haqida{" "}
        <Link href="/blog/telegram-gifts-narxlari-royxati">«Gifts narxlari ro‘yxati»</Link>da.
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
      Некоторые полученные Telegram подарки (Gift) можно <strong>обменять обратно на Stars</strong> через профиль —
      обычно возвращается часть исходной стоимости подарка в Stars (не полная сумма). Эта функция доступна{" "}
      <strong>не для всех подарков</strong>, только для типов, поддерживающих конвертацию, и обычно должна быть
      выполнена в течение определённого срока.
    </p>
  );
}

function RuBody() {
  return (
    <>
      <Toc
        label="Содержание"
        items={[
          { href: "#qaysi", label: "Какие подарки конвертируются" },
          { href: "#bosqichlar", label: "Как конвертировать" },
          { href: "#qancha", label: "Сколько Stars возвращается" },
          { href: "#muddat", label: "Есть ли ограничение по сроку" },
          { href: "#solishtir", label: "Разница convert и upgrade" },
        ]}
      />

      <h2 id="qaysi">Какие подарки конвертируются в Stars?</h2>
      <p>
        Не все подарки Telegram можно конвертировать. Обычно обычные (не limited) и некоторые limited подарки
        поддерживают конвертацию, а подарки, повышенные до уровня collectible, подчиняются другому правилу. Точно,
        какой подарок конвертируется, можно увидеть на странице самого подарка.
      </p>

      <h2 id="bosqichlar">Как конвертировать подарок в Stars?</h2>
      <Steps>
        <Step title="Перейдите в раздел подарков">Откройте список полученных подарков в профиле.</Step>
        <Step title="Выберите подарок">Нажмите на подарок, который хотите конвертировать.</Step>
        <Step title="Найдите вариант «Конвертировать в Stars»">
          Если подарок поддерживает конвертацию, появится соответствующая кнопка.
        </Step>
        <Step title="Подтвердите">После подтверждения Stars будут зачислены на ваш баланс.</Step>
      </Steps>

      <InlineCta text="Хотите отправить новый подарок? Купите Stars в сумах, в боте за 10 секунд." />

      <h2 id="qancha">Сколько Stars возвращается при конвертации?</h2>
      <KeyFacts label="Важные моменты">
        <li>
          <b>Не полностью, а частично:</b> обычно возвращается меньше Stars, чем исходная цена подарка.
        </li>
        <li>
          <b>Зависит от типа подарка:</b> процент возврата может отличаться для разных типов подарков.
        </li>
        <li>
          <b>Разовое действие:</b> конвертированный подарок нельзя вернуть обратно.
        </li>
      </KeyFacts>

      <h2 id="muddat">Есть ли ограничение по сроку для конвертации?</h2>
      <p>
        Да, часто для конвертации подарка даётся <strong>определённый срок</strong> (например, несколько дней/недель
        после получения). После истечения срока подарок может остаться только в коллекции или быть доступен лишь для
        других действий (например, upgrade).
      </p>

      <h2 id="solishtir">Convert и upgrade — это одно и то же?</h2>
      <p>
        Нет, это совершенно разные действия. <strong>Convert</strong> — превратить подарок в Stars, полностью его
        потратив. <strong>Upgrade</strong> же — повысить подарок до уровня редкого collectible, не теряя его.
        Подробнее об upgrade — в статье{" "}
        <Link href="/blog/telegram-sovgani-collectible-upgrade">«Апгрейд подарка до collectible»</Link>. Цены на
        подарки — в{" "}
        <Link href="/blog/telegram-gifts-narxlari-royxati">«Списке цен на Gifts»</Link>.
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
    "telegram gift stars ga aylantirish",
    "telegram gift convert",
    "telegram sovgani stars qilish",
    "gift to stars telegram",
    "telegram gift qaytarish",
  ],
  howToSteps: [
    { name: "Sovg‘alar bo‘limiga o‘ting", text: "Profilingizdagi olingan sovg‘alar ro‘yxatini oching." },
    { name: "Sovg‘ani tanlang", text: "Konvert qilmoqchi bo‘lgan sovg‘a ustiga bosing." },
    { name: "Stars’ga aylantirish variantini toping", text: "Agar qo‘llab-quvvatlansa, tugma ko‘rinadi." },
    { name: "Tasdiqlang", text: "Stars balansingizga qo‘shiladi." },
  ],
  locales: {
    uz: {
      title: "Telegram Gift’ni Stars’ga qaytarish (convert) qanday qilinadi? (2026)",
      excerpt:
        "Qaysi Telegram sovg‘alari Stars’ga konvert bo‘ladi, qancha Stars qaytadi, muddat cheklovlari va convert bilan upgrade’ning farqi.",
      metaTitle: "Telegram Gift’ni Stars’ga aylantirish — 2026",
      metaDescription:
        "Telegram Gift’ni Stars’ga qaytarish qanday qilinadi: qaysi sovg‘alar konvert bo‘ladi, qancha Stars qaytadi va muddat cheklovlari.",
      answerTitle: "Qisqa javob",
      Answer: UzAnswer,
      Body: UzBody,
      ctaHeading: "Yangi sovg‘a yubormoqchimisiz?",
      ctaBody: "Stars’ni so‘mda, mahalliy karta bilan @StarsPaymee_bot orqali 10 soniyada oling.",
      faq: [
        {
          question: "Har qanday sovg‘ani Stars’ga qaytarib bo‘ladimi?",
          answer: "Yo‘q, faqat konvertatsiyani qo‘llab-quvvatlaydigan sovg‘a turlari uchun bu mumkin.",
        },
        {
          question: "Konvertatsiyada to‘liq narx qaytadimi?",
          answer: "Yo‘q, odatda sovg‘aning asl qiymatidan kamroq Stars qaytariladi.",
        },
        {
          question: "Konvert qilingan sovg‘ani orqaga qaytarib bo‘ladimi?",
          answer: "Yo‘q, bu bir martalik amal — konvert qilingach sovg‘a Stars’ga aylanadi va qaytarib bo‘lmaydi.",
        },
        {
          question: "Konvertatsiya uchun muddat bormi?",
          answer: "Ha, ko‘pincha sovg‘ani olgandan keyingi ma’lum muddat ichida konvert qilish kerak bo‘ladi.",
        },
        {
          question: "Convert va upgrade bir xil narsami?",
          answer: "Yo‘q, convert sovg‘ani Stars’ga aylantiradi (sarflaydi), upgrade esa uni collectible darajasiga ko‘taradi.",
        },
      ],
    },
    ru: {
      title: "Как конвертировать Telegram Gift обратно в Stars? (2026)",
      excerpt:
        "Какие подарки Telegram конвертируются в Stars, сколько Stars возвращается, ограничения по сроку и разница между convert и upgrade.",
      metaTitle: "Конвертация Telegram Gift в Stars — 2026",
      metaDescription:
        "Как конвертировать Telegram Gift обратно в Stars: какие подарки поддерживают конвертацию, сколько возвращается и ограничения по сроку.",
      answerTitle: "Краткий ответ",
      Answer: RuAnswer,
      Body: RuBody,
      ctaHeading: "Хотите отправить новый подарок?",
      ctaBody: "Купите Stars в сумах локальной картой через @StarsPaymee_bot за 10 секунд.",
      faq: [
        {
          question: "Можно ли конвертировать любой подарок в Stars?",
          answer: "Нет, это возможно только для типов подарков, поддерживающих конвертацию.",
        },
        {
          question: "Возвращается ли полная стоимость при конвертации?",
          answer: "Нет, обычно возвращается меньше Stars, чем исходная стоимость подарка.",
        },
        {
          question: "Можно ли отменить конвертацию подарка?",
          answer: "Нет, это разовое действие — после конвертации подарок становится Stars и вернуть его нельзя.",
        },
        {
          question: "Есть ли срок для конвертации?",
          answer: "Да, часто конвертацию нужно выполнить в течение определённого срока после получения подарка.",
        },
        {
          question: "Convert и upgrade — это одно и то же?",
          answer: "Нет, convert превращает подарок в Stars (тратит его), а upgrade повышает его до уровня collectible.",
        },
      ],
    },
  },
};
