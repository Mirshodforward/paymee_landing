import { GAME_BY_CODE } from "@/lib/games";
import { makeGamePost } from "./_gampay-shared";

const game = GAME_BY_CODE.get("freefire_global")!;

export const post = makeGamePost({
  game,
  datePublished: "2026-08-23",
  keywords: [
    "free fire olmos sotib olish",
    "free fire diamonds uzbekistan",
    "ff olmos narxi",
    "купить алмазы free fire",
    "free fire алмазы сумы",
    "фри фаер алмазы узбекистан",
  ],
  uz: {
    title: "Free Fire olmos sotib olish — O‘zbekistonda so‘mda",
    excerpt:
      "Free Fire olmoslarini so‘mda sotib olish — Player ID, Elite Pass va yetkazish bo‘yicha qo‘llanma.",
    metaTitle: "Free Fire olmos sotib olish — so‘mda, kartasiz",
    metaDescription:
      "Free Fire olmoslarini O‘zbekistonda so‘mda sotib oling: UzCard, HUMO, Click, Payme. Faqat Player ID kerak. ~2 daqiqada tushadi.",
    answer: (
      <p>
        <strong>Free Fire olmoslari</strong>ni so‘mda sotib olish uchun @StarsPaymee_bot dagi GamPay bo‘limida Free Fire’ni tanlaysiz, Player ID ni kiritasiz va UzCard, HUMO, Click yoki Payme bilan to‘laysiz. Olmoslar ~2 daqiqada hisobingizga tushadi.
      </p>
    ),
    intro: (
      <p>
        Free Fire — kuchsizroq telefonlarda ham yaxshi ishlagani uchun O‘zbekistonda keng tarqalgan battle royale. Olmos (diamond) o‘yinning premium valyutasi: Elite Pass, personajlar, qurol to‘plamlari va Diamond Royale aylanmalari shu orqali olinadi. Rasmiy to‘lov usullari mintaqamizda cheklangani uchun Player ID orqali to‘ldirish eng oson yo‘l bo‘lib qolmoqda.
      </p>
    ),
    spendOn: [
      "Elite Pass va uning bosqichlari",
      "Personajlar va ularning ko‘nikmalari",
      "Qurol to‘plamlari (bundle)",
      "Diamond Royale va Weapon Royale aylanmalari",
      "Uy hayvonlari (pet) va kostyumlar",
    ],
    extraFaq: [
      { question: "Elite Pass uchun qancha olmos kerak?", answer: "Odatda 499 olmos, Elite Pass Plus esa 999 atrofida. Aniq narx sezonga qarab o‘zgaradi." },
      { question: "Player ID ni qayerdan ko‘raman?", answer: "O‘yinda profilingizni oching — ismingiz ostida 9-10 xonali raqam turadi." },
    ],
  },
  ru: {
    title: "Купить алмазы Free Fire — в Узбекистане, в сумах",
    excerpt:
      "Как купить алмазы Free Fire за сумы — Player ID, Elite Pass и доставка.",
    metaTitle: "Купить алмазы Free Fire — в сумах, без карты",
    metaDescription:
      "Купите алмазы Free Fire в Узбекистане за сумы: UzCard, HUMO, Click, Payme. Нужен только Player ID. Поступают за ~2 минуты.",
    answer: (
      <p>
        Чтобы купить <strong>алмазы Free Fire</strong> за сумы, откройте GamPay в @StarsPaymee_bot, выберите Free Fire, введите Player ID и оплатите через UzCard, HUMO, Click или Payme. Алмазы поступят за ~2 минуты.
      </p>
    ),
    intro: (
      <p>
        Free Fire широко распространён в Узбекистане, потому что хорошо идёт даже на слабых телефонах. Алмазы — премиальная валюта игры: через них покупают Elite Pass, персонажей, наборы оружия и крутят Diamond Royale. Официальные способы оплаты в регионе ограничены, поэтому пополнение по Player ID остаётся самым простым путём.
      </p>
    ),
    spendOn: [
      "Elite Pass и его уровни",
      "Персонажи и их навыки",
      "Наборы оружия (bundle)",
      "Рулетки Diamond Royale и Weapon Royale",
      "Питомцы и костюмы",
    ],
    extraFaq: [
      { question: "Сколько алмазов нужно на Elite Pass?", answer: "Обычно 499 алмазов, Elite Pass Plus — около 999. Точная цена зависит от сезона." },
      { question: "Где посмотреть Player ID?", answer: "Откройте профиль в игре — под именем указано 9–10-значное число." },
    ],
  },
});
