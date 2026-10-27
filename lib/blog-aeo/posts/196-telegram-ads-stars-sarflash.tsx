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

const SLUG = "telegram-ads-stars-sarflash";

/**
 * Kanal topgan Stars'ni Telegram Ads'ga sarflash yoki yechib olish — qaror va hisob.
 *
 * NEGA ALOHIDA SAHIFA (2026-10-27): «stars reklamaga sarflash», «telegram ads stars»,
 * «реклама за звёзды» — kanal egasining qaror niyati. Saytda alohida yo'q edi:
 * 191 (pullik kanal) va 195 (Star reaksiyalari) Ads'ni bir qatorda eslatadi, 21
 * (monetizatsiya) va 22 (Stars'dan daromad) yechib olishni umumiy yoritadi — ular
 * endi shu maqolaga havola beradi. Takrorlanmaydi: yechib olish qadamlari 191#daromad.
 *
 * FAKTLAR TEKSHIRILGAN (2026-10-27):
 * - telegram.org/tos/content-creator-rewards 4.3: «Stars earned by your channel…
 *   for that specific channel», kontent, nom va brend Ad Policies'ga mos; «each
 *   Star… is worth 0.02 USD in advertising credit», qiymat o'zgarishi mumkin.
 *   4.1: reklama yoki yechib olish; Star mukofoti yechishga 21 kundan keyin.
 * - telegram.org/tos/stars §4: shaxsiy (sotib olingan) Stars uchun ruxsat etilgan
 *   foydalanishlarda reklama yo'q; §6.1 boshqa maqsad taqiqlangan.
 * - core.telegram.org/api/stars: «Balance or Monetization section and tap Buy Ads»,
 *   «special rate with a 30% discount»; yechish: egasi, 2FA paroli,
 *   stars_revenue_withdrawal_min, Fragment sahifasi, stars_usd_withdraw_rate_x1000.
 * - core.telegram.org/api/config: withdrawal_min 1000, withdraw_rate 1300 (13 USD).
 * - ads.telegram.org (promote.telegram.org shu yerga yo'naltiradi): 1000+ obunachili
 *   ommaviy kanallar, matn 160 belgi, faqat t.me havolalari, kanalga talablar
 *   (rasm, tavsif, 2 hafta ichida post), Gram'da minimal CPM 0.1, 12 taqiq toifasi.
 * - telegram.org/blog/superchannels-star-reactions-subscriptions (2024-08-14):
 *   «a further 30% discount». telegram.org/blog/monetization-for-channels (2024-03-31).
 * 30% chegirma 0,02 USD ustiga qo'shilishi TASDIQLANMAGAN — qo'shib hisoblanmagan.
 * Reklama uchun 21 kunlik kutish shartlarda YOZILMAGAN — «kutishsiz» deb da'vo qilinmagan.
 */

type Locale = "uz" | "ru" | "en";
const fmt = (n: number, locale: Locale) =>
  locale === "en" ? n.toLocaleString("en-US") : n.toLocaleString("ru-RU").replace(/ /g, " ");
const WITHDRAW_USD_PER_1000 = 13; // stars_usd_withdraw_rate_x1000 = 1300
const AD_USD_PER_STAR = 0.02; // Content Creator ToS 4.3
const usd = (v: number, locale: Locale) => (locale === "en" ? `$${fmt(v, locale)}` : `${fmt(v, locale)} USD`);

function ValueTable({ locale }: { locale: Locale }) {
  const h = {
    uz: ["Kanal balansi", "Yechib olish (≈ 13 USD / 1 000)", "Reklama krediti (0,02 USD / Star)", "Farq"],
    ru: ["Баланс канала", "Вывод (≈ 13 USD / 1 000)", "Рекламный кредит (0,02 USD / Star)", "Разница"],
    en: ["Channel balance", "Withdrawal (≈ $13 / 1,000)", "Ad credit ($0.02 / Star)", "Difference"],
  }[locale];
  return (
    <CompareTable
      headers={h}
      rows={[1000, 5000, 25000].map((n) => {
        const w = Math.round((n * WITHDRAW_USD_PER_1000) / 1000);
        const a = Math.round(n * AD_USD_PER_STAR);
        return [<strong key="n">{`${fmt(n, locale)} ⭐`}</strong>, `≈ ${usd(w, locale)}`, usd(a, locale), `+${usd(a - w, locale)}`];
      })}
    />
  );
}

function DecisionTable({ locale }: { locale: Locale }) {
  const c = {
    uz: {
      h: ["", "Reklama (Buy Ads)", "Yechib olish (Fragment)"],
      r: [
        ["Nima olasiz", "Faqat shu kanal reklamasi uchun kredit", "Gram — TON hamyoningizga"],
        ["1 000 Stars qiymati", "20 USD kredit", "≈ 13 USD"],
        ["Kutish", "Shartlarda alohida muddat yozilmagan", "21 kun (mukofot tayyor bo‘lishi)"],
        ["Minimal miqdor", "«Buy Ads» oynasida ko‘rinadi", "1 000 Stars"],
        ["Talab", "Kanal Ads qoidalariga mos", "Egasi, 2FA paroli, TON hamyon"],
        ["Qachon mantiqiy", "Kanal o‘sish bosqichida", "Naqd kerak yoki mavzu Ads’ga to‘g‘ri kelmaydi"],
      ],
    },
    ru: {
      h: ["", "Реклама (Buy Ads)", "Вывод (Fragment)"],
      r: [
        ["Что получаете", "Кредит только на рекламу этого канала", "Gram — на ваш TON-кошелёк"],
        ["Стоимость 1 000 Stars", "20 USD кредита", "≈ 13 USD"],
        ["Ожидание", "Отдельный срок в условиях не указан", "21 день (готовность награды)"],
        ["Минимум", "Виден в окне «Buy Ads»", "1 000 Stars"],
        ["Требование", "Канал соответствует правилам Ads", "Владелец, пароль 2FA, TON-кошелёк"],
        ["Когда разумно", "Канал на этапе роста", "Нужны деньги или тема не проходит в Ads"],
      ],
    },
    en: {
      h: ["", "Ads (Buy Ads)", "Withdrawal (Fragment)"],
      r: [
        ["What you get", "Credit for ads for this channel only", "Gram — to your TON wallet"],
        ["Value of 1,000 Stars", "$20 of credit", "≈ $13"],
        ["Waiting", "No separate period stated in the terms", "21 days (reward becomes available)"],
        ["Minimum", "Shown in the “Buy Ads” dialog", "1,000 Stars"],
        ["Requirement", "Channel complies with the Ad Policies", "Owner, 2FA password, TON wallet"],
        ["When it makes sense", "The channel is growing", "You need cash or the topic is not allowed in Ads"],
      ],
    },
  }[locale];
  return <CompareTable headers={c.h} rows={c.r.map(([a, b, d]) => [<strong key="a">{a}</strong>, b, d])} />;
}

