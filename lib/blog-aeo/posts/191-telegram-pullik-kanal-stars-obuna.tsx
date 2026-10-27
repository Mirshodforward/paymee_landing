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

const SLUG = "telegram-pullik-kanal-stars-obuna";

/**
 * Telegram Stars obunasi bilan pullik kanal qanday ochiladi — kreator qo'llanmasi.
 *
 * NEGA ALOHIDA SAHIFA (2026-10-23): «pullik kanal ochish», «stars obuna kanal»,
 * «платный канал telegram» — sozlash niyati; 21-maqola (monetizatsiya) buni
 * 6 usuldan biri sifatida bir kartochkada eslatadi, qadamlar, narx chegarasi,
 * obunachi tomoni va yechish qoidalari yo'q edi. Bu maqola faqat shu funksiyani
 * boshidan oxirigacha yoritadi va 21-maqolaga havola beradi.
 *
 * FAKTLAR TEKSHIRILGAN (2026-10-23):
 * - telegram.org/blog/superchannels-star-reactions-subscriptions (2024-08-14):
 *   maxsus taklif havolasi, yo'l «Channel Settings > Channel Type > Manage Invite
 *   Links > Create a New Link», «Require Monthly Fee».
 * - core.telegram.org/api/subscriptions: davr qat'iy 30 kun; avtomatik yangilanish;
 *   balans yetmasa — tugaydi (missing_balance); davr ichida chiqib ketgan obunachi
 *   bepul qaytadi (can_refulfill); narx havola yaratishda beriladi.
 * - core.telegram.org/api/config: stars_subscription_amount_max = 10000,
 *   stars_revenue_withdrawal_min = 1000, stars_usd_withdraw_rate_x1000 = 1300.
 * - telegram.org/tos/content-creator-rewards: Stars mukofoti 21 kundan keyin,
 *   Gram 2 kundan keyin; Fragment orqali; reklama krediti 0,02 USD/Stars;
 *   akkaunt/kanalga kirish yo'qolsa balans yonadi; Stars 3 yil amal qiladi; soliq
 *   kreator zimmasida.
 * - telegram.org/blog/monetization-for-channels: 1000 obunachi — faqat reklama
 *   daromadini bo'lishish uchun; Stars funksiyalarida chegara yo'q.
 * Obuna tugaganda obunachining kanaldan AVTOMATIK chiqarilishi rasmiy hujjatda
 * yo'q — «kirish to'xtaydi» deb yozilgan. Loyihadagi «2500 Stars» chegarasi
 * eskirgan (konfiguratsiyada 10 000). StarsPaymee kreator Stars'ini sotib olmaydi —
 * shunday yozilgan.
 */

type Locale = "uz" | "ru" | "en";

/** Telegram konfiguratsiyasi va kreatorlar shartlari (2026-10-23 holatiga). */
const SUB_MAX_STARS = 10_000; // stars_subscription_amount_max
const WITHDRAW_MIN_STARS = 1_000; // stars_revenue_withdrawal_min
const WITHDRAW_USD_PER_1000 = 13; // stars_usd_withdraw_rate_x1000 = 1300
const HOLD_DAYS = 21; // ToS 4.1

const fmt = (n: number, locale: Locale) =>
  locale === "en" ? n.toLocaleString("en-US") : n.toLocaleString("ru-RU").replace(/ /g, " ");
const usd = (stars: number, locale: Locale) => {
  const s = ((stars * WITHDRAW_USD_PER_1000) / 1000).toFixed(2);
  return locale === "en" ? `$${s}` : `${s.replace(".", ",")} USD`;
};

function PriceTable({ locale }: { locale: Locale }) {
  const copy = {
    uz: ["Obuna narxi", "Obunachiga oyiga · karta/balans", "Click · Payme · Uzum · Paynet", "Kreator mukofoti ≈"],
    ru: ["Цена подписки", "Подписчику в месяц · карта/баланс", "Click · Payme · Uzum · Paynet", "Награда автора ≈"],
    en: ["Subscription price", "Subscriber pays per month · card/balance", "Click · Payme · Uzum · Paynet", "Creator reward ≈"],
  }[locale];
  const unit = { uz: "so‘m", ru: "сум", en: "som" }[locale];
  return (
    <CompareTable
      headers={copy}
      rows={[50, 100, 250, 500, 1000].map((n) => [
        <strong key="n">{`${fmt(n, locale)} ⭐`}</strong>,
        `${fmt(n * STARS_PER_UNIT_UZS, locale)} ${unit}`,
        `${fmt(n * STARS_PER_UNIT_GATEWAY_UZS, locale)} ${unit}`,
        usd(n, locale),
      ])}
    />
  );
}

const SRC = {
  blog: "https://telegram.org/blog/superchannels-star-reactions-subscriptions",
  tos: "https://telegram.org/tos/content-creator-rewards",
  api: "https://core.telegram.org/api/subscriptions",
  config: "https://core.telegram.org/api/config",
  ads: "https://telegram.org/blog/monetization-for-channels",
};

/* ---------------- UZ ---------------- */
function UzAnswer() {
  return (
    <p>
      Pullik kanal — bu <b>oylik Stars to‘lovi</b> talab qilinadigan maxsus taklif havolasi. Kanal sozlamalari → Kanal
      turi → Taklif havolalari → Yangi havola → «Require Monthly Fee» (oylik to‘lov) ni yoqib, narxni Stars’da
      kiritasiz. Obunachi havolani bosib to‘laydi va kanalga kiradi; obuna har 30 kunda avtomatik yangilanadi. Stars
      kanal balansiga tushadi: {HOLD_DAYS} kundan keyin, kamida {fmt(WITHDRAW_MIN_STARS, "uz")} Stars bo‘lsa, Fragment
      orqali Gram’ga yechiladi yoki Telegram Ads’ga sarflanadi.
    </p>
  );
}

