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
import { PREMIUM_PLANS } from "@/lib/products";
import type { AeoPost } from "@/lib/blog-aeo/types";

const SLUG = "telegram-premium-arziydimi-foydalari";

/**
 * Telegram Premium puliga arziydimi — imkoniyatlar, limitlar, narx hisobi, kimga foydali.
 *
 * QAYTA YOZILDI (2026-10-29): «Premium puliga arziydimi» drafti shu sahifa bilan bir
 * niyatda (slug himoyalangan — lib/blog/protected.ts), yangi URL raqobatlashardi.
 * Slug va anchorlar (#foydalar, #kimga, #qanday) saqlandi. 139 («Premium kerak») —
 * to'liq imkoniyatlar ro'yxati va uzaytirish; bu sahifa — qiymat va narx hisobi,
 * ular bir-biriga havola beradi.
 *
 * FAKTLAR TEKSHIRILGAN (2026-10-29):
 * - telegram.org/faq_premium: imkoniyatlar ro'yxati; «any user can download large 2+ GB
 *   files uploaded by premium users»; @PremiumBot «not subject to fees from Apple or
 *   Google»; belgi barcha obunachilar ismi yonida (tasdiq emas).
 * - core.telegram.org/api/premium: «no download speed limits», cheklovsiz transkripsiya,
 *   real vaqt tarjimasi, «no sponsored messages», «subscription-gated Telegram Business».
 * - core.telegram.org/api/config (standart): kanallar 500/1000, papkalar 10/30, papkada
 *   chat 100/200, qadalgan 5/10, ommaviy havola 10/20, GIF 200/400, sevimli stiker 5/10,
 *   bio 70/140, izoh 1024/4096, fayl qismlari 4000/8000 (2/4 GB). Eski «20 papka» xato edi.
 * - telegram.org/blog/telegram-business (2024-03-31): «all Telegram Business features are
 *   available for free to Premium subscribers».
 * - telegram.org/blog/profile-pics-emoji-translations (2023-02-03): alohida xabar
 *   tarjimasi hamma uchun, butun chat — Premium.
 * StarsPaymee: username orqali faqat 3, 6, 12 oy (bot usdtPremium/price.js) — 1 oylik
 * username oqimida YO'Q, jadvalga kiritilmagan. «Eng arzon» mutlaq da'vosi qilinmagan.
 */

type Locale = "uz" | "ru" | "en";
const fmt = (n: number, locale: Locale) =>
  locale === "en" ? n.toLocaleString("en-US") : n.toLocaleString("ru-RU").replace(/ /g, " ");
const PLANS = PREMIUM_PLANS.filter((p) => p.months !== 1);
const P3 = PLANS.find((p) => p.months === 3)?.priceUzs ?? 0;
const P6 = PLANS.find((p) => p.months === 6)?.priceUzs ?? 0;
const P12 = PLANS.find((p) => p.months === 12)?.priceUzs ?? 0;
const perMonth = (price: number, months: number) => Math.round(price / months);
const perDay = (price: number, months: number) => Math.round(price / ((months * 365) / 12));
const SAVE_6_VS_3 = Math.round((1 - perMonth(P6, 6) / perMonth(P3, 3)) * 100);
const SAVE_12_VS_6X2 = P6 * 2 - P12;

function PlanTable({ locale }: { locale: Locale }) {
  const h = {
    uz: ["Muddat", "Umumiy narx", "Oyiga", "Kuniga"],
    ru: ["Срок", "Общая цена", "В месяц", "В день"],
    en: ["Term", "Total price", "Per month", "Per day"],
  }[locale];
  const unit = { uz: "so‘m", ru: "сум", en: "som" }[locale];
  const mo = { uz: "oy", ru: "мес", en: "months" }[locale];
  return (
    <CompareTable
      headers={h}
      rows={PLANS.map((p) => [
        <strong key="m">{`${p.months} ${mo}`}</strong>,
        `${fmt(p.priceUzs, locale)} ${unit}`,
        `≈ ${fmt(perMonth(p.priceUzs, p.months), locale)} ${unit}`,
        `≈ ${fmt(perDay(p.priceUzs, p.months), locale)} ${unit}`,
      ])}
    />
  );
}

function LimitsTable({ locale }: { locale: Locale }) {
  const c = {
    uz: {
      h: ["Imkoniyat", "Oddiy", "Premium"],
      r: [
        ["Bitta fayl hajmi", "2 GB", "4 GB"],
        ["Kanal va guruhlar", "500", "1 000"],
        ["Chat papkalari", "10", "30"],
        ["Bir papkadagi chatlar", "100", "200"],
        ["Qadalgan chatlar", "5", "10"],
        ["Ommaviy havolalar (username)", "10", "20"],
        ["Saqlangan GIF", "200", "400"],
        ["Sevimli stikerlar", "5", "10"],
        ["Bio uzunligi", "70 belgi", "140 belgi"],
        ["Media izohi", "1 024 belgi", "4 096 belgi"],
      ],
    },
    ru: {
      h: ["Возможность", "Обычный", "Premium"],
      r: [
        ["Размер одного файла", "2 ГБ", "4 ГБ"],
        ["Каналы и группы", "500", "1 000"],
        ["Папки с чатами", "10", "30"],
        ["Чатов в одной папке", "100", "200"],
        ["Закреплённые чаты", "5", "10"],
        ["Публичные ссылки (username)", "10", "20"],
        ["Сохранённые GIF", "200", "400"],
        ["Избранные стикеры", "5", "10"],
        ["Длина био", "70 символов", "140 символов"],
        ["Подпись к медиа", "1 024 символа", "4 096 символов"],
      ],
    },
    en: {
      h: ["Feature", "Regular", "Premium"],
      r: [
        ["Single file size", "2 GB", "4 GB"],
        ["Channels and groups", "500", "1,000"],
        ["Chat folders", "10", "30"],
        ["Chats per folder", "100", "200"],
        ["Pinned chats", "5", "10"],
        ["Public links (usernames)", "10", "20"],
        ["Saved GIFs", "200", "400"],
        ["Favourite stickers", "5", "10"],
        ["Bio length", "70 characters", "140 characters"],
        ["Media caption", "1,024 characters", "4,096 characters"],
      ],
    },
  }[locale];
  return <CompareTable headers={c.h} rows={c.r.map(([a, b, d]) => [<strong key="a">{a}</strong>, b, d])} />;
}

