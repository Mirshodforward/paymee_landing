import { GAME_BY_CODE } from "@/lib/games";
import { makeGamePost } from "./_gampay-shared";

const game = GAME_BY_CODE.get("deltaforce")!;

export const post = makeGamePost({
  game,
  datePublished: "2026-08-23",
  keywords: [
    "delta force coins sotib olish",
    "delta coins uzbekistan",
    "delta force uzbekistan",
    "купить delta coins",
    "delta force монеты сумы",
    "дельта форс узбекистан",
  ],
  uz: {
    title: "Delta Force coins sotib olish — O‘zbekistonda so‘mda",
    excerpt:
      "Delta Force uchun Delta Coins ni so‘mda sotib olish — Player ID, battle pass va operatorlar.",
    metaTitle: "Delta Force Delta Coins sotib olish — so‘mda",
    metaDescription:
      "Delta Force uchun Delta Coins ni O‘zbekistonda so‘mda sotib oling: UzCard, HUMO, Click, Payme. Faqat Player ID kerak.",
    answer: (
      <p>
        <strong>Delta Coins</strong> ni so‘mda sotib olish uchun @StarsPaymee_bot dagi GamPay bo‘limida Delta Force’ni tanlaysiz, Player ID ni kiritasiz va mahalliy karta bilan to‘laysiz. Coinlar ~5 daqiqada tushadi.
      </p>
    ),
    intro: (
      <p>
        Delta Force — taktik otishma sifatida tez auditoriya to‘plagan yangi o‘yin. Delta Coins uning premium valyutasi: battle pass, operator skinlari va qurol bezaklari shu orqali olinadi. O‘yin yangi bo‘lgani uchun mintaqamizda rasmiy to‘lov yo‘llari hali cheklangan — Player ID orqali to‘ldirish shu bo‘shliqni to‘ldiradi.
      </p>
    ),
    spendOn: [
      "Battle pass va uning bosqichlari",
      "Operator skinlari",
      "Qurol bezaklari va chizmalari",
      "Sezon to‘plamlari",
      "Bezak elementlari",
    ],
    extraFaq: [
      { question: "Delta Force yetkazish nega uzunroq?", answer: "Provayder tomonida ishlov berish biroz sekinroq — odatda ~5 daqiqa, ba’zan undan ham qisqa." },
      { question: "Player ID qayerda ko‘rinadi?", answer: "O‘yinda profilingizni oching — ID raqami o‘sha yerda ko‘rsatiladi." },
    ],
  },
  ru: {
    title: "Купить Delta Coins для Delta Force — в сумах",
    excerpt:
      "Как купить Delta Coins за сумы — Player ID, battle pass и операторы.",
    metaTitle: "Купить Delta Coins — в Узбекистане, в сумах",
    metaDescription:
      "Купите Delta Coins для Delta Force в Узбекистане за сумы: UzCard, HUMO, Click, Payme. Нужен только Player ID.",
    answer: (
      <p>
        Чтобы купить <strong>Delta Coins</strong> за сумы, откройте GamPay в @StarsPaymee_bot, выберите Delta Force, введите Player ID и оплатите локальной картой. Монеты поступят за ~5 минут.
      </p>
    ),
    intro: (
      <p>
        Delta Force — новый тактический шутер, быстро собравший аудиторию. Delta Coins — его премиальная валюта: через них покупают battle pass, скины операторов и украшения оружия. Игра новая, официальные способы оплаты в регионе пока ограничены — пополнение по Player ID закрывает этот пробел.
      </p>
    ),
    spendOn: [
      "Battle pass и его уровни",
      "Скины операторов",
      "Украшения и чертежи оружия",
      "Сезонные наборы",
      "Декоративные элементы",
    ],
    extraFaq: [
      { question: "Почему доставка Delta Force дольше?", answer: "Обработка на стороне поставщика чуть медленнее — обычно ~5 минут, иногда быстрее." },
      { question: "Где виден Player ID?", answer: "Откройте профиль в игре — номер ID показан там же." },
    ],
  },
});
