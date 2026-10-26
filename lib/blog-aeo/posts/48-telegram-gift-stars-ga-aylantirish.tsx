import { Link } from "@/i18n/navigation";
import {
  CompareTable,
  InfoCard,
  InfoGrid,
  InlineCta,
  KeyFacts,
  Notice,
  Sources,
  Step,
  Steps,
  Toc,
} from "@/components/blog/aeo-blocks";
import { STARS_PER_UNIT_GATEWAY_UZS, STARS_PER_UNIT_UZS } from "@/lib/products";
import type { AeoPost } from "@/lib/blog-aeo/types";

const SLUG = "telegram-gift-stars-ga-aylantirish";

/**
 * Telegram sovg'asini Stars'ga aylantirish — qanday qilinadi, qancha qaytadi,
 * 7 kunlik muddat, kolleksion sovg'ani sotish.
 *
 * QAYTA YOZILDI (2026-10-26): avvalgi versiya yupqa edi (uz/ru, en yo'q,
 * «bir necha kun/hafta» kabi noaniq da'volar, osilgan upgrade havolasi).
 * Slug himoyalangan («gift/konvertatsiya» — lib/blog/protected.ts) — yangi slug
 * ochilmadi, chunki u shu niyatda raqobatlashardi.
 *
 * FAKTLAR TEKSHIRILGAN (2026-10-26):
 * - core.telegram.org/api/gifts: konvertatsiya faqat olinganiga
 *   stargifts_convert_period_max soniya bo'lmagan va convert_stars ≠ 0 bo'lsa;
 *   auksion sovg'alari aylantirilmaydi; sotuvda sotuvchiga
 *   price × stars_stargift_resale_commission_permille / 1000; can_resell_at;
 *   xarid taklifi rezervi va qaytishi.
 * - core.telegram.org/constructor/starGift: «convert_stars will be equal to stars
 *   only if the gift was bought using recently bought Telegram Stars, otherwise it
 *   will be less than stars». constructor/savedStarGift: «For non-collectible
 *   gifts…». method/payments.convertStarGift: «permanently destroy the gift».
 *   (api/gifts sharh sahifasidagi «har doim kam» iborasi konstruktorga zid —
 *   aniqrog'i konstruktor, shu yozilgan.)
 * - core.telegram.org/api/config (standart): stargifts_convert_period_max 604800
 *   (7 kun), resale min 125 / max 100000 Stars, komissiya 800 (sotuvchiga 80%),
 *   Gram'da 900 (90%).
 * - telegram.org/blog/gift-marketplace-and-more (2025-05-08): Sell / Sale / Unlist.
 * - telegram.org/tos/stars §4: sotib olingan Stars sotilmaydi/yechilmaydi;
 *   aylantirilgan sovg'alar Stars'i kreatorlar shartlariga «where applicable».
 * - telegram.org/faq: sovg'ani Stars'ga aylantirish profil reytingini pasaytiradi.
 * Jadvaldagi 85% kabi raqamlar — shartli misol, Telegram tarifi emas.
 */

type Locale = "uz" | "ru" | "en";
const fmt = (n: number, locale: Locale) =>
  locale === "en" ? n.toLocaleString("en-US") : n.toLocaleString("ru-RU").replace(/ /g, " ");
const RESALE_SHARE = 0.8; // stars_stargift_resale_commission_permille = 800

function TypeTable({ locale }: { locale: Locale }) {
  const c = {
    uz: {
      h: ["Sovg‘a", "Stars’ga aylantirish", "Stars olish yo‘li"],
      r: [
        ["Oddiy sovg‘a, olinganiga 7 kun to‘lmagan", "Mumkin", "Sovg‘ani ochib «Convert to Stars»"],
        ["Oddiy sovg‘a, 7 kundan oshgan", "Yo‘q", "Faqat profilda saqlash"],
        ["Konvertatsiya qiymati 0 bo‘lgan sovg‘a", "Yo‘q", "—"],
        ["Kolleksion (upgrade qilingan, NFT) sovg‘a", "Yo‘q", "Marketplace’da sotish — Stars yoki Gram’ga"],
        ["Auksionda olingan sovg‘a", "Yo‘q", "Telegram hujjatiga ko‘ra Stars’ga qaytarilmaydi"],
      ],
    },
    ru: {
      h: ["Подарок", "Конвертация в Stars", "Как получить Stars"],
      r: [
        ["Обычный подарок, получен менее 7 дней назад", "Можно", "Открыть подарок и нажать «Convert to Stars»"],
        ["Обычный подарок, прошло больше 7 дней", "Нет", "Только хранить в профиле"],
        ["Подарок с нулевой стоимостью конвертации", "Нет", "—"],
        ["Коллекционный (улучшенный, NFT) подарок", "Нет", "Продать на маркетплейсе — за Stars или Gram"],
        ["Подарок с аукциона", "Нет", "По документации Telegram в Stars не конвертируется"],
      ],
    },
    en: {
      h: ["Gift", "Convert to Stars", "How to get Stars"],
      r: [
        ["Regular gift, received less than 7 days ago", "Yes", "Open the gift and tap “Convert to Stars”"],
        ["Regular gift, more than 7 days ago", "No", "Keep it on your profile only"],
        ["A gift with a conversion value of 0", "No", "—"],
        ["Collectible (upgraded, NFT) gift", "No", "Sell it on the marketplace — for Stars or Gram"],
        ["A gift won at an auction", "No", "Per Telegram’s documentation it cannot be converted"],
      ],
    },
  }[locale];
  return <CompareTable headers={c.h} rows={c.r.map(([a, b, d]) => [<strong key="a">{a}</strong>, b, d])} />;
}

function LossTable({ locale }: { locale: Locale }) {
  const h = {
    uz: ["Boshlang‘ich narx", "Oynadagi qaytim", "Yo‘qotilgan Stars", "Yo‘qotish"],
    ru: ["Исходная цена", "Возврат в окне", "Потеряно Stars", "Потеря"],
    en: ["Original price", "Amount shown", "Stars lost", "Loss"],
  }[locale];
  const pairs: Array<[number, number]> = [
    [100, 100],
    [100, 85],
    [500, 425],
    [1000, 850],
    [1000, 800],
  ];
  return (
    <CompareTable
      headers={h}
      rows={pairs.map(([price, back]) => [
        <strong key="p">{`${fmt(price, locale)} ⭐`}</strong>,
        `${fmt(back, locale)} ⭐`,
        `${fmt(price - back, locale)} ⭐`,
        `${Math.round(((price - back) / price) * 100)}%`,
      ])}
    />
  );
}

function ResaleTable({ locale }: { locale: Locale }) {
  const h = {
    uz: ["Sotuv narxi", "Sizga qoladi (80%)"],
    ru: ["Цена продажи", "Вам остаётся (80%)"],
    en: ["Sale price", "You keep (80%)"],
  }[locale];
  return (
    <CompareTable
      headers={h}
      rows={[125, 500, 1000, 5000].map((n) => [
        <strong key="n">{`${fmt(n, locale)} ⭐`}</strong>,
        `${fmt(Math.round(n * RESALE_SHARE), locale)} ⭐`,
      ])}
    />
  );
}

