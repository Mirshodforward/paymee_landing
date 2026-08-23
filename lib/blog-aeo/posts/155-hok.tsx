import { GAME_BY_CODE } from "@/lib/games";
import { makeGamePost } from "./_gampay-shared";

const game = GAME_BY_CODE.get("hok")!;

export const post = makeGamePost({
  game,
  datePublished: "2026-08-23",
  keywords: [
    "honor of kings token sotib olish",
    "hok token uzbekistan",
    "honor of kings uzbekistan",
    "купить токены honor of kings",
    "honor of kings сумы",
    "хонор оф кингс узбекистан",
  ],
  uz: {
    title: "Honor of Kings token sotib olish — O‘zbekistonda so‘mda",
    excerpt:
      "Honor of Kings tokenlarini so‘mda sotib olish — Player ID, qahramonlar va skinlar uchun.",
    metaTitle: "Honor of Kings token sotib olish — so‘mda",
    metaDescription:
      "Honor of Kings tokenlarini O‘zbekistonda so‘mda sotib oling: UzCard, HUMO, Click, Payme. Faqat Player ID kerak.",
    answer: (
      <p>
        <strong>Honor of Kings tokenlari</strong>ni so‘mda sotib olish uchun @StarsPaymee_bot dagi GamPay bo‘limida HOK ni tanlaysiz, Player ID ni kiritasiz va mahalliy karta bilan to‘laysiz. Tokenlar ~3 daqiqada hisobingizga tushadi.
      </p>
    ),
    intro: (
      <p>
        Honor of Kings — dunyodagi eng katta mobil MOBA’lardan biri va O‘zbekistonda ham auditoriyasi tez o‘smoqda. Token o‘yinning premium valyutasi bo‘lib, qahramonlar, skinlar va sezon o‘tishlari shu orqali olinadi. O‘yin global versiyasida to‘lov mahalliy kartalarni qabul qilmaydi, shuning uchun Player ID orqali to‘ldirish eng amaliy yechim.
      </p>
    ),
    spendOn: [
      "Yangi qahramonlar",
      "Qahramon skinlari va effektlari",
      "Sezon o‘tishi (battle pass)",
      "Sandiqlar va aylanmalar",
      "Bezak va profil elementlari",
    ],
    extraFaq: [
      { question: "Honor of Kings va Arena of Valor bir xilmi?", answer: "Yo‘q, bular alohida o‘yinlar. GamPay Honor of Kings uchun ishlaydi." },
      { question: "Player ID qayerda?", answer: "O‘yinda profilingizni oching — ID raqami ism ostida ko‘rsatiladi." },
    ],
  },
  ru: {
    title: "Купить токены Honor of Kings — в Узбекистане, в сумах",
    excerpt:
      "Как купить токены Honor of Kings за сумы — Player ID, герои и скины.",
    metaTitle: "Купить токены Honor of Kings — в сумах",
    metaDescription:
      "Купите токены Honor of Kings в Узбекистане за сумы: UzCard, HUMO, Click, Payme. Нужен только Player ID.",
    answer: (
      <p>
        Чтобы купить <strong>токены Honor of Kings</strong> за сумы, откройте GamPay в @StarsPaymee_bot, выберите HOK, введите Player ID и оплатите локальной картой. Токены поступят за ~3 минуты.
      </p>
    ),
    intro: (
      <p>
        Honor of Kings — одна из крупнейших мобильных MOBA в мире, и её аудитория в Узбекистане быстро растёт. Токены — премиальная валюта игры: через них покупают героев, скины и сезонные пропуска. В глобальной версии оплата не принимает локальные карты, поэтому пополнение по Player ID — самое практичное решение.
      </p>
    ),
    spendOn: [
      "Новые герои",
      "Скины героев и эффекты",
      "Сезонный пропуск (battle pass)",
      "Ящики и рулетки",
      "Украшения и элементы профиля",
    ],
    extraFaq: [
      { question: "Honor of Kings и Arena of Valor — это одно и то же?", answer: "Нет, это разные игры. GamPay работает с Honor of Kings." },
      { question: "Где найти Player ID?", answer: "Откройте профиль в игре — номер ID показан под именем." },
    ],
  },
});