function UzBody() {
  return (
    <>
      <Toc
        label="Mundarija"
        items={[
          { href: "#qanday", label: "Bu qanday ishlaydi" },
          { href: "#sozlash", label: "Sozlash: 5 qadam" },
          { href: "#narx", label: "Narxni tanlash — Stars, so‘m va mukofot" },
          { href: "#obunachi", label: "Obunachi tomonida nima bo‘ladi" },
          { href: "#birinchi-oy", label: "Birinchi oyni rejalashtirish" },
          { href: "#daromad", label: "Daromad qayerga tushadi va qanday yechiladi" },
          { href: "#stars-yoq", label: "Obunachida Stars bo‘lmasa" },
          { href: "#cheklovlar", label: "Cheklovlar va xatolar" },
        ]}
      />

      <h2 id="qanday">Bu qanday ishlaydi</h2>
      <p>
        2024-yil avgustdan Telegram kanal egalariga <b>pullik taklif havolasi</b> yaratish imkonini berdi: havolani
        bosgan odam belgilangan miqdordagi Stars’ni to‘laydi va yopiq kanalga qo‘shiladi, keyin har oy shu summa uning
        Stars balansidan avtomatik yechiladi. Reklama sotish, tashqi to‘lov tizimi yoki alohida bot kerak emas —
        hammasi Telegram ichida. Telegram buni qo‘shimcha kontent, erta kirish va eksklyuziv materiallar uchun
        tavsiya qiladi.
      </p>
      <KeyFacts label="Asosiy faktlar">
        <li>
          <b>Mexanizm:</b> oylik to‘lovli maxsus taklif havolasi; to‘lov Stars’da.
        </li>
        <li>
          <b>Davr:</b> qat’iy 30 kun, avtomatik yangilanadi.
        </li>
        <li>
          <b>Narx:</b> havola yaratishda belgilanadi, yuqori chegara {fmt(SUB_MAX_STARS, "uz")} Stars/oy.
        </li>
        <li>
          <b>Obunachi soni talabi yo‘q:</b> «1000 obunachi» faqat reklama daromadini bo‘lishish uchun kerak; Stars
          obuna istalgan kanalda ishlaydi.
        </li>
        <li>
          <b>Daromad:</b> Stars kanal balansiga tushadi (shaxsiy balansga emas).
        </li>
      </KeyFacts>

      <h2 id="sozlash">Sozlash: 5 qadam</h2>
      <Steps>
        <Step title="1. Kanalni tayyorlang">
          Pullik kontent uchun <b>yopiq (private)</b> kanal oching yoki mavjudini tanlang. Ochiq kanalga @username
          orqali bepul kirish mumkin, shuning uchun pullik havola yopiq kanal uchun mo‘ljallangan.
        </Step>
        <Step title="2. Kanal sozlamalari → Kanal turi">
          Kanal profilida «Tahrirlash» → «Kanal turi» (Channel Type) bo‘limiga kiring.
        </Step>
        <Step title="3. Taklif havolalarini boshqarish → Yangi havola">
          «Taklif havolalari» (Manage Invite Links) → «Yangi havola yaratish» (Create a New Link).
        </Step>
        <Step title="4. «Require Monthly Fee» ni yoqing va narxni kiriting">
          Oylik to‘lovni yoqib, Stars’dagi narxni yozing — {fmt(SUB_MAX_STARS, "uz")} gacha. Narx havolaga
          biriktiriladi: boshqa narx kerak bo‘lsa, yangi havola yaratasiz, mavjud obunalar o‘z narxida davom etadi.
        </Step>
        <Step title="5. Havolani e’lon qiling">
          Asosiy (ochiq) kanalda, profil bio’sida yoki qadab qo‘yilgan postda. Kim qo‘shilgani va kimning obunasi
          tugagani «Taklif havolalari» bo‘limida ko‘rinadi.
        </Step>
      </Steps>
      <Notice label="Eslatma">
        Menyu nomlari Telegram tiliga qarab farq qiladi; inglizcha interfeysda yo‘l «Channel Settings → Channel Type →
        Manage Invite Links → Create a New Link → Require Monthly Fee». Yo‘l Telegram’ning rasmiy e’lonidan olingan.
      </Notice>

      <h2 id="narx">Narxni tanlash — Stars, so‘m va mukofot</h2>
      <p>
        Obunachi narxni Stars’da ko‘radi, lekin pulni so‘mda sarflaydi — shuning uchun narxni ikkala o‘lchovda
        hisoblang. Jadvalda: obuna narxi, O‘zbekistondagi obunachiga bir oy qanchaga tushishi (StarsPaymee’da Stars
        donasi {STARS_PER_UNIT_UZS} so‘m karta o‘tkazmasi va balansdan, {STARS_PER_UNIT_GATEWAY_UZS} so‘m Click,
        Payme, Uzum yoki Paynet orqali) va kreator yechib olganda taxminan qancha olishi (Telegram konfiguratsiyasi:{" "}
        {fmt(1000, "uz")} Stars = {WITHDRAW_USD_PER_1000} USD).
      </p>
      <PriceTable locale="uz" />
      <Notice label="Muhim">
        Mukofot qiymatini Telegram o‘zi belgilaydi va o‘zgartirishi mumkin («Telegram determines the monetary value it
        assigns to Stars in its sole discretion»). Jadvaldagi USD — yo‘naltiruvchi raqam, kafolat emas. Obunachi
        Stars’ni qayerdan olganiga qarab unga tushadigan narx ham farq qiladi.
      </Notice>
      <KeyFacts label="Narx bo‘yicha amaliy qoida">
        <li>Past narx bilan boshlang — obunachi yig‘ish keyin narx tushirishdan osonroq.</li>
        <li>Yangi narx — yangi havola; eski havolani o‘chirib qo‘ysangiz, yangi kiruvchilar faqat yangi narxni ko‘radi.</li>
        <li>Narxni auditoriya oyiga sarflashga tayyor bo‘lgan so‘mdan kelib chiqib tanlang, Stars’dan emas.</li>
      </KeyFacts>

      <h2 id="obunachi">Obunachi tomonida nima bo‘ladi</h2>
      <InfoGrid>
        <InfoCard emoji="💫" title="To‘lov Stars balansidan">
          Havolani bosganda Telegram narxni ko‘rsatadi va Stars balansidan yechadi. Stars yetmasa, Telegram sotib
          olishni taklif qiladi.
        </InfoCard>
        <InfoCard emoji="🔁" title="Avtomatik yangilanish">
          Har 30 kunda shu summa qayta yechiladi. Obunalar Sozlamalar → «Mening yulduzlarim» (My Stars) bo‘limida
          ko‘rinadi; bekor qilish ham shu yerda — keyingi yangilanish bo‘lmaydi.
        </InfoCard>
        <InfoCard emoji="⛔" title="Balans yetmasa">
          Yangilanish vaqtida Stars yetarli bo‘lmasa, obuna tugaydi va kanalga kirish to‘xtaydi. Balansni to‘ldirib,
          havola orqali qayta obuna bo‘linadi.
        </InfoCard>
        <InfoCard emoji="🚪" title="Chiqib ketsa">
          To‘langan 30 kun ichida kanaldan chiqib ketgan obunachi o‘sha havola orqali qayta to‘lovsiz qaytadi — davr
          tugamagan bo‘lsa.
        </InfoCard>
      </InfoGrid>

      <h2 id="birinchi-oy">Birinchi oyni rejalashtirish</h2>
      <p>
        Texnik qism besh daqiqa; qiyini — odamni har oy to‘lashga undash. Obunachi har 30 kunda qiymat ko‘rishi
        kerak, aks holda yangilanishni bekor qiladi.
      </p>
      <KeyFacts label="4 amaliy maslahat">
        <li>
          <b>Va’dani aniq yozing:</b> haftasiga nechta post, qanday format, qaysi kunlari — havola yonida.
        </li>
        <li>
          <b>Namuna ko‘rsating:</b> ochiq kanalda pullik kontentdan qisqa parcha yoki birinchi post bepul.
        </li>
        <li>
          <b>Narxni sinang:</b> arzon havola bilan boshlab, javobga qarab yangi narxli havola chiqaring.
        </li>
        <li>
          <b>Ritmni ushlang:</b> yangilanish kunidan oldin kuchli material — bekor qilishlar kamayadi.
        </li>
      </KeyFacts>
      <p>
        Pullik obuna — kanal daromadining usullaridan biri. Pullik postlar, Star Reactions va sovg‘alar bilan
        birgalikda ishlatish haqida —{" "}
        <Link href="/blog/telegram-kanal-stars-monetizatsiya">Telegram kanalni Stars yordamida monetizatsiya qilish</Link>.
      </p>

      <h2 id="daromad">Daromad qayerga tushadi va qanday yechiladi</h2>
      <p>
        Obunalardan tushgan Stars <b>kanal balansida</b> turadi: kanal profili → Statistika → Monetizatsiya (Stars).
        Ikki yo‘l bor: Stars’ni shu kanalni Telegram Ads orqali reklama qilishga sarflash yoki Fragment orqali{" "}
        <b>Gram</b> (sobiq Toncoin) ga yechish. Gram nima va nega nomi o‘zgargani —{" "}
        <Link href="/blog/toncoin-endi-gram">Toncoin endi Gram</Link> maqolasida.
      </p>
      <KeyFacts label="Qoidalar (Telegram kreatorlar shartlari va konfiguratsiyasi)">
        <li>
          <b>{HOLD_DAYS} kun:</b> Stars mukofoti olingan kundan {HOLD_DAYS} kundan keyin yechishga tayyor bo‘ladi (Gram
          mukofoti — 2 kundan keyin).
        </li>
        <li>
          <b>Kamida {fmt(WITHDRAW_MIN_STARS, "uz")} Stars:</b> kanal balansida shuncha bo‘lmasa, yechish tugmasi ishlamaydi.
        </li>
        <li>
          <b>Qiymat:</b> yechishda {fmt(1000, "uz")} Stars ≈ {WITHDRAW_USD_PER_1000} USD; reklama uchun 1 Stars = 0,02
          USD kredit.
        </li>
        <li>
          <b>Fragment:</b> yechishni Fragment amalga oshiradi — Gram hamyoni kerak; o‘tkazma qaytarib bo‘lmaydi,
          manzilni to‘g‘ri kiriting.
        </li>
        <li>
          <b>Kirish yo‘qolsa — balans yonadi:</b> akkaunt yoki kanalga kirishni yo‘qotsangiz, Telegram balansni
          qoplamaydi. Ikki bosqichli tasdiqlashni yoqing —{" "}
          <Link href="/blog/telegram-akkauntni-ogirlashdan-himoya-2fa">2FA qo‘llanmasi</Link>.
        </li>
        <li>
          <b>Muddat va soliq:</b> ishlab topilgan Stars 3 yil amal qiladi; soliqlar kreator zimmasida.
        </li>
      </KeyFacts>

      <p>
        Kanal topgan Stars’ni shu kanal reklamasiga ham sarflash mumkin — reklamada 1 Star = 0,02 USD kredit; qachon
        foydali — <Link href="/blog/telegram-ads-stars-sarflash">Stars’ni Telegram Ads’ga sarflash yoki yechib olish</Link>.
      </p>

      <h2 id="stars-yoq">Obunachida Stars bo‘lmasa</h2>
      <p>
        Obunachilaringizning bir qismida Stars bo‘lmaydi — va O‘zbekiston kartasi bilan Telegram ichida olish qiyin.
        Ularga tayyor yo‘l ko‘rsating: <b>StarsPaymee’da Stars so‘mda</b> olinadi — UzCard/HUMO o‘tkazma, Click, Payme,
        Uzum yoki Paynet, 50 dan 10 000 gacha, faqat @username, 5 soniyada balansda. Obuna narxi 100 Stars bo‘lsa, bu
        obunachiga oyiga {fmt(100 * STARS_PER_UNIT_UZS, "uz")}–{fmt(100 * STARS_PER_UNIT_GATEWAY_UZS, "uz")} so‘m.
        Havolangiz yonida shuni yozib qo‘ying.
      </p>
      <InlineCta text="Obuna uchun Stars kerakmi? So‘mda, username bilan — 5 soniyada balansda." product={{ kind: "stars", amount: 100 }} />
      <p>
        Kreator uchun eslatma: StarsPaymee Stars <b>sotadi</b>, lekin kanal balansidagi Stars’ni sotib olmaydi va
        so‘mga aylantirmaydi — yechish faqat Telegram’ning rasmiy yo‘li (Fragment) orqali. Stars nima va nimaga
        sarflanishi — <Link href="/stars">Telegram Stars sahifasi</Link>.
      </p>

      <h2 id="cheklovlar">Cheklovlar va xatolar</h2>
      <Notice label="Diqqat">
        Pullik havola — Telegram xizmati, StarsPaymee emas. Qoidalarni buzgan kanal mukofotidan mahrum qilinishi
        mumkin; pullik kontent ham Telegram’ning umumiy qoidalariga bo‘ysunadi.
      </Notice>
      <KeyFacts label="Bilib qo‘ying">
        <li>Faqat kanallar (va botlar) uchun; guruhlarda Stars obuna yo‘q.</li>
        <li>Davr faqat 30 kun — haftalik yoki yillik obuna yo‘q; yillik taklif uchun alohida havola va narx qiling.</li>
        <li>Havola narxi o‘zgarmaydi — yangi narx uchun yangi havola.</li>
        <li>Ba’zi mintaqalarda Stars sotib olish Telegram ichida bloklangan — obunachi Stars’ni tashqaridan oladi.</li>
        <li>Obunachi to‘lagan Stars qaytarilmaydi — kontent va’dasini bajaring.</li>
      </KeyFacts>

      <Sources
        label="Manbalar"
        items={[
          { href: SRC.blog, label: "Telegram Blog — Super Channels, Star Reactions and Subscriptions", note: "2024-08-14, rasmiy e’lon va sozlash yo‘li" },
          { href: SRC.tos, label: "Telegram — Terms of Service for Content Creators", note: "21 kun, Fragment, reklama krediti, balans qoidalari" },
          { href: SRC.api, label: "core.telegram.org/api/subscriptions", note: "30 kunlik davr, yangilanish, balans yetmasa" },
          { href: SRC.config, label: "core.telegram.org/api/config", note: "narx chegarasi, minimal yechish, USD qiymati" },
          { href: SRC.ads, label: "Telegram Blog — Sharing Revenue with Channel Owners", note: "1000 obunachi — reklama daromadi uchun" },
        ]}
      />
    </>
  );
}