function DecisionTable({ locale }: { locale: Locale }) {
  const c = {
    uz: {
      h: ["Holatingiz", "Nima qilish ma’qul"],
      r: [
        ["Hozir Stars kerak", "Oynadagi aniq summani tekshiring — 7 kun ichida qaror qiling"],
        ["Sovg‘a xotira sifatida qadrli", "Saqlang — konvertatsiya qaytarilmaydi"],
        ["Kolleksion sovg‘angiz bor", "Bozor narxi va sizga qoladigan 80% ni solishtiring"],
        ["Faqat balans to‘ldirmoqchisiz", "Stars’ni to‘g‘ridan-to‘g‘ri olish odatda arzonroq"],
      ],
    },
    ru: {
      h: ["Ваша ситуация", "Что разумнее"],
      r: [
        ["Stars нужны сейчас", "Проверьте точную сумму в окне — решите в течение 7 дней"],
        ["Подарок дорог как память", "Оставьте — конвертацию не отменить"],
        ["У вас коллекционный подарок", "Сравните рыночную цену и 80%, которые вам останутся"],
        ["Нужно просто пополнить баланс", "Купить Stars напрямую обычно дешевле"],
      ],
    },
    en: {
      h: ["Your situation", "What makes sense"],
      r: [
        ["You need Stars now", "Check the exact amount in the dialog — decide within 7 days"],
        ["The gift matters to you as a keepsake", "Keep it — conversion cannot be undone"],
        ["You own a collectible gift", "Compare the market price with the 80% you would keep"],
        ["You just want to top up your balance", "Buying Stars directly is usually cheaper"],
      ],
    },
  }[locale];
  return <CompareTable headers={c.h} rows={c.r.map(([a, b]) => [<strong key="a">{a}</strong>, b])} />;
}

const SRC = {
  gifts: "https://core.telegram.org/api/gifts",
  ctor: "https://core.telegram.org/constructor/starGift",
  method: "https://core.telegram.org/method/payments.convertStarGift",
  config: "https://core.telegram.org/api/config",
  market: "https://telegram.org/blog/gift-marketplace-and-more",
  tos: "https://telegram.org/tos/stars",
  faq: "https://telegram.org/faq",
};

/* ---------------- UZ ---------------- */
function UzAnswer() {
  return (
    <p>
      Ha — oddiy (kolleksion bo‘lmagan) sovg‘ani olganingizdan keyin <b>7 kun ichida</b> Stars’ga aylantirish mumkin:
      sovg‘a butunlay yo‘q qilinadi, Stars uni qabul qilgan sizning balansingizga qo‘shiladi, amal qaytarilmaydi.
      Qancha qaytishi sovg‘a qanday Stars bilan olinganiga bog‘liq: yaqinda sotib olingan Stars bilan olingan bo‘lsa —
      narxiga teng, aks holda kamroq; aniq summa tasdiqlash oynasida ko‘rinadi. Kolleksion va auksion sovg‘alari
      aylantirilmaydi — kolleksion sovg‘ani marketplace’da sotish mumkin, standart sharoitda narxning 80% sizga qoladi.
    </p>
  );
}

