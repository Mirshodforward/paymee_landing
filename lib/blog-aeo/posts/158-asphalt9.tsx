import { GAME_BY_CODE } from "@/lib/games";
import { makeGamePost } from "./_gampay-shared";

const game = GAME_BY_CODE.get("asphalt9")!;

export const post = makeGamePost({
  game,
  datePublished: "2026-08-23",
  keywords: [
    "asphalt 9 token sotib olish",
    "asphalt 9 uzbekistan",
    "asphalt tokens narxi",
    "купить токены asphalt 9",
    "asphalt 9 сумы",
    "асфальт 9 узбекистан",
  ],
  uz: {
    title: "Asphalt 9 token sotib olish — O‘zbekistonda so‘mda",
    excerpt:
      "Asphalt 9 tokenlarini so‘mda sotib olish — Player ID, platforma tanlash va yetkazish.",
    metaTitle: "Asphalt 9 token sotib olish — so‘mda, tez",
    metaDescription:
      "Asphalt 9: Legends uchun tokenlarni O‘zbekistonda so‘mda sotib oling. Player ID va platformani tanlash kerak.",
    answer: (
      <p>
        <strong>Asphalt 9 tokenlari</strong>ni so‘mda sotib olish uchun @StarsPaymee_bot dagi GamPay bo‘limida Asphalt 9’ni tanlaysiz, Player ID ni kiritib platformani belgilaysiz va mahalliy karta bilan to‘laysiz. Tokenlar ~5 daqiqada tushadi.
      </p>
    ),
    intro: (
      <p>
        Asphalt 9: Legends — mobil poyga janrining eng mashhur o‘yini. Token uning premium valyutasi: mashinalar, chizmalar (blueprint) va Club Pass shu orqali olinadi. Bu o‘yinda bitta muhim farq bor — <strong>platformani ham tanlash kerak</strong>, chunki bir xil Player ID turli platformalarda boshqa hisobga tegishli bo‘lishi mumkin.
      </p>
    ),
    spendOn: [
      "Yangi mashinalar va ularning chizmalari",
      "Club Pass va sezon mukofotlari",
      "Import qismlari",
      "Yoqilg‘i va kredit to‘plamlari",
      "Bezak elementlari",
    ],
    extraFaq: [
      { question: "Nega platformani tanlash kerak?", answer: "Asphalt 9 iOS, Android va Windows’da alohida hisob tizimini ishlatadi — token to‘g‘ri platformaga yuborilishi kerak." },
      { question: "Platformani qayerdan bilaman?", answer: "O‘yinni qaysi qurilmada o‘ynasangiz, o‘sha platformani tanlang." },
    ],
  },
  ru: {
    title: "Купить токены Asphalt 9 — в Узбекистане, в сумах",
    excerpt:
      "Как купить токены Asphalt 9 за сумы — Player ID, выбор платформы и доставка.",
    metaTitle: "Купить токены Asphalt 9 — в сумах, быстро",
    metaDescription:
      "Купите токены Asphalt 9: Legends в Узбекистане за сумы. Нужны Player ID и выбор платформы.",
    answer: (
      <p>
        Чтобы купить <strong>токены Asphalt 9</strong> за сумы, откройте GamPay в @StarsPaymee_bot, выберите Asphalt 9, введите Player ID, укажите платформу и оплатите локальной картой. Токены поступят за ~5 минут.
      </p>
    ),
    intro: (
      <p>
        Asphalt 9: Legends — самая известная мобильная гоночная игра. Токены — её премиальная валюта: через них покупают машины, чертежи (blueprint) и Club Pass. Здесь есть важное отличие — <strong>нужно выбрать платформу</strong>, потому что один и тот же Player ID на разных платформах может принадлежать разным аккаунтам.
      </p>
    ),
    spendOn: [
      "Новые машины и их чертежи",
      "Club Pass и сезонные награды",
      "Импортные детали",
      "Наборы топлива и кредитов",
      "Декоративные элементы",
    ],
    extraFaq: [
      { question: "Зачем выбирать платформу?", answer: "Asphalt 9 использует раздельную систему аккаунтов на iOS, Android и Windows — токены должны уйти на нужную платформу." },
      { question: "Как понять свою платформу?", answer: "Выберите ту, на устройстве которой вы играете." },
    ],
  },
});