/* ---------------- RU ---------------- */
function RuAnswer() {
  return (
    <p>
      Платный канал — это специальная пригласительная ссылка с <b>ежемесячной оплатой в Stars</b>. Настройки канала →
      Тип канала → Пригласительные ссылки → Новая ссылка → включить «Require Monthly Fee» (ежемесячная плата) и
      указать цену в Stars. Подписчик открывает ссылку, платит и вступает в канал; подписка продлевается автоматически
      каждые 30 дней. Stars поступают на баланс канала: через {HOLD_DAYS} день, при остатке от{" "}
      {fmt(WITHDRAW_MIN_STARS, "ru")} Stars, их выводят через Fragment в Gram или тратят на Telegram Ads.
    </p>
  );
}

function RuBody() {
  return (
    <>
      <Toc
        label="Содержание"
        items={[
          { href: "#qanday", label: "Как это работает" },
          { href: "#sozlash", label: "Настройка: 5 шагов" },
          { href: "#narx", label: "Выбор цены — Stars, сумы и награда" },
          { href: "#obunachi", label: "Что происходит у подписчика" },
          { href: "#birinchi-oy", label: "Планирование первого месяца" },
          { href: "#daromad", label: "Куда приходит доход и как его вывести" },
          { href: "#stars-yoq", label: "Если у подписчика нет Stars" },
          { href: "#cheklovlar", label: "Ограничения и ошибки" },
        ]}
      />

      <h2 id="qanday">Как это работает</h2>
      <p>
        С августа 2024 года Telegram позволяет владельцам каналов создавать <b>платные пригласительные ссылки</b>:
        человек открывает ссылку, платит указанное количество Stars и вступает в закрытый канал, а затем эта сумма
        каждый месяц автоматически списывается с его баланса Stars. Не нужны продажа рекламы, внешняя платёжная система
        или отдельный бот — всё внутри Telegram. Telegram рекомендует это для дополнительного контента, раннего доступа
        и эксклюзивных материалов.
      </p>
      <KeyFacts label="Главные факты">
        <li>
          <b>Механизм:</b> специальная пригласительная ссылка с ежемесячной платой; оплата в Stars.
        </li>
        <li>
          <b>Период:</b> строго 30 дней, продление автоматическое.
        </li>
        <li>
          <b>Цена:</b> задаётся при создании ссылки, верхний предел {fmt(SUB_MAX_STARS, "ru")} Stars в месяц.
        </li>
        <li>
          <b>Порога по подписчикам нет:</b> «1000 подписчиков» нужны только для доли рекламного дохода; Stars-подписка
          работает в любом канале.
        </li>
        <li>
          <b>Доход:</b> Stars поступают на баланс канала (не на личный баланс).
        </li>
      </KeyFacts>

      <h2 id="sozlash">Настройка: 5 шагов</h2>
      <Steps>
        <Step title="1. Подготовьте канал">
          Создайте <b>закрытый (private)</b> канал для платного контента или выберите существующий. В открытый канал
          можно войти бесплатно по @username, поэтому платная ссылка предназначена для закрытого канала.
        </Step>
        <Step title="2. Настройки канала → Тип канала">
          В профиле канала «Изменить» → раздел «Тип канала» (Channel Type).
        </Step>
        <Step title="3. Управление ссылками → Новая ссылка">
          «Пригласительные ссылки» (Manage Invite Links) → «Создать новую ссылку» (Create a New Link).
        </Step>
        <Step title="4. Включите «Require Monthly Fee» и укажите цену">
          Включите ежемесячную плату и введите цену в Stars — до {fmt(SUB_MAX_STARS, "ru")}. Цена привязана к ссылке:
          для другой цены создаётся новая ссылка, существующие подписки продолжаются по своей цене.
        </Step>
        <Step title="5. Опубликуйте ссылку">
          В основном (открытом) канале, в описании профиля или в закреплённом посте. Кто вступил и у кого подписка
          истекла, видно в разделе «Пригласительные ссылки».
        </Step>
      </Steps>
      <Notice label="Примечание">
        Названия пунктов зависят от языка Telegram; в английском интерфейсе путь: «Channel Settings → Channel Type →
        Manage Invite Links → Create a New Link → Require Monthly Fee». Путь взят из официального объявления Telegram.
      </Notice>

      <h2 id="narx">Выбор цены — Stars, сумы и награда</h2>
      <p>
        Подписчик видит цену в Stars, но тратит деньги в сумах — считайте цену в обеих единицах. В таблице: цена
        подписки, во сколько месяц обходится подписчику из Узбекистана (в StarsPaymee звезда стоит{" "}
        {STARS_PER_UNIT_UZS} сум при переводе на карту и с баланса, {STARS_PER_UNIT_GATEWAY_UZS} сум через Click,
        Payme, Uzum или Paynet) и сколько примерно получит автор при выводе (конфигурация Telegram:{" "}
        {fmt(1000, "ru")} Stars = {WITHDRAW_USD_PER_1000} USD).
      </p>
      <PriceTable locale="ru" />
      <Notice label="Важно">
        Стоимость награды определяет сам Telegram и может её менять («Telegram determines the monetary value it
        assigns to Stars in its sole discretion»). USD в таблице — ориентир, не гарантия. Цена для подписчика тоже
        зависит от того, где он покупает Stars.
      </Notice>
      <KeyFacts label="Практическое правило по цене">
        <li>Начинайте с низкой цены — набрать подписчиков проще, чем потом снижать цену.</li>
        <li>Новая цена — новая ссылка; если отозвать старую, новые участники увидят только новую цену.</li>
        <li>Выбирайте цену исходя из сумов, которые аудитория готова тратить в месяц, а не из Stars.</li>
      </KeyFacts>

      <h2 id="obunachi">Что происходит у подписчика</h2>
      <InfoGrid>
        <InfoCard emoji="💫" title="Оплата с баланса Stars">
          При открытии ссылки Telegram показывает цену и списывает Stars с баланса. Если Stars не хватает, Telegram
          предлагает купить их.
        </InfoCard>
        <InfoCard emoji="🔁" title="Автопродление">
          Каждые 30 дней сумма списывается снова. Подписки видны в Настройки → «Мои звёзды» (My Stars); там же их
          отменяют — следующего продления не будет.
        </InfoCard>
        <InfoCard emoji="⛔" title="Если баланса не хватает">
          Если в момент продления Stars недостаточно, подписка истекает и доступ к каналу прекращается. Пополнив
          баланс, подписчик оформляет подписку заново по ссылке.
        </InfoCard>
        <InfoCard emoji="🚪" title="Если вышел из канала">
          Подписчик, покинувший канал в течение оплаченных 30 дней, возвращается по той же ссылке без новой оплаты —
          пока период не истёк.
        </InfoCard>
      </InfoGrid>

      <h2 id="birinchi-oy">Планирование первого месяца</h2>
      <p>
        Техническая часть занимает пять минут; сложное — убедить людей платить каждый месяц. Подписчик должен видеть
        ценность каждые 30 дней, иначе он отменит продление.
      </p>
      <KeyFacts label="4 практических совета">
        <li>
          <b>Чётко пропишите обещание:</b> сколько постов в неделю, в каком формате, в какие дни — рядом со ссылкой.
        </li>
        <li>
          <b>Покажите образец:</b> короткий фрагмент платного контента в открытом канале или первый пост бесплатно.
        </li>
        <li>
          <b>Тестируйте цену:</b> начните с дешёвой ссылки и по реакции выпустите ссылку с новой ценой.
        </li>
        <li>
          <b>Держите ритм:</b> сильный материал перед датой продления — отмен становится меньше.
        </li>
      </KeyFacts>
      <p>
        Платная подписка — один из способов дохода канала. Как сочетать её с платными постами, Star Reactions и
        подарками —{" "}
        <Link href="/blog/telegram-kanal-stars-monetizatsiya">монетизация Telegram-канала через Stars</Link>.
      </p>

      <h2 id="daromad">Куда приходит доход и как его вывести</h2>
      <p>
        Stars от подписок лежат на <b>балансе канала</b>: профиль канала → Статистика → Монетизация (Stars). Два пути:
        потратить Stars на продвижение этого канала через Telegram Ads или вывести через Fragment в <b>Gram</b>{" "}
        (бывший Toncoin). Что такое Gram и почему сменилось название —{" "}
        <Link href="/blog/toncoin-endi-gram">Toncoin теперь Gram</Link>.
      </p>
      <KeyFacts label="Правила (условия Telegram для авторов и конфигурация)">
        <li>
          <b>{HOLD_DAYS} день:</b> награда в Stars становится доступной для вывода через {HOLD_DAYS} день после
          получения (награда в Gram — через 2 дня).
        </li>
        <li>
          <b>Минимум {fmt(WITHDRAW_MIN_STARS, "ru")} Stars:</b> пока на балансе канала меньше, кнопка вывода не работает.
        </li>
        <li>
          <b>Стоимость:</b> при выводе {fmt(1000, "ru")} Stars ≈ {WITHDRAW_USD_PER_1000} USD; для рекламы 1 Star = 0,02 USD
          кредита.
        </li>
        <li>
          <b>Fragment:</b> вывод выполняет Fragment — нужен кошелёк Gram; перевод необратим, адрес вводите внимательно.
        </li>
        <li>
          <b>Потеря доступа — потеря баланса:</b> если вы потеряете доступ к аккаунту или каналу, Telegram баланс не
          компенсирует. Включите двухэтапную аутентификацию —{" "}
          <Link href="/blog/telegram-akkauntni-ogirlashdan-himoya-2fa">руководство по 2FA</Link>.
        </li>
        <li>
          <b>Срок и налоги:</b> заработанные Stars действуют 3 года; налоги — на авторе.
        </li>
      </KeyFacts>

      <p>
        Заработанные каналом Stars можно потратить и на рекламу этого канала — в рекламе 1 Star = 0,02 USD кредита;
        когда это выгоднее — <Link href="/blog/telegram-ads-stars-sarflash">Stars канала на Telegram Ads: вывести или в рекламу</Link>.
      </p>

      <h2 id="stars-yoq">Если у подписчика нет Stars</h2>
      <p>
        У части подписчиков Stars не будет — а купить их внутри Telegram с узбекской картой сложно. Дайте им готовый
        путь: <b>в StarsPaymee Stars покупают за сумы</b> — перевод UzCard/HUMO, Click, Payme, Uzum или Paynet, от 50 до
        10 000, только @username, на балансе за 5 секунд. При цене подписки 100 Stars это{" "}
        {fmt(100 * STARS_PER_UNIT_UZS, "ru")}–{fmt(100 * STARS_PER_UNIT_GATEWAY_UZS, "ru")} сум в месяц. Напишите об этом
        рядом со ссылкой.
      </p>
      <InlineCta text="Нужны Stars для подписки? В сумах, по username — на балансе за 5 секунд." product={{ kind: "stars", amount: 100 }} />
      <p>
        Для автора: StarsPaymee Stars <b>продаёт</b>, но не выкупает Stars с баланса канала и не конвертирует их в
        сумы — вывод только официальным путём Telegram (Fragment). Что такое Stars и на что они тратятся —{" "}
        <Link href="/stars">страница Telegram Stars</Link>.
      </p>

      <h2 id="cheklovlar">Ограничения и ошибки</h2>
      <Notice label="Внимание">
        Платная ссылка — сервис Telegram, а не StarsPaymee. Канал, нарушающий правила, может лишиться награды;
        платный контент тоже подчиняется общим правилам Telegram.
      </Notice>
      <KeyFacts label="Имейте в виду">
        <li>Только каналы (и боты); в группах Stars-подписки нет.</li>
        <li>Период только 30 дней — недельной или годовой подписки нет; для годового предложения сделайте отдельную ссылку и цену.</li>
        <li>Цена ссылки не меняется — для новой цены нужна новая ссылка.</li>
        <li>В некоторых регионах покупка Stars внутри Telegram заблокирована — подписчик покупает Stars снаружи.</li>
        <li>Оплаченные подписчиком Stars не возвращаются — выполняйте обещание по контенту.</li>
      </KeyFacts>

      <Sources
        label="Источники"
        items={[
          { href: SRC.blog, label: "Telegram Blog — Super Channels, Star Reactions and Subscriptions", note: "2024-08-14, официальное объявление и путь настройки" },
          { href: SRC.tos, label: "Telegram — Terms of Service for Content Creators", note: "21 день, Fragment, рекламный кредит, правила баланса" },
          { href: SRC.api, label: "core.telegram.org/api/subscriptions", note: "период 30 дней, продление, нехватка баланса" },
          { href: SRC.config, label: "core.telegram.org/api/config", note: "предел цены, минимум вывода, стоимость в USD" },
          { href: SRC.ads, label: "Telegram Blog — Sharing Revenue with Channel Owners", note: "1000 подписчиков — для рекламного дохода" },
        ]}
      />
    </>
  );
}

