import { GAME_BY_CODE } from "@/lib/games";
import { makeGamePost } from "./_gampay-shared";

const game = GAME_BY_CODE.get("mlbb_global")!;

export const post = makeGamePost({
  game,
  datePublished: "2026-08-23",
  keywords: [
    "mobile legends olmos sotib olish",
    "mlbb olmos narxi",
    "mlbb diamonds uzbekistan",
    "купить алмазы mobile legends",
    "mlbb алмазы сумы",
    "алмазы млбб узбекистан",
  ],
  uz: {
    title: "Mobile Legends olmos sotib olish — O‘zbekistonda so‘mda",
    excerpt:
      "Mobile Legends olmoslarini so‘mda sotib olish — User ID va Server ID ni qanday topish, narx va yetkazish.",
    metaTitle: "Mobile Legends olmos sotib olish — so‘mda, tez",
    metaDescription:
      "MLBB olmoslarini O‘zbekistonda so‘mda sotib oling: UzCard, HUMO, Click, Payme. User ID va Server ID yetarli. ~1 daqiqada tushadi.",
    answer: (
      <p>
        <strong>Mobile Legends olmoslari</strong>ni so‘mda sotib olish uchun @StarsPaymee_bot dagi GamPay bo‘limida MLBB ni tanlaysiz, User ID va Server ID ni kiritasiz va mahalliy karta bilan to‘laysiz. Olmoslar hisobingizga ~1 daqiqada tushadi — bu GamPay’dagi eng tez yetkaziladigan o‘yin.
      </p>
    ),
    intro: (
      <p>
        Mobile Legends: Bang Bang O‘zbekistonda eng ko‘p o‘ynaladigan MOBA. Olmos (diamond) — o‘yinning asosiy valyutasi: qahramonlar, skinlar, Starlight a’zoligi va emblem to‘plamlari shu orqali olinadi. MLBB’da ID ikki qismdan iborat — User ID va qavs ichidagi Server ID; ikkalasini ham to‘g‘ri kiritish muhim, aks holda olmos boshqa hisobga tushib qolishi mumkin.
      </p>
    ),
    spendOn: [
      "Yangi qahramonlar va ularning skinlari",
      "Starlight a’zoligi",
      "Emblem to‘plamlari va urug‘lari",
      "Battle Pass",
      "Nomni o‘zgartirish va boshqa xizmatlar",
    ],
    extraFaq: [
      { question: "Server ID nima va qayerda turadi?", answer: "Profilingizda ID raqamidan keyin qavs ichida yozilgan raqam — masalan 123456789(2201). Qavs ichidagisi Server ID." },
      { question: "Olmos noto‘g‘ri hisobga tushib qolsa?", answer: "Buyurtmadan oldin bot ID ni ko‘rsatadi — o‘sha yerda tekshiring. Xato yuborilgan olmoslarni qaytarib bo‘lmaydi." },
    ],
  },
  ru: {
    title: "Купить алмазы Mobile Legends — в Узбекистане, в сумах",
    excerpt:
      "Как купить алмазы Mobile Legends за сумы — где найти User ID и Server ID, цена и доставка.",
    metaTitle: "Купить алмазы Mobile Legends — в сумах, быстро",
    metaDescription:
      "Купите алмазы MLBB в Узбекистане за сумы: UzCard, HUMO, Click, Payme. Нужны User ID и Server ID. Поступают за ~1 минуту.",
    answer: (
      <p>
        Чтобы купить <strong>алмазы Mobile Legends</strong> за сумы, откройте раздел GamPay в @StarsPaymee_bot, выберите MLBB, введите User ID и Server ID и оплатите локальной картой. Алмазы поступают за ~1 минуту — это самая быстрая доставка в GamPay.
      </p>
    ),
    intro: (
      <p>
        Mobile Legends: Bang Bang — самая популярная MOBA в Узбекистане. Алмазы (diamonds) — основная валюта игры: через них покупают героев, скины, подписку Starlight и наборы эмблем. ID в MLBB состоит из двух частей — User ID и Server ID в скобках; важно ввести обе, иначе алмазы могут уйти на чужой аккаунт.
      </p>
    ),
    spendOn: [
      "Новые герои и их скины",
      "Подписка Starlight",
      "Наборы и семена эмблем",
      "Battle Pass",
      "Смена имени и другие услуги",
    ],
    extraFaq: [
      { question: "Что такое Server ID и где он?", answer: "В профиле после номера ID в скобках указано число — например 123456789(2201). В скобках и есть Server ID." },
      { question: "Что если алмазы ушли не на тот аккаунт?", answer: "Перед заказом бот показывает введённый ID — проверьте его там. Ошибочно отправленные алмазы вернуть нельзя." },
    ],
  },
});