function WhoTable({ locale }: { locale: Locale }) {
  const c = {
    uz: {
      h: ["Foydalanuvchi", "Ko‘proq foyda beradigan imkoniyat"],
      r: [
        ["Talaba va o‘qituvchi", "Katta dars fayllari, tarjima, ovozli xabar matni"],
        ["Frilanser, dizayner, montajchi", "4 GB fayl yuborish, ish chatlarini papkalarga tartiblash"],
        ["Sotuvchi va xizmat ko‘rsatuvchi", "Telegram Business: tezkor javoblar, salomlashuv, ish vaqti"],
        ["Ko‘p kanal kuzatuvchi", "Kengaytirilgan limitlar, reklamasiz kanallar, tarjima"],
        ["Profilini bezashni yoqtiruvchi", "Emoji status, maxsus emoji va reaksiyalar"],
        ["Vaqti-vaqti bilan yozishuvchi", "Bepul versiya yetarli bo‘lishi mumkin"],
      ],
    },
    ru: {
      h: ["Пользователь", "Что даст больше всего"],
      r: [
        ["Студент и преподаватель", "Большие файлы занятий, перевод, расшифровка голосовых"],
        ["Фрилансер, дизайнер, монтажёр", "Файлы до 4 ГБ, рабочие чаты по папкам"],
        ["Продавец и сервис", "Telegram Business: быстрые ответы, приветствие, часы работы"],
        ["Читает много каналов", "Расширенные лимиты, каналы без рекламы, перевод"],
        ["Любит оформлять профиль", "Эмодзи-статус, особые эмодзи и реакции"],
        ["Переписывается изредка", "Бесплатной версии может хватить"],
      ],
    },
    en: {
      h: ["User", "What helps most"],
      r: [
        ["Student or teacher", "Large lesson files, translation, voice-to-text"],
        ["Freelancer, designer, video editor", "4 GB files, work chats sorted into folders"],
        ["Seller or service provider", "Telegram Business: quick replies, greetings, opening hours"],
        ["Follows many channels", "Higher limits, ad-free channels, translation"],
        ["Likes a personalised profile", "Emoji status, custom emoji and reactions"],
        ["Chats only now and then", "The free version may be enough"],
      ],
    },
  }[locale];
  return <CompareTable headers={c.h} rows={c.r.map(([a, b]) => [<strong key="a">{a}</strong>, b])} />;
}

function RouteTable({ locale }: { locale: Locale }) {
  const c = {
    uz: {
      h: ["Usul", "Narx haqida", "O‘zbekistondan"],
      r: [
        ["App Store yoki Google Play", "Do‘kon to‘lovlari narxga kiradi", "Do‘kon hisobi va unga mos karta kerak"],
        ["@PremiumBot", "Apple/Google to‘lovisiz — Telegram FAQ’iga ko‘ra arzonroq", "UzCard/HUMO qabul qilinmaydi"],
        ["Fragment", "Gram’da, kursga bog‘liq", "Kripto hamyon va Gram kerak"],
        ["StarsPaymee", "So‘mda qat’iy narx, 3, 6 yoki 12 oy", "UzCard/HUMO, Click, Payme, Uzum, Paynet; @username"],
      ],
    },
    ru: {
      h: ["Способ", "О цене", "Из Узбекистана"],
      r: [
        ["App Store или Google Play", "В цену входят сборы магазина", "Нужен аккаунт магазина и подходящая карта"],
        ["@PremiumBot", "Без сборов Apple/Google — по Telegram FAQ дешевле", "UzCard/HUMO не принимаются"],
        ["Fragment", "В Gram, зависит от курса", "Нужны криптокошелёк и Gram"],
        ["StarsPaymee", "Фиксированная цена в сумах, 3, 6 или 12 месяцев", "UzCard/HUMO, Click, Payme, Uzum, Paynet; @username"],
      ],
    },
    en: {
      h: ["Route", "On the price", "From Uzbekistan"],
      r: [
        ["App Store or Google Play", "Store fees are built into the price", "Needs a store account and a suitable card"],
        ["@PremiumBot", "No Apple/Google fees — cheaper per the Telegram FAQ", "UzCard/HUMO not accepted"],
        ["Fragment", "In Gram, depends on the rate", "Needs a crypto wallet and Gram"],
        ["StarsPaymee", "Fixed price in som, 3, 6 or 12 months", "UzCard/HUMO, Click, Payme, Uzum, Paynet; @username"],
      ],
    },
  }[locale];
  return <CompareTable headers={c.h} rows={c.r.map(([a, b, d]) => [<strong key="a">{a}</strong>, b, d])} />;
}

const SRC = {
  faq: "https://telegram.org/faq_premium",
  api: "https://core.telegram.org/api/premium",
  config: "https://core.telegram.org/api/config",
  business: "https://telegram.org/blog/telegram-business",
  translate: "https://telegram.org/blog/profile-pics-emoji-translations",
};

/* ---------------- UZ ---------------- */
function UzAnswer() {
  return (
    <p>
      Telegram’dan har kuni faol foydalansangiz — ko‘pincha arziydi: 4 GB gacha fayl, cheklovsiz yuklab olish, ovozli
      xabarni matnga aylantirish, butun chatni real vaqtda tarjima qilish, ikki barobar va undan ko‘p limitlar,
      homiylik xabarlarisiz kanallar va Telegram Business. Faqat yaqinlar bilan vaqti-vaqti bilan yozishsangiz, bepul
      versiya yetadi. StarsPaymee’da Premium username orqali 3, 6 yoki 12 oyga olinadi: 12 oylik — oyiga ≈{" "}
      {fmt(perMonth(P12, 12), "uz")} so‘m, kuniga ≈ {fmt(perDay(P12, 12), "uz")} so‘m.
    </p>
  );
}