const SRC = {
  tosCreators: "https://telegram.org/tos/content-creator-rewards",
  tosStars: "https://telegram.org/tos/stars",
  apiStars: "https://core.telegram.org/api/stars",
  config: "https://core.telegram.org/api/config",
  adsStart: "https://ads.telegram.org/getting-started",
  adsGuide: "https://ads.telegram.org/guidelines",
  blog2024: "https://telegram.org/blog/superchannels-star-reactions-subscriptions",
  blogMonet: "https://telegram.org/blog/monetization-for-channels",
};

/* ---------------- UZ ---------------- */
function UzAnswer() {
  return (
    <p>
      Ha — kanal (yoki bot) topgan Stars’ni <b>aynan shu kanalni</b> Telegram Ads’da reklama qilishga sarflash mumkin:
      Monetizatsiya bo‘limida «Buy Ads». Shartlarga ko‘ra reklamada 1 Star = 0,02 USD kredit, yechib olishda esa 1 000
      Stars ≈ 13 USD — ya’ni reklama sifatida Stars nominal 1,5 barobarga yaqin ko‘p «turadi». Lekin kredit faqat o‘z
      kanalingiz reklamasiga ketadi, kanal Ads qoidalariga mos bo‘lishi kerak, shaxsiy (sotib olingan) Stars esa
      reklamaga ishlatilmaydi. Naqd kerak bo‘lsa — Fragment orqali Gram’ga yechib olish.
    </p>
  );
}