/* ---------------- EN ---------------- */
function EnAnswer() {
  return (
    <p>
      A paid channel is a special invite link with a <b>monthly fee in Stars</b>. Channel Settings → Channel Type →
      Manage Invite Links → Create a New Link → turn on “Require Monthly Fee” and set the price in Stars. A subscriber
      opens the link, pays and joins; the subscription renews automatically every 30 days. Stars land on the channel’s
      balance: after {HOLD_DAYS} days, with at least {fmt(WITHDRAW_MIN_STARS, "en")} Stars, they can be withdrawn
      through Fragment in Gram or spent on Telegram Ads.
    </p>
  );
}

function EnBody() {
  return (
    <>
      <Toc
        label="Contents"
        items={[
          { href: "#qanday", label: "How it works" },
          { href: "#sozlash", label: "Setup: 5 steps" },
          { href: "#narx", label: "Choosing a price — Stars, som and reward" },
          { href: "#obunachi", label: "What happens on the subscriber’s side" },
          { href: "#birinchi-oy", label: "Planning the first month" },
          { href: "#daromad", label: "Where the income goes and how to withdraw it" },
          { href: "#stars-yoq", label: "If a subscriber has no Stars" },
          { href: "#cheklovlar", label: "Limits and mistakes" },
        ]}
      />

      <h2 id="qanday">How it works</h2>
      <p>
        Since August 2024 Telegram lets channel owners create <b>paid invite links</b>: a person opens the link, pays
        the set number of Stars and joins the private channel, and then the same amount is debited from their Stars
        balance automatically every month. No ad sales, no external payment system, no separate bot — everything stays
        inside Telegram. Telegram suggests it for bonus content, early access and exclusive material.
      </p>
      <KeyFacts label="Key facts">
        <li>
          <b>Mechanism:</b> a special invite link with a monthly fee; payment in Stars.
        </li>
        <li>
          <b>Period:</b> fixed at 30 days, renews automatically.
        </li>
        <li>
          <b>Price:</b> set when the link is created, upper limit {fmt(SUB_MAX_STARS, "en")} Stars per month.
        </li>
        <li>
          <b>No subscriber threshold:</b> “1,000 subscribers” applies only to ad revenue sharing; Stars subscriptions
          work in any channel.
        </li>
        <li>
          <b>Income:</b> Stars go to the channel’s balance (not your personal balance).
        </li>
      </KeyFacts>

      <h2 id="sozlash">Setup: 5 steps</h2>
      <Steps>
        <Step title="1. Prepare the channel">
          Create a <b>private</b> channel for the paid content or pick an existing one. A public channel can be joined
          free via its @username, so paid links are meant for private channels.
        </Step>
        <Step title="2. Channel Settings → Channel Type">
          In the channel profile open “Edit” → “Channel Type”.
        </Step>
        <Step title="3. Manage Invite Links → Create a New Link">
          Open “Manage Invite Links” and choose “Create a New Link”.
        </Step>
        <Step title="4. Turn on “Require Monthly Fee” and set the price">
          Enable the monthly fee and enter the price in Stars — up to {fmt(SUB_MAX_STARS, "en")}. The price is attached
          to the link: for a different price you create a new link, and existing subscriptions keep their price.
        </Step>
        <Step title="5. Publish the link">
          In your main (public) channel, your profile bio or a pinned post. Who joined and whose subscription has
          expired is visible under “Invite Links”.
        </Step>
      </Steps>
      <Notice label="Note">
        Menu names depend on your Telegram language; the English path is “Channel Settings → Channel Type → Manage
        Invite Links → Create a New Link → Require Monthly Fee”, taken from Telegram’s official announcement.
      </Notice>

      <h2 id="narx">Choosing a price — Stars, som and reward</h2>
      <p>
        The subscriber sees the price in Stars but spends money in som — so work out the price in both units. The
        table shows the subscription price, what a month costs a subscriber in Uzbekistan (at StarsPaymee a star costs{" "}
        {STARS_PER_UNIT_UZS} som by card transfer and from balance, {STARS_PER_UNIT_GATEWAY_UZS} som through Click,
        Payme, Uzum or Paynet) and roughly what the creator receives on withdrawal (Telegram configuration:{" "}
        {fmt(1000, "en")} Stars = ${WITHDRAW_USD_PER_1000}).
      </p>
      <PriceTable locale="en" />
      <Notice label="Important">
        Telegram sets the reward value itself and may change it (“Telegram determines the monetary value it assigns to
        Stars in its sole discretion”). The USD column is a guide, not a guarantee. What the subscriber pays also
        depends on where they buy their Stars.
      </Notice>
      <KeyFacts label="A practical pricing rule">
        <li>Start low — gaining subscribers is easier than cutting the price later.</li>
        <li>New price, new link; if you revoke the old link, newcomers see only the new price.</li>
        <li>Pick the price from the som your audience will spend per month, not from Stars.</li>
      </KeyFacts>

      <h2 id="obunachi">What happens on the subscriber’s side</h2>
      <InfoGrid>
        <InfoCard emoji="💫" title="Paid from the Stars balance">
          When the link is opened, Telegram shows the price and debits the Stars balance. If there are not enough
          Stars, Telegram offers to buy some.
        </InfoCard>
        <InfoCard emoji="🔁" title="Automatic renewal">
          Every 30 days the same amount is debited again. Subscriptions are listed under Settings → “My Stars”; they
          are cancelled there too — then there is no next renewal.
        </InfoCard>
        <InfoCard emoji="⛔" title="Not enough balance">
          If the balance is short at renewal time, the subscription expires and access to the channel stops. After
          topping up, the subscriber subscribes again through the link.
        </InfoCard>
        <InfoCard emoji="🚪" title="If they leave">
          A subscriber who leaves the channel within the paid 30 days returns through the same link without paying
          again — as long as the period has not ended.
        </InfoCard>
      </InfoGrid>

      <h2 id="birinchi-oy">Planning the first month</h2>
      <p>
        The technical part takes five minutes; the hard part is getting people to pay every month. A subscriber has to
        see value every 30 days, or they cancel the renewal.
      </p>
      <KeyFacts label="4 practical tips">
        <li>
          <b>Write the promise clearly:</b> how many posts a week, in what format, on which days — right next to the link.
        </li>
        <li>
          <b>Show a sample:</b> a short excerpt of the paid content in the public channel, or the first post free.
        </li>
        <li>
          <b>Test the price:</b> start with a cheap link and, based on the response, issue a link with a new price.
        </li>
        <li>
          <b>Keep the rhythm:</b> strong material before the renewal date — fewer cancellations.
        </li>
      </KeyFacts>
      <p>
        A paid subscription is one of several ways a channel earns. Combining it with paid posts, Star Reactions and
        gifts — <Link href="/blog/telegram-kanal-stars-monetizatsiya">monetising a Telegram channel with Stars</Link>.
      </p>

      <h2 id="daromad">Where the income goes and how to withdraw it</h2>
      <p>
        Stars from subscriptions sit on the <b>channel’s balance</b>: channel profile → Statistics → Monetization
        (Stars). There are two routes: spend the Stars on promoting this channel through Telegram Ads, or withdraw
        them through Fragment in <b>Gram</b> (formerly Toncoin). What Gram is and why the name changed —{" "}
        <Link href="/blog/toncoin-endi-gram">Toncoin is now Gram</Link>.
      </p>
      <KeyFacts label="Rules (Telegram’s creator terms and configuration)">
        <li>
          <b>{HOLD_DAYS} days:</b> a Stars reward becomes available for withdrawal {HOLD_DAYS} days after it was
          received (a Gram reward after 2 days).
        </li>
        <li>
          <b>At least {fmt(WITHDRAW_MIN_STARS, "en")} Stars:</b> below that on the channel balance, the withdraw button
          does not work.
        </li>
        <li>
          <b>Value:</b> on withdrawal {fmt(1000, "en")} Stars ≈ ${WITHDRAW_USD_PER_1000}; for ads 1 Star = $0.02 of
          credit.
        </li>
        <li>
          <b>Fragment:</b> withdrawals are processed by Fragment — you need a Gram wallet; a transfer is irreversible,
          so enter the address carefully.
        </li>
        <li>
          <b>Lose access, lose the balance:</b> if you lose access to the account or the channel, Telegram does not
          compensate the balance. Turn on two-step verification —{" "}
          <Link href="/blog/telegram-akkauntni-ogirlashdan-himoya-2fa">the 2FA guide</Link>.
        </li>
        <li>
          <b>Expiry and taxes:</b> earned Stars are valid for 3 years; taxes are the creator’s responsibility.
        </li>
      </KeyFacts>

      <p>
        Stars your channel earned can also pay for ads for that channel — 1 Star = $0.02 of ad credit; when it pays off —{" "}
        <Link href="/blog/telegram-ads-stars-sarflash">channel Stars on Telegram Ads: withdraw or reinvest</Link>.
      </p>

      <h2 id="stars-yoq">If a subscriber has no Stars</h2>
      <p>
        Some of your subscribers will not have Stars — and buying them inside Telegram with an Uzbek card is hard.
        Give them a ready path: <b>at StarsPaymee, Stars are bought in som</b> — UzCard/HUMO transfer, Click, Payme,
        Uzum or Paynet, 50 to 10,000, just an @username, on the balance in 5 seconds. At a subscription price of 100
        Stars that is {fmt(100 * STARS_PER_UNIT_UZS, "en")}–{fmt(100 * STARS_PER_UNIT_GATEWAY_UZS, "en")} som a month.
        Say so next to your link.
      </p>
      <InlineCta text="Need Stars for a subscription? In som, by username — on your balance in 5 seconds." product={{ kind: "stars", amount: 100 }} />
      <p>
        For creators: StarsPaymee <b>sells</b> Stars, but does not buy Stars from a channel balance or convert them
        into som — withdrawal goes only through Telegram’s official route (Fragment). What Stars are and what they are
        spent on — <Link href="/stars">the Telegram Stars page</Link>.
      </p>

      <h2 id="cheklovlar">Limits and mistakes</h2>
      <Notice label="Attention">
        A paid link is a Telegram service, not a StarsPaymee one. A channel that breaks the rules can lose its rewards;
        paid content is subject to Telegram’s general rules too.
      </Notice>
      <KeyFacts label="Keep in mind">
        <li>Channels (and bots) only; there are no Stars subscriptions in groups.</li>
        <li>The period is 30 days only — no weekly or yearly plans; for a yearly offer make a separate link and price.</li>
        <li>A link’s price does not change — a new price needs a new link.</li>
        <li>In some regions buying Stars inside Telegram is blocked — subscribers buy Stars elsewhere.</li>
        <li>Stars a subscriber has paid are not refunded — deliver the content you promised.</li>
      </KeyFacts>

      <Sources
        label="Sources"
        items={[
          { href: SRC.blog, label: "Telegram Blog — Super Channels, Star Reactions and Subscriptions", note: "2024-08-14, the official announcement and setup path" },
          { href: SRC.tos, label: "Telegram — Terms of Service for Content Creators", note: "21 days, Fragment, ad credit, balance rules" },
          { href: SRC.api, label: "core.telegram.org/api/subscriptions", note: "30-day period, renewal, insufficient balance" },
          { href: SRC.config, label: "core.telegram.org/api/config", note: "price cap, minimum withdrawal, USD value" },
          { href: SRC.ads, label: "Telegram Blog — Sharing Revenue with Channel Owners", note: "1,000 subscribers — for ad revenue" },
        ]}
      />
    </>
  );
}