function UzBody() {
  return (
    <>
      <Toc
        label="Mundarija"
        items={[
          { href: "#nima", label: "Premium nima va pulini qanday qaytaradi" },
          { href: "#foydalar", label: "Eng foydali 8 imkoniyat" },
          { href: "#limitlar", label: "Limitlar: oddiy va Premium" },
          { href: "#kimga", label: "Kimga arziydi, kimga shart emas" },
          { href: "#narx", label: "Qimmatmi? Narx oyiga va kuniga" },
          { href: "#arzon", label: "Qayerdan olish — usullarni solishtirish" },
          { href: "#qanday", label: "StarsPaymee’da qanday olinadi" },
          { href: "#muddat", label: "Qaysi muddatni tanlash" },
        ]}
      />

      <h2 id="nima">Premium nima va pulini qanday qaytaradi</h2>
      <p>
        Telegram Premium — akkauntga qo‘shimcha imkoniyatlar va kengaytirilgan limitlar beradigan pullik obuna; oddiy
        Telegram’dan foydalanish uchun u shart emas. Uning qiymatini uch yo‘nalishda baholang: <b>vaqtni tejash</b>{" "}
        (matnga aylantirish, tarjima, tez yuklab olish), <b>ko‘proq ishni qulay bajarish</b> (katta fayllar, papkalar,
        Business) va <b>profilni moslashtirish</b> (emoji status, reaksiyalar). Qaysi biri sizga muhim bo‘lsa, obuna
        shunchalik «o‘zini oqlaydi».
      </p>

      <h2 id="foydalar">Eng foydali 8 imkoniyat</h2>
      <InfoGrid>
        <InfoCard emoji="📁" title="1. 4 GB gacha fayl">
          Oddiy akkauntda bitta fayl 2 GB gacha, Premium’da 4 GB. Telegram FAQ’iga ko‘ra Premium yuborgan katta faylni
          istalgan foydalanuvchi yuklab oladi.
        </InfoCard>
        <InfoCard emoji="⚡" title="2. Cheklovsiz yuklab olish">
          Telegram tomonidagi yuklab olish tezligi cheklovi olib tashlanadi. Internetingiz va qurilmangiz tezligini esa
          obuna oshirmaydi.
        </InfoCard>
        <InfoCard emoji="🎙️" title="3. Ovozli va video xabar — matnga">
          Majlisda yoki darsda uzun ovozli xabarni o‘qib olasiz. Aniqlik til va yozuv sifatiga bog‘liq — muhim raqamni
          asl xabardan tekshiring.
        </InfoCard>
        <InfoCard emoji="🌐" title="4. Butun chatni tarjima qilish">
          Alohida xabarni tarjima qilish hamma uchun bepul; Premium’da esa butun chat, guruh va kanal real vaqtda
          tarjima qilinadi — xorijiy kanallarni o‘qish osonlashadi.
        </InfoCard>
        <InfoCard emoji="📚" title="5. Kengaytirilgan limitlar">
          Ko‘proq kanal, papka, qadalgan chat va uzunroq bio — aniq raqamlar quyidagi jadvalda. Papkalarning o‘zi
          bepul versiyada ham bor.
        </InfoCard>
        <InfoCard emoji="🔇" title="6. Homiylik xabarlarisiz">
          Ommaviy kanallardagi Telegram homiylik xabarlari ko‘rinmaydi. Kanal egasi o‘zi joylagan reklama posti esa
          qoladi.
        </InfoCard>
        <InfoCard emoji="✨" title="7. Emoji status va bezaklar">
          Emoji status, maxsus emoji, stiker va reaksiyalar, animatsiyali profil rasmi. Ism yonidagi belgi faqat obuna
          borligini ko‘rsatadi — u rasmiy tasdiq emas.
        </InfoCard>
        <InfoCard emoji="💼" title="8. Telegram Business">
          Tezkor javoblar, salomlashuv va ish vaqtidan tashqari xabarlar, ish vaqti va manzil, chatbot ulash. Telegram:
          hozircha Business imkoniyatlari Premium obunachilariga bepul.
        </InfoCard>
      </InfoGrid>
      <p>
        Bundan tashqari Premium’da Stories qo‘shimchalari (yashirin ko‘rish, ko‘rganlar ro‘yxati), notanishlardan
        xabarlarni cheklash va boshqa imkoniyatlar bor. Ularning to‘liq ro‘yxati —{" "}
        <Link href="/blog/telegram-premium-kerak">Telegram Premium kerakmi</Link> maqolasida.
      </p>

      <h2 id="limitlar">Limitlar: oddiy va Premium</h2>
      <p>Telegram mijoz konfiguratsiyasidagi standart qiymatlar (server ularni o‘zgartirishi mumkin):</p>
      <LimitsTable locale="uz" />
      <p>
        Oddiy foydalanuvchi bu limitlarga ko‘pincha yetmaydi. Lekin bir nechta loyiha, mijozlar, o‘qish va shaxsiy
        yozishmalarni yuritsangiz, ayniqsa papkalar va qadalgan chatlar soni seziladi.
      </p>

      <h2 id="kimga">Kimga arziydi, kimga shart emas</h2>
      <WhoTable locale="uz" />
      <Notice label="Bitta savol">
        O‘zingizdan so‘rang: «Premium’dagi qaysi ikki-uch imkoniyatni har hafta ishlataman?» Javob aniq bo‘lsa — xaridning
        amaliy sababi bor. Faqat yulduzcha uchun olsangiz, bu ham shaxsiy tanlov — shunchaki undan ish unumdorligini
        kutmang.
      </Notice>

      <h2 id="narx">Qimmatmi? Narx oyiga va kuniga</h2>
      <p>
        «Qimmat» degan bahoni umumiy summaga qarab berish qiyin — muddat, oylik va kunlik hisobni birga ko‘ring.
        StarsPaymee’da username orqali xarid narxlari (karta o‘tkazmasi va balans; Click, Payme, Uzum yoki Paynet
        tanlansa, yakuniy summa botda ko‘rsatiladi):
      </p>
      <PlanTable locale="uz" />
      <KeyFacts label="Hisobdan xulosalar">
        <li>
          <b>3 oylik — oyiga eng qimmat:</b> 6 oylik paket oyiga taxminan {SAVE_6_VS_3}% arzon.
        </li>
        <li>
          <b>6 oylikni ikki marta olish</b> {fmt(P6 * 2, "uz")} so‘m, bitta 12 oylik — {fmt(P12, "uz")} so‘m: farq{" "}
          {fmt(SAVE_12_VS_6X2, "uz")} so‘m (narxlar o‘zgarmasa).
        </li>
        <li>
          <b>Kunlik hisob — to‘lov emas:</b> 12 oylik uchun to‘liq summa oldindan to‘lanadi; kuniga ≈{" "}
          {fmt(perDay(P12, 12), "uz")} so‘m — faqat solishtirish uchun.
        </li>
      </KeyFacts>
      <p>
        Narxlar o‘zgarishi mumkin — xarid paytida botdagi tarif va yakuniy summani tekshiring. To‘liq ro‘yxat —{" "}
        <Link href="/premium">Telegram Premium sahifasida</Link>.
      </p>

      <h2 id="arzon">Qayerdan olish — usullarni solishtirish</h2>
      <p>
        Qaysi usul arzonligini bilish uchun bir xil muddatning yakuniy summasini solishtiring. Telegram’ning o‘zida ham
        narx xarid kanaliga qarab farq qiladi: FAQ’ga ko‘ra @PremiumBot orqali obuna Apple yoki Google to‘lovlari
        bo‘lmagani uchun arzonroq. O‘zbekistondan esa narx bilan birga to‘lov qulayligi ham muhim:
      </p>
      <RouteTable locale="uz" />

      <h2 id="qanday">StarsPaymee’da qanday olinadi</h2>
      <Steps>
        <Step title="1. Botni oching">
          <a href="https://t.me/StarsPaymee_bot" target="_blank" rel="noopener noreferrer">
            @StarsPaymee_bot
          </a>{" "}
          → Premium bo‘limi.
        </Step>
        <Step title="2. Muddatni tanlang">3, 6 yoki 12 oy — yuqoridagi jadvalga qarab.</Step>
        <Step title="3. Username’ni kiriting">
          O‘zingizga — «O‘zim» tugmasi; sovg‘a uchun — qabul qiluvchining @username’i.
        </Step>
        <Step title="4. Qabul qiluvchini tekshiring">
          Bot ism va rasmni ko‘rsatadi. Akkauntda Premium allaqachon faol bo‘lsa, buyurtma ochilmaydi — faol obuna ustiga
          muddat qo‘shilmaydi.
        </Step>
        <Step title="5. To‘lang">UzCard/HUMO o‘tkazma, Click, Payme, Uzum yoki Paynet — summa to‘lovdan oldin ko‘rinadi.</Step>
        <Step title="6. Faollashuvni tekshiring">
          Odatda bir necha soniyada yoqiladi; «Buyurtmalarim»da «yetkazildi» holati. Buyurtma raqamini saqlang.
        </Step>
      </Steps>
      <Notice label="Xavfsizlik">
        Username orqali xaridda parol, SMS-kod yoki ikki bosqichli himoya paroli so‘ralmaydi. Faol Premium tugashini
        kutish kerakmi — <Link href="/blog/telegram-premium-muddatini-uzaytirish">Premium muddatini uzaytirish</Link>;
        akkauntni himoyalash — <Link href="/blog/telegram-akkauntni-ogirlashdan-himoya-2fa">xavfsizlik ro‘yxati</Link>.
      </Notice>
      <InlineCta text="Premium kerakmi? 3, 6 yoki 12 oy — so‘mda, username bilan, bir necha soniyada." product={{ kind: "premium", months: 6 }} />

      <h2 id="muddat">Qaysi muddatni tanlash</h2>
      <InfoGrid>
        <InfoCard emoji="🧪" title="Sinab ko‘rish — 3 oy">
          Qaysi imkoniyatlarni haqiqatan ishlatishingizni bilib olasiz. Oyiga eng qimmat variant, lekin oldindan to‘lov
          eng kichik.
        </InfoCard>
        <InfoCard emoji="📅" title="Kundalik ish vositasi — 6 oy">
          Oyiga ≈ {fmt(perMonth(P6, 6), "uz")} so‘m, oldindan to‘lov yillikdan kam.
        </InfoCard>
        <InfoCard emoji="🏆" title="Doimiy foydalanish — 12 oy">
          Oyiga eng past hisob — ≈ {fmt(perMonth(P12, 12), "uz")} so‘m; yil davomida qayta xarid haqida o‘ylamaysiz.
        </InfoCard>
      </InfoGrid>
      <p>
        Tanlovni faqat chegirmaga bog‘lamang: siz ishlatadigan imkoniyat va qulay budjet birinchi o‘rinda. Premium va
        Stars farqi — <Link href="/blog/telegram-stars-yoki-premium">Stars yoki Premium</Link>; boshqa odamga sovg‘a —{" "}
        <Link href="/blog/telegram-premium-sovga-username-orqali">username orqali Premium sovg‘a</Link>.
      </p>

      <Sources
        label="Manbalar"
        items={[
          { href: SRC.faq, label: "Telegram Premium FAQ", note: "imkoniyatlar, 2+ GB fayllarni hamma yuklaydi, @PremiumBot narxi" },
          { href: SRC.api, label: "core.telegram.org/api/premium", note: "yuklab olish cheklovsiz, transkripsiya, tarjima, homiylik xabarlarisiz, Business" },
          { href: SRC.config, label: "core.telegram.org/api/config", note: "oddiy va Premium limitlari (standart qiymatlar)" },
          { href: SRC.business, label: "Telegram Blog — Telegram Business (2024-03-31)", note: "Business imkoniyatlari Premium’ga bepul" },
          { href: SRC.translate, label: "Telegram Blog — Translations (2023-02-03)", note: "xabar tarjimasi hamma uchun, butun chat — Premium" },
          { href: "/premium", label: "StarsPaymee — Telegram Premium", note: "muddatlar va narxlar" },
        ]}
      />
    </>
  );
}

