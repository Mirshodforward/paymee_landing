import { Link } from "@/i18n/navigation";
import { InfoGrid, InfoCard, InlineCta, Sources } from "@/components/blog/aeo-blocks";
import type { AeoPost } from "@/lib/blog-aeo/types";

const SLUG = "telegram-stars-bilan-nima-sotib-olish-mumkin";

function UzAnswer() {
  return (
    <p>
      Telegram Stars bilan quyidagilarni qilish mumkin: <strong>Telegram Premium</strong> sotib olish/sovg‘a qilish,{" "}
      <strong>noyob sovg‘alar</strong> (Gifts) yuborish, botlar va Mini App’larda <strong>raqamli mahsulot</strong>{" "}
      to‘lash, <strong>Star Reactions</strong> qo‘yish, <strong>pulli xabar/kontent</strong> uchun to‘lash. Stars
      Telegram ichidagi universal to‘lov birligi.
    </p>
  );
}

function UzBody() {
  return (
    <>
      <h2 id="nima">Telegram Stars bilan nimalarni sotib olish mumkin?</h2>
      <p>
        Stars — Telegram’ning ichki valyutasi va u ekotizim ichidagi turli xaridlar uchun ishlatiladi. Asosiy
        yo‘nalishlar:
      </p>
      <InfoGrid>
        <InfoCard emoji="⭐" title="Telegram Premium">
          Stars yordamida o‘zingizga yoki boshqa odamga Premium obunani sovg‘a qilishingiz mumkin.
        </InfoCard>
        <InfoCard emoji="🎁" title="Noyob sovg‘alar (Gifts)">
          Do‘stingizga kolleksion sovg‘a yuboring — anonim yoki tabrik izohi bilan.
        </InfoCard>
        <InfoCard emoji="🤖" title="Bot va Mini App to‘lovlari">
          Botlardagi raqamli mahsulot, kurslar, o‘yin ichidagi narsalar va xizmatlar uchun.
        </InfoCard>
        <InfoCard emoji="😍" title="Star Reactions">
          Post yoki kanalga yulduzli reaksiya qo‘ying — muallifga to‘g‘ridan-to‘g‘ri qiymat o‘tadi.
        </InfoCard>
        <InfoCard emoji="✉️" title="Pulli xabarlar">
          Kontaktda bo‘lmagan foydalanuvchilardan keladigan xabarlar uchun narx belgilash.
        </InfoCard>
        <InfoCard emoji="📺" title="Pulli kontent">
          Kanallar Stars orqali pulli post, video yoki fayl sotishi mumkin.
        </InfoCard>
      </InfoGrid>

      <InlineCta text="Stars kerakmi? Botda so‘mda 10 soniyada oling." />

      <h2 id="qancha">Qancha Stars kerak bo‘ladi?</h2>
      <p>
        Har bir mahsulotning Stars qiymati Telegram interfeysida ko‘rsatiladi. Kichik sovg‘a yoki reaksiya uchun 15–50
        yulduz yetarli, Premium hadya yoki yirik sovg‘alar uchun ko‘proq kerak bo‘ladi. Kerakli miqdorni{" "}
        <Link href="/stars">Stars sahifasida</Link> tanlab, so‘mda to‘lashingiz mumkin. Stars qanday ishlashini{" "}
        <Link href="/blog/telegram-stars-qanday-ishlaydi">alohida maqolada</Link> o‘qing.
      </p>

      <h2 id="cheklov">Nimalarni qilib bo‘lmaydi?</h2>
      <p>
        Stars faqat Telegram ichida ishlaydi: ularni bank kartasiga yoki kriptoga to‘g‘ridan-to‘g‘ri chiqarib bo‘lmaydi
        (faqat kreatorlar Fragment orqali). Shuningdek, Stars boshqa platformalarga o‘tkazilmaydi. Stars va TON farqini{" "}
        <Link href="/blog/telegram-stars-vs-ton-qaysi-biri">bu yerda</Link> ko‘ring.
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
      За Telegram Stars можно: купить/подарить <strong>Telegram Premium</strong>, отправлять{" "}
      <strong>уникальные подарки</strong> (Gifts), оплачивать <strong>цифровые товары</strong> в ботах и Mini App,
      ставить <strong>Star Reactions</strong>, платить за <strong>платные сообщения/контент</strong>. Stars —
      универсальная единица оплаты внутри Telegram.
    </p>
  );
}