function UzBody() {
  return (
    <>
      <Toc
        label="Mundarija"
        items={[
          { href: "#qaysi", label: "Qaysi sovg‘alarni Stars’ga aylantirish mumkin" },
          { href: "#qanday", label: "Qanday aylantiriladi: 5 qadam" },
          { href: "#qancha", label: "Qancha Stars qaytadi" },
          { href: "#hisob", label: "Yo‘qotishni hisoblash" },
          { href: "#muddat", label: "7 kunlik muddat" },
          { href: "#tugma", label: "«Convert to Stars» tugmasi ko‘rinmasa" },
          { href: "#kolleksion", label: "Kolleksion sovg‘a: sotish va komissiya" },
          { href: "#qaror", label: "Saqlash yoki aylantirish" },
          { href: "#pul", label: "Sovg‘adan olingan Stars kartaga tushadimi" },
        ]}
      />

      <h2 id="qaysi">Qaysi sovg‘alarni Stars’ga aylantirish mumkin</h2>
      <p>
        Avval sovg‘a turini ajrating: oddiy sovg‘a Stars’ga aylantiriladi, kolleksion (NFT) sovg‘a esa sotiladi. Telegram
        hujjatiga ko‘ra konvertatsiya faqat kolleksion bo‘lmagan sovg‘alar uchun, olinganiga belgilangan muddat o‘tmagan
        va sovg‘aning konvertatsiya qiymati noldan katta bo‘lsa ishlaydi.
      </p>
      <TypeTable locale="uz" />
      <Notice label="Muhim farq">
        Stars’ga aylantirishda xaridor qidirmaysiz — Stars darhol balansga tushadi. Kolleksion sovg‘ani sotishda esa uni
        boshqa odam sotib olishi kerak: sotuvga qo‘yish hali sotilgan degani emas.
      </Notice>

      <h2 id="qanday">Qanday aylantiriladi: 5 qadam</h2>
      <Steps>
        <Step title="1. Sovg‘ani toping">
          Profilingiz → «Sovg‘alar» (Gifts) bo‘limi yoki sovg‘a kelgan chatdagi xabar.
        </Step>
        <Step title="2. Sovg‘ani oching">Kerakli sovg‘ani bosing — uning ma’lumotlari va mavjud amallar ko‘rinadi.</Step>
        <Step title="3. «Convert to Stars» ni toping">
          Ilova tiliga qarab «Stars’ga aylantirish» yoki shunga o‘xshash tugma. Tugmada yoki oynada qaytadigan Stars
          miqdori yoziladi.
        </Step>
        <Step title="4. Summani va qaroringizni tekshiring">
          Balansga nechta Stars qo‘shiladi, sovg‘ani saqlab qolishni istaysizmi va amal qaytarilmasligini tushundingizmi —
          uchalasini tasdiqlashdan oldin o‘ylab ko‘ring.
        </Step>
        <Step title="5. Tasdiqlang va balansni ko‘ring">
          Sozlamalar → «Mening yulduzlarim» (My Stars) — balans va operatsiyalar tarixi.
        </Step>
      </Steps>
      <Notice label="Eslatma">
        Tugma nomlari va joylashuvi Telegram tili va versiyasiga qarab farq qiladi. Sovg‘ani profildan yashirish Stars
        bermaydi — bu alohida amal; Stars faqat konvertatsiyani tasdiqlaganda tushadi.
      </Notice>

      <h2 id="qancha">Qancha Stars qaytadi</h2>
      <p>
        Telegram’ning texnik hujjatida qoida aniq: konvertatsiya summasi sovg‘a narxiga <b>faqat sovg‘a yaqinda sotib
        olingan Stars bilan olingan bo‘lsa teng</b>, aks holda — ancha oldin sotib olingan Stars bilan olingan bo‘lsa —
        undan kam. Shuning uchun barcha sovg‘alarga bir xil «15% komissiya» qo‘llash noto‘g‘ri: Telegram umumiy foiz
        e’lon qilmagan.
      </p>
      <InfoGrid>
        <InfoCard emoji="✅" title="Narxga teng">
          Sovg‘a yaqinda sotib olingan Stars bilan olingan — qaytim sovg‘a narxiga teng bo‘ladi.
        </InfoCard>
        <InfoCard emoji="📉" title="Narxdan kam">
          Sovg‘a ancha oldin sotib olingan Stars bilan olingan — qaytim kamroq bo‘ladi.
        </InfoCard>
        <InfoCard emoji="🚫" title="0 — aylantirilmaydi">
          Konvertatsiya qiymati belgilanmagan sovg‘ani Stars’ga aylantirib bo‘lmaydi.
        </InfoCard>
        <InfoCard emoji="🔎" title="Yagona ishonchli raqam">
          Sizdagi sovg‘aning tasdiqlash oynasida ko‘rsatilgan summa — hisobni aynan shundan qiling.
        </InfoCard>
      </InfoGrid>
      <KeyFacts label="Yana ikki narsa">
        <li>
          <b>Stars qabul qiluvchiga tushadi</b> — sovg‘ani yuborgan odamning balansiga avtomatik qaytmaydi.
        </li>
        <li>
          <b>Profil reytingi pasayadi:</b> Telegram FAQ’iga ko‘ra sovg‘ani Stars’ga aylantirish (xuddi Stars xaridini
          qaytarish kabi) profil reytingini kamaytiradi, sovg‘a sotib olish esa oshiradi.
        </li>
      </KeyFacts>

      <h2 id="hisob">Yo‘qotishni hisoblash</h2>
      <p>
        Formula oddiy: <b>yo‘qotilgan Stars = boshlang‘ich narx − qaytadigan Stars</b>, foizda — yo‘qotilgan Stars ÷
        boshlang‘ich narx × 100. Jadvalda shartli misollar: bu Telegram’ning tarif jadvali emas, hisoblash usulini
        ko‘rsatadi.
      </p>
      <LossTable locale="uz" />
      <p>
        <b>Sovg‘a sizga tekin kelgan bo‘lsa,</b> «15% yo‘qotdim» degani cho‘ntagingizdan pul ketgani emas — sovg‘aning
        dastlabki Stars qiymatidan kamroq olayotganingiz. Masalan, sizga yuborilgan 100 Stars’lik sovg‘ani 85 Stars’ga
        aylantirsangiz, balansingiz 85 ga oshadi va sovg‘aning o‘zi yo‘qoladi.
      </p>

      <h2 id="muddat">7 kunlik muddat</h2>
      <p>
        Konvertatsiya cheksiz ochiq turmaydi. Telegram hujjatiga ko‘ra sovg‘ani faqat u <b>olinganidan keyin belgilangan
        muddat ichida</b> Stars’ga aylantirish mumkin; mijoz konfiguratsiyasidagi standart qiymat — 604 800 soniya, ya’ni
        7 kun. Bu server boshqaradigan parametr, shuning uchun sovg‘angizdagi joriy holatni ham tekshiring.
      </p>
      <KeyFacts label="Amaliy">
        <li>Saqlash niyatingiz bo‘lmasa, qarorni yettinchi kunga qoldirmang.</li>
        <li>Muddat tugashi sovg‘aning yo‘qolishi emas — u profilda qoladi, faqat Stars’ga aylantirish imkoni yopiladi.</li>
        <li>Ilovani yangilash muddati o‘tgan sovg‘aga yangi imkoniyat bermaydi.</li>
      </KeyFacts>

      <h2 id="tugma">«Convert to Stars» tugmasi ko‘rinmasa</h2>
      <InfoGrid>
        <InfoCard emoji="⏰" title="7 kun o‘tgan">
          Sovg‘a qachon kelganini tekshiring — muddat tugagan bo‘lsa, aylantirish yopiladi.
        </InfoCard>
        <InfoCard emoji="💎" title="Sovg‘a kolleksion">
          Raqam, model va fon bor bo‘lsa — bu kolleksion sovg‘a. Konvertatsiya faqat kolleksion bo‘lmagan sovg‘alar
          uchun; kolleksion sovg‘ani sotish mumkin.
        </InfoCard>
        <InfoCard emoji="🔨" title="Auksiondan olingan">
          Kolleksion sovg‘alar auksionida olingan sovg‘alar Stars’ga qaytarilmaydi.
        </InfoCard>
        <InfoCard emoji="0️⃣" title="Qiymat belgilanmagan">
          Konvertatsiya qiymati 0 bo‘lgan sovg‘ani aylantirib bo‘lmaydi.
        </InfoCard>
      </InfoGrid>
      <p>
        Telegram’ni yangilab, sovg‘ani profildan ham, kelgan chatdan ham ochib ko‘ring — lekin bu yuqoridagi cheklovlarni
        olib tashlamaydi.
      </p>

      <h2 id="kolleksion">Kolleksion sovg‘a: sotish va komissiya</h2>
      <p>
        Kolleksion (NFT) sovg‘ani Stars’ga aylantirib bo‘lmaydi, lekin uni Telegram marketplace’ida sotish mumkin.
        2025-yil 8-maydagi e’londan beri sovg‘ani profilda ochib, «Sell» tugmasini bosasiz va narxni Stars’da
        belgilaysiz; sovg‘a marketplace’da paydo bo‘ladi va profilda «Sale» belgisi chiqadi, «Unlist» bilan sotuvdan
        olinadi.
      </p>
      <KeyFacts label="Raqamlar (Telegram konfiguratsiyasi, standart qiymatlar)">
        <li>
          <b>Sizga qoladi:</b> Stars’da sotsangiz narxning 80%, Gram’da sotsangiz 90%.
        </li>
        <li>
          <b>Narx chegarasi:</b> 125 dan 100 000 Stars gacha.
        </li>
        <li>
          <b>Sotuv sanasi:</b> ba’zi sovg‘alar ma’lum sanagacha sotuvga qo‘yilmaydi — bu sovg‘ada ko‘rsatiladi.
        </li>
        <li>
          <b>Xarid taklifi:</b> xaridor sizga narx taklif qilishi mumkin; uning Stars’i 6–72 soatga rezerv qilinadi, rad
          etsangiz — darhol qaytariladi.
        </li>
      </KeyFacts>
      <ResaleTable locale="uz" />
      <p>
        <b>Zararsiz narx:</b> sovg‘aga jami sarflaganingizni (xarid va upgrade) 0,8 ga bo‘ling. Masalan, 1 000 Stars
        sarflagan bo‘lsangiz, zarar ko‘rmaslik uchun narx kamida 1 250 Stars bo‘lishi kerak — lekin shu narxda xaridor
        chiqishi kafolatlanmaydi. Batafsil — <Link href="/blog/telegram-gift-sotish">Telegram sovg‘asini sotish</Link>;
        sotilmayotgan bo‘lsa — <Link href="/blog/telegram-gift-sotilmayapti">sovg‘a sotilmayapti</Link>; kolleksion
        sovg‘a nima — <Link href="/blog/telegram-nft-gift-nima">Telegram NFT sovg‘a</Link>.
      </p>

      <h2 id="qaror">Saqlash yoki Stars’ga aylantirish</h2>
      <DecisionTable locale="uz" />
      <Notice label="Stars uchun sovg‘a sotib olmang">
        Stars olish maqsadida sovg‘a sotib olib, uni aylantirish foyda bermaydi: qaytim ko‘pi bilan narxga teng, ko‘pincha
        kam, ustiga profil reytingi pasayadi. Stars kerak bo‘lsa, to‘g‘ridan-to‘g‘ri oling: StarsPaymee’da 100 Stars —{" "}
        {fmt(100 * STARS_PER_UNIT_UZS, "uz")} so‘m (karta o‘tkazmasi va balans), Click, Payme, Uzum yoki Paynet orqali —{" "}
        {fmt(100 * STARS_PER_UNIT_GATEWAY_UZS, "uz")} so‘m.
      </Notice>

      <h2 id="pul">Sovg‘adan olingan Stars kartaga tushadimi</h2>
      <p>
        Yo‘q — sovg‘ani aylantirish bank kartasiga pul chiqarish emas, u Stars balansingizni to‘ldiradi. Telegram Stars
        shartlarida ikki tur ajratilgan: sotib olingan Stars shaxsiy balansda turadi va sotilmaydi, yechilmaydi, boshqaga
        o‘tkazilmaydi; pullik xabarlar va aylantirilgan sovg‘alardan tushgan Stars esa «qo‘llaniladigan hollarda»
        kreatorlar shartlariga (mukofotlar bo‘limi — Fragment, 21 kun) bo‘ysunadi. Ya’ni ba’zi hollarda Fragment orqali
        Gram’ga yechish yo‘li bo‘lishi mumkin, lekin bu kafolat emas — ilovadagi shartlarga qarang.
      </p>
      <p>
        StarsPaymee sovg‘a va Stars’ni sotib olmaydi, so‘mga almashtirmaydi. Qaytarish qoidalari umuman —{" "}
        <Link href="/blog/telegram-stars-qaytarib-olish">Stars refund qoidalari</Link>; Gram nima —{" "}
        <Link href="/blog/toncoin-endi-gram">Toncoin endi Gram</Link>.
      </p>
      <InlineCta text="Stars kerakmi? Sovg‘a aylantirmasdan — so‘mda, username bilan, 5 soniyada balansda." product={{ kind: "stars", amount: 100 }} />
      <p>
        Sovg‘alar narxi — <Link href="/blog/telegram-gifts-narxlari-royxati">sovg‘alar narxlari ro‘yxati</Link>; do‘stga
        sovg‘a yuborish — <Link href="/blog/telegram-gifts-qanday-yuboriladi-qollanma">sovg‘a yuborish qo‘llanmasi</Link>.
      </p>

      <Sources
        label="Manbalar"
        items={[
          { href: SRC.gifts, label: "core.telegram.org/api/gifts", note: "konvertatsiya shartlari, auksion sovg‘alari, sotuv va xarid taklifi" },
          { href: SRC.ctor, label: "core.telegram.org/constructor/starGift", note: "qaytim narxga teng — faqat yaqinda sotib olingan Stars bilan" },
          { href: SRC.method, label: "core.telegram.org/method/payments.convertStarGift", note: "sovg‘a butunlay yo‘q qilinadi, Stars balansga qo‘shiladi" },
          { href: SRC.config, label: "core.telegram.org/api/config", note: "604 800 soniya (7 kun), sotuvda 80% / 90%, 125–100 000 Stars" },
          { href: SRC.market, label: "Telegram Blog — Gift Marketplace (2025-05-08)", note: "Sell, Sale, Unlist" },
          { href: SRC.tos, label: "Telegram — Terms of Service for Telegram Stars", note: "4-bo‘lim: sotib olingan va aylantirilgan sovg‘alardan kelgan Stars" },
          { href: SRC.faq, label: "Telegram FAQ — Profile Rating", note: "sovg‘ani Stars’ga aylantirish reytingni pasaytiradi" },
        ]}
      />
    </>
  );
}