const uzFaq = [
  {
    question: "Pullik kanal ochish uchun nechta obunachi kerak?",
    answer:
      "Chegara yo‘q — Stars obuna istalgan kanalda ishlaydi. «Kamida 1000 obunachi» talabi faqat Telegram Ads reklama daromadini bo‘lishish uchun.",
  },
  {
    question: "Ochiq kanalni pullik qilsa bo‘ladimi?",
    answer:
      "Pullik havola yopiq (private) kanal uchun: ochiq kanalga @username orqali bepul kirish mumkin. Kanalni yopiq qiling (username’ni olib tashlang) yoki pullik kontent uchun alohida yopiq kanal oching.",
  },
  {
    question: "Obuna narxi qancha bo‘lishi mumkin?",
    answer: `Narx oylik, Stars’da, havola yaratishda belgilanadi; yuqori chegara Telegram konfiguratsiyasida ${fmt(SUB_MAX_STARS, "uz")} Stars. Davr har doim 30 kun.`,
  },
  {
    question: "Narxni keyin o‘zgartirsa bo‘ladimi?",
    answer:
      "Mavjud havolaning narxi o‘zgarmaydi — yangi narx bilan yangi havola yaratasiz. Eski obunalar o‘z narxida davom etadi; eski havolani o‘chirsangiz, yangi kiruvchilar faqat yangi narxni ko‘radi.",
  },
  {
    question: "Obunachi to‘lamay qo‘ysa nima bo‘ladi?",
    answer:
      "Yangilanish vaqtida balansida Stars yetmasa yoki obunani bekor qilgan bo‘lsa, joriy 30 kun tugagach obuna tugaydi va kanalga kirish to‘xtaydi. Qaytish uchun havola orqali yana to‘laydi.",
  },
  {
    question: "Obunalardan tushgan Stars qayerda?",
    answer:
      "Kanal balansida — kanal profili → Statistika → Monetizatsiya (Stars). Shaxsiy Stars balansingizga tushmaydi.",
  },
  {
    question: "Daromadni qachon va qanday yechib olinadi?",
    answer: `Stars mukofoti olingan kundan ${HOLD_DAYS} kundan keyin yechishga tayyor bo‘ladi, balansda kamida ${fmt(WITHDRAW_MIN_STARS, "uz")} Stars bo‘lishi kerak. Yechish Fragment orqali Gram’ga (sobiq Toncoin) — Gram hamyoni kerak. Yoki Stars’ni shu kanalni Telegram Ads’da reklama qilishga sarflaysiz.`,
  },
  {
    question: "1 Stars kreator uchun qancha pul?",
    answer: `Telegram konfiguratsiyasida yechish qiymati ${fmt(1000, "uz")} Stars = ${WITHDRAW_USD_PER_1000} USD (1 Stars ≈ 0,013 USD), reklama krediti 1 Stars = 0,02 USD. Qiymatni Telegram belgilaydi va o‘zgartirishi mumkin.`,
  },
  {
    question: "Obunachilar Stars’ni qayerdan oladi?",
    answer: `Telegram ichida (App Store yoki Google Play orqali), Fragment’da Gram bilan yoki O‘zbekistonda so‘mda — StarsPaymee’da donasi ${STARS_PER_UNIT_UZS} so‘m (karta o‘tkazmasi, balans) yoki ${STARS_PER_UNIT_GATEWAY_UZS} so‘m (Click, Payme, Uzum, Paynet), faqat @username bilan.`,
  },
  {
    question: "StarsPaymee kreatorning Stars’ini so‘mga aylantiradimi?",
    answer:
      "Yo‘q. StarsPaymee Stars sotadi, lekin kanal balansidagi Stars’ni sotib olmaydi. Daromadni yechish faqat Telegram’ning rasmiy yo‘li — Fragment orqali Gram’ga.",
  },
];

