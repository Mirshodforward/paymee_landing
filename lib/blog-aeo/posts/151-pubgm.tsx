import { GAME_BY_CODE } from "@/lib/games";
import { makeGamePost } from "./_gampay-shared";

const game = GAME_BY_CODE.get("pubgm")!;

export const post = makeGamePost({
  game,
  datePublished: "2026-08-23",
  keywords: [
    "pubg mobile uc sotib olish",
    "pubg uc narxi",
    "pubg mobile uc uzbekistan",
    "купить uc pubg mobile",
    "pubg uc сумы",
    "uc pubg узбекистан",
  ],
  uz: {
    title: "PUBG Mobile UC sotib olish — O‘zbekistonda so‘mda",
    excerpt:
      "PUBG Mobile UC ni O‘zbek so‘mida, mahalliy karta bilan sotib olish — Player ID, narx va yetkazish bo‘yicha to‘liq qo‘llanma.",
    metaTitle: "PUBG Mobile UC sotib olish — so‘mda, kartasiz",
    metaDescription:
      "PUBG Mobile UC ni O‘zbekistonda so‘mda sotib oling: UzCard, HUMO, Click, Payme. Faqat Player ID kerak, parol so‘ralmaydi. ~2 daqiqada tushadi.",
    answer: (
      <p>
        <strong>PUBG Mobile UC</strong> ni O‘zbekistonda so‘mda sotib olish uchun xalqaro karta shart emas. @StarsPaymee_bot dagi GamPay bo‘limida PUBG Mobile’ni tanlaysiz, Player ID ni kiritasiz va UzCard, HUMO, Click yoki Payme bilan to‘laysiz — UC hisobingizga ~2 daqiqada tushadi.
      </p>
    ),
    intro: (
      <p>
        PUBG Mobile’dagi deyarli barcha xarid UC (Unknown Cash) orqali amalga oshiriladi: Royale Pass, sandiqlar, qurol va personaj skinlari. Rasmiy do‘konda to‘lov xalqaro karta yoki Google Play / App Store balansini talab qiladi, O‘zbekistondagi ko‘p o‘yinchida esa bunday karta yo‘q. Player ID orqali to‘ldirish shu to‘siqni butunlay chetlab o‘tadi — ilova do‘koni ham, valyuta konvertatsiyasi ham kerak emas.
      </p>
    ),
    spendOn: [
      "Royale Pass va uning Elite darajalari",
      "Qurol va personaj skinlari",
      "Sandiqlar (crate) va omad aylanmalari",
      "Mashina skinlari va parashyut dizaynlari",
      "Emote va kostyumlar",
    ],
    extraFaq: [
      { question: "Royale Pass uchun qancha UC kerak?", answer: "Elite Pass odatda 600 UC, Elite Plus 1800 UC atrofida. Aniq narx sezon boshida o‘yin ichida ko‘rsatiladi." },
      { question: "Player ID ni qayerdan topaman?", answer: "O‘yinni oching → profil → ismingiz ostida raqamli ID turadi. Uni nusxalab botga kiritasiz." },
    ],
  },
  ru: {
    title: "Купить UC для PUBG Mobile — в Узбекистане, в сумах",
    excerpt:
      "Как купить UC для PUBG Mobile в узбекских сумах локальной картой — Player ID, цена и доставка.",
    metaTitle: "Купить UC для PUBG Mobile — в сумах, без карты",
    metaDescription:
      "Купите UC для PUBG Mobile в Узбекистане в сумах: UzCard, HUMO, Click, Payme. Нужен только Player ID, пароль не спрашивают. Поступает за ~2 минуты.",
    answer: (
      <p>
        Чтобы купить <strong>UC для PUBG Mobile</strong> в Узбекистане за сумы, международная карта не нужна. В разделе GamPay в @StarsPaymee_bot выберите PUBG Mobile, введите Player ID и оплатите картой UzCard, HUMO, через Click или Payme — UC поступят на аккаунт за ~2 минуты.
      </p>
    ),
    intro: (
      <p>
        Почти все покупки в PUBG Mobile идут через UC (Unknown Cash): Royale Pass, ящики, скины оружия и персонажей. В официальном магазине оплата требует международной карты или баланса Google Play / App Store, а у многих игроков в Узбекистане такой карты нет. Пополнение по Player ID обходит этот барьер полностью — ни магазин приложений, ни конвертация валюты не нужны.
      </p>
    ),
    spendOn: [
      "Royale Pass и его Elite-уровни",
      "Скины оружия и персонажей",
      "Ящики (crate) и рулетки",
      "Скины машин и парашютов",
      "Эмоции и костюмы",
    ],
    extraFaq: [
      { question: "Сколько UC нужно на Royale Pass?", answer: "Elite Pass обычно около 600 UC, Elite Plus — около 1800 UC. Точная цена показывается в игре в начале сезона." },
      { question: "Где найти Player ID?", answer: "Откройте игру → профиль → под именем указан числовой ID. Скопируйте его и введите в боте." },
    ],
  },
});