/* ---------------- RU ---------------- */
function RuAnswer() {
  return (
    <p>
      Да — обычный (не коллекционный) подарок можно конвертировать в Stars <b>в течение 7 дней</b> после получения:
      подарок уничтожается навсегда, Stars зачисляются на баланс получателя, действие необратимо. Сколько вернётся,
      зависит от того, какими Stars был куплен подарок: недавно купленными — сумма равна цене, иначе меньше; точная
      сумма видна в окне подтверждения. Коллекционные и аукционные подарки не конвертируются — коллекционный подарок
      можно продать на маркетплейсе, по умолчанию вам остаётся 80% цены.
    </p>
  );
}

function RuBody() {
  return (
    <>
      <Toc
        label="Содержание"
        items={[
          { href: "#qaysi", label: "Какие подарки можно конвертировать в Stars" },
          { href: "#qanday", label: "Как конвертировать: 5 шагов" },
          { href: "#qancha", label: "Сколько Stars вернётся" },
          { href: "#hisob", label: "Как посчитать потерю" },
          { href: "#muddat", label: "Срок — 7 дней" },
          { href: "#tugma", label: "Если не видно кнопки «Convert to Stars»" },
          { href: "#kolleksion", label: "Коллекционный подарок: продажа и комиссия" },
          { href: "#qaror", label: "Оставить или конвертировать" },
          { href: "#pul", label: "Придут ли Stars с подарка на карту" },
        ]}
      />

      <h2 id="qaysi">Какие подарки можно конвертировать в Stars</h2>
      <p>
        Сначала определите тип подарка: обычный подарок конвертируется в Stars, а коллекционный (NFT) — продаётся. По
        документации Telegram конвертация работает только для неколлекционных подарков, если с момента получения не
        прошёл установленный срок и стоимость конвертации подарка больше нуля.
      </p>
      <TypeTable locale="ru" />
      <Notice label="Важная разница">
        При конвертации покупатель не нужен — Stars сразу приходят на баланс. А коллекционный подарок должен кто-то
        купить: выставить на продажу ещё не значит продать.
      </Notice>

      <h2 id="qanday">Как конвертировать: 5 шагов</h2>
      <Steps>
        <Step title="1. Найдите подарок">Ваш профиль → раздел «Подарки» (Gifts) или сообщение с подарком в чате.</Step>
        <Step title="2. Откройте подарок">Нажмите на нужный подарок — появятся его данные и доступные действия.</Step>
        <Step title="3. Найдите «Convert to Stars»">
          В зависимости от языка — «Конвертировать в звёзды» или похожая кнопка. На кнопке или в окне указано, сколько
          Stars вернётся.
        </Step>
        <Step title="4. Проверьте сумму и своё решение">
          Сколько Stars придёт на баланс, хотите ли вы оставить подарок и понимаете ли, что действие необратимо, —
          подумайте обо всём этом до подтверждения.
        </Step>
        <Step title="5. Подтвердите и проверьте баланс">
          Настройки → «Мои звёзды» (My Stars) — баланс и история операций.
        </Step>
      </Steps>
      <Notice label="Примечание">
        Названия и расположение кнопок зависят от языка и версии Telegram. Скрытие подарка из профиля Stars не даёт —
        это отдельное действие; Stars приходят только после подтверждения конвертации.
      </Notice>

      <h2 id="qancha">Сколько Stars вернётся</h2>
      <p>
        В технической документации Telegram правило чёткое: сумма конвертации равна цене подарка <b>только если подарок
        куплен недавно купленными Stars</b>, иначе — если Stars были куплены давно — она меньше. Поэтому применять ко всем
        подаркам одинаковую «комиссию 15%» неверно: общего процента Telegram не объявлял.
      </p>
      <InfoGrid>
        <InfoCard emoji="✅" title="Равна цене">
          Подарок куплен недавно купленными Stars — возврат равен цене подарка.
        </InfoCard>
        <InfoCard emoji="📉" title="Меньше цены">
          Подарок куплен Stars, купленными давно, — возврат меньше.
        </InfoCard>
        <InfoCard emoji="🚫" title="0 — не конвертируется">
          Подарок без установленной стоимости конвертации превратить в Stars нельзя.
        </InfoCard>
        <InfoCard emoji="🔎" title="Единственная надёжная цифра">
          Сумма в окне подтверждения вашего подарка — считайте именно от неё.
        </InfoCard>
      </InfoGrid>
      <KeyFacts label="Ещё два момента">
        <li>
          <b>Stars получает получатель</b> — на баланс отправителя они автоматически не возвращаются.
        </li>
        <li>
          <b>Рейтинг профиля снижается:</b> по Telegram FAQ конвертация подарков в Stars (как и возврат покупки Stars)
          уменьшает рейтинг профиля, а покупка подарков — повышает.
        </li>
      </KeyFacts>

      <h2 id="hisob">Как посчитать потерю</h2>
      <p>
        Формула простая: <b>потеряно Stars = исходная цена − возвращаемые Stars</b>, в процентах — потеряно ÷ исходная цена
        × 100. В таблице условные примеры: это не тарифная сетка Telegram, а иллюстрация расчёта.
      </p>
      <LossTable locale="ru" />
      <p>
        <b>Если подарок достался вам бесплатно,</b> «потерял 15%» означает не ушедшие из кармана деньги, а то, что вы
        получаете меньше исходной стоимости подарка в Stars. Например, конвертировав присланный вам подарок за 100 Stars
        в 85 Stars, вы увеличите баланс на 85, а сам подарок исчезнет.
      </p>

      <h2 id="muddat">Срок — 7 дней</h2>
      <p>
        Конвертация доступна не бессрочно. По документации Telegram подарок можно превратить в Stars только <b>в течение
        установленного срока после получения</b>; значение по умолчанию в клиентской конфигурации — 604 800 секунд, то
        есть 7 дней. Это параметр сервера, поэтому проверьте и текущее состояние у вашего подарка.
      </p>
      <KeyFacts label="На практике">
        <li>Если не собираетесь хранить подарок, не откладывайте решение на седьмой день.</li>
        <li>Окончание срока не удаляет подарок — он остаётся в профиле, закрывается только конвертация.</li>
        <li>Обновление приложения не даёт новых возможностей подарку с истёкшим сроком.</li>
      </KeyFacts>

      <h2 id="tugma">Если не видно кнопки «Convert to Stars»</h2>
      <InfoGrid>
        <InfoCard emoji="⏰" title="Прошло 7 дней">
          Проверьте, когда пришёл подарок: если срок истёк, конвертация закрыта.
        </InfoCard>
        <InfoCard emoji="💎" title="Подарок коллекционный">
          Есть номер, модель и фон — значит, подарок коллекционный. Конвертация — только для неколлекционных подарков;
          коллекционный можно продать.
        </InfoCard>
        <InfoCard emoji="🔨" title="Получен на аукционе">
          Подарки с аукциона коллекционных подарков в Stars не конвертируются.
        </InfoCard>
        <InfoCard emoji="0️⃣" title="Стоимость не задана">
          Подарок с нулевой стоимостью конвертации превратить в Stars нельзя.
        </InfoCard>
      </InfoGrid>
      <p>
        Обновите Telegram и откройте подарок и из профиля, и из чата, где он пришёл, — но эти ограничения так не
        снимаются.
      </p>

      <h2 id="kolleksion">Коллекционный подарок: продажа и комиссия</h2>
      <p>
        Коллекционный (NFT) подарок в Stars не конвертируется, но его можно продать на маркетплейсе Telegram. С
        объявления 8 мая 2025 года подарок открывают в профиле, нажимают «Sell» и задают цену в Stars; подарок появляется
        на маркетплейсе и получает метку «Sale» в профиле, а «Unlist» снимает его с продажи.
      </p>
      <KeyFacts label="Цифры (конфигурация Telegram, значения по умолчанию)">
        <li>
          <b>Вам остаётся:</b> при продаже за Stars — 80% цены, за Gram — 90%.
        </li>
        <li>
          <b>Диапазон цены:</b> от 125 до 100 000 Stars.
        </li>
        <li>
          <b>Дата продажи:</b> некоторые подарки нельзя выставить на продажу до определённой даты — она указана в
          подарке.
        </li>
        <li>
          <b>Предложение о покупке:</b> покупатель может предложить вам цену; его Stars резервируются на 6–72 часа, а при
          отказе сразу возвращаются.
        </li>
      </KeyFacts>
      <ResaleTable locale="ru" />
      <p>
        <b>Цена без убытка:</b> разделите всё, что вы потратили на подарок (покупка и улучшение), на 0,8. Например,
        потратив 1 000 Stars, чтобы не уйти в минус, нужно ставить цену от 1 250 Stars — но покупатель по такой цене не
        гарантирован. Подробнее — <Link href="/blog/telegram-gift-sotish">как продать подарок Telegram</Link>; если не
        продаётся — <Link href="/blog/telegram-gift-sotilmayapti">подарок не продаётся</Link>; что такое коллекционный
        подарок — <Link href="/blog/telegram-nft-gift-nima">NFT-подарок Telegram</Link>.
      </p>

      <h2 id="qaror">Оставить или конвертировать</h2>
      <DecisionTable locale="ru" />
      <Notice label="Не покупайте подарок ради Stars">
        Купить подарок, чтобы конвертировать его в Stars, невыгодно: возврат в лучшем случае равен цене, чаще меньше, а
        рейтинг профиля ещё и снижается. Нужны Stars — покупайте напрямую: в StarsPaymee 100 Stars —{" "}
        {fmt(100 * STARS_PER_UNIT_UZS, "ru")} сум (перевод на карту и баланс), через Click, Payme, Uzum или Paynet —{" "}
        {fmt(100 * STARS_PER_UNIT_GATEWAY_UZS, "ru")} сум.
      </Notice>

      <h2 id="pul">Придут ли Stars с подарка на карту</h2>
      <p>
        Нет — конвертация подарка не вывод денег на банковскую карту, она пополняет баланс Stars. В условиях Telegram
        Stars различаются два вида: купленные Stars лежат на личном балансе, их нельзя продать, вывести или передать; а
        Stars, полученные от платных сообщений и конвертированных подарков, «где применимо» подчиняются условиям для
        авторов (раздел наград — Fragment, 21 день). То есть в отдельных случаях может быть путь вывода в Gram через
        Fragment, но это не гарантия — смотрите условия в приложении.
      </p>
      <p>
        StarsPaymee не выкупает подарки и Stars и не меняет их на сумы. Правила возврата в целом —{" "}
        <Link href="/blog/telegram-stars-qaytarib-olish">правила возврата Stars</Link>; что такое Gram —{" "}
        <Link href="/blog/toncoin-endi-gram">Toncoin теперь Gram</Link>.
      </p>
      <InlineCta text="Нужны Stars? Без конвертации подарков — в сумах, по username, на балансе за 5 секунд." product={{ kind: "stars", amount: 100 }} />
      <p>
        Цены подарков — <Link href="/blog/telegram-gifts-narxlari-royxati">список цен на подарки</Link>; отправить подарок
        другу — <Link href="/blog/telegram-gifts-qanday-yuboriladi-qollanma">руководство по отправке подарков</Link>.
      </p>

      <Sources
        label="Источники"
        items={[
          { href: SRC.gifts, label: "core.telegram.org/api/gifts", note: "условия конвертации, аукционные подарки, продажа и предложения" },
          { href: SRC.ctor, label: "core.telegram.org/constructor/starGift", note: "возврат равен цене — только при недавно купленных Stars" },
          { href: SRC.method, label: "core.telegram.org/method/payments.convertStarGift", note: "подарок уничтожается, Stars зачисляются на баланс" },
          { href: SRC.config, label: "core.telegram.org/api/config", note: "604 800 секунд (7 дней), при продаже 80% / 90%, 125–100 000 Stars" },
          { href: SRC.market, label: "Telegram Blog — Gift Marketplace (2025-05-08)", note: "Sell, Sale, Unlist" },
          { href: SRC.tos, label: "Telegram — Terms of Service for Telegram Stars", note: "раздел 4: купленные Stars и Stars от конвертированных подарков" },
          { href: SRC.faq, label: "Telegram FAQ — Profile Rating", note: "конвертация подарков снижает рейтинг" },
        ]}
      />
    </>
  );
}