function UzBody() {
  return (
    <>
      <Toc
        label="Mundarija"
        items={[
          { href: "#qoida", label: "Qoidalar: rasmiy shartlarda nima yozilgan" },
          { href: "#hisob", label: "Hisob-kitob: yechib olish yoki reklama krediti" },
          { href: "#qanday", label: "Qanday ishlatiladi: «Buy Ads»" },
          { href: "#reklama", label: "Telegram Ads qanday ishlaydi" },
          { href: "#taqiq", label: "Qaysi mavzular reklamaga tushmaydi" },
          { href: "#qaror", label: "Qachon reklama, qachon yechib olish" },
          { href: "#yechish", label: "Yechib olish qanday ishlaydi" },
          { href: "#stars", label: "Stars’ni ko‘paytirish: obunachilar uchun Stars" },
        ]}
      />

      <h2 id="qoida">Qoidalar: rasmiy shartlarda nima yozilgan</h2>
      <p>
        Kanalingiz Star reaksiyalari, pullik obuna yoki pullik postlardan Stars yig‘ayotgan bo‘lsa, oldingizda tanlov
        bor: ularni yechib olish yoki kanal o‘sishiga qayta sarflash. Telegram’ning kontent yaratuvchilar shartlari
        (Content Creator Rewards, 4-bo‘lim) bu haqda shunday deydi:
      </p>
      <KeyFacts label="Content Creator Rewards — 4-bo‘lim">
        <li>
          <b>Aynan shu kanal uchun:</b> kanal topgan Stars bilan faqat shu kanalning reklamasini berish mumkin (4.3).
        </li>
        <li>
          <b>Ads qoidalariga moslik:</b> kanal kontenti, nomi va brendi Telegram Ad Policies’ga mos bo‘lishi shart (4.3).
        </li>
        <li>
          <b>1 Star = 0,02 USD kredit:</b> reklamada ishlatilganda; qiymat aksiyalar va bozor sharoitiga qarab o‘zgarishi
          mumkin (4.3).
        </li>
        <li>
          <b>Ikki yo‘l:</b> balansni reklamaga sarflash yoki yechib olish mumkin; Stars mukofoti yechib olishga 21 kundan
          keyin tayyor bo‘ladi (4.1).
        </li>
        <li>
          <b>Shaxsiy Stars — yo‘q:</b> o‘zingiz sotib olgan Stars reklamaga ishlatilmaydi — Stars shartlarining 4-bo‘limida
          reklama ruxsat etilgan foydalanishlar qatorida yo‘q.
        </li>
      </KeyFacts>
      <Notice label="30% chegirma haqida">
        2024-yil 14-avgustdagi e’londa Telegram Stars’ni kanal reklamasiga qayta tikkanlarga «qo‘shimcha 30% chegirma»
        va’da qilgan, API hujjatida esa reklama «30% chegirmali maxsus stavka» bilan to‘lanishi yozilgan. Bu chegirma
        0,02 USD stavkasiga qo‘shimcha ekanini tasdiqlovchi hujjat yo‘q — hisobda ikkalasini qo‘shmang.
      </Notice>

      <h2 id="hisob">Hisob-kitob: yechib olish yoki reklama krediti</h2>
      <p>
        Telegram konfiguratsiyasiga ko‘ra yechib olishda 1 000 Stars ≈ 13 USD, shartlarga ko‘ra reklamada 1 Star = 0,02
        USD kredit. Bir xil balans ikki yo‘lda qancha «turadi»:
      </p>
      <ValueTable locale="uz" />
      <p>
        Reklamaga baribir pul sarflamoqchi bo‘lsangiz, Stars bilan to‘lash nominal jihatdan foydaliroq: yechib olib, keyin
        Gram bilan reklama sotib olishga qaraganda kredit taxminan 1,5 barobar ko‘p. Ammo kredit naqd pul emas — u faqat
        shu kanal reklamasiga ketadi.
      </p>
      <Notice label="Taxminiy">
        Stavkalar Telegram shartlari va konfiguratsiyasidan olingan va o‘zgarishi mumkin; amaldagisini «Buy Ads» oynasida
        va Fragment sahifasida tekshiring.
      </Notice>

      <h2 id="qanday">Qanday ishlatiladi: «Buy Ads»</h2>
      <Steps>
        <Step title="1. Monetizatsiya bo‘limini oching">
          Kanal profili → Statistika → Monetizatsiya (yoki «Balans») — kanal Stars balansi shu yerda.
        </Step>
        <Step title="2. «Buy Ads» ni bosing">
          Telegram Ad platformasining sahifasi aynan shu kanal uchun ochiladi; to‘lov kanal balansidagi Stars’dan.
        </Step>
        <Step title="3. E’lonni tuzing">
          Matn 160 belgigacha va tugma havolasi — kanalingiz (t.me/…). E’lon qaysi kanallarda ko‘rinishini tanlaysiz.
        </Step>
        <Step title="4. Byudjetni belgilang">
          E’lon byudjet tugaguncha ko‘rsatiladi; xarajat balans tarixida reklama tranzaksiyasi sifatida yoziladi.
        </Step>
        <Step title="5. Kichikdan boshlang va o‘lchang">
          Kichik byudjet bilan sinab, obunachilar o‘sishi va ko‘rishlarni statistikada kuzating, so‘ng oshiring.
        </Step>
      </Steps>

      <h2 id="reklama">Telegram Ads qanday ishlaydi</h2>
      <InfoGrid>
        <InfoCard emoji="📍" title="Qayerda ko‘rinadi">
          1 000+ obunachili ommaviy kanallarda — e’lonni qaysi kanallarda ko‘rsatishni o‘zingiz tanlaysiz. Shaxsiy
          chatlar va chat ro‘yxatida reklama chiqmaydi.
        </InfoCard>
        <InfoCard emoji="✍️" title="Format">
          Matn 160 belgigacha (bo‘shliqlar bilan) va havola ochadigan tugma; matnda ixtiyoriy bitta @link yoki t.me
          havola.
        </InfoCard>
        <InfoCard emoji="🔗" title="Faqat Telegram havolasi">
          Tugma va matndagi havolalar kanal yoki botga (t.me/… yoki @…) olib boradi; tashqi saytga havola mumkin emas.
        </InfoCard>
        <InfoCard emoji="✅" title="Kanalga talablar">
          Profil rasmi va to‘liq tavsif, so‘nggi ikki haftada kamida bitta post; bo‘sh yoki tashlab qo‘yilgan kanal
          reklama qilinmaydi.
        </InfoCard>
      </InfoGrid>
      <p>
        Ads platformasida Gram bilan ham to‘lash mumkin — u holda minimal CPM (1 000 ko‘rish narxi) 0,1 Gram. Stars bilan
        to‘lov esa faqat o‘z kanalingiz yoki botingiz reklamasi uchun.
      </p>

      <h2 id="taqiq">Qaysi mavzular reklamaga tushmaydi</h2>
      <p>
        Telegram Ad Policies reklamaga ham, reklama qilinayotgan kanalga ham taalluqli. Asosiy taqiqlangan toifalar:
      </p>
      <KeyFacts label="Ad Policies, 5-bo‘lim">
        <li>Shok, zo‘ravonlik va jinsiy kontent; nafrat va ta’qib.</li>
        <li>Uchinchi tomon huquqlarini buzish; aldovchi yoki yirtqich reklama.</li>
        <li>Siyosiy reklama, sezgir mavzular va din.</li>
        <li>Qimor; aldovchi yoki zararli moliyaviy mahsulotlar.</li>
        <li>Sertifikatsiyasiz tibbiy xizmat, dori va qo‘shimchalar.</li>
        <li>Giyohvand moddalar, alkogol, tamaki; qurol va o‘q-dori.</li>
        <li>Spam dasturlar, zararli dastur va xakerlik; qonuniyligi shubhali mahsulotlar.</li>
      </KeyFacts>
      <p>
        Kanalingiz shu mavzularda bo‘lsa, Stars’ni reklamaga sarflab bo‘lmaydi — bunday holatda yagona yo‘l yechib olish.
      </p>

      <h2 id="qaror">Qachon reklama, qachon yechib olish</h2>
      <DecisionTable locale="uz" />
      <KeyFacts label="Qisqa qoida">
        <li>
          <b>O‘sish kerak va kontent Ads qoidalariga mos</b> → reklama: Stars nominal ko‘proq qiymat beradi.
        </li>
        <li>
          <b>Naqd kerak yoki mavzu Ads’ga to‘g‘ri kelmaydi</b> → Fragment orqali yechib olish.
        </li>
        <li>
          <b>Aralash:</b> bir qismini reklamaga, qolganini yechishga — natijaga qarab ulushni o‘zgartiring.
        </li>
      </KeyFacts>

      <h2 id="yechish">Yechib olish qanday ishlaydi</h2>
      <KeyFacts label="Telegram API va shartlari">
        <li>
          <b>Faqat egasi:</b> kanal yoki bot egasi yechadi; ikki bosqichli tasdiqlash paroli so‘raladi.
        </li>
        <li>
          <b>Kamida 1 000 Stars:</b> balans shundan kam bo‘lsa yoki yechish yoqilmagan bo‘lsa, tugma ishlamaydi.
        </li>
        <li>
          <b>Fragment → Gram:</b> Fragment sahifasi ochiladi, TON hamyon manzilini kiritasiz; o‘tkazma qaytarilmaydi.
        </li>
        <li>
          <b>Qiymat:</b> 1 000 Stars ≈ 13 USD (konfiguratsiya, o‘zgarishi mumkin).
        </li>
        <li>
          <b>Muddat:</b> Stars mukofoti 21 kundan keyin yechishga tayyor; ishlab topilgan Stars 3 yil amal qiladi.
        </li>
      </KeyFacts>
      <p>
        Batafsil — <Link href="/blog/telegram-pullik-kanal-stars-obuna#daromad">pullik kanal maqolasining «Daromad» bo‘limi</Link>;
        Stars’ni pulga chiqarish umuman — <Link href="/blog/telegram-stars-daromad-qilish-mumkinmi">Telegram Stars’dan daromad</Link>;
        Gram nima — <Link href="/blog/toncoin-endi-gram">Toncoin endi Gram</Link>; ikki bosqichli tasdiqlash —{" "}
        <Link href="/blog/telegram-akkauntni-ogirlashdan-himoya-2fa">2FA qo‘llanmasi</Link>.
      </p>

      <h2 id="stars">Stars’ni ko‘paytirish: obunachilar uchun Stars</h2>
      <p>
        Reklamaga sarflash uchun avval Stars yig‘ilishi kerak. Auditoriyaga Stars sarflash imkonini bering —{" "}
        <Link href="/blog/telegram-star-reaksiyalari">Star reaksiyalari</Link>,{" "}
        <Link href="/blog/telegram-pullik-kanal-stars-obuna">pullik obuna</Link> va boshqa usullar —{" "}
        <Link href="/blog/telegram-kanal-stars-monetizatsiya">kanal monetizatsiyasi</Link>.
      </p>
      <p>
        Obunachilaringiz Stars’ni so‘mda olishi mumkin: StarsPaymee’da donasi {STARS_PER_UNIT_UZS} so‘m (karta o‘tkazmasi,
        balans) yoki {STARS_PER_UNIT_GATEWAY_UZS} so‘m (Click, Payme, Uzum, Paynet), faqat @username bilan. StarsPaymee
        kanal balansidagi Stars’ni sotib olmaydi va so‘mga aylantirmaydi.
      </p>
      <InlineCta text="Obunachilaringizga Stars kerakmi? So‘mda, username bilan — 5 soniyada." product={{ kind: "stars", amount: 100 }} />

      <Sources
        label="Manbalar"
        items={[
          { href: SRC.tosCreators, label: "Telegram — Terms of Service for Content Creators", note: "4.1 va 4.3: aynan shu kanal, Ad Policies, 0,02 USD kredit, 21 kun" },
          { href: SRC.tosStars, label: "Telegram — Terms of Service for Telegram Stars", note: "4-bo‘lim: shaxsiy Stars reklamaga ishlatilmaydi" },
          { href: SRC.apiStars, label: "core.telegram.org/api/stars", note: "Buy Ads, 30% chegirmali stavka, yechib olish: egasi, 2FA, Fragment" },
          { href: SRC.config, label: "core.telegram.org/api/config", note: "kamida 1 000 Stars, 1 000 Stars ≈ 13 USD" },
          { href: SRC.adsStart, label: "Telegram Ads — Getting started", note: "1 000+ obunachili kanallar, havolalar, minimal CPM" },
          { href: SRC.adsGuide, label: "Telegram Ads — Ad Policies and Guidelines", note: "160 belgi, kanalga talablar, taqiqlar" },
          { href: SRC.blog2024, label: "Telegram Blog — Super Channels, Star Reactions and Subscriptions", note: "2024-08-14: 30% chegirma" },
          { href: SRC.blogMonet, label: "Telegram Blog — Sharing Revenue with Channel Owners", note: "2024-03-31: yechib olish yoki reklamaga qayta tikish" },
        ]}
      />
    </>
  );
}