const ruFaq = [
  {
    question: "Сколько подписчиков нужно, чтобы открыть платный канал?",
    answer:
      "Порога нет — Stars-подписка работает в любом канале. Требование «минимум 1000 подписчиков» относится только к доле рекламного дохода Telegram Ads.",
  },
  {
    question: "Можно ли сделать открытый канал платным?",
    answer:
      "Платная ссылка предназначена для закрытого (private) канала: в открытый можно войти бесплатно по @username. Сделайте канал закрытым (уберите username) или создайте отдельный закрытый канал для платного контента.",
  },
  {
    question: "Какой может быть цена подписки?",
    answer: `Цена ежемесячная, в Stars, задаётся при создании ссылки; верхний предел в конфигурации Telegram — ${fmt(SUB_MAX_STARS, "ru")} Stars. Период всегда 30 дней.`,
  },
  {
    question: "Можно ли потом изменить цену?",
    answer:
      "Цена существующей ссылки не меняется — создаётся новая ссылка с новой ценой. Старые подписки продолжаются по своей цене; если отозвать старую ссылку, новые участники увидят только новую цену.",
  },
  {
    question: "Что будет, если подписчик перестанет платить?",
    answer:
      "Если в момент продления на балансе не хватает Stars или подписка отменена, по окончании текущих 30 дней она истекает и доступ к каналу прекращается. Чтобы вернуться, подписчик платит снова по ссылке.",
  },
  {
    question: "Где лежат Stars от подписок?",
    answer:
      "На балансе канала — профиль канала → Статистика → Монетизация (Stars). На ваш личный баланс Stars они не поступают.",
  },
  {
    question: "Когда и как выводится доход?",
    answer: `Награда в Stars становится доступной через ${HOLD_DAYS} день после получения, на балансе должно быть не меньше ${fmt(WITHDRAW_MIN_STARS, "ru")} Stars. Вывод через Fragment в Gram (бывший Toncoin) — нужен кошелёк Gram. Либо Stars тратятся на рекламу этого канала в Telegram Ads.`,
  },
  {
    question: "Сколько стоит 1 Star для автора?",
    answer: `В конфигурации Telegram стоимость при выводе — ${fmt(1000, "ru")} Stars = ${WITHDRAW_USD_PER_1000} USD (1 Star ≈ 0,013 USD), рекламный кредит — 1 Star = 0,02 USD. Стоимость определяет Telegram и может её менять.`,
  },
  {
    question: "Откуда подписчики берут Stars?",
    answer: `Внутри Telegram (через App Store или Google Play), на Fragment за Gram или в Узбекистане за сумы — в StarsPaymee звезда стоит ${STARS_PER_UNIT_UZS} сум (перевод на карту, баланс) или ${STARS_PER_UNIT_GATEWAY_UZS} сум (Click, Payme, Uzum, Paynet), нужен только @username.`,
  },
  {
    question: "Конвертирует ли StarsPaymee Stars автора в сумы?",
    answer:
      "Нет. StarsPaymee продаёт Stars, но не выкупает Stars с баланса канала. Вывод дохода — только официальным путём Telegram, через Fragment в Gram.",
  },
];

