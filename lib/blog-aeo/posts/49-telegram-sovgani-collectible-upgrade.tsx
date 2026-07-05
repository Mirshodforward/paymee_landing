import { Link } from "@/i18n/navigation";
import { Toc, Steps, Step, InlineCta, KeyFacts, Sources } from "@/components/blog/aeo-blocks";
import type { AeoPost } from "@/lib/blog-aeo/types";

const SLUG = "telegram-sovgani-collectible-upgrade";

function UzAnswer() {
  return (
    <p>
      Telegram sovg‘asini <strong>collectible</strong> darajasiga ko‘tarish (upgrade) — oddiy sovg‘ani noyob, unikal
      atributlarga ega raqamlangan versiyaga aylantirish. Upgrade uchun qo‘shimcha Stars to‘lanadi, natijada model,
      fon (background) va naqsh (pattern) kombinatsiyasi <strong>tasodifiy</strong> tanlanadi — natijani oldindan
      bilib bo‘lmaydi. Bu odatda noyob va qimmatroq sovg‘alarda arziydi, oddiy sovg‘alarda esa kamdan-kam foydali.
    </p>
  );
}

function UzBody() {
  return (
    <>
      <Toc
        label="Mundarija"
        items={[
          { href: "#nima", label: "Upgrade nima" },
          { href: "#bosqichlar", label: "Qanday amalga oshiriladi" },
          { href: "#tasodifiy", label: "Model/fon/naqsh qanday tanlanadi" },
          { href: "#narx", label: "Upgrade narxi qancha" },
          { href: "#qachon", label: "Qachon arziydi" },
        ]}
      />

      <h2 id="nima">Sovg‘ani collectible darajasiga upgrade qilish nima?</h2>
      <p>
        Oddiy Telegram sovg‘asi — barcha oluvchilarda bir xil ko‘rinishga ega. Uni <strong>collectible</strong>{" "}
        darajasiga ko‘targanda, sovg‘a noyob raqam (masalan, 1000 tadan 47-si) va o‘ziga xos vizual
        kombinatsiyaga ega bo‘ladi — bu uni boshqa nusxalardan farqli qiladi va boshqa foydalanuvchiga uzatish
        mumkin bo‘ladi.
      </p>

      <h2 id="bosqichlar">Upgrade qanday amalga oshiriladi?</h2>
      <Steps>
        <Step title="Sovg‘ani tanlang">Profilingizdagi sovg‘alar ro‘yxatidan upgrade qilmoqchi bo‘lganini oching.</Step>
        <Step title="«Upgrade» tugmasini bosing">Agar sovg‘a bu funksiyani qo‘llab-quvvatlasa, tugma ko‘rinadi.</Step>
        <Step title="Narxni ko‘ring va to‘lang">Kerakli Stars miqdorini ko‘rib, to‘lovni tasdiqlang.</Step>
        <Step title="Natijani ko‘ring">
          Tizim tasodifiy model, fon va naqshni tanlaydi — natija darhol ko‘rinadi.
        </Step>
      </Steps>

      <InlineCta text="Upgrade uchun Stars kerakmi? So‘mda, botda 10 soniyada oling." />

      <h2 id="tasodifiy">Model, fon va naqsh qanday tanlanadi?</h2>
      <KeyFacts label="Tasodifiylik mexanizmi">
        <li>
          <b>Oldindan bilib bo‘lmaydi:</b> upgrade natijasi to‘lovdan oldin ko‘rinmaydi.
        </li>
        <li>
          <b>Noyoblik darajasi:</b> ba’zi kombinatsiyalar boshqalarga qaraganda kamroq uchraydi va qadrliroq
          hisoblanadi.
        </li>
        <li>
          <b>Qaytarib bo‘lmaydi:</b> upgrade qilingach, natijani bekor qilib, qayta urinib bo‘lmaydi.
        </li>
      </KeyFacts>
      <p>
        Noyob kombinatsiyalar va ularning qadri haqida{" "}
        <Link href="/blog/telegram-gifts-kolleksiya-rare-sovgalar">«Gifts kolleksiyasi va rare sovg‘alar»</Link>{" "}
        maqolasida batafsil.
      </p>

      <h2 id="narx">Upgrade narxi qancha?</h2>
      <p>
        Narx sovg‘aning turiga va noyobligiga qarab farq qiladi — bu odatda sovg‘aning asl narxidan alohida,
        qo‘shimcha Stars to‘lovi sifatida belgilanadi. Aniq narxni sovg‘aning o‘zi sahifasida ko‘rish mumkin;
        umumiy narxlar ro‘yxati{" "}
        <Link href="/blog/telegram-gifts-narxlari-royxati">«Gifts narxlari ro‘yxati»</Link>da.
      </p>

      <h2 id="qachon">Upgrade qachon arziydi?</h2>
      <ul>
        <li>
          <strong>Noyob yoki limited sovg‘alarda:</strong> collectible qilish qiymatni sezilarli oshirishi mumkin.
        </li>
        <li>
          <strong>Kolleksiya to‘plash niyatida:</strong> agar maqsad sovg‘alarni to‘plash yoki almashish bo‘lsa.
        </li>
        <li>
          <strong>Oddiy, keng tarqalgan sovg‘ada:</strong> odatda unchalik ma’noga ega emas — xarajat qiymatga mos
          kelmasligi mumkin.
        </li>
      </ul>
      <p>
        Sovg‘ani Stars’ga qaytarish (convert) bilan taqqoslash uchun{" "}
        <Link href="/blog/telegram-gift-stars-ga-aylantirish">«Gift’ni Stars’ga aylantirish»</Link> maqolasini
        ko‘ring.
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
      Апгрейд подарка Telegram до уровня <strong>collectible</strong> — превращение обычного подарка в уникальную,
      пронумерованную версию с особыми атрибутами. За апгрейд платят дополнительными Stars, после чего комбинация
      модели, фона (background) и узора (pattern) выбирается <strong>случайно</strong> — результат заранее
      неизвестен. Это обычно оправдано для редких и более дорогих подарков, для обычных — редко имеет смысл.
    </p>
  );
}