/* ---------------- RU ---------------- */
function RuAnswer() {
  return (
    <p>
      Да — Stars, заработанные каналом (или ботом), можно потратить на рекламу <b>именно этого канала</b> в Telegram Ads:
      кнопка «Buy Ads» в разделе монетизации. По условиям в рекламе 1 Star = 0,02 USD кредита, а при выводе 1 000 Stars ≈
      13 USD — то есть в рекламе Stars номинально «стоят» почти в 1,5 раза больше. Но кредит идёт только на рекламу
      вашего канала, канал должен соответствовать правилам Ads, а личные (купленные) Stars для рекламы не подходят. Если
      нужны деньги — вывод в Gram через Fragment.
    </p>
  );
}

function RuBody() {
  return (
    <>
      <Toc
        label="Содержание"
        items={[
          { href: "#qoida", label: "Правила: что написано в официальных условиях" },
          { href: "#hisob", label: "Расчёт: вывод или рекламный кредит" },
          { href: "#qanday", label: "Как пользоваться: «Buy Ads»" },
          { href: "#reklama", label: "Как работает Telegram Ads" },
          { href: "#taqiq", label: "Какие темы не допускаются к рекламе" },
          { href: "#qaror", label: "Когда реклама, а когда вывод" },
          { href: "#yechish", label: "Как работает вывод" },
          { href: "#stars", label: "Как получать больше Stars: Stars для подписчиков" },
        ]}
      />

      <h2 id="qoida">Правила: что написано в официальных условиях</h2>
      <p>
        Если ваш канал собирает Stars со Star-реакций, платной подписки или платных постов, перед вами выбор: вывести их
        или вложить в рост канала. Условия Telegram для авторов (Content Creator Rewards, раздел 4) говорят об этом так:
      </p>
      <KeyFacts label="Content Creator Rewards — раздел 4">
        <li>
          <b>Только для этого канала:</b> Stars, заработанные каналом, можно тратить только на рекламу этого же канала
          (4.3).
        </li>
        <li>
          <b>Соответствие правилам Ads:</b> контент, название и бренд канала должны соответствовать Telegram Ad Policies
          (4.3).
        </li>
        <li>
          <b>1 Star = 0,02 USD кредита:</b> при использовании в рекламе; значение может меняться из-за акций и рыночных
          условий (4.3).
        </li>
        <li>
          <b>Два пути:</b> баланс можно потратить на рекламу или вывести; награда в Stars становится доступной для вывода
          через 21 день (4.1).
        </li>
        <li>
          <b>Личные Stars — нет:</b> купленные вами Stars для рекламы не используются — в разделе 4 условий Stars реклама
          среди разрешённых способов не указана.
        </li>
      </KeyFacts>
      <Notice label="О скидке 30%">
        В объявлении 14 августа 2024 года Telegram пообещал тем, кто вкладывает Stars в рекламу канала, «дополнительную
        скидку 30%», а в документации API сказано, что реклама оплачивается «по специальному курсу со скидкой 30%».
        Документа, подтверждающего, что эта скидка добавляется к ставке 0,02 USD, нет — не складывайте их в расчёте.
      </Notice>

      <h2 id="hisob">Расчёт: вывод или рекламный кредит</h2>
      <p>
        По конфигурации Telegram при выводе 1 000 Stars ≈ 13 USD, по условиям в рекламе 1 Star = 0,02 USD кредита. Сколько
        «стоит» один и тот же баланс в двух вариантах:
      </p>
      <ValueTable locale="ru" />
      <p>
        Если вы всё равно собираетесь тратить деньги на рекламу, платить Stars номинально выгоднее: по сравнению с выводом
        и покупкой рекламы за Gram кредит больше примерно в 1,5 раза. Но кредит — не деньги: он идёт только на рекламу
        этого канала.
      </p>
      <Notice label="Ориентир">
        Ставки взяты из условий и конфигурации Telegram и могут меняться; актуальные смотрите в окне «Buy Ads» и на
        странице Fragment.
      </Notice>

      <h2 id="qanday">Как пользоваться: «Buy Ads»</h2>
      <Steps>
        <Step title="1. Откройте раздел монетизации">
          Профиль канала → Статистика → Монетизация (или «Баланс») — здесь баланс Stars канала.
        </Step>
        <Step title="2. Нажмите «Buy Ads»">
          Откроется страница рекламной платформы Telegram именно для этого канала; оплата — Stars с баланса канала.
        </Step>
        <Step title="3. Составьте объявление">
          Текст до 160 символов и ссылка на кнопке — ваш канал (t.me/…). Выберите, в каких каналах показывать объявление.
        </Step>
        <Step title="4. Задайте бюджет">
          Объявление показывается, пока не израсходован бюджет; расход отражается в истории баланса как рекламная
          транзакция.
        </Step>
        <Step title="5. Начните с малого и измеряйте">
          Протестируйте небольшой бюджет, следите за ростом подписчиков и просмотрами в статистике, затем увеличивайте.
        </Step>
      </Steps>

      <h2 id="reklama">Как работает Telegram Ads</h2>
      <InfoGrid>
        <InfoCard emoji="📍" title="Где показывается">
          В публичных каналах от 1 000 подписчиков — в каких именно, выбираете вы. В личных чатах и списке чатов реклама
          не показывается.
        </InfoCard>
        <InfoCard emoji="✍️" title="Формат">
          Текст до 160 символов (с пробелами) и кнопка со ссылкой; в тексте — по желанию одна @ссылка или ссылка t.me.
        </InfoCard>
        <InfoCard emoji="🔗" title="Только ссылки Telegram">
          Ссылки на кнопке и в тексте ведут на канал или бота (t.me/… или @…); ссылки на внешние сайты запрещены.
        </InfoCard>
        <InfoCard emoji="✅" title="Требования к каналу">
          Аватар и полное описание, хотя бы один пост за последние две недели; пустые или заброшенные каналы не
          рекламируются.
        </InfoCard>
      </InfoGrid>
      <p>
        На рекламной платформе можно платить и Gram — тогда минимальный CPM (цена 1 000 показов) составляет 0,1 Gram. А
        оплата Stars доступна только для рекламы собственного канала или бота.
      </p>

      <h2 id="taqiq">Какие темы не допускаются к рекламе</h2>
      <p>
        Telegram Ad Policies распространяются и на объявление, и на рекламируемый канал. Основные запрещённые категории:
      </p>
      <KeyFacts label="Ad Policies, раздел 5">
        <li>Шок-контент, насилие и сексуальный контент; ненависть и травля.</li>
        <li>Нарушение прав третьих лиц; обманная или хищническая реклама.</li>
        <li>Политическая реклама, чувствительные темы и религия.</li>
        <li>Азартные игры; обманные или вредные финансовые продукты.</li>
        <li>Несертифицированные медицинские услуги, лекарства и добавки.</li>
        <li>Наркотики, алкоголь, табак; оружие и боеприпасы.</li>
        <li>Спам-программы, вредоносное ПО и взлом; товары сомнительной законности.</li>
      </KeyFacts>
      <p>
        Если ваш канал на одну из этих тем, потратить Stars на рекламу не получится — тогда единственный путь — вывод.
      </p>

      <h2 id="qaror">Когда реклама, а когда вывод</h2>
      <DecisionTable locale="ru" />
      <KeyFacts label="Короткое правило">
        <li>
          <b>Нужен рост и контент соответствует правилам Ads</b> → реклама: Stars дают номинально больше.
        </li>
        <li>
          <b>Нужны деньги или тема не проходит в Ads</b> → вывод через Fragment.
        </li>
        <li>
          <b>Смешанно:</b> часть на рекламу, часть на вывод — меняйте долю по результатам.
        </li>
      </KeyFacts>

      <h2 id="yechish">Как работает вывод</h2>
      <KeyFacts label="API и условия Telegram">
        <li>
          <b>Только владелец:</b> выводит владелец канала или бота; запрашивается пароль двухэтапной аутентификации.
        </li>
        <li>
          <b>Не меньше 1 000 Stars:</b> если на балансе меньше или вывод не включён, кнопка не сработает.
        </li>
        <li>
          <b>Fragment → Gram:</b> откроется страница Fragment, где вы укажете адрес TON-кошелька; перевод необратим.
        </li>
        <li>
          <b>Стоимость:</b> 1 000 Stars ≈ 13 USD (конфигурация, может меняться).
        </li>
        <li>
          <b>Сроки:</b> награда в Stars доступна для вывода через 21 день; заработанные Stars действуют 3 года.
        </li>
      </KeyFacts>
      <p>
        Подробнее — <Link href="/blog/telegram-pullik-kanal-stars-obuna#daromad">раздел «Доход» статьи о платном канале</Link>;
        вывод Stars в целом — <Link href="/blog/telegram-stars-daromad-qilish-mumkinmi">заработок на Telegram Stars</Link>;
        что такое Gram — <Link href="/blog/toncoin-endi-gram">Toncoin теперь Gram</Link>; двухэтапная аутентификация —{" "}
        <Link href="/blog/telegram-akkauntni-ogirlashdan-himoya-2fa">руководство по 2FA</Link>.
      </p>

      <h2 id="stars">Как получать больше Stars: Stars для подписчиков</h2>
      <p>
        Чтобы тратить Stars на рекламу, их сначала нужно собрать. Дайте аудитории возможность тратить Stars —{" "}
        <Link href="/blog/telegram-star-reaksiyalari">Star-реакции</Link>,{" "}
        <Link href="/blog/telegram-pullik-kanal-stars-obuna">платная подписка</Link> и другие способы —{" "}
        <Link href="/blog/telegram-kanal-stars-monetizatsiya">монетизация канала</Link>.
      </p>
      <p>
        Подписчики могут купить Stars за сумы: в StarsPaymee звезда стоит {STARS_PER_UNIT_UZS} сум (перевод на карту,
        баланс) или {STARS_PER_UNIT_GATEWAY_UZS} сум (Click, Payme, Uzum, Paynet), нужен только @username. StarsPaymee не
        выкупает Stars с баланса канала и не конвертирует их в сумы.
      </p>
      <InlineCta text="Подписчикам нужны Stars? В сумах, по username — за 5 секунд." product={{ kind: "stars", amount: 100 }} />

      <Sources
        label="Источники"
        items={[
          { href: SRC.tosCreators, label: "Telegram — Terms of Service for Content Creators", note: "4.1 и 4.3: только этот канал, Ad Policies, 0,02 USD кредита, 21 день" },
          { href: SRC.tosStars, label: "Telegram — Terms of Service for Telegram Stars", note: "раздел 4: личные Stars не используются для рекламы" },
          { href: SRC.apiStars, label: "core.telegram.org/api/stars", note: "Buy Ads, курс со скидкой 30%, вывод: владелец, 2FA, Fragment" },
          { href: SRC.config, label: "core.telegram.org/api/config", note: "минимум 1 000 Stars, 1 000 Stars ≈ 13 USD" },
          { href: SRC.adsStart, label: "Telegram Ads — Getting started", note: "каналы от 1 000 подписчиков, ссылки, минимальный CPM" },
          { href: SRC.adsGuide, label: "Telegram Ads — Ad Policies and Guidelines", note: "160 символов, требования к каналу, запреты" },
          { href: SRC.blog2024, label: "Telegram Blog — Super Channels, Star Reactions and Subscriptions", note: "2024-08-14: скидка 30%" },
          { href: SRC.blogMonet, label: "Telegram Blog — Sharing Revenue with Channel Owners", note: "2024-03-31: вывод или реинвест в рекламу" },
        ]}
      />
    </>
  );
}