/* ---------------- EN ---------------- */
function EnAnswer() {
  return (
    <p>
      Yes — a regular (non-collectible) gift can be converted to Stars <b>within 7 days</b> of receiving it: the gift is
      permanently destroyed, the Stars are added to the recipient’s balance, and it cannot be undone. How much comes back
      depends on the Stars the gift was bought with: recently bought Stars — the amount equals the price, otherwise it is
      less; the exact amount shows in the confirmation dialog. Collectible and auction gifts cannot be converted — a
      collectible can be sold on the marketplace, where by default you keep 80% of the price.
    </p>
  );
}

function EnBody() {
  return (
    <>
      <Toc
        label="Contents"
        items={[
          { href: "#qaysi", label: "Which gifts can be converted to Stars" },
          { href: "#qanday", label: "How to convert: 5 steps" },
          { href: "#qancha", label: "How many Stars come back" },
          { href: "#hisob", label: "Working out the loss" },
          { href: "#muddat", label: "The 7-day window" },
          { href: "#tugma", label: "If there is no “Convert to Stars” button" },
          { href: "#kolleksion", label: "Collectible gifts: selling and the fee" },
          { href: "#qaror", label: "Keep it or convert it" },
          { href: "#pul", label: "Do Stars from a gift reach your card" },
        ]}
      />

      <h2 id="qaysi">Which gifts can be converted to Stars</h2>
      <p>
        First tell the gift types apart: a regular gift is converted to Stars, a collectible (NFT) gift is sold. According
        to Telegram’s documentation, conversion works only for non-collectible gifts, only within the set period after
        receiving them, and only if the gift’s conversion value is above zero.
      </p>
      <TypeTable locale="en" />
      <Notice label="The key difference">
        Converting needs no buyer — the Stars land on your balance at once. A collectible gift has to be bought by someone
        else: listing it for sale is not the same as selling it.
      </Notice>

      <h2 id="qanday">How to convert: 5 steps</h2>
      <Steps>
        <Step title="1. Find the gift">Your profile → the “Gifts” section, or the gift message in the chat it came to.</Step>
        <Step title="2. Open the gift">Tap the gift — its details and the available actions appear.</Step>
        <Step title="3. Find “Convert to Stars”">
          The button text depends on your app language. The button or the dialog shows how many Stars you will get.
        </Step>
        <Step title="4. Check the amount and your decision">
          How many Stars reach your balance, whether you would rather keep the gift, and that the action cannot be undone
          — think through all three before confirming.
        </Step>
        <Step title="5. Confirm and check your balance">Settings → “My Stars” — the balance and transaction history.</Step>
      </Steps>
      <Notice label="Note">
        Button names and positions vary with the Telegram language and version. Hiding a gift from your profile does not
        give Stars — it is a separate action; Stars arrive only when you confirm the conversion.
      </Notice>

      <h2 id="qancha">How many Stars come back</h2>
      <p>
        Telegram’s technical documentation is clear: the conversion amount equals the gift’s price <b>only if the gift was
        bought with recently bought Stars</b>; otherwise — if those Stars were bought long ago — it is less. So applying a
        flat “15% fee” to every gift is wrong: Telegram has not announced a single percentage.
      </p>
      <InfoGrid>
        <InfoCard emoji="✅" title="Equal to the price">
          The gift was bought with recently bought Stars — you get back the full price.
        </InfoCard>
        <InfoCard emoji="📉" title="Less than the price">
          The gift was bought with Stars bought long ago — you get back less.
        </InfoCard>
        <InfoCard emoji="🚫" title="0 — cannot be converted">
          A gift with no conversion value set cannot be turned into Stars.
        </InfoCard>
        <InfoCard emoji="🔎" title="The only reliable number">
          The amount in your gift’s confirmation dialog — base your maths on exactly that.
        </InfoCard>
      </InfoGrid>
      <KeyFacts label="Two more things">
        <li>
          <b>The Stars go to the recipient</b> — they do not return to the sender’s balance automatically.
        </li>
        <li>
          <b>Your profile rating drops:</b> according to the Telegram FAQ, converting gifts to Stars (like refunding Star
          purchases) lowers your profile rating, while buying gifts raises it.
        </li>
      </KeyFacts>

      <h2 id="hisob">Working out the loss</h2>
      <p>
        The formula is simple: <b>Stars lost = original price − Stars returned</b>; as a percentage — Stars lost ÷
        original price × 100. The table shows illustrative examples: it is not Telegram’s rate card, just the method.
      </p>
      <LossTable locale="en" />
      <p>
        <b>If the gift was free for you,</b> “I lost 15%” does not mean money left your pocket — only that you get less
        than the gift’s original value in Stars. For example, converting a 100-Star gift someone sent you into 85 Stars
        raises your balance by 85, and the gift itself disappears.
      </p>

      <h2 id="muddat">The 7-day window</h2>
      <p>
        Conversion is not open forever. According to Telegram’s documentation, a gift can be turned into Stars only{" "}
        <b>within a set period after it was received</b>; the default in the client configuration is 604,800 seconds, i.e.
        7 days. It is a server-side setting, so also check the current state of your gift.
      </p>
      <KeyFacts label="In practice">
        <li>If you do not plan to keep the gift, do not leave the decision to day seven.</li>
        <li>The window closing does not delete the gift — it stays on your profile; only conversion is no longer offered.</li>
        <li>Updating the app does not give an expired gift new options.</li>
      </KeyFacts>

      <h2 id="tugma">If there is no “Convert to Stars” button</h2>
      <InfoGrid>
        <InfoCard emoji="⏰" title="7 days have passed">
          Check when the gift arrived — once the window closes, conversion is gone.
        </InfoCard>
        <InfoCard emoji="💎" title="The gift is collectible">
          A number, a model and a backdrop mean a collectible gift. Conversion applies only to non-collectible gifts; a
          collectible can be sold.
        </InfoCard>
        <InfoCard emoji="🔨" title="Won at an auction">
          Gifts acquired through collectible-gift auctions cannot be converted to Stars.
        </InfoCard>
        <InfoCard emoji="0️⃣" title="No value set">
          A gift with a conversion value of 0 cannot be converted.
        </InfoCard>
      </InfoGrid>
      <p>
        Update Telegram and open the gift both from your profile and from the chat it came to — but that does not lift the
        limits above.
      </p>

      <h2 id="kolleksion">Collectible gifts: selling and the fee</h2>
      <p>
        A collectible (NFT) gift cannot be converted to Stars, but you can sell it on the Telegram marketplace. Since the
        8 May 2025 announcement you open the gift on your profile, tap “Sell” and set a price in Stars; the gift appears on
        the marketplace with a “Sale” label on your profile, and “Unlist” takes it off sale.
      </p>
      <KeyFacts label="The numbers (Telegram configuration, default values)">
        <li>
          <b>You keep:</b> 80% of the price when selling for Stars, 90% when selling for Gram.
        </li>
        <li>
          <b>Price range:</b> 125 to 100,000 Stars.
        </li>
        <li>
          <b>Sale date:</b> some gifts cannot be listed before a certain date — the gift shows it.
        </li>
        <li>
          <b>Purchase offers:</b> a buyer can offer you a price; their Stars are reserved for 6–72 hours and refunded at
          once if you decline.
        </li>
      </KeyFacts>
      <ResaleTable locale="en" />
      <p>
        <b>Break-even price:</b> divide everything you spent on the gift (purchase and upgrade) by 0.8. For example, if you
        spent 1,000 Stars, the price has to be at least 1,250 Stars to avoid a loss — but a buyer at that price is not
        guaranteed. More — <Link href="/blog/telegram-gift-sotish">selling a Telegram gift</Link>; if it does not sell —{" "}
        <Link href="/blog/telegram-gift-sotilmayapti">the gift is not selling</Link>; what a collectible is —{" "}
        <Link href="/blog/telegram-nft-gift-nima">a Telegram NFT gift</Link>.
      </p>

      <h2 id="qaror">Keep it or convert it</h2>
      <DecisionTable locale="en" />
      <Notice label="Do not buy gifts to get Stars">
        Buying a gift to convert it into Stars does not pay: you get back at most the price, often less, and your profile
        rating drops too. If you need Stars, buy them directly: at StarsPaymee 100 Stars cost{" "}
        {fmt(100 * STARS_PER_UNIT_UZS, "en")} som (card transfer and balance), or {fmt(100 * STARS_PER_UNIT_GATEWAY_UZS, "en")}{" "}
        som through Click, Payme, Uzum or Paynet.
      </Notice>

      <h2 id="pul">Do Stars from a gift reach your card</h2>
      <p>
        No — converting a gift is not a payout to a bank card; it tops up your Stars balance. The Telegram Stars terms
        separate two kinds: purchased Stars sit on your personal balance and cannot be sold, withdrawn or transferred,
        while Stars from paid messages and converted gifts are subject to the creator terms “where applicable” (the
        rewards section — Fragment, 21 days). So in some cases there may be a route to withdraw in Gram through Fragment,
        but it is not guaranteed — check the terms in the app.
      </p>
      <p>
        StarsPaymee does not buy gifts or Stars and does not exchange them for som. Refund rules in general —{" "}
        <Link href="/blog/telegram-stars-qaytarib-olish">Stars refund rules</Link>; what Gram is —{" "}
        <Link href="/blog/toncoin-endi-gram">Toncoin is now Gram</Link>.
      </p>
      <InlineCta text="Need Stars? No gift conversion needed — in som, by username, on your balance in 5 seconds." product={{ kind: "stars", amount: 100 }} />
      <p>
        Gift prices — <Link href="/blog/telegram-gifts-narxlari-royxati">the gift price list</Link>; sending a gift to a
        friend — <Link href="/blog/telegram-gifts-qanday-yuboriladi-qollanma">the gift-sending guide</Link>.
      </p>

      <Sources
        label="Sources"
        items={[
          { href: SRC.gifts, label: "core.telegram.org/api/gifts", note: "conversion conditions, auction gifts, resale and offers" },
          { href: SRC.ctor, label: "core.telegram.org/constructor/starGift", note: "equal to the price only with recently bought Stars" },
          { href: SRC.method, label: "core.telegram.org/method/payments.convertStarGift", note: "the gift is destroyed and the Stars are added to the balance" },
          { href: SRC.config, label: "core.telegram.org/api/config", note: "604,800 seconds (7 days), 80% / 90% on resale, 125–100,000 Stars" },
          { href: SRC.market, label: "Telegram Blog — Gift Marketplace (2025-05-08)", note: "Sell, Sale, Unlist" },
          { href: SRC.tos, label: "Telegram — Terms of Service for Telegram Stars", note: "section 4: purchased Stars vs Stars from converted gifts" },
          { href: SRC.faq, label: "Telegram FAQ — Profile Rating", note: "converting gifts lowers your rating" },
        ]}
      />
    </>
  );
}

