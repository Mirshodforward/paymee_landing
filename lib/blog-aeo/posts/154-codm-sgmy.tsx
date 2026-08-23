import { GAME_BY_CODE } from "@/lib/games";
import { makeGamePost } from "./_gampay-shared";

const game = GAME_BY_CODE.get("codm_sgmy")!;

export const post = makeGamePost({
  game,
  datePublished: "2026-08-23",
  keywords: [
    "codm cp sotib olish",
    "call of duty mobile cp uzbekistan",
    "cod points narxi",
    "купить cp codm",
    "call of duty mobile cp сумы",
    "код поинтс узбекистан",
  ],
  uz: {
    title: "Call of Duty Mobile CP sotib olish — so‘mda",
    excerpt:
      "CODM uchun CP ni so‘mda sotib olish — Garena SG/MY hisobi, Battle Pass va yetkazish.",
    metaTitle: "CODM CP sotib olish — O‘zbekistonda so‘mda",
    metaDescription:
      "Call of Duty Mobile CP ni O‘zbekistonda so‘mda sotib oling: UzCard, HUMO, Click, Payme. Garena SG/MY hisobi Player ID si kerak.",
    answer: (
      <p>
        <strong>Call of Duty Mobile CP</strong> ni so‘mda sotib olish uchun @StarsPaymee_bot dagi GamPay bo‘limida CODM ni tanlaysiz, Garena SG/MY hisobingizning Player ID sini kiritasiz va mahalliy karta bilan to‘laysiz. CP ~3 daqiqada tushadi.
      </p>
    ),
    intro: (
      <p>
        Call of Duty Mobile’da CP (COD Points) — Battle Pass, qurol chizmalari va sandiqlar uchun ishlatiladigan premium valyuta. Muhim jihat: GamPay orqali to‘ldirish <strong>Garena SG/MY</strong> mintaqasidagi hisoblar uchun ishlaydi. Agar hisobingiz boshqa mintaqada bo‘lsa, buyurtma berishdan oldin buni tekshirib oling — noto‘g‘ri mintaqadagi ID ga CP tushmaydi.
      </p>
    ),
    spendOn: [
      "Battle Pass va uning premium yo‘nalishi",
      "Qurol chizmalari (blueprint)",
      "Sandiqlar va Lucky Draw",
      "Operator skinlari",
      "Xaridlar uchun to‘plamlar",
    ],
    extraFaq: [
      { question: "Mintaqa nega muhim?", answer: "GamPay Garena SG/MY hisoblarini to‘ldiradi. Global yoki boshqa mintaqadagi hisobda ID mos kelmaydi." },
      { question: "Hisobim qaysi mintaqada ekanini qanday bilaman?", answer: "O‘yinga qaysi hisob orqali kirganingizga qarang — Garena kirish oynasi SG/MY ekanini bildiradi." },
    ],
  },
  ru: {
    title: "Купить CP для Call of Duty Mobile — в сумах",
    excerpt:
      "Как купить CP для CODM за сумы — аккаунт Garena SG/MY, Battle Pass и доставка.",
    metaTitle: "Купить CP для CODM — в Узбекистане, в сумах",
    metaDescription:
      "Купите CP для Call of Duty Mobile в Узбекистане за сумы: UzCard, HUMO, Click, Payme. Нужен Player ID аккаунта Garena SG/MY.",
    answer: (
      <p>
        Чтобы купить <strong>CP для Call of Duty Mobile</strong> за сумы, откройте GamPay в @StarsPaymee_bot, выберите CODM, введите Player ID аккаунта Garena SG/MY и оплатите локальной картой. CP поступят за ~3 минуты.
      </p>
    ),
    intro: (
      <p>
        В Call of Duty Mobile CP (COD Points) — премиальная валюта для Battle Pass, чертежей оружия и ящиков. Важный момент: пополнение через GamPay работает для аккаунтов региона <strong>Garena SG/MY</strong>. Если ваш аккаунт в другом регионе, проверьте это до заказа — на ID из чужого региона CP не придут.
      </p>
    ),
    spendOn: [
      "Battle Pass и его премиум-ветка",
      "Чертежи оружия (blueprint)",
      "Ящики и Lucky Draw",
      "Скины операторов",
      "Наборы для покупок",
    ],
    extraFaq: [
      { question: "Почему важен регион?", answer: "GamPay пополняет аккаунты Garena SG/MY. На глобальном или другом региональном аккаунте ID не совпадёт." },
      { question: "Как узнать регион аккаунта?", answer: "Посмотрите, через какой аккаунт вы входите в игру — окно входа Garena показывает SG/MY." },
    ],
  },
});