/* ---------------- EN ---------------- */
function EnAnswer() {
  return (
    <p>
      Yes — Stars your channel (or bot) has earned can be spent on advertising <b>that same channel</b> in Telegram Ads:
      the “Buy Ads” button in the monetization section. Under the terms, 1 Star = $0.02 of ad credit, while withdrawing
      pays ≈ $13 per 1,000 Stars — so as ad credit, Stars are nominally worth almost 1.5 times more. But the credit only
      goes to ads for your own channel, the channel must comply with the Ad Policies, and personal (purchased) Stars
      cannot be used for ads. If you need cash, withdraw in Gram through Fragment.
    </p>
  );
}

function EnBody() {
  return (
    <>
      <Toc
        label="Contents"
        items={[
          { href: "#qoida", label: "The rules: what the official terms say" },
          { href: "#hisob", label: "The maths: withdrawal or ad credit" },
          { href: "#qanday", label: "How to use it: “Buy Ads”" },
          { href: "#reklama", label: "How Telegram Ads works" },
          { href: "#taqiq", label: "Which topics cannot be advertised" },
          { href: "#qaror", label: "When to advertise and when to withdraw" },
          { href: "#yechish", label: "How withdrawal works" },
          { href: "#stars", label: "Earning more Stars: Stars for your subscribers" },
        ]}
      />

      <h2 id="qoida">The rules: what the official terms say</h2>
      <p>
        If your channel collects Stars from Star reactions, paid subscriptions or paid posts, you have a choice: withdraw
        them or reinvest them in the channel’s growth. Telegram’s creator terms (Content Creator Rewards, section 4) say:
      </p>
      <KeyFacts label="Content Creator Rewards — section 4">
        <li>
          <b>For that specific channel:</b> Stars a channel earned can only pay for ads for that same channel (4.3).
        </li>
        <li>
          <b>Ad Policies compliance:</b> the channel’s content, name and branding must comply with the Telegram Ad
          Policies (4.3).
        </li>
        <li>
          <b>1 Star = $0.02 of credit:</b> when used for ads; the value may change with promotions and market conditions
          (4.3).
        </li>
        <li>
          <b>Two routes:</b> the balance can go to ads or be withdrawn; a Stars reward becomes available for withdrawal
          after 21 days (4.1).
        </li>
        <li>
          <b>Personal Stars — no:</b> Stars you bought cannot be used for ads — section 4 of the Stars terms does not list
          advertising among the allowed uses.
        </li>
      </KeyFacts>
      <Notice label="About the 30% discount">
        In its 14 August 2024 announcement Telegram promised creators who reinvest Stars into channel ads “a further 30%
        discount”, and the API documentation says ads are paid “at a special rate with a 30% discount”. No document
        confirms that this discount comes on top of the $0.02 rate — do not add the two together in your maths.
      </Notice>

      <h2 id="hisob">The maths: withdrawal or ad credit</h2>
      <p>
        Per Telegram’s configuration, withdrawing pays ≈ $13 per 1,000 Stars; per the terms, 1 Star = $0.02 of ad
        credit. What the same balance is “worth” each way:
      </p>
      <ValueTable locale="en" />
      <p>
        If you were going to spend money on ads anyway, paying with Stars is nominally better: compared with withdrawing
        and then buying ads with Gram, the credit is about 1.5 times larger. But the credit is not cash — it only pays for
        ads for this channel.
      </p>
      <Notice label="Approximate">
        The rates come from Telegram’s terms and configuration and may change; check the current ones in the “Buy Ads”
        dialog and on the Fragment page.
      </Notice>

      <h2 id="qanday">How to use it: “Buy Ads”</h2>
      <Steps>
        <Step title="1. Open the monetization section">
          Channel profile → Statistics → Monetization (or “Balance”) — the channel’s Stars balance is here.
        </Step>
        <Step title="2. Tap “Buy Ads”">
          A Telegram Ad platform page opens for this specific channel; the payment comes from the channel’s Stars.
        </Step>
        <Step title="3. Write the ad">
          Text up to 160 characters and a button link — your channel (t.me/…). Choose the channels where the ad appears.
        </Step>
        <Step title="4. Set the budget">
          The ad runs until the budget is spent; the cost shows in the balance history as an ad transaction.
        </Step>
        <Step title="5. Start small and measure">
          Test a small budget, watch subscriber growth and views in the statistics, then scale up.
        </Step>
      </Steps>

      <h2 id="reklama">How Telegram Ads works</h2>
      <InfoGrid>
        <InfoCard emoji="📍" title="Where ads appear">
          In public channels with 1,000+ subscribers — you choose which ones. Ads never appear in private chats or the
          chat list.
        </InfoCard>
        <InfoCard emoji="✍️" title="Format">
          Text up to 160 characters (including spaces) and a button that opens a link; optionally one @link or t.me link
          in the text.
        </InfoCard>
        <InfoCard emoji="🔗" title="Telegram links only">
          Links on the button and in the text lead to a channel or bot (t.me/… or @…); links to external sites are not
          allowed.
        </InfoCard>
        <InfoCard emoji="✅" title="Channel requirements">
          A profile picture and a complete description, at least one post in the past two weeks; empty or abandoned
          channels cannot be advertised.
        </InfoCard>
      </InfoGrid>
      <p>
        The ad platform also accepts Gram — in that case the minimum CPM (the price of 1,000 views) is 0.1 Gram. Paying
        with Stars, however, is only for ads for your own channel or bot.
      </p>

      <h2 id="taqiq">Which topics cannot be advertised</h2>
      <p>The Telegram Ad Policies apply both to the ad and to the channel being promoted. The main prohibited categories:</p>
      <KeyFacts label="Ad Policies, section 5">
        <li>Graphic, shocking and sexual content; hate and harassment.</li>
        <li>Infringing third-party rights; deceptive or predatory advertising.</li>
        <li>Political ads, sensitive topics and religion.</li>
        <li>Gambling; deceptive or harmful financial products.</li>
        <li>Uncertified medical services, medications and supplements.</li>
        <li>Drugs, alcohol, tobacco; weapons and ammunition.</li>
        <li>Spam software, malware and hacking; products of questionable legality.</li>
      </KeyFacts>
      <p>If your channel covers one of these topics, you cannot spend Stars on ads — withdrawal is then the only route.</p>

      <h2 id="qaror">When to advertise and when to withdraw</h2>
      <DecisionTable locale="en" />
      <KeyFacts label="A short rule">
        <li>
          <b>You need growth and your content complies with the Ad Policies</b> → ads: Stars give more nominal value.
        </li>
        <li>
          <b>You need cash, or your topic is not allowed in Ads</b> → withdraw through Fragment.
        </li>
        <li>
          <b>A mix:</b> part to ads, part to withdrawal — adjust the split by results.
        </li>
      </KeyFacts>

      <h2 id="yechish">How withdrawal works</h2>
      <KeyFacts label="Telegram’s API and terms">
        <li>
          <b>Owner only:</b> the channel or bot owner withdraws; the two-step verification password is required.
        </li>
        <li>
          <b>At least 1,000 Stars:</b> with less on the balance, or if withdrawal is not enabled, the button will not
          work.
        </li>
        <li>
          <b>Fragment → Gram:</b> a Fragment page opens where you enter a TON wallet address; the transfer is
          irreversible.
        </li>
        <li>
          <b>Value:</b> 1,000 Stars ≈ $13 (configuration, may change).
        </li>
        <li>
          <b>Timing:</b> a Stars reward becomes withdrawable after 21 days; earned Stars are valid for 3 years.
        </li>
      </KeyFacts>
      <p>
        More — <Link href="/blog/telegram-pullik-kanal-stars-obuna#daromad">the “Income” section of the paid-channel article</Link>;
        cashing out Stars in general — <Link href="/blog/telegram-stars-daromad-qilish-mumkinmi">earning with Telegram Stars</Link>;
        what Gram is — <Link href="/blog/toncoin-endi-gram">Toncoin is now Gram</Link>; two-step verification —{" "}
        <Link href="/blog/telegram-akkauntni-ogirlashdan-himoya-2fa">the 2FA guide</Link>.
      </p>

      <h2 id="stars">Earning more Stars: Stars for your subscribers</h2>
      <p>
        To spend Stars on ads, you first have to collect them. Give your audience ways to spend Stars —{" "}
        <Link href="/blog/telegram-star-reaksiyalari">Star reactions</Link>,{" "}
        <Link href="/blog/telegram-pullik-kanal-stars-obuna">a paid subscription</Link> and other methods —{" "}
        <Link href="/blog/telegram-kanal-stars-monetizatsiya">channel monetisation</Link>.
      </p>
      <p>
        Your subscribers can buy Stars in som: at StarsPaymee a star costs {STARS_PER_UNIT_UZS} som (card transfer,
        balance) or {STARS_PER_UNIT_GATEWAY_UZS} som (Click, Payme, Uzum, Paynet), with just an @username. StarsPaymee
        does not buy Stars from a channel balance or convert them into som.
      </p>
      <InlineCta text="Do your subscribers need Stars? In som, by username — within 5 seconds." product={{ kind: "stars", amount: 100 }} />

      <Sources
        label="Sources"
        items={[
          { href: SRC.tosCreators, label: "Telegram — Terms of Service for Content Creators", note: "4.1 and 4.3: that specific channel, Ad Policies, $0.02 credit, 21 days" },
          { href: SRC.tosStars, label: "Telegram — Terms of Service for Telegram Stars", note: "section 4: personal Stars cannot be used for ads" },
          { href: SRC.apiStars, label: "core.telegram.org/api/stars", note: "Buy Ads, the 30% discounted rate, withdrawal: owner, 2FA, Fragment" },
          { href: SRC.config, label: "core.telegram.org/api/config", note: "minimum 1,000 Stars, 1,000 Stars ≈ $13" },
          { href: SRC.adsStart, label: "Telegram Ads — Getting started", note: "channels with 1,000+ subscribers, links, minimum CPM" },
          { href: SRC.adsGuide, label: "Telegram Ads — Ad Policies and Guidelines", note: "160 characters, channel requirements, prohibitions" },
          { href: SRC.blog2024, label: "Telegram Blog — Super Channels, Star Reactions and Subscriptions", note: "2024-08-14: the 30% discount" },
          { href: SRC.blogMonet, label: "Telegram Blog — Sharing Revenue with Channel Owners", note: "2024-03-31: withdraw or reinvest in ads" },
        ]}
      />
    </>
  );
}