/* ---------------- RU ---------------- */
function RuAnswer() {
  return (
    <p>
      Если вы пользуетесь Telegram каждый день — чаще всего стоит: файлы до 4 ГБ, загрузка без ограничений скорости,
      расшифровка голосовых, перевод целых чатов в реальном времени, лимиты в два раза и выше, каналы без спонсорских
      сообщений и Telegram Business. Если переписываетесь с близкими изредка, хватит бесплатной версии. В StarsPaymee
      Premium оформляется по username на 3, 6 или 12 месяцев: годовой — ≈ {fmt(perMonth(P12, 12), "ru")} сум в месяц, ≈{" "}
      {fmt(perDay(P12, 12), "ru")} сум в день.
    </p>
  );
}

function RuBody() {
  return (
    <>
      <Toc
        label="Содержание"
        items={[
          { href: "#nima", label: "Что такое Premium и как он окупается" },
          { href: "#foydalar", label: "8 самых полезных возможностей" },
          { href: "#limitlar", label: "Лимиты: обычный аккаунт и Premium" },
          { href: "#kimga", label: "Кому стоит, а кому не обязательно" },
          { href: "#narx", label: "Дорого ли? Цена в месяц и в день" },
          { href: "#arzon", label: "Где купить — сравнение способов" },
          { href: "#qanday", label: "Как купить в StarsPaymee" },
          { href: "#muddat", label: "Какой срок выбрать" },
        ]}
      />

      <h2 id="nima">Что такое Premium и как он окупается</h2>
      <p>
        Telegram Premium — платная подписка с дополнительными возможностями и расширенными лимитами; для обычного
        пользования Telegram она не обязательна. Оценивайте её по трём направлениям: <b>экономия времени</b> (расшифровка,
        перевод, быстрая загрузка), <b>больше работы с удобством</b> (большие файлы, папки, Business) и{" "}
        <b>персонализация профиля</b> (эмодзи-статус, реакции). Чем важнее для вас одно из них, тем быстрее подписка
        «окупается».
      </p>

      <h2 id="foydalar">8 самых полезных возможностей</h2>
      <InfoGrid>
        <InfoCard emoji="📁" title="1. Файлы до 4 ГБ">
          В обычном аккаунте один файл — до 2 ГБ, в Premium — до 4 ГБ. По Telegram FAQ большой файл от Premium может
          скачать любой пользователь.
        </InfoCard>
        <InfoCard emoji="⚡" title="2. Загрузка без ограничений">
          Снимается ограничение скорости загрузки со стороны Telegram. Скорость вашего интернета и устройства подписка не
          повышает.
        </InfoCard>
        <InfoCard emoji="🎙️" title="3. Голосовые и кружки — в текст">
          На встрече или занятии длинное голосовое можно прочитать. Точность зависит от языка и качества записи — важные
          цифры сверяйте с оригиналом.
        </InfoCard>
        <InfoCard emoji="🌐" title="4. Перевод целого чата">
          Перевод отдельного сообщения бесплатен для всех; в Premium целый чат, группа или канал переводится в реальном
          времени — читать иностранные каналы проще.
        </InfoCard>
        <InfoCard emoji="📚" title="5. Расширенные лимиты">
          Больше каналов, папок, закреплённых чатов и длиннее био — точные цифры в таблице ниже. Сами папки есть и в
          бесплатной версии.
        </InfoCard>
        <InfoCard emoji="🔇" title="6. Без спонсорских сообщений">
          Спонсорские сообщения Telegram в публичных каналах не показываются. Рекламный пост, который опубликовал сам
          владелец канала, остаётся.
        </InfoCard>
        <InfoCard emoji="✨" title="7. Эмодзи-статус и оформление">
          Эмодзи-статус, особые эмодзи, стикеры и реакции, анимированное фото профиля. Значок у имени лишь показывает
          подписку — это не официальная верификация.
        </InfoCard>
        <InfoCard emoji="💼" title="8. Telegram Business">
          Быстрые ответы, приветствие и автоответ вне рабочего времени, часы работы и адрес, подключение чат-бота. Telegram:
          пока функции Business бесплатны для подписчиков Premium.
        </InfoCard>
      </InfoGrid>
      <p>
        Кроме того, в Premium есть дополнения для историй (скрытый просмотр, список просмотревших), ограничение сообщений
        от незнакомцев и другие возможности. Полный список —{" "}
        <Link href="/blog/telegram-premium-kerak">в статье «Нужен ли Telegram Premium»</Link>.
      </p>

      <h2 id="limitlar">Лимиты: обычный аккаунт и Premium</h2>
      <p>Значения по умолчанию из клиентской конфигурации Telegram (сервер может их менять):</p>
      <LimitsTable locale="ru" />
      <p>
        Обычный пользователь часто до этих лимитов не доходит. Но если вы ведёте несколько проектов, клиентов, учёбу и
        личную переписку, особенно заметны число папок и закреплённых чатов.
      </p>

      <h2 id="kimga">Кому стоит, а кому не обязательно</h2>
      <WhoTable locale="ru" />
      <Notice label="Один вопрос">
        Спросите себя: «Какие две-три возможности Premium я буду использовать каждую неделю?» Если ответ чёткий — у покупки
        есть практическая причина. Если берёте ради звёздочки — это тоже личный выбор, просто не ждите от неё роста
        продуктивности.
      </Notice>

      <h2 id="narx">Дорого ли? Цена в месяц и в день</h2>
      <p>
        Оценивать «дорого» по общей сумме сложно — смотрите на срок, цену в месяц и в день вместе. Цены покупки по
        username в StarsPaymee (перевод на карту и баланс; при выборе Click, Payme, Uzum или Paynet итоговая сумма
        показывается в боте):
      </p>
      <PlanTable locale="ru" />
      <KeyFacts label="Выводы из расчёта">
        <li>
          <b>3 месяца — самые дорогие в месяц:</b> 6-месячный пакет в месяц дешевле примерно на {SAVE_6_VS_3}%.
        </li>
        <li>
          <b>Два раза по 6 месяцев</b> — {fmt(P6 * 2, "ru")} сум, один годовой — {fmt(P12, "ru")} сум: разница{" "}
          {fmt(SAVE_12_VS_6X2, "ru")} сум (если цены не изменятся).
        </li>
        <li>
          <b>Цена в день — не платёж:</b> за год платится вся сумма сразу; ≈ {fmt(perDay(P12, 12), "ru")} сум в день — только
          для сравнения.
        </li>
      </KeyFacts>
      <p>
        Цены могут меняться — при покупке проверяйте тариф и итоговую сумму в боте. Полный список —{" "}
        <Link href="/premium">на странице Telegram Premium</Link>.
      </p>

      <h2 id="arzon">Где купить — сравнение способов</h2>
      <p>
        Чтобы понять, что дешевле, сравнивайте итоговую сумму за один и тот же срок. Даже у Telegram цена зависит от
        канала покупки: по FAQ подписка через @PremiumBot дешевле, потому что нет сборов Apple или Google. А из Узбекистана
        вместе с ценой важно и удобство оплаты:
      </p>
      <RouteTable locale="ru" />

      <h2 id="qanday">Как купить в StarsPaymee</h2>
      <Steps>
        <Step title="1. Откройте бота">
          <a href="https://t.me/StarsPaymee_bot" target="_blank" rel="noopener noreferrer">
            @StarsPaymee_bot
          </a>{" "}
          → раздел Premium.
        </Step>
        <Step title="2. Выберите срок">3, 6 или 12 месяцев — по таблице выше.</Step>
        <Step title="3. Введите username">
          Себе — кнопка «Я»; в подарок — @username получателя.
        </Step>
        <Step title="4. Проверьте получателя">
          Бот показывает имя и фото. Если на аккаунте Premium уже активен, заказ не откроется — срок поверх активной
          подписки не добавляется.
        </Step>
        <Step title="5. Оплатите">Перевод UzCard/HUMO, Click, Payme, Uzum или Paynet — сумма видна до оплаты.</Step>
        <Step title="6. Проверьте активацию">
          Обычно включается за несколько секунд; в «Моих заказах» — статус «доставлено». Сохраните номер заказа.
        </Step>
      </Steps>
      <Notice label="Безопасность">
        При покупке по username не нужны пароль, SMS-код или пароль двухэтапной проверки. Нужно ли ждать окончания
        активного Premium — <Link href="/blog/telegram-premium-muddatini-uzaytirish">продление Premium</Link>; защита
        аккаунта — <Link href="/blog/telegram-akkauntni-ogirlashdan-himoya-2fa">чек-лист безопасности</Link>.
      </Notice>
      <InlineCta text="Нужен Premium? 3, 6 или 12 месяцев — в сумах, по username, за несколько секунд." product={{ kind: "premium", months: 6 }} />

      <h2 id="muddat">Какой срок выбрать</h2>
      <InfoGrid>
        <InfoCard emoji="🧪" title="Попробовать — 3 месяца">
          Поймёте, какими возможностями пользуетесь на самом деле. Самый дорогой вариант в месяц, но самая маленькая сумма
          сразу.
        </InfoCard>
        <InfoCard emoji="📅" title="Ежедневный рабочий инструмент — 6 месяцев">
          ≈ {fmt(perMonth(P6, 6), "ru")} сум в месяц, а сумма сразу меньше годовой.
        </InfoCard>
        <InfoCard emoji="🏆" title="Постоянно — 12 месяцев">
          Самая низкая цена в месяц — ≈ {fmt(perMonth(P12, 12), "ru")} сум; весь год не думаете о повторной покупке.
        </InfoCard>
      </InfoGrid>
      <p>
        Не привязывайте выбор только к скидке: на первом месте — возможности, которыми вы пользуетесь, и удобный бюджет.
        Разница Premium и Stars — <Link href="/blog/telegram-stars-yoki-premium">Stars или Premium</Link>; подарок другому
        человеку — <Link href="/blog/telegram-premium-sovga-username-orqali">Premium в подарок по username</Link>.
      </p>

      <Sources
        label="Источники"
        items={[
          { href: SRC.faq, label: "Telegram Premium FAQ", note: "возможности, файлы 2+ ГБ скачивают все, цена в @PremiumBot" },
          { href: SRC.api, label: "core.telegram.org/api/premium", note: "загрузка без ограничений, расшифровка, перевод, без спонсорских сообщений, Business" },
          { href: SRC.config, label: "core.telegram.org/api/config", note: "лимиты обычного аккаунта и Premium (значения по умолчанию)" },
          { href: SRC.business, label: "Telegram Blog — Telegram Business (2024-03-31)", note: "функции Business бесплатны для Premium" },
          { href: SRC.translate, label: "Telegram Blog — Translations (2023-02-03)", note: "перевод сообщений для всех, целых чатов — Premium" },
          { href: "/premium", label: "StarsPaymee — Telegram Premium", note: "сроки и цены" },
        ]}
      />
    </>
  );
}

