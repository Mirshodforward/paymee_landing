import { GAME_BY_CODE } from "@/lib/games";
import { makeGamePost } from "./_gampay-shared";

const game = GAME_BY_CODE.get("magic_chess_gogo")!;

export const post = makeGamePost({
  game,
  datePublished: "2026-08-23",
  keywords: [
    "magic chess go go olmos",
    "mcgg olmos sotib olish",
    "magic chess uzbekistan",
    "купить алмазы magic chess",
    "mcgg алмазы сумы",
    "мэджик чесс узбекистан",
  ],
  uz: {
    title: "Magic Chess: Go Go olmos sotib olish — so‘mda",
    excerpt:
      "Magic Chess: Go Go olmoslarini so‘mda sotib olish — User ID, Server ID va yetkazish.",
    metaTitle: "Magic Chess Go Go olmos sotib olish — so‘mda",
    metaDescription:
      "Magic Chess: Go Go olmoslarini O‘zbekistonda so‘mda sotib oling. User ID va Server ID kerak, to‘lov UzCard va HUMO bilan.",
    answer: (
      <p>
        <strong>Magic Chess: Go Go olmoslari</strong>ni so‘mda sotib olish uchun @StarsPaymee_bot dagi GamPay bo‘limida MCGG ni tanlaysiz, User ID va Server ID ni kiritasiz va mahalliy karta bilan to‘laysiz. Olmoslar ~2 daqiqada tushadi.
      </p>
    ),
    intro: (
      <p>
        Magic Chess: Go Go — Mobile Legends ekotizimidan o‘sib chiqqan auto-chess o‘yini va alohida ilova sifatida chiqarilgan. Olmos bu yerda ham asosiy valyuta: komandirlar, doskalar va sezon o‘tishlari shu orqali olinadi. ID tuzilishi MLBB bilan bir xil — User ID va qavs ichidagi Server ID.
      </p>
    ),
    spendOn: [
      "Komandirlar (commander) va ularning skinlari",
      "Doska va fon dizaynlari",
      "Magic Pass sezon o‘tishi",
      "Emote va effektlar",
      "Sandiqlar",
    ],
    extraFaq: [
      { question: "MCGG olmoslari MLBB bilan umumiymi?", answer: "Yo‘q. Magic Chess: Go Go alohida ilova va uning balansi ham alohida." },
      { question: "Server ID ni qayerdan olaman?", answer: "Profilda ID raqamidan keyin qavs ichida turadi — MLBB dagidek." },
    ],
  },
  ru: {
    title: "Купить алмазы Magic Chess: Go Go — в сумах",
    excerpt:
      "Как купить алмазы Magic Chess: Go Go за сумы — User ID, Server ID и доставка.",
    metaTitle: "Купить алмазы Magic Chess Go Go — в сумах",
    metaDescription:
      "Купите алмазы Magic Chess: Go Go в Узбекистане за сумы. Нужны User ID и Server ID, оплата картами UzCard и HUMO.",
    answer: (
      <p>
        Чтобы купить <strong>алмазы Magic Chess: Go Go</strong> за сумы, откройте GamPay в @StarsPaymee_bot, выберите MCGG, введите User ID и Server ID и оплатите локальной картой. Алмазы поступят за ~2 минуты.
      </p>
    ),
    intro: (
      <p>
        Magic Chess: Go Go — авточесс, выросший из экосистемы Mobile Legends и выпущенный отдельным приложением. Алмазы здесь тоже основная валюта: через них покупают командиров, доски и сезонные пропуска. Структура ID такая же, как в MLBB — User ID и Server ID в скобках.
      </p>
    ),
    spendOn: [
      "Командиры и их скины",
      "Дизайны досок и фонов",
      "Сезонный пропуск Magic Pass",
      "Эмоции и эффекты",
      "Ящики",
    ],
    extraFaq: [
      { question: "Алмазы MCGG общие с MLBB?", answer: "Нет. Magic Chess: Go Go — отдельное приложение с отдельным балансом." },
      { question: "Где взять Server ID?", answer: "В профиле после номера ID в скобках — так же, как в MLBB." },
    ],
  },
});