const faqUz = [
  {
    question: "Shaxsiy hisobimdagi sotib olingan Stars’ni reklamaga sarflasa bo‘ladimi?",
    answer:
      "Yo‘q. Reklamaga faqat kanal yoki bot topgan Stars sarflanadi. Stars shartlarining 4-bo‘limida shaxsiy balansdagi Stars uchun reklama ruxsat etilgan foydalanishlar qatorida yo‘q.",
  },
  {
    question: "0,02 USD stavkasi doimiymi?",
    answer:
      "Yo‘q. Shartlarning 4.3-bandiga ko‘ra qiymat vaqtinchalik aksiyalar, rag‘batlar va bozor sharoitiga qarab o‘zgarishi mumkin. Amaldagisini «Buy Ads» oynasida tekshiring.",
  },
  {
    question: "Monetizatsiya bo‘limi qayerda?",
    answer:
      "Kanal profili → Statistika → Monetizatsiya (yoki «Balans»). Kanal Stars balansi, «Buy Ads» va yechib olish tugmalari shu yerda.",
  },
  {
    question: "Kanal Stars’ini boshqa kanal reklamasiga sarflasa bo‘ladimi?",
    answer: "Yo‘q. Shartlar Stars’ni aynan ularni topgan kanal reklamasiga ishlatishga ruxsat beradi.",
  },
  {
    question: "30% chegirma 0,02 USD ustiga qo‘shiladimi?",
    answer:
      "Bu tasdiqlanmagan. E’londa «qo‘shimcha 30% chegirma» aytilgan, API hujjatida esa reklama «30% chegirmali maxsus stavka» bilan to‘lanishi yozilgan. Hisobda ikkalasini qo‘shmang.",
  },
  {
    question: "Reklama qayerda ko‘rinadi?",
    answer:
      "1 000 va undan ko‘p obunachili ommaviy kanallarda — qaysilarida ko‘rsatishni o‘zingiz tanlaysiz. Shaxsiy chatlar va chat ro‘yxatida reklama chiqmaydi.",
  },
  {
    question: "Reklama matni qanday bo‘ladi?",
    answer:
      "Bo‘shliqlar bilan 160 belgigacha matn va havola ochadigan tugma. Havolalar faqat Telegram kanali yoki botiga, tashqi saytga havola mumkin emas.",
  },
  {
    question: "Kanalim Ads qoidalariga to‘g‘ri kelmasa nima qilaman?",
    answer:
      "Stars’ni reklamaga sarflab bo‘lmaydi — qimor, siyosat, tibbiyot, shubhali moliya kabi mavzular taqiqlangan. Bunday holatda Fragment orqali yechib olish qoladi.",
  },
  {
    question: "Yechib olish uchun nima kerak?",
    answer:
      "Kanal yoki bot egasi bo‘lish, ikki bosqichli tasdiqlash paroli, balansda kamida 1 000 Stars va TON hamyon. Stars mukofoti 21 kundan keyin tayyor bo‘ladi; 1 000 Stars ≈ 13 USD.",
  },
  {
    question: "Obunachilar Stars’ni qayerdan oladi?",
    answer: `Telegram ichida (App Store yoki Google Play), Fragment’da Gram bilan yoki O‘zbekistonda so‘mda — StarsPaymee’da donasi ${STARS_PER_UNIT_UZS} so‘m (karta o‘tkazmasi, balans) yoki ${STARS_PER_UNIT_GATEWAY_UZS} so‘m (Click, Payme, Uzum, Paynet), faqat @username bilan.`,
  },
];