const enFaq = [
  {
    question: "How many subscribers do I need to open a paid channel?",
    answer:
      "There is no threshold — Stars subscriptions work in any channel. The “at least 1,000 subscribers” requirement applies only to Telegram Ads revenue sharing.",
  },
  {
    question: "Can I make a public channel paid?",
    answer:
      "Paid links are for private channels: a public channel can be joined free via its @username. Make the channel private (remove the username) or create a separate private channel for the paid content.",
  },
  {
    question: "What can the subscription price be?",
    answer: `The price is monthly, in Stars, set when the link is created; the upper limit in Telegram’s configuration is ${fmt(SUB_MAX_STARS, "en")} Stars. The period is always 30 days.`,
  },
  {
    question: "Can I change the price later?",
    answer:
      "An existing link’s price does not change — you create a new link with the new price. Old subscriptions continue at their price; if you revoke the old link, newcomers see only the new price.",
  },
  {
    question: "What happens if a subscriber stops paying?",
    answer:
      "If the balance is short at renewal time or the subscription was cancelled, it expires at the end of the current 30 days and access to the channel stops. To come back, the subscriber pays again through the link.",
  },
  {
    question: "Where are the Stars from subscriptions?",
    answer:
      "On the channel’s balance — channel profile → Statistics → Monetization (Stars). They do not go to your personal Stars balance.",
  },
  {
    question: "When and how is the income withdrawn?",
    answer: `A Stars reward becomes available ${HOLD_DAYS} days after it is received, and the balance must hold at least ${fmt(WITHDRAW_MIN_STARS, "en")} Stars. Withdrawal goes through Fragment in Gram (formerly Toncoin) — you need a Gram wallet. Or you spend the Stars on promoting this channel in Telegram Ads.`,
  },
  {
    question: "How much is 1 Star worth to a creator?",
    answer: `In Telegram’s configuration the withdrawal value is ${fmt(1000, "en")} Stars = $${WITHDRAW_USD_PER_1000} (1 Star ≈ $0.013), and the ad credit is 1 Star = $0.02. Telegram sets the value and may change it.`,
  },
  {
    question: "Where do subscribers get Stars?",
    answer: `Inside Telegram (through the App Store or Google Play), on Fragment for Gram, or in Uzbekistan in som — at StarsPaymee a star costs ${STARS_PER_UNIT_UZS} som (card transfer, balance) or ${STARS_PER_UNIT_GATEWAY_UZS} som (Click, Payme, Uzum, Paynet), with just an @username.`,
  },
  {
    question: "Does StarsPaymee convert a creator’s Stars into som?",
    answer:
      "No. StarsPaymee sells Stars but does not buy Stars from a channel balance. Income is withdrawn only through Telegram’s official route — Fragment, in Gram.",
  },
];