const faqUz = [
  {
    question: "Telegram sovg‘asini Stars’ga aylantirish mumkinmi?",
    answer:
      "Ha, oddiy (kolleksion bo‘lmagan) sovg‘ani olganingizdan keyin 7 kun ichida (standart muddat). Sovg‘a butunlay yo‘q qilinadi, Stars balansingizga qo‘shiladi, amal qaytarilmaydi.",
  },
  {
    question: "Sovg‘adan doim 85% Stars qaytadimi?",
    answer:
      "Yo‘q, Telegram umumiy foiz belgilamagan. Qoida: sovg‘a yaqinda sotib olingan Stars bilan olingan bo‘lsa qaytim narxga teng, ancha oldin sotib olingan Stars bilan olingan bo‘lsa kamroq. Aniq summa tasdiqlash oynasida.",
  },
  {
    question: "100 Stars’lik sovg‘adan qancha olaman?",
    answer: "Tasdiqlash oynasida ko‘rsatilgan summani: 100 Stars yoki kamroq — masalan, 85 Stars ko‘rsatilsa, balansga 85 Stars tushadi.",
  },
  {
    question: "Sovg‘ani Stars’ga aylantirish uchun qancha vaqt bor?",
    answer: "Telegram konfiguratsiyasidagi standart qiymat — 604 800 soniya, ya’ni sovg‘a olinganidan keyin 7 kun. Muddat tugagach sovg‘a profilda qoladi, faqat konvertatsiya yopiladi.",
  },
  {
    question: "Sovg‘ani aylantirsam, Stars kimga tushadi?",
    answer: "Sovg‘ani qabul qilgan va uni aylantirayotgan akkauntga. Sovg‘ani yuborgan odamning balansiga avtomatik qaytmaydi.",
  },
  {
    question: "Konvertatsiyadan keyin sovg‘ani tiklasa bo‘ladimi?",
    answer: "Yo‘q. Sovg‘a butunlay yo‘q qilinadi; keyin xuddi shunday sovg‘ani olish uni tiklash hisoblanmaydi.",
  },
  {
    question: "NFT (kolleksion) sovg‘ani Stars’ga aylantirsa bo‘ladimi?",
    answer: "Yo‘q — konvertatsiya faqat kolleksion bo‘lmagan sovg‘alar uchun. Kolleksion sovg‘ani marketplace’da sotasiz: standart sharoitda Stars’da sotsangiz narxning 80%, Gram’da 90% sizga qoladi.",
  },
  {
    question: "Auksionda olingan sovg‘ani Stars’ga aylantirsa bo‘ladimi?",
    answer: "Yo‘q. Telegram hujjatiga ko‘ra kolleksion sovg‘alar auksionida olingan sovg‘alar Stars’ga qaytarilmaydi.",
  },
  {
    question: "Sovg‘ani aylantirish profilga ta’sir qiladimi?",
    answer: "Ha: Telegram FAQ’iga ko‘ra sovg‘ani Stars’ga aylantirish profil reytingini pasaytiradi. Sovg‘ani profildan yashirish esa Stars bermaydi va reytingga bunday ta’sir qilmaydi.",
  },
  {
    question: "Sovg‘adan olingan Stars kartaga tushadimi?",
    answer:
      "To‘g‘ridan-to‘g‘ri yo‘q — ular Stars balansiga tushadi. Shartlarga ko‘ra aylantirilgan sovg‘alardan kelgan Stars «qo‘llaniladigan hollarda» kreatorlar qoidalariga (Fragment, 21 kun) bo‘ysunadi. StarsPaymee sovg‘a va Stars’ni sotib olmaydi.",
  },
];