/* ---------------- EN ---------------- */
function EnAnswer() {
  return (
    <p>
      If you use Telegram every day, it usually is: files up to 4 GB, downloads without speed limits, voice-to-text,
      real-time translation of whole chats, limits doubled and more, channels without sponsored messages, and Telegram
      Business. If you only chat with family now and then, the free version is enough. At StarsPaymee, Premium is bought
      by username for 3, 6 or 12 months: the yearly plan works out at ≈ {fmt(perMonth(P12, 12), "en")} som a month, ≈{" "}
      {fmt(perDay(P12, 12), "en")} som a day.
    </p>
  );
}

function EnBody() {
  return (
    <>
      <Toc
        label="Contents"
        items={[
          { href: "#nima", label: "What Premium is and how it pays off" },
          { href: "#foydalar", label: "The 8 most useful features" },
          { href: "#limitlar", label: "Limits: regular vs Premium" },
          { href: "#kimga", label: "Who it suits, and who can skip it" },
          { href: "#narx", label: "Is it expensive? Price per month and per day" },
          { href: "#arzon", label: "Where to buy — comparing the routes" },
          { href: "#qanday", label: "How to buy at StarsPaymee" },
          { href: "#muddat", label: "Which term to choose" },
        ]}
      />

      <h2 id="nima">What Premium is and how it pays off</h2>
      <p>
        Telegram Premium is a paid subscription with extra features and higher limits; you do not need it to use Telegram
        normally. Judge its value in three areas: <b>saving time</b> (transcription, translation, fast downloads),{" "}
        <b>getting more done comfortably</b> (large files, folders, Business) and <b>personalising your profile</b> (emoji
        status, reactions). The more one of these matters to you, the faster the subscription “pays for itself”.
      </p>

      <h2 id="foydalar">The 8 most useful features</h2>
      <InfoGrid>
        <InfoCard emoji="📁" title="1. Files up to 4 GB">
          A regular account sends files up to 2 GB, Premium up to 4 GB. Per the Telegram FAQ, any user can download a large
          file sent by a Premium user.
        </InfoCard>
        <InfoCard emoji="⚡" title="2. Downloads without limits">
          Telegram’s download speed limit is lifted. The subscription does not make your internet connection or device
          faster.
        </InfoCard>
        <InfoCard emoji="🎙️" title="3. Voice and video messages to text">
          Read a long voice message in a meeting or class. Accuracy depends on the language and recording quality — check
          important numbers against the original.
        </InfoCard>
        <InfoCard emoji="🌐" title="4. Translate a whole chat">
          Translating a single message is free for everyone; with Premium a whole chat, group or channel is translated in
          real time — foreign channels become easy to follow.
        </InfoCard>
        <InfoCard emoji="📚" title="5. Higher limits">
          More channels, folders, pinned chats and a longer bio — the exact numbers are in the table below. Folders
          themselves exist in the free version too.
        </InfoCard>
        <InfoCard emoji="🔇" title="6. No sponsored messages">
          Telegram’s sponsored messages in public channels are hidden. An ad post the channel owner published themselves
          stays.
        </InfoCard>
        <InfoCard emoji="✨" title="7. Emoji status and styling">
          Emoji status, custom emoji, stickers and reactions, an animated profile picture. The badge next to your name only
          shows the subscription — it is not official verification.
        </InfoCard>
        <InfoCard emoji="💼" title="8. Telegram Business">
          Quick replies, greeting and away messages, opening hours and location, connecting a chatbot. Telegram: for the
          moment, Business features are free for Premium subscribers.
        </InfoCard>
      </InfoGrid>
      <p>
        Premium also adds story extras (stealth mode, the viewers list), limiting messages from strangers and more. The
        full list is in <Link href="/blog/telegram-premium-kerak">do you need Telegram Premium</Link>.
      </p>

      <h2 id="limitlar">Limits: regular vs Premium</h2>
      <p>Default values from Telegram’s client configuration (the server may change them):</p>
      <LimitsTable locale="en" />
      <p>
        A typical user often never reaches these limits. But if you juggle several projects, clients, studies and personal
        chats, the number of folders and pinned chats is what you notice most.
      </p>

      <h2 id="kimga">Who it suits, and who can skip it</h2>
      <WhoTable locale="en" />
      <Notice label="One question">
        Ask yourself: “Which two or three Premium features will I use every week?” If the answer is clear, the purchase has
        a practical reason. If you are buying it for the star, that is a personal choice too — just do not expect a
        productivity boost from it.
      </Notice>

      <h2 id="narx">Is it expensive? Price per month and per day</h2>
      <p>
        “Expensive” is hard to judge from the total alone — look at the term, the monthly and the daily cost together.
        StarsPaymee prices for buying by username (card transfer and balance; with Click, Payme, Uzum or Paynet the final
        amount is shown in the bot):
      </p>
      <PlanTable locale="en" />
      <KeyFacts label="What the numbers say">
        <li>
          <b>3 months is the dearest per month:</b> the 6-month plan is about {SAVE_6_VS_3}% cheaper per month.
        </li>
        <li>
          <b>Two 6-month plans</b> cost {fmt(P6 * 2, "en")} som, one yearly plan {fmt(P12, "en")} som: a difference of{" "}
          {fmt(SAVE_12_VS_6X2, "en")} som (if prices do not change).
        </li>
        <li>
          <b>A daily figure is not a payment:</b> the yearly plan is paid in full up front; ≈ {fmt(perDay(P12, 12), "en")}{" "}
          som a day is only for comparison.
        </li>
      </KeyFacts>
      <p>
        Prices can change — check the plan and the final amount in the bot when you buy. The full list is on the{" "}
        <Link href="/premium">Telegram Premium page</Link>.
      </p>

      <h2 id="arzon">Where to buy — comparing the routes</h2>
      <p>
        To see which route is cheaper, compare the final amount for the same term. Even Telegram’s own price depends on the
        channel: per the FAQ, a subscription through @PremiumBot is cheaper because there are no Apple or Google fees. From
        Uzbekistan, ease of payment matters as much as the price:
      </p>
      <RouteTable locale="en" />

      <h2 id="qanday">How to buy at StarsPaymee</h2>
      <Steps>
        <Step title="1. Open the bot">
          <a href="https://t.me/StarsPaymee_bot" target="_blank" rel="noopener noreferrer">
            @StarsPaymee_bot
          </a>{" "}
          → the Premium section.
        </Step>
        <Step title="2. Choose the term">3, 6 or 12 months — see the table above.</Step>
        <Step title="3. Enter the username">For yourself — the “Me” button; as a gift — the recipient’s @username.</Step>
        <Step title="4. Check the recipient">
          The bot shows the name and photo. If Premium is already active on the account, the order will not open — a term
          is not added on top of an active subscription.
        </Step>
        <Step title="5. Pay">UzCard/HUMO transfer, Click, Payme, Uzum or Paynet — the total shows before you pay.</Step>
        <Step title="6. Check activation">
          It usually switches on within seconds; “My orders” shows “delivered”. Keep the order number.
        </Step>
      </Steps>
      <Notice label="Security">
        Buying by username needs no password, SMS code or two-step verification password. Whether you must wait for an
        active Premium to end — <Link href="/blog/telegram-premium-muddatini-uzaytirish">extending Premium</Link>;
        protecting your account — <Link href="/blog/telegram-akkauntni-ogirlashdan-himoya-2fa">the security checklist</Link>.
      </Notice>
      <InlineCta text="Need Premium? 3, 6 or 12 months — in som, by username, within seconds." product={{ kind: "premium", months: 6 }} />

      <h2 id="muddat">Which term to choose</h2>
      <InfoGrid>
        <InfoCard emoji="🧪" title="Trying it out — 3 months">
          You learn which features you actually use. The dearest per month, but the smallest payment up front.
        </InfoCard>
        <InfoCard emoji="📅" title="A daily work tool — 6 months">
          ≈ {fmt(perMonth(P6, 6), "en")} som a month, and less up front than the yearly plan.
        </InfoCard>
        <InfoCard emoji="🏆" title="Constant use — 12 months">
          The lowest monthly cost — ≈ {fmt(perMonth(P12, 12), "en")} som; no repeat purchases for a year.
        </InfoCard>
      </InfoGrid>
      <p>
        Do not choose on the discount alone: the features you use and a comfortable budget come first. Premium vs Stars —{" "}
        <Link href="/blog/telegram-stars-yoki-premium">Stars or Premium</Link>; gifting it to someone —{" "}
        <Link href="/blog/telegram-premium-sovga-username-orqali">Premium as a gift by username</Link>.
      </p>

      <Sources
        label="Sources"
        items={[
          { href: SRC.faq, label: "Telegram Premium FAQ", note: "features, anyone can download 2+ GB files, @PremiumBot pricing" },
          { href: SRC.api, label: "core.telegram.org/api/premium", note: "no download limits, transcription, translation, no sponsored messages, Business" },
          { href: SRC.config, label: "core.telegram.org/api/config", note: "regular and Premium limits (default values)" },
          { href: SRC.business, label: "Telegram Blog — Telegram Business (2024-03-31)", note: "Business features free for Premium" },
          { href: SRC.translate, label: "Telegram Blog — Translations (2023-02-03)", note: "message translation for all, whole chats — Premium" },
          { href: "/premium", label: "StarsPaymee — Telegram Premium", note: "terms and prices" },
        ]}
      />
    </>
  );
}