export const post: AeoPost = {
  slug: SLUG,
  category: "Biznes",
  type: "howto",
  datePublished: "2026-10-23",
  dateModified: "2026-10-27",
  keywords: [
    "telegram pullik kanal",
    "pullik kanal ochish",
    "telegram stars obuna",
    "stars obunasi kanal",
    "yopiq kanal pullik obuna",
    "require monthly fee telegram",
    "платный канал telegram stars",
    "подписка за звёзды канал",
    "как сделать платный канал в telegram",
    "telegram paid channel stars subscription",
    "telegram channel monthly fee stars",
  ],
  howToSteps: [
    { name: "Kanalni tayyorlang", text: "Pullik kontent uchun yopiq (private) kanal oching yoki mavjudini tanlang." },
    { name: "Kanal sozlamalari → Kanal turi", text: "Kanal profilida Tahrirlash → Kanal turi (Channel Type) bo‘limiga kiring." },
    { name: "Taklif havolalari → Yangi havola", text: "Taklif havolalarini boshqarish → Yangi havola yaratish." },
    { name: "Oylik to‘lovni yoqing", text: `Require Monthly Fee ni yoqib, narxni Stars’da kiriting — ${SUB_MAX_STARS} gacha.` },
    { name: "Havolani e’lon qiling", text: "Asosiy kanalda, bio’da yoki qadab qo‘yilgan postda joylang." },
  ],
  locales: {
    uz: {
      title: "Telegram Stars obunasi bilan pullik kanal qanday ochiladi (2026)",
      excerpt:
        "Oylik Stars to‘lovli taklif havolasi orqali yopiq kanal: sozlash yo‘li, narx chegarasi, obunachi tomonida nima bo‘lishi, 21 kun va 1000 Stars qoidasi, Fragment orqali yechish va obunachiga Stars’ni so‘mda olish yo‘li.",
      metaTitle: "Telegram Stars obunasi bilan pullik kanal ochish",
      metaDescription:
        "Stars obunali pullik kanal: Require Monthly Fee havolasi, narx 10 000 Stars gacha, 30 kunlik obuna, 21 kun va 1000 Stars qoidasi, Fragment orqali yechish.",
      answerTitle: "Qisqa javob",
      Answer: UzAnswer,
      Body: UzBody,
      ctaHeading: "Obunachilaringizga Stars so‘mda kerakmi?",
      ctaBody: `StarsPaymee’da Stars donasi ${STARS_PER_UNIT_UZS} so‘mdan, 50 dan 10 000 gacha, @username bo‘yicha 5 soniyada. Pullik kanal havolangiz yonida eslatib qo‘ying.`,
      faq: uzFaq,
    },
    ru: {
      title: "Как открыть платный канал в Telegram с подпиской за Stars (2026)",
      excerpt:
        "Закрытый канал по пригласительной ссылке с ежемесячной оплатой в Stars: путь настройки, предел цены, что происходит у подписчика, правило 21 дня и 1000 Stars, вывод через Fragment и где подписчику купить Stars за сумы.",
      metaTitle: "Платный канал в Telegram с подпиской за Stars",
      metaDescription:
        "Платный Telegram-канал за Stars: ссылка Require Monthly Fee, цена до 10 000 Stars, подписка на 30 дней, правило 21 дня и 1000 Stars, вывод через Fragment.",
      answerTitle: "Краткий ответ",
      Answer: RuAnswer,
      Body: RuBody,
      ctaHeading: "Вашим подписчикам нужны Stars за сумы?",
      ctaBody: `В StarsPaymee звезда от ${STARS_PER_UNIT_UZS} сум, от 50 до 10 000, по @username за 5 секунд. Напомните об этом рядом со ссылкой на платный канал.`,
      faq: ruFaq,
    },
    en: {
      title: "How to open a paid Telegram channel with a Stars subscription (2026)",
      excerpt:
        "A private channel behind an invite link with a monthly fee in Stars: the setup path, the price cap, what happens on the subscriber’s side, the 21-day and 1,000-Stars rules, withdrawal through Fragment, and where subscribers buy Stars in som.",
      metaTitle: "Paid Telegram channel with a Stars subscription",
      metaDescription:
        "Paid Telegram channel with Stars: the Require Monthly Fee link, price up to 10,000 Stars, 30-day renewal, the 21-day and 1,000-Stars rules, Fragment withdrawal.",
      answerTitle: "Short answer",
      Answer: EnAnswer,
      Body: EnBody,
      ctaHeading: "Do your subscribers need Stars in som?",
      ctaBody: `At StarsPaymee a star costs from ${STARS_PER_UNIT_UZS} som, 50 to 10,000, by @username within 5 seconds. Mention it next to your paid-channel link.`,
      faq: enFaq,
    },
  },
};