const faqRu = [
  {
    question: "Можно ли конвертировать подарок Telegram в Stars?",
    answer:
      "Да, обычный (не коллекционный) подарок — в течение 7 дней после получения (срок по умолчанию). Подарок уничтожается, Stars зачисляются на баланс, действие необратимо.",
  },
  {
    question: "Всегда ли возвращается 85% Stars?",
    answer:
      "Нет, единого процента Telegram не устанавливал. Правило такое: если подарок куплен недавно купленными Stars, возврат равен цене; если Stars были куплены давно — меньше. Точная сумма — в окне подтверждения.",
  },
  {
    question: "Сколько я получу за подарок в 100 Stars?",
    answer: "Сумму из окна подтверждения: 100 Stars или меньше — например, если показано 85 Stars, на баланс придёт 85 Stars.",
  },
  {
    question: "Сколько времени есть на конвертацию?",
    answer: "Значение по умолчанию в конфигурации Telegram — 604 800 секунд, то есть 7 дней после получения подарка. После этого подарок остаётся в профиле, закрывается только конвертация.",
  },
  {
    question: "Кому придут Stars после конвертации?",
    answer: "Аккаунту, который получил подарок и конвертирует его. На баланс отправителя они автоматически не возвращаются.",
  },
  {
    question: "Можно ли восстановить подарок после конвертации?",
    answer: "Нет. Подарок уничтожается навсегда; получение такого же подарка позже не считается его восстановлением.",
  },
  {
    question: "Можно ли конвертировать NFT (коллекционный) подарок в Stars?",
    answer: "Нет — конвертация только для неколлекционных подарков. Коллекционный подарок продают на маркетплейсе: по умолчанию при продаже за Stars вам остаётся 80% цены, за Gram — 90%.",
  },
  {
    question: "Можно ли конвертировать подарок с аукциона?",
    answer: "Нет. По документации Telegram подарки, полученные на аукционах коллекционных подарков, в Stars не конвертируются.",
  },
  {
    question: "Влияет ли конвертация на профиль?",
    answer: "Да: по Telegram FAQ конвертация подарков в Stars снижает рейтинг профиля. Скрытие подарка из профиля Stars не даёт и так на рейтинг не влияет.",
  },
  {
    question: "Придут ли Stars с подарка на карту?",
    answer:
      "Напрямую нет — они идут на баланс Stars. По условиям Stars от конвертированных подарков «где применимо» подчиняются правилам для авторов (Fragment, 21 день). StarsPaymee не выкупает подарки и Stars.",
  },
];