const faqUz = [
  {
    question: "Telegram Premium puliga arziydimi?",
    answer:
      "Telegram’dan har kuni faol foydalansangiz — ko‘pincha ha: katta fayllar, tarjima, matnga aylantirish, limitlar va Business vaqtni tejaydi. Faqat vaqti-vaqti bilan yozishsangiz, bepul versiya yetadi.",
  },
  {
    question: "Premium olmasam, oddiy Telegram ishlaydimi?",
    answer: "Ha. Yozishmalar, qo‘ng‘iroqlar va asosiy funksiyalar bepul. Premium — qo‘shimcha qulayliklar uchun ixtiyoriy obuna.",
  },
  {
    question: "Premium faqat yulduzcha uchunmi?",
    answer:
      "Yo‘q. 4 GB gacha fayl, cheklovsiz yuklab olish, ovozli xabarni matnga aylantirish, butun chatni tarjima qilish, kengaytirilgan limitlar va Telegram Business ham bor.",
  },
  {
    question: "Premium internetni tezlashtiradimi?",
    answer: "Yo‘q. U Telegram tomonidagi yuklab olish tezligi cheklovini olib tashlaydi, lekin internet yoki qurilma tezligini oshirmaydi.",
  },
  {
    question: "Premium bilan barcha reklama yo‘qoladimi?",
    answer: "Telegram’ning homiylik xabarlari yashiriladi. Kanal egasining o‘zi oddiy post sifatida joylagan reklamasi qoladi.",
  },
  {
    question: "Premium yuborgan 4 GB faylni oddiy foydalanuvchi ocha oladimi?",
    answer: "Ha. Telegram FAQ’iga ko‘ra Premium foydalanuvchi yuborgan katta faylni istalgan foydalanuvchi yuklab oladi.",
  },
  {
    question: "Telegram Business uchun alohida to‘lash kerakmi?",
    answer: "Hozircha yo‘q: Telegram e’loniga ko‘ra barcha Business imkoniyatlari Premium obunachilariga bepul.",
  },
  {
    question: "Eng arzon oylik hisob qaysi tarifda?",
    answer: `12 oylikda — oyiga ≈ ${fmt(perMonth(P12, 12), "uz")} so‘m. Bu bo‘lib to‘lash emas: ${fmt(P12, "uz")} so‘m oldindan to‘lanadi.`,
  },
  {
    question: "StarsPaymee orqali olish uchun SMS-kod kerakmi?",
    answer: "Username orqali xaridda yo‘q — parol, SMS-kod yoki 2FA paroli so‘ralmaydi. Faqat to‘g‘ri @username muhim.",
  },
  {
    question: "Premium’ni boshqa odamga olib bersam bo‘ladimi?",
    answer:
      "Ha, uning @username’i bilan. Lekin unda Premium allaqachon faol bo‘lsa, bot buyurtmani ochmaydi — obunasi tugashini kuting yoki boshqa sovg‘a tanlang.",
  },
];