function RuBody() {
  return (
    <>
      <h2 id="nima">Что можно купить за Telegram Stars?</h2>
      <p>Stars — внутренняя валюта Telegram, используется для разных покупок внутри экосистемы. Основные направления:</p>
      <InfoGrid>
        <InfoCard emoji="⭐" title="Telegram Premium">
          За Stars можно подарить подписку Premium себе или другому человеку.
        </InfoCard>
        <InfoCard emoji="🎁" title="Уникальные подарки (Gifts)">
          Отправьте другу коллекционный подарок — анонимно или с поздравлением.
        </InfoCard>
        <InfoCard emoji="🤖" title="Оплата в ботах и Mini App">
          Цифровые товары в ботах, курсы, внутриигровые предметы и услуги.
        </InfoCard>
        <InfoCard emoji="😍" title="Star Reactions">
          Поставьте звёздную реакцию на пост — автор получает реальную ценность.
        </InfoCard>
        <InfoCard emoji="✉️" title="Платные сообщения">
          Установите плату за сообщения от пользователей не из контактов.
        </InfoCard>
        <InfoCard emoji="📺" title="Платный контент">
          Каналы могут продавать через Stars платные посты, видео или файлы.
        </InfoCard>
      </InfoGrid>

      <InlineCta text="Нужны Stars? В боте — в сумах за 10 секунд." />

      <h2 id="qancha">Сколько Stars понадобится?</h2>
      <p>
        Стоимость каждого товара в Stars показывается в интерфейсе Telegram. Для небольшого подарка или реакции хватит
        15–50 звёзд, для дарения Premium или крупных подарков нужно больше. Нужное количество можно выбрать на{" "}
        <Link href="/stars">странице Stars</Link> и оплатить в сумах. Как работают Stars — в{" "}
        <Link href="/blog/telegram-stars-qanday-ishlaydi">отдельной статье</Link>.
      </p>

      <h2 id="cheklov">Чего нельзя делать?</h2>
      <p>
        Stars работают только внутри Telegram: их нельзя напрямую вывести на карту или в крипту (только авторы — через
        Fragment). Также Stars нельзя перевести на другие платформы. Разницу Stars и TON смотрите{" "}
        <Link href="/blog/telegram-stars-vs-ton-qaysi-biri">здесь</Link>.
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
  datePublished: "2026-06-14",
  dateModified: "2026-06-14",
  keywords: [
    "telegram stars bilan nima qilish",
    "telegram stars nima sotib olish",
    "telegram stars nimaga ishlatiladi",
    "telegram stars premium",
    "telegram stars gifts",
  ],
  locales: {
    uz: {
      title: "Telegram Stars bilan nima sotib olish mumkin? — to‘liq ro‘yxat",
      excerpt:
        "Telegram Stars bilan nima qilish mumkin: Premium, noyob sovg‘alar, bot to‘lovlari, Star Reactions, pulli xabar va kontent. Stars nimaga ishlatilishi haqida.",
      metaTitle: "Telegram Stars bilan nima sotib olish mumkin?",
      metaDescription:
        "Telegram Stars bilan nima qilish mumkin: Premium sovg‘a, noyob Gifts, bot va Mini App to‘lovlari, Star Reactions, pulli xabar va kontent — to‘liq ro‘yxat.",
      answerTitle: "Qisqa javob",
      Answer: UzAnswer,
      Body: UzBody,
      ctaHeading: "Stars olib, sinab ko‘rasizmi?",
      ctaBody: "Botda kerakli miqdorni so‘mda to‘lang — yulduzlar 10 soniyada hisobingizga tushadi.",
      faq: [
        {
          question: "Stars bilan Premium olsa bo‘ladimi?",
          answer: "Ha, Stars yordamida o‘zingizga yoki boshqa odamga Telegram Premium obunani sovg‘a qilish mumkin.",
        },
        {
          question: "Stars bilan sovg‘a yuborish mumkinmi?",
          answer:
            "Ha, noyob Telegram sovg‘alarini Stars orqali yuborasiz — anonim yoki tabrik izohi bilan. Buni botda ham qilish mumkin.",
        },
        {
          question: "Eng kichik xarid uchun qancha Stars kerak?",
          answer: "Kichik reaksiya yoki sovg‘a uchun odatda 15–50 yulduz yetarli; aniq qiymat interfeysda ko‘rinadi.",
        },
        {
          question: "Stars’ni pulga aylantirsa bo‘ladimi?",
          answer:
            "Oddiy foydalanuvchi yo‘q. Faqat kreatorlar ishlab topgan Stars’ni Fragment orqali pulga (TON) chiqarishi mumkin.",
        },
        {
          question: "Stars qayerdan olinadi?",
          answer:
            "O‘zbekistonda eng oson yo‘l — @StarsPaymee_bot orqali so‘mda. Tafsilotlar «Stars qayerdan sotib olinadi» maqolasida.",
        },
      ],
    },
    ru: {
      title: "Что можно купить за Telegram Stars? — полный список",
      excerpt:
        "Что можно делать со Stars: Premium, уникальные подарки, оплата в ботах, Star Reactions, платные сообщения и контент. Для чего нужны Telegram Stars.",
      metaTitle: "Что можно купить за Telegram Stars?",
      metaDescription:
        "Что можно делать со Stars: подарить Premium, уникальные Gifts, оплата в ботах и Mini App, Star Reactions, платные сообщения и контент — полный список.",
      answerTitle: "Краткий ответ",
      Answer: RuAnswer,
      Body: RuBody,
      ctaHeading: "Купить Stars и попробовать?",
      ctaBody: "Оплатите нужное количество в сумах в боте — звёзды поступят на аккаунт за 10 секунд.",
      faq: [
        {
          question: "Можно ли купить Premium за Stars?",
          answer: "Да, за Stars можно подарить подписку Telegram Premium себе или другому человеку.",
        },
        {
          question: "Можно ли отправлять подарки за Stars?",
          answer:
            "Да, уникальные подарки Telegram отправляются за Stars — анонимно или с поздравлением. Это можно сделать и в боте.",
        },
        {
          question: "Сколько Stars нужно для самой мелкой покупки?",
          answer: "Для небольшой реакции или подарка обычно хватает 15–50 звёзд; точная стоимость видна в интерфейсе.",
        },
        {
          question: "Можно ли обналичить Stars?",
          answer:
            "Обычный пользователь — нет. Только авторы могут вывести заработанные Stars в деньги (TON) через Fragment.",
        },
        {
          question: "Откуда взять Stars?",
          answer:
            "В Узбекистане проще всего через @StarsPaymee_bot в сумах. Подробности — в статье «Где купить Stars».",
        },
      ],
    },
  },
};