const faqRu = [
  {
    question: "Можно ли потратить на рекламу купленные Stars с личного баланса?",
    answer:
      "Нет. На рекламу идут только Stars, заработанные каналом или ботом. В разделе 4 условий Stars реклама не указана среди разрешённых способов использования личного баланса.",
  },
  {
    question: "Ставка 0,02 USD постоянная?",
    answer:
      "Нет. По пункту 4.3 условий значение может меняться из-за временных акций, стимулов и рыночных условий. Актуальную ставку проверяйте в окне «Buy Ads».",
  },
  {
    question: "Где раздел монетизации?",
    answer: "Профиль канала → Статистика → Монетизация (или «Баланс»). Здесь баланс Stars канала, кнопки «Buy Ads» и вывода.",
  },
  {
    question: "Можно ли потратить Stars канала на рекламу другого канала?",
    answer: "Нет. Условия разрешают использовать Stars только для рекламы того канала, который их заработал.",
  },
  {
    question: "Добавляется ли скидка 30% к ставке 0,02 USD?",
    answer:
      "Это не подтверждено. В объявлении сказано о «дополнительной скидке 30%», а в документации API — что реклама оплачивается «по специальному курсу со скидкой 30%». Не складывайте их в расчёте.",
  },
  {
    question: "Где показывается реклама?",
    answer: "В публичных каналах от 1 000 подписчиков — в каких именно, выбираете вы. В личных чатах и списке чатов реклама не показывается.",
  },
  {
    question: "Каким может быть текст объявления?",
    answer: "До 160 символов с пробелами и кнопка со ссылкой. Ссылки — только на канал или бота Telegram, внешние сайты запрещены.",
  },
  {
    question: "Что делать, если канал не проходит по правилам Ads?",
    answer: "Потратить Stars на рекламу не получится — запрещены, например, азартные игры, политика, медицина, сомнительные финансы. Остаётся вывод через Fragment.",
  },
  {
    question: "Что нужно для вывода?",
    answer: "Быть владельцем канала или бота, пароль двухэтапной аутентификации, не меньше 1 000 Stars на балансе и TON-кошелёк. Награда в Stars доступна через 21 день; 1 000 Stars ≈ 13 USD.",
  },
  {
    question: "Где подписчикам взять Stars?",
    answer: `Внутри Telegram (App Store или Google Play), на Fragment за Gram или в Узбекистане за сумы — в StarsPaymee звезда ${STARS_PER_UNIT_UZS} сум (перевод на карту, баланс) или ${STARS_PER_UNIT_GATEWAY_UZS} сум (Click, Payme, Uzum, Paynet), только @username.`,
  },
];