const faqRu = [
  {
    question: "Стоит ли Telegram Premium своих денег?",
    answer:
      "Если пользуетесь Telegram каждый день — чаще всего да: большие файлы, перевод, расшифровка, лимиты и Business экономят время. Если переписываетесь изредка, хватит бесплатной версии.",
  },
  {
    question: "Будет ли работать обычный Telegram без Premium?",
    answer: "Да. Переписка, звонки и основные функции бесплатны. Premium — необязательная подписка для дополнительных удобств.",
  },
  {
    question: "Premium — только ради звёздочки?",
    answer: "Нет. Есть файлы до 4 ГБ, загрузка без ограничений, расшифровка голосовых, перевод целых чатов, расширенные лимиты и Telegram Business.",
  },
  {
    question: "Ускоряет ли Premium интернет?",
    answer: "Нет. Он снимает ограничение скорости загрузки со стороны Telegram, но не ускоряет интернет или устройство.",
  },
  {
    question: "Пропадает ли с Premium вся реклама?",
    answer: "Скрываются спонсорские сообщения Telegram. Реклама, которую владелец канала опубликовал обычным постом, остаётся.",
  },
  {
    question: "Сможет ли обычный пользователь открыть файл 4 ГБ от Premium?",
    answer: "Да. По Telegram FAQ большой файл, отправленный Premium-пользователем, может скачать любой пользователь.",
  },
  {
    question: "Нужно ли отдельно платить за Telegram Business?",
    answer: "Пока нет: по объявлению Telegram все функции Business бесплатны для подписчиков Premium.",
  },
  {
    question: "На каком тарифе самая низкая цена в месяц?",
    answer: `На годовом — ≈ ${fmt(perMonth(P12, 12), "ru")} сум в месяц. Это не рассрочка: ${fmt(P12, "ru")} сум платится сразу.`,
  },
  {
    question: "Нужен ли SMS-код для покупки через StarsPaymee?",
    answer: "При покупке по username — нет: пароль, SMS-код и пароль 2FA не запрашиваются. Важен только верный @username.",
  },
  {
    question: "Можно ли купить Premium другому человеку?",
    answer:
      "Да, по его @username. Но если у него уже активен Premium, бот не откроет заказ — дождитесь окончания подписки или выберите другой подарок.",
  },
];