const faqEn = [
  {
    question: "Can a Telegram gift be converted to Stars?",
    answer:
      "Yes, a regular (non-collectible) gift — within 7 days of receiving it (the default window). The gift is destroyed, the Stars are added to your balance, and it cannot be undone.",
  },
  {
    question: "Do I always get 85% back in Stars?",
    answer:
      "No, Telegram has not set a single percentage. The rule: if the gift was bought with recently bought Stars, you get the full price back; if those Stars were bought long ago, you get less. The exact amount is in the confirmation dialog.",
  },
  {
    question: "How much do I get for a 100-Star gift?",
    answer: "The amount in the confirmation dialog: 100 Stars or less — for example, if it shows 85 Stars, 85 Stars reach your balance.",
  },
  {
    question: "How long do I have to convert a gift?",
    answer: "The default in Telegram’s configuration is 604,800 seconds, i.e. 7 days after receiving the gift. After that the gift stays on your profile; only conversion closes.",
  },
  {
    question: "Who gets the Stars when a gift is converted?",
    answer: "The account that received the gift and converts it. They do not return to the sender’s balance automatically.",
  },
  {
    question: "Can I restore a gift after converting it?",
    answer: "No. The gift is destroyed for good; receiving the same kind of gift later does not restore it.",
  },
  {
    question: "Can an NFT (collectible) gift be converted to Stars?",
    answer: "No — conversion applies only to non-collectible gifts. A collectible is sold on the marketplace: by default you keep 80% of the price when selling for Stars, 90% for Gram.",
  },
  {
    question: "Can a gift won at an auction be converted?",
    answer: "No. According to Telegram’s documentation, gifts acquired through collectible-gift auctions cannot be converted to Stars.",
  },
  {
    question: "Does converting affect my profile?",
    answer: "Yes: according to the Telegram FAQ, converting gifts to Stars lowers your profile rating. Hiding a gift from your profile gives no Stars and does not lower the rating that way.",
  },
  {
    question: "Do Stars from a gift reach my card?",
    answer:
      "Not directly — they go to your Stars balance. Under the terms, Stars from converted gifts are subject to the creator rules “where applicable” (Fragment, 21 days). StarsPaymee does not buy gifts or Stars.",
  },
];

export const post: AeoPost = {
  slug: SLUG,
  category: "Gifts",
  type: "howto",
  datePublished: "2026-07-05",
  dateModified: "2026-10-26",
  keywords: [
    "telegram gift stars ga aylantirish",
    "telegram sovg‘asini stars’ga aylantirish",
    "telegram gift convert",
    "telegram sovgani stars qilish",
    "sovg‘ani stars’ga qaytarish necha foiz",
    "gift to stars telegram",
    "telegram gift qaytarish",
    "конвертировать подарок telegram в звёзды",
    "подарок в stars сколько вернётся",
    "convert telegram gift to stars",
  ],
  howToSteps: [
    { name: "Sovg‘ani toping", text: "Profilingiz → Sovg‘alar bo‘limi yoki sovg‘a kelgan chatdagi xabar." },
    { name: "Sovg‘ani oching", text: "Kerakli sovg‘ani bosing — ma’lumotlar va mavjud amallar ko‘rinadi." },
    { name: "Convert to Stars ni toping", text: "Tugmada yoki oynada qaytadigan Stars miqdori yoziladi." },
    { name: "Summani tekshiring", text: "Nechta Stars qaytishi va amal qaytarilmasligini tasdiqlashdan oldin tekshiring." },
    { name: "Tasdiqlang", text: "Konvertatsiyani tasdiqlang va Sozlamalar → Mening yulduzlarim’da balansni ko‘ring." },
  ],
  locales: {
    uz: {
      title: "Telegram sovg‘asini Stars’ga aylantirish: qanday qilinadi va qancha yo‘qotasiz (2026)",
      excerpt:
        "Qaysi sovg‘a Stars’ga aylantiriladi, 5 qadam, qaytim qachon narxga teng va qachon kam, yo‘qotishni hisoblash, 7 kunlik muddat, kolleksion sovg‘ani sotish (80%) va Stars kartaga tushadimi.",
      metaTitle: "Telegram sovg‘asini Stars’ga aylantirish — qancha yo‘qotasiz",
      metaDescription: "Telegram sovg‘asini Stars’ga qanday aylantirish mumkin? 7 kunlik muddat, qaytadigan Stars miqdori, yo‘qotish hisobi va NFT sovg‘alar haqida qo‘llanma.",
      answerTitle: "Qisqa javob",
      Answer: UzAnswer,
      Body: UzBody,
      ctaHeading: "Stars kerakmi? To‘g‘ridan-to‘g‘ri oling",
      ctaBody: `Sovg‘ani aylantirishda qiymat yo‘qolishi mumkin. StarsPaymee’da Stars donasi ${STARS_PER_UNIT_UZS} so‘mdan, @username bilan, 5 soniyada.`,
      faq: faqUz,
    },
    ru: {
      title: "Как конвертировать подарок Telegram в Stars и сколько вы потеряете (2026)",
      excerpt:
        "Какие подарки конвертируются в Stars, 5 шагов, когда возврат равен цене, а когда меньше, расчёт потери, срок 7 дней, продажа коллекционного подарка (80%) и приходят ли Stars на карту.",
      metaTitle: "Конвертация подарка Telegram в Stars: сколько вернётся",
      metaDescription: "Как конвертировать подарок Telegram в Stars: срок 7 дней, сколько звёзд вернётся, расчёт потери, почему NFT-подарки не конвертируются и как их продать.",
      answerTitle: "Краткий ответ",
      Answer: RuAnswer,
      Body: RuBody,
      ctaHeading: "Нужны Stars? Купите напрямую",
      ctaBody: `При конвертации подарка можно потерять часть стоимости. В StarsPaymee звезда от ${STARS_PER_UNIT_UZS} сум, по @username, за 5 секунд.`,
      faq: faqRu,
    },
    en: {
      title: "Converting a Telegram gift to Stars: how it works and how much you lose (2026)",
      excerpt:
        "Which gifts convert to Stars, 5 steps, when you get the full price back and when less, working out the loss, the 7-day window, selling a collectible (80%) and whether Stars reach your card.",
      metaTitle: "Converting a Telegram gift to Stars: how much you get back",
      metaDescription: "How to convert a Telegram gift to Stars: the 7-day window, how many Stars come back, working out the loss, and why collectible gifts are sold instead.",
      answerTitle: "Short answer",
      Answer: EnAnswer,
      Body: EnBody,
      ctaHeading: "Need Stars? Buy them directly",
      ctaBody: `Converting a gift can lose part of its value. At StarsPaymee a star costs from ${STARS_PER_UNIT_UZS} som, by @username, within 5 seconds.`,
      faq: faqEn,
    },
  },
};
