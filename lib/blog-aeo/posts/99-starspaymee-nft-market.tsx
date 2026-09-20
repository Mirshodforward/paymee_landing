import { Link } from "@/i18n/navigation";
import { NftGiftMarketBoard } from "@/components/blog/nft-gift-market-board";
import { NftGiftSeriesNav } from "@/components/blog/nft-gift-series-nav";
import { InlineCta, KeyFacts, Notice, Toc } from "@/components/blog/aeo-blocks";
import type { AeoPost } from "@/lib/blog-aeo/types";

const SLUG = "starspaymee-nft-market";

function UzAnswer() {
  return (
    <p>
      <strong>Hozirgi holat:</strong> @StarsPaymee_bot orqali <strong>oddiy sovg‘alar, Stars va Premium</strong>{" "}
      so‘mda sotib olinadi. Sotuvdan tugagan <strong>kolleksion (NFT) sovg‘alar bot orqali yetkazilmaydi</strong>.
      Kolleksion nusxa olishning ishlaydigan yo‘li bitta: botdan yulduz olasiz va oddiy sovg‘ani Telegram ichida
      collectible darajasiga ko‘tarasiz.
    </p>
  );
}

function UzBody() {
  return (
    <>
      <Notice label="Yangilandi — 2026-yil sentabr">
        <p>
          Sotuvdan tugagan <b>kolleksion (NFT) sovg‘alar</b> hozir bot orqali yetkazilmaydi — oddiy sovg‘alar,
          Stars va Premium ishlashda davom etmoqda. Nima o‘zgargani va kolleksion sovg‘a olishning ishlaydigan
          yo‘li —{" "}
          <Link href="/blog/kolleksion-gift-bot-orqali-olinmaydi">alohida maqolada</Link>.
        </p>
      </Notice>

      <Toc label="Mundarija" items={[{ href: "#nima", label: "StarsPaymee" }, { href: "#xarid", label: "Xarid" }]} />
      <h2 id="nima">StarsPaymee nima?</h2>
      <p>
        Stars, Premium, oddiy sovg‘alar, o‘yin to‘ldirish va Steam hamyoni — bitta bot ichida, mahalliy to‘lov va
        o‘zbek tilidagi qo‘llab-quvvatlash bilan. Gift Market bo‘limi kolleksion sovg‘alar uchun edi va aynan shu
        qism hozir ishlamaydi.
      </p>
      <KeyFacts label="Hozir nima ishlaydi">
        <li>
          <b>Oddiy sovg‘alar</b> — doimiy katalogdan, so‘mda, bir necha daqiqada.
        </li>
        <li>
          <b>Stars va Premium</b> — avvalgidek, username orqali.
        </li>
        <li>
          <b>Kolleksion (NFT) sovg‘alar</b> — sotuvdan tugagan nusxalar bot orqali yetkazilmaydi.
        </li>
        <li>
          <b>Ishlaydigan yo‘l</b> — yulduz olib, sovg‘ani Telegram ichida{" "}
          <Link href="/blog/telegram-sovgani-collectible-upgrade">collectible darajasiga ko‘tarish</Link>.
        </li>
      </KeyFacts>
      <p>
        Quyidagi ro‘yxat — bot interfeysining <b>namunasi</b>: kolleksiya chiplari, saralash va narx qanday
        ko‘rinishini ko‘rsatadi. Bu sotuvdagi taklif emas.
      </p>
      <NftGiftMarketBoard locale="uz" />
      <h2 id="xarid">Hozir qanday xarid qilinadi?</h2>
      <ol>
        <li>@StarsPaymee_bot ni oching.</li>
        <li>
          Oddiy sovg‘a kerak bo‘lsa — sovg‘alar bo‘limidan tanlab, so‘mda to‘laysiz va qabul qiluvchi
          @username’ini ko‘rsatasiz.
        </li>
        <li>
          Kolleksion nusxa kerak bo‘lsa — avval kerakli miqdorda Stars olasiz, so‘ng Telegram ichida sovg‘ani
          upgrade qilasiz.
        </li>
      </ol>
      <InlineCta text="Botda sovg‘a yuborish — so‘mda, bir necha daqiqada." />
      <p>
        Xizmat holati va nima uchun o‘zgargani —{" "}
        <Link href="/blog/kolleksion-gift-bot-orqali-olinmaydi">alohida maqolada</Link>; sovg‘a turlari va narx
        tuzilishi esa{" "}
        <Link href="/blog/telegram-gifts-narxlari-royxati">«Gifts narxlari»</Link> da.
      </p>
      <NftGiftSeriesNav locale="uz" />
    </>
  );
}

