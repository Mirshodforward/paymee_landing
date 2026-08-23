import { GAME_BY_CODE } from "@/lib/games";
import { makeGamePost } from "./_gampay-shared";

const game = GAME_BY_CODE.get("bigo")!;

export const post = makeGamePost({
  game,
  datePublished: "2026-08-23",
  keywords: [
    "bigo live olmos sotib olish",
    "bigo diamonds uzbekistan",
    "bigo live uzbekistan",
    "купить алмазы bigo live",
    "bigo алмазы сумы",
    "биго лайв узбекистан",
  ],
  uz: {
    title: "Bigo Live olmos sotib olish — O‘zbekistonda so‘mda",
    excerpt:
      "Bigo Live olmoslarini so‘mda sotib olish — Bigo ID, sovg‘alar va daraja haqida.",
    metaTitle: "Bigo Live olmos sotib olish — so‘mda, tez",
    metaDescription:
      "Bigo Live olmoslarini O‘zbekistonda so‘mda sotib oling: UzCard, HUMO, Click, Payme. Faqat Bigo ID kerak.",
    answer: (
      <p>
        <strong>Bigo Live olmoslari</strong>ni so‘mda sotib olish uchun @StarsPaymee_bot dagi GamPay bo‘limida Bigo Live’ni tanlaysiz, Bigo ID ni kiritasiz va mahalliy karta bilan to‘laysiz. Olmoslar ~3 daqiqada tushadi.
      </p>
    ),
    intro: (
      <p>
        Bigo Live — jonli efir platformasi, bu yerda olmos (diamond) tomoshabin va streamer o‘rtasidagi asosiy valyuta. Olmoslar orqali sovg‘a yuboriladi, o‘z darajangiz oshadi va streamer daromadi shakllanadi. Ilova ichidagi xarid Google Play yoki App Store balansini talab qiladi; Bigo ID orqali to‘ldirish esa mahalliy karta bilan to‘g‘ridan-to‘g‘ri ishlaydi.
      </p>
    ),
    spendOn: [
      "Streamerlarga sovg‘a yuborish",
      "Profil darajasini oshirish",
      "VIP va maxsus belgilar",
      "Efir ichidagi effektlar",
      "Turnir va reyting ishtiroki",
    ],
    extraFaq: [
      { question: "Bigo ID ni qayerdan topaman?", answer: "Ilovada «Me» bo‘limini oching — ismingiz ostida Bigo ID raqami turadi." },
      { question: "Olmos va Bean farqi nima?", answer: "Olmos — siz sotib oladigan valyuta; Bean — streamer sovg‘alardan oladigan va yechib oladigan valyuta." },
    ],
  },
  ru: {
    title: "Купить алмазы Bigo Live — в Узбекистане, в сумах",
    excerpt:
      "Как купить алмазы Bigo Live за сумы — Bigo ID, подарки и уровень.",
    metaTitle: "Купить алмазы Bigo Live — в сумах, быстро",
    metaDescription:
      "Купите алмазы Bigo Live в Узбекистане за сумы: UzCard, HUMO, Click, Payme. Нужен только Bigo ID.",
    answer: (
      <p>
        Чтобы купить <strong>алмазы Bigo Live</strong> за сумы, откройте GamPay в @StarsPaymee_bot, выберите Bigo Live, введите Bigo ID и оплатите локальной картой. Алмазы поступят за ~3 минуты.
      </p>
    ),
    intro: (
      <p>
        Bigo Live — платформа прямых эфиров, где алмазы (diamonds) служат основной валютой между зрителем и стримером. За алмазы отправляют подарки, растёт ваш уровень и формируется доход стримера. Покупка внутри приложения требует баланса Google Play или App Store; пополнение по Bigo ID работает напрямую с локальной картой.
      </p>
    ),
    spendOn: [
      "Подарки стримерам",
      "Повышение уровня профиля",
      "VIP и особые значки",
      "Эффекты в эфире",
      "Участие в турнирах и рейтингах",
    ],
    extraFaq: [
      { question: "Где найти Bigo ID?", answer: "Откройте раздел «Me» в приложении — под именем указан номер Bigo ID." },
      { question: "Чем алмазы отличаются от Bean?", answer: "Алмазы — валюта, которую покупаете вы; Bean — то, что стример получает с подарков и выводит." },
    ],
  },
});