const faqEn = [
  {
    question: "Is Telegram Premium worth the money?",
    answer:
      "If you use Telegram every day, usually yes: large files, translation, transcription, limits and Business save time. If you chat only now and then, the free version is enough.",
  },
  {
    question: "Does regular Telegram work without Premium?",
    answer: "Yes. Messaging, calls and the core features are free. Premium is an optional subscription for extra convenience.",
  },
  {
    question: "Is Premium just for the star badge?",
    answer: "No. It also gives files up to 4 GB, downloads without limits, voice-to-text, whole-chat translation, higher limits and Telegram Business.",
  },
  {
    question: "Does Premium make my internet faster?",
    answer: "No. It lifts Telegram’s own download speed limit, but it does not speed up your connection or device.",
  },
  {
    question: "Does Premium remove all ads?",
    answer: "It hides Telegram’s sponsored messages. An ad the channel owner posted as a regular post stays.",
  },
  {
    question: "Can a regular user open a 4 GB file sent by a Premium user?",
    answer: "Yes. According to the Telegram FAQ, any user can download a large file sent by a Premium user.",
  },
  {
    question: "Do I pay separately for Telegram Business?",
    answer: "Not for now: according to Telegram’s announcement, all Business features are free for Premium subscribers.",
  },
  {
    question: "Which plan has the lowest monthly cost?",
    answer: `The yearly plan — ≈ ${fmt(perMonth(P12, 12), "en")} som a month. It is not an instalment plan: ${fmt(P12, "en")} som is paid up front.`,
  },
  {
    question: "Do I need an SMS code to buy through StarsPaymee?",
    answer: "Not when buying by username — no password, SMS code or 2FA password is requested. Only the correct @username matters.",
  },
  {
    question: "Can I buy Premium for someone else?",
    answer:
      "Yes, with their @username. But if they already have an active Premium, the bot will not open the order — wait for their subscription to end or choose another gift.",
  },
];

export const post: AeoPost = {
  slug: SLUG,
  category: "Premium",
  type: "info",
  datePublished: "2026-06-14",
  dateModified: "2026-10-29",
  keywords: [
    "telegram premium foydalari",
    "telegram premium nima beradi",
    "telegram premium arziydimi",
    "telegram premium puliga arziydimi",
    "telegram premium qimmatmi",
    "telegram premium imkoniyatlari",
    "telegram premium narxi oyiga",
    "стоит ли покупать telegram premium",
    "что даёт telegram premium",
    "telegram premium worth it",
    "is telegram premium worth it",
  ],
  howToSteps: [
    { name: "Botni oching", text: "@StarsPaymee_bot → Premium bo‘limi." },
    { name: "Muddatni tanlang", text: "3, 6 yoki 12 oy." },
    { name: "Username’ni kiriting", text: "O‘zingizga «O‘zim», sovg‘a uchun qabul qiluvchining @username’i." },
    { name: "Qabul qiluvchini tekshiring", text: "Bot ism va rasmni ko‘rsatadi; faol Premium bo‘lsa buyurtma ochilmaydi." },
    { name: "To‘lang", text: "UzCard/HUMO o‘tkazma, Click, Payme, Uzum yoki Paynet." },
    { name: "Faollashuvni tekshiring", text: "Bir necha soniyada yoqiladi; «Buyurtmalarim»da «yetkazildi»." },
  ],
  locales: {
    uz: {
      title: "Telegram Premium puliga arziydimi? Imkoniyatlar, narx va kimga foydali (2026)",
      excerpt:
        "Telegram Premium nima beradi va qimmatmi: eng foydali 8 imkoniyat, oddiy va Premium limitlari jadvali, kimga arziydi, narx oyiga va kuniga, xarid usullarini solishtirish va StarsPaymee’da username orqali olish.",
      metaTitle: "Telegram Premium puliga arziydimi? Imkoniyatlar va narx",
      metaDescription: "Telegram Premium nima beradi, kimga foydali va qimmatmi? Imkoniyatlar, so‘mdagi narxlar va StarsPaymee orqali qulay xarid qilish yo‘lini bilib oling.",
      answerTitle: "Qisqa javob",
      Answer: UzAnswer,
      Body: UzBody,
      ctaHeading: "Arziydi deb topdingizmi? So‘mda oling",
      ctaBody: "StarsPaymee’da Telegram Premium 3, 6 yoki 12 oyga, @username bilan, parol va kodsiz — bir necha soniyada.",
      faq: faqUz,
    },
    ru: {
      title: "Стоит ли Telegram Premium своих денег? Возможности, цена и кому полезен (2026)",
      excerpt:
        "Что даёт Telegram Premium и дорого ли это: 8 самых полезных возможностей, таблица лимитов, кому стоит, цена в месяц и в день, сравнение способов покупки и покупка по username в StarsPaymee.",
      metaTitle: "Стоит ли Telegram Premium денег? Возможности и цена",
      metaDescription: "Что даёт Telegram Premium, кому он полезен и дорого ли это: возможности, лимиты, цены в сумах в месяц и в день и как купить через StarsPaymee по username.",
      answerTitle: "Краткий ответ",
      Answer: RuAnswer,
      Body: RuBody,
      ctaHeading: "Решили, что стоит? Купите за сумы",
      ctaBody: "В StarsPaymee Telegram Premium на 3, 6 или 12 месяцев, по @username, без пароля и кода — за несколько секунд.",
      faq: faqRu,
    },
    en: {
      title: "Is Telegram Premium worth the money? Features, price and who it suits (2026)",
      excerpt:
        "What Telegram Premium gives you and whether it is expensive: the 8 most useful features, a limits table, who it suits, the price per month and per day, comparing purchase routes and buying by username at StarsPaymee.",
      metaTitle: "Is Telegram Premium worth it? Features and price",
      metaDescription: "What Telegram Premium gives you, who it suits and whether it is expensive: features, limits, prices in som per month and per day, and buying via StarsPaymee.",
      answerTitle: "Short answer",
      Answer: EnAnswer,
      Body: EnBody,
      ctaHeading: "Decided it is worth it? Buy it in som",
      ctaBody: "At StarsPaymee, Telegram Premium for 3, 6 or 12 months, by @username, no password or code — within seconds.",
      faq: faqEn,
    },
  },
};