function RuAnswer() {
  return (
    <p>
      <strong>Текущий статус:</strong> через @StarsPaymee_bot в сумах покупаются{" "}
      <strong>обычные подарки, Stars и Premium</strong>. Распроданные{" "}
      <strong>коллекционные (NFT) подарки через бота не доставляются</strong>. Рабочий путь к коллекционному
      экземпляру один: взять звёзды в боте и поднять обычный подарок до collectible внутри Telegram.
    </p>
  );
}
function RuBody() {
  return (
    <>
      <Notice label="Обновлено — сентябрь 2026">
        <p>
          Распроданные <b>коллекционные (NFT) подарки</b> сейчас через бота не выдаются — обычные подарки,
          Stars и Premium продолжают работать. Что изменилось и как всё же получить коллекционный подарок —{" "}
          <Link href="/blog/kolleksion-gift-bot-orqali-olinmaydi">в отдельной статье</Link>.
        </p>
      </Notice>

      <p>
        Ниже — <b>образец</b> интерфейса бота: как выглядят коллекции, сортировка и цена. Это не действующее
        предложение.
      </p>
      <NftGiftMarketBoard locale="ru" />
      <h2 id="xarid">Как купить сейчас</h2>
      <ol>
        <li>Откройте @StarsPaymee_bot.</li>
        <li>Обычный подарок — выбираете в разделе подарков, платите в сумах и указываете @username получателя.</li>
        <li>
          Коллекционный экземпляр — сначала берёте Stars, затем делаете upgrade подарка внутри Telegram:{" "}
          <Link href="/blog/telegram-sovgani-collectible-upgrade">руководство по upgrade</Link>.
        </li>
      </ol>
      <NftGiftSeriesNav locale="ru" />
    </>
  );
}

const faqUz = [
  {
    question: "StarsPaymee nima?",
    answer:
      "Telegram Stars, Premium, oddiy sovg‘alar, o‘yin to‘ldirish va Steam hamyoni — bitta bot ichida, so‘mda to‘lov bilan.",
  },
  {
    question: "Kolleksion (NFT) sovg‘ani bot orqali olsa bo‘ladimi?",
    answer:
      "Hozir yo‘q. Sotuvdan tugagan kolleksion nusxalarni yetkazish to‘xtatildi. Ishlaydigan yo‘l — botdan yulduz olib, oddiy sovg‘ani Telegram ichida collectible darajasiga ko‘tarish.",
  },
  {
    question: "Unda bot orqali qanday sovg‘a olinadi?",
    answer:
      "Doimiy katalogdagi oddiy sovg‘alar — ular so‘mda, mahalliy karta bilan sotib olinadi va qabul qiluvchi @username’iga bir necha daqiqada yetkaziladi.",
  },
  { question: "To‘lov qanday amalga oshiriladi?", answer: "UzCard, HUMO, Click, Payme yoki Uzum — so‘mda." },
  {
    question: "Sahifadagi narxlar nima?",
    answer:
      "Ular bot interfeysining namunasi — kolleksiya va saralash qanday ko‘rinishini ko‘rsatadi, sotuvdagi taklif emas.",
  },
];

const faqRu = [
  {
    question: "Что такое StarsPaymee?",
    answer:
      "Stars, Premium, обычные подарки, пополнение игр и кошелёк Steam — в одном боте, с оплатой в сумах.",
  },
  {
    question: "Можно ли получить коллекционный (NFT) подарок через бота?",
    answer:
      "Сейчас нет: доставку распроданных коллекционных экземпляров остановили. Рабочий путь — взять звёзды в боте и поднять обычный подарок до collectible внутри Telegram.",
  },
  {
    question: "Какие подарки тогда доступны через бота?",
    answer:
      "Обычные подарки из постоянного каталога — в сумах, местной картой, с доставкой на @username получателя за несколько минут.",
  },
  {
    question: "Что за цены показаны на странице?",
    answer: "Это образец интерфейса бота, а не действующее предложение.",
  },
];

export const post: AeoPost = {
  slug: SLUG,
  category: "Gifts",
  type: "cta",
  datePublished: "2026-07-29",
  dateModified: "2026-09-20",
  keywords: [
    "StarsPaymee NFT",
    "gift market uzbekistan",
    "telegram nft uzbekistan",
    "telegram collectibles uzbekistan",
    "telegram gifts shop",
  ],
  locales: {
    uz: {
      title: "StarsPaymee Gift Market — hozirgi holat va ishlaydigan yo‘l",
      excerpt:
        "Botda nima ishlaydi: oddiy sovg‘alar, Stars va Premium so‘mda. Sotuvdan tugagan kolleksion sovg‘alar yetkazilmaydi — kolleksion nusxa upgrade orqali olinadi.",
      metaTitle: "StarsPaymee Gift Market — xizmat holati 2026",
      metaDescription:
        "StarsPaymee Gift Market hozir qanday ishlaydi: oddiy sovg‘alar, Stars va Premium so‘mda; kolleksion (NFT) sovg‘alar bot orqali yetkazilmaydi va ishlaydigan yo‘l qaysi.",
      answerTitle: "Qisqa javob",
      Answer: UzAnswer,
      Body: UzBody,
      ctaHeading: "Botda sovg‘a yuborish",
      ctaBody: "@StarsPaymee_bot — oddiy sovg‘alar, Stars va Premium so‘mda, bir necha daqiqada.",
      faq: faqUz,
    },
    ru: {
      title: "StarsPaymee Gift Market — текущий статус и рабочий путь",
      excerpt:
        "Что работает в боте: обычные подарки, Stars и Premium в сумах. Распроданные коллекционные подарки не доставляются — коллекционный экземпляр получают через upgrade.",
      metaTitle: "StarsPaymee Gift Market — статус услуги 2026",
      metaDescription:
        "Как сейчас работает Gift Market StarsPaymee: обычные подарки, Stars и Premium в сумах; коллекционные (NFT) подарки через бота не доставляются.",
      answerTitle: "Краткий ответ",
      Answer: RuAnswer,
      Body: RuBody,
      ctaHeading: "Отправить подарок в боте",
      ctaBody: "@StarsPaymee_bot — обычные подарки, Stars и Premium в сумах, за несколько минут.",
      faq: faqRu,
    },
  },
};