const faqEn = [
  {
    question: "Can I spend Stars I bought on my personal balance on ads?",
    answer:
      "No. Only Stars earned by a channel or bot can pay for ads. Section 4 of the Stars terms does not list advertising among the allowed uses of a personal balance.",
  },
  {
    question: "Is the $0.02 rate fixed?",
    answer:
      "No. Under clause 4.3 of the terms the value may change with temporary promotions, incentives and market conditions. Check the current rate in the “Buy Ads” dialog.",
  },
  {
    question: "Where is the monetization section?",
    answer: "Channel profile → Statistics → Monetization (or “Balance”). The channel’s Stars balance and the “Buy Ads” and withdrawal buttons are there.",
  },
  {
    question: "Can a channel’s Stars pay for ads for another channel?",
    answer: "No. The terms allow Stars to be used only for ads for the channel that earned them.",
  },
  {
    question: "Does the 30% discount come on top of the $0.02 rate?",
    answer:
      "That is not confirmed. The announcement mentions “a further 30% discount”, and the API documentation says ads are paid “at a special rate with a 30% discount”. Do not add them together.",
  },
  {
    question: "Where do the ads appear?",
    answer: "In public channels with 1,000+ subscribers — you choose which ones. Ads never appear in private chats or the chat list.",
  },
  {
    question: "What can the ad text be?",
    answer: "Up to 160 characters including spaces, plus a button with a link. Links go only to a Telegram channel or bot; external sites are not allowed.",
  },
  {
    question: "What if my channel does not comply with the Ad Policies?",
    answer: "Then you cannot spend Stars on ads — gambling, politics, medical topics and dubious finance, for example, are prohibited. Withdrawal through Fragment remains.",
  },
  {
    question: "What do I need to withdraw?",
    answer: "To be the channel or bot owner, a two-step verification password, at least 1,000 Stars on the balance and a TON wallet. A Stars reward is available after 21 days; 1,000 Stars ≈ $13.",
  },
  {
    question: "Where do subscribers get Stars?",
    answer: `Inside Telegram (App Store or Google Play), on Fragment for Gram, or in Uzbekistan in som — at StarsPaymee a star costs ${STARS_PER_UNIT_UZS} som (card transfer, balance) or ${STARS_PER_UNIT_GATEWAY_UZS} som (Click, Payme, Uzum, Paynet), with just an @username.`,
  },
];

export const post: AeoPost = {
  slug: SLUG,
  category: "Biznes",
  type: "howto",
  datePublished: "2026-10-27",
  dateModified: "2026-10-27",
  keywords: [
    "stars telegram ads",
    "stars’ni reklamaga sarflash",
    "kanal stars reklama",
    "telegram ads stars bilan to‘lash",
    "stars yechib olish yoki reklama",
    "buy ads telegram",
    "реклама за звёзды telegram",
    "оплатить telegram ads звёздами",
    "telegram ads with stars",
    "use stars for telegram ads",
  ],
  howToSteps: [
    { name: "Monetizatsiya bo‘limini oching", text: "Kanal profili → Statistika → Monetizatsiya (yoki Balans) — kanal Stars balansi." },
    { name: "Buy Ads ni bosing", text: "Telegram Ad platformasi sahifasi shu kanal uchun ochiladi, to‘lov kanal Stars’idan." },
    { name: "E’lonni tuzing", text: "160 belgigacha matn, tugmada kanal havolasi, ko‘rsatiladigan kanallarni tanlang." },
    { name: "Byudjetni belgilang", text: "E’lon byudjet tugaguncha ko‘rsatiladi; xarajat balans tarixida yoziladi." },
    { name: "Natijani o‘lchang", text: "Kichik byudjetdan boshlab, obunachilar o‘sishi va ko‘rishlarni kuzating." },
  ],
  locales: {
    uz: {
      title: "Kanal topgan Stars’ni Telegram Ads’ga sarflash: yechib olish yoki reklamaga qayta tikish (2026)",
      excerpt:
        "Kanal topgan Stars’ni o‘sha kanal reklamasiga qanday sarflash mumkin, bir Star reklama krediti sifatida qancha turadi, «Buy Ads» qadamlari, Ads qoidalari va yechib olish bilan solishtirganda qachon foydali.",
      metaTitle: "Stars’ni Telegram Ads’ga sarflash yoki yechib olish",
      metaDescription: "Kanal topgan Stars’ni Telegram Ads’ga sarflash: 1 Star = 0,02 USD reklama krediti, yechib olishda 1 000 Stars ≈ 13 USD, «Buy Ads» qadamlari va Ads qoidalari.",
      answerTitle: "Qisqa javob",
      Answer: UzAnswer,
      Body: UzBody,
      ctaHeading: "Obunachilaringizga Stars — so‘mda",
      ctaBody: `Kanal Stars’i obunachilardan keladi. StarsPaymee’da ular Stars’ni donasi ${STARS_PER_UNIT_UZS} so‘mdan, @username bilan, 5 soniyada oladi.`,
      faq: faqUz,
    },
    ru: {
      title: "Stars канала на Telegram Ads: вывести или вложить в рекламу (2026)",
      excerpt:
        "Как потратить заработанные каналом Stars на рекламу этого канала, сколько стоит Star как рекламный кредит, шаги «Buy Ads», правила рекламы и когда это выгоднее вывода.",
      metaTitle: "Stars канала на Telegram Ads: вывести или в рекламу",
      metaDescription: "Как потратить Stars канала на Telegram Ads: 1 Star = 0,02 USD кредита, при выводе 1 000 Stars ≈ 13 USD, шаги «Buy Ads» и правила рекламы Telegram.",
      answerTitle: "Краткий ответ",
      Answer: RuAnswer,
      Body: RuBody,
      ctaHeading: "Stars для подписчиков — за сумы",
      ctaBody: `Stars канала приходят от подписчиков. В StarsPaymee они покупают звёзды от ${STARS_PER_UNIT_UZS} сум, по @username, за 5 секунд.`,
      faq: faqRu,
    },
    en: {
      title: "Spending your channel’s Stars on Telegram Ads: withdraw or reinvest (2026)",
      excerpt:
        "How to spend Stars your channel earned on ads for that channel, what a Star is worth as ad credit, the “Buy Ads” steps, the ad rules, and when it beats withdrawing.",
      metaTitle: "Channel Stars on Telegram Ads: withdraw or reinvest?",
      metaDescription: "How to spend your channel’s Stars on Telegram Ads: 1 Star = $0.02 of ad credit, withdrawing pays ≈ $13 per 1,000 Stars, the Buy Ads steps and ad rules.",
      answerTitle: "Short answer",
      Answer: EnAnswer,
      Body: EnBody,
      ctaHeading: "Stars for your subscribers — in som",
      ctaBody: `A channel’s Stars come from its subscribers. At StarsPaymee they buy Stars from ${STARS_PER_UNIT_UZS} som, by @username, within 5 seconds.`,
      faq: faqEn,
    },
  },
};