function RuBody() {
  return (
    <>
      <Toc
        label="Содержание"
        items={[
          { href: "#nima", label: "Что такое upgrade" },
          { href: "#bosqichlar", label: "Как выполняется" },
          { href: "#tasodifiy", label: "Как выбирается модель/фон/узор" },
          { href: "#narx", label: "Сколько стоит апгрейд" },
          { href: "#qachon", label: "Когда это оправдано" },
        ]}
      />

      <h2 id="nima">Что такое апгрейд подарка до уровня collectible?</h2>
      <p>
        Обычный подарок Telegram выглядит одинаково у всех получателей. При апгрейде до уровня{" "}
        <strong>collectible</strong> подарок получает уникальный номер (например, 47-й из 1000) и особую визуальную
        комбинацию — это отличает его от других копий и позволяет передать другому пользователю.
      </p>

      <h2 id="bosqichlar">Как выполняется апгрейд?</h2>
      <Steps>
        <Step title="Выберите подарок">Откройте в списке подарков в профиле тот, который хотите апгрейдить.</Step>
        <Step title="Нажмите «Upgrade»">Если подарок поддерживает эту функцию, появится кнопка.</Step>
        <Step title="Посмотрите цену и оплатите">Проверьте нужное количество Stars и подтвердите оплату.</Step>
        <Step title="Посмотрите результат">
          Система случайно выберет модель, фон и узор — результат появится сразу.
        </Step>
      </Steps>

      <InlineCta text="Нужны Stars для апгрейда? Купите в сумах, в боте за 10 секунд." />

      <h2 id="tasodifiy">Как выбирается модель, фон и узор?</h2>
      <KeyFacts label="Механизм случайности">
        <li>
          <b>Заранее неизвестно:</b> результат апгрейда не виден до оплаты.
        </li>
        <li>
          <b>Степень редкости:</b> некоторые комбинации встречаются реже других и ценятся выше.
        </li>
        <li>
          <b>Нельзя отменить:</b> после апгрейда результат нельзя отменить и попробовать снова.
        </li>
      </KeyFacts>
      <p>
        Подробнее о редких комбинациях и их ценности — в статье{" "}
        <Link href="/blog/telegram-gifts-kolleksiya-rare-sovgalar">«Коллекция Gifts и редкие подарки»</Link>.
      </p>

      <h2 id="narx">Сколько стоит апгрейд?</h2>
      <p>
        Цена зависит от типа и редкости подарка — она обычно устанавливается отдельно от исходной цены подарка, как
        дополнительная оплата в Stars. Точную цену можно увидеть на странице самого подарка; общий список цен — в{" "}
        <Link href="/blog/telegram-gifts-narxlari-royxati">«Списке цен на Gifts»</Link>.
      </p>

      <h2 id="qachon">Когда апгрейд оправдан?</h2>
      <ul>
        <li>
          <strong>Для редких или limited подарков:</strong> перевод в collectible может значительно повысить
          ценность.
        </li>
        <li>
          <strong>При намерении собирать коллекцию:</strong> если цель — собирать или обменивать подарки.
        </li>
        <li>
          <strong>Для обычного, распространённого подарка:</strong> обычно не имеет большого смысла — затраты могут
          не окупиться.
        </li>
      </ul>
      <p>
        Для сравнения с обратной конвертацией подарка — смотрите статью{" "}
        <Link href="/blog/telegram-gift-stars-ga-aylantirish">«Конвертация Gift в Stars»</Link>.
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
    "telegram sovgani upgrade qilish",
    "telegram gift collectible",
    "telegram gift upgrade",
    "collectible sovga",
    "telegram gift model fon naqsh",
  ],
  howToSteps: [
    { name: "Sovg‘ani tanlang", text: "Profilingizdagi sovg‘alar ro‘yxatidan upgrade qilmoqchi bo‘lganini oching." },
    { name: "Upgrade tugmasini bosing", text: "Agar sovg‘a bu funksiyani qo‘llab-quvvatlasa, tugma ko‘rinadi." },
    { name: "Narxni ko‘ring va to‘lang", text: "Kerakli Stars miqdorini ko‘rib, to‘lovni tasdiqlang." },
    { name: "Natijani ko‘ring", text: "Tizim tasodifiy model, fon va naqshni tanlaydi." },
  ],
  locales: {
    uz: {
      title: "Telegram sovg‘asini collectible darajasiga upgrade qilish qo‘llanmasi (2026)",
      excerpt:
        "Telegram sovg‘asini collectible’ga qanday upgrade qilinadi, narxi qancha, model/fon/naqsh qanday tasodifiy tanlanadi va qachon arziydi.",
      metaTitle: "Telegram sovg‘asini collectible’ga upgrade — 2026",
      metaDescription:
        "Telegram sovg‘asini collectible darajasiga upgrade qilish: bosqichlar, narxi, tasodifiy model/fon/naqsh tanlash mexanizmi va qachon arziydi.",
      answerTitle: "Qisqa javob",
      Answer: UzAnswer,
      Body: UzBody,
      ctaHeading: "Upgrade uchun Stars kerakmi?",
      ctaBody: "So‘mda, mahalliy karta bilan @StarsPaymee_bot orqali 10 soniyada oling.",
      faq: [
        {
          question: "Collectible upgrade natijasini oldindan bilib bo‘ladimi?",
          answer: "Yo‘q, model, fon va naqsh kombinatsiyasi to‘lovdan keyin tasodifiy tanlanadi.",
        },
        {
          question: "Upgrade’ni bekor qilib, qayta urinib bo‘ladimi?",
          answer: "Yo‘q, natija chiqqach uni bekor qilib bo‘lmaydi.",
        },
        {
          question: "Har qanday sovg‘ani upgrade qilsa bo‘ladimi?",
          answer: "Yo‘q, faqat bu funksiyani qo‘llab-quvvatlaydigan sovg‘a turlari uchun mumkin.",
        },
        {
          question: "Upgrade qilingan sovg‘ani boshqasiga berish mumkinmi?",
          answer: "Ha, collectible sovg‘alar odatda boshqa foydalanuvchiga uzatilishi mumkin.",
        },
        {
          question: "Oddiy sovg‘ani upgrade qilish arziydimi?",
          answer: "Ko‘pincha yo‘q — upgrade odatda noyob yoki limited sovg‘alarda ko‘proq ma’noga ega.",
        },
      ],
    },
    ru: {
      title: "Руководство по апгрейду подарка Telegram до уровня collectible (2026)",
      excerpt:
        "Как апгрейдить подарок Telegram до collectible, сколько это стоит, как случайно выбираются модель/фон/узор и когда это оправдано.",
      metaTitle: "Апгрейд подарка Telegram до collectible — 2026",
      metaDescription:
        "Апгрейд подарка Telegram до уровня collectible: шаги, цена, механизм случайного выбора модели/фона/узора и когда это оправдано.",
      answerTitle: "Краткий ответ",
      Answer: RuAnswer,
      Body: RuBody,
      ctaHeading: "Нужны Stars для апгрейда?",
      ctaBody: "Купите в сумах локальной картой через @StarsPaymee_bot за 10 секунд.",
      faq: [
        {
          question: "Можно ли заранее узнать результат апгрейда до collectible?",
          answer: "Нет, комбинация модели, фона и узора выбирается случайно после оплаты.",
        },
        {
          question: "Можно ли отменить апгрейд и попробовать снова?",
          answer: "Нет, после получения результата отменить его нельзя.",
        },
        {
          question: "Можно ли апгрейдить любой подарок?",
          answer: "Нет, это возможно только для типов подарков, поддерживающих данную функцию.",
        },
        {
          question: "Можно ли передать апгрейженный подарок другому?",
          answer: "Да, collectible-подарки обычно можно передать другому пользователю.",
        },
        {
          question: "Стоит ли апгрейдить обычный подарок?",
          answer: "Часто нет — апгрейд обычно имеет больше смысла для редких или limited подарков.",
        },
      ],
    },
  },
};
